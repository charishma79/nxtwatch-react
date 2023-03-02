import styled from 'styled-components'

export const NavMobileContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: ${props =>
    props.theme === 'dark' ? '#212121' : '#f4f4f4'};
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const NavLargeContainer = styled(NavMobileContainer)`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`

export const HeaderLogoImg = styled.img`
  width: 150px;
  @media screen and (min-width: 768px) {
    width: 20 0px;
  }
`
export const NavMobileIcons = styled.div``

export const IconButton = styled.button`
  background-color: transparent;
  border: none;
  margin-left: 5px;
  margin-right: 5px;
`

export const CloseButton = styled.div`
  align-self: flex-end;
  margin-top: 10px;
  margin-right: 10px;
`

export const Heading = styled.p`
    font-family:'Roboto'
    font-size:23px;
    color: ${props => props.color};
    margin-bottom:30px;
`

export const ModalContainer = styled.div`
  background-color: ${props => props.bgColor};
  border-radius: 10px;
  min-height: 18vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 20vw;
  padding: 15px;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`

export const CancelButton = styled.button`
  background-color: transparent;
  height: 39px;
  width: 80px;
  border: 1px solid #475569;
  color: #94a3b8;
  font-family: Roboto;
  font-weight: bold;
  font-size: 15px;
  margin-right: 20px;
  cursor: pointer;
`
export const ConfirmButton = styled(CancelButton)`
  background-color: #3b82f6;
  border: none;
  color: #f1f1f1;
`

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`

export const ProfileIcon = styled.img`
  width: 25px;
  margin-left: 15px;
  margin-right: 15px;
`
export const NavLargeIcons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const LargeLogoutButton = styled.button`
  margin: 0px;
  margin-left: 15px;
  margin-right: 15px;
  height: 40px;
  width: 90px;
  padding: 10px;
  background-color: transparent;
  border: ${props => props.border};
  color: ${props => props.color};
`
export const MenuPopupMobile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  width: 100vw;
  height: 100vh;
  padding-top: 20px;
  background-color: ${props =>
    props.theme === 'dark' ? '#0f0f0f' : '#f9f9f9'};
`
export const MenuListMobile = styled.div`
  width: 100%;
  display: flex;
  padding-top: 120px;
  flex-direction: column;
  align-items: center;
`
