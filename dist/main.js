/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../img/hero.jpg */ "./src/img/hero.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n:root {\n  --color-tow: #eba83a;\n  --color-one: #bb371a;\n  --color-three: #fff8d9;\n  --color-four: #d5dbb3;\n}\n\nbody {\n  height: 100%;\n}\nbody {\n  background-color: var(--color-three);\n  font-family: \"Poppins\", sans-serif;\n  position: relative;\n}\nmain,\n.content {\n  height: 100%;\n  position: relative;\n}\n.icon {\n  height: 25px;\n  width: 25px;\n}\n.show {\n  display: block !important;\n}\n.container {\n  width: 80%;\n  margin: auto;\n  max-width: 900px;\n}\n.btn {\n  border: none;\n  outline: none;\n  font-family: inherit;\n  cursor: pointer;\n}\nheader {\n  background-color: var(--color-one);\n  position: fixed;\n  top: 0;\n  z-index: 2;\n  width: 100%;\n}\n.navbar .container {\n  display: flex;\n  padding: 15px 0;\n  justify-content: space-between;\n  align-items: center;\n  color: var(--color-three);\n}\n.navbar .links {\n  list-style: none;\n  display: flex;\n  gap: 20px;\n}\n.navbar .links .link {\n  text-decoration: none;\n  color: inherit;\n}\n.burger-menu {\n  cursor: pointer;\n  display: none;\n}\n.hero {\n  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  height: 100vh;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: relative;\n}\n.hero-text {\n  position: absolute;\n  width: 100%;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: var(--color-three);\n  text-align: center;\n}\n.hero-text h1 {\n  font-size: 40px;\n  font-weight: 500;\n  margin-bottom: 10px;\n}\n.hero-text .order-now {\n  background-color: var(--color-one);\n  color: var(--color-three);\n  font-weight: 600;\n  padding: 10px 20px;\n  border-radius: 5px;\n}\n.photos {\n  margin: 20px 0;\n  text-align: center;\n}\n.photos h2,\n.menu h2,\n.contact-us h2,\n.about h2 {\n  font-weight: 500;\n  padding-bottom: 10px;\n  color: var(--color-one);\n  border-bottom: 2px solid var(--color-one);\n  display: inline-block;\n}\n.photos .photos-grid {\n  margin-top: 30px;\n  height: 550px;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(3, 1fr);\n  gap: 10px;\n}\n.photos .photos-grid div {\n  background-color: #eba83a;\n  border-radius: 10px;\n  overflow: hidden;\n}\n.photos .photos-grid div img {\n  object-fit: cover;\n  height: 100%;\n  width: 100%;\n}\n.photos .photos-grid div:nth-child(2) {\n  grid-column: span 2;\n}\n.photos .photos-grid div:nth-child(3) {\n  grid-column: span 3;\n}\n.photos .photos-grid div:nth-child(4) {\n  grid-column: span 2;\n}\n/*   Menu Section */\n.menu {\n  margin: 70px 0px;\n  text-align: center;\n}\n.menu h2 {\n  margin-top: 20px;\n}\n.menu .menu-grid {\n  margin-top: 20px;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));\n  gap: 20px;\n}\n.menu .menu-grid > div {\n  height: 160px;\n}\n.burger-card {\n  display: flex;\n  border-radius: 10px;\n  overflow: hidden;\n  background-color: var(--color-four);\n  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;\n}\n.burger-image {\n  flex: 3;\n}\n.burger-card-body {\n  flex: 4;\n  text-align: left;\n  padding: 8px;\n  color: rgb(27, 27, 39);\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.burger-card-body h3 {\n  font-size: 16px;\n  color: var(--color-one);\n}\n.burger-card-body p {\n  text-align: justify;\n  line-height: 1;\n  font-size: 14px;\n}\n.burger-card-body :nth-child(3) {\n  color: var(--color-one);\n  font-weight: 700;\n  margin-top: auto;\n  align-self: flex-end;\n  font-size: 14px;\n}\n.burger-card .burger-image img {\n  height: 180px;\n  width: 100%;\n  object-fit: cover;\n}\n/* Contact Us Section */\n.contact-us {\n  margin: 70px 0px;\n  text-align: center;\n}\n.contact-us h2 {\n  margin-top: 20px;\n}\n.contact-from {\n  margin: 20px auto;\n  width: 100%;\n  max-width: 600px;\n  background-color: var(--color-four);\n  padding: 20px 10px;\n  border-radius: 10px;\n  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;\n}\n.contact-from input,\n.contact-from textarea {\n  border: none;\n  outline: none;\n  font-family: inherit;\n}\n.contact-from textarea {\n  resize: none;\n}\n.contact-from .form-row {\n  display: flex;\n  margin-top: 20px;\n  gap: 10px;\n}\n.contact-from .form-row label {\n  display: block;\n  flex: 1;\n  color: var(--color-one);\n}\n.contact-from .form-row input,\n.contact-from .form-row textarea {\n  flex: 3;\n  border-radius: 5px;\n  padding: 5px 10px;\n  border: 1px solid var(--color-three);\n}\n.contact-from .form-row input:focus,\n.contact-from .form-row textarea:focus {\n  border-color: var(--color-one);\n}\n.contact-from .form-row button {\n  display: block;\n  margin: auto;\n  padding: 10px 20px;\n  background-color: var(--color-one);\n  color: var(--color-three);\n  border-radius: 10px;\n  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;\n}\n.contact-from .form-row button:active {\n  background-color: #a73218;\n}\n/*   About Section  */\n.about {\n  margin: 70px 0px;\n  text-align: center;\n}\n.about h2 {\n  margin-top: 20px;\n}\n.about-container {\n  margin-top: 20px;\n  border-radius: 10px;\n  background-color: var(--color-four);\n  display: flex;\n  overflow: hidden;\n  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;\n}\n.about-image {\n  flex: 1;\n}\n.about-image img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.about-text {\n  padding: 15px;\n  text-align: justify;\n  flex: 2;\n}\n.about-text p {\n  margin-top: 20px;\n}\n/*   Footer Section */\nfooter {\n  position: relative;\n  bottom: 0;\n  width: 100%;\n  text-align: center;\n  padding: 20px;\n  color: var(--color-three);\n  background-color: var(--color-one);\n  font-size: 12px;\n}\nfooter a {\n  text-decoration: none;\n  color: inherit;\n}\n@media screen and (max-width: 480px) {\n  .container {\n    width: 90%;\n  }\n  .navbar .links {\n    display: none;\n    flex-direction: column;\n    background-color: var(--color-one);\n    position: absolute;\n    width: 100%;\n    left: 0;\n    top: 60px;\n    padding: 10px 20px;\n  }\n  .hero-text h1 {\n    font-size: 30px;\n  }\n  .contact-from .form-row {\n    flex-direction: column;\n  }\n  .contact-from .form-row label {\n    text-align: start;\n  }\n  .about-container {\n    flex-direction: column;\n  }\n  .burger-menu {\n    display: block;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;AACxB;AACA;EACE,oBAAoB;EACpB,oBAAoB;EACpB,sBAAsB;EACtB,qBAAqB;AACvB;;AAEA;EACE,YAAY;AACd;AACA;EACE,oCAAoC;EACpC,kCAAkC;EAClC,kBAAkB;AACpB;AACA;;EAEE,YAAY;EACZ,kBAAkB;AACpB;AACA;EACE,YAAY;EACZ,WAAW;AACb;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,UAAU;EACV,YAAY;EACZ,gBAAgB;AAClB;AACA;EACE,YAAY;EACZ,aAAa;EACb,oBAAoB;EACpB,eAAe;AACjB;AACA;EACE,kCAAkC;EAClC,eAAe;EACf,MAAM;EACN,UAAU;EACV,WAAW;AACb;AACA;EACE,aAAa;EACb,eAAe;EACf,8BAA8B;EAC9B,mBAAmB;EACnB,yBAAyB;AAC3B;AACA;EACE,gBAAgB;EAChB,aAAa;EACb,SAAS;AACX;AACA;EACE,qBAAqB;EACrB,cAAc;AAChB;AACA;EACE,eAAe;EACf,aAAa;AACf;AACA;EACE;2CACwB;EACxB,aAAa;EACb,2BAA2B;EAC3B,4BAA4B;EAC5B,sBAAsB;EACtB,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,yBAAyB;EACzB,kBAAkB;AACpB;AACA;EACE,eAAe;EACf,gBAAgB;EAChB,mBAAmB;AACrB;AACA;EACE,kCAAkC;EAClC,yBAAyB;EACzB,gBAAgB;EAChB,kBAAkB;EAClB,kBAAkB;AACpB;AACA;EACE,cAAc;EACd,kBAAkB;AACpB;AACA;;;;EAIE,gBAAgB;EAChB,oBAAoB;EACpB,uBAAuB;EACvB,yCAAyC;EACzC,qBAAqB;AACvB;AACA;EACE,gBAAgB;EAChB,aAAa;EACb,aAAa;EACb,qCAAqC;EACrC,kCAAkC;EAClC,SAAS;AACX;AACA;EACE,yBAAyB;EACzB,mBAAmB;EACnB,gBAAgB;AAClB;AACA;EACE,iBAAiB;EACjB,YAAY;EACZ,WAAW;AACb;AACA;EACE,mBAAmB;AACrB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,mBAAmB;AACrB;AACA,mBAAmB;AACnB;EACE,gBAAgB;EAChB,kBAAkB;AACpB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;EAChB,aAAa;EACb,2DAA2D;EAC3D,SAAS;AACX;AACA;EACE,aAAa;AACf;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,gBAAgB;EAChB,mCAAmC;EACnC,4EAA4E;AAC9E;AACA;EACE,OAAO;AACT;AACA;EACE,OAAO;EACP,gBAAgB;EAChB,YAAY;EACZ,sBAAsB;EACtB,aAAa;EACb,sBAAsB;EACtB,QAAQ;AACV;AACA;EACE,eAAe;EACf,uBAAuB;AACzB;AACA;EACE,mBAAmB;EACnB,cAAc;EACd,eAAe;AACjB;AACA;EACE,uBAAuB;EACvB,gBAAgB;EAChB,gBAAgB;EAChB,oBAAoB;EACpB,eAAe;AACjB;AACA;EACE,aAAa;EACb,WAAW;EACX,iBAAiB;AACnB;AACA,uBAAuB;AACvB;EACE,gBAAgB;EAChB,kBAAkB;AACpB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,iBAAiB;EACjB,WAAW;EACX,gBAAgB;EAChB,mCAAmC;EACnC,kBAAkB;EAClB,mBAAmB;EACnB,4EAA4E;AAC9E;AACA;;EAEE,YAAY;EACZ,aAAa;EACb,oBAAoB;AACtB;AACA;EACE,YAAY;AACd;AACA;EACE,aAAa;EACb,gBAAgB;EAChB,SAAS;AACX;AACA;EACE,cAAc;EACd,OAAO;EACP,uBAAuB;AACzB;AACA;;EAEE,OAAO;EACP,kBAAkB;EAClB,iBAAiB;EACjB,oCAAoC;AACtC;AACA;;EAEE,8BAA8B;AAChC;AACA;EACE,cAAc;EACd,YAAY;EACZ,kBAAkB;EAClB,kCAAkC;EAClC,yBAAyB;EACzB,mBAAmB;EACnB,4EAA4E;AAC9E;AACA;EACE,yBAAyB;AAC3B;AACA,qBAAqB;AACrB;EACE,gBAAgB;EAChB,kBAAkB;AACpB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;EAChB,mBAAmB;EACnB,mCAAmC;EACnC,aAAa;EACb,gBAAgB;EAChB,4EAA4E;AAC9E;AACA;EACE,OAAO;AACT;AACA;EACE,WAAW;EACX,YAAY;EACZ,iBAAiB;AACnB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,OAAO;AACT;AACA;EACE,gBAAgB;AAClB;AACA,qBAAqB;AACrB;EACE,kBAAkB;EAClB,SAAS;EACT,WAAW;EACX,kBAAkB;EAClB,aAAa;EACb,yBAAyB;EACzB,kCAAkC;EAClC,eAAe;AACjB;AACA;EACE,qBAAqB;EACrB,cAAc;AAChB;AACA;EACE;IACE,UAAU;EACZ;EACA;IACE,aAAa;IACb,sBAAsB;IACtB,kCAAkC;IAClC,kBAAkB;IAClB,WAAW;IACX,OAAO;IACP,SAAS;IACT,kBAAkB;EACpB;EACA;IACE,eAAe;EACjB;EACA;IACE,sBAAsB;EACxB;EACA;IACE,iBAAiB;EACnB;EACA;IACE,sBAAsB;EACxB;EACA;IACE,cAAc;EAChB;AACF","sourcesContent":["* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n:root {\n  --color-tow: #eba83a;\n  --color-one: #bb371a;\n  --color-three: #fff8d9;\n  --color-four: #d5dbb3;\n}\n\nbody {\n  height: 100%;\n}\nbody {\n  background-color: var(--color-three);\n  font-family: \"Poppins\", sans-serif;\n  position: relative;\n}\nmain,\n.content {\n  height: 100%;\n  position: relative;\n}\n.icon {\n  height: 25px;\n  width: 25px;\n}\n.show {\n  display: block !important;\n}\n.container {\n  width: 80%;\n  margin: auto;\n  max-width: 900px;\n}\n.btn {\n  border: none;\n  outline: none;\n  font-family: inherit;\n  cursor: pointer;\n}\nheader {\n  background-color: var(--color-one);\n  position: fixed;\n  top: 0;\n  z-index: 2;\n  width: 100%;\n}\n.navbar .container {\n  display: flex;\n  padding: 15px 0;\n  justify-content: space-between;\n  align-items: center;\n  color: var(--color-three);\n}\n.navbar .links {\n  list-style: none;\n  display: flex;\n  gap: 20px;\n}\n.navbar .links .link {\n  text-decoration: none;\n  color: inherit;\n}\n.burger-menu {\n  cursor: pointer;\n  display: none;\n}\n.hero {\n  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),\n    url(\"../img/hero.jpg\");\n  height: 100vh;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: relative;\n}\n.hero-text {\n  position: absolute;\n  width: 100%;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: var(--color-three);\n  text-align: center;\n}\n.hero-text h1 {\n  font-size: 40px;\n  font-weight: 500;\n  margin-bottom: 10px;\n}\n.hero-text .order-now {\n  background-color: var(--color-one);\n  color: var(--color-three);\n  font-weight: 600;\n  padding: 10px 20px;\n  border-radius: 5px;\n}\n.photos {\n  margin: 20px 0;\n  text-align: center;\n}\n.photos h2,\n.menu h2,\n.contact-us h2,\n.about h2 {\n  font-weight: 500;\n  padding-bottom: 10px;\n  color: var(--color-one);\n  border-bottom: 2px solid var(--color-one);\n  display: inline-block;\n}\n.photos .photos-grid {\n  margin-top: 30px;\n  height: 550px;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(3, 1fr);\n  gap: 10px;\n}\n.photos .photos-grid div {\n  background-color: #eba83a;\n  border-radius: 10px;\n  overflow: hidden;\n}\n.photos .photos-grid div img {\n  object-fit: cover;\n  height: 100%;\n  width: 100%;\n}\n.photos .photos-grid div:nth-child(2) {\n  grid-column: span 2;\n}\n.photos .photos-grid div:nth-child(3) {\n  grid-column: span 3;\n}\n.photos .photos-grid div:nth-child(4) {\n  grid-column: span 2;\n}\n/*   Menu Section */\n.menu {\n  margin: 70px 0px;\n  text-align: center;\n}\n.menu h2 {\n  margin-top: 20px;\n}\n.menu .menu-grid {\n  margin-top: 20px;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));\n  gap: 20px;\n}\n.menu .menu-grid > div {\n  height: 160px;\n}\n.burger-card {\n  display: flex;\n  border-radius: 10px;\n  overflow: hidden;\n  background-color: var(--color-four);\n  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;\n}\n.burger-image {\n  flex: 3;\n}\n.burger-card-body {\n  flex: 4;\n  text-align: left;\n  padding: 8px;\n  color: rgb(27, 27, 39);\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.burger-card-body h3 {\n  font-size: 16px;\n  color: var(--color-one);\n}\n.burger-card-body p {\n  text-align: justify;\n  line-height: 1;\n  font-size: 14px;\n}\n.burger-card-body :nth-child(3) {\n  color: var(--color-one);\n  font-weight: 700;\n  margin-top: auto;\n  align-self: flex-end;\n  font-size: 14px;\n}\n.burger-card .burger-image img {\n  height: 180px;\n  width: 100%;\n  object-fit: cover;\n}\n/* Contact Us Section */\n.contact-us {\n  margin: 70px 0px;\n  text-align: center;\n}\n.contact-us h2 {\n  margin-top: 20px;\n}\n.contact-from {\n  margin: 20px auto;\n  width: 100%;\n  max-width: 600px;\n  background-color: var(--color-four);\n  padding: 20px 10px;\n  border-radius: 10px;\n  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;\n}\n.contact-from input,\n.contact-from textarea {\n  border: none;\n  outline: none;\n  font-family: inherit;\n}\n.contact-from textarea {\n  resize: none;\n}\n.contact-from .form-row {\n  display: flex;\n  margin-top: 20px;\n  gap: 10px;\n}\n.contact-from .form-row label {\n  display: block;\n  flex: 1;\n  color: var(--color-one);\n}\n.contact-from .form-row input,\n.contact-from .form-row textarea {\n  flex: 3;\n  border-radius: 5px;\n  padding: 5px 10px;\n  border: 1px solid var(--color-three);\n}\n.contact-from .form-row input:focus,\n.contact-from .form-row textarea:focus {\n  border-color: var(--color-one);\n}\n.contact-from .form-row button {\n  display: block;\n  margin: auto;\n  padding: 10px 20px;\n  background-color: var(--color-one);\n  color: var(--color-three);\n  border-radius: 10px;\n  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;\n}\n.contact-from .form-row button:active {\n  background-color: #a73218;\n}\n/*   About Section  */\n.about {\n  margin: 70px 0px;\n  text-align: center;\n}\n.about h2 {\n  margin-top: 20px;\n}\n.about-container {\n  margin-top: 20px;\n  border-radius: 10px;\n  background-color: var(--color-four);\n  display: flex;\n  overflow: hidden;\n  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;\n}\n.about-image {\n  flex: 1;\n}\n.about-image img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.about-text {\n  padding: 15px;\n  text-align: justify;\n  flex: 2;\n}\n.about-text p {\n  margin-top: 20px;\n}\n/*   Footer Section */\nfooter {\n  position: relative;\n  bottom: 0;\n  width: 100%;\n  text-align: center;\n  padding: 20px;\n  color: var(--color-three);\n  background-color: var(--color-one);\n  font-size: 12px;\n}\nfooter a {\n  text-decoration: none;\n  color: inherit;\n}\n@media screen and (max-width: 480px) {\n  .container {\n    width: 90%;\n  }\n  .navbar .links {\n    display: none;\n    flex-direction: column;\n    background-color: var(--color-one);\n    position: absolute;\n    width: 100%;\n    left: 0;\n    top: 60px;\n    padding: 10px 20px;\n  }\n  .hero-text h1 {\n    font-size: 30px;\n  }\n  .contact-from .form-row {\n    flex-direction: column;\n  }\n  .contact-from .form-row label {\n    text-align: start;\n  }\n  .about-container {\n    flex-direction: column;\n  }\n  .burger-menu {\n    display: block;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/about.js":
/*!*********************************!*\
  !*** ./src/components/about.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer */ "./src/components/footer.js");
