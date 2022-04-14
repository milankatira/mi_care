import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import EqualizerIcon from "../../../assets/icons/equalizer.svg";
import ZoomInIcon from "../../../assets/icons/zoom_in.svg";
import ZoomOutIcon from "../../../assets/icons/zoom_out.svg";

const ResidentActivenessGraphController = ({
    randomData,
    setZoomValue,
    zoomValue,
    color,
    setColor
}) => {

    return (
        <Container fluid>
            <Row className='resident-activeness-graph-controller'>
                <Col xs={2} sm={1} className="pl-0 equalizer">
                    <button>
                        <img src={EqualizerIcon} width={20} alt="graph_settings" />
                    </button>
                </Col>
                <Col xs={10} sm={6} className="d-flex time-buttons">
                    <button
                        className={`${color === 1 ? "text-secondary" : "text-muted"} text-sm`}
                        onClick={() => {
                            setColor(1);
                            randomData();
                        }}>
                        Seconds
                    </button>
                    <div className="vl mx-2"></div>
                    <button
                        className={`${color === 2 ? "text-secondary" : "text-muted"} text-sm`}
                        onClick={() => {
                            setColor(2);
                            randomData();
                        }}>
                        Minutes
                    </button>
                    <div className="vl mx-2"></div>
                    <button
                        className={`${color === 3 ? "text-secondary" : "text-muted"} text-sm`}
                        onClick={() => {
                            setColor(3);
                            randomData();
                        }}>
                        Hours
                    </button>
                </Col>
                <Col xs={12} sm={5} md={5} className="d-flex justify-content-end pr-0 graph-zoom-controller">
                    <img src={ZoomOutIcon} width={20} alt="zoom_out" />
                    <input type="range" min={0} max={100} step={10} className="mx-2 custom-range-slider" onChange={e => {
                        setZoomValue(Number(e.target.value))
                    }} value={zoomValue} />
                    <img src={ZoomInIcon} width={20} alt="zoom_in" />
                </Col>
            </Row>
        </Container>
    );
};

export default ResidentActivenessGraphController;
