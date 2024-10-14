import React, { Fragment, useState } from 'react';
import { Accordion, Col, Row, Button , Form,  Card,InputGroup } from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";
import Pageheader from '../../../layout/layoutcomponent/pageheader';
import DatePicker from "react-datepicker";
import { MultiSelect } from "react-multi-select-component";
import {  countries} from "../../../common/selectdata";
import SunEditor from 'suneditor-react'; // Make sure you have this installed
import 'suneditor/dist/css/suneditor.min.css'; // Import SunEditor styles
import Draggable from 'react-draggable';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
} from "@mui/material";

const CustomerFile = () => {

  const [selected, setSelected] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [showTable, setShowTable] = useState(true); // State to toggle the table visibility
  const [showForm, setShowForm] = useState(false);
  const [value, setValue] = useState(''); // State for SunEditor

  // Invoice Handling Functions
  const handleAddRow = () => {
    setRows([...rows, { reference: '', postdate: '', supplier: '', balancedue: 0, applied: 1, balance: 0 }]);
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

  // Invoice State
  const [rows, setRows] = useState([
    { product: "", description: "", hours: "0", unitprice: "$0.00", qty: "", unitcost:"", gst:"",linetotal:"" }
  ]);

  const calculateTotals = () => {
    const subtotal = rows.reduce((sum, row) => sum + (row.balancedue * row.applied), 0);
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


    // State to track each toggle button's state
  const [toggleStates, setToggleStates] = useState({
    gstFree: true, // The toggle state
    gstFree1: true,

  });

  // Toggle button handler for individual switches
  const handleToggle = (key) => {
    setToggleStates((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };


  function PaperComponent(props) {
    return (
      <Draggable
        handle="#draggable-dialog-title"
        cancel={'[class*="MuiDialogContent-root"]'}
      >
        <Paper {...props} />
      </Draggable>
    );
  }

  const [open1, setOpen1] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(false);
  const [open2, setOpen2] = useState(false);

  const handleToggleSubMenu = () => {
  setOpenSubMenu(!openSubMenu);
};

const handleChangeCustomerClick = () => {
  setOpen1(true);
  setOpenSubMenu(false); // Close submenu after opening dialog
};

const handleClosedraggable = () => {
  setOpen1(false);
};

const handleSmsCustomerClick = () =>{
    setOpen2(true)
    setOpenSubMenu(false)
}
const handleClosedraggable2 = () => {
    setOpen2(false);
  };







  return (
    <Fragment>
      <Pageheader title="Customers" heading="Customer" active="Files" />

      <Row className='faq'>
        <Col xl={12}>
          <div className="panel-group2" id="accordion11" role="tablist">

            <Accordion className='overflow-hidden card'>
              <Accordion.Item eventKey="0" >
                <Accordion.Header className='accordion-toggle font-weight-semibold tx-12 panel-heading2 ' >

                  <div className="row-sm row">
                    <div>
                      <a className="btn ripple btn-dark text-white btn-icon" href="#">
                        <i className="fa fa-user"></i>
                      </a>
                    </div>
                    <div>
                      <h4 className='mt-1'>Customer: BakerMark Transport</h4>
                    </div>
                  </div>
                  <div>
                      <a className="btn ripple btn-dark text-white btn-icon"  onClick={handleToggleSubMenu}>
                        <i className="fa fa-star"></i>
                      </a>

                      {/* Submenu */}
                        {openSubMenu && (
                        <div className="dropdown-menu show" style={{ position: 'absolute', top: '40px', right: '550px', left:'450px' }}>
                            <a className="dropdown-item" href="#" onClick={handleChangeCustomerClick}>
                            <i className="fa fa-edit"></i> Change Customer
                            </a>
                            <a className="dropdown-item" href="#" onClick={handleSmsCustomerClick}>
                            <i className="fa fa-envelope"></i> SMS Customer
                            </a>
                        </div>
                        )}



                     
                  {/* Dialog for 'Change Customer' */}
                    <Dialog
                    open={open1}
                    onClose={handleClosedraggable}
                    PaperComponent={PaperComponent}
                    aria-labelledby="draggable-dialog-title"
                    >
                    <DialogTitle style={{ cursor: "move", backgroundColor: "#38cab3" }} id="draggable-dialog-title">
                        Change Customer 
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText className="row-sm row">
                        <div className="col-lg-12 mt-3">
                            {/* <label className="form-label" htmlFor="validationCustom05">Rego</label> */}
                            <textarea className="form-control" id="validationCustom05" type="text" required row="5"></textarea>
                        </div>
                        <div className="col-lg-12">
                            <label className="form-label" htmlFor="validationCustom05">New Customer</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                        </div>

                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button variant="secondary" className="me-1" onClick={handleClosedraggable}>
                        Cancel
                        </Button>
                        <Button onClick={handleClosedraggable} className="me-1" variant="success">
                        Confirm
                        </Button>
                    </DialogActions>
                    </Dialog>

                        
                  {/* Dialog for 'Change Customer' */}
                  <Dialog
                    open={open2}
                    onClose={handleClosedraggable2}
                    PaperComponent={PaperComponent}
                    aria-labelledby="draggable-dialog-title"
                    >
                    <DialogTitle style={{ cursor: "move", backgroundColor: "#38cab3" }} id="draggable-dialog-title">
                        BakerMark Transport
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText className="row-sm row">
                        <div className="col-lg-12 mt-3">
                            <label className="form-label" htmlFor="validationCustom05">Mobile</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                            
                        </div>
                        <div className="col-lg-12">
                            <label className="form-label" htmlFor="validationCustom05">Message</label>
                            <textarea className="form-control" id="validationCustom05" type="text" row="8"></textarea>
                        </div>

                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button variant="secondary" className="me-1" onClick={handleClosedraggable2}>
                        Cancel
                        </Button>
                        <Button onClick={handleClosedraggable} className="me-1" variant="success">
                        Send
                        </Button>
                    </DialogActions>
                    </Dialog>
                  
                  </div>

                </Accordion.Header>

                <Accordion.Body className="panel-body">
                  <div className="col-lg-12 col-md-12">
                    <div className="card">
                      <div className="p-4">
                        <Row>
                          <Col md={4}>
                            <h6>Customer Information</h6>
                            <p>BakerMark Transport</p> {/* Name */}
                            <p>West Reef Road</p> {/* Address */}
                            <p>Townsville QLD 4810</p> {/* Extra Info */}
                          </Col>
                          <Col md={4}>
                            <h6>Customer Contact</h6>
                            <p>
                              <i className="fa fa-phone" aria-hidden="true"></i> {"(07) 47788-8847"}
                            </p>
                            <p>
                              <i className="fa fa-envelope" aria-hidden="true"></i> {"0404-888-888"}
                            </p>
                            <p>
                              <i className="fa fa-link" aria-hidden="true"></i> {"drivemech@example.com"}
                            </p>
                          </Col>
                          <Col md={4}>
                            <h6>Customer Address</h6>
                            <p>
                              <i className="fa fa-map-marker" aria-hidden="true"></i>
                            </p>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            <Accordion className='overflow-hidden card'>
              <Accordion.Item eventKey="0" >
                <Accordion.Header className='accordion-toggle font-weight-semibold tx-12 panel-heading2 ' >

                  <div className="row-sm row">
                    <div>
                      <a className="btn ripple btn-dark text-white btn-icon" href="#">
                        <i className="fas fa-car-alt"></i>
                      </a>
                    </div>
                    <div>
                      <h4 className='mt-1'>Select A Vehicle (Optional)</h4>
                    </div>
                  </div>

                    <div className="row-sm row">
                        <div>
                            <a className="btn ripple btn-dark text-white btn-icon" href="#" onClick={() => {
                                setShowTable(!showTable);
                                setShowForm(false);  // Hide form when showing the table
                                }}>
                                <i className="fa fa-bars"></i>
                            </a>
                        </div>
                        <div>
                            <a className="btn ripple btn-dark text-white btn-icon" href="#" onClick={() => {
                                setShowForm(!showForm);
                                setShowTable(false);  // Hide table when showing the form
                                }}>
                                <i className="fa fa-plus"></i>
                            </a>
                        </div>
                    </div>

                </Accordion.Header>

                <Accordion.Body className="panel-body">
                  {showTable && ( // Conditionally render the table based on showTable state
                    <div className="col-lg-12 col-md-12">
                      <div className="card">

                        <div className="table-responsive mt-4">
                          <table className="table table-bordered text-nowrap border-bottom">
                            <thead>
                              <tr>
                                <th className="wd-5p">Rego</th>
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
                                      <td className="wd-5p">
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
                      </div>
                    </div>
                  )}

                 
                </Accordion.Body>

                <Accordion.Body>
                {showForm && (
                    <Form>

                    <Row>

                <div className="col-lg-4">
                  <label className="form-label" htmlFor="phone">Rego</label>
                  <input className="form-control" id="phone" type="text" required />
                  <div className="invalid-feedback">Please provide a valid zip.</div>
                </div>
                <div className="col-lg-4">
                  <p>State</p>
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
                  <p>Body Type</p>
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
                        <Button variant="secondary">
                          Cancel
                        </Button>
                        <Button type="submit" className="me-2">
                          Save
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                  )}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            <Accordion className='overflow-hidden card'>
              <Accordion.Item eventKey="0">
                <Accordion.Header className='accordion-toggle font-weight-semibold tx-12 panel-heading2 '>
                  <div className="row-sm row justify-content-between d-flex" >
                    <div className=' justify-content-between d-flex'>
                        <div>
                        <a className="btn ripple btn-dark text-white btn-icon" data-placement="top" href="#">
                            <i className="fa fa-file"></i>
                        </a>
                        </div>
                        <div style={{paddingLeft:"20px"}}>
                        <h4 className='mt-1'>Customer Invoice</h4>
                        </div>
                    </div>

                    
                  </div>
                 
                  
                </Accordion.Header>

                <Accordion.Body id="collapseFour1" className="panel-body">
                  <div className="col-lg-12 col-md-12">
                  <div className=''>
                {
                  <Form>
                    <Row>
                        
                        <div className="col-lg-4">
                            <label className="form-label" htmlFor="phone">Invoice No.</label>
                            <input className="form-control" id="phone" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                        </div>
                        <div className="col-lg-4">
                            <label className="form-label" htmlFor="phone">Job Card No.</label>
                            <input className="form-control" id="phone" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                        </div>
                        <div className="col-lg-4">
                            <label className="form-label" htmlFor="phone">Order Number</label>
                            <input className="form-control" id="phone" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                        </div>

                          <div className="col-lg-4">
                              <Form.Label>Post Date</Form.Label>
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
                          <Form.Label>Invoice Type</Form.Label>
                            <MultiSelect
                                value={selected}
                                onChange={setSelected}
                                labelledBy="Select"
                                options={countries}
                            />
                          </div>
                     

                          <div className="col-lg-4">
                        <label className="form-label" htmlFor="gstFree1">Account Type</label>
                        <div className="form-group">
                          <label className="custom-switch form-switch mb-0 p-0 form-label">
                            <input
                              type="checkbox"
                              className="custom-switch-input form-control"
                              checked={toggleStates.gstFree1}
                              onChange={() => handleToggle('gstFree1')}
                            />
                            <span
                              className="custom-switch-indicator custom-switch-indicator-lg"
                              style={{
                                backgroundColor: toggleStates.gstFree1 ? "#323251" : "#d6d6e6",
                                color: "white",
                              }}
                            >
                              {toggleStates.gstFree1 ? "On" : "Off"}
                            </span>
                          </label>
                        </div>
                        </div>

                        <div className="col-lg-4">
                              <Form.Label>Follow Up Date</Form.Label>
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
                            <label className="form-label" htmlFor="phone">Odometer</label>
                            <input className="form-control" id="phone" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                        </div>
                        <div className="col-lg-4">
                            <label className="form-label" htmlFor="phone">Hours</label>
                            <input className="form-control" id="phone" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                        </div>
                        <div className="col-lg-4">
                            <label className="form-label" htmlFor="phone">Next Service -KMs</label>
                            <input className="form-control" id="phone" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                        </div>

                        <div className="col-lg-4">
                          <Form.Label>Job Status</Form.Label>
                            <MultiSelect
                                value={selected}
                                onChange={setSelected}
                                labelledBy="Select"
                                options={countries}
                            />
                        </div>

                        <div className="col-lg-4">
                            <label className="form-label" htmlFor="phone">Job Status Comment</label>
                            <input className="form-control" id="phone" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                        </div>

                        <div className="col-lg-4">
                        <label className="form-label" htmlFor="gstFree">Internal Invoice</label>
                        <div className="form-group">
                          <label className="custom-switch form-switch mb-0 p-0 form-label">
                            <input
                              type="checkbox"
                              className="custom-switch-input form-control"
                              checked={toggleStates.gstFree}
                              onChange={() => handleToggle('gstFree')}
                            />
                            <span
                              className="custom-switch-indicator custom-switch-indicator-lg"
                              style={{
                                backgroundColor: toggleStates.gstFree ? "#323251" : "#d6d6e6",
                                color: "white",
                              }}
                            >
                              {toggleStates.gstFree ? "On" : "Off"}
                            </span>
                          </label>
                        </div>
                        </div>

                          <div className="col-lg-4">
                          <Form.Label>Payment Terms</Form.Label>
                            <MultiSelect
                                value={selected}
                                onChange={setSelected}
                                labelledBy="Select"
                                options={countries}
                            />
                          </div>
                          <div className="col-lg-4">
                          <Form.Label>Customer Source</Form.Label>
                            <MultiSelect
                                value={selected}
                                onChange={setSelected}
                                labelledBy="Select"
                                options={countries}
                            />
                          </div>

                          <div className="col-lg-12">
                            <label className="form-label" htmlFor="phone">Description</label>
                            <textarea className="form-control" id="phone" type="text" required row="5" ></textarea>
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                        </div>
                     

                      
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
                                <th>Hours</th>
                                <th>Unit Price</th>
                                <th>Qty</th>
                                <th>Unit Cost</th>
                                <th>GST</th>
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
                                      type="text"
                                      value={row.hours}
                                      onChange={(e) => handleRowChange(index, 'hours', e.target.value)}
                                      className="form-control"
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="number"
                                      value={row.unitprice}
                                      onChange={(e) => handleRowChange(index, 'unitprice', parseFloat(e.target.value))}
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
                                  <td>
                                    <input
                                      type="number"
                                      value={row.unitcost}
                                      onChange={(e) => handleRowChange(index, 'unitcost', parseFloat(e.target.value))}
                                      className="form-control"
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="number"
                                      value={row.gst}
                                      onChange={(e) => handleRowChange(index, 'gst', parseFloat(e.target.value))}
                                      className="form-control"
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="number"
                                      value={row.linetotal}
                                      onChange={(e) => handleRowChange(index, 'linetotal', parseFloat(e.target.value))}
                                      className="form-control"
                                    />
                                  </td>
                                  
                                  
                            
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

<Form>

<Row>
        <Col md={6}>
          <Card>
            <Card.Header className="border-bottom-0">
              <h3 className="card-title">Invoice Notes</h3>
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
      
                 </Form>
              </div>

                <div id="button6">
                      <div className="text-wrap row justify-content-between pt-5">
                        <div>
                          <button type="button" className="btn btn-danger">
                          Cancel
                          </button>
                        </div>
                        <div className="btn-list">
                          <button type="button" className="btn btn-primary">
                            Process
                          </button>
                          <button type="button" className="btn btn-teal">
                           Save
                          </button>


                        </div>
                        
                      </div>
                    </div>

                </div>
                </Accordion.Body>


              </Accordion.Item>
            </Accordion>

          </div>
        </Col>
      </Row>
    </Fragment>
  );
}

export default CustomerFile;
