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
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(151)
	var __weex_template__ = __webpack_require__(155)
	var __weex_style__ = __webpack_require__(156)
	var __weex_script__ = __webpack_require__(157)
	
	__weex_define__('@weex-component/7fe809b6ef433bd820f3d65cae8c086b', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})
	
	__weex_bootstrap__('@weex-component/7fe809b6ef433bd820f3d65cae8c086b',undefined,undefined)

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 22 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 23 */,
/* 24 */,
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(26)
	  , core      = __webpack_require__(27)
	  , ctx       = __webpack_require__(28)
	  , hide      = __webpack_require__(30)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 26 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 27 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(29);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(31)
	  , createDesc = __webpack_require__(39);
	module.exports = __webpack_require__(35) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(32)
	  , IE8_DOM_DEFINE = __webpack_require__(34)
	  , toPrimitive    = __webpack_require__(38)
	  , dP             = Object.defineProperty;
	
	exports.f = __webpack_require__(35) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(33);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(35) && !__webpack_require__(36)(function(){
	  return Object.defineProperty(__webpack_require__(37)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(36)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 36 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(33)
	  , document = __webpack_require__(26).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(33);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 40 */,
/* 41 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(47)
	  , enumBugKeys = __webpack_require__(57);
	
	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(41)
	  , toIObject    = __webpack_require__(48)
	  , arrayIndexOf = __webpack_require__(51)(false)
	  , IE_PROTO     = __webpack_require__(54)('IE_PROTO');
	
	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(49)
	  , defined = __webpack_require__(22);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(50);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 50 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(48)
	  , toLength  = __webpack_require__(52)
	  , toIndex   = __webpack_require__(53);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(21)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(21)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(55)('keys')
	  , uid    = __webpack_require__(56);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(26)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 56 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 57 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(22);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 76 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(85);
	__webpack_require__(89);
	__webpack_require__(93);
	__webpack_require__(97);
	__webpack_require__(101);
	__webpack_require__(105);
	__webpack_require__(113);
	__webpack_require__(117);
	__webpack_require__(121);
	__webpack_require__(125);
	__webpack_require__(126);


/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(86)
	var __weex_style__ = __webpack_require__(87)
	var __weex_script__ = __webpack_require__(88)
	
	__weex_define__('@weex-component/wxc-button', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})


/***/ },
/* 86 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": function () {return ['btn', 'btn-' + (this.type), 'btn-sz-' + (this.size)]},
	  "children": [
	    {
	      "type": "text",
	      "classList": function () {return ['btn-txt', 'btn-txt-' + (this.type), 'btn-txt-sz-' + (this.size)]},
	      "attr": {
	        "value": function () {return this.value}
	      }
	    }
	  ]
	}

/***/ },
/* 87 */
/***/ function(module, exports) {

	module.exports = {
	  "btn": {
	    "marginBottom": 0,
	    "alignItems": "center",
	    "justifyContent": "center",
	    "borderWidth": 1,
	    "borderStyle": "solid",
	    "borderColor": "#333333"
	  },
	  "btn-default": {
	    "color": "rgb(51,51,51)"
	  },
	  "btn-primary": {
	    "backgroundColor": "rgb(40,96,144)",
	    "borderColor": "rgb(40,96,144)"
	  },
	  "btn-success": {
	    "backgroundColor": "rgb(92,184,92)",
	    "borderColor": "rgb(76,174,76)"
	  },
	  "btn-info": {
	    "backgroundColor": "rgb(91,192,222)",
	    "borderColor": "rgb(70,184,218)"
	  },
	  "btn-warning": {
	    "backgroundColor": "rgb(240,173,78)",
	    "borderColor": "rgb(238,162,54)"
	  },
	  "btn-danger": {
	    "backgroundColor": "rgb(217,83,79)",
	    "borderColor": "rgb(212,63,58)"
	  },
	  "btn-link": {
	    "borderColor": "rgba(0,0,0,0)",
	    "borderRadius": 0
	  },
	  "btn-txt-default": {
	    "color": "rgb(51,51,51)"
	  },
	  "btn-txt-primary": {
	    "color": "rgb(255,255,255)"
	  },
	  "btn-txt-success": {
	    "color": "rgb(255,255,255)"
	  },
	  "btn-txt-info": {
	    "color": "rgb(255,255,255)"
	  },
	  "btn-txt-warning": {
	    "color": "rgb(255,255,255)"
	  },
	  "btn-txt-danger": {
	    "color": "rgb(255,255,255)"
	  },
	  "btn-txt-link": {
	    "color": "rgb(51,122,183)"
	  },
	  "btn-sz-large": {
	    "width": 300,
	    "height": 100,
	    "paddingTop": 25,
	    "paddingBottom": 25,
	    "paddingLeft": 40,
	    "paddingRight": 40,
	    "borderRadius": 15
	  },
	  "btn-sz-middle": {
	    "width": 240,
	    "height": 80,
	    "paddingTop": 15,
	    "paddingBottom": 15,
	    "paddingLeft": 30,
	    "paddingRight": 30,
	    "borderRadius": 10
	  },
	  "btn-sz-small": {
	    "width": 170,
	    "height": 60,
	    "paddingTop": 12,
	    "paddingBottom": 12,
	    "paddingLeft": 25,
	    "paddingRight": 25,
	    "borderRadius": 7
	  },
	  "btn-txt-sz-large": {
	    "fontSize": 45
	  },
	  "btn-txt-sz-middle": {
	    "fontSize": 35
	  },
	  "btn-txt-sz-small": {
	    "fontSize": 30
	  }
	}

/***/ },
/* 88 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';
	
	module.exports = {
	  data: function () {return {
	    type: 'default',
	    size: 'large',
	    value: ''
	  }},
	  methods: {}
	};}
	/* generated by weex-loader */


/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(90)
	var __weex_style__ = __webpack_require__(91)
	var __weex_script__ = __webpack_require__(92)
	
	__weex_define__('@weex-component/wxc-hn', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})


/***/ },
/* 90 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": function () {return ['h' + (this.level)]},
	  "style": {
	    "justifyContent": "center"
	  },
	  "children": [
	    {
	      "type": "text",
	      "classList": function () {return ['txt-h' + (this.level)]},
	      "attr": {
	        "value": function () {return this.value}
	      }
	    }
	  ]
	}

/***/ },
/* 91 */
/***/ function(module, exports) {

	module.exports = {
	  "h1": {
	    "height": 110,
	    "paddingTop": 20,
	    "paddingBottom": 20
	  },
	  "h2": {
	    "height": 110,
	    "paddingTop": 20,
	    "paddingBottom": 20
	  },
	  "h3": {
	    "height": 110,
	    "paddingTop": 20,
	    "paddingBottom": 20
	  },
	  "txt-h1": {
	    "fontSize": 70
	  },
	  "txt-h2": {
	    "fontSize": 52
	  },
	  "txt-h3": {
	    "fontSize": 42
	  }
	}

/***/ },
/* 92 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';
	
	module.exports = {
	  data: function () {return {
	    level: 1,
	    value: ''
	  }},
	  methods: {}
	};}
	/* generated by weex-loader */


/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(94)
	var __weex_style__ = __webpack_require__(95)
	var __weex_script__ = __webpack_require__(96)
	
	__weex_define__('@weex-component/wxc-list-item', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})


/***/ },
/* 94 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "item"
	  ],
	  "events": {
	    "touchstart": "touchstart",
	    "touchend": "touchend"
	  },
	  "style": {
	    "backgroundColor": function () {return this.bgColor}
	  },
	  "children": [
	    {
	      "type": "content"
	    }
	  ]
	}

/***/ },
/* 95 */
/***/ function(module, exports) {

	module.exports = {
	  "item": {
	    "paddingTop": 25,
	    "paddingBottom": 25,
	    "paddingLeft": 35,
	    "paddingRight": 35,
	    "height": 160,
	    "justifyContent": "center",
	    "borderBottomWidth": 1,
	    "borderColor": "#dddddd"
	  }
	}

/***/ },
/* 96 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';
	
	module.exports = {
	  data: function () {return {
	    bgColor: '#ffffff'
	  }},
	  methods: {
	    touchstart: function touchstart() {},
	    touchend: function touchend() {}
	  }
	};}
	/* generated by weex-loader */


/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(98)
	var __weex_style__ = __webpack_require__(99)
	var __weex_script__ = __webpack_require__(100)
	
	__weex_define__('@weex-component/wxc-panel', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})


/***/ },
/* 98 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": function () {return ['panel', 'panel-' + (this.type)]},
	  "style": {
	    "borderWidth": function () {return this.border}
	  },
	  "children": [
	    {
	      "type": "text",
	      "classList": function () {return ['panel-header', 'panel-header-' + (this.type)]},
	      "style": {
	        "paddingTop": function () {return this.paddingHead},
	        "paddingBottom": function () {return this.paddingHead},
	        "paddingLeft": function () {return this.paddingHead*1.5},
	        "paddingRight": function () {return this.paddingHead*1.5}
	      },
	      "attr": {
	        "value": function () {return this.title}
	      }
	    },
	    {
	      "type": "div",
	      "classList": function () {return ['panel-body', 'panel-body-' + (this.type)]},
	      "style": {
	        "paddingTop": function () {return this.paddingBody},
	        "paddingBottom": function () {return this.paddingBody},
	        "paddingLeft": function () {return this.paddingBody*1.5},
	        "paddingRight": function () {return this.paddingBody*1.5}
	      },
	      "children": [
	        {
	          "type": "content"
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 99 */
/***/ function(module, exports) {

	module.exports = {
	  "panel": {
	    "marginBottom": 20,
	    "backgroundColor": "#ffffff",
	    "borderColor": "#dddddd",
	    "borderWidth": 1
	  },
	  "panel-primary": {
	    "borderColor": "rgb(40,96,144)"
	  },
	  "panel-success": {
	    "borderColor": "rgb(76,174,76)"
	  },
	  "panel-info": {
	    "borderColor": "rgb(70,184,218)"
	  },
	  "panel-warning": {
	    "borderColor": "rgb(238,162,54)"
	  },
	  "panel-danger": {
	    "borderColor": "rgb(212,63,58)"
	  },
	  "panel-header": {
	    "backgroundColor": "#f5f5f5",
	    "fontSize": 40,
	    "color": "#333333"
	  },
	  "panel-header-primary": {
	    "backgroundColor": "rgb(40,96,144)",
	    "color": "#ffffff"
	  },
	  "panel-header-success": {
	    "backgroundColor": "rgb(92,184,92)",
	    "color": "#ffffff"
	  },
	  "panel-header-info": {
	    "backgroundColor": "rgb(91,192,222)",
	    "color": "#ffffff"
	  },
	  "panel-header-warning": {
	    "backgroundColor": "rgb(240,173,78)",
	    "color": "#ffffff"
	  },
	  "panel-header-danger": {
	    "backgroundColor": "rgb(217,83,79)",
	    "color": "#ffffff"
	  },
	  "panel-body": {}
	}

/***/ },
/* 100 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';
	
	module.exports = {
	  data: function () {return {
	    type: 'default',
	    title: '',
	    paddingBody: 20,
	    paddingHead: 20,
	    dataClass: '',
	    border: 0
	  }},
	  ready: function ready() {}
	};}
	/* generated by weex-loader */


/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(102)
	var __weex_style__ = __webpack_require__(103)
	var __weex_script__ = __webpack_require__(104)
	
	__weex_define__('@weex-component/wxc-tip', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})


/***/ },
/* 102 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": function () {return ['tip', 'tip-' + (this.type)]},
	  "children": [
	    {
	      "type": "text",
	      "classList": function () {return ['tip-txt', 'tip-txt-' + (this.type)]},
	      "attr": {
	        "value": function () {return this.value}
	      }
	    }
	  ]
	}

/***/ },
/* 103 */
/***/ function(module, exports) {

	module.exports = {
	  "tip": {
	    "paddingLeft": 36,
	    "paddingRight": 36,
	    "paddingTop": 36,
	    "paddingBottom": 36,
	    "borderRadius": 10
	  },
	  "tip-txt": {
	    "fontSize": 28
	  },
	  "tip-success": {
	    "backgroundColor": "#dff0d8",
	    "borderColor": "#d6e9c6"
	  },
	  "tip-txt-success": {
	    "color": "#3c763d"
	  },
	  "tip-info": {
	    "backgroundColor": "#d9edf7",
	    "borderColor": "#bce8f1"
	  },
	  "tip-txt-info": {
	    "color": "#31708f"
	  },
	  "tip-warning": {
	    "backgroundColor": "#fcf8e3",
	    "borderColor": "#faebcc"
	  },
	  "tip-txt-warning": {
	    "color": "#8a6d3b"
	  },
	  "tip-danger": {
	    "backgroundColor": "#f2dede",
	    "borderColor": "#ebccd1"
	  },
	  "tip-txt-danger": {
	    "color": "#a94442"
	  }
	}

/***/ },
/* 104 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';
	
	module.exports = {
	  data: function () {return {
	    type: 'success',
	    value: ''
	  }}
	};}
	/* generated by weex-loader */


/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(106)
	var __weex_style__ = __webpack_require__(107)
	var __weex_script__ = __webpack_require__(108)
	
	__weex_define__('@weex-component/wxc-countdown', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})


/***/ },
/* 106 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "style": {
	    "overflow": "hidden",
	    "flexDirection": "row"
	  },
	  "events": {
	    "appear": "appeared",
	    "disappear": "disappeared"
	  },
	  "children": [
	    {
	      "type": "content"
	    }
	  ]
	}

/***/ },
/* 107 */
/***/ function(module, exports) {

	module.exports = {
	  "wrap": {
	    "overflow": "hidden"
	  }
	}

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';
	
	var _assign = __webpack_require__(109);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = {
	    data: function () {return {
	        now: 0,
	        remain: 0,
	        time: {
	            elapse: 0,
	            D: '0',
	            DD: '0',
	            h: '0',
	            hh: '00',
	            H: '0',
	            HH: '0',
	            m: '0',
	            mm: '00',
	            M: '0',
	            MM: '0',
	            s: '0',
	            ss: '00',
	            S: '0',
	            SS: '0'
	        },
	        outofview: false
	    }},
	    ready: function ready() {
	        if (this.remain <= 0) {
	            return;
	        }
	
	        this.now = Date.now();
	        this.nextTick();
	    },
	    methods: {
	        nextTick: function nextTick() {
	            if (this.outofview) {
	                setTimeout(this.nextTick.bind(this), 1000);
	            } else {
	                this.time.elapse = parseInt((Date.now() - this.now) / 1000);
	
	                if (this.calc()) {
	                    this.$emit('tick', (0, _assign2.default)({}, this.time));
	                    setTimeout(this.nextTick.bind(this), 1000);
	                } else {
	                    this.$emit('alarm', (0, _assign2.default)({}, this.time));
	                }
	                this._app.updateActions();
	            }
	        },
	        format: function format(str) {
	            if (str.length >= 2) {
	                return str;
	            } else {
	                return '0' + str;
	            }
	        },
	        calc: function calc() {
	            var remain = this.remain - this.time.elapse;
	            if (remain < 0) {
	                remain = 0;
	            }
	            this.time.D = String(parseInt(remain / 86400));
	            this.time.DD = this.format(this.time.D);
	            this.time.h = String(parseInt((remain - parseInt(this.time.D) * 86400) / 3600));
	            this.time.hh = this.format(this.time.h);
	            this.time.H = String(parseInt(remain / 3600));
	            this.time.HH = this.format(this.time.H);
	            this.time.m = String(parseInt((remain - parseInt(this.time.H) * 3600) / 60));
	            this.time.mm = this.format(this.time.m);
	            this.time.M = String(parseInt(remain / 60));
	            this.time.MM = this.format(this.time.M);
	            this.time.s = String(remain - parseInt(this.time.M) * 60);
	            this.time.ss = this.format(this.time.s);
	            this.time.S = String(remain);
	            this.time.SS = this.format(this.time.S);
	
	            return remain > 0;
	        },
	        appeared: function appeared() {
	            this.outofview = false;
	        },
	        disappeared: function disappeared() {
	            this.outofview = true;
	        }
	    }
	};}
	/* generated by weex-loader */


/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(110), __esModule: true };

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(111);
	module.exports = __webpack_require__(27).Object.assign;

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(25);
	
	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(112)});

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(46)
	  , gOPS     = __webpack_require__(75)
	  , pIE      = __webpack_require__(76)
	  , toObject = __webpack_require__(62)
	  , IObject  = __webpack_require__(49)
	  , $assign  = Object.assign;
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(36)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(114)
	var __weex_style__ = __webpack_require__(115)
	var __weex_script__ = __webpack_require__(116)
	
	__weex_define__('@weex-component/wxc-marquee', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})


/***/ },
/* 114 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "wrap"
	  ],
	  "events": {
	    "appear": "appeared",
	    "disappear": "disappeared"
	  },
	  "children": [
	    {
	      "type": "div",
	      "id": "anim",
	      "classList": [
	        "anim"
	      ],
	      "children": [
	        {
	          "type": "content"
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 115 */
/***/ function(module, exports) {

	module.exports = {
	  "wrap": {
	    "overflow": "hidden",
	    "position": "relative"
	  },
	  "anim": {
	    "flexDirection": "column",
	    "position": "absolute",
	    "transform": "translateY(0) translateZ(0)"
	  }
	}

/***/ },
/* 116 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';
	
	module.exports = {
	    data: function () {return {
	        step: 0,
	        count: 0,
	        index: 1,
	        duration: 0,
	        interval: 0,
	        outofview: false
	    }},
	    ready: function ready() {
	        if (this.interval > 0 && this.step > 0 && this.duration > 0) {
	            this.nextTick();
	        }
	    },
	    methods: {
	        nextTick: function nextTick() {
	            var self = this;
	            if (this.outofview) {
	                setTimeout(self.nextTick.bind(self), self.interval);
	            } else {
	                setTimeout(function () {
	                    self.animation(self.nextTick.bind(self));
	                }, self.interval);
	            }
	        },
	        animation: function animation(cb) {
	            var self = this;
	            var offset = -self.step * self.index;
	            var $animation = __weex_require__('@weex-module/animation');
	            $animation.transition(this.$el('anim'), {
	                styles: {
	                    transform: 'translateY(' + String(offset) + 'px) translateZ(0)'
	                },
	                timingFunction: 'ease',
	                duration: self.duration
	            }, function () {
	                self.index = (self.index + 1) % self.count;
	                self.$emit('change', {
	                    index: self.index,
	                    count: self.count
	                });
	                cb && cb();
	            });
	        },
	        appeared: function appeared() {
	            this.outofview = false;
	        },
	        disappeared: function disappeared() {
	            this.outofview = true;
	        }
	    }
	};}
	/* generated by weex-loader */


/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(118)
	var __weex_style__ = __webpack_require__(119)
	var __weex_script__ = __webpack_require__(120)
	
	__weex_define__('@weex-component/wxc-navbar', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})


/***/ },
/* 118 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "container"
	  ],
	  "style": {
	    "height": function () {return this.height},
	    "backgroundColor": function () {return this.backgroundColor}
	  },
	  "attr": {
	    "dataRole": function () {return this.dataRole}
	  },
	  "children": [
	    {
	      "type": "text",
	      "classList": [
	        "right-text"
	      ],
	      "style": {
	        "color": function () {return this.rightItemColor}
	      },
	      "attr": {
	        "naviItemPosition": "right",
	        "value": function () {return this.rightItemTitle}
	      },
	      "shown": function () {return !this.rightItemSrc},
	      "events": {
	        "click": "onclickrightitem"
	      }
	    },
	    {
	      "type": "image",
	      "classList": [
	        "right-image"
	      ],
	      "attr": {
	        "naviItemPosition": "right",
	        "src": function () {return this.rightItemSrc}
	      },
	      "shown": function () {return this.rightItemSrc},
	      "events": {
	        "click": "onclickrightitem"
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "left-text"
	      ],
	      "style": {
	        "color": function () {return this.leftItemColor}
	      },
	      "attr": {
	        "naviItemPosition": "left",
	        "value": function () {return this.leftItemTitle}
	      },
	      "shown": function () {return !this.leftItemSrc},
	      "events": {
	        "click": "onclickleftitem"
	      }
	    },
	    {
	      "type": "image",
	      "classList": [
	        "left-image"
	      ],
	      "attr": {
	        "naviItemPosition": "left",
	        "src": function () {return this.leftItemSrc}
	      },
	      "shown": function () {return this.leftItemSrc},
	      "events": {
	        "click": "onclickleftitem"
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "center-text"
	      ],
	      "style": {
	        "color": function () {return this.titleColor}
	      },
	      "attr": {
	        "naviItemPosition": "center",
	        "value": function () {return this.title}
	      }
	    }
	  ]
	}

/***/ },
/* 119 */
/***/ function(module, exports) {

	module.exports = {
	  "container": {
	    "flexDirection": "row",
	    "position": "fixed",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "width": 750
	  },
	  "right-text": {
	    "position": "absolute",
	    "bottom": 28,
	    "right": 32,
	    "textAlign": "right",
	    "fontSize": 32,
	    "fontFamily": "'Open Sans', sans-serif"
	  },
	  "left-text": {
	    "position": "absolute",
	    "bottom": 28,
	    "left": 32,
	    "textAlign": "left",
	    "fontSize": 32,
	    "fontFamily": "'Open Sans', sans-serif"
	  },
	  "center-text": {
	    "position": "absolute",
	    "bottom": 25,
	    "left": 172,
	    "right": 172,
	    "textAlign": "center",
	    "fontSize": 36,
	    "fontWeight": "bold"
	  },
	  "left-image": {
	    "position": "absolute",
	    "bottom": 20,
	    "left": 28,
	    "width": 50,
	    "height": 50
	  },
	  "right-image": {
	    "position": "absolute",
	    "bottom": 20,
	    "right": 28,
	    "width": 50,
	    "height": 50
	  }
	}

/***/ },
/* 120 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';
	
	module.exports = {
	  data: function () {return {
	    dataRole: 'navbar',
	
	    backgroundColor: 'black',
	
	    height: 88,
	
	    title: "",
	
	    titleColor: 'black',
	
	    rightItemSrc: '',
	
	    rightItemTitle: '',
	
	    rightItemColor: 'black',
	
	    leftItemSrc: '',
	
	    leftItemTitle: '',
	
	    leftItemColor: 'black'
	  }},
	  methods: {
	    onclickrightitem: function onclickrightitem(e) {
	      this.$dispatch('naviBar.rightItem.click', {});
	    },
	    onclickleftitem: function onclickleftitem(e) {
	      this.$dispatch('naviBar.leftItem.click', {});
	    }
	  }
	};}
	/* generated by weex-loader */


/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(117)
	var __weex_template__ = __webpack_require__(122)
	var __weex_style__ = __webpack_require__(123)
	var __weex_script__ = __webpack_require__(124)
	
	__weex_define__('@weex-component/wxc-navpage', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})


/***/ },
/* 122 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "wrapper"
	  ],
	  "children": [
	    {
	      "type": "wxc-navbar",
	      "attr": {
	        "dataRole": function () {return this.dataRole},
	        "height": function () {return this.height},
	        "backgroundColor": function () {return this.backgroundColor},
	        "title": function () {return this.title},
	        "titleColor": function () {return this.titleColor},
	        "leftItemSrc": function () {return this.leftItemSrc},
	        "leftItemTitle": function () {return this.leftItemTitle},
	        "leftItemColor": function () {return this.leftItemColor},
	        "rightItemSrc": function () {return this.rightItemSrc},
	        "rightItemTitle": function () {return this.rightItemTitle},
	        "rightItemColor": function () {return this.rightItemColor}
	      }
	    },
	    {
	      "type": "div",
	      "classList": [
	        "wrapper"
	      ],
	      "style": {
	        "marginTop": function () {return this.height}
	      },
	      "children": [
	        {
	          "type": "content"
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 123 */
/***/ function(module, exports) {

	module.exports = {
	  "wrapper": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0,
	    "width": 750
	  }
	}

