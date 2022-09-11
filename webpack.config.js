const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const mode = (process.env.NODE_ENV)?"production":"development";
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
		mode: mode,
		node:{
				fs:'empty'
		},
		output: {
				filename: 'core.js'
		},
		// optimization:{
		//     minimize: false,
		// },
		resolve: {
				extensions: [ '.tsx', '.ts', '.js' ],
				alias: {
					'vue$': 'vue/dist/vue.esm.js', // 'vue/dist/vue.common.js' for webpack 1
					'@blocks': path.resolve(__dirname, 'src/pug/blocks'),
				}
		},
		module: {
				rules: [
						{
								test: /\.vue$/,
								exclude: /(node_modules|bower_components)/,
								loader: 'vue-loader'
						},
						{
								test: /\.tsx?$/,
								use: 'ts-loader',
								exclude: /(node_modules|bower_components)/,
						},
				]
		},
		// plugins: [
		//     new VueLoaderPlugin()
		// ]
};