import styled from 'styled-components'

export const LoginContainer = styled.div`
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  width: 100vw;
  padding: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const LoginFormContainer = styled.div`
  background-color: ${props => props.loginColor};
  min-height: 40vh;
  width: 30vw;
  padding: 20px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`
export const Img = styled.img`
  height: 40px;
  width: 160px;
  margin-bottom: 40px;
  align-self: center;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
`

export const PasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
`

export const UserLabel = styled.label`
  font-family: Roboto;
  font-size: 13px;
  color: #7e858e;
  font-weight: 600;
  align-self: flex-start;
  margin-bottom: 8px;
`

export const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0px;
`

export const CheckBoxInput = styled.input`
  height: 40px;
`
export const Input = styled.input`
  background-color: transparent;
  border: 1px solid #cccccc;
  height: 40px;
  padding: 10px;
  border-radius: 5px;
  width: 100%;
  color: #7e858e;
  font-family: Roboto;
  font-size: 15px;
  font-weight: 500;
`
export const PasswordLabel = styled.label`
  color: #181818;
  font-family: Roboto;
  font-size: 15px;
  font-weight: bold;
  margin-left: 3px;
`

export const LoginButton = styled.button`
  background-color: #3b82f6;
  border: none;
  outline: none;
  border-radius: 10px;
  height: 40px;
  padding: 10px;
  width: 100%;
  margin-top: 25px;
  color: #ffffff;
  font-family: Roboto;
  font-size: 14px;
  font-weight: bold;
`

export const ErrorMessage = styled.p`
  color: #ff0b37;
  font-family: Roboto;
  font-size: 12px;
`
