import React from "react";
import "./SignUpPhoto.css";
import BloodDonationImage from "../Images/Welcome_image.png";
import PhotoUpload from "../Images/Photo_upload.png";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

function SignUpPhoto() {
  return (
    <div className="SignUpPhoto">
      <div className="Sign_Up_Photo_Blood_Donation_Image">
        <img src={BloodDonationImage} alt="Blood-donation" />
        <div className="PhotoText">
          <p>Please do not use a model <br /> or doll avatar. Please keep <br />
          faith on yourself you're <br /> beautiful too.</p>
        </div>
      </div>
      <div className="Photo">
        <div className="PhotoHeadline">
          <h4>You're almost done</h4>
        </div>
        <div className="UploadPhoto">
          <Button>
            <img src={PhotoUpload} alt="Photo_upload" />
          </Button>
        </div>
        <div className="PhotoUploadButton">
          <Link to="/requestprofile">
            <Button color="danger">Start Journey</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpPhoto;
