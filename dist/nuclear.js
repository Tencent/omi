/* Nuclear  v0.2.6
 * By AlloyTeam http://www.alloyteam.com/
 * Github: https://github.com/AlloyTeam/Nuclear
 * MIT Licensed.
 */
;(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else if (typeof define === "function" && define.cmd) {
        define(function(require, exports, module){
            module.exports=factory();
        });
    }
    root.Nuclear&&root.Nuclear.instances||(root.Nuclear=factory());
}(window, function () {

(function() {
    "use strict";

    var diffcount;

    var Diff = function (options) {
        var diff = this;
        Object.keys(options).forEach(function(option) {
            diff[option] = options[option];
        });
    };

    Diff.prototype = {
        toString: function() {
            return JSON.stringify(this);
        }

        // TODO: compress diff output by replacing these keys with numbers or alike:
        /*        'addAttribute' = 0,
                'modifyAttribute' = 1,
                'removeAttribute' = 2,
                'modifyTextElement' = 3,
                'relocateGroup' = 4,
                'removeElement' = 5,
                'addElement' = 6,
                'removeTextElement' = 7,
                'addTextElement' = 8,
                'replaceElement' = 9,
                'modifyValue' = 10,
                'modifyChecked' = 11,
                'modifySelected' = 12,
                'modifyComment' = 13,
                'action' = 14,
                'route' = 15,
                'oldValue' = 16,
                'newValue' = 17,
                'element' = 18,
                'group' = 19,
                'from' = 20,
                'to' = 21,
                'name' = 22,
                'value' = 23,
                'data' = 24,
                'attributes' = 25,
                'nodeName' = 26,
                'childNodes' = 27,
                'checked' = 28,
                'selected' = 29;*/
    };

    var SubsetMapping = function SubsetMapping(a, b) {
        this.oldValue = a;
        this.newValue = b;
    };

    SubsetMapping.prototype = {
        contains: function contains(subset) {
            if (subset.length < this.length) {
                return subset.newValue >= this.newValue && subset.newValue < this.newValue + this.length;
            }
            return false;
        },
        toString: function toString() {
            return this.length + " element subset, first mapping: old " + this.oldValue + " → new " + this.newValue;
        }
    };

    var elementDescriptors = function(el) {
        var output = [];
        if (el.nodeName !== '#text' && el.nodeName !== '#comment') {
            output.push(el.nodeName);
            if (el.attributes) {
                if (el.attributes['class']) {
                    output.push(el.nodeName + '.' + el.attributes['class'].replace(/ /g, '.'));
                }
                if (el.attributes.id) {
                    output.push(el.nodeName + '#' + el.attributes.id);
                }
            }

        }
        return output;
    };

    var findUniqueDescriptors = function(li) {
        var uniqueDescriptors = {},
            duplicateDescriptors = {};

        li.forEach(function(node) {
            elementDescriptors(node).forEach(function(descriptor) {
                var inUnique = descriptor in uniqueDescriptors,
                    inDupes = descriptor in duplicateDescriptors;
                if (!inUnique && !inDupes) {
                    uniqueDescriptors[descriptor] = true;
                } else if (inUnique) {
                    delete uniqueDescriptors[descriptor];
                    duplicateDescriptors[descriptor] = true;
                }
            });

        });

        return uniqueDescriptors;
    };

    var uniqueInBoth = function(l1, l2) {
        var l1Unique = findUniqueDescriptors(l1),
            l2Unique = findUniqueDescriptors(l2),
            inBoth = {};

        Object.keys(l1Unique).forEach(function(key) {
            if (l2Unique[key]) {
                inBoth[key] = true;
            }
        });

        return inBoth;
    };

    var removeDone = function(tree) {
        delete tree.outerDone;
        delete tree.innerDone;
        delete tree.valueDone;
        if (tree.childNodes) {
            return tree.childNodes.every(removeDone);
        } else {
            return true;
        }
    };

    var isEqual = function(e1, e2) {

        var e1Attributes, e2Attributes;

        if (!['nodeName', 'value', 'checked', 'selected', 'data'].every(function(element) {
                if (e1[element] !== e2[element]) {
                    return false;
                }
                return true;
            })) {
            return false;
        }

        if (Boolean(e1.attributes) !== Boolean(e2.attributes)) {
            return false;
        }

        if (Boolean(e1.childNodes) !== Boolean(e2.childNodes)) {
            return false;
        }

        if (e1.attributes) {
            e1Attributes = Object.keys(e1.attributes);
            e2Attributes = Object.keys(e2.attributes);

            if (e1Attributes.length !== e2Attributes.length) {
                return false;
            }
            if (!e1Attributes.every(function(attribute) {
                    if (e1.attributes[attribute] !== e2.attributes[attribute]) {
                        return false;
                    }
                })) {
                return false;
            }
        }

        if (e1.childNodes) {
            if (e1.childNodes.length !== e2.childNodes.length) {
                return false;
            }
            if (!e1.childNodes.every(function(childNode, index) {
                    return isEqual(childNode, e2.childNodes[index]);
                })) {

                return false;
            }

        }

        return true;

    };


    var roughlyEqual = function(e1, e2, uniqueDescriptors, sameSiblings, preventRecursion) {
        var childUniqueDescriptors, nodeList1, nodeList2;

        if (!e1 || !e2) {
            return false;
        }

        if (e1.nodeName !== e2.nodeName) {
            return false;
        }

        if (e1.nodeName === '#text') {
            // Note that we initially don't care what the text content of a node is,
            // the mere fact that it's the same tag and "has text" means it's roughly
            // equal, and then we can find out the true text difference later.
            return preventRecursion ? true : e1.data === e2.data;
        }


        if (e1.nodeName in uniqueDescriptors) {
            return true;
        }

        if (e1.attributes && e2.attributes) {

            if (e1.attributes.id && e1.attributes.id === e2.attributes.id) {
                var idDescriptor = e1.nodeName + '#' + e1.attributes.id;
                if (idDescriptor in uniqueDescriptors) {
                    return true;
                }
            }
            if (e1.attributes['class'] && e1.attributes['class'] === e2.attributes['class']) {
                var classDescriptor = e1.nodeName + '.' + e1.attributes['class'].replace(/ /g, '.');
                if (classDescriptor in uniqueDescriptors) {
                    return true;
                }
            }
        }

        if (sameSiblings) {
            return true;
        }

        nodeList1 = e1.childNodes ? e1.childNodes.slice().reverse() : [];
        nodeList2 = e2.childNodes ? e2.childNodes.slice().reverse() : [];

        if (nodeList1.length !== nodeList2.length) {
            return false;
        }

        if (preventRecursion) {
            return nodeList1.every(function(element, index) {
                return element.nodeName === nodeList2[index].nodeName;
            });
        } else {
            // note: we only allow one level of recursion at any depth. If 'preventRecursion'
            // was not set, we must explicitly force it to true for child iterations.
            childUniqueDescriptors = uniqueInBoth(nodeList1, nodeList2);
            return nodeList1.every(function(element, index) {
                return roughlyEqual(element, nodeList2[index], childUniqueDescriptors, true, true);
            });
        }
    };


    var cloneObj = function(obj) {
        //  TODO: Do we really need to clone here? Is it not enough to just return the original object?
        return JSON.parse(JSON.stringify(obj));
        //return obj;
    };

    /**
     * based on https://en.wikibooks.org/wiki/Algorithm_implementation/Strings/Longest_common_substring#JavaScript
     */
    var findCommonSubsets = function(c1, c2, marked1, marked2) {
        var lcsSize = 0,
            index = [],
            matches = Array.apply(null, new Array(c1.length + 1)).map(function() {
                return [];
            }), // set up the matching table
            uniqueDescriptors = uniqueInBoth(c1, c2),
            // If all of the elements are the same tag, id and class, then we can
            // consider them roughly the same even if they have a different number of
            // children. This will reduce removing and re-adding similar elements.
            subsetsSame = c1.length === c2.length,
            origin, ret;

        if (subsetsSame) {

            c1.some(function(element, i) {
                var c1Desc = elementDescriptors(element),
                    c2Desc = elementDescriptors(c2[i]);
                if (c1Desc.length !== c2Desc.length) {
                    subsetsSame = false;
                    return true;
                }
                c1Desc.some(function(description, i) {
                    if (description !== c2Desc[i]) {
                        subsetsSame = false;
                        return true;
                    }
                });
                if (!subsetsSame) {
                    return true;
                }

            });
        }

        // fill the matches with distance values
        c1.forEach(function(c1Element, c1Index) {
            c2.forEach(function(c2Element, c2Index) {
                if (!marked1[c1Index] && !marked2[c2Index] && roughlyEqual(c1Element, c2Element, uniqueDescriptors, subsetsSame)) {
                    matches[c1Index + 1][c2Index + 1] = (matches[c1Index][c2Index] ? matches[c1Index][c2Index] + 1 : 1);
                    if (matches[c1Index + 1][c2Index + 1] >= lcsSize) {
                        lcsSize = matches[c1Index + 1][c2Index + 1];
                        index = [c1Index + 1, c2Index + 1];
                    }
                } else {
                    matches[c1Index + 1][c2Index + 1] = 0;
                }
            });
        });
        if (lcsSize === 0) {
            return false;
        }
        origin = [index[0] - lcsSize, index[1] - lcsSize];
        ret = new SubsetMapping(origin[0], origin[1]);
        ret.length = lcsSize;

        return ret;
    };

    /**
     * This should really be a predefined function in Array...
     */
    var makeArray = function(n, v) {
        return Array.apply(null, new Array(n)).map(function() {
            return v;
        });
    };

    /**
     * Generate arrays that indicate which node belongs to which subset,
     * or whether it's actually an orphan node, existing in only one
     * of the two trees, rather than somewhere in both.
     *
     * So if t1 = <img><canvas><br>, t2 = <canvas><br><img>.
     * The longest subset is "<canvas><br>" (length 2), so it will group 0.
     * The second longest is "<img>" (length 1), so it will be group 1.
     * gaps1 will therefore be [1,0,0] and gaps2 [0,0,1].
     *
     * If an element is not part of any group, it will stay being 'true', which
     * is the initial value. For example:
     * t1 = <img><p></p><br><canvas>, t2 = <b></b><br><canvas><img>
     *
     * The "<p></p>" and "<b></b>" do only show up in one of the two and will
     * therefore be marked by "true". The remaining parts are parts of the
     * groups 0 and 1:
     * gaps1 = [1, true, 0, 0], gaps2 = [true, 0, 0, 1]
     *
     */
    var getGapInformation = function(t1, t2, stable) {

        var gaps1 = t1.childNodes ? makeArray(t1.childNodes.length, true) : [],
            gaps2 = t2.childNodes ? makeArray(t2.childNodes.length, true) : [],
            group = 0;

        // give elements from the same subset the same group number
        stable.forEach(function(subset) {
            var i, endOld = subset.oldValue + subset.length,
                endNew = subset.newValue + subset.length;
            for (i = subset.oldValue; i < endOld; i += 1) {
                gaps1[i] = group;
            }
            for (i = subset.newValue; i < endNew; i += 1) {
                gaps2[i] = group;
            }
            group += 1;
        });

        return {
            gaps1: gaps1,
            gaps2: gaps2
        };
    };

    /**
     * Find all matching subsets, based on immediate child differences only.
     */
    var markSubTrees = function(oldTree, newTree) {
        // note: the child lists are views, and so update as we update old/newTree
        var oldChildren = oldTree.childNodes ? oldTree.childNodes : [],
            newChildren = newTree.childNodes ? newTree.childNodes : [],
            marked1 = makeArray(oldChildren.length, false),
            marked2 = makeArray(newChildren.length, false),
            subsets = [],
            subset = true,
            returnIndex = function() {
                return arguments[1];
            },
            markBoth = function(i) {
                marked1[subset.oldValue + i] = true;
                marked2[subset.newValue + i] = true;
            };

        while (subset) {
            subset = findCommonSubsets(oldChildren, newChildren, marked1, marked2);
            if (subset) {
                subsets.push(subset);

                Array.apply(null, new Array(subset.length)).map(returnIndex).forEach(markBoth);

            }
        }
        return subsets;
    };


    function swap(obj, p1, p2) {
        (function(_) {
            obj[p1] = obj[p2];
            obj[p2] = _;
        }(obj[p1]));
    }


    var DiffTracker = function() {
        this.list = [];
    };

    DiffTracker.prototype = {
        list: false,
        add: function(diffs) {
            var list = this.list;
            diffs.forEach(function(diff) {
                list.push(diff);
            });
        },
        forEach: function(fn) {
            this.list.forEach(fn);
        }
    };

    var diffDOM = function(options) {

        var defaults = {
                debug: false,
                diffcap: 10, // Limit for how many diffs are accepting when debugging. Inactive when debug is false.
                maxDepth: false, // False or a numeral. If set to a numeral, limits the level of depth that the the diff mechanism looks for differences. If false, goes through the entire tree.
                valueDiffing: true, // Whether to take into consideration the values of forms that differ from auto assigned values (when a user fills out a form).
                // syntax: textDiff: function (node, currentValue, expectedValue, newValue)
                textDiff: function() {
                    arguments[0].data = arguments[3];
                    return;
                },
                // empty functions were benchmarked as running faster than both
                // `f && f()` and `if (f) { f(); }`
                preVirtualDiffApply: function () {},
                postVirtualDiffApply: function () {},
                preDiffApply: function () {},
                postDiffApply: function () {}
            },
            i;

        if (typeof options === "undefined") {
            options = {};
        }

        for (i in defaults) {
            if (typeof options[i] === "undefined") {
                this[i] = defaults[i];
            } else {
                this[i] = options[i];
            }
        }

    };
    diffDOM.prototype = {

        // ===== Create a diff =====

        diff: function(t1Node, t2Node) {

            var t1 = this.nodeToObj(t1Node),
                t2 = this.nodeToObj(t2Node);

            diffcount = 0;

            if (this.debug) {
                this.t1Orig = this.nodeToObj(t1Node);
                this.t2Orig = this.nodeToObj(t2Node);
            }

            this.tracker = new DiffTracker();
            return this.findDiffs(t1, t2);
        },
        findDiffs: function(t1, t2) {
            var diffs;
            do {
                if (this.debug) {
                    diffcount += 1;
                    if (diffcount > this.diffcap) {
                        window.diffError = [this.t1Orig, this.t2Orig];
                        throw new Error("surpassed diffcap:" + JSON.stringify(this.t1Orig) + " -> " + JSON.stringify(this.t2Orig));
                    }
                }
                diffs = this.findNextDiff(t1, t2, []);
                if (diffs.length === 0) {
                    // Last check if the elements really are the same now.
                    // If not, remove all info about being done and start over.
                    // Somtimes a node can be marked as done, but the creation of subsequent diffs means that it has to be changed anyway.
                    if (!isEqual(t1, t2)) {
                        removeDone(t1);
                        diffs = this.findNextDiff(t1, t2, []);
                    }
                }

                if (diffs.length > 0) {
                    this.tracker.add(diffs);
                    this.applyVirtual(t1, diffs);
                }
            } while (diffs.length > 0);
            return this.tracker.list;
        },
        findNextDiff: function(t1, t2, route) {
            var diffs;

            if (this.maxDepth && route.length > this.maxDepth) {
                return [];
            }
            // outer differences?
            if (!t1.outerDone) {
                diffs = this.findOuterDiff(t1, t2, route);
                if (diffs.length > 0) {
                    t1.outerDone = true;
                    return diffs;
                } else {
                    t1.outerDone = true;
                }
            }
            // inner differences?
            if (!t1.innerDone) {
                diffs = this.findInnerDiff(t1, t2, route);
                if (diffs.length > 0) {
                    return diffs;
                } else {
                    t1.innerDone = true;
                }
            }

            if (this.valueDiffing && !t1.valueDone) {
                // value differences?
                diffs = this.findValueDiff(t1, t2, route);

                if (diffs.length > 0) {
                    t1.valueDone = true;
                    return diffs;
                } else {
                    t1.valueDone = true;
                }
            }

            // no differences
            return [];
        },
        findOuterDiff: function(t1, t2, route) {

            var diffs = [],
                attr1, attr2;

            if (t1.nodeName !== t2.nodeName) {
                return [new Diff({
                    action: 'replaceElement',
                    oldValue: cloneObj(t1),
                    newValue: cloneObj(t2),
                    route: route
                })];
            }

            if (t1.data !== t2.data) {
                // Comment or text node.
                if (t1.nodeName === '#text') {
                    return [new Diff({
                        action: 'modifyComment',
                        route: route,
                        oldValue: t1.data,
                        newValue: t2.data
                    })];
                } else {
                    return [new Diff({
                        action: 'modifyTextElement',
                        route: route,
                        oldValue: t1.data,
                        newValue: t2.data
                    })];
                }

            }


            attr1 = t1.attributes ? Object.keys(t1.attributes).sort() : [];
            attr2 = t2.attributes ? Object.keys(t2.attributes).sort() : [];

            attr1.forEach(function(attr) {
                var pos = attr2.indexOf(attr);
                if (pos === -1) {
                    diffs.push(new Diff({
                        action: 'removeAttribute',
                        route: route,
                        name: attr,
                        value: t1.attributes[attr]
                    }));
                } else {
                    attr2.splice(pos, 1);
                    if (t1.attributes[attr] !== t2.attributes[attr]) {
                        diffs.push(new Diff({
                            action: 'modifyAttribute',
                            route: route,
                            name: attr,
                            oldValue: t1.attributes[attr],
                            newValue: t2.attributes[attr]
                        }));
                    }
                }

            });


            attr2.forEach(function(attr) {
                diffs.push(new Diff({
                    action: 'addAttribute',
                    route: route,
                    name: attr,
                    value: t2.attributes[attr]
                }));

            });

            return diffs;
        },
        nodeToObj: function(node) {
            var objNode = {}, dobj = this;
            objNode.nodeName = node.nodeName;
            if (objNode.nodeName === '#text' || objNode.nodeName === '#comment') {
                objNode.data = node.data;
            } else {
                if (node.attributes && node.attributes.length > 0) {
                    objNode.attributes = {};
                    Array.prototype.slice.call(node.attributes).forEach(
                        function(attribute) {
                            objNode.attributes[attribute.name] = attribute.value;
                        }
                    );
                }
                if (node.childNodes && node.childNodes.length > 0) {
                    objNode.childNodes = [];
                    Array.prototype.slice.call(node.childNodes).forEach(
                        function(childNode) {
                            objNode.childNodes.push(dobj.nodeToObj(childNode));
                        }
                    );
                }
                if (this.valueDiffing) {
                    if (node.value !== undefined) {
                        objNode.value = node.value;
                    }
                    if (node.checked !== undefined) {
                        objNode.checked = node.checked;
                    }
                    if (node.selected !== undefined) {
                        objNode.selected = node.selected;
                    }
                }
            }

            return objNode;
        },
        objToNode: function(objNode, insideSvg) {
            var node, dobj = this;
            if (objNode.nodeName === '#text') {
                node = document.createTextNode(objNode.data);

            } else if (objNode.nodeName === '#comment') {
                node = document.createComment(objNode.data);
            } else {
                if (objNode.nodeName === 'svg' || insideSvg) {
                    node = document.createElementNS('http://www.w3.org/2000/svg', objNode.nodeName);
                    insideSvg = true;
                } else {
                    node = document.createElement(objNode.nodeName);
                }
                if (objNode.attributes) {
                    Object.keys(objNode.attributes).forEach(function(attribute) {
                        if(attribute!=='=""') {
                            node.setAttribute(attribute, objNode.attributes[attribute]);
                        }
                    });
                }
                if (objNode.childNodes) {
                    objNode.childNodes.forEach(function(childNode) {
                        node.appendChild(dobj.objToNode(childNode, insideSvg));
                    });
                }
                if (this.valueDiffing) {
                    if (objNode.value) {
                        node.value = objNode.value;
                    }
                    if (objNode.checked) {
                        node.checked = objNode.checked;
                    }
                    if (objNode.selected) {
                        node.selected = objNode.selected;
                    }
                }
            }
            return node;
        },
        findInnerDiff: function(t1, t2, route) {

            var subtrees = (t1.childNodes && t2.childNodes) ? markSubTrees(t1, t2) : [],
                t1ChildNodes = t1.childNodes ? t1.childNodes : [],
                t2ChildNodes = t2.childNodes ? t2.childNodes : [],
                childNodesLengthDifference, diffs = [],
                index = 0,
                last, e1, e2, i;

            if (subtrees.length > 1) {
                /* Two or more groups have been identified among the childnodes of t1
                 * and t2.
                 */
                return this.attemptGroupRelocation(t1, t2, subtrees, route);
            }

            /* 0 or 1 groups of similar child nodes have been found
             * for t1 and t2. 1 If there is 1, it could be a sign that the
             * contents are the same. When the number of groups is below 2,
             * t1 and t2 are made to have the same length and each of the
             * pairs of child nodes are diffed.
             */


            last = Math.max(t1ChildNodes.length, t2ChildNodes.length);
            if (t1ChildNodes.length !== t2ChildNodes.length) {
                childNodesLengthDifference = true;
            }

            for (i = 0; i < last; i += 1) {
                e1 = t1ChildNodes[i];
                e2 = t2ChildNodes[i];

                if (childNodesLengthDifference) {
                    /* t1 and t2 have different amounts of childNodes. Add
                     * and remove as necessary to obtain the same length */
                    if (e1 && !e2) {
                        if (e1.nodeName === '#text') {
                            diffs.push(new Diff({
                                action: 'removeTextElement',
                                route: route.concat(index),
                                value: e1.data
                            }));
                            index -= 1;
                        } else {
                            diffs.push(new Diff({
                                action: 'removeElement',
                                route: route.concat(index),
                                element: cloneObj(e1)
                            }));
                            index -= 1;
                        }

                    } else if (e2 && !e1) {
                        if (e2.nodeName === '#text') {
                            diffs.push(new Diff({
                                action: 'addTextElement',
                                route: route.concat(index),
                                value: e2.data
                            }));
                        } else {
                            diffs.push(new Diff({
                                action: 'addElement',
                                route: route.concat(index),
                                element: cloneObj(e2)
                            }));
                        }
                    }
                }
                /* We are now guaranteed that childNodes e1 and e2 exist,
                 * and that they can be diffed.
                 */
                /* Diffs in child nodes should not affect the parent node,
                 * so we let these diffs be submitted together with other
                 * diffs.
                 */

                if (e1 && e2) {
                    diffs = diffs.concat(this.findNextDiff(e1, e2, route.concat(index)));
                }

                index += 1;

            }
            t1.innerDone = true;
            return diffs;

        },

        attemptGroupRelocation: function(t1, t2, subtrees, route) {
            /* Either t1.childNodes and t2.childNodes have the same length, or
             * there are at least two groups of similar elements can be found.
             * attempts are made at equalizing t1 with t2. First all initial
             * elements with no group affiliation (gaps=true) are removed (if
             * only in t1) or added (if only in t2). Then the creation of a group
             * relocation diff is attempted.
             */

            var gapInformation = getGapInformation(t1, t2, subtrees),
                gaps1 = gapInformation.gaps1,
                gaps2 = gapInformation.gaps2,
                shortest = Math.min(gaps1.length, gaps2.length),
                destinationDifferent, toGroup,
                group, node, similarNode, testI, diffs = [],
                index1, index2, j;


            for (index2 = 0, index1 = 0; index2 < shortest; index1 += 1, index2 += 1) {
                if (gaps1[index2] === true) {
                    node = t1.childNodes[index1];
                    if (node.nodeName === '#text') {
                        if (t2.childNodes[index2].nodeName === '#text' && node.data !== t2.childNodes[index2].data) {
                            testI = index1;
                            while (t1.childNodes.length > testI + 1 && t1.childNodes[testI + 1].nodeName === '#text') {
                                testI += 1;
                                if (t2.childNodes[index2].data === t1.childNodes[testI].data) {
                                    similarNode = true;
                                    break;
                                }
                            }
                            if (!similarNode) {
                                diffs.push(new Diff({
                                    action: 'modifyTextElement',
                                    route: route.concat(index2),
                                    oldValue: node.data,
                                    newValue: t2.childNodes[index2].data
                                }));
                            }
                        }
                        diffs.push(new Diff({
                            action: 'removeTextElement',
                            route: route.concat(index2),
                            value: node.data
                        }));
                        gaps1.splice(index2, 1);
                        shortest = Math.min(gaps1.length, gaps2.length);
                        index2 -= 1;
                    } else {
                        diffs.push(new Diff({
                            action: 'removeElement',
                            route: route.concat(index2),
                            element: cloneObj(node)
                        }));
                        gaps1.splice(index2, 1);
                        shortest = Math.min(gaps1.length, gaps2.length);
                        index2 -= 1;
                    }

                } else if (gaps2[index2] === true) {
                    node = t2.childNodes[index2];
                    if (node.nodeName === '#text') {
                        diffs.push(new Diff({
                            action: 'addTextElement',
                            route: route.concat(index2),
                            value: node.data
                        }));
                        gaps1.splice(index2, 0, true);
                        shortest = Math.min(gaps1.length, gaps2.length);
                        index1 -= 1;
                    } else {
                        diffs.push(new Diff({
                            action: 'addElement',
                            route: route.concat(index2),
                            element: cloneObj(node)
                        }));
                        gaps1.splice(index2, 0, true);
                        shortest = Math.min(gaps1.length, gaps2.length);
                        index1 -= 1;
                    }

                } else if (gaps1[index2] !== gaps2[index2]) {
                    if (diffs.length > 0) {
                        return diffs;
                    }
                    // group relocation
                    group = subtrees[gaps1[index2]];
                    toGroup = Math.min(group.newValue, (t1.childNodes.length - group.length));
                    if (toGroup !== group.oldValue) {
                        // Check whether destination nodes are different than originating ones.
                        destinationDifferent = false;
                        for (j = 0; j < group.length; j += 1) {
                            if (!roughlyEqual(t1.childNodes[toGroup + j], t1.childNodes[group.oldValue + j], [], false, true)) {
                                destinationDifferent = true;
                            }
                        }
                        if (destinationDifferent) {
                            return [new Diff({
                                action: 'relocateGroup',
                                groupLength: group.length,
                                from: group.oldValue,
                                to: toGroup,
                                route: route
                            })];
                        }
                    }
                }
            }
            return diffs;
        },

        findValueDiff: function(t1, t2, route) {
            // Differences of value. Only useful if the value/selection/checked value
            // differs from what is represented in the DOM. For example in the case
            // of filled out forms, etc.
            var diffs = [];

            if (t1.selected !== t2.selected) {
                diffs.push(new Diff({
                    action: 'modifySelected',
                    oldValue: t1.selected,
                    newValue: t2.selected,
                    route: route
                }));
            }

            if ((t1.value || t2.value) && t1.value !== t2.value && t1.nodeName !== 'OPTION') {
                diffs.push(new Diff({
                    action: 'modifyValue',
                    oldValue: t1.value,
                    newValue: t2.value,
                    route: route
                }));
            }
            if (t1.checked !== t2.checked) {
                diffs.push(new Diff({
                    action: 'modifyChecked',
                    oldValue: t1.checked,
                    newValue: t2.checked,
                    route: route
                }));
            }

            return diffs;
        },

        // ===== Apply a virtual diff =====

        applyVirtual: function(tree, diffs) {
            var dobj = this;
            if (diffs.length === 0) {
                return true;
            }
            diffs.forEach(function(diff) {
                dobj.applyVirtualDiff(tree, diff);
            });
            return true;
        },
        getFromVirtualRoute: function(tree, route) {
            var node = tree,
                parentNode, nodeIndex;

            route = route.slice();
            while (route.length > 0) {
                if (!node.childNodes) {
                    return false;
                }
                nodeIndex = route.splice(0, 1)[0];
                parentNode = node;
                node = node.childNodes[nodeIndex];
            }
            return {
                node: node,
                parentNode: parentNode,
                nodeIndex: nodeIndex
            };
        },
        applyVirtualDiff: function(tree, diff) {
            var routeInfo = this.getFromVirtualRoute(tree, diff.route),
                node = routeInfo.node,
                parentNode = routeInfo.parentNode,
                nodeIndex = routeInfo.nodeIndex,
                newNode, route, c;

            // pre-diff hook
            var info = {
                diff: diff,
                node: node
            };

            if (this.preVirtualDiffApply(info)) { return true; }

            switch (diff.action) {
                case 'addAttribute':
                    if (!node.attributes) {
                        node.attributes = {};
                    }

                    node.attributes[diff.name] = diff.value;

                    if (diff.name === 'checked') {
                        node.checked = true;
                    } else if (diff.name === 'selected') {
                        node.selected = true;
                    } else if (node.nodeName === 'INPUT' && diff.name === 'value') {
                        node.value = diff.value;
                    }

                    break;
                case 'modifyAttribute':
                    node.attributes[diff.name] = diff.newValue;
                    if (node.nodeName === 'INPUT' && diff.name === 'value') {
                        node.value = diff.value;
                    }
                    break;
                case 'removeAttribute':

                    delete node.attributes[diff.name];

                    if (Object.keys(node.attributes).length === 0) {
                        delete node.attributes;
                    }

                    if (diff.name === 'checked') {
                        delete node.checked;
                    } else if (diff.name === 'selected') {
                        delete node.selected;
                    } else if (node.nodeName === 'INPUT' && diff.name === 'value') {
                        delete node.value;
                    }

                    break;
                case 'modifyTextElement':
                    node.data = diff.newValue;

                    if (parentNode.nodeName === 'TEXTAREA') {
                        parentNode.value = diff.newValue;
                    }
                    break;
                case 'modifyValue':
                    node.value = diff.newValue;
                    break;
                case 'modifyComment':
                    node.data = diff.newValue;
                    break;
                case 'modifyChecked':
                    node.checked = diff.newValue;
                    break;
                case 'modifySelected':
                    node.selected = diff.newValue;
                    break;
                case 'replaceElement':
                    newNode = cloneObj(diff.newValue);
                    newNode.outerDone = true;
                    newNode.innerDone = true;
                    newNode.valueDone = true;
                    parentNode.childNodes[nodeIndex] = newNode;
                    break;
                case 'relocateGroup':
                    node.childNodes.splice(diff.from, diff.groupLength).reverse()
                        .forEach(function(movedNode) {
                            node.childNodes.splice(diff.to, 0, movedNode);
                        });
                    break;
                case 'removeElement':
                    parentNode.childNodes.splice(nodeIndex, 1);
                    break;
                case 'addElement':
                    route = diff.route.slice();
                    c = route.splice(route.length - 1, 1)[0];
                    node = this.getFromVirtualRoute(tree, route).node;
                    newNode = cloneObj(diff.element);
                    newNode.outerDone = true;
                    newNode.innerDone = true;
                    newNode.valueDone = true;

                    if (!node.childNodes) {
                        node.childNodes = [];
                    }

                    if (c >= node.childNodes.length) {
                        node.childNodes.push(newNode);
                    } else {
                        node.childNodes.splice(c, 0, newNode);
                    }
                    break;
                case 'removeTextElement':
                    parentNode.childNodes.splice(nodeIndex, 1);
                    if (parentNode.nodeName === 'TEXTAREA') {
                        delete parentNode.value;
                    }
                    break;
                case 'addTextElement':
                    route = diff.route.slice();
                    c = route.splice(route.length - 1, 1)[0];
                    newNode = {};
                    newNode.nodeName = '#text';
                    newNode.data = diff.value;
                    node = this.getFromVirtualRoute(tree, route).node;
                    if (!node.childNodes) {
                        node.childNodes = [];
                    }

                    if (c >= node.childNodes.length) {
                        node.childNodes.push(newNode);
                    } else {
                        node.childNodes.splice(c, 0, newNode);
                    }
                    if (node.nodeName === 'TEXTAREA') {
                        node.value = diff.newValue;
                    }
                    break;
                default:
                    console.log('unknown action');
            }

            // capture newNode for the callback
            info.newNode = newNode;
            this.postVirtualDiffApply(info);

            return;
        },




        // ===== Apply a diff =====

        apply: function(tree, diffs) {
            var dobj = this;

            if (diffs.length === 0) {
                return true;
            }
            diffs.forEach(function(diff) {
                if (!dobj.applyDiff(tree, diff)) {
                    return false;
                }
            });
            return true;
        },
        getFromRoute: function(tree, route) {
            route = route.slice();
            var c, node = tree;
            while (route.length > 0) {
                if (!node.childNodes) {
                    return false;
                }
                c = route.splice(0, 1)[0];
                node = node.childNodes[c];
            }
            return node;
        },
        applyDiff: function(tree, diff) {
            var node = this.getFromRoute(tree, diff.route),
                newNode, reference, route, c;

            // pre-diff hook
            var info = {
                diff: diff,
                node: node
            };

            if (this.preDiffApply(info)) { return true; }

            switch (diff.action) {
                case 'addAttribute':
                    if (!node || !node.setAttribute) {
                        return false;
                    }
                    if(diff.name==='"'||diff.name==='="'||diff.name==='=""')break;
                    node.setAttribute(diff.name, diff.value);
                    break;
                case 'modifyAttribute':
                    if (!node || !node.setAttribute) {
                        return false;
                    }
                    node.setAttribute(diff.name, diff.newValue);
                    break;
                case 'removeAttribute':
                    if (!node || !node.removeAttribute) {
                        return false;
                    }
                    node.removeAttribute(diff.name);
                    break;
                case 'modifyTextElement':
                    if (!node || node.nodeType !== 3) {
                        return false;
                    }
                    this.textDiff(node, node.data, diff.oldValue, diff.newValue);
                    break;
                case 'modifyValue':
                    if (!node || typeof node.value === 'undefined') {
                        return false;
                    }
                    node.value = diff.newValue;
                    break;
                case 'modifyComment':
                    if (!node || typeof node.data === 'undefined') {
                        return false;
                    }
                    this.textDiff(node, node.data, diff.oldValue, diff.newValue);
                    break;
                case 'modifyChecked':
                    if (!node || typeof node.checked === 'undefined') {
                        return false;
                    }
                    node.checked = diff.newValue;
                    break;
                case 'modifySelected':
                    if (!node || typeof node.selected === 'undefined') {
                        return false;
                    }
                    node.selected = diff.newValue;
                    break;
                case 'replaceElement':
                    node.parentNode.replaceChild(this.objToNode(diff.newValue, node.namespaceURI === 'http://www.w3.org/2000/svg'), node);
                    break;
                case 'relocateGroup':
                    Array.apply(null, new Array(diff.groupLength)).map(function() {
                        return node.removeChild(node.childNodes[diff.from]);
                    }).forEach(function(childNode, index) {
                        if (index === 0) {
                            reference = node.childNodes[diff.to];
                        }
                        node.insertBefore(childNode, reference);
                    });
                    break;
                case 'removeElement':
                    node.parentNode.removeChild(node);
                    break;
                case 'addElement':
                    route = diff.route.slice();
                    c = route.splice(route.length - 1, 1)[0];
                    node = this.getFromRoute(tree, route);
                    //todo fix ie9 error

                    //node.insertAdjacentHTML("afterBegin", this.objToNode(diff.element, node.namespaceURI === 'http://www.w3.org/2000/svg').outerHTML);
                    node.insertBefore(this.objToNode(diff.element, node.namespaceURI === 'http://www.w3.org/2000/svg'), node.childNodes[c]);
                    break;
                case 'removeTextElement':
                    if (!node || node.nodeType !== 3) {
                        return false;
                    }
                    node.parentNode.removeChild(node);
                    break;
                case 'addTextElement':
                    route = diff.route.slice();
                    c = route.splice(route.length - 1, 1)[0];
                    newNode = document.createTextNode(diff.value);
                    node = this.getFromRoute(tree, route);
                    if (!node || !node.childNodes) {
                        return false;
                    }
                    node.insertBefore(newNode, node.childNodes[c]);
                    break;
                default:
                    console.log('unknown action');
            }

            // if a new node was created, we might be interested in it
            // post diff hook
            info.newNode = newNode;
            this.postDiffApply(info);

            return true;
        },

        // ===== Undo a diff =====

        undo: function(tree, diffs) {
            diffs = diffs.slice();
            var dobj = this;
            if (!diffs.length) {
                diffs = [diffs];
            }
            diffs.reverse();
            diffs.forEach(function(diff) {
                dobj.undoDiff(tree, diff);
            });
        },
        undoDiff: function(tree, diff) {

            switch (diff.action) {
                case 'addAttribute':
                    diff.action = 'removeAttribute';
                    this.applyDiff(tree, diff);
                    break;
                case 'modifyAttribute':
                    swap(diff, 'oldValue', 'newValue');
                    this.applyDiff(tree, diff);
                    break;
                case 'removeAttribute':
                    diff.action = 'addAttribute';
                    this.applyDiff(tree, diff);
                    break;
                case 'modifyTextElement':
                    swap(diff, 'oldValue', 'newValue');
                    this.applyDiff(tree, diff);
                    break;
                case 'modifyValue':
                    swap(diff, 'oldValue', 'newValue');
                    this.applyDiff(tree, diff);
                    break;
                case 'modifyComment':
                    swap(diff, 'oldValue', 'newValue');
                    this.applyDiff(tree, diff);
                    break;
                case 'modifyChecked':
                    swap(diff, 'oldValue', 'newValue');
                    this.applyDiff(tree, diff);
                    break;
                case 'modifySelected':
                    swap(diff, 'oldValue', 'newValue');
                    this.applyDiff(tree, diff);
                    break;
                case 'replaceElement':
                    swap(diff, 'oldValue', 'newValue');
                    this.applyDiff(tree, diff);
                    break;
                case 'relocateGroup':
                    swap(diff, 'from', 'to');
                    this.applyDiff(tree, diff);
                    break;
                case 'removeElement':
                    diff.action = 'addElement';
                    this.applyDiff(tree, diff);
                    break;
                case 'addElement':
                    diff.action = 'removeElement';
                    this.applyDiff(tree, diff);
                    break;
                case 'removeTextElement':
                    diff.action = 'addTextElement';
                    this.applyDiff(tree, diff);
                    break;
                case 'addTextElement':
                    diff.action = 'removeTextElement';
                    this.applyDiff(tree, diff);
                    break;
                default:
                    console.log('unknown action');
            }

        }
    };

    if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = diffDOM;
        }
        exports.diffDOM = diffDOM;
    } else {
        // `window` in the browser, or `exports` on the server
        window.diffDOM = diffDOM;
    }

}.call(this));

