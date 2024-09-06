import React, { Fragment, useState } from 'react';
import { Card, Col, Form, Collapse, Row, Alert, Accordion, Button, Modal } from "react-bootstrap";


import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MultiSelect } from "react-multi-select-component";
import { Link as RouterLink } from 'react-router-dom';

const SalesReports = () => {
  const [open, setOpen] = useState(false);
  const [alertData, setalertData] = useState(initialListdata);
  const [Outline, setOutline] = useState(false);
  const [outline, setoutline] = useState(initialListdata);
  const [Solid, setSolid] = useState(false);
  const [solid, setsolid] = useState(initialListdata);
  const [Dismissing, setDismissing] = useState(false);
  const [Icon, setIcon] = useState(false);
  const [Link, setLink] = useState(false);
  const [DismissingIcon, setDismissingIcon] = useState(false);
  const [Additional, setAdditional] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [filter, setFilter] = useState("");
  const [selected, setSelected] = useState([]);



  const [show, setShow] = useState(true);
  const [isFirstCollapsed, setIsFirstCollapsed] = useState(true);
  const [isFirstCollapseds, setIsFirstCollapseds] = useState(true);
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

  const first = () => {
    setIsFirstCollapsed(!isFirstCollapsed);
  };

  const firsts = () => {
    setIsFirstCollapseds(!isFirstCollapseds);
  };

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShows(true);
  }

  return (

    <Fragment>

      <Pageheader title="Business Reports" heading="Elements" active="Business Reports" />

      <Row className='faq mt-5'>
        <Col xl={12}>
          <div className="panel-group2" id="accordion11" role="tablist">

            <Accordion className='overflow-hidden card'>
              <Accordion.Item eventKey="0" >
                <Accordion.Header className='accordion-toggle font-weight-semibold tx-12 panel-heading2' >
                  <div className="row-sm row justify-content-between" >
                    <div>
                      <a className="btn ripple btn-warning text-white btn-icon" data-placement="top" href="#">
                        <i className="fab fa-sellsy"></i>
                      </a>
                    </div>
                    <div>
                      <h4 className='mt-1'>Sales Reports</h4>
                    </div>
                  </div>
                </Accordion.Header>

                <Accordion.Body id="collapseFour1" className="panel-body">
                  <div className="col-lg-12 col-md-12">
                    <div className="card">
                      <div className="card-header row-sm row justify-content-between" style={{ backgroundColor: '#257495', color: 'white', padding: '10px' }}>
                        <div>
                          <h3 className="">Sales Report</h3>
                        </div>
                        <div className='row-sm row'>
                          <div>
                            <a
                              className="btn ripple btn-danger text-white btn-icon mt-4"
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
                              className="btn ripple btn-success text-white btn-icon mt-4"
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
                              options={options}
                            />
                          </div>
                          {/* Search By Field */}
                          <div className="col-lg-3">
                            <p>Search By</p>
                            <MultiSelect
                              value={selected}
                              onChange={setSelected}
                              labelledBy="Select"
                              options={options}
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
                              options={options}
                            />
                          </div>
                          <div className="col-lg-3">
                            <p>Internal Only</p>
                            <MultiSelect
                              value={selected}
                              onChange={setSelected}
                              labelledBy="Select"
                              options={options}
                            />
                          </div>
                          <div className="col-lg-3">
                            <p>Customer Type</p>
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
                      <div className="card-header row-sm row justify-content-between" style={{ backgroundColor: '#257495', color: 'white', padding: '10px' }}>
                        <div>
                          <h3 className="">Sales Breakup</h3>
                        </div>
                        <div className='row-sm row'>
                          <div>
                            <a
                              className="btn ripple btn-danger text-white btn-icon mt-4"
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
                              className="btn ripple btn-success text-white btn-icon mt-4"
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
                      <div className="card-header row-sm row justify-content-between" style={{ backgroundColor: '#257495', color: 'white', padding: '10px' }}>
                        <div>
                          <h3 className="">Item Sales</h3>
                        </div>
                        <div className='row-sm row'>
                          <div>
                            <a
                              className="btn ripple btn-danger text-white btn-icon mt-4"
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
                              className="btn ripple btn-success text-white btn-icon mt-4"
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
                              options={options}
                            />
                          </div>
                          {/* Search By Field */}
                          <div className="col-lg-3">
                            <p>Search By</p>
                            <MultiSelect
                              value={selected}
                              onChange={setSelected}
                              labelledBy="Select"
                              options={options}
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
                      <div className="card-header row-sm row justify-content-between" style={{ backgroundColor: '#257495', color: 'white', padding: '10px' }}>
                        <div>
                          <h3 className="">Sales By Payment Method</h3>
                        </div>
                        <div className='row-sm row'>
                          <div>
                            <a
                              className="btn ripple btn-danger text-white btn-icon mt-4"
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
                              className="btn ripple btn-success text-white btn-icon mt-4"
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

            <Accordion className='overflow-hidden card'>
              <Accordion.Item eventKey="0" >
                <Accordion.Header className='accordion-toggle font-weight-semibold tx-12 panel-heading2' >
                  <div className="row-sm row justify-content-between" >
                    <div>
                      <a className="btn ripple btn-warning text-white btn-icon" data-placement="top" href="#">
                        <i className="fab fa-sellsy"></i>
                      </a>
                    </div>
                    <div>
                      <h4 className='mt-1'>Parts Reports</h4>
                    </div>
                  </div>
                </Accordion.Header>

                <Accordion.Body id="collapseFour1" className="panel-body">
                  <div className="col-lg-12 col-md-12">
                    <div className="card">
                      <div className="card-header row-sm row justify-content-between" style={{ backgroundColor: '#257495', color: 'white', padding: '10px' }}>
                        <div>
                          <h3 className="">Parts Value</h3>
                        </div>
                        <div className='row-sm row'>
                          <div>
                            <a
                              className="btn ripple btn-danger text-white btn-icon mt-4"
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
                              className="btn ripple btn-success text-white btn-icon mt-4"
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
                              options={options}
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
                      <div className="card-header row-sm row justify-content-between" style={{ backgroundColor: '#257495', color: 'white', padding: '10px' }}>
                        <div>
                          <h3 className="">Parts Listing</h3>
                        </div>
                        <div className='row-sm row'>
                          <div>
                            <a
                              className="btn ripple btn-danger text-white btn-icon mt-4"
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
                              className="btn ripple btn-success text-white btn-icon mt-4"
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
                              options={options}
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
                      <div className="card-header row-sm row justify-content-between" style={{ backgroundColor: '#257495', color: 'white', padding: '10px' }}>
                        <div>
                          <h3 className="">Stocktake Variance</h3>
                        </div>
                        <div className='row-sm row'>
                          <div>
                            <a
                              className="btn ripple btn-danger text-white btn-icon mt-4"
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
                              className="btn ripple btn-success text-white btn-icon mt-4"
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
                      <div className="card-header row-sm row justify-content-between" style={{ backgroundColor: '#257495', color: 'white', padding: '10px' }}>
                        <div>
                          <h3 className="">Stock Status Report</h3>
                        </div>
                        <div className='row-sm row'>
                          <div>
                            <a
                              className="btn ripple btn-danger text-white btn-icon mt-4"
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
                              className="btn ripple btn-success text-white btn-icon mt-4"
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
                              options={options}
                            />
                          </div>


                        </form>
                      </div>
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
                      <a className="btn ripple btn-warning text-white btn-icon" data-placement="top" href="#">
                        <i className="fab fa-sellsy"></i>
                      </a>
                    </div>
                    <div>
                      <h4 className='mt-1'>Vendor Reports</h4>
                    </div>
                  </div>
                </Accordion.Header>

                <Accordion.Body id="collapseFour1" className="panel-body">
                  <div className="col-lg-12 col-md-12">
                    <div className="card">
                      <div className="card-header row-sm row justify-content-between" style={{ backgroundColor: '#257495', color: 'white', padding: '10px' }}>
                        <div>
                          <h3 className="">Parts Order Report</h3>
                        </div>
                        <div className='row-sm row'>
                          <div>
                            <a
                              className="btn ripple btn-danger text-white btn-icon mt-4"
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
                              className="btn ripple btn-success text-white btn-icon mt-4"
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
                      <div className="card-header row-sm row justify-content-between" style={{ backgroundColor: '#257495', color: 'white', padding: '10px' }}>
                        <div>
                          <h3 className="">Purchases Report</h3>
                        </div>
                        <div className='row-sm row'>
                          <div>
                            <a
                              className="btn ripple btn-danger text-white btn-icon mt-4"
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
                              className="btn ripple btn-success text-white btn-icon mt-4"
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
                      <div className="card-header row-sm row justify-content-between" style={{ backgroundColor: '#257495', color: 'white', padding: '10px' }}>
                        <div>
                          <h3 className="">Item Purchases</h3>
                        </div>
                        <div className='row-sm row'>
                          <div>
                            <a
                              className="btn ripple btn-danger text-white btn-icon mt-4"
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
                              className="btn ripple btn-success text-white btn-icon mt-4"
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
                              options={options}
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
                      <div className="card-header row-sm row justify-content-between" style={{ backgroundColor: '#257495', color: 'white', padding: '10px' }}>
                        <div>
                          <h3 className="">Vendor Listing</h3>
                        </div>
                        <div className='row-sm row'>
                          <div>
                            <a
                              className="btn ripple btn-danger text-white btn-icon mt-4"
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
                              className="btn ripple btn-success text-white btn-icon mt-4"
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
                      <div className="card-header row-sm row justify-content-between" style={{ backgroundColor: '#257495', color: 'white', padding: '10px' }}>
                        <div>
                          <h3 className="">Vendor Balances</h3>
                        </div>
                        <div className='row-sm row'>
                          <div>
                            <a
                              className="btn ripple btn-danger text-white btn-icon mt-4"
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
                              className="btn ripple btn-success text-white btn-icon mt-4"
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
                              options={options}
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

                <Accordion.Body id="collapseFour1" className="panel-body">
                  <div className="col-lg-12 col-md-12">
                    <div className="card">
                      <div className="card-header row-sm row justify-content-between" style={{ backgroundColor: '#257495', color: 'white', padding: '10px' }}>
                        <div>
                          <h3 className="">Supplier Biller Balances</h3>
                        </div>
                        <div className='row-sm row'>
                          <div>
                            <a
                              className="btn ripple btn-danger text-white btn-icon mt-4"
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
                              className="btn ripple btn-success text-white btn-icon mt-4"
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


            <Accordion className="overflow-hidden card">
              <Accordion.Item eventKey="0" >
                <Accordion.Header className='accordion-toggle font-weight-semibold tx-12 panel-heading2' >
                  <div className="row-sm row justify-content-between" >
                    <div>
                      <a className="btn ripple btn-warning text-white btn-icon" data-placement="top" href="#">
                        <i className="fab fa-sellsy"></i>
                      </a>
                    </div>
                    <div>
                      <h4 className='mt-1'>Workshop Reports</h4>
                    </div>
                  </div>
                </Accordion.Header>

                <Accordion.Body id="collapseFour1" className="panel-body">
                  <div className="col-lg-12 col-md-12">
                    <div className="card">
                      <div className="card-header row-sm row justify-content-between" style={{ backgroundColor: '#257495', color: 'white', padding: '10px' }}>
                        <div>
                          <h3 className="">Work In Progress</h3>
                        </div>
                        <div className='row-sm row'>
                          <div>
                            <a
                              className="btn ripple btn-danger text-white btn-icon mt-4"
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
                              className="btn ripple btn-success text-white btn-icon mt-4"
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
                      <div className="card-header row-sm row justify-content-between" style={{ backgroundColor: '#257495', color: 'white', padding: '10px' }}>
                        <div>
                          <h3 className="">Service Due</h3>
                        </div>
                        <div className='row-sm row'>
                          <div>
                            <a
                              className="btn ripple btn-danger text-white btn-icon mt-4"
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
                              className="btn ripple btn-success text-white btn-icon mt-4"
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
                      <div className="card-header row-sm row justify-content-between" style={{ backgroundColor: '#257495', color: 'white', padding: '10px' }}>
                        <div>
                          <h3 className="">Rego Renewal Due</h3>
                        </div>
                        <div className='row-sm row'>
                          <div>
                            <a
                              className="btn ripple btn-danger text-white btn-icon mt-4"
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
                              className="btn ripple btn-success text-white btn-icon mt-4"
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
                      <div className="card-header row-sm row justify-content-between" style={{ backgroundColor: '#257495', color: 'white', padding: '10px' }}>
                        <div>
                          <h3 className="">Vechile Listing</h3>
                        </div>
                        <div className='row-sm row'>
                          <div>
                            <a
                              className="btn ripple btn-danger text-white btn-icon mt-4"
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
                              className="btn ripple btn-success text-white btn-icon mt-4"
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
                      <div className="card-header row-sm row justify-content-between" style={{ backgroundColor: '#257495', color: 'white', padding: '10px' }}>
                        <div>
                          <h3 className="">Quote Report</h3>
                        </div>
                        <div className='row-sm row'>
                          <div>
                            <a
                              className="btn ripple btn-danger text-white btn-icon mt-4"
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
                              className="btn ripple btn-success text-white btn-icon mt-4"
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
                      <div className="card-header row-sm row justify-content-between" style={{ backgroundColor: '#257495', color: 'white', padding: '10px' }}>
                        <div>
                          <h3 className="">Follow Up Report</h3>
                        </div>
                        <div className='row-sm row'>
                          <div>
                            <a
                              className="btn ripple btn-danger text-white btn-icon mt-4"
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
                              className="btn ripple btn-success text-white btn-icon mt-4"
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
                      <div className="card-header row-sm row justify-content-between" style={{ backgroundColor: '#257495', color: 'white', padding: '10px' }}>
                        <div>
                          <h3 className="">Booking Report</h3>
                        </div>
                        <div className='row-sm row'>
                          <div>
                            <a
                              className="btn ripple btn-danger text-white btn-icon mt-4"
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
                              className="btn ripple btn-success text-white btn-icon mt-4"
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

            <Accordion className="overflow-hidden card">
              <Accordion.Item eventKey="0" >
                <Accordion.Header className='accordion-toggle font-weight-semibold tx-12 panel-heading2' >
                  <div className="row-sm row justify-content-between" >
                    <div>
                      <a className="btn ripple btn-warning text-white btn-icon" data-placement="top" href="#">
                        <i className="fab fa-sellsy"></i>
                      </a>
                    </div>
                    <div>
                      <h4 className='mt-1'>Mechanics Report</h4>
                    </div>
                  </div>
                </Accordion.Header>

                <Accordion.Body id="collapseFour1" className="panel-body">
                  <div className="col-lg-12 col-md-12">
                    <div className="card">
                      <div className="card-header row-sm row justify-content-between" style={{ backgroundColor: '#257495', color: 'white', padding: '10px' }}>
                        <div>
                          <h3 className="">Mechanics Performance</h3>
                        </div>
                        <div className='row-sm row'>
                          <div>
                            <a
                              className="btn ripple btn-danger text-white btn-icon mt-4"
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
                              className="btn ripple btn-success text-white btn-icon mt-4"
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
                              options={options}
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
                      <div className="card-header row-sm row justify-content-between" style={{ backgroundColor: '#257495', color: 'white', padding: '10px' }}>
                        <div>
                          <h3 className="">No Labor Times</h3>
                        </div>
                        <div className='row-sm row'>
                          <div>
                            <a
                              className="btn ripple btn-danger text-white btn-icon mt-4"
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
                              className="btn ripple btn-success text-white btn-icon mt-4"
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
                      <div className="card-header row-sm row justify-content-between" style={{ backgroundColor: '#257495', color: 'white', padding: '10px' }}>
                        <div>
                          <h3 className="">Mechanics Clocked On</h3>
                        </div>
                        <div className='row-sm row'>
                          <div>
                            <a
                              className="btn ripple btn-danger text-white btn-icon mt-4"
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
                              className="btn ripple btn-success text-white btn-icon mt-4"
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
                      <div className="card-header row-sm row justify-content-between" style={{ backgroundColor: '#257495', color: 'white', padding: '10px' }}>
                        <div>
                          <h3 className="">Mechanics Time Sheet</h3>
                        </div>
                        <div className='row-sm row'>
                          <div>
                            <a
                              className="btn ripple btn-danger text-white btn-icon mt-4"
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
                              className="btn ripple btn-success text-white btn-icon mt-4"
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
                      <div className="card-header row-sm row justify-content-between" style={{ backgroundColor: '#257495', color: 'white', padding: '10px' }}>
                        <div>
                          <h3 className="">Mechanic Barcode List</h3>
                        </div>
                        <div className='row-sm row'>
                          <div>
                            <a
                              className="btn ripple btn-danger text-white btn-icon mt-4"
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
                              className="btn ripple btn-success text-white btn-icon mt-4"
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

            <Accordion className="overflow-hidden card">
              <Accordion.Item eventKey="0" >
                <Accordion.Header className='accordion-toggle font-weight-semibold tx-12 panel-heading2' >
                  <div className="row-sm row justify-content-between" >
                    <div>
                      <a className="btn ripple btn-warning text-white btn-icon" data-placement="top" href="#">
                        <i className="fab fa-sellsy"></i>
                      </a>
                    </div>
                    <div>
                      <h4 className='mt-1'>Customer Report</h4>
                    </div>
                  </div>
                </Accordion.Header>

                <Accordion.Body id="collapseFour1" className="panel-body">
                  <div className="col-lg-12 col-md-12">
                    <div className="card">
                      <div className="card-header row-sm row justify-content-between" style={{ backgroundColor: '#257495', color: 'white', padding: '10px' }}>
                        <div>
                          <h3 className="">Customer Balanaces</h3>
                        </div>
                        <div className='row-sm row'>
                          <div>
                            <a
                              className="btn ripple btn-danger text-white btn-icon mt-4"
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
                              className="btn ripple btn-success text-white btn-icon mt-4"
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
                              options={options}
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
                      <div className="card-header row-sm row justify-content-between" style={{ backgroundColor: '#257495', color: 'white', padding: '10px' }}>
                        <div>
                          <h3 className="">Outstanding Customer Balances</h3>
                        </div>
                        <div className='row-sm row'>
                          <div>
                            <a
                              className="btn ripple btn-danger text-white btn-icon mt-4"
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
                              className="btn ripple btn-success text-white btn-icon mt-4"
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
                      <div className="card-header row-sm row justify-content-between" style={{ backgroundColor: '#257495', color: 'white', padding: '10px' }}>
                        <div>
                          <h3 className="">Customer Listing</h3>
                        </div>
                        <div className='row-sm row'>
                          <div>
                            <a
                              className="btn ripple btn-danger text-white btn-icon mt-4"
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
                              className="btn ripple btn-success text-white btn-icon mt-4"
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
                      <div className="card-header row-sm row justify-content-between" style={{ backgroundColor: '#257495', color: 'white', padding: '10px' }}>
                        <div>
                          <h3 className="">Customer Sales</h3>
                        </div>
                        <div className='row-sm row'>
                          <div>
                            <a
                              className="btn ripple btn-danger text-white btn-icon mt-4"
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
                              className="btn ripple btn-success text-white btn-icon mt-4"
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
                      <div className="card-header row-sm row justify-content-between" style={{ backgroundColor: '#257495', color: 'white', padding: '10px' }}>
                        <div>
                          <h3 className="">Customer Open Deposits</h3>
                        </div>
                        <div className='row-sm row'>
                          <div>
                            <a
                              className="btn ripple btn-danger text-white btn-icon mt-4"
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
                              className="btn ripple btn-success text-white btn-icon mt-4"
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
                      <div className="card-header row-sm row justify-content-between" style={{ backgroundColor: '#257495', color: 'white', padding: '10px' }}>
                        <div>
                          <h3 className="">Customer Sources</h3>
                        </div>
                        <div className='row-sm row'>
                          <div>
                            <a
                              className="btn ripple btn-danger text-white btn-icon mt-4"
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
                              className="btn ripple btn-success text-white btn-icon mt-4"
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
                      <div className="card-header row-sm row justify-content-between" style={{ backgroundColor: '#257495', color: 'white', padding: '10px' }}>
                        <div>
                          <h3 className="">Biller Balances</h3>
                        </div>
                        <div className='row-sm row'>
                          <div>
                            <a
                              className="btn ripple btn-danger text-white btn-icon mt-4"
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
                              className="btn ripple btn-success text-white btn-icon mt-4"
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

            <Accordion className="overflow-hidden card">
              <Accordion.Item eventKey="0" >
                <Accordion.Header className='accordion-toggle font-weight-semibold tx-12 panel-heading2' >
                  <div className="row-sm row justify-content-between" >
                    <div>
                      <a className="btn ripple btn-warning text-white btn-icon" data-placement="top" href="#">
                        <i className="fab fa-sellsy"></i>
                      </a>
                    </div>
                    <div>
                      <h4 className='mt-1'>Logo Reports</h4>
                    </div>
                  </div>
                </Accordion.Header>

                <Accordion.Body id="collapseFour1" className="panel-body">
                  <div className="col-lg-12 col-md-12">
                    <div className="card">
                      <div className="card-header row-sm row justify-content-between" style={{ backgroundColor: '#257495', color: 'white', padding: '10px' }}>
                        <div>
                          <h3 className="">Email Report</h3>
                        </div>
                        <div className='row-sm row'>
                          <div>
                            <a
                              className="btn ripple btn-danger text-white btn-icon mt-4"
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
                              className="btn ripple btn-success text-white btn-icon mt-4"
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
                      <div className="card-header row-sm row justify-content-between" style={{ backgroundColor: '#257495', color: 'white', padding: '10px' }}>
                        <div>
                          <h3 className="">Voided Invoice/Payment/Order Report</h3>
                        </div>
                        <div className='row-sm row'>
                          <div>
                            <a
                              className="btn ripple btn-danger text-white btn-icon mt-4"
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
                              className="btn ripple btn-success text-white btn-icon mt-4"
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
                      <div className="card-header row-sm row justify-content-between" style={{ backgroundColor: '#257495', color: 'white', padding: '10px' }}>
                        <div>
                          <h3 className="">Invoice/Payment Status</h3>
                        </div>
                        <div className='row-sm row'>
                          <div>
                            <a
                              className="btn ripple btn-danger text-white btn-icon mt-4"
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
                              className="btn ripple btn-success text-white btn-icon mt-4"
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
                              options={options}
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
                      <div className="card-header row-sm row justify-content-between" style={{ backgroundColor: '#257495', color: 'white', padding: '10px' }}>
                        <div>
                          <h3 className="">Transaction Logo</h3>
                        </div>
                        <div className='row-sm row'>
                          <div>
                            <a
                              className="btn ripple btn-danger text-white btn-icon mt-4"
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
                              className="btn ripple btn-success text-white btn-icon mt-4"
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
                              options={options}
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
                      <div className="card-header row-sm row justify-content-between" style={{ backgroundColor: '#257495', color: 'white', padding: '10px' }}>
                        <div>
                          <h3 className="">Event Report</h3>
                        </div>
                        <div className='row-sm row'>
                          <div>
                            <a
                              className="btn ripple btn-danger text-white btn-icon mt-4"
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
                              className="btn ripple btn-success text-white btn-icon mt-4"
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
                      <div className="card-header row-sm row justify-content-between" style={{ backgroundColor: '#257495', color: 'white', padding: '10px' }}>
                        <div>
                          <h3 className="">Text Message Report</h3>
                        </div>
                        <div className='row-sm row'>
                          <div>
                            <a
                              className="btn ripple btn-danger text-white btn-icon mt-4"
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
                              className="btn ripple btn-success text-white btn-icon mt-4"
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

      <Row className="row-sm">
        <Col className="mg-md-t-0 text-center" sm={12} md={12} lg={4} xl={4}>
          <Card>
            <Card.Body>
            <RouterLink to={`${import.meta.env.BASE_URL}reports/salesreports/salesreports`}>Sales Report</RouterLink>
            </Card.Body>
            {/* <Card.Footer className="bd-t tx-center">
              
            </Card.Footer> */}
          </Card>
        </Col>
        <Col className="mg-md-t-0 text-center" sm={12} md={12} lg={4} xl={4}>
          <Card>
            <Card.Body>
            <RouterLink to={`${import.meta.env.BASE_URL}advancedui/blog/`}>Parts Reports</RouterLink>
            </Card.Body>
            {/* <Card.Footer className="bd-t tx-center">
              
            </Card.Footer> */}
          </Card>
        </Col>
        <Col className="mg-md-t-0 text-center" sm={12} md={12} lg={4} xl={4}>
          <Card>
            <Card.Body>
            <RouterLink to={`${import.meta.env.BASE_URL}advancedui/blog/`}>Vendor Reports</RouterLink>
            </Card.Body>
            {/* <Card.Footer className="bd-t tx-center">
              
            </Card.Footer> */}
          </Card>
        </Col>
        <Col className="mg-md-t-0 text-center" sm={12} md={12} lg={4} xl={4}>
          <Card>
            <Card.Body>
            <RouterLink to={`${import.meta.env.BASE_URL}advancedui/blog/`}>Workshop Reports</RouterLink>
            </Card.Body>
            {/* <Card.Footer className="bd-t tx-center">
              
            </Card.Footer> */}
          </Card>
        </Col>
        <Col className="mg-md-t-0 text-center" sm={12} md={12} lg={4} xl={4}>
          <Card>
            <Card.Body>
            <RouterLink to={`${import.meta.env.BASE_URL}advancedui/blog/`}>Mechanics Report</RouterLink>
            </Card.Body>
            {/* <Card.Footer className="bd-t tx-center">
              
            </Card.Footer> */}
          </Card>
        </Col>
        <Col className="mg-md-t-0 text-center" sm={12} md={12} lg={4} xl={4}>
          <Card>
            <Card.Body>
            <RouterLink to={`${import.meta.env.BASE_URL}advancedui/blog/`}>Customer Report</RouterLink>
            </Card.Body>
            {/* <Card.Footer className="bd-t tx-center">
              
            </Card.Footer> */}
          </Card>
        </Col>
        <Col className="mg-md-t-0 text-center" sm={12} md={12} lg={4} xl={4}>
          <Card>
            <Card.Body>
            <RouterLink to={`${import.meta.env.BASE_URL}advancedui/blog/`}>Logo Reports</RouterLink>
            </Card.Body>
            {/* <Card.Footer className="bd-t tx-center">
              
            </Card.Footer> */}
          </Card>
        </Col>
      </Row>

    </Fragment>

  );
}
Alerts.propTypes = {};

Alerts.defaultProps = {};

export default SalesReports;
