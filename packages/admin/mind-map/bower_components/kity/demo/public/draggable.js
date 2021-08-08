define( function ( require, exports, module ) {
    var Paper = require( 'graphic/paper' );

    var touchable = window.ontouchstart !== undefined;
    var DRAG_START_EVENT = touchable ? 'touchstart' : 'mousedown',
        DRAG_MOVE_EVENT = touchable ? 'touchmove' : 'mousemove',
        DRAG_END_EVENT = touchable ? 'touchend' : 'mouseup';

    return require( 'core/class' ).createClass( {
        drag: function ( opt ) {

            if ( this.dragEnabled ) {
                return;
            }

            var dragStart = opt && opt.start || this.dragStart,
                dragMove = opt && opt.move || this.dragMove,
                dragEnd = opt && opt.end || this.dragEnd,
                dragTarget = opt && opt.target || this.dragTarget || this,
                me = this;

            this.dragEnabled = true;
            this.dragTarget = dragTarget;

            function bindEvents( paper ) {

                var startPosition, lastPosition, dragging = false;

                var dragFn = function ( e ) {
                    if ( !dragging ) {
                        paper.off( DRAG_MOVE_EVENT, dragFn );
                    }

                    var currentPosition = e.getPosition();
                    var movement = {
                        x: currentPosition.x - startPosition.x,
                        y: currentPosition.y - startPosition.y
                    };
                    var delta = {
                        x: currentPosition.x - lastPosition.x,
                        y: currentPosition.y - lastPosition.y
                    };
                    var dragInfo = {
                        position: currentPosition,
                        movement: movement,
                        delta: delta
                    };
                    lastPosition = currentPosition;

                    if ( dragMove ) {
                        dragMove.call( me, dragInfo );
                    } else if ( me instanceof Paper ) {
                        // treate paper drag different
                        var view = me.getViewPort();
                        view.center.x -= movement.x;
                        view.center.y -= movement.y;
                        me.setViewPort( view );
                    } else {
                        me.translate( delta.x, delta.y );
                    }

                    dragTarget.trigger( 'dragmove', dragInfo );
                    e.stopPropagation();
                    e.preventDefault();
                };

                dragTarget.on( DRAG_START_EVENT, dragTarget._dragStartHandler = function ( e ) {
                    if ( e.originEvent.button ) {
                        return;
                    }
                    dragging = true;

                    var dragInfo = {
                        position: lastPosition = startPosition = e.getPosition()
                    };

                    if ( dragStart ) {
                        var cancel = dragStart.call( me, dragInfo ) === false;
                        if ( cancel ) {
                            return;
                        }
                    }

                    paper.on( DRAG_MOVE_EVENT, dragFn );

                    dragTarget.trigger( 'dragstart', dragInfo );

                    e.stopPropagation();
                    e.preventDefault();
                } );

                paper.on( DRAG_END_EVENT, dragTarget._dragEndHandler = function ( e ) {
                    if ( dragging ) {
                        dragging = false;
                        var dragInfo = {
                            position: e.getPosition()
                        };
                        if ( dragEnd ) {
                            dragEnd.call( me, dragInfo );
                        }

                        paper.off( DRAG_MOVE_EVENT, dragFn );
                        dragTarget.trigger( 'dragend', dragInfo );

                        e.stopPropagation();
                        e.preventDefault();
                    }
                } );
            }

            if ( me instanceof Paper ) {
                bindEvents( me );
            } else if ( me.getPaper() ) {
                bindEvents( me.getPaper() );
            } else {
                var listener = function ( e ) {
                    if ( e.target.getPaper() ) {
                        bindEvents( e.target.getPaper() );
                        me.off( 'add', listener );
                        me.off( 'treeadd', listener );
                    }
                }
                me.on( 'add treeadd', listener );
            }
            return this;
        }, // end of drag


        undrag: function () {
            var target = this.dragTarget;
            target.off( DRAG_START_EVENT, target._dragStartHandler );
            target.getPaper().off( DRAG_END_EVENT, target._dragEndHandler );
            delete target._dragStartHandler;
            delete target._dragEndHandler;
            this.dragEnabled = false;
            return this;
        }
    } );
} );