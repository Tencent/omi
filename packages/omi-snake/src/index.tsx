
import { render, h } from 'omi'
import './ui/index/index'
import store from './stores/index'
import './assets/index.css'

store.ignoreAttrs = true
render(<my-index />, '#root', store)
