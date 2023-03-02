import styled from 'styled-components'

export const VideoItemsContainer = styled.div`
  background-color: ${props => props.saveBgColor};
  min-height: 100vh;
  width: 100%;
`

export const VideoSideContainer = styled.div`
  display: flex;
`
export const MainVideoContainer = styled.div`
  min-height: 100vh;
  width: 100%;
`
export const FailureContainer = styled.div`
  display: flex;
  padding-top: 100px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const FailureImg = styled.img`
  height: 350px;
  margin-bottom: 25px;
  @media screen and (max-width: 767px) {
    height: 200px;
  }
`
export const FailureHeading = styled.h1`
  color: ${props => props.saveTextColor};
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
  font-size: 17px;
  line-height: 1.87;
  margin-top: 0px;
  @media screen and (max-width: 767px) {
    font-size: 14px;
  }
`
export const SavedVideosContainer = styled.div`
  background-color: ${props => props.bgColor};
  height: 20vh;
  display: flex;
  padding: 50px;
  align-items: center;
  @media screen and (max-width: 767px) {
    padding: 20px;
    height: 19vh;
  }
`

export const FireButton = styled.button`
  background-color: ${props => props.buttonBgColor};
  border: none;
  outline: none;
  border-radius: 50px;
  color: #ff0000;
  padding-top: 22px;
  padding-bottom: 22px;
  padding-right: 25px;
  padding-left: 25px;
  margin-right: 10px;
  @media screen and (max-width: 767px) {
    border-radius: 45px;
  }
`

export const SavedHeading = styled.h1`
  font-weight: bold;
  font-family: Roboto;
  font-size: 40px;
  color: ${props => props.videosText};
  @media screen and (max-width: 767px) {
    font-size: 28px;
  }
`

export const SavedVideosCard = styled.div`
  display: flex;
  flex-direction: column;
`

export const ThumbnailImage = styled.img`
  height: 200px;
  width: 100%;
  @media screen and (max-width: 767px) {
    height: 120px;
    width: 100%;
  }
  @media screen and (max-width: 575px) {
    max-width: 100%;
  }
`
export const SavedVideosUnorderedList = styled.ul`
  list-style-type: none;
  background-color: ${props => props.bgColor};
  display: flex;
  flex-direction: column;
  padding-top: 15px;
  width: 75%;
  @media screen and (max-width: 576px) {
    padding: 5px;
    width: 100%;
  }
`
