import React, { useState, Fragment } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Pageheader from '../../../layout/layoutcomponent/pageheader';
import { Breadcrumb, Form } from "react-bootstrap";
import {
  CForm,
} from "@coreui/react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook

const EmptyPage = () => {
  const [Server, setServer] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Custom validation
  const [Custom, setCustom] = useState("");
  const [validatedCustom, setValidatedCustom] = useState(false);
  const handleSubmitCustom = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidatedCustom(true);
  };

  const ordersData = [
    { itemcode: "BK01", description: "Brake Pads Remove and Replace", brand: "", price: "$0.00", cost: "$0.00", qty: "" },
    { itemcode: "EO-1101", description: "SAKURA OIL FILTER(EXAMPLE)", brand: "", price: "$0.00", cost: "$0.00", qty: "" },
    { itemcode: "FF10575", description: "FRAM OIL FILTER(EXAMPLE)", brand: "", price: "$0.00", cost: "$0.00", qty: "" },
    { itemcode: "HU514X", description: "MANN-FILTER OIL", brand: "", price: "$0.00", cost: "$0.00", qty: "" },
    { itemcode: "LAB", description: "Labour", brand: "", price: "$0.00", cost: "$0.00", qty: "" },
    { itemcode: "NPN04", description: "Loan Car", brand: "", price: "$0.00", cost: "$0.00", qty: "" },
  ];

  const [filter, setFilter] = useState("");
  const [isActive, setIsActive] = useState(true);

  // Toggle button handler
  const toggleActiveState = () => {
    setIsActive((prev) => !prev);
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
 
  const [dark1, setdark1] = useState("on");

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
                    <i className="fa fa-tags"></i>
                  </a>
                </div>
                <div>
                  <h3 className="mt-3">Products</h3>
                </div>
              </div>

              <div className="row-sm row">
                <div className="col-lg-3 d-flex mt-3">

                <div className={`main-toggle ms-sm-2  main-toggle-dark ${dark1}`} onClick={() => { dark1 == "on" ? setdark1("off") : setdark1("on"); }}>
                  <span className={`${dark1 === "on" ? 'active' : ''}`}
                    onClick={toggleActiveState}>
                      {isActive ? 'ACTIVE' : 'INACTIVE'}
                    </span>
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
                        onClick={handlePlusClick}
                      >
                        <li className="fa fa-plus"></li>
                      </button>
                    </a>
                  </div>
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
                                   <i className="fa fa-edit"></i>
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
};

export default EmptyPage;
