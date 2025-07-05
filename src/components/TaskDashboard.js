import { useState, useEffect } from "react"
import TaskForm from "./TaskForm"
import TaskList from "./TaskList"
import TaskFilter from "./TaskFilter"
import { getFromStorage, saveToStorage } from "../utils/localStorage"
import sampleTasks from "../utils/sampleData"

const TaskDashboard = ({ user, onLogout, darkMode, toggleDarkMode }) => {
  const [tasks, setTasks] = useState([])
  const [filter, setFilter] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [showForm, setShowForm] = useState(false)
  const [editingTask, setEditingTask] = useState(null)

  useEffect(() => {
    const savedTasks = getFromStorage("tasks")
    if (savedTasks && savedTasks.length > 0) {
      setTasks(savedTasks)
    } else {
      // Load sample data for first-time users
      setTasks(sampleTasks)
      saveToStorage("tasks", sampleTasks)
    }
  }, [])

  useEffect(() => {
    saveToStorage("tasks", tasks)
  }, [tasks])

  const addTask = (taskData) => {
    const newTask = {
      id: Date.now(),
      ...taskData,
      completed: false,
      createdAt: new Date().toISOString(),
    }

    setTasks([newTask, ...tasks])
    setShowForm(false)
  }

  const updateTask = (taskId, updatedData) => {
    setTasks(tasks.map((task) => (task.id === taskId ? { ...task, ...updatedData } : task)))
    setEditingTask(null)
  }

  const deleteTask = (taskId) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      setTasks(tasks.filter((task) => task.id !== taskId))
    }
  }

  const toggleComplete = (taskId) => {
    setTasks(tasks.map((task) => (task.id === taskId ? { ...task, completed: !task.completed } : task)))
  }

  const filteredTasks = tasks.filter((task) => {
    const matchesFilter =
      filter === "all" || (filter === "completed" && task.completed) || (filter === "pending" && !task.completed)

    const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase())

    return matchesFilter && matchesSearch
  })

  const taskCounts = {
    all: tasks.length,
    completed: tasks.filter((task) => task.completed).length,
    pending: tasks.filter((task) => !task.completed).length,
  }

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div className="header-content">
          <h1>Welcome back, {user}!</h1>
          <div className="header-actions">
            <button
              className="dark-mode-toggle"
              onClick={toggleDarkMode}
              title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {darkMode ? "☀️" : "🌙"}
            </button>
            <button className="logout-btn" onClick={onLogout}>
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="dashboard-content">
        <div className="dashboard-controls">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search tasks..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <span className="search-icon">🔍</span>
          </div>

          <button className="add-task-btn" onClick={() => setShowForm(true)}>
            + Add New Task
          </button>
        </div>

        <TaskFilter filter={filter} setFilter={setFilter} taskCounts={taskCounts} />

        {showForm && <TaskForm onSubmit={addTask} onCancel={() => setShowForm(false)} />}

        {editingTask && (
          <TaskForm
            task={editingTask}
            onSubmit={(data) => updateTask(editingTask.id, data)}
            onCancel={() => setEditingTask(null)}
            isEditing={true}
          />
        )}

        <TaskList
          tasks={filteredTasks}
          onToggleComplete={toggleComplete}
          onDelete={deleteTask}
          onEdit={setEditingTask}
        />

        {filteredTasks.length === 0 && (
          <div className="empty-state">
            <p>
              {searchTerm
                ? `No tasks found matching "${searchTerm}"`
                : filter === "all"
                  ? "No tasks yet. Create your first task!"
                  : `No ${filter} tasks found.`}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default TaskDashboard
