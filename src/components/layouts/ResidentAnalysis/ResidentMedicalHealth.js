import React from 'react'
import ResidentHydration from './ResidentHydration'
import ResidentMedication from './ResidentMedication'
import ResidentSleep from './ResidentSleep'

const ResidentMedicalHealth = () => {
    return (
        <div className='resident-medical-health'>
            <div className='resident-medical-health-content'>
                <ResidentMedication />
                <hr className='m-0' />
                <ResidentHydration />
                <hr className='m-0' />
                <ResidentSleep />
            </div>
        </div>
    )
}

export default ResidentMedicalHealth
