import Card from 'react-bootstrap/Card';
import { Badge } from 'react-bootstrap';
import EventModal from './EventModal';
import EditModal from './EditModal';
import OverlayHover from './OverlayHover';
import DeleteModal from './DeleteModal';
import RemoveModal from './RemoveModal';
import JoinModal from './JoinModal';
import { useSelector } from 'react-redux';
import moment from 'moment';

function EventCard(props) {
   const { event } = props;
   const { title, start, end, eventType, header, ageRanges, description, location} = event;
   const joinedEvents = useSelector((store) => store.joinedEvents.events);
   const userEvents = useSelector((store) => store.userEvents.events);

   const startDate = moment(start).format("dddd, MMMM Do YYYY, h:mm:ss a");
   const endDate = moment(end).format("dddd, MMMM Do YYYY, h:mm:ss a");


 
  
   function containsEvent(event, list) {
    var i;
    for (i = 0; i < list.length; i++) {
        if (list[i].id === event.id) {
            return true;
        }
    }

    return false;
    }
  

  return (
    <>
    <Card id='event-cards'>
      
      <Card.Img variant="top" src={`./images/${header}.png`} id='event-card-header'/>
      <Card.Header style={{
        background: eventType === "Donation Drive" ? "#85DAFF" :
        eventType === "Fundraiser" ? "#70E067" :
        eventType === "Heritage Celebration" ? "#F58D3C" :
        eventType === "Farmer's Market" ? "#45913E" :
        eventType === "Food Pantry/Hot Meals" ? "#DF3E08" :
        eventType === "Festival" ? "#FFDB21" :
        eventType === "Skill Share" ? "#B068A9" :
        eventType === "Service Project" ? "#3F4AAD" :
        eventType === "Action Event" ? "#FFAF07" :
        "#8700C3",
        color: eventType === "Heritage Celebration" || eventType ===  "Farmer's Market" || eventType ===  "Service Project" || eventType ===  "Entertainment" || eventType ===  "Food Pantry/Hot Meals" ? "white" :
        eventType === "Skill Share" ? "#4B1145" :
        eventType === "Donation Drive" ? "#046995" :
        eventType === "Festival" ? "#514124" :
        eventType === "Action Event" ? "#D56D00" :
        
        "black"

      }}>{eventType}</Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <div className='age-badges'>
        {ageRanges.map((ageRange, index) => (
            
            <Badge bg={ageRange === 'For Kids' ? 'info'
            : ageRange === "Family-friendly" ? 'success'
            : ageRange === "Ages 13-18" ? 'warning'
            : 'primary'} style={{margin: "1em"}} key={index}>{ageRange}</Badge>
                
            ))}
            </div>
        <Card.Text>
          <span><strong>Start Date:</strong></span> {startDate}
          <br></br>
          <span><strong>End Date:</strong></span> {endDate}
          <br></br>
          <span><strong>Event Description: </strong></span> <div id='short-description'>{description}</div>
        <br></br>
          <span><strong>Location:</strong></span> {location}
          <br></br>
          <br></br>
        
        <div>
        <OverlayHover option={<EventModal event={event} />} btnColor={"secondary"} tooltip={"Expand event details"} />
        {containsEvent(event, joinedEvents) ? "" :
        <OverlayHover option={<JoinModal event={event} />} btnColor={"success"} tooltip={"Add this event to your upcoming events"} />
        }
        </div>
        <div>
        {containsEvent(event, userEvents) ? "" :
        containsEvent(event, joinedEvents) ? 
        <OverlayHover option={<RemoveModal event={event}/>} btnColor={"danger"} tooltip={"Remove this event from your upcoming events"} /> :
        ""
        }
        
        </div>
        
        {containsEvent(event, userEvents) ? 
        <div>
        <OverlayHover option={<DeleteModal event={event}/>} btnColor={"danger"} tooltip={"Delete this event"} />
        <OverlayHover option={<EditModal event={event} />} btnColor={"primary"} tooltip={"Edit this event's details"} />
        </div> :
        ""
      }
        
          
          
        </Card.Text>
      </Card.Body>
    </Card>
    </>
  );
}

export default EventCard;