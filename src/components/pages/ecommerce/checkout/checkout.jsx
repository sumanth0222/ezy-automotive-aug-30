import React, { useState, Fragment } from "react";
import { Card, Col } from "react-bootstrap";
import Pageheader from "../../../../layout/layoutcomponent/pageheader";
// interface CheckOutProps {}

//  const CheckOut: FC<CheckOutProps> = () => {

const Checkout = ({ local_varaiable }) =>{ 
 
  const [filter, setFilter] = useState(""); // Search filter state
 
  // Filtering based on search term
  const filterData = (data, field) =>
    data.filter((item) => item[field].toLowerCase().includes(filter.toLowerCase()));


  return (



<Fragment>
<Pageheader title="Mechanic Clock On"  heading="Ecommerce"   active="Mechanic Clock On" />
      <div className="row mt-5">
        <Col lg={12} md={12}>
          <Card>
            <Card.Header
              className="row-sm row justify-content-between bg-primary"
              style={{ backgroundColor: "#41bde1" }}
            >
              <div className="row-sm row">
                <div>
                  <a
                    className="btn ripple btn-dark text-white btn-icon"
                    data-placement="top"
                    data-bs-toggle="tooltip"
                    title=""
                    href="#"
                  >
                    <i className="fa fa-cog"></i>
                  </a>
                </div>
                <div>
                  <h3 className="">Mechanic Clock on</h3>
                </div>
              </div>

          
            </Card.Header>
            <Card.Body>
              
              <div className="ms-4 d-lg-block form-group col-lg-5">
                  <h5>Job Card No</h5>
                  <input
                    autoComplete="off"
                    placeholder="Choose an open invoice"
                    type="search"
                    className="form-control"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                  />
              </div>
             
            </Card.Body>
          </Card>
        </Col>
      </div>

    </Fragment>
);
  };

Checkout.propTypes = {};

Checkout.defaultProps = {};

export default Checkout;
