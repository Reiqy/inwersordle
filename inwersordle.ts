enum Color {
    Gray,
    Yellow,
    Green,
}



interface Assignment {
    getRow(row: number): Color[];
    validateRow(row: number, entry: string): boolean;
}

class Game implements Assignment {
    getRow(row: number): Color[] {
        return new Array<Color>();
    }

    validateRow(row: number, entry: string): boolean {
        return true;
    }
}

interface GameProvider {
    generateGame(): Assignment;
}

