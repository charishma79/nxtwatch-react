import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const VideosListContainer = styled.li`
  display: flex;
  flex-direction: column;
  margin: 15px;
  width: 260px;
  @media screen and (max-width: 575px) {
    width: 350px;
  }
`
export const ChannelContainer = styled.div`
  display: flex;
  align-items: center;
  @media screen and (min-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 0px;
    margin-top: 5px;
  }
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

export const LogoContainer = styled.div`
  display: flex;
  margin-top: 10px;
`

export const ProfileLogo = styled.img`
  height: 35px;
  margin-right: 10px;
  margin-top: 15px;
  @media screen and (max-width: 767px) {
    height: 25px;
  }
`

export const Title = styled.p`
  color: ${props => props.titleColor};
  font-family: Roboto;
  font-size: 15px;
  font-weight: 400;
  margin-bottom: 0px;
  @media screen and (max-width: 767px) {
    font-size: 10px;
  }
`

export const ChannelName = styled.p`
  font-family: Roboto;
  font-size: 15px;
  font-weight: 400;
  margin-top: 10px;
  margin-bottom: 5px;
  margin-right: 10px;
  @media screen and (max-width: 767px) {
    font-size: 10px;
  }
`

export const ChannelInfo = styled.div`
  display: flex;
  flex-direction: column;
  color: ${props => props.viewColor};
`

export const Views = styled.p`
  margin-right: 2px;
  font-size: 16px;
  margin-top: 0px;
  font-family: Roboto;
  font-weight: 400;
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const ViewsCount = styled.p`
  margin-right: 2px;
  font-size: 10px;
  margin-top: 0px;
  font-family: Roboto;
  font-weight: 400;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const Published = styled.p`
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  margin-top: 0px;
  margin-left: 10px;
  @media screen and (max-width: 767px) {
    margin-right: 2px;
    font-size: 10px;
  }
`

export const DateContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
  @media screen and (min-width: 768px) {
    margin-top: 5px;
  }
`
export const NavLink = styled(Link)`
  text-decoration: none;
  color: #1e293b;
  margin-bottom: 10px;
`
