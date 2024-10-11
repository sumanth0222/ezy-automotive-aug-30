import React, { Fragment, useState } from 'react';
import {  Col, Form,  Row,  Accordion, } from "react-bootstrap";
import {  initialListdata, initialListdismissingdata, initialListiconsdata } from '../../../common/commondata';
import Pageheader from '../../../layout/layoutcomponent/pageheader';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MultiSelect } from "react-multi-select-component";
import { SalesReport1,SalesReport2, SalesReport3, SalesReport4,SalesReport5,itemsales} from "../../../common/selectdata";
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Alerts = () => {
  
    const navigate = useNavigate(); // Initialize useNavigate hook
     // Navigation handler
  const handleBack = () => {
    navigate(-1); // Navigate to the previous page
  };
  
  const [alertData, setalertData] = useState(initialListdata);

  const [outline, setoutline] = useState(initialListdata);
  
  const [solid, setsolid] = useState(initialListdata);
 
  
 
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [filter, setFilter] = useState("");
  const [selected, setSelected] = useState([]);


  const [fullscreen, setFullscreen] = useState(true);
  const [shows, setShows] = useState(false);

  // Filtering based on search term
  const filterData = (data, field) =>
    data.filter((item) =>
      item[field].toLowerCase().includes(filter.toLowerCase()));

  const [Alertdismissing, setAlertdismissing] = useState(initialListdismissingdata);
  const [iconsdismissing, seticonsdismissing] = useState(initialListiconsdata);
  let handleRemove = (id) => {
    const newList = alertData.filter((list) => list.id !== id);
    setalertData(newList);
  }
  let handleRemoveoutline = (id) => {
    const newList = outline.filter((list) => list.id !== id);
    setoutline(newList);
  }
  let handleRemovesolid = (id) => {
    const newList = solid.filter((list) => list.id !== id);
    setsolid(newList);
  }
  let handleRemovedismissing = (id) => {
    const newList = Alertdismissing.filter((list) => list.id !== id);
    setAlertdismissing(newList);
  }
  let handleRemoveicons = (id) => {
    const newList = iconsdismissing.filter((list) => list.id !== id);
    seticonsdismissing(newList);
  }

 

 

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShows(true);
  }

  return (

    <Fragment>

      <Pageheader title="Sales Reports" heading="Business Report" active="Sales Reports" />

      <Row className='faq'>
        <Col xl={12}>
          
        </Col>
      </Row>


                    {/* Back Button */}
      <div className="text-center mt-4 pb-3">
        <button className="btn btn-primary" onClick={handleBack}>
          Back
        </button>
      </div>
   

    </Fragment>

  );
}
Alerts.propTypes = {};

Alerts.defaultProps = {};

export default Alerts;
