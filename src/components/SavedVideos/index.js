import {Component} from 'react'

import {HiFire} from 'react-icons/hi'

import Header from '../Header'
import SideBar from '../SideBar'

import WatchContext from '../../context/WatchContext'

import SavedVideoCard from '../SavedVideoCard'

import {
  VideoItemsContainer,
  VideoSideContainer,
  MainVideoContainer,
  FailureContainer,
  FailureHeading,
  FailureImg,
  FailureText,
  SavedVideosContainer,
  FireButton,
  SavedHeading,
  SavedVideosCard,
  SavedVideosUnorderedList,
} from './styledComponents'

class SavedVideos extends Component {
  renderVideosAvailable = () => (
    <WatchContext.Consumer>
      {value => {
        const {savedVideosList, isDarkTheme} = value

        const savedVideosLength = savedVideosList.length > 0
        const saveTextColor = isDarkTheme ? '#ffffff' : '#1e293b'
        const textColor = isDarkTheme ? ' #ebebeb' : ' #424242'

        const buttonColor = isDarkTheme ? '#0f0f0f' : '#d7dfe9'

        const bgColor = !isDarkTheme ? '#f1f5f9' : '#181818'

        const saveBgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'

        return (
          <>
            {savedVideosLength ? (
              <SavedVideosCard>
                <SavedVideosContainer bgColor={bgColor}>
                  <FireButton type="button" buttonBgColor={buttonColor}>
                    <HiFire size={45} />
                  </FireButton>
                  <SavedHeading videosText={saveTextColor}>
                    Saved Videos
                  </SavedHeading>
                </SavedVideosContainer>
                <SavedVideosUnorderedList bgColor={saveBgColor}>
                  {savedVideosList.map(saveVideo => (
                    <SavedVideoCard
                      key={saveVideo.id}
                      savedVideoDetails={saveVideo}
                    />
                  ))}
                </SavedVideosUnorderedList>
              </SavedVideosCard>
            ) : (
              <FailureContainer>
                <FailureImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                  alt="no saved videos"
                />
                <FailureHeading saveTextColor={saveTextColor}>
                  No saved videos found
                </FailureHeading>
                <FailureText text={textColor}>
                  You can save your videos while watching them
                </FailureText>
              </FailureContainer>
            )}
          </>
        )
      }}
    </WatchContext.Consumer>
  )

  render() {
    return (
      <WatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const saveBgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'

          return (
            <>
              <VideoItemsContainer
                saveBgColor={saveBgColor}
                data-testid="savedVideos"
              >
                <Header />
                <VideoSideContainer>
                  <SideBar />

                  <MainVideoContainer>
                    {this.renderVideosAvailable()}
                  </MainVideoContainer>
                </VideoSideContainer>
              </VideoItemsContainer>
            </>
          )
        }}
      </WatchContext.Consumer>
    )
  }
}
export default SavedVideos
