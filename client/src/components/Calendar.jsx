import React, { Fragment, useMemo, useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { useSelector } from 'react-redux';
import events from "../data/events"
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
import EventModal from './EventModal';

const mLocalizer = momentLocalizer(moment)



const ColoredDateCellWrapper = ({ children }) =>
  React.cloneElement(React.Children.only(children), {
    style: {
      backgroundColor: 'white',
    },
  })


export default function Basic({
  
  localizer = mLocalizer,
  showDemoLink = false,
  ...props
}) 

{
    const [selectedEvent, setSelectedEvent] = useState(null);
  
    const newDate = new Date ('2023-07-15 4:30 pm')

  console.log (newDate)
  console.log(events)
  const components = {
    event: (props)=>{
      const eventType = props?.event?.eventType
      switch(eventType){
        case "Donation Drive":
          return <div style={{background: "#85DAFF", color: "#046995"}}>{props.title}</div>
          case "Fundraiser":
          return <div style={{background: "#70E067", color: "black" }}>{props.title}</div>
          case "Heritage Celebration":
          return <div style={{background: "#F58D3C", color: "white"}}>{props.title}</div>
          case "Farmer's Market":
          return <div style={{background: "#45913E", color: "white" }}>{props.title}</div>
          case "Food Pantry/Hot Meals":
          return <div style={{background: "#DF3E08", color: "white" }}>{props.title}</div>
          case "Festival":
          return <div style={{background: "#FFDB21", color: "#514124" }}>{props.title}</div>
          case "Skill Share":
          return <div style={{background: "#B068A9", color: "#4B1145" }}>{props.title}</div>
          case "Service Project":
          return <div style={{background: "#3F4AAD", color: "white" }}>{props.title}</div>
          case "Action Event":
          return <div style={{background: "#FFAF07", color: "#D56D00" }}>{props.title}</div>
          case "Entertainment":
          return <div style={{background:  "#8700C3", color: "white" }}>{props.title}</div>

          default:
             return <h1>oops</h1>;
          
          
      }
    }
  }

//   const handleSelectEvent = useCallback((event) => {
//     setSelectedEvent(event);
//   }, []);

//   const handleCloseModal = useCallback(() => {
//     setSelectedEvent(null);
//   }, []);

const defaultDate = useMemo(() => new Date('2023, 7, 1'), [])


  return (
    <Fragment>
      {/* {showDemoLink ? <DemoLink fileName="basic" /> : null} */}
      <div>
        <Calendar
        defaultDate={defaultDate}
          localizer={localizer}
          events={events}
          components={components}
          views={['month', 'week']}
        //   startAccessor="start"
        //   endAccessor="end"
          style={{ height: '100vh' }}
          popup
        //   onSelectEvent={handleSelectEvent}
        />
         {/* {selectedEvent && <EventModal event={selectedEvent} onClose={handleCloseModal} />} */}
      </div>
    </Fragment>
  )
}
Basic.propTypes = {
  localizer: PropTypes.instanceOf(DateLocalizer),
  showDemoLink: PropTypes.bool,
}