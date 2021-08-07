define( function ( require, exports, module ) {
    var Palette = require( 'graphic/palette' );

    var colors = new Palette();

    colors.add( 'node-stroke', '#ccc' );
    colors.add( 'node-stroke-active', 'hsl(200, 60, 40)' );
    colors.add( 'node-fill', 'white' );
    colors.add( 'node-fill-active', 'hsl(200, 50, 80)' );
    colors.add( 'text', 'black' );
    colors.add( 'text-uv', 'green' );
    colors.add( 'connect-stroke', '#999' );
    colors.add( 'connect-stroke-active', 'hsl(200, 60, 40)' );

    return colors;
} );