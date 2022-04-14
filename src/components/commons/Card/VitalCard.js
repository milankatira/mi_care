import React from 'react';

const VitalCard = ({
    wrapperClass = '',
    vitalName = '',
    vitalValue = '',
    vitalUnit = '',
    vitalImage = '',
    handleOnClick,
}) => {
    return (
        <div className={`vital-card ${wrapperClass}`} onClick={handleOnClick}>
            <div className='vital-card-content'>
                <div className='vital-card-info'>
                    <div className='vital-card-info-left'>
                        <p className='text-muted font-weight-bold'>{vitalName}</p>
                        <div className='vital-card-info-left-value'>
                            <h4 className='mb-0 mr-1'>{vitalValue}</h4>
                            <p className='text-muted'>{vitalUnit}</p>
                        </div>
                    </div>
                    <div className='vital-card-info-right align-self-center'>
                        <img src={vitalImage} alt='vital_image' />
                    </div>
                </div>
                {/* <img src={VitalCardBg} className='vital-card-bg' alt='background_image' /> */}
            </div>
        </div>
    )
}

export default VitalCard
