const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
	entry: './app.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
    	filename: 'bundle.js'
	},
	module: {
		rules: [
			{ 
				test: /\.js$/,
				exclude: /node_modules/, 
				loader: 'babel-loader' 
			},
			{ 
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: '[name].[ext]?[hash]'
			 	}
			}
		]
	},
	devServer: {
		contentBase: './dist'
	},
	plugins:[
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			title:'test',
			template:'index.html',
			filename:'index.dev.html'
		})
	],
	watch:true
}