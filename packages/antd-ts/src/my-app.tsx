import logo from './logo.svg';
import './my-app.css';
import { define, WeElement } from 'omi';

define('my-app', class extends WeElement {
  render() {
    return <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/my-app.tsx</code> and save to reload.
      </p>
        <div>
          <a
            className="App-link"
            href="http://omijs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
             OmiJS.ORG
        </a> <a
            className="App-link"
            href="https://github.com/Tencent/omi"
            target="_blank"
            rel="noopener noreferrer"
          >
            Omi Github
        </a>
        </div>
      </header>
    </div>
  }
})
