import {Figure} from './Figure'

export class Cell {
    constructor(color,x,y,figure,board) {
        this.x = x
        this.y = y
        this.color = color
        this.figure = figure
        this.board = board
        this.available = false
        this.id = Math.random()
    }


}