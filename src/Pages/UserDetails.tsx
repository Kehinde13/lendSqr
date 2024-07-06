import { Link, useOutletContext, useParams } from "react-router-dom";
import backArr from "../assets/Vector (7).png";
import "../Styles/userDetails.css";
import { userDataType } from "./Dashboard";
import { useEffect, useState } from "react";
import starFull from "../assets/np_star_1208084_000000 1.png";
import starEmpty from "../assets/np_star_1171151_000000 1.png";
import placeHolderImg from "../assets/np_user_948637_000000 1.png";
import UserInfo from "../Components/UserInfo";

const UserDetails = () => {
  const [userData]: [userDataType[]] = useOutletContext();
  const [userProfile, setUserProfile] = useState<userDataType | null>();
  const { userId } = useParams();

  useEffect(() => {
    const storedUserProfileString = localStorage.getItem(`userProfile-${userId}`);
    
    if (storedUserProfileString) {
      try {
        const storedUserProfile: userDataType = JSON.parse(storedUserProfileString);
        setUserProfile(storedUserProfile);
      } catch (error) {
        console.error("Error parsing stored user profile:", error);
        setUserProfile(null); // Handle parsing error gracefully
      }
    } else {
      const getUserData = userData?.find(
        (user: userDataType) => user._id === userId
      );
        setUserProfile(getUserData);
        localStorage.setItem(`userProfile-${userId}`, JSON.stringify(getUserData));
    }
  }, [userData, userId]);

  return (
    <div className="userDetails">
      <Link to="/dashboard">
        <img src={backArr} alt="" /> Back to Users
      </Link>

      <div className="heading">
        <h3>User Details</h3>

        <div>
          <button className="blacklist">BLACKLIST USER</button>
          <button className="activate">ACTIVATE USER</button>
        </div>
      </div>

      <div className="info">
        <div className="basicInfo">
          <div className="profile">
            <div className="profilePicture">
              <img src={placeHolderImg} alt="" />
            </div>

            <div>
              <h3>{userProfile?.username}</h3>
              {userProfile?._id}
            </div>
          </div>

          <div className="userTier">
            <p>User's Tier</p>
            <div className="stars">
              <img src={starFull} alt="" />
              <img src={starEmpty} alt="" />
              <img src={starEmpty} alt="" />
            </div>
          </div>

          <div className="bank">
            <h3>{userProfile?.balance}</h3>
            <p>Providus Bank</p>
          </div>
        </div>
        <ul>
          <li>General Details</li>
          <li>Documents</li>
          <li>Bank Details</li>
          <li>Loans</li>
          <li>Savings</li>
          <li>App and System</li>
        </ul>
      </div>

      <UserInfo userProfile={userProfile} />
    </div>
  );
};

export default UserDetails;
