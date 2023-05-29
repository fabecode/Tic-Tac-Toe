import { useState } from 'react'
import './styles.css'
import Game from './components/Game'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Let's play Tic-Tac-Toe!</h1>
      <Game />
    </>
  )
}

export default App
