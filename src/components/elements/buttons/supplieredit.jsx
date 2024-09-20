import React, { Fragment, useState } from 'react';
import { Accordion, Col, Row, Button , Form} from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";
import { MultiSelect } from "react-multi-select-component";
import {  states, countries, payment, status } from "../../../common/selectdata";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Pageheader from '../../../layout/layoutcomponent/pageheader';
import { useNavigate } from 'react-router-dom';

const SupplierEdit = () => {

  const [selected, setSelected] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const navigate = useNavigate(); 
 
  const handleInvoice = () => {
    navigate(`${import.meta.env.BASE_URL}elements/buttons/supplierinvoice`); // Navigate to the supplierinvoice page
  };

  const handleOrder = () => {
    navigate(`${import.meta.env.BASE_URL}elements/buttons/supplierorder`); // Navigate to the supplierorder page
  };

  const handlePayment = () => {
    navigate(`${import.meta.env.BASE_URL}elements/buttons/supplierpayments`); // Navigate to the supplierpayments page
  };

  return (




    <Fragment>

      {/* <Pageheader />   */}
      <Pageheader title="Suppliers" heading="Pages" active="Edit" />

      <Row className='faq'>
        <Col xl={12}>
          <div className="panel-group2" id="accordion11" role="tablist">

            <Accordion className='overflow-hidden card'>
              <Accordion.Item eventKey="0" >
                <Accordion.Header className='accordion-toggle font-weight-semibold tx-12 panel-heading2 ' >


                  <div className="row-sm row " >

                    <div>
                      <a className="btn ripple btn-dark text-white btn-icon" data-placement="top" href="#">
                        <i className="fa fa-truck"></i>
                      </a>
                    </div>
                    <div>
                      <h4 className='mt-1'>Supplier Details</h4>
                    </div>

                  </div>
                 

                  <div className="row-sm row justify-content-between">
                    {/* Summary  Fields */}

                    {/* <div class="col-lg-3">

                      <div class="form-group">
                        <label class="custom-switch form-switch mb-0  p-0 form-label">
                          <input name="custom-switch-radio" type="checkbox" class="custom-switch-input form-control" />
                          <span class="custom-switch-indicator custom-switch-indicator-lg"></span>
                        </label>
                      </div>
                    </div> */}

                    {/* Summary  Fields */}
                    {/* <div class="col-lg-3">

                      <div class="form-group">
                        <label class="custom-switch form-switch mb-0  p-0 form-label">
                          <input name="custom-switch-radio" type="checkbox" class="custom-switch-input form-control" />
                          <span class="custom-switch-indicator custom-switch-indicator-lg"></span>
                        </label>
                      </div>
                    </div> */}

                
                  </div>

                </Accordion.Header>

                <Accordion.Body id="collapseFour1" className="panel-body">
                  <div className="col-lg-12 col-md-12">
                    <div className="card">




                      <div className="">
                        <form className="row g-3 needs-validation" noValidate>

                          {/* Additional Fields */}
                          <div className="col-md-3">
                            <label className="form-label" htmlFor="validationCustom05">Company Name</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>
                          <div className="col-md-3">
                            <label className="form-label" htmlFor="validationCustom05">Biller</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>
                          <div className="col-md-3">
                            <label className="form-label" htmlFor="validationCustom05">Address 1</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>

                          <div className="col-md-3">
                            <label className="form-label" htmlFor="validationCustom05">Address 2</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>
                          <div className="col-md-3">
                            <label className="form-label" htmlFor="validationCustom05">City</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>
                          <div className="col-lg-3">
                            <p>State</p>
                            <MultiSelect
                              value={selected}
                              onChange={setSelected}
                              labelledBy="Select"
                              options={states}
                            />
                          </div>
                          <div className="col-md-3">
                            <label className="form-label" htmlFor="validationCustom05">Zip Code</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>
                          <div className="col-lg-3">
                            <p>Country Code</p>
                            <MultiSelect
                              value={selected}
                              onChange={setSelected}
                              labelledBy="Select"
                              options={countries}
                            />
                          </div>
                          <div className="col-md-3">
                            <label className="form-label" htmlFor="validationCustom05">Phone</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>
                          <div className="col-md-3">
                            <label className="form-label" htmlFor="validationCustom05">Cell</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>
                          <div className="col-md-3">
                            <label className="form-label" htmlFor="validationCustom05">Fax</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>
                          <div className="col-md-3">
                            <label className="form-label" htmlFor="validationCustom05">Email</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>
                          <div className="col-md-3">
                            <label className="form-label" htmlFor="validationCustom05">Account Number</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>
                          <div className="col-md-3">
                            <label className="form-label" htmlFor="validationCustom05">Imported ID</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>
                          <div className="col-lg-3">
                            <p>Country Code</p>
                            <MultiSelect
                              value={selected}
                              onChange={setSelected}
                              labelledBy="Select"
                              options={payment}
                            />
                          </div>
                          <div className="col-md-12">
                            <label className="form-label" htmlFor="validationCustom05">Note</label>
                            <textarea className="form-control" placeholder="Textarea" rows="3"></textarea>
                          </div>



                        </form>

                        <div>
                            <h3 className="mt-5">Contact 1</h3>
                        </div>
                        <form className="row g-3 needs-validation" noValidate>
                            
                          {/* Additional Fields */}
                          <div className="col-md-6">
                            <label className="form-label" htmlFor="validationCustom05">First Name</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>
                          <div className="col-md-6">
                            <label className="form-label" htmlFor="validationCustom05">Last Name</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>
                          <div className="col-md-4">
                            <label className="form-label" htmlFor="validationCustom05">Position</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>
                          <div className="col-md-4">
                            <label className="form-label" htmlFor="validationCustom05">Phone</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>
                          <div className="col-md-4">
                            <label className="form-label" htmlFor="validationCustom05">Email</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>

                        </form>


                        <div>
                            <h3 className="mt-5">Contact 2</h3>
                        </div>
                        <form className="row g-3 needs-validation" noValidate>
                            
                          {/* Additional Fields */}
                          <div className="col-md-6">
                            <label className="form-label" htmlFor="validationCustom05">First Name</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>
                          <div className="col-md-6">
                            <label className="form-label" htmlFor="validationCustom05">Last Name</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>
                          <div className="col-md-4">
                            <label className="form-label" htmlFor="validationCustom05">Position</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>
                          <div className="col-md-4">
                            <label className="form-label" htmlFor="validationCustom05">Phone</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>
                          <div className="col-md-4">
                            <label className="form-label" htmlFor="validationCustom05">Email</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>

                        </form>
                        
                      </div>



                    </div>

                    <div id="button6">
                      <div className="text-wrap row justify-content-between">
                        <div className="btn-list">
                          <button type="button" className="btn btn-primary">
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
                            <i className="fa fa-list"></i>
                        </a>
                        </div>
                        <div>
                        <h4 className='mt-1'>Supplier Parts Orders</h4>
                        </div>
                    {/* </div> */}
                    <div className="">
                        <a
                        className="btn ripple btn-success text-white btn-icon"
                        data-placement="top"
                        data-bs-toggle="tooltip"
                        title="Add supplier"
                        href="#"
                        onClick={handleOrder}
                        >
                        
                            <li className="fa fa-plus"></li>
                        
                        </a>
                    </div>

                   
                  </div>
                 
                  
                </Accordion.Header>

                <Accordion.Body id="collapseFour1" className="panel-body">
                  <div className="col-lg-12 col-md-12">
                    <div className="card text-center">
                      <h5>No Parts Order Found</h5>
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
                      <h4 className='mt-1'>Supplier Invoice</h4>
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
                              <Form.Label>Start Date</Form.Label>
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
                           
  
                          </form>

                            <div className="card pt-5 text-center">
                            <h5>No Invoices Found</h5>
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
                      <h4 className='mt-1'>Supplier Payments</h4>
                    </div>


                    <div className="">
                        <a
                        className="btn ripple btn-success text-white btn-icon"
                        data-placement="top"
                        data-bs-toggle="tooltip"
                        title="Add supplier"
                        href="#"
                        onClick={handlePayment}
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

          </div>
        </Col>
      </Row>


    </Fragment>
  );
}

SupplierEdit.propTypes = {};

SupplierEdit.defaultProps = {};

export default SupplierEdit;
