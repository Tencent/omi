/**
 * PS钢笔工具所用的表示可绘制的控制点集合对象
 */

define( function ( require, exports, module ) {

    var Utils = require( "core/utils" ),
        Rect = require( "graphic/rect" ),
        Color = require( "graphic/color" ),
        Pen = require( "graphic/pen" ),
        Line = require( "graphic/line" ),
        Circle = require( "graphic/circle" );

    var GroupUtils = {

        listenVertex: function ( point, group, index ) {

            GroupUtils.listen( PointGroup.TYPE_VERTEX, point, group, index );

        },

        listenForward: function ( point, group, index ) {

            GroupUtils.listen( PointGroup.TYPE_FORWARD, point, group, index );

        },

        listenBackward: function ( point, group, index ) {

            GroupUtils.listen( PointGroup.TYPE_BACKWARD, point, group, index );

        },

        listen: function ( pointType, point, group, index ) {

            point.on( "mousedown", function ( e ) {

                group.trigger( 'pointmousedown', {
                    targetPointType: pointType,
                    targetPointIndex: index
                } );

            } );

        }

    };

    var PointGroup = require( "core/class" ).createClass( "PointGroup", {

        base: require( "graphic/group" ),

        constructor: function () {

            this.callBase();

            this.points = [];
            this.pointShapes = [];

            this.exterior = {

                vertex: {
                    width: 4 * 100,
                    height: 4 * 100
                },

                control: {

                    radius: 1.5 * 100

                },

                pen: {
                    width: 1 * 100
                }

            };

            this.handler = {
                'mousedown': [],
                'mouseup': []
            };

        },

        indexOf: function ( bezierPoint ) {

            var index = -1;

            if ( this.points.indexOf ) {
                return this.points.indexOf( bezierPoint );
            } else {

                Utils.each( this.points, function ( point, i ) {

                    if ( point === bezierPoint ) {
                        index = i;
                        return false;
                    }

                } );

                return index;

            }

        },

        // 获取顶点宽度
        getVertexWidth: function () {
            return this.exterior.vertex.width;
        },

        getPoints: function () {

            return this.points.slice( 0 );

        },

        getPointByIndex: function ( index ) {

            return this.points[ index ] || null;

        },

        getLastPoint: function () {

            return this.points[ this.points.length - 1 ] || null;

        },

        addPoint: function ( point ) {

            point.container = this;

            this.points.push( point );

            this.onChanged();

            return this;

        },

        onChanged: function () {

            this._draw();

        },

        update: function ( sourcePoint ) {

            // 数据发生改变， 重绘当前点
            this._redraw( sourcePoint );

        },

        // 选中给定索引的点，该操作会引起其他点的连锁反应
        selectPoint: function ( index ) {

            var shapeGroup = this.pointShapes[ index ];

            // 重绘当前点
            this._redraw( this.getPointByIndex( index ) );

            // 清空其他点的
            Utils.each( this.pointShapes, function ( shape, i ) {

                if ( i !== index ) {

                    this._clearShapePoint( i );

                }

            }, this );

            // 更新辅助点
            if ( index > 0 ) {
                this._drawAssistPoint( index-1 );
            }

        },

        _draw: function () {

            var point = this.getLastPoint(),
                currentIndex = this.pointShapes.length;

            this._drawPoint( point, currentIndex );

            // 绘制辅助点
            if ( currentIndex > 0 ) {
                this._drawAssistPoint( currentIndex - 1 );
            }

        },

        _redraw: function ( point ) {

            //寻找源所对应的图形
            var index = this.indexOf( point ),
                shape = this.pointShapes[ index ];

            var vertex = point.getVertex(),
                forward = point.getForward(),
                backward = point.getBackward();

            // 更新图形
            shape.forward.setCenter( forward.x, forward.y );
            shape.backward.setCenter( backward.x, backward.y );
            shape.line.setPoint1( forward.x, forward.y ).setPoint2( backward.x, backward.y );
            shape.vertex.setPosition( vertex.x - this.exterior.vertex.width / 2, vertex.y - this.exterior.vertex.height / 2 );

            this._stroke( shape.vertex );

        },

        _drawPoint: function ( point, index ) {

            var forward = point.getForward(),
                backward = point.getBackward(),
                shape = null;

            shape = {};
            this.pointShapes[ index ] = shape;

            //控制线
            shape.line = this._drawLine( forward, backward );
            //前置控制点
            shape.forward = this._drawForward( forward, index );
            //后置控制点
            shape.backward = this._drawBackward( backward, index );

            //vertex
            shape.vertex = this._drawVertex( point.getVertex(), index );

        },

        // 清理指定索引的图形点, 使得该点仅显示一个顶点
        _clearShapePoint: function ( index ) {

            var shape = this.pointShapes[ index ],
            // 当前的包含的数据点
                vertex = this.points[ index ].getVertex();

            shape.line.setPoint1( vertex.x, vertex.y ).setPoint2( vertex.x, vertex.y );
            shape.forward.setCenter( vertex.x, vertex.y );
            shape.backward.setCenter( vertex.x, vertex.y );

            this._stroke( shape.vertex, "white" );

        },

        // 根据指定的索引， 把该索引所对应的点更新成辅助点
        // 一个辅助点是当前曲线区间的起点， 它显示出该辅助点的forward控制点和连线
        _drawAssistPoint: function ( index ) {

            var shape = this.pointShapes[ index ],
            // 当前的包含的数据点
                bezierPoint = this.points[ index ],
                forward = bezierPoint.getForward(),
                vertex = bezierPoint.getVertex();

            shape.line.setPoint1( vertex.x, vertex.y ).setPoint2( forward.x, forward.y );
            shape.forward.setCenter( forward.x, forward.y );
            shape.backward.setCenter( vertex.x, vertex.y );

            this._stroke( shape.vertex, "white" );

            // 清理前一次的辅助点
            if ( index > 1 ) {

                this._clearShapePoint( index - 1 );

            }

        },

        _drawVertex: function ( vertex, index ) {

            var width = this.exterior.vertex.width,
                height = this.exterior.vertex.height,
                vertextRect = new Rect( width, height, vertex.x - width / 2 , vertex.y - height / 2 );

            //记录下图形
            this._stroke( vertextRect );

            this.addShape( vertextRect );

            GroupUtils.listenVertex( vertextRect, this, index );

            return vertextRect;

        },

        _drawForward: function ( point, index ) {

            var forwardPoint = this._drawControl( point );

            GroupUtils.listenForward( forwardPoint, this, index );

            return forwardPoint;

        },

        _drawBackward: function ( point, index ) {

            var backwardPoint = this._drawControl( point );

            GroupUtils.listenBackward( backwardPoint, this, index );

            return backwardPoint;

        },

        _drawControl: function ( point ) {

            var styles = this.exterior.control,
                radius = styles.radius,
                controlPoint = new Circle( radius, point.x, point.y );

            this._stroke( controlPoint );

            this.addShape( controlPoint );

            return controlPoint;

        },

        _drawLine: function ( forward, backward ) {

            var line = new Line ( forward.x, forward.y, backward.x, backward.y );

            line.stroke( new Pen( new Color( "#2d2d2d" ) ).setWidth( this.exterior.pen.width ) );

            this.addShape( line );

            return line;

        },

        _stroke: function ( shape, fillColor ) {

            shape.stroke(  new Pen( new Color( "#2d2d2d" ) ).setWidth( this.exterior.pen.width ) );
            shape.fill( new Color( fillColor || "black" ) );

        }

    } );

    Utils.extend( PointGroup, {

        // 顶点类型常量
        TYPE_VERTEX: "vertex",
        TYPE_FORWARD: "forward",
        TYPE_BACKWARD: "backward"

    } );

    return PointGroup;

} );