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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var langchain_vectorstores__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! langchain/vectorstores */ \"langchain/vectorstores\");\n/* harmony import */ var langchain_embeddings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! langchain/embeddings */ \"langchain/embeddings\");\n/* harmony import */ var _pinecone_database_pinecone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pinecone-database/pinecone */ \"@pinecone-database/pinecone\");\n/* harmony import */ var _pinecone_database_pinecone__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_pinecone_database_pinecone__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([langchain_vectorstores__WEBPACK_IMPORTED_MODULE_0__, langchain_embeddings__WEBPACK_IMPORTED_MODULE_1__]);\n([langchain_vectorstores__WEBPACK_IMPORTED_MODULE_0__, langchain_embeddings__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\nconst handler = async (req, res)=>{\n    // Query \n    const query = req.body.query;\n    // const apiKey = req.body.apiKey;\n    // const openKey = process.env.OPENAI_API_KEY;\n    // console.log('openKey:', openKey)\n    // const pineKey = process.env.PINECONE_API_KEY ?? \"\"\n    // console.log('Pinekey: ', pineKey)\n    // Vector DB \n    const pinecone = new _pinecone_database_pinecone__WEBPACK_IMPORTED_MODULE_2__.PineconeClient();\n    await pinecone.init({\n        environment: \"us-west4-gcp\",\n        apiKey: process.env.PINECONE_API_KEY ?? \"\"\n    });\n    // console.log(pinecone)\n    const index = pinecone.Index(\"impromptu\");\n    const vectorStore = await langchain_vectorstores__WEBPACK_IMPORTED_MODULE_0__.PineconeStore.fromExistingIndex(new langchain_embeddings__WEBPACK_IMPORTED_MODULE_1__.OpenAIEmbeddings(), {\n        pineconeIndex: index\n    });\n    // Return chunks to display as references \n    const results = await vectorStore.similaritySearch(query, 5);\n    console.log(\"results: \", results);\n    res.status(200).send(results);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2VhcmNoLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXVEO0FBQ0M7QUFDSztBQVE3RCxNQUFNRyxVQUFVLE9BQU9DLEtBQXFCQyxNQUErQjtJQUV2RSxTQUFTO0lBQ1QsTUFBTUMsUUFBUUYsSUFBSUcsSUFBSSxDQUFDRCxLQUFLO0lBRTVCLGtDQUFrQztJQUNsQyw4Q0FBOEM7SUFDOUMsbUNBQW1DO0lBRW5DLHFEQUFxRDtJQUNyRCxvQ0FBb0M7SUFFcEMsYUFBYTtJQUNYLE1BQU1FLFdBQVcsSUFBSU4sdUVBQWNBO0lBQ25DLE1BQU1NLFNBQVNDLElBQUksQ0FBQztRQUNsQkMsYUFBYTtRQUNiQyxRQUFRQyxRQUFRQyxHQUFHLENBQUNDLGdCQUFnQixJQUFJO0lBQzFDO0lBQ0Esd0JBQXdCO0lBQ3hCLE1BQU1DLFFBQVFQLFNBQVNRLEtBQUssQ0FBQztJQUM3QixNQUFNQyxjQUFjLE1BQU1qQixtRkFBK0IsQ0FDdkQsSUFBSUMsa0VBQWdCQSxJQUFJO1FBQUNrQixlQUFlSjtJQUFLO0lBRS9DLDBDQUEwQztJQUMxQyxNQUFNSyxVQUFVLE1BQU1ILFlBQVlJLGdCQUFnQixDQUFDZixPQUFPO0lBQzFEZ0IsUUFBUUMsR0FBRyxDQUFDLGFBQWFIO0lBQ3pCZixJQUFJbUIsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ0w7QUFDdkI7QUFFSixpRUFBZWpCLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHAvLi9wYWdlcy9hcGkvc2VhcmNoLnRzPzdhMDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGluZWNvbmVTdG9yZSB9IGZyb20gXCJsYW5nY2hhaW4vdmVjdG9yc3RvcmVzXCI7XG5pbXBvcnQgeyBPcGVuQUlFbWJlZGRpbmdzIH0gZnJvbSBcImxhbmdjaGFpbi9lbWJlZGRpbmdzXCI7XG5pbXBvcnQgeyBQaW5lY29uZUNsaWVudCB9IGZyb20gXCJAcGluZWNvbmUtZGF0YWJhc2UvcGluZWNvbmVcIjtcbmltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuXG4vL2V4cG9ydCBjb25zdCBjb25maWcgPSB7XG4vLyAgcnVudGltZTogXCJlZGdlXCJcbi8vIH07XG5cbnR5cGUgRGF0YSA9IHt9O1xuY29uc3QgaGFuZGxlciA9IGFzeW5jIChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZTxEYXRhPikgPT4ge1xuXG4gICAgLy8gUXVlcnkgXG4gICAgY29uc3QgcXVlcnkgPSByZXEuYm9keS5xdWVyeTtcblxuICAgIC8vIGNvbnN0IGFwaUtleSA9IHJlcS5ib2R5LmFwaUtleTtcbiAgICAvLyBjb25zdCBvcGVuS2V5ID0gcHJvY2Vzcy5lbnYuT1BFTkFJX0FQSV9LRVk7XG4gICAgLy8gY29uc29sZS5sb2coJ29wZW5LZXk6Jywgb3BlbktleSlcblxuICAgIC8vIGNvbnN0IHBpbmVLZXkgPSBwcm9jZXNzLmVudi5QSU5FQ09ORV9BUElfS0VZID8/IFwiXCJcbiAgICAvLyBjb25zb2xlLmxvZygnUGluZWtleTogJywgcGluZUtleSlcblxuICAgIC8vIFZlY3RvciBEQiBcbiAgICAgIGNvbnN0IHBpbmVjb25lID0gbmV3IFBpbmVjb25lQ2xpZW50KCk7XG4gICAgICBhd2FpdCBwaW5lY29uZS5pbml0KHtcbiAgICAgICAgZW52aXJvbm1lbnQ6IFwidXMtd2VzdDQtZ2NwXCIsIFxuICAgICAgICBhcGlLZXk6IHByb2Nlc3MuZW52LlBJTkVDT05FX0FQSV9LRVkgPz8gXCJcIixcbiAgICAgIH0pO1xuICAgICAgLy8gY29uc29sZS5sb2cocGluZWNvbmUpXG4gICAgICBjb25zdCBpbmRleCA9IHBpbmVjb25lLkluZGV4KFwiaW1wcm9tcHR1XCIpO1xuICAgICAgY29uc3QgdmVjdG9yU3RvcmUgPSBhd2FpdCBQaW5lY29uZVN0b3JlLmZyb21FeGlzdGluZ0luZGV4KFxuICAgICAgICBuZXcgT3BlbkFJRW1iZWRkaW5ncygpLCB7cGluZWNvbmVJbmRleDogaW5kZXh9LFxuICAgICAgKTtcbiAgICAgIC8vIFJldHVybiBjaHVua3MgdG8gZGlzcGxheSBhcyByZWZlcmVuY2VzIFxuICAgICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IHZlY3RvclN0b3JlLnNpbWlsYXJpdHlTZWFyY2gocXVlcnksIDUpO1xuICAgICAgY29uc29sZS5sb2coJ3Jlc3VsdHM6ICcsIHJlc3VsdHMpXG4gICAgICByZXMuc3RhdHVzKDIwMCkuc2VuZChyZXN1bHRzKTsgXG4gICAgfVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyOyJdLCJuYW1lcyI6WyJQaW5lY29uZVN0b3JlIiwiT3BlbkFJRW1iZWRkaW5ncyIsIlBpbmVjb25lQ2xpZW50IiwiaGFuZGxlciIsInJlcSIsInJlcyIsInF1ZXJ5IiwiYm9keSIsInBpbmVjb25lIiwiaW5pdCIsImVudmlyb25tZW50IiwiYXBpS2V5IiwicHJvY2VzcyIsImVudiIsIlBJTkVDT05FX0FQSV9LRVkiLCJpbmRleCIsIkluZGV4IiwidmVjdG9yU3RvcmUiLCJmcm9tRXhpc3RpbmdJbmRleCIsInBpbmVjb25lSW5kZXgiLCJyZXN1bHRzIiwic2ltaWxhcml0eVNlYXJjaCIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiLCJzZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/search.ts\n");

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