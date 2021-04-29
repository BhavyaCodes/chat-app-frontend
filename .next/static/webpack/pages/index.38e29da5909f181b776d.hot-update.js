webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var _Users_tanyaprabhakar_Chat_mychat_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_tanyaprabhakar_Chat_mychat_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/build/index.js\");\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_UsernameField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/UsernameField */ \"./components/UsernameField.jsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\nvar _jsxFileName = \"/Users/tanyaprabhakar/Chat/mychat/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var _jsxDEV2,\n      _this = this;\n\n  // save the socket\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(null),\n      socket = _useState[0],\n      setSocket = _useState[1]; // Whether the username is set.\n\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(false),\n      isUsernameConfirmed = _useState2[0],\n      setUsernameConfirmed = _useState2[1]; // State for the username.\n\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(\"\"),\n      username = _useState3[0],\n      setUsername = _useState3[1]; // State for the form field.\n\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(\"\"),\n      message = _useState4[0],\n      setMessage = _useState4[1]; // State for message history.\n\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])([\n    /*\n    {\n      username: \"Santa Claus\",\n      message: \"Ho ho ho!\"\n    }\n    */\n  ]),\n      history = _useState5[0],\n      setHistory = _useState5[1];\n\n  var connectSocket = function connectSocket() {\n    // prime the server first. yes, this is an extra call and is inefficient.\n    // but we're using NextJS for convenience, so this is a necessary evil.\n    fetch(\"/api/chat\"); // after making sure that socket server is primed, connect to it.\n\n    if (!socket) {\n      var newSocket = Object(socket_io_client__WEBPACK_IMPORTED_MODULE_6__[\"io\"])(); // Confirms connection\n\n      newSocket.on(\"connect\", function () {\n        console.log(\"Chat app connected\");\n      }); // handles message\n\n      newSocket.on(\"message\", function (msg) {\n        setHistory(function (history) {\n          return [].concat(Object(_Users_tanyaprabhakar_Chat_mychat_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(history), [msg]);\n        });\n      }); // Logs when server disconnects\n\n      newSocket.on(\"disconnect\", function () {\n        console.warn(\"WARNING: chat app disconnected\");\n      });\n      setSocket(function () {\n        return newSocket;\n      });\n    }\n  }; // The websocket code\n\n\n  Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useEffect\"])(function () {\n    connectSocket();\n  }, []); // this method submits the form and sends the message to the server.\n\n  var handleSubmit = function handleSubmit(evt) {\n    evt.preventDefault();\n\n    if (!socket) {\n      alert(\"Chatroom not connected yet. Try again in a little bit.\");\n      return;\n    } // prevent empty submissions\n\n\n    if (!message || !isUsernameConfirmed) {\n      return;\n    } // submit and blank-out the field.\n\n\n    socket.emit(\"message-submitted\", {\n      message: message,\n      username: username\n    });\n    setMessage(\"\");\n  }; //  const websocket=require(\"ws\") \n  //   const rooms = {};\n  //   ws.on(\"connection\", socket => {\n  //     const uuid = uuid // create here a uuid for this connection\n  //     const leave = room => {\n  //       // not present: do nothing\n  //       if(! rooms[room][uuid]) return;\n  //       // if the one exiting is the last one, destroy the room\n  //       if(Object.keys(rooms[room]).length === 1) delete rooms[room];\n  //       // otherwise simply leave the room\n  //       else delete rooms[room][uuid];\n  //     };\n  //     socket.on(\"message\", data => {\n  //       const { message, meta, room } = data;\n  //       if(meta === \"join\") {\n  //         if(! rooms[room]) rooms[room] = {}; // create the room\n  //         if(! rooms[room][uuid]) rooms[room][uuid] = socket; // join the room\n  //       }\n  //       else if(meta === \"leave\") {\n  //         leave(room);\n  //       }\n  //       else if(! meta) {\n  //         // send the message to all in the room\n  //         Object.entries(rooms[room]).forEach(([, sock]) => sock.send({ message }));\n  //       }\n  //     });\n  //     socket.on(\"close\", () => {\n  //       // for each room, remove the closed socket\n  //       Object.keys(rooms).forEach(room => leave(room));\n  //     });\n  //   });\n\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.chat_window,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"meta\", {\n        charset: \"utf-8\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 140,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"meta\", {\n        name: \"viewport\",\n        content: \"width=device-width, initial-scale=1\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 141,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"script\", {\n        src: \"https://cdn.tiny.cloud/1/no-api-key/tinymce/5/tinymce.min.js\",\n        referrerpolicy: \"origin\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 142,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"title\", {\n        children: \"chit-chat\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 143,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 139,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"embed\", {\n      src: \"https://www.youtube.com/watch?v=32oQrjSCUTw&t=4s\",\n      loop: \"true\",\n      autostart: \"true\",\n      width: \"2\",\n      height: \"0\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 148,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h1\", (_jsxDEV2 = {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.top_menu\n    }, Object(_Users_tanyaprabhakar_Chat_mychat_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_jsxDEV2, \"className\", _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.text), Object(_Users_tanyaprabhakar_Chat_mychat_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_jsxDEV2, \"children\", \" Game of thrones \"), _jsxDEV2), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 151,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.alignment,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_UsernameField__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.second_bar,\n        completed: isUsernameConfirmed,\n        value: username,\n        onChange: function onChange(value) {\n          return setUsername(value);\n        },\n        onSubmit: function onSubmit() {\n          return setUsernameConfirmed(true);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 154,\n        columnNumber: 7\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 153,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.message_container,\n      children: history.map(function (_ref, i) {\n        var username = _ref.username,\n            message = _ref.message;\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.chatbox,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n            children: \" \"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 166,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"b\", {\n              children: username\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 167,\n              columnNumber: 16\n            }, _this), \": \", message]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 167,\n            columnNumber: 13\n          }, _this)]\n        }, i, true, {\n          fileName: _jsxFileName,\n          lineNumber: 165,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 163,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.alignment,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.bottom_wrapper.message_input_wrapper,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"main\", {\n          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.bottom_wrapper,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"form\", {\n            onSubmit: handleSubmit,\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"form\", {\n              method: \"post\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"textarea\", {\n                id: \"mytextarea\",\n                children: \"ASCII art is great, but...\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 179,\n                columnNumber: 7\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 178,\n              columnNumber: 11\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"label\", {\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"input\", {\n                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.message_input,\n                type: \"text\",\n                name: \"message\",\n                value: message,\n                onChange: function onChange(e) {\n                  return setMessage(e.target.value);\n                },\n                placeholder: username ? \"Enter your message...\" : \"Set username...\",\n                disabled: !isUsernameConfirmed\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 183,\n                columnNumber: 13\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 181,\n              columnNumber: 11\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"input\", {\n              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.submit,\n              type: \"submit\",\n              value: \"Submit\",\n              disabled: !isUsernameConfirmed\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 194,\n              columnNumber: 11\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 176,\n            columnNumber: 11\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 174,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 173,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 172,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 138,\n    columnNumber: 4\n  }, this);\n}\n\n_s(Home, \"WH6vxuhB+LKBaPhqEAqsRyTxr4c=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwidXNlU3RhdGUiLCJzb2NrZXQiLCJzZXRTb2NrZXQiLCJpc1VzZXJuYW1lQ29uZmlybWVkIiwic2V0VXNlcm5hbWVDb25maXJtZWQiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJoaXN0b3J5Iiwic2V0SGlzdG9yeSIsImNvbm5lY3RTb2NrZXQiLCJmZXRjaCIsIm5ld1NvY2tldCIsImlvIiwib24iLCJjb25zb2xlIiwibG9nIiwibXNnIiwid2FybiIsInVzZUVmZmVjdCIsImhhbmRsZVN1Ym1pdCIsImV2dCIsInByZXZlbnREZWZhdWx0IiwiYWxlcnQiLCJlbWl0Iiwic3R5bGVzIiwiY2hhdF93aW5kb3ciLCJ0b3BfbWVudSIsInRleHQiLCJhbGlnbm1lbnQiLCJzZWNvbmRfYmFyIiwidmFsdWUiLCJtZXNzYWdlX2NvbnRhaW5lciIsIm1hcCIsImkiLCJjaGF0Ym94IiwiYm90dG9tX3dyYXBwZXIiLCJtZXNzYWdlX2lucHV0X3dyYXBwZXIiLCJtZXNzYWdlX2lucHV0IiwiZSIsInRhcmdldCIsInN1Ym1pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTWUsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBO0FBQUE7O0FBQzdCO0FBRDZCLGtCQUVEQyxzREFBUSxDQUFDLElBQUQsQ0FGUDtBQUFBLE1BRXRCQyxNQUZzQjtBQUFBLE1BRWRDLFNBRmMsaUJBSTdCOzs7QUFKNkIsbUJBS3VCRixzREFBUSxDQUFDLEtBQUQsQ0FML0I7QUFBQSxNQUt0QkcsbUJBTHNCO0FBQUEsTUFLREMsb0JBTEMsa0JBTzdCOzs7QUFQNkIsbUJBUUdKLHNEQUFRLENBQUMsRUFBRCxDQVJYO0FBQUEsTUFRdEJLLFFBUnNCO0FBQUEsTUFRWkMsV0FSWSxr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QUE7QUFBQSxVQVpEO0FBOEVFOztHQWhNb0JKLEk7O0tBQUFBLEkiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGlvIH0gZnJvbSBcInNvY2tldC5pby1jbGllbnRcIjtcbmltcG9ydCBVc2VybmFtZUZpZWxkIGZyb20gXCIuLi9jb21wb25lbnRzL1VzZXJuYW1lRmllbGRcIjtcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cblxuXG5cbiAgXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICAvLyBzYXZlIHRoZSBzb2NrZXRcbiAgY29uc3QgW3NvY2tldCwgc2V0U29ja2V0XSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIC8vIFdoZXRoZXIgdGhlIHVzZXJuYW1lIGlzIHNldC5cbiAgY29uc3QgW2lzVXNlcm5hbWVDb25maXJtZWQsIHNldFVzZXJuYW1lQ29uZmlybWVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAvLyBTdGF0ZSBmb3IgdGhlIHVzZXJuYW1lLlxuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIC8vIFN0YXRlIGZvciB0aGUgZm9ybSBmaWVsZC5cbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgLy8gU3RhdGUgZm9yIG1lc3NhZ2UgaGlzdG9yeS5cbiAgY29uc3QgW2hpc3RvcnksIHNldEhpc3RvcnldID0gdXNlU3RhdGUoW1xuICAgIC8qXG4gICAge1xuICAgICAgdXNlcm5hbWU6IFwiU2FudGEgQ2xhdXNcIixcbiAgICAgIG1lc3NhZ2U6IFwiSG8gaG8gaG8hXCJcbiAgICB9XG4gICAgKi9cbiAgXSk7XG5cbiAgY29uc3QgY29ubmVjdFNvY2tldCA9ICgpID0+IHtcbiAgICAvLyBwcmltZSB0aGUgc2VydmVyIGZpcnN0LiB5ZXMsIHRoaXMgaXMgYW4gZXh0cmEgY2FsbCBhbmQgaXMgaW5lZmZpY2llbnQuXG4gICAgLy8gYnV0IHdlJ3JlIHVzaW5nIE5leHRKUyBmb3IgY29udmVuaWVuY2UsIHNvIHRoaXMgaXMgYSBuZWNlc3NhcnkgZXZpbC5cbiAgICBmZXRjaChcIi9hcGkvY2hhdFwiKTtcbiAgICAvLyBhZnRlciBtYWtpbmcgc3VyZSB0aGF0IHNvY2tldCBzZXJ2ZXIgaXMgcHJpbWVkLCBjb25uZWN0IHRvIGl0LlxuXG4gICAgaWYgKCFzb2NrZXQpIHtcbiAgICAgIGNvbnN0IG5ld1NvY2tldCA9IGlvKCk7XG5cbiAgICAgIC8vIENvbmZpcm1zIGNvbm5lY3Rpb25cbiAgICAgIG5ld1NvY2tldC5vbihcImNvbm5lY3RcIiwgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkNoYXQgYXBwIGNvbm5lY3RlZFwiKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBoYW5kbGVzIG1lc3NhZ2VcbiAgICAgIG5ld1NvY2tldC5vbihcIm1lc3NhZ2VcIiwgKG1zZykgPT4ge1xuICAgICAgICBzZXRIaXN0b3J5KChoaXN0b3J5KSA9PiBbLi4uaGlzdG9yeSwgbXNnXSk7XG4gICAgICB9KTtcblxuICAgICAgLy8gTG9ncyB3aGVuIHNlcnZlciBkaXNjb25uZWN0c1xuICAgICAgbmV3U29ja2V0Lm9uKFwiZGlzY29ubmVjdFwiLCAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUud2FybihcIldBUk5JTkc6IGNoYXQgYXBwIGRpc2Nvbm5lY3RlZFwiKTtcbiAgICAgIH0pO1xuXG4gICAgICBzZXRTb2NrZXQoKCkgPT4gbmV3U29ja2V0KTtcbiAgICB9XG4gIH07XG5cbiAgLy8gVGhlIHdlYnNvY2tldCBjb2RlXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29ubmVjdFNvY2tldCgpO1xuICB9LCBbXSk7XG5cbiAgLy8gdGhpcyBtZXRob2Qgc3VibWl0cyB0aGUgZm9ybSBhbmQgc2VuZHMgdGhlIG1lc3NhZ2UgdG8gdGhlIHNlcnZlci5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGV2dCkgPT4ge1xuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICghc29ja2V0KSB7XG4gICAgICBhbGVydChcIkNoYXRyb29tIG5vdCBjb25uZWN0ZWQgeWV0LiBUcnkgYWdhaW4gaW4gYSBsaXR0bGUgYml0LlwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBwcmV2ZW50IGVtcHR5IHN1Ym1pc3Npb25zXG4gICAgaWYgKCFtZXNzYWdlIHx8ICFpc1VzZXJuYW1lQ29uZmlybWVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gc3VibWl0IGFuZCBibGFuay1vdXQgdGhlIGZpZWxkLlxuICAgIHNvY2tldC5lbWl0KFwibWVzc2FnZS1zdWJtaXR0ZWRcIiwgeyBtZXNzYWdlLCB1c2VybmFtZSB9KTtcbiAgICBzZXRNZXNzYWdlKFwiXCIpO1xuICB9O1xuLy8gIGNvbnN0IHdlYnNvY2tldD1yZXF1aXJlKFwid3NcIikgXG4vLyAgIGNvbnN0IHJvb21zID0ge307XG5cbi8vICAgd3Mub24oXCJjb25uZWN0aW9uXCIsIHNvY2tldCA9PiB7XG4vLyAgICAgY29uc3QgdXVpZCA9IHV1aWQgLy8gY3JlYXRlIGhlcmUgYSB1dWlkIGZvciB0aGlzIGNvbm5lY3Rpb25cbiAgXG4vLyAgICAgY29uc3QgbGVhdmUgPSByb29tID0+IHtcbi8vICAgICAgIC8vIG5vdCBwcmVzZW50OiBkbyBub3RoaW5nXG4vLyAgICAgICBpZighIHJvb21zW3Jvb21dW3V1aWRdKSByZXR1cm47XG4gIFxuLy8gICAgICAgLy8gaWYgdGhlIG9uZSBleGl0aW5nIGlzIHRoZSBsYXN0IG9uZSwgZGVzdHJveSB0aGUgcm9vbVxuLy8gICAgICAgaWYoT2JqZWN0LmtleXMocm9vbXNbcm9vbV0pLmxlbmd0aCA9PT0gMSkgZGVsZXRlIHJvb21zW3Jvb21dO1xuLy8gICAgICAgLy8gb3RoZXJ3aXNlIHNpbXBseSBsZWF2ZSB0aGUgcm9vbVxuLy8gICAgICAgZWxzZSBkZWxldGUgcm9vbXNbcm9vbV1bdXVpZF07XG4vLyAgICAgfTtcbiAgXG4vLyAgICAgc29ja2V0Lm9uKFwibWVzc2FnZVwiLCBkYXRhID0+IHtcbi8vICAgICAgIGNvbnN0IHsgbWVzc2FnZSwgbWV0YSwgcm9vbSB9ID0gZGF0YTtcbiAgXG4vLyAgICAgICBpZihtZXRhID09PSBcImpvaW5cIikge1xuLy8gICAgICAgICBpZighIHJvb21zW3Jvb21dKSByb29tc1tyb29tXSA9IHt9OyAvLyBjcmVhdGUgdGhlIHJvb21cbi8vICAgICAgICAgaWYoISByb29tc1tyb29tXVt1dWlkXSkgcm9vbXNbcm9vbV1bdXVpZF0gPSBzb2NrZXQ7IC8vIGpvaW4gdGhlIHJvb21cbi8vICAgICAgIH1cbi8vICAgICAgIGVsc2UgaWYobWV0YSA9PT0gXCJsZWF2ZVwiKSB7XG4vLyAgICAgICAgIGxlYXZlKHJvb20pO1xuLy8gICAgICAgfVxuLy8gICAgICAgZWxzZSBpZighIG1ldGEpIHtcbi8vICAgICAgICAgLy8gc2VuZCB0aGUgbWVzc2FnZSB0byBhbGwgaW4gdGhlIHJvb21cbi8vICAgICAgICAgT2JqZWN0LmVudHJpZXMocm9vbXNbcm9vbV0pLmZvckVhY2goKFssIHNvY2tdKSA9PiBzb2NrLnNlbmQoeyBtZXNzYWdlIH0pKTtcbi8vICAgICAgIH1cbi8vICAgICB9KTtcbiAgXG4vLyAgICAgc29ja2V0Lm9uKFwiY2xvc2VcIiwgKCkgPT4ge1xuLy8gICAgICAgLy8gZm9yIGVhY2ggcm9vbSwgcmVtb3ZlIHRoZSBjbG9zZWQgc29ja2V0XG4vLyAgICAgICBPYmplY3Qua2V5cyhyb29tcykuZm9yRWFjaChyb29tID0+IGxlYXZlKHJvb20pKTtcbi8vICAgICB9KTtcbi8vICAgfSk7XG5cblxuXG5cbiAgcmV0dXJuIChcblxuXG5cbiAgICBcbiAgXG4gICAgXG4gICAgXG4gICAgXG5cbiAgXG4gICAgXG4gICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoYXRfd2luZG93fT5cbiAgICAgIDxIZWFkPlxuICAgICAgPG1ldGEgY2hhcnNldD1cInV0Zi04XCIvPlxuICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiLz5cbiAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9jZG4udGlueS5jbG91ZC8xL25vLWFwaS1rZXkvdGlueW1jZS81L3RpbnltY2UubWluLmpzXCIgcmVmZXJyZXJwb2xpY3k9XCJvcmlnaW5cIj48L3NjcmlwdD5cbiAgICAgICAgPHRpdGxlID5jaGl0LWNoYXQ8L3RpdGxlPlxuICAgICAgICBcbiAgICAgIDwvSGVhZD5cblxuICAgICAgXG4gICAgICA8ZW1iZWQgc3JjPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj0zMm9RcmpTQ1VUdyZ0PTRzXCIgbG9vcD1cInRydWVcIiBhdXRvc3RhcnQ9XCJ0cnVlXCIgd2lkdGg9XCIyXCIgaGVpZ2h0PVwiMFwiPjwvZW1iZWQ+XG4gICAgICBcbiAgICAgIFxuICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRvcF9tZW51fWNsYXNzTmFtZT17c3R5bGVzLnRleHR9PiBHYW1lIG9mIHRocm9uZXMgPC9oMT5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hbGlnbm1lbnR9ID5cbiAgICAgIDxVc2VybmFtZUZpZWxkIGNsYXNzTmFtZT17c3R5bGVzLnNlY29uZF9iYXJ9XG4gICAgICAgIGNvbXBsZXRlZD17aXNVc2VybmFtZUNvbmZpcm1lZH1cbiAgICAgICAgdmFsdWU9e3VzZXJuYW1lfVxuICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiBzZXRVc2VybmFtZSh2YWx1ZSl9XG4gICAgICAgIG9uU3VibWl0PXsoKSA9PiBzZXRVc2VybmFtZUNvbmZpcm1lZCh0cnVlKX1cbiAgICAgIC8+PC9kaXY+XG57LyogICA8dWwgY2xhc3M9XCJtZXNzYWdlc1wiPjwvdWw+XG4gICAgPGRpdiBjbGFzcz1cImJvdHRvbV93cmFwcGVyIGNsZWFyZml4XCI+Ki99XG5cbiAgICAgIDxkaXYgIGNsYXNzTmFtZT17c3R5bGVzLm1lc3NhZ2VfY29udGFpbmVyfT5cbiAgICAgICAge2hpc3RvcnkubWFwKCh7IHVzZXJuYW1lLCBtZXNzYWdlIH0sIGkpICA9PiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaGF0Ym94fSBrZXk9e2l9PiBcbiAgICAgICAgICAgIDxwPiA8L3A+XG4gICAgICAgICAgICA8cD48Yj57dXNlcm5hbWV9PC9iPjoge21lc3NhZ2V9XG4gICAgICAgICAgICA8L3A+PC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFsaWdubWVudH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm90dG9tX3dyYXBwZXIgLm1lc3NhZ2VfaW5wdXRfd3JhcHBlcn0+XG4gICAgICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMuYm90dG9tX3dyYXBwZXJ9PlxuICAgICAgICAgIFxuICAgICAgICAgIDxmb3JtICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cblxuICAgICAgICAgIDxmb3JtIG1ldGhvZD1cInBvc3RcIj5cbiAgICAgIDx0ZXh0YXJlYSBpZD1cIm15dGV4dGFyZWFcIj5BU0NJSSBhcnQgaXMgZ3JlYXQsIGJ1dC4uLjwvdGV4dGFyZWE+XG4gICAgPC9mb3JtPlxuICAgICAgICAgIDxsYWJlbCA+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e3N0eWxlcy5tZXNzYWdlX2lucHV0fVxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJtZXNzYWdlXCJcbiAgICAgICAgICAgICAgdmFsdWU9e21lc3NhZ2V9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TWVzc2FnZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcbiAgICAgICAgICAgICAgICB1c2VybmFtZSA/IFwiRW50ZXIgeW91ciBtZXNzYWdlLi4uXCIgOiBcIlNldCB1c2VybmFtZS4uLlwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFpc1VzZXJuYW1lQ29uZmlybWVkfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e3N0eWxlcy5zdWJtaXR9dHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU3VibWl0XCIgZGlzYWJsZWQ9eyFpc1VzZXJuYW1lQ29uZmlybWVkfSAvPlxuICAgICAgICA8L2Zvcm0+PC9tYWluPlxuICAgICAgICA8L2Rpdj48L2Rpdj5cblxuXG4gICAgICBcbiAgICAgIHsvKiA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3RlcmF9PlxuICAgICAgICBcbiAgICAgIDwvZm9vdGVyPiAqL31cbiAgICA8L2Rpdj5cbiAgKX1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})