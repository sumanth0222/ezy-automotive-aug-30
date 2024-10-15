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
                    Bookings
                  </Button>
                  <Button
                    variant=""
                    className="btn ripple btn-secondary mb-2 mb-xl-0 me-2"
                    role="button"
                    onClick={() => second()}
                  >
                    Inspections
                  </Button>
                  <Button
                    variant=""
                    className="btn ripple btn-info mb-2 mb-xl-0"
                    role="button"
                    onClick={() => third()}
                  >
                    Jobs
                  </Button>
                  <Button
                    variant=""
                    className="btn ripple btn-dark mb-2 mb-xl-0"
                    role="button"
                    onClick={() => fourth()}
                  >
                    Orders
                  </Button>
                  <Button
                    variant=""
                    className="btn ripple btn-danger mb-2 mb-xl-0"
                    role="button"
                    onClick={() => fifth()}
                  >
                    Invoices
                  </Button>
                </div>
                <Row className="row-sm">
                  {isFirstCollapsed ? (
                    <div className="col">
                      <div
                        className=" multi-collapse"
                        id="multiCollapseExample1"
                      >
                        <div className="mt-4">
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
                        <div className="mt-4">
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
                      </div>
                    </div>
                  ) : null}
                  {isThirdCollapsed ? (
                    <div className="col">
                      <div
                        className=" multi-collapse"
                        id="multiCollapseExample2"
                      >
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
                    </div>
                  ) : null}
                  {isFourthCollapsed ? (
                    <div className="col">
                      <div
                        className=" multi-collapse"
                        id="multiCollapseExample2"
                      >
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
                    </div>
                  ) : null}
                  {isFifthCollapsed ? (
                    <div className="col">
                      <div
                        className=" multi-collapse"
                        id="multiCollapseExample2"
                      >
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
                <Col xxl={6} lg={12} md={12} className="details mt-4 mt-xxl-0 mt-2">
                  {/* Product Title */}
                  <h4 className="product-title mb-1">
                    Jyothi Fashion Women's Fit & Flare Knee Length Western Frock
                  </h4>
                  <p className="text-muted tx-13 mb-1">
                    Women Red & Grey Checked Casual Frock
                  </p>

                  {/* Ratings */}
                  <div className="rating mb-1">
                    <div className="stars">
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star text-muted"></span>
                      <span className="fa fa-star text-muted"></span>
                    </div>
                    <span className="review-no">41 reviews</span>
                  </div>

                  {/* Price */}
                  <h6 className="price">
                    Current price: <span className="h3 ms-2">$253</span>
                  </h6>
                  <p className="vote">
                    <strong>91%</strong> of buyers enjoyed this product!{" "}
                    <strong>(87 votes)</strong>
                  </p>

                  {/* Stock */}
                  <div className="mb-3">
                    <p className="font-weight-normal">
                      <span className="h4">Hurry Up!</span> Sold:{" "}
                      <span className="text-primary h5">110/150</span> products in stock.
                    </p>
                    <ProgressBar now={60} animated variant="primary" />
                  </div>

                  {/* Sizes */}
                  <div className="sizes d-flex">
                    Sizes:
                    <div className="d-flex">
                      {["s", "m", "l", "xl"].map((size) => (
                        <Form.Label key={size} className="rdiobox mb-0 mx-2">
                          <input type="radio" name="size" value={size} /> <span>{size}</span>
                        </Form.Label>
                      ))}
                    </div>
                  </div>

                  {/* Quantity */}
                  <div className="d-flex mt-2">
                    <div className="mt-2 product-title">Quantity:</div>
                    <div className="d-flex ms-2">
                      <Select
                        value={Optioncategory1.find((opt) => opt.value === value)}
                        onChange={(option) => setValue(option.value)}
                        options={Optioncategory1}
                        placeholder="Select quantity"
                        classNamePrefix="Select2"
                      />
                    </div>
                  </div>

                  {/* Colors */}
                  <div className="colors d-flex me-3 mt-2">
                    <span className="mt-2">Colors:</span>
                    <div className="d-sm-flex d-flex ms-4">
                      {["azure", "indigo", "purple", "pink"].map((color, index) => (
                        <Form.Label key={index} className="colorinput me-2">
                          <input
                            name="color"
                            type="radio"
                            value={color}
                            className="colorinput-input"
                            defaultChecked={index === 0}
                          />
                          <span className={`colorinput-color bg-${color}`}></span>
                        </Form.Label>
                      ))}
                    </div>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={12} xl={6} lg={6} xxl={6}>
          <Card>
            <Card.Body>
              <Row className="row-sm">
                <Col xxl={6} lg={12} md={12} className="details mt-4 mt-xxl-0 mt-2">
                  {/* Product Title */}
                  <h4 className="product-title mb-1">
                    Jyothi Fashion Women's Fit & Flare Knee Length Western Frock
                  </h4>
                  <p className="text-muted tx-13 mb-1">
                    Women Red & Grey Checked Casual Frock
                  </p>

                  {/* Ratings */}
                  <div className="rating mb-1">
                    <div className="stars">
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star text-muted"></span>
                      <span className="fa fa-star text-muted"></span>
                    </div>
                    <span className="review-no">41 reviews</span>
                  </div>

                  {/* Price */}
                  <h6 className="price">
                    Current price: <span className="h3 ms-2">$253</span>
                  </h6>
                  <p className="vote">
                    <strong>91%</strong> of buyers enjoyed this product!{" "}
                    <strong>(87 votes)</strong>
                  </p>

                  {/* Stock */}
                  <div className="mb-3">
                    <p className="font-weight-normal">
                      <span className="h4">Hurry Up!</span> Sold:{" "}
                      <span className="text-primary h5">110/150</span> products in stock.
                    </p>
                    <ProgressBar now={60} animated variant="primary" />
                  </div>

                  {/* Sizes */}
                  <div className="sizes d-flex">
                    Sizes:
                    <div className="d-flex">
                      {["s", "m", "l", "xl"].map((size) => (
                        <Form.Label key={size} className="rdiobox mb-0 mx-2">
                          <input type="radio" name="size" value={size} /> <span>{size}</span>
                        </Form.Label>
                      ))}
                    </div>
                  </div>

                  {/* Quantity */}
                  <div className="d-flex mt-2">
                    <div className="mt-2 product-title">Quantity:</div>
                    <div className="d-flex ms-2">
                      <Select
                        value={Optioncategory1.find((opt) => opt.value === value)}
                        onChange={(option) => setValue(option.value)}
                        options={Optioncategory1}
                        placeholder="Select quantity"
                        classNamePrefix="Select2"
                      />
                    </div>
                  </div>

                  {/* Colors */}
                  <div className="colors d-flex me-3 mt-2">
                    <span className="mt-2">Colors:</span>
                    <div className="d-sm-flex d-flex ms-4">
                      {["azure", "indigo", "purple", "pink"].map((color, index) => (
                        <Form.Label key={index} className="colorinput me-2">
                          <input
                            name="color"
                            type="radio"
                            value={color}
                            className="colorinput-input"
                            defaultChecked={index === 0}
                          />
                          <span className={`colorinput-color bg-${color}`}></span>
                        </Form.Label>
                      ))}
                    </div>
                  </div>
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
