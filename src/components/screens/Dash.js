import React from 'react';
import AppNavbar from '../commons/Navbar/AppNavbar';
import LeftSidebar from '../commons/Sidebar/LeftSidebar';
import RightSidebar from '../commons/Sidebar/RightSidebar';
import UserManagement from './UserManagement';
import { Col, Container, Dropdown, Row } from "react-bootstrap";
import ArrowDownCircle from "../../assets/icons/arrow_down_circle_primary.svg";
import CallResidentModal from "../commons/Modal/CallResidentModal";
function Dash(children, title = "") {
    const [state, setState] = React.useState("Butterhill");
    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
   
  
   <div className="container-fluid px-0">
            <div className="d-flex custom-grid">
                <LeftSidebar handleShow={handleShow} />
                <main className="w-100">
                    <Container fluid className='px-0 mx-0 h-100'>
                        <Row className='h-100'>
                            <Col xl={9} className='mx-0 h-100 main-area'>
                                <header className="container-fluid">
                                    <AppNavbar />

                                 
                                </header>
                                <UserManagement />  
                            </Col>
                            <Col xl={3} className='mx-0 h-100 right-sidebar-area'>
                                <RightSidebar />
                            </Col>
                        </Row>
                    </Container>
                </main>
            </div>
        </div>

        </>

    )
}
export default Dash