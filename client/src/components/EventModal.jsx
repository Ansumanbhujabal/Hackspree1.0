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
        <OverlayHover option={"Join Event"} btnColor={"success"} tooltip={"Add this event to your upcoming events"} clickProp={handleClose}/>
          <OverlayHover option={"Remove Event"} btnColor={"danger"} tooltip={"Remove this event from your upcoming events"} clickProp={handleClose}/>
          <OverlayHover option={"Delete Event"} btnColor={"danger"} tooltip={"Delete this event"} clickProp={handleClose}/>
          <OverlayHover option={"Edit Event"} btnColor={"primary"} tooltip={"Edit this event's details"} clickProp={handleClose} />
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EventModal;