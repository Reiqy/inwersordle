"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Navigation = void 0;
class Navigation {
    constructor() {
        this.currentlySelected = $(".row.first .cell.first")[0];
    }
    selectPreviousCell(moveBetweenRows = false) {
        let previousSibling = this.currentlySelected.previousElementSibling;
        if (moveBetweenRows && previousSibling == null) {
            previousSibling = this.currentlySelected.parentElement.previousElementSibling.lastElementChild;
        }
        this.selectCell(previousSibling);
    }
    selectNextCell(moveBetweenRows = false) {
        let nextSibling = this.currentlySelected.nextElementSibling;
        if (moveBetweenRows && nextSibling == null) {
            nextSibling = this.currentlySelected.parentElement.nextElementSibling.firstElementChild;
        }
        this.selectCell(nextSibling);
    }
    selectCell(selectedCell) {
        if (selectedCell == null) {
            return;
        }
        if (selectedCell.classList.contains("submitted")) {
            return;
        }
        let cells = document.getElementsByClassName("cell");
        for (let cell of cells) {
            cell.classList.remove("selected");
        }
        selectedCell.classList.add("selected");
        this.currentlySelected = selectedCell;
    }
    addNavigationListener(event) {
        switch (event.key) {
            case "ArrowLeft":
                this.selectPreviousCell();
                break;
            case "ArrowRight":
                this.selectNextCell();
                break;
            case "ArrowUp":
                break;
            case "ArrowDown":
                break;
        }
    }
}
exports.Navigation = Navigation;
//# sourceMappingURL=Navigation.js.map