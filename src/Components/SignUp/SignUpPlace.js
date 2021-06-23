import React from "react";
import "./SignUpPlace.css";
import BloodDonationImage from "../Images/Welcome_image.png";
import { Input, Button } from "reactstrap";
import { Link } from "react-router-dom";

function SignUpPlace() {
  return (
    <div className="SignUpPlace">
      <div className="Sign_Up_Place_Blood_Donation_Image">
        <img src={BloodDonationImage} alt="Blood-donation" />
        <div className="PlaceText">
          <p>Please provide correct <br /> address. This information <br /> will keep safe.</p>
        </div>
      </div>
      <div className="Place">
        <div className="PlaceHeadline">
          <h4>Where Do You Live?</h4>
        </div>
        <div className="SignUpAddress">
          <p>Street Address</p>
        </div>
        <div className="SignUpAddressField">
          <Input type="address" placeholder="123/4, Saint Road" />
        </div>
        <div className="SignUpAddress">
          <p>City</p>
        </div>
        <div className="SignUpAddressField">
          <Input type="text" placeholder="Dhaka" />
        </div>
        <div className="SignUpAddress">
          <p>Postal Code</p>
        </div>
        <div className="SignUpAddressField">
          <Input type="number" placeholder="✕✕✕✕" />
        </div>
        <div className="PlaceButton">
          <Link to="/signupage">
            <Button color="danger">Next</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpPlace;
