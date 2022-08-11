import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import { persistor, store } from './redux/store';
import { GlobalStyles } from './styles/GlobalStyles';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <GlobalStyles />
      <HashRouter>
        <App />
      </HashRouter>
    </PersistGate>
  </Provider>
);
