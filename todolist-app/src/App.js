import './App.css';
import React, { useState } from 'react';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';

//counter, seCounter, To Do List and Time Choosen

function App() {
    const [counter, setCounter] = useState(4);
    const [data, setData] = useState([
        { todolist: 'What Do You Need To Do?', time: 'Choose a Time', key: 0 },
        { todolist: 'What Do You Need To Do?', time: 'Choose a Time', key: 2 },
        { todolist: 'What Do You Need To Do?', time: 'Choose a Time', key: 3 },
        { todolist: 'What Do You Need To Do?', time: 'Choose a Time', key: 4 },
    ]);

    const handleClear = (event) => {
        event.preventDefault();
        setData([{ todolist: 'What Do You Need To Do?', time: 'Choose a Time', key: '' }]);
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

    return ( < div className = "App" >
        <
        header className = "App-header" >
        <
        h2 > To Do List < /h2>     <
        /header> <
        TodoForm handleClear = { handleClear }
        handleAdd = { handleAdd }
        />      <
        TodoList items = { data }
        handleUpdate = { handleUpdate }
        />   <
        /div>
    );
}

export default App;