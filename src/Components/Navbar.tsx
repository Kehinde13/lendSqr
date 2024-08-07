import { Link } from "react-router-dom";
import logo from "../assets/Group (1).svg";
import search from "../assets/Search.png";
import alertIcon from "../assets/alert.png";
import userPic from "../assets/avatar.png";
import dropdown from "../assets/Vector (2).png";
import burger from "../assets/Menu.png";
import "../Styles/Navbar.css";
import MobileMenu from "./MobileMenu";
import { useState } from "react";
import { userDataType } from "../Pages/Dashboard";
import UserResult from "./UserResult";

type Prop = {
  userData: userDataType[] | undefined;
};

const Navbar: React.FC<Prop> = ({ userData }) => {
  const [menu, setMenu] = useState(false);
  const [user, setUser] = useState("");
  const [userResult, setUserResult] = useState<userDataType | undefined>();

  const searchData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result: userDataType | undefined = userData?.find(
      (data) => data.username === user
    );
    if(result === undefined){
      alert("User Not Found")
    }
    setUserResult(result);
  };

  const toggleMenu = () => {
    setMenu(!menu);
  };
  return (
    <div className="Navbar">
      <img src={logo} alt="logo" />

      <form onSubmit={searchData}>
        <input
          type="text"
          placeholder="Search for user"
          onChange={(e) => setUser(e.target.value)}
        />
        <button>
          <img src={search} alt="" />
        </button>
      </form>

      {userResult && (
        <UserResult userResult={userResult} setUserResult={setUserResult} setMenu={setMenu} />
      )}

      <div>
        <Link to="/dashboard" className="doc">
          Docs
        </Link>

        <img src={alertIcon} alt="alert" className="alert" />

        <img src={burger} alt="" className="burger" onClick={toggleMenu} />

        <div className="user">
          <img src={userPic} alt="user image" />
          <p>Adedeji</p>
          <img src={dropdown} alt="dropdown" className="dropdown" />
        </div>
      </div>

      <MobileMenu menu={menu} toggleMenu={toggleMenu} userData={userData}  />
    </div>
  );
};

export default Navbar;
