import "../Styles/MobileMenu.css";
import close from "../assets/Close.png";
import avatar from "../assets/avatar.png";
import dropdown from "../assets/Vector (2).png";
import search from "../assets/Search.png";
import briefcase from "../assets/briefcase 1.png";
import down from "../assets/Vector (3).png";
import home from "../assets/home 1.png";
import user from "../assets/user-friends 1.png";
import users from "../assets/users 1.png";
import sack from "../assets/sack 1.png";
import handShake from "../assets/handshake-regular 1.png";
import piggy from "../assets/piggy-bank 1.png";
import loan from "../assets/Group 104.png";
import userCheck from "../assets/user-check 1.png";
import userTimes from "../assets/user-times 1.png";
import bank from "../assets/np_bank_148501_000000 1.png";
import savings from "../assets/coins-solid 1.png";
import phone from "../assets/icon.png";
import spinner from "../assets/galaxy 1.png";
import userCog from "../assets/user-cog 1.png";
import settlement from "../assets/scroll 1.png";
import report from "../assets/sliders-h 1.png";
import sliders from "../assets/sliders-h 1.png";
import badge from "../assets/badge-percent 1.png";
import clipboard from "../assets/clipboard-list 1 (1).png";

type Prop = {
  menu: boolean;
  toggleMenu: () => void;
};

const MobileMenu = ({ menu, toggleMenu }: Prop) => {
  return (
    <div className={`${menu ? "mobileMenu" : "hideMenu"}`}>
      <img src={close} alt="" className="close" onClick={toggleMenu} />
      <div className="menu">
        <div className="user">
          <img src={avatar} alt="user image" />
          <p>Adedeji</p>
          <img src={dropdown} alt="dropdown" className="dropdown" />
        </div>

        <form action="">
          <input type="text" placeholder="Search for anything" />
          <button>
            <img src={search} alt="" />
          </button>
        </form>

        <div className="actions">
          <div>
            <img src={briefcase} alt="" />
            <h3>Switch Organization</h3>
            <img src={down} alt="" />
          </div>

          <h3 className="dash">
            <img src={home} alt="" />
            Dashboard
          </h3>

          <ul>
            <h4>CUSTOMERS</h4>
            <li>
              <img src={user} alt="" />
              Users
            </li>
            <li>
              <img src={users} alt="" />
              Guarantors
            </li>
            <li>
              <img src={sack} alt="" />
              Loans
            </li>
            <li>
              <img src={handShake} alt="" />
              Decision Models
            </li>
            <li>
              <img src={piggy} alt="" />
              Savings
            </li>
            <li>
              <img src={loan} alt="" />
              Loan Requests
            </li>
            <li>
              <img src={userCheck} alt="" />
              White List
            </li>
            <li>
              <img src={userTimes} alt="" />
              Karma
            </li>
          </ul>

          <ul>
            <h4>BUSINESS</h4>
            <li>
              <img src={briefcase} alt="" />
              Organization
            </li>
            <li>
              <img src={loan} alt="" />
              Loan Products
            </li>
            <li>
              <img src={bank} alt="" />
              Savings Products
            </li>
            <li>
              <img src={savings} alt="" />
              Fees and Charges
            </li>
            <li>
              <img src={phone} alt="" />
              Transcations
            </li>
            <li>
              <img src={spinner} alt="" />
              Services
            </li>
            <li>
              <img src={userCog} alt="" />
              Service Account
            </li>
            <li>
              <img src={settlement} alt="" />
              Settlements
            </li>
            <li>
              <img src={report} alt="" />
              Reports
            </li>
          </ul>

          <ul>
            <h4>SETTINGS</h4>
            <li>
              <img src={sliders} alt="" />
              Preferences
            </li>
            <li>
              <img src={badge} alt="" />
              Fees and Pricing
            </li>
            <li>
              <img src={clipboard} alt="" />
              Audit logs
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
