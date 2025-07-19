import '../../dist/demo/omi-component.es.js';
import '../../dist/treeDemo/omi-tree.es.js';
import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import reactify from '../index';

const OmiReactComponent = reactify('omi-component-demo') as any;
const OmiReactTree = reactify('omi-component-tree') as any;
class ClassComponent extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  ref = null;

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
const treeData = [
  {
    id: 1,
    label: 'Parent 1',
    children: [
      {
        id: 11,
        label: 'Child 1',
        children: [
          {
            id: 111,
            label: 'Grandchild 1',
          },
          {
            id: 112,
            label: 'Grandchild 2',
          },
        ],
      },
      {
        id: 12,
        label: 'Child 2',
      },
    ],
  },
  {
    id: 2,
    label: 'Parent 2',
  }
]

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
  return <div>
    <OmiReactTree
      treeData={treeData}
    >
      <span className='content'>content</span>
    </OmiReactTree>
  </div>
}

createRoot(document.getElementById('app')!).render(<App /> as any);