# create-omi 

Omi command-line interface 2.0

## Quick Start

### create a omi project

```shell
yarn create omi [project name] -t vite
```

### global installation

```shell
npm install -g create-omi
```

### use
```json
"bin": {
    "create-omi": "index.js",
    "coa": "index.js"
  },
```
**no option**

```shell
coa 
create-omi 
```

**with option**

```shell
coa [project name] -t vite
create-omi [project name] -t vite
```

## configure option

workdir: [project name]
Template: -template / -t

# License

This content is released under the [MIT](http://opensource.org/licenses/MIT) License.