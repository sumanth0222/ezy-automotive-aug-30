import React, { Fragment, useState } from 'react';
import { Accordion, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import "react-datepicker/dist/react-datepicker.css";
import Pageheader from '../../../layout/layoutcomponent/pageheader';
import { MultiSelect } from "react-multi-select-component";
import { Inspection } from "../../../common/selectdata";

const Collapse = () => {

  const [selected, setSelected] = useState([]);

  const navigate = useNavigate(); // Initialize useNavigate hook

  // Handler for the Cancel button
  const handleCancel = () => {
    navigate(-1); // Navigate back to the previous page
  };

  // State to track each toggle button's state
  const [toggleStates, setToggleStates] = useState({
    gstFree: true, // The toggle state
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
      <Pageheader title="Inspection" heading="Inspection" active="New Inspection" />
      <Row className='faq'>
        <Col xl={12}>
          <div className="" id="" role="">
            <Accordion className='overflow-hidden'>
              <Accordion.Item>
                <Accordion.Body id="" className="" >
                  <div className="col-lg-12 col-md-12">
                    <div className="card">
                      <div className="card-header row-sm row justify-content-between" style={{ backgroundColor: '#38cab3', color: 'white', padding: '10px' }}>
                        <div>
                          <h3 className="">New Inspection</h3>
                        </div>
                      </div>
                      <div className="" style={{paddingBottom:"15px"}}>
                        <form className="row g-3 needs-validation" noValidate>
                          
                          <div className="col-lg-12">
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

                          {/* Conditionally render fields based on toggle state */}
                          {toggleStates.gstFree ? (
                            <>
                              {/* If toggle is ON (Individual), show First and Last Name */}
                              <div className="col-md-3">
                                <label className="form-label" htmlFor="firstName">First Name</label>
                                <input className="form-control" id="firstName" type="text" required />
                              </div>
                              <div className="col-md-3">
                                <label className="form-label" htmlFor="lastName">Last Name</label>
                                <input className="form-control" id="lastName" type="text" required />
                              </div>
                            </>
                          ) : (
                            <>
                              {/* If toggle is OFF (Company), show Company Name */}
                              <div className="col-md-6">
                                <label className="form-label" htmlFor="companyName">Company Name</label>
                                <input className="form-control" id="companyName" type="text" required />
                              </div>
                            </>
                          )}

                          {/* Rest of the fields */}
                          <div className="col-md-3">
                            <label className="form-label" htmlFor="phone">Phone</label>
                            <input className="form-control" id="phone" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>
                          <div className="col-md-3">
                            <label className="form-label" htmlFor="cell">Cell</label>
                            <input className="form-control" id="cell" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>

                          <div className="col-md-3">
                            <label className="form-label" htmlFor="email">Email</label>
                            <input className="form-control" id="email" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>
                          <div className="col-md-3">
                            <label className="form-label" htmlFor="address">Address</label>
                            <input className="form-control" id="address" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>
                          <div className="col-md-3">
                            <label className="form-label" htmlFor="city">City</label>
                            <input className="form-control" id="city" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>
                          <div className="col-lg-3">
                            <p>Price Type</p>
                            <MultiSelect
                              value={selected}
                              onChange={setSelected}
                              labelledBy="Select"
                              options={Inspection}
                            />
                          </div>

                          <div className="col-md-3">
                            <label className="form-label" htmlFor="state">State</label>
                            <input className="form-control" id="state" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>
                          <div className="col-md-3">
                            <label className="form-label" htmlFor="zipCode">Zip Code</label>
                            <input className="form-control" id="zipCode" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>
                          <div className="col-md-3">
                            <label className="form-label" htmlFor="preferredContact">Preferred Method Of Contact</label>
                            <input className="form-control" id="preferredContact" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>
                          <div className="col-md-3">
                            <label className="form-label" htmlFor="customerSource">Customer Source</label>
                            <input className="form-control" id="customerSource" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
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

export default Collapse;
