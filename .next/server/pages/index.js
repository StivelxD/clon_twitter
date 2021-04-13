(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/AppLayout/Layout.js":
/*!****************************************!*\
  !*** ./components/AppLayout/Layout.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\Users\\User\\projects\\clontwitter\\components\\AppLayout\\Layout.js";


const Layout = ({
  children
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "grid h-screen place-items-center",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
          children: "Voltorb"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
        className: "bg-blue-400 h-screen w-screen sm:h-5/6 sm:w-96 rounded-lg shadow-xl",
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Button/index.js":
/*!************************************!*\
  !*** ./components/Button/index.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Button; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);


var _jsxFileName = "C:\\Users\\User\\projects\\clontwitter\\components\\Button\\index.js";
function Button({
  children,
  onClick
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      onClick: onClick,
      className: "flex items-center bg-black text-white py-2 px-4 rounded-full gap-3 hover:bg-white hover:text-black transition duration-300 ease-in-out transform hover:translate-y-1 focus:outline-none",
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 13
    }, this)
  }, void 0, false);
}

/***/ }),

/***/ "./components/code.js":
/*!****************************!*\
  !*** ./components/code.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var React__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! React */ "React");
/* harmony import */ var React__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(React__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Button */ "./components/Button/index.js");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/ai */ "react-icons/ai");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _firebase_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebase/client */ "./firebase/client.js");

var _jsxFileName = "C:\\Users\\User\\projects\\clontwitter\\components\\code.js";





const Code = () => {
  const [user, setUser] = (0,React__WEBPACK_IMPORTED_MODULE_1__.useState)(null);

  const handleClick = () => {
    (0,_firebase_client__WEBPACK_IMPORTED_MODULE_4__.loginWithGitHub)().then(user => {
      const {
        avatar,
        username,
        url
      } = user;
      setUser(user);
    }).catch(err => {
      console.log(err);
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: user === null ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_2__.default, {
      onClick: handleClick,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "text-2xl",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__.AiFillGithub, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 56
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 29
      }, undefined), "Login with GitHub"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 25
    }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: user.avatar
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 29
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: user.username
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 29
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 25
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 13
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Code);

/***/ }),

/***/ "./firebase/client.js":
/*!****************************!*\
  !*** ./firebase/client.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "onAuthStateChanged": function() { return /* binding */ onAuthStateChanged; },
/* harmony export */   "loginWithGitHub": function() { return /* binding */ loginWithGitHub; }
/* harmony export */ });
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase */ "firebase");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_0__);
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCznIk1_9ijhnINGpKzpLqSjppCrXV7Opk",
  authDomain: "clontwitter-fecd4.firebaseapp.com",
  projectId: "clontwitter-fecd4",
  storageBucket: "clontwitter-fecd4.appspot.com",
  messagingSenderId: "54740758820",
  appId: "1:54740758820:web:dabaff07fdeea1555383b1",
  measurementId: "G-H3QPYFDP5T"
};
!(firebase__WEBPACK_IMPORTED_MODULE_0___default().apps.length) && firebase__WEBPACK_IMPORTED_MODULE_0___default().initializeApp(firebaseConfig);

const mapUserFromFirebaseAuthToUser = user => {
  const {
    additionalUserInfo
  } = user;
  const {
    profile,
    username
  } = additionalUserInfo;
  const {
    avatar_url,
    html_url
  } = profile;
  return {
    avatar: avatar_url,
    username,
    url: html_url
  };
};

const onAuthStateChanged = onChange => {
  return firebase__WEBPACK_IMPORTED_MODULE_0___default().auth().onAuthStateChanged(user => {
    const normalizedUser = mapUserFromFirebaseAuthToUser(user);
    onChange(normalizedUser);
  });
};
const loginWithGitHub = () => {
  const githubProvider = new (firebase__WEBPACK_IMPORTED_MODULE_0___default().auth.GithubAuthProvider)();
  return firebase__WEBPACK_IMPORTED_MODULE_0___default().auth().signInWithPopup(githubProvider).then(mapUserFromFirebaseAuthToUser);
};

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_AppLayout_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/AppLayout/Layout */ "./components/AppLayout/Layout.js");
/* harmony import */ var _components_code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/code */ "./components/code.js");