var Nuclear={};

Nuclear.diffDOM = new diffDOM();

Nuclear.create = function (obj, setting) {
    obj._nuclearSetting = setting;
    Nuclear._mixObj(obj);
    var currentEvn = this === Nuclear ? Nuclear.Class : this;
    var component = currentEvn.extend(obj);
    component.create = Nuclear.create;
    return component;
};

Nuclear._mixObj = function (obj) {
    obj.ctor = function (option, selector) {
        this._ncInstanceId=Nuclear.getInstanceId();
        this._nuclearTwoWay = true;
        this._nuclearDiffDom=true;
        if(this._nuclearSetting) {
            if (this._nuclearSetting.twoWay === false) {
                this._nuclearTwoWay = false;
            }
            if (this._nuclearSetting.diff === false) {
                this._nuclearDiffDom = false;
            }
        }
        //加window防止构建到webpack中，Nuclear是局部而非全局
        window.Nuclear.instances[this._ncInstanceId] = this;
        this._nuclearParentEmpty = !selector;
        this.HTML = "";
        this._nuclearOption = option;
        Object.defineProperty(this, 'option', {
            get: function () {
                return this._nuclearOption;
            },
            set: function (value) {
                var old = this._nuclearOption;
                if (old !== value) {
                    this._nuclearOption = value;
                    this.onOptionChange && this.onOptionChange('_nuclearOption', value, old, '');
                    this._nuclearObserver();
                    this._nuclearRenderInfo.data = this.option;
                    this.refresh();
                }
            }
        });
        if (!this._nuclearParentEmpty) {
            this.parentNode = typeof selector === "string" ? document.querySelector(selector) : selector;
            if(document.body!==this.parentNode) {
                while (this.parentNode.firstChild) {
                    this.parentNode.removeChild(this.parentNode.firstChild);
                }
            }
        } else {
            this.parentNode = document.createElement("div");
        }
        if (this.install) {
            this.install();
        }
        this._nuclearRef = [];
        for (var key in this) {
            if (this.hasOwnProperty(key)) {
                //这里判断是否依赖其他nuclear组件，依赖的话记录下来
                if (this[key] && this[key]["_nuclearLocalRefresh"]) {
                    this[key]._nuclearParent = this;
                    this._nuclearRef.push(this[key]);
                }
            }
        }
        this._nuclearTimer = null;
        this._preNuclearTime = new Date();
        this._nuclearObserver();

        this._nuclearRenderInfo = {
            tpl: this._nuclearTplGenerator(),
            data: this.option,
            parent: this.parentNode
        };
        this._nuclearRender(this._nuclearRenderInfo);
        if (this.installed) this.installed();
    };

    obj._nuclearObserver = function () {
        if (this.option && this._nuclearTwoWay) {
            Nuclear.observe(this.option, function (prop, value, oldValue, path) {
                if (!this.onOptionChange || (this.onOptionChange && this.onOptionChange(prop, value, oldValue, path) !== false)) {
                    clearTimeout(this._nuclearTimer);
                    if (new Date() - this._preNuclearTime > 40) {
                        this._nuclearLocalRefresh();
                        this._preNuclearTime = new Date();
                    } else {
                        this._nuclearTimer = setTimeout(function () {
                            this._nuclearLocalRefresh();
                        }.bind(this), 40);
                    }
                }
            }.bind(this));
        }
    }

    obj.refresh = function () {
        this._nuclearLocalRefresh();
    };

    obj.setNuclearContainer = function(selector){
        this.parentNode = typeof selector === "string" ? document.querySelector(selector) : selector;
        if(document.body!==this.parentNode) {
            while (this.parentNode.firstChild) {
                this.parentNode.removeChild(this.parentNode.firstChild);
            }
        }
        this._nuclearRenderInfo.parent = this.parentNode;
        this.parentNode.insertAdjacentHTML("beforeEnd", this.HTML);
        this.node = this.parentNode.lastChild;
        this._mixNode();
    }

    //加if防止子类赋值undefined，丢失父类方法
    if (obj.render) {
        obj._nuclearTplGenerator = obj.render;
    }

    obj.render = function () {
        if (this._nuclearParentEmpty) {

            return this.HTML;
            //var len=this._nuclearRef.length;
            ////嵌套的render逻辑        
            ////子节点下再无子节点
            //if (len === 0) {
            //    return this.HTML;
            //} else {//子节点下又有子节点
            //    var i=0;
            //    for (; i < len; i++) {
            //        var ref = this._nuclearRef[i];
            //        return ref.render();
            //    }
            //}
        } else {
            return this._nuclearTplGenerator();
        }
    };

    obj._nuclearSetStyleData=function(){
        if(this.node&&this.node.querySelector){
            var style=this.node.querySelector('style');
            style&&style.setAttribute('data-nuclearId',this._ncInstanceId);
        }
    }

    obj._nuclearRender = function (item) {
        var isFirstRender = false;
        if (this.node) {
            //this.node.parentNode&&this.node.parentNode.removeChild(this.node);
            // item.parent.removeChild(this.node);      
            if (Nuclear.isUndefined(item.tpl)) {
                item.parent.removeChild(this.node);
                this.node = null;
                this.HTML = "";
            } else {
                var newNode = Nuclear.str2Dom(this._nuclearWrap(Nuclear.render(Nuclear._fixEvent(Nuclear._fixTplIndex(item.tpl), this._ncInstanceId), item.data)));
               if(this._nuclearDiffDom) {
                   Nuclear.diffDOM.apply(this.node, Nuclear.diffDOM.diff(this.node, newNode));
               }else {
                   item.parent.replaceChild(newNode, this.node);
                   this.node = newNode;
               }
            }
        } else {
            //第一次渲染
            if (!Nuclear.isUndefined(item.tpl)) {
                isFirstRender = true;
                item.parent.insertAdjacentHTML("beforeEnd", this._nuclearWrap(Nuclear.render(Nuclear._fixEvent(Nuclear._fixTplIndex(item.tpl), this._ncInstanceId), item.data)));
                this.node = item.parent.lastChild;
            }
        }
        if (this.node) {
            this.node.setAttribute("data-nuclearId", this._ncInstanceId);

            this._mixNode();

            //nc-refresh的比较常见的应用场景就是文本框输入的时候不刷新自己，刷新会导致失去焦点。nc-refresh也能用于性能优化
            item.refreshPart = this.node.querySelectorAll('*[nc-refresh]');
            this.HTML = this.node.outerHTML;


            this._nuclearFix();
            if (this.onRefresh) this.onRefresh();
        }
        this._nuclearSetStyleData();
        //刷新局部样式
        if (!isFirstRender) {
            Nuclear.refreshStyle(this._ncInstanceId);
        }
    };

    obj._mixNode = function () {
        var nodes = this.node.querySelectorAll('*[nc-id]'),len=nodes.length;
        if (len > 0) {
            var i=0;
            for (; i < len; i++) {
                var node=nodes[i];
                this[node.getAttribute("nc-id")] = node;
            }
        }

        var cNodes = this.node.querySelectorAll('*[nc-class]'), cLen = cNodes.length;
        if (cLen > 0) {
            var j = 0;
            for (; j < cLen; j++) {
                var cNode = cNodes[j];
                var cAttr = cNode.getAttribute("nc-class");
                this[cAttr] = [];
            }
            for (j = 0; j < cLen; j++) {
                var cNode = cNodes[j];
                var cAttr = cNode.getAttribute("nc-class");
                this[cAttr].push(cNode);
            }
        }
    };

    //从最顶部组件向内fix
    obj._nuclearFix = function () {
        if (this._nuclearParent) return;
        this._nuclearFixOne(this)
    };

    obj._nuclearFixOne = function (one) {
        var refLen = one._nuclearRef.length;
        if (refLen > 0) {
            var i = 0;
            for (; i < refLen; i++) {
                var ref = one._nuclearRef[i];
                ref.node = one.node.querySelector('*[data-nuclearId="' + ref._ncInstanceId + '"]');
                if (ref.node) {
                    ref._mixNode();
                    ref._nuclearRenderInfo.refreshPart = ref.node.querySelectorAll('*[nc-refresh]');
                    ref._nuclearRenderInfo.parent = ref.node.parentNode;

                    this._nuclearFixOne(ref);
                    //依赖的组件new的时候没有插入dom，所以下面两行再次执行是为了防止内部的事件绑定失效
                    if (ref.onRefresh) ref.onRefresh();
                    if (ref.installed) ref.installed();
                }
            }
        }
    };

    obj._nuclearWrap = function (tpl) {
        var scopedStr = "";
        if (this.style) {
            scopedStr = '<style scoped data-nuclearId=' + this._ncInstanceId + '>' + this.style() + '</style>';
        }
        return '<div>' + tpl + scopedStr + '</div>'
    };

    obj._nuclearLocalRefresh = function () {
        var item = this._nuclearRenderInfo, rpLen = item.refreshPart.length;
        item.tpl = this._nuclearTplGenerator();
        if (rpLen > 0) {
            var parts = Nuclear.str2Dom(this._nuclearWrap(Nuclear.render(Nuclear._fixEvent(Nuclear._fixTplIndex(item.tpl), this._ncInstanceId), item.data))).querySelectorAll('*[nc-refresh]');
            for (var j = 0; j < rpLen; j++) {
                var part = item.refreshPart[j];
                //执行完replaceChild，原part的parentNode就为null,代表其已经被子节点替换掉了
                part.parentNode&&part.parentNode.replaceChild(parts[j], part);

            }
            item.refreshPart = parts;
            this._mixNode();

            this.HTML = this.node.outerHTML;

            this._nuclearFix();
            if (this.onRefresh) this.onRefresh();
            //刷新局部样式
            Nuclear.refreshStyle(this._ncInstanceId);
        } else {
            this._nuclearRender(item);
        }
        
    }
};

