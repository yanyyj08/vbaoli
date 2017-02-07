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

	var __weex_template__ = __webpack_require__(159)
	var __weex_style__ = __webpack_require__(160)
	var __weex_script__ = __webpack_require__(161)
	
	__weex_define__('@weex-component/246d90171e9d6ed1f81af7a080f90785', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})
	
	__weex_bootstrap__('@weex-component/246d90171e9d6ed1f81af7a080f90785',undefined,undefined)

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
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _iterator = __webpack_require__(17);
	
	var _iterator2 = _interopRequireDefault(_iterator);
	
	var _symbol = __webpack_require__(68);
	
	var _symbol2 = _interopRequireDefault(_symbol);
	
	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(18), __esModule: true };

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(19);
	__webpack_require__(63);
	module.exports = __webpack_require__(67).f('iterator');

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(20)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(23)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(21)
	  , defined   = __webpack_require__(22);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
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
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(24)
	  , $export        = __webpack_require__(25)
	  , redefine       = __webpack_require__(40)
	  , hide           = __webpack_require__(30)
	  , has            = __webpack_require__(41)
	  , Iterators      = __webpack_require__(42)
	  , $iterCreate    = __webpack_require__(43)
	  , setToStringTag = __webpack_require__(59)
	  , getPrototypeOf = __webpack_require__(61)
	  , ITERATOR       = __webpack_require__(60)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';
	
	var returnThis = function(){ return this; };
	
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
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
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(30);

/***/ },
/* 41 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 42 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(44)
	  , descriptor     = __webpack_require__(39)
	  , setToStringTag = __webpack_require__(59)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(30)(IteratorPrototype, __webpack_require__(60)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(32)
	  , dPs         = __webpack_require__(45)
	  , enumBugKeys = __webpack_require__(57)
	  , IE_PROTO    = __webpack_require__(54)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(37)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(58).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};
	
	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(31)
	  , anObject = __webpack_require__(32)
	  , getKeys  = __webpack_require__(46);
	
	module.exports = __webpack_require__(35) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
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
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(26).document && document.documentElement;

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(31).f
	  , has = __webpack_require__(41)
	  , TAG = __webpack_require__(60)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(55)('wks')
	  , uid        = __webpack_require__(56)
	  , Symbol     = __webpack_require__(26).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';
	
	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(41)
	  , toObject    = __webpack_require__(62)
	  , IE_PROTO    = __webpack_require__(54)('IE_PROTO')
	  , ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(22);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(64);
	var global        = __webpack_require__(26)
	  , hide          = __webpack_require__(30)
	  , Iterators     = __webpack_require__(42)
	  , TO_STRING_TAG = __webpack_require__(60)('toStringTag');
	
	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(65)
	  , step             = __webpack_require__(66)
	  , Iterators        = __webpack_require__(42)
	  , toIObject        = __webpack_require__(48);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(23)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 65 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 66 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(60);

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(69), __esModule: true };

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(70);
	__webpack_require__(81);
	__webpack_require__(82);
	__webpack_require__(83);
	module.exports = __webpack_require__(27).Symbol;

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(26)
	  , has            = __webpack_require__(41)
	  , DESCRIPTORS    = __webpack_require__(35)
	  , $export        = __webpack_require__(25)
	  , redefine       = __webpack_require__(40)
	  , META           = __webpack_require__(71).KEY
	  , $fails         = __webpack_require__(36)
	  , shared         = __webpack_require__(55)
	  , setToStringTag = __webpack_require__(59)
	  , uid            = __webpack_require__(56)
	  , wks            = __webpack_require__(60)
	  , wksExt         = __webpack_require__(67)
	  , wksDefine      = __webpack_require__(72)
	  , keyOf          = __webpack_require__(73)
	  , enumKeys       = __webpack_require__(74)
	  , isArray        = __webpack_require__(77)
	  , anObject       = __webpack_require__(32)
	  , toIObject      = __webpack_require__(48)
	  , toPrimitive    = __webpack_require__(38)
	  , createDesc     = __webpack_require__(39)
	  , _create        = __webpack_require__(44)
	  , gOPNExt        = __webpack_require__(78)
	  , $GOPD          = __webpack_require__(80)
	  , $DP            = __webpack_require__(31)
	  , $keys          = __webpack_require__(46)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;
	
	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};
	
	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};
	
	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};
	
	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });
	
	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(79).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(76).f  = $propertyIsEnumerable;
	  __webpack_require__(75).f = $getOwnPropertySymbols;
	
	  if(DESCRIPTORS && !__webpack_require__(24)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	
	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});
	
	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);
	
	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);
	
	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});
	
	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});
	
	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});
	
	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(30)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(56)('meta')
	  , isObject = __webpack_require__(33)
	  , has      = __webpack_require__(41)
	  , setDesc  = __webpack_require__(31).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(36)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(26)
	  , core           = __webpack_require__(27)
	  , LIBRARY        = __webpack_require__(24)
	  , wksExt         = __webpack_require__(67)
	  , defineProperty = __webpack_require__(31).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(46)
	  , toIObject = __webpack_require__(48);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(46)
	  , gOPS    = __webpack_require__(75)
	  , pIE     = __webpack_require__(76);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
/* 75 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 76 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(50);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(48)
	  , gOPN      = __webpack_require__(79).f
	  , toString  = {}.toString;
	
	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};
	
	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(47)
	  , hiddenKeys = __webpack_require__(57).concat('length', 'prototype');
	
	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(76)
	  , createDesc     = __webpack_require__(39)
	  , toIObject      = __webpack_require__(48)
	  , toPrimitive    = __webpack_require__(38)
	  , has            = __webpack_require__(41)
	  , IE8_DOM_DEFINE = __webpack_require__(34)
	  , gOPD           = Object.getOwnPropertyDescriptor;
	
	exports.f = __webpack_require__(35) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 81 */
/***/ function(module, exports) {



/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(72)('asyncIterator');

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(72)('observable');

/***/ },
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
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(134)
	var __weex_template__ = __webpack_require__(138)
	var __weex_style__ = __webpack_require__(139)
	var __weex_script__ = __webpack_require__(140)
	
	__weex_define__('@weex-component/vbaoli-footer-tab', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})


/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(135)
	var __weex_style__ = __webpack_require__(136)
	var __weex_script__ = __webpack_require__(137)
	
	__weex_define__('@weex-component/vbaoli-footer-tabitem', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})


/***/ },
/* 135 */
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
/* 136 */
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
/* 137 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';
	
	module.exports = {
	    data: function () {return {
	        baseUrl: '',
	        index: 0,
	        title: '',
	        titleColor: '#000000',
	        icon: '',
	        backgroundColor: '#ffffff'
	    }},
	    methods: {
	        onclickitem: function onclickitem(e) {
	            if (this.url) {
	                this.$openURL(this.baseUrl + this.url);
	            } else {
	                console.log(this.titleColor);
	                var vm = this;
	                var params = {
	                    index: vm.index
	                };
	                vm.$dispatch('tabItem.onClick', params);
	            }
	        }
	    }
	};}
	/* generated by weex-loader */


/***/ },
/* 138 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "wrapper"
	  ],
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "tabbar"
	      ],
	      "append": "tree",
	      "children": [
	        {
	          "type": "vbaoli-footer-tabitem",
	          "repeat": function () {return this.tabItems},
	          "attr": {
	            "baseUrl": function () {return this.baseUrl},
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
/* 139 */
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
/* 140 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';
	
	module.exports = {
	  data: function () {return {
	    baseUrl: '',
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
	        } else {
	          tabItem.icon = tabItem.image;
	          tabItem.titleColor = this.unselectedColor;
	        }
	      }
	    }
	  }
	};}
	/* generated by weex-loader */


/***/ },
/* 141 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "style": {
	    "flexDirection": "column"
	  },
	  "children": [
	    {
	      "type": "vbaoli-footer-tab",
	      "attr": {
	        "tabItems": function () {return this.tabItems},
	        "baseUrl": function () {return this.baseUrl},
	        "selectedIndex": function () {return this.selectedIndex},
	        "selectedColor": function () {return this.selectedColor},
	        "unselectedColor": function () {return this.unselectedColor}
	      }
	    }
	  ]
	}

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';
	
	var _typeof2 = __webpack_require__(16);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = {
	    data: function () {return {
	        dir: 'dist',
	        selectedIndex: 0,
	        baseUrl: '',
	        selectedColor: '#ff9125',
	        unselectedColor: '#979797',
	        tabItems: [{
	            index: 0,
	            title: '首页',
	            icon: '',
	            image: '../images/icon-home.png',
	            selectedImage: '../images/icon-home-active.png',
	            url: 'index.js',
	            visibility: 'visible'
	        }, {
	            index: 1,
	            title: '产品',
	            icon: '',
	            image: '../images/icon-product.png',
	            selectedImage: '../images/icon-product-active.png',
	            url: 'modules/borrow/productList.js',
	            visibility: 'hidden'
	        }, {
	            index: 2,
	            title: '商城',
	            icon: '',
	            image: '../images/icon-shop.png',
	            selectedImage: '../images/icon-shop-active.png',
	            url: '',
	            visibility: 'hidden'
	        }, {
	            index: 3,
	            title: '我的',
	            icon: '',
	            image: '../images/icon-mine.png',
	            selectedImage: '../images/icon-mine-active.png',
	            url: '',
	            visibility: 'hidden'
	        }, {
	            index: 4,
	            title: '更多',
	            icon: '',
	            image: '../images/icon-more.png',
	            selectedImage: '../images/icon-more-active.png',
	            url: '',
	            visibility: 'hidden'
	        }]
	    }},
	    created: function created() {
	        var bundleUrl = this.$getConfig().bundleUrl;
	        var nativeBase;
	        var isAndroidAssets = bundleUrl.indexOf('file://assets/') >= 0;
	        var isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('WeexDemo.app') > 0;
	        if (isAndroidAssets) {
	            nativeBase = 'file://assets/';
	        } else if (isiOSAssets) {
	            nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
	        } else {
	            var host = 'localhost:8080';
	            var matches = /\/\/([^\/]+?)\//.exec(this.$getConfig().bundleUrl);
	            if (matches && matches.length >= 2) {
	                host = matches[1];
	            }
	            nativeBase = 'http://' + host + '/' + this.dir + '/';
	        }
	        var h5Base = './index.html?page=./' + this.dir + '/';
	
	        this.baseUrl = nativeBase;
	        if ((typeof window === 'undefined' ? 'undefined' : (0, _typeof3.default)(window)) === 'object') {
	            this.baseUrl = h5Base;
	        }
	    }
	};}
	/* generated by weex-loader */


