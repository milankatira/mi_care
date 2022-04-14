import React from "react";
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap'
import { Modal } from 'react-bootstrap';

function SaveConfigure(){
    return (
<>
<Card className="m-2 border rounded-border" style={{ "width": "98%" }}>
                <Card.Header className="bg-light p-3 border rounded-border" ><b>GATEWAY INFORMATION</b></Card.Header>
                <Card.Body>
                    <Card.Text>
                        <form>
                            <div class="form-group row">
                                <label for="staticEmail" class="col-sm-2 col-form-label">SERIAL NUMBER:</label>
                                <div class="col-sm-10">
                                    UIA123456
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="inputPassword" class="col-sm-2 col-form-label">MIICUBE NAME</label>
                                <div class="col-sm-10 d-flex">
                                    <input type="text" readonly class="form-control-plaintext" id="staticEmail" placeholder="email@example.com" />
                                
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="inputPassword" class="col-sm-2 col-form-label">RESIDENT ASSIGNED TO:</label>
                                <div class="col-sm-10 d-flex">
                                    UIA123456
                                </div>

                            </div>
                            <div class="form-group row">
                                <label for="inputPassword" class="col-sm-2 col-form-label">X3 GATEWAY:</label>
                                <div class="col-sm-10 d-flex">
                                    UIA123456
                                </div>

                            </div>   
                            <div class="form-group row">
                                <label for="inputPassword" class="col-sm-2 col-form-label">PI MAC ADDRESS:</label>
                                <div class="col-sm-10 d-flex">
                                    UIA123456
                                </div>

                            </div>
                            <div class="form-group row">
                                <label for="inputPassword" class="col-sm-2 col-form-label">VERSION NUMBER:</label>
                                <div class="col-sm-10 d-flex">
                                v1.17.2-3
                                </div>

                            </div>
                        
                            <div class="form-group row">
                                <label for="inputPassword" class="col-sm-2 col-form-label">WEARABLE/TOKEN BASED IN/OUT ONLY:</label>
                                <div class="col-sm-10 d-flex">
                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>

                                </div>

                            </div>
                            <div class="form-group row">
                                <label for="inputPassword" class="col-sm-2 col-form-label">WAKE WORD:</label>
                                <div class="col-sm-10 d-flex">
                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>

                                </div>

                            </div>
                            <div class="form-group row">
                                <label for="inputPassword" class="col-sm-2 col-form-label">TIME ZONE:</label>
                                <div class="col-sm-10 d-flex">

                                    <select name="cars" id="cars">
                                        <option value="volvo">Volvo</option>
                                        <option value="saab">Saab</option>
                                        <option value="mercedes">Mercedes</option>
                                        <option value="audi">Audi</option>
                                    </select> 
                                </div>

                            </div>
                        
                        </form>
                    </Card.Text>
                </Card.Body>
            </Card>


            <Card className="m-2 border rounded-border" style={{ "width": "98%" }}>
                <Card.Header className="bg-light p-3 border rounded-border" ><b>MIICUBE LOCATION</b></Card.Header>
                <Card.Body>
                    <Card.Text>
                        <form>
                            <div class="form-group row">
                                <label for="staticEmail" class="col-sm-2 col-form-label">HOUSE:</label>
                                <div class="col-sm-10">
                                    UIA123456
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="inputPassword" class="col-sm-2 col-form-label">FLOOR:</label>
                                <div class="col-sm-10 d-flex">
                                    <input type="text" readonly class="form-control-plaintext" id="staticEmail" placeholder="email@example.com" />
                                
                                </div>
                            </div>
                         
                        </form>
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card className="m-2 border rounded-border" style={{ "width": "98%" }}>
                <Card.Header className="bg-light p-3 border rounded-border" ><b>ZIGBEE SENSORS CONFIGURATION</b></Card.Header>
                <Card.Body>
                    <Card.Text>
                        <form>
                  
<table>
  <tr>
    <th width="25%">Sensor mac ID</th>
    <th width="25%">Status</th>
    <th width="25%">Sensor Type</th>

    <th width="25%">Sensor Location</th>
    <th width="25%">Sensor Name</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
    <td>   <select name="cars" id="cars">
                                        <option value="volvo">Volvo</option>
                                        <option value="saab">Saab</option>
                                        <option value="mercedes">Mercedes</option>
                                        <option value="audi">Audi</option>
                                    </select> </td>
    <td><input type="text" value="Sensor-D000E2" disabled/></td>

  </tr>
 
</table>


                         
                        </form>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="m-2 border rounded-border" style={{ "width": "98%" }}>
                <Card.Header className="bg-light p-3 border rounded-border" ><b>BLE SENSORS CONFIGURATION
</b></Card.Header>
                <Card.Body>
                    <Card.Text>
                        <form>
                            <table>
                                <tr>
                                    <th width="35%">Sensor mac ID</th>
                                    <th width="35%">Sensor Type</th>
                                    <th width="25%">Sensor Name:   </th>
                                    <th width="35%">Take Actions</th>
                                </tr>
                                <tr>
                                    <td>Alfreds Futterkiste</td>
                                    <td>Maria Anders</td>
                                    <td> <input type="text" id="lname" name="lname" value="positiobe"disabled/></td>
                                    
                                  
                                        <td><i class="fa-solid fa-trash-can"></i></td>                        
                                            </tr>

                            </table>
                            <br />
                        <button className="bg-success btn-sm"><i class="fa-solid fa-plus"></i></button>

                        </form>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="m-2 border rounded-border" style={{ "width": "98%" }}>
            <Card.Body>
                <div className="text-center">

                <button className="bg-primary text-white btn-sm">Save Configure</button>

                </div>
                </Card.Body> 
            </Card>

</>
    )
}
export default SaveConfigure