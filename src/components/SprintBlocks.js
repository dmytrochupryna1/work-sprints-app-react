const SprintBlock = () => {
    return (
        <div className='sprint-block'>
            <p>block</p>
        </div>
    )
}

const SprintBlocks = ({sprints}) => {
    const blocks = []
    for (let i = 0; i < sprints; i++) {
        blocks.push(<SprintBlock key={i} />)
    }
    return (
        <div className='sprint-blocks'>
            {blocks}
        </div>
    )
}

export default SprintBlocks