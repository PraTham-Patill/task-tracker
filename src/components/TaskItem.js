const TaskItem = ({ task, onToggleComplete, onDelete, onEdit }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return (
      date.toLocaleDateString() +
      " " +
      date.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })
    )
  }

  const isOverdue = (dueDate) => {
    if (!dueDate) return false
    const today = new Date()
    const due = new Date(dueDate)
    return due < today && !task.completed
  }

  const getPriorityClass = (priority) => {
    return `priority-${priority}`
  }

  const getCategoryIcon = (category) => {
    const icons = {
      work: "💼",
      personal: "👤",
      shopping: "🛒",
      health: "🏥",
      other: "📝",
    }
    return icons[category] || "📝"
  }

  return (
    <div className={`task-item ${task.completed ? "completed" : ""} ${isOverdue(task.dueDate) ? "overdue" : ""}`}>
      <div className="task-checkbox">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleComplete(task.id)}
          id={`task-${task.id}`}
        />
        <label htmlFor={`task-${task.id}`} className="checkbox-label"></label>
      </div>

      <div className="task-content">
        <div className="task-header">
          <h4 className="task-title">{task.title}</h4>
          <div className="task-badges">
            <span className={`priority-badge ${getPriorityClass(task.priority)}`}>{task.priority}</span>
            <span className="category-badge">
              {getCategoryIcon(task.category)} {task.category}
            </span>
          </div>
        </div>

        {task.description && <p className="task-description">{task.description}</p>}

        <div className="task-meta">
          <span className="created-date">Created: {formatDate(task.createdAt)}</span>
          {task.dueDate && (
            <span className={`due-date ${isOverdue(task.dueDate) ? "overdue" : ""}`}>
              Due: {new Date(task.dueDate).toLocaleDateString()}
            </span>
          )}
        </div>
      </div>

      <div className="task-actions">
        <button onClick={() => onEdit(task)} className="edit-btn" title="Edit task">
          ✏️
        </button>
        <button onClick={() => onDelete(task.id)} className="delete-btn" title="Delete task">
          🗑️
        </button>
      </div>
    </div>
  )
}

export default TaskItem
