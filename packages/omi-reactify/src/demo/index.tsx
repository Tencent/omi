import '../../dist/omi-component.es.js';
import React from 'react';
import { createRoot } from 'react-dom/client';
import reactify from '../index';

const OmiComponentDemo = reactify('omi-component-demo');

const App = () => {
  const [complex, setComplex] = React.useState({ name: 'React' });

  return <OmiComponentDemo
    show={true}
    label='React Component'
    complex={complex}
    onClick={(e: Event) => { setComplex({ name: 'Omi'}) }}
  >
    <span className='content'>content</span>
  </OmiComponentDemo>
}

createRoot(document.getElementById('app')!).render(<App />);