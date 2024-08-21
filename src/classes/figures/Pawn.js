import { Figure, FIGURES } from "../Figure";

import blackLogo from '../../assets/black-pawn.png'
import whiteLogo from '../../assets/white-pawn.png'

export class Pawn extends Figure {
    constructor(color,cell) {
        super(color,cell)
        this.logo = color === "black" ? blackLogo : whiteLogo
        this.name = FIGURES.PAWN
    }
}