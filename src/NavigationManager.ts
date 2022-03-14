export class NavigationManager {
	public currentlySelected: HTMLElement;
	public deleteSelected: HTMLElement;

	constructor() {
		// this.currentlySelected = $(".row.first .cell.first")[0];
		this.currentlySelected = $(".row.first div.cell")[1];
		this.deleteSelected = this.currentlySelected;
		this.selectByIndex(2, 2);
	}

	syncSelections(): void {
		// this.deleteSelected = this.currentlySelected;
		// this.currentlySelected = this.deleteSelected;
	}

	selectByIndex(row: number, column: number): void {
		if (row < 0 || row > 5 || column < 0 || column > 4) {
			return;
		}

		let cell = document.querySelectorAll("div.row")[row].children[column] as HTMLElement;

		this.selectCell(cell);
		this.syncSelections();
	}

	selectPreviousCell(moveBetweenRows: boolean = false, moveDeletionSelect: boolean = false): void {
    let cell = moveDeletionSelect ? this.deleteSelected : this.currentlySelected;

		let previousSibling: HTMLElement = cell.previousElementSibling as HTMLElement;
		if (moveBetweenRows && previousSibling == null) {
			previousSibling = cell.parentElement.previousElementSibling.lastElementChild as HTMLElement;
		}

		this.selectCell(previousSibling, moveDeletionSelect);
	}

	selectNextCell(moveBetweenRows: boolean = false, moveDeletionSelect: boolean = false ): void {
    let cell = moveDeletionSelect ? this.deleteSelected : this.currentlySelected;

		let nextSibling: HTMLElement = cell.nextElementSibling as HTMLElement;
		if (moveBetweenRows && nextSibling == null) {
			nextSibling = cell.parentElement.nextElementSibling?.firstElementChild as HTMLElement;
		}

		this.selectCell(nextSibling, moveDeletionSelect);
	}

	selectAdjacentRow(previousRow: boolean = false): void {
		let childNodes = this.currentlySelected.parentElement.querySelectorAll("div");

		let i = 0
		for (; i < childNodes.length; i++) {
			if (childNodes[i] == this.currentlySelected) {
				break;
			}
		}

		let adjacentCell;
		if (previousRow) {
			adjacentCell = this.currentlySelected.parentElement.previousElementSibling?.querySelectorAll("div")[i];
		} else {
			adjacentCell = this.currentlySelected.parentElement.nextElementSibling?.querySelectorAll("div")[i];
		}

		this.selectCell(adjacentCell);
	}


	selectCell(selectedCell: HTMLElement, moveDeletionSelect: boolean = false): void {
		if (selectedCell == null) {
			return;
		}

		if (moveDeletionSelect) {
			this.deleteSelected = selectedCell;
			return;
		}

		let cells = document.getElementsByClassName("cell");
		for (let cell of cells as any) {
			cell.classList.remove("selected");
		}

		selectedCell.classList.add("selected");
		this.currentlySelected = selectedCell;
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
