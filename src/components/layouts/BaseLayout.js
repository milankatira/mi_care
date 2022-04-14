import React from "react";
import { Col, Container, Dropdown, Row } from "react-bootstrap";
import ArrowDownCircle from "../../assets/icons/arrow_down_circle_primary.svg";
import CallResidentModal from "../commons/Modal/CallResidentModal";
import AppNavbar from "../commons/Navbar/AppNavbar";
import LeftSidebar from "../commons/Sidebar/LeftSidebar";
import RightSidebar from "../commons/Sidebar/RightSidebar";

const BaseLayout = ({ children, title = "" }) => {
    const [state, setState] = React.useState("Butterhill");
    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    var count_f = 0;
// drop down related started 

    /// get uer Detail started 
    validateUser();
    validateUserlogin();
    GetDashboard_data();

    
    async function validateUserlogin(url ='https://staging.miicube.info/user/login', data = {"criteria" :{
      "nu":sessionStorage.getItem("username"),
      "wp":sessionStorage.getItem("password"),
      "uk":sessionStorage.getItem("uk")
      }}) {
  
   
  
      const res = await fetch(url, {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
        //  mode: 'cors', // no-cors, *cors, same-origin
       //   cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'same-origin', // include, *same-origin, omit
          headers: {
            'Content-Type': 'application/json',
            'authFor':'W',
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          redirect: 'follow', // manual, *follow, error
          referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
          body: JSON.stringify(data) // body data type must match "Content-Type" header
        }).then(res => res.json()).then(json => {
          sessionStorage.setItem("user",JSON.stringify(json.Data));
     
     
          console.log("getting data ",JSON.parse(sessionStorage.getItem("user")));

  
        if(json.Data['pyte'] == "CH"){
       

        }
         
        }) 
    }
  






    /// user detail end 


    // get assosiated senior 

  var dropdown = null;

  async function validateUser(url = 'https://staging.miicube.info/user/associatedSeniors', data = '') {
    //   console.log(img['userID']);
    var usernam = sessionStorage.getItem("username");

    var qstrng = 'criteria={"du":"' + usernam + '"}';
    //console.log("hi from the api in baselayout")
    //console.log(qstrng);
    url = url + "?" + qstrng;
    console.log(url)
    const res = await fetch(url, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      //  mode: 'cors', // no-cors, *cors, same-origin
      //   cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        'authFor': 'W',
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url

    }).then(res => res.json()).then(json => {
      console.log("hi from the associated senior", json.Data);
      sessionStorage.setItem("assocSenior", JSON.stringify(json.Data));

         
    
  
      // dropdown=json.Data;
      //  console.log(json.Data);
      // sessionStorage.setItem("user",json.Data);
    })
  }

  var Data_Dashboard=null;
  /// get data dashboard started   https://staging.miicube.info/carehome/getCareHomeDashbordInfo?criteria={"cuk":"384176"}
  
  
 
  async function GetDashboard_data(url ='https://staging.miicube.info/carehome/getCareHomeDashbordInfo?', data = {}) {
           var urlmain= 'criteria={"cuk":"'+ sessionStorage.getItem("uk") + '"}'
           url = url + urlmain ;
        console.log(url);
  
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
            console.log("Data from the API - GETDASHBOARD DATA",json.Data);
            sessionStorage.setItem("dashboard",JSON.stringify(json.Data));

            Data_Dashboard=json.Data;
            console.log("data in variable reporting successfully",Data_Dashboard);
           
            if(!Data_Dashboard)
            {
                window.location.assign("/login");
            }
         
        }) 
    }

var assoc=JSON.parse(sessionStorage.getItem("assocSenior"));


/// drop down related ended 

    var img=JSON.parse(sessionStorage.getItem("user"));
    var finalimage="https://staging.miicube.info/";
    console.log("hi from appnavbar", finalimage)
    return (
        <div className="container-fluid px-0">
            <div className="d-flex custom-grid">
                <LeftSidebar handleShow={handleShow} />
                <main className="w-100">
                    <Container fluid className='px-0 mx-0 h-100'>
                        <Row className='h-100'>
                            <Col xl={9} className='mx-0 h-100 main-area'>
                                <header className="container-fluid">
                                    <Row>
                                        <Col sm={6} className="d-flex align-items-center px-0">
                                            <h6 className="mb-0">{title}</h6>
                                            <h3 className="mb-0 mx-3 text-muted font-weight-light">|</h3>
                                            <Dropdown className='ml-0 carehome-dropdown'>
                                                <Dropdown.Toggle className='ml-0 pl-0'>{state} <img width={20} src={ArrowDownCircle} alt='icon' /></Dropdown.Toggle>

                                                <Dropdown.Menu className='py-0 shadow border-0'>

                                                {assoc.map((user) => (
                                                        <Dropdown.Item className='py-3' onClick={() => setState(user.snn)}>{user.snn}</Dropdown.Item>
                                                                                                         
                                                        ))}
                                             
                                                </Dropdown.Menu>    
                                            </Dropdown>
                                        </Col>
                                        <Col sm={6} className="d-flex px-0">
                                            <AppNavbar />
                                            <img
                                                src={"https://staging.miicube.info/"+JSON.parse(sessionStorage.getItem("user")).srngmi}
                                                alt="profile"
                                                className="profile-img"
                                            />
                                        </Col>
                                    </Row>
                                </header>
                                {children}
                                <CallResidentModal show={show} handleClose={handleClose} />
                            </Col>
                            <Col xl={3} className='mx-0 h-100 right-sidebar-area'>
                                <RightSidebar />
                            </Col>
                        </Row>
                    </Container>
                </main>
            </div>
        </div>
    );
};

export default BaseLayout;
