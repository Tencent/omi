import { getUpdatePath } from '../src/define'



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
