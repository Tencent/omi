/**
 * Webpack has bug for import loop, which is not the same behavior as ES module.
 * When util.js imports the TreeNode for tree generate will cause treeContextTypes be empty.
 */

import PropTypes from 'prop-types';

export const treeContextTypes = {
  rcTree: PropTypes.shape({
    root: PropTypes.object,

    prefixCls: PropTypes.string,
    selectable: PropTypes.bool,
    showIcon: PropTypes.bool,
    icon: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
    draggable: PropTypes.bool,
    checkable: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.node,
    ]),
    checkStrictly: PropTypes.bool,
    disabled: PropTypes.bool,
    openTransitionName: PropTypes.string,
    openAnimation: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),

    loadData: PropTypes.func,
    filterTreeNode: PropTypes.func,
    renderTreeNode: PropTypes.func,

    isKeyChecked: PropTypes.func,

    onNodeClick: PropTypes.func,
    onNodeDoubleClick: PropTypes.func,
    onNodeExpand: PropTypes.func,
    onNodeSelect: PropTypes.func,
    onNodeCheck: PropTypes.func,
    onNodeMouseEnter: PropTypes.func,
    onNodeMouseLeave: PropTypes.func,
    onNodeContextMenu: PropTypes.func,
    onNodeDragStart: PropTypes.func,
    onNodeDragEnter: PropTypes.func,
    onNodeDragOver: PropTypes.func,
    onNodeDragLeave: PropTypes.func,
    onNodeDragEnd: PropTypes.func,
    onNodeDrop: PropTypes.func,
  }),
};

export const nodeContextTypes = {
  ...treeContextTypes,
  rcTreeNode: PropTypes.shape({
    onUpCheckConduct: PropTypes.func,
  }),
};
