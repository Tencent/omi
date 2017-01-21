## 文件说明

### omi.js
 
 UMD方式build，你可以使用AMD、CommonJS或者Import导入使用。也可以在HTML里直接引用脚本使用：
 
 ```js
 <script src="omi.js"></script>
 ```

### omi.lite.js

移除了模板引擎的omi.js。你可以重写Omi.render去使用任意模板引擎。

### omi_server.js

用于服务端直出或者同构直出。
  

## Explanation of Build Files

### omi.js

The full UMD build.
 

### omi.lite.js

Same as omi.js but without template engine.

### omi_server.js

This is used for server-side rendering.