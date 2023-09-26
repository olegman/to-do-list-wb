import React, { memo } from 'react';
import classnames from 'classnames/bind';
import { TTodo } from '../../../../types';
import { TodoListItem } from './_components/item';
import { TodoListAdd } from './_components/add';
import styles from './index.module.scss';

const cn = classnames.bind(styles);

const BLOCK_NAME = 'Todo-list';

type TProps = {
  todos: Array<TTodo>;
  onRemoveTodo: (id: number) => void;
  onEditTodo: (name: string, description: string, id: number) => void;
  onChangeCheckTodo: (check: boolean, id: number) => void;
  onAddTodo: (name: string, description: string) => void;
};

export const TodoList = memo(
  ({
    todos,
    onRemoveTodo,
    onEditTodo,
    onChangeCheckTodo,
    onAddTodo,
  }: TProps) => {
    return (
      <div className={cn(BLOCK_NAME)}>
        {todos.map((todo) => (
          <TodoListItem
            key={todo.id}
            onChangeCheckTodo={onChangeCheckTodo}
            onEditTodo={onEditTodo}
            onRemoveTodo={onRemoveTodo}
            todo={todo}
          />
        ))}

        <TodoListAdd onAddTodo={onAddTodo} />
      </div>
    );
  },
);
