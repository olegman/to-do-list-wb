import React, { memo } from 'react';
import classnames from 'classnames/bind';
import { Preloader } from '@wildberries/ui-kit';
import { Header } from '../header';
import { ConnectedTodoList } from '../todos/_components/connected-todo-list';
import styles from './index.module.scss';

const cn = classnames.bind(styles);

const BLOCK_NAME = 'Home-page';

type TProps = {
  isLoading: boolean;
};

export const HomePage = memo(({ isLoading }: TProps) => (
  <div className={cn(BLOCK_NAME)} data-page="home-page">
    <Header />
    <div className={cn(`${BLOCK_NAME}__content-wrapper`)}>
      {isLoading ? <Preloader size="large" /> : <ConnectedTodoList />}
    </div>
  </div>
));
