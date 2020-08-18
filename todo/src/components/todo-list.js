import React from 'react';
import TodolistItem from './todo-list-item';

const  TodoList = () => {
  return (
    <ul>
      <li><TodolistItem /></li>
      <li><TodolistItem /></li>
    </ul>
  );
};

export default TodoList;