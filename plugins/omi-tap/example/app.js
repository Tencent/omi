import { Component } from 'omix';
import './app.css';
import '../index.js';

export default class App extends Component {
    tapHandler(evt) {
        alert('Hello Omi + Parcel!')
    }

    render() {
        return (
            <div>
                <h1 omi-tap tap={this.tapHandler}>Hello Omi + Parcel 📦 🚀</h1>
            </div>
        )
    }
}
