import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Styled Components
import { ThemeProvider } from 'styled-components'
import theme from './theme/theme'

// React Router
import { BrowserRourter as Router } from 'react-router-dom'

// Redux Setup
import { Provider } from 'react-redux'
import {  compose, configureStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './store/root.reducer';


const LOCAL = process.env.REACT_APP_LOCAL_MODE;

const composeEnhancers = LOCAL ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
  devTools: composeEnhancers
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <ThemeProvider theme = { theme } >
          <App />
        </ThemeProvider >
      </Provider>
    </Router>
  </React.StrictMode>
);

