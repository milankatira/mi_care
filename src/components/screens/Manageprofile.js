import React ,{useState}from "react";
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap'
import { Modal } from 'react-bootstrap';
function Manageprofile() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Card className="m-2 border rounded-border" style={{ "width": "98%" }}>
                <Card.Header className="bg-light p-3 border rounded-border" ><b>Personal Information</b></Card.Header>
                <Card.Body>
                    <Card.Text>
                        <form>
                            <div class="form-group row">
                                <label for="staticEmail" class="col-sm-2 col-form-label">UNIQUE ID:</label>
                                <div class="col-sm-10">
                                    UIA123456
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="inputPassword" class="col-sm-2 col-form-label">NAME:</label>
                                <div class="col-sm-10 d-flex">
                                    <input type="text" readonly class="form-control-plaintext" id="staticEmail" placeholder="email@example.com" />
                                    <input type="text" readonly class="form-control-plaintext" id="staticEmail" placeholder="email@example.com" />
                                    <input type="text" readonly class="form-control-plaintext" id="staticEmail" placeholder="email@example.com" />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="inputPassword" class="col-sm-2 col-form-label">NICK NAME:</label>
                                <div class="col-sm-10 d-flex">
                                    <input type="text" readonly class="form-control-plaintext" id="staticEmail" placeholder="email@example.com" />
                                </div>

                            </div>
                            <div class="form-group row">
                                <label for="inputPassword" class="col-sm-2 col-form-label">PRONOUNCED NAME:</label>
                                <div class="col-sm-10 d-flex">
                                    <input type="text" readonly class="form-control-plaintext" id="staticEmail" placeholder="email@example.com" />
                                </div>

                            </div>
                            <div class="form-group row">
                                <label for="inputPassword" class="col-sm-2 col-form-label">Gender:</label>
                                <div class="col-sm-10 d-flex">
                                    <input type="radio" name="gender" value="male" /> Male <input type="radio" name="gender" value="female" /> Female
                                </div>

                            </div>
                            <div class="form-group row">
                                <label for="inputPassword" class="col-sm-2 col-form-label">Birth Date:</label>
                                <div class="col-sm-10 d-flex">
                                    <input type="date" readonly class="form-control-plaintext" id="staticEmail" placeholder="email@example.com" />
                                </div>

                            </div>
                            <div class="form-group row">
                                <label for="inputPassword" class="col-sm-2 col-form-label">SENIOR IMAGE</label>
                                <div class="col-sm-10 d-flex">
                                    <input type="file" readonly class="form-control-plaintext" id="staticEmail" placeholder="email@example.com" />
                                </div>

                            </div>
                        </form>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className=" m-2 border rounded-border" style={{ "width": "98%" }}>
                <Card.Header className="bg-light p-3 border rounded-border" >Featured</Card.Header>
                <Card.Body>
                    <Card.Text>
                        <div class="form-group row">
                            <label for="inputPassword" class="col-sm-2 col-form-label">FLAT/HOUSE NO./FLOOR:</label>
                            <div class="col-sm-10 d-flex">
                                <input type="text" readonly class="form-control-plaintext" id="staticEmail" placeholder="FLAT/HOUSE NO./FLOOR:" />
                            </div>

                        </div>
                        <div class="form-group row">
                            <label for="inputPassword" class="col-sm-2 col-form-label">STREET/LOCALITY:</label>
                            <div class="col-sm-10 d-flex">
                                <input type="text" readonly class="form-control-plaintext" id="staticEmail" placeholder="STREET/LOCALITY:" />
                            </div>

                        </div>
                        <div class="form-group row">
                            <label for="inputPassword" class="col-sm-2 col-form-label">POSTCODE:</label>
                            <div class="col-sm-10 d-flex">
                                <input type="text" readonly class="form-control-plaintext" id="staticEmail" placeholder="POSTCODE:" />
                            </div>

                        </div>
                        <div class="form-group row">
                            <label for="inputPassword" class="col-sm-2 col-form-label">CITY:</label>
                            <div class="col-sm-10 d-flex">
                                <input type="text" readonly class="form-control-plaintext" id="staticEmail" placeholder="CITY:" />
                            </div>

                        </div>
                        <div class="form-group row">
                            <label for="inputPassword" class="col-sm-2 col-form-label">COUNTRY:</label>
                            <div class="col-sm-10 d-flex">
                                <input type="text" readonly class="form-control-plaintext" id="staticEmail" placeholder="COUNTRY:" />
                            </div>

                        </div>
                        <div class="form-group row">
                            <label for="inputPassword" class="col-sm-2 col-form-label">KEY TO ACCESS:</label>
                            <div class="col-sm-10 d-flex">
                                <input type="text" readonly class="form-control-plaintext" id="staticEmail" placeholder="KEY TO ACCESS:" />
                            </div>

                        </div>



                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className=" m-2 border rounded-border" style={{ "width": "98%" }}>
                <Card.Header className="bg-light p-3 border rounded-border" >KNOWN CONDITION</Card.Header>
                <Card.Body>
                    <Card.Text>
                        <div class="form-group row">
                            <label for="inputPassword" class="col-sm-2 col-form-label">KNOWN CONDITION:</label>
                            <div class="col-sm-10 d-flex">
                                <select name="cars" id="cars">
                                    <option value="volvo">Volvo</option>
                                    <option value="saab">Saab</option>
                                    <option value="mercedes">Mercedes</option>
                                    <option value="audi">Audi</option>
                                </select>                            </div>

                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className=" m-2 border rounded-border" style={{ "width": "98%" }}>
                <Card.Header className="bg-light p-3 border rounded-border" >RECOMENDATIONS</Card.Header>
                <Card.Body>
                    <Card.Text>
                        <div class="form-group row">
                            <label for="inputPassword" class="col-sm-2 col-form-label">SLEEP::</label>
                            <div class="col-sm-10 d-flex">
                                <input type="text" readonly class="form-control-plaintext" id="staticEmail" placeholder="COUNTRY:" />
                            </div>

                        </div>

                        <div class="form-group row">
                            <label for="inputPassword" class="col-sm-2 col-form-label">STEPS:</label>
                            <div class="col-sm-10 d-flex">
                                <input type="text" readonly class="form-control-plaintext" id="staticEmail" placeholder="COUNTRY:" />
                            </div>

                        </div>
                        <div class="form-group row">
                            <label for="inputPassword" class="col-sm-2 col-form-label">CALORIES:</label>
                            <div class="col-sm-10 d-flex">
                                <input type="text" readonly class="form-control-plaintext" id="staticEmail" placeholder="COUNTRY:" />
                            </div>

                        </div>
                        <div class="form-group row">
                            <label for="inputPassword" class="col-sm-2 col-form-label">HYDRATION:</label>
                            <div class="col-sm-10 d-flex">
                                <input type="text" readonly class="form-control-plaintext" id="staticEmail" placeholder="COUNTRY:" />
                            </div>

                        </div>

                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className=" m-2 border rounded-border" style={{ "width": "98%" }}>
                <Card.Header className="bg-light p-3 border rounded-border" >MEDICATIONS</Card.Header>
                <Card.Body>
                    <Card.Text>
                    <div class="form-group row">
                            <label for="inputPassword" class="col-sm-2 col-form-label">Description:</label>
                            <div class="col-sm-10 d-flex">
                                <input type="text" readonly class="form-control-plaintext" id="staticEmail" placeholder="Description:" />

                            </div>

                        </div>          
                        
                        <div class="form-group row">
                            <label for="inputPassword" class="col-sm-2 col-form-label">Add Time:</label>
                            <div class="col-sm-10 d-flex">
                                <input type="time" readonly class="form-control-plaintext" id="staticEmail" />

                            </div>
                            <div class="d-flex justify-content-center ">
                <Button variant="secondary m-2" >Save Medication</Button>
                <Button variant="primary m-2" >Cancel</Button>
            </div>
                        </div> 
                        
                        
                                    </Card.Text>
                </Card.Body>
            </Card>
           
            <Card className="m-2 border rounded-border" style={{ "width": "98%" }}>
                <Card.Header className="bg-light p-3 border rounded-border" >MIICUBE INTERACTION LEVEL</Card.Header>
                <Card.Body>
                    <Card.Text>
                        <div class="form-group row">
                            <label for="inputPassword" class="col-sm-2 col-form-label">KNOWN CONDITION:</label>
                            <div class="col-sm-10 d-flex">
                                <select name="cars" id="cars">
                                    <option value="volvo">High</option>
                                    <option value="saab">Medium</option>
                                    <option value="mercedes">Low</option>
                                    <option value="audi">Disabled</option>
                                </select>                            </div>

                        </div>                     </Card.Text>
                </Card.Body>
            </Card>
            <Card className=" m-2 border rounded-border" style={{ "width": "98%" }}>
                <Card.Header className="bg-light p-3 border rounded-border" >SOS CONTACTS</Card.Header>
                <Card.Body>
                    <Card.Text>
                    <div class="form-group row">
                            <label for="inputPassword" class="col-sm-2 col-form-label">SOS Contact 1:</label>
                            <div class="col-sm-10 d-flex">
                                <input type="text" readonly class="form-control-plaintext" id="staticEmail" placeholder="Contact Name:" />
                                <input type="text" readonly class="form-control-plaintext" id="staticEmail" placeholder="Contact number:" />

                            </div>

                        </div>                    
                        </Card.Text>
                </Card.Body>
            </Card>
            <Card className=" m-2 border rounded-border" style={{ "width": "98%" }}>
                <Card.Header className="bg-light p-3 border rounded-border" >NEIGHBOURS INFORMATION  <button class="text-end btn btn-sm bg-info" onClick={handleShow}>Add Information</button></Card.Header>
                <Card.Body>
                    <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                </Card.Body>
            </Card>
            <br />
            <div class="d-flex justify-content-center ">
                <Button variant="secondary m-2" >Save Profile</Button>
                <Button variant="primary m-2" >Cancel</Button>
            </div>





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
          <Modal.Title>Add Neighbour Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
                    <div class="form-group row">
                        <div class="col-sm-10 d-flex">
                            <label for="inputPassword" class="col-sm-2 col-form-label">Name: </label>
                            <label for="inputPassword" class="col-sm-2 col-form-label">Relation: </label>
                        </div>
                        <div class="col-sm-10 d-flex">
                            <input type="text" readonly class="" id="staticEmail" placeholder="Contact Name:" />
                            <input type="text" readonly class="" id="staticEmail" placeholder="Contact number:" />

                        </div>
                        <hr style={{"width":"90%"}} />
                        <div class="col-sm-10 d-flex">
                            <label for="inputPassword" class="col-sm-2 col-form-label">Contact Type: </label>
                            <label for="inputPassword" class="col-sm-2 col-form-label">Contact Number: </label>
                        </div>
                        <div class="col-sm-10 d-flex">
                        <select name="cars" id="cars">
                                    <option value="volvo">Office</option>
                                    <option value="saab">Home</option>
                                    <option value="mercedes">Work</option>
                                    <option value="audi">Mobile</option>
                                </select>  
                            <input type="text" readonly class="" id="staticEmail" placeholder="Contact number:" />

                        </div>
                        <div class="col-sm-10 d-flex">
                        <label for="inputPassword" class="col-sm-2 col-form-label">   Email</label>
                        </div>
                        <div class="col-sm-10 d-flex">
                        <input type="text" readonly class="" id="staticEmail" />
                        </div>
                        <div class="col-sm-10 d-flex">
                            <label for="inputPassword" class="col-sm-2 col-form-label">FLAT/HOUSE NO./FLOOR </label>
                            <label for="inputPassword" class="col-sm-2 col-form-label">STREET/LOCALITY </label>
                        </div>
                        <div class="col-sm-10 d-flex">
                        <input type="text" readonly class="" id="staticEmail" placeholder="Contact number:" />

                            <input type="text" readonly class="" id="staticEmail" placeholder="Contact number:" />

                        </div>
                        <div class="col-sm-10 d-flex">
                            <label for="inputPassword" class="col-sm-2 col-form-label">POSTCODE</label>
                            <label for="inputPassword" class="col-sm-2 col-form-label">CITY </label>
                        </div>
                        <div class="col-sm-10 d-flex">
                        <input type="text" readonly class="" id="staticEmail" placeholder="Contact number:" />

                            <input type="text" readonly class="" id="staticEmail" placeholder="Contact number:" />

                        </div> <div class="col-sm-10 d-flex">
                            <label for="inputPassword" class="col-sm-2 col-form-label">COUNTY </label>
                            <label for="inputPassword" class="col-sm-2 col-form-label">COUNTRY</label>
                        </div>
                        <div class="col-sm-10 d-flex">
                        <input type="text" readonly class="" id="staticEmail" placeholder="Contact number:" />

                            <input type="text" readonly class="" id="staticEmail" placeholder="Contact number:" />

                        </div>
                    </div>

       <br />  <br />
      
        </Modal.Body>
        <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>Save</Button>
        <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
        
        </Modal.Footer>
      </Modal>
    
        </>
    )
}

export default Manageprofile