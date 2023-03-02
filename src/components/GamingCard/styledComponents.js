import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const GamingListItem = styled.li`
  display: flex;
  flex-direction: column;
  margin: 20px;
`

export const GamingImg = styled.img`
  height: 300px;
  border-radius: 10px;
  @media screen and (max-width: 767px) {
    height: 180px;
  }
`

export const Title = styled.p`
  color: ${props => props.titleColor};
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 5px;

  @media screen and (max-width: 767px) {
    font-size: 15px;
  }
`

export const Views = styled.p`
  font-family: Roboto;
  font-size: 15px;
  font-weight: 400;
  margin-right: 10px;
  color: ${props => props.viewColor};
  margin-bottom: 0px;
  margin-top: 6px;
  @media screen and (max-width: 767px) {
    margin-right: 2px;
    font-size: 10px;
  }
`
export const NavLink = styled(Link)`
  text-decoration: none;
  color: #1e293b;
  margin-bottom: 10px;
`
