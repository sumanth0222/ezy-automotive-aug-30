
import React, { Fragment, useState } from 'react';
import { Accordion, Col, Row , Form, Button, Card} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import Pageheader from '../../layout/layoutcomponent/pageheader';
import "react-datepicker/dist/react-datepicker.css";
import SunEditor from 'suneditor-react'; // Make sure you have this installed
import 'suneditor/dist/css/suneditor.min.css'; // Import SunEditor styles



const Messages = () => {
    
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
    <Pageheader title="Settings"  heading="Settings"   active="Messagess" />
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
                                        <i className="fa fa-user"></i>
                                        </a>
                                    </div>
                                        <div className='mt-2'>
                                        <h3 className="mt-2">Gentry and With Trading Messages</h3>
                                        </div>
                                </div>
                   
                            </div>

                            <form className="row g-3 needs-validation" noValidate>
                          {/* Additional Fields */}

                            <h4 style={{paddingTop:"15px"}}>Footer Messages</h4>
                          <div className="col-lg-12" style={{paddingTop:"10px"}}>
                                <label className="form-label" htmlFor="validationCustom05">Invoice Footer Text</label>
                                <textarea className="form-control" placeholder="Textarea" rows="5"></textarea>
                          </div>

                          <div className="col-lg-12" >
                                <label className="form-label" htmlFor="validationCustom05">Job Card Footer Text</label>
                                <textarea className="form-control" placeholder="Textarea" rows="5"></textarea>
                          </div>
                            
                          <div className="col-lg-12" >
                                <label className="form-label" htmlFor="validationCustom05">Statement Footer Text</label>
                                <textarea className="form-control" placeholder="Textarea" rows="5"></textarea>
                          </div>

                          <div className="col-lg-12" >
                                <label className="form-label" htmlFor="validationCustom05">Quote Footer Text</label>
                                <textarea className="form-control" placeholder="Textarea" rows="5"></textarea>
                          </div>

                          <div className="col-lg-12" >
                                <label className="form-label" htmlFor="validationCustom05">Cash Invoice Footer </label>
                                <textarea className="form-control" placeholder="Textarea" rows="5"></textarea>
                          </div>
                                         
                            <Card className="col-lg-12">
                                    <h4 style={{paddingTop:"25px"}}>Email Messages</h4>
                                    <Card.Header className="border-bottom-0" style={{paddingTop:"8px"}}>
                                    <h5 className="">Invoice Email Text</h5>
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
        
                            <Card className="col-lg-12">
                                 
                                    <Card.Header className="border-bottom-0" style={{paddingTop:"8px"}}>
                                    <h5 className="">Supplier Invoice Email Text</h5>
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
                                
                            <Card className="col-lg-12">
                                 
                                    <Card.Header className="border-bottom-0" style={{paddingTop:"8px"}}>
                                    <h5 className="">Statement Email Text</h5>
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

                            <Card className="col-lg-12">
                                 
                                    <Card.Header className="border-bottom-0" style={{paddingTop:"8px"}}>
                                    <h5 className="">Supplier Email Text</h5>
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

                            <Card className="col-lg-12">
                                 
                                    <Card.Header className="border-bottom-0" style={{paddingTop:"8px"}}>
                                    <h5 className="">Customer Email Text</h5>
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

                            <Card className="col-lg-12">
                                 
                                    <Card.Header className="border-bottom-0" style={{paddingTop:"8px"}}>
                                    <h5 className="">Inspection Email Text</h5>
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
                        
                            <Card className="col-lg-12">
                                    <h4 style={{paddingTop:"25px"}}>SMS Messages</h4>
                                    
                                    <div className="col-lg-12" >
                                        <label className="form-label" htmlFor="validationCustom05">Cash Invoice Footer </label>
                                        <textarea className="form-control" placeholder="Textarea" rows="8"></textarea>
                                    </div>
                            </Card>
                    
                            <Card className="col-lg-12">
                                    <h4 style={{paddingTop:"25px"}}>Booking Messages</h4>
                                    <Card.Header className="border-bottom-0" style={{paddingTop:"8px"}}>
                                    <h5 className=""> Email Booking Confirmation</h5>
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
                        
                                    <div className="col-lg-12" >
                                        <label className="form-label" htmlFor="validationCustom05">SMS Booking Confirmation</label>
                                        <textarea className="form-control" placeholder="Textarea" rows="8"></textarea>
                                    </div>


                                    <Card className="col-lg-12">
                                    <h4 style={{paddingTop:"25px"}}>Other Messages</h4>
                                    <Card.Header className="border-bottom-0" style={{paddingTop:"8px"}}>
                                    <h5 className=""> Loan Car Terms and Conditions </h5>
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

                            <Card className="col-lg-12">
                                    
                                    <Card.Header className="border-bottom-0" style={{paddingTop:"8px"}}>
                                    <h5 className=""> Default Bulk SMS Message </h5>
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


                            <Card className="col-lg-12">
                                    <h4 style={{paddingTop:"25px"}}>Other Messages</h4>
                                    <Card.Header className="border-bottom-0" style={{paddingTop:"8px"}}>
                                    <h5 className=""> Loan Car Term and Conditions </h5>
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

                            <div className="col-lg-12" >
                                <label className="form-label" htmlFor="validationCustom05"> Default Bulk SMS Message </label>
                                <textarea className="form-control" placeholder="Textarea" rows="5"></textarea>
                            </div>









                         
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



export default Messages;
