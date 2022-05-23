import React, { useState } from 'react'

function TaskInput ({onNewTask}) {
    const [taskText, setTaskText] = useState("");

    const handleChange = (e) => {
        setTaskText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        onNewTask(taskText);

        setTaskText('');
    }

    return (
        <form onSubmit={handleSubmit}>
        <input type='text' 
                className="inputBox" 
                value={taskText}
                onChange={handleChange}>
        </input>
        <button className = 'formBtn' 
                type='submit'
                disabled={taskText.trim().length === 0}
                onClick={handleSubmit}

                >Create</button>
        </form>
    )
}

export {TaskInput};