"use strict";
exports.id = 914;
exports.ids = [914];
exports.modules = {

/***/ 3180:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* eslint-disable @next/next/no-css-tags */






const DarkTheme = ({
  children,
  useSkin,
  mobileappstyle
}) => {
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    window.theme = "dark";
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("link", {
        rel: "stylesheet",
        href: "/css/dark.css"
      }), useSkin ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("link", {
        rel: "stylesheet",
        href: "/css/arch-skin-dark.css"
      }) : "", mobileappstyle ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("link", {
        href: "/css/mobile-app-dark.css",
        rel: "stylesheet"
      }) : ""]
    }), children]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DarkTheme);

/***/ }),

/***/ 1914:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ home7_dark)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/data/app.json
var app = __webpack_require__(2806);
// EXTERNAL MODULE: ./src/common/navbar.js + 1 modules
var navbar = __webpack_require__(7991);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/Navbar/navbar_dark.jsx
/* eslint-disable @next/next/no-img-element */







const Navbar = ({
  lr,
  nr,
  theme
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("nav", {
    ref: nr,
    className: `navbar navbar-expand-lg change ${theme === "themeL" ? "light" : ""}`,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/jsx_runtime_.jsx((link_default()), {
        href: "/",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: "logo",
          children: theme ? theme === "themeL" ? /*#__PURE__*/jsx_runtime_.jsx("img", {
            ref: lr,
            src: app/* darkLogo */.Q1,
            alt: "logo"
          }) : /*#__PURE__*/jsx_runtime_.jsx("img", {
            ref: lr,
            src: app/* lightLogo */.E8,
            alt: "logo"
          }) : /*#__PURE__*/jsx_runtime_.jsx("img", {
            ref: lr,
            src: app/* lightLogo */.E8,
            alt: "logo"
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("button", {
        className: "navbar-toggler",
        type: "button",
        onClick: navbar/* handleMobileDropdown */._,
        "data-toggle": "collapse",
        "data-target": "#navbarSupportedContent",
        "aria-controls": "navbarSupportedContent",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation",
        children: /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "icon-bar",
          children: /*#__PURE__*/jsx_runtime_.jsx("i", {
            className: "fas fa-bars"
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "collapse navbar-collapse",
        id: "navbarSupportedContent",
        children: /*#__PURE__*/jsx_runtime_.jsx("ul", {
          className: "navbar-nav ml-auto",
          children: /*#__PURE__*/jsx_runtime_.jsx("li", {
            className: "nav-item",
            children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
              href: `./`,
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "nav-link",
                children: "Toggle Light Mode"
              })
            })
          })
        })
      })]
    })
  });
};

/* harmony default export */ const navbar_dark = (Navbar);
// EXTERNAL MODULE: ./src/components/Footer/footer.jsx
var footer = __webpack_require__(4213);
// EXTERNAL MODULE: ./src/layouts/Dark.jsx
var Dark = __webpack_require__(3180);
// EXTERNAL MODULE: ./src/components/Freelancre-intro/freelancre-intro.jsx
var freelancre_intro = __webpack_require__(213);
// EXTERNAL MODULE: ./src/components/Works-style4/works-style4.jsx
var works_style4 = __webpack_require__(4803);
// EXTERNAL MODULE: ./src/components/About-us5/about-us5.jsx + 1 modules
var about_us5 = __webpack_require__(7954);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(8096);
;// CONCATENATED MODULE: ./src/components/Full-testimonials/full-testimonials.jsx
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable @next/next/no-img-element */







