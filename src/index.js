import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { indigo500, pink500 } from 'material-ui/styles/colors';

import './index.css';
import App from './App';
import store from './store';

const theme = getMuiTheme({
  palette: {
    primary1Color: indigo500,
  },
  checkbox: {
    checkedColor: pink500,
    requiredColor: pink500,
  },
});

ReactDOM.render(
  <MuiThemeProvider muiTheme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);
