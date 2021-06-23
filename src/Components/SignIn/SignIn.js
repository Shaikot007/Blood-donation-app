import React from "react";
import "./SignIn.css";
import BloodDonationImage from "../Images/Welcome_image.png";
import { Input, Button } from "reactstrap";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <div className="SignIn">
      <div className="Blood_Donation_Image">
        <img src={BloodDonationImage} alt="Blood-donation" />
      </div>
      <div className="LogIn">
        <div className="SignInHeadline">
          <h4>Sign In</h4>
        </div>
        <div className="EmailOrUsername">
          <p>Email or Username</p>
        </div>
        <div className="InputField">
          <Input type="text" placeholder="johndoe@gmail.com" />
        </div>
        <div className="Password">
          <p>Password</p>
        </div>
        <div className="InputField">
          <Input type="password" placeholder="*****" />
        </div>
        <div className="LogInButton">
          <Link to="/requestprofile">
            <Button color="danger">Login</Button>
          </Link>
        </div>
        <div className="ForgetPassword">
          <p>
            <Link to="/getpassword">Forget Password?</Link>
          </p>
        </div>
        <div className="SignUp">
          <p>Don't have an account? <Link to="/signupaboutyou"><strong>Sign Up</strong></Link></p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
