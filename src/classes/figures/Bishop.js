import { Figure, FIGURES } from "../Figure";

import blackLogo from '../../assets/black-bishop.png'
import whiteLogo from '../../assets/white-bishop.png'

export class Bishop extends Figure {
    constructor(color,cell) {
        super(color,cell)
        this.logo = color === "black" ? blackLogo : whiteLogo
        this.name = FIGURES.BISHOP
    }
}