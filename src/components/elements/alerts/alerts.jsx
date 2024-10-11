import React, { Fragment, useState } from 'react';
import { Card, Col, Form, Row, Tab, Tabs, Accordion } from "react-bootstrap";
import Pageheader from '../../../layout/layoutcomponent/pageheader';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MultiSelect } from "react-multi-select-component";
import { options, partsvalue1, partslisting, Stockstatus } from "../../../common/selectdata";
import { SalesReport1, SalesReport2, SalesReport3, SalesReport4, SalesReport5, itemsales } from "../../../common/selectdata";
import { VendorReport1, VendorReport2, VendorReport3 } from "../../../common/selectdata";
import { workshop } from "../../../common/selectdata";
import { Mechanic1 } from "../../../common/selectdata";
import { CustomerReport1 } from "../../../common/selectdata";
import { log2, log1 } from "../../../common/selectdata";
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { initialListdata, initialListdismissingdata, initialListiconsdata } from '../../../common/commondata';


const Alerts = () => {

  const navigate = useNavigate(); // Initialize useNavigate hook
  // Navigation handler
  const handleBack = () => {
    navigate(-1); // Navigate to the previous page
  };

  const [alertData, setalertData] = useState(initialListdata);

  const [outline, setoutline] = useState(initialListdata);

  const [solid, setsolid] = useState(initialListdata);



  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [filter, setFilter] = useState("");
  const [selected, setSelected] = useState([]);


  const [fullscreen, setFullscreen] = useState(true);
  const [shows, setShows] = useState(false);

  // Filtering based on search term
  const filterData = (data, field) =>
    data.filter((item) =>
      item[field].toLowerCase().includes(filter.toLowerCase()));

  const [Alertdismissing, setAlertdismissing] = useState(initialListdismissingdata);
  const [iconsdismissing, seticonsdismissing] = useState(initialListiconsdata);
  let handleRemove = (id) => {
    const newList = alertData.filter((list) => list.id !== id);
    setalertData(newList);
  }
  let handleRemoveoutline = (id) => {
    const newList = outline.filter((list) => list.id !== id);
    setoutline(newList);
  }
  let handleRemovesolid = (id) => {
    const newList = solid.filter((list) => list.id !== id);
    setsolid(newList);
  }
  let handleRemovedismissing = (id) => {
    const newList = Alertdismissing.filter((list) => list.id !== id);
    setAlertdismissing(newList);
  }
  let handleRemoveicons = (id) => {
    const newList = iconsdismissing.filter((list) => list.id !== id);
    seticonsdismissing(newList);
  }







  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShows(true);
  }

  const [Style3, setStyle3] = useState(false);

  return (
    <Fragment>
      <Pageheader title="Business Reports" heading="Elements" active="Business Reports" />

      <Row className='row-sm'>
        <Col xl={12}>
          <Card className=" mg-b-20" id="tabs-style3">
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <Tabs defaultActiveKey="Tab Style 01" className="nav panel-tabs border-bottom-0">

                    <Tab eventKey="Tab Style 01" title="Sales Report">
                      <div className="" id="" role="">

                        <Accordion className='overflow-hidden'>
                          <Accordion.Item  >
                            {/* <Accordion.Header >
      
    </Accordion.Header> */}

                            <Accordion.Body id="" className="">
                              <div className="col-lg-12 col-md-12">
                                <div className="card">
                                  <div className="card-header row-sm row justify-content-between" style={{ backgroundColor: '#38cab3', color: 'white', padding: '10px' }}>
                                    <div>
                                      <h3 className="">Sales Report</h3>
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
                                          options={SalesReport1}
                                        />
                                      </div>
                                      {/* Search By Field */}
                                      <div className="col-lg-3">
                                        <p>Search By</p>
                                        <MultiSelect
                                          value={selected}
                                          onChange={setSelected}
                                          labelledBy="Select"
                                          options={SalesReport2}
                                        />
                                      </div>
                                      {/* Additional Fields */}
                                      <div className="col-md-3">
                                        <label className="form-label" htmlFor="validationCustom05">Start Range</label>
                                        <input className="form-control" id="validationCustom05" type="text" required />
                                        <div className="invalid-feedback">Please provide a valid zip.</div>
                                      </div>
                                      <div className="col-md-3">
                                        <label className="form-label" htmlFor="validationCustom05">End Range</label>
                                        <input className="form-control" id="validationCustom05" type="text" required />
                                        <div className="invalid-feedback">Please provide a valid zip.</div>
                                      </div>
                                      {/* More Select Fields */}
                                      <div className="col-lg-3">
                                        <p>Limit By Type</p>
                                        <MultiSelect
                                          value={selected}
                                          onChange={setSelected}
                                          labelledBy="Select"
                                          options={SalesReport3}
                                        />
                                      </div>
                                      <div className="col-lg-3">
                                        <p>Internal Only</p>
                                        <MultiSelect
                                          value={selected}
                                          onChange={setSelected}
                                          labelledBy="Select"
                                          options={SalesReport4}
                                        />
                                      </div>
                                      <div className="col-lg-3">
                                        <p>Customer Type</p>
                                        <MultiSelect
                                          value={selected}
                                          onChange={setSelected}
                                          labelledBy="Select"
                                          options={SalesReport5}
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
                                      <h3 className="">Sales Breakup</h3>
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
                                      {/* Summary By Field */}
                                      <div class="col-lg-3">
                                        <Form.Label>Summary</Form.Label>
                                        <div class="form-group">
                                          <label class="custom-switch form-switch mb-0  p-0 form-label">
                                            <input name="custom-switch-radio" type="checkbox" class="custom-switch-input form-control" />
                                            <span class="custom-switch-indicator custom-switch-indicator-lg"></span>
                                          </label>
                                        </div>
                                      </div>
                                      {/* Search By Field */}
                                      <div className="col-lg-3">
                                        <p>Internal Only</p>
                                        <MultiSelect
                                          value={selected}
                                          onChange={setSelected}
                                          labelledBy="Select"
                                          options={SalesReport4}
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
                                      <h3 className="">Item Sales</h3>
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
                                          options={itemsales}
                                        />
                                      </div>
                                      {/* Search By Field */}
                                      <div className="col-lg-3">
                                        <p>Search By</p>
                                        <MultiSelect
                                          value={selected}
                                          onChange={setSelected}
                                          labelledBy="Select"
                                          options={itemsales}
                                        />
                                      </div>
                                      {/* Additional Fields */}
                                      <div className="col-md-3">
                                        <label className="form-label" htmlFor="validationCustom05">Start Range</label>
                                        <input className="form-control" id="validationCustom05" type="text" required />
                                        <div className="invalid-feedback">Please provide a valid zip.</div>
                                      </div>
                                      <div className="col-md-3">
                                        <label className="form-label" htmlFor="validationCustom05">End Range</label>
                                        <input className="form-control" id="validationCustom05" type="text" required />
                                        <div className="invalid-feedback">Please provide a valid zip.</div>
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
                                      <div className="col-lg-3">
                                        <p>Internal Only</p>
                                        <MultiSelect
                                          value={selected}
                                          onChange={setSelected}
                                          labelledBy="Select"
                                          options={SalesReport4}
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
                                      <h3 className="">Sales By Payment Method</h3>
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
                    </Tab>


                    <Tab eventKey="Tab Style 02" title="Parts Reports">
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
                              <div className="col-lg-12 col-md-12">
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
                                </div>
                              </div>
                            </Accordion.Body>


                          </Accordion.Item>
                        </Accordion>
                      </div>
                    </Tab>


                    <Tab eventKey="Tab Style 03" title="Vendor Reports">
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

                            <Accordion.Body id="collapseFour1" className="panel-body" style={{ paddingBottom: '50px' }}>
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
                    </Tab>


                    <Tab eventKey="Tab Style 04" title=" Workshop Reports">
                      <div className="" id="" role="">

                        <Accordion className="overflow-hidden">
                          <Accordion.Item >


                            <Accordion.Body id="" className="">
                              <div className="col-lg-12 col-md-12">
                                <div className="card">
                                  <div className="card-header row-sm row justify-content-between" style={{ backgroundColor: '#38cab3', color: 'white', padding: '10px' }}>
                                    <div>
                                      <h3 className="">Work In Progress</h3>
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
                                        <Form.Label>Summary</Form.Label>
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
                                      <h3 className="">Service Due</h3>
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
                                      <h3 className="">Rego Renewal Due</h3>
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
                                      <h3 className="">Vechile Listing</h3>
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
                                          options={workshop}
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
                                      <h3 className="">Quote Report</h3>
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
                                      <h3 className="">Follow Up Report</h3>
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
                                      <h3 className="">Booking Report</h3>
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
                    </Tab>

                    <Tab eventKey="Tab Style 05" title=" Mechanics Report">
                      <div className="" id="" role="">

                        <Accordion className="overflow-hidden ">
                          <Accordion.Item  >


                            <Accordion.Body id="" className="">
                              <div className="col-lg-12 col-md-12">
                                <div className="card">
                                  <div className="card-header row-sm row justify-content-between" style={{ backgroundColor: '#38cab3', color: 'white', padding: '10px' }}>
                                    <div>
                                      <h3 className="">Mechanics Performance</h3>
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


                                      {/* Report  Fields */}
                                      <div class="col-lg-3">
                                        <Form.Label>Report Type</Form.Label>
                                        <div class="form-group">
                                          <label class="custom-switch form-switch mb-0  p-0 form-label">
                                            <input name="custom-switch-radio" type="checkbox" class="custom-switch-input form-control" />
                                            <span class="custom-switch-indicator custom-switch-indicator-lg"></span>
                                          </label>
                                        </div>
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

                                      {/* Order By Field */}
                                      <div className="col-lg-3">
                                        <p>Internal Only</p>
                                        <MultiSelect
                                          value={selected}
                                          onChange={setSelected}
                                          labelledBy="Select"
                                          options={SalesReport4}
                                        />
                                      </div>

                                      {/* Summary  Fields */}
                                      <div class="col-lg-3">
                                        <Form.Label>Show Open Transactions</Form.Label>
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
                                      <h3 className="">No Labor Times</h3>
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
                                        <Form.Label>Summary</Form.Label>
                                        <div class="form-group">
                                          <label class="custom-switch form-switch mb-0  p-0 form-label">
                                            <input name="custom-switch-radio" type="checkbox" class="custom-switch-input form-control" />
                                            <span class="custom-switch-indicator custom-switch-indicator-lg"></span>
                                          </label>
                                        </div>
                                      </div>


                                      {/* Report  Fields */}
                                      <div class="col-lg-3">
                                        <Form.Label>Show Open Transactions</Form.Label>
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
                                      <h3 className="">Mechanics Clocked On</h3>
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
                                      <h3 className="">Mechanics Time Sheet</h3>
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
                                        <p>Mechanic</p>
                                        <MultiSelect
                                          value={selected}
                                          onChange={setSelected}
                                          labelledBy="Select"
                                          options={Mechanic1}
                                        />
                                      </div>

                                    </form>
                                  </div>
                                </div>
                              </div>
                            </Accordion.Body>

                            <Accordion.Body id="collapseFour1" className="panel-body" style={{ paddingBottom: "65px" }}>
                              <div className="col-lg-12 col-md-12">
                                <div className="card">
                                  <div className="card-header row-sm row justify-content-between" style={{ backgroundColor: '#38cab3', color: 'white', padding: '10px' }}>
                                    <div>
                                      <h3 className="">Mechanic Barcode List</h3>
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

                                    </form>
                                  </div>
                                </div>
                              </div>
                            </Accordion.Body>


                          </Accordion.Item>
                        </Accordion>





                      </div>
                    </Tab>


                    <Tab eventKey="Tab Style 06" title=" Customer Report">
                      <div className="" id="" role="">

                        <Accordion className="overflow-hidden">
                          <Accordion.Item >


                            <Accordion.Body id="" className="">
                              <div className="col-lg-12 col-md-12">
                                <div className="card">
                                  <div className="card-header row-sm row justify-content-between" style={{ backgroundColor: '#38cab3', color: 'white', padding: '10px' }}>
                                    <div>
                                      <h3 className="">Customer Balanaces</h3>
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
                                      <h3 className="">Outstanding Customer Balances</h3>
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
                                      <h3 className="">Customer Listing</h3>
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
                                      <h3 className="">Customer Sales</h3>
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
                                          options={CustomerReport1}
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
                                      <h3 className="">Customer Open Deposits</h3>
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
                                      <h3 className="">Customer Sources</h3>
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
                                      <h3 className="">Biller Balances</h3>
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
                    </Tab>

                    <Tab eventKey="Tab Style 07" title=" Log Reports">
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

                    </Tab>

                  </Tabs>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
}

export default Alerts;
