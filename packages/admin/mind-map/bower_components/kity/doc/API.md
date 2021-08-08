# Kity Graphic Layer API #


## Point ##
> 数据契约（JSON 格式）

表示一个点，结构如下：

```javascript
{
    x : <float>,
    y : <float>
}
```





## Size ##
> 数据契约（JSON 格式）

表示一个尺寸，结构如下：

```
{
    width : <float>,
    height : <float>
}
```




## Container ##
> 功能拓展

提供一个容器功能

### getItems() : Array ###
获得容器中所有的子元素

### getItem(int pos) : object ###
获得指定位置的子元素

### getFirstItem() : object ###
获得首个子元素

### getLastItem() : object ###
根据 CSS Class 获得指定的图形集合

### indexOf(object item) : int ###
获取指定子元素的位置，如果不存在则返回 -1

### forEachItem(Function fn) : this ###
迭代每个子元素

### addItem(object item, int pos) : this ###
添加子元素到指定的位置

### appendItem(object item) : this ###
追加子元素到指定的位置

### prependItem(object item) : this ###
添加子元素到最前头的位置

### removeItem(int pos) : this ###
删除指定位置的子元素

### clear() : this ###
清除容器中所有的子元素

### Item.remove() ###
子元素从容器移除自身

### Item.container ###
子元素获得包含自身的容器





## EventHandler ##
> 功能拓展

表示可以处理图形事件的接口

### addEventListener(name, handler(ShapeEvent)) ###
注册指定的事件（如 mousedown、 mousemove、 mouseup、 click、 keydown 等）

### removeEventListener(name [, handler(ShapeEvent)]) ###
取消已注册的事件。如果不传绑定的处理函数，将取消所有指定类型的绑定




## ShapeEvent ##
> 基类 ： DomEvent

包装原生事件对象，并且提供点击的 Shape 实例

### targetShape : Shape ###
点击的 Shape 实例




## Paper ##
> 基类 : BaseClass
> 实现 : EventHandler, DefContainer
> 所有图形的

### Paper(HTMLElement container) : Paper ###
构造函数，给定父容器 Dom，在父容器上创建 Paper 和呈现

### Paper(string id) : Paper ###
构造函数，给定父容器 id，在父容器上创建 Paper 和呈现

### getWidth() : float ###
获取 Paper 的宽度，单位为px

### getHeight() : float ###
返回 Paper 的高度，单位为px

### setWidth(float width) : this ###
设置 Paper 的宽度，单位为px

### setHeight(float height) : this ###
设置 Paper 的高度，单位为px 

### setViewBox(float x, float y, float width, float height) : this ###
设置 Paper 的坐标范围

> 比如说，ViewBox 为 (0, 0, 100, 100) 的时候，一个大小为 (10, 10) 的矩形宽度占据了 Paper 的十分之一。若 Paper 实际大小为 1000px * 1000px 时，矩形实际大小就是 100px * 100px

### getViewBox() : Box ###
获得 Paper 的坐标范围。

### getShapeById(id) : Shape ###
获得具有指定 id 的图形

### internal createDef(string tagName) ###
添加具有指定类型的 def，会给其分配一个 id

### internal removeDef(string id) ###
移除具有指定 id 的 def





## Styled ##
> 功能拓展

CSS 样式支持

### addClass(string className) : this ###
添加 CSS Class

### removeClass(string className) : this ###
删除 CSS Class

### hasClass(string className) : this ###
判断是否存在指定的 class

### setStyle(Plain styles) ##
设置元素的样式






## Shape ##
> 基类 : Class
> 抽象类
> 实现 : EventHandler, Styled

表示一个图形

### setId(string id) : this ###
设置图形的 id

### getId() : string ###
获得图形的 id

### getType() : string ###
获得图形的类型

### getWidth() : int ###
获取图形所占的宽度

### getHeight() : int ###
返回图形所占的高度

### getSize() : Size ###
返回图形的大小

### getBoundaryBox() : Box ###
获得图形的边界

### setAnchor(float x, float y) : this ###
设置矩阵应用的旋转锚点

### getAnchor() : Point ###
获取矩阵应用的旋转锚点

### getTransform() : Matrix
获取图形当前的变换矩阵

### setTransform(Matrix matrix) : this ###
设置图形的变换矩阵

### mergeTransform(Matrix matrix) : this ###
合并图形的变换矩阵

### translate(float dx, float dy) : this ###
移动图形

