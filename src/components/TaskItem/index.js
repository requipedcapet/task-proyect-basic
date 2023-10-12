import React from 'react';
import { DeleteIcon } from '../AllIcons/DeleteIcon';
import '../AllIcons/icons.css'

function TaskItem({ text, completed, onComplete, onDelete}) {
  let taskStatus = '';
  let statusClass = '';
    
  if (completed) {
      taskStatus = 'Done';
      statusClass = 'task-done';
  } else {
      taskStatus = 'Pending';
      statusClass = 'task-pending';
  }

  return(
    <li>
      <span 
        className={statusClass}
        onClick={onComplete}>
        {taskStatus}
      </span>
      <p>{text}</p>
      <span 
        className='delete-task'
        onClick={onDelete}>
        <DeleteIcon color={`red`} size={`50%`}/>
      </span>
    </li>
  );
}

export { TaskItem };