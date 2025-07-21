import React from 'react'
import { createRoot } from 'react-dom/client'
import reactify from '../index'
import './omi-tree-demo'

const OmiTreeDemo = reactify('omi-tree-demo')

const App = () => <OmiTreeDemo />

createRoot(document.getElementById('app')!).render(<App />)
