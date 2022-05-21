/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const Blogs2 = () => {
  return (
    <section className="blog-list section-padding sub-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="head md-mb50">
              <h6 className="back-color">Blogs</h6>
              <h3>Get My Latest Blogs Here.</h3>
              <p>
                
              </p>
              <Link href="https://medium.com/@vaishnavvprabhu">
                <a>
                  <span>More Blog Posts</span>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-7 offset-lg-1">
            <div className="item wow fadeInUp" data-wow-delay=".3s">
              <div className="img valign">
                <img src="/img/blog/1.jpeg" alt="" />
              </div>
              <div className="cont valign">
                <div>
                  <div className="info">
                    <Link href="https://medium.com/@vaishnavvprabhu/understanding-steganography-ad9d500ece9e">
                      <a className="date">
                        <span>
                          <i>19</i> May, 2022
                        </span>
                      </a>
                    </Link>
                    <span>/</span>
                    <Link href="https://medium.com/@vaishnavvprabhu">
                      <a className="tag">
                        <span>Medium</span>
                      </a>
                    </Link>
                  </div>
                  <h5>
                    <Link href="https://medium.com/@vaishnavvprabhu/understanding-steganography-ad9d500ece9e">
                      <a>
                        Understanding Steganography
                      </a>
                    </Link>
                  </h5>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs2;
