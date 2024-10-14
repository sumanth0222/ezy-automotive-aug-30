import React, { Fragment, useState } from 'react';
import { Accordion, Col, Row, Button , Form} from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";
import { MultiSelect } from "react-multi-select-component";
import { Inspection, contact, countries, payment, cs, status } from "../../../common/selectdata";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Pageheader from '../../../layout/layoutcomponent/pageheader';
import { useNavigate } from 'react-router-dom';

const CustomerEdit = () => {

  const [selected, setSelected] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const navigate = useNavigate(); 
 
  const handleInvoice = () => {
    navigate(`${import.meta.env.BASE_URL}elements/buttons/supplierinvoice`); 
  };

  const handleCustomerVehicle = () => {
    navigate(`${import.meta.env.BASE_URL}pages/todotask/customercar`); 
  };

  const handlePayment = () => {
    navigate(`${import.meta.env.BASE_URL}elements/buttons/supplierpayments`); // Navigate to the supplierpayments page
  };


  
  // Handler for the Cancel button
  const handleCancel = () => {
    navigate(-1); // Navigate back to the previous page
  };

  // State to track each toggle button's state
  const [toggleStates, setToggleStates] = useState({
    gstFree: true, // The toggle state
    gstFree1: true,
    gstFree2: true,
    gstFree3: true,
    gstFree4: true,
  });

  // Toggle button handler for individual switches
  const handleToggle = (key) => {
    setToggleStates((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  const customervehicle = [
    { rego: "10BMK", make: "Freighter", model: "", modelcode:"", modelseries:"" },
    { rego: "08BMK", make: "Freighter", model: "", modelcode:"", modelseries:"" },
    { rego: "07BMK", make: "Kenworth", model: "T409", modelcode:"", modelseries:"" },
    { rego: "865BMK", make: "Freighter", model: "", modelcode:"", modelseries:"" }, 
  ];

  const customerinvoice = [
    { reference: "50003", postdate: "10/10/2024", trantype: "Invoice", status:"Open", type:"Account", amount:"$520.80", balance:"$520.80" },
    
  ];

  const customerbookings = [
    { bookingnumber: "50003", bookingdate: "10/10/2024", status:"Closed", description:"", total:"$520.80" },
    
  ];

  const [filter, setFilter] = useState("");

   // Filtering based on search term
   const filterData = (data, field) =>
    data.filter((item) =>
      item[field].toLowerCase().includes(filter.toLowerCase())
    );


  return (




    <Fragment>

      {/* <Pageheader />   */}
      <Pageheader title="Customers" heading="Customer" active="Edit" />

      <Row className='faq'>
        <Col xl={12}>
          <div className="panel-group2" id="accordion11" role="tablist">

            <Accordion className='overflow-hidden card'>
              <Accordion.Item eventKey="0" >
                <Accordion.Header className='accordion-toggle font-weight-semibold tx-12 panel-heading2 ' >


                  <div className="row-sm row " >

                    <div>
                      <a className="btn ripple btn-dark text-white btn-icon" data-placement="top" href="#">
                        <i className="fa fa-user"></i>
                      </a>
                    </div>
                    <div>
                      <h4 className='mt-1'>Customer Details</h4>
                    </div>

                  </div>
                 


                </Accordion.Header>

                <Accordion.Body id="collapseFour1" className="panel-body">
                  <div className="col-lg-12 col-md-12">
                    <div className="card">




                      <div className="">
                      <form className="row g-3 needs-validation" noValidate>
                        
                        
                            
                        <div className="col-lg-4">
                        <label className="form-label" htmlFor="gstFree1">CASH</label>
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
                        <label className="form-label" htmlFor="gstFree">Company/Individual</label>
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
                        <label className="form-label" htmlFor="gstFree2">NON-BILLER</label>
                        <div className="form-group">
                          <label className="custom-switch form-switch mb-0 p-0 form-label">
                            <input
                              type="checkbox"
                              className="custom-switch-input form-control"
                              checked={toggleStates.gstFree2}
                              onChange={() => handleToggle('gstFree2')}
                            />
                            <span
                              className="custom-switch-indicator custom-switch-indicator-lg"
                              style={{
                                backgroundColor: toggleStates.gstFree2 ? "#323251" : "#d6d6e6",
                                color: "white",
                              }}
                            >
                              {toggleStates.gstFree2 ? "On" : "Off"}
                            </span>
                          </label>
                        </div>
                        </div>

                    
                      {/* Conditionally render fields based on toggle state */}
                      {toggleStates.gstFree ? (
                        <>
                          {/* If toggle is ON (Individual), show First and Last Name */}
                          <div className="col-md-4">
                            <label className="form-label" htmlFor="firstName">First Name</label>
                            <input className="form-control" id="firstName" type="text" required />
                          </div>
                          <div className="col-md-4">
                            <label className="form-label" htmlFor="lastName">Last Name</label>
                            <input className="form-control" id="lastName" type="text" required />
                          </div>
                        </>
                      ) : (
                        <>
                          {/* If toggle is OFF (Company), show Company Name */}
                          <div className="col-md-8">
                            <label className="form-label" htmlFor="companyName">Company Name</label>
                            <input className="form-control" id="companyName" type="text" required />
                          </div>
                        </>
                      )}

                      {/* Rest of the fields */}
                      <div className="col-md-4">
                        <label className="form-label" htmlFor="phone">Biller</label>
                        <input className="form-control" id="phone" type="text" required />
                        <div className="invalid-feedback">Please provide a valid zip.</div>
                      </div>

                      <div className="col-md-6">
                        <label className="form-label" htmlFor="cell">Street Address 1</label>
                        <input className="form-control" id="cell" type="text" required />
                        <div className="invalid-feedback">Please provide a valid zip.</div>
                      </div>
                      <div className="col-md-6">
                        <label className="form-label" htmlFor="email">Street Address 2</label>
                        <input className="form-control" id="email" type="text" required />
                        <div className="invalid-feedback">Please provide a valid zip.</div>
                      </div>

                      <div className="col-md-4">
                        <label className="form-label" htmlFor="address">Street Suburb</label>
                        <input className="form-control" id="address" type="text" required />
                        <div className="invalid-feedback">Please provide a valid zip.</div>
                      </div>
                      <div className="col-lg-4">
                        <p>Street State</p>
                        <MultiSelect
                          value={selected}
                          onChange={setSelected}
                          labelledBy="Select"
                          options={countries}
                        />
                      </div>
                      <div className="col-md-4">
                        <label className="form-label" htmlFor="city">Postcode</label>
                        <input className="form-control" id="city" type="text" required />
                        <div className="invalid-feedback">Please provide a valid zip.</div>
                      </div>
                      

                      <div className="col-md-6">
                        <label className="form-label" htmlFor="cell">Postal Address 1</label>
                        <input className="form-control" id="cell" type="text" required />
                        <div className="invalid-feedback">Please provide a valid zip.</div>
                      </div>
                      <div className="col-md-6">
                        <label className="form-label" htmlFor="email">Postal Address 2</label>
                        <input className="form-control" id="email" type="text" required />
                        <div className="invalid-feedback">Please provide a valid zip.</div>
                      </div>

                      <div className="col-md-4">
                        <label className="form-label" htmlFor="address">Postal Suburb</label>
                        <input className="form-control" id="address" type="text" required />
                        <div className="invalid-feedback">Please provide a valid zip.</div>
                      </div>
                      <div className="col-lg-4">
                        <p>Postal State</p>
                        <MultiSelect
                          value={selected}
                          onChange={setSelected}
                          labelledBy="Select"
                          options={countries}
                        />
                      </div>
                      <div className="col-md-4">
                        <label className="form-label" htmlFor="city">Postcode</label>
                        <input className="form-control" id="city" type="text" required />
                        <div className="invalid-feedback">Please provide a valid zip.</div>
                      </div>



                      <div className="col-md-4">
                        <label className="form-label" htmlFor="state">Mobile</label>
                        <input className="form-control" id="state" type="text" required />
                        <div className="invalid-feedback">Please provide a valid zip.</div>
                      </div>
                      <div className="col-md-4">
                        <label className="form-label" htmlFor="zipCode">Phone</label>
                        <input className="form-control" id="zipCode" type="text" required />
                        <div className="invalid-feedback">Please provide a valid zip.</div>
                      </div>
                      <div className="col-md-4">
                        <label className="form-label" htmlFor="preferredContact">Fax</label>
                        <input className="form-control" id="preferredContact" type="text" required />
                        <div className="invalid-feedback">Please provide a valid zip.</div>
                      </div>


                      <div className="col-md-4">
                        <label className="form-label" htmlFor="customerSource">Email</label>
                        <input className="form-control" id="customerSource" type="text" required />
                        <div className="invalid-feedback">Please provide a valid zip.</div>
                      </div>
                      <div className="col-md-4">
                        <label className="form-label" htmlFor="customerSource">Web</label>
                        <input className="form-control" id="customerSource" type="text" required />
                        <div className="invalid-feedback">Please provide a valid zip.</div>
                      </div>
                      <div className="col-lg-4">
                        <p>Preferred Method Of Contact</p>
                        <MultiSelect
                          value={selected}
                          onChange={setSelected}
                          labelledBy="Select"
                          options={contact}
                        />
                      </div>

                      <div className="col-md-4">
                        <label className="form-label" htmlFor="state">Hourly Rate</label>
                        <input className="form-control" id="state" type="text" required />
                        <div className="invalid-feedback">Please provide a valid zip.</div>
                      </div>
                      <div className="col-md-4">
                        <label className="form-label" htmlFor="zipCode">Discount</label>
                        <input className="form-control" id="zipCode" type="text" required />
                        <div className="invalid-feedback">Please provide a valid zip.</div>
                      </div>
                      <div className="col-md-4">
                        <label className="form-label" htmlFor="preferredContact">Markup</label>
                        <input className="form-control" id="preferredContact" type="text" required />
                        <div className="invalid-feedback">Please provide a valid zip.</div>
                      </div>

                      <div className="col-lg-4">
                        <p>Price Type</p>
                        <MultiSelect
                          value={selected}
                          onChange={setSelected}
                          labelledBy="Select"
                          options={Inspection}
                        />
                      </div>
                      <div className="col-lg-4">
                        <p>Payment Terms</p>
                        <MultiSelect
                          value={selected}
                          onChange={setSelected}
                          labelledBy="Select"
                          options={payment}
                        />
                      </div>
                      <div className="col-lg-4">
                        <p>Customer Source</p>
                        <MultiSelect
                          value={selected}
                          onChange={setSelected}
                          labelledBy="Select"
                          options={cs}
                        />
                      </div>


                      <div className="col-md-4">
                        <label className="form-label" htmlFor="state">Imported ID</label>
                        <input className="form-control" id="state" type="text" required />
                        <div className="invalid-feedback">Please provide a valid zip.</div>
                      </div>
                      <div className="col-md-4">
                        <label className="form-label" htmlFor="zipCode">Australian Business Number</label>
                        <input className="form-control" id="zipCode" type="text" required />
                        <div className="invalid-feedback">Please provide a valid zip.</div>
                      </div>
                      
                      <div className="col-lg-2">
                        <label className="form-label" htmlFor="gstFree3">GST Free</label>
                        <div className="form-group">
                          <label className="custom-switch form-switch mb-0 p-0 form-label">
                            <input
                              type="checkbox"
                              className="custom-switch-input form-control"
                              checked={toggleStates.gstFree3}
                              onChange={() => handleToggle('gstFree3')}
                            />
                            <span
                              className="custom-switch-indicator custom-switch-indicator-lg"
                              style={{
                                backgroundColor: toggleStates.gstFree3 ? "#323251" : "#d6d6e6",
                                color: "white",
                              }}
                            >
                              {toggleStates.gstFree3 ? "On" : "Off"}
                            </span>
                          </label>
                        </div>
                        </div>

                        <div className="col-lg-2">
                        <label className="form-label" htmlFor="gstFree4">Customer Limited</label>
                        <div className="form-group">
                          <label className="custom-switch form-switch mb-0 p-0 form-label">
                            <input
                              type="checkbox"
                              className="custom-switch-input form-control"
                              checked={toggleStates.gstFree4}
                              onChange={() => handleToggle('gstFree4')}
                            />
                            <span
                              className="custom-switch-indicator custom-switch-indicator-lg"
                              style={{
                                backgroundColor: toggleStates.gstFree4 ? "#323251" : "#d6d6e6",
                                color: "white",
                              }}
                            >
                              {toggleStates.gstFree4 ? "On" : "Off"}
                            </span>
                          </label>
                        </div>
                        </div>
                    </form>

                    <hr style={{border:"2px solid #000"}}></hr>
                    <h3>Contact 1</h3>
                    <form className="row g-3 needs-validation" noValidate>
                        
                          
                          {/* Rest of the fields */}
                          <div className="col-md-4">
                            <label className="form-label" htmlFor="phone">First Name</label>
                            <input className="form-control" id="phone" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>
                          <div className="col-md-4">
                            <label className="form-label" htmlFor="cell">Last Name</label>
                            <input className="form-control" id="cell" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>
                          <div className="col-md-4">
                            <label className="form-label" htmlFor="email">Position</label>
                            <input className="form-control" id="email" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>

                          <div className="col-md-4">
                            <label className="form-label" htmlFor="address">Phone</label>
                            <input className="form-control" id="address" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>
                          <div className="col-md-4">
                            <label className="form-label" htmlFor="address">Mobile</label>
                            <input className="form-control" id="address" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>
                          <div className="col-md-4">
                            <label className="form-label" htmlFor="address">Email</label>
                            <input className="form-control" id="address" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>
                          
                         
                    </form>

                    <hr style={{border:"2px solid #000"}}></hr>
                    <h3>Contact 2</h3>
                    <form className="row g-3 needs-validation" noValidate>
                        
                          
                          {/* Rest of the fields */}
                          <div className="col-md-4">
                            <label className="form-label" htmlFor="phone">First Name</label>
                            <input className="form-control" id="phone" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>
                          <div className="col-md-4">
                            <label className="form-label" htmlFor="cell">Last Name</label>
                            <input className="form-control" id="cell" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>
                          <div className="col-md-4">
                            <label className="form-label" htmlFor="email">Position</label>
                            <input className="form-control" id="email" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>

                          <div className="col-md-4">
                            <label className="form-label" htmlFor="address">Phone</label>
                            <input className="form-control" id="address" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>
                          <div className="col-md-4">
                            <label className="form-label" htmlFor="address">Mobile</label>
                            <input className="form-control" id="address" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>
                          <div className="col-md-4">
                            <label className="form-label" htmlFor="address">Email</label>
                            <input className="form-control" id="address" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>
                          
                         
                    </form>


                    <hr style={{border:"2px solid #000"}}></hr>
                    <h3>Contact 3</h3>
                    <form className="row g-3 needs-validation" noValidate>
                        
                          
                          {/* Rest of the fields */}
                          <div className="col-md-4">
                            <label className="form-label" htmlFor="phone">First Name</label>
                            <input className="form-control" id="phone" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>
                          <div className="col-md-4">
                            <label className="form-label" htmlFor="cell">Last Name</label>
                            <input className="form-control" id="cell" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>
                          <div className="col-md-4">
                            <label className="form-label" htmlFor="email">Position</label>
                            <input className="form-control" id="email" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>

                          <div className="col-md-4">
                            <label className="form-label" htmlFor="address">Phone</label>
                            <input className="form-control" id="address" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>
                          <div className="col-md-4">
                            <label className="form-label" htmlFor="address">Mobile</label>
                            <input className="form-control" id="address" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>
                          <div className="col-md-4">
                            <label className="form-label" htmlFor="address">Email</label>
                            <input className="form-control" id="address" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>

                          <div className="col-md-12">
                            <label className="form-label" htmlFor="address">Email</label>
                            <textarea className="form-control" id="address" type="text" required rows={5}></textarea>
                          </div>
                          
                         
                    </form>
                        
                      </div>



                    </div>

                    <div id="button6">
                      <div className="text-wrap row justify-content-between">
                        <div className="btn-list">
                          <button type="button" className="btn btn-primary" onClick={handleCancel}>
                            Cancel
                          </button>
                          <button type="button" className="btn btn-danger">
                            Delete
                          </button>


                        </div>
                        <div>
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

            <Accordion className='overflow-hidden card'>
              <Accordion.Item eventKey="0">
                <Accordion.Header className='accordion-toggle font-weight-semibold tx-12 panel-heading2 '>
                  <div className="row-sm row justify-content-between d-flex" >
                    {/* <div className='row-sm row '> */}
                        <div>
                        <a className="btn ripple btn-dark text-white btn-icon" data-placement="top" href="#">
                            <i className="fa fa-car"></i>
                        </a>
                        </div>
                        <div>
                        <h4 className='mt-1'>Customer Vehicles</h4>
                        </div>
                    {/* </div> */}
                    <div className="">
                        <a
                        className="btn ripple btn-success text-white btn-icon"
                        data-placement="top"
                        data-bs-toggle="tooltip"
                        title="Add supplier"
                        href="#"
                        onClick={handleCustomerVehicle}
                        >
                        
                            <li className="fa fa-plus"></li>
                        
                        </a>
                    </div>

                   
                  </div>
                 
                  
                </Accordion.Header>

                <Accordion.Body id="collapseFour1" className="panel-body">
                   {/* Orders Table */}
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
                                <td>
                                  <div className="row d-flex justify-content-evenly">
                                  <button
                                    className="btn btn-sm btn-primary"
                                    // onClick={handleEditClick}
                                  >
                                   <i className="fa fa-edit"></i>
                                  </button>
                                  <button
                                    className="btn btn-sm btn-warning"
                                    // onClick={() => handleInvoiceClick(phone.phone)}
                                  >
                                    <i className="fas fa-file-alt"></i>
                                    
                                  </button>
                                  
                                  <button
                                    className="btn btn-sm btn-info"
                                    // onClick={() => handleMessageClick(phone.phone)}
                                  >
                                    <i className="fa fa-calendar"></i>
                                  </button>
                                 
                                  </div>
                                </td>
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
                      <span>Page <strong>1 of 4</strong> </span>
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
                </Accordion.Body>


              </Accordion.Item>
            </Accordion>

            <Accordion className="overflow-hidden card">
              <Accordion.Item eventKey="0" >
                <Accordion.Header className='accordion-toggle font-weight-semibold tx-12 panel-heading2' >
                  <div className="row-sm row justify-content-between" >
                    <div>
                      <a className="btn ripple btn-dark text-white btn-icon" data-placement="top" href="#">
                        <i className="fa fa-file"></i>
                      </a>
                    </div>
                    <div>
                      <h4 className='mt-1'>Customer Invoice</h4>
                    </div>

                    <div className="">
                        <a
                        className="btn ripple btn-success text-white btn-icon"
                        data-placement="top"
                        data-bs-toggle="tooltip"
                        title="Add supplier"
                        href="#"
                        onClick={handleInvoice}
                        >
                        
                            <li className="fa fa-plus"></li>
                        
                        </a>
                    </div>
                  </div>
                </Accordion.Header>

                <Accordion.Body id="collapseFour1" className="panel-body">
                  <div className="col-lg-12 col-md-12">
                  <form className="row g-3 needs-validation" noValidate>
                            
                            {/* Additional Fields */}
                            <div className="col-lg-4">
                              <Form.Label>Begin Date</Form.Label>
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
                              <Form.Label>End Date</Form.Label>
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
                            <div className="col-lg-4">
                                <p>Status</p>
                                <MultiSelect
                                value={selected}
                                onChange={setSelected}
                                labelledBy="Select"
                                options={status}
                                />
                            </div>
                            <div className="col-md-4">
                                <label className="form-label" htmlFor="phone">Reference</label>
                                <input className="form-control" id="phone" type="text" required />
                                <div className="invalid-feedback">Please provide a valid zip.</div>
                            </div>
                           
  
                          </form>

                             {/* Orders Table */}
                   <div className="table-responsive mt-4">
                    <table className="table table-bordered text-nowrap border-bottom">
                      <thead>
                        <tr>
                          <th className="wd-5p">Reference</th>
                          <th>Post Date</th>
                          <th>Tran Type</th>
                          <th>Status</th>
                          <th>Type</th>
                          <th>Amount</th>
                          <th>Balance</th>
                       
                        </tr>
                      </thead>
                      <tbody>
                        {filterData(customerinvoice, "reference").length > 0 ? (
                          filterData(customerinvoice, "reference").map(
                            (reference, index) => (
                              <tr key={index}>
                                <td className="wd-5p">
                                  {reference.reference}
                                </td>
                                <td>{reference.postdate}</td>
                                <td>{reference.trantype}</td>
                                <td>{reference.status}</td>
                                <td>{reference.type}</td>
                                <td>{reference.amount}</td>
                                <td>{reference.balance}</td>
                                <td>
                                  <div className="row d-flex justify-content-evenly">
                                  <button
                                    className="btn btn-sm btn-primary"
                                    // onClick={handleEditClick}
                                  >
                                   <i className="fa fa-edit"></i>
                                  </button>
                                 
                                 
                                  </div>
                                </td>
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
                      <span>Page <strong>1 of 4</strong> </span>
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
                </Accordion.Body>


              </Accordion.Item>
            </Accordion>

            <Accordion className="overflow-hidden card">
              <Accordion.Item eventKey="0" >
                <Accordion.Header className='accordion-toggle font-weight-semibold tx-12 panel-heading2' >
                  <div className="row-sm row justify-content-between" >
                    <div>
                      <a className="btn ripple btn-dark text-white btn-icon" data-placement="top" href="#">
                        <i className="fas fa-dollar-sign"></i>
                      </a>
                    </div>
                    <div>
                      <h4 className='mt-1'>Customer Payments</h4>
                    </div>


                    <div className="">
                        <a
                        className="btn ripple btn-success text-white btn-icon"
                        data-placement="top"
                        data-bs-toggle="tooltip"
                        title="Add supplier"
                        href="#"
                        // onClick={handlePayment}
                        >
                        
                            <li className="fa fa-plus"></li>
                        
                        </a>
                 </div>
                  </div>
                  
                </Accordion.Header>

                <Accordion.Body id="collapseFour1" className="panel-body">
                  <div className="col-lg-12 col-md-12">
                    <div className="card text-center">
                      <h5>No Payments Found</h5>
                    </div>
                  </div>
                </Accordion.Body>

              </Accordion.Item>
            </Accordion>

            <Accordion className="overflow-hidden card">
              <Accordion.Item eventKey="0" >
                <Accordion.Header className='accordion-toggle font-weight-semibold tx-12 panel-heading2' >
                  <div className="row-sm row justify-content-between" >
                    <div>
                      <a className="btn ripple btn-dark text-white btn-icon" data-placement="top" href="#">
                        <i className="fa fa-file"></i>
                      </a>
                    </div>
                    <div>
                      <h4 className='mt-1'>Customer Quotes</h4>
                    </div>

                    <div className="">
                        <a
                        className="btn ripple btn-success text-white btn-icon"
                        data-placement="top"
                        data-bs-toggle="tooltip"
                        title="Add supplier"
                        href="#"
                        // onClick={handleInvoice}
                        >
                        
                            <li className="fa fa-plus"></li>
                        
                        </a>
                    </div>
                  </div>
                </Accordion.Header>

                <Accordion.Body id="collapseFour1" className="panel-body">
                  <div className="col-lg-12 col-md-12">
                  <form className="row g-3 needs-validation" noValidate>
                            
                            {/* Additional Fields */}
                            <div className="col-lg-4">
                              <Form.Label>Begin Date</Form.Label>
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
                              <Form.Label>End Date</Form.Label>
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
                            <div className="col-md-4">
                                <label className="form-label" htmlFor="phone">Reference</label>
                                <input className="form-control" id="phone" type="text" required />
                                <div className="invalid-feedback">Please provide a valid zip.</div>
                            </div>
                           
  
                          </form>

                          <div className="col-lg-12 col-md-12">
                            <div className="card text-center">
                            <h5 style={{backgroundColor:"#e1e1e1",height:"80px",margin:"8px",paddingTop:"30px"}}>No Quotes Found</h5>
                            </div>
                         </div>
                   

                  </div>
                </Accordion.Body>


              </Accordion.Item>
            </Accordion>

            <Accordion className="overflow-hidden card">
              <Accordion.Item eventKey="0" >
                <Accordion.Header className='accordion-toggle font-weight-semibold tx-12 panel-heading2' >
                  <div className="row-sm row justify-content-between" >
                    <div>
                      <a className="btn ripple btn-dark text-white btn-icon" data-placement="top" href="#">
                        <i className="fa fa-calendar"></i>
                      </a>
                    </div>
                    <div>
                      <h4 className='mt-1'>Customer Bookings</h4>
                    </div>

                    <div className="">
                        <a
                        className="btn ripple btn-success text-white btn-icon"
                        data-placement="top"
                        data-bs-toggle="tooltip"
                        title="Add supplier"
                        href="#"
                        // onClick={handleInvoice}
                        >
                        
                            <li className="fa fa-plus"></li>
                        
                        </a>
                    </div>
                  </div>
                </Accordion.Header>

                <Accordion.Body id="collapseFour1" className="panel-body">
                  <div className="col-lg-12 col-md-12">
                  

                             {/* Orders Table */}
                   <div className="table-responsive mt-4">
                    <table className="table table-bordered text-nowrap border-bottom">
                      <thead>
                        <tr>
                          <th className="wd-5p">Booking Number</th>
                          <th>Booking Date</th>
                          <th>Status</th>
                          <th>Description</th>
                          <th>Total</th>
                       
                        </tr>
                      </thead>
                      <tbody>
                        {filterData(customerbookings, "bookingnumber").length > 0 ? (
                          filterData(customerbookings, "bookingnumber").map(
                            (bookingnumber, index) => (
                              <tr key={index}>
                                <td className="wd-5p">
                                  {bookingnumber.bookingnumber}
                                </td>
                                <td>{bookingnumber.bookingdate}</td>
                                <td>{bookingnumber.status}</td>
                                <td>{bookingnumber.description}</td>
                                <td>{bookingnumber.total}</td>
                                <td>
                                  <div className="row d-flex justify-content-evenly">
                                  <button
                                    className="btn btn-sm btn-primary"
                                    // onClick={handleEditClick}
                                  >
                                   <i className="fa fa-edit"></i>
                                  </button>
                                 
                                 
                                  </div>
                                </td>
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
                      <span>Page <strong>1 of 4</strong> </span>
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
                </Accordion.Body>


              </Accordion.Item>
            </Accordion>

            <Accordion className="overflow-hidden card">
              <Accordion.Item eventKey="0" >
                <Accordion.Header className='accordion-toggle font-weight-semibold tx-12 panel-heading2' >
                  <div className="row-sm row justify-content-between" >
                    <div>
                      <a className="btn ripple btn-dark text-white btn-icon" data-placement="top" href="#">
                        <i className="fa fa-search"></i>
                      </a>
                    </div>
                    <div>
                      <h4 className='mt-1'>Customer Inspections</h4>
                    </div>


                    <div className="">
                        <a
                        className="btn ripple btn-success text-white btn-icon"
                        data-placement="top"
                        data-bs-toggle="tooltip"
                        title="Add supplier"
                        href="#"
                        // onClick={handlePayment}
                        >
                        
                            <li className="fa fa-plus"></li>
                        
                        </a>
                 </div>
                  </div>
                  
                </Accordion.Header>

                <Accordion.Body id="collapseFour1" className="panel-body">
                  <div className="col-lg-12 col-md-12">
                    <div className="card text-center">
                      <h5>No Inspections</h5>
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

CustomerEdit.propTypes = {};

CustomerEdit.defaultProps = {};

export default CustomerEdit;
