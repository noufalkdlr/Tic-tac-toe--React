
import Player from "./components/Player.jsx"

function App() {
  

  return (
      <main>
        <div id="game-container">
          <ol id="players" >
            <Player name='player_1' symbol='X' />
            <Player name='player_2' symbol='0' />
          </ol>
          game board
        </div>
        log
      </main>
  )
}

export default App
