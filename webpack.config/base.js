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
	}
};