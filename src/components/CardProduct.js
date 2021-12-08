import * as React from "react";
import { useState, useEffect } from "react";
import ButtonProduct from "./ButtonProduct";
import { db } from "../aplication/firebase";
import styled from "styled-components";

const ContainerForm = styled.div`
  input {
    border: none;
    width: 80%;
    padding: 9px;
    border-radius: 5px;
    margin-top: 10px;
    margin-bottom: 20px;
    border: 1px solid #e8c4d8;
    color: #e8c4d8;
  }
`;

const CardProduct = ({ addOrEdit, currentId }) => {
  const [formProduct, setFormProduct] = useState({
    name: "",
    description: "",
    price: 0,
    image: "",
  });

  const handleChange = (ev) => {
    setFormProduct({
      ...formProduct,
      [ev.target.name]: ev.target.value,
    });
  };

  const addOrEditProduct = (event) => {
    event.preventDefault();
    addOrEdit(formProduct);
    setFormProduct("");
  };

  const getProductById = async (id) => {
    const doc = await db.collection("products").doc(id).get();
    setFormProduct({ ...doc.data() });
  };

  useEffect(() => {
    if (currentId === "") {
      setFormProduct({ ...formProduct });
    } else {
      getProductById(currentId);
    }
  }, [currentId]);

  return (
    <ContainerForm>
      <form onSubmit={addOrEditProduct} id="formProduct">
        <input
          placeholder="Product Name"
          name="name"
          value={formProduct.name}
          onChange={handleChange}
        />
        <br />
        <input
          placeholder="Description"
          name="description"
          value={formProduct.description}
          onChange={handleChange}
        />
        <br />
        <input
          placeholder="Product Price"
          name="price"
          value={formProduct.price}
          onChange={handleChange}
        />
        <br />
        <input
          placeholder="Insert Product Image"
          name="image"
          value={formProduct.image}
          onChange={handleChange}
        />
        <br />
        <ButtonProduct text={currentId === "" ? "Create Product" : "Update"} />
      </form>
    </ContainerForm>
  );
};

export default CardProduct;