class FullTestimonials extends (external_react_default()).Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "renderArrows", () => {
      return /*#__PURE__*/_jsx("div", {
        className: "arrows",
        children: /*#__PURE__*/_jsxs("div", {
          className: "container",
          children: [/*#__PURE__*/_jsx("div", {
            onClick: () => this.slider.slickNext(),
            className: "next cursor-pointer",
            children: /*#__PURE__*/_jsx("span", {
              className: "pe-7s-angle-right"
            })
          }), /*#__PURE__*/_jsx("div", {
            onClick: () => this.slider.slickPrev(),
            className: "prev cursor-pointer",
            children: /*#__PURE__*/_jsx("span", {
              className: "pe-7s-angle-left"
            })
          })]
        })
      });
    });
  }

  render() {
    return /*#__PURE__*/_jsxs("section", {
      className: `testimonials ${this.props.withIMG ? "section-padding bg-img" : this.props.withCOLOR ? "section-padding back-color" : this.props.noPadding ? "" : "section-padding"} ${this.props.classText ? this.props.classText : ""}`,
      style: {
        backgroundImage: `${this.props.withIMG ? "url(/img/testim-img.jpg)" : "none"}`
      },
      children: [this.props.showHead && /*#__PURE__*/_jsx("div", {
        className: "container",
        children: /*#__PURE__*/_jsx("div", {
          className: "row justify-content-center",
          children: /*#__PURE__*/_jsx("div", {
            className: "col-lg-8 col-md-10",
            children: /*#__PURE__*/_jsxs("div", {
              className: "sec-head  text-center",
              children: [/*#__PURE__*/_jsx("h6", {
                className: "wow fadeIn",
                "data-wow-delay": ".5s",
                children: "Testimonials"
              }), /*#__PURE__*/_jsx("h3", {
                className: "wow color-font",
                children: "We love our clients from all over the world."
              })]
            })
          })
        })
      }), /*#__PURE__*/_jsxs("div", {
        className: "container-fluid position-re",
        children: [/*#__PURE__*/_jsx("div", {
          className: "row wow fadeInUp",
          "data-wow-delay": ".5s",
          children: /*#__PURE__*/_jsx("div", {
            className: "col-lg-12",
            children: /*#__PURE__*/_jsxs(Slider, {
              className: "slic-item",
              ref: c => this.slider = c,
              dots: false,
              infinite: true,
              arrows: true,
              centerMode: true,
              autoplay: true,
              rows: 1,
              slidesToScroll: 1,
              slidesToShow: 3,
              responsive: [{
                breakpoint: 1024,
                settings: {
                  slidesToShow: 1,
                  centerMode: false
                }
              }, {
                breakpoint: 767,
                settings: {
                  slidesToShow: 1,
                  centerMode: false
                }
              }, {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  centerMode: false
                }
              }],
              children: [/*#__PURE__*/_jsxs("div", {
                className: "item",
                children: [/*#__PURE__*/_jsx("div", {
                  className: "info valign",
                  children: /*#__PURE__*/_jsx("div", {
                    className: "cont",
                    children: /*#__PURE__*/_jsxs("div", {
                      className: "author",
                      children: [/*#__PURE__*/_jsx("div", {
                        className: "img",
                        children: /*#__PURE__*/_jsx("img", {
                          src: "/img/clients/1.jpg",
                          alt: ""
                        })
                      }), /*#__PURE__*/_jsx("h6", {
                        className: "author-name color-font",
                        children: "Alex Regelman"
                      }), /*#__PURE__*/_jsx("span", {
                        className: "author-details",
                        children: "Co-founder, Colabrio"
                      })]
                    })
                  })
                }), /*#__PURE__*/_jsx("p", {
                  children: "I would highly recommend Vie Digital. I worked with the team on an animation for our \u2018Click & Collect\u2019 service."
                })]
              }), /*#__PURE__*/_jsxs("div", {
                className: "item",
                children: [/*#__PURE__*/_jsx("div", {
                  className: "info valign",
                  children: /*#__PURE__*/_jsx("div", {
                    className: "cont",
                    children: /*#__PURE__*/_jsxs("div", {
                      className: "author",
                      children: [/*#__PURE__*/_jsx("div", {
                        className: "img",
                        children: /*#__PURE__*/_jsx("img", {
                          src: "/img/clients/1.jpg",
                          alt: ""
                        })
                      }), /*#__PURE__*/_jsx("h6", {
                        className: "author-name color-font",
                        children: "Alex Regelman"
                      }), /*#__PURE__*/_jsx("span", {
                        className: "author-details",
                        children: "Co-founder, Colabrio"
                      })]
                    })
                  })
                }), /*#__PURE__*/_jsx("p", {
                  children: "I would highly recommend Vie Digital. I worked with the team on an animation for our \u2018Click & Collect\u2019 service."
                })]
              }), /*#__PURE__*/_jsxs("div", {
                className: "item",
                children: [/*#__PURE__*/_jsx("div", {
                  className: "info valign",
                  children: /*#__PURE__*/_jsx("div", {
                    className: "cont",
                    children: /*#__PURE__*/_jsxs("div", {
                      className: "author",
                      children: [/*#__PURE__*/_jsx("div", {
                        className: "img",
                        children: /*#__PURE__*/_jsx("img", {
                          src: "/img/clients/1.jpg",
                          alt: ""
                        })
                      }), /*#__PURE__*/_jsx("h6", {
                        className: "author-name color-font",
                        children: "Alex Regelman"
                      }), /*#__PURE__*/_jsx("span", {
                        className: "author-details",
                        children: "Co-founder, Colabrio"
                      })]
                    })
                  })
                }), /*#__PURE__*/_jsx("p", {
                  children: "I would highly recommend Vie Digital. I worked with the team on an animation for our \u2018Click & Collect\u2019 service."
                })]
              }), /*#__PURE__*/_jsxs("div", {
                className: "item",
                children: [/*#__PURE__*/_jsx("div", {
                  className: "info valign",
                  children: /*#__PURE__*/_jsx("div", {
                    className: "cont",
                    children: /*#__PURE__*/_jsxs("div", {
                      className: "author",
                      children: [/*#__PURE__*/_jsx("div", {
                        className: "img",
                        children: /*#__PURE__*/_jsx("img", {
                          src: "/img/clients/1.jpg",
                          alt: ""
                        })
                      }), /*#__PURE__*/_jsx("h6", {
                        className: "author-name color-font",
                        children: "Alex Regelman"
                      }), /*#__PURE__*/_jsx("span", {
                        className: "author-details",
                        children: "Co-founder, Colabrio"
                      })]
                    })
                  })
                }), /*#__PURE__*/_jsx("p", {
                  children: "I would highly recommend Vie Digital. I worked with the team on an animation for our \u2018Click & Collect\u2019 service."
                })]
              })]
            })
          })
        }), this.renderArrows()]
      })]
    });
  }

}

/* harmony default export */ const full_testimonials = ((/* unused pure expression or super */ null && (FullTestimonials)));
// EXTERNAL MODULE: ./src/components/blogs/Blogs2/blogs2.jsx
var blogs2 = __webpack_require__(7972);
// EXTERNAL MODULE: ./src/components/s-contact-form/s-contact-form.jsx
var s_contact_form = __webpack_require__(3366);
;// CONCATENATED MODULE: ./src/pages/homepage/home7-dark.jsx




 //import Services5 from "../../components/Services5/services5";









const Homepage = () => {
  const navbarRef = external_react_default().useRef(null);
  const logoRef = external_react_default().useRef(null);
  external_react_default().useEffect(() => {
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
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Dark/* default */.Z, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(navbar_dark, {
      nr: navbarRef,
      lr: logoRef
    }), /*#__PURE__*/jsx_runtime_.jsx(freelancre_intro/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(works_style4/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(about_us5/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(blogs2/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(s_contact_form/* default */.Z, {
      noLine: true
    }), /*#__PURE__*/jsx_runtime_.jsx(footer/* default */.Z, {})]
  });
};

/* harmony default export */ const home7_dark = (Homepage);

/***/ })

};
;