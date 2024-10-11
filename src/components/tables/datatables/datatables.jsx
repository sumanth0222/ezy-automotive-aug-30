import React, { Fragment, useState } from 'react';
import { Card, Col, Row, Form } from 'react-bootstrap'; // Added Form import
import { BasicTable, Datatable, Savetable } from '../../../common/tablesfunctionaldata';
import Pageheader from '../../../layout/layoutcomponent/pageheader';

const DataTables = () => {

  const [showPaidTransactions, setShowPaidTransactions] = useState(true);
  const [isStatementOn, setIsStatementOn] = useState(false);
  const [beginDate, setBeginDate] = useState("2024-08-29"); // Date format corrected
  const [endDate, setEndDate] = useState("2024-09-01");

  return (
    <Fragment>
      <div className="main-container container-fluid">

        <Pageheader title="Statement" heading="Tables" active="Statement" />

        <Row className="row-sm">
          <Col lg={12}>
            <Card className="custom-card overflow-hidden">
              <Card.Body>
                <div>
                  
                  <p className="text-muted card-sub-title">
                    Searching, ordering and paging goodness will be immediately
                    added to the table, as shown in this example.
                  </p>
                </div>

                {/* New Form Fields */}
                <Form className="d-flex justify-content-between align-items-center mb-4">
                  <Form.Group as={Row} className="mb-3">
                    
                    <Col>
                    <Form.Label column>Customer</Form.Label>
                      <Form.Control as="select">
                        <option>PRINT ALL</option>
                        <option>EMAIL</option>
                        <option>DOWNLOAD PDF</option>
                      </Form.Control>
                    </Col>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Begin Date</Form.Label>
                    <Form.Control
                      type="date"
                      value={beginDate}
                      onChange={(e) => setBeginDate(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>End Date</Form.Label>
                    <Form.Control
                      type="date"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3 align-items-center">
                    
                    <Form.Label className="me-2">Paid Transactions</Form.Label>
                    
                    <Form.Check
                      type="switch"
                      id="custom-switch"
                      label={showPaidTransactions ? "YES" : "NO"}
                      checked={showPaidTransactions}
                      onChange={() => setShowPaidTransactions(!showPaidTransactions)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3  align-items-center">
                  <Form.Label className="">Statement</Form.Label>
                    <Form.Check className='ml-3'
                      type="switch"
                      id="statement-switch"
                      label={isStatementOn ? "YES" : "NO"}
                      checked={isStatementOn}
                      onChange={() => setIsStatementOn(!isStatementOn)}
                    />
                  </Form.Group>
                </Form>

                {/* Table */}
                <div className="table-responsive">
                  <BasicTable />
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        
        {/* Uncomment this section if you want to display additional tables */}
        {/* <Row className=" row-sm">
          <Col lg={12}>
            <Card className="custom-card overflow-hidden">
              <Card.Body>
                <div>
                  <h6 className="main-content-label mb-1">Deleted Row DataTable</h6>
                  <p className="text-muted card-sub-title">
                    Responsive is an extension for DataTables that resolves that
                    problem by optimising the table's layout for different screen
                    sizes through the dynamic insertion and removal of columns
                    from the table.
                  </p>
                </div>
                <div className="table-responsive pos-relative">
                  <Datatable />
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className=" row-sm">
          <Col lg={12}>
            <Card className="custom-card">
              <Card.Body>
                <div>
                  <h6 className="main-content-label mb-1">Deleted Row DataTable</h6>
                  <p className="text-muted card-sub-title">
                    Responsive is an extension for DataTables that resolves that
                    problem by optimising the table's layout for different screen
                    sizes through the dynamic insertion and removal of columns
                    from the table.
                  </p>
                </div>
                <div className="table-responsive deleted-table">
                  <Savetable />
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row> */}

      </div>
    </Fragment>
  );
}

export default DataTables;
