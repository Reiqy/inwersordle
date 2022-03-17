import { NavigationManager } from "./NavigationManager.js"
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
	static addTextListener(event: KeyboardEvent, navigation: NavigationManager): void {
		switch (event.key) {
			case "Backspace":
        if (navigation.inputPosition.innerHTML != "") {
          navigation.inputPosition.innerHTML = "";
          navigation.selectPreviousCell(true, true);
        } else {
          if (navigation.delPosition == navigation.getNextCell(navigation.inputPosition, true)) {
            navigation.syncSelections();
          }
          navigation.delPosition.innerHTML = "";
          navigation.selectPreviousCell(true, true);
          navigation.selectPreviousCell(true, false);
        }

				break;
			case "Delete":
        if (navigation.delPosition == navigation.getPreviousCell(navigation.inputPosition, true)) {
          navigation.syncSelections();
        }
        if (navigation.inputPosition.innerHTML != "") {
          navigation.inputPosition.innerHTML = "";
          navigation.selectNextCell(true, true);
        } else {

          navigation.delPosition.innerHTML = "";
          navigation.selectNextCell(true, true);
          navigation.selectNextCell(true, false);
        }

        break;
		}

		if (/^[a-zA-Z]$/.test(event.key)) {
			navigation.inputPosition.innerHTML = event.key;

			// if (checkCompleted()) {
			// 	disableRow(currentlySelected);
			// }

			navigation.selectNextCell(true);
			navigation.syncSelections();

		}
	}
}
