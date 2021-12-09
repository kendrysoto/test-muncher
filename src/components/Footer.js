import * as React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";

const ContainerFooter = styled.div`
  .contenedor {
    width: 90%;
    max-width: 1200px;
    overflow: hidden;
    margin: auto;
    padding: 60px 0;
  }

  footer {
    background-color: #85144b;
    padding-bottom: 0.1px;
    margin-top: 180px;
  }
  .footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding-top: 60px;
    padding-bottom: 40px;
  }
  .contact-us {
    width: 40%;
    color: #fff;
  }
  .brand {
    font-weight: 500;
    font-size: 40px;
  }
  .brand + p {
    font-weight: 500;
  }

  .line {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    height: 2px;
    background: #fff;
    margin-bottom: 60px;
  }
`;

const Footer = () => {
  return (
    <ContainerFooter>
      <footer id="contacto">
        <div class="contenedor footer-content">
          <div class="contact-us">
            <h2 class="brand">Muncher Products</h2>
            <p>We are experts in technology products</p>
          </div>
        </div>

        <div class="line"></div>
      </footer>
    </ContainerFooter>
  );
};

export default Footer;
