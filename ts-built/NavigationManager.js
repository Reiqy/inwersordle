export class NavigationManager {
    constructor() {
        // this.currentlySelected = $(".row.first .cell.first")[0];
        this.currentlySelected = $(".row.first div.cell")[1];
        this.deleteSelected = this.currentlySelected;
        this.selectByIndex(2, 2);
    }
    syncSelections() {
        // this.deleteSelected = this.currentlySelected;
        // this.currentlySelected = this.deleteSelected;
    }
    selectByIndex(row, column) {
        if (row < 0 || row > 5 || column < 0 || column > 4) {
            return;
        }
        let cell = document.querySelectorAll("div.row")[row].children[column];
        this.selectCell(cell);
        this.syncSelections();
    }
    selectPreviousCell(moveBetweenRows = false, moveDeletionSelect = false) {
        let cell = moveDeletionSelect ? this.deleteSelected : this.currentlySelected;
        let previousSibling = cell.previousElementSibling;
        if (moveBetweenRows && previousSibling == null) {
            previousSibling = cell.parentElement.previousElementSibling.lastElementChild;
        }
        this.selectCell(previousSibling, moveDeletionSelect);
    }
    selectNextCell(moveBetweenRows = false, moveDeletionSelect = false) {
        var _a;
        let cell = moveDeletionSelect ? this.deleteSelected : this.currentlySelected;
        let nextSibling = cell.nextElementSibling;
        if (moveBetweenRows && nextSibling == null) {
            nextSibling = (_a = cell.parentElement.nextElementSibling) === null || _a === void 0 ? void 0 : _a.firstElementChild;
        }
        this.selectCell(nextSibling, moveDeletionSelect);
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
    selectCell(selectedCell, moveDeletionSelect = false) {
        if (selectedCell == null) {
            return;
        }
        if (moveDeletionSelect) {
            this.deleteSelected = selectedCell;
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
                this.syncSelections();
                break;
            case "ArrowRight":
                this.selectNextCell();
                this.syncSelections();
                break;
            case "ArrowUp":
                this.selectAdjacentRow(true);
                this.syncSelections();
                break;
            case "ArrowDown":
                this.selectAdjacentRow();
                this.syncSelections();
                break;
        }
    }
}
//# sourceMappingURL=NavigationManager.js.map