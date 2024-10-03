import React, { useState, Fragment } from 'react';
import { Card, Col } from 'react-bootstrap';
import Pageheader from '../../../layout/layoutcomponent/pageheader';
import { CForm } from "@coreui/react";
import { useNavigate } from "react-router-dom"; 
import { MultiSelect } from "react-multi-select-component";
import { options, stocktake1, stocktake2} from "../../../common/selectdata";


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

  // State to track each toggle button's state
  const [toggleStates, setToggleStates] = useState({
    gstFree: false,
    
  });

  // Toggle button handler for individual switches
  const handleToggle = (key) => {
    setToggleStates((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  const ordersData = [
    { itemcode: "BK01", description: "Brake Pads Remove and Replace", group: "", vendor: "", location: "", onhand: "" , count:""},
    { itemcode: "EO-1101", description: "SAKURA OIL FILTER(EXAMPLE)", group: "", vendor: "", location: "", onhand: "" , count:""},
    { itemcode: "FF10575", description: "FRAM OIL FILTER(EXAMPLE)", group: "", vendor: "", location: "", onhand: "" , count:""},
    { itemcode: "HU514X", description: "MANN-FILTER OIL", group: "", vendor: "", location: "", onhand: "" , count:""},
    { itemcode: "LAB", description: "Labour", group: "", vendor: "", location: "", onhand: "" , count:""},
    { itemcode: "NPN04", description: "Loan Car", group: "", vendor: "", location: "", onhand: "", count:"" },
  ];

  
  const [filter, setFilter] = useState("");
  const [filter1, setFilter1] = useState("");
  const [filter2, setFilter2] = useState("");


  // Filtering based on search term
  const filterData = (data, field) =>
    data.filter((item) =>
      item[field].toLowerCase().includes(filter.toLowerCase())
    );

   
    // Handler for the Cancel button
  const handleCancel = () => {
    navigate(-1); // Navigate back to the previous page
  };
  
 
  

  return (
    <Fragment>
      <Pageheader title="Stock Take" heading="Stock Take" active="Stock Take" />
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
                  <h3 className="mt-2">Stock Take</h3>
                </div>
              </div>

              <div className="row-sm row">
               

                <div className="form-group col-lg-8 d-flex align-items-center mt-2">
                
                  <div>
                    
                      <button
                        className="btn ripple btn-success text-white btn-icon"
                        data-placement="top"
                        data-bs-toggle="tooltip"
                        title="Print"
                        // onClick={handlePlusClick}
                      >
                        <li className="fa fa-print"></li>
                      </button>
                
                  </div>
                </div>

              </div>
            </Card.Header>
            <Card.Body>
              
            <div className="">
                        <form className="row g-3 needs-validation" noValidate>

                         
                          {/* Search By Field */}
                          <div className="col-lg-3">
                            <p>Product Type</p>
                            <MultiSelect
                              value={selected}
                              onChange={setSelected}
                              labelledBy="Select"
                              options={stocktake1}
                            />
                          </div>
                          
                          <div className="col-lg-3">
                            <p>Group</p>
                            <MultiSelect
                              value={selected}
                              onChange={setSelected}
                              labelledBy="Select"
                              options={stocktake2}
                            />
                          </div>

                          <div className="col-lg-3">
                            <p>Vendor</p>
                              <input
                                autoComplete="off"
                                placeholder="Search..."
                                type="search"
                                className="form-control"
                                value={filter}
                                onChange={(e) => setFilter(e.target.value)}
                              />
                          </div>


                          <div className="col-lg-3">
                            <p>Location</p>
                            <MultiSelect
                              value={selected}
                              onChange={setSelected}
                              labelledBy="Select"
                              options={options}
                            />
                          </div>
                         
                          <div className="col-lg-3">
                            <p>Begin Item</p>
                              <input
                                autoComplete="off"
                                placeholder="Search..."
                                type="search"
                                className="form-control"
                                value={filter1}
                                onChange={(e) => setFilter1(e.target.value)}
                              />
                          </div>

                          <div className="col-lg-3">
                            <p>End Item</p>
                              <input
                                autoComplete="off"
                                placeholder="Search..."
                                type="search"
                                className="form-control"
                                value={filter2}
                                onChange={(e) => setFilter2(e.target.value)}
                              />
                          </div>
                       

                          <div className="col-lg-3">
                            <label className="form-label" htmlFor="gstFree">Hide Zero Parts</label>
                            <div className="form-group">
                              <label className="custom-switch form-switch mb-0 p-0 form-label">
                                <input
                                  type="checkbox"
                                  className="custom-switch-input form-control"
                                  checked={toggleStates.gstFree}
                                  onChange={() => handleToggle('gstFree')}
                                />
                                <span
                                  className="custom-switch-indicator custom-switch-indicator-lg"
                                  style={{
                                    backgroundColor: toggleStates.gstFree ? "#323251" : "#d6d6e6",
                                    color: "white",
                                  }}
                                >
                                  {toggleStates.gstFree ? "On" : "Off"}
                                </span>
                              </label>
                            </div>
                          </div>



                        </form>

                        <div className="table-responsive mt-4">
                    <table className="table table-bordered text-nowrap border-bottom">
                      <thead>
                        <tr>
                          <th className="wd-5p text-center">Item Code</th>
                          <th>Description</th>
                          <th>Group</th>
                          <th>Supplier</th>
                          <th>Location</th>
                          <th>On Hand</th>
                          <th>Count</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filterData(ordersData, "itemcode").length > 0 ? (
                          filterData(ordersData, "itemcode").map(
                            (item, index) => (
                              <tr key={index}>
                                <td className="wd-5p text-center">
                                  {item.itemcode}
                                </td>
                                <td>{item.description}</td>
                                <td>{item.group}</td>
                                <td>{item.vendor}</td>
                                <td>{item.location}</td>
                                <td>{item.onhand}</td>
                                <td>{item.count}</td>
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

                      <div id="button6 ">
                      <div className="text-wrap row justify-content-between">
                        <div>
                          <button type="button" className="btn btn-danger" onClick={handleCancel}>
                            Cancel
                          </button>
                        </div>
                        <div className="btn-list">
                          <button type="button" className="btn btn-primary" >
                            Save Draft
                          </button>
                          <button type="button" className="btn btn-teal">
                            Process
                            <div>
                              
                            </div>
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
