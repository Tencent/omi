import { tag, Component, bind } from 'omi'
import { Collapse, Ripple, Modal } from 'omi-elements'
import { tailwind } from '@/tailwind'
import '@/site/code-showcase'

@tag('file-input-page')
export default class FileInputPage extends Component {
  static css = [tailwind]

  render() {
    return (
      <div className="container my-12 !max-w-full">
        <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="basic" data-te-spy-item>
          Basic example
        </h2>

        <p className="mb-3">
          File input is a field which user can use to upload one or more files (photos, documents or any other file
          type) from the local storage.
        </p>

        <p className="mb-3">
          Most common use examples of file upload component is CSV upload CRM system, avatar picture upload, simple GIF
          upload.
        </p>

        <code-showcase
          code={`<div className="mb-3 w-96">
  <label htmlFor="formFile" className="mb-2 inline-block text-neutral-700 dark:text-neutral-200">
    Default file input example
  </label>
  <input
    className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
    type="file"
    id="formFile"
  />
</div>`}
        >
          <div className="mb-3 w-96">
            <label htmlFor="formFile" className="mb-2 inline-block text-neutral-700 dark:text-neutral-200">
              Default file input example
            </label>
            <input
              className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
              type="file"
              id="formFile"
            />
          </div>
        </code-showcase>

        <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="multiple" data-te-spy-item>
          Multiple files input
        </h2>

        <p className="mb-3">
          Use the <code>multiple</code> attribute to the input to add multiple files with one input.
        </p>
        <code-showcase
          code={`<div className="mb-3 w-96">
  <label htmlFor="formFileMultiple" className="mb-2 inline-block text-neutral-700 dark:text-neutral-200">
    Multiple files input example
  </label>
  <input
    className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
    type="file"
    id="formFileMultiple"
    multiple
  />
</div>`}
        >
          <div className="mb-3 w-96">
            <label htmlFor="formFileMultiple" className="mb-2 inline-block text-neutral-700 dark:text-neutral-200">
              Multiple files input example
            </label>
            <input
              className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
              type="file"
              id="formFileMultiple"
              multiple
            />
          </div>
        </code-showcase>

        <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="disabled" data-te-spy-item>
          Disabled file input
        </h2>

        <p className="mb-3">
          Use the <code>disabled</code> attribute to make file input unusable and un-clickable.
        </p>
        <code-showcase
          code={`<div className="mb-3 w-96">
  <label htmlFor="formFileDisabled" className="mb-2 inline-block text-neutral-700 dark:text-neutral-200">
    Disabled file input example
  </label>
  <input
    className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none disabled:opacity-60 dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
    type="file"
    id="formFileDisabled"
    disabled
  />
</div>`}
        >
          <div className="mb-3 w-96">
            <label htmlFor="formFileDisabled" className="mb-2 inline-block text-neutral-700 dark:text-neutral-200">
              Disabled file input example
            </label>
            <input
              className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none disabled:opacity-60 dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
              type="file"
              id="formFileDisabled"
              disabled
            />
          </div>
        </code-showcase>

        <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="small" data-te-spy-item>
          Small file input
        </h2>

        <p className="mb-3">File input size can be made small.</p>
        <code-showcase
          code={`<div className="mb-3 w-96">
  <label htmlFor="formFileSm" className="mb-2 inline-block text-neutral-700 dark:text-neutral-200">
    Small file input example
  </label>
  <input
    className="relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-xs font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
    id="formFileSm"
    type="file"
  />
</div>`}
        >
          <div className="mb-3 w-96">
            <label htmlFor="formFileSm" className="mb-2 inline-block text-neutral-700 dark:text-neutral-200">
              Small file input example
            </label>
            <input
              className="relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-xs font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
              id="formFileSm"
              type="file"
            />
          </div>
        </code-showcase>

        <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="large" data-te-spy-item>
          Large file input
        </h2>

        <p className="mb-3">File input size can be made large.</p>
        <code-showcase
          code={`<div className="mb-3 w-96">
  <label htmlFor="formFileLg" className="mb-2 inline-block text-neutral-700 dark:text-neutral-200">
    Large file input example
  </label>
  <input
    className="relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] font-normal leading-[2.15] text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
    id="formFileLg"
    type="file"
  />
</div>`}
        >
          <div className="mb-3 w-96">
            <label htmlFor="formFileLg" className="mb-2 inline-block text-neutral-700 dark:text-neutral-200">
              Large file input example
            </label>
            <input
              className="relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] font-normal leading-[2.15] text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
              id="formFileLg"
              type="file"
            />
          </div>
        </code-showcase>
      </div>
    )
  }
}
