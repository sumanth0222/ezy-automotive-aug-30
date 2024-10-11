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


 // State to track each toggle button's state
 const [toggleStates, setToggleStates] = useState({
  gstFree: false,
  dontUpdateQty: false,
  serialNumber: false,
  priceLookup: false,
  priceLookup1: false,
  priceLookup2: false,
});

// Toggle button handler for individual switches
const handleToggle = (key) => {
  setToggleStates((prevState) => ({
    ...prevState,
    [key]: !prevState[key],
  }));
};




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
                      <div className="mt-5" id="" role="">

                        <Accordion className='overflow-hidden'>
                          <Accordion.Item  >
                            {/* <Accordion.Header >
      
    </Accordion.Header> */}

                            <Accordion.Body id="" className="">
                              <div className="col-lg-12 col-md-12">
                                <div className="card">
                                  <div className="card-header row-sm row align-items-center justify-content-between" style={{ backgroundColor: '#38cab3', color: 'white', padding: '10px' }}>
                                    <div className=''>
                                      <h3 className="mt-2">Sales Report</h3>
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
                                      <h3 className="mt-2">Sales Breakup</h3>
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
                                        <Form.Label htmlFor="sum1" >Summary</Form.Label>
                                        <div className={`main-toggle ms-sm-2 main-toggle-dark ${toggleStates.sum1 ? 'on' : 'off'}`} onClick={() => handleToggle('sum1')}>
                                          <span className={toggleStates.sum1 ? 'active' : ''}>
                                            {toggleStates.sum1 ? '' : ''}
                                          </span>
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
                                      <h3 className="mt-2">Item Sales</h3>
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
                                        <Form.Label htmlFor='sum2'>Summary</Form.Label>
                                        <div className={`main-toggle ms-sm-2 main-toggle-dark ${toggleStates.sum2 ? 'on' : 'off'}`} onClick={() => handleToggle('sum2')}>
                                          <span className={toggleStates.sum2 ? 'active' : ''}>
                                            {toggleStates.sum2 ? '' : ''}
                                          </span>
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
                                      <h3 className="mt-2">Sales By Payment Method</h3>
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
                      <div className="mt-5" id="" role="">

                        <Accordion className='overflow-hidden'>
                          <Accordion.Item >


                            <Accordion.Body id="" className="">
                              <div className="col-lg-12 col-md-12">
                                <div className="card">
                                  <div className="card-header row-sm row justify-content-between" style={{ backgroundColor: '#38cab3', color: 'white', padding: '10px' }}>
                                    <div>
                                      <h3 className="mt-2">Parts Value</h3>
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
                                        <Form.Label htmlFor='print0'>Print Zero Parts</Form.Label>
                                        <div className={`main-toggle ms-sm-2 main-toggle-dark ${toggleStates.print0 ? 'on' : 'off'}`} onClick={() => handleToggle('print0')}>
                                          <span className={toggleStates.print0 ? 'active' : ''}>
                                            {toggleStates.print0 ? '' : ''}
                                          </span>
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
                                      <h3 className="mt-2">Parts Listing</h3>
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
                                        <Form.Label htmlFor='print1'>Print Zero Parts</Form.Label>
                                        <div className={`main-toggle ms-sm-2 main-toggle-dark ${toggleStates.print1 ? 'on' : 'off'}`} onClick={() => handleToggle('print1')}>
                                          <span className={toggleStates.print1 ? 'active' : ''}>
                                            {toggleStates.print1 ? '' : ''}
                                          </span>
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
                                      <h3 className="mt-2">Stocktake Variance</h3>
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
                                      <h3 className="mt-2">Stock Status Report</h3>
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
                      <div className="mt-5" id="" role="">

                        <Accordion className="overflow-hidden">
                          <Accordion.Item  >


                            <Accordion.Body id="" className="">
                              <div className="col-lg-12 col-md-12">
                                <div className="card">
                                  <div className="card-header row-sm row justify-content-between" style={{ backgroundColor: '#38cab3', color: 'white', padding: '10px' }}>
                                    <div>
                                      <h3 className="mt-2">Parts Order Report</h3>
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
                                        <Form.Label htmlFor='outstanding'>Outstanding Only</Form.Label>
                                        <div className={`main-toggle ms-sm-2 main-toggle-dark ${toggleStates.outstanding ? 'on' : 'off'}`} onClick={() => handleToggle('outstanding')}>
                                          <span className={toggleStates.outstanding ? 'active' : ''}>
                                            {toggleStates.outstanding ? '' : ''}
                                          </span>
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
                                      <h3 className="mt-2">Purchases Report</h3>
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
                                      <h3 className="mt-2">Item Purchases</h3>
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
                                        <Form.Label htmlFor='sum3'>Summary</Form.Label>
                                        <div className={`main-toggle ms-sm-2 main-toggle-dark ${toggleStates.sum3 ? 'on' : 'off'}`} onClick={() => handleToggle('sum3')}>
                                          <span className={toggleStates.sum3 ? 'active' : ''}>
                                            {toggleStates.sum3 ? '' : ''}
                                          </span>
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
                                      <h3 className="mt-2">Vendor Listing</h3>
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
                                      <h3 className="mt-2">Vendor Balances</h3>
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
                                      <h3 className="mt-2">Supplier Biller Balances</h3>
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
                      <div className="mt-5" id="" role="">

                        <Accordion className="overflow-hidden">
                          <Accordion.Item >


                            <Accordion.Body id="" className="">
                              <div className="col-lg-12 col-md-12">
                                <div className="card">
                                  <div className="card-header row-sm row justify-content-between" style={{ backgroundColor: '#38cab3', color: 'white', padding: '10px' }}>
                                    <div>
                                      <h3 className="mt-2">Work In Progress</h3>
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
                                        <Form.Label htmlFor='sum4'>Summary</Form.Label>
                                        <div className={`main-toggle ms-sm-2 main-toggle-dark ${toggleStates.sum4 ? 'on' : 'off'}`} onClick={() => handleToggle('sum4')}>
                                          <span className={toggleStates.sum4 ? 'active' : ''}>
                                            {toggleStates.sum4 ? '' : ''}
                                          </span>
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
                                      <h3 className="mt-2">Service Due</h3>
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
                                      <h3 className="mt-2">Rego Renewal Due</h3>
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
                                      <h3 className="mt-2">Vechile Listing</h3>
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
                                      <h3 className="mt-2">Quote Report</h3>
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
                                      <h3 className="mt-2">Follow Up Report</h3>
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
                                      <h3 className="mt-2">Booking Report</h3>
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
                      <div className="mt-5" id="" role="">

                        <Accordion className="overflow-hidden ">
                          <Accordion.Item  >


                            <Accordion.Body id="" className="">
                              <div className="col-lg-12 col-md-12">
                                <div className="card">
                                  <div className="card-header row-sm row justify-content-between" style={{ backgroundColor: '#38cab3', color: 'white', padding: '10px' }}>
                                    <div>
                                      <h3 className="mt-2">Mechanics Performance</h3>
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
                                        <Form.Label htmlFor='reporttype'>Report Type</Form.Label>
                                        <div className={`main-toggle ms-sm-2 main-toggle-dark ${toggleStates.reporttype ? 'on' : 'off'}`} onClick={() => handleToggle('reporttype')}>
                                          <span className={toggleStates.reporttype ? 'active' : ''}>
                                            {toggleStates.reporttype ? '' : ''}
                                          </span>
                                        </div>
                                      </div>


                                      {/* Summary  Fields */}
                                      <div class="col-lg-3">
                                        <Form.Label htmlFor='sum5'>Summary</Form.Label>
                                        <div className={`main-toggle ms-sm-2 main-toggle-dark ${toggleStates.sum5 ? 'on' : 'off'}`} onClick={() => handleToggle('sum5')}>
                                          <span className={toggleStates.sum5 ? 'active' : ''}>
                                            {toggleStates.sum5 ? '' : ''}
                                          </span>
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
                                        <Form.Label htmlFor='open1'>Show Open Transactions</Form.Label>
                                        <div className={`main-toggle ms-sm-2 main-toggle-dark ${toggleStates.open1 ? 'on' : 'off'}`} onClick={() => handleToggle('open1')}>
                                          <span className={toggleStates.open1 ? 'active' : ''}>
                                            {toggleStates.open1 ? '' : ''}
                                          </span>
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
                                      <h3 className="mt-2">No Labor Times</h3>
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
                                        <Form.Label htmlFor='sum6'>Summary</Form.Label>
                                        <div className={`main-toggle ms-sm-2 main-toggle-dark ${toggleStates.sum6 ? 'on' : 'off'}`} onClick={() => handleToggle('sum6')}>
                                          <span className={toggleStates.sum6 ? 'active' : ''}>
                                            {toggleStates.sum6 ? '' : ''}
                                          </span>
                                        </div>
                                      </div>


                                      {/* Report  Fields */}
                                      <div class="col-lg-3">
                                        <Form.Label htmlFor='open2'>Show Open Transactions</Form.Label>
                                        <div className={`main-toggle ms-sm-2 main-toggle-dark ${toggleStates.open2 ? 'on' : 'off'}`} onClick={() => handleToggle('open2')}>
                                          <span className={toggleStates.open2 ? 'active' : ''}>
                                            {toggleStates.open2 ? '' : ''}
                                          </span>
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
                                      <h3 className="mt-2">Mechanics Clocked On</h3>
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
                                      <h3 className="mt-2">Mechanics Time Sheet</h3>
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
                                      <h3 className="mt-2">Mechanic Barcode List</h3>
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
                      <div className="mt-5" id="" role="">

                        <Accordion className="overflow-hidden">
                          <Accordion.Item >


                            <Accordion.Body id="" className="">
                              <div className="col-lg-12 col-md-12">
                                <div className="card">
                                  <div className="card-header row-sm row justify-content-between" style={{ backgroundColor: '#38cab3', color: 'white', padding: '10px' }}>
                                    <div>
                                      <h3 className="mt-2">Customer Balanaces</h3>
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
                                        <Form.Label htmlFor='sum7'>Summary</Form.Label>
                                        <div className={`main-toggle ms-sm-2 main-toggle-dark ${toggleStates.sum7 ? 'on' : 'off'}`} onClick={() => handleToggle('sum7')}>
                                          <span className={toggleStates.sum7 ? 'active' : ''}>
                                            {toggleStates.sum7 ? '' : ''}
                                          </span>
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
                                      <h3 className="mt-2">Outstanding Customer Balances</h3>
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
                                      <h3 className="mt-2">Customer Listing</h3>
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
                                      <h3 className="mt-2">Customer Sales</h3>
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
                                      <h3 className="mt-2">Customer Open Deposits</h3>
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
                                      <h3 className="mt-2">Customer Sources</h3>
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
                                      <h3 className="mt-2">Biller Balances</h3>
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
                      <div className="mt-5" id="" role="">

                        <Accordion className="overflow-hidden card">
                          <Accordion.Item >


                            <Accordion.Body id="" className="">
                              <div className="col-lg-12 col-md-12">
                                <div className="card">
                                  <div className="card-header row-sm row justify-content-between" style={{ backgroundColor: '#38cab3', color: 'white', padding: '10px' }}>
                                    <div>
                                      <h3 className="mt-2">Email Report</h3>
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
                                      <h3 className="mt-2">Voided Invoice/Payment/Order Report</h3>
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
                                      <h3 className="mt-2">Invoice/Payment Status</h3>
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
                                      <h3 className="mt-2">Transaction Logo</h3>
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
                                      <h3 className="mt-2">Event Report</h3>
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
                                      <h3 className="mt-2">Text Message Report</h3>
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
