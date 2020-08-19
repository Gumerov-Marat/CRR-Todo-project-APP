import React from 'react';
import TodolistItem from './todo-list-item';

const  TodoList = ({todos}) => {

  const elements = todos.map((item) => {

    const { id, ...itemProps } = item;

    return (
      <li key="{id}">
        <TodolistItem {...itemProps} />
      </li>
    );
      {  /* <TodolistItem {...item} /> будет сокращением через Spread */ }
  });

  return (
    <ul>
      { elements }
    </ul>
  );
};

export default TodoList;