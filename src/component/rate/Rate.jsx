import React from "react";
import { ImStarEmpty, ImStarHalf, ImStarFull } from "react-icons/im";
import "./rate.css";
const Rate = ({ rate }) => {
  return (
    <div className="rate text-center">
      {rate > 4.5 ? (
        <>
          <ImStarFull />
          <ImStarFull />
          <ImStarFull />
          <ImStarFull />
          <ImStarFull />
        </>
      ) : rate > 4 ? (
        <>
          <ImStarFull />
          <ImStarFull />
          <ImStarFull />
          <ImStarFull />
          <ImStarHalf />
        </>
      ) : rate > 3.5 ? (
        <>
          <ImStarFull />
          <ImStarFull />
          <ImStarFull />
          <ImStarFull />
          <ImStarEmpty />
        </>
      ) : rate > 3 ? (
        <>
          <ImStarFull />
          <ImStarFull />
          <ImStarFull />
          <ImStarHalf />
          <ImStarEmpty />
        </>
      ) : rate > 2.5 ? (
        <>
          <ImStarFull />
          <ImStarFull />
          <ImStarFull />
          <ImStarEmpty />
          <ImStarEmpty />
        </>
      ) : rate > 2 ? (
        <>
          <ImStarFull />
          <ImStarFull />
          <ImStarHalf />
          <ImStarEmpty />
          <ImStarEmpty />
        </>
      ) : rate > 1.5 ? (
        <>
          <ImStarFull />
          <ImStarFull />
          <ImStarEmpty />
          <ImStarEmpty />
          <ImStarEmpty />
        </>
      ) : rate > 1 ? (
        <>
          <ImStarFull />
          <ImStarHalf />
          <ImStarEmpty />
          <ImStarEmpty />
          <ImStarEmpty />
        </>
      ) : rate > 0.5 ? (
        <>
          <ImStarFull />
          <ImStarEmpty />
          <ImStarEmpty />
          <ImStarEmpty />
          <ImStarEmpty />
        </>
      ) : rate > 0 ? (
        <>
          <ImStarHalf />
          <ImStarEmpty />
          <ImStarEmpty />
          <ImStarEmpty />
          <ImStarEmpty />
        </>
      ) : (
        <>
          <ImStarEmpty />
          <ImStarEmpty />
          <ImStarEmpty />
          <ImStarEmpty />
          <ImStarEmpty />
        </>
      )}
    </div>
  );
};

export default Rate;
