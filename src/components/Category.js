import React, { useState, useEffect } from "react";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { Link } from "react-router-dom";

export default function Category({ changeCategory }) {
  const categories = ["coffee", "espresso", "non-coffee", "food"];

  const cld = new Cloudinary({
    cloud: {
      cloudName: "dj0py7n1d",
    },
  });

  return (
    <div className="categories">
      <h1>Shop by Category</h1>
      {categories.map((category) => {
        const myImage = cld.image(`categories/${ category }`);

        return (
          <div className="category">
            <Link
              to="/products"
              onClick={() => changeCategory(category)}
              className="category-link"
            >
              <p>{category}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
