import * as React from "react";
import styled from "styled-components";

const Button = styled.button`
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};
  font-size: 1em;
  padding: 5px;
  border: 2px solid palevioletred;
  border-radius: 3px;
  margin: 0 auto;
  margin-right:130px
`;

const ButtonProduct = ({ onClick, text }) => {
  return (
    <div>
      <Button onClick={onClick}>{text}</Button>
    </div>
  );
};

export default ButtonProduct;
