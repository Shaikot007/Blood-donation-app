import React, { useState } from "react";
import "./SignUpAge.css";
import BloodDonationImage from "../Images/Welcome_image.png";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

function SignUpAge() {
  const yearArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];
  const selectYear = 27;
  const [year, setYear] = useState(selectYear);

  const dateArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const selectDate = 5;
  const [date, setDate] = useState(selectDate);

  const monthArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const selectMonth = 4;
  const [month, setMonth] = useState(selectMonth);

  return (
    <div className="SignUpAge">
      <div className="Sign_Up_Age_Blood_Donation_Image">
        <img src={BloodDonationImage} alt="Blood-donation" />
        <div className="AgeText">
          <p>Correct birthdate give you <br /> best experience with the <br /> community. Don't hide it. </p>
        </div>
      </div>
      <div className="Age">
        <div className="AgeHeadline">
          <h4>How Old Are You?</h4>
        </div>
        <div className="AgeBoxText">
          <p>I am</p>
        </div>
        {year === 1 ?
          <div className="AgeBox">
            <div className="AgeSide" onClick={() => setYear(year - 1)}>
              <p>{yearArr[year + 98]}</p>
            </div>
            <div className="AgeMiddleSide" onClick={() => setYear(year - 1)}>
              <p>{yearArr[year - 1]}</p>
            </div>
            <div className="AgeMiddle">
              <p>{yearArr[year]}</p>
            </div>
            <div className="AgeMiddleSide" onClick={() => setYear(year + 1)}>
              <p>{yearArr[year + 1]}</p>
            </div>
            <div className="AgeSide" onClick={() => setYear(year + 1)}>
              <p>{yearArr[year + 2]}</p>
            </div>
          </div>
          :
          year === 0 ?
            <div className="AgeBox">
              <div className="AgeSide">
                <p>{yearArr[year + 98]}</p>
              </div>
              <div className="AgeMiddleSide">
                <p>{yearArr[year + 99]}</p>
              </div>
              <div className="AgeMiddle">
                <p>{yearArr[year]}</p>
              </div>
              <div className="AgeMiddleSide" onClick={() => setYear(year + 1)}>
                <p>{yearArr[year + 1]}</p>
              </div>
              <div className="AgeSide" onClick={() => setYear(year + 1)}>
                <p>{yearArr[year + 2]}</p>
              </div>
            </div>
            :
            year === 98 ?
              <div className="AgeBox">
                <div className="AgeSide" onClick={() => setYear(year - 1)}>
                  <p>{yearArr[year - 2]}</p>
                </div>
                <div className="AgeMiddleSide" onClick={() => setYear(year - 1)}>
                  <p>{yearArr[year - 1]}</p>
                </div>
                <div className="AgeMiddle">
                  <p>{yearArr[year]}</p>
                </div>
                <div className="AgeMiddleSide" onClick={() => setYear(year + 1)}>
                  <p>{yearArr[year + 1]}</p>
                </div>
                <div className="AgeSide" onClick={() => setYear(year + 1)}>
                  <p>{yearArr[year - 98]}</p>
                </div>
              </div>
              :
              year === 99 ?
                <div className="AgeBox">
                  <div className="AgeSide" onClick={() => setYear(year - 1)}>
                    <p>{yearArr[year - 2]}</p>
                  </div>
                  <div className="AgeMiddleSide" onClick={() => setYear(year - 1)}>
                    <p>{yearArr[year - 1]}</p>
                  </div>
                  <div className="AgeMiddle">
                    <p>{yearArr[year]}</p>
                  </div>
                  <div className="AgeMiddleSide">
                    <p>{yearArr[year - 99]}</p>
                  </div>
                  <div className="AgeSide">
                    <p>{yearArr[year - 98]}</p>
                  </div>
                </div>
                :
                <div className="AgeBox">
                  <div className="AgeSide" onClick={() => setYear(year - 1)}>
                    <p>{yearArr[year - 2]}</p>
                  </div>
                  <div className="AgeMiddleSide" onClick={() => setYear(year - 1)}>
                    <p>{yearArr[year - 1]}</p>
                  </div>
                  <div className="AgeMiddle">
                    <p>{yearArr[year]}</p>
                  </div>
                  <div className="AgeMiddleSide" onClick={() => setYear(year + 1)}>
                    <p>{yearArr[year + 1]}</p>
                  </div>
                  <div className="AgeSide" onClick={() => setYear(year + 1)}>
                    <p>{yearArr[year + 2]}</p>
                  </div>
                </div>
        }
        <div className="AgeBoxText">
          <p>Years old</p>
        </div>
        {date === 1 ?
          <div className="AgeBox">
            <div className="AgeSide" onClick={() => setDate(date - 1)}>
              <p>{dateArr[date + 29]}</p>
            </div>
            <div className="AgeMiddleSide" onClick={() => setDate(date - 1)}>
              <p>{dateArr[date - 1]}</p>
            </div>
            <div className="AgeMiddle">
              <p>{dateArr[date]}</p>
            </div>
            <div className="AgeMiddleSide" onClick={() => setDate(date + 1)}>
              <p>{dateArr[date + 1]}</p>
            </div>
            <div className="AgeSide" onClick={() => setDate(date + 1)}>
              <p>{dateArr[date + 2]}</p>
            </div>
          </div>
          :
          date === 0 ?
            <div className="AgeBox">
              <div className="AgeSide">
                <p>{dateArr[date + 29]}</p>
              </div>
              <div className="AgeMiddleSide">
                <p>{dateArr[date + 30]}</p>
              </div>
              <div className="AgeMiddle">
                <p>{dateArr[date]}</p>
              </div>
              <div className="AgeMiddleSide" onClick={() => setDate(date + 1)}>
                <p>{dateArr[date + 1]}</p>
              </div>
              <div className="AgeSide" onClick={() => setDate(date + 1)}>
                <p>{dateArr[date + 2]}</p>
              </div>
            </div>
            :
            date === 29 ?
              <div className="AgeBox">
                <div className="AgeSide" onClick={() => setDate(date - 1)}>
                  <p>{dateArr[date - 2]}</p>
                </div>
                <div className="AgeMiddleSide" onClick={() => setDate(date - 1)}>
                  <p>{dateArr[date - 1]}</p>
                </div>
                <div className="AgeMiddle">
                  <p>{dateArr[date]}</p>
                </div>
                <div className="AgeMiddleSide" onClick={() => setDate(date + 1)}>
                  <p>{dateArr[date + 1]}</p>
                </div>
                <div className="AgeSide" onClick={() => setDate(date + 1)}>
                  <p>{dateArr[date - 29]}</p>
                </div>
              </div>
              :
              date === 30 ?
                <div className="AgeBox">
                  <div className="AgeSide" onClick={() => setDate(date - 1)}>
                    <p>{dateArr[date - 2]}</p>
                  </div>
                  <div className="AgeMiddleSide" onClick={() => setDate(date - 1)}>
                    <p>{dateArr[date - 1]}</p>
                  </div>
                  <div className="AgeMiddle">
                    <p>{dateArr[date]}</p>
                  </div>
                  <div className="AgeMiddleSide">
                    <p>{dateArr[date - 30]}</p>
                  </div>
                  <div className="AgeSide">
                    <p>{dateArr[date - 29]}</p>
                  </div>
                </div>
                :
                <div className="AgeBox">
                  <div className="AgeSide" onClick={() => setDate(date - 1)}>
                    <p>{dateArr[date - 2]}</p>
                  </div>
                  <div className="AgeMiddleSide" onClick={() => setDate(date - 1)}>
                    <p>{dateArr[date - 1]}</p>
                  </div>
                  <div className="AgeMiddle">
                    <p>{dateArr[date]}</p>
                  </div>
                  <div className="AgeMiddleSide" onClick={() => setDate(date + 1)}>
                    <p>{dateArr[date + 1]}</p>
                  </div>
                  <div className="AgeSide" onClick={() => setDate(date + 1)}>
                    <p>{dateArr[date + 2]}</p>
                  </div>
                </div>
        }
        <div className="AgeBoxText">
          <p>Date</p>
        </div>
        {month === 0 ?
          <div className="AgeBox">
            <div className="MonthSide">
              <p>{monthArr[month + 11]}</p>
            </div>
            <div className="MonthMiddle">
              <p>{monthArr[month]}</p>
            </div>
            <div className="MonthSide" onClick={() => setMonth(month + 1)}>
              <p>{monthArr[month + 1]}</p>
            </div>
          </div>
          :
          month === 11 ?
            <div className="AgeBox">
              <div className="MonthSide" onClick={() => setMonth(month - 1)}>
                <p>{monthArr[month - 1]}</p>
              </div>
              <div className="MonthMiddle">
                <p>{monthArr[month]}</p>
              </div>
              <div className="MonthSide">
                <p>{monthArr[month - 11]}</p>
              </div>
            </div>
            :
            <div className="AgeBox">
              <div className="MonthSide" onClick={() => setMonth(month - 1)}>
                <p>{monthArr[month - 1]}</p>
              </div>
              <div className="MonthMiddle">
                <p>{monthArr[month]}</p>
              </div>
              <div className="MonthSide" onClick={() => setMonth(month + 1)}>
                <p>{monthArr[month + 1]}</p>
              </div>
            </div>
        }
        <div className="AgeBoxText">
          <p>Month</p>
        </div>
        <div className="AgeButton">
          <Link to="/signupphoto">
            <Button color="danger">Next</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpAge;
