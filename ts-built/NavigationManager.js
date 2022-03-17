export class NavigationManager {
    constructor() {
        this._selected = {
            input: $(".row.first .cell.first")[0],
            del: $(".row.first .cell.first")[0]
        };
        this.selectByIndex(2, 4);
        this.syncSelections();
    }
    get inputPosition() {
        return this._selected["input"];
    }
    set inputPosition(value) {
        this._selected["input"] = value;
    }
    get delPosition() {
        return this._selected["del"];
    }
    set delPosition(value) {
        this._selected["del"] = value;
    }
    syncSelections(inputToDeletion = false) {
        if (inputToDeletion) {
            this.selectCell(this.delPosition);
        }
        else {
            this.selectCell(this.inputPosition, true);
        }
    }
    selectByIndex(row, column) {
        if (row < 0 || row > 5 || column < 0 || column > 4) {
            return;
        }
        let cell = document.querySelectorAll("div.row")[row].children[column];
        this.selectCell(cell);
        this.syncSelections();
    }
    getPreviousCell(cell, moveBetweenRows = false) {
        let previousSibling = cell.previousElementSibling;
        if (moveBetweenRows && previousSibling == null) {
            // select last cell from previous row
            if (cell.parentElement.previousElementSibling)
                return cell.parentElement.previousElementSibling.lastElementChild;
        }
        return previousSibling;
    }
    selectPreviousCell(moveBetweenRows = false, moveDeletionSelect = false) {
        let cell = moveDeletionSelect ? this.delPosition : this.inputPosition;
        let previousSibling = this.getPreviousCell(cell, moveBetweenRows);
        this.selectCell(previousSibling, moveDeletionSelect);
    }
    getNextCell(cell, moveBetweenRows = false) {
        let nextSibling = cell.nextElementSibling;
        if (moveBetweenRows && nextSibling == null) {
            // select last cell from previous row
            if (cell.parentElement.nextElementSibling)
                return cell.parentElement.nextElementSibling.firstElementChild;
        }
        return nextSibling;
    }
    selectNextCell(moveBetweenRows = false, moveDeletionSelect = false) {
        let cell = moveDeletionSelect ? this.delPosition : this.inputPosition;
        let nextSibling = this.getNextCell(cell, moveBetweenRows);
        this.selectCell(nextSibling, moveDeletionSelect);
    }
    selectAdjacentRow(previousRow = false) {
        var _a, _b;
        let childNodes = this.inputPosition.parentElement.querySelectorAll("div");
        let i = 0;
        for (; i < childNodes.length; i++) {
            if (childNodes[i] == this.inputPosition) {
                break;
            }
        }
        let adjacentCell;
        if (previousRow) {
            adjacentCell = (_a = this.inputPosition.parentElement.previousElementSibling) === null || _a === void 0 ? void 0 : _a.querySelectorAll("div")[i];
        }
        else {
            adjacentCell = (_b = this.inputPosition.parentElement.nextElementSibling) === null || _b === void 0 ? void 0 : _b.querySelectorAll("div")[i];
        }
        this.selectCell(adjacentCell);
    }
    selectCell(selectedCell, moveDeletionSelect = false) {
        if (selectedCell == null) {
            return;
        }
        if (moveDeletionSelect) {
            this.delPosition = selectedCell;
            return;
        }
        let cells = document.getElementsByClassName("cell");
        for (let cell of cells) {
            cell.classList.remove("selected");
        }
        selectedCell.classList.add("selected");
        this.inputPosition = selectedCell;
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