Nuclear._fixEvent = function (tpl,instanceId) {
    return tpl.replace(/<[\s\S]*?>/g, function (item) {
        return item.replace(/(onabort|onblur|oncancel|oncanplay|oncanplaythrough|onchange|onclick|onclose|oncontextmenu|oncuechange|ondblclick|ondrag|ondragend|ondragenter|ondragleave|ondragover|ondragstart|ondrop|ondurationchange|onemptied|onended|onerror|onfocus|oninput|oninvalid|onkeydown|onkeypress|onkeyup|onload|onloadeddata|onloadedmetadata|onloadstart|onmousedown|onmouseenter|onmouseleave|onmousemove|onmouseout|onmouseover|onmouseup|onmousewheel|onpause|onplay|onplaying|onprogress|onratechange|onreset|onresize|onscroll|onseeked|onseeking|onselect|onshow|onstalled|onsubmit|onsuspend|ontimeupdate|ontoggle|onvolumechange|onwaiting|onautocomplete|onautocompleteerror|onbeforecopy|onbeforecut|onbeforepaste|oncopy|oncut|onpaste|onsearch|onselectstart|onwheel|onwebkitfullscreenchange|onwebkitfullscreenerror|ontouchstart|ontouchmove|ontouchend|ontouchcancel|onpointerdown|onpointerup|onpointercancel|onpointermove|onpointerover|onpointerout|onpointerenter|onpointerleave)=('|")/g, function (eventStr, b, c, d, e) {
            if (e.substr(eventStr.length + d, 18) === "Nuclear.instances[") return eventStr;
            return eventStr += "Nuclear.instances[" + instanceId + "].";
        });
    });
};

