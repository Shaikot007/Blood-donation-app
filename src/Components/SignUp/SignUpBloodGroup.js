import React from "react";
import "./SignUpBloodGroup.css";
import BloodDonationImage from "../Images/Welcome_image.png";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

function SignUpBloodGroup() {
  return (
    <div className="SignUpBloodGroup">
      <div className="Sign_Up_Blood_Group_Donation_Image">
        <img src={BloodDonationImage} alt="Blood-donation" />
        <div className="BloodGroupText">
          <p>Your blood group need to be <br /> accurate. If you don't know <br />
            about it please contact <br /> nearest clinic</p>
        </div>
      </div>
      <div className="BloodGroup">
        <div className="BloodGroupHeadline">
          <h4>What is Your</h4>
          <h4>Blood Group</h4>
        </div>
        <div className="BloodGroupType">
          <Button>A+</Button>
          <Button>A-</Button>
          <Button>B+</Button>
        </div>
        <div className="BloodGroupType">
          <Button>B-</Button>
          <Button>O+</Button>
          <Button>O-</Button>
        </div>
        <div className="BloodGroupType">
          <Button>AB+</Button>
          <Button>AB-</Button>
        </div>
        <div className="BloodGroupButton">
          <Link to="/signupweight">
            <Button color="danger">Next</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpBloodGroup;
