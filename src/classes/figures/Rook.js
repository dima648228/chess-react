import { Figure, FIGURES } from "../Figure";

import blackLogo from '../../assets/black-rook.png'
import whiteLogo from '../../assets/white-rook.png'

export class Rook extends Figure {
    constructor(color,cell) {
        super(color,cell)
        this.logo = color === "black" ? blackLogo : whiteLogo
        this.name = FIGURES.ROOK
    }
}