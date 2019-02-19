import { define, WeElement, h } from 'omi'


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