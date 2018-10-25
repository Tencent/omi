import { tag, WeElement, render, h } from 'omi'
import './hello-omi';

import * as logo from './omi.png';

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

@tag('my-app')
class MyApp extends WeElement<MyAppProps, MyAppData> {
    static get data(): MyAppData {
        return {
            abc: '',
            passToChild: ''
        };
    }

    /**
     * bind CustomEvent
     * @TODO @xcatliu @dntzhang It's hard to find the event data type
     */
    onAbc = (evt: AbcEvent) => {
        // get evt data by evt.detail
        this.data.abc = ` by ${evt.detail.name}`
        this.update()
    }

    css() {
        return `
            div {
                color: green;
            }
        `
    }

    render() {
        return (
            <div>
                <img src={logo} />
                Hello {this.props.name} {this.data.abc}
                <hello-omi onAbc={this.onAbc} prop-from-parent={this.data.passToChild} msg="Omi"></hello-omi>
            </div>
        )
    }
}

render(<my-app name='Omi v4.0'></my-app>, '#root')