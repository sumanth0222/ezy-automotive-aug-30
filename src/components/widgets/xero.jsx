
import React, { Fragment, useState } from 'react';
import { Accordion, Col, Row, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import Pageheader from '../../layout/layoutcomponent/pageheader';
import Draggable from 'react-draggable';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
} from "@mui/material";
import "react-datepicker/dist/react-datepicker.css";
import 'suneditor/dist/css/suneditor.min.css'; // Import SunEditor styles

const Accounting = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

 

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
 

  return (

    

    <Fragment>
    <Pageheader title="Integrations"  heading="Accounting Integration"   active="Xero" />
      <Row className='faq'>
        <Col xl={12}>
          <div className="" id="" role="">
            <Accordion className='overflow-hidden'>
              <Accordion.Item>
             

                <Accordion.Body id="" className="">
                    
                        <div className="col-lg-12 col-md-12">
                            <div className="card">
                            <div className="card-header row-sm row justify-content-between" style={{ backgroundColor: '#38cab3', color: 'white', padding: '10px' }}>
                    <div className="row-sm row">
                            <div>
                                <a
                                    className=" btn-dark text-white btn-icon mt-2"
                                    data-placement="top"
                                    data-bs-toggle="tooltip"
                                    title=""
                                    href="#"
                                >
                                    <i className=""></i>
                                </a>
                            </div>
                   
                            <div>
                            <h3 className="mt-3">Xero Not Authorised</h3>
                            </div>
                    </div>
                      </div>
                      
                    </div>

                    <div id="button6">
                      <div className="text-wrap row justify-content-between">
                        <div className="btn-list">
                          <button type="button" className="btn btn-primary" onClick={handleCancel}>
                            Cancel
                          </button>
                          
                        </div>
                        <div>
                          <button type="button" className="btn btn-teal" onClick={handleClickOpen1}>
                            Authorize
                          </button>
                          <Dialog
                                    open={open1}
                                    onClose={handleClosedraggable}
                                    PaperComponent={PaperComponent}
                                    aria-labelledby="draggable-dialog-title"
                                  >
                                    <DialogTitle style={{ cursor: "move", backgroundColor:"#38cab3" }} id="draggable-dialog-title">
                                    PLEASE READ CAREFULLY
                                    </DialogTitle>
                                    <DialogContent >
                                      <DialogContentText className='row-sm row' style={{paddingTop:"15px"}}>
                                        
                                        {/* <h4>PLEASE READ CAREFULLY</h4> */}

                                        <p>
                                            The integration of ANY Accounting system with Workshop Software will Workshop Software will enable specific data (for example Customers and Suppliers ) to be Synced with each other. The syncing of data is a way to synchronise your data between the two systems.
                                        </p>

                                        <p>
                                            Care must be take NOT to create duplicates. Duplicates often occur when you import your Customers or Suppliers from one system to another and then integrate the systems together.
                                        </p>

                                        <p>
                                            If you are new to Workshop Software and / or have doubts on how to proceed, it is strongly recommended that you wait until you start the On Boarding Process.
                                        </p>

                                        <p>
                                            The removal of records in Workshop Software by the Workshop Software team, may be provided. <b> This is Subject to Workshop Software resource availability upon acceptance of the quoted consulting fee.</b>
                                        </p>

                                        
                                      </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                      <Button variant="secondary" className="me-1" onClick={handleClosedraggable}>
                                        Cancel
                                      </Button>
                                      <Button  className="me-1" variant="success">
                                        Continue
                                      </Button>
                                    </DialogActions>
                                  </Dialog>
                        </div>
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

// Accounting.propTypes = {};

// Accounting.defaultProps = {};

export default Accounting;
