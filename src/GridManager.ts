import { Navigation } from "./Navigation.js"
import { GameFactory } from "./inwersordle.js"

export class GridManager {
	static fillWord(row: number, word: string) {
		if (row < 0 || row > 5)
			return;
		let children = document.querySelectorAll("div.row")[row].children;
		for (let i = 0; i < children.length; i++) {
			children[i].innerHTML = word[i];
		}
	}
	static fillTargetWord() {
		GridManager.fillWord(5, GameFactory.chooseWord());
	}
	static addTextListener(event: KeyboardEvent, navigation: Navigation): void {
		switch (event.key) {
			case "Backspace":
				if (navigation.deleteSelected.innerHTML == "") {
					navigation.selectPreviousCell(true, true);
				}

				navigation.deleteSelected.innerHTML = ""
				navigation.selectPreviousCell(true, true);
				break;
			case "Delete":
				if (navigation.deleteSelected.innerHTML == "") {
					navigation.selectNextCell(true, true);
				}

				navigation.deleteSelected.innerHTML = ""
				navigation.selectNextCell(true, true);
				console.log(navigation.deleteSelected);
				break;
		}
		if (/^[a-zA-Z]$/.test(event.key)) {
			navigation.currentlySelected.innerHTML = event.key;

			// if (checkCompleted()) {
			// 	disableRow(currentlySelected);
			// }

			navigation.selectNextCell(true);
			navigation.syncSelections();

		}
	}
}
