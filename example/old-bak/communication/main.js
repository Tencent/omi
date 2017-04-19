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

class App extends Omi.Component {
    constructor(data){
        super(data);
        this.helloData = {
            name:"aaa"
        }
    }

    render () {
        return `<div>
                    <Hello name="hello" data="helloData" />
                </div>`;
    }
}


var app = new App();
Omi.render(app ,'#container');

app.hello.data.name="bbb";

app.update();
