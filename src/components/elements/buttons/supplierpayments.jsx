import React, { Fragment, useState } from 'react';
import { Accordion, Col, Row, Button , Form, InputGroup, } from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker.css";
import Pageheader from '../../../layout/layoutcomponent/pageheader';


const SupplierPayments = () => {

  const [selected, setSelected] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  // Invoice Handling Functions
  const handleAddRow = () => {
    setRows([...rows, { reference: '', postdate: '', supplier: '',balancedue: 0, applied: 1, balance: 0 }]);
  };
  const handleRemoveRow = () => {
    if (rows.length > 1) {
      setRows(rows.slice(0, -1)); // Remove the last row
    } else {
      alert("At least one product should be present.");
    }
  };


  const handleRowChange = (index, field, value) => {
    const updatedRows = rows.map((row, i) =>
      i === index ? { ...row, [field]: value } : row
    );
    setRows(updatedRows);
  };

   // Invoice State
   const [rows, setRows] = useState([
    { reference: 'LAB', postdate: 'Labour', supplier: '',balancedue: 0, applied: 1, balance: 0 }
  ]);


  const calculateTotals = () => {
    const subtotal = rows.reduce((sum, row) => sum + (row.balancedue * row.applied), 0);
    const tax = subtotal * 0.1;
    const total = subtotal + tax;
    return { subtotal, tax, total };
  };

  const totals = calculateTotals();
  const idx = { color: 'primary' };
  const ide = { color: 'danger' };


   // State to track each toggle button's state
   const [toggleStates, setToggleStates] = useState({
    gstFree: false,
    dontUpdateapplied: false,
    serialNumber: false,
    priceLookup: false,
  });

  // Toggle button handler for individual switches
  const handleToggle = (key) => {
    setToggleStates((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };


  return (




    <Fragment>

      {/* <Pageheader />   */}
      <Pageheader title="Suppliers" heading="Pages" active="Payments" />

      <Row className='faq'>
        <Col xl={12}>
          <div className="panel-group2" id="accordion11" role="tablist">

            <Accordion className='overflow-hidden card'>
              <Accordion.Item eventKey="0" >
                <Accordion.Header className='accordion-toggle font-weight-semibold tx-12 panel-heading2 ' >


                  <div className="row-sm row " >

                    <div>
                      <a className="btn ripple btn-dark text-white btn-icon" data-placement="top" href="#">
                        <i className="fa fa-truck"></i>
                      </a>
                    </div>
                    <div>
                      <h4 className='mt-1'>Supplier</h4>
                    </div>

                  </div>
                 

                  <div className="row-sm row justify-content-between">
                    {/* Summary  Fields */}

                    {/* <div class="col-lg-3">

                      <div class="form-group">
                        <label class="custom-switch form-switch mb-0  p-0 form-label">
                          <input name="custom-switch-radio" type="checkbox" class="custom-switch-input form-control" />
                          <span class="custom-switch-indicator custom-switch-indicator-lg"></span>
                        </label>
                      </div>
                    </div> */}

                    {/* Summary  Fields */}
                    {/* <div class="col-lg-3">

                      <div class="form-group">
                        <label class="custom-switch form-switch mb-0  p-0 form-label">
                          <input name="custom-switch-radio" type="checkbox" class="custom-switch-input form-control" />
                          <span class="custom-switch-indicator custom-switch-indicator-lg"></span>
                        </label>
                      </div>
                    </div> */}

                
                  </div>

                </Accordion.Header>

                <Accordion.Body id="collapseFour1" className="panel-body">
                  <div className="col-lg-12 col-md-12">
                    <div className="card">

                    <div className="p-4">
                            <Row>
                              <Col md={4}>
                                <h6>Customer Information</h6>
                                <p>{}</p> {/* Name */}
                                <p>{}</p> {/* Address */}
                                <p>{}</p> {/* Extra Info */}
                              </Col>
                              <Col md={4}>
                                <h6>Customer Contact</h6>
                                <p>
                                  <i className="fa fa-phone" aria-hidden="true"></i> {}
                                </p>
                                <p>
                                  <i className="fa fa-envelope" aria-hidden="true"></i> {}
                                </p>
                                <p>
                                  <i className="fa fa-link" aria-hidden="true"></i> {}
                                </p>
                              </Col>
                              <Col md={4}>
                                <h6>Customer Address</h6>
                                <p>
                                  <i className="fa fa-map-marker" aria-hidden="true"></i> {}
                                </p>
                              </Col>
                            </Row>
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
                    <div className=' justify-content-between d-flex'>
                        <div>
                        <a className="btn ripple btn-dark text-white btn-icon" data-placement="top" href="#">
                            <i className="fa fa-file"></i>
                        </a>
                        </div>
                        <div style={{paddingLeft:"20px"}}>
                        <h4 className='mt-1'>Supplier Payments</h4>
                        </div>
                    </div>

                    
                  </div>
                 
                  
                </Accordion.Header>

                <Accordion.Body id="collapseFour1" className="panel-body">
                  <div className="col-lg-12 col-md-12">
                  <div className=''>
                {
                  <Form>
                    <Row>
                      
                     
                      <Col md={4}>
                        <Form.Group className="mb-3" controlId="formFieldBuildDate">
                          <Form.Label>Post Date</Form.Label>
                          <InputGroup>
                            <Button variant="outline-secondary">
                              <i className="fa fa-calendar" aria-hidden="true"></i>
                            </Button>
                            <Form.Control
                              type="date"
                              placeholder="Select Date"
                            />
                          </InputGroup>
                        </Form.Group>
                      </Col>
                      
                    </Row>


                    <div className="container mt-4">
                      <div className="row">
                        <div className="col-md-10">
                          <table className="table table-bordered">
                            <thead>
                              <tr>
                                <th>Add</th>
                                <th>Reference</th>
                                <th>Post Date</th>
                                <th>Supplier</th>
                                <th>Balance Due</th>
                                <th>Applied</th>
                                <th>Balance</th>
                                <th>Delete</th>
                              </tr>
                            </thead>
                            <tbody>
                              {rows.map((row, index) => (
                                <tr key={index}>
                                  <td>
                                    <button
                                      type="button"
                                      className="btn btn-primary"
                                      onClick={handleAddRow}
                                    >
                                      <i className='fa fa-plus-square' />
                                    </button>
                                  </td>
                                  <td>
                                    <input
                                      type="text"
                                      value={row.reference}
                                      onChange={(e) => handleRowChange(index, 'reference', e.target.value)}
                                      className="form-control"
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="text"
                                      value={row.postdate}
                                      onChange={(e) => handleRowChange(index, 'postdate', e.target.value)}
                                      className="form-control"
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="text"
                                      value={row.supplier}
                                      onChange={(e) => handleRowChange(index, 'supplier', e.target.value)}
                                      className="form-control"
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="number"
                                      value={row.balancedue}
                                      onChange={(e) => handleRowChange(index, 'balancedue', parseFloat(e.target.value))}
                                      className="form-control"
                                    />
                                  </td>
                                  
                                  
                                  <td>₹{(row.balancedue * row.applied * 0.1).toFixed(2)}</td>
                                  <td>₹{(row.balancedue * row.applied).toFixed(2)}</td>
                                  <td>
                                    <button
                                      type="button"
                                      className="btn btn-danger"
                                      onClick={() => handleRemoveRow(index)}
                                    >
                                      <i className='fa fa-trash' />
                                    </button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                        <div className="col-md-2">
                          <div className="form-group">
                            <label>Subtotal:</label>
                            <input type="text" value={`₹${totals.subtotal.toFixed(2)}`} readOnly className="form-control" />
                          </div>
                          <div className="form-group">
                            <label>Freight:</label>
                            <input type="text" className="form-control" />
                          </div>
                          <div className="form-group">
                            <label>Sales Tax (10%):</label>
                            <input type="text" value={`₹${totals.tax.toFixed(2)}`} readOnly className="form-control" />
                          </div>
                          <div className="form-group">
                            <label>Total:</label>
                            <input type="text" value={`₹${totals.total.toFixed(2)}`} readOnly className="form-control" />
                          </div>
                        </div>
                      </div>
                    </div>


                    <div className="col-md-12">
                            <label className="form-label" htmlFor="validationCustom05">Note</label>
                            <textarea className="form-control" placeholder="Textarea" rows="3"></textarea>
                    </div>

                  </Form>

                }
              </div>

                <div id="button6">
                      <div className="text-wrap row justify-content-between pt-5">
                        <div>
                          <button type="button" className="btn btn-danger">
                          Cancel
                          </button>
                        </div>
                        <div className="btn-list">
                          <button type="button" className="btn btn-primary">
                            Process
                          </button>
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
}

SupplierPayments.propTypes = {};

SupplierPayments.defaultProps = {};

export default SupplierPayments;
