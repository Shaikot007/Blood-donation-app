import React from "react";
import "./SignUpAboutYou.css";
import BloodDonationImage from "../Images/Welcome_image.png";
import { Input, Button } from "reactstrap";
import { Link } from "react-router-dom";

function SignUpAboutYou() {
  return (
    <div className="SignUpAboutYou">
      <div className="Sign_Up_About_You_Blood_Donation_Image">
        <img src={BloodDonationImage} alt="Blood-donation" />
        <div className="AboutYouText">
          <p>Provide your real name for <br /> your identity. Your name will <br /> be used for search.</p>
        </div>
      </div>
      <div className="AboutYou">
        <div className="AboutYouHeadline">
          <h4>Let Us Know About You</h4>
        </div>
        <div className="SignUpEmailOrUserName">
          <p>Username</p>
        </div>
        <div className="SignUpInputField">
          <Input type="text" placeholder="johndoe" />
        </div>
        <div className="SignUpEmailOrUserName">
          <p>Email</p>
        </div>
        <div className="SignUpInputField">
          <Input type="e-mail" placeholder="johndoe@gmail.com" />
        </div>
        <div className="SignUpEmailOrUserName">
          <p>Password</p>
        </div>
        <div className="SignUpInputField">
          <Input type="password" placeholder="*****" />
        </div>
        <div className="AboutYouButton">
          <Link to="/signupcontactinfo">
            <Button color="danger">Next</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpAboutYou;
