import React from "react";
import image from "../../../../images/Login-amico.svg";
import { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";
import "./SignIn.css";

const SignIn = () => {
  const {
    signInWithAny,
    facebookProvider,
    googleProvider,
    githubProvider,
    twitterProvider,
    signInWithEmail,
  } = useAuth();

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [error, setError] = useState("");

  const history = useHistory();
  const location = useLocation();
  const redirectUrl = location.state?.from || "/shop";

  /* --------------------- SIGN IN WITH ANY SOCIAL LINKS --------------------- */
  const handleSignInWithAny = (provider) => {
    signInWithAny(provider)
      .then((result) => {
        history.push(redirectUrl);
      })
      .catch((err) => setError(err.message));
  };

  /* ---------------------- SIGN IN WITH EMAIL & PASSWORD --------------------- */
  const emailChange = (e) => {
    setUserEmail(e.target.value);
  };
  const passwordChange = (e) => {
    setUserPassword(e.target.value);
  };

  const signInWithEmailAndPassword = (e) => {
    e.preventDefault();

    signInWithEmail(userEmail, userPassword)
      .then((result) => {
        history.push(redirectUrl);
      })
      .catch((err) => setError(err.message));
  };

  return (
    <div className="sign-form container sign-form h-100">
      <Row md={2} xs={1} className=" h-100">
        <Col className="sign-left" md={7}>
          <div className="sign-greetings">
            <img src={image} alt="" />
            {/* <h2>Get access to your Orders, Wishlist and Recommendations.</h2> */}
          </div>
        </Col>
        <Col md={5} className="sign-right">
          <h1 className="text-white text-center">Sign In</h1>
          <Form onSubmit={signInWithEmailAndPassword}>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label className="form-label">Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                className="form-input"
                onBlur={emailChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label className="form-label">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                className="form-input"
                onBlur={passwordChange}
              />
            </Form.Group>
            <Form.Group
              className="mb-3 d-flex justify-content-between align-items-center"
              controlId="formHorizontalCheck"
            >
              <Form.Check className="form-label" label="Remember me?" />
              <a className="switch-link" href="/">
                Forgot password?
              </a>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formHorizontalCheck">
              {error && <small> {error}</small>}
              <button className="w-100 btn-custom" type="submit">
                Sign In
              </button>
            </Form.Group>
          </Form>
          <small className="text-center d-block text-more-option ">
            Or with Social Profile
          </small>
          <div className="social-btn-box my-3 d-flex justify-content-center align-items-center">
            <button
              className="btn-social"
              onClick={() => handleSignInWithAny(googleProvider)}
            >
              <i class="fab fa-google"></i>
            </button>
            <button
              className="btn-social"
              onClick={() => handleSignInWithAny(githubProvider)}
            >
              <i class="fab fa-github"></i>
            </button>
            <button
              className="btn-social"
              onClick={() => handleSignInWithAny(facebookProvider)}
            >
              <i class="fab fa-facebook"></i>
            </button>
            <button
              className="btn-social"
              onClick={() => handleSignInWithAny(twitterProvider)}
            >
              <i class="fab fa-twitter"></i>
            </button>
          </div>

          <small className="text-center d-block">
            Dont have an account?
            <Link to="/form/signup" className="switch-link ms-1">
              Sign Up
            </Link>
          </small>
        </Col>
      </Row>
    </div>
  );
};

export default SignIn;
