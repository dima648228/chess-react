import React, { useEffect, useState } from 'react'

import '../styles/App.css'

import CellComponent from './CellComponent'
import { Board } from '../classes/Board'

const BoardComponent = ({board,setBoard}) => {

    const [selected,setSelected] = useState(null)

    function click(cell) {
        if (selected && selected !== cell && selected.figure?.canMove(cell)) {
            selected.moveFigure(cell)
            setSelected(null)
            updateBoard()
        } else {
            setSelected(cell);
        }
    }

    useEffect(() => {
        highlightCells()
    }, [selected])

    function highlightCells() {
        board.highlightCells(selected)
        updateBoard()
    }

    function updateBoard() {
        const newBoard = board.getCopyBoard()

        setBoard(newBoard)
    }

    return (
        <div className='board'>
            {board.cells.map((row,index) => 
                <React.Fragment key={index}>
                    {row.map(cell =>
                        <CellComponent cell={cell} selected={cell.x === selected?.x && cell.y === selected?.y} click={click} key={cell.id}/>
                    )}
                </React.Fragment>
            )}
        </div>
    )
}

export default BoardComponent