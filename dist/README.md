## Explanation of Build Files


- ### omi.js

The full UMD build.
 
 可以在HTML里直接引用脚本使用：
 ```js
 <script src="omi.js"></script>
 ```
也可以直接使用AMD、CommonJS或者Import导入使用

- ### omi_server.js

This is used for server-side rendering.
用户服务端直出或者同构直出。

- ### omi.lite.js

Same as omi.js but without template engine.
移除了模板引擎的omi.js。你可以重写Omi.render去使用任意模板引擎。
  