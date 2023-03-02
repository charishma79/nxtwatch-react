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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const NotFoundImg = styled.img`
  height: 400px;
  @media screen and (max-width: 767px) {
    height: 230px;
  }
`
export const Heading = styled.h1`
  color: ${props => props.color};
  font-family: Roboto;
  font-size: 33px;
  font-weight: 600;
  text-align: center;
  @media screen and (max-width: 767px) {
    font-size: 25px;
  }
`
export const Text = styled.p`
  color: ${props => props.color};
  font-family: Roboto;
  font-size: 17px;
  font-weight: 400;
  margin-top: 0px;
  text-align: center;
  @media screen and (max-width: 767px) {
    font-size: 14px;
  }
`
