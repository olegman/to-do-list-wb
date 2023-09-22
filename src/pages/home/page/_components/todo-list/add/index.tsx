import React, { memo } from 'react';
import classnames from 'classnames/bind';
import { ButtonLink, SimpleInput, TextAreaInput } from '@wildberries/ui-kit';
import styles from './index.module.scss';

const cn = classnames.bind(styles);

const BLOCK_NAME = 'Todo-list-add';

export const TodoListAdd = memo(() => {
  return (
    <div className={cn(BLOCK_NAME)}>
      <div className={cn(`${BLOCK_NAME}__name`)}>
        <SimpleInput id="name-add" name="name-add" />
      </div>
      <div className={cn(`${BLOCK_NAME}__description`)}>
        <TextAreaInput id="description-add" name="description-add" />
      </div>
      <div className={cn(`${BLOCK_NAME}__button`)}>
        <ButtonLink text="добавить" variant="add" />
      </div>
    </div>
  );
});
