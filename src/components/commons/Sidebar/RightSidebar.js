import React from "react";
import { useHistory } from "react-router-dom";
import RightSidebarCalandar from "../../layouts/RightSidebar/RightSidebarCalandar";
import TodayHighlight from "../../layouts/RightSidebar/TodayHighlight";
import Visitors from "../../layouts/RightSidebar/Visitors";

const RightSidebar = () => {
    const history = useHistory();
    console.log(history.location.pathname);
    return (
        <nav
            className="d-xl-block bg-base sidebar collapse overflow-hidden sticky-top px-0 h-100"
         style={{
            height: "100vh",
         }}
        >
            <div className="right-sidebar">
                <div className='content'>
                    <RightSidebarCalandar />
                    {history.location.pathname === "/dashboard" ? (
                        <TodayHighlight />
                    ) : (
                            <div className="mt-4">
                                <Visitors />
                            </div>
                        )}
                </div>
            </div>
        </nav>
    );
};

export default RightSidebar;
