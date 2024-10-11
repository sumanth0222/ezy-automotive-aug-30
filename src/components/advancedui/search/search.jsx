import React, { useState, Fragment } from 'react';
import { Card, Col } from 'react-bootstrap';
import Pageheader from '../../../layout/layoutcomponent/pageheader';


const EmptyPage = () => {
  
  

  // Custom validation
 
  const [validatedCustom, setValidatedCustom] = useState(false);
 
  

  const [filter, setFilter] = useState("");
  const [isActive, setIsActive] = useState(true);

  
  

  return (
    <Fragment>
      <Pageheader title="Products" heading="Pages" active="Products" />
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
                    <i className="fa fa-car"></i>
                  </a>
                </div>
                <div>
                  <h3 className="mt-3">Vehicles</h3>
                </div>
              </div>

              <div className="row-sm row">
               

                <div className="form-group col-lg-8 d-flex align-items-center mt-2">
                  <div>
                  <input
                    autoComplete="off"
                    placeholder="Search..."
                    type="search"
                    className="form-control"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                  />
                  </div>
                 
                </div>

              </div>
            </Card.Header>
            <Card.Body>
               
                <div className="d-flex justify-content-center align-items-center">
                  <h5>No Vehicle records found.</h5>
                </div>
              
            </Card.Body>
          </Card>
        </Col>
      </div>
    </Fragment>
  );
};

export default EmptyPage;
