import React, { useEffect, useState } from "react";
import Instance from "../../instanceAxios/instance";
import "./subCategory.css";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
const SubCategory = ({ id }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    Instance.get(`/category/${id}/subcategories `)
      .then((data) => setProducts(data.data.data))
      .catch((err) => console.log(err));
  }, []);
  // console.log(products);
  return (
    <div className="subCategory">
      <ul className="global-list">
        {products.map((product) => (
          <li key={product.id}>
            <FaAngleRight />{" "}
            <Link
              to={"/category/categoryView"}
              state={{
                categoryID: product.category_id,
                subCategoryID: product.sub_categories_id,
              }}
            >
              {product.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(SubCategory);
