import '../../dist/omi-component.es.js';
import './omi-tree';
import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import reactify from '../index';

const OmiReactComponent = reactify('omi-component-demo') as any;
const OmiTree = reactify('omi-tree') as any;

class ClassComponent extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  ref: HTMLHeadingElement | null = null;

  componentDidMount(): void {
    console.log('componentDidMount', this.ref);
  }

  componentWillUnmount(): void {
    console.log('componentWillUnmount');
  }

  render(): any {
    return <h1
      ref={(ref) => this.ref = ref}
      onClick={() => {
        console.log('click')
        this.setState({ count: this.state.count + 1 });
      }}
    >
      {this.props.name || 'Omi'} : {this.state.count}
    </h1>
  }
}

const MockComponent = ({ name }: { name: string }): any => {
  const ref = useRef<HTMLHeadingElement>(null);
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('ref', ref.current)
    return () => {
      console.log('unmount')
    }
  }, [])

  useEffect(() => {
    console.log('name change', name)
  }, [name])

  return <h1
    ref={ref}
    onClick={() => {
      console.log('click')
      setCount(count + 1)
    }}
  >
    {name} : {count}
  </h1>
}

const RenderFunction = ({ name }) => <MockComponent name={name} />;

const App = (): any => {
  const [complex, setComplex] = React.useState({ name: 'React' });
  const ref = React.useRef();

  const [name, setName] = useState('Omi');

  const btnClick = () =>{
    console.log('btnClick')
    setName(name === 'Omi' ? 'React' : 'Omi')
  }

  useEffect(() => {
    console.log('ref', ref.current)
  }, [])
  console.log('=====App render=====');
  const [treeData] = useState([
    {
      name: 'Root',
      children: [
        { name: 'Child 1' },
        { 
          name: 'Child 2',
          children: [
            { name: 'Grandchild 1' },
            { name: 'Grandchild 2' }
          ]
        }
      ]
    }
  ]);

  const handleNodeClick = (e: CustomEvent) => {
    console.log('Node clicked:', e.detail);
  };

  return (
    <div style={{ padding: '20px' }}>
      <OmiReactComponent
        show={true}
        label='React Component'
        complex={complex}
        ref={ref}
        camelCase="camelCase"
        style={{ color: 'red' }}
        onMockClick={(_e: React.MouseEvent) => { setComplex({ name: 'Omi' }) }}
        renderFunction={MockComponent}
      >
        <span className='content'>content</span>
      </OmiReactComponent>
      <button className='content' onClick={btnClick}>change name</button>
      
      <div style={{ marginTop: '20px', padding: '20px', border: '1px solid #eee', borderRadius: '4px' }}>
        <h2>Tree Demo</h2>
        <OmiTree 
          nodes={treeData} 
          onNodeClick={handleNodeClick}
        />
      </div>
    </div>
  )
}

createRoot(document.getElementById('app')!).render(<App />);
