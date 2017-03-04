# md2site

Transform Markdown to Website base on [Omi](https://github.com/AlloyTeam/omi) Framework.

### Installation
Prerequisites: Node.js (>=6.x), npm version 3+

```
$ npm install md2site -g
```

### Usage

```
$ md2site init                     // in current directory
```
or 
```
$ md2site init your_project_name   // in new directroy named project name
```

md2site will run 'npm install' to install dependencies.

### Write your markdown and preview

Write your markdowns and config the website in docs folder, you can run the command to preview the docs:

``` js
$ npm run dev
```

### Generate the website

``` js
$ npm run dist
```

