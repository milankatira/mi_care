import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { ReactComponent as HeartRate } from '../../../assets/icons/heart-rate.svg'
import Online from '../../../assets/icons/online.svg'
import { ReactComponent as Thermometer } from '../../../assets/icons/thermometer.svg'
import Warning from '../../../assets/icons/warning.svg'

const SquareInfoCard = ({
    imageUrl = '',
    name = '-',
    bloodPressure = '-',
    oxygen = '-',
    temperature = '-',
    heathStatusIsOkay = true,
}) => {
    return (
        <div className='square-info-card'>
            <div className='square-info-card-header mb-3'>
                <div className='square-info-card-header-avatar-area mb-2'>
                    <img src={imageUrl} alt='avatar' className='square-info-card-header-avatar-area-avatar' />
                    <img src={!!heathStatusIsOkay ? Online : Warning} alt='status' className='square-info-card-header-avatar-area-status' />
                </div>
                <h6 className='text-primary font-weight-normal text-center'>{name}</h6>
            </div>
            <div className='container-fluid square-info-card-body'>
                <Row>
                    <Col className='square-info-card-body-desc'>
                        <p className='text-muted'>
                            <span className='font-weight-bold text-md'>{bloodPressure}</span>bpm
                        </p>
                        <HeartRate className='icon text-muted' />
                    </Col>
                    <Col className='square-info-card-body-desc'>
                        <p className='text-muted'>
                            <span className='font-weight-bold text-md'>{oxygen}</span>%</
                        p>
                        <h6 className='text-muted'>sp02</h6>
                    </Col>
                    <Col className='square-info-card-body-desc'>
                        <p className='text-muted'>
                            <span className='font-weight-bold text-md'>{temperature}</span>°C
                        </p>
                        <Thermometer className='icon text-muted' />
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default SquareInfoCard
