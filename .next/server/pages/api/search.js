"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/search";
exports.ids = ["pages/api/search"];
exports.modules = {

/***/ "@pinecone-database/pinecone":
/*!**********************************************!*\
  !*** external "@pinecone-database/pinecone" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("@pinecone-database/pinecone");

/***/ }),

/***/ "langchain/embeddings":
/*!***************************************!*\
  !*** external "langchain/embeddings" ***!
  \***************************************/
/***/ ((module) => {

module.exports = import("langchain/embeddings");;

/***/ }),

/***/ "langchain/vectorstores":
/*!*****************************************!*\
  !*** external "langchain/vectorstores" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = import("langchain/vectorstores");;

/***/ }),

/***/ "(api)/./pages/api/search.ts":
/*!*****************************!*\
  !*** ./pages/api/search.ts ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var langchain_vectorstores__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! langchain/vectorstores */ \"langchain/vectorstores\");\n/* harmony import */ var langchain_embeddings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! langchain/embeddings */ \"langchain/embeddings\");\n/* harmony import */ var _pinecone_database_pinecone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pinecone-database/pinecone */ \"@pinecone-database/pinecone\");\n/* harmony import */ var _pinecone_database_pinecone__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_pinecone_database_pinecone__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([langchain_vectorstores__WEBPACK_IMPORTED_MODULE_0__, langchain_embeddings__WEBPACK_IMPORTED_MODULE_1__]);\n([langchain_vectorstores__WEBPACK_IMPORTED_MODULE_0__, langchain_embeddings__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\nconst handler = async (req, res)=>{\n    // Query \n    const query = req.body.query;\n    const apiKey = req.body.apiKey;\n    process.env.OPENAI_API_KEY = apiKey;\n    const pineKey = process.env.PINECONE_API_KEY ?? \"\";\n    // console.log(pineKey)\n    // Vector DB \n    const pinecone = new _pinecone_database_pinecone__WEBPACK_IMPORTED_MODULE_2__.PineconeClient();\n    await pinecone.init({\n        environment: \"us-west4-gcp\",\n        apiKey: process.env.PINECONE_API_KEY ?? \"\"\n    });\n    // console.log(pinecone)\n    const index = pinecone.Index(\"impromptu\");\n    const vectorStore = await langchain_vectorstores__WEBPACK_IMPORTED_MODULE_0__.PineconeStore.fromExistingIndex(new langchain_embeddings__WEBPACK_IMPORTED_MODULE_1__.OpenAIEmbeddings(), {\n        pineconeIndex: index\n    });\n    // Return chunks to display as references \n    const results = await vectorStore.similaritySearch(query, 5);\n    res.status(200).send(results);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2VhcmNoLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXVEO0FBQ0M7QUFDSztBQVE3RCxNQUFNRyxVQUFVLE9BQU9DLEtBQXFCQyxNQUErQjtJQUV2RSxTQUFTO0lBQ1QsTUFBTUMsUUFBUUYsSUFBSUcsSUFBSSxDQUFDRCxLQUFLO0lBQzVCLE1BQU1FLFNBQVNKLElBQUlHLElBQUksQ0FBQ0MsTUFBTTtJQUM5QkMsUUFBUUMsR0FBRyxDQUFDQyxjQUFjLEdBQUdIO0lBQzdCLE1BQU1JLFVBQVVILFFBQVFDLEdBQUcsQ0FBQ0csZ0JBQWdCLElBQUk7SUFDaEQsdUJBQXVCO0lBRXZCLGFBQWE7SUFDWCxNQUFNQyxXQUFXLElBQUlaLHVFQUFjQTtJQUNuQyxNQUFNWSxTQUFTQyxJQUFJLENBQUM7UUFDbEJDLGFBQWE7UUFDYlIsUUFBUUMsUUFBUUMsR0FBRyxDQUFDRyxnQkFBZ0IsSUFBSTtJQUMxQztJQUNBLHdCQUF3QjtJQUN4QixNQUFNSSxRQUFRSCxTQUFTSSxLQUFLLENBQUM7SUFDN0IsTUFBTUMsY0FBYyxNQUFNbkIsbUZBQStCLENBQ3ZELElBQUlDLGtFQUFnQkEsSUFBSTtRQUFDb0IsZUFBZUo7SUFBSztJQUUvQywwQ0FBMEM7SUFDMUMsTUFBTUssVUFBVSxNQUFNSCxZQUFZSSxnQkFBZ0IsQ0FBQ2pCLE9BQU87SUFDMURELElBQUltQixNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDSDtBQUN2QjtBQUVKLGlFQUFlbkIsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FwcC8uL3BhZ2VzL2FwaS9zZWFyY2gudHM/N2EwOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaW5lY29uZVN0b3JlIH0gZnJvbSBcImxhbmdjaGFpbi92ZWN0b3JzdG9yZXNcIjtcbmltcG9ydCB7IE9wZW5BSUVtYmVkZGluZ3MgfSBmcm9tIFwibGFuZ2NoYWluL2VtYmVkZGluZ3NcIjtcbmltcG9ydCB7IFBpbmVjb25lQ2xpZW50IH0gZnJvbSBcIkBwaW5lY29uZS1kYXRhYmFzZS9waW5lY29uZVwiO1xuaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5cbi8vZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcbi8vICBydW50aW1lOiBcImVkZ2VcIlxuLy8gfTtcblxudHlwZSBEYXRhID0ge307XG5jb25zdCBoYW5kbGVyID0gYXN5bmMgKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlPERhdGE+KSA9PiB7XG5cbiAgICAvLyBRdWVyeSBcbiAgICBjb25zdCBxdWVyeSA9IHJlcS5ib2R5LnF1ZXJ5O1xuICAgIGNvbnN0IGFwaUtleSA9IHJlcS5ib2R5LmFwaUtleTtcbiAgICBwcm9jZXNzLmVudi5PUEVOQUlfQVBJX0tFWSA9IGFwaUtleTtcbiAgICBjb25zdCBwaW5lS2V5ID0gcHJvY2Vzcy5lbnYuUElORUNPTkVfQVBJX0tFWSA/PyBcIlwiXG4gICAgLy8gY29uc29sZS5sb2cocGluZUtleSlcblxuICAgIC8vIFZlY3RvciBEQiBcbiAgICAgIGNvbnN0IHBpbmVjb25lID0gbmV3IFBpbmVjb25lQ2xpZW50KCk7XG4gICAgICBhd2FpdCBwaW5lY29uZS5pbml0KHtcbiAgICAgICAgZW52aXJvbm1lbnQ6IFwidXMtd2VzdDQtZ2NwXCIsIFxuICAgICAgICBhcGlLZXk6IHByb2Nlc3MuZW52LlBJTkVDT05FX0FQSV9LRVkgPz8gXCJcIixcbiAgICAgIH0pO1xuICAgICAgLy8gY29uc29sZS5sb2cocGluZWNvbmUpXG4gICAgICBjb25zdCBpbmRleCA9IHBpbmVjb25lLkluZGV4KFwiaW1wcm9tcHR1XCIpO1xuICAgICAgY29uc3QgdmVjdG9yU3RvcmUgPSBhd2FpdCBQaW5lY29uZVN0b3JlLmZyb21FeGlzdGluZ0luZGV4KFxuICAgICAgICBuZXcgT3BlbkFJRW1iZWRkaW5ncygpLCB7cGluZWNvbmVJbmRleDogaW5kZXh9LFxuICAgICAgKTtcbiAgICAgIC8vIFJldHVybiBjaHVua3MgdG8gZGlzcGxheSBhcyByZWZlcmVuY2VzIFxuICAgICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IHZlY3RvclN0b3JlLnNpbWlsYXJpdHlTZWFyY2gocXVlcnksIDUpO1xuICAgICAgcmVzLnN0YXR1cygyMDApLnNlbmQocmVzdWx0cyk7IFxuICAgIH1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjsiXSwibmFtZXMiOlsiUGluZWNvbmVTdG9yZSIsIk9wZW5BSUVtYmVkZGluZ3MiLCJQaW5lY29uZUNsaWVudCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJxdWVyeSIsImJvZHkiLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiT1BFTkFJX0FQSV9LRVkiLCJwaW5lS2V5IiwiUElORUNPTkVfQVBJX0tFWSIsInBpbmVjb25lIiwiaW5pdCIsImVudmlyb25tZW50IiwiaW5kZXgiLCJJbmRleCIsInZlY3RvclN0b3JlIiwiZnJvbUV4aXN0aW5nSW5kZXgiLCJwaW5lY29uZUluZGV4IiwicmVzdWx0cyIsInNpbWlsYXJpdHlTZWFyY2giLCJzdGF0dXMiLCJzZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/search.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/search.ts"));
module.exports = __webpack_exports__;

})();