import React, { Fragment, useState } from 'react';
import { Accordion, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import "react-datepicker/dist/react-datepicker.css";
import Pageheader from '../../../layout/layoutcomponent/pageheader';
import { MultiSelect } from "react-multi-select-component";
import { Inspection, contact, countries, payment, cs } from "../../../common/selectdata";

const CustomerPlus = () => {

  const [selected, setSelected] = useState([]);

  const navigate = useNavigate(); // Initialize useNavigate hook

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

  return (
    <Fragment>
      <Pageheader title="Customer" heading="Customer" active="Customer Details" />
      <Row className='faq'>
        <Col xl={12}>
          <div className="" id="" role="">
            <Accordion className='overflow-hidden'>
              <Accordion.Item>
                <Accordion.Body id="" className="" >
                  <div className="col-lg-12 col-md-12">
                    <div className="card">
                      <div className="card-header row-sm row" style={{ backgroundColor: '#38cab3', color: 'white', padding: '10px' }}>
                        <div>
                            <a
                                className="btn ripple btn-dark text-white btn-icon"
                                data-placement="top"
                                data-bs-toggle="tooltip"
                                title=""
                                href="#"
                            >
                                <i className="fa fa-user"></i>
                            </a>
                        </div>
                        <div>
                          <h3 className="">Customer Details</h3>
                        </div>
                      </div>
                      <div className="" style={{paddingBottom:"15px"}}>
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
                      </div>
                    </div>


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



                    <div id="button6">
                      <div className="text-wrap row justify-content-between mt-5" >
                        <div className="btn-list">
                          <button type="button" className="btn btn-primary" onClick={handleCancel}>
                            Cancel
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
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

export default CustomerPlus;
