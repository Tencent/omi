class Hello extends Omi.Component {

    style () {
        return  `
          h1{
          	cursor:pointer;
          }`;
    }

    handleClick(evt){
        alert(evt.target.innerHTML);
    }

    render() {
        return  `
      <div>
      	<h1 onclick="handleClick">Hello ,{{name}}!</h1>
      </div>`;

    }
}

Omi.makeHTML('Hello', Hello);