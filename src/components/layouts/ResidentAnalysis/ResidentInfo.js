import React from "react";
import { Col, Row } from "react-bootstrap";
import ResidentInfoCard from "../../commons/Card/ResidentInfoCard";
import VitalCard from "../../commons/Card/VitalCard";

const ResidentInfo = ({
    selectedVitalInfoIndex,
    handleSelectedVitalInfoIndex,
    data
}) => {
    const RenderVitals = (vitalData, index) => {
        return (
            <Col className={`vital-card-area-col`} sm={4} md={4} key={index}>
                <VitalCard
                    wrapperClass={`${selectedVitalInfoIndex === (index + 1) ? 'active' : ''}`}
                    handleOnClick={handleSelectedVitalInfoIndex(index + 1)}
                    vitalName={vitalData.vitalName}
                    vitalValue={vitalData.vitalValue}
                    vitalImage={vitalData.vitalImage}
                    vitalUnit={vitalData.vitalUnit}
                />
            </Col>
        );
    };

    return (
        <Row className="">
            <Col md={3} className="p-0">
                <ResidentInfoCard
                    residentName="John Stuart Sr."
                    dob="14 / 05 / 1956"
                    heathStatusIsOkay={true}
                    imageUrl="https://thumbs.dreamstime.com/b/old-happy-man-holding-thumbs-up-retirement-home-35821112.jpg"
                />
            </Col>
            <Col md={9} className="">
                <Row className="justify-content-between vital-card-area h-100">{data.slice(1).map(RenderVitals)}</Row>
            </Col>
        </Row>
    );
};

export default ResidentInfo;
