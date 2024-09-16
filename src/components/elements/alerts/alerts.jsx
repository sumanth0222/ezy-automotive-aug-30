import React, { Fragment, useState } from 'react';
import { Card, Col, Row } from "react-bootstrap";
import { initialListdata, initialListdismissingdata, initialListiconsdata } from '../../../common/commondata';
import Pageheader from '../../../layout/layoutcomponent/pageheader';
import "react-datepicker/dist/react-datepicker.css";
import { Link as RouterLink } from 'react-router-dom';
import cars from '../../../assets/ezy-images/cars.jpg';


const Alerts = () => {
  const cardStyle = {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white', 
    minHeight: '200px', 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: '10px',
    padding: '20px'
  };

  const cardImages = {
    sales: `url(${cars})`,
    parts: `url(${cars})`,
    vendor: `url(${cars})`,
    workshop: `url(${cars})`,
    mechanic: `url(${cars})`,
    customer: `url(${cars})`,
    logo: `url(${cars})`,
    
  };

  

  return (
    <Fragment>
      <Pageheader title="Business Reports" heading="Elements" active="Business Reports" />

      <Row className="row-sm">
        <Col sm={12} md={12} lg={4} xl={4}>
          <Card style={{ ...cardStyle, backgroundImage: cardImages.sales }}>
            <Card.Body>
              <RouterLink to={`${import.meta.env.BASE_URL}elements/alerts/sales-report`} style={{ textAlign: "center" }}>
                Sales Report
              </RouterLink>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={12} lg={4} xl={4}>
          <Card style={{ ...cardStyle, backgroundImage: cardImages.parts }}>
            <Card.Body>
              <RouterLink to={`${import.meta.env.BASE_URL}elements/alerts/parts-report`}>
                Parts Reports
              </RouterLink>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={12} lg={4} xl={4}>
          <Card style={{ ...cardStyle, backgroundImage: cardImages.vendor }}>
            <Card.Body>
              <RouterLink to={`${import.meta.env.BASE_URL}elements/alerts/vendors-report`}>
                Vendor Reports
              </RouterLink>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={12} lg={4} xl={4}>
          <Card style={{ ...cardStyle, backgroundImage: cardImages.workshop }}>
            <Card.Body>
              <RouterLink to={`${import.meta.env.BASE_URL}elements/alerts/workshop-reports`}>
                Workshop Reports
              </RouterLink>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={12} lg={4} xl={4}>
          <Card style={{ ...cardStyle, backgroundImage: cardImages.mechanic }}>
            <Card.Body>
              <RouterLink to={`${import.meta.env.BASE_URL}elements/alerts/mechanic-report`}>
                Mechanics Report
              </RouterLink>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={12} lg={4} xl={4}>
          <Card style={{ ...cardStyle, backgroundImage: cardImages.customer }}>
            <Card.Body>
              <RouterLink to={`${import.meta.env.BASE_URL}elements/alerts/customer-report`}>
                Customer Report
              </RouterLink>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={12} lg={4} xl={4}>
          <Card style={{ ...cardStyle, backgroundImage: cardImages.logo }}>
            <Card.Body>
              <RouterLink to={`${import.meta.env.BASE_URL}elements/alerts/logo-reports`}>
                Log Reports
              </RouterLink>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
}

export default Alerts;
