import React from 'react';
import { AppUi } from './AppUi';
import { useLocalStorage } from '../hooks/UseLocalStorage';

function App() {
  const storageKey = 'taskSaver_v1';
  const [searchTask, setSearchTask] = React.useState('');
  // Custom Hooks
  const {
    item: taskList, 
    saveItem: saveTask,
    loading,
    error 
  } = useLocalStorage(storageKey, [{text: 'Task example', completed: false}]);
 
  const completedTask = taskList.filter( elem => !!elem.completed ).length;
  const totalTask     = taskList.length;

  const searchedTask  = taskList.filter((task) => {
    const taskValue = task.text.toLocaleLowerCase();
    const search    = searchTask.toLocaleLowerCase();
    return  taskValue.includes(search);
  }); 

  const completeTask = (text) => {
    const tasks = [...taskList];
    const taskIdx = tasks.findIndex(elem => elem.text === text)

    if (taskIdx => 0) {
      if (tasks[taskIdx].completed) {
        tasks[taskIdx].completed = false;  
      } else {
        tasks[taskIdx].completed = true;
      }
      saveTask(tasks);
    }
  };

  const deleteTask = (text) => {
    const tasks = [...taskList];
    const taskIdx = tasks.findIndex(elem => elem.text === text);
    tasks.splice(taskIdx, 1);
    saveTask(tasks);
  };
  
  return (
    <AppUi
    loading={loading}
    error={error} 
    completedTask={completedTask}
    totalTask={totalTask}
    searchTask={searchTask}
    setSearchTask={setSearchTask}
    searchedTask={searchedTask}
    completeTask={completeTask}
    deleteTask={deleteTask}
    />
  );
}

export default App;
