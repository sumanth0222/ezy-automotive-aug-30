import React, { Fragment, useState } from 'react';
import { Accordion, Col, Row, Form , Button} from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";
import { MultiSelect } from "react-multi-select-component";
import { settings2} from "../../common/selectdata";
import "react-datepicker/dist/react-datepicker.css";
import Pageheader from '../../layout/layoutcomponent/pageheader';
import { useNavigate } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const UserSettings = () => {

  const [selected, setSelected] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const navigate = useNavigate(); 

  const [isActive, setIsActive] = useState(false); // State for toggle button

  // State to track each toggle button's state
  const [toggleStates, setToggleStates] = useState({
    
    reservedstock: true,
    


  });

  // Toggle button handler for individual switches
  const handleToggle = (key) => {
    setToggleStates((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  const handleCancel = () => {
    navigate(-1);  // Redirect to the previous page
  };

  return (
    <Fragment>
      <Pageheader title="Settings" heading="settings" active="User Settings" />

      <Row className='faq'>
        <Col xl={12}>
          <div className="panel-group2" id="accordion11" role="tablist">


            <Accordion className='overflow-hidden card'>
              <Accordion.Item eventKey="0">
                <Accordion.Header className='accordion-toggle font-weight-semibold tx-12 panel-heading2'>
                  <div className="row-sm row">
                    <div>
                      <a className="btn ripple btn-dark text-white btn-icon" data-placement="top" href="#">
                        <i className="fa fa-key"></i>
                      </a>
                    </div>
                    <div>
                      <h4 className='mt-1'>Change Password</h4>
                    </div>
                  </div>
                </Accordion.Header>

                <Accordion.Body id="collapseFour1" className="panel-body">
                  <div className="col-lg-12 col-md-12">
                    <div className="card">
                      <div className="">
                        <form className="row g-3 needs-validation" noValidate>

                          {/* Additional Fields */}
                          <div className="col-md-4">
                            <label className="form-label" htmlFor="validationCustom05">Old Password</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>
                          <div className="col-md-4">
                            <label className="form-label" htmlFor="validationCustom05">New Password</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>
                          <div className="col-md-4">
                            <label className="form-label" htmlFor="validationCustom05">Confirm Password</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>


                        </form>
                      </div>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            <Accordion className='overflow-hidden card'>
              <Accordion.Item eventKey="0">
                <Accordion.Header className='accordion-toggle font-weight-semibold tx-12 panel-heading2'>
                  <div className="row-sm row">
                    <div>
                      <a className="btn ripple btn-dark text-white btn-icon" data-placement="top" href="#">
                        <i className="fa fa-cog"></i>
                      </a>
                    </div>
                    <div>
                      <h4 className='mt-1'>Settings</h4>
                    </div>
                  </div>
                </Accordion.Header>

                <Accordion.Body id="collapseFour1" className="panel-body">
                  <div className="col-lg-12 col-md-12" >
                    <div className="card">
                      <div className="">
                        <form className="row g-3 needs-validation" noValidate>

                          
                          
                          <div className="col-lg-6">
                            <p>Include Repco Notes in Invoice Job Card</p>
                            <MultiSelect
                              value={selected}
                              onChange={setSelected}
                              labelledBy="Select"
                              options={settings2}
                            />
                          </div>

                          <div className="col-lg-6">
                            <p>Print Receipt for Cash Invoice</p>
                            <MultiSelect
                              value={selected}
                              onChange={setSelected}
                              labelledBy="Select"
                              options={settings2}
                            />
                          </div>


                          {/* Toggle Bars By Field */}

                          <div className="col-lg-4">
                            <label className="form-label" htmlFor="reservedstock">Persist Grid Filters</label>
                            <div className="form-group">
                              <label className="custom-switch form-switch mb-0 p-0 form-label">
                                <input
                                  type="checkbox"
                                  className="custom-switch-input form-control"
                                  checked={toggleStates.reservedstock}
                                  onChange={() => handleToggle('reservedstock')}
                                />
                                <span
                                  className="custom-switch-indicator custom-switch-indicator-lg"
                                  style={{
                                    backgroundColor: toggleStates.reservedstock ? "green" : "orange",
                                    color: "white",
                                  }}
                                >
                                  {toggleStates.reservedstock ? "On" : "Off"}
                                </span>
                              </label>
                            </div>
                          </div>


                     

                         

                          

                        </form>
                      </div>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>



          

            

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
        </Col>
      </Row>
    </Fragment>
  );
}

UserSettings.propTypes = {};
UserSettings.defaultProps = {};

export default UserSettings;
