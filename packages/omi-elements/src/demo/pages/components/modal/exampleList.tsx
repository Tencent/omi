import React from 'react'
import BasicExample from './examples/BasicExample'
import StaticBackdrop from './examples/StaticBackdrop'
import ScrollingLongContent from './examples/ScrollingLongContent'
import ModalDialogScrollable from './examples/ModalDialogScrollable'
import VerticalyCentered from './examples/VerticalyCentered'
import SizesExample from './examples/SizesExample'
import PositionsExample from './examples/PositionsExample'
import FullscreenModal from './examples/FullscreenModal'

export default [
  {
    name: 'Basic Example',
    path: '/components/modal/examples/basic-example',
    element: <BasicExample />,
  },
  {
    name: 'Static Backdrop',
    path: '/components/modal/examples/static-backdrop',
    element: <StaticBackdrop />,
  },
  {
    name: 'Scrolling Long Content',
    path: '/components/modal/examples/scrolling-long-content',
    element: <ScrollingLongContent />,
  },
  {
    name: 'Modal Dialog Scrollable',
    path: '/components/modal/examples/modal-dialog-scrollable',
    element: <ModalDialogScrollable />,
  },
  {
    name: 'Verticaly Centered',
    path: '/components/modal/examples/verticaly-centered',
    element: <VerticalyCentered />,
  },
  {
    name: 'Sizes Example',
    path: '/components/modal/examples/sizes-example',
    element: <SizesExample />,
  },
  {
    name: 'Positions Example',
    path: '/components/modal/examples/positions-example',
    element: <PositionsExample />,
  },
  {
    name: 'Fullscreen Modal',
    path: '/components/modal/examples/fullscreen-modal',
    element: <FullscreenModal />,
  },
]
