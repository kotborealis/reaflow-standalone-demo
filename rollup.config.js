import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default [
	// browser-friendly UMD build
	{
		input: 'src/main.js',
		output: {
			name: 'reaflow.standalone',
			file: './reaflow.standalone.js',
			format: 'umd'
		},
		plugins: [
			resolve(),
			commonjs()
		]
	},
];