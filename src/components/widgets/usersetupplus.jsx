import React, { Fragment, useState } from 'react';
import { Accordion, Col, Row, } from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";
import { MultiSelect } from "react-multi-select-component";
import { NGroup,NStatus } from "../../common/selectdata";
import Pageheader from "../../layout/layoutcomponent/pageheader";
import { useNavigate } from 'react-router-dom'; 


const UserSetupPlus = () => {
  const [selected, setSelected] = useState([]);

  const navigate = useNavigate();  // Initialize useNavigate

  const handleCancel = () => {
    navigate(-1);  // Redirect to the previous page
  };

  
  const [open1, setOpen1] = useState(false);

  


  const [isActive, setIsActive] = useState(false); // State for toggle button

 
   // State to track each toggle button's state
   const [toggleStates, setToggleStates] = useState({
    gstFree: false,
    dontUpdateQty: false,
    
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
      <Pageheader title="Products" heading="Products" active="Add Product" />



      <Row className='faq'>
        <Col xl={12}>
          <div className="panel-group2" id="accordion11" role="tablist">

            <Accordion defaultActiveKey="0" className='overflow-hidden card'>
              <Accordion.Item eventKey="0">
                <Accordion.Header className='accordion-toggle font-weight-semibold tx-12 panel-heading2 bg-primary d-flex'>
                  <div className='row-sm row '>
                    

                      <div>
                        <a className="btn ripple btn-dark text-white btn-icon" data-placement="top" href="#">
                          <i className="fa fa-user"></i>
                        </a>
                      </div>
                      <div>
                      <h4 className='mt-1'>New Users</h4>
                      </div>

                  
                    
                  </div>
                </Accordion.Header>

                <Accordion.Body id="collapseFour1" className="panel-body">
                  <div className="col-lg-12 col-md-12">
                    <div className="card">




                      <div className="">
                        <form className="row g-3 needs-validation" noValidate>

                            {/* Search By Field */}
                          <div className="col-lg-6">
                            <p>Group</p>
                            <MultiSelect
                              value={selected}
                              onChange={setSelected}
                              labelledBy="Select"
                              options={NGroup}
                            />
                          </div>

                          <div className="col-lg-6">
                            <p>Status</p>
                            <MultiSelect
                              value={selected}
                              onChange={setSelected}
                              labelledBy="Select"
                              options={NStatus}
                            />
                          </div>


                          {/* Additional Fields */}
                          <div className="col-lg-6">
                            <label className="form-label" htmlFor="validationCustom05">First Name</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>
                          <div className="col-lg-6">
                            <label className="form-label" htmlFor="validationCustom05">Last Name</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>
                          <div className="col-md-3">
                            <label className="form-label" htmlFor="validationCustom05">Email</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>

                          <div className="col-md-3">
                            <label className="form-label" htmlFor="validationCustom05">Mobile</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>
                          
                           {/* Toggle Bars By Field */}
                          <div className="col-lg-3">
                            <label className="form-label" htmlFor="gstFree">Dashboard Privileges</label>
                            <div className={`main-toggle ms-sm-2 main-toggle-dark ${toggleStates.gstFree ? 'on' : 'off'}`} onClick={() => handleToggle('gstFree')}>
                              <span className={toggleStates.gstFree ? 'active' : ''}>
                                {toggleStates.gstFree ? '' : ''}
                              </span>
                            </div>
                          </div>

                          <div className="col-lg-3">
                            <label className="form-label" htmlFor="dontUpdateQty">Businessn Intelligence</label>
                            <div className={`main-toggle ms-sm-2 main-toggle-dark ${toggleStates.dontUpdateQty ? 'on' : 'off'}`} onClick={() => handleToggle('dontUpdateQty')}>
                              <span className={toggleStates.dontUpdateQty ? 'active' : ''}>
                                {toggleStates.dontUpdateQty ? '' : ''}
                              </span>
                            </div>
                          </div>


                          <div className="col-lg-6">
                            <label className="form-label" htmlFor="validationCustom05">Password</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>

                          <div className="col-lg-6">
                            <label className="form-label" htmlFor="validationCustom05">Confirm Password</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
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

UserSetupPlus.propTypes = {};

UserSetupPlus.defaultProps = {};

export default UserSetupPlus;
