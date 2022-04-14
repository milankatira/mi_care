import React from 'react';
import Online from "../../../assets/icons/online.svg";
import Warning from "../../../assets/icons/warning.svg";
import CardHeading from '../Heading/CardHeading';

const ResidentInfoCard = ({
    residentName = '',
    imageUrl = '',
    dob = '',
    heathStatusIsOkay = false
}) => {
    return (
        <div className='resident-info-card'>
            <div className='resident-info-card-header'>
                <CardHeading
                    title='Resident'
                />
            </div>
            <div className='resident-info-card-body'>
                <div className='resident-avatar'>
                    <img src={imageUrl} alt='avatar' className='resident-avatar-image' />
                    <img src={!!heathStatusIsOkay ? Online : Warning} alt='status' className='resident-avatar-status' />
                </div>
                <div>
                    <h6>{residentName}</h6>
                    <p className='text-muted'>{dob}</p>
                </div>
            </div>
        </div>
    )
}

export default ResidentInfoCard
