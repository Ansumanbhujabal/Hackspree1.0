import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { deleteJoinedEvent } from '../features/joinedEvents/joinedEventsSlice';

function RemoveModal(props) {
const { event } = props;
const { title, id } = event;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteJoinedEvent(id));
    handleClose();

  }

  return (
    <>
      <div onClick={handleShow}>
          Remove Event
        </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><h6 style={{color: "#e60000"}}>Remove an Event</h6>{title} from Upcoming Events</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to remove this event from your upcoming events?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Remove
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default RemoveModal;