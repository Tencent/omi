import omi, { define, WeElement } from 'omi'
import PropTypes from 'prop-types';
import classNames from 'classnames';

import style from './_index.css'

import { nodeContextTypes } from './contextTypes';

import {
    getNodeChildren,
    getDataAndAria,
    mapChildren,
		warnOnlyTreeNode,
		toArray
  } from './util';

const ICON_OPEN = 'open';
const ICON_CLOSE = 'close';

const defaultTitle = '---';

class TreeNode extends WeElement {
	static propTypes = {
		eventKey: PropTypes.string, // Pass by parent `cloneElement`
		prefixCls: PropTypes.string,
		className: PropTypes.string,
		style: PropTypes.object,
		root: PropTypes.object,
		onSelect: PropTypes.func,

		// By parent
		expanded: PropTypes.bool,
		selected: PropTypes.bool,
		checked: PropTypes.bool,
		loaded: PropTypes.bool,
		loading: PropTypes.bool,
		halfChecked: PropTypes.bool,
		children: PropTypes.node,
		title: PropTypes.node,
		pos: PropTypes.string,
		dragOver: PropTypes.bool,
		dragOverGapTop: PropTypes.bool,
		dragOverGapBottom: PropTypes.bool,

		// By user
		isLeaf: PropTypes.bool,
		selectable: PropTypes.bool,
		disabled: PropTypes.bool,
		disableCheckbox: PropTypes.bool,
		icon: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
		switcherIcon: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
	}
	static contextTypes = nodeContextTypes;

  static childContextTypes = nodeContextTypes;

  static defaultProps = {
    title: defaultTitle
	};

	constructor(props) {
    super(props);

    this.data = {
      dragNodeHighlight: false,
    }
  }
  
  css () {
    return style
  }
	
	getChildContext() {
    return {
      ...this.store,
      rcTreeNode: {
        // onUpCheckConduct: this.onUpCheckConduct,
      },
    };
	}
	
	install() {
		this.syncLoadData(this.props);
	}

	updated() {
		this.syncLoadData(this.props);
	}

	onSelectorClick = (e) => {
    // Click trigger before select/check operation
    const { omiTree: { onNodeClick } } = this.store;
    onNodeClick(e, this);

    if (this.isSelectable()) {
      this.onSelect(e);
    } else {
      this.onCheck(e);
    }
	}
	
	onSelectorDoubleClick = (e) => {
    const { omiTree: { onNodeDoubleClick } } = this.store;
    onNodeDoubleClick(e, this);
	}
	
	onSelect = (e) => {
    if (this.isDisabled()) return;

    const { omiTree: { onNodeSelect } } = this.store;
    e.preventDefault();
    onNodeSelect(e, this);
	}
	
	onCheck = (e) => {
    if (this.isDisabled()) return;

    const { disableCheckbox, checked } = this.props;
    const {
      omiTree: { checkable, onNodeCheck },
    } = this.store;

    if (!checkable || disableCheckbox) return;

    e.preventDefault();
    const targetChecked = !checked;
    onNodeCheck(e, this, targetChecked);
	}
	
	onMouseEnter = (e) => {
    const { omiTree: { onNodeMouseEnter } } = this.store;
    onNodeMouseEnter(e, this);
	}
	
	onMouseLeave = (e) => {
    const { omiTree: { onNodeMouseLeave } } = this.store;
    onNodeMouseLeave(e, this);
	}
	
	onContextMenu = (e) => {
    const { omiTree: { onNodeContextMenu } } = this.store;
    onNodeContextMenu(e, this);
  }
	
	onDragStart = (e) => {
    const { omiTree: { onNodeDragStart } } = this.store;

    e.stopPropagation();
    this.data.dragNodeHighlight = true
    onNodeDragStart(e, this);

    try {
      // ie throw error
      // firefox-need-it
      e.dataTransfer.setData('text/plain', '');
    } catch (error) {
      // empty
    }
	}
	
	onDragEnter = (e) => {
    const { omiTree: { onNodeDragEnter } } = this.store;

    e.preventDefault();
    e.stopPropagation();
    onNodeDragEnter(e, this);
	}
	
	onDragOver = (e) => {
    const { omiTree: { onNodeDragOver } } = this.store;

    e.preventDefault();
    e.stopPropagation();
    onNodeDragOver(e, this);
	}
	
	onDragLeave = (e) => {
    const { omiTree: { onNodeDragLeave } } = this.store;

    e.stopPropagation();
    onNodeDragLeave(e, this);
	}
	
	onDragEnd = (e) => {
    const { omiTree: { onNodeDragEnd } } = this.store;

    e.stopPropagation();
    this.data.dragNodeHighlight = false
    onNodeDragEnd(e, this);
	}
	
