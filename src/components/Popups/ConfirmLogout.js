import React,{useState} from 'react'
import { Modal } from 'react-bootstrap';
import {Button} from 'react-bootstrap'

function ConfirmLogout(){
    const [lgShow, setLgShow] = useState(false);

  {/*   const logout = () => sessionStorage.setItem("priti","priti");*/}

return(
<>

     
      <Button onClick={() => setLgShow(true)}>Large modal</Button>

      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
          Confirm Logout
          </Modal.Title>
        </Modal.Header>
        <Modal.Body >Are you sure to logout? Press Confirm to logout or Cancel to stay logged in
 </Modal.Body>
        <Modal.Footer>
          <Button className="btn btn-danger text-white" onClick={() => setLgShow(true)}>
           Cancel
          </Button>
          <Button variant="primary" onClick={() => setLgShow(true)}>
           Confirm
          </Button>
        </Modal.Footer>
      </Modal>




     
    </>
)
}


export default ConfirmLogout;