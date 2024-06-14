import logo from "../assets/Group (1).svg";
import signInImg from '../assets/SignIn.svg'
import '../Styles/LoginPage.css'

const LoginPage = () => {
  return (
    <div className="loginPage">
      <img src={logo} alt="logo" className="logo"/>

      <div className="main">
      <img src={signInImg} alt="Sign in image" />

      <div>
        <h1>Welcome!</h1>
        <p>Enter details to login</p>
        
        <form action="">

            <input type="email" name="" id="" placeholder="Email" />
            <input type="password" name="" id="" placeholder="Password" />

            <a href="">FORGOT PASSWORD?</a>

            <button>LOG IN</button>
        </form>
      </div>
      </div>
    </div>
  );
};

export default LoginPage;
