/**
 * Micro positioning-engine
 * @param el
 * @param reference
 * @param pos
 * @param padding
 * @returns {{update(): void}}
 * @constructor
 */
export default function Nanopop({el, reference, pos, padding = 8}) {
    const vBehaviour = {start: 'sme', middle: 'mse', end: 'ems'};
    const hBehaviour = {top: 'tb', right: 'rl', bottom: 'bt', left: 'lr'};
    const [position, variant = 'middle'] = pos.split('-');
    const isVertical = (position === 'top' || position === 'bottom');

    return {
        update() {
            const rb = reference.getBoundingClientRect();
            const eb = el.getBoundingClientRect();

            const positions = isVertical ? {
                t: rb.top - eb.height - padding,
                b: rb.bottom + padding
            } : {
                r: rb.right + padding,
                l: rb.left - eb.width - padding
            };

            const variants = isVertical ? {
                s: rb.left + rb.width - eb.width,
                m: (-eb.width / 2) + (rb.left + rb.width / 2),
                e: rb.left
            } : {
                s: rb.bottom - eb.height,
                m: rb.bottom - rb.height / 2 - eb.height / 2,
                e: rb.bottom - rb.height
            };

            function apply(bevs, vars, styleprop) {
                const vertical = styleprop === 'top';
                const adder = vertical ? eb.height : eb.width;
                const win = window[vertical ? 'innerHeight' : 'innerWidth'];

                for (const ch of bevs) {
                    const v = vars[ch];
                    if (v > 0 && (v + adder) < win) {
                        el.style[styleprop] = `${v}px`;
                        break;
                    }
                }
            }

            apply(vBehaviour[variant], variants, isVertical ? 'left' : 'top');
            apply(hBehaviour[position], positions, isVertical ? 'top' : 'left');
        }
    };
}
