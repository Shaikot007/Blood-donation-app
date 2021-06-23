import React from "react";
import "./ProfileRequestScreen.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Progress } from "reactstrap";
import ProfileImage from "../Images/Profile_photo.png";
import ProfileWallpaper from "../Images/Profile_wallpaper.png";
import LifeSaver from "../Images/Life_saver.png";
import Fast from "../Images/Fast.png";
import Certified from "../Images/Certified.png";
import Superman from "../Images/Superman.png";
import FiftyLifes from "../Images/50_lifes.png";
import Tree from "../Images/Tree.png";
import Clean from "../Images/Clean.png";
import Protector from "../Images/Protector.png";
import { Link } from "react-router-dom";

function ProfileRequestScreen() {
  return (
    <div className="ProfileRequestScreen">
      <div className="ProfileHeader">
        <div className="Return">
          <div className="ReturnArrow">
            <Link to="/donationprofile">
              <FontAwesomeIcon className="LeftArrow" icon="arrow-left" size="sm" />
            </Link>
          </div>
          <div className="ReturnText">
            <p>Request</p>
          </div>
        </div>
        <div className="ProfileBar">
          <div className="UserName">
            <div className="Name">
              <p>John Doe</p>
            </div>
            <div className="UserRate">
              <p>Top rated donor</p>
            </div>
          </div>
        </div>
        <div className="UserImage">
          <img src={ProfileImage} alt="User" />
        </div>
        <div className="UserProfile">
          <FontAwesomeIcon className="EllipsisV" icon="ellipsis-v" size="sm" />
        </div>
      </div>
      <div className="ProfileBody">
        <div className="UserInfo">
          <div className="UserWallpaper">
            <img src={ProfileWallpaper} alt="Profile_wallpaper" />
          </div>
          <div className="Donor">
            <div className="DonorName">
              <h3>Ashu Priya</h3>
              <p>Beginner donor</p>
            </div>
          </div>
          <div className="DonorBloodImage">
            <FontAwesomeIcon className="DonorBloodIcon" icon="tint" size="3x" />
          </div>
          <div className="DonorBloodText">
            <p>A+</p>
          </div>
          <div className="UserHeadline">
            <div className="HeadlineInfo">
              <h6>Info</h6>
            </div>
            <div className="InfoText">
              <p>You can't do what you want. But the biggest developer. Instantly various Clinical Penatibus Super Bowl Mountains. For the present, or not sad. Volunteer abuser, without continuous maintenance, different versions.</p>
            </div>
          </div>
          <div className="BadgeHeadline">
            <div className="BadgeText">
              <h6>Badge</h6>
              <FontAwesomeIcon className="ShareAltIcon" icon="share-alt" />
            </div>
            <div className="Badge">
              <div className="BadgeBox">
                <div className="BadgeIcon">
                  <img src={LifeSaver} alt="Life_saver" />
                </div>
                <div className="BadgeIconName">
                  <p>Life saver</p>
                </div>
              </div>
              <div className="BadgeBox">
                <div className="BadgeIcon">
                  <img src={FiftyLifes} alt="Life_saver" />
                </div>
                <div className="BadgeIconName">
                  <p>50 lifes</p>
                </div>
              </div>
              <div className="BadgeBox">
                <div className="BadgeIcon">
                  <img src={Protector} alt="Life_saver" />
                </div>
                <div className="BadgeIconName">
                  <p>Protector</p>
                </div>
              </div>
            </div>
          </div>
          <div className="NextDonate">
            <Progress className="Progress" value="75" color="danger" style={{ backgroundColor: "lightgrey" }} />
            <p>3 days until you can donate again</p>
          </div>
        </div>
        <div className="UserBody">
          <div className="DonationRequest">
            <div className="DonationRequestBox">
              <button>Donation</button>
              <button>Request</button>
            </div>
            <div className="DonationRequestInfo">
              <div className="DonationDate">
                <div className="DateBoxUpper">
                  <p>Dec</p>
                </div>
                <div className="DateBoxMiddle">
                  <p>7</p>
                </div>
                <div className="DateBoxUpper">
                </div>
              </div>
              <div className="DonationHospital">
                <div className="HospitalBoxUpper">
                  <p>Saint Sebastine</p>
                </div>
                <div className="HospitalBoxMiddle">
                  <p>Hospital</p>
                </div>
                <div className="HospitalBoxLower">
                  <p>1 Bag Blood</p>
                </div>
              </div>
              <div className="DonationDay">
                <div className="HospitalBoxUpper">
                </div>
                <div className="HospitalBoxMiddle">
                </div>
                <div className="HospitalBoxLower">
                  <p>6 day ago</p>
                </div>
              </div>
            </div>
            <div className="DonationRequestInfo">
              <div className="DonationDate">
                <div className="DateBoxUpper">
                  <p>Dec</p>
                </div>
                <div className="DateBoxMiddle">
                  <p>7</p>
                </div>
                <div className="DateBoxUpper">
                </div>
              </div>
              <div className="DonationHospital">
                <div className="HospitalBoxUpper">
                  <p>Saint Sebastine</p>
                </div>
                <div className="HospitalBoxMiddle">
                  <p>Hospital</p>
                </div>
                <div className="HospitalBoxLower">
                  <p>1 Bag Blood</p>
                </div>
              </div>
              <div className="DonationDay">
                <div className="HospitalBoxUpper">
                </div>
                <div className="HospitalBoxMiddle">
                </div>
                <div className="HospitalBoxLower">
                  <p>6 day ago</p>
                </div>
              </div>
            </div>
            <div className="DonationRequestInfo">
              <div className="DonationDate">
                <div className="DateBoxUpper">
                  <p>Dec</p>
                </div>
                <div className="DateBoxMiddle">
                  <p>7</p>
                </div>
                <div className="DateBoxUpper">
                </div>
              </div>
              <div className="DonationHospital">
                <div className="HospitalBoxUpper">
                  <p>Saint Sebastine</p>
                </div>
                <div className="HospitalBoxMiddle">
                  <p>Hospital</p>
                </div>
                <div className="HospitalBoxLower">
                  <p>1 Bag Blood</p>
                </div>
              </div>
              <div className="DonationDay">
                <div className="HospitalBoxUpper">
                </div>
                <div className="HospitalBoxMiddle">
                </div>
                <div className="HospitalBoxLower">
                  <p>6 day ago</p>
                </div>
              </div>
            </div>
          </div>
          <div className="BadgesHeadline">
            <h6>Badges</h6>
          </div>
          <div className="Badges">
            <button>
              <div className="BadgesIcon">
                <img src={LifeSaver} alt="Life-saver" />
              </div>
              <div className="BadgesIconName">
                <p>Life saver</p>
              </div>
            </button>
            <button>
              <div className="BadgesIcon">
                <img src={Fast} alt="Fast" />
              </div>
              <div className="BadgesIconName">
                <p>Fast</p>
              </div>
            </button>
            <button>
              <div className="BadgesIcon">
                <img src={Certified} alt="Certified" />
              </div>
              <div className="BadgesIconName">
                <p>Certified</p>
              </div>
            </button>
            <button>
              <div className="BadgesIcon">
                <img src={Superman} alt="Superman" />
              </div>
              <div className="BadgesIconName">
                <p>Superman</p>
              </div>
            </button>
            <button>
              <div className="BadgesIcon">
                <img src={FiftyLifes} alt="50-lifes" />
              </div>
              <div className="BadgesIconName">
                <p>50 lifes</p>
              </div>
            </button>
            <button>
              <div className="BadgesIcon">
                <img src={Tree} alt="Tree" />
              </div>
              <div className="BadgesIconName">
                <p>Quick</p>
              </div>
            </button>
            <button>
              <div className="BadgesIcon">
                <img src={Clean} alt="Clean" />
              </div>
              <div className="BadgesIconName">
                <p>Clean</p>
              </div>
            </button>
            <button>
              <div className="BadgesIcon">
                <img src={Protector} alt="Protector" />
              </div>
              <div className="BadgesIconName">
                <p>Protector</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileRequestScreen;
