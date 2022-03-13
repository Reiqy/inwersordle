import { readFileSync } from "fs";

export function preprocessWords() {
    const wordsFileContents = readFileSync('words.txt', 'utf-8');
    wordsFileContents.split(/\r?\n/).forEach(line => console.log(line));
}