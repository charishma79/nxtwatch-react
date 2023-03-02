import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {HiHome} from 'react-icons/hi'
import {AiFillFire} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  background: ${props => props.active};
  margin-bottom: 0px;
  width: 100%;
  padding-left: 0px;
`

export const Menu = styled.p`
  color: ${props => props.color};
  font-family: Roboto;
  font-size: 15px;
  font-weight: 600;
  width: 100%;
  margin-left: 15px;
`

export const ListContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 50vh;

  @media (max-width: 767px) {
    display: none;
  }
`
export const NavLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.color};
  cursor: pointer;
`

export const Home = styled(HiHome)`
  color: ${props => props.color};
  margin-left: 10px;
`

export const Fire = styled(AiFillFire)`
  color: ${props => props.color};
  margin-left: 10px;
`

export const YoutubeGaming = styled(SiYoutubegaming)`
  color: ${props => props.color};
  margin-left: 10px;
`
export const PlaylistAdd = styled(MdPlaylistAdd)`
  color: ${props => props.color};
  margin-left: 10px;
`
export const SideContainer = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    min-height: 100vh;
    width: 20vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    background-color: ${props => props.bgColor};
  }
`
export const SideBottomContainer = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: column;
  justify-content: center;
`

export const ContactHeading = styled.p`
  color: ${props => props.color};
  font-family: Roboto;
  font-size: 20px;
`
export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
`

export const IconImage = styled.img`
  height: 35px;
  margin-right: 13px;
`

export const Text = styled.p`
  color: ${props => props.color};
  font-family: Roboto;
  font-size: 16px;
  margin-top: 20px;
  font-weight: 500;
`
