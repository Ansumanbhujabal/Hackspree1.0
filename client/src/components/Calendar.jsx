import React, { Fragment, useMemo, useCallback, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment'
import {
  Calendar,
  Views,
  DateLocalizer,
  momentLocalizer,
} from 'react-big-calendar'
import { getEvents } from '../features/eventsGlobal/eventsGlobalSlice';
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
    const sampleDateString = "Tue Jul 18 2023 16:00:00 GMT-0400";
const sampleDate = moment(sampleDateString);
console.log(sampleDate.format());
console.log(sampleDate.format("YYYY-MM-DD hh:mm a"));


    const newDate = new Date('2023-07-15 hh:mm')
    const events = useSelector((store) => store.events.events);
    
    const dispatch = useDispatch();
    // const events = useSelector((state) => state.events.events);

//     const firstEvent=events[0];

//     console.log(firstEvent.start); // Output the start date/time of the first event
// console.log(firstEvent.end);

    console.log(events);
    
    useEffect(() => {
        dispatch(getEvents());
      }, [dispatch]);
    
    const parsedEvents = useMemo(() =>
    events.map(event => ({
      ...event,
      start: moment(event.start).format("YYYY-MM-DD hh:mm a"),
      end: moment(event.end).format("YYYY-MM-DD hh:mm a")
    })),
    [events]
    );


    console.log(parsedEvents);


    // console.log (new Date())
    // console.log(events)
    // const components = {
    //     event: (props)=>{
    //         // return <div>{props.title}</div>;
    //         const eventType = props?.event?.eventType;
    //         const eventTitle = props?.event?.title;
            
    //     switch(eventType){
    //         case "Donation Drive":
    //         return <div style={{background: "#85DAFF", color: "#046995"}}>{eventTitle}</div>;
    //         case "fundraiser":
    //         return <div style={{background: "#70E067", color: "black" }}>{eventTitle}</div>;
    //         case "Heritage Celebration":
    //         return <div style={{background: "#F58D3C", color: "white"}}>{eventTitle}</div>;
    //         case "Farmer's Market":
    //         return <div style={{background: "#45913E", color: "white" }}>{eventTitle}</div>;
    //         case "Food Pantry/Hot Meals":
    //         return <div style={{background: "#DF3E08", color: "white" }}>{eventTitle}</div>;
    //         case "festival":
    //         return <div style={{background: "#FFDB21", color: "#514124" }}>{eventTitle}</div>;
    //         case "skill-share":
    //         return <div style={{background: "#B068A9", color: "#4B1145" }}>{eventTitle}</div>;
    //         case "Service Project":
    //         return <div style={{background: "#3F4AAD", color: "white" }}>{eventTitle}</div>;
    //         case "Action Event":
    //         return <div style={{background: "#FFAF07", color: "#D56D00" }}>{eventTitle}</div>;
    //         case "Entertainment":
    //         return <div style={{background:  "#8700C3", color: "white" }}>{eventTitle}</div>;

    //         default:
    //             return (
    //                 <div style={{ background: "gray", color: "white" }}>
    //                   {eventTitle}
    //                 </div>
    //             );
            
    //     }
    //     }
    // }

    const components = {
        event: (props) => {
          const eventType = props?.event?.eventType;
          const eventTitle = props?.event?.title; // Access the event title
          let backgroundColor = "";
          let textColor = "";
          switch (eventType) {
            case "Donation Drive":
              backgroundColor = "#85DAFF";
              textColor = "#046995";
              break;
            case "Fundraiser":
              backgroundColor = "#70E067";
              textColor = "black";
              break;
            case "Heritage Celebration":
              backgroundColor = "#F58D3C";
              textColor = "white";
              break;
            case "Farmer's Market":
              backgroundColor = "#45913E";
              textColor = "white";
              break;
            case "Food Pantry/Hot Meals":
              backgroundColor = "#DF3E08";
              textColor = "white";
              break;
            case "Festival":
              backgroundColor = "#FFDB21";
              textColor = "#514124";
              break;
            case "Skill Share":
              backgroundColor = "#B068A9";
              textColor = "#4B1145";
              break;
            case "Service Project":
              backgroundColor = "#3F4AAD";
              textColor = "white";
              break;
            case "Action Event":
              backgroundColor = "#FFAF07";
              textColor = "#D56D00";
              break;
            case "Entertainment":
              backgroundColor = "#8700C3";
              textColor = "white";
              break;
            default:
              backgroundColor = "gray";
              textColor = "white";
          }
      
          const eventStyle = {
            backgroundColor: backgroundColor,
            color: textColor,
          };
      
          return <div style={eventStyle}>{eventTitle}</div>;
        }
      };
      


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
          startAccessor="start"
          endAccessor="end"
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