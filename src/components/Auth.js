import * as React from "react";
import { useState } from "react";
import "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import styled from "styled-components";

const AuthContainer = styled.div`
  .login {
    background-color: white;
    width: 25%;
    margin: auto;
    padding-top: 30px;
    padding-bottom: 30px;
    border-radius: 10px;
  }

  .text-login {
    color: #0f9b0f;
    font-size: 20px;
    margin: 0px;
    margin-top: 30px;
    margin-bottom: 20px;
  }

  .login input {
    border: none;
    width: 80%;
    padding: 9px;
    border-radius: 5px;
    margin-top: 10px;
    margin-bottom: 20px;
    border: 1px solid #e8c4d8;
    color: #e8c4d8;
  }

  .login label {
    color: #e8c4d8;
    font-weight: 500;
    float: left;
    margin-left: 34px;
  }

  .button-login {
    background-color: #e8c4d8;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 20px;
    margin-top: 10px;
    width: 80%;
    font-size: 16px;
    font-weight: bold;
  }

  .user-not-login {
    color: red;
  }

  .welcome-user h1,
  p {
    display: flex;
    justify-content: center;
    color: #e8c4d8;
    background-color: white;
    width: 25%;
    margin: auto;
    padding-top: 30px;
    padding-bottom: 30px;
    border-radius: 10px;
  }

  #logOut {
  }

  @media screen and (max-width: 800px) {
    .login {
      width: 95%;
    }
  }

  @media screen and (max-width: 600px) {
    .login {
      width: 95%;
    }
  }
`;

const Auth = () => {
  const [login, setLogin] = useState({
    email: "",
    Password: "",
  });

  const [signInCorrect, setSignInCorrect] = useState(false);

  const handleChange = (ev) => {
    setLogin({
      ...login,
      [ev.target.name]: ev.target.value,
    });
  };

  const submit = async () => {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(login.email, login.Password);
    setSignInCorrect(true);
  };

  const user = firebase.auth().currentUser;

  const signOut = async (e) => {
    e.preventDefault();

    await firebase
      .auth()
      .signOut()
      .then(function () {
        console.log("Successfully signed out.");
      })
      .catch(function (error) {
        console.log(error);
        console.log("An error occurred");
      });
  };

  const loginUser = async () => {
    await firebase
      .auth()
      .signInWithEmailAndPassword(login.email, login.Password);
    setSignInCorrect(true);
  };

  return (
    <AuthContainer>
      {!signInCorrect && (
        <div className="login">
          <label>Email</label>
          <br />
          <input
            id="form-control"
            name="email"
            label="Email"
            type="email"
            value={login.email}
            onChange={handleChange}
          />
          <label>Password</label>
          <br />
          <input
            name="Password"
            label="Password"
            type="Password"
            value={login.Password}
            onChange={handleChange}
          />
          <button className="button-login" onClick={submit}>
            Sign In
          </button>
          <button className="button-login" onClick={loginUser}>
            Login
          </button>
        </div>
      )}
      {signInCorrect && (
        <div className="welcome-user">
          <h1>Welcome to Muncher</h1>
          <p>User: {user?.email}</p>
          <button className="button-login" id="logOut" onClick={signOut}>
            logOut
          </button>
        </div>
      )}
    </AuthContainer>
  );
};

export default Auth;
