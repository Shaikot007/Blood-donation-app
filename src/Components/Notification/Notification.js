import React from "react";
import "./Notification.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProfileImage from "../Images/Profile_photo.png";
import { Link } from "react-router-dom";

function Notification() {
  return (
    <div className="Notification">
      <div className="NotificationHeader">
        <div className="NotificationReturn">
          <div className="NotificationReturnArrow">
            <Link to="/requestprofile">
              <FontAwesomeIcon className="NotificationLeftArrow" icon="arrow-left" size="sm" />
            </Link>
          </div>
          <div className="NotificationReturnText">
            <p>Notification</p>
          </div>
        </div>
        <div className="NotificationProfileBar">
          <div className="NotificationUserName">
            <div className="NotificationName">
              <p>John Doe</p>
            </div>
            <div className="NotificationUserRate">
              <p>Top rated donor</p>
            </div>
          </div>
        </div>
        <div className="NotificationUserImage">
          <img src={ProfileImage} alt="User" />
        </div>
        <div className="NotificationUserProfile">
          <FontAwesomeIcon className="NotificationIcon" icon="ellipsis-v" size="sm" />
        </div>
      </div>
      <div className="NotificationBody">
        <div className="NotificationBox">
          <div className="AlertBox">
            <div className="NotificationAlert">
              <div className="NotificationImage">
                <p>A+</p>
              </div>
              <div className="NotificationText">
                <p><strong>Musa Clinic</strong> posted a blood request near you</p>
              </div>
            </div>
            <div className="NotificationTime">
              <p>1 min ago</p>
            </div>
          </div>
          <div className="AlertBox">
            <div className="NotificationAlert">
              <div className="NotificationImage">
                <p>A+</p>
              </div>
              <div className="NotificationText">
                <p><strong>Musa Clinic</strong> posted a blood request near you</p>
              </div>
            </div>
            <div className="NotificationTime">
              <p>1 min ago</p>
            </div>
          </div>
          <div className="AlertBox">
            <div className="NotificationAlert">
              <div className="NotificationImage">
                <p>A+</p>
              </div>
              <div className="NotificationText">
                <p><strong>Musa Clinic</strong> posted a blood request near you</p>
              </div>
            </div>
            <div className="NotificationTime">
              <p>1 min ago</p>
            </div>
          </div>
          <div className="AlertBoxPastDay">
            <p>Yesterday</p>
          </div>
          <div className="AlertBox">
            <div className="NotificationAlert">
              <div className="NotificationImage">
                <FontAwesomeIcon className="NotificationIcon" icon="bullhorn" size="sm" />
              </div>
              <div className="NotificationText">
                <p><strong>Musa Clinic</strong> request you for <strong>O+</strong> blood</p>
              </div>
            </div>
            <div className="NotificationTime">
              <p>1 min ago</p>
            </div>
          </div>
          <div className="AlertBox">
            <div className="NotificationAlert">
              <div className="NotificationImage">
                <FontAwesomeIcon className="NotificationIcon" icon="ribbon" size="sm" />
              </div>
              <div className="NotificationText">
                <p><strong>Musa Clinic</strong> earned a new badge</p>
              </div>
            </div>
            <div className="NotificationTime">
              <p>1 min ago</p>
            </div>
          </div>
          <div className="AlertBoxPastDay">
            <p>Yesterday</p>
          </div>
          <div className="AlertBox">
            <div className="NotificationAlert">
              <div className="NotificationImage">
                <FontAwesomeIcon className="NotificationIcon" icon="ribbon" size="sm" />
              </div>
              <div className="NotificationText">
                <p><strong>You</strong> earned a new badge</p>
              </div>
            </div>
            <div className="NotificationTime">
              <p>1 min ago</p>
            </div>
          </div>
        </div>
        <div className="HistoryBox">
          <div className="HistoryHeadline">
            <p>History</p>
          </div>
          <div className="AlertBox">
            <div className="NotificationAlert">
              <div className="NotificationImage">
                <FontAwesomeIcon className="NotificationIcon" icon="bullhorn" size="sm" />
              </div>
              <div className="NotificationText">
                <p>You accepter the request from <strong>John Adam</strong></p>
              </div>
            </div>
            <div className="NotificationTime">
              <p>2 days ago</p>
            </div>
          </div>
          <div className="AlertBox">
            <div className="NotificationAlert">
              <div className="NotificationImage">
                <p>A+</p>
              </div>
              <div className="NotificationText">
                <p><strong>You</strong> posted a blood request for your brother</p>
              </div>
            </div>
            <div className="NotificationTime">
              <p>1 min ago</p>
            </div>
          </div>
          <div className="AlertBoxPastDay">
            <p>Yesterday</p>
          </div>
          <div className="AlertBox">
            <div className="NotificationAlert">
              <div className="NotificationImage">
                <FontAwesomeIcon className="NotificationIcon" icon="history" size="sm" />
              </div>
              <div className="NotificationText">
                <p><strong>You</strong> posted a blood request which was expired, <strong>Republish</strong> it</p>
              </div>
            </div>
            <div className="NotificationTime">
              <p>1 min ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
