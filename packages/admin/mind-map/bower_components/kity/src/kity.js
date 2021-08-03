/**
 * @fileOverview kity 暴露的方法或对象
 */

define('kity', function(require, exports, module) {
    var kity = {},
        utils = require('./core/utils');
    kity.version = '2.0.0';

    utils.extend(kity, {
        // core
        createClass: require('./core/class').createClass,
        extendClass: require('./core/class').extendClass,
        Utils: utils,
        Browser: require('./core/browser'),

        // shape
        Box: require('./graphic/box'),
        Bezier: require('./graphic/bezier'),
        BezierPoint: require('./graphic/bezierpoint'),
        Circle: require('./graphic/circle'),
        Clip: require('./graphic/clip'),
        Color: require('./graphic/color'),
        Container: require('./graphic/container'),
        Curve: require('./graphic/curve'),
        Ellipse: require('./graphic/ellipse'),
        Group: require('./graphic/group'),
        Gradient: require('./graphic/gradient'),
        HyperLink: require('./graphic/hyperlink'),
        Image: require('./graphic/image'),
        Line: require('./graphic/line'),
        LinearGradient: require('./graphic/lineargradient'),
        Mask: require('./graphic/mask'),
        Matrix: require('./graphic/matrix'),
        Marker: require('./graphic/marker'),
        Palette: require('./graphic/palette'),
        Paper: require('./graphic/paper'),
        Path: require('./graphic/path'),
        Pattern: require('./graphic/pattern'),
        Pen: require('./graphic/pen'),
        Point: require('./graphic/point'),
        PointContainer: require('./graphic/pointcontainer'),
        Polygon: require('./graphic/polygon'),
        Polyline: require('./graphic/polyline'),
        Pie: require('./graphic/pie'),
        RadialGradient: require('./graphic/radialgradient'),
        Resource: require('./graphic/resource'),
        Rect: require('./graphic/rect'),
        RegularPolygon: require('./graphic/regularpolygon'),
        Ring: require('./graphic/ring'),
        Shape: require('./graphic/shape'),
        ShapePoint: require('./graphic/shapepoint'),
        ShapeContainer: require('./graphic/shapecontainer'),
        Sweep: require('./graphic/sweep'),
        Star: require('./graphic/star'),
        Text: require('./graphic/text'),
        TextSpan: require('./graphic/textspan'),
        Use: require('./graphic/use'),
        Vector: require('./graphic/vector'),
        g: require('./graphic/geometry'),

        // animate
        Animator: require('./animate/animator'),
        Easing: require('./animate/easing'),
        OpacityAnimator: require('./animate/opacityanimator'),
        RotateAnimator: require('./animate/rotateanimator'),
        ScaleAnimator: require('./animate/scaleanimator'),
        Timeline: require('./animate/timeline'),
        TranslateAnimator: require('./animate/translateanimator'),
        PathAnimator: require('./animate/pathanimator'),
        MotionAnimator: require('./animate/motionanimator'),
        requestFrame: require('./animate/frame').requestFrame,
        releaseFrame: require('./animate/frame').releaseFrame,

        // filter
        Filter: require('./filter/filter'),
        GaussianblurFilter: require('./filter/gaussianblurfilter'),
        ProjectionFilter: require('./filter/projectionfilter'),

        // effect
        ColorMatrixEffect: require('./filter/effect/colormatrixeffect'),
        CompositeEffect: require('./filter/effect/compositeeffect'),
        ConvolveMatrixEffect: require('./filter/effect/convolvematrixeffect'),
        Effect: require('./filter/effect/effect'),
        GaussianblurEffect: require('./filter/effect/gaussianblureffect'),
        OffsetEffect: require('./filter/effect/offseteffect')
    });

    return (window.kity = kity);
});