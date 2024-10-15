import React, { useState, useEffect, Fragment } from "react";
import { ProgressBar, Row, Col, Tab, Card, Tabs, Table, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { MultiSelect } from "react-multi-select-component";
import { useSelector } from 'react-redux'
import Select from 'react-select';
import ProductService from '../../../../common/ProductService';
import { imagesData } from "../../../../common/commonimages";
import Pageheader from "../../../../layout/layoutcomponent/pageheader";

const ProductDetails = () => {

  const getdata = useSelector((state) => state.cartreducer.carts);
  const [value, setvalue] = React.useState("");

  const handleOnchange = () => {
    setvalue(value);
  };
  const [thumbsSwiper, setThumbsSwiper] = React.useState(null);
  const [Data, setData] = useState([]);

  // const { id } = useParams();
  const id = ProductService.returnId()

  const compare = () => {
    let comparedata = getdata.filter((e) => {
      console.log(e, id)
      return e.id === id
    });
    setData(comparedata);
    // console.log(comparedata, Data);

  }

  useEffect(() => {
    compare();
  }, [id])
  const Optioncategory1 = [
    {
      value: "category-2",
      label: "1",
    },
    {
      value: "category-3",
      label: "2",
    },
    {
      value: "category-4",
      label: "3",
    },
    {
      value: "category-5",
      label: "4",
    },
  ];
  return (
    <Fragment>
      <Pageheader title="PRODUCT DETAILS" heading="Ecommerce" active="Product details" />

      <Row className=" row-sm">
        <Col sm={12} md={12} xl={6} lg={6} xxl={6}>
          <Card>
            <Card.Body>
              <Row className=" row-sm ">
                <Col xxl={6} lg={12} md={12} className="details mt-4 mt-xxl-0 mt-2">
                  <h4 className="product-title mb-1">
                    Jyothi Fashion Women's Fit & Flare Knee Length Western Frock
                  </h4>
                  <p className="text-muted tx-13 mb-1">
                    women red & Grey Checked Casual frock
                  </p>
                  <div className="rating mb-1">
                    <div className="stars">
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star text-muted"></span>
                      <span className="fa fa-star text-muted"></span>
                    </div>
                    <span className="review-no">41 reviews</span>
                  </div>
                  <h6 className="price">
                    current price: <span className="h3 ms-2">$253</span>
                  </h6>
                  <p className="vote">
                    <strong>91%</strong> of buyers enjoyed this product!{" "}
                    <strong>(87 votes)</strong>
                  </p>
                  <div className="mb-3">
                    <div className="">
                      <p className="font-weight-normal">
                        <span className="h4">Hurry Up!</span> Sold:{' '}
                        <span className="text-primary h5 ">110/150</span> products
                        in stock.
                      </p>
                    </div>
                    <div className="progress ht-10  mt-0">
                      <ProgressBar now={60} animated variant="primary" />
                    </div>
                  </div>

                  <div className="sizes d-flex">
                    sizes:
                    <span className="size d-flex">
                      <Form.Label className="rdiobox mb-0">
                        <input defaultChecked name="rdio" type="radio" />{" "}
                        <span>s</span>
                      </Form.Label>
                    </span>
                    <span className="size d-flex">
                      <Form.Label className="rdiobox mb-0">
                        <input name="rdio" type="radio" /> <span>m</span>
                      </Form.Label>
                    </span>
                    <span className="size d-flex">
                      <Form.Label className="rdiobox mb-0">
                        <input name="rdio" type="radio" /> <span>l</span>
                      </Form.Label>
                    </span>
                    <span className="size d-flex">
                      <Form.Label className="rdiobox mb-0">
                        <input name="rdio" type="radio" /> <span>xl</span>
                      </Form.Label>
                    </span>
                  </div>
                  <div className="d-flex  mt-2">
                    <div className="mt-2 product-title">Quantity:</div>
                    <div className="d-flex ms-2">
                      <ul className=" mb-0 qunatity-list">
                        <li>
                          <div className="form-group">
                            <Select
                              defaultValue={value}
                              onChange={setvalue}
                              options={Optioncategory1}
                              placeholder="select"
                              // classNamePrefix="selectproduct"
                              classNamePrefix="Select2"
                              isSearchable
                            />
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="colors d-flex me-3 mt-2">
                    <span className="mt-2">colors:</span>
                    <div className="d-sm-flex d-flex ms-4">
                      <div className="me-2">
                        <Form.Label className="colorinput">
                          <input
                            name="color"
                            type="radio"
                            defaultValue="azure"
                            className="colorinput-input"
                            defaultChecked
                          />
                          <span className="colorinput-color bg-primary"></span>
                        </Form.Label>
                      </div>
                      <div className="me-2">
                        <Form.Label className="colorinput">
                          <input
                            name="color"
                            type="radio"
                            defaultValue="indigo"
                            className="colorinput-input"
                          />
                          <span className="colorinput-color bg-secondary"></span>
                        </Form.Label>
                      </div>
                      <div className="me-2">
                        <Form.Label className="colorinput">
                          <input
                            name="color"
                            type="radio"
                            defaultValue="purple"
                            className="colorinput-input"
                          />
                          <span className="colorinput-color bg-danger"></span>
                        </Form.Label>
                      </div>
                      <div className="me-2">
                        <Form.Label className="colorinput">
                          <input
                            name="color"
                            type="radio"
                            defaultValue="pink"
                            className="colorinput-input"
                          />
                          <span className="colorinput-color bg-pink"></span>
                        </Form.Label>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

    </Fragment>
  );
}
ProductDetails.propTypes = {};

ProductDetails.defaultProps = {};

export default ProductDetails;

