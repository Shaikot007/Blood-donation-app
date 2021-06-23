import React from "react";
import "./HomeRequest.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProfileImage from "../Images/Profile_photo.png";
import { Link } from "react-router-dom";
import Ambulance from "../Images/Ambulance.png";
import FirstAidKit from "../Images/First_aid_kit.jpg";
import PostRequest from "../Images/Post_request.png";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";

function HomeRequest() {
  return (
    <div className="HomeRequest">
      <div className="HomeRequestHeader">
        <div className="HomeRequestReturn">
          <div className="HomeRequestReturnArrow">
            <Link to="/homecampaign">
              <FontAwesomeIcon className="HomeRequestLeftArrow" icon="arrow-left" size="sm" />
            </Link>
          </div>
          <div className="HomeRequestReturnText">
            <p>Request</p>
          </div>
        </div>
        <div className="HomeRequestProfileBar">
          <div className="HomeRequestUserName">
            <div className="RequestName">
              <p>John Doe</p>
            </div>
            <div className="HomeRequestUserRate">
              <p>Top rated donor</p>
            </div>
          </div>
        </div>
        <div className="HomeRequestUserImage">
          <img src={ProfileImage} alt="User" />
        </div>
        <div className="HomeRequestUserProfile">
          <FontAwesomeIcon className="HomeRequestEllipsisV" icon="ellipsis-v" size="sm" />
        </div>
      </div>
      <div className="HomeRequestBox">
        <div className="MyRequest">
          <div className="HomeRequestMenuIcon">
            <div className="HomeRequestMenuItem">
              <div className="HomeRequestImage">
                <img src={Ambulance} alt="Ambulance" />
                <div className="HomeRequestCount">
                  <p>3</p>
                </div>
              </div>
              <div className="HomeRequestName">
                <p>Urgent Request</p>
              </div>
            </div>
            <div className="HomeRequestMenuItem">
              <div className="HomeRequestImage">
                <img src={FirstAidKit} alt="First-aid-kit" />
                <div className="HomeRequestCount">
                  <p>2</p>
                </div>
              </div>
              <div className="HomeRequestName">
                <p>My Request</p>
              </div>
            </div>
            <div className="HomeRequestMenuItem">
              <div className="HomeRequestImage">
                <img src={PostRequest} alt="Post-request" />
                <div className="HomeRequestCount">
                  <p>1</p>
                </div>
              </div>
              <div className="HomeRequestName">
                <p>Post Request</p>
              </div>
            </div>
          </div>
          <div className="HomeUrgentRequest">
            <div className="HomeUrgentRequestHeader">
              <h6>Urgent Requests</h6>
            </div>
            <div className="UrgentRequestSchedule">
              <div className="ScheduleUpper">
                <div className="ScheduleBoxLeft">
                  <h6>Scheduled</h6>
                  <p>at SUN 11:30 PM</p>
                </div>
                <div className="ScheduleBoxRight">
                  <div className="ScheduleBoxUpperRight">
                    <Button>Contact</Button>
                    <FontAwesomeIcon className="ScheduleIcon" icon="share-alt" size="sm" />
                  </div>
                  <p><strong>O+</strong></p>
                </div>
              </div>
              <div className="ScheduleLower">
                <div className="ScheduleBoxLeft">
                  <p><strong>Jarin Hospital</strong> 3km Away</p>
                  <p><FontAwesomeIcon icon="map-marker-alt" size="sm" /> 21/3, Los Angelos, CA</p>
                </div>
                <div className="ScheduleBoxLowerRight">
                  <p>1 min ago</p>
                  <p><FontAwesomeIcon icon="user" size="sm" /> Brother</p>
                </div>
              </div>
            </div>
            <div className="UrgentRequestSchedule">
              <div className="ScheduleUpper">
                <div className="ScheduleBoxLeft">
                  <h6>Scheduled</h6>
                  <p>at SUN 11:30 PM</p>
                </div>
                <div className="ScheduleBoxRight">
                  <div className="ScheduleBoxUpperRight">
                    <Button>Contact</Button>
                    <FontAwesomeIcon className="ScheduleIcon" icon="share-alt" size="sm" />
                  </div>
                  <p><strong>O+</strong></p>
                </div>
              </div>
              <div className="ScheduleLower">
                <div className="ScheduleBoxLeft">
                  <p><strong>Jarin Hospital</strong> 3km Away</p>
                  <p><FontAwesomeIcon icon="map-marker-alt" size="sm" /> 21/3, Los Angelos, CA</p>
                </div>
                <div className="ScheduleBoxLowerRight">
                  <p>1 min ago</p>
                  <p><FontAwesomeIcon icon="user" size="sm" /> Brother</p>
                </div>
              </div>
            </div>
          </div>
          <div className="HomeUrgentRequest">
            <div className="HomeUrgentRequestHeader">
              <h6>My Requests</h6>
            </div>
            <div className="UrgentRequestSchedule">
              <div className="ScheduleUpper">
                <div className="ScheduleBoxLeft">
                  <h6>Scheduled</h6>
                  <p>Expired</p>
                </div>
                <div className="ScheduleBoxRight">
                  <div className="ScheduleBoxUpperRight">
                    <Button>Managed</Button>
                    <FontAwesomeIcon className="ScheduleIcon" icon="trash" size="sm" />
                  </div>
                  <p><strong>O+</strong></p>
                </div>
              </div>
              <div className="ScheduleLower">
                <div className="ScheduleBoxLeft">
                  <p><strong>Jarin Hospital</strong> 3km Away</p>
                  <p><FontAwesomeIcon icon="map-marker-alt" size="sm" /> 21/3, Los Angelos, CA</p>
                </div>
                <div className="ScheduleBoxLowerRight">
                  <p>1 min ago</p>
                  <p><FontAwesomeIcon icon="user" size="sm" /> Brother</p>
                </div>
              </div>
            </div>
            <div className="UrgentRequestSchedule">
              <div className="ScheduleUpper">
                <div className="ScheduleBoxLeft">
                  <h6>Schedule</h6>
                  <p>at SUN 11:30 PM</p>
                </div>
                <div className="ScheduleBoxRight">
                  <div className="ScheduleBoxUpperRight">
                    <Button>Edit</Button>
                    <FontAwesomeIcon className="ScheduleIcon" icon="share-alt" size="sm" />
                  </div>
                  <p><strong>O+</strong></p>
                </div>
              </div>
              <div className="ScheduleLower">
                <div className="ScheduleBoxLeft">
                  <p><strong>Jarin Hospital</strong> 3km Away</p>
                  <p><FontAwesomeIcon icon="map-marker-alt" size="sm" /> 21/3, Los Angelos, CA</p>
                </div>
                <div className="ScheduleBoxLowerRight">
                  <p>1 min ago</p>
                  <p><FontAwesomeIcon icon="user" size="sm" /> Brother</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="PublishRequest">
          <div className="HomeBloodRequest">
            <div className="RequestBlood">
              <div className="RequestBloodText">
                <h6>Blood Request</h6>
              </div>
              <div className="RequestBloodForm">
                <Form>
                  <FormGroup>
                    <Label for="address">Area or city</Label>
                    <Input type="text" name="address" id="address" placeholder="New York" />
                  </FormGroup>
                  <Row form>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="bloodGroup">Blood Group</Label>
                        <Input type="select" name="select" id="bloodGroup">
                          <option>A+</option>
                          <option>A-</option>
                          <option>B+</option>
                          <option>B-</option>
                          <option>O+</option>
                          <option>O-</option>
                          <option>AB+</option>
                          <option>AB-</option>
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="relation">I am his/her</Label>
                        <Input type="select" name="select" id="relation">
                          <option>Father</option>
                          <option>Mother</option>
                          <option>Brother</option>
                          <option>Sister</option>
                          <option>Relatives</option>
                          <option>Other</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row form>
                    <Col md={6}>
                      <FormGroup>
                        <Button>Urgent</Button>
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Button>Schedule</Button>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Button>Publish</Button>
                </Form>
              </div>
            </div>
            <div className="RecentHistory">
              <div className="RecentHistoryText">
                <h6>Recent History</h6>
              </div>
              <div className="RecentHistoryBox">
                <div className="HistoryBoxItem">
                  <Button>O+</Button>
                  <h6>Los Angeles</h6>
                  <p>Urgent</p>
                </div>
                <div className="HistoryBoxItem">
                  <Button>A+</Button>
                  <h6>Los Angeles</h6>
                  <p>Schedule</p>
                </div>
                <div className="HistoryBoxItem">
                  <Button>O+</Button>
                  <h6>Los Angeles</h6>
                  <p>Urgent</p>
                </div>
              </div>
            </div>
          </div>
          <div className="HomeRecentRequest">
            <div className="HomeRecentRequestText">
              <h6>Recent Requests</h6>
            </div>
            <div className="RecentRequestBox">
              <div className="RecentRequestSchedule">
                <div className="ScheduleUpper">
                  <div className="ScheduleBoxLeft">
                    <h6>Scheduled</h6>
                    <p>at SUN 11:30 PM</p>
                  </div>
                  <div className="ScheduleBoxRight">
                    <div className="ScheduleBoxUpperRight">
                      <Button>Contact</Button>
                      <FontAwesomeIcon className="ScheduleIcon" icon="share-alt" size="sm" />
                    </div>
                    <p><strong>O+</strong></p>
                  </div>
                </div>
                <div className="ScheduleLower">
                  <div className="ScheduleBoxLeft">
                    <p><strong>Jarin Hospital</strong> 3km Away</p>
                    <p><FontAwesomeIcon icon="map-marker-alt" size="sm" /> 21/3, Los Angelos, CA</p>
                  </div>
                  <div className="ScheduleBoxLowerRight">
                    <p>1 min ago</p>
                    <p><FontAwesomeIcon icon="user" size="sm" /> Brother</p>
                  </div>
                </div>
              </div>
              <div className="RecentRequestSchedule">
                <div className="ScheduleUpper">
                  <div className="ScheduleBoxLeft">
                    <h6>Scheduled</h6>
                    <p>at SUN 11:30 PM</p>
                  </div>
                  <div className="ScheduleBoxRight">
                    <div className="ScheduleBoxUpperRight">
                      <Button>Contact</Button>
                      <FontAwesomeIcon className="ScheduleIcon" icon="share-alt" size="sm" />
                    </div>
                    <p><strong>O+</strong></p>
                  </div>
                </div>
                <div className="ScheduleLower">
                  <div className="ScheduleBoxLeft">
                    <p><strong>Jarin Hospital</strong> 3km Away</p>
                    <p><FontAwesomeIcon icon="map-marker-alt" size="sm" /> 21/3, Los Angelos, CA</p>
                  </div>
                  <div className="ScheduleBoxLowerRight">
                    <p>1 min ago</p>
                    <p><FontAwesomeIcon icon="user" size="sm" /> Brother</p>
                  </div>
                </div>
              </div>
              <div className="RecentRequestSchedule">
                <div className="ScheduleUpper">
                  <div className="ScheduleBoxLeft">
                    <h6>Scheduled</h6>
                    <p>at SUN 11:30 PM</p>
                  </div>
                  <div className="ScheduleBoxRight">
                    <div className="ScheduleBoxUpperRight">
                      <Button>Contact</Button>
                      <FontAwesomeIcon className="ScheduleIcon" icon="share-alt" size="sm" />
                    </div>
                    <p><strong>O+</strong></p>
                  </div>
                </div>
                <div className="ScheduleLower">
                  <div className="ScheduleBoxLeft">
                    <p><strong>Jarin Hospital</strong> 3km Away</p>
                    <p><FontAwesomeIcon icon="map-marker-alt" size="sm" /> 21/3, Los Angelos, CA</p>
                  </div>
                  <div className="ScheduleBoxLowerRight">
                    <p>1 min ago</p>
                    <p><FontAwesomeIcon icon="user" size="sm" /> Brother</p>
                  </div>
                </div>
              </div>
              <div className="RecentRequestSchedule">
                <div className="ScheduleUpper">
                  <div className="ScheduleBoxLeft">
                    <h6>Scheduled</h6>
                    <p>at SUN 11:30 PM</p>
                  </div>
                  <div className="ScheduleBoxRight">
                    <div className="ScheduleBoxUpperRight">
                      <Button>Contact</Button>
                      <FontAwesomeIcon className="ScheduleIcon" icon="share-alt" size="sm" />
                    </div>
                    <p><strong>O+</strong></p>
                  </div>
                </div>
                <div className="ScheduleLower">
                  <div className="ScheduleBoxLeft">
                    <p><strong>Jarin Hospital</strong> 3km Away</p>
                    <p><FontAwesomeIcon icon="map-marker-alt" size="sm" /> 21/3, Los Angelos, CA</p>
                  </div>
                  <div className="ScheduleBoxLowerRight">
                    <p>1 min ago</p>
                    <p><FontAwesomeIcon icon="user" size="sm" /> Brother</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeRequest;
