import React, { Fragment,useState } from 'react';
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
    <Pageheader title="Inspection"  heading="New Inspection"   active="Inspection Settings" />
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
                          <h3 className="">Inspection Settings</h3>
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
                                    backgroundColor: toggleStates.gstFree ? "#323251" : "#d6d6e6",
                                    color: "white",
                                  }}
                                >
                                  {toggleStates.gstFree ? "On" : "Off"}
                                </span>
                              </label>
                            </div>
                          </div>

                          <div className="col-lg-3">
                            <label className="form-label" htmlFor="dontUpdateQty">Hide Estimated Hours</label>
                            <div className="form-group">
                              <label className="custom-switch form-switch mb-0 p-0 form-label">
                                <input
                                  type="checkbox"
                                  className="custom-switch-input form-control"
                                  checked={toggleStates.dontUpdateQty}
                                  onChange={() => handleToggle('dontUpdateQty')}
                                />
                                <span
                                  className="custom-switch-indicator custom-switch-indicator-lg"
                                  style={{
                                    backgroundColor: toggleStates.dontUpdateQty ? "#323251" : "#d6d6e6",
                                    color: "white",
                                  }}
                                >
                                  {toggleStates.dontUpdateQty ? "On" : "Off"}
                                </span>
                              </label>
                            </div>
                    </div>

                          <div className="col-lg-3">
                            <label className="form-label" htmlFor="serialNumber">Notify On Approval</label>
                            <div className="form-group">
                              <label className="custom-switch form-switch mb-0 p-0 form-label">
                                <input
                                  type="checkbox"
                                  className="custom-switch-input form-control"
                                  checked={toggleStates.serialNumber}
                                  onChange={() => handleToggle('serialNumber')}
                                />
                                <span
                                  className="custom-switch-indicator custom-switch-indicator-lg"
                                  style={{
                                    backgroundColor: toggleStates.serialNumber ? "#323251" : "#d6d6e6",
                                    color: "white",
                                  }}
                                >
                                  {toggleStates.serialNumber ? "On" : "Off"}
                                </span>
                              </label>
                            </div>
                          </div>

                          <div className="col-lg-3">
                            <label className="form-label" htmlFor="priceLookup">Notify On Refusal</label>
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
                                    backgroundColor: toggleStates.priceLookup ? "#323251" : "#d6d6e6",
                                    color: "white",
                                  }}
                                >
                                  {toggleStates.priceLookup ? "On" : "Off"}
                                </span>
                              </label>
                            </div>
                          </div>
                          

                          <div className="col-lg-3">
                            <label className="form-label" htmlFor="priceLookup1">Hide Estimated Product Cost</label>
                            <div className="form-group">
                              <label className="custom-switch form-switch mb-0 p-0 form-label">
                                <input
                                  type="checkbox"
                                  className="custom-switch-input form-control"
                                  checked={toggleStates.priceLookup1}
                                  onChange={() => handleToggle('priceLookup1')}
                                />
                                <span
                                  className="custom-switch-indicator custom-switch-indicator-lg"
                                  style={{
                                    backgroundColor: toggleStates.priceLookup1 ? "#323251" : "#d6d6e6",
                                    color: "white",
                                  }}
                                >
                                  {toggleStates.priceLookup1 ? "On" : "Off"}
                                </span>
                              </label>
                            </div>
                          </div>


                          <div className="col-lg-3">
                            <label className="form-label" htmlFor="priceLookup">Hide Estimated Product Price</label>
                            <div className="form-group">
                              <label className="custom-switch form-switch mb-0 p-0 form-label">
                                <input
                                  type="checkbox"
                                  className="custom-switch-input form-control"
                                  checked={toggleStates.priceLookup2}
                                  onChange={() => handleToggle('priceLookup2')}
                                />
                                <span
                                  className="custom-switch-indicator custom-switch-indicator-lg"
                                  style={{
                                    backgroundColor: toggleStates.priceLookup2 ? "#323251" : "#d6d6e6",
                                    color: "white",
                                  }}
                                >
                                  {toggleStates.priceLookup2 ? "On" : "Off"}
                                </span>
                              </label>
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
