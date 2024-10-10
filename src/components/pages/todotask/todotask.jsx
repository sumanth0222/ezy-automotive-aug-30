import React, { Fragment, useState } from 'react';
import { Button, ButtonGroup, Collapse, Dropdown, Form, InputGroup, Row, Col, Card, Tooltip, OverlayTrigger, Nav, Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ToggleButton } from 'react-bootstrap';
import Pageheader from '../../../layout/layoutcomponent/pageheader';
import { Tododata, vehicleData } from '../../../common/commondata';
import SunEditor from 'suneditor-react'; // Make sure you have this installed
import 'suneditor/dist/css/suneditor.min.css'; // Import SunEditor styles
import { MultiSelect } from "react-multi-select-component";
import { Inspection, contact, countries, payment, cs } from "../../../common/selectdata";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";




const Todotask = () => {
  const [expanded, setExpanded] = useState(false);
  const [allData, setAllData] = useState(Tododata);
  const [formOpen, setFormOpen] = useState(false);
  const [radioValue, setRadioValue] = useState('individual');
  const [value, setValue] = useState(''); // State for SunEditor
  const [selected, setSelected] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  // Invoice State
  const [rows, setRows] = useState([
    { product: 'LAB', description: 'Labour', unitPrice: 0, qty: 1, tax: 0, lineTotal: 0 }
  ]);

  // Toggle the expand state
  const handleExpandClick = () => setExpanded(!expanded);

  // Handler for the Cancel button
  const handleCancel = () => {
    navigate(-1); // Navigate back to the previous page
  };

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

  const customervehicle = [
    { rego: "10BMK", make: "Freighter", model: "", modelcode:"", modelseries:"" },
    { rego: "08BMK", make: "Freighter", model: "", modelcode:"", modelseries:"" },
    { rego: "07BMK", make: "Kenworth", model: "T409", modelcode:"", modelseries:"" },
    { rego: "865BMK", make: "Freighter", model: "", modelcode:"", modelseries:"" }, 
  ];

  const [filter, setFilter] = useState("");

  // Filtering based on search term
  const filterData = (data, field) =>
    data.filter((item) =>
      item[field].toLowerCase().includes(filter.toLowerCase())
    );

  return (
    <Fragment>
      <Pageheader title="Customers" heading="Customer" active="Calendar" />

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
                            <i className="fa fa-user fs-18 me-4 p-2 border-primary brround bg-primary-transparent text-primary"></i>
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
                            <i className="fa fa-taxi fs-18 me-4 p-2 border-warning brround bg-warning-transparent text-warning"></i>
                            Select A Vehicle
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
                <Row className="row-sm">
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
                            <ToggleButton className='bg-primary'
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

                          <div className='row row-ms'>

                          <div className="col-lg-3">
                            <label className="form-label" htmlFor="address">First Name</label>
                            <input className="form-control" id="address" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>

                          <div className="col-lg-3">
                            <label className="form-label" htmlFor="address">Last Name</label>
                            <input className="form-control" id="address" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>

                          <div className="col-lg-3">
                            <label className="form-label" htmlFor="address">Phone</label>
                            <input className="form-control" id="address" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>

                          <div className="col-lg-3">
                            <label className="form-label" htmlFor="address">Cell</label>
                            <input className="form-control" id="address" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>

                          <div className="col-lg-3">
                            <label className="form-label" htmlFor="address">Email</label>
                            <input className="form-control" id="address" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>

                          <div className="col-lg-3">
                            <label className="form-label" htmlFor="address">Address</label>
                            <input className="form-control" id="address" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>

                          <div className="col-lg-3">
                            <label className="form-label" htmlFor="address">City</label>
                            <input className="form-control" id="address" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>

                          <div className="col-lg-3">
                          <label className="form-label" htmlFor="phone">State</label>
                            <MultiSelect
                              value={selected}
                              onChange={setSelected}
                              labelledBy="Select"
                              options={countries}
                            />
                          </div>

                          <div className="col-lg-3">
                            <label className="form-label" htmlFor="address">Zip Code</label>
                            <input className="form-control" id="address" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>

                          <div className="col-lg-3">
                          <label className="form-label" htmlFor="phone">Price Type</label>
                            <MultiSelect
                              value={selected}
                              onChange={setSelected}
                              labelledBy="Select"
                              options={countries}
                            />
                          </div>

                            
                          </div>
                           

                              <Row>
                                <Col md={12} className="d-flex justify-content-between mt-3">
                                  <Button variant="secondary" onClick={handleFormOpenClick}>
                                    Cancel
                                  </Button>
                                  <Button type="submit" className="me-2">
                                    Sumbit
                                  </Button>
                                </Col>
                              </Row>
                            </Form>
                          )}

                          {radioValue === 'company' && (
                            <Form>

                          <div className='row row-ms'>

                          <div className="col-lg-12">
                            <label className="form-label" htmlFor="address">CompanyName</label>
                            <input className="form-control" id="address" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>

                          

                          <div className="col-lg-6">
                            <label className="form-label" htmlFor="address">Phone</label>
                            <input className="form-control" id="address" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>

                          <div className="col-lg-6">
                            <label className="form-label" htmlFor="address">Cell</label>
                            <input className="form-control" id="address" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>

                          <div className="col-lg-6">
                            <label className="form-label" htmlFor="address">Email</label>
                            <input className="form-control" id="address" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>

                          <div className="col-lg-6">
                            <label className="form-label" htmlFor="address">Address</label>
                            <input className="form-control" id="address" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>

                          <div className="col-lg-6">
                            <label className="form-label" htmlFor="address">City</label>
                            <input className="form-control" id="address" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>

                          <div className="col-lg-6">
                          <label className="form-label" htmlFor="phone">State</label>
                            <MultiSelect
                              value={selected}
                              onChange={setSelected}
                              labelledBy="Select"
                              options={countries}
                            />
                          </div>

                          <div className="col-lg-6">
                            <label className="form-label" htmlFor="address">Zip Code</label>
                            <input className="form-control" id="address" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>

                          <div className="col-lg-6">
                          <label className="form-label" htmlFor="phone">Price Type</label>
                            <MultiSelect
                              value={selected}
                              onChange={setSelected}
                              labelledBy="Select"
                              options={countries}
                            />
                          </div>

                            
                          </div>
                           

                              <Row>
                                <Col md={12} className="d-flex justify-content-between mt-3">
                                  <Button variant="secondary" onClick={handleFormOpenClick}>
                                    Cancel
                                  </Button>
                                  <Button type="submit" className="me-2">
                                    Sumbit
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
                                  <div className="tx-16 h5 mg-b-0">Drive Mech</div>
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
                <Row className="row-sm">
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

                          <div className="col-lg-4">
                            <label className="form-label" htmlFor="phone">Rego</label>
                            <input className="form-control" id="phone" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>
                          <div className="col-lg-4">
                          <label className="form-label" htmlFor="phone">State</label>
                            <MultiSelect
                              value={selected}
                              onChange={setSelected}
                              labelledBy="Select"
                              options={countries}
                            />
                          </div>

                          <div className="col-lg-4">
                            <label className="form-label" htmlFor="phone">VIN</label>
                            <input className="form-control" id="phone" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>
                          <div className="col-lg-4">
                            <label className="form-label" htmlFor="phone">Make</label>
                            <input className="form-control" id="phone" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>
                          <div className="col-lg-4">
                            <label className="form-label" htmlFor="phone">Model</label>
                            <input className="form-control" id="phone" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>
                          <div className="col-lg-4">
                          <label className="form-label" htmlFor="phone">Body Type</label>
                            <MultiSelect
                              value={selected}
                              onChange={setSelected}
                              labelledBy="Select"
                              options={countries}
                            />
                          </div>
                          <div className="col-lg-4">
                            <label className="form-label" htmlFor="phone">Colour</label>
                            <input className="form-control" id="phone" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>
                          <div className="col-lg-4">
                            <label className="form-label" htmlFor="phone">Odometer</label>
                            <input className="form-control" id="phone" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>
                          <div className="col-lg-4">
                              <Form.Label>Build Date</Form.Label>
                              <div className="input-group">
                                <span className="input-group-text">
                                  <i className="typcn typcn-calendar-outline tx-24 lh--9 op-6"></i>
                                </span>
                                <DatePicker
                                  selected={startDate}
                                  onChange={(date) => setStartDate(date)}
                                  className="form-control"
                                  placeholderText="Select Start Date"
                                />
                              </div>
                            </div>
                          <div className="col-lg-4">
                            <label className="form-label" htmlFor="phone">Fleet Code</label>
                            <input className="form-control" id="phone" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>
                          

                               

                              </Row>



                              <Row>
                                <Col md={12} className="d-flex justify-content-between mt-3">
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
                                  <div className="tx-16 h5 mg-b-0">Drive Mech</div>
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

                      {/* <div className="col-lg-12 col-md-12"> */}
                        {/* <div className="card">

                        <div className="table-responsive mt-4">
                          <table className="table table-bordered text-nowrap border-bottom">
                            <thead>
                              <tr>
                                <th className="wd-5p text-center">Rego</th>
                                <th>Make</th>
                                <th>Model</th>
                                <th>Model Code</th>
                                <th>Model Series</th>
                              </tr>
                            </thead>
                            <tbody>
                              {filterData(customervehicle, "rego").length > 0 ? (
                                filterData(customervehicle, "rego").map(
                                  (rego, index) => (
                                    <tr key={index}>
                                      <td className="wd-5p text-center">
                                        {rego.rego}
                                      </td>
                                      <td>{rego.make}</td>
                                      <td>{rego.model}</td>
                                      <td>{rego.modelcode}</td>
                                      <td>{rego.modelseries}</td>
                                    </tr>
                                  )
                                )
                              ) : (
                                <tr>
                                  <td colSpan="7" className="text-center">
                                    No results found.
                                  </td>
                                </tr>
                              )}
                            </tbody>
                          </table>
                          <div className="d-flex mt-4 align-items-center">
                            <span>Page <strong>1 of 4</strong></span>
                            <span className="ms-auto ps-2">
                              <button type="button" disabled className="btn-default tablebutton me-2 my-2 btn"> Previous </button>
                              <button type="button" disabled className="btn-default tablebutton me-2 my-2 btn"> &lt;&lt; </button>
                              <button type="button" disabled className="btn-default tablebutton me-2 my-2 btn"> &lt; </button>
                              <button type="button" className="btn-default tablebutton me-2 my-2 btn"> &gt; </button>
                              <button type="button" className="btn-default tablebutton me-2 my-2 btn"> &gt;&gt; </button>
                              <button type="button" className="btn-default tablebutton me-2 my-2 btn"> Next </button>
                            </span>
                          </div>
                        </div>
                      </div> */}
                    {/* </div> */}
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
              <div className=''>
                {
                  <Form>
                    <Row>
                      <Col md={4}>
                        <Form.Group className="mb-3" controlId="formField1">
                          <Form.Label>Reference</Form.Label>
                          <Form.Control type="text" placeholder="" />
                        </Form.Group>
                      </Col>
                            <div className="col-lg-4">
                              <Form.Label>Booking Date</Form.Label>
                              <div className="input-group">
                                <span className="input-group-text">
                                  <i className="typcn typcn-calendar-outline tx-24 lh--9 op-6"></i>
                                </span>
                                <DatePicker
                                  selected={startDate}
                                  onChange={(date) => setStartDate(date)}
                                  className="form-control"
                                  placeholderText="Select Start Date"
                                />
                              </div>
                            </div>
                            <div className="col-lg-4">
                              <Form.Label>Due By</Form.Label>
                              <div className="input-group">
                                <span className="input-group-text">
                                  <i className="typcn typcn-calendar-outline tx-24 lh--9 op-6"></i>
                                </span>
                                <DatePicker
                                  selected={endDate}
                                  onChange={(date) => setEndDate(date)}
                                  className="form-control"
                                  placeholderText="Select End Date"
                                />
                              </div>
                            </div>
                      <Col md={4}>
                        <Form.Group className="mb-3" controlId="formField1">
                          <Form.Label>Customer Order Number</Form.Label>
                          <Form.Control type="text" placeholder="" />
                        </Form.Group>
                      </Col>
                      <Col md={8}>
                        <Form.Group className="mb-3" controlId="formField1">
                          <Form.Label>Description</Form.Label>
                          <Form.Control type="text" placeholder="" />
                        </Form.Group>
                      </Col>
                      
                     
                    </Row>


                    {/* <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3" controlId="formField1">
                          <Form.Label>Description</Form.Label>
                          <Form.Control type="text" placeholder="" />
                        </Form.Group>
                      </Col>

                    </Row> */}

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


      {/* <Row> */}
      <div id="button6">
                      <div className="text-wrap row justify-content-between">
                        <div>
                          <button type="button" className="btn btn-danger" onClick={handleCancel}>
                            Cancel
                          </button>
                        </div>
                        <div className="btn-list">
                          <button type="button" className="btn btn-primary" >
                            Start Job
                          </button>
                          <button type="button" className="btn btn-info">
                            Save
                          </button>


                        </div>
                        
                      </div>
                    </div>
      {/* </Row> */}

    </Fragment>
  );
};

export default Todotask;
