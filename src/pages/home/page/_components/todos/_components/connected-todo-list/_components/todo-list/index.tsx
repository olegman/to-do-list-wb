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
  isAddTodoLoading: boolean;
  editTodoIdLoading: number | null;
};

export const TodoList = memo(
  ({
    todos,
    onRemoveTodo,
    onEditTodo,
    onChangeCheckTodo,
    onAddTodo,
    isAddTodoLoading,
    editTodoIdLoading,
  }: TProps) => {
    return (
      <div className={cn(BLOCK_NAME)}>
        {todos.map((todo) => (
          <TodoListItem
            key={todo.id}
            editTodoIdLoading={editTodoIdLoading}
            onChangeCheckTodo={onChangeCheckTodo}
            onEditTodo={onEditTodo}
            onRemoveTodo={onRemoveTodo}
            todo={todo}
          />
        ))}

        <TodoListAdd
          isAddTodoLoading={isAddTodoLoading}
          onAddTodo={onAddTodo}
        />
      </div>
    );
  },
);
