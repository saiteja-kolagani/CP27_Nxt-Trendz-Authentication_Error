// Write your JS code here
import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', errorMsg: '', error: false}

  onChangeUsername = event => {
    this.setState({
      username: event.target.value,
    })
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitLoginForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    if (username.trim() === '') {
      this.setState({errorMsg: 'Username Required', error: true})
      return
    }
    if (password.trim() === '') {
      this.setState({errorMsg: 'Password Required', error: true})
      return
    }

    const loginDetails = {
      username,
      password,
    }
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(loginDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      this.onSubmitSuccess()
    } else {
      this.setState({errorMsg: data.error_msg, error: true})
    }
  }

  render() {
    const {username, password, error, errorMsg} = this.state

    return (
      <main className="login-form-main-container">
        <figure className="login-form-image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="login-form-image"
          />
        </figure>
        <form
          onSubmit={this.onSubmitLoginForm}
          className="login-form-form-container"
        >
          <div className="login-form-logo-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
              className="login-form-logo"
            />
          </div>
          <div className="login-username-field">
            <label htmlFor="username-input-field" className="login-label">
              USERNAME
            </label>
            <br />
            <input
              id="username-input-field"
              type="text"
              placeholder="Username"
              className="login-input-feild"
              onChange={this.onChangeUsername}
              value={username}
            />
          </div>
          <div className="login-password-field">
            <label htmlFor="password-input-field" className="login-label">
              PASSWORD
            </label>
            <br />
            <input
              id="password-input-field"
              type="password"
              placeholder="Password"
              className="login-input-feild"
              onChange={this.onChangePassword}
              value={password}
            />
          </div>
          {error && <p className="error-msg">{errorMsg}</p>}
          <button type="submit" className="login-form-button">
            Login
          </button>
        </form>
      </main>
    )
  }
}

export default LoginForm
