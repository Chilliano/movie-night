import { combineReducers } from '@ngrx/store';
import { AppReducer } from './app.reducer';

export default combineReducers({
  App: AppReducer,
});
