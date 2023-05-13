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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var langchain_vectorstores__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! langchain/vectorstores */ \"langchain/vectorstores\");\n/* harmony import */ var langchain_embeddings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! langchain/embeddings */ \"langchain/embeddings\");\n/* harmony import */ var _pinecone_database_pinecone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pinecone-database/pinecone */ \"@pinecone-database/pinecone\");\n/* harmony import */ var _pinecone_database_pinecone__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_pinecone_database_pinecone__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([langchain_vectorstores__WEBPACK_IMPORTED_MODULE_0__, langchain_embeddings__WEBPACK_IMPORTED_MODULE_1__]);\n([langchain_vectorstores__WEBPACK_IMPORTED_MODULE_0__, langchain_embeddings__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\nconst handler = async (req, res)=>{\n    // Query \n    const query = req.body.query;\n    // const apiKey = req.body.apiKey;\n    // const openKey = process.env.OPENAI_API_KEY;\n    // console.log('openKey:', openKey)\n    // const pineKey = process.env.PINECONE_API_KEY ?? \"\"\n    // console.log('Pinekey: ', pineKey)\n    // Vector DB \n    const pinecone = new _pinecone_database_pinecone__WEBPACK_IMPORTED_MODULE_2__.PineconeClient();\n    await pinecone.init({\n        environment: \"us-west4-gcp\",\n        apiKey: process.env.PINECONE_API_KEY ?? \"\"\n    });\n    // console.log(pinecone)\n    const index = pinecone.Index(\"impromptu\");\n    const vectorStore = await langchain_vectorstores__WEBPACK_IMPORTED_MODULE_0__.PineconeStore.fromExistingIndex(new langchain_embeddings__WEBPACK_IMPORTED_MODULE_1__.OpenAIEmbeddings(), {\n        pineconeIndex: index\n    });\n    // Return chunks to display as references \n    const results = await vectorStore.similaritySearch(query, 5);\n    // console.log('results: ', results)\n    res.status(200).send(results);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2VhcmNoLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXVEO0FBQ0M7QUFDSztBQVE3RCxNQUFNRyxVQUFVLE9BQU9DLEtBQXFCQyxNQUErQjtJQUV2RSxTQUFTO0lBQ1QsTUFBTUMsUUFBUUYsSUFBSUcsSUFBSSxDQUFDRCxLQUFLO0lBRTVCLGtDQUFrQztJQUNsQyw4Q0FBOEM7SUFDOUMsbUNBQW1DO0lBRW5DLHFEQUFxRDtJQUNyRCxvQ0FBb0M7SUFFcEMsYUFBYTtJQUNYLE1BQU1FLFdBQVcsSUFBSU4sdUVBQWNBO0lBQ25DLE1BQU1NLFNBQVNDLElBQUksQ0FBQztRQUNsQkMsYUFBYTtRQUNiQyxRQUFRQyxRQUFRQyxHQUFHLENBQUNDLGdCQUFnQixJQUFJO0lBQzFDO0lBQ0Esd0JBQXdCO0lBQ3hCLE1BQU1DLFFBQVFQLFNBQVNRLEtBQUssQ0FBQztJQUM3QixNQUFNQyxjQUFjLE1BQU1qQixtRkFBK0IsQ0FDdkQsSUFBSUMsa0VBQWdCQSxJQUFJO1FBQUNrQixlQUFlSjtJQUFLO0lBRS9DLDBDQUEwQztJQUMxQyxNQUFNSyxVQUFVLE1BQU1ILFlBQVlJLGdCQUFnQixDQUFDZixPQUFPO0lBQzFELG9DQUFvQztJQUNwQ0QsSUFBSWlCLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNIO0FBQ3ZCO0FBRUosaUVBQWVqQixPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXBwLy4vcGFnZXMvYXBpL3NlYXJjaC50cz83YTA4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpbmVjb25lU3RvcmUgfSBmcm9tIFwibGFuZ2NoYWluL3ZlY3RvcnN0b3Jlc1wiO1xuaW1wb3J0IHsgT3BlbkFJRW1iZWRkaW5ncyB9IGZyb20gXCJsYW5nY2hhaW4vZW1iZWRkaW5nc1wiO1xuaW1wb3J0IHsgUGluZWNvbmVDbGllbnQgfSBmcm9tIFwiQHBpbmVjb25lLWRhdGFiYXNlL3BpbmVjb25lXCI7XG5pbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcblxuLy9leHBvcnQgY29uc3QgY29uZmlnID0ge1xuLy8gIHJ1bnRpbWU6IFwiZWRnZVwiXG4vLyB9O1xuXG50eXBlIERhdGEgPSB7fTtcbmNvbnN0IGhhbmRsZXIgPSBhc3luYyAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2U8RGF0YT4pID0+IHtcblxuICAgIC8vIFF1ZXJ5IFxuICAgIGNvbnN0IHF1ZXJ5ID0gcmVxLmJvZHkucXVlcnk7XG5cbiAgICAvLyBjb25zdCBhcGlLZXkgPSByZXEuYm9keS5hcGlLZXk7XG4gICAgLy8gY29uc3Qgb3BlbktleSA9IHByb2Nlc3MuZW52Lk9QRU5BSV9BUElfS0VZO1xuICAgIC8vIGNvbnNvbGUubG9nKCdvcGVuS2V5OicsIG9wZW5LZXkpXG5cbiAgICAvLyBjb25zdCBwaW5lS2V5ID0gcHJvY2Vzcy5lbnYuUElORUNPTkVfQVBJX0tFWSA/PyBcIlwiXG4gICAgLy8gY29uc29sZS5sb2coJ1BpbmVrZXk6ICcsIHBpbmVLZXkpXG5cbiAgICAvLyBWZWN0b3IgREIgXG4gICAgICBjb25zdCBwaW5lY29uZSA9IG5ldyBQaW5lY29uZUNsaWVudCgpO1xuICAgICAgYXdhaXQgcGluZWNvbmUuaW5pdCh7XG4gICAgICAgIGVudmlyb25tZW50OiBcInVzLXdlc3Q0LWdjcFwiLCBcbiAgICAgICAgYXBpS2V5OiBwcm9jZXNzLmVudi5QSU5FQ09ORV9BUElfS0VZID8/IFwiXCIsXG4gICAgICB9KTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHBpbmVjb25lKVxuICAgICAgY29uc3QgaW5kZXggPSBwaW5lY29uZS5JbmRleChcImltcHJvbXB0dVwiKTtcbiAgICAgIGNvbnN0IHZlY3RvclN0b3JlID0gYXdhaXQgUGluZWNvbmVTdG9yZS5mcm9tRXhpc3RpbmdJbmRleChcbiAgICAgICAgbmV3IE9wZW5BSUVtYmVkZGluZ3MoKSwge3BpbmVjb25lSW5kZXg6IGluZGV4fSxcbiAgICAgICk7XG4gICAgICAvLyBSZXR1cm4gY2h1bmtzIHRvIGRpc3BsYXkgYXMgcmVmZXJlbmNlcyBcbiAgICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCB2ZWN0b3JTdG9yZS5zaW1pbGFyaXR5U2VhcmNoKHF1ZXJ5LCA1KTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdyZXN1bHRzOiAnLCByZXN1bHRzKVxuICAgICAgcmVzLnN0YXR1cygyMDApLnNlbmQocmVzdWx0cyk7IFxuICAgIH1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjsiXSwibmFtZXMiOlsiUGluZWNvbmVTdG9yZSIsIk9wZW5BSUVtYmVkZGluZ3MiLCJQaW5lY29uZUNsaWVudCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJxdWVyeSIsImJvZHkiLCJwaW5lY29uZSIsImluaXQiLCJlbnZpcm9ubWVudCIsImFwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJQSU5FQ09ORV9BUElfS0VZIiwiaW5kZXgiLCJJbmRleCIsInZlY3RvclN0b3JlIiwiZnJvbUV4aXN0aW5nSW5kZXgiLCJwaW5lY29uZUluZGV4IiwicmVzdWx0cyIsInNpbWlsYXJpdHlTZWFyY2giLCJzdGF0dXMiLCJzZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/search.ts\n");

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