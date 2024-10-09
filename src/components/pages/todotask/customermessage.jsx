import React, { Fragment } from 'react';
import { Accordion, Col, Row, Button , Form,  } from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker.css";
import Pageheader from '../../../layout/layoutcomponent/pageheader';


const CustomerMessage = () => {


  return (




    <Fragment>

      {/* <Pageheader />   */}
      <Pageheader title="Customers" heading="Customer" active="Message" />

      <Row className='faq'>
        <Col xl={12}>
          <div className="panel-group2" id="accordion11" role="tablist">

          

            <Accordion className='overflow-hidden card'>
              <Accordion.Item eventKey="0">
                <Accordion.Header className='accordion-toggle font-weight-semibold tx-12 panel-heading2 '>
                  <div className="row-sm row justify-content-between d-flex" >
                    <div className=' justify-content-between d-flex'>
                        <div>
                        <a className="btn ripple btn-dark text-white btn-icon" data-placement="top" href="#">
                            <i className="fa fa-comment"></i>
                        </a>
                        </div>
                        <div style={{paddingLeft:"20px"}}>
                        <h4 className='mt-1'>BakerMark Transport</h4>
                        </div>
                    </div>

                    
                  </div>
                 
                  
                </Accordion.Header>

                <Accordion.Body id="collapseFour1" className="panel-body">
                  <div className="col-lg-12 col-md-12">
                  <div className=''>
                {
                  <Form>
                    <Row>
                      
                     
                    <Col md={12}>
                        <Form.Group className="mb-3" controlId="formField1">
                          <Form.Label>Mobile</Form.Label>
                          <Form.Control type="text" placeholder="" />
                        </Form.Group>
                      </Col>
                      
                    </Row>

                    <Row>
                      
                     
                    <Col md={12}>
                        <Form.Group className="mb-3" controlId="formField1">
                        <label className="form-label" htmlFor="validationCustom05">Message</label>
                        <textarea className="form-control" placeholder="Textarea" rows="5"></textarea>
                        </Form.Group>
                      </Col>
                      
                    </Row>




                  </Form>

                }
              </div>

                <div id="button6">
                      <div className="text-wrap row justify-content-between pt-5">
                        <div>
                          <button type="button" className="btn btn-danger">
                          Cancel
                          </button>
                        </div>
                        <div className="btn-list">
                          
                          <button type="button" className="btn btn-teal">
                           Send
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
}

CustomerMessage.propTypes = {};

CustomerMessage.defaultProps = {};

export default CustomerMessage;
