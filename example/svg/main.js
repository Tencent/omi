import Pie from './pie.js';


Omi.makeHTML('Pie', Pie);

class App extends Omi.Component {
    constructor(data) {
        super(data);
    }

    render() {
        return  `
        <div>
            <Pie data-percent="30" />
        </div>
        `;

    }
}

Omi.render(new App(),"#container");