import { useSelector } from "react-redux";

export default function ProfilePhoto() {
  const profile = useSelector((store) => store.userdata.profilePhoto);
    return (
    
    <img src={profile} className="profile-photo" />
    );
  }
  