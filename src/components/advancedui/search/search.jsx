import React, { Fragment } from 'react';
import {  Card, Col, Nav, Pagination, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { imagesData } from '../../../common/commonimages';
import Pageheader from '../../../layout/layoutcomponent/pageheader';



const Search = () =>{ 
  return(
  <Fragment>
   <Pageheader title="SEARCH"  heading="Advanced UI"   active="Search" />
    <Row>
      <Col sm={12} md={12}>
        <Card className="custom-card">
          <Card.Body className=" pb-0">
            <div className="input-group mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="Searching....."
              />
              <span className="input-group-append">
                <button className="btn ripple btn-primary" type="button">
                  Search
                </button>
              </span>
            </div>
          </Card.Body>
          <Card.Body className=" ps-0 pe-0 bd-t-0 pt-0">
            <div className="main-content-body-profile mb-3">
              <Nav className="nav main-nav-line" defaultActiveKey="#tab1">
                <Nav.Link
                  className="nav-link"
                  data-bs-toggle="tab"
                  href="#tab1"
                >
                  All
                </Nav.Link>
                <Nav.Link
                  className="nav-link"
                  data-bs-toggle="tab"
                  href="#tab2"
                >
                  Images
                </Nav.Link>
                <Nav.Link
                  className="nav-link"
                  data-bs-toggle="tab"
                  href="#tab3"
                >
                  Books
                </Nav.Link>
                <Nav.Link
                  className="nav-link"
                  data-bs-toggle="tab"
                  href="#tab4"
                >
                  News
                </Nav.Link>
                <Nav.Link
                  className="nav-link"
                  data-bs-toggle="tab"
                  href="#tab5"
                >
                  Videos
                </Nav.Link>
              </Nav>
            </div>
            <p className="text-muted mb-0 px-3">
              About 12,546,90000 results (0.56 Seconds)
            </p>
          </Card.Body>
        </Card>
        <Card className="custom-card">
          <Card.Header className=" border-bottom-0">
            <div>
              <h3 className="card-title mb-0 text-dark ">
                <Link to="#" className="text-dark">
                  Search the new animations
                </Link>
              </h3>
            </div>
          </Card.Header>
          <Card.Body className=" pt-0">
            <h6 className="tx-13">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur eu fugiat nulla pariatur
            </h6>
            <p className="mb-0 text-muted">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
              ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
              non numquam eius modi tempora incidunt ut labore et dolore magnam
              aliquam quaerat voluptatem.
            </p>
          </Card.Body>
        </Card>
        <Card className="custom-card">
          <Card.Header className=" border-bottom-0">
            <div>
              <h3 className="card-title mb-0 text-dark ">
                <Link to="#" className="text-dark">
                  Free Boostrap admin templates
                </Link>
              </h3>
            </div>
          </Card.Header>
          <Card.Body className=" pt-0">
            <div className="mb-2">
              <Link to="#" className="h5 text-dark">
                Templist – HTML5 Digital Marketplace Template by ...
              </Link>
            </div>
            <Link to="#" className="text-primary">
              https://react.spruko.com/nowa/preview
            </Link>
            <p className="text-muted mt-2 mb-2">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
              ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
              non numquam eius modi tempora incidunt ut labore et dolore magnam
              aliquam quaerat voluptatem.
            </p>
            <div>
              <Link to="#">
                <i className="fa fa-star text-warning fs-16"></i>
              </Link>
              <Link to="#">
                <i className="fa fa-star text-warning fs-16"></i>
              </Link>
              <Link to="#">
                <i className="fa fa-star text-warning fs-16"></i>
              </Link>
              <Link to="#">
                <i className="fa fa-star text-warning fs-16"></i>
              </Link>
              <Link to="#">
                <i className="fa fa-star-o text-warning fs-16"></i>
              </Link>
              <Link to="#" className="me-4 d-inline-block">
                {" "}
                (48) Reviews
              </Link>
              <Link to="#" className="font-weight-bold">
                USD-$24
              </Link>
            </div>
          </Card.Body>
        </Card>
        <Card className="custom-card">
          <Card.Header className=" border-bottom-0">
            <div>
              <h3 className="card-title mb-0 text-dark ">
                <Link to="#" className="text-dark">
                  20+ download the free templates
                </Link>
              </h3>
            </div>
          </Card.Header>
          <Card.Body className=" pt-0">
            <h6 className="tx-13">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur eu fugiat nulla pariatur
            </h6>
            <p className="mb-0 text-muted">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
              ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
              non numquam eius modi tempora incidunt ut labore et dolore magnam
              aliquam quaerat voluptatem.
            </p>
          </Card.Body>
        </Card>
        <Card className="custom-card">
          <Card.Header className=" border-bottom-0">
            <div>
              <h3 className="card-title mb-0 text-dark ">
                <Link to="#" className="text-dark">
                  Customizable admin templates
                </Link>
              </h3>
            </div>
          </Card.Header>
          <Card.Body className=" pt-0">
            <div className="mb-2">
              <Link to="#" className="h4 text-dark">
                User related Images
              </Link>
            </div>
            <Row className="mb-2">
              <Col lg={3} sm={6}>
                <div className="">
                  <div className="border  br-5 p-0 text-center m-1">
                    <Link to={`${import.meta.env.BASE_URL}pages/gallery/`}>
                      <img
                        src={imagesData('photo1')}
                        alt="img"
                        className="mx-auto br-5"
                      />
                    </Link>
                  </div>
                </div>
              </Col>
              <Col lg={3} sm={6}>
                <div className="">
                  <div className="border   br-5 p-0 text-center m-1">
                    <Link to={`${import.meta.env.BASE_URL}pages/gallery/`}>
                      <img
                        src={imagesData('photo3')}
                        alt="img"
                        className="mx-auto  br-5"
                      />
                    </Link>
                  </div>
                </div>
              </Col>
              <Col lg={3} sm={6}>
                <div className="">
                  <div className="border br-5 p-0 text-center m-1">
                    <Link to={`${import.meta.env.BASE_URL}pages/gallery/`}>
                      <img
                        src={imagesData('photo5')}
                        alt="img"
                        className="mx-auto  br-5"
                      />
                    </Link>
                  </div>
                </div>
              </Col>
              <Col lg={3} sm={6}>
                <div className="">
                  <div className="border br-5 p-0 text-center m-1">
                    <Link to={`${import.meta.env.BASE_URL}pages/gallery/`}>
                      <img
                        src={imagesData('photo6')}
                        alt="img"
                        className="mx-auto  br-5"
                      />
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
            <Link to="#" className="text-primary h6 mb-0">
              more images for treal template
              <span className="ms-1">
                <i className="fa fa-arrow-right"></i>
              </span>
            </Link>
          </Card.Body>
        </Card>
        <Card className="custom-card">
          <Card.Header className=" border-bottom-0">
            <div>
              <h3 className="card-title mb-0 text-dark ">
                <Link to="#" className="text-dark">
                  HTML Admin templates
                </Link>
              </h3>
            </div>
          </Card.Header>
          <Card.Body className="  pt-0">
            <h6 className="tx-13">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur eu fugiat nulla pariatur
            </h6>
            <p className="mb-0 text-muted">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
              ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
              non numquam eius modi tempora incidunt ut labore et dolore magnam
              aliquam quaerat voluptatem.
            </p>
          </Card.Body>
        </Card>
        <Card className="custom-card">
          <Card.Header className=" border-bottom-0">
            <div>
              <h3 className="card-title mb-0 text-dark ">
                <Link to="#" className="text-dark">
                  Best free admin templates
                </Link>
              </h3>
            </div>
          </Card.Header>
          <Card.Body className="  pt-0">
            <h6 className="tx-13">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur eu fugiat nulla pariatur
            </h6>
            <p className="mb-0 text-muted">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
              ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
              non numquam eius modi tempora incidunt ut labore et dolore magnam
              aliquam quaerat voluptatem.
            </p>
          </Card.Body>
        </Card>
        <div className="text-center search">
          <Pagination className="pagination">
            <Pagination.Item className="page-item">
                <i className="icon ion-ios-arrow-back"></i>
            </Pagination.Item>
            <Pagination.Item className="page-item active">
                1
            </Pagination.Item>
            <Pagination.Item className="page-item">
                2
            </Pagination.Item>
            <Pagination.Item className="page-item">
                3
            </Pagination.Item>
            <Pagination.Item className="page-item">
                <i className="icon ion-ios-arrow-forward"></i>
            </Pagination.Item>
          </Pagination>
        </div>
      </Col>
    </Row>
   
  </Fragment>
);}

Search.propTypes = {};

Search.defaultProps = {};

export default Search;
