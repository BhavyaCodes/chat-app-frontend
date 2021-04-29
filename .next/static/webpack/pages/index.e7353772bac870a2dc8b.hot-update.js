webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var _Users_tanyaprabhakar_Chat_mychat_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_tanyaprabhakar_Chat_mychat_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/build/index.js\");\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_UsernameField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/UsernameField */ \"./components/UsernameField.jsx\");\n/* harmony import */ var emoji_mart_css_emoji_mart_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! emoji-mart/css/emoji-mart.css */ \"./node_modules/emoji-mart/css/emoji-mart.css\");\n/* harmony import */ var emoji_mart_css_emoji_mart_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(emoji_mart_css_emoji_mart_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var emoji_mart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! emoji-mart */ \"./node_modules/emoji-mart/dist-es/index.js\");\n\n\n\n\nvar _jsxFileName = \"/Users/tanyaprabhakar/Chat/mychat/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n // import { Editor } from \"@tinymce/tinymce-react\";\n\nfunction Home() {\n  _s();\n\n  var _jsxDEV2,\n      _this = this;\n\n  // save the socket\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(null),\n      socket = _useState[0],\n      setSocket = _useState[1]; // Whether the username is set.\n\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(false),\n      isUsernameConfirmed = _useState2[0],\n      setUsernameConfirmed = _useState2[1]; // State for the username.\n\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(\"\"),\n      username = _useState3[0],\n      setUsername = _useState3[1]; // State for the form field.\n\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(\"\"),\n      message = _useState4[0],\n      setMessage = _useState4[1]; // State for message history.\n\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])([\n    /*\n    {\n      username: \"Santa Claus\",\n      message: \"Ho ho ho!\"\n    }\n    */\n  ]),\n      history = _useState5[0],\n      setHistory = _useState5[1];\n\n  var connectSocket = function connectSocket() {\n    // prime the server first. yes, this is an extra call and is inefficient.\n    // but we're using NextJS for convenience, so this is a necessary evil.\n    fetch(\"/api/chat\"); // after making sure that socket server is primed, connect to it.\n\n    if (!socket) {\n      var newSocket = Object(socket_io_client__WEBPACK_IMPORTED_MODULE_6__[\"io\"])(); // Confirms connection\n\n      newSocket.on(\"connect\", function () {\n        console.log(\"Chat app connected\");\n      }); // handles message\n\n      newSocket.on(\"message\", function (msg) {\n        setHistory(function (history) {\n          return [].concat(Object(_Users_tanyaprabhakar_Chat_mychat_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(history), [msg]);\n        });\n      }); // Logs when server disconnects\n\n      newSocket.on(\"disconnect\", function () {\n        console.warn(\"WARNING: chat app disconnected\");\n      });\n      setSocket(function () {\n        return newSocket;\n      });\n    }\n  }; // The websocket code\n\n\n  Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useEffect\"])(function () {\n    connectSocket();\n  }, []); // this method submits the form and sends the message to the server.\n\n  var handleSubmit = function handleSubmit(evt) {\n    evt.preventDefault();\n\n    if (!socket) {\n      alert(\"Chatroom not connected yet. Try again in a little bit.\");\n      return;\n    } // prevent empty submissions\n\n\n    if (!message || !isUsernameConfirmed) {\n      return;\n    } // submit and blank-out the field.\n\n\n    socket.emit(\"message-submitted\", {\n      message: message,\n      username: username\n    });\n    setMessage(\"\");\n  }; // handleChange(content, editor); {\n  //   this.setState({content});\n  // }\n  //  const websocket=require(\"ws\") \n  //   const rooms = {};\n  //   ws.on(\"connection\", socket => {\n  //     const uuid = uuid // create here a uuid for this connection\n  //     const leave = room => {\n  //       // not present: do nothing\n  //       if(! rooms[room][uuid]) return;\n  //       // if the one exiting is the last one, destroy the room\n  //       if(Object.keys(rooms[room]).length === 1) delete rooms[room];\n  //       // otherwise simply leave the room\n  //       else delete rooms[room][uuid];\n  //     };\n  //     socket.on(\"message\", data => {\n  //       const { message, meta, room } = data;\n  //       if(meta === \"join\") {\n  //         if(! rooms[room]) rooms[room] = {}; // create the room\n  //         if(! rooms[room][uuid]) rooms[room][uuid] = socket; // join the room\n  //       }\n  //       else if(meta === \"leave\") {\n  //         leave(room);\n  //       }\n  //       else if(! meta) {\n  //         // send the message to all in the room\n  //         Object.entries(rooms[room]).forEach(([, sock]) => sock.send({ message }));\n  //       }\n  //     });\n  //     socket.on(\"close\", () => {\n  //       // for each room, remove the closed socket\n  //       Object.keys(rooms).forEach(room => leave(room));\n  //     });\n  //   });\n\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.chat_window,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"title\", {\n        children: \"chit-chat\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 140,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 138,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"embed\", {\n      src: \"/Users/tanyaprabhakar/Downloads/Mahmut Orhan - Game Of Thrones (Original Mix).mp3\",\n      loop: \"true\",\n      autostart: \"true\",\n      width: \"2\",\n      height: \"0\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 146,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h1\", (_jsxDEV2 = {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.top_menu\n    }, Object(_Users_tanyaprabhakar_Chat_mychat_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_jsxDEV2, \"className\", _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.text), Object(_Users_tanyaprabhakar_Chat_mychat_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_jsxDEV2, \"children\", \" Game of thrones \"), _jsxDEV2), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 149,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.alignment,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_UsernameField__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.second_bar,\n        completed: isUsernameConfirmed,\n        value: username,\n        onChange: function onChange(value) {\n          return setUsername(value);\n        },\n        onSubmit: function onSubmit() {\n          return setUsernameConfirmed(true);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 152,\n        columnNumber: 7\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 151,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.message_container,\n      children: history.map(function (_ref, i) {\n        var username = _ref.username,\n            message = _ref.message;\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.chatbox,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n            children: \" \"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 164,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"b\", {\n              children: username\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 165,\n              columnNumber: 16\n            }, _this), \": \", message]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 165,\n            columnNumber: 13\n          }, _this)]\n        }, i, true, {\n          fileName: _jsxFileName,\n          lineNumber: 163,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 161,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.alignment,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.bottom_wrapper.message_input_wrapper,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"main\", {\n          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.bottom_wrapper,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"form\", {\n            onSubmit: handleSubmit,\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"label\", {\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"input\", {\n                className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.message_input,\n                id: \"textarea\",\n                type: \"text\",\n                name: \"message\",\n                value: message,\n                onChange: function onChange(e) {\n                  return setMessage(e.target.value);\n                },\n                placeholder: username ? \"Enter your message...\" : \"Set username...\",\n                disabled: !isUsernameConfirmed\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 192,\n                columnNumber: 13\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 190,\n              columnNumber: 11\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"input\", {\n              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.submit,\n              type: \"submit\",\n              value: \"Submit\",\n              disabled: !isUsernameConfirmed\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 204,\n              columnNumber: 11\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 177,\n            columnNumber: 11\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 172,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 171,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 170,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 137,\n    columnNumber: 4\n  }, this);\n}\n\n_s(Home, \"WH6vxuhB+LKBaPhqEAqsRyTxr4c=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwidXNlU3RhdGUiLCJzb2NrZXQiLCJzZXRTb2NrZXQiLCJpc1VzZXJuYW1lQ29uZmlybWVkIiwic2V0VXNlcm5hbWVDb25maXJtZWQiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJoaXN0b3J5Iiwic2V0SGlzdG9yeSIsImNvbm5lY3RTb2NrZXQiLCJmZXRjaCIsIm5ld1NvY2tldCIsImlvIiwib24iLCJjb25zb2xlIiwibG9nIiwibXNnIiwid2FybiIsInVzZUVmZmVjdCIsImhhbmRsZVN1Ym1pdCIsImV2dCIsInByZXZlbnREZWZhdWx0IiwiYWxlcnQiLCJlbWl0Iiwic3R5bGVzIiwiY2hhdF93aW5kb3ciLCJ0b3BfbWVudSIsInRleHQiLCJhbGlnbm1lbnQiLCJzZWNvbmRfYmFyIiwidmFsdWUiLCJtZXNzYWdlX2NvbnRhaW5lciIsIm1hcCIsImkiLCJjaGF0Ym94IiwiYm90dG9tX3dyYXBwZXIiLCJtZXNzYWdlX2lucHV0X3dyYXBwZXIiLCJtZXNzYWdlX2lucHV0IiwiZSIsInRhcmdldCIsInN1Ym1pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUdBOztBQU9lLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFBQTtBQUFBOztBQUM3QjtBQUQ2QixrQkFFREMsc0RBQVEsQ0FBQyxJQUFELENBRlA7QUFBQSxNQUV0QkMsTUFGc0I7QUFBQSxNQUVkQyxTQUZjLGlCQUk3Qjs7O0FBSjZCLG1CQUt1QkYsc0RBQVEsQ0FBQyxLQUFELENBTC9CO0FBQUEsTUFLdEJHLG1CQUxzQjtBQUFBLE1BS0RDLG9CQUxDLGtCQU83Qjs7O0FBUDZCLG1CQVFHSixzREFBUSxDQUFDLEVBQUQsQ0FSWDtBQUFBLE1BUXRCSyxRQVJzQjtBQUFBLE1BUVpD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QUFBLHFDQUVFO0FBQU8seUJBQVMsRUFBRUssOERBQU0sQ0FBQ2EsYUFBekI7QUFDRSxrQkFBRSxFQUFDLFVBREw7QUFFRSxvQkFBSSxFQUFDLE1BRlA7QUFHRSxvQkFBSSxFQUFDLFNBSFA7QUFJRSxxQkFBSyxFQUFFaEMsT0FKVDtBQUtFLHdCQUFRLEVBQUUsa0JBQUNpQyxDQUFEO0FBQUEseUJBQU9oQyxVQUFVLENBQUNnQyxDQUFDLENBQUNDLE1BQUYsQ0FBU1QsS0FBVixDQUFqQjtBQUFBLGlCQUxaO0FBTUUsMkJBQVcsRUFDVDNCLFFBQVEsR0FBRyx1QkFBSCxHQUE2QixpQkFQekM7QUFTRSx3QkFBUSxFQUFFLENBQUNGO0FBVGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBYkEsZUEyQkE7QUFBTyx1QkFBUyxFQUFFdUIsOERBQU0sQ0FBQ2dCLE1BQXpCO0FBQWdDLGtCQUFJLEVBQUMsUUFBckM7QUFBOEMsbUJBQUssRUFBQyxRQUFwRDtBQUE2RCxzQkFBUSxFQUFFLENBQUN2QztBQUF4RTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQTNCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFqQ0w7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRkQ7QUErRUU7O0dBdE1vQkosSTs7S0FBQUEsSSIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgaW8gfSBmcm9tIFwic29ja2V0LmlvLWNsaWVudFwiO1xuaW1wb3J0IFVzZXJuYW1lRmllbGQgZnJvbSBcIi4uL2NvbXBvbmVudHMvVXNlcm5hbWVGaWVsZFwiO1xuaW1wb3J0ICdlbW9qaS1tYXJ0L2Nzcy9lbW9qaS1tYXJ0LmNzcyc7XG5pbXBvcnQgeyBQaWNrZXIgfSBmcm9tICdlbW9qaS1tYXJ0JztcblxuLy8gaW1wb3J0IHsgRWRpdG9yIH0gZnJvbSBcIkB0aW55bWNlL3RpbnltY2UtcmVhY3RcIjtcblxuXG5cblxuXG4gIFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgLy8gc2F2ZSB0aGUgc29ja2V0XG4gIGNvbnN0IFtzb2NrZXQsIHNldFNvY2tldF0gPSB1c2VTdGF0ZShudWxsKTtcblxuICAvLyBXaGV0aGVyIHRoZSB1c2VybmFtZSBpcyBzZXQuXG4gIGNvbnN0IFtpc1VzZXJuYW1lQ29uZmlybWVkLCBzZXRVc2VybmFtZUNvbmZpcm1lZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgLy8gU3RhdGUgZm9yIHRoZSB1c2VybmFtZS5cbiAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICAvLyBTdGF0ZSBmb3IgdGhlIGZvcm0gZmllbGQuXG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIC8vIFN0YXRlIGZvciBtZXNzYWdlIGhpc3RvcnkuXG4gIGNvbnN0IFtoaXN0b3J5LCBzZXRIaXN0b3J5XSA9IHVzZVN0YXRlKFtcbiAgICAvKlxuICAgIHtcbiAgICAgIHVzZXJuYW1lOiBcIlNhbnRhIENsYXVzXCIsXG4gICAgICBtZXNzYWdlOiBcIkhvIGhvIGhvIVwiXG4gICAgfVxuICAgICovXG4gIF0pO1xuXG4gIGNvbnN0IGNvbm5lY3RTb2NrZXQgPSAoKSA9PiB7XG4gICAgLy8gcHJpbWUgdGhlIHNlcnZlciBmaXJzdC4geWVzLCB0aGlzIGlzIGFuIGV4dHJhIGNhbGwgYW5kIGlzIGluZWZmaWNpZW50LlxuICAgIC8vIGJ1dCB3ZSdyZSB1c2luZyBOZXh0SlMgZm9yIGNvbnZlbmllbmNlLCBzbyB0aGlzIGlzIGEgbmVjZXNzYXJ5IGV2aWwuXG4gICAgZmV0Y2goXCIvYXBpL2NoYXRcIik7XG4gICAgLy8gYWZ0ZXIgbWFraW5nIHN1cmUgdGhhdCBzb2NrZXQgc2VydmVyIGlzIHByaW1lZCwgY29ubmVjdCB0byBpdC5cblxuICAgIGlmICghc29ja2V0KSB7XG4gICAgICBjb25zdCBuZXdTb2NrZXQgPSBpbygpO1xuXG4gICAgICAvLyBDb25maXJtcyBjb25uZWN0aW9uXG4gICAgICBuZXdTb2NrZXQub24oXCJjb25uZWN0XCIsICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJDaGF0IGFwcCBjb25uZWN0ZWRcIik7XG4gICAgICB9KTtcblxuICAgICAgLy8gaGFuZGxlcyBtZXNzYWdlXG4gICAgICBuZXdTb2NrZXQub24oXCJtZXNzYWdlXCIsIChtc2cpID0+IHtcbiAgICAgICAgc2V0SGlzdG9yeSgoaGlzdG9yeSkgPT4gWy4uLmhpc3RvcnksIG1zZ10pO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIExvZ3Mgd2hlbiBzZXJ2ZXIgZGlzY29ubmVjdHNcbiAgICAgIG5ld1NvY2tldC5vbihcImRpc2Nvbm5lY3RcIiwgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLndhcm4oXCJXQVJOSU5HOiBjaGF0IGFwcCBkaXNjb25uZWN0ZWRcIik7XG4gICAgICB9KTtcblxuICAgICAgc2V0U29ja2V0KCgpID0+IG5ld1NvY2tldCk7XG4gICAgfVxuICB9O1xuXG4gIC8vIFRoZSB3ZWJzb2NrZXQgY29kZVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbm5lY3RTb2NrZXQoKTtcbiAgfSwgW10pO1xuXG4gIC8vIHRoaXMgbWV0aG9kIHN1Ym1pdHMgdGhlIGZvcm0gYW5kIHNlbmRzIHRoZSBtZXNzYWdlIHRvIHRoZSBzZXJ2ZXIuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChldnQpID0+IHtcbiAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoIXNvY2tldCkge1xuICAgICAgYWxlcnQoXCJDaGF0cm9vbSBub3QgY29ubmVjdGVkIHlldC4gVHJ5IGFnYWluIGluIGEgbGl0dGxlIGJpdC5cIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gcHJldmVudCBlbXB0eSBzdWJtaXNzaW9uc1xuICAgIGlmICghbWVzc2FnZSB8fCAhaXNVc2VybmFtZUNvbmZpcm1lZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIHN1Ym1pdCBhbmQgYmxhbmstb3V0IHRoZSBmaWVsZC5cbiAgICBzb2NrZXQuZW1pdChcIm1lc3NhZ2Utc3VibWl0dGVkXCIsIHsgbWVzc2FnZSwgdXNlcm5hbWUgfSk7XG4gICAgc2V0TWVzc2FnZShcIlwiKTtcbiAgfTtcblxuXG4gIC8vIGhhbmRsZUNoYW5nZShjb250ZW50LCBlZGl0b3IpOyB7XG4gIC8vICAgdGhpcy5zZXRTdGF0ZSh7Y29udGVudH0pO1xuICAvLyB9XG4vLyAgY29uc3Qgd2Vic29ja2V0PXJlcXVpcmUoXCJ3c1wiKSBcbi8vICAgY29uc3Qgcm9vbXMgPSB7fTtcblxuLy8gICB3cy5vbihcImNvbm5lY3Rpb25cIiwgc29ja2V0ID0+IHtcbi8vICAgICBjb25zdCB1dWlkID0gdXVpZCAvLyBjcmVhdGUgaGVyZSBhIHV1aWQgZm9yIHRoaXMgY29ubmVjdGlvblxuICBcbi8vICAgICBjb25zdCBsZWF2ZSA9IHJvb20gPT4ge1xuLy8gICAgICAgLy8gbm90IHByZXNlbnQ6IGRvIG5vdGhpbmdcbi8vICAgICAgIGlmKCEgcm9vbXNbcm9vbV1bdXVpZF0pIHJldHVybjtcbiAgXG4vLyAgICAgICAvLyBpZiB0aGUgb25lIGV4aXRpbmcgaXMgdGhlIGxhc3Qgb25lLCBkZXN0cm95IHRoZSByb29tXG4vLyAgICAgICBpZihPYmplY3Qua2V5cyhyb29tc1tyb29tXSkubGVuZ3RoID09PSAxKSBkZWxldGUgcm9vbXNbcm9vbV07XG4vLyAgICAgICAvLyBvdGhlcndpc2Ugc2ltcGx5IGxlYXZlIHRoZSByb29tXG4vLyAgICAgICBlbHNlIGRlbGV0ZSByb29tc1tyb29tXVt1dWlkXTtcbi8vICAgICB9O1xuICBcbi8vICAgICBzb2NrZXQub24oXCJtZXNzYWdlXCIsIGRhdGEgPT4ge1xuLy8gICAgICAgY29uc3QgeyBtZXNzYWdlLCBtZXRhLCByb29tIH0gPSBkYXRhO1xuICBcbi8vICAgICAgIGlmKG1ldGEgPT09IFwiam9pblwiKSB7XG4vLyAgICAgICAgIGlmKCEgcm9vbXNbcm9vbV0pIHJvb21zW3Jvb21dID0ge307IC8vIGNyZWF0ZSB0aGUgcm9vbVxuLy8gICAgICAgICBpZighIHJvb21zW3Jvb21dW3V1aWRdKSByb29tc1tyb29tXVt1dWlkXSA9IHNvY2tldDsgLy8gam9pbiB0aGUgcm9vbVxuLy8gICAgICAgfVxuLy8gICAgICAgZWxzZSBpZihtZXRhID09PSBcImxlYXZlXCIpIHtcbi8vICAgICAgICAgbGVhdmUocm9vbSk7XG4vLyAgICAgICB9XG4vLyAgICAgICBlbHNlIGlmKCEgbWV0YSkge1xuLy8gICAgICAgICAvLyBzZW5kIHRoZSBtZXNzYWdlIHRvIGFsbCBpbiB0aGUgcm9vbVxuLy8gICAgICAgICBPYmplY3QuZW50cmllcyhyb29tc1tyb29tXSkuZm9yRWFjaCgoWywgc29ja10pID0+IHNvY2suc2VuZCh7IG1lc3NhZ2UgfSkpO1xuLy8gICAgICAgfVxuLy8gICAgIH0pO1xuICBcbi8vICAgICBzb2NrZXQub24oXCJjbG9zZVwiLCAoKSA9PiB7XG4vLyAgICAgICAvLyBmb3IgZWFjaCByb29tLCByZW1vdmUgdGhlIGNsb3NlZCBzb2NrZXRcbi8vICAgICAgIE9iamVjdC5rZXlzKHJvb21zKS5mb3JFYWNoKHJvb20gPT4gbGVhdmUocm9vbSkpO1xuLy8gICAgIH0pO1xuLy8gICB9KTtcblxuXG5cblxuICByZXR1cm4gKFxuICAgIFxuICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaGF0X3dpbmRvd30+XG4gICAgICA8SGVhZD5cbiAgICAgIFxuICAgICAgICA8dGl0bGUgPmNoaXQtY2hhdDwvdGl0bGU+XG4gICAgXG5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgXG4gICAgICA8ZW1iZWQgc3JjPVwiL1VzZXJzL3RhbnlhcHJhYmhha2FyL0Rvd25sb2Fkcy9NYWhtdXQgT3JoYW4gLSBHYW1lIE9mIFRocm9uZXMgKE9yaWdpbmFsIE1peCkubXAzXCIgbG9vcD1cInRydWVcIiBhdXRvc3RhcnQ9XCJ0cnVlXCIgd2lkdGg9XCIyXCIgaGVpZ2h0PVwiMFwiPjwvZW1iZWQ+XG4gICAgICBcbiAgICAgIFxuICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRvcF9tZW51fWNsYXNzTmFtZT17c3R5bGVzLnRleHR9PiBHYW1lIG9mIHRocm9uZXMgPC9oMT5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hbGlnbm1lbnR9ID5cbiAgICAgIDxVc2VybmFtZUZpZWxkIGNsYXNzTmFtZT17c3R5bGVzLnNlY29uZF9iYXJ9XG4gICAgICAgIGNvbXBsZXRlZD17aXNVc2VybmFtZUNvbmZpcm1lZH1cbiAgICAgICAgdmFsdWU9e3VzZXJuYW1lfVxuICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiBzZXRVc2VybmFtZSh2YWx1ZSl9XG4gICAgICAgIG9uU3VibWl0PXsoKSA9PiBzZXRVc2VybmFtZUNvbmZpcm1lZCh0cnVlKX1cbiAgICAgIC8+PC9kaXY+XG57LyogICA8dWwgY2xhc3M9XCJtZXNzYWdlc1wiPjwvdWw+XG4gICAgPGRpdiBjbGFzcz1cImJvdHRvbV93cmFwcGVyIGNsZWFyZml4XCI+Ki99XG5cbiAgICAgIDxkaXYgIGNsYXNzTmFtZT17c3R5bGVzLm1lc3NhZ2VfY29udGFpbmVyfT5cbiAgICAgICAge2hpc3RvcnkubWFwKCh7IHVzZXJuYW1lLCBtZXNzYWdlIH0sIGkpICA9PiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaGF0Ym94fSBrZXk9e2l9PiBcbiAgICAgICAgICAgIDxwPiA8L3A+XG4gICAgICAgICAgICA8cD48Yj57dXNlcm5hbWV9PC9iPjoge21lc3NhZ2V9XG4gICAgICAgICAgICA8L3A+PC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFsaWdubWVudH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm90dG9tX3dyYXBwZXIgLm1lc3NhZ2VfaW5wdXRfd3JhcHBlcn0+XG4gICAgICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMuYm90dG9tX3dyYXBwZXJ9PlxuICAgICAgICAgIFxuICAgICAgICAgIFxuICAgICAgICAgIFxuICAgICAgICAgIFxuICAgICAgICAgIDxmb3JtICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSA+XG4gICAgICAgICAgey8qIDxFZGl0b3JcbiAgICAgIHZhbHVlPXt0aGlzLnVzZVN0YXRlLmNvbnRlbnR9XG4gICAgICBpbml0PXt7XG4gICAgICBoZWlnaHQ6IDUwMCxcbiAgICAgIG1lbnViYXI6IGZhbHNlXG4gICAgfX1cbiAgICAgIG9uRWRpdG9yQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgIC8+XG4gICAgPGJyIC8+XG4gICAgICAgICAgICovfVxuICAgICAgXG4gICAgXG4gICAgICAgICAgPGxhYmVsID5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17c3R5bGVzLm1lc3NhZ2VfaW5wdXR9XG4gICAgICAgICAgICAgIGlkPVwidGV4dGFyZWFcIlxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJtZXNzYWdlXCJcbiAgICAgICAgICAgICAgdmFsdWU9e21lc3NhZ2V9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TWVzc2FnZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcbiAgICAgICAgICAgICAgICB1c2VybmFtZSA/IFwiRW50ZXIgeW91ciBtZXNzYWdlLi4uXCIgOiBcIlNldCB1c2VybmFtZS4uLlwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFpc1VzZXJuYW1lQ29uZmlybWVkfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e3N0eWxlcy5zdWJtaXR9dHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU3VibWl0XCIgZGlzYWJsZWQ9eyFpc1VzZXJuYW1lQ29uZmlybWVkfSAvPlxuICAgICAgICA8L2Zvcm0+PC9tYWluPlxuICAgICAgICA8L2Rpdj48L2Rpdj5cblxuXG4gICAgICBcbiAgICAgIHsvKiA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3RlcmF9PlxuICAgICAgICBcbiAgICAgIDwvZm9vdGVyPiAqL31cbiAgICA8L2Rpdj5cbiAgKX1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})