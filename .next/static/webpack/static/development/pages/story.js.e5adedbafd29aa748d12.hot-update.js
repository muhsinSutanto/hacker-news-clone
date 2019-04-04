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
    className: "jsx-1402695745" + " " + 'comment',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1402695745" + " " + 'comment-user',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, comment.user), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: comment.content
    },
    className: "jsx-1402695745" + " " + 'comment-content',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }), comment.comments && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1402695745" + " " + 'nested-comment',
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
    id: "1402695745",
    __self: this
  }, ".comment.jsx-1402695745{margin-bottom:1.5em;}.comment-user.jsx-1402695745{font-size:0.9rem;font-weight:bold;margin-bottom:0.5em;}.comment-content.jsx-1402695745{font-size:0.9rem;}.comment-content.jsx-1402695745 p.jsx-1402695745{margin:0;margin-bottom:0.5em;word-wrap:break-word;}.comment-content.jsx-1402695745 a.jsx-1402695745{color:#f60 text-decoration:underline;}.comment-content.jsx-1402695745 pre.jsx-1402695745{max-width:100%;overflow:scroll;}.nested-comment.jsx-1402695745{margin-top:1em;border-left:1px solid rgba(0,0,0,0.1) padding-left:1em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tdWhzaW5zdXRhbnRvL0RvY3VtZW50cy9wcmFjdGljZS9oYWNrZXItbmV3cy9jb21wb25lbnRzL0NvbW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYWlCLEFBRzZDLEFBR0gsQUFLRCxBQUdQLEFBTWlCLEFBR1osQUFJQyxTQVpLLE1BU0osQUFNckIsRUF2QnNCLEFBS3JCLEdBUkEsU0FZeUIsRUFTekIsR0FoQkQsR0FZQyxhQUpBLElBUkEsZ0JBcUJBIiwiZmlsZSI6Ii9Vc2Vycy9tdWhzaW5zdXRhbnRvL0RvY3VtZW50cy9wcmFjdGljZS9oYWNrZXItbmV3cy9jb21wb25lbnRzL0NvbW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBDb21tZW50ID0gKHtjb21tZW50fSkgPT4gIGNvbnNvbGUubG9nKGNvbW1lbnQpIHx8XG4gKCBcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbW1lbnQnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbW1lbnQtdXNlcic+e2NvbW1lbnQudXNlcn08L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb21tZW50LWNvbnRlbnQnIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBjb21tZW50LmNvbnRlbnR9fT48L2Rpdj5cbiAgICAgICAgICAgIHtjb21tZW50LmNvbW1lbnRzICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmVzdGVkLWNvbW1lbnQnPlxuICAgICAgICAgICAgICAgICAgICB7Y29tbWVudC5jb21tZW50cy5tYXAobmVzdGVkQ29tID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb21tZW50ICBrZXk9e25lc3RlZENvbS5pZH0gY29tbWVudD17bmVzdGVkQ29tfS8+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgICAge2AgXG4gICAgICAgICAgICAgICAgICAgIC5jb21tZW50e1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMS41ZW07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmNvbW1lbnQtdXNlcntcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVlbVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5jb21tZW50LWNvbnRlbnR7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6MC45cmVtO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5jb21tZW50LWNvbnRlbnQgcHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5jb21tZW50LWNvbnRlbnQgYXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZjYwXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuY29tbWVudC1jb250ZW50IHByZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDoxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAubmVzdGVkLWNvbW1lbnQge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMWVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDoxZW1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgKTtcblxuIFxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudDsiXX0= */\n/*@ sourceURL=/Users/muhsinsutanto/Documents/practice/hacker-news/components/Comment.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Comment);

/***/ })

})
//# sourceMappingURL=story.js.e5adedbafd29aa748d12.hot-update.js.map