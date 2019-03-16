"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const t = require("babel-types");
const babel_generator_1 = require("babel-generator");
const code_frame_1 = require("@babel/code-frame");
const constant_1 = require("./constant");
const lodash_1 = require("lodash");
const fs = require("fs");
const path = require("path");
const jsx_1 = require("./jsx");
const adapter_1 = require("./adapter");
const options_1 = require("./options");
const template = require('babel-template');
exports.incrementId = () => {
    let id = 0;
    return () => id++;
};
function getSuperClassCode(path) {
    const superClass = path.node.superClass;
    if (t.isIdentifier(superClass)) {
        const binding = path.scope.getBinding(superClass.name);
        if (binding && binding.kind === 'module') {
            const bindingPath = binding.path.parentPath;
            if (bindingPath.isImportDeclaration()) {
                const source = bindingPath.node.source;
                if (source.value === constant_1.TARO_PACKAGE_NAME) {
                    return;
                }
                try {
                    const p = pathResolver(source.value, options_1.transformOptions.sourcePath) + (options_1.transformOptions.isTyped ? '.tsx' : '.js');
                    const code = fs.readFileSync(p, 'utf8');
                    return {
                        code,
                        sourcePath: source.value
                    };
                }
                catch (error) {
                    return;
                }
            }
        }
    }
}
exports.getSuperClassCode = getSuperClassCode;
function isContainStopPropagation(path) {
    let matched = false;
    if (path) {
        path.traverse({
            Identifier(p) {
                if (p.node.name === 'stopPropagation' &&
                    p.parentPath.parentPath.isCallExpression()) {
                    matched = true;
                }
            }
        });
    }
    return matched;
}
exports.isContainStopPropagation = isContainStopPropagation;
function decodeUnicode(s) {
    return unescape(s.replace(/\\(u[0-9a-fA-F]{4})/gm, '%$1'));
}
exports.decodeUnicode = decodeUnicode;
function isVarName(str) {
    if (typeof str !== 'string') {
        return false;
    }
    if (str.trim() !== str) {
        return false;
    }
    try {
        // tslint:disable-next-line:no-unused-expression
        new Function(str, 'var ' + str);
    }
    catch (e) {
        return false;
    }
    return true;
}
exports.isVarName = isVarName;
function findMethodName(expression) {
    let methodName;
    if (t.isIdentifier(expression) ||
        t.isJSXIdentifier(expression)) {
        methodName = expression.name;
    }
    else if (t.isStringLiteral(expression)) {
        methodName = expression.value;
    }
    else if (t.isMemberExpression(expression) &&
        t.isIdentifier(expression.property)) {
        const { code } = babel_generator_1.default(expression);
        const ids = code.split('.');
        if (ids[0] === 'this' && ids[1] === 'props' && ids[2]) {
            methodName = code.replace('this.props.', '');
        }
        else {
            methodName = expression.property.name;
        }
    }
    else if (t.isCallExpression(expression) &&
        t.isMemberExpression(expression.callee) &&
        t.isIdentifier(expression.callee.object)) {
        methodName = expression.callee.object.name;
    }
    else if (t.isCallExpression(expression) &&
        t.isMemberExpression(expression.callee) &&
        t.isMemberExpression(expression.callee.object) &&
        t.isIdentifier(expression.callee.property) &&
        expression.callee.property.name === 'bind' &&
        t.isIdentifier(expression.callee.object.property)) {
        methodName = expression.callee.object.property.name;
    }
    else {
        throw codeFrameError(expression.loc, '当 props 为事件时(props name 以 `on` 开头)，只能传入一个 this 作用域下的函数。');
    }
    return methodName;
}
exports.findMethodName = findMethodName;
function setParentCondition(jsx, expr, array = false) {
    const conditionExpr = jsx.findParent(p => p.isConditionalExpression());
    const logicExpr = jsx.findParent(p => p.isLogicalExpression({ operator: '&&' }));
    if (array) {
        const ifAttrSet = new Set([
            adapter_1.Adapter.if,
            adapter_1.Adapter.else
        ]);
        const logicalJSX = jsx.findParent(p => p.isJSXElement() && p.node.openingElement.attributes.some(a => ifAttrSet.has(a.name.name)));
        if (logicalJSX) {
            const attr = logicalJSX.node.openingElement.attributes.find(a => ifAttrSet.has(a.name.name));
            if (attr) {
                if (attr.name.name === adapter_1.Adapter.else) {
                    const prevElement = logicalJSX.getPrevSibling();
                    if (prevElement && prevElement.isJSXElement()) {
                        const attr = prevElement.node.openingElement.attributes.find(a => a.name.name === adapter_1.Adapter.if);
                        if (attr && t.isJSXExpressionContainer(attr.value)) {
                            expr = t.conditionalExpression(reverseBoolean(lodash_1.cloneDeep(attr.value.expression)), expr, t.arrayExpression());
                            return expr;
                        }
                    }
                }
                else if (t.isJSXExpressionContainer(attr.value)) {
                    expr = t.conditionalExpression(lodash_1.cloneDeep(attr.value.expression), expr, t.arrayExpression());
                    return expr;
                }
            }
        }
    }
    if (conditionExpr && conditionExpr.isConditionalExpression()) {
        const consequent = conditionExpr.get('consequent');
        if (consequent === jsx || jsx.findParent(p => p === consequent)) {
            expr = t.conditionalExpression(lodash_1.cloneDeep(conditionExpr.get('test').node), expr, array ? t.arrayExpression([]) : t.nullLiteral());
        }
    }
    if (logicExpr && logicExpr.isLogicalExpression({ operator: '&&' })) {
        const consequent = logicExpr.get('right');
        if (consequent === jsx || jsx.findParent(p => p === consequent)) {
            expr = t.conditionalExpression(lodash_1.cloneDeep(logicExpr.get('left').node), expr, array ? t.arrayExpression([]) : t.nullLiteral());
        }
    }
    return expr;
}
exports.setParentCondition = setParentCondition;
function generateAnonymousState(scope, expression, refIds, isLogical) {
    let variableName = `anonymousState_${scope.generateUid()}`;
    let statementParent = expression.getStatementParent();
    if (!statementParent) {
        throw codeFrameError(expression.node.loc, '无法生成匿名 State，尝试先把值赋到一个变量上再把变量调换。');
    }
    const jsx = isLogical ? expression : expression.findParent(p => p.isJSXElement());
    const callExpr = jsx.findParent(p => p.isCallExpression() && isArrayMapCallExpression(p));
    const ifExpr = jsx.findParent(p => p.isIfStatement());
    const blockStatement = jsx.findParent(p => p.isBlockStatement() && p.parentPath === ifExpr);
    const expr = setParentCondition(jsx, lodash_1.cloneDeep(expression.node));
    if (!callExpr) {
        refIds.add(t.identifier(variableName));
        statementParent.insertBefore(buildConstVariableDeclaration(variableName, expr));
        if (blockStatement && blockStatement.isBlockStatement()) {
            blockStatement.traverse({
                VariableDeclarator: (p) => {
                    const { id, init } = p.node;
                    if (t.isIdentifier(id) && !id.name.startsWith(constant_1.LOOP_STATE)) {
                        const newId = scope.generateDeclaredUidIdentifier('$' + id.name);
                        refIds.forEach((refId) => {
                            if (refId.name === variableName && !variableName.startsWith('_$')) {
                                refIds.delete(refId);
                            }
                        });
                        variableName = newId.name;
                        refIds.add(t.identifier(variableName));
                        blockStatement.scope.rename(id.name, newId.name);
                        p.parentPath.replaceWith(template('ID = INIT;')({ ID: newId, INIT: init }));
                    }
                }
            });
        }
    }
    else {
        variableName = `${constant_1.LOOP_STATE}_${callExpr.scope.generateUid()}`;
        const func = callExpr.node.arguments[0];
        if (t.isArrowFunctionExpression(func)) {
            if (!t.isBlockStatement(func.body)) {
                func.body = t.blockStatement([
                    buildConstVariableDeclaration(variableName, expr),
                    t.returnStatement(func.body)
                ]);
            }
            else {
                func.body.body.splice(func.body.body.length - 1, 0, buildConstVariableDeclaration(variableName, expr));
            }
        }
    }
    const id = t.identifier(variableName);
    expression.replaceWith(id);
    return id;
}
exports.generateAnonymousState = generateAnonymousState;
function isArrayMapCallExpression(callExpression) {
    return callExpression &&
        t.isCallExpression(callExpression.node) &&
        t.isMemberExpression(callExpression.node.callee) &&
        t.isIdentifier(callExpression.node.callee.property, { name: 'map' });
}
exports.isArrayMapCallExpression = isArrayMapCallExpression;
function buildConstVariableDeclaration(variableName, expresion) {
    return t.variableDeclaration('const', [
        t.variableDeclarator(t.identifier(variableName), expresion)
    ]);
}
exports.buildConstVariableDeclaration = buildConstVariableDeclaration;
function setTemplate(name, path, templates) {
    const parentPath = path.parentPath;
    const jsxChildren = parentPath.findParent(p => p.isJSXElement());
    if (name && !jsxChildren) {
        templates.set(name, path.node);
    }
}
exports.setTemplate = setTemplate;
function isContainFunction(p) {
    let bool = false;
    p.traverse({
        CallExpression() {
            bool = true;
        }
    });
    return bool;
}
exports.isContainFunction = isContainFunction;
function slash(input) {
    const isExtendedLengthPath = /^\\\\\?\\/.test(input);
    const hasNonAscii = /[^\u0000-\u0080]+/.test(input);
    const hasChinese = /[^\u4e00-\u9fa5]+/.test(input); // has Chinese characters
    if (isExtendedLengthPath || (hasNonAscii && !hasChinese)) {
        return input;
    }
    return input.replace(/\\/g, '/');
}
function pathResolver(source, location) {
    const extName = path.extname(source);
    const promotedPath = source;
    if (!['js', 'tsx'].includes(extName)) {
        try {
            const pathExist = fs.existsSync(path.resolve(path.dirname(location), source, 'index.js'));
            const tsxPathExist = fs.existsSync(path.resolve(path.dirname(location), source, 'index.tsx'));
            if (pathExist || tsxPathExist) {
                let p = path.join(promotedPath, 'index');
                if (!p.startsWith('.')) {
                    p = './' + p;
                }
                return slash(p);
            }
            return slash(promotedPath);
        }
        catch (error) {
            return slash(promotedPath);
        }
    }
    return slash(promotedPath.split('.').slice(0, -1).join('.'));
}
exports.pathResolver = pathResolver;
function codeFrameError(node, msg) {
    let errMsg = '';
    try {
        errMsg = code_frame_1.codeFrameColumns(exports.setting.sourceCode, node && node.type && node.loc ? node.loc : node, {
            highlightCode: true
        });
    }
    catch (error) {
        errMsg = 'failed to locate source';
    }
    return new Error(`${msg}
-----
${errMsg}`);
}
exports.codeFrameError = codeFrameError;
exports.setting = {
    sourceCode: ''
};
function createUUID() {
    return '$' + 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        let r = Math.random() * 16 | 0;
        let v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    }).replace(/-/g, '').slice(0, 8);
}
exports.createUUID = createUUID;
function createRandomLetters(n) {
    const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    return Array(n).join().split(',').map(function () { return str.charAt(Math.floor(Math.random() * str.length)); }).join('');
}
exports.createRandomLetters = createRandomLetters;
function isBlockIfStatement(ifStatement, blockStatement) {
    return ifStatement && blockStatement &&
        ifStatement.isIfStatement() &&
        blockStatement.isBlockStatement();
}
exports.isBlockIfStatement = isBlockIfStatement;
function buildCodeFrame(code) {
    return (loc) => code_frame_1.codeFrameColumns(code, loc);
}
exports.buildCodeFrame = buildCodeFrame;
function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
exports.isNumeric = isNumeric;
function buildJSXAttr(name, value) {
    return t.jSXAttribute(t.jSXIdentifier(name), t.jSXExpressionContainer(value));
}
exports.buildJSXAttr = buildJSXAttr;
function newJSXIfAttr(jsx, value, path) {
    const element = jsx.openingElement;
    if (!t.isJSXIdentifier(element.name)) {
        return;
    }
    if (element.name.name === 'Block' || element.name.name === 'block' || !path) {
        element.attributes.push(buildJSXAttr(adapter_1.Adapter.if, value));
    }
    else {
        const block = jsx_1.buildBlockElement();
        newJSXIfAttr(block, value);
        block.children.push(jsx);
        path.node = block;
    }
}
exports.newJSXIfAttr = newJSXIfAttr;
function getSlotName(name) {
    return name.slice(6).toLowerCase();
}
exports.getSlotName = getSlotName;
function isContainJSXElement(path) {
    let matched = false;
    path.traverse({
        JSXElement(p) {
            matched = true;
            p.stop();
        }
    });
    return matched;
}
exports.isContainJSXElement = isContainJSXElement;
function hasComplexExpression(path) {
    let matched = false;
    if (isContainJSXElement(path)) {
        return false;
    }
    if (path.isObjectExpression()) {
        return true;
    }
    if (path.isTemplateLiteral() || path.isCallExpression()) {
        return true;
    }
    if (path.isArrayExpression()) {
        const { elements } = path.node;
        if (elements.some(el => t.isObjectExpression(el) || t.isArrayExpression(el))) {
            return true;
        }
    }
    path.traverse({
        CallExpression: (p) => {
            matched = true;
            p.stop();
        },
        TemplateLiteral(p) {
            matched = true;
            p.stop();
        },
        ObjectExpression(p) {
            matched = true;
            p.stop();
        },
        ArrayExpression(p) {
            const { elements } = p.node;
            if (elements.some(el => t.isObjectExpression(el))) {
                return true;
            }
        },
        TaggedTemplateExpression(p) {
            matched = true;
            p.stop();
        },
        MemberExpression(path) {
            // @fix 放弃这个逻辑，导致后续变更 this.update 的 data 对应不上了
            // const jsxElement = path.findParent(p => p.isJSXExpressionContainer());
            // const object = path.get('object');
            // const property = path.get('property');
            // const parentPath = path.parentPath;
            // if (jsxElement &&
            //     object.isThisExpression() &&
            //     property.isIdentifier({ name: 'data' }) &&
            //     parentPath.isMemberExpression() &&
            //     parentPath.parentPath.isMemberExpression()) {
            //     const sourceCode = parentPath.parentPath.getSource();
            //     if (sourceCode.includes('[') && sourceCode.includes(']')) {
            //         matched = true;
            //         path.stop();
            //     }
            // }
        }
    });
    return matched;
}
exports.hasComplexExpression = hasComplexExpression;
function findFirstIdentifierFromMemberExpression(node, member) {
    let id;
    let object = node.object;
    while (true) {
        if (t.identifier(object) && !t.isMemberExpression(object)) {
            id = object;
            if (member) {
                object = member;
            }
            break;
        }
        object = object.object;
    }
    return id;
}
exports.findFirstIdentifierFromMemberExpression = findFirstIdentifierFromMemberExpression;
function getArgumentName(arg) {
    if (t.isThisExpression(arg)) {
        return 'this';
    }
    else if (t.isNullLiteral(arg)) {
        return 'null';
    }
    else if (t.isStringLiteral(arg) || t.isNumericLiteral(arg)) {
        return arg.value;
    }
    else if (t.isIdentifier(arg)) {
        return arg.name;
    }
    else {
        return babel_generator_1.default(arg).code;
    }
    throw new Error(`bind 不支持传入该参数: ${arg}`);
}
exports.getArgumentName = getArgumentName;
function isAllLiteral(...args) {
    return args.every(p => t.isLiteral(p));
}
exports.isAllLiteral = isAllLiteral;
function reverseBoolean(expression) {
    return t.unaryExpression('!', expression);
}
exports.reverseBoolean = reverseBoolean;
function isEmptyDeclarator(node) {
    if (t.isVariableDeclarator(node) &&
        (node.init === null ||
            t.isNullLiteral(node.init))) {
        return true;
    }
    return false;
}
exports.isEmptyDeclarator = isEmptyDeclarator;
function toLetters(num) {
    let mod = num % 26;
    let pow = num / 26 | 0;
    let out = mod ? String.fromCharCode(64 + mod) : (--pow, 'Z');
    const letter = pow ? toLetters(pow) + out : out;
    return letter.toLowerCase();
}
exports.toLetters = toLetters;
function findIdentifierFromStatement(statement) {
    if (t.isVariableDeclaration(statement)) {
        const declarator = statement.declarations.find(s => t.isIdentifier(s.id));
        if (declarator && t.isIdentifier(declarator.id)) {
            return declarator.id.name;
        }
    }
    return '__return';
}
exports.findIdentifierFromStatement = findIdentifierFromStatement;
//# sourceMappingURL=utils.js.map
