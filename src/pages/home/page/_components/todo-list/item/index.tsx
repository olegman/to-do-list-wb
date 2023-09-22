import React, { memo, useState } from 'react';
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
import { TTodo } from '../type';
import styles from './index.module.scss';

const cn = classnames.bind(styles);

const BLOCK_NAME = 'Todo-list-item';

export interface ITodoListItemProps {
  todo: TTodo;
}

export const TodoListItem = memo(({ todo }: ITodoListItemProps) => {
  const [edit, setEdit] = useState(false);

  return (
    <div className={cn(BLOCK_NAME)}>
      {edit ? (
        <div className={cn(`${BLOCK_NAME}__name`)}>
          <SimpleInput id="name" name="name" value={todo.name} />
        </div>
      ) : (
        <div className={cn(`${BLOCK_NAME}__name`)}>
          <div className={cn(`${BLOCK_NAME}__check`)}>
            <Checkbox checked={todo.check} id="check" name="check" />
          </div>
          <Label htmlFor="check">{todo.name}</Label>
        </div>
      )}
      <div>
        {edit ? (
          <TextAreaInput
            id="description"
            name="description"
            value={todo.description}
          />
        ) : (
          <Text size="h3" text={todo.description} />
        )}
      </div>
      <div>
        <Text size="h3" text={getFormattedDate(todo.date)} />
      </div>
      {edit ? (
        <span className={cn(`${BLOCK_NAME}__save`)}>
          <ButtonLink
            onClick={() => {
              setEdit(false);
            }}
            text="сохранить"
            variant="interface"
          />
        </span>
      ) : (
        <span className={cn(`${BLOCK_NAME}__edit`)}>
          <ButtonLink
            onClick={() => {
              setEdit(!edit);
            }}
            text="редактировать"
            variant="interface"
          />
        </span>
      )}
      <ButtonLink text="удалить" variant="remove" />
    </div>
  );
});
