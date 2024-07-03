// Write your code here
import {Component} from 'react'

import './index.css'

import {loginValue, logoutValue} from '../Message'
import logoutButtonValue from '../Logout'
import loginButtonValue from '../Login'

class Home extends Component {
  state = {loggedIn: false}

  clickLogout = () => {
    this.setState(prevState => ({loggedIn: true}))
  }

  clickLogin = () => {
    this.setState(prevState => ({loggedIn: false}))
  }

  render() {
    const {loggedIn} = this.state
    let authValue
    if (loggedIn === true) {
      authValue = (
        <div className="inner-container">
          <h1 className="main-heading">{loginValue}</h1>
          <button
            className="custom-btn"
            type="submit"
            onClick={this.clickLogin}
          >
            {loginButtonValue}
          </button>
        </div>
      )
    } else {
      authValue = (
        <div className="inner-container">
          <h1 className="main-heading">{logoutValue}</h1>
          <button
            className="custom-btn"
            type="submit"
            onClick={this.clickLogout}
          >
            {logoutButtonValue}
          </button>
        </div>
      )
    }

    return <div className="bg-container">{authValue}</div>
  }
}

export default Home
