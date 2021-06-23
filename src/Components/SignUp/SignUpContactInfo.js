import React from "react";
import "./SignUpContactInfo.css";
import BloodDonationImage from "../Images/Welcome_image.png";
import { Input, Button } from "reactstrap";
import { Link } from "react-router-dom";

function SignUpContactInfo() {
  return (
    <div className="SignUpContactInfo">
      <div className="Sign_Up_Contact_Blood_Donation_Image">
        <img src={BloodDonationImage} alt="Blood-donation" />
        <div className="ContactText">
          <p>Please provide correct <br /> phone no. This information <br /> will keep safe.</p>
        </div>
      </div>
      <div className="Contact">
        <div className="ContactHeadline">
          <h4>Contact Information</h4>
        </div>
        <div className="SignUpPhone">
          <p>Phone No</p>
        </div>
        <div className="SignUpPhone">
          <Input type="tel" placeholder="01812345678" pattern="[0-9]{11}" />
        </div>
        <div className="SignUpPhone">
          <p>Alternative Phone No</p>
        </div>
        <div className="SignUpPhone">
          <Input type="tel" placeholder="01712345678" pattern="[0-9]{11}" />
        </div>
        <div className="SignUpPhone">
          <p>Social (Optional)</p>
        </div>
        <div className="SignUpPhone">
          <Input type="text" placeholder="https:/" />
        </div>
        <div className="ContactButton">
          <Link to="/signupbloodgroup">
            <Button color="danger">Next</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpContactInfo;
