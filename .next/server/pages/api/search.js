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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var langchain_vectorstores__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! langchain/vectorstores */ \"langchain/vectorstores\");\n/* harmony import */ var langchain_embeddings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! langchain/embeddings */ \"langchain/embeddings\");\n/* harmony import */ var _pinecone_database_pinecone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pinecone-database/pinecone */ \"@pinecone-database/pinecone\");\n/* harmony import */ var _pinecone_database_pinecone__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_pinecone_database_pinecone__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([langchain_vectorstores__WEBPACK_IMPORTED_MODULE_0__, langchain_embeddings__WEBPACK_IMPORTED_MODULE_1__]);\n([langchain_vectorstores__WEBPACK_IMPORTED_MODULE_0__, langchain_embeddings__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\nconst handler = async (req, res)=>{\n    // Query \n    const query = req.body.query;\n    // const apiKey = \"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\"\n    // const apiKey = req.body.apiKey;\n    const openKey = process.env.OPENAI_API_KEY;\n    console.log(\"openKey:\", openKey);\n    const pineKey = process.env.PINECONE_API_KEY ?? \"\";\n    console.log(\"Pinekey: \", pineKey);\n    // Vector DB \n    const pinecone = new _pinecone_database_pinecone__WEBPACK_IMPORTED_MODULE_2__.PineconeClient();\n    await pinecone.init({\n        environment: \"us-west4-gcp\",\n        apiKey: process.env.PINECONE_API_KEY ?? \"\"\n    });\n    // console.log(pinecone)\n    const index = pinecone.Index(\"impromptu\");\n    const vectorStore = await langchain_vectorstores__WEBPACK_IMPORTED_MODULE_0__.PineconeStore.fromExistingIndex(new langchain_embeddings__WEBPACK_IMPORTED_MODULE_1__.OpenAIEmbeddings(), {\n        pineconeIndex: index\n    });\n    // Return chunks to display as references \n    const results = await vectorStore.similaritySearch(query, 5);\n    res.status(200).send(results);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2VhcmNoLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXVEO0FBQ0M7QUFDSztBQVE3RCxNQUFNRyxVQUFVLE9BQU9DLEtBQXFCQyxNQUErQjtJQUV2RSxTQUFTO0lBQ1QsTUFBTUMsUUFBUUYsSUFBSUcsSUFBSSxDQUFDRCxLQUFLO0lBQzVCLHVFQUF1RTtJQUN2RSxrQ0FBa0M7SUFDbEMsTUFBTUUsVUFBVUMsUUFBUUMsR0FBRyxDQUFDQyxjQUFjO0lBQzFDQyxRQUFRQyxHQUFHLENBQUMsWUFBWUw7SUFFeEIsTUFBTU0sVUFBVUwsUUFBUUMsR0FBRyxDQUFDSyxnQkFBZ0IsSUFBSTtJQUNoREgsUUFBUUMsR0FBRyxDQUFDLGFBQWFDO0lBRXpCLGFBQWE7SUFDWCxNQUFNRSxXQUFXLElBQUlkLHVFQUFjQTtJQUNuQyxNQUFNYyxTQUFTQyxJQUFJLENBQUM7UUFDbEJDLGFBQWE7UUFDYkMsUUFBUVYsUUFBUUMsR0FBRyxDQUFDSyxnQkFBZ0IsSUFBSTtJQUMxQztJQUNBLHdCQUF3QjtJQUN4QixNQUFNSyxRQUFRSixTQUFTSyxLQUFLLENBQUM7SUFDN0IsTUFBTUMsY0FBYyxNQUFNdEIsbUZBQStCLENBQ3ZELElBQUlDLGtFQUFnQkEsSUFBSTtRQUFDdUIsZUFBZUo7SUFBSztJQUUvQywwQ0FBMEM7SUFDMUMsTUFBTUssVUFBVSxNQUFNSCxZQUFZSSxnQkFBZ0IsQ0FBQ3BCLE9BQU87SUFDMURELElBQUlzQixNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDSDtBQUN2QjtBQUVKLGlFQUFldEIsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FwcC8uL3BhZ2VzL2FwaS9zZWFyY2gudHM/N2EwOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaW5lY29uZVN0b3JlIH0gZnJvbSBcImxhbmdjaGFpbi92ZWN0b3JzdG9yZXNcIjtcbmltcG9ydCB7IE9wZW5BSUVtYmVkZGluZ3MgfSBmcm9tIFwibGFuZ2NoYWluL2VtYmVkZGluZ3NcIjtcbmltcG9ydCB7IFBpbmVjb25lQ2xpZW50IH0gZnJvbSBcIkBwaW5lY29uZS1kYXRhYmFzZS9waW5lY29uZVwiO1xuaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5cbi8vZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcbi8vICBydW50aW1lOiBcImVkZ2VcIlxuLy8gfTtcblxudHlwZSBEYXRhID0ge307XG5jb25zdCBoYW5kbGVyID0gYXN5bmMgKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlPERhdGE+KSA9PiB7XG5cbiAgICAvLyBRdWVyeSBcbiAgICBjb25zdCBxdWVyeSA9IHJlcS5ib2R5LnF1ZXJ5O1xuICAgIC8vIGNvbnN0IGFwaUtleSA9IFwic2staTY4eWNlTW5PVGJzR3VxT0pWRTdUM0JsYmtGSlhYWThVMW9XV0J2dzhsb2ZmVWNjXCJcbiAgICAvLyBjb25zdCBhcGlLZXkgPSByZXEuYm9keS5hcGlLZXk7XG4gICAgY29uc3Qgb3BlbktleSA9IHByb2Nlc3MuZW52Lk9QRU5BSV9BUElfS0VZO1xuICAgIGNvbnNvbGUubG9nKCdvcGVuS2V5OicsIG9wZW5LZXkpXG5cbiAgICBjb25zdCBwaW5lS2V5ID0gcHJvY2Vzcy5lbnYuUElORUNPTkVfQVBJX0tFWSA/PyBcIlwiXG4gICAgY29uc29sZS5sb2coJ1BpbmVrZXk6ICcsIHBpbmVLZXkpXG5cbiAgICAvLyBWZWN0b3IgREIgXG4gICAgICBjb25zdCBwaW5lY29uZSA9IG5ldyBQaW5lY29uZUNsaWVudCgpO1xuICAgICAgYXdhaXQgcGluZWNvbmUuaW5pdCh7XG4gICAgICAgIGVudmlyb25tZW50OiBcInVzLXdlc3Q0LWdjcFwiLCBcbiAgICAgICAgYXBpS2V5OiBwcm9jZXNzLmVudi5QSU5FQ09ORV9BUElfS0VZID8/IFwiXCIsXG4gICAgICB9KTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHBpbmVjb25lKVxuICAgICAgY29uc3QgaW5kZXggPSBwaW5lY29uZS5JbmRleChcImltcHJvbXB0dVwiKTtcbiAgICAgIGNvbnN0IHZlY3RvclN0b3JlID0gYXdhaXQgUGluZWNvbmVTdG9yZS5mcm9tRXhpc3RpbmdJbmRleChcbiAgICAgICAgbmV3IE9wZW5BSUVtYmVkZGluZ3MoKSwge3BpbmVjb25lSW5kZXg6IGluZGV4fSxcbiAgICAgICk7XG4gICAgICAvLyBSZXR1cm4gY2h1bmtzIHRvIGRpc3BsYXkgYXMgcmVmZXJlbmNlcyBcbiAgICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCB2ZWN0b3JTdG9yZS5zaW1pbGFyaXR5U2VhcmNoKHF1ZXJ5LCA1KTtcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHJlc3VsdHMpOyBcbiAgICB9XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7Il0sIm5hbWVzIjpbIlBpbmVjb25lU3RvcmUiLCJPcGVuQUlFbWJlZGRpbmdzIiwiUGluZWNvbmVDbGllbnQiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwicXVlcnkiLCJib2R5Iiwib3BlbktleSIsInByb2Nlc3MiLCJlbnYiLCJPUEVOQUlfQVBJX0tFWSIsImNvbnNvbGUiLCJsb2ciLCJwaW5lS2V5IiwiUElORUNPTkVfQVBJX0tFWSIsInBpbmVjb25lIiwiaW5pdCIsImVudmlyb25tZW50IiwiYXBpS2V5IiwiaW5kZXgiLCJJbmRleCIsInZlY3RvclN0b3JlIiwiZnJvbUV4aXN0aW5nSW5kZXgiLCJwaW5lY29uZUluZGV4IiwicmVzdWx0cyIsInNpbWlsYXJpdHlTZWFyY2giLCJzdGF0dXMiLCJzZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/search.ts\n");

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