// Import styles
import '../scss/pickr.scss';

// Import utils
import * as _     from './utils/utils';
import * as Color from './utils/color';

// Import classes
import {HSVaColor} from './utils/hsvacolor';
import Moveable    from './libs/moveable';
import Selectable  from './libs/selectable';
import Nanopop     from './libs/nanopop';
import buildPickr  from './template';

class Pickr {

    // Will be used to prevent specific actions during initilization
    _initializingActive = true;

    // Replace element with color picker
    _recalc = true;

    // Current and last color for comparison
    _color = HSVaColor();
    _lastColor = HSVaColor();
    _swatchColors = [];

    // Evenlistener name: [callbacks]
    _eventListener = {
        'swatchselect': [],
        'change': [],
        'save': [],
        'init': []
    };

    constructor(opt) {

        // Assign default values
        this.options = opt = Object.assign({
            appClass: null,
            useAsButton: false,
            disabled: false,
            comparison: true,

            components: {
                interaction: {}
            },

            strings: {},
            swatches: null,
            inline: false,

            default: '#42445A',
            defaultRepresentation: null,
            position: 'bottom-middle',
            adjustableNumbers: true,
            showAlways: false,

            closeWithKey: 'Escape'
        }, opt);

        const {swatches, inline, components, position} = opt;

        // Check interaction section
        if (!components.interaction) {
            components.interaction = {};
        }

        // Overwrite palette if preview, opacity or hue are true
        const {preview, opacity, hue, palette} = components;
        components.palette = palette || preview || opacity || hue;

        // Per default enabled if inline
        if (inline) {
            opt.showAlways = true;
        }

        // Initialize picker
        this._preBuild();
        this._buildComponents();
        this._bindEvents();

        // Finalize build
        this._finalBuild();

        // Append pre-defined swatch colors
        if (swatches && swatches.length) {
            swatches.forEach(color => this.addSwatch(color));
        }

        // Initialize positioning engine
        this._nanopop = Nanopop({
            reference: this._root.button,
            el: this._root.app,
            pos: position
        });

        // Initilization is finish, pickr is visible and ready for usage
        const {button} = this._root;
        const that = this;
        requestAnimationFrame((function cb() {

            // offsetParent of body is always 0. So check if it is the body
            if (button.offsetParent === null && button !== document.body) {
                return requestAnimationFrame(cb);
            }

            // Apply default color
            that.setColor(opt.default);
            that._rePositioningPicker();

            // Initialize color representation
            if (opt.defaultRepresentation) {
                that._representation = opt.defaultRepresentation;
                that.setColorRepresentation(that._representation);
            }

            // Show pickr if locked
            if (opt.showAlways) {
                that.show();
            }

            // Initialization is done - pickr is usable, fire init event
            that._initializingActive = false;
            that._emit('init');
        }));
    }

    // Does only the absolutly basic thing to initialize the components
    _preBuild() {
        const opt = this.options;

        // Check if element is selector
        if (typeof opt.el === 'string') {

            // Resolve possible shadow dom access
            opt.el = opt.el.split(/>>/g).reduce((pv, cv, ci, a) => {
                pv = pv.querySelector(cv);
                return ci < a.length - 1 ? pv.shadowRoot : pv;
            }, document);
        }

        // Create element and append it to body to
        // prevent initialization errors
        this._root = buildPickr(opt);

        // Check if a custom button is used
        if (opt.useAsButton) {
            this._root.button = opt.el; // Replace button with customized button
        }

        document.body.appendChild(this._root.root);
    }

    _finalBuild() {
        const opt = this.options;
        const root = this._root;

        // Remove from body
        document.body.removeChild(root.root);

        if (opt.inline) {
            const {parentElement} = opt.el;

            if (parentElement.lastChild === opt.el) {
                parentElement.appendChild(root.app);
            } else {
                parentElement.insertBefore(root.app, opt.el.nextSibling);
            }
        } else {
            document.body.appendChild(root.app);
        }

        // Don't replace the the element if a custom button is used
        if (!opt.useAsButton) {

            // Replace element with actual color-picker
            opt.el.parentNode.replaceChild(root.root, opt.el);
        }

        // Call disable to also add the disabled class
        if (opt.disabled) {
            this.disable();
        }

        // Check if color comparison is disabled, if yes - remove transitions so everything keeps smoothly
        if (!opt.comparison) {
            root.button.style.transition = 'none';
            if (!opt.useAsButton) {
                root.preview.lastColor.style.transition = 'none';
            }
        }

        this.hide();
    }

