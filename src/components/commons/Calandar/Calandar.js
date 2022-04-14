import moment from "moment";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDefaultDateAction } from "../../../redux/actions/calendarAction";
import CalandarDates from "./CalandarDates";
import CalandarHeader from "./CalandarHeader";
import CalendarWeekDayNames from "./CalendarWeekDayNames";

const Calandar = () => {
    const today = useSelector(state => state.calendarReducer.today)
    const defaultDate = useSelector(state => state.calendarReducer.defaultDate)
    const dispatch = useDispatch();

    console.log('today', today)

    const handlePrevArrowClick = () => {
        // setDefaultDate(moment(defaultDate.subtract(1, "month")));
        dispatch(setDefaultDateAction(moment(defaultDate.subtract(1, "month"))))

    };
    const handleNextArrowClick = () => {
        // setDefaultDate(moment(defaultDate.add(1, "month")));
        dispatch(setDefaultDateAction(moment(defaultDate.add(1, "month"))))
    };

    console.log(defaultDate.endOf("month").weekday());

    // console.log(today.month() === defaultDate.month() && today.year() === defaultDate.year());

    return (
        <div className="calandar">
            <CalandarHeader
                month={defaultDate.month()}
                year={defaultDate.year()}
                handlePrevArrow={handlePrevArrowClick}
                handleNextArrow={handleNextArrowClick}
            />
            <hr className="m-0" />
            <CalendarWeekDayNames />
            <hr className="m-0" />
            <CalandarDates today={today} defaultDate={defaultDate} />
        </div>
    );
};

export default Calandar;
