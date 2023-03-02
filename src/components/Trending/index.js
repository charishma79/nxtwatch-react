import {Component} from 'react'

import Cookies from 'js-cookie'

import {HiFire} from 'react-icons/hi'

import Loader from 'react-loader-spinner'

import WatchContext from '../../context/WatchContext'

import SideBar from '../SideBar'
import Header from '../Header'

import SavedVideoCard from '../SavedVideoCard'

import {
  VideoItemsContainer,
  VideoSideContainer,
  MainVideoContainer,
  TrendingContainer,
  SavedHeading,
  FireButton,
  LoaderContainer,
  FailureContainer,
  FailureHeading,
  FailureImg,
  FailureText,
  RetryButton,
  TrendingListContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  failure: 'FAILURE',
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {apiStatus: apiStatusConstants.initial, trendingVideoDetails: []}

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')

    const trendingUrl = 'https://apis.ccbp.in/videos/trending'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(trendingUrl, options)
    if (response.ok === true) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.videos.map(eachItem => ({
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
        trendingVideoDetails: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  render() {
    return (
      <WatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const trendingBgColor = isDarkTheme ? '#0f0f0f ' : '#f9f9f9'

          const saveTextColor = isDarkTheme ? '#ffffff' : '#1e293b'

          const buttonColor = isDarkTheme ? '#0f0f0f' : '#d7dfe9'

          const trendBgColor = !isDarkTheme ? '#f1f5f9' : '#181818'

          const textColor = isDarkTheme ? '#f4f4f4' : ' #212121'

          const failureImage = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

          const failureTextColor = isDarkTheme ? '#94a3b8' : ' #64748b'

          const renderTrendingSuccessView = () => {
            const {trendingVideoDetails} = this.state
            return (
              <>
                <TrendingContainer trendColor={trendBgColor}>
                  <FireButton type="button" buttonBgColor={buttonColor}>
                    <HiFire size={30} />
                  </FireButton>
                  <SavedHeading videosText={saveTextColor}>
                    Trending
                  </SavedHeading>
                </TrendingContainer>
                <TrendingListContainer>
                  {trendingVideoDetails.map(eachVideo => (
                    <SavedVideoCard
                      key={eachVideo.id}
                      savedVideoDetails={eachVideo}
                    />
                  ))}
                </TrendingListContainer>
              </>
            )
          }

          const renderVideoTrendingView = () => (
            <LoaderContainer data-testid="loader">
              <Loader
                type="ThreeDots"
                color=" #cbd5e1"
                height="50"
                width="50"
              />
            </LoaderContainer>
          )

          const renderTrendingFailureView = () => (
            <FailureContainer>
              <FailureImg src={failureImage} alt="failure view" />
              <FailureHeading color={textColor}>
                Oops! Something Went Wrong
              </FailureHeading>
              <FailureText text={failureTextColor}>
                We are having some trouble to complete your request. <br />
                Please try again.
              </FailureText>
              <RetryButton type="button" onClick={this.getTrendingVideos}>
                Retry
              </RetryButton>
            </FailureContainer>
          )

          const renderTrendingDetails = () => {
            const {apiStatus} = this.state
            switch (apiStatus) {
              case apiStatusConstants.inProgress:
                return renderVideoTrendingView()
              case apiStatusConstants.failure:
                return renderTrendingFailureView()
              case apiStatusConstants.success:
                return renderTrendingSuccessView()

              default:
                return null
            }
          }

          return (
            <VideoItemsContainer
              trendingColor={trendingBgColor}
              data-testid="trending"
            >
              <Header />
              <VideoSideContainer>
                <SideBar />
                <MainVideoContainer>
                  {renderTrendingDetails()}
                </MainVideoContainer>
              </VideoSideContainer>
            </VideoItemsContainer>
          )
        }}
      </WatchContext.Consumer>
    )
  }
}

export default Trending
