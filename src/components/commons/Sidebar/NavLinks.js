import React ,{ useState}from 'react';
import { Nav } from 'react-bootstrap';
import { useSelector } from "react-redux";
import { Link, useHistory } from 'react-router-dom';
import Account from "../../../assets/icons/account.svg";
import Chart from "../../../assets/icons/chart.svg";
import Chat from "../../../assets/icons/chat.svg";
import Dashboard from "../../../assets/icons/dashboard.svg";
import Group from "../../../assets/icons/group.svg";
import Settings from "../../../assets/icons/settings.svg";
import { Modal } from 'react-bootstrap';
import { useDispatch } from "react-redux";
import { LoginUser } from "../../../redux/actions/authAction";
import {Button} from 'react-bootstrap';
import session from 'redux-persist/lib/storage/session';

const NavLinks = () => {
    const [lgShow, setLgShow] = useState(false);
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const history = useHistory();
    console.log(history.location.pathname)
    return (
        <>
            <Nav.Link as={Link} className={`mt-2 ${history.location.pathname === '/dashboard' ? 'active' : ''}`} to='/dashboard'>
                <img src={Dashboard} alt='icon' className='mr-2' width={20} />
                Dashboard
            </Nav.Link>
            <Nav.Link as={Link} className='mt-2' to='/dailyobservations' >
                <img src={Group} alt='icon' className='mr-2' width={20} />
                Daily Observations
            </Nav.Link>
            <Nav.Link as={Link} className={`mt-2 ${history.location.pathname === '/residentanalysis' ? 'active' : ''}`} to='/residentanalysis'>
                <img src={Chart} alt='icon' className='mr-2' width={20} />
                Resident Analytics
            </Nav.Link>
            <Nav.Link as={Link} className='mt-2' to='/chat' >
                <img src={Chat} alt='icon' className='mr-2' width={20} />
                Chat
            </Nav.Link>
            <Nav.Link as={Link} className='mt-2' to='/manageprofile'>
                <img src={Account} alt='icon' className='mr-2' width={20} />
                User Profile
            </Nav.Link>
            <Nav.Link as={Link} className='mt-2' to='/settings' >
                <img src={Settings} alt='icon' className='mr-2' width={20} />
                Settings
            </Nav.Link>
            <Nav.Link as={Link} className='mt-2' to='/usermanagement' >
                <img src={Settings} alt='icon' className='mr-2' width={20} />
             User Management 
            </Nav.Link>
            <Nav.Link as={Link} className='mt-2' onClick={() => setLgShow(true)} to='/dashboard' >
                <img src={Settings} alt='icon' className='mr-2' width={20} />
                Logout
            </Nav.Link>



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
          <Button className="btn btn-danger text-white" onClick={() => setLgShow(false)}>
           Cancel
          </Button>
          <Button variant="primary" onClick={() => {
         sessionStorage.setItem("login","logout")
                  sessionStorage.clear();
           dispatch(LoginUser(null));
     
        window.location.assign('/login');
        }}>
           Confirm
          </Button>
        </Modal.Footer>
      </Modal>



        </>
    )
}

export default NavLinks
