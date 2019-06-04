## Top App Bar

Top App Bar acts as a container for items such as application title, navigation icon, and action items.

## Usage

```html
<m-top-app-bar adjust dense fixed
  heading='Omim'
  navigations="'favorite'"
  action-items="[{text: 'Omim'}, 'favorite_border', 'favorite_border']"
></m-top-app-bar>
```

## Usage in Omi

JSX:

```jsx
<m-top-app-bar adjust dense fixed
  heading='Omim'
  navigations='favorite'
  action-items={[{text: 'Omim'}, 'favorite_border', 'favorite_border']}
  onNavigation={this.onMenu}
  onAction={this.onMenu}
/>
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
| navigations | object | -- | Left navigation button |
| actionItems | object | -- | Right button |
| scrollTarget | EventTarget | window | Set the target scrollbar (used by JSX) |
| scrollTargetId | string | window | Set the target scrollbar (used by native js) |
| onNavigation | function | -- | Click on the left navigation bar to trigger |
| onAction | function | -- | Click the button on the right to trigger |
