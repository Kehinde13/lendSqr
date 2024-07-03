import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import "../Styles/Dashboard.css";
import { useEffect, useState } from "react";

export interface userDataType {
  _id: string;
  name: string;
  index: number;
  guid: string;
  isActive: boolean;
  balance: string;
  picture: string;
  age: number;
  username: string;
  gender: string;
  organization: string;
  email: string;
  phone: string;
  marital: string;
  residence: string;
  children: string;
  status: string;
  address: string;
  joined: string;
  guarantor: [
    {
      id: number;
      name: string;
      email: string;
      phone: string;
      relationship: string;
    },
    {
      id: number;
      name: string;
      email: string;
      phone: string;
      relationship: string;
    }
  ];
}

const Dashboard = () => {
  const [userData, setUserData] = useState<userDataType[]>();

  useEffect(() => {
    fetch("https://run.mocky.io/v3/9957350a-51c0-4ad3-8e64-2f7baca02f64")
      .then((response) => response.json())
      .then((res) => {
        setUserData(res);
      });  
  },);

  return (
    <div>
      <Navbar userData={userData} />
      <div className="main">
        <Sidebar />
        <Outlet context={[userData]} />
      </div>
    </div>
  );
};

export default Dashboard;
