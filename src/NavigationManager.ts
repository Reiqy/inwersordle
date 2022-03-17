export class NavigationManager {
  private _selected: {
    input: HTMLElement,
    del: HTMLElement
  }

	constructor() {
    this._selected = {
      input: $(".row.first .cell.first")[0],
      del: $(".row.first .cell.first")[0]
    }

		this.selectByIndex(2, 4);
    this.syncSelections();
	}

  get inputPosition(): HTMLElement {
    return this._selected["input"];
  }

  set inputPosition(value: HTMLElement) {
    this._selected["input"] = value;
  }

  get delPosition(): HTMLElement {
    return this._selected["del"];
  }

  set delPosition(value: HTMLElement) {
    this._selected["del"] = value;
  }

  syncSelections(inputToDeletion: boolean = false): void {
    if (inputToDeletion) {
      this.selectCell(this.delPosition);
    } else {
      this.selectCell(this.inputPosition, true);
    }
	}

	selectByIndex(row: number, column: number): void {
		if (row < 0 || row > 5 || column < 0 || column > 4) {
			return;
		}

		let cell = document.querySelectorAll("div.row")[row].children[column] as HTMLElement;
		this.selectCell(cell);
		this.syncSelections();
	}

  getPreviousCell(cell: HTMLElement, moveBetweenRows: boolean = false) {
		let previousSibling: HTMLElement = cell.previousElementSibling as HTMLElement;
		if (moveBetweenRows && previousSibling == null) {
      // select last cell from previous row
      if (cell.parentElement.previousElementSibling)
        return cell.parentElement.previousElementSibling.lastElementChild as HTMLElement;
		}

    return previousSibling;
  }

	selectPreviousCell(moveBetweenRows: boolean = false, moveDeletionSelect: boolean = false): void {
    let cell = moveDeletionSelect ? this.delPosition : this.inputPosition;
    let previousSibling = this.getPreviousCell(cell, moveBetweenRows);

		this.selectCell(previousSibling, moveDeletionSelect);
	}

  getNextCell(cell: HTMLElement, moveBetweenRows: boolean = false) {
		let nextSibling: HTMLElement = cell.nextElementSibling as HTMLElement;
		if (moveBetweenRows && nextSibling == null) {
      // select last cell from previous row
      if (cell.parentElement.nextElementSibling)
        return cell.parentElement.nextElementSibling.firstElementChild as HTMLElement;
		}

    return nextSibling;
  }

	selectNextCell(moveBetweenRows: boolean = false, moveDeletionSelect: boolean = false ): void {
    let cell = moveDeletionSelect ? this.delPosition : this.inputPosition;
    let nextSibling = this.getNextCell(cell, moveBetweenRows);

		this.selectCell(nextSibling, moveDeletionSelect);
	}

	selectAdjacentRow(previousRow: boolean = false): void {
		let childNodes = this.inputPosition.parentElement.querySelectorAll("div");

		let i = 0
		for (; i < childNodes.length; i++) {
			if (childNodes[i] == this.inputPosition) {
				break;
			}
		}

		let adjacentCell;
		if (previousRow) {
			adjacentCell = this.inputPosition.parentElement.previousElementSibling?.querySelectorAll("div")[i];
		} else {
			adjacentCell = this.inputPosition.parentElement.nextElementSibling?.querySelectorAll("div")[i];
		}

		this.selectCell(adjacentCell);
	}


	selectCell(selectedCell: HTMLElement, moveDeletionSelect: boolean = false): void {
		if (selectedCell == null) {
			return;
		}

		if (moveDeletionSelect) {
			this.delPosition = selectedCell;
			return;
		}

		let cells = document.getElementsByClassName("cell");
		for (let cell of cells as any) {
			cell.classList.remove("selected");
		}

		selectedCell.classList.add("selected");
		this.inputPosition = selectedCell;
	}

	addNavigationListener(event: KeyboardEvent): void {
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
				this.selectAdjacentRow(true)
				this.syncSelections();
				break;
			case "ArrowDown":
				this.selectAdjacentRow()
				this.syncSelections();
				break;
		}
	}
}
