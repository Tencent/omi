define( function ( require, exports, module ) {
    var Group = require( 'graphic/group' );
    var Connection = require( '../graffle/bezierconnection' );
    var Query = require( '../pathdiagram/dataquery' );
    var Rect = require( 'graphic/rect' );
    var Text = require( 'graphic/text' );
    var TextSpan = require( 'graphic/textspan' );
    var PathNode = require( '../pathdiagram/pathnode' );
    var colors = require( '../pathdiagram/colors' );

    var rHeight = 25;
    var rWidth = 250;
    var rMargin = 10;
    var lMargin = 100;

    var LevelContainer = require( 'core/class' ).createClass( 'LevelContainer', {
        base: Group,
        constructor: function ( level ) {
            this.callBase();
            this.level = level;
        },
        getPathNodes: function() {
            return this.getItems();
        },
        render: function( stream, x, yMiddle ) {
            this.clear();
            if(!stream) {
                return;
            }

            var yStart, i, y, node, data, text, pBox;

            yStart = yMiddle - ( rHeight + rMargin ) * (stream.length - 1) / 2;

            for(i = 0, y = yStart; i < stream.length; i++, y += rHeight + rMargin) {
                data = stream[ i ];
                node = new PathNode( x, y, rWidth, rHeight, data, this.level === 0 );
                this.addShape( node );
                node.on('click', this.onNodeClick.bind(this));
            }
        },
        onNodeClick: function( e ) {
            var node = e.targetShape;
            while( false === (node instanceof PathNode)) {
                node = node.container;
            }
            if( this.selected != node ) {
                this.select(node);
            } else {
                this.select(null);
            }
        },
        select: function(node) {
            if(this.level === 0 && node === null) {
                return;
            }
            if(typeof(node) === 'number') {
                node = this.getItem(node);
            }
            var last = this.selected;
            if(this.selected) {
                this.selected.unselect();
            }
            this.selected = node;
            if(node) {
                node.select();
                this.levelWord = node.data.word;
            }
            this.trigger('selected', {
                level: this.level,
                levelContainer: this,
                pathNode: node,
                lastPathNode: last
            });
        },
        getSelected: function() {
            return this.selected;
        }
    } );
    LevelContainer.RECT_SIZE = {
        width: rWidth,
        height: rHeight
    };
    return LevelContainer;
} );