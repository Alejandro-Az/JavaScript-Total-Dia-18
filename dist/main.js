/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/clima.js":
/*!**********************!*\
  !*** ./src/clima.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nconst key_api_tiempo = \"c27d6882d7ee4c9b93d1623e685790a7\";\r\n\r\nfunction getTiempo() {    \r\n    fetch(`https://api.weatherbit.io/v2.0/forecast/daily?lat=40.748333&lon=-73.985278&lang=es&key=${key_api_tiempo}&days=1`)\r\n    .then(respuesta => respuesta.json())\r\n    .then(data => cargarTiempo(data))\r\n    .catch(error => {\r\n        console.log(\"Se muestran temperaturas por defecto\", error);\r\n        cargarTiempo({ city_name: \"New York City\", country_code: \"US\", data: [{max_temp: 20, min_temp: 10, temp: 15, pop: 0, weather: { description: \"Cielo despejado\" }}]});\r\n    });\r\n}\r\n\r\nfunction cargarTiempo(contenido) {\r\n    document.getElementById(\"tiempoMinTemp\").innerHTML = `${contenido.data[0].min_temp} °C<span>Mínima</span>`;\r\n    document.getElementById(\"tiempoTemp\").innerHTML = `${contenido.data[0].temp} °C<span>Actual</span>`;\r\n    document.getElementById(\"tiempoMaxTemp\").innerHTML = `${contenido.data[0].max_temp} °C<span>Máxima</span>`;\r\n\r\n    document.getElementById(\"tiempoPrec\").innerHTML = `${contenido.data[0].pop} % precipitacion`;\r\n    document.getElementById(\"tiempoInfo\").innerHTML = contenido.data[0].weather.description;\r\n\r\n    document.getElementById(\"tiempoCiudad\").innerHTML = `${contenido.city_name}, ${contenido.country_code}`;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({getTiempo});\n\n//# sourceURL=webpack://proyecto/./src/clima.js?");

/***/ }),

/***/ "./src/horas.js":
/*!**********************!*\
  !*** ./src/horas.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nfunction getHoras() {\r\n    const now = new Date();\r\n    let horas = [];\r\n    \r\n    // Ciudad de Nueva York, EE. UU.\r\n    const newYorkTime = now.toLocaleString('en-US', { timeZone: 'America/New_York', hour12: false });\r\n    horas.push({ city: 'New York', hour: newYorkTime.split(',')[1]});\r\n    \r\n    // Ciudad de Londres, Reino Unido\r\n    const londonTime = now.toLocaleString('en-GB', { timeZone: 'Europe/London', hour12: false });\r\n    horas.push({ city: 'Londres', hour: londonTime.split(',')[1]});\r\n    \r\n    // Ciudad de Sydney, Australia\r\n    const sydneyTime = now.toLocaleString('en-AU', { timeZone: 'Australia/Sydney', hour12: false });\r\n    horas.push({ city: 'Sydney', hour: sydneyTime.split(',')[1]});\r\n    \r\n    // Ciudad de BsAs, Argentina\r\n    const bsAsTime = now.toLocaleString('es-AR', { timeZone: 'America/Argentina/Buenos_Aires', hour12: false });\r\n    horas.push({ city: 'Buenos Aires', hour: bsAsTime.split(',')[1]});\r\n\r\n    cargarHoras(horas);\r\n}\r\n\r\nfunction cargarHoras(horas) {\r\n    const divHoras = document.getElementById('divHoras');\r\n\r\n    horas.forEach(item => {\r\n        const div = document.createElement('div');\r\n        div.innerHTML = `${item.hour}<span>${item.city}</span>`\r\n        \r\n        divHoras.appendChild(div);\r\n    });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({getHoras});\n\n//# sourceURL=webpack://proyecto/./src/horas.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _clima_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clima.js */ \"./src/clima.js\");\n/* harmony import */ var _horas_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./horas.js */ \"./src/horas.js\");\n/* harmony import */ var _noticias_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./noticias.js */ \"./src/noticias.js\");\n\r\n\r\n\r\n\r\n\r\nfunction cargarCancion() {\r\n    const audio = document.getElementById('cancionDia');\r\n    audio.src = \"../assets/Moby - We Are All Made Of Stars.mp3\";\r\n}\r\n\r\n_clima_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getTiempo();\r\n_horas_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getHoras();\r\n_noticias_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getNoticia();\r\ncargarCancion();\n\n//# sourceURL=webpack://proyecto/./src/index.js?");

/***/ }),

/***/ "./src/noticias.js":
/*!*************************!*\
  !*** ./src/noticias.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nfunction getNoticia() {\r\n    fetch('../ultima-noticia.json')\r\n    .then(response => response.json())\r\n    .then(data => cargarNoticia(data))\r\n    .catch(error => console.error(error));\r\n}\r\n\r\nfunction cargarNoticia(nota) {\r\n    const div = document.getElementById('bloqueNoticia');\r\n    div.style.backgroundImage = `url(\"${nota.imagen}\")`;\r\n    div.style.backgroundSize = \"cover\";\r\n    div.style.backgroundPosition = \"center\";\r\n\r\n    document.getElementById('noticiaTitulo').innerHTML = nota.titulo;    \r\n    document.getElementById('noticiaContenido').innerHTML = nota.contenido;    \r\n    document.getElementById('noticiaAutor').innerHTML = nota.autor;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({getNoticia});\n\n//# sourceURL=webpack://proyecto/./src/noticias.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;