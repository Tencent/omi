import '../../src/image-list/index.tsx'
import { render, h } from 'omi'

const css = `
.mdc-image-list__item {
  width:calc(100% / 4 - 4.3333333px)!important;
  margin:2px;
}
.mdc-image-list__image {
  border-radius: 8px;
}

.mdc-image-list__supporting {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 48px;
  padding: 0 16px;
  background: rgba(0,0,0,.6);
  color: #fff;
  border-radius: 0 0 8px 8px;
}
`

render(
  <div>
    <image-list css={css} list={[
      { src: 'https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/1.jpg', label: 'Text label' },
      { src: 'https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/2.jpg', label: 'Text label' },
      { src: 'https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/3.jpg', label: 'Text label' },
      { src: 'https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/4.jpg', label: 'Text label' },
      { src: 'https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/5.jpg', label: 'Text label' },
      { src: 'https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/6.jpg', label: 'Text label' },
      { src: 'https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/7.jpg', label: 'Text label' },
      { src: 'https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/8.jpg', label: 'Text label' },
      { src: 'https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/9.jpg', label: 'Text label' },
      { src: 'https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/10.jpg', label: 'Text label' },
      { src: 'https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/11.jpg', label: 'Text label' },
      { src: 'https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/12.jpg', label: 'Text label' },
      { src: 'https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/13.jpg', label: 'Text label' },
      { src: 'https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/14.jpg', label: 'Text label' },
      { src: 'https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/15.jpg', label: 'Text label' }
    ]}>
    </image-list>

    <br></br>

    <br></br>

    <br></br>
    <image-list css={`
.mdc-image-list {
    column-count: 5;
}`}
      masonry
      list={[
        {
          src: 'https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/16.jpg',
          label: 'Text label'
        },
        {
          src: 'https://material-components.github.io/material-components-web-catalog/static/media/photos/2x3/2.jpg',
          label: 'Text label'
        },
        {
          src: 'https://material-components.github.io/material-components-web-catalog/static/media/photos/2x3/4.jpg',
          label: 'Text label'
        },
        {
          src: 'https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/4.jpg',
          label: 'Text label'
        },
        {
          src: 'https://material-components.github.io/material-components-web-catalog/static/media/photos/2x3/7.jpg',
          label: 'Text label'
        },

        {
          src: 'https://material-components.github.io/material-components-web-catalog/static/media/photos/2x3/1.jpg',
          label: 'Text label'
        },
        {
          src: 'https://material-components.github.io/material-components-web-catalog/static/media/photos/2x3/3.jpg',
          label: 'Text label'
        },
        {
          src: 'https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/3.jpg',
          label: 'Text label'
        },
        {
          src: 'https://material-components.github.io/material-components-web-catalog/static/media/photos/2x3/6.jpg',
          label: 'Text label'
        },
        {
          src: 'https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/6.jpg',
          label: 'Text label'
        },

        {
          src: 'https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/1.jpg',
          label: 'Text label'
        },
        {
          src: 'https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/2.jpg',
          label: 'Text label'
        },
        {
          src: 'https://material-components.github.io/material-components-web-catalog/static/media/photos/2x3/5.jpg',
          label: 'Text label'
        },
        {
          src: 'https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/5.jpg',
          label: 'Text label'
        },
        {
          src: 'https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/7.jpg',
          label: 'Text label'
        }
      ]}>
    </image-list>
  </div>
  , 'body')


