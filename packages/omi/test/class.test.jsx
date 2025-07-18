import {
  define,
  render,
  Component,
  cloneElement,
  createRef,
  getHost,
  h,
  classNames,
  extractClass,
} from '@/index'

describe('class', () => {
  it('classNames1', () => {
    const res = classNames('a', 'b', {
      c: true,
      d: false,
    })
    expect(res).toBe('a b c')
  })

  it('classNames2', () => {
    const res = classNames(['a', 'b'])
    expect(res).toBe('a b')
  })

  it('classNames3', () => {
    const res = classNames('a', null, undefined, 'b')
    expect(res).toBe('a b')
  })

  it('classNames4', () => {
    const res = classNames(['a', { c: true }, ['d']], {}, null, undefined, 'b')
    expect(res).toBe('a c d b')
  })

  it('classNames5', () => {
    const res = classNames(['class1', 'class2', 'class3'])
    expect(res).toEqual('class1 class2 class3')
  })

  it('extractClass1', () => {
    const res = extractClass(
      {
        class: 'e f',
      },
      {
        a: true,
        b: false,
        c: true,
      },
    )

    expect(res).toEqual({
      class: 'e f a c',
    })
  })

  it('extractClass2', () => {
    const res = extractClass(
      {
        className: 'e f',
      },
      {
        a: true,
        b: false,
        c: true,
      },
    )

    expect(res).toEqual({
      class: 'e f a c',
    })
  })
})
