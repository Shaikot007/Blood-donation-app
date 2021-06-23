import React from "react";
import "./Welcome.css";
import BloodDonationImage from "../Images/Welcome_image.png";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className="Welcome">
      <div className="BloodDonationImage">
        <img src={BloodDonationImage} alt="Blood-donation" />
      </div>
      <div className="StartButton">
        <Link to="/signin">
          <Button color="danger">Start Journey</Button>
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
