import { Navigation } from "./Navigation.js";
import { GridText } from "./GridText.js";
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
    return s.toUpperCase();
}
$(function () {
    let navigation = new Navigation();
    let firstCell = $(".row.first .cell.first")[0];
    navigation.selectCell(firstCell);
    $(".cell").on("click", function (e) {
        navigation.selectCell(e.target);
    });
    document.addEventListener("keydown", function (event) {
        navigation.addNavigationListener(event);
        GridText.addTextListener(event, navigation);
    });
});
//# sourceMappingURL=inwersordle_ui.js.map