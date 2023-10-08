import React from "react";
import Form from "react-bootstrap/Form";
import "./filterByCategory.css";
const FilterByCategory = ({ products }) => {
  let prdName = products.filter(
    (value, index, self) =>
      self.findIndex((item) => item.name === value.name) === index
  );
  // console.log(prdName);

  return (
    <div className="filter_By_Category">
      <Form>
        {prdName.map((prd) => (
          <Form.Check key={prd.id} label={prd.name} />
        ))}
        {/* <Form.Check // prettier-ignore
          label={`category `}
        />
        <Form.Check // prettier-ignore
          label={`category `}
        />
        <Form.Check // prettier-ignore
          label={`category `}
        />
        <Form.Check // prettier-ignore
          // type={type}
          id={`category`}
          label={`category `}
        /> */}
      </Form>
    </div>
  );
};

export default FilterByCategory;
