import {Component} from 'react'

import WatchContext from '../../context/WatchContext'

import MenuList from '../MenuList'

import {
  SideBottomContainer,
  ContactHeading,
  SideContainer,
  IconsContainer,
  IconImage,
  Text,
} from './styledComponents'

class SideBar extends Component {
  render() {
    return (
      <WatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const color = isDarkTheme ? '#ffffff' : '#000000'

          const bgColor = isDarkTheme ? '#231f20' : '#ffffff'

          return (
            <SideContainer bgColor={bgColor}>
              <MenuList />
              <SideBottomContainer>
                <ContactHeading color={color}>CONTACT US</ContactHeading>
                <IconsContainer>
                  <IconImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <IconImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <IconImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </IconsContainer>
                <Text color={color}>
                  Enjoy! Now to see your channels and recommendations!
                </Text>
              </SideBottomContainer>
            </SideContainer>
          )
        }}
      </WatchContext.Consumer>
    )
  }
}

export default SideBar
