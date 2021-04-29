module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/chat.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/chat.js":
/*!***************************!*\
  !*** ./pages/api/chat.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socket.io */ \"socket.io\");\n/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(socket_io__WEBPACK_IMPORTED_MODULE_0__);\n// This endpoint doesn't really do anything. It just starts websockets.\n// NextJS does not officially support websockets. NextJS is intended for deployment\n// to serverless environments, which are mostly incompatible with websockets.\n// This application will have to be deployed to Heroku or a similar non-serverless\n// environment.\n// This solution is by rogeriojlle on StackOverflow:\n// https://stackoverflow.com/questions/57512366/how-to-use-socket-io-with-next-js-api-routes/62547135#62547135\n // import styles from '../styles/Home.module.css'\n\nconst ioHandler = (_req, res) => {\n  // if the socket server hasn't started yet, start it up.\n  if (!res.socket.server.io) {\n    console.log(\"First use, starting socket.io\"); // create the websocket server\n\n    const io = new socket_io__WEBPACK_IMPORTED_MODULE_0__[\"Server\"](res.socket.server);\n    io.on(\"connection\", socket => {\n      // when a message is submitted, broadcast it.\n      socket.on(\"message-submitted\", msg => {\n        // echo the message back to the user\n        socket.emit(\"message\", msg); // broadcast the message to everyone else\n\n        socket.broadcast.emit(\"message\", msg);\n      });\n    }); // make the socket available externally.\n\n    res.socket.server.io = io;\n  } else {\n    // don't do anything if the server was already started.\n    console.log(\"Server already started\");\n  } // send back an empty 200\n\n\n  res.end();\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ioHandler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvY2hhdC5qcz85NjY5Il0sIm5hbWVzIjpbImlvSGFuZGxlciIsIl9yZXEiLCJyZXMiLCJzb2NrZXQiLCJzZXJ2ZXIiLCJpbyIsImNvbnNvbGUiLCJsb2ciLCJTZXJ2ZXIiLCJvbiIsIm1zZyIsImVtaXQiLCJicm9hZGNhc3QiLCJlbmQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7O0FBRUEsTUFBTUEsU0FBUyxHQUFHLENBQUNDLElBQUQsRUFBT0MsR0FBUCxLQUFlO0FBQy9CO0FBQ0EsTUFBSSxDQUFDQSxHQUFHLENBQUNDLE1BQUosQ0FBV0MsTUFBWCxDQUFrQkMsRUFBdkIsRUFBMkI7QUFDekJDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLCtCQUFaLEVBRHlCLENBR3pCOztBQUNBLFVBQU1GLEVBQUUsR0FBRyxJQUFJRyxnREFBSixDQUFXTixHQUFHLENBQUNDLE1BQUosQ0FBV0MsTUFBdEIsQ0FBWDtBQUVBQyxNQUFFLENBQUNJLEVBQUgsQ0FBTSxZQUFOLEVBQXFCTixNQUFELElBQVk7QUFDOUI7QUFDQUEsWUFBTSxDQUFDTSxFQUFQLENBQVUsbUJBQVYsRUFBZ0NDLEdBQUQsSUFBUztBQUN0QztBQUNBUCxjQUFNLENBQUNRLElBQVAsQ0FBWSxTQUFaLEVBQXVCRCxHQUF2QixFQUZzQyxDQUd0Qzs7QUFDQVAsY0FBTSxDQUFDUyxTQUFQLENBQWlCRCxJQUFqQixDQUFzQixTQUF0QixFQUFpQ0QsR0FBakM7QUFDQSxPQUxGO0FBTUQsS0FSRCxFQU55QixDQWdCekI7O0FBQ0FSLE9BQUcsQ0FBQ0MsTUFBSixDQUFXQyxNQUFYLENBQWtCQyxFQUFsQixHQUF1QkEsRUFBdkI7QUFDRCxHQWxCRCxNQWtCTztBQUNMO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLHdCQUFaO0FBQ0QsR0F2QjhCLENBeUIvQjs7O0FBQ0FMLEtBQUcsQ0FBQ1csR0FBSjtBQUNELENBM0JEOztBQTZCZWIsd0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9hcGkvY2hhdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgZW5kcG9pbnQgZG9lc24ndCByZWFsbHkgZG8gYW55dGhpbmcuIEl0IGp1c3Qgc3RhcnRzIHdlYnNvY2tldHMuXG4vLyBOZXh0SlMgZG9lcyBub3Qgb2ZmaWNpYWxseSBzdXBwb3J0IHdlYnNvY2tldHMuIE5leHRKUyBpcyBpbnRlbmRlZCBmb3IgZGVwbG95bWVudFxuLy8gdG8gc2VydmVybGVzcyBlbnZpcm9ubWVudHMsIHdoaWNoIGFyZSBtb3N0bHkgaW5jb21wYXRpYmxlIHdpdGggd2Vic29ja2V0cy5cbi8vIFRoaXMgYXBwbGljYXRpb24gd2lsbCBoYXZlIHRvIGJlIGRlcGxveWVkIHRvIEhlcm9rdSBvciBhIHNpbWlsYXIgbm9uLXNlcnZlcmxlc3Ncbi8vIGVudmlyb25tZW50LlxuLy8gVGhpcyBzb2x1dGlvbiBpcyBieSByb2dlcmlvamxsZSBvbiBTdGFja092ZXJmbG93OlxuLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNTc1MTIzNjYvaG93LXRvLXVzZS1zb2NrZXQtaW8td2l0aC1uZXh0LWpzLWFwaS1yb3V0ZXMvNjI1NDcxMzUjNjI1NDcxMzVcbmltcG9ydCB7U2VydmVyfSBmcm9tIFwic29ja2V0LmlvXCJcbi8vIGltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcblxuY29uc3QgaW9IYW5kbGVyID0gKF9yZXEsIHJlcykgPT4ge1xuICAvLyBpZiB0aGUgc29ja2V0IHNlcnZlciBoYXNuJ3Qgc3RhcnRlZCB5ZXQsIHN0YXJ0IGl0IHVwLlxuICBpZiAoIXJlcy5zb2NrZXQuc2VydmVyLmlvKSB7XG4gICAgY29uc29sZS5sb2coXCJGaXJzdCB1c2UsIHN0YXJ0aW5nIHNvY2tldC5pb1wiKTtcblxuICAgIC8vIGNyZWF0ZSB0aGUgd2Vic29ja2V0IHNlcnZlclxuICAgIGNvbnN0IGlvID0gbmV3IFNlcnZlcihyZXMuc29ja2V0LnNlcnZlcik7XG5cbiAgICBpby5vbihcImNvbm5lY3Rpb25cIiwgKHNvY2tldCkgPT4ge1xuICAgICAgLy8gd2hlbiBhIG1lc3NhZ2UgaXMgc3VibWl0dGVkLCBicm9hZGNhc3QgaXQuXG4gICAgICBzb2NrZXQub24oXCJtZXNzYWdlLXN1Ym1pdHRlZFwiLCAobXNnKSA9PiB7XG4gICAgICAgIC8vIGVjaG8gdGhlIG1lc3NhZ2UgYmFjayB0byB0aGUgdXNlclxuICAgICAgICBzb2NrZXQuZW1pdChcIm1lc3NhZ2VcIiwgbXNnKTtcbiAgICAgICAgLy8gYnJvYWRjYXN0IHRoZSBtZXNzYWdlIHRvIGV2ZXJ5b25lIGVsc2VcbiAgICAgICAgc29ja2V0LmJyb2FkY2FzdC5lbWl0KFwibWVzc2FnZVwiLCBtc2cpO1xuICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gbWFrZSB0aGUgc29ja2V0IGF2YWlsYWJsZSBleHRlcm5hbGx5LlxuICAgIHJlcy5zb2NrZXQuc2VydmVyLmlvID0gaW87XG4gIH0gZWxzZSB7XG4gICAgLy8gZG9uJ3QgZG8gYW55dGhpbmcgaWYgdGhlIHNlcnZlciB3YXMgYWxyZWFkeSBzdGFydGVkLlxuICAgIGNvbnNvbGUubG9nKFwiU2VydmVyIGFscmVhZHkgc3RhcnRlZFwiKTtcbiAgfVxuXG4gIC8vIHNlbmQgYmFjayBhbiBlbXB0eSAyMDBcbiAgcmVzLmVuZCgpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaW9IYW5kbGVyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/chat.js\n");

/***/ }),

/***/ "socket.io":
/*!****************************!*\
  !*** external "socket.io" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"socket.io\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzb2NrZXQuaW9cIj9jYjM0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InNvY2tldC5pby5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNvY2tldC5pb1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///socket.io\n");

/***/ })

/******/ });