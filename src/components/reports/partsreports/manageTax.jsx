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

const ManageTax = () => {
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

        console.log('View Details Clicked');
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
        { TaxType: "GST-PR", TaxCategory: "HSN NA", HSN: "NA", TaxCriteria: "", TaxValue: "0", StartDate: "", EndDate: ""},
        { TaxType: "ST", TaxCategory: "ST @ 12%", HSN: "ST", TaxCriteria: "", TaxValue: "0.12", StartDate: "", EndDate: ""},
        { TaxType: "VAT", TaxCategory: "VAT @ 13%", HSN: "VAT", TaxCriteria: "", TaxValue: "0.13", StartDate: "", EndDate: ""},
        { TaxType: "GST @ 18%", TaxCategory: "Oil or petrol-filters for internal combustion engines", HSN: "8421 23 00", TaxCriteria: "", TaxValue: "0.18", StartDate: "", EndDate: ""},
    ];

    const [filter, setFilter] = useState(""); // Search filter state
    const [isActive, setIsActive] = useState(true); // Set initial state to true to show table by default

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
        console.log('View User Clicked');
        console.log(`Edit Clicked for ${TaxType}`);
    };


    const handleDeleteClick = (TaxType) => {
        if (window.confirm(`Are you sure you want to delete ${TaxType}?`)) {
            console.log(`Deleting ${TaxType}`);
        }
    };

    return (
        <Fragment>
            <Pageheader
                title="System Configuration"
                heading="System Configuration"
                active="Manage Tax Rates/ HSN Code"
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
                                    <h6 className="">Manage Tax Rates/ HSN Code</h6>
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
                                                    <th>Tax Type</th>
                                                    <th>Tax Category</th>
                                                    <th>HSN</th>
                                                    <th>TaxCriteria</th>
                                                    <th>Tax Value</th>
                                                    <th>Start Date</th>
                                                    <th>End Date</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {filterData(consumablesData, "TaxType")
                                                    .length > 0 ? (
                                                    filterData(
                                                        consumablesData,
                                                        "TaxType"
                                                    ).map((item, index) => (
                                                        <tr key={index}>
                                                            <td>{item.TaxType}</td>
                                                            <td>{item.TaxCategory}</td>
                                                            <td>{item.HSN}</td>
                                                            <td>{item.TaxCriteria}</td>
                                                            <td>{item.TaxValue}</td>
                                                            <td>{item.StartDate}</td>
                                                            <td>{item.EndDate}</td>
                                                            
                                                            <td>
                                                                <div className="dropdown">
                                                                    <button
                                                                        className="btn btn-sm btn-secondary dropdown-toggle"
                                                                        type="button"
                                                                        id="dropdownMenuButton"
                                                                        data-bs-toggle="dropdown"
                                                                        aria-expanded="false"
                                                                    >
                                                                        ...
                                                                    </button>
                                                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                        <li>
                                                                            <button
                                                                                className="dropdown-item"
                                                                                onClick={handleUserClick}
                                                                            >
                                                                                <i className="fa fa-user"></i> View User
                                                                            </button>
                                                                        </li>
                                                                        <li>
                                                                            <button
                                                                                className="dropdown-item"
                                                                                onClick={() => handleEditClick(item.TaxType)}
                                                                            >
                                                                                <i className="fa fa-edit"></i> Edit
                                                                            </button>
                                                                        </li>
                                                                        <li>
                                                                            <button
                                                                                className="dropdown-item"
                                                                                onClick={handleClickOpen1}
                                                                            >
                                                                                <i className="fas fa-eye"></i> View Details
                                                                            </button>
                                                                        </li>
                                                                        <li>
                                                                            <button
                                                                                className="dropdown-item text-danger"
                                                                                onClick={() => handleDeleteClick(item.TaxType)}
                                                                            >
                                                                                <i className="fas fa-trash-alt"></i> Delete
                                                                            </button>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </td>

                                                        </tr>
                                                    ))
                                                ) : (
                                                    <tr>
                                                        <td colSpan="11" className="text-center">
                                                            No Records Found
                                                        </td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
                                        
                                    </div>
                                </CForm>
                            ) : (
                                <p className="text-center">Table is currently inactive.</p>
                            )}

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
                        </Card.Body>
                    </Card>
                </Col>
            </div>
            <Dialog
                open={open1}
                onClose={handleClosedraggable}
                PaperComponent={PaperComponent}
                aria-labelledby="draggable-dialog-title"
            >
                <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
                    Draggable Dialog
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {/* Add your content here */}
                        This is a draggable dialog. You can add more content as needed.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClosedraggable}>Close</Button>
                </DialogActions>
            </Dialog>
        </Fragment>
    );
};

export default ManageTax;
