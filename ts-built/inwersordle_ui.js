"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jquery_1 = __importDefault(require("jquery"));
function selectCell(selectedCell) {
    if (selectedCell.classList.contains("submitted")) {
        return null;
    }
    let cells = document.getElementsByClassName("cell");
    for (let cell of cells) {
        cell.classList.remove("selected");
    }
    selectedCell.classList.add("selected");
    return selectedCell;
}
function disableRow(selectedCell) {
    let rowCells = selectedCell.parentElement.querySelectorAll("div");
    rowCells.forEach(function (cell) {
        cell.classList.add("submitted");
    });
}
function selectNextCell(selectedCell) {
    // TODO
}
function selectPreviousCell(selectedCell) {
    // TODO
}
function checkCompleted() {
    // TODO
}
function composeWord(selectedCell) {
    let s = "";
    let children = selectedCell.parentElement.querySelectorAll("div");
    children.forEach(function (child) {
        s += child.innerHTML;
    });
    return s;
}
(0, jquery_1.default)(function () {
    let currentlySelected = (0, jquery_1.default)(".row.first .cell.first")[0];
    selectCell(currentlySelected);
    (0, jquery_1.default)(".cell").on("click", function (e) {
        currentlySelected = selectCell(e.target) || currentlySelected;
    });
    (0, jquery_1.default)(document).on("keydown", function (e) {
        if (currentlySelected == null)
            return;
        switch (e.key) {
            case "ArrowLeft":
                selectPreviousCell(currentlySelected);
                // TODO: refactor
                let previousSibling = currentlySelected.previousElementSibling;
                if (previousSibling)
                    currentlySelected = selectCell(previousSibling) || currentlySelected;
                break;
            case "ArrowRight":
                // TODO: refactor
                selectNextCell(currentlySelected);
                let nextSibling = currentlySelected.nextElementSibling;
                if (nextSibling)
                    currentlySelected = selectCell(nextSibling) || currentlySelected;
                break;
            case "Backspace":
                currentlySelected.innerHTML = "";
                selectPreviousCell(currentlySelected);
                break;
            case "Delete":
                currentlySelected.innerHTML = "";
                selectNextCell(currentlySelected);
                break;
        }
        if (e.key.toString().length == 1 && (/[a-zA-Z]/.test(e.key))) {
            currentlySelected.innerHTML = e.key;
            checkCompleted();
            // selectNextCell(currentlySelected);
            if (currentlySelected.nextElementSibling) {
                currentlySelected = selectCell(currentlySelected.nextElementSibling) || currentlySelected;
            }
            else {
                disableRow(currentlySelected);
                // TODO: Submit row
                if (currentlySelected.parentElement.nextElementSibling != null) {
                    currentlySelected = selectCell(currentlySelected.parentElement.nextElementSibling.firstElementChild) || currentlySelected;
                }
                else {
                    currentlySelected = null;
                }
            }
        }
    });
});
//# sourceMappingURL=inwersordle_ui.js.map