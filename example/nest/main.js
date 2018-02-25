import Omi from '../../src/index.js'
import './hello.js'

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
            <hello aa="bb"></hello>
            <ul>
                {this.items.map(item => (
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>
        </div>
    }
}

Omi.render(new App(), 'body')

// 支持jsx 和 hs-helper

// document.body.appendChild(node);

// var parser = require('html2hscript');
// parser('<h1>Hello World<span>sfdsfsd</span></h1>', function(err, hscript) {
//    console.log(hscript);
// });
// import h from 'virtual-dom/h'
//
// console.log(h('div',{onclick:'aa'}))
//
// console.log(h`sfsdf`)
