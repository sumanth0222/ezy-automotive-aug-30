import React, { Fragment, useState } from 'react';
import {  Col, Form,  Row,  Accordion, } from "react-bootstrap";
import Pageheader from '../../../layout/layoutcomponent/pageheader';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MultiSelect } from "react-multi-select-component";
import { log2,log1 } from "../../../common/selectdata";
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

      <Pageheader title="Log Report" heading="Business Report" active="Log Report" />

      <Row className='faq'>
        <Col xl={12}>
          <div className="" id="" role="">

          <Accordion className="overflow-hidden card">
              <Accordion.Item >
                

                <Accordion.Body id="" className="">
                  <div className="col-lg-12 col-md-12">
                    <div className="card">
                      <div className="card-header row-sm row justify-content-between" style={{ backgroundColor: '#38cab3', color: 'white', padding: '10px' }}>
                        <div>
                          <h3 className="">Email Report</h3>
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

                <Accordion.Body id="collapseFour1" className="panel-body">
                  <div className="col-lg-12 col-md-12">
                    <div className="card">
                      <div className="card-header row-sm row justify-content-between" style={{ backgroundColor: '#38cab3', color: 'white', padding: '10px' }}>
                        <div>
                          <h3 className="">Voided Invoice/Payment/Order Report</h3>
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


                <Accordion.Body id="collapseFour1" className="panel-body">
                  <div className="col-lg-12 col-md-12">
                    <div className="card">
                      <div className="card-header row-sm row justify-content-between" style={{ backgroundColor: '#38cab3', color: 'white', padding: '10px' }}>
                        <div>
                          <h3 className="">Invoice/Payment Status</h3>
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
                            <p>Search By</p>
                            <MultiSelect
                              value={selected}
                              onChange={setSelected}
                              labelledBy="Select"
                              options={log1}
                            />
                          </div>


                          {/* Additional Fields */}
                          <div className="col-md-3">
                            <label className="form-label" htmlFor="validationCustom05">Invoice Number</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
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
                          <h3 className="">Transaction Logo</h3>
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
                            <p>Transaction Type</p>
                            <MultiSelect
                              value={selected}
                              onChange={setSelected}
                              labelledBy="Select"
                              options={log2}
                            />
                          </div>

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

                <Accordion.Body id="collapseFour1" className="panel-body">
                  <div className="col-lg-12 col-md-12">
                    <div className="card">
                      <div className="card-header row-sm row justify-content-between" style={{ backgroundColor: '#38cab3', color: 'white', padding: '10px' }}>
                        <div>
                          <h3 className="">Event Report</h3>
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

                <Accordion.Body id="collapseFour1" className="panel-body">
                  <div className="col-lg-12 col-md-12">
                    <div className="card">
                      <div className="card-header row-sm row justify-content-between" style={{ backgroundColor: '#38cab3', color: 'white', padding: '10px' }}>
                        <div>
                          <h3 className="">Text Message Report</h3>
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
