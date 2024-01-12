import {
  define,
  render,
  Component,
  cloneElement,
  createRef,
  getHost,
  h
} from '@/index'

test('cloneElement should return a cloned vnode with updated props', () => {
  // 创建一个虚拟节点
  const vnode = {
    nodeName: 'div',
    attributes: {
      id: 'myDiv',
      className: 'container',
    },
    children: ['Hello, World!'],
  }

  // 更新属性
  const props = {
    className: 'updated-container',
    style: { color: 'red' },
  }

  // 调用 cloneElement 函数
  const clonedVnode = cloneElement(vnode, props)

  // 断言返回的虚拟节点与预期相等
  expect(clonedVnode).toEqual({
    nodeName: 'div',
    attributes: {
      id: 'myDiv',
      className: 'updated-container',
      style: { color: 'red' },
      ignoreAttrs: true,
      key: undefined,
    },
    children: ['Hello, World!'],
  })
})

test('cloneElement should return a cloned vnode with updated children', () => {
  // 创建一个虚拟节点
  const vnode = {
    nodeName: 'div',
    attributes: {
      id: 'myDiv',
      className: 'container',
    },
    children: ['Hello, World!'],
  }

  // 更新子节点
  const newChildren = ['Hello, Jest!']

  // 调用 cloneElement 函数
  const clonedVNode = cloneElement(vnode, {}, newChildren)

  // 断言返回的虚拟节点与预期相等
  expect(clonedVNode).toEqual({
    nodeName: 'div',
    attributes: {
      id: 'myDiv',
      className: 'container',
      ignoreAttrs: true,
      key: undefined,
    },
    children: ['Hello, Jest!'],
  })
})