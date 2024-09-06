import React, { Fragment } from 'react';
import { Button, Card, Col, Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { imagesData } from '../../../common/commonimages';
import Pageheader from '../../../layout/layoutcomponent/pageheader';

const print = () => {
  window.print();
};

const Invoice = () => {
  return (
    <Fragment>
      <Pageheader title="INVOICE" heading="Pages" active="Invoice" />

      <Row className="row-sm">
        <Col md={12} lg={12}>
          <Card className=" custom-card">
            <Card.Body>
              <div className="d-lg-flex">
                <h6 className="main-content-label mb-1">
                  <span className="d-flex mb-4">
                    <Link to={`${import.meta.env.BASE_URL}dashboard/dashboard1/`}>
                      <img
                        src={imagesData('female2')}
                        className="sign-favicon ht-40"
                        alt="logo"
                      />
                    </Link>
                  </span>
                </h6>
                <div className="ms-auto">
                  <p className="mb-1">
                    <span className="font-weight-bold">Invoice No : #000321</span>
                  </p>
                </div>
              </div>
              <Row className="row-sm">
                <Col lg={6}>
                  <p className="h3">Invoice From:</p>
                  <address>
                    EZY Motors
                    <br />
                    1234 Service Lane
                    <br />
                    State, City
                    <br />
                    support@ezymotors.com
                  </address>
                </Col>
                <Col lg={6} className=" text-end">
                  <p className="h3">Invoice To:</p>
                  <address>
                    Customer Name
                    <br />
                    Customer Address
                    <br />
                    Customer Email
                    <br />
                    contact@customeremail.com
                  </address>
                  <div className="">
                    <p className="mb-1">
                      <span className="font-weight-bold">Invoice Date :</span>
                    </p>
                    <address>01st November 2023</address>
                  </div>
                </Col>
              </Row>
              <div className="table-responsive mg-t-40">
                <Table className="table table-invoice table-bordered">
                  <thead>
                    <tr>
                      <th>Service</th>
                      <th>Description</th>
                      <th className="tx-center">Quantity</th>
                      <th className="tx-right">Unit Price</th>
                      <th className="tx-right">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Oil Change</td>
                      <td>Full synthetic oil change</td>
                      <td className="tx-center">1</td>
                      <td className="tx-right">$50.00</td>
                      <td className="tx-right">$50.00</td>
                    </tr>
                    <tr>
                      <td>Brake Pad Replacement</td>
                      <td>Front brake pad replacement</td>
                      <td className="tx-center">1</td>
                      <td className="tx-right">$150.00</td>
                      <td className="tx-right">$150.00</td>
                    </tr>
                    <tr>
                      <td>Tire Rotation</td>
                      <td>Rotation of all four tires</td>
                      <td className="tx-center">1</td>
                      <td className="tx-right">$30.00</td>
                      <td className="tx-right">$30.00</td>
                    </tr>
                    <tr>
                      <td className="valign-middle" colSpan="2" rowSpan="4">
                        <div className="invoice-notes">
                          <label className="main-content-label tx-13">Notes</label>
                          <p className="text-dark">
                            Thank you for choosing EZY Motors for your service needs. Please contact us if you have any questions regarding this invoice.
                          </p>
                        </div>
                      </td>
                      <td className="tx-right">Sub-Total</td>
                      <td className="tx-right" colSpan="2">
                        $230.00
                      </td>
                    </tr>
                    <tr>
                      <td className="tx-right">Tax</td>
                      <td className="tx-right" colSpan="2">
                        8%
                      </td>
                    </tr>
                    <tr>
                      <td className="tx-right">Discount</td>
                      <td className="tx-right" colSpan="2">
                        5%
                      </td>
                    </tr>
                    <tr>
                      <td className="tx-right tx-uppercase tx-bold tx-inverse">
                        Total Due
                      </td>
                      <td className="tx-right" colSpan="2">
                        <h4 className="tx-bold">$238.00</h4>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Card.Body>
            <Card.Footer className=" text-end">
              <Button variant='' type="button" className="btn ripple btn-primary mb-1 me-2">
                <i className="fe fe-credit-card me-1"></i> Pay Invoice
              </Button>
              <Button
                variant=''
                type="button"
                className="btn ripple btn-secondary mb-1 me-2"
              >
                <i className="fe fe-send me-1"></i> Send Invoice
              </Button>
              <Button
                variant=''
                type="button"
                className="btn ripple btn-info mb-1 me-2"
                onClick={print}
              >
                <i className="fe fe-printer me-1"></i> Print Invoice
              </Button>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

Invoice.propTypes = {};

Invoice.defaultProps = {};

export default Invoice;