### rotate(float degree [, float cx, float cy]) : this ###
旋转图形

### scale(float sx [, float sy]) ###
缩放图形，如果不给定sy，则等比缩放（认为sy = sx）

### 

### *addFilter(Filter filter) : this ###
添加滤镜

### *removeFilter(Filter filter) : this ###
删除滤镜






## PathDrawer ##
> 基类 : BaseClass

提供操作 PathData 的工具类

### PathDrawer(Path path) ###
构造时给定 PathDrawer 要操作的 Path

### moveTo(x, y) : this ###
设置路径当前位置

### moveBy(dx, dy) : this ###
设置路径当前位置（相对位置）

### lineTo(x, y) : this ###
从当前位置绘制一条直线到指定的位置

### lineBy(dx, dy) : this ###
从当前位置绘制一条直线到指定的位置（相对位置）

### bezierTo(x1, y1, x2, y2, x, y) : this ###
绘制贝塞尔曲线

### bezierBy(dx1, dy1, dx2, dy2, dx, dy) : this ###
绘制贝塞尔曲线（相对位置）

### close() : this ###
闭合当前路径






## Path ##
> 基类 : Shape

表示一个路径（闭合或不闭合）

### Path() : Path ###
构造函数，创建一条空路径

### Path(string data): Path ###
构造函数，用指定的路径数据创建路径

### getPathData() : string ###
获得路径的数据表示

### setPathData(string data) : this ###
设置路径的数据。为了防止派生的图形不被非法修改，有些子类可能会保护改方法不被调用，或者使调用无效。实例化Path能保证该方法的有效性。

### getDrawer() : PathDrawer ###
获得路径数据绘制工具，用于构建或更新路径。注意，闭合的路径调用该方法时会返回 null。

### isClosed() : bool ###
判断当前路径是否已闭合

### stroke(Pen pen) : this ###
用指定的画笔描边路径

### fill(Brush brush) : this ###
用指定的画刷填充路径








## Group
> 基类 : Shape
> 实现 : Container
 
将多个图形组合成新的图形，请参照 Container

## Group() ##
构造函数创建一个空的组






## Rect
> 基类 : Path

表示一个矩形

### Rect(float width, float height, float x, float y) : Rect ###
构造函数，给定矩形的大小和位置

### setWidth(float width) : this ###
设置矩形的宽度

### setHeight(float height) : this ###
设置矩形的高度

### setSize(float width, float height) ###
设置矩形的大小

### getRadius() : float #####
获得矩形的圆角大小

### setRadius(float radius) : this ###
设置矩形的圆角大小

### getPosition() : Point ###
获取矩形位置的坐标点

### setPosition( float x, float y ) : this ###
设置矩形的位置坐标

### getPositionX() : float ###
获取矩形在X轴上的位置

### getPositionY() : float ###
获取矩形在Y轴上的位置

### setPositionX（ float x ） : this ###
设置矩形在X轴上的位置

### setPositionY（ float y ） : this ###
设置矩形在Y轴上的位置




## Ellipse
> 基类 : Path

表示一个椭圆

### Ellipse(float radiusX, float radiusY) ###
快捷构造椭圆，给定椭圆的大小

### Ellipse(float radiusX, float radiusY, float x, float y) ###
快速构造椭圆，给定椭圆的位置和大小

### getRadius() : Point ###
获得椭圆的半径

### getRadiusX() : float ###
获得椭圆在 x 轴上的半径

### getRadiusY() : float ###
获得椭圆在 y 轴上的半径

### getCenter() : Point ###
获得椭圆圆心的位置

### getCenterX() : float ###
获得椭圆圆心位置的 x 坐标

### getCenterY() : float ###
获得椭圆圆心位置的 y 坐标

### setRadius(float radiusX, float radiusY) : this ###
设置椭圆的半径

### setRadiusX(float radiusX) : this ###
设置椭圆在 x 轴上的半径

### setRadiusY(float radiusY) : this ###
设置椭圆在 y 轴上的半径

### setCenter(float x, float y) : this ###
设置椭圆圆心的位置

### setCenterX(float x) : this ###
设置椭圆圆心位置的 x 坐标

### setCenterY(float y) : this ###
设置椭圆圆心位置的 y 坐标



## Polygon
> 基类 : Path
> 实现 : Container

表示一个多边形，其子元素表示其顶点序列

### Polygon() : Polygon ###
构造函数，创建一个空多边形

