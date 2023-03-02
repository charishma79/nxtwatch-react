import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const ThumbnailImg = styled.img`
  height: 200px;
  margin-right: 15px;
  @media screen and (max-width: 767px) {
    height: 120px;
    width: 100%;
  }
  @media screen and (max-width: 575px) {
    max-width: 100%;
    height: 180px;
  }
`

export const SavedCardItem = styled.li`
  display: flex;
  margin-bottom: 30px;
  @media screen and (max-width: 576px) {
    flex-direction: column;
    justify-content: center;
  }
`
export const SavedChannelCard = styled.div`
  display: flex;
  flex-direction: row;
`

export const ChannelInfo = styled.div`
  display: flex;
  flex-direction: column;
  color: ${props => props.viewColor};
`

export const Title = styled.p`
  color: ${props => props.titleColor};
  font-family: Roboto;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 5px;

  @media screen and (max-width: 767px) {
    font-size: 15px;
  }
`
export const ChannelName = styled.p`
  font-family: Roboto;
  font-size: 15px;
  font-weight: 400;
  margin-right: 10px;
  margin-bottom: 10px;
  color: ${props => props.viewColor};

  @media screen and (max-width: 767px) {
    font-size: 12px;
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
  margin-top: 13px;
  color: ${props => props.viewColor};
  @media screen and (min-width: 768px) {
    margin-top: 0px;
  }
`

export const ProfileLogo = styled.img`
  display: none;
  @media screen and (max-width: 576px) {
    height: 25px;
    margin-right: 10px;
    display: block;
    margin-top: 20px;
  }
`
export const NavLink = styled(Link)`
  text-decoration: none;
  color: #1e293b;
  margin-bottom: 10px;
`
