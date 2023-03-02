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
  ProfileIcon,
  NavLargeIcons,
  LargeLogoutButton,
  MenuPopupMobile,
  MenuListMobile,
  ModalContainer,
  Heading,
  ButtonContainer,
  CancelButton,
  ConfirmButton,
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

          const textColor = isDarkTheme ? '#f9f9f9' : '#212121'

          const logoutBgColor = isDarkTheme ? '#212121' : '#ffffff'

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
                      <ModalContainer bgColor={logoutBgColor}>
                        <Heading color={textColor}>
                          Are you sure, you want to logout?
                        </Heading>
                        <ButtonContainer>
                          <CancelButton
                            type="button"
                            onClick={() => close()}
                            color={color}
                          >
                            Cancel
                          </CancelButton>
                          <ConfirmButton type="button" onClick={onClickLogout}>
                            Confirm
                          </ConfirmButton>
                        </ButtonContainer>
                      </ModalContainer>
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
                      <LargeLogoutButton
                        theme={theme}
                        color={isDarkTheme ? '#ffffff' : '#3b82f6'}
                        border={
                          isDarkTheme
                            ? '2px solid #ffffff'
                            : '2px solid #3b82f6'
                        }
                      >
                        Logout
                      </LargeLogoutButton>
                    }
                    className="logout-popup"
                  >
                    {close => (
                      <ModalContainer bgColor={logoutBgColor}>
                        <Heading color={textColor}>
                          Are you sure, you want to logout?
                        </Heading>
                        <ButtonContainer>
                          <CancelButton
                            type="button"
                            onClick={() => close()}
                            color={color}
                          >
                            Cancel
                          </CancelButton>
                          <ConfirmButton
                            type="button"
                            onClick={this.onClickLogout}
                          >
                            Confirm
                          </ConfirmButton>
                        </ButtonContainer>
                      </ModalContainer>
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
