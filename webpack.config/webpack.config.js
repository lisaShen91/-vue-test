const path = require('path');
const root = path.join(__dirname, '..');
module.exports = {
	entry: {
		app: path.resolve(__dirname, '../src/main.js')
	},
	output: {
		path: path.resolve(__dirname, '../dist'),  // 出口目录
		filename: 'app.js'  // 出口文件名
	},
	resolve: {
		alias: { // 配置目录别名
			// 在任意目录下require('components/example') 相当于require('项目根目录/src/components/example')
			components: path.join(root, 'src/components'),
			views: path.join(root, 'src/views'),
			styles: path.join(root, 'src/styles'),
			store: path.join(root, 'src/store'),
			'vue$': 'vue/dist/vue.esm.js'/*,
			 'src': path.join(__dirname, '..')*/
		},
		extensions: ['.js', '.vue'] // 引用js和vue文件可以省略后缀名
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
			}
		]
	}
};