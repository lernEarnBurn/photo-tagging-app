import { useState } from 'react'
import './App.css'
import { Gamestart } from './components/gamestart'
import { Gameplay } from './components/gameplay'
import { Gameover } from './components/gameover'

function App() {
  const [gameStage, stageSetter] = useState(1)

  
  switch (gameStage) {
    case 1:
      return <Gamestart/>
    case 2:
      return <Gameplay/>
    case 3:
      return <Gameover/>
  }  
  
}

export default App
