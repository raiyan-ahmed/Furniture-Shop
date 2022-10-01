import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import "./style.css";
export default function Footer() {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col lg={3} xs={6}>
            <div className="categories">
              <h5>Categories</h5>
              <ul>
                <li>Chairs</li>
                <li>Tabels</li>
                <li>Sofas</li>
                <li>Bookcases</li>
                <li>Beds</li>
                <li>Kids bedroom</li>
              </ul>
            </div>
          </Col>
          <Col lg={3} xs={6}>
            <div className="my-account">
              <h5>My Account</h5>
              <ul>
                <li>Account</li>
                <li>Cart</li>
                <li>Wishlist</li>
                <li>Compare</li>
                <li>Log in</li>
                <li>Register</li>
              </ul>
            </div>
          </Col>
          <Col lg={6} xs={12}>
            <div className="newsletter">
              <h5>NEWSLETTER SIGNUP</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quos assumenda itaque consequatur.
              </p>
              <div className="email-input">
                <input type="text" placeholder="Enter Your E-mail" />
                <button>JOIN US</button>
              </div>
              <div className="social-media">
                <FaFacebookF />
                <FaTwitter />
                <FaInstagram />
                <FaYoutube />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
