import useTodo from "../hooks/useTodo"

function TodoItem(props) {
  const {job, setEditId} = props
  const {hdlDel} = useTodo()

  const onDelete = () => {
    if(confirm('Delete this item?')) { hdlDel(job.id) }
  }
  return (
    <div className="todo-item">
      <p className={job.completed ? 'job-done' : ''}>{job.todo} </p>
      <div className="btn-group">
        <a onClick={()=>{setEditId(job.id)}} className="yall">Edit</a>
        <a onClick={onDelete} className="red">Delete</a>
      </div>
    </div>
  )
}

export default TodoItem