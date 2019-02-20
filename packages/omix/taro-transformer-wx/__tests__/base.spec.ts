import transform from '../src'
import { buildComponent, baseCode, baseOptions } from './utils'
import { INTERNAL_SAFE_GET, DEFAULT_Component_SET } from '../src/constant'

const projAppJS = `
import { define, render, WeElement } from '../../src/omi'
import './hello-element'

define('my-app', class extends WeElement {
  data = { abc: 'abc', passToChild: 123 }

  install() {
    this.dd = { a: 1 }
  }

  onMyEvent = evt => {
    this.data.abc = ' by ' + evt.detail.name
    this.data.passToChild = 1234
    this.dd.a++
    this.update()
  }

  css() {
    return \`
         div{
             color: green;
         }\`
  }

  render(props, data) {
    return (
      <div>
        Hello {props.name} {data.abc} {this.dd.a}
        <hello-element
          onMyEvent={this.onMyEvent}
          propFromParent={data.passToChild}
          dd={this.dd}
          msg="WeElement"
        />
      </div>
    )
  }
})

`

describe('基本功能', () => {
  test('导出包', () => {
    expect(transform).not.toBe(undefined)
  })

  test('projAppJS', () =>{
    const { code, ast, template } = transform({
      ...baseOptions,
      code: projAppJS
    })

    console.log(code)
    console.log(template)
  })

  describe('基本转换', () => {
    const { code, ast, template } = transform({
      ...baseOptions,
      code: buildComponent(baseCode)
    })

    test('转换结果不为空', () => {
      expect(code).not.toBeFalsy()
      expect(ast).not.toBeFalsy()
      expect(template).not.toBeFalsy()
    })

    test('render() 方法会被去除', () => {
      expect(code.includes('render()')).toBeFalsy()
      expect(code.includes('render ()')).toBeFalsy()
    })

    test('_createdData() 方法会一直存在', () => {
      expect(code.includes('_createdData()')).toBeFalsy()
    })
  })

  test('支持 TypeScript', () => {
    expect(() => transform({
      ...baseOptions,
      code: buildComponent(`
        const a: string = '';
      ` + baseCode),
      isTyped: true
    })).not.toThrow()
  })

  test('支持 Flow ', () => {
    expect(() => transform({
      ...baseOptions,
      code: buildComponent(`
      function concat(a: string, b: string) {
        return a + b;
      }
      ` + baseCode)
    })).not.toThrow()
  })

  test.skip('支持 async/await', () => {
    const { code } = transform({
      ...baseOptions,
      code: buildComponent(baseCode, `
        async f () {
          await ''
        }
      `)
    })

    expect(
      code.trim().startsWith(`import "@tarojs/async-await";`)
    ).toBeTruthy()
  })

  test('支持 Redux Provider', () => {
    const { code, template } = transform({
      ...baseOptions,
      code: buildComponent(
        `
        return (
          <Provider store={test}>
            <View />
          </Provider>
        )`,
        '',
        `import { Provider, connect } from '@tarojs/redux';
        const test = {};`
      )
    })

    expect(template.includes('Provider')).toBeFalsy()
    expect(code.includes('setStore(test);')).toBeTruthy()
  })

  test('导入 internal 方法', () => {
    const { code } = transform({
      ...baseOptions,
      code: buildComponent(baseCode)
    })

    expect(code.includes(INTERNAL_SAFE_GET)).toBeTruthy()
  })

  test('isApp 为 true 时只返回 ast', () => {
    const { code, ast, template } = transform({
      ...baseOptions,
      isApp: true,
      code: buildComponent(baseCode)
    })

    expect(ast).not.toBeUndefined()
    expect(code).toBeUndefined()
    expect(template).toBeUndefined()
  })
})
