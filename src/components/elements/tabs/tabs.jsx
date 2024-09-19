import React, { Fragment, useState } from "react";
import { Card, Col, Form, Row, Tab, Tabs, Dropdown, DropdownButton, Collapse, ButtonGroup } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Pageheader from '../../../layout/layoutcomponent/pageheader';
import { MultiSelect } from "react-multi-select-component";
import { InspectionBookings } from "../../../common/selectdata";
import { Link } from "react-router-dom";
import { dropdownwithiconsdata } from "../../../common/commondata";
import { useNavigate } from "react-router-dom";

// Sample data
const bookingsData = [
  { date: "21/08/2024", customer: "Sumanth", vehicle: "Audi" },
  { date: "21/08/2024", customer: "Anji", vehicle: "Toyota Hilux GTA010" },
];

const inspectionsData = [
  { date: "22/08/2024", inspector: "Sumanth", report: "BMW" },
  { date: "23/08/2024", inspector: "Desaji", report: "Audi" },
];

const jobsData = [
  { date: "24/08/2024", customer: "Valley Rentals", make: "Toyota", model: "Hilux", rego: "GTA010", jobcard: "50002", status: "Inspection in Progress", statuscomment: "Service & Bundled Product", total: "$1010.24" },
  { date: "25/08/2024", customer: "Pavan", make: "TATA", model: "Suv", rego: "GTA010", jobcard: "54852", status: "Inspection in Progress", statuscomment: "Service", total: "$810.24" },
];

const ordersData = [
  { order: "", date: "20/08/2024", supplier: "Napa", status: "Received", attached: "", subtotal: "$538.02", total: "$591.82" },
  { order: "", date: "22/08/2024", supplier: "CoolDrive", status: "On Order", attached: "", subtotal: "$80.44", total: "$88.48" },
  { order: "", date: "25/08/2024", supplier: "Autobarn", status: "Suggested", attached: "", subtotal: "$1161.60", total: "$1277.76" },
];

const invoicesData = [
  { postdatedate: "28/08/2024", reference: "32546", supplier: "Napa", invoicetype: "invoice", term: "30DaysAEOM", tax: "", gst: "$53.80", total: "$591.82" },
];

