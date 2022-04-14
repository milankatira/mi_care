import React from 'react'

const MiniLine = ({
    value = 50,
    min = 0,
    max = 100,
    wrapperClasses = ''
}) => {
    return (
        <div className={`miniline ${wrapperClasses}`}>
            <input type='range' value={value} min={min} max={max} className='mini-line w-100' />
        </div>
    )
}

export default MiniLine
