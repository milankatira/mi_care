import React from "react";
import Clock from "../../../assets/icons/clock.svg";
import CardHeading from "../../commons/Heading/CardHeading";

function TodayHighlight() {
    const data = [
        {
            title: "COVID-19",
            description: "No visitors allowed in the care home",
            time: "11:00am",
        },
        {
            title: "CQC Visits",
            description: "CQC Visits taking place today",
            time: "9:00am",
        },
        {
            title: "Repairs",
            description: "Flood repairs in progress zone 2",
            time: "9:00am",
        },
    ];
    return (
        <div>
            <div
                style={{
                    marginTop: 20,
                }}
            />
            <CardHeading title="Today's Highlight" />
            <div
                style={{
                    marginTop: 20,
                }}
            />
            {data.map(item => {
                return (
                    <div>
                        <p className='text-primary font-weight-bold'>
                            {item.title}
                        </p>
                        <p className="text-muted">{item.description}</p>
                        <p className="text-muted">
                            <img src={Clock} alt="Clock" width={16} /> {item.time}
                        </p>
                        <hr />
                    </div>
                );
            })}
        </div>
    );
}

export default TodayHighlight;
