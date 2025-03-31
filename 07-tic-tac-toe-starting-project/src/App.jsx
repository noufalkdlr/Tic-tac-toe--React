
import Player from "./components/Player.jsx"
import GameBoard from "./components/GameBoard.jsx"

function App() {
  

  return (
      <main>
        <div id="game-container">
          <ol id="players" >
            <Player initialName='player_1' symbol='X' />
            <Player initialName='player_2' symbol='0' />
          </ol>
          <GameBoard/>
        </div>
        log
      </main>
  )
}

export default App
