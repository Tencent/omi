import { define, WeElement, render } from '../../src/omi'

define('my-form', class extends WeElement {



	render(props) {

		console.error(errors)
		return (
			<div>
				{this.props.children[0]({
					values: props.initialValues,
					errors: this.isInstalled ? props.validate(props.initialValues) : {},
					handleSubmit: (evt) => {
						console.log(evt)
						evt.preventDefault()
						this.update()
					},
					handleChange: (evt) => {

						console.error(evt)
						props.initialValues[evt.currentTarget.getAttribute('name')] = evt.currentTarget.value

					}
				})}
			</div>
		)
	}
})

render(<my-form
	initialValues={{ email: '', password: '' }}
	validate={values => {
		const errors = {};
		if (!values.email) {
			errors.email = 'Required';
		} else if (
			!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
		) {
			errors.email = 'Invalid email address';
		}
		return errors;
	}}
>{({
	values,
	errors,
	handleChange,
	handleBlur,
	handleSubmit,
	isSubmitting,
	/* and other goodies */
}) =>
	<form >
		<input
			type="email"
			name="email"
			onChange={handleChange}
			onBlur={handleBlur}
			value={values.email}
		/>
		{errors.email}
		<input
			type="password"
			name="password"
			onChange={handleChange}
			onBlur={handleBlur}
			value={values.password}
		/>
		{errors.password}
		<button type="button" onClick={handleSubmit} disabled={isSubmitting}>
			Submit
</button>
	</form>}</my-form>, 'body')
