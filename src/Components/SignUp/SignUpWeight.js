import React from "react";
import "./SignUpWeight.css";
import BloodDonationImage from "../Images/Welcome_image.png";
import WeightUp from "../Images/Weight_Up.png";
import WeightDown from "../Images/Weight_Down.png";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

function SignUpWeight() {
  return (
    <div className="SignUpWeight">
      <div className="Sign_Up_Weight_Blood_Donation_Image">
        <img src={BloodDonationImage} alt="Blood-donation" />
        <div className="WeightText">
          <p>Note: you can not donate <br /> blood if you're under weight. <br />
            Minimum weight for <br /> donation required 50 KG.</p>
        </div>
      </div>
      <div className="Weight">
        <div className="WeightHeadline">
          <h4>How Much Do</h4>
          <h4>You Weight</h4>
        </div>
        <div className="YourWeight">
          <Button>
            <img src={WeightDown} alt="Weight-down" />
          </Button>
          <Button>
            <img src={WeightUp} alt="Weight-up" />
          </Button>
        </div>
        <div className="WeightButton">
          <Link to="/signupgender">
            <Button color="danger">Next</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpWeight;
