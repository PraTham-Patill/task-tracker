import { useState } from "react"
import { saveToStorage } from "../utils/localStorage"

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!username.trim()) {
      setError("Username is required")
      return
    }

    saveToStorage("user", username.trim())
    onLogin(username.trim())
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Personal Task Tracker</h1>
        <p>Welcome! Please enter your username to continue.</p>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value)
                setError("")
              }}
              placeholder="Enter your username"
              className={error ? "error" : ""}
            />
            {error && <span className="error-message">{error}</span>}
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
