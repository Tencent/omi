import React, { useState } from 'react'
import { TETabs, TETabsContent, TETabsItem, TETabsPane } from 'tw-elements-react'

export default function PillsFill(): JSX.Element {
  const [fillActive, setFillActive] = useState('tab1')

  const handleFillClick = (value: string) => {
    if (value === fillActive) {
      return
    }
    setFillActive(value)
  }

  return (
    <div className="mb-3">
      <TETabs pills fill>
        <TETabsItem onClick={() => handleFillClick('tab1')} active={fillActive === 'tab1'}>
          Home
        </TETabsItem>
        <TETabsItem onClick={() => handleFillClick('tab2')} active={fillActive === 'tab2'}>
          Profile
        </TETabsItem>
        <TETabsItem onClick={() => handleFillClick('tab3')} active={fillActive === 'tab3'}>
          Messages
        </TETabsItem>
        <TETabsItem onClick={() => handleFillClick('tab4')} active={fillActive === 'tab4'} disabled>
          Contact
        </TETabsItem>
      </TETabs>

      <TETabsContent>
        <TETabsPane show={fillActive === 'tab1'}>Tab 1 content</TETabsPane>
        <TETabsPane show={fillActive === 'tab2'}>Tab 2 content</TETabsPane>
        <TETabsPane show={fillActive === 'tab3'}>Tab 3 content</TETabsPane>
        <TETabsPane show={fillActive === 'tab4'}>Tab 4 content</TETabsPane>
      </TETabsContent>
    </div>
  )
}
