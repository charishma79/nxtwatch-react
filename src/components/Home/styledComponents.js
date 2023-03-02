import styled from 'styled-components'

export const MainHomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const HomeContainer = styled.div`
  min-height: 100vh;
  display: flex;

  background-color: ${props => props.bgColor};
  width: 100vw;
`

export const HomeBarContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  height: 45vh;
  width: 100%;
  background-size: cover;
  display: flex;
  flex-direction: column;
  padding-right: 35px;
  padding-top: 15px;
  padding-left: 15px;
  display: ${props => props.display};
  @media screen and (max-width: 767px) {
    height: 40vh;
  }
`
export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  align-self: flex-end;
`
export const NxtLogo = styled.img`
  height: 40px;
  width: 200px;
`

export const BuyText = styled.p`
  color: #231f20;
  font-family: Roboto;
  font-size: 20px;
  font-weight: 500;
`

export const GetButton = styled.button`
  background-color: transparent;
  border: 2px solid #000000;
  height: 40px;
  padding: 10px;
  width: 120px;
  color: #000000;
  font-family: Roboto;
  font-size: 15px;
  font-weight: 500;
`
