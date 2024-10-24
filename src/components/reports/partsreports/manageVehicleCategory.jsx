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

const ManageVehicleCategory = () => {
  const [Server, setServer] = useState("");
  const navigate = useNavigate();

  const handleOnchangeServer = (e) => {
    setServer(e.target.value);
  };

  function PaperComponent(props) {
    return (
      <Draggable
        handle="#draggable-dialog-title"
        cancel={'[class*="MuiDialogContent-root"]'}
      >
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

  // Data from the image
  const consumablesData = [
    { VehicleCategoryName: "HATCHBACK", Action: "" },
    { VehicleCategoryName: "HOT HATCHBACK", Action: "" },
    { VehicleCategoryName: "COMPACT SEDAN ", Action: "" },
    { VehicleCategoryName: "SEDAN", Action: "" },
    { VehicleCategoryName: "EXECUTIVE SEDAN", Action: "" },
    { VehicleCategoryName: "LUXURY SEDAN ", Action: "" },
    { VehicleCategoryName: "SALOON", Action: "" },
    { VehicleCategoryName: "SUV", Action: "" },
    { VehicleCategoryName: "COMPACT SUV ", Action: "" },
    
  ];

  const [filter, setFilter] = useState(""); // Search filter state
  const [isActive, setIsActive] = useState(true); // Set initial state to true to show table by default

  // Toggle button handler
  const toggleActiveState = () => {
    setIsActive(!isActive);
  };

  // Filtering based on search term
  const filterData = (data, field) =>
    data.filter((item) =>
      item[field].toLowerCase().includes(filter.toLowerCase())
    );

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
      <Pageheader
        title="System Configuration"
        heading="System Configuration"
        active="Vehicle Category Info"
      />
      <div className="row p-0">
        <Col lg={12} md={12}>
          <Card className="p-0">
            <Card.Header
              className="row-sm row justify-content-between bg-primary p-0"
              style={{ backgroundColor: "#41bde1" }}
            >
              <div className="row-sm row align-items-center">
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
                  <h6 className="">Vehicle Category Info</h6>
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
                    <table className="table table-bordered text-nowrap border-bottom m-0">
                      <thead>
                        <tr>
                          <th>Vehicle Category Name</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filterData(consumablesData, "VehicleCategoryName")
                          .length > 0 ? (
                          filterData(
                            consumablesData,
                            "VehicleCategoryName"
                          ).map((item, index) => (
                            <tr key={index}>
                              <td>{item.VehicleCategoryName}</td>
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
                                      handleEditClick(item.VehicleCategoryName)
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
            <label className="form-label" htmlFor="validationCustom05">
              Cell
            </label>
            <input
              type="text"
              className="form-control"
              id="validationCustom05"
              placeholder="Cell"
              required
              value={Custom}
              onChange={handleOnchangeCustom}
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClosedraggable}>
            Cancel
          </Button>
          <Button onClick={handleClosedraggable}>Save</Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};

export default ManageVehicleCategory;
