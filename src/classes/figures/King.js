import { Figure, FIGURES } from "../Figure";

import blackLogo from '../../assets/black-king.png'
import whiteLogo from '../../assets/white-king.png'

export class King extends Figure {
    constructor(color,cell) {
        super(color,cell)
        this.logo = color === "black" ? blackLogo : whiteLogo
        this.name = FIGURES.KING
    }

    canMove(target) {
        if (!super.canMove(target)) {
            return false
        }

        // Логика короля реализована в самом классе короля

        const dx = Math.abs(target.x - this.cell.x);
        const dy = Math.abs(target.y - this.cell.y);

        // Король может ходить на одну клетку в любом направлении
        if ((dx <= 1 && dy <= 1) && this.cell.board.getCell(target.x, target.y).isEmpty()) {
            return true;
        }

        return false
    }
}