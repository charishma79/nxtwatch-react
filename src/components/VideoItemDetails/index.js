import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'

import {MdPlaylistAdd} from 'react-icons/md'

import {formatDistanceToNow} from 'date-fns'

import ReactPlayer from 'react-player'

import Header from '../Header'
import SideBar from '../SideBar'

import WatchContext from '../../context/WatchContext'

import {
  VideoItemsContainer,
  ChannelInfoContainer,
  Profile,
  VideoSideContainer,
  MainVideoContainer,
  LoaderContainer,
  FailureImg,
  Description,
  FailureContainer,
  FailureHeading,
  FailureText,
  Retry,
  VideoViewContainer,
  VideoParagraph,
  Subscriber,
  Views,
  DateContainer,
  VideoIconsContainer,
  VideoInfoCard,
  IconButton,
  LikeText,
  DislikeText,
  SaveText,
  Hr,
  ChannelInfo,
  ChannelName,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  failure: 'FAILURE',
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videoItemDetails: {},
    isLiked: false,
    isDisliked: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params

    const jwtToken = Cookies.get('jwt_token')
    const videoUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(videoUrl, options)
    if (response.ok) {
      const data = await response.json()
      console.log(data)
      const updatedVideosData = {
        channel: {
          name: data.video_details.channel.name,
          profileImageUrl: data.video_details.channel.profile_image_url,
          subscriberCount: data.video_details.channel.subscriber_count,
        },
        id: data.video_details.id,
        publishedAt: data.video_details.published_at,
        thumbnailUrl: data.video_details.thumbnail_url,
        title: data.video_details.title,
        viewCount: data.video_details.view_count,
        description: data.video_details.description,
        videoUrl: data.video_details.video_url,
      }
      console.log(updatedVideosData)
      this.setState({
        apiStatus: apiStatusConstants.success,
        videoItemDetails: updatedVideosData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onClickLike = () => {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
      isDisliked: false,
    }))
  }

  onClickDislike = () => {
    this.setState(prevState => ({
      isDisliked: !prevState.isDisliked,
      isLiked: false,
    }))
  }

  render() {
    const {isLiked, isDisliked} = this.state
    return (
      <WatchContext.Consumer>
        {value => {
          const {isDarkTheme, savedVideosList, updateSaveVideo, save} = value
          const videoBgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'

          const textColor = isDarkTheme ? '#f4f4f4' : ' #212121'

          const failureImage = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

          const failureTextColor = isDarkTheme ? '#94a3b8' : ' #64748b'

          const titleColor = isDarkTheme ? '#e2e8f0' : '#313131'

          const viewColor = isDarkTheme ? ' #475569' : '#383838'

          const lineColor = isDarkTheme ? ' #475569' : ' #cccccc'

          const likeIcon = isLiked ? (
            <AiOutlineLike color="#2563eb" size={15} />
          ) : (
            <AiOutlineLike size={15} color="#64748b" />
          )

          const dislikeIcon = isDisliked ? (
            <AiOutlineDislike color=" #2563eb" size={15} />
          ) : (
            <AiOutlineDislike size={15} color="#64748b" />
          )

          const likeClassName = isLiked ? ' #2563eb' : ' #64748b'

          const dislikeClassName = isDisliked ? ' #2563eb' : '#64748b'

          const subscribeColor = isDarkTheme ? '#64748b' : '  #7e858e'

          const descriptionColor = isDarkTheme ? '#e2e8f0' : '#7e858e'

          const renderVideoItemSuccessView = () => {
            const {videoItemDetails} = this.state
            const {
              videoUrl,
              title,
              id,
              viewCount,
              publishedAt,
              channel,
              description,

              videoSaved,
            } = videoItemDetails
            console.log(videoSaved)
            const {profileImageUrl, name, subscriberCount} = channel
            let publishedDate = formatDistanceToNow(new Date(publishedAt))

            const postedAtList = publishedDate.split(' ')

            if (postedAtList.length === 3) {
              postedAtList.shift()
              publishedDate = postedAtList.join(' ')
            }

            const present = savedVideosList.find(each => each.id === id)
            const saveIsActive =
              present !== undefined ? (
                <MdPlaylistAdd color="#2563eb" size={15} />
              ) : (
                <MdPlaylistAdd size={15} color="#64748b" />
              )

            const saveClassName = save ? ' #2563eb' : '#64748b'

            const saveText = present !== undefined ? 'Saved' : 'Save'

            return (
              <VideoViewContainer>
                <ReactPlayer url={videoUrl} width="95%" height="500px" />
                <VideoParagraph title={titleColor}>{title}</VideoParagraph>
                <VideoInfoCard>
                  <DateContainer viewColor={viewColor}>
                    <Views>{viewCount} views</Views>
                    <Views>. {publishedDate} ago</Views>
                  </DateContainer>
                  <VideoIconsContainer>
                    <IconButton
                      type="button"
                      onClick={this.onClickLike}
                      color={likeClassName}
                    >
                      {likeIcon}{' '}
                      <LikeText likeColor={likeClassName}> Like</LikeText>
                    </IconButton>

                    <IconButton type="button" onClick={this.onClickDislike}>
                      {dislikeIcon}{' '}
                      <DislikeText dislikeColor={dislikeClassName}>
                        Dislike
                      </DislikeText>
                    </IconButton>

                    <IconButton
                      type="button"
                      onClick={() => updateSaveVideo(videoItemDetails)}
                    >
                      {saveIsActive}{' '}
                      <SaveText saveColor={saveClassName}>{saveText}</SaveText>
                    </IconButton>
                  </VideoIconsContainer>
                </VideoInfoCard>
                <Hr lineColor={lineColor} />
                <ChannelInfoContainer>
                  <Profile src={profileImageUrl} alt="channel logo" />
                  <ChannelInfo>
                    <ChannelName channelColor={titleColor}>{name}</ChannelName>

                    <Subscriber subscribeColor={subscribeColor}>
                      {subscriberCount} subscribers
                    </Subscriber>
                  </ChannelInfo>
                </ChannelInfoContainer>
                <Description descriptColor={descriptionColor}>
                  {description}
                </Description>
              </VideoViewContainer>
            )
          }

          const renderVideoItemLoaderView = () => (
            <LoaderContainer data-testid="loader">
              <Loader type="ThreeDots" color="#64748b" height="50" width="50" />
            </LoaderContainer>
          )

          const renderVideosItemFailureView = () => (
            <FailureContainer>
              <FailureImg src={failureImage} alt="failure view" />
              <FailureHeading color={textColor}>
                Oops! Something Went Wrong
              </FailureHeading>
              <FailureText text={failureTextColor}>
                We are having some trouble to complete your request. <br />
                Please try again.
              </FailureText>
              <Retry type="button" onClick={this.getVideoDetails}>
                Retry
              </Retry>
            </FailureContainer>
          )

          const renderSpecificVideoDetails = () => {
            const {apiStatus} = this.state
            switch (apiStatus) {
              case apiStatusConstants.inProgress:
                return renderVideoItemLoaderView()
              case apiStatusConstants.failure:
                return renderVideosItemFailureView()
              case apiStatusConstants.success:
                return renderVideoItemSuccessView()
              default:
                return null
            }
          }

          return (
            <>
              <VideoItemsContainer
                videoBgColor={videoBgColor}
                data-testid="videoItemDetails"
              >
                <Header />
                <VideoSideContainer>
                  <SideBar />
                  <MainVideoContainer>
                    {renderSpecificVideoDetails()}
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

export default VideoItemDetails
