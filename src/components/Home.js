import * as React from "react";
import styled from "styled-components";

const Header = styled.header`
  height: 100vh;
  background-image: linear-gradient(
      to top,
      rgba(161, 140, 209, 0.39) 0%,
      rgba(251, 194, 235, 0.4) 100%
    ),
    url(https://i.ibb.co/2dLn7f2/lum3n-RBu-Q2-PK-L8-unsplash.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;

  .head {
    text-align: center;
    padding: 0;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #fff;
  }

  @media screen and (max-width: 800px) {
    .titulo {
      font-size: 40px;
    }
  }

  @media screen and (max-width: 500px) {
    .titulo {
      font-size: 30px;
    }
  }
`;

const Home = () => {
  return (
    <div>
      <Header className="header" id="inicio">
        <div className="contenedor head">
          <h1 className="titulo">Welcome - Test Muncher</h1>
          <p className="copy">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>
        </div>
      </Header>
    </div>
  );
};

export default Home;
