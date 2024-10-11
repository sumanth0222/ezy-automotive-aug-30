
import React, { Fragment, useState } from 'react';
import { Accordion, Col, Row, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import Pageheader from '../../layout/layoutcomponent/pageheader';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Draggable from 'react-draggable';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
} from "@mui/material";


const PublicBookings = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  // Handler for the Cancel button
  const handleCancel = () => {
    navigate(-1); // Navigate back to the previous page
  };

  // State to track each toggle button's state
  const [toggleStates, setToggleStates] = useState({

    partnumber: false,
    labourquantity: true,
    lineprices: false,
    serialNumber: false,
    priceLookup: false,

  });
  // Toggle button handler for individual switches
  const handleToggle = (key) => {
    setToggleStates((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };


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

  const [open5, setOpen5] = useState(false);



  const handleClickVehicles = () => {
    setOpen5(true);
  };


  const handleClosedraggable5 = () => {
    setOpen5(false);
  };



  const [filter, setFilter] = useState(""); // Search filter state
  const ordersData = [
    { description: "Repair", estimated: "1.0" },
    { description: "Service", estimated: "1.0" },

  ];
  // Filtering based on search term
  const filterData = (data, field) =>
    data.filter((item) => item[field].toLowerCase().includes(filter.toLowerCase()));

  return (



    <Fragment>
      <Pageheader title="Settings" heading="Settings" active="Public Bookings" />
      <Row className='faq'>
        <Col xl={12}>
          <div className="" id="" role="">
            <Accordion className='overflow-hidden'>
              <Accordion.Item>


                <Accordion.Body id="" className="">

                  <div className="col-lg-12 col-md-12">
                    <div className="card">
                      <div className="card-header row-sm row justify-content-between" style={{ backgroundColor: '#38cab3', color: 'white', padding: '10px' }}>
                        <div className="row-sm row ">

                          <div>
                            <a
                              className=" btn-dark text-white btn-icon mt-2"
                              data-placement="top"
                            //   href="#"
                            >
                              <i className="fa fa-users"></i>
                            </a>
                          </div>
                          <div className='mt-2'>
                            <h3 className="mt-2">Public URL</h3>
                          </div>
                        </div>

                      </div>

                    </div>

                    <div className="">

                      <p>Your Public URL: hhttps://example.com </p>


                    </div>

                  </div>
                </Accordion.Body>

                <Accordion.Body id="" className="">

                  <div className="col-lg-12 col-md-12">
                    <div className="card">
                      <div className="card-header row-sm row justify-content-between" style={{ backgroundColor: '#38cab3', color: 'white', padding: '10px' }}>
                        <div className="row-sm row d-flex align-item-center" >

                          <div>
                            <a
                              className=" btn-dark text-white btn-icon mt-2"
                              data-placement="top"
                            //   href="#"
                            >
                              <i className="fa fa-users"></i>
                            </a>
                          </div>
                          <div className='mt-2'>
                            <h3 className="mt-1">Appointment Types</h3>
                          </div>
                        </div>
                        <div className="row-sm row ">
                          <div className='mt-2'>
                            <a
                              className="text-white btn-icon "
                              data-placement="top"
                              data-bs-toggle="tooltip"
                              title=""
                              onClick={handleClickVehicles}
                            >
                              <i className="fa fa-plus"></i>
                            </a>
                            <Dialog
                              open={open5}
                              onClose={handleClosedraggable5}
                              PaperComponent={PaperComponent}
                              aria-labelledby="draggable-dialog-title5"
                            >
                              <DialogTitle style={{ cursor: "move", backgroundColor: "#38cab3" }} id="draggable-dialog-title5">
                                Appointment Type
                              </DialogTitle>
                              <DialogContent >
                                <DialogContentText className='row-sm row'>


                                  <div className="col-lg-6">
                                    <label className="form-label" htmlFor="validationCustom05">Estimated Hours</label>
                                    <input className="form-control" id="validationCustom05" type="text" required />
                                  </div>
                                  <div className="col-lg-6">
                                    <label className="form-label" htmlFor="validationCustom05">Product Code</label>
                                    <input className="form-control" id="validationCustom05" type="text" required />
                                  </div>
                                  <div className="col-lg-12">
                                    <label className="form-label" htmlFor="validationCustom05">Description</label>
                                    <input className="form-control" id="validationCustom05" type="text" required />
                                  </div>

                                  {/* Toggle Bars By Field */}


                                  <div className="col-lg-4">
                                    <label className="form-label" htmlFor="partnumber">Warrant of Fitness Item</label>
                                    <div className={`main-toggle ms-sm-2 main-toggle-dark ${toggleStates.partnumber ? 'on' : 'off'}`} onClick={() => handleToggle('partnumber')}>
                                      <span className={toggleStates.partnumber ? 'active' : ''}>
                                        {toggleStates.partnumber ? '' : ''}
                                      </span>
                                    </div>
                                  </div>

                                  <div className="col-lg-4">
                                    <label className="form-label" htmlFor="labourquantity">Plate Renewal Item</label>
                                    <div className={`main-toggle ms-sm-2 main-toggle-dark ${toggleStates.labourquantity ? 'on' : 'off'}`} onClick={() => handleToggle('labourquantity')}>
                                      <span className={toggleStates.labourquantity ? 'active' : ''}>
                                        {toggleStates.labourquantity ? '' : ''}
                                      </span>
                                    </div>
                                  </div>

                                  <div className="col-lg-4">
                                    <label className="form-label" htmlFor="lineprices">Next Service Item</label>
                                    <div className={`main-toggle ms-sm-2 main-toggle-dark ${toggleStates.lineprices ? 'on' : 'off'}`} onClick={() => handleToggle('lineprices')}>
                                      <span className={toggleStates.lineprices ? 'active' : ''}>
                                        {toggleStates.lineprices ? '' : ''}
                                      </span>
                                    </div>
                                  </div>

                                </DialogContentText>
                              </DialogContent>
                              <DialogActions>
                                <Button variant="secondary" className="me-1" onClick={handleClosedraggable5}>
                                  Cancel
                                </Button>
                                <Button className="me-1" variant="success">
                                  Save
                                </Button>
                              </DialogActions>
                            </Dialog>
                          </div>

                        </div>
                      </div>

                    </div>

                    <div className="table-responsive mt-4">
                      <table className="table table-bordered text-nowrap border-bottom">
                        <thead>
                          <tr>
                            <th className="text-center">Description</th>
                            <th>Estimated Hours</th>

                          </tr>
                        </thead>
                        <tbody>
                          {filterData(ordersData, "estimated").length > 0 ? (
                            filterData(ordersData, "estimated").map((estimated, index) => (
                              <tr key={index}>
                                <td className="text-center">{estimated.description}</td>
                                <td>{estimated.estimated}</td>

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

                  </div>
                </Accordion.Body>

                <Accordion.Body id="" className="">

                  <div className="col-lg-12 col-md-12">
                    <div className="card">
                      <div className="card-header row-sm row justify-content-between" style={{ backgroundColor: '#38cab3', color: 'white', padding: '10px' }}>
                        <div className="row-sm row " >
                          <div>
                            <a
                              className=" btn-dark text-white btn-icon mt-2"
                              data-placement="top"
                            //   href="#"
                            >
                              <i className="fa fa-cog"></i>
                            </a>
                          </div>
                          <div>
                            <h3 className="mt-3">Booking Settings</h3>
                          </div>
                        </div>

                      </div>

                    </div>

                    <div className="">
                      <form className="row g-3 needs-validation" noValidate>


                        {/* Toggle Bars By Field */}

                        <div className="col-lg-3">
                          <label className="form-label" htmlFor="dontUpdateQty">Set Booking Schedule Hours</label>
                          <div className={`main-toggle ms-sm-2 main-toggle-dark ${toggleStates.dontUpdateQty ? 'on' : 'off'}`} onClick={() => handleToggle('dontUpdateQty')}>
                            <span className={toggleStates.dontUpdateQty ? 'active' : ''}>
                              {toggleStates.dontUpdateQty ? '' : ''}
                            </span>
                          </div>
                        </div>

                        {/* Conditionally rendered fields based on "Enable 2FA" toggle */}
                        {toggleStates.dontUpdateQty && (
                          <>
                            <div className="col-md-3">
                              <label className="form-label" htmlFor="validationCustom05">Schedule Hours Monday</label>
                              <input className="form-control" id="validationCustom05" type="text" required />
                            </div>

                            <div className="col-md-3">
                              <label className="form-label" htmlFor="validationCustom05">Schedule Hours Tuesday</label>
                              <input className="form-control" id="validationCustom05" type="text" required />
                            </div>

                            <div className="col-md-3">
                              <label className="form-label" htmlFor="validationCustom05">Schedule Hours Wednesday</label>
                              <input className="form-control" id="validationCustom05" type="text" required />
                            </div>

                            <div className="col-md-3">
                              <label className="form-label" htmlFor="validationCustom05">Schedule Hours Thursday</label>
                              <input className="form-control" id="validationCustom05" type="text" required />
                            </div>

                            <div className="col-md-3">
                              <label className="form-label" htmlFor="validationCustom05">Schedule Hours Friday</label>
                              <input className="form-control" id="validationCustom05" type="text" required />
                            </div>

                            <div className="col-md-3">
                              <label className="form-label" htmlFor="validationCustom05">Schedule Hours Saturday</label>
                              <input className="form-control" id="validationCustom05" type="text" required />
                            </div>

                            <div className="col-md-3">
                              <label className="form-label" htmlFor="validationCustom05">Schedule Hours Sunday</label>
                              <input className="form-control" id="validationCustom05" type="text" required />
                            </div>


                          </>
                        )}

                        <div className="col-md-3">
                          <label className="form-label" htmlFor="validationCustom05">Booking Diary Full At Percent</label>
                          <input className="form-control" id="validationCustom05" type="text" required />
                          <div className="invalid-feedback">Please provide a valid zip.</div>
                        </div>

                        <div className="col-lg-4">
                          <label className="form-label" htmlFor="serialNumber">Send Link In Reminders</label>
                          <div className={`main-toggle ms-sm-2 main-toggle-dark ${toggleStates.serialNumber ? 'on' : 'off'}`} onClick={() => handleToggle('serialNumber')}>
                            <span className={toggleStates.serialNumber ? 'active' : ''}>
                              {toggleStates.serialNumber ? '' : ''}
                            </span>
                          </div>
                        </div>





                      </form>


                    </div>

                  </div>
                </Accordion.Body>


                <Accordion.Body id="" className="">

                  <div className="col-lg-12 col-md-12">
                    <div className="card">
                      <div className="card-header row-sm row justify-content-between" style={{ backgroundColor: '#38cab3', color: 'white', padding: '10px' }}>
                        <div className="row-sm row " >
                          <div>
                            <a
                              className=" btn-dark text-white btn-icon mt-2"
                              data-placement="top"
                            //   href="#"
                            >
                              <i className="fa fa-users"></i>
                            </a>
                          </div>
                          <div>
                            <h3 className="mt-3">Branding</h3>
                          </div>
                        </div>

                      </div>

                      <div className="">
                        <form className="row g-3 needs-validation" noValidate>
                          {/* Additional Fields */}
                          <div className="col-md-4">
                            <label className="form-label" htmlFor="validationCustom05">Public Bookings Logo</label>
                            <input className="form-control" id="validationCustom05" type="file" required />
                          </div>

                          <div className="col-md-4">
                            <label className="form-label" htmlFor="validationCustom05">Navbar Color</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>
                          <div className="col-md-4">
                            <label className="form-label" htmlFor="validationCustom05">Box Heading Color</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>

                        </form>


                      </div>

                    </div>

                  </div>
                </Accordion.Body>


              </Accordion.Item>
            </Accordion>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};



export default PublicBookings;
