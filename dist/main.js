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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n:root {\n  --color-tow: #eba83a;\n  --color-one: #bb371a;\n  --color-three: #fff8d9;\n  --color-four: #d5dbb3;\n}\n\nbody {\n  height: 100%;\n}\nbody {\n  background-color: var(--color-three);\n  font-family: \"Poppins\", sans-serif;\n  position: relative;\n}\nmain,\n.content {\n  height: 100%;\n  position: relative;\n}\n.hidden {\n  display: none;\n}\n.container {\n  width: 80%;\n  margin: auto;\n  max-width: 900px;\n}\n.btn {\n  border: none;\n  outline: none;\n  font-family: inherit;\n  cursor: pointer;\n}\nheader {\n  background-color: var(--color-one);\n  position: fixed;\n  top: 0;\n  z-index: 2;\n  width: 100%;\n}\n.navbar .container {\n  display: flex;\n  padding: 15px 0;\n  justify-content: space-between;\n  align-items: center;\n  color: var(--color-three);\n}\n.navbar .links {\n  list-style: none;\n  display: flex;\n  gap: 20px;\n}\n.navbar .links .link {\n  text-decoration: none;\n  color: inherit;\n}\n.hero {\n  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  height: 100vh;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: relative;\n}\n.hero-text {\n  position: absolute;\n  width: 100%;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: var(--color-three);\n  text-align: center;\n}\n.hero-text h1 {\n  font-size: 40px;\n  font-weight: 500;\n  margin-bottom: 10px;\n}\n.hero-text .order-now {\n  background-color: var(--color-one);\n  color: var(--color-three);\n  font-weight: 600;\n  padding: 10px 20px;\n  border-radius: 5px;\n}\n.photos {\n  margin: 20px 0;\n  text-align: center;\n}\n.photos h2,\n.menu h2,\n.contact-us h2,\n.about h2 {\n  font-weight: 500;\n  padding-bottom: 10px;\n  color: var(--color-one);\n  border-bottom: 2px solid var(--color-one);\n  display: inline-block;\n}\n.photos .photos-grid {\n  margin-top: 30px;\n  height: 550px;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(3, 1fr);\n  gap: 10px;\n}\n.photos .photos-grid div {\n  background-color: #eba83a;\n  border-radius: 10px;\n  overflow: hidden;\n}\n.photos .photos-grid div img {\n  object-fit: cover;\n  height: 100%;\n  width: 100%;\n}\n.photos .photos-grid div:nth-child(2) {\n  grid-column: span 2;\n}\n.photos .photos-grid div:nth-child(3) {\n  grid-column: span 3;\n}\n.photos .photos-grid div:nth-child(4) {\n  grid-column: span 2;\n}\n/*   Menu Section */\n.menu {\n  margin: 70px 0px;\n  text-align: center;\n}\n.menu h2 {\n  margin-top: 20px;\n}\n.menu .menu-grid {\n  margin-top: 20px;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));\n  gap: 20px;\n}\n.menu .menu-grid > div {\n  height: 160px;\n}\n.burger-card {\n  display: flex;\n  border-radius: 10px;\n  overflow: hidden;\n  background-color: var(--color-four);\n  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;\n}\n.burger-image {\n  flex: 3;\n}\n.burger-card-body {\n  flex: 4;\n  text-align: left;\n  padding: 8px;\n  color: rgb(27, 27, 39);\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.burger-card-body h3 {\n  font-size: 16px;\n  color: var(--color-one);\n}\n.burger-card-body p {\n  text-align: justify;\n  line-height: 1;\n  font-size: 14px;\n}\n.burger-card-body :nth-child(3) {\n  color: var(--color-one);\n  font-weight: 700;\n  margin-top: auto;\n  align-self: flex-end;\n  font-size: 14px;\n}\n.burger-card .burger-image img {\n  height: 180px;\n  width: 100%;\n  object-fit: cover;\n}\n/* Contact Us Section */\n.contact-us {\n  margin: 70px 0px;\n  text-align: center;\n}\n.contact-us h2 {\n  margin-top: 20px;\n}\n.contact-from {\n  margin: 20px auto;\n  width: 100%;\n  max-width: 600px;\n  background-color: var(--color-four);\n  padding: 20px 10px;\n  border-radius: 10px;\n  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;\n}\n.contact-from input,\n.contact-from textarea {\n  border: none;\n  outline: none;\n  font-family: inherit;\n}\n.contact-from textarea {\n  resize: none;\n}\n.contact-from .form-row {\n  display: flex;\n  margin-top: 20px;\n  gap: 10px;\n}\n.contact-from .form-row label {\n  display: block;\n  flex: 1;\n  color: var(--color-one);\n}\n.contact-from .form-row input,\n.contact-from .form-row textarea {\n  flex: 3;\n  border-radius: 5px;\n  padding: 5px 10px;\n  border: 1px solid var(--color-three);\n}\n.contact-from .form-row input:focus,\n.contact-from .form-row textarea:focus {\n  border-color: var(--color-one);\n}\n.contact-from .form-row button {\n  display: block;\n  margin: auto;\n  padding: 10px 20px;\n  background-color: var(--color-one);\n  color: var(--color-three);\n  border-radius: 10px;\n  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;\n}\n.contact-from .form-row button:active {\n  background-color: #a73218;\n}\n/*   About Section  */\n.about {\n  margin: 70px 0px;\n  text-align: center;\n}\n.about h2 {\n  margin-top: 20px;\n}\n.about-container {\n  margin-top: 20px;\n  border-radius: 10px;\n  background-color: var(--color-four);\n  display: flex;\n  overflow: hidden;\n  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;\n}\n.about-image {\n  flex: 1;\n}\n.about-image img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.about-text {\n  padding: 15px;\n  text-align: justify;\n  flex: 2;\n}\n.about-text p {\n  margin-top: 20px;\n}\n/*   Footer Section */\nfooter {\n  position: relative;\n  bottom: 0;\n  width: 100%;\n  text-align: center;\n  padding: 20px;\n  color: var(--color-three);\n  background-color: var(--color-one);\n  font-size: 12px;\n}\nfooter a {\n  text-decoration: none;\n  color: inherit;\n}\n@media screen and (max-width: 480px) {\n  .container {\n    width: 90%;\n  }\n  .navbar .links {\n    display: none;\n  }\n  .hero-text h1 {\n    font-size: 30px;\n  }\n  .contact-from .form-row {\n    flex-direction: column;\n  }\n  .contact-from .form-row label {\n    text-align: start;\n  }\n  .about-container {\n    flex-direction: column;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;AACxB;AACA;EACE,oBAAoB;EACpB,oBAAoB;EACpB,sBAAsB;EACtB,qBAAqB;AACvB;;AAEA;EACE,YAAY;AACd;AACA;EACE,oCAAoC;EACpC,kCAAkC;EAClC,kBAAkB;AACpB;AACA;;EAEE,YAAY;EACZ,kBAAkB;AACpB;AACA;EACE,aAAa;AACf;AACA;EACE,UAAU;EACV,YAAY;EACZ,gBAAgB;AAClB;AACA;EACE,YAAY;EACZ,aAAa;EACb,oBAAoB;EACpB,eAAe;AACjB;AACA;EACE,kCAAkC;EAClC,eAAe;EACf,MAAM;EACN,UAAU;EACV,WAAW;AACb;AACA;EACE,aAAa;EACb,eAAe;EACf,8BAA8B;EAC9B,mBAAmB;EACnB,yBAAyB;AAC3B;AACA;EACE,gBAAgB;EAChB,aAAa;EACb,SAAS;AACX;AACA;EACE,qBAAqB;EACrB,cAAc;AAChB;AACA;EACE;2CACwB;EACxB,aAAa;EACb,2BAA2B;EAC3B,4BAA4B;EAC5B,sBAAsB;EACtB,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,yBAAyB;EACzB,kBAAkB;AACpB;AACA;EACE,eAAe;EACf,gBAAgB;EAChB,mBAAmB;AACrB;AACA;EACE,kCAAkC;EAClC,yBAAyB;EACzB,gBAAgB;EAChB,kBAAkB;EAClB,kBAAkB;AACpB;AACA;EACE,cAAc;EACd,kBAAkB;AACpB;AACA;;;;EAIE,gBAAgB;EAChB,oBAAoB;EACpB,uBAAuB;EACvB,yCAAyC;EACzC,qBAAqB;AACvB;AACA;EACE,gBAAgB;EAChB,aAAa;EACb,aAAa;EACb,qCAAqC;EACrC,kCAAkC;EAClC,SAAS;AACX;AACA;EACE,yBAAyB;EACzB,mBAAmB;EACnB,gBAAgB;AAClB;AACA;EACE,iBAAiB;EACjB,YAAY;EACZ,WAAW;AACb;AACA;EACE,mBAAmB;AACrB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,mBAAmB;AACrB;AACA,mBAAmB;AACnB;EACE,gBAAgB;EAChB,kBAAkB;AACpB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;EAChB,aAAa;EACb,2DAA2D;EAC3D,SAAS;AACX;AACA;EACE,aAAa;AACf;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,gBAAgB;EAChB,mCAAmC;EACnC,4EAA4E;AAC9E;AACA;EACE,OAAO;AACT;AACA;EACE,OAAO;EACP,gBAAgB;EAChB,YAAY;EACZ,sBAAsB;EACtB,aAAa;EACb,sBAAsB;EACtB,QAAQ;AACV;AACA;EACE,eAAe;EACf,uBAAuB;AACzB;AACA;EACE,mBAAmB;EACnB,cAAc;EACd,eAAe;AACjB;AACA;EACE,uBAAuB;EACvB,gBAAgB;EAChB,gBAAgB;EAChB,oBAAoB;EACpB,eAAe;AACjB;AACA;EACE,aAAa;EACb,WAAW;EACX,iBAAiB;AACnB;AACA,uBAAuB;AACvB;EACE,gBAAgB;EAChB,kBAAkB;AACpB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,iBAAiB;EACjB,WAAW;EACX,gBAAgB;EAChB,mCAAmC;EACnC,kBAAkB;EAClB,mBAAmB;EACnB,4EAA4E;AAC9E;AACA;;EAEE,YAAY;EACZ,aAAa;EACb,oBAAoB;AACtB;AACA;EACE,YAAY;AACd;AACA;EACE,aAAa;EACb,gBAAgB;EAChB,SAAS;AACX;AACA;EACE,cAAc;EACd,OAAO;EACP,uBAAuB;AACzB;AACA;;EAEE,OAAO;EACP,kBAAkB;EAClB,iBAAiB;EACjB,oCAAoC;AACtC;AACA;;EAEE,8BAA8B;AAChC;AACA;EACE,cAAc;EACd,YAAY;EACZ,kBAAkB;EAClB,kCAAkC;EAClC,yBAAyB;EACzB,mBAAmB;EACnB,4EAA4E;AAC9E;AACA;EACE,yBAAyB;AAC3B;AACA,qBAAqB;AACrB;EACE,gBAAgB;EAChB,kBAAkB;AACpB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;EAChB,mBAAmB;EACnB,mCAAmC;EACnC,aAAa;EACb,gBAAgB;EAChB,4EAA4E;AAC9E;AACA;EACE,OAAO;AACT;AACA;EACE,WAAW;EACX,YAAY;EACZ,iBAAiB;AACnB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,OAAO;AACT;AACA;EACE,gBAAgB;AAClB;AACA,qBAAqB;AACrB;EACE,kBAAkB;EAClB,SAAS;EACT,WAAW;EACX,kBAAkB;EAClB,aAAa;EACb,yBAAyB;EACzB,kCAAkC;EAClC,eAAe;AACjB;AACA;EACE,qBAAqB;EACrB,cAAc;AAChB;AACA;EACE;IACE,UAAU;EACZ;EACA;IACE,aAAa;EACf;EACA;IACE,eAAe;EACjB;EACA;IACE,sBAAsB;EACxB;EACA;IACE,iBAAiB;EACnB;EACA;IACE,sBAAsB;EACxB;AACF","sourcesContent":["* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n:root {\n  --color-tow: #eba83a;\n  --color-one: #bb371a;\n  --color-three: #fff8d9;\n  --color-four: #d5dbb3;\n}\n\nbody {\n  height: 100%;\n}\nbody {\n  background-color: var(--color-three);\n  font-family: \"Poppins\", sans-serif;\n  position: relative;\n}\nmain,\n.content {\n  height: 100%;\n  position: relative;\n}\n.hidden {\n  display: none;\n}\n.container {\n  width: 80%;\n  margin: auto;\n  max-width: 900px;\n}\n.btn {\n  border: none;\n  outline: none;\n  font-family: inherit;\n  cursor: pointer;\n}\nheader {\n  background-color: var(--color-one);\n  position: fixed;\n  top: 0;\n  z-index: 2;\n  width: 100%;\n}\n.navbar .container {\n  display: flex;\n  padding: 15px 0;\n  justify-content: space-between;\n  align-items: center;\n  color: var(--color-three);\n}\n.navbar .links {\n  list-style: none;\n  display: flex;\n  gap: 20px;\n}\n.navbar .links .link {\n  text-decoration: none;\n  color: inherit;\n}\n.hero {\n  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),\n    url(\"../img/hero.jpg\");\n  height: 100vh;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: relative;\n}\n.hero-text {\n  position: absolute;\n  width: 100%;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: var(--color-three);\n  text-align: center;\n}\n.hero-text h1 {\n  font-size: 40px;\n  font-weight: 500;\n  margin-bottom: 10px;\n}\n.hero-text .order-now {\n  background-color: var(--color-one);\n  color: var(--color-three);\n  font-weight: 600;\n  padding: 10px 20px;\n  border-radius: 5px;\n}\n.photos {\n  margin: 20px 0;\n  text-align: center;\n}\n.photos h2,\n.menu h2,\n.contact-us h2,\n.about h2 {\n  font-weight: 500;\n  padding-bottom: 10px;\n  color: var(--color-one);\n  border-bottom: 2px solid var(--color-one);\n  display: inline-block;\n}\n.photos .photos-grid {\n  margin-top: 30px;\n  height: 550px;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(3, 1fr);\n  gap: 10px;\n}\n.photos .photos-grid div {\n  background-color: #eba83a;\n  border-radius: 10px;\n  overflow: hidden;\n}\n.photos .photos-grid div img {\n  object-fit: cover;\n  height: 100%;\n  width: 100%;\n}\n.photos .photos-grid div:nth-child(2) {\n  grid-column: span 2;\n}\n.photos .photos-grid div:nth-child(3) {\n  grid-column: span 3;\n}\n.photos .photos-grid div:nth-child(4) {\n  grid-column: span 2;\n}\n/*   Menu Section */\n.menu {\n  margin: 70px 0px;\n  text-align: center;\n}\n.menu h2 {\n  margin-top: 20px;\n}\n.menu .menu-grid {\n  margin-top: 20px;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));\n  gap: 20px;\n}\n.menu .menu-grid > div {\n  height: 160px;\n}\n.burger-card {\n  display: flex;\n  border-radius: 10px;\n  overflow: hidden;\n  background-color: var(--color-four);\n  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;\n}\n.burger-image {\n  flex: 3;\n}\n.burger-card-body {\n  flex: 4;\n  text-align: left;\n  padding: 8px;\n  color: rgb(27, 27, 39);\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.burger-card-body h3 {\n  font-size: 16px;\n  color: var(--color-one);\n}\n.burger-card-body p {\n  text-align: justify;\n  line-height: 1;\n  font-size: 14px;\n}\n.burger-card-body :nth-child(3) {\n  color: var(--color-one);\n  font-weight: 700;\n  margin-top: auto;\n  align-self: flex-end;\n  font-size: 14px;\n}\n.burger-card .burger-image img {\n  height: 180px;\n  width: 100%;\n  object-fit: cover;\n}\n/* Contact Us Section */\n.contact-us {\n  margin: 70px 0px;\n  text-align: center;\n}\n.contact-us h2 {\n  margin-top: 20px;\n}\n.contact-from {\n  margin: 20px auto;\n  width: 100%;\n  max-width: 600px;\n  background-color: var(--color-four);\n  padding: 20px 10px;\n  border-radius: 10px;\n  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;\n}\n.contact-from input,\n.contact-from textarea {\n  border: none;\n  outline: none;\n  font-family: inherit;\n}\n.contact-from textarea {\n  resize: none;\n}\n.contact-from .form-row {\n  display: flex;\n  margin-top: 20px;\n  gap: 10px;\n}\n.contact-from .form-row label {\n  display: block;\n  flex: 1;\n  color: var(--color-one);\n}\n.contact-from .form-row input,\n.contact-from .form-row textarea {\n  flex: 3;\n  border-radius: 5px;\n  padding: 5px 10px;\n  border: 1px solid var(--color-three);\n}\n.contact-from .form-row input:focus,\n.contact-from .form-row textarea:focus {\n  border-color: var(--color-one);\n}\n.contact-from .form-row button {\n  display: block;\n  margin: auto;\n  padding: 10px 20px;\n  background-color: var(--color-one);\n  color: var(--color-three);\n  border-radius: 10px;\n  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;\n}\n.contact-from .form-row button:active {\n  background-color: #a73218;\n}\n/*   About Section  */\n.about {\n  margin: 70px 0px;\n  text-align: center;\n}\n.about h2 {\n  margin-top: 20px;\n}\n.about-container {\n  margin-top: 20px;\n  border-radius: 10px;\n  background-color: var(--color-four);\n  display: flex;\n  overflow: hidden;\n  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;\n}\n.about-image {\n  flex: 1;\n}\n.about-image img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.about-text {\n  padding: 15px;\n  text-align: justify;\n  flex: 2;\n}\n.about-text p {\n  margin-top: 20px;\n}\n/*   Footer Section */\nfooter {\n  position: relative;\n  bottom: 0;\n  width: 100%;\n  text-align: center;\n  padding: 20px;\n  color: var(--color-three);\n  background-color: var(--color-one);\n  font-size: 12px;\n}\nfooter a {\n  text-decoration: none;\n  color: inherit;\n}\n@media screen and (max-width: 480px) {\n  .container {\n    width: 90%;\n  }\n  .navbar .links {\n    display: none;\n  }\n  .hero-text h1 {\n    font-size: 30px;\n  }\n  .contact-from .form-row {\n    flex-direction: column;\n  }\n  .contact-from .form-row label {\n    text-align: start;\n  }\n  .about-container {\n    flex-direction: column;\n  }\n}\n"],"sourceRoot":""}]);
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

const hero = () => {
  const hero = document.createElement("div");
  hero.classList.add("hero");
  const html = `
  <div class="hero-text">
    <h1>Indulge in the Juiciest, Most Delicious Burgers at Burger Hub - Your Ultimate Burger Destination!</h1>
    <button class="btn order-now">ORDER NOW</button>
  </div>`;
  hero.insertAdjacentHTML("afterbegin", html);
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
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
// Components




// style


const content = document.querySelector(".content");
content.appendChild((0,_components_homepage__WEBPACK_IMPORTED_MODULE_0__["default"])());
const links = document.querySelectorAll(".link");
links.forEach((link) => {
  link.addEventListener("click", () => {
    const tab = link.textContent.toLowerCase();
    console.log(tab);
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
  });
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sWUFBWSxNQUFNLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sWUFBWSxNQUFNLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLE1BQU0sVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLFlBQVksTUFBTSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksTUFBTSxZQUFZLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUss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QUM5QixNQUFNO0FBQ04sMEJBQTBCLGlFQUFTO0FBQ25DLE1BQU07QUFDTiwwQkFBMEIsNkRBQUs7QUFDL0I7QUFDQSxHQUFHO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2UvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlLy4vc3JjL2NvbXBvbmVudHMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS8uL3NyYy9jb21wb25lbnRzL2J1cmdlckNhcmQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS8uL3NyYy9jb21wb25lbnRzL2NvbnRhY3RVcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2UvLi9zcmMvY29tcG9uZW50cy9oZXJvLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2UvLi9zcmMvY29tcG9uZW50cy9ob21lcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlLy4vc3JjL2NvbXBvbmVudHMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlLy4vc3JjL2NvbXBvbmVudHMvcGhvdG9zR3JpZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ltZy9oZXJvLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbjpyb290IHtcXG4gIC0tY29sb3ItdG93OiAjZWJhODNhO1xcbiAgLS1jb2xvci1vbmU6ICNiYjM3MWE7XFxuICAtLWNvbG9yLXRocmVlOiAjZmZmOGQ5O1xcbiAgLS1jb2xvci1mb3VyOiAjZDVkYmIzO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci10aHJlZSk7XFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5tYWluLFxcbi5jb250ZW50IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4uY29udGFpbmVyIHtcXG4gIHdpZHRoOiA4MCU7XFxuICBtYXJnaW46IGF1dG87XFxuICBtYXgtd2lkdGg6IDkwMHB4O1xcbn1cXG4uYnRuIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLW9uZSk7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICB6LWluZGV4OiAyO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5uYXZiYXIgLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZzogMTVweCAwO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci10aHJlZSk7XFxufVxcbi5uYXZiYXIgLmxpbmtzIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG4ubmF2YmFyIC5saW5rcyAubGluayB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogaW5oZXJpdDtcXG59XFxuLmhlcm8ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC42KSwgcmdiYSgwLCAwLCAwLCAwLjYpKSxcXG4gICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmhlcm8tdGV4dCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItdGhyZWUpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uaGVyby10ZXh0IGgxIHtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG4uaGVyby10ZXh0IC5vcmRlci1ub3cge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itb25lKTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci10aHJlZSk7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG4ucGhvdG9zIHtcXG4gIG1hcmdpbjogMjBweCAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ucGhvdG9zIGgyLFxcbi5tZW51IGgyLFxcbi5jb250YWN0LXVzIGgyLFxcbi5hYm91dCBoMiB7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICBjb2xvcjogdmFyKC0tY29sb3Itb25lKTtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1jb2xvci1vbmUpO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4ucGhvdG9zIC5waG90b3MtZ3JpZCB7XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgaGVpZ2h0OiA1NTBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcXG4gIGdhcDogMTBweDtcXG59XFxuLnBob3RvcyAucGhvdG9zLWdyaWQgZGl2IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlYmE4M2E7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLnBob3RvcyAucGhvdG9zLWdyaWQgZGl2IGltZyB7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ucGhvdG9zIC5waG90b3MtZ3JpZCBkaXY6bnRoLWNoaWxkKDIpIHtcXG4gIGdyaWQtY29sdW1uOiBzcGFuIDI7XFxufVxcbi5waG90b3MgLnBob3Rvcy1ncmlkIGRpdjpudGgtY2hpbGQoMykge1xcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMztcXG59XFxuLnBob3RvcyAucGhvdG9zLWdyaWQgZGl2Om50aC1jaGlsZCg0KSB7XFxuICBncmlkLWNvbHVtbjogc3BhbiAyO1xcbn1cXG4vKiAgIE1lbnUgU2VjdGlvbiAqL1xcbi5tZW51IHtcXG4gIG1hcmdpbjogNzBweCAwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5tZW51IGgyIHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcbi5tZW51IC5tZW51LWdyaWQge1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMyMHB4LCAxZnIpKTtcXG4gIGdhcDogMjBweDtcXG59XFxuLm1lbnUgLm1lbnUtZ3JpZCA+IGRpdiB7XFxuICBoZWlnaHQ6IDE2MHB4O1xcbn1cXG4uYnVyZ2VyLWNhcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZm91cik7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTIpIDBweCAxcHggM3B4LCByZ2JhKDAsIDAsIDAsIDAuMjQpIDBweCAxcHggMnB4O1xcbn1cXG4uYnVyZ2VyLWltYWdlIHtcXG4gIGZsZXg6IDM7XFxufVxcbi5idXJnZXItY2FyZC1ib2R5IHtcXG4gIGZsZXg6IDQ7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgcGFkZGluZzogOHB4O1xcbiAgY29sb3I6IHJnYigyNywgMjcsIDM5KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA0cHg7XFxufVxcbi5idXJnZXItY2FyZC1ib2R5IGgzIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1vbmUpO1xcbn1cXG4uYnVyZ2VyLWNhcmQtYm9keSBwIHtcXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuLmJ1cmdlci1jYXJkLWJvZHkgOm50aC1jaGlsZCgzKSB7XFxuICBjb2xvcjogdmFyKC0tY29sb3Itb25lKTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcbi5idXJnZXItY2FyZCAuYnVyZ2VyLWltYWdlIGltZyB7XFxuICBoZWlnaHQ6IDE4MHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG59XFxuLyogQ29udGFjdCBVcyBTZWN0aW9uICovXFxuLmNvbnRhY3QtdXMge1xcbiAgbWFyZ2luOiA3MHB4IDBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmNvbnRhY3QtdXMgaDIge1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuLmNvbnRhY3QtZnJvbSB7XFxuICBtYXJnaW46IDIwcHggYXV0bztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiA2MDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWZvdXIpO1xcbiAgcGFkZGluZzogMjBweCAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xMikgMHB4IDFweCAzcHgsIHJnYmEoMCwgMCwgMCwgMC4yNCkgMHB4IDFweCAycHg7XFxufVxcbi5jb250YWN0LWZyb20gaW5wdXQsXFxuLmNvbnRhY3QtZnJvbSB0ZXh0YXJlYSB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxufVxcbi5jb250YWN0LWZyb20gdGV4dGFyZWEge1xcbiAgcmVzaXplOiBub25lO1xcbn1cXG4uY29udGFjdC1mcm9tIC5mb3JtLXJvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIGdhcDogMTBweDtcXG59XFxuLmNvbnRhY3QtZnJvbSAuZm9ybS1yb3cgbGFiZWwge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBmbGV4OiAxO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLW9uZSk7XFxufVxcbi5jb250YWN0LWZyb20gLmZvcm0tcm93IGlucHV0LFxcbi5jb250YWN0LWZyb20gLmZvcm0tcm93IHRleHRhcmVhIHtcXG4gIGZsZXg6IDM7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLXRocmVlKTtcXG59XFxuLmNvbnRhY3QtZnJvbSAuZm9ybS1yb3cgaW5wdXQ6Zm9jdXMsXFxuLmNvbnRhY3QtZnJvbSAuZm9ybS1yb3cgdGV4dGFyZWE6Zm9jdXMge1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1vbmUpO1xcbn1cXG4uY29udGFjdC1mcm9tIC5mb3JtLXJvdyBidXR0b24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW46IGF1dG87XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1vbmUpO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRocmVlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTIpIDBweCAxcHggM3B4LCByZ2JhKDAsIDAsIDAsIDAuMjQpIDBweCAxcHggMnB4O1xcbn1cXG4uY29udGFjdC1mcm9tIC5mb3JtLXJvdyBidXR0b246YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhNzMyMTg7XFxufVxcbi8qICAgQWJvdXQgU2VjdGlvbiAgKi9cXG4uYWJvdXQge1xcbiAgbWFyZ2luOiA3MHB4IDBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmFib3V0IGgyIHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcbi5hYm91dC1jb250YWluZXIge1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1mb3VyKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEyKSAwcHggMXB4IDNweCwgcmdiYSgwLCAwLCAwLCAwLjI0KSAwcHggMXB4IDJweDtcXG59XFxuLmFib3V0LWltYWdlIHtcXG4gIGZsZXg6IDE7XFxufVxcbi5hYm91dC1pbWFnZSBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG59XFxuLmFib3V0LXRleHQge1xcbiAgcGFkZGluZzogMTVweDtcXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XFxuICBmbGV4OiAyO1xcbn1cXG4uYWJvdXQtdGV4dCBwIHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcbi8qICAgRm9vdGVyIFNlY3Rpb24gKi9cXG5mb290ZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm90dG9tOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRocmVlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLW9uZSk7XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcbmZvb3RlciBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xcbiAgLmNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiA5MCU7XFxuICB9XFxuICAubmF2YmFyIC5saW5rcyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICAuaGVyby10ZXh0IGgxIHtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgfVxcbiAgLmNvbnRhY3QtZnJvbSAuZm9ybS1yb3cge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbiAgLmNvbnRhY3QtZnJvbSAuZm9ybS1yb3cgbGFiZWwge1xcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gIH1cXG4gIC5hYm91dC1jb250YWluZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1Qsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxvQkFBb0I7RUFDcEIsb0JBQW9CO0VBQ3BCLHNCQUFzQjtFQUN0QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLG9DQUFvQztFQUNwQyxrQ0FBa0M7RUFDbEMsa0JBQWtCO0FBQ3BCO0FBQ0E7O0VBRUUsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0Usa0NBQWtDO0VBQ2xDLGVBQWU7RUFDZixNQUFNO0VBQ04sVUFBVTtFQUNWLFdBQVc7QUFDYjtBQUNBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixTQUFTO0FBQ1g7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRTsyQ0FDd0I7RUFDeEIsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztFQUNoQyx5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usa0NBQWtDO0VBQ2xDLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjtBQUNBOzs7O0VBSUUsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQix1QkFBdUI7RUFDdkIseUNBQXlDO0VBQ3pDLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLGtDQUFrQztFQUNsQyxTQUFTO0FBQ1g7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLFdBQVc7QUFDYjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBLG1CQUFtQjtBQUNuQjtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYiwyREFBMkQ7RUFDM0QsU0FBUztBQUNYO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLG1DQUFtQztFQUNuQyw0RUFBNEU7QUFDOUU7QUFDQTtFQUNFLE9BQU87QUFDVDtBQUNBO0VBQ0UsT0FBTztFQUNQLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsUUFBUTtBQUNWO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGVBQWU7QUFDakI7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLGlCQUFpQjtBQUNuQjtBQUNBLHVCQUF1QjtBQUN2QjtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsbUNBQW1DO0VBQ25DLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsNEVBQTRFO0FBQzlFO0FBQ0E7O0VBRUUsWUFBWTtFQUNaLGFBQWE7RUFDYixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixTQUFTO0FBQ1g7QUFDQTtFQUNFLGNBQWM7RUFDZCxPQUFPO0VBQ1AsdUJBQXVCO0FBQ3pCO0FBQ0E7O0VBRUUsT0FBTztFQUNQLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsb0NBQW9DO0FBQ3RDO0FBQ0E7O0VBRUUsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQ0FBa0M7RUFDbEMseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQiw0RUFBNEU7QUFDOUU7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBLHFCQUFxQjtBQUNyQjtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixtQ0FBbUM7RUFDbkMsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQiw0RUFBNEU7QUFDOUU7QUFDQTtFQUNFLE9BQU87QUFDVDtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsT0FBTztBQUNUO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQSxxQkFBcUI7QUFDckI7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixrQ0FBa0M7RUFDbEMsZUFBZTtBQUNqQjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7QUFDaEI7QUFDQTtFQUNFO0lBQ0UsVUFBVTtFQUNaO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0UsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxzQkFBc0I7RUFDeEI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG46cm9vdCB7XFxuICAtLWNvbG9yLXRvdzogI2ViYTgzYTtcXG4gIC0tY29sb3Itb25lOiAjYmIzNzFhO1xcbiAgLS1jb2xvci10aHJlZTogI2ZmZjhkOTtcXG4gIC0tY29sb3ItZm91cjogI2Q1ZGJiMztcXG59XFxuXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItdGhyZWUpO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxubWFpbixcXG4uY29udGVudCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmNvbnRhaW5lciB7XFxuICB3aWR0aDogODAlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgbWF4LXdpZHRoOiA5MDBweDtcXG59XFxuLmJ0biB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1vbmUpO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgei1pbmRleDogMjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ubmF2YmFyIC5jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmc6IDE1cHggMDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItdGhyZWUpO1xcbn1cXG4ubmF2YmFyIC5saW5rcyB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMjBweDtcXG59XFxuLm5hdmJhciAubGlua3MgLmxpbmsge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxufVxcbi5oZXJvIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuNiksIHJnYmEoMCwgMCwgMCwgMC42KSksXFxuICAgIHVybChcXFwiLi4vaW1nL2hlcm8uanBnXFxcIik7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5oZXJvLXRleHQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRocmVlKTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmhlcm8tdGV4dCBoMSB7XFxuICBmb250LXNpemU6IDQwcHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuLmhlcm8tdGV4dCAub3JkZXItbm93IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLW9uZSk7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItdGhyZWUpO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuLnBob3RvcyB7XFxuICBtYXJnaW46IDIwcHggMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLnBob3RvcyBoMixcXG4ubWVudSBoMixcXG4uY29udGFjdC11cyBoMixcXG4uYWJvdXQgaDIge1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLW9uZSk7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tY29sb3Itb25lKTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuLnBob3RvcyAucGhvdG9zLWdyaWQge1xcbiAgbWFyZ2luLXRvcDogMzBweDtcXG4gIGhlaWdodDogNTUwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDFmcik7XFxuICBnYXA6IDEwcHg7XFxufVxcbi5waG90b3MgLnBob3Rvcy1ncmlkIGRpdiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJhODNhO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5waG90b3MgLnBob3Rvcy1ncmlkIGRpdiBpbWcge1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLnBob3RvcyAucGhvdG9zLWdyaWQgZGl2Om50aC1jaGlsZCgyKSB7XFxuICBncmlkLWNvbHVtbjogc3BhbiAyO1xcbn1cXG4ucGhvdG9zIC5waG90b3MtZ3JpZCBkaXY6bnRoLWNoaWxkKDMpIHtcXG4gIGdyaWQtY29sdW1uOiBzcGFuIDM7XFxufVxcbi5waG90b3MgLnBob3Rvcy1ncmlkIGRpdjpudGgtY2hpbGQoNCkge1xcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcXG59XFxuLyogICBNZW51IFNlY3Rpb24gKi9cXG4ubWVudSB7XFxuICBtYXJnaW46IDcwcHggMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ubWVudSBoMiB7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG4ubWVudSAubWVudS1ncmlkIHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMjBweCwgMWZyKSk7XFxuICBnYXA6IDIwcHg7XFxufVxcbi5tZW51IC5tZW51LWdyaWQgPiBkaXYge1xcbiAgaGVpZ2h0OiAxNjBweDtcXG59XFxuLmJ1cmdlci1jYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWZvdXIpO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEyKSAwcHggMXB4IDNweCwgcmdiYSgwLCAwLCAwLCAwLjI0KSAwcHggMXB4IDJweDtcXG59XFxuLmJ1cmdlci1pbWFnZSB7XFxuICBmbGV4OiAzO1xcbn1cXG4uYnVyZ2VyLWNhcmQtYm9keSB7XFxuICBmbGV4OiA0O1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGNvbG9yOiByZ2IoMjcsIDI3LCAzOSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNHB4O1xcbn1cXG4uYnVyZ2VyLWNhcmQtYm9keSBoMyB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBjb2xvcjogdmFyKC0tY29sb3Itb25lKTtcXG59XFxuLmJ1cmdlci1jYXJkLWJvZHkgcCB7XFxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcbi5idXJnZXItY2FyZC1ib2R5IDpudGgtY2hpbGQoMykge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLW9uZSk7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG4uYnVyZ2VyLWNhcmQgLmJ1cmdlci1pbWFnZSBpbWcge1xcbiAgaGVpZ2h0OiAxODBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxufVxcbi8qIENvbnRhY3QgVXMgU2VjdGlvbiAqL1xcbi5jb250YWN0LXVzIHtcXG4gIG1hcmdpbjogNzBweCAwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5jb250YWN0LXVzIGgyIHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcbi5jb250YWN0LWZyb20ge1xcbiAgbWFyZ2luOiAyMHB4IGF1dG87XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogNjAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1mb3VyKTtcXG4gIHBhZGRpbmc6IDIwcHggMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTIpIDBweCAxcHggM3B4LCByZ2JhKDAsIDAsIDAsIDAuMjQpIDBweCAxcHggMnB4O1xcbn1cXG4uY29udGFjdC1mcm9tIGlucHV0LFxcbi5jb250YWN0LWZyb20gdGV4dGFyZWEge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbn1cXG4uY29udGFjdC1mcm9tIHRleHRhcmVhIHtcXG4gIHJlc2l6ZTogbm9uZTtcXG59XFxuLmNvbnRhY3QtZnJvbSAuZm9ybS1yb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBnYXA6IDEwcHg7XFxufVxcbi5jb250YWN0LWZyb20gLmZvcm0tcm93IGxhYmVsIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZmxleDogMTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1vbmUpO1xcbn1cXG4uY29udGFjdC1mcm9tIC5mb3JtLXJvdyBpbnB1dCxcXG4uY29udGFjdC1mcm9tIC5mb3JtLXJvdyB0ZXh0YXJlYSB7XFxuICBmbGV4OiAzO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci10aHJlZSk7XFxufVxcbi5jb250YWN0LWZyb20gLmZvcm0tcm93IGlucHV0OmZvY3VzLFxcbi5jb250YWN0LWZyb20gLmZvcm0tcm93IHRleHRhcmVhOmZvY3VzIHtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3Itb25lKTtcXG59XFxuLmNvbnRhY3QtZnJvbSAuZm9ybS1yb3cgYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itb25lKTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci10aHJlZSk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEyKSAwcHggMXB4IDNweCwgcmdiYSgwLCAwLCAwLCAwLjI0KSAwcHggMXB4IDJweDtcXG59XFxuLmNvbnRhY3QtZnJvbSAuZm9ybS1yb3cgYnV0dG9uOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTczMjE4O1xcbn1cXG4vKiAgIEFib3V0IFNlY3Rpb24gICovXFxuLmFib3V0IHtcXG4gIG1hcmdpbjogNzBweCAwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5hYm91dCBoMiB7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG4uYWJvdXQtY29udGFpbmVyIHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZm91cik7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xMikgMHB4IDFweCAzcHgsIHJnYmEoMCwgMCwgMCwgMC4yNCkgMHB4IDFweCAycHg7XFxufVxcbi5hYm91dC1pbWFnZSB7XFxuICBmbGV4OiAxO1xcbn1cXG4uYWJvdXQtaW1hZ2UgaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxufVxcbi5hYm91dC10ZXh0IHtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbiAgZmxleDogMjtcXG59XFxuLmFib3V0LXRleHQgcCB7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG4vKiAgIEZvb3RlciBTZWN0aW9uICovXFxuZm9vdGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvdHRvbTogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci10aHJlZSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1vbmUpO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG5mb290ZXIgYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogaW5oZXJpdDtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcXG4gIC5jb250YWluZXIge1xcbiAgICB3aWR0aDogOTAlO1xcbiAgfVxcbiAgLm5hdmJhciAubGlua3Mge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgLmhlcm8tdGV4dCBoMSB7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gIH1cXG4gIC5jb250YWN0LWZyb20gLmZvcm0tcm93IHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG4gIC5jb250YWN0LWZyb20gLmZvcm0tcm93IGxhYmVsIHtcXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuICB9XFxuICAuYWJvdXQtY29udGFpbmVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgZm9vdGVyIGZyb20gXCIuL2Zvb3RlclwiO1xuaW1wb3J0IGltZyBmcm9tIFwiLi4vaW1nL2Fib3V0LmpwZ1wiO1xuY29uc3QgYWJvdXQgPSAoKSA9PiB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGl2LmNsYXNzTGlzdC5hZGQoXCJhYm91dFwiKTtcbiAgY29uc3QgaHRtbCA9IGBcbiAgICAgICAgPGgyPkFib3V0PC9oMj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJhYm91dC1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhYm91dC1pbWFnZVwiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7aW1nfVwiIGFsdD1cIlwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhYm91dC10ZXh0XCI+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIFdlbGNvbWUgdG8gQnVyZ2VyIEh1YiwgeW91ciB1bHRpbWF0ZSBkZXN0aW5hdGlvbiBmb3IgZGVsaWNpb3VzXG4gICAgICAgICAgICAgICAgYnVyZ2VycyFcbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBBdCBCdXJnZXIgSHViLCB3ZSBwcmlkZSBvdXJzZWx2ZXMgb24gc2VydmluZyB0aGUganVpY2llc3QsIG1vc3RcbiAgICAgICAgICAgICAgICBtb3V0aC13YXRlcmluZyBidXJnZXJzIGluIHRvd24uIE91ciBjb21taXRtZW50IHRvIHF1YWxpdHlcbiAgICAgICAgICAgICAgICBpbmdyZWRpZW50cyBhbmQgZXhjZXB0aW9uYWwgc2VydmljZSBpcyB3aGF0IHNldHMgdXMgYXBhcnQgZnJvbVxuICAgICAgICAgICAgICAgIHRoZSByZXN0LlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIFdlIGJlbGlldmUgdGhhdCBhIGdyZWF0IGJ1cmdlciBzdGFydHMgd2l0aCBncmVhdCBpbmdyZWRpZW50cy5cbiAgICAgICAgICAgICAgICBUaGF0J3Mgd2h5IHdlIHNvdXJjZSBvbmx5IHRoZSBmcmVzaGVzdCwgaGlnaGVzdC1xdWFsaXR5IGJlZWYsXG4gICAgICAgICAgICAgICAgaGFuZC1zZWxlY3RlZCBmb3IgaXRzIGZsYXZvciBhbmQgdGVuZGVybmVzcy4gT3VyIGJ1bnMgYXJlIG1hZGVcbiAgICAgICAgICAgICAgICBmcmVzaCBkYWlseSwgYW5kIHdlIHVzZSBvbmx5IHRoZSBmaW5lc3QgdG9wcGluZ3MgYW5kIGNvbmRpbWVudHNcbiAgICAgICAgICAgICAgICB0byBjcmVhdGUgdGhlIHBlcmZlY3QgYnVyZ2VyLlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIEJ1dCB3ZSdyZSBtb3JlIHRoYW4ganVzdCBhIGJ1cmdlciBqb2ludC4gQXQgQnVyZ2VyIEh1Yiwgd2UncmVcbiAgICAgICAgICAgICAgICBhbGwgYWJvdXQgY3JlYXRpbmcgYW4gZXhwZXJpZW5jZSBmb3Igb3VyIGN1c3RvbWVycy4gT3VyIGZyaWVuZGx5XG4gICAgICAgICAgICAgICAgc3RhZmYgaXMgYWx3YXlzIHJlYWR5IHRvIHdlbGNvbWUgeW91IHdpdGggYSBzbWlsZSBhbmQgaGVscCB5b3VcbiAgICAgICAgICAgICAgICBjaG9vc2UgZnJvbSBvdXIgZXh0ZW5zaXZlIG1lbnUgb2YgYnVyZ2Vycywgc2lkZXMsIGFuZCBkcmlua3MuXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgV2hldGhlciB5b3UncmUgY3JhdmluZyBhIGNsYXNzaWMgY2hlZXNlYnVyZ2VyIG9yIHNvbWV0aGluZyBhXG4gICAgICAgICAgICAgICAgbGl0dGxlIG1vcmUgYWR2ZW50dXJvdXMsIGxpa2Ugb3VyIHNpZ25hdHVyZSBcIkJ1cmdlciBvZiB0aGVcbiAgICAgICAgICAgICAgICBNb250aCxcIiB3ZSd2ZSBnb3Qgc29tZXRoaW5nIGZvciBldmVyeW9uZS4gQW5kIGlmIHlvdSdyZSBsb29raW5nXG4gICAgICAgICAgICAgICAgZm9yIHNvbWV0aGluZyBhIGxpdHRsZSBsaWdodGVyLCB3ZSBhbHNvIG9mZmVyIHNhbGFkcyBhbmRcbiAgICAgICAgICAgICAgICB2ZWdldGFyaWFuIG9wdGlvbnMuXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgQXQgQnVyZ2VyIEh1Yiwgd2UgYmVsaWV2ZSBpbiBnaXZpbmcgYmFjayB0byBvdXIgY29tbXVuaXR5LlxuICAgICAgICAgICAgICAgIFRoYXQncyB3aHkgd2Ugc3VwcG9ydCBsb2NhbCBjaGFyaXRpZXMgYW5kIG9yZ2FuaXphdGlvbnMsIGFuZFxuICAgICAgICAgICAgICAgIHdlJ3JlIGFsd2F5cyBsb29raW5nIGZvciB3YXlzIHRvIG1ha2UgYSBwb3NpdGl2ZSBpbXBhY3Qgb24gdGhlXG4gICAgICAgICAgICAgICAgd29ybGQgYXJvdW5kIHVzLlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIFNvIHdoeSBub3Qgc3RvcCBieSBCdXJnZXIgSHViIHRvZGF5IGFuZCBleHBlcmllbmNlIHRoZSBiZXN0XG4gICAgICAgICAgICAgICAgYnVyZ2VycyBpbiB0b3duPyBXZSBjYW4ndCB3YWl0IHRvIHNlcnZlIHlvdSFcbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuYDtcbiAgZGl2Lmluc2VydEFkamFjZW50SFRNTChcImFmdGVyYmVnaW5cIiwgaHRtbCk7XG4gIG1haW4uYXBwZW5kQ2hpbGQoZGl2KTtcbiAgbWFpbi5hcHBlbmRDaGlsZChmb290ZXIoKSk7XG5cbiAgcmV0dXJuIG1haW47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhYm91dDtcbiIsImltcG9ydCBpbWcxIGZyb20gXCIuLi9pbWcvYnVyZ2VyLTEuanBnXCI7XG5pbXBvcnQgaW1nMiBmcm9tIFwiLi4vaW1nL2J1cmdlci0yLmpwZ1wiO1xuaW1wb3J0IGltZzMgZnJvbSBcIi4uL2ltZy9idXJnZXItMy5qcGdcIjtcbmltcG9ydCBpbWc0IGZyb20gXCIuLi9pbWcvYnVyZ2VyLTQuanBnXCI7XG5pbXBvcnQgaW1nNSBmcm9tIFwiLi4vaW1nL2J1cmdlci01LmpwZ1wiO1xuaW1wb3J0IGltZzYgZnJvbSBcIi4uL2ltZy9idXJnZXItNi5qcGdcIjtcbmltcG9ydCBpbWc3IGZyb20gXCIuLi9pbWcvYnVyZ2VyLTcuanBnXCI7XG5pbXBvcnQgaW1nOCBmcm9tIFwiLi4vaW1nL2J1cmdlci04LmpwZ1wiO1xuY29uc3QgaW1hZ2VzID0gW2ltZzEsIGltZzIsIGltZzMsIGltZzQsIGltZzUsIGltZzYsIGltZzcsIGltZzhdO1xuY29uc3QgYnVyZ2VyQ2FyZCA9IChidXJnZXIsIGluZGV4KSA9PiB7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRpdi5jbGFzc0xpc3QuYWRkKFwiYnVyZ2VyLWNhcmRcIik7XG4gIGNvbnN0IGh0bWwgPSBgXG4gIDxkaXYgY2xhc3M9XCJidXJnZXItaW1hZ2VcIj5cbiAgICA8aW1nIHNyYz1cIiR7aW1hZ2VzW2luZGV4XX1cIiBhbHQ9XCJcIiAvPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImJ1cmdlci1jYXJkLWJvZHlcIj5cbiAgIDxoMz4ke2J1cmdlci5uYW1lfTwvaDM+XG4gICA8cD4ke2J1cmdlci5kZXNjcmlwdGlvbn08L3A+XG4gICA8cD4kJHtidXJnZXIucHJpY2V9IFVTRDwvcD5cbiAgPC9kaXY+XG5gO1xuICBkaXYuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLCBodG1sKTtcbiAgcmV0dXJuIGRpdjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGJ1cmdlckNhcmQ7XG4iLCJpbXBvcnQgZm9vdGVyIGZyb20gXCIuL2Zvb3RlclwiO1xuY29uc3QgY29udGFjdFVzID0gKCkgPT4ge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRpdi5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC11c1wiKTtcbiAgY29uc3QgaHRtbCA9IGBcbiAgPGgyPkNvbnRhY3QgVXM8L2gyPlxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgPGZvcm0gYWN0aW9uPVwiXCIgY2xhc3M9XCJjb250YWN0LWZyb21cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLXJvd1wiPlxuICAgICAgICA8bGFiZWwgZm9yPVwibmFtZVwiPk5hbWU8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIGlkPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwiSm9obiBEb3VnaFwiIHJlcXVpcmVkPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1yb3dcIj5cbiAgICAgICAgPGxhYmVsIGZvcj1cImVtYWlsXCI+RW1haWw8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgIHR5cGU9XCJlbWFpbFwiICBuYW1lPVwiZW1haWxcIiBpZD1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJleGFtcGxlQGdhbWlsLmNvbVwiICByZXF1aXJlZC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLXJvd1wiPlxuICAgICAgICA8bGFiZWwgZm9yPVwibXNnXCI+TWVzc2FnZTwvbGFiZWw+XG4gICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwibXNnXCIgaWQ9XCJtc2dcIiBjb2xzPVwiMzBcIiByb3dzPVwiMTBcIiBwbGFjZWhvbGRlcj1cIldyaXRlIGEgbWVzc2FnZVwiIHJlcXVpcmVkPjwvdGV4dGFyZWE+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLXJvd1wiPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0blwiPlNlbmQ8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9ybT5cbiAgPC9kaXY+XG5gO1xuICBkaXYuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLCBodG1sKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChkaXYpO1xuICBtYWluLmFwcGVuZENoaWxkKGZvb3RlcigpKTtcblxuICByZXR1cm4gbWFpbjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3RVcztcbiIsImNvbnN0IGZvb3RlciA9ICgpID0+IHtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoXCJmb290ZXJcIik7XG4gIGNvbnN0IGh0bWwgPSBgXG4gYDtcbiAgZm9vdGVyLmluc2VydEFkamFjZW50SFRNTChcImFmdGVyYmVnaW5cIiwgaHRtbCk7XG4gIHJldHVybiBmb290ZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb290ZXI7XG4iLCJpbXBvcnQgXCIuLi9pbWcvaGVyby5qcGdcIjtcbmNvbnN0IGhlcm8gPSAoKSA9PiB7XG4gIGNvbnN0IGhlcm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBoZXJvLmNsYXNzTGlzdC5hZGQoXCJoZXJvXCIpO1xuICBjb25zdCBodG1sID0gYFxuICA8ZGl2IGNsYXNzPVwiaGVyby10ZXh0XCI+XG4gICAgPGgxPkluZHVsZ2UgaW4gdGhlIEp1aWNpZXN0LCBNb3N0IERlbGljaW91cyBCdXJnZXJzIGF0IEJ1cmdlciBIdWIgLSBZb3VyIFVsdGltYXRlIEJ1cmdlciBEZXN0aW5hdGlvbiE8L2gxPlxuICAgIDxidXR0b24gY2xhc3M9XCJidG4gb3JkZXItbm93XCI+T1JERVIgTk9XPC9idXR0b24+XG4gIDwvZGl2PmA7XG4gIGhlcm8uaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLCBodG1sKTtcbiAgcmV0dXJuIGhlcm87XG59O1xuXG5leHBvcnQgZGVmYXVsdCBoZXJvO1xuIiwiaW1wb3J0IGhlcm8gZnJvbSBcIi4vaGVyb1wiO1xuaW1wb3J0IHBob3Rvc0dyaWQgZnJvbSBcIi4vcGhvdG9zR3JpZFwiO1xuaW1wb3J0IGZvb3RlciBmcm9tIFwiLi9mb290ZXJcIjtcbmNvbnN0IGhvbWVwYWdlID0gKCkgPT4ge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG4gIG1haW4uYXBwZW5kQ2hpbGQoaGVybygpKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChwaG90b3NHcmlkKCkpO1xuICBtYWluLmFwcGVuZENoaWxkKGZvb3RlcigpKTtcblxuICByZXR1cm4gbWFpbjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGhvbWVwYWdlO1xuIiwiaW1wb3J0IGZvb3RlciBmcm9tIFwiLi9mb290ZXJcIjtcbmltcG9ydCBidXJnZXJDYXJkIGZyb20gXCIuL2J1cmdlckNhcmRcIjtcbmNvbnN0IG1lbnUgPSAoKSA9PiB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkaXYuY2xhc3NMaXN0LmFkZChcIm1lbnVcIik7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyXCIpO1xuICBoMi50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuICBncmlkLmNsYXNzTGlzdC5hZGQoXCJtZW51LWdyaWRcIik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYnVyZ2Vycy5sZW5ndGg7IGkrKykge1xuICAgIGdyaWQuYXBwZW5kQ2hpbGQoYnVyZ2VyQ2FyZChidXJnZXJzW2ldLCBpKSk7XG4gIH1cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGgyKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdyaWQpO1xuICBkaXYuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChkaXYpO1xuICBtYWluLmFwcGVuZENoaWxkKGZvb3RlcigpKTtcblxuICByZXR1cm4gbWFpbjtcbn07XG5cbmNvbnN0IGJ1cmdlcnMgPSBbXG4gIHtcbiAgICBuYW1lOiBcIkNsYXNzaWMgQ2hlZXNlYnVyZ2VyXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIlRoaXMgYnVyZ2VyIGlzIGEgY2xhc3NpYyBmb3IgYSByZWFzb24uIEl0IHVzdWFsbHkgY29uc2lzdHMgb2YgYSBiZWVmIHBhdHR5LCBBbWVyaWNhbiBjaGVlc2UuXCIsXG4gICAgcHJpY2U6IFwiOFwiLFxuICB9LFxuXG4gIHtcbiAgICBuYW1lOiBcIkJhY29uIENoZWVzZWJ1cmdlclwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJTaW1pbGFyIHRvIHRoZSBjbGFzc2ljIGNoZWVzZWJ1cmdlciwgYnV0IHdpdGggdGhlIGFkZGl0aW9uIG9mIGNyaXNweSBiYWNvbiBvbiB0b3Agb2YgdGhlIGJlZWYgcGF0dHkuXCIsXG4gICAgcHJpY2U6IFwiMTNcIixcbiAgfSxcblxuICB7XG4gICAgbmFtZTogXCJWZWdnaWUgQnVyZ2VyXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIiBBIHZlZ2V0YXJpYW4gb3B0aW9uLCB0aGlzIGJ1cmdlciB0eXBpY2FsbHkgaW5jbHVkZXMgYSBwYXR0eSBtYWRlIG9mIHZlZ2V0YWJsZXMgc3VjaCBhcyBibGFjayBiZWFucy5cIixcbiAgICBwcmljZTogXCI5XCIsXG4gIH0sXG5cbiAge1xuICAgIG5hbWU6IFwiQkJRIEJ1cmdlclwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJUaGlzIGJ1cmdlciBpbmNsdWRlcyBhIGJlZWYgcGF0dHksIGNoZWRkYXIgY2hlZXNlLCBjcmlzcHkgb25pb24gcmluZ3MsIGFuZCBiYXJiZWN1ZSBzYXVjZS5cIixcbiAgICBwcmljZTogXCIxNFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJNdXNocm9vbSBTd2lzc1wiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJUaGlzIGJ1cmdlciBpbmNsdWRlcyBhIGJlZWYgcGF0dHksIFN3aXNzIGNoZWVzZSwgc2F1dMOpZWQgbXVzaHJvb21zLCBhbmQgc29tZXRpbWVzIG9uaW9ucy5cIixcbiAgICBwcmljZTogXCIxMFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJEb3VibGUgQ2hlZXNlYnVyZ2VyXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIlRoaXMgYnVyZ2VyIGluY2x1ZGVzIHR3byBiZWVmIHBhdHRpZXMgaW5zdGVhZCBvZiBvbmUsIGFzIHdlbGwgYXMgZG91YmxlIHRoZSBhbW91bnQgb2YgY2hlZXNlIGFuZCB0b3BwaW5ncy5cIixcbiAgICBwcmljZTogXCIxNlwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJIYXdhaWlhbiBCdXJnZXJcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiVGhpcyBidXJnZXIgaW5jbHVkZXMgYSBiZWVmIHBhdHR5LCBncmlsbGVkIHBpbmVhcHBsZSwgdGVyaXlha2kgc2F1Y2UsIGFuZCBzb21ldGltZXMgaGFtIG9yIGJhY29uLlwiLFxuICAgIHByaWNlOiBcIjExXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkphbGFwZW5vIEJ1cmdlclwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJUaGlzIGJ1cmdlciBpbmNsdWRlcyBhIGJlZWYgcGF0dHksIHBlcHBlciBqYWNrIGNoZWVzZSwgamFsYXBlbm8gcGVwcGVycywgYW5kIHNvbWV0aW1lcyBzcGljeSBtYXlvLlwiLFxuICAgIHByaWNlOiBcIjEyXCIsXG4gIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBtZW51O1xuIiwiaW1wb3J0IGltZzEgZnJvbSBcIi4uL2ltZy9ncmlkLXBob3RvLTEuanBnXCI7XG5pbXBvcnQgaW1nMiBmcm9tIFwiLi4vaW1nL2dyaWQtcGhvdG8tMi5qcGdcIjtcbmltcG9ydCBpbWczIGZyb20gXCIuLi9pbWcvZ3JpZC1waG90by0zLmpwZ1wiO1xuaW1wb3J0IGltZzQgZnJvbSBcIi4uL2ltZy9ncmlkLXBob3RvLTQuanBnXCI7XG5pbXBvcnQgaW1nNSBmcm9tIFwiLi4vaW1nL2dyaWQtcGhvdG8tNS5qcGdcIjtcbmNvbnN0IHBob3Rvc0dyaWQgPSAoKSA9PiB7XG4gIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBncmlkLmNsYXNzTGlzdC5hZGQoXCJwaG90b3NcIik7XG4gIGNvbnN0IGh0bWwgPSBgXG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICA8aDI+UGhvdG9zPC9oMj5cbiAgICA8ZGl2IGNsYXNzPVwicGhvdG9zLWdyaWRcIj5cbiAgICAgIDxkaXY+PGltZyBzcmM9XCIke2ltZzF9XCIgYWx0PVwiXCIgLz48L2Rpdj5cbiAgICAgIDxkaXY+PGltZyBzcmM9XCIke2ltZzN9XCIgYWx0PVwiXCIgLz48L2Rpdj5cbiAgICAgIDxkaXY+PGltZyBzcmM9XCIke2ltZzJ9XCIgYWx0PVwiXCIgLz48L2Rpdj5cbiAgICAgIDxkaXY+PGltZyBzcmM9XCIke2ltZzV9XCIgYWx0PVwiXCIgLz48L2Rpdj5cbiAgICAgIDxkaXY+PGltZyBzcmM9XCIke2ltZzR9XCIgYWx0PVwiXCIgLz48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+YDtcbiAgZ3JpZC5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsIGh0bWwpO1xuICByZXR1cm4gZ3JpZDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBob3Rvc0dyaWQ7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLy8gQ29tcG9uZW50c1xuaW1wb3J0IGhvbWVwYWdlIGZyb20gXCIuL2NvbXBvbmVudHMvaG9tZXBhZ2VcIjtcbmltcG9ydCBtZW51IGZyb20gXCIuL2NvbXBvbmVudHMvbWVudVwiO1xuaW1wb3J0IGNvbnRhY3RVcyBmcm9tIFwiLi9jb21wb25lbnRzL2NvbnRhY3RVc1wiO1xuaW1wb3J0IGFib3V0IGZyb20gXCIuL2NvbXBvbmVudHMvYWJvdXRcIjtcbi8vIHN0eWxlXG5pbXBvcnQgXCIuL3N0eWxlcy9zdHlsZS5jc3NcIjtcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcbmNvbnRlbnQuYXBwZW5kQ2hpbGQoaG9tZXBhZ2UoKSk7XG5jb25zdCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGlua1wiKTtcbmxpbmtzLmZvckVhY2goKGxpbmspID0+IHtcbiAgbGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHRhYiA9IGxpbmsudGV4dENvbnRlbnQudG9Mb3dlckNhc2UoKTtcbiAgICBjb25zb2xlLmxvZyh0YWIpO1xuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBpZiAodGFiID09PSBcImhvbWVcIikge1xuICAgICAgY29udGVudC5hcHBlbmRDaGlsZChob21lcGFnZSgpKTtcbiAgICB9IGVsc2UgaWYgKHRhYiA9PT0gXCJtZW51XCIpIHtcbiAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudSgpKTtcbiAgICB9IGVsc2UgaWYgKHRhYiA9PT0gXCJjb250YWN0IHVzXCIpIHtcbiAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFjdFVzKCkpO1xuICAgIH0gZWxzZSBpZiAodGFiID09PSBcImFib3V0XCIpIHtcbiAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWJvdXQoKSk7XG4gICAgfVxuICB9KTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9