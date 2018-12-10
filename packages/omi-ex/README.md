# omi-ex

[Omi.js ts extension](https://github.com/rainmanhhh/omi-ex) by [rainmanhhh](https://github.com/rainmanhhh)

## Install

```
npm i omi-ex
```

### Usage

* Supports Router/Route(react-router like)
* Supports keepAlive
* Sharing data with subcomponents
  * appData.routerData.query
  * appData.routerData.params
  * appData.routerData.data

```js
import {RouterData} from 'omi-ex'

export class AppData {
  abc: string = ''
  passToChild: string = 'from parent'
  routerData: RouterData = new RouterData()
}

export const appData = new AppData()
```

```js
...
...
render(props: Omi.RenderableProps<AppProps>, data: AppData) {
  return (
    <div>
      <div>
        <a href={'#/'}>home</a>
        <a href={'#/test'}>test</a>
      </div>
      <Router data={appData.routerData}>
        <Route path={'/'} keepAlive={true}><Main/></Route>
        <Route path={'/test'}><Test/></Route>
        <Route path={'*'}>Not found</Route>
      </Router>
    </div>
  )
}
...
```