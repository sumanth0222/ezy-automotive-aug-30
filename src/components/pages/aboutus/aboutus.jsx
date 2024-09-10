import React ,{ Fragment, useState } from 'react';
import { Accordion, Col, Row, Form ,Card, Tabs, Tab} from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Draggable from 'react-draggable';
import { Paper} from "@mui/material";
import Pageheader from '../../../layout/layoutcomponent/pageheader';
import { useNavigate } from 'react-router-dom';

const Aboutus = () => {

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
    
  
    const [isActive, setIsActive] = useState(false); 
  
    // Toggle button handler
    const toggleActiveState = () => {
      setIsActive(!isActive);
    };
  
    
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [filter, setFilter] = useState(""); 
    
  
    // Filtering based on search term
    const filterData = (data, field) =>
      data.filter((item) =>
        item[field].toLowerCase().includes(filter.toLowerCase())
      );


      const navigate = useNavigate();  // Initialize useNavigate

      const handleCancel = () => {
        navigate(-1);  // Redirect to the previous page
      };

  return(

 


    <Fragment>

<Pageheader title="Employee"  heading="Mechanic"   active="Edit Mechanic Details" />
 
 
     <Row className='faq'>
       <Col xl={12}>
         <div className="panel-group2" id="accordion11" role="tablist">
           
             <Accordion className='overflow-hidden card'>
           <Accordion.Item eventKey="0" >
             <Accordion.Header className='accordion-toggle font-weight-semibold tx-12 panel-heading2 d-flex justify-content-between' >
 
            
               <div className="row-sm row " >
                 
                 <div>
                   <a className="btn ripple btn-dark text-white btn-icon" data-placement="top" href="#">
                   <i className="fa fa-cog"></i>
                   </a>
                 </div>
                 <div>
                   <h4 className='mt-1'>Mechanic Details:</h4>
                 </div>
                 
               </div>
               
               <div className="row-sm row justify-content-between d-flex">
                             {/* Summary  Fields */}
                                 
                                 <div class="col-lg-3">
                                 
                                       <div class="form-group">
                                           <label class="custom-switch form-switch mb-0  p-0 form-label">
                                           <input name="custom-switch-radio" type="checkbox" class="custom-switch-input form-control"/>
                                           <span class="custom-switch-indicator custom-switch-indicator-lg"></span>         
                                           </label>
                                       </div>                
                                 </div>
 
                                 <div>
                                     <a
                                       className="btn ripple btn-success text-white btn-icon"
                                       data-placement="top"
                                       data-bs-toggle="tooltip"
                                       title="Add File"
                                       href="#"
                                     >
                                       <button
                                         className="btn btn-sm btn-primary"
                                         // onClick={handlePlusClick}
                                       >
                                         <li className="fa fa-plus"></li>
                                       </button>
                                     </a>
                                 </div>
 
                             
               </div>
               
           </Accordion.Header>
 
             <Accordion.Body id="collapseFour1" className="panel-body">
               <div className="col-lg-12 col-md-12">
                 <div className="card">
 
 
                   
                   
                   <div className="">
                     <form className="row g-3 needs-validation" noValidate>
 
                       {/* Additional Fields */}
                       <div className="col-md-2">
                         <label className="form-label" htmlFor="validationCustom05">Mechanic Code</label>
                         <input className="form-control" id="validationCustom05" type="text" required />
                         <div className="invalid-feedback">Please provide a valid zip.</div>
                       </div>
                       <div className="col-md-2">
                         <label className="form-label" htmlFor="validationCustom05">First Name </label>
                         <input className="form-control" id="validationCustom05" type="text" required />
                         <div className="invalid-feedback">Please provide a valid zip.</div>
                       </div>
                       <div className="col-md-2">
                         <label className="form-label" htmlFor="validationCustom05">Last Name</label>
                         <input className="form-control" id="validationCustom05" type="text" required />
                         <div className="invalid-feedback">Please provide a valid zip.</div>
                       </div>
 
                       <div class="col-lg-3">
                           <label className="form-label" htmlFor="validationCustom05">Cost Per Hour</label>
                             <div class="input-group input-group">
                               <div class="input-group-text">
                                   <label class="ckbox wd-16 mg-b-0">
                                   <i className="fab fa-cc-visa"></i>  
                                   </label>
                               </div>
                              
                              <input placeholder="0" type="text" class="form-control form-control" fdprocessedid="2wwup"/>
                             </div>
                       </div>
 
                       <div class="col-lg-3">
                           <label className="form-label" htmlFor="validationCustom05">Cell</label>
                             <div class="input-group input-group">
                              <input placeholder="" type="text" class="form-control form-control" fdprocessedid="2wwup"/>
 
                               <div class="input-group-text">
                                   <label class="ckbox wd-16 mg-b-0">
                                   <i className="fab fa-cc-visa"></i>  
                                   </label>
                               </div>
                             
                             </div>
                       </div>
 
                       <div className="col-md-12">
                         <label className="form-label" htmlFor="validationCustom05">Notes</label>
                         <textarea class="form-control" placeholder="Textarea" rows="3"></textarea>
                       </div>
 
                     </form>
 
 
 
                     {/* <Col xl={12}> */}
           <Card className="mg-b-20 mg-t-20" id="tabs-style3">
             {/* <Card.Body> */}
               <div className="d-flex justify-content-between align-items-center">
                 <div className="main-content-label">Schedule</div>
               </div>
 
               <div className="panel panel-primary tabs-style-3">
                 <div className="tab-menu-heading">
                   <div className="tabs-menu">
                     <Tabs defaultActiveKey="Monday" className="nav panel-tabs border-bottom-0">
                       
                       {/* Monday Tab */}
                       <Tab eventKey="Monday" title="Monday">
                         <div className="tab-pane active">
                           <div className="row-sm row">
                             <div className="col-lg-4">
                               <Form.Label>Start Date</Form.Label>
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
                             <div className="mg-t-20 mg-lg-t-0 col-lg-4">
                               <Form.Label>End Date</Form.Label>
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
                           </div>
 
                         </div>
                       </Tab>
 
                       {/* Tuesday Tab */}
                       <Tab eventKey="Tuesday" title="Tuesday">
                         <div className="tab-pane active">
                         <div className="row-sm row">
                             <div className="col-lg-4">
                               <Form.Label>Start Date</Form.Label>
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
                             <div className="mg-t-20 mg-lg-t-0 col-lg-4">
                               <Form.Label>End Date</Form.Label>
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
                         </div>
                           
                                                  
                         </div>
                       </Tab>
 
                       {/* Wednesday Tab */}
                       <Tab eventKey="Wednesday" title="Wednesday">
                         <div className="tab-pane active">
 
                           {/* Wednesday Form */}
                           <div className="row-sm row">
                             <div className="col-lg-4">
                               <Form.Label>Start Date</Form.Label>
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
                             <div className="mg-t-20 mg-lg-t-0 col-lg-4">
                               <Form.Label>End Date</Form.Label>
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
                           </div>
                                                     
                         </div>
                       </Tab>
 
                       {/* Thrusday Tab */}
                       <Tab eventKey="Thrusday" title="Thrusday">
                         <div className="tab-pane active">
 
                           
                           <div className="row-sm row">
                             <div className="col-lg-4">
                               <Form.Label>Start Date</Form.Label>
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
                             <div className="mg-t-20 mg-lg-t-0 col-lg-4">
                               <Form.Label>End Date</Form.Label>
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
                           </div>
                          
                         </div>
                       </Tab>
 
                       {/* Friday Tab */}
                       <Tab eventKey="Friday" title="Friday">
                         <div className="tab-pane active">
 
                           {/* Friday Form */}
                           <div className="row-sm row">
                             <div className="col-lg-4">
                               <Form.Label>Start Date</Form.Label>
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
                             <div className="mg-t-20 mg-lg-t-0 col-lg-4">
                               <Form.Label>End Date</Form.Label>
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
                           </div>
                            
                         </div>
                       </Tab>
 
                       {/* Saturday Tab */}
                       <Tab eventKey="Saturday" title="Saturday">
                         <div className="tab-pane active">
 
                           {/* Saturday Form */}
                           <div className="row-sm row">
                             <div className="col-lg-4">
                               <Form.Label>Start Date</Form.Label>
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
                             <div className="mg-t-20 mg-lg-t-0 col-lg-4">
                               <Form.Label>End Date</Form.Label>
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
                           </div>
                            
                         </div>
                       </Tab>
 
 
 
                       {/* Sunday Tab */}
                       <Tab eventKey="Sunday" title="Sunday">
                         <div className="tab-pane active">
 
                           {/* Sunday Form */}
                           <div className="row-sm row">
                             <div className="col-lg-4">
                               <Form.Label>Start Date</Form.Label>
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
                             <div className="mg-t-20 mg-lg-t-0 col-lg-4">
                               <Form.Label>End Date</Form.Label>
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
                           </div>
                            
                         </div>
                       </Tab>
                     </Tabs>
                   </div>
                 </div>
               </div>
             {/* </Card.Body> */}
           </Card>
         {/* </Col> */}
                         
                   </div>
 
                             
                   
                 </div>
 
                             <div id="button6">
                               <div className="text-wrap row justify-content-between">
                                 <div className="btn-list">
                                   <button type="button" className="btn btn-primary" onClick={handleCancel}>
                                     Cancel
                                   </button>
                                   <button type="button" className="btn btn-danger">
                                     Delete
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
Aboutus.propTypes = {};

Aboutus.defaultProps = {};

export default Aboutus;
