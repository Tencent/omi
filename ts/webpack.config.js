'use strict';

module.exports = {
    entry: './src/index.ts',
    output: { filename: 'index.js' },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    transpileOnly: true
                }
            }
        ]
    },
    resolve: {
        extensions: [ '.ts', '.tsx' ]
    },
    externals: {
        'omi': 'Omi'
    }
};