/***/ },
/* 124 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';
	
	module.exports = {
	  data: function () {return {
	    dataRole: 'navbar',
	    backgroundColor: 'black',
	    height: 88,
	    title: "",
	    titleColor: 'black',
	    rightItemSrc: '',
	    rightItemTitle: '',
	    rightItemColor: 'black',
	    leftItemSrc: '',
	    leftItemTitle: '',
	    leftItemColor: 'black'
	  }}
	};}
	/* generated by weex-loader */


/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(126)
	var __weex_template__ = __webpack_require__(130)
	var __weex_style__ = __webpack_require__(131)
	var __weex_script__ = __webpack_require__(132)
	
	__weex_define__('@weex-component/wxc-tabbar', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})


/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(127)
	var __weex_style__ = __webpack_require__(128)
	var __weex_script__ = __webpack_require__(129)
	
	__weex_define__('@weex-component/wxc-tabitem', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})


/***/ },
/* 127 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "container"
	  ],
	  "style": {
	    "backgroundColor": function () {return this.backgroundColor}
	  },
	  "events": {
	    "click": "onclickitem"
	  },
	  "children": [
	    {
	      "type": "image",
	      "classList": [
	        "top-line"
	      ],
	      "attr": {
	        "src": "http://gtms03.alicdn.com/tps/i3/TB1mdsiMpXXXXXpXXXXNw4JIXXX-640-4.png"
	      }
	    },
	    {
	      "type": "image",
	      "classList": [
	        "tab-icon"
	      ],
	      "attr": {
	        "src": function () {return this.icon}
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "tab-text"
	      ],
	      "style": {
	        "color": function () {return this.titleColor}
	      },
	      "attr": {
	        "value": function () {return this.title}
	      }
	    }
	  ]
	}

/***/ },
/* 128 */
/***/ function(module, exports) {

	module.exports = {
	  "container": {
	    "flex": 1,
	    "flexDirection": "column",
	    "alignItems": "center",
	    "justifyContent": "center",
	    "height": 88
	  },
	  "top-line": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "height": 2
	  },
	  "tab-icon": {
	    "marginTop": 5,
	    "width": 40,
	    "height": 40
	  },
	  "tab-text": {
	    "marginTop": 5,
	    "textAlign": "center",
	    "fontSize": 20
	  }
	}

/***/ },
/* 129 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';
	
	module.exports = {
	  data: function () {return {
	    index: 0,
	    title: '',
	    titleColor: '#000000',
	    icon: '',
	    backgroundColor: '#ffffff'
	  }},
	  methods: {
	    onclickitem: function onclickitem(e) {
	      var vm = this;
	      var params = {
	        index: vm.index
	      };
	      vm.$dispatch('tabItem.onClick', params);
	    }
	  }
	};}
	/* generated by weex-loader */


/***/ },
/* 130 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "wrapper"
	  ],
	  "children": [
	    {
	      "type": "embed",
	      "classList": [
	        "content"
	      ],
	      "style": {
	        "visibility": function () {return this.visibility}
	      },
	      "repeat": function () {return this.tabItems},
	      "attr": {
	        "src": function () {return this.src},
	        "type": "weex"
	      }
	    },
	    {
	      "type": "div",
	      "classList": [
	        "tabbar"
	      ],
	      "append": "tree",
	      "children": [
	        {
	          "type": "wxc-tabitem",
	          "repeat": function () {return this.tabItems},
	          "attr": {
	            "index": function () {return this.index},
	            "icon": function () {return this.icon},
	            "title": function () {return this.title},
	            "titleColor": function () {return this.titleColor}
	          }
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 131 */
/***/ function(module, exports) {

	module.exports = {
	  "wrapper": {
	    "width": 750,
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0
	  },
	  "content": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0,
	    "marginTop": 0,
	    "marginBottom": 88
	  },
	  "tabbar": {
	    "flexDirection": "row",
	    "position": "fixed",
	    "bottom": 0,
	    "left": 0,
	    "right": 0,
	    "height": 88
	  }
	}

/***/ },
/* 132 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';
	
	module.exports = {
	  data: function () {return {
	    tabItems: [],
	    selectedIndex: 0,
	    selectedColor: '#ff0000',
	    unselectedColor: '#000000'
	  }},
	  created: function created() {
	    this.selected(this.selectedIndex);
	
	    this.$on('tabItem.onClick', function (e) {
	      var detail = e.detail;
	      this.selectedIndex = detail.index;
	      this.selected(detail.index);
	
	      var params = {
	        index: detail.index
	      };
	      this.$dispatch('tabBar.onClick', params);
	    });
	  },
	  methods: {
	    selected: function selected(index) {
	      for (var i = 0; i < this.tabItems.length; i++) {
	        var tabItem = this.tabItems[i];
	        if (i == index) {
	          tabItem.icon = tabItem.selectedImage;
	          tabItem.titleColor = this.selectedColor;
	          tabItem.visibility = 'visible';
	        } else {
	          tabItem.icon = tabItem.image;
	          tabItem.titleColor = this.unselectedColor;
	          tabItem.visibility = 'hidden';
	        }
	      }
	    }
	  }
	};}
	/* generated by weex-loader */


/***/ },
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(152)
	var __weex_style__ = __webpack_require__(153)
	var __weex_script__ = __webpack_require__(154)
	
	__weex_define__('@weex-component/vbaoli-tab-item', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})


/***/ },
/* 152 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "container"
	  ],
	  "style": {
	    "backgroundColor": function () {return this.backgroundColor}
	  },
	  "events": {
	    "click": "onclickitem"
	  },
	  "children": [
	    {
	      "type": "text",
	      "classList": [
	        "tab-text"
	      ],
	      "style": {
	        "color": function () {return this.titleColor}
	      },
	      "attr": {
	        "value": function () {return this.title}
	      }
	    },
	    {
	      "type": "image",
	      "classList": [
	        "top-line"
	      ],
	      "attr": {
	        "src": "http://gtms03.alicdn.com/tps/i3/TB1mdsiMpXXXXXpXXXXNw4JIXXX-640-4.png"
	      }
	    }
	  ]
	}

/***/ },
/* 153 */
/***/ function(module, exports) {

	module.exports = {
	  "container": {
	    "flex": 1,
	    "flexDirection": "column",
	    "alignItems": "center",
	    "justifyContent": "center",
	    "height": 74
	  },
	  "top-line": {
	    "position": "absolute",
	    "bottom": 0,
	    "left": 0,
	    "right": 0,
	    "height": 2
	  },
	  "tab-text": {
	    "marginTop": 5,
	    "textAlign": "center",
	    "fontSize": 24
	  }
	}

/***/ },
/* 154 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';
	
	var dom = __weex_require__('@weex-module/dom');
	module.exports = {
	    data: function () {return {
	        index: 0,
	        title: '',
	        titleColor: '#000000',
	        icon: '',
	        url: '',
	        backgroundColor: '#ffffff'
	    }},
	    methods: {
	        onclickitem: function onclickitem(e) {
	            var vm = this;
	            var params = {
	                index: vm.index
	            };
	            this._parent.$emit('select', params);
	        }
	    }
	};}
	/* generated by weex-loader */


/***/ },
/* 155 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "children": [
	    {
	      "type": "div",
	      "id": "tab",
	      "classList": [
	        "tab-bar"
	      ],
	      "append": "tree",
	      "children": [
	        {
	          "type": "vbaoli-tab-item",
	          "repeat": function () {return this.tabItems},
	          "attr": {
	            "index": function () {return this.index},
	            "title": function () {return this.title},
	            "titleColor": function () {return this.titleColor}
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "content"
	      ],
	      "style": {
	        "display": function () {return this.display}
	      },
	      "repeat": function () {return this.tabItems},
	      "children": [
	        {
	          "type": "embed",
	          "attr": {
	            "src": function () {return this.src},
	            "type": "weex"
	          }
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 156 */
/***/ function(module, exports) {

	module.exports = {
	  "tab-bar": {
	    "flexDirection": "row",
	    "height": 74,
	    "backgroundColor": "#ffffff"
	  }
	}

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';
	
	var dom = __weex_require__('@weex-module/dom');
	__webpack_require__(84);
	var apis = __webpack_require__(158);
	module.exports = {
	    data: function () {return {
	        baseUrl: '',
	        tabItems: [],
	        selectedIndex: 0,
	        selectedColor: '#ff9125',
	        unselectedColor: '#979797'
	    }},
	    created: function created() {
	        var bundleUrl = this.$getConfig().bundleUrl;
	        this.baseUrl = apis.getBaseUrl(bundleUrl);
	        for (var i = 0; i < this.tabItems.length; i++) {
	            var tabItem = this.tabItems[i];
	            tabItem.src = this.baseUrl + tabItem.src;
	        }
	        this.selected(this.selectedIndex);
	        this.$on('select', function (event) {
	            this.eventType = event.type;
	            var index = event.detail.index;
	            this.selectedIndex = index;
	            this.selected(index);
	        });
	    },
	    methods: {
	        selected: function selected(index) {
	            for (var i = 0; i < this.tabItems.length; i++) {
	                var tabItem = this.tabItems[i];
	                if (i == index) {
	                    tabItem.titleColor = this.selectedColor;
	                    tabItem.display = 'block';
	                } else {
	                    tabItem.titleColor = this.unselectedColor;
	                    tabItem.display = 'none';
	                }
	            }
	        }
	    }
	};}
	/* generated by weex-loader */


