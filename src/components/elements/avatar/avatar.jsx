import React, { useState, Fragment } from 'react';
import { Card, Col } from 'react-bootstrap';
import Pageheader from '../../../layout/layoutcomponent/pageheader';
import { useNavigate } from "react-router-dom"; 



const Groups = () => {
 
  const navigate = useNavigate(); 
  const [selected, setSelected] = useState([]);
  // Custom validation
 
  const [validatedCustom, setValidatedCustom] = useState(false);

  const handleSubmitCustom = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidatedCustom(true);
  };



 

  
  const [filter, setFilter] = useState("");
 

   
    // Handler for the Cancel button
  const handleCancel = () => {
    navigate(-1); // Navigate back to the previous page
  };
  
 
  

  return (
    <Fragment>
      <Pageheader title="Stock Take" heading="Stock Take" active="Single Item" />
      <div className="row">
        <Col lg={12} md={12}>
          <Card>
            <Card.Header
              className="row-sm row justify-content-between bg-primary" style={{paddingBottom:"6px"}}>
              <div className="row-sm row">
                <div>
                  <a
                    className="btn ripple btn-dark text-white btn-icon mt-2"
                    data-placement="top"
                    data-bs-toggle="tooltip"
                    title=""
                    href="#"
                  >
                    <i className="zmdi zmdi-assignment-o"></i>
                  </a>
                </div>
                <div>
                  <h3 className="mt-2">Stock Take - Single Item</h3>
                </div>
              </div>

              
            </Card.Header>
            <Card.Body>
              
                      <div className="">
                        <form className="row g-3 needs-validation" noValidate>

                        <div className="col-md-4">
                            <label className="form-label" htmlFor="validationCustom05">Select A Product</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                        </div>
                          
                        <div className="col-md-4">
                            <label className="form-label" htmlFor="validationCustom05">Quantity Count</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                        </div>

       
                        </form>

                        
                      </div>

                      <div id="button6 ">
                      <div className="text-wrap row justify-content-between mt-4">

                        <div>
                          <button type="button" className="btn btn-danger" onClick={handleCancel}>
                            Cancel
                          </button>
                        </div>

                        <div>
                          <button type="button" className="btn btn-primary" >
                            Save
                          </button>
                        </div>
                        
                      </div>
                    </div>
            </Card.Body>
          </Card>
        </Col>
      </div>
    </Fragment>
  );
};

export default Groups;
