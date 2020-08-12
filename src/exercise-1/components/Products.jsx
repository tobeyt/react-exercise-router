import React, { useState } from "react";
import { Link } from "react-router-dom";

const Products = (props) => {
  const {
    match: { params, url },
  } = props;
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Bicycle",
      price: 30,
      quantity: 15,
      desc: "Bicycle is Good",
    },
    {
      id: 2,
      name: "TV",
      price: 40,
      quantity: 16,
      desc: "TV is good",
    },
    {
      id: 3,
      name: "Pencil",
      price: 50,
      quantity: 17,
      desc: "Pencil is good",
    },
  ]);
  if (!params.id) {
    return (
      <div>
        {products.map((cur) => (
          <div key={cur.id}>
            <Link to={`/products/${cur.id} key={cur.name}`}>{cur.name}</Link>
            <br />
          </div>
        ))}
      </div>
    );
  } else {
    const result = products.filter((cur) => String(cur.id) === params.id).pop();
    return (
      <div>
        <p>Product Details: </p>
        <p>Name: {result.name}</p>
        <p>ID: {result.id}</p>
        <p>Price: {result.price}</p>
        <p>Quantity: {result.quantity}</p>
        <p>Desc: {result.desc}</p>
        <p>URL: {url}</p>
      </div>
    );
  }
};

export default Products;