const Tabss = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [filter, setFilter] = useState(""); // Search filter state
  const [selected, setSelected] = useState([]); // MultiSelect state
  const [selectedImage, setSelectedImage] = useState(null);

  // Filtering based on search term
  const filterData = (data, field) =>
    data.filter((item) =>
      item[field]?.toLowerCase().includes(filter.toLowerCase())
    );



  // Handle image upload
  const handleImageUpload = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  const [Default, setDefault] = useState(false);

  const handleEditClick = (id) => {
    console.log("Edit clicked for ID:", id);
    // Your logic for edit action
  };

  const handleDeleteClick = (id) => {
    console.log("Delete clicked for ID:", id);
    // Your logic for delete action
  };

  const navigate = useNavigate();
  const handlePlusClick = () => {
    navigate(`${import.meta.env.BASE_URL}pages/todotask`); // Navigate to the form page
  };
  const handlePlus2Click = () => {
    navigate(`${import.meta.env.BASE_URL}advancedui/timeline`)
  }
  return (
    <Fragment>
      <Pageheader title="Transaction Centre" heading="Pages" active="Transaction Centre" />
      <Row className="row-sm">
        <Col xl={12}>
          <Card className="mg-b-20" id="tabs-style3">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center">
                <div className="main-content-label mg-b-5">Transaction Centre</div>
                <div className="ms-4 d-lg-block form-group">
                  <input
                    autoComplete="off"
                    placeholder="Search..."
                    type="search"
                    className="form-control"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                  />
                </div>
              </div>

              <div className="panel panel-primary tabs-style-3">
                <div className="tab-menu-heading">
                  <div className="tabs-menu">
                    <Tabs defaultActiveKey="Bookings" className="nav panel-tabs border-bottom-0">
                      {/* Bookings Tab */}
                      <Tab eventKey="Bookings" title={<><span>Bookings</span> <span className="badge bg-danger ms-2">6</span></>}>
                        <div className="tab-pane active">
                          <div className="row-sm row">
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
                            <div className="mg-t-20 mg-lg-t-0 col-lg-4">
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
                            <div id="button6">
                              <div className="text-wrap">
                                <div className="btn-list">
                                  <button type="button" className="btn btn-primary">
                                    Month
                                  </button>
                                  <button type="button" className="btn btn-danger">
                                    Week
                                  </button>
                                  <button type="button" className="btn btn-teal">
                                    Today
                                  </button>
                                </div>
                              </div>
                            </div>

                            <a
                              className="btn ripple btn-warning text-white btn-icon"
                              data-placement="top"
                              data-bs-toggle="tooltip"
                              title="Create New"
                              href="#"
                              onClick={handlePlusClick}
                            >
                              <i className="fe fe-plus"></i>
                              
                            </a>
                          </div>

                          {/* Image Upload Section */}
                          {/* <div className="row-sm row mt-4">
                            <div className="col-lg-4">
                              <Form.Label>Upload Image</Form.Label>
                              <input
                                type="file"
                                accept="image/*"
                                className="form-control"
                                onChange={(e) => handleImageUpload(e)}
                              />
                              {selectedImage && (
                                <div className="mt-3">
                                  <img
                                    src={URL.createObjectURL(selectedImage)}
                                    alt="Uploaded Preview"
                                    className="img-thumbnail"
                                    style={{ width: "150px", height: "150px" }}
                                  />
                                </div>
                              )}
                            </div>
                          </div> */}

                          {/* Bookings Table */}
                          <div className="table-responsive mt-4">
                            <table className="table table-bordered text-nowrap border-bottom">
                              <thead>
                                <tr>
                                  <th>S. No</th>
                                  <th>Invoice No</th>
                                  <th>Booking Date</th>
                                  <th>Source</th>
                                  <th>Service Reg Date</th>
                                  <th>SRC CMP DT</th>
                                  <th>Foremen Name</th>
                                  <th>Client Name</th>
                                  <th>Contact No</th>
                                  <th>Veh/Reg No</th>
                                  <th>Make</th>
                                  <th>Model</th>
                                  <th>Service Cost</th>
                                  <th>Payment Link</th>
                                  <th>Payment Mode</th>
                                  <th>Duration</th>
                                  <th>TAT Status</th>
                                  <th>Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>1</td>
                                  <td> <Link to={`${import.meta.env.BASE_URL}pages/invoice`}>INV001</Link> </td>
                                  <td>2023-08-15</td>
                                  <td>Mobile App</td>
                                  <td>2023-08-16</td>
                                  <td>2023-08-18</td>
                                  <td>John Doe</td>
                                  <td>Tiger Nixon</td>
                                  <td>9876543210</td>
                                  <td>XYZ1234</td>
                                  <td>Toyota</td>
                                  <td>Corolla</td>
                                  <td><Link to={`${import.meta.env.BASE_URL}pages/invoice`} className="text-primary">$345.00</Link></td>
                                  <td>
                                  <Link to={`${import.meta.env.BASE_URL}pages/pricing`}>
                                    <button
                                      className="btn btn-sm btn-primary fa fa-credit-card"
                                      onClick={() => handleEditClick('INV001')}
                                      style={{ marginLeft: "5px" }}
                                    ></button>
                                    </Link>
                                  </td>
                                  <td className="bg-green">Online Payment</td>
                                  <td>2 Days</td>
                                  <td>Delivered</td>
                                  <td>
                                    {dropdownwithiconsdata.map((idx) => (
                                      <ButtonGroup className="" key={Math.random()}>
                                        <Dropdown drop="up">
                                          <Dropdown.Toggle variant={idx.color} className="dropups">
                                            <i className={`fe fe-${idx.class}`}></i>
                                          </Dropdown.Toggle>

                                          <Dropdown.Menu>
                                            <Dropdown.Item onClick={() => handleEditClick('INV002')}>
                                              <i className="fa fa-edit text-primary"></i> Edit
                                            </Dropdown.Item>
                                            <Dropdown.Item onClick={() => handleDeleteClick('INV002')}>
                                              <i className="fa fa-trash-alt text-danger"></i> Delete
                                            </Dropdown.Item>
                                            {/* Upload images option */}
                                            <Dropdown.Item onClick={() => handleUploadClick('INV002')}>
                                              <i className="fa fa-upload text-success"></i> Upload Images
                                            </Dropdown.Item>
                                          </Dropdown.Menu>
                                        </Dropdown>
                                      </ButtonGroup>
                                    ))}

                                    {/* <button
                                      className="btn btn-sm btn-primary fa fa-edit"
                                      onClick={() => handleEditClick('INV001')}
                                      style={{ marginLeft: "5px" }}
                                    ></button>
                                    <button
                                      className="btn btn-sm btn-danger fa fa-trash-alt"
                                      onClick={() => handleDeleteClick('INV001')}
                                      style={{ marginLeft: "5px" }}
                                    ></button> */}
                                  </td>
                                </tr>
                                <tr>
                                  <td>2</td>
                                  <td> <Link to={`${import.meta.env.BASE_URL}pages/invoice`}>INV002</Link> </td>
                                  <td>2023-08-12</td>
                                  <td>Web Application</td>
                                  <td>2023-08-13</td>
                                  <td>2023-08-15</td>
                                  <td>Jane Smith</td>
                                  <td>Briele Williamson</td>
                                  <td>9876543211</td>
                                  <td>XYZ5678</td>
                                  <td>Honda</td>
                                  <td>Civic</td>
                                  <td><Link to={`${import.meta.env.BASE_URL}pages/invoice`} className="text-primary">$372,000</Link></td>
                                  <td>
                                  <Link to={`${import.meta.env.BASE_URL}pages/pricing`}>
                                    <button
                                      className="btn btn-sm btn-primary fa fa-credit-card"
                                      onClick={() => handleEditClick('INV001')}
                                      style={{ marginLeft: "5px" }}
                                    ></button>
                                    </Link>
                                  </td>
                                  <td className="bg-orange">Cash on Delivery</td>
                                  <td>3 Days</td>
                                  <td>Delivering</td>
                                  <td>
                                    {dropdownwithiconsdata.map((idx) => (
                                      <ButtonGroup className="" key={Math.random()}>
                                        <Dropdown drop="up">
                                          <Dropdown.Toggle variant={idx.color} className="dropups">
                                            <i className={`fe fe-${idx.class}`}></i>
                                          </Dropdown.Toggle>

                                          <Dropdown.Menu>
                                            <Dropdown.Item onClick={() => handleEditClick('INV002')}>
                                              <i className="fa fa-edit text-primary"></i> Edit
                                            </Dropdown.Item>
                                            <Dropdown.Item onClick={() => handleDeleteClick('INV002')}>
                                              <i className="fa fa-trash-alt text-danger"></i> Delete
                                            </Dropdown.Item>
                                            {/* Upload images option */}
                                            <Dropdown.Item onClick={() => handleUploadClick('INV002')}>
                                              <i className="fa fa-upload text-success"></i> Upload Images
                                            </Dropdown.Item>
                                          </Dropdown.Menu>
                                        </Dropdown>
                                      </ButtonGroup>
                                    ))}


                                  </td>
                                </tr>
                                <tr>
                                  <td>3</td>
                                  <td> <Link to={`${import.meta.env.BASE_URL}pages/invoice`}></Link> INV003</td>
                                  <td>2023-08-10</td>
                                  <td>QR SCAN</td>
                                  <td>2023-08-11</td>
                                  <td>2023-08-13</td>
                                  <td>Michael Johnson</td>
                                  <td>Harrod Chandler</td>
                                  <td>9876543212</td>
                                  <td>XYZ9101</td>
                                  <td>Ford</td>
                                  <td>Focus</td>
                                  <td><Link  to={`${import.meta.env.BASE_URL}pages/invoice`}className="text-primary">$137,000</Link></td>
                                  <td>
                                  <Link to={`${import.meta.env.BASE_URL}pages/pricing`}>
                                    <button
                                      className="btn btn-sm btn-primary fa fa-credit-card"
                                      onClick={() => handleEditClick('INV001')}
                                      style={{ marginLeft: "5px" }}
                                    ></button>
                                    </Link>
                                  </td>
                                  <td className="bg-orange">Cash on Delivery</td>
                                  <td>4 Days</td>
                                  <td>Awaiting</td>
                                  <td>
                                    {dropdownwithiconsdata.map((idx) => (
                                      <ButtonGroup className="" key={Math.random()}>
                                        <Dropdown drop="up">
                                          <Dropdown.Toggle variant={idx.color} className="dropups">
                                            <i className={`fe fe-${idx.class}`}></i>
                                          </Dropdown.Toggle>

                                          <Dropdown.Menu>
                                            <Dropdown.Item onClick={() => handleEditClick('INV002')}>
                                              <i className="fa fa-edit text-primary"></i> Edit
                                            </Dropdown.Item>
                                            <Dropdown.Item onClick={() => handleDeleteClick('INV002')}>
                                              <i className="fa fa-trash-alt text-danger"></i> Delete
                                            </Dropdown.Item>
                                            {/* Upload images option */}
                                            <Dropdown.Item onClick={() => handleUploadClick('INV002')}>
                                              <i className="fa fa-upload text-success"></i> Upload Images
                                            </Dropdown.Item>
                                          </Dropdown.Menu>
                                        </Dropdown>
                                      </ButtonGroup>
                                    ))}

                                  </td>
                                </tr>
                                <tr>
                                  <td>4</td>
                                  <td> <Link to={`${import.meta.env.BASE_URL}pages/invoice`}>INV004</Link> </td>
                                  <td>2023-08-05</td>
                                  <td>Mobile App</td>
                                  <td>2023-08-06</td>
                                  <td>2023-08-08</td>
                                  <td>Chris Evans</td>
                                  <td>Colleen Hurst</td>
                                  <td>9876543213</td>
                                  <td>XYZ1212</td>
                                  <td>Nissan</td>
                                  <td>Altima</td>
                                  <td><Link to={`${import.meta.env.BASE_URL}pages/invoice`} className="text-primary">$109,000</Link></td>
                                  <td>
                                  <Link to={`${import.meta.env.BASE_URL}pages/pricing`}>
                                    <button
                                      className="btn btn-sm btn-primary fa fa-credit-card"
                                      onClick={() => handleEditClick('INV001')}
                                      style={{ marginLeft: "5px" }}
                                    ></button>
                                    </Link>
                                  </td>
                                  <td className="bg-orange">Cash on Delivery</td>
                                  <td>3 Days</td>
                                  <td>Delivered</td>
                                  <td>
                                    {dropdownwithiconsdata.map((idx) => (
                                      <ButtonGroup className="" key={Math.random()}>
                                        <Dropdown drop="up">
                                          <Dropdown.Toggle variant={idx.color} className="dropups">
                                            <i className={`fe fe-${idx.class}`}></i>
                                          </Dropdown.Toggle>

                                          <Dropdown.Menu>
                                            <Dropdown.Item onClick={() => handleEditClick('INV002')}>
                                              <i className="fa fa-edit text-primary"></i> Edit
                                            </Dropdown.Item>
                                            <Dropdown.Item onClick={() => handleDeleteClick('INV002')}>
                                              <i className="fa fa-trash-alt text-danger"></i> Delete
                                            </Dropdown.Item>
                                            {/* Upload images option */}
                                            <Dropdown.Item onClick={() => handleUploadClick('INV002')}>
                                              <i className="fa fa-upload text-success"></i> Upload Images
                                            </Dropdown.Item>
                                          </Dropdown.Menu>
                                        </Dropdown>
                                      </ButtonGroup>
                                    ))}

                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>



                        </div>
                      </Tab>

                      {/* Inspections Tab */}
                      <Tab eventKey="Inspections" title={<><span>Inspections</span> <span className="badge bg-danger ms-2">2</span></>}>
                        <div className="tab-pane active">
                          <div className="row-sm row">
                            <div className="mt-4 col-lg-10">
                              <p className="mg-b-9">Status</p>
                              <MultiSelect
                                value={selected}
                                onChange={setSelected}
                                labelledBy="Select"
                                options={InspectionBookings}
                              />
                            </div>
                            <div className="col-lg-2">
                              <a className="btn ripple btn-warning text-white btn-icon mt-5" data-placement="top" data-bs-toggle="tooltip" title="Create New" href="#"  onClick={handlePlus2Click}>
                                <i className="fe fe-plus"></i>
                              </a>
                            </div>
                          </div>

                          <div className="table-responsive mt-4">
                            <table className="table table-bordered text-nowrap border-bottom">
                              <thead>
                                <tr>
                                  <th>S. No</th>
                                  <th>Invoice No</th>
                                  <th>Booking Date</th>
                                  <th>Source</th>
                                  <th>Service Reg Date</th>
                                  <th>SRC CMP DT</th>
                                  <th>Foremen Name</th>
                                  <th>Client Name</th>
                                  <th>Contact No</th>
                                  <th>Veh/Reg No</th>
                                  <th>Make</th>
                                  <th>Model</th>
                                  <th>Service Cost</th>
                                  <th>Payment Link</th>
                                  <th>Payment Mode</th>
                                  <th>Duration</th>
                                  <th>TAT Status</th>
                                  <th>Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>1</td>
                                  <td>INV001</td>
                                  <td>2023-08-15</td>
                                  <td>Mobile App</td>
                                  <td>2023-08-16</td>
                                  <td>2023-08-18</td>
                                  <td>John Doe</td>
                                  <td>Tiger Nixon</td>
                                  <td>9876543210</td>
                                  <td>XYZ1234</td>
                                  <td>Toyota</td>
                                  <td>Corolla</td>
                                  <td><Link className="text-primary">$345.00</Link></td>
                                  <td>
                                  <Link to={`${import.meta.env.BASE_URL}pages/pricing`}>
                                    <button
                                      className="btn btn-sm btn-primary fa fa-credit-card"
                                      onClick={() => handleEditClick('INV001')}
                                      style={{ marginLeft: "5px" }}
                                    ></button>
                                    </Link>
                                  </td>
                                  <td className="bg-green">Online Payment</td>
                                  <td>2 Days</td>
                                  <td>Delivered</td>
                                  <td>
                                    {dropdownwithiconsdata.map((idx) => (
                                      <ButtonGroup className="" key={Math.random()}>
                                        <Dropdown drop="up">
                                          <Dropdown.Toggle variant={idx.color} className="dropups">
                                            <i className={`fe fe-${idx.class}`}></i>
                                          </Dropdown.Toggle>

                                          <Dropdown.Menu>
                                            <Dropdown.Item onClick={() => handleEditClick('INV002')}>
                                              <i className="fa fa-edit text-primary"></i> Edit
                                            </Dropdown.Item>
                                            <Dropdown.Item onClick={() => handleDeleteClick('INV002')}>
                                              <i className="fa fa-trash-alt text-danger"></i> Delete
                                            </Dropdown.Item>
                                            {/* Upload images option */}
                                            <Dropdown.Item onClick={() => handleUploadClick('INV002')}>
                                              <i className="fa fa-upload text-success"></i> Upload Images
                                            </Dropdown.Item>
                                          </Dropdown.Menu>
                                        </Dropdown>
                                      </ButtonGroup>
                                    ))}

                                    {/* <button
                                      className="btn btn-sm btn-primary fa fa-edit"
                                      onClick={() => handleEditClick('INV001')}
                                      style={{ marginLeft: "5px" }}
                                    ></button>
                                    <button
                                      className="btn btn-sm btn-danger fa fa-trash-alt"
                                      onClick={() => handleDeleteClick('INV001')}
                                      style={{ marginLeft: "5px" }}
                                    ></button> */}
                                  </td>
                                </tr>
                                <tr>
                                  <td>2</td>
                                  <td>INV002</td>
                                  <td>2023-08-12</td>
                                  <td>Web Application</td>
                                  <td>2023-08-13</td>
                                  <td>2023-08-15</td>
                                  <td>Jane Smith</td>
                                  <td>Briele Williamson</td>
                                  <td>9876543211</td>
                                  <td>XYZ5678</td>
                                  <td>Honda</td>
                                  <td>Civic</td>
                                  <td><Link className="text-primary">$372,000</Link></td>
                                  <td>
                                  <Link to={`${import.meta.env.BASE_URL}pages/pricing`}>
                                    <button
                                      className="btn btn-sm btn-primary fa fa-credit-card"
                                      onClick={() => handleEditClick('INV001')}
                                      style={{ marginLeft: "5px" }}
                                    ></button>
                                    </Link>
                                  </td>
                                  <td className="bg-orange">Cash on Delivery</td>
                                  <td>3 Days</td>
                                  <td>Delivering</td>
                                  <td>
                                    {dropdownwithiconsdata.map((idx) => (
                                      <ButtonGroup className="" key={Math.random()}>
                                        <Dropdown drop="up">
                                          <Dropdown.Toggle variant={idx.color} className="dropups">
                                            <i className={`fe fe-${idx.class}`}></i>
                                          </Dropdown.Toggle>

                                          <Dropdown.Menu>
                                            <Dropdown.Item onClick={() => handleEditClick('INV002')}>
                                              <i className="fa fa-edit text-primary"></i> Edit
                                            </Dropdown.Item>
                                            <Dropdown.Item onClick={() => handleDeleteClick('INV002')}>
                                              <i className="fa fa-trash-alt text-danger"></i> Delete
                                            </Dropdown.Item>
                                            {/* Upload images option */}
                                            <Dropdown.Item onClick={() => handleUploadClick('INV002')}>
                                              <i className="fa fa-upload text-success"></i> Upload Images
                                            </Dropdown.Item>
                                          </Dropdown.Menu>
                                        </Dropdown>
                                      </ButtonGroup>
                                    ))}


                                  </td>
                                </tr>
                                <tr>
                                  <td>3</td>
                                  <td>INV003</td>
                                  <td>2023-08-10</td>
                                  <td>QR SCAN</td>
                                  <td>2023-08-11</td>
                                  <td>2023-08-13</td>
                                  <td>Michael Johnson</td>
                                  <td>Harrod Chandler</td>
                                  <td>9876543212</td>
                                  <td>XYZ9101</td>
                                  <td>Ford</td>
                                  <td>Focus</td>
                                  <td><Link className="text-primary">$137,000</Link></td>
                                  <td>
                                    <button
                                      className="btn btn-sm btn-primary fa fa-credit-card"
                                      onClick={() => handleEditClick('INV001')}
                                      style={{ marginLeft: "5px" }}
                                    ></button>
                                  </td>
                                  <td className="bg-orange">Cash on Delivery</td>
                                  <td>4 Days</td>
                                  <td>Awaiting</td>
                                  <td>
                                    {dropdownwithiconsdata.map((idx) => (
                                      <ButtonGroup className="" key={Math.random()}>
                                        <Dropdown drop="up">
                                          <Dropdown.Toggle variant={idx.color} className="dropups">
                                            <i className={`fe fe-${idx.class}`}></i>
                                          </Dropdown.Toggle>

                                          <Dropdown.Menu>
                                            <Dropdown.Item onClick={() => handleEditClick('INV002')}>
                                              <i className="fa fa-edit text-primary"></i> Edit
                                            </Dropdown.Item>
                                            <Dropdown.Item onClick={() => handleDeleteClick('INV002')}>
                                              <i className="fa fa-trash-alt text-danger"></i> Delete
                                            </Dropdown.Item>
                                            {/* Upload images option */}
                                            <Dropdown.Item onClick={() => handleUploadClick('INV002')}>
                                              <i className="fa fa-upload text-success"></i> Upload Images
                                            </Dropdown.Item>
                                          </Dropdown.Menu>
                                        </Dropdown>
                                      </ButtonGroup>
                                    ))}

                                  </td>
                                </tr>
                                <tr>
                                  <td>4</td>
                                  <td>INV004</td>
                                  <td>2023-08-05</td>
                                  <td>Mobile App</td>
                                  <td>2023-08-06</td>
                                  <td>2023-08-08</td>
                                  <td>Chris Evans</td>
                                  <td>Colleen Hurst</td>
                                  <td>9876543213</td>
                                  <td>XYZ1212</td>
                                  <td>Nissan</td>
                                  <td>Altima</td>
                                  <td><Link className="text-primary">$109,000</Link></td>
                                  <td>
                                  <Link to={`${import.meta.env.BASE_URL}pages/pricing`}>
                                    <button
                                      className="btn btn-sm btn-primary fa fa-credit-card"
                                      onClick={() => handleEditClick('INV001')}
                                      style={{ marginLeft: "5px" }}
                                    ></button>
                                    </Link>
                                  </td>
                                  <td className="bg-orange">Cash on Delivery</td>
                                  <td>3 Days</td>
                                  <td>Delivered</td>
                                  <td>
                                    {dropdownwithiconsdata.map((idx) => (
                                      <ButtonGroup className="" key={Math.random()}>
                                        <Dropdown drop="up">
                                          <Dropdown.Toggle variant={idx.color} className="dropups">
                                            <i className={`fe fe-${idx.class}`}></i>
                                          </Dropdown.Toggle>

                                          <Dropdown.Menu>
                                            <Dropdown.Item onClick={() => handleEditClick('INV002')}>
                                              <i className="fa fa-edit text-primary"></i> Edit
                                            </Dropdown.Item>
                                            <Dropdown.Item onClick={() => handleDeleteClick('INV002')}>
                                              <i className="fa fa-trash-alt text-danger"></i> Delete
                                            </Dropdown.Item>
                                            {/* Upload images option */}
                                            <Dropdown.Item onClick={() => handleUploadClick('INV002')}>
                                              <i className="fa fa-upload text-success"></i> Upload Images
                                            </Dropdown.Item>
                                          </Dropdown.Menu>
                                        </Dropdown>
                                      </ButtonGroup>
                                    ))}

                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </Tab>

                      {/* Jobs Tab */}
                      <Tab eventKey="Jobs" title={<><span>Jobs</span> <span className="badge bg-danger ms-2">6</span></>}>
                        <div className="tab-pane active">
                          
                          <div className="row-sm row">
                            <div className="col-lg-12">
                              <div className="text-wrap">
                                <div className="btn-list mt-3">
                                  <button type="button" className="btn btn-primary">
                                    Month
                                  </button>
                                  <button type="button" className="btn btn-danger">
                                    Week
                                  </button>
                                  <button type="button" className="btn btn-teal">
                                    Today
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="table-responsive mt-4">
                            <table className="table table-bordered text-nowrap border-bottom">
                              <thead>
                                <tr>
                                  <th>S. No</th>
                                  <th>Invoice No</th>
                                  <th>Booking Date</th>
                                  <th>Source</th>
                                  <th>Service Reg Date</th>
                                  <th>SRC CMP DT</th>
                                  <th>Foremen Name</th>
                                  <th>Client Name</th>
                                  <th>Contact No</th>
                                  <th>Veh/Reg No</th>
                                  <th>Make</th>
                                  <th>Model</th>
                                  <th>Service Cost</th>
                                  <th>Payment Link</th>
                                  <th>Payment Mode</th>
                                  <th>Duration</th>
                                  <th>TAT Status</th>
                                  <th>Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>1</td>
                                  <td>INV001</td>
                                  <td>2023-08-15</td>
                                  <td>Mobile App</td>
                                  <td>2023-08-16</td>
                                  <td>2023-08-18</td>
                                  <td>John Doe</td>
                                  <td>Tiger Nixon</td>
                                  <td>9876543210</td>
                                  <td>XYZ1234</td>
                                  <td>Toyota</td>
                                  <td>Corolla</td>
                                  <td><Link className="text-primary">$345.00</Link></td>
                                  <td>
                                    <button
                                      className="btn btn-sm btn-primary fa fa-credit-card"
                                      onClick={() => handleEditClick('INV001')}
                                      style={{ marginLeft: "5px" }}
                                    ></button>
                                  </td>
                                  <td className="bg-green">Online Payment</td>
                                  <td>2 Days</td>
                                  <td>Delivered</td>
                                  <td>
                                    {dropdownwithiconsdata.map((idx) => (
                                      <ButtonGroup className="" key={Math.random()}>
                                        <Dropdown drop="up">
                                          <Dropdown.Toggle variant={idx.color} className="dropups">
                                            <i className={`fe fe-${idx.class}`}></i>
                                          </Dropdown.Toggle>

                                          <Dropdown.Menu>
                                            <Dropdown.Item onClick={() => handleEditClick('INV002')}>
                                              <i className="fa fa-edit text-primary"></i> Edit
                                            </Dropdown.Item>
                                            <Dropdown.Item onClick={() => handleDeleteClick('INV002')}>
                                              <i className="fa fa-trash-alt text-danger"></i> Delete
                                            </Dropdown.Item>
                                            {/* Upload images option */}
                                            <Dropdown.Item onClick={() => handleUploadClick('INV002')}>
                                              <i className="fa fa-upload text-success"></i> Upload Images
                                            </Dropdown.Item>
                                          </Dropdown.Menu>
                                        </Dropdown>
                                      </ButtonGroup>
                                    ))}

                                    {/* <button
                                      className="btn btn-sm btn-primary fa fa-edit"
                                      onClick={() => handleEditClick('INV001')}
                                      style={{ marginLeft: "5px" }}
                                    ></button>
                                    <button
                                      className="btn btn-sm btn-danger fa fa-trash-alt"
                                      onClick={() => handleDeleteClick('INV001')}
                                      style={{ marginLeft: "5px" }}
                                    ></button> */}
                                  </td>
                                </tr>
                                <tr>
                                  <td>2</td>
                                  <td>INV002</td>
                                  <td>2023-08-12</td>
                                  <td>Web Application</td>
                                  <td>2023-08-13</td>
                                  <td>2023-08-15</td>
                                  <td>Jane Smith</td>
                                  <td>Briele Williamson</td>
                                  <td>9876543211</td>
                                  <td>XYZ5678</td>
                                  <td>Honda</td>
                                  <td>Civic</td>
                                  <td><Link className="text-primary">$372,000</Link></td>
                                  <td>
                                    <button
                                      className="btn btn-sm btn-primary fa fa-credit-card"
                                      onClick={() => handleEditClick('INV001')}
                                      style={{ marginLeft: "5px" }}
                                    ></button>
                                  </td>
                                  <td className="bg-orange">Cash on Delivery</td>
                                  <td>3 Days</td>
                                  <td>Delivering</td>
                                  <td>
                                    {dropdownwithiconsdata.map((idx) => (
                                      <ButtonGroup className="" key={Math.random()}>
                                        <Dropdown drop="up">
                                          <Dropdown.Toggle variant={idx.color} className="dropups">
                                            <i className={`fe fe-${idx.class}`}></i>
                                          </Dropdown.Toggle>

                                          <Dropdown.Menu>
                                            <Dropdown.Item onClick={() => handleEditClick('INV002')}>
                                              <i className="fa fa-edit text-primary"></i> Edit
                                            </Dropdown.Item>
                                            <Dropdown.Item onClick={() => handleDeleteClick('INV002')}>
                                              <i className="fa fa-trash-alt text-danger"></i> Delete
                                            </Dropdown.Item>
                                            {/* Upload images option */}
                                            <Dropdown.Item onClick={() => handleUploadClick('INV002')}>
                                              <i className="fa fa-upload text-success"></i> Upload Images
                                            </Dropdown.Item>
                                          </Dropdown.Menu>
                                        </Dropdown>
                                      </ButtonGroup>
                                    ))}


                                  </td>
                                </tr>
                                <tr>
                                  <td>3</td>
                                  <td>INV003</td>
                                  <td>2023-08-10</td>
                                  <td>QR SCAN</td>
                                  <td>2023-08-11</td>
                                  <td>2023-08-13</td>
                                  <td>Michael Johnson</td>
                                  <td>Harrod Chandler</td>
                                  <td>9876543212</td>
                                  <td>XYZ9101</td>
                                  <td>Ford</td>
                                  <td>Focus</td>
                                  <td><Link className="text-primary">$137,000</Link></td>
                                  <td>
                                    <button
                                      className="btn btn-sm btn-primary fa fa-credit-card"
                                      onClick={() => handleEditClick('INV001')}
                                      style={{ marginLeft: "5px" }}
                                    ></button>
                                  </td>
                                  <td className="bg-orange">Cash on Delivery</td>
                                  <td>4 Days</td>
                                  <td>Awaiting</td>
                                  <td>
                                    {dropdownwithiconsdata.map((idx) => (
                                      <ButtonGroup className="" key={Math.random()}>
                                        <Dropdown drop="up">
                                          <Dropdown.Toggle variant={idx.color} className="dropups">
                                            <i className={`fe fe-${idx.class}`}></i>
                                          </Dropdown.Toggle>

                                          <Dropdown.Menu>
                                            <Dropdown.Item onClick={() => handleEditClick('INV002')}>
                                              <i className="fa fa-edit text-primary"></i> Edit
                                            </Dropdown.Item>
                                            <Dropdown.Item onClick={() => handleDeleteClick('INV002')}>
                                              <i className="fa fa-trash-alt text-danger"></i> Delete
                                            </Dropdown.Item>
                                            {/* Upload images option */}
                                            <Dropdown.Item onClick={() => handleUploadClick('INV002')}>
                                              <i className="fa fa-upload text-success"></i> Upload Images
                                            </Dropdown.Item>
                                          </Dropdown.Menu>
                                        </Dropdown>
                                      </ButtonGroup>
                                    ))}

                                  </td>
                                </tr>
                                <tr>
                                  <td>4</td>
                                  <td>INV004</td>
                                  <td>2023-08-05</td>
                                  <td>Mobile App</td>
                                  <td>2023-08-06</td>
                                  <td>2023-08-08</td>
                                  <td>Chris Evans</td>
                                  <td>Colleen Hurst</td>
                                  <td>9876543213</td>
                                  <td>XYZ1212</td>
                                  <td>Nissan</td>
                                  <td>Altima</td>
                                  <td><Link className="text-primary">$109,000</Link></td>
                                  <td>
                                    <button
                                      className="btn btn-sm btn-primary fa fa-credit-card"
                                      onClick={() => handleEditClick('INV001')}
                                      style={{ marginLeft: "5px" }}
                                    ></button>
                                  </td>
                                  <td className="bg-orange">Cash on Delivery</td>
                                  <td>3 Days</td>
                                  <td>Delivered</td>
                                  <td>
                                    {dropdownwithiconsdata.map((idx) => (
                                      <ButtonGroup className="" key={Math.random()}>
                                        <Dropdown drop="up">
                                          <Dropdown.Toggle variant={idx.color} className="dropups">
                                            <i className={`fe fe-${idx.class}`}></i>
                                          </Dropdown.Toggle>

                                          <Dropdown.Menu>
                                            <Dropdown.Item onClick={() => handleEditClick('INV002')}>
                                              <i className="fa fa-edit text-primary"></i> Edit
                                            </Dropdown.Item>
                                            <Dropdown.Item onClick={() => handleDeleteClick('INV002')}>
                                              <i className="fa fa-trash-alt text-danger"></i> Delete
                                            </Dropdown.Item>
                                            {/* Upload images option */}
                                            <Dropdown.Item onClick={() => handleUploadClick('INV002')}>
                                              <i className="fa fa-upload text-success"></i> Upload Images
                                            </Dropdown.Item>
                                          </Dropdown.Menu>
                                        </Dropdown>
                                      </ButtonGroup>
                                    ))}

                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </Tab>

                      {/* Orders Tab */}
                      <Tab eventKey="Orders" title={<><span>Orders</span> <span className="badge bg-danger ms-2">1</span></>}>
                        <div className="tab-pane active">
                        <div className="table-responsive mt-4">
                            <table className="table table-bordered text-nowrap border-bottom">
                              <thead>
                                <tr>
                                  <th>S. No</th>
                                  <th>Invoice No</th>
                                  <th>Booking Date</th>
                                  <th>Source</th>
                                  <th>Service Reg Date</th>
                                  <th>SRC CMP DT</th>
                                  <th>Foremen Name</th>
                                  <th>Client Name</th>
                                  <th>Contact No</th>
                                  <th>Veh/Reg No</th>
                                  <th>Make</th>
                                  <th>Model</th>
                                  <th>Service Cost</th>
                                  <th>Payment Link</th>
                                  <th>Payment Mode</th>
                                  <th>Duration</th>
                                  <th>TAT Status</th>
                                  <th>Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>1</td>
                                  <td>INV001</td>
                                  <td>2023-08-15</td>
                                  <td>Mobile App</td>
                                  <td>2023-08-16</td>
                                  <td>2023-08-18</td>
                                  <td>John Doe</td>
                                  <td>Tiger Nixon</td>
                                  <td>9876543210</td>
                                  <td>XYZ1234</td>
                                  <td>Toyota</td>
                                  <td>Corolla</td>
                                  <td><Link className="text-primary">$345.00</Link></td>
                                  <td>
                                    <button
                                      className="btn btn-sm btn-primary fa fa-credit-card"
                                      onClick={() => handleEditClick('INV001')}
                                      style={{ marginLeft: "5px" }}
                                    ></button>
                                  </td>
                                  <td className="bg-green">Online Payment</td>
                                  <td>2 Days</td>
                                  <td>Delivered</td>
                                  <td>
                                    {dropdownwithiconsdata.map((idx) => (
                                      <ButtonGroup className="" key={Math.random()}>
                                        <Dropdown drop="up">
                                          <Dropdown.Toggle variant={idx.color} className="dropups">
                                            <i className={`fe fe-${idx.class}`}></i>
                                          </Dropdown.Toggle>

                                          <Dropdown.Menu>
                                            <Dropdown.Item onClick={() => handleEditClick('INV002')}>
                                              <i className="fa fa-edit text-primary"></i> Edit
                                            </Dropdown.Item>
                                            <Dropdown.Item onClick={() => handleDeleteClick('INV002')}>
                                              <i className="fa fa-trash-alt text-danger"></i> Delete
                                            </Dropdown.Item>
                                            {/* Upload images option */}
                                            <Dropdown.Item onClick={() => handleUploadClick('INV002')}>
                                              <i className="fa fa-upload text-success"></i> Upload Images
                                            </Dropdown.Item>
                                          </Dropdown.Menu>
                                        </Dropdown>
                                      </ButtonGroup>
                                    ))}

                                    {/* <button
                                      className="btn btn-sm btn-primary fa fa-edit"
                                      onClick={() => handleEditClick('INV001')}
                                      style={{ marginLeft: "5px" }}
                                    ></button>
                                    <button
                                      className="btn btn-sm btn-danger fa fa-trash-alt"
                                      onClick={() => handleDeleteClick('INV001')}
                                      style={{ marginLeft: "5px" }}
                                    ></button> */}
                                  </td>
                                </tr>
                                <tr>
                                  <td>2</td>
                                  <td>INV002</td>
                                  <td>2023-08-12</td>
                                  <td>Web Application</td>
                                  <td>2023-08-13</td>
                                  <td>2023-08-15</td>
                                  <td>Jane Smith</td>
                                  <td>Briele Williamson</td>
                                  <td>9876543211</td>
                                  <td>XYZ5678</td>
                                  <td>Honda</td>
                                  <td>Civic</td>
                                  <td><Link className="text-primary">$372,000</Link></td>
                                  <td>
                                    <button
                                      className="btn btn-sm btn-primary fa fa-credit-card"
                                      onClick={() => handleEditClick('INV001')}
                                      style={{ marginLeft: "5px" }}
                                    ></button>
                                  </td>
                                  <td className="bg-orange">Cash on Delivery</td>
                                  <td>3 Days</td>
                                  <td>Delivering</td>
                                  <td>
                                    {dropdownwithiconsdata.map((idx) => (
                                      <ButtonGroup className="" key={Math.random()}>
                                        <Dropdown drop="up">
                                          <Dropdown.Toggle variant={idx.color} className="dropups">
                                            <i className={`fe fe-${idx.class}`}></i>
                                          </Dropdown.Toggle>

                                          <Dropdown.Menu>
                                            <Dropdown.Item onClick={() => handleEditClick('INV002')}>
                                              <i className="fa fa-edit text-primary"></i> Edit
                                            </Dropdown.Item>
                                            <Dropdown.Item onClick={() => handleDeleteClick('INV002')}>
                                              <i className="fa fa-trash-alt text-danger"></i> Delete
                                            </Dropdown.Item>
                                            {/* Upload images option */}
                                            <Dropdown.Item onClick={() => handleUploadClick('INV002')}>
                                              <i className="fa fa-upload text-success"></i> Upload Images
                                            </Dropdown.Item>
                                          </Dropdown.Menu>
                                        </Dropdown>
                                      </ButtonGroup>
                                    ))}


                                  </td>
                                </tr>
                                <tr>
                                  <td>3</td>
                                  <td>INV003</td>
                                  <td>2023-08-10</td>
                                  <td>QR SCAN</td>
                                  <td>2023-08-11</td>
                                  <td>2023-08-13</td>
                                  <td>Michael Johnson</td>
                                  <td>Harrod Chandler</td>
                                  <td>9876543212</td>
                                  <td>XYZ9101</td>
                                  <td>Ford</td>
                                  <td>Focus</td>
                                  <td><Link className="text-primary">$137,000</Link></td>
                                  <td>
                                    <button
                                      className="btn btn-sm btn-primary fa fa-credit-card"
                                      onClick={() => handleEditClick('INV001')}
                                      style={{ marginLeft: "5px" }}
                                    ></button>
                                  </td>
                                  <td className="bg-orange">Cash on Delivery</td>
                                  <td>4 Days</td>
                                  <td>Awaiting</td>
                                  <td>
                                    {dropdownwithiconsdata.map((idx) => (
                                      <ButtonGroup className="" key={Math.random()}>
                                        <Dropdown drop="up">
                                          <Dropdown.Toggle variant={idx.color} className="dropups">
                                            <i className={`fe fe-${idx.class}`}></i>
                                          </Dropdown.Toggle>

                                          <Dropdown.Menu>
                                            <Dropdown.Item onClick={() => handleEditClick('INV002')}>
                                              <i className="fa fa-edit text-primary"></i> Edit
                                            </Dropdown.Item>
                                            <Dropdown.Item onClick={() => handleDeleteClick('INV002')}>
                                              <i className="fa fa-trash-alt text-danger"></i> Delete
                                            </Dropdown.Item>
                                            {/* Upload images option */}
                                            <Dropdown.Item onClick={() => handleUploadClick('INV002')}>
                                              <i className="fa fa-upload text-success"></i> Upload Images
                                            </Dropdown.Item>
                                          </Dropdown.Menu>
                                        </Dropdown>
                                      </ButtonGroup>
                                    ))}

                                  </td>
                                </tr>
                                <tr>
                                  <td>4</td>
                                  <td>INV004</td>
                                  <td>2023-08-05</td>
                                  <td>Mobile App</td>
                                  <td>2023-08-06</td>
                                  <td>2023-08-08</td>
                                  <td>Chris Evans</td>
                                  <td>Colleen Hurst</td>
                                  <td>9876543213</td>
                                  <td>XYZ1212</td>
                                  <td>Nissan</td>
                                  <td>Altima</td>
                                  <td><Link className="text-primary">$109,000</Link></td>
                                  <td>
                                    <button
                                      className="btn btn-sm btn-primary fa fa-credit-card"
                                      onClick={() => handleEditClick('INV001')}
                                      style={{ marginLeft: "5px" }}
                                    ></button>
                                  </td>
                                  <td className="bg-orange">Cash on Delivery</td>
                                  <td>3 Days</td>
                                  <td>Delivered</td>
                                  <td>
                                    {dropdownwithiconsdata.map((idx) => (
                                      <ButtonGroup className="" key={Math.random()}>
                                        <Dropdown drop="up">
                                          <Dropdown.Toggle variant={idx.color} className="dropups">
                                            <i className={`fe fe-${idx.class}`}></i>
                                          </Dropdown.Toggle>

                                          <Dropdown.Menu>
                                            <Dropdown.Item onClick={() => handleEditClick('INV002')}>
                                              <i className="fa fa-edit text-primary"></i> Edit
                                            </Dropdown.Item>
                                            <Dropdown.Item onClick={() => handleDeleteClick('INV002')}>
                                              <i className="fa fa-trash-alt text-danger"></i> Delete
                                            </Dropdown.Item>
                                            {/* Upload images option */}
                                            <Dropdown.Item onClick={() => handleUploadClick('INV002')}>
                                              <i className="fa fa-upload text-success"></i> Upload Images
                                            </Dropdown.Item>
                                          </Dropdown.Menu>
                                        </Dropdown>
                                      </ButtonGroup>
                                    ))}

                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </Tab>

                      {/* Invoices Tab */}
                      <Tab eventKey="Invoices" title={<><span>Invoices</span> <span className="badge bg-danger ms-2">2</span></>}>
                        <div className="tab-pane active">
                        <div className="table-responsive mt-4">
                            <table className="table table-bordered text-nowrap border-bottom">
                              <thead>
                                <tr>
                                  <th>S. No</th>
                                  <th>Invoice No</th>
                                  <th>Booking Date</th>
                                  <th>Source</th>
                                  <th>Service Reg Date</th>
                                  <th>SRC CMP DT</th>
                                  <th>Foremen Name</th>
                                  <th>Client Name</th>
                                  <th>Contact No</th>
                                  <th>Veh/Reg No</th>
                                  <th>Make</th>
                                  <th>Model</th>
                                  <th>Service Cost</th>
                                  <th>Payment Link</th>
                                  <th>Payment Mode</th>
                                  <th>Duration</th>
                                  <th>TAT Status</th>
                                  <th>Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>1</td>
                                  <td>INV001</td>
                                  <td>2023-08-15</td>
                                  <td>Mobile App</td>
                                  <td>2023-08-16</td>
                                  <td>2023-08-18</td>
                                  <td>John Doe</td>
                                  <td>Tiger Nixon</td>
                                  <td>9876543210</td>
                                  <td>XYZ1234</td>
                                  <td>Toyota</td>
                                  <td>Corolla</td>
                                  <td><Link className="text-primary">$345.00</Link></td>
                                  <td>
                                    <button
                                      className="btn btn-sm btn-primary fa fa-credit-card"
                                      onClick={() => handleEditClick('INV001')}
                                      style={{ marginLeft: "5px" }}
                                    ></button>
                                  </td>
                                  <td className="bg-green">Online Payment</td>
                                  <td>2 Days</td>
                                  <td>Delivered</td>
                                  <td>
                                    {dropdownwithiconsdata.map((idx) => (
                                      <ButtonGroup className="" key={Math.random()}>
                                        <Dropdown drop="up">
                                          <Dropdown.Toggle variant={idx.color} className="dropups">
                                            <i className={`fe fe-${idx.class}`}></i>
                                          </Dropdown.Toggle>

                                          <Dropdown.Menu>
                                            <Dropdown.Item onClick={() => handleEditClick('INV002')}>
                                              <i className="fa fa-edit text-primary"></i> Edit
                                            </Dropdown.Item>
                                            <Dropdown.Item onClick={() => handleDeleteClick('INV002')}>
                                              <i className="fa fa-trash-alt text-danger"></i> Delete
                                            </Dropdown.Item>
                                            {/* Upload images option */}
                                            <Dropdown.Item onClick={() => handleUploadClick('INV002')}>
                                              <i className="fa fa-upload text-success"></i> Upload Images
                                            </Dropdown.Item>
                                          </Dropdown.Menu>
                                        </Dropdown>
                                      </ButtonGroup>
                                    ))}

                                    {/* <button
                                      className="btn btn-sm btn-primary fa fa-edit"
                                      onClick={() => handleEditClick('INV001')}
                                      style={{ marginLeft: "5px" }}
                                    ></button>
                                    <button
                                      className="btn btn-sm btn-danger fa fa-trash-alt"
                                      onClick={() => handleDeleteClick('INV001')}
                                      style={{ marginLeft: "5px" }}
                                    ></button> */}
                                  </td>
                                </tr>
                                <tr>
                                  <td>2</td>
                                  <td>INV002</td>
                                  <td>2023-08-12</td>
                                  <td>Web Application</td>
                                  <td>2023-08-13</td>
                                  <td>2023-08-15</td>
                                  <td>Jane Smith</td>
                                  <td>Briele Williamson</td>
                                  <td>9876543211</td>
                                  <td>XYZ5678</td>
                                  <td>Honda</td>
                                  <td>Civic</td>
                                  <td><Link className="text-primary">$372,000</Link></td>
                                  <td>
                                    <button
                                      className="btn btn-sm btn-primary fa fa-credit-card"
                                      onClick={() => handleEditClick('INV001')}
                                      style={{ marginLeft: "5px" }}
                                    ></button>
                                  </td>
                                  <td className="bg-orange">Cash on Delivery</td>
                                  <td>3 Days</td>
                                  <td>Delivering</td>
                                  <td>
                                    {dropdownwithiconsdata.map((idx) => (
                                      <ButtonGroup className="" key={Math.random()}>
                                        <Dropdown drop="up">
                                          <Dropdown.Toggle variant={idx.color} className="dropups">
                                            <i className={`fe fe-${idx.class}`}></i>
                                          </Dropdown.Toggle>

                                          <Dropdown.Menu>
                                            <Dropdown.Item onClick={() => handleEditClick('INV002')}>
                                              <i className="fa fa-edit text-primary"></i> Edit
                                            </Dropdown.Item>
                                            <Dropdown.Item onClick={() => handleDeleteClick('INV002')}>
                                              <i className="fa fa-trash-alt text-danger"></i> Delete
                                            </Dropdown.Item>
                                            {/* Upload images option */}
                                            <Dropdown.Item onClick={() => handleUploadClick('INV002')}>
                                              <i className="fa fa-upload text-success"></i> Upload Images
                                            </Dropdown.Item>
                                          </Dropdown.Menu>
                                        </Dropdown>
                                      </ButtonGroup>
                                    ))}


                                  </td>
                                </tr>
                                <tr>
                                  <td>3</td>
                                  <td>INV003</td>
                                  <td>2023-08-10</td>
                                  <td>QR SCAN</td>
                                  <td>2023-08-11</td>
                                  <td>2023-08-13</td>
                                  <td>Michael Johnson</td>
                                  <td>Harrod Chandler</td>
                                  <td>9876543212</td>
                                  <td>XYZ9101</td>
                                  <td>Ford</td>
                                  <td>Focus</td>
                                  <td><Link className="text-primary">$137,000</Link></td>
                                  <td>
                                    <button
                                      className="btn btn-sm btn-primary fa fa-credit-card"
                                      onClick={() => handleEditClick('INV001')}
                                      style={{ marginLeft: "5px" }}
                                    ></button>
                                  </td>
                                  <td className="bg-orange">Cash on Delivery</td>
                                  <td>4 Days</td>
                                  <td>Awaiting</td>
                                  <td>
                                    {dropdownwithiconsdata.map((idx) => (
                                      <ButtonGroup className="" key={Math.random()}>
                                        <Dropdown drop="up">
                                          <Dropdown.Toggle variant={idx.color} className="dropups">
                                            <i className={`fe fe-${idx.class}`}></i>
                                          </Dropdown.Toggle>

                                          <Dropdown.Menu>
                                            <Dropdown.Item onClick={() => handleEditClick('INV002')}>
                                              <i className="fa fa-edit text-primary"></i> Edit
                                            </Dropdown.Item>
                                            <Dropdown.Item onClick={() => handleDeleteClick('INV002')}>
                                              <i className="fa fa-trash-alt text-danger"></i> Delete
                                            </Dropdown.Item>
                                            {/* Upload images option */}
                                            <Dropdown.Item onClick={() => handleUploadClick('INV002')}>
                                              <i className="fa fa-upload text-success"></i> Upload Images
                                            </Dropdown.Item>
                                          </Dropdown.Menu>
                                        </Dropdown>
                                      </ButtonGroup>
                                    ))}

                                  </td>
                                </tr>
                                <tr>
                                  <td>4</td>
                                  <td>INV004</td>
                                  <td>2023-08-05</td>
                                  <td>Mobile App</td>
                                  <td>2023-08-06</td>
                                  <td>2023-08-08</td>
                                  <td>Chris Evans</td>
                                  <td>Colleen Hurst</td>
                                  <td>9876543213</td>
                                  <td>XYZ1212</td>
                                  <td>Nissan</td>
                                  <td>Altima</td>
                                  <td><Link className="text-primary">$109,000</Link></td>
                                  <td>
                                    <button
                                      className="btn btn-sm btn-primary fa fa-credit-card"
                                      onClick={() => handleEditClick('INV001')}
                                      style={{ marginLeft: "5px" }}
                                    ></button>
                                  </td>
                                  <td className="bg-orange">Cash on Delivery</td>
                                  <td>3 Days</td>
                                  <td>Delivered</td>
                                  <td>
                                    {dropdownwithiconsdata.map((idx) => (
                                      <ButtonGroup className="" key={Math.random()}>
                                        <Dropdown drop="up">
                                          <Dropdown.Toggle variant={idx.color} className="dropups">
                                            <i className={`fe fe-${idx.class}`}></i>
                                          </Dropdown.Toggle>

                                          <Dropdown.Menu>
                                            <Dropdown.Item onClick={() => handleEditClick('INV002')}>
                                              <i className="fa fa-edit text-primary"></i> Edit
                                            </Dropdown.Item>
                                            <Dropdown.Item onClick={() => handleDeleteClick('INV002')}>
                                              <i className="fa fa-trash-alt text-danger"></i> Delete
                                            </Dropdown.Item>
                                            {/* Upload images option */}
                                            <Dropdown.Item onClick={() => handleUploadClick('INV002')}>
                                              <i className="fa fa-upload text-success"></i> Upload Images
                                            </Dropdown.Item>
                                          </Dropdown.Menu>
                                        </Dropdown>
                                      </ButtonGroup>
                                    ))}

                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </Tab>
                    </Tabs>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Tabss;
