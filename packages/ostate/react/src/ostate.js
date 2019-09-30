
import {useState,useCallback} from 'react'

function useForceUpdate() {
  const [, setTick] = useState(0)

  const update = useCallback(() => {
      setTick(tick => tick + 1)
  }, [])

  return update
}



//const Context = React.createContext();


export function o(options) {

  console.log(this)
  if (options.store) o.store = options.store
  if(options.use){

  }

  //https://github.com/mobxjs/mobx-react-lite/blob/master/src/useObserver.ts


//  setInterval(()=>{
//  // forceUpdate()
//  },2000)
 return (props, ref) => {

  const wantedForceUpdateHook = options.useForceUpdate || useForceUpdate
  const forceUpdate = wantedForceUpdateHook()

  //如果没有监听，就进行监听，保证监听一次
  // setInterval(()=>{
    
  //   forceUpdate()
  // },2000)
    return  options.render(props, ref)
  }
}

function useObserver(fn){


  let rendering
  oba('',()=>{
    rendering = fn()
    
  })

  return rendering
}

function oba(){}

o.useInstances = []
o.useSelfInstances = []

