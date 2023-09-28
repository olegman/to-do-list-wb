import React, { memo, useCallback, useState, useMemo } from 'react';
import classnames from 'classnames/bind';
import {
  ButtonLink,
  SimpleInput,
  TextAreaInput,
  Preloader,
} from '@wildberries/ui-kit';
import i18next from 'i18next';
import { TRANSLATIONS } from '@/_constants/i18next/translations';
import styles from './index.module.scss';

const cn = classnames.bind(styles);

const BLOCK_NAME = 'Todo-list-add';

type TProps = {
  onAddTodo: (name: string, description: string) => void;
  isAddTodoLoading: boolean;
};

type TAddTodo = {
  name: string;
  description: string;
};

export const TodoListAdd = memo(({ onAddTodo, isAddTodoLoading }: TProps) => {
  const initialState: TAddTodo = useMemo(
    () => ({
      name: '',
      description: '',
    }),
    [],
  );
  const [addTodo, setAddTodo] = useState<TAddTodo>(initialState);

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

  const handleAddTodo = useCallback(() => {
    if (addTodo.name) {
      onAddTodo(addTodo.name, addTodo.description);
      setAddTodo(initialState);
    }
  }, [initialState, addTodo, onAddTodo]);

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
      {isAddTodoLoading ? (
        <Preloader color="dark-purple" size="medium" />
      ) : (
        <div className={cn(`${BLOCK_NAME}__button`)}>
          <ButtonLink
            onClick={handleAddTodo}
            text={i18next.t(TRANSLATIONS.addTodoButton)}
            variant="add"
          />
        </div>
      )}
    </div>
  );
});
