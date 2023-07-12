import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function NewEventForm() {
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Event Title</Form.Label>
        <Form.Control type="text" placeholder="Event Title" />
      </Form.Group>

      <Form.Group>
      <Form.Label>Event Type</Form.Label>
      <Form.Select aria-label="Default select example">
      <option>Select an Event Type</option>
      <option value="1">Donation Drive</option>
      <option value="2">Fundraiser</option>
      <option value="3">Heritage Celebration</option>
      <option value="4">Farmer's Market</option>
      <option value="5">Food Pantry/Hot Meals</option>
      <option value="6">Festival</option>
      <option value="7">Skill Share</option>
      <option value="8">Service Project</option>
      <option value="9">Action Event</option>
      <option value="10">Entertainment</option>
    </Form.Select>
    </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Event Description</Form.Label>
        <Form.Control type="text" as="textarea" rows={3} placeholder="Event Description" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Location</Form.Label>
        <Form.Control type="text" placeholder="Location" />
      </Form.Group>

    </Form>
    
  );
}

export default NewEventForm;