"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const eslint_1 = require("./eslint");
exports.transformOptions = {};
exports.setTransformOptions = (options) => {
    for (const key in options) {
        if (options.hasOwnProperty(key)) {
            exports.transformOptions[key] = options[key];
        }
    }
};
exports.buildBabelTransformOptions = () => {
    return {
        parserOpts: {
            sourceType: 'module',
            plugins: [
                'classProperties',
                'jsx',
                'flow',
                'flowComment',
                'trailingFunctionCommas',
                'asyncFunctions',
                'exponentiationOperator',
                'asyncGenerators',
                'objectRestSpread',
                'decorators',
                'dynamicImport'
            ]
        },
        plugins: [
            require('babel-plugin-transform-flow-strip-types'),
            [require('babel-plugin-transform-define').default, exports.transformOptions.env]
        ].concat(process.env.ESLINT === 'false' || exports.transformOptions.isNormal || exports.transformOptions.isTyped ? [] : eslint_1.eslintValidation)
            .concat((process.env.NODE_ENV === 'test') ? [] : require('babel-plugin-remove-dead-code').default)
    };
};
//# sourceMappingURL=options.js.map