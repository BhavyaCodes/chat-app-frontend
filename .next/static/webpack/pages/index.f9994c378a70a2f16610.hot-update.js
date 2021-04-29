webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var _Users_tanyaprabhakar_Chat_mychat_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_tanyaprabhakar_Chat_mychat_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/build/index.js\");\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_UsernameField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/UsernameField */ \"./components/UsernameField.jsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\nvar _jsxFileName = \"/Users/tanyaprabhakar/Chat/mychat/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var _jsxDEV2,\n      _this = this;\n\n  // save the socket\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(null),\n      socket = _useState[0],\n      setSocket = _useState[1]; // Whether the username is set.\n\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(false),\n      isUsernameConfirmed = _useState2[0],\n      setUsernameConfirmed = _useState2[1]; // State for the username.\n\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(\"\"),\n      username = _useState3[0],\n      setUsername = _useState3[1]; // State for the form field.\n\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(\"\"),\n      message = _useState4[0],\n      setMessage = _useState4[1]; // State for message history.\n\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])([\n    /*\n    {\n      username: \"Santa Claus\",\n      message: \"Ho ho ho!\"\n    }\n    */\n  ]),\n      history = _useState5[0],\n      setHistory = _useState5[1];\n\n  var connectSocket = function connectSocket() {\n    // prime the server first. yes, this is an extra call and is inefficient.\n    // but we're using NextJS for convenience, so this is a necessary evil.\n    fetch(\"/api/chat\"); // after making sure that socket server is primed, connect to it.\n\n    if (!socket) {\n      var newSocket = Object(socket_io_client__WEBPACK_IMPORTED_MODULE_6__[\"io\"])(); // Confirms connection\n\n      newSocket.on(\"connect\", function () {\n        console.log(\"Chat app connected\");\n      }); // handles message\n\n      newSocket.on(\"message\", function (msg) {\n        setHistory(function (history) {\n          return [].concat(Object(_Users_tanyaprabhakar_Chat_mychat_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(history), [msg]);\n        });\n      }); // Logs when server disconnects\n\n      newSocket.on(\"disconnect\", function () {\n        console.warn(\"WARNING: chat app disconnected\");\n      });\n      setSocket(function () {\n        return newSocket;\n      });\n    }\n  }; // The websocket code\n\n\n  Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useEffect\"])(function () {\n    connectSocket();\n  }, []); // this method submits the form and sends the message to the server.\n\n  var handleSubmit = function handleSubmit(evt) {\n    evt.preventDefault();\n\n    if (!socket) {\n      alert(\"Chatroom not connected yet. Try again in a little bit.\");\n      return;\n    } // prevent empty submissions\n\n\n    if (!message || !isUsernameConfirmed) {\n      return;\n    } // submit and blank-out the field.\n\n\n    socket.emit(\"message-submitted\", {\n      message: message,\n      username: username\n    });\n    setMessage(\"\");\n  }; //  const websocket=require(\"ws\") \n  //   const rooms = {};\n  //   ws.on(\"connection\", socket => {\n  //     const uuid = uuid // create here a uuid for this connection\n  //     const leave = room => {\n  //       // not present: do nothing\n  //       if(! rooms[room][uuid]) return;\n  //       // if the one exiting is the last one, destroy the room\n  //       if(Object.keys(rooms[room]).length === 1) delete rooms[room];\n  //       // otherwise simply leave the room\n  //       else delete rooms[room][uuid];\n  //     };\n  //     socket.on(\"message\", data => {\n  //       const { message, meta, room } = data;\n  //       if(meta === \"join\") {\n  //         if(! rooms[room]) rooms[room] = {}; // create the room\n  //         if(! rooms[room][uuid]) rooms[room][uuid] = socket; // join the room\n  //       }\n  //       else if(meta === \"leave\") {\n  //         leave(room);\n  //       }\n  //       else if(! meta) {\n  //         // send the message to all in the room\n  //         Object.entries(rooms[room]).forEach(([, sock]) => sock.send({ message }));\n  //       }\n  //     });\n  //     socket.on(\"close\", () => {\n  //       // for each room, remove the closed socket\n  //       Object.keys(rooms).forEach(room => leave(room));\n  //     });\n  //   });\n\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.chat_window,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"title\", {\n        children: \"chit-chat\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 141,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 139,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"embed\", {\n      src: \"https://www.youtube.com/watch?v=32oQrjSCUTw&t=4s\",\n      loop: \"true\",\n      autostart: \"true\",\n      width: \"2\",\n      height: \"0\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 147,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h1\", (_jsxDEV2 = {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.top_menu\n    }, Object(_Users_tanyaprabhakar_Chat_mychat_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_jsxDEV2, \"className\", _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.text), Object(_Users_tanyaprabhakar_Chat_mychat_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_jsxDEV2, \"children\", \" Game of thrones \"), _jsxDEV2), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 150,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.alignment,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_UsernameField__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.second_bar,\n        completed: isUsernameConfirmed,\n        value: username,\n        onChange: function onChange(value) {\n          return setUsername(value);\n        },\n        onSubmit: function onSubmit() {\n          return setUsernameConfirmed(true);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 153,\n        columnNumber: 7\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 152,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.message_container,\n      children: history.map(function (_ref, i) {\n        var username = _ref.username,\n            message = _ref.message;\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.chatbox,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n            children: \" \"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 165,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"b\", {\n              children: username\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 166,\n              columnNumber: 16\n            }, _this), \": \", message]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 166,\n            columnNumber: 13\n          }, _this)]\n        }, i, true, {\n          fileName: _jsxFileName,\n          lineNumber: 164,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 162,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.alignment,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.bottom_wrapper.message_input_wrapper,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"main\", {\n          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.bottom_wrapper,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"form\", {\n            onSubmit: this.handleSubmit,\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Editor, {\n              value: this.state.content,\n              init: {\n                height: 500,\n                menubar: false\n              },\n              onEditorChange: this.handleChange\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 179,\n              columnNumber: 11\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 187,\n              columnNumber: 5\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"label\", {\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"input\", {\n                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.message_input,\n                id: \"textarea\",\n                type: \"text\",\n                name: \"message\",\n                value: message,\n                onChange: function onChange(e) {\n                  return setMessage(e.target.value);\n                },\n                placeholder: username ? \"Enter your message...\" : \"Set username...\",\n                disabled: !isUsernameConfirmed\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 193,\n                columnNumber: 13\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 191,\n              columnNumber: 11\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"input\", {\n              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.submit,\n              type: \"submit\",\n              value: \"Submit\",\n              disabled: !isUsernameConfirmed\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 205,\n              columnNumber: 11\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 178,\n            columnNumber: 11\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 173,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 172,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 171,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 138,\n    columnNumber: 4\n  }, this);\n}\n\n_s(Home, \"WH6vxuhB+LKBaPhqEAqsRyTxr4c=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwidXNlU3RhdGUiLCJzb2NrZXQiLCJzZXRTb2NrZXQiLCJpc1VzZXJuYW1lQ29uZmlybWVkIiwic2V0VXNlcm5hbWVDb25maXJtZWQiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJoaXN0b3J5Iiwic2V0SGlzdG9yeSIsImNvbm5lY3RTb2NrZXQiLCJmZXRjaCIsIm5ld1NvY2tldCIsImlvIiwib24iLCJjb25zb2xlIiwibG9nIiwibXNnIiwid2FybiIsInVzZUVmZmVjdCIsImhhbmRsZVN1Ym1pdCIsImV2dCIsInByZXZlbnREZWZhdWx0IiwiYWxlcnQiLCJlbWl0Iiwic3R5bGVzIiwiY2hhdF93aW5kb3ciLCJ0b3BfbWVudSIsInRleHQiLCJhbGlnbm1lbnQiLCJzZWNvbmRfYmFyIiwidmFsdWUiLCJtZXNzYWdlX2NvbnRhaW5lciIsIm1hcCIsImkiLCJjaGF0Ym94IiwiYm90dG9tX3dyYXBwZXIiLCJtZXNzYWdlX2lucHV0X3dyYXBwZXIiLCJzdGF0ZSIsImNvbnRlbnQiLCJoZWlnaHQiLCJtZW51YmFyIiwiaGFuZGxlQ2hhbmdlIiwibWVzc2FnZV9pbnB1dCIsImUiLCJ0YXJnZXQiLCJzdWJtaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1lLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFBQTtBQUFBOztBQUM3QjtBQUQ2QixrQkFFREMsc0RBQVEsQ0FBQyxJQUFELENBRlA7QUFBQSxNQUV0QkMsTUFGc0I7QUFBQSxNQUVkQyxTQUZjLGlCQUk3Qjs7O0FBSjZCLG1CQUt1QkYsc0RBQVEsQ0FBQyxLQUFELENBTC9CO0FBQUEsTUFLdEJHLG1CQUxzQjtBQUFBLE1BS0RDLG9CQUxDLGtCQU83Qjs7O0FBUDZCLG1CQVFHSixzREFB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QSxJIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBpbyB9IGZyb20gXCJzb2NrZXQuaW8tY2xpZW50XCI7XG5pbXBvcnQgVXNlcm5hbWVGaWVsZCBmcm9tIFwiLi4vY29tcG9uZW50cy9Vc2VybmFtZUZpZWxkXCI7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5cblxuXG4gIFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgLy8gc2F2ZSB0aGUgc29ja2V0XG4gIGNvbnN0IFtzb2NrZXQsIHNldFNvY2tldF0gPSB1c2VTdGF0ZShudWxsKTtcblxuICAvLyBXaGV0aGVyIHRoZSB1c2VybmFtZSBpcyBzZXQuXG4gIGNvbnN0IFtpc1VzZXJuYW1lQ29uZmlybWVkLCBzZXRVc2VybmFtZUNvbmZpcm1lZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgLy8gU3RhdGUgZm9yIHRoZSB1c2VybmFtZS5cbiAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICAvLyBTdGF0ZSBmb3IgdGhlIGZvcm0gZmllbGQuXG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIC8vIFN0YXRlIGZvciBtZXNzYWdlIGhpc3RvcnkuXG4gIGNvbnN0IFtoaXN0b3J5LCBzZXRIaXN0b3J5XSA9IHVzZVN0YXRlKFtcbiAgICAvKlxuICAgIHtcbiAgICAgIHVzZXJuYW1lOiBcIlNhbnRhIENsYXVzXCIsXG4gICAgICBtZXNzYWdlOiBcIkhvIGhvIGhvIVwiXG4gICAgfVxuICAgICovXG4gIF0pO1xuXG4gIGNvbnN0IGNvbm5lY3RTb2NrZXQgPSAoKSA9PiB7XG4gICAgLy8gcHJpbWUgdGhlIHNlcnZlciBmaXJzdC4geWVzLCB0aGlzIGlzIGFuIGV4dHJhIGNhbGwgYW5kIGlzIGluZWZmaWNpZW50LlxuICAgIC8vIGJ1dCB3ZSdyZSB1c2luZyBOZXh0SlMgZm9yIGNvbnZlbmllbmNlLCBzbyB0aGlzIGlzIGEgbmVjZXNzYXJ5IGV2aWwuXG4gICAgZmV0Y2goXCIvYXBpL2NoYXRcIik7XG4gICAgLy8gYWZ0ZXIgbWFraW5nIHN1cmUgdGhhdCBzb2NrZXQgc2VydmVyIGlzIHByaW1lZCwgY29ubmVjdCB0byBpdC5cblxuICAgIGlmICghc29ja2V0KSB7XG4gICAgICBjb25zdCBuZXdTb2NrZXQgPSBpbygpO1xuXG4gICAgICAvLyBDb25maXJtcyBjb25uZWN0aW9uXG4gICAgICBuZXdTb2NrZXQub24oXCJjb25uZWN0XCIsICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJDaGF0IGFwcCBjb25uZWN0ZWRcIik7XG4gICAgICB9KTtcblxuICAgICAgLy8gaGFuZGxlcyBtZXNzYWdlXG4gICAgICBuZXdTb2NrZXQub24oXCJtZXNzYWdlXCIsIChtc2cpID0+IHtcbiAgICAgICAgc2V0SGlzdG9yeSgoaGlzdG9yeSkgPT4gWy4uLmhpc3RvcnksIG1zZ10pO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIExvZ3Mgd2hlbiBzZXJ2ZXIgZGlzY29ubmVjdHNcbiAgICAgIG5ld1NvY2tldC5vbihcImRpc2Nvbm5lY3RcIiwgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLndhcm4oXCJXQVJOSU5HOiBjaGF0IGFwcCBkaXNjb25uZWN0ZWRcIik7XG4gICAgICB9KTtcblxuICAgICAgc2V0U29ja2V0KCgpID0+IG5ld1NvY2tldCk7XG4gICAgfVxuICB9O1xuXG4gIC8vIFRoZSB3ZWJzb2NrZXQgY29kZVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbm5lY3RTb2NrZXQoKTtcbiAgfSwgW10pO1xuXG4gIC8vIHRoaXMgbWV0aG9kIHN1Ym1pdHMgdGhlIGZvcm0gYW5kIHNlbmRzIHRoZSBtZXNzYWdlIHRvIHRoZSBzZXJ2ZXIuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChldnQpID0+IHtcbiAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoIXNvY2tldCkge1xuICAgICAgYWxlcnQoXCJDaGF0cm9vbSBub3QgY29ubmVjdGVkIHlldC4gVHJ5IGFnYWluIGluIGEgbGl0dGxlIGJpdC5cIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gcHJldmVudCBlbXB0eSBzdWJtaXNzaW9uc1xuICAgIGlmICghbWVzc2FnZSB8fCAhaXNVc2VybmFtZUNvbmZpcm1lZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIHN1Ym1pdCBhbmQgYmxhbmstb3V0IHRoZSBmaWVsZC5cbiAgICBzb2NrZXQuZW1pdChcIm1lc3NhZ2Utc3VibWl0dGVkXCIsIHsgbWVzc2FnZSwgdXNlcm5hbWUgfSk7XG4gICAgc2V0TWVzc2FnZShcIlwiKTtcbiAgfTtcbi8vICBjb25zdCB3ZWJzb2NrZXQ9cmVxdWlyZShcIndzXCIpIFxuLy8gICBjb25zdCByb29tcyA9IHt9O1xuXG4vLyAgIHdzLm9uKFwiY29ubmVjdGlvblwiLCBzb2NrZXQgPT4ge1xuLy8gICAgIGNvbnN0IHV1aWQgPSB1dWlkIC8vIGNyZWF0ZSBoZXJlIGEgdXVpZCBmb3IgdGhpcyBjb25uZWN0aW9uXG4gIFxuLy8gICAgIGNvbnN0IGxlYXZlID0gcm9vbSA9PiB7XG4vLyAgICAgICAvLyBub3QgcHJlc2VudDogZG8gbm90aGluZ1xuLy8gICAgICAgaWYoISByb29tc1tyb29tXVt1dWlkXSkgcmV0dXJuO1xuICBcbi8vICAgICAgIC8vIGlmIHRoZSBvbmUgZXhpdGluZyBpcyB0aGUgbGFzdCBvbmUsIGRlc3Ryb3kgdGhlIHJvb21cbi8vICAgICAgIGlmKE9iamVjdC5rZXlzKHJvb21zW3Jvb21dKS5sZW5ndGggPT09IDEpIGRlbGV0ZSByb29tc1tyb29tXTtcbi8vICAgICAgIC8vIG90aGVyd2lzZSBzaW1wbHkgbGVhdmUgdGhlIHJvb21cbi8vICAgICAgIGVsc2UgZGVsZXRlIHJvb21zW3Jvb21dW3V1aWRdO1xuLy8gICAgIH07XG4gIFxuLy8gICAgIHNvY2tldC5vbihcIm1lc3NhZ2VcIiwgZGF0YSA9PiB7XG4vLyAgICAgICBjb25zdCB7IG1lc3NhZ2UsIG1ldGEsIHJvb20gfSA9IGRhdGE7XG4gIFxuLy8gICAgICAgaWYobWV0YSA9PT0gXCJqb2luXCIpIHtcbi8vICAgICAgICAgaWYoISByb29tc1tyb29tXSkgcm9vbXNbcm9vbV0gPSB7fTsgLy8gY3JlYXRlIHRoZSByb29tXG4vLyAgICAgICAgIGlmKCEgcm9vbXNbcm9vbV1bdXVpZF0pIHJvb21zW3Jvb21dW3V1aWRdID0gc29ja2V0OyAvLyBqb2luIHRoZSByb29tXG4vLyAgICAgICB9XG4vLyAgICAgICBlbHNlIGlmKG1ldGEgPT09IFwibGVhdmVcIikge1xuLy8gICAgICAgICBsZWF2ZShyb29tKTtcbi8vICAgICAgIH1cbi8vICAgICAgIGVsc2UgaWYoISBtZXRhKSB7XG4vLyAgICAgICAgIC8vIHNlbmQgdGhlIG1lc3NhZ2UgdG8gYWxsIGluIHRoZSByb29tXG4vLyAgICAgICAgIE9iamVjdC5lbnRyaWVzKHJvb21zW3Jvb21dKS5mb3JFYWNoKChbLCBzb2NrXSkgPT4gc29jay5zZW5kKHsgbWVzc2FnZSB9KSk7XG4vLyAgICAgICB9XG4vLyAgICAgfSk7XG4gIFxuLy8gICAgIHNvY2tldC5vbihcImNsb3NlXCIsICgpID0+IHtcbi8vICAgICAgIC8vIGZvciBlYWNoIHJvb20sIHJlbW92ZSB0aGUgY2xvc2VkIHNvY2tldFxuLy8gICAgICAgT2JqZWN0LmtleXMocm9vbXMpLmZvckVhY2gocm9vbSA9PiBsZWF2ZShyb29tKSk7XG4vLyAgICAgfSk7XG4vLyAgIH0pO1xuXG5cblxuXG4gIHJldHVybiAoXG5cblxuXG4gICAgXG4gIFxuICAgIFxuICAgIFxuICAgIFxuXG4gIFxuICAgIFxuICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaGF0X3dpbmRvd30+XG4gICAgICA8SGVhZD5cbiAgICAgIFxuICAgICAgICA8dGl0bGUgPmNoaXQtY2hhdDwvdGl0bGU+XG4gICAgXG5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgXG4gICAgICA8ZW1iZWQgc3JjPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj0zMm9RcmpTQ1VUdyZ0PTRzXCIgbG9vcD1cInRydWVcIiBhdXRvc3RhcnQ9XCJ0cnVlXCIgd2lkdGg9XCIyXCIgaGVpZ2h0PVwiMFwiPjwvZW1iZWQ+XG4gICAgICBcbiAgICAgIFxuICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRvcF9tZW51fWNsYXNzTmFtZT17c3R5bGVzLnRleHR9PiBHYW1lIG9mIHRocm9uZXMgPC9oMT5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hbGlnbm1lbnR9ID5cbiAgICAgIDxVc2VybmFtZUZpZWxkIGNsYXNzTmFtZT17c3R5bGVzLnNlY29uZF9iYXJ9XG4gICAgICAgIGNvbXBsZXRlZD17aXNVc2VybmFtZUNvbmZpcm1lZH1cbiAgICAgICAgdmFsdWU9e3VzZXJuYW1lfVxuICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiBzZXRVc2VybmFtZSh2YWx1ZSl9XG4gICAgICAgIG9uU3VibWl0PXsoKSA9PiBzZXRVc2VybmFtZUNvbmZpcm1lZCh0cnVlKX1cbiAgICAgIC8+PC9kaXY+XG57LyogICA8dWwgY2xhc3M9XCJtZXNzYWdlc1wiPjwvdWw+XG4gICAgPGRpdiBjbGFzcz1cImJvdHRvbV93cmFwcGVyIGNsZWFyZml4XCI+Ki99XG5cbiAgICAgIDxkaXYgIGNsYXNzTmFtZT17c3R5bGVzLm1lc3NhZ2VfY29udGFpbmVyfT5cbiAgICAgICAge2hpc3RvcnkubWFwKCh7IHVzZXJuYW1lLCBtZXNzYWdlIH0sIGkpICA9PiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaGF0Ym94fSBrZXk9e2l9PiBcbiAgICAgICAgICAgIDxwPiA8L3A+XG4gICAgICAgICAgICA8cD48Yj57dXNlcm5hbWV9PC9iPjoge21lc3NhZ2V9XG4gICAgICAgICAgICA8L3A+PC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFsaWdubWVudH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm90dG9tX3dyYXBwZXIgLm1lc3NhZ2VfaW5wdXRfd3JhcHBlcn0+XG4gICAgICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMuYm90dG9tX3dyYXBwZXJ9PlxuICAgICAgICAgIFxuICAgICAgICAgIFxuICAgICAgICAgIFxuICAgICAgICAgIFxuICAgICAgICAgIDxmb3JtICBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9ID5cbiAgICAgICAgICA8RWRpdG9yXG4gICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5jb250ZW50fVxuICAgICAgaW5pdD17e1xuICAgICAgaGVpZ2h0OiA1MDAsXG4gICAgICBtZW51YmFyOiBmYWxzZVxuICAgIH19XG4gICAgICBvbkVkaXRvckNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAvPlxuICAgIDxiciAvPlxuICAgICAgICAgIFxuICAgICAgXG4gICAgXG4gICAgICAgICAgPGxhYmVsID5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17c3R5bGVzLm1lc3NhZ2VfaW5wdXR9XG4gICAgICAgICAgICAgIGlkPVwidGV4dGFyZWFcIlxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJtZXNzYWdlXCJcbiAgICAgICAgICAgICAgdmFsdWU9e21lc3NhZ2V9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TWVzc2FnZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcbiAgICAgICAgICAgICAgICB1c2VybmFtZSA/IFwiRW50ZXIgeW91ciBtZXNzYWdlLi4uXCIgOiBcIlNldCB1c2VybmFtZS4uLlwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFpc1VzZXJuYW1lQ29uZmlybWVkfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e3N0eWxlcy5zdWJtaXR9dHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU3VibWl0XCIgZGlzYWJsZWQ9eyFpc1VzZXJuYW1lQ29uZmlybWVkfSAvPlxuICAgICAgICA8L2Zvcm0+PC9tYWluPlxuICAgICAgICA8L2Rpdj48L2Rpdj5cblxuXG4gICAgICBcbiAgICAgIHsvKiA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3RlcmF9PlxuICAgICAgICBcbiAgICAgIDwvZm9vdGVyPiAqL31cbiAgICA8L2Rpdj5cbiAgKX1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})