/*!
 *  omi-touch v0.2.1 by dntzhang
 *  AlloyTouch / Omi integration. Smooth scrolling, rotation, pull to refresh, page transition and any motion for your Omi project.
 *  Github: https://github.com/AlloyTeam/omi
 *  MIT Licensed.
 */

; (function () {
    if (typeof Omi === 'undefined') return

    var OmiTouch = {};
    var AlloyTouch = typeof require === 'function' ? require('alloytouch/alloy_touch.css.js') : window.AlloyTouch;
    var Transform = typeof require === 'function' ? require('css3transform') : window.Transform;


    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    var OmiTouch = function (_Component) {
        _inherits(OmiTouch, _Component);

        function OmiTouch() {
            _classCallCheck(this, OmiTouch);

            return _possibleConstructorReturn(this, _Component.apply(this, arguments));
        }

        OmiTouch.prototype.render = function () {
            return this.props.children[0]

        };

        OmiTouch.prototype.installed = function () {
            console.log(this.base)

            var target = this.base.firstChild;

            Transform(target);

            var alloyTouch = new AlloyTouch({
                touch: this.base,
                vertical: this.props.vertical === false ? false : true,
                target: target,
                property: this.props.property || "translateY", 
                min: this.props.min, 
                max: this.props.max,
                sensitivity:  this.props.sensitivity,
                factor: this.props.factor,
                step: this.props.step,
                bindSelf: this.props.bindSelf,
                preventDefault: this.props.preventDefault === false ? false : true,
                change: this.props.change,
                touchStart: this.props.touchStart,
                touchMove: this.props.touchMove,
                touchEnd: this.props.touchEnd,
                tap: this.props.tap,
                pressMove: this.props.pressMove,
                animationEnd: this.props.animationEnd
               
            })
        }

        return OmiTouch;
    }(Omi.Component);



    // var noop = function(){

    // };

    // var getHandler = function(name, dom, instance) {
    //     var value = dom.getAttribute(name);
    //     if (value === null) {
    //         return noop;
    //     }else{
    //         return instance[value].bind(instance);
    //     }
    // };

    // var getNum = function(name, dom){
    //     var value = dom.getAttribute(name);
    //     if(value){
    //         return parseFloat(value);
    //     }
    // }


    // Omi.extendPlugin('omi-touch',function(dom, instance){
    //     if(dom.alloyTouch) return;
    //     var target = instance.refs[ dom.getAttribute('motionRef')];
    //     Transform(target);
    //     var initialValue = dom.getAttribute('initialValue');
    //     if(initialValue){
    //         target[dom.getAttribute('property') || "translateY"] = parseInt(initialValue);
    //     }

    //     var alloyTouch = new AlloyTouch({
    //         touch: dom,//����������dom
    //         vertical: dom.getAttribute('vertical') === 'false' ? false : true,//�����裬Ĭ����true���������ֱ����touch
    //         target: target, //�˶��Ķ���
    //         property: dom.getAttribute('property') || "translateY",  //���˶�������
    //         min:  getNum('min', dom), //������,�˶����Ե���Сֵ
    //         max:  getNum('max', dom), //������,�������Ե����ֵ
    //         sensitivity: getNum('sensitivity', dom) ,//������,�������������ȣ�Ĭ��ֵΪ1������Ϊ����
    //         factor: getNum('factor', dom) ,//������,��ʾ����λ���뱻�˶�����ӳ���ϵ��Ĭ��ֵ��1
    //         step: getNum('step', dom),//����У����step��������
    //         bindSelf: dom.getAttribute('bindSelf') === 'true' ? true : false,
    //         change: getHandler('change', dom, instance),
    //         touchStart: getHandler('touchStart', dom, instance),
    //         touchMove: getHandler('touchMove', dom, instance),
    //         touchEnd: getHandler('touchEnd', dom, instance),
    //         tap: getHandler('tap', dom, instance),
    //         pressMove: getHandler('pressMove', dom, instance),
    //         animationEnd: getHandler('animationEnd', dom, instance),
    //         preventDefault: dom.getAttribute('preventDefault') === 'false' ? false : true
    //     })

    //     dom.alloyTouch = alloyTouch
    // });


    if (typeof exports == "object") {
        module.exports = OmiTouch;
    } else if (typeof define == "function" && define.amd) {
        define([], function () { return OmiTouch });
    } else {
        window.OmiTouch = OmiTouch;
    }

})();