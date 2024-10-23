import React, { useState, Fragment } from "react";
import { Card, Col, Button } from "react-bootstrap";
import { CForm } from "@coreui/react";
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
import Pageheader from "../../../layout/layoutcomponent/pageheader";

// Custom Paper component for draggable dialog
const PaperComponent = (props) => {
    return (
        <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogTitle-root"]'}>
            <Paper {...props} />
        </Draggable>
    );
};

const ManageInvoicingCategoryInfo = () => {
    const navigate = useNavigate();
    const [open1, setOpen1] = useState(false);
    const [filter, setFilter] = useState(""); // Add filter state

    const handleClickOpen1 = () => {
        setOpen1(true);
        console.log('View Details Clicked');
    };

    const handleClosedraggable = () => {
        setOpen1(false);
    };

    const handlePlusClick = () => {
        navigate("/advancedui/carousel");
    };

    return (
        <Fragment>
            <Pageheader
                title="System Configuration"
                heading="System Configuration"
                active="Manage Invoicing Category Info"
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
                        </Card.Header>
                        <Card.Body>
                            <CForm className="row g-3 needs-validation" noValidate>
                                <div className="table-responsive mt-4">
                                    <table className="table table-bordered text-nowrap border-bottom m-0">
                                        <thead>
                                            <tr>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="dropdown">
                                                        <button
                                                            className="btn btn-sm btn-secondary "
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
                                                                    onClick={handleClickOpen1}
                                                                >
                                                                    <i className="fas fa-eye"></i> View Details
                                                                </button>
                                                            </li>
                                                            <li>
                                                                <button
                                                                    className="dropdown-item"
                                                                    onClick={() => console.log('Edit Clicked')}
                                                                >
                                                                    <i className="fa fa-edit"></i> Edit
                                                                </button>
                                                            </li>
                                                            <li>
                                                                <button
                                                                    className="dropdown-item text-danger"
                                                                    onClick={() => console.log('Delete Clicked')}
                                                                >
                                                                    <i className="fas fa-trash-alt"></i> Delete
                                                                </button>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </CForm>
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

export default ManageInvoicingCategoryInfo;
