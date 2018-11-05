import React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';

/**
 * Cell consist of `CellBody`, `CellHeader` and `CellFooter` for flexible reason
 *
 */
const Cell = (props) => {
    const { className, children, access, href, link, component, htmlFor, ...others } = props;
    const DefaultComponent = href ? 'a' : htmlFor ? 'label' : 'div';
    var CellComponent = component ? component : DefaultComponent;

    const cls = classNames({
        'weui-cell': true,
        'weui-cell_access': access,
        'weui-cell_link': link,
        [className]: className
    });

    return (
        <CellComponent
            className={cls}
            href={href}
            htmlFor={htmlFor}
            { ...others }
        >
            { children }
        </CellComponent>
    );
};

Cell.propTypes = {
    /**
     * if cell should have arrow or link
     *
     */
    access: PropTypes.bool,
    /**
     * if this cell body is link
     *
     */
    link: PropTypes.bool,
    /**
     * pass in an component to replace Cell but apply same style
     *
     */
    component: PropTypes.func
};

Cell.defaultProps = {
    access: false,
    link: false,
};

export default Cell;
