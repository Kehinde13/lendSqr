import "../Styles/Users.css";
import users from '../assets/userIcon.png'
import active from '../assets/icon (1).png'
import loan from '../assets/icon (2).png'
import savings from '../assets/icon (3).png'

const Users = () => {
  return (
    <div className="users">
      <h1>Users</h1>
      <div className="users-bar">
        <div>
          <img src={users} alt="" />
          <h4>USERS</h4>
          <h1>2,453</h1>
        </div>
        <div>
          <img src={active} alt="" />
          <h4>ACTIVE USERS</h4>
          <h1>2,453</h1>
        </div>
        <div>
          <img src={loan} alt="" />
          <h4>USERS WITH LOAN</h4>
          <h1>12,453</h1>
        </div>
        <div>
          <img src={savings} alt="" />
          <h4>USERS WITH SAVINGS</h4>
          <h1>102,453</h1>
        </div>
      </div>
    </div>
  );
};

export default Users;
