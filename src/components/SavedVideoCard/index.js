import {formatDistanceToNow} from 'date-fns'

import WatchContext from '../../context/WatchContext'

import {
  SavedCardItem,
  ThumbnailImg,
  SavedChannelCard,
  Title,
  ChannelName,
  Views,
  DateContainer,
  ProfileLogo,
  ChannelInfo,
  NavLink,
  ChannelContainer,
  Published,
} from './styledComponents'

const SavedVideoCard = props => {
  const {savedVideoDetails} = props
  const {
    thumbnailUrl,
    title,
    channel,
    viewCount,
    publishedAt,
    id,
  } = savedVideoDetails
  const {name, profileImageUrl} = channel
  let postedAt = formatDistanceToNow(new Date(publishedAt))

  const postedAtList = postedAt.split(' ')

  if (postedAtList.length === 3) {
    postedAtList.shift()
    postedAt = postedAtList.join(' ')
  }

  return (
    <WatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        console.log(isDarkTheme)

        const titleColor = isDarkTheme ? '#e2e8f0' : '#0f0f0f'

        const viewColor = isDarkTheme ? ' #475569' : '#616e7c'

        return (
          <NavLink to={`/videos/${id}`}>
            <SavedCardItem>
              <ThumbnailImg src={thumbnailUrl} alt="video thumbnail" />
              <SavedChannelCard>
                <ProfileLogo src={profileImageUrl} alt="channel logo" />
                <ChannelInfo viewColor={viewColor}>
                  <Title titleColor={titleColor}>{title}</Title>
                  <ChannelContainer>
                    <ChannelName>{name}</ChannelName>
                    <DateContainer>
                      <Views> {viewCount} views</Views>
                      <Published> {postedAt} </Published>
                    </DateContainer>
                  </ChannelContainer>
                </ChannelInfo>
              </SavedChannelCard>
            </SavedCardItem>
          </NavLink>
        )
      }}
    </WatchContext.Consumer>
  )
}

export default SavedVideoCard
