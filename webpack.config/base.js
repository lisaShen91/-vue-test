/**
 * Created by shenlisha on 2017/7/12.
 */
const path = require('path');
const root = path.resolve(__dirname, '..');// 项目的根目录绝对路径

module.exports = {
	entry: path.join(root, 'src/main.js'),  // 入口文件路径
	output: {
		path: path.join(root, 'dist'),  // 出口目录
		filename: 'main.js'  // 出口文件名
	},
	resolve: {
		modules: [path.resolve(__dirname, "../src/styles"), "node_modules"],
		alias: { // 配置目录别名
			// 在任意目录下require('components/example') 相当于require('项目根目录/src/components/example')
			components: path.join(root, 'src/components'),
			views: path.join(root, 'src/views'),
			styles: path.join(root, 'src/styles'),
			store: path.join(root, 'src/store'),
			'vue$': 'vue/dist/vue.common.js',
			'src': path.join(__dirname, '..')
		},
		extensions: ['.js', '.vue', '.css'], // 引用js和vue文件可以省略后缀名
	},
	module: { // 配置loader
		rules: [
			{
				test: /\.vue$/,
				use: [
					{
						loader: 'vue-loader'
					}
				]
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader'
					}
				]
			},
			{
				test: /\.styl$/,
				use: [
					{
						loader: 'stylus-loader'
					}
				]
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: 'style-loader!css-loader'
					}
				]
			}
		]
	}
};