Nuclear._fixTplIndex = function (tpl) {
    return tpl.replace(/{{@index}}/g, "{{_nuclearIndex}}");
};

Nuclear.str2Dom = function (html) {
    var wrapMap = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        body: [0, "", ""],
        _default: [1, "<div>", "</div>"]
    };
    wrapMap.optgroup = wrapMap.option;
    wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
    wrapMap.th = wrapMap.td;
    var match = /<\s*\w.*?>/g.exec(html);
    var element = document.createElement('div');
    if (match != null) {
        var tag = match[0].replace(/</g, '').replace(/>/g, '').split(' ')[0];
        if (tag.toLowerCase() === 'body') {
            //var dom = document.implementation.createDocument('http://www.w3.org/1999/xhtml', 'html', null);
            var body = document.createElement("body");
            // keeping the attributes
            element.innerHTML = html.replace(/<body/g, '<div').replace(/<\/body>/g, '</div>');
            var attrs = element.firstChild.attributes;
            body.innerHTML = html;
            for (var i = 0; i < attrs.length; i++) {
                body.setAttribute(attrs[i].name, attrs[i].value);
            }
            return body;
        } else {
            var map = wrapMap[tag] || wrapMap._default;
            html = map[1] + html + map[2];
            element.innerHTML = html;
            // Descend through wrappers to the right content
            var j = map[0] + 1;
            while (j--) {
                element = element.lastChild;
            }
        }
    } else {
        element.innerHTML = html;
        element = element.lastChild;
    }
    return element;
};

