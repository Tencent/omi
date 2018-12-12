/*!
 *  omi-transform v0.3.1 by dntzhang
 *  Omi / css3transform  integration. Support CSS3 transformation in your Omi project.
 *  Github: https://github.com/AlloyTeam/omi
 *  MIT Licensed.
 */

;(function () {
    if(typeof Omi === 'undefined') return

    var Transform = typeof require === 'function'
        ? require('css3transform')
        : window.Transform;

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var OmiTransform = function (_Component) {
	    _inherits(OmiTransform, _Component);

	    function OmiTransform() {
	        _classCallCheck(this, OmiTransform);

	        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	    }

	    OmiTransform.prototype.render = function () {

            var mtx = Transform.getMatrix3D(this.props)

            var transform =  "matrix3d(" + Array.prototype.slice.call(mtx).join(",") + ")"
            if(this.props.hasOwnProperty('perspective')){
                if(typeof this.props.perspective === 'number'){
                    transform = "perspective(" +this.props.perspective + "px) "+ transform
                }else{
                    transform = "perspective(" +this.props.perspective  + ") "+ transform
                }
                 
            }
               
            var vd = this.props.children[0]
            if(vd.attributes&&vd.attributes.style){
                if(typeof vd.attributes.style === 'string'){
                    vd.attributes.style+="transform:"+transform+";"
                }else{
                    vd.attributes.style.transform = "transform:"+transform+";"
                }
            }
       
            return vd
            // return Omi.cloneElement(this.props.children[0], {
            //     style :"transform:"+transform+";"
            // });
	     
        };
        
        OmiTransform.prototype.installed = function () {
            Transform(this.base)
        }

	    return OmiTransform;
    }(Omi.Component);
    OmiTransform.mix = Transform;

    if (typeof exports == "object") {
        module.exports = OmiTransform;
    } else if (typeof define == "function" && define.amd) {
        define([], function(){ return OmiTransform });
    } else {
        window.OmiTransform = OmiTransform;
    }

})();