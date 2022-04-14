import React from "react";
import { Col, Row } from "react-bootstrap";
import MiniLine from "../../commons/Graph/MiniLine";

const ResidentActivenessDetails = () => {
    return (
        <div className="container-fluid px-3">
            <Row>
                <Col md={4} className='resident-activeness-col'>
                    <div className='resident-activeness-col-first-row'>
                        <p className='resident-activeness-col-label'>Up at night</p>
                        <MiniLine />
                        <p classsName='resident-activeness-col-value'>5</p>
                    </div>
                    <div className='resident-activeness-col-second-row'>
                        <p className='resident-activeness-col-label'>Wake Up</p>
                        <MiniLine />
                        <p classsName='resident-activeness-col-value'>08:00</p>
                    </div>
                </Col>
                <Col md={4} className='resident-activeness-col'>
                    <div className='resident-activeness-col-first-row'>
                        <p className='resident-activeness-col-label'>Left Room</p>
                        <MiniLine />
                        <p classsName='resident-activeness-col-value'>2</p>
                    </div>
                    <div className='resident-activeness-col-second-row'>
                        <p className='resident-activeness-col-label'>Breakfast</p>
                        <MiniLine />
                        <p classsName='resident-activeness-col-value'>09:00</p>
                    </div>
                </Col>
                <Col md={4} className='resident-activeness-col'>
                    <div className='resident-activeness-col-first-row'>
                        <p className='resident-activeness-col-label'>Staff visits</p>
                        <MiniLine />
                        <p classsName='resident-activeness-col-value'>5</p>
                    </div>
                    <div className='resident-activeness-col-second-row'>
                        <p className='resident-activeness-col-label'>Hydration</p>
                        <MiniLine />
                        <p classsName='resident-activeness-col-value'>09:30</p>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default ResidentActivenessDetails;
