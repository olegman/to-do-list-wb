import React from 'react';
import { RouteNode } from '@wildberries/service-router';
import {
  injectAsyncReducer,
  ReduxStoreLoader,
} from '@mihanizm56/redux-core-modules';
import { AppLayout } from '@/_layouts/app-layout';
import reducerUI, {
  MODULE_REDUCER_NAME as reducerUIName,
} from '@/_redux/ui-module';
import { storeInjectConfig } from '@/pages/home/page/_components/todos/store-inject-config';
import { ConnectedHomePage } from './page';

const pageNode = 'home';

const action = async ({ store, toState }) => {
  injectAsyncReducer({
    store,
    name: reducerUIName,
    reducer: reducerUI,
  });

  return {
    title: 'Home',
    content: (
      <ReduxStoreLoader storeInjectConfig={storeInjectConfig} toState={toState}>
        <AppLayout>
          <RouteNode nodeName={pageNode}>
            {({ route, content }) => {
              if (route.name === pageNode) {
                return <ConnectedHomePage />;
              }

              return content;
            }}
          </RouteNode>
        </AppLayout>
      </ReduxStoreLoader>
    ),
  };
};

export default action;
