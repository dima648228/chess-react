export const FIGURES = {
    FIGURE: "Фигура",
    KING: "Король",
    BISHOP: "Слон",
    KNIGHT: "Конь",
    QUEEN: "Ферзь",
    PAWN: "Пешка",
    ROOK: "Ладья",
}

export class Figure {
    constructor(color,cell) {
        this.color = color
        this.cell = cell
        this.cell.figure = this
        this.logo = null
        this.name = FIGURES.FIGURE
        this.id = Math.random()
    }

    canMove(target) {
        if (target.figure?.color === this.color) {
            return false
        }

        if (target.figure?.name === FIGURES.KING) {
            return false
        }

        return true

    }

    moveFigure(target) {
        target.figure = this;    
        this.cell.figure = null; 
        this.cell = target;
    }
}