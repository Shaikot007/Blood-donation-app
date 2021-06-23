import React from "react";
import "./ForgetPassword.css";
import BloodDonationImage from "../Images/Welcome_image.png";
import { Input, Button } from "reactstrap";
import { Link } from "react-router-dom";

function ForgetPassword() {
  return (
    <div className="GetPassword">
      <div className="Get_Password_Blood_Donation_Image">
        <img src={BloodDonationImage} alt="Blood-donation" />
      </div>
      <div className="Get_Password">
        <div className="Get_Password_Headline">
          <h4>Let's Get You Into</h4>
          <h4>Your Account</h4>
        </div>
        <div className="NewPassword">
          <p>New password</p>
        </div>
        <div className="NewPasswordInputField">
          <Input type="password" placeholder="*****" />
        </div>
        <div className="NewPassword">
          <p>Re-type new password</p>
        </div>
        <div className="NewPasswordInputField">
          <Input type="password" placeholder="*****" />
        </div>
        <div className="NewPasswordButton">
          <Link to="/requestprofile">
            <Button color="danger">Submit</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
