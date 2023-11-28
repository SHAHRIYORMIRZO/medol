import React from "react";
import Card from "../Card/Card";

import classes from "./Products.module.css";

const Products = () => {
  return (
    <>
      <div className={classes.title}>Mahsulotlar</div>
      <Card />
    </>
  );
};

export default Products;
