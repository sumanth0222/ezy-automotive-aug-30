import React, { Fragment, useState } from "react";
import {
  Card,
  Col,
  Dropdown,
  Breadcrumb,
  Nav,
  Row,
  Tab,
  FormGroup,
  Form,
  Button,
  ButtonGroup,
  FormControl,
  InputGroup,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { imagesData } from "../../../common/commonimages";
import { LightGallery } from "../../../common/galleryfunctionaldata";
import { Friendsdata } from "../../../common/commondata";
import Select from 'react-select';
import { OptionTimezone } from "../../../common/selectdata";
import Pageheader from "../../../layout/layoutcomponent/pageheader";

const Profile = () => {
  const PhotobookImage = ({ url }) => (
    <React.Fragment>
      <img src={url} alt="" />
    </React.Fragment>
  );

  const [Timezone, setTimezone] = useState("");

  const handleOnchangeTimezone = (selectedOption) => {
    setTimezone(selectedOption.value);
  };

  return (
    <Fragment>
      <Pageheader title="PROFILE" heading="Pages" active="Profile" />

      <Row>
        <Col lg={12} md={12}>
          <span className=" py-0 ">
            <div className="profile-tab tab-menu-heading border-bottom-0 ">
              <Tab.Container id="left-tabs-example" defaultActiveKey="About">
                <Nav
                  variant="pills"
                  className="nav profile-tabs main-nav-line tabs-menu profile-nav-line bg-white mb-4 border-0 br-5 mb-0"
                >
                  <Nav.Item className="me-1">
                    <Nav.Link className=" mb-2 mt-2" eventKey="About">
                      Company Details
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="me-1">
                    <Nav.Link className="mb-2 mt-2" eventKey="EditProfile">
                      Subscription
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
                <Row className="row-sm">
                  <Col lg={12} md={12}>
                    <div className="card main-content-body-profile">
                      <Tab.Content>
                        <Tab.Pane eventKey="About">
                          <div className="main-content-body tab-pane active" id="about">
                            <Card className="custom-card customs-cards">
                              <Card.Body className="d-flex bg-white">
                                <div className="company-profile w-50">
                                  <div className="section">
                                    <h4 className="font-weight-semibold">Company Icon</h4>
                                    <p>This image will be used as the avatar for your company profile.</p>
                                    <ul>
                                      <li>Size Limit 200 KB</li>
                                      <li>File Types Allowed JPG, JPEG, PNG, GIF</li>
                                      <li>Recommended Dimensions 100x100 pixels</li>
                                    </ul>
                                    <div className="mb-3">
                                      <label htmlFor="formFileSm" className="form-label">
                                        Choose Image
                                      </label>
                                      <input
                                        className="form-control form-control-sm"
                                        id="formFileSm"
                                        type="file"
                                      />
                                    </div>
                                    <Button variant="" type="button" className="btn btn-success btn-w-lg mb-1">
                                      Upload
                                    </Button>
                                  </div>
                                  <div className="section">
                                    <h4 className="font-weight-semibold">Company Letterhead</h4>
                                    <p>This image will be used as the letterhead for all reports.</p>
                                    <ul>
                                      <li>Size Limit 2 MB</li>
                                      <li>File Types Allowed JPG, JPEG, PNG, GIF</li>
                                      <li>Recommended Dimensions 300x300 pixels</li>
                                    </ul>
                                    <div className="mb-3">
                                      <label htmlFor="formFileSm" className="form-label">
                                        Choose Image
                                      </label>
                                      <input
                                        className="form-control form-control-sm"
                                        id="formFileSm"
                                        type="file"
                                      />
                                    </div>
                                    <Button variant="" type="button" className="btn btn-success btn-w-lg mb-1">
                                      Upload
                                    </Button>
                                  </div>
                                </div>
                                <div className="w-50 profile-section">
                                  <span className="profile-image pos-relative">
                                    <img className="br-5" alt="" src={imagesData('female18')} />
                                    <span className="bg-success text-white wd-1 ht-1 rounded-pill profile-online"></span>
                                  </span>
                                  <div className="my-md-auto mt-4 prof-details">
                                    <h4 className="font-weight-semibold ms-md-4 ms-0 mb-1 pb-0">Sumanth</h4>
                                    <p className="tx-13 text-muted ms-md-4 ms-0 mb-2 pb-2">
                                      <span className="me-3 d-inline-block">
                                        <i className="far fa-address-card me-2 d-inline-block"></i>
                                      </span>
                                      <span className="me-3 d-inline-block">
                                        <i className="fa fa-taxi me-2 d-inline-block"></i>West Fransisco, Alabama
                                      </span>
                                      <span>
                                        <i className="far fa-flag me-2 d-inline-block"></i>New Jersey
                                      </span>
                                    </p>
                                    <p className="text-muted ms-md-4 ms-0 mb-2">
                                      <span><i className="fa fa-phone me-2"></i></span>
                                      <span className="font-weight-semibold me-2">Phone:</span><span>+94 12345 6789</span>
                                    </p>
                                    <p className="text-muted ms-md-4 ms-0 mb-2">
                                      <span><i className="fa fa-envelope me-2"></i></span>
                                      <span className="font-weight-semibold me-2">Email:</span><span></span>
                                    </p>
                                    <p className="text-muted ms-md-4 ms-0 mb-2">
                                      <span><i className="fa fa-globe me-2"></i></span>
                                      <span className="font-weight-semibold me-2">Website:</span><span>EZY MOTORS</span>
                                    </p>
                                  </div>
                                </div>
                              </Card.Body>
                            </Card>

                            <Card className="box-shadow-0">
                              <Card.Header>
                                <h4 className="card-title mb-1">Default Form</h4>
                                <p className="mb-2">
                                  It is Very Easy to Customize and it uses in your website application.
                                </p>
                              </Card.Header>
                              <Card.Body className="pt-0">
                                <Form className="form-horizontal">
                                  <Row>
                                    {/* Company Name */}
                                    <Col md={4}>
                                      <Form.Group className="form-group">
                                        <Form.Label>Company Name</Form.Label>
                                        <Form.Control
                                          type="text"
                                          className="form-control"
                                          placeholder="Norris Park Trading"
                                          required
                                        />
                                      </Form.Group>
                                    </Col>
                                    {/* Address 1 */}
                                    <Col md={4}>
                                      <Form.Group className="form-group">
                                        <Form.Label>Address 1</Form.Label>
                                        <Form.Control
                                          type="text"
                                          className="form-control"
                                          placeholder="478 Cowley Drive"
                                        />
                                      </Form.Group>
                                    </Col>
                                    {/* Address 2 */}
                                    <Col md={4}>
                                      <Form.Group className="form-group">
                                        <Form.Label>Address 2</Form.Label>
                                        <Form.Control
                                          type="text"
                                          className="form-control"
                                          placeholder="At mollitia illum odio est non ut ut libero qui"
                                        />
                                      </Form.Group>
                                    </Col>
                                  </Row>
                                  <Row>
                                    {/* City */}
                                    <Col md={4}>
                                      <Form.Group className="form-group">
                                        <Form.Label>City</Form.Label>
                                        <Form.Control
                                          type="text"
                                          className="form-control"
                                          placeholder="Eius ut dolor cumque voluptas offic"
                                        />
                                      </Form.Group>
                                    </Col>
                                    {/* State */}
                                    <Col md={2}>
                                      <Form.Group className="form-group">
                                        <Form.Label>State</Form.Label>
                                        <Form.Control as="select" className="form-control">
                                          <option>Select a state</option>
                                          {/* Add state options here */}
                                        </Form.Control>
                                      </Form.Group>
                                    </Col>
                                    {/* Zip */}
                                    <Col md={2}>
                                      <Form.Group className="form-group">
                                        <Form.Label>Zip</Form.Label>
                                        <Form.Control
                                          type="text"
                                          className="form-control"
                                          placeholder="86691"
                                        />
                                      </Form.Group>
                                    </Col>
                                    {/* Country */}
                                    <Col md={4}>
                                      <Form.Group className="form-group">
                                        <Form.Label>Country</Form.Label>
                                        <Form.Control as="select" className="form-control">
                                          <option>Select a country</option>
                                          {/* Add country options here */}
                                        </Form.Control>
                                      </Form.Group>
                                    </Col>
                                  </Row>
                                  <Row>
                                    {/* Time Zone */}
                                    <Col md={4}>
                                      <Form.Group className="form-group">
                                        <Form.Label>Time Zone</Form.Label>
                                        <Select
                                          options={OptionTimezone}
                                          value={OptionTimezone.find(option => option.value === Timezone)}
                                          onChange={handleOnchangeTimezone}
                                          placeholder="Select a time zone"
                                        />
                                      </Form.Group>
                                    </Col>
                                    {/* Currency */}
                                    <Col md={4}>
                                      <Form.Group className="form-group">
                                        <Form.Label>Currency</Form.Label>
                                        <Form.Control as="select" className="form-control">
                                          <option>Select a currency</option>
                                          {/* Add currency options here */}
                                        </Form.Control>
                                      </Form.Group>
                                    </Col>
                                  </Row>
                                  <Row>
                                    {/* Upload Logo */}
                                    <Col md={4}>
                                      <Form.Group className="form-group">
                                        <Form.Label>Upload Logo</Form.Label>
                                        <InputGroup>
                                          <Form.Control type="file" />
                                          <Button variant="outline-secondary">Upload</Button>
                                        </InputGroup>
                                      </Form.Group>
                                    </Col>
                                  </Row>
                                  {/* Save Button */}
                                  <Row>
                                    <Col md={12} className="text-right">
                                      <Button variant="primary" type="submit">
                                        Save
                                      </Button>
                                    </Col>
                                  </Row>
                                </Form>
                              </Card.Body>
                            </Card>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="EditProfile">
                          <section className="card-body col-sm-9">
                            {/* Subscription ID */}
                            <Form.Group className="form-group">
                              <Form.Label className="form-label">Subscription ID</Form.Label>
                              <Form.Control
                                type="text"
                                className="form-control"
                                value="78423106"
                                readOnly
                              />
                            </Form.Group>

                            {/* Credit Card Details */}
                            <h5>Credit Card Details</h5>
                            <Form.Group className="form-group">
                              <Row>
                                <Col sm={6}>
                                  <Form.Label className="form-label">Credit Card Type:</Form.Label>
                                  {/* Display the credit card type here, adjust accordingly */}
                                </Col>
                                <Col sm={6}>
                                  <Button className="btn btn-primary" type="button">
                                    Update
                                  </Button>
                                </Col>
                              </Row>
                              <Row>
                                <Col sm={6}>
                                  <Form.Label className="form-label">Card Number:</Form.Label>
                                  {/* Display the card number here, adjust accordingly */}
                                </Col>
                              </Row>
                              <Row>
                                <Col sm={6}>
                                  <Form.Label className="form-label">Expiration Date:</Form.Label>
                                  <span>/</span> {/* Display the expiration date here, adjust accordingly */}
                                </Col>
                              </Row>
                            </Form.Group>

                            {/* Billing Details */}
                            <h5>Billing Details</h5>
                            <Form.Group className="form-group">
                              <Row>
                                <Col sm={6}>
                                  <Form.Label className="form-label">Next Billing Date:</Form.Label>
                                </Col>
                                <Col sm={6}>
                                  <span>11/09/2024</span> {/* Display the next billing date here */}
                                </Col>
                              </Row>
                            </Form.Group>

                            {/* Subscription Details */}
                            <h5>Subscription Details</h5>
                            <Form.Group className="form-group">
                              <Row>
                                <Col sm={6}>
                                  <Form.Label className="form-label">Status:</Form.Label>
                                  <span>Trialing</span> {/* Display the subscription status */}
                                </Col>
                              </Row>
                              <Row>
                                <Col sm={6}>
                                  <Form.Label className="form-label">Current Plan:</Form.Label>
                                  <span>Gold</span> {/* Display the current plan */}
                                </Col>
                              </Row>
                              <Row>
                                <Col sm={6}>
                                  <Form.Label className="form-label">Payment Period:</Form.Label>
                                  <span>Monthly</span> {/* Display the payment period */}
                                </Col>
                              </Row>
                              <Row>
                                <Col sm={6}>
                                  <Form.Label className="form-label">Next Charge Amount:</Form.Label>
                                  <span>$119.99</span> {/* Display the next charge amount */}
                                </Col>
                              </Row>
                              <Row>
                                <Col sm={6}>
                                  <Form.Label className="form-label">Dealership:</Form.Label>
                                </Col>
                                <Col sm={6}>
                                  <Button className="btn btn-warning" type="button">
                                    Add Dealership
                                  </Button>
                                </Col>
                              </Row>
                              <Row>
                                <Col sm={6}>
                                  <Button className="btn btn-success" type="button">
                                    Go Yearly & Save
                                  </Button>
                                </Col>
                                <Col sm={6}>
                                  <Button className="btn btn-secondary" type="button">
                                    Upgrade your subscription! Click here to find out more.
                                  </Button>
                                </Col>
                              </Row>
                            </Form.Group>
                          </section>

                        </Tab.Pane>
                      </Tab.Content>
                    </div>
                  </Col>
                </Row>
              </Tab.Container>
            </div>
          </span>
        </Col>
      </Row>

      <Row className=" row-sm">
        <Col lg={12} md={12}>
          <div className="tab-content"></div>

        </Col>
      </Row>
    </Fragment>
  );
};

export default Profile;





