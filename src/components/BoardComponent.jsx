import React from 'react'

import '../styles/App.css'

import CellComponent from './CellComponent'

const BoardComponent = ({board,setBoard}) => {

    return (
        <div className='board'>
            {board.cells.map((row,index) => 
                <React.Fragment key={index}>
                    {row.map(cell =>
                        <CellComponent cell={cell} key={cell.id}/>
                    )}
                </React.Fragment>
            )}
        </div>
    )
}

export default BoardComponent