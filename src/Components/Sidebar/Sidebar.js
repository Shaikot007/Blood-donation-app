import React from "react";
import "./Sidebar.css";
import BloodDonationImage from "../Images/Welcome_image.png";
import SidebarImage from "../Images/Sidebar_safe_life.png";
import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HomeCampaign from "../Home/HomeCampaign";
import HomeRequest from "../Home/HomeRequest";
import ProfileRequestScreen from "../Profile/ProfileRequestScreen";
import ProfileDonationScreen from "../Profile/ProfileDonationScreen";
import Notification from "../Notification/Notification";
import Donors from "../Donors/Donors";
import Customize from "../Customize/Customize";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Sidebar() {
  return (
    <Router>
      <div className="Sidebar">
        <div className="SidebarMenu">
          <div className="BloodDonationLogo">
            <img src={BloodDonationImage} alt="Blood-donation" />
          </div>
          <div className="Menu">
            <Link to="/homerequest">
              <Button>
                <div className="Icon">
                  <FontAwesomeIcon icon="home" size="lg" />
                </div>
                <div className="IconName">
                  <p>Home</p>
                </div>
              </Button>
            </Link>
          </div>
          <div className="Menu">
            <Link to="/requestprofile">
              <Button>
                <div className="Icon">
                  <FontAwesomeIcon icon="user" size="lg" />
                </div>
                <div className="IconName">
                  <p>Profile</p>
                </div>
              </Button>
            </Link>
          </div>
          <div className="Menu">
            <Link to="/notification">
              <Button>
                <div className="Icon">
                  <FontAwesomeIcon icon="bell" size="lg" />
                </div>
                <div className="IconName">
                  <p>Notifications</p>
                </div>
              </Button>
            </Link>
          </div>
          <div className="Menu">
            <Link to="/donors">
              <Button>
                <div className="Icon">
                  <FontAwesomeIcon icon="map" size="lg" />
                </div>
                <div className="IconName">
                  <p>Donors</p>
                </div>
              </Button>
            </Link>
          </div>
          <div className="Menu">
            <Link to="/customize">
              <Button>
                <div className="Icon">
                  <FontAwesomeIcon icon="cog" size="lg" />
                </div>
                <div className="IconName">
                  <p>Customize</p>
                </div>
              </Button>
            </Link>
          </div>
          <div className="MenuImage">
            <img src={SidebarImage} alt="Safe-life" />
          </div>
        </div>
        <div className="SidebarMenuPage">
          <Switch>
            <Route path="/homerequest">
              <HomeRequest />
            </Route>
            <Route path="/homecampaign">
              <HomeCampaign />
            </Route>
            <Route path="/requestprofile">
              <ProfileRequestScreen />
            </Route>
            <Route path="/donationprofile">
              <ProfileDonationScreen />
            </Route>
            <Route path="/notification">
              <Notification />
            </Route>
            <Route path="/donors">
              <Donors />
            </Route>
            <Route path="/customize">
              <Customize />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default Sidebar;
