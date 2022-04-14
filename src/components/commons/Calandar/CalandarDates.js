import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedDate, setSelectedMonth, setSelectedYear } from "../../../redux/actions/calendarAction";

const CalandarDates = ({ defaultDate, today }) => {
    const RenderPrevMonthDate = () => {
        const limit = defaultDate.startOf("month").weekday();
        const finalData = [...Array(limit === 0 ? 7 : limit)];

        return finalData.map((each, index) => {
            if (index > 0) {
                return (
                    <button className="calander-dates-btn" key={index} disabled>
                        {" "}
                        -{" "}
                    </button>
                );
            }
            return undefined;
        });
    };

    // const [selectedDate, setSelectedDate] = React.useState(18);
    // const [selectedMonth, setSelectedMonth] = React.useState(0);
    // const [selectedYear, setSelectedYear] = React.useState(2021);

    const dispatch = useDispatch()
    const selectedDate = useSelector(state => state.calendarReducer.selectedDate)
    const selectedMonth = useSelector(state => state.calendarReducer.selectedMonth)
    const selectedYear = useSelector(state => state.calendarReducer.selectedYear)


    const handleOnDateClick = (date, month, year) => () => {
        if (date >= 18 && date <= 24 && month === 0 && year === 2021) {
            // setSelectedDate(date);
            // setSelectedMonth(month);
            // setSelectedYear(year);
            console.log('today', date)
            dispatch(setSelectedDate(date))
            dispatch(setSelectedMonth(month))
            dispatch(setSelectedYear(year))
        }
    };

    const RenderAllDates = () => {
        const totalDays = defaultDate.daysInMonth();
        const finalData = [...Array(totalDays)];

        return finalData.map((each, index) => {
            return (
                // <button className={
                //     `calander-dates-btn ${today.month() === defaultDate.month() && today.year() === defaultDate.year() && index + 1 === today.date() ? 'active' : ''}`
                // } key={index}> {index + 1} </button>
                <div
                    className={`calander-dates-btn`}
                    onClick={handleOnDateClick(index + 1, defaultDate.month(), defaultDate.year())}
                    key={index}>
                    <button
                        className={
                            `${selectedDate === index + 1 &&
                                selectedMonth === defaultDate.month() &&
                                selectedYear === defaultDate.year()
                                ? "active"
                                : ""
                            }` +
                            ` ${index + 1 >= 18 && index + 1 <= 24 && selectedMonth === 0 && selectedYear === 2021
                                ? ""
                                : "nt-active"
                            }
                                ${((index + 1) === 3 || (index + 1) === 9) && defaultDate.month() === today.month() && defaultDate.year() === today.year() ? 'activity-dot' : ''}                            
                            `
                        }>
                        {index + 1}
                    </button>
                </div>
            );
        });
    };
    const RenderNextMonthDates = () => {
        const daysToRender = 7 - defaultDate.endOf("month").weekday();
        const finalData = [...Array(daysToRender)];
        return finalData.map((each, index) => {
            // if (index > 0) {
            //     return
            // }
            return (
                <button className="calander-dates-btn" key={index} disabled>
                    -
                </button>
            );
        });
    };

    // console.log(defaultDate.daysInMonth())

    return (
        <div className="calander-dates">
            <RenderPrevMonthDate />
            <RenderAllDates />

            {/* Render next month dates only if current month date does not end on Sunday */}
            {defaultDate.endOf("month").weekday() !== 0 && <RenderNextMonthDates />}
        </div>
    );
};

export default CalandarDates;