	onDrop = (e) => {
    const { omiTree: { onNodeDrop } } = this.store;

    e.preventDefault();
    e.stopPropagation();
    this.data.dragNodeHighlight = false
    onNodeDrop(e, this);
	}
	
	onExpand = (e) => {
    const { omiTree: { onNodeExpand } } = this.store;
    onNodeExpand(e, this);
	}
	
	setSelectHandle = (node) => {
    this.selectHandle = node;
	}
	
	getNodeChildren () {
    const { children } = this.props;
    const originList = children.filter(node => node);
    const targetList = getNodeChildren(originList);

    if (originList.length !== targetList.length) {
      warnOnlyTreeNode();
    }

    return targetList;
	}
	
	getNodeState () {
    const { expanded } = this.props;

    if (this.isLeaf()) {
      return null;
    }

    return expanded ? ICON_OPEN : ICON_CLOSE;
	}
	
	isLeaf () {
    const { isLeaf, loaded } = this.props;
    const { omiTree: { loadData } } = this.store;

    const hasChildren = this.getNodeChildren().length !== 0;

    if (isLeaf === false) {
      return false;
    }

    return (
      isLeaf ||
      (!loadData && !hasChildren) ||
      (loadData && loaded && !hasChildren)
    );
	}
	
	isDisabled () {
    const { disabled } = this.props;
    const { omiTree: { disabled: treeDisabled } } = this.store;

    // Follow the logic of Selectable
    if (disabled === false) {
      return false;
    }

    return !!(treeDisabled || disabled);
	}
	
	isSelectable() {
    const { selectable } = this.props;
    const { omiTree: { selectable: treeSelectable } } = this.store;

    // Ignore when selectable is undefined or null
    if (typeof selectable === 'boolean') {
      return selectable;
    }

    return treeSelectable;
	}
	
	syncLoadData (props) {
    const { expanded, loading, loaded } = props;
    const { omiTree: { loadData, onNodeLoad } } = this.store;

    if (loading) return;

    // read from state to avoid loadData at same time
    if (loadData && expanded && !this.isLeaf()) {
      // We needn't reload data when has children in sync logic
      // It's only needed in node expanded
      const hasChildren = this.getNodeChildren().length !== 0;
      if (!hasChildren && !loaded) {
        onNodeLoad(this);
      }
    }
	}
	
	renderSwitcher () {
    const {
      expanded,
      switcherIcon: switcherIconFromProps,
    } = this.props;
    const {
      omiTree: {
        prefixCls,
        switcherIcon: switcherIconFromCtx,
      }
    } = this.store;

    const switcherIcon = switcherIconFromProps || switcherIconFromCtx;

    if (this.isLeaf()) {
      return (
        <span className={classNames(`${prefixCls}-switcher`, `${prefixCls}-switcher-noop`)}>
          {typeof switcherIcon === 'function' ?
            omi.createElement(switcherIcon, { ...this.props, isLeaf: true }) : switcherIcon}
        </span>
      );
    }

    const switcherCls = classNames(`${prefixCls}-switcher`, `${prefixCls}-switcher_${expanded ? ICON_OPEN : ICON_CLOSE}`);
    return (
      <span onClick={this.onExpand} className={switcherCls}>
        {typeof switcherIcon === 'function' ?
          omi.createElement(switcherIcon, { ...this.props, isLeaf: false }) : switcherIcon}
      </span>
    );
	}
	
	renderCheckbox () {
    const { checked, halfChecked, disableCheckbox } = this.props;
    const { omiTree: { prefixCls, checkable } } = this.store;
    const disabled = this.isDisabled();

    if (!checkable) return null;

    // [Legacy] Custom element should be separate with `checkable` in future
    const $custom = typeof checkable !== 'boolean' ? checkable : null;

    return (
      <span
        className={classNames(
          `${prefixCls}-checkbox`,
          checked && `${prefixCls}-checkbox-checked`,
          !checked && halfChecked && `${prefixCls}-checkbox-indeterminate`,
          (disabled || disableCheckbox) && `${prefixCls}-checkbox-disabled`,
        )}
        onClick={this.onCheck}
      >
        {$custom}
      </span>
    );
	}
	
	renderIcon () {
    const { loading } = this.props;
    const { omiTree: { prefixCls } } = this.store;

    return (
      <span
        className={classNames(
          `${prefixCls}-iconEle`,
          `${prefixCls}-icon__${this.getNodeState() || 'docu'}`,
          loading && `${prefixCls}-icon_loading`,
        )}
      />
    );
	}
	
