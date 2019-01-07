import { define, WeElement, h } from 'omi'

// This is the only way to set the attributes type of a custom element
// @TODO @xcatliu We are working on a tool to build the type definition automatically 
//
// https://github.com/Microsoft/TypeScript/issues/4648
declare global {
    namespace JSX {
        interface IntrinsicElements {
            'hello-omi': Omi.CustomElementBaseAttributes & {
                msg: string;
                'prop-from-parent': string;
                onAbc: (e: Event) => void;
            };
        }
    }
}

interface HelloOmiProps {
    msg: string;
    propFromParent: string;
}

define('hello-omi', class extends WeElement<HelloOmiProps> {

    onClick = (evt: Event) => {
        // trigger CustomEvent
        this.fire('abc', { name: 'dntzhang & f & xcatliu', age: 12 })
        evt.stopPropagation()
    }

    css() {
        return `div {
            color: red;
            cursor: pointer;
        }`
    }

    render() {
        return (
            <div onClick={this.onClick}>
                Hello {this.props.msg} [{this.props.propFromParent}]
                <div>Click Me!</div>
            </div>
        )
    }
})