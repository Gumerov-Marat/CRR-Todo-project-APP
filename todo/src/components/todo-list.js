import React from 'react';
import TodolistItem from './todo-list-item';

const  TodoList = () => {
  return (
    <ul>
      <li><TodolistItem label="Drink Coffee"/></li>
      <li><TodolistItem
       label="Build React app"
       important /></li>
    </ul>
  );
};

export default TodoList;