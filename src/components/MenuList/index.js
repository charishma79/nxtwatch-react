import {Link} from 'react-router-dom'
import {AiFillHome, AiFillFire} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

import WatchContext from '../../context/WatchContext'

import {MenuItemList, MenuLink, MenuHeading} from './styledComponents'

import './index.css'

const activeMenuConstants = {
  initial: 'INITIAL',
  home: 'HOME',
  trending: 'TRENDING',
  gaming: 'GAMING',
  savedVideos: 'SAVED_VIDEOS',
}

const MenuList = () => {
  const menuList = value => {
    const {isDarkTheme} = value
    const theme = isDarkTheme ? 'dark' : 'light'

    return (
      <WatchContext.Consumer>
        {activeMenu => {
          const {activeTab, onClickActiveTab} = activeMenu

          const iconColor = isDarkTheme ? '#424242' : '#7e858e'
          const iconActive = '#ff0b37'

          return (
            <MenuItemList>
              <Link to="/" className="link">
                <MenuLink
                  theme={theme}
                  isActive={activeTab === activeMenuConstants.home}
                  onClick={() => onClickActiveTab(activeMenuConstants.home)}
                  key="HOME"
                >
                  <AiFillHome
                    size={25}
                    color={
                      activeTab === activeMenuConstants.home
                        ? iconActive
                        : iconColor
                    }
                  />

                  <MenuHeading theme={theme}>Home</MenuHeading>
                </MenuLink>
              </Link>
              <Link to="/trending" className="link">
                <MenuLink
                  theme={theme}
                  isActive={activeTab === activeMenuConstants.trending}
                  onClick={() => onClickActiveTab(activeMenuConstants.trending)}
                  key="TRENDING"
                >
                  <AiFillFire
                    size={25}
                    color={
                      activeTab === activeMenuConstants.trending
                        ? iconActive
                        : iconColor
                    }
                  />

                  <MenuHeading theme={theme}>Trending</MenuHeading>
                </MenuLink>
              </Link>
              <Link to="/gaming" className="link">
                <MenuLink
                  theme={theme}
                  isActive={activeTab === activeMenuConstants.gaming}
                  onClick={() => onClickActiveTab(activeMenuConstants.gaming)}
                  key="GAMING"
                >
                  <SiYoutubegaming
                    size={25}
                    color={
                      activeTab === activeMenuConstants.gaming
                        ? iconActive
                        : iconColor
                    }
                  />

                  <MenuHeading theme={theme}>Gaming</MenuHeading>
                </MenuLink>
              </Link>

              <Link to="/saved-videos" className="link">
                <MenuLink
                  theme={theme}
                  isActive={activeTab === activeMenuConstants.savedVideos}
                  onClick={() =>
                    onClickActiveTab(activeMenuConstants.savedVideos)
                  }
                  key="SAVED_VIDEOS"
                >
                  <MdPlaylistAdd
                    size={25}
                    color={
                      activeTab === activeMenuConstants.savedVideos
                        ? iconActive
                        : iconColor
                    }
                  />

                  <MenuHeading theme={theme}>Saved videos</MenuHeading>
                </MenuLink>
              </Link>
            </MenuItemList>
          )
        }}
      </WatchContext.Consumer>
    )
  }

  return (
    <WatchContext.Consumer>{value => menuList(value)}</WatchContext.Consumer>
  )
}

export default MenuList
//  const onClickHomeTab = () => {
//             onClickActiveTab('Home')
//           }

//           const onClickTrendingTab = () => {
//             onClickActiveTab('Trending')
//           }

//           const onClickGamingTab = () => {
//             onClickActiveTab('Gaming')
//           }

//           const onClickPlayTab = () => {
//             onClickActiveTab('Playlist')
//           }

//           const isActiveTheme =
//             activeTab === 'Home' ? ' #313131' : 'transparent'

//           const isActive = activeTab === 'Home' ? ' #f1f5f9' : 'transparent'

//           const isActiveTrendingTheme =
//             activeTab === 'Trending' ? '#212121' : 'transparent'

