webpackHotUpdate("static/development/pages/story.js",{

/***/ "./components/Comment.js":
/*!*******************************!*\
  !*** ./components/Comment.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/muhsinsutanto/Documents/practice/hacker-news/components/Comment.js";



var Comment = function Comment(_ref) {
  var comment = _ref.comment;
  return console.log(comment) || react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1216880934" + " " + 'comment',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1216880934" + " " + 'comment-user',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, comment.user), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: comment.content
    },
    className: "jsx-1216880934" + " " + 'comment-content',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }), comment.comments && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1216880934" + " " + 'nested-comment',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, comment.comments.map(function (nestedCom) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Comment, {
      key: nestedCom.id,
      comment: nestedCom,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    });
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1216880934",
    __self: this
  }, ".comment.jsx-1216880934{margin-bottom:1.5em;}.comment-user.jsx-1216880934{font-size:0.9rem;font-weight:bold;margin-bottom:0.5em;}.comment-content.jsx-1216880934{font-size:0.9rem;}.comment-content.jsx-1216880934 p.jsx-1216880934{margin:0;margin-bottom:0.5em;word-wrap:break-word;}.comment-content.jsx-1216880934 a.jsx-1216880934{color:#f60;-webkit-text-decoration:underline;text-decoration:underline;}.comment-content.jsx-1216880934 pre.jsx-1216880934{max-width:100%;overflow:scroll;}.nested-comment.jsx-1216880934{margin-top:1em;border-left:1px solid rgba(0,0,0,0.1);padding-left:1em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tdWhzaW5zdXRhbnRvL0RvY3VtZW50cy9wcmFjdGljZS9oYWNrZXItbmV3cy9jb21wb25lbnRzL0NvbW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYWlCLEFBRzZDLEFBR0gsQUFLRCxBQUdQLEFBS0UsQUFJSSxBQUlBLFNBWkssRUFLTSxJQUlWLEFBSXNCLEVBckJyQixBQUtyQixHQVJBLFNBWXlCLEVBU3pCLEdBaEJELGdCQVFDLEdBWXFCLENBcEJyQixnQkFxQkEsQ0FUQSIsImZpbGUiOiIvVXNlcnMvbXVoc2luc3V0YW50by9Eb2N1bWVudHMvcHJhY3RpY2UvaGFja2VyLW5ld3MvY29tcG9uZW50cy9Db21tZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQ29tbWVudCA9ICh7Y29tbWVudH0pID0+ICBjb25zb2xlLmxvZyhjb21tZW50KSB8fFxuICggXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb21tZW50Jz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb21tZW50LXVzZXInPntjb21tZW50LnVzZXJ9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29tbWVudC1jb250ZW50JyBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogY29tbWVudC5jb250ZW50fX0+PC9kaXY+XG4gICAgICAgICAgICB7Y29tbWVudC5jb21tZW50cyAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25lc3RlZC1jb21tZW50Jz5cbiAgICAgICAgICAgICAgICAgICAge2NvbW1lbnQuY29tbWVudHMubWFwKG5lc3RlZENvbSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29tbWVudCAga2V5PXtuZXN0ZWRDb20uaWR9IGNvbW1lbnQ9e25lc3RlZENvbX0vPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgICAgIHtgIFxuICAgICAgICAgICAgICAgICAgICAuY29tbWVudHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEuNWVtO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5jb21tZW50LXVzZXJ7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41ZW1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuY29tbWVudC1jb250ZW50e1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjAuOXJlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuY29tbWVudC1jb250ZW50IHB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuY29tbWVudC1jb250ZW50IGF7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2Y2MDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5jb21tZW50LWNvbnRlbnQgcHJle1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAubmVzdGVkLWNvbW1lbnQge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMWVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDFlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgKTtcblxuIFxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudDsiXX0= */\n/*@ sourceURL=/Users/muhsinsutanto/Documents/practice/hacker-news/components/Comment.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Comment);

/***/ })

})
//# sourceMappingURL=story.js.bbb93f37b7d1e69b14e3.hot-update.js.map