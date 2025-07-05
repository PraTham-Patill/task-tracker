import { useState, useEffect } from "react"
import Login from "./components/Login"
import TaskDashboard from "./components/TaskDashboard"
import { getFromStorage, saveToStorage } from "./utils/localStorage"
import "./styles/App.css"

function App() {
  const [user, setUser] = useState(null)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const savedUser = getFromStorage("user")
    const savedDarkMode = getFromStorage("darkMode")

    if (savedUser) {
      setUser(savedUser)
    }

    if (savedDarkMode) {
      setDarkMode(savedDarkMode)
    }
  }, [])

  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : ""
  }, [darkMode])

  const handleLogin = (username) => {
    setUser(username)
  }

  const handleLogout = () => {
    setUser(null)
    saveToStorage("user", null)
  }

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    saveToStorage("darkMode", newDarkMode);
  }

  return (
    <div className="App">
      {!user ? (
        <Login onLogin={handleLogin} />
      ) : (
        <TaskDashboard user={user} onLogout={handleLogout} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      )}
    </div>
  )
}

export default App
