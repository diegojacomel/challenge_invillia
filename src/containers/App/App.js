/** Modules */
import React, { Component } from 'react';

/** Containers */
import './App.css';

// Router
import MyRouter from '../../router/router';
import { HashRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
            <MyRouter />
        </HashRouter>
      </div>
    );
  }
}

export default App;
