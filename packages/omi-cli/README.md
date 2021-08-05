## omi-cli

### New Project by Omi

```bash
$ npm i omi-cli -g    # install cli
$ omi init my-app     # init project
$ cd my-app           
$ npm start           # develop
$ npm run build       # release
```

> `npx omi-cli init my-app` is also supported(npm v5.2.0+).


### New Component by Omi

```bash
$ npm i omi-cli -g    # install cli
$ omi init-component my-component     # init project
$ cd my-app           
$ npm start           # develop
$ npm run build       # release
```

> `npx omi-cli init-component my-component` is also supported(npm v5.2.0+).


<!-- Directory description:

```
├─ config
├─ public
├─ scripts
├─ src
│  ├─ assets
│  ├─ elements    //Store all custom elements
│  ├─ store       //Store all this store of pages
│  ├─ admin.js    //Entry js of compiler，will build to admin.html
│  └─ index.js    //Entry js of compiler，will build to index.html
``` -->

## Project Template

| **Template Type**|  **Command**|  **Describe**|
| ------------ |  -----------|  ----------------- |
|Base Template(v3.6.0+)|`omi init my-app`| Basic omi template with vite|

<!-- |Base Template(v3.3.0+)|`omi init my-app`| Basic omi project template.|
|TypeScript Template(omi-cli v3.3.0+)|`omi init-ts my-app`|Basic omi template with typescript.|
|Mobile Template|`omi init-weui my-app`| Mobile web app template with weui and omi-router.| -->


# License

This content is released under the [MIT](http://opensource.org/licenses/MIT) License.
