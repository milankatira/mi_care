import React from 'react'
import Bed from '../../../assets/icons/bed.svg'
import CardHeading from '../../commons/Heading/CardHeading'

const ResidentSleep = () => {
    return (
        <div className='resident-sleep'>
            <CardHeading title='Sleep' icon={Bed} />
            <p className='text-muted text-center py-2'>Total: <span className='text-black font-weight-bold'>7 h 34 min</span></p>
        </div>
    )
}

export default ResidentSleep
