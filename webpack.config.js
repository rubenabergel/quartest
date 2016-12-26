const path = require('path')

module.exports = {
	context: __dirname,
	devtool:'source-map',
	entry: "./client/browserEntry.jsx",
	output: {
		path: path.join(__dirname, '/public'),
		filename: 'bundle.js'
	},
	resolve:{
		extensions: ['', '.js', '.json']
	},
	stats:{
		colors:true,
		reasons:true,
		chunks:false
	},
	module:{
		preLoaders: [
			{
				test: /\.jsx?$/,
				loader: 'eslint-loader',
				exclude: /node_modules/
			}
		],
		loaders:[
			{
				test: /\.jsx?$/,
				loader:'babel-loader'
			},
			{
				test:/\.json$/,
				loader:'json-loader'
			}
		]
	}
}