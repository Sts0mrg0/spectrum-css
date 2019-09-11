(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/components/[id].js"],{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/garthdb/Spectrum/spectrum-css/components/Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var pathPrefix =  false ? undefined : '';
var linkStyle = {
  marginRight: 15
};
function Header() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "".concat(pathPrefix, "/"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("a", {
    style: linkStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Home")));
}

/***/ }),

/***/ "./components/MyLayout.js":
/*!********************************!*\
  !*** ./components/MyLayout.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
var _jsxFileName = "/Users/garthdb/Spectrum/spectrum-css/components/MyLayout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Layout(props) {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, props.children);
}

/***/ }),

/***/ "./components/Sidebar.js":
/*!*******************************!*\
  !*** ./components/Sidebar.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _react_react_spectrum_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @react/react-spectrum/Button */ "./node_modules/@react/react-spectrum/Button/index.js");
/* harmony import */ var _react_react_spectrum_Button__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_react_react_spectrum_Button__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _react_react_spectrum_Icon_ShowMenu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @react/react-spectrum/Icon/ShowMenu */ "./node_modules/@react/react-spectrum/Icon/ShowMenu/index.js");
/* harmony import */ var _react_react_spectrum_Icon_ShowMenu__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_react_react_spectrum_Icon_ShowMenu__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _react_react_spectrum_SideNav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @react/react-spectrum/SideNav */ "./node_modules/@react/react-spectrum/SideNav/index.js");
/* harmony import */ var _react_react_spectrum_SideNav__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_react_react_spectrum_SideNav__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _data_newmenu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../data/newmenu */ "./data/newmenu.json");
var _data_newmenu__WEBPACK_IMPORTED_MODULE_14___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/newmenu */ "./data/newmenu.json", 1);
/* harmony import */ var _css_sidebar_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./css/sidebar.scss */ "./components/css/sidebar.scss");
/* harmony import */ var _css_sidebar_scss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_css_sidebar_scss__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _SiteSearch__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./SiteSearch */ "./components/SiteSearch.js");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! next/config */ "./node_modules/next-server/dist/lib/runtime-config.js");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_17__);







var _jsxFileName = "/Users/garthdb/Spectrum/spectrum-css/components/Sidebar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;











var pathPrefix =  false ? undefined : '';

var Sidebar =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Sidebar, _React$Component);

  function Sidebar(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Sidebar);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Sidebar).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "openMenu", function () {
      _this.setState({
        menuOpen: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "closeMenu", function () {
      _this.setState({
        menuOpen: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "navigate", function (slug, type) {
      if (type === 'Internal') {
        next_router__WEBPACK_IMPORTED_MODULE_12___default.a.push("/guideline?id=".concat(slug), "".concat(pathPrefix, "/components/").concat(slug, "/"));

        _this.setState({
          menuOpen: false
        });
      } else {
        window.open(slug, '_blank');
      }
    });

    _this.selectedItem = react__WEBPACK_IMPORTED_MODULE_7___default.a.createRef();
    var selected = _data_newmenu__WEBPACK_IMPORTED_MODULE_14__.key.find(function (item) {
      return item.url === props.router.query.id;
    });
    _this.state = {
      menuOpen: false,
      selectedParents: selected ? selected.parent.split(',') : new Array()
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Sidebar, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      //console.log(nextProps.router.query.id);
      var selected = _data_newmenu__WEBPACK_IMPORTED_MODULE_14__.key.find(function (item) {
        return item.url === nextProps.router.query.id;
      });
      this.setState({
        selectedParents: selected ? selected.parent.split(',') : new Array()
      }); //Perform some operation
      //this.setState({someState: someValue });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_13___default()(_css_sidebar_scss__WEBPACK_IMPORTED_MODULE_15___default.a.overlay, this.state.menuOpen ? _css_sidebar_scss__WEBPACK_IMPORTED_MODULE_15___default.a.menuOpen : _css_sidebar_scss__WEBPACK_IMPORTED_MODULE_15___default.a.menuClosed),
        onClick: function onClick() {
          return _this2.closeMenu();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }), __jsx("div", {
        className: _css_sidebar_scss__WEBPACK_IMPORTED_MODULE_15___default.a.appHeader,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, __jsx(_react_react_spectrum_Button__WEBPACK_IMPORTED_MODULE_9___default.a, {
        variant: "tool",
        icon: __jsx(_react_react_spectrum_Icon_ShowMenu__WEBPACK_IMPORTED_MODULE_10___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          },
          __self: this
        }),
        "aria-label": "Show",
        onClick: function onClick() {
          return _this2.openMenu();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      })), __jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_13___default()(_css_sidebar_scss__WEBPACK_IMPORTED_MODULE_15___default.a.sideBar, this.state.menuOpen ? _css_sidebar_scss__WEBPACK_IMPORTED_MODULE_15___default.a.menuOpen : _css_sidebar_scss__WEBPACK_IMPORTED_MODULE_15___default.a.menuClosed),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, __jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_13___default()(_css_sidebar_scss__WEBPACK_IMPORTED_MODULE_15___default.a.spectrumSidebar),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, __jsx("div", {
        className: _css_sidebar_scss__WEBPACK_IMPORTED_MODULE_15___default.a.header,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/guideline?id=home",
        as: "".concat(pathPrefix, "/"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, __jsx("img", {
        src: "".concat(pathPrefix, "/static/logo.png"),
        alt: "Spectrum Logo",
        srcSet: "".concat(pathPrefix, "/static/logo@2x.png 2x"),
        className: _css_sidebar_scss__WEBPACK_IMPORTED_MODULE_15___default.a.logo,
        onClick: function onClick() {
          return _this2.navigate('home', "Internal");
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }))), __jsx(_SiteSearch__WEBPACK_IMPORTED_MODULE_16__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      })), __jsx("div", {
        className: _css_sidebar_scss__WEBPACK_IMPORTED_MODULE_15___default.a.navigation,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, __jsx(_react_react_spectrum_SideNav__WEBPACK_IMPORTED_MODULE_11__["SideNav"], {
        defaultValue: this.props.router.query.id,
        style: {
          width: '200px',
          marginBottom: 80
        },
        variant: "multiLevel",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, _data_newmenu__WEBPACK_IMPORTED_MODULE_14__.menu[0].children.map(function (item, i) {
        return __jsx(_react_react_spectrum_SideNav__WEBPACK_IMPORTED_MODULE_11__["SideNavItem"], {
          defaultExpanded: _this2.state.selectedParents.includes(item.title) ? true : false,
          value: item.url,
          label: item.title,
          key: i,
          style: {
            width: '200px'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          },
          __self: this
        }, item.children && item.children.map(function (mi, i) {
          return __jsx(_react_react_spectrum_SideNav__WEBPACK_IMPORTED_MODULE_11__["SideNavItem"], {
            value: mi.url,
            label: mi.title,
            key: i,
            onClick: function onClick() {
              mi.linkType !== 'group' ? _this2.navigate(mi.url, mi.linkType) : undefined; // mi.url ? this.navigate(mi.url, 'Internal'): undefined
            },
            style: {
              width: '200px'
            },
            defaultExpanded: _this2.state.selectedParents.includes(item.title),
            ref: _this2.props.router.query.id === mi.url ? _this2.selectedItem : undefined,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 94
            },
            __self: this
          }, mi.linkType === 'group' && mi.children.map(function (mi3, i) {
            return __jsx(_react_react_spectrum_SideNav__WEBPACK_IMPORTED_MODULE_11__["SideNavItem"], {
              value: mi3.url,
              key: i,
              label: mi3.title,
              onClick: function onClick() {
                return _this2.navigate(mi3.url, mi3.linkType);
              },
              style: {
                width: '200px'
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 109
              },
              __self: this
            });
          }));
        }));
      })), __jsx(_react_react_spectrum_SideNav__WEBPACK_IMPORTED_MODULE_11__["SideNav"], {
        style: {
          width: '200px',
          marginBottom: '40px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, __jsx(_react_react_spectrum_SideNav__WEBPACK_IMPORTED_MODULE_11__["SideNavItem"], {
        value: "Contributions",
        target: "_blank",
        href: "https://spectrum-contributions.corp.adobe.com",
        style: {
          width: '200px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, "Contributions"))))));
    }
  }]);

  return Sidebar;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_12__["withRouter"])(Sidebar));

/***/ }),

/***/ "./components/SiteSearch.js":
/*!**********************************!*\
  !*** ./components/SiteSearch.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _react_react_spectrum_Search__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @react/react-spectrum/Search */ "./node_modules/@react/react-spectrum/Search/index.js");
/* harmony import */ var _react_react_spectrum_Search__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_react_react_spectrum_Search__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./css/siteSearch.scss */ "./components/css/siteSearch.scss");
/* harmony import */ var _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var lunr__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! lunr */ "./node_modules/lunr/lunr.js");
/* harmony import */ var lunr__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(lunr__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _data_search_store__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../data/search_store */ "./data/search_store.json");
var _data_search_store__WEBPACK_IMPORTED_MODULE_15___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/search_store */ "./data/search_store.json", 1);
/* harmony import */ var _data_search_index__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../data/search_index */ "./data/search_index.json");
var _data_search_index__WEBPACK_IMPORTED_MODULE_16___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/search_index */ "./data/search_index.json", 1);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! next/config */ "./node_modules/next-server/dist/lib/runtime-config.js");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_17__);









var _jsxFileName = "/Users/garthdb/Spectrum/spectrum-css/components/SiteSearch.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;









var SiteSearch =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(SiteSearch, _React$Component);

  function SiteSearch(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, SiteSearch);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(SiteSearch).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "resetSearch", function () {
      _this.setState({
        menuOpen: false,
        results: [],
        usageGuidelines: [],
        components: [],
        foundation: [],
        files: [],
        behaviors: [],
        contributions: [],
        resources: [],
        tutorials: [],
        searchVal: '',
        numResults: 0,
        kbSelectedIndex: 1,
        kbSelectedLink: undefined,
        kbSelectedType: undefined
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "handleKeyPress", function (e) {
      //console.log('keypress function');
      if (_this.state.menuOpen && _this.state.searchVal.length) {
        switch (e.key) {
          case "ArrowDown":
            _this.setState({
              kbSelectedIndex: _this.state.kbSelectedIndex == _this.state.numResults ? _this.state.numResults : _this.state.kbSelectedIndex + 1
            });

            break;

          case "ArrowUp":
            _this.setState({
              kbSelectedIndex: _this.state.kbSelectedIndex == 1 ? 1 : _this.state.kbSelectedIndex - 1
            });

            break;

          case "Enter":
            _this.navigate(_this.selectedSlug, _this.selectedSlugType, _this.selectedQuery);

            _this.resetSearch();

            document.activeElement.blur();
            break;

          default: // do nothing

        }
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "navigate", function (slug, type, query) {
      var q = query ? "#".concat(query.replace(/ /g, "-")) : '#';

      if (type === 'Internal') {
        next_router__WEBPACK_IMPORTED_MODULE_11___default.a.push("/page/".concat(slug).concat(q));

        _this.setState({
          menuOpen: false
        });
      } else if (type === 'File') {
        window.open(slug);
      } else {
        window.open(slug, '_blank');
      }

      _this.search("");

      _this.setState({
        menuOpen: false,
        searchVal: ''
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "search", function (val) {
      _this.setState({
        searchVal: val
      });

      var usageGuidelines = [];
      var components = [];
      var foundation = [];
      var behaviors = [];
      var files = [];
      var contributions = [];
      var resources = [];
      var tutorials = [];
      var r = [];

      if (val.length > 2) {
        var searchParam = "".concat(val.trim(), " ").concat(val.trim(), "*");
        r = _this.idx.search(searchParam + '*');
      }

      var length = 0;
      r.forEach(function (item, i) {
        var storeItem = _data_search_store__WEBPACK_IMPORTED_MODULE_15__[item.ref];

        if (storeItem.type == 'usageGuideline') {
          length++;
          usageGuidelines.push(storeItem);
        } else if (storeItem.type == 'page' && storeItem.pageType === 'Component') {
          length++;
          components.push(storeItem);
        } else if (storeItem.type == 'Behavior') {
          length++;
          behaviors.push(storeItem);
        } else if (storeItem.type == 'page' && storeItem.pageType === 'Foundation') {
          length++;
          foundation.push(storeItem);
        } else if (storeItem.type == 'page' && storeItem.pageType === 'Resources') {
          length++;
          resources.push(storeItem);
        } else if (storeItem.type === 'Tutorial') {
          length++;
          tutorials.push(storeItem);
        } else if (storeItem.type === 'xd') {
          length++;
          files.push(storeItem);
        } else if (storeItem.type === 'contribution') {
          length++;
          contributions.push(storeItem);
        }
      });

      _this.setState({
        results: r,
        usageGuidelines: usageGuidelines,
        components: components,
        behaviors: behaviors,
        foundation: foundation,
        files: files,
        contributions: contributions,
        resources: resources,
        tutorials: tutorials,
        numResults: length
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "closeMenu", function (e) {
      setTimeout(function () {
        this.setState({
          menuOpen: false
        });
      }.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this)), 100);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "focus", function (e) {
      _this.setState({
        menuOpen: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "getSelected", function (index, slug, type, query) {
      //TODO: this needs to be improved - data model for results weren't set up well for keyboard focus
      if (_this.state.numResults && index === _this.state.kbSelectedIndex) {
        _this.selectedSlug = slug;
        _this.selectedSlugType = type;
        _this.selectedQuery = query;
        document.getElementById("".concat(index, "_search")) ? document.getElementById("".concat(index, "_search")).scrollIntoView(false) : undefined;
        return _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_13___default.a.selected;
      }
    });

    _this.state = {
      menuOpen: false,
      results: [],
      usageGuidelines: [],
      components: [],
      foundation: [],
      files: [],
      behaviors: [],
      contributions: [],
      resources: [],
      tutorials: [],
      searchVal: '',
      numResults: 0,
      kbSelectedIndex: 1,
      kbSelectedLink: undefined,
      kbSelectedType: undefined,
      searchIndex: undefined,
      searchLoaded: true
    };
    _this.selectedSlug = undefined;
    _this.selectedQuery = undefined;
    _this.selectedSlugType = 'Internal'; //const res = await fetch(`${publicRuntimeConfig.API}/getSearchIndex`)
    //const data = await res.json();

    _this.idx = lunr__WEBPACK_IMPORTED_MODULE_14___default.a.Index.load(_data_search_index__WEBPACK_IMPORTED_MODULE_16__); //console.log(search_index);
    //this.setState({searchIndex: data});

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(SiteSearch, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this2 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                document.addEventListener("keyup", function (e) {
                  return _this2.handleKeyPress(e);
                });

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var searchIndex = 0;
      return __jsx("div", {
        className: _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_13___default.a.searchContainer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        },
        __self: this
      }, __jsx("div", {
        className: _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_13___default.a.overlay,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        __self: this
      }), __jsx(_react_react_spectrum_Search__WEBPACK_IMPORTED_MODULE_10___default.a, {
        placeholder: "Search",
        defaultValue: "",
        value: this.state.searchVal,
        style: {
          width: '100%'
        },
        onChange: function onChange(e) {
          _this3.search(e);
        },
        onFocus: function onFocus(e) {
          _this3.focus(e);
        },
        onKeyPress: function onKeyPress(e) {
          _this3.handleKeyPress(e);
        },
        disabled: !this.state.searchLoaded,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        },
        __self: this
      }), __jsx("div", {
        onClick: function onClick(e) {
          _this3.closeMenu();
        },
        className: classnames__WEBPACK_IMPORTED_MODULE_12___default()(_css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_13___default.a.overlay, this.state.menuOpen && this.state.searchVal.length > 2 ? _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_13___default.a.overlayOpen : undefined),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        },
        __self: this
      }), __jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_12___default()(_css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_13___default.a.results, this.state.menuOpen && this.state.searchVal.length > 2 ? _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_13___default.a.open : undefined),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        },
        __self: this
      }, this.state.numResults === 0 ? __jsx("div", {
        className: _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_13___default.a.noResultsContainer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        },
        __self: this
      }, __jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_12___default()('spectrum-Heading2--quiet', _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_13___default.a.noResults),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        },
        __self: this
      }, "No results found"), __jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_12___default()('spectrum-Body4', _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_13___default.a.noResulsSub),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        },
        __self: this
      }, __jsx("em", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        },
        __self: this
      }, "Try another search term."))) : undefined, this.state.foundation.length ? __jsx("div", {
        className: _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_13___default.a.resultContainer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        },
        __self: this
      }, __jsx("div", {
        className: _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_13___default.a.header,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        },
        __self: this
      }, __jsx("h4", {
        className: "spectrum-Heading--subtitle3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        },
        __self: this
      }, "Foundation")), __jsx("ul", {
        className: _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_13___default.a.resultSet,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        },
        __self: this
      }, this.state.foundation.map(function (result, i) {
        return __jsx("li", {
          id: "".concat(searchIndex++, "_search"),
          key: i,
          className: classnames__WEBPACK_IMPORTED_MODULE_12___default()('spectrum-Body4', _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_13___default.a.listItem, _this3.getSelected(searchIndex, result.slug, 'Internal')),
          onClick: function onClick() {
            _this3.navigate(result.slug, 'Internal');
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 238
          },
          __self: this
        }, result.name);
      }))) : undefined, this.state.components.length ? __jsx("div", {
        className: _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_13___default.a.resultContainer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        },
        __self: this
      }, __jsx("div", {
        className: _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_13___default.a.header,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        },
        __self: this
      }, __jsx("h4", {
        className: "spectrum-Heading--subtitle3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        },
        __self: this
      }, "Components")), __jsx("ul", {
        className: _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_13___default.a.resultSet,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        },
        __self: this
      }, this.state.components.map(function (result, i) {
        return __jsx("li", {
          id: "".concat(searchIndex++, "_search"),
          key: i,
          className: classnames__WEBPACK_IMPORTED_MODULE_12___default()('spectrum-Body4', _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_13___default.a.listItem, _this3.getSelected(searchIndex, result.slug, 'Internal')),
          onClick: function onClick() {
            _this3.navigate(result.slug, 'Internal');
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 252
          },
          __self: this
        }, result.name);
      }))) : undefined, this.state.resources.length ? __jsx("div", {
        className: _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_13___default.a.resultContainer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263
        },
        __self: this
      }, __jsx("div", {
        className: _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_13___default.a.header,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264
        },
        __self: this
      }, __jsx("h4", {
        className: "spectrum-Heading--subtitle3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264
        },
        __self: this
      }, "Resources")), __jsx("ul", {
        className: _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_13___default.a.resultSet,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265
        },
        __self: this
      }, this.state.resources.map(function (result, i) {
        return __jsx("li", {
          id: "".concat(searchIndex++, "_search"),
          key: i,
          className: classnames__WEBPACK_IMPORTED_MODULE_12___default()('spectrum-Body4', _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_13___default.a.listItem, _this3.getSelected(searchIndex, result.slug, 'Internal')),
          onClick: function onClick() {
            _this3.navigate(result.slug, 'Internal');
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 267
          },
          __self: this
        }, result.name);
      }))) : undefined, this.state.usageGuidelines.length ? __jsx("div", {
        className: _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_13___default.a.resultContainer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277
        },
        __self: this
      }, __jsx("div", {
        className: _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_13___default.a.header,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278
        },
        __self: this
      }, __jsx("h4", {
        className: "spectrum-Heading--subtitle3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278
        },
        __self: this
      }, "Usage Guidelines")), __jsx("ul", {
        className: _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_13___default.a.resultSet,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279
        },
        __self: this
      }, this.state.usageGuidelines.map(function (result, i) {
        return __jsx("li", {
          id: "".concat(searchIndex++, "_search"),
          key: i,
          className: classnames__WEBPACK_IMPORTED_MODULE_12___default()('spectrum-Body4', _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_13___default.a.listItem, _this3.getSelected(searchIndex, result.slug, 'Internal', result.query)),
          onClick: function onClick() {
            _this3.navigate(result.slug, 'Internal', result.query);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 282
          },
          __self: this
        }, __jsx("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_12___default()("spectrum-Body5", _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_13___default.a.subHeader),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 283
          },
          __self: this
        }, result.pageType, " > ", result.name), __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 284
          },
          __self: this
        }, result.display_description));
      }))) : undefined, this.state.behaviors.length ? __jsx("div", {
        className: _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_13___default.a.resultContainer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 293
        },
        __self: this
      }, __jsx("div", {
        className: _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_13___default.a.header,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 294
        },
        __self: this
      }, __jsx("h4", {
        className: "spectrum-Heading--subtitle3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 294
        },
        __self: this
      }, "Behaviors")), __jsx("ul", {
        className: _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_13___default.a.resultSet,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 295
        },
        __self: this
      }, this.state.behaviors.map(function (result, i) {
        return __jsx("li", {
          id: "".concat(searchIndex++, "_search"),
          key: i,
          className: classnames__WEBPACK_IMPORTED_MODULE_12___default()('spectrum-Body4', _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_13___default.a.listItem, _this3.getSelected(searchIndex, result.slug, 'Internal', result.query)),
          onClick: function onClick() {
            _this3.navigate(result.slug, 'Internal', result.query);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 298
          },
          __self: this
        }, __jsx("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_12___default()("spectrum-Body5", _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_13___default.a.subHeader),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 299
          },
          __self: this
        }, result.pageType, " > ", result.name), __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 300
          },
          __self: this
        }, result.display_description));
      }))) : undefined, this.state.files.length ? __jsx("div", {
        className: _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_13___default.a.resultContainer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 309
        },
        __self: this
      }, __jsx("div", {
        className: _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_13___default.a.header,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 310
        },
        __self: this
      }, __jsx("h4", {
        className: "spectrum-Heading--subtitle3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 310
        },
        __self: this
      }, "Downloads")), __jsx("ul", {
        className: _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_13___default.a.resultSet,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 311
        },
        __self: this
      }, this.state.files.map(function (result, i) {
        return __jsx("li", {
          id: "".concat(searchIndex++, "_search"),
          key: i,
          className: classnames__WEBPACK_IMPORTED_MODULE_12___default()('spectrum-Body4', _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_13___default.a.listItem, _this3.getSelected(searchIndex, "https://spectrum-resources.corp.adobe.com/resources/Latest/".concat(result.slug), 'File')),
          onClick: function onClick() {
            _this3.navigate("https://spectrum-resources.corp.adobe.com/resources/Latest/".concat(result.slug), 'File');
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 314
          },
          __self: this
        }, __jsx("div", {
          className: _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_13___default.a.file,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 315
          },
          __self: this
        }, __jsx("div", {
          className: _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_13___default.a.icon,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 316
          },
          __self: this
        }, __jsx("img", {
          src: "/static/icon_xd_small@2x.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 316
          },
          __self: this
        })), result.slug));
      }))) : undefined, this.state.tutorials.length ? __jsx("div", {
        className: _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_13___default.a.resultContainer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 326
        },
        __self: this
      }, __jsx("div", {
        className: _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_13___default.a.header,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 327
        },
        __self: this
      }, __jsx("h4", {
        className: "spectrum-Heading--subtitle3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 327
        },
        __self: this
      }, "Tutorials")), __jsx("ul", {
        className: _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_13___default.a.resultSet,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 328
        },
        __self: this
      }, this.state.tutorials.map(function (result, i) {
        return __jsx("li", {
          id: "".concat(searchIndex++, "_search"),
          key: i,
          className: classnames__WEBPACK_IMPORTED_MODULE_12___default()('spectrum-Body4', _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_13___default.a.listItem, _this3.getSelected(searchIndex, result.slug, 'External')),
          onClick: function onClick() {
            _this3.navigate(result.slug, 'External');
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 331
          },
          __self: this
        }, result.name);
      }))) : undefined, this.state.contributions.length ? __jsx("div", {
        className: _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_13___default.a.resultContainer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 339
        },
        __self: this
      }, __jsx("div", {
        className: _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_13___default.a.header,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 340
        },
        __self: this
      }, __jsx("h4", {
        className: "spectrum-Heading--subtitle3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 340
        },
        __self: this
      }, "Contributions")), __jsx("ul", {
        className: _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_13___default.a.resultSet,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 341
        },
        __self: this
      }, this.state.contributions.map(function (result, i) {
        return __jsx("li", {
          id: "".concat(searchIndex++, "_search"),
          key: i,
          className: classnames__WEBPACK_IMPORTED_MODULE_12___default()('spectrum-Body4', _css_siteSearch_scss__WEBPACK_IMPORTED_MODULE_13___default.a.listItem, _this3.getSelected(searchIndex, "https://spectrum-contributions.corp.adobe.com/submissions/".concat(result.slug), 'External')),
          onClick: function onClick() {
            _this3.navigate("https://spectrum-contributions.corp.adobe.com/submissions/".concat(result.slug), 'External');
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 344
          },
          __self: this
        }, __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 345
          },
          __self: this
        }, result.description));
      }))) : undefined));
    }
  }]);

  return SiteSearch;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SiteSearch);

/***/ }),

/***/ "./data/newmenu.json":
/*!***************************!*\
  !*** ./data/newmenu.json ***!
  \***************************/
/*! exports provided: menu, key, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"menu\":[{\"title\":\"WebsiteMenu\",\"url\":\"header-WebsiteMenu\",\"linkType\":\"group\",\"parent\":\"top-level-menu-item\",\"children\":[{\"title\":\"Components\",\"url\":\"header-Components\",\"linkType\":\"group\",\"parent\":\"top-level-menu-item,WebsiteMenu\",\"children\":[{\"title\":\"Bar Loader\",\"url\":\"barloader\",\"linkType\":\"Internal\",\"parent\":\"top-level-menu-item,WebsiteMenu,Components\"},{\"title\":\"Checkbox\",\"url\":\"checkbox\",\"linkType\":\"Internal\",\"parent\":\"top-level-menu-item,WebsiteMenu,Components\"}]}]}],\"key\":[{\"title\":\"WebsiteMenu\",\"url\":\"header-WebsiteMenu\",\"linkType\":\"group\",\"parent\":\"top-level-menu-item\"},{\"title\":\"Components\",\"url\":\"header-Components\",\"linkType\":\"group\",\"parent\":\"top-level-menu-item,WebsiteMenu\"},{\"title\":\"Bar Loader\",\"url\":\"barloader\",\"linkType\":\"Internal\",\"parent\":\"top-level-menu-item,WebsiteMenu,Components\"},{\"title\":\"Checkbox\",\"url\":\"checkbox\",\"linkType\":\"Internal\",\"parent\":\"top-level-menu-item,WebsiteMenu,Components\"}]}");

/***/ }),

/***/ "./data/search_index.json":
/*!********************************!*\
  !*** ./data/search_index.json ***!
  \********************************/
/*! exports provided: version, fields, fieldVectors, invertedIndex, pipeline, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"version\":\"2.3.6\",\"fields\":[\"description\"],\"fieldVectors\":[[\"description/0\",[0,5.432,1,5.809]],[\"description/1\",[2,5.455,3,4.404,4,3.69]],[\"description/2\",[5,1.883,6,3.601,7,3.036,8,4.229,9,2.547]],[\"description/3\",[10,7.682]],[\"description/4\",[11,3.768,12,4.58]],[\"description/5\",[13,5.151,14,5.432]],[\"description/6\",[15,6.38,16,4.58]],[\"description/7\",[17,6.38,18,5.809]],[\"description/8\",[19,6.38,20,3.048]],[\"description/9\",[21,6.38,22,5.151]],[\"description/10\",[20,2.276,23,3.42,24,2.666,25,3.847]],[\"description/11\",[26,5.809,27,6.38]],[\"description/12\",[28,6.38,29,5.151]],[\"description/13\",[20,3.048,30,6.38]],[\"description/14\",[31,7.682]],[\"description/15\",[22,5.151,32,4.203]],[\"description/16\",[33,6.38,34,4.927]],[\"description/17\",[35,7.682]],[\"description/18\",[7,3.42,36,4.057,37,4.765,38,4.765]],[\"description/19\",[39,7.682]],[\"description/20\",[40,6.38,41,4.44]],[\"description/21\",[41,4.44,42,6.38]],[\"description/22\",[20,3.048,43,5.809]],[\"description/23\",[44,6.38,45,4.315]],[\"description/24\",[46,4.967,47,4.967,48,5.455]],[\"description/25\",[45,3.69,49,4.645,50,4.053]],[\"description/26\",[4,3.69,45,3.69,51,4.404]],[\"description/27\",[24,3.57,52,4.315]],[\"description/28\",[20,2.276,43,4.338,53,4.057,54,4.765]],[\"description/29\",[45,4.315,55,3.351]],[\"description/30\",[9,3.842,13,5.151]],[\"description/31\",[49,4.645,56,3.796,57,5.455]],[\"description/32\",[49,5.432,56,4.44]],[\"description/33\",[5,2.429,13,4.404,58,5.455]],[\"description/34\",[47,3.85,59,4.229,60,4.229,61,3.85,62,3.266]],[\"description/35\",[50,3.142,63,3.601,64,4.229,65,4.229,66,4.229]],[\"description/36\",[4,4.315,12,4.58]],[\"description/37\",[67,7.682]],[\"description/38\",[7,3.42,45,3.223,68,4.338,69,4.765]],[\"description/39\",[70,6.994]],[\"description/40\",[7,2.479,62,4.182,71,4.931,72,2.336,73,3.453]],[\"description/41\",[74,6.994]],[\"description/42\",[75,7.682]],[\"description/43\",[76,7.682]],[\"description/44\",[41,2.403,46,4.931,51,2.788,77,3.453,78,3.144,79,2.788]],[\"description/45\",[80,7.682]],[\"description/46\",[81,6.38,82,6.38]],[\"description/47\",[83,5.432,84,5.809]],[\"description/48\",[3,5.151,29,5.151]],[\"description/49\",[85,6.38,86,5.432]],[\"description/50\",[87,7.682]],[\"description/51\",[3,5.151,88,6.38]],[\"description/52\",[89,6.38,90,6.38]],[\"description/53\",[41,3.316,62,3.679,91,4.338,92,4.765]],[\"description/54\",[62,4.213,93,5.455,94,4.967]],[\"description/55\",[20,3.048,95,6.38]],[\"description/56\",[23,3.916,29,4.404,96,4.645]],[\"description/57\",[7,3.036,97,6.326,98,4.229,99,2.6]],[\"description/58\",[25,4.404,72,3.69,100,5.455]],[\"description/59\",[101,7.682]],[\"description/60\",[102,4.74,103,4.927]],[\"description/61\",[104,5.809,105,5.809]],[\"description/62\",[7,3.036,106,3.85,107,4.229,108,3.601,109,4.229]],[\"description/63\",[36,5.432,110,4.74]],[\"description/64\",[111,6.38,112,6.38]],[\"description/65\",[113,5.151,114,6.38]],[\"description/66\",[70,5.809,115,6.38]],[\"description/67\",[36,5.432,116,6.38]],[\"description/68\",[79,5.151,99,3.922]],[\"description/69\",[99,3.922,117,3.57]],[\"description/70\",[96,5.432,118,4.58]],[\"description/71\",[0,5.432,119,5.809]],[\"description/72\",[120,7.682]],[\"description/73\",[121,6.38,122,6.38]],[\"description/74\",[123,5.432,124,6.38]],[\"description/75\",[123,5.432,125,6.38]],[\"description/76\",[126,6.38,127,6.38]],[\"description/77\",[11,2.814,12,3.42,128,4.765,129,3.679]],[\"description/78\",[110,4.74,130,6.38]],[\"description/79\",[9,3.285,131,4.404,132,5.455]],[\"description/80\",[13,5.151,133,6.38]],[\"description/81\",[32,3.594,53,4.645,86,4.645]],[\"description/82\",[134,6.38,135,6.38]],[\"description/83\",[22,5.151,136,6.38]],[\"description/84\",[23,4.58,24,3.57]],[\"description/85\",[96,6.541]],[\"description/86\",[137,7.682]],[\"description/87\",[26,5.809,68,5.809]],[\"description/88\",[41,4.44,138,6.38]],[\"description/89\",[50,4.74,139,6.38]],[\"description/90\",[41,4.44,140,4.927]],[\"description/91\",[117,3.052,141,4.967,142,5.455]],[\"description/92\",[20,2.276,55,2.502,143,4.765,144,3.063]],[\"description/93\",[145,4.008,146,5.151]],[\"description/94\",[56,4.44,147,5.809]],[\"description/95\",[148,7.682]],[\"description/96\",[102,2.825,123,6.047,149,3.802,150,2.936]],[\"description/97\",[4,3.69,151,5.455,152,4.645]],[\"description/98\",[52,3.69,146,4.404,153,5.455]],[\"description/99\",[29,5.151,113,5.151]],[\"description/100\",[9,3.842,113,5.151]],[\"description/101\",[20,3.048,113,5.151]],[\"description/102\",[52,3.69,154,5.455,155,4.967]],[\"description/103\",[5,2.841,156,6.38]],[\"description/104\",[16,4.58,146,5.151]],[\"description/105\",[9,3.842,16,4.58]],[\"description/106\",[20,3.048,157,5.809]],[\"description/107\",[0,4.645,119,4.967,158,5.455]],[\"description/108\",[159,6.38,160,4.927]],[\"description/109\",[20,2.276,161,3.316,162,4.765,163,3.679]],[\"description/110\",[55,2.865,146,4.404,150,4.213]],[\"description/111\",[164,6.541]],[\"description/112\",[117,4.299]],[\"description/113\",[117,3.052,165,2.639,166,4.404]],[\"description/114\",[167,7.682]],[\"description/115\",[117,3.57,168,5.809]],[\"description/116\",[169,6.38,170,6.38]],[\"description/117\",[20,2.606,55,2.865,145,3.427]],[\"description/118\",[5,2.429,145,3.427,171,2.745]],[\"description/119\",[20,2.02,55,2.221,144,2.719,145,2.657,171,2.128]],[\"description/120\",[145,4.008,172,4.927]],[\"description/121\",[20,2.276,55,2.502,145,2.993,173,4.765]],[\"description/122\",[24,2.127,55,1.997,144,2.444,145,2.389,174,3.461,175,3.461]],[\"description/123\",[24,2.366,145,2.657,175,3.85,176,3.142,177,3.601]],[\"description/124\",[61,6.994]],[\"description/125\",[5,2.122,9,4.16,178,2.993]],[\"description/126\",[9,2.869,178,2.993,179,3.847,180,3.063]],[\"description/127\",[5,2.122,9,2.869,171,2.398,178,2.993]],[\"description/128\",[9,2.869,178,2.993,181,3.54,182,3.223]],[\"description/129\",[9,2.869,178,2.993,183,3.54,184,2.993]],[\"description/130\",[9,1.757,178,1.833,184,1.833,185,2.484,186,2.484,187,3.295,188,2.356,189,2.484]],[\"description/131\",[9,2.547,178,2.657,190,3.601,191,3.415,192,2.943]],[\"description/132\",[5,1.299,9,2.851,178,1.833,193,2.094,194,2.484,195,2.356,196,2.168,197,2.356]],[\"description/133\",[12,4.58,129,4.927]],[\"description/134\",[179,5.151,180,4.102]],[\"description/135\",[5,2.841,171,3.211]],[\"description/136\",[12,3.036,20,2.02,23,3.036,129,3.266,198,3.142]],[\"description/137\",[32,4.203,199,6.38]],[\"description/138\",[32,3.594,200,4.967,201,4.967]],[\"description/139\",[32,3.594,201,4.967,202,4.967]],[\"description/140\",[203,6.38,204,6.38]],[\"description/141\",[183,4.74,184,4.008]],[\"description/142\",[102,3.54,103,3.679,205,3.679,206,3.42]],[\"description/143\",[207,7.682]],[\"description/144\",[190,4.645,191,4.404,192,3.796]],[\"description/145\",[12,2.479,129,2.667,193,2.479,194,2.94,195,2.788,196,2.565,197,2.788]],[\"description/146\",[20,3.67]],[\"description/147\",[180,4.102,208,4.927]],[\"description/148\",[179,5.151,180,4.102]],[\"description/149\",[5,2.841,171,3.211]],[\"description/150\",[20,2.606,144,3.507,171,2.745]],[\"description/151\",[20,2.02,209,1.863,210,4.229,211,3.601,212,4.229]],[\"description/152\",[20,2.02,144,2.719,213,3.036,214,4.229,215,3.85]],[\"description/153\",[14,3.601,20,2.02,144,2.719,176,3.142,216,4.229]],[\"description/154\",[206,5.515]],[\"description/155\",[5,2.429,209,2.402,217,4.645]],[\"description/156\",[209,2.402,218,4.967,219,4.967]],[\"description/157\",[117,3.052,165,2.639,220,5.455]],[\"description/158\",[24,3.052,209,2.402,221,5.455]],[\"description/159\",[24,2.366,209,1.863,222,4.229,223,3.601,224,4.229]],[\"description/160\",[32,2.786,196,3.142,225,3.266,226,4.229,227,4.229]],[\"description/161\",[45,4.315,56,4.44]],[\"description/162\",[72,5.196]],[\"description/163\",[187,4.44,228,6.38]],[\"description/164\",[74,6.994]],[\"description/165\",[163,4.927,229,5.432]],[\"description/166\",[230,6.38,231,6.38]],[\"description/167\",[232,5.932]],[\"description/168\",[5,2.841,171,3.211]],[\"description/169\",[181,4.74,182,4.315]],[\"description/170\",[233,6.541]],[\"description/171\",[209,2.402,232,4.213,234,4.967]],[\"description/172\",[161,4.44,232,4.927]],[\"description/173\",[140,4.927,235,6.38]],[\"description/174\",[236,5.809,237,5.809]],[\"description/175\",[238,7.682]],[\"description/176\",[239,6.38,240,4.927]],[\"description/177\",[187,4.44,241,6.38]],[\"description/178\",[242,5.432,243,5.432]],[\"description/179\",[165,2.046,213,3.036,242,3.601,243,3.601,244,3.601]],[\"description/180\",[245,6.38,246,6.38]],[\"description/181\",[1,5.809,56,4.44]],[\"description/182\",[165,2.639,247,5.455,248,5.455]],[\"description/183\",[56,4.44,71,5.809]],[\"description/184\",[56,4.44,147,5.809]],[\"description/185\",[52,5.196]],[\"description/186\",[249,5.932]],[\"description/187\",[52,4.315,171,3.211]],[\"description/188\",[5,2.841,171,3.211]],[\"description/189\",[52,4.315,250,5.809]],[\"description/190\",[52,2.572,165,1.839,209,1.674,223,3.237,251,3.802,252,3.802]],[\"description/191\",[52,4.315,253,5.432]],[\"description/192\",[24,3.052,209,2.402,254,4.967]],[\"description/193\",[24,3.052,165,2.639,209,2.402]],[\"description/194\",[4,4.315,84,5.809]],[\"description/195\",[11,3.222,23,3.916,99,3.354]],[\"description/196\",[11,2.814,99,2.929,179,3.847,180,3.063]],[\"description/197\",[5,2.122,11,2.814,99,2.929,171,2.398]],[\"description/198\",[11,2.814,99,2.929,183,3.54,184,2.993]],[\"description/199\",[11,1.723,99,1.794,184,1.833,185,2.484,186,2.484,187,3.295,188,2.356,189,2.484]],[\"description/200\",[11,2.245,99,2.337,102,2.825,103,2.936,205,2.936,206,2.729]],[\"description/201\",[11,2.498,99,2.6,180,2.719,255,4.229,256,3.85]],[\"description/202\",[11,2.498,99,2.6,190,3.601,191,3.415,192,2.943]],[\"description/203\",[11,1.868,23,2.27,99,1.944,193,2.27,194,2.693,195,2.554,196,2.35,197,2.554]],[\"description/204\",[257,7.682]],[\"description/205\",[110,4.74,258,5.432]],[\"description/206\",[110,4.053,165,2.639,166,4.404]],[\"description/207\",[240,4.927,259,4.44]],[\"description/208\",[260,7.682]],[\"description/209\",[24,3.052,209,2.402,261,5.455]],[\"description/210\",[176,4.053,262,5.455,263,5.455]],[\"description/211\",[24,3.052,165,2.639,240,4.213]],[\"description/212\",[187,4.44,188,5.151]],[\"description/213\",[264,7.682]],[\"description/214\",[117,4.299]],[\"description/215\",[249,5.932]],[\"description/216\",[5,2.841,265,6.38]],[\"description/217\",[5,2.841,164,5.432]],[\"description/218\",[83,4.645,266,5.455,267,5.455]],[\"description/219\",[104,5.809,268,6.38]],[\"description/220\",[269,6.994]],[\"description/221\",[270,5.432,271,3.842]],[\"description/222\",[5,2.429,171,2.745,271,3.285]],[\"description/223\",[270,4.645,271,3.285,272,3.796]],[\"description/224\",[184,4.008,271,3.842]],[\"description/225\",[193,4.58,273,5.151]],[\"description/226\",[5,2.841,171,3.211]],[\"description/227\",[180,3.507,209,2.402,254,4.967]],[\"description/228\",[205,4.213,206,3.916,274,4.967]],[\"description/229\",[5,1.883,205,3.266,258,3.601,275,3.85,276,4.229]],[\"description/230\",[55,1.997,193,2.729,213,2.729,273,3.07,277,3.802,278,3.802]],[\"description/231\",[160,3.679,209,2.098,279,4.338,280,3.54]],[\"description/232\",[281,6.38,282,5.809]],[\"description/233\",[14,2.94,55,1.814,165,1.671,209,1.521,282,3.144,283,3.453,284,3.453]],[\"description/234\",[55,1.997,193,2.729,273,3.07,285,3.237,286,3.461,287,3.802]],[\"description/235\",[55,1.814,141,3.144,165,1.671,197,2.788,288,3.453,289,3.453,290,3.453]],[\"description/236\",[211,5.432,291,5.809]],[\"description/237\",[45,3.69,271,3.285,272,3.796]],[\"description/238\",[5,2.429,171,2.745,271,3.285]],[\"description/239\",[45,2.861,271,2.547,272,4.402,292,3.266]],[\"description/240\",[184,4.008,271,3.842]],[\"description/241\",[293,6.38,294,6.38]],[\"description/242\",[244,4.645,295,3.916,296,5.455]],[\"description/243\",[79,3.415,165,2.046,244,3.601,295,3.036,297,3.601]],[\"description/244\",[94,3.85,295,3.036,298,4.229,299,3.85,300,4.229]],[\"description/245\",[24,2.666,295,3.42,297,4.057,301,4.765]],[\"description/246\",[24,2.366,79,3.415,165,2.046,295,3.036,297,3.601]],[\"description/247\",[165,2.639,295,3.916,302,5.455]],[\"description/248\",[165,2.639,295,3.916,303,5.455]],[\"description/249\",[145,4.008,304,6.38]],[\"description/250\",[24,4.299]],[\"description/251\",[6,5.432,117,3.57]],[\"description/252\",[155,4.967,180,3.507,208,4.213]],[\"description/253\",[108,5.432,305,4.927]],[\"description/254\",[140,2.936,178,2.389,305,2.936,306,3.237,307,3.237,308,3.237]],[\"description/255\",[11,3.222,117,3.052,225,4.213]],[\"description/256\",[229,6.541]],[\"description/257\",[63,4.057,213,3.42,309,4.765,310,3.847]],[\"description/258\",[131,3.847,213,3.42,310,3.847,311,4.338]],[\"description/259\",[131,3.415,209,1.863,310,3.415,312,3.85,313,3.415]],[\"description/260\",[176,4.053,213,3.916,314,5.455]],[\"description/261\",[165,2.305,209,2.098,315,4.765,316,4.765]],[\"description/262\",[18,4.338,209,2.098,317,3.679,318,4.338]],[\"description/263\",[7,2.729,182,2.572,209,1.674,319,3.802,320,3.802,321,3.802]],[\"description/264\",[271,3.285,272,3.796,292,4.213]],[\"description/265\",[3,3.07,86,3.237,209,1.674,271,2.29,272,2.646,292,2.936]],[\"description/266\",[209,1.521,271,2.08,272,2.403,292,2.667,322,3.453,323,3.144,324,3.453]],[\"description/267\",[50,5.707]],[\"description/268\",[117,3.57,325,5.809]],[\"description/269\",[208,4.927,326,6.38]],[\"description/270\",[140,2.936,178,2.389,305,2.936,306,3.237,307,3.237,308,3.237]],[\"description/271\",[11,3.222,117,3.052,225,4.213]],[\"description/272\",[91,4.338,209,2.098,327,4.765,328,4.765]],[\"description/273\",[329,6.203]],[\"description/274\",[160,4.927,280,4.74]],[\"description/275\",[249,5.932]],[\"description/276\",[32,4.203,329,5.151]],[\"description/277\",[330,6.994]],[\"description/278\",[176,4.053,240,4.213,331,5.455]],[\"description/279\",[51,3.415,157,3.85,164,3.601,209,1.863,332,4.229]],[\"description/280\",[165,2.046,209,1.863,333,4.229,334,4.229,335,4.229]],[\"description/281\",[176,4.053,191,4.404,192,3.796]],[\"description/282\",[131,3.415,209,1.863,310,3.415,312,3.85,313,3.415]],[\"description/283\",[5,1.883,209,1.863,313,3.415,336,4.229,337,4.229]],[\"description/284\",[165,2.305,180,3.063,338,4.765,339,4.765]],[\"description/285\",[205,3.679,215,4.338,340,4.765,341,4.765]],[\"description/286\",[165,2.639,209,2.402,342,5.455]],[\"description/287\",[5,2.122,165,2.305,343,4.765,344,4.765]],[\"description/288\",[345,6.203]],[\"description/289\",[209,2.098,275,4.338,345,3.847,346,4.765]],[\"description/290\",[62,4.213,347,5.455,348,5.455]],[\"description/291\",[349,6.38,350,6.38]],[\"description/292\",[110,4.74,351,6.38]],[\"description/293\",[110,4.053,165,2.639,166,4.404]],[\"description/294\",[117,3.052,165,2.639,352,5.455]],[\"description/295\",[240,4.927,259,4.44]],[\"description/296\",[106,5.809,165,3.086]],[\"description/297\",[259,3.316,299,4.338,353,3.679,354,4.338]],[\"description/298\",[163,4.927,355,5.432]],[\"description/299\",[5,2.841,171,3.211]],[\"description/300\",[25,4.404,209,2.402,256,4.967]],[\"description/301\",[5,2.429,163,4.213,355,4.645]],[\"description/302\",[356,6.38,357,6.38]],[\"description/303\",[358,5.707]],[\"description/304\",[83,4.057,195,3.847,358,5.131]],[\"description/305\",[41,3.796,358,5.65]],[\"description/306\",[102,3.54,166,3.847,358,5.131]],[\"description/307\",[358,5.131,359,4.765,360,4.338]],[\"description/308\",[20,2.606,358,5.65]],[\"description/309\",[20,3.048,198,4.74]],[\"description/310\",[5,2.841,171,3.211]],[\"description/311\",[181,4.74,182,4.315]],[\"description/312\",[233,6.541]],[\"description/313\",[20,1.816,196,2.825,198,2.825,209,1.674,361,3.802,362,3.802]],[\"description/314\",[20,2.276,144,3.063,184,2.993,198,3.54]],[\"description/315\",[363,6.994]],[\"description/316\",[145,4.827]],[\"description/317\",[187,2.943,360,3.85,364,4.229,365,4.229,366,4.229]],[\"description/318\",[367,7.682]],[\"description/319\",[34,4.927,117,3.57]],[\"description/320\",[208,4.927,368,6.38]],[\"description/321\",[108,5.432,305,4.927]],[\"description/322\",[140,2.936,178,2.389,305,2.936,306,3.237,307,3.237,308,3.237]],[\"description/323\",[183,4.74,184,4.008]],[\"description/324\",[11,3.222,117,3.052,225,4.213]],[\"description/325\",[56,5.346]],[\"description/326\",[4,4.315,152,5.432]],[\"description/327\",[180,4.102,208,4.927]],[\"description/328\",[5,2.841,171,3.211]],[\"description/329\",[165,2.305,180,3.063,369,4.765,370,4.765]],[\"description/330\",[209,2.402,274,4.967,371,5.455]],[\"description/331\",[206,5.515]],[\"description/332\",[209,2.402,218,4.967,219,4.967]],[\"description/333\",[24,2.366,78,3.85,103,3.266,209,1.863,223,3.601]],[\"description/334\",[4,2.861,5,1.883,24,2.366,103,3.266,372,4.229]],[\"description/335\",[25,4.404,209,2.402,311,4.967]],[\"description/336\",[102,3.54,253,4.057,373,4.338,374,4.765]],[\"description/337\",[32,5.061]],[\"description/338\",[280,4.74,375,6.38]],[\"description/339\",[280,4.74,376,6.38]],[\"description/340\",[213,5.515]],[\"description/341\",[323,6.994]],[\"description/342\",[160,3.679,217,4.057,280,5.131]],[\"description/343\",[160,3.679,280,5.131,377,4.765]],[\"description/344\",[249,5.932]],[\"description/345\",[32,4.203,329,5.151]],[\"description/346\",[161,5.346]],[\"description/347\",[5,2.841,171,3.211]],[\"description/348\",[181,4.74,182,4.315]],[\"description/349\",[233,6.541]],[\"description/350\",[161,3.796,209,2.402,234,4.967]],[\"description/351\",[20,2.606,161,3.796,198,4.053]],[\"description/352\",[161,4.44,232,4.927]],[\"description/353\",[144,3.063,161,3.316,174,4.338,184,2.993]],[\"description/354\",[378,7.682]],[\"description/355\",[187,4.44,379,6.38]],[\"description/356\",[34,5.932]],[\"description/357\",[177,5.432,182,4.315]],[\"description/358\",[5,2.841,171,3.211]],[\"description/359\",[183,4.74,184,4.008]],[\"description/360\",[184,2.169,185,2.94,186,2.94,187,3.769,188,2.788,189,2.94]],[\"description/361\",[5,1.883,196,3.142,285,3.601,380,4.229,381,4.229]],[\"description/362\",[182,2.572,269,3.461,279,3.461,382,3.802,383,3.802,384,3.802]],[\"description/363\",[182,3.69,385,5.455,386,5.455]],[\"description/364\",[387,6.203]],[\"description/365\",[387,5.151,388,6.38]],[\"description/366\",[217,5.432,387,5.151]],[\"description/367\",[181,4.74,182,4.315]],[\"description/368\",[259,2.943,313,3.415,389,4.229,390,4.229,391,4.229]],[\"description/369\",[22,5.151,72,4.315]],[\"description/370\",[192,4.44,317,4.927]],[\"description/371\",[50,3.142,192,2.943,317,3.266,353,3.266,392,4.229]],[\"description/372\",[192,3.316,259,3.316,317,3.679,393,4.765]],[\"description/373\",[55,3.351,150,4.927]],[\"description/374\",[20,2.606,55,2.865,171,2.745]],[\"description/375\",[5,2.122,24,2.666,181,3.54,259,3.316]],[\"description/376\",[55,2.502,63,4.057,353,3.679,394,4.765]],[\"description/377\",[55,2.502,105,4.338,150,3.679,209,2.098]],[\"description/378\",[55,2.865,165,2.639,395,5.455]],[\"description/379\",[16,5.515]],[\"description/380\",[5,2.841,171,3.211]],[\"description/381\",[16,3.916,144,3.507,171,2.745]],[\"description/382\",[55,2.865,285,4.645,396,5.455]],[\"description/383\",[16,3.036,144,2.719,373,3.85,397,4.229,398,4.229]],[\"description/384\",[41,5.346]],[\"description/385\",[172,5.932]],[\"description/386\",[5,2.841,171,3.211]],[\"description/387\",[249,5.932]],[\"description/388\",[200,4.967,202,4.967,399,5.455]],[\"description/389\",[400,6.38,401,6.38]],[\"description/390\",[24,2.666,172,3.679,209,2.098,402,4.765]],[\"description/391\",[206,5.515]],[\"description/392\",[165,2.305,168,4.338,258,4.057,403,4.765]],[\"description/393\",[55,2.221,165,2.046,172,3.266,353,3.266,404,4.229]],[\"description/394\",[72,5.196]],[\"description/395\",[5,2.841,171,3.211]],[\"description/396\",[20,2.606,144,3.507,171,2.745]],[\"description/397\",[72,3.69,209,2.402,318,4.967]],[\"description/398\",[72,3.69,165,2.639,253,4.645]],[\"description/399\",[118,5.515]],[\"description/400\",[5,2.841,171,3.211]],[\"description/401\",[72,4.315,118,4.58]],[\"description/402\",[177,6.541]],[\"description/403\",[4,2.572,51,3.07,118,2.729,259,2.646,353,2.936,354,3.461]],[\"description/404\",[206,5.515]],[\"description/405\",[53,3.601,55,2.221,225,3.266,259,2.943,405,4.229]],[\"description/406\",[55,2.502,165,2.305,183,3.54,406,4.765]],[\"description/407\",[118,4.58,407,6.38]],[\"description/408\",[118,4.58,250,5.809]],[\"description/409\",[286,5.809,408,6.38]],[\"description/410\",[345,5.151,409,6.38]],[\"description/411\",[20,3.67]],[\"description/412\",[20,2.606,55,2.865,145,3.427]],[\"description/413\",[45,3.69,271,3.285,272,3.796]],[\"description/414\",[271,3.285,272,3.796,292,4.213]],[\"description/415\",[193,4.58,273,5.151]],[\"description/416\",[6,5.432,117,3.57]],[\"description/417\",[34,4.927,117,3.57]],[\"description/418\",[117,3.57,325,5.809]],[\"description/419\",[12,4.58,129,4.927]],[\"description/420\",[72,5.196]],[\"description/421\",[192,4.44,317,4.927]],[\"description/422\",[11,3.222,23,3.916,99,3.354]],[\"description/423\",[345,6.203]],[\"description/424\",[270,5.432,271,3.842]],[\"description/425\",[55,3.351,150,4.927]],[\"description/426\",[20,3.048,198,4.74]],[\"description/427\",[387,6.203]],[\"description/428\",[4,4.315,152,5.432]],[\"description/429\",[34,5.932]],[\"description/430\",[163,4.927,355,5.432]],[\"description/431\",[232,5.932]],[\"description/432\",[229,6.541]],[\"description/433\",[52,5.196]],[\"description/434\",[16,5.515]],[\"description/435\",[5,2.122,9,4.16,178,2.993]],[\"description/436\",[118,5.515]],[\"description/437\",[145,4.827]],[\"description/438\",[172,5.932]],[\"description/439\",[161,5.346]],[\"description/440\",[117,4.299]],[\"description/441\",[330,6.994]],[\"description/442\",[211,5.432,291,5.809]],[\"description/443\",[363,6.994]],[\"description/444\",[236,5.809,237,5.809]],[\"description/445\",[242,5.432,243,5.432]],[\"description/446\",[32,5.061]],[\"description/447\",[329,6.203]],[\"description/448\",[50,5.707]]],\"invertedIndex\":[[\"\",{\"_index\":7,\"description\":{\"2\":{},\"18\":{},\"38\":{},\"40\":{},\"57\":{},\"62\":{},\"263\":{}}}],[\"1\",{\"_index\":65,\"description\":{\"35\":{}}}],[\"2\",{\"_index\":210,\"description\":{\"151\":{}}}],[\"accordion\",{\"_index\":35,\"description\":{\"17\":{}}}],[\"action\",{\"_index\":55,\"description\":{\"29\":{},\"92\":{},\"110\":{},\"117\":{},\"119\":{},\"121\":{},\"122\":{},\"230\":{},\"233\":{},\"234\":{},\"235\":{},\"373\":{},\"374\":{},\"376\":{},\"377\":{},\"378\":{},\"382\":{},\"393\":{},\"405\":{},\"406\":{},\"412\":{},\"425\":{}}}],[\"action(\",{\"_index\":224,\"description\":{\"159\":{}}}],[\"ad\",{\"_index\":334,\"description\":{\"280\":{}}}],[\"adjust\",{\"_index\":332,\"description\":{\"279\":{}}}],[\"adobe’\",{\"_index\":366,\"description\":{\"317\":{}}}],[\"advanc\",{\"_index\":33,\"description\":{\"16\":{}}}],[\"affect\",{\"_index\":162,\"description\":{\"109\":{}}}],[\"alert\",{\"_index\":22,\"description\":{\"9\":{},\"15\":{},\"83\":{},\"369\":{}}}],[\"align\",{\"_index\":213,\"description\":{\"152\":{},\"179\":{},\"230\":{},\"257\":{},\"258\":{},\"260\":{},\"340\":{}}}],[\"allow\",{\"_index\":285,\"description\":{\"234\":{},\"361\":{},\"382\":{}}}],[\"altern\",{\"_index\":265,\"description\":{\"216\":{}}}],[\"ambigu\",{\"_index\":377,\"description\":{\"343\":{}}}],[\"anatomi\",{\"_index\":57,\"description\":{\"31\":{}}}],[\"anim\",{\"_index\":249,\"description\":{\"186\":{},\"215\":{},\"275\":{},\"344\":{},\"387\":{}}}],[\"api\",{\"_index\":241,\"description\":{\"177\":{}}}],[\"appear\",{\"_index\":399,\"description\":{\"388\":{}}}],[\"applic\",{\"_index\":236,\"description\":{\"174\":{},\"444\":{}}}],[\"appropri\",{\"_index\":256,\"description\":{\"201\":{},\"300\":{}}}],[\"approv\",{\"_index\":261,\"description\":{\"209\":{}}}],[\"area\",{\"_index\":6,\"description\":{\"2\":{},\"251\":{},\"416\":{}}}],[\"artboard\",{\"_index\":137,\"description\":{\"86\":{}}}],[\"asset\",{\"_index\":42,\"description\":{\"21\":{}}}],[\"auto\",{\"_index\":408,\"description\":{\"409\":{}}}],[\"avail\",{\"_index\":391,\"description\":{\"368\":{}}}],[\"avatar\",{\"_index\":120,\"description\":{\"72\":{}}}],[\"avoid\",{\"_index\":373,\"description\":{\"336\":{},\"383\":{}}}],[\"badg\",{\"_index\":67,\"description\":{\"37\":{}}}],[\"banner\",{\"_index\":136,\"description\":{\"83\":{}}}],[\"bar\",{\"_index\":45,\"description\":{\"23\":{},\"25\":{},\"26\":{},\"29\":{},\"38\":{},\"161\":{},\"237\":{},\"239\":{},\"413\":{}}}],[\"base\",{\"_index\":214,\"description\":{\"152\":{}}}],[\"be\",{\"_index\":277,\"description\":{\"230\":{}}}],[\"behavior\",{\"_index\":305,\"description\":{\"253\":{},\"254\":{},\"270\":{},\"321\":{},\"322\":{}}}],[\"below\",{\"_index\":392,\"description\":{\"371\":{}}}],[\"bi\",{\"_index\":293,\"description\":{\"241\":{}}}],[\"blue\",{\"_index\":153,\"description\":{\"98\":{}}}],[\"bodi\",{\"_index\":275,\"description\":{\"229\":{},\"289\":{}}}],[\"box\",{\"_index\":12,\"description\":{\"4\":{},\"36\":{},\"77\":{},\"133\":{},\"136\":{},\"145\":{},\"419\":{}}}],[\"brand\",{\"_index\":351,\"description\":{\"292\":{}}}],[\"breadcrumb\",{\"_index\":74,\"description\":{\"41\":{},\"164\":{}}}],[\"bulk\",{\"_index\":396,\"description\":{\"382\":{}}}],[\"button\",{\"_index\":20,\"description\":{\"8\":{},\"10\":{},\"13\":{},\"22\":{},\"28\":{},\"55\":{},\"92\":{},\"101\":{},\"106\":{},\"109\":{},\"117\":{},\"119\":{},\"121\":{},\"136\":{},\"146\":{},\"150\":{},\"151\":{},\"152\":{},\"153\":{},\"308\":{},\"309\":{},\"313\":{},\"314\":{},\"351\":{},\"374\":{},\"396\":{},\"411\":{},\"412\":{},\"426\":{}}}],[\"calendar\",{\"_index\":31,\"description\":{\"14\":{}}}],[\"canva\",{\"_index\":81,\"description\":{\"46\":{}}}],[\"capit\",{\"_index\":191,\"description\":{\"131\":{},\"144\":{},\"202\":{},\"281\":{}}}],[\"card\",{\"_index\":41,\"description\":{\"20\":{},\"21\":{},\"44\":{},\"53\":{},\"88\":{},\"90\":{},\"305\":{},\"384\":{}}}],[\"carousel\",{\"_index\":70,\"description\":{\"39\":{},\"66\":{}}}],[\"case\",{\"_index\":219,\"description\":{\"156\":{},\"332\":{}}}],[\"chang\",{\"_index\":352,\"description\":{\"294\":{}}}],[\"chat\",{\"_index\":116,\"description\":{\"67\":{}}}],[\"checkbox\",{\"_index\":161,\"description\":{\"109\":{},\"172\":{},\"346\":{},\"350\":{},\"351\":{},\"352\":{},\"353\":{},\"439\":{}}}],[\"checkerboard\",{\"_index\":122,\"description\":{\"73\":{}}}],[\"checklist\",{\"_index\":87,\"description\":{\"50\":{}}}],[\"checkmark\",{\"_index\":302,\"description\":{\"247\":{}}}],[\"choos\",{\"_index\":255,\"description\":{\"201\":{}}}],[\"circl\",{\"_index\":292,\"description\":{\"239\":{},\"264\":{},\"265\":{},\"266\":{},\"414\":{}}}],[\"circular\",{\"_index\":327,\"description\":{\"272\":{}}}],[\"clear\",{\"_index\":217,\"description\":{\"155\":{},\"342\":{},\"366\":{}}}],[\"cloud\",{\"_index\":47,\"description\":{\"24\":{},\"34\":{}}}],[\"coach\",{\"_index\":273,\"description\":{\"225\":{},\"230\":{},\"234\":{},\"415\":{}}}],[\"color\",{\"_index\":117,\"description\":{\"69\":{},\"91\":{},\"112\":{},\"113\":{},\"115\":{},\"157\":{},\"214\":{},\"251\":{},\"255\":{},\"268\":{},\"271\":{},\"294\":{},\"319\":{},\"324\":{},\"416\":{},\"417\":{},\"418\":{},\"440\":{}}}],[\"column\",{\"_index\":18,\"description\":{\"7\":{},\"262\":{}}}],[\"combin\",{\"_index\":372,\"description\":{\"334\":{}}}],[\"combo\",{\"_index\":129,\"description\":{\"77\":{},\"133\":{},\"136\":{},\"145\":{},\"419\":{}}}],[\"comment\",{\"_index\":75,\"description\":{\"42\":{}}}],[\"common\",{\"_index\":394,\"description\":{\"376\":{}}}],[\"commun\",{\"_index\":168,\"description\":{\"115\":{},\"392\":{}}}],[\"compon\",{\"_index\":244,\"description\":{\"179\":{},\"242\":{},\"243\":{}}}],[\"composit\",{\"_index\":298,\"description\":{\"244\":{}}}],[\"concis\",{\"_index\":206,\"description\":{\"142\":{},\"154\":{},\"200\":{},\"228\":{},\"331\":{},\"391\":{},\"404\":{}}}],[\"condens\",{\"_index\":370,\"description\":{\"329\":{}}}],[\"confirm\",{\"_index\":288,\"description\":{\"235\":{}}}],[\"connect\",{\"_index\":143,\"description\":{\"92\":{}}}],[\"consist\",{\"_index\":254,\"description\":{\"192\":{},\"227\":{}}}],[\"contact\",{\"_index\":367,\"description\":{\"318\":{}}}],[\"content\",{\"_index\":215,\"description\":{\"152\":{},\"285\":{}}}],[\"context\",{\"_index\":384,\"description\":{\"362\":{}}}],[\"control\",{\"_index\":82,\"description\":{\"46\":{}}}],[\"cooldown\",{\"_index\":401,\"description\":{\"389\":{}}}],[\"copi\",{\"_index\":346,\"description\":{\"289\":{}}}],[\"correct\",{\"_index\":267,\"description\":{\"218\":{}}}],[\"creat\",{\"_index\":166,\"description\":{\"113\":{},\"206\":{},\"293\":{},\"306\":{}}}],[\"crop\",{\"_index\":106,\"description\":{\"62\":{},\"296\":{}}}],[\"crucial\",{\"_index\":403,\"description\":{\"392\":{}}}],[\"custom\",{\"_index\":389,\"description\":{\"368\":{}}}],[\"cycl\",{\"_index\":30,\"description\":{\"13\":{}}}],[\"dash\",{\"_index\":320,\"description\":{\"263\":{}}}],[\"data\",{\"_index\":310,\"description\":{\"257\":{},\"258\":{},\"259\":{},\"282\":{}}}],[\"date\",{\"_index\":97,\"description\":{\"57\":{}}}],[\"deep\",{\"_index\":374,\"description\":{\"336\":{}}}],[\"definit\",{\"_index\":156,\"description\":{\"103\":{}}}],[\"delay\",{\"_index\":202,\"description\":{\"139\":{},\"388\":{}}}],[\"depend\",{\"_index\":287,\"description\":{\"234\":{}}}],[\"deprec\",{\"_index\":304,\"description\":{\"249\":{}}}],[\"describ\",{\"_index\":402,\"description\":{\"390\":{}}}],[\"descript\",{\"_index\":371,\"description\":{\"330\":{}}}],[\"design\",{\"_index\":187,\"description\":{\"130\":{},\"163\":{},\"177\":{},\"199\":{},\"212\":{},\"317\":{},\"355\":{},\"360\":{}}}],[\"detail\",{\"_index\":127,\"description\":{\"76\":{}}}],[\"develop\",{\"_index\":409,\"description\":{\"410\":{}}}],[\"dexter\",{\"_index\":115,\"description\":{\"66\":{}}}],[\"dial\",{\"_index\":101,\"description\":{\"59\":{}}}],[\"dialog\",{\"_index\":72,\"description\":{\"40\":{},\"58\":{},\"162\":{},\"369\":{},\"394\":{},\"397\":{},\"398\":{},\"401\":{},\"420\":{}}}],[\"direct\",{\"_index\":300,\"description\":{\"244\":{}}}],[\"direction\",{\"_index\":294,\"description\":{\"241\":{}}}],[\"disabl\",{\"_index\":397,\"description\":{\"383\":{}}}],[\"dismiss\",{\"_index\":286,\"description\":{\"234\":{},\"409\":{}}}],[\"display\",{\"_index\":225,\"description\":{\"160\":{},\"255\":{},\"271\":{},\"324\":{},\"405\":{}}}],[\"divid\",{\"_index\":317,\"description\":{\"262\":{},\"370\":{},\"371\":{},\"372\":{},\"421\":{}}}],[\"don't\",{\"_index\":165,\"description\":{\"113\":{},\"157\":{},\"179\":{},\"182\":{},\"190\":{},\"193\":{},\"206\":{},\"211\":{},\"233\":{},\"235\":{},\"243\":{},\"246\":{},\"247\":{},\"248\":{},\"261\":{},\"280\":{},\"284\":{},\"286\":{},\"287\":{},\"293\":{},\"294\":{},\"296\":{},\"329\":{},\"378\":{},\"392\":{},\"393\":{},\"398\":{},\"406\":{}}}],[\"don’t\",{\"_index\":259,\"description\":{\"207\":{},\"295\":{},\"297\":{},\"368\":{},\"372\":{},\"375\":{},\"403\":{},\"405\":{}}}],[\"dot\",{\"_index\":114,\"description\":{\"65\":{}}}],[\"down\",{\"_index\":307,\"description\":{\"254\":{},\"270\":{},\"322\":{}}}],[\"drag\",{\"_index\":68,\"description\":{\"38\":{},\"87\":{}}}],[\"draggabl\",{\"_index\":28,\"description\":{\"12\":{}}}],[\"drop\",{\"_index\":26,\"description\":{\"11\":{},\"87\":{}}}],[\"dropdown\",{\"_index\":23,\"description\":{\"10\":{},\"56\":{},\"84\":{},\"136\":{},\"195\":{},\"203\":{},\"422\":{}}}],[\"dynam\",{\"_index\":133,\"description\":{\"80\":{}}}],[\"edit\",{\"_index\":388,\"description\":{\"365\":{}}}],[\"emphas\",{\"_index\":233,\"description\":{\"170\":{},\"312\":{},\"349\":{}}}],[\"emphasi\",{\"_index\":335,\"description\":{\"280\":{}}}],[\"en\",{\"_index\":319,\"description\":{\"263\":{}}}],[\"equival\",{\"_index\":268,\"description\":{\"219\":{}}}],[\"error\",{\"_index\":83,\"description\":{\"47\":{},\"218\":{},\"304\":{}}}],[\"exclus\",{\"_index\":362,\"description\":{\"313\":{}}}],[\"experi\",{\"_index\":46,\"description\":{\"24\":{},\"44\":{}}}],[\"explain\",{\"_index\":278,\"description\":{\"230\":{}}}],[\"featur\",{\"_index\":226,\"description\":{\"160\":{}}}],[\"field\",{\"_index\":9,\"description\":{\"2\":{},\"30\":{},\"79\":{},\"100\":{},\"105\":{},\"125\":{},\"126\":{},\"127\":{},\"128\":{},\"129\":{},\"130\":{},\"131\":{},\"132\":{},\"435\":{}}}],[\"file\",{\"_index\":111,\"description\":{\"64\":{}}}],[\"fill\",{\"_index\":263,\"description\":{\"210\":{}}}],[\"filter\",{\"_index\":58,\"description\":{\"33\":{}}}],[\"finger\",{\"_index\":308,\"description\":{\"254\":{},\"270\":{},\"322\":{}}}],[\"first\",{\"_index\":78,\"description\":{\"44\":{},\"333\":{}}}],[\"flexibl\",{\"_index\":208,\"description\":{\"147\":{},\"252\":{},\"269\":{},\"320\":{},\"327\":{}}}],[\"float\",{\"_index\":147,\"description\":{\"94\":{},\"184\":{}}}],[\"flow\",{\"_index\":94,\"description\":{\"54\":{},\"244\":{}}}],[\"fluid\",{\"_index\":154,\"description\":{\"102\":{}}}],[\"follow\",{\"_index\":190,\"description\":{\"131\":{},\"144\":{},\"202\":{}}}],[\"font\",{\"_index\":164,\"description\":{\"111\":{},\"217\":{},\"279\":{}}}],[\"footer\",{\"_index\":119,\"description\":{\"71\":{},\"107\":{}}}],[\"form\",{\"_index\":195,\"description\":{\"132\":{},\"145\":{},\"203\":{},\"304\":{}}}],[\"forum\",{\"_index\":138,\"description\":{\"88\":{}}}],[\"frame\",{\"_index\":237,\"description\":{\"174\":{},\"444\":{}}}],[\"framework\",{\"_index\":38,\"description\":{\"18\":{}}}],[\"full\",{\"_index\":71,\"description\":{\"40\":{},\"183\":{}}}],[\"fulli\",{\"_index\":343,\"description\":{\"287\":{}}}],[\"galleri\",{\"_index\":88,\"description\":{\"51\":{}}}],[\"gap\",{\"_index\":246,\"description\":{\"180\":{}}}],[\"ghost\",{\"_index\":85,\"description\":{\"49\":{}}}],[\"gray\",{\"_index\":359,\"description\":{\"307\":{}}}],[\"grid\",{\"_index\":243,\"description\":{\"178\":{},\"179\":{},\"445\":{}}}],[\"group\",{\"_index\":144,\"description\":{\"92\":{},\"119\":{},\"122\":{},\"150\":{},\"152\":{},\"153\":{},\"314\":{},\"353\":{},\"381\":{},\"383\":{},\"396\":{}}}],[\"guid\",{\"_index\":109,\"description\":{\"62\":{}}}],[\"handl\",{\"_index\":108,\"description\":{\"62\":{},\"253\":{},\"321\":{}}}],[\"header\",{\"_index\":50,\"description\":{\"25\":{},\"35\":{},\"89\":{},\"267\":{},\"371\":{},\"448\":{}}}],[\"height\",{\"_index\":155,\"description\":{\"102\":{},\"252\":{}}}],[\"help\",{\"_index\":269,\"description\":{\"220\":{},\"362\":{}}}],[\"hold\",{\"_index\":175,\"description\":{\"122\":{},\"123\":{}}}],[\"home\",{\"_index\":92,\"description\":{\"53\":{}}}],[\"hot\",{\"_index\":380,\"description\":{\"361\":{}}}],[\"hour\",{\"_index\":170,\"description\":{\"116\":{}}}],[\"hud\",{\"_index\":95,\"description\":{\"55\":{}}}],[\"hue\",{\"_index\":328,\"description\":{\"272\":{}}}],[\"icon\",{\"_index\":24,\"description\":{\"10\":{},\"27\":{},\"84\":{},\"122\":{},\"123\":{},\"158\":{},\"159\":{},\"192\":{},\"193\":{},\"209\":{},\"211\":{},\"245\":{},\"246\":{},\"250\":{},\"333\":{},\"334\":{},\"375\":{},\"390\":{}}}],[\"icon'\",{\"_index\":262,\"description\":{\"210\":{}}}],[\"iconographi\",{\"_index\":260,\"description\":{\"208\":{}}}],[\"illustr\",{\"_index\":110,\"description\":{\"63\":{},\"78\":{},\"205\":{},\"206\":{},\"292\":{},\"293\":{}}}],[\"imag\",{\"_index\":299,\"description\":{\"244\":{},\"297\":{}}}],[\"immedi\",{\"_index\":200,\"description\":{\"138\":{},\"388\":{}}}],[\"import\",{\"_index\":252,\"description\":{\"190\":{}}}],[\"includ\",{\"_index\":183,\"description\":{\"129\":{},\"141\":{},\"198\":{},\"323\":{},\"359\":{},\"406\":{}}}],[\"inclus\",{\"_index\":188,\"description\":{\"130\":{},\"199\":{},\"212\":{},\"360\":{}}}],[\"inconsist\",{\"_index\":283,\"description\":{\"233\":{}}}],[\"indent\",{\"_index\":342,\"description\":{\"286\":{}}}],[\"indic\",{\"_index\":160,\"description\":{\"108\":{},\"231\":{},\"274\":{},\"342\":{},\"343\":{}}}],[\"individu\",{\"_index\":296,\"description\":{\"242\":{}}}],[\"inform\",{\"_index\":258,\"description\":{\"205\":{},\"229\":{},\"392\":{}}}],[\"input\",{\"_index\":178,\"description\":{\"125\":{},\"126\":{},\"127\":{},\"128\":{},\"129\":{},\"130\":{},\"131\":{},\"132\":{},\"254\":{},\"270\":{},\"322\":{},\"435\":{}}}],[\"insid\",{\"_index\":404,\"description\":{\"393\":{}}}],[\"instal\",{\"_index\":134,\"description\":{\"82\":{}}}],[\"intern\",{\"_index\":379,\"description\":{\"355\":{}}}],[\"isol\",{\"_index\":173,\"description\":{\"121\":{}}}],[\"item\",{\"_index\":103,\"description\":{\"60\":{},\"142\":{},\"200\":{},\"333\":{},\"334\":{}}}],[\"justifi\",{\"_index\":344,\"description\":{\"287\":{}}}],[\"k9\",{\"_index\":49,\"description\":{\"25\":{},\"31\":{},\"32\":{}}}],[\"keep\",{\"_index\":205,\"description\":{\"142\":{},\"200\":{},\"228\":{},\"229\":{},\"285\":{}}}],[\"keyboard\",{\"_index\":104,\"description\":{\"61\":{},\"219\":{}}}],[\"kit\",{\"_index\":231,\"description\":{\"166\":{}}}],[\"label\",{\"_index\":184,\"description\":{\"129\":{},\"130\":{},\"141\":{},\"198\":{},\"199\":{},\"224\":{},\"240\":{},\"314\":{},\"323\":{},\"353\":{},\"359\":{},\"360\":{}}}],[\"larg\",{\"_index\":398,\"description\":{\"383\":{}}}],[\"launch\",{\"_index\":201,\"description\":{\"138\":{},\"139\":{}}}],[\"left\",{\"_index\":63,\"description\":{\"35\":{},\"257\":{},\"376\":{}}}],[\"length\",{\"_index\":368,\"description\":{\"320\":{}}}],[\"less\",{\"_index\":186,\"description\":{\"130\":{},\"199\":{},\"360\":{}}}],[\"level\",{\"_index\":223,\"description\":{\"159\":{},\"190\":{},\"333\":{}}}],[\"light\",{\"_index\":355,\"description\":{\"298\":{},\"301\":{},\"430\":{}}}],[\"limit\",{\"_index\":324,\"description\":{\"266\":{}}}],[\"line\",{\"_index\":21,\"description\":{\"9\":{}}}],[\"link\",{\"_index\":345,\"description\":{\"288\":{},\"289\":{},\"410\":{},\"423\":{}}}],[\"list\",{\"_index\":29,\"description\":{\"12\":{},\"48\":{},\"56\":{},\"99\":{}}}],[\"load\",{\"_index\":86,\"description\":{\"49\":{},\"81\":{},\"265\":{}}}],[\"loader\",{\"_index\":272,\"description\":{\"223\":{},\"237\":{},\"239\":{},\"264\":{},\"265\":{},\"266\":{},\"413\":{},\"414\":{}}}],[\"logic\",{\"_index\":19,\"description\":{\"8\":{}}}],[\"loup\",{\"_index\":306,\"description\":{\"254\":{},\"270\":{},\"322\":{}}}],[\"make\",{\"_index\":369,\"description\":{\"329\":{}}}],[\"manag\",{\"_index\":112,\"description\":{\"64\":{}}}],[\"mani\",{\"_index\":250,\"description\":{\"189\":{},\"408\":{}}}],[\"map\",{\"_index\":80,\"description\":{\"45\":{}}}],[\"mark\",{\"_index\":193,\"description\":{\"132\":{},\"145\":{},\"203\":{},\"225\":{},\"230\":{},\"234\":{},\"415\":{}}}],[\"maximum\",{\"_index\":212,\"description\":{\"151\":{}}}],[\"meet\",{\"_index\":364,\"description\":{\"317\":{}}}],[\"menu\",{\"_index\":102,\"description\":{\"60\":{},\"96\":{},\"142\":{},\"200\":{},\"306\":{},\"336\":{}}}],[\"messag\",{\"_index\":36,\"description\":{\"18\":{},\"63\":{},\"67\":{}}}],[\"meter\",{\"_index\":270,\"description\":{\"221\":{},\"223\":{},\"424\":{}}}],[\"miller\",{\"_index\":17,\"description\":{\"7\":{}}}],[\"mind\",{\"_index\":245,\"description\":{\"180\":{}}}],[\"minim\",{\"_index\":151,\"description\":{\"97\":{}}}],[\"minimum\",{\"_index\":179,\"description\":{\"126\":{},\"134\":{},\"148\":{},\"196\":{}}}],[\"minor\",{\"_index\":194,\"description\":{\"132\":{},\"145\":{},\"203\":{}}}],[\"mirror\",{\"_index\":295,\"description\":{\"242\":{},\"243\":{},\"244\":{},\"245\":{},\"246\":{},\"247\":{},\"248\":{}}}],[\"miss\",{\"_index\":321,\"description\":{\"263\":{}}}],[\"mix\",{\"_index\":181,\"description\":{\"128\":{},\"169\":{},\"311\":{},\"348\":{},\"367\":{},\"375\":{}}}],[\"mobil\",{\"_index\":51,\"description\":{\"26\":{},\"44\":{},\"279\":{},\"403\":{}}}],[\"modal\",{\"_index\":39,\"description\":{\"19\":{}}}],[\"mode\",{\"_index\":125,\"description\":{\"75\":{}}}],[\"modifi\",{\"_index\":247,\"description\":{\"182\":{}}}],[\"more\",{\"_index\":53,\"description\":{\"28\":{},\"81\":{},\"405\":{}}}],[\"motion\",{\"_index\":363,\"description\":{\"315\":{},\"443\":{}}}],[\"movement\",{\"_index\":301,\"description\":{\"245\":{}}}],[\"multi\",{\"_index\":128,\"description\":{\"77\":{}}}],[\"multilin\",{\"_index\":8,\"description\":{\"2\":{}}}],[\"multipl\",{\"_index\":407,\"description\":{\"407\":{}}}],[\"mutual\",{\"_index\":361,\"description\":{\"313\":{}}}],[\"name\",{\"_index\":284,\"description\":{\"233\":{}}}],[\"nav\",{\"_index\":64,\"description\":{\"35\":{}}}],[\"navig\",{\"_index\":4,\"description\":{\"1\":{},\"26\":{},\"36\":{},\"97\":{},\"194\":{},\"326\":{},\"334\":{},\"403\":{},\"428\":{}}}],[\"necessari\",{\"_index\":221,\"description\":{\"158\":{}}}],[\"need\",{\"_index\":381,\"description\":{\"361\":{}}}],[\"nest\",{\"_index\":253,\"description\":{\"191\":{},\"336\":{},\"398\":{}}}],[\"new\",{\"_index\":357,\"description\":{\"302\":{}}}],[\"notif\",{\"_index\":76,\"description\":{\"43\":{}}}],[\"number\",{\"_index\":313,\"description\":{\"259\":{},\"282\":{},\"283\":{},\"368\":{}}}],[\"numer\",{\"_index\":131,\"description\":{\"79\":{},\"258\":{},\"259\":{},\"282\":{}}}],[\"object\",{\"_index\":291,\"description\":{\"236\":{},\"442\":{}}}],[\"offic\",{\"_index\":169,\"description\":{\"116\":{}}}],[\"oldstyl\",{\"_index\":336,\"description\":{\"283\":{}}}],[\"on\",{\"_index\":405,\"description\":{\"405\":{}}}],[\"onboard\",{\"_index\":77,\"description\":{\"44\":{}}}],[\"opac\",{\"_index\":121,\"description\":{\"73\":{}}}],[\"option\",{\"_index\":196,\"description\":{\"132\":{},\"145\":{},\"160\":{},\"203\":{},\"313\":{},\"361\":{}}}],[\"order\",{\"_index\":216,\"description\":{\"153\":{}}}],[\"organ\",{\"_index\":60,\"description\":{\"34\":{}}}],[\"over\",{\"_index\":354,\"description\":{\"297\":{},\"403\":{}}}],[\"overflow\",{\"_index\":171,\"description\":{\"118\":{},\"119\":{},\"127\":{},\"135\":{},\"149\":{},\"150\":{},\"168\":{},\"187\":{},\"188\":{},\"197\":{},\"222\":{},\"226\":{},\"238\":{},\"299\":{},\"310\":{},\"328\":{},\"347\":{},\"358\":{},\"374\":{},\"380\":{},\"381\":{},\"386\":{},\"395\":{},\"396\":{},\"400\":{}}}],[\"overrid\",{\"_index\":220,\"description\":{\"157\":{}}}],[\"overus\",{\"_index\":393,\"description\":{\"372\":{}}}],[\"page\",{\"_index\":84,\"description\":{\"47\":{},\"194\":{}}}],[\"pagin\",{\"_index\":113,\"description\":{\"65\":{},\"99\":{},\"100\":{},\"101\":{}}}],[\"panel\",{\"_index\":56,\"description\":{\"31\":{},\"32\":{},\"94\":{},\"161\":{},\"181\":{},\"183\":{},\"184\":{},\"325\":{}}}],[\"paragraph\",{\"_index\":338,\"description\":{\"284\":{}}}],[\"partial\",{\"_index\":235,\"description\":{\"173\":{}}}],[\"pattern\",{\"_index\":139,\"description\":{\"89\":{}}}],[\"photo\",{\"_index\":15,\"description\":{\"6\":{}}}],[\"picker\",{\"_index\":99,\"description\":{\"57\":{},\"68\":{},\"69\":{},\"195\":{},\"196\":{},\"197\":{},\"198\":{},\"199\":{},\"200\":{},\"201\":{},\"202\":{},\"203\":{},\"422\":{}}}],[\"place\",{\"_index\":353,\"description\":{\"297\":{},\"371\":{},\"376\":{},\"393\":{},\"403\":{}}}],[\"placement\",{\"_index\":177,\"description\":{\"123\":{},\"357\":{},\"402\":{}}}],[\"platform\",{\"_index\":239,\"description\":{\"176\":{}}}],[\"player\",{\"_index\":90,\"description\":{\"52\":{}}}],[\"point\",{\"_index\":341,\"description\":{\"285\":{}}}],[\"pointer\",{\"_index\":135,\"description\":{\"82\":{}}}],[\"popov\",{\"_index\":32,\"description\":{\"15\":{},\"81\":{},\"137\":{},\"138\":{},\"139\":{},\"160\":{},\"276\":{},\"337\":{},\"345\":{},\"446\":{}}}],[\"positive/neg\",{\"_index\":386,\"description\":{\"363\":{}}}],[\"prefix\",{\"_index\":385,\"description\":{\"363\":{}}}],[\"presenc\",{\"_index\":142,\"description\":{\"91\":{}}}],[\"prevent\",{\"_index\":266,\"description\":{\"218\":{}}}],[\"principl\",{\"_index\":238,\"description\":{\"175\":{}}}],[\"product\",{\"_index\":158,\"description\":{\"107\":{}}}],[\"progress\",{\"_index\":271,\"description\":{\"221\":{},\"222\":{},\"223\":{},\"224\":{},\"237\":{},\"238\":{},\"239\":{},\"240\":{},\"264\":{},\"265\":{},\"266\":{},\"413\":{},\"414\":{},\"424\":{}}}],[\"provid\",{\"_index\":383,\"description\":{\"362\":{}}}],[\"quick\",{\"_index\":150,\"description\":{\"96\":{},\"110\":{},\"373\":{},\"377\":{},\"425\":{}}}],[\"radio\",{\"_index\":198,\"description\":{\"136\":{},\"309\":{},\"313\":{},\"314\":{},\"351\":{},\"426\":{}}}],[\"radiu\",{\"_index\":326,\"description\":{\"269\":{}}}],[\"rail\",{\"_index\":1,\"description\":{\"0\":{},\"181\":{}}}],[\"rang\",{\"_index\":98,\"description\":{\"57\":{}}}],[\"rate\",{\"_index\":387,\"description\":{\"364\":{},\"365\":{},\"366\":{},\"427\":{}}}],[\"reader\",{\"_index\":348,\"description\":{\"290\":{}}}],[\"rectangular\",{\"_index\":375,\"description\":{\"338\":{}}}],[\"redund\",{\"_index\":406,\"description\":{\"406\":{}}}],[\"relat\",{\"_index\":174,\"description\":{\"122\":{},\"353\":{}}}],[\"repres\",{\"_index\":297,\"description\":{\"243\":{},\"245\":{},\"246\":{}}}],[\"requir\",{\"_index\":197,\"description\":{\"132\":{},\"145\":{},\"203\":{},\"235\":{}}}],[\"respect\",{\"_index\":176,\"description\":{\"123\":{},\"153\":{},\"210\":{},\"260\":{},\"278\":{},\"281\":{}}}],[\"respons\",{\"_index\":242,\"description\":{\"178\":{},\"179\":{},\"445\":{}}}],[\"review\",{\"_index\":185,\"description\":{\"130\":{},\"199\":{},\"360\":{}}}],[\"right\",{\"_index\":311,\"description\":{\"258\":{},\"335\":{}}}],[\"rotat\",{\"_index\":107,\"description\":{\"62\":{}}}],[\"rtl\",{\"_index\":378,\"description\":{\"354\":{}}}],[\"rule\",{\"_index\":192,\"description\":{\"131\":{},\"144\":{},\"202\":{},\"281\":{},\"370\":{},\"371\":{},\"372\":{},\"421\":{}}}],[\"save\",{\"_index\":203,\"description\":{\"140\":{}}}],[\"scale\",{\"_index\":240,\"description\":{\"176\":{},\"207\":{},\"211\":{},\"278\":{},\"295\":{}}}],[\"scorecard\",{\"_index\":257,\"description\":{\"204\":{}}}],[\"screen\",{\"_index\":62,\"description\":{\"34\":{},\"40\":{},\"53\":{},\"54\":{},\"290\":{}}}],[\"scroll\",{\"_index\":44,\"description\":{\"23\":{}}}],[\"search\",{\"_index\":13,\"description\":{\"5\":{},\"30\":{},\"33\":{},\"80\":{}}}],[\"select\",{\"_index\":11,\"description\":{\"4\":{},\"77\":{},\"195\":{},\"196\":{},\"197\":{},\"198\":{},\"199\":{},\"200\":{},\"201\":{},\"202\":{},\"203\":{},\"255\":{},\"271\":{},\"324\":{},\"422\":{}}}],[\"sentenc\",{\"_index\":218,\"description\":{\"156\":{},\"332\":{}}}],[\"share\",{\"_index\":123,\"description\":{\"74\":{},\"75\":{},\"96\":{}}}],[\"sheet\",{\"_index\":124,\"description\":{\"74\":{}}}],[\"shell\",{\"_index\":48,\"description\":{\"24\":{}}}],[\"short\",{\"_index\":340,\"description\":{\"285\":{}}}],[\"shortcut\",{\"_index\":105,\"description\":{\"61\":{},\"377\":{}}}],[\"show\",{\"_index\":279,\"description\":{\"231\":{},\"362\":{}}}],[\"side\",{\"_index\":152,\"description\":{\"97\":{},\"326\":{},\"428\":{}}}],[\"size\",{\"_index\":157,\"description\":{\"106\":{},\"279\":{}}}],[\"skip\",{\"_index\":281,\"description\":{\"232\":{}}}],[\"slash\",{\"_index\":303,\"description\":{\"248\":{}}}],[\"slider\",{\"_index\":34,\"description\":{\"16\":{},\"319\":{},\"356\":{},\"417\":{},\"429\":{}}}],[\"small\",{\"_index\":322,\"description\":{\"266\":{}}}],[\"sourc\",{\"_index\":280,\"description\":{\"231\":{},\"274\":{},\"338\":{},\"339\":{},\"342\":{},\"343\":{}}}],[\"space\",{\"_index\":323,\"description\":{\"266\":{},\"341\":{}}}],[\"sparingli\",{\"_index\":318,\"description\":{\"262\":{},\"397\":{}}}],[\"spectrum\",{\"_index\":365,\"description\":{\"317\":{}}}],[\"split\",{\"_index\":43,\"description\":{\"22\":{},\"28\":{}}}],[\"squar\",{\"_index\":376,\"description\":{\"339\":{}}}],[\"standalon\",{\"_index\":234,\"description\":{\"171\":{},\"350\":{}}}],[\"standard\",{\"_index\":40,\"description\":{\"20\":{}}}],[\"star\",{\"_index\":390,\"description\":{\"368\":{}}}],[\"start\",{\"_index\":61,\"description\":{\"34\":{},\"124\":{}}}],[\"startscreen\",{\"_index\":130,\"description\":{\"78\":{}}}],[\"state\",{\"_index\":140,\"description\":{\"90\":{},\"173\":{},\"254\":{},\"270\":{},\"322\":{}}}],[\"statu\",{\"_index\":163,\"description\":{\"109\":{},\"165\":{},\"298\":{},\"301\":{},\"430\":{}}}],[\"steplist\",{\"_index\":148,\"description\":{\"95\":{}}}],[\"stepper\",{\"_index\":132,\"description\":{\"79\":{}}}],[\"string\",{\"_index\":337,\"description\":{\"283\":{}}}],[\"stripe\",{\"_index\":316,\"description\":{\"261\":{}}}],[\"structur\",{\"_index\":264,\"description\":{\"213\":{}}}],[\"style\",{\"_index\":211,\"description\":{\"151\":{},\"236\":{},\"442\":{}}}],[\"subsequ\",{\"_index\":227,\"description\":{\"160\":{}}}],[\"succinct\",{\"_index\":276,\"description\":{\"229\":{}}}],[\"suggest\",{\"_index\":204,\"description\":{\"140\":{}}}],[\"summari\",{\"_index\":126,\"description\":{\"76\":{}}}],[\"suppress\",{\"_index\":199,\"description\":{\"137\":{}}}],[\"switch\",{\"_index\":232,\"description\":{\"167\":{},\"171\":{},\"172\":{},\"352\":{},\"431\":{}}}],[\"system\",{\"_index\":360,\"description\":{\"307\":{},\"317\":{}}}],[\"tab\",{\"_index\":52,\"description\":{\"27\":{},\"98\":{},\"102\":{},\"185\":{},\"187\":{},\"189\":{},\"190\":{},\"191\":{},\"433\":{}}}],[\"tabl\",{\"_index\":229,\"description\":{\"165\":{},\"256\":{},\"432\":{}}}],[\"tabular\",{\"_index\":312,\"description\":{\"259\":{},\"282\":{}}}],[\"tag\",{\"_index\":16,\"description\":{\"6\":{},\"104\":{},\"105\":{},\"379\":{},\"381\":{},\"383\":{},\"434\":{}}}],[\"taken\",{\"_index\":290,\"description\":{\"235\":{}}}],[\"takeov\",{\"_index\":73,\"description\":{\"40\":{}}}],[\"taxonomi\",{\"_index\":37,\"description\":{\"18\":{}}}],[\"team\",{\"_index\":189,\"description\":{\"130\":{},\"199\":{},\"360\":{}}}],[\"templat\",{\"_index\":248,\"description\":{\"182\":{}}}],[\"text\",{\"_index\":5,\"description\":{\"2\":{},\"33\":{},\"103\":{},\"118\":{},\"125\":{},\"127\":{},\"132\":{},\"135\":{},\"149\":{},\"155\":{},\"168\":{},\"188\":{},\"197\":{},\"216\":{},\"217\":{},\"222\":{},\"226\":{},\"229\":{},\"238\":{},\"283\":{},\"287\":{},\"299\":{},\"301\":{},\"310\":{},\"328\":{},\"334\":{},\"347\":{},\"358\":{},\"361\":{},\"375\":{},\"380\":{},\"386\":{},\"395\":{},\"400\":{},\"435\":{}}}],[\"textual\",{\"_index\":309,\"description\":{\"257\":{}}}],[\"they'v\",{\"_index\":289,\"description\":{\"235\":{}}}],[\"thin\",{\"_index\":339,\"description\":{\"284\":{}}}],[\"think\",{\"_index\":347,\"description\":{\"290\":{}}}],[\"thumb\",{\"_index\":69,\"description\":{\"38\":{}}}],[\"thumbnail\",{\"_index\":96,\"description\":{\"56\":{},\"70\":{},\"85\":{}}}],[\"time\",{\"_index\":79,\"description\":{\"44\":{},\"68\":{},\"243\":{},\"246\":{}}}],[\"titl\",{\"_index\":274,\"description\":{\"228\":{},\"330\":{}}}],[\"toast\",{\"_index\":118,\"description\":{\"70\":{},\"399\":{},\"401\":{},\"403\":{},\"407\":{},\"408\":{},\"436\":{}}}],[\"token\",{\"_index\":228,\"description\":{\"163\":{}}}],[\"tone\",{\"_index\":350,\"description\":{\"291\":{}}}],[\"tool\",{\"_index\":145,\"description\":{\"93\":{},\"117\":{},\"118\":{},\"119\":{},\"120\":{},\"121\":{},\"122\":{},\"123\":{},\"249\":{},\"316\":{},\"412\":{},\"437\":{}}}],[\"tooltip\",{\"_index\":172,\"description\":{\"120\":{},\"385\":{},\"390\":{},\"393\":{},\"438\":{}}}],[\"top\",{\"_index\":222,\"description\":{\"159\":{}}}],[\"touch\",{\"_index\":159,\"description\":{\"108\":{}}}],[\"tour\",{\"_index\":282,\"description\":{\"232\":{},\"233\":{}}}],[\"track\",{\"_index\":91,\"description\":{\"53\":{},\"272\":{}}}],[\"transpar\",{\"_index\":167,\"description\":{\"114\":{}}}],[\"tray\",{\"_index\":329,\"description\":{\"273\":{},\"276\":{},\"345\":{},\"447\":{}}}],[\"tree\",{\"_index\":2,\"description\":{\"1\":{}}}],[\"truncat\",{\"_index\":207,\"description\":{\"143\":{}}}],[\"tutori\",{\"_index\":358,\"description\":{\"303\":{},\"304\":{},\"305\":{},\"306\":{},\"307\":{},\"308\":{}}}],[\"type\",{\"_index\":331,\"description\":{\"278\":{}}}],[\"typographi\",{\"_index\":330,\"description\":{\"277\":{},\"441\":{}}}],[\"ui\",{\"_index\":230,\"description\":{\"166\":{}}}],[\"underlin\",{\"_index\":333,\"description\":{\"280\":{}}}],[\"unifi\",{\"_index\":149,\"description\":{\"96\":{}}}],[\"unit\",{\"_index\":382,\"description\":{\"362\":{}}}],[\"up\",{\"_index\":66,\"description\":{\"35\":{}}}],[\"updat\",{\"_index\":146,\"description\":{\"93\":{},\"98\":{},\"104\":{},\"110\":{}}}],[\"upsel\",{\"_index\":93,\"description\":{\"54\":{}}}],[\"us\",{\"_index\":209,\"description\":{\"151\":{},\"155\":{},\"156\":{},\"158\":{},\"159\":{},\"171\":{},\"190\":{},\"192\":{},\"193\":{},\"209\":{},\"227\":{},\"231\":{},\"233\":{},\"259\":{},\"261\":{},\"262\":{},\"263\":{},\"265\":{},\"266\":{},\"272\":{},\"279\":{},\"280\":{},\"282\":{},\"283\":{},\"286\":{},\"289\":{},\"300\":{},\"313\":{},\"330\":{},\"332\":{},\"333\":{},\"335\":{},\"350\":{},\"377\":{},\"390\":{},\"397\":{}}}],[\"user\",{\"_index\":141,\"description\":{\"91\":{},\"235\":{}}}],[\"valu\",{\"_index\":182,\"description\":{\"128\":{},\"169\":{},\"263\":{},\"311\":{},\"348\":{},\"357\":{},\"362\":{},\"363\":{},\"367\":{}}}],[\"vari\",{\"_index\":251,\"description\":{\"190\":{}}}],[\"variant\",{\"_index\":54,\"description\":{\"28\":{}}}],[\"variat\",{\"_index\":25,\"description\":{\"10\":{},\"58\":{},\"300\":{},\"335\":{}}}],[\"vertic\",{\"_index\":314,\"description\":{\"260\":{}}}],[\"video\",{\"_index\":89,\"description\":{\"52\":{}}}],[\"view\",{\"_index\":3,\"description\":{\"1\":{},\"48\":{},\"51\":{},\"265\":{}}}],[\"voic\",{\"_index\":349,\"description\":{\"291\":{}}}],[\"warmup\",{\"_index\":400,\"description\":{\"389\":{}}}],[\"warn\",{\"_index\":100,\"description\":{\"58\":{}}}],[\"web\",{\"_index\":0,\"description\":{\"0\":{},\"71\":{},\"107\":{}}}],[\"well\",{\"_index\":10,\"description\":{\"3\":{}}}],[\"what'\",{\"_index\":356,\"description\":{\"302\":{}}}],[\"wheel\",{\"_index\":325,\"description\":{\"268\":{},\"418\":{}}}],[\"width\",{\"_index\":180,\"description\":{\"126\":{},\"134\":{},\"147\":{},\"148\":{},\"196\":{},\"201\":{},\"227\":{},\"252\":{},\"284\":{},\"327\":{},\"329\":{}}}],[\"within\",{\"_index\":14,\"description\":{\"5\":{},\"153\":{},\"233\":{}}}],[\"wrap\",{\"_index\":395,\"description\":{\"378\":{}}}],[\"xd\",{\"_index\":59,\"description\":{\"34\":{}}}],[\"zebra\",{\"_index\":315,\"description\":{\"261\":{}}}],[\"zone\",{\"_index\":27,\"description\":{\"11\":{}}}]],\"pipeline\":[\"stemmer\"]}");

/***/ }),

/***/ "./data/search_store.json":
/*!********************************!*\
  !*** ./data/search_store.json ***!
  \********************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442, 443, 444, 445, 446, 447, 448, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":0,\"name\":\"Web Rails\",\"slug\":\"web-rails\",\"description\":\"Web Rails\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":1,\"name\":\"Tree View Navigation\",\"slug\":\"tree-view-navigation\",\"description\":\"Tree View Navigation\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":2,\"name\":\"Text Areas & Multiline Fields\",\"slug\":\"text-areas-multiline-fields\",\"description\":\"Text Areas & Multiline Fields\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":3,\"name\":\"Wells\",\"slug\":\"wells\",\"description\":\"Wells\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":4,\"name\":\"Select Boxes\",\"slug\":\"select-boxes\",\"description\":\"Select Boxes\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":5,\"name\":\"Search Within\",\"slug\":\"search-within\",\"description\":\"Search Within\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":6,\"name\":\"Photo Tag\",\"slug\":\"photo-tag\",\"description\":\"Photo Tag\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":7,\"name\":\"Miller Columns\",\"slug\":\"miller-columns\",\"description\":\"Miller Columns\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":8,\"name\":\"Logic Button\",\"slug\":\"logic-button\",\"description\":\"Logic Button\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":9,\"name\":\"In-Line Alerts\",\"slug\":\"in-line-alerts\",\"description\":\"In-Line Alerts\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":10,\"name\":\"Dropdowns (Icon Button Variation)\",\"slug\":\"dropdowns-icon-button-variation\",\"description\":\"Dropdowns (Icon Button Variation)\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":11,\"name\":\"Drop Zone\",\"slug\":\"drop-zone\",\"description\":\"Drop Zone\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":12,\"name\":\"Draggable List\",\"slug\":\"draggable-list\",\"description\":\"Draggable List\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":13,\"name\":\"Cycle Button\",\"slug\":\"cycle-button\",\"description\":\"Cycle Button\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":14,\"name\":\"Calendar \",\"slug\":\"calendar\",\"description\":\"Calendar \",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":15,\"name\":\"Alert Popovers\",\"slug\":\"alert-popovers\",\"description\":\"Alert Popovers\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":16,\"name\":\"Advanced Sliders\",\"slug\":\"advanced-sliders\",\"description\":\"Advanced Sliders\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":17,\"name\":\"Accordion\",\"slug\":\"accordion\",\"description\":\"Accordion\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":18,\"name\":\"Messaging Taxonomy & Framework\",\"slug\":\"messaging-taxonomy-framework\",\"description\":\"Messaging Taxonomy & Framework\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":19,\"name\":\"Modals\",\"slug\":\"modals\",\"description\":\"Modals\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":20,\"name\":\"Standard Cards\",\"slug\":\"standard-cards\",\"description\":\"Standard Cards\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":21,\"name\":\"Asset Cards\",\"slug\":\"asset-cards\",\"description\":\"Asset Cards\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":22,\"name\":\"Split Button\",\"slug\":\"split-button\",\"description\":\"Split Button\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":23,\"name\":\"Scroll Bars\",\"slug\":\"scroll-bars\",\"description\":\"Scroll Bars\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":24,\"name\":\"Experience Cloud Shell\",\"slug\":\"experience-cloud-shell\",\"description\":\"Experience Cloud Shell\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":25,\"name\":\"K9 Header Bar\",\"slug\":\"k9-header-bar\",\"description\":\"K9 Header Bar\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":26,\"name\":\"Mobile Navigation Bars\",\"slug\":\"mobile-navigation-bars\",\"description\":\"Mobile Navigation Bars\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":27,\"name\":\"Icon-only Tabs\",\"slug\":\"icon-only-tabs\",\"description\":\"Icon-only Tabs\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":28,\"name\":\"Split Button (More Variant)\",\"slug\":\"split-button-more-variant\",\"description\":\"Split Button (More Variant)\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":29,\"name\":\"Action Bar\",\"slug\":\"action-bar\",\"description\":\"Action Bar\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":30,\"name\":\"Search Field\",\"slug\":\"search-field\",\"description\":\"Search Field\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":31,\"name\":\"K9 Panel Anatomy\",\"slug\":\"k9-panel-anatomy\",\"description\":\"K9 Panel Anatomy\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":32,\"name\":\"K9 Panel\",\"slug\":\"k9-panel\",\"description\":\"K9 Panel\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":33,\"name\":\"Search and Text Filters\",\"slug\":\"search-and-text-filters\",\"description\":\"Search and Text Filters\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":34,\"name\":\"XD Cloud organizer and start screen\",\"slug\":\"xd-cloud-organizer-and-start-screen\",\"description\":\"XD Cloud organizer and start screen\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":35,\"name\":\"Left Nav, Header, and 1-up\",\"slug\":\"left-nav-header-and-1-up\",\"description\":\"Left Nav, Header, and 1-up\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":36,\"name\":\"Navigation Boxes\",\"slug\":\"navigation-boxes\",\"description\":\"Navigation Boxes\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":37,\"name\":\"Badges\",\"slug\":\"badges\",\"description\":\"Badges\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":38,\"name\":\"Drag Bars & Thumbs\",\"slug\":\"drag-bars-thumbs\",\"description\":\"Drag Bars & Thumbs\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":39,\"name\":\"Carousel\",\"slug\":\"carousel\",\"description\":\"Carousel\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":40,\"name\":\"Full Screen Dialog & Full Screen Takeover\",\"slug\":\"full-screen-dialog-full-screen-takeover\",\"description\":\"Full Screen Dialog & Full Screen Takeover\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":41,\"name\":\"Breadcrumbs\",\"slug\":\"breadcrumbs\",\"description\":\"Breadcrumbs\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":42,\"name\":\"Commenting\",\"slug\":\"commenting\",\"description\":\"Commenting\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":43,\"name\":\"Notifications\",\"slug\":\"notifications\",\"description\":\"Notifications\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":44,\"name\":\"Mobile Onboarding Experience (First Time Experience Cards) \",\"slug\":\"mobile-onboarding-experience-first-time-experience-cards\",\"description\":\"Mobile Onboarding Experience (First Time Experience Cards) \",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":45,\"name\":\"Map\",\"slug\":\"map\",\"description\":\"Map\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":46,\"name\":\"On-Canvas Controls\",\"slug\":\"on-canvas-controls\",\"description\":\"On-Canvas Controls\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":47,\"name\":\"Error Pages\",\"slug\":\"error-pages\",\"description\":\"Error Pages\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":48,\"name\":\"List View\",\"slug\":\"list-view\",\"description\":\"List View\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":49,\"name\":\"Ghost Loading\",\"slug\":\"ghost-loading\",\"description\":\"Ghost Loading\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":50,\"name\":\"Checklist\",\"slug\":\"checklist\",\"description\":\"Checklist\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":51,\"name\":\"Gallery View\",\"slug\":\"gallery-view\",\"description\":\"Gallery View\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":52,\"name\":\"Video Player\",\"slug\":\"video-player\",\"description\":\"Video Player\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":53,\"name\":\"Tracking card in home screen\",\"slug\":\"tracking-card-in-home-screen\",\"description\":\"Tracking card in home screen\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":54,\"name\":\"Upsell flows and screens\",\"slug\":\"upsell-flows-and-screens\",\"description\":\"Upsell flows and screens\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":55,\"name\":\"HUD Button\",\"slug\":\"hud-button\",\"description\":\"HUD Button\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":56,\"name\":\"Dropdown Thumbnail List\",\"slug\":\"dropdown-thumbnail-list\",\"description\":\"Dropdown Thumbnail List\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":57,\"name\":\"Date & Date Range Picker\",\"slug\":\"date-date-range-picker\",\"description\":\"Date & Date Range Picker\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":58,\"name\":\"Dialog (Warning Variation)\",\"slug\":\"dialog-warning-variation\",\"description\":\"Dialog (Warning Variation)\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":59,\"name\":\"Dial\",\"slug\":\"dial\",\"description\":\"Dial\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":60,\"name\":\"Menu Items\",\"slug\":\"menu-items\",\"description\":\"Menu Items\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":61,\"name\":\"Keyboard Shortcuts\",\"slug\":\"keyboard-shortcuts\",\"description\":\"Keyboard Shortcuts\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":62,\"name\":\"Crop / Rotate Handles and Guides\",\"slug\":\"crop-rotate-handles-and-guides\",\"description\":\"Crop / Rotate Handles and Guides\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":63,\"name\":\"Illustrated Message\",\"slug\":\"illustrated-message\",\"description\":\"Illustrated Message\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":64,\"name\":\"File Management\",\"slug\":\"file-management\",\"description\":\"File Management\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":65,\"name\":\"Pagination Dots\",\"slug\":\"pagination-dots\",\"description\":\"Pagination Dots\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":66,\"name\":\"Carousel-Dexter\",\"slug\":\"carousel-dexter\",\"description\":\"Carousel-Dexter\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":67,\"name\":\"Chat messaging\",\"slug\":\"chat-messaging\",\"description\":\"Chat messaging\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":68,\"name\":\"Time Picker\",\"slug\":\"time-picker\",\"description\":\"Time Picker\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":69,\"name\":\"Color Picker\",\"slug\":\"color-picker\",\"description\":\"Color Picker\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":70,\"name\":\"Toast with Thumbnail\",\"slug\":\"toast-with-thumbnail\",\"description\":\"Toast with Thumbnail\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":71,\"name\":\"Web Footer\",\"slug\":\"web-footer\",\"description\":\"Web Footer\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":72,\"name\":\"Avatars\",\"slug\":\"avatars\",\"description\":\"Avatars\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":73,\"name\":\"Opacity Checkerboard\",\"slug\":\"opacity-checkerboard\",\"description\":\"Opacity Checkerboard\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":74,\"name\":\"Share Sheet\",\"slug\":\"share-sheet\",\"description\":\"Share Sheet\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":75,\"name\":\"Share Mode\",\"slug\":\"share-mode\",\"description\":\"Share Mode\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":76,\"name\":\"Summary Details\",\"slug\":\"summary-details\",\"description\":\"Summary Details\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":77,\"name\":\"Multi-select Combo Box\",\"slug\":\"multi-select-combo-box\",\"description\":\"Multi-select Combo Box\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":78,\"name\":\"Startscreen Illustrations\",\"slug\":\"startscreen-illustrations\",\"description\":\"Startscreen Illustrations\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":79,\"name\":\"Numeric Stepper Field\",\"slug\":\"numeric-stepper-field\",\"description\":\"Numeric Stepper Field\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":80,\"name\":\"Dynamic Search\",\"slug\":\"dynamic-search\",\"description\":\"Dynamic Search\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":81,\"name\":\"Popover Load More\",\"slug\":\"popover-load-more\",\"description\":\"Popover Load More\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":82,\"name\":\"Installer Pointer\",\"slug\":\"installer-pointer\",\"description\":\"Installer Pointer\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":83,\"name\":\"Banner Alerts\",\"slug\":\"banner-alerts\",\"description\":\"Banner Alerts\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":84,\"name\":\"Dropdown with Icons\",\"slug\":\"dropdown-with-icons\",\"description\":\"Dropdown with Icons\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":85,\"name\":\"Thumbnail\",\"slug\":\"thumbnail\",\"description\":\"Thumbnail\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":86,\"name\":\"Artboards\",\"slug\":\"artboards\",\"description\":\"Artboards\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":87,\"name\":\"Drag and Drop\",\"slug\":\"drag-and-drop\",\"description\":\"Drag and Drop\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":88,\"name\":\"Forum Cards\",\"slug\":\"forum-cards\",\"description\":\"Forum Cards\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":89,\"name\":\"Header Pattern\",\"slug\":\"header-pattern\",\"description\":\"Header Pattern\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":90,\"name\":\"Card States\",\"slug\":\"card-states\",\"description\":\"Card States\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":91,\"name\":\"User Presence Colors\",\"slug\":\"user-presence-colors\",\"description\":\"User Presence Colors\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":92,\"name\":\"Connected Action Button Group\",\"slug\":\"connected-action-button-group\",\"description\":\"Connected Action Button Group\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":93,\"name\":\"Tool Update\",\"slug\":\"tool-update\",\"description\":\"Tool Update\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":94,\"name\":\"Floating Panels\",\"slug\":\"floating-panels\",\"description\":\"Floating Panels\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":95,\"name\":\"Steplist\",\"slug\":\"steplist\",\"description\":\"Steplist\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":96,\"name\":\"Unified Sharing - Quick Share and Share Menu\",\"slug\":\"unified-sharing-quick-share-and-share-menu\",\"description\":\"Unified Sharing - Quick Share and Share Menu\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":97,\"name\":\"Minimized Side Navigation\",\"slug\":\"minimized-side-navigation\",\"description\":\"Minimized Side Navigation\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":98,\"name\":\"Blue Tabs Update\",\"slug\":\"blue-tabs-update\",\"description\":\"Blue Tabs Update\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":99,\"name\":\"Pagination List\",\"slug\":\"pagination-list\",\"description\":\"Pagination List\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":100,\"name\":\"Pagination Field\",\"slug\":\"pagination-field\",\"description\":\"Pagination Field\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":101,\"name\":\"Pagination Button\",\"slug\":\"pagination-button\",\"description\":\"Pagination Button\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":102,\"name\":\"Fluid Height Tabs\",\"slug\":\"fluid-height-tabs\",\"description\":\"Fluid Height Tabs\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":103,\"name\":\"Text With Definition\",\"slug\":\"text-with-definition\",\"description\":\"Text With Definition\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":104,\"name\":\"Tag Updates\",\"slug\":\"tag-updates\",\"description\":\"Tag Updates\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":105,\"name\":\"Tag Fields\",\"slug\":\"tag-fields\",\"description\":\"Tag Fields\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":106,\"name\":\"Button Sizes\",\"slug\":\"button-sizes\",\"description\":\"Button Sizes\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":107,\"name\":\"Footer (web products)\",\"slug\":\"footer-web-products\",\"description\":\"Footer (web products)\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":108,\"name\":\"Touch indicator\",\"slug\":\"touch-indicator\",\"description\":\"Touch indicator\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":109,\"name\":\"checkbox affects button status\",\"slug\":\"checkbox-affects-button-status\",\"description\":\"checkbox affects button status\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":110,\"name\":\"Quick actions update\",\"slug\":\"quick-actions-update\",\"description\":\"Quick actions update\",\"pageType\":\"contribution\",\"query\":\"\",\"type\":\"contribution\"},{\"id\":111,\"name\":\"Fonts\",\"slug\":\"fonts\",\"description\":\"Fonts \",\"pageType\":\"Resources\",\"query\":\"\",\"type\":\"page\"},{\"id\":112,\"name\":\"Color\",\"slug\":\"color\",\"description\":\"Color \",\"pageType\":\"Foundation\",\"query\":\"\",\"type\":\"page\"},{\"id\":113,\"name\":\"Color\",\"slug\":\"color\",\"description\":\"Don't create your own colors \",\"display_description\":\"Don't create your own colors\",\"pageType\":\"Foundation\",\"query\":\"Don't create your own colors\",\"type\":\"usageGuideline\"},{\"id\":114,\"name\":\"Color\",\"slug\":\"color\",\"description\":\"Transparency \",\"display_description\":\"Transparency\",\"pageType\":\"Foundation\",\"query\":\"Transparency\",\"type\":\"usageGuideline\"},{\"id\":115,\"name\":\"Color\",\"slug\":\"color\",\"description\":\"Communicating with color \",\"display_description\":\"Communicating with color\",\"pageType\":\"Foundation\",\"query\":\"Communicating with color\",\"type\":\"usageGuideline\"},{\"id\":116,\"name\":\"Office hours\",\"slug\":\"office-hours\",\"description\":\"Office hours \",\"pageType\":\"Guidelines\",\"query\":\"\",\"type\":\"page\"},{\"id\":117,\"name\":\"Action button\",\"slug\":\"action-button\",\"description\":\"Action button tool\",\"pageType\":\"Component\",\"query\":\"\",\"type\":\"page\"},{\"id\":118,\"name\":\"Action button\",\"slug\":\"action-button\",\"description\":\"Text overflow tool\",\"display_description\":\"Text overflow\",\"pageType\":\"Component\",\"query\":\"Text overflow\",\"type\":\"Behavior\"},{\"id\":119,\"name\":\"Action button\",\"slug\":\"action-button\",\"description\":\"Action button group overflow tool\",\"display_description\":\"Action button group overflow\",\"pageType\":\"Component\",\"query\":\"Action button group overflow\",\"type\":\"Behavior\"},{\"id\":120,\"name\":\"Action button\",\"slug\":\"action-button\",\"description\":\"Tooltips tool\",\"display_description\":\"Tooltips\",\"pageType\":\"Component\",\"query\":\"Tooltips\",\"type\":\"usageGuideline\"},{\"id\":121,\"name\":\"Action button\",\"slug\":\"action-button\",\"description\":\"Isolated action buttons tool\",\"display_description\":\"Isolated action buttons\",\"pageType\":\"Component\",\"query\":\"Isolated action buttons\",\"type\":\"usageGuideline\"},{\"id\":122,\"name\":\"Action button\",\"slug\":\"action-button\",\"description\":\"Only group related actions with a hold icon tool\",\"display_description\":\"Only group related actions with a hold icon\",\"pageType\":\"Component\",\"query\":\"Only group related actions with a hold icon\",\"type\":\"usageGuideline\"},{\"id\":123,\"name\":\"Action button\",\"slug\":\"action-button\",\"description\":\"Respect hold icon placement tool\",\"display_description\":\"Respect hold icon placement\",\"pageType\":\"Component\",\"query\":\"Respect hold icon placement\",\"type\":\"usageGuideline\"},{\"id\":124,\"name\":\"Get started\",\"slug\":\"get-started\",\"description\":\"Get started \",\"pageType\":\"Guidelines\",\"query\":\"\",\"type\":\"page\"},{\"id\":125,\"name\":\"Text field\",\"slug\":\"text-field\",\"description\":\"Text field input field\",\"pageType\":\"Component\",\"query\":\"\",\"type\":\"page\"},{\"id\":126,\"name\":\"Text field\",\"slug\":\"text-field\",\"description\":\"Minimum width input field\",\"display_description\":\"Minimum width\",\"pageType\":\"Component\",\"query\":\"Minimum width\",\"type\":\"Behavior\"},{\"id\":127,\"name\":\"Text field\",\"slug\":\"text-field\",\"description\":\"Text overflow input field\",\"display_description\":\"Text overflow\",\"pageType\":\"Component\",\"query\":\"Text overflow\",\"type\":\"Behavior\"},{\"id\":128,\"name\":\"Text field\",\"slug\":\"text-field\",\"description\":\"Mixed value input field\",\"display_description\":\"Mixed value\",\"pageType\":\"Component\",\"query\":\"Mixed value\",\"type\":\"Behavior\"},{\"id\":129,\"name\":\"Text field\",\"slug\":\"text-field\",\"description\":\"Include a label input field\",\"display_description\":\"Include a label\",\"pageType\":\"Component\",\"query\":\"Include a label\",\"type\":\"usageGuideline\"},{\"id\":130,\"name\":\"Text field\",\"slug\":\"text-field\",\"description\":\"Review label-less designs with Inclusive Design team input field\",\"display_description\":\"Review label-less designs with Inclusive Design team\",\"pageType\":\"Component\",\"query\":\"Review label-less designs with Inclusive Design team\",\"type\":\"usageGuideline\"},{\"id\":131,\"name\":\"Text field\",\"slug\":\"text-field\",\"description\":\"Follow capitalization rules input field\",\"display_description\":\"Follow capitalization rules\",\"pageType\":\"Component\",\"query\":\"Follow capitalization rules\",\"type\":\"usageGuideline\"},{\"id\":132,\"name\":\"Text field\",\"slug\":\"text-field\",\"description\":\"Mark the minority of text fields in a form as optional or required input field\",\"display_description\":\"Mark the minority of text fields in a form as optional or required\",\"pageType\":\"Component\",\"query\":\"Mark the minority of text fields in a form as optional or required\",\"type\":\"usageGuideline\"},{\"id\":133,\"name\":\"Combo box\",\"slug\":\"combo-box\",\"description\":\"Combo box \",\"pageType\":\"Component\",\"query\":\"\",\"type\":\"page\"},{\"id\":134,\"name\":\"Combo box\",\"slug\":\"combo-box\",\"description\":\"Minimum width \",\"display_description\":\"Minimum width\",\"pageType\":\"Component\",\"query\":\"Minimum width\",\"type\":\"Behavior\"},{\"id\":135,\"name\":\"Combo box\",\"slug\":\"combo-box\",\"description\":\"Text overflow \",\"display_description\":\"Text overflow\",\"pageType\":\"Component\",\"query\":\"Text overflow\",\"type\":\"Behavior\"},{\"id\":136,\"name\":\"Combo box\",\"slug\":\"combo-box\",\"description\":\"Combo box, dropdown, or radio buttons? \",\"display_description\":\"Combo box, dropdown, or radio buttons?\",\"pageType\":\"Component\",\"query\":\"Combo box, dropdown, or radio buttons?\",\"type\":\"usageGuideline\"},{\"id\":137,\"name\":\"Combo box\",\"slug\":\"combo-box\",\"description\":\"Suppressing the popover \",\"display_description\":\"Suppressing the popover\",\"pageType\":\"Component\",\"query\":\"Suppressing the popover\",\"type\":\"usageGuideline\"},{\"id\":138,\"name\":\"Combo box\",\"slug\":\"combo-box\",\"description\":\"Immediate popover launch \",\"display_description\":\"Immediate popover launch\",\"pageType\":\"Component\",\"query\":\"Immediate popover launch\",\"type\":\"usageGuideline\"},{\"id\":139,\"name\":\"Combo box\",\"slug\":\"combo-box\",\"description\":\"Delayed popover launch \",\"display_description\":\"Delayed popover launch\",\"pageType\":\"Component\",\"query\":\"Delayed popover launch\",\"type\":\"usageGuideline\"},{\"id\":140,\"name\":\"Combo box\",\"slug\":\"combo-box\",\"description\":\"Saving suggestions \",\"display_description\":\"Saving suggestions\",\"pageType\":\"Component\",\"query\":\"Saving suggestions\",\"type\":\"usageGuideline\"},{\"id\":141,\"name\":\"Combo box\",\"slug\":\"combo-box\",\"description\":\"Include a label \",\"display_description\":\"Include a label\",\"pageType\":\"Component\",\"query\":\"Include a label\",\"type\":\"usageGuideline\"},{\"id\":142,\"name\":\"Combo box\",\"slug\":\"combo-box\",\"description\":\"Keep menu items concise \",\"display_description\":\"Keep menu items concise\",\"pageType\":\"Component\",\"query\":\"Keep menu items concise\",\"type\":\"usageGuideline\"},{\"id\":143,\"name\":\"Combo box\",\"slug\":\"combo-box\",\"description\":\"Truncation \",\"display_description\":\"Truncation\",\"pageType\":\"Component\",\"query\":\"Truncation\",\"type\":\"usageGuideline\"},{\"id\":144,\"name\":\"Combo box\",\"slug\":\"combo-box\",\"description\":\"Follow capitalization rules \",\"display_description\":\"Follow capitalization rules\",\"pageType\":\"Component\",\"query\":\"Follow capitalization rules\",\"type\":\"usageGuideline\"},{\"id\":145,\"name\":\"Combo box\",\"slug\":\"combo-box\",\"description\":\"Mark the minority of combo boxes in a form as optional or required \",\"display_description\":\"Mark the minority of combo boxes in a form as optional or required\",\"pageType\":\"Component\",\"query\":\"Mark the minority of combo boxes in a form as optional or required\",\"type\":\"usageGuideline\"},{\"id\":146,\"name\":\"Button\",\"slug\":\"button\",\"description\":\"Button \",\"pageType\":\"Component\",\"query\":\"\",\"type\":\"page\"},{\"id\":147,\"name\":\"Button\",\"slug\":\"button\",\"description\":\"Flexible width \",\"display_description\":\"Flexible width\",\"pageType\":\"Component\",\"query\":\"Flexible width\",\"type\":\"Behavior\"},{\"id\":148,\"name\":\"Button\",\"slug\":\"button\",\"description\":\"Minimum width \",\"display_description\":\"Minimum width\",\"pageType\":\"Component\",\"query\":\"Minimum width\",\"type\":\"Behavior\"},{\"id\":149,\"name\":\"Button\",\"slug\":\"button\",\"description\":\"Text overflow \",\"display_description\":\"Text overflow\",\"pageType\":\"Component\",\"query\":\"Text overflow\",\"type\":\"Behavior\"},{\"id\":150,\"name\":\"Button\",\"slug\":\"button\",\"description\":\"Button group overflow \",\"display_description\":\"Button group overflow\",\"pageType\":\"Component\",\"query\":\"Button group overflow\",\"type\":\"Behavior\"},{\"id\":151,\"name\":\"Button\",\"slug\":\"button\",\"description\":\"Use 2 button styles maximum \",\"display_description\":\"Use 2 button styles maximum\",\"pageType\":\"Component\",\"query\":\"Use 2 button styles maximum\",\"type\":\"usageGuideline\"},{\"id\":152,\"name\":\"Button\",\"slug\":\"button\",\"description\":\"Align button groups based on content \",\"display_description\":\"Align button groups based on content\",\"pageType\":\"Component\",\"query\":\"Align button groups based on content\",\"type\":\"usageGuideline\"},{\"id\":153,\"name\":\"Button\",\"slug\":\"button\",\"description\":\"Respect button order within a group \",\"display_description\":\"Respect button order within a group\",\"pageType\":\"Component\",\"query\":\"Respect button order within a group\",\"type\":\"usageGuideline\"},{\"id\":154,\"name\":\"Button\",\"slug\":\"button\",\"description\":\"Be concise \",\"display_description\":\"Be concise\",\"pageType\":\"Component\",\"query\":\"Be concise\",\"type\":\"usageGuideline\"},{\"id\":155,\"name\":\"Button\",\"slug\":\"button\",\"description\":\"Use clear text \",\"display_description\":\"Use clear text\",\"pageType\":\"Component\",\"query\":\"Use clear text\",\"type\":\"usageGuideline\"},{\"id\":156,\"name\":\"Button\",\"slug\":\"button\",\"description\":\"Use sentence case \",\"display_description\":\"Use sentence case\",\"pageType\":\"Component\",\"query\":\"Use sentence case\",\"type\":\"usageGuideline\"},{\"id\":157,\"name\":\"Button\",\"slug\":\"button\",\"description\":\"Don't override color \",\"display_description\":\"Don't override color\",\"pageType\":\"Component\",\"query\":\"Don't override color\",\"type\":\"usageGuideline\"},{\"id\":158,\"name\":\"Button\",\"slug\":\"button\",\"description\":\"Use icons only when necessary \",\"display_description\":\"Use icons only when necessary\",\"pageType\":\"Component\",\"query\":\"Use icons only when necessary\",\"type\":\"usageGuideline\"},{\"id\":159,\"name\":\"Button\",\"slug\":\"button\",\"description\":\"Use icons for top-level action(s) only \",\"display_description\":\"Use icons for top-level action(s) only\",\"pageType\":\"Component\",\"query\":\"Use icons for top-level action(s) only\",\"type\":\"usageGuideline\"},{\"id\":160,\"name\":\"Button\",\"slug\":\"button\",\"description\":\"Display a popover when featuring subsequent options \",\"display_description\":\"Display a popover when featuring subsequent options\",\"pageType\":\"Component\",\"query\":\"Display a popover when featuring subsequent options\",\"type\":\"usageGuideline\"},{\"id\":161,\"name\":\"Bar panel\",\"slug\":\"bar-panel\",\"description\":\"Bar panel \",\"pageType\":\"Guidelines\",\"query\":\"\",\"type\":\"page\"},{\"id\":162,\"name\":\"Dialogs\",\"slug\":\"dialogs\",\"description\":\"Dialogs \",\"pageType\":\"Guidelines\",\"query\":\"\",\"type\":\"page\"},{\"id\":163,\"name\":\"Design Tokens\",\"slug\":\"design-tokens\",\"description\":\"Design Tokens \",\"pageType\":\"Guidelines\",\"query\":\"\",\"type\":\"page\"},{\"id\":164,\"name\":\"Breadcrumbs\",\"slug\":\"breadcrumbs\",\"description\":\"Breadcrumbs \",\"pageType\":\"Guidelines\",\"query\":\"\",\"type\":\"page\"},{\"id\":165,\"name\":\"Status table\",\"slug\":\"status-table\",\"description\":\"Status table \",\"pageType\":\"Guidelines\",\"query\":\"\",\"type\":\"page\"},{\"id\":166,\"name\":\"UI kits\",\"slug\":\"ui-kits\",\"description\":\"UI kits \",\"pageType\":\"Resources\",\"query\":\"\",\"type\":\"page\"},{\"id\":167,\"name\":\"Switch\",\"slug\":\"switch\",\"description\":\"Switch \",\"pageType\":\"Component\",\"query\":\"\",\"type\":\"page\"},{\"id\":168,\"name\":\"Switch\",\"slug\":\"switch\",\"description\":\"Text overflow \",\"display_description\":\"Text overflow\",\"pageType\":\"Component\",\"query\":\"Text overflow\",\"type\":\"Behavior\"},{\"id\":169,\"name\":\"Switch\",\"slug\":\"switch\",\"description\":\"Mixed value \",\"display_description\":\"Mixed value\",\"pageType\":\"Component\",\"query\":\"Mixed value\",\"type\":\"Behavior\"},{\"id\":170,\"name\":\"Switch\",\"slug\":\"switch\",\"description\":\"Emphasized or not? \",\"display_description\":\"Emphasized or not?\",\"pageType\":\"Component\",\"query\":\"Emphasized or not?\",\"type\":\"usageGuideline\"},{\"id\":171,\"name\":\"Switch\",\"slug\":\"switch\",\"description\":\"When to use a standalone switch? \",\"display_description\":\"When to use a standalone switch?\",\"pageType\":\"Component\",\"query\":\"When to use a standalone switch?\",\"type\":\"usageGuideline\"},{\"id\":172,\"name\":\"Switch\",\"slug\":\"switch\",\"description\":\"Switch or checkbox? \",\"display_description\":\"Switch or checkbox?\",\"pageType\":\"Component\",\"query\":\"Switch or checkbox?\",\"type\":\"usageGuideline\"},{\"id\":173,\"name\":\"Switch\",\"slug\":\"switch\",\"description\":\"No partial state \",\"display_description\":\"No partial state\",\"pageType\":\"Component\",\"query\":\"No partial state\",\"type\":\"usageGuideline\"},{\"id\":174,\"name\":\"Application frame\",\"slug\":\"application-frame\",\"description\":\"Application frame \",\"pageType\":\"Foundation\",\"query\":\"\",\"type\":\"page\"},{\"id\":175,\"name\":\"Principles\",\"slug\":\"principles\",\"description\":\"Principles \",\"pageType\":\"Guidelines\",\"query\":\"\",\"type\":\"page\"},{\"id\":176,\"name\":\"Platform scale\",\"slug\":\"platform-scale\",\"description\":\"Platform scale \",\"pageType\":\"Foundation\",\"query\":\"\",\"type\":\"page\"},{\"id\":177,\"name\":\"Design API\",\"slug\":\"design-api\",\"description\":\"Design API \",\"pageType\":\"Search Exclude\",\"query\":\"\",\"type\":\"page\"},{\"id\":178,\"name\":\"Responsive grid\",\"slug\":\"responsive-grid\",\"description\":\"Responsive grid \",\"pageType\":\"Foundation\",\"query\":\"\",\"type\":\"page\"},{\"id\":179,\"name\":\"Responsive grid\",\"slug\":\"responsive-grid\",\"description\":\"Don't align every component to the responsive grid \",\"display_description\":\"Don't align every component to the responsive grid\",\"pageType\":\"Foundation\",\"query\":\"Don't align every component to the responsive grid\",\"type\":\"usageGuideline\"},{\"id\":180,\"name\":\"Responsive grid\",\"slug\":\"responsive-grid\",\"description\":\"Mind the gaps \",\"display_description\":\"Mind the gaps\",\"pageType\":\"Foundation\",\"query\":\"Mind the gaps\",\"type\":\"usageGuideline\"},{\"id\":181,\"name\":\"Responsive grid\",\"slug\":\"responsive-grid\",\"description\":\"Panels and rails \",\"display_description\":\"Panels and rails\",\"pageType\":\"Foundation\",\"query\":\"Panels and rails\",\"type\":\"usageGuideline\"},{\"id\":182,\"name\":\"Responsive grid\",\"slug\":\"responsive-grid\",\"description\":\"Don't modify the templates \",\"display_description\":\"Don't modify the templates\",\"pageType\":\"Foundation\",\"query\":\"Don't modify the templates\",\"type\":\"usageGuideline\"},{\"id\":183,\"name\":\"Full panel\",\"slug\":\"full-panel\",\"description\":\"Full panel \",\"pageType\":\"Guidelines\",\"query\":\"\",\"type\":\"page\"},{\"id\":184,\"name\":\"Floating panel\",\"slug\":\"floating-panel\",\"description\":\"Floating panel \",\"pageType\":\"Guidelines\",\"query\":\"\",\"type\":\"page\"},{\"id\":185,\"name\":\"Tabs\",\"slug\":\"tabs\",\"description\":\"Tabs \",\"pageType\":\"Component\",\"query\":\"\",\"type\":\"page\"},{\"id\":186,\"name\":\"Tabs\",\"slug\":\"tabs\",\"description\":\"Animation \",\"display_description\":\"Animation\",\"pageType\":\"Component\",\"query\":\"Animation\",\"type\":\"Behavior\"},{\"id\":187,\"name\":\"Tabs\",\"slug\":\"tabs\",\"description\":\"Tab overflow \",\"display_description\":\"Tab overflow\",\"pageType\":\"Component\",\"query\":\"Tab overflow\",\"type\":\"Behavior\"},{\"id\":188,\"name\":\"Tabs\",\"slug\":\"tabs\",\"description\":\"Text overflow \",\"display_description\":\"Text overflow\",\"pageType\":\"Component\",\"query\":\"Text overflow\",\"type\":\"Behavior\"},{\"id\":189,\"name\":\"Tabs\",\"slug\":\"tabs\",\"description\":\"Too many tabs \",\"display_description\":\"Too many tabs\",\"pageType\":\"Component\",\"query\":\"Too many tabs\",\"type\":\"usageGuideline\"},{\"id\":190,\"name\":\"Tabs\",\"slug\":\"tabs\",\"description\":\"Don't use tabs for varying levels of importance \",\"display_description\":\"Don't use tabs for varying levels of importance\",\"pageType\":\"Component\",\"query\":\"Don't use tabs for varying levels of importance\",\"type\":\"usageGuideline\"},{\"id\":191,\"name\":\"Tabs\",\"slug\":\"tabs\",\"description\":\"Nested tabs \",\"display_description\":\"Nested tabs\",\"pageType\":\"Component\",\"query\":\"Nested tabs\",\"type\":\"usageGuideline\"},{\"id\":192,\"name\":\"Tabs\",\"slug\":\"tabs\",\"description\":\"Use icons consistently \",\"display_description\":\"Use icons consistently\",\"pageType\":\"Component\",\"query\":\"Use icons consistently\",\"type\":\"usageGuideline\"},{\"id\":193,\"name\":\"Tabs\",\"slug\":\"tabs\",\"description\":\"Don't only use icons \",\"display_description\":\"Don't only use icons\",\"pageType\":\"Component\",\"query\":\"Don't only use icons\",\"type\":\"usageGuideline\"},{\"id\":194,\"name\":\"Tabs\",\"slug\":\"tabs\",\"description\":\"On-page navigation \",\"display_description\":\"On-page navigation\",\"pageType\":\"Component\",\"query\":\"On-page navigation\",\"type\":\"usageGuideline\"},{\"id\":195,\"name\":\"Dropdown\",\"slug\":\"dropdown\",\"description\":\"Dropdown select picker\",\"pageType\":\"Component\",\"query\":\"\",\"type\":\"page\"},{\"id\":196,\"name\":\"Dropdown\",\"slug\":\"dropdown\",\"description\":\"Minimum width select picker\",\"display_description\":\"Minimum width\",\"pageType\":\"Component\",\"query\":\"Minimum width\",\"type\":\"Behavior\"},{\"id\":197,\"name\":\"Dropdown\",\"slug\":\"dropdown\",\"description\":\"Text overflow select picker\",\"display_description\":\"Text overflow\",\"pageType\":\"Component\",\"query\":\"Text overflow\",\"type\":\"Behavior\"},{\"id\":198,\"name\":\"Dropdown\",\"slug\":\"dropdown\",\"description\":\"Include a label select picker\",\"display_description\":\"Include a label\",\"pageType\":\"Component\",\"query\":\"Include a label\",\"type\":\"usageGuideline\"},{\"id\":199,\"name\":\"Dropdown\",\"slug\":\"dropdown\",\"description\":\"Review label-less designs with Inclusive Design team select picker\",\"display_description\":\"Review label-less designs with Inclusive Design team\",\"pageType\":\"Component\",\"query\":\"Review label-less designs with Inclusive Design team\",\"type\":\"usageGuideline\"},{\"id\":200,\"name\":\"Dropdown\",\"slug\":\"dropdown\",\"description\":\"Keep menu items concise select picker\",\"display_description\":\"Keep menu items concise\",\"pageType\":\"Component\",\"query\":\"Keep menu items concise\",\"type\":\"usageGuideline\"},{\"id\":201,\"name\":\"Dropdown\",\"slug\":\"dropdown\",\"description\":\"Choose an appropriate width select picker\",\"display_description\":\"Choose an appropriate width\",\"pageType\":\"Component\",\"query\":\"Choose an appropriate width\",\"type\":\"usageGuideline\"},{\"id\":202,\"name\":\"Dropdown\",\"slug\":\"dropdown\",\"description\":\"Follow capitalization rules select picker\",\"display_description\":\"Follow capitalization rules\",\"pageType\":\"Component\",\"query\":\"Follow capitalization rules\",\"type\":\"usageGuideline\"},{\"id\":203,\"name\":\"Dropdown\",\"slug\":\"dropdown\",\"description\":\"Mark the minority of dropdowns in a form as optional or required select picker\",\"display_description\":\"Mark the minority of dropdowns in a form as optional or required\",\"pageType\":\"Component\",\"query\":\"Mark the minority of dropdowns in a form as optional or required\",\"type\":\"usageGuideline\"},{\"id\":204,\"name\":\"Scorecards\",\"slug\":\"scorecards\",\"description\":\"Scorecards \",\"pageType\":\"Guidelines\",\"query\":\"\",\"type\":\"page\"},{\"id\":205,\"name\":\"Informational illustrations\",\"slug\":\"informational-illustrations\",\"description\":\"Informational illustrations \",\"pageType\":\"Foundation\",\"query\":\"\",\"type\":\"page\"},{\"id\":206,\"name\":\"Informational illustrations\",\"slug\":\"informational-illustrations\",\"description\":\"Don't create your own illustration \",\"display_description\":\"Don't create your own illustration\",\"pageType\":\"Foundation\",\"query\":\"Don't create your own illustration\",\"type\":\"usageGuideline\"},{\"id\":207,\"name\":\"Informational illustrations\",\"slug\":\"informational-illustrations\",\"description\":\"Don’t scale \",\"display_description\":\"Don’t scale\",\"pageType\":\"Foundation\",\"query\":\"Don’t scale\",\"type\":\"usageGuideline\"},{\"id\":208,\"name\":\"Iconography\",\"slug\":\"iconography\",\"description\":\"Iconography \",\"pageType\":\"Foundation\",\"query\":\"\",\"type\":\"page\"},{\"id\":209,\"name\":\"Iconography\",\"slug\":\"iconography\",\"description\":\"Use approved icons only \",\"display_description\":\"Use approved icons only\",\"pageType\":\"Foundation\",\"query\":\"Use approved icons only\",\"type\":\"usageGuideline\"},{\"id\":210,\"name\":\"Iconography\",\"slug\":\"iconography\",\"description\":\"Respect an icon's fill \",\"display_description\":\"Respect an icon's fill\",\"pageType\":\"Foundation\",\"query\":\"Respect an icon's fill\",\"type\":\"usageGuideline\"},{\"id\":211,\"name\":\"Iconography\",\"slug\":\"iconography\",\"description\":\"Don't scale icons \",\"display_description\":\"Don't scale icons\",\"pageType\":\"Foundation\",\"query\":\"Don't scale icons\",\"type\":\"usageGuideline\"},{\"id\":212,\"name\":\"Inclusive design\",\"slug\":\"inclusive-design\",\"description\":\"Inclusive design \",\"pageType\":\"Foundation\",\"query\":\"\",\"type\":\"page\"},{\"id\":213,\"name\":\"Inclusive design\",\"slug\":\"inclusive-design\",\"description\":\"Structure \",\"display_description\":\"Structure\",\"pageType\":\"Foundation\",\"query\":\"Structure\",\"type\":\"usageGuideline\"},{\"id\":214,\"name\":\"Inclusive design\",\"slug\":\"inclusive-design\",\"description\":\"Color \",\"display_description\":\"Color\",\"pageType\":\"Foundation\",\"query\":\"Color\",\"type\":\"usageGuideline\"},{\"id\":215,\"name\":\"Inclusive design\",\"slug\":\"inclusive-design\",\"description\":\"Animation \",\"display_description\":\"Animation\",\"pageType\":\"Foundation\",\"query\":\"Animation\",\"type\":\"usageGuideline\"},{\"id\":216,\"name\":\"Inclusive design\",\"slug\":\"inclusive-design\",\"description\":\"Text alternatives \",\"display_description\":\"Text alternatives\",\"pageType\":\"Foundation\",\"query\":\"Text alternatives\",\"type\":\"usageGuideline\"},{\"id\":217,\"name\":\"Inclusive design\",\"slug\":\"inclusive-design\",\"description\":\"Fonts and text \",\"display_description\":\"Fonts and text\",\"pageType\":\"Foundation\",\"query\":\"Fonts and text\",\"type\":\"usageGuideline\"},{\"id\":218,\"name\":\"Inclusive design\",\"slug\":\"inclusive-design\",\"description\":\"Error prevention and correction \",\"display_description\":\"Error prevention and correction\",\"pageType\":\"Foundation\",\"query\":\"Error prevention and correction\",\"type\":\"usageGuideline\"},{\"id\":219,\"name\":\"Inclusive design\",\"slug\":\"inclusive-design\",\"description\":\"Keyboard equivalents \",\"display_description\":\"Keyboard equivalents\",\"pageType\":\"Foundation\",\"query\":\"Keyboard equivalents\",\"type\":\"usageGuideline\"},{\"id\":220,\"name\":\"How We Can Help\",\"slug\":\"how-we-can-help\",\"description\":\"How We Can Help \",\"pageType\":\"Guidelines\",\"query\":\"\",\"type\":\"page\"},{\"id\":221,\"name\":\"Meter\",\"slug\":\"meter\",\"description\":\"Meter progress\",\"pageType\":\"Component\",\"query\":\"\",\"type\":\"page\"},{\"id\":222,\"name\":\"Meter\",\"slug\":\"meter\",\"description\":\"Text overflow progress\",\"display_description\":\"Text overflow\",\"pageType\":\"Component\",\"query\":\"Text overflow\",\"type\":\"Behavior\"},{\"id\":223,\"name\":\"Meter\",\"slug\":\"meter\",\"description\":\"Loader or meter? progress\",\"display_description\":\"Loader or meter?\",\"pageType\":\"Component\",\"query\":\"Loader or meter?\",\"type\":\"usageGuideline\"},{\"id\":224,\"name\":\"Meter\",\"slug\":\"meter\",\"description\":\"Labels progress\",\"display_description\":\"Labels\",\"pageType\":\"Component\",\"query\":\"Labels\",\"type\":\"usageGuideline\"},{\"id\":225,\"name\":\"Coach mark\",\"slug\":\"coach-mark\",\"description\":\"Coach mark \",\"pageType\":\"Component\",\"query\":\"\",\"type\":\"page\"},{\"id\":226,\"name\":\"Coach mark\",\"slug\":\"coach-mark\",\"description\":\"Text overflow \",\"display_description\":\"Text overflow\",\"pageType\":\"Component\",\"query\":\"Text overflow\",\"type\":\"Behavior\"},{\"id\":227,\"name\":\"Coach mark\",\"slug\":\"coach-mark\",\"description\":\"Use a consistent width \",\"display_description\":\"Use a consistent width\",\"pageType\":\"Component\",\"query\":\"Use a consistent width\",\"type\":\"usageGuideline\"},{\"id\":228,\"name\":\"Coach mark\",\"slug\":\"coach-mark\",\"description\":\"Keep titles concise \",\"display_description\":\"Keep titles concise\",\"pageType\":\"Component\",\"query\":\"Keep titles concise\",\"type\":\"usageGuideline\"},{\"id\":229,\"name\":\"Coach mark\",\"slug\":\"coach-mark\",\"description\":\"Keep body text succinct and informative \",\"display_description\":\"Keep body text succinct and informative\",\"pageType\":\"Component\",\"query\":\"Keep body text succinct and informative\",\"type\":\"usageGuideline\"},{\"id\":230,\"name\":\"Coach mark\",\"slug\":\"coach-mark\",\"description\":\"Align coach marks with the action being explained \",\"display_description\":\"Align coach marks with the action being explained\",\"pageType\":\"Component\",\"query\":\"Align coach marks with the action being explained\",\"type\":\"usageGuideline\"},{\"id\":231,\"name\":\"Coach mark\",\"slug\":\"coach-mark\",\"description\":\"Use an indicator to show the source \",\"display_description\":\"Use an indicator to show the source\",\"pageType\":\"Component\",\"query\":\"Use an indicator to show the source\",\"type\":\"usageGuideline\"},{\"id\":232,\"name\":\"Coach mark\",\"slug\":\"coach-mark\",\"description\":\"Skip tour \",\"display_description\":\"Skip tour\",\"pageType\":\"Component\",\"query\":\"Skip tour\",\"type\":\"usageGuideline\"},{\"id\":233,\"name\":\"Coach mark\",\"slug\":\"coach-mark\",\"description\":\"Don't use inconsistent action names within a tour \",\"display_description\":\"Don't use inconsistent action names within a tour\",\"pageType\":\"Component\",\"query\":\"Don't use inconsistent action names within a tour\",\"type\":\"usageGuideline\"},{\"id\":234,\"name\":\"Coach mark\",\"slug\":\"coach-mark\",\"description\":\"Allow dismissal when a coach mark is depending on an action \",\"display_description\":\"Allow dismissal when a coach mark is depending on an action\",\"pageType\":\"Component\",\"query\":\"Allow dismissal when a coach mark is depending on an action\",\"type\":\"usageGuideline\"},{\"id\":235,\"name\":\"Coach mark\",\"slug\":\"coach-mark\",\"description\":\"Don't require users to confirm that they've taken an action \",\"display_description\":\"Don't require users to confirm that they've taken an action\",\"pageType\":\"Component\",\"query\":\"Don't require users to confirm that they've taken an action\",\"type\":\"usageGuideline\"},{\"id\":236,\"name\":\"Object styles\",\"slug\":\"object-styles\",\"description\":\"Object styles \",\"pageType\":\"Foundation\",\"query\":\"\",\"type\":\"page\"},{\"id\":237,\"name\":\"Bar loader\",\"slug\":\"bar-loader\",\"description\":\"Bar loader progress\",\"pageType\":\"Component\",\"query\":\"\",\"type\":\"page\"},{\"id\":238,\"name\":\"Bar loader\",\"slug\":\"bar-loader\",\"description\":\"Text overflow progress\",\"display_description\":\"Text overflow\",\"pageType\":\"Component\",\"query\":\"Text overflow\",\"type\":\"Behavior\"},{\"id\":239,\"name\":\"Bar loader\",\"slug\":\"bar-loader\",\"description\":\"Bar loader or circle loader? progress\",\"display_description\":\"Bar loader or circle loader?\",\"pageType\":\"Component\",\"query\":\"Bar loader or circle loader?\",\"type\":\"usageGuideline\"},{\"id\":240,\"name\":\"Bar loader\",\"slug\":\"bar-loader\",\"description\":\"Labels progress\",\"display_description\":\"Labels\",\"pageType\":\"Component\",\"query\":\"Labels\",\"type\":\"usageGuideline\"},{\"id\":241,\"name\":\"Bi-directionality\",\"slug\":\"bi-directionality\",\"description\":\"Bi-directionality \",\"pageType\":\"Foundation\",\"query\":\"\",\"type\":\"page\"},{\"id\":242,\"name\":\"Bi-directionality\",\"slug\":\"bi-directionality\",\"description\":\"Mirror individual components \",\"display_description\":\"Mirror individual components\",\"pageType\":\"Foundation\",\"query\":\"Mirror individual components\",\"type\":\"usageGuideline\"},{\"id\":243,\"name\":\"Bi-directionality\",\"slug\":\"bi-directionality\",\"description\":\"Don't mirror components that represent time \",\"display_description\":\"Don't mirror components that represent time\",\"pageType\":\"Foundation\",\"query\":\"Don't mirror components that represent time\",\"type\":\"usageGuideline\"},{\"id\":244,\"name\":\"Bi-directionality\",\"slug\":\"bi-directionality\",\"description\":\"Mirror composite images with directional flow \",\"display_description\":\"Mirror composite images with directional flow\",\"pageType\":\"Foundation\",\"query\":\"Mirror composite images with directional flow\",\"type\":\"usageGuideline\"},{\"id\":245,\"name\":\"Bi-directionality\",\"slug\":\"bi-directionality\",\"description\":\"Mirror icons that represent movement \",\"display_description\":\"Mirror icons that represent movement\",\"pageType\":\"Foundation\",\"query\":\"Mirror icons that represent movement\",\"type\":\"usageGuideline\"},{\"id\":246,\"name\":\"Bi-directionality\",\"slug\":\"bi-directionality\",\"description\":\"Don't mirror icons that represent time \",\"display_description\":\"Don't mirror icons that represent time\",\"pageType\":\"Foundation\",\"query\":\"Don't mirror icons that represent time\",\"type\":\"usageGuideline\"},{\"id\":247,\"name\":\"Bi-directionality\",\"slug\":\"bi-directionality\",\"description\":\"Don't mirror checkmarks \",\"display_description\":\"Don't mirror checkmarks\",\"pageType\":\"Foundation\",\"query\":\"Don't mirror checkmarks\",\"type\":\"usageGuideline\"},{\"id\":248,\"name\":\"Bi-directionality\",\"slug\":\"bi-directionality\",\"description\":\"Don't mirror slashes \",\"display_description\":\"Don't mirror slashes\",\"pageType\":\"Foundation\",\"query\":\"Don't mirror slashes\",\"type\":\"usageGuideline\"},{\"id\":249,\"name\":\"Tool (deprecated)\",\"slug\":\"tool\",\"description\":\"Tool (deprecated) \",\"pageType\":\"Component\",\"query\":\"\",\"type\":\"page\"},{\"id\":250,\"name\":\"Icons\",\"slug\":\"icons-dev\",\"description\":\"Icons \",\"pageType\":\"Guidelines\",\"query\":\"\",\"type\":\"page\"},{\"id\":251,\"name\":\"Color area\",\"slug\":\"color-area\",\"description\":\"Color area \",\"pageType\":\"Component\",\"query\":\"\",\"type\":\"page\"},{\"id\":252,\"name\":\"Color area\",\"slug\":\"color-area\",\"description\":\"Flexible width and height \",\"display_description\":\"Flexible width and height\",\"pageType\":\"Component\",\"query\":\"Flexible width and height\",\"type\":\"Behavior\"},{\"id\":253,\"name\":\"Color area\",\"slug\":\"color-area\",\"description\":\"Handle behavior \",\"display_description\":\"Handle behavior\",\"pageType\":\"Component\",\"query\":\"Handle behavior\",\"type\":\"Behavior\"},{\"id\":254,\"name\":\"Color area\",\"slug\":\"color-area\",\"description\":\"Loupe behavior (down state, finger input) \",\"display_description\":\"Loupe behavior (down state, finger input)\",\"pageType\":\"Component\",\"query\":\"Loupe behavior (down state, finger input)\",\"type\":\"Behavior\"},{\"id\":255,\"name\":\"Color area\",\"slug\":\"color-area\",\"description\":\"Display color selection \",\"display_description\":\"Display color selection\",\"pageType\":\"Component\",\"query\":\"Display color selection\",\"type\":\"usageGuideline\"},{\"id\":256,\"name\":\"Table\",\"slug\":\"table\",\"description\":\"Table \",\"pageType\":\"Component\",\"query\":\"\",\"type\":\"page\"},{\"id\":257,\"name\":\"Table\",\"slug\":\"table\",\"description\":\"Left align textual data \",\"display_description\":\"Left align textual data\",\"pageType\":\"Component\",\"query\":\"Left align textual data\",\"type\":\"usageGuideline\"},{\"id\":258,\"name\":\"Table\",\"slug\":\"table\",\"description\":\"Right align numerical data \",\"display_description\":\"Right align numerical data\",\"pageType\":\"Component\",\"query\":\"Right align numerical data\",\"type\":\"usageGuideline\"},{\"id\":259,\"name\":\"Table\",\"slug\":\"table\",\"description\":\"Use tabular numbers for numerical data \",\"display_description\":\"Use tabular numbers for numerical data\",\"pageType\":\"Component\",\"query\":\"Use tabular numbers for numerical data\",\"type\":\"usageGuideline\"},{\"id\":260,\"name\":\"Table\",\"slug\":\"table\",\"description\":\"Respect vertical alignment \",\"display_description\":\"Respect vertical alignment\",\"pageType\":\"Component\",\"query\":\"Respect vertical alignment\",\"type\":\"usageGuideline\"},{\"id\":261,\"name\":\"Table\",\"slug\":\"table\",\"description\":\"Don't use zebra stripes \",\"display_description\":\"Don't use zebra stripes\",\"pageType\":\"Component\",\"query\":\"Don't use zebra stripes\",\"type\":\"usageGuideline\"},{\"id\":262,\"name\":\"Table\",\"slug\":\"table\",\"description\":\"Use column dividers sparingly \",\"display_description\":\"Use column dividers sparingly\",\"pageType\":\"Component\",\"query\":\"Use column dividers sparingly\",\"type\":\"usageGuideline\"},{\"id\":263,\"name\":\"Table\",\"slug\":\"table\",\"description\":\"Use an en dash (–) for missing values \",\"display_description\":\"Use an en dash (–) for missing values\",\"pageType\":\"Component\",\"query\":\"Use an en dash (–) for missing values\",\"type\":\"usageGuideline\"},{\"id\":264,\"name\":\"Circle loader\",\"slug\":\"circle-loader\",\"description\":\"Circle loader progress\",\"pageType\":\"Component\",\"query\":\"\",\"type\":\"page\"},{\"id\":265,\"name\":\"Circle loader\",\"slug\":\"circle-loader\",\"description\":\"Use circle loaders for loading views progress\",\"display_description\":\"Use circle loaders for loading views\",\"pageType\":\"Component\",\"query\":\"Use circle loaders for loading views\",\"type\":\"usageGuideline\"},{\"id\":266,\"name\":\"Circle loader\",\"slug\":\"circle-loader\",\"description\":\"Use small circle loaders when space is limited progress\",\"display_description\":\"Use small circle loaders when space is limited\",\"pageType\":\"Component\",\"query\":\"Use small circle loaders when space is limited\",\"type\":\"usageGuideline\"},{\"id\":267,\"name\":\"Headers\",\"slug\":\"headers\",\"description\":\"Headers \",\"pageType\":\"Guidelines\",\"query\":\"\",\"type\":\"page\"},{\"id\":268,\"name\":\"Color wheel\",\"slug\":\"color-wheel\",\"description\":\"Color wheel \",\"pageType\":\"Component\",\"query\":\"\",\"type\":\"page\"},{\"id\":269,\"name\":\"Color wheel\",\"slug\":\"color-wheel\",\"description\":\"Flexible radius \",\"display_description\":\"Flexible radius\",\"pageType\":\"Component\",\"query\":\"Flexible radius\",\"type\":\"Behavior\"},{\"id\":270,\"name\":\"Color wheel\",\"slug\":\"color-wheel\",\"description\":\"Loupe behavior (down state, finger input) \",\"display_description\":\"Loupe behavior (down state, finger input)\",\"pageType\":\"Component\",\"query\":\"Loupe behavior (down state, finger input)\",\"type\":\"Behavior\"},{\"id\":271,\"name\":\"Color wheel\",\"slug\":\"color-wheel\",\"description\":\"Display color selection \",\"display_description\":\"Display color selection\",\"pageType\":\"Component\",\"query\":\"Display color selection\",\"type\":\"usageGuideline\"},{\"id\":272,\"name\":\"Color wheel\",\"slug\":\"color-wheel\",\"description\":\"Use the circular track for hues only \",\"display_description\":\"Use the circular track for hues only\",\"pageType\":\"Component\",\"query\":\"Use the circular track for hues only\",\"type\":\"usageGuideline\"},{\"id\":273,\"name\":\"Trays\",\"slug\":\"trays\",\"description\":\"Trays \",\"pageType\":\"Foundation\",\"query\":\"\",\"type\":\"page\"},{\"id\":274,\"name\":\"Trays\",\"slug\":\"trays\",\"description\":\"Source indication \",\"display_description\":\"Source indication\",\"pageType\":\"Foundation\",\"query\":\"Source indication\",\"type\":\"Behavior\"},{\"id\":275,\"name\":\"Trays\",\"slug\":\"trays\",\"description\":\"Animation \",\"display_description\":\"Animation\",\"pageType\":\"Foundation\",\"query\":\"Animation\",\"type\":\"Behavior\"},{\"id\":276,\"name\":\"Trays\",\"slug\":\"trays\",\"description\":\"Trays or popovers? \",\"display_description\":\"Trays or popovers?\",\"pageType\":\"Foundation\",\"query\":\"Trays or popovers?\",\"type\":\"usageGuideline\"},{\"id\":277,\"name\":\"Typography\",\"slug\":\"typography\",\"description\":\"Typography \",\"pageType\":\"Foundation\",\"query\":\"\",\"type\":\"page\"},{\"id\":278,\"name\":\"Typography\",\"slug\":\"typography\",\"description\":\"Respect our type scale \",\"display_description\":\"Respect our type scale\",\"pageType\":\"Foundation\",\"query\":\"Respect our type scale\",\"type\":\"usageGuideline\"},{\"id\":279,\"name\":\"Typography\",\"slug\":\"typography\",\"description\":\"Use and adjust mobile font sizes \",\"display_description\":\"Use and adjust mobile font sizes\",\"pageType\":\"Foundation\",\"query\":\"Use and adjust mobile font sizes\",\"type\":\"usageGuideline\"},{\"id\":280,\"name\":\"Typography\",\"slug\":\"typography\",\"description\":\"Don't use underlines for adding emphasis \",\"display_description\":\"Don't use underlines for adding emphasis\",\"pageType\":\"Foundation\",\"query\":\"Don't use underlines for adding emphasis\",\"type\":\"usageGuideline\"},{\"id\":281,\"name\":\"Typography\",\"slug\":\"typography\",\"description\":\"Respect capitalization rules \",\"display_description\":\"Respect capitalization rules\",\"pageType\":\"Foundation\",\"query\":\"Respect capitalization rules\",\"type\":\"usageGuideline\"},{\"id\":282,\"name\":\"Typography\",\"slug\":\"typography\",\"description\":\"Use tabular numbers for numerical data \",\"display_description\":\"Use tabular numbers for numerical data\",\"pageType\":\"Foundation\",\"query\":\"Use tabular numbers for numerical data\",\"type\":\"usageGuideline\"},{\"id\":283,\"name\":\"Typography\",\"slug\":\"typography\",\"description\":\"Use oldstyle numbers in strings of text \",\"display_description\":\"Use oldstyle numbers in strings of text\",\"pageType\":\"Foundation\",\"query\":\"Use oldstyle numbers in strings of text\",\"type\":\"usageGuideline\"},{\"id\":284,\"name\":\"Typography\",\"slug\":\"typography\",\"description\":\"Don't let paragraph widths get too thin \",\"display_description\":\"Don't let paragraph widths get too thin\",\"pageType\":\"Foundation\",\"query\":\"Don't let paragraph widths get too thin\",\"type\":\"usageGuideline\"},{\"id\":285,\"name\":\"Typography\",\"slug\":\"typography\",\"description\":\"Keep content short and to the point \",\"display_description\":\"Keep content short and to the point\",\"pageType\":\"Foundation\",\"query\":\"Keep content short and to the point\",\"type\":\"usageGuideline\"},{\"id\":286,\"name\":\"Typography\",\"slug\":\"typography\",\"description\":\"Don't use indentation \",\"display_description\":\"Don't use indentation\",\"pageType\":\"Foundation\",\"query\":\"Don't use indentation\",\"type\":\"usageGuideline\"},{\"id\":287,\"name\":\"Typography\",\"slug\":\"typography\",\"description\":\"Don't fully-justify text \",\"display_description\":\"Don't fully-justify text\",\"pageType\":\"Foundation\",\"query\":\"Don't fully-justify text\",\"type\":\"usageGuideline\"},{\"id\":288,\"name\":\"Link\",\"slug\":\"link\",\"description\":\"Link \",\"pageType\":\"Component\",\"query\":\"\",\"type\":\"page\"},{\"id\":289,\"name\":\"Link\",\"slug\":\"link\",\"description\":\"Use links in body copy \",\"display_description\":\"Use links in body copy\",\"pageType\":\"Component\",\"query\":\"Use links in body copy\",\"type\":\"usageGuideline\"},{\"id\":290,\"name\":\"Link\",\"slug\":\"link\",\"description\":\"Think about screen readers \",\"display_description\":\"Think about screen readers\",\"pageType\":\"Component\",\"query\":\"Think about screen readers\",\"type\":\"usageGuideline\"},{\"id\":291,\"name\":\"Voice and tone\",\"slug\":\"voice-and-tone\",\"description\":\"Voice and tone \",\"pageType\":\"Foundation\",\"query\":\"\",\"type\":\"page\"},{\"id\":292,\"name\":\"Brand illustrations\",\"slug\":\"brand-illustrations\",\"description\":\"Brand illustrations \",\"pageType\":\"Foundation\",\"query\":\"\",\"type\":\"page\"},{\"id\":293,\"name\":\"Brand illustrations\",\"slug\":\"brand-illustrations\",\"description\":\"Don't create your own illustration \",\"display_description\":\"Don't create your own illustration\",\"pageType\":\"Foundation\",\"query\":\"Don't create your own illustration\",\"type\":\"usageGuideline\"},{\"id\":294,\"name\":\"Brand illustrations\",\"slug\":\"brand-illustrations\",\"description\":\"Don't change colors \",\"display_description\":\"Don't change colors\",\"pageType\":\"Foundation\",\"query\":\"Don't change colors\",\"type\":\"usageGuideline\"},{\"id\":295,\"name\":\"Brand illustrations\",\"slug\":\"brand-illustrations\",\"description\":\"Don’t scale \",\"display_description\":\"Don’t scale\",\"pageType\":\"Foundation\",\"query\":\"Don’t scale\",\"type\":\"usageGuideline\"},{\"id\":296,\"name\":\"Brand illustrations\",\"slug\":\"brand-illustrations\",\"description\":\"Don't crop \",\"display_description\":\"Don't crop\",\"pageType\":\"Foundation\",\"query\":\"Don't crop\",\"type\":\"usageGuideline\"},{\"id\":297,\"name\":\"Brand illustrations\",\"slug\":\"brand-illustrations\",\"description\":\"Don’t place over an image \",\"display_description\":\"Don’t place over an image\",\"pageType\":\"Foundation\",\"query\":\"Don’t place over an image\",\"type\":\"usageGuideline\"},{\"id\":298,\"name\":\"Status light\",\"slug\":\"status-light\",\"description\":\"Status light \",\"pageType\":\"Component\",\"query\":\"\",\"type\":\"page\"},{\"id\":299,\"name\":\"Status light\",\"slug\":\"status-light\",\"description\":\"Text overflow \",\"display_description\":\"Text overflow\",\"pageType\":\"Component\",\"query\":\"Text overflow\",\"type\":\"Behavior\"},{\"id\":300,\"name\":\"Status light\",\"slug\":\"status-light\",\"description\":\"Use the appropriate variation \",\"display_description\":\"Use the appropriate variation\",\"pageType\":\"Component\",\"query\":\"Use the appropriate variation\",\"type\":\"usageGuideline\"},{\"id\":301,\"name\":\"Status light\",\"slug\":\"status-light\",\"description\":\"Status light text \",\"display_description\":\"Status light text\",\"pageType\":\"Component\",\"query\":\"Status light text\",\"type\":\"usageGuideline\"},{\"id\":302,\"name\":\"What's new\",\"slug\":\"whats-new\",\"description\":\"What's new \",\"pageType\":\"Guidelines\",\"query\":\"\",\"type\":\"page\"},{\"id\":303,\"name\":\"Tutorials\",\"slug\":\"tutorials\",\"description\":\"Tutorials \",\"pageType\":\"Search Exclude\",\"query\":\"\",\"type\":\"page\"},{\"id\":304,\"name\":\"Form errors\",\"slug\":\"https://xd.adobe.com/view/da1889a3-ed5e-4d8f-589e-59c98ff9786e-ac29/\",\"description\":\"Form errors tutorial tutorials\",\"pageType\":\"Tutorial\",\"query\":\"\",\"type\":\"Tutorial\"},{\"id\":305,\"name\":\"What is a card?\",\"slug\":\"https://xd.adobe.com/view/5822223b-9cc1-4a9a-6068-45d640aad59c-2e13/\",\"description\":\"What is a card? tutorial tutorials\",\"pageType\":\"Tutorial\",\"query\":\"\",\"type\":\"Tutorial\"},{\"id\":306,\"name\":\"Create a menu\",\"slug\":\"https://xd.adobe.com/view/25649b74-51dc-4a95-66b8-832c0c37b505-5355/\",\"description\":\"Create a menu tutorial tutorials\",\"pageType\":\"Tutorial\",\"query\":\"\",\"type\":\"Tutorial\"},{\"id\":307,\"name\":\"Gray system\",\"slug\":\"https://xd.adobe.com/view/79f3095c-9bee-4717-768f-629ad7f25997-0fc2/\",\"description\":\"Gray system tutorial tutorials\",\"pageType\":\"Tutorial\",\"query\":\"\",\"type\":\"Tutorial\"},{\"id\":308,\"name\":\"Buttons\",\"slug\":\"https://xd.adobe.com/view/b6b8b32a-d5db-4994-7db4-78b8d09cef4e-c089/\",\"description\":\"Buttons tutorial tutorials\",\"pageType\":\"Tutorial\",\"query\":\"\",\"type\":\"Tutorial\"},{\"id\":309,\"name\":\"Radio button\",\"slug\":\"radio-button\",\"description\":\"Radio button \",\"pageType\":\"Component\",\"query\":\"\",\"type\":\"page\"},{\"id\":310,\"name\":\"Radio button\",\"slug\":\"radio-button\",\"description\":\"Text overflow \",\"display_description\":\"Text overflow\",\"pageType\":\"Component\",\"query\":\"Text overflow\",\"type\":\"Behavior\"},{\"id\":311,\"name\":\"Radio button\",\"slug\":\"radio-button\",\"description\":\"Mixed value \",\"display_description\":\"Mixed value\",\"pageType\":\"Component\",\"query\":\"Mixed value\",\"type\":\"Behavior\"},{\"id\":312,\"name\":\"Radio button\",\"slug\":\"radio-button\",\"description\":\"Emphasized or not? \",\"display_description\":\"Emphasized or not?\",\"pageType\":\"Component\",\"query\":\"Emphasized or not?\",\"type\":\"usageGuideline\"},{\"id\":313,\"name\":\"Radio button\",\"slug\":\"radio-button\",\"description\":\"Use radio buttons for mutually exclusive options \",\"display_description\":\"Use radio buttons for mutually exclusive options\",\"pageType\":\"Component\",\"query\":\"Use radio buttons for mutually exclusive options\",\"type\":\"usageGuideline\"},{\"id\":314,\"name\":\"Radio button\",\"slug\":\"radio-button\",\"description\":\"Label groups of radio buttons \",\"display_description\":\"Label groups of radio buttons\",\"pageType\":\"Component\",\"query\":\"Label groups of radio buttons\",\"type\":\"usageGuideline\"},{\"id\":315,\"name\":\"Motion\",\"slug\":\"motion\",\"description\":\"Motion \",\"pageType\":\"Foundation\",\"query\":\"\",\"type\":\"page\"},{\"id\":316,\"name\":\"Tools\",\"slug\":\"tools\",\"description\":\"Tools \",\"pageType\":\"Resources\",\"query\":\"\",\"type\":\"page\"},{\"id\":317,\"name\":\"Meet Spectrum, Adobe’s design system\",\"slug\":\"home\",\"description\":\"Meet Spectrum, Adobe’s design system \",\"pageType\":\"Index\",\"query\":\"\",\"type\":\"page\"},{\"id\":318,\"name\":\"Contact us\",\"slug\":\"contact-us\",\"description\":\"Contact us \",\"pageType\":\"Guidelines\",\"query\":\"\",\"type\":\"page\"},{\"id\":319,\"name\":\"Color slider\",\"slug\":\"color-slider\",\"description\":\"Color slider \",\"pageType\":\"Component\",\"query\":\"\",\"type\":\"page\"},{\"id\":320,\"name\":\"Color slider\",\"slug\":\"color-slider\",\"description\":\"Flexible length \",\"display_description\":\"Flexible length\",\"pageType\":\"Component\",\"query\":\"Flexible length\",\"type\":\"Behavior\"},{\"id\":321,\"name\":\"Color slider\",\"slug\":\"color-slider\",\"description\":\"Handle behavior \",\"display_description\":\"Handle behavior\",\"pageType\":\"Component\",\"query\":\"Handle behavior\",\"type\":\"Behavior\"},{\"id\":322,\"name\":\"Color slider\",\"slug\":\"color-slider\",\"description\":\"Loupe behavior (down state, finger input) \",\"display_description\":\"Loupe behavior (down state, finger input)\",\"pageType\":\"Component\",\"query\":\"Loupe behavior (down state, finger input)\",\"type\":\"Behavior\"},{\"id\":323,\"name\":\"Color slider\",\"slug\":\"color-slider\",\"description\":\"Include labels \",\"display_description\":\"Include labels\",\"pageType\":\"Component\",\"query\":\"Include labels\",\"type\":\"usageGuideline\"},{\"id\":324,\"name\":\"Color slider\",\"slug\":\"color-slider\",\"description\":\"Display color selection \",\"display_description\":\"Display color selection\",\"pageType\":\"Component\",\"query\":\"Display color selection\",\"type\":\"usageGuideline\"},{\"id\":325,\"name\":\"Panels\",\"slug\":\"panels\",\"description\":\"Panels \",\"pageType\":\"Guidelines\",\"query\":\"\",\"type\":\"page\"},{\"id\":326,\"name\":\"Side navigation\",\"slug\":\"side-navigation\",\"description\":\"Side navigation \",\"pageType\":\"Component\",\"query\":\"\",\"type\":\"page\"},{\"id\":327,\"name\":\"Side navigation\",\"slug\":\"side-navigation\",\"description\":\"Flexible width \",\"display_description\":\"Flexible width\",\"pageType\":\"Component\",\"query\":\"Flexible width\",\"type\":\"Behavior\"},{\"id\":328,\"name\":\"Side navigation\",\"slug\":\"side-navigation\",\"description\":\"Text overflow \",\"display_description\":\"Text overflow\",\"pageType\":\"Component\",\"query\":\"Text overflow\",\"type\":\"Behavior\"},{\"id\":329,\"name\":\"Side navigation\",\"slug\":\"side-navigation\",\"description\":\"Don't make the width too condensed \",\"display_description\":\"Don't make the width too condensed\",\"pageType\":\"Component\",\"query\":\"Don't make the width too condensed\",\"type\":\"usageGuideline\"},{\"id\":330,\"name\":\"Side navigation\",\"slug\":\"side-navigation\",\"description\":\"Use descriptive titles \",\"display_description\":\"Use descriptive titles\",\"pageType\":\"Component\",\"query\":\"Use descriptive titles\",\"type\":\"usageGuideline\"},{\"id\":331,\"name\":\"Side navigation\",\"slug\":\"side-navigation\",\"description\":\"Be concise \",\"display_description\":\"Be concise\",\"pageType\":\"Component\",\"query\":\"Be concise\",\"type\":\"usageGuideline\"},{\"id\":332,\"name\":\"Side navigation\",\"slug\":\"side-navigation\",\"description\":\"Use sentence case \",\"display_description\":\"Use sentence case\",\"pageType\":\"Component\",\"query\":\"Use sentence case\",\"type\":\"usageGuideline\"},{\"id\":333,\"name\":\"Side navigation\",\"slug\":\"side-navigation\",\"description\":\"Use icons in first-level items only \",\"display_description\":\"Use icons in first-level items only\",\"pageType\":\"Component\",\"query\":\"Use icons in first-level items only\",\"type\":\"usageGuideline\"},{\"id\":334,\"name\":\"Side navigation\",\"slug\":\"side-navigation\",\"description\":\"Combining icon and text-only navigation items \",\"display_description\":\"Combining icon and text-only navigation items\",\"pageType\":\"Component\",\"query\":\"Combining icon and text-only navigation items\",\"type\":\"usageGuideline\"},{\"id\":335,\"name\":\"Side navigation\",\"slug\":\"side-navigation\",\"description\":\"Use the right variation \",\"display_description\":\"Use the right variation\",\"pageType\":\"Component\",\"query\":\"Use the right variation\",\"type\":\"usageGuideline\"},{\"id\":336,\"name\":\"Side navigation\",\"slug\":\"side-navigation\",\"description\":\"Avoid deep nested menus \",\"display_description\":\"Avoid deep nested menus\",\"pageType\":\"Component\",\"query\":\"Avoid deep nested menus\",\"type\":\"usageGuideline\"},{\"id\":337,\"name\":\"Popovers\",\"slug\":\"popovers\",\"description\":\"Popovers \",\"pageType\":\"Foundation\",\"query\":\"\",\"type\":\"page\"},{\"id\":338,\"name\":\"Popovers\",\"slug\":\"popovers\",\"description\":\"Rectangular source \",\"display_description\":\"Rectangular source\",\"pageType\":\"Foundation\",\"query\":\"Rectangular source\",\"type\":\"Behavior\"},{\"id\":339,\"name\":\"Popovers\",\"slug\":\"popovers\",\"description\":\"Square source \",\"display_description\":\"Square source\",\"pageType\":\"Foundation\",\"query\":\"Square source\",\"type\":\"Behavior\"},{\"id\":340,\"name\":\"Popovers\",\"slug\":\"popovers\",\"description\":\"Alignment \",\"display_description\":\"Alignment\",\"pageType\":\"Foundation\",\"query\":\"Alignment\",\"type\":\"Behavior\"},{\"id\":341,\"name\":\"Popovers\",\"slug\":\"popovers\",\"description\":\"Spacing \",\"display_description\":\"Spacing\",\"pageType\":\"Foundation\",\"query\":\"Spacing\",\"type\":\"Behavior\"},{\"id\":342,\"name\":\"Popovers\",\"slug\":\"popovers\",\"description\":\"Source indication: clear source \",\"display_description\":\"Source indication: clear source\",\"pageType\":\"Foundation\",\"query\":\"Source indication: clear source\",\"type\":\"Behavior\"},{\"id\":343,\"name\":\"Popovers\",\"slug\":\"popovers\",\"description\":\"Source indication: ambiguous source \",\"display_description\":\"Source indication: ambiguous source\",\"pageType\":\"Foundation\",\"query\":\"Source indication: ambiguous source\",\"type\":\"Behavior\"},{\"id\":344,\"name\":\"Popovers\",\"slug\":\"popovers\",\"description\":\"Animation \",\"display_description\":\"Animation\",\"pageType\":\"Foundation\",\"query\":\"Animation\",\"type\":\"Behavior\"},{\"id\":345,\"name\":\"Popovers\",\"slug\":\"popovers\",\"description\":\"Popovers or trays? \",\"display_description\":\"Popovers or trays?\",\"pageType\":\"Foundation\",\"query\":\"Popovers or trays?\",\"type\":\"usageGuideline\"},{\"id\":346,\"name\":\"Checkbox\",\"slug\":\"checkbox\",\"description\":\"Checkbox \",\"pageType\":\"Component\",\"query\":\"\",\"type\":\"page\"},{\"id\":347,\"name\":\"Checkbox\",\"slug\":\"checkbox\",\"description\":\"Text overflow \",\"display_description\":\"Text overflow\",\"pageType\":\"Component\",\"query\":\"Text overflow\",\"type\":\"Behavior\"},{\"id\":348,\"name\":\"Checkbox\",\"slug\":\"checkbox\",\"description\":\"Mixed value \",\"display_description\":\"Mixed value\",\"pageType\":\"Component\",\"query\":\"Mixed value\",\"type\":\"Behavior\"},{\"id\":349,\"name\":\"Checkbox\",\"slug\":\"checkbox\",\"description\":\"Emphasized or not? \",\"display_description\":\"Emphasized or not?\",\"pageType\":\"Component\",\"query\":\"Emphasized or not?\",\"type\":\"usageGuideline\"},{\"id\":350,\"name\":\"Checkbox\",\"slug\":\"checkbox\",\"description\":\"When to use a standalone checkbox? \",\"display_description\":\"When to use a standalone checkbox?\",\"pageType\":\"Component\",\"query\":\"When to use a standalone checkbox?\",\"type\":\"usageGuideline\"},{\"id\":351,\"name\":\"Checkbox\",\"slug\":\"checkbox\",\"description\":\"Checkbox or radio button? \",\"display_description\":\"Checkbox or radio button?\",\"pageType\":\"Component\",\"query\":\"Checkbox or radio button?\",\"type\":\"usageGuideline\"},{\"id\":352,\"name\":\"Checkbox\",\"slug\":\"checkbox\",\"description\":\"Checkbox or switch? \",\"display_description\":\"Checkbox or switch?\",\"pageType\":\"Component\",\"query\":\"Checkbox or switch?\",\"type\":\"usageGuideline\"},{\"id\":353,\"name\":\"Checkbox\",\"slug\":\"checkbox\",\"description\":\"Label groups of related checkboxes \",\"display_description\":\"Label groups of related checkboxes\",\"pageType\":\"Component\",\"query\":\"Label groups of related checkboxes\",\"type\":\"usageGuideline\"},{\"id\":354,\"name\":\"Checkbox\",\"slug\":\"checkbox\",\"description\":\"RTL \",\"display_description\":\"RTL\",\"pageType\":\"Component\",\"query\":\"RTL\",\"type\":\"Behavior\"},{\"id\":355,\"name\":\"International design\",\"slug\":\"international-design\",\"description\":\"International design \",\"pageType\":\"Foundation\",\"query\":\"\",\"type\":\"page\"},{\"id\":356,\"name\":\"Slider\",\"slug\":\"slider\",\"description\":\"Slider \",\"pageType\":\"Component\",\"query\":\"\",\"type\":\"page\"},{\"id\":357,\"name\":\"Slider\",\"slug\":\"slider\",\"description\":\"Value placement \",\"display_description\":\"Value placement\",\"pageType\":\"Component\",\"query\":\"Value placement\",\"type\":\"Behavior\"},{\"id\":358,\"name\":\"Slider\",\"slug\":\"slider\",\"description\":\"Text overflow \",\"display_description\":\"Text overflow\",\"pageType\":\"Component\",\"query\":\"Text overflow\",\"type\":\"Behavior\"},{\"id\":359,\"name\":\"Slider\",\"slug\":\"slider\",\"description\":\"Include a label \",\"display_description\":\"Include a label\",\"pageType\":\"Component\",\"query\":\"Include a label\",\"type\":\"usageGuideline\"},{\"id\":360,\"name\":\"Slider\",\"slug\":\"slider\",\"description\":\"Review label-less designs with Inclusive Design team \",\"display_description\":\"Review label-less designs with Inclusive Design team\",\"pageType\":\"Component\",\"query\":\"Review label-less designs with Inclusive Design team\",\"type\":\"usageGuideline\"},{\"id\":361,\"name\":\"Slider\",\"slug\":\"slider\",\"description\":\"Allow a hot text option when needed \",\"display_description\":\"Allow a hot text option when needed\",\"pageType\":\"Component\",\"query\":\"Allow a hot text option when needed\",\"type\":\"usageGuideline\"},{\"id\":362,\"name\":\"Slider\",\"slug\":\"slider\",\"description\":\"Show value units to help provide context \",\"display_description\":\"Show value units to help provide context\",\"pageType\":\"Component\",\"query\":\"Show value units to help provide context\",\"type\":\"usageGuideline\"},{\"id\":363,\"name\":\"Slider\",\"slug\":\"slider\",\"description\":\"Prefix positive/negative values \",\"display_description\":\"Prefix positive/negative values\",\"pageType\":\"Component\",\"query\":\"Prefix positive/negative values\",\"type\":\"usageGuideline\"},{\"id\":364,\"name\":\"Rating\",\"slug\":\"rating\",\"description\":\"Rating \",\"pageType\":\"Component\",\"query\":\"\",\"type\":\"page\"},{\"id\":365,\"name\":\"Rating\",\"slug\":\"rating\",\"description\":\"Editing rating \",\"display_description\":\"Editing rating\",\"pageType\":\"Component\",\"query\":\"Editing rating\",\"type\":\"Behavior\"},{\"id\":366,\"name\":\"Rating\",\"slug\":\"rating\",\"description\":\"Clearing rating \",\"display_description\":\"Clearing rating\",\"pageType\":\"Component\",\"query\":\"Clearing rating\",\"type\":\"Behavior\"},{\"id\":367,\"name\":\"Rating\",\"slug\":\"rating\",\"description\":\"Mixed value \",\"display_description\":\"Mixed value\",\"pageType\":\"Component\",\"query\":\"Mixed value\",\"type\":\"Behavior\"},{\"id\":368,\"name\":\"Rating\",\"slug\":\"rating\",\"description\":\"Don’t customize the number of stars available \",\"display_description\":\"Don’t customize the number of stars available\",\"pageType\":\"Component\",\"query\":\"Don’t customize the number of stars available\",\"type\":\"usageGuideline\"},{\"id\":369,\"name\":\"Alert Dialog\",\"slug\":\"alert-dialog\",\"description\":\"Alert Dialog \",\"pageType\":\"Guidelines\",\"query\":\"\",\"type\":\"page\"},{\"id\":370,\"name\":\"Divider\",\"slug\":\"divider\",\"description\":\"Divider rule\",\"pageType\":\"Component\",\"query\":\"\",\"type\":\"page\"},{\"id\":371,\"name\":\"Divider\",\"slug\":\"divider\",\"description\":\"Place a divider below a header rule\",\"display_description\":\"Place a divider below a header\",\"pageType\":\"Component\",\"query\":\"Place a divider below a header\",\"type\":\"usageGuideline\"},{\"id\":372,\"name\":\"Divider\",\"slug\":\"divider\",\"description\":\"Don’t overuse dividers rule\",\"display_description\":\"Don’t overuse dividers\",\"pageType\":\"Component\",\"query\":\"Don’t overuse dividers\",\"type\":\"usageGuideline\"},{\"id\":373,\"name\":\"Quick actions\",\"slug\":\"quick-actions\",\"description\":\"Quick actions \",\"pageType\":\"Component\",\"query\":\"\",\"type\":\"page\"},{\"id\":374,\"name\":\"Quick actions\",\"slug\":\"quick-actions\",\"description\":\"Action button overflow \",\"display_description\":\"Action button overflow\",\"pageType\":\"Component\",\"query\":\"Action button overflow\",\"type\":\"Behavior\"},{\"id\":375,\"name\":\"Quick actions\",\"slug\":\"quick-actions\",\"description\":\"Don’t mix icons and text \",\"display_description\":\"Don’t mix icons and text\",\"pageType\":\"Component\",\"query\":\"Don’t mix icons and text\",\"type\":\"usageGuideline\"},{\"id\":376,\"name\":\"Quick actions\",\"slug\":\"quick-actions\",\"description\":\"Place the most common actions to the left \",\"display_description\":\"Place the most common actions to the left\",\"pageType\":\"Component\",\"query\":\"Place the most common actions to the left\",\"type\":\"usageGuideline\"},{\"id\":377,\"name\":\"Quick actions\",\"slug\":\"quick-actions\",\"description\":\"Use quick actions as shortcuts only \",\"display_description\":\"Use quick actions as shortcuts only\",\"pageType\":\"Component\",\"query\":\"Use quick actions as shortcuts only\",\"type\":\"usageGuideline\"},{\"id\":378,\"name\":\"Quick actions\",\"slug\":\"quick-actions\",\"description\":\"Don't wrap actions \",\"display_description\":\"Don't wrap actions\",\"pageType\":\"Component\",\"query\":\"Don't wrap actions\",\"type\":\"usageGuideline\"},{\"id\":379,\"name\":\"Tag\",\"slug\":\"tag\",\"description\":\"Tag \",\"pageType\":\"Component\",\"query\":\"\",\"type\":\"page\"},{\"id\":380,\"name\":\"Tag\",\"slug\":\"tag\",\"description\":\"Text overflow \",\"display_description\":\"Text overflow\",\"pageType\":\"Component\",\"query\":\"Text overflow\",\"type\":\"Behavior\"},{\"id\":381,\"name\":\"Tag\",\"slug\":\"tag\",\"description\":\"Tag group overflow \",\"display_description\":\"Tag group overflow\",\"pageType\":\"Component\",\"query\":\"Tag group overflow\",\"type\":\"Behavior\"},{\"id\":382,\"name\":\"Tag\",\"slug\":\"tag\",\"description\":\"Allow bulk actions \",\"display_description\":\"Allow bulk actions\",\"pageType\":\"Component\",\"query\":\"Allow bulk actions\",\"type\":\"usageGuideline\"},{\"id\":383,\"name\":\"Tag\",\"slug\":\"tag\",\"description\":\"Avoid disabling a large group of tags \",\"display_description\":\"Avoid disabling a large group of tags\",\"pageType\":\"Component\",\"query\":\"Avoid disabling a large group of tags\",\"type\":\"usageGuideline\"},{\"id\":384,\"name\":\"Cards\",\"slug\":\"cards\",\"description\":\"Cards \",\"pageType\":\"Guidelines\",\"query\":\"\",\"type\":\"page\"},{\"id\":385,\"name\":\"Tooltip\",\"slug\":\"tooltip\",\"description\":\"Tooltip \",\"pageType\":\"Component\",\"query\":\"\",\"type\":\"page\"},{\"id\":386,\"name\":\"Tooltip\",\"slug\":\"tooltip\",\"description\":\"Text overflow \",\"display_description\":\"Text overflow\",\"pageType\":\"Component\",\"query\":\"Text overflow\",\"type\":\"Behavior\"},{\"id\":387,\"name\":\"Tooltip\",\"slug\":\"tooltip\",\"description\":\"Animation \",\"display_description\":\"Animation\",\"pageType\":\"Component\",\"query\":\"Animation\",\"type\":\"Behavior\"},{\"id\":388,\"name\":\"Tooltip\",\"slug\":\"tooltip\",\"description\":\"Immediate or delayed appearance \",\"display_description\":\"Immediate or delayed appearance\",\"pageType\":\"Component\",\"query\":\"Immediate or delayed appearance\",\"type\":\"Behavior\"},{\"id\":389,\"name\":\"Tooltip\",\"slug\":\"tooltip\",\"description\":\"Warmup and cooldown \",\"display_description\":\"Warmup and cooldown\",\"pageType\":\"Component\",\"query\":\"Warmup and cooldown\",\"type\":\"Behavior\"},{\"id\":390,\"name\":\"Tooltip\",\"slug\":\"tooltip\",\"description\":\"Use tooltips to describe icons \",\"display_description\":\"Use tooltips to describe icons\",\"pageType\":\"Component\",\"query\":\"Use tooltips to describe icons\",\"type\":\"usageGuideline\"},{\"id\":391,\"name\":\"Tooltip\",\"slug\":\"tooltip\",\"description\":\"Be concise \",\"display_description\":\"Be concise\",\"pageType\":\"Component\",\"query\":\"Be concise\",\"type\":\"usageGuideline\"},{\"id\":392,\"name\":\"Tooltip\",\"slug\":\"tooltip\",\"description\":\"Don't communicate crucial information \",\"display_description\":\"Don't communicate crucial information\",\"pageType\":\"Component\",\"query\":\"Don't communicate crucial information\",\"type\":\"usageGuideline\"},{\"id\":393,\"name\":\"Tooltip\",\"slug\":\"tooltip\",\"description\":\"Don't place actions inside a tooltip \",\"display_description\":\"Don't place actions inside a tooltip\",\"pageType\":\"Component\",\"query\":\"Don't place actions inside a tooltip\",\"type\":\"usageGuideline\"},{\"id\":394,\"name\":\"Dialog\",\"slug\":\"dialog\",\"description\":\"Dialog \",\"pageType\":\"Component\",\"query\":\"\",\"type\":\"page\"},{\"id\":395,\"name\":\"Dialog\",\"slug\":\"dialog\",\"description\":\"Text overflow \",\"display_description\":\"Text overflow\",\"pageType\":\"Component\",\"query\":\"Text overflow\",\"type\":\"Behavior\"},{\"id\":396,\"name\":\"Dialog\",\"slug\":\"dialog\",\"description\":\"Button group overflow \",\"display_description\":\"Button group overflow\",\"pageType\":\"Component\",\"query\":\"Button group overflow\",\"type\":\"Behavior\"},{\"id\":397,\"name\":\"Dialog\",\"slug\":\"dialog\",\"description\":\"Use dialogs sparingly \",\"display_description\":\"Use dialogs sparingly\",\"pageType\":\"Component\",\"query\":\"Use dialogs sparingly\",\"type\":\"usageGuideline\"},{\"id\":398,\"name\":\"Dialog\",\"slug\":\"dialog\",\"description\":\"Don't nest dialogs \",\"display_description\":\"Don't nest dialogs\",\"pageType\":\"Component\",\"query\":\"Don't nest dialogs\",\"type\":\"usageGuideline\"},{\"id\":399,\"name\":\"Toast\",\"slug\":\"toast\",\"description\":\"Toast \",\"pageType\":\"Component\",\"query\":\"\",\"type\":\"page\"},{\"id\":400,\"name\":\"Toast\",\"slug\":\"toast\",\"description\":\"Text overflow \",\"display_description\":\"Text overflow\",\"pageType\":\"Component\",\"query\":\"Text overflow\",\"type\":\"Behavior\"},{\"id\":401,\"name\":\"Toast\",\"slug\":\"toast\",\"description\":\"Toast or dialog? \",\"display_description\":\"Toast or dialog?\",\"pageType\":\"Component\",\"query\":\"Toast or dialog?\",\"type\":\"usageGuideline\"},{\"id\":402,\"name\":\"Toast\",\"slug\":\"toast\",\"description\":\"Placement \",\"display_description\":\"Placement\",\"pageType\":\"Component\",\"query\":\"Placement\",\"type\":\"usageGuideline\"},{\"id\":403,\"name\":\"Toast\",\"slug\":\"toast\",\"description\":\"Don’t place mobile toasts over navigation \",\"display_description\":\"Don’t place mobile toasts over navigation\",\"pageType\":\"Component\",\"query\":\"Don’t place mobile toasts over navigation\",\"type\":\"usageGuideline\"},{\"id\":404,\"name\":\"Toast\",\"slug\":\"toast\",\"description\":\"Be concise \",\"display_description\":\"Be concise\",\"pageType\":\"Component\",\"query\":\"Be concise\",\"type\":\"usageGuideline\"},{\"id\":405,\"name\":\"Toast\",\"slug\":\"toast\",\"description\":\"Don’t display more than one action \",\"display_description\":\"Don’t display more than one action\",\"pageType\":\"Component\",\"query\":\"Don’t display more than one action\",\"type\":\"usageGuideline\"},{\"id\":406,\"name\":\"Toast\",\"slug\":\"toast\",\"description\":\"Don't include a redundant action \",\"display_description\":\"Don't include a redundant action\",\"pageType\":\"Component\",\"query\":\"Don't include a redundant action\",\"type\":\"usageGuideline\"},{\"id\":407,\"name\":\"Toast\",\"slug\":\"toast\",\"description\":\"Multiple toasts \",\"display_description\":\"Multiple toasts\",\"pageType\":\"Component\",\"query\":\"Multiple toasts\",\"type\":\"usageGuideline\"},{\"id\":408,\"name\":\"Toast\",\"slug\":\"toast\",\"description\":\"Too many toasts \",\"display_description\":\"Too many toasts\",\"pageType\":\"Component\",\"query\":\"Too many toasts\",\"type\":\"usageGuideline\"},{\"id\":409,\"name\":\"Toast\",\"slug\":\"toast\",\"description\":\"Auto-dismiss \",\"display_description\":\"Auto-dismiss\",\"pageType\":\"Component\",\"query\":\"Auto-dismiss\",\"type\":\"usageGuideline\"},{\"id\":410,\"name\":\"Developer links\",\"slug\":\"developer-links\",\"description\":\"Developer links \",\"pageType\":\"Guidelines\",\"query\":\"\",\"type\":\"page\"},{\"id\":411,\"name\":\"Button\",\"slug\":\"Button-v5.1.0.xd\",\"description\":\"Button \",\"pageType\":\"file\",\"query\":\"\",\"type\":\"xd\"},{\"id\":412,\"name\":\"Action button\",\"slug\":\"Action-button-v5.2.0.xd\",\"description\":\"Action button tool\",\"pageType\":\"file\",\"query\":\"\",\"type\":\"xd\"},{\"id\":413,\"name\":\"Bar loader\",\"slug\":\"Bar-loader-v5.1.0.xd\",\"description\":\"Bar loader progress\",\"pageType\":\"file\",\"query\":\"\",\"type\":\"xd\"},{\"id\":414,\"name\":\"Circle loader\",\"slug\":\"Circle-loader-v5.0.0.xd\",\"description\":\"Circle loader progress\",\"pageType\":\"file\",\"query\":\"\",\"type\":\"xd\"},{\"id\":415,\"name\":\"Coach mark\",\"slug\":\"Coach-mark-v5.1.0.xd\",\"description\":\"Coach mark \",\"pageType\":\"file\",\"query\":\"\",\"type\":\"xd\"},{\"id\":416,\"name\":\"Color area\",\"slug\":\"Color-area-v1.0.0.xd\",\"description\":\"Color area \",\"pageType\":\"file\",\"query\":\"\",\"type\":\"xd\"},{\"id\":417,\"name\":\"Color slider\",\"slug\":\"Color-slider-v1.0.0.xd\",\"description\":\"Color slider \",\"pageType\":\"file\",\"query\":\"\",\"type\":\"xd\"},{\"id\":418,\"name\":\"Color wheel\",\"slug\":\"Color-wheel-v1.0.0.xd\",\"description\":\"Color wheel \",\"pageType\":\"file\",\"query\":\"\",\"type\":\"xd\"},{\"id\":419,\"name\":\"Combo box\",\"slug\":\"Combo-box-v5.1.0.xd\",\"description\":\"Combo box \",\"pageType\":\"file\",\"query\":\"\",\"type\":\"xd\"},{\"id\":420,\"name\":\"Dialog\",\"slug\":\"Dialog-v5.1.0.xd\",\"description\":\"Dialog \",\"pageType\":\"file\",\"query\":\"\",\"type\":\"xd\"},{\"id\":421,\"name\":\"Divider\",\"slug\":\"Divider-v6.1.0.xd\",\"description\":\"Divider rule\",\"pageType\":\"file\",\"query\":\"\",\"type\":\"xd\"},{\"id\":422,\"name\":\"Dropdown\",\"slug\":\"Dropdown-v5.1.0.xd\",\"description\":\"Dropdown select picker\",\"pageType\":\"file\",\"query\":\"\",\"type\":\"xd\"},{\"id\":423,\"name\":\"Link\",\"slug\":\"Link-v6.0.0.xd\",\"description\":\"Link \",\"pageType\":\"file\",\"query\":\"\",\"type\":\"xd\"},{\"id\":424,\"name\":\"Meter\",\"slug\":\"Meter-v5.1.0.xd\",\"description\":\"Meter progress\",\"pageType\":\"file\",\"query\":\"\",\"type\":\"xd\"},{\"id\":425,\"name\":\"Quick actions\",\"slug\":\"Quick-actions-v5.0.1.xd\",\"description\":\"Quick actions \",\"pageType\":\"file\",\"query\":\"\",\"type\":\"xd\"},{\"id\":426,\"name\":\"Radio button\",\"slug\":\"Radio-button-v6.1.0.xd\",\"description\":\"Radio button \",\"pageType\":\"file\",\"query\":\"\",\"type\":\"xd\"},{\"id\":427,\"name\":\"Rating\",\"slug\":\"Rating-v2.0.0.xd\",\"description\":\"Rating \",\"pageType\":\"file\",\"query\":\"\",\"type\":\"xd\"},{\"id\":428,\"name\":\"Side navigation\",\"slug\":\"Side-navigation-v5.0.1.xd\",\"description\":\"Side navigation \",\"pageType\":\"file\",\"query\":\"\",\"type\":\"xd\"},{\"id\":429,\"name\":\"Slider\",\"slug\":\"Slider-v5.1.0.xd\",\"description\":\"Slider \",\"pageType\":\"file\",\"query\":\"\",\"type\":\"xd\"},{\"id\":430,\"name\":\"Status light\",\"slug\":\"Status-light-v5.1.0.xd\",\"description\":\"Status light \",\"pageType\":\"file\",\"query\":\"\",\"type\":\"xd\"},{\"id\":431,\"name\":\"Switch\",\"slug\":\"Switch-v6.1.0.xd\",\"description\":\"Switch \",\"pageType\":\"file\",\"query\":\"\",\"type\":\"xd\"},{\"id\":432,\"name\":\"Table\",\"slug\":\"Table-v5.0.0.xd\",\"description\":\"Table \",\"pageType\":\"file\",\"query\":\"\",\"type\":\"xd\"},{\"id\":433,\"name\":\"Tabs\",\"slug\":\"Tabs-v5.1.0.xd\",\"description\":\"Tabs \",\"pageType\":\"file\",\"query\":\"\",\"type\":\"xd\"},{\"id\":434,\"name\":\"Tag\",\"slug\":\"Tag-v5.1.0.xd\",\"description\":\"Tag \",\"pageType\":\"file\",\"query\":\"\",\"type\":\"xd\"},{\"id\":435,\"name\":\"Text field\",\"slug\":\"Text-field-v5.1.0.xd\",\"description\":\"Text field input field\",\"pageType\":\"file\",\"query\":\"\",\"type\":\"xd\"},{\"id\":436,\"name\":\"Toast\",\"slug\":\"Toast-v5.0.0.xd\",\"description\":\"Toast \",\"pageType\":\"file\",\"query\":\"\",\"type\":\"xd\"},{\"id\":437,\"name\":\"Tool\",\"slug\":\"Tool-v5.0.0.xd\",\"description\":\"Tool \",\"pageType\":\"file\",\"query\":\"\",\"type\":\"xd\"},{\"id\":438,\"name\":\"Tooltip\",\"slug\":\"Tooltip-v5.1.0.xd\",\"description\":\"Tooltip \",\"pageType\":\"file\",\"query\":\"\",\"type\":\"xd\"},{\"id\":439,\"name\":\"Checkbox\",\"slug\":\"Checkbox-v6.1.0.xd\",\"description\":\"Checkbox \",\"pageType\":\"file\",\"query\":\"\",\"type\":\"xd\"},{\"id\":440,\"name\":\"Color\",\"slug\":\"Color-v5.0.0.xd\",\"description\":\"Color \",\"pageType\":\"file\",\"query\":\"\",\"type\":\"xd\"},{\"id\":441,\"name\":\"Typography\",\"slug\":\"Typography-v5.0.0.xd\",\"description\":\"Typography \",\"pageType\":\"file\",\"query\":\"\",\"type\":\"xd\"},{\"id\":442,\"name\":\"Object styles\",\"slug\":\"Object-styles-v5.0.0.xd\",\"description\":\"Object styles \",\"pageType\":\"file\",\"query\":\"\",\"type\":\"xd\"},{\"id\":443,\"name\":\"Motion\",\"slug\":\"Motion-v5.0.0.xd\",\"description\":\"Motion \",\"pageType\":\"file\",\"query\":\"\",\"type\":\"xd\"},{\"id\":444,\"name\":\"Application frame\",\"slug\":\"Application-frame-v5.0.0.xd\",\"description\":\"Application frame \",\"pageType\":\"file\",\"query\":\"\",\"type\":\"xd\"},{\"id\":445,\"name\":\"Responsive grid\",\"slug\":\"Responsive-grid-v5.0.0.xd\",\"description\":\"Responsive grid \",\"pageType\":\"file\",\"query\":\"\",\"type\":\"xd\"},{\"id\":446,\"name\":\"Popovers\",\"slug\":\"Popovers-v5.0.0.xd\",\"description\":\"Popovers \",\"pageType\":\"file\",\"query\":\"\",\"type\":\"xd\"},{\"id\":447,\"name\":\"Trays\",\"slug\":\"Trays-v5.0.0.xd\",\"description\":\"Trays \",\"pageType\":\"file\",\"query\":\"\",\"type\":\"xd\"},{\"id\":448,\"name\":\"Headers\",\"slug\":\"Headers-v1.0.0.xd\",\"description\":\"Headers \",\"pageType\":\"file\",\"query\":\"\",\"type\":\"xd\"}]");

/***/ }),

/***/ "./data/yml lazy recursive ^\\.\\/.*\\.yml$":
/*!******************************************************!*\
  !*** ./data/yml lazy ^\.\/.*\.yml$ namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./barloader.yml": [
		"./data/yml/barloader.yml",
		1
	],
	"./checkbox.yml": [
		"./data/yml/checkbox.yml",
		2
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__.t(id, 7);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./data/yml lazy recursive ^\\.\\/.*\\.yml$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "./node_modules/core-js/library/fn/array/is-array.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/get-iterator */ "./node_modules/core-js/library/fn/get-iterator.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "./node_modules/core-js/library/fn/map.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "./node_modules/core-js/library/fn/object/assign.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "./node_modules/core-js/library/fn/object/create.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "./node_modules/core-js/library/fn/object/define-property.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "./node_modules/core-js/library/fn/object/get-own-property-descriptor.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "./node_modules/core-js/library/fn/object/get-prototype-of.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "./node_modules/core-js/library/fn/object/keys.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "./node_modules/core-js/library/fn/object/set-prototype-of.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "./node_modules/core-js/library/fn/promise.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/reflect/construct */ "./node_modules/core-js/library/fn/reflect/construct.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "./node_modules/core-js/library/fn/symbol/index.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "./node_modules/core-js/library/fn/symbol/iterator.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/arrayWithHoles.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/arrayWithHoles.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Array$isArray = __webpack_require__(/*! ../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");

function _arrayWithHoles(arr) {
  if (_Array$isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Promise = __webpack_require__(/*! ../core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/construct.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/construct.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Reflect$construct = __webpack_require__(/*! ../core-js/reflect/construct */ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !_Reflect$construct) return false;
  if (_Reflect$construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(_Reflect$construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = _Reflect$construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/inherits.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(/*! ../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/iterableToArrayLimit.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/iterableToArrayLimit.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _getIterator = __webpack_require__(/*! ../core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = _getIterator(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/nonIterableRest.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/nonIterableRest.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/slicedToArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/slicedToArray.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime-corejs2/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime-corejs2/helpers/iterableToArrayLimit.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime-corejs2/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/regenerator/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/regenerator/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/@react/react-spectrum/Button/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@react/react-spectrum/Button/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*************************************************************************
* ADOBE CONFIDENTIAL
* ___________________
*
* Copyright 2019 Adobe
* All Rights Reserved.
*
* NOTICE: All information contained herein is, and remains
* the property of Adobe and its suppliers, if any. The intellectual
* and technical concepts contained herein are proprietary to Adobe
* and its suppliers and are protected by all applicable intellectual
* property laws, including trade secret and copyright laws.
* Dissemination of this information or reproduction of this material
* is strictly forbidden unless prior written permission is obtained
* from Adobe.
**************************************************************************/
module.exports = __webpack_require__(/*! ./js/Button */ "./node_modules/@react/react-spectrum/Button/js/Button.js");

/***/ }),

/***/ "./node_modules/@react/react-spectrum/Button/js/Button.js":
/*!****************************************************************!*\
  !*** ./node_modules/@react/react-spectrum/Button/js/Button.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _events = __webpack_require__(/*! ../../utils/events */ "./node_modules/@react/react-spectrum/utils/events.js");

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _icon = __webpack_require__(/*! ../../utils/icon */ "./node_modules/@react/react-spectrum/utils/icon.js");

var _CornerTriangle = _interopRequireDefault(__webpack_require__(/*! ../../Icon/core/CornerTriangle */ "./node_modules/@react/react-spectrum/Icon/core/CornerTriangle.js"));

var _filterDOMProps = _interopRequireDefault(__webpack_require__(/*! ../../utils/filterDOMProps */ "./node_modules/@react/react-spectrum/utils/filterDOMProps.js"));

var _focusRing = _interopRequireDefault(__webpack_require__(/*! ../../utils/focusRing */ "./node_modules/@react/react-spectrum/utils/focusRing.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

__webpack_require__(/*! ../style/index.css */ "./node_modules/@react/react-spectrum/Button/style/index.css");

var _class, _class2, _temp;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

if (true) {
  __webpack_require__(/*! ../../spectrum-css/button/index.css */ "./node_modules/@react/react-spectrum/spectrum-css/button/index.css");

  __webpack_require__(/*! ../../spectrum-css/button/index-diff.css */ "./node_modules/@react/react-spectrum/spectrum-css/button/index-diff.css");
} else {}

if (false) {}
if (false) {}
if (true) __webpack_require__(/*! ../../spectrum-css/button/multiStops/lightest.css */ "./node_modules/@react/react-spectrum/spectrum-css/button/multiStops/lightest.css");
if (false) {}
// For backward compatibility with coral
var VARIANTS = {
  quiet: {
    variant: 'primary',
    quiet: true
  },
  minimal: {
    variant: 'secondary',
    quiet: true
  },
  icon: {
    variant: 'action',
    quiet: true
  }
};
/**
 * A **button** represents an action a user can take. Buttons can be clicked or tapped to
 * perform an action or to navigate to another page. Buttons in Spectrum have several variations
 * for different uses and multiple levels of loudness for various attention-getting needs.
 */

var Button = (0, _focusRing["default"])(_class = (_temp = _class2 =
/*#__PURE__*/
function (_Component) {
  _inherits(Button, _Component);

  function Button() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Button);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Button)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "onClick", function (event) {
      // This is needed when `element` is an anchor or something similar.
      // When `element` is a button, we won't even get here if it's disabled and clicked.
      if (_this.props.disabled) {
        // If the element is an anchor with an href, we need to preventDefault() or the browser
        // will follow the link.
        event.preventDefault();
      } else if (_this.props.onClick) {
        var _this$props;

        for (var _len2 = arguments.length, rest = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          rest[_key2 - 1] = arguments[_key2];
        }

        (_this$props = _this.props).onClick.apply(_this$props, [event].concat(rest));
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onKeyDownSpace", function (event) {
      if (event.key === ' ' || event.key === 'Enter') {
        event.preventDefault();

        _this.buttonRef.click();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "setButtonRef", function (b) {
      return _this.buttonRef = b;
    });

    return _this;
  }

  _createClass(Button, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (this.props.autoFocus) {
        // wait a frame to make sure the button in the DOM and focusable
        requestAnimationFrame(function () {
          return _this2.focus();
        });
      }
    }
    /**
     * Focus the button
     */

  }, {
    key: "focus",
    value: function focus() {
      if (this.buttonRef && !this.props.disabled && this.buttonRef.focus) {
        this.buttonRef.focus();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          _this$props2$element = _this$props2.element,
          Element = _this$props2$element === void 0 ? 'button' : _this$props2$element,
          label = _this$props2.label,
          children = _this$props2.children,
          _this$props2$variant = _this$props2.variant,
          variant = _this$props2$variant === void 0 ? 'secondary' : _this$props2$variant,
          logic = _this$props2.logic,
          quiet = _this$props2.quiet,
          icon = _this$props2.icon,
          selected = _this$props2.selected,
          block = _this$props2.block,
          className = _this$props2.className,
          disabled = _this$props2.disabled,
          invalid = _this$props2.invalid,
          onMouseDown = _this$props2.onMouseDown,
          onMouseUp = _this$props2.onMouseUp,
          autoFocus = _this$props2.autoFocus,
          holdAffordance = _this$props2.holdAffordance,
          otherProps = _objectWithoutProperties(_this$props2, ["element", "label", "children", "variant", "logic", "quiet", "icon", "selected", "block", "className", "disabled", "invalid", "onMouseDown", "onMouseUp", "autoFocus", "holdAffordance"]); // Map variants for backwards compatibility


      if (VARIANTS[variant]) {
        var mappedVariant = VARIANTS[variant];
        var variantName = (mappedVariant.quiet ? 'quiet ' : '') + "\"".concat(mappedVariant.variant, "\"");
        console.warn("The \"".concat(variant, "\" variant of Button is deprecated. Please use the ").concat(variantName, " variant instead."));
        variant = mappedVariant.variant;
        quiet = mappedVariant.quiet;
      }

      var shouldRenderHoldAffordance = false; // Some button variants were broken out into their own components, map them appropriately

      var baseButtonClass = 'spectrum-Button';

      if (variant === 'action' || variant === 'toggle') {
        baseButtonClass = 'spectrum-ActionButton';
        shouldRenderHoldAffordance = holdAffordance;

        if (variant === 'toggle') {
          quiet = true;
        }

        variant = '';
      } else if (logic) {
        baseButtonClass = 'spectrum-LogicButton';
      } else if (variant === 'clear') {
        baseButtonClass = 'spectrum-ClearButton';
        variant = '';
      } else if (variant === 'field') {
        baseButtonClass = 'spectrum-FieldButton';
        variant = '';
      } else if (variant === 'tool') {
        baseButtonClass = 'spectrum-Tool'; // hold affordance is really only a part of tool.

        shouldRenderHoldAffordance = holdAffordance;
        variant = '';
      }

      if (Element !== 'button') {
        otherProps.role = 'button';
        otherProps.tabIndex = disabled ? null : otherProps.tabIndex || 0;
        otherProps['aria-disabled'] = disabled || null;

        if (Element === 'a' && disabled && otherProps.href) {
          otherProps.href = null;
        }

        otherProps.onKeyDown = disabled ? null : this.onKeyDownSpace;
      }

      var labelContents = label || (typeof children === 'string' ? children : null);
      var ariaExpanded = null;

      if (otherProps['aria-expanded'] !== undefined) {
        ariaExpanded = otherProps['aria-expanded'];
      } else if (otherProps['aria-haspopup']) {
        ariaExpanded = selected || null;
      }

      var filteredProps = typeof Element === 'string' ? (0, _filterDOMProps["default"])(otherProps) : otherProps;
      return _react["default"].createElement(Element, _extends({}, filteredProps, {
        className: (0, _classnames["default"])(baseButtonClass, quiet ? "".concat(baseButtonClass, "--quiet") : '', variant ? "".concat(baseButtonClass, "--").concat(variant) : '', {
          'is-selected': selected,
          'is-disabled': disabled,
          'is-invalid': invalid,
          'spectrum-Button--block': block,
          'focus-ring': autoFocus
        }, className),
        disabled: disabled,
        "aria-invalid": invalid || null,
        "aria-expanded": ariaExpanded,
        onClick: this.onClick,
        onMouseDown: (0, _events.chain)(this.onMouseDown, _events.focusAfterMouseEvent.bind(this, onMouseDown)),
        onMouseUp: (0, _events.chain)(this.onMouseUp, _events.focusAfterMouseEvent.bind(this, onMouseUp)),
        ref: this.setButtonRef
      }), (0, _icon.cloneIcon)(icon, {
        size: 'S'
      }), labelContents && _react["default"].createElement("span", {
        className: baseButtonClass + '-label'
      }, labelContents), shouldRenderHoldAffordance && _react["default"].createElement(_CornerTriangle["default"], {
        role: "presentation",
        size: null,
        className: "spectrum-Tool-hold"
      }), typeof children !== 'string' && children);
    }
  }]);

  return Button;
}(_react.Component), _defineProperty(_class2, "propTypes", {
  /**
   * The variant of button to display
   */
  variant: _propTypes["default"].oneOf(['cta', 'primary', 'secondary', 'warning', 'action', 'toggle', 'and', 'or', 'icon', 'quiet', 'minimal', 'dropdown', 'clear', 'field', 'tool', 'overBackground']),

  /**
   * Whether the button should render using a quiet variant
   */
  quiet: _propTypes["default"].bool,

  /**
   * Whether the button is a logic button variant
   */
  logic: _propTypes["default"].bool,

  /**
   * Whether the button is disabled
   */
  disabled: _propTypes["default"].bool,

  /**
   * Whether the button represents a selected state
   */
  selected: _propTypes["default"].bool,

  /**
   * Whether the button represents an invalid state
   */
  invalid: _propTypes["default"].bool,

  /**
   * An icon to render in the button.
   */
  icon: _propTypes["default"].element,

  /**
   * The label to display in the button
   */
  label: _propTypes["default"].string,

  /**
   * Whether the button is a block element
   */
  block: _propTypes["default"].bool,

  /**
   * The DOM element to use to render the button
   */
  element: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].func]),

  /**
   * Whether the button should be auto focused on mount
   */
  autoFocus: _propTypes["default"].bool,

  /**
   * A click handler for the button
   */
  onClick: _propTypes["default"].func,

  /**
   * A visual variation that puts a small triangle in the lower right
   */
  holdAffordance: _propTypes["default"].bool
}), _defineProperty(_class2, "defaultProps", {
  autoFocus: false,
  block: false,
  disabled: false,
  element: 'button',
  invalid: false,
  label: '',
  logic: false,
  quiet: false,
  selected: false,
  variant: 'secondary',
  holdAffordance: false
}), _temp)) || _class;

exports["default"] = Button;

/***/ }),

/***/ "./node_modules/@react/react-spectrum/Icon/ShowMenu/18.js":
/*!****************************************************************!*\
  !*** ./node_modules/@react/react-spectrum/Icon/ShowMenu/18.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
module.exports = React.createElement(
  "svg",
  { viewBox: "0 0 36 36" },
  React.createElement("rect", { height: "4", rx: "1", ry: "1", width: "28", x: "4", y: "16" }),
  React.createElement("rect", { height: "4", rx: "1", ry: "1", width: "28", x: "4", y: "6" }),
  React.createElement("rect", { height: "4", rx: "1", ry: "1", width: "28", x: "4", y: "26" })
);



/***/ }),

/***/ "./node_modules/@react/react-spectrum/Icon/ShowMenu/24.js":
/*!****************************************************************!*\
  !*** ./node_modules/@react/react-spectrum/Icon/ShowMenu/24.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
module.exports = React.createElement(
  "svg",
  { viewBox: "0 0 48 48" },
  React.createElement("rect", { height: "6", rx: "1", ry: "1", width: "32", x: "8", y: "20" }),
  React.createElement("rect", { height: "6", rx: "1", ry: "1", width: "32", x: "8", y: "8" }),
  React.createElement("rect", { height: "6", rx: "1", ry: "1", width: "32", x: "8", y: "32" })
);



/***/ }),

/***/ "./node_modules/@react/react-spectrum/Icon/ShowMenu/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@react/react-spectrum/Icon/ShowMenu/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _Icon = __webpack_require__(/*! ../js/Icon */ "./node_modules/@react/react-spectrum/Icon/js/Icon.js");

var _Icon2 = _interopRequireDefault(_Icon);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WrappedIcon = function WrappedIcon(props) {
  return _react2.default.createElement(_Icon2.default, _extends({}, props, { icon: { 18: __webpack_require__(/*! ./18 */ "./node_modules/@react/react-spectrum/Icon/ShowMenu/18.js"), 24: __webpack_require__(/*! ./24 */ "./node_modules/@react/react-spectrum/Icon/ShowMenu/24.js") } }));
};
WrappedIcon.displayName = 'ShowMenu';

exports.default = WrappedIcon;


/***/ }),

/***/ "./node_modules/@react/react-spectrum/Icon/core/CornerTriangle.js":
/*!************************************************************************!*\
  !*** ./node_modules/@react/react-spectrum/Icon/core/CornerTriangle.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Icon = __webpack_require__(/*! ../js/Icon */ "./node_modules/@react/react-spectrum/Icon/js/Icon.js");

var _Icon2 = _interopRequireDefault(_Icon);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WrappedIcon = function WrappedIcon(props) {
  return _react2.default.createElement(
    _Icon2.default,
    props,
    _react2.default.createElement(
      "svg",
      { className: "spectrum-UIIcon-CornerTriangle" },
      _react2.default.createElement("path", { d: "M4.74.01a.25.25 0 0 0-.177.073l-4.48 4.48a.25.25 0 0 0 .177.427h4.48a.25.25 0 0 0 .25-.25V.26a.25.25 0 0 0-.25-.25z", className: "spectrum-UIIcon--medium" }),
      _react2.default.createElement("path", { d: "M5.74.01a.25.25 0 0 0-.177.073l-5.48 5.48a.25.25 0 0 0 .177.427h5.48a.25.25 0 0 0 .25-.25V.26a.25.25 0 0 0-.25-.25z", className: "spectrum-UIIcon--large" })
    )
  );
};

WrappedIcon.displayName = 'CornerTriangle';
exports.default = WrappedIcon;



/***/ }),

/***/ "./node_modules/@react/react-spectrum/Icon/core/CrossSmall.js":
/*!********************************************************************!*\
  !*** ./node_modules/@react/react-spectrum/Icon/core/CrossSmall.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Icon = __webpack_require__(/*! ../js/Icon */ "./node_modules/@react/react-spectrum/Icon/js/Icon.js");

var _Icon2 = _interopRequireDefault(_Icon);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WrappedIcon = function WrappedIcon(props) {
  return _react2.default.createElement(
    _Icon2.default,
    props,
    _react2.default.createElement(
      "svg",
      { className: "spectrum-UIIcon-CrossSmall" },
      _react2.default.createElement("path", { d: "M7.317 6.433L4.884 4l2.433-2.433a.625.625 0 0 0-.884-.884L4 3.116 1.567.683a.625.625 0 0 0-.884.884L3.116 4 .683 6.433a.625.625 0 0 0 .884.884L4 4.884l2.433 2.433a.625.625 0 0 0 .884-.884z", className: "spectrum-UIIcon--medium" }),
      _react2.default.createElement("path", { d: "M9.317 8.433L5.884 5l3.433-3.433a.625.625 0 0 0-.884-.884L5 4.116 1.567.683a.625.625 0 0 0-.884.884C.83 1.713 2.769 3.657 4.116 5L.683 8.433a.625.625 0 0 0 .884.884L5 5.884l3.433 3.433a.625.625 0 0 0 .884-.884z", className: "spectrum-UIIcon--large" })
    )
  );
};

WrappedIcon.displayName = 'CrossSmall';
exports.default = WrappedIcon;



/***/ }),

/***/ "./node_modules/@react/react-spectrum/Icon/core/Magnifier.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@react/react-spectrum/Icon/core/Magnifier.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Icon = __webpack_require__(/*! ../js/Icon */ "./node_modules/@react/react-spectrum/Icon/js/Icon.js");

var _Icon2 = _interopRequireDefault(_Icon);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WrappedIcon = function WrappedIcon(props) {
  return _react2.default.createElement(
    _Icon2.default,
    props,
    _react2.default.createElement(
      "svg",
      { className: "spectrum-UIIcon-Magnifier" },
      _react2.default.createElement("path", { d: "M15.77 14.709l-4.534-4.534a6.013 6.013 0 1 0-1.061 1.061l4.534 4.534a.75.75 0 1 0 1.061-1.061zM6.5 11A4.5 4.5 0 1 1 11 6.5 4.505 4.505 0 0 1 6.5 11z", className: "spectrum-UIIcon--medium" }),
      _react2.default.createElement("path", { d: "M19.77 18.709l-5.464-5.463a7.5 7.5 0 1 0-1.06 1.06l5.463 5.464a.75.75 0 1 0 1.061-1.061zM2.5 8.5a6 6 0 1 1 6 6 6.007 6.007 0 0 1-6-6z", className: "spectrum-UIIcon--large" })
    )
  );
};

WrappedIcon.displayName = 'Magnifier';
exports.default = WrappedIcon;



/***/ }),

/***/ "./node_modules/@react/react-spectrum/Icon/js/Icon.js":
/*!************************************************************!*\
  !*** ./node_modules/@react/react-spectrum/Icon/js/Icon.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Icon;

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

if (true) {
  __webpack_require__(/*! ../../spectrum-css/icon/index.css */ "./node_modules/@react/react-spectrum/spectrum-css/icon/index.css");

  __webpack_require__(/*! ../../spectrum-css/icon/index-diff.css */ "./node_modules/@react/react-spectrum/spectrum-css/icon/index-diff.css");
} else {}

var SIZES = {
  XXS: 18,
  XS: 24,
  S: 18,
  M: 24,
  L: 18,
  XL: 24,
  XXL: 24
};

function Icon(_ref) {
  var icon = _ref.icon,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'M' : _ref$size,
      className = _ref.className,
      children = _ref.children,
      ariaLabel = _ref['aria-label'],
      alt = _ref.alt,
      otherProps = _objectWithoutProperties(_ref, ["icon", "size", "className", "children", "aria-label", "alt"]);

  var sizeKey = SIZES[size];
  var svg = icon && icon[sizeKey] || icon || children;

  if (typeof svg === 'string') {
    throw new Error('String icon names are deprecated. Please import icons from react-spectrum/Icon/IconName and render as <IconName />.');
  }

  return _react["default"].cloneElement(svg, _objectSpread({
    focusable: 'false',
    'aria-label': ariaLabel || alt,
    'aria-hidden': ariaLabel || alt ? null : true,
    role: 'img',
    className: (0, _classnames["default"])(svg.props.className, 'spectrum-Icon', _defineProperty({}, "spectrum-Icon--size".concat(size), size), className)
  }, otherProps));
}

Icon.displayName = 'Icon';
Icon.propTypes = {
  /**
   * Size of icon, XXS to XXL
   */
  size: _propTypes["default"].string
};

/***/ }),

/***/ "./node_modules/@react/react-spectrum/Provider/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@react/react-spectrum/Provider/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*************************************************************************
* ADOBE CONFIDENTIAL
* ___________________
*
* Copyright 2019 Adobe
* All Rights Reserved.
*
* NOTICE: All information contained herein is, and remains
* the property of Adobe and its suppliers, if any. The intellectual
* and technical concepts contained herein are proprietary to Adobe
* and its suppliers and are protected by all applicable intellectual
* property laws, including trade secret and copyright laws.
* Dissemination of this information or reproduction of this material
* is strictly forbidden unless prior written permission is obtained
* from Adobe.
**************************************************************************/
module.exports = __webpack_require__(/*! ./js/Provider */ "./node_modules/@react/react-spectrum/Provider/js/Provider.js");

/***/ }),

/***/ "./node_modules/@react/react-spectrum/Provider/js/Provider.js":
/*!********************************************************************!*\
  !*** ./node_modules/@react/react-spectrum/Provider/js/Provider.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _configureTypekit = _interopRequireDefault(__webpack_require__(/*! ../../utils/configureTypekit */ "./node_modules/@react/react-spectrum/utils/configureTypekit.js"));

var _intl = __webpack_require__(/*! ../../utils/intl */ "./node_modules/@react/react-spectrum/utils/intl.js");

var _filterDOMProps = _interopRequireDefault(__webpack_require__(/*! ../../utils/filterDOMProps */ "./node_modules/@react/react-spectrum/utils/filterDOMProps.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _state = __webpack_require__(/*! ../../Toast/js/state */ "./node_modules/@react/react-spectrum/Toast/js/state.js");

__webpack_require__(/*! ../../focus-ring-polyfill */ "./node_modules/@react/react-spectrum/focus-ring-polyfill/index.js");

__webpack_require__(/*! ../style/index.css */ "./node_modules/@react/react-spectrum/Provider/style/index.css");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

if (true) {
  __webpack_require__(/*! ../../spectrum-css/page/index.css */ "./node_modules/@react/react-spectrum/spectrum-css/page/index.css");

  __webpack_require__(/*! ../../spectrum-css/page/index-diff.css */ "./node_modules/@react/react-spectrum/spectrum-css/page/index-diff.css");
} else {}

if (false) {}
if (false) {}
if (true) __webpack_require__(/*! ../../spectrum-css/page/multiStops/lightest.css */ "./node_modules/@react/react-spectrum/spectrum-css/page/multiStops/lightest.css");
if (false) {}

if (true) {
  __webpack_require__(/*! ../../spectrum-css-overrides/typography/index.css */ "./node_modules/@react/react-spectrum/spectrum-css-overrides/typography/index.css");

  __webpack_require__(/*! ../../spectrum-css-overrides/typography/index-diff.css */ "./node_modules/@react/react-spectrum/spectrum-css-overrides/typography/index-diff.css");
} else {}

if (false) {}
if (false) {}
if (true) __webpack_require__(/*! ../../spectrum-css-overrides/typography/multiStops/lightest.css */ "./node_modules/@react/react-spectrum/spectrum-css-overrides/typography/multiStops/lightest.css");
if (false) {}

var Provider =
/*#__PURE__*/
function (_Component) {
  _inherits(Provider, _Component);

  // Expose the current theme etc. on the context for children to read if needed.
  function Provider(props) {
    var _this;

    _classCallCheck(this, Provider);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Provider).call(this, props));
    (0, _intl.setLocale)(props.locale);

    if (true) {
      (0, _configureTypekit["default"])(props.typekitId);
    }

    if (props.toastPlacement) {
      (0, _state.setToastPlacement)(props.toastPlacement);
    }

    return _this;
  }

  _createClass(Provider, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if ('locale' in nextProps) {
        (0, _intl.setLocale)(nextProps.locale);
      }

      if (nextProps.toastPlacement) {
        (0, _state.setToastPlacement)(nextProps.toastPlacement);
      }
    }
  }, {
    key: "getChildContext",
    value: function getChildContext() {
      return {
        theme: this.props.theme,
        scale: this.props.scale,
        locale: this.props.locale
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          className = _this$props.className,
          children = _this$props.children,
          scale = _this$props.scale,
          props = _objectWithoutProperties(_this$props, ["theme", "className", "children", "scale"]);

      return _react["default"].createElement("div", _extends({
        className: (0, _classnames["default"])(className, 'react-spectrum-provider', 'spectrum', "spectrum--".concat(theme), "spectrum--".concat(scale))
      }, (0, _filterDOMProps["default"])(props)), children);
    }
  }]);

  return Provider;
}(_react.Component);

exports["default"] = Provider;

_defineProperty(Provider, "propTypes", {
  /**
   * Theme.
   */
  theme: _propTypes["default"].oneOf(['light', 'lightest', 'dark', 'darkest']),

  /**
   * Scale.
   */
  scale: _propTypes["default"].oneOf(['medium', 'large']),

  /**
   * The placement of the toasts. By default position is top- shorthand for "top center".
   */
  toastPlacement: _propTypes["default"].oneOf(['top', 'top left', 'top center', 'top right', 'bottom', 'bottom left', 'bottom center', 'bottom right']),

  /**
   * Type kit ID. This is required and products must get their own id's.
   * https://typekit.com/account/kits
   * There is a default provided, but it's only intended for prototyping work.
   */
  typekitId: _propTypes["default"].string,

  /**
   * Locale, takes format primary-region ex. en-US, cs-CZ
   */
  locale: _propTypes["default"].string,

  /**
   * CSS class name.
   */
  className: _propTypes["default"].string
});

_defineProperty(Provider, "defaultProps", {
  theme: 'light',
  scale: 'medium',
  typekitId: 'ruf7eed',
  locale: _intl.defaultLocale
});

_defineProperty(Provider, "childContextTypes", {
  theme: _propTypes["default"].oneOf(['light', 'lightest', 'dark', 'darkest']),
  scale: _propTypes["default"].oneOf(['medium', 'large']),
  locale: _propTypes["default"].string
});

/***/ }),

/***/ "./node_modules/@react/react-spectrum/Search/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@react/react-spectrum/Search/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*************************************************************************
* ADOBE CONFIDENTIAL
* ___________________
*
* Copyright 2019 Adobe
* All Rights Reserved.
*
* NOTICE: All information contained herein is, and remains
* the property of Adobe and its suppliers, if any. The intellectual
* and technical concepts contained herein are proprietary to Adobe
* and its suppliers and are protected by all applicable intellectual
* property laws, including trade secret and copyright laws.
* Dissemination of this information or reproduction of this material
* is strictly forbidden unless prior written permission is obtained
* from Adobe.
**************************************************************************/
module.exports = __webpack_require__(/*! ./js/Search */ "./node_modules/@react/react-spectrum/Search/js/Search.js");

/***/ }),

/***/ "./node_modules/@react/react-spectrum/Search/intl/cs-CZ.json":
/*!*******************************************************************!*\
  !*** ./node_modules/@react/react-spectrum/Search/intl/cs-CZ.json ***!
  \*******************************************************************/
/*! exports provided: Clear search, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"Clear search\":\"Vymazat hledání\"}");

/***/ }),

/***/ "./node_modules/@react/react-spectrum/Search/intl/da-DK.json":
/*!*******************************************************************!*\
  !*** ./node_modules/@react/react-spectrum/Search/intl/da-DK.json ***!
  \*******************************************************************/
/*! exports provided: Clear search, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"Clear search\":\"Ryd søgning\"}");

/***/ }),

/***/ "./node_modules/@react/react-spectrum/Search/intl/de-DE.json":
/*!*******************************************************************!*\
  !*** ./node_modules/@react/react-spectrum/Search/intl/de-DE.json ***!
  \*******************************************************************/
/*! exports provided: Clear search, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"Clear search\":\"Suche zurücksetzen\"}");

/***/ }),

/***/ "./node_modules/@react/react-spectrum/Search/intl/en-US.json":
/*!*******************************************************************!*\
  !*** ./node_modules/@react/react-spectrum/Search/intl/en-US.json ***!
  \*******************************************************************/
/*! exports provided: Clear search, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"Clear search\":\"Clear search\"}");

/***/ }),

/***/ "./node_modules/@react/react-spectrum/Search/intl/es-ES.json":
/*!*******************************************************************!*\
  !*** ./node_modules/@react/react-spectrum/Search/intl/es-ES.json ***!
  \*******************************************************************/
/*! exports provided: Clear search, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"Clear search\":\"Borrar búsqueda\"}");

/***/ }),

/***/ "./node_modules/@react/react-spectrum/Search/intl/fi-FI.json":
/*!*******************************************************************!*\
  !*** ./node_modules/@react/react-spectrum/Search/intl/fi-FI.json ***!
  \*******************************************************************/
/*! exports provided: Clear search, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"Clear search\":\"Tyhjennä haku\"}");

/***/ }),

/***/ "./node_modules/@react/react-spectrum/Search/intl/fr-FR.json":
/*!*******************************************************************!*\
  !*** ./node_modules/@react/react-spectrum/Search/intl/fr-FR.json ***!
  \*******************************************************************/
/*! exports provided: Clear search, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"Clear search\":\"Effacer la recherche\"}");

/***/ }),

/***/ "./node_modules/@react/react-spectrum/Search/intl/hu-HU.json":
/*!*******************************************************************!*\
  !*** ./node_modules/@react/react-spectrum/Search/intl/hu-HU.json ***!
  \*******************************************************************/
/*! exports provided: Clear search, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"Clear search\":\"Keresés törlése\"}");

/***/ }),

/***/ "./node_modules/@react/react-spectrum/Search/intl/it-IT.json":
/*!*******************************************************************!*\
  !*** ./node_modules/@react/react-spectrum/Search/intl/it-IT.json ***!
  \*******************************************************************/
/*! exports provided: Clear search, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"Clear search\":\"Cancella ricerca\"}");

/***/ }),

/***/ "./node_modules/@react/react-spectrum/Search/intl/ja-JP.json":
/*!*******************************************************************!*\
  !*** ./node_modules/@react/react-spectrum/Search/intl/ja-JP.json ***!
  \*******************************************************************/
/*! exports provided: Clear search, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"Clear search\":\"検索をクリア\"}");

/***/ }),

/***/ "./node_modules/@react/react-spectrum/Search/intl/ko-KR.json":
/*!*******************************************************************!*\
  !*** ./node_modules/@react/react-spectrum/Search/intl/ko-KR.json ***!
  \*******************************************************************/
/*! exports provided: Clear search, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"Clear search\":\"검색 지우기\"}");

/***/ }),

/***/ "./node_modules/@react/react-spectrum/Search/intl/nb-NO.json":
/*!*******************************************************************!*\
  !*** ./node_modules/@react/react-spectrum/Search/intl/nb-NO.json ***!
  \*******************************************************************/
/*! exports provided: Clear search, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"Clear search\":\"Tøm søk\"}");

/***/ }),

/***/ "./node_modules/@react/react-spectrum/Search/intl/nl-NL.json":
/*!*******************************************************************!*\
  !*** ./node_modules/@react/react-spectrum/Search/intl/nl-NL.json ***!
  \*******************************************************************/
/*! exports provided: Clear search, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"Clear search\":\"Zoekactie wissen\"}");

/***/ }),

/***/ "./node_modules/@react/react-spectrum/Search/intl/pl-PL.json":
/*!*******************************************************************!*\
  !*** ./node_modules/@react/react-spectrum/Search/intl/pl-PL.json ***!
  \*******************************************************************/
/*! exports provided: Clear search, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"Clear search\":\"Wyczyść zawartość wyszukiwania\"}");

/***/ }),

/***/ "./node_modules/@react/react-spectrum/Search/intl/pt-BR.json":
/*!*******************************************************************!*\
  !*** ./node_modules/@react/react-spectrum/Search/intl/pt-BR.json ***!
  \*******************************************************************/
/*! exports provided: Clear search, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"Clear search\":\"Limpar pesquisa\"}");

/***/ }),

/***/ "./node_modules/@react/react-spectrum/Search/intl/ru-RU.json":
/*!*******************************************************************!*\
  !*** ./node_modules/@react/react-spectrum/Search/intl/ru-RU.json ***!
  \*******************************************************************/
/*! exports provided: Clear search, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"Clear search\":\"Очистить поиск\"}");

/***/ }),

/***/ "./node_modules/@react/react-spectrum/Search/intl/sv-SE.json":
/*!*******************************************************************!*\
  !*** ./node_modules/@react/react-spectrum/Search/intl/sv-SE.json ***!
  \*******************************************************************/
/*! exports provided: Clear search, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"Clear search\":\"Rensa sökning\"}");

/***/ }),

/***/ "./node_modules/@react/react-spectrum/Search/intl/tr-TR.json":
/*!*******************************************************************!*\
  !*** ./node_modules/@react/react-spectrum/Search/intl/tr-TR.json ***!
  \*******************************************************************/
/*! exports provided: Clear search, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"Clear search\":\"Aramayı temizle\"}");

/***/ }),

/***/ "./node_modules/@react/react-spectrum/Search/intl/uk-UA.json":
/*!*******************************************************************!*\
  !*** ./node_modules/@react/react-spectrum/Search/intl/uk-UA.json ***!
  \*******************************************************************/
/*! exports provided: Clear search, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"Clear search\":\"Очистити пошук\"}");

/***/ }),

/***/ "./node_modules/@react/react-spectrum/Search/intl/zh-CN.json":
/*!*******************************************************************!*\
  !*** ./node_modules/@react/react-spectrum/Search/intl/zh-CN.json ***!
  \*******************************************************************/
/*! exports provided: Clear search, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"Clear search\":\"清除搜索\"}");

/***/ }),

/***/ "./node_modules/@react/react-spectrum/Search/intl/zh-TW.json":
/*!*******************************************************************!*\
  !*** ./node_modules/@react/react-spectrum/Search/intl/zh-TW.json ***!
  \*******************************************************************/
/*! exports provided: Clear search, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"Clear search\":\"清除搜尋條件\"}");

/***/ }),

/***/ "./node_modules/@react/react-spectrum/Search/js/Search.js":
/*!****************************************************************!*\
  !*** ./node_modules/@react/react-spectrum/Search/js/Search.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _autobindDecorator = _interopRequireDefault(__webpack_require__(/*! autobind-decorator */ "./node_modules/autobind-decorator/lib/index.js"));

var _Button = _interopRequireDefault(__webpack_require__(/*! ../../Button */ "./node_modules/@react/react-spectrum/Button/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _icon = __webpack_require__(/*! ../../utils/icon */ "./node_modules/@react/react-spectrum/utils/icon.js");

var _CrossSmall = _interopRequireDefault(__webpack_require__(/*! ../../Icon/core/CrossSmall */ "./node_modules/@react/react-spectrum/Icon/core/CrossSmall.js"));

var _Magnifier = _interopRequireDefault(__webpack_require__(/*! ../../Icon/core/Magnifier */ "./node_modules/@react/react-spectrum/Icon/core/Magnifier.js"));

var _intl = __webpack_require__(/*! ../../utils/intl */ "./node_modules/@react/react-spectrum/utils/intl.js");

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Textfield = _interopRequireDefault(__webpack_require__(/*! ../../Textfield */ "./node_modules/@react/react-spectrum/Textfield/index.js"));

var _class, _class2, _temp;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var intlMessages = {
  "cs-CZ": _interopRequireDefault(__webpack_require__(/*! ./../intl/cs-CZ.json */ "./node_modules/@react/react-spectrum/Search/intl/cs-CZ.json"))["default"],
  "da-DK": _interopRequireDefault(__webpack_require__(/*! ./../intl/da-DK.json */ "./node_modules/@react/react-spectrum/Search/intl/da-DK.json"))["default"],
  "de-DE": _interopRequireDefault(__webpack_require__(/*! ./../intl/de-DE.json */ "./node_modules/@react/react-spectrum/Search/intl/de-DE.json"))["default"],
  "en-US": _interopRequireDefault(__webpack_require__(/*! ./../intl/en-US.json */ "./node_modules/@react/react-spectrum/Search/intl/en-US.json"))["default"],
  "es-ES": _interopRequireDefault(__webpack_require__(/*! ./../intl/es-ES.json */ "./node_modules/@react/react-spectrum/Search/intl/es-ES.json"))["default"],
  "fi-FI": _interopRequireDefault(__webpack_require__(/*! ./../intl/fi-FI.json */ "./node_modules/@react/react-spectrum/Search/intl/fi-FI.json"))["default"],
  "fr-FR": _interopRequireDefault(__webpack_require__(/*! ./../intl/fr-FR.json */ "./node_modules/@react/react-spectrum/Search/intl/fr-FR.json"))["default"],
  "hu-HU": _interopRequireDefault(__webpack_require__(/*! ./../intl/hu-HU.json */ "./node_modules/@react/react-spectrum/Search/intl/hu-HU.json"))["default"],
  "it-IT": _interopRequireDefault(__webpack_require__(/*! ./../intl/it-IT.json */ "./node_modules/@react/react-spectrum/Search/intl/it-IT.json"))["default"],
  "ja-JP": _interopRequireDefault(__webpack_require__(/*! ./../intl/ja-JP.json */ "./node_modules/@react/react-spectrum/Search/intl/ja-JP.json"))["default"],
  "ko-KR": _interopRequireDefault(__webpack_require__(/*! ./../intl/ko-KR.json */ "./node_modules/@react/react-spectrum/Search/intl/ko-KR.json"))["default"],
  "nb-NO": _interopRequireDefault(__webpack_require__(/*! ./../intl/nb-NO.json */ "./node_modules/@react/react-spectrum/Search/intl/nb-NO.json"))["default"],
  "nl-NL": _interopRequireDefault(__webpack_require__(/*! ./../intl/nl-NL.json */ "./node_modules/@react/react-spectrum/Search/intl/nl-NL.json"))["default"],
  "pl-PL": _interopRequireDefault(__webpack_require__(/*! ./../intl/pl-PL.json */ "./node_modules/@react/react-spectrum/Search/intl/pl-PL.json"))["default"],
  "pt-BR": _interopRequireDefault(__webpack_require__(/*! ./../intl/pt-BR.json */ "./node_modules/@react/react-spectrum/Search/intl/pt-BR.json"))["default"],
  "ru-RU": _interopRequireDefault(__webpack_require__(/*! ./../intl/ru-RU.json */ "./node_modules/@react/react-spectrum/Search/intl/ru-RU.json"))["default"],
  "sv-SE": _interopRequireDefault(__webpack_require__(/*! ./../intl/sv-SE.json */ "./node_modules/@react/react-spectrum/Search/intl/sv-SE.json"))["default"],
  "tr-TR": _interopRequireDefault(__webpack_require__(/*! ./../intl/tr-TR.json */ "./node_modules/@react/react-spectrum/Search/intl/tr-TR.json"))["default"],
  "uk-UA": _interopRequireDefault(__webpack_require__(/*! ./../intl/uk-UA.json */ "./node_modules/@react/react-spectrum/Search/intl/uk-UA.json"))["default"],
  "zh-CN": _interopRequireDefault(__webpack_require__(/*! ./../intl/zh-CN.json */ "./node_modules/@react/react-spectrum/Search/intl/zh-CN.json"))["default"],
  "zh-TW": _interopRequireDefault(__webpack_require__(/*! ./../intl/zh-TW.json */ "./node_modules/@react/react-spectrum/Search/intl/zh-TW.json"))["default"]
};

if (true) {
  __webpack_require__(/*! ../../spectrum-css/search/index.css */ "./node_modules/@react/react-spectrum/spectrum-css/search/index.css");

  __webpack_require__(/*! ../../spectrum-css/search/index-diff.css */ "./node_modules/@react/react-spectrum/spectrum-css/search/index-diff.css");
} else {}

if (false) {}
if (false) {}
if (true) __webpack_require__(/*! ../../spectrum-css/search/multiStops/lightest.css */ "./node_modules/@react/react-spectrum/spectrum-css/search/multiStops/lightest.css");
if (false) {}
var formatMessage = (0, _intl.messageFormatter)(intlMessages);

var normalizeValue = function normalizeValue(value) {
  return value || '';
};

var Search = (0, _autobindDecorator["default"])(_class = (_temp = _class2 =
/*#__PURE__*/
function (_Component) {
  _inherits(Search, _Component);

  function Search(props) {
    var _this;

    _classCallCheck(this, Search);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Search).call(this, props));
    var value = props.value,
        defaultValue = props.defaultValue;
    _this.state = {
      value: normalizeValue(value || defaultValue)
    };
    return _this;
  }

  _createClass(Search, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(props) {
      if (normalizeValue(props.value) !== this.state.value) {
        this.setState({
          value: props.value
        });
      }
    }
  }, {
    key: "handleTextKeyDown",
    value: function handleTextKeyDown(e) {
      var _this$props = this.props,
          onSubmit = _this$props.onSubmit,
          onKeyDown = _this$props.onKeyDown,
          disabled = _this$props.disabled;
      var value = this.state.value;
      var key = e.which;

      if (key === 13 || key === 27) {
        e.preventDefault();
      }

      if (disabled) {
        return;
      }

      if (key === 13) {
        onSubmit(value);
      }

      if (key === 27) {
        this.handleTextChange('', e, 'escapeKey');
      }

      if (onKeyDown) {
        onKeyDown(e);
      }
    }
  }, {
    key: "handleTextChange",
    value: function handleTextChange(value, e) {
      var from = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'input';
      var _this$props2 = this.props,
          onChange = _this$props2.onChange,
          disabled = _this$props2.disabled;

      if (disabled || value === this.state.value) {
        return;
      }

      if (!('value' in this.props)) {
        this.setState({
          value: value
        });
      }

      onChange(value, e, {
        from: from
      });
    }
  }, {
    key: "handleClearButtonClick",
    value: function handleClearButtonClick(e) {
      this.handleTextChange('', e, 'clearButton'); // restore focus to the searchbox

      if (this.searchbox) {
        this.searchbox.focus();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props3 = this.props,
          disabled = _this$props3.disabled,
          className = _this$props3.className,
          icon = _this$props3.icon,
          _this$props3$role = _this$props3.role,
          role = _this$props3$role === void 0 ? 'search' : _this$props3$role,
          otherProps = _objectWithoutProperties(_this$props3, ["disabled", "className", "icon", "role"]);

      var value = this.state.value;
      return _react["default"].createElement("div", {
        role: role,
        className: (0, _classnames["default"])('spectrum-Search', {
          'is-disabled': disabled
        }, className)
      }, _react["default"].createElement(_Textfield["default"], _extends({
        type: "search",
        role: "searchbox",
        ref: function ref(s) {
          return _this2.searchbox = s;
        },
        className: "spectrum-Search-input",
        value: value,
        disabled: disabled
      }, otherProps, {
        onKeyDown: this.handleTextKeyDown,
        onChange: this.handleTextChange
      })), (0, _icon.cloneIcon)(icon, {
        className: 'spectrum-Search-icon',
        size: 'S'
      }), value !== '' && _react["default"].createElement(_Button["default"], {
        "aria-label": formatMessage('Clear search'),
        variant: "clear",
        icon: _react["default"].createElement(_CrossSmall["default"], null),
        disabled: disabled,
        onClick: this.handleClearButtonClick
      }));
    }
  }]);

  return Search;
}(_react.Component), _defineProperty(_class2, "propTypes", {
  /** Sets the search field value (controlled). */
  value: _propTypes["default"].string,

  /** Sets the default search field value (uncontrolled). */
  defaultValue: _propTypes["default"].string,

  /** Sets the icon displayed in the search field. Magnifier icon by default. */
  icon: _propTypes["default"].node
}), _defineProperty(_class2, "defaultProps", {
  icon: _react["default"].createElement(_Magnifier["default"], null),
  onChange: function onChange() {},
  onSubmit: function onSubmit() {}
}), _temp)) || _class;

exports["default"] = Search;
Search.displayName = 'Search';

/***/ }),

/***/ "./node_modules/@react/react-spectrum/SideNav/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@react/react-spectrum/SideNav/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "SideNav", {
  enumerable: true,
  get: function get() {
    return _SideNav["default"];
  }
});
Object.defineProperty(exports, "SideNavItem", {
  enumerable: true,
  get: function get() {
    return _SideNavItem["default"];
  }
});
Object.defineProperty(exports, "SideNavHeading", {
  enumerable: true,
  get: function get() {
    return _SideNavHeading["default"];
  }
});

var _SideNav = _interopRequireDefault(__webpack_require__(/*! ./js/SideNav */ "./node_modules/@react/react-spectrum/SideNav/js/SideNav.js"));

var _SideNavItem = _interopRequireDefault(__webpack_require__(/*! ./js/SideNavItem */ "./node_modules/@react/react-spectrum/SideNav/js/SideNavItem.js"));

var _SideNavHeading = _interopRequireDefault(__webpack_require__(/*! ./js/SideNavHeading */ "./node_modules/@react/react-spectrum/SideNav/js/SideNavHeading.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/***/ }),

/***/ "./node_modules/@react/react-spectrum/SideNav/js/SideNav.js":
/*!******************************************************************!*\
  !*** ./node_modules/@react/react-spectrum/SideNav/js/SideNav.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _autobindDecorator = _interopRequireDefault(__webpack_require__(/*! autobind-decorator */ "./node_modules/autobind-decorator/lib/index.js"));

var _events = __webpack_require__(/*! ../../utils/events */ "./node_modules/@react/react-spectrum/utils/events.js");

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _createId = _interopRequireDefault(__webpack_require__(/*! ../../utils/createId */ "./node_modules/@react/react-spectrum/utils/createId.js"));

var _filterDOMProps = _interopRequireDefault(__webpack_require__(/*! ../../utils/filterDOMProps */ "./node_modules/@react/react-spectrum/utils/filterDOMProps.js"));

var _FocusManager = _interopRequireDefault(__webpack_require__(/*! ../../utils/FocusManager */ "./node_modules/@react/react-spectrum/utils/FocusManager.js"));

var _focusRing = _interopRequireDefault(__webpack_require__(/*! ../../utils/focusRing */ "./node_modules/@react/react-spectrum/utils/focusRing.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

__webpack_require__(/*! ../style/index.css */ "./node_modules/@react/react-spectrum/SideNav/style/index.css");

var _class, _class2, _temp;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

if (true) {
  __webpack_require__(/*! ../../spectrum-css/sidenav/index.css */ "./node_modules/@react/react-spectrum/spectrum-css/sidenav/index.css");

  __webpack_require__(/*! ../../spectrum-css/sidenav/index-diff.css */ "./node_modules/@react/react-spectrum/spectrum-css/sidenav/index-diff.css");
} else {}

if (false) {}
if (false) {}
if (true) __webpack_require__(/*! ../../spectrum-css/sidenav/multiStops/lightest.css */ "./node_modules/@react/react-spectrum/spectrum-css/sidenav/multiStops/lightest.css");
if (false) {}
var SIDENAV_ITEM_SELECTOR = '.spectrum-SideNav-itemLink:not(.is-hidden):not(.is-disabled)';
var SELECTED_SIDENAV_ITEM_SELECTOR = SIDENAV_ITEM_SELECTOR + '.is-selected';

var isNestedSelected = function isNestedSelected(props, value) {
  return props.children && props.children.filter(function (c) {
    var children = c.props.children;

    if (children && typeof children !== 'string') {
      return isNestedSelected(c.props, value);
    }

    return c.props.value === value;
  }).length !== 0;
};

var SideNav = (0, _autobindDecorator["default"])(_class = (0, _focusRing["default"])(_class = (_temp = _class2 =
/*#__PURE__*/
function (_Component) {
  _inherits(SideNav, _Component);

  function SideNav(props) {
    var _this;

    _classCallCheck(this, SideNav);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SideNav).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "state", {
      value: _this.props.defaultValue || _this.props.value
    });

    _this.id = (0, _createId["default"])();
    return _this;
  }

  _createClass(SideNav, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var value = nextProps.value;

      if (value !== this.props.value) {
        this.setState({
          value: value
        });
      }
    }
  }, {
    key: "isSelected",
    value: function isSelected(child) {
      return child.props.value === this.state.value;
    }
  }, {
    key: "isDefaultSelected",
    value: function isDefaultSelected(child) {
      return child.props.value === this.props.defaultValue;
    }
  }, {
    key: "onSelect",
    value: function onSelect(value, e) {
      if (this.props.value === undefined) {
        this.setState({
          value: value
        });
      }

      this.props.onSelect(value, e);
    }
  }, {
    key: "isDefaultExpanded",
    value: function isDefaultExpanded(child) {
      if (child.props.defaultExpanded !== undefined) {
        return child.props.defaultExpanded;
      } // Expand nested sidenav if any item is selected


      return Array.isArray(child.props.children) && isNestedSelected(child.props, this.state.value);
    }
  }, {
    key: "getListRole",
    value: function getListRole() {
      var _this$props = this.props,
          variant = _this$props.variant,
          isNested = _this$props.isNested;

      if (variant === 'multiLevel') {
        return isNested ? 'group' : 'tree';
      }

      return undefined;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          className = _this$props2.className,
          children = _this$props2.children,
          hidden = _this$props2.hidden,
          variant = _this$props2.variant,
          _this$props2$id = _this$props2.id,
          id = _this$props2$id === void 0 ? this.id : _this$props2$id,
          role = _this$props2.role,
          manageTabIndex = _this$props2.manageTabIndex,
          typeToSelect = _this$props2.typeToSelect,
          _this$props2$ariaLeve = _this$props2.ariaLevel,
          ariaLevel = _this$props2$ariaLeve === void 0 ? 1 : _this$props2$ariaLeve,
          autoFocus = _this$props2.autoFocus,
          isNested = _this$props2.isNested,
          ariaLabel = _this$props2['aria-label'],
          ariaLabelledby = _this$props2['aria-labelledby'],
          otherProps = _objectWithoutProperties(_this$props2, ["className", "children", "hidden", "variant", "id", "role", "manageTabIndex", "typeToSelect", "ariaLevel", "autoFocus", "isNested", "aria-label", "aria-labelledby"]);

      var isMultiLevel = variant === 'multiLevel';
      var Element = isNested ? 'div' : 'nav';
      delete otherProps.value;
      return _react["default"].createElement(Element, {
        id: id,
        hidden: hidden,
        "aria-hidden": hidden,
        role: isNested ? 'presentation' : role,
        "aria-label": !isNested ? ariaLabel : undefined,
        "aria-labelledby": !isNested ? ariaLabelledby : undefined,
        className: (0, _classnames["default"])(className, 'react-spectrum-SideNav')
      }, _react["default"].createElement(_FocusManager["default"], {
        itemSelector: SIDENAV_ITEM_SELECTOR,
        selectedItemSelector: SELECTED_SIDENAV_ITEM_SELECTOR,
        manageTabIndex: isMultiLevel || manageTabIndex,
        typeToSelect: isMultiLevel || typeToSelect,
        autoFocus: autoFocus
      }, _react["default"].createElement("ul", _extends({
        className: (0, _classnames["default"])('spectrum-SideNav', {
          'spectrum-SideNav--multiLevel': isMultiLevel
        }),
        role: this.getListRole(),
        id: id + '-list'
      }, (0, _filterDOMProps["default"])(otherProps)), _react.Children.map(children, function (child) {
        return (0, _react.cloneElement)(child, {
          role: isMultiLevel ? 'treeitem' : undefined,
          hidden: hidden,
          manageTabIndex: manageTabIndex,
          ariaLevel: isMultiLevel ? ariaLevel : undefined,
          _nestedNavValue: _this2.state.value,
          _isSelected: _this2.isSelected(child),
          onSelect: (0, _events.chain)(child.props.onSelect, _this2.onSelect),
          defaultExpanded: _this2.isDefaultExpanded(child)
        });
      }))));
    }
  }]);

  return SideNav;
}(_react.Component), _defineProperty(_class2, "propTypes", {
  /**
   * The variant of sidenav to display
   */
  variant: _propTypes["default"].oneOf(['default', 'multiLevel']),

  /**
   * Whether SideNav should use roving tabIndex so that only one item can receive focus at a time. With multiLevel, this defaults to true.
   */
  manageTabIndex: _propTypes["default"].bool,

  /**
   * Whether SideNav should use alphanumeric search to locate next item to focus. With multiLevel, this defaults to true.
   */
  typeToSelect: _propTypes["default"].bool,

  /**
   * Custom className of sidenav to apply
   */
  className: _propTypes["default"].string,

  /**
   * Value of selected Sidenav Item (use for controlled selection)
   */
  value: _propTypes["default"].string,

  /**
   * Value of selected Sidenav Item at initialization
   */
  defaultValue: _propTypes["default"].string,

  /**
   * Whether to automatically set focus to the seleted item when the component mounts.
   */
  autoFocus: _propTypes["default"].bool,

  /**
   * Whether the sidenav is a child of a sidenav item
   */
  isNested: _propTypes["default"].bool,

  /**
   * A select handler for the sidenav
   */
  onSelect: _propTypes["default"].func
}), _defineProperty(_class2, "defaultProps", {
  variant: 'default',
  manageTabIndex: false,
  typeToSelect: false,
  autoFocus: false,
  isNested: false,
  onSelect: function onSelect() {}
}), _temp)) || _class) || _class;

exports["default"] = SideNav;

/***/ }),

/***/ "./node_modules/@react/react-spectrum/SideNav/js/SideNavHeading.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@react/react-spectrum/SideNav/js/SideNavHeading.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = SideNavHeading;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _SideNavItem = _interopRequireDefault(__webpack_require__(/*! ./SideNavItem */ "./node_modules/@react/react-spectrum/SideNav/js/SideNavItem.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function SideNavHeading(_ref) {
  var label = _ref.label,
      props = _objectWithoutProperties(_ref, ["label"]);

  return _react["default"].createElement(_SideNavItem["default"], _extends({
    header: label
  }, props, {
    defaultExpanded: true
  }));
}

/***/ }),

/***/ "./node_modules/@react/react-spectrum/SideNav/js/SideNavItem.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@react/react-spectrum/SideNav/js/SideNavItem.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _autobindDecorator = _interopRequireDefault(__webpack_require__(/*! autobind-decorator */ "./node_modules/autobind-decorator/lib/index.js"));

var _events = __webpack_require__(/*! ../../utils/events */ "./node_modules/@react/react-spectrum/utils/events.js");

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _icon = __webpack_require__(/*! ../../utils/icon */ "./node_modules/@react/react-spectrum/utils/icon.js");

var _createId = _interopRequireDefault(__webpack_require__(/*! ../../utils/createId */ "./node_modules/@react/react-spectrum/utils/createId.js"));

var _filterDOMProps = _interopRequireDefault(__webpack_require__(/*! ../../utils/filterDOMProps */ "./node_modules/@react/react-spectrum/utils/filterDOMProps.js"));

var _focusRing = _interopRequireDefault(__webpack_require__(/*! ../../utils/focusRing */ "./node_modules/@react/react-spectrum/utils/focusRing.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));

var _SideNav = _interopRequireDefault(__webpack_require__(/*! ./SideNav */ "./node_modules/@react/react-spectrum/SideNav/js/SideNav.js"));

var _class, _class2, _temp;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var NOOP = function NOOP() {};

var FOCUSABLE_SIDENAV_ITEMLINK_SELECTOR = '.spectrum-SideNav-itemLink[tabIndex]';
/**
 * An item in a sidenav
 */

var SideNavItem = (0, _autobindDecorator["default"])(_class = (0, _focusRing["default"])(_class = (_temp = _class2 =
/*#__PURE__*/
function (_Component) {
  _inherits(SideNavItem, _Component);

  function SideNavItem(props) {
    var _this;

    _classCallCheck(this, SideNavItem);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SideNavItem).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "state", {
      expanded: _this.props.defaultExpanded || _this.props.expanded,
      focused: false
    });

    _defineProperty(_assertThisInitialized(_this), "setSideNavItemRef", function (s) {
      return _this.sideNavItemRef = s;
    });

    _this.id = (0, _createId["default"])();
    return _this;
  }

  _createClass(SideNavItem, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var expanded = nextProps.expanded;

      if (expanded !== this.props.expanded) {
        this.setState(function (prevState) {
          return _objectSpread({}, prevState, {
            expanded: expanded
          });
        });
      }
    }
  }, {
    key: "handleClick",
    value: function handleClick(e) {
      this.props.onClick(e);
      this.onSelectFocused(e);
    }
  }, {
    key: "onSelectFocused",
    value: function onSelectFocused(e) {
      var _this$props = this.props,
          onSelect = _this$props.onSelect,
          value = _this$props.value,
          expanded = _this$props.expanded,
          _this$props$href = _this$props.href,
          href = _this$props$href === void 0 ? e.target ? e.target.href : undefined : _this$props$href;
      var isKeyDown = e.type === 'keydown';

      if (!href || isKeyDown) {
        // When there is no href or if triggered from a keyboard event,
        // preventDefault and stopPropagation.
        e.preventDefault();
        e.stopPropagation(); // If Enter of Space key pressed, trigger click event on event target

        if (isKeyDown && (e.key === 'Enter' || e.key === ' ')) {
          e.target.click();
          return;
        }
      }

      if (expanded === undefined) {
        this.setState(function (prevState) {
          return _objectSpread({}, prevState, {
            expanded: !prevState.expanded
          });
        });
      }

      onSelect(value, e);
    }
    /**
     * Keyboard event handler to interperet ArrowLeft/ArrowRight to collapse/expand section in multiLevel variant.
     * @param {KeyboardEvent} e Keyboard event
     */

  }, {
    key: "onKeyDown",
    value: function onKeyDown(e) {
      var expanded = this.state.expanded;
      var isExpandableTreeItem = this.props.role === 'treeitem' && this.hasNestedNav;

      switch (e.key) {
        case 'ArrowLeft':
        case 'Left':
          if (isExpandableTreeItem) {
            if (expanded) {
              this.onSelectFocused(e);
              this.focus();
            }
          }

          break;

        case 'ArrowRight':
        case 'Right':
          if (isExpandableTreeItem) {
            if (!expanded) {
              this.onSelectFocused(e);
            } else if (this.sideNavItemRef) {
              var links = Array.from(_reactDom["default"].findDOMNode(this).querySelectorAll(FOCUSABLE_SIDENAV_ITEMLINK_SELECTOR));

              if (links.indexOf(e.target) === 0) {
                links[1].focus();
              }
            }
          }

          break;
      }
    }
  }, {
    key: "onFocus",
    value: function onFocus() {
      this.setState({
        focused: true
      });
    }
  }, {
    key: "onBlur",
    value: function onBlur() {
      this.setState({
        focused: false
      });
    }
  }, {
    key: "focus",
    value: function focus() {
      if (this.sideNavItemRef) {
        var link = _reactDom["default"].findDOMNode(this.sideNavItemRef).querySelector(FOCUSABLE_SIDENAV_ITEMLINK_SELECTOR);

        link.focus();
      }
    }
  }, {
    key: "getDescendantId",
    value: function getDescendantId(postfix) {
      var _this$props$id = this.props.id,
          id = _this$props$id === void 0 ? this.id : _this$props$id;
      return postfix ? "".concat(id, "-").concat(postfix) : id;
    }
  }, {
    key: "renderLink",
    value: function renderLink(label, tabIndex, isTreeItem) {
      var _this$props2 = this.props,
          ariaLevel = _this$props2.ariaLevel,
          hidden = _this$props2.hidden,
          _this$props2$id = _this$props2.id,
          id = _this$props2$id === void 0 ? this.id : _this$props2$id,
          icon = _this$props2.icon,
          disabled = _this$props2.disabled,
          href = _this$props2.href,
          renderLink = _this$props2.renderLink,
          role = _this$props2.role,
          target = _this$props2.target,
          _isSelected = _this$props2._isSelected,
          ariaCurrent = _this$props2['aria-current'];
      var _this$state = this.state,
          expanded = _this$state.expanded,
          focused = _this$state.focused;
      var props = {
        href: disabled ? undefined : href,
        onClick: disabled ? undefined : this.handleClick,
        onFocus: disabled ? undefined : this.onFocus,
        onBlur: disabled ? undefined : this.onBlur,
        tabIndex: disabled ? undefined : tabIndex,
        className: (0, _classnames["default"])('spectrum-SideNav-itemLink', {
          'is-selected': _isSelected,
          'is-disabled': disabled,
          'is-focused': focused,
          'is-hidden': hidden
        }),
        id: id,
        role: (disabled || !href) && !isTreeItem ? 'link' : role,
        'aria-disabled': disabled || undefined,
        'aria-expanded': this.hasNestedNav && isTreeItem ? expanded : undefined,
        'aria-owns': this.hasNestedNav && isTreeItem && expanded ? this.getDescendantId('child-list') : undefined,
        'aria-selected': isTreeItem ? focused : undefined,
        'aria-current': _isSelected ? ariaCurrent : undefined,
        'aria-level': ariaLevel,
        target: target
      };

      if (renderLink) {
        return renderLink(props);
      }

      return _react["default"].createElement("a", props, (0, _icon.cloneIcon)(icon, {
        className: 'spectrum-SideNav-itemIcon',
        size: 'S'
      }), label);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          header = _this$props3.header,
          className = _this$props3.className,
          children = _this$props3.children,
          disabled = _this$props3.disabled,
          role = _this$props3.role,
          renderLink = _this$props3.renderLink,
          _this$props3$id = _this$props3.id,
          id = _this$props3$id === void 0 ? this.id : _this$props3$id,
          value = _this$props3.value,
          _isSelected = _this$props3._isSelected,
          _nestedNavValue = _this$props3._nestedNavValue,
          manageTabIndex = _this$props3.manageTabIndex,
          onSelect = _this$props3.onSelect,
          ariaLevel = _this$props3.ariaLevel,
          otherProps = _objectWithoutProperties(_this$props3, ["header", "className", "children", "disabled", "role", "renderLink", "id", "value", "_isSelected", "_nestedNavValue", "manageTabIndex", "onSelect", "ariaLevel"]);

      var _this$state2 = this.state,
          expanded = _this$state2.expanded,
          focused = _this$state2.focused;
      var _this$props4 = this.props,
          label = _this$props4.label,
          _this$props4$tabIndex = _this$props4.tabIndex,
          tabIndex = _this$props4$tabIndex === void 0 ? 0 : _this$props4$tabIndex;

      if (!label && !header) {
        label = children;
      }

      var isTreeItem = role === 'treeitem';
      var isCurrent = !!_nestedNavValue && value === _nestedNavValue;

      if (isTreeItem || manageTabIndex) {
        tabIndex = isCurrent ? tabIndex : -1;
      }

      delete otherProps.label;
      delete otherProps['aria-current'];
      return _react["default"].createElement("li", _extends({
        className: (0, _classnames["default"])('spectrum-SideNav-item', {
          'is-selected': _isSelected,
          'is-disabled': disabled,
          'is-focused': focused
        }, className),
        onKeyDown: disabled ? undefined : (0, _events.chain)(this.onKeyDown, _events.interpretKeyboardEvent.bind(this)),
        role: isTreeItem ? 'presentation' : undefined,
        ref: this.setSideNavItemRef
      }, (0, _filterDOMProps["default"])(otherProps)), (label || renderLink) && this.renderLink(label, tabIndex, isTreeItem), header && _react["default"].createElement("h2", {
        className: "spectrum-SideNav-heading",
        id: this.getDescendantId('header')
      }, header), this.hasNestedNav && _react["default"].createElement(_SideNav["default"], {
        isNested: true,
        variant: isTreeItem ? 'multiLevel' : undefined,
        id: this.getDescendantId('child'),
        "aria-labelledby": header ? this.getDescendantId('header') : id,
        ariaLevel: ariaLevel + 1,
        hidden: isTreeItem ? !expanded : undefined,
        value: _nestedNavValue,
        onSelect: onSelect
      }, children));
    }
  }, {
    key: "hasNestedNav",
    get: function get() {
      var children = this.props.children;
      return children && typeof children !== 'string';
    }
  }]);

  return SideNavItem;
}(_react.Component), _defineProperty(_class2, "propTypes", {
  /**
   * Custom className of sidenav to apply
   */
  className: _propTypes["default"].string,

  /**
   * Whether the item is disabled
   */
  disabled: _propTypes["default"].bool,

  /**
   * The label to display in the item
   */
  label: _propTypes["default"].string,

  /**
   * The value of item
   */
  value: _propTypes["default"].string,

  /**
   * The href of item
   */
  href: _propTypes["default"].string,

  /**
   * The target type for item link
   */
  target: _propTypes["default"].string,

  /**
   * Icon for item
   */
  icon: _propTypes["default"].node,

  /**
   * Whether item should represent the current page within a set of pages or current location within an environment or context when selected.
   * See <a href="https://www.w3.org/TR/wai-aria-1.1/#aria-current" class="spectrum-Link">WAI-ARIA 1.1 definition of `aria-current (state)`</a>
   * attribute.
   */
  'aria-current': _propTypes["default"].oneOf(['page', 'location']),

  /**
   * Whether the item is expanded in case of multi-level sidenav item
   */
  expanded: _propTypes["default"].bool,

  /**
   * Whether the item is expanded at initialization in case of multi-level sidenav item
   */
  defaultExpanded: _propTypes["default"].bool,

  /**
   * A function that returns a href wrapper component.
   * Useful in providing custom href component(eg. Link from react-router-dom).
   *
   * ```js
   *  <SideNavItem renderLink={(props) => <Link {...props} to="/">Foo</Link>}>
   *  </SideNavItem>
   * ```
   */
  renderLink: _propTypes["default"].func,

  /**
   * A click handler for the item
   */
  onClick: _propTypes["default"].func,

  /**
   * A select handler for the item
   */
  onSelect: _propTypes["default"].func
}), _defineProperty(_class2, "defaultProps", {
  'aria-current': 'page',
  disabled: false,
  target: '_self',
  onSelect: NOOP,
  onClick: NOOP
}), _temp)) || _class) || _class;

exports["default"] = SideNavItem;

/***/ }),

/***/ "./node_modules/@react/react-spectrum/Textfield/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@react/react-spectrum/Textfield/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*************************************************************************
* ADOBE CONFIDENTIAL
* ___________________
*
* Copyright 2019 Adobe
* All Rights Reserved.
*
* NOTICE: All information contained herein is, and remains
* the property of Adobe and its suppliers, if any. The intellectual
* and technical concepts contained herein are proprietary to Adobe
* and its suppliers and are protected by all applicable intellectual
* property laws, including trade secret and copyright laws.
* Dissemination of this information or reproduction of this material
* is strictly forbidden unless prior written permission is obtained
* from Adobe.
**************************************************************************/
module.exports = __webpack_require__(/*! ./js/Textfield */ "./node_modules/@react/react-spectrum/Textfield/js/Textfield.js");

/***/ }),

/***/ "./node_modules/@react/react-spectrum/Textfield/js/Textfield.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@react/react-spectrum/Textfield/js/Textfield.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _autobindDecorator = _interopRequireDefault(__webpack_require__(/*! autobind-decorator */ "./node_modules/autobind-decorator/lib/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _filterDOMProps = _interopRequireDefault(__webpack_require__(/*! ../../utils/filterDOMProps */ "./node_modules/@react/react-spectrum/utils/filterDOMProps.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));

var _class, _class2, _temp;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

if (true) {
  __webpack_require__(/*! ../../spectrum-css/textfield/index.css */ "./node_modules/@react/react-spectrum/spectrum-css/textfield/index.css");

  __webpack_require__(/*! ../../spectrum-css/textfield/index-diff.css */ "./node_modules/@react/react-spectrum/spectrum-css/textfield/index-diff.css");
} else {}

if (false) {}
if (false) {}
if (true) __webpack_require__(/*! ../../spectrum-css/textfield/multiStops/lightest.css */ "./node_modules/@react/react-spectrum/spectrum-css/textfield/multiStops/lightest.css");
if (false) {}

var Textfield = (0, _autobindDecorator["default"])(_class = (_temp = _class2 =
/*#__PURE__*/
function (_Component) {
  _inherits(Textfield, _Component);

  function Textfield() {
    _classCallCheck(this, Textfield);

    return _possibleConstructorReturn(this, _getPrototypeOf(Textfield).apply(this, arguments));
  }

  _createClass(Textfield, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this = this;

      if (this.props.autoFocus) {
        // wait a frame to make sure the textfield in the DOM and focusable
        requestAnimationFrame(function () {
          return _this.focus();
        });
      }
    }
  }, {
    key: "focus",
    value: function focus() {
      if (!this.props.disabled) {
        _reactDom["default"].findDOMNode(this).focus();
      }
    }
  }, {
    key: "onChange",
    value: function onChange(e) {
      if (this.props.onChange) {
        this.props.onChange(e.target.value, e);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          quiet = _this$props.quiet,
          disabled = _this$props.disabled,
          required = _this$props.required,
          invalid = _this$props.invalid,
          readOnly = _this$props.readOnly,
          multiLine = _this$props.multiLine,
          validationState = _this$props.validationState,
          otherProps = _objectWithoutProperties(_this$props, ["className", "quiet", "disabled", "required", "invalid", "readOnly", "multiLine", "validationState"]);

      var Tag = multiLine ? 'textarea' : 'input';
      var isInvalid = invalid || validationState === 'invalid';
      delete otherProps.autoFocus;
      delete otherProps.autocompleteInput;

      if (invalid) {
        console.warn('The "invalid" prop of Textfield is deprecated. Please use validationState="invalid" instead.');
      }

      return _react["default"].createElement(Tag, _extends({
        type: "text",
        className: (0, _classnames["default"])('spectrum-Textfield', {
          'spectrum-Textfield--multiline': multiLine,
          'is-invalid': isInvalid,
          'is-valid': validationState === 'valid',
          'spectrum-Textfield--quiet': quiet
        }, className),
        disabled: disabled,
        required: required,
        readOnly: readOnly,
        "aria-invalid": isInvalid || null,
        defaultValue: otherProps.defaultValue
      }, (0, _filterDOMProps["default"])(otherProps), {
        onChange: this.onChange
      }));
    }
  }]);

  return Textfield;
}(_react.Component), _defineProperty(_class2, "propTypes", {
  /** Whether to automatically focus this text field */
  autoFocus: _propTypes["default"].bool,

  /** Custom CSS class to add to the text field */
  className: _propTypes["default"].string,

  /** Whether to disable the text field */
  disabled: _propTypes["default"].bool,

  /** Whether to show the warning icon and red border. DEPRECATED: use validationState instead */
  invalid: _propTypes["default"].bool,

  /** Whether to render a textfield that accepts multiple lines of text */
  multiLine: _propTypes["default"].bool,

  /** Function called when focus is taken away from the text field */
  onBlur: _propTypes["default"].func,

  /** Function called when the text field value is changed */
  onChange: _propTypes["default"].func,

  /** Function called when focus is put on the text field */
  onFocus: _propTypes["default"].func,

  /** String to show in the text field when nothing has been input */
  placeholder: _propTypes["default"].string,

  /** Whether the text field should render using a quiet variant */
  quiet: _propTypes["default"].bool,

  /** Whether the text field can only be read */
  readOnly: _propTypes["default"].bool,

  /** Whether the text field requires user input (shows warning if empty) */
  required: _propTypes["default"].bool,

  /** Show either checkmark or warning icons */
  validationState: _propTypes["default"].oneOf(['valid', 'invalid'])
}), _defineProperty(_class2, "defaultProps", {
  autoFocus: false,
  disabled: false,
  quiet: false,
  required: false,
  invalid: false,
  readOnly: false
}), _temp)) || _class;

exports["default"] = Textfield;
Textfield.displayName = 'Textfield';

/***/ }),

/***/ "./node_modules/@react/react-spectrum/Toast/js/state.js":
/*!**************************************************************!*\
  !*** ./node_modules/@react/react-spectrum/Toast/js/state.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setToastPlacement = setToastPlacement;
exports.TOAST_PLACEMENT = exports.TOAST_CONTAINERS = void 0;

/*************************************************************************
* ADOBE CONFIDENTIAL
* ___________________
*
* Copyright 2019 Adobe
* All Rights Reserved.
*
* NOTICE: All information contained herein is, and remains
* the property of Adobe and its suppliers, if any. The intellectual
* and technical concepts contained herein are proprietary to Adobe
* and its suppliers and are protected by all applicable intellectual
* property laws, including trade secret and copyright laws.
* Dissemination of this information or reproduction of this material
* is strictly forbidden unless prior written permission is obtained
* from Adobe.
**************************************************************************/
var TOAST_CONTAINERS = new Map();
exports.TOAST_CONTAINERS = TOAST_CONTAINERS;
var TOAST_PLACEMENT = 'top center';
exports.TOAST_PLACEMENT = TOAST_PLACEMENT;

function setToastPlacement(placement) {
  exports.TOAST_PLACEMENT = TOAST_PLACEMENT = placement;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = TOAST_CONTAINERS.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var container = _step.value;
      container.setState({
        placement: placement
      });
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

/***/ }),

/***/ "./node_modules/@react/react-spectrum/focus-ring-polyfill/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@react/react-spectrum/focus-ring-polyfill/index.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 *  Copyright 2018 Adobe. All rights reserved.
 *  This file is licensed to you under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License. You may obtain a copy
 *  of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software distributed under
 *  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 *  OF ANY KIND, either express or implied. See the License for the specific language
 *  governing permissions and limitations under the License.
 */

// Provides explicit indication of elements receiving focus through keyboard interaction rather than mouse or touch.
(function(doc) {
  // In case file is imported in SSR context, don't polyfill anything
  if (!doc) {
    return;
  }

  var NAVIGATION_KEYS = [
    'Tab',
    'ArrowUp',
    'ArrowRight',
    'ArrowDown',
    'ArrowLeft',
    'Home',
    'End',
    'PageUp',
    'PageDown',
    'Enter',
    ' ',
    'Escape',

    /* IE9 and Firefox < 37 */
    'Up',
    'Right',
    'Down',
    'Left',
    'Esc'
  ];
  var TEXT_INPUT_TYPES = [
    'text',
    'date',
    'datetime-local',
    'email',
    'month',
    'number',
    'password',
    'search',
    'tel',
    'time',
    'url',
    'week'
  ];
  var keyboardFocus = false;
  var elements = doc.getElementsByClassName('focus-ring');

  function onKeydownHandler(event) {
    if (event.ctrlKey || event.altKey || event.metaKey || NAVIGATION_KEYS.indexOf(event.key) === -1) {
      return;
    }
    keyboardFocus = true;

    if (doc.activeElement &&
        doc.activeElement !== doc.body &&
        doc.activeElement.tagName !== 'TEXTAREA' &&
        !(doc.activeElement.tagName === 'INPUT' &&
          TEXT_INPUT_TYPES.indexOf(doc.activeElement.type) !== -1)) {
      doc.activeElement.classList.add('focus-ring');
    }
  }

  function onMousedownHandler() {
    keyboardFocus = false;

    for (var i = 0; i < elements.length; i++) {
      elements[i].classList.remove('focus-ring');
    }

  }

  function onFocusHandler(event) {
    var classList = event.target.classList;
    if (classList && keyboardFocus) {
      classList.add('focus-ring');
    }
  }

  function onBlurHandler(event) {
    var classList = event.target.classList;
    classList && classList.remove('focus-ring');
  }

  doc.addEventListener('keydown', onKeydownHandler, true);
  doc.addEventListener('mousedown', onMousedownHandler, true);
  doc.addEventListener('focus', onFocusHandler, true);
  doc.addEventListener('blur', onBlurHandler, true);
})(typeof window === "undefined" ? undefined : document);


/***/ }),

/***/ "./node_modules/@react/react-spectrum/utils/FocusManager.js":
/*!******************************************************************!*\
  !*** ./node_modules/@react/react-spectrum/utils/FocusManager.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.trapFocus = trapFocus;
exports.TABBABLE_ELEMENT_SELECTOR = exports.FOCUSABLE_ELEMENT_SELECTOR = exports["default"] = void 0;

var _autobindDecorator = _interopRequireDefault(__webpack_require__(/*! autobind-decorator */ "./node_modules/autobind-decorator/lib/index.js"));

var _events = __webpack_require__(/*! ./events */ "./node_modules/@react/react-spectrum/utils/events.js");

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));

var _string = __webpack_require__(/*! ./string */ "./node_modules/@react/react-spectrum/utils/string.js");

var _scrollToDOMNode = _interopRequireDefault(__webpack_require__(/*! ./scrollToDOMNode */ "./node_modules/@react/react-spectrum/utils/scrollToDOMNode.js"));

var _class, _class2, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var WHITESPACE_REGEXP = /[\n\r]+|[\s]{1,}/g;
var DELAY_BEFORE_AUTOFOCUS = 20;

var FocusManager = (0, _autobindDecorator["default"])(_class = (_temp = _class2 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FocusManager, _React$Component);

  function FocusManager() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, FocusManager);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(FocusManager)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "keysSoFar", '');

    _defineProperty(_assertThisInitialized(_this), "keyClearTimeout", null);

    return _this;
  }

  _createClass(FocusManager, [{
    key: "getItems",
    value: function getItems() {
      var selected = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var _this$props = this.props,
          itemSelector = _this$props.itemSelector,
          selectedItemSelector = _this$props.selectedItemSelector,
          includeSelf = _this$props.includeSelf;
      var selector = selected && selectedItemSelector ? selectedItemSelector : itemSelector;

      var node = _reactDom["default"].findDOMNode(this);

      var array = [];

      if (includeSelf && node.matches(selector)) {
        array.push(node);
      }

      return array.concat(Array.from(node.querySelectorAll(selector)));
    }
  }, {
    key: "onFocusFirst",
    value: function onFocusFirst(e) {
      var items = this.getItems();

      if (items.length && (!e || items.indexOf(e.target) !== -1)) {
        if (e) {
          e.preventDefault();
        }

        items[0].focus();
      }
    }
  }, {
    key: "onFocusLast",
    value: function onFocusLast(e) {
      var items = this.getItems();

      if (items.length && (!e || items.indexOf(e.target) !== -1)) {
        if (e) {
          e.preventDefault();
        }

        items[items.length - 1].focus();
      }
    }
  }, {
    key: "onFocusPrevious",
    value: function onFocusPrevious(e) {
      var items = this.getItems();

      if (items.length && e && items.indexOf(e.target) !== -1) {
        e.preventDefault();
        var index = items.indexOf(e.target) - 1;

        if (index < 0) {
          index = items.length - 1;
        }

        items[index].focus();
      }
    }
  }, {
    key: "onFocusNext",
    value: function onFocusNext(e) {
      var items = this.getItems();

      if (items.length && e && items.indexOf(e.target) !== -1) {
        e.preventDefault();
        var index = items.indexOf(e.target) + 1;

        if (index >= items.length) {
          index = 0;
        }

        items[index].focus();
      }
    }
  }, {
    key: "onPageUp",
    value: function onPageUp(e) {
      if (this.props.ignorePageUpPageDown) {
        return;
      }

      var items = this.getItems();

      if (items.length && e && items.indexOf(e.target) !== -1) {
        e.preventDefault();

        var listNode = _reactDom["default"].findDOMNode(this);

        var nextPage = Math.max(e.target.offsetTop + e.target.offsetHeight - listNode.clientHeight, 0);
        var index = items.indexOf(e.target);
        var item = items.slice(0, index).reverse().find(function (item) {
          return item.offsetTop < nextPage;
        });

        if (item) {
          item.focus();
          (0, _scrollToDOMNode["default"])(item, listNode, true);
        } else {
          this.onFocusFirst(e);
        }
      }
    }
  }, {
    key: "onPageDown",
    value: function onPageDown(e) {
      if (this.props.ignorePageUpPageDown) {
        return;
      }

      var items = this.getItems();

      if (items.length && e && items.indexOf(e.target) !== -1) {
        e.preventDefault();

        var listNode = _reactDom["default"].findDOMNode(this);

        var nextPage = Math.min(e.target.offsetTop + listNode.clientHeight, listNode.scrollHeight + listNode.clientHeight);
        var index = items.indexOf(e.target) + 1;
        var item = items.slice(index).find(function (item) {
          return item.offsetTop + item.offsetHeight > nextPage;
        });

        if (item) {
          item.focus();
          (0, _scrollToDOMNode["default"])(item, listNode, true);
        } else {
          this.onFocusLast(e);
        }
      }
    }
  }, {
    key: "findItemToFocus",
    value: function findItemToFocus(e) {
      var target = e.target,
          shiftKey = e.shiftKey,
          charCode = e.charCode;
      var character = (0, _string.removeDiacritics)(String.fromCharCode(charCode)).toUpperCase();
      var items = this.getItems();

      if (this.keysSoFar === '' || character === this.keysSoFar || shiftKey) {
        // reverse order if shiftKey is pressed
        if (shiftKey) {
          items = items.reverse();
        }

        this.searchIndex = items.indexOf(target);
      }

      if (character !== this.keysSoFar) {
        this.keysSoFar += character;
      }

      this.clearKeysSoFarAfterDelay();
      var item = this.findMatchInRange(items, this.searchIndex + 1, items.length);

      if (!item) {
        item = this.findMatchInRange(items, 0, this.searchIndex);
      }

      if (item) {
        item.focus();
      }
    }
  }, {
    key: "clearKeysSoFarAfterDelay",
    value: function clearKeysSoFarAfterDelay() {
      var _this2 = this;

      if (this.keyClearTimeout) {
        clearTimeout(this.keyClearTimeout);
      }

      this.keyClearTimeout = setTimeout(function () {
        return _this2.keysSoFar = '';
      }, 500);
    }
  }, {
    key: "findMatchInRange",
    value: function findMatchInRange(items, startIndex, endIndex) {
      // Find the first item starting with the keysSoFar substring, searching in the specified range of items
      for (var i = startIndex; i < endIndex; i++) {
        var label = items[i].innerText || items[i].textContent;

        if (label && (0, _string.removeDiacritics)(label).replace(WHITESPACE_REGEXP, '').toUpperCase().indexOf(this.keysSoFar) === 0) {
          return items[i];
        }
      }

      return null;
    }
    /**
     * Handle keydown event
     * @param {Event} e Event object
     */

  }, {
    key: "onKeyDown",
    value: function onKeyDown(e) {
      if (e.isPropagationStopped()) {
        return;
      }

      _events.interpretKeyboardEvent.call(this, e, this.props.orientation);
    }
    /**
     * Handle keypress event
     * @param {Event} e Event object
     */

  }, {
    key: "onKeyPress",
    value: function onKeyPress(e) {
      if (e.isPropagationStopped()) {
        return;
      }

      this.findItemToFocus(e);
    }
    /**
     * When an item receives focus, it should have tabIndex === 0 and all other items should have tabIndex === -1
     * @param {Event} e Event object
     */

  }, {
    key: "onFocus",
    value: function onFocus(e) {
      if (e.isPropagationStopped()) {
        return;
      }

      this.getItems().forEach(function (item) {
        return item.tabIndex = item === e.target ? 0 : -1;
      });
    }
    /**
     * When an item loses focus, set the appropriate tabIndex on each item based on its selected state.
     * If the item losing focus is selected,
     * it should be the only item to receive focus on shift+tab or tab back to the control,
     * However, if the item losing focus is not selected,
     * any of the selected items should receive focus on shift+tab or tab.
     * @param {Event} e Event object
     */

  }, {
    key: "onBlur",
    value: function onBlur(e) {
      if (e.isPropagationStopped()) {
        return;
      }

      var selectedItems = this.getItems(true); // If there are selected items,

      if (selectedItems.length) {
        // store whether item losing focus is selected.
        var targetSelected = selectedItems.indexOf(e.target) !== -1;
        this.getItems().forEach(function (item) {
          // store whether the current item is selected.
          var selected = selectedItems.indexOf(item) !== -1; // If the current item is the item losing focus and it is selected,
          // or the current item is selected and the item losing focus is not selected,
          // set tabIndex === 0, otherwise set tabIndex === -1.

          item.tabIndex = item === e.target && targetSelected || !targetSelected && selected ? 0 : -1;
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      var _this$props2 = this.props,
          autoFocus = _this$props2.autoFocus,
          selectedItemSelector = _this$props2.selectedItemSelector;

      if (autoFocus) {
        var selectedItem = selectedItemSelector ? _reactDom["default"].findDOMNode(this).querySelector(selectedItemSelector) : null; // wait a frame before trying to shift focus

        this.focusTimer = setTimeout(function () {
          if (selectedItem) {
            selectedItem.focus();
          } else {
            _this3.onFocusFirst();
          }
        }, DELAY_BEFORE_AUTOFOCUS);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.focusTimer);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          children = _this$props3.children,
          disabled = _this$props3.disabled,
          manageTabIndex = _this$props3.manageTabIndex,
          typeToSelect = _this$props3.typeToSelect;

      var child = _react["default"].Children.only(children);

      var _child$props = child.props,
          onKeyDown = _child$props.onKeyDown,
          onKeyPress = _child$props.onKeyPress,
          onFocus = _child$props.onFocus,
          onBlur = _child$props.onBlur;
      return _react["default"].cloneElement(child, {
        onKeyDown: !disabled ? (0, _events.chain)(onKeyDown, this.onKeyDown) : onKeyDown,
        onKeyPress: typeToSelect && !disabled ? (0, _events.chain)(onKeyPress, this.onKeyPress) : onKeyPress,
        onFocus: manageTabIndex && !disabled ? (0, _events.chain)(onFocus, this.onFocus) : onFocus,
        onBlur: manageTabIndex && !disabled ? (0, _events.chain)(onBlur, this.onBlur) : onBlur
      });
    }
  }]);

  return FocusManager;
}(_react["default"].Component), _defineProperty(_class2, "propTypes", {
  /**
   * A selector of focusable elements to manage focus between
   */
  itemSelector: _propTypes["default"].string.isRequired,

  /**
   * Whether to use roving tabIndex so that only one element within the group can receive focus with tab key at a time.
   */
  manageTabIndex: _propTypes["default"].bool,

  /**
   * Orientation of items; "horizontal" orientation ignores up/down arrow keys, "vertical" orientation ignores left/right arrow keys, "both" handles up/left and down/right.
   */
  orientation: _propTypes["default"].oneOf(['horizontal', 'vertical', 'both']),

  /**
   * A selector of selected elements
   */
  selectedItemSelector: _propTypes["default"].string,

  /**
   * Whether to disable focus management
   */
  disabled: _propTypes["default"].bool,

  /**
   * Whether to include alphanumeric typing as a way to move focus to items in a list.
   */
  typeToSelect: _propTypes["default"].bool,

  /**
   * Whether to include the child wrapper element in the group of elements that can receive focus.
   */
  includeSelf: _propTypes["default"].bool,

  /**
   * Whether to ignore PageUp and PageDown events to move focus between items.
   */
  ignorePageUpPageDown: _propTypes["default"].bool,

  /**
   * Whether to autoFocus first selected item or first item.
   */
  autoFocus: _propTypes["default"].bool
}), _defineProperty(_class2, "defaultProps", {
  manageTabIndex: true,
  orientation: 'vertical',
  typeToSelect: false,
  includeSelf: false,
  ignorePageUpPageDown: false
}), _temp)) || _class;

exports["default"] = FocusManager;
var focusableElements = ['input:not([disabled]):not([type=hidden])', 'select:not([disabled])', 'textarea:not([disabled])', 'button:not([disabled])', 'a[href]', 'area[href]', 'summary', 'iframe', 'object', 'embed', 'audio[controls]', 'video[controls]', '[contenteditable]'];
var FOCUSABLE_ELEMENT_SELECTOR = focusableElements.join(',') + ',[tabindex]';
exports.FOCUSABLE_ELEMENT_SELECTOR = FOCUSABLE_ELEMENT_SELECTOR;
focusableElements.push('[tabindex]:not([tabindex="-1"])');
var TABBABLE_ELEMENT_SELECTOR = focusableElements.join(':not([tabindex="-1"]),');
exports.TABBABLE_ELEMENT_SELECTOR = TABBABLE_ELEMENT_SELECTOR;

function trapFocus(componentOrElement, event) {
  var type = event.type,
      key = event.key,
      shiftKey = event.shiftKey,
      target = event.target;
  var node;
  var tabbables;
  var tabbable;
  var first;
  var last;

  if (type === 'keydown' || type === 'focus') {
    node = _reactDom["default"].findDOMNode(componentOrElement);

    if (node) {
      // find tabbable elements within container element
      tabbables = Array.from(node.querySelectorAll(TABBABLE_ELEMENT_SELECTOR)).filter(function (el) {
        return el !== node;
      });
      first = tabbables[0] || node;
      last = tabbables[tabbables.length - 1] || node;
    }
  } // If navigating using the tab key,


  if (type === 'keydown' && key === 'Tab') {
    if (node) {
      if (shiftKey) {
        // with focus on first tabbable element, navigating backwards,
        if (target === first || target === node) {
          // focus the last tabbable element
          tabbable = last;
        } // otherwise, with focus on last tabbable element, navigating forwards,

      } else if (target === last || target === node) {
        // focus the first tabbable element.
        tabbable = first;
      }
    }
  } else if (type === 'focus' && target === node) {
    tabbable = first;
  }

  if (tabbable) {
    event.preventDefault();
    event.stopPropagation();

    if (tabbable !== document.activeElement) {
      tabbable.focus();
    }
  }
}

/***/ }),

/***/ "./node_modules/@react/react-spectrum/utils/configureTypekit.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@react/react-spectrum/utils/configureTypekit.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = configureTypekit;

/*************************************************************************
* ADOBE CONFIDENTIAL
* ___________________
*
* Copyright 2019 Adobe
* All Rights Reserved.
*
* NOTICE: All information contained herein is, and remains
* the property of Adobe and its suppliers, if any. The intellectual
* and technical concepts contained herein are proprietary to Adobe
* and its suppliers and are protected by all applicable intellectual
* property laws, including trade secret and copyright laws.
* Dissemination of this information or reproduction of this material
* is strictly forbidden unless prior written permission is obtained
* from Adobe.
**************************************************************************/
function configureTypekit(typeKitId) {
  var config = {
    kitId: typeKitId,
    scriptTimeout: 3000
  };

  if (!window.Typekit) {
    // we load the typescript only once
    var h = document.getElementsByTagName('html')[0];
    h.className += ' wf-loading';
    var t = setTimeout(function () {
      h.className = h.className.replace(/(\s|^)wf-loading(\s|$)/g, ' ');
      h.className += ' wf-inactive';
    }, config.scriptTimeout);
    var tk = document.createElement('script');
    var d = false;
    tk.src = "https://use.typekit.net/".concat(config.kitId, ".js");
    tk.type = 'text/javascript';
    tk.async = 'true';

    tk.onload = tk.onreadystatechange = function onload() {
      var a = this.readyState;

      if (d || a && a !== 'complete' && a !== 'loaded') {
        return;
      }

      d = true;
      clearTimeout(t);

      try {
        window.Typekit.load(config);
      } catch (b) {
        /* empty */
      }
    };

    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(tk, s);
  }
}

/***/ }),

/***/ "./node_modules/@react/react-spectrum/utils/createId.js":
/*!**************************************************************!*\
  !*** ./node_modules/@react/react-spectrum/utils/createId.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/*************************************************************************
* ADOBE CONFIDENTIAL
* ___________________
*
* Copyright 2019 Adobe
* All Rights Reserved.
*
* NOTICE: All information contained herein is, and remains
* the property of Adobe and its suppliers, if any. The intellectual
* and technical concepts contained herein are proprietary to Adobe
* and its suppliers and are protected by all applicable intellectual
* property laws, including trade secret and copyright laws.
* Dissemination of this information or reproduction of this material
* is strictly forbidden unless prior written permission is obtained
* from Adobe.
**************************************************************************/
var PREFIX = 'react-spectrum-';
var incrementor = 0;

var _default = function _default() {
  return PREFIX + ++incrementor;
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/@react/react-spectrum/utils/events.js":
/*!************************************************************!*\
  !*** ./node_modules/@react/react-spectrum/utils/events.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.interpretKeyboardEvent = interpretKeyboardEvent;
exports.chain = chain;
exports.focusAfterMouseEvent = focusAfterMouseEvent;

/*************************************************************************
* ADOBE CONFIDENTIAL
* ___________________
*
* Copyright 2019 Adobe
* All Rights Reserved.
*
* NOTICE: All information contained herein is, and remains
* the property of Adobe and its suppliers, if any. The intellectual
* and technical concepts contained herein are proprietary to Adobe
* and its suppliers and are protected by all applicable intellectual
* property laws, including trade secret and copyright laws.
* Dissemination of this information or reproduction of this material
* is strictly forbidden unless prior written permission is obtained
* from Adobe.
**************************************************************************/
function interpretKeyboardEvent(event) {
  var orientation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'vertical';

  switch (event.key) {
    case 'Enter':
    case ' ':
      if (this.onSelectFocused) {
        this.onSelectFocused(event);
      }

      break;

    case 'Tab':
      if (this.onTab) {
        this.onTab(event);
      }

      break;

    case 'PageUp':
      if (this.onPageUp) {
        this.onPageUp(event);
      } else if (this.onFocusFirst) {
        this.onFocusFirst(event);
      }

      break;

    case 'PageDown':
      if (this.onPageDown) {
        this.onPageDown(event);
      } else if (this.onFocusLast) {
        this.onFocusLast(event);
      }

      break;

    case 'Home':
      if (this.onFocusFirst) {
        this.onFocusFirst(event);
      }

      break;

    case 'End':
      if (this.onFocusLast) {
        this.onFocusLast(event);
      }

      break;

    case 'ArrowUp':
    case 'Up':
      if (event.altKey && this.onAltArrowUp) {
        this.onAltArrowUp(event);
      } else if (orientation !== 'horizontal' && this.onFocusPrevious) {
        this.onFocusPrevious(event);
      }

      break;

    case 'ArrowDown':
    case 'Down':
      if (event.altKey && this.onAltArrowDown) {
        this.onAltArrowDown(event);
      } else if (orientation !== 'horizontal' && this.onFocusNext) {
        this.onFocusNext(event);
      }

      break;

    case 'ArrowLeft':
    case 'Left':
      if (orientation !== 'vertical' && this.onFocusPrevious) {
        this.onFocusPrevious(event);
      }

      break;

    case 'ArrowRight':
    case 'Right':
      if (orientation !== 'vertical' && this.onFocusNext) {
        this.onFocusNext(event);
      }

      break;

    case 'Escape':
    case 'Esc':
      if (this.onEscape) {
        this.onEscape(event);
      }

      break;

    default: // do nothing

  }
}

function chain() {
  for (var _len = arguments.length, callbacks = new Array(_len), _key = 0; _key < _len; _key++) {
    callbacks[_key] = arguments[_key];
  }

  return function () {
    for (var _i = 0, _callbacks = callbacks; _i < _callbacks.length; _i++) {
      var callback = _callbacks[_i];

      if (typeof callback === 'function') {
        callback.apply(void 0, arguments);
      }
    }
  };
}

var mouseDownPrevented = false;

function focusAfterMouseEvent(handler, event) {
  // If server side rendering, just call handler method.
  if (!document) {
    handler && handler.call(this, event);
    return;
  } // execute the handler


  if (handler) {
    handler.call(this, event);

    if (event.isDefaultPrevented()) {
      mouseDownPrevented = event.type === 'mousedown';
      return;
    }
  } // make sure that the element has focus by calling this.focus();


  if (!mouseDownPrevented && typeof this.focus === 'function') {
    this.focus();
  }

  if (event.type === 'mouseup') {
    mouseDownPrevented = false;
  }
}

/***/ }),

/***/ "./node_modules/@react/react-spectrum/utils/filterDOMProps.js":
/*!********************************************************************!*\
  !*** ./node_modules/@react/react-spectrum/utils/filterDOMProps.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = filterReactDomProps;

/*************************************************************************
* ADOBE CONFIDENTIAL
* ___________________
*
* Copyright 2019 Adobe
* All Rights Reserved.
*
* NOTICE: All information contained herein is, and remains
* the property of Adobe and its suppliers, if any. The intellectual
* and technical concepts contained herein are proprietary to Adobe
* and its suppliers and are protected by all applicable intellectual
* property laws, including trade secret and copyright laws.
* Dissemination of this information or reproduction of this material
* is strictly forbidden unless prior written permission is obtained
* from Adobe.
**************************************************************************/
var DOMProps = {
  'abbr': 1,
  'accept': 1,
  'acceptCharset': 1,
  'accessKey': 1,
  'action': 1,
  'allowFullScreen': 1,
  'allowTransparency': 1,
  'alt': 1,
  'async': 1,
  'autoComplete': 1,
  'autoFocus': 1,
  'autoPlay': 1,
  'cellPadding': 1,
  'cellSpacing': 1,
  'challenge': 1,
  'charset': 1,
  'checked': 1,
  'cite': 1,
  'class': 1,
  'className': 1,
  'cols': 1,
  'colSpan': 1,
  'command': 1,
  'content': 1,
  'contentEditable': 1,
  'contextMenu': 1,
  'controls': 1,
  'coords': 1,
  'crossOrigin': 1,
  'data': 1,
  'dateTime': 1,
  'default': 1,
  'defer': 1,
  'dir': 1,
  'disabled': 1,
  'download': 1,
  'draggable': 1,
  'dropzone': 1,
  'encType': 1,
  'for': 1,
  'form': 1,
  'formAction': 1,
  'formEncType': 1,
  'formMethod': 1,
  'formNoValidate': 1,
  'formTarget': 1,
  'frameBorder': 1,
  'headers': 1,
  'height': 1,
  'hidden': 1,
  'high': 1,
  'href': 1,
  'hrefLang': 1,
  'htmlFor': 1,
  'httpEquiv': 1,
  'icon': 1,
  'id': 1,
  'inputMode': 1,
  'isMap': 1,
  'itemId': 1,
  'itemProp': 1,
  'itemRef': 1,
  'itemScope': 1,
  'itemType': 1,
  'kind': 1,
  'label': 1,
  'lang': 1,
  'list': 1,
  'loop': 1,
  'manifest': 1,
  'max': 1,
  'maxLength': 1,
  'media': 1,
  'mediaGroup': 1,
  'method': 1,
  'min': 1,
  'minLength': 1,
  'multiple': 1,
  'muted': 1,
  'name': 1,
  'noValidate': 1,
  'open': 1,
  'optimum': 1,
  'pattern': 1,
  'ping': 1,
  'placeholder': 1,
  'poster': 1,
  'preload': 1,
  'radioGroup': 1,
  'readOnly': 1,
  'rel': 1,
  'required': 1,
  'role': 1,
  'rows': 1,
  'rowSpan': 1,
  'sandbox': 1,
  'scope': 1,
  'scoped': 1,
  'scrolling': 1,
  'seamless': 1,
  'selected': 1,
  'shape': 1,
  'size': 1,
  'sizes': 1,
  'sortable': 1,
  'span': 1,
  'spellCheck': 1,
  'src': 1,
  'srcDoc': 1,
  'srcSet': 1,
  'start': 1,
  'step': 1,
  'style': 1,
  'tabIndex': 1,
  'target': 1,
  'title': 1,
  'translate': 1,
  'type': 1,
  'typeMustMatch': 1,
  'useMap': 1,
  'value': 1,
  'width': 1,
  'wmode': 1,
  'wrap': 1,
  'onCopy': 1,
  'onCut': 1,
  'onPaste': 1,
  'onLoad': 1,
  'onError': 1,
  'onWheel': 1,
  'onScroll': 1,
  'onCompositionEnd': 1,
  'onCompositionStart': 1,
  'onCompositionUpdate': 1,
  'onKeyDown': 1,
  'onKeyPress': 1,
  'onKeyUp': 1,
  'onFocus': 1,
  'onBlur': 1,
  'onChange': 1,
  'onInput': 1,
  'onSubmit': 1,
  'onClick': 1,
  'onContextMenu': 1,
  'onDoubleClick': 1,
  'onDrag': 1,
  'onDragEnd': 1,
  'onDragEnter': 1,
  'onDragExit': 1,
  'onDragLeave': 1,
  'onDragOver': 1,
  'onDragStart': 1,
  'onDrop': 1,
  'onMouseDown': 1,
  'onMouseEnter': 1,
  'onMouseLeave': 1,
  'onMouseMove': 1,
  'onMouseOut': 1,
  'onMouseOver': 1,
  'onMouseUp': 1,
  'onSelect': 1,
  'onTouchCancel': 1,
  'onTouchEnd': 1,
  'onTouchMove': 1,
  'onTouchStart': 1,
  'onAnimationStart': 1,
  'onAnimationEnd': 1,
  'onAnimationIteration': 1,
  'onTransitionEnd': 1
};
/**
 * Checking for aria-* and data-* props
 */

var propRe = /^((data|aria)-.*)$/;

function filterReactDomProps(props) {
  var filterProps = {};

  for (var prop in props) {
    if (props.hasOwnProperty(prop) && (DOMProps[prop] || propRe.test(prop))) {
      filterProps[prop] = props[prop];
    }
  }

  return filterProps;
}

/***/ }),

/***/ "./node_modules/@react/react-spectrum/utils/focusRing.js":
/*!***************************************************************!*\
  !*** ./node_modules/@react/react-spectrum/utils/focusRing.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = focusRing;
exports.FOCUS_RING_CLASSNAME = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*************************************************************************
* ADOBE CONFIDENTIAL
* ___________________
*
* Copyright 2019 Adobe
* All Rights Reserved.
*
* NOTICE: All information contained herein is, and remains
* the property of Adobe and its suppliers, if any. The intellectual
* and technical concepts contained herein are proprietary to Adobe
* and its suppliers and are protected by all applicable intellectual
* property laws, including trade secret and copyright laws.
* Dissemination of this information or reproduction of this material
* is strictly forbidden unless prior written permission is obtained
* from Adobe.
**************************************************************************/
var FOCUS_RING_CLASSNAME = 'focus-ring';
/**
 * This is a decorator that ensures a focus-ring className set by the focus-ring-polyfill
 * is retained when a focused component is rendered following a state change.
*/

exports.FOCUS_RING_CLASSNAME = FOCUS_RING_CLASSNAME;

function focusRing(WrappedComponent) {
  var proto = WrappedComponent.prototype;
  var componentWillUpdate = proto.componentWillUpdate;
  var componentDidUpdate = proto.componentDidUpdate;
  var elementWithFocusRing = null;

  proto.componentWillUpdate = function (props, state) {
    // call original method
    if (componentWillUpdate) {
      componentWillUpdate.apply(this, arguments);
    }

    if (elementWithFocusRing == null || elementWithFocusRing !== document.activeElement) {
      try {
        var node = _reactDom["default"].findDOMNode(this);

        elementWithFocusRing = node.parentNode.querySelector('.' + FOCUS_RING_CLASSNAME);
      } catch (error) {// do nothing if component is not mounted
      }
    }
  };

  proto.componentDidUpdate = function (props, state) {
    // call original method
    if (componentDidUpdate) {
      componentDidUpdate.apply(this, arguments);
    }

    try {
      var node = _reactDom["default"].findDOMNode(this);

      if (elementWithFocusRing && (document.activeElement === elementWithFocusRing || node.contains(document.activeElement)) && !elementWithFocusRing.classList.contains(FOCUS_RING_CLASSNAME)) {
        document.activeElement.classList.add(FOCUS_RING_CLASSNAME);
        elementWithFocusRing = null;
      }
    } catch (error) {// do nothing if component is not mounted
    }
  };
}

/***/ }),

/***/ "./node_modules/@react/react-spectrum/utils/icon.js":
/*!**********************************************************!*\
  !*** ./node_modules/@react/react-spectrum/utils/icon.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cloneIcon = cloneIcon;

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*************************************************************************
* ADOBE CONFIDENTIAL
* ___________________
*
* Copyright 2019 Adobe
* All Rights Reserved.
*
* NOTICE: All information contained herein is, and remains
* the property of Adobe and its suppliers, if any. The intellectual
* and technical concepts contained herein are proprietary to Adobe
* and its suppliers and are protected by all applicable intellectual
* property laws, including trade secret and copyright laws.
* Dissemination of this information or reproduction of this material
* is strictly forbidden unless prior written permission is obtained
* from Adobe.
**************************************************************************/
function cloneIcon(icon) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (!icon) {
    return null;
  }

  if (typeof icon === 'string') {
    throw new Error('String icon names are deprecated. Pass icons by importing them from react-spectrum/Icon/IconName and render as <IconName />.');
  }

  var className = opts.className,
      size = opts.size,
      ariaLabel = opts['aria-label'],
      ariaHidden = opts['aria-hidden'],
      _opts$alt = opts.alt,
      alt = _opts$alt === void 0 ? ariaLabel || icon.props['aria-label'] || icon.props.alt : _opts$alt;
  return _react["default"].cloneElement(icon, {
    className: (0, _classnames["default"])(className, icon.props.className),
    size: icon.props.size || size,
    'aria-label': ariaLabel || alt,
    alt: alt,
    'aria-hidden': ariaHidden || (alt ? icon.props['aria-hidden'] : true)
  });
}

/***/ }),

/***/ "./node_modules/@react/react-spectrum/utils/intl.js":
/*!**********************************************************!*\
  !*** ./node_modules/@react/react-spectrum/utils/intl.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setLocale = setLocale;
exports.getLocale = getLocale;
exports.messageFormatter = messageFormatter;
exports.defaultLocale = void 0;

var _intlMessageformat = _interopRequireDefault(__webpack_require__(/*! intl-messageformat */ "./node_modules/intl-messageformat/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*************************************************************************
* ADOBE CONFIDENTIAL
* ___________________
*
* Copyright 2019 Adobe
* All Rights Reserved.
*
* NOTICE: All information contained herein is, and remains
* the property of Adobe and its suppliers, if any. The intellectual
* and technical concepts contained herein are proprietary to Adobe
* and its suppliers and are protected by all applicable intellectual
* property laws, including trade secret and copyright laws.
* Dissemination of this information or reproduction of this material
* is strictly forbidden unless prior written permission is obtained
* from Adobe.
**************************************************************************/
var defaultLocale = typeof navigator !== 'undefined' && (navigator.language || navigator.userLanguage) || 'en-US';
exports.defaultLocale = defaultLocale;
var currentLocale = defaultLocale;

function setLocale(locale) {
  currentLocale = locale;
}

function getLocale() {
  return currentLocale;
}

function messageFormatter(strings) {
  var cache = {};
  return function formatMessage(key, variables, formats) {
    var message = cache[key + '.' + currentLocale];

    if (!message) {
      var localeStrings = strings[currentLocale] || strings['en-US'];
      var msg = localeStrings[key];

      if (!msg) {
        throw new Error("Could not find intl message ".concat(key, " in ").concat(currentLocale, " locale"));
      }

      message = new _intlMessageformat["default"](msg, currentLocale, formats);
      cache[key] = message;
    }

    return message.format(variables);
  };
}

/***/ }),

/***/ "./node_modules/@react/react-spectrum/utils/scrollToDOMNode.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@react/react-spectrum/utils/scrollToDOMNode.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/*************************************************************************
* ADOBE CONFIDENTIAL
* ___________________
*
* Copyright 2019 Adobe
* All Rights Reserved.
*
* NOTICE: All information contained herein is, and remains
* the property of Adobe and its suppliers, if any. The intellectual
* and technical concepts contained herein are proprietary to Adobe
* and its suppliers and are protected by all applicable intellectual
* property laws, including trade secret and copyright laws.
* Dissemination of this information or reproduction of this material
* is strictly forbidden unless prior written permission is obtained
* from Adobe.
**************************************************************************/
var _default = function _default(node, parentNode, alignToStart) {
  if (parentNode && parentNode.contains(node)) {
    var clientHeight = parentNode.clientHeight,
        clientWidth = parentNode.clientWidth,
        scrollTop = parentNode.scrollTop,
        scrollLeft = parentNode.scrollLeft;
    var offsetHeight = node.offsetHeight,
        offsetWidth = node.offsetWidth,
        offsetTop = node.offsetTop,
        offsetLeft = node.offsetLeft;
    var parentPosition = window.getComputedStyle(parentNode).position;
    var parentOffsetTop = parentNode.offsetTop;
    var parentOffsetLeft = parentNode.offsetLeft;

    if (parentPosition !== 'static') {
      parentOffsetTop = parentOffsetLeft = 0;
    }

    if (offsetTop < scrollTop) {
      parentNode.scrollTop = offsetTop;
    } else {
      var offsetBottom = offsetTop + offsetHeight;
      var scrollBottom = scrollTop + clientHeight;

      if (offsetBottom > scrollBottom) {
        parentNode.scrollTop = alignToStart ? offsetTop - parentOffsetTop : offsetBottom - clientHeight - parentOffsetTop;
      }
    }

    if (offsetLeft < scrollLeft) {
      parentNode.scrollLeft = offsetLeft;
    } else {
      var offsetRight = offsetLeft + offsetWidth;
      var scrollRight = scrollLeft + clientWidth;

      if (offsetRight > scrollRight) {
        parentNode.scrollLeft = alignToStart ? offsetLeft - parentOffsetLeft : offsetRight - clientWidth - parentOffsetLeft;
      }
    }
  }
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/@react/react-spectrum/utils/string.js":
/*!************************************************************!*\
  !*** ./node_modules/@react/react-spectrum/utils/string.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isUrl = isUrl;
exports.normalize = normalize;
exports.removeDiacritics = removeDiacritics;
exports.getTextFromReact = getTextFromReact;

/*************************************************************************
* ADOBE CONFIDENTIAL
* ___________________
*
* Copyright 2019 Adobe
* All Rights Reserved.
*
* NOTICE: All information contained herein is, and remains
* the property of Adobe and its suppliers, if any. The intellectual
* and technical concepts contained herein are proprietary to Adobe
* and its suppliers and are protected by all applicable intellectual
* property laws, including trade secret and copyright laws.
* Dissemination of this information or reproduction of this material
* is strictly forbidden unless prior written permission is obtained
* from Adobe.
**************************************************************************/
function isUrl(string) {
  return string && !!string.match(/\/|:|\./g);
}

function normalize() {
  var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var normalizationForm = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'NFC';

  if ('normalize' in String.prototype) {
    string = string.normalize(normalizationForm);
  }

  return string;
}

function removeDiacritics() {
  var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var normalizationForm = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'NFD';
  return normalize(string, normalizationForm.replace('C', 'D')).replace(/[\u0300-\u036f]/g, '');
}
/** adapted from https://github.com/rwu823/react-addons-text-content */


function getTextFromReact(reactChild) {
  var result = '';

  var addChildTextToResult = function addChildTextToResult(child) {
    if (typeof child === 'string' || typeof child === 'number') {
      result = "".concat(result, " ").concat(child);
    } else if (Array.isArray(child)) {
      child.forEach(function (c) {
        return addChildTextToResult(c);
      });
    } else if (child && child.props) {
      var children = child.props.children;

      if (Array.isArray(children)) {
        children.forEach(function (c) {
          return addChildTextToResult(c);
        });
      } else {
        addChildTextToResult(children);
      }
    }
  };

  addChildTextToResult(reactChild); // clean up adjacent whitespace in result

  var adjacentWhitespaceRegex = /(\s)(?:\s+)/g;
  return result.trim().replace(adjacentWhitespaceRegex, '$1');
}

/***/ }),

/***/ "./node_modules/autobind-decorator/lib/index.js":
/*!******************************************************!*\
  !*** ./node_modules/autobind-decorator/lib/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @copyright 2015, Andrey Popp <8mayday@gmail.com>
 *
 * The decorator may be used on classes or methods
 * ```
 * @autobind
 * class FullBound {}
 *
 * class PartBound {
 *   @autobind
 *   method () {}
 * }
 * ```
 */


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = autobind;

function autobind() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  if (args.length === 1) {
    return boundClass.apply(undefined, args);
  } else {
    return boundMethod.apply(undefined, args);
  }
}

/**
 * Use boundMethod to bind all methods on the target.prototype
 */
function boundClass(target) {
  // (Using reflect to get all keys including symbols)
  var keys = undefined;
  // Use Reflect if exists
  if (typeof Reflect !== 'undefined' && typeof Reflect.ownKeys === 'function') {
    keys = Reflect.ownKeys(target.prototype);
  } else {
    keys = Object.getOwnPropertyNames(target.prototype);
    // use symbols if support is provided
    if (typeof Object.getOwnPropertySymbols === 'function') {
      keys = keys.concat(Object.getOwnPropertySymbols(target.prototype));
    }
  }

  keys.forEach(function (key) {
    // Ignore special case target method
    if (key === 'constructor') {
      return;
    }

    var descriptor = Object.getOwnPropertyDescriptor(target.prototype, key);

    // Only methods need binding
    if (typeof descriptor.value === 'function') {
      Object.defineProperty(target.prototype, key, boundMethod(target, key, descriptor));
    }
  });
  return target;
}

/**
 * Return a descriptor removing the value and returning a getter
 * The getter will return a .bind version of the function
 * and memoize the result against a symbol on the instance
 */
function boundMethod(target, key, descriptor) {
  var fn = descriptor.value;

  if (typeof fn !== 'function') {
    throw new Error('@autobind decorator can only be applied to methods not: ' + typeof fn);
  }

  // In IE11 calling Object.defineProperty has a side-effect of evaluating the
  // getter for the property which is being replaced. This causes infinite
  // recursion and an "Out of stack space" error.
  var definingProperty = false;

  return {
    configurable: true,
    get: function get() {
      if (definingProperty || this === target.prototype || this.hasOwnProperty(key)) {
        return fn;
      }

      var boundFn = fn.bind(this);
      definingProperty = true;
      Object.defineProperty(this, key, {
        value: boundFn,
        configurable: true,
        writable: true
      });
      definingProperty = false;
      return boundFn;
    }
  };
}
module.exports = exports['default'];


/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/core-js/library/fn/array/is-array.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/fn/array/is-array.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.array.is-array */ "./node_modules/core-js/library/modules/es6.array.is-array.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Array.isArray;


/***/ }),

/***/ "./node_modules/core-js/library/fn/get-iterator.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/fn/get-iterator.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");
module.exports = __webpack_require__(/*! ../modules/core.get-iterator */ "./node_modules/core-js/library/modules/core.get-iterator.js");


/***/ }),

/***/ "./node_modules/core-js/library/fn/map.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/library/fn/map.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es6.object.to-string */ "./node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__(/*! ../modules/es6.map */ "./node_modules/core-js/library/modules/es6.map.js");
__webpack_require__(/*! ../modules/es7.map.to-json */ "./node_modules/core-js/library/modules/es7.map.to-json.js");
__webpack_require__(/*! ../modules/es7.map.of */ "./node_modules/core-js/library/modules/es7.map.of.js");
__webpack_require__(/*! ../modules/es7.map.from */ "./node_modules/core-js/library/modules/es7.map.from.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Map;


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/assign.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/assign.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.assign */ "./node_modules/core-js/library/modules/es6.object.assign.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.assign;


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/create.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/create.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.create */ "./node_modules/core-js/library/modules/es6.object.create.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/define-property.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/define-property.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.define-property */ "./node_modules/core-js/library/modules/es6.object.define-property.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/get-own-property-descriptor.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/get-own-property-descriptor.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.get-own-property-descriptor */ "./node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
  return $Object.getOwnPropertyDescriptor(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/get-prototype-of.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/get-prototype-of.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.get-prototype-of */ "./node_modules/core-js/library/modules/es6.object.get-prototype-of.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.getPrototypeOf;


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.keys */ "./node_modules/core-js/library/modules/es6.object.keys.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.keys;


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/set-prototype-of.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/set-prototype-of.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.set-prototype-of */ "./node_modules/core-js/library/modules/es6.object.set-prototype-of.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.setPrototypeOf;


/***/ }),

/***/ "./node_modules/core-js/library/fn/promise.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/library/fn/promise.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es6.object.to-string */ "./node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__(/*! ../modules/es6.promise */ "./node_modules/core-js/library/modules/es6.promise.js");
__webpack_require__(/*! ../modules/es7.promise.finally */ "./node_modules/core-js/library/modules/es7.promise.finally.js");
__webpack_require__(/*! ../modules/es7.promise.try */ "./node_modules/core-js/library/modules/es7.promise.try.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Promise;


/***/ }),

/***/ "./node_modules/core-js/library/fn/reflect/construct.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/fn/reflect/construct.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.reflect.construct */ "./node_modules/core-js/library/modules/es6.reflect.construct.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Reflect.construct;


/***/ }),

/***/ "./node_modules/core-js/library/fn/symbol/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/fn/symbol/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.symbol */ "./node_modules/core-js/library/modules/es6.symbol.js");
__webpack_require__(/*! ../../modules/es6.object.to-string */ "./node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__(/*! ../../modules/es7.symbol.async-iterator */ "./node_modules/core-js/library/modules/es7.symbol.async-iterator.js");
__webpack_require__(/*! ../../modules/es7.symbol.observable */ "./node_modules/core-js/library/modules/es7.symbol.observable.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Symbol;


/***/ }),

/***/ "./node_modules/core-js/library/fn/symbol/iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/fn/symbol/iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../../modules/web.dom.iterable */ "./node_modules/core-js/library/modules/web.dom.iterable.js");
module.exports = __webpack_require__(/*! ../../modules/_wks-ext */ "./node_modules/core-js/library/modules/_wks-ext.js").f('iterator');


/***/ }),

/***/ "./node_modules/core-js/library/modules/_a-function.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_a-function.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_add-to-unscopables.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_add-to-unscopables.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-instance.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-instance.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-from-iterable.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-from-iterable.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/library/modules/_for-of.js");

module.exports = function (iter, ITERATOR) {
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-includes.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-includes.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/library/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/library/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-methods.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-methods.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/library/modules/_iobject.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/library/modules/_to-length.js");
var asc = __webpack_require__(/*! ./_array-species-create */ "./node_modules/core-js/library/modules/_array-species-create.js");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-species-constructor.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-species-constructor.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/library/modules/_is-array.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-species-create.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-species-create.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(/*! ./_array-species-constructor */ "./node_modules/core-js/library/modules/_array-species-constructor.js");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_bind.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_bind.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var invoke = __webpack_require__(/*! ./_invoke */ "./node_modules/core-js/library/modules/_invoke.js");
var arraySlice = [].slice;
var factories = {};

var construct = function (F, len, args) {
  if (!(len in factories)) {
    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  } return factories[len](F, args);
};

module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = arraySlice.call(arguments, 1);
  var bound = function (/* args... */) {
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
  };
  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
  return bound;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_classof.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_classof.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_cof.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_cof.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_collection-strong.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_collection-strong.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/library/modules/_redefine-all.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/library/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/library/modules/_for-of.js");
var $iterDefine = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/library/modules/_iter-define.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/library/modules/_iter-step.js");
var setSpecies = __webpack_require__(/*! ./_set-species */ "./node_modules/core-js/library/modules/_set-species.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js");
var fastKey = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/library/modules/_meta.js").fastKey;
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/library/modules/_validate-collection.js");
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_collection-to-json.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_collection-to-json.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/library/modules/_classof.js");
var from = __webpack_require__(/*! ./_array-from-iterable */ "./node_modules/core-js/library/modules/_array-from-iterable.js");
module.exports = function (NAME) {
  return function toJSON() {
    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_collection.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_collection.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/library/modules/_meta.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/library/modules/_redefine-all.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/library/modules/_for-of.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/library/modules/_an-instance.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
var each = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/library/modules/_array-methods.js")(0);
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js");

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  if (!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    C = wrapper(function (target, iterable) {
      anInstance(target, C, NAME, '_c');
      target._c = new Base();
      if (iterable != undefined) forOf(iterable, IS_MAP, target[ADDER], target);
    });
    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','), function (KEY) {
      var IS_ADDER = KEY == 'add' || KEY == 'set';
      if (KEY in proto && !(IS_WEAK && KEY == 'clear')) hide(C.prototype, KEY, function (a, b) {
        anInstance(this, C, KEY);
        if (!IS_ADDER && IS_WEAK && !isObject(a)) return KEY == 'get' ? undefined : false;
        var result = this._c[KEY](a === 0 ? 0 : a, b);
        return IS_ADDER ? this : result;
      });
    });
    IS_WEAK || dP(C.prototype, 'size', {
      get: function () {
        return this._c.size;
      }
    });
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F, O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_core.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_core.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.9' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ctx.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ctx.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_defined.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_defined.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_descriptors.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_descriptors.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_dom-create.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_dom-create.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_enum-bug-keys.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_enum-bug-keys.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/library/modules/_enum-keys.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_enum-keys.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_export.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_export.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_fails.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_fails.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_for-of.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_for-of.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/core-js/library/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/library/modules/_is-array-iter.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/library/modules/_to-length.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/library/modules/core.get-iterator-method.js");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_global.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_global.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_has.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_has.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_hide.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_hide.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_html.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_html.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_invoke.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_invoke.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iobject.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iobject.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-array-iter.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-array-iter.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-array.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-array.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-call.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-call.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-create.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-create.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-define.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-define.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/library/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/library/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/library/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-detect.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-detect.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-step.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-step.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iterators.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iterators.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_library.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_library.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_meta.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_meta.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var setDesc = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_microtask.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_microtask.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var macrotask = __webpack_require__(/*! ./_task */ "./node_modules/core-js/library/modules/_task.js").set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js")(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_new-promise-capability.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_new-promise-capability.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-assign.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-assign.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/library/modules/_iobject.js");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-create.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-create.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/library/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/library/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/core-js/library/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dp.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dp.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/library/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dps.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dps.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopd.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopd.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/library/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopn-ext.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopn-ext.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/library/modules/_object-gopn.js").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopn.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopn.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/library/modules/_object-keys-internal.js");
var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gops.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gops.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gpo.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gpo.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys-internal.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys-internal.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/library/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/library/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-pie.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-pie.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-sap.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-sap.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_perform.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_perform.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_promise-resolve.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_promise-resolve.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/core-js/library/modules/_new-promise-capability.js");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_property-desc.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_property-desc.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_redefine-all.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_redefine-all.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_redefine.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_redefine.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-collection-from.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-collection-from.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/library/modules/_for-of.js");

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
    var mapFn = arguments[1];
    var mapping, A, n, cb;
    aFunction(this);
    mapping = mapFn !== undefined;
    if (mapping) aFunction(mapFn);
    if (source == undefined) return new this();
    A = [];
    if (mapping) {
      n = 0;
      cb = ctx(mapFn, arguments[2], 2);
      forOf(source, false, function (nextItem) {
        A.push(cb(nextItem, n++));
      });
    } else {
      forOf(source, false, A.push, A);
    }
    return new this(A);
  } });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-collection-of.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-collection-of.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { of: function of() {
    var length = arguments.length;
    var A = new Array(length);
    while (length--) A[length] = arguments[length];
    return new this(A);
  } });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-proto.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-proto.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js")(Function.call, __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/library/modules/_object-gopd.js").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-species.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-species.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-to-string-tag.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-to-string-tag.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared-key.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared-key.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_species-constructor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_species-constructor.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_string-at.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_string-at.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_task.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_task.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var invoke = __webpack_require__(/*! ./_invoke */ "./node_modules/core-js/library/modules/_invoke.js");
var html = __webpack_require__(/*! ./_html */ "./node_modules/core-js/library/modules/_html.js");
var cel = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/library/modules/_dom-create.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js")(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-absolute-index.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-absolute-index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-integer.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-integer.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-iobject.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-iobject.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/library/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-length.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-length.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-primitive.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-primitive.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_uid.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_uid.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_user-agent.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_user-agent.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),

/***/ "./node_modules/core-js/library/modules/_validate-collection.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_validate-collection.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks-define.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks-define.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/library/modules/_wks-ext.js");
var defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks-ext.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks-ext.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js");


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/core-js/library/modules/core.get-iterator-method.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/core.get-iterator-method.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/library/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/core.get-iterator.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/core.get-iterator.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var get = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/library/modules/core.get-iterator-method.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js").getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.array.is-array.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.array.is-array.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");

$export($export.S, 'Array', { isArray: __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/library/modules/_is-array.js") });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.array.iterator.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.array.iterator.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/library/modules/_add-to-unscopables.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/library/modules/_iter-step.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/library/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.map.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.map.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(/*! ./_collection-strong */ "./node_modules/core-js/library/modules/_collection-strong.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/library/modules/_validate-collection.js");
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/library/modules/_collection.js")(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.assign.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.assign.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(/*! ./_object-assign */ "./node_modules/core-js/library/modules/_object-assign.js") });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.create.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.create.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js") });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.define-property.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.define-property.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js"), 'Object', { defineProperty: __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var $getOwnPropertyDescriptor = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/library/modules/_object-gopd.js").f;

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/library/modules/_object-sap.js")('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.get-prototype-of.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.get-prototype-of.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var $getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/library/modules/_object-gpo.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/library/modules/_object-sap.js")('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.keys.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.keys.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/library/modules/_object-sap.js")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.set-prototype-of.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.set-prototype-of.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/library/modules/_set-proto.js").set });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.to-string.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.to-string.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.promise.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.promise.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/library/modules/_classof.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/library/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/library/modules/_for-of.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/library/modules/_species-constructor.js");
var task = __webpack_require__(/*! ./_task */ "./node_modules/core-js/library/modules/_task.js").set;
var microtask = __webpack_require__(/*! ./_microtask */ "./node_modules/core-js/library/modules/_microtask.js")();
var newPromiseCapabilityModule = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/core-js/library/modules/_new-promise-capability.js");
var perform = __webpack_require__(/*! ./_perform */ "./node_modules/core-js/library/modules/_perform.js");
var userAgent = __webpack_require__(/*! ./_user-agent */ "./node_modules/core-js/library/modules/_user-agent.js");
var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ "./node_modules/core-js/library/modules/_promise-resolve.js");
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/library/modules/_redefine-all.js")($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js")($Promise, PROMISE);
__webpack_require__(/*! ./_set-species */ "./node_modules/core-js/library/modules/_set-species.js")(PROMISE);
Wrapper = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js")[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/library/modules/_iter-detect.js")(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.reflect.construct.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.reflect.construct.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js");
var bind = __webpack_require__(/*! ./_bind */ "./node_modules/core-js/library/modules/_bind.js");
var rConstruct = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").Reflect || {}).construct;

// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() { /* empty */ }
  return !(rConstruct(function () { /* empty */ }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
  rConstruct(function () { /* empty */ });
});

$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
  construct: function construct(Target, args /* , newTarget */) {
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.string.iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.string.iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/library/modules/_string-at.js")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/library/modules/_iter-define.js")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.symbol.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.symbol.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/library/modules/_redefine.js");
var META = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/library/modules/_meta.js").KEY;
var $fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js");
var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/library/modules/_wks-ext.js");
var wksDefine = __webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/library/modules/_wks-define.js");
var enumKeys = __webpack_require__(/*! ./_enum-keys */ "./node_modules/core-js/library/modules/_enum-keys.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/library/modules/_is-array.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
var _create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js");
var gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/core-js/library/modules/_object-gopn-ext.js");
var $GOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/library/modules/_object-gopd.js");
var $GOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/library/modules/_object-gops.js");
var $DP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/library/modules/_object-gopn.js").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js").f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.map.from.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.map.from.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
__webpack_require__(/*! ./_set-collection-from */ "./node_modules/core-js/library/modules/_set-collection-from.js")('Map');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.map.of.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.map.of.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
__webpack_require__(/*! ./_set-collection-of */ "./node_modules/core-js/library/modules/_set-collection-of.js")('Map');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.map.to-json.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.map.to-json.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");

$export($export.P + $export.R, 'Map', { toJSON: __webpack_require__(/*! ./_collection-to-json */ "./node_modules/core-js/library/modules/_collection-to-json.js")('Map') });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.promise.finally.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.promise.finally.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/library/modules/_species-constructor.js");
var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ "./node_modules/core-js/library/modules/_promise-resolve.js");

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.promise.try.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.promise.try.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/core-js/library/modules/_new-promise-capability.js");
var perform = __webpack_require__(/*! ./_perform */ "./node_modules/core-js/library/modules/_perform.js");

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.symbol.async-iterator.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.symbol.async-iterator.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/library/modules/_wks-define.js")('asyncIterator');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.symbol.observable.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.symbol.observable.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/library/modules/_wks-define.js")('observable');


/***/ }),

/***/ "./node_modules/core-js/library/modules/web.dom.iterable.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/web.dom.iterable.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./es6.array.iterator */ "./node_modules/core-js/library/modules/es6.array.iterator.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var TO_STRING_TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "./node_modules/define-properties/index.js":
/*!*************************************************!*\
  !*** ./node_modules/define-properties/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keys = __webpack_require__(/*! object-keys */ "./node_modules/object-keys/index.js");
var hasSymbols = typeof Symbol === 'function' && typeof Symbol('foo') === 'symbol';

var toStr = Object.prototype.toString;
var concat = Array.prototype.concat;
var origDefineProperty = Object.defineProperty;

var isFunction = function (fn) {
	return typeof fn === 'function' && toStr.call(fn) === '[object Function]';
};

var arePropertyDescriptorsSupported = function () {
	var obj = {};
	try {
		origDefineProperty(obj, 'x', { enumerable: false, value: obj });
		// eslint-disable-next-line no-unused-vars, no-restricted-syntax
		for (var _ in obj) { // jscs:ignore disallowUnusedVariables
			return false;
		}
		return obj.x === obj;
	} catch (e) { /* this is IE 8. */
		return false;
	}
};
var supportsDescriptors = origDefineProperty && arePropertyDescriptorsSupported();

var defineProperty = function (object, name, value, predicate) {
	if (name in object && (!isFunction(predicate) || !predicate())) {
		return;
	}
	if (supportsDescriptors) {
		origDefineProperty(object, name, {
			configurable: true,
			enumerable: false,
			value: value,
			writable: true
		});
	} else {
		object[name] = value;
	}
};

var defineProperties = function (object, map) {
	var predicates = arguments.length > 2 ? arguments[2] : {};
	var props = keys(map);
	if (hasSymbols) {
		props = concat.call(props, Object.getOwnPropertySymbols(map));
	}
	for (var i = 0; i < props.length; i += 1) {
		defineProperty(object, props[i], map[props[i]], predicates[props[i]]);
	}
};

defineProperties.supportsDescriptors = !!supportsDescriptors;

module.exports = defineProperties;


/***/ }),

/***/ "./node_modules/function-bind/implementation.js":
/*!******************************************************!*\
  !*** ./node_modules/function-bind/implementation.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};


/***/ }),

/***/ "./node_modules/function-bind/index.js":
/*!*********************************************!*\
  !*** ./node_modules/function-bind/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/function-bind/implementation.js");

module.exports = Function.prototype.bind || implementation;


/***/ }),

/***/ "./node_modules/has-symbols/shams.js":
/*!*******************************************!*\
  !*** ./node_modules/has-symbols/shams.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint complexity: [2, 17], max-statements: [2, 33] */
module.exports = function hasSymbols() {
	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
	if (typeof Symbol.iterator === 'symbol') { return true; }

	var obj = {};
	var sym = Symbol('test');
	var symObj = Object(sym);
	if (typeof sym === 'string') { return false; }

	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

	// temp disabled per https://github.com/ljharb/object.assign/issues/17
	// if (sym instanceof Symbol) { return false; }
	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
	// if (!(symObj instanceof Symbol)) { return false; }

	// if (typeof Symbol.prototype.toString !== 'function') { return false; }
	// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

	var symVal = 42;
	obj[sym] = symVal;
	for (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax
	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

	var syms = Object.getOwnPropertySymbols(obj);
	if (syms.length !== 1 || syms[0] !== sym) { return false; }

	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

	if (typeof Object.getOwnPropertyDescriptor === 'function') {
		var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
	}

	return true;
};


/***/ }),

/***/ "./node_modules/has/src/index.js":
/*!***************************************!*\
  !*** ./node_modules/has/src/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


/***/ }),

/***/ "./node_modules/intl-messageformat-parser/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/intl-messageformat-parser/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports = module.exports = __webpack_require__(/*! ./lib/parser */ "./node_modules/intl-messageformat-parser/lib/parser.js")['default'];
exports['default'] = exports;


/***/ }),

/***/ "./node_modules/intl-messageformat-parser/lib/parser.js":
/*!**************************************************************!*\
  !*** ./node_modules/intl-messageformat-parser/lib/parser.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports["default"] = (function() {
  "use strict";

  /*
   * Generated by PEG.js 0.9.0.
   *
   * http://pegjs.org/
   */

  function peg$subclass(child, parent) {
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor();
  }

  function peg$SyntaxError(message, expected, found, location) {
    this.message  = message;
    this.expected = expected;
    this.found    = found;
    this.location = location;
    this.name     = "SyntaxError";

    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, peg$SyntaxError);
    }
  }

  peg$subclass(peg$SyntaxError, Error);

  function peg$parse(input) {
    var options = arguments.length > 1 ? arguments[1] : {},
        parser  = this,

        peg$FAILED = {},

        peg$startRuleFunctions = { start: peg$parsestart },
        peg$startRuleFunction  = peg$parsestart,

        peg$c0 = function(elements) {
                return {
                    type    : 'messageFormatPattern',
                    elements: elements,
                    location: location()
                };
            },
        peg$c1 = function(text) {
                var string = '',
                    i, j, outerLen, inner, innerLen;

                for (i = 0, outerLen = text.length; i < outerLen; i += 1) {
                    inner = text[i];

                    for (j = 0, innerLen = inner.length; j < innerLen; j += 1) {
                        string += inner[j];
                    }
                }

                return string;
            },
        peg$c2 = function(messageText) {
                return {
                    type : 'messageTextElement',
                    value: messageText,
                    location: location()
                };
            },
        peg$c3 = /^[^ \t\n\r,.+={}#]/,
        peg$c4 = { type: "class", value: "[^ \\t\\n\\r,.+={}#]", description: "[^ \\t\\n\\r,.+={}#]" },
        peg$c5 = "{",
        peg$c6 = { type: "literal", value: "{", description: "\"{\"" },
        peg$c7 = ",",
        peg$c8 = { type: "literal", value: ",", description: "\",\"" },
        peg$c9 = "}",
        peg$c10 = { type: "literal", value: "}", description: "\"}\"" },
        peg$c11 = function(id, format) {
                return {
                    type  : 'argumentElement',
                    id    : id,
                    format: format && format[2],
                    location: location()
                };
            },
        peg$c12 = "number",
        peg$c13 = { type: "literal", value: "number", description: "\"number\"" },
        peg$c14 = "date",
        peg$c15 = { type: "literal", value: "date", description: "\"date\"" },
        peg$c16 = "time",
        peg$c17 = { type: "literal", value: "time", description: "\"time\"" },
        peg$c18 = function(type, style) {
                return {
                    type : type + 'Format',
                    style: style && style[2],
                    location: location()
                };
            },
        peg$c19 = "plural",
        peg$c20 = { type: "literal", value: "plural", description: "\"plural\"" },
        peg$c21 = function(pluralStyle) {
                return {
                    type   : pluralStyle.type,
                    ordinal: false,
                    offset : pluralStyle.offset || 0,
                    options: pluralStyle.options,
                    location: location()
                };
            },
        peg$c22 = "selectordinal",
        peg$c23 = { type: "literal", value: "selectordinal", description: "\"selectordinal\"" },
        peg$c24 = function(pluralStyle) {
                return {
                    type   : pluralStyle.type,
                    ordinal: true,
                    offset : pluralStyle.offset || 0,
                    options: pluralStyle.options,
                    location: location()
                }
            },
        peg$c25 = "select",
        peg$c26 = { type: "literal", value: "select", description: "\"select\"" },
        peg$c27 = function(options) {
                return {
                    type   : 'selectFormat',
                    options: options,
                    location: location()
                };
            },
        peg$c28 = "=",
        peg$c29 = { type: "literal", value: "=", description: "\"=\"" },
        peg$c30 = function(selector, pattern) {
                return {
                    type    : 'optionalFormatPattern',
                    selector: selector,
                    value   : pattern,
                    location: location()
                };
            },
        peg$c31 = "offset:",
        peg$c32 = { type: "literal", value: "offset:", description: "\"offset:\"" },
        peg$c33 = function(number) {
                return number;
            },
        peg$c34 = function(offset, options) {
                return {
                    type   : 'pluralFormat',
                    offset : offset,
                    options: options,
                    location: location()
                };
            },
        peg$c35 = { type: "other", description: "whitespace" },
        peg$c36 = /^[ \t\n\r]/,
        peg$c37 = { type: "class", value: "[ \\t\\n\\r]", description: "[ \\t\\n\\r]" },
        peg$c38 = { type: "other", description: "optionalWhitespace" },
        peg$c39 = /^[0-9]/,
        peg$c40 = { type: "class", value: "[0-9]", description: "[0-9]" },
        peg$c41 = /^[0-9a-f]/i,
        peg$c42 = { type: "class", value: "[0-9a-f]i", description: "[0-9a-f]i" },
        peg$c43 = "0",
        peg$c44 = { type: "literal", value: "0", description: "\"0\"" },
        peg$c45 = /^[1-9]/,
        peg$c46 = { type: "class", value: "[1-9]", description: "[1-9]" },
        peg$c47 = function(digits) {
            return parseInt(digits, 10);
        },
        peg$c48 = /^[^{}\\\0-\x1F \t\n\r]/,
        peg$c49 = { type: "class", value: "[^{}\\\\\\0-\\x1F\\x7f \\t\\n\\r]", description: "[^{}\\\\\\0-\\x1F\\x7f \\t\\n\\r]" },
        peg$c50 = "\\\\",
        peg$c51 = { type: "literal", value: "\\\\", description: "\"\\\\\\\\\"" },
        peg$c52 = function() { return '\\'; },
        peg$c53 = "\\#",
        peg$c54 = { type: "literal", value: "\\#", description: "\"\\\\#\"" },
        peg$c55 = function() { return '\\#'; },
        peg$c56 = "\\{",
        peg$c57 = { type: "literal", value: "\\{", description: "\"\\\\{\"" },
        peg$c58 = function() { return '\u007B'; },
        peg$c59 = "\\}",
        peg$c60 = { type: "literal", value: "\\}", description: "\"\\\\}\"" },
        peg$c61 = function() { return '\u007D'; },
        peg$c62 = "\\u",
        peg$c63 = { type: "literal", value: "\\u", description: "\"\\\\u\"" },
        peg$c64 = function(digits) {
                return String.fromCharCode(parseInt(digits, 16));
            },
        peg$c65 = function(chars) { return chars.join(''); },

        peg$currPos          = 0,
        peg$savedPos         = 0,
        peg$posDetailsCache  = [{ line: 1, column: 1, seenCR: false }],
        peg$maxFailPos       = 0,
        peg$maxFailExpected  = [],
        peg$silentFails      = 0,

        peg$result;

    if ("startRule" in options) {
      if (!(options.startRule in peg$startRuleFunctions)) {
        throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
      }

      peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
    }

    function text() {
      return input.substring(peg$savedPos, peg$currPos);
    }

    function location() {
      return peg$computeLocation(peg$savedPos, peg$currPos);
    }

    function expected(description) {
      throw peg$buildException(
        null,
        [{ type: "other", description: description }],
        input.substring(peg$savedPos, peg$currPos),
        peg$computeLocation(peg$savedPos, peg$currPos)
      );
    }

    function error(message) {
      throw peg$buildException(
        message,
        null,
        input.substring(peg$savedPos, peg$currPos),
        peg$computeLocation(peg$savedPos, peg$currPos)
      );
    }

    function peg$computePosDetails(pos) {
      var details = peg$posDetailsCache[pos],
          p, ch;

      if (details) {
        return details;
      } else {
        p = pos - 1;
        while (!peg$posDetailsCache[p]) {
          p--;
        }

        details = peg$posDetailsCache[p];
        details = {
          line:   details.line,
          column: details.column,
          seenCR: details.seenCR
        };

        while (p < pos) {
          ch = input.charAt(p);
          if (ch === "\n") {
            if (!details.seenCR) { details.line++; }
            details.column = 1;
            details.seenCR = false;
          } else if (ch === "\r" || ch === "\u2028" || ch === "\u2029") {
            details.line++;
            details.column = 1;
            details.seenCR = true;
          } else {
            details.column++;
            details.seenCR = false;
          }

          p++;
        }

        peg$posDetailsCache[pos] = details;
        return details;
      }
    }

    function peg$computeLocation(startPos, endPos) {
      var startPosDetails = peg$computePosDetails(startPos),
          endPosDetails   = peg$computePosDetails(endPos);

      return {
        start: {
          offset: startPos,
          line:   startPosDetails.line,
          column: startPosDetails.column
        },
        end: {
          offset: endPos,
          line:   endPosDetails.line,
          column: endPosDetails.column
        }
      };
    }

    function peg$fail(expected) {
      if (peg$currPos < peg$maxFailPos) { return; }

      if (peg$currPos > peg$maxFailPos) {
        peg$maxFailPos = peg$currPos;
        peg$maxFailExpected = [];
      }

      peg$maxFailExpected.push(expected);
    }

    function peg$buildException(message, expected, found, location) {
      function cleanupExpected(expected) {
        var i = 1;

        expected.sort(function(a, b) {
          if (a.description < b.description) {
            return -1;
          } else if (a.description > b.description) {
            return 1;
          } else {
            return 0;
          }
        });

        while (i < expected.length) {
          if (expected[i - 1] === expected[i]) {
            expected.splice(i, 1);
          } else {
            i++;
          }
        }
      }

      function buildMessage(expected, found) {
        function stringEscape(s) {
          function hex(ch) { return ch.charCodeAt(0).toString(16).toUpperCase(); }

          return s
            .replace(/\\/g,   '\\\\')
            .replace(/"/g,    '\\"')
            .replace(/\x08/g, '\\b')
            .replace(/\t/g,   '\\t')
            .replace(/\n/g,   '\\n')
            .replace(/\f/g,   '\\f')
            .replace(/\r/g,   '\\r')
            .replace(/[\x00-\x07\x0B\x0E\x0F]/g, function(ch) { return '\\x0' + hex(ch); })
            .replace(/[\x10-\x1F\x80-\xFF]/g,    function(ch) { return '\\x'  + hex(ch); })
            .replace(/[\u0100-\u0FFF]/g,         function(ch) { return '\\u0' + hex(ch); })
            .replace(/[\u1000-\uFFFF]/g,         function(ch) { return '\\u'  + hex(ch); });
        }

        var expectedDescs = new Array(expected.length),
            expectedDesc, foundDesc, i;

        for (i = 0; i < expected.length; i++) {
          expectedDescs[i] = expected[i].description;
        }

        expectedDesc = expected.length > 1
          ? expectedDescs.slice(0, -1).join(", ")
              + " or "
              + expectedDescs[expected.length - 1]
          : expectedDescs[0];

        foundDesc = found ? "\"" + stringEscape(found) + "\"" : "end of input";

        return "Expected " + expectedDesc + " but " + foundDesc + " found.";
      }

      if (expected !== null) {
        cleanupExpected(expected);
      }

      return new peg$SyntaxError(
        message !== null ? message : buildMessage(expected, found),
        expected,
        found,
        location
      );
    }

    function peg$parsestart() {
      var s0;

      s0 = peg$parsemessageFormatPattern();

      return s0;
    }

    function peg$parsemessageFormatPattern() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parsemessageFormatElement();
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parsemessageFormatElement();
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c0(s1);
      }
      s0 = s1;

      return s0;
    }

    function peg$parsemessageFormatElement() {
      var s0;

      s0 = peg$parsemessageTextElement();
      if (s0 === peg$FAILED) {
        s0 = peg$parseargumentElement();
      }

      return s0;
    }

    function peg$parsemessageText() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$currPos;
      s3 = peg$parse_();
      if (s3 !== peg$FAILED) {
        s4 = peg$parsechars();
        if (s4 !== peg$FAILED) {
          s5 = peg$parse_();
          if (s5 !== peg$FAILED) {
            s3 = [s3, s4, s5];
            s2 = s3;
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }
      if (s2 !== peg$FAILED) {
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          s2 = peg$currPos;
          s3 = peg$parse_();
          if (s3 !== peg$FAILED) {
            s4 = peg$parsechars();
            if (s4 !== peg$FAILED) {
              s5 = peg$parse_();
              if (s5 !== peg$FAILED) {
                s3 = [s3, s4, s5];
                s2 = s3;
              } else {
                peg$currPos = s2;
                s2 = peg$FAILED;
              }
            } else {
              peg$currPos = s2;
              s2 = peg$FAILED;
            }
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
        }
      } else {
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c1(s1);
      }
      s0 = s1;
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parsews();
        if (s1 !== peg$FAILED) {
          s0 = input.substring(s0, peg$currPos);
        } else {
          s0 = s1;
        }
      }

      return s0;
    }

    function peg$parsemessageTextElement() {
      var s0, s1;

      s0 = peg$currPos;
      s1 = peg$parsemessageText();
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c2(s1);
      }
      s0 = s1;

      return s0;
    }

    function peg$parseargument() {
      var s0, s1, s2;

      s0 = peg$parsenumber();
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = [];
        if (peg$c3.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c4); }
        }
        if (s2 !== peg$FAILED) {
          while (s2 !== peg$FAILED) {
            s1.push(s2);
            if (peg$c3.test(input.charAt(peg$currPos))) {
              s2 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s2 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c4); }
            }
          }
        } else {
          s1 = peg$FAILED;
        }
        if (s1 !== peg$FAILED) {
          s0 = input.substring(s0, peg$currPos);
        } else {
          s0 = s1;
        }
      }

      return s0;
    }

    function peg$parseargumentElement() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8;

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 123) {
        s1 = peg$c5;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c6); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseargument();
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              s5 = peg$currPos;
              if (input.charCodeAt(peg$currPos) === 44) {
                s6 = peg$c7;
                peg$currPos++;
              } else {
                s6 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c8); }
              }
              if (s6 !== peg$FAILED) {
                s7 = peg$parse_();
                if (s7 !== peg$FAILED) {
                  s8 = peg$parseelementFormat();
                  if (s8 !== peg$FAILED) {
                    s6 = [s6, s7, s8];
                    s5 = s6;
                  } else {
                    peg$currPos = s5;
                    s5 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s5;
                  s5 = peg$FAILED;
                }
              } else {
                peg$currPos = s5;
                s5 = peg$FAILED;
              }
              if (s5 === peg$FAILED) {
                s5 = null;
              }
              if (s5 !== peg$FAILED) {
                s6 = peg$parse_();
                if (s6 !== peg$FAILED) {
                  if (input.charCodeAt(peg$currPos) === 125) {
                    s7 = peg$c9;
                    peg$currPos++;
                  } else {
                    s7 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c10); }
                  }
                  if (s7 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c11(s3, s5);
                    s0 = s1;
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseelementFormat() {
      var s0;

      s0 = peg$parsesimpleFormat();
      if (s0 === peg$FAILED) {
        s0 = peg$parsepluralFormat();
        if (s0 === peg$FAILED) {
          s0 = peg$parseselectOrdinalFormat();
          if (s0 === peg$FAILED) {
            s0 = peg$parseselectFormat();
          }
        }
      }

      return s0;
    }

    function peg$parsesimpleFormat() {
      var s0, s1, s2, s3, s4, s5, s6;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 6) === peg$c12) {
        s1 = peg$c12;
        peg$currPos += 6;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c13); }
      }
      if (s1 === peg$FAILED) {
        if (input.substr(peg$currPos, 4) === peg$c14) {
          s1 = peg$c14;
          peg$currPos += 4;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c15); }
        }
        if (s1 === peg$FAILED) {
          if (input.substr(peg$currPos, 4) === peg$c16) {
            s1 = peg$c16;
            peg$currPos += 4;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c17); }
          }
        }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          s3 = peg$currPos;
          if (input.charCodeAt(peg$currPos) === 44) {
            s4 = peg$c7;
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c8); }
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$parse_();
            if (s5 !== peg$FAILED) {
              s6 = peg$parsechars();
              if (s6 !== peg$FAILED) {
                s4 = [s4, s5, s6];
                s3 = s4;
              } else {
                peg$currPos = s3;
                s3 = peg$FAILED;
              }
            } else {
              peg$currPos = s3;
              s3 = peg$FAILED;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$FAILED;
          }
          if (s3 === peg$FAILED) {
            s3 = null;
          }
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c18(s1, s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parsepluralFormat() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 6) === peg$c19) {
        s1 = peg$c19;
        peg$currPos += 6;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c20); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 44) {
            s3 = peg$c7;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c8); }
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              s5 = peg$parsepluralStyle();
              if (s5 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c21(s5);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseselectOrdinalFormat() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 13) === peg$c22) {
        s1 = peg$c22;
        peg$currPos += 13;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c23); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 44) {
            s3 = peg$c7;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c8); }
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              s5 = peg$parsepluralStyle();
              if (s5 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c24(s5);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseselectFormat() {
      var s0, s1, s2, s3, s4, s5, s6;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 6) === peg$c25) {
        s1 = peg$c25;
        peg$currPos += 6;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c26); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 44) {
            s3 = peg$c7;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c8); }
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parse_();
            if (s4 !== peg$FAILED) {
              s5 = [];
              s6 = peg$parseoptionalFormatPattern();
              if (s6 !== peg$FAILED) {
                while (s6 !== peg$FAILED) {
                  s5.push(s6);
                  s6 = peg$parseoptionalFormatPattern();
                }
              } else {
                s5 = peg$FAILED;
              }
              if (s5 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c27(s5);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseselector() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      s1 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 61) {
        s2 = peg$c28;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c29); }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parsenumber();
        if (s3 !== peg$FAILED) {
          s2 = [s2, s3];
          s1 = s2;
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        s0 = input.substring(s0, peg$currPos);
      } else {
        s0 = s1;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$parsechars();
      }

      return s0;
    }

    function peg$parseoptionalFormatPattern() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8;

      s0 = peg$currPos;
      s1 = peg$parse_();
      if (s1 !== peg$FAILED) {
        s2 = peg$parseselector();
        if (s2 !== peg$FAILED) {
          s3 = peg$parse_();
          if (s3 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 123) {
              s4 = peg$c5;
              peg$currPos++;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c6); }
            }
            if (s4 !== peg$FAILED) {
              s5 = peg$parse_();
              if (s5 !== peg$FAILED) {
                s6 = peg$parsemessageFormatPattern();
                if (s6 !== peg$FAILED) {
                  s7 = peg$parse_();
                  if (s7 !== peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 125) {
                      s8 = peg$c9;
                      peg$currPos++;
                    } else {
                      s8 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c10); }
                    }
                    if (s8 !== peg$FAILED) {
                      peg$savedPos = s0;
                      s1 = peg$c30(s2, s6);
                      s0 = s1;
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parseoffset() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 7) === peg$c31) {
        s1 = peg$c31;
        peg$currPos += 7;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c32); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          s3 = peg$parsenumber();
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c33(s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parsepluralStyle() {
      var s0, s1, s2, s3, s4;

      s0 = peg$currPos;
      s1 = peg$parseoffset();
      if (s1 === peg$FAILED) {
        s1 = null;
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_();
        if (s2 !== peg$FAILED) {
          s3 = [];
          s4 = peg$parseoptionalFormatPattern();
          if (s4 !== peg$FAILED) {
            while (s4 !== peg$FAILED) {
              s3.push(s4);
              s4 = peg$parseoptionalFormatPattern();
            }
          } else {
            s3 = peg$FAILED;
          }
          if (s3 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c34(s1, s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }

      return s0;
    }

    function peg$parsews() {
      var s0, s1;

      peg$silentFails++;
      s0 = [];
      if (peg$c36.test(input.charAt(peg$currPos))) {
        s1 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c37); }
      }
      if (s1 !== peg$FAILED) {
        while (s1 !== peg$FAILED) {
          s0.push(s1);
          if (peg$c36.test(input.charAt(peg$currPos))) {
            s1 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c37); }
          }
        }
      } else {
        s0 = peg$FAILED;
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c35); }
      }

      return s0;
    }

    function peg$parse_() {
      var s0, s1, s2;

      peg$silentFails++;
      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parsews();
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parsews();
      }
      if (s1 !== peg$FAILED) {
        s0 = input.substring(s0, peg$currPos);
      } else {
        s0 = s1;
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c38); }
      }

      return s0;
    }

    function peg$parsedigit() {
      var s0;

      if (peg$c39.test(input.charAt(peg$currPos))) {
        s0 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c40); }
      }

      return s0;
    }

    function peg$parsehexDigit() {
      var s0;

      if (peg$c41.test(input.charAt(peg$currPos))) {
        s0 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c42); }
      }

      return s0;
    }

    function peg$parsenumber() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 48) {
        s1 = peg$c43;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c44); }
      }
      if (s1 === peg$FAILED) {
        s1 = peg$currPos;
        s2 = peg$currPos;
        if (peg$c45.test(input.charAt(peg$currPos))) {
          s3 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c46); }
        }
        if (s3 !== peg$FAILED) {
          s4 = [];
          s5 = peg$parsedigit();
          while (s5 !== peg$FAILED) {
            s4.push(s5);
            s5 = peg$parsedigit();
          }
          if (s4 !== peg$FAILED) {
            s3 = [s3, s4];
            s2 = s3;
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
        if (s2 !== peg$FAILED) {
          s1 = input.substring(s1, peg$currPos);
        } else {
          s1 = s2;
        }
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c47(s1);
      }
      s0 = s1;

      return s0;
    }

    function peg$parsechar() {
      var s0, s1, s2, s3, s4, s5, s6, s7;

      if (peg$c48.test(input.charAt(peg$currPos))) {
        s0 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c49); }
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        if (input.substr(peg$currPos, 2) === peg$c50) {
          s1 = peg$c50;
          peg$currPos += 2;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c51); }
        }
        if (s1 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c52();
        }
        s0 = s1;
        if (s0 === peg$FAILED) {
          s0 = peg$currPos;
          if (input.substr(peg$currPos, 2) === peg$c53) {
            s1 = peg$c53;
            peg$currPos += 2;
          } else {
            s1 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c54); }
          }
          if (s1 !== peg$FAILED) {
            peg$savedPos = s0;
            s1 = peg$c55();
          }
          s0 = s1;
          if (s0 === peg$FAILED) {
            s0 = peg$currPos;
            if (input.substr(peg$currPos, 2) === peg$c56) {
              s1 = peg$c56;
              peg$currPos += 2;
            } else {
              s1 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c57); }
            }
            if (s1 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c58();
            }
            s0 = s1;
            if (s0 === peg$FAILED) {
              s0 = peg$currPos;
              if (input.substr(peg$currPos, 2) === peg$c59) {
                s1 = peg$c59;
                peg$currPos += 2;
              } else {
                s1 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c60); }
              }
              if (s1 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c61();
              }
              s0 = s1;
              if (s0 === peg$FAILED) {
                s0 = peg$currPos;
                if (input.substr(peg$currPos, 2) === peg$c62) {
                  s1 = peg$c62;
                  peg$currPos += 2;
                } else {
                  s1 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c63); }
                }
                if (s1 !== peg$FAILED) {
                  s2 = peg$currPos;
                  s3 = peg$currPos;
                  s4 = peg$parsehexDigit();
                  if (s4 !== peg$FAILED) {
                    s5 = peg$parsehexDigit();
                    if (s5 !== peg$FAILED) {
                      s6 = peg$parsehexDigit();
                      if (s6 !== peg$FAILED) {
                        s7 = peg$parsehexDigit();
                        if (s7 !== peg$FAILED) {
                          s4 = [s4, s5, s6, s7];
                          s3 = s4;
                        } else {
                          peg$currPos = s3;
                          s3 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s3;
                        s3 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s3;
                      s3 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s3;
                    s3 = peg$FAILED;
                  }
                  if (s3 !== peg$FAILED) {
                    s2 = input.substring(s2, peg$currPos);
                  } else {
                    s2 = s3;
                  }
                  if (s2 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c64(s2);
                    s0 = s1;
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              }
            }
          }
        }
      }

      return s0;
    }

    function peg$parsechars() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parsechar();
      if (s2 !== peg$FAILED) {
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          s2 = peg$parsechar();
        }
      } else {
        s1 = peg$FAILED;
      }
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c65(s1);
      }
      s0 = s1;

      return s0;
    }

    peg$result = peg$startRuleFunction();

    if (peg$result !== peg$FAILED && peg$currPos === input.length) {
      return peg$result;
    } else {
      if (peg$result !== peg$FAILED && peg$currPos < input.length) {
        peg$fail({ type: "end", description: "end of input" });
      }

      throw peg$buildException(
        null,
        peg$maxFailExpected,
        peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null,
        peg$maxFailPos < input.length
          ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1)
          : peg$computeLocation(peg$maxFailPos, peg$maxFailPos)
      );
    }
  }

  return {
    SyntaxError: peg$SyntaxError,
    parse:       peg$parse
  };
})();

//# sourceMappingURL=parser.js.map

/***/ }),

/***/ "./node_modules/intl-messageformat/index.js":
/*!**************************************************!*\
  !*** ./node_modules/intl-messageformat/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* jshint node:true */



var IntlMessageFormat = __webpack_require__(/*! ./lib/main */ "./node_modules/intl-messageformat/lib/main.js")['default'];

// Add all locale data to `IntlMessageFormat`. This module will be ignored when
// bundling for the browser with Browserify/Webpack.
__webpack_require__(/*! ./lib/locales */ 2);

// Re-export `IntlMessageFormat` as the CommonJS default exports with all the
// locale data registered, and with English set as the default locale. Define
// the `default` prop for use with other compiled ES6 Modules.
exports = module.exports = IntlMessageFormat;
exports['default'] = exports;


/***/ }),

/***/ "./node_modules/intl-messageformat/lib/compiler.js":
/*!*********************************************************!*\
  !*** ./node_modules/intl-messageformat/lib/compiler.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
Copyright (c) 2014, Yahoo! Inc. All rights reserved.
Copyrights licensed under the New BSD License.
See the accompanying LICENSE file for terms.
*/

/* jslint esnext: true */


exports["default"] = Compiler;

function Compiler(locales, formats, pluralFn) {
    this.locales  = locales;
    this.formats  = formats;
    this.pluralFn = pluralFn;
}

Compiler.prototype.compile = function (ast) {
    this.pluralStack        = [];
    this.currentPlural      = null;
    this.pluralNumberFormat = null;

    return this.compileMessage(ast);
};

Compiler.prototype.compileMessage = function (ast) {
    if (!(ast && ast.type === 'messageFormatPattern')) {
        throw new Error('Message AST is not of type: "messageFormatPattern"');
    }

    var elements = ast.elements,
        pattern  = [];

    var i, len, element;

    for (i = 0, len = elements.length; i < len; i += 1) {
        element = elements[i];

        switch (element.type) {
            case 'messageTextElement':
                pattern.push(this.compileMessageText(element));
                break;

            case 'argumentElement':
                pattern.push(this.compileArgument(element));
                break;

            default:
                throw new Error('Message element does not have a valid type');
        }
    }

    return pattern;
};

Compiler.prototype.compileMessageText = function (element) {
    // When this `element` is part of plural sub-pattern and its value contains
    // an unescaped '#', use a `PluralOffsetString` helper to properly output
    // the number with the correct offset in the string.
    if (this.currentPlural && /(^|[^\\])#/g.test(element.value)) {
        // Create a cache a NumberFormat instance that can be reused for any
        // PluralOffsetString instance in this message.
        if (!this.pluralNumberFormat) {
            this.pluralNumberFormat = new Intl.NumberFormat(this.locales);
        }

        return new PluralOffsetString(
                this.currentPlural.id,
                this.currentPlural.format.offset,
                this.pluralNumberFormat,
                element.value);
    }

    // Unescape the escaped '#'s in the message text.
    return element.value.replace(/\\#/g, '#');
};

Compiler.prototype.compileArgument = function (element) {
    var format = element.format;

    if (!format) {
        return new StringFormat(element.id);
    }

    var formats  = this.formats,
        locales  = this.locales,
        pluralFn = this.pluralFn,
        options;

    switch (format.type) {
        case 'numberFormat':
            options = formats.number[format.style];
            return {
                id    : element.id,
                format: new Intl.NumberFormat(locales, options).format
            };

        case 'dateFormat':
            options = formats.date[format.style];
            return {
                id    : element.id,
                format: new Intl.DateTimeFormat(locales, options).format
            };

        case 'timeFormat':
            options = formats.time[format.style];
            return {
                id    : element.id,
                format: new Intl.DateTimeFormat(locales, options).format
            };

        case 'pluralFormat':
            options = this.compileOptions(element);
            return new PluralFormat(
                element.id, format.ordinal, format.offset, options, pluralFn
            );

        case 'selectFormat':
            options = this.compileOptions(element);
            return new SelectFormat(element.id, options);

        default:
            throw new Error('Message element does not have a valid format type');
    }
};

Compiler.prototype.compileOptions = function (element) {
    var format      = element.format,
        options     = format.options,
        optionsHash = {};

    // Save the current plural element, if any, then set it to a new value when
    // compiling the options sub-patterns. This conforms the spec's algorithm
    // for handling `"#"` syntax in message text.
    this.pluralStack.push(this.currentPlural);
    this.currentPlural = format.type === 'pluralFormat' ? element : null;

    var i, len, option;

    for (i = 0, len = options.length; i < len; i += 1) {
        option = options[i];

        // Compile the sub-pattern and save it under the options's selector.
        optionsHash[option.selector] = this.compileMessage(option.value);
    }

    // Pop the plural stack to put back the original current plural value.
    this.currentPlural = this.pluralStack.pop();

    return optionsHash;
};

// -- Compiler Helper Classes --------------------------------------------------

function StringFormat(id) {
    this.id = id;
}

StringFormat.prototype.format = function (value) {
    if (!value && typeof value !== 'number') {
        return '';
    }

    return typeof value === 'string' ? value : String(value);
};

function PluralFormat(id, useOrdinal, offset, options, pluralFn) {
    this.id         = id;
    this.useOrdinal = useOrdinal;
    this.offset     = offset;
    this.options    = options;
    this.pluralFn   = pluralFn;
}

PluralFormat.prototype.getOption = function (value) {
    var options = this.options;

    var option = options['=' + value] ||
            options[this.pluralFn(value - this.offset, this.useOrdinal)];

    return option || options.other;
};

function PluralOffsetString(id, offset, numberFormat, string) {
    this.id           = id;
    this.offset       = offset;
    this.numberFormat = numberFormat;
    this.string       = string;
}

PluralOffsetString.prototype.format = function (value) {
    var number = this.numberFormat.format(value - this.offset);

    return this.string
            .replace(/(^|[^\\])#/g, '$1' + number)
            .replace(/\\#/g, '#');
};

function SelectFormat(id, options) {
    this.id      = id;
    this.options = options;
}

SelectFormat.prototype.getOption = function (value) {
    var options = this.options;
    return options[value] || options.other;
};

//# sourceMappingURL=compiler.js.map

/***/ }),

/***/ "./node_modules/intl-messageformat/lib/core.js":
/*!*****************************************************!*\
  !*** ./node_modules/intl-messageformat/lib/core.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
Copyright (c) 2014, Yahoo! Inc. All rights reserved.
Copyrights licensed under the New BSD License.
See the accompanying LICENSE file for terms.
*/

/* jslint esnext: true */


var src$utils$$ = __webpack_require__(/*! ./utils */ "./node_modules/intl-messageformat/lib/utils.js"), src$es5$$ = __webpack_require__(/*! ./es5 */ "./node_modules/intl-messageformat/lib/es5.js"), src$compiler$$ = __webpack_require__(/*! ./compiler */ "./node_modules/intl-messageformat/lib/compiler.js"), intl$messageformat$parser$$ = __webpack_require__(/*! intl-messageformat-parser */ "./node_modules/intl-messageformat-parser/index.js");
exports["default"] = MessageFormat;

// -- MessageFormat --------------------------------------------------------

function MessageFormat(message, locales, formats) {
    // Parse string messages into an AST.
    var ast = typeof message === 'string' ?
            MessageFormat.__parse(message) : message;

    if (!(ast && ast.type === 'messageFormatPattern')) {
        throw new TypeError('A message must be provided as a String or AST.');
    }

    // Creates a new object with the specified `formats` merged with the default
    // formats.
    formats = this._mergeFormats(MessageFormat.formats, formats);

    // Defined first because it's used to build the format pattern.
    src$es5$$.defineProperty(this, '_locale',  {value: this._resolveLocale(locales)});

    // Compile the `ast` to a pattern that is highly optimized for repeated
    // `format()` invocations. **Note:** This passes the `locales` set provided
    // to the constructor instead of just the resolved locale.
    var pluralFn = this._findPluralRuleFunction(this._locale);
    var pattern  = this._compilePattern(ast, locales, formats, pluralFn);

    // "Bind" `format()` method to `this` so it can be passed by reference like
    // the other `Intl` APIs.
    var messageFormat = this;
    this.format = function (values) {
      try {
        return messageFormat._format(pattern, values);
      } catch (e) {
        if (e.variableId) {
          throw new Error(
            'The intl string context variable \'' + e.variableId + '\'' +
            ' was not provided to the string \'' + message + '\''
          );
        } else {
          throw e;
        }
      }
    };
}

// Default format options used as the prototype of the `formats` provided to the
// constructor. These are used when constructing the internal Intl.NumberFormat
// and Intl.DateTimeFormat instances.
src$es5$$.defineProperty(MessageFormat, 'formats', {
    enumerable: true,

    value: {
        number: {
            'currency': {
                style: 'currency'
            },

            'percent': {
                style: 'percent'
            }
        },

        date: {
            'short': {
                month: 'numeric',
                day  : 'numeric',
                year : '2-digit'
            },

            'medium': {
                month: 'short',
                day  : 'numeric',
                year : 'numeric'
            },

            'long': {
                month: 'long',
                day  : 'numeric',
                year : 'numeric'
            },

            'full': {
                weekday: 'long',
                month  : 'long',
                day    : 'numeric',
                year   : 'numeric'
            }
        },

        time: {
            'short': {
                hour  : 'numeric',
                minute: 'numeric'
            },

            'medium':  {
                hour  : 'numeric',
                minute: 'numeric',
                second: 'numeric'
            },

            'long': {
                hour        : 'numeric',
                minute      : 'numeric',
                second      : 'numeric',
                timeZoneName: 'short'
            },

            'full': {
                hour        : 'numeric',
                minute      : 'numeric',
                second      : 'numeric',
                timeZoneName: 'short'
            }
        }
    }
});

// Define internal private properties for dealing with locale data.
src$es5$$.defineProperty(MessageFormat, '__localeData__', {value: src$es5$$.objCreate(null)});
src$es5$$.defineProperty(MessageFormat, '__addLocaleData', {value: function (data) {
    if (!(data && data.locale)) {
        throw new Error(
            'Locale data provided to IntlMessageFormat is missing a ' +
            '`locale` property'
        );
    }

    MessageFormat.__localeData__[data.locale.toLowerCase()] = data;
}});

// Defines `__parse()` static method as an exposed private.
src$es5$$.defineProperty(MessageFormat, '__parse', {value: intl$messageformat$parser$$["default"].parse});

// Define public `defaultLocale` property which defaults to English, but can be
// set by the developer.
src$es5$$.defineProperty(MessageFormat, 'defaultLocale', {
    enumerable: true,
    writable  : true,
    value     : undefined
});

MessageFormat.prototype.resolvedOptions = function () {
    // TODO: Provide anything else?
    return {
        locale: this._locale
    };
};

MessageFormat.prototype._compilePattern = function (ast, locales, formats, pluralFn) {
    var compiler = new src$compiler$$["default"](locales, formats, pluralFn);
    return compiler.compile(ast);
};

MessageFormat.prototype._findPluralRuleFunction = function (locale) {
    var localeData = MessageFormat.__localeData__;
    var data       = localeData[locale.toLowerCase()];

    // The locale data is de-duplicated, so we have to traverse the locale's
    // hierarchy until we find a `pluralRuleFunction` to return.
    while (data) {
        if (data.pluralRuleFunction) {
            return data.pluralRuleFunction;
        }

        data = data.parentLocale && localeData[data.parentLocale.toLowerCase()];
    }

    throw new Error(
        'Locale data added to IntlMessageFormat is missing a ' +
        '`pluralRuleFunction` for :' + locale
    );
};

MessageFormat.prototype._format = function (pattern, values) {
    var result = '',
        i, len, part, id, value, err;

    for (i = 0, len = pattern.length; i < len; i += 1) {
        part = pattern[i];

        // Exist early for string parts.
        if (typeof part === 'string') {
            result += part;
            continue;
        }

        id = part.id;

        // Enforce that all required values are provided by the caller.
        if (!(values && src$utils$$.hop.call(values, id))) {
          err = new Error('A value must be provided for: ' + id);
          err.variableId = id;
          throw err;
        }

        value = values[id];

        // Recursively format plural and select parts' option — which can be a
        // nested pattern structure. The choosing of the option to use is
        // abstracted-by and delegated-to the part helper object.
        if (part.options) {
            result += this._format(part.getOption(value), values);
        } else {
            result += part.format(value);
        }
    }

    return result;
};

MessageFormat.prototype._mergeFormats = function (defaults, formats) {
    var mergedFormats = {},
        type, mergedType;

    for (type in defaults) {
        if (!src$utils$$.hop.call(defaults, type)) { continue; }

        mergedFormats[type] = mergedType = src$es5$$.objCreate(defaults[type]);

        if (formats && src$utils$$.hop.call(formats, type)) {
            src$utils$$.extend(mergedType, formats[type]);
        }
    }

    return mergedFormats;
};

MessageFormat.prototype._resolveLocale = function (locales) {
    if (typeof locales === 'string') {
        locales = [locales];
    }

    // Create a copy of the array so we can push on the default locale.
    locales = (locales || []).concat(MessageFormat.defaultLocale);

    var localeData = MessageFormat.__localeData__;
    var i, len, localeParts, data;

    // Using the set of locales + the default locale, we look for the first one
    // which that has been registered. When data does not exist for a locale, we
    // traverse its ancestors to find something that's been registered within
    // its hierarchy of locales. Since we lack the proper `parentLocale` data
    // here, we must take a naive approach to traversal.
    for (i = 0, len = locales.length; i < len; i += 1) {
        localeParts = locales[i].toLowerCase().split('-');

        while (localeParts.length) {
            data = localeData[localeParts.join('-')];
            if (data) {
                // Return the normalized locale string; e.g., we return "en-US",
                // instead of "en-us".
                return data.locale;
            }

            localeParts.pop();
        }
    }

    var defaultLocale = locales.pop();
    throw new Error(
        'No locale data has been added to IntlMessageFormat for: ' +
        locales.join(', ') + ', or the default locale: ' + defaultLocale
    );
};

//# sourceMappingURL=core.js.map

/***/ }),

/***/ "./node_modules/intl-messageformat/lib/en.js":
/*!***************************************************!*\
  !*** ./node_modules/intl-messageformat/lib/en.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// GENERATED FILE

exports["default"] = {"locale":"en","pluralRuleFunction":function (n,ord){var s=String(n).split("."),v0=!s[1],t0=Number(s[0])==n,n10=t0&&s[0].slice(-1),n100=t0&&s[0].slice(-2);if(ord)return n10==1&&n100!=11?"one":n10==2&&n100!=12?"two":n10==3&&n100!=13?"few":"other";return n==1&&v0?"one":"other"}};

//# sourceMappingURL=en.js.map

/***/ }),

/***/ "./node_modules/intl-messageformat/lib/es5.js":
/*!****************************************************!*\
  !*** ./node_modules/intl-messageformat/lib/es5.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
Copyright (c) 2014, Yahoo! Inc. All rights reserved.
Copyrights licensed under the New BSD License.
See the accompanying LICENSE file for terms.
*/

/* jslint esnext: true */


var src$utils$$ = __webpack_require__(/*! ./utils */ "./node_modules/intl-messageformat/lib/utils.js");

// Purposely using the same implementation as the Intl.js `Intl` polyfill.
// Copyright 2013 Andy Earnshaw, MIT License

var realDefineProp = (function () {
    try { return !!Object.defineProperty({}, 'a', {}); }
    catch (e) { return false; }
})();

var es3 = !realDefineProp && !Object.prototype.__defineGetter__;

var defineProperty = realDefineProp ? Object.defineProperty :
        function (obj, name, desc) {

    if ('get' in desc && obj.__defineGetter__) {
        obj.__defineGetter__(name, desc.get);
    } else if (!src$utils$$.hop.call(obj, name) || 'value' in desc) {
        obj[name] = desc.value;
    }
};

var objCreate = Object.create || function (proto, props) {
    var obj, k;

    function F() {}
    F.prototype = proto;
    obj = new F();

    for (k in props) {
        if (src$utils$$.hop.call(props, k)) {
            defineProperty(obj, k, props[k]);
        }
    }

    return obj;
};

exports.defineProperty = defineProperty, exports.objCreate = objCreate;

//# sourceMappingURL=es5.js.map

/***/ }),

/***/ "./node_modules/intl-messageformat/lib/main.js":
/*!*****************************************************!*\
  !*** ./node_modules/intl-messageformat/lib/main.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* jslint esnext: true */


var src$core$$ = __webpack_require__(/*! ./core */ "./node_modules/intl-messageformat/lib/core.js"), src$en$$ = __webpack_require__(/*! ./en */ "./node_modules/intl-messageformat/lib/en.js");

src$core$$["default"].__addLocaleData(src$en$$["default"]);
src$core$$["default"].defaultLocale = 'en';

exports["default"] = src$core$$["default"];

//# sourceMappingURL=main.js.map

/***/ }),

/***/ "./node_modules/intl-messageformat/lib/utils.js":
/*!******************************************************!*\
  !*** ./node_modules/intl-messageformat/lib/utils.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
Copyright (c) 2014, Yahoo! Inc. All rights reserved.
Copyrights licensed under the New BSD License.
See the accompanying LICENSE file for terms.
*/

/* jslint esnext: true */


exports.extend = extend;
var hop = Object.prototype.hasOwnProperty;

function extend(obj) {
    var sources = Array.prototype.slice.call(arguments, 1),
        i, len, source, key;

    for (i = 0, len = sources.length; i < len; i += 1) {
        source = sources[i];
        if (!source) { continue; }

        for (key in source) {
            if (hop.call(source, key)) {
                obj[key] = source[key];
            }
        }
    }

    return obj;
}
exports.hop = hop;

//# sourceMappingURL=utils.js.map

/***/ }),

/***/ "./node_modules/lunr/lunr.js":
/*!***********************************!*\
  !*** ./node_modules/lunr/lunr.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * lunr - http://lunrjs.com - A bit like Solr, but much smaller and not as bright - 2.3.6
 * Copyright (C) 2019 Oliver Nightingale
 * @license MIT
 */

;(function(){

/**
 * A convenience function for configuring and constructing
 * a new lunr Index.
 *
 * A lunr.Builder instance is created and the pipeline setup
 * with a trimmer, stop word filter and stemmer.
 *
 * This builder object is yielded to the configuration function
 * that is passed as a parameter, allowing the list of fields
 * and other builder parameters to be customised.
 *
 * All documents _must_ be added within the passed config function.
 *
 * @example
 * var idx = lunr(function () {
 *   this.field('title')
 *   this.field('body')
 *   this.ref('id')
 *
 *   documents.forEach(function (doc) {
 *     this.add(doc)
 *   }, this)
 * })
 *
 * @see {@link lunr.Builder}
 * @see {@link lunr.Pipeline}
 * @see {@link lunr.trimmer}
 * @see {@link lunr.stopWordFilter}
 * @see {@link lunr.stemmer}
 * @namespace {function} lunr
 */
var lunr = function (config) {
  var builder = new lunr.Builder

  builder.pipeline.add(
    lunr.trimmer,
    lunr.stopWordFilter,
    lunr.stemmer
  )

  builder.searchPipeline.add(
    lunr.stemmer
  )

  config.call(builder, builder)
  return builder.build()
}

lunr.version = "2.3.6"
/*!
 * lunr.utils
 * Copyright (C) 2019 Oliver Nightingale
 */

/**
 * A namespace containing utils for the rest of the lunr library
 * @namespace lunr.utils
 */
lunr.utils = {}

/**
 * Print a warning message to the console.
 *
 * @param {String} message The message to be printed.
 * @memberOf lunr.utils
 * @function
 */
lunr.utils.warn = (function (global) {
  /* eslint-disable no-console */
  return function (message) {
    if (global.console && console.warn) {
      console.warn(message)
    }
  }
  /* eslint-enable no-console */
})(this)

/**
 * Convert an object to a string.
 *
 * In the case of `null` and `undefined` the function returns
 * the empty string, in all other cases the result of calling
 * `toString` on the passed object is returned.
 *
 * @param {Any} obj The object to convert to a string.
 * @return {String} string representation of the passed object.
 * @memberOf lunr.utils
 */
lunr.utils.asString = function (obj) {
  if (obj === void 0 || obj === null) {
    return ""
  } else {
    return obj.toString()
  }
}

/**
 * Clones an object.
 *
 * Will create a copy of an existing object such that any mutations
 * on the copy cannot affect the original.
 *
 * Only shallow objects are supported, passing a nested object to this
 * function will cause a TypeError.
 *
 * Objects with primitives, and arrays of primitives are supported.
 *
 * @param {Object} obj The object to clone.
 * @return {Object} a clone of the passed object.
 * @throws {TypeError} when a nested object is passed.
 * @memberOf Utils
 */
lunr.utils.clone = function (obj) {
  if (obj === null || obj === undefined) {
    return obj
  }

  var clone = Object.create(null),
      keys = Object.keys(obj)

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i],
        val = obj[key]

    if (Array.isArray(val)) {
      clone[key] = val.slice()
      continue
    }

    if (typeof val === 'string' ||
        typeof val === 'number' ||
        typeof val === 'boolean') {
      clone[key] = val
      continue
    }

    throw new TypeError("clone is not deep and does not support nested objects")
  }

  return clone
}
lunr.FieldRef = function (docRef, fieldName, stringValue) {
  this.docRef = docRef
  this.fieldName = fieldName
  this._stringValue = stringValue
}

lunr.FieldRef.joiner = "/"

lunr.FieldRef.fromString = function (s) {
  var n = s.indexOf(lunr.FieldRef.joiner)

  if (n === -1) {
    throw "malformed field ref string"
  }

  var fieldRef = s.slice(0, n),
      docRef = s.slice(n + 1)

  return new lunr.FieldRef (docRef, fieldRef, s)
}

lunr.FieldRef.prototype.toString = function () {
  if (this._stringValue == undefined) {
    this._stringValue = this.fieldName + lunr.FieldRef.joiner + this.docRef
  }

  return this._stringValue
}
/*!
 * lunr.Set
 * Copyright (C) 2019 Oliver Nightingale
 */

/**
 * A lunr set.
 *
 * @constructor
 */
lunr.Set = function (elements) {
  this.elements = Object.create(null)

  if (elements) {
    this.length = elements.length

    for (var i = 0; i < this.length; i++) {
      this.elements[elements[i]] = true
    }
  } else {
    this.length = 0
  }
}

/**
 * A complete set that contains all elements.
 *
 * @static
 * @readonly
 * @type {lunr.Set}
 */
lunr.Set.complete = {
  intersect: function (other) {
    return other
  },

  union: function (other) {
    return other
  },

  contains: function () {
    return true
  }
}

/**
 * An empty set that contains no elements.
 *
 * @static
 * @readonly
 * @type {lunr.Set}
 */
lunr.Set.empty = {
  intersect: function () {
    return this
  },

  union: function (other) {
    return other
  },

  contains: function () {
    return false
  }
}

/**
 * Returns true if this set contains the specified object.
 *
 * @param {object} object - Object whose presence in this set is to be tested.
 * @returns {boolean} - True if this set contains the specified object.
 */
lunr.Set.prototype.contains = function (object) {
  return !!this.elements[object]
}

/**
 * Returns a new set containing only the elements that are present in both
 * this set and the specified set.
 *
 * @param {lunr.Set} other - set to intersect with this set.
 * @returns {lunr.Set} a new set that is the intersection of this and the specified set.
 */

lunr.Set.prototype.intersect = function (other) {
  var a, b, elements, intersection = []

  if (other === lunr.Set.complete) {
    return this
  }

  if (other === lunr.Set.empty) {
    return other
  }

  if (this.length < other.length) {
    a = this
    b = other
  } else {
    a = other
    b = this
  }

  elements = Object.keys(a.elements)

  for (var i = 0; i < elements.length; i++) {
    var element = elements[i]
    if (element in b.elements) {
      intersection.push(element)
    }
  }

  return new lunr.Set (intersection)
}

/**
 * Returns a new set combining the elements of this and the specified set.
 *
 * @param {lunr.Set} other - set to union with this set.
 * @return {lunr.Set} a new set that is the union of this and the specified set.
 */

lunr.Set.prototype.union = function (other) {
  if (other === lunr.Set.complete) {
    return lunr.Set.complete
  }

  if (other === lunr.Set.empty) {
    return this
  }

  return new lunr.Set(Object.keys(this.elements).concat(Object.keys(other.elements)))
}
/**
 * A function to calculate the inverse document frequency for
 * a posting. This is shared between the builder and the index
 *
 * @private
 * @param {object} posting - The posting for a given term
 * @param {number} documentCount - The total number of documents.
 */
lunr.idf = function (posting, documentCount) {
  var documentsWithTerm = 0

  for (var fieldName in posting) {
    if (fieldName == '_index') continue // Ignore the term index, its not a field
    documentsWithTerm += Object.keys(posting[fieldName]).length
  }

  var x = (documentCount - documentsWithTerm + 0.5) / (documentsWithTerm + 0.5)

  return Math.log(1 + Math.abs(x))
}

/**
 * A token wraps a string representation of a token
 * as it is passed through the text processing pipeline.
 *
 * @constructor
 * @param {string} [str=''] - The string token being wrapped.
 * @param {object} [metadata={}] - Metadata associated with this token.
 */
lunr.Token = function (str, metadata) {
  this.str = str || ""
  this.metadata = metadata || {}
}

/**
 * Returns the token string that is being wrapped by this object.
 *
 * @returns {string}
 */
lunr.Token.prototype.toString = function () {
  return this.str
}

/**
 * A token update function is used when updating or optionally
 * when cloning a token.
 *
 * @callback lunr.Token~updateFunction
 * @param {string} str - The string representation of the token.
 * @param {Object} metadata - All metadata associated with this token.
 */

/**
 * Applies the given function to the wrapped string token.
 *
 * @example
 * token.update(function (str, metadata) {
 *   return str.toUpperCase()
 * })
 *
 * @param {lunr.Token~updateFunction} fn - A function to apply to the token string.
 * @returns {lunr.Token}
 */
lunr.Token.prototype.update = function (fn) {
  this.str = fn(this.str, this.metadata)
  return this
}

/**
 * Creates a clone of this token. Optionally a function can be
 * applied to the cloned token.
 *
 * @param {lunr.Token~updateFunction} [fn] - An optional function to apply to the cloned token.
 * @returns {lunr.Token}
 */
lunr.Token.prototype.clone = function (fn) {
  fn = fn || function (s) { return s }
  return new lunr.Token (fn(this.str, this.metadata), this.metadata)
}
/*!
 * lunr.tokenizer
 * Copyright (C) 2019 Oliver Nightingale
 */

/**
 * A function for splitting a string into tokens ready to be inserted into
 * the search index. Uses `lunr.tokenizer.separator` to split strings, change
 * the value of this property to change how strings are split into tokens.
 *
 * This tokenizer will convert its parameter to a string by calling `toString` and
 * then will split this string on the character in `lunr.tokenizer.separator`.
 * Arrays will have their elements converted to strings and wrapped in a lunr.Token.
 *
 * Optional metadata can be passed to the tokenizer, this metadata will be cloned and
 * added as metadata to every token that is created from the object to be tokenized.
 *
 * @static
 * @param {?(string|object|object[])} obj - The object to convert into tokens
 * @param {?object} metadata - Optional metadata to associate with every token
 * @returns {lunr.Token[]}
 * @see {@link lunr.Pipeline}
 */
lunr.tokenizer = function (obj, metadata) {
  if (obj == null || obj == undefined) {
    return []
  }

  if (Array.isArray(obj)) {
    return obj.map(function (t) {
      return new lunr.Token(
        lunr.utils.asString(t).toLowerCase(),
        lunr.utils.clone(metadata)
      )
    })
  }

  var str = obj.toString().trim().toLowerCase(),
      len = str.length,
      tokens = []

  for (var sliceEnd = 0, sliceStart = 0; sliceEnd <= len; sliceEnd++) {
    var char = str.charAt(sliceEnd),
        sliceLength = sliceEnd - sliceStart

    if ((char.match(lunr.tokenizer.separator) || sliceEnd == len)) {

      if (sliceLength > 0) {
        var tokenMetadata = lunr.utils.clone(metadata) || {}
        tokenMetadata["position"] = [sliceStart, sliceLength]
        tokenMetadata["index"] = tokens.length

        tokens.push(
          new lunr.Token (
            str.slice(sliceStart, sliceEnd),
            tokenMetadata
          )
        )
      }

      sliceStart = sliceEnd + 1
    }

  }

  return tokens
}

/**
 * The separator used to split a string into tokens. Override this property to change the behaviour of
 * `lunr.tokenizer` behaviour when tokenizing strings. By default this splits on whitespace and hyphens.
 *
 * @static
 * @see lunr.tokenizer
 */
lunr.tokenizer.separator = /[\s\-]+/
/*!
 * lunr.Pipeline
 * Copyright (C) 2019 Oliver Nightingale
 */

/**
 * lunr.Pipelines maintain an ordered list of functions to be applied to all
 * tokens in documents entering the search index and queries being ran against
 * the index.
 *
 * An instance of lunr.Index created with the lunr shortcut will contain a
 * pipeline with a stop word filter and an English language stemmer. Extra
 * functions can be added before or after either of these functions or these
 * default functions can be removed.
 *
 * When run the pipeline will call each function in turn, passing a token, the
 * index of that token in the original list of all tokens and finally a list of
 * all the original tokens.
 *
 * The output of functions in the pipeline will be passed to the next function
 * in the pipeline. To exclude a token from entering the index the function
 * should return undefined, the rest of the pipeline will not be called with
 * this token.
 *
 * For serialisation of pipelines to work, all functions used in an instance of
 * a pipeline should be registered with lunr.Pipeline. Registered functions can
 * then be loaded. If trying to load a serialised pipeline that uses functions
 * that are not registered an error will be thrown.
 *
 * If not planning on serialising the pipeline then registering pipeline functions
 * is not necessary.
 *
 * @constructor
 */
lunr.Pipeline = function () {
  this._stack = []
}

lunr.Pipeline.registeredFunctions = Object.create(null)

/**
 * A pipeline function maps lunr.Token to lunr.Token. A lunr.Token contains the token
 * string as well as all known metadata. A pipeline function can mutate the token string
 * or mutate (or add) metadata for a given token.
 *
 * A pipeline function can indicate that the passed token should be discarded by returning
 * null. This token will not be passed to any downstream pipeline functions and will not be
 * added to the index.
 *
 * Multiple tokens can be returned by returning an array of tokens. Each token will be passed
 * to any downstream pipeline functions and all will returned tokens will be added to the index.
 *
 * Any number of pipeline functions may be chained together using a lunr.Pipeline.
 *
 * @interface lunr.PipelineFunction
 * @param {lunr.Token} token - A token from the document being processed.
 * @param {number} i - The index of this token in the complete list of tokens for this document/field.
 * @param {lunr.Token[]} tokens - All tokens for this document/field.
 * @returns {(?lunr.Token|lunr.Token[])}
 */

/**
 * Register a function with the pipeline.
 *
 * Functions that are used in the pipeline should be registered if the pipeline
 * needs to be serialised, or a serialised pipeline needs to be loaded.
 *
 * Registering a function does not add it to a pipeline, functions must still be
 * added to instances of the pipeline for them to be used when running a pipeline.
 *
 * @param {lunr.PipelineFunction} fn - The function to check for.
 * @param {String} label - The label to register this function with
 */
lunr.Pipeline.registerFunction = function (fn, label) {
  if (label in this.registeredFunctions) {
    lunr.utils.warn('Overwriting existing registered function: ' + label)
  }

  fn.label = label
  lunr.Pipeline.registeredFunctions[fn.label] = fn
}

/**
 * Warns if the function is not registered as a Pipeline function.
 *
 * @param {lunr.PipelineFunction} fn - The function to check for.
 * @private
 */
lunr.Pipeline.warnIfFunctionNotRegistered = function (fn) {
  var isRegistered = fn.label && (fn.label in this.registeredFunctions)

  if (!isRegistered) {
    lunr.utils.warn('Function is not registered with pipeline. This may cause problems when serialising the index.\n', fn)
  }
}

/**
 * Loads a previously serialised pipeline.
 *
 * All functions to be loaded must already be registered with lunr.Pipeline.
 * If any function from the serialised data has not been registered then an
 * error will be thrown.
 *
 * @param {Object} serialised - The serialised pipeline to load.
 * @returns {lunr.Pipeline}
 */
lunr.Pipeline.load = function (serialised) {
  var pipeline = new lunr.Pipeline

  serialised.forEach(function (fnName) {
    var fn = lunr.Pipeline.registeredFunctions[fnName]

    if (fn) {
      pipeline.add(fn)
    } else {
      throw new Error('Cannot load unregistered function: ' + fnName)
    }
  })

  return pipeline
}

/**
 * Adds new functions to the end of the pipeline.
 *
 * Logs a warning if the function has not been registered.
 *
 * @param {lunr.PipelineFunction[]} functions - Any number of functions to add to the pipeline.
 */
lunr.Pipeline.prototype.add = function () {
  var fns = Array.prototype.slice.call(arguments)

  fns.forEach(function (fn) {
    lunr.Pipeline.warnIfFunctionNotRegistered(fn)
    this._stack.push(fn)
  }, this)
}

/**
 * Adds a single function after a function that already exists in the
 * pipeline.
 *
 * Logs a warning if the function has not been registered.
 *
 * @param {lunr.PipelineFunction} existingFn - A function that already exists in the pipeline.
 * @param {lunr.PipelineFunction} newFn - The new function to add to the pipeline.
 */
lunr.Pipeline.prototype.after = function (existingFn, newFn) {
  lunr.Pipeline.warnIfFunctionNotRegistered(newFn)

  var pos = this._stack.indexOf(existingFn)
  if (pos == -1) {
    throw new Error('Cannot find existingFn')
  }

  pos = pos + 1
  this._stack.splice(pos, 0, newFn)
}

/**
 * Adds a single function before a function that already exists in the
 * pipeline.
 *
 * Logs a warning if the function has not been registered.
 *
 * @param {lunr.PipelineFunction} existingFn - A function that already exists in the pipeline.
 * @param {lunr.PipelineFunction} newFn - The new function to add to the pipeline.
 */
lunr.Pipeline.prototype.before = function (existingFn, newFn) {
  lunr.Pipeline.warnIfFunctionNotRegistered(newFn)

  var pos = this._stack.indexOf(existingFn)
  if (pos == -1) {
    throw new Error('Cannot find existingFn')
  }

  this._stack.splice(pos, 0, newFn)
}

/**
 * Removes a function from the pipeline.
 *
 * @param {lunr.PipelineFunction} fn The function to remove from the pipeline.
 */
lunr.Pipeline.prototype.remove = function (fn) {
  var pos = this._stack.indexOf(fn)
  if (pos == -1) {
    return
  }

  this._stack.splice(pos, 1)
}

/**
 * Runs the current list of functions that make up the pipeline against the
 * passed tokens.
 *
 * @param {Array} tokens The tokens to run through the pipeline.
 * @returns {Array}
 */
lunr.Pipeline.prototype.run = function (tokens) {
  var stackLength = this._stack.length

  for (var i = 0; i < stackLength; i++) {
    var fn = this._stack[i]
    var memo = []

    for (var j = 0; j < tokens.length; j++) {
      var result = fn(tokens[j], j, tokens)

      if (result === void 0 || result === '') continue

      if (Array.isArray(result)) {
        for (var k = 0; k < result.length; k++) {
          memo.push(result[k])
        }
      } else {
        memo.push(result)
      }
    }

    tokens = memo
  }

  return tokens
}

/**
 * Convenience method for passing a string through a pipeline and getting
 * strings out. This method takes care of wrapping the passed string in a
 * token and mapping the resulting tokens back to strings.
 *
 * @param {string} str - The string to pass through the pipeline.
 * @param {?object} metadata - Optional metadata to associate with the token
 * passed to the pipeline.
 * @returns {string[]}
 */
lunr.Pipeline.prototype.runString = function (str, metadata) {
  var token = new lunr.Token (str, metadata)

  return this.run([token]).map(function (t) {
    return t.toString()
  })
}

/**
 * Resets the pipeline by removing any existing processors.
 *
 */
lunr.Pipeline.prototype.reset = function () {
  this._stack = []
}

/**
 * Returns a representation of the pipeline ready for serialisation.
 *
 * Logs a warning if the function has not been registered.
 *
 * @returns {Array}
 */
lunr.Pipeline.prototype.toJSON = function () {
  return this._stack.map(function (fn) {
    lunr.Pipeline.warnIfFunctionNotRegistered(fn)

    return fn.label
  })
}
/*!
 * lunr.Vector
 * Copyright (C) 2019 Oliver Nightingale
 */

/**
 * A vector is used to construct the vector space of documents and queries. These
 * vectors support operations to determine the similarity between two documents or
 * a document and a query.
 *
 * Normally no parameters are required for initializing a vector, but in the case of
 * loading a previously dumped vector the raw elements can be provided to the constructor.
 *
 * For performance reasons vectors are implemented with a flat array, where an elements
 * index is immediately followed by its value. E.g. [index, value, index, value]. This
 * allows the underlying array to be as sparse as possible and still offer decent
 * performance when being used for vector calculations.
 *
 * @constructor
 * @param {Number[]} [elements] - The flat list of element index and element value pairs.
 */
lunr.Vector = function (elements) {
  this._magnitude = 0
  this.elements = elements || []
}


/**
 * Calculates the position within the vector to insert a given index.
 *
 * This is used internally by insert and upsert. If there are duplicate indexes then
 * the position is returned as if the value for that index were to be updated, but it
 * is the callers responsibility to check whether there is a duplicate at that index
 *
 * @param {Number} insertIdx - The index at which the element should be inserted.
 * @returns {Number}
 */
lunr.Vector.prototype.positionForIndex = function (index) {
  // For an empty vector the tuple can be inserted at the beginning
  if (this.elements.length == 0) {
    return 0
  }

  var start = 0,
      end = this.elements.length / 2,
      sliceLength = end - start,
      pivotPoint = Math.floor(sliceLength / 2),
      pivotIndex = this.elements[pivotPoint * 2]

  while (sliceLength > 1) {
    if (pivotIndex < index) {
      start = pivotPoint
    }

    if (pivotIndex > index) {
      end = pivotPoint
    }

    if (pivotIndex == index) {
      break
    }

    sliceLength = end - start
    pivotPoint = start + Math.floor(sliceLength / 2)
    pivotIndex = this.elements[pivotPoint * 2]
  }

  if (pivotIndex == index) {
    return pivotPoint * 2
  }

  if (pivotIndex > index) {
    return pivotPoint * 2
  }

  if (pivotIndex < index) {
    return (pivotPoint + 1) * 2
  }
}

/**
 * Inserts an element at an index within the vector.
 *
 * Does not allow duplicates, will throw an error if there is already an entry
 * for this index.
 *
 * @param {Number} insertIdx - The index at which the element should be inserted.
 * @param {Number} val - The value to be inserted into the vector.
 */
lunr.Vector.prototype.insert = function (insertIdx, val) {
  this.upsert(insertIdx, val, function () {
    throw "duplicate index"
  })
}

/**
 * Inserts or updates an existing index within the vector.
 *
 * @param {Number} insertIdx - The index at which the element should be inserted.
 * @param {Number} val - The value to be inserted into the vector.
 * @param {function} fn - A function that is called for updates, the existing value and the
 * requested value are passed as arguments
 */
lunr.Vector.prototype.upsert = function (insertIdx, val, fn) {
  this._magnitude = 0
  var position = this.positionForIndex(insertIdx)

  if (this.elements[position] == insertIdx) {
    this.elements[position + 1] = fn(this.elements[position + 1], val)
  } else {
    this.elements.splice(position, 0, insertIdx, val)
  }
}

/**
 * Calculates the magnitude of this vector.
 *
 * @returns {Number}
 */
lunr.Vector.prototype.magnitude = function () {
  if (this._magnitude) return this._magnitude

  var sumOfSquares = 0,
      elementsLength = this.elements.length

  for (var i = 1; i < elementsLength; i += 2) {
    var val = this.elements[i]
    sumOfSquares += val * val
  }

  return this._magnitude = Math.sqrt(sumOfSquares)
}

/**
 * Calculates the dot product of this vector and another vector.
 *
 * @param {lunr.Vector} otherVector - The vector to compute the dot product with.
 * @returns {Number}
 */
lunr.Vector.prototype.dot = function (otherVector) {
  var dotProduct = 0,
      a = this.elements, b = otherVector.elements,
      aLen = a.length, bLen = b.length,
      aVal = 0, bVal = 0,
      i = 0, j = 0

  while (i < aLen && j < bLen) {
    aVal = a[i], bVal = b[j]
    if (aVal < bVal) {
      i += 2
    } else if (aVal > bVal) {
      j += 2
    } else if (aVal == bVal) {
      dotProduct += a[i + 1] * b[j + 1]
      i += 2
      j += 2
    }
  }

  return dotProduct
}

/**
 * Calculates the similarity between this vector and another vector.
 *
 * @param {lunr.Vector} otherVector - The other vector to calculate the
 * similarity with.
 * @returns {Number}
 */
lunr.Vector.prototype.similarity = function (otherVector) {
  return this.dot(otherVector) / this.magnitude() || 0
}

/**
 * Converts the vector to an array of the elements within the vector.
 *
 * @returns {Number[]}
 */
lunr.Vector.prototype.toArray = function () {
  var output = new Array (this.elements.length / 2)

  for (var i = 1, j = 0; i < this.elements.length; i += 2, j++) {
    output[j] = this.elements[i]
  }

  return output
}

/**
 * A JSON serializable representation of the vector.
 *
 * @returns {Number[]}
 */
lunr.Vector.prototype.toJSON = function () {
  return this.elements
}
/* eslint-disable */
/*!
 * lunr.stemmer
 * Copyright (C) 2019 Oliver Nightingale
 * Includes code from - http://tartarus.org/~martin/PorterStemmer/js.txt
 */

/**
 * lunr.stemmer is an english language stemmer, this is a JavaScript
 * implementation of the PorterStemmer taken from http://tartarus.org/~martin
 *
 * @static
 * @implements {lunr.PipelineFunction}
 * @param {lunr.Token} token - The string to stem
 * @returns {lunr.Token}
 * @see {@link lunr.Pipeline}
 * @function
 */
lunr.stemmer = (function(){
  var step2list = {
      "ational" : "ate",
      "tional" : "tion",
      "enci" : "ence",
      "anci" : "ance",
      "izer" : "ize",
      "bli" : "ble",
      "alli" : "al",
      "entli" : "ent",
      "eli" : "e",
      "ousli" : "ous",
      "ization" : "ize",
      "ation" : "ate",
      "ator" : "ate",
      "alism" : "al",
      "iveness" : "ive",
      "fulness" : "ful",
      "ousness" : "ous",
      "aliti" : "al",
      "iviti" : "ive",
      "biliti" : "ble",
      "logi" : "log"
    },

    step3list = {
      "icate" : "ic",
      "ative" : "",
      "alize" : "al",
      "iciti" : "ic",
      "ical" : "ic",
      "ful" : "",
      "ness" : ""
    },

    c = "[^aeiou]",          // consonant
    v = "[aeiouy]",          // vowel
    C = c + "[^aeiouy]*",    // consonant sequence
    V = v + "[aeiou]*",      // vowel sequence

    mgr0 = "^(" + C + ")?" + V + C,               // [C]VC... is m>0
    meq1 = "^(" + C + ")?" + V + C + "(" + V + ")?$",  // [C]VC[V] is m=1
    mgr1 = "^(" + C + ")?" + V + C + V + C,       // [C]VCVC... is m>1
    s_v = "^(" + C + ")?" + v;                   // vowel in stem

  var re_mgr0 = new RegExp(mgr0);
  var re_mgr1 = new RegExp(mgr1);
  var re_meq1 = new RegExp(meq1);
  var re_s_v = new RegExp(s_v);

  var re_1a = /^(.+?)(ss|i)es$/;
  var re2_1a = /^(.+?)([^s])s$/;
  var re_1b = /^(.+?)eed$/;
  var re2_1b = /^(.+?)(ed|ing)$/;
  var re_1b_2 = /.$/;
  var re2_1b_2 = /(at|bl|iz)$/;
  var re3_1b_2 = new RegExp("([^aeiouylsz])\\1$");
  var re4_1b_2 = new RegExp("^" + C + v + "[^aeiouwxy]$");

  var re_1c = /^(.+?[^aeiou])y$/;
  var re_2 = /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/;

  var re_3 = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/;

  var re_4 = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/;
  var re2_4 = /^(.+?)(s|t)(ion)$/;

  var re_5 = /^(.+?)e$/;
  var re_5_1 = /ll$/;
  var re3_5 = new RegExp("^" + C + v + "[^aeiouwxy]$");

  var porterStemmer = function porterStemmer(w) {
    var stem,
      suffix,
      firstch,
      re,
      re2,
      re3,
      re4;

    if (w.length < 3) { return w; }

    firstch = w.substr(0,1);
    if (firstch == "y") {
      w = firstch.toUpperCase() + w.substr(1);
    }

    // Step 1a
    re = re_1a
    re2 = re2_1a;

    if (re.test(w)) { w = w.replace(re,"$1$2"); }
    else if (re2.test(w)) { w = w.replace(re2,"$1$2"); }

    // Step 1b
    re = re_1b;
    re2 = re2_1b;
    if (re.test(w)) {
      var fp = re.exec(w);
      re = re_mgr0;
      if (re.test(fp[1])) {
        re = re_1b_2;
        w = w.replace(re,"");
      }
    } else if (re2.test(w)) {
      var fp = re2.exec(w);
      stem = fp[1];
      re2 = re_s_v;
      if (re2.test(stem)) {
        w = stem;
        re2 = re2_1b_2;
        re3 = re3_1b_2;
        re4 = re4_1b_2;
        if (re2.test(w)) { w = w + "e"; }
        else if (re3.test(w)) { re = re_1b_2; w = w.replace(re,""); }
        else if (re4.test(w)) { w = w + "e"; }
      }
    }

    // Step 1c - replace suffix y or Y by i if preceded by a non-vowel which is not the first letter of the word (so cry -> cri, by -> by, say -> say)
    re = re_1c;
    if (re.test(w)) {
      var fp = re.exec(w);
      stem = fp[1];
      w = stem + "i";
    }

    // Step 2
    re = re_2;
    if (re.test(w)) {
      var fp = re.exec(w);
      stem = fp[1];
      suffix = fp[2];
      re = re_mgr0;
      if (re.test(stem)) {
        w = stem + step2list[suffix];
      }
    }

    // Step 3
    re = re_3;
    if (re.test(w)) {
      var fp = re.exec(w);
      stem = fp[1];
      suffix = fp[2];
      re = re_mgr0;
      if (re.test(stem)) {
        w = stem + step3list[suffix];
      }
    }

    // Step 4
    re = re_4;
    re2 = re2_4;
    if (re.test(w)) {
      var fp = re.exec(w);
      stem = fp[1];
      re = re_mgr1;
      if (re.test(stem)) {
        w = stem;
      }
    } else if (re2.test(w)) {
      var fp = re2.exec(w);
      stem = fp[1] + fp[2];
      re2 = re_mgr1;
      if (re2.test(stem)) {
        w = stem;
      }
    }

    // Step 5
    re = re_5;
    if (re.test(w)) {
      var fp = re.exec(w);
      stem = fp[1];
      re = re_mgr1;
      re2 = re_meq1;
      re3 = re3_5;
      if (re.test(stem) || (re2.test(stem) && !(re3.test(stem)))) {
        w = stem;
      }
    }

    re = re_5_1;
    re2 = re_mgr1;
    if (re.test(w) && re2.test(w)) {
      re = re_1b_2;
      w = w.replace(re,"");
    }

    // and turn initial Y back to y

    if (firstch == "y") {
      w = firstch.toLowerCase() + w.substr(1);
    }

    return w;
  };

  return function (token) {
    return token.update(porterStemmer);
  }
})();

lunr.Pipeline.registerFunction(lunr.stemmer, 'stemmer')
/*!
 * lunr.stopWordFilter
 * Copyright (C) 2019 Oliver Nightingale
 */

/**
 * lunr.generateStopWordFilter builds a stopWordFilter function from the provided
 * list of stop words.
 *
 * The built in lunr.stopWordFilter is built using this generator and can be used
 * to generate custom stopWordFilters for applications or non English languages.
 *
 * @function
 * @param {Array} token The token to pass through the filter
 * @returns {lunr.PipelineFunction}
 * @see lunr.Pipeline
 * @see lunr.stopWordFilter
 */
lunr.generateStopWordFilter = function (stopWords) {
  var words = stopWords.reduce(function (memo, stopWord) {
    memo[stopWord] = stopWord
    return memo
  }, {})

  return function (token) {
    if (token && words[token.toString()] !== token.toString()) return token
  }
}

/**
 * lunr.stopWordFilter is an English language stop word list filter, any words
 * contained in the list will not be passed through the filter.
 *
 * This is intended to be used in the Pipeline. If the token does not pass the
 * filter then undefined will be returned.
 *
 * @function
 * @implements {lunr.PipelineFunction}
 * @params {lunr.Token} token - A token to check for being a stop word.
 * @returns {lunr.Token}
 * @see {@link lunr.Pipeline}
 */
lunr.stopWordFilter = lunr.generateStopWordFilter([
  'a',
  'able',
  'about',
  'across',
  'after',
  'all',
  'almost',
  'also',
  'am',
  'among',
  'an',
  'and',
  'any',
  'are',
  'as',
  'at',
  'be',
  'because',
  'been',
  'but',
  'by',
  'can',
  'cannot',
  'could',
  'dear',
  'did',
  'do',
  'does',
  'either',
  'else',
  'ever',
  'every',
  'for',
  'from',
  'get',
  'got',
  'had',
  'has',
  'have',
  'he',
  'her',
  'hers',
  'him',
  'his',
  'how',
  'however',
  'i',
  'if',
  'in',
  'into',
  'is',
  'it',
  'its',
  'just',
  'least',
  'let',
  'like',
  'likely',
  'may',
  'me',
  'might',
  'most',
  'must',
  'my',
  'neither',
  'no',
  'nor',
  'not',
  'of',
  'off',
  'often',
  'on',
  'only',
  'or',
  'other',
  'our',
  'own',
  'rather',
  'said',
  'say',
  'says',
  'she',
  'should',
  'since',
  'so',
  'some',
  'than',
  'that',
  'the',
  'their',
  'them',
  'then',
  'there',
  'these',
  'they',
  'this',
  'tis',
  'to',
  'too',
  'twas',
  'us',
  'wants',
  'was',
  'we',
  'were',
  'what',
  'when',
  'where',
  'which',
  'while',
  'who',
  'whom',
  'why',
  'will',
  'with',
  'would',
  'yet',
  'you',
  'your'
])

lunr.Pipeline.registerFunction(lunr.stopWordFilter, 'stopWordFilter')
/*!
 * lunr.trimmer
 * Copyright (C) 2019 Oliver Nightingale
 */

/**
 * lunr.trimmer is a pipeline function for trimming non word
 * characters from the beginning and end of tokens before they
 * enter the index.
 *
 * This implementation may not work correctly for non latin
 * characters and should either be removed or adapted for use
 * with languages with non-latin characters.
 *
 * @static
 * @implements {lunr.PipelineFunction}
 * @param {lunr.Token} token The token to pass through the filter
 * @returns {lunr.Token}
 * @see lunr.Pipeline
 */
lunr.trimmer = function (token) {
  return token.update(function (s) {
    return s.replace(/^\W+/, '').replace(/\W+$/, '')
  })
}

lunr.Pipeline.registerFunction(lunr.trimmer, 'trimmer')
/*!
 * lunr.TokenSet
 * Copyright (C) 2019 Oliver Nightingale
 */

/**
 * A token set is used to store the unique list of all tokens
 * within an index. Token sets are also used to represent an
 * incoming query to the index, this query token set and index
 * token set are then intersected to find which tokens to look
 * up in the inverted index.
 *
 * A token set can hold multiple tokens, as in the case of the
 * index token set, or it can hold a single token as in the
 * case of a simple query token set.
 *
 * Additionally token sets are used to perform wildcard matching.
 * Leading, contained and trailing wildcards are supported, and
 * from this edit distance matching can also be provided.
 *
 * Token sets are implemented as a minimal finite state automata,
 * where both common prefixes and suffixes are shared between tokens.
 * This helps to reduce the space used for storing the token set.
 *
 * @constructor
 */
lunr.TokenSet = function () {
  this.final = false
  this.edges = {}
  this.id = lunr.TokenSet._nextId
  lunr.TokenSet._nextId += 1
}

/**
 * Keeps track of the next, auto increment, identifier to assign
 * to a new tokenSet.
 *
 * TokenSets require a unique identifier to be correctly minimised.
 *
 * @private
 */
lunr.TokenSet._nextId = 1

/**
 * Creates a TokenSet instance from the given sorted array of words.
 *
 * @param {String[]} arr - A sorted array of strings to create the set from.
 * @returns {lunr.TokenSet}
 * @throws Will throw an error if the input array is not sorted.
 */
lunr.TokenSet.fromArray = function (arr) {
  var builder = new lunr.TokenSet.Builder

  for (var i = 0, len = arr.length; i < len; i++) {
    builder.insert(arr[i])
  }

  builder.finish()
  return builder.root
}

/**
 * Creates a token set from a query clause.
 *
 * @private
 * @param {Object} clause - A single clause from lunr.Query.
 * @param {string} clause.term - The query clause term.
 * @param {number} [clause.editDistance] - The optional edit distance for the term.
 * @returns {lunr.TokenSet}
 */
lunr.TokenSet.fromClause = function (clause) {
  if ('editDistance' in clause) {
    return lunr.TokenSet.fromFuzzyString(clause.term, clause.editDistance)
  } else {
    return lunr.TokenSet.fromString(clause.term)
  }
}

/**
 * Creates a token set representing a single string with a specified
 * edit distance.
 *
 * Insertions, deletions, substitutions and transpositions are each
 * treated as an edit distance of 1.
 *
 * Increasing the allowed edit distance will have a dramatic impact
 * on the performance of both creating and intersecting these TokenSets.
 * It is advised to keep the edit distance less than 3.
 *
 * @param {string} str - The string to create the token set from.
 * @param {number} editDistance - The allowed edit distance to match.
 * @returns {lunr.Vector}
 */
lunr.TokenSet.fromFuzzyString = function (str, editDistance) {
  var root = new lunr.TokenSet

  var stack = [{
    node: root,
    editsRemaining: editDistance,
    str: str
  }]

  while (stack.length) {
    var frame = stack.pop()

    // no edit
    if (frame.str.length > 0) {
      var char = frame.str.charAt(0),
          noEditNode

      if (char in frame.node.edges) {
        noEditNode = frame.node.edges[char]
      } else {
        noEditNode = new lunr.TokenSet
        frame.node.edges[char] = noEditNode
      }

      if (frame.str.length == 1) {
        noEditNode.final = true
      }

      stack.push({
        node: noEditNode,
        editsRemaining: frame.editsRemaining,
        str: frame.str.slice(1)
      })
    }

    if (frame.editsRemaining == 0) {
      continue
    }

    // insertion
    if ("*" in frame.node.edges) {
      var insertionNode = frame.node.edges["*"]
    } else {
      var insertionNode = new lunr.TokenSet
      frame.node.edges["*"] = insertionNode
    }

    if (frame.str.length == 0) {
      insertionNode.final = true
    }

    stack.push({
      node: insertionNode,
      editsRemaining: frame.editsRemaining - 1,
      str: frame.str
    })

    // deletion
    // can only do a deletion if we have enough edits remaining
    // and if there are characters left to delete in the string
    if (frame.str.length > 1) {
      stack.push({
        node: frame.node,
        editsRemaining: frame.editsRemaining - 1,
        str: frame.str.slice(1)
      })
    }

    // deletion
    // just removing the last character from the str
    if (frame.str.length == 1) {
      frame.node.final = true
    }

    // substitution
    // can only do a substitution if we have enough edits remaining
    // and if there are characters left to substitute
    if (frame.str.length >= 1) {
      if ("*" in frame.node.edges) {
        var substitutionNode = frame.node.edges["*"]
      } else {
        var substitutionNode = new lunr.TokenSet
        frame.node.edges["*"] = substitutionNode
      }

      if (frame.str.length == 1) {
        substitutionNode.final = true
      }

      stack.push({
        node: substitutionNode,
        editsRemaining: frame.editsRemaining - 1,
        str: frame.str.slice(1)
      })
    }

    // transposition
    // can only do a transposition if there are edits remaining
    // and there are enough characters to transpose
    if (frame.str.length > 1) {
      var charA = frame.str.charAt(0),
          charB = frame.str.charAt(1),
          transposeNode

      if (charB in frame.node.edges) {
        transposeNode = frame.node.edges[charB]
      } else {
        transposeNode = new lunr.TokenSet
        frame.node.edges[charB] = transposeNode
      }

      if (frame.str.length == 1) {
        transposeNode.final = true
      }

      stack.push({
        node: transposeNode,
        editsRemaining: frame.editsRemaining - 1,
        str: charA + frame.str.slice(2)
      })
    }
  }

  return root
}

/**
 * Creates a TokenSet from a string.
 *
 * The string may contain one or more wildcard characters (*)
 * that will allow wildcard matching when intersecting with
 * another TokenSet.
 *
 * @param {string} str - The string to create a TokenSet from.
 * @returns {lunr.TokenSet}
 */
lunr.TokenSet.fromString = function (str) {
  var node = new lunr.TokenSet,
      root = node

  /*
   * Iterates through all characters within the passed string
   * appending a node for each character.
   *
   * When a wildcard character is found then a self
   * referencing edge is introduced to continually match
   * any number of any characters.
   */
  for (var i = 0, len = str.length; i < len; i++) {
    var char = str[i],
        final = (i == len - 1)

    if (char == "*") {
      node.edges[char] = node
      node.final = final

    } else {
      var next = new lunr.TokenSet
      next.final = final

      node.edges[char] = next
      node = next
    }
  }

  return root
}

/**
 * Converts this TokenSet into an array of strings
 * contained within the TokenSet.
 *
 * @returns {string[]}
 */
lunr.TokenSet.prototype.toArray = function () {
  var words = []

  var stack = [{
    prefix: "",
    node: this
  }]

  while (stack.length) {
    var frame = stack.pop(),
        edges = Object.keys(frame.node.edges),
        len = edges.length

    if (frame.node.final) {
      /* In Safari, at this point the prefix is sometimes corrupted, see:
       * https://github.com/olivernn/lunr.js/issues/279 Calling any
       * String.prototype method forces Safari to "cast" this string to what
       * it's supposed to be, fixing the bug. */
      frame.prefix.charAt(0)
      words.push(frame.prefix)
    }

    for (var i = 0; i < len; i++) {
      var edge = edges[i]

      stack.push({
        prefix: frame.prefix.concat(edge),
        node: frame.node.edges[edge]
      })
    }
  }

  return words
}

/**
 * Generates a string representation of a TokenSet.
 *
 * This is intended to allow TokenSets to be used as keys
 * in objects, largely to aid the construction and minimisation
 * of a TokenSet. As such it is not designed to be a human
 * friendly representation of the TokenSet.
 *
 * @returns {string}
 */
lunr.TokenSet.prototype.toString = function () {
  // NOTE: Using Object.keys here as this.edges is very likely
  // to enter 'hash-mode' with many keys being added
  //
  // avoiding a for-in loop here as it leads to the function
  // being de-optimised (at least in V8). From some simple
  // benchmarks the performance is comparable, but allowing
  // V8 to optimize may mean easy performance wins in the future.

  if (this._str) {
    return this._str
  }

  var str = this.final ? '1' : '0',
      labels = Object.keys(this.edges).sort(),
      len = labels.length

  for (var i = 0; i < len; i++) {
    var label = labels[i],
        node = this.edges[label]

    str = str + label + node.id
  }

  return str
}

/**
 * Returns a new TokenSet that is the intersection of
 * this TokenSet and the passed TokenSet.
 *
 * This intersection will take into account any wildcards
 * contained within the TokenSet.
 *
 * @param {lunr.TokenSet} b - An other TokenSet to intersect with.
 * @returns {lunr.TokenSet}
 */
lunr.TokenSet.prototype.intersect = function (b) {
  var output = new lunr.TokenSet,
      frame = undefined

  var stack = [{
    qNode: b,
    output: output,
    node: this
  }]

  while (stack.length) {
    frame = stack.pop()

    // NOTE: As with the #toString method, we are using
    // Object.keys and a for loop instead of a for-in loop
    // as both of these objects enter 'hash' mode, causing
    // the function to be de-optimised in V8
    var qEdges = Object.keys(frame.qNode.edges),
        qLen = qEdges.length,
        nEdges = Object.keys(frame.node.edges),
        nLen = nEdges.length

    for (var q = 0; q < qLen; q++) {
      var qEdge = qEdges[q]

      for (var n = 0; n < nLen; n++) {
        var nEdge = nEdges[n]

        if (nEdge == qEdge || qEdge == '*') {
          var node = frame.node.edges[nEdge],
              qNode = frame.qNode.edges[qEdge],
              final = node.final && qNode.final,
              next = undefined

          if (nEdge in frame.output.edges) {
            // an edge already exists for this character
            // no need to create a new node, just set the finality
            // bit unless this node is already final
            next = frame.output.edges[nEdge]
            next.final = next.final || final

          } else {
            // no edge exists yet, must create one
            // set the finality bit and insert it
            // into the output
            next = new lunr.TokenSet
            next.final = final
            frame.output.edges[nEdge] = next
          }

          stack.push({
            qNode: qNode,
            output: next,
            node: node
          })
        }
      }
    }
  }

  return output
}
lunr.TokenSet.Builder = function () {
  this.previousWord = ""
  this.root = new lunr.TokenSet
  this.uncheckedNodes = []
  this.minimizedNodes = {}
}

lunr.TokenSet.Builder.prototype.insert = function (word) {
  var node,
      commonPrefix = 0

  if (word < this.previousWord) {
    throw new Error ("Out of order word insertion")
  }

  for (var i = 0; i < word.length && i < this.previousWord.length; i++) {
    if (word[i] != this.previousWord[i]) break
    commonPrefix++
  }

  this.minimize(commonPrefix)

  if (this.uncheckedNodes.length == 0) {
    node = this.root
  } else {
    node = this.uncheckedNodes[this.uncheckedNodes.length - 1].child
  }

  for (var i = commonPrefix; i < word.length; i++) {
    var nextNode = new lunr.TokenSet,
        char = word[i]

    node.edges[char] = nextNode

    this.uncheckedNodes.push({
      parent: node,
      char: char,
      child: nextNode
    })

    node = nextNode
  }

  node.final = true
  this.previousWord = word
}

lunr.TokenSet.Builder.prototype.finish = function () {
  this.minimize(0)
}

lunr.TokenSet.Builder.prototype.minimize = function (downTo) {
  for (var i = this.uncheckedNodes.length - 1; i >= downTo; i--) {
    var node = this.uncheckedNodes[i],
        childKey = node.child.toString()

    if (childKey in this.minimizedNodes) {
      node.parent.edges[node.char] = this.minimizedNodes[childKey]
    } else {
      // Cache the key for this node since
      // we know it can't change anymore
      node.child._str = childKey

      this.minimizedNodes[childKey] = node.child
    }

    this.uncheckedNodes.pop()
  }
}
/*!
 * lunr.Index
 * Copyright (C) 2019 Oliver Nightingale
 */

/**
 * An index contains the built index of all documents and provides a query interface
 * to the index.
 *
 * Usually instances of lunr.Index will not be created using this constructor, instead
 * lunr.Builder should be used to construct new indexes, or lunr.Index.load should be
 * used to load previously built and serialized indexes.
 *
 * @constructor
 * @param {Object} attrs - The attributes of the built search index.
 * @param {Object} attrs.invertedIndex - An index of term/field to document reference.
 * @param {Object<string, lunr.Vector>} attrs.fieldVectors - Field vectors
 * @param {lunr.TokenSet} attrs.tokenSet - An set of all corpus tokens.
 * @param {string[]} attrs.fields - The names of indexed document fields.
 * @param {lunr.Pipeline} attrs.pipeline - The pipeline to use for search terms.
 */
lunr.Index = function (attrs) {
  this.invertedIndex = attrs.invertedIndex
  this.fieldVectors = attrs.fieldVectors
  this.tokenSet = attrs.tokenSet
  this.fields = attrs.fields
  this.pipeline = attrs.pipeline
}

/**
 * A result contains details of a document matching a search query.
 * @typedef {Object} lunr.Index~Result
 * @property {string} ref - The reference of the document this result represents.
 * @property {number} score - A number between 0 and 1 representing how similar this document is to the query.
 * @property {lunr.MatchData} matchData - Contains metadata about this match including which term(s) caused the match.
 */

/**
 * Although lunr provides the ability to create queries using lunr.Query, it also provides a simple
 * query language which itself is parsed into an instance of lunr.Query.
 *
 * For programmatically building queries it is advised to directly use lunr.Query, the query language
 * is best used for human entered text rather than program generated text.
 *
 * At its simplest queries can just be a single term, e.g. `hello`, multiple terms are also supported
 * and will be combined with OR, e.g `hello world` will match documents that contain either 'hello'
 * or 'world', though those that contain both will rank higher in the results.
 *
 * Wildcards can be included in terms to match one or more unspecified characters, these wildcards can
 * be inserted anywhere within the term, and more than one wildcard can exist in a single term. Adding
 * wildcards will increase the number of documents that will be found but can also have a negative
 * impact on query performance, especially with wildcards at the beginning of a term.
 *
 * Terms can be restricted to specific fields, e.g. `title:hello`, only documents with the term
 * hello in the title field will match this query. Using a field not present in the index will lead
 * to an error being thrown.
 *
 * Modifiers can also be added to terms, lunr supports edit distance and boost modifiers on terms. A term
 * boost will make documents matching that term score higher, e.g. `foo^5`. Edit distance is also supported
 * to provide fuzzy matching, e.g. 'hello~2' will match documents with hello with an edit distance of 2.
 * Avoid large values for edit distance to improve query performance.
 *
 * Each term also supports a presence modifier. By default a term's presence in document is optional, however
 * this can be changed to either required or prohibited. For a term's presence to be required in a document the
 * term should be prefixed with a '+', e.g. `+foo bar` is a search for documents that must contain 'foo' and
 * optionally contain 'bar'. Conversely a leading '-' sets the terms presence to prohibited, i.e. it must not
 * appear in a document, e.g. `-foo bar` is a search for documents that do not contain 'foo' but may contain 'bar'.
 *
 * To escape special characters the backslash character '\' can be used, this allows searches to include
 * characters that would normally be considered modifiers, e.g. `foo\~2` will search for a term "foo~2" instead
 * of attempting to apply a boost of 2 to the search term "foo".
 *
 * @typedef {string} lunr.Index~QueryString
 * @example <caption>Simple single term query</caption>
 * hello
 * @example <caption>Multiple term query</caption>
 * hello world
 * @example <caption>term scoped to a field</caption>
 * title:hello
 * @example <caption>term with a boost of 10</caption>
 * hello^10
 * @example <caption>term with an edit distance of 2</caption>
 * hello~2
 * @example <caption>terms with presence modifiers</caption>
 * -foo +bar baz
 */

/**
 * Performs a search against the index using lunr query syntax.
 *
 * Results will be returned sorted by their score, the most relevant results
 * will be returned first.  For details on how the score is calculated, please see
 * the {@link https://lunrjs.com/guides/searching.html#scoring|guide}.
 *
 * For more programmatic querying use lunr.Index#query.
 *
 * @param {lunr.Index~QueryString} queryString - A string containing a lunr query.
 * @throws {lunr.QueryParseError} If the passed query string cannot be parsed.
 * @returns {lunr.Index~Result[]}
 */
lunr.Index.prototype.search = function (queryString) {
  return this.query(function (query) {
    var parser = new lunr.QueryParser(queryString, query)
    parser.parse()
  })
}

/**
 * A query builder callback provides a query object to be used to express
 * the query to perform on the index.
 *
 * @callback lunr.Index~queryBuilder
 * @param {lunr.Query} query - The query object to build up.
 * @this lunr.Query
 */

/**
 * Performs a query against the index using the yielded lunr.Query object.
 *
 * If performing programmatic queries against the index, this method is preferred
 * over lunr.Index#search so as to avoid the additional query parsing overhead.
 *
 * A query object is yielded to the supplied function which should be used to
 * express the query to be run against the index.
 *
 * Note that although this function takes a callback parameter it is _not_ an
 * asynchronous operation, the callback is just yielded a query object to be
 * customized.
 *
 * @param {lunr.Index~queryBuilder} fn - A function that is used to build the query.
 * @returns {lunr.Index~Result[]}
 */
lunr.Index.prototype.query = function (fn) {
  // for each query clause
  // * process terms
  // * expand terms from token set
  // * find matching documents and metadata
  // * get document vectors
  // * score documents

  var query = new lunr.Query(this.fields),
      matchingFields = Object.create(null),
      queryVectors = Object.create(null),
      termFieldCache = Object.create(null),
      requiredMatches = Object.create(null),
      prohibitedMatches = Object.create(null)

  /*
   * To support field level boosts a query vector is created per
   * field. An empty vector is eagerly created to support negated
   * queries.
   */
  for (var i = 0; i < this.fields.length; i++) {
    queryVectors[this.fields[i]] = new lunr.Vector
  }

  fn.call(query, query)

  for (var i = 0; i < query.clauses.length; i++) {
    /*
     * Unless the pipeline has been disabled for this term, which is
     * the case for terms with wildcards, we need to pass the clause
     * term through the search pipeline. A pipeline returns an array
     * of processed terms. Pipeline functions may expand the passed
     * term, which means we may end up performing multiple index lookups
     * for a single query term.
     */
    var clause = query.clauses[i],
        terms = null,
        clauseMatches = lunr.Set.complete

    if (clause.usePipeline) {
      terms = this.pipeline.runString(clause.term, {
        fields: clause.fields
      })
    } else {
      terms = [clause.term]
    }

    for (var m = 0; m < terms.length; m++) {
      var term = terms[m]

      /*
       * Each term returned from the pipeline needs to use the same query
       * clause object, e.g. the same boost and or edit distance. The
       * simplest way to do this is to re-use the clause object but mutate
       * its term property.
       */
      clause.term = term

      /*
       * From the term in the clause we create a token set which will then
       * be used to intersect the indexes token set to get a list of terms
       * to lookup in the inverted index
       */
      var termTokenSet = lunr.TokenSet.fromClause(clause),
          expandedTerms = this.tokenSet.intersect(termTokenSet).toArray()

      /*
       * If a term marked as required does not exist in the tokenSet it is
       * impossible for the search to return any matches. We set all the field
       * scoped required matches set to empty and stop examining any further
       * clauses.
       */
      if (expandedTerms.length === 0 && clause.presence === lunr.Query.presence.REQUIRED) {
        for (var k = 0; k < clause.fields.length; k++) {
          var field = clause.fields[k]
          requiredMatches[field] = lunr.Set.empty
        }

        break
      }

      for (var j = 0; j < expandedTerms.length; j++) {
        /*
         * For each term get the posting and termIndex, this is required for
         * building the query vector.
         */
        var expandedTerm = expandedTerms[j],
            posting = this.invertedIndex[expandedTerm],
            termIndex = posting._index

        for (var k = 0; k < clause.fields.length; k++) {
          /*
           * For each field that this query term is scoped by (by default
           * all fields are in scope) we need to get all the document refs
           * that have this term in that field.
           *
           * The posting is the entry in the invertedIndex for the matching
           * term from above.
           */
          var field = clause.fields[k],
              fieldPosting = posting[field],
              matchingDocumentRefs = Object.keys(fieldPosting),
              termField = expandedTerm + "/" + field,
              matchingDocumentsSet = new lunr.Set(matchingDocumentRefs)

          /*
           * if the presence of this term is required ensure that the matching
           * documents are added to the set of required matches for this clause.
           *
           */
          if (clause.presence == lunr.Query.presence.REQUIRED) {
            clauseMatches = clauseMatches.union(matchingDocumentsSet)

            if (requiredMatches[field] === undefined) {
              requiredMatches[field] = lunr.Set.complete
            }
          }

          /*
           * if the presence of this term is prohibited ensure that the matching
           * documents are added to the set of prohibited matches for this field,
           * creating that set if it does not yet exist.
           */
          if (clause.presence == lunr.Query.presence.PROHIBITED) {
            if (prohibitedMatches[field] === undefined) {
              prohibitedMatches[field] = lunr.Set.empty
            }

            prohibitedMatches[field] = prohibitedMatches[field].union(matchingDocumentsSet)

            /*
             * Prohibited matches should not be part of the query vector used for
             * similarity scoring and no metadata should be extracted so we continue
             * to the next field
             */
            continue
          }

          /*
           * The query field vector is populated using the termIndex found for
           * the term and a unit value with the appropriate boost applied.
           * Using upsert because there could already be an entry in the vector
           * for the term we are working with. In that case we just add the scores
           * together.
           */
          queryVectors[field].upsert(termIndex, clause.boost, function (a, b) { return a + b })

          /**
           * If we've already seen this term, field combo then we've already collected
           * the matching documents and metadata, no need to go through all that again
           */
          if (termFieldCache[termField]) {
            continue
          }

          for (var l = 0; l < matchingDocumentRefs.length; l++) {
            /*
             * All metadata for this term/field/document triple
             * are then extracted and collected into an instance
             * of lunr.MatchData ready to be returned in the query
             * results
             */
            var matchingDocumentRef = matchingDocumentRefs[l],
                matchingFieldRef = new lunr.FieldRef (matchingDocumentRef, field),
                metadata = fieldPosting[matchingDocumentRef],
                fieldMatch

            if ((fieldMatch = matchingFields[matchingFieldRef]) === undefined) {
              matchingFields[matchingFieldRef] = new lunr.MatchData (expandedTerm, field, metadata)
            } else {
              fieldMatch.add(expandedTerm, field, metadata)
            }

          }

          termFieldCache[termField] = true
        }
      }
    }

    /**
     * If the presence was required we need to update the requiredMatches field sets.
     * We do this after all fields for the term have collected their matches because
     * the clause terms presence is required in _any_ of the fields not _all_ of the
     * fields.
     */
    if (clause.presence === lunr.Query.presence.REQUIRED) {
      for (var k = 0; k < clause.fields.length; k++) {
        var field = clause.fields[k]
        requiredMatches[field] = requiredMatches[field].intersect(clauseMatches)
      }
    }
  }

  /**
   * Need to combine the field scoped required and prohibited
   * matching documents into a global set of required and prohibited
   * matches
   */
  var allRequiredMatches = lunr.Set.complete,
      allProhibitedMatches = lunr.Set.empty

  for (var i = 0; i < this.fields.length; i++) {
    var field = this.fields[i]

    if (requiredMatches[field]) {
      allRequiredMatches = allRequiredMatches.intersect(requiredMatches[field])
    }

    if (prohibitedMatches[field]) {
      allProhibitedMatches = allProhibitedMatches.union(prohibitedMatches[field])
    }
  }

  var matchingFieldRefs = Object.keys(matchingFields),
      results = [],
      matches = Object.create(null)

  /*
   * If the query is negated (contains only prohibited terms)
   * we need to get _all_ fieldRefs currently existing in the
   * index. This is only done when we know that the query is
   * entirely prohibited terms to avoid any cost of getting all
   * fieldRefs unnecessarily.
   *
   * Additionally, blank MatchData must be created to correctly
   * populate the results.
   */
  if (query.isNegated()) {
    matchingFieldRefs = Object.keys(this.fieldVectors)

    for (var i = 0; i < matchingFieldRefs.length; i++) {
      var matchingFieldRef = matchingFieldRefs[i]
      var fieldRef = lunr.FieldRef.fromString(matchingFieldRef)
      matchingFields[matchingFieldRef] = new lunr.MatchData
    }
  }

  for (var i = 0; i < matchingFieldRefs.length; i++) {
    /*
     * Currently we have document fields that match the query, but we
     * need to return documents. The matchData and scores are combined
     * from multiple fields belonging to the same document.
     *
     * Scores are calculated by field, using the query vectors created
     * above, and combined into a final document score using addition.
     */
    var fieldRef = lunr.FieldRef.fromString(matchingFieldRefs[i]),
        docRef = fieldRef.docRef

    if (!allRequiredMatches.contains(docRef)) {
      continue
    }

    if (allProhibitedMatches.contains(docRef)) {
      continue
    }

    var fieldVector = this.fieldVectors[fieldRef],
        score = queryVectors[fieldRef.fieldName].similarity(fieldVector),
        docMatch

    if ((docMatch = matches[docRef]) !== undefined) {
      docMatch.score += score
      docMatch.matchData.combine(matchingFields[fieldRef])
    } else {
      var match = {
        ref: docRef,
        score: score,
        matchData: matchingFields[fieldRef]
      }
      matches[docRef] = match
      results.push(match)
    }
  }

  /*
   * Sort the results objects by score, highest first.
   */
  return results.sort(function (a, b) {
    return b.score - a.score
  })
}

/**
 * Prepares the index for JSON serialization.
 *
 * The schema for this JSON blob will be described in a
 * separate JSON schema file.
 *
 * @returns {Object}
 */
lunr.Index.prototype.toJSON = function () {
  var invertedIndex = Object.keys(this.invertedIndex)
    .sort()
    .map(function (term) {
      return [term, this.invertedIndex[term]]
    }, this)

  var fieldVectors = Object.keys(this.fieldVectors)
    .map(function (ref) {
      return [ref, this.fieldVectors[ref].toJSON()]
    }, this)

  return {
    version: lunr.version,
    fields: this.fields,
    fieldVectors: fieldVectors,
    invertedIndex: invertedIndex,
    pipeline: this.pipeline.toJSON()
  }
}

/**
 * Loads a previously serialized lunr.Index
 *
 * @param {Object} serializedIndex - A previously serialized lunr.Index
 * @returns {lunr.Index}
 */
lunr.Index.load = function (serializedIndex) {
  var attrs = {},
      fieldVectors = {},
      serializedVectors = serializedIndex.fieldVectors,
      invertedIndex = Object.create(null),
      serializedInvertedIndex = serializedIndex.invertedIndex,
      tokenSetBuilder = new lunr.TokenSet.Builder,
      pipeline = lunr.Pipeline.load(serializedIndex.pipeline)

  if (serializedIndex.version != lunr.version) {
    lunr.utils.warn("Version mismatch when loading serialised index. Current version of lunr '" + lunr.version + "' does not match serialized index '" + serializedIndex.version + "'")
  }

  for (var i = 0; i < serializedVectors.length; i++) {
    var tuple = serializedVectors[i],
        ref = tuple[0],
        elements = tuple[1]

    fieldVectors[ref] = new lunr.Vector(elements)
  }

  for (var i = 0; i < serializedInvertedIndex.length; i++) {
    var tuple = serializedInvertedIndex[i],
        term = tuple[0],
        posting = tuple[1]

    tokenSetBuilder.insert(term)
    invertedIndex[term] = posting
  }

  tokenSetBuilder.finish()

  attrs.fields = serializedIndex.fields

  attrs.fieldVectors = fieldVectors
  attrs.invertedIndex = invertedIndex
  attrs.tokenSet = tokenSetBuilder.root
  attrs.pipeline = pipeline

  return new lunr.Index(attrs)
}
/*!
 * lunr.Builder
 * Copyright (C) 2019 Oliver Nightingale
 */

/**
 * lunr.Builder performs indexing on a set of documents and
 * returns instances of lunr.Index ready for querying.
 *
 * All configuration of the index is done via the builder, the
 * fields to index, the document reference, the text processing
 * pipeline and document scoring parameters are all set on the
 * builder before indexing.
 *
 * @constructor
 * @property {string} _ref - Internal reference to the document reference field.
 * @property {string[]} _fields - Internal reference to the document fields to index.
 * @property {object} invertedIndex - The inverted index maps terms to document fields.
 * @property {object} documentTermFrequencies - Keeps track of document term frequencies.
 * @property {object} documentLengths - Keeps track of the length of documents added to the index.
 * @property {lunr.tokenizer} tokenizer - Function for splitting strings into tokens for indexing.
 * @property {lunr.Pipeline} pipeline - The pipeline performs text processing on tokens before indexing.
 * @property {lunr.Pipeline} searchPipeline - A pipeline for processing search terms before querying the index.
 * @property {number} documentCount - Keeps track of the total number of documents indexed.
 * @property {number} _b - A parameter to control field length normalization, setting this to 0 disabled normalization, 1 fully normalizes field lengths, the default value is 0.75.
 * @property {number} _k1 - A parameter to control how quickly an increase in term frequency results in term frequency saturation, the default value is 1.2.
 * @property {number} termIndex - A counter incremented for each unique term, used to identify a terms position in the vector space.
 * @property {array} metadataWhitelist - A list of metadata keys that have been whitelisted for entry in the index.
 */
lunr.Builder = function () {
  this._ref = "id"
  this._fields = Object.create(null)
  this._documents = Object.create(null)
  this.invertedIndex = Object.create(null)
  this.fieldTermFrequencies = {}
  this.fieldLengths = {}
  this.tokenizer = lunr.tokenizer
  this.pipeline = new lunr.Pipeline
  this.searchPipeline = new lunr.Pipeline
  this.documentCount = 0
  this._b = 0.75
  this._k1 = 1.2
  this.termIndex = 0
  this.metadataWhitelist = []
}

/**
 * Sets the document field used as the document reference. Every document must have this field.
 * The type of this field in the document should be a string, if it is not a string it will be
 * coerced into a string by calling toString.
 *
 * The default ref is 'id'.
 *
 * The ref should _not_ be changed during indexing, it should be set before any documents are
 * added to the index. Changing it during indexing can lead to inconsistent results.
 *
 * @param {string} ref - The name of the reference field in the document.
 */
lunr.Builder.prototype.ref = function (ref) {
  this._ref = ref
}

/**
 * A function that is used to extract a field from a document.
 *
 * Lunr expects a field to be at the top level of a document, if however the field
 * is deeply nested within a document an extractor function can be used to extract
 * the right field for indexing.
 *
 * @callback fieldExtractor
 * @param {object} doc - The document being added to the index.
 * @returns {?(string|object|object[])} obj - The object that will be indexed for this field.
 * @example <caption>Extracting a nested field</caption>
 * function (doc) { return doc.nested.field }
 */

/**
 * Adds a field to the list of document fields that will be indexed. Every document being
 * indexed should have this field. Null values for this field in indexed documents will
 * not cause errors but will limit the chance of that document being retrieved by searches.
 *
 * All fields should be added before adding documents to the index. Adding fields after
 * a document has been indexed will have no effect on already indexed documents.
 *
 * Fields can be boosted at build time. This allows terms within that field to have more
 * importance when ranking search results. Use a field boost to specify that matches within
 * one field are more important than other fields.
 *
 * @param {string} fieldName - The name of a field to index in all documents.
 * @param {object} attributes - Optional attributes associated with this field.
 * @param {number} [attributes.boost=1] - Boost applied to all terms within this field.
 * @param {fieldExtractor} [attributes.extractor] - Function to extract a field from a document.
 * @throws {RangeError} fieldName cannot contain unsupported characters '/'
 */
lunr.Builder.prototype.field = function (fieldName, attributes) {
  if (/\//.test(fieldName)) {
    throw new RangeError ("Field '" + fieldName + "' contains illegal character '/'")
  }

  this._fields[fieldName] = attributes || {}
}

/**
 * A parameter to tune the amount of field length normalisation that is applied when
 * calculating relevance scores. A value of 0 will completely disable any normalisation
 * and a value of 1 will fully normalise field lengths. The default is 0.75. Values of b
 * will be clamped to the range 0 - 1.
 *
 * @param {number} number - The value to set for this tuning parameter.
 */
lunr.Builder.prototype.b = function (number) {
  if (number < 0) {
    this._b = 0
  } else if (number > 1) {
    this._b = 1
  } else {
    this._b = number
  }
}

/**
 * A parameter that controls the speed at which a rise in term frequency results in term
 * frequency saturation. The default value is 1.2. Setting this to a higher value will give
 * slower saturation levels, a lower value will result in quicker saturation.
 *
 * @param {number} number - The value to set for this tuning parameter.
 */
lunr.Builder.prototype.k1 = function (number) {
  this._k1 = number
}

/**
 * Adds a document to the index.
 *
 * Before adding fields to the index the index should have been fully setup, with the document
 * ref and all fields to index already having been specified.
 *
 * The document must have a field name as specified by the ref (by default this is 'id') and
 * it should have all fields defined for indexing, though null or undefined values will not
 * cause errors.
 *
 * Entire documents can be boosted at build time. Applying a boost to a document indicates that
 * this document should rank higher in search results than other documents.
 *
 * @param {object} doc - The document to add to the index.
 * @param {object} attributes - Optional attributes associated with this document.
 * @param {number} [attributes.boost=1] - Boost applied to all terms within this document.
 */
lunr.Builder.prototype.add = function (doc, attributes) {
  var docRef = doc[this._ref],
      fields = Object.keys(this._fields)

  this._documents[docRef] = attributes || {}
  this.documentCount += 1

  for (var i = 0; i < fields.length; i++) {
    var fieldName = fields[i],
        extractor = this._fields[fieldName].extractor,
        field = extractor ? extractor(doc) : doc[fieldName],
        tokens = this.tokenizer(field, {
          fields: [fieldName]
        }),
        terms = this.pipeline.run(tokens),
        fieldRef = new lunr.FieldRef (docRef, fieldName),
        fieldTerms = Object.create(null)

    this.fieldTermFrequencies[fieldRef] = fieldTerms
    this.fieldLengths[fieldRef] = 0

    // store the length of this field for this document
    this.fieldLengths[fieldRef] += terms.length

    // calculate term frequencies for this field
    for (var j = 0; j < terms.length; j++) {
      var term = terms[j]

      if (fieldTerms[term] == undefined) {
        fieldTerms[term] = 0
      }

      fieldTerms[term] += 1

      // add to inverted index
      // create an initial posting if one doesn't exist
      if (this.invertedIndex[term] == undefined) {
        var posting = Object.create(null)
        posting["_index"] = this.termIndex
        this.termIndex += 1

        for (var k = 0; k < fields.length; k++) {
          posting[fields[k]] = Object.create(null)
        }

        this.invertedIndex[term] = posting
      }

      // add an entry for this term/fieldName/docRef to the invertedIndex
      if (this.invertedIndex[term][fieldName][docRef] == undefined) {
        this.invertedIndex[term][fieldName][docRef] = Object.create(null)
      }

      // store all whitelisted metadata about this token in the
      // inverted index
      for (var l = 0; l < this.metadataWhitelist.length; l++) {
        var metadataKey = this.metadataWhitelist[l],
            metadata = term.metadata[metadataKey]

        if (this.invertedIndex[term][fieldName][docRef][metadataKey] == undefined) {
          this.invertedIndex[term][fieldName][docRef][metadataKey] = []
        }

        this.invertedIndex[term][fieldName][docRef][metadataKey].push(metadata)
      }
    }

  }
}

/**
 * Calculates the average document length for this index
 *
 * @private
 */
lunr.Builder.prototype.calculateAverageFieldLengths = function () {

  var fieldRefs = Object.keys(this.fieldLengths),
      numberOfFields = fieldRefs.length,
      accumulator = {},
      documentsWithField = {}

  for (var i = 0; i < numberOfFields; i++) {
    var fieldRef = lunr.FieldRef.fromString(fieldRefs[i]),
        field = fieldRef.fieldName

    documentsWithField[field] || (documentsWithField[field] = 0)
    documentsWithField[field] += 1

    accumulator[field] || (accumulator[field] = 0)
    accumulator[field] += this.fieldLengths[fieldRef]
  }

  var fields = Object.keys(this._fields)

  for (var i = 0; i < fields.length; i++) {
    var fieldName = fields[i]
    accumulator[fieldName] = accumulator[fieldName] / documentsWithField[fieldName]
  }

  this.averageFieldLength = accumulator
}

/**
 * Builds a vector space model of every document using lunr.Vector
 *
 * @private
 */
lunr.Builder.prototype.createFieldVectors = function () {
  var fieldVectors = {},
      fieldRefs = Object.keys(this.fieldTermFrequencies),
      fieldRefsLength = fieldRefs.length,
      termIdfCache = Object.create(null)

  for (var i = 0; i < fieldRefsLength; i++) {
    var fieldRef = lunr.FieldRef.fromString(fieldRefs[i]),
        fieldName = fieldRef.fieldName,
        fieldLength = this.fieldLengths[fieldRef],
        fieldVector = new lunr.Vector,
        termFrequencies = this.fieldTermFrequencies[fieldRef],
        terms = Object.keys(termFrequencies),
        termsLength = terms.length


    var fieldBoost = this._fields[fieldName].boost || 1,
        docBoost = this._documents[fieldRef.docRef].boost || 1

    for (var j = 0; j < termsLength; j++) {
      var term = terms[j],
          tf = termFrequencies[term],
          termIndex = this.invertedIndex[term]._index,
          idf, score, scoreWithPrecision

      if (termIdfCache[term] === undefined) {
        idf = lunr.idf(this.invertedIndex[term], this.documentCount)
        termIdfCache[term] = idf
      } else {
        idf = termIdfCache[term]
      }

      score = idf * ((this._k1 + 1) * tf) / (this._k1 * (1 - this._b + this._b * (fieldLength / this.averageFieldLength[fieldName])) + tf)
      score *= fieldBoost
      score *= docBoost
      scoreWithPrecision = Math.round(score * 1000) / 1000
      // Converts 1.23456789 to 1.234.
      // Reducing the precision so that the vectors take up less
      // space when serialised. Doing it now so that they behave
      // the same before and after serialisation. Also, this is
      // the fastest approach to reducing a number's precision in
      // JavaScript.

      fieldVector.insert(termIndex, scoreWithPrecision)
    }

    fieldVectors[fieldRef] = fieldVector
  }

  this.fieldVectors = fieldVectors
}

/**
 * Creates a token set of all tokens in the index using lunr.TokenSet
 *
 * @private
 */
lunr.Builder.prototype.createTokenSet = function () {
  this.tokenSet = lunr.TokenSet.fromArray(
    Object.keys(this.invertedIndex).sort()
  )
}

/**
 * Builds the index, creating an instance of lunr.Index.
 *
 * This completes the indexing process and should only be called
 * once all documents have been added to the index.
 *
 * @returns {lunr.Index}
 */
lunr.Builder.prototype.build = function () {
  this.calculateAverageFieldLengths()
  this.createFieldVectors()
  this.createTokenSet()

  return new lunr.Index({
    invertedIndex: this.invertedIndex,
    fieldVectors: this.fieldVectors,
    tokenSet: this.tokenSet,
    fields: Object.keys(this._fields),
    pipeline: this.searchPipeline
  })
}

/**
 * Applies a plugin to the index builder.
 *
 * A plugin is a function that is called with the index builder as its context.
 * Plugins can be used to customise or extend the behaviour of the index
 * in some way. A plugin is just a function, that encapsulated the custom
 * behaviour that should be applied when building the index.
 *
 * The plugin function will be called with the index builder as its argument, additional
 * arguments can also be passed when calling use. The function will be called
 * with the index builder as its context.
 *
 * @param {Function} plugin The plugin to apply.
 */
lunr.Builder.prototype.use = function (fn) {
  var args = Array.prototype.slice.call(arguments, 1)
  args.unshift(this)
  fn.apply(this, args)
}
/**
 * Contains and collects metadata about a matching document.
 * A single instance of lunr.MatchData is returned as part of every
 * lunr.Index~Result.
 *
 * @constructor
 * @param {string} term - The term this match data is associated with
 * @param {string} field - The field in which the term was found
 * @param {object} metadata - The metadata recorded about this term in this field
 * @property {object} metadata - A cloned collection of metadata associated with this document.
 * @see {@link lunr.Index~Result}
 */
lunr.MatchData = function (term, field, metadata) {
  var clonedMetadata = Object.create(null),
      metadataKeys = Object.keys(metadata || {})

  // Cloning the metadata to prevent the original
  // being mutated during match data combination.
  // Metadata is kept in an array within the inverted
  // index so cloning the data can be done with
  // Array#slice
  for (var i = 0; i < metadataKeys.length; i++) {
    var key = metadataKeys[i]
    clonedMetadata[key] = metadata[key].slice()
  }

  this.metadata = Object.create(null)

  if (term !== undefined) {
    this.metadata[term] = Object.create(null)
    this.metadata[term][field] = clonedMetadata
  }
}

/**
 * An instance of lunr.MatchData will be created for every term that matches a
 * document. However only one instance is required in a lunr.Index~Result. This
 * method combines metadata from another instance of lunr.MatchData with this
 * objects metadata.
 *
 * @param {lunr.MatchData} otherMatchData - Another instance of match data to merge with this one.
 * @see {@link lunr.Index~Result}
 */
lunr.MatchData.prototype.combine = function (otherMatchData) {
  var terms = Object.keys(otherMatchData.metadata)

  for (var i = 0; i < terms.length; i++) {
    var term = terms[i],
        fields = Object.keys(otherMatchData.metadata[term])

    if (this.metadata[term] == undefined) {
      this.metadata[term] = Object.create(null)
    }

    for (var j = 0; j < fields.length; j++) {
      var field = fields[j],
          keys = Object.keys(otherMatchData.metadata[term][field])

      if (this.metadata[term][field] == undefined) {
        this.metadata[term][field] = Object.create(null)
      }

      for (var k = 0; k < keys.length; k++) {
        var key = keys[k]

        if (this.metadata[term][field][key] == undefined) {
          this.metadata[term][field][key] = otherMatchData.metadata[term][field][key]
        } else {
          this.metadata[term][field][key] = this.metadata[term][field][key].concat(otherMatchData.metadata[term][field][key])
        }

      }
    }
  }
}

/**
 * Add metadata for a term/field pair to this instance of match data.
 *
 * @param {string} term - The term this match data is associated with
 * @param {string} field - The field in which the term was found
 * @param {object} metadata - The metadata recorded about this term in this field
 */
lunr.MatchData.prototype.add = function (term, field, metadata) {
  if (!(term in this.metadata)) {
    this.metadata[term] = Object.create(null)
    this.metadata[term][field] = metadata
    return
  }

  if (!(field in this.metadata[term])) {
    this.metadata[term][field] = metadata
    return
  }

  var metadataKeys = Object.keys(metadata)

  for (var i = 0; i < metadataKeys.length; i++) {
    var key = metadataKeys[i]

    if (key in this.metadata[term][field]) {
      this.metadata[term][field][key] = this.metadata[term][field][key].concat(metadata[key])
    } else {
      this.metadata[term][field][key] = metadata[key]
    }
  }
}
/**
 * A lunr.Query provides a programmatic way of defining queries to be performed
 * against a {@link lunr.Index}.
 *
 * Prefer constructing a lunr.Query using the {@link lunr.Index#query} method
 * so the query object is pre-initialized with the right index fields.
 *
 * @constructor
 * @property {lunr.Query~Clause[]} clauses - An array of query clauses.
 * @property {string[]} allFields - An array of all available fields in a lunr.Index.
 */
lunr.Query = function (allFields) {
  this.clauses = []
  this.allFields = allFields
}

/**
 * Constants for indicating what kind of automatic wildcard insertion will be used when constructing a query clause.
 *
 * This allows wildcards to be added to the beginning and end of a term without having to manually do any string
 * concatenation.
 *
 * The wildcard constants can be bitwise combined to select both leading and trailing wildcards.
 *
 * @constant
 * @default
 * @property {number} wildcard.NONE - The term will have no wildcards inserted, this is the default behaviour
 * @property {number} wildcard.LEADING - Prepend the term with a wildcard, unless a leading wildcard already exists
 * @property {number} wildcard.TRAILING - Append a wildcard to the term, unless a trailing wildcard already exists
 * @see lunr.Query~Clause
 * @see lunr.Query#clause
 * @see lunr.Query#term
 * @example <caption>query term with trailing wildcard</caption>
 * query.term('foo', { wildcard: lunr.Query.wildcard.TRAILING })
 * @example <caption>query term with leading and trailing wildcard</caption>
 * query.term('foo', {
 *   wildcard: lunr.Query.wildcard.LEADING | lunr.Query.wildcard.TRAILING
 * })
 */

lunr.Query.wildcard = new String ("*")
lunr.Query.wildcard.NONE = 0
lunr.Query.wildcard.LEADING = 1
lunr.Query.wildcard.TRAILING = 2

/**
 * Constants for indicating what kind of presence a term must have in matching documents.
 *
 * @constant
 * @enum {number}
 * @see lunr.Query~Clause
 * @see lunr.Query#clause
 * @see lunr.Query#term
 * @example <caption>query term with required presence</caption>
 * query.term('foo', { presence: lunr.Query.presence.REQUIRED })
 */
lunr.Query.presence = {
  /**
   * Term's presence in a document is optional, this is the default value.
   */
  OPTIONAL: 1,

  /**
   * Term's presence in a document is required, documents that do not contain
   * this term will not be returned.
   */
  REQUIRED: 2,

  /**
   * Term's presence in a document is prohibited, documents that do contain
   * this term will not be returned.
   */
  PROHIBITED: 3
}

/**
 * A single clause in a {@link lunr.Query} contains a term and details on how to
 * match that term against a {@link lunr.Index}.
 *
 * @typedef {Object} lunr.Query~Clause
 * @property {string[]} fields - The fields in an index this clause should be matched against.
 * @property {number} [boost=1] - Any boost that should be applied when matching this clause.
 * @property {number} [editDistance] - Whether the term should have fuzzy matching applied, and how fuzzy the match should be.
 * @property {boolean} [usePipeline] - Whether the term should be passed through the search pipeline.
 * @property {number} [wildcard=lunr.Query.wildcard.NONE] - Whether the term should have wildcards appended or prepended.
 * @property {number} [presence=lunr.Query.presence.OPTIONAL] - The terms presence in any matching documents.
 */

/**
 * Adds a {@link lunr.Query~Clause} to this query.
 *
 * Unless the clause contains the fields to be matched all fields will be matched. In addition
 * a default boost of 1 is applied to the clause.
 *
 * @param {lunr.Query~Clause} clause - The clause to add to this query.
 * @see lunr.Query~Clause
 * @returns {lunr.Query}
 */
lunr.Query.prototype.clause = function (clause) {
  if (!('fields' in clause)) {
    clause.fields = this.allFields
  }

  if (!('boost' in clause)) {
    clause.boost = 1
  }

  if (!('usePipeline' in clause)) {
    clause.usePipeline = true
  }

  if (!('wildcard' in clause)) {
    clause.wildcard = lunr.Query.wildcard.NONE
  }

  if ((clause.wildcard & lunr.Query.wildcard.LEADING) && (clause.term.charAt(0) != lunr.Query.wildcard)) {
    clause.term = "*" + clause.term
  }

  if ((clause.wildcard & lunr.Query.wildcard.TRAILING) && (clause.term.slice(-1) != lunr.Query.wildcard)) {
    clause.term = "" + clause.term + "*"
  }

  if (!('presence' in clause)) {
    clause.presence = lunr.Query.presence.OPTIONAL
  }

  this.clauses.push(clause)

  return this
}

/**
 * A negated query is one in which every clause has a presence of
 * prohibited. These queries require some special processing to return
 * the expected results.
 *
 * @returns boolean
 */
lunr.Query.prototype.isNegated = function () {
  for (var i = 0; i < this.clauses.length; i++) {
    if (this.clauses[i].presence != lunr.Query.presence.PROHIBITED) {
      return false
    }
  }

  return true
}

/**
 * Adds a term to the current query, under the covers this will create a {@link lunr.Query~Clause}
 * to the list of clauses that make up this query.
 *
 * The term is used as is, i.e. no tokenization will be performed by this method. Instead conversion
 * to a token or token-like string should be done before calling this method.
 *
 * The term will be converted to a string by calling `toString`. Multiple terms can be passed as an
 * array, each term in the array will share the same options.
 *
 * @param {object|object[]} term - The term(s) to add to the query.
 * @param {object} [options] - Any additional properties to add to the query clause.
 * @returns {lunr.Query}
 * @see lunr.Query#clause
 * @see lunr.Query~Clause
 * @example <caption>adding a single term to a query</caption>
 * query.term("foo")
 * @example <caption>adding a single term to a query and specifying search fields, term boost and automatic trailing wildcard</caption>
 * query.term("foo", {
 *   fields: ["title"],
 *   boost: 10,
 *   wildcard: lunr.Query.wildcard.TRAILING
 * })
 * @example <caption>using lunr.tokenizer to convert a string to tokens before using them as terms</caption>
 * query.term(lunr.tokenizer("foo bar"))
 */
lunr.Query.prototype.term = function (term, options) {
  if (Array.isArray(term)) {
    term.forEach(function (t) { this.term(t, lunr.utils.clone(options)) }, this)
    return this
  }

  var clause = options || {}
  clause.term = term.toString()

  this.clause(clause)

  return this
}
lunr.QueryParseError = function (message, start, end) {
  this.name = "QueryParseError"
  this.message = message
  this.start = start
  this.end = end
}

lunr.QueryParseError.prototype = new Error
lunr.QueryLexer = function (str) {
  this.lexemes = []
  this.str = str
  this.length = str.length
  this.pos = 0
  this.start = 0
  this.escapeCharPositions = []
}

lunr.QueryLexer.prototype.run = function () {
  var state = lunr.QueryLexer.lexText

  while (state) {
    state = state(this)
  }
}

lunr.QueryLexer.prototype.sliceString = function () {
  var subSlices = [],
      sliceStart = this.start,
      sliceEnd = this.pos

  for (var i = 0; i < this.escapeCharPositions.length; i++) {
    sliceEnd = this.escapeCharPositions[i]
    subSlices.push(this.str.slice(sliceStart, sliceEnd))
    sliceStart = sliceEnd + 1
  }

  subSlices.push(this.str.slice(sliceStart, this.pos))
  this.escapeCharPositions.length = 0

  return subSlices.join('')
}

lunr.QueryLexer.prototype.emit = function (type) {
  this.lexemes.push({
    type: type,
    str: this.sliceString(),
    start: this.start,
    end: this.pos
  })

  this.start = this.pos
}

lunr.QueryLexer.prototype.escapeCharacter = function () {
  this.escapeCharPositions.push(this.pos - 1)
  this.pos += 1
}

lunr.QueryLexer.prototype.next = function () {
  if (this.pos >= this.length) {
    return lunr.QueryLexer.EOS
  }

  var char = this.str.charAt(this.pos)
  this.pos += 1
  return char
}

lunr.QueryLexer.prototype.width = function () {
  return this.pos - this.start
}

lunr.QueryLexer.prototype.ignore = function () {
  if (this.start == this.pos) {
    this.pos += 1
  }

  this.start = this.pos
}

lunr.QueryLexer.prototype.backup = function () {
  this.pos -= 1
}

lunr.QueryLexer.prototype.acceptDigitRun = function () {
  var char, charCode

  do {
    char = this.next()
    charCode = char.charCodeAt(0)
  } while (charCode > 47 && charCode < 58)

  if (char != lunr.QueryLexer.EOS) {
    this.backup()
  }
}

lunr.QueryLexer.prototype.more = function () {
  return this.pos < this.length
}

lunr.QueryLexer.EOS = 'EOS'
lunr.QueryLexer.FIELD = 'FIELD'
lunr.QueryLexer.TERM = 'TERM'
lunr.QueryLexer.EDIT_DISTANCE = 'EDIT_DISTANCE'
lunr.QueryLexer.BOOST = 'BOOST'
lunr.QueryLexer.PRESENCE = 'PRESENCE'

lunr.QueryLexer.lexField = function (lexer) {
  lexer.backup()
  lexer.emit(lunr.QueryLexer.FIELD)
  lexer.ignore()
  return lunr.QueryLexer.lexText
}

lunr.QueryLexer.lexTerm = function (lexer) {
  if (lexer.width() > 1) {
    lexer.backup()
    lexer.emit(lunr.QueryLexer.TERM)
  }

  lexer.ignore()

  if (lexer.more()) {
    return lunr.QueryLexer.lexText
  }
}

lunr.QueryLexer.lexEditDistance = function (lexer) {
  lexer.ignore()
  lexer.acceptDigitRun()
  lexer.emit(lunr.QueryLexer.EDIT_DISTANCE)
  return lunr.QueryLexer.lexText
}

lunr.QueryLexer.lexBoost = function (lexer) {
  lexer.ignore()
  lexer.acceptDigitRun()
  lexer.emit(lunr.QueryLexer.BOOST)
  return lunr.QueryLexer.lexText
}

lunr.QueryLexer.lexEOS = function (lexer) {
  if (lexer.width() > 0) {
    lexer.emit(lunr.QueryLexer.TERM)
  }
}

// This matches the separator used when tokenising fields
// within a document. These should match otherwise it is
// not possible to search for some tokens within a document.
//
// It is possible for the user to change the separator on the
// tokenizer so it _might_ clash with any other of the special
// characters already used within the search string, e.g. :.
//
// This means that it is possible to change the separator in
// such a way that makes some words unsearchable using a search
// string.
lunr.QueryLexer.termSeparator = lunr.tokenizer.separator

lunr.QueryLexer.lexText = function (lexer) {
  while (true) {
    var char = lexer.next()

    if (char == lunr.QueryLexer.EOS) {
      return lunr.QueryLexer.lexEOS
    }

    // Escape character is '\'
    if (char.charCodeAt(0) == 92) {
      lexer.escapeCharacter()
      continue
    }

    if (char == ":") {
      return lunr.QueryLexer.lexField
    }

    if (char == "~") {
      lexer.backup()
      if (lexer.width() > 0) {
        lexer.emit(lunr.QueryLexer.TERM)
      }
      return lunr.QueryLexer.lexEditDistance
    }

    if (char == "^") {
      lexer.backup()
      if (lexer.width() > 0) {
        lexer.emit(lunr.QueryLexer.TERM)
      }
      return lunr.QueryLexer.lexBoost
    }

    // "+" indicates term presence is required
    // checking for length to ensure that only
    // leading "+" are considered
    if (char == "+" && lexer.width() === 1) {
      lexer.emit(lunr.QueryLexer.PRESENCE)
      return lunr.QueryLexer.lexText
    }

    // "-" indicates term presence is prohibited
    // checking for length to ensure that only
    // leading "-" are considered
    if (char == "-" && lexer.width() === 1) {
      lexer.emit(lunr.QueryLexer.PRESENCE)
      return lunr.QueryLexer.lexText
    }

    if (char.match(lunr.QueryLexer.termSeparator)) {
      return lunr.QueryLexer.lexTerm
    }
  }
}

lunr.QueryParser = function (str, query) {
  this.lexer = new lunr.QueryLexer (str)
  this.query = query
  this.currentClause = {}
  this.lexemeIdx = 0
}

lunr.QueryParser.prototype.parse = function () {
  this.lexer.run()
  this.lexemes = this.lexer.lexemes

  var state = lunr.QueryParser.parseClause

  while (state) {
    state = state(this)
  }

  return this.query
}

lunr.QueryParser.prototype.peekLexeme = function () {
  return this.lexemes[this.lexemeIdx]
}

lunr.QueryParser.prototype.consumeLexeme = function () {
  var lexeme = this.peekLexeme()
  this.lexemeIdx += 1
  return lexeme
}

lunr.QueryParser.prototype.nextClause = function () {
  var completedClause = this.currentClause
  this.query.clause(completedClause)
  this.currentClause = {}
}

lunr.QueryParser.parseClause = function (parser) {
  var lexeme = parser.peekLexeme()

  if (lexeme == undefined) {
    return
  }

  switch (lexeme.type) {
    case lunr.QueryLexer.PRESENCE:
      return lunr.QueryParser.parsePresence
    case lunr.QueryLexer.FIELD:
      return lunr.QueryParser.parseField
    case lunr.QueryLexer.TERM:
      return lunr.QueryParser.parseTerm
    default:
      var errorMessage = "expected either a field or a term, found " + lexeme.type

      if (lexeme.str.length >= 1) {
        errorMessage += " with value '" + lexeme.str + "'"
      }

      throw new lunr.QueryParseError (errorMessage, lexeme.start, lexeme.end)
  }
}

lunr.QueryParser.parsePresence = function (parser) {
  var lexeme = parser.consumeLexeme()

  if (lexeme == undefined) {
    return
  }

  switch (lexeme.str) {
    case "-":
      parser.currentClause.presence = lunr.Query.presence.PROHIBITED
      break
    case "+":
      parser.currentClause.presence = lunr.Query.presence.REQUIRED
      break
    default:
      var errorMessage = "unrecognised presence operator'" + lexeme.str + "'"
      throw new lunr.QueryParseError (errorMessage, lexeme.start, lexeme.end)
  }

  var nextLexeme = parser.peekLexeme()

  if (nextLexeme == undefined) {
    var errorMessage = "expecting term or field, found nothing"
    throw new lunr.QueryParseError (errorMessage, lexeme.start, lexeme.end)
  }

  switch (nextLexeme.type) {
    case lunr.QueryLexer.FIELD:
      return lunr.QueryParser.parseField
    case lunr.QueryLexer.TERM:
      return lunr.QueryParser.parseTerm
    default:
      var errorMessage = "expecting term or field, found '" + nextLexeme.type + "'"
      throw new lunr.QueryParseError (errorMessage, nextLexeme.start, nextLexeme.end)
  }
}

lunr.QueryParser.parseField = function (parser) {
  var lexeme = parser.consumeLexeme()

  if (lexeme == undefined) {
    return
  }

  if (parser.query.allFields.indexOf(lexeme.str) == -1) {
    var possibleFields = parser.query.allFields.map(function (f) { return "'" + f + "'" }).join(', '),
        errorMessage = "unrecognised field '" + lexeme.str + "', possible fields: " + possibleFields

    throw new lunr.QueryParseError (errorMessage, lexeme.start, lexeme.end)
  }

  parser.currentClause.fields = [lexeme.str]

  var nextLexeme = parser.peekLexeme()

  if (nextLexeme == undefined) {
    var errorMessage = "expecting term, found nothing"
    throw new lunr.QueryParseError (errorMessage, lexeme.start, lexeme.end)
  }

  switch (nextLexeme.type) {
    case lunr.QueryLexer.TERM:
      return lunr.QueryParser.parseTerm
    default:
      var errorMessage = "expecting term, found '" + nextLexeme.type + "'"
      throw new lunr.QueryParseError (errorMessage, nextLexeme.start, nextLexeme.end)
  }
}

lunr.QueryParser.parseTerm = function (parser) {
  var lexeme = parser.consumeLexeme()

  if (lexeme == undefined) {
    return
  }

  parser.currentClause.term = lexeme.str.toLowerCase()

  if (lexeme.str.indexOf("*") != -1) {
    parser.currentClause.usePipeline = false
  }

  var nextLexeme = parser.peekLexeme()

  if (nextLexeme == undefined) {
    parser.nextClause()
    return
  }

  switch (nextLexeme.type) {
    case lunr.QueryLexer.TERM:
      parser.nextClause()
      return lunr.QueryParser.parseTerm
    case lunr.QueryLexer.FIELD:
      parser.nextClause()
      return lunr.QueryParser.parseField
    case lunr.QueryLexer.EDIT_DISTANCE:
      return lunr.QueryParser.parseEditDistance
    case lunr.QueryLexer.BOOST:
      return lunr.QueryParser.parseBoost
    case lunr.QueryLexer.PRESENCE:
      parser.nextClause()
      return lunr.QueryParser.parsePresence
    default:
      var errorMessage = "Unexpected lexeme type '" + nextLexeme.type + "'"
      throw new lunr.QueryParseError (errorMessage, nextLexeme.start, nextLexeme.end)
  }
}

lunr.QueryParser.parseEditDistance = function (parser) {
  var lexeme = parser.consumeLexeme()

  if (lexeme == undefined) {
    return
  }

  var editDistance = parseInt(lexeme.str, 10)

  if (isNaN(editDistance)) {
    var errorMessage = "edit distance must be numeric"
    throw new lunr.QueryParseError (errorMessage, lexeme.start, lexeme.end)
  }

  parser.currentClause.editDistance = editDistance

  var nextLexeme = parser.peekLexeme()

  if (nextLexeme == undefined) {
    parser.nextClause()
    return
  }

  switch (nextLexeme.type) {
    case lunr.QueryLexer.TERM:
      parser.nextClause()
      return lunr.QueryParser.parseTerm
    case lunr.QueryLexer.FIELD:
      parser.nextClause()
      return lunr.QueryParser.parseField
    case lunr.QueryLexer.EDIT_DISTANCE:
      return lunr.QueryParser.parseEditDistance
    case lunr.QueryLexer.BOOST:
      return lunr.QueryParser.parseBoost
    case lunr.QueryLexer.PRESENCE:
      parser.nextClause()
      return lunr.QueryParser.parsePresence
    default:
      var errorMessage = "Unexpected lexeme type '" + nextLexeme.type + "'"
      throw new lunr.QueryParseError (errorMessage, nextLexeme.start, nextLexeme.end)
  }
}

lunr.QueryParser.parseBoost = function (parser) {
  var lexeme = parser.consumeLexeme()

  if (lexeme == undefined) {
    return
  }

  var boost = parseInt(lexeme.str, 10)

  if (isNaN(boost)) {
    var errorMessage = "boost must be numeric"
    throw new lunr.QueryParseError (errorMessage, lexeme.start, lexeme.end)
  }

  parser.currentClause.boost = boost

  var nextLexeme = parser.peekLexeme()

  if (nextLexeme == undefined) {
    parser.nextClause()
    return
  }

  switch (nextLexeme.type) {
    case lunr.QueryLexer.TERM:
      parser.nextClause()
      return lunr.QueryParser.parseTerm
    case lunr.QueryLexer.FIELD:
      parser.nextClause()
      return lunr.QueryParser.parseField
    case lunr.QueryLexer.EDIT_DISTANCE:
      return lunr.QueryParser.parseEditDistance
    case lunr.QueryLexer.BOOST:
      return lunr.QueryParser.parseBoost
    case lunr.QueryLexer.PRESENCE:
      parser.nextClause()
      return lunr.QueryParser.parsePresence
    default:
      var errorMessage = "Unexpected lexeme type '" + nextLexeme.type + "'"
      throw new lunr.QueryParseError (errorMessage, nextLexeme.start, nextLexeme.end)
  }
}

  /**
   * export the module via AMD, CommonJS or as a browser global
   * Export code from https://github.com/umdjs/umd/blob/master/returnExports.js
   */
  ;(function (root, factory) {
    if (true) {
      // AMD. Register as an anonymous module.
      !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
    } else {}
  }(this, function () {
    /**
     * Just return a value to define the module export.
     * This example returns an object, but the module
     * can return a function as the exported value.
     */
    return lunr
  }))
})();


/***/ }),

/***/ "./node_modules/next-server/dist/lib/mitt.js":
/*!***************************************************!*\
  !*** ./node_modules/next-server/dist/lib/mitt.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  var all = _Object$create(null);

  return {
    on: function on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },
    off: function off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },
    emit: function emit(type) {
      for (var _len = arguments.length, evts = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        evts[_key - 1] = arguments[_key];
      }

      ;
      (all[type] || []).slice().map(function (handler) {
        handler.apply(void 0, evts);
      });
    }
  };
}

exports["default"] = mitt;

/***/ }),

/***/ "./node_modules/next-server/dist/lib/router-context.js":
/*!*************************************************************!*\
  !*** ./node_modules/next-server/dist/lib/router-context.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next-server/dist/lib/router/rewrite-url-for-export.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next-server/dist/lib/router/rewrite-url-for-export.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = __webpack_require__(/*! @babel/runtime-corejs2/helpers/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/slicedToArray.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function rewriteUrlForNextExport(url) {
  var _url$split = url.split('#'),
      _url$split2 = _slicedToArray(_url$split, 2),
      pathname = _url$split2[0],
      hash = _url$split2[1]; // tslint:disable-next-line


  var _pathname$split = pathname.split('?'),
      _pathname$split2 = _slicedToArray(_pathname$split, 2),
      path = _pathname$split2[0],
      qs = _pathname$split2[1];

  path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

  if (!/\.[^/]+\/?$/.test(path)) path += "/";
  if (qs) path += '?' + qs;
  if (hash) path += '#' + hash;
  return path;
}

exports.rewriteUrlForNextExport = rewriteUrlForNextExport;

/***/ }),

/***/ "./node_modules/next-server/dist/lib/router/router.js":
/*!************************************************************!*\
  !*** ./node_modules/next-server/dist/lib/router/router.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");

var _asyncToGenerator = __webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js");

var _slicedToArray = __webpack_require__(/*! @babel/runtime-corejs2/helpers/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/slicedToArray.js");

var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

var _Object$assign = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

var _classCallCheck = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "./node_modules/url/url.js");

var mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next-server/dist/lib/mitt.js"));

var utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next-server/dist/lib/utils.js");

var rewrite_url_for_export_1 = __webpack_require__(/*! ./rewrite-url-for-export */ "./node_modules/next-server/dist/lib/router/rewrite-url-for-export.js");

var route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next-server/dist/lib/router/utils/route-matcher.js");

var route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next-server/dist/lib/router/utils/route-regex.js");

var is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next-server/dist/lib/router/utils/is-dynamic.js");

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

var Router =
/*#__PURE__*/
function () {
  function Router(pathname, query, as, _ref) {
    var _this = this;

    var initialProps = _ref.initialProps,
        pageLoader = _ref.pageLoader,
        App = _ref.App,
        wrapApp = _ref.wrapApp,
        Component = _ref.Component,
        err = _ref.err,
        subscription = _ref.subscription;

    _classCallCheck(this, Router);

    this.onPopState = function (e) {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        var _pathname = _this.pathname,
            _query = _this.query;

        _this.changeState('replaceState', utils_1.formatWithValidation({
          pathname: _pathname,
          query: _query
        }), utils_1.getURL());

        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state.options && e.state.options.fromExternal) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (_this._bps && !_this._bps(e.state)) {
        return;
      }

      var _e$state = e.state,
          url = _e$state.url,
          as = _e$state.as,
          options = _e$state.options;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      _this.replace(url, as, options);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component: Component,
        props: initialProps,
        err: err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp;

    if (true) {
      // in order for `e.state` to work on the `onpopstate` event
      // we have to register the initial route upon initialization
      this.changeState('replaceState', utils_1.formatWithValidation({
        pathname: pathname,
        query: query
      }), as);
      window.addEventListener('popstate', this.onPopState);
      window.addEventListener('unload', function () {
        // Workaround for popstate firing on initial page load when
        // navigating back from an external site
        if (history.state) {
          var _history$state = history.state,
              url = _history$state.url,
              _as2 = _history$state.as,
              options = _history$state.options;

          _this.changeState('replaceState', url, _as2, _Object$assign({}, options, {
            fromExternal: true
          }));
        }
      });
    }
  } // @deprecated backwards compatibility even though it's a private method.


  _createClass(Router, [{
    key: "update",
    value: function update(route, Component) {
      var data = this.components[route];

      if (!data) {
        throw new Error("Cannot update unavailable route: ".concat(route));
      }

      var newData = _Object$assign({}, data, {
        Component: Component
      });

      this.components[route] = newData; // pages/_app.js updated

      if (route === '/_app') {
        this.notify(this.components[this.route]);
        return;
      }

      if (route === this.route) {
        this.notify(newData);
      }
    }
  }, {
    key: "reload",
    value: function reload() {
      window.location.reload();
    }
    /**
     * Go back in history
     */

  }, {
    key: "back",
    value: function back() {
      window.history.back();
    }
    /**
     * Performs a `pushState` with arguments
     * @param url of the route
     * @param as masks `url` for the browser
     * @param options object you can define `shallow` and other options
     */

  }, {
    key: "push",
    value: function push(url) {
      var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.change('pushState', url, as, options);
    }
    /**
     * Performs a `replaceState` with arguments
     * @param url of the route
     * @param as masks `url` for the browser
     * @param options object you can define `shallow` and other options
     */

  }, {
    key: "replace",
    value: function replace(url) {
      var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.change('replaceState', url, as, options);
    }
  }, {
    key: "change",
    value: function change(method, _url, _as, options) {
      var _this2 = this;

      return new _Promise(function (resolve, reject) {
        // marking route changes as a navigation start entry
        if (utils_1.SUPPORTS_PERFORMANCE_USER_TIMING) {
          performance.mark('routeChange');
        } // If url and as provided as an object representation,
        // we'll format them into the string version here.


        var url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
        var as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
        // "<page>/index.html" directly for the SSR page.

        if (true) {
          // @ts-ignore this is temporarily global (attached to window)
          if (__NEXT_DATA__.nextExport) {
            as = rewrite_url_for_export_1.rewriteUrlForNextExport(as);
          }
        }

        _this2.abortComponentLoad(as); // If the url change is only related to a hash change
        // We should not proceed. We should only change the state.
        // WARNING: `_h` is an internal option for handing Next.js client-side
        // hydration. Your app should _never_ use this property. It may change at
        // any time without notice.


        if (!options._h && _this2.onlyAHashChange(as)) {
          _this2.asPath = as;
          Router.events.emit('hashChangeStart', as);

          _this2.changeState(method, url, as);

          _this2.scrollToHash(as);

          Router.events.emit('hashChangeComplete', as);
          return resolve(true);
        }

        var _url_1$parse = url_1.parse(url, true),
            pathname = _url_1$parse.pathname,
            query = _url_1$parse.query,
            protocol = _url_1$parse.protocol;

        if (!pathname || protocol) {
          if (true) {
            throw new Error("Invalid href passed to router: ".concat(url, " https://err.sh/zeit/next.js/invalid-href-passed"));
          }

          return resolve(false);
        } // If asked to change the current URL we should reload the current page
        // (not location.reload() but reload getInitialProps and other Next.js stuffs)
        // We also need to set the method = replaceState always
        // as this should not go into the history (That's how browsers work)
        // We should compare the new asPath to the current asPath, not the url


        if (!_this2.urlIsNew(as)) {
          method = 'replaceState';
        } // @ts-ignore pathname is always a string


        var route = toRoute(pathname);
        var _options$shallow = options.shallow,
            shallow = _options$shallow === void 0 ? false : _options$shallow;

        if (is_dynamic_1.isDynamicRoute(route)) {
          var _url_1$parse2 = url_1.parse(as),
              asPathname = _url_1$parse2.pathname;

          var rr = route_regex_1.getRouteRegex(route);
          var routeMatch = route_matcher_1.getRouteMatcher(rr)(asPathname);

          if (!routeMatch) {
            console.error("Your `<Link>`'s `as` value is incompatible with the `href` value. This is invalid.");
            return resolve(false);
          } // Merge params into `query`, overwriting any specified in search


          _Object$assign(query, routeMatch);
        }

        Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
        // @ts-ignore pathname is always a string

        _this2.getRouteInfo(route, pathname, query, as, shallow).then(function (routeInfo) {
          var error = routeInfo.error;

          if (error && error.cancelled) {
            return resolve(false);
          }

          Router.events.emit('beforeHistoryChange', as);

          _this2.changeState(method, url, as, options);

          var hash = window.location.hash.substring(1);

          if (true) {
            var appComp = _this2.components['/_app'].Component;
            window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
          } // @ts-ignore pathname is always defined


          _this2.set(route, pathname, query, as, _Object$assign({}, routeInfo, {
            hash: hash
          }));

          if (error) {
            Router.events.emit('routeChangeError', error, as);
            throw error;
          }

          Router.events.emit('routeChangeComplete', as);
          return resolve(true);
        }, reject);
      });
    }
  }, {
    key: "changeState",
    value: function changeState(method, url, as) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      if (true) {
        if (typeof window.history === 'undefined') {
          console.error("Warning: window.history is not available.");
          return;
        } // @ts-ignore method should always exist on history


        if (typeof window.history[method] === 'undefined') {
          console.error("Warning: window.history.".concat(method, " is not available"));
          return;
        }
      }

      if (method !== 'pushState' || utils_1.getURL() !== as) {
        // @ts-ignore method should always exist on history
        window.history[method]({
          url: url,
          as: as,
          options: options
        }, null, as);
      }
    }
  }, {
    key: "getRouteInfo",
    value: function getRouteInfo(route, pathname, query, as) {
      var _this3 = this;

      var shallow = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      var cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
      // If the route is already rendered on the screen.

      if (shallow && cachedRouteInfo && this.route === route) {
        return _Promise.resolve(cachedRouteInfo);
      }

      return new _Promise(function (resolve, reject) {
        if (cachedRouteInfo) {
          return resolve(cachedRouteInfo);
        }

        _this3.fetchComponent(route).then(function (Component) {
          return resolve({
            Component: Component
          });
        }, reject);
      }).then(function (routeInfo) {
        var Component = routeInfo.Component;

        if (true) {
          var _require = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js"),
              isValidElementType = _require.isValidElementType;

          if (!isValidElementType(Component)) {
            throw new Error("The default export is not a React Component in page: \"".concat(pathname, "\""));
          }
        }

        return new _Promise(function (resolve, reject) {
          // we provide AppTree later so this needs to be `any`
          _this3.getInitialProps(Component, {
            pathname: pathname,
            query: query,
            asPath: as
          }).then(function (props) {
            routeInfo.props = props;
            _this3.components[route] = routeInfo;
            resolve(routeInfo);
          }, reject);
        });
      })["catch"](function (err) {
        return new _Promise(function (resolve) {
          if (err.code === 'PAGE_LOAD_ERROR') {
            // If we can't load the page it could be one of following reasons
            //  1. Page doesn't exists
            //  2. Page does exist in a different zone
            //  3. Internal error while loading the page
            // So, doing a hard reload is the proper way to deal with this.
            window.location.href = as; // Changing the URL doesn't block executing the current code path.
            // So, we need to mark it as a cancelled error and stop the routing logic.

            err.cancelled = true; // @ts-ignore TODO: fix the control flow here

            return resolve({
              error: err
            });
          }

          if (err.cancelled) {
            // @ts-ignore TODO: fix the control flow here
            return resolve({
              error: err
            });
          }

          resolve(_this3.fetchComponent('/_error').then(function (Component) {
            var routeInfo = {
              Component: Component,
              err: err
            };
            return new _Promise(function (resolve) {
              _this3.getInitialProps(Component, {
                err: err,
                pathname: pathname,
                query: query
              }).then(function (props) {
                routeInfo.props = props;
                routeInfo.error = err;
                resolve(routeInfo);
              }, function (gipErr) {
                console.error('Error in error page `getInitialProps`: ', gipErr);
                routeInfo.error = err;
                routeInfo.props = {};
                resolve(routeInfo);
              });
            });
          }));
        });
      });
    }
  }, {
    key: "set",
    value: function set(route, pathname, query, as, data) {
      this.route = route;
      this.pathname = pathname;
      this.query = query;
      this.asPath = as;
      this.notify(data);
    }
    /**
     * Callback to execute before replacing router state
     * @param cb callback to be executed
     */

  }, {
    key: "beforePopState",
    value: function beforePopState(cb) {
      this._bps = cb;
    }
  }, {
    key: "onlyAHashChange",
    value: function onlyAHashChange(as) {
      if (!this.asPath) return false;

      var _this$asPath$split = this.asPath.split('#'),
          _this$asPath$split2 = _slicedToArray(_this$asPath$split, 2),
          oldUrlNoHash = _this$asPath$split2[0],
          oldHash = _this$asPath$split2[1];

      var _as$split = as.split('#'),
          _as$split2 = _slicedToArray(_as$split, 2),
          newUrlNoHash = _as$split2[0],
          newHash = _as$split2[1]; // Makes sure we scroll to the provided hash if the url/hash are the same


      if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
        return true;
      } // If the urls are change, there's more than a hash change


      if (oldUrlNoHash !== newUrlNoHash) {
        return false;
      } // If the hash has changed, then it's a hash only change.
      // This check is necessary to handle both the enter and
      // leave hash === '' cases. The identity case falls through
      // and is treated as a next reload.


      return oldHash !== newHash;
    }
  }, {
    key: "scrollToHash",
    value: function scrollToHash(as) {
      var _as$split3 = as.split('#'),
          _as$split4 = _slicedToArray(_as$split3, 2),
          hash = _as$split4[1]; // Scroll to top if the hash is just `#` with no value


      if (hash === '') {
        window.scrollTo(0, 0);
        return;
      } // First we check if the element by id is found


      var idEl = document.getElementById(hash);

      if (idEl) {
        idEl.scrollIntoView();
        return;
      } // If there's no element with the id, we check the `name` property
      // To mirror browsers


      var nameEl = document.getElementsByName(hash)[0];

      if (nameEl) {
        nameEl.scrollIntoView();
      }
    }
  }, {
    key: "urlIsNew",
    value: function urlIsNew(asPath) {
      return this.asPath !== asPath;
    }
    /**
     * Prefetch `page` code, you may wait for the data during `page` rendering.
     * This feature only works in production!
     * @param url of prefetched `page`
     */

  }, {
    key: "prefetch",
    value: function prefetch(url) {
      var _this4 = this;

      return new _Promise(function (resolve, reject) {
        var _url_1$parse3 = url_1.parse(url),
            pathname = _url_1$parse3.pathname,
            protocol = _url_1$parse3.protocol;

        if (!pathname || protocol) {
          if (true) {
            throw new Error("Invalid href passed to router: ".concat(url, " https://err.sh/zeit/next.js/invalid-href-passed"));
          }

          return;
        } // Prefetch is not supported in development mode because it would trigger on-demand-entries


        if (true) return; // @ts-ignore pathname is always defined

        var route = toRoute(pathname);

        _this4.pageLoader.prefetch(route).then(resolve, reject);
      });
    }
  }, {
    key: "fetchComponent",
    value: function () {
      var _fetchComponent = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee(route) {
        var cancelled, cancel, Component, error;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                cancelled = false;

                cancel = this.clc = function () {
                  cancelled = true;
                };

                _context.next = 4;
                return this.pageLoader.loadPage(route);

              case 4:
                Component = _context.sent;

                if (!cancelled) {
                  _context.next = 9;
                  break;
                }

                error = new Error("Abort fetching component for route: \"".concat(route, "\""));
                error.cancelled = true;
                throw error;

              case 9:
                if (cancel === this.clc) {
                  this.clc = null;
                }

                return _context.abrupt("return", Component);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function fetchComponent(_x) {
        return _fetchComponent.apply(this, arguments);
      }

      return fetchComponent;
    }()
  }, {
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee2(Component, ctx) {
        var cancelled, cancel, App, props, status, url, AppTree, err;
        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                cancelled = false;

                cancel = function cancel() {
                  cancelled = true;
                };

                this.clc = cancel;
                App = this.components['/_app'].Component;

                if (!( // @ts-ignore workaround for dead-code elimination
                (self.__HAS_SPR || "development" !== 'production') && Component.__NEXT_SPR)) {
                  _context2.next = 11;
                  break;
                }

                url = ctx.asPath ? ctx.asPath : url_1.format({
                  pathname: ctx.pathname,
                  query: ctx.query
                });
                _context2.next = 8;
                return fetch(url, {
                  headers: {
                    'content-type': 'application/json'
                  }
                }).then(function (res) {
                  if (!res.ok) {
                    status = res.status;
                    throw new Error('failed to load prerender data');
                  }

                  return res.json();
                }).then(function (pageProps) {
                  return {
                    pageProps: pageProps
                  };
                })["catch"](function (err) {
                  return {
                    error: err.message,
                    status: status
                  };
                });

              case 8:
                props = _context2.sent;
                _context2.next = 16;
                break;

              case 11:
                AppTree = this._wrapApp(App);
                ctx.AppTree = AppTree;
                _context2.next = 15;
                return utils_1.loadGetInitialProps(App, {
                  AppTree: AppTree,
                  Component: Component,
                  router: this,
                  ctx: ctx
                });

              case 15:
                props = _context2.sent;

              case 16:
                if (cancel === this.clc) {
                  this.clc = null;
                }

                if (!cancelled) {
                  _context2.next = 21;
                  break;
                }

                err = new Error('Loading initial props cancelled');
                err.cancelled = true;
                throw err;

              case 21:
                return _context2.abrupt("return", props);

              case 22:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getInitialProps(_x2, _x3) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }, {
    key: "abortComponentLoad",
    value: function abortComponentLoad(as) {
      if (this.clc) {
        var e = new Error('Route Cancelled');
        e.cancelled = true;
        Router.events.emit('routeChangeError', e, as);
        this.clc();
        this.clc = null;
      }
    }
  }, {
    key: "notify",
    value: function notify(data) {
      this.sub(data, this.components['/_app'].Component);
    }
  }], [{
    key: "_rewriteUrlForNextExport",
    value: function _rewriteUrlForNextExport(url) {
      return rewrite_url_for_export_1.rewriteUrlForNextExport(url);
    }
  }]);

  return Router;
}();

Router.events = mitt_1["default"]();
exports["default"] = Router;

/***/ }),

/***/ "./node_modules/next-server/dist/lib/router/utils/is-dynamic.js":
/*!**********************************************************************!*\
  !*** ./node_modules/next-server/dist/lib/router/utils/is-dynamic.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


var TEST_ROUTE = /\/\[[^\/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next-server/dist/lib/router/utils/route-matcher.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next-server/dist/lib/router/utils/route-matcher.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  var re = routeRegex.re,
      groups = routeRegex.groups;
  return function (pathname) {
    var routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    var params = {};

    _Object$keys(groups).forEach(function (slugName) {
      var m = routeMatch[groups[slugName]];

      if (m !== undefined) {
        params[slugName] = decodeURIComponent(m);
      }
    });

    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next-server/dist/lib/router/utils/route-regex.js":
/*!***********************************************************************!*\
  !*** ./node_modules/next-server/dist/lib/router/utils/route-regex.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  var escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  var groups = {};
  var groupIndex = 1;
  var parameterizedRoute = escapedRoute.replace(/\/\\\[([^\/]+?)\\\](?=\/|$)/g, function (_, $1) {
    return groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1')] = groupIndex++, '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups: groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next-server/dist/lib/runtime-config.js":
/*!*************************************************************!*\
  !*** ./node_modules/next-server/dist/lib/runtime-config.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

var runtimeConfig;

exports["default"] = function () {
  return runtimeConfig;
};

function setConfig(configValue) {
  runtimeConfig = configValue;
}

exports.setConfig = setConfig;

/***/ }),

/***/ "./node_modules/next-server/dist/lib/utils.js":
/*!****************************************************!*\
  !*** ./node_modules/next-server/dist/lib/utils.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");

var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _asyncToGenerator = __webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/**
 * Utils
 */


function execOnce(fn) {
  var _this = this;

  var used = false;
  return function () {
    if (!used) {
      used = true;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      fn.apply(_this, args);
    }
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  var _window$location = window.location,
      protocol = _window$location.protocol,
      hostname = _window$location.hostname,
      port = _window$location.port;
  return "".concat(protocol, "//").concat(hostname).concat(port ? ':' + port : '');
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  var href = window.location.href;
  var origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

function loadGetInitialProps(_x, _x2) {
  return _loadGetInitialProps.apply(this, arguments);
}

function _loadGetInitialProps() {
  _loadGetInitialProps = _asyncToGenerator(
  /*#__PURE__*/
  _regeneratorRuntime.mark(function _callee(Component, ctx) {
    var message, res, props, _message;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (false) {}

            if (!(Component.prototype && Component.prototype.getInitialProps)) {
              _context.next = 4;
              break;
            }

            message = "\"".concat(getDisplayName(Component), ".getInitialProps()\" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.");
            throw new Error(message);

          case 4:
            // when called from _app `ctx` is nested in `ctx`
            res = ctx.res || ctx.ctx && ctx.ctx.res;

            if (Component.getInitialProps) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", {});

          case 7:
            _context.next = 9;
            return Component.getInitialProps(ctx);

          case 9:
            props = _context.sent;

            if (!(res && isResSent(res))) {
              _context.next = 12;
              break;
            }

            return _context.abrupt("return", props);

          case 12:
            if (props) {
              _context.next = 15;
              break;
            }

            _message = "\"".concat(getDisplayName(Component), ".getInitialProps()\" should resolve to an object. But found \"").concat(props, "\" instead.");
            throw new Error(_message);

          case 15:
            if (true) {
              if (_Object$keys(props).length === 0 && !ctx.ctx) {
                console.warn("".concat(getDisplayName(Component), " returned an empty object from `getInitialProps`. This de-optimizes and prevents automatic prerendering. https://err.sh/zeit/next.js/empty-object-getInitialProps"));
              }
            }

            return _context.abrupt("return", props);

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _loadGetInitialProps.apply(this, arguments);
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      _Object$keys(url).forEach(function (key) {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn("Unknown key passed via urlObject into url.format: ".concat(key));
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fcomponents%2F%5Bid%5D&absolutePagePath=%2FUsers%2Fgarthdb%2FSpectrum%2Fspectrum-css%2Fpages%2Fcomponents%2F%5Bid%5D.js!./":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fcomponents%2F%5Bid%5D&absolutePagePath=%2FUsers%2Fgarthdb%2FSpectrum%2Fspectrum-css%2Fpages%2Fcomponents%2F%5Bid%5D.js ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/components/[id]", function() {
      var page = __webpack_require__(/*! ./pages/components/[id].js */ "./pages/components/[id].js")
      if(true) {
        module.hot.accept(/*! ./pages/components/[id].js */ "./pages/components/[id].js", function() {
          if(!next.router.components["/components/[id]"]) return
          var updatedPage = __webpack_require__(/*! ./pages/components/[id].js */ "./pages/components/[id].js")
          next.router.update("/components/[id]", updatedPage.default || updatedPage)
        })
      }
      return { page: page.default || page }
    }]);
  

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js");

var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js");

var _inherits = __webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "./node_modules/url/url.js");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! next-server/dist/lib/router/rewrite-url-for-export */ "./node_modules/next-server/dist/lib/router/rewrite-url-for-export.js");

var _utils = __webpack_require__(/*! next-server/dist/lib/utils */ "./node_modules/next-server/dist/lib/utils.js");
/* global __NEXT_DATA__ */


function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new _map["default"]();
var IntersectionObserver = true ? window.IntersectionObserver : undefined;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners["delete"](entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = function listenToIntersections(el, cb) {
  var observer = getObserver();

  if (!observer) {
    return function () {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return function () {
    observer.unobserve(el);
    listeners["delete"](el);
  };
};

var Link =
/*#__PURE__*/
function (_react$Component) {
  _inherits(Link, _react$Component);

  function Link(props) {
    var _this;

    _classCallCheck(this, Link);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Link).call(this, props));
    _this.p = void 0;

    _this.cleanUpListeners = function () {};

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    _this.linkClicked = function (e) {
      // @ts-ignore target exists on currentTarget
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var pathname = window.location.pathname;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router["default"][_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    _this.p = props.prefetch !== false;
    return _this;
  }

  _createClass(Link, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.cleanUpListeners();
    }
  }, {
    key: "handleRef",
    value: function handleRef(ref) {
      var _this2 = this;

      if (this.p && IntersectionObserver && ref && ref.tagName) {
        this.cleanUpListeners();
        this.cleanUpListeners = listenToIntersections(ref, function () {
          _this2.prefetch();
        });
      }
    } // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.p || false) return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = (0, _url.resolve)(pathname, parsedHref);

      _router["default"].prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = _react["default"].createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = _react.Children.only(children);

      var props = {
        ref: function ref(el) {
          _this3.handleRef(el);

          if (child && typeof child === 'object' && child.ref) {
            if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
              child.ref.current = el;
            }
          }
        },
        onMouseEnter: function onMouseEnter(e) {
          if (child.props && typeof child.props.onMouseEnter === 'function') {
            child.props.onMouseEnter(e);
          }

          _this3.prefetch();
        },
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this3.linkClicked(e);
          }
        } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
        // defined, we specify the current 'href', so that repetition is not needed by the user

      };

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (true) {
        if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
          props.href = (0, _rewriteUrlForExport.rewriteUrlForNextExport)(props.href);
        }
      }

      return _react["default"].cloneElement(child, props);
    }
  }]);

  return Link;
}(_react.Component);

Link.propTypes = void 0;

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "./node_modules/prop-types-exact/build/index.js");

  Link.propTypes = exact({
    href: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]).isRequired,
    as: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]),
    prefetch: _propTypes["default"].bool,
    replace: _propTypes["default"].bool,
    shallow: _propTypes["default"].bool,
    passHref: _propTypes["default"].bool,
    scroll: _propTypes["default"].bool,
    children: _propTypes["default"].oneOfType([_propTypes["default"].element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _getIterator = __webpack_require__(/*! @babel/runtime-corejs2/core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");

var _construct = __webpack_require__(/*! @babel/runtime-corejs2/helpers/construct */ "./node_modules/@babel/runtime-corejs2/helpers/construct.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! next-server/dist/lib/router/router */ "./node_modules/next-server/dist/lib/router/router.js"));

exports.Router = _router2["default"];
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! next-server/dist/lib/router-context */ "./node_modules/next-server/dist/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter["default"];
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (true) {
      this.readyCallbacks.push(cb);
    }
  }
}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty["default"])(singletonRouter, 'events', {
  get: function get() {
    return _router2["default"].events;
  }
});
urlPropertyFields.forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty["default"])(singletonRouter, field, {
    get: function get() {
      var router = getRouter();
      return router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field].apply(router, arguments);
  };
});
routerEvents.forEach(function (event) {
  singletonRouter.ready(function () {
    _router2["default"].events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField].apply(_singletonRouter, arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports["default"] = _default;

function useRouter() {
  return _react["default"].useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = _construct(_router2["default"], args);
  singletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = _getIterator(urlPropertyFields), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var property = _step.value;

      if (typeof _router[property] === 'object') {
        instance[property] = (0, _extends2["default"])({}, _router[property]); // makes sure query is not stateful

        continue;
      }

      instance[property] = _router[property];
    } // Events is a static property on the router, the router doesn't have to be initialized to use it

  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  instance.events = _router2["default"].events;
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return _router[field].apply(_router, arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js");

var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js");

var _inherits = __webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

function withRouter(ComposedComponent) {
  var WithRouteWrapper =
  /*#__PURE__*/
  function (_react$default$Compon) {
    _inherits(WithRouteWrapper, _react$default$Compon);

    function WithRouteWrapper() {
      var _this;

      _classCallCheck(this, WithRouteWrapper);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(WithRouteWrapper).apply(this, arguments));
      _this.context = void 0;
      return _this;
    }

    _createClass(WithRouteWrapper, [{
      key: "render",
      value: function render() {
        return _react["default"].createElement(ComposedComponent, (0, _extends2["default"])({
          router: this.context.router
        }, this.props));
      }
    }]);

    return WithRouteWrapper;
  }(_react["default"].Component);

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes["default"].object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
}

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/next/node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!***************************************************************************************************!*\
  !*** delegated ./node_modules/object-assign/index.js from dll-reference dll_129a35c7ec57967eb265 ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_129a35c7ec57967eb265 */ "dll-reference dll_129a35c7ec57967eb265"))("./node_modules/object-assign/index.js");

/***/ }),

/***/ "./node_modules/object-keys/implementation.js":
/*!****************************************************!*\
  !*** ./node_modules/object-keys/implementation.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keysShim;
if (!Object.keys) {
	// modified from https://github.com/es-shims/es5-shim
	var has = Object.prototype.hasOwnProperty;
	var toStr = Object.prototype.toString;
	var isArgs = __webpack_require__(/*! ./isArguments */ "./node_modules/object-keys/isArguments.js"); // eslint-disable-line global-require
	var isEnumerable = Object.prototype.propertyIsEnumerable;
	var hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');
	var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
	var dontEnums = [
		'toString',
		'toLocaleString',
		'valueOf',
		'hasOwnProperty',
		'isPrototypeOf',
		'propertyIsEnumerable',
		'constructor'
	];
	var equalsConstructorPrototype = function (o) {
		var ctor = o.constructor;
		return ctor && ctor.prototype === o;
	};
	var excludedKeys = {
		$applicationCache: true,
		$console: true,
		$external: true,
		$frame: true,
		$frameElement: true,
		$frames: true,
		$innerHeight: true,
		$innerWidth: true,
		$onmozfullscreenchange: true,
		$onmozfullscreenerror: true,
		$outerHeight: true,
		$outerWidth: true,
		$pageXOffset: true,
		$pageYOffset: true,
		$parent: true,
		$scrollLeft: true,
		$scrollTop: true,
		$scrollX: true,
		$scrollY: true,
		$self: true,
		$webkitIndexedDB: true,
		$webkitStorageInfo: true,
		$window: true
	};
	var hasAutomationEqualityBug = (function () {
		/* global window */
		if (typeof window === 'undefined') { return false; }
		for (var k in window) {
			try {
				if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
					try {
						equalsConstructorPrototype(window[k]);
					} catch (e) {
						return true;
					}
				}
			} catch (e) {
				return true;
			}
		}
		return false;
	}());
	var equalsConstructorPrototypeIfNotBuggy = function (o) {
		/* global window */
		if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
			return equalsConstructorPrototype(o);
		}
		try {
			return equalsConstructorPrototype(o);
		} catch (e) {
			return false;
		}
	};

	keysShim = function keys(object) {
		var isObject = object !== null && typeof object === 'object';
		var isFunction = toStr.call(object) === '[object Function]';
		var isArguments = isArgs(object);
		var isString = isObject && toStr.call(object) === '[object String]';
		var theKeys = [];

		if (!isObject && !isFunction && !isArguments) {
			throw new TypeError('Object.keys called on a non-object');
		}

		var skipProto = hasProtoEnumBug && isFunction;
		if (isString && object.length > 0 && !has.call(object, 0)) {
			for (var i = 0; i < object.length; ++i) {
				theKeys.push(String(i));
			}
		}

		if (isArguments && object.length > 0) {
			for (var j = 0; j < object.length; ++j) {
				theKeys.push(String(j));
			}
		} else {
			for (var name in object) {
				if (!(skipProto && name === 'prototype') && has.call(object, name)) {
					theKeys.push(String(name));
				}
			}
		}

		if (hasDontEnumBug) {
			var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);

			for (var k = 0; k < dontEnums.length; ++k) {
				if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
					theKeys.push(dontEnums[k]);
				}
			}
		}
		return theKeys;
	};
}
module.exports = keysShim;


/***/ }),

/***/ "./node_modules/object-keys/index.js":
/*!*******************************************!*\
  !*** ./node_modules/object-keys/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var slice = Array.prototype.slice;
var isArgs = __webpack_require__(/*! ./isArguments */ "./node_modules/object-keys/isArguments.js");

var origKeys = Object.keys;
var keysShim = origKeys ? function keys(o) { return origKeys(o); } : __webpack_require__(/*! ./implementation */ "./node_modules/object-keys/implementation.js");

var originalKeys = Object.keys;

keysShim.shim = function shimObjectKeys() {
	if (Object.keys) {
		var keysWorksWithArguments = (function () {
			// Safari 5.0 bug
			var args = Object.keys(arguments);
			return args && args.length === arguments.length;
		}(1, 2));
		if (!keysWorksWithArguments) {
			Object.keys = function keys(object) { // eslint-disable-line func-name-matching
				if (isArgs(object)) {
					return originalKeys(slice.call(object));
				}
				return originalKeys(object);
			};
		}
	} else {
		Object.keys = keysShim;
	}
	return Object.keys || keysShim;
};

module.exports = keysShim;


/***/ }),

/***/ "./node_modules/object-keys/isArguments.js":
/*!*************************************************!*\
  !*** ./node_modules/object-keys/isArguments.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;

module.exports = function isArguments(value) {
	var str = toStr.call(value);
	var isArgs = str === '[object Arguments]';
	if (!isArgs) {
		isArgs = str !== '[object Array]' &&
			value !== null &&
			typeof value === 'object' &&
			typeof value.length === 'number' &&
			value.length >= 0 &&
			toStr.call(value.callee) === '[object Function]';
	}
	return isArgs;
};


/***/ }),

/***/ "./node_modules/object.assign/implementation.js":
/*!******************************************************!*\
  !*** ./node_modules/object.assign/implementation.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// modified from https://github.com/es-shims/es6-shim
var keys = __webpack_require__(/*! object-keys */ "./node_modules/object-keys/index.js");
var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");
var canBeObject = function (obj) {
	return typeof obj !== 'undefined' && obj !== null;
};
var hasSymbols = __webpack_require__(/*! has-symbols/shams */ "./node_modules/has-symbols/shams.js")();
var toObject = Object;
var push = bind.call(Function.call, Array.prototype.push);
var propIsEnumerable = bind.call(Function.call, Object.prototype.propertyIsEnumerable);
var originalGetSymbols = hasSymbols ? Object.getOwnPropertySymbols : null;

module.exports = function assign(target, source1) {
	if (!canBeObject(target)) { throw new TypeError('target must be an object'); }
	var objTarget = toObject(target);
	var s, source, i, props, syms, value, key;
	for (s = 1; s < arguments.length; ++s) {
		source = toObject(arguments[s]);
		props = keys(source);
		var getSymbols = hasSymbols && (Object.getOwnPropertySymbols || originalGetSymbols);
		if (getSymbols) {
			syms = getSymbols(source);
			for (i = 0; i < syms.length; ++i) {
				key = syms[i];
				if (propIsEnumerable(source, key)) {
					push(props, key);
				}
			}
		}
		for (i = 0; i < props.length; ++i) {
			key = props[i];
			value = source[key];
			if (propIsEnumerable(source, key)) {
				objTarget[key] = value;
			}
		}
	}
	return objTarget;
};


/***/ }),

/***/ "./node_modules/object.assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object.assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defineProperties = __webpack_require__(/*! define-properties */ "./node_modules/define-properties/index.js");

var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/object.assign/implementation.js");
var getPolyfill = __webpack_require__(/*! ./polyfill */ "./node_modules/object.assign/polyfill.js");
var shim = __webpack_require__(/*! ./shim */ "./node_modules/object.assign/shim.js");

var polyfill = getPolyfill();

defineProperties(polyfill, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = polyfill;


/***/ }),

/***/ "./node_modules/object.assign/polyfill.js":
/*!************************************************!*\
  !*** ./node_modules/object.assign/polyfill.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/object.assign/implementation.js");

var lacksProperEnumerationOrder = function () {
	if (!Object.assign) {
		return false;
	}
	// v8, specifically in node 4.x, has a bug with incorrect property enumeration order
	// note: this does not detect the bug unless there's 20 characters
	var str = 'abcdefghijklmnopqrst';
	var letters = str.split('');
	var map = {};
	for (var i = 0; i < letters.length; ++i) {
		map[letters[i]] = letters[i];
	}
	var obj = Object.assign({}, map);
	var actual = '';
	for (var k in obj) {
		actual += k;
	}
	return str !== actual;
};

var assignHasPendingExceptions = function () {
	if (!Object.assign || !Object.preventExtensions) {
		return false;
	}
	// Firefox 37 still has "pending exception" logic in its Object.assign implementation,
	// which is 72% slower than our shim, and Firefox 40's native implementation.
	var thrower = Object.preventExtensions({ 1: 2 });
	try {
		Object.assign(thrower, 'xy');
	} catch (e) {
		return thrower[1] === 'y';
	}
	return false;
};

module.exports = function getPolyfill() {
	if (!Object.assign) {
		return implementation;
	}
	if (lacksProperEnumerationOrder()) {
		return implementation;
	}
	if (assignHasPendingExceptions()) {
		return implementation;
	}
	return Object.assign;
};


/***/ }),

/***/ "./node_modules/object.assign/shim.js":
/*!********************************************!*\
  !*** ./node_modules/object.assign/shim.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__(/*! define-properties */ "./node_modules/define-properties/index.js");
var getPolyfill = __webpack_require__(/*! ./polyfill */ "./node_modules/object.assign/polyfill.js");

module.exports = function shimAssign() {
	var polyfill = getPolyfill();
	define(
		Object,
		{ assign: polyfill },
		{ assign: function () { return Object.assign !== polyfill; } }
	);
	return polyfill;
};


/***/ }),

/***/ "./node_modules/prop-types-exact/build/helpers/isPlainObject.js":
/*!**********************************************************************!*\
  !*** ./node_modules/prop-types-exact/build/helpers/isPlainObject.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports['default'] = isPlainObject;
function isPlainObject(x) {
  return x && (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' && !Array.isArray(x);
}
module.exports = exports['default'];
//# sourceMappingURL=isPlainObject.js.map

/***/ }),

/***/ "./node_modules/prop-types-exact/build/index.js":
/*!******************************************************!*\
  !*** ./node_modules/prop-types-exact/build/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = forbidExtraProps;

var _object = __webpack_require__(/*! object.assign */ "./node_modules/object.assign/index.js");

var _object2 = _interopRequireDefault(_object);

var _has = __webpack_require__(/*! has */ "./node_modules/has/src/index.js");

var _has2 = _interopRequireDefault(_has);

var _isPlainObject = __webpack_require__(/*! ./helpers/isPlainObject */ "./node_modules/prop-types-exact/build/helpers/isPlainObject.js");

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var zeroWidthSpace = '\u200B';
var specialProperty = 'prop-types-exact: ' + zeroWidthSpace;
var semaphore = typeof Symbol === 'function' && typeof Symbol['for'] === 'function' ? Symbol['for'](specialProperty) : /* istanbul ignore next */specialProperty;

function brand(fn) {
  return (0, _object2['default'])(fn, _defineProperty({}, specialProperty, semaphore));
}

function isBranded(value) {
  return value && value[specialProperty] === semaphore;
}

function forbidExtraProps(propTypes) {
  if (!(0, _isPlainObject2['default'])(propTypes)) {
    throw new TypeError('given propTypes must be an object');
  }
  if ((0, _has2['default'])(propTypes, specialProperty) && !isBranded(propTypes[specialProperty])) {
    throw new TypeError('Against all odds, you created a propType for a prop that uses both the zero-width space and our custom string - which, sadly, conflicts with `prop-types-exact`');
  }

  return (0, _object2['default'])({}, propTypes, _defineProperty({}, specialProperty, brand(function () {
    function forbidUnknownProps(props, _, componentName) {
      var unknownProps = Object.keys(props).filter(function (prop) {
        return !(0, _has2['default'])(propTypes, prop);
      });
      if (unknownProps.length > 0) {
        return new TypeError(String(componentName) + ': unknown props found: ' + String(unknownProps.join(', ')));
      }
      return null;
    }

    return forbidUnknownProps;
  }())));
}
module.exports = exports['default'];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!*********************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/checkPropTypes.js from dll-reference dll_129a35c7ec57967eb265 ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_129a35c7ec57967eb265 */ "dll-reference dll_129a35c7ec57967eb265"))("./node_modules/prop-types/checkPropTypes.js");

/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*******************************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/lib/ReactPropTypesSecret.js from dll-reference dll_129a35c7ec57967eb265 ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_129a35c7ec57967eb265 */ "dll-reference dll_129a35c7ec57967eb265"))("./node_modules/prop-types/lib/ReactPropTypesSecret.js");

/***/ }),

/***/ "./node_modules/punycode/punycode.js":
/*!*******************************************!*\
  !*** ./node_modules/punycode/punycode.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, global) {var __WEBPACK_AMD_DEFINE_RESULT__;/*! https://mths.be/punycode v1.3.2 by @mathias */
;(function(root) {

	/** Detect free variables */
	var freeExports =  true && exports &&
		!exports.nodeType && exports;
	var freeModule =  true && module &&
		!module.nodeType && module;
	var freeGlobal = typeof global == 'object' && global;
	if (
		freeGlobal.global === freeGlobal ||
		freeGlobal.window === freeGlobal ||
		freeGlobal.self === freeGlobal
	) {
		root = freeGlobal;
	}

	/**
	 * The `punycode` object.
	 * @name punycode
	 * @type Object
	 */
	var punycode,

	/** Highest positive signed 32-bit float value */
	maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

	/** Bootstring parameters */
	base = 36,
	tMin = 1,
	tMax = 26,
	skew = 38,
	damp = 700,
	initialBias = 72,
	initialN = 128, // 0x80
	delimiter = '-', // '\x2D'

	/** Regular expressions */
	regexPunycode = /^xn--/,
	regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
	regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators

	/** Error messages */
	errors = {
		'overflow': 'Overflow: input needs wider integers to process',
		'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
		'invalid-input': 'Invalid input'
	},

	/** Convenience shortcuts */
	baseMinusTMin = base - tMin,
	floor = Math.floor,
	stringFromCharCode = String.fromCharCode,

	/** Temporary variable */
	key;

	/*--------------------------------------------------------------------------*/

	/**
	 * A generic error utility function.
	 * @private
	 * @param {String} type The error type.
	 * @returns {Error} Throws a `RangeError` with the applicable error message.
	 */
	function error(type) {
		throw RangeError(errors[type]);
	}

	/**
	 * A generic `Array#map` utility function.
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} callback The function that gets called for every array
	 * item.
	 * @returns {Array} A new array of values returned by the callback function.
	 */
	function map(array, fn) {
		var length = array.length;
		var result = [];
		while (length--) {
			result[length] = fn(array[length]);
		}
		return result;
	}

	/**
	 * A simple `Array#map`-like wrapper to work with domain name strings or email
	 * addresses.
	 * @private
	 * @param {String} domain The domain name or email address.
	 * @param {Function} callback The function that gets called for every
	 * character.
	 * @returns {Array} A new string of characters returned by the callback
	 * function.
	 */
	function mapDomain(string, fn) {
		var parts = string.split('@');
		var result = '';
		if (parts.length > 1) {
			// In email addresses, only the domain name should be punycoded. Leave
			// the local part (i.e. everything up to `@`) intact.
			result = parts[0] + '@';
			string = parts[1];
		}
		// Avoid `split(regex)` for IE8 compatibility. See #17.
		string = string.replace(regexSeparators, '\x2E');
		var labels = string.split('.');
		var encoded = map(labels, fn).join('.');
		return result + encoded;
	}

	/**
	 * Creates an array containing the numeric code points of each Unicode
	 * character in the string. While JavaScript uses UCS-2 internally,
	 * this function will convert a pair of surrogate halves (each of which
	 * UCS-2 exposes as separate characters) into a single code point,
	 * matching UTF-16.
	 * @see `punycode.ucs2.encode`
	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode.ucs2
	 * @name decode
	 * @param {String} string The Unicode input string (UCS-2).
	 * @returns {Array} The new array of code points.
	 */
	function ucs2decode(string) {
		var output = [],
		    counter = 0,
		    length = string.length,
		    value,
		    extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// high surrogate, and there is a next character
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) { // low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// unmatched surrogate; only append this code unit, in case the next
					// code unit is the high surrogate of a surrogate pair
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	/**
	 * Creates a string based on an array of numeric code points.
	 * @see `punycode.ucs2.decode`
	 * @memberOf punycode.ucs2
	 * @name encode
	 * @param {Array} codePoints The array of numeric code points.
	 * @returns {String} The new Unicode string (UCS-2).
	 */
	function ucs2encode(array) {
		return map(array, function(value) {
			var output = '';
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
			return output;
		}).join('');
	}

	/**
	 * Converts a basic code point into a digit/integer.
	 * @see `digitToBasic()`
	 * @private
	 * @param {Number} codePoint The basic numeric code point value.
	 * @returns {Number} The numeric value of a basic code point (for use in
	 * representing integers) in the range `0` to `base - 1`, or `base` if
	 * the code point does not represent a value.
	 */
	function basicToDigit(codePoint) {
		if (codePoint - 48 < 10) {
			return codePoint - 22;
		}
		if (codePoint - 65 < 26) {
			return codePoint - 65;
		}
		if (codePoint - 97 < 26) {
			return codePoint - 97;
		}
		return base;
	}

	/**
	 * Converts a digit/integer into a basic code point.
	 * @see `basicToDigit()`
	 * @private
	 * @param {Number} digit The numeric value of a basic code point.
	 * @returns {Number} The basic code point whose value (when used for
	 * representing integers) is `digit`, which needs to be in the range
	 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
	 * used; else, the lowercase form is used. The behavior is undefined
	 * if `flag` is non-zero and `digit` has no uppercase form.
	 */
	function digitToBasic(digit, flag) {
		//  0..25 map to ASCII a..z or A..Z
		// 26..35 map to ASCII 0..9
		return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
	}

	/**
	 * Bias adaptation function as per section 3.4 of RFC 3492.
	 * http://tools.ietf.org/html/rfc3492#section-3.4
	 * @private
	 */
	function adapt(delta, numPoints, firstTime) {
		var k = 0;
		delta = firstTime ? floor(delta / damp) : delta >> 1;
		delta += floor(delta / numPoints);
		for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
			delta = floor(delta / baseMinusTMin);
		}
		return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
	}

	/**
	 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
	 * symbols.
	 * @memberOf punycode
	 * @param {String} input The Punycode string of ASCII-only symbols.
	 * @returns {String} The resulting string of Unicode symbols.
	 */
	function decode(input) {
		// Don't use UCS-2
		var output = [],
		    inputLength = input.length,
		    out,
		    i = 0,
		    n = initialN,
		    bias = initialBias,
		    basic,
		    j,
		    index,
		    oldi,
		    w,
		    k,
		    digit,
		    t,
		    /** Cached calculation results */
		    baseMinusT;

		// Handle the basic code points: let `basic` be the number of input code
		// points before the last delimiter, or `0` if there is none, then copy
		// the first basic code points to the output.

		basic = input.lastIndexOf(delimiter);
		if (basic < 0) {
			basic = 0;
		}

		for (j = 0; j < basic; ++j) {
			// if it's not a basic code point
			if (input.charCodeAt(j) >= 0x80) {
				error('not-basic');
			}
			output.push(input.charCodeAt(j));
		}

		// Main decoding loop: start just after the last delimiter if any basic code
		// points were copied; start at the beginning otherwise.

		for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

			// `index` is the index of the next character to be consumed.
			// Decode a generalized variable-length integer into `delta`,
			// which gets added to `i`. The overflow checking is easier
			// if we increase `i` as we go, then subtract off its starting
			// value at the end to obtain `delta`.
			for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

				if (index >= inputLength) {
					error('invalid-input');
				}

				digit = basicToDigit(input.charCodeAt(index++));

				if (digit >= base || digit > floor((maxInt - i) / w)) {
					error('overflow');
				}

				i += digit * w;
				t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

				if (digit < t) {
					break;
				}

				baseMinusT = base - t;
				if (w > floor(maxInt / baseMinusT)) {
					error('overflow');
				}

				w *= baseMinusT;

			}

			out = output.length + 1;
			bias = adapt(i - oldi, out, oldi == 0);

			// `i` was supposed to wrap around from `out` to `0`,
			// incrementing `n` each time, so we'll fix that now:
			if (floor(i / out) > maxInt - n) {
				error('overflow');
			}

			n += floor(i / out);
			i %= out;

			// Insert `n` at position `i` of the output
			output.splice(i++, 0, n);

		}

		return ucs2encode(output);
	}

	/**
	 * Converts a string of Unicode symbols (e.g. a domain name label) to a
	 * Punycode string of ASCII-only symbols.
	 * @memberOf punycode
	 * @param {String} input The string of Unicode symbols.
	 * @returns {String} The resulting Punycode string of ASCII-only symbols.
	 */
	function encode(input) {
		var n,
		    delta,
		    handledCPCount,
		    basicLength,
		    bias,
		    j,
		    m,
		    q,
		    k,
		    t,
		    currentValue,
		    output = [],
		    /** `inputLength` will hold the number of code points in `input`. */
		    inputLength,
		    /** Cached calculation results */
		    handledCPCountPlusOne,
		    baseMinusT,
		    qMinusT;

		// Convert the input in UCS-2 to Unicode
		input = ucs2decode(input);

		// Cache the length
		inputLength = input.length;

		// Initialize the state
		n = initialN;
		delta = 0;
		bias = initialBias;

		// Handle the basic code points
		for (j = 0; j < inputLength; ++j) {
			currentValue = input[j];
			if (currentValue < 0x80) {
				output.push(stringFromCharCode(currentValue));
			}
		}

		handledCPCount = basicLength = output.length;

		// `handledCPCount` is the number of code points that have been handled;
		// `basicLength` is the number of basic code points.

		// Finish the basic string - if it is not empty - with a delimiter
		if (basicLength) {
			output.push(delimiter);
		}

		// Main encoding loop:
		while (handledCPCount < inputLength) {

			// All non-basic code points < n have been handled already. Find the next
			// larger one:
			for (m = maxInt, j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue >= n && currentValue < m) {
					m = currentValue;
				}
			}

			// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
			// but guard against overflow
			handledCPCountPlusOne = handledCPCount + 1;
			if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
				error('overflow');
			}

			delta += (m - n) * handledCPCountPlusOne;
			n = m;

			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];

				if (currentValue < n && ++delta > maxInt) {
					error('overflow');
				}

				if (currentValue == n) {
					// Represent delta as a generalized variable-length integer
					for (q = delta, k = base; /* no condition */; k += base) {
						t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
						if (q < t) {
							break;
						}
						qMinusT = q - t;
						baseMinusT = base - t;
						output.push(
							stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
						);
						q = floor(qMinusT / baseMinusT);
					}

					output.push(stringFromCharCode(digitToBasic(q, 0)));
					bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
					delta = 0;
					++handledCPCount;
				}
			}

			++delta;
			++n;

		}
		return output.join('');
	}

	/**
	 * Converts a Punycode string representing a domain name or an email address
	 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
	 * it doesn't matter if you call it on a string that has already been
	 * converted to Unicode.
	 * @memberOf punycode
	 * @param {String} input The Punycoded domain name or email address to
	 * convert to Unicode.
	 * @returns {String} The Unicode representation of the given Punycode
	 * string.
	 */
	function toUnicode(input) {
		return mapDomain(input, function(string) {
			return regexPunycode.test(string)
				? decode(string.slice(4).toLowerCase())
				: string;
		});
	}

	/**
	 * Converts a Unicode string representing a domain name or an email address to
	 * Punycode. Only the non-ASCII parts of the domain name will be converted,
	 * i.e. it doesn't matter if you call it with a domain that's already in
	 * ASCII.
	 * @memberOf punycode
	 * @param {String} input The domain name or email address to convert, as a
	 * Unicode string.
	 * @returns {String} The Punycode representation of the given domain name or
	 * email address.
	 */
	function toASCII(input) {
		return mapDomain(input, function(string) {
			return regexNonASCII.test(string)
				? 'xn--' + encode(string)
				: string;
		});
	}

	/*--------------------------------------------------------------------------*/

	/** Define the public API */
	punycode = {
		/**
		 * A string representing the current Punycode.js version number.
		 * @memberOf punycode
		 * @type String
		 */
		'version': '1.3.2',
		/**
		 * An object of methods to convert from JavaScript's internal character
		 * representation (UCS-2) to Unicode code points, and back.
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode
		 * @type Object
		 */
		'ucs2': {
			'decode': ucs2decode,
			'encode': ucs2encode
		},
		'decode': decode,
		'encode': encode,
		'toASCII': toASCII,
		'toUnicode': toUnicode
	};

	/** Expose `punycode` */
	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		true
	) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
			return punycode;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}

}(this));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../next/node_modules/webpack/buildin/module.js */ "./node_modules/next/node_modules/webpack/buildin/module.js")(module), __webpack_require__(/*! ./../next/node_modules/webpack/buildin/global.js */ "./node_modules/next/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/querystring-es3/decode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/decode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),

/***/ "./node_modules/querystring-es3/encode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/encode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),

/***/ "./node_modules/querystring-es3/index.js":
/*!***********************************************!*\
  !*** ./node_modules/querystring-es3/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(/*! ./decode */ "./node_modules/querystring-es3/decode.js");
exports.encode = exports.stringify = __webpack_require__(/*! ./encode */ "./node_modules/querystring-es3/encode.js");


/***/ }),

/***/ "./node_modules/react-dom/index.js":
/*!***********************************************************************************************!*\
  !*** delegated ./node_modules/react-dom/index.js from dll-reference dll_129a35c7ec57967eb265 ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_129a35c7ec57967eb265 */ "dll-reference dll_129a35c7ec57967eb265"))("./node_modules/react-dom/index.js");

/***/ }),

/***/ "./node_modules/react-fast-compare/index.js":
/*!**************************************************!*\
  !*** ./node_modules/react-fast-compare/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isArray = Array.isArray;
var keyList = Object.keys;
var hasProp = Object.prototype.hasOwnProperty;
var hasElementType = typeof Element !== 'undefined';

function equal(a, b) {
  // fast-deep-equal index.js 2.0.1
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    var arrA = isArray(a)
      , arrB = isArray(b)
      , i
      , length
      , key;

    if (arrA && arrB) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }

    if (arrA != arrB) return false;

    var dateA = a instanceof Date
      , dateB = b instanceof Date;
    if (dateA != dateB) return false;
    if (dateA && dateB) return a.getTime() == b.getTime();

    var regexpA = a instanceof RegExp
      , regexpB = b instanceof RegExp;
    if (regexpA != regexpB) return false;
    if (regexpA && regexpB) return a.toString() == b.toString();

    var keys = keyList(a);
    length = keys.length;

    if (length !== keyList(b).length)
      return false;

    for (i = length; i-- !== 0;)
      if (!hasProp.call(b, keys[i])) return false;
    // end fast-deep-equal

    // start react-fast-compare
    // custom handling for DOM elements
    if (hasElementType && a instanceof Element && b instanceof Element)
      return a === b;

    // custom handling for React
    for (i = length; i-- !== 0;) {
      key = keys[i];
      if (key === '_owner' && a.$$typeof) {
        // React-specific: avoid traversing React elements' _owner.
        //  _owner contains circular references
        // and is not needed when comparing the actual elements (and not their owners)
        // .$$typeof and ._store on just reasonable markers of a react element
        continue;
      } else {
        // all other properties should be traversed as usual
        if (!equal(a[key], b[key])) return false;
      }
    }
    // end react-fast-compare

    // fast-deep-equal index.js 2.0.1
    return true;
  }

  return a !== a && b !== b;
}
// end fast-deep-equal

module.exports = function exportedEqual(a, b) {
  try {
    return equal(a, b);
  } catch (error) {
    if ((error.message && error.message.match(/stack|recursion/i)) || (error.number === -2146828260)) {
      // warn on circular references, don't crash
      // browsers give this different errors name and messages:
      // chrome/safari: "RangeError", "Maximum call stack size exceeded"
      // firefox: "InternalError", too much recursion"
      // edge: "Error", "Out of stack space"
      console.warn('Warning: react-fast-compare does not handle circular references.', error.name, error.message);
      return false;
    }
    // some other error. we should definitely know about these
    throw error;
  }
};


/***/ }),

/***/ "./node_modules/react-helmet/lib/Helmet.js":
/*!*************************************************!*\
  !*** ./node_modules/react-helmet/lib/Helmet.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.__esModule = true;
exports.Helmet = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactSideEffect = __webpack_require__(/*! react-side-effect */ "./node_modules/react-side-effect/lib/index.js");

var _reactSideEffect2 = _interopRequireDefault(_reactSideEffect);

var _reactFastCompare = __webpack_require__(/*! react-fast-compare */ "./node_modules/react-fast-compare/index.js");

var _reactFastCompare2 = _interopRequireDefault(_reactFastCompare);

var _HelmetUtils = __webpack_require__(/*! ./HelmetUtils.js */ "./node_modules/react-helmet/lib/HelmetUtils.js");

var _HelmetConstants = __webpack_require__(/*! ./HelmetConstants.js */ "./node_modules/react-helmet/lib/HelmetConstants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Helmet = function Helmet(Component) {
    var _class, _temp;

    return _temp = _class = function (_React$Component) {
        _inherits(HelmetWrapper, _React$Component);

        function HelmetWrapper() {
            _classCallCheck(this, HelmetWrapper);

            return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
        }

        HelmetWrapper.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
            return !(0, _reactFastCompare2.default)(this.props, nextProps);
        };

        HelmetWrapper.prototype.mapNestedChildrenToProps = function mapNestedChildrenToProps(child, nestedChildren) {
            if (!nestedChildren) {
                return null;
            }

            switch (child.type) {
                case _HelmetConstants.TAG_NAMES.SCRIPT:
                case _HelmetConstants.TAG_NAMES.NOSCRIPT:
                    return {
                        innerHTML: nestedChildren
                    };

                case _HelmetConstants.TAG_NAMES.STYLE:
                    return {
                        cssText: nestedChildren
                    };
            }

            throw new Error("<" + child.type + " /> elements are self-closing and can not contain children. Refer to our API for more information.");
        };

        HelmetWrapper.prototype.flattenArrayTypeChildren = function flattenArrayTypeChildren(_ref) {
            var _extends2;

            var child = _ref.child,
                arrayTypeChildren = _ref.arrayTypeChildren,
                newChildProps = _ref.newChildProps,
                nestedChildren = _ref.nestedChildren;

            return _extends({}, arrayTypeChildren, (_extends2 = {}, _extends2[child.type] = [].concat(arrayTypeChildren[child.type] || [], [_extends({}, newChildProps, this.mapNestedChildrenToProps(child, nestedChildren))]), _extends2));
        };

        HelmetWrapper.prototype.mapObjectTypeChildren = function mapObjectTypeChildren(_ref2) {
            var _extends3, _extends4;

            var child = _ref2.child,
                newProps = _ref2.newProps,
                newChildProps = _ref2.newChildProps,
                nestedChildren = _ref2.nestedChildren;

            switch (child.type) {
                case _HelmetConstants.TAG_NAMES.TITLE:
                    return _extends({}, newProps, (_extends3 = {}, _extends3[child.type] = nestedChildren, _extends3.titleAttributes = _extends({}, newChildProps), _extends3));

                case _HelmetConstants.TAG_NAMES.BODY:
                    return _extends({}, newProps, {
                        bodyAttributes: _extends({}, newChildProps)
                    });

                case _HelmetConstants.TAG_NAMES.HTML:
                    return _extends({}, newProps, {
                        htmlAttributes: _extends({}, newChildProps)
                    });
            }

            return _extends({}, newProps, (_extends4 = {}, _extends4[child.type] = _extends({}, newChildProps), _extends4));
        };

        HelmetWrapper.prototype.mapArrayTypeChildrenToProps = function mapArrayTypeChildrenToProps(arrayTypeChildren, newProps) {
            var newFlattenedProps = _extends({}, newProps);

            Object.keys(arrayTypeChildren).forEach(function (arrayChildName) {
                var _extends5;

                newFlattenedProps = _extends({}, newFlattenedProps, (_extends5 = {}, _extends5[arrayChildName] = arrayTypeChildren[arrayChildName], _extends5));
            });

            return newFlattenedProps;
        };

        HelmetWrapper.prototype.warnOnInvalidChildren = function warnOnInvalidChildren(child, nestedChildren) {
            if (true) {
                if (!_HelmetConstants.VALID_TAG_NAMES.some(function (name) {
                    return child.type === name;
                })) {
                    if (typeof child.type === "function") {
                        return (0, _HelmetUtils.warn)("You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.");
                    }

                    return (0, _HelmetUtils.warn)("Only elements types " + _HelmetConstants.VALID_TAG_NAMES.join(", ") + " are allowed. Helmet does not support rendering <" + child.type + "> elements. Refer to our API for more information.");
                }

                if (nestedChildren && typeof nestedChildren !== "string" && (!Array.isArray(nestedChildren) || nestedChildren.some(function (nestedChild) {
                    return typeof nestedChild !== "string";
                }))) {
                    throw new Error("Helmet expects a string as a child of <" + child.type + ">. Did you forget to wrap your children in braces? ( <" + child.type + ">{``}</" + child.type + "> ) Refer to our API for more information.");
                }
            }

            return true;
        };

        HelmetWrapper.prototype.mapChildrenToProps = function mapChildrenToProps(children, newProps) {
            var _this2 = this;

            var arrayTypeChildren = {};

            _react2.default.Children.forEach(children, function (child) {
                if (!child || !child.props) {
                    return;
                }

                var _child$props = child.props,
                    nestedChildren = _child$props.children,
                    childProps = _objectWithoutProperties(_child$props, ["children"]);

                var newChildProps = (0, _HelmetUtils.convertReactPropstoHtmlAttributes)(childProps);

                _this2.warnOnInvalidChildren(child, nestedChildren);

                switch (child.type) {
                    case _HelmetConstants.TAG_NAMES.LINK:
                    case _HelmetConstants.TAG_NAMES.META:
                    case _HelmetConstants.TAG_NAMES.NOSCRIPT:
                    case _HelmetConstants.TAG_NAMES.SCRIPT:
                    case _HelmetConstants.TAG_NAMES.STYLE:
                        arrayTypeChildren = _this2.flattenArrayTypeChildren({
                            child: child,
                            arrayTypeChildren: arrayTypeChildren,
                            newChildProps: newChildProps,
                            nestedChildren: nestedChildren
                        });
                        break;

                    default:
                        newProps = _this2.mapObjectTypeChildren({
                            child: child,
                            newProps: newProps,
                            newChildProps: newChildProps,
                            nestedChildren: nestedChildren
                        });
                        break;
                }
            });

            newProps = this.mapArrayTypeChildrenToProps(arrayTypeChildren, newProps);
            return newProps;
        };

        HelmetWrapper.prototype.render = function render() {
            var _props = this.props,
                children = _props.children,
                props = _objectWithoutProperties(_props, ["children"]);

            var newProps = _extends({}, props);

            if (children) {
                newProps = this.mapChildrenToProps(children, newProps);
            }

            return _react2.default.createElement(Component, newProps);
        };

        _createClass(HelmetWrapper, null, [{
            key: "canUseDOM",


            // Component.peek comes from react-side-effect:
            // For testing, you may use a static peek() method available on the returned component.
            // It lets you get the current state without resetting the mounted instance stack.
            // Don’t use it for anything other than testing.

            /**
             * @param {Object} base: {"target": "_blank", "href": "http://mysite.com/"}
             * @param {Object} bodyAttributes: {"className": "root"}
             * @param {String} defaultTitle: "Default Title"
             * @param {Boolean} defer: true
             * @param {Boolean} encodeSpecialCharacters: true
             * @param {Object} htmlAttributes: {"lang": "en", "amp": undefined}
             * @param {Array} link: [{"rel": "canonical", "href": "http://mysite.com/example"}]
             * @param {Array} meta: [{"name": "description", "content": "Test description"}]
             * @param {Array} noscript: [{"innerHTML": "<img src='http://mysite.com/js/test.js'"}]
             * @param {Function} onChangeClientState: "(newState) => console.log(newState)"
             * @param {Array} script: [{"type": "text/javascript", "src": "http://mysite.com/js/test.js"}]
             * @param {Array} style: [{"type": "text/css", "cssText": "div { display: block; color: blue; }"}]
             * @param {String} title: "Title"
             * @param {Object} titleAttributes: {"itemprop": "name"}
             * @param {String} titleTemplate: "MySite.com - %s"
             */
            set: function set(canUseDOM) {
                Component.canUseDOM = canUseDOM;
            }
        }]);

        return HelmetWrapper;
    }(_react2.default.Component), _class.propTypes = {
        base: _propTypes2.default.object,
        bodyAttributes: _propTypes2.default.object,
        children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]),
        defaultTitle: _propTypes2.default.string,
        defer: _propTypes2.default.bool,
        encodeSpecialCharacters: _propTypes2.default.bool,
        htmlAttributes: _propTypes2.default.object,
        link: _propTypes2.default.arrayOf(_propTypes2.default.object),
        meta: _propTypes2.default.arrayOf(_propTypes2.default.object),
        noscript: _propTypes2.default.arrayOf(_propTypes2.default.object),
        onChangeClientState: _propTypes2.default.func,
        script: _propTypes2.default.arrayOf(_propTypes2.default.object),
        style: _propTypes2.default.arrayOf(_propTypes2.default.object),
        title: _propTypes2.default.string,
        titleAttributes: _propTypes2.default.object,
        titleTemplate: _propTypes2.default.string
    }, _class.defaultProps = {
        defer: true,
        encodeSpecialCharacters: true
    }, _class.peek = Component.peek, _class.rewind = function () {
        var mappedState = Component.rewind();
        if (!mappedState) {
            // provide fallback if mappedState is undefined
            mappedState = (0, _HelmetUtils.mapStateOnServer)({
                baseTag: [],
                bodyAttributes: {},
                encodeSpecialCharacters: true,
                htmlAttributes: {},
                linkTags: [],
                metaTags: [],
                noscriptTags: [],
                scriptTags: [],
                styleTags: [],
                title: "",
                titleAttributes: {}
            });
        }

        return mappedState;
    }, _temp;
};

var NullComponent = function NullComponent() {
    return null;
};

var HelmetSideEffects = (0, _reactSideEffect2.default)(_HelmetUtils.reducePropsToState, _HelmetUtils.handleClientStateChange, _HelmetUtils.mapStateOnServer)(NullComponent);

var HelmetExport = Helmet(HelmetSideEffects);
HelmetExport.renderStatic = HelmetExport.rewind;

exports.Helmet = HelmetExport;
exports.default = HelmetExport;

/***/ }),

/***/ "./node_modules/react-helmet/lib/HelmetConstants.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-helmet/lib/HelmetConstants.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.__esModule = true;
var ATTRIBUTE_NAMES = exports.ATTRIBUTE_NAMES = {
    BODY: "bodyAttributes",
    HTML: "htmlAttributes",
    TITLE: "titleAttributes"
};

var TAG_NAMES = exports.TAG_NAMES = {
    BASE: "base",
    BODY: "body",
    HEAD: "head",
    HTML: "html",
    LINK: "link",
    META: "meta",
    NOSCRIPT: "noscript",
    SCRIPT: "script",
    STYLE: "style",
    TITLE: "title"
};

var VALID_TAG_NAMES = exports.VALID_TAG_NAMES = Object.keys(TAG_NAMES).map(function (name) {
    return TAG_NAMES[name];
});

var TAG_PROPERTIES = exports.TAG_PROPERTIES = {
    CHARSET: "charset",
    CSS_TEXT: "cssText",
    HREF: "href",
    HTTPEQUIV: "http-equiv",
    INNER_HTML: "innerHTML",
    ITEM_PROP: "itemprop",
    NAME: "name",
    PROPERTY: "property",
    REL: "rel",
    SRC: "src"
};

var REACT_TAG_MAP = exports.REACT_TAG_MAP = {
    accesskey: "accessKey",
    charset: "charSet",
    class: "className",
    contenteditable: "contentEditable",
    contextmenu: "contextMenu",
    "http-equiv": "httpEquiv",
    itemprop: "itemProp",
    tabindex: "tabIndex"
};

var HELMET_PROPS = exports.HELMET_PROPS = {
    DEFAULT_TITLE: "defaultTitle",
    DEFER: "defer",
    ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
    ON_CHANGE_CLIENT_STATE: "onChangeClientState",
    TITLE_TEMPLATE: "titleTemplate"
};

var HTML_TAG_MAP = exports.HTML_TAG_MAP = Object.keys(REACT_TAG_MAP).reduce(function (obj, key) {
    obj[REACT_TAG_MAP[key]] = key;
    return obj;
}, {});

var SELF_CLOSING_TAGS = exports.SELF_CLOSING_TAGS = [TAG_NAMES.NOSCRIPT, TAG_NAMES.SCRIPT, TAG_NAMES.STYLE];

var HELMET_ATTRIBUTE = exports.HELMET_ATTRIBUTE = "data-react-helmet";

/***/ }),

/***/ "./node_modules/react-helmet/lib/HelmetUtils.js":
/*!******************************************************!*\
  !*** ./node_modules/react-helmet/lib/HelmetUtils.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports.__esModule = true;
exports.warn = exports.requestAnimationFrame = exports.reducePropsToState = exports.mapStateOnServer = exports.handleClientStateChange = exports.convertReactPropstoHtmlAttributes = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _objectAssign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _HelmetConstants = __webpack_require__(/*! ./HelmetConstants.js */ "./node_modules/react-helmet/lib/HelmetConstants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var encodeSpecialCharacters = function encodeSpecialCharacters(str) {
    var encode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    if (encode === false) {
        return String(str);
    }

    return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
};

var getTitleFromPropsList = function getTitleFromPropsList(propsList) {
    var innermostTitle = getInnermostProperty(propsList, _HelmetConstants.TAG_NAMES.TITLE);
    var innermostTemplate = getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.TITLE_TEMPLATE);

    if (innermostTemplate && innermostTitle) {
        // use function arg to avoid need to escape $ characters
        return innermostTemplate.replace(/%s/g, function () {
            return innermostTitle;
        });
    }

    var innermostDefaultTitle = getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.DEFAULT_TITLE);

    return innermostTitle || innermostDefaultTitle || undefined;
};

var getOnChangeClientState = function getOnChangeClientState(propsList) {
    return getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.ON_CHANGE_CLIENT_STATE) || function () {};
};

var getAttributesFromPropsList = function getAttributesFromPropsList(tagType, propsList) {
    return propsList.filter(function (props) {
        return typeof props[tagType] !== "undefined";
    }).map(function (props) {
        return props[tagType];
    }).reduce(function (tagAttrs, current) {
        return _extends({}, tagAttrs, current);
    }, {});
};

var getBaseTagFromPropsList = function getBaseTagFromPropsList(primaryAttributes, propsList) {
    return propsList.filter(function (props) {
        return typeof props[_HelmetConstants.TAG_NAMES.BASE] !== "undefined";
    }).map(function (props) {
        return props[_HelmetConstants.TAG_NAMES.BASE];
    }).reverse().reduce(function (innermostBaseTag, tag) {
        if (!innermostBaseTag.length) {
            var keys = Object.keys(tag);

            for (var i = 0; i < keys.length; i++) {
                var attributeKey = keys[i];
                var lowerCaseAttributeKey = attributeKey.toLowerCase();

                if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && tag[lowerCaseAttributeKey]) {
                    return innermostBaseTag.concat(tag);
                }
            }
        }

        return innermostBaseTag;
    }, []);
};

var getTagsFromPropsList = function getTagsFromPropsList(tagName, primaryAttributes, propsList) {
    // Calculate list of tags, giving priority innermost component (end of the propslist)
    var approvedSeenTags = {};

    return propsList.filter(function (props) {
        if (Array.isArray(props[tagName])) {
            return true;
        }
        if (typeof props[tagName] !== "undefined") {
            warn("Helmet: " + tagName + " should be of type \"Array\". Instead found type \"" + _typeof(props[tagName]) + "\"");
        }
        return false;
    }).map(function (props) {
        return props[tagName];
    }).reverse().reduce(function (approvedTags, instanceTags) {
        var instanceSeenTags = {};

        instanceTags.filter(function (tag) {
            var primaryAttributeKey = void 0;
            var keys = Object.keys(tag);
            for (var i = 0; i < keys.length; i++) {
                var attributeKey = keys[i];
                var lowerCaseAttributeKey = attributeKey.toLowerCase();

                // Special rule with link tags, since rel and href are both primary tags, rel takes priority
                if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && !(primaryAttributeKey === _HelmetConstants.TAG_PROPERTIES.REL && tag[primaryAttributeKey].toLowerCase() === "canonical") && !(lowerCaseAttributeKey === _HelmetConstants.TAG_PROPERTIES.REL && tag[lowerCaseAttributeKey].toLowerCase() === "stylesheet")) {
                    primaryAttributeKey = lowerCaseAttributeKey;
                }
                // Special case for innerHTML which doesn't work lowercased
                if (primaryAttributes.indexOf(attributeKey) !== -1 && (attributeKey === _HelmetConstants.TAG_PROPERTIES.INNER_HTML || attributeKey === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT || attributeKey === _HelmetConstants.TAG_PROPERTIES.ITEM_PROP)) {
                    primaryAttributeKey = attributeKey;
                }
            }

            if (!primaryAttributeKey || !tag[primaryAttributeKey]) {
                return false;
            }

            var value = tag[primaryAttributeKey].toLowerCase();

            if (!approvedSeenTags[primaryAttributeKey]) {
                approvedSeenTags[primaryAttributeKey] = {};
            }

            if (!instanceSeenTags[primaryAttributeKey]) {
                instanceSeenTags[primaryAttributeKey] = {};
            }

            if (!approvedSeenTags[primaryAttributeKey][value]) {
                instanceSeenTags[primaryAttributeKey][value] = true;
                return true;
            }

            return false;
        }).reverse().forEach(function (tag) {
            return approvedTags.push(tag);
        });

        // Update seen tags with tags from this instance
        var keys = Object.keys(instanceSeenTags);
        for (var i = 0; i < keys.length; i++) {
            var attributeKey = keys[i];
            var tagUnion = (0, _objectAssign2.default)({}, approvedSeenTags[attributeKey], instanceSeenTags[attributeKey]);

            approvedSeenTags[attributeKey] = tagUnion;
        }

        return approvedTags;
    }, []).reverse();
};

var getInnermostProperty = function getInnermostProperty(propsList, property) {
    for (var i = propsList.length - 1; i >= 0; i--) {
        var props = propsList[i];

        if (props.hasOwnProperty(property)) {
            return props[property];
        }
    }

    return null;
};

var reducePropsToState = function reducePropsToState(propsList) {
    return {
        baseTag: getBaseTagFromPropsList([_HelmetConstants.TAG_PROPERTIES.HREF], propsList),
        bodyAttributes: getAttributesFromPropsList(_HelmetConstants.ATTRIBUTE_NAMES.BODY, propsList),
        defer: getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.DEFER),
        encode: getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),
        htmlAttributes: getAttributesFromPropsList(_HelmetConstants.ATTRIBUTE_NAMES.HTML, propsList),
        linkTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.LINK, [_HelmetConstants.TAG_PROPERTIES.REL, _HelmetConstants.TAG_PROPERTIES.HREF], propsList),
        metaTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.META, [_HelmetConstants.TAG_PROPERTIES.NAME, _HelmetConstants.TAG_PROPERTIES.CHARSET, _HelmetConstants.TAG_PROPERTIES.HTTPEQUIV, _HelmetConstants.TAG_PROPERTIES.PROPERTY, _HelmetConstants.TAG_PROPERTIES.ITEM_PROP], propsList),
        noscriptTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.NOSCRIPT, [_HelmetConstants.TAG_PROPERTIES.INNER_HTML], propsList),
        onChangeClientState: getOnChangeClientState(propsList),
        scriptTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.SCRIPT, [_HelmetConstants.TAG_PROPERTIES.SRC, _HelmetConstants.TAG_PROPERTIES.INNER_HTML], propsList),
        styleTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.STYLE, [_HelmetConstants.TAG_PROPERTIES.CSS_TEXT], propsList),
        title: getTitleFromPropsList(propsList),
        titleAttributes: getAttributesFromPropsList(_HelmetConstants.ATTRIBUTE_NAMES.TITLE, propsList)
    };
};

var rafPolyfill = function () {
    var clock = Date.now();

    return function (callback) {
        var currentTime = Date.now();

        if (currentTime - clock > 16) {
            clock = currentTime;
            callback(currentTime);
        } else {
            setTimeout(function () {
                rafPolyfill(callback);
            }, 0);
        }
    };
}();

var cafPolyfill = function cafPolyfill(id) {
    return clearTimeout(id);
};

var requestAnimationFrame = typeof window !== "undefined" ? window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || rafPolyfill : global.requestAnimationFrame || rafPolyfill;

var cancelAnimationFrame = typeof window !== "undefined" ? window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || cafPolyfill : global.cancelAnimationFrame || cafPolyfill;

var warn = function warn(msg) {
    return console && typeof console.warn === "function" && console.warn(msg);
};

var _helmetCallback = null;

var handleClientStateChange = function handleClientStateChange(newState) {
    if (_helmetCallback) {
        cancelAnimationFrame(_helmetCallback);
    }

    if (newState.defer) {
        _helmetCallback = requestAnimationFrame(function () {
            commitTagChanges(newState, function () {
                _helmetCallback = null;
            });
        });
    } else {
        commitTagChanges(newState);
        _helmetCallback = null;
    }
};

var commitTagChanges = function commitTagChanges(newState, cb) {
    var baseTag = newState.baseTag,
        bodyAttributes = newState.bodyAttributes,
        htmlAttributes = newState.htmlAttributes,
        linkTags = newState.linkTags,
        metaTags = newState.metaTags,
        noscriptTags = newState.noscriptTags,
        onChangeClientState = newState.onChangeClientState,
        scriptTags = newState.scriptTags,
        styleTags = newState.styleTags,
        title = newState.title,
        titleAttributes = newState.titleAttributes;

    updateAttributes(_HelmetConstants.TAG_NAMES.BODY, bodyAttributes);
    updateAttributes(_HelmetConstants.TAG_NAMES.HTML, htmlAttributes);

    updateTitle(title, titleAttributes);

    var tagUpdates = {
        baseTag: updateTags(_HelmetConstants.TAG_NAMES.BASE, baseTag),
        linkTags: updateTags(_HelmetConstants.TAG_NAMES.LINK, linkTags),
        metaTags: updateTags(_HelmetConstants.TAG_NAMES.META, metaTags),
        noscriptTags: updateTags(_HelmetConstants.TAG_NAMES.NOSCRIPT, noscriptTags),
        scriptTags: updateTags(_HelmetConstants.TAG_NAMES.SCRIPT, scriptTags),
        styleTags: updateTags(_HelmetConstants.TAG_NAMES.STYLE, styleTags)
    };

    var addedTags = {};
    var removedTags = {};

    Object.keys(tagUpdates).forEach(function (tagType) {
        var _tagUpdates$tagType = tagUpdates[tagType],
            newTags = _tagUpdates$tagType.newTags,
            oldTags = _tagUpdates$tagType.oldTags;


        if (newTags.length) {
            addedTags[tagType] = newTags;
        }
        if (oldTags.length) {
            removedTags[tagType] = tagUpdates[tagType].oldTags;
        }
    });

    cb && cb();

    onChangeClientState(newState, addedTags, removedTags);
};

var flattenArray = function flattenArray(possibleArray) {
    return Array.isArray(possibleArray) ? possibleArray.join("") : possibleArray;
};

var updateTitle = function updateTitle(title, attributes) {
    if (typeof title !== "undefined" && document.title !== title) {
        document.title = flattenArray(title);
    }

    updateAttributes(_HelmetConstants.TAG_NAMES.TITLE, attributes);
};

var updateAttributes = function updateAttributes(tagName, attributes) {
    var elementTag = document.getElementsByTagName(tagName)[0];

    if (!elementTag) {
        return;
    }

    var helmetAttributeString = elementTag.getAttribute(_HelmetConstants.HELMET_ATTRIBUTE);
    var helmetAttributes = helmetAttributeString ? helmetAttributeString.split(",") : [];
    var attributesToRemove = [].concat(helmetAttributes);
    var attributeKeys = Object.keys(attributes);

    for (var i = 0; i < attributeKeys.length; i++) {
        var attribute = attributeKeys[i];
        var value = attributes[attribute] || "";

        if (elementTag.getAttribute(attribute) !== value) {
            elementTag.setAttribute(attribute, value);
        }

        if (helmetAttributes.indexOf(attribute) === -1) {
            helmetAttributes.push(attribute);
        }

        var indexToSave = attributesToRemove.indexOf(attribute);
        if (indexToSave !== -1) {
            attributesToRemove.splice(indexToSave, 1);
        }
    }

    for (var _i = attributesToRemove.length - 1; _i >= 0; _i--) {
        elementTag.removeAttribute(attributesToRemove[_i]);
    }

    if (helmetAttributes.length === attributesToRemove.length) {
        elementTag.removeAttribute(_HelmetConstants.HELMET_ATTRIBUTE);
    } else if (elementTag.getAttribute(_HelmetConstants.HELMET_ATTRIBUTE) !== attributeKeys.join(",")) {
        elementTag.setAttribute(_HelmetConstants.HELMET_ATTRIBUTE, attributeKeys.join(","));
    }
};

var updateTags = function updateTags(type, tags) {
    var headElement = document.head || document.querySelector(_HelmetConstants.TAG_NAMES.HEAD);
    var tagNodes = headElement.querySelectorAll(type + "[" + _HelmetConstants.HELMET_ATTRIBUTE + "]");
    var oldTags = Array.prototype.slice.call(tagNodes);
    var newTags = [];
    var indexToDelete = void 0;

    if (tags && tags.length) {
        tags.forEach(function (tag) {
            var newElement = document.createElement(type);

            for (var attribute in tag) {
                if (tag.hasOwnProperty(attribute)) {
                    if (attribute === _HelmetConstants.TAG_PROPERTIES.INNER_HTML) {
                        newElement.innerHTML = tag.innerHTML;
                    } else if (attribute === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT) {
                        if (newElement.styleSheet) {
                            newElement.styleSheet.cssText = tag.cssText;
                        } else {
                            newElement.appendChild(document.createTextNode(tag.cssText));
                        }
                    } else {
                        var value = typeof tag[attribute] === "undefined" ? "" : tag[attribute];
                        newElement.setAttribute(attribute, value);
                    }
                }
            }

            newElement.setAttribute(_HelmetConstants.HELMET_ATTRIBUTE, "true");

            // Remove a duplicate tag from domTagstoRemove, so it isn't cleared.
            if (oldTags.some(function (existingTag, index) {
                indexToDelete = index;
                return newElement.isEqualNode(existingTag);
            })) {
                oldTags.splice(indexToDelete, 1);
            } else {
                newTags.push(newElement);
            }
        });
    }

    oldTags.forEach(function (tag) {
        return tag.parentNode.removeChild(tag);
    });
    newTags.forEach(function (tag) {
        return headElement.appendChild(tag);
    });

    return {
        oldTags: oldTags,
        newTags: newTags
    };
};

var generateElementAttributesAsString = function generateElementAttributesAsString(attributes) {
    return Object.keys(attributes).reduce(function (str, key) {
        var attr = typeof attributes[key] !== "undefined" ? key + "=\"" + attributes[key] + "\"" : "" + key;
        return str ? str + " " + attr : attr;
    }, "");
};

var generateTitleAsString = function generateTitleAsString(type, title, attributes, encode) {
    var attributeString = generateElementAttributesAsString(attributes);
    var flattenedTitle = flattenArray(title);
    return attributeString ? "<" + type + " " + _HelmetConstants.HELMET_ATTRIBUTE + "=\"true\" " + attributeString + ">" + encodeSpecialCharacters(flattenedTitle, encode) + "</" + type + ">" : "<" + type + " " + _HelmetConstants.HELMET_ATTRIBUTE + "=\"true\">" + encodeSpecialCharacters(flattenedTitle, encode) + "</" + type + ">";
};

var generateTagsAsString = function generateTagsAsString(type, tags, encode) {
    return tags.reduce(function (str, tag) {
        var attributeHtml = Object.keys(tag).filter(function (attribute) {
            return !(attribute === _HelmetConstants.TAG_PROPERTIES.INNER_HTML || attribute === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT);
        }).reduce(function (string, attribute) {
            var attr = typeof tag[attribute] === "undefined" ? attribute : attribute + "=\"" + encodeSpecialCharacters(tag[attribute], encode) + "\"";
            return string ? string + " " + attr : attr;
        }, "");

        var tagContent = tag.innerHTML || tag.cssText || "";

        var isSelfClosing = _HelmetConstants.SELF_CLOSING_TAGS.indexOf(type) === -1;

        return str + "<" + type + " " + _HelmetConstants.HELMET_ATTRIBUTE + "=\"true\" " + attributeHtml + (isSelfClosing ? "/>" : ">" + tagContent + "</" + type + ">");
    }, "");
};

var convertElementAttributestoReactProps = function convertElementAttributestoReactProps(attributes) {
    var initProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return Object.keys(attributes).reduce(function (obj, key) {
        obj[_HelmetConstants.REACT_TAG_MAP[key] || key] = attributes[key];
        return obj;
    }, initProps);
};

var convertReactPropstoHtmlAttributes = function convertReactPropstoHtmlAttributes(props) {
    var initAttributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return Object.keys(props).reduce(function (obj, key) {
        obj[_HelmetConstants.HTML_TAG_MAP[key] || key] = props[key];
        return obj;
    }, initAttributes);
};

var generateTitleAsReactComponent = function generateTitleAsReactComponent(type, title, attributes) {
    var _initProps;

    // assigning into an array to define toString function on it
    var initProps = (_initProps = {
        key: title
    }, _initProps[_HelmetConstants.HELMET_ATTRIBUTE] = true, _initProps);
    var props = convertElementAttributestoReactProps(attributes, initProps);

    return [_react2.default.createElement(_HelmetConstants.TAG_NAMES.TITLE, props, title)];
};

var generateTagsAsReactComponent = function generateTagsAsReactComponent(type, tags) {
    return tags.map(function (tag, i) {
        var _mappedTag;

        var mappedTag = (_mappedTag = {
            key: i
        }, _mappedTag[_HelmetConstants.HELMET_ATTRIBUTE] = true, _mappedTag);

        Object.keys(tag).forEach(function (attribute) {
            var mappedAttribute = _HelmetConstants.REACT_TAG_MAP[attribute] || attribute;

            if (mappedAttribute === _HelmetConstants.TAG_PROPERTIES.INNER_HTML || mappedAttribute === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT) {
                var content = tag.innerHTML || tag.cssText;
                mappedTag.dangerouslySetInnerHTML = { __html: content };
            } else {
                mappedTag[mappedAttribute] = tag[attribute];
            }
        });

        return _react2.default.createElement(type, mappedTag);
    });
};

var getMethodsForTag = function getMethodsForTag(type, tags, encode) {
    switch (type) {
        case _HelmetConstants.TAG_NAMES.TITLE:
            return {
                toComponent: function toComponent() {
                    return generateTitleAsReactComponent(type, tags.title, tags.titleAttributes, encode);
                },
                toString: function toString() {
                    return generateTitleAsString(type, tags.title, tags.titleAttributes, encode);
                }
            };
        case _HelmetConstants.ATTRIBUTE_NAMES.BODY:
        case _HelmetConstants.ATTRIBUTE_NAMES.HTML:
            return {
                toComponent: function toComponent() {
                    return convertElementAttributestoReactProps(tags);
                },
                toString: function toString() {
                    return generateElementAttributesAsString(tags);
                }
            };
        default:
            return {
                toComponent: function toComponent() {
                    return generateTagsAsReactComponent(type, tags);
                },
                toString: function toString() {
                    return generateTagsAsString(type, tags, encode);
                }
            };
    }
};

var mapStateOnServer = function mapStateOnServer(_ref) {
    var baseTag = _ref.baseTag,
        bodyAttributes = _ref.bodyAttributes,
        encode = _ref.encode,
        htmlAttributes = _ref.htmlAttributes,
        linkTags = _ref.linkTags,
        metaTags = _ref.metaTags,
        noscriptTags = _ref.noscriptTags,
        scriptTags = _ref.scriptTags,
        styleTags = _ref.styleTags,
        _ref$title = _ref.title,
        title = _ref$title === undefined ? "" : _ref$title,
        titleAttributes = _ref.titleAttributes;
    return {
        base: getMethodsForTag(_HelmetConstants.TAG_NAMES.BASE, baseTag, encode),
        bodyAttributes: getMethodsForTag(_HelmetConstants.ATTRIBUTE_NAMES.BODY, bodyAttributes, encode),
        htmlAttributes: getMethodsForTag(_HelmetConstants.ATTRIBUTE_NAMES.HTML, htmlAttributes, encode),
        link: getMethodsForTag(_HelmetConstants.TAG_NAMES.LINK, linkTags, encode),
        meta: getMethodsForTag(_HelmetConstants.TAG_NAMES.META, metaTags, encode),
        noscript: getMethodsForTag(_HelmetConstants.TAG_NAMES.NOSCRIPT, noscriptTags, encode),
        script: getMethodsForTag(_HelmetConstants.TAG_NAMES.SCRIPT, scriptTags, encode),
        style: getMethodsForTag(_HelmetConstants.TAG_NAMES.STYLE, styleTags, encode),
        title: getMethodsForTag(_HelmetConstants.TAG_NAMES.TITLE, { title: title, titleAttributes: titleAttributes }, encode)
    };
};

exports.convertReactPropstoHtmlAttributes = convertReactPropstoHtmlAttributes;
exports.handleClientStateChange = handleClientStateChange;
exports.mapStateOnServer = mapStateOnServer;
exports.reducePropsToState = reducePropsToState;
exports.requestAnimationFrame = requestAnimationFrame;
exports.warn = warn;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../next/node_modules/webpack/buildin/global.js */ "./node_modules/next/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-side-effect/lib/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-side-effect/lib/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var React__default = _interopDefault(React);
var shallowEqual = _interopDefault(__webpack_require__(/*! shallowequal */ "./node_modules/shallowequal/index.js"));

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
function withSideEffect(reducePropsToState, handleStateChangeOnClient, mapStateOnServer) {
  if (typeof reducePropsToState !== 'function') {
    throw new Error('Expected reducePropsToState to be a function.');
  }

  if (typeof handleStateChangeOnClient !== 'function') {
    throw new Error('Expected handleStateChangeOnClient to be a function.');
  }

  if (typeof mapStateOnServer !== 'undefined' && typeof mapStateOnServer !== 'function') {
    throw new Error('Expected mapStateOnServer to either be undefined or a function.');
  }

  function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
  }

  return function wrap(WrappedComponent) {
    if (typeof WrappedComponent !== 'function') {
      throw new Error('Expected WrappedComponent to be a React component.');
    }

    var mountedInstances = [];
    var state;

    function emitChange() {
      state = reducePropsToState(mountedInstances.map(function (instance) {
        return instance.props;
      }));

      if (SideEffect.canUseDOM) {
        handleStateChangeOnClient(state);
      } else if (mapStateOnServer) {
        state = mapStateOnServer(state);
      }
    }

    var SideEffect =
    /*#__PURE__*/
    function (_Component) {
      _inheritsLoose(SideEffect, _Component);

      function SideEffect() {
        return _Component.apply(this, arguments) || this;
      }

      // Try to use displayName of wrapped component
      // Expose canUseDOM so tests can monkeypatch it
      SideEffect.peek = function peek() {
        return state;
      };

      SideEffect.rewind = function rewind() {
        if (SideEffect.canUseDOM) {
          throw new Error('You may only call rewind() on the server. Call peek() to read the current state.');
        }

        var recordedState = state;
        state = undefined;
        mountedInstances = [];
        return recordedState;
      };

      var _proto = SideEffect.prototype;

      _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
        return !shallowEqual(nextProps, this.props);
      };

      _proto.componentWillMount = function componentWillMount() {
        mountedInstances.push(this);
        emitChange();
      };

      _proto.componentDidUpdate = function componentDidUpdate() {
        emitChange();
      };

      _proto.componentWillUnmount = function componentWillUnmount() {
        var index = mountedInstances.indexOf(this);
        mountedInstances.splice(index, 1);
        emitChange();
      };

      _proto.render = function render() {
        return React__default.createElement(WrappedComponent, this.props);
      };

      return SideEffect;
    }(React.Component);

    _defineProperty(SideEffect, "displayName", "SideEffect(" + getDisplayName(WrappedComponent) + ")");

    _defineProperty(SideEffect, "canUseDOM", canUseDOM);

    return SideEffect;
  };
}

module.exports = withSideEffect;


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_129a35c7ec57967eb265 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_129a35c7ec57967eb265 */ "dll-reference dll_129a35c7ec57967eb265"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/shallowequal/index.js":
/*!********************************************!*\
  !*** ./node_modules/shallowequal/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//

module.exports = function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

  if (ret !== void 0) {
    return !!ret;
  }

  if (objA === objB) {
    return true;
  }

  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

  // Test for A's keys different from B.
  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key)) {
      return false;
    }

    var valueA = objA[key];
    var valueB = objB[key];

    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

    if (ret === false || (ret === void 0 && valueA !== valueB)) {
      return false;
    }
  }

  return true;
};


/***/ }),

/***/ "./node_modules/url/url.js":
/*!*********************************!*\
  !*** ./node_modules/url/url.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var punycode = __webpack_require__(/*! punycode */ "./node_modules/punycode/punycode.js");
var util = __webpack_require__(/*! ./util */ "./node_modules/url/util.js");

exports.parse = urlParse;
exports.resolve = urlResolve;
exports.resolveObject = urlResolveObject;
exports.format = urlFormat;

exports.Url = Url;

function Url() {
  this.protocol = null;
  this.slashes = null;
  this.auth = null;
  this.host = null;
  this.port = null;
  this.hostname = null;
  this.hash = null;
  this.search = null;
  this.query = null;
  this.pathname = null;
  this.path = null;
  this.href = null;
}

// Reference: RFC 3986, RFC 1808, RFC 2396

// define these here so at least they only have to be
// compiled once on the first module load.
var protocolPattern = /^([a-z0-9.+-]+:)/i,
    portPattern = /:[0-9]*$/,

    // Special case for a simple path URL
    simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,

    // RFC 2396: characters reserved for delimiting URLs.
    // We actually just auto-escape these.
    delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],

    // RFC 2396: characters not allowed for various reasons.
    unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),

    // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
    autoEscape = ['\''].concat(unwise),
    // Characters that are never ever allowed in a hostname.
    // Note that any invalid chars are also handled, but these
    // are the ones that are *expected* to be seen, so we fast-path
    // them.
    nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
    hostEndingChars = ['/', '?', '#'],
    hostnameMaxLen = 255,
    hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
    hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    // protocols that can allow "unsafe" and "unwise" chars.
    unsafeProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that never have a hostname.
    hostlessProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that always contain a // bit.
    slashedProtocol = {
      'http': true,
      'https': true,
      'ftp': true,
      'gopher': true,
      'file': true,
      'http:': true,
      'https:': true,
      'ftp:': true,
      'gopher:': true,
      'file:': true
    },
    querystring = __webpack_require__(/*! querystring */ "./node_modules/querystring-es3/index.js");

function urlParse(url, parseQueryString, slashesDenoteHost) {
  if (url && util.isObject(url) && url instanceof Url) return url;

  var u = new Url;
  u.parse(url, parseQueryString, slashesDenoteHost);
  return u;
}

Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
  if (!util.isString(url)) {
    throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
  }

  // Copy chrome, IE, opera backslash-handling behavior.
  // Back slashes before the query string get converted to forward slashes
  // See: https://code.google.com/p/chromium/issues/detail?id=25916
  var queryIndex = url.indexOf('?'),
      splitter =
          (queryIndex !== -1 && queryIndex < url.indexOf('#')) ? '?' : '#',
      uSplit = url.split(splitter),
      slashRegex = /\\/g;
  uSplit[0] = uSplit[0].replace(slashRegex, '/');
  url = uSplit.join(splitter);

  var rest = url;

  // trim before proceeding.
  // This is to support parse stuff like "  http://foo.com  \n"
  rest = rest.trim();

  if (!slashesDenoteHost && url.split('#').length === 1) {
    // Try fast path regexp
    var simplePath = simplePathPattern.exec(rest);
    if (simplePath) {
      this.path = rest;
      this.href = rest;
      this.pathname = simplePath[1];
      if (simplePath[2]) {
        this.search = simplePath[2];
        if (parseQueryString) {
          this.query = querystring.parse(this.search.substr(1));
        } else {
          this.query = this.search.substr(1);
        }
      } else if (parseQueryString) {
        this.search = '';
        this.query = {};
      }
      return this;
    }
  }

  var proto = protocolPattern.exec(rest);
  if (proto) {
    proto = proto[0];
    var lowerProto = proto.toLowerCase();
    this.protocol = lowerProto;
    rest = rest.substr(proto.length);
  }

  // figure out if it's got a host
  // user@server is *always* interpreted as a hostname, and url
  // resolution will treat //foo/bar as host=foo,path=bar because that's
  // how the browser resolves relative URLs.
  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var slashes = rest.substr(0, 2) === '//';
    if (slashes && !(proto && hostlessProtocol[proto])) {
      rest = rest.substr(2);
      this.slashes = true;
    }
  }

  if (!hostlessProtocol[proto] &&
      (slashes || (proto && !slashedProtocol[proto]))) {

    // there's a hostname.
    // the first instance of /, ?, ;, or # ends the host.
    //
    // If there is an @ in the hostname, then non-host chars *are* allowed
    // to the left of the last @ sign, unless some host-ending character
    // comes *before* the @-sign.
    // URLs are obnoxious.
    //
    // ex:
    // http://a@b@c/ => user:a@b host:c
    // http://a@b?@c => user:a host:c path:/?@c

    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
    // Review our test case against browsers more comprehensively.

    // find the first instance of any hostEndingChars
    var hostEnd = -1;
    for (var i = 0; i < hostEndingChars.length; i++) {
      var hec = rest.indexOf(hostEndingChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }

    // at this point, either we have an explicit point where the
    // auth portion cannot go past, or the last @ char is the decider.
    var auth, atSign;
    if (hostEnd === -1) {
      // atSign can be anywhere.
      atSign = rest.lastIndexOf('@');
    } else {
      // atSign must be in auth portion.
      // http://a@b/c@d => host:b auth:a path:/c@d
      atSign = rest.lastIndexOf('@', hostEnd);
    }

    // Now we have a portion which is definitely the auth.
    // Pull that off.
    if (atSign !== -1) {
      auth = rest.slice(0, atSign);
      rest = rest.slice(atSign + 1);
      this.auth = decodeURIComponent(auth);
    }

    // the host is the remaining to the left of the first non-host char
    hostEnd = -1;
    for (var i = 0; i < nonHostChars.length; i++) {
      var hec = rest.indexOf(nonHostChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }
    // if we still have not hit it, then the entire thing is a host.
    if (hostEnd === -1)
      hostEnd = rest.length;

    this.host = rest.slice(0, hostEnd);
    rest = rest.slice(hostEnd);

    // pull out port.
    this.parseHost();

    // we've indicated that there is a hostname,
    // so even if it's empty, it has to be present.
    this.hostname = this.hostname || '';

    // if hostname begins with [ and ends with ]
    // assume that it's an IPv6 address.
    var ipv6Hostname = this.hostname[0] === '[' &&
        this.hostname[this.hostname.length - 1] === ']';

    // validate a little.
    if (!ipv6Hostname) {
      var hostparts = this.hostname.split(/\./);
      for (var i = 0, l = hostparts.length; i < l; i++) {
        var part = hostparts[i];
        if (!part) continue;
        if (!part.match(hostnamePartPattern)) {
          var newpart = '';
          for (var j = 0, k = part.length; j < k; j++) {
            if (part.charCodeAt(j) > 127) {
              // we replace non-ASCII char with a temporary placeholder
              // we need this to make sure size of hostname is not
              // broken by replacing non-ASCII by nothing
              newpart += 'x';
            } else {
              newpart += part[j];
            }
          }
          // we test again with ASCII char only
          if (!newpart.match(hostnamePartPattern)) {
            var validParts = hostparts.slice(0, i);
            var notHost = hostparts.slice(i + 1);
            var bit = part.match(hostnamePartStart);
            if (bit) {
              validParts.push(bit[1]);
              notHost.unshift(bit[2]);
            }
            if (notHost.length) {
              rest = '/' + notHost.join('.') + rest;
            }
            this.hostname = validParts.join('.');
            break;
          }
        }
      }
    }

    if (this.hostname.length > hostnameMaxLen) {
      this.hostname = '';
    } else {
      // hostnames are always lower case.
      this.hostname = this.hostname.toLowerCase();
    }

    if (!ipv6Hostname) {
      // IDNA Support: Returns a punycoded representation of "domain".
      // It only converts parts of the domain name that
      // have non-ASCII characters, i.e. it doesn't matter if
      // you call it with a domain that already is ASCII-only.
      this.hostname = punycode.toASCII(this.hostname);
    }

    var p = this.port ? ':' + this.port : '';
    var h = this.hostname || '';
    this.host = h + p;
    this.href += this.host;

    // strip [ and ] from the hostname
    // the host field still retains them, though
    if (ipv6Hostname) {
      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
      if (rest[0] !== '/') {
        rest = '/' + rest;
      }
    }
  }

  // now rest is set to the post-host stuff.
  // chop off any delim chars.
  if (!unsafeProtocol[lowerProto]) {

    // First, make 100% sure that any "autoEscape" chars get
    // escaped, even if encodeURIComponent doesn't think they
    // need to be.
    for (var i = 0, l = autoEscape.length; i < l; i++) {
      var ae = autoEscape[i];
      if (rest.indexOf(ae) === -1)
        continue;
      var esc = encodeURIComponent(ae);
      if (esc === ae) {
        esc = escape(ae);
      }
      rest = rest.split(ae).join(esc);
    }
  }


  // chop off from the tail first.
  var hash = rest.indexOf('#');
  if (hash !== -1) {
    // got a fragment string.
    this.hash = rest.substr(hash);
    rest = rest.slice(0, hash);
  }
  var qm = rest.indexOf('?');
  if (qm !== -1) {
    this.search = rest.substr(qm);
    this.query = rest.substr(qm + 1);
    if (parseQueryString) {
      this.query = querystring.parse(this.query);
    }
    rest = rest.slice(0, qm);
  } else if (parseQueryString) {
    // no query string, but parseQueryString still requested
    this.search = '';
    this.query = {};
  }
  if (rest) this.pathname = rest;
  if (slashedProtocol[lowerProto] &&
      this.hostname && !this.pathname) {
    this.pathname = '/';
  }

  //to support http.request
  if (this.pathname || this.search) {
    var p = this.pathname || '';
    var s = this.search || '';
    this.path = p + s;
  }

  // finally, reconstruct the href based on what has been validated.
  this.href = this.format();
  return this;
};

// format a parsed object into a url string
function urlFormat(obj) {
  // ensure it's an object, and not a string url.
  // If it's an obj, this is a no-op.
  // this way, you can call url_format() on strings
  // to clean up potentially wonky urls.
  if (util.isString(obj)) obj = urlParse(obj);
  if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
  return obj.format();
}

Url.prototype.format = function() {
  var auth = this.auth || '';
  if (auth) {
    auth = encodeURIComponent(auth);
    auth = auth.replace(/%3A/i, ':');
    auth += '@';
  }

  var protocol = this.protocol || '',
      pathname = this.pathname || '',
      hash = this.hash || '',
      host = false,
      query = '';

  if (this.host) {
    host = auth + this.host;
  } else if (this.hostname) {
    host = auth + (this.hostname.indexOf(':') === -1 ?
        this.hostname :
        '[' + this.hostname + ']');
    if (this.port) {
      host += ':' + this.port;
    }
  }

  if (this.query &&
      util.isObject(this.query) &&
      Object.keys(this.query).length) {
    query = querystring.stringify(this.query);
  }

  var search = this.search || (query && ('?' + query)) || '';

  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
  // unless they had them to begin with.
  if (this.slashes ||
      (!protocol || slashedProtocol[protocol]) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
  if (search && search.charAt(0) !== '?') search = '?' + search;

  pathname = pathname.replace(/[?#]/g, function(match) {
    return encodeURIComponent(match);
  });
  search = search.replace('#', '%23');

  return protocol + host + pathname + search + hash;
};

function urlResolve(source, relative) {
  return urlParse(source, false, true).resolve(relative);
}

Url.prototype.resolve = function(relative) {
  return this.resolveObject(urlParse(relative, false, true)).format();
};

function urlResolveObject(source, relative) {
  if (!source) return relative;
  return urlParse(source, false, true).resolveObject(relative);
}

Url.prototype.resolveObject = function(relative) {
  if (util.isString(relative)) {
    var rel = new Url();
    rel.parse(relative, false, true);
    relative = rel;
  }

  var result = new Url();
  var tkeys = Object.keys(this);
  for (var tk = 0; tk < tkeys.length; tk++) {
    var tkey = tkeys[tk];
    result[tkey] = this[tkey];
  }

  // hash is always overridden, no matter what.
  // even href="" will remove it.
  result.hash = relative.hash;

  // if the relative url is empty, then there's nothing left to do here.
  if (relative.href === '') {
    result.href = result.format();
    return result;
  }

  // hrefs like //foo/bar always cut to the protocol.
  if (relative.slashes && !relative.protocol) {
    // take everything except the protocol from relative
    var rkeys = Object.keys(relative);
    for (var rk = 0; rk < rkeys.length; rk++) {
      var rkey = rkeys[rk];
      if (rkey !== 'protocol')
        result[rkey] = relative[rkey];
    }

    //urlParse appends trailing / to urls like http://www.example.com
    if (slashedProtocol[result.protocol] &&
        result.hostname && !result.pathname) {
      result.path = result.pathname = '/';
    }

    result.href = result.format();
    return result;
  }

  if (relative.protocol && relative.protocol !== result.protocol) {
    // if it's a known url protocol, then changing
    // the protocol does weird things
    // first, if it's not file:, then we MUST have a host,
    // and if there was a path
    // to begin with, then we MUST have a path.
    // if it is file:, then the host is dropped,
    // because that's known to be hostless.
    // anything else is assumed to be absolute.
    if (!slashedProtocol[relative.protocol]) {
      var keys = Object.keys(relative);
      for (var v = 0; v < keys.length; v++) {
        var k = keys[v];
        result[k] = relative[k];
      }
      result.href = result.format();
      return result;
    }

    result.protocol = relative.protocol;
    if (!relative.host && !hostlessProtocol[relative.protocol]) {
      var relPath = (relative.pathname || '').split('/');
      while (relPath.length && !(relative.host = relPath.shift()));
      if (!relative.host) relative.host = '';
      if (!relative.hostname) relative.hostname = '';
      if (relPath[0] !== '') relPath.unshift('');
      if (relPath.length < 2) relPath.unshift('');
      result.pathname = relPath.join('/');
    } else {
      result.pathname = relative.pathname;
    }
    result.search = relative.search;
    result.query = relative.query;
    result.host = relative.host || '';
    result.auth = relative.auth;
    result.hostname = relative.hostname || relative.host;
    result.port = relative.port;
    // to support http.request
    if (result.pathname || result.search) {
      var p = result.pathname || '';
      var s = result.search || '';
      result.path = p + s;
    }
    result.slashes = result.slashes || relative.slashes;
    result.href = result.format();
    return result;
  }

  var isSourceAbs = (result.pathname && result.pathname.charAt(0) === '/'),
      isRelAbs = (
          relative.host ||
          relative.pathname && relative.pathname.charAt(0) === '/'
      ),
      mustEndAbs = (isRelAbs || isSourceAbs ||
                    (result.host && relative.pathname)),
      removeAllDots = mustEndAbs,
      srcPath = result.pathname && result.pathname.split('/') || [],
      relPath = relative.pathname && relative.pathname.split('/') || [],
      psychotic = result.protocol && !slashedProtocol[result.protocol];

  // if the url is a non-slashed url, then relative
  // links like ../.. should be able
  // to crawl up to the hostname, as well.  This is strange.
  // result.protocol has already been set by now.
  // Later on, put the first path part into the host field.
  if (psychotic) {
    result.hostname = '';
    result.port = null;
    if (result.host) {
      if (srcPath[0] === '') srcPath[0] = result.host;
      else srcPath.unshift(result.host);
    }
    result.host = '';
    if (relative.protocol) {
      relative.hostname = null;
      relative.port = null;
      if (relative.host) {
        if (relPath[0] === '') relPath[0] = relative.host;
        else relPath.unshift(relative.host);
      }
      relative.host = null;
    }
    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
  }

  if (isRelAbs) {
    // it's absolute.
    result.host = (relative.host || relative.host === '') ?
                  relative.host : result.host;
    result.hostname = (relative.hostname || relative.hostname === '') ?
                      relative.hostname : result.hostname;
    result.search = relative.search;
    result.query = relative.query;
    srcPath = relPath;
    // fall through to the dot-handling below.
  } else if (relPath.length) {
    // it's relative
    // throw away the existing file, and take the new path instead.
    if (!srcPath) srcPath = [];
    srcPath.pop();
    srcPath = srcPath.concat(relPath);
    result.search = relative.search;
    result.query = relative.query;
  } else if (!util.isNullOrUndefined(relative.search)) {
    // just pull out the search.
    // like href='?foo'.
    // Put this after the other two cases because it simplifies the booleans
    if (psychotic) {
      result.hostname = result.host = srcPath.shift();
      //occationaly the auth can get stuck only in host
      //this especially happens in cases like
      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
      var authInHost = result.host && result.host.indexOf('@') > 0 ?
                       result.host.split('@') : false;
      if (authInHost) {
        result.auth = authInHost.shift();
        result.host = result.hostname = authInHost.shift();
      }
    }
    result.search = relative.search;
    result.query = relative.query;
    //to support http.request
    if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
      result.path = (result.pathname ? result.pathname : '') +
                    (result.search ? result.search : '');
    }
    result.href = result.format();
    return result;
  }

  if (!srcPath.length) {
    // no path at all.  easy.
    // we've already handled the other stuff above.
    result.pathname = null;
    //to support http.request
    if (result.search) {
      result.path = '/' + result.search;
    } else {
      result.path = null;
    }
    result.href = result.format();
    return result;
  }

  // if a url ENDs in . or .., then it must get a trailing slash.
  // however, if it ends in anything else non-slashy,
  // then it must NOT get a trailing slash.
  var last = srcPath.slice(-1)[0];
  var hasTrailingSlash = (
      (result.host || relative.host || srcPath.length > 1) &&
      (last === '.' || last === '..') || last === '');

  // strip single dots, resolve double dots to parent dir
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = srcPath.length; i >= 0; i--) {
    last = srcPath[i];
    if (last === '.') {
      srcPath.splice(i, 1);
    } else if (last === '..') {
      srcPath.splice(i, 1);
      up++;
    } else if (up) {
      srcPath.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (!mustEndAbs && !removeAllDots) {
    for (; up--; up) {
      srcPath.unshift('..');
    }
  }

  if (mustEndAbs && srcPath[0] !== '' &&
      (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
    srcPath.unshift('');
  }

  if (hasTrailingSlash && (srcPath.join('/').substr(-1) !== '/')) {
    srcPath.push('');
  }

  var isAbsolute = srcPath[0] === '' ||
      (srcPath[0] && srcPath[0].charAt(0) === '/');

  // put the host back
  if (psychotic) {
    result.hostname = result.host = isAbsolute ? '' :
                                    srcPath.length ? srcPath.shift() : '';
    //occationaly the auth can get stuck only in host
    //this especially happens in cases like
    //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
    var authInHost = result.host && result.host.indexOf('@') > 0 ?
                     result.host.split('@') : false;
    if (authInHost) {
      result.auth = authInHost.shift();
      result.host = result.hostname = authInHost.shift();
    }
  }

  mustEndAbs = mustEndAbs || (result.host && srcPath.length);

  if (mustEndAbs && !isAbsolute) {
    srcPath.unshift('');
  }

  if (!srcPath.length) {
    result.pathname = null;
    result.path = null;
  } else {
    result.pathname = srcPath.join('/');
  }

  //to support request.http
  if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
    result.path = (result.pathname ? result.pathname : '') +
                  (result.search ? result.search : '');
  }
  result.auth = relative.auth || result.auth;
  result.slashes = result.slashes || relative.slashes;
  result.href = result.format();
  return result;
};

Url.prototype.parseHost = function() {
  var host = this.host;
  var port = portPattern.exec(host);
  if (port) {
    port = port[0];
    if (port !== ':') {
      this.port = port.substr(1);
    }
    host = host.substr(0, host.length - port.length);
  }
  if (host) this.hostname = host;
};


/***/ }),

/***/ "./node_modules/url/util.js":
/*!**********************************!*\
  !*** ./node_modules/url/util.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  isString: function(arg) {
    return typeof(arg) === 'string';
  },
  isObject: function(arg) {
    return typeof(arg) === 'object' && arg !== null;
  },
  isNull: function(arg) {
    return arg === null;
  },
  isNullOrUndefined: function(arg) {
    return arg == null;
  }
};


/***/ }),

/***/ "./pages/components/[id].js":
/*!**********************************!*\
  !*** ./pages/components/[id].js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_MyLayout_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/MyLayout.js */ "./components/MyLayout.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _react_react_spectrum_Provider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @react/react-spectrum/Provider */ "./node_modules/@react/react-spectrum/Provider/index.js");
/* harmony import */ var _react_react_spectrum_Provider__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_react_react_spectrum_Provider__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/Sidebar */ "./components/Sidebar.js");
/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../css/main.scss */ "./css/main.scss");
/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_css_main_scss__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_15__);







var _jsxFileName = "/Users/garthdb/Spectrum/spectrum-css/pages/components/[id].js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;










function loadData(_x) {
  return _loadData.apply(this, arguments);
}

function _loadData() {
  _loadData = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__["default"])(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(id) {
    var data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return __webpack_require__("./data/yml lazy recursive ^\\.\\/.*\\.yml$")("./".concat(id, ".yml"));

          case 2:
            data = _context3.sent;
            console.log({
              data: data
            });
            return _context3.abrupt("return", "poop");

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _loadData.apply(this, arguments);
}

var Page =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Page, _React$Component);

  function Page(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Page);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Page).call(this, props)); //console.log(publicRuntimeConfig.ENVIRONMENT);
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Page, [{
    key: "render",
    value: function render() {
      var examplesList = this.props.pageData.examples.map(function (example) {
        return __jsx("div", {
          key: example.slug,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: this
        }, __jsx("h3", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          },
          __self: this
        }, example.name), __jsx("pre", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          },
          __self: this
        }, __jsx("code", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: this
        }, example.markup)), __jsx("div", {
          dangerouslySetInnerHTML: {
            __html: example.markup
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        }));
      });
      return __jsx(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, __jsx(react_helmet__WEBPACK_IMPORTED_MODULE_11__["Helmet"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, __jsx("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width",
        key: "viewport",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }), __jsx("link", {
        rel: "icon",
        type: "image/x-icon",
        href: "/static/favicon.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }), __jsx("link", {
        type: "text/css",
        rel: "stylesheet",
        href: "https://wwwimages2.adobe.com/etc/beagle/public/globalnav/adobe-globalnav/latest/adobe-globalnav.min.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      })), __jsx(_react_react_spectrum_Provider__WEBPACK_IMPORTED_MODULE_12___default.a, {
        theme: "light",
        scale: "medium",
        typekitId: "uma8ayv",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, __jsx("div", {
        style: {
          display: "flex"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, __jsx("div", {
        style: {
          width: "248px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, __jsx(_components_Sidebar__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      })), __jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_15___default()('afg-container-fluid', _css_main_scss__WEBPACK_IMPORTED_MODULE_14___default.a.mainContainer),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, __jsx("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, this.props.pageData.name), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, this.props.pageData.description), __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, __jsx("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, "Examples"), examplesList)))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__["default"])(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var node_env;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                node_env = "development";
                return _context.abrupt("return", {
                  node_env: node_env
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Page;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

Page.getInitialProps =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__["default"])(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(context) {
    var id, pageData;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = context.query.id;
            _context2.next = 3;
            return __webpack_require__("./data/yml lazy recursive ^\\.\\/.*\\.yml$")("./".concat(id, ".yml"));

          case 3:
            pageData = _context2.sent;
            return _context2.abrupt("return", {
              pageData: pageData["default"]
            });

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x2) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_9__["withRouter"])(Page));

/***/ }),

/***/ 1:
/*!*********************************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2Fcomponents%2F%5Bid%5D&absolutePagePath=%2FUsers%2Fgarthdb%2FSpectrum%2Fspectrum-css%2Fpages%2Fcomponents%2F%5Bid%5D.js ***!
  \*********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2Fcomponents%2F%5Bid%5D&absolutePagePath=%2FUsers%2Fgarthdb%2FSpectrum%2Fspectrum-css%2Fpages%2Fcomponents%2F%5Bid%5D.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fcomponents%2F%5Bid%5D&absolutePagePath=%2FUsers%2Fgarthdb%2FSpectrum%2Fspectrum-css%2Fpages%2Fcomponents%2F%5Bid%5D.js!./");


/***/ }),

/***/ 2:
/*!*******************************!*\
  !*** ./lib/locales (ignored) ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "dll-reference dll_129a35c7ec57967eb265":
/*!*******************************************!*\
  !*** external "dll_129a35c7ec57967eb265" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_129a35c7ec57967eb265;

/***/ })

},[[1,"static/runtime/webpack.js","styles"]]]);
//# sourceMappingURL=[id].js.map