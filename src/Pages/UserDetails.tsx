import { Link, useOutletContext, useParams } from "react-router-dom"
import backArr from '../assets/Vector (7).png'
import '../Styles/userDetails.css'
import { userDataType } from "./Dashboard";
import { useEffect, useState } from "react";


const UserDetails = () => {
  const [userData]: [userDataType[]] = useOutletContext();
  const [userProfile, setUserProfile] = useState<userDataType>()
  const { userId } = useParams() ;

  useEffect(() => {
    const getUserData = userData.find((user: userDataType) => user.id === userId);
    setUserProfile(getUserData)
  }, [userData, userId])
  
  return (
    <div className="userDetails">
       <Link to='/dashboard'>
         <img src={backArr} alt="" />    Back to Users
       </Link>

       <div className="heading">
        <h1>User Details</h1>

        <div>
            <button className="blacklist">BLACKLIST USER</button>
            <button className="activate">ACTIVATE USER</button>
        </div>
       </div>

       <div>
         {userProfile?.email}
       </div>
    </div>
  )
}

export default UserDetails