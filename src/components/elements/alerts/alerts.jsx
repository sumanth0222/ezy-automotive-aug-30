import React, { Fragment, useState } from 'react';
import { Card, Col, Row} from "react-bootstrap";
import {  initialListdata, initialListdismissingdata, initialListiconsdata } from '../../../common/commondata';
import Pageheader from '../../../layout/layoutcomponent/pageheader';
import "react-datepicker/dist/react-datepicker.css";
import { Link as RouterLink } from 'react-router-dom';

const Alerts = () => {
 
  const [alertData, setalertData] = useState(initialListdata);
  
  const [outline, setoutline] = useState(initialListdata);

  const [solid, setsolid] = useState(initialListdata);
 
  const [filter, setFilter] = useState("");
 



  const [show, setShow] = useState(true);
  const [isFirstCollapsed, setIsFirstCollapsed] = useState(true);
  const [isFirstCollapseds, setIsFirstCollapseds] = useState(true);
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

  const first = () => {
    setIsFirstCollapsed(!isFirstCollapsed);
  };

  const firsts = () => {
    setIsFirstCollapseds(!isFirstCollapseds);
  };

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShows(true);
  }

  return (

    <Fragment>

      <Pageheader title="Business Reports" heading="Elements" active="Business Reports" />


      <Row className="row-sm">
        <Col className="mg-md-t-0 text-center" sm={12} md={12} lg={4} xl={4}>
          <Card>
            <Card.Body>
            <RouterLink to={`${import.meta.env.BASE_URL}elements/alerts/sales-report`} >Sales Report</RouterLink>
            </Card.Body>
            {/* <Card.Footer className="bd-t tx-center">
              
            </Card.Footer> */}
          </Card>
        </Col>
        <Col className="mg-md-t-0 text-center" sm={12} md={12} lg={4} xl={4}>
          <Card>
            <Card.Body>
            <RouterLink to={`${import.meta.env.BASE_URL}elements/alerts/parts-report`}>Parts Reports</RouterLink>
            </Card.Body>
            {/* <Card.Footer className="bd-t tx-center">
              
            </Card.Footer> */}
          </Card>
        </Col>
        <Col className="mg-md-t-0 text-center" sm={12} md={12} lg={4} xl={4}>
          <Card>
            <Card.Body>
            <RouterLink to={`${import.meta.env.BASE_URL}elements/alerts/vendors-report`}>Vendor Reports</RouterLink>
            </Card.Body>
            {/* <Card.Footer className="bd-t tx-center">
              
            </Card.Footer> */}
          </Card>
        </Col>
        <Col className="mg-md-t-0 text-center" sm={12} md={12} lg={4} xl={4}>
          <Card>
            <Card.Body>
            <RouterLink to={`${import.meta.env.BASE_URL}elements/alerts/workshop-reports`}>Workshop Reports</RouterLink>
            </Card.Body>
            {/* <Card.Footer className="bd-t tx-center">
              
            </Card.Footer> */}
          </Card>
        </Col>
        <Col className="mg-md-t-0 text-center" sm={12} md={12} lg={4} xl={4}>
          <Card>
            <Card.Body>
            <RouterLink to={`${import.meta.env.BASE_URL}elements/alerts/mechanic-report`}>Mechanics Report</RouterLink>
            </Card.Body>
            {/* <Card.Footer className="bd-t tx-center">
              
            </Card.Footer> */}
          </Card>
        </Col>
        <Col className="mg-md-t-0 text-center" sm={12} md={12} lg={4} xl={4}>
          <Card>
            <Card.Body>
            <RouterLink to={`${import.meta.env.BASE_URL}elements/alerts/customer-report`}>Customer Report</RouterLink>
            </Card.Body>
            {/* <Card.Footer className="bd-t tx-center">
              
            </Card.Footer> */}
          </Card>
        </Col>
        <Col className="mg-md-t-0 text-center" sm={12} md={12} lg={4} xl={4}>
          <Card>
            <Card.Body>
            <RouterLink to={`${import.meta.env.BASE_URL}elements/alerts/logo-reports`}>Logo Reports</RouterLink>
            </Card.Body>
            {/* <Card.Footer className="bd-t tx-center">
              
            </Card.Footer> */}
          </Card>
        </Col>
      </Row>

    </Fragment>

  );
}
Alerts.propTypes = {};

Alerts.defaultProps = {};

export default Alerts;
