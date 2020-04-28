import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from "rollup-plugin-commonjs";
import pkg from './package.json';

const name = pkg.name
	.replace(/^(@\S+\/)?(svelte-)?(\S+)/, '$3')
	.replace(/^\w/, m => m.toUpperCase())
	.replace(/-\w/g, m => m[1].toUpperCase());

const globals = {
	emotion: 'emotion'
}

export default {
	input: 'src/index.js',
	output: [
		{ file: pkg.module, 'format': 'es', globals },
		{ file: pkg.main, 'format': 'umd', name, globals }
	],
	external: [ 'emotion' ],
	plugins: [
		svelte(),
		resolve(),
		commonjs(),
	]
};
