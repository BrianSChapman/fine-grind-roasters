import React from "react";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";

export default function Cart({ cartItems, removeItem }) {
  const cld = new Cloudinary({
    cloud: {
      cloudname: "dj0py7n1d",
    },
  });
  return (
    <div>
      {cartItems.map((item) => {
        const myImage = cld.image(`products/${item.title}`);
        return (
          <div className="cart">
            <AdvancedImage cldImg={myImage} className="cart-image" />
            <div>
              <h6>{item.title}</h6>
              <p>${item.price}</p>
              <button
                type="submit"
                onClick={() => {
                  removeItem(item.id);
                }}
              >
                REMOVE
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
