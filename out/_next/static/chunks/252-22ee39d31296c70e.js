(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[252],{7913:function(e,a,r){"use strict";var n=r(5696);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var s,l=(s=r(7294))&&s.__esModule?s:{default:s},t=r(2199),i=r(1587),c=r(7215);function o(e,a){if(null==e)return{};var r,n,s=function(e,a){if(null==e)return{};var r,n,s={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],a.indexOf(r)>=0||(s[r]=e[r]);return s}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var d={};function u(e,a,r,n){if(e&&t.isLocalURL(a)){e.prefetch(a,r,n).catch((function(e){0}));var s=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;d[a+"%"+r+(s?"%"+s:"")]=!0}}var h=l.default.forwardRef((function(e,a){var r,s=e.legacyBehavior,h=void 0===s?!0!==Boolean(!1):s,f=e.href,m=e.as,p=e.children,x=e.prefetch,j=e.passHref,g=e.replace,v=e.shallow,N=e.scroll,b=e.locale,k=e.onClick,y=e.onMouseEnter,w=o(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter"]);r=p,h&&"string"===typeof r&&(r=l.default.createElement("a",null,r));var C,E=!1!==x,L=i.useRouter(),M=l.default.useMemo((function(){var e=t.resolveHref(L,f,!0),a=n(e,2),r=a[0],s=a[1];return{href:r,as:m?t.resolveHref(L,m):s||r}}),[L,f,m]),O=M.href,R=M.as,S=l.default.useRef(O),P=l.default.useRef(R);h&&(C=l.default.Children.only(r));var _=h?C&&"object"===typeof C&&C.ref:a,I=c.useIntersection({rootMargin:"200px"}),A=n(I,3),B=A[0],H=A[1],U=A[2],D=l.default.useCallback((function(e){P.current===R&&S.current===O||(U(),P.current=R,S.current=O),B(e),_&&("function"===typeof _?_(e):"object"===typeof _&&(_.current=e))}),[R,_,O,U,B]);l.default.useEffect((function(){var e=H&&E&&t.isLocalURL(O),a="undefined"!==typeof b?b:L&&L.locale,r=d[O+"%"+R+(a?"%"+a:"")];e&&!r&&u(L,O,R,{locale:a})}),[R,O,H,b,E,L]);var K={ref:D,onClick:function(e){h||"function"!==typeof k||k(e),h&&C.props&&"function"===typeof C.props.onClick&&C.props.onClick(e),e.defaultPrevented||function(e,a,r,n,s,l,i,c){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var a=e.currentTarget.target;return a&&"_self"!==a||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&t.isLocalURL(r))&&(e.preventDefault(),a[s?"replace":"push"](r,n,{shallow:l,locale:c,scroll:i}))}(e,L,O,R,g,v,N,b)},onMouseEnter:function(e){h||"function"!==typeof y||y(e),h&&C.props&&"function"===typeof C.props.onMouseEnter&&C.props.onMouseEnter(e),t.isLocalURL(O)&&u(L,O,R,{priority:!0})}};if(!h||j||"a"===C.type&&!("href"in C.props)){var T="undefined"!==typeof b?b:L&&L.locale,z=L&&L.isLocaleDomain&&t.getDomainLocale(R,T,L&&L.locales,L&&L.domainLocales);K.href=z||t.addBasePath(t.addLocale(R,T,L&&L.defaultLocale))}return h?l.default.cloneElement(C,K):l.default.createElement("a",Object.assign({},w,K),r)}));a.default=h,("function"===typeof a.default||"object"===typeof a.default&&null!==a.default)&&(Object.assign(a.default,a),e.exports=a.default)},7215:function(e,a,r){"use strict";var n=r(5696);Object.defineProperty(a,"__esModule",{value:!0}),a.useIntersection=function(e){var a=e.rootRef,r=e.rootMargin,o=e.disabled||!t,d=s.useRef(),u=s.useState(!1),h=n(u,2),f=h[0],m=h[1],p=s.useState(a?a.current:null),x=n(p,2),j=x[0],g=x[1],v=s.useCallback((function(e){d.current&&(d.current(),d.current=void 0),o||f||e&&e.tagName&&(d.current=function(e,a,r){var n=function(e){var a,r={root:e.root||null,margin:e.rootMargin||""},n=c.find((function(e){return e.root===r.root&&e.margin===r.margin}));n?a=i.get(n):(a=i.get(r),c.push(r));if(a)return a;var s=new Map,l=new IntersectionObserver((function(e){e.forEach((function(e){var a=s.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;a&&r&&a(r)}))}),e);return i.set(r,a={id:r,observer:l,elements:s}),a}(r),s=n.id,l=n.observer,t=n.elements;return t.set(e,a),l.observe(e),function(){if(t.delete(e),l.unobserve(e),0===t.size){l.disconnect(),i.delete(s);var a=c.findIndex((function(e){return e.root===s.root&&e.margin===s.margin}));a>-1&&c.splice(a,1)}}}(e,(function(e){return e&&m(e)}),{root:j,rootMargin:r}))}),[o,j,r,f]),N=s.useCallback((function(){m(!1)}),[]);return s.useEffect((function(){if(!t&&!f){var e=l.requestIdleCallback((function(){return m(!0)}));return function(){return l.cancelIdleCallback(e)}}}),[f]),s.useEffect((function(){a&&g(a.current)}),[a]),[v,f,N]};var s=r(7294),l=r(8065),t="undefined"!==typeof IntersectionObserver;var i=new Map,c=[];("function"===typeof a.default||"object"===typeof a.default&&null!==a.default)&&(Object.assign(a.default,a),e.exports=a.default)},7991:function(e,a,r){"use strict";r.d(a,{z:function(){return s},_:function(){return l}});var n=function(e){var a=[];if(!e.parentNode)return a;for(var r=e.parentNode.firstChild;r;)1===r.nodeType&&r!==e&&a.push(r),r=r.nextSibling;return a},s=function(e){n(e.target.parentElement).filter((function(e){return e.classList.contains("show")})).map((function(e){e.classList.remove("show"),e.childNodes[0]&&e.childNodes[0].setAttribute("aria-expanded",!1),e.childNodes[1]&&e.childNodes[1].classList.remove("show")})),e.target.parentElement.classList.toggle("show"),e.target.setAttribute("aria-expanded",!0),e.target.parentElement.childNodes[1].classList.toggle("show")},l=function(e){document.getElementById("navbarSupportedContent").classList.toggle("show-with-trans")}},8387:function(e,a,r){"use strict";r(7294);var n=r(5893);a.Z=function(){return(0,n.jsxs)("footer",{className:"app-footer","data-overlay-dark":"0",children:[(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("div",{className:"col-lg-4 col-md-6",children:(0,n.jsxs)("div",{className:"item-clumn our md-mb50",children:[(0,n.jsx)("a",{href:"#0",className:"logo-brand mb-50",children:(0,n.jsx)("img",{src:"/img/logo-gr.png",alt:""})}),(0,n.jsx)("p",{children:"Sed ut perspiciatis undmnis iste natus error sit voluptatem accusantium dolore udantiuy totam rem aperiam."})]})}),(0,n.jsx)("div",{className:"col-lg-3 col-md-6",children:(0,n.jsxs)("div",{className:"item-clumn links md-mb50",children:[(0,n.jsx)("h5",{className:"title",children:"Resources"}),(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{children:[(0,n.jsx)("span",{className:"icon pe-7s-angle-right"}),(0,n.jsx)("a",{href:"#0",children:"Our Products"})]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("span",{className:"icon pe-7s-angle-right"}),(0,n.jsx)("a",{href:"#0",children:"Blogs & Guides"})]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("span",{className:"icon pe-7s-angle-right"}),(0,n.jsx)("a",{href:"#0",children:"Premium Support"})]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("span",{className:"icon pe-7s-angle-right"}),(0,n.jsx)("a",{href:"#0",children:"Need a Career ?"})]})]})]})}),(0,n.jsx)("div",{className:"col-lg-2 col-md-6",children:(0,n.jsxs)("div",{className:"item-clumn links sm-mb50",children:[(0,n.jsx)("h5",{className:"title",children:"Links"}),(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{children:[(0,n.jsx)("span",{className:"icon pe-7s-angle-right"}),(0,n.jsx)("a",{href:"#0",children:"Support"})]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("span",{className:"icon pe-7s-angle-right"}),(0,n.jsx)("a",{href:"#0",children:"Privacy"})]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("span",{className:"icon pe-7s-angle-right"}),(0,n.jsx)("a",{href:"#0",children:"Setting"})]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("span",{className:"icon pe-7s-angle-right"}),(0,n.jsx)("a",{href:"0",children:"My Account"})]})]})]})}),(0,n.jsx)("div",{className:"col-lg-3 col-md-6",children:(0,n.jsxs)("div",{className:"item-clumn links",children:[(0,n.jsx)("h5",{className:"title mb-30",children:"Contact"}),(0,n.jsxs)("div",{className:"info",children:[(0,n.jsx)("span",{children:"Email Address"}),(0,n.jsx)("h6",{children:(0,n.jsx)("a",{href:"#0",children:"support@gmail.com"})})]}),(0,n.jsxs)("div",{className:"social mt-30",children:[(0,n.jsx)("a",{href:"#0",children:(0,n.jsx)("i",{className:"fab fa-facebook-f"})}),(0,n.jsx)("a",{href:"#0",children:(0,n.jsx)("i",{className:"fab fa-twitter"})}),(0,n.jsx)("a",{href:"#0",children:(0,n.jsx)("i",{className:"fab fa-instagram"})}),(0,n.jsx)("a",{href:"#0",children:(0,n.jsx)("i",{className:"fab fa-youtube"})})]})]})})]})}),(0,n.jsx)("div",{className:"sub-footer",children:(0,n.jsx)("div",{className:"container",children:(0,n.jsx)("div",{className:"row",children:(0,n.jsx)("div",{className:"col-12",children:(0,n.jsx)("div",{className:"text-center",children:(0,n.jsx)("p",{children:"\xa9 2022 Vie. All Rights Reserved"})})})})})}),(0,n.jsx)("div",{className:"circle-blur"}),(0,n.jsx)("div",{className:"circle-blur two"})]})}},2646:function(e,a,r){"use strict";r(7294);var n=r(1664),s=r.n(n),l=r(2806),t=r(7991),i=r(5893);a.Z=function(e){var a=e.lr,r=e.nr,n=e.theme;return(0,i.jsx)("nav",{ref:r,className:"navbar navbar-expand-lg change ".concat("themeL"===n?"light":""),children:(0,i.jsxs)("div",{className:"container",children:[(0,i.jsx)(s(),{href:"/",children:(0,i.jsx)("a",{className:"logo",children:n&&"themeL"===n?(0,i.jsx)("img",{ref:a,src:l.Q1,alt:"logo"}):(0,i.jsx)("img",{ref:a,src:l.E8,alt:"logo"})})}),(0,i.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent",onClick:t._,"aria-expanded":"false","aria-label":"Toggle navigation",children:(0,i.jsx)("span",{className:"icon-bar",children:(0,i.jsx)("i",{className:"fas fa-bars"})})}),(0,i.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:(0,i.jsxs)("ul",{className:"navbar-nav ml-auto",children:[(0,i.jsxs)("li",{className:"nav-item dropdown",onClick:t.z,children:[(0,i.jsx)("span",{className:"nav-link dropdown-toggle","data-toggle":"dropdown",href:"#",role:"button","aria-haspopup":"true","aria-expanded":"false",children:"Home"}),(0,i.jsxs)("div",{className:"dropdown-menu",children:[(0,i.jsx)(s(),{href:"/homepage/home1-dark",children:(0,i.jsx)("a",{className:"dropdown-item",children:"Main Home"})}),(0,i.jsx)(s(),{href:"/homepage/home2-dark",children:(0,i.jsx)("a",{className:"dropdown-item",children:"Creative Agency"})}),(0,i.jsx)(s(),{href:"/homepage/home5-dark",children:(0,i.jsx)("a",{className:"dropdown-item",children:"Digital Agency"})}),(0,i.jsx)(s(),{href:"/homepage/home4-dark",children:(0,i.jsx)("a",{className:"dropdown-item",children:"Business One Page"})}),(0,i.jsx)(s(),{href:"/homepage/home3-dark",children:(0,i.jsx)("a",{className:"dropdown-item",children:"Corporate Business"})}),(0,i.jsx)(s(),{href:"/homepage/home6-dark",children:(0,i.jsx)("a",{className:"dropdown-item",children:"Modern Agency"})}),(0,i.jsx)(s(),{href:"/homepage/home7-dark",children:(0,i.jsx)("a",{className:"dropdown-item",children:"Freelancer"})}),(0,i.jsx)(s(),{href:"/homepage/home8-dark",children:(0,i.jsx)("a",{className:"dropdown-item",children:"Architecture"})})]})]}),(0,i.jsx)("li",{className:"nav-item",children:(0,i.jsx)(s(),{href:"/mobile-app/services-dark",children:(0,i.jsx)("a",{className:"nav-link",children:"Services"})})}),(0,i.jsx)("li",{className:"nav-item",children:(0,i.jsx)(s(),{href:"/mobile-app/pricing-plan-dark",children:(0,i.jsx)("a",{className:"nav-link",children:"Pricing"})})}),(0,i.jsx)("li",{className:"nav-item",children:(0,i.jsx)(s(),{href:"/mobile-app/portfolio-dark",children:(0,i.jsx)("a",{className:"nav-link",children:"Portfolio"})})}),(0,i.jsx)("li",{className:"nav-item",children:(0,i.jsx)(s(),{href:"/mobile-app/shop-dark",children:(0,i.jsx)("a",{className:"nav-link",children:"Products"})})}),(0,i.jsx)("li",{className:"nav-item",children:(0,i.jsx)(s(),{href:"/contact/contact-dark",children:(0,i.jsx)("a",{className:"nav-link",children:"Contact"})})})]})})]})})}},4486:function(e,a,r){"use strict";var n=r(7294),s=r(1664),l=r.n(s),t=r(5893);a.Z=function(e){var a=e.title,r=e.links;return(0,t.jsx)("header",{className:"page-app-header valign bg-img","data-overlay-dark":"8",style:{backgroundImage:"url(/img/mobile-app/p1.jpg)"},children:(0,t.jsx)("div",{className:"container",children:(0,t.jsx)("div",{className:"row",children:(0,t.jsx)("div",{className:"col-12",children:(0,t.jsxs)("div",{className:"text-center",children:[(0,t.jsx)("h1",{children:a}),(0,t.jsx)("div",{className:"links",children:r.map((function(e,a){return(0,t.jsxs)(n.Fragment,{children:[(0,t.jsx)(l(),{href:e.url,children:e.name}),a+1!=r.length?(0,t.jsx)("span",{className:"icon pe-7s-angle-right"}):""]},e.id)}))})]})})})})})}},1664:function(e,a,r){e.exports=r(7913)}}]);