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
	
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../sass/main.scss\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
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
	  return "<p>" + data.name + "</p>";
	};
	
	exports.default = profile;

/***/ }
/******/ ]);
//# sourceMappingURL=index_bundle.js.map