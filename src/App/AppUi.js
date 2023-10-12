import React from "react";
import { TaskCounter } from '../components/TaskCounter';
import { TaskSearch } from '../components/TaskSearch';
import { TaskList } from '../components/TaskList'
import { TaskItem } from '../components/TaskItem';
import { CreateTask } from '../components/CreateTask';
import { LoadingTaskSkeleton } from '../components/LoadingTaskSkeleton'

import '../index.css';

function AppUi({
    loading,
    error,
    completedTask,
    totalTask,
    searchTask,
    setSearchTask,
    searchedTask,
    completeTask,
    deleteTask
}) {
    return(
        <>
            <h1 className="app-title">TaskSaver App</h1>
            <TaskCounter completed={completedTask} totalTask={totalTask} />
            <TaskSearch searchTask={searchTask} setSearchTask={setSearchTask} />
            <TaskList>
                {loading && (<>
                    <div className="skeleton-content">
                        <LoadingTaskSkeleton/>
                        <LoadingTaskSkeleton/>
                        <LoadingTaskSkeleton/>
                    </div>
                </>)}
                {error && 'Hubo un error'}
                {(!loading && searchedTask.length === 0) && 'Colocate una tarea'}

                {searchedTask.map(elem => 
                    <TaskItem 
                        key={elem.text}
                        completed={elem.completed}
                        text={elem.text}
                        onComplete={() => {
                            completeTask(elem.text);
                        }}
                        onDelete={() => {
                            deleteTask(elem.text);
                        }}
                    />
                )}
            </TaskList>
            <CreateTask/>
        </>
    );
}

export { AppUi };