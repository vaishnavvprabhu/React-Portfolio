import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import LightTheme from "../../layouts/Light";
import FreelancreIntro from "../../components/Freelancre-intro/freelancre-intro";
import WorksStyle4 from "../../components/Works-style4/works-style4-light";
import AboutUs5 from "../../components/About-us5/about-us5";
import Blogs2 from "../../components/blogs/Blogs2/blogs2";
import SContactForm from "../../components/s-contact-form/s-contact-form";

const Homepage = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    var navbar = navbarRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [navbarRef]);
  return (
    <LightTheme>
      <Navbar nr={navbarRef} lr={logoRef} theme="themeL" />
      <FreelancreIntro />
      <WorksStyle4 />
      <AboutUs5 />
      <Blogs2 />
      {/*<SContactForm noLine />*/}
      <Footer />
    </LightTheme>
  );
};

export default Homepage;
