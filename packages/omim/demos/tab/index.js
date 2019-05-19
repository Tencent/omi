import '../../src/tab/index.tsx'
import '../../src/button/index.tsx'
import { render, h, define, WeElement } from 'omi'

define('my-app', class extends WeElement {

  // activateTab = (value) => {
  //   [this.tab1, this.tab2, this.tab3, this.tab4].forEach(ref => ref.activateTab(value))
  // }

  onChange = (evt) => {
    console.log(evt.detail)
  }

  render() {
    return (
      <div>
        <h3>Tabs with icons next to labels</h3>

        <m-tab defaultActive='speed' onChange={this.onChange} align="end">
          <item label="Recents" value="speed" icon="access_time"></item>
          <item label="Nearby" value="fire" icon="near_me"></item>
          <item label="Favorites" value="lol" icon="favorite"></item>
        </m-tab>
        <h3>Tabs with icons next to labels width useMinWidth</h3>

        <m-tab useMinWidth defaultActive='speed'>
          <item label="Recents" value="speed" icon="access_time"></item>
          <item label="Nearby" value="fire" icon="near_me"></item>
          <item label="Favorites" value="lol" icon="favorite"></item>
        </m-tab>

        <h3>Tabs with icons above labels and indicators restricted to content</h3>

        <m-tab defaultActive='speed' align="end" stacked>
          <item label="Recents" value="speed" icon="access_time"></item>
          <item label="Nearby" value="fire" icon="near_me"></item>
          <item label="Favorites" value="lol" icon="favorite"></item>
        </m-tab>


        <h3>Scrolling tabs</h3>

        <m-tab defaultActive='1'>
          <item label="Tab 1" value="1"></item>
          <item label="Tab 2" value="2"></item>
          <item label="Tab 3" value="3"></item>
          <item label="Tab 4" value="4"></item>
          <item label="Tab 5" value="5"></item>
          <item label="Tab 6" value="6"></item>
          <item label="Tab 7" value="7"></item>
          <item label="Tab 8" value="8"></item>
          <item label="Tab 9" value="9"></item>
          <item label="Tab 10" value="10"></item>
          <item label="Tab 11" value="11"></item>
          <item label="Tab 12" value="12"></item>
          <item label="Tab 13" value="13"></item>
          <item label="Tab 14" value="14"></item>

          <item label="Tab 15" value="15"></item>
          <item label="Tab 16" value="16"></item>
          <item label="Tab 17" value="17"></item>
          <item label="Tab 18" value="18"></item>
          <item label="Tab 19" value="19"></item>

        </m-tab>

        <h3>Scrolling tabs with width</h3>
        <m-tab width="200px" defaultActive='1'>
          <item label="Tab 1" value="1"></item>
          <item label="Tab 2" value="2"></item>
          <item label="Tab 3" value="3"></item>
          <item label="Tab 4" value="4"></item>

        </m-tab>
        <h3>Align Start Center End</h3>

        <m-tab defaultActive="speed" align="start" useMinWidth>
          <item label="Recents" value="speed" icon="access_time"></item>
          <item label="Nearby" value="fire" icon="near_me"></item>
          <item label="Favorites" value="lol" icon="favorite"></item>
        </m-tab>

        <m-tab defaultActive="speed" align="center" useMinWidth>
          <item label="Recents" value="speed" icon="access_time"></item>
          <item label="Nearby" value="fire" icon="near_me"></item>
          <item label="Favorites" value="lol" icon="favorite"></item>
        </m-tab>



        <m-tab defaultActive="speed" align="end" useMinWidth>
          <item label="Recents" value="speed" icon="access_time"></item>
          <item label="Nearby" value="fire" icon="near_me"></item>
          <item label="Favorites" value="lol" icon="favorite"></item>
        </m-tab>


        <h3>SVG ICON</h3>


        <div>{this.tab4active}</div>
        <m-tab  defaultActive='lol'>
          <item label="王智千" value="wzq" svgIcon={{
            path: 'M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z',
            color: '#F95050',
            scale: 1
          }}></item>
          <item label="英雄联盟" value="lol"></item>
          <item label="QQ飞车" value="speed"></item>
          <item label="穿越火线" value="fire"></item>
          <item label="QQ音速" value="fly"></item>
        </m-tab>
      </div>
    )
  }
})

render(<my-app />, 'body')
