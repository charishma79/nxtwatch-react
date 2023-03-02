import WatchContext from '../../context/WatchContext'

import SideBar from '../SideBar'
import Header from '../Header'

import {
  VideoItemsContainer,
  VideoSideContainer,
  MainVideoContainer,
  NotFoundImg,
  Heading,
  Text,
} from './styledComponents'

const NotFound = () => (
  <WatchContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const trendingBgColor = isDarkTheme ? '#0f0f0f ' : '#f9f9f9'

      const notFoundImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

      const headingColor = isDarkTheme ? '#f8fafc' : '  #000000'

      const textColor = isDarkTheme ? '#616e7c' : '#475569'

      return (
        <VideoItemsContainer trendingColor={trendingBgColor}>
          <Header />
          <VideoSideContainer>
            <SideBar />
            <MainVideoContainer>
              <NotFoundImg src={notFoundImage} alt="not found" />
              <Heading color={headingColor}>Page Not Found</Heading>
              <Text color={textColor}>
                We are sorry, the page you requested could not be found.
              </Text>
            </MainVideoContainer>
          </VideoSideContainer>
        </VideoItemsContainer>
      )
    }}
  </WatchContext.Consumer>
)

export default NotFound
