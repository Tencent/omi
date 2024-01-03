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

  it('renders form', () => {
    render(
      <o-form
        config={{
          components: [
            {
              type: 'h1',
              text: 'List',
            },
            {
              type: 'divider',
            },

            {
              type: 'list',
              itemTemplate: {
                label: '',
                tooltip: '',
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
          style: {
            maxWidth: '600px',
            margin: '0 auto',
            padding: '40px',
            background: '#fff',
            borderRadius: '5px',
            boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
          },
        }}
      />,
      parentElement
    )
    expect(parentElement.firstChild.shadowRoot.innerHTML).toBe(
      '<form class="grid" style="max-width: 600px; margin: 0px auto; padding: 40px; background: rgb(255, 255, 255); border-radius: 5px; box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);"><div style="grid-column: span 12;"><h1>List</h1></div><div style="grid-column: span 12;"><hr></div><div style="grid-column: span 12;"><div class="flex"><div class="inline-block items-center h-8 leading-8 text-sm pr-6 overflow-hidden text-right" style="width: 125px;"><div class="inline-block whitespace-nowrap"><label class="flex items-center"><span></span> </label></div></div><div class="flex-1"><div class="relative"><i class="add icon rounded-full inline-block cursor-pointer bg-white relative"></i></div></div></div></div><div class="flex gap-2" style="margin-left: 125px;"><button class="button submit-button" type="submit">Submit</button><button class="button reset-button" type="reset">Reset</button></div></form>'
    )
  })

  it('renders form with input', () => {
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
    expect(parentElement.firstChild.shadowRoot.innerHTML).toBe(
      '<form class="grid" style=""><div style="grid-column: span 12;"><div class="flex"><div class="inline-block items-center h-8 leading-8 text-sm pr-6 overflow-hidden text-right" style="width: 125px;"><div class="inline-block whitespace-nowrap"><label class="flex items-center"><span></span> </label></div></div><div class="flex-1"><input type="text" placeholder="Name"></div></div></div><div class="flex gap-2" style="margin-left: 125px;"><button class="button submit-button" type="submit">Submit</button><button class="button reset-button" type="reset">Reset</button></div></form>'
    )
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

  it('linkage', () => {
    render(
      <o-form
        config={{
          components: [
            {
              type: 'select',
              name: 'choice',
              value: '',
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

  it('linkage', () => {
    render(
      <o-form
        config={{
          components: [
            {
              type: 'select',
              name: 'choice',
              value: '2',
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

  it('linkage', () => {
    render(
      <o-form
        config={{
          components: [
            {
              type: 'select',
              name: 'choice',
              value: '2',
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
              type: 'email',
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
})
