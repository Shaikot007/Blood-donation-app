import React from "react";
import "./HomeCampaign.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProfileImage from "../Images/Profile_photo.png";
import SafeBlood from "../Images/Safe_blood.jpg";
import { CustomInput } from "reactstrap";
import Book from "../Images/Book.png";
import Calendar from "../Images/Calendar.png";
import Donors from "../Images/Donors.png";
import MyList from "../Images/My_list.png";
import Ambulance from "../Images/Ambulance.png";
import FirstAidKit from "../Images/First_aid_kit.jpg";
import PostRequest from "../Images/Post_request.png";
import Chart from "../Chart/Chart";
import Map from "../Map/Map";
import Search from "../Map/Search";

function HomeCampaign() {
  return (
    <div className="HomeCampaign">
      <div className="HomeCampaignHeader">
        <div className="HomeCampaignBox">
          <div className="HomeCampaignBoxText">
            <p>Campaign</p>
          </div>
          <div className="SwitchBoxText">
            <p>Available</p>
          </div>
          <div className="HomeCampaignSwitch">
            <CustomInput type="switch" id="exampleCustomSwitch" name="customSwitch" />
          </div>
        </div>
        <div className="HomeCampaignProfileBar">
          <div className="HomeCampaignUserName">
            <div className="HomeCampaignName">
              <p>John Doe</p>
            </div>
            <div className="HomeCampaignUserRate">
              <p>Top rated donor</p>
            </div>
          </div>
        </div>
        <div className="HomeCampaignUserImage">
          <img src={ProfileImage} alt="User" />
        </div>
        <div className="HomeCampaignUserProfile">
          <FontAwesomeIcon className="HomeCampaignEllipsisV" icon="ellipsis-v" size="sm" />
        </div>
      </div>
      <div className="Campaign">
        <div className="Chevron-circle-left">
          <FontAwesomeIcon className="Chevron-circle" icon="chevron-circle-left" size="lg" />
        </div>
        <div className="BloodCampaign">
          <img src={SafeBlood} alt="Safe-blood" />
          <div className="BloodCampaignColor">
            <h6>Blood Donation Campaign 2021</h6>
            <h6>Held on Today</h6>
            <div className="BloodCampaignText">
              <div className="AdminText">
                <p>By Admin</p>
              </div>
              <div className="AdminTime">
                <p>1 min ago</p>
              </div>
            </div>
          </div>
        </div>
        <div className="BloodCampaign">
          <img src={SafeBlood} alt="Safe-blood" />
          <div className="BloodCampaignColor">
            <h6>Blood Donation Campaign 2021</h6>
            <h6>Held on Today</h6>
            <div className="BloodCampaignText">
              <div className="AdminText">
                <p>By Admin</p>
              </div>
              <div className="AdminTime">
                <p>1 min ago</p>
              </div>
            </div>
          </div>
        </div>
        <div className="BloodCampaign">
          <img src={SafeBlood} alt="Safe-blood" />
          <div className="BloodCampaignColor">
            <h6>Blood Donation Campaign 2021</h6>
            <h6>Held on Today</h6>
            <div className="BloodCampaignText">
              <div className="AdminText">
                <p>By Admin</p>
              </div>
              <div className="AdminTime">
                <p>1 min ago</p>
              </div>
            </div>
          </div>
        </div>
        <div className="Chevron-circle-right">
          <FontAwesomeIcon className="Chevron-circle" icon="chevron-circle-right" size="lg" />
        </div>
      </div>
      <div className="MenuAndMap">
        <div className="CampaignMenu">
          <div className="CampaignMenuText">
            <h6>Menu</h6>
          </div>
          <div className="CampaignMenuIcon">
            <div className="CampaignMenuItem">
              <div className="CampaignMenuImage">
                <img src={Book} alt="Book" />
                <div className="MenuImageCount">
                  <p>3</p>
                </div>
              </div>
              <div className="MenuItemName">
                <p>Book</p>
              </div>
            </div>
            <div className="CampaignMenuItem">
              <div className="CampaignMenuImage">
                <img src={Calendar} alt="Calendar" />
                <div className="MenuImageCount">
                  <p>2</p>
                </div>
              </div>
              <div className="MenuItemName">
                <p>Donation</p>
              </div>
            </div>
            <div className="CampaignMenuItem">
              <div className="CampaignMenuImage">
                <img src={Donors} alt="Donors" />
                <div className="MenuImageCount">
                  <p>4</p>
                </div>
              </div>
              <div className="MenuItemName">
                <p>Donors</p>
              </div>
            </div>
            <div className="CampaignMenuItem">
              <div className="CampaignMenuImage">
                <img src={MyList} alt="My-list" />
                <div className="MenuImageCount">
                  <p>1</p>
                </div>
              </div>
              <div className="MenuItemName">
                <p>My List</p>
              </div>
            </div>
          </div>
          <div className="CampaignMenuText">
            <h6>Request</h6>
          </div>
          <div className="CampaignMenuIcon">
            <div className="CampaignMenuItem">
              <div className="CampaignMenuImage">
                <img src={Ambulance} alt="Ambulance" />
                <div className="MenuImageCount">
                  <p>3</p>
                </div>
              </div>
              <div className="MenuItemName">
                <p>Urgent Request</p>
              </div>
            </div>
            <div className="CampaignMenuItem">
              <div className="CampaignMenuImage">
                <img src={FirstAidKit} alt="First-aid-kit" />
                <div className="MenuImageCount">
                  <p>2</p>
                </div>
              </div>
              <div className="MenuItemName">
                <p>My Request</p>
              </div>
            </div>
            <div className="CampaignMenuItem">
              <div className="CampaignMenuImage">
                <img src={PostRequest} alt="Post-request" />
                <div className="MenuImageCount">
                  <p>1</p>
                </div>
              </div>
              <div className="MenuItemName">
                <p>Post Request</p>
              </div>
            </div>
          </div>
          <div className="CampaignStatistics">
            <div className="Chart">
              <Chart />
            </div>
          </div>
        </div>
        <div className="CampaignMap">
          <Map />
          <div className="SearchBar">
            <Search />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCampaign;
