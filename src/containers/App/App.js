/** Modules */
import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';

/** Theme */
import { primaryTheme } from '../../styles/theme';

/** Router */
import MyRouter from '../../router/router';
import { HashRouter } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <ThemeProvider theme={primaryTheme}>
                <HashRouter>
                    <MyRouter />
                </HashRouter>
            </ThemeProvider>
        );
    }
}

export default App;
