import React, { Fragment, useState } from 'react';
import { Accordion, Col, Row, Form , Button} from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";
import { MultiSelect } from "react-multi-select-component";
import { states, FA , Products1, vehiclegroup} from "../../common/selectdata";
import "react-datepicker/dist/react-datepicker.css";
import Pageheader from '../../layout/layoutcomponent/pageheader';
import { useNavigate } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CompanySettings = () => {

  const [selected, setSelected] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const navigate = useNavigate(); 

  const [isActive, setIsActive] = useState(false); // State for toggle button

  // State to track each toggle button's state
  const [toggleStates, setToggleStates] = useState({
    gstFree: false,
    dontUpdateQty: false,  // This is for "Enable 2FA"
    serialNumber: false,
    priceLookup: false,    // This is for "Enable 2FA for All Users"
    reservedstock: false,
    orderqty1: false,
    Vehicle: false,
    Fleet: false,
    shopmonth: false,
    jobstatus: false,
    pricetax: false,
    taxfreight: false,
    roundtotal: false,
    discounttax: false,

    partnumber: false,
    labourquantity: true,
    lineprices: false,
    header: true,
    jobcard: false,
    jobnumber: true,
    ordersattached: false,
    pricingjobcard: true,
    tyredetails: false,
    mergebundle: true, 
    workedfield: false,
    invoiceline: true,
    oninvoice: false,
    onprocessvoice: true,
    invoicepostdate: false,
    serviceadvisors: true


  });

  // Toggle button handler for individual switches
  const handleToggle = (key) => {
    setToggleStates((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  const handleCancel = () => {
    navigate(-1);  // Redirect to the previous page
  };

  return (
    <Fragment>
      <Pageheader title="Settings" heading="settings" active="Company Settings" />

      <Row className='faq'>
        <Col xl={12}>
          <div className="panel-group2" id="accordion11" role="tablist">


            <Accordion className='overflow-hidden card'>
              <Accordion.Item eventKey="0">
                <Accordion.Header className='accordion-toggle font-weight-semibold tx-12 panel-heading2'>
                  <div className="row-sm row">
                    <div>
                      <a className="btn ripple btn-dark text-white btn-icon" data-placement="top" href="#">
                        <i className="fa fa-cog"></i>
                      </a>
                    </div>
                    <div>
                      <h4 className='mt-1'>Company Settings</h4>
                    </div>
                  </div>
                </Accordion.Header>

                <Accordion.Body id="collapseFour1" className="panel-body">
                  <div className="col-lg-12 col-md-12">
                    <div className="card">
                      <div className="">
                        <form className="row g-3 needs-validation" noValidate>

                          {/* Additional Fields */}
                          <div className="col-md-3">
                            <label className="form-label" htmlFor="validationCustom05">Australian Business Number</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>
                          <div className="col-md-3">
                            <label className="form-label" htmlFor="validationCustom05">Mobile Company Name</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>

                          <div className="col-lg-3">
                            <p>Time Zone</p>
                            <MultiSelect
                              value={selected}
                              onChange={setSelected}
                              labelledBy="Select"
                              options={states}
                            />
                          </div>

                          {/* Toggle Bars By Field */}

                          <div className="col-lg-3">
                            <label className="form-label" htmlFor="gstFree">Use Member Numbers</label>
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
                                    backgroundColor: toggleStates.gstFree ? "green" : "orange",
                                    color: "white",
                                  }}
                                >
                                  {toggleStates.gstFree ? "On" : "Off"}
                                </span>
                              </label>
                            </div>
                          </div>


                          <div className="col-lg-3">
                            <label className="form-label" htmlFor="dontUpdateQty">Enable 2FA</label>
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
                                    backgroundColor: toggleStates.dontUpdateQty ? "green" : "orange",
                                    color: "white",
                                  }}
                                >
                                  {toggleStates.dontUpdateQty ? "On" : "Off"}
                                </span>
                              </label>
                            </div>
                          </div>

                          {/* Conditionally rendered fields based on "Enable 2FA" toggle */}
                          {toggleStates.dontUpdateQty && (
                            <>
                              <div className="col-lg-3">
                                <label className="form-label" htmlFor="priceLookup">Enable 2FA for All Users</label>
                                <div className="form-group">
                                  <label className="custom-switch form-switch mb-0 p-0 form-label">
                                    <input
                                      type="checkbox"
                                      className="custom-switch-input form-control"
                                      checked={toggleStates.priceLookup}
                                      onChange={() => handleToggle('priceLookup')}
                                    />
                                    <span
                                      className="custom-switch-indicator custom-switch-indicator-lg"
                                      style={{
                                        backgroundColor: toggleStates.priceLookup ? "green" : "orange",
                                        color: "white",
                                      }}
                                    >
                                      {toggleStates.priceLookup ? "On" : "Off"}
                                    </span>
                                  </label>
                                </div>
                              </div>

                              <div className="col-lg-3">
                                <p>2FA Expiration Options</p>
                                <MultiSelect
                                  value={selected}
                                  onChange={setSelected}
                                  labelledBy="Select"
                                  options={FA}
                                />
                              </div>
                            </>
                          )}

                          <div className="col-md-3">
                            <label className="form-label" htmlFor="validationCustom05">MVRL #</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>

                          <div className="col-lg-3">
                            <label className="form-label" htmlFor="serialNumber">Require SSO</label>
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
                                    backgroundColor: toggleStates.serialNumber ? "green" : "orange",
                                    color: "white",
                                  }}
                                >
                                  {toggleStates.serialNumber ? "On" : "Off"}
                                </span>
                              </label>
                            </div>
                          </div>

                          {/* Conditionally rendered fields based on "Require SSO" toggle */}
                          {toggleStates.serialNumber && (
                            <>

                              <div className="col-md-3">
                              <label className="form-label" htmlFor="validationCustom05">Aure Tenant ID</label>
                              <input className="form-control" id="validationCustom05" type="text" required />
                              <div className="invalid-feedback">Please provide a valid zip.</div>
                              </div>
                            </>
                          )}

                          

                        </form>
                      </div>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            <Accordion className='overflow-hidden card'>
              <Accordion.Item eventKey="0">
                <Accordion.Header className='accordion-toggle font-weight-semibold tx-12 panel-heading2'>
                  <div className="row-sm row">
                    <div>
                      <a className="btn ripple btn-dark text-white btn-icon" data-placement="top" href="#">
                        <i className="fa fa-user"></i>
                      </a>
                    </div>
                    <div>
                      <h4 className='mt-1'>Product Settings</h4>
                    </div>
                  </div>
                </Accordion.Header>

                <Accordion.Body id="collapseFour1" className="panel-body">
                  <div className="col-lg-12 col-md-12" >
                    <div className="card">
                      <div className="">
                        <form className="row g-3 needs-validation" noValidate>

                          {/* Additional Fields */}
                          <div className="col-md-3">
                            <label className="form-label" htmlFor="validationCustom05">Default Labour Product</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>
                          


                          {/* Toggle Bars By Field */}

                          <div className="col-lg-3">
                            <label className="form-label" htmlFor="reservedstock">Reserved Stock</label>
                            <div className="form-group">
                              <label className="custom-switch form-switch mb-0 p-0 form-label">
                                <input
                                  type="checkbox"
                                  className="custom-switch-input form-control"
                                  checked={toggleStates.reservedstock}
                                  onChange={() => handleToggle('reservedstock')}
                                />
                                <span
                                  className="custom-switch-indicator custom-switch-indicator-lg"
                                  style={{
                                    backgroundColor: toggleStates.reservedstock ? "green" : "orange",
                                    color: "white",
                                  }}
                                >
                                  {toggleStates.reservedstock ? "On" : "Off"}
                                </span>
                              </label>
                            </div>
                          </div>


                          
                          <div className="col-lg-3">
                            <p>Cost Type For Products</p>
                            <MultiSelect
                              value={selected}
                              onChange={setSelected}
                              labelledBy="Select"
                              options={Products1}
                            />
                          </div>


                         

                          <div className="col-lg-3">
                            <label className="form-label" htmlFor="orderqty1">Inc On Order Qty</label>
                            <div className="form-group">
                              <label className="custom-switch form-switch mb-0 p-0 form-label">
                                <input
                                  type="checkbox"
                                  className="custom-switch-input form-control"
                                  checked={toggleStates.orderqty1}
                                  onChange={() => handleToggle('orderqty1')}
                                />
                                <span
                                  className="custom-switch-indicator custom-switch-indicator-lg"
                                  style={{
                                    backgroundColor: toggleStates.orderqty1 ? "green" : "orange",
                                    color: "white",
                                  }}
                                >
                                  {toggleStates.orderqty1 ? "On" : "Off"}
                                </span>
                              </label>
                            </div>
                          </div>

                         

                          

                        </form>
                      </div>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>


            <Accordion className='overflow-hidden card'>
              <Accordion.Item eventKey="0">
                <Accordion.Header className='accordion-toggle font-weight-semibold tx-12 panel-heading2'>
                  <div className="row-sm row">
                    <div>
                      <a className="btn ripple btn-dark text-white btn-icon" data-placement="top" href="#">
                        <i className="fa fa-user"></i>
                      </a>
                    </div>
                    <div>
                      <h4 className='mt-1'>Vehicle Settings</h4>
                    </div>
                  </div>
                </Accordion.Header>

                <Accordion.Body id="collapseFour1" className="panel-body">
                  <div className="col-lg-12 col-md-12">
                    <div className="card">
                      <div className="">
                        <form className="row g-3 needs-validation" noValidate>

                        <div className="col-lg-12">
                            <p>Vehicle Groups</p>
                            <MultiSelect
                              value={selected}
                              onChange={setSelected}
                              labelledBy="Select"
                              options={vehiclegroup}
                            />
                          </div>

                          {/* Additional Fields */}
                          <div className="col-md-3">
                            <label className="form-label" htmlFor="validationCustom05">Default Service Interval</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>
                          
                          <div className="col-lg-3">
                            <p>Default Method of Contact</p>
                            <MultiSelect
                              value={selected}
                              onChange={setSelected}
                              labelledBy="Select"
                              options={Products1}
                            />
                          </div>

                          {/* Toggle Bars By Field */}

                          <div className="col-lg-3">
                            <label className="form-label" htmlFor="Vehicle">Advanced Vehicle Fields</label>
                            <div className="form-group">
                              <label className="custom-switch form-switch mb-0 p-0 form-label">
                                <input
                                  type="checkbox"
                                  className="custom-switch-input form-control"
                                  checked={toggleStates.Vehicle}
                                  onChange={() => handleToggle('Vehicle')}
                                />
                                <span
                                  className="custom-switch-indicator custom-switch-indicator-lg"
                                  style={{
                                    backgroundColor: toggleStates.Vehicle ? "green" : "orange",
                                    color: "white",
                                  }}
                                >
                                  {toggleStates.Vehicle ? "On" : "Off"}
                                </span>
                              </label>
                            </div>
                          </div>


                          
                          


                         

                          <div className="col-lg-3">
                            <label className="form-label" htmlFor="Fleet">Show Fleet Code</label>
                            <div className="form-group">
                              <label className="custom-switch form-switch mb-0 p-0 form-label">
                                <input
                                  type="checkbox"
                                  className="custom-switch-input form-control"
                                  checked={toggleStates.Fleet}
                                  onChange={() => handleToggle('Fleet')}
                                />
                                <span
                                  className="custom-switch-indicator custom-switch-indicator-lg"
                                  style={{
                                    backgroundColor: toggleStates.Fleet ? "green" : "orange",
                                    color: "white",
                                  }}
                                >
                                  {toggleStates.Fleet ? "On" : "Off"}
                                </span>
                              </label>
                            </div>
                          </div>

                         

                          

                        </form>
                      </div>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>


            <Accordion className='overflow-hidden card'>
              <Accordion.Item eventKey="0">
                <Accordion.Header className='accordion-toggle font-weight-semibold tx-12 panel-heading2'>
                  <div className="row-sm row">
                    <div>
                      <a className="btn ripple btn-dark text-white btn-icon" data-placement="top" href="#">
                        <i className="fa fa-user"></i>
                      </a>
                    </div>
                    <div>
                      <h4 className='mt-1'>Booking Settings</h4>
                    </div>
                  </div>
                </Accordion.Header>

                <Accordion.Body id="collapseFour1" className="panel-body">
                  <div className="col-lg-12 col-md-12">
                    <div className="card">
                      <div className="">
                        <form className="row g-3 needs-validation" noValidate>


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

 
                          {/* Toggle Bars By Field */}

                          <div className="col-lg-3">
                            <label className="form-label" htmlFor="shopmonth">Show All Shop For Month</label>
                            <div className="form-group">
                              <label className="custom-switch form-switch mb-0 p-0 form-label">
                                <input
                                  type="checkbox"
                                  className="custom-switch-input form-control"
                                  checked={toggleStates.shopmonth}
                                  onChange={() => handleToggle('shopmonth')}
                                />
                                <span
                                  className="custom-switch-indicator custom-switch-indicator-lg"
                                  style={{
                                    backgroundColor: toggleStates.shopmonth ? "green" : "orange",
                                    color: "white",
                                  }}
                                >
                                  {toggleStates.shopmonth ? "On" : "Off"}
                                </span>
                              </label>
                            </div>
                          </div>


                          
                          


                         

                          <div className="col-lg-3">
                            <label className="form-label" htmlFor="jobstatus">Description To Job Status Comment</label>
                            <div className="form-group">
                              <label className="custom-switch form-switch mb-0 p-0 form-label">
                                <input
                                  type="checkbox"
                                  className="custom-switch-input form-control"
                                  checked={toggleStates.jobstatus}
                                  onChange={() => handleToggle('jobstatus')}
                                />
                                <span
                                  className="custom-switch-indicator custom-switch-indicator-lg"
                                  style={{
                                    backgroundColor: toggleStates.jobstatus ? "green" : "orange",
                                    color: "white",
                                  }}
                                >
                                  {toggleStates.jobstatus ? "On" : "Off"}
                                </span>
                              </label>
                            </div>
                          </div>

                          {/* Additional Fields */}
                          <div className="col-md-3">
                            <label className="form-label" htmlFor="validationCustom05">Mechanics For Bookings Diary</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>

                           {/* Additional Fields */}
                           <div className="col-md-3">
                            <label className="form-label" htmlFor="validationCustom05">Default Work Hours Per Day</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>

                          

                        </form>
                      </div>
                    </div>
                  </div>
                </Accordion.Body>

                
                
              </Accordion.Item>
            </Accordion>

            <Accordion className='overflow-hidden card'>
              <Accordion.Item eventKey="0">
                <Accordion.Header className='accordion-toggle font-weight-semibold tx-12 panel-heading2'>
                  <div className="row-sm row">
                    <div>
                      <a className="btn ripple btn-dark text-white btn-icon" data-placement="top" href="#">
                        <i className="fa fa-user"></i>
                      </a>
                    </div>
                    <div>
                      <h4 className='mt-1'>Tax Settings</h4>
                    </div>
                  </div>
                </Accordion.Header>

                <Accordion.Body id="collapseFour1" className="panel-body">
                  <div className="col-lg-12 col-md-12">
                    <div className="card">
                      <div className="">
                        <form className="row g-3 needs-validation" noValidate>

                          {/* Additional Fields */}
                          <div className="col-md-4">
                            <label className="form-label" htmlFor="validationCustom05">Tax Name</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>

                          <div className="col-md-4">
                            <label className="form-label" htmlFor="validationCustom05">Purchases Tax Rate</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>

                          <div className="col-md-4">
                            <label className="form-label" htmlFor="validationCustom05">Sales Tax Rate</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>

                          {/* Toggle Bars By Field */}

                          <div className="col-lg-3">
                            <label className="form-label" htmlFor="pricetax">Prices Include Tax</label>
                            <div className="form-group">
                              <label className="custom-switch form-switch mb-0 p-0 form-label">
                                <input
                                  type="checkbox"
                                  className="custom-switch-input form-control"
                                  checked={toggleStates.pricetax}
                                  onChange={() => handleToggle('pricetax')}
                                />
                                <span
                                  className="custom-switch-indicator custom-switch-indicator-lg"
                                  style={{
                                    backgroundColor: toggleStates.pricetax ? "green" : "orange",
                                    color: "white",
                                  }}
                                >
                                  {toggleStates.pricetax ? "On" : "Off"}
                                </span>
                              </label>
                            </div>
                          </div>


                          <div className="col-lg-3">
                            <label className="form-label" htmlFor="taxfreight">Tax Freight</label>
                            <div className="form-group">
                              <label className="custom-switch form-switch mb-0 p-0 form-label">
                                <input
                                  type="checkbox"
                                  className="custom-switch-input form-control"
                                  checked={toggleStates.taxfreight}
                                  onChange={() => handleToggle('taxfreight')}
                                />
                                <span
                                  className="custom-switch-indicator custom-switch-indicator-lg"
                                  style={{
                                    backgroundColor: toggleStates.taxfreight ? "green" : "orange",
                                    color: "white",
                                  }}
                                >
                                  {toggleStates.taxfreight ? "On" : "Off"}
                                </span>
                              </label>
                            </div>
                          </div>

                          <div className="col-lg-3">
                            <label className="form-label" htmlFor="roundtotal">Round Total</label>
                            <div className="form-group">
                              <label className="custom-switch form-switch mb-0 p-0 form-label">
                                <input
                                  type="checkbox"
                                  className="custom-switch-input form-control"
                                  checked={toggleStates.roundtotal}
                                  onChange={() => handleToggle('roundtotal')}
                                />
                                <span
                                  className="custom-switch-indicator custom-switch-indicator-lg"
                                  style={{
                                    backgroundColor: toggleStates.roundtotal ? "green" : "orange",
                                    color: "white",
                                  }}
                                >
                                  {toggleStates.roundtotal ? "On" : "Off"}
                                </span>
                              </label>
                            </div>
                          </div>


                          <div className="col-lg-3">
                            <label className="form-label" htmlFor="discounttax">Discount  Includes Tax</label>
                            <div className="form-group">
                              <label className="custom-switch form-switch mb-0 p-0 form-label">
                                <input
                                  type="checkbox"
                                  className="custom-switch-input form-control"
                                  checked={toggleStates.discounttax}
                                  onChange={() => handleToggle('discounttax')}
                                />
                                <span
                                  className="custom-switch-indicator custom-switch-indicator-lg"
                                  style={{
                                    backgroundColor: toggleStates.discounttax ? "green" : "orange",
                                    color: "white",
                                  }}
                                >
                                  {toggleStates.discounttax ? "On" : "Off"}
                                </span>
                              </label>
                            </div>
                          </div>

                          

                        </form>
                      </div>
                    </div>
                  </div>
                </Accordion.Body>

                
                
              </Accordion.Item>
            </Accordion>

            <Accordion className='overflow-hidden card'>
              <Accordion.Item eventKey="0">
                <Accordion.Header className='accordion-toggle font-weight-semibold tx-12 panel-heading2'>
                  <div className="row-sm row">
                    <div>
                      <a className="btn ripple btn-dark text-white btn-icon" data-placement="top" href="#">
                        <i className="far fa-file"></i>
                      </a>
                    </div>
                    <div>
                      <h4 className='mt-1'>Invoice Settings</h4>
                    </div>
                  </div>
                </Accordion.Header>

                <Accordion.Body id="collapseFour1" className="panel-body">
                  <div className="col-lg-12 col-md-12">
                    <div className="card">
                      <div className="">
                        <form className="row g-3 needs-validation" noValidate>

                          <div className="col-lg-4">
                            <p>Invoice Format</p>
                            <MultiSelect
                              value={selected}
                              onChange={setSelected}
                              labelledBy="Select"
                              options={states}
                            />
                          </div>

                          <div className="col-lg-4">
                            <p>Invoice Terms</p>
                            <MultiSelect
                              value={selected}
                              onChange={setSelected}
                              labelledBy="Select"
                              options={states}
                            />
                          </div>

                          <div className="col-lg-4">
                            <p>Bundled Item Print Style</p>
                            <MultiSelect
                              value={selected}
                              onChange={setSelected}
                              labelledBy="Select"
                              options={states}
                            />
                          </div>

                          {/* Toggle Bars By Field */}

                          
                          <div className="col-lg-3">
                            <label className="form-label" htmlFor="partnumber">Hide Part Numbers</label>
                            <div className="form-group">
                              <label className="custom-switch form-switch mb-0 p-0 form-label">
                                <input
                                  type="checkbox"
                                  className="custom-switch-input form-control"
                                  checked={toggleStates.partnumber}
                                  onChange={() => handleToggle('partnumber')}
                                />
                                <span
                                  className="custom-switch-indicator custom-switch-indicator-lg"
                                  style={{
                                    backgroundColor: toggleStates.partnumber ? "green" : "orange",
                                    color: "white",
                                  }}
                                >
                                  {toggleStates.partnumber ? "On" : "Off"}
                                </span>
                              </label>
                            </div>
                          </div>

                          <div className="col-lg-3">
                            <label className="form-label" htmlFor="labourquantity">Hide Labour Quantity</label>
                            <div className="form-group">
                              <label className="custom-switch form-switch mb-0 p-0 form-label">
                                <input
                                  type="checkbox"
                                  className="custom-switch-input form-control"
                                  checked={toggleStates.labourquantity}
                                  onChange={() => handleToggle('labourquantity')}
                                />
                                <span
                                  className="custom-switch-indicator custom-switch-indicator-lg"
                                  style={{
                                    backgroundColor: toggleStates.labourquantity ? "green" : "orange",
                                    color: "white",
                                  }}
                                >
                                  {toggleStates.labourquantity ? "On" : "Off"}
                                </span>
                              </label>
                            </div>
                          </div>

                          <div className="col-lg-3">
                            <label className="form-label" htmlFor="lineprices">Hide Line Prices</label>
                            <div className="form-group">
                              <label className="custom-switch form-switch mb-0 p-0 form-label">
                                <input
                                  type="checkbox"
                                  className="custom-switch-input form-control"
                                  checked={toggleStates.lineprices}
                                  onChange={() => handleToggle('lineprices')}
                                />
                                <span
                                  className="custom-switch-indicator custom-switch-indicator-lg"
                                  style={{
                                    backgroundColor: toggleStates.lineprices ? "green" : "orange",
                                    color: "white",
                                  }}
                                >
                                  {toggleStates.lineprices ? "On" : "Off"}
                                </span>
                              </label>
                            </div>
                          </div>

                          <div className="col-lg-3">
                            <label className="form-label" htmlFor="header">Line Header/ Footer on Bundles</label>
                            <div className="form-group">
                              <label className="custom-switch form-switch mb-0 p-0 form-label">
                                <input
                                  type="checkbox"
                                  className="custom-switch-input form-control"
                                  checked={toggleStates.header}
                                  onChange={() => handleToggle('header')}
                                />
                                <span
                                  className="custom-switch-indicator custom-switch-indicator-lg"
                                  style={{
                                    backgroundColor: toggleStates.header ? "green" : "orange",
                                    color: "white",
                                  }}
                                >
                                  {toggleStates.header ? "On" : "Off"}
                                </span>
                              </label>
                            </div>
                          </div>

                          <div className="col-lg-3">
                            <label className="form-label" htmlFor="jobcard">Barcode On Job Card</label>
                            <div className="form-group">
                              <label className="custom-switch form-switch mb-0 p-0 form-label">
                                <input
                                  type="checkbox"
                                  className="custom-switch-input form-control"
                                  checked={toggleStates.jobcard}
                                  onChange={() => handleToggle('jobcard')}
                                />
                                <span
                                  className="custom-switch-indicator custom-switch-indicator-lg"
                                  style={{
                                    backgroundColor: toggleStates.jobcard ? "green" : "orange",
                                    color: "white",
                                  }}
                                >
                                  {toggleStates.jobcard ? "On" : "Off"}
                                </span>
                              </label>
                            </div>
                          </div>

                          <div className="col-lg-3">
                            <label className="form-label" htmlFor="jobnumber">Invoice Number Equals Job Number</label>
                            <div className="form-group">
                              <label className="custom-switch form-switch mb-0 p-0 form-label">
                                <input
                                  type="checkbox"
                                  className="custom-switch-input form-control"
                                  checked={toggleStates.jobnumber}
                                  onChange={() => handleToggle('jobnumber')}
                                />
                                <span
                                  className="custom-switch-indicator custom-switch-indicator-lg"
                                  style={{
                                    backgroundColor: toggleStates.jobnumber ? "green" : "orange",
                                    color: "white",
                                  }}
                                >
                                  {toggleStates.jobnumber ? "On" : "Off"}
                                </span>
                              </label>
                            </div>
                          </div>

                          <div className="col-lg-3">
                            <label className="form-label" htmlFor="ordersattached">Cannot Process - Orders Attached</label>
                            <div className="form-group">
                              <label className="custom-switch form-switch mb-0 p-0 form-label">
                                <input
                                  type="checkbox"
                                  className="custom-switch-input form-control"
                                  checked={toggleStates.ordersattached}
                                  onChange={() => handleToggle('ordersattached')}
                                />
                                <span
                                  className="custom-switch-indicator custom-switch-indicator-lg"
                                  style={{
                                    backgroundColor: toggleStates.ordersattached ? "green" : "orange",
                                    color: "white",
                                  }}
                                >
                                  {toggleStates.ordersattached ? "On" : "Off"}
                                </span>
                              </label>
                            </div>
                          </div>

                          <div className="col-lg-3">
                            <label className="form-label" htmlFor="pricingjobcard">Add Pricing To Job Card</label>
                            <div className="form-group">
                              <label className="custom-switch form-switch mb-0 p-0 form-label">
                                <input
                                  type="checkbox"
                                  className="custom-switch-input form-control"
                                  checked={toggleStates.pricingjobcard}
                                  onChange={() => handleToggle('pricingjobcard')}
                                />
                                <span
                                  className="custom-switch-indicator custom-switch-indicator-lg"
                                  style={{
                                    backgroundColor: toggleStates.pricingjobcard ? "green" : "orange",
                                    color: "white",
                                  }}
                                >
                                  {toggleStates.pricingjobcard ? "On" : "Off"}
                                </span>
                              </label>
                            </div>
                          </div>


                          <div className="col-lg-3">
                            <label className="form-label" htmlFor="tyredetails">Hide Tyre Details(Job Card)</label>
                            <div className="form-group">
                              <label className="custom-switch form-switch mb-0 p-0 form-label">
                                <input
                                  type="checkbox"
                                  className="custom-switch-input form-control"
                                  checked={toggleStates.tyredetails}
                                  onChange={() => handleToggle('tyredetails')}
                                />
                                <span
                                  className="custom-switch-indicator custom-switch-indicator-lg"
                                  style={{
                                    backgroundColor: toggleStates.tyredetails ? "green" : "orange",
                                    color: "white",
                                  }}
                                >
                                  {toggleStates.tyredetails ? "On" : "Off"}
                                </span>
                              </label>
                            </div>
                          </div>

                          <div className="col-lg-3">
                            <label className="form-label" htmlFor="mergebundle">Merge Bundles With Invoice Lines</label>
                            <div className="form-group">
                              <label className="custom-switch form-switch mb-0 p-0 form-label">
                                <input
                                  type="checkbox"
                                  className="custom-switch-input form-control"
                                  checked={toggleStates.mergebundle}
                                  onChange={() => handleToggle('mergebundle')}
                                />
                                <span
                                  className="custom-switch-indicator custom-switch-indicator-lg"
                                  style={{
                                    backgroundColor: toggleStates.mergebundle ? "green" : "orange",
                                    color: "white",
                                  }}
                                >
                                  {toggleStates.mergebundle ? "On" : "Off"}
                                </span>
                              </label>
                            </div>
                          </div>

                          <div className="col-lg-3">
                            <label className="form-label" htmlFor="workedfield">Hours Worked Field</label>
                            <div className="form-group">
                              <label className="custom-switch form-switch mb-0 p-0 form-label">
                                <input
                                  type="checkbox"
                                  className="custom-switch-input form-control"
                                  checked={toggleStates.workedfield}
                                  onChange={() => handleToggle('workedfield')}
                                />
                                <span
                                  className="custom-switch-indicator custom-switch-indicator-lg"
                                  style={{
                                    backgroundColor: toggleStates.workedfield ? "green" : "orange",
                                    color: "white",
                                  }}
                                >
                                  {toggleStates.workedfield ? "On" : "Off"}
                                </span>
                              </label>
                            </div>
                          </div>

                          <div className="col-lg-3">
                            <label className="form-label" htmlFor="invoiceline">Hide Tax On Invoice Lines</label>
                            <div className="form-group">
                              <label className="custom-switch form-switch mb-0 p-0 form-label">
                                <input
                                  type="checkbox"
                                  className="custom-switch-input form-control"
                                  checked={toggleStates.invoiceline}
                                  onChange={() => handleToggle('invoiceline')}
                                />
                                <span
                                  className="custom-switch-indicator custom-switch-indicator-lg"
                                  style={{
                                    backgroundColor: toggleStates.invoiceline ? "green" : "orange",
                                    color: "white",
                                  }}
                                >
                                  {toggleStates.invoiceline ? "On" : "Off"}
                                </span>
                              </label>
                            </div>
                          </div>


                          <div className="col-lg-3">
                            <label className="form-label" htmlFor="oninvoice">Prevent Split Notes On Invoice</label>
                            <div className="form-group">
                              <label className="custom-switch form-switch mb-0 p-0 form-label">
                                <input
                                  type="checkbox"
                                  className="custom-switch-input form-control"
                                  checked={toggleStates.oninvoice}
                                  onChange={() => handleToggle('oninvoice')}
                                />
                                <span
                                  className="custom-switch-indicator custom-switch-indicator-lg"
                                  style={{
                                    backgroundColor: toggleStates.oninvoice ? "green" : "orange",
                                    color: "white",
                                  }}
                                >
                                  {toggleStates.oninvoice ? "On" : "Off"}
                                </span>
                              </label>
                            </div>
                          </div>

                          <div className="col-lg-3">
                            <label className="form-label" htmlFor="onprocessvoice">Ask For Due Dates On Process Invoice</label>
                            <div className="form-group">
                              <label className="custom-switch form-switch mb-0 p-0 form-label">
                                <input
                                  type="checkbox"
                                  className="custom-switch-input form-control"
                                  checked={toggleStates.onprocessvoice}
                                  onChange={() => handleToggle('onprocessvoice')}
                                />
                                <span
                                  className="custom-switch-indicator custom-switch-indicator-lg"
                                  style={{
                                    backgroundColor: toggleStates.onprocessvoice ? "green" : "orange",
                                    color: "white",
                                  }}
                                >
                                  {toggleStates.onprocessvoice ? "On" : "Off"}
                                </span>
                              </label>
                            </div>
                          </div>

                          <div className="col-lg-3">
                            <label className="form-label" htmlFor="invoicepostdate">Use Today As Invoice Post Date</label>
                            <div className="form-group">
                              <label className="custom-switch form-switch mb-0 p-0 form-label">
                                <input
                                  type="checkbox"
                                  className="custom-switch-input form-control"
                                  checked={toggleStates.invoicepostdate}
                                  onChange={() => handleToggle('invoicepostdate')}
                                />
                                <span
                                  className="custom-switch-indicator custom-switch-indicator-lg"
                                  style={{
                                    backgroundColor: toggleStates.invoicepostdate ? "green" : "orange",
                                    color: "white",
                                  }}
                                >
                                  {toggleStates.invoicepostdate ? "On" : "Off"}
                                </span>
                              </label>
                            </div>
                          </div>

                          <div className="col-lg-3">
                            <label className="form-label" htmlFor="serviceadvisors">Use Service Advisors</label>
                            <div className="form-group">
                              <label className="custom-switch form-switch mb-0 p-0 form-label">
                                <input
                                  type="checkbox"
                                  className="custom-switch-input form-control"
                                  checked={toggleStates.serviceadvisors}
                                  onChange={() => handleToggle('serviceadvisors')}
                                />
                                <span
                                  className="custom-switch-indicator custom-switch-indicator-lg"
                                  style={{
                                    backgroundColor: toggleStates.serviceadvisors ? "green" : "orange",
                                    color: "white",
                                  }}
                                >
                                  {toggleStates.serviceadvisors ? "On" : "Off"}
                                </span>
                              </label>
                            </div>
                          </div>


                          

                        </form>
                      </div>
                    </div>
                  </div>
                </Accordion.Body>

                
                
              </Accordion.Item>
            </Accordion>

            <Accordion className='overflow-hidden card'>
              <Accordion.Item eventKey="0">
                <Accordion.Header className='accordion-toggle font-weight-semibold tx-12 panel-heading2'>
                  <div className="row-sm row">
                    <div>
                      <a className="btn ripple btn-dark text-white btn-icon" data-placement="top" href="#">
                        <i className="fa fa-list-ol"></i>
                      </a>
                    </div>
                    <div>
                      <h4 className='mt-1'>Next Invoice / Payment Number</h4>
                    </div>
                  </div>
                </Accordion.Header>

                <Accordion.Body id="collapseFour1" className="panel-body">
                  <div className="col-lg-12 col-md-12">
                    <div className="card">
                      <div className="">
                        <form className="row g-3 needs-validation" noValidate>

                          {/* Additional Fields */}
                          <div className="col-md-4">
                            <label className="form-label" htmlFor="validationCustom05">Invoice Number</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>

                          <div className="col-md-4">
                            <label className="form-label" htmlFor="validationCustom05">Credit Number</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>


                          <div className="col-md-4">
                            <label className="form-label" htmlFor="validationCustom05">PO Number</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>

                          <div className="col-md-4">
                            <label className="form-label" htmlFor="validationCustom05">Receipt Number</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>

                          <div className="col-md-4">
                            <label className="form-label" htmlFor="validationCustom05">Supplier Payment Number</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>
                          


                        </form>
                      </div>
                    </div>
                  </div>
                </Accordion.Body>

                
                
              </Accordion.Item>
            </Accordion>

            <Accordion className='overflow-hidden card'>
              <Accordion.Item eventKey="0">
                <Accordion.Header className='accordion-toggle font-weight-semibold tx-12 panel-heading2'>
                  <div className="row-sm row">
                    <div>
                      <a className="btn ripple btn-dark text-white btn-icon" data-placement="top" href="#">
                        <i className="fa fa-list"></i>
                      </a>
                    </div>
                    <div>
                      <h4 className='mt-1'>Variable Labels</h4>
                    </div>
                  </div>
                </Accordion.Header>

                <Accordion.Body id="collapseFour1" className="panel-body">
                  <div className="col-lg-12 col-md-12">
                    <div className="card">
                      <div className="">
                        <form className="row g-3 needs-validation" noValidate>

                          {/* Additional Fields */}
                          <div className="col-md-3">
                            <label className="form-label" htmlFor="validationCustom05">Plate Number Field</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>

                          <div className="col-md-3">
                            <label className="form-label" htmlFor="validationCustom05">VIN Field</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>

                          <div className="col-md-3">
                            <label className="form-label" htmlFor="validationCustom05">Fleet Code Field</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>

                          <div className="col-md-3">
                            <label className="form-label" htmlFor="validationCustom05">Employee Title Name</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>
                          


                        </form>
                      </div>
                    </div>
                  </div>
                </Accordion.Body>

                
                
              </Accordion.Item>
            </Accordion>

            <Accordion className='overflow-hidden card'>
              <Accordion.Item eventKey="0">
                <Accordion.Header className='accordion-toggle font-weight-semibold tx-12 panel-heading2'>
                  <div className="row-sm row">
                    <div>
                      <a className="btn ripple btn-dark text-white btn-icon" data-placement="top" href="#">
                        <i className="fa fa-user"></i>
                      </a>
                    </div>
                    <div>
                      <h4 className='mt-1'>Dealer Access</h4>
                    </div>
                  </div>
                </Accordion.Header>

                <Accordion.Body id="collapseFour1" className="panel-body">
                  <div className="col-lg-12 col-md-12">
                    <div className="card">
                      <div className="">
                        <form className="row g-3 needs-validation" noValidate>

                          {/* Additional Fields */}
                          <div className="col-md-3">
                            <label className="form-label" htmlFor="validationCustom05">Code</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>
                  

                            <div className="btn-list pt-4">
                              <button type="button" className="btn btn-primary" onClick={handleCancel}>
                                Grant Access
                              </button>
                            </div>
                            

                        </form>
                      </div>
                    </div>
                  </div>
                </Accordion.Body>

                
                
              </Accordion.Item>
            </Accordion>

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
        </Col>
      </Row>
    </Fragment>
  );
}

CompanySettings.propTypes = {};
CompanySettings.defaultProps = {};

export default CompanySettings;
