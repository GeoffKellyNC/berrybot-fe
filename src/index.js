import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css';

// Styled Components
import { ThemeProvider } from 'styled-components'
import theme from './theme/theme'

// React Router
import { BrowserRouter as Router } from 'react-router-dom';

// Redux Setup
// Redux Imports
import { Provider } from 'react-redux';
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import reducer from './store/root.reducer';

const LOCAL = process.env.REACT_APP_LOCAL_MODE;

const composeEnhancers =
  (LOCAL === 'true' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
      <Provider store={store}>
        <ThemeProvider theme = { theme } >
          <App />
        </ThemeProvider >
      </Provider>
    </Router>
);

