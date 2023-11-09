import React from "react";
import { useLocalStorage } from '../hooks/UseLocalStorage';

const TaskContext = React.createContext();

function TaskProvider({ children }) {
    const storageKey = 'taskSaver_v1';
    const [searchTask, setSearchTask] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);

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
  
    const addNewTask = (taskName) => {
        const tasks = [...taskList];
        tasks.push({
            text: taskName,
            completed: false
        });
        saveTask(tasks);
    }; 
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

    const openCreateTaskModal = () => {
        setOpenModal(!openModal);
    }

    return (
        <TaskContext.Provider 
            value={{
                loading,
                error,
                completedTask,
                totalTask,
                searchTask,
                setSearchTask,
                addNewTask,
                searchedTask,
                completeTask,
                deleteTask,
                openModal,
                openCreateTaskModal
            }}>
            {children}
        </TaskContext.Provider>
    );
}

export { TaskContext, TaskProvider }