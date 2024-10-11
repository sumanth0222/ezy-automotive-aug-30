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
                            <div className={`main-toggle ms-sm-2 main-toggle-dark ${toggleStates.gstFree ? 'on' : 'off'}`} onClick={() => handleToggle('gstFree')}>
                              <span className={toggleStates.gstFree ? 'active' : ''}>
                                {toggleStates.gstFree ? '' : ''}
                              </span>
                            </div>
                          </div>


                          <div className="col-lg-3">
                            <label className="form-label" htmlFor="dontUpdateQty">Enable 2FA</label>
                            <div className={`main-toggle ms-sm-2 main-toggle-dark ${toggleStates.dontUpdateQty ? 'on' : 'off'}`} onClick={() => handleToggle('dontUpdateQty')}>
                              <span className={toggleStates.dontUpdateQty ? 'active' : ''}>
                                {toggleStates.dontUpdateQty ? '' : ''}
                              </span>
                            </div>
                          </div>

                          {/* Conditionally rendered fields based on "Enable 2FA" toggle */}
                          {toggleStates.dontUpdateQty && (
                            <>
                              <div className="col-lg-3">
                                <label className="form-label" htmlFor="priceLookup">Enable 2FA for All Users</label>
                               <div className={`main-toggle ms-sm-2 main-toggle-dark ${toggleStates.priceLookup ? 'on' : 'off'}`} onClick={() => handleToggle('priceLookup')}>
                              <span className={toggleStates.priceLookup ? 'active' : ''}>
                                {toggleStates.priceLookup ? '' : ''}
                              </span>
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
                            <div className={`main-toggle ms-sm-2 main-toggle-dark ${toggleStates.serialNumber ? 'on' : 'off'}`} onClick={() => handleToggle('serialNumber')}>
                              <span className={toggleStates.serialNumber ? 'active' : ''}>
                                {toggleStates.serialNumber ? '' : ''}
                              </span>
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
                            <div className={`main-toggle ms-sm-2 main-toggle-dark ${toggleStates.reservedstock ? 'on' : 'off'}`} onClick={() => handleToggle('reservedstock')}>
                              <span className={toggleStates.reservedstock ? 'active' : ''}>
                                {toggleStates.reservedstock ? '' : ''}
                              </span>
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
                            <div className={`main-toggle ms-sm-2 main-toggle-dark ${toggleStates.orderqty1 ? 'on' : 'off'}`} onClick={() => handleToggle('orderqty1')}>
                              <span className={toggleStates.orderqty1 ? 'active' : ''}>
                                {toggleStates.orderqty1 ? '' : ''}
                              </span>
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
                           <div className={`main-toggle ms-sm-2 main-toggle-dark ${toggleStates.Vehicle ? 'on' : 'off'}`} onClick={() => handleToggle('Vehicle')}>
                              <span className={toggleStates.Vehicle ? 'active' : ''}>
                                {toggleStates.Vehicle ? '' : ''}
                              </span>
                            </div>
                          </div>


                          
                          


                         

                          <div className="col-lg-3">
                            <label className="form-label" htmlFor="Fleet">Show Fleet Code</label>
                           <div className={`main-toggle ms-sm-2 main-toggle-dark ${toggleStates.Fleet ? 'on' : 'off'}`} onClick={() => handleToggle('Fleet')}>
                              <span className={toggleStates.Fleet ? 'active' : ''}>
                                {toggleStates.Fleet ? '' : ''}
                              </span>
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
                            <div className={`main-toggle ms-sm-2 main-toggle-dark ${toggleStates.shopmonth ? 'on' : 'off'}`} onClick={() => handleToggle('shopmonth')}>
                              <span className={toggleStates.shopmonth ? 'active' : ''}>
                                {toggleStates.shopmonth ? '' : ''}
                              </span>
                            </div>
                          </div>


                          
                          


                         

                          <div className="col-lg-3">
                            <label className="form-label" htmlFor="jobstatus">Description To Job Status Comment</label>
                            <div className={`main-toggle ms-sm-2 main-toggle-dark ${toggleStates.jobstatus ? 'on' : 'off'}`} onClick={() => handleToggle('jobstatus')}>
                              <span className={toggleStates.jobstatus ? 'active' : ''}>
                                {toggleStates.jobstatus ? '' : ''}
                              </span>
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
                            <div className={`main-toggle ms-sm-2 main-toggle-dark ${toggleStates.pricetax ? 'on' : 'off'}`} onClick={() => handleToggle('pricetax')}>
                              <span className={toggleStates.pricetax ? 'active' : ''}>
                                {toggleStates.pricetax ? '' : ''}
                              </span>
                            </div>
                          </div>


                          <div className="col-lg-3">
                            <label className="form-label" htmlFor="taxfreight">Tax Freight</label>
                            <div className={`main-toggle ms-sm-2 main-toggle-dark ${toggleStates.taxfreight ? 'on' : 'off'}`} onClick={() => handleToggle('taxfreight')}>
                              <span className={toggleStates.taxfreight ? 'active' : ''}>
                                {toggleStates.taxfreight  ? '' : ''}
                              </span>
                            </div>
                          </div>

                          <div className="col-lg-3">
                            <label className="form-label" htmlFor="roundtotal">Round Total</label>
                            <div className={`main-toggle ms-sm-2 main-toggle-dark ${toggleStates.roundtotal ? 'on' : 'off'}`} onClick={() => handleToggle('roundtotal')}>
                              <span className={toggleStates.roundtotal ? 'active' : ''}>
                                {toggleStates.roundtotal ? '' : ''}
                              </span>
                            </div>
                          </div>


                          <div className="col-lg-3">
                            <label className="form-label" htmlFor="discounttax">Discount  Includes Tax</label>
                            <div className={`main-toggle ms-sm-2 main-toggle-dark ${toggleStates.discounttax ? 'on' : 'off'}`} onClick={() => handleToggle('discounttax')}>
                              <span className={toggleStates.discounttax ? 'active' : ''}>
                                {toggleStates.discounttax ? '' : ''}
                              </span>
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
                            <div className={`main-toggle ms-sm-2 main-toggle-dark ${toggleStates.partnumber ? 'on' : 'off'}`} onClick={() => handleToggle('partnumber')}>
                              <span className={toggleStates.partnumber ? 'active' : ''}>
                                {toggleStates.partnumber ? '' : ''}
                              </span>
                            </div>
                          </div>

                          <div className="col-lg-3">
                            <label className="form-label" htmlFor="labourquantity">Hide Labour Quantity</label>
                           <div className={`main-toggle ms-sm-2 main-toggle-dark ${toggleStates.labourquantity ? 'on' : 'off'}`} onClick={() => handleToggle('labourquantity')}>
                              <span className={toggleStates.labourquantity ? 'active' : ''}>
                                {toggleStates.labourquantity ? '' : ''}
                              </span>
                            </div>
                          </div>

                          <div className="col-lg-3">
                            <label className="form-label" htmlFor="lineprices">Hide Line Prices</label>
                           <div className={`main-toggle ms-sm-2 main-toggle-dark ${toggleStates.lineprices ? 'on' : 'off'}`} onClick={() => handleToggle('lineprices')}>
                              <span className={toggleStates.lineprices ? 'active' : ''}>
                                {toggleStates.lineprices ? '' : ''}
                              </span>
                            </div>
                          </div>

                          <div className="col-lg-3">
                            <label className="form-label" htmlFor="header">Line Header/ Footer on Bundles</label>
                            <div className={`main-toggle ms-sm-2 main-toggle-dark ${toggleStates.header ? 'on' : 'off'}`} onClick={() => handleToggle('reservedstock')}>
                              <span className={toggleStates.header ? 'active' : ''}>
                                {toggleStates.header ? '' : ''}
                              </span>
                            </div>
                          </div>

                          <div className="col-lg-3">
                            <label className="form-label" htmlFor="jobcard">Barcode On Job Card</label>
                            <div className={`main-toggle ms-sm-2 main-toggle-dark ${toggleStates.jobcard ? 'on' : 'off'}`} onClick={() => handleToggle('jobcard')}>
                              <span className={toggleStates.jobcard ? 'active' : ''}>
                                {toggleStates.jobcard ? '' : ''}
                              </span>
                            </div>
                          </div>

                          <div className="col-lg-3">
                            <label className="form-label" htmlFor="jobnumber">Invoice Number Equals Job Number</label>
                           <div className={`main-toggle ms-sm-2 main-toggle-dark ${toggleStates.jobnumber ? 'on' : 'off'}`} onClick={() => handleToggle('jobnumber')}>
                              <span className={toggleStates.jobnumber ? 'active' : ''}>
                                {toggleStates.jobnumber ? '' : ''}
                              </span>
                            </div>
                          </div>

                          <div className="col-lg-3">
                            <label className="form-label" htmlFor="ordersattached">Cannot Process - Orders Attached</label>
                            <div className={`main-toggle ms-sm-2 main-toggle-dark ${toggleStates.ordersattached ? 'on' : 'off'}`} onClick={() => handleToggle('ordersattached')}>
                              <span className={toggleStates.ordersattached ? 'active' : ''}>
                                {toggleStates.ordersattached ? '' : ''}
                              </span>
                            </div>
                          </div>

                          <div className="col-lg-3">
                            <label className="form-label" htmlFor="pricingjobcard">Add Pricing To Job Card</label>
                            <div className={`main-toggle ms-sm-2 main-toggle-dark ${toggleStates.pricingjobcard ? 'on' : 'off'}`} onClick={() => handleToggle('pricingjobcard')}>
                              <span className={toggleStates.pricingjobcard ? 'active' : ''}>
                                {toggleStates.pricingjobcard ? '' : ''}
                              </span>
                            </div>
                          </div>


                          <div className="col-lg-3">
                            <label className="form-label" htmlFor="tyredetails">Hide Tyre Details(Job Card)</label>
                            <div className={`main-toggle ms-sm-2 main-toggle-dark ${toggleStates.tyredetails ? 'on' : 'off'}`} onClick={() => handleToggle('tyredetails')}>
                              <span className={toggleStates.tyredetails ? 'active' : ''}>
                                {toggleStates.tyredetails ? '' : ''}
                              </span>
                            </div>
                          </div>

                          <div className="col-lg-3">
                            <label className="form-label" htmlFor="mergebundle">Merge Bundles With Invoice Lines</label>
                            <div className={`main-toggle ms-sm-2 main-toggle-dark ${toggleStates.mergebundle ? 'on' : 'off'}`} onClick={() => handleToggle('mergebundle')}>
                              <span className={toggleStates.mergebundle ? 'active' : ''}>
                                {toggleStates.mergebundle ? '' : ''}
                              </span>
                            </div>
                          </div>

                          <div className="col-lg-3">
                            <label className="form-label" htmlFor="workedfield">Hours Worked Field</label>
                            <div className={`main-toggle ms-sm-2 main-toggle-dark ${toggleStates.workedfield ? 'on' : 'off'}`} onClick={() => handleToggle('workedfield')}>
                              <span className={toggleStates.workedfield ? 'active' : ''}>
                                {toggleStates.workedfield ? '' : ''}
                              </span>
                            </div>
                          </div>

                          <div className="col-lg-3">
                            <label className="form-label" htmlFor="invoiceline">Hide Tax On Invoice Lines</label>
                            <div className={`main-toggle ms-sm-2 main-toggle-dark ${toggleStates.invoiceline ? 'on' : 'off'}`} onClick={() => handleToggle('invoiceline')}>
                              <span className={toggleStates.invoiceline ? 'active' : ''}>
                                {toggleStates.invoiceline ? '' : ''}
                              </span>
                            </div>
                          </div>


                          <div className="col-lg-3">
                            <label className="form-label" htmlFor="oninvoice">Prevent Split Notes On Invoice</label>
                            <div className={`main-toggle ms-sm-2 main-toggle-dark ${toggleStates.oninvoice ? 'on' : 'off'}`} onClick={() => handleToggle('oninvoice')}>
                              <span className={toggleStates.oninvoice ? 'active' : ''}>
                                {toggleStates.oninvoice ? '' : ''}
                              </span>
                            </div>
                          </div>

                          <div className="col-lg-3">
                            <label className="form-label" htmlFor="onprocessvoice">Ask For Due Dates On Process Invoice</label>
                            <div className={`main-toggle ms-sm-2 main-toggle-dark ${toggleStates.onprocessvoice ? 'on' : 'off'}`} onClick={() => handleToggle('onprocessvoice')}>
                              <span className={toggleStates.onprocessvoice ? 'active' : ''}>
                                {toggleStates.onprocessvoice ? '' : ''}
                              </span>
                            </div>
                          </div>

                          <div className="col-lg-3">
                            <label className="form-label" htmlFor="invoicepostdate">Use Today As Invoice Post Date</label>
                            <div className={`main-toggle ms-sm-2 main-toggle-dark ${toggleStates.invoicepostdate ? 'on' : 'off'}`} onClick={() => handleToggle('invoicepostdate')}>
                              <span className={toggleStates.invoicepostdate ? 'active' : ''}>
                                {toggleStates.invoicepostdate ? '' : ''}
                              </span>
                            </div>
                          </div>

                          <div className="col-lg-3">
                            <label className="form-label" htmlFor="serviceadvisors">Use Service Advisors</label>
                            <div className={`main-toggle ms-sm-2 main-toggle-dark ${toggleStates.serviceadvisors ? 'on' : 'off'}`} onClick={() => handleToggle('serviceadvisors')}>
                              <span className={toggleStates.serviceadvisors ? 'active' : ''}>
                                {toggleStates.serviceadvisors ? '' : ''}
                              </span>
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
