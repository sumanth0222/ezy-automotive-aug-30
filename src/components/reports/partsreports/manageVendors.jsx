
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

const ManageVendors = () => {
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
        { VendorName: "TEST DEALER 1", VendorRefCode: "", emailId: "", MobileNo: "", GSTIN: "GST1256", address: "", city: "", state: "",   registerDate: "2023-03-30 19:30:26" ,amount:"117314.00",paid:"0.00",due:"117314.00"},
        { VendorName: "TEST DISTRIBUTOR 1", VendorRefCode: "", emailId: "", MobileNo: "", GSTIN: "GST753", address: "", city: "", state: "",  registerDate: "2023-03-30 19:30:11",amount:"531580.00",paid:"0.00",due:"531580.00" },
        { VendorName: "TEST OEM VENDOR 1", VendorRefCode: "", emailId: "", MobileNo: "", GSTIN: "GST741", address: "", city: "", state: "",  registerDate: "2023-03-30 19:29:42",amount:"129134.00",paid:"0.00",due:"129134.00" },
        { VendorName: "TEST OEM X", VendorRefCode: "", emailId: "", MobileNo: "", GSTIN: "STT7852", address: "", city: "", state: "",  registerDate: "2023-03-30 19:31:04",amount:"240768.00",paid:"0.00",due:"240768.00" },
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
        console.log(`Edit Clicked for ${VendorName}`);
    };


    const handleDeleteClick = (VendorName) => {
        if (window.confirm(`Are you sure you want to delete ${VendorName}?`)) {
            console.log(`Deleting ${VendorName}`);
        }
    };

    return (
        <Fragment>
            <Pageheader
                title="System Configuration"
                heading="System Configuration"
                active="Manage Vendors & Purchases"
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
                                    <h6 className="">Manage Vendors & Purchases</h6>
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
                                                    <th>Vendor Name</th>
                                                    <th>VendorRefCode</th>
                                                    <th>Email Id</th>
                                                    <th>Mobile No.</th>
                                                    <th>GSTIN No</th>
                                                    <th>Address</th>
                                                    <th>City</th>
                                                    <th>State</th>
                                                    <th>Registered Dt</th>
                                                    <th>Total Amount</th>
                                                    <th>Total Paid</th>
                                                    <th>Total Due</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {filterData(consumablesData, "VendorName")
                                                    .length > 0 ? (
                                                    filterData(
                                                        consumablesData,
                                                        "VendorName"
                                                    ).map((item, index) => (
                                                        <tr key={index}>
                                                            <td>{item.VendorName}</td>
                                                            <td>{item.VendorRefCode}</td>
                                                            <td>{item.emailId}</td>
                                                            <td>{item.MobileNo}</td>
                                                            <td>{item.GSTIN}</td>
                                                            <td>{item.address}</td>
                                                            <td>{item.city}</td>
                                                            <td>{item.state}</td>
                                                            <td>{item.registerDate}</td>
                                                            <td>{item.amount}</td>
                                                            <td>{item.paid}</td>
                                                            <td>{item.due}</td>
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
                                                                                onClick={() => handleEditClick(item.VendorName)}
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
                                                                                onClick={() => handleDeleteClick(item.VendorName)}
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

export default ManageVendors;
