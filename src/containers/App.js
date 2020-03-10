import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import {
  Articles,
  ShowArticle,
  CreateArticle,
  Header,
  Signin,
  Signup
} from './';
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
    <div>
      <Header />
      <div className="content">
        <Switch>
          <Route path="/login" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path="/articles/new" component={CreateArticle} />
          <Route path="/articles/:id" component={ShowArticle} />
          <Route path="/articles" component={Articles} />
        </Switch>
      </div>
    </div>
  </Provider>
);
