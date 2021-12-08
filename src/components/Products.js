import React, { useEffect, useState } from "react";
import CardProduct from "./CardProduct";
import { db } from "../aplication/firebase";
import { toast } from "react-toastify";
import styled from "styled-components";

const ProductsContainer = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  h3 {
    color: #1d273b;
    font-weight: 300;
  }

  .contenedor {
    width: 90%;
    max-width: 1000px;
    margin: auto;
    overflow: hidden;
  }

  .contenedor1 {
    width: 90%;
    max-width: 1000px;
    margin: auto;
    overflow: hidden;
    padding: 60px 0;
  }

  h1 {
    font-size: 50px;
  }

  .titulo {
    font-size: 50px;
  }

  .productSection {
    background: #f2f2f2;
  }

  .contenedor-articulo {
    display: flex;
    flex-wrap: wrap;
    margin-top: 60px;
    justify-content: space-around;
  }

  .articulo {
    width: 29%;
    background: #fff;
    margin-bottom: 30px;
    border-radius: 10px;
    padding: 45px 30px 60px 30px;
    transition: 0.5s;
  }

  .articulo:hover {
    box-shadow: 0 4px 10px rgba(17, 29, 48, 0.26);
  }

  .articulo > h3 {
    font-size: 24px;
    margin-top: 30px;
  }

  .articulo > p {
    font-weight: 100;
    color: #5d6678;
    margin-top: 15px;
    padding-bottom: 20px;
  }

  .articulo > a {
    color: #5d6678;
    font-weight: 400;
    text-decoration: none;
  }

  .imgproducts {
    width: 100%;
    height: 180px;
  }

  h2{
    color: #e8c4d8;
    margin-top:30px;  
  }

  @media screen and (max-width: 800px) {
    .titulo {
      font-size: 45px;
    }

    .articulo {
      width: 45%;
    }

    h2{
      margin-bottom: 15px;
      margin-right:0px
    }
    
  }

  @media screen and (max-width: 600px) {

    .titulo {
      font-size: 35px;
    }

    h1 {
      font-size: 40px;
    }

    .articulo {
      width: 95%;
    }

    #create {
      width: 85%;
  }
    h2{
      margin-bottom: 15px;
      margin-right:0
    }

    .createProducts {
      width: 100%; 
    }
  }

  .createProducts {
    width: 40%;
    height: 250px;
    margin: 0 auto;
    margin-bottom: 60px;
    text-align: center; 
  }

  button{
    background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};
  font-size: 15px;
  padding: 3px;
  border: 2px solid palevioletred;
  border-radius: 3px;
  margin: 0 auto;
  margin-top:10px;
  }
}
  
`;

const Products = () => {
  const [products, seProducts] = useState([]);
  const [currentId, setCurrentId] = useState("");

  const addOrEdit = async (productObject) => {
    if (currentId === "") {
      await db.collection("products").doc().set(productObject);
      toast("New Product Added", {
        type: "success",
      });
    } else {
      await db.collection("products").doc(currentId).update(productObject);
      toast("Product Updated Successfully", {
        type: "info",
      });
      setCurrentId(" ");
    }
  };

  const getProductId = async () => {
    db.collection("products").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      seProducts(docs);
    });
  };

  const onDeleteProduct = async (id) => {
    if (window.confirm("are you sure you want to delete this product?")) {
      await db.collection("products").doc(id).delete();
      toast("Product Removed Successfully", {
        type: "error",
        autoClose: 2000,
      });
    }
  };

  const editProduct = (id) => {
    setCurrentId(id);
    /* window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });*/
  };

  useEffect(() => {
    getProductId();
  }, []);
  return (
    <ProductsContainer>
      <div id="productsContainer">
        <section class="productSection">
          <div class="contenedor1">
            <div class="contenedor-articulo">
              {products.map(({ name, price, description, image, id }) => (
                <div
                  class="articulo"
                  data-aos="zoom-in-right"
                  data-aos-duration="3000"
                >
                  <img src={image} className="imgproducts" />
                  <h3>{name}</h3>
                  <p>{description}</p>
                  <a href="#" id="price">
                    ${price}
                  </a>
                  <br />
                  <button onClick={() => onDeleteProduct(id)}>
                    Delete
                  </button>{" "}
                  <button onClick={() => editProduct(id)}>Edit</button>
                </div>
              ))}
            </div>
          </div>
        </section>
        <div className="createProducts">
          <h2>{currentId === "" ? "Create Product" : "Update Product"}</h2>
          <CardProduct
            addOrEdit={addOrEdit}
            currentId={currentId}
            products={products}
          />
        </div>
      </div>
    </ProductsContainer>
  );
};

export default Products;
