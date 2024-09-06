import React, { Fragment, useState } from 'react';
import { Accordion, Col, Row, Form, Card, Button } from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";
import { MultiSelect } from "react-multi-select-component";
import { options } from "../../../common/selectdata";

import Draggable from 'react-draggable';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
} from "@mui/material";
import { Breadcrumb, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Pageheader from '../../../layout/layoutcomponent/pageheader';


const Settings = () => {

  const [selected, setSelected] = useState([]);



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


  const [isActive, setIsActive] = useState(false); // State for toggle button

  // Toggle button handler
  const toggleActiveState = () => {
    setIsActive(!isActive);
  };

   // State to track each toggle button's state
   const [toggleStates, setToggleStates] = useState({
    gstFree: false,
    dontUpdateQty: false,
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


  return (




    <Fragment>

      {/* <Pageheader />   */}
      <Pageheader title="Edit"     active="Edit" />

      <Row className='faq mt-5'>
        <Col xl={12}>
          <div className="panel-group2" id="accordion11" role="tablist">

            <Accordion className='overflow-hidden card'>
              <Accordion.Item eventKey="0" >
                <Accordion.Header className='accordion-toggle font-weight-semibold tx-12 panel-heading2 ' >


                  <div className="row-sm row " >

                    <div>
                      <a className="btn ripple btn-dark text-white btn-icon" data-placement="top" href="#">
                        <i className="fa fa-tags"></i>
                      </a>
                    </div>
                    <div>
                      <h4 className='mt-1'>BK01 Brake Pads Remove and Replace</h4>
                    </div>

                  </div>

                  <div className="row-sm row justify-content-between">
                    {/* Summary  Fields */}

                    {/* <div class="col-lg-3">

                      <div class="form-group">
                        <label class="custom-switch form-switch mb-0  p-0 form-label">
                          <input name="custom-switch-radio" type="checkbox" class="custom-switch-input form-control" />
                          <span class="custom-switch-indicator custom-switch-indicator-lg"></span>
                        </label>
                      </div>
                    </div> */}

                    {/* Summary  Fields */}
                    {/* <div class="col-lg-3">

                      <div class="form-group">
                        <label class="custom-switch form-switch mb-0  p-0 form-label">
                          <input name="custom-switch-radio" type="checkbox" class="custom-switch-input form-control" />
                          <span class="custom-switch-indicator custom-switch-indicator-lg"></span>
                        </label>
                      </div>
                    </div> */}


                  </div>

                </Accordion.Header>

                <Accordion.Body id="collapseFour1" className="panel-body">
                  <div className="col-lg-12 col-md-12">
                    <div className="card">




                      <div className="">
                        <form className="row g-3 needs-validation" noValidate>

                          {/* Additional Fields */}
                          <div className="col-md-4">
                            <label className="form-label" htmlFor="validationCustom05">Item Code</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>
                          <div className="col-md-4">
                            <label className="form-label" htmlFor="validationCustom05">Description</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>
                          <div className="col-md-4">
                            <label className="form-label" htmlFor="validationCustom05">Description 2</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>

                          <div className="col-md-4">
                            <label className="form-label" htmlFor="validationCustom05">Searchable Tags</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>
                          <div class="col-lg-4">
                            <label className="form-label" htmlFor="validationCustom05">Group</label>
                            <div class="input-group input-group">
                              <input placeholder="" type="text" class="form-control form-control" fdprocessedid="2wwup" />

                              <div class="input-group-text">
                                <label class="ckbox wd-16 mg-b-0">
                                  <i className="modal-effect fa fa-plus  d-grid "
                                    href="#modaldemo8"
                                    variant="primary"
                                    onClick={handleClickOpen1}
                                  ></i>

                                  <Dialog
                                    open={open1}
                                    onClose={handleClosedraggable}
                                    PaperComponent={PaperComponent}
                                    aria-labelledby="draggable-dialog-title"
                                  >
                                    <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
                                      New Product Group
                                    </DialogTitle>
                                    <DialogContent>
                                      <DialogContentText>
                                        <label className="form-label" htmlFor="validationCustom05">Name</label>
                                        <input className="form-control" id="validationCustom05" type="text" required />
                                        <label className="form-label" htmlFor="validationCustom05">Description</label>
                                        <input className="form-control" id="validationCustom05" type="text" required />
                                        <label className="form-label" htmlFor="validationCustom05">Category</label>
                                        <input className="form-control" id="validationCustom05" type="text" required />
                                      </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                      <Button variant="secondary" className="me-1" onClick={handleClosedraggable}>
                                        Cancel
                                      </Button>
                                      <Button onClick={handleClosedraggable} className="me-1" variant="success">
                                        Save
                                      </Button>
                                    </DialogActions>
                                  </Dialog>
                                </label>
                              </div>
                            </div>

                          </div>




                          <div className="col-md-4">
                            <label className="form-label" htmlFor="validationCustom05">Category</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>


                          {/* Search By Field */}
                          <div className="col-lg-4">
                            <p>Type</p>
                            <MultiSelect
                              value={selected}
                              onChange={setSelected}
                              labelledBy="Select"
                              options={options}
                            />
                          </div>
                          <div className="col-md-4">
                            <label className="form-label" htmlFor="validationCustom05">Default Labour Qty</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>

                          <div className="col-md-4">
                          </div>



                          {/* Toggle Bars By Field */}
                          <div className="col-lg-3">
                            <label className="form-label" htmlFor="gstFree">GST Free</label>
                            <div className="form-group">
                              <label className="custom-switch form-switch mb-0 p-0 form-label">
                                <input
                                  type="checkbox"
                                  className="custom-switch-input form-control"
                                  checked={toggleStates.gstFree}
                                  onChange={() => handleToggle('gstFree')}
                                />
                                <span
                                  className="custom-switch-indicator custom-switch-indicator-lg"
                                  style={{
                                    backgroundColor: toggleStates.gstFree ? "green" : "orange",
                                    color: "white",
                                  }}
                                >
                                  {toggleStates.gstFree ? "On" : "Off"}
                                </span>
                              </label>
                            </div>
                          </div>

                          <div className="col-lg-3">
                            <label className="form-label" htmlFor="validationCustom05">Service</label>
                            <div className="form-group ">
                              <label className="custom-switch form-switch mb-0 p-0 form-label">
                                <input
                                  type="checkbox"
                                  className="custom-switch-input form-control"
                                  checked={isActive}
                                  onChange={toggleActiveState}
                                />
                                <span
                                  className="custom-switch-indicator custom-switch-indicator-lg"
                                  style={{
                                    backgroundColor: isActive ? "green" : "orange",
                                    color: "white",
                                  }}
                                >
                                  {isActive ? "On" : "Off"}
                                </span>
                              </label>
                            </div>
                          </div>




                          <div className="col-lg-3">
                            <label className="form-label" htmlFor="priceLookup">Price Lookup</label>
                            <div className="form-group">
                              <label className="custom-switch form-switch mb-0 p-0 form-label">
                                <input
                                  type="checkbox"
                                  className="custom-switch-input form-control"
                                  checked={toggleStates.priceLookup}
                                  onChange={() => handleToggle('priceLookup')}
                                />
                                <span
                                  className="custom-switch-indicator custom-switch-indicator-lg"
                                  style={{
                                    backgroundColor: toggleStates.priceLookup ? "green" : "orange",
                                    color: "white",
                                  }}
                                >
                                  {toggleStates.priceLookup ? "On" : "Off"}
                                </span>
                              </label>
                            </div>
                          </div>


                          {/*  */}
                          <div class="col-lg-4">
                            <label className="form-label" htmlFor="validationCustom05">Retail Price</label>
                            <div class="input-group input-group">
                              <div class="input-group-text">
                                <label class="ckbox wd-16 mg-b-0">
                                  <i className="far fa-newspaper"></i>
                                </label>
                              </div>

                              <input placeholder="0" type="text" class="form-control form-control" fdprocessedid="2wwup" />
                            </div>
                          </div>

                          <div class="col-lg-4">
                            <label className="form-label" htmlFor="validationCustom05">Cost(Excl.Tax)</label>
                            <div class="input-group input-group">
                              <div class="input-group-text">
                                <label class="ckbox wd-16 mg-b-0">
                                  <i className="fa fa-credit-card"></i>
                                </label>
                              </div>

                              <input placeholder="0" type="text" class="form-control form-control" fdprocessedid="2wwup" />
                            </div>
                          </div>


                          <div class="col-lg-4">
                            <label className="form-label" htmlFor="validationCustom05">Cost(Incl.Tax)</label>
                            <div class="input-group input-group">
                              <div class="input-group-text">
                                <label class="ckbox wd-16 mg-b-0">
                                  <i className="far fa-credit-card"></i>
                                </label>
                              </div>

                              <input placeholder="0" type="text" class="form-control form-control" fdprocessedid="2wwup" />
                            </div>
                          </div>


                          <div class="col-lg-4">
                            <label className="form-label" htmlFor="validationCustom05">Price 2</label>
                            <div class="input-group input-group">
                              <div class="input-group-text">
                                <label class="ckbox wd-16 mg-b-0">
                                  <i className="mdi mdi-bank"></i>
                                </label>
                              </div>

                              <input placeholder="0" type="text" class="form-control form-control" fdprocessedid="2wwup" />
                            </div>
                          </div>

                          <div class="col-lg-4">
                            <label className="form-label" htmlFor="validationCustom05">Price 3</label>
                            <div class="input-group input-group">
                              <div class="input-group-text">
                                <label class="ckbox wd-16 mg-b-0">
                                <i className="mdi mdi-bank"></i>
                                </label>
                              </div>

                              <input placeholder="0" type="text" class="form-control form-control" fdprocessedid="2wwup" />
                            </div>
                          </div>


                          <div class="col-lg-4">
                            <label className="form-label" htmlFor="validationCustom05">Price 4</label>
                            <div class="input-group input-group">
                              <div class="input-group-text">
                                <label class="ckbox wd-16 mg-b-0">
                                <i className="mdi mdi-bank"></i>
                                </label>
                              </div>

                              <input placeholder="0" type="text" class="form-control form-control" fdprocessedid="2wwup" />
                            </div>
                          </div>


                          <div className="col-md-4">
                            <label className="form-label" htmlFor="validationCustom05">Imported ID</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                            {/* <div className="invalid-feedback">Please provide a valid zip.</div> */}
                          </div>

                        </form>
                        <div className='row'>
                          <div className="col-md-6">
                            <label className="form-label" htmlFor="validationCustom05">Comment</label>
                            <textarea class="form-control" placeholder="Textarea" rows="3"></textarea>
                          </div>

                          <div className="col-md-6">
                            <label className="form-label" htmlFor="validationCustom05">Job Card Comment</label>
                            <textarea class="form-control" placeholder="Textarea" rows="3"></textarea>
                          </div>
                        </div>
                      </div>



                    </div>

                    <div id="button6">
                      <div className="text-wrap row justify-content-between">
                        <div className="btn-list">
                          <button type="button" className="btn btn-primary">
                            Cancel
                          </button>
                          <button type="button" className="btn btn-danger">
                            Delete
                          </button>


                        </div>
                        <div>
                          <button type="button" className="btn btn-teal">
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Accordion.Body>



              </Accordion.Item>
            </Accordion>

            <Accordion className='overflow-hidden card'>
              <Accordion.Item eventKey="0">
                <Accordion.Header className='accordion-toggle font-weight-semibold tx-12 panel-heading2'>
                  <div className="row-sm row justify-content-between" >
                    <div>
                      <a className="btn ripple btn-dark text-white btn-icon" data-placement="top" href="#">
                        <i className="fa fa-folder-open"></i>
                      </a>
                    </div>
                    <div>
                      <h4 className='mt-1'>Product Invoices</h4>
                    </div>
                  </div>
                </Accordion.Header>

                <Accordion.Body id="collapseFour1" className="panel-body">
                  <div className="col-lg-12 col-md-12">
                    <div className="card">
                      <h5>No Invoice Found</h5>
                    </div>
                  </div>
                </Accordion.Body>


              </Accordion.Item>
            </Accordion>

            <Accordion className="overflow-hidden card">
              <Accordion.Item eventKey="0" >
                <Accordion.Header className='accordion-toggle font-weight-semibold tx-12 panel-heading2' >
                  <div className="row-sm row justify-content-between" >
                    <div>
                      <a className="btn ripple btn-dark text-white btn-icon" data-placement="top" href="#">
                        <i className="fa fa-list-ul"></i>
                      </a>
                    </div>
                    <div>
                      <h4 className='mt-1'>Parts Order</h4>
                    </div>
                  </div>
                </Accordion.Header>

                <Accordion.Body id="collapseFour1" className="panel-body">
                  <div className="col-lg-12 col-md-12">
                    <div className="card">
                      <h5>No Orders Found</h5>
                    </div>
                  </div>
                </Accordion.Body>


              </Accordion.Item>
            </Accordion>

            <Accordion className="overflow-hidden card">
              <Accordion.Item eventKey="0" >
                <Accordion.Header className='accordion-toggle font-weight-semibold tx-12 panel-heading2' >
                  <div className="row-sm row justify-content-between" >
                    <div>
                      <a className="btn ripple btn-dark text-white btn-icon" data-placement="top" href="#">
                        <i className="fa fa-industry"></i>
                      </a>
                    </div>
                    <div>
                      <h4 className='mt-1'>Purchase History</h4>
                    </div>
                  </div>
                </Accordion.Header>

                <Accordion.Body id="collapseFour1" className="panel-body">
                  <div className="col-lg-12 col-md-12">
                    <div className="card">
                      <h5>No Purchases Found</h5>
                    </div>
                  </div>
                </Accordion.Body>

              </Accordion.Item>
            </Accordion>

            <Accordion className="overflow-hidden card">
              <Accordion.Item eventKey="0" >
                <Accordion.Header className='accordion-toggle font-weight-semibold tx-12 panel-heading2' >
                  <div className="row-sm row justify-content-between" >
                    <div>
                      <a className="btn ripple btn-dark text-white btn-icon" data-placement="top" href="#">
                        <i className="fa fa-book"></i>
                      </a>
                    </div>
                    <div>
                      <h4 className='mt-1'>Stock Take Log</h4>
                    </div>
                  </div>
                </Accordion.Header>

                <Accordion.Body id="collapseFour1" className="panel-body">
                  <div className="col-lg-12 col-md-12">
                    <div className="card">
                      <h5>Log Is Empty</h5>
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
}

Settings.propTypes = {};

Settings.defaultProps = {};

export default Settings;
