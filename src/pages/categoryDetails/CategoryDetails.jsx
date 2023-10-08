import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import "./categoryDetails.css";
import FilterByBrand from "../../component/filter/filterByBrand/FilterByBrand";
import FilterByCategory from "../../component/filter/filterByCategory/FilterByCategory";
import FilterByShop from "../../component/filter/filterByShop/FilterByShop";
import FilterByPrice from "../../component/filter/filterByPrice/FilterByPrice";
import Instance from "../../instanceAxios/instance";
import Card from "react-bootstrap/Card";
import { Link, useLocation } from "react-router-dom";
import { IoMdStar } from "react-icons/io";
const CategoryDetails = () => {
  const [products, setProducts] = useState([]);
  let { state } = useLocation();
  // console.log(state.categoryID);
  // console.log(state.subCategoryID);
  console.log(products);

  useEffect(() => {
    Instance.get(
      `/category/${state.categoryID}/subcategories/${state.subCategoryID}/clothes?pagination=true&page=$page&count_per_page=1`
    )
      .then((data) => setProducts(data.data.data.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <Container className="category-view">
      <Row>
        {/* <Col className="col-12 col-md-4 col-lg-3">
          <Accordion defaultActiveKey={["0", "1"]} alwaysOpen>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Child Categories</Accordion.Header>
              <Accordion.Body>
                <FilterByCategory />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Brand</Accordion.Header>
              <Accordion.Body>
                <FilterByBrand />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Price</Accordion.Header>
              <Accordion.Body>
                <FilterByPrice />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>shop</Accordion.Header>
              <Accordion.Body>
                <FilterByShop />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col> */}
        <Col className="col-12 col-md-8 col-lg-9 mt-5 ">
          <Row>
            {products.length >= 1 &&
              products.map((product) => (
                <Col className="col-12 col-sm-6 col-lg-4 mb-3" key={product.id}>
                  <Card style={{ width: "100%" }}>
                    <Link to={`/details/${product.id}`}>
                      {product.media.length >= 1 && (
                        <div className="img-card">
                          <Card.Img variant="top" src={product.media[0].url} />
                        </div>
                      )}

                      <Card.Body className="text-center">
                        <Card.Text className="mb-1">
                          {product.price} EGP
                        </Card.Text>

                        <h6 className="product-name fw-500 mb-1">
                          {product.name}
                        </h6>

                        <Card.Text className="sg-rating mb-1">
                          <IoMdStar />
                          <IoMdStar />
                          <IoMdStar />
                          <IoMdStar />
                          <IoMdStar />
                        </Card.Text>
                        <h6 className="mt-0 fw-500">{product.shop.name}</h6>
                      </Card.Body>
                    </Link>
                  </Card>
                </Col>
              ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default CategoryDetails;
