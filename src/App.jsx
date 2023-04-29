import { useState } from 'react'
import './App.css'
import { Gamestart } from './components/gamestart'
import { Gameplay } from './components/gameplay'
import { Gameover } from './components/gameover'

function App() {
  const [gameStage, setStage] = useState(1)
  const [level, setLevel] = useState('none')

  function getLevel(value){
      setLevel(value)
  }
  
  switch (gameStage) {
    case 1:
      return <Gamestart stage={gameStage} setStage={setStage} getLevel={getLevel}/>
    case 2:
      return <Gameplay stage={gameStage} setStage={setStage} level={level}/>
    case 3:
      return <Gameover/>
  }  
  
}

export default App
