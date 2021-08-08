define(function(require, exports, module) {
    var doc = document;
    var id = 0;
    var svg = {
        createNode: function(name) {
            var node = doc.createElementNS(svg.ns, name);
            node.id = 'kity_' + name + '_' + id++;
            return node;
        },
        defaults: {
            stroke: 'none',
            fill: 'none'
        },
        xlink: 'http://www.w3.org/1999/xlink',
        ns: 'http://www.w3.org/2000/svg'
    };
    return svg;
});