	renderSelector () {
    const { dragNodeHighlight } = this.data;
    const { title, selected, icon, loading } = this.props;
    const { omiTree: { prefixCls, showIcon, icon: treeIcon, draggable, loadData } } = this.store;
    const disabled = this.isDisabled();

    const wrapClass = `${prefixCls}-node-content-wrapper`;

    // Icon - Still show loading icon when loading without showIcon
    let $icon;

    if (showIcon) {
      const currentIcon = icon || treeIcon;

      $icon = currentIcon ? (
        <span
          className={classNames(
            `${prefixCls}-iconEle`,
            `${prefixCls}-icon__customize`,
          )}
        >
          {typeof currentIcon === 'function' ?
            omi.createElement(currentIcon, {
              ...this.props,
            }) : currentIcon}
        </span>
      ) : this.renderIcon();
    } else if (loadData && loading) {
      $icon = this.renderIcon();
    }

    // Title
    const $title = <span className={`${prefixCls}-title`}>{title}</span>;

    return (
      <span
        ref={this.setSelectHandle}
        title={typeof title === 'string' ? title : ''}
        className={classNames(
          `${wrapClass}`,
          `${wrapClass}-${this.getNodeState() || 'normal'}`,
          (!disabled && (selected || dragNodeHighlight)) && `${prefixCls}-node-selected`,
          (!disabled && draggable) && 'draggable'
        )}
        draggable={(!disabled && draggable) || undefined}
        aria-grabbed={(!disabled && draggable) || undefined}

        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        onContextMenu={this.onContextMenu}
        onClick={this.onSelectorClick}
        onDoubleClick={this.onSelectorDoubleClick}
        onDragStart={draggable ? this.onDragStart : undefined}
      >
        {$icon}{$title}
      </span>
    );
	}
	
	renderChildren () {
    const { expanded, pos } = this.props;
    const { omiTree: {
      prefixCls,
      openTransitionName, openAnimation,
      renderTreeNode,
    } } = this.store;

    const animProps = {};
    if (openTransitionName) {
      animProps.transitionName = openTransitionName;
    } else if (typeof openAnimation === 'object') {
      animProps.animation = { ...openAnimation };
    }

    // Children TreeNode
    const nodeList = this.getNodeChildren();

    if (nodeList.length === 0) {
      return null;
    }

    // let $children;
    if (expanded) {
      return (
        <ul
          class={classNames(
            `${prefixCls}-child-tree`,
            expanded && `${prefixCls}-child-tree-open`,
          )}
          data-expanded={expanded}
          role="group"
        >
          {mapChildren(nodeList, (node, index) => (
            renderTreeNode(node, index, pos)
          ))}
        </ul>
      );
    }

    /** ------------------------------------需要修改-------------------------------------- */

    // return (
    //   $children
    // );
	}
	
	render() {
    const { loading } = this.props;
    const {
      className, style,
      dragOver, dragOverGapTop, dragOverGapBottom,
      isLeaf,
      expanded, selected, checked, halfChecked,
      ...otherProps
    } = this.props;
    const { omiTree: {
      prefixCls,
      filterTreeNode,
      draggable,
    } } = this.store;
    const disabled = this.isDisabled();
    const dataOrAriaAttributeProps = getDataAndAria(otherProps);
    return (
      <li
        className={classNames(className, {
          [`${prefixCls}-treenode-disabled`]: disabled,
          [`${prefixCls}-treenode-switcher-${expanded ? 'open' : 'close'}`]: !isLeaf,
          [`${prefixCls}-treenode-checkbox-checked`]: checked,
          [`${prefixCls}-treenode-checkbox-indeterminate`]: halfChecked,
          [`${prefixCls}-treenode-selected`]: selected,
          [`${prefixCls}-treenode-loading`]: loading,

          'drag-over': !disabled && dragOver,
          'drag-over-gap-top': !disabled && dragOverGapTop,
          'drag-over-gap-bottom': !disabled && dragOverGapBottom,
          'filter-node': filterTreeNode && filterTreeNode(this),
        })}

        style={style}

        role="tree-item"

        onDragEnter={draggable ? this.onDragEnter : undefined}
        onDragOver={draggable ? this.onDragOver : undefined}
        onDragLeave={draggable ? this.onDragLeave : undefined}
        onDrop={draggable ? this.onDrop : undefined}
        onDragEnd={draggable ? this.onDragEnd : undefined}
        {...dataOrAriaAttributeProps}
      >
        {this.renderSwitcher()}
        {this.renderCheckbox()}
        {this.renderSelector()}
        {this.renderChildren()}
      </li>
    );
  }

}

TreeNode.isTreeNode = 1;

module.exports = TreeNode;
