import React from "react";
import Navbar from "../../components/Navbar/navbar_dark";
import Footer from "../../components/Footer/footer";
import DarkTheme from "../../layouts/Dark";
import FreelancreIntro from "../../components/Freelancre-intro/freelancre-intro";
//import Services5 from "../../components/Services5/services5";
import WorksStyle4 from "../../components/Works-style4/works-style4";
import AboutUs5 from "../../components/About-us5/about-us5";
import FullTestimonials from "../../components/Full-testimonials/full-testimonials";
import VideoWithTestimonials from "../../components/Video-with-testimonials/video-with-testimonials";
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
    <DarkTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <FreelancreIntro />
      <VideoWithTestimonials/>
      <WorksStyle4 />
      <AboutUs5 />
      <Blogs2 />
      {/*<SContactForm noLine />*/}
      <Footer />
    </DarkTheme>
  );
};

export default Homepage;
