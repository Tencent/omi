import React, { useState } from 'react'
import { TETabs, TETabsContent, TETabsItem, TETabsPane } from 'tw-elements-react'

export default function PillsColors(): JSX.Element {
  const [colorsActive, setColorsActive] = useState({
    tab1: 'tab1',
    tab2: 'tab1',
    tab3: 'tab1',
    tab4: 'tab1',
    tab5: 'tab1',
    tab6: 'tab1',
    tab7: 'tab1',
    tab8: 'tab1',
  })

  const handleColorsClick = (value: object) => {
    if (value === colorsActive) {
      return
    }
    setColorsActive({ ...colorsActive, ...value })
  }

  return (
    <div className="mb-3">
      {/* color primary */}
      <TETabs pills>
        <TETabsItem
          onClick={() => handleColorsClick({ ...colorsActive, tab1: 'tab1' })}
          active={colorsActive.tab1 === 'tab1'}
          color="primary"
        >
          Home
        </TETabsItem>
        <TETabsItem
          onClick={() => handleColorsClick({ ...colorsActive, tab1: 'tab2' })}
          active={colorsActive.tab1 === 'tab2'}
          color="primary"
        >
          Profile
        </TETabsItem>
        <TETabsItem
          onClick={() => handleColorsClick({ ...colorsActive, tab1: 'tab3' })}
          active={colorsActive.tab1 === 'tab3'}
          color="primary"
        >
          Messages
        </TETabsItem>
      </TETabs>
      <TETabsContent>
        <TETabsPane show={colorsActive.tab1 === 'tab1'}>Tab 1 content</TETabsPane>
        <TETabsPane show={colorsActive.tab1 === 'tab2'}>Tab 2 content</TETabsPane>
        <TETabsPane show={colorsActive.tab1 === 'tab3'}>Tab 3 content</TETabsPane>
      </TETabsContent>

      {/* color secondary */}
      <TETabs pills>
        <TETabsItem
          onClick={() => handleColorsClick({ ...colorsActive, tab2: 'tab1' })}
          active={colorsActive.tab2 === 'tab1'}
          color="secondary"
        >
          Home
        </TETabsItem>
        <TETabsItem
          onClick={() => handleColorsClick({ ...colorsActive, tab2: 'tab2' })}
          active={colorsActive.tab2 === 'tab2'}
          color="secondary"
        >
          Profile
        </TETabsItem>
        <TETabsItem
          onClick={() => handleColorsClick({ ...colorsActive, tab2: 'tab3' })}
          active={colorsActive.tab2 === 'tab3'}
          color="secondary"
        >
          Messages
        </TETabsItem>
      </TETabs>
      <TETabsContent>
        <TETabsPane show={colorsActive.tab2 === 'tab1'}>Tab 1 content</TETabsPane>
        <TETabsPane show={colorsActive.tab2 === 'tab2'}>Tab 2 content</TETabsPane>
        <TETabsPane show={colorsActive.tab2 === 'tab3'}>Tab 3 content</TETabsPane>
      </TETabsContent>

      {/* color success */}
      <TETabs pills>
        <TETabsItem
          onClick={() => handleColorsClick({ ...colorsActive, tab3: 'tab1' })}
          active={colorsActive.tab3 === 'tab1'}
          color="success"
        >
          Home
        </TETabsItem>
        <TETabsItem
          onClick={() => handleColorsClick({ ...colorsActive, tab3: 'tab2' })}
          active={colorsActive.tab3 === 'tab2'}
          color="success"
        >
          Profile
        </TETabsItem>
        <TETabsItem
          onClick={() => handleColorsClick({ ...colorsActive, tab3: 'tab3' })}
          active={colorsActive.tab3 === 'tab3'}
          color="success"
        >
          Messages
        </TETabsItem>
      </TETabs>
      <TETabsContent>
        <TETabsPane show={colorsActive.tab3 === 'tab1'}>Tab 1 content</TETabsPane>
        <TETabsPane show={colorsActive.tab3 === 'tab2'}>Tab 2 content</TETabsPane>
        <TETabsPane show={colorsActive.tab3 === 'tab3'}>Tab 3 content</TETabsPane>
      </TETabsContent>

      {/* color danger */}
      <TETabs pills>
        <TETabsItem
          onClick={() => handleColorsClick({ ...colorsActive, tab4: 'tab1' })}
          active={colorsActive.tab4 === 'tab1'}
          color="danger"
        >
          Home
        </TETabsItem>
        <TETabsItem
          onClick={() => handleColorsClick({ ...colorsActive, tab4: 'tab2' })}
          active={colorsActive.tab4 === 'tab2'}
          color="danger"
        >
          Profile
        </TETabsItem>
        <TETabsItem
          onClick={() => handleColorsClick({ ...colorsActive, tab4: 'tab3' })}
          active={colorsActive.tab4 === 'tab3'}
          color="danger"
        >
          Messages
        </TETabsItem>
      </TETabs>
      <TETabsContent>
        <TETabsPane show={colorsActive.tab4 === 'tab1'}>Tab 1 content</TETabsPane>
        <TETabsPane show={colorsActive.tab4 === 'tab2'}>Tab 2 content</TETabsPane>
        <TETabsPane show={colorsActive.tab4 === 'tab3'}>Tab 3 content</TETabsPane>
      </TETabsContent>

      {/* color warning */}
      <TETabs pills>
        <TETabsItem
          onClick={() => handleColorsClick({ ...colorsActive, tab5: 'tab1' })}
          active={colorsActive.tab5 === 'tab1'}
          color="warning"
        >
          Home
        </TETabsItem>
        <TETabsItem
          onClick={() => handleColorsClick({ ...colorsActive, tab5: 'tab2' })}
          active={colorsActive.tab5 === 'tab2'}
          color="warning"
        >
          Profile
        </TETabsItem>
        <TETabsItem
          onClick={() => handleColorsClick({ ...colorsActive, tab5: 'tab3' })}
          active={colorsActive.tab5 === 'tab3'}
          color="warning"
        >
          Messages
        </TETabsItem>
      </TETabs>
      <TETabsContent>
        <TETabsPane show={colorsActive.tab5 === 'tab1'}>Tab 1 content</TETabsPane>
        <TETabsPane show={colorsActive.tab5 === 'tab2'}>Tab 2 content</TETabsPane>
        <TETabsPane show={colorsActive.tab5 === 'tab3'}>Tab 3 content</TETabsPane>
      </TETabsContent>

      {/* color info */}
      <TETabs pills>
        <TETabsItem
          onClick={() => handleColorsClick({ ...colorsActive, tab6: 'tab1' })}
          active={colorsActive.tab6 === 'tab1'}
          color="info"
        >
          Home
        </TETabsItem>
        <TETabsItem
          onClick={() => handleColorsClick({ ...colorsActive, tab6: 'tab2' })}
          active={colorsActive.tab6 === 'tab2'}
          color="info"
        >
          Profile
        </TETabsItem>
        <TETabsItem
          onClick={() => handleColorsClick({ ...colorsActive, tab6: 'tab3' })}
          active={colorsActive.tab6 === 'tab3'}
          color="info"
        >
          Messages
        </TETabsItem>
      </TETabs>
      <TETabsContent>
        <TETabsPane show={colorsActive.tab6 === 'tab1'}>Tab 1 content</TETabsPane>
        <TETabsPane show={colorsActive.tab6 === 'tab2'}>Tab 2 content</TETabsPane>
        <TETabsPane show={colorsActive.tab6 === 'tab3'}>Tab 3 content</TETabsPane>
      </TETabsContent>

      {/* color light */}
      <TETabs pills>
        <TETabsItem
          onClick={() => handleColorsClick({ ...colorsActive, tab7: 'tab1' })}
          active={colorsActive.tab7 === 'tab1'}
          color="light"
        >
          Home
        </TETabsItem>
        <TETabsItem
          onClick={() => handleColorsClick({ ...colorsActive, tab7: 'tab2' })}
          active={colorsActive.tab7 === 'tab2'}
          color="light"
        >
          Profile
        </TETabsItem>
        <TETabsItem
          onClick={() => handleColorsClick({ ...colorsActive, tab7: 'tab3' })}
          active={colorsActive.tab7 === 'tab3'}
          color="light"
        >
          Messages
        </TETabsItem>
      </TETabs>
      <TETabsContent>
        <TETabsPane show={colorsActive.tab7 === 'tab1'}>Tab 1 content</TETabsPane>
        <TETabsPane show={colorsActive.tab7 === 'tab2'}>Tab 2 content</TETabsPane>
        <TETabsPane show={colorsActive.tab7 === 'tab3'}>Tab 3 content</TETabsPane>
      </TETabsContent>

      {/* color dark */}
      <TETabs pills>
        <TETabsItem
          onClick={() => handleColorsClick({ ...colorsActive, tab8: 'tab1' })}
          active={colorsActive.tab8 === 'tab1'}
          color="dark"
        >
          Home
        </TETabsItem>
        <TETabsItem
          onClick={() => handleColorsClick({ ...colorsActive, tab8: 'tab2' })}
          active={colorsActive.tab8 === 'tab2'}
          color="dark"
        >
          Profile
        </TETabsItem>
        <TETabsItem
          onClick={() => handleColorsClick({ ...colorsActive, tab8: 'tab3' })}
          active={colorsActive.tab8 === 'tab3'}
          color="dark"
        >
          Messages
        </TETabsItem>
      </TETabs>
      <TETabsContent>
        <TETabsPane show={colorsActive.tab8 === 'tab1'}>Tab 1 content</TETabsPane>
        <TETabsPane show={colorsActive.tab8 === 'tab2'}>Tab 2 content</TETabsPane>
        <TETabsPane show={colorsActive.tab8 === 'tab3'}>Tab 3 content</TETabsPane>
      </TETabsContent>
    </div>
  )
}
