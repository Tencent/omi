import '../../dist/omi-component.es.js';
import React, { useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import reactify from '../index';

const OmiReactComponent = reactify('omi-component-demo');

const App = () => {
  const [complex, setComplex] = React.useState({ name: 'React' });
  const ref = React.useRef();

  useEffect(()=>{
    console.log('ref', ref.current)
  }, [])

  const MockComponent = ({name}) => {
    const n = name || 'Omi'
    const ref = useRef();

    useEffect(() => {
      console.log('ref', ref.current)
    }, [])

    return <h1 ref={ref} onClick={()=>{console.log('click')}}>{n}</h1>
  }

  const mockFunction = (name) => <MockComponent name={name} />

  console.log('==mockFunction', mockFunction);

  return <OmiReactComponent
    show={true}
    label='React Component'
    complex={complex}
    ref={ref}
    camelCase="camelCase"
    style={{ color: 'red' }}
    onMockClick={(_e: React.MouseEvent) => { setComplex({ name: 'Omi'}) }}
    mockFunction={mockFunction}
  >
    <span className='content'>content</span>
  </OmiReactComponent>
}

createRoot(document.getElementById('app')!).render(<App />);