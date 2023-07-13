import React, { Fragment, useMemo } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import {
  Calendar,
  Views,
  DateLocalizer,
  momentLocalizer,
} from 'react-big-calendar'
// import DemoLink from '../../DemoLink.component'
// import events from '../../resources/events'
import * as dates from '../utils/dates'
import 'react-big-calendar/lib/css/react-big-calendar.css'

const mLocalizer = momentLocalizer(moment)



const ColoredDateCellWrapper = ({ children }) =>
  React.cloneElement(React.Children.only(children), {
    style: {
      backgroundColor: 'white',
    },
  })

  const events = [
    {
        title: "Non-Perishable Food Drive",
        date: "Sep 25, 2023",
        start: new Date('2023-07-15T13:45:00-05:00'),
        end: new Date('2023-07-16T14:00:00-05:00'),
        eventType: "Donation Drive",
        header: "donation-drive",
        ageRanges: ["Family-friendly", "Ages 13-18", "Adults"],
        admission: {type: "Free", cost: "", proceeds: ""},
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        location: "4968 Oakmound Road Chicago, IL 60644"

    },
    {
        title: "Colorful Futures Project Chicago Fundraiser 2023",
        date: "Sep 25, 2023",
        start: new Date('2023-07-15 4:30 pm'),
        end: new Date('2023-07-15 12:30 am'),
        eventType: "Fundraiser",
        header: "fundraiser",
        ageRanges: ["Family-friendly", "Ages 13-18", "Adults"],
        admission: {type: "Free", cost: "", proceeds: ""},
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        location: "4968 Oakmound Road Chicago, IL 60644"

    },
    {
        title: "Taíno Heritage Festival",
        date: "Sep 25, 2023",
        start: new Date('2023-07-01 10:00 am'),
        end: new Date('2023-07-05 5:00 pm'),
        eventType: "Heritage Celebration",
        header: "heritage-celebration",
        ageRanges: ["Family-friendly", "Ages 13-18", "Adults"],
        admission: {type: "Suggested Donation", cost: "5-15", proceeds: "Benefit the Taíno Heritage Society"},
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        location: "4968 Oakmound Road Chicago, IL 60644"

    },
    
]


export default function Basic({
  localizer = mLocalizer,
  showDemoLink = false,
  ...props
}) {
//   const { components, defaultDate, max, views } = useMemo(
//     () => ({
//       components: {
//         timeSlotWrapper: ColoredDateCellWrapper,
//       },
//       defaultDate: new Date(2023, 7, 1),
//       max: dates.add(dates.endOf(new Date(), 'day'), +1, 'hours'),
//       views: Object.keys(Views).map((k) => Views[k]),
//     }),
//     []
//   )

const defaultDate = useMemo(() => new Date('2023, 7, 1'), [])

  return (
    <Fragment>
      {/* {showDemoLink ? <DemoLink fileName="basic" /> : null} */}
      <div className="height600">
        <Calendar
        defaultDate={defaultDate}
          localizer={localizer}
          events={events}
          views={['month', 'week']}
        //   startAccessor="start"
        //   endAccessor="end"
          style={{ height: '100vh' }}
          popup
        />
      </div>
    </Fragment>
  )
}
Basic.propTypes = {
  localizer: PropTypes.instanceOf(DateLocalizer),
  showDemoLink: PropTypes.bool,
}