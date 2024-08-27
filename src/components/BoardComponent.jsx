import React, { useEffect, useState } from 'react'

import '../styles/App.css'

import CellComponent from './CellComponent'
import { Board } from '../classes/Board'

const BoardComponent = ({board,setBoard,currentPlayer,swapPlayer}) => {

    const [selected,setSelected] = useState(null)

    function click(cell) {
        if (selected && selected !== cell && selected.figure?.canMove(cell)) {
            selected.moveFigure(cell)
            swapPlayer()
            setSelected(null)
            updateBoard()
        } else {
            if (cell.figure?.color === currentPlayer?.color) {
                setSelected(cell);
            }
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
        <>
            <h2>
                Ходит: {currentPlayer?.color === "black" ? "чёрни" : "бели"}
            </h2>
            <div className='board'>
                {board.cells.map((row,index) => 
                    <React.Fragment key={index}>
                        {row.map(cell =>
                            <CellComponent cell={cell} selected={cell.x === selected?.x && cell.y === selected?.y} click={click} key={cell.id}/>
                        )}
                    </React.Fragment>
                )}
            </div>
        </>
    )
}

export default BoardComponent