/***/ },
/* 158 */
/***/ function(module, exports) {

	/**
	 * Created by baidu on 16/6/8.
	 */
	
	
	// var stream = require('@weex-module/stream');//说是0.15已经支持,但是我没生效
	
	var stream
	__weex_define__('@weex-temp/api', function (__weex_require__) {
	    stream = __weex_require__('@weex-module/stream')
	});
	
	var apiURL = {
	    baseurl: 'http://v3.wufazhuce.com:8000/api',
	    homePage: '/hp/bymonth/',
	    readingCarousel: '/reading/carousel',
	    readingIndex: '/reading/index/',
	    essay: '/essay/',
	    serialcontent: '/serialcontent/',
	    question: '/question/',
	    carouselList: '/reading/carousel/',
	    movieList: '/movie/list/',
	    movieDetail: '/movie/detail/'
	
	};
	function getData(url, callback) {
	    stream.sendHttp({
	        method: 'GET',
	        url: url
	    }, function (ret) {
	        var retdata = JSON.parse(ret);
	        callback(retdata);
	    });
	}
	exports.getHome = function (dateStr, callback) {
	    getData(apiURL.baseurl + apiURL.homePage + dateStr, callback);
	};
	exports.getReadingCarousel = function (callback) {
	    getData(apiURL.baseurl + apiURL.readingCarousel, callback);
	};
	exports.getReadingIndex = function (index, callback) {
	    getData(apiURL.baseurl + apiURL.readingIndex + index, callback);
	};
	exports.getEssay = function (id, callback) {
	    getData(apiURL.baseurl + apiURL.essay + id, callback);
	};
	exports.getSerialContent = function (id, callback) {
	    getData(apiURL.baseurl + apiURL.serialcontent + id, callback);
	};
	exports.getQuestionDetail = function (id, callback) {
	    getData(apiURL.baseurl + apiURL.question + id, callback);
	
	};
	exports.getCarouseList = function (id, callback) {
	    getData(apiURL.baseurl + apiURL.carouselList + id, callback);
	};
	exports.getMovieList = function (id, callback) {
	    getData(apiURL.baseurl + apiURL.movieList + id, callback);
	};
	exports.getMovieDetail = function (id, callback) {
	    getData(apiURL.baseurl + apiURL.movieDetail + id, callback);
	
	};
	
	exports.getBaseUrl = function (bundleUrl, isnav) {
	    bundleUrl = new String(bundleUrl);
	    var nativeBase;
	    var isAndroidAssets = bundleUrl.indexOf('file://assets/') >= 0;
	
	    var isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('WeexDemo.app') > 0;
	    if (isAndroidAssets) {
	        nativeBase = 'file://assets/dist/';
	    }
	    else if (isiOSAssets) {
	        nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
	    }
	    else {
	        var host = 'localhost:12560';
	        var matches = /\/\/([^\/]+?)\//.exec(bundleUrl);
	        if (matches && matches.length >= 2) {
	            host = matches[1];
	        }
	
	        //此处需注意一下,tabbar 用的直接是jsbundle 的路径,但是navigator是直接跳转到新页面上的.
	        if (typeof window === 'object') {
	            nativeBase = isnav ? 'http://' + host + '/index.html?page=./dist/' : '/dist/';
	        } else {
	            nativeBase = 'http://' + host + '/dist/';
	        }
	    }
	
	    return nativeBase;
	};

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYTdhMmY1NmNjZmJmMmJhOWFhOWE/MDBlYyoqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luY2x1ZGUvdmJhb2xpLXRhYi53ZT8zY2IzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWludGVnZXIuanM/ZjY1ZioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVmaW5lZC5qcz80NWQzKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19leHBvcnQuanM/ZWNlMioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzPzc3YWEqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanM/MWI2MioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzP2NlMDAqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2EtZnVuY3Rpb24uanM/ZDUzZSoqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qcz9hNmRhKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanM/NDExNioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzPzBkYTMqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qcz8yNGM4KioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qcz9iZDFmKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcz83MDUxKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qcz85MzVkKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzP2FiNDQqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcz80OWE0KioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzPzFlODYqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hhcy5qcz9kODUwKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy5qcz9mNWJjKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qcz9mY2VhKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pb2JqZWN0LmpzPzY5NDYqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lvYmplY3QuanM/NWNmOSoqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29mLmpzPzQ4ZWEqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzPzYxOTkqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWxlbmd0aC5qcz82MmE3KioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbmRleC5qcz85ZmQ0KioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQta2V5LmpzPzJhNmMqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC5qcz83YjZjKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL191aWQuanM/ZThjZCoqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qcz83NTk4KioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1vYmplY3QuanM/YjVjMCoqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanM/YTVmYioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXBpZS5qcz9kMGQyKioqKiIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtY29tcG9uZW50cy9pbmRleC5qcz8wZTE3KioqIiwid2VicGFjazovLy8uL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtYnV0dG9uLndlP2MzOGYqKioiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1idXR0b24ud2U/OGU2NyoqKiIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtY29tcG9uZW50cy9zcmMvd3hjLWJ1dHRvbi53ZT9jZWIzKioqIiwid2VicGFjazovLy8uL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtYnV0dG9uLndlPzQ4MmQqKioiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1obi53ZT9jN2FhKioqIiwid2VicGFjazovLy8uL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtaG4ud2U/YWEyNyoqKiIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtY29tcG9uZW50cy9zcmMvd3hjLWhuLndlPzY3YTgqKioiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1obi53ZT81NjE1KioqIiwid2VicGFjazovLy8uL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtbGlzdC1pdGVtLndlPzQxYmEqKioiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1saXN0LWl0ZW0ud2U/NTU0YyoqKiIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtY29tcG9uZW50cy9zcmMvd3hjLWxpc3QtaXRlbS53ZT81YWFhKioqIiwid2VicGFjazovLy8uL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtbGlzdC1pdGVtLndlPzU4YTkqKioiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1wYW5lbC53ZT80YzA2KioqIiwid2VicGFjazovLy8uL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtcGFuZWwud2U/NzU5MCoqKiIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtY29tcG9uZW50cy9zcmMvd3hjLXBhbmVsLndlP2NjYmYqKioiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1wYW5lbC53ZT83ZjM1KioqIiwid2VicGFjazovLy8uL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtdGlwLndlPzVlOGQqKioiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy10aXAud2U/YTZjZSoqKiIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtY29tcG9uZW50cy9zcmMvd3hjLXRpcC53ZT8zZDY0KioqIiwid2VicGFjazovLy8uL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtdGlwLndlPzFkN2MqKioiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1jb3VudGRvd24ud2U/NjMwZSoqKiIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtY29tcG9uZW50cy9zcmMvd3hjLWNvdW50ZG93bi53ZT84Y2EyKioqIiwid2VicGFjazovLy8uL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtY291bnRkb3duLndlP2NkZTEqKioiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1jb3VudGRvd24ud2U/OTNmNyoqKiIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvYXNzaWduLmpzP2U2Y2EqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnbi5qcz84MGU0KioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24uanM/OTAwNyoqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtYXNzaWduLmpzPzVjMGMqKioiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1tYXJxdWVlLndlP2Q4Y2UqKioiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1tYXJxdWVlLndlPzY5YTYqKioiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1tYXJxdWVlLndlPzBlNDMqKioiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1tYXJxdWVlLndlPzU5ZWUqKioiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1uYXZiYXIud2U/ZDgwZioqKiIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtY29tcG9uZW50cy9zcmMvd3hjLW5hdmJhci53ZT9jOTIzKioqIiwid2VicGFjazovLy8uL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtbmF2YmFyLndlPzgyYzMqKioiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1uYXZiYXIud2U/NjAwMioqKiIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtY29tcG9uZW50cy9zcmMvd3hjLW5hdnBhZ2Uud2U/NDFjZioqKiIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtY29tcG9uZW50cy9zcmMvd3hjLW5hdnBhZ2Uud2U/YjQzMioqKiIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtY29tcG9uZW50cy9zcmMvd3hjLW5hdnBhZ2Uud2U/ZmNkMyoqKiIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtY29tcG9uZW50cy9zcmMvd3hjLW5hdnBhZ2Uud2U/MGRhZCoqKiIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtY29tcG9uZW50cy9zcmMvd3hjLXRhYmJhci53ZT8zMjRkKioqIiwid2VicGFjazovLy8uL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtdGFiaXRlbS53ZT8wMDI4KioqIiwid2VicGFjazovLy8uL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtdGFiaXRlbS53ZT8zMjZmKioqIiwid2VicGFjazovLy8uL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtdGFiaXRlbS53ZT8yZDYzKioqIiwid2VicGFjazovLy8uL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtdGFiaXRlbS53ZT82NzFkKioqIiwid2VicGFjazovLy8uL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtdGFiYmFyLndlP2U0YjEqKioiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy10YWJiYXIud2U/OWEzMyoqKiIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtY29tcG9uZW50cy9zcmMvd3hjLXRhYmJhci53ZT8xZWRjKioqIiwid2VicGFjazovLy8uL3NyYy9pbmNsdWRlL3ZiYW9saS10YWItaXRlbS53ZT8yY2QyIiwid2VicGFjazovLy8uL3NyYy9pbmNsdWRlL3ZiYW9saS10YWItaXRlbS53ZT9mMTZhIiwid2VicGFjazovLy8uL3NyYy9pbmNsdWRlL3ZiYW9saS10YWItaXRlbS53ZT83YmJkIiwid2VicGFjazovLy8uL3NyYy9pbmNsdWRlL3ZiYW9saS10YWItaXRlbS53ZT84MzY2Iiwid2VicGFjazovLy8uL3NyYy9pbmNsdWRlL3ZiYW9saS10YWIud2U/Mjk5MyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jbHVkZS92YmFvbGktdGFiLndlPzc3OWYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luY2x1ZGUvdmJhb2xpLXRhYi53ZT9jOGNjIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vYXBpLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDdENBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLEVBQUM7O0FBRUQsMkY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9FQUFtRTtBQUNuRTtBQUNBLHNGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVztBQUNYLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsZ0RBQStDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWM7QUFDZCxlQUFjO0FBQ2QsZUFBYztBQUNkLGVBQWM7QUFDZCxnQkFBZTtBQUNmLGdCQUFlO0FBQ2YsZ0JBQWU7QUFDZixpQkFBZ0I7QUFDaEIsMEI7Ozs7OztBQzVEQTtBQUNBO0FB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Q0EsRTs7Ozs7Ozs7QUNTQTtBQUNBO0FBQ0E7QUFDQTs7a0JBR0E7bUJBQ0E7d0JBQ0E7d0JBQ0E7MEJBRUE7QUFOQTtpQ0FPQTsyQ0FDQTt3Q0FDQTt3REFDQTt5Q0FDQTtrREFDQTtBQUNBOzRCQUNBOzZDQUNBO29DQUNBO3NDQUNBO2tDQUNBOzJCQUNBO0FBQ0E7QUFDQTs7NENBRUE7NERBQ0E7NkNBQ0E7aUNBQ0E7K0NBQ0E7dUNBQ0E7d0JBQ0E7K0NBQ0E7dUNBQ0E7QUFDQTtBQUNBO0FBRUE7QUFiQTtBQXZCQTs7Ozs7Ozs7QUNuQkE7QUFDQTtBQUNBOzs7QUFHQSxnREFBK0M7O0FBRS9DO0FBQ0E7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRyIsImZpbGUiOiJpbmNsdWRlXFx2YmFvbGktdGFiLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYTdhMmY1NmNjZmJmMmJhOWFhOWEiLCJyZXF1aXJlKFwiLi92YmFvbGktdGFiLWl0ZW0ud2VcIilcbnZhciBfX3dlZXhfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vdmJhb2xpLXRhYi53ZVwiKVxudmFyIF9fd2VleF9zdHlsZV9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi92YmFvbGktdGFiLndlXCIpXG52YXIgX193ZWV4X3NjcmlwdF9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL3NjcmlwdC5qcyFiYWJlbC1sb2FkZXI/cHJlc2V0c1tdPUM6XFxcXHZiYW9saS13ZWV4XFxcXHZiYW9saVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcHJlc2V0LWVzMjAxNSZwcmVzZXRzPUM6XFxcXHZiYW9saS13ZWV4XFxcXHZiYW9saVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcHJlc2V0LWVzMjAxNSZwbHVnaW5zW109QzpcXFxcdmJhb2xpLXdlZXhcXFxcdmJhb2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmcGx1Z2lucz1DOlxcXFx2YmFvbGktd2VleFxcXFx2YmFvbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZjb21tZW50cz1mYWxzZSEuLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c2NyaXB0cyEuL3ZiYW9saS10YWIud2VcIilcblxuX193ZWV4X2RlZmluZV9fKCdAd2VleC1jb21wb25lbnQvN2ZlODA5YjZlZjQzM2JkODIwZjNkNjVjYWU4YzA4NmInLCBbXSwgZnVuY3Rpb24oX193ZWV4X3JlcXVpcmVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X21vZHVsZV9fKSB7XG5cbiAgICBfX3dlZXhfc2NyaXB0X18oX193ZWV4X21vZHVsZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfcmVxdWlyZV9fKVxuICAgIGlmIChfX3dlZXhfZXhwb3J0c19fLl9fZXNNb2R1bGUgJiYgX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0KSB7XG4gICAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cyA9IF9fd2VleF9leHBvcnRzX18uZGVmYXVsdFxuICAgIH1cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnRlbXBsYXRlID0gX193ZWV4X3RlbXBsYXRlX19cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnN0eWxlID0gX193ZWV4X3N0eWxlX19cblxufSlcblxuX193ZWV4X2Jvb3RzdHJhcF9fKCdAd2VleC1jb21wb25lbnQvN2ZlODA5YjZlZjQzM2JkODIwZjNkNjVjYWU4YzA4NmInLHVuZGVmaW5lZCx1bmRlZmluZWQpXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW5jbHVkZS92YmFvbGktdGFiLndlP2VudHJ5PXRydWVcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAxMCIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgID0gTWF0aC5jZWlsXG4gICwgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWludGVnZXIuanNcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCA0IDcgOCAxMCAxMiAxMyAxNyAxOSAyMCAyMSAyNSAyNyAyOCIsIi8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoaXQgPT0gdW5kZWZpbmVkKXRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanNcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCA0IDcgOCAxMCAxMiAxMyAxNyAxOSAyMCAyMSAyNSAyNyAyOCIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGNvcmUgICAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIGN0eCAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgaGlkZSAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24odHlwZSwgbmFtZSwgc291cmNlKXtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkZcbiAgICAsIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0LkdcbiAgICAsIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlNcbiAgICAsIElTX1BST1RPICA9IHR5cGUgJiAkZXhwb3J0LlBcbiAgICAsIElTX0JJTkQgICA9IHR5cGUgJiAkZXhwb3J0LkJcbiAgICAsIElTX1dSQVAgICA9IHR5cGUgJiAkZXhwb3J0LldcbiAgICAsIGV4cG9ydHMgICA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pXG4gICAgLCBleHBQcm90byAgPSBleHBvcnRzW1BST1RPVFlQRV1cbiAgICAsIHRhcmdldCAgICA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV1cbiAgICAsIGtleSwgb3duLCBvdXQ7XG4gIGlmKElTX0dMT0JBTClzb3VyY2UgPSBuYW1lO1xuICBmb3Ioa2V5IGluIHNvdXJjZSl7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYgdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICBpZihvd24gJiYga2V5IGluIGV4cG9ydHMpY29udGludWU7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuICAgIGV4cG9ydHNba2V5XSA9IElTX0dMT0JBTCAmJiB0eXBlb2YgdGFyZ2V0W2tleV0gIT0gJ2Z1bmN0aW9uJyA/IHNvdXJjZVtrZXldXG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICA6IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKVxuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG4gICAgOiBJU19XUkFQICYmIHRhcmdldFtrZXldID09IG91dCA/IChmdW5jdGlvbihDKXtcbiAgICAgIHZhciBGID0gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICAgIGlmKHRoaXMgaW5zdGFuY2VvZiBDKXtcbiAgICAgICAgICBzd2l0Y2goYXJndW1lbnRzLmxlbmd0aCl7XG4gICAgICAgICAgICBjYXNlIDA6IHJldHVybiBuZXcgQztcbiAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIG5ldyBDKGEpO1xuICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gbmV3IEMoYSwgYik7XG4gICAgICAgICAgfSByZXR1cm4gbmV3IEMoYSwgYiwgYyk7XG4gICAgICAgIH0gcmV0dXJuIEMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgICBGW1BST1RPVFlQRV0gPSBDW1BST1RPVFlQRV07XG4gICAgICByZXR1cm4gRjtcbiAgICAvLyBtYWtlIHN0YXRpYyB2ZXJzaW9ucyBmb3IgcHJvdG90eXBlIG1ldGhvZHNcbiAgICB9KShvdXQpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLm1ldGhvZHMuJU5BTUUlXG4gICAgaWYoSVNfUFJPVE8pe1xuICAgICAgKGV4cG9ydHMudmlydHVhbCB8fCAoZXhwb3J0cy52aXJ0dWFsID0ge30pKVtrZXldID0gb3V0O1xuICAgICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLnByb3RvdHlwZS4lTkFNRSVcbiAgICAgIGlmKHR5cGUgJiAkZXhwb3J0LlIgJiYgZXhwUHJvdG8gJiYgIWV4cFByb3RvW2tleV0paGlkZShleHBQcm90bywga2V5LCBvdXQpO1xuICAgIH1cbiAgfVxufTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWAgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19leHBvcnQuanNcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA0IDcgOCAxMCAxMiAxMyAxNyAxOSAyMCAyMSAyNSAyNyAyOCIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGYgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYodHlwZW9mIF9fZyA9PSAnbnVtYmVyJylfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2dsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDQgNyA4IDEwIDEyIDEzIDE3IDE5IDIwIDIxIDI1IDI3IDI4IiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHt2ZXJzaW9uOiAnMi40LjAnfTtcbmlmKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29yZS5qc1xuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDQgNyA4IDEwIDEyIDEzIDE3IDE5IDIwIDIxIDI1IDI3IDI4IiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbiwgdGhhdCwgbGVuZ3RoKXtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYodGhhdCA9PT0gdW5kZWZpbmVkKXJldHVybiBmbjtcbiAgc3dpdGNoKGxlbmd0aCl7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24oYSl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uKGEsIGIpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbihhLCBiLCBjKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKC8qIC4uLmFyZ3MgKi8pe1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2N0eC5qc1xuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDQgNyA4IDEwIDEyIDEzIDE3IDE5IDIwIDIxIDI1IDI3IDI4IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNCA3IDggMTAgMTIgMTMgMTcgMTkgMjAgMjEgMjUgMjcgMjgiLCJ2YXIgZFAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIHJldHVybiBkUC5mKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oaWRlLmpzXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNCA3IDggMTAgMTIgMTMgMTcgMTkgMjAgMjEgMjUgMjcgMjgiLCJ2YXIgYW5PYmplY3QgICAgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKVxuICAsIHRvUHJpbWl0aXZlICAgID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJylcbiAgLCBkUCAgICAgICAgICAgICA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpe1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYoSUU4X0RPTV9ERUZJTkUpdHJ5IHtcbiAgICByZXR1cm4gZFAoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgaWYoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKXRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gIGlmKCd2YWx1ZScgaW4gQXR0cmlidXRlcylPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwLmpzXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNCA3IDggMTAgMTIgMTMgMTcgMTkgMjAgMjEgMjUgMjcgMjgiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZighaXNPYmplY3QoaXQpKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDQgNyA4IDEwIDEyIDEzIDE3IDE5IDIwIDIxIDI1IDI3IDI4IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgNCA3IDggMTAgMTIgMTMgMTcgMTkgMjAgMjEgMjUgMjcgMjgiLCJtb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdkaXYnKSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA0IDcgOCAxMCAxMiAxMyAxNyAxOSAyMCAyMSAyNSAyNyAyOCIsIi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanNcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA0IDcgOCAxMCAxMiAxMyAxNyAxOSAyMCAyMSAyNSAyNyAyOCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZXhlYyl7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZmFpbHMuanNcbi8vIG1vZHVsZSBpZCA9IDM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA0IDcgOCAxMCAxMiAxMyAxNyAxOSAyMCAyMSAyNSAyNyAyOCIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudFxuICAvLyBpbiBvbGQgSUUgdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCdcbiAgLCBpcyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA0IDcgOCAxMCAxMiAxMyAxNyAxOSAyMCAyMSAyNSAyNyAyOCIsIi8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIFMpe1xuICBpZighaXNPYmplY3QoaXQpKXJldHVybiBpdDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgaWYodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICBpZighUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzXG4vLyBtb2R1bGUgaWQgPSAzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNCA3IDggMTAgMTIgMTMgMTcgMTkgMjAgMjEgMjUgMjcgMjgiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGJpdG1hcCwgdmFsdWUpe1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGUgIDogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGUgICAgOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlICAgICAgIDogdmFsdWVcbiAgfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzXG4vLyBtb2R1bGUgaWQgPSAzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNCA3IDggMTAgMTIgMTMgMTcgMTkgMjAgMjEgMjUgMjcgMjgiLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIGtleSl7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hhcy5qc1xuLy8gbW9kdWxlIGlkID0gNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDQgNyA4IDEwIDEyIDEzIDE3IDE5IDIwIDIxIDI1IDI3IDI4IiwiLy8gMTkuMS4yLjE0IC8gMTUuMi4zLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgJGtleXMgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpXG4gICwgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKXtcbiAgcmV0dXJuICRrZXlzKE8sIGVudW1CdWdLZXlzKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDQgNyA4IDEwIDEyIDEzIDE3IDE5IDIwIDIxIDI1IDI3IDI4IiwidmFyIGhhcyAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgdG9JT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgYXJyYXlJbmRleE9mID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKShmYWxzZSlcbiAgLCBJRV9QUk9UTyAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0LCBuYW1lcyl7XG4gIHZhciBPICAgICAgPSB0b0lPYmplY3Qob2JqZWN0KVxuICAgICwgaSAgICAgID0gMFxuICAgICwgcmVzdWx0ID0gW11cbiAgICAsIGtleTtcbiAgZm9yKGtleSBpbiBPKWlmKGtleSAhPSBJRV9QUk9UTyloYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpaWYoaGFzKE8sIGtleSA9IG5hbWVzW2krK10pKXtcbiAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanNcbi8vIG1vZHVsZSBpZCA9IDQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA0IDcgOCAxMCAxMiAxMyAxNyAxOSAyMCAyMSAyNSAyNyAyOCIsIi8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0JylcbiAgLCBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNCA3IDggMTAgMTIgMTMgMTcgMTkgMjAgMjEgMjUgMjcgMjgiLCIvLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKSA/IE9iamVjdCA6IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lvYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA0IDcgOCAxMCAxMiAxMyAxNyAxOSAyMCAyMSAyNSAyNyAyOCIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2YuanNcbi8vIG1vZHVsZSBpZCA9IDUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCA0IDcgOCAxMCAxMiAxMyAxNyAxOSAyMCAyMSAyNSAyNyAyOCIsIi8vIGZhbHNlIC0+IEFycmF5I2luZGV4T2Zcbi8vIHRydWUgIC0+IEFycmF5I2luY2x1ZGVzXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgdG9MZW5ndGggID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJylcbiAgLCB0b0luZGV4ICAgPSByZXF1aXJlKCcuL190by1pbmRleCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihJU19JTkNMVURFUyl7XG4gIHJldHVybiBmdW5jdGlvbigkdGhpcywgZWwsIGZyb21JbmRleCl7XG4gICAgdmFyIE8gICAgICA9IHRvSU9iamVjdCgkdGhpcylcbiAgICAgICwgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpXG4gICAgICAsIGluZGV4ICA9IHRvSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpXG4gICAgICAsIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICBpZihJU19JTkNMVURFUyAmJiBlbCAhPSBlbCl3aGlsZShsZW5ndGggPiBpbmRleCl7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICBpZih2YWx1ZSAhPSB2YWx1ZSlyZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSN0b0luZGV4IGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvcig7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspaWYoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTyl7XG4gICAgICBpZihPW2luZGV4XSA9PT0gZWwpcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNCA3IDggMTAgMTIgMTMgMTcgMTkgMjAgMjEgMjUgMjcgMjgiLCIvLyA3LjEuMTUgVG9MZW5ndGhcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBtaW4gICAgICAgPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWxlbmd0aC5qc1xuLy8gbW9kdWxlIGlkID0gNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDQgNyA4IDEwIDEyIDEzIDE3IDE5IDIwIDIxIDI1IDI3IDI4IiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIG1heCAgICAgICA9IE1hdGgubWF4XG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGluZGV4LCBsZW5ndGgpe1xuICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWluZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgNCA3IDggMTAgMTIgMTMgMTcgMTkgMjAgMjEgMjUgMjcgMjgiLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ2tleXMnKVxuICAsIHVpZCAgICA9IHJlcXVpcmUoJy4vX3VpZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gdWlkKGtleSkpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC1rZXkuanNcbi8vIG1vZHVsZSBpZCA9IDU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA0IDcgOCAxMCAxMiAxMyAxNyAxOSAyMCAyMSAyNSAyNyAyOCIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nXG4gICwgc3RvcmUgID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHt9KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQuanNcbi8vIG1vZHVsZSBpZCA9IDU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA0IDcgOCAxMCAxMiAxMyAxNyAxOSAyMCAyMSAyNSAyNyAyOCIsInZhciBpZCA9IDBcbiAgLCBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdWlkLmpzXG4vLyBtb2R1bGUgaWQgPSA1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNCA3IDggMTAgMTIgMTMgMTcgMTkgMjAgMjEgMjUgMjcgMjgiLCIvLyBJRSA4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgJ2NvbnN0cnVjdG9yLGhhc093blByb3BlcnR5LGlzUHJvdG90eXBlT2YscHJvcGVydHlJc0VudW1lcmFibGUsdG9Mb2NhbGVTdHJpbmcsdG9TdHJpbmcsdmFsdWVPZidcbikuc3BsaXQoJywnKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA0IDcgOCAxMCAxMiAxMyAxNyAxOSAyMCAyMSAyNSAyNyAyOCIsIi8vIDcuMS4xMyBUb09iamVjdChhcmd1bWVudClcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gNjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDQgNyA4IDEwIDEyIDEzIDE3IDE5IDIwIDIxIDI1IDI3IDI4IiwiZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BzLmpzXG4vLyBtb2R1bGUgaWQgPSA3NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNCA3IDggMTAgMTIgMTMgMTcgMTkgMjAgMjEgMjUgMjcgMjgiLCJleHBvcnRzLmYgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1waWUuanNcbi8vIG1vZHVsZSBpZCA9IDc2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA0IDcgOCAxMCAxMiAxMyAxNyAxOSAyMCAyMSAyNSAyNyAyOCIsInJlcXVpcmUoJy4vc3JjL3d4Yy1idXR0b24ud2UnKTtcbnJlcXVpcmUoJy4vc3JjL3d4Yy1obi53ZScpO1xucmVxdWlyZSgnLi9zcmMvd3hjLWxpc3QtaXRlbS53ZScpO1xucmVxdWlyZSgnLi9zcmMvd3hjLXBhbmVsLndlJyk7XG5yZXF1aXJlKCcuL3NyYy93eGMtdGlwLndlJyk7XG5yZXF1aXJlKCcuL3NyYy93eGMtY291bnRkb3duLndlJyk7XG5yZXF1aXJlKCcuL3NyYy93eGMtbWFycXVlZS53ZScpO1xucmVxdWlyZSgnLi9zcmMvd3hjLW5hdmJhci53ZScpO1xucmVxdWlyZSgnLi9zcmMvd3hjLW5hdnBhZ2Uud2UnKTtcbnJlcXVpcmUoJy4vc3JjL3d4Yy10YWJiYXIud2UnKTtcbnJlcXVpcmUoJy4vc3JjL3d4Yy10YWJpdGVtLndlJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1jb21wb25lbnRzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA4NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNyA4IDEwIDEyIDEzIDE3IDE5IDIwIDIxIDI1IDI3IDI4IiwidmFyIF9fd2VleF90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi93eGMtYnV0dG9uLndlXCIpXG52YXIgX193ZWV4X3N0eWxlX18gPSByZXF1aXJlKFwiISEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL3d4Yy1idXR0b24ud2VcIilcbnZhciBfX3dlZXhfc2NyaXB0X18gPSByZXF1aXJlKFwiISEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9zY3JpcHQuanMhYmFiZWwtbG9hZGVyP3ByZXNldHNbXT1DOlxcXFx2YmFvbGktd2VleFxcXFx2YmFvbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXByZXNldC1lczIwMTUmcHJlc2V0cz1DOlxcXFx2YmFvbGktd2VleFxcXFx2YmFvbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXByZXNldC1lczIwMTUmcGx1Z2luc1tdPUM6XFxcXHZiYW9saS13ZWV4XFxcXHZiYW9saVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJnBsdWdpbnM9QzpcXFxcdmJhb2xpLXdlZXhcXFxcdmJhb2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmY29tbWVudHM9ZmFsc2UhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c2NyaXB0cyEuL3d4Yy1idXR0b24ud2VcIilcblxuX193ZWV4X2RlZmluZV9fKCdAd2VleC1jb21wb25lbnQvd3hjLWJ1dHRvbicsIFtdLCBmdW5jdGlvbihfX3dlZXhfcmVxdWlyZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfbW9kdWxlX18pIHtcblxuICAgIF9fd2VleF9zY3JpcHRfXyhfX3dlZXhfbW9kdWxlX18sIF9fd2VleF9leHBvcnRzX18sIF9fd2VleF9yZXF1aXJlX18pXG4gICAgaWYgKF9fd2VleF9leHBvcnRzX18uX19lc01vZHVsZSAmJiBfX3dlZXhfZXhwb3J0c19fLmRlZmF1bHQpIHtcbiAgICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzID0gX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0XG4gICAgfVxuXG4gICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMudGVtcGxhdGUgPSBfX3dlZXhfdGVtcGxhdGVfX1xuXG4gICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMuc3R5bGUgPSBfX3dlZXhfc3R5bGVfX1xuXG59KVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtY29tcG9uZW50cy9zcmMvd3hjLWJ1dHRvbi53ZVxuLy8gbW9kdWxlIGlkID0gODVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDcgOCAxMCAxMiAxMyAxNyAxOSAyMCAyMSAyNSAyNyAyOCIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJkaXZcIixcbiAgXCJjbGFzc0xpc3RcIjogZnVuY3Rpb24gKCkge3JldHVybiBbJ2J0bicsICdidG4tJyArICh0aGlzLnR5cGUpLCAnYnRuLXN6LScgKyAodGhpcy5zaXplKV19LFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIFsnYnRuLXR4dCcsICdidG4tdHh0LScgKyAodGhpcy50eXBlKSwgJ2J0bi10eHQtc3otJyArICh0aGlzLnNpemUpXX0sXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy52YWx1ZX1cbiAgICAgIH1cbiAgICB9XG4gIF1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+L3dlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuL34vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtYnV0dG9uLndlXG4vLyBtb2R1bGUgaWQgPSA4NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNyA4IDEwIDEyIDEzIDE3IDE5IDIwIDIxIDI1IDI3IDI4IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiYnRuXCI6IHtcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiAwLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImJvcmRlcldpZHRoXCI6IDEsXG4gICAgXCJib3JkZXJTdHlsZVwiOiBcInNvbGlkXCIsXG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiMzMzMzMzNcIlxuICB9LFxuICBcImJ0bi1kZWZhdWx0XCI6IHtcbiAgICBcImNvbG9yXCI6IFwicmdiKDUxLDUxLDUxKVwiXG4gIH0sXG4gIFwiYnRuLXByaW1hcnlcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwicmdiKDQwLDk2LDE0NClcIixcbiAgICBcImJvcmRlckNvbG9yXCI6IFwicmdiKDQwLDk2LDE0NClcIlxuICB9LFxuICBcImJ0bi1zdWNjZXNzXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcInJnYig5MiwxODQsOTIpXCIsXG4gICAgXCJib3JkZXJDb2xvclwiOiBcInJnYig3NiwxNzQsNzYpXCJcbiAgfSxcbiAgXCJidG4taW5mb1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCJyZ2IoOTEsMTkyLDIyMilcIixcbiAgICBcImJvcmRlckNvbG9yXCI6IFwicmdiKDcwLDE4NCwyMTgpXCJcbiAgfSxcbiAgXCJidG4td2FybmluZ1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCJyZ2IoMjQwLDE3Myw3OClcIixcbiAgICBcImJvcmRlckNvbG9yXCI6IFwicmdiKDIzOCwxNjIsNTQpXCJcbiAgfSxcbiAgXCJidG4tZGFuZ2VyXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcInJnYigyMTcsODMsNzkpXCIsXG4gICAgXCJib3JkZXJDb2xvclwiOiBcInJnYigyMTIsNjMsNTgpXCJcbiAgfSxcbiAgXCJidG4tbGlua1wiOiB7XG4gICAgXCJib3JkZXJDb2xvclwiOiBcInJnYmEoMCwwLDAsMClcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiAwXG4gIH0sXG4gIFwiYnRuLXR4dC1kZWZhdWx0XCI6IHtcbiAgICBcImNvbG9yXCI6IFwicmdiKDUxLDUxLDUxKVwiXG4gIH0sXG4gIFwiYnRuLXR4dC1wcmltYXJ5XCI6IHtcbiAgICBcImNvbG9yXCI6IFwicmdiKDI1NSwyNTUsMjU1KVwiXG4gIH0sXG4gIFwiYnRuLXR4dC1zdWNjZXNzXCI6IHtcbiAgICBcImNvbG9yXCI6IFwicmdiKDI1NSwyNTUsMjU1KVwiXG4gIH0sXG4gIFwiYnRuLXR4dC1pbmZvXCI6IHtcbiAgICBcImNvbG9yXCI6IFwicmdiKDI1NSwyNTUsMjU1KVwiXG4gIH0sXG4gIFwiYnRuLXR4dC13YXJuaW5nXCI6IHtcbiAgICBcImNvbG9yXCI6IFwicmdiKDI1NSwyNTUsMjU1KVwiXG4gIH0sXG4gIFwiYnRuLXR4dC1kYW5nZXJcIjoge1xuICAgIFwiY29sb3JcIjogXCJyZ2IoMjU1LDI1NSwyNTUpXCJcbiAgfSxcbiAgXCJidG4tdHh0LWxpbmtcIjoge1xuICAgIFwiY29sb3JcIjogXCJyZ2IoNTEsMTIyLDE4MylcIlxuICB9LFxuICBcImJ0bi1zei1sYXJnZVwiOiB7XG4gICAgXCJ3aWR0aFwiOiAzMDAsXG4gICAgXCJoZWlnaHRcIjogMTAwLFxuICAgIFwicGFkZGluZ1RvcFwiOiAyNSxcbiAgICBcInBhZGRpbmdCb3R0b21cIjogMjUsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiA0MCxcbiAgICBcInBhZGRpbmdSaWdodFwiOiA0MCxcbiAgICBcImJvcmRlclJhZGl1c1wiOiAxNVxuICB9LFxuICBcImJ0bi1zei1taWRkbGVcIjoge1xuICAgIFwid2lkdGhcIjogMjQwLFxuICAgIFwiaGVpZ2h0XCI6IDgwLFxuICAgIFwicGFkZGluZ1RvcFwiOiAxNSxcbiAgICBcInBhZGRpbmdCb3R0b21cIjogMTUsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiAzMCxcbiAgICBcInBhZGRpbmdSaWdodFwiOiAzMCxcbiAgICBcImJvcmRlclJhZGl1c1wiOiAxMFxuICB9LFxuICBcImJ0bi1zei1zbWFsbFwiOiB7XG4gICAgXCJ3aWR0aFwiOiAxNzAsXG4gICAgXCJoZWlnaHRcIjogNjAsXG4gICAgXCJwYWRkaW5nVG9wXCI6IDEyLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiAxMixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IDI1LFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IDI1LFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IDdcbiAgfSxcbiAgXCJidG4tdHh0LXN6LWxhcmdlXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IDQ1XG4gIH0sXG4gIFwiYnRuLXR4dC1zei1taWRkbGVcIjoge1xuICAgIFwiZm9udFNpemVcIjogMzVcbiAgfSxcbiAgXCJidG4tdHh0LXN6LXNtYWxsXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IDMwXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL34vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtYnV0dG9uLndlXG4vLyBtb2R1bGUgaWQgPSA4N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgNyA4IDEwIDEyIDEzIDE3IDE5IDIwIDIxIDI1IDI3IDI4IiwiPCEtLSBJbnNwaXJlZCBieSBib290c3RyYXAgaHR0cDovL2dldGJvb3RzdHJhcC5jb20vIC0tPlxuPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiYnRuIGJ0bi17e3R5cGV9fSBidG4tc3ote3tzaXplfX1cIj5cbiAgICA8dGV4dCBjbGFzcz1cImJ0bi10eHQgYnRuLXR4dC17e3R5cGV9fSBidG4tdHh0LXN6LXt7c2l6ZX19XCI+e3t2YWx1ZX19PC90ZXh0PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gIG1vZHVsZS5leHBvcnRzID0ge1xuICAgIGRhdGE6IHtcbiAgICAgIHR5cGU6ICdkZWZhdWx0JyxcbiAgICAgIHNpemU6ICdsYXJnZScsXG4gICAgICB2YWx1ZTogJydcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICB9XG4gIH1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4gIC5idG4ge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBib3JkZXItd2lkdGg6IDFweDtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjogIzMzMztcblxuICAgIC8qd2hpdGUtc3BhY2U6IG5vd3JhcDsqL1xuICAgIC8qdmVydGljYWwtYWxpZ246IG1pZGRsZTsqL1xuICAgIC8qdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247Ki9cbiAgICAvKmN1cnNvcjogcG9pbnRlcjsqL1xuICAgIC8qLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsqL1xuICAgIC8qYmFja2dyb3VuZC1pbWFnZTogbm9uZTsqL1xuICAgIC8qYm9yZGVyLWltYWdlLXNvdXJjZTogaW5pdGlhbDsqL1xuICAgIC8qYm9yZGVyLWltYWdlLXNsaWNlOiBpbml0aWFsOyovXG4gICAgLypib3JkZXItaW1hZ2Utd2lkdGg6IGluaXRpYWw7Ki9cbiAgICAvKmJvcmRlci1pbWFnZS1vdXRzZXQ6IGluaXRpYWw7Ki9cbiAgICAvKmJvcmRlci1pbWFnZS1yZXBlYXQ6IGluaXRpYWw7Ki9cbiAgfVxuXG4gIC5idG4tdHh0IHtcblxuICB9XG5cbiAgLyoqVFlQRSoqL1xuXG4gIC5idG4tZGVmYXVsdCB7XG4gICAgY29sb3I6IHJnYig1MSwgNTEsIDUxKTtcbiAgfVxuXG4gIC5idG4tcHJpbWFyeSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQwLCA5NiwgMTQ0KTtcbiAgICBib3JkZXItY29sb3I6IHJnYig0MCwgOTYsIDE0NCk7XG4gIH1cblxuICAuYnRuLXN1Y2Nlc3Mge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5MiwgMTg0LCA5Mik7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoNzYsIDE3NCwgNzYpO1xuICB9XG5cbiAgLmJ0bi1pbmZvIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTEsIDE5MiwgMjIyKTtcbiAgICBib3JkZXItY29sb3I6IHJnYig3MCwgMTg0LCAyMTgpO1xuICB9XG5cbiAgLmJ0bi13YXJuaW5nIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAxNzMsIDc4KTtcbiAgICBib3JkZXItY29sb3I6IHJnYigyMzgsIDE2MiwgNTQpO1xuICB9XG5cbiAgLmJ0bi1kYW5nZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTcsIDgzLCA3OSk7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMjEyLCA2MywgNTgpO1xuICB9XG5cbiAgLmJ0bi1saW5rIHtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gIH1cblxuICAuYnRuLXR4dC1kZWZhdWx0IHtcbiAgICBjb2xvcjogcmdiKDUxLCA1MSwgNTEpO1xuICB9XG5cbiAgLmJ0bi10eHQtcHJpbWFyeSB7XG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgfVxuXG4gIC5idG4tdHh0LXN1Y2Nlc3Mge1xuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIH1cblxuICAuYnRuLXR4dC1pbmZvIHtcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICB9XG5cbiAgLmJ0bi10eHQtd2FybmluZyB7XG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgfVxuXG4gIC5idG4tdHh0LWRhbmdlciB7XG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgfVxuXG4gIC5idG4tdHh0LWxpbmsge1xuICAgIGNvbG9yOiByZ2IoNTEsIDEyMiwgMTgzKTtcbiAgICAvKmZvbnQtd2VpZ2h0OiA0MDA7Ki9cbiAgfVxuXG4gIC8qKlNJWkUqKi9cblxuICAuYnRuLXN6LWxhcmdlIHtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBwYWRkaW5nLXRvcDogMjVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gICAgcGFkZGluZy1yaWdodDogNDBweDtcbiAgICAvKmxpbmUtaGVpZ2h0OiAxLjMzMzMzOyovXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgfVxuXG4gIC5idG4tc3otbWlkZGxlIHtcbiAgICB3aWR0aDogMjQwcHg7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICAgIC8qbGluZS1oZWlnaHQ6IDEuNDI4NTc7Ki9cbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB9XG5cbiAgLmJ0bi1zei1zbWFsbCB7XG4gICAgd2lkdGg6IDE3MHB4O1xuICAgIGhlaWdodDogNjBweDtcbiAgICBwYWRkaW5nLXRvcDogMTJweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG4gICAgcGFkZGluZy1yaWdodDogMjVweDtcbiAgICAvKmxpbmUtaGVpZ2h0OiAxLjU7Ki9cbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIH1cblxuICAuYnRuLXR4dC1zei1sYXJnZSB7XG4gICAgZm9udC1zaXplOiA0NXB4O1xuICB9XG5cbiAgLmJ0bi10eHQtc3otbWlkZGxlIHtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gIH1cblxuICAuYnRuLXR4dC1zei1zbWFsbCB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICB9XG5cbiAgLypESVNBQkxFRCovXG5cbiAgLmRpc2FibGVkIHtcblxuICB9XG5cbjwvc3R5bGU+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1idXR0b24ud2U/NGQzYzYwNWYiLCJ2YXIgX193ZWV4X3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL3d4Yy1obi53ZVwiKVxudmFyIF9fd2VleF9zdHlsZV9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi93eGMtaG4ud2VcIilcbnZhciBfX3dlZXhfc2NyaXB0X18gPSByZXF1aXJlKFwiISEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9zY3JpcHQuanMhYmFiZWwtbG9hZGVyP3ByZXNldHNbXT1DOlxcXFx2YmFvbGktd2VleFxcXFx2YmFvbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXByZXNldC1lczIwMTUmcHJlc2V0cz1DOlxcXFx2YmFvbGktd2VleFxcXFx2YmFvbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXByZXNldC1lczIwMTUmcGx1Z2luc1tdPUM6XFxcXHZiYW9saS13ZWV4XFxcXHZiYW9saVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJnBsdWdpbnM9QzpcXFxcdmJhb2xpLXdlZXhcXFxcdmJhb2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmY29tbWVudHM9ZmFsc2UhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c2NyaXB0cyEuL3d4Yy1obi53ZVwiKVxuXG5fX3dlZXhfZGVmaW5lX18oJ0B3ZWV4LWNvbXBvbmVudC93eGMtaG4nLCBbXSwgZnVuY3Rpb24oX193ZWV4X3JlcXVpcmVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X21vZHVsZV9fKSB7XG5cbiAgICBfX3dlZXhfc2NyaXB0X18oX193ZWV4X21vZHVsZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfcmVxdWlyZV9fKVxuICAgIGlmIChfX3dlZXhfZXhwb3J0c19fLl9fZXNNb2R1bGUgJiYgX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0KSB7XG4gICAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cyA9IF9fd2VleF9leHBvcnRzX18uZGVmYXVsdFxuICAgIH1cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnRlbXBsYXRlID0gX193ZWV4X3RlbXBsYXRlX19cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnN0eWxlID0gX193ZWV4X3N0eWxlX19cblxufSlcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1obi53ZVxuLy8gbW9kdWxlIGlkID0gODlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDcgOCAxMCAxMiAxMyAxNyAxOSAyMCAyMSAyNSAyNyAyOCIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJkaXZcIixcbiAgXCJjbGFzc0xpc3RcIjogZnVuY3Rpb24gKCkge3JldHVybiBbJ2gnICsgKHRoaXMubGV2ZWwpXX0sXG4gIFwic3R5bGVcIjoge1xuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIFsndHh0LWgnICsgKHRoaXMubGV2ZWwpXX0sXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy52YWx1ZX1cbiAgICAgIH1cbiAgICB9XG4gIF1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+L3dlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuL34vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtaG4ud2Vcbi8vIG1vZHVsZSBpZCA9IDkwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCA3IDggMTAgMTIgMTMgMTcgMTkgMjAgMjEgMjUgMjcgMjgiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJoMVwiOiB7XG4gICAgXCJoZWlnaHRcIjogMTEwLFxuICAgIFwicGFkZGluZ1RvcFwiOiAyMCxcbiAgICBcInBhZGRpbmdCb3R0b21cIjogMjBcbiAgfSxcbiAgXCJoMlwiOiB7XG4gICAgXCJoZWlnaHRcIjogMTEwLFxuICAgIFwicGFkZGluZ1RvcFwiOiAyMCxcbiAgICBcInBhZGRpbmdCb3R0b21cIjogMjBcbiAgfSxcbiAgXCJoM1wiOiB7XG4gICAgXCJoZWlnaHRcIjogMTEwLFxuICAgIFwicGFkZGluZ1RvcFwiOiAyMCxcbiAgICBcInBhZGRpbmdCb3R0b21cIjogMjBcbiAgfSxcbiAgXCJ0eHQtaDFcIjoge1xuICAgIFwiZm9udFNpemVcIjogNzBcbiAgfSxcbiAgXCJ0eHQtaDJcIjoge1xuICAgIFwiZm9udFNpemVcIjogNTJcbiAgfSxcbiAgXCJ0eHQtaDNcIjoge1xuICAgIFwiZm9udFNpemVcIjogNDJcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vd2VleC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c3R5bGVzIS4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1obi53ZVxuLy8gbW9kdWxlIGlkID0gOTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDcgOCAxMCAxMiAxMyAxNyAxOSAyMCAyMSAyNSAyNyAyOCIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImh7e2xldmVsfX1cIiBzdHlsZT1cImp1c3RpZnktY29udGVudDogY2VudGVyO1wiPlxuICAgIDx0ZXh0IGNsYXNzPVwidHh0LWh7e2xldmVsfX1cIj57e3ZhbHVlfX08L3RleHQ+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgbW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgZGF0YToge1xuICAgICAgbGV2ZWw6IDEsXG4gICAgICB2YWx1ZTogJydcbiAgICB9LFxuICAgIG1ldGhvZHM6IHt9XG4gIH1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4gIC5oMSB7XG4gICAgaGVpZ2h0OiAxMTBweDtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgfVxuXG4gIC5oMiB7XG4gICAgaGVpZ2h0OiAxMTBweDtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgfVxuXG4gIC5oMyB7XG4gICAgaGVpZ2h0OiAxMTBweDtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgfVxuICBcblxuICAudHh0LWgxIHtcbiAgICBmb250LXNpemU6IDcwcHg7XG4gIH1cblxuICAudHh0LWgyIHtcbiAgICBmb250LXNpemU6IDUycHg7XG4gIH1cblxuICAudHh0LWgzIHtcbiAgICBmb250LXNpemU6IDQycHg7XG4gIH1cbjwvc3R5bGU+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1obi53ZT8xNjk5N2NiMyIsInZhciBfX3dlZXhfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vd3hjLWxpc3QtaXRlbS53ZVwiKVxudmFyIF9fd2VleF9zdHlsZV9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi93eGMtbGlzdC1pdGVtLndlXCIpXG52YXIgX193ZWV4X3NjcmlwdF9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvc2NyaXB0LmpzIWJhYmVsLWxvYWRlcj9wcmVzZXRzW109QzpcXFxcdmJhb2xpLXdlZXhcXFxcdmJhb2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnByZXNldHM9QzpcXFxcdmJhb2xpLXdlZXhcXFxcdmJhb2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnBsdWdpbnNbXT1DOlxcXFx2YmFvbGktd2VleFxcXFx2YmFvbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZwbHVnaW5zPUM6XFxcXHZiYW9saS13ZWV4XFxcXHZiYW9saVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJmNvbW1lbnRzPWZhbHNlIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdHMhLi93eGMtbGlzdC1pdGVtLndlXCIpXG5cbl9fd2VleF9kZWZpbmVfXygnQHdlZXgtY29tcG9uZW50L3d4Yy1saXN0LWl0ZW0nLCBbXSwgZnVuY3Rpb24oX193ZWV4X3JlcXVpcmVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X21vZHVsZV9fKSB7XG5cbiAgICBfX3dlZXhfc2NyaXB0X18oX193ZWV4X21vZHVsZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfcmVxdWlyZV9fKVxuICAgIGlmIChfX3dlZXhfZXhwb3J0c19fLl9fZXNNb2R1bGUgJiYgX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0KSB7XG4gICAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cyA9IF9fd2VleF9leHBvcnRzX18uZGVmYXVsdFxuICAgIH1cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnRlbXBsYXRlID0gX193ZWV4X3RlbXBsYXRlX19cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnN0eWxlID0gX193ZWV4X3N0eWxlX19cblxufSlcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1saXN0LWl0ZW0ud2Vcbi8vIG1vZHVsZSBpZCA9IDkzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCA3IDggMTAgMTIgMTMgMTcgMTkgMjAgMjEgMjUgMjcgMjgiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gIFwiY2xhc3NMaXN0XCI6IFtcbiAgICBcIml0ZW1cIlxuICBdLFxuICBcImV2ZW50c1wiOiB7XG4gICAgXCJ0b3VjaHN0YXJ0XCI6IFwidG91Y2hzdGFydFwiLFxuICAgIFwidG91Y2hlbmRcIjogXCJ0b3VjaGVuZFwiXG4gIH0sXG4gIFwic3R5bGVcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5iZ0NvbG9yfVxuICB9LFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJjb250ZW50XCJcbiAgICB9XG4gIF1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+L3dlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuL34vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtbGlzdC1pdGVtLndlXG4vLyBtb2R1bGUgaWQgPSA5NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNyA4IDEwIDEyIDEzIDE3IDE5IDIwIDIxIDI1IDI3IDI4IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiaXRlbVwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IDI1LFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiAyNSxcbiAgICBcInBhZGRpbmdMZWZ0XCI6IDM1LFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IDM1LFxuICAgIFwiaGVpZ2h0XCI6IDE2MCxcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJib3JkZXJCb3R0b21XaWR0aFwiOiAxLFxuICAgIFwiYm9yZGVyQ29sb3JcIjogXCIjZGRkZGRkXCJcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vd2VleC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c3R5bGVzIS4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1saXN0LWl0ZW0ud2Vcbi8vIG1vZHVsZSBpZCA9IDk1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA3IDggMTAgMTIgMTMgMTcgMTkgMjAgMjEgMjUgMjcgMjgiLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJpdGVtXCIgb250b3VjaHN0YXJ0PVwidG91Y2hzdGFydFwiIG9udG91Y2hlbmQ9XCJ0b3VjaGVuZFwiXG4gICAgICAgICAgICAgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOnt7YmdDb2xvcn19O1wiPlxuICAgIDxjb250ZW50PjwvY29udGVudD5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBkYXRhOiB7XG4gICAgICBiZ0NvbG9yOiAnI2ZmZmZmZidcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgIHRvdWNoc3RhcnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBGSVhNRSBhbmRyb2lkIHRvdWNoXG4gICAgICAgIC8vIFRPRE8gYWRhcHRpdmUgb3Bwb3NpdGUgYmdDb2xvclxuLy8gICAgICAgIHRoaXMuYmdDb2xvciA9ICcjZTZlNmU2JztcbiAgICAgIH0sXG4gICAgICB0b3VjaGVuZDogZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIEZJWE1FIGFuZHJvaWQgdG91Y2hlbmQgbm90IHRyaWdnZXJlZFxuLy8gICAgICAgIHRoaXMuYmdDb2xvciA9ICcjZmZmZmZmJztcbiAgICAgIH1cbiAgICB9XG4gIH1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4gIC5pdGVtIHtcbiAgICBwYWRkaW5nLXRvcDogMjVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDM1cHg7XG4gICAgcGFkZGluZy1yaWdodDogMzVweDtcbiAgICBoZWlnaHQ6IDE2MHB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIC8qbWFyZ2luLWJvdHRvbTogMXB4OyBGVVRVUkUgKi9cbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XG4gICAgYm9yZGVyLWNvbG9yOiAjZGRkZGRkO1xuICB9XG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtbGlzdC1pdGVtLndlPzQ0M2NlZmJkIiwidmFyIF9fd2VleF90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi93eGMtcGFuZWwud2VcIilcbnZhciBfX3dlZXhfc3R5bGVfXyA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c3R5bGVzIS4vd3hjLXBhbmVsLndlXCIpXG52YXIgX193ZWV4X3NjcmlwdF9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvc2NyaXB0LmpzIWJhYmVsLWxvYWRlcj9wcmVzZXRzW109QzpcXFxcdmJhb2xpLXdlZXhcXFxcdmJhb2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnByZXNldHM9QzpcXFxcdmJhb2xpLXdlZXhcXFxcdmJhb2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnBsdWdpbnNbXT1DOlxcXFx2YmFvbGktd2VleFxcXFx2YmFvbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZwbHVnaW5zPUM6XFxcXHZiYW9saS13ZWV4XFxcXHZiYW9saVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJmNvbW1lbnRzPWZhbHNlIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdHMhLi93eGMtcGFuZWwud2VcIilcblxuX193ZWV4X2RlZmluZV9fKCdAd2VleC1jb21wb25lbnQvd3hjLXBhbmVsJywgW10sIGZ1bmN0aW9uKF9fd2VleF9yZXF1aXJlX18sIF9fd2VleF9leHBvcnRzX18sIF9fd2VleF9tb2R1bGVfXykge1xuXG4gICAgX193ZWV4X3NjcmlwdF9fKF9fd2VleF9tb2R1bGVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X3JlcXVpcmVfXylcbiAgICBpZiAoX193ZWV4X2V4cG9ydHNfXy5fX2VzTW9kdWxlICYmIF9fd2VleF9leHBvcnRzX18uZGVmYXVsdCkge1xuICAgICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMgPSBfX3dlZXhfZXhwb3J0c19fLmRlZmF1bHRcbiAgICB9XG5cbiAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cy50ZW1wbGF0ZSA9IF9fd2VleF90ZW1wbGF0ZV9fXG5cbiAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cy5zdHlsZSA9IF9fd2VleF9zdHlsZV9fXG5cbn0pXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtcGFuZWwud2Vcbi8vIG1vZHVsZSBpZCA9IDk3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA3IDggMTAgMTIgMTMgMTcgMTkgMjAgMjEgMjUgMjcgMjgiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gIFwiY2xhc3NMaXN0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gWydwYW5lbCcsICdwYW5lbC0nICsgKHRoaXMudHlwZSldfSxcbiAgXCJzdHlsZVwiOiB7XG4gICAgXCJib3JkZXJXaWR0aFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuYm9yZGVyfVxuICB9LFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIFsncGFuZWwtaGVhZGVyJywgJ3BhbmVsLWhlYWRlci0nICsgKHRoaXMudHlwZSldfSxcbiAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICBcInBhZGRpbmdUb3BcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnBhZGRpbmdIZWFkfSxcbiAgICAgICAgXCJwYWRkaW5nQm90dG9tXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5wYWRkaW5nSGVhZH0sXG4gICAgICAgIFwicGFkZGluZ0xlZnRcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnBhZGRpbmdIZWFkKjEuNX0sXG4gICAgICAgIFwicGFkZGluZ1JpZ2h0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5wYWRkaW5nSGVhZCoxLjV9XG4gICAgICB9LFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudGl0bGV9XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiY2xhc3NMaXN0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gWydwYW5lbC1ib2R5JywgJ3BhbmVsLWJvZHktJyArICh0aGlzLnR5cGUpXX0sXG4gICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgXCJwYWRkaW5nVG9wXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5wYWRkaW5nQm9keX0sXG4gICAgICAgIFwicGFkZGluZ0JvdHRvbVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMucGFkZGluZ0JvZHl9LFxuICAgICAgICBcInBhZGRpbmdMZWZ0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5wYWRkaW5nQm9keSoxLjV9LFxuICAgICAgICBcInBhZGRpbmdSaWdodFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMucGFkZGluZ0JvZHkqMS41fVxuICAgICAgfSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiY29udGVudFwiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+L3dlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuL34vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtcGFuZWwud2Vcbi8vIG1vZHVsZSBpZCA9IDk4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA3IDggMTAgMTIgMTMgMTcgMTkgMjAgMjEgMjUgMjcgMjgiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJwYW5lbFwiOiB7XG4gICAgXCJtYXJnaW5Cb3R0b21cIjogMjAsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiNkZGRkZGRcIixcbiAgICBcImJvcmRlcldpZHRoXCI6IDFcbiAgfSxcbiAgXCJwYW5lbC1wcmltYXJ5XCI6IHtcbiAgICBcImJvcmRlckNvbG9yXCI6IFwicmdiKDQwLDk2LDE0NClcIlxuICB9LFxuICBcInBhbmVsLXN1Y2Nlc3NcIjoge1xuICAgIFwiYm9yZGVyQ29sb3JcIjogXCJyZ2IoNzYsMTc0LDc2KVwiXG4gIH0sXG4gIFwicGFuZWwtaW5mb1wiOiB7XG4gICAgXCJib3JkZXJDb2xvclwiOiBcInJnYig3MCwxODQsMjE4KVwiXG4gIH0sXG4gIFwicGFuZWwtd2FybmluZ1wiOiB7XG4gICAgXCJib3JkZXJDb2xvclwiOiBcInJnYigyMzgsMTYyLDU0KVwiXG4gIH0sXG4gIFwicGFuZWwtZGFuZ2VyXCI6IHtcbiAgICBcImJvcmRlckNvbG9yXCI6IFwicmdiKDIxMiw2Myw1OClcIlxuICB9LFxuICBcInBhbmVsLWhlYWRlclwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZjVmNWY1XCIsXG4gICAgXCJmb250U2l6ZVwiOiA0MCxcbiAgICBcImNvbG9yXCI6IFwiIzMzMzMzM1wiXG4gIH0sXG4gIFwicGFuZWwtaGVhZGVyLXByaW1hcnlcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwicmdiKDQwLDk2LDE0NClcIixcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gIH0sXG4gIFwicGFuZWwtaGVhZGVyLXN1Y2Nlc3NcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwicmdiKDkyLDE4NCw5MilcIixcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gIH0sXG4gIFwicGFuZWwtaGVhZGVyLWluZm9cIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwicmdiKDkxLDE5MiwyMjIpXCIsXG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIlxuICB9LFxuICBcInBhbmVsLWhlYWRlci13YXJuaW5nXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcInJnYigyNDAsMTczLDc4KVwiLFxuICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCJcbiAgfSxcbiAgXCJwYW5lbC1oZWFkZXItZGFuZ2VyXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcInJnYigyMTcsODMsNzkpXCIsXG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIlxuICB9LFxuICBcInBhbmVsLWJvZHlcIjoge31cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL34vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtcGFuZWwud2Vcbi8vIG1vZHVsZSBpZCA9IDk5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA3IDggMTAgMTIgMTMgMTcgMTkgMjAgMjEgMjUgMjcgMjgiLCI8IS0tIEluc3BpcmVkIGJ5IGJvb3RzdHJhcCBodHRwOi8vZ2V0Ym9vdHN0cmFwLmNvbS8gLS0+XG48dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJwYW5lbCBwYW5lbC17e3R5cGV9fVwiIHN0eWxlPVwiYm9yZGVyLXdpZHRoOnt7Ym9yZGVyfX1cIj5cbiAgICA8dGV4dCBjbGFzcz1cInBhbmVsLWhlYWRlciBwYW5lbC1oZWFkZXIte3t0eXBlfX1cIlxuICAgICAgICAgIHN0eWxlPVwicGFkZGluZy10b3A6e3twYWRkaW5nSGVhZH19O3BhZGRpbmctYm90dG9tOnt7cGFkZGluZ0hlYWR9fTtwYWRkaW5nLWxlZnQ6e3twYWRkaW5nSGVhZCoxLjV9fTtwYWRkaW5nLXJpZ2h0Ont7cGFkZGluZ0hlYWQqMS41fX1cIj5cbiAgICAgIHt7dGl0bGV9fVxuICAgIDwvdGV4dD5cbiAgICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keSBwYW5lbC1ib2R5LXt7dHlwZX19XCJcbiAgICAgICAgIHN0eWxlPVwicGFkZGluZy10b3A6e3twYWRkaW5nQm9keX19O3BhZGRpbmctYm90dG9tOnt7cGFkZGluZ0JvZHl9fTtwYWRkaW5nLWxlZnQ6e3twYWRkaW5nQm9keSoxLjV9fTtwYWRkaW5nLXJpZ2h0Ont7cGFkZGluZ0JvZHkqMS41fX1cIj5cbiAgICAgIDxjb250ZW50PjwvY29udGVudD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBkYXRhOiB7XG4gICAgICB0eXBlOiAnZGVmYXVsdCcsXG4gICAgICB0aXRsZTogJycsXG4gICAgICBwYWRkaW5nQm9keTogMjAsXG4gICAgICBwYWRkaW5nSGVhZDogMjAsXG4gICAgICBkYXRhQ2xhc3M6ICcnLCAvLyBGSVhNRSB0cmFuc2ZlciBjbGFzc1xuICAgICAgYm9yZGVyOiAwXG4gICAgfSxcbiAgICByZWFkeTogZnVuY3Rpb24oKSB7XG4gICAgfVxuICB9XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICAucGFuZWwge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAvKmJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50OyovXG4gICAgLypib3JkZXItcmFkaXVzOiAxMHB4OyovXG4gICAgLyotd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsMCwwLC4wNSk7Ki9cbiAgICAvKmJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsMCwwLC4wNSk7Ki9cbiAgICBib3JkZXItY29sb3I6ICNkZGRkZGQ7XG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIH1cblxuICAucGFuZWwtZGVmYXVsdCB7XG4gIH1cblxuICAucGFuZWwtcHJpbWFyeSB7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoNDAsIDk2LCAxNDQpO1xuICB9XG5cbiAgLnBhbmVsLXN1Y2Nlc3Mge1xuICAgIGJvcmRlci1jb2xvcjogcmdiKDc2LCAxNzQsIDc2KTtcblxuICB9XG5cbiAgLnBhbmVsLWluZm8ge1xuICAgIGJvcmRlci1jb2xvcjogcmdiKDcwLCAxODQsIDIxOCk7XG5cbiAgfVxuXG4gIC5wYW5lbC13YXJuaW5nIHtcbiAgICBib3JkZXItY29sb3I6IHJnYigyMzgsIDE2MiwgNTQpO1xuXG4gIH1cblxuICAucGFuZWwtZGFuZ2VyIHtcbiAgICBib3JkZXItY29sb3I6IHJnYigyMTIsIDYzLCA1OCk7XG5cbiAgfVxuXG4gIC5wYW5lbC1oZWFkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIC8qcGFkZGluZy1sZWZ0OiAxMnB4OyovXG4gICAgLypwYWRkaW5nLXJpZ2h0OiAxMnB4OyovXG4gICAgLypwYWRkaW5nLXRvcDogMjBweDsqL1xuICAgIC8qcGFkZGluZy1ib3R0b206IDIwcHg7Ki9cbiAgICBjb2xvcjogIzMzMztcbiAgfVxuXG4gIC5wYW5lbC1oZWFkZXItZGVmYXVsdCB7XG4gIH1cblxuICAucGFuZWwtaGVhZGVyLXByaW1hcnkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MCwgOTYsIDE0NCk7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gIH1cblxuICAucGFuZWwtaGVhZGVyLXN1Y2Nlc3Mge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5MiwgMTg0LCA5Mik7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gIH1cblxuICAucGFuZWwtaGVhZGVyLWluZm8ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5MSwgMTkyLCAyMjIpO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICB9XG5cbiAgLnBhbmVsLWhlYWRlci13YXJuaW5nIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAxNzMsIDc4KTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgfVxuXG4gIC5wYW5lbC1oZWFkZXItZGFuZ2VyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE3LCA4MywgNzkpO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICB9XG5cbiAgLnBhbmVsLWJvZHkge1xuICAgIC8qcGFkZGluZy1sZWZ0OiAxMnB4OyovXG4gICAgLypwYWRkaW5nLXJpZ2h0OiAxMnB4OyovXG4gICAgLypwYWRkaW5nLXRvcDogMjBweDsqL1xuICAgIC8qcGFkZGluZy1ib3R0b206IDIwcHg7Ki9cbiAgfVxuXG4gIC5wYW5lbC1ib2R5LWRlZmF1bHQge1xuICB9XG5cbiAgLnBhbmVsLWJvZHktcHJpbWFyeSB7XG4gIH1cblxuICAucGFuZWwtYm9keS1zdWNjZXNzIHtcbiAgfVxuXG4gIC5wYW5lbC1ib2R5LWluZm8ge1xuICB9XG5cbiAgLnBhbmVsLWJvZHktd2FybmluZyB7XG4gIH1cblxuICAucGFuZWwtYm9keS1kYW5nZXIge1xuICB9XG48L3N0eWxlPlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1wYW5lbC53ZT9kNjY5ZDk0MiIsInZhciBfX3dlZXhfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vd3hjLXRpcC53ZVwiKVxudmFyIF9fd2VleF9zdHlsZV9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi93eGMtdGlwLndlXCIpXG52YXIgX193ZWV4X3NjcmlwdF9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvc2NyaXB0LmpzIWJhYmVsLWxvYWRlcj9wcmVzZXRzW109QzpcXFxcdmJhb2xpLXdlZXhcXFxcdmJhb2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnByZXNldHM9QzpcXFxcdmJhb2xpLXdlZXhcXFxcdmJhb2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnBsdWdpbnNbXT1DOlxcXFx2YmFvbGktd2VleFxcXFx2YmFvbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZwbHVnaW5zPUM6XFxcXHZiYW9saS13ZWV4XFxcXHZiYW9saVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJmNvbW1lbnRzPWZhbHNlIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdHMhLi93eGMtdGlwLndlXCIpXG5cbl9fd2VleF9kZWZpbmVfXygnQHdlZXgtY29tcG9uZW50L3d4Yy10aXAnLCBbXSwgZnVuY3Rpb24oX193ZWV4X3JlcXVpcmVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X21vZHVsZV9fKSB7XG5cbiAgICBfX3dlZXhfc2NyaXB0X18oX193ZWV4X21vZHVsZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfcmVxdWlyZV9fKVxuICAgIGlmIChfX3dlZXhfZXhwb3J0c19fLl9fZXNNb2R1bGUgJiYgX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0KSB7XG4gICAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cyA9IF9fd2VleF9leHBvcnRzX18uZGVmYXVsdFxuICAgIH1cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnRlbXBsYXRlID0gX193ZWV4X3RlbXBsYXRlX19cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnN0eWxlID0gX193ZWV4X3N0eWxlX19cblxufSlcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy10aXAud2Vcbi8vIG1vZHVsZSBpZCA9IDEwMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNyA4IDEwIDEyIDEzIDE3IDE5IDIwIDIxIDI1IDI3IDI4IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImRpdlwiLFxuICBcImNsYXNzTGlzdFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIFsndGlwJywgJ3RpcC0nICsgKHRoaXMudHlwZSldfSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogZnVuY3Rpb24gKCkge3JldHVybiBbJ3RpcC10eHQnLCAndGlwLXR4dC0nICsgKHRoaXMudHlwZSldfSxcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnZhbHVlfVxuICAgICAgfVxuICAgIH1cbiAgXVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy10aXAud2Vcbi8vIG1vZHVsZSBpZCA9IDEwMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNyA4IDEwIDEyIDEzIDE3IDE5IDIwIDIxIDI1IDI3IDI4IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidGlwXCI6IHtcbiAgICBcInBhZGRpbmdMZWZ0XCI6IDM2LFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IDM2LFxuICAgIFwicGFkZGluZ1RvcFwiOiAzNixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogMzYsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogMTBcbiAgfSxcbiAgXCJ0aXAtdHh0XCI6IHtcbiAgICBcImZvbnRTaXplXCI6IDI4XG4gIH0sXG4gIFwidGlwLXN1Y2Nlc3NcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2RmZjBkOFwiLFxuICAgIFwiYm9yZGVyQ29sb3JcIjogXCIjZDZlOWM2XCJcbiAgfSxcbiAgXCJ0aXAtdHh0LXN1Y2Nlc3NcIjoge1xuICAgIFwiY29sb3JcIjogXCIjM2M3NjNkXCJcbiAgfSxcbiAgXCJ0aXAtaW5mb1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZDllZGY3XCIsXG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiNiY2U4ZjFcIlxuICB9LFxuICBcInRpcC10eHQtaW5mb1wiOiB7XG4gICAgXCJjb2xvclwiOiBcIiMzMTcwOGZcIlxuICB9LFxuICBcInRpcC13YXJuaW5nXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmY2Y4ZTNcIixcbiAgICBcImJvcmRlckNvbG9yXCI6IFwiI2ZhZWJjY1wiXG4gIH0sXG4gIFwidGlwLXR4dC13YXJuaW5nXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzhhNmQzYlwiXG4gIH0sXG4gIFwidGlwLWRhbmdlclwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZjJkZWRlXCIsXG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiNlYmNjZDFcIlxuICB9LFxuICBcInRpcC10eHQtZGFuZ2VyXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiI2E5NDQ0MlwiXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL34vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtdGlwLndlXG4vLyBtb2R1bGUgaWQgPSAxMDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDcgOCAxMCAxMiAxMyAxNyAxOSAyMCAyMSAyNSAyNyAyOCIsIjwhLS0gSW5zcGlyZWQgYnkgYm9vdHN0cmFwIGh0dHA6Ly9nZXRib290c3RyYXAuY29tLyAtLT5cbjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cInRpcCB0aXAte3t0eXBlfX1cIj5cbiAgICA8dGV4dCBjbGFzcz1cInRpcC10eHQgdGlwLXR4dC17e3R5cGV9fVwiPnt7dmFsdWV9fTwvdGV4dD5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBkYXRhOiB7XG4gICAgICB0eXBlOiAnc3VjY2VzcycsXG4gICAgICB2YWx1ZTogJydcbiAgICB9XG4gIH1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4gIC50aXAge1xuICAgIHBhZGRpbmctbGVmdDogMzZweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzNnB4O1xuICAgIHBhZGRpbmctdG9wOiAzNnB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAzNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIH1cbiAgXG4gIC50aXAtdHh0e1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgfVxuXG4gIC50aXAtc3VjY2VzcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RmZjBkODtcbiAgICBib3JkZXItY29sb3I6ICNkNmU5YzY7XG4gIH1cblxuICAudGlwLXR4dC1zdWNjZXNzIHtcbiAgICBjb2xvcjogIzNjNzYzZDtcbiAgfVxuXG4gIC50aXAtaW5mbyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q5ZWRmNztcbiAgICBib3JkZXItY29sb3I6ICNiY2U4ZjE7XG4gIH1cblxuICAudGlwLXR4dC1pbmZvIHtcbiAgICBjb2xvcjogIzMxNzA4ZjtcbiAgfVxuXG4gIC50aXAtd2FybmluZyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZjhlMztcbiAgICBib3JkZXItY29sb3I6ICNmYWViY2M7XG4gIH1cblxuICAudGlwLXR4dC13YXJuaW5nIHtcbiAgICBjb2xvcjogIzhhNmQzYjtcbiAgfVxuXG4gIC50aXAtZGFuZ2VyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJkZWRlO1xuICAgIGJvcmRlci1jb2xvcjogI2ViY2NkMTtcbiAgfVxuXG4gIC50aXAtdHh0LWRhbmdlciB7XG4gICAgY29sb3I6ICNhOTQ0NDI7XG4gIH1cbjwvc3R5bGU+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy10aXAud2U/MjFlYjE1OTQiLCJ2YXIgX193ZWV4X3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL3d4Yy1jb3VudGRvd24ud2VcIilcbnZhciBfX3dlZXhfc3R5bGVfXyA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c3R5bGVzIS4vd3hjLWNvdW50ZG93bi53ZVwiKVxudmFyIF9fd2VleF9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL3NjcmlwdC5qcyFiYWJlbC1sb2FkZXI/cHJlc2V0c1tdPUM6XFxcXHZiYW9saS13ZWV4XFxcXHZiYW9saVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcHJlc2V0LWVzMjAxNSZwcmVzZXRzPUM6XFxcXHZiYW9saS13ZWV4XFxcXHZiYW9saVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcHJlc2V0LWVzMjAxNSZwbHVnaW5zW109QzpcXFxcdmJhb2xpLXdlZXhcXFxcdmJhb2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmcGx1Z2lucz1DOlxcXFx2YmFvbGktd2VleFxcXFx2YmFvbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZjb21tZW50cz1mYWxzZSEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zY3JpcHRzIS4vd3hjLWNvdW50ZG93bi53ZVwiKVxuXG5fX3dlZXhfZGVmaW5lX18oJ0B3ZWV4LWNvbXBvbmVudC93eGMtY291bnRkb3duJywgW10sIGZ1bmN0aW9uKF9fd2VleF9yZXF1aXJlX18sIF9fd2VleF9leHBvcnRzX18sIF9fd2VleF9tb2R1bGVfXykge1xuXG4gICAgX193ZWV4X3NjcmlwdF9fKF9fd2VleF9tb2R1bGVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X3JlcXVpcmVfXylcbiAgICBpZiAoX193ZWV4X2V4cG9ydHNfXy5fX2VzTW9kdWxlICYmIF9fd2VleF9leHBvcnRzX18uZGVmYXVsdCkge1xuICAgICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMgPSBfX3dlZXhfZXhwb3J0c19fLmRlZmF1bHRcbiAgICB9XG5cbiAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cy50ZW1wbGF0ZSA9IF9fd2VleF90ZW1wbGF0ZV9fXG5cbiAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cy5zdHlsZSA9IF9fd2VleF9zdHlsZV9fXG5cbn0pXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtY291bnRkb3duLndlXG4vLyBtb2R1bGUgaWQgPSAxMDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDcgOCAxMCAxMiAxMyAxNyAxOSAyMCAyMSAyNSAyNyAyOCIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJkaXZcIixcbiAgXCJzdHlsZVwiOiB7XG4gICAgXCJvdmVyZmxvd1wiOiBcImhpZGRlblwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiXG4gIH0sXG4gIFwiZXZlbnRzXCI6IHtcbiAgICBcImFwcGVhclwiOiBcImFwcGVhcmVkXCIsXG4gICAgXCJkaXNhcHBlYXJcIjogXCJkaXNhcHBlYXJlZFwiXG4gIH0sXG4gIFwiY2hpbGRyZW5cIjogW1xuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImNvbnRlbnRcIlxuICAgIH1cbiAgXVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1jb3VudGRvd24ud2Vcbi8vIG1vZHVsZSBpZCA9IDEwNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNyA4IDEwIDEyIDEzIDE3IDE5IDIwIDIxIDI1IDI3IDI4IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwid3JhcFwiOiB7XG4gICAgXCJvdmVyZmxvd1wiOiBcImhpZGRlblwiXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL34vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtY291bnRkb3duLndlXG4vLyBtb2R1bGUgaWQgPSAxMDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDcgOCAxMCAxMiAxMyAxNyAxOSAyMCAyMSAyNSAyNyAyOCIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IHN0eWxlPVwib3ZlcmZsb3c6IGhpZGRlbjsgZmxleC1kaXJlY3Rpb246IHJvdztcIiBvbmFwcGVhcj1cImFwcGVhcmVkXCIgb25kaXNhcHBlYXI9XCJkaXNhcHBlYXJlZFwiPlxuICAgICAgICA8Y29udGVudD48L2NvbnRlbnQ+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c3R5bGU+XG4ud3JhcCB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbjwvc3R5bGU+XG5cbjxzY3JpcHQ+XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBkYXRhOiB7XG4gICAgICAgIG5vdzogMCxcbiAgICAgICAgcmVtYWluOiAwLFxuICAgICAgICB0aW1lOiB7XG4gICAgICAgICAgICBlbGFwc2U6IDAsXG4gICAgICAgICAgICBEOiAnMCcsXG4gICAgICAgICAgICBERDogJzAnLFxuICAgICAgICAgICAgaDogJzAnLFxuICAgICAgICAgICAgaGg6ICcwMCcsXG4gICAgICAgICAgICBIOiAnMCcsXG4gICAgICAgICAgICBISDogJzAnLFxuICAgICAgICAgICAgbTogJzAnLFxuICAgICAgICAgICAgbW06ICcwMCcsXG4gICAgICAgICAgICBNOiAnMCcsXG4gICAgICAgICAgICBNTTogJzAnLFxuICAgICAgICAgICAgczogJzAnLFxuICAgICAgICAgICAgc3M6ICcwMCcsXG4gICAgICAgICAgICBTOiAnMCcsXG4gICAgICAgICAgICBTUzogJzAnXG4gICAgICAgIH0sXG4gICAgICAgIG91dG9mdmlldzogZmFsc2VcbiAgICB9LFxuICAgIHJlYWR5OiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMucmVtYWluIDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyB0aGlzLmlzV2ViID0gdGhpcy4kZ2V0Q29uZmlnKCkuZW52LnBsYXRmb3JtID09PSAnV2ViJztcbiAgICAgICAgdGhpcy5ub3cgPSBEYXRlLm5vdygpO1xuICAgICAgICB0aGlzLm5leHRUaWNrKCk7XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIG5leHRUaWNrOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm91dG9mdmlldykge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQodGhpcy5uZXh0VGljay5iaW5kKHRoaXMpLCAxMDAwKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aW1lLmVsYXBzZSA9IHBhcnNlSW50KChEYXRlLm5vdygpIC0gdGhpcy5ub3cpIC8gMTAwMCk7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jYWxjKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgndGljaycsIE9iamVjdC5hc3NpZ24oe30sIHRoaXMudGltZSkpO1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KHRoaXMubmV4dFRpY2suYmluZCh0aGlzKSwgMTAwMCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnYWxhcm0nLCBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnRpbWUpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5fYXBwLnVwZGF0ZUFjdGlvbnMoKTsgXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGZvcm1hdDogZnVuY3Rpb24oc3RyKSB7XG4gICAgICAgICAgICBpZiAoc3RyLmxlbmd0aCA+PSAyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0cjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICcwJyArIHN0cjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY2FsYzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgcmVtYWluID0gdGhpcy5yZW1haW4gLSB0aGlzLnRpbWUuZWxhcHNlO1xuICAgICAgICAgICAgaWYgKHJlbWFpbiA8IDApIHtcbiAgICAgICAgICAgICAgICByZW1haW4gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy50aW1lLkQgPSBTdHJpbmcocGFyc2VJbnQocmVtYWluIC8gODY0MDApKTtcbiAgICAgICAgICAgIHRoaXMudGltZS5ERCA9IHRoaXMuZm9ybWF0KHRoaXMudGltZS5EKTtcbiAgICAgICAgICAgIHRoaXMudGltZS5oID0gU3RyaW5nKHBhcnNlSW50KChyZW1haW4gLSBwYXJzZUludCh0aGlzLnRpbWUuRCkgKiA4NjQwMCkgLyAzNjAwKSk7XG4gICAgICAgICAgICB0aGlzLnRpbWUuaGggPSB0aGlzLmZvcm1hdCh0aGlzLnRpbWUuaCk7XG4gICAgICAgICAgICB0aGlzLnRpbWUuSCA9IFN0cmluZyhwYXJzZUludChyZW1haW4gLyAzNjAwKSk7XG4gICAgICAgICAgICB0aGlzLnRpbWUuSEggPSB0aGlzLmZvcm1hdCh0aGlzLnRpbWUuSCk7XG4gICAgICAgICAgICB0aGlzLnRpbWUubSA9IFN0cmluZyhwYXJzZUludCgocmVtYWluIC0gcGFyc2VJbnQodGhpcy50aW1lLkgpICogMzYwMCkgLyA2MCkpO1xuICAgICAgICAgICAgdGhpcy50aW1lLm1tID0gdGhpcy5mb3JtYXQodGhpcy50aW1lLm0pO1xuICAgICAgICAgICAgdGhpcy50aW1lLk0gPSBTdHJpbmcocGFyc2VJbnQocmVtYWluIC8gNjApKTtcbiAgICAgICAgICAgIHRoaXMudGltZS5NTSA9IHRoaXMuZm9ybWF0KHRoaXMudGltZS5NKTtcbiAgICAgICAgICAgIHRoaXMudGltZS5zID0gU3RyaW5nKHJlbWFpbiAtIHBhcnNlSW50KHRoaXMudGltZS5NKSAqIDYwKTtcbiAgICAgICAgICAgIHRoaXMudGltZS5zcyA9IHRoaXMuZm9ybWF0KHRoaXMudGltZS5zKTtcbiAgICAgICAgICAgIHRoaXMudGltZS5TID0gU3RyaW5nKHJlbWFpbik7XG4gICAgICAgICAgICB0aGlzLnRpbWUuU1MgPSB0aGlzLmZvcm1hdCh0aGlzLnRpbWUuUyk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZW1haW4sIHRoaXMuRCwgdGhpcy5oLCB0aGlzLmhoLCB0aGlzLkgsIHRoaXMuSEgsIHRoaXMubSwgdGhpcy5NTSwgdGhpcy5zLCB0aGlzLnNzLCB0aGlzLlMsIHRoaXMuU1MpO1xuICAgICAgICAgICAgcmV0dXJuIHJlbWFpbiA+IDA7XG4gICAgICAgIH0sXG4gICAgICAgIGFwcGVhcmVkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMub3V0b2Z2aWV3ID0gZmFsc2U7XG4gICAgICAgIH0sXG4gICAgICAgIGRpc2FwcGVhcmVkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMub3V0b2Z2aWV3ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbjwvc2NyaXB0PlxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3dlZXgtY29tcG9uZW50cy9zcmMvd3hjLWNvdW50ZG93bi53ZT80NmE2Mjg4YyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvYXNzaWduLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDcgOCAxMCAxMiAxMyAxNyAxOSAyMCAyMSAyNSAyNyAyOCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24nKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5hc3NpZ247XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDcgOCAxMCAxMiAxMyAxNyAxOSAyMCAyMSAyNSAyNyAyOCIsIi8vIDE5LjEuMy4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiwgJ09iamVjdCcsIHthc3NpZ246IHJlcXVpcmUoJy4vX29iamVjdC1hc3NpZ24nKX0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gMTExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCA3IDggMTAgMTIgMTMgMTcgMTkgMjAgMjEgMjUgMjcgMjgiLCIndXNlIHN0cmljdCc7XG4vLyAxOS4xLjIuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlLCAuLi4pXG52YXIgZ2V0S2V5cyAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpXG4gICwgZ09QUyAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpXG4gICwgcElFICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJylcbiAgLCB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgSU9iamVjdCAgPSByZXF1aXJlKCcuL19pb2JqZWN0JylcbiAgLCAkYXNzaWduICA9IE9iamVjdC5hc3NpZ247XG5cbi8vIHNob3VsZCB3b3JrIHdpdGggc3ltYm9scyBhbmQgc2hvdWxkIGhhdmUgZGV0ZXJtaW5pc3RpYyBwcm9wZXJ0eSBvcmRlciAoVjggYnVnKVxubW9kdWxlLmV4cG9ydHMgPSAhJGFzc2lnbiB8fCByZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHZhciBBID0ge31cbiAgICAsIEIgPSB7fVxuICAgICwgUyA9IFN5bWJvbCgpXG4gICAgLCBLID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0JztcbiAgQVtTXSA9IDc7XG4gIEsuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24oayl7IEJba10gPSBrOyB9KTtcbiAgcmV0dXJuICRhc3NpZ24oe30sIEEpW1NdICE9IDcgfHwgT2JqZWN0LmtleXMoJGFzc2lnbih7fSwgQikpLmpvaW4oJycpICE9IEs7XG59KSA/IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSl7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgdmFyIFQgICAgID0gdG9PYmplY3QodGFyZ2V0KVxuICAgICwgYUxlbiAgPSBhcmd1bWVudHMubGVuZ3RoXG4gICAgLCBpbmRleCA9IDFcbiAgICAsIGdldFN5bWJvbHMgPSBnT1BTLmZcbiAgICAsIGlzRW51bSAgICAgPSBwSUUuZjtcbiAgd2hpbGUoYUxlbiA+IGluZGV4KXtcbiAgICB2YXIgUyAgICAgID0gSU9iamVjdChhcmd1bWVudHNbaW5kZXgrK10pXG4gICAgICAsIGtleXMgICA9IGdldFN5bWJvbHMgPyBnZXRLZXlzKFMpLmNvbmNhdChnZXRTeW1ib2xzKFMpKSA6IGdldEtleXMoUylcbiAgICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAgICwgaiAgICAgID0gMFxuICAgICAgLCBrZXk7XG4gICAgd2hpbGUobGVuZ3RoID4gailpZihpc0VudW0uY2FsbChTLCBrZXkgPSBrZXlzW2orK10pKVRba2V5XSA9IFNba2V5XTtcbiAgfSByZXR1cm4gVDtcbn0gOiAkYXNzaWduO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gMTEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCA3IDggMTAgMTIgMTMgMTcgMTkgMjAgMjEgMjUgMjcgMjgiLCJ2YXIgX193ZWV4X3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL3d4Yy1tYXJxdWVlLndlXCIpXG52YXIgX193ZWV4X3N0eWxlX18gPSByZXF1aXJlKFwiISEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL3d4Yy1tYXJxdWVlLndlXCIpXG52YXIgX193ZWV4X3NjcmlwdF9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvc2NyaXB0LmpzIWJhYmVsLWxvYWRlcj9wcmVzZXRzW109QzpcXFxcdmJhb2xpLXdlZXhcXFxcdmJhb2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnByZXNldHM9QzpcXFxcdmJhb2xpLXdlZXhcXFxcdmJhb2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnBsdWdpbnNbXT1DOlxcXFx2YmFvbGktd2VleFxcXFx2YmFvbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZwbHVnaW5zPUM6XFxcXHZiYW9saS13ZWV4XFxcXHZiYW9saVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJmNvbW1lbnRzPWZhbHNlIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdHMhLi93eGMtbWFycXVlZS53ZVwiKVxuXG5fX3dlZXhfZGVmaW5lX18oJ0B3ZWV4LWNvbXBvbmVudC93eGMtbWFycXVlZScsIFtdLCBmdW5jdGlvbihfX3dlZXhfcmVxdWlyZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfbW9kdWxlX18pIHtcblxuICAgIF9fd2VleF9zY3JpcHRfXyhfX3dlZXhfbW9kdWxlX18sIF9fd2VleF9leHBvcnRzX18sIF9fd2VleF9yZXF1aXJlX18pXG4gICAgaWYgKF9fd2VleF9leHBvcnRzX18uX19lc01vZHVsZSAmJiBfX3dlZXhfZXhwb3J0c19fLmRlZmF1bHQpIHtcbiAgICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzID0gX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0XG4gICAgfVxuXG4gICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMudGVtcGxhdGUgPSBfX3dlZXhfdGVtcGxhdGVfX1xuXG4gICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMuc3R5bGUgPSBfX3dlZXhfc3R5bGVfX1xuXG59KVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtY29tcG9uZW50cy9zcmMvd3hjLW1hcnF1ZWUud2Vcbi8vIG1vZHVsZSBpZCA9IDExM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgNyA4IDEwIDEyIDEzIDE3IDE5IDIwIDIxIDI1IDI3IDI4IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImRpdlwiLFxuICBcImNsYXNzTGlzdFwiOiBbXG4gICAgXCJ3cmFwXCJcbiAgXSxcbiAgXCJldmVudHNcIjoge1xuICAgIFwiYXBwZWFyXCI6IFwiYXBwZWFyZWRcIixcbiAgICBcImRpc2FwcGVhclwiOiBcImRpc2FwcGVhcmVkXCJcbiAgfSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImlkXCI6IFwiYW5pbVwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcImFuaW1cIlxuICAgICAgXSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiY29udGVudFwiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+L3dlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuL34vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtbWFycXVlZS53ZVxuLy8gbW9kdWxlIGlkID0gMTE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA3IDggMTAgMTIgMTMgMTcgMTkgMjAgMjEgMjUgMjcgMjgiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ3cmFwXCI6IHtcbiAgICBcIm92ZXJmbG93XCI6IFwiaGlkZGVuXCIsXG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCJcbiAgfSxcbiAgXCJhbmltXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcInRyYW5zZm9ybVwiOiBcInRyYW5zbGF0ZVkoMCkgdHJhbnNsYXRlWigwKVwiXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL34vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtbWFycXVlZS53ZVxuLy8gbW9kdWxlIGlkID0gMTE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA3IDggMTAgMTIgMTMgMTcgMTkgMjAgMjEgMjUgMjcgMjgiLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cIndyYXBcIiBvbmFwcGVhcj1cImFwcGVhcmVkXCIgb25kaXNhcHBlYXI9XCJkaXNhcHBlYXJlZFwiPlxuICAgICAgICA8ZGl2IGlkPVwiYW5pbVwiIGNsYXNzPVwiYW5pbVwiPlxuICAgICAgICAgICAgPGNvbnRlbnQ+PC9jb250ZW50PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZT5cbi53cmFwIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmFuaW0ge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSB0cmFuc2xhdGVaKDApO1xufVxuPC9zdHlsZT5cblxuPHNjcmlwdD5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGRhdGE6IHtcbiAgICAgICAgc3RlcDogMCxcbiAgICAgICAgY291bnQ6IDAsXG4gICAgICAgIGluZGV4OiAxLFxuICAgICAgICBkdXJhdGlvbjogMCxcbiAgICAgICAgaW50ZXJ2YWw6IDAsXG4gICAgICAgIG91dG9mdmlldzogZmFsc2VcbiAgICB9LFxuICAgIHJlYWR5OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmludGVydmFsID4gMFxuICAgICAgICAgICAgICAgICYmIHRoaXMuc3RlcCA+IDBcbiAgICAgICAgICAgICAgICAmJiB0aGlzLmR1cmF0aW9uID4gMCkge1xuICAgICAgICAgICAgdGhpcy5uZXh0VGljaygpOyAgICBcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBuZXh0VGljazogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICBpZiAodGhpcy5vdXRvZnZpZXcpIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KHNlbGYubmV4dFRpY2suYmluZChzZWxmKSwgc2VsZi5pbnRlcnZhbCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuYW5pbWF0aW9uKHNlbGYubmV4dFRpY2suYmluZChzZWxmKSk7XG4gICAgICAgICAgICAgICAgfSwgc2VsZi5pbnRlcnZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGFuaW1hdGlvbjogZnVuY3Rpb24oY2IpIHtcbiAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgICAgIHZhciBvZmZzZXQgPSAtc2VsZi5zdGVwICogc2VsZi5pbmRleDtcbiAgICAgICAgICAgIHZhciAkYW5pbWF0aW9uID0gcmVxdWlyZSgnQHdlZXgtbW9kdWxlL2FuaW1hdGlvbicpO1xuICAgICAgICAgICAgJGFuaW1hdGlvbi50cmFuc2l0aW9uKHRoaXMuJGVsKCdhbmltJyksIHtcbiAgICAgICAgICAgICAgc3R5bGVzOiB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgnICsgU3RyaW5nKG9mZnNldCkgKyAncHgpIHRyYW5zbGF0ZVooMCknXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHRpbWluZ0Z1bmN0aW9uOiAnZWFzZScsXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiBzZWxmLmR1cmF0aW9uXG4gICAgICAgICAgICB9LCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmluZGV4ID0gKHNlbGYuaW5kZXggKyAxKSAlIChzZWxmLmNvdW50KTtcbiAgICAgICAgICAgICAgICBzZWxmLiRlbWl0KCdjaGFuZ2UnLCB7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4OiBzZWxmLmluZGV4LFxuICAgICAgICAgICAgICAgICAgICBjb3VudDogc2VsZi5jb3VudFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGNiICYmIGNiKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgYXBwZWFyZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5vdXRvZnZpZXcgPSBmYWxzZTtcbiAgICAgICAgfSxcbiAgICAgICAgZGlzYXBwZWFyZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5vdXRvZnZpZXcgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxufVxuPC9zY3JpcHQ+XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtbWFycXVlZS53ZT80MTJiNjI4NiIsInZhciBfX3dlZXhfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vd3hjLW5hdmJhci53ZVwiKVxudmFyIF9fd2VleF9zdHlsZV9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi93eGMtbmF2YmFyLndlXCIpXG52YXIgX193ZWV4X3NjcmlwdF9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvc2NyaXB0LmpzIWJhYmVsLWxvYWRlcj9wcmVzZXRzW109QzpcXFxcdmJhb2xpLXdlZXhcXFxcdmJhb2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnByZXNldHM9QzpcXFxcdmJhb2xpLXdlZXhcXFxcdmJhb2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnBsdWdpbnNbXT1DOlxcXFx2YmFvbGktd2VleFxcXFx2YmFvbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZwbHVnaW5zPUM6XFxcXHZiYW9saS13ZWV4XFxcXHZiYW9saVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJmNvbW1lbnRzPWZhbHNlIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdHMhLi93eGMtbmF2YmFyLndlXCIpXG5cbl9fd2VleF9kZWZpbmVfXygnQHdlZXgtY29tcG9uZW50L3d4Yy1uYXZiYXInLCBbXSwgZnVuY3Rpb24oX193ZWV4X3JlcXVpcmVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X21vZHVsZV9fKSB7XG5cbiAgICBfX3dlZXhfc2NyaXB0X18oX193ZWV4X21vZHVsZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfcmVxdWlyZV9fKVxuICAgIGlmIChfX3dlZXhfZXhwb3J0c19fLl9fZXNNb2R1bGUgJiYgX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0KSB7XG4gICAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cyA9IF9fd2VleF9leHBvcnRzX18uZGVmYXVsdFxuICAgIH1cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnRlbXBsYXRlID0gX193ZWV4X3RlbXBsYXRlX19cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnN0eWxlID0gX193ZWV4X3N0eWxlX19cblxufSlcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1uYXZiYXIud2Vcbi8vIG1vZHVsZSBpZCA9IDExN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgNyA4IDEwIDEyIDEzIDE3IDE5IDIwIDIxIDI1IDI3IDI4IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImRpdlwiLFxuICBcImNsYXNzTGlzdFwiOiBbXG4gICAgXCJjb250YWluZXJcIlxuICBdLFxuICBcInN0eWxlXCI6IHtcbiAgICBcImhlaWdodFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuaGVpZ2h0fSxcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuYmFja2dyb3VuZENvbG9yfVxuICB9LFxuICBcImF0dHJcIjoge1xuICAgIFwiZGF0YVJvbGVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmRhdGFSb2xlfVxuICB9LFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwicmlnaHQtdGV4dFwiXG4gICAgICBdLFxuICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnJpZ2h0SXRlbUNvbG9yfVxuICAgICAgfSxcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwibmF2aUl0ZW1Qb3NpdGlvblwiOiBcInJpZ2h0XCIsXG4gICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnJpZ2h0SXRlbVRpdGxlfVxuICAgICAgfSxcbiAgICAgIFwic2hvd25cIjogZnVuY3Rpb24gKCkge3JldHVybiAhdGhpcy5yaWdodEl0ZW1TcmN9LFxuICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICBcImNsaWNrXCI6IFwib25jbGlja3JpZ2h0aXRlbVwiXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJpbWFnZVwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcInJpZ2h0LWltYWdlXCJcbiAgICAgIF0sXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcIm5hdmlJdGVtUG9zaXRpb25cIjogXCJyaWdodFwiLFxuICAgICAgICBcInNyY1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMucmlnaHRJdGVtU3JjfVxuICAgICAgfSxcbiAgICAgIFwic2hvd25cIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnJpZ2h0SXRlbVNyY30sXG4gICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgIFwiY2xpY2tcIjogXCJvbmNsaWNrcmlnaHRpdGVtXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJsZWZ0LXRleHRcIlxuICAgICAgXSxcbiAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICBcImNvbG9yXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5sZWZ0SXRlbUNvbG9yfVxuICAgICAgfSxcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwibmF2aUl0ZW1Qb3NpdGlvblwiOiBcImxlZnRcIixcbiAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMubGVmdEl0ZW1UaXRsZX1cbiAgICAgIH0sXG4gICAgICBcInNob3duXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gIXRoaXMubGVmdEl0ZW1TcmN9LFxuICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICBcImNsaWNrXCI6IFwib25jbGlja2xlZnRpdGVtXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwibGVmdC1pbWFnZVwiXG4gICAgICBdLFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJuYXZpSXRlbVBvc2l0aW9uXCI6IFwibGVmdFwiLFxuICAgICAgICBcInNyY1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMubGVmdEl0ZW1TcmN9XG4gICAgICB9LFxuICAgICAgXCJzaG93blwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMubGVmdEl0ZW1TcmN9LFxuICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICBcImNsaWNrXCI6IFwib25jbGlja2xlZnRpdGVtXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJjZW50ZXItdGV4dFwiXG4gICAgICBdLFxuICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnRpdGxlQ29sb3J9XG4gICAgICB9LFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJuYXZpSXRlbVBvc2l0aW9uXCI6IFwiY2VudGVyXCIsXG4gICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnRpdGxlfVxuICAgICAgfVxuICAgIH1cbiAgXVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1uYXZiYXIud2Vcbi8vIG1vZHVsZSBpZCA9IDExOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNyA4IDEwIDEyIDEzIDE3IDE5IDIwIDIxIDI1IDI3IDI4IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiY29udGFpbmVyXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcInBvc2l0aW9uXCI6IFwiZml4ZWRcIixcbiAgICBcInRvcFwiOiAwLFxuICAgIFwibGVmdFwiOiAwLFxuICAgIFwicmlnaHRcIjogMCxcbiAgICBcIndpZHRoXCI6IDc1MFxuICB9LFxuICBcInJpZ2h0LXRleHRcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwiYm90dG9tXCI6IDI4LFxuICAgIFwicmlnaHRcIjogMzIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJyaWdodFwiLFxuICAgIFwiZm9udFNpemVcIjogMzIsXG4gICAgXCJmb250RmFtaWx5XCI6IFwiJ09wZW4gU2FucycsIHNhbnMtc2VyaWZcIlxuICB9LFxuICBcImxlZnQtdGV4dFwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgXCJib3R0b21cIjogMjgsXG4gICAgXCJsZWZ0XCI6IDMyLFxuICAgIFwidGV4dEFsaWduXCI6IFwibGVmdFwiLFxuICAgIFwiZm9udFNpemVcIjogMzIsXG4gICAgXCJmb250RmFtaWx5XCI6IFwiJ09wZW4gU2FucycsIHNhbnMtc2VyaWZcIlxuICB9LFxuICBcImNlbnRlci10ZXh0XCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcImJvdHRvbVwiOiAyNSxcbiAgICBcImxlZnRcIjogMTcyLFxuICAgIFwicmlnaHRcIjogMTcyLFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCIsXG4gICAgXCJmb250U2l6ZVwiOiAzNixcbiAgICBcImZvbnRXZWlnaHRcIjogXCJib2xkXCJcbiAgfSxcbiAgXCJsZWZ0LWltYWdlXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcImJvdHRvbVwiOiAyMCxcbiAgICBcImxlZnRcIjogMjgsXG4gICAgXCJ3aWR0aFwiOiA1MCxcbiAgICBcImhlaWdodFwiOiA1MFxuICB9LFxuICBcInJpZ2h0LWltYWdlXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcImJvdHRvbVwiOiAyMCxcbiAgICBcInJpZ2h0XCI6IDI4LFxuICAgIFwid2lkdGhcIjogNTAsXG4gICAgXCJoZWlnaHRcIjogNTBcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vd2VleC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c3R5bGVzIS4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1uYXZiYXIud2Vcbi8vIG1vZHVsZSBpZCA9IDExOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNyA4IDEwIDEyIDEzIDE3IDE5IDIwIDIxIDI1IDI3IDI4IiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIiBzdHlsZT1cImhlaWdodDp7e2hlaWdodH19OyBiYWNrZ3JvdW5kLWNvbG9yOnt7YmFja2dyb3VuZENvbG9yfX07XCIgZGF0YS1yb2xlPXt7ZGF0YVJvbGV9fT5cbiAgICAgICAgPHRleHQgY2xhc3M9XCJyaWdodC10ZXh0XCIgc3R5bGU9XCJjb2xvcjp7e3JpZ2h0SXRlbUNvbG9yfX07XCIgbmF2aS1pdGVtLXBvc2l0aW9uPVwicmlnaHRcIiBpZj17eyFyaWdodEl0ZW1TcmN9fSBvbmNsaWNrID0gXCJvbmNsaWNrcmlnaHRpdGVtXCI+e3tyaWdodEl0ZW1UaXRsZX19PC90ZXh0PlxuICAgICAgICA8aW1hZ2UgY2xhc3M9XCJyaWdodC1pbWFnZVwiIG5hdmktaXRlbS1wb3NpdGlvbj1cInJpZ2h0XCIgc3JjPXt7cmlnaHRJdGVtU3JjfX0gaWY9e3tyaWdodEl0ZW1TcmN9fSBvbmNsaWNrPVwib25jbGlja3JpZ2h0aXRlbVwiPjwvaW1hZ2U+XG4gICAgICAgIDx0ZXh0IGNsYXNzPVwibGVmdC10ZXh0XCIgc3R5bGU9XCJjb2xvcjp7e2xlZnRJdGVtQ29sb3J9fTtcIiBuYXZpLWl0ZW0tcG9zaXRpb249XCJsZWZ0XCIgaWY9e3shbGVmdEl0ZW1TcmN9fSBvbmNsaWNrPSBcIm9uY2xpY2tsZWZ0aXRlbVwiPnt7bGVmdEl0ZW1UaXRsZX19PC90ZXh0PlxuICAgICAgICA8aW1hZ2UgY2xhc3M9XCJsZWZ0LWltYWdlXCIgbmF2aS1pdGVtLXBvc2l0aW9uPVwibGVmdFwiIHNyYz17e2xlZnRJdGVtU3JjfX0gaWY9e3tsZWZ0SXRlbVNyY319IG9uY2xpY2s9XCJvbmNsaWNrbGVmdGl0ZW1cIj48L2ltYWdlPlxuICAgICAgICA8dGV4dCBjbGFzcz1cImNlbnRlci10ZXh0XCIgc3R5bGU9XCJjb2xvcjp7e3RpdGxlQ29sb3J9fTtcIiBuYXZpLWl0ZW0tcG9zaXRpb249XCJjZW50ZXJcIj57e3RpdGxlfX08L3RleHQ+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c3R5bGU+XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7IFxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7IFxuICAgICAgICB0b3A6IDA7IFxuICAgICAgICBsZWZ0OiAwOyBcbiAgICAgICAgcmlnaHQ6IDA7IFxuICAgICAgICB3aWR0aDogNzUwO1xuICAgIH1cbiAgICAucmlnaHQtdGV4dCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXG4gICAgICAgIGJvdHRvbTogMjg7IFxuICAgICAgICByaWdodDogMzI7IFxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgZm9udC1zaXplOiAzMjsgXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgICB9XG4gICAgLmxlZnQtdGV4dCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXG4gICAgICAgIGJvdHRvbTogMjg7IFxuICAgICAgICBsZWZ0IDozMjsgXG4gICAgICAgIHRleHQtYWxpZ24gOmxlZnQ7ICBcbiAgICAgICAgZm9udC1zaXplOiAzMjsgXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgICB9XG4gICAgLmNlbnRlci10ZXh0IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyBcbiAgICAgICAgYm90dG9tOiAyNTsgXG4gICAgICAgIGxlZnQ6IDE3MjsgXG4gICAgICAgIHJpZ2h0OiAxNzI7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXG4gICAgICAgIGZvbnQtc2l6ZTogMzY7IFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG4gICAgLmxlZnQtaW1hZ2Uge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxuICAgICAgICBib3R0b206IDIwOyBcbiAgICAgICAgbGVmdDogMjg7IFxuICAgICAgICB3aWR0aDogNTA7IFxuICAgICAgICBoZWlnaHQ6IDUwO1xuICAgIH1cbiAgICAucmlnaHQtaW1hZ2Uge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxuICAgICAgICBib3R0b206IDIwOyBcbiAgICAgICAgcmlnaHQ6IDI4OyBcbiAgICAgICAgd2lkdGg6IDUwOyBcbiAgICAgICAgaGVpZ2h0OiA1MDtcbiAgICB9XG48L3N0eWxlPlxuXG48c2NyaXB0PlxuICAgIG1vZHVsZS5leHBvcnRzID0ge1xuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgZGF0YVJvbGU6ICduYXZiYXInLFxuXG4gICAgICAgICAgLy/lr7zoiKrmnaHog4zmma/oibJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdibGFjaycsXG5cbiAgICAgICAgICAvL+WvvOiIquadoemrmOW6plxuICAgICAgICAgIGhlaWdodDogODgsXG5cbiAgICAgICAgICAvL+WvvOiIquadoeagh+mimCBcbiAgICAgICAgICB0aXRsZTogXCJcIixcblxuICAgICAgICAgIC8v5a+86Iiq5p2h5qCH6aKY6aKc6ImyXG4gICAgICAgICAgdGl0bGVDb2xvcjogJ2JsYWNrJyxcblxuICAgICAgICAgIC8v5Y+z5L6n5oyJ6ZKu5Zu+54mHXG4gICAgICAgICAgcmlnaHRJdGVtU3JjOiAnJyxcblxuICAgICAgICAgIC8v5Y+z5L6n5oyJ6ZKu5qCH6aKYXG4gICAgICAgICAgcmlnaHRJdGVtVGl0bGU6ICcnLFxuXG4gICAgICAgICAgLy/lj7PkvqfmjInpkq7moIfpopjpopzoibJcbiAgICAgICAgICByaWdodEl0ZW1Db2xvcjogJ2JsYWNrJyxcblxuICAgICAgICAgIC8v5bem5L6n5oyJ6ZKu5Zu+54mHXG4gICAgICAgICAgbGVmdEl0ZW1TcmM6ICcnLFxuXG4gICAgICAgICAgLy/lt6bkvqfmjInpkq7moIfpophcbiAgICAgICAgICBsZWZ0SXRlbVRpdGxlOiAnJyxcblxuICAgICAgICAgIC8v5bem5L6n5oyJ6ZKu6aKc6ImyXG4gICAgICAgICAgbGVmdEl0ZW1Db2xvcjogJ2JsYWNrJyxcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgIG9uY2xpY2tyaWdodGl0ZW06IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB0aGlzLiRkaXNwYXRjaCgnbmF2aUJhci5yaWdodEl0ZW0uY2xpY2snLCB7fSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBvbmNsaWNrbGVmdGl0ZW06IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB0aGlzLiRkaXNwYXRjaCgnbmF2aUJhci5sZWZ0SXRlbS5jbGljaycsIHt9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtbmF2YmFyLndlPzA4NmVmODNkIiwicmVxdWlyZShcIi4vd3hjLW5hdmJhci53ZVwiKVxudmFyIF9fd2VleF90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi93eGMtbmF2cGFnZS53ZVwiKVxudmFyIF9fd2VleF9zdHlsZV9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi93eGMtbmF2cGFnZS53ZVwiKVxudmFyIF9fd2VleF9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL3NjcmlwdC5qcyFiYWJlbC1sb2FkZXI/cHJlc2V0c1tdPUM6XFxcXHZiYW9saS13ZWV4XFxcXHZiYW9saVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcHJlc2V0LWVzMjAxNSZwcmVzZXRzPUM6XFxcXHZiYW9saS13ZWV4XFxcXHZiYW9saVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcHJlc2V0LWVzMjAxNSZwbHVnaW5zW109QzpcXFxcdmJhb2xpLXdlZXhcXFxcdmJhb2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmcGx1Z2lucz1DOlxcXFx2YmFvbGktd2VleFxcXFx2YmFvbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZjb21tZW50cz1mYWxzZSEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zY3JpcHRzIS4vd3hjLW5hdnBhZ2Uud2VcIilcblxuX193ZWV4X2RlZmluZV9fKCdAd2VleC1jb21wb25lbnQvd3hjLW5hdnBhZ2UnLCBbXSwgZnVuY3Rpb24oX193ZWV4X3JlcXVpcmVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X21vZHVsZV9fKSB7XG5cbiAgICBfX3dlZXhfc2NyaXB0X18oX193ZWV4X21vZHVsZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfcmVxdWlyZV9fKVxuICAgIGlmIChfX3dlZXhfZXhwb3J0c19fLl9fZXNNb2R1bGUgJiYgX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0KSB7XG4gICAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cyA9IF9fd2VleF9leHBvcnRzX18uZGVmYXVsdFxuICAgIH1cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnRlbXBsYXRlID0gX193ZWV4X3RlbXBsYXRlX19cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnN0eWxlID0gX193ZWV4X3N0eWxlX19cblxufSlcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1uYXZwYWdlLndlXG4vLyBtb2R1bGUgaWQgPSAxMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDcgOCAxMCAxMiAxMyAxNyAxOSAyMCAyMSAyNSAyNyAyOCIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJkaXZcIixcbiAgXCJjbGFzc0xpc3RcIjogW1xuICAgIFwid3JhcHBlclwiXG4gIF0sXG4gIFwiY2hpbGRyZW5cIjogW1xuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcInd4Yy1uYXZiYXJcIixcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwiZGF0YVJvbGVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmRhdGFSb2xlfSxcbiAgICAgICAgXCJoZWlnaHRcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmhlaWdodH0sXG4gICAgICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5iYWNrZ3JvdW5kQ29sb3J9LFxuICAgICAgICBcInRpdGxlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy50aXRsZX0sXG4gICAgICAgIFwidGl0bGVDb2xvclwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudGl0bGVDb2xvcn0sXG4gICAgICAgIFwibGVmdEl0ZW1TcmNcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmxlZnRJdGVtU3JjfSxcbiAgICAgICAgXCJsZWZ0SXRlbVRpdGxlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5sZWZ0SXRlbVRpdGxlfSxcbiAgICAgICAgXCJsZWZ0SXRlbUNvbG9yXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5sZWZ0SXRlbUNvbG9yfSxcbiAgICAgICAgXCJyaWdodEl0ZW1TcmNcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnJpZ2h0SXRlbVNyY30sXG4gICAgICAgIFwicmlnaHRJdGVtVGl0bGVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnJpZ2h0SXRlbVRpdGxlfSxcbiAgICAgICAgXCJyaWdodEl0ZW1Db2xvclwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMucmlnaHRJdGVtQ29sb3J9XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJ3cmFwcGVyXCJcbiAgICAgIF0sXG4gICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgXCJtYXJnaW5Ub3BcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmhlaWdodH1cbiAgICAgIH0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImNvbnRlbnRcIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICBdXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi9+L3dlZXgtY29tcG9uZW50cy9zcmMvd3hjLW5hdnBhZ2Uud2Vcbi8vIG1vZHVsZSBpZCA9IDEyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNyA4IDEwIDEyIDEzIDE3IDE5IDIwIDIxIDI1IDI3IDI4IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwid3JhcHBlclwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgXCJ0b3BcIjogMCxcbiAgICBcImxlZnRcIjogMCxcbiAgICBcInJpZ2h0XCI6IDAsXG4gICAgXCJib3R0b21cIjogMCxcbiAgICBcIndpZHRoXCI6IDc1MFxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi9+L3dlZXgtY29tcG9uZW50cy9zcmMvd3hjLW5hdnBhZ2Uud2Vcbi8vIG1vZHVsZSBpZCA9IDEyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgNyA4IDEwIDEyIDEzIDE3IDE5IDIwIDIxIDI1IDI3IDI4IiwiPHRlbXBsYXRlPlxuICBcdDxkaXYgY2xhc3M9XCJ3cmFwcGVyXCI+XG4gICAgXHQgIDx3eGMtbmF2YmFyIGRhdGEtcm9sZT17e2RhdGFSb2xlfX0gaGVpZ2h0PXt7aGVpZ2h0fX0gYmFja2dyb3VuZC1jb2xvcj17e2JhY2tncm91bmRDb2xvcn19IHRpdGxlPXt7dGl0bGV9fSB0aXRsZS1jb2xvcj17e3RpdGxlQ29sb3J9fSBsZWZ0LWl0ZW0tc3JjPXt7bGVmdEl0ZW1TcmN9fSBsZWZ0LWl0ZW0tdGl0bGU9e3tsZWZ0SXRlbVRpdGxlfX0gbGVmdC1pdGVtLWNvbG9yPXt7bGVmdEl0ZW1Db2xvcn19IHJpZ2h0LWl0ZW0tc3JjPXt7cmlnaHRJdGVtU3JjfX0gcmlnaHQtaXRlbS10aXRsZT17e3JpZ2h0SXRlbVRpdGxlfX0gcmlnaHQtaXRlbS1jb2xvcj17e3JpZ2h0SXRlbUNvbG9yfX0+PC93eGMtbmF2YmFyPlxuICAgIFx0ICA8ZGl2IGNsYXNzPVwid3JhcHBlclwiIHN0eWxlPVwibWFyZ2luLXRvcDp7e2hlaWdodH19XCI+XG4gICAgXHRcdCAgICA8Y29udGVudD48L2NvbnRlbnQ+XG4gICAgXHQgIDwvZGl2PlxuICBcdDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHN0eWxlPlxuICBcdC53cmFwcGVyIHtcbiAgXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTsgXG4gIFx0XHR0b3A6IDA7IFxuICBcdFx0bGVmdDogMDsgXG4gIFx0XHRyaWdodDogMDsgXG4gIFx0XHRib3R0b206IDA7IFxuICBcdFx0d2lkdGg6IDc1MDtcbiAgXHR9XG48L3N0eWxlPlxuXG48c2NyaXB0PlxuICAgIG1vZHVsZS5leHBvcnRzID0ge1xuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgZGF0YVJvbGU6ICduYXZiYXInLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ2JsYWNrJyxcbiAgICAgICAgICBoZWlnaHQ6IDg4LFxuICAgICAgICAgIHRpdGxlOiBcIlwiLFxuICAgICAgICAgIHRpdGxlQ29sb3I6ICdibGFjaycsXG4gICAgICAgICAgcmlnaHRJdGVtU3JjOiAnJyxcbiAgICAgICAgICByaWdodEl0ZW1UaXRsZTogJycsXG4gICAgICAgICAgcmlnaHRJdGVtQ29sb3I6ICdibGFjaycsXG4gICAgICAgICAgbGVmdEl0ZW1TcmM6ICcnLFxuICAgICAgICAgIGxlZnRJdGVtVGl0bGU6ICcnLFxuICAgICAgICAgIGxlZnRJdGVtQ29sb3I6ICdibGFjaycsXG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3dlZXgtY29tcG9uZW50cy9zcmMvd3hjLW5hdnBhZ2Uud2U/NjY3Y2RlNjYiLCJyZXF1aXJlKFwiLi93eGMtdGFiaXRlbS53ZVwiKVxudmFyIF9fd2VleF90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi93eGMtdGFiYmFyLndlXCIpXG52YXIgX193ZWV4X3N0eWxlX18gPSByZXF1aXJlKFwiISEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL3d4Yy10YWJiYXIud2VcIilcbnZhciBfX3dlZXhfc2NyaXB0X18gPSByZXF1aXJlKFwiISEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9zY3JpcHQuanMhYmFiZWwtbG9hZGVyP3ByZXNldHNbXT1DOlxcXFx2YmFvbGktd2VleFxcXFx2YmFvbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXByZXNldC1lczIwMTUmcHJlc2V0cz1DOlxcXFx2YmFvbGktd2VleFxcXFx2YmFvbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXByZXNldC1lczIwMTUmcGx1Z2luc1tdPUM6XFxcXHZiYW9saS13ZWV4XFxcXHZiYW9saVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJnBsdWdpbnM9QzpcXFxcdmJhb2xpLXdlZXhcXFxcdmJhb2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmY29tbWVudHM9ZmFsc2UhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c2NyaXB0cyEuL3d4Yy10YWJiYXIud2VcIilcblxuX193ZWV4X2RlZmluZV9fKCdAd2VleC1jb21wb25lbnQvd3hjLXRhYmJhcicsIFtdLCBmdW5jdGlvbihfX3dlZXhfcmVxdWlyZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfbW9kdWxlX18pIHtcblxuICAgIF9fd2VleF9zY3JpcHRfXyhfX3dlZXhfbW9kdWxlX18sIF9fd2VleF9leHBvcnRzX18sIF9fd2VleF9yZXF1aXJlX18pXG4gICAgaWYgKF9fd2VleF9leHBvcnRzX18uX19lc01vZHVsZSAmJiBfX3dlZXhfZXhwb3J0c19fLmRlZmF1bHQpIHtcbiAgICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzID0gX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0XG4gICAgfVxuXG4gICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMudGVtcGxhdGUgPSBfX3dlZXhfdGVtcGxhdGVfX1xuXG4gICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMuc3R5bGUgPSBfX3dlZXhfc3R5bGVfX1xuXG59KVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtY29tcG9uZW50cy9zcmMvd3hjLXRhYmJhci53ZVxuLy8gbW9kdWxlIGlkID0gMTI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA3IDggMTAgMTIgMTMgMTcgMTkgMjAgMjEgMjUgMjcgMjgiLCJ2YXIgX193ZWV4X3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL3d4Yy10YWJpdGVtLndlXCIpXG52YXIgX193ZWV4X3N0eWxlX18gPSByZXF1aXJlKFwiISEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL3d4Yy10YWJpdGVtLndlXCIpXG52YXIgX193ZWV4X3NjcmlwdF9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvc2NyaXB0LmpzIWJhYmVsLWxvYWRlcj9wcmVzZXRzW109QzpcXFxcdmJhb2xpLXdlZXhcXFxcdmJhb2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnByZXNldHM9QzpcXFxcdmJhb2xpLXdlZXhcXFxcdmJhb2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnBsdWdpbnNbXT1DOlxcXFx2YmFvbGktd2VleFxcXFx2YmFvbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZwbHVnaW5zPUM6XFxcXHZiYW9saS13ZWV4XFxcXHZiYW9saVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJmNvbW1lbnRzPWZhbHNlIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdHMhLi93eGMtdGFiaXRlbS53ZVwiKVxuXG5fX3dlZXhfZGVmaW5lX18oJ0B3ZWV4LWNvbXBvbmVudC93eGMtdGFiaXRlbScsIFtdLCBmdW5jdGlvbihfX3dlZXhfcmVxdWlyZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfbW9kdWxlX18pIHtcblxuICAgIF9fd2VleF9zY3JpcHRfXyhfX3dlZXhfbW9kdWxlX18sIF9fd2VleF9leHBvcnRzX18sIF9fd2VleF9yZXF1aXJlX18pXG4gICAgaWYgKF9fd2VleF9leHBvcnRzX18uX19lc01vZHVsZSAmJiBfX3dlZXhfZXhwb3J0c19fLmRlZmF1bHQpIHtcbiAgICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzID0gX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0XG4gICAgfVxuXG4gICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMudGVtcGxhdGUgPSBfX3dlZXhfdGVtcGxhdGVfX1xuXG4gICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMuc3R5bGUgPSBfX3dlZXhfc3R5bGVfX1xuXG59KVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtY29tcG9uZW50cy9zcmMvd3hjLXRhYml0ZW0ud2Vcbi8vIG1vZHVsZSBpZCA9IDEyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNyA4IDEwIDEyIDEzIDE3IDE5IDIwIDIxIDI1IDI3IDI4IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImRpdlwiLFxuICBcImNsYXNzTGlzdFwiOiBbXG4gICAgXCJjb250YWluZXJcIlxuICBdLFxuICBcInN0eWxlXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuYmFja2dyb3VuZENvbG9yfVxuICB9LFxuICBcImV2ZW50c1wiOiB7XG4gICAgXCJjbGlja1wiOiBcIm9uY2xpY2tpdGVtXCJcbiAgfSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJ0b3AtbGluZVwiXG4gICAgICBdLFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJzcmNcIjogXCJodHRwOi8vZ3RtczAzLmFsaWNkbi5jb20vdHBzL2kzL1RCMW1kc2lNcFhYWFhYcFhYWFhOdzRKSVhYWC02NDAtNC5wbmdcIlxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJ0YWItaWNvblwiXG4gICAgICBdLFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJzcmNcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmljb259XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwidGFiLXRleHRcIlxuICAgICAgXSxcbiAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICBcImNvbG9yXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy50aXRsZUNvbG9yfVxuICAgICAgfSxcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnRpdGxlfVxuICAgICAgfVxuICAgIH1cbiAgXVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy10YWJpdGVtLndlXG4vLyBtb2R1bGUgaWQgPSAxMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDcgOCAxMCAxMiAxMyAxNyAxOSAyMCAyMSAyNSAyNyAyOCIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcImNvbnRhaW5lclwiOiB7XG4gICAgXCJmbGV4XCI6IDEsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwiaGVpZ2h0XCI6IDg4XG4gIH0sXG4gIFwidG9wLWxpbmVcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwidG9wXCI6IDAsXG4gICAgXCJsZWZ0XCI6IDAsXG4gICAgXCJyaWdodFwiOiAwLFxuICAgIFwiaGVpZ2h0XCI6IDJcbiAgfSxcbiAgXCJ0YWItaWNvblwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogNSxcbiAgICBcIndpZHRoXCI6IDQwLFxuICAgIFwiaGVpZ2h0XCI6IDQwXG4gIH0sXG4gIFwidGFiLXRleHRcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IDUsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICBcImZvbnRTaXplXCI6IDIwXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL34vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtdGFiaXRlbS53ZVxuLy8gbW9kdWxlIGlkID0gMTI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA3IDggMTAgMTIgMTMgMTcgMTkgMjAgMjEgMjUgMjcgMjgiLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjoge3tiYWNrZ3JvdW5kQ29sb3J9fVwiICBvbmNsaWNrPVwib25jbGlja2l0ZW1cIj5cbiAgICAgICAgPGltYWdlIGNsYXNzPVwidG9wLWxpbmVcIiBzcmMgPSBcImh0dHA6Ly9ndG1zMDMuYWxpY2RuLmNvbS90cHMvaTMvVEIxbWRzaU1wWFhYWFhwWFhYWE53NEpJWFhYLTY0MC00LnBuZ1wiPjwvaW1hZ2U+XG4gICAgICAgIDxpbWFnZSBjbGFzcz1cInRhYi1pY29uXCIgc3JjID0ge3tpY29ufX0+PC9pbWFnZT5cbiAgICAgICAgPHRleHQgY2xhc3M9XCJ0YWItdGV4dFwiIHN0eWxlPVwiY29sb3I6IHt7dGl0bGVDb2xvcn19XCI+e3t0aXRsZX19PC90ZXh0PlxuICAgIDwvZGl2PiAgXG48L3RlbXBsYXRlPlxuXG48c3R5bGU+XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICAgIGZsZXg6IDE7IFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBcbiAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyOyBcbiAgICAgICAganVzdGlmeS1jb250ZW50OmNlbnRlcjsgXG4gICAgICAgIGhlaWdodDogODg7XG4gICAgfVxuICAgIC50b3AtbGluZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXG4gICAgICAgIHRvcDogMDsgXG4gICAgICAgIGxlZnQ6IDA7IFxuICAgICAgICByaWdodDogMDsgXG4gICAgICAgIGhlaWdodDogMjtcbiAgICB9XG4gICAgLnRhYi1pY29uIHtcbiAgICAgICAgbWFyZ2luLXRvcDogNTsgXG4gICAgICAgIHdpZHRoOiA0MDsgXG4gICAgICAgIGhlaWdodDogNDBcbiAgICB9XG4gICAgLnRhYi10ZXh0IHtcbiAgICAgICAgbWFyZ2luLXRvcDogNTsgXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgIFxuICAgICAgICBmb250LXNpemU6IDIwO1xuICAgIH1cbjwvc3R5bGU+XG5cbjxzY3JpcHQ+XG4gICAgbW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBpbmRleDogMCxcbiAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgdGl0bGVDb2xvcjogJyMwMDAwMDAnLFxuICAgICAgICAgIGljb246ICcnLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmZmZmYnLFxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgb25jbGlja2l0ZW06IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB2YXIgdm0gPSB0aGlzO1xuICAgICAgICAgICAgdmFyIHBhcmFtcyA9IHtcbiAgICAgICAgICAgICAgaW5kZXg6IHZtLmluZGV4XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdm0uJGRpc3BhdGNoKCd0YWJJdGVtLm9uQ2xpY2snLCBwYXJhbXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtdGFiaXRlbS53ZT9mYmJhMTQ3YSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJkaXZcIixcbiAgXCJjbGFzc0xpc3RcIjogW1xuICAgIFwid3JhcHBlclwiXG4gIF0sXG4gIFwiY2hpbGRyZW5cIjogW1xuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImVtYmVkXCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwiY29udGVudFwiXG4gICAgICBdLFxuICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgIFwidmlzaWJpbGl0eVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudmlzaWJpbGl0eX1cbiAgICAgIH0sXG4gICAgICBcInJlcGVhdFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudGFiSXRlbXN9LFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJzcmNcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnNyY30sXG4gICAgICAgIFwidHlwZVwiOiBcIndlZXhcIlxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwidGFiYmFyXCJcbiAgICAgIF0sXG4gICAgICBcImFwcGVuZFwiOiBcInRyZWVcIixcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwid3hjLXRhYml0ZW1cIixcbiAgICAgICAgICBcInJlcGVhdFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudGFiSXRlbXN9LFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcImluZGV4XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5pbmRleH0sXG4gICAgICAgICAgICBcImljb25cIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmljb259LFxuICAgICAgICAgICAgXCJ0aXRsZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudGl0bGV9LFxuICAgICAgICAgICAgXCJ0aXRsZUNvbG9yXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy50aXRsZUNvbG9yfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy10YWJiYXIud2Vcbi8vIG1vZHVsZSBpZCA9IDEzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNyA4IDEwIDEyIDEzIDE3IDE5IDIwIDIxIDI1IDI3IDI4IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwid3JhcHBlclwiOiB7XG4gICAgXCJ3aWR0aFwiOiA3NTAsXG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgXCJ0b3BcIjogMCxcbiAgICBcImxlZnRcIjogMCxcbiAgICBcInJpZ2h0XCI6IDAsXG4gICAgXCJib3R0b21cIjogMFxuICB9LFxuICBcImNvbnRlbnRcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwidG9wXCI6IDAsXG4gICAgXCJsZWZ0XCI6IDAsXG4gICAgXCJyaWdodFwiOiAwLFxuICAgIFwiYm90dG9tXCI6IDAsXG4gICAgXCJtYXJnaW5Ub3BcIjogMCxcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiA4OFxuICB9LFxuICBcInRhYmJhclwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJwb3NpdGlvblwiOiBcImZpeGVkXCIsXG4gICAgXCJib3R0b21cIjogMCxcbiAgICBcImxlZnRcIjogMCxcbiAgICBcInJpZ2h0XCI6IDAsXG4gICAgXCJoZWlnaHRcIjogODhcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vd2VleC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c3R5bGVzIS4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy10YWJiYXIud2Vcbi8vIG1vZHVsZSBpZCA9IDEzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNyA4IDEwIDEyIDEzIDE3IDE5IDIwIDIxIDI1IDI3IDI4IiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJ3cmFwcGVyXCI+XG4gICAgICAgIDxlbWJlZCBjbGFzcz1cImNvbnRlbnRcIiBzdHlsZT1cInZpc2liaWxpdHk6e3t2aXNpYmlsaXR5fX1cIiByZXBlYXQ9e3t0YWJJdGVtc319IHNyYz17e3NyY319IHR5cGU9XCJ3ZWV4XCI+PC9lbWJlZD5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRhYmJhclwiIGFwcGVuZCA9IFwidHJlZVwiPlxuICAgICAgICAgICAgPHd4Yy10YWJpdGVtIHJlcGVhdD17e3RhYkl0ZW1zfX0gaW5kZXg9e3tpbmRleH19IGljb249e3tpY29ufX0gdGl0bGU9e3t0aXRsZX19IHRpdGxlLWNvbG9yPXt7dGl0bGVDb2xvcn19Pjwvd3hjLXRhYkl0ZW0+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHN0eWxlPlxuICAgIC53cmFwcGVyIHsgXG4gICAgICAgIHdpZHRoOiA3NTA7IFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxuICAgICAgICB0b3A6IDA7IFxuICAgICAgICBsZWZ0OiAwOyBcbiAgICAgICAgcmlnaHQ6IDA7IFxuICAgICAgICBib3R0b206IDA7XG4gICAgfVxuICAgIC5jb250ZW50IHsgXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXG4gICAgICAgIHRvcDogMDsgbGVmdDogMDsgXG4gICAgICAgIHJpZ2h0OiAwOyBcbiAgICAgICAgYm90dG9tOiAwOyBcbiAgICAgICAgbWFyZ2luLXRvcDogMDsgIFxuICAgICAgICBtYXJnaW4tYm90dG9tOiA4ODtcbiAgICB9XG4gICAgLnRhYmJhciB7IFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93OyBcbiAgICAgICAgcG9zaXRpb246IGZpeGVkOyBcbiAgICAgICAgYm90dG9tOiAwOyBcbiAgICAgICAgbGVmdDogMDsgXG4gICAgICAgIHJpZ2h0OiAwOyAgXG4gICAgICAgIGhlaWdodDogODg7XG4gICAgfVxuPC9zdHlsZT5cblxuPHNjcmlwdD5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIHRhYkl0ZW1zOiBbIF0sXG4gICAgICAgICAgc2VsZWN0ZWRJbmRleDogMCxcbiAgICAgICAgICBzZWxlY3RlZENvbG9yOiAnI2ZmMDAwMCcsXG4gICAgICAgICAgdW5zZWxlY3RlZENvbG9yOiAnIzAwMDAwMCcsXG4gICAgICAgIH0sXG4gICAgICAgIGNyZWF0ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkKHRoaXMuc2VsZWN0ZWRJbmRleCk7XG5cbiAgICAgICAgICB0aGlzLiRvbigndGFiSXRlbS5vbkNsaWNrJyxmdW5jdGlvbihlKXtcbiAgICAgICAgICAgIHZhciBkZXRhaWw9IGUuZGV0YWlsO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gZGV0YWlsLmluZGV4O1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZChkZXRhaWwuaW5kZXgpO1xuXG4gICAgICAgICAgICB2YXIgcGFyYW1zID0ge1xuICAgICAgICAgICAgICBpbmRleDogZGV0YWlsLmluZGV4XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy4kZGlzcGF0Y2goJ3RhYkJhci5vbkNsaWNrJywgcGFyYW1zKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgc2VsZWN0ZWQ6IGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLnRhYkl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRhYkl0ZW0gPSB0aGlzLnRhYkl0ZW1zW2ldO1xuICAgICAgICAgICAgICAgIGlmKGkgPT0gaW5kZXgpe1xuICAgICAgICAgICAgICAgICAgdGFiSXRlbS5pY29uID0gdGFiSXRlbS5zZWxlY3RlZEltYWdlO1xuICAgICAgICAgICAgICAgICAgdGFiSXRlbS50aXRsZUNvbG9yID0gdGhpcy5zZWxlY3RlZENvbG9yO1xuICAgICAgICAgICAgICAgICAgdGFiSXRlbS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHRhYkl0ZW0uaWNvbiA9IHRhYkl0ZW0uaW1hZ2U7XG4gICAgICAgICAgICAgICAgICB0YWJJdGVtLnRpdGxlQ29sb3IgPSB0aGlzLnVuc2VsZWN0ZWRDb2xvcjtcbiAgICAgICAgICAgICAgICAgIHRhYkl0ZW0udmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgIFxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy10YWJiYXIud2U/MDQ3NGVmOGIiLCJ2YXIgX193ZWV4X3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL3ZiYW9saS10YWItaXRlbS53ZVwiKVxudmFyIF9fd2VleF9zdHlsZV9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi92YmFvbGktdGFiLWl0ZW0ud2VcIilcbnZhciBfX3dlZXhfc2NyaXB0X18gPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvc2NyaXB0LmpzIWJhYmVsLWxvYWRlcj9wcmVzZXRzW109QzpcXFxcdmJhb2xpLXdlZXhcXFxcdmJhb2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnByZXNldHM9QzpcXFxcdmJhb2xpLXdlZXhcXFxcdmJhb2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnBsdWdpbnNbXT1DOlxcXFx2YmFvbGktd2VleFxcXFx2YmFvbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZwbHVnaW5zPUM6XFxcXHZiYW9saS13ZWV4XFxcXHZiYW9saVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJmNvbW1lbnRzPWZhbHNlIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zY3JpcHRzIS4vdmJhb2xpLXRhYi1pdGVtLndlXCIpXG5cbl9fd2VleF9kZWZpbmVfXygnQHdlZXgtY29tcG9uZW50L3ZiYW9saS10YWItaXRlbScsIFtdLCBmdW5jdGlvbihfX3dlZXhfcmVxdWlyZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfbW9kdWxlX18pIHtcblxuICAgIF9fd2VleF9zY3JpcHRfXyhfX3dlZXhfbW9kdWxlX18sIF9fd2VleF9leHBvcnRzX18sIF9fd2VleF9yZXF1aXJlX18pXG4gICAgaWYgKF9fd2VleF9leHBvcnRzX18uX19lc01vZHVsZSAmJiBfX3dlZXhfZXhwb3J0c19fLmRlZmF1bHQpIHtcbiAgICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzID0gX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0XG4gICAgfVxuXG4gICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMudGVtcGxhdGUgPSBfX3dlZXhfdGVtcGxhdGVfX1xuXG4gICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMuc3R5bGUgPSBfX3dlZXhfc3R5bGVfX1xuXG59KVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW5jbHVkZS92YmFvbGktdGFiLWl0ZW0ud2Vcbi8vIG1vZHVsZSBpZCA9IDE1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDEwIDEzIDIwIDIxIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImRpdlwiLFxuICBcImNsYXNzTGlzdFwiOiBbXG4gICAgXCJjb250YWluZXJcIlxuICBdLFxuICBcInN0eWxlXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuYmFja2dyb3VuZENvbG9yfVxuICB9LFxuICBcImV2ZW50c1wiOiB7XG4gICAgXCJjbGlja1wiOiBcIm9uY2xpY2tpdGVtXCJcbiAgfSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcInRhYi10ZXh0XCJcbiAgICAgIF0sXG4gICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudGl0bGVDb2xvcn1cbiAgICAgIH0sXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy50aXRsZX1cbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwidG9wLWxpbmVcIlxuICAgICAgXSxcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwic3JjXCI6IFwiaHR0cDovL2d0bXMwMy5hbGljZG4uY29tL3Rwcy9pMy9UQjFtZHNpTXBYWFhYWHBYWFhYTnc0SklYWFgtNjQwLTQucG5nXCJcbiAgICAgIH1cbiAgICB9XG4gIF1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+L3dlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuL34vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL3NyYy9pbmNsdWRlL3ZiYW9saS10YWItaXRlbS53ZVxuLy8gbW9kdWxlIGlkID0gMTUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMTAgMTEgMTMgMjAgMjEiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJjb250YWluZXJcIjoge1xuICAgIFwiZmxleFwiOiAxLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImhlaWdodFwiOiA3NFxuICB9LFxuICBcInRvcC1saW5lXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcImJvdHRvbVwiOiAwLFxuICAgIFwibGVmdFwiOiAwLFxuICAgIFwicmlnaHRcIjogMCxcbiAgICBcImhlaWdodFwiOiAyXG4gIH0sXG4gIFwidGFiLXRleHRcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IDUsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICBcImZvbnRTaXplXCI6IDI0XG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL34vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL3NyYy9pbmNsdWRlL3ZiYW9saS10YWItaXRlbS53ZVxuLy8gbW9kdWxlIGlkID0gMTUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMTAgMTEgMTMgMjAgMjEiLCI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiB7e2JhY2tncm91bmRDb2xvcn19XCIgb25jbGljaz1cIm9uY2xpY2tpdGVtXCI+XHJcbiAgICAgICAgPHRleHQgY2xhc3M9XCJ0YWItdGV4dFwiIHN0eWxlPVwiY29sb3I6IHt7dGl0bGVDb2xvcn19XCI+e3t0aXRsZX19PC90ZXh0PlxyXG4gICAgICAgIDwhLS08aW1hZ2UgY2xhc3M9XCJ0YWItaWNvblwiIHNyYz17e2ljb259fT48L2ltYWdlPi0tPlxyXG4gICAgICAgIDxpbWFnZSBjbGFzcz1cInRvcC1saW5lXCIgc3JjPVwiaHR0cDovL2d0bXMwMy5hbGljZG4uY29tL3Rwcy9pMy9UQjFtZHNpTXBYWFhYWHBYWFhYTnc0SklYWFgtNjQwLTQucG5nXCI+PC9pbWFnZT5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG48c3R5bGU+XHJcbi5jb250YWluZXIge1xyXG4gICAgZmxleDogMTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDc0cHg7XHJcbn1cclxuXHJcbi50b3AtbGluZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxufVxyXG5cclxuLnRhYi10ZXh0IHtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG48L3N0eWxlPlxyXG48c2NyaXB0PlxyXG52YXIgZG9tID0gcmVxdWlyZSgnQHdlZXgtbW9kdWxlL2RvbScpO1xyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIGRhdGE6IHtcclxuICAgICAgICBpbmRleDogMCxcclxuICAgICAgICB0aXRsZTogJycsXHJcbiAgICAgICAgdGl0bGVDb2xvcjogJyMwMDAwMDAnLFxyXG4gICAgICAgIGljb246ICcnLFxyXG4gICAgICAgIHVybDogJycsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZmZmZicsXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIG9uY2xpY2tpdGVtOiBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIHZhciB2bSA9IHRoaXM7XHJcbiAgICAgICAgICAgIHZhciBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgICAgICBpbmRleDogdm0uaW5kZXhcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGhpcy5fcGFyZW50LiRlbWl0KCdzZWxlY3QnLCBwYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG48L3NjcmlwdD5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luY2x1ZGUvdmJhb2xpLXRhYi1pdGVtLndlPzZhN2E2ODczIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImRpdlwiLFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiaWRcIjogXCJ0YWJcIixcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJ0YWItYmFyXCJcbiAgICAgIF0sXG4gICAgICBcImFwcGVuZFwiOiBcInRyZWVcIixcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwidmJhb2xpLXRhYi1pdGVtXCIsXG4gICAgICAgICAgXCJyZXBlYXRcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnRhYkl0ZW1zfSxcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJpbmRleFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuaW5kZXh9LFxuICAgICAgICAgICAgXCJ0aXRsZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudGl0bGV9LFxuICAgICAgICAgICAgXCJ0aXRsZUNvbG9yXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy50aXRsZUNvbG9yfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwiY29udGVudFwiXG4gICAgICBdLFxuICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgIFwiZGlzcGxheVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuZGlzcGxheX1cbiAgICAgIH0sXG4gICAgICBcInJlcGVhdFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudGFiSXRlbXN9LFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJlbWJlZFwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInNyY1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuc3JjfSxcbiAgICAgICAgICAgIFwidHlwZVwiOiBcIndlZXhcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vc3JjL2luY2x1ZGUvdmJhb2xpLXRhYi53ZVxuLy8gbW9kdWxlIGlkID0gMTU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMTAgMTMgMjAgMjEiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ0YWItYmFyXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImhlaWdodFwiOiA3NCxcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmZmZmZcIlxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi9zcmMvaW5jbHVkZS92YmFvbGktdGFiLndlXG4vLyBtb2R1bGUgaWQgPSAxNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAxMCAxMyAyMCAyMSIsIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBpZD1cInRhYlwiIGNsYXNzPVwidGFiLWJhclwiIGFwcGVuZD1cInRyZWVcIj5cclxuICAgICAgICAgICAgPHZiYW9saS10YWItaXRlbSByZXBlYXQ9e3t0YWJJdGVtc319IGluZGV4PXt7aW5kZXh9fSB0aXRsZT17e3RpdGxlfX0gdGl0bGUtY29sb3I9e3t0aXRsZUNvbG9yfX0+PC92YmFvbGktdGFiLWl0ZW0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIiBzdHlsZT1cImRpc3BsYXk6IHt7ZGlzcGxheX19XCIgcmVwZWF0PXt7dGFiSXRlbXN9fT5cclxuICAgICAgICAgICAgPGVtYmVkIHNyYz1cInt7c3JjfX1cIiB0eXBlPVwid2VleFwiPjwvZW1iZWQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuPHN0eWxlPlxyXG4udGFiLWJhciB7IGZsZXgtZGlyZWN0aW9uOiByb3c7IGhlaWdodDogNzRweDsgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgfVxyXG4vKi5jb250ZW50IHsgcG9zaXRpb246IGFic29sdXRlOyB0b3A6IDc0cHg7IGxlZnQ6IDA7IHJpZ2h0OiAwOyBib3R0b206IDA7IG1hcmdpbi1ib3R0b206IDA7IH0qL1xyXG48L3N0eWxlPlxyXG48c2NyaXB0PlxyXG52YXIgZG9tID0gcmVxdWlyZSgnQHdlZXgtbW9kdWxlL2RvbScpO1xyXG5yZXF1aXJlKCd3ZWV4LWNvbXBvbmVudHMnKTtcclxudmFyIGFwaXMgPSByZXF1aXJlKCcuLi9jb21tb24vYXBpJyk7XHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgZGF0YToge1xyXG4gICAgICAgIGJhc2VVcmw6ICcnLFxyXG4gICAgICAgIHRhYkl0ZW1zOiBbXSxcclxuICAgICAgICBzZWxlY3RlZEluZGV4OiAwLFxyXG4gICAgICAgIHNlbGVjdGVkQ29sb3I6ICcjZmY5MTI1JyxcclxuICAgICAgICB1bnNlbGVjdGVkQ29sb3I6ICcjOTc5Nzk3JyxcclxuICAgIH0sXHJcbiAgICBjcmVhdGVkOiBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgYnVuZGxlVXJsID0gdGhpcy4kZ2V0Q29uZmlnKCkuYnVuZGxlVXJsO1xyXG4gICAgICAgIHRoaXMuYmFzZVVybCA9IGFwaXMuZ2V0QmFzZVVybChidW5kbGVVcmwpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy50YWJJdGVtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgdGFiSXRlbSA9IHRoaXMudGFiSXRlbXNbaV07XHJcbiAgICAgICAgICAgIHRhYkl0ZW0uc3JjID0gdGhpcy5iYXNlVXJsICsgdGFiSXRlbS5zcmM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQodGhpcy5zZWxlY3RlZEluZGV4KTtcclxuICAgICAgICB0aGlzLiRvbignc2VsZWN0JywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5ldmVudFR5cGUgPSBldmVudC50eXBlO1xyXG4gICAgICAgICAgICB2YXIgaW5kZXggPSBldmVudC5kZXRhaWwuaW5kZXg7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IGluZGV4O1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkKGluZGV4KTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgc2VsZWN0ZWQ6IGZ1bmN0aW9uKGluZGV4KSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy50YWJJdGVtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRhYkl0ZW0gPSB0aGlzLnRhYkl0ZW1zW2ldO1xyXG4gICAgICAgICAgICAgICAgaWYgKGkgPT0gaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICB0YWJJdGVtLnRpdGxlQ29sb3IgPSB0aGlzLnNlbGVjdGVkQ29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFiSXRlbS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFiSXRlbS50aXRsZUNvbG9yID0gdGhpcy51bnNlbGVjdGVkQ29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFiSXRlbS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgIH1cclxufVxyXG48L3NjcmlwdD5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luY2x1ZGUvdmJhb2xpLXRhYi53ZT8zMTM2Nzc5NSIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGJhaWR1IG9uIDE2LzYvOC5cclxuICovXHJcblxyXG5cclxuLy8gdmFyIHN0cmVhbSA9IHJlcXVpcmUoJ0B3ZWV4LW1vZHVsZS9zdHJlYW0nKTsvL+ivtOaYrzAuMTXlt7Lnu4/mlK/mjIEs5L2G5piv5oiR5rKh55Sf5pWIXHJcblxyXG52YXIgc3RyZWFtXHJcbl9fd2VleF9kZWZpbmVfXygnQHdlZXgtdGVtcC9hcGknLCBmdW5jdGlvbiAoX193ZWV4X3JlcXVpcmVfXykge1xyXG4gICAgc3RyZWFtID0gX193ZWV4X3JlcXVpcmVfXygnQHdlZXgtbW9kdWxlL3N0cmVhbScpXHJcbn0pO1xyXG5cclxudmFyIGFwaVVSTCA9IHtcclxuICAgIGJhc2V1cmw6ICdodHRwOi8vdjMud3VmYXpodWNlLmNvbTo4MDAwL2FwaScsXHJcbiAgICBob21lUGFnZTogJy9ocC9ieW1vbnRoLycsXHJcbiAgICByZWFkaW5nQ2Fyb3VzZWw6ICcvcmVhZGluZy9jYXJvdXNlbCcsXHJcbiAgICByZWFkaW5nSW5kZXg6ICcvcmVhZGluZy9pbmRleC8nLFxyXG4gICAgZXNzYXk6ICcvZXNzYXkvJyxcclxuICAgIHNlcmlhbGNvbnRlbnQ6ICcvc2VyaWFsY29udGVudC8nLFxyXG4gICAgcXVlc3Rpb246ICcvcXVlc3Rpb24vJyxcclxuICAgIGNhcm91c2VsTGlzdDogJy9yZWFkaW5nL2Nhcm91c2VsLycsXHJcbiAgICBtb3ZpZUxpc3Q6ICcvbW92aWUvbGlzdC8nLFxyXG4gICAgbW92aWVEZXRhaWw6ICcvbW92aWUvZGV0YWlsLydcclxuXHJcbn07XHJcbmZ1bmN0aW9uIGdldERhdGEodXJsLCBjYWxsYmFjaykge1xyXG4gICAgc3RyZWFtLnNlbmRIdHRwKHtcclxuICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgIHVybDogdXJsXHJcbiAgICB9LCBmdW5jdGlvbiAocmV0KSB7XHJcbiAgICAgICAgdmFyIHJldGRhdGEgPSBKU09OLnBhcnNlKHJldCk7XHJcbiAgICAgICAgY2FsbGJhY2socmV0ZGF0YSk7XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnRzLmdldEhvbWUgPSBmdW5jdGlvbiAoZGF0ZVN0ciwgY2FsbGJhY2spIHtcclxuICAgIGdldERhdGEoYXBpVVJMLmJhc2V1cmwgKyBhcGlVUkwuaG9tZVBhZ2UgKyBkYXRlU3RyLCBjYWxsYmFjayk7XHJcbn07XHJcbmV4cG9ydHMuZ2V0UmVhZGluZ0Nhcm91c2VsID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XHJcbiAgICBnZXREYXRhKGFwaVVSTC5iYXNldXJsICsgYXBpVVJMLnJlYWRpbmdDYXJvdXNlbCwgY2FsbGJhY2spO1xyXG59O1xyXG5leHBvcnRzLmdldFJlYWRpbmdJbmRleCA9IGZ1bmN0aW9uIChpbmRleCwgY2FsbGJhY2spIHtcclxuICAgIGdldERhdGEoYXBpVVJMLmJhc2V1cmwgKyBhcGlVUkwucmVhZGluZ0luZGV4ICsgaW5kZXgsIGNhbGxiYWNrKTtcclxufTtcclxuZXhwb3J0cy5nZXRFc3NheSA9IGZ1bmN0aW9uIChpZCwgY2FsbGJhY2spIHtcclxuICAgIGdldERhdGEoYXBpVVJMLmJhc2V1cmwgKyBhcGlVUkwuZXNzYXkgKyBpZCwgY2FsbGJhY2spO1xyXG59O1xyXG5leHBvcnRzLmdldFNlcmlhbENvbnRlbnQgPSBmdW5jdGlvbiAoaWQsIGNhbGxiYWNrKSB7XHJcbiAgICBnZXREYXRhKGFwaVVSTC5iYXNldXJsICsgYXBpVVJMLnNlcmlhbGNvbnRlbnQgKyBpZCwgY2FsbGJhY2spO1xyXG59O1xyXG5leHBvcnRzLmdldFF1ZXN0aW9uRGV0YWlsID0gZnVuY3Rpb24gKGlkLCBjYWxsYmFjaykge1xyXG4gICAgZ2V0RGF0YShhcGlVUkwuYmFzZXVybCArIGFwaVVSTC5xdWVzdGlvbiArIGlkLCBjYWxsYmFjayk7XHJcblxyXG59O1xyXG5leHBvcnRzLmdldENhcm91c2VMaXN0ID0gZnVuY3Rpb24gKGlkLCBjYWxsYmFjaykge1xyXG4gICAgZ2V0RGF0YShhcGlVUkwuYmFzZXVybCArIGFwaVVSTC5jYXJvdXNlbExpc3QgKyBpZCwgY2FsbGJhY2spO1xyXG59O1xyXG5leHBvcnRzLmdldE1vdmllTGlzdCA9IGZ1bmN0aW9uIChpZCwgY2FsbGJhY2spIHtcclxuICAgIGdldERhdGEoYXBpVVJMLmJhc2V1cmwgKyBhcGlVUkwubW92aWVMaXN0ICsgaWQsIGNhbGxiYWNrKTtcclxufTtcclxuZXhwb3J0cy5nZXRNb3ZpZURldGFpbCA9IGZ1bmN0aW9uIChpZCwgY2FsbGJhY2spIHtcclxuICAgIGdldERhdGEoYXBpVVJMLmJhc2V1cmwgKyBhcGlVUkwubW92aWVEZXRhaWwgKyBpZCwgY2FsbGJhY2spO1xyXG5cclxufTtcclxuXHJcbmV4cG9ydHMuZ2V0QmFzZVVybCA9IGZ1bmN0aW9uIChidW5kbGVVcmwsIGlzbmF2KSB7XHJcbiAgICBidW5kbGVVcmwgPSBuZXcgU3RyaW5nKGJ1bmRsZVVybCk7XHJcbiAgICB2YXIgbmF0aXZlQmFzZTtcclxuICAgIHZhciBpc0FuZHJvaWRBc3NldHMgPSBidW5kbGVVcmwuaW5kZXhPZignZmlsZTovL2Fzc2V0cy8nKSA+PSAwO1xyXG5cclxuICAgIHZhciBpc2lPU0Fzc2V0cyA9IGJ1bmRsZVVybC5pbmRleE9mKCdmaWxlOi8vLycpID49IDAgJiYgYnVuZGxlVXJsLmluZGV4T2YoJ1dlZXhEZW1vLmFwcCcpID4gMDtcclxuICAgIGlmIChpc0FuZHJvaWRBc3NldHMpIHtcclxuICAgICAgICBuYXRpdmVCYXNlID0gJ2ZpbGU6Ly9hc3NldHMvZGlzdC8nO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoaXNpT1NBc3NldHMpIHtcclxuICAgICAgICBuYXRpdmVCYXNlID0gYnVuZGxlVXJsLnN1YnN0cmluZygwLCBidW5kbGVVcmwubGFzdEluZGV4T2YoJy8nKSArIDEpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdmFyIGhvc3QgPSAnbG9jYWxob3N0OjEyNTYwJztcclxuICAgICAgICB2YXIgbWF0Y2hlcyA9IC9cXC9cXC8oW15cXC9dKz8pXFwvLy5leGVjKGJ1bmRsZVVybCk7XHJcbiAgICAgICAgaWYgKG1hdGNoZXMgJiYgbWF0Y2hlcy5sZW5ndGggPj0gMikge1xyXG4gICAgICAgICAgICBob3N0ID0gbWF0Y2hlc1sxXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v5q2k5aSE6ZyA5rOo5oSP5LiA5LiLLHRhYmJhciDnlKjnmoTnm7TmjqXmmK9qc2J1bmRsZSDnmoTot6/lvoQs5L2G5pivbmF2aWdhdG9y5piv55u05o6l6Lez6L2s5Yiw5paw6aG16Z2i5LiK55qELlxyXG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICBuYXRpdmVCYXNlID0gaXNuYXYgPyAnaHR0cDovLycgKyBob3N0ICsgJy9pbmRleC5odG1sP3BhZ2U9Li9kaXN0LycgOiAnL2Rpc3QvJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBuYXRpdmVCYXNlID0gJ2h0dHA6Ly8nICsgaG9zdCArICcvZGlzdC8nO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmF0aXZlQmFzZTtcclxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21tb24vYXBpLmpzXG4vLyBtb2R1bGUgaWQgPSAxNThcbi8vIG1vZHVsZSBjaHVua3MgPSAxMCAxMyAxOSAyMCAyMSJdLCJzb3VyY2VSb290IjoiIn0=