import { tag, Component, bind } from 'omi'
import { Collapse, Ripple, Modal } from 'omi-elements'
import { tailwind } from '@/tailwind'
import '@/site/code-showcase'

@tag('shadows-page')
export default class ShadowsPage extends Component {
  static css = [tailwind]

  render() {
    return (
      <div className="container my-12 !max-w-full">
        <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="basic_examples" data-te-spy-item>
          Basic example
        </h2>

        <p className="mb-3">
          For light design and bright compositions use standard shadows. To apply a shadow to an element simply add one
          of the following classes to it.
        </p>
        <code-showcase
          code={`<div className="mb-5 flex flex-1 flex-wrap justify-between gap-2 dark:text-neutral-800">
  <div className="flex h-[100px] w-[100px] flex-col justify-center rounded-lg bg-white text-center shadow-none">
    <code className="self-center">.shadow-none</code>
    <small>removes shadows</small>
  </div>
  <div className="flex h-[100px] w-[100px] justify-center rounded-lg bg-white text-center shadow-sm shadow-black/10 dark:shadow-black/40">
    <code className="self-center">.shadow-sm</code>
  </div>
  <div className="flex h-[100px] w-[100px] justify-center rounded-lg bg-white text-center shadow shadow-black/10 dark:shadow-black/40">
    <code className="self-center">.shadow</code>
  </div>
  <div className="flex h-[100px] w-[100px] justify-center rounded-lg bg-white text-center shadow-md shadow-black/5 dark:shadow-black/30">
    <code className="self-center">.shadow-md</code>
  </div>
  <div className="flex h-[100px] w-[100px] justify-center rounded-lg bg-white text-center shadow-lg shadow-black/5 dark:shadow-black/30">
    <code className="self-center">.shadow-lg</code>
  </div>
  <div className="flex h-[100px] w-[100px] justify-center rounded-lg bg-white text-center shadow-xl shadow-black/5 dark:shadow-black/30">
    <code className="self-center">.shadow-xl</code>
  </div>
</div>`}
        >
          <div className="mb-5 flex flex-1 flex-wrap justify-between gap-2 dark:text-neutral-800">
            <div className="flex h-[100px] w-[100px] flex-col justify-center rounded-lg bg-white text-center shadow-none">
              <code className="self-center">.shadow-none</code>
              <small>removes shadows</small>
            </div>
            <div className="flex h-[100px] w-[100px] justify-center rounded-lg bg-white text-center shadow-sm shadow-black/10 dark:shadow-black/40">
              <code className="self-center">.shadow-sm</code>
            </div>
            <div className="flex h-[100px] w-[100px] justify-center rounded-lg bg-white text-center shadow shadow-black/10 dark:shadow-black/40">
              <code className="self-center">.shadow</code>
            </div>
            <div className="flex h-[100px] w-[100px] justify-center rounded-lg bg-white text-center shadow-md shadow-black/5 dark:shadow-black/30">
              <code className="self-center">.shadow-md</code>
            </div>
            <div className="flex h-[100px] w-[100px] justify-center rounded-lg bg-white text-center shadow-lg shadow-black/5 dark:shadow-black/30">
              <code className="self-center">.shadow-lg</code>
            </div>
            <div className="flex h-[100px] w-[100px] justify-center rounded-lg bg-white text-center shadow-xl shadow-black/5 dark:shadow-black/30">
              <code className="self-center">.shadow-xl</code>
            </div>
          </div>
        </code-showcase>

        <h2 className=" mt-0 text-3xl font-semibold leading-normal" id="strong" data-te-spy-item>
          Strong shadows
        </h2>
        <code-showcase
          code={`<div className="mb-12 flex flex-1 flex-wrap items-end justify-between space-y-2 px-3 py-10">
  <div className="flex h-[100px] w-[100px] justify-center rounded-lg bg-neutral-300 text-center shadow-none"></div>
  <div className="flex h-[100px] w-[100px] justify-center rounded-lg bg-neutral-300 text-center shadow-sm shadow-black/30 dark:shadow-black/50"></div>
  <div className="flex h-[100px] w-[100px] justify-center rounded-lg bg-neutral-300 text-center shadow shadow-black/30 dark:shadow-black/50"></div>
  <div className="flex h-[100px] w-[100px] justify-center rounded-lg bg-neutral-300 text-center shadow-md shadow-black/20 dark:shadow-black/40"></div>
  <div className="flex h-[100px] w-[100px] justify-center rounded-lg bg-neutral-300 text-center shadow-lg shadow-black/20 dark:shadow-black/40"></div>
  <div className="flex h-[100px] w-[100px] justify-center rounded-lg bg-neutral-300 text-center shadow-xl shadow-black/20 dark:shadow-black/40"></div>
</div>
<div className="mb-12 flex flex-1 flex-wrap items-end justify-between space-y-2 bg-neutral-300 px-3 py-10">
  <div className="flex h-[100px] w-[100px] justify-center rounded-lg bg-neutral-900 text-center shadow-none"></div>
  <div className="flex h-[100px] w-[100px] justify-center rounded-lg bg-neutral-900 text-center shadow-sm shadow-black/30 dark:shadow-black/50"></div>
  <div className="flex h-[100px] w-[100px] justify-center rounded-lg bg-neutral-900 text-center shadow shadow-black/30 dark:shadow-black/50"></div>
  <div className="flex h-[100px] w-[100px] justify-center rounded-lg bg-neutral-900 text-center shadow-md shadow-black/20 dark:shadow-black/40"></div>
  <div className="flex h-[100px] w-[100px] justify-center rounded-lg bg-neutral-900 text-center shadow-lg shadow-black/20 dark:shadow-black/40"></div>
  <div className="flex h-[100px] w-[100px] justify-center rounded-lg bg-neutral-900 text-center shadow-xl shadow-black/20 dark:shadow-black/40"></div>
</div>
<div className="mb-12 flex flex-1 flex-wrap items-end justify-between space-y-2 bg-neutral-800 px-3 py-10">
  <div className="flex h-[100px] w-[100px] justify-center rounded-lg bg-neutral-50 text-center shadow-none"></div>
  <div className="flex h-[100px] w-[100px] justify-center rounded-lg bg-neutral-50 text-center shadow-sm shadow-black/30 dark:shadow-black/50"></div>
  <div className="flex h-[100px] w-[100px] justify-center rounded-lg bg-neutral-50 text-center shadow shadow-black/30 dark:shadow-black/50"></div>
  <div className="flex h-[100px] w-[100px] justify-center rounded-lg bg-neutral-50 text-center shadow-md shadow-black/20 dark:shadow-black/40"></div>
  <div className="flex h-[100px] w-[100px] justify-center rounded-lg bg-neutral-50 text-center shadow-lg shadow-black/20 dark:shadow-black/40"></div>
  <div className="flex h-[100px] w-[100px] justify-center rounded-lg bg-neutral-50 text-center shadow-xl shadow-black/20 dark:shadow-black/40"></div>
</div>`}
        >
          <div className="mb-12 flex flex-1 flex-wrap items-end justify-between space-y-2 px-3 py-10">
            <div className="flex h-[100px] w-[100px] justify-center rounded-lg bg-neutral-300 text-center shadow-none"></div>
            <div className="flex h-[100px] w-[100px] justify-center rounded-lg bg-neutral-300 text-center shadow-sm shadow-black/30 dark:shadow-black/50"></div>
            <div className="flex h-[100px] w-[100px] justify-center rounded-lg bg-neutral-300 text-center shadow shadow-black/30 dark:shadow-black/50"></div>
            <div className="flex h-[100px] w-[100px] justify-center rounded-lg bg-neutral-300 text-center shadow-md shadow-black/20 dark:shadow-black/40"></div>
            <div className="flex h-[100px] w-[100px] justify-center rounded-lg bg-neutral-300 text-center shadow-lg shadow-black/20 dark:shadow-black/40"></div>
            <div className="flex h-[100px] w-[100px] justify-center rounded-lg bg-neutral-300 text-center shadow-xl shadow-black/20 dark:shadow-black/40"></div>
          </div>
          <div className="mb-12 flex flex-1 flex-wrap items-end justify-between space-y-2 bg-neutral-300 px-3 py-10">
            <div className="flex h-[100px] w-[100px] justify-center rounded-lg bg-neutral-900 text-center shadow-none"></div>
            <div className="flex h-[100px] w-[100px] justify-center rounded-lg bg-neutral-900 text-center shadow-sm shadow-black/30 dark:shadow-black/50"></div>
            <div className="flex h-[100px] w-[100px] justify-center rounded-lg bg-neutral-900 text-center shadow shadow-black/30 dark:shadow-black/50"></div>
            <div className="flex h-[100px] w-[100px] justify-center rounded-lg bg-neutral-900 text-center shadow-md shadow-black/20 dark:shadow-black/40"></div>
            <div className="flex h-[100px] w-[100px] justify-center rounded-lg bg-neutral-900 text-center shadow-lg shadow-black/20 dark:shadow-black/40"></div>
            <div className="flex h-[100px] w-[100px] justify-center rounded-lg bg-neutral-900 text-center shadow-xl shadow-black/20 dark:shadow-black/40"></div>
          </div>
          <div className="mb-12 flex flex-1 flex-wrap items-end justify-between space-y-2 bg-neutral-800 px-3 py-10">
            <div className="flex h-[100px] w-[100px] justify-center rounded-lg bg-neutral-50 text-center shadow-none"></div>
            <div className="flex h-[100px] w-[100px] justify-center rounded-lg bg-neutral-50 text-center shadow-sm shadow-black/30 dark:shadow-black/50"></div>
            <div className="flex h-[100px] w-[100px] justify-center rounded-lg bg-neutral-50 text-center shadow shadow-black/30 dark:shadow-black/50"></div>
            <div className="flex h-[100px] w-[100px] justify-center rounded-lg bg-neutral-50 text-center shadow-md shadow-black/20 dark:shadow-black/40"></div>
            <div className="flex h-[100px] w-[100px] justify-center rounded-lg bg-neutral-50 text-center shadow-lg shadow-black/20 dark:shadow-black/40"></div>
            <div className="flex h-[100px] w-[100px] justify-center rounded-lg bg-neutral-50 text-center shadow-xl shadow-black/20 dark:shadow-black/40"></div>
          </div>
        </code-showcase>

        <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="inner" data-te-spy-item>
          Inner shadow
        </h2>

        <p className="mb-3">
          Use the <code>.shadow-inner</code> utility to apply a subtle inset box shadow to an element. This can be
          useful for things like form controls or wells.
        </p>
        <code-showcase
          code={`<div className="mb-5 flex h-[100px] w-[100px] justify-center rounded-lg bg-white text-center shadow-inner dark:shadow-black/40"></div>`}
        >
          <div className="mb-5 flex h-[100px] w-[100px] justify-center rounded-lg bg-white text-center shadow-inner dark:shadow-black/40"></div>
        </code-showcase>

        <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="shadow_on_hover" data-te-spy-item>
          Shadow on hover
        </h2>

        <p className="mb-3">
          Use <code>.transition-shadow</code> class to the element to apply a shadow hover effect.
        </p>
        <code-showcase
          code={`<img
  src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
  className="mb-5 h-auto max-w-sm rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/30"
  alt=""
/>`}
        >
          <img
            src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
            className="mb-5 h-auto max-w-sm rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/30"
            alt=""
          />
        </code-showcase>

        <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="images" data-te-spy-item>
          Images with shadow
        </h2>

        <p className="mb-3">
          Theoretically, depending on the brightness of the image you should use standard or strong shadow. However,
          practical use shows that in most graphics
          <strong>strong shadows work better in most cases with images</strong>.
        </p>
        <code-showcase
          code={`<div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
  <div className="mb-6">
    <img
      src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
      className="h-auto w-full rounded-lg shadow-md shadow-black/5 dark:shadow-black/30"
      alt="Hollywood Sign on The Hill"
    />
  </div>
  <div className="mb-6">
    <img
      src="https://tecdn.b-cdn.net/img/new/standard/city/031.webp"
      className="h-auto w-full rounded-lg shadow-md shadow-black/5 dark:shadow-black/30"
      alt="Five Lands National Park"
    />
  </div>
  <div className="mb-6">
    <img
      src="https://tecdn.b-cdn.net/img/new/standard/city/043.webp"
      className="h-auto w-full rounded-lg shadow-md shadow-black/5 dark:shadow-black/30"
      alt="Los Angeles Skyscrapers"
    />
  </div>
</div>
<div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
  <div className="mb-6">
    <img
      src="https://tecdn.b-cdn.net/img/new/standard/city/044.webp"
      className="h-auto w-full rounded-lg shadow-md shadow-black/5 dark:shadow-black/30"
      alt="Hollywood Sign on The Hill"
    />
  </div>
  <div className="mb-6">
    <img
      src="https://tecdn.b-cdn.net/img/new/standard/city/045.webp"
      className="h-auto w-full rounded-lg shadow-md shadow-black/5 dark:shadow-black/30"
      alt="Five Lands National Park"
    />
  </div>
  <div className="mb-6">
    <img
      src="https://tecdn.b-cdn.net/img/new/standard/city/046.webp"
      className="h-auto w-full rounded-lg shadow-md shadow-black/5 dark:shadow-black/30"
      alt="Los Angeles Skyscrapers"
    />
  </div>
</div>`}
        >
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="mb-6">
              <img
                src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
                className="h-auto w-full rounded-lg shadow-md shadow-black/5 dark:shadow-black/30"
                alt="Hollywood Sign on The Hill"
              />
            </div>
            <div className="mb-6">
              <img
                src="https://tecdn.b-cdn.net/img/new/standard/city/031.webp"
                className="h-auto w-full rounded-lg shadow-md shadow-black/5 dark:shadow-black/30"
                alt="Five Lands National Park"
              />
            </div>
            <div className="mb-6">
              <img
                src="https://tecdn.b-cdn.net/img/new/standard/city/043.webp"
                className="h-auto w-full rounded-lg shadow-md shadow-black/5 dark:shadow-black/30"
                alt="Los Angeles Skyscrapers"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="mb-6">
              <img
                src="https://tecdn.b-cdn.net/img/new/standard/city/044.webp"
                className="h-auto w-full rounded-lg shadow-md shadow-black/5 dark:shadow-black/30"
                alt="Hollywood Sign on The Hill"
              />
            </div>
            <div className="mb-6">
              <img
                src="https://tecdn.b-cdn.net/img/new/standard/city/045.webp"
                className="h-auto w-full rounded-lg shadow-md shadow-black/5 dark:shadow-black/30"
                alt="Five Lands National Park"
              />
            </div>
            <div className="mb-6">
              <img
                src="https://tecdn.b-cdn.net/img/new/standard/city/046.webp"
                className="h-auto w-full rounded-lg shadow-md shadow-black/5 dark:shadow-black/30"
                alt="Los Angeles Skyscrapers"
              />
            </div>
          </div>
        </code-showcase>
      </div>
    )
  }
}
