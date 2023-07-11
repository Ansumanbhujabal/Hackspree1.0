import React, { Fragment, useMemo } from 'react'
import PropTypes from 'prop-types'
import { Calendar, luxonLocalizer } from 'react-big-calendar';
import { DateTime, Settings } from 'luxon';

Settings.defaultZone = 'America/Chicago'; //sets default time to CDT; optional
const localizer = luxonLocalizer(DateTime, { firstDayOfWeek: 7 }) //defaults week start to Sunday instead of Monday

// const dt = 

const MyCalendar = (props) => (
    <div className="myCustomHeight">
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
      />
    </div>
  )

export default function Popup({ localizer }) {
const defaultDate = useMemo(() => new Date(2015, 3, 1), [])
return (
    <Fragment>
    {/* <DemoLink fileName="popup">
        <strong>
        Click the "+&#123;x&#125; more" link on any calendar day that cannot
        fit all the days events to see an inline popup of all the events.
        </strong>
    </DemoLink> */}
    <div className="height600">
        <Calendar
        defaultDate={defaultDate}
        events={events}
        localizer={localizer}
        popup
        />
    </div>
    </Fragment>
)
}
Popup.propTypes = {
localizer: PropTypes.instanceOf(DateLocalizer),
}