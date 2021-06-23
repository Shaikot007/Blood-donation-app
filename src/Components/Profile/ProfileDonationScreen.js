import React from "react";
import "./ProfileDonationScreen.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProfileImage from "../Images/Profile_photo.png";
import UserRating from "../Images/User_rating_photo.jpg";
import { Link } from "react-router-dom";

function ProfileDonationScreen() {
  return (
    <div className="ProfileDonationScreen">
      <div className="ProfileDonationHeader">
        <div className="DonationReturn">
          <div className="DonationReturnArrow">
            <Link to="/requestprofile">
              <FontAwesomeIcon className="LeftArrow" icon="arrow-left" size="sm" />
            </Link>
          </div>
          <div className="DonationReturnText">
            <p>Donations</p>
          </div>
        </div>
        <div className="DonationProfileBar">
          <div className="DonationUserName">
            <div className="DonationName">
              <p>John Doe</p>
            </div>
            <div className="DonationUserRate">
              <p>Top rated donor</p>
            </div>
          </div>
        </div>
        <div className="DonationUserImage">
          <img src={ProfileImage} alt="User" />
        </div>
        <div className="DonationUserProfile">
          <FontAwesomeIcon className="EllipsisV" icon="ellipsis-v" size="sm" />
        </div>
      </div>
      <div className="DonationClinic">
        <div className="Clinic">
          <div className="ClinicIcon">
            <FontAwesomeIcon className="Tint" icon="tint" size="lg" />
          </div>
          <div className="ClinicInfo">
            <div className="ClinicHeadline">
              <div className="ClinicName">
                <h6>Musa Clinic</h6>
              </div>
              <div className="ClinicOptions">
                <FontAwesomeIcon className="EllipsisV" icon="ellipsis-v" size="sm" />
              </div>
            </div>
            <div className="ClinicAddress">
              <div className="AddressIcon">
                <FontAwesomeIcon icon="map-marker-alt" size="sm" />
              </div>
              <div className="AddressText">
                <p>21/3, Los Angelos, CA</p>
              </div>
            </div>
            <div className="ClinicAddress">
              <div className="AddressIcon">
                <FontAwesomeIcon icon="calendar-check" size="sm" />
              </div>
              <div className="AddressText">
                <p>Monday, 2 Jan, 11:08 PM</p>
              </div>
            </div>
          </div>
        </div>
        <div className="Clinic">
          <div className="ClinicIcon">
            <FontAwesomeIcon className="Tint" icon="tint" size="lg" />
          </div>
          <div className="ClinicInfo">
            <div className="ClinicHeadline">
              <div className="ClinicName">
                <h6>Musa Clinic</h6>
              </div>
              <div className="ClinicOptions">
                <FontAwesomeIcon className="EllipsisV" icon="ellipsis-v" size="sm" />
              </div>
            </div>
            <div className="ClinicAddress">
              <div className="AddressIcon">
                <FontAwesomeIcon icon="map-marker-alt" size="sm" />
              </div>
              <div className="AddressText">
                <p>21/3, Los Angelos, CA</p>
              </div>
            </div>
            <div className="ClinicAddress">
              <div className="AddressIcon">
                <FontAwesomeIcon icon="calendar-check" size="sm" />
              </div>
              <div className="AddressText">
                <p>Monday, 2 Jan, 11:08 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="UserBox">
        <div className="UserHistory">
          <div className="UserHistoryHeadline">
            <h5>History</h5>
          </div>
          <div className="UserHistoryDescription">
            <h5>You have saved 50 lives, donated 50 unit</h5>
            <div className="HospitalHistory">
              <div className="HistoryNumber">
                <p>1</p>
              </div>
              <div className="HospitalName">
                <p>Kingsland Hospital</p>
              </div>
              <div className="DonatedTimes">
                <p>2 Times</p>
              </div>
            </div>
            <div className="HospitalHistory">
              <div className="HistoryNumber">
                <p>2</p>
              </div>
              <div className="HospitalName">
                <p>Kingsland Hospital</p>
              </div>
              <div className="DonatedTimes">
                <p>1 Time</p>
              </div>
            </div>
            <div className="HospitalHistory">
              <div className="HistoryNumber">
                <p>3</p>
              </div>
              <div className="HospitalName">
                <p>Kingsland Hospital</p>
              </div>
              <div className="DonatedTimes">
                <p>1 Time</p>
              </div>
            </div>
          </div>
        </div>
        <div className="UserReviews">
          <div className="UserReviewsHeadline">
            <h5>Reviews</h5>
          </div>
          <div className="ReviewBox">
            <div className="ReviewBoxUpper">
              <div className="ReviewBoxUpperImage">
                <img src={UserRating} alt="User" />
              </div>
              <div className="ReviewBoxUpperUser">
                <div className="ReviewBoxUserName">
                  <p>Ashik Prottoy</p>
                </div>
                <div className="ReviewBoxUserDate">
                  <p>Dec 27</p>
                </div>
              </div>
            </div>
            <div className="ReviewBoxMiddle">
              <p>You can't do what you want. But the biggest developer. Instantly various Clinical Penatibus Super Bowl Mountains. For the present, or not sad. Volunteer abuser, without continuous maintenance, different versions.</p>
            </div>
            <div className="ReviewBoxLower">
              <div className="LikeBox">
                <FontAwesomeIcon icon="thumbs-up" size="sm" />
                <p>Like</p>
              </div>
              <div className="LikeBox">
                <FontAwesomeIcon icon="reply" size="sm" />
                <p>Reply</p>
              </div>
            </div>
          </div>
          <div className="ReviewBox">
            <div className="ReviewBoxUpper">
              <div className="ReviewBoxUpperImage">
                <img src={UserRating} alt="User" />
              </div>
              <div className="ReviewBoxUpperUser">
                <div className="ReviewBoxUserName">
                  <p>Ashik Prottoy</p>
                </div>
                <div className="ReviewBoxUserDate">
                  <p>Dec 27</p>
                </div>
              </div>
            </div>
            <div className="ReviewBoxMiddle">
              <p>You can't do what you want. But the biggest developer. Instantly various Clinical Penatibus Super Bowl Mountains. For the present, or not sad. Volunteer abuser, without continuous maintenance, different versions.</p>
            </div>
            <div className="ReviewBoxLower">
              <div className="LikeBox">
                <FontAwesomeIcon icon="thumbs-up" size="sm" />
                <p>Like</p>
              </div>
              <div className="LikeBox">
                <FontAwesomeIcon icon="reply" size="sm" />
                <p>Reply</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDonationScreen;
