import Omi from '../../src/index.js';

class Hello extends Omi.Component {
    constructor(data) {
        super(data);
    }
    style () {
        return  `
      h1{
      	cursor:pointer;
      }
      `;
    }
    handleClick(target, evt){
        alert(target.innerHTML);
    }
    render() {
        return  `
      <div>
      	<h1 onclick="handleClick(this, event)">Hello ,{{name}}!</h1>
      </div>
  		`;

    }
}

Omi.makeHTML('Hello', Hello);

export default Hello;
