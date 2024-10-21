import React, { useState, Fragment } from "react";
import { Card, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; 
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

  const handlePlusClick = () => {
    navigate("/advancedui/carousel"); // Navigate to the form page
  };

  const handleUserClick = () => {
    navigate(`${import.meta.env.BASE_URL}widgets/usersetuppluss`);
  };

  const [dark1, setdark1] = useState("on");

  // Filtering based on search term
  const filterData = (data, field) =>
    data.filter((item) => item[field].toLowerCase().includes(filter.toLowerCase()));

  return (
    <Fragment>
      <Pageheader title="Employees" heading="Employees" active="Service Advisors" />
      <div className="row p-0">
        <Col lg={12} md={12} className="p-0">
          <Card>
            <Card.Header
              className="row-sm row justify-content-between bg-primary p-0"
            >
              <div className="row-sm row align-items-center py-0">
                <div>
                  <a
                    className="btn ripple btn-dark text-white btn-icon p-0"
                    data-placement="top"
                    data-bs-toggle="tooltip"
                    title="icon"
                    href="#"
                  >
                    <i className="fa fa-cogs"></i>
                  </a>
                </div>
                <div>
                  <h3>Manage Employees</h3>
                </div>
              </div>

              <div className="row-sm row p-0 ">
                <div className="col-lg-12 d-flex align-items-center">
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
              <div className="table-responsive mt-4">
                <table className="table table-bordered text-nowrap border-bottom">
                  <thead>
                    <tr>
                      <th>Workshop Id</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Username</th>
                      <th>Email Id</th>
                      <th>Designation</th>
                      <th>Password Expiry Date</th>
                      <th>Contact Number</th>
                      <th>Mobile Auth</th>
                      <th>Employees Auth</th>
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
                            <input
                              type="checkbox"
                              checked={item.mobileAuth === "Enabled"}
                              readOnly
                            />
                          </td>
                          <td>
                            <input
                              type="checkbox" className=""
                              checked={item.mobileAuth === "Enabled"}
                              readOnly
                            />
                          </td>
                          <td>
                            <div className="dropdown">
                              <button
                                className="btn btn-primary dropdown-toggle"
                                type="button"
                                id={`dropdownMenu${index}`}
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                ...
                              </button>
                              <ul className="dropdown-menu" aria-labelledby={`dropdownMenu${index}`}>
                                <li>
                                  <button className="dropdown-item" onClick={handleUserClick}>
                                    User
                                  </button>
                                </li>
                                <li>
                                  <button className="dropdown-item" onClick={handleClickOpen1}>
                                    View
                                  </button>
                                </li>
                                <li>
                                  <button className="dropdown-item">
                                    Delete
                                  </button>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="10" className="text-center">
                          No records found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {/* Pagination controls - moved outside of the table */}
              <div className="d-flex mt-4 justify-content-between">
                <span>Page <strong>1 of 4</strong></span>
                <div>
                  <button type="button" disabled className="btn-default tablebutton me-2 btn">
                    Previous
                  </button>
                  <button type="button" className="btn-default tablebutton me-2 btn">
                    Next
                  </button>
                </div>
              </div>
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
            <textarea className="form-control" id="validationCustom06"></textarea>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button className="btn" onClick={handleClosedraggable}>Cancel</Button>
          <Button className="btn" onClick={handleSubmitCustom}>Submit</Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};

export default Cart;
