import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Badge } from 'react-bootstrap';

function EventCard(props) {
   const { event } = props;
   const { title, date, eventType, header, ageRanges, description, location } = event;
  return (
    <Card>
      
      <Card.Img variant="top" src={`./images/${header}.png`} id='event-card-header'/>
      <Card.Header id='category-tab'>{eventType}</Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        {ageRanges.map((ageRange, index) => (
            <Badge bg="primary" key={index}>{ageRange}</Badge>
                
            ))}
        <Card.Text>
        <span><strong>Date:</strong></span> {date}
          <br></br>
          <span><strong>Time:</strong></span> {date}
          <br></br>
          <span><strong>Event Description: </strong></span> {description}
          <br></br>
          <Button variant="secondary" size="sm">
          More Info
        </Button>
        <br></br>
          <span><strong>Location:</strong></span> {location}
         
          
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default EventCard;