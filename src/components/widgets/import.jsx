
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
                           <div className={`main-toggle ms-sm-2 main-toggle-dark ${toggleStates.gstFree ? 'on' : 'off'}`} onClick={() => handleToggle('gstFree')}>
                              <span className={toggleStates.gstFree ? 'active' : ''}>
                                {toggleStates.gstFree ? '' : ''}
                              </span>
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
                            <div className={`main-toggle ms-sm-2 main-toggle-dark ${toggleStates.reservedstock ? 'on' : 'off'}`} onClick={() => handleToggle('reservedstock')}>
                              <span className={toggleStates.reservedstock ? 'active' : ''}>
                                {toggleStates.reservedstock ? '' : ''}
                              </span>
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
                            <label className="form-label" htmlFor="gstFree1">First Row ContainsColumn Names ?</label>
                            <div className={`main-toggle ms-sm-2 main-toggle-dark ${toggleStates.gstFree1 ? 'on' : 'off'}`} onClick={() => handleToggle('gstFree1')}>
                              <span className={toggleStates.gstFree1 ? 'active' : ''}>
                                {toggleStates.gstFree1 ? '' : ''}
                              </span>
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
                            <label className="form-label" htmlFor="gstFree2">First Row ContainsColumn Names ?</label>
                            <div className={`main-toggle ms-sm-2 main-toggle-dark ${toggleStates.gstFree2 ? 'on' : 'off'}`} onClick={() => handleToggle('gstFree2')}>
                              <span className={toggleStates.gstFree2 ? 'active' : ''}>
                                {toggleStates.gstFree2 ? '' : ''}
                              </span>
                            </div>
                          </div>

                          <div className="col-lg-3">
                            <label className="form-label" htmlFor="gstFree3">Price File</label>
                            <div className={`main-toggle ms-sm-2 main-toggle-dark ${toggleStates.gstFree3 ? 'on' : 'off'}`} onClick={() => handleToggle('gstFree3')}>
                              <span className={toggleStates.gstFree3 ? 'active' : ''}>
                                {toggleStates.gstFree3 ? '' : ''}
                              </span>
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
                            <label className="form-label" htmlFor="gstFree5">First Row ContainsColumn Names ?</label>
                           <div className={`main-toggle ms-sm-2 main-toggle-dark ${toggleStates.gstFree5 ? 'on' : 'off'}`} onClick={() => handleToggle('gstFree5')}>
                              <span className={toggleStates.gstFree5 ? 'active' : ''}>
                                {toggleStates.gstFree5 ? '' : ''}
                              </span>
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
                            <label className="form-label" htmlFor="gstFree6">First Row ContainsColumn Names ?</label>
                            <div className={`main-toggle ms-sm-2 main-toggle-dark ${toggleStates.gstFree6 ? 'on' : 'off'}`} onClick={() => handleToggle('gstFree6')}>
                              <span className={toggleStates.gstFree6 ? 'active' : ''}>
                                {toggleStates.gstFree6 ? '' : ''}
                              </span>
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
                            <label className="form-label" htmlFor="gstFree7">First Row ContainsColumn Names ?</label>
                            <div className={`main-toggle ms-sm-2 main-toggle-dark ${toggleStates.gstFree7 ? 'on' : 'off'}`} onClick={() => handleToggle('gstFree7')}>
                              <span className={toggleStates.gstFree7 ? 'active' : ''}>
                                {toggleStates.gstFree7 ? '' : ''}
                              </span>
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
                            <label className="form-label" htmlFor="gstFree8">First Row ContainsColumn Names ?</label>
                            <div className={`main-toggle ms-sm-2 main-toggle-dark ${toggleStates.gstFree8 ? 'on' : 'off'}`} onClick={() => handleToggle('gstFree8')}>
                              <span className={toggleStates.gstFree8 ? 'active' : ''}>
                                {toggleStates.gstFree8 ? '' : ''}
                              </span>
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
                            <label className="form-label" htmlFor="gstFree9">First Row ContainsColumn Names ?</label>
                            <div className={`main-toggle ms-sm-2 main-toggle-dark ${toggleStates.gstFree9 ? 'on' : 'off'}`} onClick={() => handleToggle('gstFree9')}>
                              <span className={toggleStates.gstFree9 ? 'active' : ''}>
                                {toggleStates.gstFree9 ? '' : ''}
                              </span>
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
