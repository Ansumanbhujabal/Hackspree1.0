import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Badge } from 'react-bootstrap';
import EventModal from './EventModal';

function EventCard(props) {
   const { event } = props;
   const { title, date, eventType, header, ageRanges, description, location } = event;
  return (
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
        <span><strong>Date:</strong></span> {date}
          <br></br>
          <span><strong>Time:</strong></span> {date}
          <br></br>
          <span><strong>Event Description: </strong></span> <div id='short-description'>{description}</div>
        <br></br>
          <span><strong>Location:</strong></span> {location}
          <br></br>
        <EventModal event={event} />
         
          
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default EventCard;