import React, { useState } from 'react'
import { TETabs, TETabsContent, TETabsItem, TETabsPane } from 'tw-elements-react'

export default function PillsVertical(): JSX.Element {
  const [verticalActive, setVerticalActive] = useState('tab1')

  const handleVerticalClick = (value: string) => {
    if (value === verticalActive) {
      return
    }
    setVerticalActive(value)
  }

  return (
    <div className="flex items-start">
      <TETabs pills vertical>
        <TETabsItem onClick={() => handleVerticalClick('tab1')} active={verticalActive === 'tab1'}>
          Home
        </TETabsItem>
        <TETabsItem onClick={() => handleVerticalClick('tab2')} active={verticalActive === 'tab2'}>
          Profile
        </TETabsItem>
        <TETabsItem onClick={() => handleVerticalClick('tab3')} active={verticalActive === 'tab3'}>
          Messages
        </TETabsItem>
        <TETabsItem onClick={() => handleVerticalClick('tab4')} active={verticalActive === 'tab4'} disabled>
          Contact
        </TETabsItem>
      </TETabs>

      <TETabsContent>
        <TETabsPane show={verticalActive === 'tab1'}>Tab 1 content</TETabsPane>
        <TETabsPane show={verticalActive === 'tab2'}>Tab 2 content</TETabsPane>
        <TETabsPane show={verticalActive === 'tab3'}>Tab 3 content</TETabsPane>
        <TETabsPane show={verticalActive === 'tab4'}>Tab 4 content</TETabsPane>
      </TETabsContent>
    </div>
  )
}
