import { css } from '@/index'

// jsdom 没有 constructable stylesheet，这里给出最小替身，只关心 css() 拼出的字符串
class CSSStyleSheetStub {
  replaceSync(text) {
    this.cssText = text
  }
}

describe('css', () => {
  beforeAll(() => {
    global.CSSStyleSheet = CSSStyleSheetStub
  })

  it('should keep a 0 value', () => {
    expect(css`width: ${0}px;`.cssText).toBe('width: 0px;')
    expect(css`opacity: ${0};`.cssText).toBe('opacity: 0;')
  })

  it('should keep an empty string value', () => {
    expect(css`--my-content: ${''};`.cssText).toBe('--my-content: ;')
  })

  it('should build the sheet from strings and values', () => {
    expect(css`height: ${100}px;`.cssText).toBe('height: 100px;')
  })

  it('should reuse the sheet for the same css text', () => {
    expect(css`width: ${1}px;`).toBe(css`width: ${1}px;`)
    expect(css`width: ${1}px;`).not.toBe(css`width: ${2}px;`)
  })

  it('should not return an inherited object for a css text matching Object.prototype', () => {
    expect(css`constructor`).toBeInstanceOf(CSSStyleSheetStub)
  })

  it('should throw for an unsupported value', () => {
    expect(() => css`width: ${{}};`).toThrow('Unsupported value in CSS')
  })
})
