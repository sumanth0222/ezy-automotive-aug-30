import React, { Fragment, useState } from 'react';
import { Accordion, Breadcrumb, Col, FormGroup, Row, Button, ButtonGroup, Collapse, Dropdown, Form, InputGroup, Card, Tooltip, OverlayTrigger, Nav, Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Pageheader from '../../../layout/layoutcomponent/pageheader';
import SunEditor from 'suneditor-react'; // Make sure you have this installed
import 'suneditor/dist/css/suneditor.min.css'; // Import SunEditor styles

import { ToggleButton } from 'react-bootstrap';

const Faqs = () => {

  const [value, setValue] = useState('');
  const [invoiceNotes, setInvoiceNotes] = useState('');
  const [jobCardNotes, setJobCardNotes] = useState('');

  const [rows, setRows] = useState([
    { product: 'LAB', description: 'Labour', unitPrice: 0, qty: 1, tax: 0, lineTotal: 0 }
  ]);

  const handleAddRow = () => {
    setRows([...rows, { product: '', description: '', unitPrice: 0, qty: 1, tax: 0, lineTotal: 0 }]);
  };

  const handleRemoveRow = () => {
    if (rows.length > 1) {
      setRows(rows.slice(0, -1));
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

  const calculateTotals = () => {
    const subtotal = rows.reduce((sum, row) => sum + (row.unitPrice * row.qty), 0);
    const tax = subtotal * 0.1;
    const total = subtotal + tax;
    return { subtotal, tax, total };
  };

  const totals = calculateTotals();

  const idx = { color: 'primary' };
  const ide = { color: 'secondary' };

  return (
    <Fragment>

      <Pageheader title="Customer Booking" heading="Pages" active="Customer Booking" />


      <Row className='faq mt-5'>
        <Col xl={12}>
          <div className="panel-group2" id="accordion11" role="tablist">

            <Accordion className='overflow-hidden card'>
              <Accordion.Item eventKey="0">
                <Accordion.Header className='accordion-toggle font-weight-semibold tx-12 panel-heading2'>
                  <div className="row-sm row">
                    <div>

                      <a class="btn ripple btn-warning text-white btn-icon" data-placement="top" href="#">
                        <i class="fa fa-user"></i>
                      </a>

                    </div>
                    <div>
                      <h4 className='mt-1'>Customer:</h4>
                    </div>
                  </div>


                </Accordion.Header>
                <Accordion.Body id="collapseFour1" className="panel-body">
                  <div class="col-xl-12">
                    {/* <div class="card"> */}


                    <div class="table-responsive">
                      <table class="table mg-b-0 text-md-nowrap table">
                        <thead>
                          <tr>
                            <th>Customer Information</th>
                            <th>Customer Contact</th>
                            <th>Contact 1 Information</th>
                          </tr>
                        </thead>

                        <tbody>
                          <tr>
                            <td>Sumanth</td>
                            <td>6302703786</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>Madhapur</td>
                            <td>234567</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>Ap 22 m 456</td>
                            <td>sumanth@gmail.com</td>
                            <td></td>
                          </tr>


                        </tbody>
                      </table>



                    </div>



                    {/* </div> */}


                  </div>



                </Accordion.Body>
              </Accordion.Item>
            </Accordion>


            <Accordion className='overflow-hidden card'>
              <Accordion.Item eventKey="0">
                <Accordion.Header className='accordion-toggle font-weight-semibold tx-12 panel-heading2'>
                  <div className="row-sm row">
                    <div>

                      <a class="btn ripple btn-warning text-white btn-icon" data-placement="top" href="#">
                      <i class="fa fa-car"></i>
                      </a>

                    </div>
                    <div>
                      <h4 className='mt-1'>Vehicle Select (Optional):</h4>
                    </div>
                  </div>


                </Accordion.Header>
                <Accordion.Body id="collapseFour1" className="panel-body">
                  <div class="col-xl-12">
                    {/* <div class="card"> */}


                    <div class="table-responsive">
                      <table class="table mg-b-0 text-md-nowrap table">
                        <thead>
                          <tr>
                            <th>Vehicle Information</th>
                            <th>Vehicle Contact</th>
                            <th>Vehicle 1 Information</th>
                          </tr>
                        </thead>

                        <tbody>
                          <tr>
                            <td>Sumanth</td>
                            <td>Ap39</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>Madhapur</td>
                            <td>Bs6</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>Ap 22 m 456</td>
                            <td>sumanth@gmail.com</td>
                            <td></td>
                          </tr>


                        </tbody>
                      </table>



                    </div>



                    {/* </div> */}


                  </div>



                </Accordion.Body>
              </Accordion.Item>
            </Accordion>


            <Accordion className="overflow-hidden card">
              <Accordion.Item eventKey="0">
                <Accordion.Header className='accordion-toggle font-weight-semibold tx-12 panel-heading2'>
                  <div className="row-sm row">
                    <div>

                      <a class="btn ripple btn-warning text-white btn-icon" data-placement="top" href="#">
                        <i class="fa fa-paperclip"></i>
                      </a>
                    </div>
                    <div>
                      <h4>Attachments</h4>
                    </div>
                  </div>
                </Accordion.Header>
                <Accordion.Body id="collapseFour2" className="panel-body">

                  <div class="col-lg-12 col-md-12">
                    <div class="card">

                      <form class="was-validated">
                        <div className="row-sm row">
                          <div class="mb-3">
                            <input type="file" id="formFile" class="form-control" />
                          </div>
                          <div class="mb-3">
                            <button class="btn btn-primary" type="submit" disabled="">Upload</button>
                          </div>
                        </div>
                      </form>

                    </div>
                  </div>

                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            <Accordion className="overflow-hidden card">
              <Accordion.Item eventKey="0">
                <Accordion.Header className='accordion-toggle font-weight-semibold tx-12 panel-heading2'>
                  <div className="row-sm row">
                    <div>

                      <a class="btn ripple btn-warning text-white btn-icon" data-placement="top" href="#">
                        <i class="fa fa-file-invoice"></i>
                      </a>
                    </div>
                    <div>
                      <h4>Invoice Payments</h4>
                    </div>
                  </div>
                </Accordion.Header>
                <Accordion.Body id="collapseFour3" className="panel-body">

                  <div class="col-xl-12">
                    {/* <div class="card"> */}


                    <div class="table-responsive">
                      <table class="table mg-b-0 text-md-nowrap table">
                        <thead>
                          <tr>
                            <th>Payment No</th>
                            <th>Payment Date</th>
                            <th>Status</th>
                            <th>Payment Amount</th>
                          </tr>
                        </thead>

                        <tbody>
                          <tr>
                            <td>300020</td>
                            <td>25/08/2024</td>
                            <td>Closed</td>
                            <td>$244.20</td>
                          </tr>

                        </tbody>
                      </table>


                      <div class="d-flex mt-4 align-items-center"><span class="">Page <strong>1 of 5</strong> </span><span class="ms-auto ps-2"><button type="button" disabled="" class="btn-default tablebutton me-2 my-2 btn"> Previous </button><button type="button" disabled="" class="btn-default tablebutton me-2 my-2 btn"> &lt;&lt; </button><button type="button" disabled="" class="btn-default tablebutton me-2 my-2 btn"> &lt; </button><button type="button" class="btn-default tablebutton me-2 my-2 btn"> &gt; </button><button type="button" class="btn-default tablebutton me-2 my-2 btn"> &gt;&gt; </button><button type="button" class="btn-default tablebutton me-2 my-2 btn"> Next </button></span></div>



                    </div>



                    {/* </div> */}


                  </div>

                </Accordion.Body>
              </Accordion.Item>
            </Accordion>


            <Accordion className="overflow-hidden card">
              <Accordion.Item eventKey="0">
                <Accordion.Header className='accordion-toggle font-weight-semibold tx-12 panel-heading2'>
                  <div className="row-sm row">
                    <div>

                      <a class="btn ripple btn-warning text-white btn-icon" data-placement="top" href="#">
                        <i class="fa fa-file"></i>
                      </a>
                    </div>
                    <div>
                      <h4>Credit Application</h4>
                    </div>
                  </div>
                </Accordion.Header>
                <Accordion.Body id="collapseFour4" className="panel-body">

                  <td colSpan="3" className="text-center">
                    No results found.
                  </td>


                </Accordion.Body>
              </Accordion.Item>
            </Accordion>


            <Accordion className="overflow-hidden card">
              <Accordion.Item eventKey="0">
                <Accordion.Header className='accordion-toggle font-weight-semibold tx-12 panel-heading2'>
                  <div className="row-sm row">
                    <div>

                      <a class="btn ripple btn-warning text-white btn-icon" data-placement="top" href="#">
                        <i class="fa fa-spinner"></i>
                      </a>
                    </div>
                    <div>
                      <h4>Activity Log</h4>
                    </div>
                  </div>
                </Accordion.Header>
                <Accordion.Body id="collapseFour5" className="panel-body">

                  <td colSpan="3" className="text-center">
                    No results found.
                  </td>

                </Accordion.Body>
              </Accordion.Item>
            </Accordion>


            <Accordion className="overflow-hidden card">
              <Accordion.Item eventKey="0">
                <Accordion.Header className="accordion-toggle font-weight-semibold tx-12 panel-heading2">
                  <div className="row-sm row">
                    <div>
                      <a className="btn ripple btn-warning text-white btn-icon" data-placement="top" href="#">
                        <i className="fa fa-file-alt"></i>
                      </a>
                    </div>
                    <div>
                      <h4>Customer Invoice</h4>
                    </div>
                  </div>
                </Accordion.Header>

                <Accordion.Body id="collapseFour6" className="panel-body">
                  <form className="row g-3 needs-validation" noValidate="">
                    <div className="col-md-4 position-relative">
                      <label className="form-label" htmlFor="validationTooltip01">Invoice No</label>
                      <input className="form-control" id="validationTooltip01" type="text" required="" value="" />
                    </div>

                    <div className="col-md-4 position-relative">
                      <label className="form-label" htmlFor="validationTooltip02">Job Crd No</label>
                      <input className="form-control" id="validationTooltip02" type="text" required="" value="" />
                    </div>

                    <div className="col-md-4 position-relative">
                      <label className="form-label" htmlFor="validationTooltip02">Order Number</label>
                      <input className="form-control" id="validationTooltip02" type="text" required="" value="" />
                    </div>

                    <div className="col-md-4 position-relative">
                      <label className="form-label" htmlFor="postDate">Post Date</label>
                      <div className="input-group">
                        <input className="form-control" id="postDate" type="date" required="" value="" />
                        <span className="input-group-text"><i className="fa fa-calendar"></i></span>
                      </div>
                    </div>

                    <div className="col-md-4 position-relative">
                      <label className="form-label" htmlFor="invoiceType">Invoice Type</label>
                      <select className="form-control" id="invoiceType" required="">
                        <option value="">Select Type</option>
                        <option value="type1">Type 1</option>
                        <option value="type2">Type 2</option>
                        <option value="type3">Type 3</option>
                      </select>
                    </div>

                    <div className="col-md-4 position-relative">
                      <label className="custom-switch form-switch mb-0 p-0 form-label">
                        Account Type <br />
                        <input name="custom-switch-radio" type="checkbox" className="custom-switch-input form-control" />
                        <span className="custom-switch-indicator custom-switch-indicator-lg"></span>
                      </label>
                    </div>

                    <div className="col-md-3 position-relative">
                      <label className="form-label" htmlFor="followUpDate">Follow Up Date</label>
                      <input className="form-control" id="followUpDate" type="date" required="" value="" />
                    </div>

                    <div className="col-md-3 position-relative">
                      <label className="form-label" htmlFor="odometer">Odometer</label>
                      <input className="form-control" id="odometer" type="text" required="" value="" />
                    </div>

                    <div className="col-md-3 position-relative">
                      <label className="form-label" htmlFor="hours">Hours</label>
                      <input className="form-control" id="hours" type="text" required="" value="" />
                    </div>

                    <div className="col-md-3 position-relative">
                      <label className="form-label" htmlFor="nextServiceMiles">Next Service-Miles</label>
                      <input className="form-control" id="nextServiceMiles" type="text" required="" value="" />
                    </div>

                    <div className="col-md-5 position-relative">
                      <label className="form-label" htmlFor="invoiceType">Job Status</label>
                      <select className="form-control" id="invoiceType" required="">
                        <option value="">Select Type</option>
                        <option value="type1">Type 1</option>
                        <option value="type2">Type 2</option>
                        <option value="type3">Type 3</option>
                      </select>
                    </div>

                    <div className="col-md-5 position-relative">
                      <label className="form-label" htmlFor="nextServiceMiles">Job Status Comment</label>
                      <input className="form-control" id="nextServiceMiles" type="text" required="" value="" />
                    </div>

                    <div className="col-md-2 position-relative">
                      <label className="custom-switch form-switch mb-0 p-0 form-label">
                        Internal Invoice <br />
                        <input name="custom-switch-radio" type="checkbox" className="custom-switch-input form-control" />
                        <span className="custom-switch-indicator custom-switch-indicator-lg"></span>
                      </label>
                    </div>

                    <div className="col-md-5 position-relative">
                      <label className="form-label" htmlFor="invoiceType">Customer Source</label>
                      <select className="form-control" id="invoiceType" required="">
                        <option value="">Select Type</option>
                        <option value="type1">Type 1</option>
                        <option value="type2">Type 2</option>
                        <option value="type3">Type 3</option>
                      </select>
                    </div>

                    <div className="col-md-10 position-relative">
                      <label className="form-label" htmlFor="descriptions">Descriptions</label>
                      <input className="form-control" id="descriptions" type="text" required="" />
                    </div>



                    <div className="row">
                      <div className="col-md-8">
                        <table className="table table-bordered">
                          <thead>
                            <tr>
                              <th>Product</th>
                              <th>Description</th>
                              <th>Unit Price</th>
                              <th>Qty</th>
                              <th>Tax (10%)</th>
                              <th>Line Total</th>
                            </tr>
                          </thead>
                          <tbody>
                            {rows.map((row, index) => (
                              <tr key={index}>
                                <td>
                                  <input
                                    type="text"
                                    value={row.product}
                                    onChange={(e) => handleRowChange(index, 'product', e.target.value)}
                                    className="form-control"
                                  />
                                </td>
                                <td>
                                  <input
                                    type="text"
                                    value={row.description}
                                    onChange={(e) => handleRowChange(index, 'description', e.target.value)}
                                    className="form-control"
                                  />
                                </td>
                                <td>
                                  <input
                                    type="number"
                                    value={row.unitPrice}
                                    onChange={(e) => handleRowChange(index, 'unitPrice', parseFloat(e.target.value))}
                                    className="form-control"
                                  />
                                </td>
                                <td>
                                  <input
                                    type="number"
                                    value={row.qty}
                                    onChange={(e) => handleRowChange(index, 'qty', parseFloat(e.target.value))}
                                    className="form-control"
                                  />
                                </td>
                                <td>₹{(row.unitPrice * row.qty * 0.1).toFixed(2)}</td>
                                <td>₹{(row.unitPrice * row.qty).toFixed(2)}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <div className="col-md-4">
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
                      <div className='d-flex gap-2'>
                        <button
                          type="button"
                          className="btn btn-primary mb-3"
                          onClick={handleAddRow}
                        >
                          Add More Product
                        </button>
                        <button
                          type="button"
                          className="btn btn-danger mb-3"
                          onClick={handleRemoveRow}
                        >
                          Remove Last Product
                        </button>

                      </div>
                      <div className="col-md-12 position-relative d-flex justify-content-between mt-5">
                        <button className="btn btn-primary" type="submit">Cancel</button>
                        <button className="btn btn-secondary" type="button">Void</button>
                      </div>
                    </div>




                  </form>


                </Accordion.Body>
              </Accordion.Item>
            </Accordion>




          </div>
        </Col>
      </Row>



      <Row>
        <Col sm={12} lg={6} xl={6} md={6}>
          <Card>
            <Card.Header className="border-bottom-0">
              <h3 className="card-title">Invoice Notes</h3>
            </Card.Header>
            <Card.Body>
              <SunEditor
                setContents={value}
                onChange={setValue}
                setOptions={{
                  buttonList: [
                    ['undo', 'redo'],
                    ['font', 'fontSize'],
                    ['paragraphStyle', 'blockquote'],
                    ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
                    ['fontColor', 'hiliteColor'],
                    ['align', 'list', 'lineHeight'],
                    ['outdent', 'indent'],
                    ['table', 'horizontalRule', 'link', 'image', 'video'],
                    ['preview', 'print'],
                    ['removeFormat']
                  ],
                  defaultTag: 'div',
                  minHeight: '300px',
                  showPathLabel: false,
                  attributesWhitelist: {
                    all: 'style',
                    table: 'cellpadding|width|cellspacing|height|style',
                    tr: 'valign|style',
                    td: 'styleinsert|height|style',
                    img: 'title|alt|src|style'
                  }
                }}
              />
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} lg={6} xl={6} md={6}>
          <Card>
            <Card.Header className="border-bottom-0">
              <h3 className="card-title">Job Card Notes</h3>
            </Card.Header>
            <Card.Body>
              <SunEditor
                setContents={value}
                onChange={setValue}
                setOptions={{
                  buttonList: [
                    ['undo', 'redo'],
                    ['font', 'fontSize'],
                    ['paragraphStyle', 'blockquote'],
                    ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
                    ['fontColor', 'hiliteColor'],
                    ['align', 'list', 'lineHeight'],
                    ['outdent', 'indent'],
                    ['table', 'horizontalRule', 'link', 'image', 'video'],
                    ['preview', 'print'],
                    ['removeFormat']
                  ],
                  defaultTag: 'div',
                  minHeight: '300px',
                  showPathLabel: false,
                  attributesWhitelist: {
                    all: 'style',
                    table: 'cellpadding|width|cellspacing|height|style',
                    tr: 'valign|style',
                    td: 'styleinsert|height|style',
                    img: 'title|alt|src|style'
                  }
                }}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col className='mb-3' md={12}>
          <Link to={`${import.meta.env.BASE_URL}pages/faqs/`}> <Button variant={idx.color} className="btn me-2">
            Process
          </Button></Link>

          <Button variant={ide.color} className="btn me-2">
            Save
          </Button>
        </Col>
      </Row>

    </Fragment>
  );
}
Faqs.propTypes = {};

Faqs.defaultProps = {};

export default Faqs;