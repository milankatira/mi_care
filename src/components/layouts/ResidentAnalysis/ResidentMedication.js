import React from 'react'
import CardHeading from '../../commons/Heading/CardHeading'
import ScheduleList from '../../commons/List/ScheduleList'
import MedicalBag from '../../../assets/icons/medical-bag.svg'

const ResidentMedication = () => {

    const data = [
        {
            title: 'Depakine 300',
            subTitle: '1 pill',
            time: '9:00 am'
        },
        {
            title: 'Zyrtec forte',
            subTitle: '3 spoons',
            time: '5:00 pm'
        },

    ]

    const handleMenuClick = (item) => () => {
        console.log(item)
    }

    const ICONPATH = '';

    return (
        <div className='resident-medication'>
            <div className='resident-medication-header'>
                <CardHeading title='Medication' icon={MedicalBag} />
            </div>
            <div className='resident-medication-body'>
                <ScheduleList list={data} handleMenuClick={handleMenuClick} />
            </div>
        </div>
    )
}

export default ResidentMedication
