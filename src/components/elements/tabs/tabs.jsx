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
import { Inspection, contact, countries, payment, cs } from "../../../common/selectdata";
import Draggable from 'react-draggable';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
} from "@mui/material";


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



  // Draggable
  function PaperComponent(props) {
    return (
      <Draggable
        handle="#draggable-dialog-title"
        cancel={'[class*="MuiDialogContent-root"]'}
      >
        <Paper {...props} />
      </Draggable>,

      <Draggable
        handle="#draggable-dialog-title1"
        cancel={'[class*="MuiDialogContent-root"]'}
      >
        <Paper {...props} />
      </Draggable>,


      <Draggable
        handle="#draggable-dialog-title2"
        cancel={'[class*="MuiDialogContent-root"]'}
      >
        <Paper {...props} />
      </Draggable>,

      <Draggable
        handle="#draggable-dialog-title3"
        cancel={'[class*="MuiDialogContent-root"]'}
      >
        <Paper {...props} />
      </Draggable>,

      <Draggable
        handle="#draggable-dialog-title4"
        cancel={'[class*="MuiDialogContent-root"]'}
      >
        <Paper {...props} />
      </Draggable>,


      <Draggable
        handle="#draggable-dialog-title5"
        cancel={'[class*="MuiDialogContent-root"]'}
      >
        <Paper {...props} />
      </Draggable>,

      <Draggable
        handle="#draggable-dialog-title6"
        cancel={'[class*="MuiDialogContent-root"]'}
      >
        <Paper {...props} />
      </Draggable>


    );
  }


  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);




  const handleClickStatus = () => {
    setOpen1(true);
  };
  const handleClosedraggable1 = () => {
    setOpen1(false);
  };

  const handleClickHistory = () => {
    setOpen2(true);
  };
  const handleClosedraggable2 = () => {
    setOpen2(false);
  };

  const handleClickPayments = () => {
    setOpen3(true);
  };
  const handleClosedraggable3 = () => {
    setOpen3(false);
  };

  const handleClickDiscount = () => {
    setOpen4(true);
  };
  const handleClosedraggable4 = () => {
    setOpen4(false);
  };

  const handleClickInvoice = () => {
    setOpen5(true);
  };
  const handleClosedraggable5 = () => {
    setOpen5(false);
  };

  const handleClickViewMore = () => {
    setOpen6(true);
  };
  const handleClosedraggable6 = () => {
    setOpen6(false);
  };

  return (
    <Fragment>
      <Pageheader title="Transaction Centre" heading="Pages" active="Transaction Centre" />
      <Row className="row-sm">
        <Col xl={12}>
          <Card className="mg-b-20" id="tabs-style3">
            <Card.Body className="py-0">
              <div className="d-flex justify-content-between align-items-center">
                <div className="main-content-label ">Transaction Centre / Service Queue</div>
                <div className="mt-2 d-lg-flex form-group">
                  <span>
                    <input
                      autoComplete="off"
                      placeholder="Search..."
                      type="search"
                      className="form-control shadow rounded"
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

              <Row className="p-0">

                <Col lg={12} md={12} className="p-0">
                  <Card className="custom-card p-0">
                    <Card.Body className="px-0">

                      <div>
                        <div className="btn-list">
                          <Button
                            variant=""

                            className="btn ripple  shadow"

                            role="button"
                            onClick={() => first()}
                          >
                            <Row className="justify-content-center align-items-center">
                              <Col>
                                <i className="fa fa-wrench" />
                              </Col>

                              <Col style={{ fontSize: "10px", fontWeight: "400" }}>
                                Under <br />
                                Servicing
                              </Col>
                              <Col>
                                <span className="badge bg-danger ms-2">6</span>
                              </Col>
                            </Row>
                          </Button>
                          <Button
                            variant=""
                            className="btn ripple  shadow"
                            role="button"
                            onClick={() => second()}
                          >
                            <Row className="justify-content-center align-items-center">
                              <Col lg={2}>
                                <i className="fa fa-table" />
                              </Col>
                              <Col lg={6} style={{ fontSize: "10px", fontWeight: "400" }}>
                                Next Day<br />
                                Delivery
                              </Col>
                              <Col lg={2}>
                                <span className="badge bg-danger ms-2">2</span>
                              </Col>
                            </Row>
                          </Button>
                          <Button
                            variant=""
                            className="btn ripple  shadow"
                            role="button"
                            onClick={() => third()}
                          >
                            <Row className="justify-content-center align-items-center">
                              <Col>
                                <i className="far fa-calendar-check" />
                              </Col>
                              <Col style={{ fontSize: "10px", fontWeight: "400" }}>
                                Upcoming <br />
                                Delivery
                              </Col>
                              <Col>
                                <span className="badge bg-danger ms-2">6</span>
                              </Col>


                            </Row>
                          </Button>
                          <Button
                            variant=""
                            className="btn ripple  shadow"
                            role="button"
                            onClick={() => fourth()}
                          >
                            <Row className="justify-content-center align-items-center">
                              <Col lg={2}>
                                <i className="fa fa-truck" />
                              </Col>
                              <Col lg={7} style={{ fontSize: "10px", fontWeight: "400" }}>
                                Ready for<br />
                                Delivery
                              </Col>
                              <Col lg={2}>
                                <span className="badge bg-danger ms-2">1</span>
                              </Col>
                            </Row>
                          </Button>
                          <Button
                            variant=""
                            className="btn ripple  shadow"
                            role="button"
                            onClick={() => fifth()}
                          >
                            <Row className="justify-content-center align-items-center">
                              <Col> <i className="far fa-file-alt" /></Col>
                              <Col style={{ fontSize: "10px", fontWeight: "400" }}>
                                Payment<br />
                                Processing
                              </Col>
                              <Col>
                                <span className="badge bg-danger ms-2">2</span>
                              </Col>
                            </Row>
                          </Button>
                          <Button
                            variant=""
                            className="btn ripple  shadow"
                            role="button"
                            onClick={() => fifth()}
                          >
                            <Row className="justify-content-center align-items-center">
                              <Col>
                                <i className="far fa-file-alt" />
                              </Col>
                              <Col style={{ fontSize: "10px", fontWeight: "400" }}>

                                Completed<br />
                                Service
                              </Col>
                              <Col>
                                <span className="badge bg-danger ms-2">2</span>
                              </Col>
                            </Row>


                          </Button>
                        </div>


                        <Row className="row-sm">
                          {isFirstCollapsed ? (
                            <div className="col">
                              <div
                                className=" multi-collapse"
                                id="multiCollapseExample1"
                              >
                                <div class="d-flex mt-2">

                                  <select class=" mb-2 selectpage border me-1" fdprocessedid="53840a">
                                    <option value="10">Show 10</option>
                                    <option value="25">Show 25</option>
                                    <option value="50">Show 50</option>
                                  </select>

                                  <div>
                                    <button type="button" class="btn  btn-rounded btn btn-dark" fdprocessedid="e5313">Excel</button>
                                  </div>

                                  <span class="d-flex ms-auto">
                                    <input class="form-control mb-2" placeholder="Search..." value="" fdprocessedid="phgiff" />
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
                                    <input class="form-control mb-4" placeholder="Search..." value="" fdprocessedid="phgiff" />
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
                                    <input class="form-control mb-4" placeholder="Search..." value="" fdprocessedid="phgiff" />
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
                                    <input class="form-control mb-4" placeholder="Search..." value="" fdprocessedid="phgiff" />
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
                                    <input class="form-control mb-4" placeholder="Search..." value="" fdprocessedid="phgiff" />
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
        <Col sm={12} md={12} xl={12} lg={12} xxl={12}>
          <Card className="shadow " style={{ borderRadius: "10px" }}>
            <Card.Body>
              <Row className="row-sm border-bottom">
                <Col xxl={12} lg={12} md={12} className="details  mt-xxl-0 ">

                  <div className="row d-flex justify-content-between border-bottom shadow rounded" style={{ backgroundColor: "#38cab3", marginTop: "-10px", marginLeft: "0px", marginRight: "0px", paddingTop: "1px" }}>

                    <div className="d-flex align-items-center">

                      <i class="fa fa-binoculars text-light" style={{ fontSize: "15px" }}> </i>

                      <div className="list" style={{ paddingLeft: "10px" }}>
                        <p style={{ marginBottom: "0px" }} title="Plate Number">AP09BC2034 <b className="text-light">(Hyderabad)</b></p>

                      </div>
                    </div>

                    <div className="d-flex align-items-center">

                      <i class="fa fa-car text-light" style={{ fontSize: "15px" }}> </i>

                      <div className="list" style={{ paddingLeft: "10px" }}>
                        <p style={{ marginBottom: "0px" }} title="Brand-Model-Variant">Ashok Leyland-Stile-LE</p>

                      </div>
                    </div>

                    <div className="d-flex align-items-center">

                      {/* <i class="fa fa-kms" style={{fontSize:"15px"}}> </i> */}

                      <div className="list" >
                        <p style={{ marginBottom: "0px" }} title="Odometer Reading"><i className="fas fa-tachometer-alt text-light" /> 000000</p>

                      </div>
                    </div>

                    <div className="d-flex align-items-center">

                      {/* <i class="fa fa-car" style={{fontSize:"15px"}}> </i> */}

                      <div className="list" style={{ paddingLeft: "10px" }}>
                        <p style={{ marginBottom: "0px" }} title="Mfg Year">NA | <span title="Vehicle Category">Hot Hatchback</span></p>
                      </div>

                      <div className="list d-flex" style={{ paddingLeft: "10px" }}>
                        <button type="button" class="btn  btn-rounded btn btn-dark" fdprocessedid="e5313" title="Fuel Type">NA</button>
                      </div>

                    </div>

                  </div>

                  {/* <div class="main-contact-action btn-list pt-3 pe-0 me-3"> */}
                  <div className="row d-flex justify-content-flex-start border-bottom mb-2" style={{ paddingTop: "30px" }}>

                    <div className="d-flex">

                      <i class="fa fa-user" style={{ fontSize: "15px" }}> </i>

                      <div className="list" style={{ paddingLeft: "10px" }}>
                        <p style={{ marginBottom: "0px" }}>Customer Name</p>
                        <p><b className="shadow">Bharath</b></p>
                      </div>
                    </div>

                    <div className="d-flex ">

                      <i class="fa fa-phone" style={{ fontSize: "15px" }}> </i>

                      <div className="list" style={{ paddingLeft: "10px" }}>
                        <p style={{ marginBottom: "0px" }}>Phone Number</p>
                        <p><b className="shadow">8008664384</b></p>
                      </div>
                    </div>

                    <div className="d-flex">

                      <i class="far fa-user" style={{ fontSize: "15px" }}> </i>

                      <div className="list" style={{ paddingLeft: "10px" }}>
                        <p style={{ marginBottom: "0px" }}>Advisor Name</p>
                        <p>NA</p>
                      </div>
                    </div>


                    <div className="d-flex">

                      <i class="fa fa-cog" style={{ fontSize: "15px" }}> </i>

                      <div className="list" style={{ paddingLeft: "10px" }}>
                        <p style={{ marginBottom: "0px" }}>Customer Source</p>
                        <p><b className="shadow rounded">TRIAL CARS24</b></p>
                      </div>
                    </div>

                    <div className="d-flex">

                      <i class="fa fa-star" style={{ fontSize: "15px" }}> </i>

                      <div className="list" style={{ paddingLeft: "10px" }}>
                        <p style={{ marginBottom: "0px" }}>Customer Rating</p>
                        {/* Ratings */}
                        <div className="rating mb-1">
                          <div className="stars">
                            <span className="fa fa-star text-primary"></span>
                            <span className="fa fa-star text-primary"></span>
                            <span className="fa fa-star text-muted"></span>
                            <span className="fa fa-star text-muted"></span>
                            <span className="fa fa-star text-muted"></span>
                          </div>
                        </div>
                      </div>

                    </div>

                    <Col xxl={2} lg={2} md={12} >
                      <p className="font-weight-normal">
                        <span className="h6">Fuel Percentage</span>
                      </p>
                      <ProgressBar now={80} animated variant="primary" style={{ height: "5px" }} />
                    </Col>
                  </div>

                  <div className="row border-bottom mb-2" style={{ paddingTop: "0px" }}>
                    <Col xxl={7} lg={7} md={12} className="d-flex justify-content-between">

                      <div>
                        <button type="button" class="btn  btn-rounded btn btn-dark" fdprocessedid="e5313"><i class="fas fa-file-alt"></i></button>
                        <p style={{ fontSize: "10px" }}>Jc/Est</p>
                      </div>

                      <div>
                        <button type="button" class="btn  btn-rounded btn btn-dark" fdprocessedid="e5313" onClick={handleClickStatus}>
                          <i class="far fa-thumbs-up"></i>
                        </button>
                        <p style={{ fontSize: "10px" }}>Status</p>
                        <Dialog
                          open={open1}
                          onClose={handleClosedraggable1}
                          PaperComponent={PaperComponent}
                          aria-labelledby="draggable-dialog-title1"
                        >

                          <DialogTitle style={{ cursor: "move", backgroundColor: "#38cab3", color: "#fff" }} id="draggable-dialog-title1">
                            Vehicle Ready
                          </DialogTitle>

                          <DialogContent >
                            <DialogContentText className='row-sm row'>

                              <div className="row"> 
                               <p>Dear Workshop,</p>
                            
                               <p>Estimation is not completed for this jobcard.</p>
                              </div>
                              {/* <div className="col-lg-6">
                                          <label className="form-label" htmlFor="validationCustom05">Company Name*</label>
                                          <input className="form-control" id="validationCustom05" type="text" placeholder='Enter Company Name' required />
                                        </div>
                                        <div className="col-lg-6">
                                          <label className="form-label" htmlFor="validationCustom05">GST Number*</label>
                                          <input className="form-control" id="validationCustom05" type="text" placeholder='Enter GSTIN Number' required />
                                        </div>
                                        <div className="col-lg-6">
                                          <label className="form-label" htmlFor="validationCustom05">Email Id*</label>
                                          <input className="form-control" id="validationCustom05" type="text" placeholder='Enter Email Id' required />
                                        </div>
                                        <div className="col-lg-6">
                                          <label className="form-label" htmlFor="validationCustom05">Contact Number*</label>
                                          <input className="form-control" id="validationCustom05" type="text" placeholder='Enter Contact Number' required />
                                        </div>
                                        
                                        <div className="col-lg-6">
                                          <label className="form-label" htmlFor="validationCustom05">City</label>
                                          <input className="form-control" id="validationCustom05" type="text" placeholder='Enter City' required />
                                        </div>
                                        <div className="col-lg-6">
                                          <label className="form-label" htmlFor="validationCustom05">State</label>
                                          <input className="form-control" id="validationCustom05" type="text" placeholder='Enter State' required />
                                        </div>
                                        <div className="col-lg-6">
                                          <label className="form-label" htmlFor="validationCustom05">SMS Remainders</label>
                                          <MultiSelect
                                            value={selected}
                                            onChange={setSelected}
                                            labelledBy="Select"
                                            options={countries}
                                          />
                                        </div> */}



                            </DialogContentText>
                          </DialogContent>

                          <DialogActions>
                            <Button variant="secondary" className="me-1" onClick={handleClosedraggable1}>
                              Ok
                            </Button>
                            {/* <Button className="me-1" variant="success">
                              Save
                            </Button> */}
                          </DialogActions>
                        </Dialog>
                      </div>

                      <div>
                        <button type="button" class="btn  btn-rounded btn btn-dark" fdprocessedid="e5313" onClick={handleClickHistory}>
                          <i class="fa fa-history"></i></button>
                        <p style={{ fontSize: "10px" }}>History</p>
                        <Dialog
                          open={open2}
                          onClose={handleClosedraggable2}
                          PaperComponent={PaperComponent}
                          aria-labelledby="draggable-dialog-title2"
                        >

                          <DialogTitle style={{ cursor: "move", backgroundColor: "#38cab3", color: "#fff" }} id="draggable-dialog-title2">
                            Vehicle History
                          </DialogTitle>

                          <DialogContent >
                            <DialogContentText className='row-sm row'>

                              <p>Choose your option:</p>

                    
                            </DialogContentText>
                          </DialogContent>

                          <DialogActions>
                            <Button variant="secondary" className="me-1" onClick={handleClosedraggable2}>
                              Close
                            </Button>
                            <Button className="me-1" variant="success">
                              Internal History
                            </Button>
                            <Button className="me-1" variant="success">
                              RAMP Garages
                            </Button>
                          </DialogActions>
                        </Dialog>
                      </div>

                      <div>
                        <button type="button" class="btn  btn-rounded btn btn-dark" fdprocessedid="e5313" onClick={handleClickPayments}>
                          <i class="fas fa-dollar-sign"></i></button>
                        <p style={{ fontSize: "10px" }}>Payments</p>
                        <Dialog
                          open={open3}
                          onClose={handleClosedraggable3}
                          PaperComponent={PaperComponent}
                          aria-labelledby="draggable-dialog-title3"
                        >

                          <DialogTitle style={{ cursor: "move", backgroundColor: "#38cab3", color: "#fff" }} id="draggable-dialog-title3">
                            Edit Payment Details
                            <p className="mt-2">Order Id: 11 | Total Amount: Rs: 0.00 | Total Discount: Rs: 0.00 | Total Paid:Rs: 0.00 | Total Due: Rs: 0.00</p>
                          </DialogTitle>

                          <DialogContent >
                            <DialogContentText className='row-sm row'>



                            <div className="mt-2 col-lg-12">
                                  <div className="table-responsive mt-4">
                                    <table className="table table-bordered text-nowrap border-bottom" >
                                      
                                      <tbody>
                                        <tr>

                                          <td>1</td>
                                          <td>To Be Paid By Customer :</td>
                                         <td>Rs: 0.00</td>

                                        </tr>
                                        <tr>
                                          <td>2</td>
                                          <td>Total Paid By Customer :</td>
                                          <td>	Rs: 0</td>
                                          
                                        </tr>
                                        <tr>
                                          <td>3</td>
                                          <td>Total Due From Customer :</td>
                                          <td>Rs: 0</td>
                                          
                                         
                                        </tr>
                                        
                                      </tbody>
                                    </table>
                                  </div>
                                </div>




                              <div className="col-lg-4">
                                <Button className="mt-3" variant="success">
                                   Pay By Card
                                </Button>
                              </div>
                              <div className="col-lg-4">
                          
                                <input className="form-control mt-3" id="validationCustom05" type="text" placeholder='Enter Amount' required />
                              </div>
                              <div className="col-lg-4">
                                
                                <input className="form-control mt-3" id="validationCustom05" type="text" placeholder='Enter Remarks' required />
                              </div>

                              <div className="col-lg-4">
                                <Button className="mt-3" variant="success">
                                   Pay By Cash
                                </Button>
                              </div>
                              <div className="col-lg-4">
                          
                                <input className="form-control mt-3" id="validationCustom05" type="text" placeholder='Enter Amount' required />
                              </div>
                              <div className="col-lg-4">
                                
                                <input className="form-control mt-3" id="validationCustom05" type="text" placeholder='Enter Remarks' required />
                              </div>


                              <div className="col-lg-4">
                                <Button className="mt-3" variant="success">
                                   Pay By Cheque
                                </Button>
                              </div>
                              <div className="col-lg-4">
                          
                                <input className="form-control mt-3" id="validationCustom05" type="text" placeholder='Enter Amount' required />
                              </div>
                              <div className="col-lg-4">
                                
                                <input className="form-control mt-3" id="validationCustom05" type="text" placeholder='Enter Remarks' required />
                              </div>


                              <div className="col-lg-4">
                                <Button className="mt-3" variant="success">
                                   Pay By Other
                                </Button>
                              </div>
                              <div className="col-lg-4">
                          
                                <input className="form-control mt-3" id="validationCustom05" type="text" placeholder='Enter Amount' required />
                              </div>
                              <div className="col-lg-4">
                                
                                <input className="form-control mt-3" id="validationCustom05" type="text" placeholder='Enter Remarks' required />
                              </div>


                              <div>
                                <p className="mt-3" ><a href="#">TERMS AND CONDITIONS</a> </p>
                              </div>

                            </DialogContentText>
                          </DialogContent>

                          <DialogActions>
                            <Button variant="secondary" className="me-1" onClick={handleClosedraggable3}>
                              Close
                            </Button>
                            <Button className="me-1" variant="success">
                              Edit
                            </Button>
                          </DialogActions>
                        </Dialog>
                      </div>

                      <div>
                        <button type="button" class="btn  btn-rounded btn btn-dark" fdprocessedid="e5313" onClick={handleClickDiscount}>
                          <i class="fas fa-percent"></i></button>
                        <p style={{ fontSize: "10px" }}>Discount</p>
                        <Dialog
                          open={open4}
                          onClose={handleClosedraggable4}
                          PaperComponent={PaperComponent}
                          aria-labelledby="draggable-dialog-title4"
                        >

                          <DialogTitle style={{ cursor: "move", backgroundColor: "#38cab3", color: "#fff" }} id="draggable-dialog-title4">
                            Alert!
                          </DialogTitle>

                          <DialogContent >
                            <DialogContentText className='row-sm row'>

                              <p className="mt-3">Either the bill is not ready or the due amount equal to or less than 0.</p>
                            </DialogContentText>
                          </DialogContent>

                          <DialogActions>
                            <Button variant="secondary" className="me-1" onClick={handleClosedraggable4}>
                              OK
                            </Button>
                            
                          </DialogActions>
                        </Dialog>
                      </div>

                      <div>
                        <button type="button" class="btn  btn-rounded btn btn-dark" fdprocessedid="e5313" onClick={handleClickInvoice}>
                          <i class="fa fa-print"></i></button>
                        <p style={{ fontSize: "10px" }}>Invoice</p>
                        <Dialog
                          open={open5}
                          onClose={handleClosedraggable5}
                          PaperComponent={PaperComponent}
                          aria-labelledby="draggable-dialog-title5"
                        >

                          <DialogTitle style={{ cursor: "move", backgroundColor: "#38cab3", color: "#fff" }} id="draggable-dialog-title5">
                            Message!
                          </DialogTitle>

                          <DialogContent >
                            <DialogContentText className='row-sm row'>
                              <div className="row">
                               <p>Dear Workshop,</p>
                               <p>Either estimation is empty or vehicle is not marked ready!</p>
                              </div>

                            </DialogContentText>
                          </DialogContent>

                          <DialogActions>
                            <Button variant="secondary" className="me-1" onClick={handleClosedraggable5}>
                              OK
                            </Button>
                            
                          </DialogActions>
                        </Dialog>
                      </div>

                      <div>
                        <button type="button" class="btn  btn-rounded btn btn-dark" fdprocessedid="e5313" onClick={handleClickViewMore}>
                          <i class="fa fa-ellipsis-v"></i></button>
                        <p style={{ fontSize: "10px" }}>View More</p>
                        <Dialog
                          open={open6}
                          onClose={handleClosedraggable6}
                          PaperComponent={PaperComponent}
                          aria-labelledby="draggable-dialog-title6"
                        >

                          <DialogTitle style={{ cursor: "move", fontSize:"13px", backgroundColor: "#38cab3", color: "#fff" }} id="draggable-dialog-title6">
                            Job Card No : 11
                            <div className="row">
                                <div>
                                  <p className="mt-2" style={{marginTop:"0px", marginBottom:"0px"}}>Vehicle Number</p>
                                  <p>4455RDFF</p>
                                </div>
                                <div>
                                  <p className="mt-2" style={{marginTop:"0px", marginBottom:"0px"}}>Customer Name</p>
                                  <p>TRIAL CUSTOMER 6</p>
                                </div>
                            </div>

                            <div className="row">
                                <div>
                                  <p className="mt-2" style={{marginTop:"0px", marginBottom:"0px"}}>Vehicle Name</p>
                                  <p>Toyota-Land Cruiser-200</p>
                                </div>
                                <div>
                                  <p className="mt-2" style={{marginTop:"0px", marginBottom:"0px"}}>Phone Number</p>
                                  <p>7878888888</p>
                                </div>
                            </div>
                          </DialogTitle>

                          <DialogContent >
                            <DialogContentText className='row-sm row'>

                              <div className="col-lg-12 mt-3">
                                <Button className="me-1" variant="success">
                                  Edit
                                </Button>
                              </div>

                              <div className="row col-lg-12 mt-3">

                                  <div className="col-lg-2">
                                    <button type="button" class="btn  btn-rounded btn btn-dark" fdprocessedid="e5313"><i class="fa fa-user"></i></button>
                                    <p style={{ fontSize: "10px" }}>Profile</p>
                                  </div>

                                  <div className="col-lg-2">
                                    <button type="button" class="btn  btn-rounded btn btn-dark" fdprocessedid="e5313"><i class="fa fa-address-card"></i></button>
                                    <p style={{ fontSize: "10px" }}>RC</p>
                                  </div>

                                  <div className="col-lg-2">
                                    <button type="button" class="btn  btn-rounded btn btn-dark" fdprocessedid="e5313"><i class="fa fa-adjust"></i></button>
                                    <p style={{ fontSize: "10px" }}>Insurance</p>
                                  </div>

                              </div>

                              <hr className="col-lg-12" style={{border:"1px solid #666"}}></hr>


                              <div className="col-lg-12 mt-3">
                                <Button className="me-1" variant="success">
                                  Manage
                                </Button>
                              </div>

                              <div className="row col-lg-12 mt-3">

                                  <div className="col-lg-2">
                                    <button type="button" class="btn  btn-rounded btn btn-dark" fdprocessedid="e5313"><i class="fa fa-upload"></i></button>
                                    <p style={{ fontSize: "10px" }}>Images</p>
                                  </div>

                                  <div className="col-lg-2">
                                    <button type="button" class="btn  btn-rounded btn btn-dark" fdprocessedid="e5313"><i class="fa fa-user-secret"></i></button>
                                    <p style={{ fontSize: "10px" }}>Cust-Source</p>
                                  </div>

                                  <div className="col-lg-2">
                                    <button type="button" class="btn  btn-rounded btn btn-dark" fdprocessedid="e5313"><i class="fa fa-wrench"></i></button>
                                    <p style={{ fontSize: "10px" }}>Technicians</p>
                                  </div>

                                  <div className="col-lg-2">
                                    <button type="button" class="btn  btn-rounded btn btn-dark" fdprocessedid="e5313"><i class="fa fa-car"></i></button>
                                    <p style={{ fontSize: "10px" }}>Claims</p>
                                  </div>

                                  <div className="col-lg-2">
                                    <button type="button" class="btn  btn-rounded btn btn-dark" fdprocessedid="e5313"><i class="fa fa-spinner"></i></button>
                                    <p style={{ fontSize: "10px" }}>Salvage</p>
                                  </div>

                                  <div className="col-lg-2">
                                    <button type="button" class="btn  btn-rounded btn btn-dark" fdprocessedid="e5313"><i class="far fa-id-card"></i></button>
                                    <p style={{ fontSize: "10px" }}>Coupons</p>
                                  </div>

                                  <div className="col-lg-2">
                                    <button type="button" class="btn  btn-rounded btn btn-dark" fdprocessedid="e5313"><i class="fa fa-bell"></i></button>
                                    <p style={{ fontSize: "10px" }}>Alert</p>
                                  </div>

                                  <div className="col-lg-2">
                                    <button type="button" class="btn  btn-rounded btn btn-dark" fdprocessedid="e5313"><i class="fa fa-star"></i></button>
                                    <p style={{ fontSize: "10px" }}>Feedback</p>
                                  </div>

                              </div>

                              <hr className="col-lg-12" style={{border:"1px solid #666"}}></hr>

                              


                              <div className="col-lg-12 mt-3">
                                <Button className="me-1" variant="success">
                                  Closure
                                </Button>
                              </div>

                              <div className="row col-lg-12 mt-3">

                                  <div className="col-lg-2">
                                    <button type="button" class="btn  btn-rounded btn btn-dark" fdprocessedid="e5313"><i class="far fa-address-card"></i></button>
                                    <p style={{ fontSize: "10px" }}>Gate Pass</p>
                                  </div>

                                  <div className="col-lg-2">
                                    <button type="button" class="btn  btn-rounded btn btn-dark" fdprocessedid="e5313"><i class="fa fa-flag-checkered"></i></button>
                                    <p style={{ fontSize: "10px" }}>Done</p>
                                  </div>

                                  <div className="col-lg-2">
                                    <button type="button" class="btn  btn-rounded btn btn-dark" fdprocessedid="e5313"><i class="fa fa-trash"></i></button>
                                    <p style={{ fontSize: "10px" }}>Delete</p>
                                  </div>

                              </div>


                            </DialogContentText>
                          </DialogContent>

                          <DialogActions>
                            <Button variant="secondary" className="me-1" onClick={handleClosedraggable6}>
                              Close
                            </Button>
                           
                          </DialogActions>
                        </Dialog>
                      </div>
                    </Col>
                    <Col xxl={5} lg={5} md={12} className="d-flex justify-content-between align-items-center">

                      <p className="d-flex align-items-center bg-primary rounded px-2 py-0 shadow" style={{ color: "#fff", height: "20px" }}><b>JC NO:&nbsp;</b> 14</p>



                      <div style={{ paddingTop: "10px" }}>
                        <p style={{ marginBottom: "0px", color: "#38cab3" }}>0.00</p>
                        <p>Estimate</p>
                      </div>
                      <div className="border-end"></div>
                      <div className="" style={{ paddingTop: "10px" }}>
                        <p style={{ marginBottom: "0px", color: "#38cab3" }} title="Date of Arrival">2024-10-16</p>
                        <p title="Date of Arrival">DOA</p>
                      </div>

                      <div style={{ paddingTop: "10px" }}>
                        <p style={{ marginBottom: "0px", color: "#38cab3" }} title="Date of Delivery">NA</p>
                        <p title="Date of Delivery">DOD</p>
                      </div>
                    </Col>

                  </div>


                  {/* Stock */}
                  <div className=" row ">



                    <Col xxl={7} lg={7} md={12} >

                      <div className="d-flex justify-content-between align-items-center">
                        <h6 className="bg-primary px-2 py-1  rounded shadow" style={{ fontSize: "10px" }}>Repair:</h6>
                        <div style={{ paddingTop: "5px" }}>
                          <p style={{ marginBottom: "0px", color: "#38cab3" }}>NA</p>
                          <p>Inv No(Cust)</p>
                        </div>


                        <div style={{ paddingTop: "5px" }}>
                          <p style={{ marginBottom: "0px", color: "#38cab3" }}>0.00</p>
                          <p>Discount</p>
                        </div>

                        <div style={{ paddingTop: "5px" }}>
                          <p style={{ marginBottom: "0px", color: "#38cab3" }}>0.00</p>
                          <p>Coupon</p>
                        </div>

                        <div style={{ paddingTop: "5px" }}>
                          <p style={{ marginBottom: "0px", color: "#38cab3" }}>0.00</p>
                          <p>Paid(Cust)</p>
                        </div>

                        <div style={{ paddingTop: "5px" }}>
                          <p style={{ marginBottom: "0px", color: "#38cab3" }}>0.00</p>
                          <p>Due(Cust)</p>
                        </div>
                      </div>
                    </Col>

                    <Col xxl={5} lg={5} md={12} >

                      <div className="d-flex justify-content-between align-items-center">
                        <h6 className="bg-primary px-2 py-1 rounded shadow" style={{ fontSize: "10px" }}>Claims:</h6>
                        <div style={{ paddingTop: "5px" }}>
                          <p style={{ marginBottom: "0px", color: "#38cab3" }}>NA</p>
                          <p>Inv No(Ins)</p>
                        </div>


                        <div style={{ paddingTop: "5px" }}>
                          <p style={{ marginBottom: "0px", color: "#38cab3" }}>0.00</p>
                          <p>Paid(Ins)</p>
                        </div>

                        <div style={{ paddingTop: "5px" }}>
                          <p style={{ marginBottom: "0px", color: "#38cab3" }}>0.00</p>
                          <p>Due(Ins)</p>
                        </div>
                      </div>
                    </Col>

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
