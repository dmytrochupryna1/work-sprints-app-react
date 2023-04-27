import React, { useState } from 'react'

const NumberofSprints = ({onSprintsChange}) => {
    const [numSprints, setNumSprints] = useState(0)

    const handleSprintsChange = (event) => {
        const value = parseInt(event.target.value, 10)
        setNumSprints(value)

    }

    const handleSubmit = (event) => {
        event.preventDefault()
        onSprintsChange(numSprints)
    }


    return (
        <div className="number-of-sprints">
            <form onSubmit={handleSubmit}>               
                <input
                    type='range'
                    min='0'
                    max='24'
                    value={numSprints}
                    onChange={handleSprintsChange} 
                />
                <button type="submit">Submit</button>
                <p>Sprints to complete: {numSprints}</p>
            </form>
        </div>
    )
}

export default NumberofSprints