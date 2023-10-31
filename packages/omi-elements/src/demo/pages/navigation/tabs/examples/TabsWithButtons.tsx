import React, { useState } from 'react'
import { TETabs, TETabsContent, TETabsItem, TETabsPane } from 'tw-elements-react'

export default function TabsWithButtons(): JSX.Element {
  const [buttonActive, setButtonActive] = useState('tab1')

  const handleButtonClick = (value: string) => {
    if (value === buttonActive) {
      return
    }
    setButtonActive(value)
  }

  return (
    <div className="mb-3">
      <TETabs>
        <TETabsItem onClick={() => handleButtonClick('tab1')} active={buttonActive === 'tab1'} tag="button">
          Home
        </TETabsItem>
        <TETabsItem onClick={() => handleButtonClick('tab2')} active={buttonActive === 'tab2'} tag="button">
          Profile
        </TETabsItem>
        <TETabsItem onClick={() => handleButtonClick('tab3')} active={buttonActive === 'tab3'} tag="button">
          Messages
        </TETabsItem>
      </TETabs>

      <TETabsContent>
        <TETabsPane show={buttonActive === 'tab1'}>Tab 1 content button version</TETabsPane>
        <TETabsPane show={buttonActive === 'tab2'}>Tab 2 content button version</TETabsPane>
        <TETabsPane show={buttonActive === 'tab3'}>Tab 3 content button version</TETabsPane>
      </TETabsContent>
    </div>
  )
}