Nuclear.isUndefined = function (o) {
    return typeof (o) === "undefined";
};



Nuclear._instanceId= 0;
Nuclear.getInstanceId = function () {
    return Nuclear._instanceId++;
};
Nuclear.instances = {};
/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */

/*global define: false Mustache: true*/

;(function defineMustache (global, factory) {
    Nuclear.Tpl = {};
    factory(Nuclear.Tpl); // script, wsh, asp
    Nuclear.render=Nuclear.Tpl.render;
}(this, function mustacheFactory (mustache) {

  var objectToString = Object.prototype.toString;
  var isArray = Array.isArray || function isArrayPolyfill (object) {
    return objectToString.call(object) === '[object Array]';
  };

  function isFunction (object) {
    return typeof object === 'function';
  }

  function escapeRegExp (string) {
    return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&');
  }

  // Workaround for https://issues.apache.org/jira/browse/COUCHDB-577
  // See https://github.com/janl/mustache.js/issues/189
  var regExpTest = RegExp.prototype.test;
  function testRegExp (re, string) {
    return regExpTest.call(re, string);
  }

  var nonSpaceRe = /\S/;
  function isWhitespace (string) {
    return !testRegExp(nonSpaceRe, string);
  }

  var entityMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
    '/': '&#x2F;'
  };

  function escapeHtml (string) {
    return String(string).replace(/[&<>"'\/]/g, function fromEntityMap (s) {
      return entityMap[s];
    });
  }

  var whiteRe = /\s*/;
  var spaceRe = /\s+/;
  var equalsRe = /\s*=/;
  var curlyRe = /\s*\}/;
  var tagRe = /#|\^|\/|>|\{|&|=|!/;

  /**
   * Breaks up the given `template` string into a tree of tokens. If the `tags`
   * argument is given here it must be an array with two string values: the
   * opening and closing tags used in the template (e.g. [ "<%", "%>" ]). Of
   * course, the default is to use mustaches (i.e. mustache.tags).
   *
   * A token is an array with at least 4 elements. The first element is the
   * mustache symbol that was used inside the tag, e.g. "#" or "&". If the tag
   * did not contain a symbol (i.e. {{myValue}}) this element is "name". For
   * all text that appears outside a symbol this element is "text".
   *
   * The second element of a token is its "value". For mustache tags this is
   * whatever else was inside the tag besides the opening symbol. For text tokens
   * this is the text itself.
   *
   * The third and fourth elements of the token are the start and end indices,
   * respectively, of the token in the original template.
   *
   * Tokens that are the root node of a subtree contain two more elements: 1) an
   * array of tokens in the subtree and 2) the index in the original template at
   * which the closing tag for that section begins.
   */
  function parseTemplate (template, tags) {
    if (!template)
      return [];

    var sections = [];     // Stack to hold section tokens
    var tokens = [];       // Buffer to hold the tokens
    var spaces = [];       // Indices of whitespace tokens on the current line
    var hasTag = false;    // Is there a {{tag}} on the current line?
    var nonSpace = false;  // Is there a non-space char on the current line?

    // Strips all whitespace tokens array for the current line
    // if there was a {{#tag}} on it and otherwise only space.
    function stripSpace () {
      if (hasTag && !nonSpace) {
        while (spaces.length)
          delete tokens[spaces.pop()];
      } else {
        spaces = [];
      }

      hasTag = false;
      nonSpace = false;
    }

    var openingTagRe, closingTagRe, closingCurlyRe;
    function compileTags (tagsToCompile) {
      if (typeof tagsToCompile === 'string')
        tagsToCompile = tagsToCompile.split(spaceRe, 2);

      if (!isArray(tagsToCompile) || tagsToCompile.length !== 2)
        throw new Error('Invalid tags: ' + tagsToCompile);

      openingTagRe = new RegExp(escapeRegExp(tagsToCompile[0]) + '\\s*');
      closingTagRe = new RegExp('\\s*' + escapeRegExp(tagsToCompile[1]));
      closingCurlyRe = new RegExp('\\s*' + escapeRegExp('}' + tagsToCompile[1]));
    }

    compileTags(tags || mustache.tags);

    var scanner = new Scanner(template);

    var start, type, value, chr, token, openSection;
    while (!scanner.eos()) {
      start = scanner.pos;

      // Match any text between tags.
      value = scanner.scanUntil(openingTagRe);

      if (value) {
        for (var i = 0, valueLength = value.length; i < valueLength; ++i) {
          chr = value.charAt(i);

          if (isWhitespace(chr)) {
            spaces.push(tokens.length);
          } else {
            nonSpace = true;
          }

          tokens.push([ 'text', chr, start, start + 1 ]);
          start += 1;

          // Check for whitespace on the current line.
          if (chr === '\n')
            stripSpace();
        }
      }

      // Match the opening tag.
      if (!scanner.scan(openingTagRe))
        break;

      hasTag = true;

      // Get the tag type.
      type = scanner.scan(tagRe) || 'name';
      scanner.scan(whiteRe);

      // Get the tag value.
      if (type === '=') {
        value = scanner.scanUntil(equalsRe);
        scanner.scan(equalsRe);
        scanner.scanUntil(closingTagRe);
      } else if (type === '{') {
        value = scanner.scanUntil(closingCurlyRe);
        scanner.scan(curlyRe);
        scanner.scanUntil(closingTagRe);
        type = '&';
      } else {
        value = scanner.scanUntil(closingTagRe);
      }

      // Match the closing tag.
      if (!scanner.scan(closingTagRe))
        throw new Error('Unclosed tag at ' + scanner.pos);

      token = [ type, value, start, scanner.pos ];
      tokens.push(token);

      if (type === '#' || type === '^') {
        sections.push(token);
      } else if (type === '/') {
        // Check section nesting.
        openSection = sections.pop();

        if (!openSection)
          throw new Error('Unopened section "' + value + '" at ' + start);

        if (openSection[1] !== value)
          throw new Error('Unclosed section "' + openSection[1] + '" at ' + start);
      } else if (type === 'name' || type === '{' || type === '&') {
        nonSpace = true;
      } else if (type === '=') {
        // Set the tags for the next time around.
        compileTags(value);
      }
    }

    // Make sure there are no open sections when we're done.
    openSection = sections.pop();

    if (openSection)
      throw new Error('Unclosed section "' + openSection[1] + '" at ' + scanner.pos);

    return nestTokens(squashTokens(tokens));
  }

  /**
   * Combines the values of consecutive text tokens in the given `tokens` array
   * to a single token.
   */
  function squashTokens (tokens) {
    var squashedTokens = [];

    var token, lastToken;
    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
      token = tokens[i];

      if (token) {
        if (token[0] === 'text' && lastToken && lastToken[0] === 'text') {
          lastToken[1] += token[1];
          lastToken[3] = token[3];
        } else {
          squashedTokens.push(token);
          lastToken = token;
        }
      }
    }

    return squashedTokens;
  }

  /**
   * Forms the given array of `tokens` into a nested tree structure where
   * tokens that represent a section have two additional items: 1) an array of
   * all tokens that appear in that section and 2) the index in the original
   * template that represents the end of that section.
   */
  function nestTokens (tokens) {
    var nestedTokens = [];
    var collector = nestedTokens;
    var sections = [];

    var token, section;
    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
      token = tokens[i];

      switch (token[0]) {
      case '#':
      case '^':
        collector.push(token);
        sections.push(token);
        collector = token[4] = [];
        break;
      case '/':
        section = sections.pop();
        section[5] = token[2];
        collector = sections.length > 0 ? sections[sections.length - 1][4] : nestedTokens;
        break;
      default:
        collector.push(token);
      }
    }

    return nestedTokens;
  }

  /**
   * A simple string scanner that is used by the template parser to find
   * tokens in template strings.
   */
  function Scanner (string) {
    this.string = string;
    this.tail = string;
    this.pos = 0;
  }

  /**
   * Returns `true` if the tail is empty (end of string).
   */
  Scanner.prototype.eos = function eos () {
    return this.tail === '';
  };

  /**
   * Tries to match the given regular expression at the current position.
   * Returns the matched text if it can match, the empty string otherwise.
   */
  Scanner.prototype.scan = function scan (re) {
    var match = this.tail.match(re);

    if (!match || match.index !== 0)
      return '';

    var string = match[0];

    this.tail = this.tail.substring(string.length);
    this.pos += string.length;

    return string;
  };

  /**
   * Skips all text until the given regular expression can be matched. Returns
   * the skipped string, which is the entire tail if no match can be made.
   */
  Scanner.prototype.scanUntil = function scanUntil (re) {
    var index = this.tail.search(re), match;

    switch (index) {
    case -1:
      match = this.tail;
      this.tail = '';
      break;
    case 0:
      match = '';
      break;
    default:
      match = this.tail.substring(0, index);
      this.tail = this.tail.substring(index);
    }

    this.pos += match.length;

    return match;
  };

  /**
   * Represents a rendering context by wrapping a view object and
   * maintaining a reference to the parent context.
   */
  function Context (view, parentContext) {
    this.view = view;
    this.cache = { '.': this.view };
    this.parent = parentContext;
  }

  /**
   * Creates a new context using the given view with this context
   * as the parent.
   */
  Context.prototype.push = function push (view) {
    return new Context(view, this);
  };

  /**
   * Returns the value of the given name in this context, traversing
   * up the context hierarchy if the value is absent in this context's view.
   */
  Context.prototype.lookup = function lookup (name) {
    var cache = this.cache;

    var value;
    if (name in cache) {
      value = cache[name];
    } else {
      var context = this, names, index, lookupHit = false;

      while (context) {
        if (name.indexOf('.') > 0) {
          value = context.view;
          names = name.split('.');
          index = 0;

          /**
           * Using the dot notion path in `name`, we descend through the
           * nested objects.
           *
           * To be certain that the lookup has been successful, we have to
           * check if the last object in the path actually has the property
           * we are looking for. We store the result in `lookupHit`.
           *
           * This is specially necessary for when the value has been set to
           * `undefined` and we want to avoid looking up parent contexts.
           **/
          while (value != null && index < names.length) {
            if (index === names.length - 1 && value != null)
              lookupHit = (typeof value === 'object') &&
                value.hasOwnProperty(names[index]);
            value = value[names[index++]];
          }
        } else if (context.view != null && typeof context.view === 'object') {
          value = context.view[name];
          lookupHit = context.view.hasOwnProperty(name);
        }

        if (lookupHit)
          break;

        context = context.parent;
      }

      cache[name] = value;
    }

    if (isFunction(value))
      value = value.call(this.view);

    return value;
  };

  /**
   * A Writer knows how to take a stream of tokens and render them to a
   * string, given a context. It also maintains a cache of templates to
   * avoid the need to parse the same template twice.
   */
  function Writer () {
    this.cache = {};
  }

  /**
   * Clears all cached templates in this writer.
   */
  Writer.prototype.clearCache = function clearCache () {
    this.cache = {};
  };

  /**
   * Parses and caches the given `template` and returns the array of tokens
   * that is generated from the parse.
   */
  Writer.prototype.parse = function parse (template, tags) {
    var cache = this.cache;
    var tokens = cache[template];

    if (tokens == null)
      tokens = cache[template] = parseTemplate(template, tags);

    return tokens;
  };

  /**
   * High-level method that is used to render the given `template` with
   * the given `view`.
   *
   * The optional `partials` argument may be an object that contains the
   * names and templates of partials that are used in the template. It may
   * also be a function that is used to load partial templates on the fly
   * that takes a single argument: the name of the partial.
   */
  Writer.prototype.render = function render (template, view, partials) {
    var tokens = this.parse(template);
    var context = (view instanceof Context) ? view : new Context(view);
    return this.renderTokens(tokens, context, partials, template);
  };

  /**
   * Low-level method that renders the given array of `tokens` using
   * the given `context` and `partials`.
   *
   * Note: The `originalTemplate` is only ever used to extract the portion
   * of the original template that was contained in a higher-order section.
   * If the template doesn't use higher-order sections, this argument may
   * be omitted.
   */
  Writer.prototype.renderTokens = function renderTokens (tokens, context, partials, originalTemplate) {
    var buffer = '';

    var token, symbol, value;
    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
      value = undefined;
      token = tokens[i];
      symbol = token[0];

      if (symbol === '#') value = this.renderSection(token, context, partials, originalTemplate);
      else if (symbol === '^') value = this.renderInverted(token, context, partials, originalTemplate);
      else if (symbol === '>') value = this.renderPartial(token, context, partials, originalTemplate);
      else if (symbol === '&') value = this.unescapedValue(token, context);
      else if (symbol === 'name') value = this.escapedValue(token, context);
      else if (symbol === 'text') value = this.rawValue(token);

      if (value !== undefined)
        buffer += value;
    }

    return buffer;
  };

  Writer.prototype.renderSection = function renderSection (token, context, partials, originalTemplate) {
    var self = this;
    var buffer = '';
    var value = context.lookup(token[1]);

    // This function is used to render an arbitrary template
    // in the current context by higher-order sections.
    function subRender (template) {
      return self.render(template, context, partials);
    }

    if (!value) return;

    if (isArray(value)) {
      for (var j = 0, valueLength = value.length; j < valueLength; ++j) {
        buffer += this.renderTokens(token[4], context.push(value[j]), partials, originalTemplate);
      }
    } else if (typeof value === 'object' || typeof value === 'string' || typeof value === 'number') {
      buffer += this.renderTokens(token[4], context.push(value), partials, originalTemplate);
    } else if (isFunction(value)) {
      if (typeof originalTemplate !== 'string')
        throw new Error('Cannot use higher-order sections without the original template');

      // Extract the portion of the original template that the section contains.
      value = value.call(context.view, originalTemplate.slice(token[3], token[5]), subRender);

      if (value != null)
        buffer += value;
    } else {
      buffer += this.renderTokens(token[4], context, partials, originalTemplate);
    }
    return buffer;
  };

  Writer.prototype.renderInverted = function renderInverted (token, context, partials, originalTemplate) {
    var value = context.lookup(token[1]);

    // Use JavaScript's definition of falsy. Include empty arrays.
    // See https://github.com/janl/mustache.js/issues/186
    if (!value || (isArray(value) && value.length === 0))
      return this.renderTokens(token[4], context, partials, originalTemplate);
  };

  Writer.prototype.renderPartial = function renderPartial (token, context, partials) {
    if (!partials) return;

    var value = isFunction(partials) ? partials(token[1]) : partials[token[1]];
    if (value != null)
      return this.renderTokens(this.parse(value), context, partials, value);
  };

  Writer.prototype.unescapedValue = function unescapedValue (token, context) {
    var value = context.lookup(token[1]);
    if (value != null)
      return value;
  };

  Writer.prototype.escapedValue = function escapedValue (token, context) {
    var value = context.lookup(token[1]);
    if (value != null)
      return mustache.escape(value);
  };

  Writer.prototype.rawValue = function rawValue (token) {
    return token[1];
  };

  mustache.name = 'mustache.js';
  mustache.version = '2.0.0';
  mustache.tags = [ '{{', '}}' ];

  // All high-level mustache.* functions use this writer.
  var defaultWriter = new Writer();

  /**
   * Clears all cached templates in the default writer.
   */
  mustache.clearCache = function clearCache () {
    return defaultWriter.clearCache();
  };

  /**
   * Parses and caches the given template in the default writer and returns the
   * array of tokens it contains. Doing this ahead of time avoids the need to
   * parse templates on the fly as they are rendered.
   */
  mustache.parse = function parse (template, tags) {
    return defaultWriter.parse(template, tags);
  };

  /**
   * Renders the `template` with the given `view` and `partials` using the
   * default writer.
   */
  mustache.render = function render (template, view, partials) {
    return defaultWriter.render(template, view, partials);
  };

  // This is here for backwards compatibility with 0.4.x.,
  /*eslint-disable */ // eslint wants camel cased function name
  mustache.to_html = function to_html (template, view, partials, send) {
    /*eslint-enable*/

    var result = mustache.render(template, view, partials);

    if (isFunction(send)) {
      send(result);
    } else {
      return result;
    }
  };

  // Export the escaping function so that the user may override it.
  // See https://github.com/janl/mustache.js/issues/244
  mustache.escape = escapeHtml;

  // Export these mainly for testing, but also for advanced usage.
  mustache.Scanner = Scanner;
  mustache.Context = Context;
  mustache.Writer = Writer;

}));
/* observejs --- By dnt http://kmdjs.github.io/
 * Github: https://github.com/kmdjs/observejs
 * MIT Licensed.
 */
