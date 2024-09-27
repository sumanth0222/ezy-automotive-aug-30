import React, { useState, Fragment } from 'react';
import { Card, Col, Button, Form } from 'react-bootstrap';
import Pageheader from '../../../layout/layoutcomponent/pageheader';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom"; 
import Draggable from 'react-draggable';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
} from "@mui/material";

const Groups = () => {
 
  const navigate = useNavigate(); 
  const [startDate, setStartDate] = useState(null);
  const [selected, setSelected] = useState([]);
  // Custom validation
 
  const [validatedCustom, setValidatedCustom] = useState(false);

  const handleSubmitCustom = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidatedCustom(true);
  };

  // State to track each toggle button's state
  const [toggleStates, setToggleStates] = useState({
    gstFree: false,
    
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
   
    // Handler for the Cancel button
  const handleCancel = () => {
    navigate(-1); // Navigate back to the previous page
  };
  
 
  

  return (
    <Fragment>
      <Pageheader title="Loan Cars" heading="Loan Cars" active="Loan Vehicle" />
      <div className="row">
        <Col lg={12} md={12}>
          <Card>
            <Card.Header
              className="row-sm row justify-content-between bg-primary" style={{paddingBottom:"6px"}}>
              <div className="row-sm row">
                <div>
                  <a
                    className="btn ripple btn-dark text-white btn-icon mt-2"
                    data-placement="top"
                    data-bs-toggle="tooltip"
                    title=""
                    href="#"
                  >
                    <i className="fa fa-calendar"></i>
                  </a>
                </div>
                <div>
                  <h3 className="mt-2">Loan Vehicles</h3>
                </div>
              </div>

              <div className="row-sm row">
               

              <div class="col-lg-3">
                            
                            <div class="input-group input-group">
                   

                              <div class="">
                                <label class="">

                                  <i className=" fa fa-star btn ripple btn-dark text-white btn-icon"
                                    href="#modaldemo8"
                                    variant="primary"
                                    title="Create Loan"
                                    onClick={handleClickOpen1}
                                  ></i>

                                  <Dialog
                                    open={open1}
                                    onClose={handleClosedraggable}
                                    PaperComponent={PaperComponent}
                                    aria-labelledby="draggable-dialog-title"
                                  >
                                    <DialogTitle style={{ cursor: "move", backgroundColor:"#38cab3" }} id="draggable-dialog-title">
                                      Create Loan Vehicle
                                    </DialogTitle>
                                    <DialogContent >
                                      <DialogContentText className='row-sm row'>
                                        <div className="col-lg-4">
                                          <label className="form-label" htmlFor="validationCustom05">Rego</label>
                                          <input className="form-control" id="validationCustom05" type="text" required />
                                        </div>

                                        <div className="col-lg-4">
                                          <label className="form-label" htmlFor="validationCustom05">Make</label>
                                          <input className="form-control" id="validationCustom05" type="text" required />
                                        </div>

                                        <div className="col-lg-4">
                                          <label className="form-label" htmlFor="validationCustom05">Model</label>
                                          <input className="form-control" id="validationCustom05" type="text" required />
                                        </div>

                                
                                        <div className="col-lg-4">
                                          <label className="form-label" htmlFor="validationCustom05">Model code</label>
                                          <input className="form-control" id="validationCustom05" type="text" required />
                                        </div>
                                        <div className="col-lg-4">
                                          <label className="form-label" htmlFor="validationCustom05">Model Series</label>
                                          <input className="form-control" id="validationCustom05" type="text" required />
                                        </div>
                                        <div className="col-lg-4">
                                          <label className="form-label" htmlFor="validationCustom05">Colour</label>
                                          <input className="form-control" id="validationCustom05" type="text" required />
                                        </div>
                                        <div className="col-lg-5 ">
                                          <Form.Label>Build Date</Form.Label>
                                          <div className="input-group">
                                          <span className="input-group-text">
                                            <i className="typcn typcn-calendar-outline tx-24 lh--9 op-6"></i>
                                          </span>
                                            <DatePicker
                                              selected={startDate}
                                              onChange={(date) => setStartDate(date)}
                                              className="form-control"
                                              placeholderText="Select Date"
                                            />
                                          </div>
                                        </div>

                                        
                                      </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                      <Button variant="secondary" className="me-1" onClick={handleClosedraggable}>
                                        Cancel
                                      </Button>
                                      <Button onClick={handleClosedraggable} className="me-1" variant="success">
                                        Create
                                      </Button>
                                    </DialogActions>
                                  </Dialog>
                                </label>
                              </div>
                            </div>

                          </div>

              </div>
              
            </Card.Header>
            <Card.Body>
              
                    <h3 style={{textAlign:"center"}}>No Loan Vehicles Found</h3>
            </Card.Body>
          </Card>
        </Col>
      </div>
    </Fragment>
  );
};

export default Groups;
