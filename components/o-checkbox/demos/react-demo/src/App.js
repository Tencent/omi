import React from 'react';
/** @jsx nativeEvents */
import nativeEvents from 'jsx-native-events'
import logo from './logo.svg';
import './App.css';
import '@omiu/checkbox'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <o-checkbox label="Label"></o-checkbox>
        <br />

        <o-checkbox checked label="checked"></o-checkbox>
        <br />

        <o-checkbox onEventChange={evt=>console.log(evt.detail)} indeterminate label="indeterminate"></o-checkbox>
        <br />

        <o-checkbox disabled label="disabled"></o-checkbox>
        <br />
        <o-checkbox disabled checked label="disabled checked"></o-checkbox>
      </header>
    </div>
  );
}

export default App;
