import React from 'react';
import { TaskContext } from '../../TaskContext';

function TaskSearch() {
  const {
    searchTask,
    setSearchTask
} = React.useContext(TaskContext);

  return (
    <div className='task-search-container'>
      <input 
          type='text'
          placeholder='Search your tasks'
          value={searchTask}
          onChange={(elem) => {
              setSearchTask(elem.target.value);
          }}
      />
    </div>
  );
}

export { TaskSearch };