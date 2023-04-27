import React, {useState} from 'react'

const SprintInput = ({onStartSprint}) => {
    const [sprintTitle, setSprintTitle] = useState('')

    const handleStartClick = () => {
        onStartSprint(sprintTitle)
        setSprintTitle('')
    }

    return (
        <div className="sprint-input">
            <input
                type="text"
                id="sprint-title"
                value={sprintTitle}
                onChange={(e) => setSprintTitle(e.target.value)}
                placeholder='Sprint Title' 
            />
            <button
                onClick={handleStartClick}
                disabled={!sprintTitle}
            >Start</button>
        </div>
    )
}

export default SprintInput