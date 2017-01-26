/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!******************!*\
  !*** multi main ***!
  \******************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! ./src/js/index.js */1);


/***/ },
/* 1 */
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Home = __webpack_require__(/*! ./views/Home */ 2);
	
	var _Home2 = _interopRequireDefault(_Home);
	
	__webpack_require__(/*! ../sass/main.scss */ 7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_Home2.default.init();

/***/ },
/* 2 */
/*!******************************!*\
  !*** ./src/js/views/Home.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Person = __webpack_require__(/*! ../models/Person */ 3);
	
	var _Person2 = _interopRequireDefault(_Person);
	
	var _Mi = __webpack_require__(/*! ../models/Mi5 */ 4);
	
	var _Mi2 = _interopRequireDefault(_Mi);
	
	var _profile = __webpack_require__(/*! ../templates/profile */ 6);
	
	var _profile2 = _interopRequireDefault(_profile);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var mi5 = new _Mi2.default();
	
	var dan = new _Person2.default('Dan');
	var anthony = new _Person2.default('Anthony');
	var alex = new _Person2.default('Alex');
	var erin = new _Person2.default('Erin');
	
	var people = [dan, anthony, alex, erin];
	
	// const phone = {owner: dan, number: '0776253227'}
	
	// dan.call(phone, alex)
	
	// const mark = new Person('Mark')
	// dan.text(phone, alex, mark)
	
	exports.default = {
	  renderProfiles: function renderProfiles() {
	    var profiles = mi5.getProfiles(people);
	
	    for (var i = 0; profiles.length > i; i++) {
	      console.log((0, _profile2.default)(profiles[i]));
	      var profileTemplate = (0, _profile2.default)(profiles[i]);
	      var profileModule = document.getElementById('profile-wrapper');
	      console.log(profileModule);
	      profileModule.innerHTML = profileTemplate;
	    }
	  },
	  renderCompnents: function renderCompnents() {
	    for (var i = 0; people.length > i; i++) {
	      console.log(mi5.log(people[i]));
	    }
	  },
	  init: function init() {
	    this.renderProfiles();
	  }
	};

/***/ },
/* 3 */
/*!*********************************!*\
  !*** ./src/js/models/Person.js ***!
  \*********************************/
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var Person = function Person(name) {
	  var _this = this;
	
	  this.name = name;
	
	  var getName = function getName() {
	    return _this.name;
	  };
	
	  var text = function text() {
	    for (var _len = arguments.length, data = Array(_len), _key = 0; _key < _len; _key++) {
	      data[_key] = arguments[_key];
	    }
	
	    console.log(data);
	  };
	
	  var call = function call(caller, callee) {
	    console.log(caller);
	    console.log(callee.getName());
	  };
	
	  return {
	    getName: getName,
	    text: text,
	    call: call
	  };
	};
	
	exports.default = Person;

/***/ },
/* 4 */
/*!******************************!*\
  !*** ./src/js/models/Mi5.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _logs = __webpack_require__(/*! ../data/logs */ 5);
	
	var _logs2 = _interopRequireDefault(_logs);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Mi5 = function Mi5() {
	  var getProfiles = function getProfiles(people) {
	    return people.map(function (personRef, index) {
	      var person = _logs2.default[personRef.getName()];
	
	      return {
	        name: person.firstname + ' ' + person.surname,
	        number: person.number,
	        img: person.img
	      };
	    });
	  };
	
	  var log = function log(data) {
	    var person = _logs2.default[data.getName()];
	
	    var personLog = [];
	
	    if (person.log.length === 0) {
	      return ['No Entries'];
	    }
	
	    for (var i = 0; person.log.length > i; i++) {
	      var currentLog = person.log[i];
	      var logString = person.firstname + ' ' + currentLog.type + 'ed ' + currentLog.to.name + ' from ' + currentLog.from.name + '\'s phone (' + currentLog.from.number + ')';
	
	      personLog.push(logString);
	    }
	    return personLog;
	  };
	
	  return {
	    log: log,
	    getProfiles: getProfiles
	  };
	};
	
	exports.default = Mi5;

