import { getUpdatePath } from '../src/define'
import { matchGlobalData, needUpdate, fixPath } from '../src/render'
import { npn, nProps } from '../src/util'
//proxy test
//https://github.com/Palindrom/JSONPatcherProxy/blob/master/test/spec/proxySpec.js

//vdom diff render h dom test
//https://github.com/Tencent/omi/tree/v3/test

test('getUpdatePath', () => {
  let path = getUpdatePath({ a: 1 })
  expect(path).toEqual({ a: true })

  path = getUpdatePath({ a: 1, b: 1 })
  expect(path).toEqual({ a: true, b: true })

  path = getUpdatePath({ a: 1, b: { c: null } })
  expect(path).toEqual({ a: true, 'b.c': true })

  path = getUpdatePath({ a: 1, b: { c: [] }, d: {} })
  expect(path).toEqual({ a: true, 'b.c': true, d: true })


  path = getUpdatePath({ a: 1, b: { c: [{ e: 1 }] }, d: {} })
  expect(path).toEqual({ a: true, 'b.c[0].e': true, d: true })

  path = getUpdatePath({ a: 1, b: { c: [{ e: 1 }] }, d: {} })
  expect(path).toEqual({ a: true, 'b.c[0].e': true, d: true })

  path = getUpdatePath({ a: 1, b: { c: [{ e: 1 }, 2] }, d: {} })
  expect(path).toEqual({ a: true, 'b.c[1]': true, 'b.c[0].e': true, d: true })
})

test('matchGlobalData', () => {

  expect(matchGlobalData(['a'], { a: 1 })).toEqual(true)

  expect(matchGlobalData(['a'], { b: 1 })).toEqual(false)

  expect(matchGlobalData(['a.b'], { 'a.b': 1 })).toEqual(true)

  expect(matchGlobalData(['a[1]'], { 'a[1]': 1 })).toEqual(true)

  expect(matchGlobalData(['a[1].c'], { 'a[1]': 1 })).toEqual(false)

})

test('needUpdate', () => {
  const path = { 'a': true, 'b.c': true, 'd[2][1]': true }
  expect(needUpdate({ a: 1 }, path)).toEqual(true)

  expect(needUpdate({ 'a[1]': 1 }, path)).toEqual(true)

  expect(needUpdate({ 'b': 1 }, path)).toEqual(false)

  expect(needUpdate({ 'd[2][1]': 1 }, path)).toEqual(true)

  expect(needUpdate({ 'd[2][1].c': 1 }, path)).toEqual(true)

  expect(needUpdate({ 'd[2]': 1 }, path)).toEqual(false)

  expect(needUpdate({ 'b.c.d': 1 }, path)).toEqual(true)

})

test('fixPath', () => {
  const path = '/a/b/2/d/e'
  expect(fixPath(path)).toEqual('a.b[2].d.e')
  expect(fixPath('/a/b/1/2/3')).toEqual('a.b[1][2][3]')
})

test('npn', () => {
  expect(npn('ab-cd')).toEqual('abCd')
  expect(npn('ab-cd-ef')).toEqual('abCdEf')
})

test('nProps', () => {
  expect(nProps({ a: { value: 1 }, b: { value: 2 }, abC: { value: 3 } })).toEqual({ a: 1, b: 2, abC: 3 })
})