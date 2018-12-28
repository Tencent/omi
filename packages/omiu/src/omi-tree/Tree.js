/*
 * @Author: kinsonpeng 
 * @Date: 2018-12-24 19:31:19 
 * @Last Modified by: kinsonpeng
 * @Last Modified time: 2018-12-27 11:38:51
 */

import omi from 'omi'

import PropTypes from 'prop-types';
import classNames from 'classnames';
import warning from 'warning';

import { treeContextTypes } from './contextTypes';

import {
  convertTreeToEntities, 
  convertDataToTree,
  getDataAndAria,
  getPosition, 
  getDragNodesKeys,
  parseCheckedKeys,
  conductExpandParent, 
  calcSelectedKeys,
  calcDropPosition,
  arrAdd, 
  arrDel, 
  posToArr,
  mapChildren, 
  conductCheck,
	warnOnlyTreeNode,
	toArray
} from './util';

class Tree extends omi.Component {
	// static observe = true
	static propTypes = {
		prefixCls: PropTypes.string,
		className: PropTypes.string,
		tabIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
		children: PropTypes.any,
		treeData: PropTypes.array, // Generate treeNode by children
		showLine: PropTypes.bool,
		showIcon: PropTypes.bool,
		icon: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
		focusable: PropTypes.bool,
		selectable: PropTypes.bool,
		disabled: PropTypes.bool,
		multiple: PropTypes.bool,
		checkable: PropTypes.oneOfType([
			PropTypes.bool,
			PropTypes.node,
		]),
		checkStrictly: PropTypes.bool,
		draggable: PropTypes.bool,
		defaultExpandParent: PropTypes.bool,
		autoExpandParent: PropTypes.bool,
		defaultExpandAll: PropTypes.bool,
		defaultExpandedKeys: PropTypes.arrayOf(PropTypes.string),
		expandedKeys: PropTypes.arrayOf(PropTypes.string),
		defaultCheckedKeys: PropTypes.arrayOf(PropTypes.string),
		checkedKeys: PropTypes.oneOfType([
			PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
			PropTypes.object,
		]),
		defaultSelectedKeys: PropTypes.arrayOf(PropTypes.string),
		selectedKeys: PropTypes.arrayOf(PropTypes.string),
		onClick: PropTypes.func,
		onDoubleClick: PropTypes.func,
		onExpand: PropTypes.func,
		onCheck: PropTypes.func,
		onSelect: PropTypes.func,
		onLoad: PropTypes.func,
		loadData: PropTypes.func,
		loadedKeys: PropTypes.arrayOf(PropTypes.string),
		onMouseEnter: PropTypes.func,
		onMouseLeave: PropTypes.func,
		onRightClick: PropTypes.func,
		onDragStart: PropTypes.func,
		onDragEnter: PropTypes.func,
		onDragOver: PropTypes.func,
		onDragLeave: PropTypes.func,
		onDragEnd: PropTypes.func,
		onDrop: PropTypes.func,
		filterTreeNode: PropTypes.func,
		openTransitionName: PropTypes.string,
		openAnimation: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
		switcherIcon: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
	}

	static childContextTypes = treeContextTypes;

	static defaultProps = {
    prefixCls: 'omi-tree',
    showLine: false,
    showIcon: true,
    selectable: true,
    multiple: false,
    checkable: false,
    disabled: false,
    checkStrictly: false,
    draggable: false,
    defaultExpandParent: true,
    autoExpandParent: false,
    defaultExpandAll: false,
    defaultExpandedKeys: [],
    defaultCheckedKeys: [],
    defaultSelectedKeys: [],
	}
	
	data = {
    // TODO: Remove this eslint
    posEntities: {}, // eslint-disable-line react/no-unused-state
    keyEntities: {},

    selectedKeys: [],
    checkedKeys: [],
    halfCheckedKeys: [],
    loadedKeys: [],
    loadingKeys: [],

    treeNode: [],
	}

