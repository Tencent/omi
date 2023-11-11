import { tag, Component, bind } from 'omi'
import { Collapse, Ripple, Modal } from 'omi-elements'
import { tailwind } from '@/tailwind'
import '@/site/code-showcase'

@tag('typography-page')
export default class TypographyPage extends Component {
  static css = [tailwind]

  render() {
    return (
      <div className="container my-12 !max-w-full">
        <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="headings" data-te-spy-item>
          Headings
        </h2>
        <p className="mb-3">
          Use the following <code>text-{'{size}'}</code> utility classes from Tailwind to set the font size for any text
          element.
        </p>

        <code-showcase
          code={`<h2 className="text-5xl font-medium leading-tight">Tailwind Elements</h2>
<h2 className="text-4xl font-medium leading-tight">Tailwind Elements</h2>
<h3 className="text-3xl font-medium leading-tight">Tailwind Elements</h3>
<h4 className="text-2xl font-medium leading-tight">Tailwind Elements</h4>
<h5 className="text-xl font-medium leading-tight">Tailwind Elements</h5>
<h6 className="mb-5 text-base font-medium leading-tight">Tailwind Elements</h6>`}
        >
          <h2 className="text-5xl font-medium leading-tight">Tailwind Elements</h2>
          <h2 className="text-4xl font-medium leading-tight">Tailwind Elements</h2>
          <h3 className="text-3xl font-medium leading-tight">Tailwind Elements</h3>
          <h4 className="text-2xl font-medium leading-tight">Tailwind Elements</h4>
          <h5 className="text-xl font-medium leading-tight">Tailwind Elements</h5>
          <h6 className="mb-5 text-base font-medium leading-tight">Tailwind Elements</h6>
        </code-showcase>

        <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="customizing" data-te-spy-item>
          Customizing headings
        </h2>

        <p className="mb-3">
          Use the <code>text-neutral-500</code> utility classes to recreate the small secondary heading text.
        </p>
        <code-showcase
          code={`<h3 className="text-3xl font-medium leading-tight mb-5">
  Fancy display heading
  <small className="ml-2 text-neutral-500 dark:text-neutral-400">With faded secondary text</small>
</h3>`}
        >
          <h3 className="text-3xl font-medium leading-tight mb-5">
            Fancy display heading
            <small className="ml-2 text-neutral-500 dark:text-neutral-400">With faded secondary text</small>
          </h3>
        </code-showcase>

        <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="display" data-te-spy-item>
          Display headings
        </h2>

        <p className="mb-3">
          Display heading is useful to make text stand out, and display heading larger with slightly more opinionated
          style. Heading classes can be applied to any element of a page.
        </p>
        <code-showcase
          code={`<h2 className="mb-4 border-b pb-4 text-9xl leading-tight">Display 1</h2>
<h2 className="mb-4 border-b pb-4 text-8xl leading-tight">Display 2</h2>
<h3 className="mb-4 border-b pb-4 text-7xl leading-tight">Display 3</h3>
<h4 className="mb-4 border-b pb-4 text-6xl leading-tight">Display 4</h4>
<h5 className="mb-4 border-b pb-4 text-5xl leading-tight">Display 5</h5>
<h6 className="text-4xl leading-tight mb-5">Display 6</h6>`}
        >
          <h2 className="mb-4 border-b pb-4 text-9xl leading-tight">Display 1</h2>
          <h2 className="mb-4 border-b pb-4 text-8xl leading-tight">Display 2</h2>
          <h3 className="mb-4 border-b pb-4 text-7xl leading-tight">Display 3</h3>
          <h4 className="mb-4 border-b pb-4 text-6xl leading-tight">Display 4</h4>
          <h5 className="mb-4 border-b pb-4 text-5xl leading-tight">Display 5</h5>
          <h6 className="text-4xl leading-tight mb-5">Display 6</h6>
        </code-showcase>

        <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="lead" data-te-spy-item>
          Lead
        </h2>

        <p className="mb-3">
          Make a paragraph stand out by adding <code>.text-xl</code>.
        </p>
        <code-showcase
          code={`<p className="text-xl font-light mb-5">
  Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.
</p>`}
        >
          <p className="text-xl font-light mb-5">
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.
          </p>
        </code-showcase>

        <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="inline" data-te-spy-item>
          Inline text elements
        </h2>

        <p className="mb-3">
          Inline elements are those which only occupy the space bounded by the tags defining the element, instead of
          breaking the flow of the content.
        </p>
        <code-showcase
          code={`<p>
  You can use the mark tag to <mark>highlight</mark> text.
</p>
<p>
  <del>This line of text is meant to be treated as deleted text.</del>
</p>
<p>
  <s>This line of text is meant to be treated as no longer accurate.</s>
</p>
<p>
  <ins>This line of text is meant to be treated as an addition to the document.</ins>
</p>
<p>
  <u>This line of text will render as underlined</u>
</p>
<p>
  <small>This line of text is meant to be treated as fine print.</small>
</p>
<p>
  <strong>This line rendered as bold text.</strong>
</p>
<p className="mb-5">
  <em>This line rendered as italicized text.</em>
</p>`}
        >
          <p>
            You can use the mark tag to <mark>highlight</mark> text.
          </p>
          <p>
            <del>This line of text is meant to be treated as deleted text.</del>
          </p>
          <p>
            <s>This line of text is meant to be treated as no longer accurate.</s>
          </p>
          <p>
            <ins>This line of text is meant to be treated as an addition to the document.</ins>
          </p>
          <p>
            <u>This line of text will render as underlined</u>
          </p>
          <p>
            <small>This line of text is meant to be treated as fine print.</small>
          </p>
          <p>
            <strong>This line rendered as bold text.</strong>
          </p>
          <p className="mb-5">
            <em>This line rendered as italicized text.</em>
          </p>
        </code-showcase>

        <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="blockquotes" data-te-spy-item>
          Blockquotes
        </h2>

        <p className="mb-3">
          The <code>.blockquote</code> element indicates that the enclosed text is an extended quotation. Usually, this
          is rendered visually by indentation.
        </p>
        <code-showcase
          code={`<figure className="mb-5">
  <blockquote>
    <p className="text-xl">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
    </p>
  </blockquote>
  <figcaption className="text-sm text-neutral-600 dark:text-neutral-400">
    - Someone famous in <cite title="Source Title">Source Title</cite>
  </figcaption>
</figure>`}
        >
          <figure className="mb-5">
            <blockquote>
              <p className="text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
              </p>
            </blockquote>
            <figcaption className="text-sm text-neutral-600 dark:text-neutral-400">
              - Someone famous in <cite title="Source Title">Source Title</cite>
            </figcaption>
          </figure>
        </code-showcase>

        <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="lists" data-te-spy-item>
          Lists
        </h2>

        <p className="mb-3">Use the following code to create list items with ordered and unordered lists.</p>
        <code-showcase
          code={`<ul className="mb-5">
  <li>This is a list.</li>
  <li>It appears completely unstyled.</li>
  <li>Structurally, it's still a list.</li>
  <li>However, this style only applies to immediate child elements.</li>
  <li>
    Nested lists:
    <ul className="ml-6 list-disc">
      <li>are unaffected by this style</li>
      <li>will still show a bullet</li>
      <li>and have appropriate left margin</li>
    </ul>
    <ul className="ml-6 list-decimal">
      <li>are unaffected by this style</li>
      <li>will still show a bullet</li>
      <li>and have appropriate left margin</li>
    </ul>
  </li>
  <li>This may still come in handy in some situations.</li>
</ul>`}
        >
          <ul className="mb-5">
            <li>This is a list.</li>
            <li>It appears completely unstyled.</li>
            <li>Structurally, it's still a list.</li>
            <li>However, this style only applies to immediate child elements.</li>
            <li>
              Nested lists:
              <ul className="ml-6 list-disc">
                <li>are unaffected by this style</li>
                <li>will still show a bullet</li>
                <li>and have appropriate left margin</li>
              </ul>
              <ul className="ml-6 list-decimal">
                <li>are unaffected by this style</li>
                <li>will still show a bullet</li>
                <li>and have appropriate left margin</li>
              </ul>
            </li>
            <li>This may still come in handy in some situations.</li>
          </ul>
        </code-showcase>

        <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="alignment" data-te-spy-item>
          Text alignment
        </h2>

        <p className="mb-3">
          The text-align property is used to set the horizontal alignment of a text. A text can be left or right
          aligned, centered, or justified.
        </p>
        <code-showcase
          code={`<p className="mb-3">The following example shows center aligned, and left and right aligned text.</p>
<p className="text-start">Start aligned text on all viewport sizes.</p>
<p className="text-center">Center aligned text on all viewport sizes.</p>
<p className="text-right">End aligned text on all viewport sizes.</p>
<p className="sm:text-start">Start aligned text on viewports sized SM (small) or wider.</p>
<p className="sm:text-start">Start aligned text on viewports sized MD (medium) or wider.</p>
<p className="sm:text-start">Start aligned text on viewports sized LG (large) or wider.</p>
<p className="sm:text-start mb-5">Start aligned text on viewports sized XL (extra-large) or wider.</p>`}
        >
          <p className="mb-3">The following example shows center aligned, and left and right aligned text.</p>
          <p className="text-start">Start aligned text on all viewport sizes.</p>
          <p className="text-center">Center aligned text on all viewport sizes.</p>
          <p className="text-right">End aligned text on all viewport sizes.</p>
          <p className="sm:text-start">Start aligned text on viewports sized SM (small) or wider.</p>
          <p className="sm:text-start">Start aligned text on viewports sized MD (medium) or wider.</p>
          <p className="sm:text-start">Start aligned text on viewports sized LG (large) or wider.</p>
          <p className="sm:text-start mb-5">Start aligned text on viewports sized XL (extra-large) or wider.</p>
        </code-showcase>

        <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="wrapping" data-te-spy-item>
          Text wrapping and overflow
        </h2>

        <p className="mb-3">
          Use <code>text-wrap</code> property to specify that the browser can break a line of text inside the targeted
          element onto multiple lines in an otherwise unbreakable place.
        </p>
        <code-showcase
          code={`<div className="mb-5 text-wrap w-24 rounded bg-primary text-center text-sm font-semibold text-white">
  This text should wrap.
</div>`}
        >
          <div className="mb-5 text-wrap w-24 rounded bg-primary text-center text-sm font-semibold text-white">
            This text should wrap.
          </div>
        </code-showcase>

        <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="nowrap" data-te-spy-item>
          Text nowrap
        </h2>
        <code-showcase
          code={`<div className="w-40 whitespace-nowrap bg-primary-300 dark:bg-primary-500 mb-5">
  This text should overflow the parent.
</div>`}
        >
          <div className="w-40 whitespace-nowrap bg-primary-300 dark:bg-primary-500 mb-5">
            This text should overflow the parent.
          </div>
        </code-showcase>

        <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="transform" data-te-spy-item>
          Text transform
        </h2>

        <p className="mb-3">Control text case and capitalization.</p>
        <code-showcase
          code={`<p className="mb-4 lowercase">Lowercased text.</p>
<p className="mb-4 uppercase">Uppercased text.</p>
<p className="mb-5 capitalize">capitalized text.</p>`}
        >
          <p className="mb-4 lowercase">Lowercased text.</p>
          <p className="mb-4 uppercase">Uppercased text.</p>
          <p className="mb-5 capitalize">capitalized text.</p>
        </code-showcase>

        <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="weight" data-te-spy-item>
          Font weight and italics
        </h2>

        <p className="mb-3">Change the weight of text or italicize text.</p>
        <code-showcase
          code={`<p className="mb-4 font-bold">Bold weight text.</p>
<p className="mb-4 font-semibold">Semibold weight text.</p>
<p className="mb-4 font-normal">Normal weight text.</p>
<p className="mb-4 font-light">Light weight text.</p>
<p className="mb-5 italic">Italic text.</p>`}
        >
          <p className="mb-4 font-bold">Bold weight text.</p>
          <p className="mb-4 font-semibold">Semibold weight text.</p>
          <p className="mb-4 font-normal">Normal weight text.</p>
          <p className="mb-4 font-light">Light weight text.</p>
          <p className="mb-5 italic">Italic text.</p>
        </code-showcase>

        <h2 className="mb-5 mt-0 text-3xl font-semibold leading-normal" id="line_height" data-te-spy-item>
          Line height
        </h2>

        <p className="mb-3">
          Use the following <code>leading-type</code> utility classes to set the line height for any text element.
        </p>
        <code-showcase
          code={`<p className="mb-4 leading-none">
  This is a long paragraph written to show how the line-height of an element is affected by our utilities.
  Classes are applied to the element itself or sometimes the parent element. These classes can be customized as
  needed with our utility API.
</p>
<p className="mb-4 leading-tight">
  This is a long paragraph written to show how the line-height of an element is affected by our utilities.
  Classes are applied to the element itself or sometimes the parent element. These classes can be customized as
  needed with our utility API.
</p>
<p className="mb-4 leading-normal">
  This is a long paragraph written to show how the line-height of an element is affected by our utilities.
  Classes are applied to the element itself or sometimes the parent element. These classes can be customized as
  needed with our utility API.
</p>
<p className="leading-loose">
  This is a long paragraph written to show how the line-height of an element is affected by our utilities.
  Classes are applied to the element itself or sometimes the parent element. These classes can be customized as
  needed with our utility API.
</p>`}
        >
          <p className="mb-4 leading-none">
            This is a long paragraph written to show how the line-height of an element is affected by our utilities.
            Classes are applied to the element itself or sometimes the parent element. These classes can be customized
            as needed with our utility API.
          </p>
          <p className="mb-4 leading-tight">
            This is a long paragraph written to show how the line-height of an element is affected by our utilities.
            Classes are applied to the element itself or sometimes the parent element. These classes can be customized
            as needed with our utility API.
          </p>
          <p className="mb-4 leading-normal">
            This is a long paragraph written to show how the line-height of an element is affected by our utilities.
            Classes are applied to the element itself or sometimes the parent element. These classes can be customized
            as needed with our utility API.
          </p>
          <p className="leading-loose">
            This is a long paragraph written to show how the line-height of an element is affected by our utilities.
            Classes are applied to the element itself or sometimes the parent element. These classes can be customized
            as needed with our utility API.
          </p>
        </code-showcase>
      </div>
    )
  }
}
