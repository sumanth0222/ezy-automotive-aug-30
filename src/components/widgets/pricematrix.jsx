
import React, { Fragment, useState } from 'react';
import { Accordion, Col, Row, Form , Button} from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";
import { MultiSelect } from "react-multi-select-component";
import { settings2} from "../../common/selectdata";
import "react-datepicker/dist/react-datepicker.css";
import Pageheader from '../../layout/layoutcomponent/pageheader';
import { useNavigate } from 'react-router-dom';
import "react-datepicker/dist/react-datepicker.css";

const PriceMatrix = () => {

  const [selected, setSelected] = useState([]);
  
  const navigate = useNavigate(); 

  const [isActive, setIsActive] = useState(false); // State for toggle button



  const handleCancel = () => {
    navigate(-1);  // Redirect to the previous page
  };

  return (
    <Fragment>
      <Pageheader title="Settings" heading="settings" active="Price Matrix" />

      <Row className='faq'>
        <Col xl={12}>
          <div className="panel-group2" id="accordion11" role="tablist">



            <Accordion className='overflow-hidden card'>
              <Accordion.Item eventKey="0">
                <Accordion.Header className='accordion-toggle font-weight-semibold tx-12 panel-heading2'>
                  <div className="row-sm row">
                    <div>
                      <a className="btn ripple btn-dark text-white btn-icon" data-placement="top" href="#">
                        <i className="fa fa-sitemap"></i>
                      </a>
                    </div>
                    <div>
                      <h4 className='mt-1'>Price Matrix</h4>
                    </div>
                  </div>
                </Accordion.Header>

                <Accordion.Body id="collapseFour1" className="panel-body">
                  <div className="col-lg-12 col-md-12" >
                    <div className="card">
                      <div className="">
                        <form className="row g-3 needs-validation" noValidate>

                          
                          
                          <div className="col-lg-6">
                            <p>Matrix</p>
                            <MultiSelect
                              value={selected}
                              onChange={setSelected}
                              labelledBy="Select"
                              options={settings2}
                            />
                          </div>

                          
                      <div className="col-lg-4">
                        
                        <div className='mt-4'>
                          <button type="button" className="btn btn-teal">
                            Create New
                          </button>
                        </div>
                      </div>
                    

                        </form>
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

PriceMatrix.propTypes = {};
PriceMatrix.defaultProps = {};

export default PriceMatrix;
