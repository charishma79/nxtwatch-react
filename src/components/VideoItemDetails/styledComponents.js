import styled from 'styled-components'

export const VideoItemsContainer = styled.div`
  background-color: ${props => props.videoBgColor};
  min-height: 100vh;
  width: 100%;
`

export const VideoSideContainer = styled.div`
  display: flex;
`
export const MainVideoContainer = styled.div`
  padding: 15px;
  min-height: 100vh;
  width: 100%;
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 120px;
`
export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const FailureImg = styled.img`
  height: 300px;
  @media screen and (max-width: 767px) {
    height: 200px;
  }
`
export const FailureHeading = styled.h1`
  color: ${props => props.color};
  text-align: center;
  font-family: Roboto;
  font-size: 28px;
  @media screen and (max-width: 767px) {
    font-size: 25px;
  }
`
export const FailureText = styled.p`
  color: ${props => props.text};
  text-align: center;
  font-family: Roboto;
  font-size: 18px;
  line-height: 1.87;
  margin-top: 0px;
  font-weight: 500;
  @media screen and (max-width: 767px) {
    font-size: 14px;
  }
`
export const Retry = styled.button`
  background-color: #4f46e5;
  height: 35px;
  width: 100px;
  border: none;
  outline: none;
  cursor: pointer;
  color: #f1f1f1;
  font-family: Roboto;
  font-size: 13px;
  font-weight: 500;
  border-radius: 3px;
  padding: 8px;
`

export const VideoViewContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`
export const VideoParagraph = styled.p`
  font-family: Roboto;
  color: ${props => props.title};
  margin-top: 30px;
  font-size: 17px;
  font-weight: 400;
  @media screen and (max-width: 767px) {
    font-size: 15px;
  }
`
export const Views = styled.p`
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  margin-top: 0px;
  margin-right: 10px;
  @media screen and (max-width: 767px) {
    margin-right: 2px;
    font-size: 11px;
  }
`

export const DateContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
  color: #616e7c;
`

export const VideoIconsContainer = styled.div`
  display: flex;
  align-items: center;
`
export const VideoInfoCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const IconButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  color: ${props => props.color};
  align-items: center;
  justify-content: center;
  margin-right: 3px;
`
export const LikeText = styled.p`
  font-family: Roboto;
  font-size: 15px;
  color: ${props => props.likeColor};
  margin-left: 5px;
  @media screen and (max-width: 576px) {
    font-size: 11px;
  }
`
export const DislikeText = styled(LikeText)`
  color: ${props => props.dislikeColor};
`
export const SaveText = styled(LikeText)`
  color: ${props => props.saveColor};
`
export const Hr = styled.hr`
  width: 100%;
  border: 1px solid ${props => props.lineColor};
  margin-top: 15px;
`
export const ChannelInfoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`
export const Profile = styled.img`
  height: 35px;
  margin-right: 15px;
`
export const ChannelName = styled.p`
  font-family: Roboto;
  font-size: 13px;
  font-weight: 400;
  margin-top: 10px;

  color: ${props => props.channelColor};
  margin-bottom: 15px;

  @media screen and (max-width: 767px) {
    font-size: 12px;
  }
`

export const ChannelInfo = styled.div`
  display: flex;
  flex-direction: column;
`

export const Subscriber = styled.p`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  margin-top: 0px;
  margin-right: 10px;
  color: ${props => props.subscribeColor};
  @media screen and (max-width: 767px) {
    margin-right: 2px;
    font-size: 10px;
  }
`
export const Description = styled.p`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  margin-top: 20px;
  padding-left: 50px;
  color: ${props => props.descriptColor};
`
