import {Cell} from './Cell'

import { Bishop } from './figures/Bishop'
import { King } from './figures/King'
import { Knight } from './figures/Knight'
import { Pawn } from './figures/Pawn'
import { Rook } from './figures/Rook'
import { Queen  } from './figures/Queen'

export class Board {
    constructor() {
        this.cells = []
    }

    initCells() {
        for (let i=0;i<8;++i) {
            const row = []
            for (let j=0;j<8;++j) {
                if ((i+j)%2!==0) {
                    row.push(new Cell("black",j,i,null,this)) // Чёрные ячейки
                } else {
                    row.push(new Cell("white",j,i,null,this)) // Белые ячейки
                }
            }
            this.cells.push(row)
        }
    }

    getCell(x,y) {
        return this.cells[y][x]
    }

    addFigures() {
        new Bishop("black",this.getCell(3,3).figure)
    }
}

