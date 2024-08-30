import React, { Fragment, useState } from "react";
import { Card, Col, Form, Row, Tab, Tabs } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Pageheader from '../../../layout/layoutcomponent/pageheader';
import { MultiSelect } from "react-multi-select-component";
import { options } from "../../../common/selectdata";
import { Link } from "react-router-dom";

// Sample data
const bookingsData = [
  { date: "21/08/2024", customer: "Sumanth", vehicle: "Audi" },
  { date: "21/08/2024", customer: "Anji", vehicle: "Toyota Hilux GTA010" },
];

const inspectionsData = [
  { date: "22/08/2024", inspector: "Sumanth", report: "BMW" },
  { date: "23/08/2024", inspector: "Desaji", report: "Audi" },
];

const jobsData = [
  { date: "24/08/2024", customer: "Valley Rentals", make: "Toyota", model: "Hilux", rego: "GTA010", jobcard: "50002", status: "Inspection in Progress", statuscomment: "Service & Bundled Product", total: "$1010.24" },
  { date: "25/08/2024", customer: "Pavan", make: "TATA", model: "Suv", rego: "GTA010", jobcard: "54852", status: "Inspection in Progress", statuscomment: "Service", total: "$810.24" },
];

const ordersData = [
  { order: "", date: "20/08/2024", supplier: "Napa", status: "Received", attached: "", subtotal: "$538.02", total: "$591.82" },
  { order: "", date: "22/08/2024", supplier: "CoolDrive", status: "On Order", attached: "", subtotal: "$80.44", total: "$88.48" },
  { order: "", date: "25/08/2024", supplier: "Autobarn", status: "Suggested", attached: "", subtotal: "$1161.60", total: "$1277.76" },
];

const invoicesData = [
  { postdatedate: "28/08/2024", reference: "32546", supplier: "Napa", invoicetype: "invoice", term: "30DaysAEOM", tax: "", gst: "$53.80", total: "$591.82" },
];

