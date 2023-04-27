import './App.css'
import { useState } from 'react'
import NumberofSprints from './components/NumberofSprints'
import ConfirmationMessage from './components/ConfirmationMessage'
import SprintBlocks from './components/SprintBlocks'

function App() {

  const [sprints, setSprints] = useState(0)
  const [showConfirmationMessage, setShowConfirmationMessage] = useState(false)

  const handleSprintsChange = (value) => {
    setSprints(value)
    setShowConfirmationMessage(true)

  }



  return (
    <div className="App">
      <NumberofSprints onSprintsChange={handleSprintsChange} />
      {showConfirmationMessage && <ConfirmationMessage sprints={sprints} />}
      <SprintBlocks sprints={sprints} />
    </div>
  )
}

export default App
