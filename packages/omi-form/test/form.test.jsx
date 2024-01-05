import { define, render, Component, h, tag, mixin } from 'omi'
import '../src/index.tsx'

describe('base', () => {
  let parentElement

  beforeAll(() => {
    parentElement = document.createElement('div')
    document.body.appendChild(parentElement)
  })

  beforeEach(() => {
    parentElement.innerHTML = ''
  })

  afterAll(() => {
    parentElement.parentNode.removeChild(parentElement)
    parentElement = null
  })

  it('renders form with components and buttons', () => {
    render(
      <o-form
        config={{
          components: [{ type: 'input', name: 'name', placeholder: 'Name' }],
          submitButton: true,
          resetButton: true,
        }}
      />,
      parentElement
    )

    const shadowRoot = parentElement.firstChild.shadowRoot
    const input = shadowRoot.querySelector('input[type="text"]')
    expect(input).not.toBeNull()
    expect(input.placeholder).toBe('Name')

    const submitButton = shadowRoot.querySelector('button[type="submit"]')
    expect(submitButton).not.toBeNull()

    const resetButton = shadowRoot.querySelector('button[type="reset"]')
    expect(resetButton).not.toBeNull()
  })

  it('renders form with h1', () => {
    render(
      <o-form
        config={{
          components: [{ type: 'h1', text: 'create' }],
          submitButton: true,
          resetButton: true,
        }}
      />,
      parentElement
    )

    const shadowRoot = parentElement.firstChild.shadowRoot
    const h1 = shadowRoot.querySelector('h1')
    expect(h1).not.toBeNull()
    expect(h1.innerHTML).toBe('create')
  })

  it('renders form with list', () => {
    render(
      <o-form
        config={{
          components: [
            {
              type: 'list',
              itemTemplate: {
                label: '',
                description: 'Make sure it matches your legal name',
                type: 'group',
                components: [
                  { type: 'input', value: '', placeholder: 'First Name', column: 6 },
                  { type: 'input', value: '', placeholder: 'Last Name', column: 6 },
                ],
              },
              items: [],
            },
          ],
          submitButton: true,
          resetButton: true,
        }}
      />,
      parentElement
    )

    const shadowRoot = parentElement.firstChild.shadowRoot
    const input = shadowRoot.querySelector('input[type="text"]')

    expect(input).toBeNull()
  })

  it('renders form with list', () => {
    render(
      <o-form
        config={{
          components: [
            {
              type: 'list',
              itemTemplate: {
                label: '',
                description: 'Make sure it matches your legal name',
                type: 'group',
                components: [
                  { type: 'input', value: '', placeholder: 'First Name', column: 6 },
                  { type: 'input', value: '', placeholder: 'Last Name', column: 6 },
                ],
              },
              items: [
                {
                  label: '',
                  description: 'Make sure it matches your legal name',
                  type: 'group',
                  components: [
                    { type: 'input', value: '', placeholder: 'First Name', column: 6 },
                    { type: 'input', value: '', placeholder: 'Last Name', column: 6 },
                  ],
                },
              ],
            },
          ],
          submitButton: true,
          resetButton: true,
        }}
      />,
      parentElement
    )

    const shadowRoot = parentElement.firstChild.shadowRoot
    const input = shadowRoot.querySelector('input[type="text"]')

    expect(input).not.toBeNull()
  })

  it('primary color', () => {
    render(
      <o-form
        config={{
          components: [
            {
              type: 'list',
              itemTemplate: {
                label: '',
                description: 'Make sure it matches your legal name',
                type: 'group',
                components: [
                  { type: 'input', value: '', placeholder: 'First Name', column: 6 },
                  { type: 'input', value: '', placeholder: 'Last Name', column: 6 },
                ],
              },
              items: [
                {
                  label: '',
                  description: 'Make sure it matches your legal name',
                  type: 'group',
                  components: [
                    { type: 'input', value: '', placeholder: 'First Name', column: 6 },
                    { type: 'input', value: '', placeholder: 'Last Name', column: 6 },
                  ],
                },
              ],
            },
          ],
          primaryColor: 'red',
          submitButton: true,
          resetButton: true,
        }}
      />,
      parentElement
    )

    const hsl = parentElement.firstChild.initPrimaryColor()

    expect(hsl[0]).toBe(0)
    expect(hsl[1]).toBe(100)
    expect(hsl[2]).toBe(50)
  })

  it('linkage 1', () => {
    render(
      <o-form
        config={{
          components: [
            {
              type: 'select',
              name: 'choice',
              defaultValue: '',
              placeholder: 'Last Name',
              options: [
                { value: '1', label: 'Option 1' },
                { value: '2', label: 'Option 2' },
              ],
            },
            {
              type: 'input',
              props: { type: 'email' },
              name: 'email',
              value: 'john.doe@example.com',
              dependsOn: {
                name: 'choice',
                value: '2',
              },
            },
          ],
          submitButton: true,
          resetButton: true,
        }}
      />,
      parentElement
    )
    const shadowRoot = parentElement.firstChild.shadowRoot
    const input = shadowRoot.querySelector('input[type="email"]')
    expect(input).toBeNull()
  })

  it('linkage 2', () => {
    render(
      <o-form
        config={{
          components: [
            {
              type: 'select',
              name: 'choice',
              defaultValue: '2',
              placeholder: 'Last Name',
              options: [
                { value: '1', label: 'Option 1' },
                { value: '2', label: 'Option 2' },
              ],
            },
            {
              type: 'input',
              props: { type: 'email' },
              name: 'email',
              value: 'john.doe@example.com',
              dependsOn: {
                name: 'choice',
                value: '2',
              },
            },
          ],
          submitButton: true,
          resetButton: true,
        }}
      />,
      parentElement
    )
    const shadowRoot = parentElement.firstChild.shadowRoot
    const input = shadowRoot.querySelector('input[type="email"]')
    expect(input).not.toBeNull()
  })

  it('linkage 3', () => {
    render(
      <o-form
        config={{
          components: [
            {
              type: 'select',
              name: 'choice',
              defaultValue: '2',
              placeholder: 'Last Name',
              options: [
                { value: '1', label: 'Option 1' },
                { value: '2', label: 'Option 2' },
              ],
            },
            {
              type: 'input',
              props: { type: 'email' },
              name: 'email',
              value: 'john.doe@example.com',
              dependsOn: "values.choice === '2'",
            },
          ],
          submitButton: true,
          resetButton: true,
        }}
      />,
      parentElement
    )
    const shadowRoot = parentElement.firstChild.shadowRoot
    const input = shadowRoot.querySelector('input[type="email"]')
    expect(input).not.toBeNull()
  })

  it('linkage', () => {
    render(
      <o-form
        config={{
          components: [
            {
              type: 'select',
              name: 'choice',
              placeholder: 'Last Name',
              options: [
                { value: '1', label: 'Option 1' },
                { value: '2', label: 'Option 2' },
              ],
            },
            {
              type: 'input',
              name: 'email',
              value: 'john.doe@example.com',
              dependsOn: "values.choice === '2'",
            },
          ],
          submitButton: true,
          resetButton: true,
        }}
      />,
      parentElement
    )
    const shadowRoot = parentElement.firstChild.shadowRoot
    const input = shadowRoot.querySelector('input[type="email"]')
    expect(input).toBeNull()
  })

  it('label width', () => {
    render(
      <o-form
        config={{
          components: [
            {
              type: 'input',
              name: 'email',
              label: 'Email',
              value: 'john.doe@example.com',
            },
          ],
          labelStyle: {
            width: '100px',
            align: 'right',
          },
          submitButton: true,
          resetButton: true,
        }}
      />,
      parentElement
    )
    const shadowRoot = parentElement.firstChild.shadowRoot
    const div = shadowRoot.querySelector('.leading-8').style.width
    expect(div).toBe('100px')
  })


  it('label style', () => {
    render(
      <o-form
        config={{
          components: [
            {
              type: 'input',
              name: 'email',
              label: 'Email',
              value: 'john.doe@example.com',
            },
          ],
          labelStyle: {
            align: 'top',
          },
          submitButton: true,
          resetButton: true,
        }}
      />,
      parentElement
    )
    const shadowRoot = parentElement.firstChild.shadowRoot
    console.log(shadowRoot.innerHTML)
    const div = shadowRoot.querySelector('.leading-8').style.width
    expect(div).toBe('')
  })
})