/***/ },
/* 5 */
/*!*****************************!*\
  !*** ./src/js/data/logs.js ***!
  \*****************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  'Dan': {
	    'firstname': 'Dan',
	    'surname': 'Winters',
	    'number': '07874-438205',
	    'img': 'Dan_winters.png',
	    'log': [{
	      'type': 'call',
	      'to': {
	        'name': 'Bruce',
	        'number': '07828-382356'
	      },
	      'from': {
	        'name': 'Dan',
	        'number': '07874-438205'
	      }
	    }, {
	      'type': 'call',
	      'to': {
	        'name': 'Clark',
	        'number': '07643-333655'
	      },
	      'from': {
	        'name': 'Dan',
	        'number': '07874-438205'
	      }
	    }, {
	      'type': 'text',
	      'to': {
	        'name': 'Diana',
	        'number': '07647-879843'
	      },
	      'from': {
	        'name': 'Clark',
	        'number': '07643-333655'
	      }
	    }]
	  },
	  'Anthony': {
	    'firstname': 'Anthony',
	    'surname': 'Miles',
	    'number': '07723-337466',
	    'img': 'Anthony_miles.png',
	    'log': [{
	      'type': 'call',
	      'to': {
	        'name': 'Barry',
	        'number': '07635-983749'
	      },
	      'from': {
	        'name': 'Anthony',
	        'number': '07723-337466'
	      }
	    }, {
	      'type': 'text',
	      'to': {
	        'name': 'Wally',
	        'number': '07644-333655'
	      },
	      'from': {
	        'name': 'Dan',
	        'number': '07874-438205'
	      }
	    }]
	  },
	  'Alex': {
	    'firstname': 'Alex',
	    'surname': 'Lambert',
	    'number': '0764-333655',
	    'img': 'Alex_lambert.png',
	    'log': []
	  },
	  'Erin': {
	    'firstname': 'Erin',
	    'surname': 'Davis',
	    'number': '07375-229473',
	    'img': 'Erin_davis.png',
	    'log': [{
	      'type': 'call',
	      'to': {
	        'name': 'Dan',
	        'number': '07874-438205'
	      },
	      'from': {
	        'name': 'Erin',
	        'number': '07375-229473'
	      }
	    }, {
	      'type': 'text',
	      'to': {
	        'name': 'Anthony',
	        'number': '07723-337466'
	      },
	      'from': {
	        'name': 'Anthony',
	        'number': '07723-337466'
	      }
	    }, {
	      'type': 'text',
	      'to': {
	        'name': 'Alex',
	        'number': '0764-333655'
	      },
	      'from': {
	        'name': 'Dan',
	        'number': '07874-438205'
	      }
	    }]
	  }
	};

/***/ },
/* 6 */
/*!*************************************!*\
  !*** ./src/js/templates/profile.js ***!
  \*************************************/
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var profile = function profile(data) {
	  return "<div class=\"grid-6\">\n      <a href=\"#\" class=\"profile-link\">\n        <div class=\"profile-card\">\n          <div class=\"profile-pic\" style=\"background-image: url(_includes/img/profiles/" + data.img + ")\"></div>\n          <div class=\"details\">\n            <h2>" + data.name + "</h2>\n            <h3>" + data.number + "</h3>\n          </div>\n        </div>\n      </a>\n    </div>";
	};
	
	exports.default = profile;

