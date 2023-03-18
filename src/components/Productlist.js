import React from "react";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { Link } from "react-router-dom";

export default function ProductList({ list, category }) {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "dj0py7n1d",
    },
  });

  const filteredProducts = list.filter(
    (product) => product.category == category);
  return (
    <div>
      { filteredProducts.map((item) => {
        const myImage = cld.image(`products/${item.title}`);
        return (
          <div className="product">
            <Link to={`/products/${ item.title }`} className="product-link">
              <AdvancedImage cldImg={ myImage } className="image" />
              <p> { item.title } </p>
              <span>${ item.price } </span>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
