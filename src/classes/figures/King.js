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

        return true
    }
}