	getChildContext() {
    const {
      prefixCls, selectable, showIcon, icon, draggable, checkable, checkStrictly, disabled,
      loadData, filterTreeNode,
      openTransitionName, openAnimation,
      switcherIcon,
    } = this.props;

    return {
      omiTree: {
        // root: this,

        prefixCls,
        selectable,
        showIcon,
        icon,
        switcherIcon,
        draggable,
        checkable,
        checkStrictly,
        disabled,
        openTransitionName,
        openAnimation,

        loadData,
        filterTreeNode,
        renderTreeNode: this.renderTreeNode,
        isKeyChecked: this.isKeyChecked,

        onNodeClick: this.onNodeClick,
        onNodeDoubleClick: this.onNodeDoubleClick,
        onNodeExpand: this.onNodeExpand,
        onNodeSelect: this.onNodeSelect,
        onNodeCheck: this.onNodeCheck,
        onNodeLoad: this.onNodeLoad,
        onNodeMouseEnter: this.onNodeMouseEnter,
        onNodeMouseLeave: this.onNodeMouseLeave,
        onNodeContextMenu: this.onNodeContextMenu,
        onNodeDragStart: this.onNodeDragStart,
        onNodeDragEnter: this.onNodeDragEnter,
        onNodeDragOver: this.onNodeDragOver,
        onNodeDragLeave: this.onNodeDragLeave,
        onNodeDragEnd: this.onNodeDragEnd,
        onNodeDrop: this.onNodeDrop,
      },
    };
  }
  
  change(props, prevState) {
    const { prevProps } = prevState;
    const newState = {
      prevProps: props,
    };

    function needSync(name) {
      return (!prevProps && name in props) || (prevProps && prevProps[name] !== props[name]);
    }

    // ================== Tree Node ==================
    let treeNode = null;

    // Check if `treeData` or `children` changed and save into the state.
    if (needSync('treeData')) {
      treeNode = convertDataToTree(props.treeData);
    } else if (needSync('children')) {
      treeNode = props.children;
    }

    // Tree support filter function which will break the tree structure in the vdm.
    // We cache the treeNodes in state so that we can return the treeNode in event trigger.
    if (treeNode) {
      newState.treeNode = treeNode;

      // Calculate the entities data for quick match
      const entitiesMap = convertTreeToEntities(treeNode);
      newState.posEntities = entitiesMap.posEntities;
      newState.keyEntities = entitiesMap.keyEntities;
    }

    const keyEntities = newState.keyEntities || prevState.keyEntities;

    // ================ expandedKeys =================
    if (needSync('expandedKeys') || (prevProps && needSync('autoExpandParent'))) {
      newState.expandedKeys = (props.autoExpandParent || (!prevProps && props.defaultExpandParent)) ?
        conductExpandParent(props.expandedKeys, keyEntities) : props.expandedKeys;
    } else if (!prevProps && props.defaultExpandAll) {
      newState.expandedKeys = Object.keys(keyEntities);
    } else if (!prevProps && props.defaultExpandedKeys) {
      newState.expandedKeys = (props.autoExpandParent || props.defaultExpandParent) ?
        conductExpandParent(props.defaultExpandedKeys, keyEntities) : props.defaultExpandedKeys;
    }

    // ================ selectedKeys =================
    if (props.selectable) {
      if (needSync('selectedKeys')) {
        newState.selectedKeys = calcSelectedKeys(props.selectedKeys, props);
      } else if (!prevProps && props.defaultSelectedKeys) {
        newState.selectedKeys = calcSelectedKeys(props.defaultSelectedKeys, props);
      }
    }

    // ================= checkedKeys =================
    if (props.checkable) {
      let checkedKeyEntity;

      if (needSync('checkedKeys')) {
        checkedKeyEntity = parseCheckedKeys(props.checkedKeys) || {};
      } else if (!prevProps && props.defaultCheckedKeys) {
        checkedKeyEntity = parseCheckedKeys(props.defaultCheckedKeys) || {};
      } else if (treeNode) {
        // If treeNode changed, we also need check it
        checkedKeyEntity = {
          checkedKeys: prevState.checkedKeys,
          halfCheckedKeys: prevState.halfCheckedKeys,
        };
      }

      if (checkedKeyEntity) {
        let { checkedKeys = [], halfCheckedKeys = [] } = checkedKeyEntity;

        if (!props.checkStrictly) {
          const conductKeys = conductCheck(checkedKeys, true, keyEntities);
          checkedKeys = conductKeys.checkedKeys;
          halfCheckedKeys = conductKeys.halfCheckedKeys;
        }

        newState.checkedKeys = checkedKeys;
        newState.halfCheckedKeys = halfCheckedKeys;
      }
    }
    // ================= loadedKeys ==================
    if (needSync('loadedKeys')) {
      newState.loadedKeys = props.loadedKeys;
    }

    return newState;
  }
	
