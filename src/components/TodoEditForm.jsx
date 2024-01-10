import { useState } from "react"
import useTodo from "../hooks/useTodo"

function TodoEditForm(props) {
  const {job, onDone} = props
  const {hdlEdit} = useTodo()
  const [input, setInput] = useState(job.todo)
  const [check, setCheck] = useState(job.completed)

  const hdlSubmit = e => {
    e.preventDefault()
    let updatedJob = { todo: input, completed: check}
    hdlEdit(job.id, updatedJob)
    onDone()
  }
  return (
    <form className='todo-edit-form' onSubmit={hdlSubmit}>
      <input type="checkbox" value={check} checked={check} onChange={()=>setCheck(prv=>!prv)} className="number3"/>
      <input type="text" value={input} onChange={e=>setInput(e.target.value)} className="number4"/>
      <button type="submit" className="save">Save</button>
      <button onClick={onDone} type="reset" className="cancel">Cancel</button>
    </form>
  )
}

export default TodoEditForm