import React, { useEffect, useMemo, useState } from "react";
import Instance from "../../instanceAxios/instance";
import "./subCategoryMenu.css";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
const SubCategoryMenu = ({ id }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    Instance.get(`/category/${id}/subcategories `)
      .then((data) => setProducts(data.data.data))
      .catch((err) => console.log(err));
  }, [id]);
  // console.log(products);
  return (
    <div className="subCategoryMenu">
      <ul className="global-list">
        {products.map((product) => (
          <li key={product.id}>
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

export default React.memo(SubCategoryMenu);
