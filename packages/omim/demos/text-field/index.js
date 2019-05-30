import '../../src/text-field/index.tsx'
import { render, h } from 'omi'

render(
  <div>
    <h3>With font Icon</h3>
    <m-text-field leftIcon='event' label='Label1' helperText='Helper Text' />

    <h3>With font Icon</h3>
    <m-text-field rightIcon='delete' label='Label1' helperText='Helper Text' />

    <br />
    <h3>Filled</h3>

    <m-text-field label='Label1' helperText='Helper Text' />
    <br />

    <m-text-field
      helperText='Helper Text'
      iconRight
      path='M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z'
      label='Label2'
      css={`
        .mdc-text-field {
          width:200px;
        }
      `}
    />
    <br />

    <m-text-field
      helperText='Helper Text'
      paths={[{
        color: '#F98080',
        path: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z'
      }, {
        color: '#F95050',
        path: 'M464 688a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z'
      }]}
      label='Label3'
      css={`
        .mdc-text-field {
          width:200px;
        }
      `}
    />
    <br />

    <h3>Shaped Filled</h3>

    <m-text-field
      class='shaped'
      helperText='Helper Text'
      css={`
        .shaped {
          border-radius: 16px 16px 0 0;
        }
      `}
    />
    <br />

    <h3>Outlined</h3>

    <m-text-field outlined label='Label' />
    <br />

    <h3>Shaped Outlined</h3>

    <m-text-field
      outlined
      label='Label'
      helperText='Helper Text'
      css={`
        .mdc-notched-outline__leading {
          border-radius: 28px 0 0 28px!important;
          width: 28px!important;
        }
        .mdc-notched-outline__trailing {
          border-radius: 0 28px 28px 0!important;
        }
      `}
    />
    <br />

    <h3>Text Field without label</h3>

    <m-text-field helperText='Helper Text' />
    <br />

    <m-text-field
      outlined
      helperText='Helper Text'
      css={`
        .mdc-notched-outline__leading {
          border-radius: 28px 0 0 28px!important;
          width: 28px!important;
        }
        .mdc-notched-outline__trailing {
          border-radius: 0 28px 28px 0!important;
        }
      `}
    />
    <br />

    <h3>Text Field with Character Counter</h3>

    <m-text-field
      style="width:200px;display:block;"
      css={`
        .mdc-text-field {
          width:200px;
        }
      `}
      counter
      maxLength={50}
      helperText="Helper Text"
      label='Label2'
    />
    <br />

    <m-text-field
      css={`
        .mdc-text-field {
          width:200px;
        }
      `}
      textarea
      outlined
      helperText="Helper Text"
      maxLength={200}
      counter
      label='Label2'
    />
    <br />

    <h3>Full Width</h3>

    <m-text-field fullWidth helperText="Helper Text" label='Label' />

    <h3>Full Width Textarea</h3>

    <m-text-field fullWidth textarea outlined helperText="Helper Text" label='Label' />

    <h3>Disabled</h3>

    <m-text-field disabled />
    <br />

    <h3>Other</h3>
    <m-text-field textarea rows={5} cols={30} />
    <br />

    <m-text-field value='TEST TEXT' />
    <br />

    <m-text-field label='Label' value='TEST TEXT' />
    <br />

    <m-text-field fullWidth label='Label' />
    <br />

    <m-text-field noLabel label='Label' />
    <br />

    <m-text-field helperText="Helper Text" label='Label2' />
    <br />

    <m-text-field showHelper helperText="Helper Text" label='Label2' />
    <br />

    <m-text-field required label='Label2' />
    <br />

    <m-text-field
      label='Label'
      css={`
        .mdc-floating-label{
          color:red!important;
        }
      `}
    />

  </div>
  , 'body')

