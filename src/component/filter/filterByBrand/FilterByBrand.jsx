import React from "react";
import "./filterByBrand.css";
import Form from "react-bootstrap/Form";
const FilterByBrand = () => {
  return (
    <div className="filter_By_Brand">
      <Form>
        <Form.Check label={`Brand `} />
        <Form.Check // prettier-ignore
          label={`Brand `}
        />
        <Form.Check // prettier-ignore
          label={`Brand `}
        />
        <Form.Check // prettier-ignore
          label={`Brand `}
        />
        <Form.Check // prettier-ignore
          // type={type}
          id={`Brand`}
          label={`Brand `}
        />
      </Form>
    </div>
  );
};

export default FilterByBrand;