var _jsxFileName = "C:\\Users\\User\\projects\\clontwitter\\pages\\index.js";


function Home() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AppLayout_Layout__WEBPACK_IMPORTED_MODULE_1__.default, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "h-full grid place-items-center place-content-center",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: "cartoonist.png",
        alt: "logo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: "text-4xl font-bold text-white mb-5",
        children: "Voltorb"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: "text-2xl font-bold text-center text-white mb-5",
        children: "Talk about development with developers"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_code__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "React":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("React");;

/***/ }),

/***/ "firebase":
/*!***************************!*\
  !*** external "firebase" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("firebase");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "react-icons/ai":
/*!*********************************!*\
  !*** external "react-icons/ai" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-icons/ai");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbG9uX3R3aXR0ZXIvLi9jb21wb25lbnRzL0FwcExheW91dC9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vY2xvbl90d2l0dGVyLy4vY29tcG9uZW50cy9CdXR0b24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2xvbl90d2l0dGVyLy4vY29tcG9uZW50cy9jb2RlLmpzIiwid2VicGFjazovL2Nsb25fdHdpdHRlci8uL2ZpcmViYXNlL2NsaWVudC5qcyIsIndlYnBhY2s6Ly9jbG9uX3R3aXR0ZXIvLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9jbG9uX3R3aXR0ZXIvZXh0ZXJuYWwgXCJSZWFjdFwiIiwid2VicGFjazovL2Nsb25fdHdpdHRlci9leHRlcm5hbCBcImZpcmViYXNlXCIiLCJ3ZWJwYWNrOi8vY2xvbl90d2l0dGVyL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vY2xvbl90d2l0dGVyL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvYWlcIiIsIndlYnBhY2s6Ly9jbG9uX3R3aXR0ZXIvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJMYXlvdXQiLCJjaGlsZHJlbiIsIkJ1dHRvbiIsIm9uQ2xpY2siLCJDb2RlIiwidXNlciIsInNldFVzZXIiLCJ1c2VTdGF0ZSIsImhhbmRsZUNsaWNrIiwibG9naW5XaXRoR2l0SHViIiwidGhlbiIsImF2YXRhciIsInVzZXJuYW1lIiwidXJsIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJtZWFzdXJlbWVudElkIiwiZmlyZWJhc2UiLCJtYXBVc2VyRnJvbUZpcmViYXNlQXV0aFRvVXNlciIsImFkZGl0aW9uYWxVc2VySW5mbyIsInByb2ZpbGUiLCJhdmF0YXJfdXJsIiwiaHRtbF91cmwiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJvbkNoYW5nZSIsIm5vcm1hbGl6ZWRVc2VyIiwiZ2l0aHViUHJvdmlkZXIiLCJzaWduSW5XaXRoUG9wdXAiLCJIb21lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxNQUFNLEdBQUcsQ0FBRTtBQUFDQztBQUFELENBQUYsS0FBa0I7QUFDN0Isc0JBQ0k7QUFBQSwyQkFDSTtBQUFLLGVBQVMsRUFBQyxrQ0FBZjtBQUFBLDhCQUNJLDhEQUFDLGtEQUFEO0FBQUEsK0JBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBSUk7QUFBTSxpQkFBUyxFQUFDLHFFQUFoQjtBQUFBLGtCQUNLQTtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosbUJBREo7QUFZSCxDQWJEOztBQWVBLCtEQUFlRCxNQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJlLFNBQVNFLE1BQVQsQ0FBa0I7QUFBQ0QsVUFBRDtBQUFXRTtBQUFYLENBQWxCLEVBQXdDO0FBQ25ELHNCQUNJO0FBQUEsMkJBQ0k7QUFBUSxhQUFPLEVBQUVBLE9BQWpCO0FBQTBCLGVBQVMsRUFBQyx5TEFBcEM7QUFBQSxnQkFDS0Y7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosbUJBREo7QUFPSCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUkQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUcsSUFBSSxHQUFHLE1BQU07QUFDZixRQUFNLENBQUNDLElBQUQsRUFBT0MsT0FBUCxJQUFrQkMsK0NBQVEsQ0FBQyxJQUFELENBQWhDOztBQUVBLFFBQU1DLFdBQVcsR0FBRyxNQUFNO0FBQ3RCQyxxRUFBZSxHQUFHQyxJQUFsQixDQUF1QkwsSUFBSSxJQUFJO0FBQzNCLFlBQU07QUFBQ00sY0FBRDtBQUFTQyxnQkFBVDtBQUFtQkM7QUFBbkIsVUFBMEJSLElBQWhDO0FBQ0FDLGFBQU8sQ0FBQ0QsSUFBRCxDQUFQO0FBQ0gsS0FIRCxFQUdHUyxLQUhILENBR1NDLEdBQUcsSUFBSTtBQUNaQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtBQUNILEtBTEQ7QUFNSCxHQVBEOztBQVNBLHNCQUNRO0FBQUEsY0FFUVYsSUFBSSxLQUFLLElBQVQsZ0JBQ0ksOERBQUMsdURBQUQ7QUFBUSxhQUFPLEVBQUVHLFdBQWpCO0FBQUEsOEJBQ0k7QUFBTSxpQkFBUyxFQUFDLFVBQWhCO0FBQUEsK0JBQTJCLDhEQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZ0JBTUk7QUFBQSw4QkFDSTtBQUFLLFdBQUcsRUFBRUgsSUFBSSxDQUFDTTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFFSTtBQUFBLGtCQUFPTixJQUFJLENBQUNPO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFI7QUFnQkgsQ0E1QkQ7O0FBOEJBLCtEQUFlUixJQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQ2pDQTs7QUFDQSxNQUFNYyxjQUFjLEdBQUc7QUFDbkJDLFFBQU0sRUFBRSx5Q0FEVztBQUVuQkMsWUFBVSxFQUFFLG1DQUZPO0FBR25CQyxXQUFTLEVBQUUsbUJBSFE7QUFJbkJDLGVBQWEsRUFBRSwrQkFKSTtBQUtuQkMsbUJBQWlCLEVBQUUsYUFMQTtBQU1uQkMsT0FBSyxFQUFFLDBDQU5ZO0FBT25CQyxlQUFhLEVBQUU7QUFQSSxDQUF2QjtBQVVFLENBQUNDLDZEQUFELElBQ0VBLDZEQUFBLENBQXVCUixjQUF2QixDQURGOztBQUdBLE1BQU1TLDZCQUE2QixHQUFJdEIsSUFBRCxJQUFVO0FBQzlDLFFBQU07QUFBQ3VCO0FBQUQsTUFBdUJ2QixJQUE3QjtBQUNBLFFBQU07QUFBQ3dCLFdBQUQ7QUFBVWpCO0FBQVYsTUFBc0JnQixrQkFBNUI7QUFDQSxRQUFNO0FBQUNFLGNBQUQ7QUFBYUM7QUFBYixNQUF5QkYsT0FBL0I7QUFFQSxTQUFNO0FBQ0psQixVQUFNLEVBQUVtQixVQURKO0FBRUpsQixZQUZJO0FBR0pDLE9BQUcsRUFBR2tCO0FBSEYsR0FBTjtBQUtELENBVkQ7O0FBWU8sTUFBTUMsa0JBQWtCLEdBQUlDLFFBQUQsSUFBYztBQUM5QyxTQUFPUCxvREFBQSxHQUVKTSxrQkFGSSxDQUVlM0IsSUFBSSxJQUFJO0FBQzFCLFVBQU02QixjQUFjLEdBQ3BCUCw2QkFBNkIsQ0FBQ3RCLElBQUQsQ0FEN0I7QUFFQTRCLFlBQVEsQ0FBQ0MsY0FBRCxDQUFSO0FBQ0QsR0FOSSxDQUFQO0FBT0QsQ0FSTTtBQVVBLE1BQU16QixlQUFlLEdBQUcsTUFBTTtBQUNqQyxRQUFNMEIsY0FBYyxHQUFHLElBQUlULHlFQUFKLEVBQXZCO0FBQ0EsU0FBT0Esb0RBQUEsR0FFTlUsZUFGTSxDQUVVRCxjQUZWLEVBR056QixJQUhNLENBR0RpQiw2QkFIQyxDQUFQO0FBSUgsQ0FOTSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q1Q7QUFDQTtBQUdlLFNBQVNVLElBQVQsR0FBZ0I7QUFFM0Isc0JBQ0ksOERBQUMsaUVBQUQ7QUFBQSwyQkFDSTtBQUFLLGVBQVMsRUFBQyxxREFBZjtBQUFBLDhCQUNJO0FBQUssV0FBRyxFQUFDLGdCQUFUO0FBQTBCLFdBQUcsRUFBQztBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSTtBQUFJLGlCQUFTLEVBQUMsb0NBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSixlQUdJO0FBQUksaUJBQVMsRUFBQyxnREFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhKLGVBSUk7QUFBQSwrQkFDSSw4REFBQyxxREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQVlILEM7Ozs7Ozs7Ozs7O0FDbEJELG1DOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5cclxuY29uc3QgTGF5b3V0ID0gKCB7Y2hpbGRyZW59ICkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgaC1zY3JlZW4gcGxhY2UtaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGl0bGU+Vm9sdG9yYjwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJiZy1ibHVlLTQwMCBoLXNjcmVlbiB3LXNjcmVlbiBzbTpoLTUvNiBzbTp3LTk2IHJvdW5kZWQtbGcgc2hhZG93LXhsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJ1dHRvbiAoIHtjaGlsZHJlbiwgb25DbGlja30gKSB7XHJcbiAgICByZXR1cm4oIFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17b25DbGlja30gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgYmctYmxhY2sgdGV4dC13aGl0ZSBweS0yIHB4LTQgcm91bmRlZC1mdWxsIGdhcC0zIGhvdmVyOmJnLXdoaXRlIGhvdmVyOnRleHQtYmxhY2sgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXQgdHJhbnNmb3JtIGhvdmVyOnRyYW5zbGF0ZS15LTEgZm9jdXM6b3V0bGluZS1ub25lXCI+XHJcbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAnUmVhY3QnXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vY29tcG9uZW50cy9CdXR0b24nXHJcbmltcG9ydCB7IEFpRmlsbEdpdGh1YiB9ICBmcm9tICdyZWFjdC1pY29ucy9haSdcclxuaW1wb3J0IHtsb2dpbldpdGhHaXRIdWJ9IGZyb20gJy4uL2ZpcmViYXNlL2NsaWVudCdcclxuXHJcbmNvbnN0IENvZGUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShudWxsKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIGxvZ2luV2l0aEdpdEh1YigpLnRoZW4odXNlciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHthdmF0YXIsIHVzZXJuYW1lLCB1cmx9ID0gdXNlclxyXG4gICAgICAgICAgICBzZXRVc2VyKHVzZXIpXHJcbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXIgPT09IG51bGwgPyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bFwiPjxBaUZpbGxHaXRodWIgLz48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2dpbiB3aXRoIEdpdEh1YlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt1c2VyLmF2YXRhcn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt1c2VyLnVzZXJuYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb2RlO1xyXG4iLCJpbXBvcnQgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UnXHJcblxyXG4vLyBGb3IgRmlyZWJhc2UgSlMgU0RLIHY3LjIwLjAgYW5kIGxhdGVyLCBtZWFzdXJlbWVudElkIGlzIG9wdGlvbmFsXHJcbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xyXG4gICAgYXBpS2V5OiBcIkFJemFTeUN6bklrMV85aWpobklOR3BLenBMcVNqcHBDclhWN09wa1wiLFxyXG4gICAgYXV0aERvbWFpbjogXCJjbG9udHdpdHRlci1mZWNkNC5maXJlYmFzZWFwcC5jb21cIixcclxuICAgIHByb2plY3RJZDogXCJjbG9udHdpdHRlci1mZWNkNFwiLFxyXG4gICAgc3RvcmFnZUJ1Y2tldDogXCJjbG9udHdpdHRlci1mZWNkNC5hcHBzcG90LmNvbVwiLFxyXG4gICAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiNTQ3NDA3NTg4MjBcIixcclxuICAgIGFwcElkOiBcIjE6NTQ3NDA3NTg4MjA6d2ViOmRhYmFmZjA3ZmRlZWExNTU1MzgzYjFcIixcclxuICAgIG1lYXN1cmVtZW50SWQ6IFwiRy1IM1FQWUZEUDVUXCJcclxuICB9O1xyXG5cclxuICAhZmlyZWJhc2UuYXBwcy5sZW5ndGggJiYgXHJcbiAgICBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKVxyXG5cclxuICBjb25zdCBtYXBVc2VyRnJvbUZpcmViYXNlQXV0aFRvVXNlciA9ICh1c2VyKSA9PiB7XHJcbiAgICBjb25zdCB7YWRkaXRpb25hbFVzZXJJbmZvfSA9IHVzZXJcclxuICAgIGNvbnN0IHtwcm9maWxlLCB1c2VybmFtZX0gPSBhZGRpdGlvbmFsVXNlckluZm9cclxuICAgIGNvbnN0IHthdmF0YXJfdXJsLCBodG1sX3VybH0gPSBwcm9maWxlXHJcbiAgICBcclxuICAgIHJldHVybntcclxuICAgICAgYXZhdGFyOiBhdmF0YXJfdXJsLFxyXG4gICAgICB1c2VybmFtZSxcclxuICAgICAgdXJsOiAgaHRtbF91cmxcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGV4cG9ydCBjb25zdCBvbkF1dGhTdGF0ZUNoYW5nZWQgPSAob25DaGFuZ2UpID0+IHtcclxuICAgIHJldHVybiBmaXJlYmFzZVxyXG4gICAgICAuYXV0aCgpXHJcbiAgICAgIC5vbkF1dGhTdGF0ZUNoYW5nZWQodXNlciA9PiB7XHJcbiAgICAgICAgY29uc3Qgbm9ybWFsaXplZFVzZXIgPVxyXG4gICAgICAgIG1hcFVzZXJGcm9tRmlyZWJhc2VBdXRoVG9Vc2VyKHVzZXIpXHJcbiAgICAgICAgb25DaGFuZ2Uobm9ybWFsaXplZFVzZXIpXHJcbiAgICAgIH0pXHJcbiAgfVxyXG5cclxuICBleHBvcnQgY29uc3QgbG9naW5XaXRoR2l0SHViID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCBnaXRodWJQcm92aWRlciA9IG5ldyBmaXJlYmFzZS5hdXRoLkdpdGh1YkF1dGhQcm92aWRlcigpXHJcbiAgICAgIHJldHVybiBmaXJlYmFzZVxyXG4gICAgICAuYXV0aCgpXHJcbiAgICAgIC5zaWduSW5XaXRoUG9wdXAoZ2l0aHViUHJvdmlkZXIpXHJcbiAgICAgIC50aGVuKG1hcFVzZXJGcm9tRmlyZWJhc2VBdXRoVG9Vc2VyKVxyXG4gIH0iLCJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvQXBwTGF5b3V0L0xheW91dCdcclxuaW1wb3J0IENvZGUgZnJvbSAnLi4vY29tcG9uZW50cy9jb2RlJ1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1mdWxsIGdyaWQgcGxhY2UtaXRlbXMtY2VudGVyIHBsYWNlLWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImNhcnRvb25pc3QucG5nXCIgYWx0PVwibG9nb1wiLz5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGQgdGV4dC13aGl0ZSBtYi01XCI+Vm9sdG9yYjwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIHRleHQtY2VudGVyIHRleHQtd2hpdGUgbWItNVwiPlRhbGsgYWJvdXQgZGV2ZWxvcG1lbnQgd2l0aCBkZXZlbG9wZXJzPC9oMj4gIFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Q29kZSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgKVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIlJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9haVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9