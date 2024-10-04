import React, { Fragment, useState } from 'react';
import { Accordion, Col, Row, Form, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import Pageheader from '../../layout/layoutcomponent/pageheader';
import "react-datepicker/dist/react-datepicker.css";
import { MultiSelect } from "react-multi-select-component";
import { cc, cs, ct  } from "../../common/selectdata";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SunEditor from 'suneditor-react'; // Make sure you have this installed
import 'suneditor/dist/css/suneditor.min.css'; // Import SunEditor styles


const CommunicationCenter = () => {

  const navigate = useNavigate(); // Initialize useNavigate hook
  const [selectedCommunicationType, setSelectedCommunicationType] = useState([]);
  const [selectedContactType, setSelectedContactType] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [selected, setSelected] = useState([]);
  const [value, setValue] = useState(''); // State for SunEditor

  // Handler for the Cancel button
  const handleCancel = () => {
    navigate(-1); // Navigate back to the previous page
  };

  // Check if the selected communication type includes "Communicate By Postcode"
  const showPostcodeFields = selectedCommunicationType.some(
    (option) => option.value === "Communicate By Postcode"
  );

  // Check if the selected communication type includes "Communicate By Vehicle Details"
  const showVehicleDetails = selectedCommunicationType.some(
    (option) => option.value === "Communicate By Vehicle Details"
  );

  // Check if the selected communication type includes "Communicate By Customer Source"
  const showCustomerSource = selectedCommunicationType.some(
    (option) => option.value === "Communicate with Customers Source"
  );


   // Check if the selected communication type includes "Communicate By Customer Source"
   const showLastDate = selectedCommunicationType.some(
    (option) => option.value === "Communicate By Last in Date"
  );

  // Check if the selected communication type includes "Contact Type SMS All"
  const showSMS = selectedContactType.some(
    (option) => option.value === "SMS All"
  );

  // Check if the selected communication type includes "Contact Type Email All"
  const showEmail = selectedContactType.some(
    (option) => option.value === "Email All"
  );

  // Check if the selected communication type includes "Contact Type Print All"
  const showPrint = selectedContactType.some(
    (option) => option.value === "Print All"
  );

  

  return (
    <Fragment>
      <Pageheader title="Action" heading="Action" active="Communication Center" />
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
                              <i className="fa fa-phone-square"></i>
                            </a>
                          </div>

                          <div>
                            <h3 className="mt-2">Communication Center</h3>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <form className="row g-3 needs-validation" noValidate>
                          {/* Communication Type Field */}
                          <div className="col-lg-4 mt-5">
                            <p>Communication Type</p>
                            <MultiSelect
                              value={selectedCommunicationType}
                              onChange={setSelectedCommunicationType}
                              labelledBy="Select"
                              options={cc}
                            />
                          </div>

                          {/* Contact Type Field */}
                          <div className="col-lg-4 mt-5">
                            <p>Contact Type</p>
                            <MultiSelect
                              value={selectedContactType}
                              onChange={setSelectedContactType}
                              labelledBy="Select"
                              options={ct}
                            />
                          </div>

                          {/* Conditionally show Communicate By Postcode */}
                          {showPostcodeFields && (
                            <>
                              <div className="col-md-4 mt-5">
                                <label className="form-label" htmlFor="validationCustom05">PostCode From</label>
                                <input className="form-control" id="validationCustom05" type="text" required />
                                <div className="invalid-feedback">Please provide a valid zip.</div>
                              </div>
                              <div className="col-md-4 ">
                                <label className="form-label" htmlFor="validationCustom05">Postcode To</label>
                                <input className="form-control" id="validationCustom05" type="text" required />
                                <div className="invalid-feedback">Please provide a valid zip.</div>
                              </div>
                            </>
                          )}

                          {/* Conditionally show Communicate By Vehicle Details */}
                          {showVehicleDetails && (
                            <>
                              <div className="col-md-4 mt-5">
                                <label className="form-label" htmlFor="validationCustom05">Make</label>
                                <input className="form-control" id="validationCustom05" type="text" required />
                                <div className="invalid-feedback">Please provide a valid zip.</div>
                              </div>
                              <div className="col-md-4 ">
                                <label className="form-label" htmlFor="validationCustom05">Model</label>
                                <input className="form-control" id="validationCustom05" type="text" required />
                                <div className="invalid-feedback">Please provide a valid zip.</div>
                              </div>
                              <div className="col-lg-4">
                              <Form.Label>Build Date</Form.Label>
                              <div className="input-group">
                                <span className="input-group-text">
                                  <i className="typcn typcn-calendar-outline tx-24 lh--9 op-6"></i>
                                </span>
                                <DatePicker
                                  selected={startDate}
                                  onChange={(date) => setStartDate(date)}
                                  className="form-control"
                                  placeholderText="Select Start Date"
                                />
                              </div>
                            </div>
                            
                            </>
                          )}


                           {/* Conditionally show Communicate By Customer Source */}
                           {showCustomerSource && (
                            <>
                              {/* Contact Type Field */}
                                <div className="col-lg-4 mt-5">
                                    <p>Customer Source</p>
                                    <MultiSelect
                                    value={selected}
                                    onChange={setSelected}
                                    labelledBy="Select"
                                    options={cs}
                                    />
                                </div>
                            </>
                          )}


                           {/* Conditionally show Communicate By Last In Date */}
                           {showLastDate && (
                            <>
                              
                              <div className="col-lg-4 mt-5">
                                <Form.Label>Last In Date Form</Form.Label>
                                <div className="input-group">
                                    <span className="input-group-text">
                                    <i className="typcn typcn-calendar-outline tx-24 lh--9 op-6"></i>
                                    </span>
                                    <DatePicker
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    className="form-control"
                                    placeholderText="Select Start Date"
                                    />
                                </div>
                              </div>
                              <div className="col-lg-4">
                                <Form.Label>Last In Date To</Form.Label>
                                <div className="input-group">
                                    <span className="input-group-text">
                                    <i className="typcn typcn-calendar-outline tx-24 lh--9 op-6"></i>
                                    </span>
                                    <DatePicker
                                    selected={endDate}
                                    onChange={(date) => setEndDate(date)}
                                    className="form-control"
                                    placeholderText="Select End Date"
                                    />
                                </div>
                              </div>
                            </>
                          )}


                        </form>
                      </div>
                    </div>

                    <div id="button6">
                      <div className="text-wrap row justify-content-between">
                        <div>
                          <button type="button" className="btn btn-teal">
                            Search
                          </button>
                        </div>
                      </div>
                    </div>


                    {/* Conditionally show Contact Type SMS All */}
                    {showSMS && (
                            <>
                              
                            <div className="col-md-12 mt-5">
                                <label className="form-label" htmlFor="validationCustom05">SMS Message</label>
                                <textarea className="form-control" placeholder="Textarea" rows="5"></textarea>
                            </div>
                              
                            </>
                    )}


                    {/* Conditionally show Contact Type Email All */}
                    {showEmail && (
                            <>
                              
                            
                    <Row>
                    <div className="col-md-12 mt-4">
                        <label className="form-label" htmlFor="validationCustom05">Subject</label>
                        <textarea className="form-control" placeholder="Textarea" rows="2"></textarea>
                    </div>
                                <Card>
                                    <Card.Header className="border-bottom-0" style={{paddingTop:"25px"}}>
                                    <h6 className="">Email Message</h6>
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
                            
                            
                    </Row>
                              
                            </>
                    )}
                
                   


                    {/* Conditionally show Contact Type Print All */}
                    {showPrint && (
                            <>
                              
                        <div className="col-md-12 mt-5">
                            <label className="form-label" htmlFor="validationCustom05">Document Message</label>
                            <textarea className="form-control" placeholder="Textarea" rows="4"></textarea>
                        </div>
                              
                            </>
                    )}
                    

                        
                     




                    
                            <div className="col-md-12 mt-5">
                                <label className="form-label" htmlFor="validationCustom05">SMS Message</label>
                                <textarea className="form-control" placeholder="Textarea" rows="5"></textarea>
                            </div>  
                            
                    <Row>
                    <div className="col-md-12 mt-4">
                        <label className="form-label" htmlFor="validationCustom05">Subject</label>
                        <textarea className="form-control" placeholder="Textarea" rows="2"></textarea>
                    </div>
                                <Card>
                                    <Card.Header className="border-bottom-0" style={{paddingTop:"25px"}}>
                                    <h6 className="">Email Message</h6>
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
                            
                            
                    </Row>
                              

                    <div className="col-md-12 mt-5">
                            <label className="form-label" htmlFor="validationCustom05">Document Message</label>
                            <textarea className="form-control" placeholder="Textarea" rows="4"></textarea>
                        </div>
                    
                        <div id="button6">
                      <div className="text-wrap row justify-content-between mt-5">
                        <div className="btn-list">
                          <button type="button" className="btn btn-primary" onClick={handleCancel}>
                            Cancel
                          </button>



                        </div>
                        <div>
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
};

export default CommunicationCenter;
