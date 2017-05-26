import List from './list.js';

let list = new List( {
    title: '标签',
    list: ['文艺', '博客', '摄影', '电影', '民谣', '旅行', '吉他']
});

Omi.render(list,'#test');