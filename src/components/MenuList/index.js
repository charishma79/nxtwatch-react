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