    _buildComponents() {

        // Instance reference
        const inst = this;
        const comp = this.options.components;

        const components = {

            palette: Moveable({
                element: inst._root.palette.picker,
                wrapper: inst._root.palette.palette,

                onchange(x, y) {
                    if (!comp.palette) return;
                    const {_color, _root, options} = inst;

                    // Calculate saturation based on the position
                    _color.s = (x / this.wrapper.offsetWidth) * 100;

                    // Calculate the value
                    _color.v = 100 - (y / this.wrapper.offsetHeight) * 100;

                    // Prevent falling under zero
                    _color.v < 0 ? _color.v = 0 : 0;

                    // Set picker and gradient color
                    const cssRGBaString = _color.toRGBA().toString();
                    this.element.style.background = cssRGBaString;
                    this.wrapper.style.background = `
                        linear-gradient(to top, rgba(0, 0, 0, ${_color.a}), transparent),
                        linear-gradient(to left, hsla(${_color.h}, 100%, 50%, ${_color.a}), rgba(255, 255, 255, ${_color.a}))
                    `;

                    // Check if color is locked
                    if (!options.comparison) {
                        _root.button.style.color = cssRGBaString;

                        if (!options.useAsButton) {
                            _root.preview.lastColor.style.color = cssRGBaString;
                        }
                    }

                    // Change current color
                    _root.preview.currentColor.style.color = cssRGBaString;

                    // Update the input field only if the user is currently not typing
                    if (inst._recalc) {
                        inst._updateOutput();
                    }

                    // If the user changes the color, remove the cleared icon
                    _root.button.classList.remove('clear');
                }
            }),

            hue: Moveable({
                lockX: true,
                element: inst._root.hue.picker,
                wrapper: inst._root.hue.slider,

                onchange(x, y) {
                    if (!comp.hue || !comp.palette) return;

                    // Calculate hue
                    inst._color.h = (y / this.wrapper.offsetHeight) * 360;

                    // Update color
                    this.element.style.backgroundColor = `hsl(${inst._color.h}, 100%, 50%)`;
                    components.palette.trigger();
                }
            }),

            opacity: Moveable({
                lockX: true,
                element: inst._root.opacity.picker,
                wrapper: inst._root.opacity.slider,

                onchange(x, y) {
                    if (!comp.opacity || !comp.palette) return;

                    // Calculate opacity
                    inst._color.a = Math.round(((y / this.wrapper.offsetHeight)) * 1e2) / 100;

                    // Update color
                    this.element.style.background = `rgba(0, 0, 0, ${inst._color.a})`;
                    inst.components.palette.trigger();
                }
            }),

            selectable: Selectable({
                elements: inst._root.interaction.options,
                className: 'active',
                onchange(e) {
                    inst._representation = e.target.getAttribute('data-type').toUpperCase();
                    inst._updateOutput();
                }
            })
        };

        this.components = components;
    }

    _bindEvents() {
        const {_root, options} = this;

        const eventBindings = [

            // Clear color
            _.on(_root.interaction.clear, 'click', () => this._clearColor()),

            // Select last color on click
            _.on(_root.preview.lastColor, 'click', () => this.setHSVA(...this._lastColor.toHSVA())),

            // Save color
            _.on(_root.interaction.save, 'click', () => {
                !this.applyColor() && !options.showAlways && this.hide();
            }),

            // Detect user input and disable auto-recalculation
            _.on(_root.interaction.result, ['keyup', 'input'], e => {
                this._recalc = false;

                // Fire listener if initialization is finish and changed color was valid
                if (this.setColor(e.target.value, true) && !this._initializingActive) {
                    this._emit('change', this._color);
                }

                e.stopImmediatePropagation();
            }),

            // Cancel input detection on color change
            _.on([
                _root.palette.palette,
                _root.palette.picker,
                _root.hue.slider,
                _root.hue.picker,
                _root.opacity.slider,
                _root.opacity.picker
            ], ['mousedown', 'touchstart'], () => this._recalc = true)
        ];

        // Provide hiding / showing abilities only if showAlways is false
        if (!options.showAlways) {
            const ck = options.closeWithKey;

            eventBindings.push(
                // Save and hide / show picker
                _.on(_root.button, 'click', () => this.isOpen() ? this.hide() : this.show()),

                // Close with escape key
                _.on(document, 'keyup', e => this.isOpen() && (e.key === ck || e.code === ck) && this.hide()),

                // Cancel selecting if the user taps behind the color picker
                _.on(document, ['touchstart', 'mousedown'], e => {
                    if (this.isOpen() && !_.eventPath(e).some(el => el === _root.app || el === _root.button)) {
                        this.hide();
                    }
                }, {capture: true})
            );
        }

        // Make input adjustable if enabled
        if (options.adjustableNumbers) {
            _.adjustableInputNumbers(_root.interaction.result, false);
        }

        if (!options.inline) {
            let timeout = null;
            const that = this;

            // Re-calc position on window resize, scroll and wheel
            eventBindings.push(
                _.on(window, ['scroll', 'resize'], () => {
                    if (that.isOpen()) {
                        if (timeout === null) {
                            timeout = setTimeout(() => timeout = null, 100);

                            // Update position on every frame
                            requestAnimationFrame(function rs() {
                                that._rePositioningPicker();
                                (timeout !== null) && requestAnimationFrame(rs);
                            });
                        } else {
                            clearTimeout(timeout);
                            timeout = setTimeout(() => timeout = null, 100);
                        }
                    }
                })
            );
        }

        // Save bindings
        this._eventBindings = eventBindings;
    }

