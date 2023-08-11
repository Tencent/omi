
import { render, h } from 'omi'
import './ui/index/index'
import store from './store/index'
import './assets/index.css'

store.ignoreAttrs = true
render(<my-index />, '#root', store)
