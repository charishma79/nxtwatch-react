import {withRouter, Link} from 'react-router-dom'
import {Component} from 'react'

import {FiSun, FiLogOut} from 'react-icons/fi'
import {FaMoon} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'

import {AiOutlineClose} from 'react-icons/ai'

import Cookies from 'js-cookie'

import Popup from 'reactjs-popup'

import MenuList from '../MenuList'

import WatchContext from '../../context/WatchContext'

import './index.css'

import {
  NavMobileContainer,
  HeaderLogoImg,
  NavMobileIcons,
  IconButton,
  CloseButton,
  NavLargeContainer,
  LogoutPopupContent,
  Button,
  ProfileIcon,
  NavLargeIcons,
  LargeLogoutButton,
  MenuPopupMobile,
  MenuListMobile,
} from './styledComponents'

class Header extends Component {
  render() {
    return (
      <WatchContext.Consumer>
        {value => {
          const {isDarkTheme, onChangeTheme} = value

          const websiteUrl = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          const theme = isDarkTheme ? 'dark' : 'light'

          const color = isDarkTheme ? 'white' : 'black'

          const onClickLogout = () => {
            const {history} = this.props
            Cookies.remove('jwt_token')
            history.replace('/login')
          }

          return (
            <>
              <NavMobileContainer theme={theme}>
                <WatchContext.Consumer>
                  {activeValue => {
                    const {onClickActiveTab} = activeValue
                    return (
                      <Link to="/">
                        <HeaderLogoImg
                          src={websiteUrl}
                          alt="website logo"
                          onClick={() => onClickActiveTab('HOME')}
                        />
                      </Link>
                    )
                  }}
                </WatchContext.Consumer>
                <NavMobileIcons>
                  <IconButton
                    type="button"
                    data-testid="theme"
                    onClick={() => onChangeTheme()}
                  >
                    {isDarkTheme ? (
                      <FiSun color="white" size={22} />
                    ) : (
                      <FaMoon size={22} />
                    )}
                  </IconButton>
                  <Popup
                    modal
                    className="popup-content"
                    trigger={
                      <IconButton type="button">
                        <GiHamburgerMenu color={color} size={22} />
                      </IconButton>
                    }
                  >
                    {close => (
                      <MenuPopupMobile theme={theme}>
                        <CloseButton>
                          <IconButton type="button" onClick={() => close()}>
                            <AiOutlineClose size={20} color={color} />
                          </IconButton>
                        </CloseButton>
                        <MenuListMobile>
                          <MenuList />
                        </MenuListMobile>
                      </MenuPopupMobile>
                    )}
                  </Popup>
                  <Popup
                    modal
                    trigger={
                      <IconButton type="button">
                        <FiLogOut color={color} size={22} />
                      </IconButton>
                    }
                    className="logout-popup"
                  >
                    {close => (
                      <LogoutPopupContent theme={theme}>
                        <p>Are you sure, you want to logout</p>
                        <div>
                          <Button outline type="button" onClick={() => close()}>
                            Cancel
                          </Button>
                          <Button
                            bgColor="blue"
                            color="white"
                            type="button"
                            onClick={onClickLogout}
                          >
                            Confirm
                          </Button>
                        </div>
                      </LogoutPopupContent>
                    )}
                  </Popup>
                </NavMobileIcons>
              </NavMobileContainer>
              <NavLargeContainer theme={theme}>
                <WatchContext.Consumer>
                  {activeValue => {
                    const {onClickActiveTab} = activeValue
                    return (
                      <Link to="/">
                        <HeaderLogoImg
                          src={websiteUrl}
                          alt="website logo"
                          onClick={() => onClickActiveTab('HOME')}
                        />
                      </Link>
                    )
                  }}
                </WatchContext.Consumer>

                <NavLargeIcons>
                  <IconButton type="button" onClick={() => onChangeTheme()}>
                    {isDarkTheme ? (
                      <FiSun color="white" size={23} />
                    ) : (
                      <FaMoon size={23} />
                    )}
                  </IconButton>
                  <ProfileIcon
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt="profile"
                  />

                  <Popup
                    modal
                    trigger={
                      <LargeLogoutButton theme={theme} outline>
                        Logout
                      </LargeLogoutButton>
                    }
                    className="logout-popup"
                  >
                    {close => (
                      <LogoutPopupContent theme={theme}>
                        <p>Are you sure, you want to logout</p>
                        <div>
                          <Button outline type="button" onClick={() => close()}>
                            Cancel
                          </Button>
                          <Button
                            bgColor="blue"
                            color="white"
                            type="button"
                            onClick={onClickLogout}
                          >
                            Confirm
                          </Button>
                        </div>
                      </LogoutPopupContent>
                    )}
                  </Popup>
                </NavLargeIcons>
              </NavLargeContainer>
            </>
          )
        }}
      </WatchContext.Consumer>
    )
  }
}

export default withRouter(Header)