    _rePositioningPicker() {

        // No repositioning needed if inline
        if (!this.options.inline) {
            this._nanopop.update();
        }
    }

    _updateOutput() {

        // Check if component is present
        if (this._root.interaction.type()) {

            // Construct function name and call if present
            const method = `to${this._root.interaction.type().getAttribute('data-type')}`;
            this._root.interaction.result.value = typeof this._color[method] === 'function' ? this._color[method]().toString() : '';
        }

        // Fire listener if initialization is finish
        if (!this._initializingActive) {
            this._emit('change', this._color);
        }
    }

    _clearColor() {
        const {_root, options} = this;

        // Change only the button color if it isn't customized
        if (!options.useAsButton) {
            _root.button.style.color = 'rgba(0, 0, 0, 0.15)';
        }

        _root.button.classList.add('clear');

        if (!options.showAlways) {
            this.hide();
        }

        if (!this._initializingActive) {

            // Fire listener
            this._emit('save', null);
        }
    }

    _emit(event, ...args) {
        this._eventListener[event].forEach(cb => cb(...args, this));
    }

    on(event, cb) {

        // Validate
        if (typeof cb === 'function' && typeof event === 'string' && event in this._eventListener) {
            this._eventListener[event].push(cb);
        }

        return this;
    }

    off(event, cb) {
        const callBacks = this._eventListener[event];

        if (callBacks) {
            const index = callBacks.indexOf(cb);

            if (~index) {
                callBacks.splice(index, 1);
            }
        }

        return this;
    }

    /**
     * Appends a color to the swatch palette
     * @param color
     * @returns {boolean}
     */
    addSwatch(color) {
        const {values} = Color.parseToHSV(color);

        if (values) {
            const {_swatchColors, _root} = this;
            const hsvaColorObject = HSVaColor(...values);

            // Create new swatch HTMLElement
            const element = _.createElementFromString(
                `<button type="button" style="color: ${hsvaColorObject.toRGBA()}"></button>`
            );

            // Append element and save swatch data
            _root.swatches.appendChild(element);
            _swatchColors.push({element, hsvaColorObject});

            // Bind event
            this._eventBindings.push(
                _.on(element, 'click', () => {
                    this.setHSVA(...hsvaColorObject.toHSVA(), true);
                    this._emit('swatchselect', hsvaColorObject);
                })
            );

            return true;
        }

        return false;
    }

    /**
     * Removes a swatch color by it's index
     * @param index
     * @returns {boolean}
     */
    removeSwatch(index) {

        // Validate index
        if (typeof index === 'number') {
            const swatchColor = this._swatchColors[index];

            // Check swatch data
            if (swatchColor) {
                const {element} = swatchColor;

                // Remove HTML child and swatch data
                this._root.swatches.removeChild(element);
                this._swatchColors.splice(index, 1);
                return true;
            }
        }

        return false;
    }

    applyColor(silent = false) {
        const {preview, button} = this._root;

        // Change preview and current color
        const cssRGBaString = this._color.toRGBA().toString();
        preview.lastColor.style.color = cssRGBaString;

        // Change only the button color if it isn't customized
        if (!this.options.useAsButton) {
            button.style.color = cssRGBaString;
        }

        // User changed the color so remove the clear clas
        button.classList.remove('clear');

        // Save last color
        this._lastColor = this._color.clone();

        // Fire listener
        if (!this._initializingActive && !silent) {
            this._emit('save', this._color);
        }
    }

    /**
     * Destroy's all functionalitys
     */
    destroy() {
        this._eventBindings.forEach(args => _.off(...args));
        Object.keys(this.components).forEach(key => this.components[key].destroy());
    }

