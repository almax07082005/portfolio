import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import 'regenerator-runtime/runtime.js';

export default {
    input: [
        'src/index.ts',
        'src/comic.ts'
    ],
    output: {
        dir: 'dist',
        format: 'es'
    },
    plugins: [
        nodeResolve({ browser: true }),
        terser(),
        typescript({
            lib: [
                'ES2015',
                'DOM'
            ],
            importHelpers: true // Add this line
        })
    ]
};