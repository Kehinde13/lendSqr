import { Link } from "react-router-dom";
import logo from "../assets/Group (1).svg";
import search from '../assets/Search.png'
import alert from '../assets/alert.png'
import user from '../assets/avatar.png'
import dropdown from '../assets/Vector (2).png'
import burger from '../assets/Menu.png'
import '../Styles/Navbar.css'

const Navbar = () => {
  return (
    <div className="Navbar">
      <img src={logo} alt="logo" />

      <form action="">
        <input type="text" placeholder="Search for anything"/>
        <button>
            <img src={search} alt="" />
        </button>
      </form>

      <div>
        <Link to='dashboard' className="doc">Docs</Link>

        <img src={alert} alt="alert" className="alert"/>

        <img src={burger} alt="" className="burger"/>

        <div className="user">
            <img src={user} alt="user image" />
            <p>Adedeji</p>
            <img src={dropdown} alt="dropdown" className="dropdown"/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
