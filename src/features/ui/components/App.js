import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './Header';
import {
  CreateArticle,
  EditArticle,
  ShowArticle,
  Articles,
} from '../../articles';
import { Signin, Signup } from '../../auth';
import { configureStore } from '../../../store';
import TopBarProgress from 'react-topbar-progress-indicator';
import './App.scss';

const store = configureStore();

TopBarProgress.config({
  barColors: {
    '0': '#da4453',
    '1.0': '#ed5565',
  },
  shadowBlur: 5,
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
          <Route path="/articles/:id/edit" component={EditArticle} />
          <Route path="/articles/:id" component={ShowArticle} />
          <Route path="/articles" component={Articles} />
        </Switch>
      </div>
    </div>
  </Provider>
);
