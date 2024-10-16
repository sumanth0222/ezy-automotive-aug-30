import React, { Fragment, useEffect, useState } from "react";
import { ProgressBar, Card, Col, Form, Row, Tabs, Tab, Table, Dropdown, DropdownButton, Collapse, ButtonGroup, Button } from "react-bootstrap"; // Removed duplicate Tabs import
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Pageheader from '../../../layout/layoutcomponent/pageheader';
import { MultiSelect } from "react-multi-select-component";
import { InspectionBookings } from "../../../common/selectdata";
import { Link } from "react-router-dom";
import { dropdownwithiconsdata } from "../../../common/commondata";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux'
import Select from 'react-select';
import ProductService from '../../../common/ProductService';


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
    navigate(`${import.meta.env.BASE_URL}advancedui/timeline`);
  };

  const getdata = useSelector((state) => state.cartreducer.carts);
  const [value, setvalue] = useState("");

  const handleOnchange = () => {
    setvalue(value);
  };

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [Data, setData] = useState([]);

  // const { id } = useParams();
  const id = ProductService.returnId();

  const compare = () => {
    let comparedata = getdata.filter((e) => {
      return e.id === id;
    });
    setData(comparedata);
  };

  useEffect(() => {
    compare();
  }, [id]);

  const Optioncategory1 = [
    { value: "category-2", label: "1" },
    { value: "category-3", label: "2" },
    { value: "category-4", label: "3" },
    { value: "category-5", label: "4" },
  ];


 
  let [isFirstCollapsed, setisFirstCollapsed] = useState(false);
  let [isSecondCollapsed, setisSecondCollapsed] = useState(false);
  let [isThirdCollapsed, setisThirdCollapsed] = useState(false);
  let [isFourthCollapsed, setisFourthCollapsed] = useState(false);
  let [isFifthCollapsed, setisFifthCollapsed] = useState(false);


 
  let first = () => {
    if (isFirstCollapsed === false) {
      setisFirstCollapsed(true);
    } else if (isFirstCollapsed === true) {
      setisFirstCollapsed(false);
    }
  };
  let second = () => {
    console.log(isSecondCollapsed === !isSecondCollapsed);
    if (isSecondCollapsed === true) {
      setisSecondCollapsed(false);
    } else if (isSecondCollapsed === false) {
      setisSecondCollapsed(true);
    }
  };
  let third = () => {
    console.log(isThirdCollapsed === !isThirdCollapsed);
    if (isThirdCollapsed === true) {
      setisThirdCollapsed(false);
    } else if (isThirdCollapsed === false) {
      setisThirdCollapsed(true);
    }
  };
  let fourth = () => {
    console.log(isFourthCollapsed === !isFourthCollapsed);
    if (isFourthCollapsed === true) {
      setisFourthCollapsed(false);
    } else if (isFourthCollapsed === false) {
      setisFourthCollapsed(true);
    }
  };
  let fifth = () => {
    console.log(isFifthCollapsed === !isFifthCollapsed);
    if (isFifthCollapsed === true) {
      setisFifthCollapsed(false);
    } else if (isFifthCollapsed === false) {
      setisFifthCollapsed(true);
    }
  };
 

  return (
    <Fragment>
      <Pageheader title="Transaction Centre" heading="Pages" active="Transaction Centre" />
      <Row className="row-sm">
        <Col xl={12}>
          <Card className="mg-b-20" id="tabs-style3">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center">
                <div className="main-content-label mg-b-5">Transaction Centre</div>
                <div className="ms-4 d-lg-flex form-group">
                  <span>
                    <input
                      autoComplete="off"
                      placeholder="Search..."
                      type="search"
                      className="form-control"
                      value={filter}
                      onChange={(e) => setFilter(e.target.value)}
                    />
                  </span>
                  {/* <span>
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
                  </span> */}


                </div>
              </div>

              <Row>
        
        <Col lg={12} md={12}>
          <Card className="custom-card">
            <Card.Body>
              
              <div>
                <div className="btn-list">
                  <Button
                    variant=""

                    className="btn ripple btn-primary mb-2 mb-xl-0 me-2"

                    role="button"
                    onClick={() => first()}
                  >
                    Bookings<span className="badge bg-danger ms-2">6</span>
                  </Button>
                  <Button
                    variant=""
                    className="btn ripple btn-primary mb-2 mb-xl-0 me-2"
                    role="button"
                    onClick={() => second()}
                  >
                    Inspections<span className="badge bg-danger ms-2">2</span>
                  </Button>
                  <Button
                    variant=""
                    className="btn ripple btn-primary mb-2 mb-xl-0"
                    role="button"
                    onClick={() => third()}
                  >
                    Jobs<span className="badge bg-danger ms-2">6</span>
                  </Button>
                  <Button
                    variant=""
                    className="btn ripple btn-primary mb-2 mb-xl-0"
                    role="button"
                    onClick={() => fourth()}
                  >
                    Orders<span className="badge bg-danger ms-2">1</span>
                  </Button>
                  <Button
                    variant=""
                    className="btn ripple btn-primary mb-2 mb-xl-0"
                    role="button"
                    onClick={() => fifth()}
                  >
                    Invoices<span className="badge bg-danger ms-2">2</span>
                  </Button>
                </div>
                <Row className="row-sm">
                  {isFirstCollapsed ? (
                    <div className="col">
                      <div
                        className=" multi-collapse"
                        id="multiCollapseExample1"
                      >
                         <div class="d-flex mt-4">
                        
                        <select class=" mb-4 selectpage border me-1" fdprocessedid="53840a">
                          <option value="10">Show 10</option>
                          <option value="25">Show 25</option>
                          <option value="50">Show 50</option>
                        </select>

                        <div>
                        <button type="button" class="btn  btn-rounded btn btn-dark" fdprocessedid="e5313">Excel</button>
                        </div>
                        
                        <span class="d-flex ms-auto">
                          <input class="form-control mb-4" placeholder="Search..." value="" fdprocessedid="phgiff"/>
                        </span>
                      </div>

                        <div className="mt-4">
                        <div className="table-responsive mt-4">
                            <table className="table table-bordered text-nowrap border-bottom">
                              <thead>
                                <tr>
                                  <th>S. No</th>
                                  <th>Job ID</th>
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
                                  <td>007</td>
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
                                  <td>041</td>
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
                                  <td>210</td>
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
                                  <td><Link to={`${import.meta.env.BASE_URL}pages/invoice`} className="text-primary">$137,000</Link></td>
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
                                  <td>013</td>
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
                      </div>
                    </div>
                  ) : null}
                  {isSecondCollapsed ? (
                    <div className="col">
                      <div
                        className=" multi-collapse"
                        id="multiCollapseExample2"
                      >
                         <div class="d-flex mt-4">
                        
                        <select class=" mb-4 selectpage border me-1" fdprocessedid="53840a">
                          <option value="10">Show 10</option>
                          <option value="25">Show 25</option>
                          <option value="50">Show 50</option>
                        </select>

                        <div>
                        <button type="button" class="btn  btn-rounded btn btn-dark" fdprocessedid="e5313">Excel</button>
                        </div>
                        
                        <span class="d-flex ms-auto">
                          <input class="form-control mb-4" placeholder="Search..." value="" fdprocessedid="phgiff"/>
                        </span>
                      </div>

                        <div className="mt-4">
                        <div className="table-responsive mt-4">
                            <table className="table table-bordered text-nowrap border-bottom">
                              <thead>
                                <tr>
                                  <th>S. No</th>
                                  <th>Job ID</th>
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
                                  <td>201</td>
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
                                  <td>209</td>
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
                                  <td>206</td>
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
                                  <td>206</td>
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
                      </div>
                    </div>
                  ) : null}
                  {isThirdCollapsed ? (
                    <div className="col">
                      <div
                        className=" multi-collapse"
                        id="multiCollapseExample3"
                      >
                         <div class="d-flex mt-4">
                        
                        <select class=" mb-4 selectpage border me-1" fdprocessedid="53840a">
                          <option value="10">Show 10</option>
                          <option value="25">Show 25</option>
                          <option value="50">Show 50</option>
                        </select>

                        <div>
                        <button type="button" class="btn  btn-rounded btn btn-dark" fdprocessedid="e5313">Excel</button>
                        </div>
                        
                        <span class="d-flex ms-auto">
                          <input class="form-control mb-4" placeholder="Search..." value="" fdprocessedid="phgiff"/>
                        </span>
                      </div>

                        <div className="table-responsive mt-4">
                            <table className="table table-bordered text-nowrap border-bottom">
                              <thead>
                                <tr>
                                  <th>S. No</th>
                                  <th>Job ID</th>
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
                                  <td>305</td>
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
                                  <td>306</td>
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
                                  <td>307</td>
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
                                  <td>301</td>
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
                    </div>
                  ) : null}
                  {isFourthCollapsed ? (
                    <div className="col">
                      <div
                        className=" multi-collapse"
                        id="multiCollapseExample4"
                      >
                         <div class="d-flex mt-4">
                        
                        <select class=" mb-4 selectpage border me-1" fdprocessedid="53840a">
                          <option value="10">Show 10</option>
                          <option value="25">Show 25</option>
                          <option value="50">Show 50</option>
                        </select>

                        

                        <div>
                        <button type="button" class="btn  btn-rounded btn btn-dark" fdprocessedid="e5313">Excel</button>
                        </div>
                        
                        <span class="d-flex ms-auto">
                          <input class="form-control mb-4" placeholder="Search..." value="" fdprocessedid="phgiff"/>
                        </span>
                      </div>

                        <div className="table-responsive mt-4">
                            <table className="table table-bordered text-nowrap border-bottom">
                              <thead>
                                <tr>
                                  <th>S. No</th>
                                  <th>Job ID</th>
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
                                  <td>406</td>
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
                                  <td>406</td>
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
                                  <td>407</td>
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
                                  <td>401</td>
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
                    </div>
                  ) : null}
                  {isFifthCollapsed ? (
                    <div className="col">
                      <div
                        className=" multi-collapse"
                        id="multiCollapseExample5"
                      >

                      <div class="d-flex mt-4">
                        
                        <select class=" mb-4 selectpage border me-1" fdprocessedid="53840a">
                          <option value="10">Show 10</option>
                          <option value="25">Show 25</option>
                          <option value="50">Show 50</option>
                        </select>

                        <div>
                        <button type="button" class="btn  btn-rounded btn btn-dark" fdprocessedid="e5313">Excel</button>
                        </div>

                        
                        
                        <span class="d-flex ms-auto">
                          <input class="form-control mb-4" placeholder="Search..." value="" fdprocessedid="phgiff"/>
                        </span>
                      </div>

                        <div className="table-responsive mt-4">
                            <table className="table table-bordered text-nowrap border-bottom">
                              <thead>
                                <tr>
                                  <th>S. No</th>
                                  <th>Job ID</th>
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
                                  <td>503</td>
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
                                  <td>501</td>
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
                                  <td>506</td>
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
                                  <td>509</td>
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
                    </div>
                  ) : null}
                </Row>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
              









              
            </Card.Body>
          </Card>
        </Col>
      </Row>


      <Row className="row-sm">
        <Col sm={12} md={12} xl={6} lg={6} xxl={6}>
          <Card>
            <Card.Body>
              <Row className="row-sm">
                <Col xxl={6} lg={12} md={12} className="details  mt-xxl-0 ">
                  


                  <div className="row d-flex justify-content-evenly" style={{backgroundColor:"#38cab3",marginTop:"-20px",marginLeft:"-20px",marginRight:"-20px", paddingTop:"15px"}}>

                      <div className="d-flex">

                        <i class="fa fa-binoculars" style={{fontSize:"30px"}}> </i>

                        <div className="list" style={{paddingLeft:"10px"}}>
                          <p style={{marginBottom:"0px"}} title="Plate Number">AP09BC2034 (Hyderabad)</p>
                         
                        </div>
                      </div>

                      <div className="d-flex">

                          <i class="fa fa-car" style={{fontSize:"30px"}}> </i>

                          <div className="list" style={{paddingLeft:"10px"}}>
                            <p style={{marginBottom:"0px"}} title="Brand-Model-Variant">Ashok Leyland-Stile-LE</p>
                            
                          </div>
                      </div>

                  </div>

                  <div className="row d-flex justify-content-evenly" style={{backgroundColor:"#38cab3",marginLeft:"-20px",marginRight:"-20px",paddingBottom:"15px",paddingTop:"8px"}}>

                      <div className="d-flex">

                        {/* <i class="fa fa-kms" style={{fontSize:"30px"}}> </i> */}

                        <div className="list" style={{paddingLeft:"10px"}} >
                          <p style={{marginBottom:"0px"}} title="Odometer Reading">000000</p>
                         
                        </div>
                      </div>

                      <div className="d-flex ">

                          {/* <i class="fa fa-car" style={{fontSize:"30px"}}> </i> */}

                          <div className="list" style={{paddingLeft:"10px"}}>
                            <p style={{marginBottom:"0px"}} title="Mfg Year">NA | <span title="Vehicle Category">Hot Hatchback</span></p>
                          </div>

                          <div className="list d-flex" style={{paddingLeft:"10px"}}>
                              <button type="button" class="btn  btn-rounded btn btn-dark" fdprocessedid="e5313" title="Fuel Type">NA</button>  
                          </div>

                      </div>

                  </div>

                  {/* <div class="main-contact-action btn-list pt-3 pe-0 me-3"> */}
                  <div className="row d-flex justify-content-flex-start" style={{paddingTop:"30px"}}>

                    <div className="d-flex">
                   
                      <i class="fa fa-user" style={{fontSize:"30px"}}> </i>
                    
                      <div className="list" style={{paddingLeft:"10px"}}>
                        <p style={{marginBottom:"0px"}}>Customer Name</p>
                        <p>FIROZ</p>
                      </div>
                    </div>
                    
                    <div className="d-flex">
                   
                      <i class="fa fa-phone" style={{fontSize:"30px"}}> </i>
                    
                      <div className="list" style={{paddingLeft:"10px"}}>
                        <p style={{marginBottom:"0px"}}>Phone Number</p>
                        <p>8008664384</p>
                      </div>
                    </div>

                    <div className="d-flex">
                   
                      <i class="far fa-user" style={{fontSize:"30px"}}> </i>
                    
                      <div className="list" style={{paddingLeft:"10px"}}>
                        <p style={{marginBottom:"0px"}}>Advisor Name</p>
                        <p>NA</p>
                      </div>
                    </div>


                    

                  </div>


                  <div className="row d-flex justify-content-evenly" style={{paddingTop:"15px"}}>
                    <div className="d-flex">
                   
                      <i class="fa fa-cog" style={{fontSize:"30px"}}> </i>
                    
                      <div className="list" style={{paddingLeft:"10px"}}>
                        <p style={{marginBottom:"0px"}}>Customer Source</p>
                        <p>TRIAL CARS24</p>
                      </div>
                    </div>

                    <div className="d-flex">
                   
                      <i class="fa fa-star" style={{fontSize:"30px"}}> </i>
                    
                      <div className="list" style={{paddingLeft:"10px"}}>
                        <p style={{marginBottom:"0px"}}>Customer Rating</p>
                        {/* Ratings */}
                        <div className="rating mb-1">
                          <div className="stars">
                            <span className="fa fa-star text-muted"></span>
                            <span className="fa fa-star text-muted"></span>
                            <span className="fa fa-star text-muted"></span>
                            <span className="fa fa-star text-muted"></span>
                            <span className="fa fa-star text-muted"></span>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>


                <div className="row justify-content-evenly" style={{paddingTop:"30px"}}>

                  <div>
                    <button type="button" class="btn  btn-rounded btn btn-dark" fdprocessedid="e5313"><i class="fas fa-file-alt"></i></button>
                    <p>Jc/Est</p>
                  </div>

                  <div>
                    <button type="button" class="btn  btn-rounded btn btn-dark" fdprocessedid="e5313"><i class="far fa-thumbs-up"></i></button>
                    <p>Status</p>
                  </div>

                  <div>
                    <button type="button" class="btn  btn-rounded btn btn-dark" fdprocessedid="e5313"><i class="fa fa-history"></i></button>
                    <p>History</p>
                  </div>

                  <div>
                      <button type="button" class="btn  btn-rounded btn btn-dark" fdprocessedid="e5313"><i class="fas fa-dollar-sign"></i></button>
                      <p>Payments</p>
                  </div>

                 
                
                </div>  

                <div className="row justify-content-evenly">

                <div>
                      <button type="button" class="btn  btn-rounded btn btn-dark" fdprocessedid="e5313"><i class="fas fa-percent"></i></button>
                      <p>Discount</p>
                  </div>

                  <div>
                     <button type="button" class="btn  btn-rounded btn btn-dark" fdprocessedid="e5313"><i class="fa fa-print"></i></button>
                     <p>Invoice</p>
                  </div>

                  <div>
                      <button type="button" class="btn  btn-rounded btn btn-dark" fdprocessedid="e5313"><i class="fa fa-ellipsis-v"></i></button>
                      <p>View More</p>
                  </div>

                </div> 

                {/* Stock */}
                <div className="mt-3">
                    <p className="font-weight-normal">
                      <span className="h4">Fuel Percentage</span> 
                    </p>
                    <ProgressBar now={40} animated variant="primary" />
                </div>

              <div className="row">
                <div style={{paddingTop:"30px"}}>
                  <p style={{marginBottom:"0px",color:"#38cab3"}}>JC NO:</p>
                  <p>14</p>
                </div>

                <div style={{paddingTop:"30px"}}>
                  <p style={{marginBottom:"0px",color:"#38cab3"}}>0.00</p>
                  <p>Estimate</p>
                </div>

                <div style={{paddingTop:"30px"}}>
                  <p style={{marginBottom:"0px",color:"#38cab3"}} title="Date of Arrival">2024-10-16</p>
                  <p title="Date of Arrival">DOA</p>
                </div>

                <div style={{paddingTop:"30px"}}>
                  <p style={{marginBottom:"0px",color:"#38cab3"}} title="Date of Delivery">NA</p>
                  <p title="Date of Delivery">DOD</p>
                </div>

              </div>


              <h5 style={{paddingTop:"25px"}}>Repair</h5>
              <div className="row">
                
                  
                <div style={{paddingTop:"5px"}}>
                  <p style={{marginBottom:"0px",color:"#38cab3"}}>NA</p>
                  <p>Inv No(Cust)</p>
                </div>


                <div style={{paddingTop:"5px"}}>
                  <p style={{marginBottom:"0px",color:"#38cab3"}}>0.00</p>
                  <p>Discount</p>
                </div>

                <div style={{paddingTop:"5px"}}>
                  <p style={{marginBottom:"0px",color:"#38cab3"}}>0.00</p>
                  <p>Coupon</p>
                </div>

                <div style={{paddingTop:"5px"}}>
                  <p style={{marginBottom:"0px",color:"#38cab3"}}>0.00</p>
                  <p>Paid(Cust)</p>
                </div>

                <div style={{paddingTop:"5px"}}>
                  <p style={{marginBottom:"0px",color:"#38cab3"}}>0.00</p>
                  <p>Due(Cust)</p>
                </div>

              </div>


              <h5 style={{paddingTop:"25px"}}>Claims</h5>
              <div className="row">
                
                  
                <div style={{paddingTop:"5px"}}>
                  <p style={{marginBottom:"0px",color:"#38cab3"}}>NA</p>
                  <p>Inv No(Ins)</p>
                </div>


                <div style={{paddingTop:"5px"}}>
                  <p style={{marginBottom:"0px",color:"#38cab3"}}>0.00</p>
                  <p>Paid(Ins)</p>
                </div>

                <div style={{paddingTop:"5px"}}>
                  <p style={{marginBottom:"0px",color:"#38cab3"}}>0.00</p>
                  <p>Due(Ins)</p>
                </div>

              </div>

                    
                  {/* </div> */}

                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={12} xl={6} lg={6} xxl={6}>
          <Card>
            <Card.Body>
              <Row className="row-sm">
              <Col xxl={6} lg={12} md={12} className="details  mt-xxl-0 ">
                  


                  <div className="row d-flex justify-content-evenly" style={{backgroundColor:"#38cab3",marginTop:"-20px",marginLeft:"-20px",marginRight:"-20px", paddingTop:"15px"}}>

                      <div className="d-flex">

                        <i class="fa fa-binoculars" style={{fontSize:"30px"}}> </i>

                        <div className="list" style={{paddingLeft:"10px"}}>
                          <p style={{marginBottom:"0px"}} title="Plate Number">AP09PG6789 (Hyderabad)</p>
                         
                        </div>
                      </div>

                      <div className="d-flex">

                          <i class="fa fa-car" style={{fontSize:"30px"}}> </i>

                          <div className="list" style={{paddingLeft:"10px"}}>
                            <p style={{marginBottom:"0px"}} title="Brand-Model-Variant">Toyota-Land Cruiser-200 VX </p>
                            
                          </div>
                      </div>

                  </div>

                  <div className="row d-flex justify-content-evenly" style={{backgroundColor:"#38cab3",marginLeft:"-20px",marginRight:"-20px",paddingBottom:"15px",paddingTop:"8px"}}>

                      <div className="d-flex">

                        {/* <i class="fa fa-kms" style={{fontSize:"30px"}}> </i> */}

                        <div className="list" style={{paddingLeft:"10px"}} >
                          <p style={{marginBottom:"0px"}} title="Odometer Reading">140000</p>
                         
                        </div>
                      </div>

                      <div className="d-flex ">

                          {/* <i class="fa fa-car" style={{fontSize:"30px"}}> </i> */}

                          <div className="list" style={{paddingLeft:"10px"}}>
                            <p style={{marginBottom:"0px"}} title="Mfg Year">NA | <span title="Vehicle Category">sedan</span></p>
                          </div>

                          <div className="list d-flex" style={{paddingLeft:"10px"}}>
                              <button type="button" class="btn  btn-rounded btn btn-dark" fdprocessedid="e5313" title="Fuel Type">NA</button>  
                          </div>

                      </div>

                  </div>

                  {/* <div class="main-contact-action btn-list pt-3 pe-0 me-3"> */}
                  <div className="row d-flex justify-content-flex-start" style={{paddingTop:"30px"}}>

                    <div className="d-flex">
                   
                      <i class="fa fa-user" style={{fontSize:"30px"}}> </i>
                    
                      <div className="list" style={{paddingLeft:"10px"}}>
                        <p style={{marginBottom:"0px"}}>Customer Name</p>
                        <p>TRIAL CUSTOMER 6</p>
                      </div>
                    </div>
                    
                    <div className="d-flex">
                   
                      <i class="fa fa-phone" style={{fontSize:"30px"}}> </i>
                    
                      <div className="list" style={{paddingLeft:"10px"}}>
                        <p style={{marginBottom:"0px"}}>Phone Number</p>
                        <p>7878888888</p>
                      </div>
                    </div>

                    <div className="d-flex">
                   
                      <i class="far fa-user" style={{fontSize:"30px"}}> </i>
                    
                      <div className="list" style={{paddingLeft:"10px"}}>
                        <p style={{marginBottom:"0px"}}>Advisor Name</p>
                        <p>Supervisor 1</p>
                      </div>
                    </div>


                    

                  </div>


                  <div className="row d-flex justify-content-evenly" style={{paddingTop:"15px"}}>
                    <div className="d-flex">
                   
                      <i class="fa fa-cog" style={{fontSize:"30px"}}> </i>
                    
                      <div className="list" style={{paddingLeft:"10px"}}>
                        <p style={{marginBottom:"0px"}}>Customer Source</p>
                        <p>WALK-IN</p>
                      </div>
                    </div>

                    <div className="d-flex">
                   
                      <i class="fa fa-star" style={{fontSize:"30px"}}> </i>
                    
                      <div className="list" style={{paddingLeft:"10px"}}>
                        <p style={{marginBottom:"0px"}}>Customer Rating</p>
                        {/* Ratings */}
                        <div className="rating mb-1">
                          <div className="stars">
                            <span className="fa fa-star text-muted"></span>
                            <span className="fa fa-star text-muted"></span>
                            <span className="fa fa-star text-muted"></span>
                            <span className="fa fa-star text-muted"></span>
                            <span className="fa fa-star text-muted"></span>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>


                <div className="row justify-content-evenly" style={{paddingTop:"30px"}}>

                  <div>
                    <button type="button" class="btn  btn-rounded btn btn-dark" fdprocessedid="e5313"><i class="fas fa-file-alt"></i></button>
                    <p>Jc/Est</p>
                  </div>

                  <div>
                    <button type="button" class="btn  btn-rounded btn btn-dark" fdprocessedid="e5313"><i class="far fa-thumbs-up"></i></button>
                    <p>Status</p>
                  </div>

                  <div>
                    <button type="button" class="btn  btn-rounded btn btn-dark" fdprocessedid="e5313"><i class="fa fa-history"></i></button>
                    <p>History</p>
                  </div>

                  <div>
                      <button type="button" class="btn  btn-rounded btn btn-dark" fdprocessedid="e5313"><i class="fas fa-dollar-sign"></i></button>
                      <p>Payments</p>
                  </div>

                 
                
                </div>  

                <div className="row justify-content-evenly">

                <div>
                      <button type="button" class="btn  btn-rounded btn btn-dark" fdprocessedid="e5313"><i class="fas fa-percent"></i></button>
                      <p>Discount</p>
                  </div>

                  <div>
                     <button type="button" class="btn  btn-rounded btn btn-dark" fdprocessedid="e5313"><i class="fa fa-print"></i></button>
                     <p>Invoice</p>
                  </div>

                  <div>
                      <button type="button" class="btn  btn-rounded btn btn-dark" fdprocessedid="e5313"><i class="fa fa-ellipsis-v"></i></button>
                      <p>View More</p>
                  </div>

                </div> 

                {/* Stock */}
                <div className="mt-3">
                    <p className="font-weight-normal">
                      <span className="h4">Fuel Percentage</span> 
                    </p>
                    <ProgressBar now={8} animated variant="primary" />
                </div>

              <div className="row">
                <div style={{paddingTop:"30px"}}>
                  <p style={{marginBottom:"0px",color:"#38cab3"}}>JC NO:</p>
                  <p>11</p>
                </div>

                <div style={{paddingTop:"30px"}}>
                  <p style={{marginBottom:"0px",color:"#38cab3"}}>0.00</p>
                  <p>Estimate</p>
                </div>

                <div style={{paddingTop:"30px"}}>
                  <p style={{marginBottom:"0px",color:"#38cab3"}} title="Date of Arrival">2024-10-16</p>
                  <p title="Date of Arrival">DOA</p>
                </div>

                <div style={{paddingTop:"30px"}}>
                  <p style={{marginBottom:"0px",color:"#38cab3"}} title="Date of Delivery">NA</p>
                  <p title="Date of Delivery">DOD</p>
                </div>

              </div>


              <h5 style={{paddingTop:"25px"}}>Repair</h5>
              <div className="row">
                
                  
                <div style={{paddingTop:"5px"}}>
                  <p style={{marginBottom:"0px",color:"#38cab3"}}>NA</p>
                  <p>Inv No(Cust)</p>
                </div>


                <div style={{paddingTop:"5px"}}>
                  <p style={{marginBottom:"0px",color:"#38cab3"}}>0.00</p>
                  <p>Discount</p>
                </div>

                <div style={{paddingTop:"5px"}}>
                  <p style={{marginBottom:"0px",color:"#38cab3"}}>0.00</p>
                  <p>Coupon</p>
                </div>

                <div style={{paddingTop:"5px"}}>
                  <p style={{marginBottom:"0px",color:"#38cab3"}}>0.00</p>
                  <p>Paid(Cust)</p>
                </div>

                <div style={{paddingTop:"5px"}}>
                  <p style={{marginBottom:"0px",color:"#38cab3"}}>0.00</p>
                  <p>Due(Cust)</p>
                </div>

              </div>


              <h5 style={{paddingTop:"25px"}}>Claims</h5>
              <div className="row">
                
                  
                <div style={{paddingTop:"5px"}}>
                  <p style={{marginBottom:"0px",color:"#38cab3"}}>NA</p>
                  <p>Inv No(Ins)</p>
                </div>


                <div style={{paddingTop:"5px"}}>
                  <p style={{marginBottom:"0px",color:"#38cab3"}}>0.00</p>
                  <p>Paid(Ins)</p>
                </div>

                <div style={{paddingTop:"5px"}}>
                  <p style={{marginBottom:"0px",color:"#38cab3"}}>0.00</p>
                  <p>Due(Ins)</p>
                </div>

              </div>

                    
                  {/* </div> */}

                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>


      <Row className="row-sm">
        <Col sm={12} md={12} xl={6} lg={6} xxl={6}>
          <Card>
            <Card.Body>
              <Row className="row-sm">
                <Col xxl={6} lg={12} md={12} className="details  mt-xxl-0 ">
                  


                  <div className="row d-flex justify-content-evenly" style={{backgroundColor:"#38cab3",marginTop:"-20px",marginLeft:"-20px",marginRight:"-20px", paddingTop:"15px"}}>

                      <div className="d-flex">

                        <i class="fa fa-binoculars" style={{fontSize:"30px"}}> </i>

                        <div className="list" style={{paddingLeft:"10px"}}>
                          <p style={{marginBottom:"0px"}} title="Plate Number">AP09BC2034 (Hyderabad)</p>
                         
                        </div>
                      </div>

                      <div className="d-flex">

                          <i class="fa fa-car" style={{fontSize:"30px"}}> </i>

                          <div className="list" style={{paddingLeft:"10px"}}>
                            <p style={{marginBottom:"0px"}} title="Brand-Model-Variant">Ashok Leyland-Stile-LE</p>
                            
                          </div>
                      </div>

                  </div>

                  <div className="row d-flex justify-content-evenly" style={{backgroundColor:"#38cab3",marginLeft:"-20px",marginRight:"-20px",paddingBottom:"15px",paddingTop:"8px"}}>

                      <div className="d-flex">

                        {/* <i class="fa fa-kms" style={{fontSize:"30px"}}> </i> */}

                        <div className="list" style={{paddingLeft:"10px"}} >
                          <p style={{marginBottom:"0px"}} title="Odometer Reading">000000</p>
                         
                        </div>
                      </div>

                      <div className="d-flex ">

                          {/* <i class="fa fa-car" style={{fontSize:"30px"}}> </i> */}

                          <div className="list" style={{paddingLeft:"10px"}}>
                            <p style={{marginBottom:"0px"}} title="Mfg Year">NA | <span title="Vehicle Category">Hot Hatchback</span></p>
                          </div>

                          <div className="list d-flex" style={{paddingLeft:"10px"}}>
                              <button type="button" class="btn  btn-rounded btn btn-dark" fdprocessedid="e5313" title="Fuel Type">NA</button>  
                          </div>

                      </div>

                  </div>

                  {/* <div class="main-contact-action btn-list pt-3 pe-0 me-3"> */}
                  <div className="row d-flex justify-content-flex-start" style={{paddingTop:"30px"}}>

                    <div className="d-flex">
                   
                      <i class="fa fa-user" style={{fontSize:"30px"}}> </i>
                    
                      <div className="list" style={{paddingLeft:"10px"}}>
                        <p style={{marginBottom:"0px"}}>Customer Name</p>
                        <p>FIROZ</p>
                      </div>
                    </div>
                    
                    <div className="d-flex">
                   
                      <i class="fa fa-phone" style={{fontSize:"30px"}}> </i>
                    
                      <div className="list" style={{paddingLeft:"10px"}}>
                        <p style={{marginBottom:"0px"}}>Phone Number</p>
                        <p>8008664384</p>
                      </div>
                    </div>

                    <div className="d-flex">
                   
                      <i class="far fa-user" style={{fontSize:"30px"}}> </i>
                    
                      <div className="list" style={{paddingLeft:"10px"}}>
                        <p style={{marginBottom:"0px"}}>Advisor Name</p>
                        <p>NA</p>
                      </div>
                    </div>


                    

                  </div>


                  <div className="row d-flex justify-content-evenly" style={{paddingTop:"15px"}}>
                    <div className="d-flex">
                   
                      <i class="fa fa-cog" style={{fontSize:"30px"}}> </i>
                    
                      <div className="list" style={{paddingLeft:"10px"}}>
                        <p style={{marginBottom:"0px"}}>Customer Source</p>
                        <p>TRIAL CARS24</p>
                      </div>
                    </div>

                    <div className="d-flex">
                   
                      <i class="fa fa-star" style={{fontSize:"30px"}}> </i>
                    
                      <div className="list" style={{paddingLeft:"10px"}}>
                        <p style={{marginBottom:"0px"}}>Customer Rating</p>
                        {/* Ratings */}
                        <div className="rating mb-1">
                          <div className="stars">
                            <span className="fa fa-star text-muted"></span>
                            <span className="fa fa-star text-muted"></span>
                            <span className="fa fa-star text-muted"></span>
                            <span className="fa fa-star text-muted"></span>
                            <span className="fa fa-star text-muted"></span>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>


                <div className="row justify-content-evenly" style={{paddingTop:"30px"}}>

                  <div>
                    <button type="button" class="btn  btn-rounded btn btn-dark" fdprocessedid="e5313"><i class="fas fa-file-alt"></i></button>
                    <p>Jc/Est</p>
                  </div>

                  <div>
                    <button type="button" class="btn  btn-rounded btn btn-dark" fdprocessedid="e5313"><i class="far fa-thumbs-up"></i></button>
                    <p>Status</p>
                  </div>

                  <div>
                    <button type="button" class="btn  btn-rounded btn btn-dark" fdprocessedid="e5313"><i class="fa fa-history"></i></button>
                    <p>History</p>
                  </div>

                  <div>
                      <button type="button" class="btn  btn-rounded btn btn-dark" fdprocessedid="e5313"><i class="fas fa-dollar-sign"></i></button>
                      <p>Payments</p>
                  </div>

                 
                
                </div>  

                <div className="row justify-content-evenly">

                <div>
                      <button type="button" class="btn  btn-rounded btn btn-dark" fdprocessedid="e5313"><i class="fas fa-percent"></i></button>
                      <p>Discount</p>
                  </div>

                  <div>
                     <button type="button" class="btn  btn-rounded btn btn-dark" fdprocessedid="e5313"><i class="fa fa-print"></i></button>
                     <p>Invoice</p>
                  </div>

                  <div>
                      <button type="button" class="btn  btn-rounded btn btn-dark" fdprocessedid="e5313"><i class="fa fa-ellipsis-v"></i></button>
                      <p>View More</p>
                  </div>

                </div> 

                {/* Stock */}
                <div className="mt-3">
                    <p className="font-weight-normal">
                      <span className="h4">Fuel Percentage</span> 
                    </p>
                    <ProgressBar now={80} animated variant="primary" />
                </div>

              <div className="row">
                <div style={{paddingTop:"30px"}}>
                  <p style={{marginBottom:"0px",color:"#38cab3"}}>JC NO:</p>
                  <p>14</p>
                </div>

                <div style={{paddingTop:"30px"}}>
                  <p style={{marginBottom:"0px",color:"#38cab3"}}>0.00</p>
                  <p>Estimate</p>
                </div>

                <div style={{paddingTop:"30px"}}>
                  <p style={{marginBottom:"0px",color:"#38cab3"}} title="Date of Arrival">2024-10-16</p>
                  <p title="Date of Arrival">DOA</p>
                </div>

                <div style={{paddingTop:"30px"}}>
                  <p style={{marginBottom:"0px",color:"#38cab3"}} title="Date of Delivery">NA</p>
                  <p title="Date of Delivery">DOD</p>
                </div>

              </div>


              <h5 style={{paddingTop:"25px"}}>Repair</h5>
              <div className="row">
                
                  
                <div style={{paddingTop:"5px"}}>
                  <p style={{marginBottom:"0px",color:"#38cab3"}}>NA</p>
                  <p>Inv No(Cust)</p>
                </div>


                <div style={{paddingTop:"5px"}}>
                  <p style={{marginBottom:"0px",color:"#38cab3"}}>0.00</p>
                  <p>Discount</p>
                </div>

                <div style={{paddingTop:"5px"}}>
                  <p style={{marginBottom:"0px",color:"#38cab3"}}>0.00</p>
                  <p>Coupon</p>
                </div>

                <div style={{paddingTop:"5px"}}>
                  <p style={{marginBottom:"0px",color:"#38cab3"}}>0.00</p>
                  <p>Paid(Cust)</p>
                </div>

                <div style={{paddingTop:"5px"}}>
                  <p style={{marginBottom:"0px",color:"#38cab3"}}>0.00</p>
                  <p>Due(Cust)</p>
                </div>

              </div>


              <h5 style={{paddingTop:"25px"}}>Claims</h5>
              <div className="row">
                
                  
                <div style={{paddingTop:"5px"}}>
                  <p style={{marginBottom:"0px",color:"#38cab3"}}>NA</p>
                  <p>Inv No(Ins)</p>
                </div>


                <div style={{paddingTop:"5px"}}>
                  <p style={{marginBottom:"0px",color:"#38cab3"}}>0.00</p>
                  <p>Paid(Ins)</p>
                </div>

                <div style={{paddingTop:"5px"}}>
                  <p style={{marginBottom:"0px",color:"#38cab3"}}>0.00</p>
                  <p>Due(Ins)</p>
                </div>

              </div>

                    
                  {/* </div> */}

                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={12} xl={6} lg={6} xxl={6}>
          <Card>
            <Card.Body>
              <Row className="row-sm">
              <Col xxl={6} lg={12} md={12} className="details  mt-xxl-0 ">
                  


                  <div className="row d-flex justify-content-evenly" style={{backgroundColor:"#38cab3",marginTop:"-20px",marginLeft:"-20px",marginRight:"-20px", paddingTop:"15px"}}>

                      <div className="d-flex">

                        <i class="fa fa-binoculars" style={{fontSize:"30px"}}> </i>

                        <div className="list" style={{paddingLeft:"10px"}}>
                          <p style={{marginBottom:"0px"}} title="Plate Number">AP09BC2034 (Hyderabad)</p>
                         
                        </div>
                      </div>

                      <div className="d-flex">

                          <i class="fa fa-car" style={{fontSize:"30px"}}> </i>

                          <div className="list" style={{paddingLeft:"10px"}}>
                            <p style={{marginBottom:"0px"}} title="Brand-Model-Variant">Ashok Leyland-Stile-LE</p>
                            
                          </div>
                      </div>

                  </div>

                  <div className="row d-flex justify-content-evenly" style={{backgroundColor:"#38cab3",marginLeft:"-20px",marginRight:"-20px",paddingBottom:"15px",paddingTop:"8px"}}>

                      <div className="d-flex">

                        {/* <i class="fa fa-kms" style={{fontSize:"30px"}}> </i> */}

                        <div className="list" style={{paddingLeft:"10px"}} >
                          <p style={{marginBottom:"0px"}} title="Odometer Reading">000000</p>
                         
                        </div>
                      </div>

                      <div className="d-flex ">

                          {/* <i class="fa fa-car" style={{fontSize:"30px"}}> </i> */}

                          <div className="list" style={{paddingLeft:"10px"}}>
                            <p style={{marginBottom:"0px"}} title="Mfg Year">NA | <span title="Vehicle Category">Hot Hatchback</span></p>
                          </div>

                          <div className="list d-flex" style={{paddingLeft:"10px"}}>
                              <button type="button" class="btn  btn-rounded btn btn-dark" fdprocessedid="e5313" title="Fuel Type">NA</button>  
                          </div>

                      </div>

                  </div>

                  {/* <div class="main-contact-action btn-list pt-3 pe-0 me-3"> */}
                  <div className="row d-flex justify-content-flex-start" style={{paddingTop:"30px"}}>

                    <div className="d-flex">
                   
                      <i class="fa fa-user" style={{fontSize:"30px"}}> </i>
                    
                      <div className="list" style={{paddingLeft:"10px"}}>
                        <p style={{marginBottom:"0px"}}>Customer Name</p>
                        <p>FIROZ</p>
                      </div>
                    </div>
                    
                    <div className="d-flex">
                   
                      <i class="fa fa-phone" style={{fontSize:"30px"}}> </i>
                    
                      <div className="list" style={{paddingLeft:"10px"}}>
                        <p style={{marginBottom:"0px"}}>Phone Number</p>
                        <p>8008664384</p>
                      </div>
                    </div>

                    <div className="d-flex">
                   
                      <i class="far fa-user" style={{fontSize:"30px"}}> </i>
                    
                      <div className="list" style={{paddingLeft:"10px"}}>
                        <p style={{marginBottom:"0px"}}>Advisor Name</p>
                        <p>NA</p>
                      </div>
                    </div>


                    

                  </div>


                  <div className="row d-flex justify-content-evenly" style={{paddingTop:"15px"}}>
                    <div className="d-flex">
                   
                      <i class="fa fa-cog" style={{fontSize:"30px"}}> </i>
                    
                      <div className="list" style={{paddingLeft:"10px"}}>
                        <p style={{marginBottom:"0px"}}>Customer Source</p>
                        <p>TRIAL CARS24</p>
                      </div>
                    </div>

                    <div className="d-flex">
                   
                      <i class="fa fa-star" style={{fontSize:"30px"}}> </i>
                    
                      <div className="list" style={{paddingLeft:"10px"}}>
                        <p style={{marginBottom:"0px"}}>Customer Rating</p>
                        {/* Ratings */}
                        <div className="rating mb-1">
                          <div className="stars">
                            <span className="fa fa-star text-muted"></span>
                            <span className="fa fa-star text-muted"></span>
                            <span className="fa fa-star text-muted"></span>
                            <span className="fa fa-star text-muted"></span>
                            <span className="fa fa-star text-muted"></span>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>


                <div className="row justify-content-evenly" style={{paddingTop:"30px"}}>

                  <div>
                    <button type="button" class="btn  btn-rounded btn btn-dark" fdprocessedid="e5313"><i class="fas fa-file-alt"></i></button>
                    <p>Jc/Est</p>
                  </div>

                  <div>
                    <button type="button" class="btn  btn-rounded btn btn-dark" fdprocessedid="e5313"><i class="far fa-thumbs-up"></i></button>
                    <p>Status</p>
                  </div>

                  <div>
                    <button type="button" class="btn  btn-rounded btn btn-dark" fdprocessedid="e5313"><i class="fa fa-history"></i></button>
                    <p>History</p>
                  </div>

                  <div>
                      <button type="button" class="btn  btn-rounded btn btn-dark" fdprocessedid="e5313"><i class="fas fa-dollar-sign"></i></button>
                      <p>Payments</p>
                  </div>

                 
                
                </div>  

                <div className="row justify-content-evenly">

                <div>
                      <button type="button" class="btn  btn-rounded btn btn-dark" fdprocessedid="e5313"><i class="fas fa-percent"></i></button>
                      <p>Discount</p>
                  </div>

                  <div>
                     <button type="button" class="btn  btn-rounded btn btn-dark" fdprocessedid="e5313"><i class="fa fa-print"></i></button>
                     <p>Invoice</p>
                  </div>

                  <div>
                      <button type="button" class="btn  btn-rounded btn btn-dark" fdprocessedid="e5313"><i class="fa fa-ellipsis-v"></i></button>
                      <p>View More</p>
                  </div>

                </div> 

                {/* Stock */}
                <div className="mt-3">
                    <p className="font-weight-normal">
                      <span className="h4">Fuel Percentage</span> 
                    </p>
                    <ProgressBar now={20} animated variant="primary" />
                </div>

              <div className="row">
                <div style={{paddingTop:"30px"}}>
                  <p style={{marginBottom:"0px",color:"#38cab3"}}>JC NO:</p>
                  <p>14</p>
                </div>

                <div style={{paddingTop:"30px"}}>
                  <p style={{marginBottom:"0px",color:"#38cab3"}}>0.00</p>
                  <p>Estimate</p>
                </div>

                <div style={{paddingTop:"30px"}}>
                  <p style={{marginBottom:"0px",color:"#38cab3"}} title="Date of Arrival">2024-10-16</p>
                  <p title="Date of Arrival">DOA</p>
                </div>

                <div style={{paddingTop:"30px"}}>
                  <p style={{marginBottom:"0px",color:"#38cab3"}} title="Date of Delivery">NA</p>
                  <p title="Date of Delivery">DOD</p>
                </div>

              </div>


              <h5 style={{paddingTop:"25px"}}>Repair</h5>
              <div className="row">
                
                  
                <div style={{paddingTop:"5px"}}>
                  <p style={{marginBottom:"0px",color:"#38cab3"}}>NA</p>
                  <p>Inv No(Cust)</p>
                </div>


                <div style={{paddingTop:"5px"}}>
                  <p style={{marginBottom:"0px",color:"#38cab3"}}>0.00</p>
                  <p>Discount</p>
                </div>

                <div style={{paddingTop:"5px"}}>
                  <p style={{marginBottom:"0px",color:"#38cab3"}}>0.00</p>
                  <p>Coupon</p>
                </div>

                <div style={{paddingTop:"5px"}}>
                  <p style={{marginBottom:"0px",color:"#38cab3"}}>0.00</p>
                  <p>Paid(Cust)</p>
                </div>

                <div style={{paddingTop:"5px"}}>
                  <p style={{marginBottom:"0px",color:"#38cab3"}}>0.00</p>
                  <p>Due(Cust)</p>
                </div>

              </div>


              <h5 style={{paddingTop:"25px"}}>Claims</h5>
              <div className="row">
                
                  
                <div style={{paddingTop:"5px"}}>
                  <p style={{marginBottom:"0px",color:"#38cab3"}}>NA</p>
                  <p>Inv No(Ins)</p>
                </div>


                <div style={{paddingTop:"5px"}}>
                  <p style={{marginBottom:"0px",color:"#38cab3"}}>0.00</p>
                  <p>Paid(Ins)</p>
                </div>

                <div style={{paddingTop:"5px"}}>
                  <p style={{marginBottom:"0px",color:"#38cab3"}}>0.00</p>
                  <p>Due(Ins)</p>
                </div>

              </div>

                    
                  {/* </div> */}

                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>


      <Row className="row-sm">
        <Col sm={12} md={12} xl={6} lg={6} xxl={6}>
          <Card>
            <Card.Body>
              <Row className="row-sm">
                <Col xxl={6} lg={12} md={12} className="details  mt-xxl-0 ">
                  


                  <div className="row d-flex justify-content-evenly" style={{backgroundColor:"#38cab3",marginTop:"-20px",marginLeft:"-20px",marginRight:"-20px", paddingTop:"15px"}}>

                      <div className="d-flex">

                        <i class="fa fa-binoculars" style={{fontSize:"30px"}}> </i>

                        <div className="list" style={{paddingLeft:"10px"}}>
                          <p style={{marginBottom:"0px"}} title="Plate Number">AP09BC2034 (Hyderabad)</p>
                         
                        </div>
                      </div>

                      <div className="d-flex">

                          <i class="fa fa-car" style={{fontSize:"30px"}}> </i>

                          <div className="list" style={{paddingLeft:"10px"}}>
                            <p style={{marginBottom:"0px"}} title="Brand-Model-Variant">Ashok Leyland-Stile-LE</p>
                            
                          </div>
                      </div>

                  </div>

                  <div className="row d-flex justify-content-evenly" style={{backgroundColor:"#38cab3",marginLeft:"-20px",marginRight:"-20px",paddingBottom:"15px",paddingTop:"8px"}}>

                      <div className="d-flex">

                        {/* <i class="fa fa-kms" style={{fontSize:"30px"}}> </i> */}

                        <div className="list" style={{paddingLeft:"10px"}} >
                          <p style={{marginBottom:"0px"}} title="Odometer Reading">000000</p>
                         
                        </div>
                      </div>

                      <div className="d-flex ">

                          {/* <i class="fa fa-car" style={{fontSize:"30px"}}> </i> */}

                          <div className="list" style={{paddingLeft:"10px"}}>
                            <p style={{marginBottom:"0px"}} title="Mfg Year">NA | <span title="Vehicle Category">Hot Hatchback</span></p>
                          </div>

                          <div className="list d-flex" style={{paddingLeft:"10px"}}>
                              <button type="button" class="btn  btn-rounded btn btn-dark" fdprocessedid="e5313" title="Fuel Type">NA</button>  
                          </div>

                      </div>

                  </div>

                  {/* <div class="main-contact-action btn-list pt-3 pe-0 me-3"> */}
                  <div className="row d-flex justify-content-flex-start" style={{paddingTop:"30px"}}>

                    <div className="d-flex">
                   
                      <i class="fa fa-user" style={{fontSize:"30px"}}> </i>
                    
                      <div className="list" style={{paddingLeft:"10px"}}>
                        <p style={{marginBottom:"0px"}}>Customer Name</p>
                        <p>FIROZ</p>
                      </div>
                    </div>
                    
                    <div className="d-flex">
                   
                      <i class="fa fa-phone" style={{fontSize:"30px"}}> </i>
                    
                      <div className="list" style={{paddingLeft:"10px"}}>
                        <p style={{marginBottom:"0px"}}>Phone Number</p>
                        <p>8008664384</p>
                      </div>
                    </div>

                    <div className="d-flex">
                   
                      <i class="far fa-user" style={{fontSize:"30px"}}> </i>
                    
                      <div className="list" style={{paddingLeft:"10px"}}>
                        <p style={{marginBottom:"0px"}}>Advisor Name</p>
                        <p>NA</p>
                      </div>
                    </div>


                    

                  </div>


                  <div className="row d-flex justify-content-evenly" style={{paddingTop:"15px"}}>
                    <div className="d-flex">
                   
                      <i class="fa fa-cog" style={{fontSize:"30px"}}> </i>
                    
                      <div className="list" style={{paddingLeft:"10px"}}>
                        <p style={{marginBottom:"0px"}}>Customer Source</p>
                        <p>TRIAL CARS24</p>
                      </div>
                    </div>

                    <div className="d-flex">
                   
                      <i class="fa fa-star" style={{fontSize:"30px"}}> </i>
                    
                      <div className="list" style={{paddingLeft:"10px"}}>
                        <p style={{marginBottom:"0px"}}>Customer Rating</p>
                        {/* Ratings */}
                        <div className="rating mb-1">
                          <div className="stars">
                            <span className="fa fa-star text-muted"></span>
                            <span className="fa fa-star text-muted"></span>
                            <span className="fa fa-star text-muted"></span>
                            <span className="fa fa-star text-muted"></span>
                            <span className="fa fa-star text-muted"></span>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>


                <div className="row justify-content-evenly" style={{paddingTop:"30px"}}>

                  <div>
                    <button type="button" class="btn  btn-rounded btn btn-dark" fdprocessedid="e5313"><i class="fas fa-file-alt"></i></button>
                    <p>Jc/Est</p>
                  </div>

                  <div>
                    <button type="button" class="btn  btn-rounded btn btn-dark" fdprocessedid="e5313"><i class="far fa-thumbs-up"></i></button>
                    <p>Status</p>
                  </div>

                  <div>
                    <button type="button" class="btn  btn-rounded btn btn-dark" fdprocessedid="e5313"><i class="fa fa-history"></i></button>
                    <p>History</p>
                  </div>

                  <div>
                      <button type="button" class="btn  btn-rounded btn btn-dark" fdprocessedid="e5313"><i class="fas fa-dollar-sign"></i></button>
                      <p>Payments</p>
                  </div>

                 
                
                </div>  

                <div className="row justify-content-evenly">

                <div>
                      <button type="button" class="btn  btn-rounded btn btn-dark" fdprocessedid="e5313"><i class="fas fa-percent"></i></button>
                      <p>Discount</p>
                  </div>

                  <div>
                     <button type="button" class="btn  btn-rounded btn btn-dark" fdprocessedid="e5313"><i class="fa fa-print"></i></button>
                     <p>Invoice</p>
                  </div>

                  <div>
                      <button type="button" class="btn  btn-rounded btn btn-dark" fdprocessedid="e5313"><i class="fa fa-ellipsis-v"></i></button>
                      <p>View More</p>
                  </div>

                </div> 

                {/* Stock */}
                <div className="mt-3">
                    <p className="font-weight-normal">
                      <span className="h4">Fuel Percentage</span> 
                    </p>
                    <ProgressBar now={50} animated variant="primary" />
                </div>

              <div className="row">
                <div style={{paddingTop:"30px"}}>
                  <p style={{marginBottom:"0px",color:"#38cab3"}}>JC NO:</p>
                  <p>14</p>
                </div>

                <div style={{paddingTop:"30px"}}>
                  <p style={{marginBottom:"0px",color:"#38cab3"}}>0.00</p>
                  <p>Estimate</p>
                </div>

                <div style={{paddingTop:"30px"}}>
                  <p style={{marginBottom:"0px",color:"#38cab3"}} title="Date of Arrival">2024-10-16</p>
                  <p title="Date of Arrival">DOA</p>
                </div>

                <div style={{paddingTop:"30px"}}>
                  <p style={{marginBottom:"0px",color:"#38cab3"}} title="Date of Delivery">NA</p>
                  <p title="Date of Delivery">DOD</p>
                </div>

              </div>


              <h5 style={{paddingTop:"25px"}}>Repair</h5>
              <div className="row">
                
                  
                <div style={{paddingTop:"5px"}}>
                  <p style={{marginBottom:"0px",color:"#38cab3"}}>NA</p>
                  <p>Inv No(Cust)</p>
                </div>


                <div style={{paddingTop:"5px"}}>
                  <p style={{marginBottom:"0px",color:"#38cab3"}}>0.00</p>
                  <p>Discount</p>
                </div>

                <div style={{paddingTop:"5px"}}>
                  <p style={{marginBottom:"0px",color:"#38cab3"}}>0.00</p>
                  <p>Coupon</p>
                </div>

                <div style={{paddingTop:"5px"}}>
                  <p style={{marginBottom:"0px",color:"#38cab3"}}>0.00</p>
                  <p>Paid(Cust)</p>
                </div>

                <div style={{paddingTop:"5px"}}>
                  <p style={{marginBottom:"0px",color:"#38cab3"}}>0.00</p>
                  <p>Due(Cust)</p>
                </div>

              </div>


              <h5 style={{paddingTop:"25px"}}>Claims</h5>
              <div className="row">
                
                  
                <div style={{paddingTop:"5px"}}>
                  <p style={{marginBottom:"0px",color:"#38cab3"}}>NA</p>
                  <p>Inv No(Ins)</p>
                </div>


                <div style={{paddingTop:"5px"}}>
                  <p style={{marginBottom:"0px",color:"#38cab3"}}>0.00</p>
                  <p>Paid(Ins)</p>
                </div>

                <div style={{paddingTop:"5px"}}>
                  <p style={{marginBottom:"0px",color:"#38cab3"}}>0.00</p>
                  <p>Due(Ins)</p>
                </div>

              </div>

                    
                  {/* </div> */}

                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={12} xl={6} lg={6} xxl={6}>
          <Card>
            <Card.Body>
              <Row className="row-sm">
              <Col xxl={6} lg={12} md={12} className="details  mt-xxl-0 ">
                  


                  <div className="row d-flex justify-content-evenly" style={{backgroundColor:"#38cab3",marginTop:"-20px",marginLeft:"-20px",marginRight:"-20px", paddingTop:"15px"}}>

                      <div className="d-flex">

                        <i class="fa fa-binoculars" style={{fontSize:"30px"}}> </i>

                        <div className="list" style={{paddingLeft:"10px"}}>
                          <p style={{marginBottom:"0px"}} title="Plate Number">AP09BC2034 (Hyderabad)</p>
                         
                        </div>
                      </div>

                      <div className="d-flex">

                          <i class="fa fa-car" style={{fontSize:"30px"}}> </i>

                          <div className="list" style={{paddingLeft:"10px"}}>
                            <p style={{marginBottom:"0px"}} title="Brand-Model-Variant">Ashok Leyland-Stile-LE</p>
                            
                          </div>
                      </div>

                  </div>

                  <div className="row d-flex justify-content-evenly" style={{backgroundColor:"#38cab3",marginLeft:"-20px",marginRight:"-20px",paddingBottom:"15px",paddingTop:"8px"}}>

                      <div className="d-flex">

                        {/* <i class="fa fa-kms" style={{fontSize:"30px"}}> </i> */}

                        <div className="list" style={{paddingLeft:"10px"}} >
                          <p style={{marginBottom:"0px"}} title="Odometer Reading">000000</p>
                         
                        </div>
                      </div>

                      <div className="d-flex ">

                          {/* <i class="fa fa-car" style={{fontSize:"30px"}}> </i> */}

                          <div className="list" style={{paddingLeft:"10px"}}>
                            <p style={{marginBottom:"0px"}} title="Mfg Year">NA | <span title="Vehicle Category">Hot Hatchback</span></p>
                          </div>

                          <div className="list d-flex" style={{paddingLeft:"10px"}}>
                              <button type="button" class="btn  btn-rounded btn btn-dark" fdprocessedid="e5313" title="Fuel Type">NA</button>  
                          </div>

                      </div>

                  </div>

                  {/* <div class="main-contact-action btn-list pt-3 pe-0 me-3"> */}
                  <div className="row d-flex justify-content-flex-start" style={{paddingTop:"30px"}}>

                    <div className="d-flex">
                   
                      <i class="fa fa-user" style={{fontSize:"30px"}}> </i>
                    
                      <div className="list" style={{paddingLeft:"10px"}}>
                        <p style={{marginBottom:"0px"}}>Customer Name</p>
                        <p>FIROZ</p>
                      </div>
                    </div>
                    
                    <div className="d-flex">
                   
                      <i class="fa fa-phone" style={{fontSize:"30px"}}> </i>
                    
                      <div className="list" style={{paddingLeft:"10px"}}>
                        <p style={{marginBottom:"0px"}}>Phone Number</p>
                        <p>8008664384</p>
                      </div>
                    </div>

                    <div className="d-flex">
                   
                      <i class="far fa-user" style={{fontSize:"30px"}}> </i>
                    
                      <div className="list" style={{paddingLeft:"10px"}}>
                        <p style={{marginBottom:"0px"}}>Advisor Name</p>
                        <p>NA</p>
                      </div>
                    </div>


                    

                  </div>


                  <div className="row d-flex justify-content-evenly" style={{paddingTop:"15px"}}>
                    <div className="d-flex">
                   
                      <i class="fa fa-cog" style={{fontSize:"30px"}}> </i>
                    
                      <div className="list" style={{paddingLeft:"10px"}}>
                        <p style={{marginBottom:"0px"}}>Customer Source</p>
                        <p>TRIAL CARS24</p>
                      </div>
                    </div>

                    <div className="d-flex">
                   
                      <i class="fa fa-star" style={{fontSize:"30px"}}> </i>
                    
                      <div className="list" style={{paddingLeft:"10px"}}>
                        <p style={{marginBottom:"0px"}}>Customer Rating</p>
                        {/* Ratings */}
                        <div className="rating mb-1">
                          <div className="stars">
                            <span className="fa fa-star text-muted"></span>
                            <span className="fa fa-star text-muted"></span>
                            <span className="fa fa-star text-muted"></span>
                            <span className="fa fa-star text-muted"></span>
                            <span className="fa fa-star text-muted"></span>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>


                <div className="row justify-content-evenly" style={{paddingTop:"30px"}}>

                  <div>
                    <button type="button" class="btn  btn-rounded btn btn-dark" fdprocessedid="e5313"><i class="fas fa-file-alt"></i></button>
                    <p>Jc/Est</p>
                  </div>

                  <div>
                    <button type="button" class="btn  btn-rounded btn btn-dark" fdprocessedid="e5313"><i class="far fa-thumbs-up"></i></button>
                    <p>Status</p>
                  </div>

                  <div>
                    <button type="button" class="btn  btn-rounded btn btn-dark" fdprocessedid="e5313"><i class="fa fa-history"></i></button>
                    <p>History</p>
                  </div>

                  <div>
                      <button type="button" class="btn  btn-rounded btn btn-dark" fdprocessedid="e5313"><i class="fas fa-dollar-sign"></i></button>
                      <p>Payments</p>
                  </div>

                 
                
                </div>  

                <div className="row justify-content-evenly">

                <div>
                      <button type="button" class="btn  btn-rounded btn btn-dark" fdprocessedid="e5313"><i class="fas fa-percent"></i></button>
                      <p>Discount</p>
                  </div>

                  <div>
                     <button type="button" class="btn  btn-rounded btn btn-dark" fdprocessedid="e5313"><i class="fa fa-print"></i></button>
                     <p>Invoice</p>
                  </div>

                  <div>
                      <button type="button" class="btn  btn-rounded btn btn-dark" fdprocessedid="e5313"><i class="fa fa-ellipsis-v"></i></button>
                      <p>View More</p>
                  </div>

                </div> 

                {/* Stock */}
                <div className="mt-3">
                    <p className="font-weight-normal">
                      <span className="h4">Fuel Percentage</span> 
                    </p>
                    <ProgressBar now={20} animated variant="primary" />
                </div>

              <div className="row">
                <div style={{paddingTop:"30px"}}>
                  <p style={{marginBottom:"0px",color:"#38cab3"}}>JC NO:</p>
                  <p>14</p>
                </div>

                <div style={{paddingTop:"30px"}}>
                  <p style={{marginBottom:"0px",color:"#38cab3"}}>0.00</p>
                  <p>Estimate</p>
                </div>

                <div style={{paddingTop:"30px"}}>
                  <p style={{marginBottom:"0px",color:"#38cab3"}} title="Date of Arrival">2024-10-16</p>
                  <p title="Date of Arrival">DOA</p>
                </div>

                <div style={{paddingTop:"30px"}}>
                  <p style={{marginBottom:"0px",color:"#38cab3"}} title="Date of Delivery">NA</p>
                  <p title="Date of Delivery">DOD</p>
                </div>

              </div>


              <h5 style={{paddingTop:"25px"}}>Repair</h5>
              <div className="row">
                
                  
                <div style={{paddingTop:"5px"}}>
                  <p style={{marginBottom:"0px",color:"#38cab3"}}>NA</p>
                  <p>Inv No(Cust)</p>
                </div>


                <div style={{paddingTop:"5px"}}>
                  <p style={{marginBottom:"0px",color:"#38cab3"}}>0.00</p>
                  <p>Discount</p>
                </div>

                <div style={{paddingTop:"5px"}}>
                  <p style={{marginBottom:"0px",color:"#38cab3"}}>0.00</p>
                  <p>Coupon</p>
                </div>

                <div style={{paddingTop:"5px"}}>
                  <p style={{marginBottom:"0px",color:"#38cab3"}}>0.00</p>
                  <p>Paid(Cust)</p>
                </div>

                <div style={{paddingTop:"5px"}}>
                  <p style={{marginBottom:"0px",color:"#38cab3"}}>0.00</p>
                  <p>Due(Cust)</p>
                </div>

              </div>


              <h5 style={{paddingTop:"25px"}}>Claims</h5>
              <div className="row">
                
                  
                <div style={{paddingTop:"5px"}}>
                  <p style={{marginBottom:"0px",color:"#38cab3"}}>NA</p>
                  <p>Inv No(Ins)</p>
                </div>


                <div style={{paddingTop:"5px"}}>
                  <p style={{marginBottom:"0px",color:"#38cab3"}}>0.00</p>
                  <p>Paid(Ins)</p>
                </div>

                <div style={{paddingTop:"5px"}}>
                  <p style={{marginBottom:"0px",color:"#38cab3"}}>0.00</p>
                  <p>Due(Ins)</p>
                </div>

              </div>

                    
                  {/* </div> */}

                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>


    </Fragment>
  );
};

export default Tabss;
