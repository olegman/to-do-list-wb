import React, { memo } from 'react';
import { connect } from 'react-redux';
import { TTodosState } from '@/pages/home/page/_components/todos/_redux/todos-module/types';
import { isLoadingTodosSelector } from '@/pages/home/page/_components/todos/_redux/todos-module/selectors';
import { HomePage } from '@/pages/home/page/_components/home-page';

type TProps = TMapStateToProps;

type TMapStateToProps = {
  isLoading: boolean;
};

const WrappedComponent = memo(({ isLoading }: TProps) => (
  <HomePage isLoading={isLoading} />
));

const mapStateToProps = (state: TTodosState): TMapStateToProps => ({
  isLoading: isLoadingTodosSelector(state),
});

export const ConnectedHomePage = connect(mapStateToProps)(WrappedComponent);
