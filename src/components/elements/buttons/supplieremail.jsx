import React, { Fragment , useState} from 'react';
import { Accordion, Col, Row, Button , Form,  } from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker.css";
import Pageheader from '../../../layout/layoutcomponent/pageheader';
import SunEditor from 'suneditor-react'; // Make sure you have this installed
import 'suneditor/dist/css/suneditor.min.css'; // Import SunEditor styles

const SupplierEmail = () => {

    const [value, setValue] = useState(''); // State for SunEditor

  return (




    <Fragment>

      {/* <Pageheader />   */}
      <Pageheader title="Suppliers" heading="Pages" active="Email" />

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
                            <i className="fas fa-envelope-square"></i>
                        </a>
                        </div>
                        <div style={{paddingLeft:"20px"}}>
                        <h4 className='mt-1'>Email</h4>
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
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="text" placeholder="" />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={12}>
                            <Form.Group className="mb-3" controlId="formField1">
                            <Form.Label>Subject</Form.Label>
                            <Form.Control type="text" placeholder="" />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={12}>
                        <Form.Group className="mb-3" controlId="formField1">
                        <Form.Label>Message</Form.Label>
                        <SunEditor
                                setContents={value}
                                onChange={setValue}
                                setOptions={{
                                buttonList: [
                                    ['undo', 'redo'],
                                    ['font', 'fontSize'],
                                    ['paragraphStyle', 'blockquote'],
                                    ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
                                    ['fontColor', 'hiliteColor'],
                                    ['align', 'list', 'lineHeight'],
                                    ['outdent', 'indent'],
                                    ['table', 'horizontalRule', 'link', 'image', 'video'],
                                    ['preview', 'print'],
                                    ['removeFormat']
                                ],
                                defaultTag: 'div',
                                minHeight: '300px',
                                showPathLabel: false,
                                attributesWhitelist: {
                                    all: 'style',
                                    table: 'cellpadding|width|cellspacing|height|style',
                                    tr: 'valign|style',
                                    td: 'styleinsert|height|style',
                                    img: 'title|alt|src|style'
                                }
                                }}
                            />
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

SupplierEmail.propTypes = {};

SupplierEmail.defaultProps = {};

export default SupplierEmail;
