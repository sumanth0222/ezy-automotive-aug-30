
import React, { Fragment } from 'react';
import { Accordion, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import Pageheader from '../../layout/layoutcomponent/pageheader';

const VVGarage = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Handler for the Cancel button
  const handleCancel = () => {
    navigate(-1); // Navigate back to the previous page
  };

 

  return (

    

    <Fragment>
    <Pageheader title="Integrations"  heading="Automotive Integration"   active="Drive Mech" />
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
                                    className=" btn-dark text-white btn-icon "
                                    data-placement="top"
                                    data-bs-toggle="tooltip"
                                    title=""
                                    href="#"
                                >
                                    <i className="fa fa-asterisk"></i>
                                </a>
                            </div>
                   
                            <div>
                            <h3 className="">Drive Mech Settings</h3>
                            </div>
                    </div>
                      </div>
                      <div className="">
                        
                        <p style={{paddingTop:"20px"}}>Integrate with Drive Mech, a smartphone app individually styled with your business logo. With the Drive Mech app, your customers can use their phone to request a bookings and receive updates on the progress of the bookings during the day. With Drive Mech, you can quickly and easily send service promotions, information about your business and making messages directly to the app. Customers can access a host of useful tools and features  that will keep them connected to your business during today's long service intervals, increasing customer loyalty and, enscuring they return to you for their next service.</p>
                        
                        <p>For Futher information, and to watch a demo of the app in action, click
                             <a href='#'><span style={{color:"red"}}>here</span> </a> </p>

                        <p>To sign up, click <a href='#'><span style={{color:"red"}}>here</span></a></p>
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
                            Activate Drive Mech
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

export default VVGarage;
