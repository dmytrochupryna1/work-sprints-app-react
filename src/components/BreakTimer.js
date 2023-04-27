import React, { useState, useEffect } from 'react';

const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

const BreakTimer = ({ breakTimeLength, onStop, onSnooze, logs, setLogs }) => {
    const [timeRemaining, setTimeRemaining] = useState(breakTimeLength);
    const [isPaused, setIsPaused] = useState(false);
    const [startTime, setStartTime] = useState(Date.now());

    useEffect(() => {
        if (!startTime || isPaused) {
          return;
        }
    
        const timer = setInterval(() => {
          const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
          const timeRemaining = Math.max(0, breakTimeLength - elapsedTime);
          setTimeRemaining(timeRemaining);
    
          if (timeRemaining === 0) {
            onStop();
            setLogs([
                ...logs,
                {
                  type: "Break",
                  title: "Break",
                  startTime: startTime,
                  endTime: Date.now(),
                },
              ]);
          }
        }, 1000);
    
        return () => clearInterval(timer);
      }, [timeRemaining, isPaused, onStop, startTime]);

      const handleStop = () => {
        onStop();
        setLogs([
            ...logs,
            {
              type: "Break",
              title: "Break", // Update this with the actual sprint title
              startTime: startTime,
              endTime: Date.now(),
            },
          ]);
      };
    
      const handleSnooze = () => {
        onSnooze();
        setTimeRemaining(timeRemaining + breakTimeLength); // Extend break time by 5 minutes
      };

      return (
        <div className="break-timer">
          <p>Break Time Remaining: {formatTime(timeRemaining)}</p>
          <button onClick={handleSnooze}>Snooze</button>
          <button onClick={handleStop}>Stop</button>
        </div>
      );
}

export default BreakTimer