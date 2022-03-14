const path = require("path");

module.exports = {
	entry: './ts-built/index.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, '.'),
	}
};
