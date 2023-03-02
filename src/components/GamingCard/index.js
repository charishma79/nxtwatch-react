import WatchContext from '../../context/WatchContext'

import {
  GamingListItem,
  GamingImg,
  Title,
  Views,
  NavLink,
} from './styledComponents'

const GamingCard = props => {
  const {gamingDetails} = props
  console.log(gamingDetails)
  const {thumbnailUrl, title, viewCount, id} = gamingDetails
  return (
    <WatchContext.Consumer>
      {value => {
        const {isDarkTheme, onClickActiveTab} = value

        const titleColor = isDarkTheme ? '#e2e8f0' : '#0f0f0f'

        const viewColor = isDarkTheme ? ' #475569' : '#616e7c'
        return (
          <NavLink
            to={`/videos/${id}`}
            onClick={() => onClickActiveTab('INITIAL')}
          >
            <GamingListItem>
              <GamingImg src={thumbnailUrl} alt="video thumbnail" />
              <Title titleColor={titleColor}>{title}</Title>
              <Views viewColor={viewColor}>
                {viewCount} Watching Worldwide
              </Views>
            </GamingListItem>
          </NavLink>
        )
      }}
    </WatchContext.Consumer>
  )
}

export default GamingCard
