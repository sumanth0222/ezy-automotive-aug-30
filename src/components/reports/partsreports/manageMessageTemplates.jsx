
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
import { CForm } from "@coreui/react";

const ManageMessageTemplates = () => {

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


 // Data from the image
 const consumablesData = [
    { Type: "RevertJob",Desc:"Wrong Estimation",status:"ACTIVE", Action: "" },
    { Type: "RevertJob",Desc:"Calculation Mistake",status:"ACTIVE", Action: "" },
    { Type: "RevertJob ",Desc:"",status:"ACTIVE", Action: "" },
    { Type: "RevertJob",Desc:"Wrong Estimation",status:"ACTIVE", Action: "" },
    
    
  ];


  const [isActive, setIsActive] = useState(true); // Set initial state to true to show table by default

  // Custom validation
  const [Custom, setCustom] = useState("");
  const handleOnchangeCustom = (e) => {
    setCustom(e.target.value);
  };

  const [validatedCustom, setValidatedCustom] = useState(false);

  const handleSubmitCustom = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidatedCustom(true);
  };

  
  const handleUserClick = () => {
    navigate(`${import.meta.env.BASE_URL}widgets/usersetuppluss`);
  };
  const handleEditClick = (itemCode) => {
    // Navigate to the edit page with the itemCode
    navigate(`${import.meta.env.BASE_URL}pages/aboutus`);
  };

  const handlePlusClick = () => {
    navigate("/advancedui/carousel"); // Navigate to the form page
  };

  const [open1, setOpen1] = useState(false);

  const handleClickOpen1 = () => {
    setOpen1(true);
  };

  const handleClosedraggable = () => {
    setOpen1(false);
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

                    <Tab eventKey="Tab Style 01" title="Revert Job Card Reason Master">
                      <div className="mt-3" id="" role="">

                        <Accordion className='overflow-hidden'>
                          <Accordion.Item  >
                             {/* <Accordion.Header >
                                
                                    <div className="row-sm row align-items-center" >
                                        <div>
                                        <a
                                            className="btn ripple btn-dark text-white btn-icon"
                                            data-placement="top"
                                            data-bs-toggle="tooltip"
                                            title="icon"
                                            href="#"
                                        >
                                            <i className="fa fa-cogs"></i>
                                        </a>
                                        </div>

                                        <div>
                                        <h6 className="">Manage Invoicing Category Info</h6>
                                        </div>

                                    </div>

                                    <div className="row-sm row align-items-center">
                                        <div className="col-lg-12 d-flex p-0 align-items-center">
                                        <input
                                            autoComplete="off"
                                            placeholder="Search..."
                                            type="search"
                                            className="form-control"
                                            value={filter}
                                            onChange={(e) => setFilter(e.target.value)}
                                        />
                                        <div>
                                            <button
                                            className="btn btn-sm btn-primary"
                                            onClick={handlePlusClick}
                                            >
                                            <li className="fa fa-plus"></li>
                                            </button>
                                        </div>
                                        </div>
                                    </div>
      
                             </Accordion.Header>  */}

                            <Accordion.Body id="" className="">
                            {isActive ? (
                <CForm
                  className="row g-3 needs-validation"
                  noValidate
                  validated={validatedCustom}
                  onSubmit={handleSubmitCustom}
                >
                  <div className="table-responsive">
                    <table className="table table-bordered text-nowrap border-bottom m-0">
                      <thead>
                        <tr>
                          <th>Type</th>
                          <th>Desc</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filterData(consumablesData, "Type")
                          .length > 0 ? (
                          filterData(
                            consumablesData,
                            "Type"
                          ).map((item, index) => (
                            <tr key={index}>
                              <td>{item.Type}</td>
                              <td>{item.Desc}</td>
                              <td>{item.status}</td>
                              <td>
                                <div className="row">
                                  <button
                                    className="btn btn-sm btn-dark fa fa-user"
                                    onClick={handleUserClick}
                                    style={{ marginLeft: "5px" }}
                                  ></button>
                                  <button
                                    className="btn btn-sm btn-primary fa fa-edit"
                                    onClick={() =>
                                      handleEditClick(item.Type)
                                    }
                                    style={{ marginLeft: "5px" }}
                                  ></button>
                                  <button
                                    className="btn btn-sm btn-info fas fa-eye"
                                    onClick={handleClickOpen1}
                                    style={{ marginLeft: "5px" }}
                                  ></button>
                                  <button
                                    className="btn btn-sm btn-danger far fa-trash-alt"
                                    onClick={handleClickOpen1}
                                    style={{ marginLeft: "5px" }}
                                  ></button>
                                </div>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan="3" className="text-center">
                              No records found.
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                    <div className="d-flex mt-4 align-items-center">
                      <span>
                        Page <strong>1 of 4</strong>
                      </span>
                      <span className="ms-auto ps-2">
                        <button
                          type="button"
                          disabled
                          className="btn-default tablebutton me-2 my-2 btn"
                        >
                          Previous
                        </button>
                        <button
                          type="button"
                          disabled
                          className="btn-default tablebutton me-2 my-2 btn"
                        >
                          &lt;&lt;
                        </button>
                        <button
                          type="button"
                          disabled
                          className="btn-default tablebutton me-2 my-2 btn"
                        >
                          &lt;
                        </button>
                        <button
                          type="button"
                          className="btn-default tablebutton me-2 my-2 btn"
                        >
                          &gt;
                        </button>
                        <button
                          type="button"
                          className="btn-default tablebutton me-2 my-2 btn"
                        >
                          &gt;&gt;
                        </button>
                        <button
                          type="button"
                          className="btn-default tablebutton me-2 my-2 btn"
                        >
                          Next
                        </button>
                      </span>
                    </div>
                  </div>
                </CForm>
              ) : (
                <div className="d-flex justify-content-center align-items-center">
                  <h5>No records found.</h5>
                </div>
              )}
                            </Accordion.Body>

                           


                          </Accordion.Item>
                        </Accordion>



                      </div>
                    </Tab>


                    <Tab eventKey="Tab Style 02" title="SMS/Email Permissions">
                      <div className="mt-5" id="" role="">

                        <Accordion className='overflow-hidden'>
                          <Accordion.Item >

                          <Accordion.Body id="" className="">
                            {isActive ? (
                <CForm
                  className="row g-3 needs-validation"
                  noValidate
                  validated={validatedCustom}
                  onSubmit={handleSubmitCustom}
                >
                  <div className="table-responsive">
                    <table className="table table-bordered text-nowrap border-bottom m-0">
                      <thead>
                        <tr>
                          <th>Type</th>
                          <th>Desc</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filterData(consumablesData, "Type")
                          .length > 0 ? (
                          filterData(
                            consumablesData,
                            "Type"
                          ).map((item, index) => (
                            <tr key={index}>
                              <td>{item.Type}</td>
                              <td>{item.Desc}</td>
                              <td>{item.status}</td>
                              <td>
                                <div className="row">
                                  <button
                                    className="btn btn-sm btn-dark fa fa-user"
                                    onClick={handleUserClick}
                                    style={{ marginLeft: "5px" }}
                                  ></button>
                                  <button
                                    className="btn btn-sm btn-primary fa fa-edit"
                                    onClick={() =>
                                      handleEditClick(item.Type)
                                    }
                                    style={{ marginLeft: "5px" }}
                                  ></button>
                                  <button
                                    className="btn btn-sm btn-info fas fa-eye"
                                    onClick={handleClickOpen1}
                                    style={{ marginLeft: "5px" }}
                                  ></button>
                                  <button
                                    className="btn btn-sm btn-danger far fa-trash-alt"
                                    onClick={handleClickOpen1}
                                    style={{ marginLeft: "5px" }}
                                  ></button>
                                </div>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan="3" className="text-center">
                              No records found.
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                    <div className="d-flex mt-4 align-items-center">
                      <span>
                        Page <strong>1 of 4</strong>
                      </span>
                      <span className="ms-auto ps-2">
                        <button
                          type="button"
                          disabled
                          className="btn-default tablebutton me-2 my-2 btn"
                        >
                          Previous
                        </button>
                        <button
                          type="button"
                          disabled
                          className="btn-default tablebutton me-2 my-2 btn"
                        >
                          &lt;&lt;
                        </button>
                        <button
                          type="button"
                          disabled
                          className="btn-default tablebutton me-2 my-2 btn"
                        >
                          &lt;
                        </button>
                        <button
                          type="button"
                          className="btn-default tablebutton me-2 my-2 btn"
                        >
                          &gt;
                        </button>
                        <button
                          type="button"
                          className="btn-default tablebutton me-2 my-2 btn"
                        >
                          &gt;&gt;
                        </button>
                        <button
                          type="button"
                          className="btn-default tablebutton me-2 my-2 btn"
                        >
                          Next
                        </button>
                      </span>
                    </div>
                  </div>
                </CForm>
              ) : (
                <div className="d-flex justify-content-center align-items-center">
                  <h5>No records found.</h5>
                </div>
              )}
                            </Accordion.Body>

                          </Accordion.Item>
                        </Accordion>
                      </div>
                    </Tab>


                    <Tab eventKey="Tab Style 03" title="Add SMS/Email Templates">
                      <div className="mt-5" id="" role="">

                        <Accordion className="overflow-hidden">
                          <Accordion.Item  >


                          <Accordion.Body id="" className="">
                            {isActive ? (
                <CForm
                  className="row g-3 needs-validation"
                  noValidate
                  validated={validatedCustom}
                  onSubmit={handleSubmitCustom}
                >
                  <div className="table-responsive">
                    <table className="table table-bordered text-nowrap border-bottom m-0">
                      <thead>
                        <tr>
                          <th>Type</th>
                          <th>Desc</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filterData(consumablesData, "Type")
                          .length > 0 ? (
                          filterData(
                            consumablesData,
                            "Type"
                          ).map((item, index) => (
                            <tr key={index}>
                              <td>{item.Type}</td>
                              <td>{item.Desc}</td>
                              <td>{item.status}</td>
                              <td>
                                <div className="row">
                                  <button
                                    className="btn btn-sm btn-dark fa fa-user"
                                    onClick={handleUserClick}
                                    style={{ marginLeft: "5px" }}
                                  ></button>
                                  <button
                                    className="btn btn-sm btn-primary fa fa-edit"
                                    onClick={() =>
                                      handleEditClick(item.Type)
                                    }
                                    style={{ marginLeft: "5px" }}
                                  ></button>
                                  <button
                                    className="btn btn-sm btn-info fas fa-eye"
                                    onClick={handleClickOpen1}
                                    style={{ marginLeft: "5px" }}
                                  ></button>
                                  <button
                                    className="btn btn-sm btn-danger far fa-trash-alt"
                                    onClick={handleClickOpen1}
                                    style={{ marginLeft: "5px" }}
                                  ></button>
                                </div>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan="3" className="text-center">
                              No records found.
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                    <div className="d-flex mt-4 align-items-center">
                      <span>
                        Page <strong>1 of 4</strong>
                      </span>
                      <span className="ms-auto ps-2">
                        <button
                          type="button"
                          disabled
                          className="btn-default tablebutton me-2 my-2 btn"
                        >
                          Previous
                        </button>
                        <button
                          type="button"
                          disabled
                          className="btn-default tablebutton me-2 my-2 btn"
                        >
                          &lt;&lt;
                        </button>
                        <button
                          type="button"
                          disabled
                          className="btn-default tablebutton me-2 my-2 btn"
                        >
                          &lt;
                        </button>
                        <button
                          type="button"
                          className="btn-default tablebutton me-2 my-2 btn"
                        >
                          &gt;
                        </button>
                        <button
                          type="button"
                          className="btn-default tablebutton me-2 my-2 btn"
                        >
                          &gt;&gt;
                        </button>
                        <button
                          type="button"
                          className="btn-default tablebutton me-2 my-2 btn"
                        >
                          Next
                        </button>
                      </span>
                    </div>
                  </div>
                </CForm>
              ) : (
                <div className="d-flex justify-content-center align-items-center">
                  <h5>No records found.</h5>
                </div>
              )}
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

export default ManageMessageTemplates;
