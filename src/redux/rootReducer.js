import { combineReducers } from 'redux';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import { tasksReducer } from './tasks/tasksReducer';
import { pokeReducer } from './pokeApi/pokeReducer';

const rootReducer = combineReducers({
  tasksReducer,
  pokeReducer,
});

const persistConfig = {
  key: 'root',
  storage: storage,
};

export default persistReducer(persistConfig, rootReducer);
