import TaskItem from "./TaskItem"

const TaskList = ({ tasks, onToggleComplete, onDelete, onEdit }) => {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onToggleComplete={onToggleComplete} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </div>
  )
}

export default TaskList
