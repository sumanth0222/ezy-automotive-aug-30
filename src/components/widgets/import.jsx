
import React, { Fragment, useState } from 'react';
import { Accordion, Col, Row, Button } from 'react-bootstrap';
import Pageheader from '../../layout/layoutcomponent/pageheader';




const Import1 = () => {


  const [isActive, setIsActive] = useState(false); // State for toggle button

  // Toggle button handler
  const toggleActiveState = () => {
    setIsActive(!isActive);
  };

   // State to track each toggle button's state
   const [toggleStates, setToggleStates] = useState({
    gstFree1: false,
    gstFree2: false,
    gstFree3: false,
    gstFree4: false,
    gstFree5: false,
    gstFree6: false,
    gstFree7: false,
    gstFree8: false,
    gstFree9: false,
    gstFree10: true,
    
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
      <Pageheader title="Actions"  heading="Action"   active="Import" />

      <Row className='faq'>
        <Col xl={12}>
          <div className="panel-group2" id="accordion11" role="tablist">

            <Accordion className='overflow-hidden card'>
              <Accordion.Item eventKey="0" >
                <Accordion.Header className='accordion-toggle  tx-12 panel-heading2 ' style={{ backgroundColor: '#38cab3', color: 'white', padding: '10px' }}>


                  <div className="row-sm row ">

                    <div>
                      <a className="btn ripple btn-dark text-white btn-icon" data-placement="top" href="#">
                        <i className="fas fa-cloud-upload-alt"></i>
                      </a>
                    </div>
                    <div>
                      <h4 className='mt-1'>Import Customers</h4>
                    </div>

                  </div>

                  

                </Accordion.Header>

                <Accordion.Body id="collapseFour1" className="panel-body">
                  <div className="col-lg-12 col-md-12">
                    <div className="card">

                      <div className="">
                        <form className="row g-3 needs-validation" noValidate>

                          {/* Additional Fields */}
                          <div className="col-md-6">
                            <label className="form-label" htmlFor="validationCustom05"></label>
                            <input className="form-control" id="validationCustom05" type="file" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                            <button type="button" className="btn btn-info mt-2" >
                            Analyze
                            </button>
                          </div>
               
        
                          {/* Toggle Bars By Field */}
                          <div className="col-lg-6">
                            <label className="form-label" htmlFor="gstFree">First Row ContainsColumn Names ?</label>
                            <div className="form-group">
                              <label className="custom-switch form-switch mb-0 p-0 form-label">
                                <input
                                  type="checkbox"
                                  className="custom-switch-input form-control"
                                  checked={toggleStates.gstFree1}
                                  onChange={() => handleToggle('gstFree1')}
                                />
                                <span
                                  className="custom-switch-indicator custom-switch-indicator-lg"
                                  style={{
                                    backgroundColor: toggleStates.gstFree1 ? "#323251" : "#d6d6e6",
                                    color: "white",
                                  }}
                                >
                                  {toggleStates.gstFree1 ? "On" : "Off"}
                                </span>
                              </label>
                            </div>
                          </div>

                   

                        </form>
                        
                      </div>



                    </div>

                    
                  </div>
                </Accordion.Body>



              </Accordion.Item>
            </Accordion>

            <Accordion className='overflow-hidden card'>
              <Accordion.Item eventKey="0" >
                <Accordion.Header className='accordion-toggle  tx-12 panel-heading2 ' style={{ backgroundColor: '#38cab3', color: 'white', padding: '10px' }}>


                  <div className="row-sm row ">

                    <div>
                      <a className="btn ripple btn-dark text-white btn-icon" data-placement="top" href="#">
                        <i className="fas fa-cloud-upload-alt"></i>
                      </a>
                    </div>
                    <div>
                      <h4 className='mt-1'>Import Vehicles</h4>
                    </div>

                  </div>

                  

                </Accordion.Header>

                <Accordion.Body id="collapseFour1" className="panel-body">
                  <div className="col-lg-12 col-md-12">
                    <div className="card">

                      <div className="">
                        <form className="row g-3 needs-validation" noValidate>

                          {/* Additional Fields */}
                          <div className="col-md-6">
                            <label className="form-label" htmlFor="validationCustom05"></label>
                            <input className="form-control" id="validationCustom05" type="file" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                            <button type="button" className="btn btn-info mt-2" >
                            Analyze
                            </button>
                          </div>
               
        
                          {/* Toggle Bars By Field */}
                          <div className="col-lg-6">
                            <label className="form-label" htmlFor="gstFree">First Row ContainsColumn Names ?</label>
                            <div className="form-group">
                              <label className="custom-switch form-switch mb-0 p-0 form-label">
                                <input
                                  type="checkbox"
                                  className="custom-switch-input form-control"
                                  checked={toggleStates.gstFree2}
                                  onChange={() => handleToggle('gstFree2')}
                                />
                                <span
                                  className="custom-switch-indicator custom-switch-indicator-lg"
                                  style={{
                                    backgroundColor: toggleStates.gstFree2 ? "#323251" : "#d6d6e6",
                                    color: "white",
                                  }}
                                >
                                  {toggleStates.gstFree2 ? "On" : "Off"}
                                </span>
                              </label>
                            </div>
                          </div>

                   

                        </form>
                        
                      </div>



                    </div>

                    
                  </div>
                </Accordion.Body>



              </Accordion.Item>
            </Accordion>

            <Accordion className='overflow-hidden card'>
              <Accordion.Item eventKey="0" >
                <Accordion.Header className='accordion-toggle  tx-12 panel-heading2 ' style={{ backgroundColor: '#38cab3', color: 'white', padding: '10px' }}>


                  <div className="row-sm row ">

                    <div>
                      <a className="btn ripple btn-dark text-white btn-icon" data-placement="top" href="#">
                        <i className="fas fa-cloud-upload-alt"></i>
                      </a>
                    </div>
                    <div>
                      <h4 className='mt-1'>Import Suppliers</h4>
                    </div>

                  </div>

                  

                </Accordion.Header>

                <Accordion.Body id="collapseFour1" className="panel-body">
                  <div className="col-lg-12 col-md-12">
                    <div className="card">

                      <div className="">
                        <form className="row g-3 needs-validation" noValidate>

                          {/* Additional Fields */}
                          <div className="col-md-6">
                            <label className="form-label" htmlFor="validationCustom05"></label>
                            <input className="form-control" id="validationCustom05" type="file" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                            <button type="button" className="btn btn-info mt-2" >
                            Analyze
                            </button>
                          </div>
               
        
                          {/* Toggle Bars By Field */}
                          <div className="col-lg-6">
                            <label className="form-label" htmlFor="gstFree">First Row ContainsColumn Names ?</label>
                            <div className="form-group">
                              <label className="custom-switch form-switch mb-0 p-0 form-label">
                                <input
                                  type="checkbox"
                                  className="custom-switch-input form-control"
                                  checked={toggleStates.gstFree3}
                                  onChange={() => handleToggle('gstFree3')}
                                />
                                <span
                                  className="custom-switch-indicator custom-switch-indicator-lg"
                                  style={{
                                    backgroundColor: toggleStates.gstFree3 ? "#323251" : "#d6d6e6",
                                    color: "white",
                                  }}
                                >
                                  {toggleStates.gstFree3 ? "On" : "Off"}
                                </span>
                              </label>
                            </div>
                          </div>

                   

                        </form>
                        
                      </div>



                    </div>

                    
                  </div>
                </Accordion.Body>



              </Accordion.Item>
            </Accordion>

            <Accordion className='overflow-hidden card'>
              <Accordion.Item eventKey="0" >
                <Accordion.Header className='accordion-toggle  tx-12 panel-heading2 ' style={{ backgroundColor: '#38cab3', color: 'white', padding: '10px' }}>


                  <div className="row-sm row ">

                    <div>
                      <a className="btn ripple btn-dark text-white btn-icon" data-placement="top" href="#">
                        <i className="fas fa-cloud-upload-alt"></i>
                      </a>
                    </div>
                    <div>
                      <h4 className='mt-1'>Import Products</h4>
                    </div>

                  </div>

                  

                </Accordion.Header>

                <Accordion.Body id="collapseFour1" className="panel-body">
                  <div className="col-lg-12 col-md-12">
                    <div className="card">

                      <div className="">
                        <form className="row g-3 needs-validation" noValidate>

                          {/* Additional Fields */}
                          <div className="col-md-5">
                            <label className="form-label" htmlFor="validationCustom05"></label>
                            <input className="form-control" id="validationCustom05" type="file" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                            <button type="button" className="btn btn-info mt-2" >
                            Analyze
                            </button>
                          </div>
               
        
                          {/* Toggle Bars By Field */}
                          <div className="col-lg-4">
                            <label className="form-label" htmlFor="gstFree">First Row ContainsColumn Names ?</label>
                            <div className="form-group">
                              <label className="custom-switch form-switch mb-0 p-0 form-label">
                                <input
                                  type="checkbox"
                                  className="custom-switch-input form-control"
                                  checked={toggleStates.gstFree4}
                                  onChange={() => handleToggle('gstFree4')}
                                />
                                <span
                                  className="custom-switch-indicator custom-switch-indicator-lg"
                                  style={{
                                    backgroundColor: toggleStates.gstFree4 ? "#323251" : "#d6d6e6",
                                    color: "white",
                                  }}
                                >
                                  {toggleStates.gstFree4 ? "On" : "Off"}
                                </span>
                              </label>
                            </div>
                          </div>

                          <div className="col-lg-3">
                            <label className="form-label" htmlFor="gstFree">Price File</label>
                            <div className="form-group">
                              <label className="custom-switch form-switch mb-0 p-0 form-label">
                                <input
                                  type="checkbox"
                                  className="custom-switch-input form-control"
                                  checked={toggleStates.gstFree10}
                                  onChange={() => handleToggle('gstFree10')}
                                />
                                <span
                                  className="custom-switch-indicator custom-switch-indicator-lg"
                                  style={{
                                    backgroundColor: toggleStates.gstFree10 ? "#323251" : "#d6d6e6",
                                    color: "white",
                                  }}
                                >
                                  {toggleStates.gstFree10 ? "On" : "Off"}
                                </span>
                              </label>
                            </div>
                          </div>

                        </form>
                        
                      </div>



                    </div>

                    
                  </div>
                </Accordion.Body>



              </Accordion.Item>
            </Accordion>

            <Accordion className='overflow-hidden card'>
              <Accordion.Item eventKey="0" >
                <Accordion.Header className='accordion-toggle  tx-12 panel-heading2 ' style={{ backgroundColor: '#38cab3', color: 'white', padding: '10px' }}>


                  <div className="row-sm row ">

                    <div>
                      <a className="btn ripple btn-dark text-white btn-icon" data-placement="top" href="#">
                        <i className="fas fa-cloud-upload-alt"></i>
                      </a>
                    </div>
                    <div>
                      <h4 className='mt-1'>Import Vehicle History</h4>
                    </div>

                  </div>

                  

                </Accordion.Header>

                <Accordion.Body id="collapseFour1" className="panel-body">
                  <div className="col-lg-12 col-md-12">
                    <div className="card">

                      <div className="">
                        <form className="row g-3 needs-validation" noValidate>

                          {/* Additional Fields */}
                          <div className="col-md-6">
                            <label className="form-label" htmlFor="validationCustom05"></label>
                            <input className="form-control" id="validationCustom05" type="file" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                            <button type="button" className="btn btn-info mt-2" >
                            Analyze
                            </button>
                          </div>
               
        
                          {/* Toggle Bars By Field */}
                          <div className="col-lg-6">
                            <label className="form-label" htmlFor="gstFree">First Row ContainsColumn Names ?</label>
                            <div className="form-group">
                              <label className="custom-switch form-switch mb-0 p-0 form-label">
                                <input
                                  type="checkbox"
                                  className="custom-switch-input form-control"
                                  checked={toggleStates.gstFree5}
                                  onChange={() => handleToggle('gstFree5')}
                                />
                                <span
                                  className="custom-switch-indicator custom-switch-indicator-lg"
                                  style={{
                                    backgroundColor: toggleStates.gstFree5 ? "#323251" : "#d6d6e6",
                                    color: "white",
                                  }}
                                >
                                  {toggleStates.gstFree5 ? "On" : "Off"}
                                </span>
                              </label>
                            </div>
                          </div>

                   

                        </form>
                        
                      </div>



                    </div>

                    
                  </div>
                </Accordion.Body>



              </Accordion.Item>
            </Accordion>

            <Accordion className='overflow-hidden card'>
              <Accordion.Item eventKey="0" >
                <Accordion.Header className='accordion-toggle  tx-12 panel-heading2 ' style={{ backgroundColor: '#38cab3', color: 'white', padding: '10px' }}>


                  <div className="row-sm row ">

                    <div>
                      <a className="btn ripple btn-dark text-white btn-icon" data-placement="top" href="#">
                        <i className="fas fa-cloud-upload-alt"></i>
                      </a>
                    </div>
                    <div>
                      <h4 className='mt-1'>Import Vehicle History Items / Lines</h4>
                    </div>

                  </div>

                  

                </Accordion.Header>

                <Accordion.Body id="collapseFour1" className="panel-body">
                  <div className="col-lg-12 col-md-12">
                    <div className="card">

                      <div className="">
                        <form className="row g-3 needs-validation" noValidate>

                          {/* Additional Fields */}
                          <div className="col-md-6">
                            <label className="form-label" htmlFor="validationCustom05"></label>
                            <input className="form-control" id="validationCustom05" type="file" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                            <button type="button" className="btn btn-info mt-2" >
                            Analyze
                            </button>
                          </div>
               
        
                          {/* Toggle Bars By Field */}
                          <div className="col-lg-6">
                            <label className="form-label" htmlFor="gstFree">First Row ContainsColumn Names ?</label>
                            <div className="form-group">
                              <label className="custom-switch form-switch mb-0 p-0 form-label">
                                <input
                                  type="checkbox"
                                  className="custom-switch-input form-control"
                                  checked={toggleStates.gstFree6}
                                  onChange={() => handleToggle('gstFree6')}
                                />
                                <span
                                  className="custom-switch-indicator custom-switch-indicator-lg"
                                  style={{
                                    backgroundColor: toggleStates.gstFree6 ? "#323251" : "#d6d6e6",
                                    color: "white",
                                  }}
                                >
                                  {toggleStates.gstFree6 ? "On" : "Off"}
                                </span>
                              </label>
                            </div>
                          </div>

                   

                        </form>
                        
                      </div>



                    </div>

                    
                  </div>
                </Accordion.Body>



              </Accordion.Item>
            </Accordion>

            <Accordion className='overflow-hidden card'>
              <Accordion.Item eventKey="0" >
                <Accordion.Header className='accordion-toggle  tx-12 panel-heading2 ' style={{ backgroundColor: '#38cab3', color: 'white', padding: '10px' }}>


                  <div className="row-sm row ">

                    <div>
                      <a className="btn ripple btn-dark text-white btn-icon" data-placement="top" href="#">
                        <i className="fas fa-cloud-upload-alt"></i>
                      </a>
                    </div>
                    <div>
                      <h4 className='mt-1'>Import Bundle Parent Product</h4>
                    </div>

                  </div>

                  

                </Accordion.Header>

                <Accordion.Body id="collapseFour1" className="panel-body">
                  <div className="col-lg-12 col-md-12">
                    <div className="card">

                      <div className="">
                        <form className="row g-3 needs-validation" noValidate>

                          {/* Additional Fields */}
                          <div className="col-md-6">
                            <label className="form-label" htmlFor="validationCustom05"></label>
                            <input className="form-control" id="validationCustom05" type="file" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                            <button type="button" className="btn btn-info mt-2" >
                            Analyze
                            </button>
                          </div>
               
        
                          {/* Toggle Bars By Field */}
                          <div className="col-lg-6">
                            <label className="form-label" htmlFor="gstFree">First Row ContainsColumn Names ?</label>
                            <div className="form-group">
                              <label className="custom-switch form-switch mb-0 p-0 form-label">
                                <input
                                  type="checkbox"
                                  className="custom-switch-input form-control"
                                  checked={toggleStates.gstFree7}
                                  onChange={() => handleToggle('gstFree7')}
                                />
                                <span
                                  className="custom-switch-indicator custom-switch-indicator-lg"
                                  style={{
                                    backgroundColor: toggleStates.gstFree7 ? "#323251" : "#d6d6e6",
                                    color: "white",
                                  }}
                                >
                                  {toggleStates.gstFree7 ? "On" : "Off"}
                                </span>
                              </label>
                            </div>
                          </div>

                   

                        </form>
                        
                      </div>



                    </div>

                    
                  </div>
                </Accordion.Body>



              </Accordion.Item>
            </Accordion>


            <Accordion className='overflow-hidden card'>
              <Accordion.Item eventKey="0" >
                <Accordion.Header className='accordion-toggle  tx-12 panel-heading2 ' style={{ backgroundColor: '#38cab3', color: 'white', padding: '10px' }}>


                  <div className="row-sm row ">

                    <div>
                      <a className="btn ripple btn-dark text-white btn-icon" data-placement="top" href="#">
                        <i className="fas fa-cloud-upload-alt"></i>
                      </a>
                    </div>
                    <div>
                      <h4 className='mt-1'>Import Bundle Items</h4>
                    </div>

                  </div>

                  

                </Accordion.Header>

                <Accordion.Body id="collapseFour1" className="panel-body">
                  <div className="col-lg-12 col-md-12">
                    <div className="card">

                      <div className="">
                        <form className="row g-3 needs-validation" noValidate>

                          {/* Additional Fields */}
                          <div className="col-md-6">
                            <label className="form-label" htmlFor="validationCustom05"></label>
                            <input className="form-control" id="validationCustom05" type="file" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                            <button type="button" className="btn btn-info mt-2" >
                            Analyze
                            </button>
                          </div>
               
        
                          {/* Toggle Bars By Field */}
                          <div className="col-lg-6">
                            <label className="form-label" htmlFor="gstFree">First Row ContainsColumn Names ?</label>
                            <div className="form-group">
                              <label className="custom-switch form-switch mb-0 p-0 form-label">
                                <input
                                  type="checkbox"
                                  className="custom-switch-input form-control"
                                  checked={toggleStates.gstFree8}
                                  onChange={() => handleToggle('gstFree8')}
                                />
                                <span
                                  className="custom-switch-indicator custom-switch-indicator-lg"
                                  style={{
                                    backgroundColor: toggleStates.gstFree8 ? "#323251" : "#d6d6e6",
                                    color: "white",
                                  }}
                                >
                                  {toggleStates.gstFree8 ? "On" : "Off"}
                                </span>
                              </label>
                            </div>
                          </div>

                   

                        </form>
                        
                      </div>



                    </div>

                    
                  </div>
                </Accordion.Body>



              </Accordion.Item>
            </Accordion>


            <Accordion className='overflow-hidden card'>
              <Accordion.Item eventKey="0" >
                <Accordion.Header className='accordion-toggle  tx-12 panel-heading2 ' style={{ backgroundColor: '#38cab3', color: 'white', padding: '10px' }}>


                  <div className="row-sm row ">

                    <div>
                      <a className="btn ripple btn-dark text-white btn-icon" data-placement="top" href="#">
                        <i className="fas fa-cloud-upload-alt"></i>
                      </a>
                    </div>
                    <div>
                      <h4 className='mt-1'>Import Serial Numbers</h4>
                    </div>

                  </div>

                  

                </Accordion.Header>

                <Accordion.Body id="collapseFour1" className="panel-body">
                  <div className="col-lg-12 col-md-12">
                    <div className="card">

                      <div className="">
                        <form className="row g-3 needs-validation" noValidate>

                          {/* Additional Fields */}
                          <div className="col-md-6">
                            <label className="form-label" htmlFor="validationCustom05"></label>
                            <input className="form-control" id="validationCustom05" type="file" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                            <button type="button" className="btn btn-info mt-2" >
                            Analyze
                            </button>
                          </div>
               
        
                          {/* Toggle Bars By Field */}
                          <div className="col-lg-6">
                            <label className="form-label" htmlFor="gstFree">First Row ContainsColumn Names ?</label>
                            <div className="form-group">
                              <label className="custom-switch form-switch mb-0 p-0 form-label">
                                <input
                                  type="checkbox"
                                  className="custom-switch-input form-control"
                                  checked={toggleStates.gstFree9}
                                  onChange={() => handleToggle('gstFree9')}
                                />
                                <span
                                  className="custom-switch-indicator custom-switch-indicator-lg"
                                  style={{
                                    backgroundColor: toggleStates.gstFree9 ? "#323251" : "#d6d6e6",
                                    color: "white",
                                  }}
                                >
                                  {toggleStates.gstFree9 ? "On" : "Off"}
                                </span>
                              </label>
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
}

Import1.propTypes = {};

Import1.defaultProps = {};

export default Import1;
