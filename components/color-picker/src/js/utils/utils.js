/**
 * Add event(s) to element(s).
 * @param elements DOM-Elements
 * @param events Event names
 * @param fn Callback
 * @param options Optional options
 * @return Array passed arguments
 */
export const on = eventListener.bind(null, 'addEventListener');

/**
 * Remove event(s) from element(s).
 * @param elements DOM-Elements
 * @param events Event names
 * @param fn Callback
 * @param options Optional options
 * @return Array passed arguments
 */
export const off = eventListener.bind(null, 'removeEventListener');

function eventListener(method, elements, events, fn, options = {}) {

    // Normalize array
    if (elements instanceof HTMLCollection || elements instanceof NodeList) {
        elements = Array.from(elements);
    } else if (!Array.isArray(elements)) {
        elements = [elements];
    }

    if (!Array.isArray(events)) {
        events = [events];
    }

    for (const el of elements) {
        for (const ev of events) {
            el[method](ev, fn, {capture: false, ...options});
        }
    }

    return Array.prototype.slice.call(arguments, 1);
}

/**
 * Creates an DOM-Element out of a string (Single element).
 * @param html HTML representing a single element
 * @returns {Element | null} The element.
 */
export function createElementFromString(html) {
    const div = document.createElement('div');
    div.innerHTML = html.trim();
    return div.firstElementChild;
}

/**
 * Removes an attribute from a HTMLElement and returns the value.
 * @param el
 * @param name
 * @return {string}
 */
export function removeAttribute(el, name) {
    const value = el.getAttribute(name);
    el.removeAttribute(name);
    return value;
}

/**
 * Creates a new html element, every element which has
 * a 'data-key' attribute will be saved in a object (which will be returned)
 * where the value of 'data-key' ist the object-key and the value the HTMLElement.
 *
 * It's possible to create a hierarchy if you add a 'data-con' attribute. Every
 * sibling will be added to the object which will get the name from the 'data-con' attribute.
 *
 * If you want to create an Array out of multiple elements, you can use the 'data-arr' attribute,
 * the value defines the key and all elements, which has the same parent and the same 'data-arr' attribute,
 * would be added to it.
 *
 * @param str - The HTML String.
 */
export function createFromTemplate(str) {

    // Recursive function to resolve template
    function resolve(element, base = {}) {

        // Check key and container attribute
        const con = removeAttribute(element, 'data-con');
        const key = removeAttribute(element, 'data-key');

        // Check and save element
        if (key) {
            base[key] = element;
        }

        // Check all children
        const subtree = con ? (base[con] = {}) : base;
        for (let child of Array.from(element.children)) {

            // Check if element should be saved as array
            const arr = removeAttribute(child, 'data-arr');
            if (arr) {

                // Check if there is already an array and add element
                (subtree[arr] || (subtree[arr] = [])).push(child);
            } else {
                resolve(child, subtree);
            }
        }

        return base;
    }

    return resolve(createElementFromString(str));
}

/**
 * Polyfill for safari & firefox for the eventPath event property.
 * @param evt The event object.
 * @return [String] event path.
 */
export function eventPath(evt) {
    let path = evt.path || (evt.composedPath && evt.composedPath());
    if (path) return path;

    let el = evt.target.parentElement;
    path = [evt.target, el];
    while (el = el.parentElement) path.push(el);

    path.push(document, window);
    return path;
}

/**
 * Creates the ability to change numbers in an input field with the scroll-wheel.
 * @param el
 * @param negative
 */
export function adjustableInputNumbers(el, negative = true) {

    // Check if a char represents a number
    const isNumChar = c => (c >= '0' && c <= '9') || c === '-' || c === '.';

    function handleScroll(e) {
        const val = el.value;
        const off = el.selectionStart;
        let numStart = off;
        let num = ''; // Will be the number as string

        // Look back
        for (let i = off - 1; i > 0 && isNumChar(val[i]); i--) {
            num = val[i] + num;
            numStart--; // Find start of number
        }

        // Look forward
        for (let i = off, n = val.length; i < n && isNumChar(val[i]); i++) {
            num += val[i];
        }

        // Check if number is valid
        if (num.length > 0 && !isNaN(num) && isFinite(num)) {

            const mul = e.deltaY < 0 ? 1 : -1;
            const inc = ([1, 10, 100])[Number(e.shiftKey || e.ctrlKey * 2)] * mul;
            let newNum = Number(num) + inc;

            if (!negative && newNum < 0) {
                newNum = 0;
            }

            const newStr = val.substr(0, numStart) + newNum + val.substring(numStart + num.length, val.length);
            const curPos = numStart + String(newNum).length;

            // Update value and set cursor
            el.value = newStr;
            el.focus();
            el.setSelectionRange(curPos, curPos);
        }

        // Prevent default
        e.preventDefault();

        // Trigger input event
        el.dispatchEvent(new Event('input'));
    }

    // Bind events
    on(el, 'focus', () => on(window, 'wheel', handleScroll, {passive: false}));
    on(el, 'blur', () => off(window, 'wheel', handleScroll));
}
