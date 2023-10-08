import React from "react";
import Form from "react-bootstrap/Form";
import "./filterByShop.css";
const FilterByShop = () => {
  return (
    <div className="filter_By_Shop">
      <Form>
        <Form.Check label={`shop `} />
        <Form.Check label={`shop `} />
        <Form.Check label={`shop `} />
        <Form.Check label={`shop `} />
        <Form.Check id={`shop`} label={`shop `} />
      </Form>
    </div>
  );
};

export default FilterByShop;
