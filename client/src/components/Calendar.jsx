import React, { Fragment, useMemo, useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import moment from 'moment'
import {
  Calendar,
  Views,
  DateLocalizer,
  momentLocalizer,
} from 'react-big-calendar'
// import * as dates from '../utils/dates'
import 'react-big-calendar/lib/css/react-big-calendar.css'


const mLocalizer = momentLocalizer(moment)

// const ColoredDateCellWrapper = ({ children }) =>
//   React.cloneElement(React.Children.only(children), {
//     style: {
//       backgroundColor: 'white',
//     },
//   })


export default function Basic({
  localizer = mLocalizer,
  showDemoLink = false,
  ...props
}) 

{

    const newDate = new Date('2023-07-15 hh:mm')
    const events = useSelector((store) => store.events.events);
    const parsedEvents = events.map(event => ({
      ...event,
      start: moment(event.start, "YYYY-MM-DD hh:mm"),
      end: moment(event.end, )
    }));

    console.log(parsedEvents);


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


const defaultDate = useMemo(() => moment(), [])

  return (
    <Fragment>
      <div>
        <Calendar
        defaultDate={defaultDate}
          localizer={localizer}
          events={parsedEvents}
          components={components}
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