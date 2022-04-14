import React from 'react';
import LeftArrow from "../../../assets/icons/left_arrow.svg";
import RightArrow from "../../../assets/icons/right_arrow.svg";

const CalandarHeader = ({
    month,
    year,
    handlePrevArrow,
    handleNextArrow,
}) => {
    switch (month) {
        case 0:
            month = 'January';
            break;
        case 1:
            month = 'February';
            break;
        case 2:
            month = 'March';
            break;
        case 3:
            month = 'April';
            break;
        case 4:
            month = 'May';
            break;
        case 5:
            month = 'June';
            break;
        case 6:
            month = 'July';
            break;
        case 7:
            month = 'August';
            break;
        case 8:
            month = 'September';
            break;
        case 9:
            month = 'October';
            break;
        case 10:
            month = 'November';
            break;
        case 11:
            month = 'December';
            break;
        default:
            month = '';
            break;
    }
    return (
        <div className='d-flex justify-content-between'>
            <h6>{month} <span className='font-weight-regular text-muted'>{year}</span></h6>
            <div>
                <button onClick={handlePrevArrow} className='mr-2'><img src={LeftArrow} alt='left_arrow' width={20} /></button>
                <button onClick={handleNextArrow}><img src={RightArrow} alt='right_arrow' width={20} /></button>
            </div>
        </div>
    )
}

export default CalandarHeader
