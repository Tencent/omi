import { applyRef } from '../../src/util'

describe('applyRef()', () => {
  it('should be called a ref function', () => {
    const ref = () => {}
    const cb = sinon.spy(ref)
    applyRef(cb)
    expect(cb).to.have.been.called
  })

  it('should be called a ref function with value argument', () => {
    const ref = () => {}
    const cb = sinon.spy(ref)
    const value = 'omix'
    applyRef(cb, value)
    expect(cb).to.have.been.calledWithMatch(value)
  })

  it('should be assigned a value to current property', () => {
    const ref = {
      current: ''
    }
    const value = 'omix'
    applyRef(ref, value)
    expect(ref.current).to.equal('omix')
  })
})
