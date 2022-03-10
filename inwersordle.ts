enum Color {
    Gray,
    Yellow,
    Green,
}

interface Assignment {
    getRow(row: number): Color[];
}

class Game implements Assignment {
    getRow(row: number): Color[] {
        return new Array<Color>();
    }
}

interface GameProvider {
    generateGame(): Assignment;
}