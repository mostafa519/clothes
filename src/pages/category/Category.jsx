import React, { useEffect, useState } from "react";
import Instance from "../../instanceAxios/instance";
import { Button, Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "./category.css";
import shoes from "../../images/shoes.png";
import { Link } from "react-router-dom";
import { useCallback } from "react";
import SubCategory from "../../component/subCategory/subCategory";
const Category = () => {
  const [products, setProducts] = useState([]);
  const [pagination, setPagination] = useState(1);
  useEffect(() => {
    Instance.get(
      `/categories?latitude=37.4219983&longitude=-122.084&pagination=true&page=${pagination}`
    )
      .then((data) => setProducts(data.data.data.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <Container className="category">
      <div className="title">
        <h1>Category</h1>
      </div>
      <Row>
        {products.map((product) => (
          <Col className="col-12 col-lg-4 col-md-6 my-3" key={product.id}>
            <div className="category-style-2 h-100">
              <h6>{product.name}</h6>

              <div className="category-list d-flex justify-content-between">
                <SubCategory id={product.id} />
                <div className="category-thumb">
                  {product.media.length > 0 ? (
                    product.media.map((img) => (
                      <img
                        src={img.url}
                        key={img.id}
                        alt="not found"
                        className=" category-img"
                      />
                    ))
                  ) : (
                    <img src={""} alt="not found" className=" category-img" />
                  )}
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
      <div className="d-flex justify-content-center">
        <Button className="btn btn-denger">next</Button>
      </div>
    </Container>
  );
};

export default Category;
