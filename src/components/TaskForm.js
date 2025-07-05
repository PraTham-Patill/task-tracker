import { useState, useEffect } from "react"

const TaskForm = ({ task, onSubmit, onCancel, isEditing = false }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "medium",
    category: "personal",
    dueDate: "",
  })
  const [errors, setErrors] = useState({})

  useEffect(() => {
    if (task) {
      setFormData({
        title: task.title || "",
        description: task.description || "",
        priority: task.priority || "medium",
        category: task.category || "personal",
        dueDate: task.dueDate || "",
      })
    }
  }, [task])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const newErrors = {}
    if (!formData.title.trim()) {
      newErrors.title = "Title is required"
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    onSubmit(formData)

    if (!isEditing) {
      setFormData({
        title: "",
        description: "",
        priority: "medium",
        category: "personal",
        dueDate: "",
      })
    }
  }

  return (
    <div className="task-form-overlay">
      <div className="task-form-container">
        <h3>{isEditing ? "Edit Task" : "Add New Task"}</h3>

        <form onSubmit={handleSubmit} className="task-form">
          <div className="form-group">
            <label htmlFor="title">Title *</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter task title"
              className={errors.title ? "error" : ""}
            />
            {errors.title && <span className="error-message">{errors.title}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter task description (optional)"
              rows="3"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="priority">Priority</label>
              <select id="priority" name="priority" value={formData.priority} onChange={handleChange}>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="category">Category</label>
              <select id="category" name="category" value={formData.category} onChange={handleChange}>
                <option value="personal">Personal</option>
                <option value="work">Work</option>
                <option value="shopping">Shopping</option>
                <option value="health">Health</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="dueDate">Due Date</label>
            <input type="date" id="dueDate" name="dueDate" value={formData.dueDate} onChange={handleChange} />
          </div>

          <div className="form-actions">
            <button type="button" onClick={onCancel} className="cancel-btn">
              Cancel
            </button>
            <button type="submit" className="submit-btn">
              {isEditing ? "Update Task" : "Add Task"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default TaskForm
