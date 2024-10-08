
import React, { Fragment, useState } from 'react';
import { Accordion, Col, Row, Form , Button, Card} from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";
import { MultiSelect } from "react-multi-select-component";
import { matrix, matrixtype, updatetype} from "../../common/selectdata";
import "react-datepicker/dist/react-datepicker.css";
import Pageheader from '../../layout/layoutcomponent/pageheader';
import { useNavigate } from 'react-router-dom';
import "react-datepicker/dist/react-datepicker.css";
import Draggable from 'react-draggable';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
} from "@mui/material";
import SunEditor from 'suneditor-react'; // Make sure you have this installed
import 'suneditor/dist/css/suneditor.min.css'; // Import SunEditor styles


const PriceMatrix = () => {

  const [selected, setSelected] = useState([]);
  const [selected1, setSelected1] = useState([]);
  const [selected2, setSelected2] = useState([]);
  
  const navigate = useNavigate(); 

  const [isActive, setIsActive] = useState(false); // State for toggle button
  const [value, setValue] = useState(''); // State for SunEditor
  function PaperComponent(props) {
    return (
      <Draggable
        handle="#draggable-dialog-title"
        cancel={'[class*="MuiDialogContent-root"]'}
      >
        <Paper {...props} />
      </Draggable>
    );
  }
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  const handleClickOpen1 = () => {
    setOpen1(true);
  };
  
  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClosedraggable = () => {
    setOpen1(false);
  };

  const handleClosedraggable1 = () => {
    setOpen2(false);
  };

  // Filtering based on search term
  const [filter, setFilter] = useState("");
   
   const filterData = (data, field) =>
    data.filter((item) =>
      item[field].toLowerCase().includes(filter.toLowerCase())
    );


  const handleCancel = () => {
    navigate(-1);  // Redirect to the previous page
  };

  const Productgroup = [
    {  product: "Air Conditioning", description: "Air Conditioning"},
    {  product: "Cable", description: "Cable"}, 
    {  product: "Communications", description: "Communications"}, 
    {  product: "Filters", description: "Filters"}, 
    {  product: "Lights", description: "Lights"}, 
    // {  product: "Promotion/Campagin", description: "Promotion/Campagin"}, 
  ];   


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

                          
                          
                          <div className="col-lg-4">
                            <p>Matrix</p>
                            <MultiSelect
                              value={selected}
                              onChange={setSelected}
                              labelledBy="Select"
                              options={matrix}
                            />
                          </div>

                          
                      <div className="col-lg-3 row d-flex justify-content-evenly">
                        
                        <div className='mt-5'>
                          <button type="button" className="btn btn-teal" onClick={handleClickOpen1}>
                            Create New
                          </button>
                          <Dialog
                                    open={open1}
                                    onClose={handleClosedraggable}
                                    PaperComponent={PaperComponent}
                                    aria-labelledby="draggable-dialog-title"
                                  >
                                    <DialogTitle style={{ cursor: "move", backgroundColor:"#38cab3" }} id="draggable-dialog-title">
                                      New Matrix
                                    </DialogTitle>
                                    <DialogContent >
                                      <DialogContentText className='row-sm row'>
                                        
                                      <div className="panel panel-primary tabs-style-3">
                                      <div className="row-sm row">

                          
                                        <div className="col-lg-12">
                                            <label className="form-label" htmlFor="validationCustom05">Matrix Name</label>
                                            <input className="form-control" placeholder="text" ></input>
                                        </div>
                                        <div className="col-lg-12">
                                          <p>Matrix Type</p>
                                          <MultiSelect
                                            value={selected1}
                                            onChange={setSelected1}
                                            labelledBy="Select"
                                            options={matrixtype}
                                          />
                                        </div>
                          
                                        </div>
                                        </div>

                                        
                                      </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                      <Button variant="secondary" className="me-1" onClick={handleClosedraggable}>
                                        Cancel
                                      </Button>
                                      <Button onClick={handleClosedraggable} className="me-1" variant="success">
                                        Save
                                      </Button>
                                    </DialogActions>
                          </Dialog>
                        </div>
                        <div className='mt-5'>
                          <button type="button" className="btn btn-danger">
                            Delete
                          </button>
                        </div>
                      </div>

                          <div className="col-lg-4">
                            <p>Matrix Type</p>
                            <MultiSelect
                              value={selected1}
                              onChange={setSelected1}
                              labelledBy="Select"
                              options={matrixtype}
                            />
                          </div>


                          <div className="col-lg-4">
                            <p>Updated Type</p>
                            <MultiSelect
                              value={selected2}
                              onChange={setSelected2}
                              labelledBy="Select"
                              options={updatetype}
                            />
                          </div>
                          <div className="col-lg-4">
                            <label className="form-label" htmlFor="validationCustom05">Percentage</label>
                            <input className="form-control" id="validationCustom05" type="text" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                          </div>

                          <div className='mt-5 col-lg-3'>
                          <button type="button" className="btn btn-primary">
                            Update
                          </button>
                        </div>

                        </form>

                        <h4 style={{backgroundColor:"#c1c1c1", height:"120px", textAlign:"center",paddingTop:"25px" , marginTop: "8px"}}>No Record Found</h4>
                      
                        <div className="col-lg-6 row d-flex justify-content-evenly">
                        
                        <div className=''>
                          <button type="button" className="btn btn-teal" onClick={handleClickOpen2}>
                            Add Product Group
                          </button>
                          <Dialog
                                    open={open2}
                                    onClose={handleClosedraggable1}
                                    PaperComponent={PaperComponent}
                                    aria-labelledby="draggable-dialog-title"
                                  >
                                    <DialogTitle style={{ cursor: "move", backgroundColor:"#38cab3" }} id="draggable-dialog-title">
                                      Select A Product Group
                                    </DialogTitle>
                                    <DialogContent >
                                      <DialogContentText className='row-sm row'>
                                        
                                      <div className="col-lg-12 col-md-12">
                    <div className="card">




                       {/* Orders Table */}
                  <div className="table-responsive mt-4">
                    <table className="table table-bordered text-nowrap border-bottom">
                      <thead>
                        <tr>
                          <th className="wd-5p text-center">Product Group</th>
                          <th>Description</th>
                      
                        </tr>
                      </thead>
                      <tbody>
                        {filterData(Productgroup, "product").length > 0 ? (
                          filterData(Productgroup, "product").map(
                            (product, index) => (
                              <tr key={index}>
                                <td>{product.product}</td>
                                <td>{product.description}</td>
                               
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
                    
                  </div>



                    </div>

                    
                  </div>

                                        
                                      </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                      <Button variant="secondary" className="me-1" onClick={handleClosedraggable1}>
                                        Cancel
                                      </Button>
                                      <Button onClick={handleClosedraggable1} className="me-1" variant="success">
                                        Select
                                      </Button>
                                    </DialogActions>
                          </Dialog>
                        </div>
                        <div className=''>
                          <button type="button" className="btn btn-danger">
                            Add All Product Groups
                          </button>
                        </div>

                      </div>
                      
                      
                      </div>
                    </div>

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
