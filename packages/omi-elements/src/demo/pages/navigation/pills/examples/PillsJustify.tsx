import React, { useState } from 'react'
import { TETabs, TETabsContent, TETabsItem, TETabsPane } from 'tw-elements-react'

export default function PillsJustify(): JSX.Element {
  const [justifyActive, setJustifyActive] = useState('tab1')

  const handleJustifyClick = (value: string) => {
    if (value === justifyActive) {
      return
    }
    setJustifyActive(value)
  }

  return (
    <div className="mb-3">
      <TETabs pills justify>
        <TETabsItem onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
          Home
        </TETabsItem>
        <TETabsItem onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
          Profile
        </TETabsItem>
        <TETabsItem onClick={() => handleJustifyClick('tab3')} active={justifyActive === 'tab3'}>
          Messages
        </TETabsItem>
        <TETabsItem onClick={() => handleJustifyClick('tab4')} active={justifyActive === 'tab4'} disabled>
          Contact
        </TETabsItem>
      </TETabs>

      <TETabsContent>
        <TETabsPane show={justifyActive === 'tab1'}>Tab 1 content</TETabsPane>
        <TETabsPane show={justifyActive === 'tab2'}>Tab 2 content</TETabsPane>
        <TETabsPane show={justifyActive === 'tab3'}>Tab 3 content</TETabsPane>
        <TETabsPane show={justifyActive === 'tab4'}>Tab 4 content</TETabsPane>
      </TETabsContent>
    </div>
  )
}