### Polygon(Array<Point>) : Polygon ###
用点序列来构造多边形






## Line
> 基类 : Path

表示一条线段

### Line(float x1, float y1, float x2, float y2) ###
快捷构造函数

### setPoint1(float x, float y) : this ###
设置线段第一个端点的位置

### getPoint1() : Point ###
获取线段第一个端点的位置

### setPoint2(float x, float y) : this ###
设置线段第二个端点的位置

### getPoint2() : Point ###
获取线段第二个端点的位置






## Curve
> 基类 : Path
> 实现 : Container

表示一条曲线，其子元素表示其经过的点序列

### Curve() : Curve ###
构造函数，初始化一条曲线

### Curve(Array<Points> points) : Curve ###
快捷构造函数，给定曲线经过的点


## Bezier（贝塞尔曲线） ##
> 基类 : Path
> 实现 : PointContainer

### Bezier() : Bezier ###
构造函数，初始化一个空的贝塞尔曲线

### Bezier( Array bezierPoints ) : Bezier ###
构造函数，初始化一个含有给定点集合的贝塞尔曲线



## BezierPoint（贝塞尔上的点） ##
> 基类 : Class

### BezierPoint( number x, number y ) : BezierPoint ###
构造函数， 根据提供的坐标初始化一个贝塞尔曲线上的点，该点初始是平滑的。 该点还未设置控制点坐标，不能把未设置控制点的BezierPoint添加到bezier曲线上。

### BezierPoint( number x, number y, boolean isSmooth ) : BezierPoint ###
构造函数， 根据提供的坐标初始化一个贝塞尔曲线上的点，可以根据参数isSmooth决定是否平滑。 该点还未设置控制点坐标，不能把未设置控制点的BezierPoint添加到bezier曲线上。

### setForward( number x, number y ) : this ###
设置前置控制点位置，如果当前点BezierPoint对象是平滑的， 则对前置点的改变会引起后置点的变化， 如果不平滑， 则不会引起这种变化。

### setBackward( number x, number y ) : this ###
设置后置控制点位置，如果当前点BezierPoint对象是平滑的， 则对后置点的改变会引起前置点的变化， 如果不平滑， 则不会引起这种变化。

### setSmooth( boolean isSmooth ) : this ###
设置当前BezierPoint对象是否平滑， 更改平滑的BezierPoint对象的控制点，会引起另一个控制点的变化， 反之，则不会引起变化。

### setPoint( number x, number y ) : this ###
更改当前BezierPoint对象的顶点坐标， 该方法会同时移动当前BezierPoint对象的控制点位置。



## Polyline ##
> 基类 : Path
> 实现 : Container

表示一条折线，其子元素是其顶点

### Polyline() : Polygon ###
构造函数，创建空折线

### Polyline(Array<Point>) : Polygon ###
用点序列来创建折线





## Image ##
> 基类 : Shape

用于显示图片

### Image(string url, width, height, x, y) : Image ###
根据提供的url和宽度、高度、x坐标，y坐标信息初始化一个图片对象

### Image(string url, width, height) : Image ###
根据提供的url和宽度、高度信息初始化一个图片对象， 此图片的所处位置的x和y坐标都为0

### setUrl(string url) : this ###
设置图片的 URL

### setWidth( number width ) : this ###
设置图片宽度

### setHeight( number height ) : this ###
设置图片高度

### setX( number x ) : this ###
设置图片位置X坐标

### setY( number y ) : this ###
设置图片位置Y坐标

### getUrl() : string ###
获取图片的 URL,如果未设置图标， 则返回null

### getWdith() : number ###
获取图片的宽度

### getHeight() : number ###
获取图片的高度

### getX() : number ###
获取图片的X坐标

### getY() : number ###
获取图片的Y坐标






## Text ##
> 基类 : Shape
> 实现 : Container

用于显示文字，其子元素为单独控制样式的 TextSpan

### Text() : Text ###
创建一个空的文本

### Text(string content) : Text ###
创建一个具有指定内容的文本

### setContent(string content) : this ###
设置文本内容

### getContent() : string
获得文本内容

### appendContent( string content ) : Text
向文本内追加内容

### setX(float x) : this ### 
设置文本显示的位置的 x 坐标

### setY(float y) : this ###
设置文本显示的位置的 y 坐标

### getX() : float ###
获得文本显示位置的 x 坐标

### getY() : float ###
获得文本显示位置的 y 坐标

