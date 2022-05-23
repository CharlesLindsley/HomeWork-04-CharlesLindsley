import './App.css';
import React from 'react';
import TaskList from './components/TaskList.js';

function MainApp(){

        return (
            <div className='App'>
                <h1>Task List</h1>
                <TaskList />
            </div>
        );

}

export default MainApp;