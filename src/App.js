import React from "react";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import Welcome from "./Components/Welcome/Welcome";
import SignIn from "./Components/SignIn/SignIn";
import ForgetPassword from "./Components/ForgetPassword/ForgetPassword";
import SignUpAboutYou from "./Components/SignUp/SignUpAboutYou";
import SignUpContactInfo from "./Components/SignUp/SignUpContactInfo";
import SignUpBloodGroup from "./Components/SignUp/SignUpBloodGroup";
import SignUpWeight from "./Components/SignUp/SignUpWeight";
import SignUpGender from "./Components/SignUp/SignUpGender";
import SignUpPlace from "./Components/SignUp/SignUpPlace";
import SignUpAge from "./Components/SignUp/SignUpAge";
import SignUpPhoto from "./Components/SignUp/SignUpPhoto";
import MyProfile from "./Components/Sidebar/Sidebar";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import {
  faHome,
  faUser,
  faBell,
  faMap,
  faCog,
  faArrowLeft,
  faEllipsisV,
  faTint,
  faShareAlt,
  faMapMarkerAlt,
  faCalendarCheck,
  faThumbsUp,
  faReply,
  faBullhorn,
  faRibbon,
  faHistory,
  faChevronCircleLeft,
  faChevronCircleRight,
  faTrash
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faHome,
  faUser,
  faBell,
  faMap,
  faCog,
  faArrowLeft,
  faEllipsisV,
  faTint,
  faShareAlt,
  faMapMarkerAlt,
  faCalendarCheck,
  faThumbsUp,
  faReply,
  faBullhorn,
  faRibbon,
  faHistory,
  faChevronCircleLeft,
  faChevronCircleRight,
  faTrash
);

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/getpassword">
            <ForgetPassword />
          </Route>
          <Route path="/signupaboutyou">
            <SignUpAboutYou />
          </Route>
          <Route path="/signupcontactinfo">
            <SignUpContactInfo />
          </Route>
          <Route path="/signupbloodgroup">
            <SignUpBloodGroup />
          </Route>
          <Route path="/signupweight">
            <SignUpWeight />
          </Route>
          <Route path="/signupgender">
            <SignUpGender />
          </Route>
          <Route path="/signupplace">
            <SignUpPlace />
          </Route>
          <Route path="/signupage">
            <SignUpAge />
          </Route>
          <Route path="/signupphoto">
            <SignUpPhoto />
          </Route>
          <Route path="/homerequest">
            <MyProfile />
          </Route>
          <Route path="/homecampaign">
            <MyProfile />
          </Route>
          <Route path="/requestprofile">
            <MyProfile />
          </Route>
          <Route path="/donationprofile">
            <MyProfile />
          </Route>
          <Route path="/notification">
            <MyProfile />
          </Route>
          <Route path="/donors">
            <MyProfile />
          </Route>
          <Route path="/customize">
            <MyProfile />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
