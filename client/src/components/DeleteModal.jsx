import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { deleteUserEvent } from '../features/userEvents/userEventsSlice';
import { deleteJoinedEvent } from '../features/joinedEvents/joinedEventsSlice';
import { deleteEvent } from '../features/eventsGlobal/eventsGlobalSlice';

function DeleteModal(props) {
const { event } = props;
const { title, id } = event;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteEvent(id));
    dispatch(deleteJoinedEvent(id));
    dispatch(deleteUserEvent(id));
    handleClose();

  }



  return (
    <>
      <div onClick={handleShow}>
          Delete Event
        </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><h6 style={{color: "#e60000"}}>Delete an Event</h6>
          {title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this event? This action is permanent.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteModal;