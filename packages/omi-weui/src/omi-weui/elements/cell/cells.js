import React from 'react';
import classNames from '../../utils/classnames';

import deprecationWarning from '../../utils/deprecationWarning';

/**
 * Wrapper for `Cell`
 *
 */
const Cells = (props) => {
    const { children, className, access, ...others } = props;

    if (access){
        deprecationWarning(
            'Cells Access',
            'Cell Access',
            'https://github.com/weui/weui/wiki/%E5%9C%A81.0.0%E5%9C%A8%E4%BB%A3%E7%A0%81%E5%B1%82%E9%9D%A2%E4%B8%8A%E5%81%9A%E4%BA%86%E5%93%AA%E4%BA%9B%E6%94%B9%E5%8F%98#%E5%B8%A6%E7%AE%AD%E5%A4%B4%E7%9A%84%E5%88%97%E8%A1%A8%E7%94%B1%E4%B9%8B%E5%89%8D%E7%9A%84weui_cells_access%E6%94%B9%E4%B8%BA%E5%8D%95%E7%8B%AC%E6%8E%A7%E5%88%B6%E7%9A%84weui-cell_access'
        );
    }

    const cls = classNames({
        'weui-cells': true,
        [className]: className
    });

    return (
        <div className={cls} { ...others }>{ children }</div>
    );
};

Cells.propTypes = {
};

Cells.defaultProps = {
};

export default Cells;