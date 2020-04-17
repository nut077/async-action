import { combineReducers } from 'redux';
import { reducer as articleReducer } from './features/articles';
import { reducer as authReducer } from './features/auth';
import { reducer as uiReducer } from './features/ui';
import { reducer as FormReducer } from 'redux-form';

export default combineReducers({
  form: FormReducer,
  ui: uiReducer,
  articles: articleReducer,
  auth: authReducer,
});