	onNodeDragStart = (event, node) => {
    const { expandedKeys } = this.data;
    const { onDragStart } = this.props;
    const { eventKey, children } = node.props;

    this.dragNode = node;
		
		this.data.dragNodesKeys = getDragNodesKeys(children, node);
		this.data.expandedKeys = arrDel(expandedKeys, eventKey);

    if (onDragStart) {
      onDragStart({ event, node });
    }
	}

	onNodeDragEnter = (event, node) => {
    const { expandedKeys } = this.data;
    const { onDragEnter } = this.props;
    const { pos, eventKey } = node.props;

    if (!this.dragNode) return;

    const dropPosition = calcDropPosition(event, node);

    // Skip if drag node is self
    if (
      this.dragNode.props.eventKey === eventKey &&
      dropPosition === 0
    ) {
			this.data.dragOverNodeKey = '';
			this.data.dropPosition = null;
      return;
		}
		
    setTimeout(() => {
      // Update drag over node
			
			this.data.dragOverNodeKey = eventKey;
			this.data.dropPosition = dropPosition;

      // Side effect for delay drag
      if (!this.delayedDragEnterLogic) {
        this.delayedDragEnterLogic = {};
      }
      Object.keys(this.delayedDragEnterLogic).forEach((key) => {
        clearTimeout(this.delayedDragEnterLogic[key]);
      });
      this.delayedDragEnterLogic[pos] = setTimeout(() => {
        const newExpandedKeys = arrAdd(expandedKeys, eventKey);
        this.data.expandedKeys = newExpandedKeys

        if (onDragEnter) {
          onDragEnter({ event, node, expandedKeys: newExpandedKeys });
        }
      }, 400);
    }, 0);
  }

	onNodeDragOver = (event, node) => {
    const { onDragOver } = this.props;
    const { eventKey } = node.props;

    // Update drag position
    if (this.dragNode && eventKey === this.data.dragOverNodeKey) {
      const dropPosition = calcDropPosition(event, node);

      if (dropPosition === this.data.dropPosition) return;
			this.data.dropPosition = dropPosition;
    }

    if (onDragOver) {
      onDragOver({ event, node });
    }
	}
	
	onNodeDragLeave = (event, node) => {
    const { onDragLeave } = this.props;
		
		this.data.dragOverNodeKey = '';

    if (onDragLeave) {
      onDragLeave({ event, node });
    }
	}
	
	onNodeDragEnd = (event, node) => {
    const { onDragEnd } = this.props;
		this.data.dragOverNodeKey = '';
    if (onDragEnd) {
      onDragEnd({ event, node });
    }

    this.dragNode = null;
	}
	
	onNodeDrop = (event, node) => {
    const { dragNodesKeys = [], dropPosition } = this.data;
    const { onDrop } = this.props;
    const { eventKey, pos } = node.props;
		
		this.data.dragOverNodeKey = '';

    if (dragNodesKeys.indexOf(eventKey) !== -1) {
      warning(false, 'Can not drop to dragNode(include it\'s children node)');
      return;
    }

    const posArr = posToArr(pos);

    const dropResult = {
      event,
      node,
      dragNode: this.dragNode,
      dragNodesKeys: dragNodesKeys.slice(),
      dropPosition: dropPosition + Number(posArr[posArr.length - 1]),
    };

    if (dropPosition !== 0) {
      dropResult.dropToGap = true;
    }

    if (onDrop) {
      onDrop(dropResult);
    }

    this.dragNode = null;
	}
	
	onNodeClick = (e, treeNode) => {
    const { onClick } = this.props;
    if (onClick) {
      onClick(e, treeNode);
    }
	}
	
	onNodeDoubleClick = (e, treeNode) => {
    const { onDoubleClick } = this.props;
    if (onDoubleClick) {
      onDoubleClick(e, treeNode);
    }
	}
	
