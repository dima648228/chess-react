import './styles/App.css'

import React, {useState,useEffect} from 'react';
import BoardComponent from './components/BoardComponent'
import LostFiguresComponent from './components/LostFigures'

import {Board} from './classes/Board'
import {Player} from './classes/Player'

function App() {

  const [board,setBoard] = useState(new Board())

  const [whitePlayer, setWhitePlayer] = useState(new Player("white"))
  const [blackPlayer, setBlackPlayer] = useState(new Player("black"))
  const [currentPlayer,setCurrentPlayer] = useState(null)

  useEffect(() => {
    restart()
  },[])

  function restart() {
    const newBoard = new Board()
    newBoard.initCells()
    newBoard.addFigures()
    setBoard(newBoard)
    setCurrentPlayer(whitePlayer)
  }

  function swapPlayer() {
    setCurrentPlayer(currentPlayer?.color !== "black" ? blackPlayer : whitePlayer)
  }

  return (
    <div className="app">
        <BoardComponent board={board} setBoard={setBoard} currentPlayer={currentPlayer} swapPlayer={swapPlayer}/>

        <div>
          <LostFiguresComponent title='Чёрни фигуры' figures={board.lostBlackFigures}/>
          <LostFiguresComponent title='Бели фигуры' figures={board.lostWhiteFigures}/>
        </div>
    </div>
  );
}

export default App;