//           const isActiveTrending =
//             activeTab === 'Trending' ? ' #f1f5f9' : 'transparent'

//           const isActiveGamingTheme =
//             activeTab === 'Gaming' ? '#212121' : 'transparent'

//           const isActiveGaming =
//             activeTab === 'Gaming' ? ' #f1f5f9' : 'transparent'

//           const isActivePlayTheme =
//             activeTab === 'Playlist' ? '#212121' : 'transparent'

//           const isActivePlay =
//             activeTab === 'Playlist' ? ' #f1f5f9' : 'transparent'

//           const activeHomeButton = isDarkTheme ? isActiveTheme : isActive
//           const activeTrendingButton = isDarkTheme
//             ? isActiveTrendingTheme
//             : isActiveTrending
//           const activeGamingButton = isDarkTheme
//             ? isActiveGamingTheme
//             : isActiveGaming

//           const activePlayButton = isDarkTheme
//             ? isActivePlayTheme
//             : isActivePlay

//           const color1 = activeTab === 'Home' ? '#f4f4f4' : '#cccccc'

//           const color2 = activeTab === 'Home' ? ' #181818' : '#909090'

//           const activeText = isDarkTheme ? color1 : color2

//           const trending1 = activeTab === 'Trending' ? '#f4f4f4' : '#cccccc'

//           const trending2 = activeTab === 'Trending' ? ' #181818' : '#909090'

//           const activeTrendingText = isDarkTheme ? trending1 : trending2

//           const gaming1 = activeTab === 'Gaming' ? '#f4f4f4' : '#cccccc'

//           const gaming2 = activeTab === 'Gaming' ? ' #181818' : '#909090'

//           const activeGamingText = isDarkTheme ? gaming1 : gaming2

//           const play1 = activeTab === 'Playlist' ? '#f4f4f4' : '#cccccc'

//           const play2 = activeTab === 'Playlist' ? ' #181818' : '#909090'

//           const activePlayText = isDarkTheme ? play1 : play2

//           const color = isDarkTheme ? '#ffffff' : '#000000'

//           const bgColor = isDarkTheme ? '#231f20' : '#ffffff'

//           return (
//             <>
//               <SideContainer bgColor={bgColor}>
//                 <ListContainer bgColor={isDarkTheme ? '#181818' : '#ffffff'}>
//                   <NavLink to="/">
//                     <ListItem
//                       onClick={onClickHomeTab}
//                       active={activeHomeButton}
//                     >
//                       <Home
//                         size={23}
//                         color={activeTab === 'Home' ? '#ff0000' : '#cbd5e1'}
//                       />
//                       <Menu color={activeText}>Home</Menu>
//                     </ListItem>
//                   </NavLink>

//                   <NavLink to="/trending">
//                     <ListItem
//                       onClick={onClickTrendingTab}
//                       active={activeTrendingButton}
//                     >
//                       <Fire
//                         size={23}
//                         color={activeTab === 'Trending' ? '#ff0000' : '#cbd5e1'}
//                       />{' '}
//                       <Menu color={activeTrendingText}>Trending</Menu>
//                     </ListItem>
//                   </NavLink>
//                   <NavLink to="/gaming">
//                     <ListItem
//                       onClick={onClickGamingTab}
//                       active={activeGamingButton}
//                     >
//                       <YoutubeGaming
//                         size={23}
//                         color={activeTab === 'Gaming' ? '#ff0000' : '#cbd5e1'}
//                       />{' '}
//                       <Menu color={activeGamingText}>Gaming</Menu>
//                     </ListItem>
//                   </NavLink>
//                   <NavLink to="/saved-videos">
//                     <ListItem
//                       color={color}
//                       onClick={onClickPlayTab}
//                       active={activePlayButton}
//                     >
//                       <PlaylistAdd
//                         size={23}
//                         color={activeTab === 'Playlist' ? '#ff0000' : '#cbd5e1'}
//                       />
//                       <Menu color={activePlayText}>Saved Videos</Menu>
//                     </ListItem>
//                   </NavLink>
//                 </ListContainer>