/* harmony import */ var _img_about_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/about.jpg */ "./src/img/about.jpg");


const about = () => {
  const main = document.createElement("main");
  const div = document.createElement("div");
  div.classList.add("about");
  const html = `
        <h2>About</h2>
        <div class="container">
          <div class="about-container">
            <div class="about-image">
              <img src="${_img_about_jpg__WEBPACK_IMPORTED_MODULE_1__}" alt="" />
            </div>
            <div class="about-text">
              <p>
                Welcome to Burger Hub, your ultimate destination for delicious
                burgers!
              </p>
              <p>
                At Burger Hub, we pride ourselves on serving the juiciest, most
                mouth-watering burgers in town. Our commitment to quality
                ingredients and exceptional service is what sets us apart from
                the rest.
              </p>
              <p>
                We believe that a great burger starts with great ingredients.
                That's why we source only the freshest, highest-quality beef,
                hand-selected for its flavor and tenderness. Our buns are made
                fresh daily, and we use only the finest toppings and condiments
                to create the perfect burger.
              </p>
              <p>
                But we're more than just a burger joint. At Burger Hub, we're
                all about creating an experience for our customers. Our friendly
                staff is always ready to welcome you with a smile and help you
                choose from our extensive menu of burgers, sides, and drinks.
              </p>
              <p>
                Whether you're craving a classic cheeseburger or something a
                little more adventurous, like our signature "Burger of the
                Month," we've got something for everyone. And if you're looking
                for something a little lighter, we also offer salads and
                vegetarian options.
              </p>
              <p>
                At Burger Hub, we believe in giving back to our community.
                That's why we support local charities and organizations, and
                we're always looking for ways to make a positive impact on the
                world around us.
              </p>
              <p>
                So why not stop by Burger Hub today and experience the best
                burgers in town? We can't wait to serve you!
              </p>
            </div>
          </div>
        </div>
`;
  div.insertAdjacentHTML("afterbegin", html);
  main.appendChild(div);
  main.appendChild((0,_footer__WEBPACK_IMPORTED_MODULE_0__["default"])());

  return main;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (about);


/***/ }),

