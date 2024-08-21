import { Figure, FIGURES } from "../Figure";

import blackLogo from '../../assets/black-knight.png'
import whiteLogo from '../../assets/white-knight.png'

export class Knight extends Figure {
    constructor(color,cell) {
        super(color,cell)
        this.logo = color === "black" ? blackLogo : whiteLogo
        this.name = FIGURES.KNIGHT
    }
}