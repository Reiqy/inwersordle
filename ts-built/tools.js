"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.preprocessWords = void 0;
const fs_1 = require("fs");
function preprocessWords() {
    const wordsFileContents = (0, fs_1.readFileSync)('words.txt', 'utf-8');
    wordsFileContents.split(/\r?\n/).forEach(line => console.log(line));
}
exports.preprocessWords = preprocessWords;
//# sourceMappingURL=tools.js.map