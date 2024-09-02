import React, { useState, Fragment } from "react";
import { Card, Col, Button } from "react-bootstrap";
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
import Pageheader from "../../../layout/layoutcomponent/pageheader";

const Gallery = () => {
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
    { name: "Edit Me Mechanic 1", cell: "", options: "" },
    { name: "Edit Me Mechanic 2", cell: "", options: "" },
    { name: "Edit Me Mechanic 3", cell: "", options: "" },
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

  const [dark1, setdark1] = useState("on");

  return (
    <Fragment>
      <Pageheader title="Mechanics" heading="Pages" active="Mechanics" />
      <div className="row mt-5">
        <Col lg={12} md={12}>
          <Card>
            <Card.Header
              className="row-sm row justify-content-between bg-primary"
              style={{ backgroundColor: "#41bde1" }}
            >
              <div className="row-sm row">
                <div>
                  <a
                    className="btn ripple btn-dark text-white btn-icon"
                    data-placement="top"
                    data-bs-toggle="tooltip"
                    title=""
                    href="#"
                  >
                    <i className="fa fa-cogs"></i>
                  </a>
                </div>
                <div>
                  <h3 className="">Mechanics</h3>
                </div>
              </div>

              <div className="row-sm row">
                <div className="col-lg-3 mt-2">
                  <div
                    className={`main-toggle ms-sm-2 main-toggle-dark ${dark1}`}
                    onClick={() => {
                      setdark1(dark1 === "on" ? "off" : "on");
                    }}
                  >
                    <span className={`${dark1 === "on" ? "active" : ""}`} onClick={toggleActiveState}></span>
                  </div>
                </div>

                <div className="form-group col-lg-8 d-flex align-items-center">
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
                          <th className="text-center">Name</th>
                          <th>Cell</th>
                          <th>Options</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filterData(ordersData, "name").length > 0 ? (
                          filterData(ordersData, "name").map((name, index) => (
                            <tr key={index}>
                              <td className="text-center">{name.name}</td>
                              <td>{name.cell}</td>
                              <td>
                                <div className="row">
                                  <button
                                    className="btn btn-sm btn-primary fa fa-edit"
                                    onClick={() => handleEditClick(name.itemcode)}
                                    style={{ marginLeft: "5px" }}
                                  ></button>
                                  <button
                                    className="btn btn-sm btn-dark fa fa-user"
                                    style={{ marginLeft: "5px" }}
                                  ></button>
                                  <button
                                    className="btn btn-sm btn-danger fa fa-comment"
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

export default Gallery;
