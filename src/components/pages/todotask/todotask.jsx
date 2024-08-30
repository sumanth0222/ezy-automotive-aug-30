import React, { Fragment, useState } from 'react';
import { Button, ButtonGroup, Collapse, Dropdown, Form, InputGroup, Row, Col, Card, Tooltip, OverlayTrigger, Nav, Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ToggleButton } from 'react-bootstrap';
import Pageheader from '../../../layout/layoutcomponent/pageheader';
import { Tododata, vehicleData } from '../../../common/commondata';
import SunEditor from 'suneditor-react'; // Make sure you have this installed
import 'suneditor/dist/css/suneditor.min.css'; // Import SunEditor styles




const Todotask = () => {
  const [expanded, setExpanded] = useState(false);
  const [allData, setAllData] = useState(Tododata);
  const [formOpen, setFormOpen] = useState(false);
  const [radioValue, setRadioValue] = useState('individual');
  const [value, setValue] = useState(''); // State for SunEditor

  // Invoice State
  const [rows, setRows] = useState([
    { product: 'LAB', description: 'Labour', unitPrice: 0, qty: 1, tax: 0, lineTotal: 0 }
  ]);

  // Toggle the expand state
  const handleExpandClick = () => setExpanded(!expanded);

  // Toggle the form visibility
  const handleFormOpenClick = () => setFormOpen(!formOpen);

  // Function to filter data based on user input
  const myfunction = (query) => {
    if (!query) {
      setAllData(Tododata); // Reset if query is empty
      return;
    }
    const filteredData = Tododata.filter((data) =>
      data.text.trim().toLowerCase().startsWith(query.trim().toLowerCase())
    );
    setAllData(filteredData); // Update state with filtered data
  };

  // Invoice Handling Functions
  const handleAddRow = () => {
    setRows([...rows, { product: '', description: '', unitPrice: 0, qty: 1, tax: 0, lineTotal: 0 }]);
  };
  const handleRemoveRow = () => {
    if (rows.length > 1) {
      setRows(rows.slice(0, -1)); // Remove the last row
    } else {
      alert("At least one product should be present.");
    }
  };


  const handleRowChange = (index, field, value) => {
    const updatedRows = rows.map((row, i) =>
      i === index ? { ...row, [field]: value } : row
    );
    setRows(updatedRows);
  };

  const calculateTotals = () => {
    const subtotal = rows.reduce((sum, row) => sum + (row.unitPrice * row.qty), 0);
    const tax = subtotal * 0.1;
    const total = subtotal + tax;
    return { subtotal, tax, total };
  };

  const totals = calculateTotals();
  const idx = { color: 'primary' };
  const ide = { color: 'danger' };

  return (
    <Fragment>
      <Pageheader title="Customer Booking" heading="Pages" active="Customer Booking" />

      <Tab.Container id="left-tabs-example" defaultActiveKey="TabStyle01">
        <Row>
          <Col md={12} xl={12} lg={12}>
            <Card>
              <Nav variant="pills" className="flex-column">
                <div className="list-group list-group-transparent mb-0 mail-inbox">
                  <Row>
                    <Col md={6} xl={6} lg={6}>
                      <Nav.Item>
                        <Nav.Link
                          eventKey="TabStyle01"
                          className="list-group-item d-flex align-items-center justify-content-between border-0"
                        >
                          <div className="d-flex align-items-center">
                            <i className="fe fe-codepen fs-18 me-4 p-2 border-primary brround bg-primary-transparent text-primary"></i>
                            Select A Customer
                          </div>
                          <div className="d-flex align-items-center">
                            <div className="form-group mt-3 mx-2">
                              <InputGroup className="input-group">
                                <Form.Control
                                  type="text"
                                  placeholder="Search here..."
                                  onChange={(e) => myfunction(e.target.value)}
                                />
                                <Button type="button" className="btn btn-primary">
                                  <i className="fa fa-search" aria-hidden="true"></i>
                                </Button>
                              </InputGroup>
                            </div>
                            <Button
                              variant="outline-primary"
                              className="ms-2"
                              onClick={handleFormOpenClick}
                            >
                              <i className='fa fa-user-plus' />
                            </Button>
                          </div>
                        </Nav.Link>
                      </Nav.Item>
                    </Col>
                    <Col md={6} xl={6} lg={6}>
                      {/* Select A Vehicle Section */}
                      <Nav.Item>
                        <Nav.Link
                          eventKey="TabStyle02"
                          className="list-group-item d-flex align-items-center justify-content-between border-0"
                        >
                          <div className="d-flex align-items-center">
                            <i className="fe fe-alert-octagon fs-18 me-4 p-2 border-warning brround bg-warning-transparent text-warning"></i>
                            Select A Vehicle (Optional)
                          </div>
                          <div className="d-flex align-items-center">
                            <div className="form-group mt-3 mx-2">
                              <InputGroup className="input-group">
                                <Form.Control
                                  type="text"
                                  placeholder="Search here..."
                                  onChange={(e) => myVehicleSearchFunction(e.target.value)}
                                />
                                <Button type="button" className="btn btn-warning">
                                  <i className="fa fa-search" aria-hidden="true"></i>
                                </Button>
                              </InputGroup>

                            </div>
                            <Button variant="outline-primary" onClick={handleFormOpenClick}>
                              <i className='fa fa-car' />
                            </Button>
                            {/* <span className="badge bg-danger ms-2">6</span> */}
                          </div>
                        </Nav.Link>
                      </Nav.Item>
                    </Col>
                  </Row>
                  {/* Select A Customer Section */} 




                </div>
              </Nav>
            </Card>
          </Col>



          <Col xl={12} md={12}>
            <Tab.Content>
              {/* Customer Selection Tab */}
              <Tab.Pane eventKey="TabStyle01">
                <Row className="row-sm g-4">
                  <Col lg={12} md={12} sm={12}>


                    <h3>Customer Details Here:</h3>
                    {/* <Card.Body className="d-flex p-3">
                        <div className="main-content-label mb-0 mg-t-8">Search Customers</div>
                        <div className="ms-auto">
                          <Link
                            className="d-block tx-20"
                            data-placement="top"
                            data-bs-toggle="tooltip"
                            title="Search Customer"
                            to="#"
                          >
                            <OverlayTrigger placement="top" overlay={<Tooltip>Search Customer</Tooltip>}>
                              <i className="si si-plus text-muted" onClick={handleExpandClick}></i>
                            </OverlayTrigger>
                          </Link>


                        </div>
                      </Card.Body> */}

                    {/* <Collapse in={expanded}>
                        <div className="form-group mx-4">
                          <InputGroup className="input-group mb-5 float-end">
                            <Form.Control
                              type="text"
                              placeholder="Search here..."
                              onChange={(e) => myfunction(e.target.value)}
                            />
                            <Button type="button" className="btn btn-primary">
                              <i className="fa fa-search" aria-hidden="true"></i>
                            </Button>
                          </InputGroup>
                        </div>
                      </Collapse> */}

                  </Col>

                  <Col lg={12} md={12} sm={12}>


                    {/* <Button variant="outline-primary" onClick={handleFormOpenClick}>
                      Add New Customer
                    </Button> */}
                    <Collapse in={formOpen}>
                      <Card>
                        <div className='px-4'>

                          {/* Toggle option button for Individual and Company */}
                          <ButtonGroup className="mb-3">
                            <ToggleButton
                              id="radio-individual"
                              type="radio"
                              variant={radioValue === 'individual' ? 'primary' : 'outline-primary'}
                              name="radio"
                              value="individual"
                              checked={radioValue === 'individual'}
                              onChange={(e) => setRadioValue(e.currentTarget.value)}
                            >
                              Individual
                            </ToggleButton>
                            <ToggleButton
                              id="radio-company"
                              type="radio"
                              variant={radioValue === 'company' ? 'primary' : 'outline-primary'}
                              name="radio"
                              value="company"
                              checked={radioValue === 'company'}
                              onChange={(e) => setRadioValue(e.currentTarget.value)}
                            >
                              Company
                            </ToggleButton>
                          </ButtonGroup>

                          {radioValue === 'individual' && (
                            <Form>
                              <Row>
                                <Col md={6}>
                                  <Form.Group className="mb-3" controlId="formField1">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" placeholder="" />
                                  </Form.Group>
                                </Col>
                                <Col md={6}>
                                  <Form.Group className="mb-3" controlId="formField2">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" placeholder="" />
                                  </Form.Group>
                                </Col>
                              </Row>

                              <Row>
                                <Col md={6}>
                                  <Form.Group className="mb-3" controlId="formField3">
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control type="text" placeholder="" />
                                  </Form.Group>
                                </Col>
                                <Col md={6}>
                                  <Form.Group className="mb-3" controlId="formField4">
                                    <Form.Label>Cell</Form.Label>
                                    <Form.Control type="text" placeholder="" />
                                  </Form.Group>
                                </Col>
                              </Row>

                              <Row>
                                <Col md={6}>
                                  <Form.Group className="mb-3" controlId="formField5">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="text" placeholder="" />
                                  </Form.Group>
                                </Col>
                                <Col md={6}>
                                  <Form.Group className="mb-3" controlId="formField6">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control type="text" placeholder="" />
                                  </Form.Group>
                                </Col>
                              </Row>

                              <Row>
                                <Col md={6}>
                                  <Form.Group className="mb-3" controlId="formField7">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control type="text" placeholder="" />
                                  </Form.Group>
                                </Col>
                                <Col md={6}>
                                  <Form.Group className="mb-3" controlId="formField8">
                                    <Form.Label>State</Form.Label>
                                    <Form.Select aria-label="Select State">
                                      <option value="">Select State</option>
                                      <option value="AL">Alabama</option>
                                      <option value="CA">California</option>
                                      <option value="NY">New York</option>
                                      <option value="TX">Texas</option>
                                      <option value="FL">Florida</option>
                                      {/* Add more states as needed */}
                                    </Form.Select>
                                  </Form.Group>
                                </Col>
                              </Row>

                              <Row>
                                <Col md={6}>
                                  <Form.Group className="mb-3" controlId="formField9">
                                    <Form.Label>Zip Code</Form.Label>
                                    <Form.Control type="text" placeholder="" />
                                  </Form.Group>
                                </Col>
                                <Col md={6}>
                                  <Form.Group className="mb-3" controlId="formField10">
                                    <Form.Label>Price Type</Form.Label>
                                    <Form.Select aria-label="Select Price Type">
                                      <option value="">Select Price Type</option>
                                      <option value="standard">Standard</option>
                                      <option value="premium">Premium</option>
                                      <option value="discount">Discount</option>
                                      <option value="custom">Custom</option>
                                      {/* Add more price types as needed */}
                                    </Form.Select>
                                  </Form.Group>
                                </Col>
                              </Row>

                              <Row>
                                <Col md={12} className="d-flex justify-content-between">
                                  <Button variant="secondary" onClick={handleFormOpenClick}>
                                    Cancel
                                  </Button>
                                  <Button type="submit" className="me-2">
                                    Submit
                                  </Button>
                                </Col>
                              </Row>
                            </Form>
                          )}

                          {radioValue === 'company' && (
                            <Form>
                              <Row>
                                <Col md={12}>
                                  <Form.Group className="mb-3" controlId="formFieldCompanyName">
                                    <Form.Label>Company Name</Form.Label>
                                    <Form.Control type="text" placeholder="" />
                                  </Form.Group>
                                </Col>
                              </Row>

                              <Row>
                                <Col md={6}>
                                  <Form.Group className="mb-3" controlId="formFieldPhone">
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control type="text" placeholder="" />
                                  </Form.Group>
                                </Col>
                                <Col md={6}>
                                  <Form.Group className="mb-3" controlId="formFieldCell">
                                    <Form.Label>Cell</Form.Label>
                                    <Form.Control type="text" placeholder="" />
                                  </Form.Group>
                                </Col>
                              </Row>

                              <Row>
                                <Col md={6}>
                                  <Form.Group className="mb-3" controlId="formFieldEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="text" placeholder="" />
                                  </Form.Group>
                                </Col>
                                <Col md={6}>
                                  <Form.Group className="mb-3" controlId="formFieldAddress">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control type="text" placeholder="" />
                                  </Form.Group>
                                </Col>
                              </Row>

                              <Row>
                                <Col md={6}>
                                  <Form.Group className="mb-3" controlId="formFieldCity">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control type="text" placeholder="" />
                                  </Form.Group>
                                </Col>
                                <Col md={6}>
                                  <Form.Group className="mb-3" controlId="formFieldState">
                                    <Form.Label>State</Form.Label>
                                    <Form.Select aria-label="Select State">
                                      <option value="">Select State</option>
                                      <option value="AL">Alabama</option>
                                      <option value="CA">California</option>
                                      <option value="NY">New York</option>
                                      <option value="TX">Texas</option>
                                      <option value="FL">Florida</option>
                                      {/* Add more states as needed */}
                                    </Form.Select>
                                  </Form.Group>
                                </Col>
                              </Row>

                              <Row>
                                <Col md={6}>
                                  <Form.Group className="mb-3" controlId="formFieldZipCode">
                                    <Form.Label>Zip Code</Form.Label>
                                    <Form.Control type="text" placeholder="" />
                                  </Form.Group>
                                </Col>
                                <Col md={6}>
                                  <Form.Group className="mb-3" controlId="formFieldPriceType">
                                    <Form.Label>Price Type</Form.Label>
                                    <Form.Select aria-label="Select Price Type">
                                      <option value="">Select Price Type</option>
                                      <option value="standard">Standard</option>
                                      <option value="premium">Premium</option>
                                      <option value="discount">Discount</option>
                                      <option value="custom">Custom</option>
                                      {/* Add more price types as needed */}
                                    </Form.Select>
                                  </Form.Group>
                                </Col>
                              </Row>

                              <Row>
                                <Col md={12} className="d-flex justify-content-between">
                                  <Button variant="secondary" onClick={handleFormOpenClick}>
                                    Cancel
                                  </Button>
                                  <Button type="submit" className="me-2">
                                    Submit
                                  </Button>
                                </Col>
                              </Row>

                            </Form>
                          )}
                        </div>
                      </Card>
                    </Collapse>
                  </Col>

                  {/* Displaying Filtered Customers */}
                  {allData.map((playerData, index) => (
                    <Col xl={12} lg={12} md={12} sm={12} key={index}>
                      <Card className="mg-b-20">
                        <Card.Body className="p-0">
                          <div className="todo-widget-header d-flex align-items-center pb-3 pd-20 border-bottom">
                            <Dropdown>
                              <Dropdown.Toggle as="a" variant="" className="drop-down-profile">
                                <img alt="" className="rounded-circle avatar avatar-md shadow" src={playerData.img} />
                                <span className={`assigned-task bg-${playerData.color}`}>{playerData.num}</span>
                              </Dropdown.Toggle>
                              <Dropdown.Menu className="dropdown-menu tx-13">
                                <div className="main-header-profile">
                                  <div className="tx-16 h5 mg-b-0">EZY Motors</div>
                                  <span>Welcome</span>
                                </div>
                                {/* <Dropdown.Item href="#">View Total Tasks</Dropdown.Item>
                                <Dropdown.Item href="#">Completed Tasks</Dropdown.Item> */}
                                <Dropdown.Item href="#">Settings</Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                            <div className="ms-auto">
                              <div className="card-options-task">
                                <Dropdown as="span">
                                  <Dropdown.Toggle variant="" as="a" className="p-2 border br-5 text-primary">
                                    <i className="fe fe-more-vertical align-middle"></i>
                                  </Dropdown.Toggle>
                                  <Dropdown.Menu className="tx-13 dropleft">
                                    <Dropdown.Item href="#">Mark As Unread</Dropdown.Item>
                                    <Dropdown.Item href="#">Mark As Important</Dropdown.Item>
                                    <Dropdown.Item href="#">Move to</Dropdown.Item>
                                    <Dropdown.Item href="#">Move to Trash</Dropdown.Item>
                                  </Dropdown.Menu>
                                </Dropdown>
                              </div>
                            </div>
                          </div>
                          <div className="p-4">
                            <Row>
                              <Col md={4}>
                                <h6>Customer Information</h6>
                                <p>{playerData.text}</p> {/* Name */}
                                <p>{playerData.text2}</p> {/* Address */}
                                <p>{playerData.extraInfo}</p> {/* Extra Info */}
                              </Col>
                              <Col md={4}>
                                <h6>Customer Contact</h6>
                                <p>
                                  <i className="fa fa-phone" aria-hidden="true"></i> {playerData.phone}
                                </p>
                                <p>
                                  <i className="fa fa-envelope" aria-hidden="true"></i> {playerData.email}
                                </p>
                                <p>
                                  <i className="fa fa-link" aria-hidden="true"></i> {playerData.website}
                                </p>
                              </Col>
                              <Col md={4}>
                                <h6>Customer Address</h6>
                                <p>
                                  <i className="fa fa-map-marker" aria-hidden="true"></i> {playerData.location}
                                </p>
                              </Col>
                            </Row>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Tab.Pane>


              {/* Vehicle Selection Tab */}
              <Tab.Pane eventKey="TabStyle02">
                <Row className="row-sm g-4">
                  <Col lg={12} md={12} sm={12}>


                    <h3>Vehicle Details Here :</h3>
                    {/* <Card.Body className="d-flex p-3">
                        <div className="main-content-label mb-0 mg-t-8">Search Vehicle</div>
                        <div className="ms-auto">
                          <Link className="d-block tx-20" data-placement="top" data-bs-toggle="tooltip" title="Add New Vehicle" to="#">
                            <OverlayTrigger placement="top" overlay={<Tooltip>Add New Vehicle</Tooltip>}>
                              <i className="si si-plus text-muted" onClick={handleExpandClick}></i>
                            </OverlayTrigger>
                          </Link>
                        </div>
                      </Card.Body> */}
                    {/* <Collapse in={expanded}>
                        <div className="form-group mx-4">
                          <InputGroup className="input-group mb-5 float-end">
                            <Form.Control type="text" placeholder="Search here..." onChange={(e) => myfunction(e.target.value)} />
                            <Button type="button" className="btn btn-primary">
                              <i className="fa fa-search" aria-hidden="true"></i>
                            </Button>
                          </InputGroup>
                        </div>
                      </Collapse> */}

                  </Col>


                  <Col lg={12} md={12} sm={12}>


                    {/* <Button variant="outline-primary" onClick={handleFormOpenClick}>
                      Add New Vehicle
                    </Button> */}
                    <Collapse in={formOpen}>
                      <Card>
                        <div className='px-4'>

                          {
                            <Form>
                              <Row>
                                <Col md={4}>
                                  <Form.Group className="mb-3" controlId="formField1">
                                    <Form.Label>Rego</Form.Label>
                                    <Form.Control type="text" placeholder="" />
                                  </Form.Group>
                                </Col>
                                <Col md={4}>
                                  <Form.Group className="mb-3" controlId="formField8">
                                    <Form.Label>State</Form.Label>
                                    <Form.Select aria-label="Select State">
                                      <option value="">Select State</option>
                                      <option value="AL">Alabama</option>
                                      <option value="CA">California</option>
                                      <option value="NY">New York</option>
                                      <option value="TX">Texas</option>
                                      <option value="FL">Florida</option>
                                      {/* Add more states as needed */}
                                    </Form.Select>
                                  </Form.Group>
                                </Col>
                                <Col md={4}>
                                  <Form.Group className="mb-3" controlId="formField1">
                                    <Form.Label>VIN</Form.Label>
                                    <Form.Control type="text" placeholder="" />
                                  </Form.Group>
                                </Col>
                              </Row>


                              <Row>
                                <Col md={4}>
                                  <Form.Group className="mb-3" controlId="formField1">
                                    <Form.Label>Make</Form.Label>
                                    <Form.Control type="text" placeholder="" />
                                  </Form.Group>
                                </Col>
                                <Col md={4}>
                                  <Form.Group className="mb-3" controlId="formField8">
                                    <Form.Label>Body Type</Form.Label>
                                    <Form.Select aria-label="Select State">
                                      <option value="">Select State</option>
                                      <option value="AL">Alabama</option>
                                      <option value="CA">California</option>
                                      <option value="NY">New York</option>
                                      <option value="TX">Texas</option>
                                      <option value="FL">Florida</option>
                                      {/* Add more states as needed */}
                                    </Form.Select>
                                  </Form.Group>
                                </Col>
                                <Col md={4}>
                                  <Form.Group className="mb-3" controlId="formField1">
                                    <Form.Label>Model</Form.Label>
                                    <Form.Control type="text" placeholder="" />
                                  </Form.Group>
                                </Col>
                              </Row>


                              <Row>
                                <Col md={3}>
                                  <Form.Group className="mb-3" controlId="formField1">
                                    <Form.Label>Color</Form.Label>
                                    <Form.Control type="text" placeholder="" />
                                  </Form.Group>
                                </Col>
                                <Col md={3}>
                                  <Form.Group className="mb-3" controlId="formField1">
                                    <Form.Label>Odometer</Form.Label>
                                    <Form.Control type="text" placeholder="" />
                                  </Form.Group>
                                </Col>


                                <Col md={3}>
                                  <Form.Group className="mb-3" controlId="formFieldBuildDate">
                                    <Form.Label>Build Date</Form.Label>
                                    <InputGroup>
                                      <Button variant="outline-secondary">
                                        <i className="fa fa-calendar" aria-hidden="true"></i>
                                      </Button>
                                      <Form.Control
                                        type="date"
                                        placeholder="Select Date"
                                      />
                                    </InputGroup>
                                  </Form.Group>
                                </Col>


                                <Col md={3}>
                                  <Form.Group className="mb-3" controlId="formField1">
                                    <Form.Label>Fleet Code</Form.Label>
                                    <Form.Control type="text" placeholder="" />
                                  </Form.Group>
                                </Col>
                              </Row>



                              <Row>
                                <Col md={12} className="d-flex justify-content-between">
                                  <Button variant="secondary" onClick={handleFormOpenClick}>
                                    Cancel
                                  </Button>
                                  <Button type="submit" className="me-2">
                                    Submit
                                  </Button>
                                </Col>
                              </Row>
                            </Form>
                          }


                        </div>
                      </Card>
                    </Collapse>
                  </Col>


                  {/* Displaying Vehicles */}
                  {vehicleData.map((vehicle, index) => (
                    <Col xl={12} lg={12} md={12} sm={12} key={index}>
                      <Card className="mg-b-20">
                        <Card.Body className="p-0">
                          <div className="todo-widget-header d-flex align-items-center pb-3 pd-20 border-bottom">
                            <Dropdown>
                              <Dropdown.Toggle as="a" variant="" className="drop-down-profile">
                                <img alt="Vehicle" className="rounded-circle avatar avatar-md shadow" src={vehicle.img} />
                                <span className={`assigned-task bg-${vehicle.color}`}>{vehicle.num}</span>
                              </Dropdown.Toggle>
                              <Dropdown.Menu className="dropdown-menu tx-13">
                                <div className="main-header-profile">
                                  <div className="tx-16 h5 mg-b-0">EZY Motors</div>
                                  <span>Vehicle No</span>
                                </div>
                                <Dropdown.Item href="#">View Total Vehicles</Dropdown.Item>
                                <Dropdown.Item href="#">Completed vehicles</Dropdown.Item>
                                <Dropdown.Item href="#">Settings</Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                            <div className="ms-auto">
                              <div className="card-options-task">
                                <Dropdown as="span">
                                  <Dropdown.Toggle variant="" as="a" className="p-2 border br-5 text-primary">
                                    <i className="fe fe-more-vertical align-middle"></i>
                                  </Dropdown.Toggle>
                                  <Dropdown.Menu className="tx-13 dropleft">
                                    <Dropdown.Item href="#">Mark As Unread</Dropdown.Item>
                                    <Dropdown.Item href="#">Mark As Important</Dropdown.Item>
                                    <Dropdown.Item href="#">Move to</Dropdown.Item>
                                    <Dropdown.Item href="#">Move to Trash</Dropdown.Item>
                                  </Dropdown.Menu>
                                </Dropdown>
                              </div>
                            </div>
                          </div>
                          <div className="p-4">
                            <Row>
                              <Col md={4}>
                                <h6>Vehicle Information</h6>
                                <p><i className={`fa ${vehicle.iconVehicle}`} aria-hidden="true"></i> {vehicle.name}</p>
                                <p><i className={`fa ${vehicle.iconMake}`} aria-hidden="true"></i> {vehicle.type}</p>
                                <p><i className={`fa ${vehicle.iconYear}`} aria-hidden="true"></i> {vehicle.year}</p>
                              </Col>
                              <Col md={4}>
                                <h6>Owner Contact</h6>
                                <p><i className="fa fa-phone" aria-hidden="true"></i> {vehicle.phone}</p>
                                <p><i className="fa fa-mobile" aria-hidden="true"></i> {vehicle.mobile}</p>
                                <p><i className="fa fa-envelope" aria-hidden="true"></i> {vehicle.email}</p>
                              </Col>
                              <Col md={4}>
                                <h6>Contact 1 Information</h6>
                                <p><i className="fa fa-user" aria-hidden="true"></i> {vehicle.contactName}</p>
                                <p><i className="fa fa-phone" aria-hidden="true"></i> {vehicle.contactPhone}</p>
                              </Col>
                            </Row>
                          </div>
                        </Card.Body>
                        <Card.Footer>
                          <Link className="btn btn-primary" to="#" title="Assign Task">
                            Assign Vehicles
                          </Link>
                          <OverlayTrigger placement="top" overlay={<Tooltip>View Vehicle</Tooltip>}>
                            <Button variant="" className="btn btn-outline-primary ms-auto float-end">
                              View All
                            </Button>
                          </OverlayTrigger>
                        </Card.Footer>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Tab.Pane>

            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>


      <Row>
        <Col md={12}>
          <Card>
            <Card.Header className="border-bottom-0">
              <h3 className="card-title">Bookings</h3>
            </Card.Header>
            <Card.Body>
              <div className='p-4'>
                {
                  <Form>
                    <Row>
                      <Col md={3}>
                        <Form.Group className="mb-3" controlId="formField1">
                          <Form.Label>Reference</Form.Label>
                          <Form.Control type="text" placeholder="" />
                        </Form.Group>
                      </Col>
                      <Col md={3}>
                        <Form.Group className="mb-3" controlId="formField1">
                          <Form.Label>Customer Order Number</Form.Label>
                          <Form.Control type="text" placeholder="" />
                        </Form.Group>
                      </Col>
                      <Col md={3}>
                        <Form.Group className="mb-3" controlId="formFieldBuildDate">
                          <Form.Label>Booking Date</Form.Label>
                          <InputGroup>
                            <Button variant="outline-secondary">
                              <i className="fa fa-calendar" aria-hidden="true"></i>
                            </Button>
                            <Form.Control
                              type="date"
                              placeholder="Select Date"
                            />
                          </InputGroup>
                        </Form.Group>
                      </Col>
                      <Col md={3}>
                        <Form.Group className="mb-3" controlId="formFieldBuildDate">
                          <Form.Label>Due Date</Form.Label>
                          <InputGroup>
                            <Button variant="outline-secondary">
                              <i className="fa fa-calendar" aria-hidden="true"></i>
                            </Button>
                            <Form.Control
                              type="date"
                              placeholder="Select Date"
                            />
                          </InputGroup>
                        </Form.Group>
                      </Col>
                    </Row>


                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3" controlId="formField1">
                          <Form.Label>Description</Form.Label>
                          <Form.Control type="text" placeholder="" />
                        </Form.Group>
                      </Col>

                    </Row>

                    <div className="container mt-4">
                      <div className="row">
                        <div className="col-md-10">
                          <table className="table table-bordered">
                            <thead>
                              <tr>
                                <th>Add</th>
                                <th>Product</th>
                                <th>Description</th>
                                <th>Unit Price</th>
                                <th>Qty</th>
                                <th>Tax (10%)</th>
                                <th>Line Total</th>
                                <th>Delete</th>
                              </tr>
                            </thead>
                            <tbody>
                              {rows.map((row, index) => (
                                <tr key={index}>
                                  <td>
                                    <button
                                      type="button"
                                      className="btn btn-primary"
                                      onClick={handleAddRow}
                                    >
                                      <i className='fa fa-plus-square' />
                                    </button>
                                  </td>
                                  <td>
                                    <input
                                      type="text"
                                      value={row.product}
                                      onChange={(e) => handleRowChange(index, 'product', e.target.value)}
                                      className="form-control"
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="text"
                                      value={row.description}
                                      onChange={(e) => handleRowChange(index, 'description', e.target.value)}
                                      className="form-control"
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="number"
                                      value={row.unitPrice}
                                      onChange={(e) => handleRowChange(index, 'unitPrice', parseFloat(e.target.value))}
                                      className="form-control"
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="number"
                                      value={row.qty}
                                      onChange={(e) => handleRowChange(index, 'qty', parseFloat(e.target.value))}
                                      className="form-control"
                                    />
                                  </td>
                                  <td>₹{(row.unitPrice * row.qty * 0.1).toFixed(2)}</td>
                                  <td>₹{(row.unitPrice * row.qty).toFixed(2)}</td>
                                  <td>
                                    <button
                                      type="button"
                                      className="btn btn-danger"
                                      onClick={() => handleRemoveRow(index)}
                                    >
                                      <i className='fa fa-trash' />
                                    </button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                        <div className="col-md-2">
                          <div className="form-group">
                            <label>Subtotal:</label>
                            <input type="text" value={`₹${totals.subtotal.toFixed(2)}`} readOnly className="form-control" />
                          </div>
                          <div className="form-group">
                            <label>Freight:</label>
                            <input type="text" className="form-control" />
                          </div>
                          <div className="form-group">
                            <label>Sales Tax (10%):</label>
                            <input type="text" value={`₹${totals.tax.toFixed(2)}`} readOnly className="form-control" />
                          </div>
                          <div className="form-group">
                            <label>Total:</label>
                            <input type="text" value={`₹${totals.total.toFixed(2)}`} readOnly className="form-control" />
                          </div>
                        </div>
                      </div>
                    </div>




                  </Form>

                }
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Card>
            <Card.Header className="border-bottom-0">
              <h3 className="card-title">Event Notes</h3>
            </Card.Header>
            <Card.Body>
              <SunEditor
                setContents={value}
                onChange={setValue}
                setOptions={{
                  buttonList: [
                    ['undo', 'redo'],
                    ['font', 'fontSize'],
                    ['paragraphStyle', 'blockquote'],
                    ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
                    ['fontColor', 'hiliteColor'],
                    ['align', 'list', 'lineHeight'],
                    ['outdent', 'indent'],
                    ['table', 'horizontalRule', 'link', 'image', 'video'],
                    ['preview', 'print'],
                    ['removeFormat']
                  ],
                  defaultTag: 'div',
                  minHeight: '300px',
                  showPathLabel: false,
                  attributesWhitelist: {
                    all: 'style',
                    table: 'cellpadding|width|cellspacing|height|style',
                    tr: 'valign|style',
                    td: 'styleinsert|height|style',
                    img: 'title|alt|src|style'
                  }
                }}
              />
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Header className="border-bottom-0">
              <h3 className="card-title">Job Card Notes</h3>
            </Card.Header>
            <Card.Body>
              <SunEditor
                setContents={value}
                onChange={setValue}
                setOptions={{
                  buttonList: [
                    ['undo', 'redo'],
                    ['font', 'fontSize'],
                    ['paragraphStyle', 'blockquote'],
                    ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
                    ['fontColor', 'hiliteColor'],
                    ['align', 'list', 'lineHeight'],
                    ['outdent', 'indent'],
                    ['table', 'horizontalRule', 'link', 'image', 'video'],
                    ['preview', 'print'],
                    ['removeFormat']
                  ],
                  defaultTag: 'div',
                  minHeight: '300px',
                  showPathLabel: false,
                  attributesWhitelist: {
                    all: 'style',
                    table: 'cellpadding|width|cellspacing|height|style',
                    tr: 'valign|style',
                    td: 'styleinsert|height|style',
                    img: 'title|alt|src|style'
                  }
                }}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>


      <Row>
        <Col md={12}>
          <Link to={`${import.meta.env.BASE_URL}pages/faqs/`}> <Button variant={idx.color} className="btn me-2">
            Start job
          </Button></Link>

          <Button variant={ide.color} className="btn me-2">
            Save
          </Button>
        </Col>
      </Row>

    </Fragment>
  );
};

export default Todotask;
