import React, { Fragment, useState } from 'react';
import {  Col, Form,  Row,  Accordion, } from "react-bootstrap";
import Pageheader from '../../../layout/layoutcomponent/pageheader';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MultiSelect } from "react-multi-select-component";
import { options, partsvalue1,partslisting ,Stockstatus} from "../../../common/selectdata";
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Alerts = () => {
  
    const navigate = useNavigate(); // Initialize useNavigate hook
     // Navigation handler
  const handleBack = () => {
    navigate(-1); // Navigate to the previous page
  };
  
  
  
 
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  
  const [selected, setSelected] = useState([]);



  return (

    <Fragment>

      <Pageheader title="Parts Reports" heading="Business Report" active="Parts Reports" />

      <Row className='faq'>
        <Col xl={12}>
          <div className="" id="" role="">

          <Accordion className='overflow-hidden'>
              <Accordion.Item >
                

                <Accordion.Body id="" className="">
                  <div className="col-lg-12 col-md-12">
                    <div className="card">
                      <div className="card-header row-sm row justify-content-between" style={{ backgroundColor: '#38cab3', color: 'white', padding: '10px' }}>
                        <div>
                          <h3 className="">Parts Value</h3>
                        </div>
                        <div className='row-sm row'>
                          <div>
                            <a
                              className="btn ripple btn-danger text-white btn-icon"
                              data-placement="top"
                              data-bs-toggle="tooltip"
                              title="Download"
                              href="#"
                            >
                              <i className="fas fa-download"></i>
                            </a>
                          </div>
                          <div>
                            <a
                              className="btn ripple btn-success text-white btn-icon"
                              data-placement="top"
                              data-bs-toggle="tooltip"
                              title="Add File"
                              href="#"
                            >
                              <i className="fa fa-file"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="mt-3">
                        <form className="row g-3 needs-validation" noValidate>

                          {/* Summary  Fields */}
                          <div class="col-lg-3">
                            <Form.Label>Print Zero Parts</Form.Label>
                            <div class="form-group">
                              <label class="custom-switch form-switch mb-0  p-0 form-label">
                                <input name="custom-switch-radio" type="checkbox" class="custom-switch-input form-control" />
                                <span class="custom-switch-indicator custom-switch-indicator-lg"></span>
                              </label>
                            </div>
                          </div>

                          {/* Group By Field */}
                          <div className="col-lg-3">
                            <p>Group By</p>
                            <MultiSelect
                              value={selected}
                              onChange={setSelected}
                              labelledBy="Select"
                              options={partsvalue1}
                            />
                          </div>

                          {/* Location Field */}
                          <div className="col-lg-3">
                            <p>Location</p>
                            <MultiSelect
                              value={selected}
                              onChange={setSelected}
                              labelledBy="Select"
                              options={options}
                            />
                          </div>


                        </form>
                      </div>
                    </div>
                  </div>
                </Accordion.Body>

                <Accordion.Body id="collapseFour1" className="panel-body">
                  <div className="col-lg-12 col-md-12">
                    <div className="card">
                      <div className="card-header row-sm row justify-content-between" style={{ backgroundColor: '#38cab3', color: 'white', padding: '10px' }}>
                        <div>
                          <h3 className="">Parts Listing</h3>
                        </div>
                        <div className='row-sm row'>
                          <div>
                            <a
                              className="btn ripple btn-danger text-white btn-icon"
                              data-placement="top"
                              data-bs-toggle="tooltip"
                              title="Download"
                              href="#"
                            >
                              <i className="fas fa-download"></i>
                            </a>
                          </div>
                          <div>
                            <a
                              className="btn ripple btn-success text-white btn-icon"
                              data-placement="top"
                              data-bs-toggle="tooltip"
                              title="Add File"
                              href="#"
                            >
                              <i className="fa fa-file"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="mt-3">
                        <form className="row g-3 needs-validation" noValidate>

                          {/* Product Type Field */}
                          <div className="col-lg-3">
                            <p>Product Type</p>
                            <MultiSelect
                              value={selected}
                              onChange={setSelected}
                              labelledBy="Select"
                              options={partslisting}
                            />
                          </div>


                          {/* Location Field */}
                          <div className="col-lg-3">
                            <p>Location</p>
                            <MultiSelect
                              value={selected}
                              onChange={setSelected}
                              labelledBy="Select"
                              options={options}
                            />
                          </div>

                          {/* Off Set Field */}
                          <div className="col-lg-3">
                            <p>Off Set</p>
                            <MultiSelect
                              value={selected}
                              onChange={setSelected}
                              labelledBy="Select"
                              options={options}
                            />
                          </div>

                          {/* Summary  Fields */}
                          <div class="col-lg-3">
                            <Form.Label>Print Zero Parts</Form.Label>
                            <div class="form-group">
                              <label class="custom-switch form-switch mb-0  p-0 form-label">
                                <input name="custom-switch-radio" type="checkbox" class="custom-switch-input form-control" />
                                <span class="custom-switch-indicator custom-switch-indicator-lg"></span>
                              </label>
                            </div>
                          </div>

                        </form>
                      </div>
                    </div>
                  </div>
                </Accordion.Body>

                <Accordion.Body id="collapseFour1" className="panel-body">
                  <div className="col-lg-12 col-md-12">
                    <div className="card">
                      <div className="card-header row-sm row justify-content-between" style={{ backgroundColor: '#38cab3', color: 'white', padding: '10px' }}>
                        <div>
                          <h3 className="">Stocktake Variance</h3>
                        </div>
                        <div className='row-sm row'>
                          <div>
                            <a
                              className="btn ripple btn-danger text-white btn-icon"
                              data-placement="top"
                              data-bs-toggle="tooltip"
                              title="Download"
                              href="#"
                            >
                              <i className="fas fa-download"></i>
                            </a>
                          </div>
                          <div>
                            <a
                              className="btn ripple btn-success text-white btn-icon"
                              data-placement="top"
                              data-bs-toggle="tooltip"
                              title="Add File"
                              href="#"
                            >
                              <i className="fa fa-file"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="mt-3">
                        <form className="row g-3 needs-validation" noValidate>
                          {/* Start Date Field */}
                          <div className="col-lg-3">
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
                          {/* End Date Field */}
                          <div className="col-lg-3">
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
                          {/* Location Field */}
                          <div className="col-lg-3">
                            <p>Location</p>
                            <MultiSelect
                              value={selected}
                              onChange={setSelected}
                              labelledBy="Select"
                              options={options}
                            />
                          </div>


                        </form>
                      </div>
                    </div>
                  </div>
                </Accordion.Body>

                <Accordion.Body id="collapseFour1" className="panel-body">
                  <div className="col-lg-12 col-md-12" style={{paddingBottom:"150px"}}>
                    <div className="card">
                      <div className="card-header row-sm row justify-content-between" style={{ backgroundColor: '#38cab3', color: 'white', padding: '10px' }}>
                        <div>
                          <h3 className="">Stock Status Report</h3>
                        </div>
                        <div className='row-sm row'>
                          <div>
                            <a
                              className="btn ripple btn-danger text-white btn-icon"
                              data-placement="top"
                              data-bs-toggle="tooltip"
                              title="Download"
                              href="#"
                            >
                              <i className="fas fa-download"></i>
                            </a>
                          </div>
                          <div>
                            <a
                              className="btn ripple btn-success text-white btn-icon"
                              data-placement="top"
                              data-bs-toggle="tooltip"
                              title="Add File"
                              href="#"
                            >
                              <i className="fa fa-file"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="mt-3">
                        <form className="row g-3 needs-validation" noValidate>
                          {/* Start Date Field */}
                          <div className="col-lg-3">
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
                          {/* End Date Field */}
                          <div className="col-lg-3">
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
                          {/* Status Field */}
                          <div className="col-lg-3">
                            <p>Status</p>
                            <MultiSelect
                              value={selected}
                              onChange={setSelected}
                              labelledBy="Select"
                              options={Stockstatus}
                            />
                          </div>


                        </form>


                      </div>
                      <div className="text-center mt-4 pb-3">
                          <button className="btn btn-primary" onClick={handleBack}>
                            Back
                          </button>
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
Alerts.propTypes = {};

Alerts.defaultProps = {};

export default Alerts;
