import './index.css'
import {useState} from 'react'

const LoginPage = () => {
  const login = 'Hello'

  const loginPageUserNameField = () => {
    console.log('Username')
    return (
      <div className="form-field-container">
        <label htmlFor="username" className="field-label">
          Username
        </label>
        <input
          type="text"
          id="username"
          className="form-field"
          placeholder="Enter your Username"
        />
      </div>
    )
  }

  const loginPagePasswordField = () => {
    console.log('Username')
    return (
      <div className="form-field-container" style={{marginBottom: '10px'}}>
        <label htmlFor="password" className="field-label">
          Password
        </label>
        <input
          type="text"
          id="password"
          className="form-field"
          placeholder="Enter your Password"
        />
      </div>
    )
  }

  return (
    <section id="loginSection">
      <header>
        <img
          src="https://res.cloudinary.com/dv0oedkxm/image/upload/v1686423528/Movies-A-Netflix-clone/MoviesLogo_ayvbyq.svg"
          alt="login website logo"
        />
      </header>
      <form>
        <h1 className="login-form-heading">Login</h1>
        {loginPageUserNameField()}
        {loginPagePasswordField()}
        <p className="error-msg">error Msg</p>
        <button id="signInBtn" type="submit">
          Sign in
        </button>
      </form>
    </section>
  )
}

export default LoginPage
