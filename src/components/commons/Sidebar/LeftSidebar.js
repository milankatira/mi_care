import React from "react";
import { Nav } from "react-bootstrap";
import Phone from "../../../assets/icons/phone.svg";
import Logo from "../../../assets/images/logo2.png";
import MiCare from "../../../assets/images/micare.png";
import NavLinks from "./NavLinks";


const LeftSidebar = ({ handleShow }) => {
    return (
        <nav className="d-xl-block sidebar collapse sticky-top pr-0 left-sidebar">
            <div className="left-sidebar-menu pl-3 py-3">
                <div className="position-sticky">
                    <Nav className="flex-column">
                        <img src={Logo} className="w-100 pr-3 mb-5" alt="logo" />
                        <NavLinks />
                    </Nav>
                </div>
                <div className="w-100 text-center pr-3">
                    <img
                        className="pointer"
                        src={Phone}
                        alt="phone"
                        width={48}
                        // style={{
                        //     marginLeft: -10,
                        // }}
                        onClick={handleShow}
                    />
                    <div
                    // style={{
                    //     marginLeft: -18,
                    // }}
                    >
                        <p className="text-muted font-weight-bold mt-2">Call Resident</p>
                    </div>
                </div>
                <div className="text-center pr-3">
                    <img
                        src={MiCare}
                        alt="MiCare"
                        className="w-75 mb-4"
                    />
                </div>
            </div>
        </nav>
    );
};

export default LeftSidebar;
