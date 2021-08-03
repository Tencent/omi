/* global kity: true */
var Coordinate = kity.createClass( "Coordinate", {
    base: kity.Group,

    constructor: function ( baseColor, gridX, gridY, gridSize ) {
        this.callBase();
        baseColor = kity.Color.parse( baseColor || 'black' );
        gridX = gridX || [ -10, 10 ];
        gridY = gridY || [ -10, 10 ];
        gridSize = gridSize || 10;

        var alisX, alisY, grid, marker;

        marker = new kity.Marker().pipe( function () {
            this.setWidth( 6 ).setHeight( 6 );
            this.setRef( 3, 0 );
            this.setViewBox( 0, -5, 10, 10 );
            this.addShape( new kity.Path().pipe( function () {
                var d = this.getDrawer();
                d.moveTo( 0, -5 );
                d.lineTo( 10, 0 );
                d.lineTo( 0, 5 );
                d.lineTo( 0, -5);
                d.close();
                this.fill( baseColor );
            } ) );
        } );

        alisX = new kity.Path().pipe( function () {
            var d = this.getDrawer();
            d.moveTo( gridX[ 0 ] * gridSize, 0 );
            d.lineTo( gridX[ 1 ] * gridSize, 0 );
            this.stroke( baseColor );
            this.whenPaperReady( function ( paper ) {
                paper.addResource( marker );
                this.setMarker( marker, 'end' );
            } );
        } );

        alisY = new kity.Path().pipe( function () {
            var d = this.getDrawer();
            d.moveTo( 0, gridY[ 0 ] * gridSize );
            d.lineTo( 0, gridY[ 1 ] * gridSize );
            this.stroke( baseColor );
            this.whenPaperReady( function ( paper ) {
                paper.addResource( marker );
                this.setMarker( marker, 'end' );
            } );
        } );

        grid = new kity.Path().pipe( function () {
            var ix, iy, d;
            d = this.getDrawer();
            for ( ix = gridX[ 0 ]; ix <= gridX[ 1 ]; ix++ ) {
                d.moveTo( ix * gridSize, gridY[ 0 ] * gridSize );
                d.lineTo( ix * gridSize, gridY[ 1 ] * gridSize );
            }
            for ( iy = gridY[ 0 ]; iy <= gridY[ 1 ]; iy++ ) {
                d.moveTo( gridX[ 0 ] * gridSize, iy * gridSize );
                d.lineTo( gridX[ 1 ] * gridSize, iy * gridSize );
            }
            this.stroke( baseColor );
            this.setOpacity( 0.1 );
        } );

        this.addShapes( [ grid, alisX, alisY ] );
    }
} );