import React from 'react';
import TodolistItem from './todo-list-item';

const  TodoList = ({todos}) => {

  const elements = todos.map( (item) => {
    return (
      <li >
        <TodolistItem
          label={item.label}
          important={item.important} />
      </li>
    );
      {
        /* <TodolistItem {...item} /> будет сокращением через Spread */ }
  });

  return (
    <ul>
      { elements }
    </ul>
  );
};

export default TodoList;