const Tabss = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [filter, setFilter] = useState(""); // Search filter state
  const [selected, setSelected] = useState([]); // MultiSelect state
  const [selectedImage, setSelectedImage] = useState(null);

  // Filtering based on search term
  const filterData = (data, field) =>
    data.filter((item) =>
      item[field]?.toLowerCase().includes(filter.toLowerCase())
    );

  // Handle image upload
  const handleImageUpload = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  return (
    <Fragment>
      <Pageheader title="Transaction Centre" heading="Pages" active="Transaction Centre" />
      <Row className="row-sm">
        <Col xl={12}>
          <Card className="mg-b-20" id="tabs-style3">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center">
                <div className="main-content-label mg-b-5">Transaction Centre</div>
                <div className="ms-4 d-lg-block form-group">
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

              <div className="panel panel-primary tabs-style-3">
                <div className="tab-menu-heading">
                  <div className="tabs-menu">
                    <Tabs defaultActiveKey="Bookings" className="nav panel-tabs border-bottom-0">
                      {/* Bookings Tab */}
                      <Tab eventKey="Bookings" title={<><span>Bookings</span> <span className="badge bg-danger ms-2">6</span></>}>
                        <div className="tab-pane active">
                          <div className="row-sm row">
                            <div className="col-lg-4">
                              <Form.Label>Start Date</Form.Label>
                              <div className="input-group">
                                <span className="input-group-text">
                                  <i className="typcn typcn-calendar-outline tx-24 lh--9 op-6"></i>
                                </span>
                                <DatePicker
                                  selected={startDate}
                                  onChange={(date) => setStartDate(date)}
                                  className="form-control"
                                  placeholderText="Select Start Date"
                                />
                              </div>
                            </div>
                            <div className="mg-t-20 mg-lg-t-0 col-lg-4">
                              <Form.Label>End Date</Form.Label>
                              <div className="input-group">
                                <span className="input-group-text">
                                  <i className="typcn typcn-calendar-outline tx-24 lh--9 op-6"></i>
                                </span>
                                <DatePicker
                                  selected={endDate}
                                  onChange={(date) => setEndDate(date)}
                                  className="form-control"
                                  placeholderText="Select End Date"
                                />
                              </div>
                            </div>
                            <div id="button6">
                              <div className="text-wrap">
                                <div className="btn-list">
                                  <button type="button" className="btn btn-primary">
                                    Month
                                  </button>
                                  <button type="button" className="btn btn-danger">
                                    Week
                                  </button>
                                  <button type="button" className="btn btn-teal">
                                    Today
                                  </button>
                                </div>
                              </div>
                            </div>

                            <a
                              className="btn ripple btn-warning text-white btn-icon"
                              data-placement="top"
                              data-bs-toggle="tooltip"
                              title="Add Profile"
                              href="#"
                            >
                              <i className="fe fe-plus"></i>
                            </a>
                          </div>

                          {/* Image Upload Section */}
                          <div className="row-sm row mt-4">
                            <div className="col-lg-4">
                              <Form.Label>Upload Image</Form.Label>
                              <input
                                type="file"
                                accept="image/*"
                                className="form-control"
                                onChange={(e) => handleImageUpload(e)}
                              />
                              {selectedImage && (
                                <div className="mt-3">
                                  <img
                                    src={URL.createObjectURL(selectedImage)}
                                    alt="Uploaded Preview"
                                    className="img-thumbnail"
                                    style={{ width: "150px", height: "150px" }}
                                  />
                                </div>
                              )}
                            </div>
                          </div>

                          {/* Bookings Table */}
                          <div className="table-responsive mt-4">
                            <table className="table table-bordered text-nowrap border-bottom">
                              <thead>
                                <tr>
                                  <th>Service Reg Date</th>
                                  <th>SRC CMP DT</th>
                                  <th>Foremen Name</th>
                                  <th>Client Name</th>
                                  <th>Contact No</th>
                                  <th>Veh/Reg No</th>
                                  <th>Make</th>
                                  <th>Model</th>
                                  <th>Service Cost</th>
                                  <th>Payment link</th>
                                  <th>Payment Mode</th>
                                  <th>Status</th>
                                  <th>Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>#01</td>
                                  <td>Tiger Nixon</td>
                                  <td>Tiger Nixon</td>
                                  <td>Tiger Nixon</td>
                                  <td>PRO12345</td>
                                  <td>PRO12345</td>
                                  <td>PRO8765</td>
                                  <td>PRO8765</td>
                                  <td>$345.00</td>
                                  <td>✔</td>
                                  <td>Online Payment</td>
                                  <td>Delivered</td>
                                  <td>
                                    <button>Edit</button>
                                    <button>Delete</button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>#06</td>
                                  <td>Briele Williamson</td>
                                  <td>Briele Williamson</td>
                                  <td>Briele Williamson</td>
                                  <td>PRO6789</td>
                                  <td>PRO6789</td>
                                  <td>PRO6789</td>
                                  <td>PRO6789</td>
                                  <td>$372,000</td>
                                  <td>✔</td>
                                  <td>Cash on delivered</td>
                                  <td>Delivering</td>
                                  <td>
                                    <button>Edit</button>
                                    <button>Delete</button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>#07</td>
                                  <td>Harrod Chandler</td>
                                  <td>Harrod Chandler</td>
                                  <td>Harrod Chandler</td>
                                  <td>PRO4567</td>
                                  <td>PRO4567</td>
                                  <td>PRO4567</td>
                                  <td>PRO4567</td>
                                  <td>$137,000</td>
                                  <td>✔</td>
                                  <td>Cash on delivered</td>
                                  <td>Awaiting</td>
                                  <td>
                                    <button>Edit</button>
                                    <button>Delete</button>
                                  </td>
                                </tr>
                                <tr>
                                  <td>#09</td>
                                  <td>Colleen Hurst</td>
                                  <td>Colleen Hurst</td>
                                  <td>Colleen Hurst</td>
                                  <td>PRO3678</td>
                                  <td>PRO3678</td>
                                  <td>PRO6785</td>
                                  <td>PRO6785</td>
                                  <td>$109,000</td>
                                  <td>✔</td>
                                  <td>Cash on delivered</td>
                                  <td>Delivered</td>
                                  <td>
                                    <button>Edit</button>
                                    <button>Delete</button>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>

                        </div>
                      </Tab>

                      {/* Inspections Tab */}
                      <Tab eventKey="Inspections" title={<><span>Inspections</span> <span className="badge bg-danger ms-2">2</span></>}>
                        <div className="tab-pane active">
                          <div className="row-sm row">
                            <div className="mt-4 col-lg-10">
                              <p className="mg-b-9">Status</p>
                              <MultiSelect
                                value={selected}
                                onChange={setSelected}
                                labelledBy="Select"
                                options={options}
                              />
                            </div>
                            <div className="col-lg-2">
                              <a className="btn ripple btn-warning text-white btn-icon mt-5" data-placement="top" data-bs-toggle="tooltip" title="Add Profile" href="#">
                                <i className="fe fe-plus"></i>
                              </a>
                            </div>
                          </div>

                          <div className="table-responsive mt-4">
                            <table className="table table-bordered text-nowrap border-bottom">
                              <thead>
                                <tr>
                                  <th className="wd-5p text-center">Post Date</th>
                                  <th>Inspector</th>
                                  <th>Report</th>
                                </tr>
                              </thead>
                              <tbody>
                                {filterData(inspectionsData, "inspector").length > 0 ? (
                                  filterData(inspectionsData, "inspector").map((inspection, index) => (
                                    <tr key={index}>
                                      <td className="wd-5p text-center">{inspection.date}</td>
                                      <td>{inspection.inspector}</td>
                                      <td>{inspection.report}</td>
                                    </tr>
                                  ))
                                ) : (
                                  <tr>
                                    <td colSpan="3" className="text-center">
                                      No results found.
                                    </td>
                                  </tr>
                                )}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </Tab>

                      {/* Jobs Tab */}
                      <Tab eventKey="Jobs" title={<><span>Jobs</span> <span className="badge bg-danger ms-2">6</span></>}>
                        <div className="tab-pane active">
                          <div className="row-sm row">
                            <div className="col-lg-12">
                              <div className="text-wrap">
                                <div className="btn-list">
                                  <button type="button" className="btn btn-primary">
                                    Month
                                  </button>
                                  <button type="button" className="btn btn-danger">
                                    Week
                                  </button>
                                  <button type="button" className="btn btn-teal">
                                    Today
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="table-responsive mt-4">
                            <table className="table table-bordered text-nowrap border-bottom">
                              <thead>
                                <tr>
                                  <th className="wd-5p text-center">Date</th>
                                  <th>Customer</th>
                                  <th>Make</th>
                                  <th>Model</th>
                                  <th>Rego</th>
                                  <th>Jobcard</th>
                                  <th>Status</th>
                                  <th>Status Comment</th>
                                  <th>Total</th>
                                </tr>
                              </thead>
                              <tbody>
                                {filterData(jobsData, "customer").length > 0 ? (
                                  filterData(jobsData, "customer").map((job, index) => (
                                    <tr key={index}>
                                      <td className="wd-5p text-center">{job.date}</td>
                                      <td>{job.customer}</td>
                                      <td>{job.make}</td>
                                      <td>{job.model}</td>
                                      <td>{job.rego}</td>
                                      <td>{job.jobcard}</td>
                                      <td>{job.status}</td>
                                      <td>{job.statuscomment}</td>
                                      <td>{job.total}</td>
                                    </tr>
                                  ))
                                ) : (
                                  <tr>
                                    <td colSpan="9" className="text-center">
                                      No results found.
                                    </td>
                                  </tr>
                                )}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </Tab>

                      {/* Orders Tab */}
                      <Tab eventKey="Orders" title={<><span>Orders</span> <span className="badge bg-danger ms-2">1</span></>}>
                        <div className="tab-pane active">
                          <div className="table-responsive mt-4">
                            <table className="table table-bordered text-nowrap border-bottom">
                              <thead>
                                <tr>
                                  <th className="wd-5p text-center">Order</th>
                                  <th>Date</th>
                                  <th>Supplier</th>
                                  <th>Status</th>
                                  <th>Attached</th>
                                  <th>Subtotal</th>
                                  <th>Total</th>
                                </tr>
                              </thead>
                              <tbody>
                                {filterData(ordersData, "supplier").length > 0 ? (
                                  filterData(ordersData, "supplier").map((order, index) => (
                                    <tr key={index}>
                                      <td className="wd-5p text-center">{order.order}</td>
                                      <td>{order.date}</td>
                                      <td>{order.supplier}</td>
                                      <td>{order.status}</td>
                                      <td>{order.attached}</td>
                                      <td>{order.subtotal}</td>
                                      <td>{order.total}</td>
                                    </tr>
                                  ))
                                ) : (
                                  <tr>
                                    <td colSpan="7" className="text-center">
                                      No results found.
                                    </td>
                                  </tr>
                                )}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </Tab>

                      {/* Invoices Tab */}
                      <Tab eventKey="Invoices" title={<><span>Invoices</span> <span className="badge bg-danger ms-2">2</span></>}>
                        <div className="tab-pane active">
                          <div className="table-responsive mt-4">
                            <table className="table table-bordered text-nowrap border-bottom">
                              <thead>
                                <tr>
                                  <th className="wd-5p text-center">Post Date</th>
                                  <th>Reference</th>
                                  <th>Supplier</th>
                                  <th>Invoice Type</th>
                                  <th>Term</th>
                                  <th>Tax</th>
                                  <th>GST</th>
                                  <th>Total</th>
                                </tr>
                              </thead>
                              <tbody>
                                {filterData(invoicesData, "supplier").length > 0 ? (
                                  filterData(invoicesData, "supplier").map((invoice, index) => (
                                    <tr key={index}>
                                      <td className="wd-5p text-center">{invoice.postdatedate}</td>
                                      <td>{invoice.reference}</td>
                                      <td>{invoice.supplier}</td>
                                      <td>{invoice.invoicetype}</td>
                                      <td>{invoice.term}</td>
                                      <td>{invoice.tax}</td>
                                      <td>{invoice.gst}</td>
                                      <td>{invoice.total}</td>
                                    </tr>
                                  ))
                                ) : (
                                  <tr>
                                    <td colSpan="8" className="text-center">
                                      No results found.
                                    </td>
                                  </tr>
                                )}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </Tab>
                    </Tabs>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Tabss;
