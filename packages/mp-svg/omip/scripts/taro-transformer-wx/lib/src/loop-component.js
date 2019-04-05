"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const t = require("babel-types");
const utils_1 = require("./utils");
const jsx_1 = require("./jsx");
const constant_1 = require("./constant");
const adapter_1 = require("./adapter");
// @TODO
// 重构 parseRender 和 parseLoop 失败
// 尚不清楚 babel 的 data 和 context 传参机制
// 目前先写两份代码，有时间看看 babel 具体对 data 和 context 做了什么导致传参失败
function parseLoopBody(body, jsxDeclarations, 
// @TODO
// 把 templates 换成 Map 可以支持 shalow variables declared
// 现在先用 ESLint 的 no-shalow 顶着
templates, loopScopes, finalReturnElement, returnedPaths) {
    const bodyScope = body.scope;
    body.traverse({
        JSXElement(jsxElementPath) {
            const parentNode = jsxElementPath.parent;
            const parentPath = jsxElementPath.parentPath;
            const isFinalReturn = jsxElementPath.getFunctionParent().isClassMethod();
            const isJSXChildren = t.isJSXElement(parentNode);
            if (!isJSXChildren) {
                let statementParent = jsxElementPath.getStatementParent();
                if (!(statementParent.isVariableDeclaration() ||
                    statementParent.isExpressionStatement())) {
                    statementParent = statementParent.findParent(s => s.isVariableDeclaration() || s.isExpressionStatement());
                }
                jsxDeclarations.add(statementParent);
                if (t.isVariableDeclarator(parentNode)) {
                    if (statementParent) {
                        const name = utils_1.findIdentifierFromStatement(statementParent.node);
                        // setTemplate(name, path, templates)
                        name && templates.set(name, jsxElementPath.node);
                    }
                }
                else if (t.isLogicalExpression(parentNode)) {
                    const { left, operator } = parentNode;
                    if (operator === '&&') {
                        if (t.isExpression(left)) {
                            utils_1.newJSXIfAttr(jsxElementPath.node, left);
                            parentPath.replaceWith(jsxElementPath.node);
                            if (statementParent) {
                                const name = utils_1.findIdentifierFromStatement(statementParent.node);
                                utils_1.setTemplate(name, jsxElementPath, templates);
                                // name && templates.set(name, path.node)
                            }
                        }
                    }
                }
                else if (t.isConditionalExpression(parentNode)) {
                    const { test, consequent, alternate } = parentNode;
                    const block = jsx_1.buildBlockElement();
                    if (t.isJSXElement(consequent) && t.isLiteral(alternate)) {
                        const { value, confident } = parentPath.get('alternate').evaluate();
                        if (confident && !value) {
                            utils_1.newJSXIfAttr(block, test);
                            block.children = [jsxElementPath.node];
                            // newJSXIfAttr(jsxElementPath.node, test)
                            parentPath.replaceWith(block);
                            if (statementParent) {
                                const name = utils_1.findIdentifierFromStatement(statementParent.node);
                                utils_1.setTemplate(name, jsxElementPath, templates);
                                // name && templates.set(name, path.node)
                            }
                        }
                    }
                    else if (t.isLiteral(consequent) && t.isJSXElement(consequent)) {
                        if (t.isNullLiteral(consequent)) {
                            utils_1.newJSXIfAttr(block, utils_1.reverseBoolean(test));
                            // newJSXIfAttr(jsxElementPath.node, reverseBoolean(test))
                            parentPath.replaceWith(block);
                            if (statementParent) {
                                const name = utils_1.findIdentifierFromStatement(statementParent.node);
                                utils_1.setTemplate(name, jsxElementPath, templates);
                                // name && templates.set(name, path.node)
                            }
                        }
                    }
                    else if (t.isJSXElement(consequent) && t.isJSXElement(alternate)) {
                        const block2 = jsx_1.buildBlockElement();
                        block.children = [consequent];
                        utils_1.newJSXIfAttr(block, test);
                        jsx_1.setJSXAttr(block2, adapter_1.Adapter.else);
                        block2.children = [alternate];
                        const parentBlock = jsx_1.buildBlockElement();
                        parentBlock.children = [block, block2];
                        parentPath.replaceWith(parentBlock);
                        if (statementParent) {
                            const name = utils_1.findIdentifierFromStatement(statementParent.node);
                            utils_1.setTemplate(name, jsxElementPath, templates);
                        }
                    }
                    else {
                        // console.log('todo')
                    }
                }
                else if (t.isReturnStatement(parentNode)) {
                    if (!isFinalReturn) {
                        const caller = parentPath.findParent(p => p.isCallExpression());
                        if (caller.isCallExpression()) {
                            const callee = caller.node.callee;
                            if (t.isMemberExpression(callee) &&
                                t.isIdentifier(callee.property) &&
                                callee.property.name === 'map') {
                                let ary = callee.object;
                                const blockStatementPath = parentPath.findParent(p => p.isBlockStatement());
                                const body = blockStatementPath.node.body;
                                let stateToBeAssign = new Set();
                                for (const statement of body) {
                                    if (t.isVariableDeclaration(statement)) {
                                        for (const dcl of statement.declarations) {
                                            if (t.isIdentifier(dcl.id)) {
                                                const scope = blockStatementPath.scope;
                                                const stateName = scope.generateUid(constant_1.LOOP_STATE);
                                                stateToBeAssign.add(stateName);
                                                blockStatementPath.scope.rename(dcl.id.name, stateName);
                                            }
                                        }
                                    }
                                }
                                if (t.isCallExpression(ary) || utils_1.isContainFunction(caller.get('callee').get('object'))) {
                                    const variableName = `anonymousState_${bodyScope.generateUid()}`;
                                    caller.getStatementParent().insertBefore(utils_1.buildConstVariableDeclaration(variableName, ary));
                                    ary = t.identifier(variableName);
                                }
                                jsx_1.setJSXAttr(jsxElementPath.node, adapter_1.Adapter.for, t.jSXExpressionContainer(ary));
                                const [func] = caller.node.arguments;
                                if (t.isFunctionExpression(func) ||
                                    t.isArrowFunctionExpression(func)) {
                                    const [item, index] = func.params;
                                    if (t.isIdentifier(item)) {
                                        jsx_1.setJSXAttr(jsxElementPath.node, adapter_1.Adapter.forItem, t.stringLiteral(item.name));
                                        loopScopes.add(item.name);
                                    }
                                    else {
                                        jsx_1.setJSXAttr(jsxElementPath.node, adapter_1.Adapter.forItem, t.stringLiteral('__item'));
                                    }
                                    if (t.isIdentifier(index)) {
                                        jsx_1.setJSXAttr(jsxElementPath.node, adapter_1.Adapter.forIndex, t.stringLiteral(index.name));
                                        loopScopes.add(index.name);
                                    }
                                    caller.replaceWith(jsxElementPath.node);
                                    if (statementParent) {
                                        const name = utils_1.findIdentifierFromStatement(statementParent.node);
                                        // setTemplate(name, path, templates)
                                        name && templates.set(name, jsxElementPath.node);
                                    }
                                }
                            }
                        }
                    }
                    else {
                        const ifStatement = parentPath.findParent(p => p.isIfStatement());
                        const blockStatement = parentPath.findParent(p => p.isBlockStatement());
                        const block = finalReturnElement || jsx_1.buildBlockElement();
                        if (utils_1.isBlockIfStatement(ifStatement, blockStatement)) {
                            const { test, alternate, consequent } = ifStatement.node;
                            if (alternate === blockStatement.node) {
                                throw utils_1.codeFrameError(parentNode.loc, '不必要的 else 分支，请遵从 ESLint consistent-return: https://eslint.org/docs/rules/consistent-return');
                            }
                            else if (consequent === blockStatement.node) {
                                const parentIfStatement = ifStatement.findParent(p => p.isIfStatement());
                                if (parentIfStatement) {
                                    jsx_1.setJSXAttr(jsxElementPath.node, adapter_1.Adapter.elseif, t.jSXExpressionContainer(test));
                                }
                                else {
                                    utils_1.newJSXIfAttr(jsxElementPath.node, test);
                                }
                            }
                        }
                        else if (block.children.length !== 0) {
                            jsx_1.setJSXAttr(jsxElementPath.node, adapter_1.Adapter.else);
                        }
                        block.children.push(jsxElementPath.node);
                        finalReturnElement = block;
                        returnedPaths.push(parentPath);
                    }
                }
                else if (t.isArrowFunctionExpression(parentNode)) {
                    //
                }
                else if (t.isAssignmentExpression(parentNode)) {
                    if (t.isIdentifier(parentNode.left)) {
                        const name = parentNode.left.name;
                        const bindingNode = bodyScope.getOwnBinding(name).path.node;
                        const block = templates.get(name) || jsx_1.buildBlockElement();
                        if (utils_1.isEmptyDeclarator(bindingNode)) {
                            const ifStatement = parentPath.findParent(p => p.isIfStatement());
                            const blockStatement = parentPath.findParent(p => p.isBlockStatement());
                            if (utils_1.isBlockIfStatement(ifStatement, blockStatement)) {
                                const { test, alternate, consequent } = ifStatement.node;
                                if (alternate === blockStatement.node) {
                                    jsx_1.setJSXAttr(jsxElementPath.node, adapter_1.Adapter.else);
                                }
                                else if (consequent === blockStatement.node) {
                                    const parentIfStatement = ifStatement.findParent(p => p.isIfStatement());
                                    if (parentIfStatement && parentIfStatement.get('alternate') === ifStatement) {
                                        jsx_1.setJSXAttr(jsxElementPath.node, adapter_1.Adapter.elseif, t.jSXExpressionContainer(test));
                                    }
                                    else {
                                        if (parentIfStatement) {
                                            utils_1.newJSXIfAttr(block, parentIfStatement.node.test);
                                        }
                                        utils_1.newJSXIfAttr(jsxElementPath.node, test);
                                    }
                                }
                                block.children.push(jsxElementPath.node);
                                // setTemplate(name, path, templates)
                                name && templates.set(name, block);
                            }
                        }
                        else {
                            throw utils_1.codeFrameError(jsxElementPath.node.loc, '请将 JSX 赋值表达式初始化为 null，然后再进行 if 条件表达式赋值。');
                        }
                    }
                }
                else if (!t.isJSXElement(parentNode)) {
                    // throwError(path, '考虑只对 JSX 元素赋值一次。')
                }
            }
        }
    });
}
exports.parseLoopBody = parseLoopBody;
//# sourceMappingURL=loop-component.js.map