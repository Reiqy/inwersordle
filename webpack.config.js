const path = require("path");

module.exports = {
	entry: ['./ts-built/inwersordle.js', './ts-built/inwersordle_ui.js'],
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, '.'),
	}
};
