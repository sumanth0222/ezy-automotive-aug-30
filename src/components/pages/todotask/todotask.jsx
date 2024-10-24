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
import Draggable from 'react-draggable';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
} from "@mui/material";



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
    { rego: "10BMK", make: "Freighter", model: "", modelcode: "", modelseries: "" },
    { rego: "08BMK", make: "Freighter", model: "", modelcode: "", modelseries: "" },
    { rego: "07BMK", make: "Kenworth", model: "T409", modelcode: "", modelseries: "" },
    { rego: "865BMK", make: "Freighter", model: "", modelcode: "", modelseries: "" },
  ];

  const [filter, setFilter] = useState("");

  // Filtering based on search term
  const filterData = (data, field) =>
    data.filter((item) =>
      item[field].toLowerCase().includes(filter.toLowerCase())
    );


  // Draggable
  function PaperComponent(props) {
    return (
      <Draggable
        handle="#draggable-dialog-title"
        cancel={'[class*="MuiDialogContent-root"]'}
      >
        <Paper {...props} />
      </Draggable>,

      <Draggable
        handle="#draggable-dialog-title1"
        cancel={'[class*="MuiDialogContent-root"]'}
      >
        <Paper {...props} />
      </Draggable>,


      <Draggable
        handle="#draggable-dialog-title2"
        cancel={'[class*="MuiDialogContent-root"]'}
      >
        <Paper {...props} />
      </Draggable>,

      <Draggable
        handle="#draggable-dialog-title3"
        cancel={'[class*="MuiDialogContent-root"]'}
      >
        <Paper {...props} />
      </Draggable>,

      <Draggable
        handle="#draggable-dialog-title4"
        cancel={'[class*="MuiDialogContent-root"]'}
      >
        <Paper {...props} />
      </Draggable>,


      <Draggable
        handle="#draggable-dialog-title5"
        cancel={'[class*="MuiDialogContent-root"]'}
      >
        <Paper {...props} />
      </Draggable>,

      <Draggable
        handle="#draggable-dialog-title6"
        cancel={'[class*="MuiDialogContent-root"]'}
      >
        <Paper {...props} />
      </Draggable>


    );
  }


  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);




  const handleClickVehicles = () => {
    setOpen1(true);
  };
  const handleClosedraggable1 = () => {
    setOpen1(false);
  };

  const handleClickVehiclesCategory = () => {
    setOpen2(true);
  };
  const handleClosedraggable2 = () => {
    setOpen2(false);
  };

  const handleClickPlateColor = () => {
    setOpen3(true);
  };
  const handleClosedraggable3 = () => {
    setOpen3(false);
  };

  const handleClickCustomerSource = () => {
    setOpen4(true);
  };
  const handleClosedraggable4 = () => {
    setOpen4(false);
  };

  const handleClickTechnician = () => {
    setOpen5(true);
  };
  const handleClosedraggable5 = () => {
    setOpen5(false);
  };

  const handleClickSupervisor = () => {
    setOpen6(true);
  };
  const handleClosedraggable6 = () => {
    setOpen6(false);
  };

  return (
    <Fragment>
      <Pageheader title="Customers" heading="Customer" active="Calendar" />

      <Tab.Container id="left-tabs-example" defaultActiveKey="TabStyle01" >
        <Row>
          <Col md={12} xl={12} lg={12}>
            <Card>
              <Nav variant="pills" className="flex-column">
                <div className="list-group list-group-transparent mb-0 mail-inbox" >
                  <Row>
                    <Col md={12} xl={12} lg={12}>
                      <Nav.Item style={{ heigth: "45px" }}>
                        <Nav.Link

                          eventKey="TabStyle01"
                          className="list-group-item d-flex align-items-center justify-content-between border-0 py-0"
                        >
                          <div className="d-flex align-items-center p-0">
                            <i className="fa fa-user fs-18 me-4  border-primary brround bg-primary-transparent text-primary"></i>
                            New Customer Registration
                          </div>
                          <div className="d-flex align-items-center p-0">
                            <div className=" mx-2">
                              <InputGroup className="input-group">
                                <input className='form-control1'
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

                    <Collapse in={formOpen}>

                      <Card className='py-2'>
                        <div className='px-4'>
                          <h3>NEW CUSTOMER REGISTRATION HERE:</h3>
                          {/* Toggle option button for Individual and Company */}
                          {/* <ButtonGroup className="mb-3">
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
                          </ButtonGroup>  */}

                          {radioValue === 'individual' && (
                            <Form>

                              <div className='row row-ms'>

                                <div className="col-lg-3">
                                  <label className="form-label" htmlFor="phone">Vehicle No.*</label>
                                  <MultiSelect
                                    value={selected}
                                    onChange={setSelected}
                                    labelledBy="Select"
                                    options={countries}
                                  />
                                </div>

                                <div className="col-lg-3">
                                  <div className='d-flex justify-content-between'>
                                    <label className="form-label" htmlFor="phone">Vehicle Name*</label>
                                    <button
                                      type="button"
                                      className="btn"
                                      onClick={handleClickVehicles}
                                    >
                                      <i className='fa fa-plus-square' />
                                    </button>
                                  </div>

                                  <Dialog
                                    open={open1}
                                    onClose={handleClosedraggable1}
                                    PaperComponent={PaperComponent}
                                    aria-labelledby="draggable-dialog-title1"
                                  >


                                    <DialogTitle style={{ cursor: "move", backgroundColor: "#38cab3", color: "#fff" }} id="draggable-dialog-title1">
                                      ADD NEW VEHICLE
                                    </DialogTitle>

                                    <DialogContent >

                                      <DialogContentText className='row-sm row'>

                                        <div className="col-lg-12">
                                          <label className="form-label" htmlFor="validationCustom05">Vehicle Brand*</label>
                                          <MultiSelect
                                            value={selected}
                                            onChange={setSelected}
                                            labelledBy="Select"
                                            options={countries}
                                          />
                                        </div>
                                        <div className="col-lg-12">
                                          <label className="form-label" htmlFor="validationCustom05">Vehicle Model*</label>
                                          <MultiSelect
                                            value={selected}
                                            onChange={setSelected}
                                            labelledBy="Select"
                                            options={countries}
                                          />
                                        </div>
                                        <div className="col-lg-12">
                                          <label className="form-label" htmlFor="validationCustom05">Vehicle Variant*</label>
                                          <input className="form-control" id="validationCustom05" type="text" placeholder='Enter Vehicle Variant' required />
                                        </div>

                                      </DialogContentText>
                                    </DialogContent>

                                    <DialogActions>
                                      <Button variant="secondary" className="me-1" onClick={handleClosedraggable1}>
                                        Close
                                      </Button>
                                      <Button className="me-1" variant="success">
                                        Save
                                      </Button>
                                    </DialogActions>
                                  </Dialog>

                                  <MultiSelect
                                    value={selected}
                                    onChange={setSelected}
                                    labelledBy="Select"
                                    options={countries}
                                  />

                                </div>

                                <div className="col-lg-3">
                                  <div className='d-flex justify-content-between'>
                                    <label className="form-label" htmlFor="phone">Vehicle Category*</label>
                                    <button
                                      type="button"
                                      className="btn"
                                      onClick={handleClickVehiclesCategory}
                                    >
                                      <i className='fa fa-plus-square' />
                                    </button>
                                  </div>
                                  <Dialog
                                    open={open2}
                                    onClose={handleClosedraggable2}
                                    PaperComponent={PaperComponent}
                                    aria-labelledby="draggable-dialog-title2"
                                  >

                                    <DialogTitle style={{ cursor: "move", backgroundColor: "#38cab3", color: "#fff" }} id="draggable-dialog-title2">
                                      ADD NEW VEHICLE CATEGORY
                                    </DialogTitle>

                                    <DialogContent >
                                      <DialogContentText className='row-sm row'>


                                        <div className="col-lg-12">
                                          <label className="form-label" htmlFor="validationCustom05">Vehicle Category Name*</label>
                                          <input className="form-control" id="validationCustom05" type="text" placeholder='Enter Vehicle Category Name' required />
                                        </div>

                                      </DialogContentText>
                                    </DialogContent>

                                    <DialogActions>
                                      <Button variant="secondary" className="me-1" onClick={handleClosedraggable2}>
                                        Close
                                      </Button>
                                      <Button className="me-1" variant="success">
                                        Save
                                      </Button>
                                    </DialogActions>
                                  </Dialog>
                                  <MultiSelect
                                    value={selected}
                                    onChange={setSelected}
                                    labelledBy="Select"
                                    options={countries}
                                  />
                                </div>

                                <div className="col-lg-3">
                                  <label className="form-label" htmlFor="address">Kilometer Driven</label>
                                  <input className="form-control" id="address" type="text" required />
                                  <div className="invalid-feedback">Kilometer Driven</div>
                                </div>

                                <div className="col-lg-3">
                                  <div className='d-flex justify-content-between'>
                                    <label className="form-label" htmlFor="phone">Number Plate Color* </label>
                                    <button
                                      type="button"
                                      className="btn"
                                      onClick={handleClickPlateColor}
                                    >
                                      <i className='fa fa-plus-square' />
                                    </button>
                                  </div>
                                  <Dialog
                                    open={open3}
                                    onClose={handleClosedraggable3}
                                    PaperComponent={PaperComponent}
                                    aria-labelledby="draggable-dialog-title3"
                                  >

                                    <DialogTitle style={{ cursor: "move", backgroundColor: "#38cab3", color: "#fff" }} id="draggable-dialog-title3">
                                      NUMBER PLATE COLOR
                                    </DialogTitle>

                                    <DialogContent >
                                      <DialogContentText className='row-sm row'>

                                        <p style={{ paddingTop: "15px" }}>White (Private Vehicle)</p>
                                        <b></b><b></b>
                                        <p>Black (Self- Driven commercial vehicles)</p>
                                        <b></b>
                                        <p>Yellow (Commercial Vehicle)</p>
                                        <p>Blue (Vehicles used by foreign delegates in India)</p>
                                        <p>Green (Electric Vehicle)</p>


                                      </DialogContentText>
                                    </DialogContent>

                                    <DialogActions>
                                      <Button variant="secondary" className="me-1" onClick={handleClosedraggable3}>
                                        Close
                                      </Button>

                                    </DialogActions>
                                  </Dialog>

                                  <MultiSelect
                                    value={selected}
                                    onChange={setSelected}
                                    labelledBy="Select"
                                    options={countries}
                                  />
                                </div>

                                <div className="col-lg-3">
                                  <label className="form-label" htmlFor="address">Customer's Name*</label>
                                  <input className="form-control" id="address" type="text" required />
                                  <div className="invalid-feedback">Please provide a valid Name.</div>
                                </div>


                                <div className="col-lg-3">

                                  <div className='d-flex justify-content-between'>
                                    <label className="form-label" htmlFor="phone">Customer Source</label>

                                    <button
                                      type="button"
                                      className="btn"
                                      onClick={handleClickCustomerSource}
                                    >
                                      <i className='fa fa-plus-square' />
                                    </button>
                                  </div>
                                  <Dialog
                                    open={open4}
                                    onClose={handleClosedraggable4}
                                    PaperComponent={PaperComponent}
                                    aria-labelledby="draggable-dialog-title4"
                                  >

                                    <DialogTitle style={{ cursor: "move", backgroundColor: "#38cab3", color: "#fff" }} id="draggable-dialog-title4">
                                      ADD NEW CUSTOMER SOURCE
                                    </DialogTitle>

                                    <DialogContent >
                                      <DialogContentText className='row-sm row'>

                                        <div className="col-lg-6">
                                          <label className="form-label" htmlFor="validationCustom05">Company Name*</label>
                                          <input className="form-control" id="validationCustom05" type="text" placeholder='Enter Company Name' required />
                                        </div>
                                        <div className="col-lg-6">
                                          <label className="form-label" htmlFor="validationCustom05">GST Number*</label>
                                          <input className="form-control" id="validationCustom05" type="text" placeholder='Enter GSTIN Number' required />
                                        </div>
                                        <div className="col-lg-6">
                                          <label className="form-label" htmlFor="validationCustom05">Email Id*</label>
                                          <input className="form-control" id="validationCustom05" type="text" placeholder='Enter Email Id' required />
                                        </div>
                                        <div className="col-lg-6">
                                          <label className="form-label" htmlFor="validationCustom05">Contact Number*</label>
                                          <input className="form-control" id="validationCustom05" type="text" placeholder='Enter Contact Number' required />
                                        </div>
                                        <div className="col-lg-6">
                                          <label className="form-label" htmlFor="validationCustom05">Contact Person</label>
                                          <input className="form-control" id="validationCustom05" type="text" placeholder='Enter Contact Person' required />
                                        </div>
                                        <div className="col-lg-6">
                                          <label className="form-label" htmlFor="validationCustom05">Alternate Contact Nbr</label>
                                          <input className="form-control" id="validationCustom05" type="text" placeholder='Enter Alternate Contact Nbr' required />
                                        </div>
                                        <div className="col-lg-6">
                                          <label className="form-label" htmlFor="validationCustom05">Address*</label>
                                          <input className="form-control" id="validationCustom05" type="text" placeholder='Enter Address' required />
                                        </div>
                                        <div className="col-lg-6">
                                          <label className="form-label" htmlFor="validationCustom05">City</label>
                                          <input className="form-control" id="validationCustom05" type="text" placeholder='Enter City' required />
                                        </div>
                                        <div className="col-lg-6">
                                          <label className="form-label" htmlFor="validationCustom05">State</label>
                                          <input className="form-control" id="validationCustom05" type="text" placeholder='Enter State' required />
                                        </div>
                                        <div className="col-lg-6">
                                          <label className="form-label" htmlFor="validationCustom05">SMS Remainders</label>
                                          <MultiSelect
                                            value={selected}
                                            onChange={setSelected}
                                            labelledBy="Select"
                                            options={countries}
                                          />
                                        </div>



                                      </DialogContentText>
                                    </DialogContent>

                                    <DialogActions>
                                      <Button variant="secondary" className="me-1" onClick={handleClosedraggable4}>
                                        Close
                                      </Button>
                                      <Button className="me-1" variant="success">
                                        Save
                                      </Button>
                                    </DialogActions>
                                  </Dialog>

                                  <MultiSelect
                                    value={selected}
                                    onChange={setSelected}
                                    labelledBy="Select"
                                    options={countries}
                                  />
                                </div>

                                <div className="col-lg-3">
                                  <label className="form-label" htmlFor="address">Email Id</label>
                                  <input className="form-control" id="address" type="text" required />
                                  <div className="invalid-feedback">Please provide a valid Email Id.</div>
                                </div>

                                <div className="col-lg-3">
                                  <label className="form-label" htmlFor="address">Mobile Number*</label>
                                  <input className="form-control" id="address" type="text" required />
                                  <div className="invalid-feedback">Please provide a valid Mobile Number.</div>
                                </div>

                                <div className="col-lg-3">
                                  <label className="form-label" htmlFor="address">Customer Address</label>
                                  <input className="form-control" id="address" type="text" required />
                                  <div className="invalid-feedback">Please provide a valid Customer Address.</div>
                                </div>

                                <div className="col-lg-3">

                                  <div className='d-flex justify-content-betweeb'>
                                    <label className="form-label" htmlFor="phone">Technician</label>

                                    <button
                                      type="button"
                                      className="btn"
                                      onClick={handleClickTechnician}
                                    >
                                      <i className='fa fa-plus-square' />
                                    </button>
                                  </div>
                                  <Dialog
                                    open={open5}
                                    onClose={handleClosedraggable5}
                                    PaperComponent={PaperComponent}
                                    aria-labelledby="draggable-dialog-title5"
                                  >

                                    <DialogTitle style={{ cursor: "move", backgroundColor: "#38cab3", color: "#fff" }} id="draggable-dialog-title5">
                                      ADD NEW TECHNICIAN
                                    </DialogTitle>

                                    <DialogContent >
                                      <DialogContentText className='row-sm row'>

                                        <div className="col-lg-6">
                                          <label className="form-label" htmlFor="validationCustom05">Workshop Id*</label>
                                          <MultiSelect
                                            value={selected}
                                            onChange={setSelected}
                                            labelledBy="Select"
                                            options={countries}
                                          />
                                        </div>
                                        <div className="col-lg-6">
                                          <label className="form-label" htmlFor="validationCustom05">First Name*</label>
                                          <input className="form-control" id="validationCustom05" type="text" placeholder='Enter First Name' required />
                                        </div>
                                        <div className="col-lg-6">
                                          <label className="form-label" htmlFor="validationCustom05">Last Name*</label>
                                          <input className="form-control" id="validationCustom05" type="text" placeholder='Enter Last Name' required />
                                        </div>
                                        <div className="col-lg-6">
                                          <label className="form-label" htmlFor="validationCustom05">Username*</label>
                                          <input className="form-control" id="validationCustom05" type="text" placeholder='Enter Username' required />
                                        </div>
                                        <div className="col-lg-6">
                                          <label className="form-label" htmlFor="validationCustom05">Email Id</label>
                                          <input className="form-control" id="validationCustom05" type="text" placeholder='Enter Email Id' required />
                                        </div>
                                        <div className="col-lg-6">
                                          <label className="form-label" htmlFor="validationCustom05">Contact Number*</label>
                                          <input className="form-control" id="validationCustom05" type="text" placeholder='Enter Contact Number' required />
                                        </div>
                                        <div className="col-lg-6">
                                          <label className="form-label" htmlFor="validationCustom05">Password*</label>
                                          <input className="form-control" id="validationCustom05" type="text" placeholder='Enter Password' required />
                                        </div>
                                        <div className="col-lg-6">
                                          <label className="form-label" htmlFor="address">Password Expiry Date*</label>
                                          <input className="form-control" id="address" type="date" required />
                                          <div className="invalid-feedback">Please provide a valid zip.</div>
                                        </div>
                                        <div className="col-lg-6">
                                          <label className="form-label" htmlFor="validationCustom05">Designation*</label>
                                          <MultiSelect
                                            value={selected}
                                            onChange={setSelected}
                                            labelledBy="Select"
                                            options={countries}
                                          />
                                        </div>
                                        <div className="col-lg-6">
                                          <label className="form-label" htmlFor="address">Date Of Birth</label>
                                          <input className="form-control" id="address" type="date" required />
                                          <div className="invalid-feedback">Please provide a valid zip.</div>
                                        </div>
                                        <div className="col-lg-6">
                                          <label className="form-label" htmlFor="address">Date Of Anniversary</label>
                                          <input className="form-control" id="address" type="date" required />
                                          <div className="invalid-feedback">Please provide a valid zip.</div>
                                        </div>

                                        <div className="col-lg-6">
                                          <label className="form-label" htmlFor="validationCustom05">Address</label>
                                          <input className="form-control" id="validationCustom05" type="text" placeholder='Enter Address' required />
                                        </div>





                                      </DialogContentText>
                                    </DialogContent>

                                    <DialogActions>
                                      <Button variant="secondary" className="me-1" onClick={handleClosedraggable5}>
                                        Close
                                      </Button>
                                      <Button className="me-1" variant="success">
                                        Save
                                      </Button>
                                    </DialogActions>
                                  </Dialog>

                                  <MultiSelect
                                    value={selected}
                                    onChange={setSelected}
                                    labelledBy="Select"
                                    options={countries}
                                  />
                                </div>

                                <div className="col-lg-3">
                                  <div className='justify-content-between d-flex'>
                                    <label className="form-label" htmlFor="phone">Supervisor

                                    </label>

                                    <button
                                      type="button"
                                      className="btn "
                                      onClick={handleClickSupervisor}
                                    >
                                      <i className='fa fa-plus-square' />
                                    </button>
                                  </div>

                                  <Dialog
                                    open={open6}
                                    onClose={handleClosedraggable6}
                                    PaperComponent={PaperComponent}
                                    aria-labelledby="draggable-dialog-title6"
                                  >

                                    <DialogTitle style={{ cursor: "move", backgroundColor: "#38cab3", color: "#fff" }} id="draggable-dialog-title6">
                                      ADD NEW SUPERVISOR
                                    </DialogTitle>

                                    <DialogContent >
                                      <DialogContentText className='row-sm row'>

                                        <div className="col-lg-6">
                                          <label className="form-label" htmlFor="validationCustom05">Workshop Id*</label>
                                          <MultiSelect
                                            value={selected}
                                            onChange={setSelected}
                                            labelledBy="Select"
                                            options={countries}
                                          />
                                        </div>
                                        <div className="col-lg-6">
                                          <label className="form-label" htmlFor="validationCustom05">First Name*</label>
                                          <input className="form-control" id="validationCustom05" type="text" placeholder='Enter First Name' required />
                                        </div>
                                        <div className="col-lg-6">
                                          <label className="form-label" htmlFor="validationCustom05">Last Name*</label>
                                          <input className="form-control" id="validationCustom05" type="text" placeholder='Enter Last Name' required />
                                        </div>
                                        <div className="col-lg-6">
                                          <label className="form-label" htmlFor="validationCustom05">Username*</label>
                                          <input className="form-control" id="validationCustom05" type="text" placeholder='Enter Username' required />
                                        </div>
                                        <div className="col-lg-6">
                                          <label className="form-label" htmlFor="validationCustom05">Email Id</label>
                                          <input className="form-control" id="validationCustom05" type="text" placeholder='Enter Email Id' required />
                                        </div>
                                        <div className="col-lg-6">
                                          <label className="form-label" htmlFor="validationCustom05">Contact Number*</label>
                                          <input className="form-control" id="validationCustom05" type="text" placeholder='Enter Contact Number' required />
                                        </div>
                                        <div className="col-lg-6">
                                          <label className="form-label" htmlFor="validationCustom05">Password*</label>
                                          <input className="form-control" id="validationCustom05" type="text" placeholder='Enter Password' required />
                                        </div>
                                        <div className="col-lg-6">
                                          <label className="form-label" htmlFor="address">Password Expiry Date*</label>
                                          <input className="form-control" id="address" type="date" required />
                                          <div className="invalid-feedback">Please provide a valid zip.</div>
                                        </div>
                                        <div className="col-lg-6">
                                          <label className="form-label" htmlFor="validationCustom05">Designation*</label>
                                          <MultiSelect
                                            value={selected}
                                            onChange={setSelected}
                                            labelledBy="Select"
                                            options={countries}
                                          />
                                        </div>
                                        <div className="col-lg-6">
                                          <label className="form-label" htmlFor="address">Date Of Birth</label>
                                          <input className="form-control" id="address" type="date" required />
                                          <div className="invalid-feedback">Please provide a valid zip.</div>
                                        </div>
                                        <div className="col-lg-6">
                                          <label className="form-label" htmlFor="address">Date Of Anniversary</label>
                                          <input className="form-control" id="address" type="date" required />
                                          <div className="invalid-feedback">Please provide a valid zip.</div>
                                        </div>

                                        <div className="col-lg-6">
                                          <label className="form-label" htmlFor="validationCustom05">Address</label>
                                          <input className="form-control" id="validationCustom05" type="text" placeholder='Enter Address' required />
                                        </div>





                                      </DialogContentText>
                                    </DialogContent>

                                    <DialogActions>
                                      <Button variant="secondary" className="me-1" onClick={handleClosedraggable6}>
                                        Close
                                      </Button>
                                      <Button className="me-1" variant="success">
                                        Save
                                      </Button>
                                    </DialogActions>
                                  </Dialog>

                                  <MultiSelect
                                    value={selected}
                                    onChange={setSelected}
                                    labelledBy="Select"
                                    options={countries}
                                  />
                                </div>

                                <div className="col-lg-3">
                                  <label className="form-label" htmlFor="address">Chassis Number/ VIN</label>
                                  <input className="form-control" id="address" type="text" required />
                                  <div className="invalid-feedback">Please provide a valid zip.</div>
                                </div>

                                <div className="col-lg-3">
                                  <label className="form-label" htmlFor="address">Engine Number</label>
                                  <input className="form-control" id="address" type="text" required />
                                  <div className="invalid-feedback">Please provide a valid zip.</div>
                                </div>

                                <div className="col-lg-3">
                                  <label className="form-label" htmlFor="address">Date Of Registration</label>
                                  <input className="form-control" id="address" type="date" required />
                                  <div className="invalid-feedback">Please provide a valid zip.</div>
                                </div>

                                <div className="col-lg-3">
                                  <label className="form-label" htmlFor="address">Manufactured Year</label>
                                  <input className="form-control" id="address" type="text" required />
                                  <div className="invalid-feedback">Please provide a valid zip.</div>
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
