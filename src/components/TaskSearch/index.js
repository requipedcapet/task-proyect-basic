import React from 'react';

function TaskSearch({ searchTask, setSearchTask }) {
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