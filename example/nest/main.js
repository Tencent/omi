import Omi from '../../src/index.js'
import Hello from './hello.js'

class App extends Omi.Component {
    constructor() {
        super()
        this.name = 'aaa'
        this.items = [{id: 1, text: 'aa'}]
    }

    handleChange() {

    }

    getRawMarkup() {

    }

    handleClick(e, count) {
        alert(e)
        alert(count)
        e.stopPropagation()
    }

    is() {
        return 'aaa'
    }

    style() {
        return `
        <style>
        h3{
            color:red;
        }
        `
    }

    render() {
        return <div aaa className="MarkdownEditor" onClick={(event) => { console.log(event); this.handleClick(event, 99) }}>
            <h3 onClick={(event) => { console.log(event); this.handleClick(event, 88) }}>Input</h3>
            <textarea
                onChange={this.handleChange}
                defaultValue={this.name}/>
            <h3>Output</h3>
            <div
                className="content"
                dangerouslySetInnerHTML={this.getRawMarkup()}
            />
            <Hello aa="bb"></Hello>
            <ul>
                {this.items.map(item => (
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>
        </div>
    }
}

Omi.render(<App />, 'body')


