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
	initial:(self:FormAssociatedComponent)=>{			  
		self._internals = self.attachInternals()		

		// self.formAssociatedCallback = function(form) {
		// 	this._form = form
		// 	if(this._form){
		// 		// 当组件被添加到表单元素内部时，监听 formdata 事件
		// 		this._form.addEventListener('formdata', this.handleFormData)
		// 	}	
		// } 
		self.handleFormData = function({formData}) {
			if(formData && this._input){
				formData.append(this._input?.name, this._input?.value)
			}
		} 
		self.formDisabledCallback = function() { 
			//  禁用 input 元素
			
		} 
		self.formResetCallback = function() {
			self._internals?.setFormValue('')
		} 
		self.formStateRestoreCallback = function(state:any, mode:any) {
			//  根据 state 和 mode 恢复表单元素状态
		}
	} ,
	connected:(self:FormAssociatedComponent)=>{
		self._input = self.shadowRoot?.querySelector('input')
		if(self._input){
			self._input.addEventListener('input',self.handleInput) 
			if(self._internals){
				self._internals.setValidity(self._input.validity, self._input.validationMessage, self._input)
			}
		}
	}

}