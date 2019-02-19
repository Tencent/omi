## Interface design reference

* https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/filter
* http://www.runoob.com/cssref/css3-pr-filter.html
* https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function

## Usage

``` js
const bitmap = new cax.Bitmap(img)
bitmap.filter('brightness(0.5)')

//or filter rect of bitmap
//bitmap.filter('brightness(0.5)'), { x: 0, y: 0, width: 80, height: 80 }
```

## Todo

horizontalFlip 和 verticalFlip 来制作镜像 spritesheet

``` js
new cax.Sprite({
    imgs:[bitmap.flipX()]
})

//bitmap.flipX()
//flipX return的就是 this.cacheCanvas
//bitmap.filpY()
```
