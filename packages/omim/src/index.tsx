import { define, WeElement, render, h } from 'omi';
import './hello-omi';
import './index.css';
import * as logo from './logo.svg';

interface AbcEvent extends Event {
  detail: {
    name: string;
    age: number;
  }
}

interface MyAppProps {
  name: string;
}

interface MyAppData {
  abc: string;
  passToChild: string;
}

define('my-app', class extends WeElement<MyAppProps, MyAppData> {
  data = {
    abc: '',
    passToChild: 'from parent'
  }
  /**
   * bind CustomEvent
   * 
   */
  onAbc = (evt: AbcEvent) => {
    // get evt data by evt.detail
    this.data.abc = ` by ${evt.detail.name}`
    this.update()
  }

  css() {
    return `
        .app {
            text-align: center;
        }
        
        .app-logo {
            animation: app-logo-spin infinite 20s linear;
            height: 80px;
        }
        
        .app-header {
            background-color: #222;
            height: 150px;
            padding: 20px;
            color: white;
        }
        
        .app-title {
            font-size: 1.5em;
        }
        
        .app-logo {
            cursor: pointer;
        }
        
        @keyframes app-logo-spin {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(360deg);
            }
        } 
        `
  }

  render(props, data) {
    return (
      <div class="app">
        <header class="app-header">
          <img
            src={logo}
            class="app-logo"
            alt="logo"
          />
          <h1 class="app-title">Welcome to {props.name}</h1>
        </header>
        Hello {this.props.name} {this.data.abc}
        <hello-omi onAbc={this.onAbc} prop-from-parent={this.data.passToChild} msg="Omi"></hello-omi>
      </div>
    )
  }
})

render(<my-app name='Omi'></my-app>, '#root')