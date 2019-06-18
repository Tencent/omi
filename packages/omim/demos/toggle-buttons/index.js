import '../../src/toggle-buttons/index.tsx'
import { render, h } from 'omi'


const items = [
  { icon: 'favorite', label: 'Favorites', selected: true },
  { icon: 'location_on', label: 'Nearby' },
  { icon: 'restore', label: 'Recents' }

]

function onChange(item) {
  console.log(item)
}

render(
  <div>
    <m-toggle-buttons items={[
      { selected: true, path: 'M15 15H3v2h12v-2zm0-8H3v2h12V7zM3 13h18v-2H3v2zm0 8h18v-2H3v2zM3 3v2h18V3H3z' },
      { path: 'M7 15v2h10v-2H7zm-4 6h18v-2H3v2zm0-8h18v-2H3v2zm4-6v2h10V7H7zM3 3v2h18V3H3z' },
      { path: 'M3 21h18v-2H3v2zm6-4h12v-2H9v2zm-6-4h18v-2H3v2zm6-4h12V7H9v2zM3 3v2h18V3H3z' },
      { disabled: true, path: 'M3 21h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18V7H3v2zm0-6v2h18V3H3z' }
    ]}></m-toggle-buttons>
    <br /><br />
    <m-toggle-buttons multiple-selection items={[
      { selected: true, icon: 'account_balance', value: 0 },
      { icon: 'stars', value: 1 },
      { icon: 'av_timer', value: 2 },
      { disabled: true, icon: 'equalizer', value: 3 }
    ]}></m-toggle-buttons>
  </div>
  , 'body')

