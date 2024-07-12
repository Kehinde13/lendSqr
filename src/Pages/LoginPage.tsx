import { Link } from "react-router-dom";
import logo from "../assets/Group (1).svg";
import signInImg from "../assets/SignIn.svg";
import "../Styles/LoginPage.css";

const LoginPage = () => {
  return (
    <div className="loginPage">
      <div className="images">
        <img src={logo} alt="logo" className="logo" />

        <img src={signInImg} alt="Sign in image" className="signIn"/>
      </div>

      <div className="form">
        <h1>Welcome!</h1>
        <p>Enter details to login</p>

        <form action="">
          <input type="email" name="" id="" placeholder="Email" />
          <input type="password" name="" id="" placeholder="Password" />
          <p className="show">SHOW</p>

          <a href="">FORGOT PASSWORD?</a>

          <Link to="dashboard" className="btn">
            LOG IN
          </Link>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
