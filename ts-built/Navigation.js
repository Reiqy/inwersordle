export class Navigation {
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
    selectAdjacentRow(previousRow = false) {
        var _a, _b;
        let childNodes = this.currentlySelected.parentElement.querySelectorAll("div");
        let i = 0;
        for (; i < childNodes.length; i++) {
            if (childNodes[i] == this.currentlySelected) {
                break;
            }
        }
        let adjacentCell;
        if (previousRow) {
            adjacentCell = (_a = this.currentlySelected.parentElement.previousElementSibling) === null || _a === void 0 ? void 0 : _a.querySelectorAll("div")[i];
        }
        else {
            adjacentCell = (_b = this.currentlySelected.parentElement.nextElementSibling) === null || _b === void 0 ? void 0 : _b.querySelectorAll("div")[i];
        }
        this.selectCell(adjacentCell);
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
                this.selectAdjacentRow(true);
                break;
            case "ArrowDown":
                this.selectAdjacentRow();
                break;
        }
    }
}
//# sourceMappingURL=Navigation.js.map