import React, { useState, Fragment } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Pageheader from '../../../layout/layoutcomponent/pageheader';
import { Breadcrumb, Form } from "react-bootstrap";
import {
  CForm,
  CCol,
  CFormLabel,
  CFormFeedback,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CButton,
  CFormCheck,
} from "@coreui/react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook




const EmptyPage = () => {
  const [Server, setServer] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleOnchangeServer = () => {
    setServer(Server);
  };

  // Custom validation
  const [Custom, setCustom] = useState("");

  const handleOnchangeCustom = () => {
    setCustom(Custom);
  };
  const [validatedCustom, setValidatedCustom] = useState(false);
  const handleSubmitCustom = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidatedCustom(true);
  };

  // SingleSelect
  const [Single, setSingle] = useState("");

  const handleOnchangeSingle = () => {
    setSingle(Single);
  };

  // Tooltips
  const [Tooltips, setTooltips] = useState("");

  const handleOnchangeTooltips = () => {
    setTooltips(Tooltips);
  };
  const [validatedTooltips, setValidatedTooltips] = useState(false);
  const handleSubmitTooltips = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidatedTooltips(true);
  };

  // DefaultValidation
  const [Default, setDefault] = useState("");

  const handleOnchangedefault = () => {
    setDefault(Default);
  };
  const [validateddefault, setValidateddefault] = useState(false);
  const handleSubmitdefault = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidateddefault(true);
  };

  const ordersData = [
    { itemcode: "BK01", description: "Brake Pads Remove and Replace", brand: "", price: "$0.00", cost: "$0.00", qty: "" },
    { itemcode: "EO-1101", description: "SAKURA OIL FILTER(EXAMPLE)", brand: "", price: "$0.00", cost: "$0.00", qty: "" },
    { itemcode: "FF10575", description: "FRAM OIL FILTER(EXAMPLE)", brand: "", price: "$0.00", cost: "$0.00", qty: "" },
    { itemcode: "HU514X", description: "MANN-FILTER OIL", brand: "", price: "$0.00", cost: "$0.00", qty: "" },
    { itemcode: "LAB", description: "Labour", brand: "", price: "$0.00", cost: "$0.00", qty: "" },
    { itemcode: "NPN04", description: "Loan Car", brand: "", price: "$0.00", cost: "$0.00", qty: "" },
  ];

  const [filter, setFilter] = useState(""); // Search filter state
  const [isActive, setIsActive] = useState(false); // State for toggle button

  // Toggle button handler
  const toggleActiveState = () => {
    setIsActive(!isActive);
  };

  // Filtering based on search term
  const filterData = (data, field) =>
    data.filter((item) =>
      item[field].toLowerCase().includes(filter.toLowerCase())
    );

  const handleEditClick = (itemCode) => {
    // Navigate to the edit page with the itemCode
    navigate(`${import.meta.env.BASE_URL}pages/settings`);
  };

  const handlePlusClick = () => {
    navigate('/advancedui/collapse'); // Navigate to the form page
  };

  return (



    <Fragment>
      <Pageheader title="Products" heading="Pages" active="Products" />
      <div className="row mt-5">
        <Col lg={12} md={12}>
          <Card>
            <Card.Header
              className="row-sm row justify-content-between"
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
                    <i className="fa fa-tags"></i>
                  </a>
                </div>
                <div>
                  <h3 className="">Products</h3>
                </div>
              </div>

              <div className="row-sm row">
                {/* Summary By Field */}
                <div className="col-lg-3">
                  <div className="form-group ">
                    <label className="custom-switch form-switch mb-0 p-0 form-label">
                      <input
                        type="checkbox"
                        className="custom-switch-input form-control"
                        checked={isActive}
                        onChange={toggleActiveState}
                      />
                      <span
                        className="custom-switch-indicator custom-switch-indicator-lg"
                        style={{
                          backgroundColor: isActive ? "green" : "orange",
                          color: "white",
                        }}
                      >
                        {isActive ? "On" : "Off"}
                      </span>
                    </label>
                  </div>
                </div>

                <div className="form-group col-lg-5">
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
            </Card.Header>
            <Card.Body>
              {isActive ? (
                <CForm
                  className="row g-3 needs-validation"
                  noValidate
                  validated={validatedCustom}
                  onSubmit={handleSubmitCustom}
                >
                  {/* Orders Table */}
                  <div className="table-responsive mt-4">
                    <table className="table table-bordered text-nowrap border-bottom">
                      <thead>
                        <tr>
                          <th className="wd-5p text-center">Item Code</th>
                          <th>Description</th>
                          <th>Brand</th>
                          <th>Retail Price</th>
                          <th>Cost</th>
                          <th>Qty</th>
                          <th>Edit</th>
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
                                <td>{item.brand}</td>
                                <td>{item.price}</td>
                                <td>{item.cost}</td>
                                <td>{item.qty}</td>
                                <td>
                                  <button
                                    className="btn btn-sm btn-primary"
                                    onClick={() => handleEditClick(item.itemcode)}
                                  >
                                    Edit
                                  </button>
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
                      <span class="">Page <strong>1 of 4</strong> </span><span class="ms-auto ps-2"><button type="button" disabled="" class="btn-default tablebutton me-2 my-2 btn"> Previous </button><button type="button" disabled="" class="btn-default tablebutton me-2 my-2 btn"> &lt;&lt; </button><button type="button" disabled="" class="btn-default tablebutton me-2 my-2 btn"> &lt; </button><button type="button" class="btn-default tablebutton me-2 my-2 btn"> &gt; </button><button type="button" class="btn-default tablebutton me-2 my-2 btn"> &gt;&gt; </button><button type="button" class="btn-default tablebutton me-2 my-2 btn"> Next </button></span>
                    </div>
                  </div>
                </CForm>
              ) : (
                <div className="d-flex justify-content-center align-items-center">
                  <h5>No records found.</h5>
                </div>
              )}
            </Card.Body>
          </Card>
        </Col>
      </div>
    </Fragment>
  );
}

EmptyPage.propTypes = {};

EmptyPage.defaultProps = {};

export default EmptyPage;