### *setPath(string pathData) : ###
设置文本的排列路径





## TextSpan ##
> 基类 : Class
> 实现 : Styled

内联文本块

### TextSpan(string content) ###
创建具有指定内容的文本框

### setContent(string content) ###
设置文本块内容

### getContent() : string ###
获得文本块内容







## Color ##
> 基类 : Class
> 实现 : Serializable

表示一个颜色

### Color() : this ###
得到 RGBA(0, 0, 0, 0) 的颜色

### Color(string colorString) ###
用指定的 Color String 来创建颜色，支持常用

### set(string name, float value) : this
设置当前颜色的某一个分量值，支持：

* r/red - RGB 颜色表示中的红色分量（取值0-255）
* g/green - RGB 颜色表示中的绿色分量（取值0-255）
* b/blue - RGB 颜色表示中的蓝色分量（取值0-255）
* h/hue - HSL 颜色表示中的色环角度（取值0-360）
* s/saturation - HSL 颜色表示中的饱和度（取值0-100）
* l/lightness - HSL 颜色表示中的亮度（取值0-100）
* a/alpha - 颜色的透明度（取值0 - 1）

设置 RGB 的分量会影响 HSL 的分量，反之亦然。

### increase(string name, float inc) ###
增加当前颜色某个分值的值，如果溢出，会设置为对应的最大值

### decrease(string name, float dsc) ###
减少当前颜色某个分值的值，如果溢出，会这职位对应的最小值

### get(string name) : this ###
获取当前颜色的某一个分量值，支持的名称和set方法中规定一致

### toRGB() : string ###
获得当前颜色的 RGB 表示： RGB(r, g, b)，这种表示形式会丢失颜色的透明度信息

### toHEX() : string ###
获得当前颜色的 HEX 表示: #RRGGBB，这种表示形式会丢失颜色的透明度信息

### toHSL() : string ###
获得当前颜色的 HSL 表示: HSL(h, s%, l%)，这种表示形式会丢失颜色的透明度信息

### toRGBA() : string ###
获得当前颜色的 RGBA 表示: RGBA(r, g, b, a)

### toHSLA() : string ###
获得当前颜色的 HSLA 表示：HSLA(h, s%, l%, a)








## Brush ##
> 基类 : Class
> 抽象类
> 实现 : Serializable

表示一个画刷，用于填充 Path

### getType() : string ###
获取画刷的类型








# ColorBrush #
> 基类: Brush

表示一个用纯色填充的画刷

### ColorBursh() ###
构造函数，初始化一个纯色填充的画刷

### ColorBrush(Color color) : this ###
构造函数，使用指定的颜色初始化画刷

### setColor(Color color) : this ###
设置画刷颜色

### getColor() : Color ###
获取画刷的颜色








# LinearGradientBrush #
> 基类 : Brush

表示用线性渐变填充的画刷。线性渐变的方向和大小由两个值决定。起始位置和结束，使用(px, py)来表示，取值0 - 1，表示渐变的开始和结束位置在图形的指定比例处。默认是 (0,0) 和 (1, 0)
渐变的颜色通过添加 ColorStop 来指定

### Paper.createLinearGradientBrush() ###
从 paper 创建一个线性渐变的画刷

### LinearGradientBrush(Paper paper) : this ###
初始化线性渐变画刷

### setStartPosition(float px, float py) ###
设置渐变起始位置

### setEndPosition(float px, float py) ###
设置渐变结束位置

### getStartPosition() : Point ###
获取渐变起始位置

### getEndPosition() : Point ###
获取渐变结束位置

### addStop(float offset, Color color) : this ###
设置指定位置上的颜色，offset取值范围为 0 - 1，表示在渐变区间的比例的颜色






# RadialGradientBrush #
> 基类 : Brush

表示用径向渐变填充的画刷。径向渐变用三个值表示。中心位置和半径表示其范围，都用 0 - 1 作为值域。
焦点表示径向渐变的起始位置。中心位置的默认值为(0.5, 0.5), 焦点位置的默认值为(0.5, 0.5)，半径默认值为0.5。

### Paper.createRadialGradientBrush() : Brush ###

### RadialGradientBrush() : this ###
初始化一个径向填充的画刷

### setCenter(float cx, float cy) ###
设置径向渐变的中心位置

### getCenter() : Point ###
获得径向渐变的中心位置

### setFocal(float fx, float fy) : this ###
设置径向渐变的焦点位置

