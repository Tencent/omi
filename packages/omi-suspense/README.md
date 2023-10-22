## omi-suspense

Handling asynchronous dependencies.

### Installation

```bash
npm i omi-suspense
```

### Usage

```tsx
<o-suspense
  imports={[
    import('./components/user-info'),
    import('./components/user-profile'),
  ]}
  data={async () => {
    return await fetchUserProfile(router?.params.id as string)
  }}
  onDataLoaded={(event: CustomEvent) => {
    userProfile.value = event.detail
  }}
>
  <div slot="pending">Loading user profile...</div>
  <div slot="fallback">Sorry, we are unable to load the user profile at the moment. Please try again later.</div>
  <user-info>
    <user-profile></user-profile>
  </user-info>
</o-suspense>
```


## License

MIT © OMI