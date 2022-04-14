import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import {  Route } from 'react-router-dom'
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import "./assets/sass/main.css";
import ProtectedRoutes from "./components/routes/ProtectedRoutes";
import LoginScreen from "./components/screens/LoginScreen";
import Forgotpassword from "./components/screens/forgotpassword";
import UserManagement from "./components/screens/UserManagement";
import Settings from "./components/screens/settings";
import DailyObservation from "./components/screens/DailyObservation";
import AuthRoutes from "./components/routes/AuthRoutes";
import Notification from "./components/screens/Notifications"
import Health from "./components/Popups/Health";
import ConfirmLogout from "./components/Popups/ConfirmLogout";
import Manageprofile from "./components/screens/Manageprofile";
import SaveConfigure from "./components/screens/SaveConfigure";
import Dash from "./components/screens/Dash";
import SignUpScreen from "./components/screens/SignUpScreen";
import DashboardScreen from "./components/screens/DashboardScreen";
import BaseLayout from "./components/layouts/BaseLayout";
function App() {
 

  const auth = useSelector(state => state.auth);
  console.log(auth)
  if(auth?.loginUser?.data?.ErrorCode == 0 && (sessionStorage.getItem("login") === "login")){
    console.log(auth.loginUser.data.Data['tk'],auth.loginUser.data.Data['uk'])
    sessionStorage.setItem('token',auth.loginUser.data.Data['tk']);
    sessionStorage.setItem('uk',auth.loginUser.data.Data['uk']);
  }


  return (
    <div className="App">
      <Router>
        <Switch>
       {/*auth.token ? <ProtectedRoutes /> : <AuthRoutes />*/} 
       <Route exact path='/' component={LoginScreen}/>

       <Route exact path='/login' component={LoginScreen}/>
       <Route exact path='/forgotpassword' component={Forgotpassword}/>


       <BaseLayout>
                <Route exact path='/dashboard'  component={DashboardScreen} />
                <Route exact path='/resident-analysis'/>
            

                {/* dummy chart for testing */}
         
          <Route exact path='/settings' component={Settings}/>
          <Route exact path='/dailyobservations' component={DailyObservation}/>
          <Route exact path='/notifications' component={Notification}/>
          <Route exact path='/health' component={Health}/>
          <Route exact path='/usermanagement' component={UserManagement}/>
          <Route exact path='/manageprofile' component={Manageprofile}/>
          <Route exact path='/saveconfigure' component={SaveConfigure}/>
            </BaseLayout>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
