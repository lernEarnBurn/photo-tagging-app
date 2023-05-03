import { useState } from 'react'
import './App.css'
import { Gamestart } from './components/gamestart'
import { Gameplay } from './components/gameplay'
import { Leaderboard } from './components/leaderboard'

import { getFirebaseConfig } from './firebase-config'
import { initializeApp } from 'firebase/app'

function App() {
  const [gameStage, setStage] = useState(1)
  const [level, setLevel] = useState('none')

  function getLevel(value){
      setLevel(value)
  }
  
  switch (gameStage) {
    case 1:
      return <Gamestart setStage={setStage} getLevel={getLevel}/>
    case 2:
      return <Gameplay  setStage={setStage} level={level}/>
    case 3:
      return <Leaderboard/>
  }  
  
}

const firbaseAppConfig = getFirebaseConfig()
initializeApp(firbaseAppConfig)

export default App