/***/ "./src/components/burgerCard.js":
/*!**************************************!*\
  !*** ./src/components/burgerCard.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _img_burger_1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/burger-1.jpg */ "./src/img/burger-1.jpg");
/* harmony import */ var _img_burger_2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/burger-2.jpg */ "./src/img/burger-2.jpg");
/* harmony import */ var _img_burger_3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/burger-3.jpg */ "./src/img/burger-3.jpg");
/* harmony import */ var _img_burger_4_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/burger-4.jpg */ "./src/img/burger-4.jpg");
/* harmony import */ var _img_burger_5_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/burger-5.jpg */ "./src/img/burger-5.jpg");
/* harmony import */ var _img_burger_6_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/burger-6.jpg */ "./src/img/burger-6.jpg");
/* harmony import */ var _img_burger_7_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/burger-7.jpg */ "./src/img/burger-7.jpg");
/* harmony import */ var _img_burger_8_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/burger-8.jpg */ "./src/img/burger-8.jpg");








const images = [_img_burger_1_jpg__WEBPACK_IMPORTED_MODULE_0__, _img_burger_2_jpg__WEBPACK_IMPORTED_MODULE_1__, _img_burger_3_jpg__WEBPACK_IMPORTED_MODULE_2__, _img_burger_4_jpg__WEBPACK_IMPORTED_MODULE_3__, _img_burger_5_jpg__WEBPACK_IMPORTED_MODULE_4__, _img_burger_6_jpg__WEBPACK_IMPORTED_MODULE_5__, _img_burger_7_jpg__WEBPACK_IMPORTED_MODULE_6__, _img_burger_8_jpg__WEBPACK_IMPORTED_MODULE_7__];
const burgerCard = (burger, index) => {
  const div = document.createElement("div");
  div.classList.add("burger-card");
  const html = `
  <div class="burger-image">
    <img src="${images[index]}" alt="" />
  </div>
  <div class="burger-card-body">
   <h3>${burger.name}</h3>
   <p>${burger.description}</p>
   <p>$${burger.price} USD</p>
  </div>
`;
  div.insertAdjacentHTML("afterbegin", html);
  return div;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (burgerCard);


/***/ }),

/***/ "./src/components/contactUs.js":
/*!*************************************!*\
  !*** ./src/components/contactUs.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer */ "./src/components/footer.js");

const contactUs = () => {
  const main = document.createElement("main");
  const div = document.createElement("div");
  div.classList.add("contact-us");
  const html = `
  <h2>Contact Us</h2>
  <div class="container">
    <form action="" class="contact-from">
      <div class="form-row">
        <label for="name">Name</label>
        <input type="text" name="name" id="name" placeholder="John Dough" required>
      </div>
      <div class="form-row">
        <label for="email">Email</label>
        <input  type="email"  name="email" id="email" placeholder="example@gamil.com"  required/>
      </div>
      <div class="form-row">
        <label for="msg">Message</label>
        <textarea name="msg" id="msg" cols="30" rows="10" placeholder="Write a message" required></textarea>
      </div>
      <div class="form-row">
        <button type="submit" class="btn">Send</button>
      </div>
    </form>
  </div>
`;
  div.insertAdjacentHTML("afterbegin", html);
  main.appendChild(div);
  main.appendChild((0,_footer__WEBPACK_IMPORTED_MODULE_0__["default"])());

  return main;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactUs);


/***/ }),

/***/ "./src/components/footer.js":
/*!**********************************!*\
  !*** ./src/components/footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const footer = () => {
  const footer = document.createElement("div");
  footer.classList.add("footer");
  const html = `
 `;
  footer.insertAdjacentHTML("afterbegin", html);
  return footer;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (footer);


/***/ }),

/***/ "./src/components/hero.js":
/*!********************************!*\
  !*** ./src/components/hero.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _img_hero_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/hero.jpg */ "./src/img/hero.jpg");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/components/menu.js");


const hero = () => {
  const hero = document.createElement("div");
  hero.classList.add("hero");
  const html = `
  <div class="hero-text">
    <h1>Indulge in the Juiciest, Most Delicious Burgers at Burger Hub - Your Ultimate Burger Destination!</h1>
    <button class="btn order-now">ORDER NOW</button>
  </div>`;
  hero.insertAdjacentHTML("afterbegin", html);
  const button = hero.querySelector(".order-now");
  button.addEventListener("click", () => {
    const content = document.querySelector(".content");
    content.innerHTML = "";
    content.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_1__["default"])());
    console.log("order");
  });
  return hero;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hero);


/***/ }),

/***/ "./src/components/homepage.js":
/*!************************************!*\
  !*** ./src/components/homepage.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _hero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hero */ "./src/components/hero.js");
/* harmony import */ var _photosGrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./photosGrid */ "./src/components/photosGrid.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ "./src/components/footer.js");



const homepage = () => {
  const main = document.createElement("main");
  main.appendChild((0,_hero__WEBPACK_IMPORTED_MODULE_0__["default"])());
  main.appendChild((0,_photosGrid__WEBPACK_IMPORTED_MODULE_1__["default"])());
  main.appendChild((0,_footer__WEBPACK_IMPORTED_MODULE_2__["default"])());

  return main;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homepage);


/***/ }),

/***/ "./src/components/menu.js":
/*!********************************!*\
  !*** ./src/components/menu.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer */ "./src/components/footer.js");
/* harmony import */ var _burgerCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./burgerCard */ "./src/components/burgerCard.js");


const menu = () => {
  const main = document.createElement("main");
  const div = document.createElement("div");
  const container = document.createElement("div");
  const h2 = document.createElement("h2");
  const grid = document.createElement("div");
  div.classList.add("menu");
  container.classList.add("container");
  h2.textContent = "Menu";
  grid.classList.add("menu-grid");
  for (let i = 0; i < burgers.length; i++) {
    grid.appendChild((0,_burgerCard__WEBPACK_IMPORTED_MODULE_1__["default"])(burgers[i], i));
  }
  container.appendChild(h2);
  container.appendChild(grid);
  div.appendChild(container);
  main.appendChild(div);
  main.appendChild((0,_footer__WEBPACK_IMPORTED_MODULE_0__["default"])());

  return main;
};

const burgers = [
  {
    name: "Classic Cheeseburger",
    description:
      "This burger is a classic for a reason. It usually consists of a beef patty, American cheese.",
    price: "8",
  },

  {
    name: "Bacon Cheeseburger",
    description:
      "Similar to the classic cheeseburger, but with the addition of crispy bacon on top of the beef patty.",
    price: "13",
  },

  {
    name: "Veggie Burger",
    description:
      " A vegetarian option, this burger typically includes a patty made of vegetables such as black beans.",
    price: "9",
  },

  {
    name: "BBQ Burger",
    description:
      "This burger includes a beef patty, cheddar cheese, crispy onion rings, and barbecue sauce.",
    price: "14",
  },
  {
    name: "Mushroom Swiss",
    description:
      "This burger includes a beef patty, Swiss cheese, sautéed mushrooms, and sometimes onions.",
    price: "10",
  },
  {
    name: "Double Cheeseburger",
    description:
      "This burger includes two beef patties instead of one, as well as double the amount of cheese and toppings.",
    price: "16",
  },
  {
    name: "Hawaiian Burger",
    description:
      "This burger includes a beef patty, grilled pineapple, teriyaki sauce, and sometimes ham or bacon.",
    price: "11",
  },
  {
    name: "Jalapeno Burger",
    description:
      "This burger includes a beef patty, pepper jack cheese, jalapeno peppers, and sometimes spicy mayo.",
    price: "12",
  },
];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);


