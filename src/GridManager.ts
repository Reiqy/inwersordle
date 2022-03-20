import { NavigationManager } from "./NavigationManager.js";
import { GameFactory } from "./inwersordle.js";

export class GridManager {
  static disableRow(row: number) {
    let rowCells = $(".row")[row].querySelectorAll("div");
    rowCells.forEach(function (cell: HTMLDivElement) {
      cell.classList.add("disabled");
    });
  }

  static fillWord(row: number, word: string) {
    if (row < 0 || row > 5) return;
    let children = document.querySelectorAll("div.row")[row].children;
    for (let i = 0; i < children.length; i++) {
      children[i].innerHTML = word[i];
    }
  }
  static fillTargetWord() {
    GridManager.fillWord(5, GameFactory.chooseWord());
    GridManager.disableRow(5);
  }
  static addTextListener(
    event: KeyboardEvent,
    navigation: NavigationManager
  ): void {
    switch (event.key) {
      case "Backspace":
        if (
          navigation.delPosition ==
          navigation.getNextCell(navigation.inputPosition, true)
        ) {
          navigation.syncSelections();
        }

        if (navigation.inputPosition.innerHTML != "") {
          navigation.inputPosition.innerHTML = "";
        } else {
          navigation.delPosition.innerHTML = "";
          navigation.selectPreviousCell(true, false);
        }

        navigation.selectPreviousCell(true, true);

        break;
      case "Delete":
        if (
          navigation.delPosition ==
          navigation.getPreviousCell(navigation.inputPosition, true)
        ) {
          navigation.syncSelections();
        }

        if (navigation.inputPosition.innerHTML != "") {
          navigation.inputPosition.innerHTML = "";
        } else {
          navigation.delPosition.innerHTML = "";
          navigation.selectNextCell(true, false);
        }
        navigation.selectNextCell(true, true);

        break;
    }

    if (/^[a-zA-Z]$/.test(event.key)) {
      navigation.inputPosition.innerHTML = event.key;
      navigation.selectNextCell(true);
      navigation.syncSelections();
    }
  }
}
