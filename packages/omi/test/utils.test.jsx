import { camelCase, Fragment, createStyleSheet } from '@/utils'

describe('utils', () => {
  beforeAll(() => {
    window.CSSStyleSheet = jest.fn().mockImplementation(() => {
      return {
        replaceSync: jest.fn(),
      }
    })
  })

  it('camelCase', () => {
    expect(camelCase('abc-def')).toBe('abcDef')
  })

  it('Fragment', () => {
    expect(Fragment({ children: ['a', 'b'] })).toEqual(['a', 'b'])
  })

  it('createStyleSheet', () => {
    const styleSheet = createStyleSheet('.a{color:red}')
    expect(styleSheet.replaceSync).toHaveBeenCalled()
  })
})
