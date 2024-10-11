

import React, { Fragment, useState } from 'react';
import { Accordion, Col, Row , Form, Button, Card} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import Pageheader from '../../layout/layoutcomponent/pageheader';
import "react-datepicker/dist/react-datepicker.css";
import SunEditor from 'suneditor-react'; // Make sure you have this installed
import 'suneditor/dist/css/suneditor.min.css'; // Import SunEditor styles



const Remainder = () => {
    
  const navigate = useNavigate(); // Initialize useNavigate hook
  const [value, setValue] = useState(''); // State for SunEditor
  
  // Handler for the Cancel button
  const handleCancel = () => {
    navigate(-1); // Navigate back to the previous page
  };

   // State to track each toggle button's state
   const [toggleStates, setToggleStates] = useState({
    
    partnumber: false,
    labourquantity: true,
    lineprices: false,
    serialNumber: false,
    priceLookup: false,  
   
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
    <Pageheader title="Settings"  heading="Settings"   active="Remainders" />
      <Row className='faq'>
        <Col xl={12}>
          <div className="" id="" role="">
            <Accordion className='overflow-hidden'>
              <Accordion.Item>
             

                <Accordion.Body id="" className="">
                    
                    <div className="col-lg-12 col-md-12">
                        <div className="card">
                            <div className="card-header row-sm row justify-content-between" style={{ backgroundColor: '#38cab3', color: 'white', padding: '10px' }}>
                                <div className="row-sm row ">
                                    
                                    <div>
                                        <a
                                        className=" btn-dark text-white btn-icon mt-2"
                                        data-placement="top"
                                        //   href="#"
                                        >
                                        <i className="fa fa-bell"></i>
                                        </a>
                                    </div>
                                        <div className='mt-3'>
                                        <h3 className="">Remainders</h3>
                                        </div>
                                </div>
                   
                            </div>

                            <form className="row g-3 needs-validation" noValidate>
                          {/* Additional Fields */}

                          {/* Toggle Bars By Field */}
                          <div className="col-lg-6" style={{paddingTop:"15px"}}>
                            <label className="form-label" htmlFor="gstFree">Automatically Send Remainders</label>
                            <p>( Sends text or email depending customer's preferred method of contact )</p>
                            <div className={`main-toggle ms-sm-2 main-toggle-dark ${toggleStates.gstFree ? 'on' : 'off'}`} onClick={() => handleToggle('gstFree')}>
                              <span className={toggleStates.gstFree ? 'active' : ''}>
                                {toggleStates.gstFree ? '' : ''}
                              </span>
                            </div>
                          </div>

                          {/* Conditionally rendered fields based on "Automatically Send Remainders" toggle */}
                          {toggleStates.gstFree && (
                            <>

                              <div className="col-lg-4" style={{paddingTop:"25px"}}>
                                <label className="form-label" htmlFor="validationCustom05">Number of Days Before Renewal Date to Send Remainders</label>
                                <input className="form-control" id="validationCustom05" type="text" required />  
                              </div>

                              
                            </>
                          )}

                          <div className='row row-sm'>
                
                            
                                         
                            <Card className="col-lg-6">
                                    <h4 style={{paddingTop:"25px"}}>Default Service Message</h4>
                                    <Card.Header className="border-bottom-0" style={{paddingTop:"8px"}}>
                                    <h5 className="">Email Message</h5>
                                    </Card.Header>
                                    <Card.Body>
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
                                    </Card.Body>
                                </Card>
        
                                <div className="col-lg-6" style={{paddingTop:"60px"}}>
                                    <label className="form-label" htmlFor="validationCustom05">SMS Message</label>
                                    <textarea className="form-control" placeholder="Textarea" rows="5"></textarea>
                                </div>

                            </div>
                    
                           
                          <div className='row row-sm'>
                             
                               <Card className="col-lg-6">
                                    <h4 style={{paddingTop:"25px"}}>Rego Renewal Message</h4>
                                    <Card.Header className="border-bottom-0" style={{paddingTop:"8px"}}>
                                    <h5 className="">Email Message</h5>
                                    </Card.Header>
                                    <Card.Body>
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
                                    </Card.Body>
                                </Card>

                                <div className="col-lg-6" style={{paddingTop:"60px"}}>
                                    <label className="form-label" htmlFor="validationCustom05">SMS Message</label>
                                    <textarea className="form-control" placeholder="Textarea" rows="5"></textarea>
                                </div>

                         </div>


                            


                         <div className="col-lg-6">
                            <label className="form-label" htmlFor="dontUpdateQty">Automatically Send Bookings Remainders</label>
                            <p> ( Sends text or email depending customer's preferred method of contact ) </p>
                            <div className={`main-toggle ms-sm-2 main-toggle-dark ${toggleStates.gstFree ? 'on' : 'off'}`} onClick={() => handleToggle('gstFree')}>
                              <span className={toggleStates.gstFree ? 'active' : ''}>
                                {toggleStates.gstFree ? '' : ''}
                              </span>
                            </div>
                          </div>

                            {/* Conditionally rendered fields based on "Automatically Send Remainders" toggle */}
                            {toggleStates.dontUpdateQty && (
                            <>

                              <div className="col-lg-4" style={{paddingTop:"25px"}}>
                                <label className="form-label" htmlFor="validationCustom05">Days Before Booking to Send Remainders</label>
                                <input className="form-control" id="validationCustom05" type="text" required />  
                              </div>

                              <div className='row row-sm'>
                
                            
                                         
                            <Card className="col-lg-6">
                                    <h4 style={{paddingTop:"25px"}}>Booking Remainder Message</h4>
                                    <Card.Header className="border-bottom-0" style={{paddingTop:"8px"}}>
                                    <h5 className="">Email Message</h5>
                                    </Card.Header>
                                    <Card.Body>
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
                                    </Card.Body>
                                </Card>
        
                                <div className="col-lg-6" style={{paddingTop:"60px"}}>
                                    <label className="form-label" htmlFor="validationCustom05">SMS Message</label>
                                    <textarea className="form-control" placeholder="Textarea" rows="5"></textarea>
                                </div>

                            </div>
                              
                            </>
                          )}












                         
                        </form>
                      
                        </div>

                
                    

                    <div id="button6">
                      <div className="text-wrap row justify-content-between">
                        <div className="btn-list">
                        <button type="button" className="btn btn-danger">
                            Cancel
                          </button>
                        </div>
                        <div>
                          <button type="button" className="btn btn-primary">
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



export default Remainder;
