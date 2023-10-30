import React from 'react'
import SearchBasicExample from './examples/SearchBasicExample'
import SearchWithButtonExample from './examples/SearchWithButtonExample'
import SearchWithLabelExample from './examples/SearchWithLabelExample'

export default [
  {
    name: 'SearchBasicExample',
    path: '/forms/search/examples/search-basic-example',
    element: <SearchBasicExample />,
  },
  {
    name: 'SearchWithLabelExample',
    path: '/forms/search/examples/search-with-label-example',
    element: <SearchWithLabelExample />,
  },
  {
    name: 'SearchWithButtonExample',
    path: '/forms/search/examples/search-with-button-example',
    element: <SearchWithButtonExample />,
  },
]
