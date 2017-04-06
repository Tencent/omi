import Omi from '../../src/index.js';

class Hello extends Omi.Component {
    constructor(data) {
        super(data);
    }
    style () {
        return  `
        <style>
          h1{
            cursor:pointer;
          }
        </style>
      `;
    }
    handleClick(target, evt){
        alert(target.innerHTML);
        this.data.onXX();
    }
    render() {
        return  `
      <div>
        {{{img}}}
      	<h1 onclick="handleClick(this, event)">Hello ,{{name}}!</h1>
      	<slot></slot>
      </div>
  		`;

    }
}


export default Hello;
