import Hello from './hello.js'


class App extends Omi.Component {

    installed(){
        this.refs.test.innerHTML = 'aaa'
    }

    style() {
        return `
        <style>
        h3{
            color:red;
            cursor: pointer;
        }
        `
    }

    render() {

        return <div>
                    <h3 ref='test'>b</h3>
                    <hello-tag name={this.name}></hello-tag>
                </div>
    }
}

document.body.innerHTML+='<div id="ctn3"></div>'

let app = new App()
Omi.render(app,'#ctn3')




describe('base', function() {
    it('test ref and refs', function() {
        expect(app.refs.test.innerHTML).toBe('aaa')
    })
})
