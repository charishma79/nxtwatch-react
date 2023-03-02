import {Component} from 'react'

import {GrClose} from 'react-icons/gr'

import Header from '../Header'

import WatchContext from '../../context/WatchContext'

import SideBar from '../SideBar'
import Videos from '../Videos'

import {
  HomeContainer,
  HomeBarContainer,
  CloseButton,
  NxtLogo,
  BuyText,
  GetButton,
  MainHomeContainer,
} from './styledComponents'

class Home extends Component {
  state = {display: 'flex'}

  onClickClose = () => {
    this.setState({display: 'none'})
  }

  renderBannerImage = () => {
    const {display} = this.state
    return (
      <HomeBarContainer data-testid="banner" display={display}>
        <CloseButton
          type="button"
          onClick={this.onClickClose}
          data-testid="close"
        >
          <GrClose size={20} />
        </CloseButton>
        <NxtLogo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="nxt watch logo"
        />
        <BuyText>
          Buy Nxt Watch Premium <br />
          prepaid plans with UPI
        </BuyText>
        <GetButton type="button">GET IT NOW</GetButton>
      </HomeBarContainer>
    )
  }

  render() {
    return (
      <WatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'

          return (
            <>
              <Header />
              <HomeContainer data-testid="home" bgColor={bgColor}>
                <SideBar />
                <MainHomeContainer>
                  {this.renderBannerImage()}

                  <Videos />
                </MainHomeContainer>
              </HomeContainer>
            </>
          )
        }}
      </WatchContext.Consumer>
    )
  }
}

export default Home
