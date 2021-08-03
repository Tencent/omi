/* global kity: true */
/* global window: true */

var Vector = kity.Vector;
var ForceChart = kity.createClass( "ForceChart", {
    base: kity.Group,
    constructor: function ( nodes, links ) {
        this.callBase();
        this.nodes = nodes;
        this.links = links;
    },
    start: function () {
        var nodes = this.nodes;
        var links = this.links;
        var color = kity.Color.createHSL( 0, 100, 50 );

        for ( var i = 0; i < links.length; i++ ) {
            var link = links[ i ];
            var sourceNode = nodes[ link.source ];
            var targetNode = nodes[ link.target ];
            var sdf = sourceNode.distanceInfo = sourceNode.distanceInfo || {};
            var tdf = targetNode.distanceInfo = targetNode.distanceInfo || {};
            sdf[ link.target ] = {
                node: targetNode,
                distance: link.distance
            };
            tdf[ link.source ] = {
                node: sourceNode,
                distance: link.distance
            };
            var line = new kity.Path().stroke( '#AAA' );
            line.source = sourceNode;
            line.target = targetNode;
            this.addShape( link.shape = line );
        }

        for ( var id in nodes ) {
            var node = nodes[ id ];
            this.addShape( node.shape = new kity.Circle( 10 ).fill( color = color.inc( 'h', 360 / 6 ) ) );
            node.s = new Vector( 100 + Math.random() * 600, 100 + Math.random() * 400 );
            node.a = new Vector();
            node.v = new Vector();
            node.shape.chartNode = node;
        }
        this.frame = kity.Timeline.requestFrame( this.tick.bind( this ) );
    },
    tick: function ( frame ) {
        var k = 20,
            dt = frame.dur / 1000,
            name,
            node,
            distanceInfo,
            din,
            di,
            dir,
            d;
        for ( name in this.nodes ) {
            node = this.nodes[ name ];
            node.a = new kity.Vector();
            distanceInfo = node.distanceInfo;
            for ( din in distanceInfo ) {
                di = distanceInfo[ din ];
                dir = Vector.fromPoints( node.s, di.node.s );
                d = dir.length() - di.distance;
                node.a = node.a.add( dir.normalize( k * d ) );
            }
        }
        for ( name in this.nodes ) {
            node = this.nodes[ name ];
            node.v = node.v.add( node.a.multipy( dt ) );
            node.v = node.v.multipy( 0.9 );
            if ( !node.locked ) {
                node.s = node.s.add( node.v.multipy( dt ) );
            }
            node.shape.setTranslate( node.s );
        }
        for ( var i = 0; i < this.links.length; i++ ) {
            var line = this.links[ i ].shape;
            var src = line.source.s,
                tgt = line.target.s;
            line.setPathData( [ 'M', src.x, src.y, 'L', tgt.x, tgt.y ] );
        }
        frame.next();
    }
} );

var data = {
    "nodes": {
        "A": {},
        "B": {},
        "C": {},
        "D": {},
        "E": {},
        "F": {}
    },

    "links": [ {
        "source": "A",
        "target": "B",
        "distance": 200
    }, {
        "source": "A",
        "target": "C",
        "distance": 200
    }, {
        "source": "A",
        "target": "D",
        "distance": 200
    }, {
        "source": "A",
        "target": "E",
        "distance": 200
    }, {
        "source": "A",
        "target": "F",
        "distance": 200
    }, {
        "source": "B",
        "target": "C",
        "distance": 200
    }, {
        "source": "B",
        "target": "D",
        "distance": 200
    }, {
        "source": "B",
        "target": "E",
        "distance": 200
    }, {
        "source": "B",
        "target": "F",
        "distance": 200
    }, {
        "source": "C",
        "target": "D",
        "distance": 200
    }, {
        "source": "C",
        "target": "E",
        "distance": 200
    }, {
        "source": "C",
        "target": "F",
        "distance": 200
    },{
        "source": "D",
        "target": "E",
        "distance": 200
    }, {
        "source": "D",
        "target": "F",
        "distance": 200
    }, {
        "source": "E",
        "target": "F",
        "distance": 200
    } ]
};

var paper = new kity.Paper( window.document.body );
var fc = new ForceChart( data.nodes, data.links );
paper.addShape( fc );
fc.start();

var dragTarget = null;
fc.on( 'mousedown', function ( e ) {
    if ( e.targetShape.chartNode ) {
        dragTarget = e.targetShape.chartNode;
        dragTarget.locked = true;
    }
} );
paper.on( 'mousemove', function ( e ) {
    if ( dragTarget ) {
        dragTarget.s = e.getPosition().asVector();
    }
} );
paper.on( 'mouseup', function ( e ) {
    if ( dragTarget ) {
        dragTarget.locked = false;
        dragTarget = null;
    }
} );