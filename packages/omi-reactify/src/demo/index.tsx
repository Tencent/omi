import '../../dist/omi-component.es.js';
import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import reactify from '../index';

const OmiReactComponent = reactify('omi-component-demo');

const App = () => {
  const [complex, setComplex] = React.useState({ name: 'React' });
  const ref = React.useRef();

  useEffect(()=>{
    console.log('ref', ref.current)
  }, [])

  return <OmiReactComponent
    show={true}
    label='React Component'
    complex={complex}
    ref={ref}
    camelCase="camelCase"
    style={{ color: 'red' }}
    onMockClick={(_e: React.MouseEvent) => { setComplex({ name: 'Omi'}) }}
  >
    <span className='content'>content</span>
  </OmiReactComponent>
}

createRoot(document.getElementById('app')!).render(<App />);