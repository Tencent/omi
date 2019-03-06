import { WeElement, define } from 'omi'

define('o-router', class extends WeElement {

  firstTime = true

  installed() {
    this.props.routes[0].componentLoader()
      .then(res => {
        const arr = this.props.routes[0].path.replace(/pages/,'page').split('/')

        this.vd = {nodeName:arr[1]+'-'+arr[2]}
        this.update()

      }).catch(res => {
        console.log(res)
      })

    
  }
  render() {
    if(this.firstTime){
      this.firstTime = false
      return <div><span>Hello, H5!</span></div>
    }else{
      return this.vd
      console.log(1)
    }
  }
})