/***/ },
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "children": [
	    {
	      "type": "scroller",
	      "children": [
	        {
	          "type": "wxc-marquee",
	          "id": "marquee",
	          "style": {
	            "width": 708,
	            "height": function () {return this.marquee.height*2},
	            "borderRadius": 8,
	            "paddingLeft": 10,
	            "paddingRight": 10
	          },
	          "attr": {
	            "step": function () {return this.marquee.height*2},
	            "count": function () {return this.marquee.list.length},
	            "interval": function () {return this.marquee.interval},
	            "duration": function () {return this.marquee.duration}
	          },
	          "children": [
	            {
	              "type": "div",
	              "repeat": function () {return this.marquee.list},
	              "style": {
	                "height": function () {return this.marquee.height*this.marquee.length},
	                "paddingTop": function () {return this.marquee.height*0.5},
	                "paddingBottom": function () {return this.marquee.height*0.5},
	                "overflow": "hidden"
	              },
	              "children": [
	                {
	                  "type": "text",
	                  "style": {
	                    "height": function () {return this.marquee.height},
	                    "lineHeight": function () {return this.marquee.height},
	                    "fontSize": 24,
	                    "color": "#666666"
	                  },
	                  "attr": {
	                    "value": function () {return this.text}
	                  }
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';
	
	__webpack_require__(84);
	
	module.exports = {
	  data: function () {return {
	    marquee: {
	      height: 32,
	      duration: 1500,
	      interval: 2000,
	      list: [{ text: 'Introducing Bots on Messenger' }, { text: 'Capturing 3D 360-Stereo VR Video' }, { text: 'The Future of Video on Facebook' }, { text: 'Announcing Vue.js 2.0' }, { text: 'Not Your Average Virtual-DOM' }, { text: 'Templates, JSX, or Hyperscript?' }]
	    }
	  }},
	  ready: function ready() {
	    this.initMarquee('marquee');
	  },
	  methods: {
	    initMarquee: function initMarquee(id) {
	      var self = this;
	
	      var $marquee = this.$vm(id);
	      $marquee.$on('change', function () {
	        console.log('marquee change');
	      });
	    }
	  }
	};}
	/* generated by weex-loader */


/***/ },
/* 148 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "children": [
	    {
	      "type": "slider",
	      "classList": [
	        "slider"
	      ],
	      "attr": {
	        "interval": "3000",
	        "autoPlay": "true"
	      },
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "slider-pages"
	          ],
	          "repeat": {
	            "expression": function () {return this.sliderList},
	            "value": "item"
	          },
	          "children": [
	            {
	              "type": "image",
	              "classList": [
	                "img"
	              ],
	              "attr": {
	                "src": function () {return this.item.pictureUrl}
	              }
	            }
	          ]
	        }
	      ]
	    }
	  ],
	  "attr": {
	    "value": "div"
	  }
	}

/***/ },
/* 149 */
/***/ function(module, exports) {

	module.exports = {
	  "img": {
	    "width": 750,
	    "height": 420
	  },
	  "slider": {
	    "flexDirection": "row",
	    "width": 750,
	    "height": 420
	  },
	  "slider-pages": {
	    "flexDirection": "row",
	    "width": 750,
	    "height": 420
	  }
	}

/***/ },
/* 150 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';
	
	module.exports = {
	  data: function () {return {
	    sliderList: [{ itemId: '520421163634', pictureUrl: './images/slider01.png' }, { itemId: '522076777462', pictureUrl: './images/slider02.png' }, { itemId: '522076777462', pictureUrl: './images/slider03.png' }]
	  }}
	};}
	/* generated by weex-loader */


/***/ },
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "wrapper"
	  ],
	  "children": [
	    {
	      "type": "vbaoli-slider"
	    },
	    {
	      "type": "div",
	      "classList": [
	        "p01"
	      ],
	      "children": [
	        {
	          "type": "image",
	          "classList": [
	            "icon-broadcast"
	          ],
	          "attr": {
	            "src": "../images/icon-broadcast.png"
	          }
	        },
	        {
	          "type": "vbaoli-marquee",
	          "style": {
	            "width": 700
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "p02"
	      ],
	      "children": [
	        {
	          "type": "a",
	          "classList": [
	            "p02-a"
	          ],
	          "attr": {
	            "href": "javascript:;"
	          },
	          "children": [
	            {
	              "type": "image",
	              "classList": [
	                "p02-img"
	              ],
	              "attr": {
	                "src": "../images/icon-activity.png"
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "p02-text"
	              ],
	              "attr": {
	                "value": "活动专区"
	              }
	            }
	          ]
	        },
	        {
	          "type": "a",
	          "classList": [
	            "p02-a"
	          ],
	          "attr": {
	            "href": "javascript:;"
	          },
	          "children": [
	            {
	              "type": "image",
	              "classList": [
	                "p02-img"
	              ],
	              "attr": {
	                "src": "../images/icon-security.png"
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "p02-text"
	              ],
	              "attr": {
	                "value": "多重保障"
	              }
	            }
	          ]
	        },
	        {
	          "type": "a",
	          "classList": [
	            "p02-a"
	          ],
	          "attr": {
	            "href": "javascript:;"
	          },
	          "children": [
	            {
	              "type": "image",
	              "classList": [
	                "p02-img"
	              ],
	              "attr": {
	                "src": "../images/icon-invite.png"
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "p02-text"
	              ],
	              "attr": {
	                "value": "好友红包"
	              }
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "medal"
	      ],
	      "children": [
	        {
	          "type": "image",
	          "classList": [
	            "icon-medal"
	          ],
	          "attr": {
	            "src": "../images/icon-medal.png"
	          }
	        },
	        {
	          "type": "text",
	          "style": {
	            "fontSize": 28
	          },
	          "attr": {
	            "value": "新手专享"
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "p03"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "style": {
	            "width": 320,
	            "textAlign": "center"
	          },
	          "children": [
	            {
	              "type": "div",
	              "classList": [
	                "p03-t01"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "style": {
	                    "fontSize": 60
	                  },
	                  "attr": {
	                    "value": "15"
	                  }
	                },
	                {
	                  "type": "text",
	                  "style": {
	                    "fontSize": 24,
	                    "marginLeft": 8,
	                    "marginBottom": 8
	                  },
	                  "attr": {
	                    "value": "%"
	                  }
	                }
	              ]
	            },
	            {
	              "type": "text",
	              "classList": [
	                "p03-t02"
	              ],
	              "attr": {
	                "value": "预期年化收益率"
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "style": {
	            "marginRight": 65,
	            "width": 260
	          },
	          "children": [
	            {
	              "type": "div",
	              "style": {
	                "flexDirection": "row",
	                "justifyContent": "space-between",
	                "color": "#999999"
	              },
	              "children": [
	                {
	                  "type": "text",
	                  "style": {
	                    "fontSize": 24
	                  },
	                  "attr": {
	                    "value": "30天期限"
	                  }
	                },
	                {
	                  "type": "text",
	                  "style": {
	                    "fontSize": 24
	                  },
	                  "attr": {
	                    "value": "|"
	                  }
	                },
	                {
	                  "type": "text",
	                  "style": {
	                    "fontSize": 24
	                  },
	                  "attr": {
	                    "value": "100元起购"
	                  }
	                }
	              ]
	            },
	            {
	              "type": "a",
	              "classList": [
	                "p03-btn"
	              ],
	              "attr": {
	                "href": function () {return (this.baseUrl) + 'modules/borrow/productDetails.js'}
	              },
	              "children": [
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": "立即投资"
	                  }
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "a",
	      "classList": [
	        "p04"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "style": {
	            "marginLeft": 50
	          },
	          "children": [
	            {
	              "type": "div",
	              "classList": [
	                "wallet-text"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "style": {
	                    "color": "#ff9125",
	                    "fontSize": 38
	                  },
	                  "attr": {
	                    "value": "专享"
	                  }
	                },
	                {
	                  "type": "text",
	                  "style": {
	                    "color": "#333333",
	                    "fontSize": 38
	                  },
	                  "attr": {
	                    "value": "-保利钱包"
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "classList": [
	                "wallet-text"
	              ],
	              "style": {
	                "marginTop": 36,
	                "color": "#999999"
	              },
	              "children": [
	                {
	                  "type": "text",
	                  "style": {
	                    "fontSize": 30
	                  },
	                  "attr": {
	                    "value": "一元起投 方便灵活"
	                  }
	                },
	                {
	                  "type": "div",
	                  "classList": [
	                    "icon-check"
	                  ],
	                  "children": [
	                    {
	                      "type": "text",
	                      "style": {
	                        "fontSize": 18
	                      },
	                      "attr": {
	                        "value": "立即查看"
	                      }
	                    }
	                  ]
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "image",
	          "style": {
	            "marginRight": 80,
	            "width": 130,
	            "height": 158
	          },
	          "attr": {
	            "src": "../images/icon-wallet.png"
	          }
	        }
	      ]
	    },
	    {
	      "type": "vbaoli-footer",
	      "attr": {
	        "selectedIndex": function () {return this.selectedIndex}
	      }
	    }
	  ]
	}

/***/ },
/* 160 */
/***/ function(module, exports) {

	module.exports = {
	  "wrapper": {
	    "width": 750
	  },
	  "p01": {
	    "height": 64,
	    "WebkitAlignItems": "center",
	    "alignItems": "center",
	    "flexDirection": "row",
	    "borderBottom": "1px solid #e7e7e7",
	    "backgroundColor": "#ffffff"
	  },
	  "icon-broadcast": {
	    "marginLeft": 16,
	    "width": 26,
	    "height": 24
	  },
	  "p02": {
	    "flexDirection": "row",
	    "borderBottom": "1px solid #e7e7e7",
	    "backgroundColor": "#ffffff"
	  },
	  "p02-a": {
	    "display": "flex",
	    "justifyContent": "center",
	    "alignItems": "center",
	    "width": 250,
	    "height": 194,
	    "fontSize": 14
	  },
	  "p02-img": {
	    "display": "flex",
	    "width": 80,
	    "height": 80
	  },
	  "p02-text": {
	    "marginTop": 16,
	    "color": "#666666",
	    "fontSize": 24
	  },
	  "medal": {
	    "flexDirection": "row",
	    "display": "flex",
	    "height": 60,
	    "lineHeight": 60,
	    "alignItems": "center",
	    "color": "#ff9125"
	  },
	  "icon-medal": {
	    "display": "flex",
	    "marginLeft": 13,
	    "marginRight": 13,
	    "width": 34,
	    "height": 32
	  },
	  "p03": {
	    "flexDirection": "row",
	    "alignItems": "center",
	    "justifyContent": "space-between",
	    "height": 280,
	    "backgroundColor": "#ffffff"
	  },
	  "p03-t01": {
	    "flexDirection": "row",
	    "justifyContent": "center",
	    "alignItems": "flex-end",
	    "color": "#ff6531"
	  },
	  "p03-t02": {
	    "marginTop": 28,
	    "color": "#999999",
	    "fontSize": 24
	  },
	  "p03-btn": {
	    "marginTop": 26,
	    "height": 68,
	    "lineHeight": 68,
	    "textAlign": "center",
	    "color": "#ffffff",
	    "fontSize": 28,
	    "borderRadius": 8,
	    "backgroundColor": "#ff9125"
	  },
	  "p04": {
	    "flexDirection": "row",
	    "justifyContent": "space-between",
	    "alignItems": "center",
	    "marginTop": 14,
	    "marginBottom": 14,
	    "height": 180,
	    "backgroundColor": "#ffffff"
	  },
	  "icon-check": {
	    "marginLeft": 22,
	    "width": 92,
	    "height": 26,
	    "lineHeight": 26,
	    "color": "#ff6531",
	    "textAlign": "center",
	    "borderWidth": 1,
	    "borderStyle": "solid",
	    "borderColor": "#ff6531"
	  },
	  "wallet-text": {
	    "flexDirection": "row"
	  }
	}

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';
	
	var _typeof2 = __webpack_require__(16);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	__webpack_require__(84);
	__webpack_require__(162);
	__webpack_require__(163);
	__webpack_require__(164);
	module.exports = {
	    data: function () {return {
	        dir: 'dist',
	        baseUrl: '',
	        selectedIndex: 0,
	        sliderList: [{
	            itemId: '520421163634',
	            title: 'item1',
	            pictureUrl: './images/slider01.png'
	        }, {
	            itemId: '522076777462',
	            title: 'item2',
	            pictureUrl: './images/slider02.png'
	        }, {
	            itemId: '522076777462',
	            title: 'iten3',
	            pictureUrl: './images/slider03.png'
	        }]
	    }},
	    created: function created() {
	        var bundleUrl = this.$getConfig().bundleUrl;
	        var nativeBase;
	        var isAndroidAssets = bundleUrl.indexOf('file://assets/') >= 0;
	        var isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('WeexDemo.app') > 0;
	        if (isAndroidAssets) {
	            nativeBase = 'file://assets/';
	        } else if (isiOSAssets) {
	            nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
	        } else {
	            var host = 'localhost:8080';
	            var matches = /\/\/([^\/]+?)\//.exec(this.$getConfig().bundleUrl);
	            if (matches && matches.length >= 2) {
	                host = matches[1];
	            }
	            nativeBase = 'http://' + host + '/' + this.dir + '/';
	        }
	        var h5Base = './index.html?page=./' + this.dir + '/';
	
	        this.baseUrl = nativeBase;
	        if ((typeof window === 'undefined' ? 'undefined' : (0, _typeof3.default)(window)) === 'object') {
	            this.baseUrl = h5Base;
	        }
	    }
	};}
	/* generated by weex-loader */


/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(148)
	var __weex_style__ = __webpack_require__(149)
	var __weex_script__ = __webpack_require__(150)
	
	__weex_define__('@weex-component/vbaoli-slider', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})


/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(146)
	var __weex_script__ = __webpack_require__(147)
	
	__weex_define__('@weex-component/vbaoli-marquee', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	})


/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(133)
	var __weex_template__ = __webpack_require__(141)
	var __weex_script__ = __webpack_require__(142)
	
	__weex_define__('@weex-component/vbaoli-footer', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	})


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYTdhMmY1NmNjZmJmMmJhOWFhOWE/MDBlYyoqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgud2U/ZmNiOSIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy90eXBlb2YuanM/ZjRiZCoiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sL2l0ZXJhdG9yLmpzP2QxNmIqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pdGVyYXRvci5qcz8yMzhkKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanM/ZmUxOCoiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3RyaW5nLWF0LmpzPzQxM2EqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWludGVnZXIuanM/ZjY1ZioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanM/NDVkMyoqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzPzlhOTQqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2xpYnJhcnkuanM/MmM4MCoiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzP2VjZTIqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19nbG9iYWwuanM/NzdhYSoqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanM/MWI2MioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2N0eC5qcz9jZTAwKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcz9kNTNlKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qcz9hNmRhKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwLmpzPzQxMTYqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanM/MGRhMyoqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qcz8yNGM4KioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanM/YmQxZioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzPzcwNTEqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qcz85MzVkKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qcz9hYjQ0KioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzPzQ5YTQqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzPzFlODYqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS5qcz8xNDU1KiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanM/ZDg1MCoqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXJhdG9ycy5qcz9hZmY3KiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qcz8wMTI3KiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzP2Q4Y2YqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcHMuanM/NDdmZCoiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMuanM/ZjViYyoqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzP2ZjZWEqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pb2JqZWN0LmpzPzY5NDYqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pb2JqZWN0LmpzPzVjZjkqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2YuanM/NDhlYSoqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzPzYxOTkqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1sZW5ndGguanM/NjJhNyoqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWluZGV4LmpzPzlmZDQqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQta2V5LmpzPzJhNmMqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQuanM/N2I2YyoqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VpZC5qcz9lOGNkKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qcz83NTk4KioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faHRtbC5qcz9lNWFmKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qcz9jOTQ1KiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MuanM/MzAyNyoiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdwby5qcz9kNDdkKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1vYmplY3QuanM/YjVjMCoqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qcz9iZjBlKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcz8xZTA5KiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanM/ZDVlOCoiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1zdGVwLmpzP2UyMDkqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1leHQuanM/NmVlMioiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sLmpzP2E3MGQqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pbmRleC5qcz9mMDdhKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zeW1ib2wuanM/NjcwYSoiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWV0YS5qcz81NTNkKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZGVmaW5lLmpzP2I2ZTAqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2tleW9mLmpzPzBkM2IqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0ta2V5cy5qcz83MjdhKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wcy5qcz9hNWZiKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXBpZS5qcz9kMGQyKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXkuanM/MTg0MyoiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4tZXh0LmpzP2QyMzgqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLmpzPzFlMDcqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BkLmpzP2Q3ZDgqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvci5qcz9iOGM1KiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wub2JzZXJ2YWJsZS5qcz9kYWE0KiIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtY29tcG9uZW50cy9pbmRleC5qcz8wZTE3KioqKiIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtY29tcG9uZW50cy9zcmMvd3hjLWJ1dHRvbi53ZT9jMzhmKioqKiIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtY29tcG9uZW50cy9zcmMvd3hjLWJ1dHRvbi53ZT84ZTY3KioqKiIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtY29tcG9uZW50cy9zcmMvd3hjLWJ1dHRvbi53ZT9jZWIzKioqKiIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtY29tcG9uZW50cy9zcmMvd3hjLWJ1dHRvbi53ZT80ODJkKioqKiIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtY29tcG9uZW50cy9zcmMvd3hjLWhuLndlP2M3YWEqKioqIiwid2VicGFjazovLy8uL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtaG4ud2U/YWEyNyoqKioiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1obi53ZT82N2E4KioqKiIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtY29tcG9uZW50cy9zcmMvd3hjLWhuLndlPzU2MTUqKioqIiwid2VicGFjazovLy8uL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtbGlzdC1pdGVtLndlPzQxYmEqKioqIiwid2VicGFjazovLy8uL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtbGlzdC1pdGVtLndlPzU1NGMqKioqIiwid2VicGFjazovLy8uL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtbGlzdC1pdGVtLndlPzVhYWEqKioqIiwid2VicGFjazovLy8uL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtbGlzdC1pdGVtLndlPzU4YTkqKioqIiwid2VicGFjazovLy8uL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtcGFuZWwud2U/NGMwNioqKioiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1wYW5lbC53ZT83NTkwKioqKiIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtY29tcG9uZW50cy9zcmMvd3hjLXBhbmVsLndlP2NjYmYqKioqIiwid2VicGFjazovLy8uL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtcGFuZWwud2U/N2YzNSoqKioiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy10aXAud2U/NWU4ZCoqKioiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy10aXAud2U/YTZjZSoqKioiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy10aXAud2U/M2Q2NCoqKioiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy10aXAud2U/MWQ3YyoqKioiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1jb3VudGRvd24ud2U/NjMwZSoqKioiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1jb3VudGRvd24ud2U/OGNhMioqKioiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1jb3VudGRvd24ud2U/Y2RlMSoqKioiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1jb3VudGRvd24ud2U/OTNmNyoqKioiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnbi5qcz9lNmNhKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduLmpzPzgwZTQqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24uanM/OTAwNyoqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qcz81YzBjKioqKiIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtY29tcG9uZW50cy9zcmMvd3hjLW1hcnF1ZWUud2U/ZDhjZSoqKioiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1tYXJxdWVlLndlPzY5YTYqKioqIiwid2VicGFjazovLy8uL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtbWFycXVlZS53ZT8wZTQzKioqKiIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtY29tcG9uZW50cy9zcmMvd3hjLW1hcnF1ZWUud2U/NTllZSoqKioiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1uYXZiYXIud2U/ZDgwZioqKioiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1uYXZiYXIud2U/YzkyMyoqKioiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1uYXZiYXIud2U/ODJjMyoqKioiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1uYXZiYXIud2U/NjAwMioqKioiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1uYXZwYWdlLndlPzQxY2YqKioqIiwid2VicGFjazovLy8uL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtbmF2cGFnZS53ZT9iNDMyKioqKiIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtY29tcG9uZW50cy9zcmMvd3hjLW5hdnBhZ2Uud2U/ZmNkMyoqKioiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1uYXZwYWdlLndlPzBkYWQqKioqIiwid2VicGFjazovLy8uL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtdGFiYmFyLndlPzMyNGQqKioqIiwid2VicGFjazovLy8uL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtdGFiaXRlbS53ZT8wMDI4KioqKiIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtY29tcG9uZW50cy9zcmMvd3hjLXRhYml0ZW0ud2U/MzI2ZioqKioiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy10YWJpdGVtLndlPzJkNjMqKioqIiwid2VicGFjazovLy8uL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtdGFiaXRlbS53ZT82NzFkKioqKiIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtY29tcG9uZW50cy9zcmMvd3hjLXRhYmJhci53ZT9lNGIxKioqKiIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtY29tcG9uZW50cy9zcmMvd3hjLXRhYmJhci53ZT85YTMzKioqKiIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtY29tcG9uZW50cy9zcmMvd3hjLXRhYmJhci53ZT8xZWRjKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jbHVkZS92YmFvbGktZm9vdGVyLXRhYi53ZT8zMTQ2KiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jbHVkZS92YmFvbGktZm9vdGVyLXRhYml0ZW0ud2U/NmU2YyoqIiwid2VicGFjazovLy8uL3NyYy9pbmNsdWRlL3ZiYW9saS1mb290ZXItdGFiaXRlbS53ZT83MjA1KioqIiwid2VicGFjazovLy8uL3NyYy9pbmNsdWRlL3ZiYW9saS1mb290ZXItdGFiaXRlbS53ZT9hY2FhKioqIiwid2VicGFjazovLy8uL3NyYy9pbmNsdWRlL3ZiYW9saS1mb290ZXItdGFiaXRlbS53ZT9lYTljKioqIiwid2VicGFjazovLy8uL3NyYy9pbmNsdWRlL3ZiYW9saS1mb290ZXItdGFiLndlP2I1MmEqKiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jbHVkZS92YmFvbGktZm9vdGVyLXRhYi53ZT84MDQ3KioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luY2x1ZGUvdmJhb2xpLWZvb3Rlci10YWIud2U/NmFhOSoqIiwid2VicGFjazovLy8uL3NyYy9pbmNsdWRlL3ZiYW9saS1mb290ZXIud2U/NGYyMioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luY2x1ZGUvdmJhb2xpLWZvb3Rlci53ZT9iODJmIiwid2VicGFjazovLy8uL3NyYy9pbmNsdWRlL3ZiYW9saS1tYXJxdWVlLndlP2EwZjgqIiwid2VicGFjazovLy8uL3NyYy9pbmNsdWRlL3ZiYW9saS1tYXJxdWVlLndlPzEyY2MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luY2x1ZGUvdmJhb2xpLXNsaWRlci53ZT85Njg2KiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jbHVkZS92YmFvbGktc2xpZGVyLndlPzI4ZmIqIiwid2VicGFjazovLy8uL3NyYy9pbmNsdWRlL3ZiYW9saS1zbGlkZXIud2U/NDc3ZiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgud2U/ZGRkYiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgud2U/ODZmYyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgud2UiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luY2x1ZGUvdmJhb2xpLXNsaWRlci53ZT9kMDRlIiwid2VicGFjazovLy8uL3NyYy9pbmNsdWRlL3ZiYW9saS1tYXJxdWVlLndlP2FkODAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luY2x1ZGUvdmJhb2xpLWZvb3Rlci53ZT9mMTBkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDdENBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxFQUFDOztBQUVELDJGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsa0hBQWlILG1CQUFtQixFQUFFLG1CQUFtQiw0SkFBNEo7O0FBRXJULHVDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0EsRzs7Ozs7O0FDcEJBLG1CQUFrQix3RDs7Ozs7O0FDQWxCO0FBQ0E7QUFDQSx3RDs7Ozs7O0FDRkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOEJBQTZCO0FBQzdCLGVBQWM7QUFDZDtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxnQ0FBK0I7QUFDL0I7QUFDQTtBQUNBLFdBQVU7QUFDVixFQUFDLEU7Ozs7OztBQ2hCRDtBQUNB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFpQztBQUNqQyxZQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFpQztBQUNqQyxZQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFpQztBQUNqQyxZQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBcUM7QUFDckMsZ0JBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLHVDQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7QUNsWEE7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztjQUdBO2tCQUNBO3dCQUNBOztxQkFFQTtvQkFDQTt5QkFDQTtBQUhBO3FCQUtBO29CQUNBO3lCQUNBO0FBSEE7cUJBS0E7b0JBQ0E7eUJBR0E7QUFMQTtBQVpBO2lDQWtCQTsyQ0FDQTthQUNBO3NFQUNBO3FHQUNBOzhCQUNBOzBCQUNBO2lDQUdBOzhFQUNBO2dCQUNBO3dCQUNBO29FQUNBO2lEQUNBO2dDQUNBO0FBQ0E7OERBQ0E7QUFDQTswREFFQTs7d0JBQ0E7eUdBRUE7NEJBQ0E7QUFDQTtBQUNBO0FBN0NBOzs7Ozs7OztBQ3RGQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsRUFBQzs7Ozs7OztBQ2ZEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsRUFBQzs7Ozs7OztBQ1pEO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxFQUFDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYTdhMmY1NmNjZmJmMmJhOWFhOWEiLCJ2YXIgX193ZWV4X3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL2luZGV4LndlXCIpXG52YXIgX193ZWV4X3N0eWxlX18gPSByZXF1aXJlKFwiISEuLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL2luZGV4LndlXCIpXG52YXIgX193ZWV4X3NjcmlwdF9fID0gcmVxdWlyZShcIiEhLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL3NjcmlwdC5qcyFiYWJlbC1sb2FkZXI/cHJlc2V0c1tdPUM6XFxcXHZiYW9saS13ZWV4XFxcXHZiYW9saVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcHJlc2V0LWVzMjAxNSZwcmVzZXRzPUM6XFxcXHZiYW9saS13ZWV4XFxcXHZiYW9saVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcHJlc2V0LWVzMjAxNSZwbHVnaW5zW109QzpcXFxcdmJhb2xpLXdlZXhcXFxcdmJhb2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmcGx1Z2lucz1DOlxcXFx2YmFvbGktd2VleFxcXFx2YmFvbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZjb21tZW50cz1mYWxzZSEuLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c2NyaXB0cyEuL2luZGV4LndlXCIpXG5cbl9fd2VleF9kZWZpbmVfXygnQHdlZXgtY29tcG9uZW50LzI0NmQ5MDE3MWU5ZDZlZDFmODFhZjdhMDgwZjkwNzg1JywgW10sIGZ1bmN0aW9uKF9fd2VleF9yZXF1aXJlX18sIF9fd2VleF9leHBvcnRzX18sIF9fd2VleF9tb2R1bGVfXykge1xuXG4gICAgX193ZWV4X3NjcmlwdF9fKF9fd2VleF9tb2R1bGVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X3JlcXVpcmVfXylcbiAgICBpZiAoX193ZWV4X2V4cG9ydHNfXy5fX2VzTW9kdWxlICYmIF9fd2VleF9leHBvcnRzX18uZGVmYXVsdCkge1xuICAgICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMgPSBfX3dlZXhfZXhwb3J0c19fLmRlZmF1bHRcbiAgICB9XG5cbiAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cy50ZW1wbGF0ZSA9IF9fd2VleF90ZW1wbGF0ZV9fXG5cbiAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cy5zdHlsZSA9IF9fd2VleF9zdHlsZV9fXG5cbn0pXG5cbl9fd2VleF9ib290c3RyYXBfXygnQHdlZXgtY29tcG9uZW50LzI0NmQ5MDE3MWU5ZDZlZDFmODFhZjdhMDgwZjkwNzg1Jyx1bmRlZmluZWQsdW5kZWZpbmVkKVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2luZGV4LndlP2VudHJ5PXRydWVcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAxMiIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2l0ZXJhdG9yID0gcmVxdWlyZShcIi4uL2NvcmUtanMvc3ltYm9sL2l0ZXJhdG9yXCIpO1xuXG52YXIgX2l0ZXJhdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2l0ZXJhdG9yKTtcblxudmFyIF9zeW1ib2wgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9zeW1ib2xcIik7XG5cbnZhciBfc3ltYm9sMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N5bWJvbCk7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgX2l0ZXJhdG9yMi5kZWZhdWx0ID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gX3N5bWJvbDIuZGVmYXVsdCAmJiBvYmogIT09IF9zeW1ib2wyLmRlZmF1bHQucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgX3R5cGVvZihfaXRlcmF0b3IyLmRlZmF1bHQpID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKG9iaik7XG59IDogZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gb2JqICYmIHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBfc3ltYm9sMi5kZWZhdWx0ICYmIG9iaiAhPT0gX3N5bWJvbDIuZGVmYXVsdC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iaiA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKG9iaik7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNCAxMiAxNyAxOSAyMCAyNSAyOCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaXRlcmF0b3JcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC9pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDQgMTIgMTcgMTkgMjAgMjUgMjgiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL193a3MtZXh0JykuZignaXRlcmF0b3InKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDQgMTIgMTcgMTkgMjAgMjUgMjgiLCIndXNlIHN0cmljdCc7XG52YXIgJGF0ICA9IHJlcXVpcmUoJy4vX3N0cmluZy1hdCcpKHRydWUpO1xuXG4vLyAyMS4xLjMuMjcgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uKGl0ZXJhdGVkKXtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwgaW5kZXggPSB0aGlzLl9pXG4gICAgLCBwb2ludDtcbiAgaWYoaW5kZXggPj0gTy5sZW5ndGgpcmV0dXJuIHt2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlfTtcbiAgcG9pbnQgPSAkYXQoTywgaW5kZXgpO1xuICB0aGlzLl9pICs9IHBvaW50Lmxlbmd0aDtcbiAgcmV0dXJuIHt2YWx1ZTogcG9pbnQsIGRvbmU6IGZhbHNlfTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNCAxMiAxNyAxOSAyMCAyNSAyOCIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBkZWZpbmVkICAgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG4vLyB0cnVlICAtPiBTdHJpbmcjYXRcbi8vIGZhbHNlIC0+IFN0cmluZyNjb2RlUG9pbnRBdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUT19TVFJJTkcpe1xuICByZXR1cm4gZnVuY3Rpb24odGhhdCwgcG9zKXtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKVxuICAgICAgLCBpID0gdG9JbnRlZ2VyKHBvcylcbiAgICAgICwgbCA9IHMubGVuZ3RoXG4gICAgICAsIGEsIGI7XG4gICAgaWYoaSA8IDAgfHwgaSA+PSBsKXJldHVybiBUT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICBhID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBhIDwgMHhkODAwIHx8IGEgPiAweGRiZmYgfHwgaSArIDEgPT09IGwgfHwgKGIgPSBzLmNoYXJDb2RlQXQoaSArIDEpKSA8IDB4ZGMwMCB8fCBiID4gMHhkZmZmXG4gICAgICA/IFRPX1NUUklORyA/IHMuY2hhckF0KGkpIDogYVxuICAgICAgOiBUT19TVFJJTkcgPyBzLnNsaWNlKGksIGkgKyAyKSA6IChhIC0gMHhkODAwIDw8IDEwKSArIChiIC0gMHhkYzAwKSArIDB4MTAwMDA7XG4gIH07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3RyaW5nLWF0LmpzXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNCAxMiAxNyAxOSAyMCAyNSAyOCIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgID0gTWF0aC5jZWlsXG4gICwgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWludGVnZXIuanNcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCA0IDcgOCAxMCAxMiAxMyAxNyAxOSAyMCAyMSAyNSAyNyAyOCIsIi8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoaXQgPT0gdW5kZWZpbmVkKXRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanNcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCA0IDcgOCAxMCAxMiAxMyAxNyAxOSAyMCAyMSAyNSAyNyAyOCIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZICAgICAgICA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKVxuICAsICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCByZWRlZmluZSAgICAgICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJylcbiAgLCBoaWRlICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBJdGVyYXRvcnMgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgJGl0ZXJDcmVhdGUgICAgPSByZXF1aXJlKCcuL19pdGVyLWNyZWF0ZScpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJylcbiAgLCBJVEVSQVRPUiAgICAgICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgQlVHR1kgICAgICAgICAgPSAhKFtdLmtleXMgJiYgJ25leHQnIGluIFtdLmtleXMoKSkgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxuICAsIEZGX0lURVJBVE9SICAgID0gJ0BAaXRlcmF0b3InXG4gICwgS0VZUyAgICAgICAgICAgPSAna2V5cydcbiAgLCBWQUxVRVMgICAgICAgICA9ICd2YWx1ZXMnO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEJhc2UsIE5BTUUsIENvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCl7XG4gICRpdGVyQ3JlYXRlKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcbiAgdmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uKGtpbmQpe1xuICAgIGlmKCFCVUdHWSAmJiBraW5kIGluIHByb3RvKXJldHVybiBwcm90b1traW5kXTtcbiAgICBzd2l0Y2goa2luZCl7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgIH0gcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgfTtcbiAgdmFyIFRBRyAgICAgICAgPSBOQU1FICsgJyBJdGVyYXRvcidcbiAgICAsIERFRl9WQUxVRVMgPSBERUZBVUxUID09IFZBTFVFU1xuICAgICwgVkFMVUVTX0JVRyA9IGZhbHNlXG4gICAgLCBwcm90byAgICAgID0gQmFzZS5wcm90b3R5cGVcbiAgICAsICRuYXRpdmUgICAgPSBwcm90b1tJVEVSQVRPUl0gfHwgcHJvdG9bRkZfSVRFUkFUT1JdIHx8IERFRkFVTFQgJiYgcHJvdG9bREVGQVVMVF1cbiAgICAsICRkZWZhdWx0ICAgPSAkbmF0aXZlIHx8IGdldE1ldGhvZChERUZBVUxUKVxuICAgICwgJGVudHJpZXMgICA9IERFRkFVTFQgPyAhREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKCdlbnRyaWVzJykgOiB1bmRlZmluZWRcbiAgICAsICRhbnlOYXRpdmUgPSBOQU1FID09ICdBcnJheScgPyBwcm90by5lbnRyaWVzIHx8ICRuYXRpdmUgOiAkbmF0aXZlXG4gICAgLCBtZXRob2RzLCBrZXksIEl0ZXJhdG9yUHJvdG90eXBlO1xuICAvLyBGaXggbmF0aXZlXG4gIGlmKCRhbnlOYXRpdmUpe1xuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoJGFueU5hdGl2ZS5jYWxsKG5ldyBCYXNlKSk7XG4gICAgaWYoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUpe1xuICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgICAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XG4gICAgICAvLyBmaXggZm9yIHNvbWUgb2xkIGVuZ2luZXNcbiAgICAgIGlmKCFMSUJSQVJZICYmICFoYXMoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SKSloaWRlKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgfVxuICB9XG4gIC8vIGZpeCBBcnJheSN7dmFsdWVzLCBAQGl0ZXJhdG9yfS5uYW1lIGluIFY4IC8gRkZcbiAgaWYoREVGX1ZBTFVFUyAmJiAkbmF0aXZlICYmICRuYXRpdmUubmFtZSAhPT0gVkFMVUVTKXtcbiAgICBWQUxVRVNfQlVHID0gdHJ1ZTtcbiAgICAkZGVmYXVsdCA9IGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gJG5hdGl2ZS5jYWxsKHRoaXMpOyB9O1xuICB9XG4gIC8vIERlZmluZSBpdGVyYXRvclxuICBpZigoIUxJQlJBUlkgfHwgRk9SQ0VEKSAmJiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSl7XG4gICAgaGlkZShwcm90bywgSVRFUkFUT1IsICRkZWZhdWx0KTtcbiAgfVxuICAvLyBQbHVnIGZvciBsaWJyYXJ5XG4gIEl0ZXJhdG9yc1tOQU1FXSA9ICRkZWZhdWx0O1xuICBJdGVyYXRvcnNbVEFHXSAgPSByZXR1cm5UaGlzO1xuICBpZihERUZBVUxUKXtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiAgREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKFZBTFVFUyksXG4gICAgICBrZXlzOiAgICBJU19TRVQgICAgID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiAkZW50cmllc1xuICAgIH07XG4gICAgaWYoRk9SQ0VEKWZvcihrZXkgaW4gbWV0aG9kcyl7XG4gICAgICBpZighKGtleSBpbiBwcm90bykpcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG4gIHJldHVybiBtZXRob2RzO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgNCAxMiAxNyAxOSAyMCAyNSAyOCIsIm1vZHVsZS5leHBvcnRzID0gdHJ1ZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2xpYnJhcnkuanNcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA0IDEyIDE3IDE5IDIwIDI1IDI4IiwidmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY29yZSAgICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgY3R4ICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBoaWRlICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbih0eXBlLCBuYW1lLCBzb3VyY2Upe1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRlxuICAgICwgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuR1xuICAgICwgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuU1xuICAgICwgSVNfUFJPVE8gID0gdHlwZSAmICRleHBvcnQuUFxuICAgICwgSVNfQklORCAgID0gdHlwZSAmICRleHBvcnQuQlxuICAgICwgSVNfV1JBUCAgID0gdHlwZSAmICRleHBvcnQuV1xuICAgICwgZXhwb3J0cyAgID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSlcbiAgICAsIGV4cFByb3RvICA9IGV4cG9ydHNbUFJPVE9UWVBFXVxuICAgICwgdGFyZ2V0ICAgID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXVxuICAgICwga2V5LCBvd24sIG91dDtcbiAgaWYoSVNfR0xPQkFMKXNvdXJjZSA9IG5hbWU7XG4gIGZvcihrZXkgaW4gc291cmNlKXtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgIGlmKG93biAmJiBrZXkgaW4gZXhwb3J0cyljb250aW51ZTtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IG93biA/IHRhcmdldFtrZXldIDogc291cmNlW2tleV07XG4gICAgLy8gcHJldmVudCBnbG9iYWwgcG9sbHV0aW9uIGZvciBuYW1lc3BhY2VzXG4gICAgZXhwb3J0c1trZXldID0gSVNfR0xPQkFMICYmIHR5cGVvZiB0YXJnZXRba2V5XSAhPSAnZnVuY3Rpb24nID8gc291cmNlW2tleV1cbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIDogSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpXG4gICAgLy8gd3JhcCBnbG9iYWwgY29uc3RydWN0b3JzIGZvciBwcmV2ZW50IGNoYW5nZSB0aGVtIGluIGxpYnJhcnlcbiAgICA6IElTX1dSQVAgJiYgdGFyZ2V0W2tleV0gPT0gb3V0ID8gKGZ1bmN0aW9uKEMpe1xuICAgICAgdmFyIEYgPSBmdW5jdGlvbihhLCBiLCBjKXtcbiAgICAgICAgaWYodGhpcyBpbnN0YW5jZW9mIEMpe1xuICAgICAgICAgIHN3aXRjaChhcmd1bWVudHMubGVuZ3RoKXtcbiAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIG5ldyBDO1xuICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gbmV3IEMoYSk7XG4gICAgICAgICAgICBjYXNlIDI6IHJldHVybiBuZXcgQyhhLCBiKTtcbiAgICAgICAgICB9IHJldHVybiBuZXcgQyhhLCBiLCBjKTtcbiAgICAgICAgfSByZXR1cm4gQy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICAgIEZbUFJPVE9UWVBFXSA9IENbUFJPVE9UWVBFXTtcbiAgICAgIHJldHVybiBGO1xuICAgIC8vIG1ha2Ugc3RhdGljIHZlcnNpb25zIGZvciBwcm90b3R5cGUgbWV0aG9kc1xuICAgIH0pKG91dCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUubWV0aG9kcy4lTkFNRSVcbiAgICBpZihJU19QUk9UTyl7XG4gICAgICAoZXhwb3J0cy52aXJ0dWFsIHx8IChleHBvcnRzLnZpcnR1YWwgPSB7fSkpW2tleV0gPSBvdXQ7XG4gICAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUucHJvdG90eXBlLiVOQU1FJVxuICAgICAgaWYodHlwZSAmICRleHBvcnQuUiAmJiBleHBQcm90byAmJiAhZXhwUHJvdG9ba2V5XSloaWRlKGV4cFByb3RvLCBrZXksIG91dCk7XG4gICAgfVxuICB9XG59O1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YCBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qc1xuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDQgNyA4IDEwIDEyIDEzIDE3IDE5IDIwIDIxIDI1IDI3IDI4IiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZiA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZih0eXBlb2YgX19nID09ICdudW1iZXInKV9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNCA3IDggMTAgMTIgMTMgMTcgMTkgMjAgMjEgMjUgMjcgMjgiLCJ2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0ge3ZlcnNpb246ICcyLjQuMCd9O1xuaWYodHlwZW9mIF9fZSA9PSAnbnVtYmVyJylfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgNCA3IDggMTAgMTIgMTMgMTcgMTkgMjAgMjEgMjUgMjcgMjgiLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuLCB0aGF0LCBsZW5ndGgpe1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZih0aGF0ID09PSB1bmRlZmluZWQpcmV0dXJuIGZuO1xuICBzd2l0Y2gobGVuZ3RoKXtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbihhKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24oYSwgYil7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uKGEsIGIsIGMpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24oLyogLi4uYXJncyAqLyl7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNCA3IDggMTAgMTIgMTMgMTcgMTkgMjAgMjEgMjUgMjcgMjgiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2EtZnVuY3Rpb24uanNcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA0IDcgOCAxMCAxMiAxMyAxNyAxOSAyMCAyMSAyNSAyNyAyOCIsInZhciBkUCAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hpZGUuanNcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCA0IDcgOCAxMCAxMiAxMyAxNyAxOSAyMCAyMSAyNSAyNyAyOCIsInZhciBhbk9iamVjdCAgICAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpXG4gICwgdG9QcmltaXRpdmUgICAgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKVxuICAsIGRQICAgICAgICAgICAgID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyl7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZihJRThfRE9NX0RFRklORSl0cnkge1xuICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICBpZignZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKU9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanNcbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCA0IDcgOCAxMCAxMiAxMyAxNyAxOSAyMCAyMSAyNSAyNyAyOCIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKCFpc09iamVjdChpdCkpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNCA3IDggMTAgMTIgMTMgMTcgMTkgMjAgMjEgMjUgMjcgMjgiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCA0IDcgOCAxMCAxMiAxMyAxNyAxOSAyMCAyMSAyNSAyNyAyOCIsIm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDQgNyA4IDEwIDEyIDEzIDE3IDE5IDIwIDIxIDI1IDI3IDI4IiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZXNjcmlwdG9ycy5qc1xuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDQgNyA4IDEwIDEyIDEzIDE3IDE5IDIwIDIxIDI1IDI3IDI4IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihleGVjKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qc1xuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDQgNyA4IDEwIDEyIDEzIDE3IDE5IDIwIDIxIDI1IDI3IDI4IiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50XG4gIC8vIGluIG9sZCBJRSB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0J1xuICAsIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDQgNyA4IDEwIDEyIDEzIDE3IDE5IDIwIDIxIDI1IDI3IDI4IiwiLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgUyl7XG4gIGlmKCFpc09iamVjdChpdCkpcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICBpZih0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIGlmKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanNcbi8vIG1vZHVsZSBpZCA9IDM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA0IDcgOCAxMCAxMiAxMyAxNyAxOSAyMCAyMSAyNSAyNyAyOCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYml0bWFwLCB2YWx1ZSl7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZSAgOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZSAgICA6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWUgICAgICAgOiB2YWx1ZVxuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanNcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA0IDcgOCAxMCAxMiAxMyAxNyAxOSAyMCAyMSAyNSAyNyAyOCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faGlkZScpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCA0IDEyIDE3IDE5IDIwIDI1IDI4IiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBrZXkpe1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanNcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCA0IDcgOCAxMCAxMiAxMyAxNyAxOSAyMCAyMSAyNSAyNyAyOCIsIm1vZHVsZS5leHBvcnRzID0ge307XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyYXRvcnMuanNcbi8vIG1vZHVsZSBpZCA9IDQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCA0IDEyIDE3IDE5IDIwIDI1IDI4IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNyZWF0ZSAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpXG4gICwgZGVzY3JpcHRvciAgICAgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJylcbiAgLCBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG4vLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faGlkZScpKEl0ZXJhdG9yUHJvdG90eXBlLCByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKSwgZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KXtcbiAgQ29uc3RydWN0b3IucHJvdG90eXBlID0gY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlLCB7bmV4dDogZGVzY3JpcHRvcigxLCBuZXh0KX0pO1xuICBzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvciwgTkFNRSArICcgSXRlcmF0b3InKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDQgMTIgMTcgMTkgMjAgMjUgMjgiLCIvLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbnZhciBhbk9iamVjdCAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgZFBzICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHBzJylcbiAgLCBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKVxuICAsIElFX1BST1RPICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpXG4gICwgRW1wdHkgICAgICAgPSBmdW5jdGlvbigpeyAvKiBlbXB0eSAqLyB9XG4gICwgUFJPVE9UWVBFICAgPSAncHJvdG90eXBlJztcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIGNyZWF0ZURpY3QgPSBmdW5jdGlvbigpe1xuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICB2YXIgaWZyYW1lID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdpZnJhbWUnKVxuICAgICwgaSAgICAgID0gZW51bUJ1Z0tleXMubGVuZ3RoXG4gICAgLCBsdCAgICAgPSAnPCdcbiAgICAsIGd0ICAgICA9ICc+J1xuICAgICwgaWZyYW1lRG9jdW1lbnQ7XG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICByZXF1aXJlKCcuL19odG1sJykuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lLnNyYyA9ICdqYXZhc2NyaXB0Oic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2NyaXB0LXVybFxuICAvLyBjcmVhdGVEaWN0ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuT2JqZWN0O1xuICAvLyBodG1sLnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUobHQgKyAnc2NyaXB0JyArIGd0ICsgJ2RvY3VtZW50LkY9T2JqZWN0JyArIGx0ICsgJy9zY3JpcHQnICsgZ3QpO1xuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICBjcmVhdGVEaWN0ID0gaWZyYW1lRG9jdW1lbnQuRjtcbiAgd2hpbGUoaS0tKWRlbGV0ZSBjcmVhdGVEaWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbaV1dO1xuICByZXR1cm4gY3JlYXRlRGljdCgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKXtcbiAgdmFyIHJlc3VsdDtcbiAgaWYoTyAhPT0gbnVsbCl7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuICAgIHJlc3VsdCA9IG5ldyBFbXB0eTtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gbnVsbDtcbiAgICAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHBvbHlmaWxsXG4gICAgcmVzdWx0W0lFX1BST1RPXSA9IE87XG4gIH0gZWxzZSByZXN1bHQgPSBjcmVhdGVEaWN0KCk7XG4gIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiBkUHMocmVzdWx0LCBQcm9wZXJ0aWVzKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA0IDEyIDE3IDE5IDIwIDI1IDI4IiwidmFyIGRQICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgZ2V0S2V5cyAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcyl7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIga2V5cyAgID0gZ2V0S2V5cyhQcm9wZXJ0aWVzKVxuICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAsIGkgPSAwXG4gICAgLCBQO1xuICB3aGlsZShsZW5ndGggPiBpKWRQLmYoTywgUCA9IGtleXNbaSsrXSwgUHJvcGVydGllc1tQXSk7XG4gIHJldHVybiBPO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcHMuanNcbi8vIG1vZHVsZSBpZCA9IDQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA0IDEyIDE3IDE5IDIwIDI1IDI4IiwiLy8gMTkuMS4yLjE0IC8gMTUuMi4zLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgJGtleXMgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpXG4gICwgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKXtcbiAgcmV0dXJuICRrZXlzKE8sIGVudW1CdWdLZXlzKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDQgNyA4IDEwIDEyIDEzIDE3IDE5IDIwIDIxIDI1IDI3IDI4IiwidmFyIGhhcyAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgdG9JT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgYXJyYXlJbmRleE9mID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKShmYWxzZSlcbiAgLCBJRV9QUk9UTyAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0LCBuYW1lcyl7XG4gIHZhciBPICAgICAgPSB0b0lPYmplY3Qob2JqZWN0KVxuICAgICwgaSAgICAgID0gMFxuICAgICwgcmVzdWx0ID0gW11cbiAgICAsIGtleTtcbiAgZm9yKGtleSBpbiBPKWlmKGtleSAhPSBJRV9QUk9UTyloYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpaWYoaGFzKE8sIGtleSA9IG5hbWVzW2krK10pKXtcbiAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanNcbi8vIG1vZHVsZSBpZCA9IDQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA0IDcgOCAxMCAxMiAxMyAxNyAxOSAyMCAyMSAyNSAyNyAyOCIsIi8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0JylcbiAgLCBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNCA3IDggMTAgMTIgMTMgMTcgMTkgMjAgMjEgMjUgMjcgMjgiLCIvLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKSA/IE9iamVjdCA6IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lvYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA0IDcgOCAxMCAxMiAxMyAxNyAxOSAyMCAyMSAyNSAyNyAyOCIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2YuanNcbi8vIG1vZHVsZSBpZCA9IDUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCA0IDcgOCAxMCAxMiAxMyAxNyAxOSAyMCAyMSAyNSAyNyAyOCIsIi8vIGZhbHNlIC0+IEFycmF5I2luZGV4T2Zcbi8vIHRydWUgIC0+IEFycmF5I2luY2x1ZGVzXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgdG9MZW5ndGggID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJylcbiAgLCB0b0luZGV4ICAgPSByZXF1aXJlKCcuL190by1pbmRleCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihJU19JTkNMVURFUyl7XG4gIHJldHVybiBmdW5jdGlvbigkdGhpcywgZWwsIGZyb21JbmRleCl7XG4gICAgdmFyIE8gICAgICA9IHRvSU9iamVjdCgkdGhpcylcbiAgICAgICwgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpXG4gICAgICAsIGluZGV4ICA9IHRvSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpXG4gICAgICAsIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICBpZihJU19JTkNMVURFUyAmJiBlbCAhPSBlbCl3aGlsZShsZW5ndGggPiBpbmRleCl7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICBpZih2YWx1ZSAhPSB2YWx1ZSlyZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSN0b0luZGV4IGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvcig7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspaWYoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTyl7XG4gICAgICBpZihPW2luZGV4XSA9PT0gZWwpcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNCA3IDggMTAgMTIgMTMgMTcgMTkgMjAgMjEgMjUgMjcgMjgiLCIvLyA3LjEuMTUgVG9MZW5ndGhcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBtaW4gICAgICAgPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWxlbmd0aC5qc1xuLy8gbW9kdWxlIGlkID0gNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDQgNyA4IDEwIDEyIDEzIDE3IDE5IDIwIDIxIDI1IDI3IDI4IiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIG1heCAgICAgICA9IE1hdGgubWF4XG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGluZGV4LCBsZW5ndGgpe1xuICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWluZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgNCA3IDggMTAgMTIgMTMgMTcgMTkgMjAgMjEgMjUgMjcgMjgiLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ2tleXMnKVxuICAsIHVpZCAgICA9IHJlcXVpcmUoJy4vX3VpZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gdWlkKGtleSkpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC1rZXkuanNcbi8vIG1vZHVsZSBpZCA9IDU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA0IDcgOCAxMCAxMiAxMyAxNyAxOSAyMCAyMSAyNSAyNyAyOCIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nXG4gICwgc3RvcmUgID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHt9KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQuanNcbi8vIG1vZHVsZSBpZCA9IDU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA0IDcgOCAxMCAxMiAxMyAxNyAxOSAyMCAyMSAyNSAyNyAyOCIsInZhciBpZCA9IDBcbiAgLCBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdWlkLmpzXG4vLyBtb2R1bGUgaWQgPSA1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNCA3IDggMTAgMTIgMTMgMTcgMTkgMjAgMjEgMjUgMjcgMjgiLCIvLyBJRSA4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgJ2NvbnN0cnVjdG9yLGhhc093blByb3BlcnR5LGlzUHJvdG90eXBlT2YscHJvcGVydHlJc0VudW1lcmFibGUsdG9Mb2NhbGVTdHJpbmcsdG9TdHJpbmcsdmFsdWVPZidcbikuc3BsaXQoJywnKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA0IDcgOCAxMCAxMiAxMyAxNyAxOSAyMCAyMSAyNSAyNyAyOCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faHRtbC5qc1xuLy8gbW9kdWxlIGlkID0gNThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDQgMTIgMTcgMTkgMjAgMjUgMjgiLCJ2YXIgZGVmID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZlxuICAsIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIHRhZywgc3RhdCl7XG4gIGlmKGl0ICYmICFoYXMoaXQgPSBzdGF0ID8gaXQgOiBpdC5wcm90b3R5cGUsIFRBRykpZGVmKGl0LCBUQUcsIHtjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiB0YWd9KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qc1xuLy8gbW9kdWxlIGlkID0gNTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDQgMTIgMTcgMTkgMjAgMjUgMjgiLCJ2YXIgc3RvcmUgICAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCd3a3MnKVxuICAsIHVpZCAgICAgICAgPSByZXF1aXJlKCcuL191aWQnKVxuICAsIFN5bWJvbCAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5TeW1ib2xcbiAgLCBVU0VfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xuXG52YXIgJGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG5hbWUpe1xuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cbiAgICBVU0VfU1lNQk9MICYmIFN5bWJvbFtuYW1lXSB8fCAoVVNFX1NZTUJPTCA/IFN5bWJvbCA6IHVpZCkoJ1N5bWJvbC4nICsgbmFtZSkpO1xufTtcblxuJGV4cG9ydHMuc3RvcmUgPSBzdG9yZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy5qc1xuLy8gbW9kdWxlIGlkID0gNjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDQgMTIgMTcgMTkgMjAgMjUgMjgiLCIvLyAxOS4xLjIuOSAvIDE1LjIuMy4yIE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIGhhcyAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCB0b09iamVjdCAgICA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgSUVfUFJPVE8gICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJylcbiAgLCBPYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uKE8pe1xuICBPID0gdG9PYmplY3QoTyk7XG4gIGlmKGhhcyhPLCBJRV9QUk9UTykpcmV0dXJuIE9bSUVfUFJPVE9dO1xuICBpZih0eXBlb2YgTy5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmIE8gaW5zdGFuY2VvZiBPLmNvbnN0cnVjdG9yKXtcbiAgICByZXR1cm4gTy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIH0gcmV0dXJuIE8gaW5zdGFuY2VvZiBPYmplY3QgPyBPYmplY3RQcm90byA6IG51bGw7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdwby5qc1xuLy8gbW9kdWxlIGlkID0gNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDQgMTIgMTcgMTkgMjAgMjUgMjgiLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCA0IDcgOCAxMCAxMiAxMyAxNyAxOSAyMCAyMSAyNSAyNyAyOCIsInJlcXVpcmUoJy4vZXM2LmFycmF5Lml0ZXJhdG9yJyk7XG52YXIgZ2xvYmFsICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgaGlkZSAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIEl0ZXJhdG9ycyAgICAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsIFRPX1NUUklOR19UQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxuZm9yKHZhciBjb2xsZWN0aW9ucyA9IFsnTm9kZUxpc3QnLCAnRE9NVG9rZW5MaXN0JywgJ01lZGlhTGlzdCcsICdTdHlsZVNoZWV0TGlzdCcsICdDU1NSdWxlTGlzdCddLCBpID0gMDsgaSA8IDU7IGkrKyl7XG4gIHZhciBOQU1FICAgICAgID0gY29sbGVjdGlvbnNbaV1cbiAgICAsIENvbGxlY3Rpb24gPSBnbG9iYWxbTkFNRV1cbiAgICAsIHByb3RvICAgICAgPSBDb2xsZWN0aW9uICYmIENvbGxlY3Rpb24ucHJvdG90eXBlO1xuICBpZihwcm90byAmJiAhcHJvdG9bVE9fU1RSSU5HX1RBR10paGlkZShwcm90bywgVE9fU1RSSU5HX1RBRywgTkFNRSk7XG4gIEl0ZXJhdG9yc1tOQU1FXSA9IEl0ZXJhdG9ycy5BcnJheTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gNjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDQgMTIgMTcgMTkgMjAgMjUgMjgiLCIndXNlIHN0cmljdCc7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpXG4gICwgc3RlcCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpXG4gICwgSXRlcmF0b3JzICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgdG9JT2JqZWN0ICAgICAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcblxuLy8gMjIuMS4zLjQgQXJyYXkucHJvdG90eXBlLmVudHJpZXMoKVxuLy8gMjIuMS4zLjEzIEFycmF5LnByb3RvdHlwZS5rZXlzKClcbi8vIDIyLjEuMy4yOSBBcnJheS5wcm90b3R5cGUudmFsdWVzKClcbi8vIDIyLjEuMy4zMCBBcnJheS5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbihpdGVyYXRlZCwga2luZCl7XG4gIHRoaXMuX3QgPSB0b0lPYmplY3QoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgdGhpcy5fayA9IGtpbmQ7ICAgICAgICAgICAgICAgIC8vIGtpbmRcbi8vIDIyLjEuNS4yLjEgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwga2luZCAgPSB0aGlzLl9rXG4gICAgLCBpbmRleCA9IHRoaXMuX2krKztcbiAgaWYoIU8gfHwgaW5kZXggPj0gTy5sZW5ndGgpe1xuICAgIHRoaXMuX3QgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHN0ZXAoMSk7XG4gIH1cbiAgaWYoa2luZCA9PSAna2V5cycgIClyZXR1cm4gc3RlcCgwLCBpbmRleCk7XG4gIGlmKGtpbmQgPT0gJ3ZhbHVlcycpcmV0dXJuIHN0ZXAoMCwgT1tpbmRleF0pO1xuICByZXR1cm4gc3RlcCgwLCBbaW5kZXgsIE9baW5kZXhdXSk7XG59LCAndmFsdWVzJyk7XG5cbi8vIGFyZ3VtZW50c0xpc3RbQEBpdGVyYXRvcl0gaXMgJUFycmF5UHJvdG9fdmFsdWVzJSAoOS40LjQuNiwgOS40LjQuNylcbkl0ZXJhdG9ycy5Bcmd1bWVudHMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbmFkZFRvVW5zY29wYWJsZXMoJ2tleXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ3ZhbHVlcycpO1xuYWRkVG9VbnNjb3BhYmxlcygnZW50cmllcycpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA0IDEyIDE3IDE5IDIwIDI1IDI4IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpeyAvKiBlbXB0eSAqLyB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNCAxMiAxNyAxOSAyMCAyNSAyOCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZG9uZSwgdmFsdWUpe1xuICByZXR1cm4ge3ZhbHVlOiB2YWx1ZSwgZG9uZTogISFkb25lfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLXN0ZXAuanNcbi8vIG1vZHVsZSBpZCA9IDY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA0IDEyIDE3IDE5IDIwIDI1IDI4IiwiZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fd2tzJyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZXh0LmpzXG4vLyBtb2R1bGUgaWQgPSA2N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgNCAxMiAxNyAxOSAyMCAyNSAyOCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9zeW1ib2xcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC5qc1xuLy8gbW9kdWxlIGlkID0gNjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDQgMTIgMTcgMTkgMjAgMjUgMjgiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zeW1ib2wnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLlN5bWJvbDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDQgMTIgMTcgMTkgMjAgMjUgMjgiLCIndXNlIHN0cmljdCc7XG4vLyBFQ01BU2NyaXB0IDYgc3ltYm9scyBzaGltXG52YXIgZ2xvYmFsICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBERVNDUklQVE9SUyAgICA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJylcbiAgLCAkZXhwb3J0ICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgcmVkZWZpbmUgICAgICAgPSByZXF1aXJlKCcuL19yZWRlZmluZScpXG4gICwgTUVUQSAgICAgICAgICAgPSByZXF1aXJlKCcuL19tZXRhJykuS0VZXG4gICwgJGZhaWxzICAgICAgICAgPSByZXF1aXJlKCcuL19mYWlscycpXG4gICwgc2hhcmVkICAgICAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIHVpZCAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fdWlkJylcbiAgLCB3a3MgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX3drcycpXG4gICwgd2tzRXh0ICAgICAgICAgPSByZXF1aXJlKCcuL193a3MtZXh0JylcbiAgLCB3a3NEZWZpbmUgICAgICA9IHJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKVxuICAsIGtleU9mICAgICAgICAgID0gcmVxdWlyZSgnLi9fa2V5b2YnKVxuICAsIGVudW1LZXlzICAgICAgID0gcmVxdWlyZSgnLi9fZW51bS1rZXlzJylcbiAgLCBpc0FycmF5ICAgICAgICA9IHJlcXVpcmUoJy4vX2lzLWFycmF5JylcbiAgLCBhbk9iamVjdCAgICAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgdG9JT2JqZWN0ICAgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCB0b1ByaW1pdGl2ZSAgICA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpXG4gICwgY3JlYXRlRGVzYyAgICAgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJylcbiAgLCBfY3JlYXRlICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKVxuICAsIGdPUE5FeHQgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4tZXh0JylcbiAgLCAkR09QRCAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJylcbiAgLCAkRFAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgJGtleXMgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpXG4gICwgZ09QRCAgICAgICAgICAgPSAkR09QRC5mXG4gICwgZFAgICAgICAgICAgICAgPSAkRFAuZlxuICAsIGdPUE4gICAgICAgICAgID0gZ09QTkV4dC5mXG4gICwgJFN5bWJvbCAgICAgICAgPSBnbG9iYWwuU3ltYm9sXG4gICwgJEpTT04gICAgICAgICAgPSBnbG9iYWwuSlNPTlxuICAsIF9zdHJpbmdpZnkgICAgID0gJEpTT04gJiYgJEpTT04uc3RyaW5naWZ5XG4gICwgUFJPVE9UWVBFICAgICAgPSAncHJvdG90eXBlJ1xuICAsIEhJRERFTiAgICAgICAgID0gd2tzKCdfaGlkZGVuJylcbiAgLCBUT19QUklNSVRJVkUgICA9IHdrcygndG9QcmltaXRpdmUnKVxuICAsIGlzRW51bSAgICAgICAgID0ge30ucHJvcGVydHlJc0VudW1lcmFibGVcbiAgLCBTeW1ib2xSZWdpc3RyeSA9IHNoYXJlZCgnc3ltYm9sLXJlZ2lzdHJ5JylcbiAgLCBBbGxTeW1ib2xzICAgICA9IHNoYXJlZCgnc3ltYm9scycpXG4gICwgT1BTeW1ib2xzICAgICAgPSBzaGFyZWQoJ29wLXN5bWJvbHMnKVxuICAsIE9iamVjdFByb3RvICAgID0gT2JqZWN0W1BST1RPVFlQRV1cbiAgLCBVU0VfTkFUSVZFICAgICA9IHR5cGVvZiAkU3ltYm9sID09ICdmdW5jdGlvbidcbiAgLCBRT2JqZWN0ICAgICAgICA9IGdsb2JhbC5RT2JqZWN0O1xuLy8gRG9uJ3QgdXNlIHNldHRlcnMgaW4gUXQgU2NyaXB0LCBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMTczXG52YXIgc2V0dGVyID0gIVFPYmplY3QgfHwgIVFPYmplY3RbUFJPVE9UWVBFXSB8fCAhUU9iamVjdFtQUk9UT1RZUEVdLmZpbmRDaGlsZDtcblxuLy8gZmFsbGJhY2sgZm9yIG9sZCBBbmRyb2lkLCBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9Njg3XG52YXIgc2V0U3ltYm9sRGVzYyA9IERFU0NSSVBUT1JTICYmICRmYWlscyhmdW5jdGlvbigpe1xuICByZXR1cm4gX2NyZWF0ZShkUCh7fSwgJ2EnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpeyByZXR1cm4gZFAodGhpcywgJ2EnLCB7dmFsdWU6IDd9KS5hOyB9XG4gIH0pKS5hICE9IDc7XG59KSA/IGZ1bmN0aW9uKGl0LCBrZXksIEQpe1xuICB2YXIgcHJvdG9EZXNjID0gZ09QRChPYmplY3RQcm90bywga2V5KTtcbiAgaWYocHJvdG9EZXNjKWRlbGV0ZSBPYmplY3RQcm90b1trZXldO1xuICBkUChpdCwga2V5LCBEKTtcbiAgaWYocHJvdG9EZXNjICYmIGl0ICE9PSBPYmplY3RQcm90bylkUChPYmplY3RQcm90bywga2V5LCBwcm90b0Rlc2MpO1xufSA6IGRQO1xuXG52YXIgd3JhcCA9IGZ1bmN0aW9uKHRhZyl7XG4gIHZhciBzeW0gPSBBbGxTeW1ib2xzW3RhZ10gPSBfY3JlYXRlKCRTeW1ib2xbUFJPVE9UWVBFXSk7XG4gIHN5bS5fayA9IHRhZztcbiAgcmV0dXJuIHN5bTtcbn07XG5cbnZhciBpc1N5bWJvbCA9IFVTRV9OQVRJVkUgJiYgdHlwZW9mICRTeW1ib2wuaXRlcmF0b3IgPT0gJ3N5bWJvbCcgPyBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCc7XG59IDogZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgaW5zdGFuY2VvZiAkU3ltYm9sO1xufTtcblxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIEQpe1xuICBpZihpdCA9PT0gT2JqZWN0UHJvdG8pJGRlZmluZVByb3BlcnR5KE9QU3ltYm9scywga2V5LCBEKTtcbiAgYW5PYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBhbk9iamVjdChEKTtcbiAgaWYoaGFzKEFsbFN5bWJvbHMsIGtleSkpe1xuICAgIGlmKCFELmVudW1lcmFibGUpe1xuICAgICAgaWYoIWhhcyhpdCwgSElEREVOKSlkUChpdCwgSElEREVOLCBjcmVhdGVEZXNjKDEsIHt9KSk7XG4gICAgICBpdFtISURERU5dW2tleV0gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZihoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKWl0W0hJRERFTl1ba2V5XSA9IGZhbHNlO1xuICAgICAgRCA9IF9jcmVhdGUoRCwge2VudW1lcmFibGU6IGNyZWF0ZURlc2MoMCwgZmFsc2UpfSk7XG4gICAgfSByZXR1cm4gc2V0U3ltYm9sRGVzYyhpdCwga2V5LCBEKTtcbiAgfSByZXR1cm4gZFAoaXQsIGtleSwgRCk7XG59O1xudmFyICRkZWZpbmVQcm9wZXJ0aWVzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhpdCwgUCl7XG4gIGFuT2JqZWN0KGl0KTtcbiAgdmFyIGtleXMgPSBlbnVtS2V5cyhQID0gdG9JT2JqZWN0KFApKVxuICAgICwgaSAgICA9IDBcbiAgICAsIGwgPSBrZXlzLmxlbmd0aFxuICAgICwga2V5O1xuICB3aGlsZShsID4gaSkkZGVmaW5lUHJvcGVydHkoaXQsIGtleSA9IGtleXNbaSsrXSwgUFtrZXldKTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciAkY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGl0LCBQKXtcbiAgcmV0dXJuIFAgPT09IHVuZGVmaW5lZCA/IF9jcmVhdGUoaXQpIDogJGRlZmluZVByb3BlcnRpZXMoX2NyZWF0ZShpdCksIFApO1xufTtcbnZhciAkcHJvcGVydHlJc0VudW1lcmFibGUgPSBmdW5jdGlvbiBwcm9wZXJ0eUlzRW51bWVyYWJsZShrZXkpe1xuICB2YXIgRSA9IGlzRW51bS5jYWxsKHRoaXMsIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSkpO1xuICBpZih0aGlzID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSlyZXR1cm4gZmFsc2U7XG4gIHJldHVybiBFIHx8ICFoYXModGhpcywga2V5KSB8fCAhaGFzKEFsbFN5bWJvbHMsIGtleSkgfHwgaGFzKHRoaXMsIEhJRERFTikgJiYgdGhpc1tISURERU5dW2tleV0gPyBFIDogdHJ1ZTtcbn07XG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KXtcbiAgaXQgID0gdG9JT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgaWYoaXQgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKXJldHVybjtcbiAgdmFyIEQgPSBnT1BEKGl0LCBrZXkpO1xuICBpZihEICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICEoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkpRC5lbnVtZXJhYmxlID0gdHJ1ZTtcbiAgcmV0dXJuIEQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eU5hbWVzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCl7XG4gIHZhciBuYW1lcyAgPSBnT1BOKHRvSU9iamVjdChpdCkpXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwgaSAgICAgID0gMFxuICAgICwga2V5O1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKXtcbiAgICBpZighaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIGtleSAhPSBISURERU4gJiYga2V5ICE9IE1FVEEpcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KXtcbiAgdmFyIElTX09QICA9IGl0ID09PSBPYmplY3RQcm90b1xuICAgICwgbmFtZXMgID0gZ09QTihJU19PUCA/IE9QU3ltYm9scyA6IHRvSU9iamVjdChpdCkpXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwgaSAgICAgID0gMFxuICAgICwga2V5O1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKXtcbiAgICBpZihoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYgKElTX09QID8gaGFzKE9iamVjdFByb3RvLCBrZXkpIDogdHJ1ZSkpcmVzdWx0LnB1c2goQWxsU3ltYm9sc1trZXldKTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcblxuLy8gMTkuNC4xLjEgU3ltYm9sKFtkZXNjcmlwdGlvbl0pXG5pZighVVNFX05BVElWRSl7XG4gICRTeW1ib2wgPSBmdW5jdGlvbiBTeW1ib2woKXtcbiAgICBpZih0aGlzIGluc3RhbmNlb2YgJFN5bWJvbCl0aHJvdyBUeXBlRXJyb3IoJ1N5bWJvbCBpcyBub3QgYSBjb25zdHJ1Y3RvciEnKTtcbiAgICB2YXIgdGFnID0gdWlkKGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTtcbiAgICB2YXIgJHNldCA9IGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgIGlmKHRoaXMgPT09IE9iamVjdFByb3RvKSRzZXQuY2FsbChPUFN5bWJvbHMsIHZhbHVlKTtcbiAgICAgIGlmKGhhcyh0aGlzLCBISURERU4pICYmIGhhcyh0aGlzW0hJRERFTl0sIHRhZykpdGhpc1tISURERU5dW3RhZ10gPSBmYWxzZTtcbiAgICAgIHNldFN5bWJvbERlc2ModGhpcywgdGFnLCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG4gICAgfTtcbiAgICBpZihERVNDUklQVE9SUyAmJiBzZXR0ZXIpc2V0U3ltYm9sRGVzYyhPYmplY3RQcm90bywgdGFnLCB7Y29uZmlndXJhYmxlOiB0cnVlLCBzZXQ6ICRzZXR9KTtcbiAgICByZXR1cm4gd3JhcCh0YWcpO1xuICB9O1xuICByZWRlZmluZSgkU3ltYm9sW1BST1RPVFlQRV0sICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCl7XG4gICAgcmV0dXJuIHRoaXMuX2s7XG4gIH0pO1xuXG4gICRHT1BELmYgPSAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuICAkRFAuZiAgID0gJGRlZmluZVByb3BlcnR5O1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmYgPSBnT1BORXh0LmYgPSAkZ2V0T3duUHJvcGVydHlOYW1lcztcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpLmYgID0gJHByb3BlcnR5SXNFbnVtZXJhYmxlO1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpLmYgPSAkZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG4gIGlmKERFU0NSSVBUT1JTICYmICFyZXF1aXJlKCcuL19saWJyYXJ5Jykpe1xuICAgIHJlZGVmaW5lKE9iamVjdFByb3RvLCAncHJvcGVydHlJc0VudW1lcmFibGUnLCAkcHJvcGVydHlJc0VudW1lcmFibGUsIHRydWUpO1xuICB9XG5cbiAgd2tzRXh0LmYgPSBmdW5jdGlvbihuYW1lKXtcbiAgICByZXR1cm4gd3JhcCh3a3MobmFtZSkpO1xuICB9XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHtTeW1ib2w6ICRTeW1ib2x9KTtcblxuZm9yKHZhciBzeW1ib2xzID0gKFxuICAvLyAxOS40LjIuMiwgMTkuNC4yLjMsIDE5LjQuMi40LCAxOS40LjIuNiwgMTkuNC4yLjgsIDE5LjQuMi45LCAxOS40LjIuMTAsIDE5LjQuMi4xMSwgMTkuNC4yLjEyLCAxOS40LjIuMTMsIDE5LjQuMi4xNFxuICAnaGFzSW5zdGFuY2UsaXNDb25jYXRTcHJlYWRhYmxlLGl0ZXJhdG9yLG1hdGNoLHJlcGxhY2Usc2VhcmNoLHNwZWNpZXMsc3BsaXQsdG9QcmltaXRpdmUsdG9TdHJpbmdUYWcsdW5zY29wYWJsZXMnXG4pLnNwbGl0KCcsJyksIGkgPSAwOyBzeW1ib2xzLmxlbmd0aCA+IGk7ICl3a3Moc3ltYm9sc1tpKytdKTtcblxuZm9yKHZhciBzeW1ib2xzID0gJGtleXMod2tzLnN0b3JlKSwgaSA9IDA7IHN5bWJvbHMubGVuZ3RoID4gaTsgKXdrc0RlZmluZShzeW1ib2xzW2krK10pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnU3ltYm9sJywge1xuICAvLyAxOS40LjIuMSBTeW1ib2wuZm9yKGtleSlcbiAgJ2Zvcic6IGZ1bmN0aW9uKGtleSl7XG4gICAgcmV0dXJuIGhhcyhTeW1ib2xSZWdpc3RyeSwga2V5ICs9ICcnKVxuICAgICAgPyBTeW1ib2xSZWdpc3RyeVtrZXldXG4gICAgICA6IFN5bWJvbFJlZ2lzdHJ5W2tleV0gPSAkU3ltYm9sKGtleSk7XG4gIH0sXG4gIC8vIDE5LjQuMi41IFN5bWJvbC5rZXlGb3Ioc3ltKVxuICBrZXlGb3I6IGZ1bmN0aW9uIGtleUZvcihrZXkpe1xuICAgIGlmKGlzU3ltYm9sKGtleSkpcmV0dXJuIGtleU9mKFN5bWJvbFJlZ2lzdHJ5LCBrZXkpO1xuICAgIHRocm93IFR5cGVFcnJvcihrZXkgKyAnIGlzIG5vdCBhIHN5bWJvbCEnKTtcbiAgfSxcbiAgdXNlU2V0dGVyOiBmdW5jdGlvbigpeyBzZXR0ZXIgPSB0cnVlOyB9LFxuICB1c2VTaW1wbGU6IGZ1bmN0aW9uKCl7IHNldHRlciA9IGZhbHNlOyB9XG59KTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ09iamVjdCcsIHtcbiAgLy8gMTkuMS4yLjIgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxuICBjcmVhdGU6ICRjcmVhdGUsXG4gIC8vIDE5LjEuMi40IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuICBkZWZpbmVQcm9wZXJ0eTogJGRlZmluZVByb3BlcnR5LFxuICAvLyAxOS4xLjIuMyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKVxuICBkZWZpbmVQcm9wZXJ0aWVzOiAkZGVmaW5lUHJvcGVydGllcyxcbiAgLy8gMTkuMS4yLjYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKVxuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsXG4gIC8vIDE5LjEuMi43IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG4gIGdldE93blByb3BlcnR5TmFtZXM6ICRnZXRPd25Qcm9wZXJ0eU5hbWVzLFxuICAvLyAxOS4xLjIuOCBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKE8pXG4gIGdldE93blByb3BlcnR5U3ltYm9sczogJGdldE93blByb3BlcnR5U3ltYm9sc1xufSk7XG5cbi8vIDI0LjMuMiBKU09OLnN0cmluZ2lmeSh2YWx1ZSBbLCByZXBsYWNlciBbLCBzcGFjZV1dKVxuJEpTT04gJiYgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoIVVTRV9OQVRJVkUgfHwgJGZhaWxzKGZ1bmN0aW9uKCl7XG4gIHZhciBTID0gJFN5bWJvbCgpO1xuICAvLyBNUyBFZGdlIGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyB7fVxuICAvLyBXZWJLaXQgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIG51bGxcbiAgLy8gVjggdGhyb3dzIG9uIGJveGVkIHN5bWJvbHNcbiAgcmV0dXJuIF9zdHJpbmdpZnkoW1NdKSAhPSAnW251bGxdJyB8fCBfc3RyaW5naWZ5KHthOiBTfSkgIT0gJ3t9JyB8fCBfc3RyaW5naWZ5KE9iamVjdChTKSkgIT0gJ3t9Jztcbn0pKSwgJ0pTT04nLCB7XG4gIHN0cmluZ2lmeTogZnVuY3Rpb24gc3RyaW5naWZ5KGl0KXtcbiAgICBpZihpdCA9PT0gdW5kZWZpbmVkIHx8IGlzU3ltYm9sKGl0KSlyZXR1cm47IC8vIElFOCByZXR1cm5zIHN0cmluZyBvbiB1bmRlZmluZWRcbiAgICB2YXIgYXJncyA9IFtpdF1cbiAgICAgICwgaSAgICA9IDFcbiAgICAgICwgcmVwbGFjZXIsICRyZXBsYWNlcjtcbiAgICB3aGlsZShhcmd1bWVudHMubGVuZ3RoID4gaSlhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgIHJlcGxhY2VyID0gYXJnc1sxXTtcbiAgICBpZih0eXBlb2YgcmVwbGFjZXIgPT0gJ2Z1bmN0aW9uJykkcmVwbGFjZXIgPSByZXBsYWNlcjtcbiAgICBpZigkcmVwbGFjZXIgfHwgIWlzQXJyYXkocmVwbGFjZXIpKXJlcGxhY2VyID0gZnVuY3Rpb24oa2V5LCB2YWx1ZSl7XG4gICAgICBpZigkcmVwbGFjZXIpdmFsdWUgPSAkcmVwbGFjZXIuY2FsbCh0aGlzLCBrZXksIHZhbHVlKTtcbiAgICAgIGlmKCFpc1N5bWJvbCh2YWx1ZSkpcmV0dXJuIHZhbHVlO1xuICAgIH07XG4gICAgYXJnc1sxXSA9IHJlcGxhY2VyO1xuICAgIHJldHVybiBfc3RyaW5naWZ5LmFwcGx5KCRKU09OLCBhcmdzKTtcbiAgfVxufSk7XG5cbi8vIDE5LjQuMy40IFN5bWJvbC5wcm90b3R5cGVbQEB0b1ByaW1pdGl2ZV0oaGludClcbiRTeW1ib2xbUFJPVE9UWVBFXVtUT19QUklNSVRJVkVdIHx8IHJlcXVpcmUoJy4vX2hpZGUnKSgkU3ltYm9sW1BST1RPVFlQRV0sIFRPX1BSSU1JVElWRSwgJFN5bWJvbFtQUk9UT1RZUEVdLnZhbHVlT2YpO1xuLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoJFN5bWJvbCwgJ1N5bWJvbCcpO1xuLy8gMjAuMi4xLjkgTWF0aFtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoTWF0aCwgJ01hdGgnLCB0cnVlKTtcbi8vIDI0LjMuMyBKU09OW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhnbG9iYWwuSlNPTiwgJ0pTT04nLCB0cnVlKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN5bWJvbC5qc1xuLy8gbW9kdWxlIGlkID0gNzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDQgMTIgMTcgMTkgMjAgMjUgMjgiLCJ2YXIgTUVUQSAgICAgPSByZXF1aXJlKCcuL191aWQnKSgnbWV0YScpXG4gICwgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGhhcyAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBzZXREZXNjICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZcbiAgLCBpZCAgICAgICA9IDA7XG52YXIgaXNFeHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZSB8fCBmdW5jdGlvbigpe1xuICByZXR1cm4gdHJ1ZTtcbn07XG52YXIgRlJFRVpFID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIGlzRXh0ZW5zaWJsZShPYmplY3QucHJldmVudEV4dGVuc2lvbnMoe30pKTtcbn0pO1xudmFyIHNldE1ldGEgPSBmdW5jdGlvbihpdCl7XG4gIHNldERlc2MoaXQsIE1FVEEsIHt2YWx1ZToge1xuICAgIGk6ICdPJyArICsraWQsIC8vIG9iamVjdCBJRFxuICAgIHc6IHt9ICAgICAgICAgIC8vIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH19KTtcbn07XG52YXIgZmFzdEtleSA9IGZ1bmN0aW9uKGl0LCBjcmVhdGUpe1xuICAvLyByZXR1cm4gcHJpbWl0aXZlIHdpdGggcHJlZml4XG4gIGlmKCFpc09iamVjdChpdCkpcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJyA/IGl0IDogKHR5cGVvZiBpdCA9PSAnc3RyaW5nJyA/ICdTJyA6ICdQJykgKyBpdDtcbiAgaWYoIWhhcyhpdCwgTUVUQSkpe1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYoIWlzRXh0ZW5zaWJsZShpdCkpcmV0dXJuICdGJztcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmKCFjcmVhdGUpcmV0dXJuICdFJztcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gb2JqZWN0IElEXG4gIH0gcmV0dXJuIGl0W01FVEFdLmk7XG59O1xudmFyIGdldFdlYWsgPSBmdW5jdGlvbihpdCwgY3JlYXRlKXtcbiAgaWYoIWhhcyhpdCwgTUVUQSkpe1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYoIWlzRXh0ZW5zaWJsZShpdCkpcmV0dXJuIHRydWU7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZighY3JlYXRlKXJldHVybiBmYWxzZTtcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gaGFzaCB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IHJldHVybiBpdFtNRVRBXS53O1xufTtcbi8vIGFkZCBtZXRhZGF0YSBvbiBmcmVlemUtZmFtaWx5IG1ldGhvZHMgY2FsbGluZ1xudmFyIG9uRnJlZXplID0gZnVuY3Rpb24oaXQpe1xuICBpZihGUkVFWkUgJiYgbWV0YS5ORUVEICYmIGlzRXh0ZW5zaWJsZShpdCkgJiYgIWhhcyhpdCwgTUVUQSkpc2V0TWV0YShpdCk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgbWV0YSA9IG1vZHVsZS5leHBvcnRzID0ge1xuICBLRVk6ICAgICAgTUVUQSxcbiAgTkVFRDogICAgIGZhbHNlLFxuICBmYXN0S2V5OiAgZmFzdEtleSxcbiAgZ2V0V2VhazogIGdldFdlYWssXG4gIG9uRnJlZXplOiBvbkZyZWV6ZVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX21ldGEuanNcbi8vIG1vZHVsZSBpZCA9IDcxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCA0IDEyIDE3IDE5IDIwIDI1IDI4IiwidmFyIGdsb2JhbCAgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjb3JlICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIExJQlJBUlkgICAgICAgID0gcmVxdWlyZSgnLi9fbGlicmFyeScpXG4gICwgd2tzRXh0ICAgICAgICAgPSByZXF1aXJlKCcuL193a3MtZXh0JylcbiAgLCBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG5hbWUpe1xuICB2YXIgJFN5bWJvbCA9IGNvcmUuU3ltYm9sIHx8IChjb3JlLlN5bWJvbCA9IExJQlJBUlkgPyB7fSA6IGdsb2JhbC5TeW1ib2wgfHwge30pO1xuICBpZihuYW1lLmNoYXJBdCgwKSAhPSAnXycgJiYgIShuYW1lIGluICRTeW1ib2wpKWRlZmluZVByb3BlcnR5KCRTeW1ib2wsIG5hbWUsIHt2YWx1ZTogd2tzRXh0LmYobmFtZSl9KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSA3MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNCAxMiAxNyAxOSAyMCAyNSAyOCIsInZhciBnZXRLZXlzICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpXG4gICwgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmplY3QsIGVsKXtcbiAgdmFyIE8gICAgICA9IHRvSU9iamVjdChvYmplY3QpXG4gICAgLCBrZXlzICAgPSBnZXRLZXlzKE8pXG4gICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICwgaW5kZXggID0gMFxuICAgICwga2V5O1xuICB3aGlsZShsZW5ndGggPiBpbmRleClpZihPW2tleSA9IGtleXNbaW5kZXgrK11dID09PSBlbClyZXR1cm4ga2V5O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2tleW9mLmpzXG4vLyBtb2R1bGUgaWQgPSA3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgNCAxMiAxNyAxOSAyMCAyNSAyOCIsIi8vIGFsbCBlbnVtZXJhYmxlIG9iamVjdCBrZXlzLCBpbmNsdWRlcyBzeW1ib2xzXG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJylcbiAgLCBnT1BTICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKVxuICAsIHBJRSAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIHJlc3VsdCAgICAgPSBnZXRLZXlzKGl0KVxuICAgICwgZ2V0U3ltYm9scyA9IGdPUFMuZjtcbiAgaWYoZ2V0U3ltYm9scyl7XG4gICAgdmFyIHN5bWJvbHMgPSBnZXRTeW1ib2xzKGl0KVxuICAgICAgLCBpc0VudW0gID0gcElFLmZcbiAgICAgICwgaSAgICAgICA9IDBcbiAgICAgICwga2V5O1xuICAgIHdoaWxlKHN5bWJvbHMubGVuZ3RoID4gaSlpZihpc0VudW0uY2FsbChpdCwga2V5ID0gc3ltYm9sc1tpKytdKSlyZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA3NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNCAxMiAxNyAxOSAyMCAyNSAyOCIsImV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wcy5qc1xuLy8gbW9kdWxlIGlkID0gNzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDQgNyA4IDEwIDEyIDEzIDE3IDE5IDIwIDIxIDI1IDI3IDI4IiwiZXhwb3J0cy5mID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtcGllLmpzXG4vLyBtb2R1bGUgaWQgPSA3NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNCA3IDggMTAgMTIgMTMgMTcgMTkgMjAgMjEgMjUgMjcgMjgiLCIvLyA3LjIuMiBJc0FycmF5KGFyZ3VtZW50KVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIGlzQXJyYXkoYXJnKXtcbiAgcmV0dXJuIGNvZihhcmcpID09ICdBcnJheSc7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDc3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA0IDEyIDE3IDE5IDIwIDI1IDI4IiwiLy8gZmFsbGJhY2sgZm9yIElFMTEgYnVnZ3kgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgd2l0aCBpZnJhbWUgYW5kIHdpbmRvd1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIGdPUE4gICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZlxuICAsIHRvU3RyaW5nICA9IHt9LnRvU3RyaW5nO1xuXG52YXIgd2luZG93TmFtZXMgPSB0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdyAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc1xuICA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHdpbmRvdykgOiBbXTtcblxudmFyIGdldFdpbmRvd05hbWVzID0gZnVuY3Rpb24oaXQpe1xuICB0cnkge1xuICAgIHJldHVybiBnT1BOKGl0KTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gd2luZG93TmFtZXMuc2xpY2UoKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMuZiA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpe1xuICByZXR1cm4gd2luZG93TmFtZXMgJiYgdG9TdHJpbmcuY2FsbChpdCkgPT0gJ1tvYmplY3QgV2luZG93XScgPyBnZXRXaW5kb3dOYW1lcyhpdCkgOiBnT1BOKHRvSU9iamVjdChpdCkpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4tZXh0LmpzXG4vLyBtb2R1bGUgaWQgPSA3OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNCAxMiAxNyAxOSAyMCAyNSAyOCIsIi8vIDE5LjEuMi43IC8gMTUuMi4zLjQgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbnZhciAka2V5cyAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKVxuICAsIGhpZGRlbktleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJykuY29uY2F0KCdsZW5ndGgnLCAncHJvdG90eXBlJyk7XG5cbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoTyl7XG4gIHJldHVybiAka2V5cyhPLCBoaWRkZW5LZXlzKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi5qc1xuLy8gbW9kdWxlIGlkID0gNzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDQgMTIgMTcgMTkgMjAgMjUgMjgiLCJ2YXIgcElFICAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJylcbiAgLCBjcmVhdGVEZXNjICAgICA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKVxuICAsIHRvSU9iamVjdCAgICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgdG9QcmltaXRpdmUgICAgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJylcbiAgLCBnT1BEICAgICAgICAgICA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBnT1BEIDogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApe1xuICBPID0gdG9JT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGlmKElFOF9ET01fREVGSU5FKXRyeSB7XG4gICAgcmV0dXJuIGdPUEQoTywgUCk7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgaWYoaGFzKE8sIFApKXJldHVybiBjcmVhdGVEZXNjKCFwSUUuZi5jYWxsKE8sIFApLCBPW1BdKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wZC5qc1xuLy8gbW9kdWxlIGlkID0gODBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDQgMTIgMTcgMTkgMjAgMjUgMjgiLCJyZXF1aXJlKCcuL193a3MtZGVmaW5lJykoJ2FzeW5jSXRlcmF0b3InKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gODJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDQgMTIgMTcgMTkgMjAgMjUgMjgiLCJyZXF1aXJlKCcuL193a3MtZGVmaW5lJykoJ29ic2VydmFibGUnKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSA4M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgNCAxMiAxNyAxOSAyMCAyNSAyOCIsInJlcXVpcmUoJy4vc3JjL3d4Yy1idXR0b24ud2UnKTtcbnJlcXVpcmUoJy4vc3JjL3d4Yy1obi53ZScpO1xucmVxdWlyZSgnLi9zcmMvd3hjLWxpc3QtaXRlbS53ZScpO1xucmVxdWlyZSgnLi9zcmMvd3hjLXBhbmVsLndlJyk7XG5yZXF1aXJlKCcuL3NyYy93eGMtdGlwLndlJyk7XG5yZXF1aXJlKCcuL3NyYy93eGMtY291bnRkb3duLndlJyk7XG5yZXF1aXJlKCcuL3NyYy93eGMtbWFycXVlZS53ZScpO1xucmVxdWlyZSgnLi9zcmMvd3hjLW5hdmJhci53ZScpO1xucmVxdWlyZSgnLi9zcmMvd3hjLW5hdnBhZ2Uud2UnKTtcbnJlcXVpcmUoJy4vc3JjL3d4Yy10YWJiYXIud2UnKTtcbnJlcXVpcmUoJy4vc3JjL3d4Yy10YWJpdGVtLndlJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1jb21wb25lbnRzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA4NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNyA4IDEwIDEyIDEzIDE3IDE5IDIwIDIxIDI1IDI3IDI4IiwidmFyIF9fd2VleF90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi93eGMtYnV0dG9uLndlXCIpXG52YXIgX193ZWV4X3N0eWxlX18gPSByZXF1aXJlKFwiISEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL3d4Yy1idXR0b24ud2VcIilcbnZhciBfX3dlZXhfc2NyaXB0X18gPSByZXF1aXJlKFwiISEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9zY3JpcHQuanMhYmFiZWwtbG9hZGVyP3ByZXNldHNbXT1DOlxcXFx2YmFvbGktd2VleFxcXFx2YmFvbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXByZXNldC1lczIwMTUmcHJlc2V0cz1DOlxcXFx2YmFvbGktd2VleFxcXFx2YmFvbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXByZXNldC1lczIwMTUmcGx1Z2luc1tdPUM6XFxcXHZiYW9saS13ZWV4XFxcXHZiYW9saVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJnBsdWdpbnM9QzpcXFxcdmJhb2xpLXdlZXhcXFxcdmJhb2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmY29tbWVudHM9ZmFsc2UhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c2NyaXB0cyEuL3d4Yy1idXR0b24ud2VcIilcblxuX193ZWV4X2RlZmluZV9fKCdAd2VleC1jb21wb25lbnQvd3hjLWJ1dHRvbicsIFtdLCBmdW5jdGlvbihfX3dlZXhfcmVxdWlyZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfbW9kdWxlX18pIHtcblxuICAgIF9fd2VleF9zY3JpcHRfXyhfX3dlZXhfbW9kdWxlX18sIF9fd2VleF9leHBvcnRzX18sIF9fd2VleF9yZXF1aXJlX18pXG4gICAgaWYgKF9fd2VleF9leHBvcnRzX18uX19lc01vZHVsZSAmJiBfX3dlZXhfZXhwb3J0c19fLmRlZmF1bHQpIHtcbiAgICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzID0gX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0XG4gICAgfVxuXG4gICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMudGVtcGxhdGUgPSBfX3dlZXhfdGVtcGxhdGVfX1xuXG4gICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMuc3R5bGUgPSBfX3dlZXhfc3R5bGVfX1xuXG59KVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtY29tcG9uZW50cy9zcmMvd3hjLWJ1dHRvbi53ZVxuLy8gbW9kdWxlIGlkID0gODVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDcgOCAxMCAxMiAxMyAxNyAxOSAyMCAyMSAyNSAyNyAyOCIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJkaXZcIixcbiAgXCJjbGFzc0xpc3RcIjogZnVuY3Rpb24gKCkge3JldHVybiBbJ2J0bicsICdidG4tJyArICh0aGlzLnR5cGUpLCAnYnRuLXN6LScgKyAodGhpcy5zaXplKV19LFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIFsnYnRuLXR4dCcsICdidG4tdHh0LScgKyAodGhpcy50eXBlKSwgJ2J0bi10eHQtc3otJyArICh0aGlzLnNpemUpXX0sXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy52YWx1ZX1cbiAgICAgIH1cbiAgICB9XG4gIF1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+L3dlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuL34vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtYnV0dG9uLndlXG4vLyBtb2R1bGUgaWQgPSA4NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNyA4IDEwIDEyIDEzIDE3IDE5IDIwIDIxIDI1IDI3IDI4IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiYnRuXCI6IHtcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiAwLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImJvcmRlcldpZHRoXCI6IDEsXG4gICAgXCJib3JkZXJTdHlsZVwiOiBcInNvbGlkXCIsXG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiMzMzMzMzNcIlxuICB9LFxuICBcImJ0bi1kZWZhdWx0XCI6IHtcbiAgICBcImNvbG9yXCI6IFwicmdiKDUxLDUxLDUxKVwiXG4gIH0sXG4gIFwiYnRuLXByaW1hcnlcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwicmdiKDQwLDk2LDE0NClcIixcbiAgICBcImJvcmRlckNvbG9yXCI6IFwicmdiKDQwLDk2LDE0NClcIlxuICB9LFxuICBcImJ0bi1zdWNjZXNzXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcInJnYig5MiwxODQsOTIpXCIsXG4gICAgXCJib3JkZXJDb2xvclwiOiBcInJnYig3NiwxNzQsNzYpXCJcbiAgfSxcbiAgXCJidG4taW5mb1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCJyZ2IoOTEsMTkyLDIyMilcIixcbiAgICBcImJvcmRlckNvbG9yXCI6IFwicmdiKDcwLDE4NCwyMTgpXCJcbiAgfSxcbiAgXCJidG4td2FybmluZ1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCJyZ2IoMjQwLDE3Myw3OClcIixcbiAgICBcImJvcmRlckNvbG9yXCI6IFwicmdiKDIzOCwxNjIsNTQpXCJcbiAgfSxcbiAgXCJidG4tZGFuZ2VyXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcInJnYigyMTcsODMsNzkpXCIsXG4gICAgXCJib3JkZXJDb2xvclwiOiBcInJnYigyMTIsNjMsNTgpXCJcbiAgfSxcbiAgXCJidG4tbGlua1wiOiB7XG4gICAgXCJib3JkZXJDb2xvclwiOiBcInJnYmEoMCwwLDAsMClcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiAwXG4gIH0sXG4gIFwiYnRuLXR4dC1kZWZhdWx0XCI6IHtcbiAgICBcImNvbG9yXCI6IFwicmdiKDUxLDUxLDUxKVwiXG4gIH0sXG4gIFwiYnRuLXR4dC1wcmltYXJ5XCI6IHtcbiAgICBcImNvbG9yXCI6IFwicmdiKDI1NSwyNTUsMjU1KVwiXG4gIH0sXG4gIFwiYnRuLXR4dC1zdWNjZXNzXCI6IHtcbiAgICBcImNvbG9yXCI6IFwicmdiKDI1NSwyNTUsMjU1KVwiXG4gIH0sXG4gIFwiYnRuLXR4dC1pbmZvXCI6IHtcbiAgICBcImNvbG9yXCI6IFwicmdiKDI1NSwyNTUsMjU1KVwiXG4gIH0sXG4gIFwiYnRuLXR4dC13YXJuaW5nXCI6IHtcbiAgICBcImNvbG9yXCI6IFwicmdiKDI1NSwyNTUsMjU1KVwiXG4gIH0sXG4gIFwiYnRuLXR4dC1kYW5nZXJcIjoge1xuICAgIFwiY29sb3JcIjogXCJyZ2IoMjU1LDI1NSwyNTUpXCJcbiAgfSxcbiAgXCJidG4tdHh0LWxpbmtcIjoge1xuICAgIFwiY29sb3JcIjogXCJyZ2IoNTEsMTIyLDE4MylcIlxuICB9LFxuICBcImJ0bi1zei1sYXJnZVwiOiB7XG4gICAgXCJ3aWR0aFwiOiAzMDAsXG4gICAgXCJoZWlnaHRcIjogMTAwLFxuICAgIFwicGFkZGluZ1RvcFwiOiAyNSxcbiAgICBcInBhZGRpbmdCb3R0b21cIjogMjUsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiA0MCxcbiAgICBcInBhZGRpbmdSaWdodFwiOiA0MCxcbiAgICBcImJvcmRlclJhZGl1c1wiOiAxNVxuICB9LFxuICBcImJ0bi1zei1taWRkbGVcIjoge1xuICAgIFwid2lkdGhcIjogMjQwLFxuICAgIFwiaGVpZ2h0XCI6IDgwLFxuICAgIFwicGFkZGluZ1RvcFwiOiAxNSxcbiAgICBcInBhZGRpbmdCb3R0b21cIjogMTUsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiAzMCxcbiAgICBcInBhZGRpbmdSaWdodFwiOiAzMCxcbiAgICBcImJvcmRlclJhZGl1c1wiOiAxMFxuICB9LFxuICBcImJ0bi1zei1zbWFsbFwiOiB7XG4gICAgXCJ3aWR0aFwiOiAxNzAsXG4gICAgXCJoZWlnaHRcIjogNjAsXG4gICAgXCJwYWRkaW5nVG9wXCI6IDEyLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiAxMixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IDI1LFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IDI1LFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IDdcbiAgfSxcbiAgXCJidG4tdHh0LXN6LWxhcmdlXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IDQ1XG4gIH0sXG4gIFwiYnRuLXR4dC1zei1taWRkbGVcIjoge1xuICAgIFwiZm9udFNpemVcIjogMzVcbiAgfSxcbiAgXCJidG4tdHh0LXN6LXNtYWxsXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IDMwXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL34vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtYnV0dG9uLndlXG4vLyBtb2R1bGUgaWQgPSA4N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgNyA4IDEwIDEyIDEzIDE3IDE5IDIwIDIxIDI1IDI3IDI4IiwiPCEtLSBJbnNwaXJlZCBieSBib290c3RyYXAgaHR0cDovL2dldGJvb3RzdHJhcC5jb20vIC0tPlxuPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiYnRuIGJ0bi17e3R5cGV9fSBidG4tc3ote3tzaXplfX1cIj5cbiAgICA8dGV4dCBjbGFzcz1cImJ0bi10eHQgYnRuLXR4dC17e3R5cGV9fSBidG4tdHh0LXN6LXt7c2l6ZX19XCI+e3t2YWx1ZX19PC90ZXh0PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gIG1vZHVsZS5leHBvcnRzID0ge1xuICAgIGRhdGE6IHtcbiAgICAgIHR5cGU6ICdkZWZhdWx0JyxcbiAgICAgIHNpemU6ICdsYXJnZScsXG4gICAgICB2YWx1ZTogJydcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICB9XG4gIH1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4gIC5idG4ge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBib3JkZXItd2lkdGg6IDFweDtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjogIzMzMztcblxuICAgIC8qd2hpdGUtc3BhY2U6IG5vd3JhcDsqL1xuICAgIC8qdmVydGljYWwtYWxpZ246IG1pZGRsZTsqL1xuICAgIC8qdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247Ki9cbiAgICAvKmN1cnNvcjogcG9pbnRlcjsqL1xuICAgIC8qLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsqL1xuICAgIC8qYmFja2dyb3VuZC1pbWFnZTogbm9uZTsqL1xuICAgIC8qYm9yZGVyLWltYWdlLXNvdXJjZTogaW5pdGlhbDsqL1xuICAgIC8qYm9yZGVyLWltYWdlLXNsaWNlOiBpbml0aWFsOyovXG4gICAgLypib3JkZXItaW1hZ2Utd2lkdGg6IGluaXRpYWw7Ki9cbiAgICAvKmJvcmRlci1pbWFnZS1vdXRzZXQ6IGluaXRpYWw7Ki9cbiAgICAvKmJvcmRlci1pbWFnZS1yZXBlYXQ6IGluaXRpYWw7Ki9cbiAgfVxuXG4gIC5idG4tdHh0IHtcblxuICB9XG5cbiAgLyoqVFlQRSoqL1xuXG4gIC5idG4tZGVmYXVsdCB7XG4gICAgY29sb3I6IHJnYig1MSwgNTEsIDUxKTtcbiAgfVxuXG4gIC5idG4tcHJpbWFyeSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQwLCA5NiwgMTQ0KTtcbiAgICBib3JkZXItY29sb3I6IHJnYig0MCwgOTYsIDE0NCk7XG4gIH1cblxuICAuYnRuLXN1Y2Nlc3Mge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5MiwgMTg0LCA5Mik7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoNzYsIDE3NCwgNzYpO1xuICB9XG5cbiAgLmJ0bi1pbmZvIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTEsIDE5MiwgMjIyKTtcbiAgICBib3JkZXItY29sb3I6IHJnYig3MCwgMTg0LCAyMTgpO1xuICB9XG5cbiAgLmJ0bi13YXJuaW5nIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAxNzMsIDc4KTtcbiAgICBib3JkZXItY29sb3I6IHJnYigyMzgsIDE2MiwgNTQpO1xuICB9XG5cbiAgLmJ0bi1kYW5nZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTcsIDgzLCA3OSk7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMjEyLCA2MywgNTgpO1xuICB9XG5cbiAgLmJ0bi1saW5rIHtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gIH1cblxuICAuYnRuLXR4dC1kZWZhdWx0IHtcbiAgICBjb2xvcjogcmdiKDUxLCA1MSwgNTEpO1xuICB9XG5cbiAgLmJ0bi10eHQtcHJpbWFyeSB7XG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgfVxuXG4gIC5idG4tdHh0LXN1Y2Nlc3Mge1xuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIH1cblxuICAuYnRuLXR4dC1pbmZvIHtcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICB9XG5cbiAgLmJ0bi10eHQtd2FybmluZyB7XG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgfVxuXG4gIC5idG4tdHh0LWRhbmdlciB7XG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgfVxuXG4gIC5idG4tdHh0LWxpbmsge1xuICAgIGNvbG9yOiByZ2IoNTEsIDEyMiwgMTgzKTtcbiAgICAvKmZvbnQtd2VpZ2h0OiA0MDA7Ki9cbiAgfVxuXG4gIC8qKlNJWkUqKi9cblxuICAuYnRuLXN6LWxhcmdlIHtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBwYWRkaW5nLXRvcDogMjVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gICAgcGFkZGluZy1yaWdodDogNDBweDtcbiAgICAvKmxpbmUtaGVpZ2h0OiAxLjMzMzMzOyovXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgfVxuXG4gIC5idG4tc3otbWlkZGxlIHtcbiAgICB3aWR0aDogMjQwcHg7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICAgIC8qbGluZS1oZWlnaHQ6IDEuNDI4NTc7Ki9cbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB9XG5cbiAgLmJ0bi1zei1zbWFsbCB7XG4gICAgd2lkdGg6IDE3MHB4O1xuICAgIGhlaWdodDogNjBweDtcbiAgICBwYWRkaW5nLXRvcDogMTJweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG4gICAgcGFkZGluZy1yaWdodDogMjVweDtcbiAgICAvKmxpbmUtaGVpZ2h0OiAxLjU7Ki9cbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIH1cblxuICAuYnRuLXR4dC1zei1sYXJnZSB7XG4gICAgZm9udC1zaXplOiA0NXB4O1xuICB9XG5cbiAgLmJ0bi10eHQtc3otbWlkZGxlIHtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gIH1cblxuICAuYnRuLXR4dC1zei1zbWFsbCB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICB9XG5cbiAgLypESVNBQkxFRCovXG5cbiAgLmRpc2FibGVkIHtcblxuICB9XG5cbjwvc3R5bGU+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1idXR0b24ud2U/NGQzYzYwNWYiLCJ2YXIgX193ZWV4X3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL3d4Yy1obi53ZVwiKVxudmFyIF9fd2VleF9zdHlsZV9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi93eGMtaG4ud2VcIilcbnZhciBfX3dlZXhfc2NyaXB0X18gPSByZXF1aXJlKFwiISEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9zY3JpcHQuanMhYmFiZWwtbG9hZGVyP3ByZXNldHNbXT1DOlxcXFx2YmFvbGktd2VleFxcXFx2YmFvbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXByZXNldC1lczIwMTUmcHJlc2V0cz1DOlxcXFx2YmFvbGktd2VleFxcXFx2YmFvbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXByZXNldC1lczIwMTUmcGx1Z2luc1tdPUM6XFxcXHZiYW9saS13ZWV4XFxcXHZiYW9saVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJnBsdWdpbnM9QzpcXFxcdmJhb2xpLXdlZXhcXFxcdmJhb2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmY29tbWVudHM9ZmFsc2UhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c2NyaXB0cyEuL3d4Yy1obi53ZVwiKVxuXG5fX3dlZXhfZGVmaW5lX18oJ0B3ZWV4LWNvbXBvbmVudC93eGMtaG4nLCBbXSwgZnVuY3Rpb24oX193ZWV4X3JlcXVpcmVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X21vZHVsZV9fKSB7XG5cbiAgICBfX3dlZXhfc2NyaXB0X18oX193ZWV4X21vZHVsZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfcmVxdWlyZV9fKVxuICAgIGlmIChfX3dlZXhfZXhwb3J0c19fLl9fZXNNb2R1bGUgJiYgX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0KSB7XG4gICAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cyA9IF9fd2VleF9leHBvcnRzX18uZGVmYXVsdFxuICAgIH1cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnRlbXBsYXRlID0gX193ZWV4X3RlbXBsYXRlX19cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnN0eWxlID0gX193ZWV4X3N0eWxlX19cblxufSlcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1obi53ZVxuLy8gbW9kdWxlIGlkID0gODlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDcgOCAxMCAxMiAxMyAxNyAxOSAyMCAyMSAyNSAyNyAyOCIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJkaXZcIixcbiAgXCJjbGFzc0xpc3RcIjogZnVuY3Rpb24gKCkge3JldHVybiBbJ2gnICsgKHRoaXMubGV2ZWwpXX0sXG4gIFwic3R5bGVcIjoge1xuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIFsndHh0LWgnICsgKHRoaXMubGV2ZWwpXX0sXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy52YWx1ZX1cbiAgICAgIH1cbiAgICB9XG4gIF1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+L3dlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuL34vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtaG4ud2Vcbi8vIG1vZHVsZSBpZCA9IDkwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCA3IDggMTAgMTIgMTMgMTcgMTkgMjAgMjEgMjUgMjcgMjgiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJoMVwiOiB7XG4gICAgXCJoZWlnaHRcIjogMTEwLFxuICAgIFwicGFkZGluZ1RvcFwiOiAyMCxcbiAgICBcInBhZGRpbmdCb3R0b21cIjogMjBcbiAgfSxcbiAgXCJoMlwiOiB7XG4gICAgXCJoZWlnaHRcIjogMTEwLFxuICAgIFwicGFkZGluZ1RvcFwiOiAyMCxcbiAgICBcInBhZGRpbmdCb3R0b21cIjogMjBcbiAgfSxcbiAgXCJoM1wiOiB7XG4gICAgXCJoZWlnaHRcIjogMTEwLFxuICAgIFwicGFkZGluZ1RvcFwiOiAyMCxcbiAgICBcInBhZGRpbmdCb3R0b21cIjogMjBcbiAgfSxcbiAgXCJ0eHQtaDFcIjoge1xuICAgIFwiZm9udFNpemVcIjogNzBcbiAgfSxcbiAgXCJ0eHQtaDJcIjoge1xuICAgIFwiZm9udFNpemVcIjogNTJcbiAgfSxcbiAgXCJ0eHQtaDNcIjoge1xuICAgIFwiZm9udFNpemVcIjogNDJcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vd2VleC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c3R5bGVzIS4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1obi53ZVxuLy8gbW9kdWxlIGlkID0gOTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDcgOCAxMCAxMiAxMyAxNyAxOSAyMCAyMSAyNSAyNyAyOCIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImh7e2xldmVsfX1cIiBzdHlsZT1cImp1c3RpZnktY29udGVudDogY2VudGVyO1wiPlxuICAgIDx0ZXh0IGNsYXNzPVwidHh0LWh7e2xldmVsfX1cIj57e3ZhbHVlfX08L3RleHQ+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgbW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgZGF0YToge1xuICAgICAgbGV2ZWw6IDEsXG4gICAgICB2YWx1ZTogJydcbiAgICB9LFxuICAgIG1ldGhvZHM6IHt9XG4gIH1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4gIC5oMSB7XG4gICAgaGVpZ2h0OiAxMTBweDtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgfVxuXG4gIC5oMiB7XG4gICAgaGVpZ2h0OiAxMTBweDtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgfVxuXG4gIC5oMyB7XG4gICAgaGVpZ2h0OiAxMTBweDtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgfVxuICBcblxuICAudHh0LWgxIHtcbiAgICBmb250LXNpemU6IDcwcHg7XG4gIH1cblxuICAudHh0LWgyIHtcbiAgICBmb250LXNpemU6IDUycHg7XG4gIH1cblxuICAudHh0LWgzIHtcbiAgICBmb250LXNpemU6IDQycHg7XG4gIH1cbjwvc3R5bGU+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1obi53ZT8xNjk5N2NiMyIsInZhciBfX3dlZXhfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vd3hjLWxpc3QtaXRlbS53ZVwiKVxudmFyIF9fd2VleF9zdHlsZV9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi93eGMtbGlzdC1pdGVtLndlXCIpXG52YXIgX193ZWV4X3NjcmlwdF9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvc2NyaXB0LmpzIWJhYmVsLWxvYWRlcj9wcmVzZXRzW109QzpcXFxcdmJhb2xpLXdlZXhcXFxcdmJhb2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnByZXNldHM9QzpcXFxcdmJhb2xpLXdlZXhcXFxcdmJhb2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnBsdWdpbnNbXT1DOlxcXFx2YmFvbGktd2VleFxcXFx2YmFvbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZwbHVnaW5zPUM6XFxcXHZiYW9saS13ZWV4XFxcXHZiYW9saVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJmNvbW1lbnRzPWZhbHNlIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdHMhLi93eGMtbGlzdC1pdGVtLndlXCIpXG5cbl9fd2VleF9kZWZpbmVfXygnQHdlZXgtY29tcG9uZW50L3d4Yy1saXN0LWl0ZW0nLCBbXSwgZnVuY3Rpb24oX193ZWV4X3JlcXVpcmVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X21vZHVsZV9fKSB7XG5cbiAgICBfX3dlZXhfc2NyaXB0X18oX193ZWV4X21vZHVsZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfcmVxdWlyZV9fKVxuICAgIGlmIChfX3dlZXhfZXhwb3J0c19fLl9fZXNNb2R1bGUgJiYgX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0KSB7XG4gICAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cyA9IF9fd2VleF9leHBvcnRzX18uZGVmYXVsdFxuICAgIH1cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnRlbXBsYXRlID0gX193ZWV4X3RlbXBsYXRlX19cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnN0eWxlID0gX193ZWV4X3N0eWxlX19cblxufSlcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1saXN0LWl0ZW0ud2Vcbi8vIG1vZHVsZSBpZCA9IDkzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCA3IDggMTAgMTIgMTMgMTcgMTkgMjAgMjEgMjUgMjcgMjgiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gIFwiY2xhc3NMaXN0XCI6IFtcbiAgICBcIml0ZW1cIlxuICBdLFxuICBcImV2ZW50c1wiOiB7XG4gICAgXCJ0b3VjaHN0YXJ0XCI6IFwidG91Y2hzdGFydFwiLFxuICAgIFwidG91Y2hlbmRcIjogXCJ0b3VjaGVuZFwiXG4gIH0sXG4gIFwic3R5bGVcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5iZ0NvbG9yfVxuICB9LFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJjb250ZW50XCJcbiAgICB9XG4gIF1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+L3dlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuL34vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtbGlzdC1pdGVtLndlXG4vLyBtb2R1bGUgaWQgPSA5NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNyA4IDEwIDEyIDEzIDE3IDE5IDIwIDIxIDI1IDI3IDI4IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiaXRlbVwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IDI1LFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiAyNSxcbiAgICBcInBhZGRpbmdMZWZ0XCI6IDM1LFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IDM1LFxuICAgIFwiaGVpZ2h0XCI6IDE2MCxcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJib3JkZXJCb3R0b21XaWR0aFwiOiAxLFxuICAgIFwiYm9yZGVyQ29sb3JcIjogXCIjZGRkZGRkXCJcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vd2VleC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c3R5bGVzIS4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1saXN0LWl0ZW0ud2Vcbi8vIG1vZHVsZSBpZCA9IDk1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA3IDggMTAgMTIgMTMgMTcgMTkgMjAgMjEgMjUgMjcgMjgiLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJpdGVtXCIgb250b3VjaHN0YXJ0PVwidG91Y2hzdGFydFwiIG9udG91Y2hlbmQ9XCJ0b3VjaGVuZFwiXG4gICAgICAgICAgICAgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOnt7YmdDb2xvcn19O1wiPlxuICAgIDxjb250ZW50PjwvY29udGVudD5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBkYXRhOiB7XG4gICAgICBiZ0NvbG9yOiAnI2ZmZmZmZidcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgIHRvdWNoc3RhcnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBGSVhNRSBhbmRyb2lkIHRvdWNoXG4gICAgICAgIC8vIFRPRE8gYWRhcHRpdmUgb3Bwb3NpdGUgYmdDb2xvclxuLy8gICAgICAgIHRoaXMuYmdDb2xvciA9ICcjZTZlNmU2JztcbiAgICAgIH0sXG4gICAgICB0b3VjaGVuZDogZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIEZJWE1FIGFuZHJvaWQgdG91Y2hlbmQgbm90IHRyaWdnZXJlZFxuLy8gICAgICAgIHRoaXMuYmdDb2xvciA9ICcjZmZmZmZmJztcbiAgICAgIH1cbiAgICB9XG4gIH1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4gIC5pdGVtIHtcbiAgICBwYWRkaW5nLXRvcDogMjVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDM1cHg7XG4gICAgcGFkZGluZy1yaWdodDogMzVweDtcbiAgICBoZWlnaHQ6IDE2MHB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIC8qbWFyZ2luLWJvdHRvbTogMXB4OyBGVVRVUkUgKi9cbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XG4gICAgYm9yZGVyLWNvbG9yOiAjZGRkZGRkO1xuICB9XG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtbGlzdC1pdGVtLndlPzQ0M2NlZmJkIiwidmFyIF9fd2VleF90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi93eGMtcGFuZWwud2VcIilcbnZhciBfX3dlZXhfc3R5bGVfXyA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c3R5bGVzIS4vd3hjLXBhbmVsLndlXCIpXG52YXIgX193ZWV4X3NjcmlwdF9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvc2NyaXB0LmpzIWJhYmVsLWxvYWRlcj9wcmVzZXRzW109QzpcXFxcdmJhb2xpLXdlZXhcXFxcdmJhb2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnByZXNldHM9QzpcXFxcdmJhb2xpLXdlZXhcXFxcdmJhb2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnBsdWdpbnNbXT1DOlxcXFx2YmFvbGktd2VleFxcXFx2YmFvbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZwbHVnaW5zPUM6XFxcXHZiYW9saS13ZWV4XFxcXHZiYW9saVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJmNvbW1lbnRzPWZhbHNlIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdHMhLi93eGMtcGFuZWwud2VcIilcblxuX193ZWV4X2RlZmluZV9fKCdAd2VleC1jb21wb25lbnQvd3hjLXBhbmVsJywgW10sIGZ1bmN0aW9uKF9fd2VleF9yZXF1aXJlX18sIF9fd2VleF9leHBvcnRzX18sIF9fd2VleF9tb2R1bGVfXykge1xuXG4gICAgX193ZWV4X3NjcmlwdF9fKF9fd2VleF9tb2R1bGVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X3JlcXVpcmVfXylcbiAgICBpZiAoX193ZWV4X2V4cG9ydHNfXy5fX2VzTW9kdWxlICYmIF9fd2VleF9leHBvcnRzX18uZGVmYXVsdCkge1xuICAgICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMgPSBfX3dlZXhfZXhwb3J0c19fLmRlZmF1bHRcbiAgICB9XG5cbiAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cy50ZW1wbGF0ZSA9IF9fd2VleF90ZW1wbGF0ZV9fXG5cbiAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cy5zdHlsZSA9IF9fd2VleF9zdHlsZV9fXG5cbn0pXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtcGFuZWwud2Vcbi8vIG1vZHVsZSBpZCA9IDk3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA3IDggMTAgMTIgMTMgMTcgMTkgMjAgMjEgMjUgMjcgMjgiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gIFwiY2xhc3NMaXN0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gWydwYW5lbCcsICdwYW5lbC0nICsgKHRoaXMudHlwZSldfSxcbiAgXCJzdHlsZVwiOiB7XG4gICAgXCJib3JkZXJXaWR0aFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuYm9yZGVyfVxuICB9LFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIFsncGFuZWwtaGVhZGVyJywgJ3BhbmVsLWhlYWRlci0nICsgKHRoaXMudHlwZSldfSxcbiAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICBcInBhZGRpbmdUb3BcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnBhZGRpbmdIZWFkfSxcbiAgICAgICAgXCJwYWRkaW5nQm90dG9tXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5wYWRkaW5nSGVhZH0sXG4gICAgICAgIFwicGFkZGluZ0xlZnRcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnBhZGRpbmdIZWFkKjEuNX0sXG4gICAgICAgIFwicGFkZGluZ1JpZ2h0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5wYWRkaW5nSGVhZCoxLjV9XG4gICAgICB9LFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudGl0bGV9XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiY2xhc3NMaXN0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gWydwYW5lbC1ib2R5JywgJ3BhbmVsLWJvZHktJyArICh0aGlzLnR5cGUpXX0sXG4gICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgXCJwYWRkaW5nVG9wXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5wYWRkaW5nQm9keX0sXG4gICAgICAgIFwicGFkZGluZ0JvdHRvbVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMucGFkZGluZ0JvZHl9LFxuICAgICAgICBcInBhZGRpbmdMZWZ0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5wYWRkaW5nQm9keSoxLjV9LFxuICAgICAgICBcInBhZGRpbmdSaWdodFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMucGFkZGluZ0JvZHkqMS41fVxuICAgICAgfSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiY29udGVudFwiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+L3dlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuL34vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtcGFuZWwud2Vcbi8vIG1vZHVsZSBpZCA9IDk4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA3IDggMTAgMTIgMTMgMTcgMTkgMjAgMjEgMjUgMjcgMjgiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJwYW5lbFwiOiB7XG4gICAgXCJtYXJnaW5Cb3R0b21cIjogMjAsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiNkZGRkZGRcIixcbiAgICBcImJvcmRlcldpZHRoXCI6IDFcbiAgfSxcbiAgXCJwYW5lbC1wcmltYXJ5XCI6IHtcbiAgICBcImJvcmRlckNvbG9yXCI6IFwicmdiKDQwLDk2LDE0NClcIlxuICB9LFxuICBcInBhbmVsLXN1Y2Nlc3NcIjoge1xuICAgIFwiYm9yZGVyQ29sb3JcIjogXCJyZ2IoNzYsMTc0LDc2KVwiXG4gIH0sXG4gIFwicGFuZWwtaW5mb1wiOiB7XG4gICAgXCJib3JkZXJDb2xvclwiOiBcInJnYig3MCwxODQsMjE4KVwiXG4gIH0sXG4gIFwicGFuZWwtd2FybmluZ1wiOiB7XG4gICAgXCJib3JkZXJDb2xvclwiOiBcInJnYigyMzgsMTYyLDU0KVwiXG4gIH0sXG4gIFwicGFuZWwtZGFuZ2VyXCI6IHtcbiAgICBcImJvcmRlckNvbG9yXCI6IFwicmdiKDIxMiw2Myw1OClcIlxuICB9LFxuICBcInBhbmVsLWhlYWRlclwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZjVmNWY1XCIsXG4gICAgXCJmb250U2l6ZVwiOiA0MCxcbiAgICBcImNvbG9yXCI6IFwiIzMzMzMzM1wiXG4gIH0sXG4gIFwicGFuZWwtaGVhZGVyLXByaW1hcnlcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwicmdiKDQwLDk2LDE0NClcIixcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gIH0sXG4gIFwicGFuZWwtaGVhZGVyLXN1Y2Nlc3NcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwicmdiKDkyLDE4NCw5MilcIixcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gIH0sXG4gIFwicGFuZWwtaGVhZGVyLWluZm9cIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwicmdiKDkxLDE5MiwyMjIpXCIsXG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIlxuICB9LFxuICBcInBhbmVsLWhlYWRlci13YXJuaW5nXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcInJnYigyNDAsMTczLDc4KVwiLFxuICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCJcbiAgfSxcbiAgXCJwYW5lbC1oZWFkZXItZGFuZ2VyXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcInJnYigyMTcsODMsNzkpXCIsXG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIlxuICB9LFxuICBcInBhbmVsLWJvZHlcIjoge31cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL34vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtcGFuZWwud2Vcbi8vIG1vZHVsZSBpZCA9IDk5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA3IDggMTAgMTIgMTMgMTcgMTkgMjAgMjEgMjUgMjcgMjgiLCI8IS0tIEluc3BpcmVkIGJ5IGJvb3RzdHJhcCBodHRwOi8vZ2V0Ym9vdHN0cmFwLmNvbS8gLS0+XG48dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJwYW5lbCBwYW5lbC17e3R5cGV9fVwiIHN0eWxlPVwiYm9yZGVyLXdpZHRoOnt7Ym9yZGVyfX1cIj5cbiAgICA8dGV4dCBjbGFzcz1cInBhbmVsLWhlYWRlciBwYW5lbC1oZWFkZXIte3t0eXBlfX1cIlxuICAgICAgICAgIHN0eWxlPVwicGFkZGluZy10b3A6e3twYWRkaW5nSGVhZH19O3BhZGRpbmctYm90dG9tOnt7cGFkZGluZ0hlYWR9fTtwYWRkaW5nLWxlZnQ6e3twYWRkaW5nSGVhZCoxLjV9fTtwYWRkaW5nLXJpZ2h0Ont7cGFkZGluZ0hlYWQqMS41fX1cIj5cbiAgICAgIHt7dGl0bGV9fVxuICAgIDwvdGV4dD5cbiAgICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keSBwYW5lbC1ib2R5LXt7dHlwZX19XCJcbiAgICAgICAgIHN0eWxlPVwicGFkZGluZy10b3A6e3twYWRkaW5nQm9keX19O3BhZGRpbmctYm90dG9tOnt7cGFkZGluZ0JvZHl9fTtwYWRkaW5nLWxlZnQ6e3twYWRkaW5nQm9keSoxLjV9fTtwYWRkaW5nLXJpZ2h0Ont7cGFkZGluZ0JvZHkqMS41fX1cIj5cbiAgICAgIDxjb250ZW50PjwvY29udGVudD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBkYXRhOiB7XG4gICAgICB0eXBlOiAnZGVmYXVsdCcsXG4gICAgICB0aXRsZTogJycsXG4gICAgICBwYWRkaW5nQm9keTogMjAsXG4gICAgICBwYWRkaW5nSGVhZDogMjAsXG4gICAgICBkYXRhQ2xhc3M6ICcnLCAvLyBGSVhNRSB0cmFuc2ZlciBjbGFzc1xuICAgICAgYm9yZGVyOiAwXG4gICAgfSxcbiAgICByZWFkeTogZnVuY3Rpb24oKSB7XG4gICAgfVxuICB9XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICAucGFuZWwge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAvKmJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50OyovXG4gICAgLypib3JkZXItcmFkaXVzOiAxMHB4OyovXG4gICAgLyotd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsMCwwLC4wNSk7Ki9cbiAgICAvKmJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsMCwwLC4wNSk7Ki9cbiAgICBib3JkZXItY29sb3I6ICNkZGRkZGQ7XG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIH1cblxuICAucGFuZWwtZGVmYXVsdCB7XG4gIH1cblxuICAucGFuZWwtcHJpbWFyeSB7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoNDAsIDk2LCAxNDQpO1xuICB9XG5cbiAgLnBhbmVsLXN1Y2Nlc3Mge1xuICAgIGJvcmRlci1jb2xvcjogcmdiKDc2LCAxNzQsIDc2KTtcblxuICB9XG5cbiAgLnBhbmVsLWluZm8ge1xuICAgIGJvcmRlci1jb2xvcjogcmdiKDcwLCAxODQsIDIxOCk7XG5cbiAgfVxuXG4gIC5wYW5lbC13YXJuaW5nIHtcbiAgICBib3JkZXItY29sb3I6IHJnYigyMzgsIDE2MiwgNTQpO1xuXG4gIH1cblxuICAucGFuZWwtZGFuZ2VyIHtcbiAgICBib3JkZXItY29sb3I6IHJnYigyMTIsIDYzLCA1OCk7XG5cbiAgfVxuXG4gIC5wYW5lbC1oZWFkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIC8qcGFkZGluZy1sZWZ0OiAxMnB4OyovXG4gICAgLypwYWRkaW5nLXJpZ2h0OiAxMnB4OyovXG4gICAgLypwYWRkaW5nLXRvcDogMjBweDsqL1xuICAgIC8qcGFkZGluZy1ib3R0b206IDIwcHg7Ki9cbiAgICBjb2xvcjogIzMzMztcbiAgfVxuXG4gIC5wYW5lbC1oZWFkZXItZGVmYXVsdCB7XG4gIH1cblxuICAucGFuZWwtaGVhZGVyLXByaW1hcnkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MCwgOTYsIDE0NCk7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gIH1cblxuICAucGFuZWwtaGVhZGVyLXN1Y2Nlc3Mge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5MiwgMTg0LCA5Mik7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gIH1cblxuICAucGFuZWwtaGVhZGVyLWluZm8ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5MSwgMTkyLCAyMjIpO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICB9XG5cbiAgLnBhbmVsLWhlYWRlci13YXJuaW5nIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAxNzMsIDc4KTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgfVxuXG4gIC5wYW5lbC1oZWFkZXItZGFuZ2VyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE3LCA4MywgNzkpO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICB9XG5cbiAgLnBhbmVsLWJvZHkge1xuICAgIC8qcGFkZGluZy1sZWZ0OiAxMnB4OyovXG4gICAgLypwYWRkaW5nLXJpZ2h0OiAxMnB4OyovXG4gICAgLypwYWRkaW5nLXRvcDogMjBweDsqL1xuICAgIC8qcGFkZGluZy1ib3R0b206IDIwcHg7Ki9cbiAgfVxuXG4gIC5wYW5lbC1ib2R5LWRlZmF1bHQge1xuICB9XG5cbiAgLnBhbmVsLWJvZHktcHJpbWFyeSB7XG4gIH1cblxuICAucGFuZWwtYm9keS1zdWNjZXNzIHtcbiAgfVxuXG4gIC5wYW5lbC1ib2R5LWluZm8ge1xuICB9XG5cbiAgLnBhbmVsLWJvZHktd2FybmluZyB7XG4gIH1cblxuICAucGFuZWwtYm9keS1kYW5nZXIge1xuICB9XG48L3N0eWxlPlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1wYW5lbC53ZT9kNjY5ZDk0MiIsInZhciBfX3dlZXhfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vd3hjLXRpcC53ZVwiKVxudmFyIF9fd2VleF9zdHlsZV9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi93eGMtdGlwLndlXCIpXG52YXIgX193ZWV4X3NjcmlwdF9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvc2NyaXB0LmpzIWJhYmVsLWxvYWRlcj9wcmVzZXRzW109QzpcXFxcdmJhb2xpLXdlZXhcXFxcdmJhb2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnByZXNldHM9QzpcXFxcdmJhb2xpLXdlZXhcXFxcdmJhb2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnBsdWdpbnNbXT1DOlxcXFx2YmFvbGktd2VleFxcXFx2YmFvbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZwbHVnaW5zPUM6XFxcXHZiYW9saS13ZWV4XFxcXHZiYW9saVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJmNvbW1lbnRzPWZhbHNlIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdHMhLi93eGMtdGlwLndlXCIpXG5cbl9fd2VleF9kZWZpbmVfXygnQHdlZXgtY29tcG9uZW50L3d4Yy10aXAnLCBbXSwgZnVuY3Rpb24oX193ZWV4X3JlcXVpcmVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X21vZHVsZV9fKSB7XG5cbiAgICBfX3dlZXhfc2NyaXB0X18oX193ZWV4X21vZHVsZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfcmVxdWlyZV9fKVxuICAgIGlmIChfX3dlZXhfZXhwb3J0c19fLl9fZXNNb2R1bGUgJiYgX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0KSB7XG4gICAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cyA9IF9fd2VleF9leHBvcnRzX18uZGVmYXVsdFxuICAgIH1cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnRlbXBsYXRlID0gX193ZWV4X3RlbXBsYXRlX19cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnN0eWxlID0gX193ZWV4X3N0eWxlX19cblxufSlcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy10aXAud2Vcbi8vIG1vZHVsZSBpZCA9IDEwMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNyA4IDEwIDEyIDEzIDE3IDE5IDIwIDIxIDI1IDI3IDI4IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImRpdlwiLFxuICBcImNsYXNzTGlzdFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIFsndGlwJywgJ3RpcC0nICsgKHRoaXMudHlwZSldfSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogZnVuY3Rpb24gKCkge3JldHVybiBbJ3RpcC10eHQnLCAndGlwLXR4dC0nICsgKHRoaXMudHlwZSldfSxcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnZhbHVlfVxuICAgICAgfVxuICAgIH1cbiAgXVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy10aXAud2Vcbi8vIG1vZHVsZSBpZCA9IDEwMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNyA4IDEwIDEyIDEzIDE3IDE5IDIwIDIxIDI1IDI3IDI4IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidGlwXCI6IHtcbiAgICBcInBhZGRpbmdMZWZ0XCI6IDM2LFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IDM2LFxuICAgIFwicGFkZGluZ1RvcFwiOiAzNixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogMzYsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogMTBcbiAgfSxcbiAgXCJ0aXAtdHh0XCI6IHtcbiAgICBcImZvbnRTaXplXCI6IDI4XG4gIH0sXG4gIFwidGlwLXN1Y2Nlc3NcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2RmZjBkOFwiLFxuICAgIFwiYm9yZGVyQ29sb3JcIjogXCIjZDZlOWM2XCJcbiAgfSxcbiAgXCJ0aXAtdHh0LXN1Y2Nlc3NcIjoge1xuICAgIFwiY29sb3JcIjogXCIjM2M3NjNkXCJcbiAgfSxcbiAgXCJ0aXAtaW5mb1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZDllZGY3XCIsXG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiNiY2U4ZjFcIlxuICB9LFxuICBcInRpcC10eHQtaW5mb1wiOiB7XG4gICAgXCJjb2xvclwiOiBcIiMzMTcwOGZcIlxuICB9LFxuICBcInRpcC13YXJuaW5nXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmY2Y4ZTNcIixcbiAgICBcImJvcmRlckNvbG9yXCI6IFwiI2ZhZWJjY1wiXG4gIH0sXG4gIFwidGlwLXR4dC13YXJuaW5nXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzhhNmQzYlwiXG4gIH0sXG4gIFwidGlwLWRhbmdlclwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZjJkZWRlXCIsXG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiNlYmNjZDFcIlxuICB9LFxuICBcInRpcC10eHQtZGFuZ2VyXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiI2E5NDQ0MlwiXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL34vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtdGlwLndlXG4vLyBtb2R1bGUgaWQgPSAxMDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDcgOCAxMCAxMiAxMyAxNyAxOSAyMCAyMSAyNSAyNyAyOCIsIjwhLS0gSW5zcGlyZWQgYnkgYm9vdHN0cmFwIGh0dHA6Ly9nZXRib290c3RyYXAuY29tLyAtLT5cbjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cInRpcCB0aXAte3t0eXBlfX1cIj5cbiAgICA8dGV4dCBjbGFzcz1cInRpcC10eHQgdGlwLXR4dC17e3R5cGV9fVwiPnt7dmFsdWV9fTwvdGV4dD5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBkYXRhOiB7XG4gICAgICB0eXBlOiAnc3VjY2VzcycsXG4gICAgICB2YWx1ZTogJydcbiAgICB9XG4gIH1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4gIC50aXAge1xuICAgIHBhZGRpbmctbGVmdDogMzZweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzNnB4O1xuICAgIHBhZGRpbmctdG9wOiAzNnB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAzNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIH1cbiAgXG4gIC50aXAtdHh0e1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgfVxuXG4gIC50aXAtc3VjY2VzcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RmZjBkODtcbiAgICBib3JkZXItY29sb3I6ICNkNmU5YzY7XG4gIH1cblxuICAudGlwLXR4dC1zdWNjZXNzIHtcbiAgICBjb2xvcjogIzNjNzYzZDtcbiAgfVxuXG4gIC50aXAtaW5mbyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q5ZWRmNztcbiAgICBib3JkZXItY29sb3I6ICNiY2U4ZjE7XG4gIH1cblxuICAudGlwLXR4dC1pbmZvIHtcbiAgICBjb2xvcjogIzMxNzA4ZjtcbiAgfVxuXG4gIC50aXAtd2FybmluZyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZjhlMztcbiAgICBib3JkZXItY29sb3I6ICNmYWViY2M7XG4gIH1cblxuICAudGlwLXR4dC13YXJuaW5nIHtcbiAgICBjb2xvcjogIzhhNmQzYjtcbiAgfVxuXG4gIC50aXAtZGFuZ2VyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJkZWRlO1xuICAgIGJvcmRlci1jb2xvcjogI2ViY2NkMTtcbiAgfVxuXG4gIC50aXAtdHh0LWRhbmdlciB7XG4gICAgY29sb3I6ICNhOTQ0NDI7XG4gIH1cbjwvc3R5bGU+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy10aXAud2U/MjFlYjE1OTQiLCJ2YXIgX193ZWV4X3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL3d4Yy1jb3VudGRvd24ud2VcIilcbnZhciBfX3dlZXhfc3R5bGVfXyA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c3R5bGVzIS4vd3hjLWNvdW50ZG93bi53ZVwiKVxudmFyIF9fd2VleF9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL3NjcmlwdC5qcyFiYWJlbC1sb2FkZXI/cHJlc2V0c1tdPUM6XFxcXHZiYW9saS13ZWV4XFxcXHZiYW9saVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcHJlc2V0LWVzMjAxNSZwcmVzZXRzPUM6XFxcXHZiYW9saS13ZWV4XFxcXHZiYW9saVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcHJlc2V0LWVzMjAxNSZwbHVnaW5zW109QzpcXFxcdmJhb2xpLXdlZXhcXFxcdmJhb2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmcGx1Z2lucz1DOlxcXFx2YmFvbGktd2VleFxcXFx2YmFvbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZjb21tZW50cz1mYWxzZSEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zY3JpcHRzIS4vd3hjLWNvdW50ZG93bi53ZVwiKVxuXG5fX3dlZXhfZGVmaW5lX18oJ0B3ZWV4LWNvbXBvbmVudC93eGMtY291bnRkb3duJywgW10sIGZ1bmN0aW9uKF9fd2VleF9yZXF1aXJlX18sIF9fd2VleF9leHBvcnRzX18sIF9fd2VleF9tb2R1bGVfXykge1xuXG4gICAgX193ZWV4X3NjcmlwdF9fKF9fd2VleF9tb2R1bGVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X3JlcXVpcmVfXylcbiAgICBpZiAoX193ZWV4X2V4cG9ydHNfXy5fX2VzTW9kdWxlICYmIF9fd2VleF9leHBvcnRzX18uZGVmYXVsdCkge1xuICAgICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMgPSBfX3dlZXhfZXhwb3J0c19fLmRlZmF1bHRcbiAgICB9XG5cbiAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cy50ZW1wbGF0ZSA9IF9fd2VleF90ZW1wbGF0ZV9fXG5cbiAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cy5zdHlsZSA9IF9fd2VleF9zdHlsZV9fXG5cbn0pXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtY291bnRkb3duLndlXG4vLyBtb2R1bGUgaWQgPSAxMDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDcgOCAxMCAxMiAxMyAxNyAxOSAyMCAyMSAyNSAyNyAyOCIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJkaXZcIixcbiAgXCJzdHlsZVwiOiB7XG4gICAgXCJvdmVyZmxvd1wiOiBcImhpZGRlblwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiXG4gIH0sXG4gIFwiZXZlbnRzXCI6IHtcbiAgICBcImFwcGVhclwiOiBcImFwcGVhcmVkXCIsXG4gICAgXCJkaXNhcHBlYXJcIjogXCJkaXNhcHBlYXJlZFwiXG4gIH0sXG4gIFwiY2hpbGRyZW5cIjogW1xuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImNvbnRlbnRcIlxuICAgIH1cbiAgXVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1jb3VudGRvd24ud2Vcbi8vIG1vZHVsZSBpZCA9IDEwNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNyA4IDEwIDEyIDEzIDE3IDE5IDIwIDIxIDI1IDI3IDI4IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwid3JhcFwiOiB7XG4gICAgXCJvdmVyZmxvd1wiOiBcImhpZGRlblwiXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL34vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtY291bnRkb3duLndlXG4vLyBtb2R1bGUgaWQgPSAxMDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDcgOCAxMCAxMiAxMyAxNyAxOSAyMCAyMSAyNSAyNyAyOCIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IHN0eWxlPVwib3ZlcmZsb3c6IGhpZGRlbjsgZmxleC1kaXJlY3Rpb246IHJvdztcIiBvbmFwcGVhcj1cImFwcGVhcmVkXCIgb25kaXNhcHBlYXI9XCJkaXNhcHBlYXJlZFwiPlxuICAgICAgICA8Y29udGVudD48L2NvbnRlbnQ+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c3R5bGU+XG4ud3JhcCB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbjwvc3R5bGU+XG5cbjxzY3JpcHQ+XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBkYXRhOiB7XG4gICAgICAgIG5vdzogMCxcbiAgICAgICAgcmVtYWluOiAwLFxuICAgICAgICB0aW1lOiB7XG4gICAgICAgICAgICBlbGFwc2U6IDAsXG4gICAgICAgICAgICBEOiAnMCcsXG4gICAgICAgICAgICBERDogJzAnLFxuICAgICAgICAgICAgaDogJzAnLFxuICAgICAgICAgICAgaGg6ICcwMCcsXG4gICAgICAgICAgICBIOiAnMCcsXG4gICAgICAgICAgICBISDogJzAnLFxuICAgICAgICAgICAgbTogJzAnLFxuICAgICAgICAgICAgbW06ICcwMCcsXG4gICAgICAgICAgICBNOiAnMCcsXG4gICAgICAgICAgICBNTTogJzAnLFxuICAgICAgICAgICAgczogJzAnLFxuICAgICAgICAgICAgc3M6ICcwMCcsXG4gICAgICAgICAgICBTOiAnMCcsXG4gICAgICAgICAgICBTUzogJzAnXG4gICAgICAgIH0sXG4gICAgICAgIG91dG9mdmlldzogZmFsc2VcbiAgICB9LFxuICAgIHJlYWR5OiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMucmVtYWluIDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyB0aGlzLmlzV2ViID0gdGhpcy4kZ2V0Q29uZmlnKCkuZW52LnBsYXRmb3JtID09PSAnV2ViJztcbiAgICAgICAgdGhpcy5ub3cgPSBEYXRlLm5vdygpO1xuICAgICAgICB0aGlzLm5leHRUaWNrKCk7XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIG5leHRUaWNrOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm91dG9mdmlldykge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQodGhpcy5uZXh0VGljay5iaW5kKHRoaXMpLCAxMDAwKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aW1lLmVsYXBzZSA9IHBhcnNlSW50KChEYXRlLm5vdygpIC0gdGhpcy5ub3cpIC8gMTAwMCk7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jYWxjKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgndGljaycsIE9iamVjdC5hc3NpZ24oe30sIHRoaXMudGltZSkpO1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KHRoaXMubmV4dFRpY2suYmluZCh0aGlzKSwgMTAwMCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnYWxhcm0nLCBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnRpbWUpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5fYXBwLnVwZGF0ZUFjdGlvbnMoKTsgXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGZvcm1hdDogZnVuY3Rpb24oc3RyKSB7XG4gICAgICAgICAgICBpZiAoc3RyLmxlbmd0aCA+PSAyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0cjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICcwJyArIHN0cjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY2FsYzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgcmVtYWluID0gdGhpcy5yZW1haW4gLSB0aGlzLnRpbWUuZWxhcHNlO1xuICAgICAgICAgICAgaWYgKHJlbWFpbiA8IDApIHtcbiAgICAgICAgICAgICAgICByZW1haW4gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy50aW1lLkQgPSBTdHJpbmcocGFyc2VJbnQocmVtYWluIC8gODY0MDApKTtcbiAgICAgICAgICAgIHRoaXMudGltZS5ERCA9IHRoaXMuZm9ybWF0KHRoaXMudGltZS5EKTtcbiAgICAgICAgICAgIHRoaXMudGltZS5oID0gU3RyaW5nKHBhcnNlSW50KChyZW1haW4gLSBwYXJzZUludCh0aGlzLnRpbWUuRCkgKiA4NjQwMCkgLyAzNjAwKSk7XG4gICAgICAgICAgICB0aGlzLnRpbWUuaGggPSB0aGlzLmZvcm1hdCh0aGlzLnRpbWUuaCk7XG4gICAgICAgICAgICB0aGlzLnRpbWUuSCA9IFN0cmluZyhwYXJzZUludChyZW1haW4gLyAzNjAwKSk7XG4gICAgICAgICAgICB0aGlzLnRpbWUuSEggPSB0aGlzLmZvcm1hdCh0aGlzLnRpbWUuSCk7XG4gICAgICAgICAgICB0aGlzLnRpbWUubSA9IFN0cmluZyhwYXJzZUludCgocmVtYWluIC0gcGFyc2VJbnQodGhpcy50aW1lLkgpICogMzYwMCkgLyA2MCkpO1xuICAgICAgICAgICAgdGhpcy50aW1lLm1tID0gdGhpcy5mb3JtYXQodGhpcy50aW1lLm0pO1xuICAgICAgICAgICAgdGhpcy50aW1lLk0gPSBTdHJpbmcocGFyc2VJbnQocmVtYWluIC8gNjApKTtcbiAgICAgICAgICAgIHRoaXMudGltZS5NTSA9IHRoaXMuZm9ybWF0KHRoaXMudGltZS5NKTtcbiAgICAgICAgICAgIHRoaXMudGltZS5zID0gU3RyaW5nKHJlbWFpbiAtIHBhcnNlSW50KHRoaXMudGltZS5NKSAqIDYwKTtcbiAgICAgICAgICAgIHRoaXMudGltZS5zcyA9IHRoaXMuZm9ybWF0KHRoaXMudGltZS5zKTtcbiAgICAgICAgICAgIHRoaXMudGltZS5TID0gU3RyaW5nKHJlbWFpbik7XG4gICAgICAgICAgICB0aGlzLnRpbWUuU1MgPSB0aGlzLmZvcm1hdCh0aGlzLnRpbWUuUyk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZW1haW4sIHRoaXMuRCwgdGhpcy5oLCB0aGlzLmhoLCB0aGlzLkgsIHRoaXMuSEgsIHRoaXMubSwgdGhpcy5NTSwgdGhpcy5zLCB0aGlzLnNzLCB0aGlzLlMsIHRoaXMuU1MpO1xuICAgICAgICAgICAgcmV0dXJuIHJlbWFpbiA+IDA7XG4gICAgICAgIH0sXG4gICAgICAgIGFwcGVhcmVkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMub3V0b2Z2aWV3ID0gZmFsc2U7XG4gICAgICAgIH0sXG4gICAgICAgIGRpc2FwcGVhcmVkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMub3V0b2Z2aWV3ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbjwvc2NyaXB0PlxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3dlZXgtY29tcG9uZW50cy9zcmMvd3hjLWNvdW50ZG93bi53ZT80NmE2Mjg4YyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvYXNzaWduLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDcgOCAxMCAxMiAxMyAxNyAxOSAyMCAyMSAyNSAyNyAyOCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24nKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5hc3NpZ247XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDcgOCAxMCAxMiAxMyAxNyAxOSAyMCAyMSAyNSAyNyAyOCIsIi8vIDE5LjEuMy4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiwgJ09iamVjdCcsIHthc3NpZ246IHJlcXVpcmUoJy4vX29iamVjdC1hc3NpZ24nKX0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gMTExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCA3IDggMTAgMTIgMTMgMTcgMTkgMjAgMjEgMjUgMjcgMjgiLCIndXNlIHN0cmljdCc7XG4vLyAxOS4xLjIuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlLCAuLi4pXG52YXIgZ2V0S2V5cyAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpXG4gICwgZ09QUyAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpXG4gICwgcElFICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJylcbiAgLCB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgSU9iamVjdCAgPSByZXF1aXJlKCcuL19pb2JqZWN0JylcbiAgLCAkYXNzaWduICA9IE9iamVjdC5hc3NpZ247XG5cbi8vIHNob3VsZCB3b3JrIHdpdGggc3ltYm9scyBhbmQgc2hvdWxkIGhhdmUgZGV0ZXJtaW5pc3RpYyBwcm9wZXJ0eSBvcmRlciAoVjggYnVnKVxubW9kdWxlLmV4cG9ydHMgPSAhJGFzc2lnbiB8fCByZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHZhciBBID0ge31cbiAgICAsIEIgPSB7fVxuICAgICwgUyA9IFN5bWJvbCgpXG4gICAgLCBLID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0JztcbiAgQVtTXSA9IDc7XG4gIEsuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24oayl7IEJba10gPSBrOyB9KTtcbiAgcmV0dXJuICRhc3NpZ24oe30sIEEpW1NdICE9IDcgfHwgT2JqZWN0LmtleXMoJGFzc2lnbih7fSwgQikpLmpvaW4oJycpICE9IEs7XG59KSA/IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSl7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgdmFyIFQgICAgID0gdG9PYmplY3QodGFyZ2V0KVxuICAgICwgYUxlbiAgPSBhcmd1bWVudHMubGVuZ3RoXG4gICAgLCBpbmRleCA9IDFcbiAgICAsIGdldFN5bWJvbHMgPSBnT1BTLmZcbiAgICAsIGlzRW51bSAgICAgPSBwSUUuZjtcbiAgd2hpbGUoYUxlbiA+IGluZGV4KXtcbiAgICB2YXIgUyAgICAgID0gSU9iamVjdChhcmd1bWVudHNbaW5kZXgrK10pXG4gICAgICAsIGtleXMgICA9IGdldFN5bWJvbHMgPyBnZXRLZXlzKFMpLmNvbmNhdChnZXRTeW1ib2xzKFMpKSA6IGdldEtleXMoUylcbiAgICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAgICwgaiAgICAgID0gMFxuICAgICAgLCBrZXk7XG4gICAgd2hpbGUobGVuZ3RoID4gailpZihpc0VudW0uY2FsbChTLCBrZXkgPSBrZXlzW2orK10pKVRba2V5XSA9IFNba2V5XTtcbiAgfSByZXR1cm4gVDtcbn0gOiAkYXNzaWduO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gMTEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCA3IDggMTAgMTIgMTMgMTcgMTkgMjAgMjEgMjUgMjcgMjgiLCJ2YXIgX193ZWV4X3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL3d4Yy1tYXJxdWVlLndlXCIpXG52YXIgX193ZWV4X3N0eWxlX18gPSByZXF1aXJlKFwiISEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL3d4Yy1tYXJxdWVlLndlXCIpXG52YXIgX193ZWV4X3NjcmlwdF9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvc2NyaXB0LmpzIWJhYmVsLWxvYWRlcj9wcmVzZXRzW109QzpcXFxcdmJhb2xpLXdlZXhcXFxcdmJhb2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnByZXNldHM9QzpcXFxcdmJhb2xpLXdlZXhcXFxcdmJhb2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnBsdWdpbnNbXT1DOlxcXFx2YmFvbGktd2VleFxcXFx2YmFvbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZwbHVnaW5zPUM6XFxcXHZiYW9saS13ZWV4XFxcXHZiYW9saVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJmNvbW1lbnRzPWZhbHNlIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdHMhLi93eGMtbWFycXVlZS53ZVwiKVxuXG5fX3dlZXhfZGVmaW5lX18oJ0B3ZWV4LWNvbXBvbmVudC93eGMtbWFycXVlZScsIFtdLCBmdW5jdGlvbihfX3dlZXhfcmVxdWlyZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfbW9kdWxlX18pIHtcblxuICAgIF9fd2VleF9zY3JpcHRfXyhfX3dlZXhfbW9kdWxlX18sIF9fd2VleF9leHBvcnRzX18sIF9fd2VleF9yZXF1aXJlX18pXG4gICAgaWYgKF9fd2VleF9leHBvcnRzX18uX19lc01vZHVsZSAmJiBfX3dlZXhfZXhwb3J0c19fLmRlZmF1bHQpIHtcbiAgICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzID0gX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0XG4gICAgfVxuXG4gICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMudGVtcGxhdGUgPSBfX3dlZXhfdGVtcGxhdGVfX1xuXG4gICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMuc3R5bGUgPSBfX3dlZXhfc3R5bGVfX1xuXG59KVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtY29tcG9uZW50cy9zcmMvd3hjLW1hcnF1ZWUud2Vcbi8vIG1vZHVsZSBpZCA9IDExM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgNyA4IDEwIDEyIDEzIDE3IDE5IDIwIDIxIDI1IDI3IDI4IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImRpdlwiLFxuICBcImNsYXNzTGlzdFwiOiBbXG4gICAgXCJ3cmFwXCJcbiAgXSxcbiAgXCJldmVudHNcIjoge1xuICAgIFwiYXBwZWFyXCI6IFwiYXBwZWFyZWRcIixcbiAgICBcImRpc2FwcGVhclwiOiBcImRpc2FwcGVhcmVkXCJcbiAgfSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImlkXCI6IFwiYW5pbVwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcImFuaW1cIlxuICAgICAgXSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiY29udGVudFwiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+L3dlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuL34vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtbWFycXVlZS53ZVxuLy8gbW9kdWxlIGlkID0gMTE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA3IDggMTAgMTIgMTMgMTcgMTkgMjAgMjEgMjUgMjcgMjgiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ3cmFwXCI6IHtcbiAgICBcIm92ZXJmbG93XCI6IFwiaGlkZGVuXCIsXG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCJcbiAgfSxcbiAgXCJhbmltXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcInRyYW5zZm9ybVwiOiBcInRyYW5zbGF0ZVkoMCkgdHJhbnNsYXRlWigwKVwiXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL34vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtbWFycXVlZS53ZVxuLy8gbW9kdWxlIGlkID0gMTE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA3IDggMTAgMTIgMTMgMTcgMTkgMjAgMjEgMjUgMjcgMjgiLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cIndyYXBcIiBvbmFwcGVhcj1cImFwcGVhcmVkXCIgb25kaXNhcHBlYXI9XCJkaXNhcHBlYXJlZFwiPlxuICAgICAgICA8ZGl2IGlkPVwiYW5pbVwiIGNsYXNzPVwiYW5pbVwiPlxuICAgICAgICAgICAgPGNvbnRlbnQ+PC9jb250ZW50PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZT5cbi53cmFwIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmFuaW0ge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSB0cmFuc2xhdGVaKDApO1xufVxuPC9zdHlsZT5cblxuPHNjcmlwdD5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGRhdGE6IHtcbiAgICAgICAgc3RlcDogMCxcbiAgICAgICAgY291bnQ6IDAsXG4gICAgICAgIGluZGV4OiAxLFxuICAgICAgICBkdXJhdGlvbjogMCxcbiAgICAgICAgaW50ZXJ2YWw6IDAsXG4gICAgICAgIG91dG9mdmlldzogZmFsc2VcbiAgICB9LFxuICAgIHJlYWR5OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmludGVydmFsID4gMFxuICAgICAgICAgICAgICAgICYmIHRoaXMuc3RlcCA+IDBcbiAgICAgICAgICAgICAgICAmJiB0aGlzLmR1cmF0aW9uID4gMCkge1xuICAgICAgICAgICAgdGhpcy5uZXh0VGljaygpOyAgICBcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBuZXh0VGljazogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICBpZiAodGhpcy5vdXRvZnZpZXcpIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KHNlbGYubmV4dFRpY2suYmluZChzZWxmKSwgc2VsZi5pbnRlcnZhbCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuYW5pbWF0aW9uKHNlbGYubmV4dFRpY2suYmluZChzZWxmKSk7XG4gICAgICAgICAgICAgICAgfSwgc2VsZi5pbnRlcnZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGFuaW1hdGlvbjogZnVuY3Rpb24oY2IpIHtcbiAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgICAgIHZhciBvZmZzZXQgPSAtc2VsZi5zdGVwICogc2VsZi5pbmRleDtcbiAgICAgICAgICAgIHZhciAkYW5pbWF0aW9uID0gcmVxdWlyZSgnQHdlZXgtbW9kdWxlL2FuaW1hdGlvbicpO1xuICAgICAgICAgICAgJGFuaW1hdGlvbi50cmFuc2l0aW9uKHRoaXMuJGVsKCdhbmltJyksIHtcbiAgICAgICAgICAgICAgc3R5bGVzOiB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgnICsgU3RyaW5nKG9mZnNldCkgKyAncHgpIHRyYW5zbGF0ZVooMCknXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHRpbWluZ0Z1bmN0aW9uOiAnZWFzZScsXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiBzZWxmLmR1cmF0aW9uXG4gICAgICAgICAgICB9LCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmluZGV4ID0gKHNlbGYuaW5kZXggKyAxKSAlIChzZWxmLmNvdW50KTtcbiAgICAgICAgICAgICAgICBzZWxmLiRlbWl0KCdjaGFuZ2UnLCB7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4OiBzZWxmLmluZGV4LFxuICAgICAgICAgICAgICAgICAgICBjb3VudDogc2VsZi5jb3VudFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGNiICYmIGNiKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgYXBwZWFyZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5vdXRvZnZpZXcgPSBmYWxzZTtcbiAgICAgICAgfSxcbiAgICAgICAgZGlzYXBwZWFyZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5vdXRvZnZpZXcgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxufVxuPC9zY3JpcHQ+XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtbWFycXVlZS53ZT80MTJiNjI4NiIsInZhciBfX3dlZXhfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vd3hjLW5hdmJhci53ZVwiKVxudmFyIF9fd2VleF9zdHlsZV9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi93eGMtbmF2YmFyLndlXCIpXG52YXIgX193ZWV4X3NjcmlwdF9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvc2NyaXB0LmpzIWJhYmVsLWxvYWRlcj9wcmVzZXRzW109QzpcXFxcdmJhb2xpLXdlZXhcXFxcdmJhb2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnByZXNldHM9QzpcXFxcdmJhb2xpLXdlZXhcXFxcdmJhb2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnBsdWdpbnNbXT1DOlxcXFx2YmFvbGktd2VleFxcXFx2YmFvbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZwbHVnaW5zPUM6XFxcXHZiYW9saS13ZWV4XFxcXHZiYW9saVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJmNvbW1lbnRzPWZhbHNlIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdHMhLi93eGMtbmF2YmFyLndlXCIpXG5cbl9fd2VleF9kZWZpbmVfXygnQHdlZXgtY29tcG9uZW50L3d4Yy1uYXZiYXInLCBbXSwgZnVuY3Rpb24oX193ZWV4X3JlcXVpcmVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X21vZHVsZV9fKSB7XG5cbiAgICBfX3dlZXhfc2NyaXB0X18oX193ZWV4X21vZHVsZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfcmVxdWlyZV9fKVxuICAgIGlmIChfX3dlZXhfZXhwb3J0c19fLl9fZXNNb2R1bGUgJiYgX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0KSB7XG4gICAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cyA9IF9fd2VleF9leHBvcnRzX18uZGVmYXVsdFxuICAgIH1cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnRlbXBsYXRlID0gX193ZWV4X3RlbXBsYXRlX19cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnN0eWxlID0gX193ZWV4X3N0eWxlX19cblxufSlcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1uYXZiYXIud2Vcbi8vIG1vZHVsZSBpZCA9IDExN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgNyA4IDEwIDEyIDEzIDE3IDE5IDIwIDIxIDI1IDI3IDI4IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImRpdlwiLFxuICBcImNsYXNzTGlzdFwiOiBbXG4gICAgXCJjb250YWluZXJcIlxuICBdLFxuICBcInN0eWxlXCI6IHtcbiAgICBcImhlaWdodFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuaGVpZ2h0fSxcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuYmFja2dyb3VuZENvbG9yfVxuICB9LFxuICBcImF0dHJcIjoge1xuICAgIFwiZGF0YVJvbGVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmRhdGFSb2xlfVxuICB9LFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwicmlnaHQtdGV4dFwiXG4gICAgICBdLFxuICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnJpZ2h0SXRlbUNvbG9yfVxuICAgICAgfSxcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwibmF2aUl0ZW1Qb3NpdGlvblwiOiBcInJpZ2h0XCIsXG4gICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnJpZ2h0SXRlbVRpdGxlfVxuICAgICAgfSxcbiAgICAgIFwic2hvd25cIjogZnVuY3Rpb24gKCkge3JldHVybiAhdGhpcy5yaWdodEl0ZW1TcmN9LFxuICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICBcImNsaWNrXCI6IFwib25jbGlja3JpZ2h0aXRlbVwiXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJpbWFnZVwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcInJpZ2h0LWltYWdlXCJcbiAgICAgIF0sXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcIm5hdmlJdGVtUG9zaXRpb25cIjogXCJyaWdodFwiLFxuICAgICAgICBcInNyY1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMucmlnaHRJdGVtU3JjfVxuICAgICAgfSxcbiAgICAgIFwic2hvd25cIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnJpZ2h0SXRlbVNyY30sXG4gICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgIFwiY2xpY2tcIjogXCJvbmNsaWNrcmlnaHRpdGVtXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJsZWZ0LXRleHRcIlxuICAgICAgXSxcbiAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICBcImNvbG9yXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5sZWZ0SXRlbUNvbG9yfVxuICAgICAgfSxcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwibmF2aUl0ZW1Qb3NpdGlvblwiOiBcImxlZnRcIixcbiAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMubGVmdEl0ZW1UaXRsZX1cbiAgICAgIH0sXG4gICAgICBcInNob3duXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gIXRoaXMubGVmdEl0ZW1TcmN9LFxuICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICBcImNsaWNrXCI6IFwib25jbGlja2xlZnRpdGVtXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwibGVmdC1pbWFnZVwiXG4gICAgICBdLFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJuYXZpSXRlbVBvc2l0aW9uXCI6IFwibGVmdFwiLFxuICAgICAgICBcInNyY1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMubGVmdEl0ZW1TcmN9XG4gICAgICB9LFxuICAgICAgXCJzaG93blwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMubGVmdEl0ZW1TcmN9LFxuICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICBcImNsaWNrXCI6IFwib25jbGlja2xlZnRpdGVtXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJjZW50ZXItdGV4dFwiXG4gICAgICBdLFxuICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnRpdGxlQ29sb3J9XG4gICAgICB9LFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJuYXZpSXRlbVBvc2l0aW9uXCI6IFwiY2VudGVyXCIsXG4gICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnRpdGxlfVxuICAgICAgfVxuICAgIH1cbiAgXVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1uYXZiYXIud2Vcbi8vIG1vZHVsZSBpZCA9IDExOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNyA4IDEwIDEyIDEzIDE3IDE5IDIwIDIxIDI1IDI3IDI4IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiY29udGFpbmVyXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcInBvc2l0aW9uXCI6IFwiZml4ZWRcIixcbiAgICBcInRvcFwiOiAwLFxuICAgIFwibGVmdFwiOiAwLFxuICAgIFwicmlnaHRcIjogMCxcbiAgICBcIndpZHRoXCI6IDc1MFxuICB9LFxuICBcInJpZ2h0LXRleHRcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwiYm90dG9tXCI6IDI4LFxuICAgIFwicmlnaHRcIjogMzIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJyaWdodFwiLFxuICAgIFwiZm9udFNpemVcIjogMzIsXG4gICAgXCJmb250RmFtaWx5XCI6IFwiJ09wZW4gU2FucycsIHNhbnMtc2VyaWZcIlxuICB9LFxuICBcImxlZnQtdGV4dFwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgXCJib3R0b21cIjogMjgsXG4gICAgXCJsZWZ0XCI6IDMyLFxuICAgIFwidGV4dEFsaWduXCI6IFwibGVmdFwiLFxuICAgIFwiZm9udFNpemVcIjogMzIsXG4gICAgXCJmb250RmFtaWx5XCI6IFwiJ09wZW4gU2FucycsIHNhbnMtc2VyaWZcIlxuICB9LFxuICBcImNlbnRlci10ZXh0XCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcImJvdHRvbVwiOiAyNSxcbiAgICBcImxlZnRcIjogMTcyLFxuICAgIFwicmlnaHRcIjogMTcyLFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCIsXG4gICAgXCJmb250U2l6ZVwiOiAzNixcbiAgICBcImZvbnRXZWlnaHRcIjogXCJib2xkXCJcbiAgfSxcbiAgXCJsZWZ0LWltYWdlXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcImJvdHRvbVwiOiAyMCxcbiAgICBcImxlZnRcIjogMjgsXG4gICAgXCJ3aWR0aFwiOiA1MCxcbiAgICBcImhlaWdodFwiOiA1MFxuICB9LFxuICBcInJpZ2h0LWltYWdlXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcImJvdHRvbVwiOiAyMCxcbiAgICBcInJpZ2h0XCI6IDI4LFxuICAgIFwid2lkdGhcIjogNTAsXG4gICAgXCJoZWlnaHRcIjogNTBcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vd2VleC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c3R5bGVzIS4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1uYXZiYXIud2Vcbi8vIG1vZHVsZSBpZCA9IDExOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNyA4IDEwIDEyIDEzIDE3IDE5IDIwIDIxIDI1IDI3IDI4IiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIiBzdHlsZT1cImhlaWdodDp7e2hlaWdodH19OyBiYWNrZ3JvdW5kLWNvbG9yOnt7YmFja2dyb3VuZENvbG9yfX07XCIgZGF0YS1yb2xlPXt7ZGF0YVJvbGV9fT5cbiAgICAgICAgPHRleHQgY2xhc3M9XCJyaWdodC10ZXh0XCIgc3R5bGU9XCJjb2xvcjp7e3JpZ2h0SXRlbUNvbG9yfX07XCIgbmF2aS1pdGVtLXBvc2l0aW9uPVwicmlnaHRcIiBpZj17eyFyaWdodEl0ZW1TcmN9fSBvbmNsaWNrID0gXCJvbmNsaWNrcmlnaHRpdGVtXCI+e3tyaWdodEl0ZW1UaXRsZX19PC90ZXh0PlxuICAgICAgICA8aW1hZ2UgY2xhc3M9XCJyaWdodC1pbWFnZVwiIG5hdmktaXRlbS1wb3NpdGlvbj1cInJpZ2h0XCIgc3JjPXt7cmlnaHRJdGVtU3JjfX0gaWY9e3tyaWdodEl0ZW1TcmN9fSBvbmNsaWNrPVwib25jbGlja3JpZ2h0aXRlbVwiPjwvaW1hZ2U+XG4gICAgICAgIDx0ZXh0IGNsYXNzPVwibGVmdC10ZXh0XCIgc3R5bGU9XCJjb2xvcjp7e2xlZnRJdGVtQ29sb3J9fTtcIiBuYXZpLWl0ZW0tcG9zaXRpb249XCJsZWZ0XCIgaWY9e3shbGVmdEl0ZW1TcmN9fSBvbmNsaWNrPSBcIm9uY2xpY2tsZWZ0aXRlbVwiPnt7bGVmdEl0ZW1UaXRsZX19PC90ZXh0PlxuICAgICAgICA8aW1hZ2UgY2xhc3M9XCJsZWZ0LWltYWdlXCIgbmF2aS1pdGVtLXBvc2l0aW9uPVwibGVmdFwiIHNyYz17e2xlZnRJdGVtU3JjfX0gaWY9e3tsZWZ0SXRlbVNyY319IG9uY2xpY2s9XCJvbmNsaWNrbGVmdGl0ZW1cIj48L2ltYWdlPlxuICAgICAgICA8dGV4dCBjbGFzcz1cImNlbnRlci10ZXh0XCIgc3R5bGU9XCJjb2xvcjp7e3RpdGxlQ29sb3J9fTtcIiBuYXZpLWl0ZW0tcG9zaXRpb249XCJjZW50ZXJcIj57e3RpdGxlfX08L3RleHQ+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c3R5bGU+XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7IFxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7IFxuICAgICAgICB0b3A6IDA7IFxuICAgICAgICBsZWZ0OiAwOyBcbiAgICAgICAgcmlnaHQ6IDA7IFxuICAgICAgICB3aWR0aDogNzUwO1xuICAgIH1cbiAgICAucmlnaHQtdGV4dCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXG4gICAgICAgIGJvdHRvbTogMjg7IFxuICAgICAgICByaWdodDogMzI7IFxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgZm9udC1zaXplOiAzMjsgXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgICB9XG4gICAgLmxlZnQtdGV4dCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXG4gICAgICAgIGJvdHRvbTogMjg7IFxuICAgICAgICBsZWZ0IDozMjsgXG4gICAgICAgIHRleHQtYWxpZ24gOmxlZnQ7ICBcbiAgICAgICAgZm9udC1zaXplOiAzMjsgXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgICB9XG4gICAgLmNlbnRlci10ZXh0IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyBcbiAgICAgICAgYm90dG9tOiAyNTsgXG4gICAgICAgIGxlZnQ6IDE3MjsgXG4gICAgICAgIHJpZ2h0OiAxNzI7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXG4gICAgICAgIGZvbnQtc2l6ZTogMzY7IFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG4gICAgLmxlZnQtaW1hZ2Uge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxuICAgICAgICBib3R0b206IDIwOyBcbiAgICAgICAgbGVmdDogMjg7IFxuICAgICAgICB3aWR0aDogNTA7IFxuICAgICAgICBoZWlnaHQ6IDUwO1xuICAgIH1cbiAgICAucmlnaHQtaW1hZ2Uge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxuICAgICAgICBib3R0b206IDIwOyBcbiAgICAgICAgcmlnaHQ6IDI4OyBcbiAgICAgICAgd2lkdGg6IDUwOyBcbiAgICAgICAgaGVpZ2h0OiA1MDtcbiAgICB9XG48L3N0eWxlPlxuXG48c2NyaXB0PlxuICAgIG1vZHVsZS5leHBvcnRzID0ge1xuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgZGF0YVJvbGU6ICduYXZiYXInLFxuXG4gICAgICAgICAgLy/lr7zoiKrmnaHog4zmma/oibJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdibGFjaycsXG5cbiAgICAgICAgICAvL+WvvOiIquadoemrmOW6plxuICAgICAgICAgIGhlaWdodDogODgsXG5cbiAgICAgICAgICAvL+WvvOiIquadoeagh+mimCBcbiAgICAgICAgICB0aXRsZTogXCJcIixcblxuICAgICAgICAgIC8v5a+86Iiq5p2h5qCH6aKY6aKc6ImyXG4gICAgICAgICAgdGl0bGVDb2xvcjogJ2JsYWNrJyxcblxuICAgICAgICAgIC8v5Y+z5L6n5oyJ6ZKu5Zu+54mHXG4gICAgICAgICAgcmlnaHRJdGVtU3JjOiAnJyxcblxuICAgICAgICAgIC8v5Y+z5L6n5oyJ6ZKu5qCH6aKYXG4gICAgICAgICAgcmlnaHRJdGVtVGl0bGU6ICcnLFxuXG4gICAgICAgICAgLy/lj7PkvqfmjInpkq7moIfpopjpopzoibJcbiAgICAgICAgICByaWdodEl0ZW1Db2xvcjogJ2JsYWNrJyxcblxuICAgICAgICAgIC8v5bem5L6n5oyJ6ZKu5Zu+54mHXG4gICAgICAgICAgbGVmdEl0ZW1TcmM6ICcnLFxuXG4gICAgICAgICAgLy/lt6bkvqfmjInpkq7moIfpophcbiAgICAgICAgICBsZWZ0SXRlbVRpdGxlOiAnJyxcblxuICAgICAgICAgIC8v5bem5L6n5oyJ6ZKu6aKc6ImyXG4gICAgICAgICAgbGVmdEl0ZW1Db2xvcjogJ2JsYWNrJyxcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgIG9uY2xpY2tyaWdodGl0ZW06IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB0aGlzLiRkaXNwYXRjaCgnbmF2aUJhci5yaWdodEl0ZW0uY2xpY2snLCB7fSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBvbmNsaWNrbGVmdGl0ZW06IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB0aGlzLiRkaXNwYXRjaCgnbmF2aUJhci5sZWZ0SXRlbS5jbGljaycsIHt9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtbmF2YmFyLndlPzA4NmVmODNkIiwicmVxdWlyZShcIi4vd3hjLW5hdmJhci53ZVwiKVxudmFyIF9fd2VleF90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi93eGMtbmF2cGFnZS53ZVwiKVxudmFyIF9fd2VleF9zdHlsZV9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi93eGMtbmF2cGFnZS53ZVwiKVxudmFyIF9fd2VleF9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL3NjcmlwdC5qcyFiYWJlbC1sb2FkZXI/cHJlc2V0c1tdPUM6XFxcXHZiYW9saS13ZWV4XFxcXHZiYW9saVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcHJlc2V0LWVzMjAxNSZwcmVzZXRzPUM6XFxcXHZiYW9saS13ZWV4XFxcXHZiYW9saVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcHJlc2V0LWVzMjAxNSZwbHVnaW5zW109QzpcXFxcdmJhb2xpLXdlZXhcXFxcdmJhb2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmcGx1Z2lucz1DOlxcXFx2YmFvbGktd2VleFxcXFx2YmFvbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZjb21tZW50cz1mYWxzZSEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zY3JpcHRzIS4vd3hjLW5hdnBhZ2Uud2VcIilcblxuX193ZWV4X2RlZmluZV9fKCdAd2VleC1jb21wb25lbnQvd3hjLW5hdnBhZ2UnLCBbXSwgZnVuY3Rpb24oX193ZWV4X3JlcXVpcmVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X21vZHVsZV9fKSB7XG5cbiAgICBfX3dlZXhfc2NyaXB0X18oX193ZWV4X21vZHVsZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfcmVxdWlyZV9fKVxuICAgIGlmIChfX3dlZXhfZXhwb3J0c19fLl9fZXNNb2R1bGUgJiYgX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0KSB7XG4gICAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cyA9IF9fd2VleF9leHBvcnRzX18uZGVmYXVsdFxuICAgIH1cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnRlbXBsYXRlID0gX193ZWV4X3RlbXBsYXRlX19cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnN0eWxlID0gX193ZWV4X3N0eWxlX19cblxufSlcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1uYXZwYWdlLndlXG4vLyBtb2R1bGUgaWQgPSAxMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDcgOCAxMCAxMiAxMyAxNyAxOSAyMCAyMSAyNSAyNyAyOCIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJkaXZcIixcbiAgXCJjbGFzc0xpc3RcIjogW1xuICAgIFwid3JhcHBlclwiXG4gIF0sXG4gIFwiY2hpbGRyZW5cIjogW1xuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcInd4Yy1uYXZiYXJcIixcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwiZGF0YVJvbGVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmRhdGFSb2xlfSxcbiAgICAgICAgXCJoZWlnaHRcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmhlaWdodH0sXG4gICAgICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5iYWNrZ3JvdW5kQ29sb3J9LFxuICAgICAgICBcInRpdGxlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy50aXRsZX0sXG4gICAgICAgIFwidGl0bGVDb2xvclwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudGl0bGVDb2xvcn0sXG4gICAgICAgIFwibGVmdEl0ZW1TcmNcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmxlZnRJdGVtU3JjfSxcbiAgICAgICAgXCJsZWZ0SXRlbVRpdGxlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5sZWZ0SXRlbVRpdGxlfSxcbiAgICAgICAgXCJsZWZ0SXRlbUNvbG9yXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5sZWZ0SXRlbUNvbG9yfSxcbiAgICAgICAgXCJyaWdodEl0ZW1TcmNcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnJpZ2h0SXRlbVNyY30sXG4gICAgICAgIFwicmlnaHRJdGVtVGl0bGVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnJpZ2h0SXRlbVRpdGxlfSxcbiAgICAgICAgXCJyaWdodEl0ZW1Db2xvclwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMucmlnaHRJdGVtQ29sb3J9XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJ3cmFwcGVyXCJcbiAgICAgIF0sXG4gICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgXCJtYXJnaW5Ub3BcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmhlaWdodH1cbiAgICAgIH0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImNvbnRlbnRcIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICBdXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi9+L3dlZXgtY29tcG9uZW50cy9zcmMvd3hjLW5hdnBhZ2Uud2Vcbi8vIG1vZHVsZSBpZCA9IDEyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNyA4IDEwIDEyIDEzIDE3IDE5IDIwIDIxIDI1IDI3IDI4IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwid3JhcHBlclwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgXCJ0b3BcIjogMCxcbiAgICBcImxlZnRcIjogMCxcbiAgICBcInJpZ2h0XCI6IDAsXG4gICAgXCJib3R0b21cIjogMCxcbiAgICBcIndpZHRoXCI6IDc1MFxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi9+L3dlZXgtY29tcG9uZW50cy9zcmMvd3hjLW5hdnBhZ2Uud2Vcbi8vIG1vZHVsZSBpZCA9IDEyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgNyA4IDEwIDEyIDEzIDE3IDE5IDIwIDIxIDI1IDI3IDI4IiwiPHRlbXBsYXRlPlxuICBcdDxkaXYgY2xhc3M9XCJ3cmFwcGVyXCI+XG4gICAgXHQgIDx3eGMtbmF2YmFyIGRhdGEtcm9sZT17e2RhdGFSb2xlfX0gaGVpZ2h0PXt7aGVpZ2h0fX0gYmFja2dyb3VuZC1jb2xvcj17e2JhY2tncm91bmRDb2xvcn19IHRpdGxlPXt7dGl0bGV9fSB0aXRsZS1jb2xvcj17e3RpdGxlQ29sb3J9fSBsZWZ0LWl0ZW0tc3JjPXt7bGVmdEl0ZW1TcmN9fSBsZWZ0LWl0ZW0tdGl0bGU9e3tsZWZ0SXRlbVRpdGxlfX0gbGVmdC1pdGVtLWNvbG9yPXt7bGVmdEl0ZW1Db2xvcn19IHJpZ2h0LWl0ZW0tc3JjPXt7cmlnaHRJdGVtU3JjfX0gcmlnaHQtaXRlbS10aXRsZT17e3JpZ2h0SXRlbVRpdGxlfX0gcmlnaHQtaXRlbS1jb2xvcj17e3JpZ2h0SXRlbUNvbG9yfX0+PC93eGMtbmF2YmFyPlxuICAgIFx0ICA8ZGl2IGNsYXNzPVwid3JhcHBlclwiIHN0eWxlPVwibWFyZ2luLXRvcDp7e2hlaWdodH19XCI+XG4gICAgXHRcdCAgICA8Y29udGVudD48L2NvbnRlbnQ+XG4gICAgXHQgIDwvZGl2PlxuICBcdDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHN0eWxlPlxuICBcdC53cmFwcGVyIHtcbiAgXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTsgXG4gIFx0XHR0b3A6IDA7IFxuICBcdFx0bGVmdDogMDsgXG4gIFx0XHRyaWdodDogMDsgXG4gIFx0XHRib3R0b206IDA7IFxuICBcdFx0d2lkdGg6IDc1MDtcbiAgXHR9XG48L3N0eWxlPlxuXG48c2NyaXB0PlxuICAgIG1vZHVsZS5leHBvcnRzID0ge1xuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgZGF0YVJvbGU6ICduYXZiYXInLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ2JsYWNrJyxcbiAgICAgICAgICBoZWlnaHQ6IDg4LFxuICAgICAgICAgIHRpdGxlOiBcIlwiLFxuICAgICAgICAgIHRpdGxlQ29sb3I6ICdibGFjaycsXG4gICAgICAgICAgcmlnaHRJdGVtU3JjOiAnJyxcbiAgICAgICAgICByaWdodEl0ZW1UaXRsZTogJycsXG4gICAgICAgICAgcmlnaHRJdGVtQ29sb3I6ICdibGFjaycsXG4gICAgICAgICAgbGVmdEl0ZW1TcmM6ICcnLFxuICAgICAgICAgIGxlZnRJdGVtVGl0bGU6ICcnLFxuICAgICAgICAgIGxlZnRJdGVtQ29sb3I6ICdibGFjaycsXG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3dlZXgtY29tcG9uZW50cy9zcmMvd3hjLW5hdnBhZ2Uud2U/NjY3Y2RlNjYiLCJyZXF1aXJlKFwiLi93eGMtdGFiaXRlbS53ZVwiKVxudmFyIF9fd2VleF90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi93eGMtdGFiYmFyLndlXCIpXG52YXIgX193ZWV4X3N0eWxlX18gPSByZXF1aXJlKFwiISEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL3d4Yy10YWJiYXIud2VcIilcbnZhciBfX3dlZXhfc2NyaXB0X18gPSByZXF1aXJlKFwiISEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9zY3JpcHQuanMhYmFiZWwtbG9hZGVyP3ByZXNldHNbXT1DOlxcXFx2YmFvbGktd2VleFxcXFx2YmFvbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXByZXNldC1lczIwMTUmcHJlc2V0cz1DOlxcXFx2YmFvbGktd2VleFxcXFx2YmFvbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXByZXNldC1lczIwMTUmcGx1Z2luc1tdPUM6XFxcXHZiYW9saS13ZWV4XFxcXHZiYW9saVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJnBsdWdpbnM9QzpcXFxcdmJhb2xpLXdlZXhcXFxcdmJhb2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmY29tbWVudHM9ZmFsc2UhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c2NyaXB0cyEuL3d4Yy10YWJiYXIud2VcIilcblxuX193ZWV4X2RlZmluZV9fKCdAd2VleC1jb21wb25lbnQvd3hjLXRhYmJhcicsIFtdLCBmdW5jdGlvbihfX3dlZXhfcmVxdWlyZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfbW9kdWxlX18pIHtcblxuICAgIF9fd2VleF9zY3JpcHRfXyhfX3dlZXhfbW9kdWxlX18sIF9fd2VleF9leHBvcnRzX18sIF9fd2VleF9yZXF1aXJlX18pXG4gICAgaWYgKF9fd2VleF9leHBvcnRzX18uX19lc01vZHVsZSAmJiBfX3dlZXhfZXhwb3J0c19fLmRlZmF1bHQpIHtcbiAgICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzID0gX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0XG4gICAgfVxuXG4gICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMudGVtcGxhdGUgPSBfX3dlZXhfdGVtcGxhdGVfX1xuXG4gICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMuc3R5bGUgPSBfX3dlZXhfc3R5bGVfX1xuXG59KVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtY29tcG9uZW50cy9zcmMvd3hjLXRhYmJhci53ZVxuLy8gbW9kdWxlIGlkID0gMTI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA3IDggMTAgMTIgMTMgMTcgMTkgMjAgMjEgMjUgMjcgMjgiLCJ2YXIgX193ZWV4X3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL3d4Yy10YWJpdGVtLndlXCIpXG52YXIgX193ZWV4X3N0eWxlX18gPSByZXF1aXJlKFwiISEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL3d4Yy10YWJpdGVtLndlXCIpXG52YXIgX193ZWV4X3NjcmlwdF9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvc2NyaXB0LmpzIWJhYmVsLWxvYWRlcj9wcmVzZXRzW109QzpcXFxcdmJhb2xpLXdlZXhcXFxcdmJhb2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnByZXNldHM9QzpcXFxcdmJhb2xpLXdlZXhcXFxcdmJhb2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnBsdWdpbnNbXT1DOlxcXFx2YmFvbGktd2VleFxcXFx2YmFvbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZwbHVnaW5zPUM6XFxcXHZiYW9saS13ZWV4XFxcXHZiYW9saVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJmNvbW1lbnRzPWZhbHNlIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdHMhLi93eGMtdGFiaXRlbS53ZVwiKVxuXG5fX3dlZXhfZGVmaW5lX18oJ0B3ZWV4LWNvbXBvbmVudC93eGMtdGFiaXRlbScsIFtdLCBmdW5jdGlvbihfX3dlZXhfcmVxdWlyZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfbW9kdWxlX18pIHtcblxuICAgIF9fd2VleF9zY3JpcHRfXyhfX3dlZXhfbW9kdWxlX18sIF9fd2VleF9leHBvcnRzX18sIF9fd2VleF9yZXF1aXJlX18pXG4gICAgaWYgKF9fd2VleF9leHBvcnRzX18uX19lc01vZHVsZSAmJiBfX3dlZXhfZXhwb3J0c19fLmRlZmF1bHQpIHtcbiAgICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzID0gX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0XG4gICAgfVxuXG4gICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMudGVtcGxhdGUgPSBfX3dlZXhfdGVtcGxhdGVfX1xuXG4gICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMuc3R5bGUgPSBfX3dlZXhfc3R5bGVfX1xuXG59KVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtY29tcG9uZW50cy9zcmMvd3hjLXRhYml0ZW0ud2Vcbi8vIG1vZHVsZSBpZCA9IDEyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNyA4IDEwIDEyIDEzIDE3IDE5IDIwIDIxIDI1IDI3IDI4IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImRpdlwiLFxuICBcImNsYXNzTGlzdFwiOiBbXG4gICAgXCJjb250YWluZXJcIlxuICBdLFxuICBcInN0eWxlXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuYmFja2dyb3VuZENvbG9yfVxuICB9LFxuICBcImV2ZW50c1wiOiB7XG4gICAgXCJjbGlja1wiOiBcIm9uY2xpY2tpdGVtXCJcbiAgfSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJ0b3AtbGluZVwiXG4gICAgICBdLFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJzcmNcIjogXCJodHRwOi8vZ3RtczAzLmFsaWNkbi5jb20vdHBzL2kzL1RCMW1kc2lNcFhYWFhYcFhYWFhOdzRKSVhYWC02NDAtNC5wbmdcIlxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJ0YWItaWNvblwiXG4gICAgICBdLFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJzcmNcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmljb259XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwidGFiLXRleHRcIlxuICAgICAgXSxcbiAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICBcImNvbG9yXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy50aXRsZUNvbG9yfVxuICAgICAgfSxcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnRpdGxlfVxuICAgICAgfVxuICAgIH1cbiAgXVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy10YWJpdGVtLndlXG4vLyBtb2R1bGUgaWQgPSAxMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDcgOCAxMCAxMiAxMyAxNyAxOSAyMCAyMSAyNSAyNyAyOCIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcImNvbnRhaW5lclwiOiB7XG4gICAgXCJmbGV4XCI6IDEsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwiaGVpZ2h0XCI6IDg4XG4gIH0sXG4gIFwidG9wLWxpbmVcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwidG9wXCI6IDAsXG4gICAgXCJsZWZ0XCI6IDAsXG4gICAgXCJyaWdodFwiOiAwLFxuICAgIFwiaGVpZ2h0XCI6IDJcbiAgfSxcbiAgXCJ0YWItaWNvblwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogNSxcbiAgICBcIndpZHRoXCI6IDQwLFxuICAgIFwiaGVpZ2h0XCI6IDQwXG4gIH0sXG4gIFwidGFiLXRleHRcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IDUsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICBcImZvbnRTaXplXCI6IDIwXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL34vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtdGFiaXRlbS53ZVxuLy8gbW9kdWxlIGlkID0gMTI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCA3IDggMTAgMTIgMTMgMTcgMTkgMjAgMjEgMjUgMjcgMjgiLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjoge3tiYWNrZ3JvdW5kQ29sb3J9fVwiICBvbmNsaWNrPVwib25jbGlja2l0ZW1cIj5cbiAgICAgICAgPGltYWdlIGNsYXNzPVwidG9wLWxpbmVcIiBzcmMgPSBcImh0dHA6Ly9ndG1zMDMuYWxpY2RuLmNvbS90cHMvaTMvVEIxbWRzaU1wWFhYWFhwWFhYWE53NEpJWFhYLTY0MC00LnBuZ1wiPjwvaW1hZ2U+XG4gICAgICAgIDxpbWFnZSBjbGFzcz1cInRhYi1pY29uXCIgc3JjID0ge3tpY29ufX0+PC9pbWFnZT5cbiAgICAgICAgPHRleHQgY2xhc3M9XCJ0YWItdGV4dFwiIHN0eWxlPVwiY29sb3I6IHt7dGl0bGVDb2xvcn19XCI+e3t0aXRsZX19PC90ZXh0PlxuICAgIDwvZGl2PiAgXG48L3RlbXBsYXRlPlxuXG48c3R5bGU+XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICAgIGZsZXg6IDE7IFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBcbiAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyOyBcbiAgICAgICAganVzdGlmeS1jb250ZW50OmNlbnRlcjsgXG4gICAgICAgIGhlaWdodDogODg7XG4gICAgfVxuICAgIC50b3AtbGluZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXG4gICAgICAgIHRvcDogMDsgXG4gICAgICAgIGxlZnQ6IDA7IFxuICAgICAgICByaWdodDogMDsgXG4gICAgICAgIGhlaWdodDogMjtcbiAgICB9XG4gICAgLnRhYi1pY29uIHtcbiAgICAgICAgbWFyZ2luLXRvcDogNTsgXG4gICAgICAgIHdpZHRoOiA0MDsgXG4gICAgICAgIGhlaWdodDogNDBcbiAgICB9XG4gICAgLnRhYi10ZXh0IHtcbiAgICAgICAgbWFyZ2luLXRvcDogNTsgXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgIFxuICAgICAgICBmb250LXNpemU6IDIwO1xuICAgIH1cbjwvc3R5bGU+XG5cbjxzY3JpcHQ+XG4gICAgbW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBpbmRleDogMCxcbiAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgdGl0bGVDb2xvcjogJyMwMDAwMDAnLFxuICAgICAgICAgIGljb246ICcnLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmZmZmYnLFxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgb25jbGlja2l0ZW06IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB2YXIgdm0gPSB0aGlzO1xuICAgICAgICAgICAgdmFyIHBhcmFtcyA9IHtcbiAgICAgICAgICAgICAgaW5kZXg6IHZtLmluZGV4XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdm0uJGRpc3BhdGNoKCd0YWJJdGVtLm9uQ2xpY2snLCBwYXJhbXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtdGFiaXRlbS53ZT9mYmJhMTQ3YSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJkaXZcIixcbiAgXCJjbGFzc0xpc3RcIjogW1xuICAgIFwid3JhcHBlclwiXG4gIF0sXG4gIFwiY2hpbGRyZW5cIjogW1xuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImVtYmVkXCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwiY29udGVudFwiXG4gICAgICBdLFxuICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgIFwidmlzaWJpbGl0eVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudmlzaWJpbGl0eX1cbiAgICAgIH0sXG4gICAgICBcInJlcGVhdFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudGFiSXRlbXN9LFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJzcmNcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnNyY30sXG4gICAgICAgIFwidHlwZVwiOiBcIndlZXhcIlxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwidGFiYmFyXCJcbiAgICAgIF0sXG4gICAgICBcImFwcGVuZFwiOiBcInRyZWVcIixcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwid3hjLXRhYml0ZW1cIixcbiAgICAgICAgICBcInJlcGVhdFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudGFiSXRlbXN9LFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcImluZGV4XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5pbmRleH0sXG4gICAgICAgICAgICBcImljb25cIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmljb259LFxuICAgICAgICAgICAgXCJ0aXRsZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudGl0bGV9LFxuICAgICAgICAgICAgXCJ0aXRsZUNvbG9yXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy50aXRsZUNvbG9yfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy10YWJiYXIud2Vcbi8vIG1vZHVsZSBpZCA9IDEzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNyA4IDEwIDEyIDEzIDE3IDE5IDIwIDIxIDI1IDI3IDI4IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwid3JhcHBlclwiOiB7XG4gICAgXCJ3aWR0aFwiOiA3NTAsXG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgXCJ0b3BcIjogMCxcbiAgICBcImxlZnRcIjogMCxcbiAgICBcInJpZ2h0XCI6IDAsXG4gICAgXCJib3R0b21cIjogMFxuICB9LFxuICBcImNvbnRlbnRcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwidG9wXCI6IDAsXG4gICAgXCJsZWZ0XCI6IDAsXG4gICAgXCJyaWdodFwiOiAwLFxuICAgIFwiYm90dG9tXCI6IDAsXG4gICAgXCJtYXJnaW5Ub3BcIjogMCxcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiA4OFxuICB9LFxuICBcInRhYmJhclwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJwb3NpdGlvblwiOiBcImZpeGVkXCIsXG4gICAgXCJib3R0b21cIjogMCxcbiAgICBcImxlZnRcIjogMCxcbiAgICBcInJpZ2h0XCI6IDAsXG4gICAgXCJoZWlnaHRcIjogODhcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vd2VleC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c3R5bGVzIS4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy10YWJiYXIud2Vcbi8vIG1vZHVsZSBpZCA9IDEzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNyA4IDEwIDEyIDEzIDE3IDE5IDIwIDIxIDI1IDI3IDI4IiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJ3cmFwcGVyXCI+XG4gICAgICAgIDxlbWJlZCBjbGFzcz1cImNvbnRlbnRcIiBzdHlsZT1cInZpc2liaWxpdHk6e3t2aXNpYmlsaXR5fX1cIiByZXBlYXQ9e3t0YWJJdGVtc319IHNyYz17e3NyY319IHR5cGU9XCJ3ZWV4XCI+PC9lbWJlZD5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRhYmJhclwiIGFwcGVuZCA9IFwidHJlZVwiPlxuICAgICAgICAgICAgPHd4Yy10YWJpdGVtIHJlcGVhdD17e3RhYkl0ZW1zfX0gaW5kZXg9e3tpbmRleH19IGljb249e3tpY29ufX0gdGl0bGU9e3t0aXRsZX19IHRpdGxlLWNvbG9yPXt7dGl0bGVDb2xvcn19Pjwvd3hjLXRhYkl0ZW0+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHN0eWxlPlxuICAgIC53cmFwcGVyIHsgXG4gICAgICAgIHdpZHRoOiA3NTA7IFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxuICAgICAgICB0b3A6IDA7IFxuICAgICAgICBsZWZ0OiAwOyBcbiAgICAgICAgcmlnaHQ6IDA7IFxuICAgICAgICBib3R0b206IDA7XG4gICAgfVxuICAgIC5jb250ZW50IHsgXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXG4gICAgICAgIHRvcDogMDsgbGVmdDogMDsgXG4gICAgICAgIHJpZ2h0OiAwOyBcbiAgICAgICAgYm90dG9tOiAwOyBcbiAgICAgICAgbWFyZ2luLXRvcDogMDsgIFxuICAgICAgICBtYXJnaW4tYm90dG9tOiA4ODtcbiAgICB9XG4gICAgLnRhYmJhciB7IFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93OyBcbiAgICAgICAgcG9zaXRpb246IGZpeGVkOyBcbiAgICAgICAgYm90dG9tOiAwOyBcbiAgICAgICAgbGVmdDogMDsgXG4gICAgICAgIHJpZ2h0OiAwOyAgXG4gICAgICAgIGhlaWdodDogODg7XG4gICAgfVxuPC9zdHlsZT5cblxuPHNjcmlwdD5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIHRhYkl0ZW1zOiBbIF0sXG4gICAgICAgICAgc2VsZWN0ZWRJbmRleDogMCxcbiAgICAgICAgICBzZWxlY3RlZENvbG9yOiAnI2ZmMDAwMCcsXG4gICAgICAgICAgdW5zZWxlY3RlZENvbG9yOiAnIzAwMDAwMCcsXG4gICAgICAgIH0sXG4gICAgICAgIGNyZWF0ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkKHRoaXMuc2VsZWN0ZWRJbmRleCk7XG5cbiAgICAgICAgICB0aGlzLiRvbigndGFiSXRlbS5vbkNsaWNrJyxmdW5jdGlvbihlKXtcbiAgICAgICAgICAgIHZhciBkZXRhaWw9IGUuZGV0YWlsO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gZGV0YWlsLmluZGV4O1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZChkZXRhaWwuaW5kZXgpO1xuXG4gICAgICAgICAgICB2YXIgcGFyYW1zID0ge1xuICAgICAgICAgICAgICBpbmRleDogZGV0YWlsLmluZGV4XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy4kZGlzcGF0Y2goJ3RhYkJhci5vbkNsaWNrJywgcGFyYW1zKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgc2VsZWN0ZWQ6IGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLnRhYkl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRhYkl0ZW0gPSB0aGlzLnRhYkl0ZW1zW2ldO1xuICAgICAgICAgICAgICAgIGlmKGkgPT0gaW5kZXgpe1xuICAgICAgICAgICAgICAgICAgdGFiSXRlbS5pY29uID0gdGFiSXRlbS5zZWxlY3RlZEltYWdlO1xuICAgICAgICAgICAgICAgICAgdGFiSXRlbS50aXRsZUNvbG9yID0gdGhpcy5zZWxlY3RlZENvbG9yO1xuICAgICAgICAgICAgICAgICAgdGFiSXRlbS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHRhYkl0ZW0uaWNvbiA9IHRhYkl0ZW0uaW1hZ2U7XG4gICAgICAgICAgICAgICAgICB0YWJJdGVtLnRpdGxlQ29sb3IgPSB0aGlzLnVuc2VsZWN0ZWRDb2xvcjtcbiAgICAgICAgICAgICAgICAgIHRhYkl0ZW0udmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgIFxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy10YWJiYXIud2U/MDQ3NGVmOGIiLCJyZXF1aXJlKFwiLi92YmFvbGktZm9vdGVyLXRhYml0ZW0ud2VcIilcbnZhciBfX3dlZXhfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vdmJhb2xpLWZvb3Rlci10YWIud2VcIilcbnZhciBfX3dlZXhfc3R5bGVfXyA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c3R5bGVzIS4vdmJhb2xpLWZvb3Rlci10YWIud2VcIilcbnZhciBfX3dlZXhfc2NyaXB0X18gPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvc2NyaXB0LmpzIWJhYmVsLWxvYWRlcj9wcmVzZXRzW109QzpcXFxcdmJhb2xpLXdlZXhcXFxcdmJhb2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnByZXNldHM9QzpcXFxcdmJhb2xpLXdlZXhcXFxcdmJhb2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnBsdWdpbnNbXT1DOlxcXFx2YmFvbGktd2VleFxcXFx2YmFvbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZwbHVnaW5zPUM6XFxcXHZiYW9saS13ZWV4XFxcXHZiYW9saVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJmNvbW1lbnRzPWZhbHNlIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zY3JpcHRzIS4vdmJhb2xpLWZvb3Rlci10YWIud2VcIilcblxuX193ZWV4X2RlZmluZV9fKCdAd2VleC1jb21wb25lbnQvdmJhb2xpLWZvb3Rlci10YWInLCBbXSwgZnVuY3Rpb24oX193ZWV4X3JlcXVpcmVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X21vZHVsZV9fKSB7XG5cbiAgICBfX3dlZXhfc2NyaXB0X18oX193ZWV4X21vZHVsZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfcmVxdWlyZV9fKVxuICAgIGlmIChfX3dlZXhfZXhwb3J0c19fLl9fZXNNb2R1bGUgJiYgX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0KSB7XG4gICAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cyA9IF9fd2VleF9leHBvcnRzX18uZGVmYXVsdFxuICAgIH1cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnRlbXBsYXRlID0gX193ZWV4X3RlbXBsYXRlX19cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnN0eWxlID0gX193ZWV4X3N0eWxlX19cblxufSlcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2luY2x1ZGUvdmJhb2xpLWZvb3Rlci10YWIud2Vcbi8vIG1vZHVsZSBpZCA9IDEzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDQgMTIgMTkgMjAiLCJ2YXIgX193ZWV4X3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL3ZiYW9saS1mb290ZXItdGFiaXRlbS53ZVwiKVxudmFyIF9fd2VleF9zdHlsZV9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi92YmFvbGktZm9vdGVyLXRhYml0ZW0ud2VcIilcbnZhciBfX3dlZXhfc2NyaXB0X18gPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvc2NyaXB0LmpzIWJhYmVsLWxvYWRlcj9wcmVzZXRzW109QzpcXFxcdmJhb2xpLXdlZXhcXFxcdmJhb2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnByZXNldHM9QzpcXFxcdmJhb2xpLXdlZXhcXFxcdmJhb2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnBsdWdpbnNbXT1DOlxcXFx2YmFvbGktd2VleFxcXFx2YmFvbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZwbHVnaW5zPUM6XFxcXHZiYW9saS13ZWV4XFxcXHZiYW9saVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJmNvbW1lbnRzPWZhbHNlIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zY3JpcHRzIS4vdmJhb2xpLWZvb3Rlci10YWJpdGVtLndlXCIpXG5cbl9fd2VleF9kZWZpbmVfXygnQHdlZXgtY29tcG9uZW50L3ZiYW9saS1mb290ZXItdGFiaXRlbScsIFtdLCBmdW5jdGlvbihfX3dlZXhfcmVxdWlyZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfbW9kdWxlX18pIHtcblxuICAgIF9fd2VleF9zY3JpcHRfXyhfX3dlZXhfbW9kdWxlX18sIF9fd2VleF9leHBvcnRzX18sIF9fd2VleF9yZXF1aXJlX18pXG4gICAgaWYgKF9fd2VleF9leHBvcnRzX18uX19lc01vZHVsZSAmJiBfX3dlZXhfZXhwb3J0c19fLmRlZmF1bHQpIHtcbiAgICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzID0gX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0XG4gICAgfVxuXG4gICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMudGVtcGxhdGUgPSBfX3dlZXhfdGVtcGxhdGVfX1xuXG4gICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMuc3R5bGUgPSBfX3dlZXhfc3R5bGVfX1xuXG59KVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW5jbHVkZS92YmFvbGktZm9vdGVyLXRhYml0ZW0ud2Vcbi8vIG1vZHVsZSBpZCA9IDEzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDQgNSAxMiAxOSAyMCIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJkaXZcIixcbiAgXCJjbGFzc0xpc3RcIjogW1xuICAgIFwiY29udGFpbmVyXCJcbiAgXSxcbiAgXCJzdHlsZVwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmJhY2tncm91bmRDb2xvcn1cbiAgfSxcbiAgXCJldmVudHNcIjoge1xuICAgIFwiY2xpY2tcIjogXCJvbmNsaWNraXRlbVwiXG4gIH0sXG4gIFwiY2hpbGRyZW5cIjogW1xuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwidG9wLWxpbmVcIlxuICAgICAgXSxcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwic3JjXCI6IFwiaHR0cDovL2d0bXMwMy5hbGljZG4uY29tL3Rwcy9pMy9UQjFtZHNpTXBYWFhYWHBYWFhYTnc0SklYWFgtNjQwLTQucG5nXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwidGFiLWljb25cIlxuICAgICAgXSxcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwic3JjXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5pY29ufVxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcInRhYi10ZXh0XCJcbiAgICAgIF0sXG4gICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudGl0bGVDb2xvcn1cbiAgICAgIH0sXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy50aXRsZX1cbiAgICAgIH1cbiAgICB9XG4gIF1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+L3dlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuL34vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL3NyYy9pbmNsdWRlL3ZiYW9saS1mb290ZXItdGFiaXRlbS53ZVxuLy8gbW9kdWxlIGlkID0gMTM1XG4vLyBtb2R1bGUgY2h1bmtzID0gNCA1IDYgMTIgMTkgMjAiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJjb250YWluZXJcIjoge1xuICAgIFwiZmxleFwiOiAxLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImhlaWdodFwiOiA4OFxuICB9LFxuICBcInRvcC1saW5lXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcInRvcFwiOiAwLFxuICAgIFwibGVmdFwiOiAwLFxuICAgIFwicmlnaHRcIjogMCxcbiAgICBcImhlaWdodFwiOiAyXG4gIH0sXG4gIFwidGFiLWljb25cIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IDUsXG4gICAgXCJ3aWR0aFwiOiA0MCxcbiAgICBcImhlaWdodFwiOiA0MFxuICB9LFxuICBcInRhYi10ZXh0XCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiA1LFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCIsXG4gICAgXCJmb250U2l6ZVwiOiAyMFxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi9zcmMvaW5jbHVkZS92YmFvbGktZm9vdGVyLXRhYml0ZW0ud2Vcbi8vIG1vZHVsZSBpZCA9IDEzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDQgNSA2IDEyIDE5IDIwIiwiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjoge3tiYWNrZ3JvdW5kQ29sb3J9fVwiICBvbmNsaWNrPVwib25jbGlja2l0ZW1cIj5cclxuICAgICAgICA8aW1hZ2UgY2xhc3M9XCJ0b3AtbGluZVwiIHNyYyA9IFwiaHR0cDovL2d0bXMwMy5hbGljZG4uY29tL3Rwcy9pMy9UQjFtZHNpTXBYWFhYWHBYWFhYTnc0SklYWFgtNjQwLTQucG5nXCI+PC9pbWFnZT5cclxuICAgICAgICA8aW1hZ2UgY2xhc3M9XCJ0YWItaWNvblwiIHNyYyA9IHt7aWNvbn19PjwvaW1hZ2U+XHJcbiAgICAgICAgPHRleHQgY2xhc3M9XCJ0YWItdGV4dFwiIHN0eWxlPVwiY29sb3I6IHt7dGl0bGVDb2xvcn19O1wiPnt7dGl0bGV9fTwvdGV4dD5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHN0eWxlPlxyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG4gICAgICAgIGhlaWdodDogODg7XHJcbiAgICB9XHJcbiAgICAudG9wLWxpbmUge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICBoZWlnaHQ6IDI7XHJcbiAgICB9XHJcbiAgICAudGFiLWljb24ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDU7XHJcbiAgICAgICAgd2lkdGg6IDQwO1xyXG4gICAgICAgIGhlaWdodDogNDBcclxuICAgIH1cclxuICAgIC50YWItdGV4dCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMDtcclxuICAgIH1cclxuPC9zdHlsZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBtb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBiYXNlVXJsOiAnJyxcclxuICAgICAgICAgIGluZGV4OiAwLFxyXG4gICAgICAgICAgdGl0bGU6ICcnLFxyXG4gICAgICAgICAgdGl0bGVDb2xvcjogJyMwMDAwMDAnLFxyXG4gICAgICAgICAgaWNvbjogJycsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmZmZmJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgIG9uY2xpY2tpdGVtOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy51cmwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJG9wZW5VUkwodGhpcy5iYXNlVXJsICsgdGhpcy51cmwpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnRpdGxlQ29sb3IpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHZtID0gdGhpcztcclxuICAgICAgICAgICAgICAgIHZhciBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IHZtLmluZGV4XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgdm0uJGRpc3BhdGNoKCd0YWJJdGVtLm9uQ2xpY2snLCBwYXJhbXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5jbHVkZS92YmFvbGktZm9vdGVyLXRhYml0ZW0ud2U/YTE5MjU2YzQiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gIFwiY2xhc3NMaXN0XCI6IFtcbiAgICBcIndyYXBwZXJcIlxuICBdLFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJ0YWJiYXJcIlxuICAgICAgXSxcbiAgICAgIFwiYXBwZW5kXCI6IFwidHJlZVwiLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJ2YmFvbGktZm9vdGVyLXRhYml0ZW1cIixcbiAgICAgICAgICBcInJlcGVhdFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudGFiSXRlbXN9LFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcImJhc2VVcmxcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmJhc2VVcmx9LFxuICAgICAgICAgICAgXCJpbmRleFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuaW5kZXh9LFxuICAgICAgICAgICAgXCJpY29uXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5pY29ufSxcbiAgICAgICAgICAgIFwidGl0bGVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnRpdGxlfSxcbiAgICAgICAgICAgIFwidGl0bGVDb2xvclwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudGl0bGVDb2xvcn1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+L3dlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuL34vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL3NyYy9pbmNsdWRlL3ZiYW9saS1mb290ZXItdGFiLndlXG4vLyBtb2R1bGUgaWQgPSAxMzhcbi8vIG1vZHVsZSBjaHVua3MgPSA0IDUgMTIgMTkgMjAiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ3cmFwcGVyXCI6IHtcbiAgICBcIndpZHRoXCI6IDc1MCxcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcInRvcFwiOiAwLFxuICAgIFwibGVmdFwiOiAwLFxuICAgIFwicmlnaHRcIjogMCxcbiAgICBcImJvdHRvbVwiOiAwXG4gIH0sXG4gIFwidGFiYmFyXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcInBvc2l0aW9uXCI6IFwiZml4ZWRcIixcbiAgICBcImJvdHRvbVwiOiAwLFxuICAgIFwibGVmdFwiOiAwLFxuICAgIFwicmlnaHRcIjogMCxcbiAgICBcImhlaWdodFwiOiA4OFxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi9zcmMvaW5jbHVkZS92YmFvbGktZm9vdGVyLXRhYi53ZVxuLy8gbW9kdWxlIGlkID0gMTM5XG4vLyBtb2R1bGUgY2h1bmtzID0gNCA1IDEyIDE5IDIwIiwiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiBjbGFzcz1cIndyYXBwZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFiYmFyXCIgYXBwZW5kID0gXCJ0cmVlXCI+XHJcbiAgICAgICAgICAgIDx2YmFvbGktZm9vdGVyLXRhYml0ZW0gcmVwZWF0PXt7dGFiSXRlbXN9fSBiYXNlLXVybD17e2Jhc2VVcmx9fSBpbmRleD17e2luZGV4fX0gaWNvbj17e2ljb259fSB0aXRsZT17e3RpdGxlfX0gdGl0bGUtY29sb3I9e3t0aXRsZUNvbG9yfX0+PC92YmFvbGktZm9vdGVyLXRhYml0ZW0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzdHlsZT5cclxuICAgIC53cmFwcGVyIHtcclxuICAgICAgICB3aWR0aDogNzUwO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICB9XHJcbiAgICAudGFiYmFyIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICBoZWlnaHQ6IDg4O1xyXG4gICAgfVxyXG48L3N0eWxlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIG1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIGJhc2VVcmw6ICcnLFxyXG4gICAgICAgICAgdGFiSXRlbXM6IFsgXSxcclxuICAgICAgICAgIHNlbGVjdGVkSW5kZXg6IDAsXHJcbiAgICAgICAgICBzZWxlY3RlZENvbG9yOiAnI2ZmMDAwMCcsXHJcbiAgICAgICAgICB1bnNlbGVjdGVkQ29sb3I6ICcjMDAwMDAwJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNyZWF0ZWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIHRoaXMuc2VsZWN0ZWQodGhpcy5zZWxlY3RlZEluZGV4KTtcclxuXHJcbiAgICAgICAgICB0aGlzLiRvbigndGFiSXRlbS5vbkNsaWNrJyxmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgdmFyIGRldGFpbD0gZS5kZXRhaWw7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IGRldGFpbC5pbmRleDtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZChkZXRhaWwuaW5kZXgpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgICBpbmRleDogZGV0YWlsLmluZGV4XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHRoaXMuJGRpc3BhdGNoKCd0YWJCYXIub25DbGljaycsIHBhcmFtcyk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgICAgc2VsZWN0ZWQ6IGZ1bmN0aW9uKGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHRoaXMudGFiSXRlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciB0YWJJdGVtID0gdGhpcy50YWJJdGVtc1tpXTtcclxuICAgICAgICAgICAgICAgIGlmKGkgPT0gaW5kZXgpe1xyXG4gICAgICAgICAgICAgICAgICB0YWJJdGVtLmljb24gPSB0YWJJdGVtLnNlbGVjdGVkSW1hZ2U7XHJcbiAgICAgICAgICAgICAgICAgIHRhYkl0ZW0udGl0bGVDb2xvciA9IHRoaXMuc2VsZWN0ZWRDb2xvcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICB0YWJJdGVtLmljb24gPSB0YWJJdGVtLmltYWdlO1xyXG4gICAgICAgICAgICAgICAgICB0YWJJdGVtLnRpdGxlQ29sb3IgPSB0aGlzLnVuc2VsZWN0ZWRDb2xvcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5jbHVkZS92YmFvbGktZm9vdGVyLXRhYi53ZT9hYjM1NWNlYSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJkaXZcIixcbiAgXCJzdHlsZVwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCJcbiAgfSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwidmJhb2xpLWZvb3Rlci10YWJcIixcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwidGFiSXRlbXNcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnRhYkl0ZW1zfSxcbiAgICAgICAgXCJiYXNlVXJsXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5iYXNlVXJsfSxcbiAgICAgICAgXCJzZWxlY3RlZEluZGV4XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5zZWxlY3RlZEluZGV4fSxcbiAgICAgICAgXCJzZWxlY3RlZENvbG9yXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5zZWxlY3RlZENvbG9yfSxcbiAgICAgICAgXCJ1bnNlbGVjdGVkQ29sb3JcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnVuc2VsZWN0ZWRDb2xvcn1cbiAgICAgIH1cbiAgICB9XG4gIF1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+L3dlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuL34vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL3NyYy9pbmNsdWRlL3ZiYW9saS1mb290ZXIud2Vcbi8vIG1vZHVsZSBpZCA9IDE0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDQgMTIgMTkgMjAiLCI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IHN0eWxlPVwiZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcIj5cclxuICAgICAgICA8dmJhb2xpLWZvb3Rlci10YWIgdGFiLWl0ZW1zPXt7dGFiSXRlbXN9fSBiYXNlLXVybD17e2Jhc2VVcmx9fSBzZWxlY3RlZC1pbmRleD17e3NlbGVjdGVkSW5kZXh9fSBzZWxlY3RlZC1jb2xvcj17e3NlbGVjdGVkQ29sb3J9fSB1bnNlbGVjdGVkLWNvbG9yPXt7dW5zZWxlY3RlZENvbG9yfX0+PC92YmFvbGktZm9vdGVyLXRhYj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG48c2NyaXB0PlxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIGRhdGE6IHtcclxuICAgICAgICBkaXI6ICdkaXN0JyxcclxuICAgICAgICBzZWxlY3RlZEluZGV4OiAwLFxyXG4gICAgICAgIGJhc2VVcmw6ICcnLFxyXG4gICAgICAgIHNlbGVjdGVkQ29sb3I6ICcjZmY5MTI1JyxcclxuICAgICAgICB1bnNlbGVjdGVkQ29sb3I6ICcjOTc5Nzk3JyxcclxuICAgICAgICB0YWJJdGVtczogW3tcclxuICAgICAgICAgICAgaW5kZXg6IDAsXHJcbiAgICAgICAgICAgIHRpdGxlOiAn6aaW6aG1JyxcclxuICAgICAgICAgICAgaWNvbjogJycsXHJcbiAgICAgICAgICAgIGltYWdlOiAnLi4vaW1hZ2VzL2ljb24taG9tZS5wbmcnLFxyXG4gICAgICAgICAgICBzZWxlY3RlZEltYWdlOiAnLi4vaW1hZ2VzL2ljb24taG9tZS1hY3RpdmUucG5nJyxcclxuICAgICAgICAgICAgdXJsOiAnaW5kZXguanMnLFxyXG4gICAgICAgICAgICB2aXNpYmlsaXR5OiAndmlzaWJsZScsXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBpbmRleDogMSxcclxuICAgICAgICAgICAgdGl0bGU6ICfkuqflk4EnLFxyXG4gICAgICAgICAgICBpY29uOiAnJyxcclxuICAgICAgICAgICAgaW1hZ2U6ICcuLi9pbWFnZXMvaWNvbi1wcm9kdWN0LnBuZycsXHJcbiAgICAgICAgICAgIHNlbGVjdGVkSW1hZ2U6ICcuLi9pbWFnZXMvaWNvbi1wcm9kdWN0LWFjdGl2ZS5wbmcnLFxyXG4gICAgICAgICAgICB1cmw6ICdtb2R1bGVzL2JvcnJvdy9wcm9kdWN0TGlzdC5qcycsXHJcbiAgICAgICAgICAgIHZpc2liaWxpdHk6ICdoaWRkZW4nLFxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgaW5kZXg6IDIsXHJcbiAgICAgICAgICAgIHRpdGxlOiAn5ZWG5Z+OJyxcclxuICAgICAgICAgICAgaWNvbjogJycsXHJcbiAgICAgICAgICAgIGltYWdlOiAnLi4vaW1hZ2VzL2ljb24tc2hvcC5wbmcnLFxyXG4gICAgICAgICAgICBzZWxlY3RlZEltYWdlOiAnLi4vaW1hZ2VzL2ljb24tc2hvcC1hY3RpdmUucG5nJyxcclxuICAgICAgICAgICAgdXJsOiAnJyxcclxuICAgICAgICAgICAgdmlzaWJpbGl0eTogJ2hpZGRlbicsXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBpbmRleDogMyxcclxuICAgICAgICAgICAgdGl0bGU6ICfmiJHnmoQnLFxyXG4gICAgICAgICAgICBpY29uOiAnJyxcclxuICAgICAgICAgICAgaW1hZ2U6ICcuLi9pbWFnZXMvaWNvbi1taW5lLnBuZycsXHJcbiAgICAgICAgICAgIHNlbGVjdGVkSW1hZ2U6ICcuLi9pbWFnZXMvaWNvbi1taW5lLWFjdGl2ZS5wbmcnLFxyXG4gICAgICAgICAgICB1cmw6ICcnLFxyXG4gICAgICAgICAgICB2aXNpYmlsaXR5OiAnaGlkZGVuJyxcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIGluZGV4OiA0LFxyXG4gICAgICAgICAgICB0aXRsZTogJ+abtOWkmicsXHJcbiAgICAgICAgICAgIGljb246ICcnLFxyXG4gICAgICAgICAgICBpbWFnZTogJy4uL2ltYWdlcy9pY29uLW1vcmUucG5nJyxcclxuICAgICAgICAgICAgc2VsZWN0ZWRJbWFnZTogJy4uL2ltYWdlcy9pY29uLW1vcmUtYWN0aXZlLnBuZycsXHJcbiAgICAgICAgICAgIHVybDogJycsXHJcbiAgICAgICAgICAgIHZpc2liaWxpdHk6ICdoaWRkZW4nLFxyXG4gICAgICAgIH1dLFxyXG4gICAgfSxcclxuICAgIGNyZWF0ZWQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBidW5kbGVVcmwgPSB0aGlzLiRnZXRDb25maWcoKS5idW5kbGVVcmw7XHJcbiAgICAgICAgdmFyIG5hdGl2ZUJhc2U7XHJcbiAgICAgICAgdmFyIGlzQW5kcm9pZEFzc2V0cyA9IGJ1bmRsZVVybC5pbmRleE9mKCdmaWxlOi8vYXNzZXRzLycpID49IDA7XHJcbiAgICAgICAgdmFyIGlzaU9TQXNzZXRzID0gYnVuZGxlVXJsLmluZGV4T2YoJ2ZpbGU6Ly8vJykgPj0gMCAmJiBidW5kbGVVcmwuaW5kZXhPZignV2VleERlbW8uYXBwJykgPiAwO1xyXG4gICAgICAgIGlmIChpc0FuZHJvaWRBc3NldHMpIHtcclxuICAgICAgICAgICAgbmF0aXZlQmFzZSA9ICdmaWxlOi8vYXNzZXRzLyc7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpc2lPU0Fzc2V0cykge1xyXG4gICAgICAgICAgICAvLyBmaWxlOi8vL3Zhci9tb2JpbGUvQ29udGFpbmVycy9CdW5kbGUvQXBwbGljYXRpb24ve2lkfS9XZWV4RGVtby5hcHAvXHJcbiAgICAgICAgICAgIC8vIGZpbGU6Ly8vVXNlcnMve3VzZXJ9L0xpYnJhcnkvRGV2ZWxvcGVyL0NvcmVTaW11bGF0b3IvRGV2aWNlcy97aWR9L2RhdGEvQ29udGFpbmVycy9CdW5kbGUvQXBwbGljYXRpb24ve2lkfS9XZWV4RGVtby5hcHAvXHJcbiAgICAgICAgICAgIG5hdGl2ZUJhc2UgPSBidW5kbGVVcmwuc3Vic3RyaW5nKDAsIGJ1bmRsZVVybC5sYXN0SW5kZXhPZignLycpICsgMSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIGhvc3QgPSAnbG9jYWxob3N0OjgwODAnO1xyXG4gICAgICAgICAgICB2YXIgbWF0Y2hlcyA9IC9cXC9cXC8oW15cXC9dKz8pXFwvLy5leGVjKHRoaXMuJGdldENvbmZpZygpLmJ1bmRsZVVybCk7XHJcbiAgICAgICAgICAgIGlmIChtYXRjaGVzICYmIG1hdGNoZXMubGVuZ3RoID49IDIpIHtcclxuICAgICAgICAgICAgICAgIGhvc3QgPSBtYXRjaGVzWzFdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5hdGl2ZUJhc2UgPSAnaHR0cDovLycgKyBob3N0ICsgJy8nICsgdGhpcy5kaXIgKyAnLyc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBoNUJhc2UgPSAnLi9pbmRleC5odG1sP3BhZ2U9Li8nICsgdGhpcy5kaXIgKyAnLyc7XHJcbiAgICAgICAgLy8gaW4gTmF0aXZlXHJcbiAgICAgICAgdGhpcy5iYXNlVXJsID0gbmF0aXZlQmFzZTtcclxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgLy8gaW4gQnJvd3NlciBvciBXZWJWaWV3XHJcbiAgICAgICAgICAgIHRoaXMuYmFzZVVybCA9IGg1QmFzZTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG59XHJcbjwvc2NyaXB0PlxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5jbHVkZS92YmFvbGktZm9vdGVyLndlPzU1YzI5OGMzIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImRpdlwiLFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJzY3JvbGxlclwiLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJ3eGMtbWFycXVlZVwiLFxuICAgICAgICAgIFwiaWRcIjogXCJtYXJxdWVlXCIsXG4gICAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICBcIndpZHRoXCI6IDcwOCxcbiAgICAgICAgICAgIFwiaGVpZ2h0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5tYXJxdWVlLmhlaWdodCoyfSxcbiAgICAgICAgICAgIFwiYm9yZGVyUmFkaXVzXCI6IDgsXG4gICAgICAgICAgICBcInBhZGRpbmdMZWZ0XCI6IDEwLFxuICAgICAgICAgICAgXCJwYWRkaW5nUmlnaHRcIjogMTBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInN0ZXBcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLm1hcnF1ZWUuaGVpZ2h0KjJ9LFxuICAgICAgICAgICAgXCJjb3VudFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMubWFycXVlZS5saXN0Lmxlbmd0aH0sXG4gICAgICAgICAgICBcImludGVydmFsXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5tYXJxdWVlLmludGVydmFsfSxcbiAgICAgICAgICAgIFwiZHVyYXRpb25cIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLm1hcnF1ZWUuZHVyYXRpb259XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgIFwicmVwZWF0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5tYXJxdWVlLmxpc3R9LFxuICAgICAgICAgICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgICAgICAgICBcImhlaWdodFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMubWFycXVlZS5oZWlnaHQqdGhpcy5tYXJxdWVlLmxlbmd0aH0sXG4gICAgICAgICAgICAgICAgXCJwYWRkaW5nVG9wXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5tYXJxdWVlLmhlaWdodCowLjV9LFxuICAgICAgICAgICAgICAgIFwicGFkZGluZ0JvdHRvbVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMubWFycXVlZS5oZWlnaHQqMC41fSxcbiAgICAgICAgICAgICAgICBcIm92ZXJmbG93XCI6IFwiaGlkZGVuXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5tYXJxdWVlLmhlaWdodH0sXG4gICAgICAgICAgICAgICAgICAgIFwibGluZUhlaWdodFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMubWFycXVlZS5oZWlnaHR9LFxuICAgICAgICAgICAgICAgICAgICBcImZvbnRTaXplXCI6IDI0LFxuICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwiIzY2NjY2NlwiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudGV4dH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+L3dlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuL34vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL3NyYy9pbmNsdWRlL3ZiYW9saS1tYXJxdWVlLndlXG4vLyBtb2R1bGUgaWQgPSAxNDZcbi8vIG1vZHVsZSBjaHVua3MgPSA4IDEyIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXY+XHJcbiAgICAgIDxzY3JvbGxlcj5cclxuICAgICAgICAgIDx3eGMtbWFycXVlZSBpZD1cIm1hcnF1ZWVcIiBzdHlsZT1cIndpZHRoOiA3MDg7IGhlaWdodDoge3ttYXJxdWVlLmhlaWdodCAqIDJ9fTsgYm9yZGVyLXJhZGl1czogODsgcGFkZGluZy1sZWZ0OiAxMDsgcGFkZGluZy1yaWdodDogMTA7XCIgc3RlcD1cInt7bWFycXVlZS5oZWlnaHQgKiAyfX1cIiBjb3VudD1cInt7bWFycXVlZS5saXN0Lmxlbmd0aH19XCIgaW50ZXJ2YWw9XCJ7e21hcnF1ZWUuaW50ZXJ2YWx9fVwiIGR1cmF0aW9uPVwie3ttYXJxdWVlLmR1cmF0aW9ufX1cIj5cclxuICAgICAgICAgICAgPGRpdiByZXBlYXQ9e3ttYXJxdWVlLmxpc3R9fSBzdHlsZT1cImhlaWdodDoge3ttYXJxdWVlLmhlaWdodCAqIG1hcnF1ZWUubGVuZ3RofX07IHBhZGRpbmctdG9wOiB7e21hcnF1ZWUuaGVpZ2h0ICogMC41fX07IHBhZGRpbmctYm90dG9tOiB7e21hcnF1ZWUuaGVpZ2h0ICogMC41fX07IG92ZXJmbG93OiBoaWRkZW47XCI+XHJcbiAgICAgICAgICAgICAgPHRleHQgc3R5bGU9XCJoZWlnaHQ6IHt7bWFycXVlZS5oZWlnaHR9fTsgbGluZS1oZWlnaHQ6IHt7bWFycXVlZS5oZWlnaHR9fTsgZm9udC1zaXplOiAyNDsgY29sb3I6ICM2NjY7XCI+e3t0ZXh0fX08L3RleHQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC93eGMtbWFycXVlZT5cclxuICAgICAgPC9zY3JvbGxlcj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgcmVxdWlyZSgnd2VleC1jb21wb25lbnRzJyk7XHJcblxyXG4gIG1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgZGF0YToge1xyXG4gICAgICBtYXJxdWVlOiB7XHJcbiAgICAgICAgaGVpZ2h0OiAzMixcclxuICAgICAgICBkdXJhdGlvbjogMTUwMCxcclxuICAgICAgICBpbnRlcnZhbDogMjAwMCxcclxuICAgICAgICBsaXN0OiBbXHJcbiAgICAgICAgICB7dGV4dDogJ0ludHJvZHVjaW5nIEJvdHMgb24gTWVzc2VuZ2VyJ30sXHJcbiAgICAgICAgICB7dGV4dDogJ0NhcHR1cmluZyAzRCAzNjAtU3RlcmVvIFZSIFZpZGVvJ30sXHJcbiAgICAgICAgICB7dGV4dDogJ1RoZSBGdXR1cmUgb2YgVmlkZW8gb24gRmFjZWJvb2snfSxcclxuICAgICAgICAgIHt0ZXh0OiAnQW5ub3VuY2luZyBWdWUuanMgMi4wJ30sXHJcbiAgICAgICAgICB7dGV4dDogJ05vdCBZb3VyIEF2ZXJhZ2UgVmlydHVhbC1ET00nfSxcclxuICAgICAgICAgIHt0ZXh0OiAnVGVtcGxhdGVzLCBKU1gsIG9yIEh5cGVyc2NyaXB0Pyd9XHJcbiAgICAgICAgXVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgcmVhZHk6IGZ1bmN0aW9uKCkge1xyXG4gICAgICB0aGlzLmluaXRNYXJxdWVlKCdtYXJxdWVlJyk7XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICBpbml0TWFycXVlZTogZnVuY3Rpb24oaWQpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgIHZhciAkbWFycXVlZSA9IHRoaXMuJHZtKGlkKTtcclxuICAgICAgICAkbWFycXVlZS4kb24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ21hcnF1ZWUgY2hhbmdlJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmNsdWRlL3ZiYW9saS1tYXJxdWVlLndlPzRhNGQ4MmJjIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImRpdlwiLFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJzbGlkZXJcIixcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJzbGlkZXJcIlxuICAgICAgXSxcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwiaW50ZXJ2YWxcIjogXCIzMDAwXCIsXG4gICAgICAgIFwiYXV0b1BsYXlcIjogXCJ0cnVlXCJcbiAgICAgIH0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwic2xpZGVyLXBhZ2VzXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwicmVwZWF0XCI6IHtcbiAgICAgICAgICAgIFwiZXhwcmVzc2lvblwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuc2xpZGVyTGlzdH0sXG4gICAgICAgICAgICBcInZhbHVlXCI6IFwiaXRlbVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwiaW1nXCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInNyY1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuaXRlbS5waWN0dXJlVXJsfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICBdLFxuICBcImF0dHJcIjoge1xuICAgIFwidmFsdWVcIjogXCJkaXZcIlxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi9zcmMvaW5jbHVkZS92YmFvbGktc2xpZGVyLndlXG4vLyBtb2R1bGUgaWQgPSAxNDhcbi8vIG1vZHVsZSBjaHVua3MgPSA5IDEyIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiaW1nXCI6IHtcbiAgICBcIndpZHRoXCI6IDc1MCxcbiAgICBcImhlaWdodFwiOiA0MjBcbiAgfSxcbiAgXCJzbGlkZXJcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwid2lkdGhcIjogNzUwLFxuICAgIFwiaGVpZ2h0XCI6IDQyMFxuICB9LFxuICBcInNsaWRlci1wYWdlc1wiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJ3aWR0aFwiOiA3NTAsXG4gICAgXCJoZWlnaHRcIjogNDIwXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL34vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL3NyYy9pbmNsdWRlL3ZiYW9saS1zbGlkZXIud2Vcbi8vIG1vZHVsZSBpZCA9IDE0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDkgMTIiLCI8dGVtcGxhdGU+XHJcbiAgPGRpdj5cclxuICAgIDxzbGlkZXIgY2xhc3M9XCJzbGlkZXJcIiBpbnRlcnZhbD1cIjMwMDBcIiBhdXRvLXBsYXk9XCJ0cnVlXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJzbGlkZXItcGFnZXNcIiByZXBlYXQ9XCJpdGVtIGluIHNsaWRlckxpc3RcIj5cclxuICAgICAgICA8aW1hZ2UgY2xhc3M9XCJpbWdcIiBzcmM9XCJ7e2l0ZW0ucGljdHVyZVVybH19XCI+PC9pbWFnZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDwhLS08aW5kaWNhdG9yIGNsYXNzPVwiaW5kaWNhdG9yXCI+PC9pbmRpY2F0b3I+LS0+XHJcbiAgICA8L3NsaWRlcj5cclxuICAgIGRpdlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHN0eWxlPlxyXG4gIC5pbWcge1xyXG4gICAgd2lkdGg6IDc1MHB4O1xyXG4gICAgaGVpZ2h0OiA0MjBweDtcclxuICB9XHJcbiAgLnNsaWRlciB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgd2lkdGg6IDc1MHB4O1xyXG4gICAgaGVpZ2h0OiA0MjBweDtcclxuICB9XHJcbiAgLnNsaWRlci1wYWdlcyB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgd2lkdGg6IDc1MHB4O1xyXG4gICAgaGVpZ2h0OiA0MjBweDtcclxuICB9XHJcbiAgLyouaW5kaWNhdG9yIHsqL1xyXG4gICAgLyp3aWR0aDo3NTBweDsqL1xyXG4gICAgLypoZWlnaHQ6NDIwcHg7Ki9cclxuICAgIC8qcG9zaXRpb246YWJzb2x1dGU7Ki9cclxuICAgIC8qdG9wOjFweDsqL1xyXG4gICAgLypsZWZ0OjFweDsqL1xyXG4gICAgLyppdGVtLWNvbG9yOiByZWQ7Ki9cclxuICAgIC8qaXRlbS1zZWxlY3RlZENvbG9yOiBibHVlOyovXHJcbiAgICAvKml0ZW0tc2l6ZTogMjA7Ki9cclxuICAvKn0qL1xyXG48L3N0eWxlPlxyXG5cclxuPHNjcmlwdD5cclxuICBtb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIGRhdGE6IHtcclxuICAgICAgc2xpZGVyTGlzdDogW1xyXG4gICAgICAgIHtpdGVtSWQ6ICc1MjA0MjExNjM2MzQnLCBwaWN0dXJlVXJsOiAnLi9pbWFnZXMvc2xpZGVyMDEucG5nJ30sXHJcbiAgICAgICAge2l0ZW1JZDogJzUyMjA3Njc3NzQ2MicsIHBpY3R1cmVVcmw6ICcuL2ltYWdlcy9zbGlkZXIwMi5wbmcnfSxcclxuICAgICAgICB7aXRlbUlkOiAnNTIyMDc2Nzc3NDYyJywgcGljdHVyZVVybDogJy4vaW1hZ2VzL3NsaWRlcjAzLnBuZyd9XHJcbiAgICAgIF1cclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmNsdWRlL3ZiYW9saS1zbGlkZXIud2U/NzgwYmEzMDkiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gIFwiY2xhc3NMaXN0XCI6IFtcbiAgICBcIndyYXBwZXJcIlxuICBdLFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJ2YmFvbGktc2xpZGVyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcInAwMVwiXG4gICAgICBdLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZVwiLFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwiaWNvbi1icm9hZGNhc3RcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwic3JjXCI6IFwiLi4vaW1hZ2VzL2ljb24tYnJvYWRjYXN0LnBuZ1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwidmJhb2xpLW1hcnF1ZWVcIixcbiAgICAgICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgICAgIFwid2lkdGhcIjogNzAwXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJwMDJcIlxuICAgICAgXSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiYVwiLFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwicDAyLWFcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwiaHJlZlwiOiBcImphdmFzY3JpcHQ6O1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwicDAyLWltZ1wiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJzcmNcIjogXCIuLi9pbWFnZXMvaWNvbi1hY3Rpdml0eS5wbmdcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInAwMi10ZXh0XCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi5rS75Yqo5LiT5Yy6XCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImFcIixcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcInAwMi1hXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcImhyZWZcIjogXCJqYXZhc2NyaXB0OjtcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInAwMi1pbWdcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwic3JjXCI6IFwiLi4vaW1hZ2VzL2ljb24tc2VjdXJpdHkucG5nXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJwMDItdGV4dFwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIuWkmumHjeS/nemanFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJhXCIsXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJwMDItYVwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJocmVmXCI6IFwiamF2YXNjcmlwdDo7XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZVwiLFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJwMDItaW1nXCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInNyY1wiOiBcIi4uL2ltYWdlcy9pY29uLWludml0ZS5wbmdcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInAwMi10ZXh0XCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi5aW95Y+L57qi5YyFXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwibWVkYWxcIlxuICAgICAgXSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcImljb24tbWVkYWxcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwic3JjXCI6IFwiLi4vaW1hZ2VzL2ljb24tbWVkYWwucG5nXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICBcImZvbnRTaXplXCI6IDI4XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIuaWsOaJi+S4k+S6q1wiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJwMDNcIlxuICAgICAgXSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICBcIndpZHRoXCI6IDMyMCxcbiAgICAgICAgICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwicDAzLXQwMVwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImZvbnRTaXplXCI6IDYwXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIjE1XCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImZvbnRTaXplXCI6IDI0LFxuICAgICAgICAgICAgICAgICAgICBcIm1hcmdpbkxlZnRcIjogOCxcbiAgICAgICAgICAgICAgICAgICAgXCJtYXJnaW5Cb3R0b21cIjogOFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCIlXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwicDAzLXQwMlwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIumihOacn+W5tOWMluaUtuebiueOh1wiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgICAgIFwibWFyZ2luUmlnaHRcIjogNjUsXG4gICAgICAgICAgICBcIndpZHRoXCI6IDI2MFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgICAgICAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICAgICAgICAgICAgICBcImp1c3RpZnlDb250ZW50XCI6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCIjOTk5OTk5XCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiZm9udFNpemVcIjogMjRcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwiMzDlpKnmnJ/pmZBcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiZm9udFNpemVcIjogMjRcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwifFwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJmb250U2l6ZVwiOiAyNFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCIxMDDlhYPotbfotK1cIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYVwiLFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJwMDMtYnRuXCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcImhyZWZcIjogZnVuY3Rpb24gKCkge3JldHVybiAodGhpcy5iYXNlVXJsKSArICdtb2R1bGVzL2JvcnJvdy9wcm9kdWN0RGV0YWlscy5qcyd9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLnq4vljbPmipXotYRcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiYVwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcInAwNFwiXG4gICAgICBdLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgICAgIFwibWFyZ2luTGVmdFwiOiA1MFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJ3YWxsZXQtdGV4dFwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwiI2ZmOTEyNVwiLFxuICAgICAgICAgICAgICAgICAgICBcImZvbnRTaXplXCI6IDM4XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIuS4k+S6q1wiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcIiMzMzMzMzNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJmb250U2l6ZVwiOiAzOFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCIt5L+d5Yip6ZKx5YyFXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJ3YWxsZXQtdGV4dFwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICAgICAgICAgIFwibWFyZ2luVG9wXCI6IDM2LFxuICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCIjOTk5OTk5XCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiZm9udFNpemVcIjogMzBcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi5LiA5YWD6LW35oqVIOaWueS+v+eBtea0u1wiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJpY29uLWNoZWNrXCJcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9udFNpemVcIjogMThcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi56uL5Y2z5p+l55yLXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZVwiLFxuICAgICAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICAgICAgXCJtYXJnaW5SaWdodFwiOiA4MCxcbiAgICAgICAgICAgIFwid2lkdGhcIjogMTMwLFxuICAgICAgICAgICAgXCJoZWlnaHRcIjogMTU4XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJzcmNcIjogXCIuLi9pbWFnZXMvaWNvbi13YWxsZXQucG5nXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcInZiYW9saS1mb290ZXJcIixcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwic2VsZWN0ZWRJbmRleFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuc2VsZWN0ZWRJbmRleH1cbiAgICAgIH1cbiAgICB9XG4gIF1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+L3dlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuL34vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL3NyYy9pbmRleC53ZVxuLy8gbW9kdWxlIGlkID0gMTU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMTIiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ3cmFwcGVyXCI6IHtcbiAgICBcIndpZHRoXCI6IDc1MFxuICB9LFxuICBcInAwMVwiOiB7XG4gICAgXCJoZWlnaHRcIjogNjQsXG4gICAgXCJXZWJraXRBbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJib3JkZXJCb3R0b21cIjogXCIxcHggc29saWQgI2U3ZTdlN1wiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gIH0sXG4gIFwiaWNvbi1icm9hZGNhc3RcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiAxNixcbiAgICBcIndpZHRoXCI6IDI2LFxuICAgIFwiaGVpZ2h0XCI6IDI0XG4gIH0sXG4gIFwicDAyXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImJvcmRlckJvdHRvbVwiOiBcIjFweCBzb2xpZCAjZTdlN2U3XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmZmZmZmXCJcbiAgfSxcbiAgXCJwMDItYVwiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcIndpZHRoXCI6IDI1MCxcbiAgICBcImhlaWdodFwiOiAxOTQsXG4gICAgXCJmb250U2l6ZVwiOiAxNFxuICB9LFxuICBcInAwMi1pbWdcIjoge1xuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcIndpZHRoXCI6IDgwLFxuICAgIFwiaGVpZ2h0XCI6IDgwXG4gIH0sXG4gIFwicDAyLXRleHRcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IDE2LFxuICAgIFwiY29sb3JcIjogXCIjNjY2NjY2XCIsXG4gICAgXCJmb250U2l6ZVwiOiAyNFxuICB9LFxuICBcIm1lZGFsXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJoZWlnaHRcIjogNjAsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IDYwLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwiY29sb3JcIjogXCIjZmY5MTI1XCJcbiAgfSxcbiAgXCJpY29uLW1lZGFsXCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IDEzLFxuICAgIFwibWFyZ2luUmlnaHRcIjogMTMsXG4gICAgXCJ3aWR0aFwiOiAzNCxcbiAgICBcImhlaWdodFwiOiAzMlxuICB9LFxuICBcInAwM1wiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcInNwYWNlLWJldHdlZW5cIixcbiAgICBcImhlaWdodFwiOiAyODAsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmZmZmZmXCJcbiAgfSxcbiAgXCJwMDMtdDAxXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiZmxleC1lbmRcIixcbiAgICBcImNvbG9yXCI6IFwiI2ZmNjUzMVwiXG4gIH0sXG4gIFwicDAzLXQwMlwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogMjgsXG4gICAgXCJjb2xvclwiOiBcIiM5OTk5OTlcIixcbiAgICBcImZvbnRTaXplXCI6IDI0XG4gIH0sXG4gIFwicDAzLWJ0blwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogMjYsXG4gICAgXCJoZWlnaHRcIjogNjgsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IDY4LFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCIsXG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcImZvbnRTaXplXCI6IDI4LFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IDgsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmY5MTI1XCJcbiAgfSxcbiAgXCJwMDRcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogMTQsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogMTQsXG4gICAgXCJoZWlnaHRcIjogMTgwLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gIH0sXG4gIFwiaWNvbi1jaGVja1wiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IDIyLFxuICAgIFwid2lkdGhcIjogOTIsXG4gICAgXCJoZWlnaHRcIjogMjYsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IDI2LFxuICAgIFwiY29sb3JcIjogXCIjZmY2NTMxXCIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICBcImJvcmRlcldpZHRoXCI6IDEsXG4gICAgXCJib3JkZXJTdHlsZVwiOiBcInNvbGlkXCIsXG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiNmZjY1MzFcIlxuICB9LFxuICBcIndhbGxldC10ZXh0XCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIlxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi9zcmMvaW5kZXgud2Vcbi8vIG1vZHVsZSBpZCA9IDE2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDEyIiwiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiBjbGFzcz1cIndyYXBwZXJcIj5cclxuICAgICAgICA8dmJhb2xpLXNsaWRlcj48L3ZiYW9saS1zbGlkZXI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInAwMVwiPlxyXG4gICAgICAgICAgICA8aW1hZ2UgY2xhc3M9XCJpY29uLWJyb2FkY2FzdFwiIHNyYz1cIi4uL2ltYWdlcy9pY29uLWJyb2FkY2FzdC5wbmdcIj48L2ltYWdlPlxyXG4gICAgICAgICAgICA8dmJhb2xpLW1hcnF1ZWUgc3R5bGU9XCJ3aWR0aDogNzAwcHg7XCI+PC92YmFvbGktbWFycXVlZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicDAyXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzPVwicDAyLWFcIiBocmVmPVwiamF2YXNjcmlwdDo7XCI+XHJcbiAgICAgICAgICAgICAgICA8aW1hZ2UgY2xhc3M9XCJwMDItaW1nXCIgc3JjPVwiLi4vaW1hZ2VzL2ljb24tYWN0aXZpdHkucG5nXCI+PC9pbWFnZT5cclxuICAgICAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwicDAyLXRleHRcIj7mtLvliqjkuJPljLo8L3RleHQ+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPGEgY2xhc3M9XCJwMDItYVwiIGhyZWY9XCJqYXZhc2NyaXB0OjtcIj5cclxuICAgICAgICAgICAgICAgIDxpbWFnZSBjbGFzcz1cInAwMi1pbWdcIiBzcmM9XCIuLi9pbWFnZXMvaWNvbi1zZWN1cml0eS5wbmdcIj48L2ltYWdlPlxyXG4gICAgICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJwMDItdGV4dFwiPuWkmumHjeS/nemanDwvdGV4dD5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8YSBjbGFzcz1cInAwMi1hXCIgaHJlZj1cImphdmFzY3JpcHQ6O1wiPlxyXG4gICAgICAgICAgICAgICAgPGltYWdlIGNsYXNzPVwicDAyLWltZ1wiIHNyYz1cIi4uL2ltYWdlcy9pY29uLWludml0ZS5wbmdcIj48L2ltYWdlPlxyXG4gICAgICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJwMDItdGV4dFwiPuWlveWPi+e6ouWMhTwvdGV4dD5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZWRhbFwiPlxyXG4gICAgICAgICAgICA8aW1hZ2UgY2xhc3M9XCJpY29uLW1lZGFsXCIgc3JjPVwiLi4vaW1hZ2VzL2ljb24tbWVkYWwucG5nXCI+PC9pbWFnZT5cclxuICAgICAgICAgICAgPHRleHQgc3R5bGU9XCJmb250LXNpemU6IDI4cHg7XCI+5paw5omL5LiT5LqrPC90ZXh0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwMDNcIj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT1cIndpZHRoOiAzMjBweDsgdGV4dC1hbGlnbjogY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicDAzLXQwMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0IHN0eWxlPVwiZm9udC1zaXplOiA2MHB4O1wiPjE1PC90ZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0IHN0eWxlPVwiZm9udC1zaXplOiAyNHB4OyBtYXJnaW4tbGVmdDogOHB4OyBtYXJnaW4tYm90dG9tOiA4cHg7XCI+JTwvdGV4dD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJwMDMtdDAyXCI+6aKE5pyf5bm05YyW5pS255uK546HPC90ZXh0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT1cIm1hcmdpbi1yaWdodDogNjVweDsgd2lkdGg6IDI2MHB4O1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cImZsZXgtZGlyZWN0aW9uOiByb3c7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgY29sb3I6ICM5OTk7XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHQgc3R5bGU9XCJmb250LXNpemU6IDI0cHg7XCI+MzDlpKnmnJ/pmZA8L3RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHQgc3R5bGU9XCJmb250LXNpemU6IDI0cHg7XCI+fDwvdGV4dD5cclxuICAgICAgICAgICAgICAgICAgICA8dGV4dCBzdHlsZT1cImZvbnQtc2l6ZTogMjRweDtcIj4xMDDlhYPotbfotK08L3RleHQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwicDAzLWJ0blwiIGhyZWY9XCJ7e2Jhc2VVcmx9fW1vZHVsZXMvYm9ycm93L3Byb2R1Y3REZXRhaWxzLmpzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHQ+56uL5Y2z5oqV6LWEPC90ZXh0PlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8YSBjbGFzcz1cInAwNFwiPlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPVwibWFyZ2luLWxlZnQ6IDUwcHg7XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid2FsbGV0LXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGV4dCBzdHlsZT1cImNvbG9yOiAjZmY5MTI1OyBmb250LXNpemU6IDM4cHg7XCI+5LiT5LqrPC90ZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0IHN0eWxlPVwiY29sb3I6ICMzMzM7IGZvbnQtc2l6ZTogMzhweDtcIj4t5L+d5Yip6ZKx5YyFPC90ZXh0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid2FsbGV0LXRleHRcIiBzdHlsZT1cIm1hcmdpbi10b3A6IDM2cHg7IGNvbG9yOiAjOTk5O1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0IHN0eWxlPVwiZm9udC1zaXplOiAzMHB4O1wiPuS4gOWFg+i1t+aKlSDmlrnkvr/ngbXmtLs8L3RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImljb24tY2hlY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRleHQgc3R5bGU9XCJmb250LXNpemU6IDE4cHg7XCI+56uL5Y2z5p+l55yLPC90ZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aW1hZ2Ugc3R5bGU9XCJtYXJnaW4tcmlnaHQ6IDgwcHg7IHdpZHRoOiAxMzBweDsgaGVpZ2h0OiAxNThweDtcIiBzcmM9XCIuLi9pbWFnZXMvaWNvbi13YWxsZXQucG5nXCI+PC9pbWFnZT5cclxuICAgICAgICA8L2E+XHJcbiAgICAgICAgPHZiYW9saS1mb290ZXIgc2VsZWN0ZWQtaW5kZXg9XCJ7e3NlbGVjdGVkSW5kZXh9fVwiPjwvdmJhb2xpLWZvb3Rlcj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG48c3R5bGU+XHJcbi53cmFwcGVyIHsgd2lkdGg6IDc1MHB4OyB9XHJcbi5wMDEgeyBoZWlnaHQ6IDY0cHg7IC13ZWJraXQtYWxpZ24taXRlbXM6Y2VudGVyOyBhbGlnbi1pdGVtczpjZW50ZXI7IGZsZXgtZGlyZWN0aW9uOiByb3c7IGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTdlN2U3OyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyB9XHJcbi5pY29uLWJyb2FkY2FzdCB7IG1hcmdpbi1sZWZ0OiAxNnB4OyB3aWR0aDogMjZweDsgaGVpZ2h0OiAyNHB4OyAgfVxyXG4ucDAyIHsgZmxleC1kaXJlY3Rpb246IHJvdzsganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7IGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTdlN2U3OyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyB9XHJcbi5wMDItYSB7IGRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBhbGlnbi1pdGVtczogY2VudGVyOyB3aWR0aDogMjUwcHg7IGhlaWdodDogMTk0cHg7IGZvbnQtc2l6ZTogMTRweDsgfVxyXG4ucDAyLWltZyB7IGRpc3BsYXk6IGZsZXg7IHdpZHRoOiA4MHB4OyBoZWlnaHQ6IDgwcHg7IH1cclxuLnAwMi10ZXh0IHsgbWFyZ2luLXRvcDogMTZweDsgY29sb3I6ICM2NjY7IGZvbnQtc2l6ZTogMjRweDsgfVxyXG4ubWVkYWwgeyBmbGV4LWRpcmVjdGlvbjogcm93OyBkaXNwbGF5OiBmbGV4OyBoZWlnaHQ6IDYwcHg7IGxpbmUtaGVpZ2h0OiA2MHB4OyBhbGlnbi1pdGVtczogY2VudGVyOyBjb2xvcjogI2ZmOTEyNTt9XHJcbi5pY29uLW1lZGFsIHsgZGlzcGxheTogZmxleDsgbWFyZ2luLWxlZnQ6IDEzcHg7IG1hcmdpbi1yaWdodDogMTNweDsgd2lkdGg6IDM0cHg7IGhlaWdodDogMzJweDsgfVxyXG4ucDAzIHsgZmxleC1kaXJlY3Rpb246IHJvdzsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBoZWlnaHQ6IDI4MHB4OyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyB9XHJcbi5wMDMtdDAxIHsgZmxleC1kaXJlY3Rpb246IHJvdzsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IGFsaWduLWl0ZW1zOiBmbGV4LWVuZDsgY29sb3I6ICNmZjY1MzE7IH1cclxuLnAwMy10MDIgeyBtYXJnaW4tdG9wOiAyOHB4OyBjb2xvcjogIzk5OTsgZm9udC1zaXplOiAyNHB4OyB9XHJcbi5wMDMtYnRuIHsgbWFyZ2luLXRvcDogMjZweDtoZWlnaHQ6IDY4cHg7IGxpbmUtaGVpZ2h0OiA2OHB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7IGNvbG9yOiAjZmZmOyBmb250LXNpemU6IDI4cHg7IGJvcmRlci1yYWRpdXM6IDhweDsgYmFja2dyb3VuZC1jb2xvcjogI2ZmOTEyNTsgfVxyXG4ucDA0IHsgZmxleC1kaXJlY3Rpb246IHJvdzsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBhbGlnbi1pdGVtczogY2VudGVyOyBtYXJnaW4tdG9wOiAxNHB4OyBtYXJnaW4tYm90dG9tOiAxNHB4OyBoZWlnaHQ6IDE4MHB4OyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyB9XHJcbi5pY29uLWNoZWNrIHsgbWFyZ2luLWxlZnQ6IDIycHg7IHdpZHRoOiA5MnB4OyBoZWlnaHQ6IDI2cHg7IGxpbmUtaGVpZ2h0OiAyNnB4OyBjb2xvcjogI2ZmNjUzMTsgdGV4dC1hbGlnbjogY2VudGVyOyBib3JkZXItd2lkdGg6IDFweDsgYm9yZGVyLXN0eWxlOiBzb2xpZDsgYm9yZGVyLWNvbG9yOiAjZmY2NTMxOyB9XHJcbi53YWxsZXQtdGV4dCB7IGZsZXgtZGlyZWN0aW9uOiByb3c7IH1cclxuPC9zdHlsZT5cclxuPHNjcmlwdD5cclxucmVxdWlyZSgnd2VleC1jb21wb25lbnRzJyk7XHJcbnJlcXVpcmUoJy4vaW5jbHVkZS92YmFvbGktc2xpZGVyLndlJyk7XHJcbnJlcXVpcmUoJy4vaW5jbHVkZS92YmFvbGktbWFycXVlZS53ZScpO1xyXG5yZXF1aXJlKCcuL2luY2x1ZGUvdmJhb2xpLWZvb3Rlci53ZScpO1xyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIGRhdGE6IHtcclxuICAgICAgICBkaXI6ICdkaXN0JyxcclxuICAgICAgICBiYXNlVXJsOiAnJyxcclxuICAgICAgICBzZWxlY3RlZEluZGV4OiAwLFxyXG4gICAgICAgIHNsaWRlckxpc3Q6IFt7XHJcbiAgICAgICAgICAgIGl0ZW1JZDogJzUyMDQyMTE2MzYzNCcsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnaXRlbTEnLFxyXG4gICAgICAgICAgICBwaWN0dXJlVXJsOiAnLi9pbWFnZXMvc2xpZGVyMDEucG5nJ1xyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgaXRlbUlkOiAnNTIyMDc2Nzc3NDYyJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdpdGVtMicsXHJcbiAgICAgICAgICAgIHBpY3R1cmVVcmw6ICcuL2ltYWdlcy9zbGlkZXIwMi5wbmcnXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBpdGVtSWQ6ICc1MjIwNzY3Nzc0NjInLFxyXG4gICAgICAgICAgICB0aXRsZTogJ2l0ZW4zJyxcclxuICAgICAgICAgICAgcGljdHVyZVVybDogJy4vaW1hZ2VzL3NsaWRlcjAzLnBuZydcclxuICAgICAgICB9XVxyXG4gICAgfSxcclxuICAgIGNyZWF0ZWQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBidW5kbGVVcmwgPSB0aGlzLiRnZXRDb25maWcoKS5idW5kbGVVcmw7XHJcbiAgICAgICAgdmFyIG5hdGl2ZUJhc2U7XHJcbiAgICAgICAgdmFyIGlzQW5kcm9pZEFzc2V0cyA9IGJ1bmRsZVVybC5pbmRleE9mKCdmaWxlOi8vYXNzZXRzLycpID49IDA7XHJcbiAgICAgICAgdmFyIGlzaU9TQXNzZXRzID0gYnVuZGxlVXJsLmluZGV4T2YoJ2ZpbGU6Ly8vJykgPj0gMCAmJiBidW5kbGVVcmwuaW5kZXhPZignV2VleERlbW8uYXBwJykgPiAwO1xyXG4gICAgICAgIGlmIChpc0FuZHJvaWRBc3NldHMpIHtcclxuICAgICAgICAgICAgbmF0aXZlQmFzZSA9ICdmaWxlOi8vYXNzZXRzLyc7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpc2lPU0Fzc2V0cykge1xyXG4gICAgICAgICAgICAvLyBmaWxlOi8vL3Zhci9tb2JpbGUvQ29udGFpbmVycy9CdW5kbGUvQXBwbGljYXRpb24ve2lkfS9XZWV4RGVtby5hcHAvXHJcbiAgICAgICAgICAgIC8vIGZpbGU6Ly8vVXNlcnMve3VzZXJ9L0xpYnJhcnkvRGV2ZWxvcGVyL0NvcmVTaW11bGF0b3IvRGV2aWNlcy97aWR9L2RhdGEvQ29udGFpbmVycy9CdW5kbGUvQXBwbGljYXRpb24ve2lkfS9XZWV4RGVtby5hcHAvXHJcbiAgICAgICAgICAgIG5hdGl2ZUJhc2UgPSBidW5kbGVVcmwuc3Vic3RyaW5nKDAsIGJ1bmRsZVVybC5sYXN0SW5kZXhPZignLycpICsgMSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIGhvc3QgPSAnbG9jYWxob3N0OjgwODAnO1xyXG4gICAgICAgICAgICB2YXIgbWF0Y2hlcyA9IC9cXC9cXC8oW15cXC9dKz8pXFwvLy5leGVjKHRoaXMuJGdldENvbmZpZygpLmJ1bmRsZVVybCk7XHJcbiAgICAgICAgICAgIGlmIChtYXRjaGVzICYmIG1hdGNoZXMubGVuZ3RoID49IDIpIHtcclxuICAgICAgICAgICAgICAgIGhvc3QgPSBtYXRjaGVzWzFdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5hdGl2ZUJhc2UgPSAnaHR0cDovLycgKyBob3N0ICsgJy8nICsgdGhpcy5kaXIgKyAnLyc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBoNUJhc2UgPSAnLi9pbmRleC5odG1sP3BhZ2U9Li8nICsgdGhpcy5kaXIgKyAnLyc7XHJcbiAgICAgICAgLy8gaW4gTmF0aXZlXHJcbiAgICAgICAgdGhpcy5iYXNlVXJsID0gbmF0aXZlQmFzZTtcclxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgLy8gaW4gQnJvd3NlciBvciBXZWJWaWV3XHJcbiAgICAgICAgICAgIHRoaXMuYmFzZVVybCA9IGg1QmFzZTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG59XHJcbjwvc2NyaXB0PlxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXgud2U/NzM1MjZlMTAiLCJ2YXIgX193ZWV4X3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL3ZiYW9saS1zbGlkZXIud2VcIilcbnZhciBfX3dlZXhfc3R5bGVfXyA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c3R5bGVzIS4vdmJhb2xpLXNsaWRlci53ZVwiKVxudmFyIF9fd2VleF9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9zY3JpcHQuanMhYmFiZWwtbG9hZGVyP3ByZXNldHNbXT1DOlxcXFx2YmFvbGktd2VleFxcXFx2YmFvbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXByZXNldC1lczIwMTUmcHJlc2V0cz1DOlxcXFx2YmFvbGktd2VleFxcXFx2YmFvbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXByZXNldC1lczIwMTUmcGx1Z2luc1tdPUM6XFxcXHZiYW9saS13ZWV4XFxcXHZiYW9saVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJnBsdWdpbnM9QzpcXFxcdmJhb2xpLXdlZXhcXFxcdmJhb2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmY29tbWVudHM9ZmFsc2UhLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdHMhLi92YmFvbGktc2xpZGVyLndlXCIpXG5cbl9fd2VleF9kZWZpbmVfXygnQHdlZXgtY29tcG9uZW50L3ZiYW9saS1zbGlkZXInLCBbXSwgZnVuY3Rpb24oX193ZWV4X3JlcXVpcmVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X21vZHVsZV9fKSB7XG5cbiAgICBfX3dlZXhfc2NyaXB0X18oX193ZWV4X21vZHVsZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfcmVxdWlyZV9fKVxuICAgIGlmIChfX3dlZXhfZXhwb3J0c19fLl9fZXNNb2R1bGUgJiYgX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0KSB7XG4gICAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cyA9IF9fd2VleF9leHBvcnRzX18uZGVmYXVsdFxuICAgIH1cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnRlbXBsYXRlID0gX193ZWV4X3RlbXBsYXRlX19cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnN0eWxlID0gX193ZWV4X3N0eWxlX19cblxufSlcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2luY2x1ZGUvdmJhb2xpLXNsaWRlci53ZVxuLy8gbW9kdWxlIGlkID0gMTYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMTIiLCJ2YXIgX193ZWV4X3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL3ZiYW9saS1tYXJxdWVlLndlXCIpXG52YXIgX193ZWV4X3NjcmlwdF9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL3NjcmlwdC5qcyFiYWJlbC1sb2FkZXI/cHJlc2V0c1tdPUM6XFxcXHZiYW9saS13ZWV4XFxcXHZiYW9saVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcHJlc2V0LWVzMjAxNSZwcmVzZXRzPUM6XFxcXHZiYW9saS13ZWV4XFxcXHZiYW9saVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcHJlc2V0LWVzMjAxNSZwbHVnaW5zW109QzpcXFxcdmJhb2xpLXdlZXhcXFxcdmJhb2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmcGx1Z2lucz1DOlxcXFx2YmFvbGktd2VleFxcXFx2YmFvbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZjb21tZW50cz1mYWxzZSEuLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c2NyaXB0cyEuL3ZiYW9saS1tYXJxdWVlLndlXCIpXG5cbl9fd2VleF9kZWZpbmVfXygnQHdlZXgtY29tcG9uZW50L3ZiYW9saS1tYXJxdWVlJywgW10sIGZ1bmN0aW9uKF9fd2VleF9yZXF1aXJlX18sIF9fd2VleF9leHBvcnRzX18sIF9fd2VleF9tb2R1bGVfXykge1xuXG4gICAgX193ZWV4X3NjcmlwdF9fKF9fd2VleF9tb2R1bGVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X3JlcXVpcmVfXylcbiAgICBpZiAoX193ZWV4X2V4cG9ydHNfXy5fX2VzTW9kdWxlICYmIF9fd2VleF9leHBvcnRzX18uZGVmYXVsdCkge1xuICAgICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMgPSBfX3dlZXhfZXhwb3J0c19fLmRlZmF1bHRcbiAgICB9XG5cbiAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cy50ZW1wbGF0ZSA9IF9fd2VleF90ZW1wbGF0ZV9fXG5cbn0pXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbmNsdWRlL3ZiYW9saS1tYXJxdWVlLndlXG4vLyBtb2R1bGUgaWQgPSAxNjNcbi8vIG1vZHVsZSBjaHVua3MgPSAxMiIsInJlcXVpcmUoXCIuL3ZiYW9saS1mb290ZXItdGFiLndlXCIpXG52YXIgX193ZWV4X3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL3ZiYW9saS1mb290ZXIud2VcIilcbnZhciBfX3dlZXhfc2NyaXB0X18gPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvc2NyaXB0LmpzIWJhYmVsLWxvYWRlcj9wcmVzZXRzW109QzpcXFxcdmJhb2xpLXdlZXhcXFxcdmJhb2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnByZXNldHM9QzpcXFxcdmJhb2xpLXdlZXhcXFxcdmJhb2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnBsdWdpbnNbXT1DOlxcXFx2YmFvbGktd2VleFxcXFx2YmFvbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZwbHVnaW5zPUM6XFxcXHZiYW9saS13ZWV4XFxcXHZiYW9saVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJmNvbW1lbnRzPWZhbHNlIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zY3JpcHRzIS4vdmJhb2xpLWZvb3Rlci53ZVwiKVxuXG5fX3dlZXhfZGVmaW5lX18oJ0B3ZWV4LWNvbXBvbmVudC92YmFvbGktZm9vdGVyJywgW10sIGZ1bmN0aW9uKF9fd2VleF9yZXF1aXJlX18sIF9fd2VleF9leHBvcnRzX18sIF9fd2VleF9tb2R1bGVfXykge1xuXG4gICAgX193ZWV4X3NjcmlwdF9fKF9fd2VleF9tb2R1bGVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X3JlcXVpcmVfXylcbiAgICBpZiAoX193ZWV4X2V4cG9ydHNfXy5fX2VzTW9kdWxlICYmIF9fd2VleF9leHBvcnRzX18uZGVmYXVsdCkge1xuICAgICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMgPSBfX3dlZXhfZXhwb3J0c19fLmRlZmF1bHRcbiAgICB9XG5cbiAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cy50ZW1wbGF0ZSA9IF9fd2VleF90ZW1wbGF0ZV9fXG5cbn0pXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbmNsdWRlL3ZiYW9saS1mb290ZXIud2Vcbi8vIG1vZHVsZSBpZCA9IDE2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDEyIDE5IDIwIl0sInNvdXJjZVJvb3QiOiIifQ==