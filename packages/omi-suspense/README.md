## omi-suspense

Handling asynchronous dependencies.

## Install

```bash
npm i omi-suspense
```

## Usage

```tsx
<o-suspense
  imports={[
    import('./components/user-info'),
    import('./components/user-profile'),
  ]}
  data={async () => {
    return await fetchUserProfile(router?.params.id as string)
  }}
  onLoaded={(event: CustomEvent) => {
    userProfile.value = event.detail[2]
  }}
>
  <div slot="pending">Loading user profile...</div>
  <div slot="fallback">Sorry, we are unable to load the user profile at the moment. Please try again later.</div>
  <user-info>
    <user-profile></user-profile>
  </user-info>
</o-suspense>
```

### Custom Render Functions


```tsx
<o-suspense
  imports={[
    import('./components/user-info'),
    import('./components/user-profile'),
  ]}
  data={async () => {
    return await fetchUserProfile(router?.params.id as string)
  }}
  onLoaded={(event: CustomEvent) => {
    userProfile.value = event.detail[2]
  }}
  beforePending={async (suspense: Component) => {
    // do something such as: fade out the root el of custom render
    return new Promise((resolve) => setTimeout(resolve, 300))
  }}
  pending={<div>Loading user profile...</div>}
  customRender={(results)=> {
    return (
      <user-info>
        <user-profile></user-profile>
      </user-info>
    )
  }}
  fallback={() => {
    return <div>Sorry, we are unable to load the user profile at the moment. Please try again later.</div>
  }}
>
</o-suspense>
```

## License

MIT © OMI