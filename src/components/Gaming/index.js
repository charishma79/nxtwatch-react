import {Component} from 'react'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import {SiYoutubegaming} from 'react-icons/si'

import WatchContext from '../../context/WatchContext'

import SideBar from '../SideBar'
import Header from '../Header'
import GamingCard from '../GamingCard'

import {
  VideoItemsContainer,
  VideoSideContainer,
  MainVideoContainer,
  LoaderContainer,
  FailureContainer,
  FailureHeading,
  FailureImg,
  FailureText,
  TrendingListContainer,
  RetryButton,
  TrendingContainer,
  FireButton,
  SavedHeading,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  failure: 'FAILURE',
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
}

class Gaming extends Component {
  state = {apiStatus: apiStatusConstants.initial, gamingDataDetails: []}

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const gamingUrl = 'https://apis.ccbp.in/videos/gaming'
    const jwtToken = Cookies.get('jwt_token')

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(gamingUrl, options)
    if (response.ok) {
      const gamingData = await response.json()
      console.log(gamingData)
      const updatedData = gamingData.videos.map(eachItem => ({
        id: eachItem.id,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
      }))
      console.log(updatedData)
      this.setState({
        gamingDataDetails: updatedData,
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

          const textColor = isDarkTheme ? '#f4f4f4' : ' #212121'

          const failureImage = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

          const failureTextColor = isDarkTheme ? '#94a3b8' : ' #64748b'

          const saveTextColor = isDarkTheme ? '#ffffff' : '#1e293b'

          const buttonColor = isDarkTheme ? '#0f0f0f' : '#d7dfe9'

          const trendBgColor = !isDarkTheme ? '#f1f5f9' : '#181818'

          const renderGameSuccessView = () => {
            const {gamingDataDetails} = this.state
            return (
              <>
                <TrendingContainer trendColor={trendBgColor}>
                  <FireButton type="button" buttonBgColor={buttonColor}>
                    <SiYoutubegaming size={30} />
                  </FireButton>
                  <SavedHeading videosText={saveTextColor}>Gaming</SavedHeading>
                </TrendingContainer>
                <TrendingListContainer>
                  {gamingDataDetails.map(eachItem => (
                    <GamingCard key={eachItem.id} gamingDetails={eachItem} />
                  ))}
                </TrendingListContainer>
              </>
            )
          }

          const renderGamingFailureView = () => (
            <FailureContainer>
              <FailureImg src={failureImage} alt="failure view" />
              <FailureHeading color={textColor}>
                Oops! Something Went Wrong
              </FailureHeading>
              <FailureText text={failureTextColor}>
                We are having some trouble to complete your request. <br />
                Please try again.
              </FailureText>
              <RetryButton type="button" onClick={this.getGamingVideos}>
                Retry
              </RetryButton>
            </FailureContainer>
          )
          const renderGamingLoaderView = () => (
            <LoaderContainer data-testid="loader">
              <Loader
                type="ThreeDots"
                color=" #cbd5e1"
                height="50"
                width="50"
              />
            </LoaderContainer>
          )

          const renderGamingDetails = () => {
            const {apiStatus} = this.state
            switch (apiStatus) {
              case apiStatusConstants.inProgress:
                return renderGamingLoaderView()
              case apiStatusConstants.failure:
                return renderGamingFailureView()
              case apiStatusConstants.success:
                return renderGameSuccessView()
              default:
                return null
            }
          }

          return (
            <VideoItemsContainer
              trendingColor={trendingBgColor}
              data-testid="gaming"
            >
              <Header />
              <VideoSideContainer>
                <SideBar />
                <MainVideoContainer>{renderGamingDetails()}</MainVideoContainer>
              </VideoSideContainer>
            </VideoItemsContainer>
          )
        }}
      </WatchContext.Consumer>
    )
  }
}

export default Gaming
