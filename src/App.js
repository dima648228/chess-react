import './styles/App.css'

import React, {useState} from 'react';
import BoardComponent from './components/BoardComponent'
import {Board} from './classes/Board'

function App() {

  const [board,setBoard] = useState(new Board())

  return (
    <div className="app">
        <BoardComponent />
    </div>
  );
}

export default App;
