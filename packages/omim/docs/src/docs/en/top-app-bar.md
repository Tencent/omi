## Top App Bar

Top App Bar acts as a container for items such as application title, navigation icon, and action items.

## Usage

Method1:

```html
<m-top-app-bar adjust dense fixed
  heading='Omim'
  navigations="['favorite']"
  action-items="[{text: 'Omim'}, 'favorite_border', 'favorite_border']"
></m-top-app-bar>
```

Method2 (the navigation button customizes any element):

```html
<m-top-app-bar
  heading='Click to view all menus'
  adjust>
  <navigation>
    <m-avatar icon="person" background-color='#FFF' color='#0072d9' />
  </navigation>
  <actionitem>
    <m-badge css="..." content="99">
      <m-icon path="..." color="#FFF" />
    </m-badge>
  </actionitem>
  <div style='width:100%'>
    <m-tab css={`.mdc-tab-bar {background: #EEE;}`} default-active='speed' align="end" stacked>
      <item label="Recents" value="speed" icon="access_time"></item>
      <item label="Nearby" value="fire" icon="near_me"></item>
      <item label="Favorites" value="lol" icon="favorite"></item>
    </m-tab>
  </div>
</m-top-app-bar>
```

## Usage in Omi

JSX:

Method1:

```jsx
<m-top-app-bar adjust dense fixed
  heading='Omim'
  navigations={['favorite']}
  action-items={[{text: 'Omim'}, 'favorite_border', 'favorite_border']}
  onNavigation={this.onMenu}
  onAction={this.onMenu}
/>
```

Method2 (the navigation button customizes any element):

```jsx
<m-top-app-bar
  heading={'Click to show menus' + this.titleOmi}
  scroll-target={this.scrollTarget}
  onNavigation={this.onDemoStart}
  onAction={this.onMenuStart}>
  <navigation>
    <m-avatar icon="person" backgroundColor='#FFF' color={this.themeColor} />
  </navigation>
  <actionitem>
    <m-badge css={`...`} content="99">
      <m-icon path="..." color="#FFF" />
    </m-badge>
  </actionitem>
</m-top-app-bar>
```

## API

### Props

|  **Name**  | **Type**        | **Defaults**  | **Details**  |
| ------------- |:-------------:|:-----:|:-------------:|
| heading | string | -- | title content |
| short | boolean | -- | With shortened animation |
| shortCollapsed | boolean | -- | Fixed to a shortened state |
| prominent | boolean | -- | Highlight title |
| dense | boolean | -- | More compact top app bar |
| fixed | boolean | -- | Fixation top app bar |
| adjust | boolean | -- | Automatically fills the top app bar height |
| bottom | boolean | -- | Bottom application bar |
| navigations | object | -- | Left navigation button |
| actionItems | object | -- | Right button |
| scrollTarget | EventTarget | window | Set the target scrollbar (used by JSX) |
| scrollTargetId | string | window | Set the target scrollbar (used by native js) |
| onNavigation | function | -- | Click on the left navigation bar to trigger |
| onAction | function | -- | Click the button on the right to trigger |
