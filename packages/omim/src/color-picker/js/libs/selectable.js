import * as _ from '../utils/utils';

export default function Selectable(opt = {}) {
    opt = Object.assign({
        onchange: () => 0,
        className: '',
        elements: []
    }, opt);

    const onTap = _.on(opt.elements, 'click', evt => {
        opt.elements.forEach(e =>
            e.classList[evt.target === e ? 'add' : 'remove'](opt.className)
        );

        opt.onchange(evt);
    });

    return {
        destroy: () => _.off(...onTap)
    };
}
