import React from 'react';
import './TodoForm.css';

// To Do Forms Probs

export default function TodoForm(props) {
    const updateData = event => {
        event.preventDefault();
        const todolist = document.querySelector('.js-todolist-item').value;
        const time = document.querySelector('.js-time').value;
        document.querySelector('.js-todolist-item').value = '';
        document.querySelector('.js-time').value = '';
        props.handleAdd(todolist, time);
    }

  return (
    <form onSubmit={ updateData }>
      <input type="text" name="todolist-item" className="js-todolist-item" placeholder="Enter Activity" />
      <input type="text" className="js-time" placeholder="Enter Time" />
    <button type="submit">Add Activity</button>
    <button onClick={props.handleClear}>Clear Activity</button>
    </form>
  )
}