/***/ }),

/***/ "./src/components/photosGrid.js":
/*!**************************************!*\
  !*** ./src/components/photosGrid.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _img_grid_photo_1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/grid-photo-1.jpg */ "./src/img/grid-photo-1.jpg");
/* harmony import */ var _img_grid_photo_2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/grid-photo-2.jpg */ "./src/img/grid-photo-2.jpg");
/* harmony import */ var _img_grid_photo_3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/grid-photo-3.jpg */ "./src/img/grid-photo-3.jpg");
/* harmony import */ var _img_grid_photo_4_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/grid-photo-4.jpg */ "./src/img/grid-photo-4.jpg");
/* harmony import */ var _img_grid_photo_5_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/grid-photo-5.jpg */ "./src/img/grid-photo-5.jpg");





const photosGrid = () => {
  const grid = document.createElement("div");
  grid.classList.add("photos");
  const html = `
  <div class="container">
    <h2>Photos</h2>
    <div class="photos-grid">
      <div><img src="${_img_grid_photo_1_jpg__WEBPACK_IMPORTED_MODULE_0__}" alt="" /></div>
      <div><img src="${_img_grid_photo_3_jpg__WEBPACK_IMPORTED_MODULE_2__}" alt="" /></div>
      <div><img src="${_img_grid_photo_2_jpg__WEBPACK_IMPORTED_MODULE_1__}" alt="" /></div>
      <div><img src="${_img_grid_photo_5_jpg__WEBPACK_IMPORTED_MODULE_4__}" alt="" /></div>
      <div><img src="${_img_grid_photo_4_jpg__WEBPACK_IMPORTED_MODULE_3__}" alt="" /></div>
    </div>
  </div>`;
  grid.insertAdjacentHTML("afterbegin", html);
  return grid;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (photosGrid);


/***/ }),

/***/ "./src/img/about.jpg":
/*!***************************!*\
  !*** ./src/img/about.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "72d8327748fb78c44cc0.jpg";

/***/ }),

/***/ "./src/img/burger-1.jpg":
/*!******************************!*\
  !*** ./src/img/burger-1.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9ab82f91d487ce544c28.jpg";

/***/ }),

/***/ "./src/img/burger-2.jpg":
/*!******************************!*\
  !*** ./src/img/burger-2.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9a160b8f45cae8fb91ce.jpg";

/***/ }),

/***/ "./src/img/burger-3.jpg":
/*!******************************!*\
  !*** ./src/img/burger-3.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "07ca0d0c26e30ba5eb36.jpg";

/***/ }),

/***/ "./src/img/burger-4.jpg":
/*!******************************!*\
  !*** ./src/img/burger-4.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6699fa48e05554966670.jpg";

/***/ }),

/***/ "./src/img/burger-5.jpg":
/*!******************************!*\
  !*** ./src/img/burger-5.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "824a1e42b17a11eb6148.jpg";

/***/ }),

/***/ "./src/img/burger-6.jpg":
/*!******************************!*\
  !*** ./src/img/burger-6.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f5e7136aee583cc09938.jpg";

/***/ }),

/***/ "./src/img/burger-7.jpg":
/*!******************************!*\
  !*** ./src/img/burger-7.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ee0e9a3a5ec6526e905c.jpg";

/***/ }),

/***/ "./src/img/burger-8.jpg":
/*!******************************!*\
  !*** ./src/img/burger-8.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "581e42c9bb3089f08af1.jpg";

/***/ }),

/***/ "./src/img/burger-menu.svg":
/*!*********************************!*\
  !*** ./src/img/burger-menu.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "15e683d859658ea10275.svg";

/***/ }),

/***/ "./src/img/grid-photo-1.jpg":
/*!**********************************!*\
  !*** ./src/img/grid-photo-1.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "91b5c13a6e6957cb1cfb.jpg";

/***/ }),

/***/ "./src/img/grid-photo-2.jpg":
/*!**********************************!*\
  !*** ./src/img/grid-photo-2.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d2ced6d4f0527273f093.jpg";

/***/ }),

/***/ "./src/img/grid-photo-3.jpg":
/*!**********************************!*\
  !*** ./src/img/grid-photo-3.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4713d444bb678e2f8922.jpg";

/***/ }),

/***/ "./src/img/grid-photo-4.jpg":
/*!**********************************!*\
  !*** ./src/img/grid-photo-4.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cbb663aef88107cecf9a.jpg";

/***/ }),

/***/ "./src/img/grid-photo-5.jpg":
/*!**********************************!*\
  !*** ./src/img/grid-photo-5.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "da86f3e5506b98c1bab3.jpg";

/***/ }),

/***/ "./src/img/hero.jpg":
/*!**************************!*\
  !*** ./src/img/hero.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "89903477dfb2e7dfd3f6.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/homepage */ "./src/components/homepage.js");
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/menu */ "./src/components/menu.js");
/* harmony import */ var _components_contactUs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/contactUs */ "./src/components/contactUs.js");
/* harmony import */ var _components_about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/about */ "./src/components/about.js");
/* harmony import */ var _src_img_burger_menu_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/img//burger-menu.svg */ "./src/img/burger-menu.svg");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
// Components





// style

const toggleLinks = () => {
  const links = document.querySelector(".links");
  links.classList.toggle("show");
};

const content = document.querySelector(".content");
content.appendChild((0,_components_homepage__WEBPACK_IMPORTED_MODULE_0__["default"])());
const links = document.querySelectorAll(".link");
links.forEach((link) => {
  link.addEventListener("click", () => {
    const tab = link.textContent.toLowerCase();
    content.innerHTML = "";
    if (tab === "home") {
      content.appendChild((0,_components_homepage__WEBPACK_IMPORTED_MODULE_0__["default"])());
    } else if (tab === "menu") {
      content.appendChild((0,_components_menu__WEBPACK_IMPORTED_MODULE_1__["default"])());
    } else if (tab === "contact us") {
      content.appendChild((0,_components_contactUs__WEBPACK_IMPORTED_MODULE_2__["default"])());
    } else if (tab === "about") {
      content.appendChild((0,_components_about__WEBPACK_IMPORTED_MODULE_3__["default"])());
    }
    toggleLinks();
  });
});

