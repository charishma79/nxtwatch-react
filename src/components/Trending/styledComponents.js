import styled from 'styled-components'

export const VideoItemsContainer = styled.div`
  background-color: ${props => props.trendingColor};
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
export const TrendingContainer = styled.div`
  background-color: ${props => props.trendColor};
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

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
`
export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 55px;
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
export const RetryButton = styled.button`
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

export const TrendingListContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  padding-top: 15px;
  width: 75%;
  @media screen and (max-width: 576px) {
    padding: 5px;
    width: 100%;
  }
`
