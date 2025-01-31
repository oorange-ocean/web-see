/* eslint-disable no-undef */
import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import terser from '@rollup/plugin-terser';
import { dts } from 'rollup-plugin-dts';
import fs from 'fs';
import path from 'path';
const packagesDir = path.resolve(__dirname, 'packages');
const packageFiles = fs.readdirSync(packagesDir);

function output(path) {
  return [
    {
      input: [`./packages/${path}/src/index.ts`],
      output: [
        {
          file: `./packages/${path}/dist/index.cjs.js`,
          format: 'cjs',
          sourcemap: true,
        },
        {
          file: `./packages/${path}/dist/index.esm.js`,
          format: 'esm',
          sourcemap: true,
        },
        {
          file: `./packages/${path}/dist/index.js`,
          format: 'umd',
          name: 'web-see',
          sourcemap: true,
        },
        {
          file: `./packages/${path}/dist/index.min.js`,
          format: 'umd',
          name: 'web-see',
          sourcemap: true,
          plugins: [terser()],
        },
      ],
      plugins: [
        typescript({
          tsconfigOverride: {
            compilerOptions: {
              module: 'ESNext',
            },
          },
          useTsconfigDeclarationDir: true,
        }),
        resolve(),
        commonjs(),
        json(),
        terser(),
      ],
    },
    {
      input: `./packages/${path}/src/index.ts`,
      output: [{ file: `./packages/${path}/dist/index.d.ts`, format: 'es' }],
      plugins: [dts()],
    },
  ];
}

export default packageFiles.map(pkgPath => output(pkgPath)).flat();