;(function () {
    var observe = function (target, arr,callback) {
        var _observe = function (target, arr, callback) {
			if(!target.$observer)target.$observer=this;
			var $observer=target.$observer;
			var eventPropArr=[];
			if (observe.isArray(target)) {
			    if (target.length === 0) {
			        target.$observeProps = {};
			        target.$observeProps.$observerPath = "#";
			    }
			     $observer.mock(target);
			   
            }
            for (var prop in target) {
                if (target.hasOwnProperty(prop)) {
                    if (callback) {
                        if (observe.isArray(arr) && observe.isInArray(arr, prop)) {
							eventPropArr.push(prop);
                            $observer.watch(target, prop);
                        } else if (observe.isString(arr) && prop == arr) {
							eventPropArr.push(prop);
                            $observer.watch(target, prop);
                        }                       
                    } else{
						eventPropArr.push(prop);
                        $observer.watch(target, prop);
                    }
                }
            }         
            $observer.target = target;
			if(!$observer.propertyChangedHandler)$observer.propertyChangedHandler=[];
			var propChanged=callback ? callback : arr;
			$observer.propertyChangedHandler.push({ all: !callback, propChanged: propChanged, eventPropArr: eventPropArr });	
        }
        _observe.prototype = {
            "onPropertyChanged": function (prop, value,oldValue,target,path) {
                if(value!== oldValue && this.propertyChangedHandler){
					var rootName=observe._getRootName(prop,path);
					for(var i=0,len=this.propertyChangedHandler.length;i<len;i++){
						var handler=this.propertyChangedHandler[i];
						if(handler.all||observe.isInArray(handler.eventPropArr,rootName)||rootName.indexOf("Array-")===0){
							handler.propChanged.call(this.target, prop, value, oldValue, path);
						}	
					}			
				}
                if (prop.indexOf("Array-") !== 0 && typeof value === "object") {
					this.watch(target,prop, target.$observeProps.$observerPath);
				}
            },
            "mock": function (target) {
                var self = this;
                target.forEach(function (item, index) {
                    item._nuclearIndex = index;
                });
                observe.methods.forEach(function (item) {
                    target[item] = function () {
						var old =  Array.prototype.slice.call(this,0);
                        var result = Array.prototype[item].apply(this, Array.prototype.slice.call(arguments));
                        if (new RegExp("\\b" + item + "\\b").test(observe.triggerStr)) {
                            this.forEach(function (item, index) {
                                item._nuclearIndex = index;
                            });
							for (var cprop in this) {
								if (this.hasOwnProperty(cprop)  && !observe.isFunction(this[cprop])) {
									self.watch(this, cprop, this.$observeProps.$observerPath);
								}
							}
							//todo
                            self.onPropertyChanged("Array-"+item, this, old,this, this.$observeProps.$observerPath);
                        }
                        return result;
                    };
                });
            },
            "watch": function (target, prop, path) {             
                if (prop === "$observeProps"||prop === "$observer") return;
				if (observe.isFunction(target[prop])) return;
				if (!target.$observeProps) target.$observeProps = {};
				if(path !== undefined){
					target.$observeProps.$observerPath = path;
				}else{
					target.$observeProps.$observerPath = "#";
				}
                var self = this;              
                var currentValue = target.$observeProps[prop] = target[prop];
                Object.defineProperty(target, prop, {
                    get: function () {
                        return this.$observeProps[prop];
                    },
                    set: function (value) {
                        var old = this.$observeProps[prop];
                        this.$observeProps[prop] = value;
                        self.onPropertyChanged(prop, value, old, this, target.$observeProps.$observerPath);                   
                    }
                });
                if (typeof currentValue == "object") {
                    if (observe.isArray(currentValue)) {
                        this.mock(currentValue);
                        if (currentValue.length === 0) {
                            if (!currentValue.$observeProps) currentValue.$observeProps = {};
                            if (path !== undefined) {
                                currentValue.$observeProps.$observerPath = path;
                            } else {
                                currentValue.$observeProps.$observerPath = "#";
                            }
                        }
                    }
                    for (var cprop in currentValue) {
                        if (currentValue.hasOwnProperty(cprop)) {
                            this.watch(currentValue, cprop, target.$observeProps.$observerPath+"-"+prop);
                        }
                    }
                }
            }
        }
        return new _observe(target, arr, callback)
    }
    observe.methods = ["concat", "copyWithin", "entries", "every", "fill", "filter", "find", "findIndex", "forEach", "includes", "indexOf", "join", "keys", "lastIndexOf", "map", "pop", "push", "reduce", "reduceRight", "reverse", "shift", "slice", "some", "sort", "splice", "toLocaleString", "toString", "unshift", "values", "size"]
    observe.triggerStr = ["concat", "copyWithin", "fill", "pop", "push", "reverse", "shift", "sort", "splice", "unshift", "size"].join(",")
    observe.isArray = function (obj) {
        return Object.prototype.toString.call(obj) === '[object Array]';
    }
    observe.isString = function (obj) {
        return typeof obj === "string";
    }
    observe.isInArray = function (arr, item) {
        for (var i = arr.length; --i > -1;) {
            if (item === arr[i]) return true;
        }
        return false;
    }
    observe.isFunction = function (obj) {
        return Object.prototype.toString.call(obj) == '[object Function]';
    }
    observe.twoWay = function (objA, aProp, objB, bProp) {
        if (typeof objA[aProp] === "object" && typeof objB[bProp] === "object") {
            observe(objA, aProp, function (name, value) {
                objB[bProp] = this[aProp];
            })
            observe(objB, bProp, function (name, value) {
                objA[aProp] = this[bProp];
            })
        } else {
            observe(objA, aProp, function (name, value) {
                objB[bProp] = value;
            })
            observe(objB, bProp, function (name, value) {
                objA[aProp] = value;
            })
        }
    }
	observe._getRootName=function(prop,path){
		if(path==="#"){
			return prop;
		}
		return path.split("-")[1];
	}
    
	observe.add = function(obj , prop , value) {
		obj[prop] = value;		
		var $observer=obj.$observer;
		$observer.watch(obj,prop);
	}
	Array.prototype.size = function (length) {
		this.length = length;
	}
	
	Nuclear.observe = observe;
})();

