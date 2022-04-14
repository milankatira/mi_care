import React,{useState} from 'react'
import { Modal } from 'react-bootstrap';
import {Button} from 'react-bootstrap'

function Health(){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

return(
<>

      <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button>

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
        MiiCare provides insights and alerts based on the metrics (including health) we are able to measure. The MiiCare system is not intended to diagnose or treat any medical condition and should not be relied on for any medical purposes, nor designed to replace your current health care provision. It is intended to provide information that can help you manage your well-being. If you are concerned about any symptom or condition, please consult with the most appropriate medical professional. If you believe you are experiencing a medical emergency, call emergency services.
       
       
       <br />  <br />
       <div class=" d-flex justify-content-end">
       <input class="m-1"  type="checkbox"/>Do not show this again</div>
        </Modal.Body>
        <Modal.Footer>
       { /*   <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>*/} 
          <Button variant="primary" onClick={handleClose}>Ok</Button>
        </Modal.Footer>
      </Modal>
    </>
)
}


export default Health;