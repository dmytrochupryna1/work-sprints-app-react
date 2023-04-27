import React, { useState, useEffect } from 'react'

const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
}

const SprintTimer = ({ onSprintComplete, onPause, onResume, sprintTimeLength, logs, setLogs }) => {
    const [timeRemaining, setTimeRemaining] = useState(sprintTimeLength)
    const [isPaused, setIsPaused] = useState(false)
    const [startTime, setStartTime] = useState(Date.now())

    useEffect(() => {
        if (!startTime || isPaused) {
            return
        }

        const timer = setInterval(() => {
            const elapsedTime = Math.floor((Date.now() - startTime) / 1000)
            const timeRemaining = Math.max(0, sprintTimeLength - elapsedTime)
            setTimeRemaining(timeRemaining)

            if (timeRemaining === 0) {
                onSprintComplete()
                setLogs([
                    ...logs,
                    {
                      type: "Sprint",
                      title: "Sprint Title", // Update this with the actual sprint title
                      startTime: startTime,
                      endTime: Date.now(),
                    },
                  ]);
            }
        }, 1000)

        return () => clearInterval(timer)
    }, [timeRemaining, isPaused, onSprintComplete])

    const handlePauseResume = () => {
        setIsPaused(!isPaused)

        if (isPaused) {
            onResume()
            setStartTime(Date.now() - (sprintTimeLength - timeRemaining) * 1000)

        } else {
            onPause()
        }
    }

    const handleComplete = () => {
        onSprintComplete()
        setLogs([
            ...logs,
            {
              type: "Sprint",
              title: "Sprint Title", // Update this with the actual sprint title
              startTime: startTime,
              endTime: Date.now(),
            },
          ]);
    }
    
    return (
        <div className="sprint-timer">
            <p>Time Remaining: {formatTime(timeRemaining)}</p>
            <button onClick={handlePauseResume}>{isPaused ? 'Resume' : 'Pause'}</button>
            <button onClick={handleComplete}>Completed</button>
        </div>
    )
}

export default SprintTimer