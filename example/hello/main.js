import Hello from './hello.js';


Omi.makeHTML('Hello', Hello);

class App extends Omi.Component {
    constructor(data) {
        super(data);
    }

    render() {
        return  `
        <div>
            <Hello data-name="Omi" />
        </div>
        `;

    }
}

Omi.render(new App(),"#container");