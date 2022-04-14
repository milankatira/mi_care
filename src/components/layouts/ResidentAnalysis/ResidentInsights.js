import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Home from "../../../assets/icons/home.svg";
import ResidentActivenessDetails from "./ResidentActivenessDetails";
import ResidentActivenessGraphController from "./ResidentActivenessGraphController";
import ResidentInsightGraph from "./ResidentInsightGraph";

const ResidentInsights = ({ handleSelectedVitalInfoIndex, datasets, activenessDetails, title, index, randomData }) => {
    const [graphType, setGraphType] = React.useState("appliances");
    const [zoomValue, setZoomValue] = React.useState(50);
    const [color, setColor] = React.useState(3);

    return (
        <div className="resident-insights">
            <div className='resident-insights-content'>
                <Container fluid>
                    <Row className='px-3 resident-insights-header'>
                        <Col xs={8} sm={3} className='p-0'>
                            <h6 className='mb-0 mt-1 text-md'>
                                {index === 0 ? "Residential Activity" : title}
                            </h6>
                        </Col>
                        <Col xs={4} sm={5} className='p-0'>
                            <img
                                width={14}
                                src={Home}
                                alt="home"
                                style={{
                                    cursor: "pointer",
                                    verticalAlign: 'middle'
                                }}
                                onClick={handleSelectedVitalInfoIndex(0)}
                            />
                        </Col>
                        <Col xs={12} sm={4} className='pr-0'>
                            <div className="d-flex justify-content-end">
                                <button className="mr-1 text-sm">Appliances</button>
                                <div className="vl mx-2"></div>
                                <button className="ml-1 text-secondary text-sm">Activities</button>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12} className="px-4">
                            <ResidentInsightGraph
                                datasets={datasets}
                                zoomValue={zoomValue}
                                color={color}
                            />
                        </Col>
                        <Col xs={12} className="mt-3 px-5">
                            <ResidentActivenessGraphController
                                randomData={randomData}
                                setZoomValue={setZoomValue}
                                zoomValue={zoomValue}
                                color={color}
                                setColor={setColor}
                            />
                        </Col>
                    </Row>
                </Container>
                <hr style={{ borderWidth: 4, margin: "1.5rem 0" }} />
                <ResidentActivenessDetails activenessDetails={activenessDetails} />
            </div>
        </div>
    );
};

export default ResidentInsights;
