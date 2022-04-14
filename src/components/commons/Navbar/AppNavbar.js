import moment from "moment";
import React from "react";
import Bell from "../../../assets/icons/notification.svg";
import Notifications from "../../screens/Notifications";

const AppNavbar = () => {
    const [state, setState] = React.useState("Butterhill");
    const today = moment();
    const [currentTime, setCurrentTime] = React.useState(today.format("h:mm:ss A"));

    if(sessionStorage.getItem("user"))
    {
    var noticount=JSON.parse(sessionStorage.getItem("user"));
    var noti=noticount['notifcount'];
    
}


    
    React.useEffect(() => {
        const timeout = setInterval(() => {
            setCurrentTime(moment().format("h:mm:ss A"))
        }, 1000)
        return () => {
            clearInterval(timeout)
        }
    }, [])
 function addNotification(){
     window.location.assign("/notifications");
 }
    return (
        <div className="d-flex align-items-center justify-content-end w-100">
            {/* <p className='text-muted'>Butterhill</p> */}
            {/* <select
                style={{
                    backgroundColor: "transparent",
                    border: "none",
                    width: 120,
                    appearance: "none",
                    backgroundImage: `url(${Arrow})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "100%",
                    outline: "none",
                    marginLeft: -30,
                }}
                class="form-control">
                <option value="Butterhill">Butterhill</option>
                <option value="Pontypridd">Pontypridd</option>
                <option value="Plas Y Bryn">Plas Y Bryn</option>
                <option value="Saxilby Care Centre">Saxilby Care Centre</option>
                <option value="Homecrest Care Centre">Homecrest Care Centre</option>
            </select> */}
            {/* <Dropdown>
                <Dropdown.Toggle className='carehome-dropdown'>{state} <img width={20} src={ArrowDownCircle} alt='icon' /></Dropdown.Toggle>

                <Dropdown.Menu className='py-0'>
                    <Dropdown.Item className='py-3' onClick={() => setState("Butterhill")}>Butterhill</Dropdown.Item>
                    <Dropdown.Item className='py-3' onClick={() => setState("Pontypridd")}>Pontypridd</Dropdown.Item>
                    <Dropdown.Item className='py-3' onClick={() => setState("Plas Y Bryn")}>Plas Y Bryn</Dropdown.Item>
                    <Dropdown.Item className='py-3' onClick={() => setState("Saxilby Care Centre")}>Saxilby Care Centre</Dropdown.Item>
                    <Dropdown.Item className='py-3' onClick={() => setState("Homecrest Care Centre")}>
                        Homecrest Care Centre
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown> */}
            <div className="d-flex align-items-center ml-auto">
          {   /*   <p className="text-muted">{currentTime}</p> */}
                <p className="mb-0 text-muted mx-2 font-weight-light">  </p>
                {/* <p className="text-muted mr-2">{19th January 2021, Tuesday}</p> */}
                <p className="text-muted mr-2">{today.format("Do MMMM YYYY, dddd")}</p>
                <button className="btn btn-white mx-2 p-0 notification-btn" onClick={addNotification}>
                    <img src={Bell} alt="notification_icon" width={20} />
                    <span className="notification-total">{noti}</span>
                </button>
                
            </div>
        </div>
    );
};

export default AppNavbar;
