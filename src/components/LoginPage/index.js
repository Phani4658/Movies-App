import './index.css'
import {useState} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

const LoginPage = props => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isSuccessful, setIsSuccessful] = useState(true)
  const [errorMsg, setErrorMsg] = useState('')

  if (Cookies.get('jwt_token') !== undefined) {
    return <Redirect to="/" />
  }

  const onChangeUsernameField = event => {
    setUsername(event.target.value)
  }

  const onChangePasswordField = event => {
    setPassword(event.target.value)
  }

  const onClickLoginButton = async event => {
    event.preventDefault()
    const {history} = props
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const apiUrl = 'https://apis.ccbp.in/login'

    const apiResult = await fetch(apiUrl, options)
    const result = await apiResult.json()
    if (apiResult.ok) {
      Cookies.set('jwt_token', result.jwt_token, {expires: 7})
      history.replace('/')
    } else {
      setErrorMsg(result.error_msg)
      setIsSuccessful(false)
    }

    setUsername('')
    setPassword('')
  }

  const loginPageUserNameField = () => (
    <div className="form-field-container">
      <label htmlFor="username" className="field-label">
        Username
      </label>
      <input
        type="text"
        id="username"
        className="form-field"
        placeholder="Enter your Username"
        onChange={onChangeUsernameField}
      />
    </div>
  )

  const loginPagePasswordField = () => (
    <div className="form-field-container" style={{marginBottom: '10px'}}>
      <label htmlFor="password" className="field-label">
        Password
      </label>
      <input
        type="password"
        id="password"
        className="form-field"
        placeholder="Enter your Password"
        onChange={onChangePasswordField}
      />
    </div>
  )

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
        {!isSuccessful && <p className="error-msg">{errorMsg}</p>}
        <button id="signInBtn" type="submit" onClick={onClickLoginButton}>
          Login
        </button>
      </form>
    </section>
  )
}

export default LoginPage
