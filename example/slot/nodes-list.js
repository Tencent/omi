import Omi from '../../src/index.js'

class NotesList extends Omi.Component {
    render() {
        return <ol>
            { this.data.children.map(function(child) {
                return <li>{child}</li>
            })}
        </ol>
    }
}

export default NotesList
