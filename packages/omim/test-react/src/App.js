import React from 'react';
import logo from './logo.svg';
import './App.css';
import '@omim/core/button'
import MyComponent from './MyComponent'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a
          className="App-link"
          href="https://github.com/Tencent/omi"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Omi and Omim
        </a>
        <m-button>Omim Button</m-button>
        <MyComponent></MyComponent>
      </header>
    </div>
  );
}

export default App;
