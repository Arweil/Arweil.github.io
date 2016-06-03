var webpack = require('webpack');
//var extractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: {
		app: './app.js',
		jqPlugins: ['bootstrap', './public/js/timeliner.js'],
		ng: ['angular', 'angular-ui-router', 'ng-infinite-scroll']
	},
	output: {
		path: './public',
		filename: '[name].bundle.js'
	},
	module: {
		loaders: [
			//load css
			//{ test: /\.(css|less)$/, loader: extractTextPlugin.extract('style-loader', 'css-loader', 'less-loader') },
			{ test: /\.(css|less)$/, loader: 'style!css!less' },
			//url loader & file loader
			{ 
				test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, 
				loader: 'url-loader?limit=50000&name=[path][name].[ext]'
			},
			//html loader
			{ test: /\.html$/, loader: 'html' },
			//img loader
			{ test:/\.(jpe?g|png|gif|svg)$/i, loader: 'url?limit=10000!img?progressive=true' },
			//es6 to es5
			{ 
				test: /\.js$/, 
				exclude: /(node_modules|bower_components)/,
				loader: 'babel',
				query: {
					presets: ['es2015']
				}
			}
		]
	},
	plugins: [
		// js代码压缩
		/*new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			},
			comments: false
		}),*/
		// 分离css
		//new extractTextPlugin("../css/style.css"),
		// 分离模块
		new webpack.optimize.CommonsChunkPlugin({
			names: ['jqPlugins'],
			filename: 'vendor.js',
			minChunks: Infinity
		}),
		// 共享 $
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			'window.jQuery': 'jquery'
		})
	]
}