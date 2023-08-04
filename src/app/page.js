"use client";

import { AiOutlinePlus } from 'react-icons';

 
import React, { useState } from 'react';


const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editingTodo, setEditingTodo] = useState(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      if (editingTodo) {
        const updatedTodos = todos.map((todo) => {
          if (todo.id === editingTodo.id) {
            return { ...todo, text: inputValue };
          }
          return todo;
        });
        setTodos(updatedTodos);
        setEditingTodo(null);
      } else {
        const newTodo = {
          id: Date.now(),
          text: inputValue,
        };
        setTodos([...todos, newTodo]);
      }
      setInputValue('');
    }
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleEditTodo = (todo) => {
    setInputValue(todo.text);
    setEditingTodo(todo);
  };

  return (
    <div className="todo-container bg-blue-600 w-90 h-auto body">
      <h1 className='text-center font-bolder text-3xl font-sans md:font-serif pt-5 titre'>TODO  .   LIST</h1>
      <form onSubmit={handleAddTodo} className='text-center mt-5'>
      <input type="text" value={inputValue}
          onChange={handleInputChange} placeholder="Type here" className="input input-bordered w-full max-w-xs mr-4 bg-blue-200 text-black " />
        <button type="submit" className='btn btn-success'>{editingTodo ? 'Update' : 'Add a to do '}  </button>
      </form>
      <ul>
        {todos.map((todo) => (
       
         <li key={todo.id} className='container'>
          <div className='border-solid border-2  content'>
            <p className='mb-3 bg-blue-880 p-3 font-bold mx-20 text' >{todo.text}</p>  
            <div className="buttons-container">
              <button className="btn btn-warning btn" onClick={() => handleEditTodo(todo)}>
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/></svg>
              </button>
              <button className="btn btn-error btn" onClick={() => handleDeleteTodo(todo.id)}>
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
              </button>
            </div>
            </div>
          </li>
      
        ))}
      </ul>
    </div>
  );
};

export default TodoList;