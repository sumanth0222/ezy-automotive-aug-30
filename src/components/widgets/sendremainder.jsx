
import React, { useState, Fragment } from 'react';
import { Card, Col, Button, Form, Tabs, Tab, Row} from 'react-bootstrap';
import Pageheader from '../../layout/layoutcomponent/pageheader';
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
import SunEditor from 'suneditor-react'; // Make sure you have this installed
import 'suneditor/dist/css/suneditor.min.css'; // Import SunEditor styles

const SendRemainder = () => {
 
  const navigate = useNavigate(); 
  const [startDate, setStartDate] = useState(null);
  
  const [endDate, setEndDate] = useState(null);
  const [value, setValue] = useState(''); // State for SunEditor

 
 

  

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
      <Pageheader title="Action" heading="Action" active="Send Remainder" />
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
                  <h3 className="mt-2">Send Remainder</h3>
                </div>
              </div>

              <div className="row-sm row">
               

              <div class="col-lg-3">
                            
                            <div class="input-group input-group">
                   

                              <div class="">
                                <label class="">

                                  <i className=" fa fa-bell btn ripple btn-dark text-white btn-icon"
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
                                      Send Remainders
                                    </DialogTitle>
                                    <DialogContent >
                                      <DialogContentText className='row-sm row'>
                                        
                                      <div className="panel panel-primary tabs-style-3">
                <div className="tab-menu-heading">
                  <div className="tabs-menu">
                    <Tabs defaultActiveKey="Bookings" className="nav panel-tabs border-bottom-0">

                      {/* Bookings Tab */}
                      <Tab eventKey="Bookings" title={<><span><i className="fa fa-user"></i></span></>}>

                        <div className="tab-pane active" style={{paddingTop:"30px"}}>
                          <div className="row-sm row">

                            <div className="col-lg-5">
                              <Form.Label>Start Date</Form.Label>
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
                            <div className="mg-t-20 mg-lg-t-0 col-lg-5">
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
                            <div className="col-md-12">
                                 <label className="form-label" htmlFor="validationCustom05">Note</label>
                                 <textarea className="form-control" placeholder="Textarea" rows="5"></textarea>
                            </div>
                            
                            <Row>
        
                                <Card>
                                    <Card.Header className="border-bottom-0" style={{paddingTop:"25px"}}>
                                    <h3 className="">Email Message</h3>
                                    </Card.Header>
                                    <Card.Body>
                                    <SunEditor
                                        setContents={value}
                                        onChange={setValue}
                                        setOptions={{
                                        buttonList: [
                                            ['undo', 'redo'],
                                            ['font', 'fontSize'],
                                            ['paragraphStyle', 'blockquote'],
                                            ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
                                            ['fontColor', 'hiliteColor'],
                                            ['align', 'list', 'lineHeight'],
                                            ['outdent', 'indent'],
                                            ['table', 'horizontalRule', 'link', 'image', 'video'],
                                            ['preview', 'print'],
                                            ['removeFormat']
                                        ],
                                        defaultTag: 'div',
                                        minHeight: '300px',
                                        showPathLabel: false,
                                        attributesWhitelist: {
                                            all: 'style',
                                            table: 'cellpadding|width|cellspacing|height|style',
                                            tr: 'valign|style',
                                            td: 'styleinsert|height|style',
                                            img: 'title|alt|src|style'
                                        }
                                        }}
                                    />
                                    </Card.Body>
                                </Card>
                            
                            
                            </Row>

                            <Row>
        
                                <Card>
                                    <Card.Header className="border-bottom-0">
                                    <h3 className="">Document Message</h3>
                                    </Card.Header>
                                    <Card.Body>
                                    <SunEditor
                                        setContents={value}
                                        onChange={setValue}
                                        setOptions={{
                                        buttonList: [
                                            ['undo', 'redo'],
                                            ['font', 'fontSize'],
                                            ['paragraphStyle', 'blockquote'],
                                            ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
                                            ['fontColor', 'hiliteColor'],
                                            ['align', 'list', 'lineHeight'],
                                            ['outdent', 'indent'],
                                            ['table', 'horizontalRule', 'link', 'image', 'video'],
                                            ['preview', 'print'],
                                            ['removeFormat']
                                        ],
                                        defaultTag: 'div',
                                        minHeight: '300px',
                                        showPathLabel: false,
                                        attributesWhitelist: {
                                            all: 'style',
                                            table: 'cellpadding|width|cellspacing|height|style',
                                            tr: 'valign|style',
                                            td: 'styleinsert|height|style',
                                            img: 'title|alt|src|style'
                                        }
                                        }}
                                    />
                                    </Card.Body>
                                </Card>
                            
                            
                            </Row>


                          </div>

                         
                       


                        </div>
                      </Tab>

                      {/* Inspections Tab */}
                      <Tab eventKey="Inspections" title={<><span><i className="fa fa-comment"></i></span></>}>

                        <div className="tab-pane active" style={{paddingTop:"30px"}}>
                          <div className="row-sm row">

                          <div className="col-lg-5">
                              <Form.Label>Start Date</Form.Label>
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
                            <div className="mg-t-20 mg-lg-t-0 col-lg-5">
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
                            <div className="col-md-12">
                                 <label className="form-label" htmlFor="validationCustom05">SMS Message</label>
                                 <textarea className="form-control" placeholder="Textarea" rows="5"></textarea>
                            </div>

                          </div>

                          
                        </div>
                      </Tab>

                      {/* Jobs Tab */}
                      <Tab eventKey="Jobs" title={<><span><i className="fa fa-envelope"></i></span></>}>

                        <div className="tab-pane active" style={{paddingTop:"30px"}}>
                          
                          <div className="row-sm row">

                            <div className="col-lg-5">
                              <Form.Label>Start Date</Form.Label>
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
                            <div className="mg-t-20 mg-lg-t-0 col-lg-5">
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
                            <Row>
        
                                <Card>
                                    <Card.Header className="border-bottom-0" style={{paddingTop:"25px"}}>
                                    <h3 className="">Email Message</h3>
                                    </Card.Header>
                                    <Card.Body>
                                    <SunEditor
                                        setContents={value}
                                        onChange={setValue}
                                        setOptions={{
                                        buttonList: [
                                            ['undo', 'redo'],
                                            ['font', 'fontSize'],
                                            ['paragraphStyle', 'blockquote'],
                                            ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
                                            ['fontColor', 'hiliteColor'],
                                            ['align', 'list', 'lineHeight'],
                                            ['outdent', 'indent'],
                                            ['table', 'horizontalRule', 'link', 'image', 'video'],
                                            ['preview', 'print'],
                                            ['removeFormat']
                                        ],
                                        defaultTag: 'div',
                                        minHeight: '300px',
                                        showPathLabel: false,
                                        attributesWhitelist: {
                                            all: 'style',
                                            table: 'cellpadding|width|cellspacing|height|style',
                                            tr: 'valign|style',
                                            td: 'styleinsert|height|style',
                                            img: 'title|alt|src|style'
                                        }
                                        }}
                                    />
                                    </Card.Body>
                                </Card>
                            
                            
                            </Row>

                            
                          </div>

                        </div>
                      </Tab>

                      {/* Orders Tab */}
                      <Tab eventKey="Orders" title={<><span><i className="fa fa-print"></i></span></>}>

                        <div className="tab-pane active" style={{paddingTop:"30px"}}>
                          
                          <div className="row-sm row">

                            <div className="col-lg-5">
                              <Form.Label>Start Date</Form.Label>
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
                            <div className="mg-t-20 mg-lg-t-0 col-lg-5">
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
                            <Row>
        
                                <Card>
                                    <Card.Header className="border-bottom-0" style={{paddingTop:"25px"}}>
                                    <h3 className="">Document Message</h3>
                                    </Card.Header>
                                    <Card.Body>
                                    <SunEditor
                                        setContents={value}
                                        onChange={setValue}
                                        setOptions={{
                                        buttonList: [
                                            ['undo', 'redo'],
                                            ['font', 'fontSize'],
                                            ['paragraphStyle', 'blockquote'],
                                            ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
                                            ['fontColor', 'hiliteColor'],
                                            ['align', 'list', 'lineHeight'],
                                            ['outdent', 'indent'],
                                            ['table', 'horizontalRule', 'link', 'image', 'video'],
                                            ['preview', 'print'],
                                            ['removeFormat']
                                        ],
                                        defaultTag: 'div',
                                        minHeight: '300px',
                                        showPathLabel: false,
                                        attributesWhitelist: {
                                            all: 'style',
                                            table: 'cellpadding|width|cellspacing|height|style',
                                            tr: 'valign|style',
                                            td: 'styleinsert|height|style',
                                            img: 'title|alt|src|style'
                                        }
                                        }}
                                    />
                                    </Card.Body>
                                </Card>
                            
                            
                            </Row>

                            
                          </div>

                        </div>
                      </Tab>

                      
                    </Tabs>
                  </div>
                </div>
              </div>

                                        
                                      </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                      <Button variant="secondary" className="me-1" onClick={handleClosedraggable}>
                                        Cancel
                                      </Button>
                                      <Button onClick={handleClosedraggable} className="me-1" variant="success">
                                        Send
                                      </Button>
                                    </DialogActions>
                                  </Dialog>
                                </label>
                              </div>
                            </div>

                          </div>

              </div>
              
            </Card.Header>
            
          </Card>
        </Col>
      </div>
    </Fragment>
  );
};

export default SendRemainder;
