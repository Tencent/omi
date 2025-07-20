import React from 'react'
import { createRoot } from 'react-dom/client'
import OmiTreeDemo from './OmiTreeDemo'

const App = () => <OmiTreeDemo />

createRoot(document.getElementById('app')!).render(<App />)
