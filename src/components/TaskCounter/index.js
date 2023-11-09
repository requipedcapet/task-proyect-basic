import React from 'react';
import { TaskContext } from '../../TaskContext';

function TaskCounter() {
    const {
        completedTask,
        totalTask
    } = React.useContext(TaskContext);

    return (
        <div className='task-container'>
            <p>
                {completedTask} task complete of {totalTask}
            </p>
        </div>
    );
}

export { TaskCounter };