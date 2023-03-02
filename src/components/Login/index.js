import {Component} from 'react'

import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import WatchContext from '../../context/WatchContext'

import {
  LoginContainer,
  LoginFormContainer,
  Img,
  FormContainer,
  InputContainer,
  UserLabel,
  Input,
  CheckBoxContainer,
  CheckBoxInput,
  PasswordContainer,
  PasswordLabel,
  LoginButton,
  ErrorMessage,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    isChecked: false,
    showSubmitError: false,
    errorMsg: '',
  }

  renderLoginForm = () => {
    const {
      isChecked,
      showSubmitError,
      errorMsg,
      username,
      password,
    } = this.state
    console.log(isChecked)
    return (
      <WatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const loginCardColor = isDarkTheme ? '#000000' : '#ffffff'
          const onSubmitSuccess = jwtToken => {
            const {history} = this.props
            Cookies.set('jwt_token', jwtToken, {expires: 30})
            history.replace('/')
          }

          const onSubmitFailure = errorMessage => {
            this.setState({showSubmitError: true, errorMsg: errorMessage})
          }

          const onSubmitForm = async event => {
            event.preventDefault()
            const userDetails = {username, password}
            const loginUrl = 'https://apis.ccbp.in/login'
            const options = {
              method: 'POST',
              body: JSON.stringify(userDetails),
            }
            const response = await fetch(loginUrl, options)
            const data = await response.json()
            console.log(data)
            if (response.ok) {
              onSubmitSuccess(data.jwt_token)
            } else {
              onSubmitFailure(data.error_msg)
            }
          }

          const onEnterUserName = event => {
            this.setState({username: event.target.value})
          }

          const onEnterPassword = event => {
            this.setState({password: event.target.value})
          }

          const onCheckBox = event => {
            if (event.target.checked) {
              this.setState({isChecked: true})
            } else {
              this.setState({isChecked: false})
            }
          }

          return (
            <LoginFormContainer loginColor={loginCardColor}>
              <Img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                alt="website logo"
              />
              <FormContainer onSubmit={onSubmitForm}>
                <InputContainer>
                  <UserLabel htmlFor="username">USERNAME</UserLabel>
                  <Input
                    type="text"
                    id="username"
                    value={username}
                    placeholder="Username"
                    onChange={onEnterUserName}
                  />
                </InputContainer>
                <PasswordContainer>
                  <UserLabel htmlFor="password-text">PASSWORD</UserLabel>
                  <Input
                    type={isChecked ? 'text' : 'password'}
                    id="password-text"
                    value={password}
                    onChange={onEnterPassword}
                    placeholder="Password"
                  />
                </PasswordContainer>

                <CheckBoxContainer>
                  <CheckBoxInput
                    type="checkbox"
                    id="check-box"
                    onChange={onCheckBox}
                  />
                  <PasswordLabel htmlFor="check-box">
                    Show Password
                  </PasswordLabel>
                </CheckBoxContainer>
                <LoginButton type="submit">Login</LoginButton>
                {showSubmitError && <ErrorMessage>*{errorMsg}</ErrorMessage>}
              </FormContainer>
            </LoginFormContainer>
          )
        }}
      </WatchContext.Consumer>
    )
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <WatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const bgColor = isDarkTheme ? '#212121' : '#f1f1f1'

          return (
            <LoginContainer bgColor={bgColor}>
              {this.renderLoginForm()}
            </LoginContainer>
          )
        }}
      </WatchContext.Consumer>
    )
  }
}

export default Login
