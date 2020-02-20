const wxComponentMap = {
    // 视图容器
    'cover-image': {
        wxCompName: 'cover-image',
        config: require('../component/cover-image'),
    },
    'cover-view': {
        wxCompName: 'cover-view',
        config: require('../component/cover-view'),
    },
    'movable-area': {
        wxCompName: 'movable-area',
        config: require('../component/movable-area'),
    },
    'scroll-view': {
        wxCompName: 'scroll-view',
        config: require('../component/scroll-view'),
    },
    swiper: {
        wxCompName: 'swiper',
        config: require('../component/swiper'),
    },
    view: {
        wxCompName: 'view',
        config: require('../component/view'),
    },
    // 基础内容
    icon: {
        wxCompName: 'icon',
        config: require('../component/icon'),
    },
    progress: {
        wxCompName: 'progress',
        config: require('../component/progress'),
    },
    text: {
        wxCompName: 'text',
        config: require('../component/text'),
    },
    // 表单组件
    button: {
        wxCompName: 'button',
        config: require('../component/button'),
    },
    editor: {
        wxCompName: 'editor',
        config: require('../component/editor'),
    },
    form: {
        wxCompName: 'form',
        config: require('../component/form'),
    },
    INPUT: {
        wxCompName: 'input',
        config: require('../component/input'),
    },
    picker: {
        wxCompName: 'picker',
        config: require('../component/picker'),
    },
    'picker-view': {
        wxCompName: 'picker-view',
        config: require('../component/picker-view'),
    },
    slider: {
        wxCompName: 'slider',
        config: require('../component/slider'),
    },
    switch: {
        wxCompName: 'switch',
        config: require('../component/switch'),
    },
    TEXTAREA: {
        wxCompName: 'textarea',
        config: require('../component/textarea'),
    },
    // 导航
    navigator: {
        wxCompName: 'navigator',
        config: require('../component/navigator'),
    },
    // 媒体组件
    camera: {
        wxCompName: 'camera',
        config: require('../component/camera'),
    },
    image: {
        wxCompName: 'image',
        config: require('../component/image'),
    },
    'live-player': {
        wxCompName: 'live-player',
        config: require('../component/live-player'),
    },
    'live-pusher': {
        wxCompName: 'live-pusher',
        config: require('../component/live-pusher'),
    },
    VIDEO: {
        wxCompName: 'video',
        config: require('../component/video'),
    },
    // 地图
    map: {
        wxCompName: 'map',
        config: require('../component/map'),
    },
    // 画布
    CANVAS: {
        wxCompName: 'canvas',
        config: require('../component/canvas'),
    },
    // 开放能力
    ad: {
        wxCompName: 'ad',
        config: require('../component/ad'),
    },
    'official-account': {
        wxCompName: 'official-account',
        config: require('../component/official-account'),
    },
    'open-data': {
        wxCompName: 'open-data',
        config: require('../component/open-data'),
    },
    'web-view': {
        wxCompName: 'web-view',
        config: require('../component/web-view'),
    },
}

const wxSubComponentMap = {
    'movable-view': require('../component/movable-view'),
    'swiper-item': require('../component/swiper-item'),
    'picker-view-column': require('../component/picker-view-column'),
}

const wxComponentKeys = Object.keys(wxComponentMap)
const wxCompNameMap = {}
const properties = {}
const handles = {}
wxComponentKeys.forEach(key => {
    const {wxCompName, config} = wxComponentMap[key]

    wxCompNameMap[key] = wxCompName
    properties[wxCompName] = config.properties
    Object.assign(handles, config.handles)
})
Object.keys(wxSubComponentMap).forEach(key => {
    const config = wxSubComponentMap[key]
    Object.assign(handles, config.handles)
})

module.exports = {
    wxCompNameMap,
    properties,
    handles,
    wxSubComponentMap,
}
