import Omi from '../../src/index.js';

class Pie extends Omi.Component {
    constructor(data) {
        data = Object.assign({
            percent : 0
        },data);
        super(data);

    }

    render() {
        //from http://web.jobbole.com/83148/
        return  `
             <svg viewBox="0 0 32 32">
                <circle r="16" cx="16" cy="16" stroke-dasharray="${this.data.percent} 100"></circle>
             </svg>
  		`;

    }

    style () {
        return  `
    svg {
        width: 100px;
        height: 100px;
        transform: rotate(-90deg);
        background: yellowgreen;
        border-radius: 50%;
    }

    circle {
        fill: yellowgreen;
        stroke: #655;
        stroke-width: 32;
    }
      `;
    }
}


export default Pie;
