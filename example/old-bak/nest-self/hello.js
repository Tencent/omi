import Omi from '../../src/index.js';

class Hello extends Omi.Component {
    constructor(data) {
        super(data);
        window.countHello++
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
        console.log(1)
        let aa=  `
      <div>
        {{{img}}}
      	<h1 onclick="handleClick(this, event)">Hello ,{{name}}!</h1>

      	`+((window.countHello<5)?'<Hello data-name="'+window.countHello+'" />':'') +`
      </div>
  		`;
        console.log(aa)
        return aa;

    }
}



export default Hello;
