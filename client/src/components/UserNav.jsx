import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ProfilePhoto from './ProfilePhoto';
import UpdateProfile from './UpdateProfile';
import NewEventModal from './NewEventModal';
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector } from 'react-redux';

function UserNav(userDetails) {
  const user = userDetails.user;
  const username = useSelector((store) => store.userdata.username);
  const logout = () => {
    window.open(`${process.env.REACT_APP_API_URL}/auth/logout`, "_self");
  };
  return (
    <Card style={{ width: '100', height: '90vh' }}>
      <Card.Body>

        <div className='container' id='user-header'>
          <div className='row'>
            <div className='col'>

            </div>
            <div className='col'>
            <ProfilePhoto />
            </div>
          
          <div className='col'>
              
            </div>

          </div>
        
        </div>
        <Card.Text style={{'text-align': 'center'}}>{username}</Card.Text>
        <ListGroup className="list-group-flush">
        <ListGroup.Item><button className="logout-button"><UpdateProfile /></button></ListGroup.Item>
        <ListGroup.Item><button className="logout-button"><NewEventModal /></button></ListGroup.Item>
        <LinkContainer to="/your-events"><ListGroup.Item><button className="logout-button">Your Events</button></ListGroup.Item></LinkContainer>
        <ListGroup.Item><button className="logout-button" onClick={logout}>
            Log Out
          </button></ListGroup.Item>
      </ListGroup>
      </Card.Body>
      
    </Card>
  );
}

export default UserNav;

{/* <div className={styles.container}>
      <h1 className={styles.heading}>Home</h1>
      <div className={styles.form_container}>
        <div className={styles.left}>
          <img className={styles.img} src="./images/profile.jpg" alt="login" />
        </div>
        <div className={styles.right}>
          <h2 className={styles.from_heading}>Profile</h2>
          <img
            src={user.picture}
            alt="profile"
            className={styles.profile_img}
          />
          <input
            type="text"
            defaultValue={user.name}
            className={styles.input}
            placeholder="UserName"
          />
          <input
            type="text"
            defaultValue={user.email}
            className={styles.input}
            placeholder="Email"
          />
          <button className={styles.btn} onClick={logout}>
            Log Out
          </button>
        </div>
      </div>
    </div> */}