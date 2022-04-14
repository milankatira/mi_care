import React from 'react'

const CardHeading = ({
    title,
    icon,
    onEdit = () => { }
}) => {
    return (
        <div className='d-flex justify-content-between w-100 card-heading mb-2'>
            <div className='d-flex w-100'>
                <h6 className='mr-2 mb-0'>{title}</h6>
                {
                    icon &&
                    <div>
                        <img src={icon} alt='icon' style={{ verticalAlign: 'baseline' }} />
                    </div>
                }
            </div>
            <button onClick={onEdit} className='text-secondary font-weight-bold align-self-start'>
                Edit
            </button>
        </div>
    )
}

export default CardHeading
