import { WeElement, define } from 'omi'

define('o-router', class extends WeElement {


  installed() {
    this.props.routes[0].componentLoader()
      .then(res => {
        console.log(res)
        console.log(Omi)


      }).catch(res => {
        console.log(res)
      })
  }
  render() {
    return <div><span>Hello, H5!</span></div>
  }
})

