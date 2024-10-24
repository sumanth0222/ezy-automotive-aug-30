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

const ManageWorkshopSalvages = () => {
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

    // Data from the image
    const consumablesData = [
        {
            spareName: "Nickel metal hydride battery modules",
            vehicleBrand: "Maruti Suzuki,Toyota",
            vehicleModel: "Generic",
            vehicleVariant: "Generic",
            brand: "TEST WURTH",
            partNumber: "SP103 TEST DATA",
            totalQuantity: "1.00",
            consumedQty: "1.00",
            availableQty: "0.00",
            salePrice: "1920.00",
            batchNo: "123456",
            location: "Hyderabad",
        },
        {
            spareName: "Boots",
            vehicleBrand: "Toyota,Maruti Suzuki",
            vehicleModel: "Generic",
            vehicleVariant: "Generic",
            brand: "TEST BOSCH",
            partNumber: "P00010 TEST DATA",
            totalQuantity: "4.00",
            consumedQty: "4.00",
            availableQty: "0.00",
            salePrice: "121.60",
            batchNo: "654321",
            location: "Hyderabad",
        }
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
        navigate(`${import.meta.env.BASE_URL}widgets/usersetuppluss`)
    }

    const [dark1, setdark1] = useState("on");

    return (
        <Fragment>
            <Pageheader title="Manage Workshop" heading="Manage Workshop" active="Manage Workshop Salvages" />
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
                                    <h6 className="">Manage Workshop Salvages</h6>
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
                                        <a
                                            className="btn ripple btn-success text-white btn-icon"
                                            data-placement="top"
                                            data-bs-toggle="tooltip"
                                            title="Add File"
                                            href="#"
                                        >
                                            <button
                                                className="btn btn-sm btn-primary"
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

                                        <table className="table table-bordered text-nowrap border-bottom m-0">
                                            <thead>
                                                <tr>
                                                    <th>Spare Name</th>
                                                    <th>Vehicle Brand</th>
                                                    <th>Vehicle Model</th>
                                                    <th>Vehicle Variant</th>
                                                    <th>Brand</th>
                                                    <th>Part#</th>
                                                    <th>Total Quantity</th>
                                                    <th>Consumed Qty</th>
                                                    <th>Available Quantity</th>
                                                    <th>Sale Price</th>
                                                    <th>Batch No</th>
                                                    <th>Location</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {filterData(consumablesData, "brand").length > 0 ? (
                                                    filterData(consumablesData, "brand").map((item, index) => (
                                                        <tr key={index}>
                                                            <td>{item.spareName}</td>
                                                            <td>{item.vehicleBrand}</td>
                                                            <td>{item.vehicleModel}</td>
                                                            <td>{item.vehicleVariant}</td>
                                                            <td>{item.brand}</td>
                                                            <td>{item.partNumber}</td>
                                                            <td>{item.totalQuantity}</td>
                                                            <td>{item.consumedQty}</td>
                                                            <td>{item.availableQty}</td>
                                                            <td>{item.salePrice}</td>
                                                            <td>{item.batchNo}</td>
                                                            <td>{item.location}</td>
                                                            <td>
                                                                <div className="dropdown">
                                                                    <button
                                                                        className="btn btn-sm btn-secondary"
                                                                        type="button"
                                                                        id="dropdownMenuButton"
                                                                        data-bs-toggle="dropdown"
                                                                        aria-expanded="false"
                                                                    >
                                                                        ...
                                                                    </button>
                                                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                        <li>
                                                                            <button className="dropdown-item" onClick={handleClickOpen1}>
                                                                                <i className="fas fa-eye"></i> View Details
                                                                            </button>
                                                                        </li>
                                                                        <li>
                                                                            <button className="dropdown-item" onClick={() => console.log('Edit Clicked')}>
                                                                                <i className="fa fa-edit"></i> Edit
                                                                            </button>
                                                                        </li>
                                                                        <li>
                                                                            <button className="dropdown-item text-danger" onClick={() => console.log('Delete Clicked')}>
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
                                                        <td colSpan="12" className="text-center">
                                                            No records found.
                                                        </td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>

                                    </div>
                                </CForm>
                            ) : (
                                <div className="d-flex justify-content-center align-items-center">
                                    <h5>No records found.</h5>
                                </div>
                            )}

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
};

export default ManageWorkshopSalvages;
