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
    сonstructor(color,cell) {
        this.color = color
        this.cell = cell
        this.cell.figure = this
        this.logo = null
        this.name = FIGURES.FIGURE
        this.id = Math.random()
    }

    canMove(target) {
        return true
    }

    moveFigure(target) {

    }
}