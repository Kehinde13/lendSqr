import { useState } from "react";
import { userDataType } from "../Pages/Dashboard";
import "../Styles/Filter.css";

type Prop = {
  userData: userDataType[];
  setShowFilter: (filter: boolean) => void;
  setDataToDisplay: (dataToDisplay: userDataType | undefined) => void;
};

const Filter: React.FC<Prop> = ({
  userData,
  setShowFilter,
  setDataToDisplay,
}) => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [status, setStatus] = useState("");
  const Arr: (userDataType | undefined)[] = []

  const filterData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result: userDataType | undefined = userData?.find(
      (data) =>
        data.username === username ||
        data.email === email ||
        data.status === status ||
        data.organization === organization
    );
    Arr.push(result)
    console.log(Arr);
    
    setShowFilter(false);
  };
  return (
    <div className="filter">
      <form onSubmit={filterData}>
        <div>
          <label htmlFor="organization">Organization</label>
          <input name="organization" id="" placeholder="Org" onChange={(e) => setOrganization(e.target.value)} />  
        </div>

        <div>
          <label htmlFor="user">Username</label>
          <input type="text" name="user" placeholder="User" onChange={(e) => setUserName(e.target.value)}/>
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
        </div>

        <div>
          <label htmlFor="date">Date</label>
          <input type="date" name="date" id="" placeholder="Date" />
        </div>

        <div>
          <label htmlFor="number">Phone Number</label>
          <input type="text" name="number" id="" placeholder="Phone Number" />
        </div>

        <div>
          <label htmlFor="status">Status</label>
          <input name="status" id="" placeholder="Status" onChange={(e) => setStatus(e.target.value)} />
        </div>

        <div className="buttons">
          <button className="resetBtn">Reset</button>

          <button className="filterBtn">Filter</button>
        </div>
      </form>
    </div>
  );
};

export default Filter;
