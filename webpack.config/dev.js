/**
 * Created by shenlisha on 2017/7/12.
 */
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./base');
const root = path.resolve(__dirname, '..');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(baseConfig, {
	entry: path.join(root, 'src/main.js'),
	devServer: {
		hot: true, // 告诉 dev-server 我们在使用 HMR
		historyApiFallback: true, // 404的页面会自动跳转到/页面
		inline: true, // 文件改变自动刷新页面
		port: 3000 // 服务器端口
	},
	devtool: 'source-map', // 用于标记编译后的文件与编译前的文件对应位置，便于调试
	plugins: [
		new webpack.HotModuleReplacementPlugin(), // 添加热替换插件
		new HtmlWebpackPlugin({
			template: path.join(root, 'index.html'), // 模板文件
			inject: 'body' // js的script注入到body底部
		})
	]
});