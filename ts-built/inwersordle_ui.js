"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Navigation_js_1 = require("./Navigation.js");
const GridText_js_1 = require("./GridText.js");
function disableRow(selectedCell) {
    let rowCells = selectedCell.parentElement.querySelectorAll("div");
    rowCells.forEach(function (cell) {
        cell.classList.add("submitted");
    });
}
function composeWord(selectedCell) {
    let s = "";
    let children = selectedCell.parentElement.querySelectorAll("div");
    children.forEach(function (child) {
        s += child.innerHTML;
    });
    return s;
}
$(function () {
    let navigation = new Navigation_js_1.Navigation();
    navigation.selectCell($(".row.first .cell.first")[0]);
    $(".cell").on("click", function (e) {
        navigation.selectCell(e.target);
    });
    document.addEventListener("keydown", function (event) {
        navigation.addNavigationListener(event);
        GridText_js_1.GridText.addTextListener(event, navigation);
    });
});
//# sourceMappingURL=inwersordle_ui.js.map