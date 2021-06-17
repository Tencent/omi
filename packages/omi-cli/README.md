## omi-cli

```bash
$ npx omi-cli init my-app     
$ cd my-app           
$ npm start            # develop
$ npm run build        # release
```

Directory description:

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
```

## Project Template

| **Template Type**|  **Command**|  **Describe**|
| ------------ |  -----------|  ----------------- |
|Vite Template(v3.5.1+)|`omi init-vite my-app`| Basic omi template with vite.|
|Base Template(v3.3.0+)|`omi init my-app`| Basic omi project template.|
|TypeScript Template(omi-cli v3.3.0+)|`omi init-ts my-app`|Basic omi template with typescript.|
|Mobile Template|`omi init-weui my-app`| Mobile web app template with weui and omi-router.|


# License

This content is released under the [MIT](http://opensource.org/licenses/MIT) License.
