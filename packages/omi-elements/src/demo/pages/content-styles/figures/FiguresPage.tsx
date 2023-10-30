import { tag, Component, bind } from 'omi'
import { Collapse, Ripple, Modal } from 'omi-elements'
import { tailwind } from '@/tailwind'
import '@/components/code-showcase'

@tag('figures-page')
export default class FiguresPage extends Component {
  static css = [tailwind]

  render() {
    return (
      <div className="container my-12 !max-w-full">
        <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="basic_examples" data-te-spy-item>
          Basic examples
        </h2>

        <p className="mb-3">
          Anytime you need to display a piece of content—like an image with an optional caption, consider using a{' '}
          <code>&lt;figure&gt;</code>.
        </p>
        <code-showcase
          code={`<figure className="mb-4 inline-block max-w-sm">
  <img
    src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
    className="mb-4 h-auto max-w-full rounded-lg align-middle leading-none shadow-lg"
    alt="Taking up Water with a Spoon"
  />
  <figcaption className="text-sm text-neutral-600 dark:text-neutral-400">
    A caption for the above image.
  </figcaption>
</figure>`}
        >
          <figure className="mb-4 inline-block max-w-sm">
            <img
              src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
              className="mb-4 h-auto max-w-full rounded-lg align-middle leading-none shadow-lg"
              alt="Taking up Water with a Spoon"
            />
            <figcaption className="text-sm text-neutral-600 dark:text-neutral-400">
              A caption for the above image.
            </figcaption>
          </figure>
        </code-showcase>

        <p className="mb-3">Aligning the figure's caption is easy with our text utilities.</p>

        <code-showcase
          code={`<figure className="mb-4 inline-block max-w-sm">
  <img
    src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
    className="mb-4 h-auto max-w-full rounded-lg align-middle leading-none shadow-lg"
    alt="Hollywood Sign on The Hill"
  />
  <figcaption className="text-right text-sm text-neutral-600 dark:text-neutral-400">
    A caption for the above image.
  </figcaption>
</figure>`}
        >
          <figure className="mb-4 inline-block max-w-sm">
            <img
              src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
              className="mb-4 h-auto max-w-full rounded-lg align-middle leading-none shadow-lg"
              alt="Hollywood Sign on The Hill"
            />
            <figcaption className="text-right text-sm text-neutral-600 dark:text-neutral-400">
              A caption for the above image.
            </figcaption>
          </figure>
        </code-showcase>
      </div>
    )
  }
}
