
import React, { Fragment, useState } from 'react';
import { Accordion, Col, Row, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import "react-datepicker/dist/react-datepicker.css";
import Pageheader from '../../layout/layoutcomponent/pageheader';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const QuickBookExport = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const [selected, setSelected] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  // Handler for the Cancel button
  const handleCancel = () => {
    navigate(-1); // Navigate back to the previous page
  };

   // State to track each toggle button's state
   const [toggleStates, setToggleStates] = useState({
    gstFree: false,
    dontUpdateQty: false,
    serialNumber: false,
    priceLookup: false,
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
    <Pageheader title="Action"  heading="Action"   active="QuickBooks Export" />
      <Row className='faq'>
        <Col xl={12}>
          <div className="" id="" role="">
            <Accordion className='overflow-hidden'>
              <Accordion.Item>
             

                <Accordion.Body id="" className="">
                  <div className="col-lg-12 col-md-12">
                    <div className="card">
                    <div className="card-header row-sm row justify-content-between" style={{ backgroundColor: '#38cab3', color: 'white', padding: '10px' }}>
                        <div>
                          <h3 className="">QuickBooks Export</h3>
                        </div>
                        
                      </div>
                      <div className="">
                      <div>
                            <h3 className="mt-5">Set Up</h3>
                        </div>
                        <form className="row g-3 needs-validation" noValidate>
                          {/* Additional Fields */}
                          <div className="col-md-4">
                            <label className="form-label" htmlFor="validationCustom05">Email Export File To</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>
                          <div className="col-md-4">
                            <label className="form-label" htmlFor="validationCustom05">Tax Agency</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>
                          <div className="col-md-4">
                            <label className="form-label" htmlFor="validationCustom05">Sales GST</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>
                          <div className="col-md-4">
                            <label className="form-label" htmlFor="validationCustom05">Sales Account</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>
                          <div className="col-md-4">
                            <label className="form-label" htmlFor="validationCustom05">Sales Credit Account</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>
                          <div className="col-md-4">
                            <label className="form-label" htmlFor="validationCustom05">Customer Payment Account</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>
                          <div className="col-md-4">
                            <label className="form-label" htmlFor="validationCustom05">Purchases Account</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>
                          <div className="col-md-4">
                            <label className="form-label" htmlFor="validationCustom05">Purchases Credit Account</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>
                          <div className="col-md-4">
                            <label className="form-label" htmlFor="validationCustom05">Vendor Payment Account</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>
                         
                        </form>



                        <div>
                            <h3 className="mt-5">Constraints</h3>
                        </div>
                        <hr style={{border:"2px solid #000"}}></hr>
                       
                        <form className="row g-3 needs-validation" noValidate>
                          {/* Additional Fields */}

                          <div class="col-md-4">
                                <label class="ckbox mg-b-10 form-label">
                                    <input type="checkbox"/><span>Customers</span>
                                </label>
                          </div>


                          <div className="col-md-4">
                             <label class="ckbox mg-b-10 form-label">
                                <input type="checkbox"/><span>Suppliers</span>
                            </label>
                          </div>

                          <div className="col-md-4">
                                <label class="ckbox mg-b-10 form-label">
                                    <input type="checkbox"/><span>Products</span>
                                </label>
                          </div>

                          <div className="col-md-4">
                                <label class="ckbox mg-b-10 form-label">
                                    <input type="checkbox"/><span>Invoices</span>
                                </label>
                          </div>


                          <div class="col-md-4">
                                <label class="ckbox mg-b-10 form-label">
                                    <input type="checkbox"/><span>Suppliers Invoices</span>
                                </label>
                          </div>


                          <div className="col-md-4">
                             <label class="ckbox mg-b-10 form-label">
                                <input type="checkbox"/><span>Sales Credits</span>
                            </label>
                          </div>

                          <div className="col-md-4">
                                <label class="ckbox mg-b-10 form-label">
                                    <input type="checkbox"/><span>Supplier Credit</span>
                                </label>
                          </div>

                          <div className="col-md-4">
                                <label class="ckbox mg-b-10 form-label">
                                    <input type="checkbox"/><span>Customer Payment</span>
                                </label>
                          </div>

                          <div className="col-md-4">
                                <label class="ckbox mg-b-10 form-label">
                                    <input type="checkbox"/><span>Supplier Payment</span>
                                </label>
                          </div>
                          
                          
                         
                        </form>
                        <hr style={{border:"2px solid #000"}}></hr>
                       
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


                         
                        </form>


                        <hr style={{border:"2px solid #000"}}></hr>
                       
                        <form className="row g-3 needs-validation" noValidate>
                          {/* Additional Fields */}

                          {/* Toggle Bars By Field */}
                          <div className="col-lg-3">
                            <label className="form-label" htmlFor="gstFree">Last, First Format</label>
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

                          <div className="col-lg-3">
                            <label className="form-label" htmlFor="dontUpdateQty">Allow Previously Exported</label>
                            <div className="form-group">
                              <label className="custom-switch form-switch mb-0 p-0 form-label">
                                <input
                                  type="checkbox"
                                  className="custom-switch-input form-control"
                                  checked={toggleStates.dontUpdateQty}
                                  onChange={() => handleToggle('dontUpdateQty')}
                                />
                                <span
                                  className="custom-switch-indicator custom-switch-indicator-lg"
                                  style={{
                                    backgroundColor: toggleStates.dontUpdateQty ? "#323251" : "#d6d6e6",
                                    color: "white",
                                  }}
                                >
                                  {toggleStates.dontUpdateQty ? "On" : "Off"}
                                </span>
                              </label>
                            </div>
                          </div>

                          <div className="col-lg-3">
                            <label className="form-label" htmlFor="serialNumber">Ignore Imported</label>
                            <div className="form-group">
                              <label className="custom-switch form-switch mb-0 p-0 form-label">
                                <input
                                  type="checkbox"
                                  className="custom-switch-input form-control"
                                  checked={toggleStates.serialNumber}
                                  onChange={() => handleToggle('serialNumber')}
                                />
                                <span
                                  className="custom-switch-indicator custom-switch-indicator-lg"
                                  style={{
                                    backgroundColor: toggleStates.serialNumber ? "#323251" : "#d6d6e6",
                                    color: "white",
                                  }}
                                >
                                  {toggleStates.serialNumber ? "On" : "Off"}
                                </span>
                              </label>
                            </div>
                          </div>


                         
                        </form>

                      </div>
                    </div>

                    <div id="button6">
                      <div className="text-wrap row justify-content-between">
                        <div className="btn-list">
                          
                        </div>
                        <div>
                          <button type="button" className="btn btn-teal">
                            Export
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

QuickBookExport.propTypes = {};

QuickBookExport.defaultProps = {};

export default QuickBookExport;
