import React, { memo, useState, useCallback, useMemo } from 'react';
import classnames from 'classnames/bind';
import {
  Checkbox,
  Label,
  Text,
  ButtonLink,
  SimpleInput,
  TextAreaInput,
} from '@wildberries/ui-kit';
import { getFormattedDate } from '@/_utils/date';
import { TTodo } from '../../../../../../types';
import styles from './index.module.scss';

const cn = classnames.bind(styles);

const BLOCK_NAME = 'Todo-list-item';

type TTodoListItemProps = {
  todo: TTodo;
  onRemoveTodo: (id: number) => void;
  onEditTodo: (title: string, description: string, id: number) => void;
  onChangeCheckTodo: (check: boolean, id: number) => void;
};
type TEditTodo = {
  name: string;
  description: string;
};

export const TodoListItem = memo(
  ({
    todo,
    onRemoveTodo,
    onEditTodo,
    onChangeCheckTodo,
  }: TTodoListItemProps) => {
    const [edit, setEdit] = useState(false);

    const [editTodo, setEditTodo] = useState<TEditTodo>({
      name: todo.name,
      description: todo.description,
    });

    const handleChangeName = useCallback(({ value }) => {
      setEditTodo((prev) => ({
        ...prev,
        name: value,
      }));
    }, []);

    const handleChangeDescription = useCallback(({ value }) => {
      setEditTodo((prev) => ({
        ...prev,
        description: value,
      }));
    }, []);

    const handleClickEdit = useCallback(() => {
      if (
        editTodo.name !== todo.name ||
        editTodo.description !== todo.description
      ) {
        onEditTodo(editTodo.name, editTodo.description, todo.id);
      }
      setEdit(false);
    }, [onEditTodo, todo, editTodo, setEdit]);

    const date = useMemo(() => getFormattedDate(todo.date), [todo.date]);

    const handleSetEdit = useCallback(() => {
      setEdit(!edit);
    }, [edit]);

    const handleChangeCheckTodo = ({ value }) => {
      onChangeCheckTodo(value, todo.id);
    };

    const handleRemoveTodo = () => {
      onRemoveTodo(todo.id);
    };

    return (
      <div className={cn(BLOCK_NAME)}>
        {edit ? (
          <div className={cn(`${BLOCK_NAME}__name`)}>
            <SimpleInput
              id="name"
              name="name"
              onChange={handleChangeName}
              value={editTodo.name}
            />
          </div>
        ) : (
          <div className={cn(`${BLOCK_NAME}__name`)}>
            <div className={cn(`${BLOCK_NAME}__check`)}>
              <Checkbox
                checked={todo.check}
                id={`check-${todo.id}`}
                name={`check-${todo.id}`}
                onChange={handleChangeCheckTodo}
              />
            </div>
            <Label htmlFor="check">{todo.name}</Label>
          </div>
        )}
        <div>
          {edit ? (
            <TextAreaInput
              id="description"
              name="description"
              onChange={handleChangeDescription}
              value={editTodo.description}
            />
          ) : (
            <Text size="h3" text={todo.description} />
          )}
        </div>
        <div>
          <Text size="h3" text={date} />
        </div>
        {edit ? (
          <span className={cn(`${BLOCK_NAME}__save`)}>
            <ButtonLink
              onClick={handleClickEdit}
              text="сохранить"
              variant="interface"
            />
          </span>
        ) : (
          <span className={cn(`${BLOCK_NAME}__edit`)}>
            <ButtonLink
              onClick={handleSetEdit}
              text="редактировать"
              variant="interface"
            />
          </span>
        )}
        <ButtonLink
          onClick={handleRemoveTodo}
          text="удалить"
          variant="remove"
        />
      </div>
    );
  },
);
