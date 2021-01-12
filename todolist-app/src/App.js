import './App.css';
import React, { useState } from 'react';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';

//lines 6 - 55 counter, setCounter, To Do List and Time Choosen


//Text written upon appearance of site.
function App() {
    const [counter, setCounter] = useState(4);
    const [data, setData] = useState([
        { todolist: 'Click to List Activity', time: 'Click to List Time', key: 0 },
        { todolist: 'Click to List Activity', time: 'Click to List Time', key: 0 },
    ]);

    //Makes all the items stay or disappear within the clear button
    const handleClear = (event) => {
        event.preventDefault();
        setData([/*{ todolist: '', time: '', key: '' }*/]);
    }

    const handleAdd = (todolist, time) => {
        const key = counter;
        setCounter(counter + 1);
        setData(oldData => [...oldData, { todolist, time, key }]);
    }

    const handleUpdate = (key, todolist, time) => {
        setData(oldData => oldData.map(item => {
            if (key === item.key) {
                return {
                    todolist,
                    time,
                    key
                };
            } else {
                return item;
            }
        }));
    }

    return ( 
        <div className = "App">
        <header className = "App-header">
        <h2> To Do List </h2>    
        </header>
        <TodoForm handleClear = { handleClear }
        handleAdd = { handleAdd }/>     
        <TodoList items = { data }
        handleUpdate = { handleUpdate }/>  
        </div>
    );
}

export default App;