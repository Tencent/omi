import Hello from './hello.js';


Omi.makeHTML('Hello', Hello);

class App extends Omi.Component {
    constructor(data) {
        super(data);
        this.testData = [{name: 'Omi'}, {name: 'dntzhang'}, {name: 'AlloyTeam'}];
    }

    render() {
        return  `
        <div>
            <Hello group-data="testData" />
            <Hello group-data="testData" />
            <Hello group-data="testData" />
        </div>
        `;

    }
}

Omi.render(new App(),"#container");