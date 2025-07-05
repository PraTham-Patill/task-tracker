const TaskFilter = ({ filter, setFilter, taskCounts }) => {
  const filters = [
    { key: "all", label: "All", count: taskCounts.all },
    { key: "pending", label: "Pending", count: taskCounts.pending },
    { key: "completed", label: "Completed", count: taskCounts.completed },
  ]

  return (
    <div className="task-filter">
      {filters.map((filterItem) => (
        <button
          key={filterItem.key}
          className={`filter-btn ${filter === filterItem.key ? "active" : ""}`}
          onClick={() => setFilter(filterItem.key)}
        >
          {filterItem.label}
          <span className="filter-count">{filterItem.count}</span>
        </button>
      ))}
    </div>
  )
}

export default TaskFilter
