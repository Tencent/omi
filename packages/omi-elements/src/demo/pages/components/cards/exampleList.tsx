import React from 'react'
import CardBasicExample from './examples/CardBasicExample'
import CardWithHeaderAndFooterExample from './examples/CardWithHeaderAndFooterExample'
import CardWithImageExample from './examples/CardWithImageExample'
import CardWithRippleExample from './examples/CardWithRippleExample'

export default [
  {
    name: 'CardBasicExample',
    path: '/components/cards/examples/card-basic-example',
    element: <CardBasicExample />,
  },
  {
    name: 'CardWithHeaderAndFooterExample',
    path: '/components/cards/examples/card-header-footer-example',
    element: <CardWithHeaderAndFooterExample />,
  },
  {
    name: 'CardWithImageExample',
    path: '/components/cards/examples/card-image-example',
    element: <CardWithImageExample />,
  },
  {
    name: 'CardWithRippleExample',
    path: '/components/cards/examples/card-ripple-example',
    element: <CardWithRippleExample />,
  },
]
