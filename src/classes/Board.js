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

    highlightCells(selectedCell) {
        for (let i=0;i<this.cells.length;++i) {
            const row = this.cells[i]
            for (let j=0;j<row.length;++j) {
                const target = row[j]
                target.available = !!selectedCell?.figure?.canMove(target)
            }
        }
    }

    getCopyBoard() {
        const newBoard = new Board()
        newBoard.cells = this.cells

        return newBoard
    }

    addFigures() {
        this.addKings()
        this.addQueens()
        this.addKnights()
        this.addBishops()
        this.addRooks()
        this.addPawns()
    }

    addKings() {
        new King("black",this.getCell(4,0))
        new King("white",this.getCell(3,7))
    }

    addQueens() {
        new Queen("black",this.getCell(3,0))
        new Queen("white",this.getCell(4,7))
    }

    addKnights() {
        new Knight("black",this.getCell(1,0))
        new Knight("black",this.getCell(6,0))
        new Knight("white",this.getCell(1,7))
        new Knight("white",this.getCell(6,7))
    }

    addBishops() {
        new Bishop("black",this.getCell(2,0))
        new Bishop("black",this.getCell(5,0))
        new Bishop("white",this.getCell(2,7))
        new Bishop("white",this.getCell(5,7))
    }

    addRooks() {
        new Rook("black",this.getCell(0,0))
        new Rook("black",this.getCell(7,0))
        new Rook("white",this.getCell(0,7))
        new Rook("white",this.getCell(7,7))
    }

    addPawns() {
        for (let i=0;i<8;++i) {
            new Pawn("black",this.getCell(i,1))
        }

        for (let i=0;i<8;++i) {
            new Pawn("white",this.getCell(i,6))
        }
    }
}

