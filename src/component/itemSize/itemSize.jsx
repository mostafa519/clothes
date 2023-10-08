import React, { useEffect, useState } from "react";
import Instance from "../../instanceAxios/instance";
import Form from "react-bootstrap/Form";
import "./itemSize.css";
const ItemSize = ({ clotheID, colorID }) => {
  const [size, setSize] = useState([]);
  const [color, setColor] = useState(colorID);
  const [clothe, setClothe] = useState(clotheID);
  const [checkSize, setCheckSize] = useState(0);
  // console.log(colorID);
  // console.log(clotheID);
  useEffect(() => {
    Instance.get(`/colours/${colorID}/clothes/${clotheID} `)
      .then((data) => setSize(data.data.data.data))

      .catch((err) => console.log(err));
    if (size.length >= 1) {
      setCheckSize(size[0].id);
    }
  }, [clotheID, colorID]);
  console.log(size);
  // if (size.length >= 1) {
  //   setCheckSize(size[0].id);
  // }
  return (
    <Form.Select
      aria-label="Default select example"
      onChange={(e) => console.log(e.target.value)}
    >
      {size.length >= 1 &&
        size.map((size) => (
          // <p className="mb-0 p-3 postion-relative" key={size.id}>
          //   {size.size.name}
          // </p>
          <option value={size.size.name} key={size.id}>
            {size.size.name}
          </option>
        ))}
    </Form.Select>
  );
};

export default ItemSize;
