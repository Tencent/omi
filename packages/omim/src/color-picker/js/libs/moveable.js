import * as _ from '../utils/utils';

export default function Moveable(opt) {

    const that = {

        // Assign default values
        options: Object.assign({
            lockX: false,
            lockY: false,
            onchange: () => 0
        }, opt),

        _tapstart(evt) {
            _.on(document, ['mouseup', 'touchend', 'touchcancel'], that._tapstop);
            _.on(document, ['mousemove', 'touchmove'], that._tapmove);

            // Prevent default touch event
            evt.preventDefault();

            // Trigger
            that._tapmove(evt);
        },

        _tapmove(evt) {
            const {options, cache} = that;
            const {element} = options;
            const b = that.options.wrapper.getBoundingClientRect();

            let x = 0, y = 0;
            if (evt) {
                const touch = evt && evt.touches && evt.touches[0];
                x = evt ? (touch || evt).clientX : 0;
                y = evt ? (touch || evt).clientY : 0;

                // Reset to bounds
                if (x < b.left) x = b.left;
                else if (x > b.left + b.width) x = b.left + b.width;
                if (y < b.top) y = b.top;
                else if (y > b.top + b.height) y = b.top + b.height;

                // Normalize
                x -= b.left;
                y -= b.top;
            } else if (cache) {
                x = cache.x * b.width;
                y = cache.y * b.height;
            }

            if (!options.lockX) {
                element.style.left = `calc(${x / b.width * 100}% - ${element.offsetWidth / 2}px)`;
            }

            if (!options.lockY) {
                element.style.top = `calc(${y / b.height * 100}% - ${element.offsetWidth / 2}px)`;
            }

            that.cache = {x: x / b.width, y: y / b.height};
            options.onchange(x, y);
        },

        _tapstop() {
            _.off(document, ['mouseup', 'touchend', 'touchcancel'], that._tapstop);
            _.off(document, ['mousemove', 'touchmove'], that._tapmove);
        },

        trigger() {
            that._tapmove();
        },

        update(x = 0, y = 0) {
            const wrapperRect = that.options.wrapper.getBoundingClientRect();
            that._tapmove({
                clientX: wrapperRect.left + x,
                clientY: wrapperRect.top + y
            });
        },

        destroy() {
            const {options, _tapstart} = that;
            _.off([options.wrapper, options.element], 'mousedown', _tapstart);
            _.off([options.wrapper, options.element], 'touchstart', _tapstart, {
                passive: false
            });
        }
    };

    // Initilize
    const {options, _tapstart} = that;
    _.on([options.wrapper, options.element], 'mousedown', _tapstart);
    _.on([options.wrapper, options.element], 'touchstart', _tapstart, {
        passive: false
    });

    return that;
}
