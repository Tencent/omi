define( function ( require, exports, module ) {

    var data = ( function ( origin ) {
        var ret = [],
            length = origin.length,
            i;
        var id = 1000;
        for ( i = 0; i < length; i++ ) {
            if ( +( origin[ i ][ 1 ] ) >= 0 ) {
                ret.push( {
                    id: id++,
                    seq: origin[ i ][ 0 ].split( '->' ),
                    length: +origin[ i ][ 1 ],
                    uv: +origin[ i ][ 2 ]
                } );
            }
        }
        return ret;
    } )( require( '../pathdiagram/data' ) );

    var length = data.length;
    var abs = Math.abs;

    function subseqIndex( seq, sub ) {
        var i = 0,
            j = 0,
            iLength = seq.length,
            jLength = sub.length,
            iPreserve = 0;
        while ( true ) {
            if ( seq[ i ] != sub[ j ] ) {
                i = ++iPreserve;
                j = 0;
                if ( i >= iLength ) {
                    return -1;
                }
                continue;
            }
            if ( seq[ i ] == sub[ j ] ) {
                i++;
                j++;
            }
            if ( j == jLength ) {
                return iPreserve;
            }
        }
    }

    return {
        random: function ( minUv ) {
            var keywords = [];
            for ( var i = 0; i < length; i++ ) {
                if ( data[ i ].length === 0 ) {
                    keywords.push( data[ i ] );
                }
            }
            minUv = minUv || 5000;
            var ret;
            while ( !ret || ret.uv < minUv ) {
                ret = keywords[ Math.floor( Math.random() * keywords.length ) ];
            }
            ret.word = ret.seq[0];
            return ret;
        },
        search: function( keyword ) {
            var result = [], ret;
            for ( var i = 0; i < length; i++ ) {
                if ( data[ i ].length === 0 && data[i].seq[0].indexOf(keyword) != -1 ) {
                    result.push( data[i] );
                }
            }
            if(!result.length) {
                return this.random();
            }
            result.sort(function(a, b) {
                return b.uv - a.uv;
            });
            ret = result[0];
            ret.word = ret.seq[0];
            return ret;
        },
        upstream: function ( path ) {
            var upstream = [];
            for ( var i = 0; i < length; i++ ) {
                if ( subseqIndex( data[ i ].seq, path.seq ) > 0 &&
                    data[ i ].length == path.length + 1 ) {
                    upstream.push( {
                        id: data[ i ].id,
                        seq: data[ i ].seq,
                        length: data[ i ].length,
                        uv: data[ i ].uv,
                        word: data[ i ].seq[ 0 ]
                    } );
                }
            }
            return upstream;
        },
        downstream: function ( path ) {
            var downstream = [];
            for ( var i = 0; i < length; i++ ) {
                if ( subseqIndex( data[ i ].seq, path.seq ) === 0 &&
                    data[ i ].length == path.length + 1 ) {
                    downstream.push( {
                        id: data[ i ].id,
                        seq: data[ i ].seq,
                        length: data[ i ].length,
                        uv: data[ i ].uv,
                        word: data[ i ].seq[ data[ i ].length - 1 ]
                    } );
                }
            }
            return downstream;
        }
    };
} );