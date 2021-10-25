import React from "react";
import image from "../../../../images/sign-up.svg";
import { Col, Form, Row } from "react-bootstrap";
import { Link, useLocation, useHistory } from "react-router-dom";
import "./SignUp.css";
import useAuth from "../../../../hooks/useAuth";
import { useState } from "react";

const SignUp = () => {
  const {
    createNewUser,
    signInWithAny,
    facebookProvider,
    googleProvider,
    githubProvider,
    twitterProvider,
  } = useAuth();

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [error, setError] = useState("");

  const history = useHistory();
  const location = useLocation();
  const redirectURL = location.state?.from || "/shop";

  /* ----------------------------- CREATE NEW USER ---------------------------- */
  const emailChange = (e) => {
    setUserEmail(e.target.value);
  };
  const passwordChange = (e) => {
    setUserPassword(e.target.value);
  };

  const handleCreateNewUser = (e) => {
    e.preventDefault();
    createNewUser(userEmail, userPassword)
      .then((result) => {
        history.push(redirectURL);
      })
      .catch((err) => setError(err.message));
  };

  /* ------------------------ SIGN IN WITH SOCIAL LINKS ----------------------- */
  const handleSignInWithAny = (provider) => {
    signInWithAny(provider)
      .then((result) => {
        history.push(redirectURL);
      })
      .catch((err) => setError(err.message));
  };

  return (
    <div className="sign-form container h-100">
      <Row md={2} xs={1} className=" h-100">
        <Col className="sign-left" md={7}>
          <div className="sign-greetings">
            <img src={image} alt="" />
            {/* <h1>You are new here</h1>
            <h2>
              Sign up with your email and personal details to get started!
            </h2> */}
          </div>
        </Col>
        <Col md={5} className="sign-right">
          <h1 className="text-white text-center">Sign Up</h1>
          <Form onSubmit={handleCreateNewUser}>
            <Form.Group className="mb-3" controlId="formGroupName">
              <Form.Label className="form-label">Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                className="form-input"
              />
            </Form.Group>
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
            <Form.Group className="mb-3" controlId="formHorizontalCheck">
              <Form.Check
                className="form-label"
                label="I agree to the Terms and Privacy Policy."
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formHorizontalCheck">
              {error && <small>{error}</small>}
              <button type="submit" className="w-100 btn-custom">
                Sign Up
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
            Already have an account?{" "}
            <Link to="/form/signin" className="switch-link">
              Sign In
            </Link>
          </small>
        </Col>
      </Row>
    </div>
  );
};

export default SignUp;
