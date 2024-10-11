import React, { Fragment, useState } from 'react';
import { Accordion, Col, Row, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Pageheader from '../../../layout/layoutcomponent/pageheader';
import { MultiSelect } from "react-multi-select-component";
import { Inspection, contact, countries, payment, cs } from "../../../common/selectdata";

const CustomerCars = () => {

  const [selected, setSelected] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);


  const navigate = useNavigate(); // Initialize useNavigate hook

  // Handler for the Cancel button
  const handleCancel = () => {
    navigate(-1); // Navigate back to the previous page
  };

  // State to track each toggle button's state
  const [toggleStates, setToggleStates] = useState({
    
    gstFree3: true,
    
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
      <Pageheader title="Customer" heading="Customer" active="Vehicle" />
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
                                <i className="fa fa-car"></i>
                            </a>
                        </div>
                        <div>
                          <h3 className=""> Details for BakerMark Transport</h3>
                        </div>
                      </div>
                      <div className="" style={{paddingBottom:"15px"}}>
                        <form className="row g-3 needs-validation" noValidate>
                        
                       

                          {/* Rest of the fields */}
                          <div className="col-md-3">
                            <label className="form-label" htmlFor="phone">Rego</label>
                            <input className="form-control" id="phone" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>
                          <div className="col-lg-3">
                            <p>State</p>
                            <MultiSelect
                              value={selected}
                              onChange={setSelected}
                              labelledBy="Select"
                              options={countries}
                            />
                          </div>

                          <div className="col-md-3">
                            <label className="form-label" htmlFor="cell">Make</label>
                            <input className="form-control" id="cell" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>
                          <div className="col-md-3">
                            <label className="form-label" htmlFor="email">Model</label>
                            <input className="form-control" id="email" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>

                          <div className="col-md-3">
                            <label className="form-label" htmlFor="address">Model Code</label>
                            <input className="form-control" id="address" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>
                          
                          <div className="col-md-3">
                            <label className="form-label" htmlFor="city">Model Series</label>
                            <input className="form-control" id="city" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>
                          

                          <div className="col-md-3">
                            <label className="form-label" htmlFor="cell">VIN</label>
                            <input className="form-control" id="cell" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>
                          <div className="col-md-3">
                            <label className="form-label" htmlFor="email">Engine Number</label>
                            <input className="form-control" id="email" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>

                          <div className="col-md-3">
                            <label className="form-label" htmlFor="address">Fleet Code</label>
                            <input className="form-control" id="address" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>
                          <div className="col-lg-3">
                            <p>Tranmission</p>
                            <MultiSelect
                              value={selected}
                              onChange={setSelected}
                              labelledBy="Select"
                              options={countries}
                            />
                          </div>
                          <div className="col-lg-3">
                            <label className="form-label" htmlFor="gstFree3">A/C</label>
                            <div className={`main-toggle ms-sm-2 main-toggle-dark ${toggleStates.reservedstock ? 'on' : 'off'}`} onClick={() => handleToggle('reservedstock')}>
                              <span className={toggleStates.reservedstock ? 'active' : ''}>
                                {toggleStates.reservedstock ? '' : ''}
                              </span>
                            </div>
                            </div>

                            <div className="col-lg-3">
                                <p>Body Type</p>
                                <MultiSelect
                                value={selected}
                                onChange={setSelected}
                                labelledBy="Select"
                                options={contact}
                                />
                            </div>


                          <div className="col-md-3">
                            <label className="form-label" htmlFor="city">Colour</label>
                            <input className="form-control" id="city" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>
                          <div className="col-md-3">
                            <label className="form-label" htmlFor="state">Seating Cap</label>
                            <input className="form-control" id="state" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>
                          <div className="col-md-3">
                            <label className="form-label" htmlFor="zipCode">Odometer</label>
                            <input className="form-control" id="zipCode" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>
                          <div className="col-md-3">
                            <label className="form-label" htmlFor="preferredContact">Hours</label>
                            <input className="form-control" id="preferredContact" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>


                          <div className="col-md-3">
                            <label className="form-label" htmlFor="customerSource">Drive Type</label>
                            <input className="form-control" id="customerSource" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>
                          <div className="col-md-3">
                            <label className="form-label" htmlFor="customerSource">Engine Code</label>
                            <input className="form-control" id="customerSource" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div> 
                          <div className="col-md-3">
                            <label className="form-label" htmlFor="state">Chassis No.</label>
                            <input className="form-control" id="state" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>
                          <div className="col-lg-3">
                            <p>Fuel Type</p>
                            <MultiSelect
                              value={selected}
                              onChange={setSelected}
                              labelledBy="Select"
                              options={Inspection}
                            />
                          </div>


                          <div className="col-lg-4">
                              <Form.Label>Rego Due Date</Form.Label>
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
                              <Form.Label>Build Date</Form.Label>
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
                              <Form.Label>Prod. Date</Form.Label>
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
                              <Form.Label>Last In Date</Form.Label>
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
                              <Form.Label>Last Service</Form.Label>
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
                              <Form.Label>Next Service</Form.Label>
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

                                  

                          <div className="col-md-3">
                            <label className="form-label" htmlFor="zipCode"> Next Service - KMs</label>
                            <input className="form-control" id="zipCode" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>
                          <div className="col-md-3">
                            <label className="form-label" htmlFor="preferredContact">Service Interval</label>
                            <input className="form-control" id="preferredContact" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>
                          <div className="col-md-3">
                            <label className="form-label" htmlFor="zipCode"> Cylinders </label>
                            <input className="form-control" id="zipCode" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>
                          <div className="col-md-3">
                            <label className="form-label" htmlFor="preferredContact">Liters</label>
                            <input className="form-control" id="preferredContact" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>
                          <div className="col-md-3">
                            <label className="form-label" htmlFor="zipCode"> Fuel Induction </label>
                            <input className="form-control" id="zipCode" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>
                          <div className="col-md-3">
                            <label className="form-label" htmlFor="preferredContact">Tare Mass</label>
                            <input className="form-control" id="preferredContact" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>
                          <div className="col-md-3">
                            <label className="form-label" htmlFor="zipCode"> Radio Pin</label>
                            <input className="form-control" id="zipCode" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>
                          <div className="col-md-3">
                            <label className="form-label" htmlFor="preferredContact">Key Code</label>
                            <input className="form-control" id="preferredContact" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>
                          <div className="col-md-3">
                            <label className="form-label" htmlFor="zipCode"> Tyre Size </label>
                            <input className="form-control" id="zipCode" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>
                          <div className="col-md-3">
                            <label className="form-label" htmlFor="preferredContact">Imported ID</label>
                            <input className="form-control" id="preferredContact" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>

                          
                          <div className="col-md-12">
                            <label className="form-label" htmlFor="address">Note</label>
                            <textarea className="form-control" id="address" type="text" required rows={5}></textarea>
                          </div>
                  
                        </form>
                      </div>
                    </div>






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

export default CustomerCars;
