import React, { useState } from "react";
import { Container } from "react-bootstrap";
import SquareInfoCard from "../commons/Card/SquareInfoCard";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import session from "redux-persist/lib/storage/session";
import { json } from "d3";
import axios from "axios";

const DashboardScreen = ({ setTitle }) => {
  const [dummyData, setDummyData] = React.useState([
    {
      name: "John Stuart Sr.",
      bloodPressure: "100",
      oxygen: "97",
      temperature: "36.5",
      heathStatusIsOkay: true,
      imageUrl:
        "https://thumbs.dreamstime.com/b/old-happy-man-holding-thumbs-up-retirement-home-35821112.jpg",
    },
  ]);

  React.useEffect(() => {
    if (setTitle) {
      setTitle("Dashboard");
    }
  }, [setTitle]);
  /// get data dashboard ended

  const RenderCardsInCol = (eachData, index) => {
    return (
      <div className="col mb-4">
        <SquareInfoCard
          key={index}
          name={JSON.parse(sessionStorage.getItem("dashboard")).cnm}
          bloodPressure={JSON.parse(sessionStorage.getItem("dashboard")).tvs}
          oxygen={JSON.parse(sessionStorage.getItem("dashboard")).trs}
          temperature={JSON.parse(sessionStorage.getItem("dashboard")).tmcs}
          heathStatusIsOkay={
            JSON.parse(sessionStorage.getItem("dashboard")).amcs
          }
          imageUrl={
            "https://staging.miicube.info/" +
            JSON.parse(sessionStorage.getItem("dashboard")).imgch
          }
        />
      </div>
    );
  };

  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  if (sessionStorage.getItem("health") === "true") {
    //alert("hi")
    //{} handleShow
    //handleShow(true);
    // sessionStorage.removeItem("health");
  }

  return (
    <>
      <Container fluid className="mx-0 px-0">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
          {dummyData.map(RenderCardsInCol)}
        </div>
      </Container>

      <Modal
        class="modal-lg"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Health and safety disclaimer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          MiiCare provides insights and alerts based on the metrics (including
          health) we are able to measure. The MiiCare system is not intended to
          diagnose or treat any medical condition and should not be relied on
          for any medical purposes, nor designed to replace your current health
          care provision. It is intended to provide information that can help
          you manage your well-being. If you are concerned about any symptom or
          condition, please consult with the most appropriate medical
          professional. If you believe you are experiencing a medical emergency,
          call emergency services.
          <br /> <br />
          <div class=" d-flex justify-content-end">
            <input class="m-1" type="checkbox" />
            Do not show this again
          </div>
        </Modal.Body>
        <Modal.Footer>
          {/*   <Button variant="secondary" onClick={handleClose}>
      Close
    </Button>*/}
          <Button variant="primary" onClick={handleClose}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DashboardScreen;
