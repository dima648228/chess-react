import React, {useState} from 'react'

import '../styles/App.css'

import Board from '../classes/Board'

import CellComponent from './CellComponent'

const BoardComponent = () => {
    const [board,setBoard] = useState([])

    return (
        <div className='board'>
            <CellComponent />
            <CellComponent />
        </div>
    )
}

export default BoardComponent