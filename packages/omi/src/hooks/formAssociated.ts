/**
 * 
 * 为组件添加表单关联功能
 * 
 * 即当表单元素内部包含组件时，组件可以与表单元素进行交互
 * 
 * 
 * 
 * 
 * 
 */
 
import { FormAssociatedComponent } from '../component'

export default {
	define:(cls:typeof FormAssociatedComponent)=>{			  
		cls.prototype.formAssociatedCallback= function(form) { 
			this._form = form
			if(this._form){
				// 当组件被添加到表单元素内部时，监听 formdata 事件
				this._form.addEventListener('formdata', this.handleFormData.bind(this))
			}	
		}		
		cls.prototype.formDisabledCallback = function() { 
			//  禁用 input 元素			
		} 
		cls.prototype.formResetCallback = function() {
			this._internals?.setFormValue('')
		} 
		cls.prototype.formStateRestoreCallback = function(state:any, mode:any) {
			//  根据 state 和 mode 恢复表单元素状态
		}
	},
	initial:(self:FormAssociatedComponent)=>{	
		// 返回表单元素的值，格式为 [name, value]		 	
		self.getInputValue = function() {
			const values:Record<string,any> = {}
			self._inputs = self.shadowRoot?.querySelectorAll('input') as unknown as HTMLInputElement[]
			self._inputs.forEach(input => {
				values[input.name] =input.value
			}); 
			return values
		}
		self.handleFormData = function({formData}) {
			if(formData){	
				const values = self.getInputValue() 
				Object.entries(values).forEach(([name,value])=>{				
					formData.append(name,value)
				})
				
			}
		} 
		self._internals = self.attachInternals()		

	} ,
	connected:(self:FormAssociatedComponent)=>{
		
	}

}