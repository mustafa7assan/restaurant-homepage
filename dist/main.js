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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n:root {\n  --color-tow: #eba83a;\n  --color-one: #bb371a;\n  --color-three: #fff8d9;\n  --color-four: #d5dbb3;\n}\nhtml,\nbody {\n  height: 100%;\n}\nmain {\n  height: 100%;\n}\n\nbody {\n  background-color: var(--color-three);\n  font-family: \"Poppins\", sans-serif;\n  position: relative;\n}\n.hidden {\n  display: none;\n}\n.container {\n  width: 80%;\n  margin: auto;\n  max-width: 900px;\n}\n.btn {\n  border: none;\n  outline: none;\n  font-family: inherit;\n  cursor: pointer;\n}\nheader {\n  background-color: var(--color-one);\n  position: fixed;\n  top: 0;\n  z-index: 2;\n  width: 100%;\n}\n.navbar .container {\n  display: flex;\n  padding: 15px 0;\n  justify-content: space-between;\n  align-items: center;\n  color: var(--color-three);\n}\n.navbar .links {\n  list-style: none;\n  display: flex;\n  gap: 20px;\n}\n.navbar .links .link {\n  text-decoration: none;\n  color: inherit;\n}\n.hero {\n  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  height: 100vh;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: relative;\n}\n.hero-text {\n  position: absolute;\n  width: 100%;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: var(--color-three);\n  text-align: center;\n}\n.hero-text h1 {\n  font-size: 40px;\n  font-weight: 500;\n  margin-bottom: 10px;\n}\n.hero-text .order-now {\n  background-color: var(--color-one);\n  color: var(--color-three);\n  font-weight: 600;\n  padding: 10px 20px;\n  border-radius: 5px;\n}\n.photos {\n  margin: 20px 0;\n  text-align: center;\n}\n.photos h2,\n.menu h2 {\n  font-weight: 500;\n  padding-bottom: 10px;\n  color: var(--color-one);\n  border-bottom: 2px solid var(--color-one);\n  display: inline-block;\n}\n.photos .photos-grid {\n  margin-top: 30px;\n  height: 550px;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(3, 1fr);\n  gap: 10px;\n}\n.photos .photos-grid div {\n  background-color: #eba83a;\n  border-radius: 10px;\n  overflow: hidden;\n}\n.photos .photos-grid div img {\n  object-fit: cover;\n  height: 100%;\n  width: 100%;\n}\n.photos .photos-grid div:nth-child(2) {\n  grid-column: span 2;\n}\n.photos .photos-grid div:nth-child(3) {\n  grid-column: span 3;\n}\n.photos .photos-grid div:nth-child(4) {\n  grid-column: span 2;\n}\n\n.menu {\n  margin-top: 70px;\n  text-align: center;\n}\n.menu h2 {\n  margin-top: 20px;\n}\n.menu .menu-grid {\n  margin-top: 20px;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));\n  gap: 20px;\n}\n.menu .menu-grid div {\n  background-color: #fff;\n  height: 180px;\n}\n.burger-card {\n  display: flex;\n  border-radius: 10px;\n  overflow: hidden;\n  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;\n}\n.burger-image {\n  flex: 3;\n}\n.burger-card-body {\n  flex: 4;\n  text-align: left;\n  padding: 8px;\n  color: rgb(27, 27, 39);\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.burger-card-body h3 {\n  font-size: 16px;\n}\n.burger-card-body p {\n  text-align: justify;\n  line-height: 1.2;\n  font-size: 14px;\n}\n.burger-card-body p:nth-child(3) {\n  font-weight: 600;\n  font-size: 12px;\n  color: var(--color-one);\n}\n.burger-card-body button {\n  background-color: var(--color-one);\n  color: var(--color-three);\n  padding: 5px 10px;\n  border-radius: 10px;\n  margin-top: auto;\n  align-self: flex-start;\n  font-size: 12px;\n  font-weight: 600;\n}\n.burger-card .burger-image img {\n  height: 180px;\n  width: 100%;\n  object-fit: cover;\n}\nfooter {\n  width: 100%;\n  margin-top: 30px;\n  text-align: center;\n  padding: 20px;\n  color: var(--color-three);\n  background-color: var(--color-one);\n  font-size: 12px;\n  position: relative;\n  bottom: 0;\n}\nfooter a {\n  text-decoration: none;\n  color: inherit;\n}\n@media screen and (max-width: 480px) {\n  .container {\n    width: 90%;\n  }\n  .navbar .links {\n    display: none;\n  }\n  hero-text h1 {\n    font-size: 30px;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;AACxB;AACA;EACE,oBAAoB;EACpB,oBAAoB;EACpB,sBAAsB;EACtB,qBAAqB;AACvB;AACA;;EAEE,YAAY;AACd;AACA;EACE,YAAY;AACd;;AAEA;EACE,oCAAoC;EACpC,kCAAkC;EAClC,kBAAkB;AACpB;AACA;EACE,aAAa;AACf;AACA;EACE,UAAU;EACV,YAAY;EACZ,gBAAgB;AAClB;AACA;EACE,YAAY;EACZ,aAAa;EACb,oBAAoB;EACpB,eAAe;AACjB;AACA;EACE,kCAAkC;EAClC,eAAe;EACf,MAAM;EACN,UAAU;EACV,WAAW;AACb;AACA;EACE,aAAa;EACb,eAAe;EACf,8BAA8B;EAC9B,mBAAmB;EACnB,yBAAyB;AAC3B;AACA;EACE,gBAAgB;EAChB,aAAa;EACb,SAAS;AACX;AACA;EACE,qBAAqB;EACrB,cAAc;AAChB;AACA;EACE;2CACwB;EACxB,aAAa;EACb,2BAA2B;EAC3B,4BAA4B;EAC5B,sBAAsB;EACtB,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,yBAAyB;EACzB,kBAAkB;AACpB;AACA;EACE,eAAe;EACf,gBAAgB;EAChB,mBAAmB;AACrB;AACA;EACE,kCAAkC;EAClC,yBAAyB;EACzB,gBAAgB;EAChB,kBAAkB;EAClB,kBAAkB;AACpB;AACA;EACE,cAAc;EACd,kBAAkB;AACpB;AACA;;EAEE,gBAAgB;EAChB,oBAAoB;EACpB,uBAAuB;EACvB,yCAAyC;EACzC,qBAAqB;AACvB;AACA;EACE,gBAAgB;EAChB,aAAa;EACb,aAAa;EACb,qCAAqC;EACrC,kCAAkC;EAClC,SAAS;AACX;AACA;EACE,yBAAyB;EACzB,mBAAmB;EACnB,gBAAgB;AAClB;AACA;EACE,iBAAiB;EACjB,YAAY;EACZ,WAAW;AACb;AACA;EACE,mBAAmB;AACrB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;AACpB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;EAChB,aAAa;EACb,2DAA2D;EAC3D,SAAS;AACX;AACA;EACE,sBAAsB;EACtB,aAAa;AACf;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,gBAAgB;EAChB,4EAA4E;AAC9E;AACA;EACE,OAAO;AACT;AACA;EACE,OAAO;EACP,gBAAgB;EAChB,YAAY;EACZ,sBAAsB;EACtB,aAAa;EACb,sBAAsB;EACtB,QAAQ;AACV;AACA;EACE,eAAe;AACjB;AACA;EACE,mBAAmB;EACnB,gBAAgB;EAChB,eAAe;AACjB;AACA;EACE,gBAAgB;EAChB,eAAe;EACf,uBAAuB;AACzB;AACA;EACE,kCAAkC;EAClC,yBAAyB;EACzB,iBAAiB;EACjB,mBAAmB;EACnB,gBAAgB;EAChB,sBAAsB;EACtB,eAAe;EACf,gBAAgB;AAClB;AACA;EACE,aAAa;EACb,WAAW;EACX,iBAAiB;AACnB;AACA;EACE,WAAW;EACX,gBAAgB;EAChB,kBAAkB;EAClB,aAAa;EACb,yBAAyB;EACzB,kCAAkC;EAClC,eAAe;EACf,kBAAkB;EAClB,SAAS;AACX;AACA;EACE,qBAAqB;EACrB,cAAc;AAChB;AACA;EACE;IACE,UAAU;EACZ;EACA;IACE,aAAa;EACf;EACA;IACE,eAAe;EACjB;AACF","sourcesContent":["* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n:root {\n  --color-tow: #eba83a;\n  --color-one: #bb371a;\n  --color-three: #fff8d9;\n  --color-four: #d5dbb3;\n}\nhtml,\nbody {\n  height: 100%;\n}\nmain {\n  height: 100%;\n}\n\nbody {\n  background-color: var(--color-three);\n  font-family: \"Poppins\", sans-serif;\n  position: relative;\n}\n.hidden {\n  display: none;\n}\n.container {\n  width: 80%;\n  margin: auto;\n  max-width: 900px;\n}\n.btn {\n  border: none;\n  outline: none;\n  font-family: inherit;\n  cursor: pointer;\n}\nheader {\n  background-color: var(--color-one);\n  position: fixed;\n  top: 0;\n  z-index: 2;\n  width: 100%;\n}\n.navbar .container {\n  display: flex;\n  padding: 15px 0;\n  justify-content: space-between;\n  align-items: center;\n  color: var(--color-three);\n}\n.navbar .links {\n  list-style: none;\n  display: flex;\n  gap: 20px;\n}\n.navbar .links .link {\n  text-decoration: none;\n  color: inherit;\n}\n.hero {\n  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),\n    url(\"../img/hero.jpg\");\n  height: 100vh;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: relative;\n}\n.hero-text {\n  position: absolute;\n  width: 100%;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: var(--color-three);\n  text-align: center;\n}\n.hero-text h1 {\n  font-size: 40px;\n  font-weight: 500;\n  margin-bottom: 10px;\n}\n.hero-text .order-now {\n  background-color: var(--color-one);\n  color: var(--color-three);\n  font-weight: 600;\n  padding: 10px 20px;\n  border-radius: 5px;\n}\n.photos {\n  margin: 20px 0;\n  text-align: center;\n}\n.photos h2,\n.menu h2 {\n  font-weight: 500;\n  padding-bottom: 10px;\n  color: var(--color-one);\n  border-bottom: 2px solid var(--color-one);\n  display: inline-block;\n}\n.photos .photos-grid {\n  margin-top: 30px;\n  height: 550px;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(3, 1fr);\n  gap: 10px;\n}\n.photos .photos-grid div {\n  background-color: #eba83a;\n  border-radius: 10px;\n  overflow: hidden;\n}\n.photos .photos-grid div img {\n  object-fit: cover;\n  height: 100%;\n  width: 100%;\n}\n.photos .photos-grid div:nth-child(2) {\n  grid-column: span 2;\n}\n.photos .photos-grid div:nth-child(3) {\n  grid-column: span 3;\n}\n.photos .photos-grid div:nth-child(4) {\n  grid-column: span 2;\n}\n\n.menu {\n  margin-top: 70px;\n  text-align: center;\n}\n.menu h2 {\n  margin-top: 20px;\n}\n.menu .menu-grid {\n  margin-top: 20px;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));\n  gap: 20px;\n}\n.menu .menu-grid div {\n  background-color: #fff;\n  height: 180px;\n}\n.burger-card {\n  display: flex;\n  border-radius: 10px;\n  overflow: hidden;\n  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;\n}\n.burger-image {\n  flex: 3;\n}\n.burger-card-body {\n  flex: 4;\n  text-align: left;\n  padding: 8px;\n  color: rgb(27, 27, 39);\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.burger-card-body h3 {\n  font-size: 16px;\n}\n.burger-card-body p {\n  text-align: justify;\n  line-height: 1.2;\n  font-size: 14px;\n}\n.burger-card-body p:nth-child(3) {\n  font-weight: 600;\n  font-size: 12px;\n  color: var(--color-one);\n}\n.burger-card-body button {\n  background-color: var(--color-one);\n  color: var(--color-three);\n  padding: 5px 10px;\n  border-radius: 10px;\n  margin-top: auto;\n  align-self: flex-start;\n  font-size: 12px;\n  font-weight: 600;\n}\n.burger-card .burger-image img {\n  height: 180px;\n  width: 100%;\n  object-fit: cover;\n}\nfooter {\n  width: 100%;\n  margin-top: 30px;\n  text-align: center;\n  padding: 20px;\n  color: var(--color-three);\n  background-color: var(--color-one);\n  font-size: 12px;\n  position: relative;\n  bottom: 0;\n}\nfooter a {\n  text-decoration: none;\n  color: inherit;\n}\n@media screen and (max-width: 480px) {\n  .container {\n    width: 90%;\n  }\n  .navbar .links {\n    display: none;\n  }\n  hero-text h1 {\n    font-size: 30px;\n  }\n}\n"],"sourceRoot":""}]);
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
    <p>
    ${burger.description.slice(0, 70)} ...
    </p>
    <p>30$ USD</p>
    <button class="btn">Order Now</button>
  </div>
`;
  div.insertAdjacentHTML("afterbegin", html);
  return div;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (burgerCard);


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
  const footer = document.createElement("footer");
  const html = `
  <p>
    Copyright &copy; 2023 <a href="">Mustafa Hassan</a> - All Rights
    Reversed.
  </p>`;
  footer.insertAdjacentHTML("afterbegin", html);
  return footer;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (footer);


/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const header = () => {
  const header = document.createElement("header");
  const html = `
  <nav class="navbar">
    <div class="container">
      <h1 class="logo">BURGER HUB</h1>
      <ul class="links">
        <li><a href="#" class="link">Home</a></li>
        <li><a href="#" class="link">Menu</a></li>
        <li><a href="#" class="link">Contact us</a></li>
        <li><a href="#" class="link">About</a></li>
      </ul>
    </div>
  </nav>
`;
  header.insertAdjacentHTML("afterbegin", html);
  return header;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header);


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
    <h1>Enter The World Of Burger</h1>
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
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ "./src/components/header.js");
/* harmony import */ var _hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hero */ "./src/components/hero.js");
/* harmony import */ var _photosGrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./photosGrid */ "./src/components/photosGrid.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer */ "./src/components/footer.js");




const homepage = () => {
  const main = document.createElement("main");
  main.appendChild((0,_header__WEBPACK_IMPORTED_MODULE_0__["default"])());
  main.appendChild((0,_hero__WEBPACK_IMPORTED_MODULE_1__["default"])());
  main.appendChild((0,_photosGrid__WEBPACK_IMPORTED_MODULE_2__["default"])());
  main.appendChild((0,_footer__WEBPACK_IMPORTED_MODULE_3__["default"])());
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
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ "./src/components/header.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer */ "./src/components/footer.js");
/* harmony import */ var _burgerCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./burgerCard */ "./src/components/burgerCard.js");



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
    grid.appendChild((0,_burgerCard__WEBPACK_IMPORTED_MODULE_2__["default"])(burgers[i], i));
  }
  container.appendChild(h2);
  container.appendChild(grid);
  div.appendChild(container);
  main.appendChild((0,_header__WEBPACK_IMPORTED_MODULE_0__["default"])());
  main.appendChild(div);
  main.appendChild((0,_footer__WEBPACK_IMPORTED_MODULE_1__["default"])());
  return main;
};

const burgers = [
  {
    name: "Classic Cheeseburger",
    description:
      "This burger is a classic for a reason. It usually consists of a beef patty, American cheese, lettuce, tomato, pickles, onions, and a special sauce. ",
    price: "8",
  },

  {
    name: "Bacon Cheeseburger",
    description:
      "Similar to the classic cheeseburger, but with the addition of crispy bacon on top of the beef patty. Price",
    price: "13",
  },

  {
    name: "Veggie Burger",
    description:
      " A vegetarian option, this burger typically includes a patty made of vegetables such as black beans, mushrooms, or lentils. It may also include toppings such as avocado, sprouts, or hummus",
    price: "9",
  },

  {
    name: "BBQ Burger",
    description:
      "This burger includes a beef patty, cheddar cheese, crispy onion rings, and barbecue sauce. It's a sweet and savory option that is sure to satisfy",
    price: "14",
  },
  {
    name: "Mushroom Swiss",
    description:
      "This burger includes a beef patty, Swiss cheese, sautéed mushrooms, and sometimes onions. It's a great option for mushroom lovers.",
    price: "10",
  },
  {
    name: "Double Cheeseburger",
    description:
      "This burger includes two beef patties instead of one, as well as double the amount of cheese and toppings. It's a hearty option for those with a big appetite",
    price: "16",
  },
  {
    name: "Hawaiian Burger",
    description:
      "This burger includes a beef patty, grilled pineapple, teriyaki sauce, and sometimes ham or bacon. It's a sweet and salty option that is popular in Hawaii. Price",
    price: "11",
  },
  {
    name: "Jalapeno Burger",
    description:
      "his burger includes a beef patty, pepper jack cheese, jalapeno peppers, and sometimes spicy mayo. It's a spicy option for those who like a little heat. Price",
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
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
// Components


// style


const content = document.querySelector(".content");
content.appendChild((0,_components_menu__WEBPACK_IMPORTED_MODULE_1__["default"])());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQzZDO0FBQ1I7QUFDckM7QUFDNEI7O0FBRTVCO0FBQ0Esb0JBQW9CLDREQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3M/ZmY5NCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2UvLi9zcmMvY29tcG9uZW50cy9idXJnZXJDYXJkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2UvLi9zcmMvY29tcG9uZW50cy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS8uL3NyYy9jb21wb25lbnRzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlLy4vc3JjL2NvbXBvbmVudHMvaGVyby5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlLy4vc3JjL2NvbXBvbmVudHMvaG9tZXBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS8uL3NyYy9jb21wb25lbnRzL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS8uL3NyYy9jb21wb25lbnRzL3Bob3Rvc0dyaWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9pbWcvaGVyby5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG46cm9vdCB7XFxuICAtLWNvbG9yLXRvdzogI2ViYTgzYTtcXG4gIC0tY29sb3Itb25lOiAjYmIzNzFhO1xcbiAgLS1jb2xvci10aHJlZTogI2ZmZjhkOTtcXG4gIC0tY29sb3ItZm91cjogI2Q1ZGJiMztcXG59XFxuaHRtbCxcXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxubWFpbiB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItdGhyZWUpO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4uY29udGFpbmVyIHtcXG4gIHdpZHRoOiA4MCU7XFxuICBtYXJnaW46IGF1dG87XFxuICBtYXgtd2lkdGg6IDkwMHB4O1xcbn1cXG4uYnRuIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLW9uZSk7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICB6LWluZGV4OiAyO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5uYXZiYXIgLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZzogMTVweCAwO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci10aHJlZSk7XFxufVxcbi5uYXZiYXIgLmxpbmtzIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG4ubmF2YmFyIC5saW5rcyAubGluayB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogaW5oZXJpdDtcXG59XFxuLmhlcm8ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC42KSwgcmdiYSgwLCAwLCAwLCAwLjYpKSxcXG4gICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmhlcm8tdGV4dCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItdGhyZWUpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uaGVyby10ZXh0IGgxIHtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG4uaGVyby10ZXh0IC5vcmRlci1ub3cge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itb25lKTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci10aHJlZSk7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG4ucGhvdG9zIHtcXG4gIG1hcmdpbjogMjBweCAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ucGhvdG9zIGgyLFxcbi5tZW51IGgyIHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1vbmUpO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWNvbG9yLW9uZSk7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbi5waG90b3MgLnBob3Rvcy1ncmlkIHtcXG4gIG1hcmdpbi10b3A6IDMwcHg7XFxuICBoZWlnaHQ6IDU1MHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxZnIpO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG4ucGhvdG9zIC5waG90b3MtZ3JpZCBkaXYge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ViYTgzYTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4ucGhvdG9zIC5waG90b3MtZ3JpZCBkaXYgaW1nIHtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5waG90b3MgLnBob3Rvcy1ncmlkIGRpdjpudGgtY2hpbGQoMikge1xcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcXG59XFxuLnBob3RvcyAucGhvdG9zLWdyaWQgZGl2Om50aC1jaGlsZCgzKSB7XFxuICBncmlkLWNvbHVtbjogc3BhbiAzO1xcbn1cXG4ucGhvdG9zIC5waG90b3MtZ3JpZCBkaXY6bnRoLWNoaWxkKDQpIHtcXG4gIGdyaWQtY29sdW1uOiBzcGFuIDI7XFxufVxcblxcbi5tZW51IHtcXG4gIG1hcmdpbi10b3A6IDcwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5tZW51IGgyIHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcbi5tZW51IC5tZW51LWdyaWQge1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMyMHB4LCAxZnIpKTtcXG4gIGdhcDogMjBweDtcXG59XFxuLm1lbnUgLm1lbnUtZ3JpZCBkaXYge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGhlaWdodDogMTgwcHg7XFxufVxcbi5idXJnZXItY2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTIpIDBweCAxcHggM3B4LCByZ2JhKDAsIDAsIDAsIDAuMjQpIDBweCAxcHggMnB4O1xcbn1cXG4uYnVyZ2VyLWltYWdlIHtcXG4gIGZsZXg6IDM7XFxufVxcbi5idXJnZXItY2FyZC1ib2R5IHtcXG4gIGZsZXg6IDQ7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgcGFkZGluZzogOHB4O1xcbiAgY29sb3I6IHJnYigyNywgMjcsIDM5KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA0cHg7XFxufVxcbi5idXJnZXItY2FyZC1ib2R5IGgzIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuLmJ1cmdlci1jYXJkLWJvZHkgcCB7XFxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbiAgbGluZS1oZWlnaHQ6IDEuMjtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuLmJ1cmdlci1jYXJkLWJvZHkgcDpudGgtY2hpbGQoMykge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1vbmUpO1xcbn1cXG4uYnVyZ2VyLWNhcmQtYm9keSBidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itb25lKTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci10aHJlZSk7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbi5idXJnZXItY2FyZCAuYnVyZ2VyLWltYWdlIGltZyB7XFxuICBoZWlnaHQ6IDE4MHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG59XFxuZm9vdGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLXRvcDogMzBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItdGhyZWUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itb25lKTtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvdHRvbTogMDtcXG59XFxuZm9vdGVyIGEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XFxuICAuY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDkwJTtcXG4gIH1cXG4gIC5uYXZiYXIgLmxpbmtzIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gIGhlcm8tdGV4dCBoMSB7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0Usb0JBQW9CO0VBQ3BCLG9CQUFvQjtFQUNwQixzQkFBc0I7RUFDdEIscUJBQXFCO0FBQ3ZCO0FBQ0E7O0VBRUUsWUFBWTtBQUNkO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsa0NBQWtDO0VBQ2xDLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0Usa0NBQWtDO0VBQ2xDLGVBQWU7RUFDZixNQUFNO0VBQ04sVUFBVTtFQUNWLFdBQVc7QUFDYjtBQUNBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixTQUFTO0FBQ1g7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRTsyQ0FDd0I7RUFDeEIsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztFQUNoQyx5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usa0NBQWtDO0VBQ2xDLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjtBQUNBOztFQUVFLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsdUJBQXVCO0VBQ3ZCLHlDQUF5QztFQUN6QyxxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsYUFBYTtFQUNiLHFDQUFxQztFQUNyQyxrQ0FBa0M7RUFDbEMsU0FBUztBQUNYO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixXQUFXO0FBQ2I7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsMkRBQTJEO0VBQzNELFNBQVM7QUFDWDtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLGFBQWE7QUFDZjtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsNEVBQTRFO0FBQzlFO0FBQ0E7RUFDRSxPQUFPO0FBQ1Q7QUFDQTtFQUNFLE9BQU87RUFDUCxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFFBQVE7QUFDVjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0Usa0NBQWtDO0VBQ2xDLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsa0NBQWtDO0VBQ2xDLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsU0FBUztBQUNYO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztBQUNoQjtBQUNBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7RUFDQTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbjpyb290IHtcXG4gIC0tY29sb3ItdG93OiAjZWJhODNhO1xcbiAgLS1jb2xvci1vbmU6ICNiYjM3MWE7XFxuICAtLWNvbG9yLXRocmVlOiAjZmZmOGQ5O1xcbiAgLS1jb2xvci1mb3VyOiAjZDVkYmIzO1xcbn1cXG5odG1sLFxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5tYWluIHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci10aHJlZSk7XFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5jb250YWluZXIge1xcbiAgd2lkdGg6IDgwJTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIG1heC13aWR0aDogOTAwcHg7XFxufVxcbi5idG4ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itb25lKTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIHotaW5kZXg6IDI7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLm5hdmJhciAuY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nOiAxNXB4IDA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRocmVlKTtcXG59XFxuLm5hdmJhciAubGlua3Mge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDIwcHg7XFxufVxcbi5uYXZiYXIgLmxpbmtzIC5saW5rIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbn1cXG4uaGVybyB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjYpLCByZ2JhKDAsIDAsIDAsIDAuNikpLFxcbiAgICB1cmwoXFxcIi4uL2ltZy9oZXJvLmpwZ1xcXCIpO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uaGVyby10ZXh0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci10aHJlZSk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5oZXJvLXRleHQgaDEge1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcbi5oZXJvLXRleHQgLm9yZGVyLW5vdyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1vbmUpO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRocmVlKTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbi5waG90b3Mge1xcbiAgbWFyZ2luOiAyMHB4IDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5waG90b3MgaDIsXFxuLm1lbnUgaDIge1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLW9uZSk7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tY29sb3Itb25lKTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuLnBob3RvcyAucGhvdG9zLWdyaWQge1xcbiAgbWFyZ2luLXRvcDogMzBweDtcXG4gIGhlaWdodDogNTUwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDFmcik7XFxuICBnYXA6IDEwcHg7XFxufVxcbi5waG90b3MgLnBob3Rvcy1ncmlkIGRpdiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJhODNhO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5waG90b3MgLnBob3Rvcy1ncmlkIGRpdiBpbWcge1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLnBob3RvcyAucGhvdG9zLWdyaWQgZGl2Om50aC1jaGlsZCgyKSB7XFxuICBncmlkLWNvbHVtbjogc3BhbiAyO1xcbn1cXG4ucGhvdG9zIC5waG90b3MtZ3JpZCBkaXY6bnRoLWNoaWxkKDMpIHtcXG4gIGdyaWQtY29sdW1uOiBzcGFuIDM7XFxufVxcbi5waG90b3MgLnBob3Rvcy1ncmlkIGRpdjpudGgtY2hpbGQoNCkge1xcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcXG59XFxuXFxuLm1lbnUge1xcbiAgbWFyZ2luLXRvcDogNzBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLm1lbnUgaDIge1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuLm1lbnUgLm1lbnUtZ3JpZCB7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzIwcHgsIDFmcikpO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG4ubWVudSAubWVudS1ncmlkIGRpdiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgaGVpZ2h0OiAxODBweDtcXG59XFxuLmJ1cmdlci1jYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xMikgMHB4IDFweCAzcHgsIHJnYmEoMCwgMCwgMCwgMC4yNCkgMHB4IDFweCAycHg7XFxufVxcbi5idXJnZXItaW1hZ2Uge1xcbiAgZmxleDogMztcXG59XFxuLmJ1cmdlci1jYXJkLWJvZHkge1xcbiAgZmxleDogNDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBjb2xvcjogcmdiKDI3LCAyNywgMzkpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDRweDtcXG59XFxuLmJ1cmdlci1jYXJkLWJvZHkgaDMge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG4uYnVyZ2VyLWNhcmQtYm9keSBwIHtcXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XFxuICBsaW5lLWhlaWdodDogMS4yO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG4uYnVyZ2VyLWNhcmQtYm9keSBwOm50aC1jaGlsZCgzKSB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLW9uZSk7XFxufVxcbi5idXJnZXItY2FyZC1ib2R5IGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1vbmUpO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRocmVlKTtcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuLmJ1cmdlci1jYXJkIC5idXJnZXItaW1hZ2UgaW1nIHtcXG4gIGhlaWdodDogMTgwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbn1cXG5mb290ZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci10aHJlZSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1vbmUpO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm90dG9tOiAwO1xcbn1cXG5mb290ZXIgYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogaW5oZXJpdDtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcXG4gIC5jb250YWluZXIge1xcbiAgICB3aWR0aDogOTAlO1xcbiAgfVxcbiAgLm5hdmJhciAubGlua3Mge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgaGVyby10ZXh0IGgxIHtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBpbWcxIGZyb20gXCIuLi9pbWcvYnVyZ2VyLTEuanBnXCI7XG5pbXBvcnQgaW1nMiBmcm9tIFwiLi4vaW1nL2J1cmdlci0yLmpwZ1wiO1xuaW1wb3J0IGltZzMgZnJvbSBcIi4uL2ltZy9idXJnZXItMy5qcGdcIjtcbmltcG9ydCBpbWc0IGZyb20gXCIuLi9pbWcvYnVyZ2VyLTQuanBnXCI7XG5pbXBvcnQgaW1nNSBmcm9tIFwiLi4vaW1nL2J1cmdlci01LmpwZ1wiO1xuaW1wb3J0IGltZzYgZnJvbSBcIi4uL2ltZy9idXJnZXItNi5qcGdcIjtcbmltcG9ydCBpbWc3IGZyb20gXCIuLi9pbWcvYnVyZ2VyLTcuanBnXCI7XG5pbXBvcnQgaW1nOCBmcm9tIFwiLi4vaW1nL2J1cmdlci04LmpwZ1wiO1xuY29uc3QgaW1hZ2VzID0gW2ltZzEsIGltZzIsIGltZzMsIGltZzQsIGltZzUsIGltZzYsIGltZzcsIGltZzhdO1xuY29uc3QgYnVyZ2VyQ2FyZCA9IChidXJnZXIsIGluZGV4KSA9PiB7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRpdi5jbGFzc0xpc3QuYWRkKFwiYnVyZ2VyLWNhcmRcIik7XG4gIGNvbnN0IGh0bWwgPSBgXG4gIDxkaXYgY2xhc3M9XCJidXJnZXItaW1hZ2VcIj5cbiAgICA8aW1nIHNyYz1cIiR7aW1hZ2VzW2luZGV4XX1cIiBhbHQ9XCJcIiAvPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImJ1cmdlci1jYXJkLWJvZHlcIj5cbiAgICA8aDM+JHtidXJnZXIubmFtZX08L2gzPlxuICAgIDxwPlxuICAgICR7YnVyZ2VyLmRlc2NyaXB0aW9uLnNsaWNlKDAsIDcwKX0gLi4uXG4gICAgPC9wPlxuICAgIDxwPjMwJCBVU0Q8L3A+XG4gICAgPGJ1dHRvbiBjbGFzcz1cImJ0blwiPk9yZGVyIE5vdzwvYnV0dG9uPlxuICA8L2Rpdj5cbmA7XG4gIGRpdi5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsIGh0bWwpO1xuICByZXR1cm4gZGl2O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYnVyZ2VyQ2FyZDtcbiIsImNvbnN0IGZvb3RlciA9ICgpID0+IHtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcbiAgY29uc3QgaHRtbCA9IGBcbiAgPHA+XG4gICAgQ29weXJpZ2h0ICZjb3B5OyAyMDIzIDxhIGhyZWY9XCJcIj5NdXN0YWZhIEhhc3NhbjwvYT4gLSBBbGwgUmlnaHRzXG4gICAgUmV2ZXJzZWQuXG4gIDwvcD5gO1xuICBmb290ZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLCBodG1sKTtcbiAgcmV0dXJuIGZvb3Rlcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZvb3RlcjtcbiIsImNvbnN0IGhlYWRlciA9ICgpID0+IHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgY29uc3QgaHRtbCA9IGBcbiAgPG5hdiBjbGFzcz1cIm5hdmJhclwiPlxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgIDxoMSBjbGFzcz1cImxvZ29cIj5CVVJHRVIgSFVCPC9oMT5cbiAgICAgIDx1bCBjbGFzcz1cImxpbmtzXCI+XG4gICAgICAgIDxsaT48YSBocmVmPVwiI1wiIGNsYXNzPVwibGlua1wiPkhvbWU8L2E+PC9saT5cbiAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCIgY2xhc3M9XCJsaW5rXCI+TWVudTwvYT48L2xpPlxuICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIiBjbGFzcz1cImxpbmtcIj5Db250YWN0IHVzPC9hPjwvbGk+XG4gICAgICAgIDxsaT48YSBocmVmPVwiI1wiIGNsYXNzPVwibGlua1wiPkFib3V0PC9hPjwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICA8L25hdj5cbmA7XG4gIGhlYWRlci5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsIGh0bWwpO1xuICByZXR1cm4gaGVhZGVyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaGVhZGVyO1xuIiwiaW1wb3J0IFwiLi4vaW1nL2hlcm8uanBnXCI7XG5jb25zdCBoZXJvID0gKCkgPT4ge1xuICBjb25zdCBoZXJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaGVyby5jbGFzc0xpc3QuYWRkKFwiaGVyb1wiKTtcbiAgY29uc3QgaHRtbCA9IGBcbiAgPGRpdiBjbGFzcz1cImhlcm8tdGV4dFwiPlxuICAgIDxoMT5FbnRlciBUaGUgV29ybGQgT2YgQnVyZ2VyPC9oMT5cbiAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIG9yZGVyLW5vd1wiPk9SREVSIE5PVzwvYnV0dG9uPlxuICA8L2Rpdj5gO1xuICBoZXJvLmluc2VydEFkamFjZW50SFRNTChcImFmdGVyYmVnaW5cIiwgaHRtbCk7XG4gIHJldHVybiBoZXJvO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaGVybztcbiIsImltcG9ydCBoZWFkZXIgZnJvbSBcIi4vaGVhZGVyXCI7XG5pbXBvcnQgaGVybyBmcm9tIFwiLi9oZXJvXCI7XG5pbXBvcnQgcGhvdG9zR3JpZCBmcm9tIFwiLi9waG90b3NHcmlkXCI7XG5pbXBvcnQgZm9vdGVyIGZyb20gXCIuL2Zvb3RlclwiO1xuY29uc3QgaG9tZXBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChoZWFkZXIoKSk7XG4gIG1haW4uYXBwZW5kQ2hpbGQoaGVybygpKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChwaG90b3NHcmlkKCkpO1xuICBtYWluLmFwcGVuZENoaWxkKGZvb3RlcigpKTtcbiAgcmV0dXJuIG1haW47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBob21lcGFnZTtcbiIsImltcG9ydCBoZWFkZXIgZnJvbSBcIi4vaGVhZGVyXCI7XG5pbXBvcnQgZm9vdGVyIGZyb20gXCIuL2Zvb3RlclwiO1xuaW1wb3J0IGJ1cmdlckNhcmQgZnJvbSBcIi4vYnVyZ2VyQ2FyZFwiO1xuY29uc3QgbWVudSA9ICgpID0+IHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRpdi5jbGFzc0xpc3QuYWRkKFwibWVudVwiKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIik7XG4gIGgyLnRleHRDb250ZW50ID0gXCJNZW51XCI7XG4gIGdyaWQuY2xhc3NMaXN0LmFkZChcIm1lbnUtZ3JpZFwiKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBidXJnZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgZ3JpZC5hcHBlbmRDaGlsZChidXJnZXJDYXJkKGJ1cmdlcnNbaV0sIGkpKTtcbiAgfVxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaDIpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ3JpZCk7XG4gIGRpdi5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICBtYWluLmFwcGVuZENoaWxkKGhlYWRlcigpKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChkaXYpO1xuICBtYWluLmFwcGVuZENoaWxkKGZvb3RlcigpKTtcbiAgcmV0dXJuIG1haW47XG59O1xuXG5jb25zdCBidXJnZXJzID0gW1xuICB7XG4gICAgbmFtZTogXCJDbGFzc2ljIENoZWVzZWJ1cmdlclwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJUaGlzIGJ1cmdlciBpcyBhIGNsYXNzaWMgZm9yIGEgcmVhc29uLiBJdCB1c3VhbGx5IGNvbnNpc3RzIG9mIGEgYmVlZiBwYXR0eSwgQW1lcmljYW4gY2hlZXNlLCBsZXR0dWNlLCB0b21hdG8sIHBpY2tsZXMsIG9uaW9ucywgYW5kIGEgc3BlY2lhbCBzYXVjZS4gXCIsXG4gICAgcHJpY2U6IFwiOFwiLFxuICB9LFxuXG4gIHtcbiAgICBuYW1lOiBcIkJhY29uIENoZWVzZWJ1cmdlclwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJTaW1pbGFyIHRvIHRoZSBjbGFzc2ljIGNoZWVzZWJ1cmdlciwgYnV0IHdpdGggdGhlIGFkZGl0aW9uIG9mIGNyaXNweSBiYWNvbiBvbiB0b3Agb2YgdGhlIGJlZWYgcGF0dHkuIFByaWNlXCIsXG4gICAgcHJpY2U6IFwiMTNcIixcbiAgfSxcblxuICB7XG4gICAgbmFtZTogXCJWZWdnaWUgQnVyZ2VyXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIiBBIHZlZ2V0YXJpYW4gb3B0aW9uLCB0aGlzIGJ1cmdlciB0eXBpY2FsbHkgaW5jbHVkZXMgYSBwYXR0eSBtYWRlIG9mIHZlZ2V0YWJsZXMgc3VjaCBhcyBibGFjayBiZWFucywgbXVzaHJvb21zLCBvciBsZW50aWxzLiBJdCBtYXkgYWxzbyBpbmNsdWRlIHRvcHBpbmdzIHN1Y2ggYXMgYXZvY2Fkbywgc3Byb3V0cywgb3IgaHVtbXVzXCIsXG4gICAgcHJpY2U6IFwiOVwiLFxuICB9LFxuXG4gIHtcbiAgICBuYW1lOiBcIkJCUSBCdXJnZXJcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiVGhpcyBidXJnZXIgaW5jbHVkZXMgYSBiZWVmIHBhdHR5LCBjaGVkZGFyIGNoZWVzZSwgY3Jpc3B5IG9uaW9uIHJpbmdzLCBhbmQgYmFyYmVjdWUgc2F1Y2UuIEl0J3MgYSBzd2VldCBhbmQgc2F2b3J5IG9wdGlvbiB0aGF0IGlzIHN1cmUgdG8gc2F0aXNmeVwiLFxuICAgIHByaWNlOiBcIjE0XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIk11c2hyb29tIFN3aXNzXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIlRoaXMgYnVyZ2VyIGluY2x1ZGVzIGEgYmVlZiBwYXR0eSwgU3dpc3MgY2hlZXNlLCBzYXV0w6llZCBtdXNocm9vbXMsIGFuZCBzb21ldGltZXMgb25pb25zLiBJdCdzIGEgZ3JlYXQgb3B0aW9uIGZvciBtdXNocm9vbSBsb3ZlcnMuXCIsXG4gICAgcHJpY2U6IFwiMTBcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiRG91YmxlIENoZWVzZWJ1cmdlclwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJUaGlzIGJ1cmdlciBpbmNsdWRlcyB0d28gYmVlZiBwYXR0aWVzIGluc3RlYWQgb2Ygb25lLCBhcyB3ZWxsIGFzIGRvdWJsZSB0aGUgYW1vdW50IG9mIGNoZWVzZSBhbmQgdG9wcGluZ3MuIEl0J3MgYSBoZWFydHkgb3B0aW9uIGZvciB0aG9zZSB3aXRoIGEgYmlnIGFwcGV0aXRlXCIsXG4gICAgcHJpY2U6IFwiMTZcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiSGF3YWlpYW4gQnVyZ2VyXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIlRoaXMgYnVyZ2VyIGluY2x1ZGVzIGEgYmVlZiBwYXR0eSwgZ3JpbGxlZCBwaW5lYXBwbGUsIHRlcml5YWtpIHNhdWNlLCBhbmQgc29tZXRpbWVzIGhhbSBvciBiYWNvbi4gSXQncyBhIHN3ZWV0IGFuZCBzYWx0eSBvcHRpb24gdGhhdCBpcyBwb3B1bGFyIGluIEhhd2FpaS4gUHJpY2VcIixcbiAgICBwcmljZTogXCIxMVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJKYWxhcGVubyBCdXJnZXJcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiaGlzIGJ1cmdlciBpbmNsdWRlcyBhIGJlZWYgcGF0dHksIHBlcHBlciBqYWNrIGNoZWVzZSwgamFsYXBlbm8gcGVwcGVycywgYW5kIHNvbWV0aW1lcyBzcGljeSBtYXlvLiBJdCdzIGEgc3BpY3kgb3B0aW9uIGZvciB0aG9zZSB3aG8gbGlrZSBhIGxpdHRsZSBoZWF0LiBQcmljZVwiLFxuICAgIHByaWNlOiBcIjEyXCIsXG4gIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBtZW51O1xuIiwiaW1wb3J0IGltZzEgZnJvbSBcIi4uL2ltZy9ncmlkLXBob3RvLTEuanBnXCI7XG5pbXBvcnQgaW1nMiBmcm9tIFwiLi4vaW1nL2dyaWQtcGhvdG8tMi5qcGdcIjtcbmltcG9ydCBpbWczIGZyb20gXCIuLi9pbWcvZ3JpZC1waG90by0zLmpwZ1wiO1xuaW1wb3J0IGltZzQgZnJvbSBcIi4uL2ltZy9ncmlkLXBob3RvLTQuanBnXCI7XG5pbXBvcnQgaW1nNSBmcm9tIFwiLi4vaW1nL2dyaWQtcGhvdG8tNS5qcGdcIjtcbmNvbnN0IHBob3Rvc0dyaWQgPSAoKSA9PiB7XG4gIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBncmlkLmNsYXNzTGlzdC5hZGQoXCJwaG90b3NcIik7XG4gIGNvbnN0IGh0bWwgPSBgXG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICA8aDI+UGhvdG9zPC9oMj5cbiAgICA8ZGl2IGNsYXNzPVwicGhvdG9zLWdyaWRcIj5cbiAgICAgIDxkaXY+PGltZyBzcmM9XCIke2ltZzF9XCIgYWx0PVwiXCIgLz48L2Rpdj5cbiAgICAgIDxkaXY+PGltZyBzcmM9XCIke2ltZzN9XCIgYWx0PVwiXCIgLz48L2Rpdj5cbiAgICAgIDxkaXY+PGltZyBzcmM9XCIke2ltZzJ9XCIgYWx0PVwiXCIgLz48L2Rpdj5cbiAgICAgIDxkaXY+PGltZyBzcmM9XCIke2ltZzV9XCIgYWx0PVwiXCIgLz48L2Rpdj5cbiAgICAgIDxkaXY+PGltZyBzcmM9XCIke2ltZzR9XCIgYWx0PVwiXCIgLz48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+YDtcbiAgZ3JpZC5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsIGh0bWwpO1xuICByZXR1cm4gZ3JpZDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBob3Rvc0dyaWQ7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLy8gQ29tcG9uZW50c1xuaW1wb3J0IGhvbWVwYWdlIGZyb20gXCIuL2NvbXBvbmVudHMvaG9tZXBhZ2VcIjtcbmltcG9ydCBtZW51IGZyb20gXCIuL2NvbXBvbmVudHMvbWVudVwiO1xuLy8gc3R5bGVcbmltcG9ydCBcIi4vc3R5bGVzL3N0eWxlLmNzc1wiO1xuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuY29udGVudC5hcHBlbmRDaGlsZChtZW51KCkpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9