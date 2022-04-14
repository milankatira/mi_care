import React from "react";
import "./login.css";
import companyLogo from "../../assets/images/logo-2.png";
import axios from "axios";
import { LoginUser } from "../../redux/actions/authAction";
import { useDispatch } from "react-redux";
import session from "redux-persist/lib/storage/session";

function LoginScreen() {
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const dispatch = useDispatch();

  window.addEventListener('load', function() {
    console.log('All assets are loaded')

  if(sessionStorage.getItem("ID")){

    document.getElementById("target").style.display = "block";
    
  }
  sessionStorage.removeItem("ID")
})
  
  function handleSubmit() {
    console.log(userName, password);
sessionStorage.setItem("username",userName);
sessionStorage.setItem('password',password);
    const packet = {
      "criteria": {
        "nu": userName,
        "wp": password,
      }
    };
    dispatch(LoginUser(packet));

   

   
  }

  return (
    <div className="container-flui">
      <div className="row">
        <div className="col-sm">
          <img
            src={companyLogo}
            alt="MiiCare logo"
            className="logo"
            height={40}
            width={135}
          />
        </div>
        <div className="col-sm"></div>
        <div className="col-sm">
          <div className="login-page">
            <div className="form">
              <h3>Login</h3>

              <p id="target" style={{"display":"none","font-size":"13px"}} class="bg-warning text-danger">The username or password that you entered is incorrect.</p><br />
              <form className="register-form">
                <input type="text" />
                <input type="password" placeholder="password" />
                <input type="text" placeholder="email address" />
                <button>create</button>
                <p className="message">
                  Already registered? <a href="">Sign In</a>
                </p>
              </form>
              {/* <form className="login-form"> */}
              <input
                type="text"
                placeholder="username"
                id="email"
                required
                value={userName}
                autocomplete="false"
                onChange={(e) => setUserName(e.target.value)}
              />
              <input
                type="password"
                placeholder="password"
                id="password"
                value={password}
                autocomplete="false"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button className="loginbtn" onClick={() => handleSubmit()}>
                login
              </button>
              <p className="message">
                <a href="/forgotpassword">Forgot Password? </a>
              </p>
              {/* </form> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
