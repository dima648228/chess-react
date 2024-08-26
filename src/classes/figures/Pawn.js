import { Figure, FIGURES } from "../Figure";

import blackLogo from '../../assets/black-pawn.png'
import whiteLogo from '../../assets/white-pawn.png'

export class Pawn extends Figure {

    isFirstStep = true

    constructor(color,cell) {
        super(color,cell)
        this.logo = color === "black" ? blackLogo : whiteLogo
        this.name = FIGURES.PAWN
    }

    canMove(target) {
        if (!super.canMove(target)) {
            return false
        }

        // Логика пешки будет прописана в самом классе пешки
        const direction = this.cell.figure?.color === "black" ? 1 : -1
        const firstStepDirection = this.cell.figure?.color === "black" ? 2 : -2

        if ((target.y === this.cell.y + direction || this.isFirstStep && 
            (target.y === this.cell.y + firstStepDirection))
            && target.x === this.cell.x
            && this.cell.board.getCell(target.x,target.y).isEmpty()) {
                return true
        }
        
        if (target.y === this.cell.y + direction 
            && (target.x === this.cell.x+1 || target.x === this.cell.x - 1)
            && this.cell.isEnemy(target)) {
                return true
        }

        return false
    }

    moveFigure(target) {
        super.moveFigure(target)
        this.isFirstStep = false
    }
}