//所有类的基类
Nuclear.Class = function () { };

//基类增加一个extend方法
Nuclear.Class.extend = function (prop) {
    var prototype = Object.create(this.prototype);
    //把要扩展的属性复制到prototype变量上
    for (var name in prop) {
        //下面代码是让ctor里可以直接访问使用this._super访问父类构造函数，除了ctor的其他方法，this._super都是访问父类的实例
        prototype[name] = prop[name];
    }

    //假的构造函数
    function Class() {
        //执行真正的ctor构造函数
        this.ctor.apply(this, arguments);
    }

    Class.prototype = prototype;

    Class.prototype._super = Object.create(this.prototype);


    Class.prototype.constructor = Class;
    //任何Class.extend的返回对象都将具备extend方法
    Class.extend = Nuclear.Class.extend;

    return Class;
};
//many thanks to https://github.com/thomaspark/scoper/
(function () {

    function init() {
        var style = document.createElement("style");
        style.appendChild(document.createTextNode(""));
        document.head.appendChild(style);
        //先隐藏所有dom元素
        style.sheet.insertRule("body { visibility: hidden; }", 0);
        style.sheet.insertRule("template { display: none !important; }", 0);
    }

    function scoper(css, prefix) {
        var re = new RegExp("([^\r\n,{}]+)(,(?=[^}]*{)|\s*{)", "g");
        css = css.replace(re, function (g0, g1, g2) {

            if (g1.match(/^\s*(@media|@keyframes|to|from|@font-face)/)) {
                return g1 + g2;
            }

            if (g1.match(/:scope/)) {
                g1 = g1.replace(/([^\s]*):scope/, function (h0, h1) {
                    if (h1 === "") {
                        return "> *";
                    } else {
                        return "> " + h1;
                    }
                });
            }

            g1 = g1.replace(/^(\s*)/, "$1" + prefix + " ");

            return g1 + g2;
        });

        return css;
    }

    //var newstyle;

    function process() {
        var styles = document.body.querySelectorAll("style[scoped]");

        if (styles.length === 0) {
            document.getElementsByTagName("body")[0].style.visibility = "visible";
            return;
        }

        var head = document.head || document.getElementsByTagName("head")[0];
        //newstyle && head.removeChild(newstyle);
       

        for (var i = 0; i < styles.length; i++) {
            var newstyle = document.createElement("style");
            var csses = "";
            var style = styles[i];
            var ncId = style.getAttribute('data-nuclearId');
            var css = style.innerHTML;
            newstyle.setAttribute('data-scoper-nuclearId', ncId);
            if (css && (style.parentElement.nodeName !== "BODY")) {
                var id = "nuclear-scoper-" + ncId;
                var prefix = "#" + id;

                //var wrapper = document.createElement("span");
                //wrapper.id = id;

                var parent = style.parentNode;
                var grandparent = parent.parentNode;

                parent.id = id;
                //grandparent.replaceChild(wrapper, parent);
                //wrapper.appendChild(parent);
                style.parentNode.removeChild(style);

                csses = csses + scoper(css, prefix);
            }
            if (newstyle.styleSheet) {
                newstyle.styleSheet.cssText = csses;
            } else {
                newstyle.appendChild(document.createTextNode(csses));
            }

            head.appendChild(newstyle);
        }

       
        document.getElementsByTagName("body")[0].style.visibility = "visible";
    }



    if ("scoped" in document.createElement("style")) {
        Nuclear.refreshStyle= function(){};
        return;
    }

    init();

    if (document.readyState === "complete" || document.readyState === "loaded") {
        process();
    } else {
        document.addEventListener("DOMContentLoaded", process);
    }

    Nuclear.refreshStyle = function (ncId) {
        var style = document.querySelector('style[data-scoper-nuclearId="' + ncId + '"]');
        style&&style.parentNode.removeChild(style);
       // console.log(style)
        process();
    };
}());



    return Nuclear;
}));