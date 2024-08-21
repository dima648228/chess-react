import { Figure, FIGURES } from "../Figure";

import blackLogo from '../../assets/black-queen.png'
import whiteLogo from '../../assets/white-queen.png'

export class Queen extends Figure {
    constructor(color,cell) {
        super(color,cell)
        this.logo = color === "black" ? blackLogo : whiteLogo
        this.name = FIGURES.QUEEN
    }
}