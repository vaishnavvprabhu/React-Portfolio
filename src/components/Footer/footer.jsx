/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import appData from "../../data/app.json";

const Footer = ({ hideBGCOLOR }) => {
  return (
    <footer className={`${!hideBGCOLOR ? "sub-bg" : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Contact Us</h5>
              </div>
              <ul>
                <li>
                  <span className="icon pe-7s-mail"></span>
                  <div className="cont">
                    <h6>Email Us</h6>
                    <p>vaishnavvprabhu@gmail.com</p>
                  </div>
                </li>

              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item md-mb50">
              
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item">
              <div className="logo">
                <img src={appData.lightLogo} alt="" />
              </div>
              <div className="social">
                <a href="https://twitter.com/vaishnavvivekp1">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.instagram.com/vaishnavvprabhu/">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.youtube.com/channel/UCKvinCmkseeGovrIF511aMA">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
              <div className="copy-right">
                <p>
                  © 2022, Vaishnav Vivek Prabhu. All Rights Reserved.<br></br>
                  <Link
                    href="https://www.linkedin.com/in/vaishnav-vivek-prabhu-4696651b8/"
                    
                  >
                    <a target="_blank">LinkedIn</a>
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
