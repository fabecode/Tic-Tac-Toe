import { useState } from 'react'
import './styles.css'
import Board from './components/Board'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Let's play Tic-Tac-Toe!</h1>
      <Board />
    </>
  )
}

export default App
