import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Badge } from 'react-bootstrap';

function EventCard(props) {
    { }
  return (
    <Card>
      <Card.Header id='category-tab'>Event Category</Card.Header>
      <Card.Img variant="top" src="./images/donation-drive,png" />
      <Card.Body>
        <Card.Title>Event Title</Card.Title>
        <Badge bg="primary">Age</Badge> <Badge bg="primary">Age</Badge> <Badge bg="primary">Age</Badge>
        <Card.Text>
          <span><strong>Event Description: </strong></span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit numquam doloribus ipsum eligendi cumque magnam magni iure odio a beatae cupiditate ipsa expedita blanditiis id, praesentium ipsam reiciendis molestiae temporibus?
          <br></br>
          <span><strong>Location: </strong></span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default EventCard;