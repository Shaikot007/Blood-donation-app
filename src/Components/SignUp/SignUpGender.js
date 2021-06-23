import React from "react";
import "./SignUpGender.css";
import BloodDonationImage from "../Images/Welcome_image.png";
import Male from "../Images/Male.png";
import Female from "../Images/Female.png";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

function SignUpGender() {
  return (
    <div className="SignUpGender">
      <div className="Sign_Up_Gender_Blood_Donation_Image">
        <img src={BloodDonationImage} alt="Blood-donation" />
        <div className="GenderText">
          <p>Defining your gender will let <br /> us know bring new features <br />for mothers health care.</p>
        </div>
      </div>
      <div className="Gender">
        <div className="GenderHeadline">
          <h4>What is Your Gender</h4>
        </div>
        <div className="YourGender">
          <Button>
            <img src={Male} alt="Weight-down" />
          </Button>
          <Button>
            <img src={Female} alt="Weight-up" />
          </Button>
        </div>
        <div className="GenderButton">
          <Link to="/signupplace">
            <Button color="danger">Next</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpGender;