    /**
     * Destroy's all functionalitys and removes
     * the pickr element.
     */
    destroyAndRemove() {
        this.destroy();

        // Remove element
        const root = this._root.root;
        root.parentElement.removeChild(root);

        // remove .pcr-app
        const app = this._root.app;
        app.parentElement.removeChild(app);

        // There are references to various DOM elements stored in the pickr instance
        // This cleans all of them to avoid detached DOMs
        const pickr = this;
        Object.keys(pickr).forEach(key => pickr[key] = null);
    }

    /**
     * Hides the color-picker ui.
     */
    hide() {
        this._root.app.classList.remove('visible');
        return this;
    }

    /**
     * Shows the color-picker ui.
     */
    show() {
        if (this.options.disabled) return;
        this._root.app.classList.add('visible');
        this._rePositioningPicker();
        return this;
    }

    /**
     * @return {boolean} If the color picker is currently open
     */
    isOpen() {
        return this._root.app.classList.contains('visible');
    }

    /**
     * Set a specific color.
     * @param h Hue
     * @param s Saturation
     * @param v Value
     * @param a Alpha channel (0 - 1)
     * @param silent If the button should not change the color
     * @return boolean if the color has been accepted
     */
    setHSVA(h = 360, s = 0, v = 0, a = 1, silent = false) {

        // Deactivate color calculation
        const recalc = this._recalc; // Save state
        this._recalc = false;

        // Validate input
        if (h < 0 || h > 360 || s < 0 || s > 100 || v < 0 || v > 100 || a < 0 || a > 1) {
            return false;
        }

        // Override current color and re-active color calculation
        this._color = HSVaColor(h, s, v, a);

        // Short names
        const {hue, opacity, palette} = this.components;

        // Calculate y position of hue slider
        const hueWrapper = hue.options.wrapper;
        const hueY = hueWrapper.offsetHeight * (h / 360);
        hue.update(0, hueY);

        // Calculate y position of opacity slider
        const opacityWrapper = opacity.options.wrapper;
        const opacityY = opacityWrapper.offsetHeight * a;
        opacity.update(0, opacityY);

        // Calculate y and x position of color palette
        const pickerWrapper = palette.options.wrapper;
        const pickerX = pickerWrapper.offsetWidth * (s / 100);
        const pickerY = pickerWrapper.offsetHeight * (1 - (v / 100));
        palette.update(pickerX, pickerY);

        // Restore old state
        this._recalc = recalc;

        // Update output if recalculation is enabled
        if (this._recalc) {
            this._updateOutput();
        }

        // Check if call is silent
        if (!silent) {
            this.applyColor();
        }

        return true;
    }

    /**
     * Tries to parse a string which represents a color.
     * Examples: #fff
     *           rgb 10 10 200
     *           hsva 10 20 5 0.5
     * @param string
     * @param silent
     */
    setColor(string, silent = false) {

        // Check if null
        if (string === null) {
            this._clearColor();
            return true;
        }

        const {values, type} = Color.parseToHSV(string);

        // Check if color is ok
        if (values) {

            // Change selected color format
            const utype = type.toUpperCase();
            const {options} = this._root.interaction;
            const target = options.find(el => el.getAttribute('data-type').startsWith(utype));

            // Auto select only if not hidden
            if (target && !target.hidden) {
                for (const el of options) {
                    el.classList[el === target ? 'add' : 'remove']('active');
                }
            }

            return this.setHSVA(...values, silent);
        }
    }

    /**
     * Changes the color _representation.
     * Allowed values are HEX, RGB, HSV, HSL and CMYK
     * @param type
     * @returns {boolean} if the selected type was valid.
     */
    setColorRepresentation(type) {

        // Force uppercase to allow a case-sensitiv comparison
        type = type.toUpperCase();

        // Find button with given type and trigger click event
        return !!this._root.interaction.options.find(v => v.getAttribute('data-type').startsWith(type) && !v.click());
    }

    /**
     * Returns the current color representaion. See setColorRepresentation
     * @returns {*}
     */
    getColorRepresentation() {
        return this._representation;
    }

    /**
     * @returns HSVaColor Current HSVaColor object.
     */
    getColor() {
        return this._color;
    }

    /**
     * @returns The root HTMLElement with all his components.
     */
    getRoot() {
        return this._root;
    }

    /**
     * Disable pickr
     */
    disable() {
        this.hide();
        this.options.disabled = true;
        this._root.button.classList.add('disabled');
        return this;
    }

    /**
     * Enable pickr
     */
    enable() {
        this.options.disabled = false;
        this._root.button.classList.remove('disabled');
        return this;
    }
}

// Expose pickr utils
Pickr.utils = _;

// Create instance via method
Pickr.create = options => new Pickr(options);

// Assign version and export
Pickr.version = '0.6.2';
export default Pickr;
