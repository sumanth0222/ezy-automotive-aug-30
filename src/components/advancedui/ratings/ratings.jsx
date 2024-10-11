import React, { Fragment, useState } from 'react';
import { Accordion, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import "react-datepicker/dist/react-datepicker.css";
import Pageheader from '../../../layout/layoutcomponent/pageheader';


const Collapse = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Handler for the Cancel button
  const handleCancel = () => {
    navigate(-1); // Navigate back to the previous page
  };

  // State to track each toggle button's state
  const [toggleStates, setToggleStates] = useState({
    gstFree: false,
    dontUpdateQty: false,
    serialNumber: false,
    priceLookup: false,
    priceLookup1: false,
    priceLookup2: false,
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
      <Pageheader title="Inspection" heading="New Inspection" active="Inspection Settings" />
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
                          <h3 className="mt-2">Inspection Settings</h3>
                        </div>

                      </div>
                      <div className="">
                        <form className="row g-3 needs-validation" noValidate>
                          {/* Additional Fields */}
                          <div className="col-md-4">
                            <label className="form-label" htmlFor="validationCustom05">Default Product ID</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                          </div>
                          <div className="col-md-4">
                            <label className="form-label" htmlFor="validationCustom05">Default Service Advisor</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                          </div>
                          <div className="col-md-4">
                            <label className="form-label" htmlFor="validationCustom05">Default Contact Name</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                          </div>
                          <div className="col-md-3">
                            <label className="form-label" htmlFor="validationCustom05">Default Contact Number</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                          </div>
                          <div className="col-md-3">
                            <label className="form-label" htmlFor="validationCustom05">Default Contact Email</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                          </div>

                          <div className="col-lg-3">
                            <label className="form-label" htmlFor="gstFree">Hide Estimated Cost</label>
                            <div className={`main-toggle ms-sm-2 main-toggle-dark ${toggleStates.gstFree ? 'on' : 'off'}`} onClick={() => handleToggle('gstFree')}>
                              <span className={toggleStates.gstFree ? 'active' : ''}>
                                {toggleStates.gstFree ? '' : ''}
                              </span>
                            </div>
                          </div>

                          <div className="col-lg-3">
                            <label className="form-label" htmlFor="dontUpdateQty">Hide Estimated Hours</label>
                            <div className={`main-toggle ms-sm-2 main-toggle-dark ${toggleStates.dontUpdateQty ? 'on' : 'off'}`} onClick={() => handleToggle('dontUpdateQty')}>
                              <span className={toggleStates.dontUpdateQty ? 'active' : ''}>
                                {toggleStates.dontUpdateQty ? '' : ''}
                              </span>
                            </div>
                          </div>

                          <div className="col-lg-3">
                            <label className="form-label" htmlFor="serialNumber">Notify On Approval</label>
                            <div className={`main-toggle ms-sm-2 main-toggle-dark ${toggleStates.serialNumber ? 'on' : 'off'}`} onClick={() => handleToggle('serialNumber')}>
                              <span className={toggleStates.serialNumber ? 'active' : ''}>
                                {toggleStates.serialNumber ? '' : ''}
                              </span>
                            </div>
                          </div>

                          <div className="col-lg-3">
                            <label className="form-label" htmlFor="priceLookup">Notify On Refusal</label>
                            <div className={`main-toggle ms-sm-2 main-toggle-dark ${toggleStates.priceLookup ? 'on' : 'off'}`} onClick={() => handleToggle('priceLookup')}>
                              <span className={toggleStates.priceLookup ? 'active' : ''}>
                                {toggleStates.priceLookup ? '' : ''}
                              </span>
                            </div>
                          </div>

                          <div className="col-lg-3">
                            <label className="form-label" htmlFor="priceLookup1">Hide Estimated Product Cost</label>
                            <div className={`main-toggle ms-sm-2 main-toggle-dark ${toggleStates.priceLookup1 ? 'on' : 'off'}`} onClick={() => handleToggle('priceLookup1')}>
                              <span className={toggleStates.priceLookup1 ? 'active' : ''}>
                                {toggleStates.priceLookup1 ? '' : ''}
                              </span>
                            </div>
                          </div>

                          <div className="col-lg-3">
                            <label className="form-label" htmlFor="priceLookup2">Hide Estimated Product Price</label>
                            <div className={`main-toggle ms-sm-2 main-toggle-dark ${toggleStates.priceLookup2 ? 'on' : 'off'}`} onClick={() => handleToggle('priceLookup2')}>
                              <span className={toggleStates.priceLookup2 ? 'active' : ''}>
                                {toggleStates.priceLookup2 ? '' : ''}
                              </span>
                            </div>
                          </div>


                        </form>
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
