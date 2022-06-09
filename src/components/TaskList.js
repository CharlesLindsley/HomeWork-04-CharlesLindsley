import React, { useState } from "react";
import { Task } from "./Task.js";
import {TaskInput} from "./TaskInput.js"
import {v4 as uuid} from "uuid"
import moon from "../moon.svg";

//CL: TaskList component
function TaskList () {
  const [tasks, setTasks] = useState([]);

  const handleComplete = (taskId) => {
      setTasks((tasks) => tasks.map((task) => {
        if (task.id !== taskId) return task;

        return {
          ...task,
          isComplete: true
        };
      }));

    setTimeout(() => handleRemove(taskId), 4000);
  };

  const handleRemove = (taskId) => {
    setTasks((state) =>({
      tasks: tasks.filter((task) => task.id !== taskId)
    }));
  }

  const handleNewTask = (taskText) => {
    const newTask = {
      id: uuid(),
      text: taskText,
      isComplete: false
    };

    //CL: I had this returning an object instead of an array. . . 
    setTasks((tasks) => [newTask, ...tasks]);
  }
    return (
      <>
        <TaskInput onNewTask={handleNewTask}/>

        <div className = 'taskListWrapper'>
          <ul className = 'taskList'>
            {tasks.map((task) => (
              <Task key={task.id} 
                    task={task}
                    onRemove={handleRemove}
                    onComplete={handleComplete} />
            ))}
          </ul>
        </div>
        
        {tasks.length === 0 && <div className="moonContainer">
          <img className="moonImg" src={moon} alt="Moon Image"></img>
          <p>Task list is empty!</p>
        </div>}
      </>
    );
}

export default TaskList;