import React from 'react'
import CardHeading from '../../commons/Heading/CardHeading'
import ScheduleList from '../../commons/List/ScheduleList'

const CalandarSchedule = ({
    schedule = []
}) => {
    return (
        <div>
            <CardHeading title='Schedule' />
            <ScheduleList list={schedule} />
        </div>
    )
}

export default CalandarSchedule
