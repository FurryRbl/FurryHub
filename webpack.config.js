import path from 'path';
import webpack from 'webpack';
import { VueLoaderPlugin } from 'vue-loader';
import TerserPlugin from 'terser-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import localPostcssOptions from './postcss.config.js';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import JsonMinimizerPlugin from 'json-minimizer-webpack-plugin';
import HtmlMinimizerPlugin from 'html-minimizer-webpack-plugin';

export default env => {
	const isDevelopmentMode = env.WEBPACK_SERVE?.toString() === 'true';

	/** @type {import("webpack").Configuration} */
	const config = {
		entry: path.resolve('./src/main.js'),
		output: {
			clean: true,
			filename: 'assets/js/[name]_bundle.js',
			path: path.resolve('./dist'),
		},
		cache: {
			type: 'filesystem',
		},
		devServer: {
			hot: true,
			port: 8000,
			open: false,
			compress: true,
			host: '127.0.0.1',
			historyApiFallback: true,
			static: [path.resolve('./public')],
			client: {
				overlay: false,
			},
		},
		module: {
			rules: [
				{
					test: /\.css$/,
					use: [
						MiniCssExtractPlugin.loader,
						'css-loader',
						{
							loader: 'postcss-loader',
							options: {
								postcssOptions: localPostcssOptions,
							},
						},
					],
				},
				{
					test: /\.less$/,
					use: [
						MiniCssExtractPlugin.loader,
						'css-loader',
						{
							loader: 'postcss-loader',
							options: {
								postcssOptions: localPostcssOptions,
							},
						},
						'less-loader',
					],
				},
				{
					test: /\.js$/,
					exclude: /node_modules/,
					loader: 'babel-loader',
				},
				{
					test: /\.vue$/,
					loader: 'vue-loader',
				},
				{
					test: /\.svg$/,
					use: ['vue-loader', 'svg-vue-loader'],
				},
				{
					test: /\.json$/,
					type: 'json',
					parser: {
						parse: JSON.parse,
					},
				},
			],
		},
		plugins: [
			new webpack.ProgressPlugin(),
			new webpack.DefinePlugin({
				__VUE_OPTIONS_API__: true,
				__VUE_PROD_DEVTOOLS__: isDevelopmentMode,
				__VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false,
			}),
			new VueLoaderPlugin(),
			new CopyWebpackPlugin({
				patterns: [
					{
						from: path.resolve('./public'),
						to: path.resolve('./dist'),
					},
					{
						from: path.resolve('./data/avatar'),
						to: path.resolve('./dist/assets/images/navigation'),
					},
				],
			}),
			new MiniCssExtractPlugin({
				filename: 'assets/css/[name]_bundle.css',
			}),
			new HtmlWebpackPlugin({
				publicPath: '/',
				template: path.resolve('./template/index.html'),
			}),
		],
		optimization: {
			minimize: isDevelopmentMode ? false : true,
			minimizer: [new TerserPlugin(), new HtmlMinimizerPlugin(), new CssMinimizerPlugin(), new JsonMinimizerPlugin()],
			splitChunks: {
				chunks: 'all',
				maxInitialRequests: Infinity,
				minSize: 20000,
				maxSize: 250000,
				minChunks: 1,
				maxAsyncRequests: 30,
				automaticNameDelimiter: '~',
				cacheGroups: {
					vendors: {
						name: 'vendors',
						test: /[\\/]node_modules[\\/]/,
						minSize: 0,
						priority: -10,
						reuseExistingChunk: true,
					},
					default: {
						name: 'common',
						minSize: 0,
						minChunks: 2,
						priority: -20,
						reuseExistingChunk: true,
					},
				},
			},
		},
		devtool: isDevelopmentMode ? 'source-map' : false,
	};

	return config;
};
