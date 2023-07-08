import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import axios from "axios";

function Login({ getUser }) {
  const navigate = useNavigate();

  const googleAuth = () => {
    window.open(`${process.env.REACT_APP_API_URL}/auth/google`, "_self");
  };

  const handleLogin = async () => {
    try {
      // Make API call to login endpoint
      await axios.get(`${process.env.REACT_APP_API_URL}/auth/login/success`, {
        withCredentials: true,
      });
      // Call getUser function to update user state
      getUser();
      // Navigate to home page
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Log in Form</h1>
      <div className={styles.form_container}>
        <div className={styles.left}>
          <img className={styles.img} src="./images/login.jpg" alt="login" />
        </div>
        <div className={styles.right}>
          <h2 className={styles.from_heading}>Members Log in</h2>
          <input type="text" className={styles.input} placeholder="Email" />
          <input type="text" className={styles.input} placeholder="Password" />
          <button className={styles.btn} onClick={handleLogin}>
            Log In
          </button>
          <p className={styles.text}>or</p>
          <button className={styles.google_btn} onClick={googleAuth}>
            <img src="./images/google.png" alt="google icon" />
            <span>Sing in with Google</span>
          </button>
          <p className={styles.text}>
            New Here ? <Link to="/signup">Sing Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
