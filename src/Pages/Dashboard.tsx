import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import "../Styles/Dashboard.css";
import FetchUsers from "../hooks/FetchUsers";

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
  const {userData} = FetchUsers()

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
