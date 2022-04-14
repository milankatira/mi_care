import React from "react";
import { useHistory } from "react-router-dom";
import Calandar from "../../commons/Calandar/Calandar";
import CalandarSchedule from "./CalandarSchedule";

const RightSidebarCalandar = () => {
    const history = useHistory();
    console.log(history.location.pathname);
    const [scheduleList, setScheduleList] = React.useState([
        {
            title: "Visitor",
            subTitle: "nurse",
            time: "9:00 am - 11:00 am",
            day: "Th",
            date: 9,
        },
        {
            title: "Visitor",
            subTitle: "nurse",
            time: "11:00 am - 12:00 pm",
            day: "Th",
            date: 16,
        },
        {
            title: "Visitor",
            subTitle: "Dr. Smith",
            time: "12:00 pm - 12:30 pm",
            day: "Tu",
            date: 28,
        },
    ]);

    return (
        <>
            <Calandar />
            {history.location.pathname === "/dashboard" ? (
                <></>
            ) : (
                    <div className="mt-4">
                        <CalandarSchedule schedule={scheduleList} />
                    </div>
                )}
        </>
    );
};

export default RightSidebarCalandar;
