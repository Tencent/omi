/**
 * 
 * 为组件添加ref自动转发功能
 * 
 * ref自动转发的目的是为了让组件的使用者可以直接通过组件实例获取到内部元素的引用，
 * 特别是组件多层嵌套时，可以通过ref获取到任意层级的组件实例，而不需要层层传递ref
 * 
 * 
 * 工作原理:
 * 
 * 1. 为组件定义一个ref prop，这是约定的名称
 * 2. 在组件实例可以通过this.ref获取到ref对象，可以将this.ref绑定到任意内部元素上
 * 3. 
 * 
 * 
 * 
 * 
 */
 
import { type Component,type Ref } from '../component' 

export default { 
    /**
     * 为组件实例动态添加ref属性
     * @param self 
     */
	initial:(self:Component)=>{	
        // 声明ref属性，该属性是一个proxy对象，当set时会在当前组件触发refAttach事件
        Object.defineProperty(self, 'ref', {
            get() {
                if(!self._ref){
                    self._ref = new Proxy<Ref>({
                        current:undefined
                    },{
                        set(target, key, value, receiver) {
                            if(key==='current'){
                                self.fire('refAttached',{
                                    ref:value,
                                    target:self
                                },{bubbles:true,composed:true})
                            }
                            return Reflect.set(target, key, value, receiver)
                        }                        
                    })
                }
                return self._ref
            }
        })
        // @ts-ignore
        self._onRefAttached = function(e:any){
            const {ref,target} = e.detail
            if(target!==self) { 
                // @ts-ignore
                if(self.props.ref) self.props.ref.current = ref
            }
        }
         // @ts-ignore
        self.addEventListener('refAttached',self._onRefAttached)
	},
    disconnected:(self:Component)=>{
        // @ts-ignore
        self.removeEventListener('refAttached',self._onRefAttached)
    }

}