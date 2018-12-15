import Omi from 'omi';
import Frame from '../component/frame.js';
import AppStore from './app-store.js'

Omi.render(new Frame(),'body', {
    increment: true,
    store: new AppStore({lan: 'en'}),
    autoStoreToData: true
});
