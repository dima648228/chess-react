import { Figure, FIGURES } from "../Figure";

import blackLogo from '../../assets/black-knight.png'
import whiteLogo from '../../assets/white-knight.png'

export class Knight extends Figure {
    constructor(color,cell) {
        super(color,cell)
        this.logo = color === "black" ? blackLogo : whiteLogo
        this.name = FIGURES.KNIGHT
    }

    canMove(target) {
        if (!super.canMove(target)) {
            return false
        }

        // Логика для движения коня будет находиться непосредственно в самом классе коня.
        const dx = Math.abs(this.cell.x - target.x)
        const dy = Math.abs(this.cell.y - target.y)

        

        return true
    }
}