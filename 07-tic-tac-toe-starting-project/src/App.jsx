import { useState } from "react"

import Player from "./components/Player.jsx"
import GameBoard from "./components/GameBoard.jsx"

function App() {
  
  const [activePlayer, setActivePlayer] = useState('X');

  function handleSelectSqure() {
    setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
  }

  return (
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player initialName='player_1' symbol='X' isActive={activePlayer === 'X'} />
            <Player initialName='player_2' symbol='0' isActive={activePlayer === 'O'} />
          </ol>
          <GameBoard onSelectSqure={handleSelectSqure} activePlayerSymbol={activePlayer}/>
        </div>
        log
      </main>
  )
}

export default App
