import React, { Fragment, useState } from 'react';
import {  Col, Form,  Row,  Accordion, } from "react-bootstrap";
import Pageheader from '../../../layout/layoutcomponent/pageheader';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MultiSelect } from "react-multi-select-component";
import { options, VendorReport1,VendorReport2, VendorReport3 } from "../../../common/selectdata";
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

      <Pageheader title="Vendors Report" heading="Business Report" active="Vendors Report" />

      <Row className='faq'>
        <Col xl={12}>
          <div className="" id="" role="">

          <Accordion className="overflow-hidden">
              <Accordion.Item  >
               

                <Accordion.Body id="" className="">
                  <div className="col-lg-12 col-md-12">
                    <div className="card">
                      <div className="card-header row-sm row justify-content-between" style={{ backgroundColor: '#38cab3', color: 'white', padding: '10px' }}>
                        <div>
                          <h3 className="">Parts Order Report</h3>
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


                          {/* Summary  Fields */}
                          <div class="col-lg-3">
                            <Form.Label>Outstanding Only</Form.Label>
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
                          <h3 className="">Purchases Report</h3>
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

                          {/* Order By Field */}
                          <div className="col-lg-3">
                            <p>Sort By</p>
                            <MultiSelect
                              value={selected}
                              onChange={setSelected}
                              labelledBy="Select"
                              options={VendorReport1}
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
                          <h3 className="">Item Purchases</h3>
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
                          {/* Order By Field */}
                          <div className="col-lg-3">
                            <p>Order By</p>
                            <MultiSelect
                              value={selected}
                              onChange={setSelected}
                              labelledBy="Select"
                              options={VendorReport2}
                            />
                          </div>

                          {/* Summary  Fields */}
                          <div class="col-lg-3">
                            <Form.Label>Summary</Form.Label>
                            <div class="form-group">
                              <label class="custom-switch form-switch mb-0  p-0 form-label">
                                <input name="custom-switch-radio" type="checkbox" class="custom-switch-input form-control" />
                                <span class="custom-switch-indicator custom-switch-indicator-lg"></span>
                              </label>
                            </div>
                          </div>

                          {/* Additional Fields */}
                          <div className="col-md-4">
                            <label className="form-label" htmlFor="validationCustom05">Start Range</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>
                          <div className="col-md-4">
                            <label className="form-label" htmlFor="validationCustom05">End Range</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>
                          {/* More Select Fields */}
                          <div className="col-lg-4">
                            <p>Search By</p>
                            <MultiSelect
                              value={selected}
                              onChange={setSelected}
                              labelledBy="Select"
                              options={VendorReport2}
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
                          <h3 className="">Vendor Listing</h3>
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


                          {/* Order By Field */}
                          <div className="col-lg-3">
                            <p>Order By</p>
                            <MultiSelect
                              value={selected}
                              onChange={setSelected}
                              labelledBy="Select"
                              options={VendorReport3}
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
                          <h3 className="">Vendor Balances</h3>
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

                          {/* Order By Field */}
                          <div className="col-lg-3">
                            <p>Order By</p>
                            <MultiSelect
                              value={selected}
                              onChange={setSelected}
                              labelledBy="Select"
                              options={VendorReport3}
                            />
                          </div>

                          {/* Start Date Field */}
                          <div className="col-lg-3">
                            <Form.Label>Older Than Date</Form.Label>
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

                        </form>
                      </div>
                    </div>
                  </div>
                </Accordion.Body>

                <Accordion.Body id="collapseFour1" className="panel-body" style={{paddingBottom:'50px'}}>
                  <div className="col-lg-12 col-md-12">
                    <div className="card">
                      <div className="card-header row-sm row justify-content-between" style={{ backgroundColor: '#38cab3', color: 'white', padding: '10px' }}>
                        <div>
                          <h3 className="">Supplier Biller Balances</h3>
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

                        </form>
                      </div>
                    </div>
                  </div>
                </Accordion.Body>


              </Accordion.Item>
            </Accordion>




          </div>
        </Col>
      </Row>


                    {/* Back Button */}
      <div className="text-center pb-3 mt-4">
        <button className="btn btn-primary" onClick={handleBack}>
          Back
        </button>
      </div>
   

    </Fragment>

  );
}
Alerts.propTypes = {};

Alerts.defaultProps = {};

export default Alerts;
