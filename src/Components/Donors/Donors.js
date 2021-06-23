import React, { useEffect, useState } from "react";
import "./Donors.css";
import {
  Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button
} from "reactstrap";

function Donors() {

  useEffect(() => {
    fetch("https://jsonstorage.net/api/items/39cbe52a-3b45-44a5-91c3-11fc0c4ca19f")
      .then(response => response.json())
      .then(result => setDonors(result));
  }, []);

  const [donors, setDonors] = useState([]);

  return (
    <div className="DonorsBox">
      {donors.map((data, index) =>
        <div className="CardBox" key={index}>
          <Card>
            <CardImg top height="150px" width="50%" src={data.image} alt="Card image cap" />
            <CardBody>
              <CardTitle tag="h5">{data.name}</CardTitle>
              <div className="CardSubtitle">
                <CardSubtitle tag="h6" className="mb-2 text-muted">Blood group: {data.bloodGroup}</CardSubtitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">Gender: {data.gender}</CardSubtitle>
              </div>
              <CardText>Address: {data.presentAddress}</CardText>
              <Button>Contact</Button>
            </CardBody>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Donors;
