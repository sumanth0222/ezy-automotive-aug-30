import React ,{ Fragment } from 'react';
import { Accordion, Col, Row, } from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";
import Pageheader from "../../../layout/layoutcomponent/pageheader";
import { useNavigate } from 'react-router-dom';

const Carousels = () => {
  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   slidesToShow: 5,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   speed: 3000,
  //   arrows: false,
  //   autoplaySpeed: 3000,
  //   pauseOnHover: true,
  //   cssEase: "linear",
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 6,
  //         slidesToScroll: 6,
  //         infinite: true,
  //         dots: true
  //       }
  //     },
  //     {
  //       breakpoint: 700,
  //       settings: {
  //         slidesToShow: 4,
  //         slidesToScroll: 4,
  //         initialSlide: 4
  //       }
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 4,
  //         slidesToScroll: 4
  //       }
  //     },
  //     {
  //       breakpoint: 500,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3
  //       }
  //     },
  //     {
  //       breakpoint: 400,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2
  //       }
  //     },
  //     {
  //       breakpoint: 320,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2
  //       }
  //     }
  //   ]
  // };


  const navigate = useNavigate();

  const handleCancel = () => {
    navigate(-1);  // Redirect to the previous page
  };

  return(



<Fragment>


<Pageheader title="Mechanic" heading="Employees" active="Mechanic" />


 <Row className='faq'>
   <Col xl={12}>
     <div className="panel-group2" id="accordion11" role="tablist">
       
         <Accordion className='overflow-hidden card'>
       <Accordion.Item eventKey="0" >
         <Accordion.Header className='accordion-toggle font-weight-semibold tx-12 panel-heading2' >

         
           <div className="row-sm row " >
             
             <div>
               <a className="btn ripple btn-dark text-white btn-icon" data-placement="top" href="#">
               <i className="fa fa-cog"></i>
               </a>
             </div>
             <div>
               <h3 className="">Mechanics Details:</h3>
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
                     <label className="form-label" htmlFor="validationCustom05">First Name</label>
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

                   <div className="col-md-3">
                     <label className="form-label" htmlFor="validationCustom05">Cell</label>
                     <input className="form-control" id="validationCustom05" type="text" required />
                     <div className="invalid-feedback">Please provide a valid zip.</div>
                   </div>


                     

                     <div className="col-md-12">
                     <label className="form-label" htmlFor="validationCustom05">Notes</label>
                     <textarea class="form-control" placeholder="Textarea" rows="3"></textarea>
                     </div>

                 </form>
                     
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
);}

Carousels.propTypes = {};

Carousels.defaultProps = {};

export default Carousels;
