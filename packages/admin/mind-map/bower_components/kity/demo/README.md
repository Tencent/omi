Kity Demo 编写规范
=====

本目录存放 Kity 的 Demo，需要贡献 Demo 的，请遵守本规范。

## Demo 类型

Demo 允许以单个 HTML 页面存在，也可以以目录的形式存在。

如果 Demo 以目录的形式存在，Demo 的入口*必须是 index.html* 。可以在 Demo 目录中存放该 Demo 所需要的资源。但是如果资源可能能被其他 Demo 复用，那么应该把资源存放在 `public` 目录下。

## 页面结构

单页面的 Demo，或者目录形式的 Demo 的 index.html，应该遵循以下页面结构。

```html
<!DOCTYPE html>
<html>
<head>
    <!-- 必须强制指定页面编码为 UTF-8 -->
    <meta charset="utf-8">

    <!-- Demo 的简要说明，必须要填写 -->
    <meta name="description" content="Demo 的描述，必须要有">
    
    <!-- Demo 的作者，建议填写 -->
    <meta name="author" content="kity@baidu.com">
    
    <!-- Demo 的标题，必须填写 -->
    <title>Demo 标题</title>
    
    <!-- Demo 开发过程中使用 CMD 引入 Kity 源码，方便调试 -->
    <!-- dev start -->
    <!-- 目录型的 Demo 注意修正源码引用路径 -->
    <script src="../dev-lib/sea.js"></script>
    <script>
        // 设置好 kity 源代码目录
        seajs.config( { base: '../src'} );
        // 定义 Demo 模块
        define('demo', function(require) { require('kity'); });
    </script>
    <script>
        // 启动 Demo 模块
        seajs.use('demo');
    </script>
    <!-- dev end -->

    <!-- 生产使用中可以直接引用发布压缩的版本 -->
    <!-- production start -->
    <!-- 目录型的 Demo 注意修正源码引用路径 -->
    <!-- <script src="../dist/kity.min.js"></script> -->
    <!-- production end -->

    <!-- 可以引入样式表（针对目录形式的Demo） -->
    <!-- <link rel="stylesheet" href="mystyle.css"> -->
    
    <!-- 可以引入其他脚本 -->
    <!-- <script src="demoscript.js"></script> -->
</head>
<body>
    <!--Body 内容-->
</body>

<!-- 针对单页面的 Demo，可以直接在页面最后写 Script，作为 Demo 的源代码 -->
<script>
    
</script>
</html>
```

## 其他说明

1. 如果 Demo 在开发中，那么应该给 Demo 文件名或目录名前面加一个下划线，表示 Demo 不会被扫描发布。
2. `_sample.html` 是上述页面结构的源文件，开始一个新 Demo 可以从拷贝修改该文件开始。
3. 贡献了 Demo，请给我们提 pull request。欢迎一起丰富 kity 的 Demo 库！