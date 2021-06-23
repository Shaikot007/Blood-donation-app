import React from "react";
import "./Search.css";
import { Col, Row, Form, FormGroup, Input } from "reactstrap";

function Search() {
  return (
    <Form>
      <Row form>
        <Col md={7}>
          <FormGroup>
            <Input type="email" name="email" placeholder="John Doe" />
          </FormGroup>
        </Col>
        <Col md={2}>
          <FormGroup>
            <Input type="select" name="select">
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
        <Col md={3}>
          <FormGroup>
            <Input type="select" name="select">
              <option>Donors</option>
              <option>Hospitals</option>
            </Input>
          </FormGroup>
        </Col>
      </Row>
    </Form>
  );
};

export default Search;