/***/ },
/* 7 */
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../~/css-loader!./../../~/sass-loader!./main.scss */ 8);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../~/style-loader/addStyles.js */ 13)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./main.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./main.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 8 */
/*!***********************************************************!*\
  !*** ./~/css-loader!./~/sass-loader!./src/sass/main.scss ***!
  \***********************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../~/css-loader/lib/css-base.js */ 9)();
	// imports
	
	
	// module
	exports.push([module.id, "/*********************\n\nAuthors:\n\tJay Tang\n\nStylesheet:\n\tMain stylesheet\n\n*********************/\n/******************************************************************\nUtilities\n******************************************************************/\n/*********************\n\nAuthors:\n\tJay Tang\n\nStylesheet:\n\tVariables stylesheet\n\n*********************/\n/*********************************************************************\n\n** Sassian - Utilities - Reset **\n\nAbout:\n\n    CSS Reset, makes all the browsers start from a base level.\n\n\n*********************************************************************/\nhtml, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\narticle, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {\n  display: block; }\n\nbody {\n  line-height: 1; }\n\nol, ul {\n  list-style: none; }\n\nblockquote, q {\n  quotes: none; }\n\nblockquote:before, blockquote:after, q:before, q:after {\n  content: '';\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\n* {\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n/******************************************************************\n\nSassian\n\nStylesheet: Responsive breakpoints mixin\n\nHow to use:\n\nIn your variables file, define a list:\n\n\t$breakpoints: (\n\t    (phone \t\t320px)\n\t    (tablet \t680px)\n\t    (desktop \t1170px)\n\t    (extended \t1440px)\n\t)\n\n******** Hint ********\nYou can add as many or as a few breakpoints as your like, it is best to name\nthem in a way that is understood across all departments (UX, Design) as it\nmakes communications easier during bug fixing / change requests.\n**********************\n\nTo wrap your Sass in a media query, call it as like so:\n\n\t@include breakpoint(breakpointName) {\n\t\t// Sass here\n\t}\n\nReplace breakpointName with a matching name in your list\n(in this example: phone / tablet / desktop / extended)\n\n\n**** Legacy Browsers ****\n\nFor older browsers that don't support media queries this mixin supports\nturning off the media query, and just returning the CSS.\n\nIn your legacy scss file set this variable:\n\n\t$IE: false;\n\nAnd then import your entire main scss file below:\n\n\t// Turn off media queries for IE stylesheet\n\t$IE: false;\n\n\t@import \"main\";\n\n\n******************************************************************/\n/******************************************************************\n\n** Sassian - Utilities - Grid **\n\nAbout:\n\n\tA really leightweight simple grid system. If you want to use\n\tsomething more extensive feel free, this is designed to get\n\tyou started quickly\n\n\nUsage:\n\n\tIn _variables.scss define your grid variables:\n\n\t\t$grid-columns : 12; // Number of columns\n\t\t$grid-width : 1170px; // Total page width\n\t\t$grid-gutter : 15px; // Left / Right gutter on each column\n\t\t$grid-padding-outer : 30px; // Padding from grid outer edge to content. Generally double the gutter.\n\n\t<div class=\"grid\">\n\t\t<div class=\"grid-10\">\n\t\t\t<!-- 8 columns -->\n\t\t</div>\n\t\t<div class=\"grid-3 offset-1\">\n\t\t\t<!-- 3 columns, offset by 1 column -->\n\t\t</div>\n\t</div>\n\nExample:\n\n\t<a href=\"#\" class=\"icon fa-comment-o\">Leave a comment</a>\n\n\t<a href=\"#\" class=\"icon fa-thumbs-o-up\">Thumbs up</a>\n\n******************************************************************/\n.grid {\n  margin: 0 auto;\n  width: 100%; }\n  @media all and (min-width: 960px) {\n    .grid {\n      position: relative;\n      max-width: 960px; } }\n  .grid:after {\n    content: \"\";\n    display: table;\n    clear: both; }\n\n.grid-1, .grid-2, .grid-3, .grid-4, .grid-5, .grid-6, .grid-7, .grid-8, .grid-9, .grid-10, .grid-11, .grid-12 {\n  float: left;\n  padding: 0 10px; }\n  @media all and (max-width: 960px) {\n    .grid-1, .grid-2, .grid-3, .grid-4, .grid-5, .grid-6, .grid-7, .grid-8, .grid-9, .grid-10, .grid-11, .grid-12 {\n      width: 100% !important; } }\n\n.grid-1 {\n  width: 8.33333%; }\n\n.grid-2 {\n  width: 16.66667%; }\n\n.grid-3 {\n  width: 25%; }\n\n.grid-4 {\n  width: 33.33333%; }\n\n.grid-5 {\n  width: 41.66667%; }\n\n.grid-6 {\n  width: 50%; }\n\n.grid-7 {\n  width: 58.33333%; }\n\n.grid-8 {\n  width: 66.66667%; }\n\n.grid-9 {\n  width: 75%; }\n\n.grid-10 {\n  width: 83.33333%; }\n\n.grid-11 {\n  width: 91.66667%; }\n\n.grid-12 {\n  width: 100%; }\n\n@media all and (min-width: 960px) {\n  .offset-1 {\n    margin-left: 8.33333%; }\n  .offset-2 {\n    margin-left: 16.66667%; }\n  .offset-3 {\n    margin-left: 25%; }\n  .offset-4 {\n    margin-left: 33.33333%; }\n  .offset-5 {\n    margin-left: 41.66667%; }\n  .offset-6 {\n    margin-left: 50%; }\n  .offset-7 {\n    margin-left: 58.33333%; }\n  .offset-8 {\n    margin-left: 66.66667%; }\n  .offset-9 {\n    margin-left: 75%; }\n  .offset-10 {\n    margin-left: 83.33333%; }\n  .offset-11 {\n    margin-left: 91.66667%; }\n  .offset-12 {\n    margin-left: 100%; } }\n\n.no-gutter {\n  padding: 0; }\n\n/*********************\n\nAuthors:\n\tJay Tang\n\nStylesheet:\n\tFonts\n\n*********************/\n@font-face {\n  font-family: 'RobotoBlack';\n  src: font-url(\"Roboto-Black.ttf\") format(\"truetype\");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: 'Roboto';\n  src: font-url(\"Roboto-Regular.ttf\") format(\"truetype\");\n  font-weight: normal;\n  font-style: normal; }\n\n/*********************\n\nAuthors:\n\tJay Tang\n\nStylesheet:\n\tBase stylesheet\n\n*********************/\nbody {\n  background-color: #0f1d2e;\n  color: #ffbead;\n  font-size: 100%;\n  line-height: 100%;\n  font-family: \"Roboto\", \"HelveticaNeue-Light\", \"Helvetica Neue Light\", \"Helvetica Neue\", Helvetica, Arial, \"Lucida Grande\", sans-serif;\n  font-weight: 300;\n  background-image: url(" + __webpack_require__(/*! ../img/backgrounds/Background_pattern.png */ 10) + ");\n  background-repeat: no-repeat; }\n\n* {\n  -webkit-tap-highlight-color: transparent; }\n\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\ndiv {\n  margin: 0;\n  padding: 0;\n  font-weight: normal;\n  -webkit-text-rendering: optimizeLegibility;\n  -moz-text-rendering: optimizeLegibility;\n  -ms-text-rendering: optimizeLegibility;\n  -o-text-rendering: optimizeLegibility;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-font-smoothing: antialiased;\n  -ms-font-smoothing: antialiased;\n  -o-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-smoothing: antialiased; }\n\nh1 {\n  font-size: 25px;\n  line-height: 1em;\n  font-weight: 600;\n  color: #39649f;\n  padding-bottom: 10px;\n  border-bottom: 1px solid #39649f; }\n  @media all and (max-width: 680px) {\n    h1 {\n      font-size: 18px; } }\n\nh2 {\n  font-size: 25px;\n  font-weight: 600;\n  margin: 10px 0;\n  color: #ffbead;\n  line-height: 0.9; }\n  @media all and (max-width: 680px) {\n    h2 {\n      font-size: 35px;\n      line-height: 1.1; } }\n\nh3 {\n  font-size: 24px;\n  color: #39649f;\n  line-height: 0.9;\n  font-family: \"RobotoBlack\", \"HelveticaNeue-Light\", \"Helvetica Neue Light\", \"Helvetica Neue\", Helvetica, Arial, \"Lucida Grande\", sans-serif;\n  font-weight: 600; }\n  @media all and (max-width: 680px) {\n    h3 {\n      font-size: 20px; } }\n\np {\n  font-size: 16px;\n  line-height: 24px;\n  padding: 10px 0; }\n\na {\n  text-decoration: none;\n  color: inherit; }\n\nol {\n  list-style-type: decimal; }\n  ol li {\n    margin-left: 15px;\n    margin-bottom: 10px; }\n\nstrong {\n  font-weight: 600; }\n\nsmall {\n  font-size: 14px; }\n\ni {\n  display: inline-block;\n  background-repeat: no-repeat; }\n\n.hide {\n  display: none; }\n\n.clearfix:after {\n  content: \"\";\n  display: table;\n  clear: both; }\n\n/******************************************************************\nModules\n******************************************************************/\n/*********************\n\nAuthors:\n\tJay Tang\n\nStylesheet:\n\tHeader module stylesheet\n\n*********************/\nheader {\n  padding: 75px 0 100px 140px; }\n  header .logo {\n    width: 300px;\n    height: 80px;\n    background-image: url(" + __webpack_require__(/*! ../img/icons/logo.png */ 11) + ");\n    background-repeat: no-repeat;\n    background-size: contain;\n    background-position: center; }\n\n/*********************\n\nAuthors:\n\tJay Tang\n\nStylesheet:\n\tProfile module stylesheet\n\n*********************/\n.profile-card {\n  background-color: #162941;\n  line-height: 0;\n  margin-bottom: 20px; }\n  .profile-card div {\n    display: inline-block; }\n\n.profile-pic {\n  width: 150px;\n  height: 166px;\n  background-image: url(" + __webpack_require__(/*! ../img/profiles/Alex_lambert.png */ 12) + ");\n  background-repeat: no-repeat;\n  background-size: contain; }\n\n.details {\n  vertical-align: top;\n  padding: 40px 0 0 40px; }\n\n/******************************************************************\nViews\n******************************************************************/\n/*********************\n\nAuthors:\n\tJay Tang\n\nStylesheet:\n\tHome stylesheet\n\n*********************/\n.home {\n  min-height: 100vh;\n  padding-left: 140px; }\n\n.profile-wrapper {\n  padding-top: 40px; }\n", ""]);
	
	// exports


/***/ },
/* 9 */
/*!**************************************!*\
  !*** ./~/css-loader/lib/css-base.js ***!
  \**************************************/
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 10 */
/*!****************************************************!*\
  !*** ./src/img/backgrounds/Background_pattern.png ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_includes/img/backgrounds/Background_pattern.png";

/***/ },
/* 11 */
/*!********************************!*\
  !*** ./src/img/icons/logo.png ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_includes/img/icons/logo.png";

/***/ },
/* 12 */
/*!*******************************************!*\
  !*** ./src/img/profiles/Alex_lambert.png ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_includes/img/profiles/Alex_lambert.png";

/***/ },
/* 13 */
/*!*************************************!*\
  !*** ./~/style-loader/addStyles.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(true) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ]);
//# sourceMappingURL=index_bundle.js.map