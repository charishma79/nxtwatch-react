import {Component} from 'react'

import Loader from 'react-loader-spinner'

import Cookies from 'js-cookie'

import {AiOutlineSearch} from 'react-icons/ai'

import WatchContext from '../../context/WatchContext'

import VideoCard from '../VideoCard'

import {
  VideosContainer,
  SearchInputContainer,
  LoaderContainer,
  SearchInput,
  UnorderedList,
  SearchButton,
  FailureImg,
  FailureContainer,
  FailureHeading,
  FailureText,
  RetryButton,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  failure: 'FAILURE',
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
}
class Videos extends Component {
  state = {
    searchInput: '',
    apiStatus: apiStatusConstants.initial,
    videoData: [],
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const videosUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(videosUrl, options)
    if (response.ok) {
      const data = await response.json()
      console.log(data.videos)
      const updatedData = data.videos.map(eachItem => ({
        channel: {
          name: eachItem.channel.name,
          profileImageUrl: eachItem.channel.profile_image_url,
        },
        id: eachItem.id,
        publishedAt: eachItem.published_at,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
      }))
      this.setState({
        videoData: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onEnterKey = event => {
    if (event.key === 'Enter') {
      this.getVideos()
    }
  }

  render() {
    const {searchInput} = this.state
    return (
      <WatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const color = isDarkTheme ? '#e2e8f0' : ' #383838'

          const bgColor = isDarkTheme ? ' #383838' : '#cccccc'

          const textColor = isDarkTheme ? '#f4f4f4' : ' #212121'

          const failureImage = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

          const failureTextColor = isDarkTheme ? '#94a3b8' : ' #64748b'

          const renderVideoLoaderView = () => (
            <LoaderContainer data-testid="loader">
              <Loader
                type="ThreeDots"
                color=" #cbd5e1"
                height="50"
                width="50"
              />
            </LoaderContainer>
          )

          const renderVideosFailureView = () => (
            <FailureContainer>
              <FailureImg src={failureImage} alt="failure view" />
              <FailureHeading color={textColor}>
                Oops! Something Went Wrong
              </FailureHeading>
              <FailureText text={failureTextColor}>
                We are having some trouble to complete your request. <br />
                Please try again.
              </FailureText>
              <RetryButton type="button" onClick={this.getVideos}>
                Retry
              </RetryButton>
            </FailureContainer>
          )

          const renderVideosSuccessView = () => {
            const {videoData} = this.state
            const videosListLength = videoData.length > 0
            console.log(videosListLength)
            return (
              <>
                {videosListLength ? (
                  <UnorderedList>
                    {videoData.map(eachData => (
                      <VideoCard videoDetails={eachData} key={eachData.id} />
                    ))}
                  </UnorderedList>
                ) : (
                  <FailureContainer>
                    <FailureImg
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                      alt="no videos"
                    />
                    <FailureHeading color={textColor}>
                      No Search results found
                    </FailureHeading>
                    <FailureText text={failureTextColor}>
                      Try different key words or remove search filter
                    </FailureText>
                    <RetryButton type="button" onClick={this.getVideos}>
                      Retry
                    </RetryButton>
                  </FailureContainer>
                )}
              </>
            )
          }

          const renderVideosDetails = () => {
            const {apiStatus} = this.state
            switch (apiStatus) {
              case apiStatusConstants.inProgress:
                return renderVideoLoaderView()
              case apiStatusConstants.failure:
                return renderVideosFailureView()
              case apiStatusConstants.success:
                return renderVideosSuccessView()
              default:
                return null
            }
          }

          return (
            <VideosContainer>
              <SearchInputContainer>
                <SearchInput
                  type="search"
                  placeholder="Search"
                  color={color}
                  value={searchInput}
                  onChange={this.onChangeSearchInput}
                  onKeyDown={this.onEnterKey}
                />
                <SearchButton
                  type="button"
                  bgColor={bgColor}
                  color={color}
                  data-testid="searchButton"
                  onClick={this.getVideos}
                >
                  <AiOutlineSearch size={16} />
                </SearchButton>
              </SearchInputContainer>
              {renderVideosDetails()}
            </VideosContainer>
          )
        }}
      </WatchContext.Consumer>
    )
  }
}

export default Videos
