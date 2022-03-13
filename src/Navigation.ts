export class Navigation {
	public currentlySelected: HTMLElement = $(".row.first .cell.first")[0];

	selectPreviousCell(moveBetweenRows: boolean = false): void {
		let previousSibling: HTMLElement = this.currentlySelected.previousElementSibling as HTMLElement;
		if (moveBetweenRows && previousSibling == null) {
			previousSibling = this.currentlySelected.parentElement.previousElementSibling.lastElementChild as HTMLElement;
		}

		this.selectCell(previousSibling);
	}

	selectNextCell(moveBetweenRows: boolean = false): void {
		let nextSibling: HTMLElement = this.currentlySelected.nextElementSibling as HTMLElement;
		if (moveBetweenRows && nextSibling == null) {
			nextSibling = this.currentlySelected.parentElement.nextElementSibling.firstElementChild as HTMLElement;
		}
		this.selectCell(nextSibling);
	}


	selectCell(selectedCell: HTMLElement): void {
		if (selectedCell == null) {
			return;
		}

		if (selectedCell.classList.contains("submitted")) {
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
