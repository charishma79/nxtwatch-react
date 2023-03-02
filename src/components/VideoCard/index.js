import {formatDistanceToNow} from 'date-fns'

import WatchContext from '../../context/WatchContext'

import {
  VideosListContainer,
  ThumbnailImage,
  LogoContainer,
  ProfileLogo,
  Title,
  ChannelContainer,
  ChannelName,
  ChannelInfo,
  Views,
  DateContainer,
  NavLink,
} from './styledComponents'

const VideoCard = props => {
  const {videoDetails} = props
  const {
    thumbnailUrl,
    channel,
    title,
    viewCount,
    publishedAt,
    id,
  } = videoDetails
  const {profileImageUrl, name} = channel

  let publishedDate = formatDistanceToNow(new Date(publishedAt))

  const postedAtList = publishedDate.split(' ')

  if (postedAtList.length === 3) {
    postedAtList.shift()
    publishedDate = postedAtList.join(' ')
  }
  return (
    <WatchContext>
      {value => {
        const {isDarkTheme} = value

        const titleColor = isDarkTheme ? '#e2e8f0' : '#424242'

        const viewColor = isDarkTheme ? ' #475569' : '#616e7c'

        return (
          <NavLink to={`/videos/${id}`}>
            <VideosListContainer>
              <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
              <LogoContainer>
                <ProfileLogo src={profileImageUrl} alt="channel logo" />
                <ChannelInfo viewColor={viewColor}>
                  <Title titleColor={titleColor}>{title}</Title>
                  <ChannelContainer>
                    <ChannelName>{name}</ChannelName>
                    <DateContainer>
                      <Views>{viewCount} views</Views>
                      <Views> . {publishedDate} ago</Views>
                    </DateContainer>
                  </ChannelContainer>
                </ChannelInfo>
              </LogoContainer>
            </VideosListContainer>
          </NavLink>
        )
      }}
    </WatchContext>
  )
}

export default VideoCard
