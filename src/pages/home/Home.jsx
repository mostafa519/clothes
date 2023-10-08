import React, { useCallback, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import ListGroup from "react-bootstrap/ListGroup";
import "./home.css";
// import { RiArrowDropRightLine } from "react-icons/rx";
import { RiArrowDropRightLine } from "react-icons/ri";
import BrandInHome from "../../component/home/brandInHome/BrandInHome";
import CategoryInHome from "../../component/home/categoryInHome/CategoryInHome";
import Instance from "../../instanceAxios/instance";
import SubCategory from "../../component/subCategory/subCategory";
import SubCategoryMenu from "../../component/subCategoryMenu/SubCategoryMenu";
import ShopInHome from "../../component/home/shopInHome/ShopInHome";
const Home = () => {
  const [index, setIndex] = useState(0);
  const [slider, setSlider] = useState([]);
  const [category, setcategory] = useState([]);
  const [offers, setOffers] = useState([]);
  const [dropdown, setDropdown] = useState(14);
  const [showMenu, setShowMenu] = useState(false);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  console.log(dropdown);
  useEffect(() => {
    Instance("slides")
      .then((data) => setSlider(data.data.data))
      .catch((err) => console.log(err));
    Instance(
      "/categories?latitude=37.4219983&longitude=-122.084&pagination=true&page=1"
    )
      .then((data) => setcategory(data.data.data.data))
      .catch((err) => console.log(err));
    Instance("/offers")
      .then((data) => setOffers(data.data.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(offers);
  // setShowMenu(false);
  const handleDropdown = useCallback((id) => {
    if (id !== dropdown) {
      setDropdown(id);
    }
  }, []);
  return (
    <Container className="home my-2">
      <Row>
        <Col className="d-none d-lg-block col-3 categorie-menu">
          <ListGroup
          // onMouseOut={() => handlehide()}
          >
            {category.map((cat) => (
              <ListGroup.Item
                className="position-relative"
                key={cat.id}
                onMouseOver={() => handleDropdown(cat.id)}
                onMouseEnter={() => {
                  setShowMenu(true);
                }}
                onMouseLeave={() => {
                  setShowMenu(!showMenu);
                }}
              >
                <p className="mb-0 text-capitalize">{cat.name}</p>
                <RiArrowDropRightLine className="menu-icon" />
                {dropdown === cat.id && showMenu === true && (
                  <div
                    className="sg-dropdown-menu "
                    // onMouseEnter={() => console.log("dd")}
                  >
                    <SubCategoryMenu id={cat.id} />
                  </div>
                )}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col className="col-12 col-lg-9 ">
          <Carousel activeIndex={index} onSelect={handleSelect}>
            {slider.map((slid) =>
              slid.media.map((img) => (
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    style={{ height: "400px" }}
                    src={img.url}
                    alt="First slide"
                  />
                </Carousel.Item>
              ))
            )}
          </Carousel>
          <Row className="mt-2">
            {/* {offers.map((offer) => (

              <Col
                className="col-6 col-md-4 col-xl-3 banner-item"
                key={offer.id}
              >
                <div className="banner-img">
                  <img src={offer.url} alt="not found" />
                </div>
              </Col>
            ))} */}
            {offers.map((offer) =>
              offer.media.map((img) => (
                <Col
                  className="col-6 col-md-4 col-xl-3 banner-item"
                  key={img.id}
                >
                  <div className="banner-img">
                    <img src={img.url} />
                  </div>
                </Col>
              ))
            )}
          </Row>
        </Col>
      </Row>
      <CategoryInHome />
      <ShopInHome />
      <BrandInHome />
    </Container>
  );
};

export default Home;
