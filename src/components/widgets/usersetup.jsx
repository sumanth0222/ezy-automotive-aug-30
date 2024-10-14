
import React, { Fragment, useState } from 'react';
import { Accordion, Col, Row, Form , Button} from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";
import { MultiSelect } from "react-multi-select-component";
import { states, FA , Products1, vehiclegroup} from "../../common/selectdata";
import "react-datepicker/dist/react-datepicker.css";
import Pageheader from '../../layout/layoutcomponent/pageheader';
import { useNavigate } from 'react-router-dom';

import "react-datepicker/dist/react-datepicker.css";

const UserSetup = () => {

  const [selected, setSelected] = useState([]);
  
  const navigate = useNavigate(); 
  const [filter, setFilter] = useState("");
  const [isActive, setIsActive] = useState(false); // State for toggle button

  const ordersData = [
    { name: "sumanth@gmail.com", group: "ADMIN", user: "ACTIVE" },
    
  ];

  
  // Filtering based on search term
  const filterData = (data, field) =>
    data.filter((item) =>
      item[field].toLowerCase().includes(filter.toLowerCase())
    );


  const handleCancel = () => {
    navigate(-1);  // Redirect to the previous page
  };

  const handlePlusClick = () => {
    navigate(`${import.meta.env.BASE_URL}widgets/usersetupplus`); // Navigate to the form page
  };

  const handlePlusClick2 = () => {
    navigate(`${import.meta.env.BASE_URL}widgets/usersetuppluss`); // Navigate to the form page
  };


  return (
    <Fragment>
      <Pageheader title="Settings" heading="settings" active="User Setup" />

      <Row className='faq'>
        <Col xl={12}>
          <div className="panel-group2" id="accordion11" role="tablist">


            <Accordion className='overflow-hidden card'>
              <Accordion.Item eventKey="0">
                <Accordion.Header className='accordion-toggle font-weight-semibold tx-12 panel-heading2 '>
                  <div className="row-sm row">
                    <div>
                      <a className="btn ripple btn-dark text-white btn-icon" data-placement="top" href="#">
                        <i className="fa fa-certificate"></i>
                      </a>
                    </div>
                    <div>
                      <h4 className='mt-1'>Users</h4>
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
                        onClick={handlePlusClick}
                      >
                        <li className="fa fa-plus"></li>
                      </button>
                    </a>
                  </div>
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
                          <th className="wd-5p">user Name</th>
                          <th>Group</th>
                          <th>User</th>
                       
                        </tr>
                      </thead>
                      <tbody>
                        {filterData(ordersData, "name").length > 0 ? (
                          filterData(ordersData, "name").map(
                            (name, index) => (
                              <tr key={index}>
                                <td className="wd-5p">
                                  {name.name}
                                </td>
                                <td>{name.group}</td>
                                <td>{name.user}</td>
                                <td>
                                  <div className="row d-flex justify-content-evenly">
                                  <button
                                    className="btn btn-sm btn-primary"
                                    // onClick={() => handleEditClick(phone.phone)}
                                  >
                                    
                                    <i className="fa fa-edit"></i>
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
                    <div className="d-flex mt-4 align-items-center">
                      <span>Page <strong>1 of 4</strong> </span>
                      <span className="ms-auto ps-2">
                        <button type="button" disabled className="btn-default tablebutton me-2 my-2 btn"> Previous </button>
                        <button type="button" disabled className="btn-default tablebutton me-2 my-2 btn"> &lt;&lt; </button>
                        <button type="button" disabled className="btn-default tablebutton me-2 my-2 btn"> &lt; </button>
                        <button type="button" className="btn-default tablebutton me-2 my-2 btn"> &gt; </button>
                        <button type="button" className="btn-default tablebutton me-2 my-2 btn"> &gt;&gt; </button>
                        <button type="button" className="btn-default tablebutton me-2 my-2 btn"> Next </button>
                      </span>
                    </div>
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
                        <i className="fa fa-user"></i>
                      </a>
                    </div>
                    <div>
                      <h4 className='mt-1'>Mobile Users</h4>
                    </div>
                  </div>
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
                        onClick={handlePlusClick2}
                      >
                        <li className="fa fa-plus"></li>
                      </button>
                    </a>
                  </div>
                </div>
                </Accordion.Header>

                <Accordion.Body id="collapseFour1" className="panel-body">
                  <div className="col-lg-12 col-md-12" >
                    <div className="card">
                      
                      <h2> No User Records Found</h2>

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

UserSetup.propTypes = {};
UserSetup.defaultProps = {};

export default UserSetup;
