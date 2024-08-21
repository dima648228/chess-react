import {Cell} from './Cell'
import {Figure} from './Figure'

export class Board {
    constructor() {
        this.cells = []
    }

    initCells() {
        for (let i=0;i<8;++i) {
            const row = []
            for (let j=0;j<8;++j) {
                if ((i+j)%2!==0) {
                    row.push(new Cell("black",j,i,new Figure(),this)) // Чёрные ячейки
                } else {
                    row.push(new Cell("white",j,i,new Figure(),this)) // Белые ячейки
                }
            }
            this.cells.push(row)
        }
    }
}