	onNodeSelect = (e, treeNode) => {
    let { selectedKeys } = this.data;
    const { keyEntities } = this.data;
    const { onSelect, multiple } = this.props;
    const { selected, eventKey } = treeNode.props;
    const targetSelected = !selected;

    // Update selected keys
    if (!targetSelected) {
      selectedKeys = arrDel(selectedKeys, eventKey);
    } else if (!multiple) {
      selectedKeys = [eventKey];
    } else {
      selectedKeys = arrAdd(selectedKeys, eventKey);
    }

    // [Legacy] Not found related usage in doc or upper libs
    const selectedNodes = selectedKeys.map(key => {
      const entity = keyEntities[key];
      if (!entity) return null;

      return entity.node;
    }).filter(node => node);

    this.setUncontrolledState({ selectedKeys });

    if (onSelect) {
      const eventObj = {
        event: 'select',
        selected: targetSelected,
        node: treeNode,
        selectedNodes,
        nativeEvent: e.nativeEvent,
      };
      onSelect(selectedKeys, eventObj);
    }
	}
	
	onNodeCheck = (e, treeNode, checked) => {
    const { keyEntities, checkedKeys: oriCheckedKeys, halfCheckedKeys: oriHalfCheckedKeys } = this.data;
    const { checkStrictly, onCheck } = this.props;
    const { props: { eventKey } } = treeNode;

    // Prepare trigger arguments
    let checkedObj;
    const eventObj = {
      event: 'check',
      node: treeNode,
      checked,
      nativeEvent: e.nativeEvent,
    };

    if (checkStrictly) {
      const checkedKeys = checked ? arrAdd(oriCheckedKeys, eventKey) : arrDel(oriCheckedKeys, eventKey);
      const halfCheckedKeys = arrDel(oriHalfCheckedKeys, eventKey);
      checkedObj = { checked: checkedKeys, halfChecked: halfCheckedKeys };

      eventObj.checkedNodes = checkedKeys
        .map(key => keyEntities[key])
        .filter(entity => entity)
        .map(entity => entity.node);

      this.setUncontrolledState({ checkedKeys });
    } else {
      const { checkedKeys, halfCheckedKeys } = conductCheck([eventKey], checked, keyEntities, {
        checkedKeys: oriCheckedKeys, halfCheckedKeys: oriHalfCheckedKeys,
      });

      checkedObj = checkedKeys;

      // [Legacy] This is used for `rc-tree-select`
      eventObj.checkedNodes = [];
      eventObj.checkedNodesPositions = [];
      eventObj.halfCheckedKeys = halfCheckedKeys;

      checkedKeys.forEach((key) => {
        const entity = keyEntities[key];
        if (!entity) return;

        const { node, pos } = entity;

        eventObj.checkedNodes.push(node);
        eventObj.checkedNodesPositions.push({ node, pos });
      });

      this.setUncontrolledState({
        checkedKeys,
        halfCheckedKeys,
      });
    }

    if (onCheck) {
      onCheck(checkedObj, eventObj);
    }
  }
	
	onNodeLoad = treeNode => (
    new Promise((resolve) => {
      // We need to get the latest state of loading/loaded keys
      const { loadedKeys = [], loadingKeys = [] } = this.data
      const { loadData, onLoad } = this.props;
      const { eventKey } = treeNode.props;

      if (!loadData || loadedKeys.indexOf(eventKey) !== -1 || loadingKeys.indexOf(eventKey) !== -1) {
        // react 15 will warn if return null
        return {};
      }

      // Process load data
      const promise = loadData(treeNode);
      promise.then(() => {
        const newLoadedKeys = arrAdd(this.data.loadedKeys, eventKey);
        const newLoadingKeys = arrDel(this.data.loadingKeys, eventKey);

        // onLoad should trigger before internal setState to avoid `loadData` trigger twice.
        // https://github.com/ant-design/ant-design/issues/12464
        if (onLoad) {
          const eventObj = {
            event: 'load',
            node: treeNode,
          };
          onLoad(newLoadedKeys, eventObj);
        }

        this.setUncontrolledState({
          loadedKeys: newLoadedKeys,
        });
        
        this.data.loadedKeys = newLoadingKeys

        resolve();
      });
      this.data.loadingKeys = arrAdd(loadingKeys, eventKey)
    })
	)
	
