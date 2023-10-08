import React from "react";
import "./filterByPrice.css";
const FilterByPrice = () =>
  // maxRange,
  // minRange,
  // maxPrice,
  // minPrice,
  // setMaxPrice,
  // setMinPrice
  {
    let handleChange = (event) => {
      // if (event.target.name === "min") {
      //   setMinPrice(event.target.value);
      // } else {
      //   setMaxPrice(event.target.value);
      // }
    };
    return (
      <div className="range mt-5">
        <p className="fw-bold">Price</p>

        <div className="range-slider">
          <span className="range-selected"></span>
        </div>
        <div className="range-input">
          <input
            type="range"
            className="min"
            min={10}
            max={200}
            value={200}
            step="1"
            name="max"
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <input
            type="range"
            className="max"
            min={10}
            max={200}
            value={200}
            step="1"
            name="min"
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="range-price d-flex  justify-content-between mt-3">
          <div className="wrapContent w-25">
            {" "}
            <p className="m-0">Min</p>
            <input
              className="w-100 text-center inputPrice"
              type="number"
              name="min"
              max={200}
              min={10}
              value={10}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="wrapContent w-25">
            <p className="m-0 ">Max</p>
            <input
              className="w-100 text-center inputPrice"
              type="number"
              max={200}
              min={10}
              name="max"
              value={200}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
        </div>
      </div>
    );
  };

export default FilterByPrice;
