import { define, render, Component, options, h } from '@/index'

describe('index', () => {
  let parentElement
  //const Empty = () => null

  beforeAll(() => {
    parentElement = document.createElement('div')
    document.body.appendChild(parentElement)
  })

  beforeEach(() => {
    parentElement.innerHTML = ''
  })

  afterAll(() => {
    parentElement.parentNode.removeChild(parentElement)
    parentElement = null
  })

  it('should render svg', () => {
    class Ele extends Component {
      render() {
        return (
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <polygon points="5,5 195,10 185,185 10,195" fill="red" />
            <foreignObject x="20" y="20" width="160" height="160">
              <div xmlns="http://www.w3.org/1999/xhtml">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                mollis mollis mi ut ultricies. Nullam magna ipsum, porta vel dui
                convallis, rutrum imperdiet eros. Aliquam erat volutpat.
              </div>
            </foreignObject>
          </svg>
        )
      }
    }

    define('my-svg', Ele)
    jest.spyOn(Ele.prototype, 'render')
    render(<my-svg />, parentElement)

    expect(Ele.prototype.render).toHaveBeenCalledTimes(1)
    // 注释掉极端/高阶用例
    // expect(Ele.prototype.render).toHaveBeenCalledWith({ 'ignoreAttrs': true, children: [] }, undefined)
    expect(Ele.prototype.render).toHaveReturnedWith(
      expect.objectContaining({ nodeName: 'svg' }),
    )

    expect(parentElement.firstChild.shadowRoot.innerHTML).toBe(
      '<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><polygon points="5,5 195,10 185,185 10,195" fill="red"></polygon><foreignObject x="20" y="20" width="160" height="160"><div xmlns="http://www.w3.org/1999/xhtml">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis mollis mi ut ultricies. Nullam magna ipsum, porta vel dui convallis, rutrum imperdiet eros. Aliquam erat volutpat.</div></foreignObject></svg>',
    )
  })
})
