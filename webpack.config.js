var path = require('path');

module.exports = {
	mode: 'development',
	entry: './src/js/app.js',
	resolve: {
		extensions: [ '.tsx', '.ts', '.js' ],
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
    	rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.(png|jpe?g|gif)$/,
				use: [
					{
						loader: 'file-loader',
						options: {},
					},
				],
			},
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				],
			},
      		{ 
      			test: /\.css$/i,
      		  	use: [
				'style-loader',
				'css-loader'
			],
      		},
      		{
      			test: /\.m?js$/,
      			exclude: /(node_modules|bower_components)/,
      			use: {
        			loader: 'babel-loader',
        			options: {
          				presets: ['@babel/preset-env']
          			}
          		}
          	},
   		],
 	 },
};