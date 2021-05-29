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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createContact(){\n    const contact = document.createElement(\"div\");\n    contact.classList.add(\"contact\");\n\n    const spacer = document.createElement(\"div\");\n    spacer.classList.add(\"spacer2\");\n\n    const contactUs = document.createElement(\"div\");\n    contactUs.classList.add(\"contact-us\");\n    contactUs.textContent = \"CONTACT US\";\n\n    const contactGrid = document.createElement(\"div\");\n    contactGrid.classList.add(\"contact-grid\");\n    //COVID BOX\n    const covidTitle = document.createElement(\"div\");\n    const covidBox = document.createElement(\"div\");\n    const covidText = document.createElement(\"div\");\n    covidTitle.classList.add(\"covid-title\");\n    covidTitle.textContent = \"COVID-19\";\n    covidBox.classList.add(\"covid\");\n    covidText.textContent = \"Due to the recent Covid-19 pandemic, our services are constantly changing based on local health orders. Due to this, we cannot currently take reservations. We will continue to operate our kitchen regardless of dine-in options, which allows you to continue placing pickup or delivery orders. Take care and we hope to see you soon.\"\n    covidBox.appendChild(covidTitle);\n    covidBox.appendChild(covidText);\n    contactGrid.appendChild(covidBox);\n    //PHONE BOX\n    const phoneBox = document.createElement(\"div\");\n    phoneBox.classList.add(\"phone\");\n    const phoneContainer = document.createElement(\"div\");\n    phoneContainer.classList.add(\"conts\");\n    \n    const phoneBoxTitle = document.createElement(\"div\");\n    phoneBoxTitle.classList.add(\"phone-title\");\n    const phoneNum = document.createElement(\"div\");\n    phoneNum.classList.add(\"phone-num\");\n    phoneBoxTitle.textContent = \"PHONE NUMBER\";\n    phoneNum.textContent = \"Please call us during our opening hours, which are listed below, at: +1 (604) 399-3939\";\n\n    phoneContainer.appendChild(phoneBoxTitle);\n    phoneContainer.appendChild(phoneNum);\n    phoneBox.appendChild(phoneContainer);\n    //IMG\n    const logo = document.createElement(\"img\");\n    logo.classList.add(\"small-logo\");\n    logo.src = \"/dist/imgs/sunCrop.png\"\n    const logoContainer = document.createElement(\"div\");\n    logoContainer.classList.add(\"small-logo-container\");\n    logoContainer.appendChild(logo);\n\n    phoneBox.appendChild(logoContainer);\n    //HOURS\n    //phoneBox.appendChild(spacer);\n    const hoursTitle = document.createElement(\"div\");\n    hoursTitle.classList.add(\"phone-title\");\n    const hoursContainer = document.createElement(\"div\");\n    hoursContainer.classList.add(\"conts\");\n\n    hoursTitle.textContent = \"HOURS\";\n    const hoursText1 = document.createElement(\"div\");\n    hoursText1.classList.add(\"hours-text\");\n    hoursText1.textContent = \"MON-THURS: 12PM - 12AM\";\n    const hoursText2 = document.createElement(\"div\");\n    hoursText2.classList.add(\"hours-text\");\n    hoursText2.textContent = \"FRI-SUN: 11PM - 2AM\";\n\n    hoursContainer.appendChild(hoursTitle);\n    hoursContainer.appendChild(hoursText1);\n    hoursContainer.appendChild(hoursText2);\n    phoneBox.appendChild(hoursContainer);\n\n    contactGrid.appendChild(phoneBox);\n    //ADDRESS\n    const address = document.createElement(\"div\");\n    const addressTitle = document.createElement(\"div\");\n    const addressText = document.createElement(\"div\");\n    address.classList.add(\"address-container\");\n    addressTitle.classList.add(\"covid-title\");\n    addressTitle.style.marginTop = \"1rem\";\n    addressTitle.textContent = \"ADDRESS\";\n    addressText.classList.add(\"phone-num\")\n    addressText.style.marginBottom = \"2rem\";\n    addressText.textContent = \"We are located at 1005 Denman Street. There is street parking and a parkade nearby.\"\n\n    address.appendChild(addressTitle);\n    address.appendChild(addressText);\n    contactGrid.appendChild(address);\n    //MAP\n    const mapContainer = document.createElement(\"div\");\n    mapContainer.classList.add(\"map-container\");\n    mapContainer.innerHTML = `<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.3178963020664!2d-123.14133044852406!3d49.28932087923068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548672262ca7d4db%3A0x2d9f59731e55be25!2s1005%20Denman%20St%2C%20Vancouver%2C%20BC%20V6G%202M9!5e0!3m2!1sen!2sca!4v1622263212427!5m2!1sen!2sca\" width=\"100%\" height=\"100%\" frameborder=\"0\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\"></iframe>`;\n    contactGrid.appendChild(mapContainer);\n\n    contact.appendChild(contactUs);\n    contact.appendChild(contactGrid);\n    return contact;\n}\n\n\nfunction loadContact(){\n    const main = document.getElementById(\"main\");\n    main.textContent = \"\";\n    main.appendChild(createContact());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);\n\n\n//# sourceURL=webpack://restaurant/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createHome(){\n    const home = document.createElement(\"div\");\n    home.classList.add(\"home\");\n\n    const logo = document.createElement(\"img\");\n    const imgContainer = document.createElement(\"div\");\n    logo.classList.add(\"logo\");\n    logo.src = \"imgs/sun2Crop2.png\";\n    logo.alt = \"Cafe du Soleil logo\";\n    imgContainer.classList.add(\"img-container\");\n    imgContainer.appendChild(logo);\n\n    home.appendChild(createTagLine(\"FRENCH STYLE\"));\n    home.appendChild(createTagLine(\"BAR AND BISTRO\"));\n    home.appendChild(imgContainer);\n    home.appendChild(createTagLine(\"OPEN\"));\n    const timeNoMarginBot = createTimeLine(\"MON-THURS: 12PM - 12AM\");\n    timeNoMarginBot.style.marginBottom = 0; \n    home.appendChild(timeNoMarginBot);\n    \n    home.appendChild(createTimeLine(\"FRI-SUN: 11PM - 2AM\"));\n\n    return home;\n}\n\nfunction createTagLine(text){\n    const line = document.createElement(\"div\");\n    line.classList.add(\"tag-line\");\n    line.textContent = text;\n    return line;\n}\n\nfunction createTimeLine(text){\n    const timeLine = document.createElement(\"div\");\n    timeLine.classList.add(\"time-line\");\n    timeLine.textContent = text;\n    \n    return timeLine;\n}\n\n\nfunction loadHome(){\n    const main = document.getElementById(\"main\");\n    main.textContent = \"\";\n    main.appendChild(createHome());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n//# sourceURL=webpack://restaurant/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website */ \"./src/website.js\");\n\n\n(0,_website__WEBPACK_IMPORTED_MODULE_0__.default)();\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createMenu(){\n    const menu = document.createElement(\"div\");\n    menu.classList.add(\"menu\");    \n\n    const spacer = document.createElement(\"div\");\n    spacer.classList.add(\"spacer\");\n    //TAPAS\n    menu.appendChild(createMenuCourse(\"TAPAS\"));\n    menu.appendChild(createMenuImg(\"/dist/imgs/tapas.jpg\"))\n    /* menu.appendChild(createMenuItem(\n        \"\",\n        \"$10.00\",\n        \"\"\n    )); */\n    menu.appendChild(createMenuItem(\n        \"Grilled Shrimp\",\n        \"$6.00\",\n        \"Butter garlic sauce, served with baguette.\"\n    ));\n    menu.appendChild(createMenuItem(\n        \"Pate de Campagne\",\n        \"$6.00\",\n        \"Creamy pate seasoned with fresh herbs, served with baguette.\"\n    ));\n    menu.appendChild(createMenuItem(\n        \"Brie & Walnuts\",\n        \"$6.00\",\n        \"From local cheese and nut farms, served with baguette.\"\n    ));\n    menu.appendChild(createMenuItem(\n        \"Potato Gratin\",\n        \"$6.00\",\n        \"Thinly sliced potatoes in creamy cheese sauce, served with baguette.\"\n    ));\n    //SALADS\n    menu.appendChild(createMenuCourse(\"SALADS\"));\n    menu.appendChild(createMenuImg(\"/dist/imgs/salad.jpg\"))\n    menu.appendChild(createMenuItem(\n        \"Kale Caeser Salad\",\n        \"$11.00\",\n        \"Baby kale, grated parmesan, dried cranberries, hand crafted croutons, hand crafted Caesar dressing.\"\n    ));\n    menu.appendChild(createMenuItem(\n        \"Salad Niçoise\",\n        \"$12.00\",\n        \"Albacore tuna, tomato, boiled from fresh egg, Kalamata olives, anchovies, bell pepper, red onion and spring mix salad.\"\n    ));\n    menu.appendChild(createMenuItem(\n        \"Goat Cheese Salad\",\n        \"$12.00\",\n        \"Mixed greens, walnuts & crispy bacon bits tossed in an olive oil dressing and topped with three seared goat cheese medallions.\"\n    ));\n    menu.appendChild(createMenuItem(\n        \"Shrimp & Avocado Summer Salad\",\n        \"$13.00\",\n        \"Albacore tuna, tomato, boiled from fresh egg, Kalamata olives, anchovies, bell pepper, red onion and spring mix salad.\"\n    ));\n    //SOUP\n    menu.appendChild(spacer);\n    menu.appendChild(createMenuCourse(\"FRESH HOMEMADE SOUP\"));\n    menu.appendChild(createMenuImg(\"/dist/imgs/soup.jpg\"));\n    menu.appendChild(createMenuItem(\n        \"Clams Chowder Soup\",\n        \"$10.00\",\n        \"White wine, celery, onion, garlic, clams, heavy cream and potatoes.\"\n    ));\n    menu.appendChild(createMenuItem(\n        \"Lobster Bisque\",\n        \"$11.00\",\n        \"Fresh lobster, heavy cream, white wine, celery, tomato, garlic.\"\n    ));\n    menu.appendChild(createMenuItem(\n        \"Chicken Vegetable Soup\",\n        \"$9.00\",\n        \"Chicken, carrots, celery, fennel, onion, baby spinach, olive oil.\"\n    ));\n    //ENTREES\n    menu.appendChild(createMenuCourse(\"ENTREES\"));\n    menu.appendChild(createMenuImg(\"/dist/imgs/entrees.jpg\"));\n    menu.appendChild(createMenuItem(\n        \"Coq Au Vin\",\n        \"$18.00\",\n        \"Cage free chicken braised in red wine sauce with onion, bacon, thyme, mushrooms, tomato and carrots.\"\n    ));\n    menu.appendChild(createMenuItem(\n        \"Meatball Pasta\",\n        \"$14.00\",\n        \"Organic meatballs made with ground beef, parsley, onion, and garlic. Served with our homemade tomato sauce and fresh pasta.\"\n    ));\n    menu.appendChild(createMenuItem(\n        \"Eggplant & Spinach Lasagna\",\n        \"$14.00\",\n        \"Homemade lasagna with bechamel and tomato sauce, eggplant, spinach, ricotta, pesto, bell pepper and parmesan.\"\n    ));\n    menu.appendChild(createMenuItem(\n        \"Boeuf Bourguignon\",\n        \"$18.00\",\n        \"Beef stew braised in red wine sauce with onions, mushrroms, carrots, garlic and thyme.\"\n    ));\n    menu.appendChild(createMenuItem(\n        \"Tuna Carpaccio\",\n        \"$18.00\",\n        \"Fresh tuna, served thinly sliced and rare atop mashed potatoes, olive oil, tomato and bell pepper, thyme & lemon zest.\"\n    ));\n\n    menu.appendChild(createMenuCourse(\"PEI MUSSELS\"));\n    menu.appendChild(createMenuImg(\"/dist/imgs/mussels.webp\"));\n    menu.appendChild(createMenuItem(\n        \"Garlic Mussels\",\n        \"$12.50\",\n        \"Celery, onion, butter, parsely, creamy garlic.\"\n    ));\n    menu.appendChild(createMenuItem(\n        \"Curry Mussels\",\n        \"$12.50\",\n        \"Carrot, celery, apple, onion, curry creamy sauce.\"\n    ));\n    menu.appendChild(createMenuItem(\n        \"Mussles 'Marseillaise'\",\n        \"$12.50\",\n        \"Tomato, fresh basil, fennel, cream, French Pastis\"\n    ));\n    //DESSERTS\n    menu.appendChild(createMenuCourse(\"DESSERTS\"));\n    menu.appendChild(createMenuImg(\"/dist/imgs/creme.jpeg\"));\n    menu.appendChild(createMenuItem(\n        \"Creme Brulee\",\n        \"$7.00\",\n        \"Glassy caramelized sugar atop a rich and creamy custard.\"\n    ));\n    menu.appendChild(createMenuItem(\n        \"Chocolate Mousse\",\n        \"$7.00\",\n        \"Decadent and creamy chocolate topped with strawberries and whipped cream.\" \n    ));\n    menu.appendChild(createMenuItem(\n        \"Fresh Pineapple Carpaccio\",\n        \"$7.00\",\n        \"Fresh and sweet pineapple served with pecans and maple syrup.\" \n    ));\n    menu.appendChild(createMenuItem(\n        \"The French Bread 'Pain Perdu'\",\n        \"$8.75\",\n        \"Artisan bread, sliced and soaked in egg before being pan fried.\" \n    ));\n    menu.appendChild(createMenuItem(\n        \"Crepe Suzette\",\n        \"$9.00\",\n        \"Paper thin crepes with a sauce of caramelized sugar, butter, tangerine juice, lemon zest and Grand Marnier.\" \n    ));\n    menu.appendChild(spacer);\n    return menu;\n}\n\nfunction createMenuCourse(name){\n    const course = document.createElement(\"div\");\n    course.classList.add(\"course\");\n    course.textContent = name;\n    return course;\n}\n\nfunction createMenuImg(src){\n    const img = document.createElement(\"img\");\n    const imgBox = document.createElement(\"div\");\n    imgBox.classList.add(\"img-container\");\n    img.classList.add(\"food-img\");\n    img.src = src;\n    imgBox.appendChild(img);\n    return imgBox;\n}\n\nfunction createMenuItem(name, price, description){\n    const menuItem = document.createElement(\"div\");\n    menuItem.classList.add(\"menu-item\");\n\n    const dishName = document.createElement(\"div\");\n    dishName.textContent = name;\n\n    const dishPrice = document.createElement(\"div\");\n    dishPrice.classList.add(\"price\");\n    dishPrice.textContent = price;\n\n    const dishDesc = document.createElement(\"div\");\n    dishDesc.textContent = description;\n    dishDesc.classList.add(\"desc\");\n\n    menuItem.appendChild(dishName);\n    menuItem.appendChild(dishPrice);\n    menuItem.appendChild(dishDesc);\n\n    return menuItem;\n}\n\nfunction loadMenu(){\n    const main = document.getElementById(\"main\");\n    main.textContent = \"\";\n    main.appendChild(createMenu());\n}\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\n\n//# sourceURL=webpack://restaurant/./src/menu.js?");

/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\nfunction createHeader(){\n    const header = document.createElement(\"div\");\n    header.classList.add(\"header\");\n    //TITLE\n    const title = document.createElement(\"div\");\n    title.classList.add(\"title\");\n    title.textContent=\"CAFE DU SOLEIL\";\n    header.appendChild(title);\n    //NAV\n    const navContainer = document.createElement(\"div\");\n    navContainer.classList.add(\"nav-container\"); \n    //HOME\n    const home = document.createElement(\"div\");\n    home.classList.add(\"nav\");\n    home.textContent = \"HOME\";\n    setActiveButton(home);\n    home.addEventListener(\"click\", (e) => {\n        if (e.target.classList.contains(\"active\")) return;\n        setActiveButton(home);\n        (0,_home__WEBPACK_IMPORTED_MODULE_0__.default)();\n    })\n    \n    //MENU\n    const menu = document.createElement(\"div\");\n    menu.classList.add(\"nav\");\n    menu.textContent = \"MENU\";\n    menu.addEventListener(\"click\", (e) => {\n        console.log(e);\n        if (e.target.classList.contains(\"active\")) return;\n        setActiveButton(menu);\n        (0,_menu__WEBPACK_IMPORTED_MODULE_1__.default)();\n    })\n    \n    //CONTACT\n    const contact = document.createElement(\"div\");\n    contact.classList.add(\"nav\");\n    contact.style.marginRight = 0;\n    contact.textContent = \"CONTACT\";\n    contact.addEventListener(\"click\", (e) => {\n        console.log(e);\n        if (e.target.classList.contains(\"active\")) return;\n        setActiveButton(contact);\n        (0,_contact__WEBPACK_IMPORTED_MODULE_2__.default)();\n    })\n    \n\n    navContainer.appendChild(home);\n    navContainer.appendChild(menu);\n    navContainer.appendChild(contact);\n\n    header.appendChild(navContainer);\n\n    return header;\n}\n\nfunction createMain(){\n    const main = document.createElement(\"main\");\n    main.classList.add(\"main\");\n    main.setAttribute(\"id\", \"main\");\n    return main;\n}\n\nfunction setActiveButton(item){\n    const items = document.querySelectorAll(\".nav\");\n\n    items.forEach((item) =>{\n        if (item !== this){\n            item.classList.remove(\"active\");\n        }\n    });\n\n    item.classList.add(\"active\");\n\n}\n\n\nfunction initializeWebsite(){\n    const content = document.getElementById(\"content\");\n    content.appendChild(createHeader());\n    const outerBorder = document.createElement(\"div\");\n    outerBorder.classList.add(\"outer-border\");\n    const innerBorder = document.createElement(\"div\");\n    innerBorder.classList.add(\"inner-border\");\n\n    \n    innerBorder.appendChild(createMain());\n    outerBorder.appendChild(innerBorder);\n    content.appendChild(outerBorder);\n    \n\n    content.appendChild(createMain());\n    console.log(content);\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__.default)();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeWebsite);\n\n//# sourceURL=webpack://restaurant/./src/website.js?");

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