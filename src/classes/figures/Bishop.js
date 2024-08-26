import { Figure, FIGURES } from "../Figure";

import blackLogo from '../../assets/black-bishop.png'
import whiteLogo from '../../assets/white-bishop.png'

export class Bishop extends Figure {
    constructor(color,cell) {
        super(color,cell)
        this.logo = color === "black" ? blackLogo : whiteLogo
        this.name = FIGURES.BISHOP
    }


    canMove(target) {
        if (!super.canMove(target)) {
            return false
        }
        if (this.cell.isEmptyDiagonal(target)) {
            return true
        }

        return false
    }
}