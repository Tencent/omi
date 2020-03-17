"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const t = require("babel-types");
const utils_1 = require("./utils");
const constant_1 = require("./constant");
const lodash_1 = require("lodash");
const render_1 = require("./render");
const jsx_1 = require("./jsx");
const adapter_1 = require("./adapter");
const babel_generator_1 = require("babel-generator");
function buildConstructor() {
    const ctor = t.classMethod('constructor', t.identifier('constructor'), [t.identifier('props')], t.blockStatement([
        t.expressionStatement(t.callExpression(t.identifier('super'), [
            t.identifier('props')
        ]))
    ]));
    return ctor;
}
function processThisPropsFnMemberProperties(member, path, args, binded) {
    const propertyArray = [];
    function traverseMember(member) {
        const object = member.object;
        const property = member.property;
        if (t.isIdentifier(property)) {
            propertyArray.push(property.name);
        }
        if (t.isMemberExpression(object)) {
            if (t.isThisExpression(object.object) &&
                t.isIdentifier(object.property) &&
                object.property.name === 'props') {
                if ("alipay" /* alipay */ === adapter_1.Adapter.type) {
                    if (binded)
                        args.shift();
                    path.replaceWith(t.callExpression(t.memberExpression(t.thisExpression(), t.identifier('__triggerPropsFn')), [
                        t.stringLiteral(propertyArray.reverse().join('.')),
                        t.arrayExpression(args)
                    ]));
                }
                else {
                    path.replaceWith(t.callExpression(t.memberExpression(t.thisExpression(), t.identifier('__triggerPropsFn')), [t.stringLiteral(propertyArray.reverse().join('.')), t.callExpression(t.memberExpression(t.arrayExpression([t.nullLiteral()]), t.identifier('concat')), [t.arrayExpression(args)])]));
                }
            }
            traverseMember(object);
        }
    }
    traverseMember(member);
}
class Transformer {
    constructor(path, sourcePath, componentProperies, 
    //@fix add arg => componentSourceMap
    componentSourceMap) {
        this.result = {
            template: '',
            components: [],
            componentProperies: []
        };
        this.methods = new Map();
        this.initState = new Set();
        this.jsxReferencedIdentifiers = new Set();
        this.customComponents = new Map();
        this.anonymousMethod = new Map();
        this.renderMethod = null;
        this.customComponentNames = new Set();
        this.usedState = new Set();
        this.loopStateName = new Map();
        this.customComponentData = [];
        this.refs = [];
        this.loopRefs = new Map();
        this.anonymousFuncCounter = utils_1.incrementId();
        this.buildPropsAnonymousFunc = (attr, expr, isBind = false) => {
            const { code } = babel_generator_1.default(expr);
            if (code.startsWith('this.props')) {
                const methodName = utils_1.findMethodName(expr);
                const hasMethodName = this.anonymousMethod.has(methodName) || !methodName;
                const funcName = hasMethodName
                    ? this.anonymousMethod.get(methodName)
                    // 测试时使用1个稳定的 uniqueID 便于测试，实际使用5个英文字母，否则小程序不支持
                    : process.env.NODE_ENV === 'test' ? lodash_1.uniqueId('funPrivate') : `funPrivate${utils_1.createRandomLetters(5)}`;
                this.anonymousMethod.set(methodName, funcName);
                const newVal = isBind
                    ? t.callExpression(t.memberExpression(t.memberExpression(t.thisExpression(), t.identifier(funcName)), t.identifier('bind')), expr.arguments || [])
                    : t.memberExpression(t.thisExpression(), t.identifier(funcName));
                attr.get('value.expression').replaceWith(newVal);
                this.methods.set(funcName, null);
                this.componentProperies.add(methodName);
                if (hasMethodName) {
                    return;
                }
                const attrName = attr.node.name;
                if (t.isJSXIdentifier(attrName) && attrName.name.startsWith('on')) {
                    this.componentProperies.add(`__fn_${attrName.name}`);
                }
                if (methodName.startsWith('on')) {
                    this.componentProperies.add(`__fn_${methodName}`);
                }
                const method = t.classMethod('method', t.identifier(funcName), [], t.blockStatement([
                    t.expressionStatement(t.callExpression(t.memberExpression(t.thisExpression(), t.identifier('__triggerPropsFn')), [t.stringLiteral(methodName), t.arrayExpression([t.spreadElement(t.identifier('arguments'))])]))
                ]));
                this.classPath.node.body.body = this.classPath.node.body.body.concat(method);
            }
        };
        this.classPath = path;
        this.sourcePath = sourcePath;
        //@fix add arg => componentSourceMap
        this.componentSourceMap = componentSourceMap;
        for (let key of this.componentSourceMap) {
            const arr = key[0].split('/');
            if (arr[arr.length - 1].indexOf('-') !== -1 && key[0].indexOf('components/') !== -1 && key[1].length === 0) {
                this.customComponents.set(arr[arr.length - 1], {
                    sourcePath: key[0],
                    type: 'default'
                });
            }
        }
        this.moduleNames = Object.keys(path.scope.getAllBindings('module'));
        this.componentProperies = new Set(componentProperies);
        this.compile();
    }
    setMultipleSlots() {
        const body = this.classPath.node.body.body;
        if (body.some(c => t.isClassProperty(c) && c.key.name === 'multipleSlots')) {
            return;
        }
        const multipleSlots = t.classProperty(t.identifier('multipleSlots'), t.booleanLiteral(true));
        multipleSlots.static = true;
        body.push(multipleSlots);
    }
    createStringRef(componentName, id, refName) {
        this.refs.push({
            type: constant_1.DEFAULT_Component_SET.has(componentName) ? 'dom' : 'component',
            id,
            refName
        });
    }
    createFunctionRef(componentName, id, fn) {
        this.refs.push({
            type: constant_1.DEFAULT_Component_SET.has(componentName) ? 'dom' : 'component',
            id,
            fn
        });
    }
    handleRefs() {
        const objExpr = this.refs.map(ref => {
            return t.objectExpression([
                t.objectProperty(t.identifier('type'), t.stringLiteral(ref.type)),
                t.objectProperty(t.identifier('id'), t.stringLiteral(ref.id)),
                t.objectProperty(t.identifier('refName'), t.stringLiteral(ref.refName || '')),
                t.objectProperty(t.identifier('fn'), ref.fn ? ref.fn : t.nullLiteral())
            ]);
        });
        this.classPath.node.body.body.push(t.classProperty(t.identifier('$$refs'), t.arrayExpression(objExpr)));
    }
    traverse() {
        const self = this;
        self.classPath.traverse({
            JSXOpeningElement: (path) => {
                const jsx = path.node;
                const attrs = jsx.attributes;
                if (!t.isJSXIdentifier(jsx.name)) {
                    return;
                }
                const loopCallExpr = path.findParent(p => utils_1.isArrayMapCallExpression(p));
                const componentName = jsx.name.name;
                const refAttr = jsx_1.findJSXAttrByName(attrs, 'ref');
                if (!refAttr) {
                    return;
                }
                const idAttr = jsx_1.findJSXAttrByName(attrs, 'id');
                let id = utils_1.createRandomLetters(5);
                let idExpr;
                if (!idAttr) {
                    if (loopCallExpr && loopCallExpr.isCallExpression()) {
                        const [func] = loopCallExpr.node.arguments;
                        let indexId = null;
                        if (t.isFunctionExpression(func) || t.isArrowFunctionExpression(func)) {
                            const params = func.params;
                            indexId = params[1];
                        }
                        if (indexId === null || !t.isIdentifier(indexId)) {
                            throw utils_1.codeFrameError(path.node, '在循环中使用 ref 必须暴露循环的第二个参数 `index`');
                        }
                        attrs.push(t.jSXAttribute(t.jSXIdentifier('id'), t.jSXExpressionContainer(t.binaryExpression('+', t.stringLiteral(id), indexId))));
                    }
                    else {
                        attrs.push(t.jSXAttribute(t.jSXIdentifier('id'), t.stringLiteral(id)));
                    }
                }
                else {
                    const idValue = idAttr.value;
                    if (t.isStringLiteral(idValue)) {
                        id = idValue.value;
                    }
                    else if (t.isJSXExpressionContainer(idValue)) {
                        if (t.isStringLiteral(idValue.expression)) {
                            id = idValue.expression.value;
                        }
                        else {
                            idExpr = idValue.expression;
                        }
                    }
                }
                if (t.isStringLiteral(refAttr.value)) {
                    if (loopCallExpr) {
                        throw utils_1.codeFrameError(refAttr, '循环中的 ref 只能使用函数。');
                    }
                    this.createStringRef(componentName, id, refAttr.value.value);
                }
                if (t.isJSXExpressionContainer(refAttr.value)) {
                    const expr = refAttr.value.expression;
                    if (t.isStringLiteral(expr)) {
                        if (loopCallExpr) {
                            throw utils_1.codeFrameError(refAttr, '循环中的 ref 只能使用函数。');
                        }
                        this.createStringRef(componentName, id, expr.value);
                    }
                    else if (t.isArrowFunctionExpression(expr) || t.isMemberExpression(expr)) {
                        const type = constant_1.DEFAULT_Component_SET.has(componentName) ? 'dom' : 'component';
                        if (loopCallExpr) {
                            this.loopRefs.set(path.parentPath.node, {
                                id: idExpr || id,
                                fn: expr,
                                type,
                                component: path.parentPath
                            });
                        }
                        else {
                            this.refs.push({
                                type,
                                id,
                                fn: expr
                            });
                        }
                    }
                    else {
                        throw utils_1.codeFrameError(refAttr, 'ref 仅支持传入字符串、匿名箭头函数和 class 中已声明的函数');
                    }
                }
                for (const [index, attr] of attrs.entries()) {
                    if (attr === refAttr) {
                        attrs.splice(index, 1);
                    }
                }
            },
            ClassMethod(path) {
                const node = path.node;
                if (t.isIdentifier(node.key)) {
                    const name = node.key.name;
                    self.methods.set(name, path);
                    if (name === 'render') {
                        self.renderMethod = path;
                        path.traverse({
                            ReturnStatement(returnPath) {
                                const arg = returnPath.node.argument;
                                const ifStem = returnPath.findParent(p => p.isIfStatement());
                                if (ifStem && ifStem.isIfStatement() && arg === null) {
                                    const consequent = ifStem.get('consequent');
                                    if (consequent.isBlockStatement() && consequent.node.body.includes(returnPath.node)) {
                                        returnPath.get('argument').replaceWith(t.nullLiteral());
                                    }
                                }
                            }
                        });
                    }
                    if (name === 'constructor') {
                        path.traverse({
                            AssignmentExpression(p) {
                                if (t.isMemberExpression(p.node.left) &&
                                    t.isThisExpression(p.node.left.object) &&
                                    t.isIdentifier(p.node.left.property) &&
                                    p.node.left.property.name === 'data' &&
                                    t.isObjectExpression(p.node.right)) {
                                    const properties = p.node.right.properties;
                                    properties.forEach(p => {
                                        if (t.isObjectProperty(p) && t.isIdentifier(p.key)) {
                                            self.initState.add(p.key.name);
                                        }
                                    });
                                }
                            }
                        });
                    }
                }
            },
            IfStatement(path) {
                const test = path.get('test');
                const consequent = path.get('consequent');
                if (utils_1.isContainJSXElement(consequent) && utils_1.hasComplexExpression(test)) {
                    const scope = self.renderMethod && self.renderMethod.scope || path.scope;
                    utils_1.generateAnonymousState(scope, test, self.jsxReferencedIdentifiers, true);
                }
            },
            ClassProperty(path) {
                const { key: { name }, value } = path.node;
                if (t.isArrowFunctionExpression(value) || t.isFunctionExpression(value)) {
                    self.methods.set(name, path);
                }
                if (name === 'data' && t.isObjectExpression(value)) {
                    value.properties.forEach(p => {
                        if (t.isObjectProperty(p)) {
                            if (t.isIdentifier(p.key)) {
                                self.initState.add(p.key.name);
                            }
                        }
                    });
                }
            },
            JSXExpressionContainer(path) {
                const attr = path.findParent(p => p.isJSXAttribute());
                const isFunctionProp = attr && typeof attr.node.name.name === 'string' && attr.node.name.name.startsWith('on');
                path.traverse({
                    MemberExpression(path) {
                        const sibling = path.getSibling('property');
                        if (path.get('object').isThisExpression() &&
                            (path.get('property').isIdentifier({ name: 'props' }) || path.get('property').isIdentifier({ name: 'data' })) &&
                            sibling.isIdentifier()) {
                            if (!isFunctionProp) {
                                self.usedState.add(sibling.node.name);
                            }
                        }
                    }
                });
                const expression = path.get('expression');
                const scope = self.renderMethod && self.renderMethod.scope || path.scope;
                const calleeExpr = expression.get('callee');
                const parentPath = path.parentPath;
                if (utils_1.hasComplexExpression(expression) &&
                    !isFunctionProp &&
                    !(calleeExpr &&
                        calleeExpr.isMemberExpression() &&
                        calleeExpr.get('object').isMemberExpression() &&
                        calleeExpr.get('property').isIdentifier({ name: 'bind' })) // is not bind
                ) {
                    utils_1.generateAnonymousState(scope, expression, self.jsxReferencedIdentifiers);
                }
                else {
                    if (parentPath.isJSXAttribute()) {
                        if (!(expression.isMemberExpression() || expression.isIdentifier()) && parentPath.node.name.name === 'key') {
                            utils_1.generateAnonymousState(scope, expression, self.jsxReferencedIdentifiers);
                        }
                    }
                }
                if (!attr)
                    return;
                const key = attr.node.name;
                const value = attr.node.value;
                if (!t.isJSXIdentifier(key)) {
                    return;
                }
                if (t.isJSXIdentifier(key) && key.name.startsWith('on') && t.isJSXExpressionContainer(value)) {
                    const expr = value.expression;
                    if (t.isCallExpression(expr) && t.isMemberExpression(expr.callee) && t.isIdentifier(expr.callee.property, { name: 'bind' })) {
                        self.buildPropsAnonymousFunc(attr, expr, true);
                    }
                    else if (t.isMemberExpression(expr)) {
                        self.buildPropsAnonymousFunc(attr, expr, false);
                    }
                    else if (t.isArrowFunctionExpression(expr)) {
                        const exprPath = attr.get('value.expression');
                        const stemParent = path.getStatementParent();
                        const counter = self.anonymousFuncCounter();
                        const anonymousFuncName = `anonymousFunc${counter}`;
                        const isCatch = utils_1.isContainStopPropagation(exprPath);
                        const classBody = self.classPath.node.body.body;
                        const loopCallExpr = path.findParent(p => utils_1.isArrayMapCallExpression(p));
                        let index;
                        if (loopCallExpr) {
                            index = lodash_1.get(loopCallExpr, 'node.arguments[0].params[1]');
                            if (!t.isIdentifier(index)) {
                                index = t.identifier('__index' + counter);
                                lodash_1.set(loopCallExpr, 'node.arguments[0].params[1]', index);
                            }
                            classBody.push(t.classProperty(t.identifier(anonymousFuncName + 'Array'), t.arrayExpression([])));
                            const arrayFunc = t.memberExpression(t.memberExpression(t.thisExpression(), t.identifier(anonymousFuncName + 'Array')), t.identifier(index.name), true);
                            classBody.push(t.classMethod('method', t.identifier(anonymousFuncName), [t.identifier(index.name), t.identifier('e')], t.blockStatement([
                                isCatch ? t.expressionStatement(t.callExpression(t.memberExpression(t.identifier('e'), t.identifier('stopPropagation')), [])) : t.emptyStatement(),
                                t.expressionStatement(t.logicalExpression('&&', arrayFunc, t.callExpression(arrayFunc, [t.identifier('e')])))
                            ])));
                            exprPath.replaceWith(t.callExpression(t.memberExpression(t.memberExpression(t.thisExpression(), t.identifier(anonymousFuncName)), t.identifier('bind')), [t.thisExpression(), t.identifier(index.name)]));
                            stemParent.insertBefore(t.expressionStatement(t.assignmentExpression('=', arrayFunc, expr)));
                        }
                        else {
                            classBody.push(t.classMethod('method', t.identifier(anonymousFuncName), [t.identifier('e')], t.blockStatement([
                                isCatch ? t.expressionStatement(t.callExpression(t.memberExpression(t.identifier('e'), t.identifier('stopPropagation')), [])) : t.emptyStatement()
                            ])));
                            exprPath.replaceWith(t.memberExpression(t.thisExpression(), t.identifier(anonymousFuncName)));
                            stemParent.insertBefore(t.expressionStatement(t.assignmentExpression('=', t.memberExpression(t.thisExpression(), t.identifier(anonymousFuncName)), expr)));
                        }
                    }
                    else {
                        throw utils_1.codeFrameError(path.node, '组件事件传参只能在使用匿名箭头函数，或使用类作用域下的确切引用(this.handleXX || this.props.handleXX)，或使用 bind。');
                    }
                }
                const jsx = path.findParent(p => p.isJSXOpeningElement());
                if (!jsx)
                    return;
                const jsxName = jsx.node.name;
                if (!t.isJSXIdentifier(jsxName))
                    return;
                if (expression.isJSXElement())
                    return;
                if (constant_1.DEFAULT_Component_SET.has(jsxName.name) || expression.isIdentifier() || expression.isMemberExpression() || expression.isLiteral() || expression.isLogicalExpression() || expression.isConditionalExpression() || key.name.startsWith('on') || expression.isCallExpression())
                    return;
                utils_1.generateAnonymousState(scope, expression, self.jsxReferencedIdentifiers);
            },
            JSXElement(path) {
                const id = path.node.openingElement.name;
                //@fix extrat xx-xx components to customComponents list
                if (t.isJSXIdentifier(id) && id.name.indexOf('-') !== -1) {
                    for (let key of self.componentSourceMap) {
                        const arr = key[0].split('/');
                        if (arr[arr.length - 1] === id.name && key[1].length === 0) {
                            self.customComponents.set(id.name, {
                                sourcePath: key[0],
                                type: 'default'
                            });
                        }
                    }
                }
                if (t.isJSXIdentifier(id) &&
                    !constant_1.DEFAULT_Component_SET.has(id.name) &&
                    self.moduleNames.indexOf(id.name) !== -1) {
                    const name = id.name;
                    const binding = self.classPath.scope.getBinding(name);
                    if (binding && t.isImportDeclaration(binding.path.parent)) {
                        const sourcePath = binding.path.parent.source.value;
                        if (binding.path.isImportDefaultSpecifier()) {
                            self.customComponents.set(name, {
                                sourcePath,
                                type: 'default'
                            });
                        }
                        else {
                            self.customComponents.set(name, {
                                sourcePath,
                                type: 'pattern'
                            });
                        }
                    }
                }
            },
            MemberExpression: (path) => {
                const object = path.get('object');
                const property = path.get('property');
                if (!(object.isThisExpression() && property.isIdentifier({ name: 'props' }))) {
                    return;
                }
                const parentPath = path.parentPath;
                if (parentPath.isMemberExpression()) {
                    const siblingProp = parentPath.get('property');
                    if (siblingProp.isIdentifier()) {
                        const name = siblingProp.node.name;
                        if (name === 'children') {
                            parentPath.replaceWith(t.jSXElement(t.jSXOpeningElement(t.jSXIdentifier('slot'), [], true), t.jSXClosingElement(t.jSXIdentifier('slot')), [], true));
                        }
                        else if (/^render[A-Z]/.test(name)) {
                            const slotName = utils_1.getSlotName(name);
                            parentPath.replaceWith(t.jSXElement(t.jSXOpeningElement(t.jSXIdentifier('slot'), [
                                t.jSXAttribute(t.jSXIdentifier('name'), t.stringLiteral(slotName))
                            ], true), t.jSXClosingElement(t.jSXIdentifier('slot')), []));
                            this.setMultipleSlots();
                        }
                        else {
                            self.componentProperies.add(siblingProp.node.name);
                        }
                    }
                }
                else if (parentPath.isVariableDeclarator()) {
                    const siblingId = parentPath.get('id');
                    if (siblingId.isObjectPattern()) {
                        const properties = siblingId.node.properties;
                        for (const prop of properties) {
                            if (t.isRestProperty(prop)) {
                                throw utils_1.codeFrameError(prop.loc, 'this.props 不支持使用 rest property 语法，请把每一个 prop 都单独列出来');
                            }
                            else if (t.isIdentifier(prop.key)) {
                                self.componentProperies.add(prop.key.name);
                            }
                        }
                    }
                }
            },
            CallExpression(path) {
                const node = path.node;
                const callee = node.callee;
                if (t.isMemberExpression(callee) && t.isMemberExpression(callee.object)) {
                    const property = callee.property;
                    if (t.isIdentifier(property)) {
                        if (property.name.startsWith('on')) {
                            self.componentProperies.add(`__fn_${property.name}`);
                            processThisPropsFnMemberProperties(callee, path, node.arguments, false);
                        }
                        else if (property.name === 'call' || property.name === 'apply') {
                            self.componentProperies.add(`__fn_${property.name}`);
                            processThisPropsFnMemberProperties(callee.object, path, node.arguments, true);
                        }
                    }
                }
            }
        });
    }
    setComponents() {
        this.customComponents.forEach((component, name) => {
            this.result.components.push({
                path: utils_1.pathResolver(component.sourcePath, this.sourcePath),
                name: lodash_1.kebabCase(name),
                type: component.type
            });
        });
    }
    setMethods() {
        const methods = this.classPath.get('body').get('body');
        for (const method of methods) {
            if (method.isClassMethod()) {
                const key = method.get('key');
                if (key.isIdentifier()) {
                    this.methods.set(key.node.name, method);
                }
            }
        }
    }
    resetConstructor() {
        const body = this.classPath.node.body.body;
        if (!this.methods.has('constructor')) {
            const ctor = buildConstructor();
            body.unshift(ctor);
        }
        if (process.env.NODE_ENV === 'test') {
            return;
        }
        for (const method of body) {
            if (t.isClassMethod(method) && method.kind === 'constructor') {
                method.kind = 'method';
                method.key = t.identifier('_constructor');
                if (t.isBlockStatement(method.body)) {
                    for (const statement of method.body.body) {
                        if (t.isExpressionStatement(statement)) {
                            const expr = statement.expression;
                            if (t.isCallExpression(expr) && (t.isIdentifier(expr.callee, { name: 'super' }) || t.isSuper(expr.callee))) {
                                expr.callee = t.memberExpression(t.identifier('super'), t.identifier('_constructor'));
                            }
                        }
                    }
                }
            }
        }
    }
    handleLifecyclePropParam(propParam, properties) {
        let propsName = null;
        if (!propParam) {
            return null;
        }
        if (t.isIdentifier(propParam)) {
            propsName = propParam.name;
        }
        else if (t.isObjectPattern(propParam)) {
            for (const prop of propParam.properties) {
                if (t.isObjectProperty(prop) && t.isIdentifier(prop.key)) {
                    properties.add(prop.key.name);
                }
                else if (t.isRestProperty(prop) && t.isIdentifier(prop.argument)) {
                    propsName = prop.argument.name;
                }
            }
        }
        else {
            throw utils_1.codeFrameError(propParam.loc, '此生命周期的第一个参数只支持写标识符或对象解构');
        }
        return propsName;
    }
    findMoreProps() {
        // 第一个参数是 props 的生命周期
        const lifeCycles = new Set([
            // 'constructor',
            'componentDidUpdate',
            'shouldComponentUpdate',
            'getDerivedStateFromProps',
            'getSnapshotBeforeUpdate',
            'componentWillReceiveProps',
            'componentWillUpdate'
        ]);
        const properties = new Set();
        this.methods.forEach((method, name) => {
            if (!lifeCycles.has(name)) {
                return;
            }
            const node = method.node;
            let propsName = null;
            if (t.isClassMethod(node)) {
                propsName = this.handleLifecyclePropParam(node.params[0], properties);
            }
            else if (t.isArrowFunctionExpression(node.value) || t.isFunctionExpression(node.value)) {
                propsName = this.handleLifecyclePropParam(node.value.params[0], properties);
            }
            if (propsName === null) {
                return;
            }
            method.traverse({
                MemberExpression(path) {
                    if (!path.isReferencedMemberExpression()) {
                        return;
                    }
                    const { object, property } = path.node;
                    if (t.isIdentifier(object, { name: propsName }) && t.isIdentifier(property)) {
                        properties.add(property.name);
                    }
                },
                VariableDeclarator(path) {
                    const { id, init } = path.node;
                    if (t.isObjectPattern(id) && t.isIdentifier(init, { name: propsName })) {
                        for (const prop of id.properties) {
                            if (t.isObjectProperty(prop) && t.isIdentifier(prop.key)) {
                                properties.add(prop.key.name);
                            }
                        }
                    }
                }
            });
            properties.forEach((value) => {
                this.componentProperies.add(value);
            });
        });
    }
    parseRender() {
        if (this.renderMethod) {
            this.result.template = this.result.template
                + new render_1.RenderParser(this.renderMethod, this.methods, this.initState, this.jsxReferencedIdentifiers, this.usedState, this.loopStateName, this.customComponentNames, this.customComponentData, this.componentProperies, this.loopRefs).outputTemplate;
        }
    }
    compile() {
        this.traverse();
        this.setMethods();
        this.setComponents();
        this.resetConstructor();
        this.findMoreProps();
        this.handleRefs();
        this.parseRender();
        this.result.componentProperies = [...this.componentProperies];
    }
}
exports.Transformer = Transformer;
//# sourceMappingURL=class.js.map