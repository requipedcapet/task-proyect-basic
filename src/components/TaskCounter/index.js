import React from 'react';

function TaskCounter({completed, totalTask}) {
    return (
        <div className='task-container'>
            <p>
                {completed} task complete of {totalTask}
            </p>
        </div>
    );
}

export { TaskCounter };