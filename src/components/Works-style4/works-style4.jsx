/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";

const WorksStyle4 = () => {
  React.useEffect(() => {
    setTimeout(() => {
      initIsotope();
    }, 1000);
  }, []);
  return (
    <section className="portfolio-frl section-padding pb-70">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head  text-center">
              <h6 className="wow fadeIn" data-wow-delay=".5s">
                Portfolio
              </h6>
              <h3 className="wow color-font">
                My Recent Designs & <br /> Some Past Projects.
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {/*
          <div className="filtering col-12">
            <div className="filter wow fadeIn" data-wow-delay=".5s">
              <span data-filter="*" className="active">
                All
              </span>
              <span data-filter=".design">UI/UX Designing</span>
              <span data-filter=".android">Android App</span>
              <span data-filter=".software">Software</span>
            </div>
          </div>
*/}
          
          <div className="gallery full-width">
            {/*
            <div
              className="col-md-6 items design lg-mr wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>Fitness App Concept</h6>
                  <p>UI/UX Design for iOS</p>
                </div>
                <Link href={`#`}>
                  <a className="rota">
                    <img src="/img/portfolio/freelancer/Fitness-App-Concept.png" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="tags">
                  <span>
                    <Link href="#">App</Link>
                  </span>
                  <span>
                    <Link href="#">Fitness</Link>
                  </span>
                  <span>
                    <Link href="#">Design</Link>
                  </span>
                </div>
              </div>
            </div>

            

            <div
              className="col-md-6 items design wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>Game Launcher Design Concept</h6>
                  <p>UI/UX Design</p>
                </div>
                <Link href={`#`}>
                  <a className="rota">
                    <img src="/img/portfolio/freelancer/gamex-mock.png" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="tags">
                  <span>
                    <Link href="#">App</Link>
                  </span>
                  <span>
                    <Link href="#">Fitnes</Link>
                  </span>
                  <span>
                    <Link href="#">Creative</Link>
                  </span>
                </div>
              </div>
            </div>

            */}




            <div
              className="col-md-6 items design android wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>FlexFit</h6>
                  <p>UI/UX Design & Implementation for Android</p>
                </div>
                <Link href={`/projects/flexfit-android/`}>
                  <a className="rota">
                    <img src="/img/portfolio/freelancer/flexfit-android.png" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>

              </div>
            </div>

            {/*
            <div
              className="col-md-6 items design android wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>ExploreiT - Official Application</h6>
                  <p>UI/UX Design & Implementation for Android</p>
                </div>
                <Link href={`#`}>
                  <a className="rota">
                    <img src="/img/portfolio/freelancer/exploreit-mock-med.png" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="tags">
                  <span>
                    <Link href="#">App</Link>
                  </span>
                  <span>
                    <Link href="#">Fitnes</Link>
                  </span>
                  <span>
                    <Link href="#">Creative</Link>
                  </span>
                </div>
              </div>
            </div>
          */}


            <div
              className="col-md-6 items design wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>Paix - Mental Health/ Meditation focused app concept</h6>
                  <p>UI/UX Design</p>
                </div>
                <Link href={`/projects/meditation-concept/`}>
                  <a className="rota">
                    <img src="/img/portfolio/freelancer/paix-mock.png" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>

              </div>
            </div>


            <div
              className="col-md-6 items software wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>Android App Testing Toolkit</h6>
                  <p>A &apos;C#&apos; Windows Software Development for testing android apps</p>
                </div>
                <Link href={`/projects/att-win-android/`}>
                  <a className="rota">
                    <img src="/img/portfolio/freelancer/att-ss.png" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>

              </div>
            </div>
            <div
              className="col-md-6 items software wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">

                <Link href={`/showcase/show-all-dark`}>
                  <a className="rota">
                    <img src="/img/portfolio/freelancer/show_all_trans_grad.png" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default WorksStyle4;
