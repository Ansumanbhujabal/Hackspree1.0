import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import EventDetails from './EventDetails';
import OverlayHover from './OverlayHover';

function EventModal(props) {

  const {event} = props;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="secondary" size="sm"onClick={handleShow}>
          More Info
        </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Event Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EventDetails event={event}/>

        </Modal.Body>
        <Modal.Footer>
        <OverlayHover option={"Join Event"} tooltip={"Add this event to your upcoming events"} />
          <OverlayHover option={"Remove Event"} tooltip={"Remove this event from your upcoming events"} />
          <OverlayHover option={"Delete Event"} tooltip={"Delete this event"} />
          <OverlayHover option={"Edit Event"} tooltip={"Edit this event's details"} onClick={handleClose} />
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EventModal;