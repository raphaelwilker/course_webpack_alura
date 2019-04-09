const path = require('path');
const MinifyPlugin = require("babel-minify-webpack-plugin");

let plugins = [];

if(process.env.NODE_ENV == 'production') {
    plugins.push(new MinifyPlugin());
}

module.exports = {

	entry: './app-src/app.js',
	output: {

		filename: 'bundle.js',
		path: path.resolve(__dirname,'dist'),
		publicPath: 'dist'

	},

	module: {

		rules: [
			
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}

			}
		]

	},
	plugins



}