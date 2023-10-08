import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { App } from 'components/App/App';
import { store } from 'redux/store';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: '#212121',
    secondary: '#757575',
    light: '#ffffff',
    bgc: 'rgba(117, 117, 117, 0.4)',
    border: 'rgba(117, 117, 117, 0.2)',
  },
  radii: {
    sm: '4px',
    md: '8px',
    lg: '16px',
    circle: '50%',
  },
  spacing: value => `${value * 4}px`,
  shadow:
    '1px 4px 6px 0px rgba(0, 0, 0, 0.16), 0px 4px 4px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)',
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
