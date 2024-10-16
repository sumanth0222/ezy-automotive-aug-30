import React, { useState, Fragment } from "react";
import { Form, Nav, Card, Row, Col, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { CForm } from "@coreui/react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import Draggable from "react-draggable";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
} from "@mui/material";
import Pageheader from "../../../../layout/layoutcomponent/pageheader";

const Cart = () => {
  const [Server, setServer] = useState("");
  const navigate = useNavigate();

  const handleOnchangeServer = (e) => {
    setServer(e.target.value);
  };

  function PaperComponent(props) {
    return (
      <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
        <Paper {...props} />
      </Draggable>
    );
  }

  const [open1, setOpen1] = useState(false);

  const handleClickOpen1 = () => {
    setOpen1(true);
  };

  const handleClosedraggable = () => {
    setOpen1(false);
  };

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

  const ordersData = [
    {
      workshopId: "W001",
      firstName: "John",
      lastName: "Doe",
      username: "jdoe",
      email: "jdoe@example.com",
      designation: "Technician",
      passwordExpiry: "2024-12-01",
      contactNumber: "+1234567890",
      mobileAuth: "Enabled",
    },
    {
      workshopId: "W002",
      firstName: "Jane",
      lastName: "Smith",
      username: "jsmith",
      email: "jsmith@example.com",
      designation: "Supervisor",
      passwordExpiry: "2024-11-15",
      contactNumber: "+1234567891",
      mobileAuth: "Enabled",
    },
    {
      workshopId: "W003",
      firstName: "Alice",
      lastName: "Johnson",
      username: "ajohnson",
      email: "ajohnson@example.com",
      designation: "Store Keeper",
      passwordExpiry: "2025-01-20",
      contactNumber: "+1234567892",
      mobileAuth: "Disabled",
    },
  ];

  const [filter, setFilter] = useState(""); // Search filter state
  const [isActive, setIsActive] = useState(true); // Set initial state to true to show table by default

  // Toggle button handler
  const toggleActiveState = () => {
    setIsActive(!isActive);
  };

  // Filtering based on search term
  const filterData = (data, field) =>
    data.filter((item) => item[field].toLowerCase().includes(filter.toLowerCase()));

  const handleEditClick = (itemCode) => {
    // Navigate to the edit page with the itemCode
    navigate(`${import.meta.env.BASE_URL}pages/aboutus`);
  };

  const handlePlusClick = () => {
    navigate("/advancedui/carousel"); // Navigate to the form page
  };

  const handleUserClick = () => {
    navigate(`${import.meta.env.BASE_URL}widgets/usersetuppluss`);
  };

  const [dark1, setdark1] = useState("on");

  return (
    <Fragment>
      <Pageheader title="Employees" heading="Employees" active="Service Advisors" />
      <div className="row">
        <Col lg={12} md={12}>
          <Card>
            <Card.Header
              className="row-sm row justify-content-between bg-primary"
              style={{ backgroundColor: "#41bde1", paddingBottom: "6px" }}
            >
              <div className="row-sm row">
                <div>
                  <a
                    className="btn ripple btn-dark text-white btn-icon mt-2"
                    data-placement="top"
                    data-bs-toggle="tooltip"
                    title="icon"
                    href="#"
                  >
                    <i className="fa fa-cogs"></i>
                  </a>
                </div>
                <div>
                  <h3 className="mt-3">Manage Employees</h3>
                </div>
              </div>

              <div className="row-sm row">
                <div className="form-group col-lg-12 d-flex align-items-center mt-2">
                  <input
                    autoComplete="off"
                    placeholder="Search..."
                    type="search"
                    className="form-control"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                  />
                  <div>
                    <a
                      className="btn ripple btn-success text-white btn-icon"
                      data-placement="top"
                      data-bs-toggle="tooltip"
                      title="Add File"
                      href="#"
                    >
                      <button
                        className="btn btn-sm btn-primary"
                        onClick={handlePlusClick}
                      >
                        <li className="fa fa-plus"></li>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </Card.Header>
            <Card.Body>
              {isActive ? (
                <CForm
                  className="row g-3 needs-validation"
                  noValidate
                  validated={validatedCustom}
                  onSubmit={handleSubmitCustom}
                >
                  <div className="table-responsive mt-4">
                    <table className="table table-bordered text-nowrap border-bottom">
                      <thead>
                        <tr>
                          <th className="">Workshop Id</th>
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>Username</th>
                          <th>Email Id</th>
                          <th>Designation</th>
                          <th>Password Expiry Date</th>
                          <th>Contact Number</th>
                          <th>Mobile Auth</th>
                          <th>Options</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filterData(ordersData, "firstName").length > 0 ? (
                          filterData(ordersData, "firstName").map((item, index) => (
                            <tr key={index}>
                              <td>{item.workshopId}</td>
                              <td>{item.firstName}</td>
                              <td>{item.lastName}</td>
                              <td>{item.username}</td>
                              <td>{item.email}</td>
                              <td>{item.designation}</td>
                              <td>{item.passwordExpiry}</td>
                              <td>{item.contactNumber}</td>
                              <td>
                               
                              
                                
                              </td>
                              <td>
                                <div className="row">
                                  <button
                                    className="btn btn-sm btn-dark fa fa-user"
                                    onClick={handleUserClick}
                                    style={{ marginLeft: "5px" }}
                                  ></button>
                                  <button
                                    className="btn btn-sm btn-primary fa fa-edit"
                                    onClick={() => handleEditClick(item.itemcode)}
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
                            <td colSpan="10" className="text-center">
                              No records Found.
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                    <div className="d-flex mt-4 align-items-center">
                      <span>Page <strong>1 of 4</strong></span>
                      <span className="ms-auto ps-2">
                        <button type="button" disabled className="btn-default tablebutton me-2 my-2 btn">
                          Previous
                        </button>
                        <button type="button" disabled className="btn-default tablebutton me-2 my-2 btn">
                          &lt;&lt;
                        </button>
                        <button type="button" disabled className="btn-default tablebutton me-2 my-2 btn">
                          &lt;
                        </button>
                        <button type="button" className="btn-default tablebutton me-2 my-2 btn">
                          &gt;
                        </button>
                        <button type="button" className="btn-default tablebutton me-2 my-2 btn">
                          &gt;&gt;
                        </button>
                        <button type="button" className="btn-default tablebutton me-2 my-2 btn">
                          Next
                        </button>
                      </span>

                    </div>
                  </div>
                </CForm>
              ) : (
                <div className="d-flex justify-content-center align-items-center">
                  <h5>No Mechanics Found.</h5>
                </div>
              )}
            </Card.Body>
          </Card>
        </Col>
      </div>

      {/* Dialog Component for Message */}
      <Dialog
        open={open1}
        onClose={handleClosedraggable}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          Edit Me
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <label className="form-label" htmlFor="validationCustom05">Cell</label>
            <input className="form-control" id="validationCustom05" type="text" required />
            <label className="form-label" htmlFor="validationCustom06">Message</label>
            <textarea className="form-control" id="validationCustom06" required></textarea>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClosedraggable}>Cancel</Button>
          <Button onClick={handleClosedraggable}>Send</Button>
        </DialogActions>
      </Dialog>

    </Fragment>
  );
}

Cart.propTypes = {};

Cart.defaultProps = {};

export default Cart;
