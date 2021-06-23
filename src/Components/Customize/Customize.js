import React, { useState, useEffect } from "react";
import "./Customize.css";
import {
  Col, Button, Form, FormGroup, Label, Input
} from "reactstrap";

function Customize() {

  useEffect(() => {
    fetch("https://jsonstorage.net/api/items/3306927a-1a56-4c11-97de-97fa00ddfcae")
      .then(response => response.json())
      .then(result => setUser(result));
  }, []);

  const [user, setUser] = useState([]);

  return (
    <div className="Customize">
      <div className="CustomizeHeader">
        <h2>User infomation</h2>
      </div>
      {user.map((data, index) =>
        <Form key={index}>
          <FormGroup row>
            <Label for="name" sm={4}>Name :</Label>
            <Col sm={8}>
              <Input type="text" name="text" id="name" defaultValue={data.name} placeholder="John Doe" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="photo" sm={4}>Upload photo :</Label>
            <Col sm={8}>
              <Input type="file" name="file" id="photo" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="phone" sm={4}>Mobile number :</Label>
            <Col sm={8}>
              <Input type="tel" name="tel" id="phone" defaultValue={data.mobile} placeholder="01712123456" pattern="[0-9]{11}" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="phone" sm={4}>Other mobile number :</Label>
            <Col sm={8}>
              <Input type="tel" name="tel" id="phone" defaultValue={data.alternateMobileNumber} placeholder="01712123456" pattern="[0-9]{11}" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="email" sm={4}>Email :</Label>
            <Col sm={8}>
              <Input type="email" name="email" id="email" defaultValue={data.email} placeholder="johndoe@gmail.com" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="blood" sm={4}>Blood group :</Label>
            <Col sm={8}>
              <Input type="select" name="select" id="blood">
                <option disabled>{data.bloodGroup}</option>
                <option>A+</option>
                <option>A-</option>
                <option>B+</option>
                <option>B-</option>
                <option>O+</option>
                <option>O-</option>
                <option>AB+</option>
                <option>AB-</option>
              </Input>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="gender" sm={4}>Gender :</Label>
            <Col sm={8}>
              <Input type="select" name="select" id="gender">
                <option disabled>{data.gender}</option>
                <option>Male</option>
                <option>Female</option>
              </Input>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="religion" sm={4}>Religion :</Label>
            <Col sm={8}>
              <Input type="select" name="select" id="religion">
                <option disabled>{data.religion}</option>
                <option>Islam</option>
                <option>Christian</option>
                <option>Buddhist</option>
                <option>Hindu</option>
                <option>Other</option>
              </Input>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="date" sm={4}>Date of birth :</Label>
            <Col sm={8}>
              <Input
                type="date"
                name="date"
                id="date"
                defaultValue={new Date(Date.parse(data.dateOfBirth)).toISOString().slice(0, 10)}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="weight" sm={4}>Weight :</Label>
            <Col sm={8}>
              <Input type="number" name="number" id="weight" defaultValue={data.weight} placeholder="65" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="address" sm={4}>Address :</Label>
            <Col sm={8}>
              <Input type="text" name="address" id="address" defaultValue={data.presentAddress} placeholder="Street, union, post office, police station, district, country" />
            </Col>
          </FormGroup>
          <FormGroup check row>
            <Col sm={12}>
              <Button>Update</Button>
            </Col>
          </FormGroup>
        </Form>
      )}
    </div>
  );
};

export default Customize;