	onNodeExpand = (e, treeNode) => {
    let { expandedKeys } = this.data;
    const { onExpand, loadData } = this.props;
    const { eventKey, expanded } = treeNode.props;

    // Update selected keys
    const index = expandedKeys.indexOf(eventKey);
    const targetExpanded = !expanded;

    warning(
      (expanded && index !== -1) || (!expanded && index === -1),
      'Expand state not sync with index check',
    );
    if (targetExpanded) {
      expandedKeys = arrAdd(expandedKeys, eventKey);
    } else {
      expandedKeys = arrDel(expandedKeys, eventKey);
    }
    this.setUncontrolledState({ expandedKeys });

    if (onExpand) {
      onExpand(expandedKeys, {
        node: treeNode,
        expanded: targetExpanded,
        nativeEvent: e.nativeEvent,
      });
    }

    // Async Load data
    if (targetExpanded && loadData) {
      const loadPromise = this.onNodeLoad(treeNode);
      return loadPromise ? loadPromise.then(() => {
        // [Legacy] Refresh logic
        this.setUncontrolledState({ expandedKeys });
      }) : null;
    }

    return null;
	}
	
	onNodeMouseEnter = (event, node) => {
    const { onMouseEnter } = this.props;
    if (onMouseEnter) {
      onMouseEnter({ event, node });
    }
	}
	
	onNodeMouseLeave = (event, node) => {
    const { onMouseLeave } = this.props;
    if (onMouseLeave) {
      onMouseLeave({ event, node });
    }
	}
	
	onNodeContextMenu = (event, node) => {
    const { onRightClick } = this.props;
    if (onRightClick) {
      event.preventDefault();
      onRightClick({ event, node });
    }
	}
	
	setUncontrolledState (state) {
    let needSync = false;
    const newState = {};

    Object.keys(state).forEach(name => {
      if (name in this.props) return;

      needSync = true;
      newState[name] = state[name];
    });

    if (needSync) {
      Object.assign(this.data, newState);
      this.update();
    }
	}
	
	isKeyChecked (key) {
    const { checkedKeys = [] } = this.data;
    return checkedKeys.indexOf(key) !== -1;
	}
	
	renderTreeNode = (child, index, level = 0) => {
    const {
      keyEntities,
      expandedKeys = [], selectedKeys = [], halfCheckedKeys = [],
      loadedKeys = [], loadingKeys = [],
      dragOverNodeKey, dropPosition,
    } = this.data;

    const pos = getPosition(level, index);
    const key = child.key || pos;

    if (!keyEntities[key]) {
      warnOnlyTreeNode();
      return null;
    }
    const r = omi.cloneElement(child, {
      key,
      eventKey: key,
      expanded: expandedKeys.indexOf(key) !== -1,
      selected: selectedKeys.indexOf(key) !== -1,
      loaded: loadedKeys.indexOf(key) !== -1,
      loading: loadingKeys.indexOf(key) !== -1,
      checked: this.isKeyChecked(key),
      halfChecked: halfCheckedKeys.indexOf(key) !== -1,
      pos,

      // [Legacy] Drag props
      dragOver: dragOverNodeKey === key && dropPosition === 0,
      dragOverGapTop: dragOverNodeKey === key && dropPosition === -1,
      dragOverGapBottom: dragOverNodeKey === key && dropPosition === 1,
    });
    return r
  }

	install () {
    // this.data = Object.assign(this.data, this.change(this.props, {}))
  }
  
  beforeRender(props, prevState) {
    Object.assign(this.data, this.change(this.props, this.data))
  }
	
	render() {
    const { treeNode } = this.data;
    const {
      prefixCls, className, focusable,
      showLine, tabIndex = 0,
    } = this.props;
    const domProps = getDataAndAria(this.props);

    if (focusable) {
      domProps.tabIndex = tabIndex;
      domProps.onKeyDown = this.onKeyDown;
    }

		return (
			<ul
        {...domProps}
        class={classNames(prefixCls, className, {
          [`${prefixCls}-show-line`]: showLine,
        })}
        role="tree"
        unselectable="on"
      >
        {mapChildren(treeNode, (node, index) => (
          this.renderTreeNode(node, index)
        ))}
			</ul>
    )
    return (
      <ul></ul>
    )
	}

}

module.exports = Tree;
