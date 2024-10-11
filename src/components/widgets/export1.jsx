
import React, { Fragment, useState } from 'react';
import { Accordion, Col, Row , Form, Button} from 'react-bootstrap';
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
const Export1 = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  // Handler for the Cancel button
  const handleCancel = () => {
    navigate(-1); // Navigate back to the previous page
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
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);

  const handleClickCustomer = () => {
    setOpen6(true);
  };

  const handleClickVehicles = () => {
    setOpen5(true);
  };

  const handleClickSuppliers = () => {
    setOpen4(true);
  };

  const handleClickProducts = () => {
    setOpen3(true);
  };

  const handleClickHistory1 = () => {
    setOpen2(true);
  };

  const handleClickHistory2 = () => {
    setOpen1(true);
  };
  
  const handleClosedraggable1 = () => {
    setOpen1(false);
  };
  const handleClosedraggable2 = () => {
    setOpen2(false);
  };
  const handleClosedraggable3 = () => {
    setOpen3(false);
  };

  const handleClosedraggable4 = () => {
    setOpen4(false);
  };

  const handleClosedraggable5 = () => {
    setOpen5(false);
  };

  const handleClosedraggable6 = () => {
    setOpen6(false);
  };

  


  return (

    

    <Fragment>
    <Pageheader title="Actions"  heading="Actions"   active="Export" />
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
                            <h3 className="mt-2">Export Customers</h3>
                            </div>
                    </div>
                    <div className="row-sm row ">
                            <div>
                                <a
                                    className="text-white btn-icon "
                                    data-placement="top"
                                    data-bs-toggle="tooltip"
                                    title=""
                                    onClick={handleClickCustomer}
                                >
                                    <i className="fas fa-cloud-download-alt"></i>
                                </a>

                                <Dialog
                                    open={open6}
                                    onClose={handleClosedraggable6}
                                    PaperComponent={PaperComponent}
                                    aria-labelledby="draggable-dialog-title6"
                                  >
                                    <DialogTitle style={{ cursor: "move", backgroundColor:"#38cab3" }} id="draggable-dialog-title6">
                                      Export Customer To EMail
                                    </DialogTitle>
                                    <DialogContent >
                                      <DialogContentText className='row-sm row'>

                                        <p style={{paddingTop:"10px"}}>Enter email where you like the export sent to</p>
                                        <p>NOTE: It May take upto an Hour for the Email to be Sent</p>

                                        <div className="col-lg-12">
                                          <label className="form-label" htmlFor="validationCustom05">Email</label>
                                          <input className="form-control" id="validationCustom05" type="text" required />
                                        </div>

                                
                                      </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                      <Button variant="secondary" className="me-1" onClick={handleClosedraggable6}>
                                        Cancel
                                      </Button>
                                      <Button  className="me-1" variant="success">
                                        Export
                                      </Button>
                                    </DialogActions>
                                  </Dialog>
                            </div>
                   
                    </div>
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
                            <h3 className="mt-2">Export Vehicles</h3>
                            </div>
                    </div>
                    <div className="row-sm row ">
                            <div>
                                <a
                                    className="text-white btn-icon "
                                    data-placement="top"
                                    data-bs-toggle="tooltip"
                                    title=""
                                    onClick={handleClickVehicles}
                                >
                                    <i className="fas fa-cloud-download-alt"></i>
                                </a>
                                <Dialog
                                    open={open5}
                                    onClose={handleClosedraggable5}
                                    PaperComponent={PaperComponent}
                                    aria-labelledby="draggable-dialog-title5"
                                  >
                                    <DialogTitle style={{ cursor: "move", backgroundColor:"#38cab3" }} id="draggable-dialog-title5">
                                      Export Vehicle To EMail
                                    </DialogTitle>
                                    <DialogContent >
                                      <DialogContentText className='row-sm row'>

                                        <p style={{paddingTop:"10px"}}>Enter email where you like the export sent to</p>
                                        <p>NOTE: It May take upto an Hour for the Email to be Sent</p>

                                        <div className="col-lg-12">
                                          <label className="form-label" htmlFor="validationCustom05">Email</label>
                                          <input className="form-control" id="validationCustom05" type="text" required />
                                        </div>

                                
                                      </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                      <Button variant="secondary" className="me-1" onClick={handleClosedraggable5}>
                                        Cancel
                                      </Button>
                                      <Button  className="me-1" variant="success">
                                        Export
                                      </Button>
                                    </DialogActions>
                                  </Dialog>
                            </div>
                   
                    </div>
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
                            <h3 className="mt-2">Export Suppliers</h3>
                            </div>
                    </div>
                    <div className="row-sm row ">
                            <div>
                                <a
                                    className="text-white btn-icon "
                                    data-placement="top"
                                    data-bs-toggle="tooltip"
                                    title=""
                                    onClick={handleClickSuppliers}
                                >
                                    <i className="fas fa-cloud-download-alt"></i>
                                </a>

                                <Dialog
                                    open={open4}
                                    onClose={handleClosedraggable4}
                                    PaperComponent={PaperComponent}
                                    aria-labelledby="draggable-dialog-title4"
                                  >
                                    <DialogTitle style={{ cursor: "move", backgroundColor:"#38cab3" }} id="draggable-dialog-title4">
                                      Export Vendor To EMail
                                    </DialogTitle>
                                    <DialogContent >
                                      <DialogContentText className='row-sm row'>

                                        <p style={{paddingTop:"10px"}}>Enter email where you like the export sent to</p>
                                        <p>NOTE: It May take upto an Hour for the Email to be Sent</p>

                                        <div className="col-lg-12">
                                          <label className="form-label" htmlFor="validationCustom05">Email</label>
                                          <input className="form-control" id="validationCustom05" type="text" required />
                                        </div>

                                
                                      </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                      <Button variant="secondary" className="me-1" onClick={handleClosedraggable4}>
                                        Cancel
                                      </Button>
                                      <Button  className="me-1" variant="success">
                                        Export
                                      </Button>
                                    </DialogActions>
                                  </Dialog>
                            </div>
                   
                    </div>
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
                            <h3 className="mt-2">Export Products</h3>
                            </div>
                    </div>
                    <div className="row-sm row ">
                            <div>
                                <a
                                    className="text-white btn-icon "
                                    data-placement="top"
                                    data-bs-toggle="tooltip"
                                    title=""
                                    onClick={handleClickProducts}
                                >
                                    <i className="fas fa-cloud-download-alt"></i>
                                </a>
                                <Dialog
                                    open={open3}
                                    onClose={handleClosedraggable3}
                                    PaperComponent={PaperComponent}
                                    aria-labelledby="draggable-dialog-title3"
                                  >
                                    <DialogTitle style={{ cursor: "move", backgroundColor:"#38cab3" }} id="draggable-dialog-title3">
                                      Export Product To EMail
                                    </DialogTitle>
                                    <DialogContent >
                                      <DialogContentText className='row-sm row'>

                                        <p style={{paddingTop:"10px"}}>Enter email where you like the export sent to</p>
                                        <p>NOTE: It May take upto an Hour for the Email to be Sent</p>

                                        <div className="col-lg-12">
                                          <label className="form-label" htmlFor="validationCustom05">Email</label>
                                          <input className="form-control" id="validationCustom05" type="text" required />
                                        </div>

                                
                                      </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                      <Button variant="secondary" className="me-1" onClick={handleClosedraggable3}>
                                        Cancel
                                      </Button>
                                      <Button  className="me-1" variant="success">
                                        Export
                                      </Button>
                                    </DialogActions>
                                  </Dialog>
                            </div>
                   
                    </div>
                      </div>

                      <div className="">
                        <form className="row g-3 needs-validation" noValidate>
                          {/* Additional Fields */}
                          <div className="col-md-6">
                            <label className="form-label" htmlFor="validationCustom05">Start Records Form Number</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>
                          <div className="col-md-6">
                            <label className="form-label" htmlFor="validationCustom05">Maximum Number Of Records</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>
                          
                        </form>

                        
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
                            <h3 className="mt-2">Export History</h3>
                            </div>
                    </div>
                    <div className="row-sm row ">
                            <div>
                                <a
                                    className="text-white btn-icon "
                                    data-placement="top"
                                    data-bs-toggle="tooltip"
                                    title=""
                                    onClick={handleClickHistory2}
                                >
                                    <i className="fas fa-cloud-download-alt"></i>
                                </a>
                                <Dialog
                                    open={open2}
                                    onClose={handleClosedraggable2}
                                    PaperComponent={PaperComponent}
                                    aria-labelledby="draggable-dialog-title2"
                                  >
                                    <DialogTitle style={{ cursor: "move", backgroundColor:"#38cab3" }} id="draggable-dialog-title2">
                                      Export Invoice Item To EMail
                                    </DialogTitle>
                                    <DialogContent >
                                      <DialogContentText className='row-sm row'>

                                        <p style={{paddingTop:"10px"}}>Enter email where you like the export sent to</p>
                                        <p>NOTE: It May take upto an Hour for the Email to be Sent</p>

                                        <div className="col-lg-12">
                                          <label className="form-label" htmlFor="validationCustom05">Email</label>
                                          <input className="form-control" id="validationCustom05" type="text" required />
                                        </div>

                                
                                      </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                      <Button variant="secondary" className="me-1" onClick={handleClosedraggable2}>
                                        Cancel
                                      </Button>
                                      <Button  className="me-1" variant="success">
                                        Export
                                      </Button>
                                    </DialogActions>
                                  </Dialog>
                            </div>
                            <div>
                                <a
                                    className="text-white btn-icon "
                                    data-placement="top"
                                    data-bs-toggle="tooltip"
                                    title=""
                                    onClick={handleClickHistory1}
                                >
                                    <i className="fas fa-cloud-download-alt"></i>
                                </a>

                                <Dialog
                                    open={open1}
                                    onClose={handleClosedraggable1}
                                    PaperComponent={PaperComponent}
                                    aria-labelledby="draggable-dialog-title1"
                                  >
                                    <DialogTitle style={{ cursor: "move", backgroundColor:"#38cab3" }} id="draggable-dialog-title1">
                                      Export Invoice To EMail
                                    </DialogTitle>
                                    <DialogContent >
                                      <DialogContentText className='row-sm row'>

                                        <p style={{paddingTop:"10px"}}>Enter email where you like the export sent to</p>
                                        <p>NOTE: It May take upto an Hour for the Email to be Sent</p>

                                        <div className="col-lg-12">
                                          <label className="form-label" htmlFor="validationCustom05">Email</label>
                                          <input className="form-control" id="validationCustom05" type="text" required />
                                        </div>

                                
                                      </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                      <Button variant="secondary" className="me-1" onClick={handleClosedraggable1}>
                                        Cancel
                                      </Button>
                                      <Button  className="me-1" variant="success">
                                        Export
                                      </Button>
                                    </DialogActions>
                                  </Dialog>
                            </div>
                   
                    </div>
                      </div>

                      <div className="">
                        <form className="row g-3 needs-validation" noValidate>
                          {/* Additional Fields */}
                          <div className="col-lg-4">
                              <Form.Label>Begin Date</Form.Label>
                              <div className="input-group">
                                <span className="input-group-text">
                                  <i className="typcn typcn-calendar-outline tx-24 lh--9 op-6"></i>
                                </span>
                                <DatePicker
                                  selected={startDate}
                                  onChange={(date) => setStartDate(date)}
                                  className="form-control"
                                  placeholderText="Select Start Date"
                                />
                              </div>
                            </div>
                            <div className=" col-lg-4">
                              <Form.Label>End Date</Form.Label>
                              <div className="input-group">
                                <span className="input-group-text">
                                  <i className="typcn typcn-calendar-outline tx-24 lh--9 op-6"></i>
                                </span>
                                <DatePicker
                                  selected={endDate}
                                  onChange={(date) => setEndDate(date)}
                                  className="form-control"
                                  placeholderText="Select End Date"
                                />
                              </div>
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



export default Export1;
