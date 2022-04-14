import React, { Component } from "react";
import { useState } from "react";
import './usermanagement.css';
import AppNavbar from "../commons/Navbar/AppNavbar";
import LeftSidebar from "../commons/Sidebar/LeftSidebar";
import RightSidebar from "../commons/Sidebar/RightSidebar";
import LoginScreen from "./LoginScreen"
import { Modal } from 'react-bootstrap';
import {Button} from 'react-bootstrap'
const UserManagement = () => {
  var  user_dat = null;
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);


    const [show2, setShow2] = useState(false);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);


User_Management();

    
  async function User_Management(url ='https://staging.miicube.info/user/getUserDetails?', data = {}) {
    var urlmain= 'criteria={"userID":"'+ sessionStorage.getItem("username") + '","uk":"' + sessionStorage.getItem("uk") + '"}'
    url = url + urlmain ;
 console.log("user management url ",url);

   const res = await fetch(url, {
   method: 'GET', // *GET, POST, PUT, DELETE, etc.
 ////// mode: 'cors', // no-cors, *cors, same-origin
//   cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//   credentials: 'same-origin', // include, *same-origin, omit
   headers: {
     'Content-Type': 'application/json',
     'authFor':'W',
     Authorization: `Bearer ${sessionStorage.getItem("token")}`,
     // 'Content-Type': 'application/x-www-form-urlencoded',
   },
   redirect: 'follow', // manual, *follow, error
   referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
     }).then(res => res.json()).then(json => {
   
           user_dat =JSON.stringify(json.Data);
           user_dat = JSON.parse(user_dat);
           user_dat = user_dat.tbData;
           console.log(user_dat.length);
           console.log("User management data reporting successfully",user_dat);
        
     if(!json.Data)
     {
         window.location.assign("/login");
     }
     else{
   
     }
  
 }) 
}

  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  function myFunction1() {
    document.getElementById("myDropdown1").classList.toggle("show");
  }function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show");
  }function myFunction3() {
    document.getElementById("myDropdown3").classList.toggle("show");
  }function myFunction4() {
    document.getElementById("myDropdown4").classList.toggle("show");
  }function myFunction5() {
    document.getElementById("myDropdown5").classList.toggle("show");
  }function myFunction6() {
    document.getElementById("myDropdown6").classList.toggle("show");
  }function myFunction7() {
    document.getElementById("myDropdown7").classList.toggle("show");
  }function myFunction8() {
    document.getElementById("myDropdown8").classList.toggle("show");
  }function myFunction9() {
    document.getElementById("myDropdown9").classList.toggle("show");
  }function myFunction90() {
    document.getElementById("myDropdown90").classList.toggle("show");
  }function myFunction91() {
    document.getElementById("myDropdown91").classList.toggle("show");
  }
  function handleClick() {  
    //window.location.assign("/login")
  }
  return (


    <>
      <ul>
         <li>
           hi :     
          </li>
       </ul>
      <div class="row m-2">
        <div class="col-sm-3">
          <div class="card" style={{ "border-radius": "25px", "height": "140px", "font-size": "10px" }}>
            <div class="card-body">
              <div class="row d-flex">
                <div class="col-sm"><h6 class="card-title">Total MiiCubes : {JSON.parse(sessionStorage.getItem("dashboard")).tmcs}</h6><hr style={{ "margin": "0rem 0" }} />
                  <p class="card-text"><b>Allocated : </b> <span>1</span></p><hr style={{ "margin": "0rem 0" }} />
                  <p class="card-text"><b>Free: </b> <span>1</span></p></div>
                <div class="col-sm"><span class="bg-for-card"><img class="img-card" src="data:image/png;base64,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" />
                </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="card" style={{ "border-radius": "25px", "height": "140px", "font-size": "10px" }}>
            <div class="card-body">
              <div class="row d-flex">
                <div class="col-sm"><h6 class="card-title">Total Licences :  {JSON.parse(sessionStorage.getItem("dashboard")).tus}</h6><hr style={{ "margin": "0rem 0" }} />
                  <p class="card-text"><b>Allocated : </b> <span>1</span></p><hr style={{ "margin": "0rem 0" }} />
                  <p class="card-text"><b>Free: </b> <span>1</span></p></div>
                <div class="col-sm"><span class="bg-for-card"><img class="img-card" src="data:image/png;base64,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" />
                </span>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="card" style={{ "border-radius": "25px", "height": "140px", "font-size": "10px" }}>
            <div class="card-body">
              <div class="row d-flex">
                <div class="col-sm"><h6 class="card-title">Residents {JSON.parse(sessionStorage.getItem("dashboard")).trs}</h6><hr style={{ "margin": "0rem 0" }} />
                  <p class="card-text"><b>Allocated : </b> <span>1</span></p><hr style={{ "margin": "0rem 0" }} />
                  <p class="card-text"><b>Free: </b> <span>1</span></p></div>
                <div class="col-sm"><span class="bg-for-card"><img class="img-card" src="data:image/png;base64,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" />
                </span></div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="card" style={{ "border-radius": "25px", "height": "140px", "font-size": "10px" }}>
            <div class="card-body">
              <div class="row d-flex">
                <div class="col-sm"><h6 class="card-title">Visitors {JSON.parse(sessionStorage.getItem("dashboard")).tvs}</h6><hr style={{ "margin": "0rem 0" }} />
                  <p class="card-text"><b>Allocated : </b> <span>1</span></p><hr style={{ "margin": "0rem 0" }} />
                  <p class="card-text"><b>Free: </b> <span>1</span></p></div>
                <div class="col-sm" style={{ "top": "50%" }}><span class="bg-for-card"><img class="img-card" src="data:image/png;base64,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" />
                </span></div>
              </div>

            </div>
          </div>
        </div>
      </div>









      <div class="container-fluid mt-5">
        <div class="row">
          <div class=" mr-auto">

            <div class="">
              <div class="">
                <ul class="nav nav-tabs justify-content-center" role="tablist">
                  <li class="nav-item" >
                    <a class="nav-link active" data-toggle="tab" href="#home" role="tab">
                      Mii Cubes
                    </a>
                  </li>
                  <li class="nav-item ">

                    <a class="nav-link" data-toggle="tab" href="#profile" role="tab">
                      Residents
                    </a>
                  </li>

                  <li class="nav-item ">

                    <a class="nav-link" data-toggle="tab" href="#messages" role="tab">
                      Users              </a>

                  </li>

                  <li class="nav-item">

                    <a class="nav-link" data-toggle="tab" href="#settings" role="tab">
                      Visitors              </a>
                  </li>
                </ul>
              </div>
              <div class="card-body">
                <div class="tab-content text-center">
                  <div class="tab-pane active" id="home" role="tabpanel">
                    <div class="d-flex justify-content-end p-2"><button  label="Action"class="bg-white btn btn-sm">Add</button></div>
                    <p><table id="example" class="display" cellspacing="0" width="100%">
                      <thead>
                        <tr>
                          <th>Serial No.</th>
                          <th>Room</th>
                          <th>Resident Unique ID</th>
                          <th>Resident Name	</th>
                          <th>Action</th>
                        </tr>
                      </thead>

                      <tbody>
                      
                        <tr>
                          <td>Tiger Nixon</td>
                          <td>System Architect</td>
                          <td>Edinburgh</td>
                          <td>61</td>
                          <td class="dropdown"> 
                           <button onClick={myFunction} class="dropbtn">
                            <i class="fa-solid fa-ellipsis-vertical"></i></button>

                            <div id="myDropdown" class="dropdown-content">
                              <a href="#home">Home</a>
                              <a href="#about">About</a>
                              <a href="#contact">Contact</a>
                            </div></td>
                        </tr>
                        <tr>
                          <td>Garrett Winters</td>
                          <td>Accountant</td>
                          <td>Tokyo</td>
                          <td>63</td>
                          <td>2011/07/25</td>
                          <td class="dropdown"> 
                           <button onClick={myFunction1} class="dropbtn">
                            <i class="fa-solid fa-ellipsis-vertical"></i></button>

                            <div id="myDropdown1" class="dropdown-content">
                              <a href="#home">Home</a>
                              <a href="#about">About</a>
                              <a href="#contact">Contact</a>
                            </div></td>
                        </tr>
                        <tr>
                          <td>Ashton Cox</td>
                          <td>Junior Technical Author</td>
                          <td>San Francisco</td>
                          <td>66</td>
                          <td>2009/01/12</td>
                          <td class="dropdown"> 
                           <button onClick={myFunction2} class="dropbtn">
                            <i class="fa-solid fa-ellipsis-vertical"></i></button>

                            <div id="myDropdown2" class="dropdown-content">
                              <a href="#home">Home</a>
                              <a href="#about">About</a>
                              <a href="#contact">Contact</a>
                            </div></td>
                        </tr>


                      </tbody>
                    </table></p>
                  </div>
                  <div class="tab-pane" id="profile" role="tabpanel">
                  <div class="d-flex justify-content-end p-2"><button  onClick={handleShow} class="bg-white btn btn-sm">Add</button></div>

                    <p> <table id="example1" class="display" cellspacing="0" width="100%">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Position</th>
                          <th>Office</th>
                          <th>Age</th>
                          <th>Start date</th>
                          <th>Actions</th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td>Tiger Nixon</td>
                          <td>System Architect</td>
                          <td>Edinburgh</td>
                          <td>61</td>
                          <td>2011/04/25</td>
                          <td class="dropdown"> 
                           <button onClick={myFunction3} class="dropbtn">
                            <i class="fa-solid fa-ellipsis-vertical"></i></button>

                            <div id="myDropdown3" class="dropdown-content">
                              <a href="#home">Home</a>
                              <a href="#about">About</a>
                              <a href="#contact">Contact</a>
                            </div></td>
                        </tr>
                        <tr>
                          <td>Garrett Winters</td>
                          <td>Accountant</td>
                          <td>Tokyo</td>
                          <td>63</td>
                          <td>2011/07/25</td>
                          <td class="dropdown"> 
                           <button onClick={myFunction4} class="dropbtn">
                            <i class="fa-solid fa-ellipsis-vertical"></i></button>

                            <div id="myDropdown4" class="dropdown-content">
                              <a href="#home">Home</a>
                              <a href="#about">About</a>
                              <a href="#contact">Contact</a>
                            </div></td>
                        </tr>
                        <tr>
                          <td>Ashton Cox</td>
                          <td>Junior Technical Author</td>
                          <td>San Francisco</td>
                          <td>66</td>
                          <td>2009/01/12</td>
                          <td class="dropdown"> 
                           <button onClick={myFunction5} class="dropbtn">
                            <i class="fa-solid fa-ellipsis-vertical"></i></button>

                            <div id="myDropdown5" class="dropdown-content">
                              <a href="#home">Home</a>
                              <a href="#about">About</a>
                              <a href="#contact">Contact</a>
                            </div></td>
                        </tr>


                      </tbody>
                    </table> </p>
                  </div>
                  <div class="tab-pane" id="messages" role="tabpanel">
                  <div class="d-flex justify-content-end p-2"><button onClick={handleShow1}  class="bg-white btn btn-sm">Add</button></div>

                    <p><table id="example2" class="display" cellspacing="0" width="100%">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Position</th>
                          <th>Office</th>
                          <th>Age</th>
                          <th>Start date</th>
                          <th>Actions</th>
                        </tr>
                      </thead>



                      <tbody>
                        <tr>
                          <td>Tiger Nixon</td>
                          <td>System Architect</td>
                          <td>Edinburgh</td>
                          <td>61</td>
                          <td>2011/04/25</td>
                          <td class="dropdown"> 
                           <button onClick={myFunction6} class="dropbtn">
                            <i class="fa-solid fa-ellipsis-vertical"></i></button>

                            <div id="myDropdown6" class="dropdown-content">
                              <a href="#home">Home</a>
                              <a href="#about">About</a>
                              <a href="#contact">Contact</a>
                            </div></td>
                        </tr>
                        <tr>
                          <td>Garrett Winters</td>
                          <td>Accountant</td>
                          <td>Tokyo</td>
                          <td>63</td>
                          <td>2011/07/25</td>
                          <td class="dropdown"> 
                           <button onClick={myFunction7} class="dropbtn">
                            <i class="fa-solid fa-ellipsis-vertical"></i></button>

                            <div id="myDropdown7" class="dropdown-content">
                              <a href="#home">Home</a>
                              <a href="#about">About</a>
                              <a href="#contact">Contact</a>
                            </div></td>
                        </tr>
                        <tr>
                          <td>Ashton Cox</td>
                          <td>Junior Technical Author</td>
                          <td>San Francisco</td>
                          <td>66</td>
                          <td>2009/01/12</td>
                          <td class="dropdown"> 
                           <button onClick={myFunction8} class="dropbtn">
                            <i class="fa-solid fa-ellipsis-vertical"></i></button>

                            <div id="myDropdown8" class="dropdown-content">
                              <a href="#home">Home</a>
                              <a href="#about">About</a>
                              <a href="#contact">Contact</a>
                            </div></td>
                        </tr>


                      </tbody>
                    </table></p>
                  </div>
                  <div class="tab-pane" id="settings" role="tabpanel">
                  <div class="d-flex justify-content-end p-2"><button onClick={handleShow2} class="bg-white btn btn-sm">Add</button></div>

                    <p>
                      <table id="example3" class="display" cellspacing="0" width="100%">
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Office</th>
                            <th>Age</th>
                            <th>Start date</th>
                            <th>Actions</th>
                          </tr>
                        </thead>



                        <tbody>
                          <tr>
                            <td>Tiger Nixon</td>
                            <td>System Architect</td>
                            <td>Edinburgh</td>
                            <td>61</td>
                            <td>2011/04/25</td>
                            <td class="dropdown"> 
                           <button onClick={myFunction9} class="dropbtn">
                            <i class="fa-solid fa-ellipsis-vertical"></i></button>

                            <div id="myDropdown9" class="dropdown-content">
                              <a href="#home">Home</a>
                              <a href="#about">About</a>
                              <a href="#contact">Contact</a>
                            </div></td>
                          </tr>
                          <tr>
                            <td>Garrett Winters</td>
                            <td>Accountant</td>
                            <td>Tokyo</td>
                            <td>63</td>
                            <td>2011/07/25</td>
                            <td class="dropdown"> 
                           <button onClick={myFunction90} class="dropbtn">
                            <i class="fa-solid fa-ellipsis-vertical"></i></button>

                            <div id="myDropdown90" class="dropdown-content">
                              <a href="#home">Home</a>
                              <a href="#about">About</a>
                              <a href="#contact">Contact</a>
                            </div></td>
                          </tr>
                          <tr>
                            <td>Ashton Cox</td>
                            <td>Junior Technical Author</td>
                            <td>San Francisco</td>
                            <td>66</td>
                            <td>2009/01/12</td>
                            <td class="dropdown"> 
                           <button onClick={myFunction91} class="dropbtn">
                            <i class="fa-solid fa-ellipsis-vertical"></i></button>

                            <div id="myDropdown91" class="dropdown-content">
                              <a href="#home">Home</a>
                              <a href="#about">About</a>
                              <a href="#contact">Contact</a>
                            </div></td>
                          </tr>


                        </tbody>
                      </table>                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
  
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
    <Modal.Title>Add Residents</Modal.Title>
  </Modal.Header>
  <Modal.Body>
Name: <input type="text" placeholder="First Name "  /><input type="text" placeholder="Middle Name "  /><input type="text" placeholder="Last Name "  />
<br />
Nick Name:<input type="text" placeholder="Nick Name"/><br />
Pronounced Name:<input type="text" placeholder="Pronounced Name:"/><br />
Gender:<input type="radio" name="gender" value="male"/> Male
<input type="radio" name="gender" value="female"/> Female

 <br />  <br />

  </Modal.Body>
  <Modal.Footer>
  <Button variant="primary" onClick={handleClose}>Save</Button>
    <Button variant="secondary" onClick={handleClose}>
    Cancel
    </Button>
    
  </Modal.Footer>
</Modal>









<Modal
class="modal-lg"
  show={show1}
  onHide={handleClose1}
  backdrop="static"
  keyboard={false}
  size="lg"
  aria-labelledby="contained-modal-title-vcenter"
  centered
 
>
  <Modal.Header closeButton>
    <Modal.Title>Add Users</Modal.Title>
  </Modal.Header>
  <Modal.Body>
User Type: <input type="text"/> <br></br>
Resident: <input type="text"/> <br></br>

Beacon Id: <input type="text"/> <br></br>
Email(user Id): <input type="text"/> <br></br>
Confirm Email: <input type="text"/> <br></br>
User Name: <input type="text"/> <br></br>
Relation : <input type="text"/> <br></br>
 
 
  </Modal.Body>
  <Modal.Footer>
  <Button variant="secondary" onClick={handleClose1}>
      Close
    </Button>
    <Button variant="primary" onClick={handleClose1}>Ok</Button>
  </Modal.Footer>
</Modal>







<Modal
class="modal-lg"
  show={show2}
  onHide={handleClose2}
  backdrop="static"
  keyboard={false}
  size="lg"
  aria-labelledby="contained-modal-title-vcenter"
  centered
 
>
  <Modal.Header closeButton>
    <Modal.Title>Add Visitors</Modal.Title>
  </Modal.Header>
  <Modal.Body>
 Visitors Name: <input type="text"/> <br></br>
 Relation: <input type="text"/> <br></br>
  Beacon Id: <input type="text"/> <br></br> 
 

  </Modal.Body>
  <Modal.Footer>
  <Button variant="secondary" onClick={handleClose2}>
      Close
    </Button>
    <Button variant="primary" onClick={handleClose2}>Ok</Button>
  </Modal.Footer>
</Modal>

    </>
  )
}

export default UserManagement
