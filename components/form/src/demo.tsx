import { tag, h, WeElement, render } from 'omi'

import './index.tsx'

export type Props = {

}

const tagName = 'my-demo'



@tag(tagName)
export default class MyDemo extends WeElement<Props> {


  render(props: Props) {
    return (
      <o-form
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
        onChange,
        onSubmit,
        onBlur
        /* and other goodies */
      }) =>
        <form >
          <div><input
            type="email"
            name="email"
            onChange={onChange}
            onBlur={onBlur}
            value={values.email}
          /></div>
          <div> {errors.email}</div>
          <div> <input
            type="password"
            name="password"
            onChange={onChange}
            onBlur={onBlur}
            value={values.password}
          /></div>
          <div> {errors.password}</div>
          <div>
            <button type="button" onClick={onSubmit} >
              Submit
          </button>
          </div>

        </form>}</o-form>
    )
  }
}

render(<my-demo></my-demo>, 'body', {
  ignoreAttrs: true
})
