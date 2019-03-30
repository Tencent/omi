"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.THIRD_PARTY_COMPONENTS = new Set();
// tslint:disable-next-line:variable-name
exports.DEFAULT_Component_SET = new Set([
    'view',
    'scroll-view',
    'swiper',
    'movable-view',
    'cover-view',
    'cover-image',
    'icon',
    'text',
    'rich-text',
    'progress',
    'button',
    'checkbox',
    'form',
    'input',
    'label',
    'picker',
    'picker-view',
    'picker-view-column',
    'radio',
    'radio-group',
    'checkbox-group',
    'slider',
    'switch',
    'textarea',
    'navigator',
    'audio',
    'image',
    'video',
    'camera',
    'live-player',
    'live-pusher',
    'map',
    'canvas',
    'open-data',
    'web-view',
    'swiper-item',
    'movable-area',
    'movable-view',
    'functional-page-navigator',
    'ad',
    'block',
    'import',
    'official-account'
]);
exports.INTERNAL_SAFE_GET = 'internal_safe_get';
exports.TARO_PACKAGE_NAME = '@tarojs/taro';
exports.COMPONENTS_PACKAGE_NAME = '@tarojs/components';
exports.REDUX_PACKAGE_NAME = '@tarojs/redux';
exports.MOBX_PACKAGE_NAME = '@tarojs/mobx';
exports.MAP_CALL_ITERATOR = '__item';
exports.INTERNAL_INLINE_STYLE = 'internal_inline_style';
exports.INTERNAL_GET_ORIGNAL = 'internal_get_original';
exports.GEL_ELEMENT_BY_ID = 'getElementById';
exports.LOOP_STATE = '$loopState';
exports.LOOP_ORIGINAL = '$original';
exports.setLoopOriginal = (s) => exports.LOOP_ORIGINAL = s;
exports.LOOP_CALLEE = '$anonymousCallee_';
exports.SPECIAL_COMPONENT_PROPS = new Map();
exports.SPECIAL_COMPONENT_PROPS.set('Progress', new Set([
    'activeColor',
    'backgroundColor'
]));
exports.IMAGE_COMPONENTS = new Set([
    'Image',
    'CoverImage'
]);
exports.swanSpecialAttrs = {
    'ScrollView': ['scrollTop', 'scrollLeft', 'scrollIntoView'],
    'Input': ['value'],
    'Textarea': ['value'],
    'MovableView': ['x', 'y'],
    'Slider': ['value']
};
exports.ALIPAY_BUBBLE_EVENTS = new Set([
    'onTouchStart',
    'onTouchMove',
    'onTouchEnd',
    'onTouchCancel',
    'onClick',
    'onLongTap'
]);
exports.TRANSFORM_COMPONENT_PROPS = new Map();
exports.TRANSFORM_COMPONENT_PROPS.set("alipay" /* alipay */, {
    'Canvas': {
        'canvasId': 'id'
    }
});
exports.lessThanSignPlacehold = '__LESS_THAN_SIGN_PLACEHOLDER__';
//# sourceMappingURL=constant.js.map
