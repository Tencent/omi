import React, { useState } from 'react'
import { TETabs, TETabsContent, TETabsItem, TETabsPane } from 'tw-elements-react'

export default function PillsBasicExample(): JSX.Element {
  const [basicActive, setBasicActive] = useState('tab1')

  const handleBasicClick = (value: string) => {
    if (value === basicActive) {
      return
    }
    setBasicActive(value)
  }

  return (
    <div className="mb-3">
      <TETabs pills>
        <TETabsItem onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'}>
          Home
        </TETabsItem>
        <TETabsItem onClick={() => handleBasicClick('tab2')} active={basicActive === 'tab2'}>
          Profile
        </TETabsItem>
        <TETabsItem onClick={() => handleBasicClick('tab3')} active={basicActive === 'tab3'}>
          Messages
        </TETabsItem>
        <TETabsItem onClick={() => handleBasicClick('tab4')} active={basicActive === 'tab4'} disabled>
          Contact
        </TETabsItem>
      </TETabs>

      <TETabsContent>
        <TETabsPane show={basicActive === 'tab1'}>Tab 1 content</TETabsPane>
        <TETabsPane show={basicActive === 'tab2'}>Tab 2 content</TETabsPane>
        <TETabsPane show={basicActive === 'tab3'}>Tab 3 content</TETabsPane>
        <TETabsPane show={basicActive === 'tab4'}>Tab 4 content</TETabsPane>
      </TETabsContent>
    </div>
  )
}
