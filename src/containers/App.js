import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Articles, ShowArticle } from './';
import { configureStore } from '../lib';
import TopBarProgress from 'react-topbar-progress-indicator';
import './App.scss';

const store = configureStore();

TopBarProgress.config({
  barColors: {
    '0': '#da4453',
    '1.0': '#ed5565'
  },
  shadowBlur: 5
});

export default () => (
  <Provider store={store}>
    <div className="content">
      <Switch>
        <Route exact path="/articles" component={Articles} />
        <Route exact path="/articles/:id" component={ShowArticle} />
      </Switch>
    </div>
  </Provider>
);
