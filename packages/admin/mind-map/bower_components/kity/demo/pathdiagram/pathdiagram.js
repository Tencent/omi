define( function ( require, exports, module ) {
    var Class = require( 'core/class' );
    var Query = require( '../pathdiagram/dataquery' );
    var Connection = require( '../graffle/bezierconnection' );
    var Group = require( 'graphic/group' );
    var Text = require( 'graphic/text' );
    var LevelContainer = require( '../pathdiagram/levelcontainer' );
    var colors = require( '../pathdiagram/colors' );

    var R_SIZE = LevelContainer.RECT_SIZE;

    var margin = 100;

    function sign( number ) {
        if ( number === 0 ) {
            return 0;
        }
        return number > 0 ? 1 : -1;
    }

    var PathDiagram = Class.createClass( {
        base: Group,
        constructor: function ( keyword ) {
            this.callBase();
            this.levels = [
                new LevelContainer( -2 ),
                new LevelContainer( -1 ),
                new LevelContainer( 0 ),
                new LevelContainer( 1 ),
                new LevelContainer( 2 )
            ];
            this.headLevel = 0;
            this.tailLevel = 0;
            this.render();
            this.bind();
            this.showKeyword(keyword);
        },
        render: function () {
            for ( var name in this.levels ) {
                this.addShape( this.levels[ name ] );
            }
            return this;
        },
        getLevelContainer: function ( level ) {
            return this.levels[ level + 2 ];
        },
        showKeyword: function (keyword) {
            this.currentPath = keyword ? Query.search(keyword) : Query.random();
            this.getLevelContainer(0).render( [ this.currentPath ], -R_SIZE.width / 2, 0 );
            setTimeout( function() {
                this.getLevelContainer(0).select(0);
            }.bind(this));
        },
        bind: function () {
            var levels = this.levels;
            this.on( 'selected', function ( e ) {
                if ( e.pathNode ) {
                    if ( e.level > 0 ) {
                        this.tailLevel = e.level;
                    }
                    if ( e.level < 0 ) {
                        this.headLevel = e.level;
                    }
                } else {
                    if (e.level > 0) {
                        this.tailLevel = e.level - 1;
                    }
                    else if (e.level < 0 ) {
                        this.headLevel = e.level + 1;
                    }
                }
                this.updateConnection(e.pathNode, e.lastPathNode);
                this.updateCurrentPath();
                this.updateLevels();
            } );
        },
        updateConnection: function( current, last ) {
            if(last && last.connection) {
                last.connection.stroke(colors.get('connect-stroke'), 1);
            }
            if(current && current.connection) {
                this.removeShape(current.connection).addShape(current.connection);
                current.connection.stroke(colors.get('connect-stroke-active'), 3);
            }
        },
        updateCurrentPath: function() {
            var data = {
                seq: [],
                length: 0
            };
            for(var level = this.headLevel; level <= this.tailLevel; level++) {
                data.seq.push(this.getLevelContainer(level).levelWord);
                data.length++;
            }
            this.currentPath = data;
        },
        updateLevels: function() {
            var headClear = this.headLevel,
                tailClear = this.tailLevel;
            while(headClear >= -2) {
                this.renderLevel(--headClear);
            }
            while(tailClear <= 2) {
                this.renderLevel(++tailClear);
            }
        },
        clearLevelContainer: function( container ) {
            var nodes = container.getPathNodes();
            for(var i = 0; i < nodes.length; i++) {
                nodes[i].connection.remove();
            }
            container.clear();
        },
        renderLevel: function ( level ) {
            var container = this.getLevelContainer( level );
            var parent, dir, pbox, nbox, x, y, stream;

            if ( !container ) {
                return;
            }

            if(level < this.headLevel || level > this.tailLevel) {
                this.clearLevelContainer(container);
                if(level < this.headLevel - 1 || level > this.tailLevel + 1) {
                    return;
                }
            }

            // 1 = right, -1 = left
            dir = sign( level );
            parent = this.getLevelContainer( level - dir );
            pbox = parent.getRenderBox();
            nbox = parent.getSelected().getRenderBox();
            x = pbox.x + dir * ( R_SIZE.width + margin );
            y = nbox.y;

            if ( level === 0 ) {
                stream = [ this.currentPath ];
            } else if ( level > 0 ) {
                stream = Query.downstream( this.currentPath );
            } else if ( level < 0 ) {
                stream = Query.upstream( this.currentPath );
            }

            container.render( stream, x, y );

            this.renderConnection( container, parent, dir );
        },
        renderConnection: function ( container, parent, dir ) {
            var childNodes = container.getPathNodes();
            var parentNode = parent.getSelected();
            var i, connection;
            for ( i = 0; i < childNodes.length; i++ ) {
                if ( dir === 1 ) {
                    connection = new Connection( parentNode, childNodes[ i ] );
                } else if ( dir === -1 ) {
                    connection = new Connection( childNodes[ i ], parentNode );
                }
                if(connection) {
                    this.addShape( childNodes[i].connection = connection );
                    connection.stroke( colors.get( 'connect-stroke' ), 1 ).fill( 'none' );
                }
            }
        }
    } );

    return PathDiagram;
} );