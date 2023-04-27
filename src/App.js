import './App.css'
import { useState } from 'react'
import NumberofSprints from './components/NumberofSprints'
import ConfirmationMessage from './components/ConfirmationMessage'
import SprintBlocks from './components/SprintBlocks'
import SprintInput from './components/SprintInput'
import SprintTimer from './components/SprintTimer'
import BreakTimer from './components/BreakTimer'
import LogTable from './components/LogTable'

function App() {

  const [sprints, setSprints] = useState(0)
  const [showConfirmationMessage, setShowConfirmationMessage] = useState(false)
  const [showSprintInput, setShowSprintInput] = useState(false)
  const [showSprintTimer, setShowSprintTimer] = useState(false)
  const [showBreakTimer, setShowBreakTimer] = useState(false)
  const [logs, setLogs] = useState([])
  const SPRINT_TIME_LENGTH = 0.1 * 60; // 50 minutes
  const BREAK_TIME_LENGTH = 0.1 * 60; // 10 minutes


  const handleSprintsChange = (value) => {
    setSprints(value)
    setShowConfirmationMessage(true)
    setShowSprintInput(value > 0)

  }

  const handleStartSprint = (sprintTitle) => {
    // implement the logic to start the sprint
    console.log(`Starting sprint ${sprintTitle}`)
    setShowSprintInput(false)
    setShowSprintTimer(true)
  }

  const handleSprintComplete = () => {
    // implement the logic to complete the sprint
    console.log('Sprint complete')
    setShowSprintTimer(false)
    setShowBreakTimer(true); // Show break timer when sprint is completed
  }

  const handleSprintPause = () => {
    // implement the logic to pause the sprint
    console.log('Sprint paused')
  }

  const handleSprintResume = () => {
    // implement the logic to resume the sprint
    console.log('Sprint resumed')
  }

  const handleBreakStop = () => {
    console.log('Break stopped');
    setShowBreakTimer(false);
    setShowSprintInput(true);
  };

  const handleBreakSnooze = () => {
    console.log('Break snoozed');
  };


  return (
    <div className="App">
      <NumberofSprints onSprintsChange={handleSprintsChange} />
      {showConfirmationMessage && <ConfirmationMessage sprints={sprints} />}
      <SprintBlocks sprints={sprints} />
      {showSprintInput && <SprintInput onStartSprint={handleStartSprint}/>}
      {showSprintTimer && (
      <SprintTimer
        logs={logs}
        setLogs={setLogs}
        sprintTimeLength={SPRINT_TIME_LENGTH} 
        onSprintComplete={handleSprintComplete}
        onPause={handleSprintPause}
        onResume={handleSprintResume}
      />)}
      {showBreakTimer && (
        <BreakTimer
          logs={logs}
          setLogs={setLogs}
          breakTimeLength={BREAK_TIME_LENGTH} 
          onStop={handleBreakStop} 
          onSnooze={handleBreakSnooze} 
        />
      )}
      <LogTable
        logs={logs} 
      />
    </div>
  )
}

export default App
