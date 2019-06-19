## Player

视频播放器，修改自[eplayer](https://github.com/132yse/eplayer)。

## Usage

```html
<script src="https://tencent.github.io/omi/packages/omi/dist/omi.js"></script>
<script src="../../src/player/index.js"></script>

<div style="margin:20px auto;width:800px;height:450px;">
	<m-player
		src="https://gss3.baidu.com/6LZ0ej3k1Qd3ote6lo7D0j9wehsv/tieba-smallvideo/607272_2fc490269fcdf87707804278a309891a.mp4">
	</m-player>
</div>
```

or 

```jsx
import 'omim/player'

//using tag anywhere

<m-player
	src="https://gss3.baidu.com/6LZ0ej3k1Qd3ote6lo7D0j9wehsv/tieba-smallvideo/607272_2fc490269fcdf87707804278a309891a.mp4">
</m-player>
```

## 谁在使用?

* [clicli.us - C 站](https://www.clicli.us/)
* [ayypd.cn - 爱看动漫网](http://sp.ayypd.cn/)
* [Tencent Omi Team](https://github.com/Tencent/omi)

## API

### Props

```jsx
{
	src: string
}
```