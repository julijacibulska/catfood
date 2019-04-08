import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider, theme } from "./config/theme";
import { GlobalStyle } from './components/_styled/global';

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <>
            <GlobalStyle />
            <App />
        </>
    </ThemeProvider>,
    document.getElementById('root')
);

serviceWorker.unregister();