const burgerMenu = document.querySelector(".burger-menu");
burgerMenu.addEventListener("click", toggleLinks);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLFFBQVEsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sWUFBWSxNQUFNLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sWUFBWSxNQUFNLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLE1BQU0sVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLFlBQVksTUFBTSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZ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QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxpRUFBZSxJQUFJLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUV1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGtEQUFJLENBQUM7QUFDNUIsdUJBQXVCLGtEQUFJLENBQUM7QUFDNUIsdUJBQXVCLGtEQUFJLENBQUM7QUFDNUIsdUJBQXVCLGtEQUFJLENBQUM7QUFDNUIsdUJBQXVCLGtEQUFJLENBQUM7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxVQUFVLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkIxQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDNkM7QUFDUjtBQUNVO0FBQ1I7QUFDRjtBQUNyQztBQUM0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixnRUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsZ0VBQVE7QUFDbEMsTUFBTTtBQUNOLDBCQUEwQiw0REFBSTtBQUM5QixNQUFNO0FBQ04sMEJBQTBCLGlFQUFTO0FBQ25DLE1BQU07QUFDTiwwQkFBMEIsNkRBQUs7QUFDL0I7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2UvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcz9mZjk0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS8uL3NyYy9jb21wb25lbnRzL2Fib3V0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2UvLi9zcmMvY29tcG9uZW50cy9idXJnZXJDYXJkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2UvLi9zcmMvY29tcG9uZW50cy9jb250YWN0VXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS8uL3NyYy9jb21wb25lbnRzL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlLy4vc3JjL2NvbXBvbmVudHMvaGVyby5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlLy4vc3JjL2NvbXBvbmVudHMvaG9tZXBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS8uL3NyYy9jb21wb25lbnRzL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS8uL3NyYy9jb21wb25lbnRzL3Bob3Rvc0dyaWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9pbWcvaGVyby5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG46cm9vdCB7XFxuICAtLWNvbG9yLXRvdzogI2ViYTgzYTtcXG4gIC0tY29sb3Itb25lOiAjYmIzNzFhO1xcbiAgLS1jb2xvci10aHJlZTogI2ZmZjhkOTtcXG4gIC0tY29sb3ItZm91cjogI2Q1ZGJiMztcXG59XFxuXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItdGhyZWUpO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxubWFpbixcXG4uY29udGVudCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5pY29uIHtcXG4gIGhlaWdodDogMjVweDtcXG4gIHdpZHRoOiAyNXB4O1xcbn1cXG4uc2hvdyB7XFxuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xcbn1cXG4uY29udGFpbmVyIHtcXG4gIHdpZHRoOiA4MCU7XFxuICBtYXJnaW46IGF1dG87XFxuICBtYXgtd2lkdGg6IDkwMHB4O1xcbn1cXG4uYnRuIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLW9uZSk7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICB6LWluZGV4OiAyO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5uYXZiYXIgLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZzogMTVweCAwO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci10aHJlZSk7XFxufVxcbi5uYXZiYXIgLmxpbmtzIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG4ubmF2YmFyIC5saW5rcyAubGluayB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogaW5oZXJpdDtcXG59XFxuLmJ1cmdlci1tZW51IHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5oZXJvIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuNiksIHJnYmEoMCwgMCwgMCwgMC42KSksXFxuICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5oZXJvLXRleHQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRocmVlKTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmhlcm8tdGV4dCBoMSB7XFxuICBmb250LXNpemU6IDQwcHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuLmhlcm8tdGV4dCAub3JkZXItbm93IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLW9uZSk7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItdGhyZWUpO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuLnBob3RvcyB7XFxuICBtYXJnaW46IDIwcHggMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLnBob3RvcyBoMixcXG4ubWVudSBoMixcXG4uY29udGFjdC11cyBoMixcXG4uYWJvdXQgaDIge1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLW9uZSk7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tY29sb3Itb25lKTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuLnBob3RvcyAucGhvdG9zLWdyaWQge1xcbiAgbWFyZ2luLXRvcDogMzBweDtcXG4gIGhlaWdodDogNTUwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDFmcik7XFxuICBnYXA6IDEwcHg7XFxufVxcbi5waG90b3MgLnBob3Rvcy1ncmlkIGRpdiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJhODNhO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5waG90b3MgLnBob3Rvcy1ncmlkIGRpdiBpbWcge1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLnBob3RvcyAucGhvdG9zLWdyaWQgZGl2Om50aC1jaGlsZCgyKSB7XFxuICBncmlkLWNvbHVtbjogc3BhbiAyO1xcbn1cXG4ucGhvdG9zIC5waG90b3MtZ3JpZCBkaXY6bnRoLWNoaWxkKDMpIHtcXG4gIGdyaWQtY29sdW1uOiBzcGFuIDM7XFxufVxcbi5waG90b3MgLnBob3Rvcy1ncmlkIGRpdjpudGgtY2hpbGQoNCkge1xcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcXG59XFxuLyogICBNZW51IFNlY3Rpb24gKi9cXG4ubWVudSB7XFxuICBtYXJnaW46IDcwcHggMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ubWVudSBoMiB7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG4ubWVudSAubWVudS1ncmlkIHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMjBweCwgMWZyKSk7XFxuICBnYXA6IDIwcHg7XFxufVxcbi5tZW51IC5tZW51LWdyaWQgPiBkaXYge1xcbiAgaGVpZ2h0OiAxNjBweDtcXG59XFxuLmJ1cmdlci1jYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWZvdXIpO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEyKSAwcHggMXB4IDNweCwgcmdiYSgwLCAwLCAwLCAwLjI0KSAwcHggMXB4IDJweDtcXG59XFxuLmJ1cmdlci1pbWFnZSB7XFxuICBmbGV4OiAzO1xcbn1cXG4uYnVyZ2VyLWNhcmQtYm9keSB7XFxuICBmbGV4OiA0O1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGNvbG9yOiByZ2IoMjcsIDI3LCAzOSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNHB4O1xcbn1cXG4uYnVyZ2VyLWNhcmQtYm9keSBoMyB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBjb2xvcjogdmFyKC0tY29sb3Itb25lKTtcXG59XFxuLmJ1cmdlci1jYXJkLWJvZHkgcCB7XFxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcbi5idXJnZXItY2FyZC1ib2R5IDpudGgtY2hpbGQoMykge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLW9uZSk7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG4uYnVyZ2VyLWNhcmQgLmJ1cmdlci1pbWFnZSBpbWcge1xcbiAgaGVpZ2h0OiAxODBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxufVxcbi8qIENvbnRhY3QgVXMgU2VjdGlvbiAqL1xcbi5jb250YWN0LXVzIHtcXG4gIG1hcmdpbjogNzBweCAwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5jb250YWN0LXVzIGgyIHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcbi5jb250YWN0LWZyb20ge1xcbiAgbWFyZ2luOiAyMHB4IGF1dG87XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogNjAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1mb3VyKTtcXG4gIHBhZGRpbmc6IDIwcHggMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTIpIDBweCAxcHggM3B4LCByZ2JhKDAsIDAsIDAsIDAuMjQpIDBweCAxcHggMnB4O1xcbn1cXG4uY29udGFjdC1mcm9tIGlucHV0LFxcbi5jb250YWN0LWZyb20gdGV4dGFyZWEge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbn1cXG4uY29udGFjdC1mcm9tIHRleHRhcmVhIHtcXG4gIHJlc2l6ZTogbm9uZTtcXG59XFxuLmNvbnRhY3QtZnJvbSAuZm9ybS1yb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBnYXA6IDEwcHg7XFxufVxcbi5jb250YWN0LWZyb20gLmZvcm0tcm93IGxhYmVsIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZmxleDogMTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1vbmUpO1xcbn1cXG4uY29udGFjdC1mcm9tIC5mb3JtLXJvdyBpbnB1dCxcXG4uY29udGFjdC1mcm9tIC5mb3JtLXJvdyB0ZXh0YXJlYSB7XFxuICBmbGV4OiAzO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci10aHJlZSk7XFxufVxcbi5jb250YWN0LWZyb20gLmZvcm0tcm93IGlucHV0OmZvY3VzLFxcbi5jb250YWN0LWZyb20gLmZvcm0tcm93IHRleHRhcmVhOmZvY3VzIHtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3Itb25lKTtcXG59XFxuLmNvbnRhY3QtZnJvbSAuZm9ybS1yb3cgYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itb25lKTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci10aHJlZSk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEyKSAwcHggMXB4IDNweCwgcmdiYSgwLCAwLCAwLCAwLjI0KSAwcHggMXB4IDJweDtcXG59XFxuLmNvbnRhY3QtZnJvbSAuZm9ybS1yb3cgYnV0dG9uOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTczMjE4O1xcbn1cXG4vKiAgIEFib3V0IFNlY3Rpb24gICovXFxuLmFib3V0IHtcXG4gIG1hcmdpbjogNzBweCAwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5hYm91dCBoMiB7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG4uYWJvdXQtY29udGFpbmVyIHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZm91cik7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xMikgMHB4IDFweCAzcHgsIHJnYmEoMCwgMCwgMCwgMC4yNCkgMHB4IDFweCAycHg7XFxufVxcbi5hYm91dC1pbWFnZSB7XFxuICBmbGV4OiAxO1xcbn1cXG4uYWJvdXQtaW1hZ2UgaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxufVxcbi5hYm91dC10ZXh0IHtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbiAgZmxleDogMjtcXG59XFxuLmFib3V0LXRleHQgcCB7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG4vKiAgIEZvb3RlciBTZWN0aW9uICovXFxuZm9vdGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvdHRvbTogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci10aHJlZSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1vbmUpO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG5mb290ZXIgYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogaW5oZXJpdDtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcXG4gIC5jb250YWluZXIge1xcbiAgICB3aWR0aDogOTAlO1xcbiAgfVxcbiAgLm5hdmJhciAubGlua3Mge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1vbmUpO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IDYwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIH1cXG4gIC5oZXJvLXRleHQgaDEge1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICB9XFxuICAuY29udGFjdC1mcm9tIC5mb3JtLXJvdyB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuICAuY29udGFjdC1mcm9tIC5mb3JtLXJvdyBsYWJlbCB7XFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgfVxcbiAgLmFib3V0LWNvbnRhaW5lciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuICAuYnVyZ2VyLW1lbnUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0Usb0JBQW9CO0VBQ3BCLG9CQUFvQjtFQUNwQixzQkFBc0I7RUFDdEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxvQ0FBb0M7RUFDcEMsa0NBQWtDO0VBQ2xDLGtCQUFrQjtBQUNwQjtBQUNBOztFQUVFLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLGVBQWU7QUFDakI7QUFDQTtFQUNFLGtDQUFrQztFQUNsQyxlQUFlO0VBQ2YsTUFBTTtFQUNOLFVBQVU7RUFDVixXQUFXO0FBQ2I7QUFDQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsU0FBUztBQUNYO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztBQUNoQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7QUFDZjtBQUNB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QW1DO0VBQ25DLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsNEVBQTRFO0FBQzlFO0FBQ0E7RUFDRSxPQUFPO0FBQ1Q7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLE9BQU87QUFDVDtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0EscUJBQXFCO0FBQ3JCO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsa0NBQWtDO0VBQ2xDLGVBQWU7QUFDakI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixrQ0FBa0M7SUFDbEMsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxPQUFPO0lBQ1AsU0FBUztJQUNULGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0Usc0JBQXNCO0VBQ3hCO0VBQ0E7SUFDRSxpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0UsY0FBYztFQUNoQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbjpyb290IHtcXG4gIC0tY29sb3ItdG93OiAjZWJhODNhO1xcbiAgLS1jb2xvci1vbmU6ICNiYjM3MWE7XFxuICAtLWNvbG9yLXRocmVlOiAjZmZmOGQ5O1xcbiAgLS1jb2xvci1mb3VyOiAjZDVkYmIzO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci10aHJlZSk7XFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5tYWluLFxcbi5jb250ZW50IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmljb24ge1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgd2lkdGg6IDI1cHg7XFxufVxcbi5zaG93IHtcXG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XFxufVxcbi5jb250YWluZXIge1xcbiAgd2lkdGg6IDgwJTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIG1heC13aWR0aDogOTAwcHg7XFxufVxcbi5idG4ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itb25lKTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIHotaW5kZXg6IDI7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLm5hdmJhciAuY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nOiAxNXB4IDA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRocmVlKTtcXG59XFxuLm5hdmJhciAubGlua3Mge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDIwcHg7XFxufVxcbi5uYXZiYXIgLmxpbmtzIC5saW5rIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbn1cXG4uYnVyZ2VyLW1lbnUge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmhlcm8ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC42KSwgcmdiYSgwLCAwLCAwLCAwLjYpKSxcXG4gICAgdXJsKFxcXCIuLi9pbWcvaGVyby5qcGdcXFwiKTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmhlcm8tdGV4dCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItdGhyZWUpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uaGVyby10ZXh0IGgxIHtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG4uaGVyby10ZXh0IC5vcmRlci1ub3cge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itb25lKTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci10aHJlZSk7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG4ucGhvdG9zIHtcXG4gIG1hcmdpbjogMjBweCAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ucGhvdG9zIGgyLFxcbi5tZW51IGgyLFxcbi5jb250YWN0LXVzIGgyLFxcbi5hYm91dCBoMiB7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICBjb2xvcjogdmFyKC0tY29sb3Itb25lKTtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1jb2xvci1vbmUpO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4ucGhvdG9zIC5waG90b3MtZ3JpZCB7XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgaGVpZ2h0OiA1NTBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcXG4gIGdhcDogMTBweDtcXG59XFxuLnBob3RvcyAucGhvdG9zLWdyaWQgZGl2IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlYmE4M2E7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLnBob3RvcyAucGhvdG9zLWdyaWQgZGl2IGltZyB7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ucGhvdG9zIC5waG90b3MtZ3JpZCBkaXY6bnRoLWNoaWxkKDIpIHtcXG4gIGdyaWQtY29sdW1uOiBzcGFuIDI7XFxufVxcbi5waG90b3MgLnBob3Rvcy1ncmlkIGRpdjpudGgtY2hpbGQoMykge1xcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMztcXG59XFxuLnBob3RvcyAucGhvdG9zLWdyaWQgZGl2Om50aC1jaGlsZCg0KSB7XFxuICBncmlkLWNvbHVtbjogc3BhbiAyO1xcbn1cXG4vKiAgIE1lbnUgU2VjdGlvbiAqL1xcbi5tZW51IHtcXG4gIG1hcmdpbjogNzBweCAwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5tZW51IGgyIHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcbi5tZW51IC5tZW51LWdyaWQge1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMyMHB4LCAxZnIpKTtcXG4gIGdhcDogMjBweDtcXG59XFxuLm1lbnUgLm1lbnUtZ3JpZCA+IGRpdiB7XFxuICBoZWlnaHQ6IDE2MHB4O1xcbn1cXG4uYnVyZ2VyLWNhcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZm91cik7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTIpIDBweCAxcHggM3B4LCByZ2JhKDAsIDAsIDAsIDAuMjQpIDBweCAxcHggMnB4O1xcbn1cXG4uYnVyZ2VyLWltYWdlIHtcXG4gIGZsZXg6IDM7XFxufVxcbi5idXJnZXItY2FyZC1ib2R5IHtcXG4gIGZsZXg6IDQ7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgcGFkZGluZzogOHB4O1xcbiAgY29sb3I6IHJnYigyNywgMjcsIDM5KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA0cHg7XFxufVxcbi5idXJnZXItY2FyZC1ib2R5IGgzIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1vbmUpO1xcbn1cXG4uYnVyZ2VyLWNhcmQtYm9keSBwIHtcXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuLmJ1cmdlci1jYXJkLWJvZHkgOm50aC1jaGlsZCgzKSB7XFxuICBjb2xvcjogdmFyKC0tY29sb3Itb25lKTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcbi5idXJnZXItY2FyZCAuYnVyZ2VyLWltYWdlIGltZyB7XFxuICBoZWlnaHQ6IDE4MHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG59XFxuLyogQ29udGFjdCBVcyBTZWN0aW9uICovXFxuLmNvbnRhY3QtdXMge1xcbiAgbWFyZ2luOiA3MHB4IDBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmNvbnRhY3QtdXMgaDIge1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuLmNvbnRhY3QtZnJvbSB7XFxuICBtYXJnaW46IDIwcHggYXV0bztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiA2MDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWZvdXIpO1xcbiAgcGFkZGluZzogMjBweCAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xMikgMHB4IDFweCAzcHgsIHJnYmEoMCwgMCwgMCwgMC4yNCkgMHB4IDFweCAycHg7XFxufVxcbi5jb250YWN0LWZyb20gaW5wdXQsXFxuLmNvbnRhY3QtZnJvbSB0ZXh0YXJlYSB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxufVxcbi5jb250YWN0LWZyb20gdGV4dGFyZWEge1xcbiAgcmVzaXplOiBub25lO1xcbn1cXG4uY29udGFjdC1mcm9tIC5mb3JtLXJvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIGdhcDogMTBweDtcXG59XFxuLmNvbnRhY3QtZnJvbSAuZm9ybS1yb3cgbGFiZWwge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBmbGV4OiAxO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLW9uZSk7XFxufVxcbi5jb250YWN0LWZyb20gLmZvcm0tcm93IGlucHV0LFxcbi5jb250YWN0LWZyb20gLmZvcm0tcm93IHRleHRhcmVhIHtcXG4gIGZsZXg6IDM7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLXRocmVlKTtcXG59XFxuLmNvbnRhY3QtZnJvbSAuZm9ybS1yb3cgaW5wdXQ6Zm9jdXMsXFxuLmNvbnRhY3QtZnJvbSAuZm9ybS1yb3cgdGV4dGFyZWE6Zm9jdXMge1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1vbmUpO1xcbn1cXG4uY29udGFjdC1mcm9tIC5mb3JtLXJvdyBidXR0b24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW46IGF1dG87XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1vbmUpO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRocmVlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTIpIDBweCAxcHggM3B4LCByZ2JhKDAsIDAsIDAsIDAuMjQpIDBweCAxcHggMnB4O1xcbn1cXG4uY29udGFjdC1mcm9tIC5mb3JtLXJvdyBidXR0b246YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhNzMyMTg7XFxufVxcbi8qICAgQWJvdXQgU2VjdGlvbiAgKi9cXG4uYWJvdXQge1xcbiAgbWFyZ2luOiA3MHB4IDBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmFib3V0IGgyIHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcbi5hYm91dC1jb250YWluZXIge1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1mb3VyKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEyKSAwcHggMXB4IDNweCwgcmdiYSgwLCAwLCAwLCAwLjI0KSAwcHggMXB4IDJweDtcXG59XFxuLmFib3V0LWltYWdlIHtcXG4gIGZsZXg6IDE7XFxufVxcbi5hYm91dC1pbWFnZSBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG59XFxuLmFib3V0LXRleHQge1xcbiAgcGFkZGluZzogMTVweDtcXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XFxuICBmbGV4OiAyO1xcbn1cXG4uYWJvdXQtdGV4dCBwIHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcbi8qICAgRm9vdGVyIFNlY3Rpb24gKi9cXG5mb290ZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm90dG9tOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRocmVlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLW9uZSk7XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcbmZvb3RlciBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xcbiAgLmNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiA5MCU7XFxuICB9XFxuICAubmF2YmFyIC5saW5rcyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLW9uZSk7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogNjBweDtcXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgfVxcbiAgLmhlcm8tdGV4dCBoMSB7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gIH1cXG4gIC5jb250YWN0LWZyb20gLmZvcm0tcm93IHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG4gIC5jb250YWN0LWZyb20gLmZvcm0tcm93IGxhYmVsIHtcXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuICB9XFxuICAuYWJvdXQtY29udGFpbmVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG4gIC5idXJnZXItbWVudSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBmb290ZXIgZnJvbSBcIi4vZm9vdGVyXCI7XG5pbXBvcnQgaW1nIGZyb20gXCIuLi9pbWcvYWJvdXQuanBnXCI7XG5jb25zdCBhYm91dCA9ICgpID0+IHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkaXYuY2xhc3NMaXN0LmFkZChcImFib3V0XCIpO1xuICBjb25zdCBodG1sID0gYFxuICAgICAgICA8aDI+QWJvdXQ8L2gyPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImFib3V0LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFib3V0LWltYWdlXCI+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtpbWd9XCIgYWx0PVwiXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFib3V0LXRleHRcIj5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgV2VsY29tZSB0byBCdXJnZXIgSHViLCB5b3VyIHVsdGltYXRlIGRlc3RpbmF0aW9uIGZvciBkZWxpY2lvdXNcbiAgICAgICAgICAgICAgICBidXJnZXJzIVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIEF0IEJ1cmdlciBIdWIsIHdlIHByaWRlIG91cnNlbHZlcyBvbiBzZXJ2aW5nIHRoZSBqdWljaWVzdCwgbW9zdFxuICAgICAgICAgICAgICAgIG1vdXRoLXdhdGVyaW5nIGJ1cmdlcnMgaW4gdG93bi4gT3VyIGNvbW1pdG1lbnQgdG8gcXVhbGl0eVxuICAgICAgICAgICAgICAgIGluZ3JlZGllbnRzIGFuZCBleGNlcHRpb25hbCBzZXJ2aWNlIGlzIHdoYXQgc2V0cyB1cyBhcGFydCBmcm9tXG4gICAgICAgICAgICAgICAgdGhlIHJlc3QuXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgV2UgYmVsaWV2ZSB0aGF0IGEgZ3JlYXQgYnVyZ2VyIHN0YXJ0cyB3aXRoIGdyZWF0IGluZ3JlZGllbnRzLlxuICAgICAgICAgICAgICAgIFRoYXQncyB3aHkgd2Ugc291cmNlIG9ubHkgdGhlIGZyZXNoZXN0LCBoaWdoZXN0LXF1YWxpdHkgYmVlZixcbiAgICAgICAgICAgICAgICBoYW5kLXNlbGVjdGVkIGZvciBpdHMgZmxhdm9yIGFuZCB0ZW5kZXJuZXNzLiBPdXIgYnVucyBhcmUgbWFkZVxuICAgICAgICAgICAgICAgIGZyZXNoIGRhaWx5LCBhbmQgd2UgdXNlIG9ubHkgdGhlIGZpbmVzdCB0b3BwaW5ncyBhbmQgY29uZGltZW50c1xuICAgICAgICAgICAgICAgIHRvIGNyZWF0ZSB0aGUgcGVyZmVjdCBidXJnZXIuXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgQnV0IHdlJ3JlIG1vcmUgdGhhbiBqdXN0IGEgYnVyZ2VyIGpvaW50LiBBdCBCdXJnZXIgSHViLCB3ZSdyZVxuICAgICAgICAgICAgICAgIGFsbCBhYm91dCBjcmVhdGluZyBhbiBleHBlcmllbmNlIGZvciBvdXIgY3VzdG9tZXJzLiBPdXIgZnJpZW5kbHlcbiAgICAgICAgICAgICAgICBzdGFmZiBpcyBhbHdheXMgcmVhZHkgdG8gd2VsY29tZSB5b3Ugd2l0aCBhIHNtaWxlIGFuZCBoZWxwIHlvdVxuICAgICAgICAgICAgICAgIGNob29zZSBmcm9tIG91ciBleHRlbnNpdmUgbWVudSBvZiBidXJnZXJzLCBzaWRlcywgYW5kIGRyaW5rcy5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBXaGV0aGVyIHlvdSdyZSBjcmF2aW5nIGEgY2xhc3NpYyBjaGVlc2VidXJnZXIgb3Igc29tZXRoaW5nIGFcbiAgICAgICAgICAgICAgICBsaXR0bGUgbW9yZSBhZHZlbnR1cm91cywgbGlrZSBvdXIgc2lnbmF0dXJlIFwiQnVyZ2VyIG9mIHRoZVxuICAgICAgICAgICAgICAgIE1vbnRoLFwiIHdlJ3ZlIGdvdCBzb21ldGhpbmcgZm9yIGV2ZXJ5b25lLiBBbmQgaWYgeW91J3JlIGxvb2tpbmdcbiAgICAgICAgICAgICAgICBmb3Igc29tZXRoaW5nIGEgbGl0dGxlIGxpZ2h0ZXIsIHdlIGFsc28gb2ZmZXIgc2FsYWRzIGFuZFxuICAgICAgICAgICAgICAgIHZlZ2V0YXJpYW4gb3B0aW9ucy5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBBdCBCdXJnZXIgSHViLCB3ZSBiZWxpZXZlIGluIGdpdmluZyBiYWNrIHRvIG91ciBjb21tdW5pdHkuXG4gICAgICAgICAgICAgICAgVGhhdCdzIHdoeSB3ZSBzdXBwb3J0IGxvY2FsIGNoYXJpdGllcyBhbmQgb3JnYW5pemF0aW9ucywgYW5kXG4gICAgICAgICAgICAgICAgd2UncmUgYWx3YXlzIGxvb2tpbmcgZm9yIHdheXMgdG8gbWFrZSBhIHBvc2l0aXZlIGltcGFjdCBvbiB0aGVcbiAgICAgICAgICAgICAgICB3b3JsZCBhcm91bmQgdXMuXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgU28gd2h5IG5vdCBzdG9wIGJ5IEJ1cmdlciBIdWIgdG9kYXkgYW5kIGV4cGVyaWVuY2UgdGhlIGJlc3RcbiAgICAgICAgICAgICAgICBidXJnZXJzIGluIHRvd24/IFdlIGNhbid0IHdhaXQgdG8gc2VydmUgeW91IVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5gO1xuICBkaXYuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLCBodG1sKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChkaXYpO1xuICBtYWluLmFwcGVuZENoaWxkKGZvb3RlcigpKTtcblxuICByZXR1cm4gbWFpbjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFib3V0O1xuIiwiaW1wb3J0IGltZzEgZnJvbSBcIi4uL2ltZy9idXJnZXItMS5qcGdcIjtcbmltcG9ydCBpbWcyIGZyb20gXCIuLi9pbWcvYnVyZ2VyLTIuanBnXCI7XG5pbXBvcnQgaW1nMyBmcm9tIFwiLi4vaW1nL2J1cmdlci0zLmpwZ1wiO1xuaW1wb3J0IGltZzQgZnJvbSBcIi4uL2ltZy9idXJnZXItNC5qcGdcIjtcbmltcG9ydCBpbWc1IGZyb20gXCIuLi9pbWcvYnVyZ2VyLTUuanBnXCI7XG5pbXBvcnQgaW1nNiBmcm9tIFwiLi4vaW1nL2J1cmdlci02LmpwZ1wiO1xuaW1wb3J0IGltZzcgZnJvbSBcIi4uL2ltZy9idXJnZXItNy5qcGdcIjtcbmltcG9ydCBpbWc4IGZyb20gXCIuLi9pbWcvYnVyZ2VyLTguanBnXCI7XG5jb25zdCBpbWFnZXMgPSBbaW1nMSwgaW1nMiwgaW1nMywgaW1nNCwgaW1nNSwgaW1nNiwgaW1nNywgaW1nOF07XG5jb25zdCBidXJnZXJDYXJkID0gKGJ1cmdlciwgaW5kZXgpID0+IHtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGl2LmNsYXNzTGlzdC5hZGQoXCJidXJnZXItY2FyZFwiKTtcbiAgY29uc3QgaHRtbCA9IGBcbiAgPGRpdiBjbGFzcz1cImJ1cmdlci1pbWFnZVwiPlxuICAgIDxpbWcgc3JjPVwiJHtpbWFnZXNbaW5kZXhdfVwiIGFsdD1cIlwiIC8+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiYnVyZ2VyLWNhcmQtYm9keVwiPlxuICAgPGgzPiR7YnVyZ2VyLm5hbWV9PC9oMz5cbiAgIDxwPiR7YnVyZ2VyLmRlc2NyaXB0aW9ufTwvcD5cbiAgIDxwPiQke2J1cmdlci5wcmljZX0gVVNEPC9wPlxuICA8L2Rpdj5cbmA7XG4gIGRpdi5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsIGh0bWwpO1xuICByZXR1cm4gZGl2O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYnVyZ2VyQ2FyZDtcbiIsImltcG9ydCBmb290ZXIgZnJvbSBcIi4vZm9vdGVyXCI7XG5jb25zdCBjb250YWN0VXMgPSAoKSA9PiB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGl2LmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LXVzXCIpO1xuICBjb25zdCBodG1sID0gYFxuICA8aDI+Q29udGFjdCBVczwvaDI+XG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICA8Zm9ybSBhY3Rpb249XCJcIiBjbGFzcz1cImNvbnRhY3QtZnJvbVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tcm93XCI+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJuYW1lXCI+TmFtZTwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgaWQ9XCJuYW1lXCIgcGxhY2Vob2xkZXI9XCJKb2huIERvdWdoXCIgcmVxdWlyZWQ+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLXJvd1wiPlxuICAgICAgICA8bGFiZWwgZm9yPVwiZW1haWxcIj5FbWFpbDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCAgdHlwZT1cImVtYWlsXCIgIG5hbWU9XCJlbWFpbFwiIGlkPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cImV4YW1wbGVAZ2FtaWwuY29tXCIgIHJlcXVpcmVkLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tcm93XCI+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJtc2dcIj5NZXNzYWdlPC9sYWJlbD5cbiAgICAgICAgPHRleHRhcmVhIG5hbWU9XCJtc2dcIiBpZD1cIm1zZ1wiIGNvbHM9XCIzMFwiIHJvd3M9XCIxMFwiIHBsYWNlaG9sZGVyPVwiV3JpdGUgYSBtZXNzYWdlXCIgcmVxdWlyZWQ+PC90ZXh0YXJlYT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tcm93XCI+XG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuXCI+U2VuZDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9mb3JtPlxuICA8L2Rpdj5cbmA7XG4gIGRpdi5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsIGh0bWwpO1xuICBtYWluLmFwcGVuZENoaWxkKGRpdik7XG4gIG1haW4uYXBwZW5kQ2hpbGQoZm9vdGVyKCkpO1xuXG4gIHJldHVybiBtYWluO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29udGFjdFVzO1xuIiwiY29uc3QgZm9vdGVyID0gKCkgPT4ge1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmb290ZXIuY2xhc3NMaXN0LmFkZChcImZvb3RlclwiKTtcbiAgY29uc3QgaHRtbCA9IGBcbiBgO1xuICBmb290ZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLCBodG1sKTtcbiAgcmV0dXJuIGZvb3Rlcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZvb3RlcjtcbiIsImltcG9ydCBcIi4uL2ltZy9oZXJvLmpwZ1wiO1xuaW1wb3J0IG1lbnUgZnJvbSBcIi4vbWVudVwiO1xuY29uc3QgaGVybyA9ICgpID0+IHtcbiAgY29uc3QgaGVybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhlcm8uY2xhc3NMaXN0LmFkZChcImhlcm9cIik7XG4gIGNvbnN0IGh0bWwgPSBgXG4gIDxkaXYgY2xhc3M9XCJoZXJvLXRleHRcIj5cbiAgICA8aDE+SW5kdWxnZSBpbiB0aGUgSnVpY2llc3QsIE1vc3QgRGVsaWNpb3VzIEJ1cmdlcnMgYXQgQnVyZ2VyIEh1YiAtIFlvdXIgVWx0aW1hdGUgQnVyZ2VyIERlc3RpbmF0aW9uITwvaDE+XG4gICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBvcmRlci1ub3dcIj5PUkRFUiBOT1c8L2J1dHRvbj5cbiAgPC9kaXY+YDtcbiAgaGVyby5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsIGh0bWwpO1xuICBjb25zdCBidXR0b24gPSBoZXJvLnF1ZXJ5U2VsZWN0b3IoXCIub3JkZXItbm93XCIpO1xuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnUoKSk7XG4gICAgY29uc29sZS5sb2coXCJvcmRlclwiKTtcbiAgfSk7XG4gIHJldHVybiBoZXJvO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaGVybztcbiIsImltcG9ydCBoZXJvIGZyb20gXCIuL2hlcm9cIjtcbmltcG9ydCBwaG90b3NHcmlkIGZyb20gXCIuL3Bob3Rvc0dyaWRcIjtcbmltcG9ydCBmb290ZXIgZnJvbSBcIi4vZm9vdGVyXCI7XG5jb25zdCBob21lcGFnZSA9ICgpID0+IHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuICBtYWluLmFwcGVuZENoaWxkKGhlcm8oKSk7XG4gIG1haW4uYXBwZW5kQ2hpbGQocGhvdG9zR3JpZCgpKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChmb290ZXIoKSk7XG5cbiAgcmV0dXJuIG1haW47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBob21lcGFnZTtcbiIsImltcG9ydCBmb290ZXIgZnJvbSBcIi4vZm9vdGVyXCI7XG5pbXBvcnQgYnVyZ2VyQ2FyZCBmcm9tIFwiLi9idXJnZXJDYXJkXCI7XG5jb25zdCBtZW51ID0gKCkgPT4ge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBjb25zdCBncmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGl2LmNsYXNzTGlzdC5hZGQoXCJtZW51XCIpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lclwiKTtcbiAgaDIudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcbiAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwibWVudS1ncmlkXCIpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGJ1cmdlcnMubGVuZ3RoOyBpKyspIHtcbiAgICBncmlkLmFwcGVuZENoaWxkKGJ1cmdlckNhcmQoYnVyZ2Vyc1tpXSwgaSkpO1xuICB9XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoMik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChncmlkKTtcbiAgZGl2LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gIG1haW4uYXBwZW5kQ2hpbGQoZGl2KTtcbiAgbWFpbi5hcHBlbmRDaGlsZChmb290ZXIoKSk7XG5cbiAgcmV0dXJuIG1haW47XG59O1xuXG5jb25zdCBidXJnZXJzID0gW1xuICB7XG4gICAgbmFtZTogXCJDbGFzc2ljIENoZWVzZWJ1cmdlclwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJUaGlzIGJ1cmdlciBpcyBhIGNsYXNzaWMgZm9yIGEgcmVhc29uLiBJdCB1c3VhbGx5IGNvbnNpc3RzIG9mIGEgYmVlZiBwYXR0eSwgQW1lcmljYW4gY2hlZXNlLlwiLFxuICAgIHByaWNlOiBcIjhcIixcbiAgfSxcblxuICB7XG4gICAgbmFtZTogXCJCYWNvbiBDaGVlc2VidXJnZXJcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiU2ltaWxhciB0byB0aGUgY2xhc3NpYyBjaGVlc2VidXJnZXIsIGJ1dCB3aXRoIHRoZSBhZGRpdGlvbiBvZiBjcmlzcHkgYmFjb24gb24gdG9wIG9mIHRoZSBiZWVmIHBhdHR5LlwiLFxuICAgIHByaWNlOiBcIjEzXCIsXG4gIH0sXG5cbiAge1xuICAgIG5hbWU6IFwiVmVnZ2llIEJ1cmdlclwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCIgQSB2ZWdldGFyaWFuIG9wdGlvbiwgdGhpcyBidXJnZXIgdHlwaWNhbGx5IGluY2x1ZGVzIGEgcGF0dHkgbWFkZSBvZiB2ZWdldGFibGVzIHN1Y2ggYXMgYmxhY2sgYmVhbnMuXCIsXG4gICAgcHJpY2U6IFwiOVwiLFxuICB9LFxuXG4gIHtcbiAgICBuYW1lOiBcIkJCUSBCdXJnZXJcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiVGhpcyBidXJnZXIgaW5jbHVkZXMgYSBiZWVmIHBhdHR5LCBjaGVkZGFyIGNoZWVzZSwgY3Jpc3B5IG9uaW9uIHJpbmdzLCBhbmQgYmFyYmVjdWUgc2F1Y2UuXCIsXG4gICAgcHJpY2U6IFwiMTRcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiTXVzaHJvb20gU3dpc3NcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiVGhpcyBidXJnZXIgaW5jbHVkZXMgYSBiZWVmIHBhdHR5LCBTd2lzcyBjaGVlc2UsIHNhdXTDqWVkIG11c2hyb29tcywgYW5kIHNvbWV0aW1lcyBvbmlvbnMuXCIsXG4gICAgcHJpY2U6IFwiMTBcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiRG91YmxlIENoZWVzZWJ1cmdlclwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJUaGlzIGJ1cmdlciBpbmNsdWRlcyB0d28gYmVlZiBwYXR0aWVzIGluc3RlYWQgb2Ygb25lLCBhcyB3ZWxsIGFzIGRvdWJsZSB0aGUgYW1vdW50IG9mIGNoZWVzZSBhbmQgdG9wcGluZ3MuXCIsXG4gICAgcHJpY2U6IFwiMTZcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiSGF3YWlpYW4gQnVyZ2VyXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIlRoaXMgYnVyZ2VyIGluY2x1ZGVzIGEgYmVlZiBwYXR0eSwgZ3JpbGxlZCBwaW5lYXBwbGUsIHRlcml5YWtpIHNhdWNlLCBhbmQgc29tZXRpbWVzIGhhbSBvciBiYWNvbi5cIixcbiAgICBwcmljZTogXCIxMVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJKYWxhcGVubyBCdXJnZXJcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiVGhpcyBidXJnZXIgaW5jbHVkZXMgYSBiZWVmIHBhdHR5LCBwZXBwZXIgamFjayBjaGVlc2UsIGphbGFwZW5vIHBlcHBlcnMsIGFuZCBzb21ldGltZXMgc3BpY3kgbWF5by5cIixcbiAgICBwcmljZTogXCIxMlwiLFxuICB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgbWVudTtcbiIsImltcG9ydCBpbWcxIGZyb20gXCIuLi9pbWcvZ3JpZC1waG90by0xLmpwZ1wiO1xuaW1wb3J0IGltZzIgZnJvbSBcIi4uL2ltZy9ncmlkLXBob3RvLTIuanBnXCI7XG5pbXBvcnQgaW1nMyBmcm9tIFwiLi4vaW1nL2dyaWQtcGhvdG8tMy5qcGdcIjtcbmltcG9ydCBpbWc0IGZyb20gXCIuLi9pbWcvZ3JpZC1waG90by00LmpwZ1wiO1xuaW1wb3J0IGltZzUgZnJvbSBcIi4uL2ltZy9ncmlkLXBob3RvLTUuanBnXCI7XG5jb25zdCBwaG90b3NHcmlkID0gKCkgPT4ge1xuICBjb25zdCBncmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZ3JpZC5jbGFzc0xpc3QuYWRkKFwicGhvdG9zXCIpO1xuICBjb25zdCBodG1sID0gYFxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgPGgyPlBob3RvczwvaDI+XG4gICAgPGRpdiBjbGFzcz1cInBob3Rvcy1ncmlkXCI+XG4gICAgICA8ZGl2PjxpbWcgc3JjPVwiJHtpbWcxfVwiIGFsdD1cIlwiIC8+PC9kaXY+XG4gICAgICA8ZGl2PjxpbWcgc3JjPVwiJHtpbWczfVwiIGFsdD1cIlwiIC8+PC9kaXY+XG4gICAgICA8ZGl2PjxpbWcgc3JjPVwiJHtpbWcyfVwiIGFsdD1cIlwiIC8+PC9kaXY+XG4gICAgICA8ZGl2PjxpbWcgc3JjPVwiJHtpbWc1fVwiIGFsdD1cIlwiIC8+PC9kaXY+XG4gICAgICA8ZGl2PjxpbWcgc3JjPVwiJHtpbWc0fVwiIGFsdD1cIlwiIC8+PC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PmA7XG4gIGdyaWQuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLCBodG1sKTtcbiAgcmV0dXJuIGdyaWQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwaG90b3NHcmlkO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8vIENvbXBvbmVudHNcbmltcG9ydCBob21lcGFnZSBmcm9tIFwiLi9jb21wb25lbnRzL2hvbWVwYWdlXCI7XG5pbXBvcnQgbWVudSBmcm9tIFwiLi9jb21wb25lbnRzL21lbnVcIjtcbmltcG9ydCBjb250YWN0VXMgZnJvbSBcIi4vY29tcG9uZW50cy9jb250YWN0VXNcIjtcbmltcG9ydCBhYm91dCBmcm9tIFwiLi9jb21wb25lbnRzL2Fib3V0XCI7XG5pbXBvcnQgXCIuLi9zcmMvaW1nLy9idXJnZXItbWVudS5zdmdcIjtcbi8vIHN0eWxlXG5pbXBvcnQgXCIuL3N0eWxlcy9zdHlsZS5jc3NcIjtcbmNvbnN0IHRvZ2dsZUxpbmtzID0gKCkgPT4ge1xuICBjb25zdCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGlua3NcIik7XG4gIGxpbmtzLmNsYXNzTGlzdC50b2dnbGUoXCJzaG93XCIpO1xufTtcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcbmNvbnRlbnQuYXBwZW5kQ2hpbGQoaG9tZXBhZ2UoKSk7XG5jb25zdCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGlua1wiKTtcbmxpbmtzLmZvckVhY2goKGxpbmspID0+IHtcbiAgbGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHRhYiA9IGxpbmsudGV4dENvbnRlbnQudG9Mb3dlckNhc2UoKTtcbiAgICBjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XG4gICAgaWYgKHRhYiA9PT0gXCJob21lXCIpIHtcbiAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaG9tZXBhZ2UoKSk7XG4gICAgfSBlbHNlIGlmICh0YWIgPT09IFwibWVudVwiKSB7XG4gICAgICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnUoKSk7XG4gICAgfSBlbHNlIGlmICh0YWIgPT09IFwiY29udGFjdCB1c1wiKSB7XG4gICAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhY3RVcygpKTtcbiAgICB9IGVsc2UgaWYgKHRhYiA9PT0gXCJhYm91dFwiKSB7XG4gICAgICBjb250ZW50LmFwcGVuZENoaWxkKGFib3V0KCkpO1xuICAgIH1cbiAgICB0b2dnbGVMaW5rcygpO1xuICB9KTtcbn0pO1xuXG5jb25zdCBidXJnZXJNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXJnZXItbWVudVwiKTtcbmJ1cmdlck1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZUxpbmtzKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==