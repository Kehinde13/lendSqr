import React, { useEffect, useRef } from "react";
import { userDataType } from "../Pages/Dashboard";
import "../Styles/UserResult.css";
import { Link } from "react-router-dom";

type Prop = {
  userResult: userDataType | undefined;
  setUserResult: (userResult: userDataType | undefined) => void
  setMenu: (menu: boolean) => void;
};

const UserResult: React.FC<Prop> = ({ userResult, setUserResult, setMenu }) => {
 const resultRef = useRef<HTMLDivElement | null>(null)

  const closeModal = () => {
    setUserResult(undefined)
    setMenu(false)
  }

  useEffect(() => {
    const clickOutside = (e: MouseEvent) => {
      if(resultRef.current && !resultRef.current.contains(e.target as Node)){
        setUserResult(undefined)
      }
    };

    document.addEventListener("mousedown", clickOutside)
    return () => {
      document.removeEventListener("mousedown", clickOutside)
    }
  })

  return (
    <div className="userResult" ref={resultRef}>
      <Link to={`userdetails/${userResult?._id}`} onClick={closeModal}>
          <p>{userResult?.organization}</p>
          <p>{userResult?.username}</p>
        <p
          className={`${
            userResult?.status === "Inactive"
              ? "inactive"
              : userResult?.status === "Active"
              ? "active"
              : userResult?.status === "Blacklisted"
              ? "blacklisted"
              : "pending"
          }`}
        >
          {userResult?.status}
        </p>
      </Link>
    </div>
  );
};

export default UserResult;
