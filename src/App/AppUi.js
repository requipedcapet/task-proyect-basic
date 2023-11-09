import React from "react";
import { TaskCounter } from '../components/TaskCounter';
import { TaskSearch } from '../components/TaskSearch';
import { TaskList } from '../components/TaskList'
import { TaskItem } from '../components/TaskItem';
import { CreateTask } from '../components/CreateTask';
import { LoadingTaskSkeleton } from '../components/LoadingTaskSkeleton'
import { Modal } from "../components/Modal";
import { TaskContext } from "../TaskContext";
import { CreateTaskForm } from '../components/CreateTask/CreateTaskform'
import '../index.css';

function AppUi() {
    const {
        loading,
        error,
        searchedTask,
        completeTask,
        deleteTask,
        openModal
    } = React.useContext(TaskContext);

    return(
        <>
            <h1 className="app-title">TaskSaver App</h1>
            <h4>For TSC</h4>  
            <h6 className="app-title-h6">Made for Jhan</h6>
            
            <TaskCounter/>
            <TaskSearch/>
            <TaskList>
                {loading && (<>
                    <div className="skeleton-content">
                        <LoadingTaskSkeleton/>
                        <LoadingTaskSkeleton/>
                        <LoadingTaskSkeleton/>
                    </div>
                </>)}
                {error && 'Hubo un error'}
                {(!loading && searchedTask.length === 0) && 'Task not found Bronce V'}

                {searchedTask.map((elem, idx) => {
                    return <TaskItem 
                        key={idx}
                        completed={elem.completed}
                        text={elem.text}
                        onComplete={() => {
                            completeTask(elem.text);
                        }}
                        onDelete={() => {
                            deleteTask(elem.text);
                        }}
                    />
                }
                )}
            </TaskList>
            <CreateTask/>

            {openModal && (
                <Modal>
                    <CreateTaskForm/>    
                </Modal>
            )}
        </>
    );
}

export { AppUi };