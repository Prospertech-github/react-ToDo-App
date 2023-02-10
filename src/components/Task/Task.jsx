import React from 'react'
import './Task.css'

const Task = ({taskName, taskDetails}) => {
  return (
    <div className='task'>
      <h3> {taskName} </h3>
      <p> {taskDetails} </p>
    </div>
  )
}

Task.defaultProps = {
  taskName: 'My Task',
  taskDetails: 'Friday by 2PM'
}

export default Task