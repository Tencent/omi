import { tag, h, WeElement, render } from 'omi'

import './index.tsx'

export type Props = {

}

const tagName = 'my-demo'



@tag(tagName)
export default class MyDemo extends WeElement<Props> {

  count = 2

  onChanged = (evt: CustomEvent) => {
    //同步内部状态到外部，这样防止父刷新覆盖子的 count
    this.count = evt.detail
  }

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
        </form>}</o-form>
    )
  }
}

render(<my-demo></my-demo>, 'body', {
  ignoreAttrs: true
})
