import React, { memo, useCallback, useState } from 'react';
import classnames from 'classnames/bind';
import { ButtonLink, SimpleInput, TextAreaInput } from '@wildberries/ui-kit';
import styles from './index.module.scss';

const cn = classnames.bind(styles);

const BLOCK_NAME = 'Todo-list-add';

type TProps = {
  onAddTodo: (name: string, description: string) => void;
};

export const TodoListAdd = memo(({ onAddTodo }: TProps) => {
  const initialState = {
    name: '',
    description: '',
  };
  const [addTodo, setAddTodo] = useState(initialState);

  const handleChangeName = useCallback(({ value }) => {
    setAddTodo((prev) => ({
      ...prev,
      name: value,
    }));
  }, []);

  const handleChangeDescription = useCallback(({ value }) => {
    setAddTodo((prev) => ({
      ...prev,
      description: value,
    }));
  }, []);

  return (
    <div className={cn(BLOCK_NAME)}>
      <div className={cn(`${BLOCK_NAME}__name`)}>
        <SimpleInput
          id="name-add"
          name="name-add"
          onChange={handleChangeName}
          value={addTodo.name}
        />
      </div>
      <div className={cn(`${BLOCK_NAME}__description`)}>
        <TextAreaInput
          id="description-add"
          name="description-add"
          onChange={handleChangeDescription}
          value={addTodo.description}
        />
      </div>
      <div className={cn(`${BLOCK_NAME}__button`)}>
        <ButtonLink
          onClick={() => {
            onAddTodo(addTodo.name, addTodo.description);
            setAddTodo(initialState);
          }}
          text="добавить"
          variant="add"
        />
      </div>
    </div>
  );
});
