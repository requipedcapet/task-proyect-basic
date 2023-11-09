import React from "react";
import { TaskContext } from "../../TaskContext";

function CreateTaskForm() {
    const {
        openCreateTaskModal,
        addNewTask
    } = React.useContext(TaskContext);
    
    const [taskValue, setTaskValue] = React.useState("");

    const addTask = (event) => {
        event.preventDefault();
        addNewTask(taskValue);
        openCreateTaskModal();
    }
    
    return (
        <form 
            onSubmit={addTask}
            id="form-create-task"    
        >
            <div className="form-row">
                <label>Task Name</label>
                <textarea
                    name="task-name"
                    className="input-task-name"
                    required
                    placeholder="Add the name for your new task!"
                    value={taskValue}
                    onChange={(event) => {
                        setTaskValue(event.target.value);
                    }}
                >
                </textarea>
            </div>
            <div className="button-row">
                <button 
                    className="cancel-new-task-btn"
                    onClick={openCreateTaskModal}
                >
                    Cancel
                </button>
                <button 
                    className="create-new-task-btn
                ">
                    Create
                </button>
            </div>
        </form>
    );
}

export { CreateTaskForm }
