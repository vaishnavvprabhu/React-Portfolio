/* eslint-disable @next/next/no-img-element */
import React from "react";
import aboutSkillsProgress from "../../common/aboutSkillsProgress";

const AboutUs5 = () => {
  React.useEffect(() => {
    aboutSkillsProgress(
      document.querySelector(".about-cr .skills-box"),
      document.querySelectorAll(".skill-progress .progres"),
      document.querySelector(".about-cr")
    );
  }, []);
  return (
    <section className="about-cr">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 img md-mb50">
            <img src="/img/intro/photo-about.png" alt="" />
          </div>
          <div className="col-lg-5 valign">
            <div className="cont full-width">
              <h3 className="color-font-for-about">Computer Enthusiast</h3>
              <h5 className="co-tit mb-15">
                The Best or Nothing.
              </h5>
              <p>
                That&apos;s what my dad taught me. I strive to achieve excellence in whatever I do.
              </p>
              <div className="skills-box mt-40">
                <div className="skill-item">
                  <h5 className="fz-14 mb-15">UI / UX Design</h5>
                  <div className="skill-progress">
                    <div className="progres" data-value="90%"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <h5 className="fz-14 mb-14">Mobile Development</h5>
                  <div className="skill-progress">
                    <div className="progres" data-value="60%"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <h5 className="fz-14 mb-15"> Web Development</h5>
                  <div className="skill-progress">
                    <div className="progres" data-value="70%"></div>
                  </div>
                </div>
                {/*<div className="skill-item">
                  <h5 className="fz-14 mb-15">Cyber Security</h5>
                  <div className="skill-progress">
                    <div className="progres" data-value="50%"></div>
                  </div>
                </div>
  */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs5;
