//import React from 'react'
import PropTypes from 'prop-types'
import { FaTimes } from "react-icons/fa";

const Task = ({task, onDelete, onToggle}) => {
  // console.log(task+"see")
  return (
    <div className={`task ${task.reminder && 'reminder'}`} 
         onDoubleClick={() => onToggle(task.id)}>
      <h3>
        {task.text} {''}
        <FaTimes 
          style={{color: 'red', cursor: 'pointer'}}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>{task.key}</p>
    </div>
  )
}

Task.propTypes = {

}

export default Task
