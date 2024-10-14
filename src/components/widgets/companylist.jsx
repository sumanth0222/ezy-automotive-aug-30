
import React, { Fragment, useState } from 'react';
import { Accordion, Col, Row, Button , Form, Card} from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";
import Pageheader from '../../layout/layoutcomponent/pageheader';
import { useNavigate } from 'react-router-dom';
import Draggable from 'react-draggable';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
} from "@mui/material";
import SunEditor from 'suneditor-react'; // Make sure you have this installed
import 'suneditor/dist/css/suneditor.min.css'; // Import SunEditor styles

const CompanyList = () => {


  const navigate = useNavigate(); 
  const [value, setValue] = useState(''); // State for SunEditor
  function PaperComponent(props) {
    return (
      <Draggable
        handle="#draggable-dialog-title"
        cancel={'[class*="MuiDialogContent-root"]'}
      >
        <Paper {...props} />
      </Draggable>
    );
  }
  const [open1, setOpen1] = useState(false);

  const handleClickOpen1 = () => {
    setOpen1(true);
  };
  
  const handleClosedraggable = () => {
    setOpen1(false);
  };


  // Filtering based on search term
  const [filter, setFilter] = useState("");
   
   const filterData = (data, field) =>
    data.filter((item) =>
      item[field].toLowerCase().includes(filter.toLowerCase())
    );
  const invoicenote = [
    {  description: "Air Condition System Check"},
    { description: "Inspiration For The Month"},
    {  description: "Job Location : On Site"},
    {  description: "Light vehicle Service"}, 
  ];
  const jobcardnote = [
    {  description: "Air Condition System Check"},
    {  description: "Job Location : On Site"},
    {  description: "Light vehicle Service"}, 
    {  description: "Tyre Replacement"}, 
  ];

  const document = [
    {  description: "Service"}, 
  ];

  const emailtemplates = [
    {  description: "BOOKING REMINDER - SAMPLE"},
    {  description: "INVOICE - SAMPLE"},
    {  description: "NO CONTANT SERVICE - SAMPLE"}, 
    {  description: "SERVICE REMINDER -SAMPLE"}, 
    {  description: "STATEMENT - SAMPLE"}, 
  ];    

  const unitforsale = [
    {  description: "Used Vehilcle"}, 
    {  description: "Used Vehilcle"}, 
  ];
  
  const smstemplates = [
    {  description: "BOOKING REMINDER - SAMPLE"},
    {  description: "NO CONTANT SERVICE - SAMPLE"}, 
    {  description: "SERVICE REMINDER -SAMPLE"}, 
    {  description: "VEHICLE COLLECTION - SAMPLE"}, 
  ];   

  const customersource = [
    {  code: "Social Media", description: "Social Media"},
    {  code: "Google Search", description: "Google Search"}, 
    {  code: "Radio/TV Adversting", description: "Radio/TV Adversting"}, 
    {  code: "Referral", description: "Referral"}, 
    {  code: "Print Media", description: "Print Media"}, 
    {  code: "Promotion/Campagin", description: "Promotion/Campagin"}, 
  ];   

  const paymentmethod = [
    {  payment: "Cash", use: "Inactive"},
    {  payment: "Credit Card", use: "Inactive"}, 
    {  payment: "Direct Deposit", use: "Inactive"}, 
    
  ];   

  const productcategories = [
    {  code: "Air Conditioning", description: "Air Conditioning"},
    {  code: "Auto Electrical", description: "Auto Electrical"}, 
    {  code: "Detailing", description: "Detailing"}, 
    {  code: "General", description: "General"}, 
    {  code: "Mechanical", description: "Mechanical"}, 
    {  code: "Tyres", description: "Tyres"}, 
  ];   

  const productgroups = [
    {  name: "Air Conditioning", description: "Air Conditioning", category: "Air Conditioning"},
    {  name: "cable", description: "cable", category: "Auto Electrical"}, 
    {  name: "Communications", description: "Communications", category: "General Parts"}, 
    {  name: "Filters", description: "Filters", category: "Mechinal"}, 
    {  name: "Lights", description: "Lights", category: "Auto Electrical"},
    {  name: "Misc", description: "Misc", category: "General Parts"},
    {  name: "Oils", description: "Oils", category: "Mechinal"},
    { name: "Plugs", description: "Plugs", category: "Auto Electrical"},
    {  name: "Tyres", description: "Tyres", category: "Tyres"}, 
  ]; 



  return    (




    <Fragment>

      {/* <Pageheader />   */}
      <Pageheader title="Settings" heading="Settings" active="Company Lists" />

      <Row className='faq'>
        <Col xl={12}>
          <div className="panel-group2" id="accordion11" role="tablist">

            <Accordion className='overflow-hidden card'>
              <Accordion.Item eventKey="0" >
                <Accordion.Header className='accordion-toggle font-weight-semibold tx-12 panel-heading2 ' >


                  <div className="row-sm row " >

                    <div>
                      <a className="btn ripple btn-dark text-white btn-icon" data-placement="top" href="#">
                        <i className="fa fa-book"></i>
                      </a>
                    </div>
                    <div>
                      <h4 className='mt-1'>Invoice Note Templates</h4>
                    </div>

                  </div>
                 


                </Accordion.Header>

                <Accordion.Body id="collapseFour1" className="panel-body">
                  <div className="col-lg-12 col-md-12">
                    <div className="card">




                       {/* Orders Table */}
                  <div className="table-responsive mt-4">
                    <table className="table table-bordered text-nowrap border-bottom">
                      <thead>
                        <tr>
                          {/* <th className="wd-5p">Item Code</th> */}
                          <th>Description</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {filterData(invoicenote, "description").length > 0 ? (
                          filterData(invoicenote, "description").map(
                            (description, index) => (
                              <tr key={index}>
                                
                                <td>{description.description}</td>
                                <td>
                                    <div className="row d-flex justify-content-evenly">
                                        <button
                                            className="btn btn-sm btn-primary"
                                            onClick={handleClickOpen1}
                                        >
                                        <i className="fa fa-edit"></i>
                                        </button>
                                        <Dialog
                                    open={open1}
                                    onClose={handleClosedraggable}
                                    PaperComponent={PaperComponent}
                                    aria-labelledby="draggable-dialog-title"
                                  >
                                    
                                    <DialogContent >
                                      <DialogContentText className='row-sm row'>
                                        
                                      <div className="panel panel-primary tabs-style-3">
                                      <div className="row-sm row">

                          
                                        <div className="col-lg-12">
                                            <label className="form-label" htmlFor="validationCustom05">Description*</label>
                                            <textarea className="form-control" placeholder="Textarea" rows="3"></textarea>
                                        </div>
                                         
                            <Row>
        
                                <Card>
                                    <Card.Header className="border-bottom-0" style={{paddingTop:"25px"}}>
                                    <h5 className="">Template*</h5>
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
                                        </div>
                                        </div>

                                        
                                      </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                      <Button variant="secondary" className="me-1" onClick={handleClosedraggable}>
                                        Cancel
                                      </Button>
                                      <Button onClick={handleClosedraggable} className="me-1" variant="success">
                                        Save
                                      </Button>
                                    </DialogActions>
                                        </Dialog>

                                        <button
                                            className="btn btn-sm btn-danger"
                                            // onClick={() => handleEditClick(item.itemcode)}
                                        >
                                        <i className="far fa-trash-alt"></i>
                                        </button>
                                    </div>
                                </td>
                              </tr>
                            )
                          )
                        ) : (
                          <tr>
                            <td colSpan="7" className="text-center">
                              No results found.
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                    
                  </div>



                    </div>

                    <div id="button6">
                      <div className="text-wrap row justify-content-between">
                        
                        <div>
                          <button type="button" className="btn btn-teal"  onClick={handleClickOpen1}>
                            Add
                          </button>
                          <Dialog
                                    open={open1}
                                    onClose={handleClosedraggable}
                                    PaperComponent={PaperComponent}
                                    aria-labelledby="draggable-dialog-title"
                                  >
                                    
                                    <DialogContent >
                                      <DialogContentText className='row-sm row'>
                                        
                                      <div className="panel panel-primary tabs-style-3">
                                      <div className="row-sm row">

                          
                                        <div className="col-lg-12">
                                            <label className="form-label" htmlFor="validationCustom05">Description*</label>
                                            <textarea className="form-control" placeholder="Textarea" rows="3"></textarea>
                                        </div>
                                         
                            <Row>
        
                                <Card>
                                    <Card.Header className="border-bottom-0" style={{paddingTop:"25px"}}>
                                    <h5 className="">Template*</h5>
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
                                        </div>
                                        </div>

                                        
                                      </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                      <Button variant="secondary" className="me-1" onClick={handleClosedraggable}>
                                        Cancel
                                      </Button>
                                      <Button onClick={handleClosedraggable} className="me-1" variant="success">
                                        Save
                                      </Button>
                                    </DialogActions>
                         </Dialog>
                        </div>
                      </div>
                    </div>
                  </div>
                </Accordion.Body>



              </Accordion.Item>
            </Accordion>

            <Accordion className='overflow-hidden card'>
              <Accordion.Item eventKey="0">
                <Accordion.Header className='accordion-toggle font-weight-semibold tx-12 panel-heading2 '>
                  <div className="row-sm row justify-content-between d-flex" >
                    {/* <div className='row-sm row '> */}
                        <div>
                        <a className="btn ripple btn-dark text-white btn-icon" data-placement="top" href="#">
                            <i className="fa fa-book"></i>
                        </a>
                        </div>
                        <div>
                        <h4 className='mt-1'>Job Card Note Templates</h4>
                        </div>
                    {/* </div> */}
                    

                   
                  </div>
                 
                  
                </Accordion.Header>

                  <Accordion.Body id="collapseFour1" className="panel-body">
                  <div className="col-lg-12 col-md-12">
                    <div className="card">

                  <div className="table-responsive mt-4">
                    <table className="table table-bordered text-nowrap border-bottom">
                      <thead>
                        <tr>
                          {/* <th className="wd-5p">Item Code</th> */}
                          <th>Description</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {filterData(jobcardnote, "description").length > 0 ? (
                          filterData(jobcardnote, "description").map(
                            (description, index) => (
                              <tr key={index}>
                                
                                <td>{description.description}</td>
                                <td>
                                    <div className="row d-flex justify-content-evenly">
                                        <button
                                            className="btn btn-sm btn-primary"
                                            onClick={handleClickOpen1}
                                        >
                                        <i className="fa fa-edit"></i>
                                        </button>
                                        <Dialog
                                    open={open1}
                                    onClose={handleClosedraggable}
                                    PaperComponent={PaperComponent}
                                    aria-labelledby="draggable-dialog-title"
                                  >
                                    
                                    <DialogContent >
                                      <DialogContentText className='row-sm row'>
                                        
                                      <div className="panel panel-primary tabs-style-3">
                                      <div className="row-sm row">

                          
                                        <div className="col-lg-12">
                                            <label className="form-label" htmlFor="validationCustom05">Description*</label>
                                            <textarea className="form-control" placeholder="Textarea" rows="3"></textarea>
                                        </div>
                                         
                            <Row>
        
                                <Card>
                                    <Card.Header className="border-bottom-0" style={{paddingTop:"25px"}}>
                                    <h5 className="">Template*</h5>
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
                                        </div>
                                        </div>

                                        
                                      </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                      <Button variant="secondary" className="me-1" onClick={handleClosedraggable}>
                                        Cancel
                                      </Button>
                                      <Button onClick={handleClosedraggable} className="me-1" variant="success">
                                        Save
                                      </Button>
                                    </DialogActions>
                         </Dialog>

                                        <button
                                            className="btn btn-sm btn-danger"
                                            // onClick={() => handleEditClick(item.itemcode)}
                                        >
                                        <i className="far fa-trash-alt"></i>
                                        </button>
                                    </div>
                                </td>
                              </tr>
                            )
                          )
                        ) : (
                          <tr>
                            <td colSpan="7" className="text-center">
                              No results found.
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                    
                  </div>



                    </div>

                    <div id="button6">
                      <div className="text-wrap row justify-content-between">
                        
                        <div>
                          <button type="button" className="btn btn-teal"  onClick={handleClickOpen1}>
                            Add
                          </button>
                          <Dialog
                                    open={open1}
                                    onClose={handleClosedraggable}
                                    PaperComponent={PaperComponent}
                                    aria-labelledby="draggable-dialog-title"
                                  >
                                    
                                    <DialogContent >
                                      <DialogContentText className='row-sm row'>
                                        
                                      <div className="panel panel-primary tabs-style-3">
                                      <div className="row-sm row">

                          
                                        <div className="col-lg-12">
                                            <label className="form-label" htmlFor="validationCustom05">Description*</label>
                                            <textarea className="form-control" placeholder="Textarea" rows="3"></textarea>
                                        </div>
                                         
                            <Row>
        
                                <Card>
                                    <Card.Header className="border-bottom-0" style={{paddingTop:"25px"}}>
                                    <h5 className="">Template*</h5>
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
                                        </div>
                                        </div>

                                        
                                      </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                      <Button variant="secondary" className="me-1" onClick={handleClosedraggable}>
                                        Cancel
                                      </Button>
                                      <Button onClick={handleClosedraggable} className="me-1" variant="success">
                                        Save
                                      </Button>
                                    </DialogActions>
                         </Dialog>
                        </div>
                      </div>
                    </div>
                  </div>
                </Accordion.Body>



              </Accordion.Item>
            </Accordion>

            <Accordion className="overflow-hidden card">
              <Accordion.Item eventKey="0" >
                <Accordion.Header className='accordion-toggle font-weight-semibold tx-12 panel-heading2' >
                  <div className="row-sm row justify-content-between" >
                    <div>
                      <a className="btn ripple btn-dark text-white btn-icon" data-placement="top" href="#">
                        <i className="fa fa-book"></i>
                      </a>
                    </div>
                    <div>
                      <h4 className='mt-1'>Document Templates</h4>
                    </div>

                 
                  </div>
                </Accordion.Header>

                 <Accordion.Body id="collapseFour1" className="panel-body">
                  <div className="col-lg-12 col-md-12">
                    <div className="card">

                  <div className="table-responsive mt-4">
                    <table className="table table-bordered text-nowrap border-bottom">
                      <thead>
                        <tr>
                          {/* <th className="wd-5p">Item Code</th> */}
                          <th>Description</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {filterData(document, "description").length > 0 ? (
                          filterData(document, "description").map(
                            (description, index) => (
                              <tr key={index}>
                                
                                <td>{description.description}</td>
                                <td>
                                    <div className="row d-flex justify-content-evenly">
                                        <button
                                            className="btn btn-sm btn-primary"
                                            onClick={handleClickOpen1}
                                        >
                                        <i className="fa fa-edit"></i>
                                        </button>
                                        <Dialog
                                    open={open1}
                                    onClose={handleClosedraggable}
                                    PaperComponent={PaperComponent}
                                    aria-labelledby="draggable-dialog-title"
                                  >
                                    
                                    <DialogContent >
                                      <DialogContentText className='row-sm row'>
                                        
                                      <div className="panel panel-primary tabs-style-3">
                                      <div className="row-sm row">

                          
                                        <div className="col-lg-12">
                                            <label className="form-label" htmlFor="validationCustom05">Description*</label>
                                            <textarea className="form-control" placeholder="Textarea" rows="3"></textarea>
                                        </div>
                                         
                            <Row>
        
                                <Card>
                                    <Card.Header className="border-bottom-0" style={{paddingTop:"25px"}}>
                                    <h5 className="">Template*</h5>
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
                                        </div>
                                        </div>

                                        
                                      </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                      <Button variant="secondary" className="me-1" onClick={handleClosedraggable}>
                                        Cancel
                                      </Button>
                                      <Button onClick={handleClosedraggable} className="me-1" variant="success">
                                        Save
                                      </Button>
                                    </DialogActions>
                         </Dialog>

                                        <button
                                            className="btn btn-sm btn-danger"
                                            // onClick={() => handleEditClick(item.itemcode)}
                                        >
                                        <i className="far fa-trash-alt"></i>
                                        </button>
                                    </div>
                                </td>
                              </tr>
                            )
                          )
                        ) : (
                          <tr>
                            <td colSpan="7" className="text-center">
                              No results found.
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                    
                  </div>



                    </div>

                    <div id="button6">
                      <div className="text-wrap row justify-content-between">
                        
                        <div>
                          <button type="button" className="btn btn-teal"  onClick={handleClickOpen1}>
                            Add
                          </button>
                          <Dialog
                                    open={open1}
                                    onClose={handleClosedraggable}
                                    PaperComponent={PaperComponent}
                                    aria-labelledby="draggable-dialog-title"
                                  >
                                    
                                    <DialogContent >
                                      <DialogContentText className='row-sm row'>
                                        
                                      <div className="panel panel-primary tabs-style-3">
                                      <div className="row-sm row">

                          
                                        <div className="col-lg-12">
                                            <label className="form-label" htmlFor="validationCustom05">Description*</label>
                                            <textarea className="form-control" placeholder="Textarea" rows="3"></textarea>
                                        </div>
                                         
                            <Row>
        
                                <Card>
                                    <Card.Header className="border-bottom-0" style={{paddingTop:"25px"}}>
                                    <h5 className="">Template*</h5>
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
                                        </div>
                                        </div>

                                        
                                      </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                      <Button variant="secondary" className="me-1" onClick={handleClosedraggable}>
                                        Cancel
                                      </Button>
                                      <Button onClick={handleClosedraggable} className="me-1" variant="success">
                                        Save
                                      </Button>
                                    </DialogActions>
                         </Dialog>
                        </div>
                      </div>
                    </div>
                  </div>
                </Accordion.Body>


              </Accordion.Item>
            </Accordion>

            <Accordion className="overflow-hidden card">
              <Accordion.Item eventKey="0" >
                <Accordion.Header className='accordion-toggle font-weight-semibold tx-12 panel-heading2' >
                  <div className="row-sm row justify-content-between" >
                    <div>
                      <a className="btn ripple btn-dark text-white btn-icon" data-placement="top" href="#">
                        <i className="fa fa-book"></i>
                      </a>
                    </div>
                    <div>
                      <h4 className='mt-1'>Email Templates</h4>
                    </div>

                  </div>
                  
                </Accordion.Header>

                 <Accordion.Body id="collapseFour1" className="panel-body">
                  <div className="col-lg-12 col-md-12">
                    <div className="card">

                  <div className="table-responsive mt-4">
                    <table className="table table-bordered text-nowrap border-bottom">
                      <thead>
                        <tr>
                          {/* <th className="wd-5p">Item Code</th> */}
                          <th>Description</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {filterData(emailtemplates, "description").length > 0 ? (
                          filterData(emailtemplates, "description").map(
                            (description, index) => (
                              <tr key={index}>
                                
                                <td>{description.description}</td>
                                <td>
                                    <div className="row d-flex justify-content-evenly">
                                        <button
                                            className="btn btn-sm btn-primary"
                                            onClick={handleClickOpen1}
                                        >
                                        <i className="fa fa-edit"></i>
                                        </button>
                                        <Dialog
                                    open={open1}
                                    onClose={handleClosedraggable}
                                    PaperComponent={PaperComponent}
                                    aria-labelledby="draggable-dialog-title"
                                  >
                                    
                                    <DialogContent >
                                      <DialogContentText className='row-sm row'>
                                        
                                      <div className="panel panel-primary tabs-style-3">
                                      <div className="row-sm row">

                          
                                        <div className="col-lg-12">
                                            <label className="form-label" htmlFor="validationCustom05">Description*</label>
                                            <textarea className="form-control" placeholder="Textarea" rows="3"></textarea>
                                        </div>
                                         
                            <Row>
        
                                <Card>
                                    <Card.Header className="border-bottom-0" style={{paddingTop:"25px"}}>
                                    <h5 className="">Template*</h5>
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
                                        </div>
                                        </div>

                                        
                                      </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                      <Button variant="secondary" className="me-1" onClick={handleClosedraggable}>
                                        Cancel
                                      </Button>
                                      <Button onClick={handleClosedraggable} className="me-1" variant="success">
                                        Save
                                      </Button>
                                    </DialogActions>
                         </Dialog>

                                        <button
                                            className="btn btn-sm btn-danger"
                                            // onClick={() => handleEditClick(item.itemcode)}
                                        >
                                        <i className="far fa-trash-alt"></i>
                                        </button>
                                    </div>
                                </td>
                              </tr>
                            )
                          )
                        ) : (
                          <tr>
                            <td colSpan="7" className="text-center">
                              No results found.
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                    
                  </div>



                    </div>

                    <div id="button6">
                      <div className="text-wrap row justify-content-between">
                        
                        <div>
                          <button type="button" className="btn btn-teal"  onClick={handleClickOpen1}>
                            Add
                          </button>
                          <Dialog
                                    open={open1}
                                    onClose={handleClosedraggable}
                                    PaperComponent={PaperComponent}
                                    aria-labelledby="draggable-dialog-title"
                                  >
                                    
                                    <DialogContent >
                                      <DialogContentText className='row-sm row'>
                                        
                                      <div className="panel panel-primary tabs-style-3">
                                      <div className="row-sm row">

                          
                                        <div className="col-lg-12">
                                            <label className="form-label" htmlFor="validationCustom05">Description*</label>
                                            <textarea className="form-control" placeholder="Textarea" rows="3"></textarea>
                                        </div>
                                         
                            <Row>
        
                                <Card>
                                    <Card.Header className="border-bottom-0" style={{paddingTop:"25px"}}>
                                    <h5 className="">Template*</h5>
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
                                        </div>
                                        </div>

                                        
                                      </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                      <Button variant="secondary" className="me-1" onClick={handleClosedraggable}>
                                        Cancel
                                      </Button>
                                      <Button onClick={handleClosedraggable} className="me-1" variant="success">
                                        Save
                                      </Button>
                                    </DialogActions>
                         </Dialog>
                        </div>
                      </div>
                    </div>
                  </div>
                </Accordion.Body>

              </Accordion.Item>
            </Accordion>


             <Accordion className="overflow-hidden card">
              <Accordion.Item eventKey="0" >
                <Accordion.Header className='accordion-toggle font-weight-semibold tx-12 panel-heading2' >
                  <div className="row-sm row justify-content-between" >
                    <div>
                      <a className="btn ripple btn-dark text-white btn-icon" data-placement="top" href="#">
                        <i className="fa fa-book"></i>
                      </a>
                    </div>
                    <div>
                      <h4 className='mt-1'>Unit For Sale Templates</h4>
                    </div>

                  </div>
                  
                </Accordion.Header>

                 <Accordion.Body id="collapseFour1" className="panel-body">
                  <div className="col-lg-12 col-md-12">
                    <div className="card">

                  <div className="table-responsive mt-4">
                    <table className="table table-bordered text-nowrap border-bottom">
                      <thead>
                        <tr>
                          {/* <th className="wd-5p">Item Code</th> */}
                          <th>Description</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {filterData(unitforsale, "description").length > 0 ? (
                          filterData(unitforsale, "description").map(
                            (description, index) => (
                              <tr key={index}>
                                
                                <td>{description.description}</td>
                                <td>
                                    <div className="row d-flex justify-content-evenly">
                                        <button
                                            className="btn btn-sm btn-primary"
                                            onClick={handleClickOpen1}
                                        >
                                        <i className="fa fa-edit"></i>
                                        </button>
                                        <Dialog
                                    open={open1}
                                    onClose={handleClosedraggable}
                                    PaperComponent={PaperComponent}
                                    aria-labelledby="draggable-dialog-title"
                                  >
                                    
                                    <DialogContent >
                                      <DialogContentText className='row-sm row'>
                                        
                                      <div className="panel panel-primary tabs-style-3">
                                      <div className="row-sm row">

                          
                                        <div className="col-lg-12">
                                            <label className="form-label" htmlFor="validationCustom05">Description*</label>
                                            <textarea className="form-control" placeholder="Textarea" rows="3"></textarea>
                                        </div>
                                         
                            <Row>
        
                                <Card>
                                    <Card.Header className="border-bottom-0" style={{paddingTop:"25px"}}>
                                    <h5 className="">Template*</h5>
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
                                        </div>
                                        </div>

                                        
                                      </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                      <Button variant="secondary" className="me-1" onClick={handleClosedraggable}>
                                        Cancel
                                      </Button>
                                      <Button onClick={handleClosedraggable} className="me-1" variant="success">
                                        Save
                                      </Button>
                                    </DialogActions>
                         </Dialog>

                                        <button
                                            className="btn btn-sm btn-danger"
                                            // onClick={() => handleEditClick(item.itemcode)}
                                        >
                                        <i className="far fa-trash-alt"></i>
                                        </button>
                                    </div>
                                </td>
                              </tr>
                            )
                          )
                        ) : (
                          <tr>
                            <td colSpan="7" className="text-center">
                              No results found.
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                    
                  </div>



                    </div>

                    <div id="button6">
                      <div className="text-wrap row justify-content-between">
                        
                        <div>
                          <button type="button" className="btn btn-teal"  onClick={handleClickOpen1}>
                            Add
                          </button>
                          <Dialog
                                    open={open1}
                                    onClose={handleClosedraggable}
                                    PaperComponent={PaperComponent}
                                    aria-labelledby="draggable-dialog-title"
                                  >
                                    
                                    <DialogContent >
                                      <DialogContentText className='row-sm row'>
                                        
                                      <div className="panel panel-primary tabs-style-3">
                                      <div className="row-sm row">

                          
                                        <div className="col-lg-12">
                                            <label className="form-label" htmlFor="validationCustom05">Description*</label>
                                            <textarea className="form-control" placeholder="Textarea" rows="3"></textarea>
                                        </div>
                                         
                            <Row>
        
                                <Card>
                                    <Card.Header className="border-bottom-0" style={{paddingTop:"25px"}}>
                                    <h5 className="">Template*</h5>
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
                                        </div>
                                        </div>

                                        
                                      </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                      <Button variant="secondary" className="me-1" onClick={handleClosedraggable}>
                                        Cancel
                                      </Button>
                                      <Button onClick={handleClosedraggable} className="me-1" variant="success">
                                        Save
                                      </Button>
                                    </DialogActions>
                         </Dialog>
                        </div>
                      </div>
                    </div>
                  </div>
                </Accordion.Body>

              </Accordion.Item>
            </Accordion>

            
             <Accordion className="overflow-hidden card">
              <Accordion.Item eventKey="0" >
                <Accordion.Header className='accordion-toggle font-weight-semibold tx-12 panel-heading2' >
                  <div className="row-sm row justify-content-between" >
                    <div>
                      <a className="btn ripple btn-dark text-white btn-icon" data-placement="top" href="#">
                        <i className="fa fa-book"></i>
                      </a>
                    </div>
                    <div>
                      <h4 className='mt-1'> SMS Templates</h4>
                    </div>

                  </div>
                  
                </Accordion.Header>

                 <Accordion.Body id="collapseFour1" className="panel-body">
                  <div className="col-lg-12 col-md-12">
                    <div className="card">

                  <div className="table-responsive mt-4">
                    <table className="table table-bordered text-nowrap border-bottom">
                      <thead>
                        <tr>
                          {/* <th className="wd-5p">Item Code</th> */}
                          <th>Description</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {filterData(smstemplates, "description").length > 0 ? (
                          filterData(smstemplates, "description").map(
                            (description, index) => (
                              <tr key={index}>
                                
                                <td>{description.description}</td>
                                <td>
                                    <div className="row d-flex justify-content-evenly">
                                        <button
                                            className="btn btn-sm btn-primary"
                                            onClick={handleClickOpen1}
                                        >
                                        <i className="fa fa-edit"></i>
                                        </button>
                                        <Dialog
                                    open={open1}
                                    onClose={handleClosedraggable}
                                    PaperComponent={PaperComponent}
                                    aria-labelledby="draggable-dialog-title"
                                  >
                                    
                                    <DialogContent >
                                      <DialogContentText className='row-sm row'>
                                        
                                      <div className="panel panel-primary tabs-style-3">
                                      <div className="row-sm row">

                          
                                        <div className="col-lg-12">
                                            <label className="form-label" htmlFor="validationCustom05">Description*</label>
                                            <textarea className="form-control" placeholder="Textarea" rows="3"></textarea>
                                        </div>
                                         
                            <Row>
        
                                <Card>
                                    <Card.Header className="border-bottom-0" style={{paddingTop:"25px"}}>
                                    <h5 className="">Template*</h5>
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
                                        </div>
                                        </div>

                                        
                                      </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                      <Button variant="secondary" className="me-1" onClick={handleClosedraggable}>
                                        Cancel
                                      </Button>
                                      <Button onClick={handleClosedraggable} className="me-1" variant="success">
                                        Save
                                      </Button>
                                    </DialogActions>
                                        </Dialog>

                                        <button
                                            className="btn btn-sm btn-danger"
                                            // onClick={() => handleEditClick(item.itemcode)}
                                        >
                                        <i className="far fa-trash-alt"></i>
                                        </button>
                                    </div>
                                </td>
                              </tr>
                            )
                          )
                        ) : (
                          <tr>
                            <td colSpan="7" className="text-center">
                              No results found.
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                    
                  </div>



                    </div>

                    <div id="button6">
                      <div className="text-wrap row justify-content-between">
                        
                        <div>
                          <button type="button" className="btn btn-teal"  onClick={handleClickOpen1}>
                            Add
                          </button>
                          <Dialog
                                    open={open1}
                                    onClose={handleClosedraggable}
                                    PaperComponent={PaperComponent}
                                    aria-labelledby="draggable-dialog-title"
                                  >
                                    
                                    <DialogContent >
                                      <DialogContentText className='row-sm row'>
                                        
                                      <div className="panel panel-primary tabs-style-3">
                                      <div className="row-sm row">

                          
                                        <div className="col-lg-12">
                                            <label className="form-label" htmlFor="validationCustom05">Description*</label>
                                            <textarea className="form-control" placeholder="Textarea" rows="3"></textarea>
                                        </div>
                                         
                            <Row>
        
                                <Card>
                                    <Card.Header className="border-bottom-0" style={{paddingTop:"25px"}}>
                                    <h5 className="">Template*</h5>
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
                                        </div>
                                        </div>

                                        
                                      </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                      <Button variant="secondary" className="me-1" onClick={handleClosedraggable}>
                                        Cancel
                                      </Button>
                                      <Button onClick={handleClosedraggable} className="me-1" variant="success">
                                        Save
                                      </Button>
                                    </DialogActions>
                         </Dialog>
                        </div>
                      </div>
                    </div>
                  </div>
                </Accordion.Body>

              </Accordion.Item>
            </Accordion>

            <Accordion className="overflow-hidden card">
              <Accordion.Item eventKey="0" >
                <Accordion.Header className='accordion-toggle font-weight-semibold tx-12 panel-heading2' >
                  <div className="row-sm row justify-content-between" >
                    <div>
                      <a className="btn ripple btn-dark text-white btn-icon" data-placement="top" href="#">
                        <i className="fas fa-dollar-sign"></i>
                      </a>
                    </div>
                    <div>
                      <h4 className='mt-1'> Customer Sources</h4>
                    </div>

                  </div>
                  
                </Accordion.Header>

                 <Accordion.Body id="collapseFour1" className="panel-body">
                  <div className="col-lg-12 col-md-12">
                    <div className="card">

                  <div className="table-responsive mt-4">
                    <table className="table table-bordered text-nowrap border-bottom">
                      <thead>
                        <tr>
                          <th className="wd-5p"> Code</th>
                          <th>Description</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {filterData(customersource, "description").length > 0 ? (
                          filterData(customersource, "description").map(
                            (description, index) => (
                              <tr key={index}>
                                <td>{description.code}</td>
                                <td>{description.description}</td>
                                <td>
                                    <div className="row d-flex justify-content-evenly">
                                        <button
                                            className="btn btn-sm btn-primary"
                                            // onClick={() => handleEditClick(item.itemcode)}
                                        >
                                        <i className="fa fa-edit"></i>
                                        </button>

                                        <button
                                            className="btn btn-sm btn-danger"
                                            // onClick={() => handleEditClick(item.itemcode)}
                                        >
                                        <i className="far fa-trash-alt"></i>
                                        </button>
                                    </div>
                                </td>
                              </tr>
                            )
                          )
                        ) : (
                          <tr>
                            <td colSpan="7" className="text-center">
                              No results found.
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                    
                  </div>



                    </div>

                    <div id="button6">
                      <div className="text-wrap row justify-content-between">
                        
                        <div>
                          <button type="button" className="btn btn-teal">
                            Add
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Accordion.Body>

              </Accordion.Item>
            </Accordion>

            <Accordion className="overflow-hidden card">
              <Accordion.Item eventKey="0" >
                <Accordion.Header className='accordion-toggle font-weight-semibold tx-12 panel-heading2' >
                  <div className="row-sm row justify-content-between" >
                    <div>
                      <a className="btn ripple btn-dark text-white btn-icon" data-placement="top" href="#">
                        <i className="fas fa-dollar-sign"></i>
                      </a>
                    </div>
                    <div>
                      <h4 className='mt-1'> Payment Methods</h4>
                    </div>

                  </div>
                  
                </Accordion.Header>

                 <Accordion.Body id="collapseFour1" className="panel-body">
                  <div className="col-lg-12 col-md-12">
                    <div className="card">

                  <div className="table-responsive mt-4">
                    <table className="table table-bordered text-nowrap border-bottom">
                      <thead>
                        <tr>
                          <th className="wd-5p"> Payment Method</th>
                          <th>use EFTPOS</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {filterData(paymentmethod, "payment").length > 0 ? (
                          filterData(paymentmethod, "payment").map(
                            (payment, index) => (
                              <tr key={index}>
                                <td>{payment.payment}</td>
                                <td>{payment.use}</td>
                                <td>
                                    <div className="row d-flex justify-content-evenly">
                                        <button
                                            className="btn btn-sm btn-primary"
                                            // onClick={() => handleEditClick(item.itemcode)}
                                        >
                                        <i className="fa fa-edit"></i>
                                        </button>

                                        <button
                                            className="btn btn-sm btn-danger"
                                            // onClick={() => handleEditClick(item.itemcode)}
                                        >
                                        <i className="far fa-trash-alt"></i>
                                        </button>
                                    </div>
                                </td>
                              </tr>
                            )
                          )
                        ) : (
                          <tr>
                            <td colSpan="7" className="text-center">
                              No results found.
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                    
                  </div>



                    </div>

                    <div id="button6">
                      <div className="text-wrap row justify-content-between">
                        
                        <div>
                          <button type="button" className="btn btn-teal">
                            Add
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Accordion.Body>

              </Accordion.Item>
            </Accordion>

            <Accordion className="overflow-hidden card">
              <Accordion.Item eventKey="0" >
                <Accordion.Header className='accordion-toggle font-weight-semibold tx-12 panel-heading2' >
                  <div className="row-sm row justify-content-between" >
                    <div>
                      <a className="btn ripple btn-dark text-white btn-icon" data-placement="top" href="#">
                        <i className="fas fa-dollar-sign"></i>
                      </a>
                    </div>
                    <div>
                      <h4 className='mt-1'> Product Categories</h4>
                    </div>

                  </div>
                  
                </Accordion.Header>

                 <Accordion.Body id="collapseFour1" className="panel-body">
                  <div className="col-lg-12 col-md-12">
                    <div className="card">

                  <div className="table-responsive mt-4">
                    <table className="table table-bordered text-nowrap border-bottom">
                      <thead>
                        <tr>
                          <th className="wd-5p"> Code</th>
                          <th>Description</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {filterData(productcategories, "description").length > 0 ? (
                          filterData(productcategories, "description").map(
                            (description, index) => (
                              <tr key={index}>
                                <td>{description.code}</td>
                                <td>{description.description}</td>
                                <td>
                                    <div className="row d-flex justify-content-evenly">
                                        <button
                                            className="btn btn-sm btn-primary"
                                            // onClick={() => handleEditClick(item.itemcode)}
                                        >
                                        <i className="fa fa-edit"></i>
                                        </button>

                                        <button
                                            className="btn btn-sm btn-danger"
                                            // onClick={() => handleEditClick(item.itemcode)}
                                        >
                                        <i className="far fa-trash-alt"></i>
                                        </button>
                                    </div>
                                </td>
                              </tr>
                            )
                          )
                        ) : (
                          <tr>
                            <td colSpan="7" className="text-center">
                              No results found.
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                    
                  </div>



                    </div>

                    <div id="button6">
                      <div className="text-wrap row justify-content-between">
                        
                        <div>
                          <button type="button" className="btn btn-teal">
                            Add
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Accordion.Body>

              </Accordion.Item>
            </Accordion>


            <Accordion className="overflow-hidden card">
              <Accordion.Item eventKey="0" >
                <Accordion.Header className='accordion-toggle font-weight-semibold tx-12 panel-heading2' >
                  <div className="row-sm row justify-content-between" >
                    <div>
                      <a className="btn ripple btn-dark text-white btn-icon" data-placement="top" href="#">
                        <i className="fa fa-tag"></i>
                      </a>
                    </div>
                    <div>
                      <h4 className='mt-1'> Product Groups</h4>
                    </div>

                  </div>
                  
                </Accordion.Header>

                 <Accordion.Body id="collapseFour1" className="panel-body">
                  <div className="col-lg-12 col-md-12">
                    <div className="card">

                  <div className="table-responsive mt-4">
                    <table className="table table-bordered text-nowrap border-bottom">
                      <thead>
                        <tr>
                          <th className="wd-5p"> Name </th>
                          <th>Description</th>
                          <th>Category</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {filterData(productgroups, "name").length > 0 ? (
                          filterData(productgroups, "name").map(
                            (name, index) => (
                              <tr key={index}>
                                <td>{name.name}</td>
                                <td>{name.description}</td>
                                <td>{name.category}</td>
                                <td>
                                    <div className="row d-flex justify-content-evenly">
                                        <button
                                            className="btn btn-sm btn-primary"
                                            // onClick={() => handleEditClick(item.itemcode)}
                                        >
                                        <i className="fa fa-edit"></i>
                                        </button>

                                        <button
                                            className="btn btn-sm btn-danger"
                                            // onClick={() => handleEditClick(item.itemcode)}
                                        >
                                        <i className="far fa-trash-alt"></i>
                                        </button>
                                    </div>
                                </td>
                              </tr>
                            )
                          )
                        ) : (
                          <tr>
                            <td colSpan="7" className="text-center">
                              No results found.
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                    
                  </div>



                    </div>

                    <div id="button6">
                      <div className="text-wrap row justify-content-between">
                        
                        <div>
                          <button type="button" className="btn btn-teal">
                            Add
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

CompanyList.propTypes = {};

CompanyList.defaultProps = {};

export default CompanyList;
