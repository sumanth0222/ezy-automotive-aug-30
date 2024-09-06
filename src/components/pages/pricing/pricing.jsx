import React, { Fragment, useState } from 'react';
import { Row, Col, Card, Button, Form, Tabs, Tab } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { Wizard, WizardStep } from "react-wizard-primitive";
import Select from "react-select";
import Pageheader from '../../../layout/layoutcomponent/pageheader';

const option = [
  { value: 'USA', label: 'United States' },
  { value: 'CAN', label: 'Canada' },
];
const option1 = [
  { value: 'CA', label: 'California' },
  { value: 'TX', label: 'Texas' },
];

const Pricing = () => {
  const [activeTab, setActiveTab] = useState('CreditCard');

  function dec(el) {
    const unit = el.currentTarget.parentElement.querySelector("input").value;
    if (Number(unit) === 0) {
      return false;
    } else {
      el.currentTarget.parentElement.querySelector("input").value--;
    }
  }

  function inc(el) {
    el.currentTarget.parentElement.querySelector("input").value++;
  }

  const MyCustomWizard = (props) => {
    const stepCount = React.Children.count(props.children);
    return (
      <Wizard>
        {({ activeStepIndex, previousStep, nextStep }) => (
          <div className="wizard-wrapper">
            <div>{props.children}</div>
            <div className="checkout-btns">
              <button
                className="previous btn"
                disabled={activeStepIndex === 0}
                onClick={previousStep}
              >
                Previous
              </button>
              <button
                className="next btn btn-primary"
                disabled={activeStepIndex === stepCount - 1}
                onClick={nextStep}
              >
                Next
              </button>
            </div>
          </div>
        )}
      </Wizard>
    );
  };

  MyCustomWizard.Step = (props) => (
    <WizardStep>
      {({ isActive }) => isActive && <div className="step">{props.children}</div>}
    </WizardStep>
  );

  return (
    <Fragment>
      <Pageheader title="Payment Link" heading="Pages" active="Payment Link" />

      <MyCustomWizard>
        <MyCustomWizard.Step>
          <h4>Payments</h4>
          <section>
            <Tabs
              activeKey={activeTab}
              onSelect={(k) => setActiveTab(k)}
              className="tabs-menu"
            >
              <Tab
                eventKey="CreditCard"
                title="Credit Card"
                tabClassName={activeTab === 'CreditCard' ? 'bg-primary text-white' : ''}
              >
                {/* <Form.Group>
                  <Form.Label>CardHolder Name</Form.Label>
                  <Form.Control placeholder="First Name" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Card number</Form.Label>
                  <Form.Control placeholder="Enter card number" />
                </Form.Group> */}
                <Row>
                <Col sm={3}>
                <Form.Group>
                  <Form.Label>CardHolder Name</Form.Label>
                  <Form.Control placeholder="First Name" />
                </Form.Group>
                </Col>
                
                <Col sm={3}>
                <Form.Group>
                  <Form.Label>Card number</Form.Label>
                  <Form.Control placeholder="Enter card number" />
                </Form.Group>
                </Col>

                  <Col sm={3}>
                    <Form.Group>
                      <Form.Label>Expiration</Form.Label>
                      <Row>
                        <Col>
                          <Form.Control placeholder="MM" />
                        </Col>
                        <Col>
                          <Form.Control placeholder="YY" />
                        </Col>
                      </Row>
                    </Form.Group>
                  </Col>
                  <Col sm={3}>
                    <Form.Group>
                      <Form.Label>CVV</Form.Label>
                      <Form.Control type="number" placeholder="CVV" />
                    </Form.Group>
                  </Col>
                </Row>
              </Tab>

              <Tab
                eventKey="Paypal"
                title="Paypal"
                tabClassName={activeTab === 'Paypal' ? 'bg-primary text-white' : ''}
              >
                <p>Paypal is the easiest way to pay online</p>
                <Button variant="primary">
                  <i className="fab fa-paypal"></i> Log in to my Paypal
                </Button>
              </Tab>

              <Tab
                eventKey="BankTransfer"
                title="Bank Transfer"
                tabClassName={activeTab === 'BankTransfer' ? 'bg-primary text-white' : ''}
              >
                <p>Bank account details:</p>
                <dl className="card-text">
                  <dt>BANK:</dt>
                  <dd>THE UNION BANK 0456</dd>
                  <dt>Account number:</dt>
                  <dd>67542897653214</dd>
                  <dt>IBAN:</dt>
                  <dd>543218769</dd>
                </dl>
              </Tab>
            </Tabs>
          </section>
        </MyCustomWizard.Step>
      </MyCustomWizard>
    </Fragment>
  );
};

export default Pricing;
