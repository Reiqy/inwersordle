import { NavigationManager } from "./NavigationManager.js";
import { GridManager } from "./GridManager.js";
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
    GridManager.fillTargetWord();
    let navigation = new NavigationManager();
    $(".cell").on("click", function (e) {
        navigation.selectCell(e.target);
    });
    document.addEventListener("keydown", function (event) {
        navigation.addNavigationListener(event);
        GridManager.addTextListener(event, navigation);
    });
});
//# sourceMappingURL=inwersordle_ui.js.map