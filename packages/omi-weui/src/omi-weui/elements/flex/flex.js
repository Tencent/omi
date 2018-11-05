//1.0.0 components

import React from 'react';

/**
 * FlexItem Container
 *
 */
const Flex = (props) => (
    <div className="weui-flex" {...props}>
        { props.children }
    </div>
);

export default Flex;