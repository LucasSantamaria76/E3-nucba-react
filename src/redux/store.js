import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import persistStore from 'redux-persist/lib/persistStore';
import { composeWithDevTools } from '@redux-devtools/extension';
import rootReducer from './rootReducer';

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export const persistor = persistStore(store);
