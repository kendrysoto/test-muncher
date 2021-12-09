import * as React from "react";
import styled from "styled-components";

const SectionHome = styled.section`
  .contenedor {
    width: 90%;
    max-width: 1200px;
    overflow: hidden;
    margin: auto;
    padding: 60px 0;
  }

  .subtitulo {
    margin-top: 30px;
    text-align: center;
    font-weight: 600;
    color: #85144b;
    margin-bottom: 40px;
    font-size: 40px;
  }
  .contenedor-servicio {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
  }
  .contenedor-servicio img {
    width: 40%;
  }
  .checklist-servicio {
    width: 45%;
  }
  .service {
    margin-bottom: 2px;
  }
  .n-service {
    margin-bottom: 7px;
    color: #85144b;
  }
  .number {
    display: inline-block;
    background-image: linear-gradient(to top, #85144b 0%, #fbc2eb 100%);
    width: 30px;
    height: 30px;
    color: #fff;
    text-align: center;
    border-radius: 50%;
    font-weight: 700;
    line-height: 30px;
    margin-right: 5px;
  }

  @media screen and (max-width: 800px) {
    .contenedor-servicio img {
      width: 80%;
      margin-bottom: 40px;
    }
    .checklist-servicio {
      width: 80%;
    }
    .service {
      margin-bottom: 30px;
    }
  }

  @media screen and (max-width: 500px) {
    .subtitulo {
      font-size: 30px;
    }
  }
`;

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

  .contenedor {
    width: 90%;
    max-width: 1200px;
    overflow: hidden;
    margin: auto;
    padding: 60px 0;
  }

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
      <SectionHome class="contenedor" id="servicio">
        <h2 class="subtitulo">Our services</h2>
        <div class="contenedor-servicio">
          <img
            src="https://img.lalr.co/cms/2020/01/24192408/InternetEconomy_ancla.jpg?size=xl"
            alt=""
          />
          <div class="checklist-servicio">
            <div class="service">
              <h3 class="n-service">
                <span class="number">1</span>Diseño Web
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias molestiae sunt nobis, voluptatibus ea excepturi
                assumenda quia unde dicta deserunt?
              </p>
            </div>
            <div class="service">
              <h3 class="n-service">
                <span class="number">2</span>Diseño Web
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                sequi cumque voluptate at adipisci facilis ratione voluptas.
                Necessitatibus, incidunt quidem.
              </p>
            </div>
            <div class="service">
              <h3 class="n-service">
                <span class="number">3</span>Diseño Web
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio laborum in impedit optio molestias quas dolores quae
                excepturi nihil soluta.
              </p>
            </div>
          </div>
        </div>
      </SectionHome>
    </div>
  );
};

export default Home;
