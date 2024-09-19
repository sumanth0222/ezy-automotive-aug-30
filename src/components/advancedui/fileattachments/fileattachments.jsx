import React, { Fragment, useState } from 'react';
import { Accordion, Col, Row, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import "react-datepicker/dist/react-datepicker.css";
import Pageheader from '../../../layout/layoutcomponent/pageheader';
import { MultiSelect } from "react-multi-select-component";
import { Template } from "../../../common/selectdata";

const Collapse = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook
  const [selected, setSelected] = useState([]); // MultiSelect state

  // Handler for the Cancel button
  const handleCancel = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (

    

    <Fragment>
    <Pageheader title="Inspection"  heading="New Inspection"   active="Inspection Template" />
      <Row className='faq'>
        <Col xl={12}>
          <div className="" id="" role="">
            <Accordion className='overflow-hidden'>
              <Accordion.Item>
             

                <Accordion.Body id="" className="">
                  <div className="col-lg-12 col-md-12">
                    <div className="card">
                    <div className="card-header row-sm row justify-content-between" style={{ backgroundColor: '#38cab3', color: 'white', padding: '10px' }}>
                        <div>
                          <h3 className="">Inspection Template</h3>
                        </div>
                        
                      </div>
                      <div className="">
                        <form className="row g-3 needs-validation" noValidate>
                          {/* Additional Fields */}
                          <div className="col-md-4">
                            <label className="form-label" htmlFor="validationCustom05">Name</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                          </div>
                          <div className="col-md-4">
                            <label className="form-label" htmlFor="validationCustom05">Comment Label 1</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                          </div>
                          <div className="col-md-4">
                            <label className="form-label" htmlFor="validationCustom05">Comment Label 2</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                          </div>
                          <div className="col-md-12">
                            <label className="form-label" htmlFor="validationCustom05">Description</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                          </div>
                        </form>
                      </div>
                    </div>

                    <Row className="accordiondclose">
        <Col lg={12} md={12}>
          <div className="card overflow-hidden">
           
            <Card.Body>
              <div className="panel-group1" id="accordion11" role="tablist">

                <div className="card overflow-hidden mb-0">
                  <Accordion>
                    <Accordion.Item eventKey="Item1" className="accordion-toggle panel-heading1 ">
                      <Accordion.Header>EXTERIOR</Accordion.Header>
                      <Accordion.Body className="borders">
                      <form className="row g-3 needs-validation" noValidate>
                          {/* Additional Fields */}
                          <div className="col-md-4">
                              <p className="mg-b-9">Status</p>
                              <MultiSelect
                                value={selected}
                                onChange={setSelected}
                                labelledBy="Select"
                                options={Template}
                              />
                            </div>
                          <div className="col-md-8">
                            <label className="form-label" htmlFor="validationCustom05">Description</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                          </div>
                          <div className="col-md-4">
                            <label className="form-label" htmlFor="validationCustom05">Product Code</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                          </div>
                          <div className="col-md-8">
                            <label className="form-label" htmlFor="validationCustom05">Comments</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                          </div>
                        </form>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
                <div className="card overflow-hidden mb-0">
                  <Accordion>
                    <Accordion.Item eventKey="Item1" className="accordion-toggle panel-heading1">
                      <Accordion.Header className=" " id="headingOne">
                        STANDARD
                      </Accordion.Header>
                      <Accordion.Body className="borders">
                        <form className="row g-3 needs-validation" noValidate>
                          {/* Additional Fields */}
                          <div className="col-md-4">
                              <p className="mg-b-9">Status</p>
                              <MultiSelect
                                value={selected}
                                onChange={setSelected}
                                labelledBy="Select"
                                options={Template}
                              />
                            </div>
                          <div className="col-md-8">
                            <label className="form-label" htmlFor="validationCustom05">Description</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                          </div>
                          <div className="col-md-4">
                            <label className="form-label" htmlFor="validationCustom05">Product Code</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                          </div>
                          <div className="col-md-8">
                            <label className="form-label" htmlFor="validationCustom05">Comments</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                          </div>
                        </form>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
                <div className="card overflow-hidden mb-0">
                  <Accordion>
                    <Accordion.Item eventKey="Item1" className="accordion-toggle panel-heading1">
                      <Accordion.Header className=" " id="headingOne">
                        INTERIOR
                      </Accordion.Header>
                      <Accordion.Body className="borders">
                        <form className="row g-3 needs-validation" noValidate>
                          {/* Additional Fields */}
                          <div className="col-md-4">
                              <p className="mg-b-9">Status</p>
                              <MultiSelect
                                value={selected}
                                onChange={setSelected}
                                labelledBy="Select"
                                options={Template}
                              />
                            </div>
                          <div className="col-md-8">
                            <label className="form-label" htmlFor="validationCustom05">Description</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                          </div>
                          <div className="col-md-4">
                            <label className="form-label" htmlFor="validationCustom05">Product Code</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                          </div>
                          <div className="col-md-8">
                            <label className="form-label" htmlFor="validationCustom05">Comments</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                          </div>
                        </form>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
                <div className="card overflow-hidden mb-0">
                  <Accordion>
                    <Accordion.Item eventKey="Item1" className="accordion-toggle panel-heading1">
                      <Accordion.Header>TYRES</Accordion.Header>
                      <Accordion.Body className="borders">
                      <form className="row g-3 needs-validation" noValidate>
                          {/* Additional Fields */}
                          <div className="col-md-4">
                              <p className="mg-b-9">Status</p>
                              <MultiSelect
                                value={selected}
                                onChange={setSelected}
                                labelledBy="Select"
                                options={Template}
                              />
                            </div>
                          <div className="col-md-8">
                            <label className="form-label" htmlFor="validationCustom05">Description</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                          </div>
                          <div className="col-md-4">
                            <label className="form-label" htmlFor="validationCustom05">Product Code</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                          </div>
                          <div className="col-md-8">
                            <label className="form-label" htmlFor="validationCustom05">Comments</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                          </div>
                        </form>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
                <div className="card overflow-hidden mb-0">
                  <Accordion>
                    <Accordion.Item eventKey="Item1" className="accordion-toggle panel-heading1">
                      <Accordion.Header>UNDERBODY</Accordion.Header>
                      <Accordion.Body className="borders">
                      <form className="row g-3 needs-validation" noValidate>
                          {/* Additional Fields */}
                          <div className="col-md-4">
                              <p className="mg-b-9">Status</p>
                              <MultiSelect
                                value={selected}
                                onChange={setSelected}
                                labelledBy="Select"
                                options={Template}
                              />
                            </div>
                          <div className="col-md-8">
                            <label className="form-label" htmlFor="validationCustom05">Description</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                          </div>
                          <div className="col-md-4">
                            <label className="form-label" htmlFor="validationCustom05">Product Code</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                          </div>
                          <div className="col-md-8">
                            <label className="form-label" htmlFor="validationCustom05">Comments</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                          </div>
                        </form>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
                <div className="card overflow-hidden mb-0">
                  <Accordion>
                    <Accordion.Item eventKey="Item1" className="accordion-toggle panel-heading1">
                      <Accordion.Header>UNDER BONNET</Accordion.Header>
                      <Accordion.Body className="borders">
                      <form className="row g-3 needs-validation" noValidate>
                          {/* Additional Fields */}
                          <div className="col-md-4">
                              <p className="mg-b-9">Status</p>
                              <MultiSelect
                                value={selected}
                                onChange={setSelected}
                                labelledBy="Select"
                                options={Template}
                              />
                            </div>
                          <div className="col-md-8">
                            <label className="form-label" htmlFor="validationCustom05">Description</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                          </div>
                          <div className="col-md-4">
                            <label className="form-label" htmlFor="validationCustom05">Product Code</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                          </div>
                          <div className="col-md-8">
                            <label className="form-label" htmlFor="validationCustom05">Comments</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                          </div>
                        </form>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
            </Card.Body>
          </div>
        </Col>
                    </Row>





                    <div id="button6">
                      <div className="text-wrap row justify-content-between">
                        <div className="btn-list">
                          <button type="button" className="btn btn-primary" onClick={handleCancel}>
                            Cancel
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
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

Collapse.propTypes = {};

Collapse.defaultProps = {};

export default Collapse;
