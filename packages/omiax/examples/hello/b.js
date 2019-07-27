(function () {
  'use strict';

  // https://github.com/facebook/css-layout

  /**
   * Copyright (c) 2014, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   */

  var computeLayout = function () {

    function capitalizeFirst(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }

    function getSpacing(node, type, suffix, location) {
      var key = type + capitalizeFirst(location) + suffix;
      if (key in node.style) {
        return node.style[key];
      }

      key = type + suffix;
      if (key in node.style) {
        return node.style[key];
      }

      return 0;
    }

    function getPositiveSpacing(node, type, suffix, location) {
      var key = type + capitalizeFirst(location) + suffix;
      if (key in node.style && node.style[key] >= 0) {
        return node.style[key];
      }

      key = type + suffix;
      if (key in node.style && node.style[key] >= 0) {
        return node.style[key];
      }

      return 0;
    }

    function isUndefined(value) {
      return value === undefined;
    }

    function getMargin(node, location) {
      return getSpacing(node, 'margin', '', location);
    }

    function getPadding(node, location) {
      return getPositiveSpacing(node, 'padding', '', location);
    }

    function getBorder(node, location) {
      return getPositiveSpacing(node, 'border', 'Width', location);
    }

    function getPaddingAndBorder(node, location) {
      return getPadding(node, location) + getBorder(node, location);
    }

    function getMarginAxis(node, axis) {
      return getMargin(node, leading[axis]) + getMargin(node, trailing[axis]);
    }

    function getPaddingAndBorderAxis(node, axis) {
      return getPaddingAndBorder(node, leading[axis]) + getPaddingAndBorder(node, trailing[axis]);
    }

    function getJustifyContent(node) {
      if ('justifyContent' in node.style) {
        return node.style.justifyContent;
      }
      return 'flex-start';
    }

    function getAlignItem(node, child) {
      if ('alignSelf' in child.style) {
        return child.style.alignSelf;
      }
      if ('alignItems' in node.style) {
        return node.style.alignItems;
      }
      return 'stretch';
    }

    function getFlexDirection(node) {
      if ('flexDirection' in node.style) {
        return node.style.flexDirection;
      }
      return 'column';
    }

    function getPositionType(node) {
      if ('position' in node.style) {
        return node.style.position;
      }
      return 'relative';
    }

    function getFlex(node) {
      return node.style.flex;
    }

    function isFlex(node) {
      return getPositionType(node) === CSS_POSITION_RELATIVE && getFlex(node) > 0;
    }

    function isFlexWrap(node) {
      return node.style.flexWrap === 'wrap';
    }

    function getDimWithMargin(node, axis) {
      return node.layout[dim[axis]] + getMarginAxis(node, axis);
    }

    function isDimDefined(node, axis) {
      return !isUndefined(node.style[dim[axis]]) && node.style[dim[axis]] >= 0;
    }

    function isPosDefined(node, pos) {
      return !isUndefined(node.style[pos]);
    }

    function isMeasureDefined(node) {
      return 'measure' in node.style;
    }

    function getPosition(node, pos) {
      if (pos in node.style) {
        return node.style[pos];
      }
      return 0;
    }

    // When the user specifically sets a value for width or height
    function setDimensionFromStyle(node, axis) {
      // The parent already computed us a width or height. We just skip it
      if (!isUndefined(node.layout[dim[axis]])) {
        return;
      }
      // We only run if there's a width or height defined
      if (!isDimDefined(node, axis)) {
        return;
      }

      // The dimensions can never be smaller than the padding and border
      node.layout[dim[axis]] = fmaxf(node.style[dim[axis]], getPaddingAndBorderAxis(node, axis));
    }

    // If both left and right are defined, then use left. Otherwise return
    // +left or -right depending on which is defined.
    function getRelativePosition(node, axis) {
      if (leading[axis] in node.style) {
        return getPosition(node, leading[axis]);
      }
      return -getPosition(node, trailing[axis]);
    }

    var leading = {
      row: 'left',
      column: 'top'
    };
    var trailing = {
      row: 'right',
      column: 'bottom'
    };
    var pos = {
      row: 'left',
      column: 'top'
    };
    var dim = {
      row: 'width',
      column: 'height'
    };

    function fmaxf(a, b) {
      if (a > b) {
        return a;
      }
      return b;
    }

    var CSS_UNDEFINED = undefined;

    var CSS_FLEX_DIRECTION_ROW = 'row';
    var CSS_FLEX_DIRECTION_COLUMN = 'column';

    var CSS_JUSTIFY_FLEX_START = 'flex-start';
    var CSS_JUSTIFY_CENTER = 'center';
    var CSS_JUSTIFY_FLEX_END = 'flex-end';
    var CSS_JUSTIFY_SPACE_BETWEEN = 'space-between';
    var CSS_JUSTIFY_SPACE_AROUND = 'space-around';

    var CSS_ALIGN_FLEX_START = 'flex-start';
    var CSS_ALIGN_CENTER = 'center';
    var CSS_ALIGN_STRETCH = 'stretch';

    var CSS_POSITION_RELATIVE = 'relative';
    var CSS_POSITION_ABSOLUTE = 'absolute';

    return function layoutNode(node, parentMaxWidth) {
      var /*css_flex_direction_t*/mainAxis = getFlexDirection(node);
      var /*css_flex_direction_t*/crossAxis = mainAxis === CSS_FLEX_DIRECTION_ROW ? CSS_FLEX_DIRECTION_COLUMN : CSS_FLEX_DIRECTION_ROW;

      // Handle width and height style attributes
      setDimensionFromStyle(node, mainAxis);
      setDimensionFromStyle(node, crossAxis);

      // The position is set by the parent, but we need to complete it with a
      // delta composed of the margin and left/top/right/bottom
      node.layout[leading[mainAxis]] += getMargin(node, leading[mainAxis]) + getRelativePosition(node, mainAxis);
      node.layout[leading[crossAxis]] += getMargin(node, leading[crossAxis]) + getRelativePosition(node, crossAxis);

      if (isMeasureDefined(node)) {
        var /*float*/width = CSS_UNDEFINED;
        if (isDimDefined(node, CSS_FLEX_DIRECTION_ROW)) {
          width = node.style.width;
        } else if (!isUndefined(node.layout[dim[CSS_FLEX_DIRECTION_ROW]])) {
          width = node.layout[dim[CSS_FLEX_DIRECTION_ROW]];
        } else {
          width = parentMaxWidth - getMarginAxis(node, CSS_FLEX_DIRECTION_ROW);
        }
        width -= getPaddingAndBorderAxis(node, CSS_FLEX_DIRECTION_ROW);

        // We only need to give a dimension for the text if we haven't got any
        // for it computed yet. It can either be from the style attribute or because
        // the element is flexible.
        var /*bool*/isRowUndefined = !isDimDefined(node, CSS_FLEX_DIRECTION_ROW) && isUndefined(node.layout[dim[CSS_FLEX_DIRECTION_ROW]]);
        var /*bool*/isColumnUndefined = !isDimDefined(node, CSS_FLEX_DIRECTION_COLUMN) && isUndefined(node.layout[dim[CSS_FLEX_DIRECTION_COLUMN]]);

        // Let's not measure the text if we already know both dimensions
        if (isRowUndefined || isColumnUndefined) {
          var /*css_dim_t*/measure_dim = node.style.measure(
          /*(c)!node->context,*/
          width);
          if (isRowUndefined) {
            node.layout.width = measure_dim.width + getPaddingAndBorderAxis(node, CSS_FLEX_DIRECTION_ROW);
          }
          if (isColumnUndefined) {
            node.layout.height = measure_dim.height + getPaddingAndBorderAxis(node, CSS_FLEX_DIRECTION_COLUMN);
          }
        }
        return;
      }

      // Pre-fill some dimensions straight from the parent
      for (var /*int*/i = 0; i < node.children.length; ++i) {
        var /*css_node_t**/child = node.children[i];
        // Pre-fill cross axis dimensions when the child is using stretch before
        // we call the recursive layout pass
        if (getAlignItem(node, child) === CSS_ALIGN_STRETCH && getPositionType(child) === CSS_POSITION_RELATIVE && !isUndefined(node.layout[dim[crossAxis]]) && !isDimDefined(child, crossAxis)) {
          child.layout[dim[crossAxis]] = fmaxf(node.layout[dim[crossAxis]] - getPaddingAndBorderAxis(node, crossAxis) - getMarginAxis(child, crossAxis),
          // You never want to go smaller than padding
          getPaddingAndBorderAxis(child, crossAxis));
        } else if (getPositionType(child) == CSS_POSITION_ABSOLUTE) {
          // Pre-fill dimensions when using absolute position and both offsets for the axis are defined (either both
          // left and right or top and bottom).
          for (var /*int*/ii = 0; ii < 2; ii++) {
            var /*css_flex_direction_t*/axis = ii != 0 ? CSS_FLEX_DIRECTION_ROW : CSS_FLEX_DIRECTION_COLUMN;
            if (!isUndefined(node.layout[dim[axis]]) && !isDimDefined(child, axis) && isPosDefined(child, leading[axis]) && isPosDefined(child, trailing[axis])) {
              child.layout[dim[axis]] = fmaxf(node.layout[dim[axis]] - getPaddingAndBorderAxis(node, axis) - getMarginAxis(child, axis) - getPosition(child, leading[axis]) - getPosition(child, trailing[axis]),
              // You never want to go smaller than padding
              getPaddingAndBorderAxis(child, axis));
            }
          }
        }
      }

      var /*float*/definedMainDim = CSS_UNDEFINED;
      if (!isUndefined(node.layout[dim[mainAxis]])) {
        definedMainDim = node.layout[dim[mainAxis]] - getPaddingAndBorderAxis(node, mainAxis);
      }

      // We want to execute the next two loops one per line with flex-wrap
      var /*int*/startLine = 0;
      var /*int*/endLine = 0;
      var /*int*/alreadyComputedNextLayout = 0;
      // We aggregate the total dimensions of the container in those two variables
      var /*float*/linesCrossDim = 0;
      var /*float*/linesMainDim = 0;
      while (endLine < node.children.length) {
        // <Loop A> Layout non flexible children and count children by type

        // mainContentDim is accumulation of the dimensions and margin of all the
        // non flexible children. This will be used in order to either set the
        // dimensions of the node if none already exist, or to compute the
        // remaining space left for the flexible children.
        var /*float*/mainContentDim = 0;

        // There are three kind of children, non flexible, flexible and absolute.
        // We need to know how many there are in order to distribute the space.
        var /*int*/flexibleChildrenCount = 0;
        var /*float*/totalFlexible = 0;
        var /*int*/nonFlexibleChildrenCount = 0;
        for (var /*int*/i = startLine; i < node.children.length; ++i) {
          var /*css_node_t**/child = node.children[i];
          var /*float*/nextContentDim = 0;

          // It only makes sense to consider a child flexible if we have a computed
          // dimension for the node.
          if (!isUndefined(node.layout[dim[mainAxis]]) && isFlex(child)) {
            flexibleChildrenCount++;
            totalFlexible += getFlex(child);

            // Even if we don't know its exact size yet, we already know the padding,
            // border and margin. We'll use this partial information to compute the
            // remaining space.
            nextContentDim = getPaddingAndBorderAxis(child, mainAxis) + getMarginAxis(child, mainAxis);
          } else {
            var /*float*/maxWidth = CSS_UNDEFINED;
            if (mainAxis === CSS_FLEX_DIRECTION_ROW) {
              // do nothing
            } else if (isDimDefined(node, CSS_FLEX_DIRECTION_ROW)) {
              maxWidth = node.layout[dim[CSS_FLEX_DIRECTION_ROW]] - getPaddingAndBorderAxis(node, CSS_FLEX_DIRECTION_ROW);
            } else {
              maxWidth = parentMaxWidth - getMarginAxis(node, CSS_FLEX_DIRECTION_ROW) - getPaddingAndBorderAxis(node, CSS_FLEX_DIRECTION_ROW);
            }

            // This is the main recursive call. We layout non flexible children.
            if (alreadyComputedNextLayout === 0) {
              layoutNode(child, maxWidth);
            }

            // Absolute positioned elements do not take part of the layout, so we
            // don't use them to compute mainContentDim
            if (getPositionType(child) === CSS_POSITION_RELATIVE) {
              nonFlexibleChildrenCount++;
              // At this point we know the final size and margin of the element.
              nextContentDim = getDimWithMargin(child, mainAxis);
            }
          }

          // The element we are about to add would make us go to the next line
          if (isFlexWrap(node) && !isUndefined(node.layout[dim[mainAxis]]) && mainContentDim + nextContentDim > definedMainDim &&
          // If there's only one element, then it's bigger than the content
          // and needs its own line
          i !== startLine) {
            alreadyComputedNextLayout = 1;
            break;
          }
          alreadyComputedNextLayout = 0;
          mainContentDim += nextContentDim;
          endLine = i + 1;
        }

        // <Loop B> Layout flexible children and allocate empty space

        // In order to position the elements in the main axis, we have two
        // controls. The space between the beginning and the first element
        // and the space between each two elements.
        var /*float*/leadingMainDim = 0;
        var /*float*/betweenMainDim = 0;

        // The remaining available space that needs to be allocated
        var /*float*/remainingMainDim = 0;
        if (!isUndefined(node.layout[dim[mainAxis]])) {
          remainingMainDim = definedMainDim - mainContentDim;
        } else {
          remainingMainDim = fmaxf(mainContentDim, 0) - mainContentDim;
        }

        // If there are flexible children in the mix, they are going to fill the
        // remaining space
        if (flexibleChildrenCount !== 0) {
          var /*float*/flexibleMainDim = remainingMainDim / totalFlexible;

          // The non flexible children can overflow the container, in this case
          // we should just assume that there is no space available.
          if (flexibleMainDim < 0) {
            flexibleMainDim = 0;
          }
          // We iterate over the full array and only apply the action on flexible
          // children. This is faster than actually allocating a new array that
          // contains only flexible children.
          for (var /*int*/i = startLine; i < endLine; ++i) {
            var /*css_node_t**/child = node.children[i];
            if (isFlex(child)) {
              // At this point we know the final size of the element in the main
              // dimension
              child.layout[dim[mainAxis]] = flexibleMainDim * getFlex(child) + getPaddingAndBorderAxis(child, mainAxis);

              var /*float*/maxWidth = CSS_UNDEFINED;
              if (mainAxis === CSS_FLEX_DIRECTION_ROW) {
                // do nothing
              } else if (isDimDefined(node, CSS_FLEX_DIRECTION_ROW)) {
                maxWidth = node.layout[dim[CSS_FLEX_DIRECTION_ROW]] - getPaddingAndBorderAxis(node, CSS_FLEX_DIRECTION_ROW);
              } else {
                maxWidth = parentMaxWidth - getMarginAxis(node, CSS_FLEX_DIRECTION_ROW) - getPaddingAndBorderAxis(node, CSS_FLEX_DIRECTION_ROW);
              }

              // And we recursively call the layout algorithm for this child
              layoutNode(child, maxWidth);
            }
          }

          // We use justifyContent to figure out how to allocate the remaining
          // space available
        } else {
          var /*css_justify_t*/justifyContent = getJustifyContent(node);
          if (justifyContent === CSS_JUSTIFY_FLEX_START) {
            // Do nothing
          } else if (justifyContent === CSS_JUSTIFY_CENTER) {
            leadingMainDim = remainingMainDim / 2;
          } else if (justifyContent === CSS_JUSTIFY_FLEX_END) {
            leadingMainDim = remainingMainDim;
          } else if (justifyContent === CSS_JUSTIFY_SPACE_BETWEEN) {
            remainingMainDim = fmaxf(remainingMainDim, 0);
            if (flexibleChildrenCount + nonFlexibleChildrenCount - 1 !== 0) {
              betweenMainDim = remainingMainDim / (flexibleChildrenCount + nonFlexibleChildrenCount - 1);
            } else {
              betweenMainDim = 0;
            }
          } else if (justifyContent === CSS_JUSTIFY_SPACE_AROUND) {
            // Space on the edges is half of the space between elements
            betweenMainDim = remainingMainDim / (flexibleChildrenCount + nonFlexibleChildrenCount);
            leadingMainDim = betweenMainDim / 2;
          }
        }

        // <Loop C> Position elements in the main axis and compute dimensions

        // At this point, all the children have their dimensions set. We need to
        // find their position. In order to do that, we accumulate data in
        // variables that are also useful to compute the total dimensions of the
        // container!
        var /*float*/crossDim = 0;
        var /*float*/mainDim = leadingMainDim + getPaddingAndBorder(node, leading[mainAxis]);

        for (var /*int*/i = startLine; i < endLine; ++i) {
          var /*css_node_t**/child = node.children[i];

          if (getPositionType(child) === CSS_POSITION_ABSOLUTE && isPosDefined(child, leading[mainAxis])) {
            // In case the child is position absolute and has left/top being
            // defined, we override the position to whatever the user said
            // (and margin/border).
            child.layout[pos[mainAxis]] = getPosition(child, leading[mainAxis]) + getBorder(node, leading[mainAxis]) + getMargin(child, leading[mainAxis]);
          } else {
            // If the child is position absolute (without top/left) or relative,
            // we put it at the current accumulated offset.
            child.layout[pos[mainAxis]] += mainDim;
          }

          // Now that we placed the element, we need to update the variables
          // We only need to do that for relative elements. Absolute elements
          // do not take part in that phase.
          if (getPositionType(child) === CSS_POSITION_RELATIVE) {
            // The main dimension is the sum of all the elements dimension plus
            // the spacing.
            mainDim += betweenMainDim + getDimWithMargin(child, mainAxis);
            // The cross dimension is the max of the elements dimension since there
            // can only be one element in that cross dimension.
            crossDim = fmaxf(crossDim, getDimWithMargin(child, crossAxis));
          }
        }

        var /*float*/containerMainAxis = node.layout[dim[mainAxis]];
        // If the user didn't specify a width or height, and it has not been set
        // by the container, then we set it via the children.
        if (isUndefined(node.layout[dim[mainAxis]])) {
          containerMainAxis = fmaxf(
          // We're missing the last padding at this point to get the final
          // dimension
          mainDim + getPaddingAndBorder(node, trailing[mainAxis]),
          // We can never assign a width smaller than the padding and borders
          getPaddingAndBorderAxis(node, mainAxis));
        }

        var /*float*/containerCrossAxis = node.layout[dim[crossAxis]];
        if (isUndefined(node.layout[dim[crossAxis]])) {
          containerCrossAxis = fmaxf(
          // For the cross dim, we add both sides at the end because the value
          // is aggregate via a max function. Intermediate negative values
          // can mess this computation otherwise
          crossDim + getPaddingAndBorderAxis(node, crossAxis), getPaddingAndBorderAxis(node, crossAxis));
        }

        // <Loop D> Position elements in the cross axis

        for (var /*int*/i = startLine; i < endLine; ++i) {
          var /*css_node_t**/child = node.children[i];

          if (getPositionType(child) === CSS_POSITION_ABSOLUTE && isPosDefined(child, leading[crossAxis])) {
            // In case the child is absolutely positionned and has a
            // top/left/bottom/right being set, we override all the previously
            // computed positions to set it correctly.
            child.layout[pos[crossAxis]] = getPosition(child, leading[crossAxis]) + getBorder(node, leading[crossAxis]) + getMargin(child, leading[crossAxis]);
          } else {
            var /*float*/leadingCrossDim = getPaddingAndBorder(node, leading[crossAxis]);

            // For a relative children, we're either using alignItems (parent) or
            // alignSelf (child) in order to determine the position in the cross axis
            if (getPositionType(child) === CSS_POSITION_RELATIVE) {
              var /*css_align_t*/alignItem = getAlignItem(node, child);
              if (alignItem === CSS_ALIGN_FLEX_START) {
                // Do nothing
              } else if (alignItem === CSS_ALIGN_STRETCH) {
                // You can only stretch if the dimension has not already been set
                // previously.
                if (!isDimDefined(child, crossAxis)) {
                  child.layout[dim[crossAxis]] = fmaxf(containerCrossAxis - getPaddingAndBorderAxis(node, crossAxis) - getMarginAxis(child, crossAxis),
                  // You never want to go smaller than padding
                  getPaddingAndBorderAxis(child, crossAxis));
                }
              } else {
                // The remaining space between the parent dimensions+padding and child
                // dimensions+margin.
                var /*float*/remainingCrossDim = containerCrossAxis - getPaddingAndBorderAxis(node, crossAxis) - getDimWithMargin(child, crossAxis);

                if (alignItem === CSS_ALIGN_CENTER) {
                  leadingCrossDim += remainingCrossDim / 2;
                } else {
                  // CSS_ALIGN_FLEX_END
                  leadingCrossDim += remainingCrossDim;
                }
              }
            }

            // And we apply the position
            child.layout[pos[crossAxis]] += linesCrossDim + leadingCrossDim;
          }
        }

        linesCrossDim += crossDim;
        linesMainDim = fmaxf(linesMainDim, mainDim);
        startLine = endLine;
      }

      // If the user didn't specify a width or height, and it has not been set
      // by the container, then we set it via the children.
      if (isUndefined(node.layout[dim[mainAxis]])) {
        node.layout[dim[mainAxis]] = fmaxf(
        // We're missing the last padding at this point to get the final
        // dimension
        linesMainDim + getPaddingAndBorder(node, trailing[mainAxis]),
        // We can never assign a width smaller than the padding and borders
        getPaddingAndBorderAxis(node, mainAxis));
      }

      if (isUndefined(node.layout[dim[crossAxis]])) {
        node.layout[dim[crossAxis]] = fmaxf(
        // For the cross dim, we add both sides at the end because the value
        // is aggregate via a max function. Intermediate negative values
        // can mess this computation otherwise
        linesCrossDim + getPaddingAndBorderAxis(node, crossAxis), getPaddingAndBorderAxis(node, crossAxis));
      }

      // <Loop E> Calculate dimensions for absolutely positioned elements

      for (var /*int*/i = 0; i < node.children.length; ++i) {
        var /*css_node_t**/child = node.children[i];
        if (getPositionType(child) == CSS_POSITION_ABSOLUTE) {
          // Pre-fill dimensions when using absolute position and both offsets for the axis are defined (either both
          // left and right or top and bottom).
          for (var /*int*/ii = 0; ii < 2; ii++) {
            var /*css_flex_direction_t*/axis = ii !== 0 ? CSS_FLEX_DIRECTION_ROW : CSS_FLEX_DIRECTION_COLUMN;
            if (!isUndefined(node.layout[dim[axis]]) && !isDimDefined(child, axis) && isPosDefined(child, leading[axis]) && isPosDefined(child, trailing[axis])) {
              child.layout[dim[axis]] = fmaxf(node.layout[dim[axis]] - getPaddingAndBorderAxis(node, axis) - getMarginAxis(child, axis) - getPosition(child, leading[axis]) - getPosition(child, trailing[axis]),
              // You never want to go smaller than padding
              getPaddingAndBorderAxis(child, axis));
            }
          }
          for (var /*int*/ii = 0; ii < 2; ii++) {
            var /*css_flex_direction_t*/axis = ii !== 0 ? CSS_FLEX_DIRECTION_ROW : CSS_FLEX_DIRECTION_COLUMN;
            if (isPosDefined(child, trailing[axis]) && !isPosDefined(child, leading[axis])) {
              child.layout[leading[axis]] = node.layout[dim[axis]] - child.layout[dim[axis]] - getPosition(child, trailing[axis]);
            }
          }
        }
      }
    };
  }();

  // https://github.com/Flipboard/react-canvas

  /**
   * This computes the CSS layout for a RenderLayer tree and mutates the frame
   * objects at each node.
   *
   * @param {Renderlayer} root
   * @return {Object}
   */
  function layoutNode(root) {
    var rootNode = createNode(root);
    computeLayout(rootNode);
    walkNode(rootNode);
    return rootNode;
  }

  function createNode(layer) {
    return {
      layer: layer,
      layout: {
        width: undefined, // computeLayout will mutate
        height: undefined, // computeLayout will mutate
        top: 0,
        left: 0
      },
      style: layer.style || layer.attributes && layer.attributes.style || {},
      children: (layer.children || []).map(createNode)
    };
  }

  function walkNode(node, parentLeft, parentTop) {
    node.layer.frame.x = node.layout.left + (parentLeft || 0);
    node.layer.frame.y = node.layout.top + (parentTop || 0);
    node.layer.frame.width = node.layout.width;
    node.layer.frame.height = node.layout.height;
    if (node.children && node.children.length > 0) {
      node.children.forEach(function (child) {
        walkNode(child, node.layer.frame.x, node.layer.frame.y);
      });
    }
  }

  /**
   * Virtual DOM Node
   * @typedef VNode
   * @property {string | function} nodeName The string of the DOM node to create or Component constructor to render
   * @property {Array<VNode | string>} children The children of node
   * @property {string | number | undefined} key The key used to identify this VNode in a list
   * @property {object} attributes The properties of this VNode
   */
  var VNode = function VNode() {};

  var nodeId = 1;
  function uniqueId() {
    return nodeId++;
  }

  var docMap = {};

  function addDoc(id, doc) {
    docMap[id] = doc;
  }

  function getDoc(id) {
    return docMap[id];
  }

  function removeDoc(id) {
    delete docMap[id];
  }

  function insertIndex(target, list, newIndex) {
    if (newIndex < 0) {
      newIndex = 0;
    }
    var before = list[newIndex - 1];
    var after = list[newIndex];
    list.splice(newIndex, 0, target);

    before && (before.nextSibling = target);
    target.previousSibling = before;
    target.nextSibling = after;
    after && (after.previousSibling = target);

    return newIndex;
  }

  function moveIndex(target, list, newIndex) {
    var index = list.indexOf(target);

    if (index < 0) {
      return -1;
    }

    var before = list[index - 1];
    var after = list[index + 1];
    before && (before.nextSibling = after);
    after && (after.previousSibling = before);

    list.splice(index, 1);
    var newIndexAfter = newIndex;
    if (index <= newIndex) {
      newIndexAfter = newIndex - 1;
    }
    var beforeNew = list[newIndexAfter - 1];
    var afterNew = list[newIndexAfter];
    list.splice(newIndexAfter, 0, target);

    beforeNew && (beforeNew.nextSibling = target);
    target.previousSibling = beforeNew;
    target.nextSibling = afterNew;
    afterNew && (afterNew.previousSibling = target);

    if (index === newIndexAfter) {
      return -1;
    }
    return newIndex;
  }

  function removeIndex(target, list, changeSibling) {
    var index = list.indexOf(target);

    if (index < 0) {
      return;
    }
    if (changeSibling) {
      var before = list[index - 1];
      var after = list[index + 1];
      before && (before.nextSibling = after);
      after && (after.previousSibling = before);
    }
    list.splice(index, 1);
  }

  function linkParent(node, parent) {
    node.parentNode = parent;
    if (parent.docId) {
      node.docId = parent.docId;
      node.ownerDocument = parent.ownerDocument;
      node.ownerDocument.nodeMap[node.nodeId] = node;
      node.depth = parent.depth + 1;
    }

    node.childNodes && node.childNodes.forEach(function (child) {
      linkParent(child, node);
    });
  }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  var displayMap = {
  	div: 'block',
  	span: 'inline-block'
  };

  function registerNode(docId, node) {
  	var doc = getDoc(docId);
  	doc.nodeMap[node.nodeId] = node;
  }

  var Element = function () {
  	function Element(type) {
  		_classCallCheck(this, Element);

  		this.nodeType = 1;
  		this.nodeId = uniqueId();
  		this.ref = this.nodeId;
  		this.type = type;
  		this.attributes = {};
  		this.style = {
  			display: displayMap[type]
  		};
  		this.classStyle = {};
  		this.event = {};
  		this.childNodes = [];

  		this.nodeName = this.type;

  		this.parentNode = null;
  		this.nextSibling = null;
  		this.previousSibling = null;
  		this.firstChild = null;
  	}

  	Element.prototype.appendChild = function appendChild(node) {
  		if (!node.parentNode) {
  			linkParent(node, this);
  			insertIndex(node, this.childNodes, this.childNodes.length, true);

  			if (this.docId != undefined) {
  				registerNode(this.docId, node);
  			}

  			//this.ownerDocument.addElement(this.ref, node.toJSON(), -1)
  		} else {
  			node.parentNode.removeChild(node);

  			this.appendChild(node);

  			return;
  		}

  		this.firstChild = this.childNodes[0];
  	};

  	Element.prototype.insertBefore = function insertBefore(node, before) {
  		if (!node.parentNode) {
  			linkParent(node, this);
  			var index = insertIndex(node, this.childNodes, this.childNodes.indexOf(before), true);
  			if (this.docId != undefined) {
  				registerNode(this.docId, node);
  			}

  			//this.ownerDocument.addElement(this.ref, node.toJSON(), index)
  		} else {
  			node.parentNode.removeChild(node);
  			this.insertBefore(node, before);
  			return;
  		}

  		this.firstChild = this.childNodes[0];
  	};

  	Element.prototype.insertAfter = function insertAfter(node, after) {
  		if (node.parentNode && node.parentNode !== this) {
  			return;
  		}
  		if (node === after || node.previousSibling && node.previousSibling === after) {
  			return;
  		}
  		if (!node.parentNode) {
  			linkParent(node, this);
  			var index = insertIndex(node, this.childNodes, this.childNodes.indexOf(after) + 1, true);

  			if (this.docId != undefined) {
  				registerNode(this.docId, node);
  			}

  			//this.ownerDocument.addElement(this.ref, node.toJSON(), index)
  		} else {
  			var _index = moveIndex(node, this.childNodes, this.childNodes.indexOf(after) + 1);

  			//this.ownerDocument.moveElement(node.ref, this.ref, index)
  		}

  		this.firstChild = this.childNodes[0];
  	};

  	Element.prototype.removeChild = function removeChild(node) {
  		if (node.parentNode) {
  			removeIndex(node, this.childNodes, true);

  			this.ownerDocument.removeElement(node.ref);
  		}

  		node.parentNode = null;

  		this.firstChild = this.childNodes[0];
  	};

  	Element.prototype.setAttribute = function setAttribute(key, value, silent) {
  		if (this.attributes[key] === value && silent !== false) {
  			return;
  		}
  		this.attributes[key] = value;
  	};

  	Element.prototype.removeAttribute = function removeAttribute(key) {
  		if (this.attributes[key]) {
  			delete this.attributes[key];
  		}
  	};

  	Element.prototype.setStyle = function setStyle(key, value, silent) {
  		if (this.style[key] === value && silent !== false) {
  			return;
  		}
  		this.style[key] = value;
  		if (!silent && this.ownerDocument) {
  			var result = {};
  			result[key] = value;

  			this.ownerDocument.setStyles(this.ref, result);
  		}
  	};

  	Element.prototype.setStyles = function setStyles(styles) {
  		Object.assign(this.style, styles);
  		if (this.ownerDocument) {

  			this.ownerDocument.setStyles(this.ref, styles);
  		}
  	};

  	Element.prototype.setClassStyle = function setClassStyle(classStyle) {
  		for (var key in this.classStyle) {
  			this.classStyle[key] = '';
  		}

  		Object.assign(this.classStyle, classStyle);

  		this.ownerDocument.setStyles(this.ref, this.toStyle());
  	};

  	Element.prototype.addEventListener = function addEventListener(type, handler) {
  		if (!this.event[type]) {
  			this.event[type] = handler;

  			//this.ownerDocument.addEvent(this.ref, type)
  		}
  	};

  	Element.prototype.removeEventListener = function removeEventListener(type) {
  		if (this.event[type]) {
  			delete this.event[type];
  			var doc = getDoc(this.docId);
  			doc.nodeMap[this.ref] && doc.nodeMap[this.ref].event && doc.nodeMap[this.ref].event[type] ? doc.nodeMap[this.ref].event[type] = null : '';

  			this.ownerDocument.removeEvent(this.ref, type);
  		}
  	};

  	Element.prototype.fireEvent = function fireEvent(type, e) {
  		var handler = this.event[type];
  		if (handler) {
  			return handler.call(this, e);
  		}
  	};

  	Element.prototype.toStyle = function toStyle() {
  		return Object.assign({}, this.classStyle, this.style);
  	};

  	Element.prototype.getComputedStyle = function getComputedStyle() {};

  	Element.prototype.toJSON = function toJSON() {
  		var result = {
  			id: this.ref,
  			type: this.type,
  			docId: this.docId || -10000,
  			attributes: this.attributes ? this.attributes : {}
  		};
  		result.attributes.style = this.toStyle();

  		var event = Object.keys(this.event);
  		if (event.length) {
  			result.event = event;
  		}

  		if (this.childNodes.length) {
  			result.children = this.childNodes.map(function (child) {
  				return child.toJSON();
  			});
  		}
  		return result;
  	};

  	Element.prototype.replaceChild = function replaceChild(newChild, oldChild) {
  		this.insertBefore(newChild, oldChild);
  		this.removeChild(oldChild);
  	};

  	Element.prototype.destroy = function destroy() {
  		var doc = getDoc(this.docId);

  		if (doc) {
  			delete doc.nodeMap[this.nodeId];
  		}

  		this.parentNode = null;
  		this.childNodes.forEach(function (child) {
  			child.destroy();
  		});
  	};

  	return Element;
  }();

  function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  var Document = function () {
    function Document(id) {
      _classCallCheck$1(this, Document);

      this.id = id;
      addDoc(id, this);
      this.nodeMap = {};
      this._isMockDocument = true;
    }

    // createBody(type, props) {
    //   if (!this.body) {
    //     const el = new Element(type, props)
    //     el.didMount = true
    //     el.ownerDocument = this
    //     el.docId = this.id
    //     el.style.alignItems = 'flex-start'
    //     this.body = el
    //   }

    //   return this.body
    // }

    Document.prototype.createElement = function createElement(tagName, props) {
      var el = new Element(tagName, props);
      el.ownerDocument = this;
      el.docId = this.id;
      return el;
    };

    Document.prototype.destroy = function destroy() {
      delete this.listener;
      delete this.nodeMap;
      removeDoc(this.id);
    };

    Document.prototype.addEventListener = function addEventListener(ref, type) {
      //document.addEvent(this.id, ref, type)
    };

    Document.prototype.removeEventListener = function removeEventListener(ref, type) {
      //document.removeEvent(this.id, ref, type)
    };

    return Document;
  }();

  var doc = {
  	document: new Document(0)
  };

  /**
   * @typedef {import('./component').Component} Component
   * @typedef {import('./vnode').VNode} VNode
   */

  /**
   * Global options
   * @public
   * @typedef Options
   * @property {boolean} [syncComponentUpdates] If `true`, `prop` changes trigger synchronous component updates. Defaults to true.
   * @property {(vnode: VNode) => void} [vnode] Processes all created VNodes.
   * @property {(component: Component) => void} [afterMount] Hook invoked after a component is mounted.
   * @property {(component: Component) => void} [afterUpdate] Hook invoked after the DOM is updated with a component's latest render.
   * @property {(component: Component) => void} [beforeUnmount] Hook invoked immediately before a component is unmounted.
   * @property {(rerender: function) => void} [debounceRendering] Hook invoked whenever a rerender is requested. Can be used to debounce rerenders.
   * @property {(event: Event) => Event | void} [event] Hook invoked before any Omi event listeners. The return value (if any) replaces the native browser event given to event listeners
   */

  /** @type {Options}  */
  var options = {
    runTimeComponent: {},
    styleCache: [],
    staticStyleMapping: {},
    document: doc.document
  };

  var styleId = 0;

  function getCtorName(ctor) {
    for (var i = 0, len = options.styleCache.length; i < len; i++) {
      var item = options.styleCache[i];

      if (item.ctor === ctor) {
        return item.attrName;
      }
    }

    var attrName = '_ss' + styleId;
    options.styleCache.push({ ctor: ctor, attrName: attrName });
    styleId++;

    return attrName;
  }

  // many thanks to https://github.com/thomaspark/scoper/
  function scoper(css, prefix) {
    prefix = '[' + prefix.toLowerCase() + ']';
    // https://www.w3.org/TR/css-syntax-3/#lexical
    css = css.replace(/\/\*[^*]*\*+([^/][^*]*\*+)*\//g, '');
    // eslint-disable-next-line
    var re = new RegExp('([^\r\n,{}:]+)(:[^\r\n,{}]+)?(,(?=[^{}]*{)|\s*{)', 'g');
    /**
     * Example:
     *
     * .classname::pesudo { color:red }
     *
     * g1 is normal selector `.classname`
     * g2 is pesudo class or pesudo element
     * g3 is the suffix
     */
    css = css.replace(re, function (g0, g1, g2, g3) {
      if (typeof g2 === 'undefined') {
        g2 = '';
      }

      /* eslint-ignore-next-line */
      if (g1.match(/^\s*(@media|\d+%?|@-webkit-keyframes|@keyframes|to|from|@font-face)/)) {
        return g1 + g2 + g3;
      }

      var appendClass = g1.replace(/(\s*)$/, '') + prefix + g2;
      //let prependClass = prefix + ' ' + g1.trim() + g2;

      return appendClass + g3;
      //return appendClass + ',' + prependClass + g3;
    });

    return css;
  }

  function addStyle(cssText, id, parent) {
    id = id.toLowerCase();
    var ele = document.getElementById(id);
    var head = parent || document.getElementsByTagName('head')[0];
    if (ele && ele.parentNode === head) {
      head.removeChild(ele);
    }

    var someThingStyles = document.createElement('style');
    head.appendChild(someThingStyles);
    someThingStyles.setAttribute('type', 'text/css');
    someThingStyles.setAttribute('id', id);
    if (window.ActiveXObject) {
      someThingStyles.styleSheet.cssText = cssText;
    } else {
      someThingStyles.textContent = cssText;
    }
  }

  function addStyleToHead(style, attr, parent) {
    //parent is shadowroot
    if (parent || !options.staticStyleMapping[attr]) {
      addStyle(scoper(style, attr), attr, parent);
      //don't cache when is shadowroot
      if (!parent) {
        options.staticStyleMapping[attr] = true;
      }
    }
  }

  var stack = [];

  var EMPTY_CHILDREN = [];

  /**
   * JSX/hyperscript reviver.
   * @see http://jasonformat.com/wtf-is-jsx
   * Benchmarks: https://esbench.com/bench/57ee8f8e330ab09900a1a1a0
   *
   * Note: this is exported as both `h()` and `createElement()` for compatibility
   * reasons.
   *
   * Creates a VNode (virtual DOM element). A tree of VNodes can be used as a
   * lightweight representation of the structure of a DOM tree. This structure can
   * be realized by recursively comparing it against the current _actual_ DOM
   * structure, and applying only the differences.
   *
   * `h()`/`createElement()` accepts an element name, a list of attributes/props,
   * and optionally children to append to the element.
   *
   * @example The following DOM tree
   *
   * `<div id="foo" name="bar">Hello!</div>`
   *
   * can be constructed using this function as:
   *
   * `h('div', { id: 'foo', name : 'bar' }, 'Hello!');`
   *
   * @param {string | function} nodeName An element name. Ex: `div`, `a`, `span`, etc.
   * @param {object | null} attributes Any attributes/props to set on the created element.
   * @param {VNode[]} [rest] Additional arguments are taken to be children to
   *  append. Can be infinitely nested Arrays.
   *
   * @public
   */
  function h(nodeName, attributes) {
  	var children = EMPTY_CHILDREN,
  	    lastSimple = void 0,
  	    child = void 0,
  	    simple = void 0,
  	    i = void 0;
  	for (i = arguments.length; i-- > 2;) {
  		stack.push(arguments[i]);
  	}
  	if (attributes && attributes.children != null) {
  		if (!stack.length) stack.push(attributes.children);
  		delete attributes.children;
  	}
  	var p = new VNode();
  	if (nodeName !== 'text') {
  		while (stack.length) {
  			if ((child = stack.pop()) && child.pop !== undefined) {
  				for (i = child.length; i--;) {
  					stack.push(child[i]);
  				}
  			} else {
  				if (typeof child === 'boolean') child = null;

  				if (simple = typeof nodeName !== 'function') {
  					if (child == null) child = '';else if (typeof child === 'number') child = String(child);else if (typeof child !== 'string') simple = false;
  				}

  				if (simple && lastSimple) {
  					children[children.length - 1] += child;
  				} else if (children === EMPTY_CHILDREN) {
  					children = [child];
  				} else {
  					children.push(child);
  				}

  				lastSimple = simple;
  			}
  		}
  	} else {
  		p.value = stack.pop();
  	}

  	p.frame = {
  		"x": 0,
  		"y": 0,
  		"width": 0,
  		"height": 0
  	};
  	p.nodeName = nodeName;
  	p.children = children;
  	p.attributes = attributes == null ? {} : attributes;

  	p.key = p.attributes.key;

  	// if a "vnode hook" is defined, pass every created VNode to it
  	if (options.vnode !== undefined) options.vnode(p);

  	return p;
  }

  /**
   * Copy all properties from `props` onto `obj`.
   * @param {object} obj Object onto which properties should be copied.
   * @param {object} props Object from which to copy properties.
   * @returns {object}
   * @private
   */
  function extend(obj, props) {
    for (var i in props) {
      obj[i] = props[i];
    }return obj;
  }

  /** Invoke or update a ref, depending on whether it is a function or object ref.
   *  @param {object|function} [ref=null]
   *  @param {any} [value]
   */
  function applyRef(ref, value) {
    if (ref) {
      if (typeof ref == 'function') ref(value);else ref.current = value;
    }
  }

  /**
   * Call a function asynchronously, as soon as possible. Makes
   * use of HTML Promise to schedule the callback if available,
   * otherwise falling back to `setTimeout` (mainly for IE<11).
   * @type {(callback: function) => void}
   */
  var defer = typeof Promise == 'function' ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout;

  function getPath(obj) {
    if (Object.prototype.toString.call(obj) === '[object Array]') {
      var result = {};
      obj.forEach(function (item) {
        if (typeof item === 'string') {
          result[item] = true;
        } else {
          var tempPath = item[Object.keys(item)[0]];
          if (typeof tempPath === 'string') {
            result[tempPath] = true;
          } else {
            if (typeof tempPath[0] === 'string') {
              result[tempPath[0]] = true;
            } else {
              tempPath[0].forEach(function (path) {
                return result[path] = true;
              });
            }
          }
        }
      });
      return result;
    } else {
      return getUpdatePath(obj);
    }
  }

  function getUpdatePath(data) {
    var result = {};
    dataToPath(data, result);
    return result;
  }

  function dataToPath(data, result) {
    Object.keys(data).forEach(function (key) {
      result[key] = true;
      var type = Object.prototype.toString.call(data[key]);
      if (type === OBJECTTYPE) {
        _objToPath(data[key], key, result);
      } else if (type === ARRAYTYPE) {
        _arrayToPath(data[key], key, result);
      }
    });
  }

  function _objToPath(data, path, result) {
    Object.keys(data).forEach(function (key) {
      result[path + '.' + key] = true;
      delete result[path];
      var type = Object.prototype.toString.call(data[key]);
      if (type === OBJECTTYPE) {
        _objToPath(data[key], path + '.' + key, result);
      } else if (type === ARRAYTYPE) {
        _arrayToPath(data[key], path + '.' + key, result);
      }
    });
  }

  function _arrayToPath(data, path, result) {
    data.forEach(function (item, index) {
      result[path + '[' + index + ']'] = true;
      delete result[path];
      var type = Object.prototype.toString.call(item);
      if (type === OBJECTTYPE) {
        _objToPath(item, path + '[' + index + ']', result);
      } else if (type === ARRAYTYPE) {
        _arrayToPath(item, path + '[' + index + ']', result);
      }
    });
  }

  function getUse(data, paths) {
    var obj = [];
    paths.forEach(function (path, index) {
      var isPath = typeof path === 'string';
      if (isPath) {
        obj[index] = getTargetByPath(data, path);
      } else {
        var key = Object.keys(path)[0];
        var value = path[key];
        if (typeof value === 'string') {
          obj[index] = getTargetByPath(data, value);
        } else {
          var tempPath = value[0];
          if (typeof tempPath === 'string') {
            var tempVal = getTargetByPath(data, tempPath);
            obj[index] = value[1] ? value[1](tempVal) : tempVal;
          } else {
            var args = [];
            tempPath.forEach(function (path) {
              args.push(getTargetByPath(data, path));
            });
            obj[index] = value[1].apply(null, args);
          }
        }
        obj[key] = obj[index];
      }
    });
    return obj;
  }

  function getTargetByPath(origin, path) {
    var arr = path.replace(/]/g, '').replace(/\[/g, '.').split('.');
    var current = origin;
    for (var i = 0, len = arr.length; i < len; i++) {
      current = current[arr[i]];
    }
    return current;
  }

  /**
   * Clones the given VNode, optionally adding attributes/props and replacing its
   * children.
   * @param {import('./vnode').VNode} vnode The virtual DOM element to clone
   * @param {object} props Attributes/props to add when cloning
   * @param {Array<import('./vnode').VNode>} [rest] Any additional arguments will be used as replacement
   *  children.
   */
  function cloneElement(vnode, props) {
    return h(vnode.nodeName, extend(extend({}, vnode.attributes), props), arguments.length > 2 ? [].slice.call(arguments, 2) : vnode.children);
  }

  // render modes

  /** Do not re-render a component */
  var NO_RENDER = 0;
  /** Synchronously re-render a component and its children */
  var SYNC_RENDER = 1;
  /** Synchronously re-render a component, even if its lifecycle methods attempt to prevent it. */
  var FORCE_RENDER = 2;
  /** Queue asynchronous re-render of a component and it's children */
  var ASYNC_RENDER = 3;

  var ATTR_KEY = 'prevProps';

  /**
   * Managed queue of dirty components to be re-rendered
   * @type {Array<import('./component').Component>}
   */
  var items = [];

  /**
   * Enqueue a rerender of a component
   * @param {import('./component').Component} component The component to rerender
   */
  function enqueueRender(component) {
  	if (!component._dirty && (component._dirty = true) && items.push(component) == 1) {
  		(options.debounceRendering || defer)(rerender);
  	}
  }

  /** Rerender all enqueued dirty components */
  function rerender() {
  	var p = void 0;
  	while (p = items.pop()) {
  		if (p._dirty) renderComponent(p);
  	}
  }

  /**
   * Check if two nodes are equivalent.
   * @param {import('../dom').OmiElement} node DOM Node to compare
   * @param {import('../vnode').VNode} vnode Virtual DOM node to compare
   * @param {boolean} [hydrating=false] If true, ignores component constructors
   *  when comparing.
   * @private
   */
  function isSameNodeType(node, vnode, hydrating) {
  	if (typeof vnode === 'string' || typeof vnode === 'number') {
  		return node.splitText !== undefined;
  	}
  	if (typeof vnode.nodeName === 'string') {
  		return !node._componentConstructor && isNamedNode(node, vnode.nodeName);
  	}
  	return hydrating || node._componentConstructor === vnode.nodeName;
  }

  /**
   * Check if an Element has a given nodeName, case-insensitively.
   * @param {import('../dom').OmiElement} node A DOM Element to inspect the name of.
   * @param {string} nodeName Unnormalized name to compare against.
   */
  function isNamedNode(node, nodeName) {
  	return node.normalizedNodeName === nodeName || node.nodeName.toLowerCase() === nodeName.toLowerCase();
  }

  /**
   * Reconstruct Component-style `props` from a VNode.
   * Ensures default/fallback values from `defaultProps`:
   * Own-properties of `defaultProps` not present in `vnode.attributes` are added.
   * @param {import('../vnode').VNode} vnode The VNode to get props for
   * @returns {object} The props to use for this VNode
   */
  function getNodeProps(vnode) {
  	var props = extend({}, vnode.attributes);
  	props.children = vnode.children;

  	var defaultProps = vnode.nodeName.defaultProps;
  	if (defaultProps !== undefined) {
  		for (var i in defaultProps) {
  			if (props[i] === undefined) {
  				props[i] = defaultProps[i];
  			}
  		}
  	}

  	return props;
  }

  /**
   * A DOM event listener
   * @typedef {(e: Event) => void} EventListner
   */

  /**
   * A mapping of event types to event listeners
   * @typedef {Object.<string, EventListener>} EventListenerMap
   */

  /**
   * Properties Omi adds to elements it creates
   * @typedef OmiElementExtensions
   * @property {string} [normalizedNodeName] A normalized node name to use in diffing
   * @property {EventListenerMap} [_listeners] A map of event listeners added by components to this DOM node
   * @property {import('../component').Component} [_component] The component that rendered this DOM node
   * @property {function} [_componentConstructor] The constructor of the component that rendered this DOM node
   */

  /**
   * A DOM element that has been extended with Omi properties
   * @typedef {Element & ElementCSSInlineStyle & OmiElementExtensions} OmiElement
   */

  /**
   * Create an element with the given nodeName.
   * @param {string} nodeName The DOM node to create
   * @param {boolean} [isSvg=false] If `true`, creates an element within the SVG
   *  namespace.
   * @returns {OmiElement} The created DOM node
   */
  function createNode$1(nodeName, isSvg) {
  	/** @type {OmiElement} */
  	var node = isSvg ? options.document.createElementNS('http://www.w3.org/2000/svg', nodeName) : options.document.createElement(nodeName);
  	node.normalizedNodeName = nodeName;
  	return node;
  }

  /**
   * Remove a child node from its parent if attached.
   * @param {Node} node The node to remove
   */
  function removeNode(node) {
  	var parentNode = node.parentNode;
  	if (parentNode) parentNode.removeChild(node);
  }

  /**
   * Set a named attribute on the given Node, with special behavior for some names
   * and event handlers. If `value` is `null`, the attribute/handler will be
   * removed.
   * @param {OmiElement} node An element to mutate
   * @param {string} name The name/key to set, such as an event or attribute name
   * @param {*} old The last value that was set for this name/node pair
   * @param {*} value An attribute value, such as a function to be used as an
   *  event handler
   * @param {boolean} isSvg Are we currently diffing inside an svg?
   * @private
   */
  function setAccessor(node, name, old, value, isSvg, store) {
  	if (name === 'className') name = 'class';

  	if (name === 'key') {
  		// ignore
  	} else if (name === 'ref') {
  		applyRef(old, null);
  		applyRef(value, node);
  	} else if (name === 'class' && !isSvg) {
  		node.className = value || '';
  	} else if (name === 'style') {
  		node.style = value;
  		// if (!value || typeof value==='string' || typeof old==='string') {
  		// 	node.style.cssText = value || '';
  		// }
  		// if (value && typeof value==='object') {
  		// 	if (typeof old!=='string') {
  		// 		for (let i in old) if (!(i in value)) node.style[i] = '';
  		// 	}
  		// 	for (let i in value) {
  		// 		node.style[i] = typeof value[i]==='number' && IS_NON_DIMENSIONAL.test(i)===false ? (value[i]+'px') : value[i];
  		// 	}
  		// }
  	} else if (name === 'dangerouslySetInnerHTML') {
  		if (value) node.innerHTML = value.__html || '';
  	} else if (name[0] == 'o' && name[1] == 'n') {
  		var useCapture = name !== (name = name.replace(/Capture$/, ''));
  		name = name.toLowerCase().substring(2);
  		if (value) {
  			if (!old) node.addEventListener(name, eventProxy, useCapture);
  		} else {
  			node.removeEventListener(name, eventProxy, useCapture);
  		}
  		(node._listeners || (node._listeners = {}))[name] = value && store ? value.bind(store) : value;
  	} else if (name !== 'list' && name !== 'type' && !isSvg && name in node) {
  		// Attempt to set a DOM property to the given value.
  		// IE & FF throw for certain property-value combinations.
  		try {
  			node[name] = value == null ? '' : value;
  		} catch (e) {}
  		if ((value == null || value === false) && name != 'spellcheck') node.removeAttribute(name);
  	} else {
  		var ns = isSvg && name !== (name = name.replace(/^xlink:?/, ''));
  		// spellcheck is treated differently than all other boolean values and
  		// should not be removed when the value is `false`. See:
  		// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-spellcheck
  		if (value == null || value === false) {
  			if (ns) node.removeAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase());else node.removeAttribute(name);
  		} else if (typeof value !== 'function') {
  			if (ns) node.setAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase(), value);else node.setAttribute(name, value);
  		}
  	}
  }

  /**
   * Proxy an event to hooked event handlers
   * @param {Event} e The event object from the browser
   * @private
   */
  function eventProxy(e) {
  	return this._listeners[e.type](options.event && options.event(e) || e);
  }

  /**
   * Queue of components that have been mounted and are awaiting componentDidMount
   * @type {Array<import('../component').Component>}
   */
  var mounts = [];

  /** Diff recursion count, used to track the end of the diff cycle. */
  var diffLevel = 0;

  /** Global flag indicating if the diff is currently within an SVG */
  var isSvgMode = false;

  /** Global flag indicating if the diff is performing hydration */
  var hydrating = false;

  /** Invoke queued componentDidMount lifecycle methods */
  function flushMounts() {
  	var c = void 0;
  	while (c = mounts.shift()) {
  		if (c.constructor.css) {
  			addStyleToHead(c.constructor.css, getCtorName(c.constructor));
  		}
  		if (c.props.css) {
  			addStyleToHead(c.props.css, '_ds' + c.elementId);
  		}
  		if (options.afterMount) options.afterMount(c);
  		//if (c.componentDidMount) c.componentDidMount();
  		if (c.store.installed) c.store.installed();
  	}
  }

  /**
   * Apply differences in a given vnode (and it's deep children) to a real DOM Node.
   * @param {import('../dom').OmiElement} dom A DOM node to mutate into the shape of a `vnode`
   * @param {import('../vnode').VNode} vnode A VNode (with descendants forming a tree) representing
   *  the desired DOM structure
   * @param {object} $ The current $
   * @param {boolean} mountAll Whether or not to immediately mount all components
   * @param {Element} parent ?
   * @param {boolean} componentRoot ?
   * @returns {import('../dom').OmiElement} The created/mutated element
   * @private
   */
  function diff(dom, vnode, $, mountAll, parent, componentRoot, store) {
  	// diffLevel having been 0 here indicates initial entry into the diff (not a subdiff)
  	if (!diffLevel++) {
  		// when first starting the diff, check if we're diffing an SVG or within an SVG
  		isSvgMode = parent != null && parent.ownerSVGElement !== undefined;

  		// hydration is indicated by the existing element to be diffed not having a prop cache
  		hydrating = dom != null && !(ATTR_KEY in dom);
  	}

  	var ret = idiff(dom, vnode, $, mountAll, componentRoot, store);

  	// append the element if its a new parent
  	if (parent && ret.parentNode !== parent) parent.appendChild(ret);

  	// diffLevel being reduced to 0 means we're exiting the diff
  	if (! --diffLevel) {
  		hydrating = false;
  		// invoke queued componentDidMount lifecycle methods
  		if (!componentRoot) flushMounts();
  	}

  	return ret;
  }

  /**
   * Internals of `diff()`, separated to allow bypassing diffLevel / mount flushing.
   * @param {import('../dom').OmiElement} dom A DOM node to mutate into the shape of a `vnode`
   * @param {import('../vnode').VNode} vnode A VNode (with descendants forming a tree) representing the desired DOM structure
   * @param {object} $ The current $
   * @param {boolean} mountAll Whether or not to immediately mount all components
   * @param {boolean} [componentRoot] ?
   * @private
   */
  function idiff(dom, vnode, $, mountAll, componentRoot, store) {
  	var out = dom,
  	    prevSvgMode = isSvgMode;

  	// empty values (null, undefined, booleans) render as empty Text nodes
  	if (vnode == null || typeof vnode === 'boolean') vnode = '';

  	// Fast case: Strings & Numbers create/update Text nodes.
  	if (typeof vnode === 'string' || typeof vnode === 'number') {

  		// update if it's already a Text node:
  		if (dom && dom.splitText !== undefined && dom.parentNode && (!dom._component || componentRoot)) {
  			/* istanbul ignore if */ /* Browser quirk that can't be covered: https://github.com/developit/Omi/commit/fd4f21f5c45dfd75151bd27b4c217d8003aa5eb9 */
  			if (dom.nodeValue != vnode) {
  				dom.nodeValue = vnode;
  			}
  		} else {
  			// it wasn't a Text node: replace it with one and recycle the old Element
  			out = document.createTextNode(vnode);
  			if (dom) {
  				if (dom.parentNode) dom.parentNode.replaceChild(out, dom);
  				recollectNodeTree(dom, true);
  			}
  		}

  		out[ATTR_KEY] = true;

  		return out;
  	}

  	// If the VNode represents a Component, perform a component diff:
  	var vnodeName = vnode.nodeName;
  	if (typeof vnodeName === 'function') {
  		return buildComponentFromVNode(dom, vnode, $, mountAll);
  	}

  	// Tracks entering and exiting SVG namespace when descending through the tree.
  	isSvgMode = vnodeName === 'svg' ? true : vnodeName === 'foreignObject' ? false : isSvgMode;

  	// If there's no existing element or it's the wrong type, create a new one:
  	vnodeName = String(vnodeName);
  	if (!dom || !isNamedNode(dom, vnodeName)) {
  		out = createNode$1(vnodeName, isSvgMode);

  		if (dom) {
  			// move children into the replacement node
  			while (dom.firstChild) {
  				out.appendChild(dom.firstChild);
  			} // if the previous Element was mounted into the DOM, replace it inline
  			if (dom.parentNode) dom.parentNode.replaceChild(out, dom);

  			// recycle the old element (skips non-Element node types)
  			recollectNodeTree(dom, true);
  		}
  	}

  	var fc = out.firstChild,
  	    props = out[ATTR_KEY],
  	    vchildren = vnode.children;

  	if (props == null) {
  		props = out[ATTR_KEY] = {};
  		for (var a = out.attributes, i = a.length; i--;) {
  			props[a[i].name] = a[i].value;
  		}
  	}

  	// Optimization: fast-path for elements containing a single TextNode:
  	if (!hydrating && vchildren && vchildren.length === 1 && typeof vchildren[0] === 'string' && fc != null && fc.splitText !== undefined && fc.nextSibling == null) {
  		if (fc.nodeValue != vchildren[0]) {
  			fc.nodeValue = vchildren[0];
  		}
  	}
  	// otherwise, if there are existing or new children, diff them:
  	else if (vchildren && vchildren.length || fc != null) {
  			innerDiffNode(out, vchildren, $, mountAll, hydrating || props.dangerouslySetInnerHTML != null, store);
  		}

  	// Apply attributes/props from VNode to the DOM Element:
  	diffAttributes(out, vnode.attributes, props, store);

  	// restore previous SVG mode: (in case we're exiting an SVG namespace)
  	isSvgMode = prevSvgMode;

  	return out;
  }

  /**
   * Apply child and attribute changes between a VNode and a DOM Node to the DOM.
   * @param {import('../dom').OmiElement} dom Element whose children should be compared & mutated
   * @param {Array<import('../vnode').VNode>} vchildren Array of VNodes to compare to `dom.childNodes`
   * @param {object} $ Implicitly descendant $ object (from most
   *  recent `getChildContext()`)
   * @param {boolean} mountAll Whether or not to immediately mount all components
   * @param {boolean} isHydrating if `true`, consumes externally created elements
   *  similar to hydration
   */
  function innerDiffNode(dom, vchildren, $, mountAll, isHydrating, store) {
  	var originalChildren = dom.childNodes,
  	    children = [],
  	    keyed = {},
  	    keyedLen = 0,
  	    min = 0,
  	    len = originalChildren.length,
  	    childrenLen = 0,
  	    vlen = vchildren ? vchildren.length : 0,
  	    j = void 0,
  	    c = void 0,
  	    f = void 0,
  	    vchild = void 0,
  	    child = void 0;

  	// Build up a map of keyed children and an Array of unkeyed children:
  	if (len !== 0) {
  		for (var i = 0; i < len; i++) {
  			var _child = originalChildren[i],
  			    props = _child[ATTR_KEY],
  			    key = vlen && props ? _child._component ? _child._component.__key : props.key : null;
  			if (key != null) {
  				keyedLen++;
  				keyed[key] = _child;
  			} else if (props || (_child.splitText !== undefined ? isHydrating ? _child.nodeValue.trim() : true : isHydrating)) {
  				children[childrenLen++] = _child;
  			}
  		}
  	}

  	if (vlen !== 0) {
  		for (var _i = 0; _i < vlen; _i++) {
  			vchild = vchildren[_i];
  			child = null;

  			// attempt to find a node based on key matching
  			var _key = vchild.key;
  			if (_key != null) {
  				if (keyedLen && keyed[_key] !== undefined) {
  					child = keyed[_key];
  					keyed[_key] = undefined;
  					keyedLen--;
  				}
  			}
  			// attempt to pluck a node of the same type from the existing children
  			else if (min < childrenLen) {
  					for (j = min; j < childrenLen; j++) {
  						if (children[j] !== undefined && isSameNodeType(c = children[j], vchild, isHydrating)) {
  							child = c;
  							children[j] = undefined;
  							if (j === childrenLen - 1) childrenLen--;
  							if (j === min) min++;
  							break;
  						}
  					}
  				}

  			// morph the matched/found/created DOM child to match vchild (deep)
  			child = idiff(child, vchild, $, mountAll, null, store);

  			f = originalChildren[_i];
  			if (child && child !== dom && child !== f) {
  				if (f == null) {
  					dom.appendChild(child);
  				} else if (child === f.nextSibling) {
  					removeNode(f);
  				} else {
  					dom.insertBefore(child, f);
  				}
  			}
  		}
  	}

  	// remove unused keyed children:
  	if (keyedLen) {
  		for (var _i2 in keyed) {
  			if (keyed[_i2] !== undefined) recollectNodeTree(keyed[_i2], false);
  		}
  	}

  	// remove orphaned unkeyed children:
  	while (min <= childrenLen) {
  		if ((child = children[childrenLen--]) !== undefined) recollectNodeTree(child, false);
  	}
  }

  /**
   * Recursively recycle (or just unmount) a node and its descendants.
   * @param {import('../dom').OmiElement} node DOM node to start
   *  unmount/removal from
   * @param {boolean} [unmountOnly=false] If `true`, only triggers unmount
   *  lifecycle, skips removal
   */
  function recollectNodeTree(node, unmountOnly) {
  	var component = node._component;
  	if (component) {
  		// if node is owned by a Component, unmount that component (ends up recursing back here)
  		unmountComponent(component);
  	} else {
  		// If the node's VNode had a ref function, invoke it with null here.
  		// (this is part of the React spec, and smart for unsetting references)
  		if (node[ATTR_KEY] != null) applyRef(node[ATTR_KEY].ref, null);

  		if (unmountOnly === false || node[ATTR_KEY] == null) {
  			removeNode(node);
  		}

  		removeChildren(node);
  	}
  }

  /**
   * Recollect/unmount all children.
   *	- we use .lastChild here because it causes less reflow than .firstChild
   *	- it's also cheaper than accessing the .childNodes Live NodeList
   */
  function removeChildren(node) {
  	node = node.lastChild;
  	while (node) {
  		var next = node.previousSibling;
  		recollectNodeTree(node, true);
  		node = next;
  	}
  }

  /**
   * Apply differences in attributes from a VNode to the given DOM Element.
   * @param {import('../dom').OmiElement} dom Element with attributes to diff `attrs` against
   * @param {object} attrs The desired end-state key-value attribute pairs
   * @param {object} old Current/previous attributes (from previous VNode or
   *  element's prop cache)
   */
  function diffAttributes(dom, attrs, old, store) {
  	var name = void 0;

  	// remove attributes no longer present on the vnode by setting them to undefined
  	for (name in old) {
  		if (!(attrs && attrs[name] != null) && old[name] != null) {
  			setAccessor(dom, name, old[name], old[name] = undefined, isSvgMode, store);
  		}
  	}

  	// add new & update changed attributes
  	for (name in attrs) {
  		if (name !== 'children' && name !== 'innerHTML' && (!(name in old) || attrs[name] !== (name === 'value' || name === 'checked' ? dom[name] : old[name]))) {
  			setAccessor(dom, name, old[name], old[name] = attrs[name], isSvgMode, store);
  		}
  	}
  }

  /**
   * Retains a pool of Components for re-use.
   * @type {Component[]}
   * @private
   */
  var recyclerComponents = [];

  /**
   * Create a component. Normalizes differences between PFC's and classful
   * Components.
   * @param {function} Ctor The constructor of the component to create
   * @param {object} props The initial props of the component
   * @param {object} $ The initial $ of the component
   * @returns {import('../component').Component}
   */
  function createComponent(Ctor, props, $) {
  	var inst = void 0,
  	    i = recyclerComponents.length;

  	inst = new Component(props, $);
  	inst.constructor = Ctor;
  	inst.render = doRender;
  	if (Ctor.store) {
  		inst.store = Ctor.store(inst, $);
  		inst.store.update = inst.update.bind(inst);
  	}

  	if (inst.$ && inst.$.data) {

  		if (inst.constructor.use) {
  			inst.constructor.updatePath = getPath(inst.constructor.use);
  			inst.using = getUse(inst.$.data, inst.constructor.use);
  			inst.$.instances.push(inst);
  		} else if (inst.use) {
  			var use = typeof inst.use === 'function' ? inst.use() : inst.use;
  			inst._updatePath = getPath(use);
  			inst.using = getUse(inst.$.data, use);
  			inst.$.instances.push(inst);
  		}
  	}

  	while (i--) {
  		if (recyclerComponents[i].constructor === Ctor) {
  			inst.nextBase = recyclerComponents[i].nextBase;
  			recyclerComponents.splice(i, 1);
  			return inst;
  		}
  	}

  	return inst;
  }

  /** The `.render()` method for a PFC backing instance. */
  function doRender(props, $) {
  	return this.constructor(props, this.store, this, $);
  }

  /**
   * Set a component's `props` and possibly re-render the component
   * @param {import('../component').Component} component The Component to set props on
   * @param {object} props The new props
   * @param {number} renderMode Render options - specifies how to re-render the component
   * @param {object} $ The new $
   * @param {boolean} mountAll Whether or not to immediately mount all components
   */
  function setComponentProps(component, props, renderMode, $, mountAll) {
  	if (component._disable) return;
  	component._disable = true;

  	component.__ref = props.ref;
  	component.__key = props.key;
  	delete props.ref;
  	delete props.key;

  	if (!component.base || mountAll) {
  		//if (component.componentWillMount) component.componentWillMount();
  		if (component.store.install) component.store.install();
  	} else {
  		// if (component.componentWillReceiveProps) {
  		// 	component.componentWillReceiveProps(props, $);
  		// }
  		if (component.store.receiveProps) {
  			component.__needUpdate_ = component.store.receiveProps(props, $);
  		}
  	}

  	if ($ && $ !== component.$) {
  		component.$ = $;
  	}

  	if (!component.prevProps) component.prevProps = component.props;
  	component.props = props;

  	component._disable = false;

  	if (renderMode !== NO_RENDER) {
  		if (renderMode === SYNC_RENDER || options.syncComponentUpdates !== false || !component.base) {
  			renderComponent(component, SYNC_RENDER, mountAll);
  		} else {
  			enqueueRender(component);
  		}
  	}

  	applyRef(component.__ref, component);
  }

  /**
   * Render a Component, triggering necessary lifecycle events and taking
   * High-Order Components into account.
   * @param {import('../component').Component} component The component to render
   * @param {number} [renderMode] render mode, see constants.js for available options.
   * @param {boolean} [mountAll] Whether or not to immediately mount all components
   * @param {boolean} [isChild] ?
   * @private
   */
  function renderComponent(component, renderMode, mountAll, isChild) {
  	if (component._disable) return;

  	var props = component.props,
  	    $ = component.$,
  	    previousProps = component.prevProps || props,
  	    isUpdate = component.base,
  	    nextBase = component.nextBase,
  	    initialBase = isUpdate || nextBase,
  	    initialChildComponent = component._component,
  	    skip = false,
  	    rendered = void 0,
  	    inst = void 0,
  	    cbase = void 0;

  	// if updating
  	if (isUpdate) {
  		component.props = previousProps;

  		if (component.__needUpdate_ !== false) {
  			skip = false;
  			if (component.store.beforeUpdate) {
  				component.store.beforeUpdate(props, $);
  			}
  		} else {
  			skip = true;
  		}
  		delete component.__needUpdate_;

  		component.props = props;
  	}

  	component.prevProps = component.prevContext = component.nextBase = null;
  	component._dirty = false;

  	if (!skip) {
  		options.runTimeComponent = component;
  		if (component.store.beforeRender) {
  			component.store.beforeRender();
  		}
  		rendered = component.render(props, $);
  		options.runTimeComponent = null;

  		var childComponent = rendered && rendered.nodeName,
  		    toUnmount = void 0,
  		    base = void 0;

  		if (typeof childComponent === 'function') {
  			// set up high order component link

  			var childProps = getNodeProps(rendered);
  			inst = initialChildComponent;

  			if (inst && inst.constructor === childComponent && childProps.key == inst.__key) {
  				setComponentProps(inst, childProps, SYNC_RENDER, $, false);
  			} else {
  				toUnmount = inst;

  				component._component = inst = createComponent(childComponent, childProps, $);
  				inst.nextBase = inst.nextBase || nextBase;
  				inst._parentComponent = component;
  				setComponentProps(inst, childProps, NO_RENDER, $, false);
  				renderComponent(inst, SYNC_RENDER, mountAll, true);
  			}

  			base = inst.base;
  		} else {
  			cbase = initialBase;

  			// destroy high order component link
  			toUnmount = initialChildComponent;
  			if (toUnmount) {
  				cbase = component._component = null;
  			}

  			if (initialBase || renderMode === SYNC_RENDER) {
  				if (cbase) cbase._component = null;
  				base = diff(cbase, rendered, $, mountAll || !isUpdate, initialBase && initialBase.parentNode, true, component.store);
  			}
  		}

  		if (initialBase && base !== initialBase && inst !== initialChildComponent) {
  			var baseParent = initialBase.parentNode;
  			if (baseParent && base !== baseParent) {
  				baseParent.replaceChild(base, initialBase);

  				if (!toUnmount) {
  					initialBase._component = null;
  					recollectNodeTree(initialBase, false);
  				}
  			}
  		}

  		if (toUnmount) {
  			unmountComponent(toUnmount);
  		}

  		component.base = base;
  		if (base && !isChild) {
  			var componentRef = component,
  			    t = component;
  			while (t = t._parentComponent) {
  				(componentRef = t).base = base;
  			}
  			base._component = componentRef;
  			base._componentConstructor = componentRef.constructor;
  		}
  	}

  	if (!isUpdate || mountAll) {
  		mounts.push(component);
  	} else if (!skip) {
  		// Ensure that pending componentDidMount() hooks of child components
  		// are called before the componentDidUpdate() hook in the parent.
  		// Note: disabled as it causes duplicate hooks, see https://github.com/developit/Omi/issues/750
  		// flushMounts();

  		if (component.store.updated) {
  			component.store.updated(previousProps);
  		}
  		if (options.afterUpdate) options.afterUpdate(component);
  	}

  	while (component._renderCallbacks.length) {
  		component._renderCallbacks.pop().call(component);
  	}if (!diffLevel && !isChild) flushMounts();
  }

  /**
   * Apply the Component referenced by a VNode to the DOM.
   * @param {import('../dom').OmiElement} dom The DOM node to mutate
   * @param {import('../vnode').VNode} vnode A Component-referencing VNode
   * @param {object} $ The current $
   * @param {boolean} mountAll Whether or not to immediately mount all components
   * @returns {import('../dom').OmiElement} The created/mutated element
   * @private
   */
  function buildComponentFromVNode(dom, vnode, $, mountAll) {
  	var c = dom && dom._component,
  	    originalComponent = c,
  	    oldDom = dom,
  	    isDirectOwner = c && dom._componentConstructor === vnode.nodeName,
  	    isOwner = isDirectOwner,
  	    props = getNodeProps(vnode);
  	while (c && !isOwner && (c = c._parentComponent)) {
  		isOwner = c.constructor === vnode.nodeName;
  	}

  	if (c && isOwner && (!mountAll || c._component)) {
  		setComponentProps(c, props, ASYNC_RENDER, $, mountAll);
  		dom = c.base;
  	} else {
  		if (originalComponent && !isDirectOwner) {
  			unmountComponent(originalComponent);
  			dom = oldDom = null;
  		}

  		c = createComponent(vnode.nodeName, props, $);
  		if (dom && !c.nextBase) {
  			c.nextBase = dom;
  			// passing dom/oldDom as nextBase will recycle it if unused, so bypass recycling on L229:
  			oldDom = null;
  		}
  		setComponentProps(c, props, SYNC_RENDER, $, mountAll);
  		dom = c.base;

  		if (oldDom && dom !== oldDom) {
  			oldDom._component = null;
  			recollectNodeTree(oldDom, false);
  		}
  	}

  	return dom;
  }

  /**
   * Remove a component from the DOM and recycle it.
   * @param {import('../component').Component} component The Component instance to unmount
   * @private
   */
  function unmountComponent(component) {
  	if (options.beforeUnmount) options.beforeUnmount(component);

  	var base = component.base;

  	component._disable = true;

  	//if (component.componentWillUnmount) component.componentWillUnmount();
  	if (component.store.uninstall) component.store.uninstall();
  	component.base = null;

  	// recursively tear down & recollect high-order component children:
  	var inner = component._component;
  	if (inner) {
  		unmountComponent(inner);
  	} else if (base) {
  		if (base[ATTR_KEY] != null) applyRef(base[ATTR_KEY].ref, null);

  		component.nextBase = base;

  		removeNode(base);
  		recyclerComponents.push(component);

  		removeChildren(base);
  	}

  	applyRef(component.__ref, null);
  }

  /**
   * Base Component class.
   * Provides `update()`, which trigger rendering.
   * @typedef {object} Component
   * @param {object} props The initial component props
   * @param {object} context The initial context from parent components' getChildContext
   * @public
   *
   * @example
   * class MyFoo extends Component {
   *   render(props) {
   *     return <div />;
   *   }
   * }
   */

  var id = 0;

  function Component(props, $) {
  	this._dirty = true;
  	this.elementId = id++;
  	/**
    * @public
    * @type {object}
    */
  	this.store = {};
  	this.$ = $;
  	/**
    * @public
    * @type {object}
    */
  	this.props = props;

  	this._renderCallbacks = [];
  }

  extend(Component.prototype, {

  	/**
    * Immediately perform a synchronous re-render of the component.
    * @param {() => void} callback A function to be called after component is
    * 	re-rendered.
    * @private
    */
  	update: function update(callback) {
  		if (callback) this._renderCallbacks.push(callback);
  		renderComponent(this, FORCE_RENDER);
  	},


  	/**
    * Accepts `props`, and returns a new Virtual DOM tree to build.
    * Virtual DOM is generally constructed via [JSX](http://jasonformat.com/wtf-is-jsx).
    * @param {object} props Props (eg: JSX attributes) received from parent
    * 	element/component
    * @param {object} context Context object, as returned by the nearest
    *  ancestor's `getChildContext()`
    * @returns {import('./vnode').VNode | void}
    */
  	render: function render() {}
  });

  /* 
   * obaa 2.0.3
   * By dntzhang
   * Github: https://github.com/Tencent/omi/tree/master/packages/obaa
   * MIT Licensed.
   */

  // $_r: root
  // $_c: prop change callback
  // $_p: path

  function obaa(target, arr, callback) {

    var eventPropArr = [];
    if (isArray(target)) {
      if (target.length === 0) {
        target.$_o = {
          $_r: target,
          $_p: '#'
        };
      }
      mock(target, target);
    }
    for (var prop in target) {
      if (target.hasOwnProperty(prop)) {
        if (callback) {
          if (isArray(arr) && isInArray(arr, prop)) {
            eventPropArr.push(prop);
            watch(target, prop, null, target);
          } else if (isString(arr) && prop == arr) {
            eventPropArr.push(prop);
            watch(target, prop, null, target);
          }
        } else {
          eventPropArr.push(prop);
          watch(target, prop, null, target);
        }
      }
    }
    if (!target.$_c) {
      target.$_c = [];
    }
    var propChanged = callback ? callback : arr;
    target.$_c.push({
      all: !callback,
      propChanged: propChanged,
      eventPropArr: eventPropArr
    });
  }

  var triggerStr = ['concat', 'copyWithin', 'fill', 'pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift', 'size'].join(',');

  var methods = ['concat', 'copyWithin', 'entries', 'every', 'fill', 'filter', 'find', 'findIndex', 'forEach', 'includes', 'indexOf', 'join', 'keys', 'lastIndexOf', 'map', 'pop', 'push', 'reduce', 'reduceRight', 'reverse', 'shift', 'slice', 'some', 'sort', 'splice', 'toLocaleString', 'toString', 'unshift', 'values', 'size'];

  function mock(target, root) {
    methods.forEach(function (item) {
      target[item] = function () {
        var old = Array.prototype.slice.call(this, 0);
        var result = Array.prototype[item].apply(this, Array.prototype.slice.call(arguments));
        if (new RegExp('\\b' + item + '\\b').test(triggerStr)) {
          for (var cprop in this) {
            if (this.hasOwnProperty(cprop) && !isFunction(this[cprop])) {
              watch(this, cprop, this.$_o.$_p, root);
            }
          }
          //todo
          onPropertyChanged('Array-' + item, this, old, this, this.$_o.$_p, root);
        }
        return result;
      };
      target['pure' + item.substring(0, 1).toUpperCase() + item.substring(1)] = function () {
        return Array.prototype[item].apply(this, Array.prototype.slice.call(arguments));
      };
    });
  }

  function watch(target, prop, path, root) {
    if (prop === '$_o') return;
    if (isFunction(target[prop])) return;
    if (!target.$_o) target.$_o = {
      $_r: root
    };
    if (path !== undefined && path !== null) {
      target.$_o.$_p = path;
    } else {
      target.$_o.$_p = '#';
    }

    var currentValue = target.$_o[prop] = target[prop];
    Object.defineProperty(target, prop, {
      get: function get() {
        return this.$_o[prop];
      },
      set: function set(value) {
        var old = this.$_o[prop];
        this.$_o[prop] = value;
        onPropertyChanged(prop, value, old, this, target.$_o.$_p, root);
      },
      configurable: true,
      enumerable: true
    });
    if (typeof currentValue == 'object') {
      if (isArray(currentValue)) {
        mock(currentValue, root);
        if (currentValue.length === 0) {
          if (!currentValue.$_o) currentValue.$_o = {};
          if (path !== undefined && path !== null) {
            currentValue.$_o.$_p = path + '-' + prop;
          } else {
            currentValue.$_o.$_p = '#' + '-' + prop;
          }
        }
      }
      for (var cprop in currentValue) {
        if (currentValue.hasOwnProperty(cprop)) {
          watch(currentValue, cprop, target.$_o.$_p + '-' + prop, root);
        }
      }
    }
  }

  function onPropertyChanged(prop, value, oldValue, target, path, root) {
    if (value !== oldValue && root.$_c) {
      var rootName = getRootName(prop, path);
      for (var i = 0, len = root.$_c.length; i < len; i++) {
        var handler = root.$_c[i];
        if (handler.all || isInArray(handler.eventPropArr, rootName) || rootName.indexOf('Array-') === 0) {
          handler.propChanged.call(target, prop, value, oldValue, path);
        }
      }
    }

    if (prop.indexOf('Array-') !== 0 && typeof value === 'object') {
      watch(target, prop, target.$_o.$_p, root);
    }
  }

  function isFunction(obj) {
    return Object.prototype.toString.call(obj) == '[object Function]';
  }

  function isArray(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
  }

  function isString(obj) {
    return typeof obj === 'string';
  }

  function isInArray(arr, item) {
    for (var i = arr.length; --i > -1;) {
      if (item === arr[i]) return true;
    }
    return false;
  }

  function getRootName(prop, path) {
    if (path === '#') {
      return prop;
    }
    return path.split('-')[1];
  }

  obaa.add = function (obj, prop) {
    watch(obj, prop, obj.$_o.$_p, obj.$_o.$_r);
  };

  obaa.set = function (obj, prop, value) {
    watch(obj, prop, obj.$_o.$_p, obj.$_o.$_r);
    obj[prop] = value;
  };

  Array.prototype.size = function (length) {
    this.length = length;
  };

  /**
   * Render JSX into a `parent` Element.
   * @param {import('./vnode').VNode} vnode A (JSX) VNode to render
   * @param {import('./dom').OmiElement} parent DOM element to render into
   * @param {import('./dom').OmiElement} [merge] Attempt to re-use an existing DOM tree rooted at
   *  `merge`
   * @public
   *
   * @example
   * // render a div into <body>:
   * render(<div id="hello">hello!</div>, document.body);
   *
   * @example
   * // render a "Thing" component into #foo:
   * const Thing = ({ name }) => <span>{ name }</span>;
   * render(<Thing name="one" />, document.querySelector('#foo'));
   */
  function render(vnode, parent, globalStore) {
    obsStore(globalStore);
    return diff(null, vnode, globalStore, false, typeof parent === 'string' ? document.querySelector(parent) : parent, false);
  }

  function obsStore(store) {
    if (store && store.data) {
      store.instances = [];
      extendStoreUpate(store);

      obaa(store.data, function (prop, val, old, path) {
        var patchs = {};
        var key = fixPath(path + '-' + prop);
        patchs[key] = true;
        store.update(patchs);
      });
    }
  }

  function extendStoreUpate(store) {
    store.update = function (patch) {
      var _this = this;

      var updateAll = matchGlobalData(this.globalData, patch);
      if (Object.keys(patch).length > 0) {

        this.instances.forEach(function (instance) {
          if (updateAll || _this.updateAll || instance.constructor.updatePath && needUpdate(patch, instance.constructor.updatePath) || instance._updatePath && needUpdate(patch, instance._updatePath)) {
            //update this.using
            if (instance.constructor.use) {
              instance.using = getUse(store.data, instance.constructor.use);
            } else if (instance.use) {
              instance.using = getUse(store.data, typeof instance.use === 'function' ? instance.use() : instance.use);
            }

            instance.update();
          }
        });
        this.onChange && this.onChange(patch);
      }
    };
  }

  function matchGlobalData(globalData, diffResult) {
    if (!globalData) return false;
    for (var keyA in diffResult) {
      if (globalData.indexOf(keyA) > -1) {
        return true;
      }
      for (var i = 0, len = globalData.length; i < len; i++) {
        if (includePath(keyA, globalData[i])) {
          return true;
        }
      }
    }
    return false;
  }

  function needUpdate(diffResult, updatePath) {
    for (var keyA in diffResult) {
      if (updatePath[keyA]) {
        return true;
      }
      for (var keyB in updatePath) {
        if (includePath(keyA, keyB)) {
          return true;
        }
      }
    }
    return false;
  }

  function includePath(pathA, pathB) {
    if (pathA.indexOf(pathB) === 0) {
      var next = pathA.substr(pathB.length, 1);
      if (next === '[' || next === '.') {
        return true;
      }
    }
    return false;
  }

  function fixPath(path) {
    var mpPath = '';
    var arr = path.replace('#-', '').split('-');
    arr.forEach(function (item, index) {
      if (index) {
        if (isNaN(Number(item))) {
          mpPath += '.' + item;
        } else {
          mpPath += '[' + item + ']';
        }
      } else {
        mpPath += item;
      }
    });
    return mpPath;
  }

  function _classCallCheck$2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  (function () {
  	if (
  	// No Reflect, no classes, no need for shim because native custom elements
  	// require ES2015 classes or Reflect.
  	window.Reflect === undefined || window.customElements === undefined ||
  	// The webcomponentsjs custom elements polyfill doesn't require
  	// ES2015-compatible construction (`super()` or `Reflect.construct`).
  	window.customElements.hasOwnProperty('polyfillWrapFlushCallback')) {
  		return;
  	}
  	var BuiltInHTMLElement = HTMLElement;
  	window.HTMLElement = function HTMLElement() {
  		return Reflect.construct(BuiltInHTMLElement, [], this.constructor);
  	};
  	HTMLElement.prototype = BuiltInHTMLElement.prototype;
  	HTMLElement.prototype.constructor = HTMLElement;
  	Object.setPrototypeOf(HTMLElement, BuiltInHTMLElement);
  })();

  function define(name, Component) {
  	customElements.define(name, function (_HTMLElement) {
  		_inherits(_class, _HTMLElement);

  		function _class() {
  			_classCallCheck$2(this, _class);

  			return _possibleConstructorReturn(this, _HTMLElement.apply(this, arguments));
  		}

  		_class.prototype.connectedCallback = function connectedCallback() {
  			var shadowRoot = this.attachShadow({
  				mode: 'open'
  			});
  			this.props = {};
  			this.attrsToProps();

  			//Component.css = null
  			if (Component.css) {
  				addStyleToHead(Component.css, getCtorName(Component), shadowRoot);
  			}

  			this._ele = render(h(Component, this.props), shadowRoot);

  			if (this.props.css) {
  				addStyleToHead(this.props.css, '_ds' + this._ele._component.elementId, shadowRoot);
  			}
  		};

  		_class.prototype.disconnectedCallback = function disconnectedCallback() {};

  		_class.prototype.addEventListener = function addEventListener(name, callback) {
  			this._ele._component.props['on' + name.charAt(0).toUpperCase() + name.slice(1)] = callback;
  		};

  		_class.prototype.removeEventListener = function removeEventListener(name, callback) {
  			var props = this._ele._component.props;
  			var eventName = 'on' + name.charAt(0).toUpperCase() + name.slice(1);
  			for (var key in props) {
  				if (key === eventName && callback === props[key]) {
  					delete props[key];
  					break;
  				}
  			}
  		};

  		_class.prototype.removeAttribute = function removeAttribute(key) {
  			_HTMLElement.prototype.removeAttribute.call(this, key);
  			delete this._ele._component.props[key];
  			if (Component.defaultProps.hasOwnProperty(key)) {
  				this._ele._component.props[key] = Component.defaultProps[key];
  			}
  			this._ele._component.update();
  		};

  		_class.prototype.setAttribute = function setAttribute(key, val) {
  			if (val && typeof val === 'object') {
  				val = JSON.stringify(val);
  				_HTMLElement.prototype.setAttribute.call(this, key, val);
  			} else {
  				val = val.toString();
  				_HTMLElement.prototype.setAttribute.call(this, key, val);
  			}
  			this.attrToProp(key, val, this._ele._component.props);
  			this._ele._component.update();
  		};

  		_class.prototype.attrToProp = function attrToProp(key, val, props) {
  			var type = Component.propTypes[key];
  			switch (type) {
  				case String:
  					props[key] = val;
  					break;
  				case Number:
  					props[key] = Number(val);
  					break;
  				case Boolean:
  					if (val === 'false' || val === '0') {
  						props[key] = false;
  					} else {
  						props[key] = true;
  					}
  					break;
  				case Array:
  				case Object:
  					props[key] = JSON.parse(val.replace(/(['"])?([a-zA-Z0-9_-]+)(['"])?:([^\/])/g, '"$2":$4').replace(/'([\s\S]*?)'/g, '"$1"').replace(/,(\s*})/g, '$1'));
  					break;
  			}
  		};

  		_class.prototype.attrsToProps = function attrsToProps() {
  			var _this2 = this;

  			this.props['css'] = this.getAttribute('css');
  			var attrs = Component.propTypes;
  			if (!attrs) return;
  			Object.keys(attrs).forEach(function (key) {
  				var type = attrs[key];
  				var val = _this2.getAttribute(hyphenate(key));
  				if (val !== null) {
  					switch (type) {
  						case String:
  							_this2.props[key] = val;
  							break;
  						case Number:
  							_this2.props[key] = Number(val);
  							break;
  						case Boolean:
  							if (val === 'false' || val === '0') {
  								_this2.props[key] = false;
  							} else {
  								_this2.props[key] = true;
  							}
  							break;
  						case Array:
  						case Object:
  							_this2.props[key] = JSON.parse(val.replace(/(['"])?([a-zA-Z0-9_-]+)(['"])?:([^\/])/g, '"$2":$4').replace(/'([\s\S]*?)'/g, '"$1"').replace(/,(\s*})/g, '$1'));
  							break;
  					}
  				} else {
  					if (Component.defaultProps && Component.defaultProps.hasOwnProperty(key)) {
  						_this2.props[key] = Component.defaultProps[key];
  					} else {
  						_this2.props[key] = null;
  					}
  				}
  			});
  		};

  		return _class;
  	}(HTMLElement));
  }

  function hyphenate(str) {
  	return str.replace(/\B([A-Z])/g, '-$1').toLowerCase();
  }

  function createRef() {
  	return {};
  }

  if (typeof window !== 'undefined') {
  	window.Omis = {
  		h: h,
  		createElement: h,
  		cloneElement: cloneElement,
  		createRef: createRef,
  		Component: Component,
  		render: render,
  		rerender: rerender,
  		options: options,
  		define: define,
  		obaa: obaa
  	};
  }

  function draw(node) {
    var dom = render(h(node));
    console.log(dom);
    console.log(node());
    console.log(layoutNode(node()));
  }

  //import { h } from './h'

  var root = getGlobal();

  root.Omi = { h: h, version: '0.0.0' };

  function getGlobal() {
    if (typeof global !== 'object' || !global || global.Math !== Math || global.Array !== Array) {
      if (typeof self !== 'undefined') {
        return self;
      } else if (typeof window !== 'undefined') {
        return window;
      } else if (typeof global !== 'undefined') {
        return global;
      }
      return function () {
        return this;
      }();
    }
    return global;
  }

  var size = getSize();

  //全局 store或者局部 store，data全放这里，组件没有私有 data，只可以有 props
  var store = {};

  //UI is UI，没有 data
  var App = function App(props, store) {
    return h(
      'surface',
      { top: 0, left: 0, width: size.width, height: size.height, enableCSSLayout: true },
      h(
        'group',
        { style: getPageStyle() },
        h(
          'text',
          { style: getTitleStyle() },
          'Professor PuddinPop'
        ),
        h(
          'group',
          { style: getImageGroupStyle() },
          h('image', { src: 'https://placekitten.com/720/840', style: getImageStyle(), fadeIn: true })
        ),
        h(
          'text',
          { style: getExcerptStyle() },
          'With these words the Witch fell down in a brown, melted, shapeless mass and began to spread over the clean boards of the kitchen floor.  Seeing that she had really melted away to nothing, Dorothy drew another bucket of water and threw it over the mess.  She then swept it all out the door.  After picking out the silver shoe, which was all that was left of the old woman, she cleaned and dried it with a cloth, and put it on her foot again.  Then, being at last free to do as she chose, she ran out to the courtyard to tell the Lion that the Wicked Witch of the West had come to an end, and that they were no longer prisoners in a strange land.'
        )
      )
    );
  };

  //渲染并注入 store
  console.log(draw(App, store));

  function getSize() {
    return {
      left: 0,
      top: 0,
      width: 420,
      height: 740
    };
  }

  function getPageStyle() {

    return {
      position: 'relative',
      padding: 14,
      width: size.width,
      height: size.height,
      backgroundColor: '#f7f7f7',
      flexDirection: 'column'
    };
  }

  function getImageGroupStyle() {
    return {
      position: 'relative',
      flex: 1,
      backgroundColor: '#eee'
    };
  }

  function getImageStyle() {
    return {
      position: 'absolute',
      left: 0,
      top: 0,
      right: 0,
      bottom: 0
    };
  }

  function getTitleStyle() {
    return {
      fontFace: FontFace('Georgia'),
      fontSize: 22,
      lineHeight: 28,
      height: 28,
      marginBottom: 10,
      color: '#333',
      textAlign: 'center'
    };
  }

  function getExcerptStyle() {
    return {
      fontFace: FontFace('Georgia'),
      fontSize: 17,
      lineHeight: 25,
      marginTop: 15,
      flex: 1,
      color: '#333'
    };
  }

  function FontFace() {}

}());
//# sourceMappingURL=b.js.map
