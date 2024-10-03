

import React, { Fragment } from 'react';
import { Accordion, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import Pageheader from '../../layout/layoutcomponent/pageheader';

const CustomerPortal = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Handler for the Cancel button
  const handleCancel = () => {
    navigate(-1); // Navigate back to the previous page
  };

 

  return (

    

    <Fragment>
    <Pageheader title="settings"  heading="settings"   active="CustomerPortal" />
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
                                    <i className="fa fa-desktop"></i>
                                </a>
                            </div>
                   
                            <div>
                            <h3 className="mt-2">Customer Portal Not Activated</h3>
                            </div>
                    </div>
                      </div>
                      
                    </div>

                    <div id="button6">
                      <div className="text-wrap row justify-content-between">
                        
                        <div>
                          <button type="button" className="btn btn-teal">
                            Activate Customer Portal
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

// Automotive.propTypes = {};

// Automotive.defaultProps = {};

export default CustomerPortal;
