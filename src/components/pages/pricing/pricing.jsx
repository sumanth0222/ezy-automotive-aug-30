import React, { useState, Fragment } from 'react';
import { Card, Col } from 'react-bootstrap';
import Pageheader from '../../../layout/layoutcomponent/pageheader';
import { CForm } from "@coreui/react";
import { useNavigate } from "react-router-dom"; 


const Groups = () => {
 
  const navigate = useNavigate(); 

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

  const ordersData = [
    { itemcode: "EXTR", description: "EXTERIOR"},
    { itemcode: "INTR", description: "INTERIOR"},
    { itemcode: "STAND", description: "STANDARD"},
    { itemcode: "TYRES", description: "TYRES"},
    { itemcode: "UNDBDY", description: "UNDERBODY"},
    { itemcode: "UNDBON", description: "UNDER BONNET"},
  ];

  const [filter, setFilter] = useState("");


  // Filtering based on search term
  const filterData = (data, field) =>
    data.filter((item) =>
      item[field].toLowerCase().includes(filter.toLowerCase())
    );

  const handleEditClick = (itemCode) => {
    // Navigate to the edit page with the itemCode
    navigate(`${import.meta.env.BASE_URL}forms/forminputspinners`);
  };

  const handlePlusClick = () => {
    navigate(`${import.meta.env.BASE_URL}forms/formeditor`); // Navigate to the form page
  };
 
  

  return (
    <Fragment>
      <Pageheader title="Inspection" heading="Inspection" active="Groups" />
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
                    <i className="fa fa-bars"></i>
                  </a>
                </div>
                <div>
                  <h3 className="mt-3">Inspection Groups</h3>
                </div>
              </div>

              <div className="row-sm row">
               

                <div className="form-group col-lg-8 d-flex align-items-center mt-2">
                
                  <div>
                    
                      <button
                        className="btn ripple btn-success text-white btn-icon"
                        data-placement="top"
                        data-bs-toggle="tooltip"
                        title="Add Group"
                        onClick={handlePlusClick}
                      >
                        <li className="fa fa-plus"></li>
                      </button>
                
                  </div>
                </div>

              </div>
            </Card.Header>
            <Card.Body>
              
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
                          <th className="wd-5p">Item Code</th>
                          <th>Description</th>
                          <th>Edit</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filterData(ordersData, "itemcode").length > 0 ? (
                          filterData(ordersData, "itemcode").map(
                            (item, index) => (
                              <tr key={index}>
                                <td className="wd-5p">
                                  {item.itemcode}
                                </td>
                                <td>{item.description}</td>
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
                            <td colSpan="3" className="text-center">
                              No results found.
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                 
                  </div>
                </CForm>
              
            </Card.Body>
          </Card>
        </Col>
      </div>
    </Fragment>
  );
};

export default Groups;