### getFocal() : Point ###
获取径向渐变的焦点位置

### setRadius( float r ) ###
设置径向渐变的半径

### getRadius() : float ###
获取径向渐变的半径

### addStop(float offset, Color color) : this ###
设置渐变指定区间位置的颜色，取值范围 0 - 1







# PatternBrush #
> 基类 : Brush
> 实现 : Container

表示用图形填充的画刷

### Paper.createPatternBrush() : PatternBrush ###
从 paper 创建一个 PatternBrush

### PatternBrush(Paper paper) : this ###
初始化一个图形填充画刷





## Pen ##
> 基类 : Class
> 实现 : Serializable

根据画笔设置当前图形边框样式

### getColor() : Color ###
获取当前图形画笔色值

### getWidth() : float ###
获取当前图形画笔粗细

### setColor(Color color) : this ###
设置当前图形画笔颜色

### setWidth(float width) : this ###
设置当前图形画笔的粗细

### setLineCap(string linecap) ###
设置画笔描边时，端点的样式，取值有：butt、round、suqare

### setLineJoin(string linejoin) ###
设置描边转折点的样式，取值有：miter、round、bevel

### getLineCap() : string ###
获得画笔当前设置的描边端点样式

### getLineJoin() : string ###
获得画笔当前设置的描边转折点样式

### getOpacity() : number ###
获取当前画笔的透明度值

### setOpacity( number opacity ): this ###
设置当前画笔的透明度

### getDashArray() : Array<float> ###
获取虚线的段长和间隔的定义数组，如果为空，则绘制实线

### setDashArray(Array<float>) : this ###
设置虚线的段长河间隔的定义数组





## Filter ##
> 基类 : Class
> 实现 : Serializable

表示一个应用到图形上的滤镜






## BlurFilter ##
> 基类 : Filter

设置图形滤镜为模糊

### BlurFilter(int blur) : this ###
创建一个滤镜

### setBlurFilter(int blur):this ###
设置当前图形滤镜模糊值

### getBlurFilter():this ###
获取当前图形滤镜模糊值






## ShadowFilter ##
> inherit: Class
>
> implement: Kity.Brush

设置图形滤镜为阴影

### getShadowFilterOffset():this ###
获取当前图形滤镜偏移

### setShadowFilterOffset(int x,int y):this ###
设置当前图形滤镜偏移

### getShadowFilterBlur():this ###
获取当前图形滤镜模糊值

### setShadowFilterBlur(int blur):this ###
设置当前图形滤镜模糊值

### getShadowFilterBlur():this ###
设置当前图形滤镜模糊值

### setShadowFilteColor(string color):this ###
设置当前图形滤镜颜色







## Matrix ##
> 基类 : Class
> 实现 : Serializable

图形变换

### translate(int x, int y) : this ###
添加一个偏移数据到矩阵上

### rotate(int degress) : this ###
添加一个旋转数据到矩阵上

### scale(float sx, float sy) : this ###
增加缩放数据到矩阵上，只给一个参数则等比缩放

### skew(float sx, float sy) : this ###
添加倾斜数据到矩阵上，只给一个参数等比倾斜

### getMatrix() : Plain ###
获取矩阵的数据： { a: float, b: float, c: ...}

### setMatrix(float a, float b, float c, float d, float e, float f): this ###
设置矩阵的数据

### mergeMatrix(Matrix another) : Matrix ###
合并另一个转换矩阵，返回合并后的矩阵



## Use(Shape origin)
> 基类：Shape

使用指定的图形，进行个性化设置。可以进行的设置：变换（Transform）、填充（Fill）、描边（Stroke）、样式（Style）。



## Clip
> 基类：Shape
> 拓展：ShapeContainer

创建图形剪辑。只显示图形剪辑闭合的路径部分。

### Clip.clip(Shape shape)

把剪辑作用在指定的图形上

### Shape.clipWith(Clip clip)

使用指定的剪辑作用在当前图形上



## Mask
> 基类：Shape
> 拓展：ShapeContainer

创建图形蒙版，蒙版颜色亮度为 100 的部分，被蒙版的图形能被完全显示，而蒙版颜色亮度为 0 的部分，被蒙版的图形透明度为 0。

### Mask.mask(Shape shape) : this

把蒙版作用在指定的图形上

### shape.maskWith(Mask mask) : this

使用指定的蒙版作用在当前图形

> Clipe 和 Mask 的差别：https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Clipping_and_masking