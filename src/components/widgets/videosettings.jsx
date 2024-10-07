

import React, { Fragment } from 'react';
import { Accordion, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import Pageheader from '../../layout/layoutcomponent/pageheader';

const videosettings1 = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Handler for the Cancel button
  const handleCancel = () => {
    navigate(-1); // Navigate back to the previous page
  };

 

  return (

    

    <Fragment>
    <Pageheader title="Settings"  heading="Settings"   active="Video Settings" />
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
                                    <i className="fa fa-play-circle"></i>
                                </a>
                            </div>
                   
                            <div>
                            <h3 className="">Video Settings Not Activated</h3>
                            </div>
                    </div>
                      </div>
                      <div className="">
                        
                        <p style={{paddingTop:"20px"}}>Add Video Support to your Workshop Software Subscriptions to enable you to record video footage. This is great for informing customers about repairs required on their vehicle, or for general information on the work you are performing</p>
                        
                        <p> Record a Video on the Mobile Phone app which is automatically attached to the selected job. Very quick and easy. </p>

                        <p>Only $19.99 per month, added to your regular Subscription, and a few cents per minute (100 minute included when you activate Video Support) </p>
                      </div>
                    </div>

                    <div id="button6">
                      <div className="text-wrap row justify-content-between">
                        
                        <div>
                          <button type="button" className="btn btn-teal">
                            Activate
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

export default videosettings1;
