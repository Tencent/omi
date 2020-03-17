"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const eslint_1 = require("eslint");
const utils_1 = require("./utils");
const cli = new eslint_1.CLIEngine({
    baseConfig: {
        extends: ['plugin:taro/transformer']
    },
    useEslintrc: false,
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 2018,
        ecmaFeatures: {
            jsx: true,
            legacyDecorators: true
        }
    }
});
exports.eslintValidation = () => {
    return {
        visitor: {
            Program(_, state) {
                const { file: { code } } = state;
                const report = cli.executeOnText(code);
                if (report.errorCount > 0) {
                    for (const result of report.results) {
                        for (const msg of result.messages) {
                            const err = utils_1.codeFrameError({
                                start: {
                                    line: msg.line,
                                    column: msg.column
                                },
                                end: {
                                    line: msg.endLine,
                                    column: msg.endColumn
                                }
                            }, msg.message);
                            // tslint:disable-next-line
                            console.warn('\n' + `ESLint(${msg.ruleId}) 错误：` + err.message + '\n');
                        }
                    }
                }
            }
        }
    };
};
//# sourceMappingURL=eslint.js.map