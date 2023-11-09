import React from 'react';
import { TaskContext } from '../../TaskContext';

function CreateTask() {
    const {
        openCreateTaskModal
    } = React.useContext(TaskContext);

    // onClick={() =>{setOpenModal(!OpenModal)}}
    return (
        <div className='add-task-container'>
            <button 
                className='btn-add' 
                onClick={openCreateTaskModal}
            >
                + 
            </button>    
        </div>
    );
}

export { CreateTask };