## Top App Bar

MDC Top App Bar acts as a container for items such as application title, navigation icon, and action items.

## Usage

```jsx
<m-top-app-bar
  title='Omim'
  short
  onNavigation
  navigation-icon="{
    view: 24,
    path: 'M15 3l2.3 2.3-2.89 2.87 1.42 1.42L18.7 6.7 21 9V3zM3 9l2.3-2.3 2.87 2.89 1.42-1.42L6.7 5.3 9 3H3zm6 12l-2.3-2.3 2.89-2.87-1.42-1.42L5.3 17.3 3 15v6zm12-6l-2.3 2.3-2.87-2.89-1.42 1.42 2.89 2.87L15 21h6z'
  }"
  onAction0
  action-items="[
    {
      view: 48,
      path: 'M34.02 28h-1.59l-.55-.55c1.96-2.27 3.14-5.22 3.14-8.45 0-7.18-5.82-12.99-13-12.99S9.03 12 9.02 19H4l7.68 8L20 19h-6.98c.01-5 4.03-8.99 9-8.99s9 4.03 9 9-4.03 9-9 9c-1.29 0-2.52-.28-3.63-.77l-2.96 2.96c1.93 1.14 4.18 1.81 6.59 1.81 3.23 0 6.17-1.18 8.44-3.13l.54.54V31l10.01 9.98L43.99 38l-9.97-10z'
    }
  ]"
></m-top-app-bar>
```

## API

### Props

```jsx
{
  title: string,
  short: boolean,
  shortCollapsed: boolean,
  prominent: boolean,
  dense: boolean,
  fixed: boolean,
  navigationIcon: object,
  actionItems: object
}
```