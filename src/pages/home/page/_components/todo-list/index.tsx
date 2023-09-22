import React, { memo } from 'react';
import classnames from 'classnames/bind';
import { TodoListItem } from './item';
import { TodoListAdd } from './add';
import styles from './index.module.scss';
import { TTodo } from './type';

const cn = classnames.bind(styles);

const BLOCK_NAME = 'Todo-list';

const todos: Array<TTodo> = [
  {
    id: 1,
    name: 'Прочитать документацию',
    description:
      'Sed nibh felis, ultrices ut condimentum sed, hendrerit vel ex. Donec euismod purus vitae nibh auctor efficitur. Maecenas lacinia magna a ornare placerat. Integer placerat in arcu nec hendrerit. Pellentesque tristique cursus nulla, at mattis sapien fringilla at. Vestibulum viverra et nisi non placerat. Morbi a mollis arcu, eget interdum dolor.',
    date: '2023-01-26T13:51:50.417Z',
    check: true,
  },
  {
    id: 2,
    name: 'Написать код',
    description:
      'In sit amet purus iaculis, dictum urna in, euismod ipsum. Nunc a nulla imperdiet velit malesuada aliquam ut eget nisl. Aliquam vitae nisl urna. Duis egestas nulla diam, eu pharetra lorem blandit ut. Morbi eu tincidunt lorem. Donec ex ipsum, faucibus nec neque non, lacinia luctus massa. Praesent vestibulum ex sapien, a tempor mauris congue eget.',
    date: '2023-05-17T13:51:50.417Z',
    check: false,
  },
  {
    id: 3,
    name: 'Согласовать с заказчиком',
    description:
      'Sed nibh felis, ultrices ut condimentum sed, hendrerit vel ex. Donec euismod purus vitae nibh auctor efficitur. Maecenas lacinia magna a ornare placerat. Integer placerat in arcu nec hendrerit. Pellentesque tristique cursus nulla, at mattis sapien fringilla at. Vestibulum viverra et nisi non placerat. Morbi a mollis arcu, eget interdum dolor.',
    date: '2023-09-21T13:51:50.417Z',
    check: false,
  },
];

export const TodoList = memo(() => {
  return (
    <div className={cn(BLOCK_NAME)}>
      {todos.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} />
      ))}

      <TodoListAdd />
    </div>
  );
});
