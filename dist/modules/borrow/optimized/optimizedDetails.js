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

	var __weex_template__ = __webpack_require__(314)
	var __weex_style__ = __webpack_require__(315)
	var __weex_script__ = __webpack_require__(316)
	
	__weex_define__('@weex-component/b53d8e31fdbaf194836ab7866f758591', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})
	
	__weex_bootstrap__('@weex-component/b53d8e31fdbaf194836ab7866f758591',undefined,undefined)

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
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(15);
	__webpack_require__(19);
	__webpack_require__(23);
	__webpack_require__(27);
	__webpack_require__(31);
	__webpack_require__(35);
	__webpack_require__(76);
	__webpack_require__(80);
	__webpack_require__(84);
	__webpack_require__(88);
	__webpack_require__(89);


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(16)
	var __weex_style__ = __webpack_require__(17)
	var __weex_script__ = __webpack_require__(18)
	
	__weex_define__('@weex-component/wxc-button', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})


/***/ },
/* 16 */
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
/* 17 */
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
/* 18 */
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
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(20)
	var __weex_style__ = __webpack_require__(21)
	var __weex_script__ = __webpack_require__(22)
	
	__weex_define__('@weex-component/wxc-hn', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})


/***/ },
/* 20 */
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
/* 21 */
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
/* 22 */
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
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(24)
	var __weex_style__ = __webpack_require__(25)
	var __weex_script__ = __webpack_require__(26)
	
	__weex_define__('@weex-component/wxc-list-item', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})


/***/ },
/* 24 */
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
/* 25 */
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
/* 26 */
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
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(28)
	var __weex_style__ = __webpack_require__(29)
	var __weex_script__ = __webpack_require__(30)
	
	__weex_define__('@weex-component/wxc-panel', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})


/***/ },
/* 28 */
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
/* 29 */
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
/* 30 */
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
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(32)
	var __weex_style__ = __webpack_require__(33)
	var __weex_script__ = __webpack_require__(34)
	
	__weex_define__('@weex-component/wxc-tip', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})


/***/ },
/* 32 */
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
/* 33 */
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
/* 34 */
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
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(36)
	var __weex_style__ = __webpack_require__(37)
	var __weex_script__ = __webpack_require__(38)
	
	__weex_define__('@weex-component/wxc-countdown', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})


/***/ },
/* 36 */
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
/* 37 */
/***/ function(module, exports) {

	module.exports = {
	  "wrap": {
	    "overflow": "hidden"
	  }
	}

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';
	
	var _assign = __webpack_require__(39);
	
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
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(40), __esModule: true };

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(41);
	module.exports = __webpack_require__(44).Object.assign;

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(42);
	
	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(57)});

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(43)
	  , core      = __webpack_require__(44)
	  , ctx       = __webpack_require__(45)
	  , hide      = __webpack_require__(47)
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
/* 43 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 44 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(46);
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
/* 46 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(48)
	  , createDesc = __webpack_require__(56);
	module.exports = __webpack_require__(52) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(49)
	  , IE8_DOM_DEFINE = __webpack_require__(51)
	  , toPrimitive    = __webpack_require__(55)
	  , dP             = Object.defineProperty;
	
	exports.f = __webpack_require__(52) ? Object.defineProperty : function defineProperty(O, P, Attributes){
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
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(50);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 50 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(52) && !__webpack_require__(53)(function(){
	  return Object.defineProperty(__webpack_require__(54)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(53)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 53 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(50)
	  , document = __webpack_require__(43).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(50);
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
/* 56 */
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
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(58)
	  , gOPS     = __webpack_require__(73)
	  , pIE      = __webpack_require__(74)
	  , toObject = __webpack_require__(75)
	  , IObject  = __webpack_require__(62)
	  , $assign  = Object.assign;
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(53)(function(){
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
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(59)
	  , enumBugKeys = __webpack_require__(72);
	
	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(60)
	  , toIObject    = __webpack_require__(61)
	  , arrayIndexOf = __webpack_require__(65)(false)
	  , IE_PROTO     = __webpack_require__(69)('IE_PROTO');
	
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
/* 60 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(62)
	  , defined = __webpack_require__(64);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(63);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 63 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 64 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(61)
	  , toLength  = __webpack_require__(66)
	  , toIndex   = __webpack_require__(68);
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
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(67)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 67 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(67)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(70)('keys')
	  , uid    = __webpack_require__(71);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(43)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 71 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 72 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 73 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 74 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(64);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(77)
	var __weex_style__ = __webpack_require__(78)
	var __weex_script__ = __webpack_require__(79)
	
	__weex_define__('@weex-component/wxc-marquee', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})


/***/ },
/* 77 */
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
/* 78 */
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
/* 79 */
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
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(81)
	var __weex_style__ = __webpack_require__(82)
	var __weex_script__ = __webpack_require__(83)
	
	__weex_define__('@weex-component/wxc-navbar', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})


/***/ },
/* 81 */
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
/* 82 */
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
/* 83 */
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
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(80)
	var __weex_template__ = __webpack_require__(85)
	var __weex_style__ = __webpack_require__(86)
	var __weex_script__ = __webpack_require__(87)
	
	__weex_define__('@weex-component/wxc-navpage', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})


/***/ },
/* 85 */
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
/* 86 */
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
/* 87 */
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
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(89)
	var __weex_template__ = __webpack_require__(93)
	var __weex_style__ = __webpack_require__(94)
	var __weex_script__ = __webpack_require__(95)
	
	__weex_define__('@weex-component/wxc-tabbar', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})


/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(90)
	var __weex_style__ = __webpack_require__(91)
	var __weex_script__ = __webpack_require__(92)
	
	__weex_define__('@weex-component/wxc-tabitem', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
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
/* 91 */
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
/* 92 */
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
/* 93 */
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
/* 94 */
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
/* 95 */
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
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
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
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(190)
	var __weex_style__ = __webpack_require__(191)
	var __weex_script__ = __webpack_require__(192)
	
	__weex_define__('@weex-component/vbaoli-tab-item', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})


/***/ },
/* 190 */
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
/* 191 */
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
/* 192 */
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
/* 193 */
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
/* 194 */
/***/ function(module, exports) {

	module.exports = {
	  "tab-bar": {
	    "flexDirection": "row",
	    "height": 74,
	    "backgroundColor": "#ffffff"
	  }
	}

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';
	
	var dom = __weex_require__('@weex-module/dom');
	__webpack_require__(14);
	var apis = __webpack_require__(196);
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
/* 196 */
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

/***/ },
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(189)
	var __weex_template__ = __webpack_require__(193)
	var __weex_style__ = __webpack_require__(194)
	var __weex_script__ = __webpack_require__(195)
	
	__weex_define__('@weex-component/vbaoli-tab', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})


/***/ },
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "wrapper"
	  ],
	  "children": [
	    {
	      "type": "div",
	      "children": [
	        {
	          "type": "vbaoli-tab",
	          "attr": {
	            "tabItems": function () {return this.tabItems}
	          }
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 315 */
/***/ function(module, exports) {

	module.exports = {
	  "wrapper": {
	    "width": 750,
	    "overflow": "scroll",
	    "WebkitOverflowScrolling": "touch"
	  }
	}

/***/ },
/* 316 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';
	
	__webpack_require__(14);
	__webpack_require__(217);
	module.exports = {
	    data: function () {return {
	        dir: 'dist',
	        tabItems: [{
	            index: 0,
	            title: '优选保利介绍',
	            icon: '',
	            src: 'modules/borrow/optimized/optimizedIntro.js',
	            titleColor: '',
	            display: 'block'
	        }, {
	            index: 1,
	            title: '项目详情',
	            icon: '',
	            src: 'modules/borrow/optimized/optimizedInfo.js',
	            titleColor: '',
	            display: 'none'
	        }, {
	            index: 2,
	            title: '加入记录',
	            icon: '',
	            src: 'modules/borrow/optimized/optimizedJoin.js',
	            titleColor: '',
	            display: 'none'
	        }, {
	            index: 3,
	            title: '常见问题',
	            icon: '',
	            src: 'modules/borrow/optimized/optimizedQ.js',
	            titleColor: '',
	            display: 'none'
	        }]
	    }}
	};}
	/* generated by weex-loader */


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNzJlMWFmMGJmYmQ0M2Q4NjAzODU/ODU0YSoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2JvcnJvdy9vcHRpbWl6ZWQvb3B0aW1pemVkRGV0YWlscy53ZT81ZDE3Iiwid2VicGFjazovLy8uL34vd2VleC1jb21wb25lbnRzL2luZGV4LmpzPzBlMTcqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtY29tcG9uZW50cy9zcmMvd3hjLWJ1dHRvbi53ZT9jMzhmKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtYnV0dG9uLndlPzhlNjcqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1idXR0b24ud2U/Y2ViMyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtY29tcG9uZW50cy9zcmMvd3hjLWJ1dHRvbi53ZT80ODJkKioqKioqKioqKioqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1obi53ZT9jN2FhKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtaG4ud2U/YWEyNyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtY29tcG9uZW50cy9zcmMvd3hjLWhuLndlPzY3YTgqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1obi53ZT81NjE1KioqKioqKioqKioqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1saXN0LWl0ZW0ud2U/NDFiYSoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtY29tcG9uZW50cy9zcmMvd3hjLWxpc3QtaXRlbS53ZT81NTRjKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtbGlzdC1pdGVtLndlPzVhYWEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1saXN0LWl0ZW0ud2U/NThhOSoqKioqKioqKioqKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtcGFuZWwud2U/NGMwNioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtY29tcG9uZW50cy9zcmMvd3hjLXBhbmVsLndlPzc1OTAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1wYW5lbC53ZT9jY2JmKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtcGFuZWwud2U/N2YzNSoqKioqKioqKioqKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtdGlwLndlPzVlOGQqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy10aXAud2U/YTZjZSoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtY29tcG9uZW50cy9zcmMvd3hjLXRpcC53ZT8zZDY0KioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtdGlwLndlPzFkN2MqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtY29tcG9uZW50cy9zcmMvd3hjLWNvdW50ZG93bi53ZT82MzBlKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtY291bnRkb3duLndlPzhjYTIqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1jb3VudGRvd24ud2U/Y2RlMSoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtY29tcG9uZW50cy9zcmMvd3hjLWNvdW50ZG93bi53ZT85M2Y3KioqKioqKioqKioqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnbi5qcz9lNmNhKioqKioqKioqKioqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnbi5qcz84MGU0KioqKioqKioqKioqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbi5qcz85MDA3KioqKioqKioqKioqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzP2VjZTIqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2dsb2JhbC5qcz83N2FhKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzPzFiNjIqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2N0eC5qcz9jZTAwKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzP2Q1M2UqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hpZGUuanM/YTZkYSoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwLmpzPzQxMTYqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLW9iamVjdC5qcz8wZGEzKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanM/MjRjOCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanM/YmQxZioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanM/NzA1MSoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZmFpbHMuanM/OTM1ZCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qcz9hYjQ0KioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanM/NDlhNCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qcz8xZTg2KioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtYXNzaWduLmpzPzVjMGMqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy5qcz9mNWJjKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qcz9mY2VhKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanM/ZDg1MCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW9iamVjdC5qcz82OTQ2KioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pb2JqZWN0LmpzPzVjZjkqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvZi5qcz80OGVhKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZWZpbmVkLmpzPzQ1ZDMqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzPzYxOTkqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWxlbmd0aC5qcz82MmE3KioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzP2Y2NWYqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWluZGV4LmpzPzlmZDQqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC1rZXkuanM/MmE2YyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLmpzPzdiNmMqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VpZC5qcz9lOGNkKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzPzc1OTgqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BzLmpzP2E1ZmIqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1waWUuanM/ZDBkMioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tb2JqZWN0LmpzP2I1YzAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtbWFycXVlZS53ZT9kOGNlKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtbWFycXVlZS53ZT82OWE2KioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtbWFycXVlZS53ZT8wZTQzKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtbWFycXVlZS53ZT81OWVlKioqKioqKioqKioqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1uYXZiYXIud2U/ZDgwZioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtY29tcG9uZW50cy9zcmMvd3hjLW5hdmJhci53ZT9jOTIzKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtbmF2YmFyLndlPzgyYzMqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1uYXZiYXIud2U/NjAwMioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtbmF2cGFnZS53ZT80MWNmKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtbmF2cGFnZS53ZT9iNDMyKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtbmF2cGFnZS53ZT9mY2QzKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtbmF2cGFnZS53ZT8wZGFkKioqKioqKioqKioqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy10YWJiYXIud2U/MzI0ZCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtY29tcG9uZW50cy9zcmMvd3hjLXRhYml0ZW0ud2U/MDAyOCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtY29tcG9uZW50cy9zcmMvd3hjLXRhYml0ZW0ud2U/MzI2ZioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtY29tcG9uZW50cy9zcmMvd3hjLXRhYml0ZW0ud2U/MmQ2MyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtY29tcG9uZW50cy9zcmMvd3hjLXRhYml0ZW0ud2U/NjcxZCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtdGFiYmFyLndlP2U0YjEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy10YWJiYXIud2U/OWEzMyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtY29tcG9uZW50cy9zcmMvd3hjLXRhYmJhci53ZT8xZWRjKioqKioqKioqKioqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luY2x1ZGUvdmJhb2xpLXRhYi1pdGVtLndlPzJjZDIqKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jbHVkZS92YmFvbGktdGFiLWl0ZW0ud2U/ZjE2YSoqKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jbHVkZS92YmFvbGktdGFiLWl0ZW0ud2U/N2JiZCoqKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jbHVkZS92YmFvbGktdGFiLWl0ZW0ud2U/ODM2NioqKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jbHVkZS92YmFvbGktdGFiLndlPzI5OTMqKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jbHVkZS92YmFvbGktdGFiLndlPzc3OWYqKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jbHVkZS92YmFvbGktdGFiLndlP2M4Y2MqKioqIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vYXBpLmpzP2MzYjUqKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jbHVkZS92YmFvbGktdGFiLndlPzg5MmEqKioqIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2JvcnJvdy9vcHRpbWl6ZWQvb3B0aW1pemVkRGV0YWlscy53ZT9lMTM1Iiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2JvcnJvdy9vcHRpbWl6ZWQvb3B0aW1pemVkRGV0YWlscy53ZT81YTI5Iiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2JvcnJvdy9vcHRpbWl6ZWQvb3B0aW1pemVkRGV0YWlscy53ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ3RDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsRUFBQzs7QUFFRCwyRjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDVkE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLEVBQUM7Ozs7Ozs7QUNmRDtBQUNBO0FBQ0EsNkJBQTRCLDhEQUE4RDtBQUMxRjtBQUNBO0FBQ0E7QUFDQSxpQ0FBZ0MsMEVBQTBFO0FBQzFHO0FBQ0EsK0JBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNB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QUFDQTtBQUNBLEU7Ozs7Ozs7O0FDU0E7QUFDQTtBQUNBO0FBQ0E7O2tCQUdBO21CQUNBO3dCQUNBO3dCQUNBOzBCQUVBO0FBTkE7aUNBT0E7MkNBQ0E7d0NBQ0E7d0RBQ0E7eUNBQ0E7a0RBQ0E7QUFDQTs0QkFDQTs2Q0FDQTtvQ0FDQTtzQ0FDQTtrQ0FDQTsyQkFDQTtBQUNBO0FBQ0E7OzRDQUVBOzREQUNBOzZDQUNBO2lDQUNBOytDQUNBO3VDQUNBO3dCQUNBOytDQUNBO3VDQUNBO0FBQ0E7QUFDQTtBQUVBO0FBYkE7QUF2QkE7Ozs7Ozs7O0FDbkJBO0FBQ0E7QUFDQTs7O0FBR0EsZ0RBQStDOztBQUUvQztBQUNBO0FBQ0E7QUFDQSxFQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUZBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7QUNLQTtBQUNBO0FBQ0E7O2NBR0E7O29CQUVBO29CQUNBO21CQUNBO2tCQUNBO3lCQUNBO3NCQUNBO0FBTkE7b0JBUUE7b0JBQ0E7bUJBQ0E7a0JBQ0E7eUJBQ0E7c0JBQ0E7QUFOQTtvQkFRQTtvQkFDQTttQkFDQTtrQkFDQTt5QkFDQTtzQkFDQTtBQU5BO29CQVFBO29CQUNBO21CQUNBO2tCQUNBO3lCQUNBO3NCQUdBO0FBUkE7QUF2QkE7QUFEQSIsImZpbGUiOiJtb2R1bGVzXFxib3Jyb3dcXG9wdGltaXplZFxcb3B0aW1pemVkRGV0YWlscy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDcyZTFhZjBiZmJkNDNkODYwMzg1IiwidmFyIF9fd2VleF90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi9vcHRpbWl6ZWREZXRhaWxzLndlXCIpXG52YXIgX193ZWV4X3N0eWxlX18gPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL29wdGltaXplZERldGFpbHMud2VcIilcbnZhciBfX3dlZXhfc2NyaXB0X18gPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvc2NyaXB0LmpzIWJhYmVsLWxvYWRlcj9wcmVzZXRzW109QzpcXFxcdmJhb2xpLXdlZXhcXFxcdmJhb2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnByZXNldHM9QzpcXFxcdmJhb2xpLXdlZXhcXFxcdmJhb2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnBsdWdpbnNbXT1DOlxcXFx2YmFvbGktd2VleFxcXFx2YmFvbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZwbHVnaW5zPUM6XFxcXHZiYW9saS13ZWV4XFxcXHZiYW9saVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJmNvbW1lbnRzPWZhbHNlIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zY3JpcHRzIS4vb3B0aW1pemVkRGV0YWlscy53ZVwiKVxuXG5fX3dlZXhfZGVmaW5lX18oJ0B3ZWV4LWNvbXBvbmVudC9iNTNkOGUzMWZkYmFmMTk0ODM2YWI3ODY2Zjc1ODU5MScsIFtdLCBmdW5jdGlvbihfX3dlZXhfcmVxdWlyZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfbW9kdWxlX18pIHtcblxuICAgIF9fd2VleF9zY3JpcHRfXyhfX3dlZXhfbW9kdWxlX18sIF9fd2VleF9leHBvcnRzX18sIF9fd2VleF9yZXF1aXJlX18pXG4gICAgaWYgKF9fd2VleF9leHBvcnRzX18uX19lc01vZHVsZSAmJiBfX3dlZXhfZXhwb3J0c19fLmRlZmF1bHQpIHtcbiAgICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzID0gX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0XG4gICAgfVxuXG4gICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMudGVtcGxhdGUgPSBfX3dlZXhfdGVtcGxhdGVfX1xuXG4gICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMuc3R5bGUgPSBfX3dlZXhfc3R5bGVfX1xuXG59KVxuXG5fX3dlZXhfYm9vdHN0cmFwX18oJ0B3ZWV4LWNvbXBvbmVudC9iNTNkOGUzMWZkYmFmMTk0ODM2YWI3ODY2Zjc1ODU5MScsdW5kZWZpbmVkLHVuZGVmaW5lZClcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tb2R1bGVzL2JvcnJvdy9vcHRpbWl6ZWQvb3B0aW1pemVkRGV0YWlscy53ZT9lbnRyeT10cnVlXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gNjYiLCJyZXF1aXJlKCcuL3NyYy93eGMtYnV0dG9uLndlJyk7XG5yZXF1aXJlKCcuL3NyYy93eGMtaG4ud2UnKTtcbnJlcXVpcmUoJy4vc3JjL3d4Yy1saXN0LWl0ZW0ud2UnKTtcbnJlcXVpcmUoJy4vc3JjL3d4Yy1wYW5lbC53ZScpO1xucmVxdWlyZSgnLi9zcmMvd3hjLXRpcC53ZScpO1xucmVxdWlyZSgnLi9zcmMvd3hjLWNvdW50ZG93bi53ZScpO1xucmVxdWlyZSgnLi9zcmMvd3hjLW1hcnF1ZWUud2UnKTtcbnJlcXVpcmUoJy4vc3JjL3d4Yy1uYXZiYXIud2UnKTtcbnJlcXVpcmUoJy4vc3JjL3d4Yy1uYXZwYWdlLndlJyk7XG5yZXF1aXJlKCcuL3NyYy93eGMtdGFiYmFyLndlJyk7XG5yZXF1aXJlKCcuL3NyYy93eGMtdGFiaXRlbS53ZScpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtY29tcG9uZW50cy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDQgOCAxNyAxOCAyMiAyNCAyNiAyNyAyOCAyOSAzMSAzMiAzNiAzNyA0MyA0OCA0OSA1MSA1MiA1MyA1NCA1NSA1NiA1OSA2MSA2MiA2MyA2NCA2NSA2NiA3MCA3MiA3MyA3NCA3OCA4MCA4MSIsInZhciBfX3dlZXhfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vd3hjLWJ1dHRvbi53ZVwiKVxudmFyIF9fd2VleF9zdHlsZV9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi93eGMtYnV0dG9uLndlXCIpXG52YXIgX193ZWV4X3NjcmlwdF9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvc2NyaXB0LmpzIWJhYmVsLWxvYWRlcj9wcmVzZXRzW109QzpcXFxcdmJhb2xpLXdlZXhcXFxcdmJhb2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnByZXNldHM9QzpcXFxcdmJhb2xpLXdlZXhcXFxcdmJhb2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnBsdWdpbnNbXT1DOlxcXFx2YmFvbGktd2VleFxcXFx2YmFvbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZwbHVnaW5zPUM6XFxcXHZiYW9saS13ZWV4XFxcXHZiYW9saVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJmNvbW1lbnRzPWZhbHNlIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdHMhLi93eGMtYnV0dG9uLndlXCIpXG5cbl9fd2VleF9kZWZpbmVfXygnQHdlZXgtY29tcG9uZW50L3d4Yy1idXR0b24nLCBbXSwgZnVuY3Rpb24oX193ZWV4X3JlcXVpcmVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X21vZHVsZV9fKSB7XG5cbiAgICBfX3dlZXhfc2NyaXB0X18oX193ZWV4X21vZHVsZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfcmVxdWlyZV9fKVxuICAgIGlmIChfX3dlZXhfZXhwb3J0c19fLl9fZXNNb2R1bGUgJiYgX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0KSB7XG4gICAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cyA9IF9fd2VleF9leHBvcnRzX18uZGVmYXVsdFxuICAgIH1cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnRlbXBsYXRlID0gX193ZWV4X3RlbXBsYXRlX19cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnN0eWxlID0gX193ZWV4X3N0eWxlX19cblxufSlcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1idXR0b24ud2Vcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMiA0IDggMTcgMTggMjIgMjQgMjYgMjcgMjggMjkgMzEgMzIgMzYgMzcgNDMgNDggNDkgNTEgNTIgNTMgNTQgNTUgNTYgNTkgNjEgNjIgNjMgNjQgNjUgNjYgNzAgNzIgNzMgNzQgNzggODAgODEiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gIFwiY2xhc3NMaXN0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gWydidG4nLCAnYnRuLScgKyAodGhpcy50eXBlKSwgJ2J0bi1zei0nICsgKHRoaXMuc2l6ZSldfSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogZnVuY3Rpb24gKCkge3JldHVybiBbJ2J0bi10eHQnLCAnYnRuLXR4dC0nICsgKHRoaXMudHlwZSksICdidG4tdHh0LXN6LScgKyAodGhpcy5zaXplKV19LFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudmFsdWV9XG4gICAgICB9XG4gICAgfVxuICBdXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi9+L3dlZXgtY29tcG9uZW50cy9zcmMvd3hjLWJ1dHRvbi53ZVxuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDQgOCAxNyAxOCAyMiAyNCAyNiAyNyAyOCAyOSAzMSAzMiAzNiAzNyA0MyA0OCA0OSA1MSA1MiA1MyA1NCA1NSA1NiA1OSA2MSA2MiA2MyA2NCA2NSA2NiA3MCA3MiA3MyA3NCA3OCA4MCA4MSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcImJ0blwiOiB7XG4gICAgXCJtYXJnaW5Cb3R0b21cIjogMCxcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJib3JkZXJXaWR0aFwiOiAxLFxuICAgIFwiYm9yZGVyU3R5bGVcIjogXCJzb2xpZFwiLFxuICAgIFwiYm9yZGVyQ29sb3JcIjogXCIjMzMzMzMzXCJcbiAgfSxcbiAgXCJidG4tZGVmYXVsdFwiOiB7XG4gICAgXCJjb2xvclwiOiBcInJnYig1MSw1MSw1MSlcIlxuICB9LFxuICBcImJ0bi1wcmltYXJ5XCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcInJnYig0MCw5NiwxNDQpXCIsXG4gICAgXCJib3JkZXJDb2xvclwiOiBcInJnYig0MCw5NiwxNDQpXCJcbiAgfSxcbiAgXCJidG4tc3VjY2Vzc1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCJyZ2IoOTIsMTg0LDkyKVwiLFxuICAgIFwiYm9yZGVyQ29sb3JcIjogXCJyZ2IoNzYsMTc0LDc2KVwiXG4gIH0sXG4gIFwiYnRuLWluZm9cIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwicmdiKDkxLDE5MiwyMjIpXCIsXG4gICAgXCJib3JkZXJDb2xvclwiOiBcInJnYig3MCwxODQsMjE4KVwiXG4gIH0sXG4gIFwiYnRuLXdhcm5pbmdcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwicmdiKDI0MCwxNzMsNzgpXCIsXG4gICAgXCJib3JkZXJDb2xvclwiOiBcInJnYigyMzgsMTYyLDU0KVwiXG4gIH0sXG4gIFwiYnRuLWRhbmdlclwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCJyZ2IoMjE3LDgzLDc5KVwiLFxuICAgIFwiYm9yZGVyQ29sb3JcIjogXCJyZ2IoMjEyLDYzLDU4KVwiXG4gIH0sXG4gIFwiYnRuLWxpbmtcIjoge1xuICAgIFwiYm9yZGVyQ29sb3JcIjogXCJyZ2JhKDAsMCwwLDApXCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogMFxuICB9LFxuICBcImJ0bi10eHQtZGVmYXVsdFwiOiB7XG4gICAgXCJjb2xvclwiOiBcInJnYig1MSw1MSw1MSlcIlxuICB9LFxuICBcImJ0bi10eHQtcHJpbWFyeVwiOiB7XG4gICAgXCJjb2xvclwiOiBcInJnYigyNTUsMjU1LDI1NSlcIlxuICB9LFxuICBcImJ0bi10eHQtc3VjY2Vzc1wiOiB7XG4gICAgXCJjb2xvclwiOiBcInJnYigyNTUsMjU1LDI1NSlcIlxuICB9LFxuICBcImJ0bi10eHQtaW5mb1wiOiB7XG4gICAgXCJjb2xvclwiOiBcInJnYigyNTUsMjU1LDI1NSlcIlxuICB9LFxuICBcImJ0bi10eHQtd2FybmluZ1wiOiB7XG4gICAgXCJjb2xvclwiOiBcInJnYigyNTUsMjU1LDI1NSlcIlxuICB9LFxuICBcImJ0bi10eHQtZGFuZ2VyXCI6IHtcbiAgICBcImNvbG9yXCI6IFwicmdiKDI1NSwyNTUsMjU1KVwiXG4gIH0sXG4gIFwiYnRuLXR4dC1saW5rXCI6IHtcbiAgICBcImNvbG9yXCI6IFwicmdiKDUxLDEyMiwxODMpXCJcbiAgfSxcbiAgXCJidG4tc3otbGFyZ2VcIjoge1xuICAgIFwid2lkdGhcIjogMzAwLFxuICAgIFwiaGVpZ2h0XCI6IDEwMCxcbiAgICBcInBhZGRpbmdUb3BcIjogMjUsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IDI1LFxuICAgIFwicGFkZGluZ0xlZnRcIjogNDAsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogNDAsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogMTVcbiAgfSxcbiAgXCJidG4tc3otbWlkZGxlXCI6IHtcbiAgICBcIndpZHRoXCI6IDI0MCxcbiAgICBcImhlaWdodFwiOiA4MCxcbiAgICBcInBhZGRpbmdUb3BcIjogMTUsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IDE1LFxuICAgIFwicGFkZGluZ0xlZnRcIjogMzAsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogMzAsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogMTBcbiAgfSxcbiAgXCJidG4tc3otc21hbGxcIjoge1xuICAgIFwid2lkdGhcIjogMTcwLFxuICAgIFwiaGVpZ2h0XCI6IDYwLFxuICAgIFwicGFkZGluZ1RvcFwiOiAxMixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogMTIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiAyNSxcbiAgICBcInBhZGRpbmdSaWdodFwiOiAyNSxcbiAgICBcImJvcmRlclJhZGl1c1wiOiA3XG4gIH0sXG4gIFwiYnRuLXR4dC1zei1sYXJnZVwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiA0NVxuICB9LFxuICBcImJ0bi10eHQtc3otbWlkZGxlXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IDM1XG4gIH0sXG4gIFwiYnRuLXR4dC1zei1zbWFsbFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiAzMFxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi9+L3dlZXgtY29tcG9uZW50cy9zcmMvd3hjLWJ1dHRvbi53ZVxuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDQgOCAxNyAxOCAyMiAyNCAyNiAyNyAyOCAyOSAzMSAzMiAzNiAzNyA0MyA0OCA0OSA1MSA1MiA1MyA1NCA1NSA1NiA1OSA2MSA2MiA2MyA2NCA2NSA2NiA3MCA3MiA3MyA3NCA3OCA4MCA4MSIsIjwhLS0gSW5zcGlyZWQgYnkgYm9vdHN0cmFwIGh0dHA6Ly9nZXRib290c3RyYXAuY29tLyAtLT5cbjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImJ0biBidG4te3t0eXBlfX0gYnRuLXN6LXt7c2l6ZX19XCI+XG4gICAgPHRleHQgY2xhc3M9XCJidG4tdHh0IGJ0bi10eHQte3t0eXBlfX0gYnRuLXR4dC1zei17e3NpemV9fVwiPnt7dmFsdWV9fTwvdGV4dD5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBkYXRhOiB7XG4gICAgICB0eXBlOiAnZGVmYXVsdCcsXG4gICAgICBzaXplOiAnbGFyZ2UnLFxuICAgICAgdmFsdWU6ICcnXG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgfVxuICB9XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICAuYnRuIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItY29sb3I6ICMzMzM7XG5cbiAgICAvKndoaXRlLXNwYWNlOiBub3dyYXA7Ki9cbiAgICAvKnZlcnRpY2FsLWFsaWduOiBtaWRkbGU7Ki9cbiAgICAvKnRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uOyovXG4gICAgLypjdXJzb3I6IHBvaW50ZXI7Ki9cbiAgICAvKi13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7Ki9cbiAgICAvKmJhY2tncm91bmQtaW1hZ2U6IG5vbmU7Ki9cbiAgICAvKmJvcmRlci1pbWFnZS1zb3VyY2U6IGluaXRpYWw7Ki9cbiAgICAvKmJvcmRlci1pbWFnZS1zbGljZTogaW5pdGlhbDsqL1xuICAgIC8qYm9yZGVyLWltYWdlLXdpZHRoOiBpbml0aWFsOyovXG4gICAgLypib3JkZXItaW1hZ2Utb3V0c2V0OiBpbml0aWFsOyovXG4gICAgLypib3JkZXItaW1hZ2UtcmVwZWF0OiBpbml0aWFsOyovXG4gIH1cblxuICAuYnRuLXR4dCB7XG5cbiAgfVxuXG4gIC8qKlRZUEUqKi9cblxuICAuYnRuLWRlZmF1bHQge1xuICAgIGNvbG9yOiByZ2IoNTEsIDUxLCA1MSk7XG4gIH1cblxuICAuYnRuLXByaW1hcnkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MCwgOTYsIDE0NCk7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoNDAsIDk2LCAxNDQpO1xuICB9XG5cbiAgLmJ0bi1zdWNjZXNzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTIsIDE4NCwgOTIpO1xuICAgIGJvcmRlci1jb2xvcjogcmdiKDc2LCAxNzQsIDc2KTtcbiAgfVxuXG4gIC5idG4taW5mbyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDkxLCAxOTIsIDIyMik7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoNzAsIDE4NCwgMjE4KTtcbiAgfVxuXG4gIC5idG4td2FybmluZyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMTczLCA3OCk7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMjM4LCAxNjIsIDU0KTtcbiAgfVxuXG4gIC5idG4tZGFuZ2VyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE3LCA4MywgNzkpO1xuICAgIGJvcmRlci1jb2xvcjogcmdiKDIxMiwgNjMsIDU4KTtcbiAgfVxuXG4gIC5idG4tbGluayB7XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICB9XG5cbiAgLmJ0bi10eHQtZGVmYXVsdCB7XG4gICAgY29sb3I6IHJnYig1MSwgNTEsIDUxKTtcbiAgfVxuXG4gIC5idG4tdHh0LXByaW1hcnkge1xuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIH1cblxuICAuYnRuLXR4dC1zdWNjZXNzIHtcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICB9XG5cbiAgLmJ0bi10eHQtaW5mbyB7XG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgfVxuXG4gIC5idG4tdHh0LXdhcm5pbmcge1xuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIH1cblxuICAuYnRuLXR4dC1kYW5nZXIge1xuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIH1cblxuICAuYnRuLXR4dC1saW5rIHtcbiAgICBjb2xvcjogcmdiKDUxLCAxMjIsIDE4Myk7XG4gICAgLypmb250LXdlaWdodDogNDAwOyovXG4gIH1cblxuICAvKipTSVpFKiovXG5cbiAgLmJ0bi1zei1sYXJnZSB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgcGFkZGluZy10b3A6IDI1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDI1cHg7XG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG4gICAgLypsaW5lLWhlaWdodDogMS4zMzMzMzsqL1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIH1cblxuICAuYnRuLXN6LW1pZGRsZSB7XG4gICAgd2lkdGg6IDI0MHB4O1xuICAgIGhlaWdodDogODBweDtcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgICAvKmxpbmUtaGVpZ2h0OiAxLjQyODU3OyovXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgfVxuXG4gIC5idG4tc3otc21hbGwge1xuICAgIHdpZHRoOiAxNzBweDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgcGFkZGluZy10b3A6IDEycHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEycHg7XG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDI1cHg7XG4gICAgLypsaW5lLWhlaWdodDogMS41OyovXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICB9XG5cbiAgLmJ0bi10eHQtc3otbGFyZ2Uge1xuICAgIGZvbnQtc2l6ZTogNDVweDtcbiAgfVxuXG4gIC5idG4tdHh0LXN6LW1pZGRsZSB7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICB9XG5cbiAgLmJ0bi10eHQtc3otc21hbGwge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgfVxuXG4gIC8qRElTQUJMRUQqL1xuXG4gIC5kaXNhYmxlZCB7XG5cbiAgfVxuXG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtYnV0dG9uLndlPzRkM2M2MDVmIiwidmFyIF9fd2VleF90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi93eGMtaG4ud2VcIilcbnZhciBfX3dlZXhfc3R5bGVfXyA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c3R5bGVzIS4vd3hjLWhuLndlXCIpXG52YXIgX193ZWV4X3NjcmlwdF9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvc2NyaXB0LmpzIWJhYmVsLWxvYWRlcj9wcmVzZXRzW109QzpcXFxcdmJhb2xpLXdlZXhcXFxcdmJhb2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnByZXNldHM9QzpcXFxcdmJhb2xpLXdlZXhcXFxcdmJhb2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnBsdWdpbnNbXT1DOlxcXFx2YmFvbGktd2VleFxcXFx2YmFvbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZwbHVnaW5zPUM6XFxcXHZiYW9saS13ZWV4XFxcXHZiYW9saVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJmNvbW1lbnRzPWZhbHNlIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdHMhLi93eGMtaG4ud2VcIilcblxuX193ZWV4X2RlZmluZV9fKCdAd2VleC1jb21wb25lbnQvd3hjLWhuJywgW10sIGZ1bmN0aW9uKF9fd2VleF9yZXF1aXJlX18sIF9fd2VleF9leHBvcnRzX18sIF9fd2VleF9tb2R1bGVfXykge1xuXG4gICAgX193ZWV4X3NjcmlwdF9fKF9fd2VleF9tb2R1bGVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X3JlcXVpcmVfXylcbiAgICBpZiAoX193ZWV4X2V4cG9ydHNfXy5fX2VzTW9kdWxlICYmIF9fd2VleF9leHBvcnRzX18uZGVmYXVsdCkge1xuICAgICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMgPSBfX3dlZXhfZXhwb3J0c19fLmRlZmF1bHRcbiAgICB9XG5cbiAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cy50ZW1wbGF0ZSA9IF9fd2VleF90ZW1wbGF0ZV9fXG5cbiAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cy5zdHlsZSA9IF9fd2VleF9zdHlsZV9fXG5cbn0pXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtaG4ud2Vcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMiA0IDggMTcgMTggMjIgMjQgMjYgMjcgMjggMjkgMzEgMzIgMzYgMzcgNDMgNDggNDkgNTEgNTIgNTMgNTQgNTUgNTYgNTkgNjEgNjIgNjMgNjQgNjUgNjYgNzAgNzIgNzMgNzQgNzggODAgODEiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gIFwiY2xhc3NMaXN0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gWydoJyArICh0aGlzLmxldmVsKV19LFxuICBcInN0eWxlXCI6IHtcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogZnVuY3Rpb24gKCkge3JldHVybiBbJ3R4dC1oJyArICh0aGlzLmxldmVsKV19LFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudmFsdWV9XG4gICAgICB9XG4gICAgfVxuICBdXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi9+L3dlZXgtY29tcG9uZW50cy9zcmMvd3hjLWhuLndlXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDIgNCA4IDE3IDE4IDIyIDI0IDI2IDI3IDI4IDI5IDMxIDMyIDM2IDM3IDQzIDQ4IDQ5IDUxIDUyIDUzIDU0IDU1IDU2IDU5IDYxIDYyIDYzIDY0IDY1IDY2IDcwIDcyIDczIDc0IDc4IDgwIDgxIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiaDFcIjoge1xuICAgIFwiaGVpZ2h0XCI6IDExMCxcbiAgICBcInBhZGRpbmdUb3BcIjogMjAsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IDIwXG4gIH0sXG4gIFwiaDJcIjoge1xuICAgIFwiaGVpZ2h0XCI6IDExMCxcbiAgICBcInBhZGRpbmdUb3BcIjogMjAsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IDIwXG4gIH0sXG4gIFwiaDNcIjoge1xuICAgIFwiaGVpZ2h0XCI6IDExMCxcbiAgICBcInBhZGRpbmdUb3BcIjogMjAsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IDIwXG4gIH0sXG4gIFwidHh0LWgxXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IDcwXG4gIH0sXG4gIFwidHh0LWgyXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IDUyXG4gIH0sXG4gIFwidHh0LWgzXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IDQyXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL34vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtaG4ud2Vcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMiA0IDggMTcgMTggMjIgMjQgMjYgMjcgMjggMjkgMzEgMzIgMzYgMzcgNDMgNDggNDkgNTEgNTIgNTMgNTQgNTUgNTYgNTkgNjEgNjIgNjMgNjQgNjUgNjYgNzAgNzIgNzMgNzQgNzggODAgODEiLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJoe3tsZXZlbH19XCIgc3R5bGU9XCJqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcIj5cbiAgICA8dGV4dCBjbGFzcz1cInR4dC1oe3tsZXZlbH19XCI+e3t2YWx1ZX19PC90ZXh0PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gIG1vZHVsZS5leHBvcnRzID0ge1xuICAgIGRhdGE6IHtcbiAgICAgIGxldmVsOiAxLFxuICAgICAgdmFsdWU6ICcnXG4gICAgfSxcbiAgICBtZXRob2RzOiB7fVxuICB9XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICAuaDEge1xuICAgIGhlaWdodDogMTEwcHg7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIH1cblxuICAuaDIge1xuICAgIGhlaWdodDogMTEwcHg7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIH1cblxuICAuaDMge1xuICAgIGhlaWdodDogMTEwcHg7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIH1cbiAgXG5cbiAgLnR4dC1oMSB7XG4gICAgZm9udC1zaXplOiA3MHB4O1xuICB9XG5cbiAgLnR4dC1oMiB7XG4gICAgZm9udC1zaXplOiA1MnB4O1xuICB9XG5cbiAgLnR4dC1oMyB7XG4gICAgZm9udC1zaXplOiA0MnB4O1xuICB9XG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtaG4ud2U/MTY5OTdjYjMiLCJ2YXIgX193ZWV4X3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL3d4Yy1saXN0LWl0ZW0ud2VcIilcbnZhciBfX3dlZXhfc3R5bGVfXyA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c3R5bGVzIS4vd3hjLWxpc3QtaXRlbS53ZVwiKVxudmFyIF9fd2VleF9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL3NjcmlwdC5qcyFiYWJlbC1sb2FkZXI/cHJlc2V0c1tdPUM6XFxcXHZiYW9saS13ZWV4XFxcXHZiYW9saVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcHJlc2V0LWVzMjAxNSZwcmVzZXRzPUM6XFxcXHZiYW9saS13ZWV4XFxcXHZiYW9saVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcHJlc2V0LWVzMjAxNSZwbHVnaW5zW109QzpcXFxcdmJhb2xpLXdlZXhcXFxcdmJhb2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmcGx1Z2lucz1DOlxcXFx2YmFvbGktd2VleFxcXFx2YmFvbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZjb21tZW50cz1mYWxzZSEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zY3JpcHRzIS4vd3hjLWxpc3QtaXRlbS53ZVwiKVxuXG5fX3dlZXhfZGVmaW5lX18oJ0B3ZWV4LWNvbXBvbmVudC93eGMtbGlzdC1pdGVtJywgW10sIGZ1bmN0aW9uKF9fd2VleF9yZXF1aXJlX18sIF9fd2VleF9leHBvcnRzX18sIF9fd2VleF9tb2R1bGVfXykge1xuXG4gICAgX193ZWV4X3NjcmlwdF9fKF9fd2VleF9tb2R1bGVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X3JlcXVpcmVfXylcbiAgICBpZiAoX193ZWV4X2V4cG9ydHNfXy5fX2VzTW9kdWxlICYmIF9fd2VleF9leHBvcnRzX18uZGVmYXVsdCkge1xuICAgICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMgPSBfX3dlZXhfZXhwb3J0c19fLmRlZmF1bHRcbiAgICB9XG5cbiAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cy50ZW1wbGF0ZSA9IF9fd2VleF90ZW1wbGF0ZV9fXG5cbiAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cy5zdHlsZSA9IF9fd2VleF9zdHlsZV9fXG5cbn0pXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtbGlzdC1pdGVtLndlXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDIgNCA4IDE3IDE4IDIyIDI0IDI2IDI3IDI4IDI5IDMxIDMyIDM2IDM3IDQzIDQ4IDQ5IDUxIDUyIDUzIDU0IDU1IDU2IDU5IDYxIDYyIDYzIDY0IDY1IDY2IDcwIDcyIDczIDc0IDc4IDgwIDgxIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImRpdlwiLFxuICBcImNsYXNzTGlzdFwiOiBbXG4gICAgXCJpdGVtXCJcbiAgXSxcbiAgXCJldmVudHNcIjoge1xuICAgIFwidG91Y2hzdGFydFwiOiBcInRvdWNoc3RhcnRcIixcbiAgICBcInRvdWNoZW5kXCI6IFwidG91Y2hlbmRcIlxuICB9LFxuICBcInN0eWxlXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuYmdDb2xvcn1cbiAgfSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiY29udGVudFwiXG4gICAgfVxuICBdXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi9+L3dlZXgtY29tcG9uZW50cy9zcmMvd3hjLWxpc3QtaXRlbS53ZVxuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDQgOCAxNyAxOCAyMiAyNCAyNiAyNyAyOCAyOSAzMSAzMiAzNiAzNyA0MyA0OCA0OSA1MSA1MiA1MyA1NCA1NSA1NiA1OSA2MSA2MiA2MyA2NCA2NSA2NiA3MCA3MiA3MyA3NCA3OCA4MCA4MSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcIml0ZW1cIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiAyNSxcbiAgICBcInBhZGRpbmdCb3R0b21cIjogMjUsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiAzNSxcbiAgICBcInBhZGRpbmdSaWdodFwiOiAzNSxcbiAgICBcImhlaWdodFwiOiAxNjAsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwiYm9yZGVyQm90dG9tV2lkdGhcIjogMSxcbiAgICBcImJvcmRlckNvbG9yXCI6IFwiI2RkZGRkZFwiXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL34vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtbGlzdC1pdGVtLndlXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDIgNCA4IDE3IDE4IDIyIDI0IDI2IDI3IDI4IDI5IDMxIDMyIDM2IDM3IDQzIDQ4IDQ5IDUxIDUyIDUzIDU0IDU1IDU2IDU5IDYxIDYyIDYzIDY0IDY1IDY2IDcwIDcyIDczIDc0IDc4IDgwIDgxIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiaXRlbVwiIG9udG91Y2hzdGFydD1cInRvdWNoc3RhcnRcIiBvbnRvdWNoZW5kPVwidG91Y2hlbmRcIlxuICAgICAgICAgICAgIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjp7e2JnQ29sb3J9fTtcIj5cbiAgICA8Y29udGVudD48L2NvbnRlbnQ+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgbW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgZGF0YToge1xuICAgICAgYmdDb2xvcjogJyNmZmZmZmYnXG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICB0b3VjaHN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gRklYTUUgYW5kcm9pZCB0b3VjaFxuICAgICAgICAvLyBUT0RPIGFkYXB0aXZlIG9wcG9zaXRlIGJnQ29sb3Jcbi8vICAgICAgICB0aGlzLmJnQ29sb3IgPSAnI2U2ZTZlNic7XG4gICAgICB9LFxuICAgICAgdG91Y2hlbmQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBGSVhNRSBhbmRyb2lkIHRvdWNoZW5kIG5vdCB0cmlnZ2VyZWRcbi8vICAgICAgICB0aGlzLmJnQ29sb3IgPSAnI2ZmZmZmZic7XG4gICAgICB9XG4gICAgfVxuICB9XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICAuaXRlbSB7XG4gICAgcGFkZGluZy10b3A6IDI1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDI1cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAzNXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDM1cHg7XG4gICAgaGVpZ2h0OiAxNjBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAvKm1hcmdpbi1ib3R0b206IDFweDsgRlVUVVJFICovXG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xuICAgIGJvcmRlci1jb2xvcjogI2RkZGRkZDtcbiAgfVxuPC9zdHlsZT5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3dlZXgtY29tcG9uZW50cy9zcmMvd3hjLWxpc3QtaXRlbS53ZT80NDNjZWZiZCIsInZhciBfX3dlZXhfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vd3hjLXBhbmVsLndlXCIpXG52YXIgX193ZWV4X3N0eWxlX18gPSByZXF1aXJlKFwiISEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL3d4Yy1wYW5lbC53ZVwiKVxudmFyIF9fd2VleF9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL3NjcmlwdC5qcyFiYWJlbC1sb2FkZXI/cHJlc2V0c1tdPUM6XFxcXHZiYW9saS13ZWV4XFxcXHZiYW9saVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcHJlc2V0LWVzMjAxNSZwcmVzZXRzPUM6XFxcXHZiYW9saS13ZWV4XFxcXHZiYW9saVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcHJlc2V0LWVzMjAxNSZwbHVnaW5zW109QzpcXFxcdmJhb2xpLXdlZXhcXFxcdmJhb2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmcGx1Z2lucz1DOlxcXFx2YmFvbGktd2VleFxcXFx2YmFvbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZjb21tZW50cz1mYWxzZSEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zY3JpcHRzIS4vd3hjLXBhbmVsLndlXCIpXG5cbl9fd2VleF9kZWZpbmVfXygnQHdlZXgtY29tcG9uZW50L3d4Yy1wYW5lbCcsIFtdLCBmdW5jdGlvbihfX3dlZXhfcmVxdWlyZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfbW9kdWxlX18pIHtcblxuICAgIF9fd2VleF9zY3JpcHRfXyhfX3dlZXhfbW9kdWxlX18sIF9fd2VleF9leHBvcnRzX18sIF9fd2VleF9yZXF1aXJlX18pXG4gICAgaWYgKF9fd2VleF9leHBvcnRzX18uX19lc01vZHVsZSAmJiBfX3dlZXhfZXhwb3J0c19fLmRlZmF1bHQpIHtcbiAgICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzID0gX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0XG4gICAgfVxuXG4gICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMudGVtcGxhdGUgPSBfX3dlZXhfdGVtcGxhdGVfX1xuXG4gICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMuc3R5bGUgPSBfX3dlZXhfc3R5bGVfX1xuXG59KVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtY29tcG9uZW50cy9zcmMvd3hjLXBhbmVsLndlXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDIgNCA4IDE3IDE4IDIyIDI0IDI2IDI3IDI4IDI5IDMxIDMyIDM2IDM3IDQzIDQ4IDQ5IDUxIDUyIDUzIDU0IDU1IDU2IDU5IDYxIDYyIDYzIDY0IDY1IDY2IDcwIDcyIDczIDc0IDc4IDgwIDgxIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImRpdlwiLFxuICBcImNsYXNzTGlzdFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIFsncGFuZWwnLCAncGFuZWwtJyArICh0aGlzLnR5cGUpXX0sXG4gIFwic3R5bGVcIjoge1xuICAgIFwiYm9yZGVyV2lkdGhcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmJvcmRlcn1cbiAgfSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogZnVuY3Rpb24gKCkge3JldHVybiBbJ3BhbmVsLWhlYWRlcicsICdwYW5lbC1oZWFkZXItJyArICh0aGlzLnR5cGUpXX0sXG4gICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgXCJwYWRkaW5nVG9wXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5wYWRkaW5nSGVhZH0sXG4gICAgICAgIFwicGFkZGluZ0JvdHRvbVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMucGFkZGluZ0hlYWR9LFxuICAgICAgICBcInBhZGRpbmdMZWZ0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5wYWRkaW5nSGVhZCoxLjV9LFxuICAgICAgICBcInBhZGRpbmdSaWdodFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMucGFkZGluZ0hlYWQqMS41fVxuICAgICAgfSxcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnRpdGxlfVxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIFsncGFuZWwtYm9keScsICdwYW5lbC1ib2R5LScgKyAodGhpcy50eXBlKV19LFxuICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgIFwicGFkZGluZ1RvcFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMucGFkZGluZ0JvZHl9LFxuICAgICAgICBcInBhZGRpbmdCb3R0b21cIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnBhZGRpbmdCb2R5fSxcbiAgICAgICAgXCJwYWRkaW5nTGVmdFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMucGFkZGluZ0JvZHkqMS41fSxcbiAgICAgICAgXCJwYWRkaW5nUmlnaHRcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnBhZGRpbmdCb2R5KjEuNX1cbiAgICAgIH0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImNvbnRlbnRcIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICBdXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi9+L3dlZXgtY29tcG9uZW50cy9zcmMvd3hjLXBhbmVsLndlXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDIgNCA4IDE3IDE4IDIyIDI0IDI2IDI3IDI4IDI5IDMxIDMyIDM2IDM3IDQzIDQ4IDQ5IDUxIDUyIDUzIDU0IDU1IDU2IDU5IDYxIDYyIDYzIDY0IDY1IDY2IDcwIDcyIDczIDc0IDc4IDgwIDgxIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwicGFuZWxcIjoge1xuICAgIFwibWFyZ2luQm90dG9tXCI6IDIwLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwiYm9yZGVyQ29sb3JcIjogXCIjZGRkZGRkXCIsXG4gICAgXCJib3JkZXJXaWR0aFwiOiAxXG4gIH0sXG4gIFwicGFuZWwtcHJpbWFyeVwiOiB7XG4gICAgXCJib3JkZXJDb2xvclwiOiBcInJnYig0MCw5NiwxNDQpXCJcbiAgfSxcbiAgXCJwYW5lbC1zdWNjZXNzXCI6IHtcbiAgICBcImJvcmRlckNvbG9yXCI6IFwicmdiKDc2LDE3NCw3NilcIlxuICB9LFxuICBcInBhbmVsLWluZm9cIjoge1xuICAgIFwiYm9yZGVyQ29sb3JcIjogXCJyZ2IoNzAsMTg0LDIxOClcIlxuICB9LFxuICBcInBhbmVsLXdhcm5pbmdcIjoge1xuICAgIFwiYm9yZGVyQ29sb3JcIjogXCJyZ2IoMjM4LDE2Miw1NClcIlxuICB9LFxuICBcInBhbmVsLWRhbmdlclwiOiB7XG4gICAgXCJib3JkZXJDb2xvclwiOiBcInJnYigyMTIsNjMsNTgpXCJcbiAgfSxcbiAgXCJwYW5lbC1oZWFkZXJcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2Y1ZjVmNVwiLFxuICAgIFwiZm9udFNpemVcIjogNDAsXG4gICAgXCJjb2xvclwiOiBcIiMzMzMzMzNcIlxuICB9LFxuICBcInBhbmVsLWhlYWRlci1wcmltYXJ5XCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcInJnYig0MCw5NiwxNDQpXCIsXG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIlxuICB9LFxuICBcInBhbmVsLWhlYWRlci1zdWNjZXNzXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcInJnYig5MiwxODQsOTIpXCIsXG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIlxuICB9LFxuICBcInBhbmVsLWhlYWRlci1pbmZvXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcInJnYig5MSwxOTIsMjIyKVwiLFxuICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCJcbiAgfSxcbiAgXCJwYW5lbC1oZWFkZXItd2FybmluZ1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCJyZ2IoMjQwLDE3Myw3OClcIixcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gIH0sXG4gIFwicGFuZWwtaGVhZGVyLWRhbmdlclwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCJyZ2IoMjE3LDgzLDc5KVwiLFxuICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCJcbiAgfSxcbiAgXCJwYW5lbC1ib2R5XCI6IHt9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi9+L3dlZXgtY29tcG9uZW50cy9zcmMvd3hjLXBhbmVsLndlXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDIgNCA4IDE3IDE4IDIyIDI0IDI2IDI3IDI4IDI5IDMxIDMyIDM2IDM3IDQzIDQ4IDQ5IDUxIDUyIDUzIDU0IDU1IDU2IDU5IDYxIDYyIDYzIDY0IDY1IDY2IDcwIDcyIDczIDc0IDc4IDgwIDgxIiwiPCEtLSBJbnNwaXJlZCBieSBib290c3RyYXAgaHR0cDovL2dldGJvb3RzdHJhcC5jb20vIC0tPlxuPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwicGFuZWwgcGFuZWwte3t0eXBlfX1cIiBzdHlsZT1cImJvcmRlci13aWR0aDp7e2JvcmRlcn19XCI+XG4gICAgPHRleHQgY2xhc3M9XCJwYW5lbC1oZWFkZXIgcGFuZWwtaGVhZGVyLXt7dHlwZX19XCJcbiAgICAgICAgICBzdHlsZT1cInBhZGRpbmctdG9wOnt7cGFkZGluZ0hlYWR9fTtwYWRkaW5nLWJvdHRvbTp7e3BhZGRpbmdIZWFkfX07cGFkZGluZy1sZWZ0Ont7cGFkZGluZ0hlYWQqMS41fX07cGFkZGluZy1yaWdodDp7e3BhZGRpbmdIZWFkKjEuNX19XCI+XG4gICAgICB7e3RpdGxlfX1cbiAgICA8L3RleHQ+XG4gICAgPGRpdiBjbGFzcz1cInBhbmVsLWJvZHkgcGFuZWwtYm9keS17e3R5cGV9fVwiXG4gICAgICAgICBzdHlsZT1cInBhZGRpbmctdG9wOnt7cGFkZGluZ0JvZHl9fTtwYWRkaW5nLWJvdHRvbTp7e3BhZGRpbmdCb2R5fX07cGFkZGluZy1sZWZ0Ont7cGFkZGluZ0JvZHkqMS41fX07cGFkZGluZy1yaWdodDp7e3BhZGRpbmdCb2R5KjEuNX19XCI+XG4gICAgICA8Y29udGVudD48L2NvbnRlbnQ+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgbW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgZGF0YToge1xuICAgICAgdHlwZTogJ2RlZmF1bHQnLFxuICAgICAgdGl0bGU6ICcnLFxuICAgICAgcGFkZGluZ0JvZHk6IDIwLFxuICAgICAgcGFkZGluZ0hlYWQ6IDIwLFxuICAgICAgZGF0YUNsYXNzOiAnJywgLy8gRklYTUUgdHJhbnNmZXIgY2xhc3NcbiAgICAgIGJvcmRlcjogMFxuICAgIH0sXG4gICAgcmVhZHk6IGZ1bmN0aW9uKCkge1xuICAgIH1cbiAgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbiAgLnBhbmVsIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgLypib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDsqL1xuICAgIC8qYm9yZGVyLXJhZGl1czogMTBweDsqL1xuICAgIC8qLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLDAsMCwuMDUpOyovXG4gICAgLypib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLDAsMCwuMDUpOyovXG4gICAgYm9yZGVyLWNvbG9yOiAjZGRkZGRkO1xuICAgIGJvcmRlci13aWR0aDogMXB4O1xuICB9XG5cbiAgLnBhbmVsLWRlZmF1bHQge1xuICB9XG5cbiAgLnBhbmVsLXByaW1hcnkge1xuICAgIGJvcmRlci1jb2xvcjogcmdiKDQwLCA5NiwgMTQ0KTtcbiAgfVxuXG4gIC5wYW5lbC1zdWNjZXNzIHtcbiAgICBib3JkZXItY29sb3I6IHJnYig3NiwgMTc0LCA3Nik7XG5cbiAgfVxuXG4gIC5wYW5lbC1pbmZvIHtcbiAgICBib3JkZXItY29sb3I6IHJnYig3MCwgMTg0LCAyMTgpO1xuXG4gIH1cblxuICAucGFuZWwtd2FybmluZyB7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMjM4LCAxNjIsIDU0KTtcblxuICB9XG5cbiAgLnBhbmVsLWRhbmdlciB7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMjEyLCA2MywgNTgpO1xuXG4gIH1cblxuICAucGFuZWwtaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAvKnBhZGRpbmctbGVmdDogMTJweDsqL1xuICAgIC8qcGFkZGluZy1yaWdodDogMTJweDsqL1xuICAgIC8qcGFkZGluZy10b3A6IDIwcHg7Ki9cbiAgICAvKnBhZGRpbmctYm90dG9tOiAyMHB4OyovXG4gICAgY29sb3I6ICMzMzM7XG4gIH1cblxuICAucGFuZWwtaGVhZGVyLWRlZmF1bHQge1xuICB9XG5cbiAgLnBhbmVsLWhlYWRlci1wcmltYXJ5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDAsIDk2LCAxNDQpO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICB9XG5cbiAgLnBhbmVsLWhlYWRlci1zdWNjZXNzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTIsIDE4NCwgOTIpO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICB9XG5cbiAgLnBhbmVsLWhlYWRlci1pbmZvIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTEsIDE5MiwgMjIyKTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgfVxuXG4gIC5wYW5lbC1oZWFkZXItd2FybmluZyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMTczLCA3OCk7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gIH1cblxuICAucGFuZWwtaGVhZGVyLWRhbmdlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNywgODMsIDc5KTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgfVxuXG4gIC5wYW5lbC1ib2R5IHtcbiAgICAvKnBhZGRpbmctbGVmdDogMTJweDsqL1xuICAgIC8qcGFkZGluZy1yaWdodDogMTJweDsqL1xuICAgIC8qcGFkZGluZy10b3A6IDIwcHg7Ki9cbiAgICAvKnBhZGRpbmctYm90dG9tOiAyMHB4OyovXG4gIH1cblxuICAucGFuZWwtYm9keS1kZWZhdWx0IHtcbiAgfVxuXG4gIC5wYW5lbC1ib2R5LXByaW1hcnkge1xuICB9XG5cbiAgLnBhbmVsLWJvZHktc3VjY2VzcyB7XG4gIH1cblxuICAucGFuZWwtYm9keS1pbmZvIHtcbiAgfVxuXG4gIC5wYW5lbC1ib2R5LXdhcm5pbmcge1xuICB9XG5cbiAgLnBhbmVsLWJvZHktZGFuZ2VyIHtcbiAgfVxuPC9zdHlsZT5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtcGFuZWwud2U/ZDY2OWQ5NDIiLCJ2YXIgX193ZWV4X3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL3d4Yy10aXAud2VcIilcbnZhciBfX3dlZXhfc3R5bGVfXyA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c3R5bGVzIS4vd3hjLXRpcC53ZVwiKVxudmFyIF9fd2VleF9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL3NjcmlwdC5qcyFiYWJlbC1sb2FkZXI/cHJlc2V0c1tdPUM6XFxcXHZiYW9saS13ZWV4XFxcXHZiYW9saVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcHJlc2V0LWVzMjAxNSZwcmVzZXRzPUM6XFxcXHZiYW9saS13ZWV4XFxcXHZiYW9saVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcHJlc2V0LWVzMjAxNSZwbHVnaW5zW109QzpcXFxcdmJhb2xpLXdlZXhcXFxcdmJhb2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmcGx1Z2lucz1DOlxcXFx2YmFvbGktd2VleFxcXFx2YmFvbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZjb21tZW50cz1mYWxzZSEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zY3JpcHRzIS4vd3hjLXRpcC53ZVwiKVxuXG5fX3dlZXhfZGVmaW5lX18oJ0B3ZWV4LWNvbXBvbmVudC93eGMtdGlwJywgW10sIGZ1bmN0aW9uKF9fd2VleF9yZXF1aXJlX18sIF9fd2VleF9leHBvcnRzX18sIF9fd2VleF9tb2R1bGVfXykge1xuXG4gICAgX193ZWV4X3NjcmlwdF9fKF9fd2VleF9tb2R1bGVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X3JlcXVpcmVfXylcbiAgICBpZiAoX193ZWV4X2V4cG9ydHNfXy5fX2VzTW9kdWxlICYmIF9fd2VleF9leHBvcnRzX18uZGVmYXVsdCkge1xuICAgICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMgPSBfX3dlZXhfZXhwb3J0c19fLmRlZmF1bHRcbiAgICB9XG5cbiAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cy50ZW1wbGF0ZSA9IF9fd2VleF90ZW1wbGF0ZV9fXG5cbiAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cy5zdHlsZSA9IF9fd2VleF9zdHlsZV9fXG5cbn0pXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtdGlwLndlXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDIgNCA4IDE3IDE4IDIyIDI0IDI2IDI3IDI4IDI5IDMxIDMyIDM2IDM3IDQzIDQ4IDQ5IDUxIDUyIDUzIDU0IDU1IDU2IDU5IDYxIDYyIDYzIDY0IDY1IDY2IDcwIDcyIDczIDc0IDc4IDgwIDgxIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImRpdlwiLFxuICBcImNsYXNzTGlzdFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIFsndGlwJywgJ3RpcC0nICsgKHRoaXMudHlwZSldfSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogZnVuY3Rpb24gKCkge3JldHVybiBbJ3RpcC10eHQnLCAndGlwLXR4dC0nICsgKHRoaXMudHlwZSldfSxcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnZhbHVlfVxuICAgICAgfVxuICAgIH1cbiAgXVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy10aXAud2Vcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMiA0IDggMTcgMTggMjIgMjQgMjYgMjcgMjggMjkgMzEgMzIgMzYgMzcgNDMgNDggNDkgNTEgNTIgNTMgNTQgNTUgNTYgNTkgNjEgNjIgNjMgNjQgNjUgNjYgNzAgNzIgNzMgNzQgNzggODAgODEiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ0aXBcIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogMzYsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogMzYsXG4gICAgXCJwYWRkaW5nVG9wXCI6IDM2LFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiAzNixcbiAgICBcImJvcmRlclJhZGl1c1wiOiAxMFxuICB9LFxuICBcInRpcC10eHRcIjoge1xuICAgIFwiZm9udFNpemVcIjogMjhcbiAgfSxcbiAgXCJ0aXAtc3VjY2Vzc1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZGZmMGQ4XCIsXG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiNkNmU5YzZcIlxuICB9LFxuICBcInRpcC10eHQtc3VjY2Vzc1wiOiB7XG4gICAgXCJjb2xvclwiOiBcIiMzYzc2M2RcIlxuICB9LFxuICBcInRpcC1pbmZvXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNkOWVkZjdcIixcbiAgICBcImJvcmRlckNvbG9yXCI6IFwiI2JjZThmMVwiXG4gIH0sXG4gIFwidGlwLXR4dC1pbmZvXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzMxNzA4ZlwiXG4gIH0sXG4gIFwidGlwLXdhcm5pbmdcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZjZjhlM1wiLFxuICAgIFwiYm9yZGVyQ29sb3JcIjogXCIjZmFlYmNjXCJcbiAgfSxcbiAgXCJ0aXAtdHh0LXdhcm5pbmdcIjoge1xuICAgIFwiY29sb3JcIjogXCIjOGE2ZDNiXCJcbiAgfSxcbiAgXCJ0aXAtZGFuZ2VyXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmMmRlZGVcIixcbiAgICBcImJvcmRlckNvbG9yXCI6IFwiI2ViY2NkMVwiXG4gIH0sXG4gIFwidGlwLXR4dC1kYW5nZXJcIjoge1xuICAgIFwiY29sb3JcIjogXCIjYTk0NDQyXCJcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vd2VleC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c3R5bGVzIS4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy10aXAud2Vcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMiA0IDggMTcgMTggMjIgMjQgMjYgMjcgMjggMjkgMzEgMzIgMzYgMzcgNDMgNDggNDkgNTEgNTIgNTMgNTQgNTUgNTYgNTkgNjEgNjIgNjMgNjQgNjUgNjYgNzAgNzIgNzMgNzQgNzggODAgODEiLCI8IS0tIEluc3BpcmVkIGJ5IGJvb3RzdHJhcCBodHRwOi8vZ2V0Ym9vdHN0cmFwLmNvbS8gLS0+XG48dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJ0aXAgdGlwLXt7dHlwZX19XCI+XG4gICAgPHRleHQgY2xhc3M9XCJ0aXAtdHh0IHRpcC10eHQte3t0eXBlfX1cIj57e3ZhbHVlfX08L3RleHQ+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgbW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgZGF0YToge1xuICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxuICAgICAgdmFsdWU6ICcnXG4gICAgfVxuICB9XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICAudGlwIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDM2cHg7XG4gICAgcGFkZGluZy1yaWdodDogMzZweDtcbiAgICBwYWRkaW5nLXRvcDogMzZweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMzZweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB9XG4gIFxuICAudGlwLXR4dHtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gIH1cblxuICAudGlwLXN1Y2Nlc3Mge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZmYwZDg7XG4gICAgYm9yZGVyLWNvbG9yOiAjZDZlOWM2O1xuICB9XG5cbiAgLnRpcC10eHQtc3VjY2VzcyB7XG4gICAgY29sb3I6ICMzYzc2M2Q7XG4gIH1cblxuICAudGlwLWluZm8ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkOWVkZjc7XG4gICAgYm9yZGVyLWNvbG9yOiAjYmNlOGYxO1xuICB9XG5cbiAgLnRpcC10eHQtaW5mbyB7XG4gICAgY29sb3I6ICMzMTcwOGY7XG4gIH1cblxuICAudGlwLXdhcm5pbmcge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmY2Y4ZTM7XG4gICAgYm9yZGVyLWNvbG9yOiAjZmFlYmNjO1xuICB9XG5cbiAgLnRpcC10eHQtd2FybmluZyB7XG4gICAgY29sb3I6ICM4YTZkM2I7XG4gIH1cblxuICAudGlwLWRhbmdlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZGVkZTtcbiAgICBib3JkZXItY29sb3I6ICNlYmNjZDE7XG4gIH1cblxuICAudGlwLXR4dC1kYW5nZXIge1xuICAgIGNvbG9yOiAjYTk0NDQyO1xuICB9XG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtdGlwLndlPzIxZWIxNTk0IiwidmFyIF9fd2VleF90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi93eGMtY291bnRkb3duLndlXCIpXG52YXIgX193ZWV4X3N0eWxlX18gPSByZXF1aXJlKFwiISEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL3d4Yy1jb3VudGRvd24ud2VcIilcbnZhciBfX3dlZXhfc2NyaXB0X18gPSByZXF1aXJlKFwiISEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9zY3JpcHQuanMhYmFiZWwtbG9hZGVyP3ByZXNldHNbXT1DOlxcXFx2YmFvbGktd2VleFxcXFx2YmFvbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXByZXNldC1lczIwMTUmcHJlc2V0cz1DOlxcXFx2YmFvbGktd2VleFxcXFx2YmFvbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXByZXNldC1lczIwMTUmcGx1Z2luc1tdPUM6XFxcXHZiYW9saS13ZWV4XFxcXHZiYW9saVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJnBsdWdpbnM9QzpcXFxcdmJhb2xpLXdlZXhcXFxcdmJhb2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmY29tbWVudHM9ZmFsc2UhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c2NyaXB0cyEuL3d4Yy1jb3VudGRvd24ud2VcIilcblxuX193ZWV4X2RlZmluZV9fKCdAd2VleC1jb21wb25lbnQvd3hjLWNvdW50ZG93bicsIFtdLCBmdW5jdGlvbihfX3dlZXhfcmVxdWlyZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfbW9kdWxlX18pIHtcblxuICAgIF9fd2VleF9zY3JpcHRfXyhfX3dlZXhfbW9kdWxlX18sIF9fd2VleF9leHBvcnRzX18sIF9fd2VleF9yZXF1aXJlX18pXG4gICAgaWYgKF9fd2VleF9leHBvcnRzX18uX19lc01vZHVsZSAmJiBfX3dlZXhfZXhwb3J0c19fLmRlZmF1bHQpIHtcbiAgICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzID0gX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0XG4gICAgfVxuXG4gICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMudGVtcGxhdGUgPSBfX3dlZXhfdGVtcGxhdGVfX1xuXG4gICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMuc3R5bGUgPSBfX3dlZXhfc3R5bGVfX1xuXG59KVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtY29tcG9uZW50cy9zcmMvd3hjLWNvdW50ZG93bi53ZVxuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDQgOCAxNyAxOCAyMiAyNCAyNiAyNyAyOCAyOSAzMSAzMiAzNiAzNyA0MyA0OCA0OSA1MSA1MiA1MyA1NCA1NSA1NiA1OSA2MSA2MiA2MyA2NCA2NSA2NiA3MCA3MiA3MyA3NCA3OCA4MCA4MSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJkaXZcIixcbiAgXCJzdHlsZVwiOiB7XG4gICAgXCJvdmVyZmxvd1wiOiBcImhpZGRlblwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiXG4gIH0sXG4gIFwiZXZlbnRzXCI6IHtcbiAgICBcImFwcGVhclwiOiBcImFwcGVhcmVkXCIsXG4gICAgXCJkaXNhcHBlYXJcIjogXCJkaXNhcHBlYXJlZFwiXG4gIH0sXG4gIFwiY2hpbGRyZW5cIjogW1xuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImNvbnRlbnRcIlxuICAgIH1cbiAgXVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1jb3VudGRvd24ud2Vcbi8vIG1vZHVsZSBpZCA9IDM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMiA0IDggMTcgMTggMjIgMjQgMjYgMjcgMjggMjkgMzEgMzIgMzYgMzcgNDMgNDggNDkgNTEgNTIgNTMgNTQgNTUgNTYgNTkgNjEgNjIgNjMgNjQgNjUgNjYgNzAgNzIgNzMgNzQgNzggODAgODEiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ3cmFwXCI6IHtcbiAgICBcIm92ZXJmbG93XCI6IFwiaGlkZGVuXCJcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vd2VleC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c3R5bGVzIS4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1jb3VudGRvd24ud2Vcbi8vIG1vZHVsZSBpZCA9IDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMiA0IDggMTcgMTggMjIgMjQgMjYgMjcgMjggMjkgMzEgMzIgMzYgMzcgNDMgNDggNDkgNTEgNTIgNTMgNTQgNTUgNTYgNTkgNjEgNjIgNjMgNjQgNjUgNjYgNzAgNzIgNzMgNzQgNzggODAgODEiLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBzdHlsZT1cIm92ZXJmbG93OiBoaWRkZW47IGZsZXgtZGlyZWN0aW9uOiByb3c7XCIgb25hcHBlYXI9XCJhcHBlYXJlZFwiIG9uZGlzYXBwZWFyPVwiZGlzYXBwZWFyZWRcIj5cbiAgICAgICAgPGNvbnRlbnQ+PC9jb250ZW50PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHN0eWxlPlxuLndyYXAge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG48L3N0eWxlPlxuXG48c2NyaXB0PlxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgZGF0YToge1xuICAgICAgICBub3c6IDAsXG4gICAgICAgIHJlbWFpbjogMCxcbiAgICAgICAgdGltZToge1xuICAgICAgICAgICAgZWxhcHNlOiAwLFxuICAgICAgICAgICAgRDogJzAnLFxuICAgICAgICAgICAgREQ6ICcwJyxcbiAgICAgICAgICAgIGg6ICcwJyxcbiAgICAgICAgICAgIGhoOiAnMDAnLFxuICAgICAgICAgICAgSDogJzAnLFxuICAgICAgICAgICAgSEg6ICcwJyxcbiAgICAgICAgICAgIG06ICcwJyxcbiAgICAgICAgICAgIG1tOiAnMDAnLFxuICAgICAgICAgICAgTTogJzAnLFxuICAgICAgICAgICAgTU06ICcwJyxcbiAgICAgICAgICAgIHM6ICcwJyxcbiAgICAgICAgICAgIHNzOiAnMDAnLFxuICAgICAgICAgICAgUzogJzAnLFxuICAgICAgICAgICAgU1M6ICcwJ1xuICAgICAgICB9LFxuICAgICAgICBvdXRvZnZpZXc6IGZhbHNlXG4gICAgfSxcbiAgICByZWFkeTogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLnJlbWFpbiA8PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gdGhpcy5pc1dlYiA9IHRoaXMuJGdldENvbmZpZygpLmVudi5wbGF0Zm9ybSA9PT0gJ1dlYic7XG4gICAgICAgIHRoaXMubm93ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgdGhpcy5uZXh0VGljaygpO1xuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBuZXh0VGljazogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5vdXRvZnZpZXcpIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KHRoaXMubmV4dFRpY2suYmluZCh0aGlzKSwgMTAwMCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudGltZS5lbGFwc2UgPSBwYXJzZUludCgoRGF0ZS5ub3coKSAtIHRoaXMubm93KSAvIDEwMDApO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2FsYygpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3RpY2snLCBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnRpbWUpKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCh0aGlzLm5leHRUaWNrLmJpbmQodGhpcyksIDEwMDApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2FsYXJtJywgT2JqZWN0LmFzc2lnbih7fSwgdGhpcy50aW1lKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuX2FwcC51cGRhdGVBY3Rpb25zKCk7IFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBmb3JtYXQ6IGZ1bmN0aW9uKHN0cikge1xuICAgICAgICAgICAgaWYgKHN0ci5sZW5ndGggPj0gMikge1xuICAgICAgICAgICAgICAgIHJldHVybiBzdHI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAnMCcgKyBzdHI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNhbGM6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIHJlbWFpbiA9IHRoaXMucmVtYWluIC0gdGhpcy50aW1lLmVsYXBzZTtcbiAgICAgICAgICAgIGlmIChyZW1haW4gPCAwKSB7XG4gICAgICAgICAgICAgICAgcmVtYWluID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudGltZS5EID0gU3RyaW5nKHBhcnNlSW50KHJlbWFpbiAvIDg2NDAwKSk7XG4gICAgICAgICAgICB0aGlzLnRpbWUuREQgPSB0aGlzLmZvcm1hdCh0aGlzLnRpbWUuRCk7XG4gICAgICAgICAgICB0aGlzLnRpbWUuaCA9IFN0cmluZyhwYXJzZUludCgocmVtYWluIC0gcGFyc2VJbnQodGhpcy50aW1lLkQpICogODY0MDApIC8gMzYwMCkpO1xuICAgICAgICAgICAgdGhpcy50aW1lLmhoID0gdGhpcy5mb3JtYXQodGhpcy50aW1lLmgpO1xuICAgICAgICAgICAgdGhpcy50aW1lLkggPSBTdHJpbmcocGFyc2VJbnQocmVtYWluIC8gMzYwMCkpO1xuICAgICAgICAgICAgdGhpcy50aW1lLkhIID0gdGhpcy5mb3JtYXQodGhpcy50aW1lLkgpO1xuICAgICAgICAgICAgdGhpcy50aW1lLm0gPSBTdHJpbmcocGFyc2VJbnQoKHJlbWFpbiAtIHBhcnNlSW50KHRoaXMudGltZS5IKSAqIDM2MDApIC8gNjApKTtcbiAgICAgICAgICAgIHRoaXMudGltZS5tbSA9IHRoaXMuZm9ybWF0KHRoaXMudGltZS5tKTtcbiAgICAgICAgICAgIHRoaXMudGltZS5NID0gU3RyaW5nKHBhcnNlSW50KHJlbWFpbiAvIDYwKSk7XG4gICAgICAgICAgICB0aGlzLnRpbWUuTU0gPSB0aGlzLmZvcm1hdCh0aGlzLnRpbWUuTSk7XG4gICAgICAgICAgICB0aGlzLnRpbWUucyA9IFN0cmluZyhyZW1haW4gLSBwYXJzZUludCh0aGlzLnRpbWUuTSkgKiA2MCk7XG4gICAgICAgICAgICB0aGlzLnRpbWUuc3MgPSB0aGlzLmZvcm1hdCh0aGlzLnRpbWUucyk7XG4gICAgICAgICAgICB0aGlzLnRpbWUuUyA9IFN0cmluZyhyZW1haW4pO1xuICAgICAgICAgICAgdGhpcy50aW1lLlNTID0gdGhpcy5mb3JtYXQodGhpcy50aW1lLlMpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVtYWluLCB0aGlzLkQsIHRoaXMuaCwgdGhpcy5oaCwgdGhpcy5ILCB0aGlzLkhILCB0aGlzLm0sIHRoaXMuTU0sIHRoaXMucywgdGhpcy5zcywgdGhpcy5TLCB0aGlzLlNTKTtcbiAgICAgICAgICAgIHJldHVybiByZW1haW4gPiAwO1xuICAgICAgICB9LFxuICAgICAgICBhcHBlYXJlZDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aGlzLm91dG9mdmlldyA9IGZhbHNlO1xuICAgICAgICB9LFxuICAgICAgICBkaXNhcHBlYXJlZDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aGlzLm91dG9mdmlldyA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG59XG48L3NjcmlwdD5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1jb3VudGRvd24ud2U/NDZhNjI4OGMiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnblwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDQgOCAxNyAxOCAyMiAyNCAyNiAyNyAyOCAyOSAzMSAzMiAzNiAzNyA0MyA0OCA0OSA1MSA1MiA1MyA1NCA1NSA1NiA1OSA2MSA2MiA2MyA2NCA2NSA2NiA3MCA3MiA3MyA3NCA3OCA4MCA4MSIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24nKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5hc3NpZ247XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduLmpzXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDIgNCA4IDE3IDE4IDIyIDI0IDI2IDI3IDI4IDI5IDMxIDMyIDM2IDM3IDQzIDQ4IDQ5IDUxIDUyIDUzIDU0IDU1IDU2IDU5IDYxIDYyIDYzIDY0IDY1IDY2IDcwIDcyIDczIDc0IDc4IDgwIDgxIiwiLy8gMTkuMS4zLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSlcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GLCAnT2JqZWN0Jywge2Fzc2lnbjogcmVxdWlyZSgnLi9fb2JqZWN0LWFzc2lnbicpfSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDIgNCA4IDE3IDE4IDIyIDI0IDI2IDI3IDI4IDI5IDMxIDMyIDM2IDM3IDQzIDQ4IDQ5IDUxIDUyIDUzIDU0IDU1IDU2IDU5IDYxIDYyIDYzIDY0IDY1IDY2IDcwIDcyIDczIDc0IDc4IDgwIDgxIiwidmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY29yZSAgICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgY3R4ICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBoaWRlICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbih0eXBlLCBuYW1lLCBzb3VyY2Upe1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRlxuICAgICwgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuR1xuICAgICwgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuU1xuICAgICwgSVNfUFJPVE8gID0gdHlwZSAmICRleHBvcnQuUFxuICAgICwgSVNfQklORCAgID0gdHlwZSAmICRleHBvcnQuQlxuICAgICwgSVNfV1JBUCAgID0gdHlwZSAmICRleHBvcnQuV1xuICAgICwgZXhwb3J0cyAgID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSlcbiAgICAsIGV4cFByb3RvICA9IGV4cG9ydHNbUFJPVE9UWVBFXVxuICAgICwgdGFyZ2V0ICAgID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXVxuICAgICwga2V5LCBvd24sIG91dDtcbiAgaWYoSVNfR0xPQkFMKXNvdXJjZSA9IG5hbWU7XG4gIGZvcihrZXkgaW4gc291cmNlKXtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgIGlmKG93biAmJiBrZXkgaW4gZXhwb3J0cyljb250aW51ZTtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IG93biA/IHRhcmdldFtrZXldIDogc291cmNlW2tleV07XG4gICAgLy8gcHJldmVudCBnbG9iYWwgcG9sbHV0aW9uIGZvciBuYW1lc3BhY2VzXG4gICAgZXhwb3J0c1trZXldID0gSVNfR0xPQkFMICYmIHR5cGVvZiB0YXJnZXRba2V5XSAhPSAnZnVuY3Rpb24nID8gc291cmNlW2tleV1cbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIDogSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpXG4gICAgLy8gd3JhcCBnbG9iYWwgY29uc3RydWN0b3JzIGZvciBwcmV2ZW50IGNoYW5nZSB0aGVtIGluIGxpYnJhcnlcbiAgICA6IElTX1dSQVAgJiYgdGFyZ2V0W2tleV0gPT0gb3V0ID8gKGZ1bmN0aW9uKEMpe1xuICAgICAgdmFyIEYgPSBmdW5jdGlvbihhLCBiLCBjKXtcbiAgICAgICAgaWYodGhpcyBpbnN0YW5jZW9mIEMpe1xuICAgICAgICAgIHN3aXRjaChhcmd1bWVudHMubGVuZ3RoKXtcbiAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIG5ldyBDO1xuICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gbmV3IEMoYSk7XG4gICAgICAgICAgICBjYXNlIDI6IHJldHVybiBuZXcgQyhhLCBiKTtcbiAgICAgICAgICB9IHJldHVybiBuZXcgQyhhLCBiLCBjKTtcbiAgICAgICAgfSByZXR1cm4gQy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICAgIEZbUFJPVE9UWVBFXSA9IENbUFJPVE9UWVBFXTtcbiAgICAgIHJldHVybiBGO1xuICAgIC8vIG1ha2Ugc3RhdGljIHZlcnNpb25zIGZvciBwcm90b3R5cGUgbWV0aG9kc1xuICAgIH0pKG91dCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUubWV0aG9kcy4lTkFNRSVcbiAgICBpZihJU19QUk9UTyl7XG4gICAgICAoZXhwb3J0cy52aXJ0dWFsIHx8IChleHBvcnRzLnZpcnR1YWwgPSB7fSkpW2tleV0gPSBvdXQ7XG4gICAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUucHJvdG90eXBlLiVOQU1FJVxuICAgICAgaWYodHlwZSAmICRleHBvcnQuUiAmJiBleHBQcm90byAmJiAhZXhwUHJvdG9ba2V5XSloaWRlKGV4cFByb3RvLCBrZXksIG91dCk7XG4gICAgfVxuICB9XG59O1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YCBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qc1xuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDQgOCAxMCAxNCAxNyAxOCAyMiAyNCAyNSAyNiAyNyAyOCAyOSAzMSAzMiAzNiAzNyA0MyA0OCA0OSA1MSA1MiA1MyA1NCA1NSA1NiA1NyA1OCA1OSA2MSA2MiA2MyA2NCA2NSA2NiA3MCA3MiA3MyA3NCA3OCA4MCA4MSIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGYgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYodHlwZW9mIF9fZyA9PSAnbnVtYmVyJylfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2dsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDQgOCAxMCAxNCAxNyAxOCAyMiAyNCAyNSAyNiAyNyAyOCAyOSAzMSAzMiAzNiAzNyA0MyA0OCA0OSA1MSA1MiA1MyA1NCA1NSA1NiA1NyA1OCA1OSA2MSA2MiA2MyA2NCA2NSA2NiA3MCA3MiA3MyA3NCA3OCA4MCA4MSIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7dmVyc2lvbjogJzIuNC4wJ307XG5pZih0eXBlb2YgX19lID09ICdudW1iZXInKV9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanNcbi8vIG1vZHVsZSBpZCA9IDQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMiA0IDggMTAgMTQgMTcgMTggMjIgMjQgMjUgMjYgMjcgMjggMjkgMzEgMzIgMzYgMzcgNDMgNDggNDkgNTEgNTIgNTMgNTQgNTUgNTYgNTcgNTggNTkgNjEgNjIgNjMgNjQgNjUgNjYgNzAgNzIgNzMgNzQgNzggODAgODEiLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuLCB0aGF0LCBsZW5ndGgpe1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZih0aGF0ID09PSB1bmRlZmluZWQpcmV0dXJuIGZuO1xuICBzd2l0Y2gobGVuZ3RoKXtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbihhKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24oYSwgYil7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uKGEsIGIsIGMpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24oLyogLi4uYXJncyAqLyl7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzXG4vLyBtb2R1bGUgaWQgPSA0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDIgNCA4IDEwIDE0IDE3IDE4IDIyIDI0IDI1IDI2IDI3IDI4IDI5IDMxIDMyIDM2IDM3IDQzIDQ4IDQ5IDUxIDUyIDUzIDU0IDU1IDU2IDU3IDU4IDU5IDYxIDYyIDYzIDY0IDY1IDY2IDcwIDcyIDczIDc0IDc4IDgwIDgxIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSA0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDIgNCA4IDEwIDE0IDE3IDE4IDIyIDI0IDI1IDI2IDI3IDI4IDI5IDMxIDMyIDM2IDM3IDQzIDQ4IDQ5IDUxIDUyIDUzIDU0IDU1IDU2IDU3IDU4IDU5IDYxIDYyIDYzIDY0IDY1IDY2IDcwIDcyIDczIDc0IDc4IDgwIDgxIiwidmFyIGRQICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qc1xuLy8gbW9kdWxlIGlkID0gNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDQgOCAxMCAxNCAxNyAxOCAyMiAyNCAyNSAyNiAyNyAyOCAyOSAzMSAzMiAzNiAzNyA0MyA0OCA0OSA1MSA1MiA1MyA1NCA1NSA1NiA1NyA1OCA1OSA2MSA2MiA2MyA2NCA2NSA2NiA3MCA3MiA3MyA3NCA3OCA4MCA4MSIsInZhciBhbk9iamVjdCAgICAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpXG4gICwgdG9QcmltaXRpdmUgICAgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKVxuICAsIGRQICAgICAgICAgICAgID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyl7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZihJRThfRE9NX0RFRklORSl0cnkge1xuICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICBpZignZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKU9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanNcbi8vIG1vZHVsZSBpZCA9IDQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMiA0IDggMTAgMTQgMTcgMTggMjIgMjQgMjUgMjYgMjcgMjggMjkgMzEgMzIgMzYgMzcgNDMgNDggNDkgNTEgNTIgNTMgNTQgNTUgNTYgNTcgNTggNTkgNjEgNjIgNjMgNjQgNjUgNjYgNzAgNzIgNzMgNzQgNzggODAgODEiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZighaXNPYmplY3QoaXQpKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDQgOCAxMCAxNCAxNyAxOCAyMiAyNCAyNSAyNiAyNyAyOCAyOSAzMSAzMiAzNiAzNyA0MyA0OCA0OSA1MSA1MiA1MyA1NCA1NSA1NiA1NyA1OCA1OSA2MSA2MiA2MyA2NCA2NSA2NiA3MCA3MiA3MyA3NCA3OCA4MCA4MSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDQgOCAxMCAxNCAxNyAxOCAyMiAyNCAyNSAyNiAyNyAyOCAyOSAzMSAzMiAzNiAzNyA0MyA0OCA0OSA1MSA1MiA1MyA1NCA1NSA1NiA1NyA1OCA1OSA2MSA2MiA2MyA2NCA2NSA2NiA3MCA3MiA3MyA3NCA3OCA4MCA4MSIsIm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gNTFcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDQgOCAxMCAxNCAxNyAxOCAyMiAyNCAyNSAyNiAyNyAyOCAyOSAzMSAzMiAzNiAzNyA0MyA0OCA0OSA1MSA1MiA1MyA1NCA1NSA1NiA1NyA1OCA1OSA2MSA2MiA2MyA2NCA2NSA2NiA3MCA3MiA3MyA3NCA3OCA4MCA4MSIsIi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanNcbi8vIG1vZHVsZSBpZCA9IDUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMiA0IDggMTAgMTQgMTcgMTggMjIgMjQgMjUgMjYgMjcgMjggMjkgMzEgMzIgMzYgMzcgNDMgNDggNDkgNTEgNTIgNTMgNTQgNTUgNTYgNTcgNTggNTkgNjEgNjIgNjMgNjQgNjUgNjYgNzAgNzIgNzMgNzQgNzggODAgODEiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMpe1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzXG4vLyBtb2R1bGUgaWQgPSA1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDIgNCA4IDEwIDE0IDE3IDE4IDIyIDI0IDI1IDI2IDI3IDI4IDI5IDMxIDMyIDM2IDM3IDQzIDQ4IDQ5IDUxIDUyIDUzIDU0IDU1IDU2IDU3IDU4IDU5IDYxIDYyIDYzIDY0IDY1IDY2IDcwIDcyIDczIDc0IDc4IDgwIDgxIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50XG4gIC8vIGluIG9sZCBJRSB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0J1xuICAsIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDQgOCAxMCAxNCAxNyAxOCAyMiAyNCAyNSAyNiAyNyAyOCAyOSAzMSAzMiAzNiAzNyA0MyA0OCA0OSA1MSA1MiA1MyA1NCA1NSA1NiA1NyA1OCA1OSA2MSA2MiA2MyA2NCA2NSA2NiA3MCA3MiA3MyA3NCA3OCA4MCA4MSIsIi8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIFMpe1xuICBpZighaXNPYmplY3QoaXQpKXJldHVybiBpdDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgaWYodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICBpZighUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzXG4vLyBtb2R1bGUgaWQgPSA1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDIgNCA4IDEwIDE0IDE3IDE4IDIyIDI0IDI1IDI2IDI3IDI4IDI5IDMxIDMyIDM2IDM3IDQzIDQ4IDQ5IDUxIDUyIDUzIDU0IDU1IDU2IDU3IDU4IDU5IDYxIDYyIDYzIDY0IDY1IDY2IDcwIDcyIDczIDc0IDc4IDgwIDgxIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihiaXRtYXAsIHZhbHVlKXtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlICA6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlICAgIDogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZSAgICAgICA6IHZhbHVlXG4gIH07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qc1xuLy8gbW9kdWxlIGlkID0gNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDQgOCAxMCAxNCAxNyAxOCAyMiAyNCAyNSAyNiAyNyAyOCAyOSAzMSAzMiAzNiAzNyA0MyA0OCA0OSA1MSA1MiA1MyA1NCA1NSA1NiA1NyA1OCA1OSA2MSA2MiA2MyA2NCA2NSA2NiA3MCA3MiA3MyA3NCA3OCA4MCA4MSIsIid1c2Ugc3RyaWN0Jztcbi8vIDE5LjEuMi4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UsIC4uLilcbnZhciBnZXRLZXlzICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJylcbiAgLCBnT1BTICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJylcbiAgLCBwSUUgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKVxuICAsIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCBJT2JqZWN0ICA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKVxuICAsICRhc3NpZ24gID0gT2JqZWN0LmFzc2lnbjtcblxuLy8gc2hvdWxkIHdvcmsgd2l0aCBzeW1ib2xzIGFuZCBzaG91bGQgaGF2ZSBkZXRlcm1pbmlzdGljIHByb3BlcnR5IG9yZGVyIChWOCBidWcpXG5tb2R1bGUuZXhwb3J0cyA9ICEkYXNzaWduIHx8IHJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgdmFyIEEgPSB7fVxuICAgICwgQiA9IHt9XG4gICAgLCBTID0gU3ltYm9sKClcbiAgICAsIEsgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3QnO1xuICBBW1NdID0gNztcbiAgSy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbihrKXsgQltrXSA9IGs7IH0pO1xuICByZXR1cm4gJGFzc2lnbih7fSwgQSlbU10gIT0gNyB8fCBPYmplY3Qua2V5cygkYXNzaWduKHt9LCBCKSkuam9pbignJykgIT0gSztcbn0pID8gZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgc291cmNlKXsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICB2YXIgVCAgICAgPSB0b09iamVjdCh0YXJnZXQpXG4gICAgLCBhTGVuICA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICAsIGluZGV4ID0gMVxuICAgICwgZ2V0U3ltYm9scyA9IGdPUFMuZlxuICAgICwgaXNFbnVtICAgICA9IHBJRS5mO1xuICB3aGlsZShhTGVuID4gaW5kZXgpe1xuICAgIHZhciBTICAgICAgPSBJT2JqZWN0KGFyZ3VtZW50c1tpbmRleCsrXSlcbiAgICAgICwga2V5cyAgID0gZ2V0U3ltYm9scyA/IGdldEtleXMoUykuY29uY2F0KGdldFN5bWJvbHMoUykpIDogZ2V0S2V5cyhTKVxuICAgICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICAgLCBqICAgICAgPSAwXG4gICAgICAsIGtleTtcbiAgICB3aGlsZShsZW5ndGggPiBqKWlmKGlzRW51bS5jYWxsKFMsIGtleSA9IGtleXNbaisrXSkpVFtrZXldID0gU1trZXldO1xuICB9IHJldHVybiBUO1xufSA6ICRhc3NpZ247XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtYXNzaWduLmpzXG4vLyBtb2R1bGUgaWQgPSA1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDIgNCA4IDE3IDE4IDIyIDI0IDI2IDI3IDI4IDI5IDMxIDMyIDM2IDM3IDQzIDQ4IDQ5IDUxIDUyIDUzIDU0IDU1IDU2IDU5IDYxIDYyIDYzIDY0IDY1IDY2IDcwIDcyIDczIDc0IDc4IDgwIDgxIiwiLy8gMTkuMS4yLjE0IC8gMTUuMi4zLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgJGtleXMgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpXG4gICwgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKXtcbiAgcmV0dXJuICRrZXlzKE8sIGVudW1CdWdLZXlzKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gNThcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDQgOCAxMCAxNCAxNyAxOCAyMiAyNCAyNSAyNiAyNyAyOCAyOSAzMSAzMiAzNiAzNyA0MyA0OCA0OSA1MSA1MiA1MyA1NCA1NSA1NiA1NyA1OCA1OSA2MSA2MiA2MyA2NCA2NSA2NiA3MCA3MiA3MyA3NCA3OCA4MCA4MSIsInZhciBoYXMgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIHRvSU9iamVjdCAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIGFycmF5SW5kZXhPZiA9IHJlcXVpcmUoJy4vX2FycmF5LWluY2x1ZGVzJykoZmFsc2UpXG4gICwgSUVfUFJPVE8gICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iamVjdCwgbmFtZXMpe1xuICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KG9iamVjdClcbiAgICAsIGkgICAgICA9IDBcbiAgICAsIHJlc3VsdCA9IFtdXG4gICAgLCBrZXk7XG4gIGZvcihrZXkgaW4gTylpZihrZXkgIT0gSUVfUFJPVE8paGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKWlmKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSl7XG4gICAgfmFycmF5SW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzXG4vLyBtb2R1bGUgaWQgPSA1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDIgNCA4IDEwIDE0IDE3IDE4IDIyIDI0IDI1IDI2IDI3IDI4IDI5IDMxIDMyIDM2IDM3IDQzIDQ4IDQ5IDUxIDUyIDUzIDU0IDU1IDU2IDU3IDU4IDU5IDYxIDYyIDYzIDY0IDY1IDY2IDcwIDcyIDczIDc0IDc4IDgwIDgxIiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBrZXkpe1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanNcbi8vIG1vZHVsZSBpZCA9IDYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMiA0IDggMTAgMTQgMTcgMTggMjIgMjQgMjUgMjYgMjcgMjggMjkgMzEgMzIgMzYgMzcgNDMgNDggNDkgNTEgNTIgNTMgNTQgNTUgNTYgNTcgNTggNTkgNjEgNjIgNjMgNjQgNjUgNjYgNzAgNzIgNzMgNzQgNzggODAgODEiLCIvLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpXG4gICwgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gSU9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDQgOCAxMCAxNCAxNyAxOCAyMiAyNCAyNSAyNiAyNyAyOCAyOSAzMSAzMiAzNiAzNyA0MyA0OCA0OSA1MSA1MiA1MyA1NCA1NSA1NiA1NyA1OCA1OSA2MSA2MiA2MyA2NCA2NSA2NiA3MCA3MiA3MyA3NCA3OCA4MCA4MSIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gY29mKGl0KSA9PSAnU3RyaW5nJyA/IGl0LnNwbGl0KCcnKSA6IE9iamVjdChpdCk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gNjJcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDQgOCAxMCAxNCAxNyAxOCAyMiAyNCAyNSAyNiAyNyAyOCAyOSAzMSAzMiAzNiAzNyA0MyA0OCA0OSA1MSA1MiA1MyA1NCA1NSA1NiA1NyA1OCA1OSA2MSA2MiA2MyA2NCA2NSA2NiA3MCA3MiA3MyA3NCA3OCA4MCA4MSIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2YuanNcbi8vIG1vZHVsZSBpZCA9IDYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMiA0IDggMTAgMTQgMTcgMTggMjIgMjQgMjUgMjYgMjcgMjggMjkgMzEgMzIgMzYgMzcgNDMgNDggNDkgNTEgNTIgNTMgNTQgNTUgNTYgNTcgNTggNTkgNjEgNjIgNjMgNjQgNjUgNjYgNzAgNzIgNzMgNzQgNzggODAgODEiLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ID09IHVuZGVmaW5lZCl0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZWZpbmVkLmpzXG4vLyBtb2R1bGUgaWQgPSA2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDIgNCA4IDEwIDE0IDE3IDE4IDIyIDI0IDI1IDI2IDI3IDI4IDI5IDMxIDMyIDM2IDM3IDQzIDQ4IDQ5IDUxIDUyIDUzIDU0IDU1IDU2IDU3IDU4IDU5IDYxIDYyIDYzIDY0IDY1IDY2IDcwIDcyIDczIDc0IDc4IDgwIDgxIiwiLy8gZmFsc2UgLT4gQXJyYXkjaW5kZXhPZlxuLy8gdHJ1ZSAgLT4gQXJyYXkjaW5jbHVkZXNcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCB0b0xlbmd0aCAgPSByZXF1aXJlKCcuL190by1sZW5ndGgnKVxuICAsIHRvSW5kZXggICA9IHJlcXVpcmUoJy4vX3RvLWluZGV4Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKElTX0lOQ0xVREVTKXtcbiAgcmV0dXJuIGZ1bmN0aW9uKCR0aGlzLCBlbCwgZnJvbUluZGV4KXtcbiAgICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KCR0aGlzKVxuICAgICAgLCBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aClcbiAgICAgICwgaW5kZXggID0gdG9JbmRleChmcm9tSW5kZXgsIGxlbmd0aClcbiAgICAgICwgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIGlmKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKXdoaWxlKGxlbmd0aCA+IGluZGV4KXtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIGlmKHZhbHVlICE9IHZhbHVlKXJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I3RvSW5kZXggaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKylpZihJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKXtcbiAgICAgIGlmKE9baW5kZXhdID09PSBlbClyZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanNcbi8vIG1vZHVsZSBpZCA9IDY1XG4vLyBtb2R1bGUgY2h1bmtzID0gMiA0IDggMTAgMTQgMTcgMTggMjIgMjQgMjUgMjYgMjcgMjggMjkgMzEgMzIgMzYgMzcgNDMgNDggNDkgNTEgNTIgNTMgNTQgNTUgNTYgNTcgNTggNTkgNjEgNjIgNjMgNjQgNjUgNjYgNzAgNzIgNzMgNzQgNzggODAgODEiLCIvLyA3LjEuMTUgVG9MZW5ndGhcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBtaW4gICAgICAgPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWxlbmd0aC5qc1xuLy8gbW9kdWxlIGlkID0gNjZcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDQgOCAxMCAxNCAxNyAxOCAyMiAyNCAyNSAyNiAyNyAyOCAyOSAzMSAzMiAzNiAzNyA0MyA0OCA0OSA1MSA1MiA1MyA1NCA1NSA1NiA1NyA1OCA1OSA2MSA2MiA2MyA2NCA2NSA2NiA3MCA3MiA3MyA3NCA3OCA4MCA4MSIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgID0gTWF0aC5jZWlsXG4gICwgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWludGVnZXIuanNcbi8vIG1vZHVsZSBpZCA9IDY3XG4vLyBtb2R1bGUgY2h1bmtzID0gMiA0IDggMTAgMTQgMTcgMTggMjIgMjQgMjUgMjYgMjcgMjggMjkgMzEgMzIgMzYgMzcgNDMgNDggNDkgNTEgNTIgNTMgNTQgNTUgNTYgNTcgNTggNTkgNjEgNjIgNjMgNjQgNjUgNjYgNzAgNzIgNzMgNzQgNzggODAgODEiLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgbWF4ICAgICAgID0gTWF0aC5tYXhcbiAgLCBtaW4gICAgICAgPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaW5kZXgsIGxlbmd0aCl7XG4gIGluZGV4ID0gdG9JbnRlZ2VyKGluZGV4KTtcbiAgcmV0dXJuIGluZGV4IDwgMCA/IG1heChpbmRleCArIGxlbmd0aCwgMCkgOiBtaW4oaW5kZXgsIGxlbmd0aCk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDY4XG4vLyBtb2R1bGUgY2h1bmtzID0gMiA0IDggMTAgMTQgMTcgMTggMjIgMjQgMjUgMjYgMjcgMjggMjkgMzEgMzIgMzYgMzcgNDMgNDggNDkgNTEgNTIgNTMgNTQgNTUgNTYgNTcgNTggNTkgNjEgNjIgNjMgNjQgNjUgNjYgNzAgNzIgNzMgNzQgNzggODAgODEiLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ2tleXMnKVxuICAsIHVpZCAgICA9IHJlcXVpcmUoJy4vX3VpZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gdWlkKGtleSkpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC1rZXkuanNcbi8vIG1vZHVsZSBpZCA9IDY5XG4vLyBtb2R1bGUgY2h1bmtzID0gMiA0IDggMTAgMTQgMTcgMTggMjIgMjQgMjUgMjYgMjcgMjggMjkgMzEgMzIgMzYgMzcgNDMgNDggNDkgNTEgNTIgNTMgNTQgNTUgNTYgNTcgNTggNTkgNjEgNjIgNjMgNjQgNjUgNjYgNzAgNzIgNzMgNzQgNzggODAgODEiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJ1xuICAsIHN0b3JlICA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB7fSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLmpzXG4vLyBtb2R1bGUgaWQgPSA3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDIgNCA4IDEwIDE0IDE3IDE4IDIyIDI0IDI1IDI2IDI3IDI4IDI5IDMxIDMyIDM2IDM3IDQzIDQ4IDQ5IDUxIDUyIDUzIDU0IDU1IDU2IDU3IDU4IDU5IDYxIDYyIDYzIDY0IDY1IDY2IDcwIDcyIDczIDc0IDc4IDgwIDgxIiwidmFyIGlkID0gMFxuICAsIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL191aWQuanNcbi8vIG1vZHVsZSBpZCA9IDcxXG4vLyBtb2R1bGUgY2h1bmtzID0gMiA0IDggMTAgMTQgMTcgMTggMjIgMjQgMjUgMjYgMjcgMjggMjkgMzEgMzIgMzYgMzcgNDMgNDggNDkgNTEgNTIgNTMgNTQgNTUgNTYgNTcgNTggNTkgNjEgNjIgNjMgNjQgNjUgNjYgNzAgNzIgNzMgNzQgNzggODAgODEiLCIvLyBJRSA4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgJ2NvbnN0cnVjdG9yLGhhc093blByb3BlcnR5LGlzUHJvdG90eXBlT2YscHJvcGVydHlJc0VudW1lcmFibGUsdG9Mb2NhbGVTdHJpbmcsdG9TdHJpbmcsdmFsdWVPZidcbikuc3BsaXQoJywnKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDcyXG4vLyBtb2R1bGUgY2h1bmtzID0gMiA0IDggMTAgMTQgMTcgMTggMjIgMjQgMjUgMjYgMjcgMjggMjkgMzEgMzIgMzYgMzcgNDMgNDggNDkgNTEgNTIgNTMgNTQgNTUgNTYgNTcgNTggNTkgNjEgNjIgNjMgNjQgNjUgNjYgNzAgNzIgNzMgNzQgNzggODAgODEiLCJleHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanNcbi8vIG1vZHVsZSBpZCA9IDczXG4vLyBtb2R1bGUgY2h1bmtzID0gMiA0IDggMTAgMTQgMTcgMTggMjIgMjQgMjUgMjYgMjcgMjggMjkgMzEgMzIgMzYgMzcgNDMgNDggNDkgNTEgNTIgNTMgNTQgNTUgNTYgNTcgNTggNTkgNjEgNjIgNjMgNjQgNjUgNjYgNzAgNzIgNzMgNzQgNzggODAgODEiLCJleHBvcnRzLmYgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1waWUuanNcbi8vIG1vZHVsZSBpZCA9IDc0XG4vLyBtb2R1bGUgY2h1bmtzID0gMiA0IDggMTAgMTQgMTcgMTggMjIgMjQgMjUgMjYgMjcgMjggMjkgMzEgMzIgMzYgMzcgNDMgNDggNDkgNTEgNTIgNTMgNTQgNTUgNTYgNTcgNTggNTkgNjEgNjIgNjMgNjQgNjUgNjYgNzAgNzIgNzMgNzQgNzggODAgODEiLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDc1XG4vLyBtb2R1bGUgY2h1bmtzID0gMiA0IDggMTAgMTQgMTcgMTggMjIgMjQgMjUgMjYgMjcgMjggMjkgMzEgMzIgMzYgMzcgNDMgNDggNDkgNTEgNTIgNTMgNTQgNTUgNTYgNTcgNTggNTkgNjEgNjIgNjMgNjQgNjUgNjYgNzAgNzIgNzMgNzQgNzggODAgODEiLCJ2YXIgX193ZWV4X3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL3d4Yy1tYXJxdWVlLndlXCIpXG52YXIgX193ZWV4X3N0eWxlX18gPSByZXF1aXJlKFwiISEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL3d4Yy1tYXJxdWVlLndlXCIpXG52YXIgX193ZWV4X3NjcmlwdF9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvc2NyaXB0LmpzIWJhYmVsLWxvYWRlcj9wcmVzZXRzW109QzpcXFxcdmJhb2xpLXdlZXhcXFxcdmJhb2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnByZXNldHM9QzpcXFxcdmJhb2xpLXdlZXhcXFxcdmJhb2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnBsdWdpbnNbXT1DOlxcXFx2YmFvbGktd2VleFxcXFx2YmFvbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZwbHVnaW5zPUM6XFxcXHZiYW9saS13ZWV4XFxcXHZiYW9saVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJmNvbW1lbnRzPWZhbHNlIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdHMhLi93eGMtbWFycXVlZS53ZVwiKVxuXG5fX3dlZXhfZGVmaW5lX18oJ0B3ZWV4LWNvbXBvbmVudC93eGMtbWFycXVlZScsIFtdLCBmdW5jdGlvbihfX3dlZXhfcmVxdWlyZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfbW9kdWxlX18pIHtcblxuICAgIF9fd2VleF9zY3JpcHRfXyhfX3dlZXhfbW9kdWxlX18sIF9fd2VleF9leHBvcnRzX18sIF9fd2VleF9yZXF1aXJlX18pXG4gICAgaWYgKF9fd2VleF9leHBvcnRzX18uX19lc01vZHVsZSAmJiBfX3dlZXhfZXhwb3J0c19fLmRlZmF1bHQpIHtcbiAgICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzID0gX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0XG4gICAgfVxuXG4gICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMudGVtcGxhdGUgPSBfX3dlZXhfdGVtcGxhdGVfX1xuXG4gICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMuc3R5bGUgPSBfX3dlZXhfc3R5bGVfX1xuXG59KVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtY29tcG9uZW50cy9zcmMvd3hjLW1hcnF1ZWUud2Vcbi8vIG1vZHVsZSBpZCA9IDc2XG4vLyBtb2R1bGUgY2h1bmtzID0gMiA0IDggMTcgMTggMjIgMjQgMjYgMjcgMjggMjkgMzEgMzIgMzYgMzcgNDMgNDggNDkgNTEgNTIgNTMgNTQgNTUgNTYgNTkgNjEgNjIgNjMgNjQgNjUgNjYgNzAgNzIgNzMgNzQgNzggODAgODEiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gIFwiY2xhc3NMaXN0XCI6IFtcbiAgICBcIndyYXBcIlxuICBdLFxuICBcImV2ZW50c1wiOiB7XG4gICAgXCJhcHBlYXJcIjogXCJhcHBlYXJlZFwiLFxuICAgIFwiZGlzYXBwZWFyXCI6IFwiZGlzYXBwZWFyZWRcIlxuICB9LFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiaWRcIjogXCJhbmltXCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwiYW5pbVwiXG4gICAgICBdLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJjb250ZW50XCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1tYXJxdWVlLndlXG4vLyBtb2R1bGUgaWQgPSA3N1xuLy8gbW9kdWxlIGNodW5rcyA9IDIgNCA4IDE3IDE4IDIyIDI0IDI2IDI3IDI4IDI5IDMxIDMyIDM2IDM3IDQzIDQ4IDQ5IDUxIDUyIDUzIDU0IDU1IDU2IDU5IDYxIDYyIDYzIDY0IDY1IDY2IDcwIDcyIDczIDc0IDc4IDgwIDgxIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwid3JhcFwiOiB7XG4gICAgXCJvdmVyZmxvd1wiOiBcImhpZGRlblwiLFxuICAgIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwiXG4gIH0sXG4gIFwiYW5pbVwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgXCJ0cmFuc2Zvcm1cIjogXCJ0cmFuc2xhdGVZKDApIHRyYW5zbGF0ZVooMClcIlxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi9+L3dlZXgtY29tcG9uZW50cy9zcmMvd3hjLW1hcnF1ZWUud2Vcbi8vIG1vZHVsZSBpZCA9IDc4XG4vLyBtb2R1bGUgY2h1bmtzID0gMiA0IDggMTcgMTggMjIgMjQgMjYgMjcgMjggMjkgMzEgMzIgMzYgMzcgNDMgNDggNDkgNTEgNTIgNTMgNTQgNTUgNTYgNTkgNjEgNjIgNjMgNjQgNjUgNjYgNzAgNzIgNzMgNzQgNzggODAgODEiLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cIndyYXBcIiBvbmFwcGVhcj1cImFwcGVhcmVkXCIgb25kaXNhcHBlYXI9XCJkaXNhcHBlYXJlZFwiPlxuICAgICAgICA8ZGl2IGlkPVwiYW5pbVwiIGNsYXNzPVwiYW5pbVwiPlxuICAgICAgICAgICAgPGNvbnRlbnQ+PC9jb250ZW50PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZT5cbi53cmFwIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmFuaW0ge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSB0cmFuc2xhdGVaKDApO1xufVxuPC9zdHlsZT5cblxuPHNjcmlwdD5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGRhdGE6IHtcbiAgICAgICAgc3RlcDogMCxcbiAgICAgICAgY291bnQ6IDAsXG4gICAgICAgIGluZGV4OiAxLFxuICAgICAgICBkdXJhdGlvbjogMCxcbiAgICAgICAgaW50ZXJ2YWw6IDAsXG4gICAgICAgIG91dG9mdmlldzogZmFsc2VcbiAgICB9LFxuICAgIHJlYWR5OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmludGVydmFsID4gMFxuICAgICAgICAgICAgICAgICYmIHRoaXMuc3RlcCA+IDBcbiAgICAgICAgICAgICAgICAmJiB0aGlzLmR1cmF0aW9uID4gMCkge1xuICAgICAgICAgICAgdGhpcy5uZXh0VGljaygpOyAgICBcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBuZXh0VGljazogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICBpZiAodGhpcy5vdXRvZnZpZXcpIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KHNlbGYubmV4dFRpY2suYmluZChzZWxmKSwgc2VsZi5pbnRlcnZhbCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuYW5pbWF0aW9uKHNlbGYubmV4dFRpY2suYmluZChzZWxmKSk7XG4gICAgICAgICAgICAgICAgfSwgc2VsZi5pbnRlcnZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGFuaW1hdGlvbjogZnVuY3Rpb24oY2IpIHtcbiAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgICAgIHZhciBvZmZzZXQgPSAtc2VsZi5zdGVwICogc2VsZi5pbmRleDtcbiAgICAgICAgICAgIHZhciAkYW5pbWF0aW9uID0gcmVxdWlyZSgnQHdlZXgtbW9kdWxlL2FuaW1hdGlvbicpO1xuICAgICAgICAgICAgJGFuaW1hdGlvbi50cmFuc2l0aW9uKHRoaXMuJGVsKCdhbmltJyksIHtcbiAgICAgICAgICAgICAgc3R5bGVzOiB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgnICsgU3RyaW5nKG9mZnNldCkgKyAncHgpIHRyYW5zbGF0ZVooMCknXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHRpbWluZ0Z1bmN0aW9uOiAnZWFzZScsXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiBzZWxmLmR1cmF0aW9uXG4gICAgICAgICAgICB9LCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmluZGV4ID0gKHNlbGYuaW5kZXggKyAxKSAlIChzZWxmLmNvdW50KTtcbiAgICAgICAgICAgICAgICBzZWxmLiRlbWl0KCdjaGFuZ2UnLCB7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4OiBzZWxmLmluZGV4LFxuICAgICAgICAgICAgICAgICAgICBjb3VudDogc2VsZi5jb3VudFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGNiICYmIGNiKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgYXBwZWFyZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5vdXRvZnZpZXcgPSBmYWxzZTtcbiAgICAgICAgfSxcbiAgICAgICAgZGlzYXBwZWFyZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5vdXRvZnZpZXcgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxufVxuPC9zY3JpcHQ+XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtbWFycXVlZS53ZT80MTJiNjI4NiIsInZhciBfX3dlZXhfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vd3hjLW5hdmJhci53ZVwiKVxudmFyIF9fd2VleF9zdHlsZV9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi93eGMtbmF2YmFyLndlXCIpXG52YXIgX193ZWV4X3NjcmlwdF9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvc2NyaXB0LmpzIWJhYmVsLWxvYWRlcj9wcmVzZXRzW109QzpcXFxcdmJhb2xpLXdlZXhcXFxcdmJhb2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnByZXNldHM9QzpcXFxcdmJhb2xpLXdlZXhcXFxcdmJhb2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnBsdWdpbnNbXT1DOlxcXFx2YmFvbGktd2VleFxcXFx2YmFvbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZwbHVnaW5zPUM6XFxcXHZiYW9saS13ZWV4XFxcXHZiYW9saVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJmNvbW1lbnRzPWZhbHNlIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdHMhLi93eGMtbmF2YmFyLndlXCIpXG5cbl9fd2VleF9kZWZpbmVfXygnQHdlZXgtY29tcG9uZW50L3d4Yy1uYXZiYXInLCBbXSwgZnVuY3Rpb24oX193ZWV4X3JlcXVpcmVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X21vZHVsZV9fKSB7XG5cbiAgICBfX3dlZXhfc2NyaXB0X18oX193ZWV4X21vZHVsZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfcmVxdWlyZV9fKVxuICAgIGlmIChfX3dlZXhfZXhwb3J0c19fLl9fZXNNb2R1bGUgJiYgX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0KSB7XG4gICAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cyA9IF9fd2VleF9leHBvcnRzX18uZGVmYXVsdFxuICAgIH1cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnRlbXBsYXRlID0gX193ZWV4X3RlbXBsYXRlX19cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnN0eWxlID0gX193ZWV4X3N0eWxlX19cblxufSlcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1uYXZiYXIud2Vcbi8vIG1vZHVsZSBpZCA9IDgwXG4vLyBtb2R1bGUgY2h1bmtzID0gMiA0IDggMTcgMTggMjIgMjQgMjYgMjcgMjggMjkgMzEgMzIgMzYgMzcgNDMgNDggNDkgNTEgNTIgNTMgNTQgNTUgNTYgNTkgNjEgNjIgNjMgNjQgNjUgNjYgNzAgNzIgNzMgNzQgNzggODAgODEiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gIFwiY2xhc3NMaXN0XCI6IFtcbiAgICBcImNvbnRhaW5lclwiXG4gIF0sXG4gIFwic3R5bGVcIjoge1xuICAgIFwiaGVpZ2h0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5oZWlnaHR9LFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5iYWNrZ3JvdW5kQ29sb3J9XG4gIH0sXG4gIFwiYXR0clwiOiB7XG4gICAgXCJkYXRhUm9sZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuZGF0YVJvbGV9XG4gIH0sXG4gIFwiY2hpbGRyZW5cIjogW1xuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJyaWdodC10ZXh0XCJcbiAgICAgIF0sXG4gICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMucmlnaHRJdGVtQ29sb3J9XG4gICAgICB9LFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJuYXZpSXRlbVBvc2l0aW9uXCI6IFwicmlnaHRcIixcbiAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMucmlnaHRJdGVtVGl0bGV9XG4gICAgICB9LFxuICAgICAgXCJzaG93blwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuICF0aGlzLnJpZ2h0SXRlbVNyY30sXG4gICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgIFwiY2xpY2tcIjogXCJvbmNsaWNrcmlnaHRpdGVtXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwicmlnaHQtaW1hZ2VcIlxuICAgICAgXSxcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwibmF2aUl0ZW1Qb3NpdGlvblwiOiBcInJpZ2h0XCIsXG4gICAgICAgIFwic3JjXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5yaWdodEl0ZW1TcmN9XG4gICAgICB9LFxuICAgICAgXCJzaG93blwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMucmlnaHRJdGVtU3JjfSxcbiAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgXCJjbGlja1wiOiBcIm9uY2xpY2tyaWdodGl0ZW1cIlxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcImxlZnQtdGV4dFwiXG4gICAgICBdLFxuICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgIFwiY29sb3JcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmxlZnRJdGVtQ29sb3J9XG4gICAgICB9LFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJuYXZpSXRlbVBvc2l0aW9uXCI6IFwibGVmdFwiLFxuICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5sZWZ0SXRlbVRpdGxlfVxuICAgICAgfSxcbiAgICAgIFwic2hvd25cIjogZnVuY3Rpb24gKCkge3JldHVybiAhdGhpcy5sZWZ0SXRlbVNyY30sXG4gICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgIFwiY2xpY2tcIjogXCJvbmNsaWNrbGVmdGl0ZW1cIlxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJsZWZ0LWltYWdlXCJcbiAgICAgIF0sXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcIm5hdmlJdGVtUG9zaXRpb25cIjogXCJsZWZ0XCIsXG4gICAgICAgIFwic3JjXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5sZWZ0SXRlbVNyY31cbiAgICAgIH0sXG4gICAgICBcInNob3duXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5sZWZ0SXRlbVNyY30sXG4gICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgIFwiY2xpY2tcIjogXCJvbmNsaWNrbGVmdGl0ZW1cIlxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcImNlbnRlci10ZXh0XCJcbiAgICAgIF0sXG4gICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudGl0bGVDb2xvcn1cbiAgICAgIH0sXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcIm5hdmlJdGVtUG9zaXRpb25cIjogXCJjZW50ZXJcIixcbiAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudGl0bGV9XG4gICAgICB9XG4gICAgfVxuICBdXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi9+L3dlZXgtY29tcG9uZW50cy9zcmMvd3hjLW5hdmJhci53ZVxuLy8gbW9kdWxlIGlkID0gODFcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDQgOCAxNyAxOCAyMiAyNCAyNiAyNyAyOCAyOSAzMSAzMiAzNiAzNyA0MyA0OCA0OSA1MSA1MiA1MyA1NCA1NSA1NiA1OSA2MSA2MiA2MyA2NCA2NSA2NiA3MCA3MiA3MyA3NCA3OCA4MCA4MSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcImNvbnRhaW5lclwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJwb3NpdGlvblwiOiBcImZpeGVkXCIsXG4gICAgXCJ0b3BcIjogMCxcbiAgICBcImxlZnRcIjogMCxcbiAgICBcInJpZ2h0XCI6IDAsXG4gICAgXCJ3aWR0aFwiOiA3NTBcbiAgfSxcbiAgXCJyaWdodC10ZXh0XCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcImJvdHRvbVwiOiAyOCxcbiAgICBcInJpZ2h0XCI6IDMyLFxuICAgIFwidGV4dEFsaWduXCI6IFwicmlnaHRcIixcbiAgICBcImZvbnRTaXplXCI6IDMyLFxuICAgIFwiZm9udEZhbWlseVwiOiBcIidPcGVuIFNhbnMnLCBzYW5zLXNlcmlmXCJcbiAgfSxcbiAgXCJsZWZ0LXRleHRcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwiYm90dG9tXCI6IDI4LFxuICAgIFwibGVmdFwiOiAzMixcbiAgICBcInRleHRBbGlnblwiOiBcImxlZnRcIixcbiAgICBcImZvbnRTaXplXCI6IDMyLFxuICAgIFwiZm9udEZhbWlseVwiOiBcIidPcGVuIFNhbnMnLCBzYW5zLXNlcmlmXCJcbiAgfSxcbiAgXCJjZW50ZXItdGV4dFwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgXCJib3R0b21cIjogMjUsXG4gICAgXCJsZWZ0XCI6IDE3MixcbiAgICBcInJpZ2h0XCI6IDE3MixcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiLFxuICAgIFwiZm9udFNpemVcIjogMzYsXG4gICAgXCJmb250V2VpZ2h0XCI6IFwiYm9sZFwiXG4gIH0sXG4gIFwibGVmdC1pbWFnZVwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgXCJib3R0b21cIjogMjAsXG4gICAgXCJsZWZ0XCI6IDI4LFxuICAgIFwid2lkdGhcIjogNTAsXG4gICAgXCJoZWlnaHRcIjogNTBcbiAgfSxcbiAgXCJyaWdodC1pbWFnZVwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgXCJib3R0b21cIjogMjAsXG4gICAgXCJyaWdodFwiOiAyOCxcbiAgICBcIndpZHRoXCI6IDUwLFxuICAgIFwiaGVpZ2h0XCI6IDUwXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL34vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtbmF2YmFyLndlXG4vLyBtb2R1bGUgaWQgPSA4MlxuLy8gbW9kdWxlIGNodW5rcyA9IDIgNCA4IDE3IDE4IDIyIDI0IDI2IDI3IDI4IDI5IDMxIDMyIDM2IDM3IDQzIDQ4IDQ5IDUxIDUyIDUzIDU0IDU1IDU2IDU5IDYxIDYyIDYzIDY0IDY1IDY2IDcwIDcyIDczIDc0IDc4IDgwIDgxIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIiBzdHlsZT1cImhlaWdodDp7e2hlaWdodH19OyBiYWNrZ3JvdW5kLWNvbG9yOnt7YmFja2dyb3VuZENvbG9yfX07XCIgZGF0YS1yb2xlPXt7ZGF0YVJvbGV9fT5cbiAgICAgICAgPHRleHQgY2xhc3M9XCJyaWdodC10ZXh0XCIgc3R5bGU9XCJjb2xvcjp7e3JpZ2h0SXRlbUNvbG9yfX07XCIgbmF2aS1pdGVtLXBvc2l0aW9uPVwicmlnaHRcIiBpZj17eyFyaWdodEl0ZW1TcmN9fSBvbmNsaWNrID0gXCJvbmNsaWNrcmlnaHRpdGVtXCI+e3tyaWdodEl0ZW1UaXRsZX19PC90ZXh0PlxuICAgICAgICA8aW1hZ2UgY2xhc3M9XCJyaWdodC1pbWFnZVwiIG5hdmktaXRlbS1wb3NpdGlvbj1cInJpZ2h0XCIgc3JjPXt7cmlnaHRJdGVtU3JjfX0gaWY9e3tyaWdodEl0ZW1TcmN9fSBvbmNsaWNrPVwib25jbGlja3JpZ2h0aXRlbVwiPjwvaW1hZ2U+XG4gICAgICAgIDx0ZXh0IGNsYXNzPVwibGVmdC10ZXh0XCIgc3R5bGU9XCJjb2xvcjp7e2xlZnRJdGVtQ29sb3J9fTtcIiBuYXZpLWl0ZW0tcG9zaXRpb249XCJsZWZ0XCIgaWY9e3shbGVmdEl0ZW1TcmN9fSBvbmNsaWNrPSBcIm9uY2xpY2tsZWZ0aXRlbVwiPnt7bGVmdEl0ZW1UaXRsZX19PC90ZXh0PlxuICAgICAgICA8aW1hZ2UgY2xhc3M9XCJsZWZ0LWltYWdlXCIgbmF2aS1pdGVtLXBvc2l0aW9uPVwibGVmdFwiIHNyYz17e2xlZnRJdGVtU3JjfX0gaWY9e3tsZWZ0SXRlbVNyY319IG9uY2xpY2s9XCJvbmNsaWNrbGVmdGl0ZW1cIj48L2ltYWdlPlxuICAgICAgICA8dGV4dCBjbGFzcz1cImNlbnRlci10ZXh0XCIgc3R5bGU9XCJjb2xvcjp7e3RpdGxlQ29sb3J9fTtcIiBuYXZpLWl0ZW0tcG9zaXRpb249XCJjZW50ZXJcIj57e3RpdGxlfX08L3RleHQ+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c3R5bGU+XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7IFxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7IFxuICAgICAgICB0b3A6IDA7IFxuICAgICAgICBsZWZ0OiAwOyBcbiAgICAgICAgcmlnaHQ6IDA7IFxuICAgICAgICB3aWR0aDogNzUwO1xuICAgIH1cbiAgICAucmlnaHQtdGV4dCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXG4gICAgICAgIGJvdHRvbTogMjg7IFxuICAgICAgICByaWdodDogMzI7IFxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgZm9udC1zaXplOiAzMjsgXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgICB9XG4gICAgLmxlZnQtdGV4dCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXG4gICAgICAgIGJvdHRvbTogMjg7IFxuICAgICAgICBsZWZ0IDozMjsgXG4gICAgICAgIHRleHQtYWxpZ24gOmxlZnQ7ICBcbiAgICAgICAgZm9udC1zaXplOiAzMjsgXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgICB9XG4gICAgLmNlbnRlci10ZXh0IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyBcbiAgICAgICAgYm90dG9tOiAyNTsgXG4gICAgICAgIGxlZnQ6IDE3MjsgXG4gICAgICAgIHJpZ2h0OiAxNzI7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXG4gICAgICAgIGZvbnQtc2l6ZTogMzY7IFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG4gICAgLmxlZnQtaW1hZ2Uge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxuICAgICAgICBib3R0b206IDIwOyBcbiAgICAgICAgbGVmdDogMjg7IFxuICAgICAgICB3aWR0aDogNTA7IFxuICAgICAgICBoZWlnaHQ6IDUwO1xuICAgIH1cbiAgICAucmlnaHQtaW1hZ2Uge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxuICAgICAgICBib3R0b206IDIwOyBcbiAgICAgICAgcmlnaHQ6IDI4OyBcbiAgICAgICAgd2lkdGg6IDUwOyBcbiAgICAgICAgaGVpZ2h0OiA1MDtcbiAgICB9XG48L3N0eWxlPlxuXG48c2NyaXB0PlxuICAgIG1vZHVsZS5leHBvcnRzID0ge1xuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgZGF0YVJvbGU6ICduYXZiYXInLFxuXG4gICAgICAgICAgLy/lr7zoiKrmnaHog4zmma/oibJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdibGFjaycsXG5cbiAgICAgICAgICAvL+WvvOiIquadoemrmOW6plxuICAgICAgICAgIGhlaWdodDogODgsXG5cbiAgICAgICAgICAvL+WvvOiIquadoeagh+mimCBcbiAgICAgICAgICB0aXRsZTogXCJcIixcblxuICAgICAgICAgIC8v5a+86Iiq5p2h5qCH6aKY6aKc6ImyXG4gICAgICAgICAgdGl0bGVDb2xvcjogJ2JsYWNrJyxcblxuICAgICAgICAgIC8v5Y+z5L6n5oyJ6ZKu5Zu+54mHXG4gICAgICAgICAgcmlnaHRJdGVtU3JjOiAnJyxcblxuICAgICAgICAgIC8v5Y+z5L6n5oyJ6ZKu5qCH6aKYXG4gICAgICAgICAgcmlnaHRJdGVtVGl0bGU6ICcnLFxuXG4gICAgICAgICAgLy/lj7PkvqfmjInpkq7moIfpopjpopzoibJcbiAgICAgICAgICByaWdodEl0ZW1Db2xvcjogJ2JsYWNrJyxcblxuICAgICAgICAgIC8v5bem5L6n5oyJ6ZKu5Zu+54mHXG4gICAgICAgICAgbGVmdEl0ZW1TcmM6ICcnLFxuXG4gICAgICAgICAgLy/lt6bkvqfmjInpkq7moIfpophcbiAgICAgICAgICBsZWZ0SXRlbVRpdGxlOiAnJyxcblxuICAgICAgICAgIC8v5bem5L6n5oyJ6ZKu6aKc6ImyXG4gICAgICAgICAgbGVmdEl0ZW1Db2xvcjogJ2JsYWNrJyxcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgIG9uY2xpY2tyaWdodGl0ZW06IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB0aGlzLiRkaXNwYXRjaCgnbmF2aUJhci5yaWdodEl0ZW0uY2xpY2snLCB7fSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBvbmNsaWNrbGVmdGl0ZW06IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB0aGlzLiRkaXNwYXRjaCgnbmF2aUJhci5sZWZ0SXRlbS5jbGljaycsIHt9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtbmF2YmFyLndlPzA4NmVmODNkIiwicmVxdWlyZShcIi4vd3hjLW5hdmJhci53ZVwiKVxudmFyIF9fd2VleF90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi93eGMtbmF2cGFnZS53ZVwiKVxudmFyIF9fd2VleF9zdHlsZV9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi93eGMtbmF2cGFnZS53ZVwiKVxudmFyIF9fd2VleF9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL3NjcmlwdC5qcyFiYWJlbC1sb2FkZXI/cHJlc2V0c1tdPUM6XFxcXHZiYW9saS13ZWV4XFxcXHZiYW9saVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcHJlc2V0LWVzMjAxNSZwcmVzZXRzPUM6XFxcXHZiYW9saS13ZWV4XFxcXHZiYW9saVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcHJlc2V0LWVzMjAxNSZwbHVnaW5zW109QzpcXFxcdmJhb2xpLXdlZXhcXFxcdmJhb2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmcGx1Z2lucz1DOlxcXFx2YmFvbGktd2VleFxcXFx2YmFvbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZjb21tZW50cz1mYWxzZSEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zY3JpcHRzIS4vd3hjLW5hdnBhZ2Uud2VcIilcblxuX193ZWV4X2RlZmluZV9fKCdAd2VleC1jb21wb25lbnQvd3hjLW5hdnBhZ2UnLCBbXSwgZnVuY3Rpb24oX193ZWV4X3JlcXVpcmVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X21vZHVsZV9fKSB7XG5cbiAgICBfX3dlZXhfc2NyaXB0X18oX193ZWV4X21vZHVsZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfcmVxdWlyZV9fKVxuICAgIGlmIChfX3dlZXhfZXhwb3J0c19fLl9fZXNNb2R1bGUgJiYgX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0KSB7XG4gICAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cyA9IF9fd2VleF9leHBvcnRzX18uZGVmYXVsdFxuICAgIH1cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnRlbXBsYXRlID0gX193ZWV4X3RlbXBsYXRlX19cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnN0eWxlID0gX193ZWV4X3N0eWxlX19cblxufSlcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1uYXZwYWdlLndlXG4vLyBtb2R1bGUgaWQgPSA4NFxuLy8gbW9kdWxlIGNodW5rcyA9IDIgNCA4IDE3IDE4IDIyIDI0IDI2IDI3IDI4IDI5IDMxIDMyIDM2IDM3IDQzIDQ4IDQ5IDUxIDUyIDUzIDU0IDU1IDU2IDU5IDYxIDYyIDYzIDY0IDY1IDY2IDcwIDcyIDczIDc0IDc4IDgwIDgxIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImRpdlwiLFxuICBcImNsYXNzTGlzdFwiOiBbXG4gICAgXCJ3cmFwcGVyXCJcbiAgXSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwid3hjLW5hdmJhclwiLFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJkYXRhUm9sZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuZGF0YVJvbGV9LFxuICAgICAgICBcImhlaWdodFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuaGVpZ2h0fSxcbiAgICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmJhY2tncm91bmRDb2xvcn0sXG4gICAgICAgIFwidGl0bGVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnRpdGxlfSxcbiAgICAgICAgXCJ0aXRsZUNvbG9yXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy50aXRsZUNvbG9yfSxcbiAgICAgICAgXCJsZWZ0SXRlbVNyY1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMubGVmdEl0ZW1TcmN9LFxuICAgICAgICBcImxlZnRJdGVtVGl0bGVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmxlZnRJdGVtVGl0bGV9LFxuICAgICAgICBcImxlZnRJdGVtQ29sb3JcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmxlZnRJdGVtQ29sb3J9LFxuICAgICAgICBcInJpZ2h0SXRlbVNyY1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMucmlnaHRJdGVtU3JjfSxcbiAgICAgICAgXCJyaWdodEl0ZW1UaXRsZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMucmlnaHRJdGVtVGl0bGV9LFxuICAgICAgICBcInJpZ2h0SXRlbUNvbG9yXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5yaWdodEl0ZW1Db2xvcn1cbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcIndyYXBwZXJcIlxuICAgICAgXSxcbiAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICBcIm1hcmdpblRvcFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuaGVpZ2h0fVxuICAgICAgfSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiY29udGVudFwiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+L3dlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuL34vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtbmF2cGFnZS53ZVxuLy8gbW9kdWxlIGlkID0gODVcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDQgOCAxNyAxOCAyMiAyNCAyNiAyNyAyOCAyOSAzMSAzMiAzNiAzNyA0MyA0OCA0OSA1MSA1MiA1MyA1NCA1NSA1NiA1OSA2MSA2MiA2MyA2NCA2NSA2NiA3MCA3MiA3MyA3NCA3OCA4MCA4MSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcIndyYXBwZXJcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwidG9wXCI6IDAsXG4gICAgXCJsZWZ0XCI6IDAsXG4gICAgXCJyaWdodFwiOiAwLFxuICAgIFwiYm90dG9tXCI6IDAsXG4gICAgXCJ3aWR0aFwiOiA3NTBcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vd2VleC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c3R5bGVzIS4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1uYXZwYWdlLndlXG4vLyBtb2R1bGUgaWQgPSA4NlxuLy8gbW9kdWxlIGNodW5rcyA9IDIgNCA4IDE3IDE4IDIyIDI0IDI2IDI3IDI4IDI5IDMxIDMyIDM2IDM3IDQzIDQ4IDQ5IDUxIDUyIDUzIDU0IDU1IDU2IDU5IDYxIDYyIDYzIDY0IDY1IDY2IDcwIDcyIDczIDc0IDc4IDgwIDgxIiwiPHRlbXBsYXRlPlxuICBcdDxkaXYgY2xhc3M9XCJ3cmFwcGVyXCI+XG4gICAgXHQgIDx3eGMtbmF2YmFyIGRhdGEtcm9sZT17e2RhdGFSb2xlfX0gaGVpZ2h0PXt7aGVpZ2h0fX0gYmFja2dyb3VuZC1jb2xvcj17e2JhY2tncm91bmRDb2xvcn19IHRpdGxlPXt7dGl0bGV9fSB0aXRsZS1jb2xvcj17e3RpdGxlQ29sb3J9fSBsZWZ0LWl0ZW0tc3JjPXt7bGVmdEl0ZW1TcmN9fSBsZWZ0LWl0ZW0tdGl0bGU9e3tsZWZ0SXRlbVRpdGxlfX0gbGVmdC1pdGVtLWNvbG9yPXt7bGVmdEl0ZW1Db2xvcn19IHJpZ2h0LWl0ZW0tc3JjPXt7cmlnaHRJdGVtU3JjfX0gcmlnaHQtaXRlbS10aXRsZT17e3JpZ2h0SXRlbVRpdGxlfX0gcmlnaHQtaXRlbS1jb2xvcj17e3JpZ2h0SXRlbUNvbG9yfX0+PC93eGMtbmF2YmFyPlxuICAgIFx0ICA8ZGl2IGNsYXNzPVwid3JhcHBlclwiIHN0eWxlPVwibWFyZ2luLXRvcDp7e2hlaWdodH19XCI+XG4gICAgXHRcdCAgICA8Y29udGVudD48L2NvbnRlbnQ+XG4gICAgXHQgIDwvZGl2PlxuICBcdDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHN0eWxlPlxuICBcdC53cmFwcGVyIHtcbiAgXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTsgXG4gIFx0XHR0b3A6IDA7IFxuICBcdFx0bGVmdDogMDsgXG4gIFx0XHRyaWdodDogMDsgXG4gIFx0XHRib3R0b206IDA7IFxuICBcdFx0d2lkdGg6IDc1MDtcbiAgXHR9XG48L3N0eWxlPlxuXG48c2NyaXB0PlxuICAgIG1vZHVsZS5leHBvcnRzID0ge1xuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgZGF0YVJvbGU6ICduYXZiYXInLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ2JsYWNrJyxcbiAgICAgICAgICBoZWlnaHQ6IDg4LFxuICAgICAgICAgIHRpdGxlOiBcIlwiLFxuICAgICAgICAgIHRpdGxlQ29sb3I6ICdibGFjaycsXG4gICAgICAgICAgcmlnaHRJdGVtU3JjOiAnJyxcbiAgICAgICAgICByaWdodEl0ZW1UaXRsZTogJycsXG4gICAgICAgICAgcmlnaHRJdGVtQ29sb3I6ICdibGFjaycsXG4gICAgICAgICAgbGVmdEl0ZW1TcmM6ICcnLFxuICAgICAgICAgIGxlZnRJdGVtVGl0bGU6ICcnLFxuICAgICAgICAgIGxlZnRJdGVtQ29sb3I6ICdibGFjaycsXG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3dlZXgtY29tcG9uZW50cy9zcmMvd3hjLW5hdnBhZ2Uud2U/NjY3Y2RlNjYiLCJyZXF1aXJlKFwiLi93eGMtdGFiaXRlbS53ZVwiKVxudmFyIF9fd2VleF90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi93eGMtdGFiYmFyLndlXCIpXG52YXIgX193ZWV4X3N0eWxlX18gPSByZXF1aXJlKFwiISEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL3d4Yy10YWJiYXIud2VcIilcbnZhciBfX3dlZXhfc2NyaXB0X18gPSByZXF1aXJlKFwiISEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9zY3JpcHQuanMhYmFiZWwtbG9hZGVyP3ByZXNldHNbXT1DOlxcXFx2YmFvbGktd2VleFxcXFx2YmFvbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXByZXNldC1lczIwMTUmcHJlc2V0cz1DOlxcXFx2YmFvbGktd2VleFxcXFx2YmFvbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXByZXNldC1lczIwMTUmcGx1Z2luc1tdPUM6XFxcXHZiYW9saS13ZWV4XFxcXHZiYW9saVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJnBsdWdpbnM9QzpcXFxcdmJhb2xpLXdlZXhcXFxcdmJhb2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmY29tbWVudHM9ZmFsc2UhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c2NyaXB0cyEuL3d4Yy10YWJiYXIud2VcIilcblxuX193ZWV4X2RlZmluZV9fKCdAd2VleC1jb21wb25lbnQvd3hjLXRhYmJhcicsIFtdLCBmdW5jdGlvbihfX3dlZXhfcmVxdWlyZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfbW9kdWxlX18pIHtcblxuICAgIF9fd2VleF9zY3JpcHRfXyhfX3dlZXhfbW9kdWxlX18sIF9fd2VleF9leHBvcnRzX18sIF9fd2VleF9yZXF1aXJlX18pXG4gICAgaWYgKF9fd2VleF9leHBvcnRzX18uX19lc01vZHVsZSAmJiBfX3dlZXhfZXhwb3J0c19fLmRlZmF1bHQpIHtcbiAgICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzID0gX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0XG4gICAgfVxuXG4gICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMudGVtcGxhdGUgPSBfX3dlZXhfdGVtcGxhdGVfX1xuXG4gICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMuc3R5bGUgPSBfX3dlZXhfc3R5bGVfX1xuXG59KVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtY29tcG9uZW50cy9zcmMvd3hjLXRhYmJhci53ZVxuLy8gbW9kdWxlIGlkID0gODhcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDQgOCAxNyAxOCAyMiAyNCAyNiAyNyAyOCAyOSAzMSAzMiAzNiAzNyA0MyA0OCA0OSA1MSA1MiA1MyA1NCA1NSA1NiA1OSA2MSA2MiA2MyA2NCA2NSA2NiA3MCA3MiA3MyA3NCA3OCA4MCA4MSIsInZhciBfX3dlZXhfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vd3hjLXRhYml0ZW0ud2VcIilcbnZhciBfX3dlZXhfc3R5bGVfXyA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c3R5bGVzIS4vd3hjLXRhYml0ZW0ud2VcIilcbnZhciBfX3dlZXhfc2NyaXB0X18gPSByZXF1aXJlKFwiISEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9zY3JpcHQuanMhYmFiZWwtbG9hZGVyP3ByZXNldHNbXT1DOlxcXFx2YmFvbGktd2VleFxcXFx2YmFvbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXByZXNldC1lczIwMTUmcHJlc2V0cz1DOlxcXFx2YmFvbGktd2VleFxcXFx2YmFvbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXByZXNldC1lczIwMTUmcGx1Z2luc1tdPUM6XFxcXHZiYW9saS13ZWV4XFxcXHZiYW9saVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJnBsdWdpbnM9QzpcXFxcdmJhb2xpLXdlZXhcXFxcdmJhb2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmY29tbWVudHM9ZmFsc2UhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c2NyaXB0cyEuL3d4Yy10YWJpdGVtLndlXCIpXG5cbl9fd2VleF9kZWZpbmVfXygnQHdlZXgtY29tcG9uZW50L3d4Yy10YWJpdGVtJywgW10sIGZ1bmN0aW9uKF9fd2VleF9yZXF1aXJlX18sIF9fd2VleF9leHBvcnRzX18sIF9fd2VleF9tb2R1bGVfXykge1xuXG4gICAgX193ZWV4X3NjcmlwdF9fKF9fd2VleF9tb2R1bGVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X3JlcXVpcmVfXylcbiAgICBpZiAoX193ZWV4X2V4cG9ydHNfXy5fX2VzTW9kdWxlICYmIF9fd2VleF9leHBvcnRzX18uZGVmYXVsdCkge1xuICAgICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMgPSBfX3dlZXhfZXhwb3J0c19fLmRlZmF1bHRcbiAgICB9XG5cbiAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cy50ZW1wbGF0ZSA9IF9fd2VleF90ZW1wbGF0ZV9fXG5cbiAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cy5zdHlsZSA9IF9fd2VleF9zdHlsZV9fXG5cbn0pXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtdGFiaXRlbS53ZVxuLy8gbW9kdWxlIGlkID0gODlcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDQgOCAxNyAxOCAyMiAyNCAyNiAyNyAyOCAyOSAzMSAzMiAzNiAzNyA0MyA0OCA0OSA1MSA1MiA1MyA1NCA1NSA1NiA1OSA2MSA2MiA2MyA2NCA2NSA2NiA3MCA3MiA3MyA3NCA3OCA4MCA4MSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJkaXZcIixcbiAgXCJjbGFzc0xpc3RcIjogW1xuICAgIFwiY29udGFpbmVyXCJcbiAgXSxcbiAgXCJzdHlsZVwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmJhY2tncm91bmRDb2xvcn1cbiAgfSxcbiAgXCJldmVudHNcIjoge1xuICAgIFwiY2xpY2tcIjogXCJvbmNsaWNraXRlbVwiXG4gIH0sXG4gIFwiY2hpbGRyZW5cIjogW1xuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwidG9wLWxpbmVcIlxuICAgICAgXSxcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwic3JjXCI6IFwiaHR0cDovL2d0bXMwMy5hbGljZG4uY29tL3Rwcy9pMy9UQjFtZHNpTXBYWFhYWHBYWFhYTnc0SklYWFgtNjQwLTQucG5nXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwidGFiLWljb25cIlxuICAgICAgXSxcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwic3JjXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5pY29ufVxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcInRhYi10ZXh0XCJcbiAgICAgIF0sXG4gICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudGl0bGVDb2xvcn1cbiAgICAgIH0sXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy50aXRsZX1cbiAgICAgIH1cbiAgICB9XG4gIF1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+L3dlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuL34vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtdGFiaXRlbS53ZVxuLy8gbW9kdWxlIGlkID0gOTBcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDQgOCAxNyAxOCAyMiAyNCAyNiAyNyAyOCAyOSAzMSAzMiAzNiAzNyA0MyA0OCA0OSA1MSA1MiA1MyA1NCA1NSA1NiA1OSA2MSA2MiA2MyA2NCA2NSA2NiA3MCA3MiA3MyA3NCA3OCA4MCA4MSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcImNvbnRhaW5lclwiOiB7XG4gICAgXCJmbGV4XCI6IDEsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwiaGVpZ2h0XCI6IDg4XG4gIH0sXG4gIFwidG9wLWxpbmVcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwidG9wXCI6IDAsXG4gICAgXCJsZWZ0XCI6IDAsXG4gICAgXCJyaWdodFwiOiAwLFxuICAgIFwiaGVpZ2h0XCI6IDJcbiAgfSxcbiAgXCJ0YWItaWNvblwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogNSxcbiAgICBcIndpZHRoXCI6IDQwLFxuICAgIFwiaGVpZ2h0XCI6IDQwXG4gIH0sXG4gIFwidGFiLXRleHRcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IDUsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICBcImZvbnRTaXplXCI6IDIwXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL34vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtdGFiaXRlbS53ZVxuLy8gbW9kdWxlIGlkID0gOTFcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDQgOCAxNyAxOCAyMiAyNCAyNiAyNyAyOCAyOSAzMSAzMiAzNiAzNyA0MyA0OCA0OSA1MSA1MiA1MyA1NCA1NSA1NiA1OSA2MSA2MiA2MyA2NCA2NSA2NiA3MCA3MiA3MyA3NCA3OCA4MCA4MSIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiB7e2JhY2tncm91bmRDb2xvcn19XCIgIG9uY2xpY2s9XCJvbmNsaWNraXRlbVwiPlxuICAgICAgICA8aW1hZ2UgY2xhc3M9XCJ0b3AtbGluZVwiIHNyYyA9IFwiaHR0cDovL2d0bXMwMy5hbGljZG4uY29tL3Rwcy9pMy9UQjFtZHNpTXBYWFhYWHBYWFhYTnc0SklYWFgtNjQwLTQucG5nXCI+PC9pbWFnZT5cbiAgICAgICAgPGltYWdlIGNsYXNzPVwidGFiLWljb25cIiBzcmMgPSB7e2ljb259fT48L2ltYWdlPlxuICAgICAgICA8dGV4dCBjbGFzcz1cInRhYi10ZXh0XCIgc3R5bGU9XCJjb2xvcjoge3t0aXRsZUNvbG9yfX1cIj57e3RpdGxlfX08L3RleHQ+XG4gICAgPC9kaXY+ICBcbjwvdGVtcGxhdGU+XG5cbjxzdHlsZT5cbiAgICAuY29udGFpbmVyIHtcbiAgICAgICAgZmxleDogMTsgXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IFxuICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7IFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyOyBcbiAgICAgICAgaGVpZ2h0OiA4ODtcbiAgICB9XG4gICAgLnRvcC1saW5lIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyBcbiAgICAgICAgdG9wOiAwOyBcbiAgICAgICAgbGVmdDogMDsgXG4gICAgICAgIHJpZ2h0OiAwOyBcbiAgICAgICAgaGVpZ2h0OiAyO1xuICAgIH1cbiAgICAudGFiLWljb24ge1xuICAgICAgICBtYXJnaW4tdG9wOiA1OyBcbiAgICAgICAgd2lkdGg6IDQwOyBcbiAgICAgICAgaGVpZ2h0OiA0MFxuICAgIH1cbiAgICAudGFiLXRleHQge1xuICAgICAgICBtYXJnaW4tdG9wOiA1OyBcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyAgXG4gICAgICAgIGZvbnQtc2l6ZTogMjA7XG4gICAgfVxuPC9zdHlsZT5cblxuPHNjcmlwdD5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGluZGV4OiAwLFxuICAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgICB0aXRsZUNvbG9yOiAnIzAwMDAwMCcsXG4gICAgICAgICAgaWNvbjogJycsXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZmZmZicsXG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICBvbmNsaWNraXRlbTogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHZhciB2bSA9IHRoaXM7XG4gICAgICAgICAgICB2YXIgcGFyYW1zID0ge1xuICAgICAgICAgICAgICBpbmRleDogdm0uaW5kZXhcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2bS4kZGlzcGF0Y2goJ3RhYkl0ZW0ub25DbGljaycsIHBhcmFtcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy10YWJpdGVtLndlP2ZiYmExNDdhIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImRpdlwiLFxuICBcImNsYXNzTGlzdFwiOiBbXG4gICAgXCJ3cmFwcGVyXCJcbiAgXSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZW1iZWRcIixcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJjb250ZW50XCJcbiAgICAgIF0sXG4gICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy52aXNpYmlsaXR5fVxuICAgICAgfSxcbiAgICAgIFwicmVwZWF0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy50YWJJdGVtc30sXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcInNyY1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuc3JjfSxcbiAgICAgICAgXCJ0eXBlXCI6IFwid2VleFwiXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJ0YWJiYXJcIlxuICAgICAgXSxcbiAgICAgIFwiYXBwZW5kXCI6IFwidHJlZVwiLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJ3eGMtdGFiaXRlbVwiLFxuICAgICAgICAgIFwicmVwZWF0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy50YWJJdGVtc30sXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwiaW5kZXhcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmluZGV4fSxcbiAgICAgICAgICAgIFwiaWNvblwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuaWNvbn0sXG4gICAgICAgICAgICBcInRpdGxlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy50aXRsZX0sXG4gICAgICAgICAgICBcInRpdGxlQ29sb3JcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnRpdGxlQ29sb3J9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICBdXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi9+L3dlZXgtY29tcG9uZW50cy9zcmMvd3hjLXRhYmJhci53ZVxuLy8gbW9kdWxlIGlkID0gOTNcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDQgOCAxNyAxOCAyMiAyNCAyNiAyNyAyOCAyOSAzMSAzMiAzNiAzNyA0MyA0OCA0OSA1MSA1MiA1MyA1NCA1NSA1NiA1OSA2MSA2MiA2MyA2NCA2NSA2NiA3MCA3MiA3MyA3NCA3OCA4MCA4MSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcIndyYXBwZXJcIjoge1xuICAgIFwid2lkdGhcIjogNzUwLFxuICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwidG9wXCI6IDAsXG4gICAgXCJsZWZ0XCI6IDAsXG4gICAgXCJyaWdodFwiOiAwLFxuICAgIFwiYm90dG9tXCI6IDBcbiAgfSxcbiAgXCJjb250ZW50XCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcInRvcFwiOiAwLFxuICAgIFwibGVmdFwiOiAwLFxuICAgIFwicmlnaHRcIjogMCxcbiAgICBcImJvdHRvbVwiOiAwLFxuICAgIFwibWFyZ2luVG9wXCI6IDAsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogODhcbiAgfSxcbiAgXCJ0YWJiYXJcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwicG9zaXRpb25cIjogXCJmaXhlZFwiLFxuICAgIFwiYm90dG9tXCI6IDAsXG4gICAgXCJsZWZ0XCI6IDAsXG4gICAgXCJyaWdodFwiOiAwLFxuICAgIFwiaGVpZ2h0XCI6IDg4XG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL34vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtdGFiYmFyLndlXG4vLyBtb2R1bGUgaWQgPSA5NFxuLy8gbW9kdWxlIGNodW5rcyA9IDIgNCA4IDE3IDE4IDIyIDI0IDI2IDI3IDI4IDI5IDMxIDMyIDM2IDM3IDQzIDQ4IDQ5IDUxIDUyIDUzIDU0IDU1IDU2IDU5IDYxIDYyIDYzIDY0IDY1IDY2IDcwIDcyIDczIDc0IDc4IDgwIDgxIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJ3cmFwcGVyXCI+XG4gICAgICAgIDxlbWJlZCBjbGFzcz1cImNvbnRlbnRcIiBzdHlsZT1cInZpc2liaWxpdHk6e3t2aXNpYmlsaXR5fX1cIiByZXBlYXQ9e3t0YWJJdGVtc319IHNyYz17e3NyY319IHR5cGU9XCJ3ZWV4XCI+PC9lbWJlZD5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRhYmJhclwiIGFwcGVuZCA9IFwidHJlZVwiPlxuICAgICAgICAgICAgPHd4Yy10YWJpdGVtIHJlcGVhdD17e3RhYkl0ZW1zfX0gaW5kZXg9e3tpbmRleH19IGljb249e3tpY29ufX0gdGl0bGU9e3t0aXRsZX19IHRpdGxlLWNvbG9yPXt7dGl0bGVDb2xvcn19Pjwvd3hjLXRhYkl0ZW0+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHN0eWxlPlxuICAgIC53cmFwcGVyIHsgXG4gICAgICAgIHdpZHRoOiA3NTA7IFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxuICAgICAgICB0b3A6IDA7IFxuICAgICAgICBsZWZ0OiAwOyBcbiAgICAgICAgcmlnaHQ6IDA7IFxuICAgICAgICBib3R0b206IDA7XG4gICAgfVxuICAgIC5jb250ZW50IHsgXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXG4gICAgICAgIHRvcDogMDsgbGVmdDogMDsgXG4gICAgICAgIHJpZ2h0OiAwOyBcbiAgICAgICAgYm90dG9tOiAwOyBcbiAgICAgICAgbWFyZ2luLXRvcDogMDsgIFxuICAgICAgICBtYXJnaW4tYm90dG9tOiA4ODtcbiAgICB9XG4gICAgLnRhYmJhciB7IFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93OyBcbiAgICAgICAgcG9zaXRpb246IGZpeGVkOyBcbiAgICAgICAgYm90dG9tOiAwOyBcbiAgICAgICAgbGVmdDogMDsgXG4gICAgICAgIHJpZ2h0OiAwOyAgXG4gICAgICAgIGhlaWdodDogODg7XG4gICAgfVxuPC9zdHlsZT5cblxuPHNjcmlwdD5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIHRhYkl0ZW1zOiBbIF0sXG4gICAgICAgICAgc2VsZWN0ZWRJbmRleDogMCxcbiAgICAgICAgICBzZWxlY3RlZENvbG9yOiAnI2ZmMDAwMCcsXG4gICAgICAgICAgdW5zZWxlY3RlZENvbG9yOiAnIzAwMDAwMCcsXG4gICAgICAgIH0sXG4gICAgICAgIGNyZWF0ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkKHRoaXMuc2VsZWN0ZWRJbmRleCk7XG5cbiAgICAgICAgICB0aGlzLiRvbigndGFiSXRlbS5vbkNsaWNrJyxmdW5jdGlvbihlKXtcbiAgICAgICAgICAgIHZhciBkZXRhaWw9IGUuZGV0YWlsO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gZGV0YWlsLmluZGV4O1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZChkZXRhaWwuaW5kZXgpO1xuXG4gICAgICAgICAgICB2YXIgcGFyYW1zID0ge1xuICAgICAgICAgICAgICBpbmRleDogZGV0YWlsLmluZGV4XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy4kZGlzcGF0Y2goJ3RhYkJhci5vbkNsaWNrJywgcGFyYW1zKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgc2VsZWN0ZWQ6IGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLnRhYkl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRhYkl0ZW0gPSB0aGlzLnRhYkl0ZW1zW2ldO1xuICAgICAgICAgICAgICAgIGlmKGkgPT0gaW5kZXgpe1xuICAgICAgICAgICAgICAgICAgdGFiSXRlbS5pY29uID0gdGFiSXRlbS5zZWxlY3RlZEltYWdlO1xuICAgICAgICAgICAgICAgICAgdGFiSXRlbS50aXRsZUNvbG9yID0gdGhpcy5zZWxlY3RlZENvbG9yO1xuICAgICAgICAgICAgICAgICAgdGFiSXRlbS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHRhYkl0ZW0uaWNvbiA9IHRhYkl0ZW0uaW1hZ2U7XG4gICAgICAgICAgICAgICAgICB0YWJJdGVtLnRpdGxlQ29sb3IgPSB0aGlzLnVuc2VsZWN0ZWRDb2xvcjtcbiAgICAgICAgICAgICAgICAgIHRhYkl0ZW0udmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgIFxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy10YWJiYXIud2U/MDQ3NGVmOGIiLCJ2YXIgX193ZWV4X3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL3ZiYW9saS10YWItaXRlbS53ZVwiKVxudmFyIF9fd2VleF9zdHlsZV9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi92YmFvbGktdGFiLWl0ZW0ud2VcIilcbnZhciBfX3dlZXhfc2NyaXB0X18gPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvc2NyaXB0LmpzIWJhYmVsLWxvYWRlcj9wcmVzZXRzW109QzpcXFxcdmJhb2xpLXdlZXhcXFxcdmJhb2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnByZXNldHM9QzpcXFxcdmJhb2xpLXdlZXhcXFxcdmJhb2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnBsdWdpbnNbXT1DOlxcXFx2YmFvbGktd2VleFxcXFx2YmFvbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZwbHVnaW5zPUM6XFxcXHZiYW9saS13ZWV4XFxcXHZiYW9saVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJmNvbW1lbnRzPWZhbHNlIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zY3JpcHRzIS4vdmJhb2xpLXRhYi1pdGVtLndlXCIpXG5cbl9fd2VleF9kZWZpbmVfXygnQHdlZXgtY29tcG9uZW50L3ZiYW9saS10YWItaXRlbScsIFtdLCBmdW5jdGlvbihfX3dlZXhfcmVxdWlyZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfbW9kdWxlX18pIHtcblxuICAgIF9fd2VleF9zY3JpcHRfXyhfX3dlZXhfbW9kdWxlX18sIF9fd2VleF9leHBvcnRzX18sIF9fd2VleF9yZXF1aXJlX18pXG4gICAgaWYgKF9fd2VleF9leHBvcnRzX18uX19lc01vZHVsZSAmJiBfX3dlZXhfZXhwb3J0c19fLmRlZmF1bHQpIHtcbiAgICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzID0gX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0XG4gICAgfVxuXG4gICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMudGVtcGxhdGUgPSBfX3dlZXhfdGVtcGxhdGVfX1xuXG4gICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMuc3R5bGUgPSBfX3dlZXhfc3R5bGVfX1xuXG59KVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW5jbHVkZS92YmFvbGktdGFiLWl0ZW0ud2Vcbi8vIG1vZHVsZSBpZCA9IDE4OVxuLy8gbW9kdWxlIGNodW5rcyA9IDIyIDI4IDM2IDM3IDU0IDY2IDczIDc0IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImRpdlwiLFxuICBcImNsYXNzTGlzdFwiOiBbXG4gICAgXCJjb250YWluZXJcIlxuICBdLFxuICBcInN0eWxlXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuYmFja2dyb3VuZENvbG9yfVxuICB9LFxuICBcImV2ZW50c1wiOiB7XG4gICAgXCJjbGlja1wiOiBcIm9uY2xpY2tpdGVtXCJcbiAgfSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcInRhYi10ZXh0XCJcbiAgICAgIF0sXG4gICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudGl0bGVDb2xvcn1cbiAgICAgIH0sXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy50aXRsZX1cbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwidG9wLWxpbmVcIlxuICAgICAgXSxcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwic3JjXCI6IFwiaHR0cDovL2d0bXMwMy5hbGljZG4uY29tL3Rwcy9pMy9UQjFtZHNpTXBYWFhYWHBYWFhYTnc0SklYWFgtNjQwLTQucG5nXCJcbiAgICAgIH1cbiAgICB9XG4gIF1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+L3dlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuL34vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL3NyYy9pbmNsdWRlL3ZiYW9saS10YWItaXRlbS53ZVxuLy8gbW9kdWxlIGlkID0gMTkwXG4vLyBtb2R1bGUgY2h1bmtzID0gMjIgMjMgMjggMzYgMzcgNTQgNjYgNzMgNzQiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJjb250YWluZXJcIjoge1xuICAgIFwiZmxleFwiOiAxLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImhlaWdodFwiOiA3NFxuICB9LFxuICBcInRvcC1saW5lXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcImJvdHRvbVwiOiAwLFxuICAgIFwibGVmdFwiOiAwLFxuICAgIFwicmlnaHRcIjogMCxcbiAgICBcImhlaWdodFwiOiAyXG4gIH0sXG4gIFwidGFiLXRleHRcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IDUsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICBcImZvbnRTaXplXCI6IDI0XG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL34vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL3NyYy9pbmNsdWRlL3ZiYW9saS10YWItaXRlbS53ZVxuLy8gbW9kdWxlIGlkID0gMTkxXG4vLyBtb2R1bGUgY2h1bmtzID0gMjIgMjMgMjggMzYgMzcgNTQgNjYgNzMgNzQiLCI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiB7e2JhY2tncm91bmRDb2xvcn19XCIgb25jbGljaz1cIm9uY2xpY2tpdGVtXCI+XHJcbiAgICAgICAgPHRleHQgY2xhc3M9XCJ0YWItdGV4dFwiIHN0eWxlPVwiY29sb3I6IHt7dGl0bGVDb2xvcn19XCI+e3t0aXRsZX19PC90ZXh0PlxyXG4gICAgICAgIDwhLS08aW1hZ2UgY2xhc3M9XCJ0YWItaWNvblwiIHNyYz17e2ljb259fT48L2ltYWdlPi0tPlxyXG4gICAgICAgIDxpbWFnZSBjbGFzcz1cInRvcC1saW5lXCIgc3JjPVwiaHR0cDovL2d0bXMwMy5hbGljZG4uY29tL3Rwcy9pMy9UQjFtZHNpTXBYWFhYWHBYWFhYTnc0SklYWFgtNjQwLTQucG5nXCI+PC9pbWFnZT5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG48c3R5bGU+XHJcbi5jb250YWluZXIge1xyXG4gICAgZmxleDogMTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDc0cHg7XHJcbn1cclxuXHJcbi50b3AtbGluZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxufVxyXG5cclxuLnRhYi10ZXh0IHtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG48L3N0eWxlPlxyXG48c2NyaXB0PlxyXG52YXIgZG9tID0gcmVxdWlyZSgnQHdlZXgtbW9kdWxlL2RvbScpO1xyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIGRhdGE6IHtcclxuICAgICAgICBpbmRleDogMCxcclxuICAgICAgICB0aXRsZTogJycsXHJcbiAgICAgICAgdGl0bGVDb2xvcjogJyMwMDAwMDAnLFxyXG4gICAgICAgIGljb246ICcnLFxyXG4gICAgICAgIHVybDogJycsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZmZmZicsXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIG9uY2xpY2tpdGVtOiBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIHZhciB2bSA9IHRoaXM7XHJcbiAgICAgICAgICAgIHZhciBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgICAgICBpbmRleDogdm0uaW5kZXhcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGhpcy5fcGFyZW50LiRlbWl0KCdzZWxlY3QnLCBwYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG48L3NjcmlwdD5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luY2x1ZGUvdmJhb2xpLXRhYi1pdGVtLndlPzZhN2E2ODczIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImRpdlwiLFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiaWRcIjogXCJ0YWJcIixcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJ0YWItYmFyXCJcbiAgICAgIF0sXG4gICAgICBcImFwcGVuZFwiOiBcInRyZWVcIixcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwidmJhb2xpLXRhYi1pdGVtXCIsXG4gICAgICAgICAgXCJyZXBlYXRcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnRhYkl0ZW1zfSxcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJpbmRleFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuaW5kZXh9LFxuICAgICAgICAgICAgXCJ0aXRsZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudGl0bGV9LFxuICAgICAgICAgICAgXCJ0aXRsZUNvbG9yXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy50aXRsZUNvbG9yfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwiY29udGVudFwiXG4gICAgICBdLFxuICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgIFwiZGlzcGxheVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuZGlzcGxheX1cbiAgICAgIH0sXG4gICAgICBcInJlcGVhdFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudGFiSXRlbXN9LFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJlbWJlZFwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInNyY1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuc3JjfSxcbiAgICAgICAgICAgIFwidHlwZVwiOiBcIndlZXhcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vc3JjL2luY2x1ZGUvdmJhb2xpLXRhYi53ZVxuLy8gbW9kdWxlIGlkID0gMTkzXG4vLyBtb2R1bGUgY2h1bmtzID0gMjIgMjggMzYgMzcgNTQgNjYgNzMgNzQiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ0YWItYmFyXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImhlaWdodFwiOiA3NCxcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmZmZmZcIlxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi9zcmMvaW5jbHVkZS92YmFvbGktdGFiLndlXG4vLyBtb2R1bGUgaWQgPSAxOTRcbi8vIG1vZHVsZSBjaHVua3MgPSAyMiAyOCAzNiAzNyA1NCA2NiA3MyA3NCIsIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBpZD1cInRhYlwiIGNsYXNzPVwidGFiLWJhclwiIGFwcGVuZD1cInRyZWVcIj5cclxuICAgICAgICAgICAgPHZiYW9saS10YWItaXRlbSByZXBlYXQ9e3t0YWJJdGVtc319IGluZGV4PXt7aW5kZXh9fSB0aXRsZT17e3RpdGxlfX0gdGl0bGUtY29sb3I9e3t0aXRsZUNvbG9yfX0+PC92YmFvbGktdGFiLWl0ZW0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIiBzdHlsZT1cImRpc3BsYXk6IHt7ZGlzcGxheX19XCIgcmVwZWF0PXt7dGFiSXRlbXN9fT5cclxuICAgICAgICAgICAgPGVtYmVkIHNyYz1cInt7c3JjfX1cIiB0eXBlPVwid2VleFwiPjwvZW1iZWQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuPHN0eWxlPlxyXG4udGFiLWJhciB7IGZsZXgtZGlyZWN0aW9uOiByb3c7IGhlaWdodDogNzRweDsgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgfVxyXG4vKi5jb250ZW50IHsgcG9zaXRpb246IGFic29sdXRlOyB0b3A6IDc0cHg7IGxlZnQ6IDA7IHJpZ2h0OiAwOyBib3R0b206IDA7IG1hcmdpbi1ib3R0b206IDA7IH0qL1xyXG48L3N0eWxlPlxyXG48c2NyaXB0PlxyXG52YXIgZG9tID0gcmVxdWlyZSgnQHdlZXgtbW9kdWxlL2RvbScpO1xyXG5yZXF1aXJlKCd3ZWV4LWNvbXBvbmVudHMnKTtcclxudmFyIGFwaXMgPSByZXF1aXJlKCcuLi9jb21tb24vYXBpJyk7XHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgZGF0YToge1xyXG4gICAgICAgIGJhc2VVcmw6ICcnLFxyXG4gICAgICAgIHRhYkl0ZW1zOiBbXSxcclxuICAgICAgICBzZWxlY3RlZEluZGV4OiAwLFxyXG4gICAgICAgIHNlbGVjdGVkQ29sb3I6ICcjZmY5MTI1JyxcclxuICAgICAgICB1bnNlbGVjdGVkQ29sb3I6ICcjOTc5Nzk3JyxcclxuICAgIH0sXHJcbiAgICBjcmVhdGVkOiBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgYnVuZGxlVXJsID0gdGhpcy4kZ2V0Q29uZmlnKCkuYnVuZGxlVXJsO1xyXG4gICAgICAgIHRoaXMuYmFzZVVybCA9IGFwaXMuZ2V0QmFzZVVybChidW5kbGVVcmwpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy50YWJJdGVtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgdGFiSXRlbSA9IHRoaXMudGFiSXRlbXNbaV07XHJcbiAgICAgICAgICAgIHRhYkl0ZW0uc3JjID0gdGhpcy5iYXNlVXJsICsgdGFiSXRlbS5zcmM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQodGhpcy5zZWxlY3RlZEluZGV4KTtcclxuICAgICAgICB0aGlzLiRvbignc2VsZWN0JywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5ldmVudFR5cGUgPSBldmVudC50eXBlO1xyXG4gICAgICAgICAgICB2YXIgaW5kZXggPSBldmVudC5kZXRhaWwuaW5kZXg7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IGluZGV4O1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkKGluZGV4KTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgc2VsZWN0ZWQ6IGZ1bmN0aW9uKGluZGV4KSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy50YWJJdGVtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRhYkl0ZW0gPSB0aGlzLnRhYkl0ZW1zW2ldO1xyXG4gICAgICAgICAgICAgICAgaWYgKGkgPT0gaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICB0YWJJdGVtLnRpdGxlQ29sb3IgPSB0aGlzLnNlbGVjdGVkQ29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFiSXRlbS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFiSXRlbS50aXRsZUNvbG9yID0gdGhpcy51bnNlbGVjdGVkQ29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFiSXRlbS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgIH1cclxufVxyXG48L3NjcmlwdD5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luY2x1ZGUvdmJhb2xpLXRhYi53ZT8zMTM2Nzc5NSIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGJhaWR1IG9uIDE2LzYvOC5cclxuICovXHJcblxyXG5cclxuLy8gdmFyIHN0cmVhbSA9IHJlcXVpcmUoJ0B3ZWV4LW1vZHVsZS9zdHJlYW0nKTsvL+ivtOaYrzAuMTXlt7Lnu4/mlK/mjIEs5L2G5piv5oiR5rKh55Sf5pWIXHJcblxyXG52YXIgc3RyZWFtXHJcbl9fd2VleF9kZWZpbmVfXygnQHdlZXgtdGVtcC9hcGknLCBmdW5jdGlvbiAoX193ZWV4X3JlcXVpcmVfXykge1xyXG4gICAgc3RyZWFtID0gX193ZWV4X3JlcXVpcmVfXygnQHdlZXgtbW9kdWxlL3N0cmVhbScpXHJcbn0pO1xyXG5cclxudmFyIGFwaVVSTCA9IHtcclxuICAgIGJhc2V1cmw6ICdodHRwOi8vdjMud3VmYXpodWNlLmNvbTo4MDAwL2FwaScsXHJcbiAgICBob21lUGFnZTogJy9ocC9ieW1vbnRoLycsXHJcbiAgICByZWFkaW5nQ2Fyb3VzZWw6ICcvcmVhZGluZy9jYXJvdXNlbCcsXHJcbiAgICByZWFkaW5nSW5kZXg6ICcvcmVhZGluZy9pbmRleC8nLFxyXG4gICAgZXNzYXk6ICcvZXNzYXkvJyxcclxuICAgIHNlcmlhbGNvbnRlbnQ6ICcvc2VyaWFsY29udGVudC8nLFxyXG4gICAgcXVlc3Rpb246ICcvcXVlc3Rpb24vJyxcclxuICAgIGNhcm91c2VsTGlzdDogJy9yZWFkaW5nL2Nhcm91c2VsLycsXHJcbiAgICBtb3ZpZUxpc3Q6ICcvbW92aWUvbGlzdC8nLFxyXG4gICAgbW92aWVEZXRhaWw6ICcvbW92aWUvZGV0YWlsLydcclxuXHJcbn07XHJcbmZ1bmN0aW9uIGdldERhdGEodXJsLCBjYWxsYmFjaykge1xyXG4gICAgc3RyZWFtLnNlbmRIdHRwKHtcclxuICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgIHVybDogdXJsXHJcbiAgICB9LCBmdW5jdGlvbiAocmV0KSB7XHJcbiAgICAgICAgdmFyIHJldGRhdGEgPSBKU09OLnBhcnNlKHJldCk7XHJcbiAgICAgICAgY2FsbGJhY2socmV0ZGF0YSk7XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnRzLmdldEhvbWUgPSBmdW5jdGlvbiAoZGF0ZVN0ciwgY2FsbGJhY2spIHtcclxuICAgIGdldERhdGEoYXBpVVJMLmJhc2V1cmwgKyBhcGlVUkwuaG9tZVBhZ2UgKyBkYXRlU3RyLCBjYWxsYmFjayk7XHJcbn07XHJcbmV4cG9ydHMuZ2V0UmVhZGluZ0Nhcm91c2VsID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XHJcbiAgICBnZXREYXRhKGFwaVVSTC5iYXNldXJsICsgYXBpVVJMLnJlYWRpbmdDYXJvdXNlbCwgY2FsbGJhY2spO1xyXG59O1xyXG5leHBvcnRzLmdldFJlYWRpbmdJbmRleCA9IGZ1bmN0aW9uIChpbmRleCwgY2FsbGJhY2spIHtcclxuICAgIGdldERhdGEoYXBpVVJMLmJhc2V1cmwgKyBhcGlVUkwucmVhZGluZ0luZGV4ICsgaW5kZXgsIGNhbGxiYWNrKTtcclxufTtcclxuZXhwb3J0cy5nZXRFc3NheSA9IGZ1bmN0aW9uIChpZCwgY2FsbGJhY2spIHtcclxuICAgIGdldERhdGEoYXBpVVJMLmJhc2V1cmwgKyBhcGlVUkwuZXNzYXkgKyBpZCwgY2FsbGJhY2spO1xyXG59O1xyXG5leHBvcnRzLmdldFNlcmlhbENvbnRlbnQgPSBmdW5jdGlvbiAoaWQsIGNhbGxiYWNrKSB7XHJcbiAgICBnZXREYXRhKGFwaVVSTC5iYXNldXJsICsgYXBpVVJMLnNlcmlhbGNvbnRlbnQgKyBpZCwgY2FsbGJhY2spO1xyXG59O1xyXG5leHBvcnRzLmdldFF1ZXN0aW9uRGV0YWlsID0gZnVuY3Rpb24gKGlkLCBjYWxsYmFjaykge1xyXG4gICAgZ2V0RGF0YShhcGlVUkwuYmFzZXVybCArIGFwaVVSTC5xdWVzdGlvbiArIGlkLCBjYWxsYmFjayk7XHJcblxyXG59O1xyXG5leHBvcnRzLmdldENhcm91c2VMaXN0ID0gZnVuY3Rpb24gKGlkLCBjYWxsYmFjaykge1xyXG4gICAgZ2V0RGF0YShhcGlVUkwuYmFzZXVybCArIGFwaVVSTC5jYXJvdXNlbExpc3QgKyBpZCwgY2FsbGJhY2spO1xyXG59O1xyXG5leHBvcnRzLmdldE1vdmllTGlzdCA9IGZ1bmN0aW9uIChpZCwgY2FsbGJhY2spIHtcclxuICAgIGdldERhdGEoYXBpVVJMLmJhc2V1cmwgKyBhcGlVUkwubW92aWVMaXN0ICsgaWQsIGNhbGxiYWNrKTtcclxufTtcclxuZXhwb3J0cy5nZXRNb3ZpZURldGFpbCA9IGZ1bmN0aW9uIChpZCwgY2FsbGJhY2spIHtcclxuICAgIGdldERhdGEoYXBpVVJMLmJhc2V1cmwgKyBhcGlVUkwubW92aWVEZXRhaWwgKyBpZCwgY2FsbGJhY2spO1xyXG5cclxufTtcclxuXHJcbmV4cG9ydHMuZ2V0QmFzZVVybCA9IGZ1bmN0aW9uIChidW5kbGVVcmwsIGlzbmF2KSB7XHJcbiAgICBidW5kbGVVcmwgPSBuZXcgU3RyaW5nKGJ1bmRsZVVybCk7XHJcbiAgICB2YXIgbmF0aXZlQmFzZTtcclxuICAgIHZhciBpc0FuZHJvaWRBc3NldHMgPSBidW5kbGVVcmwuaW5kZXhPZignZmlsZTovL2Fzc2V0cy8nKSA+PSAwO1xyXG5cclxuICAgIHZhciBpc2lPU0Fzc2V0cyA9IGJ1bmRsZVVybC5pbmRleE9mKCdmaWxlOi8vLycpID49IDAgJiYgYnVuZGxlVXJsLmluZGV4T2YoJ1dlZXhEZW1vLmFwcCcpID4gMDtcclxuICAgIGlmIChpc0FuZHJvaWRBc3NldHMpIHtcclxuICAgICAgICBuYXRpdmVCYXNlID0gJ2ZpbGU6Ly9hc3NldHMvZGlzdC8nO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoaXNpT1NBc3NldHMpIHtcclxuICAgICAgICBuYXRpdmVCYXNlID0gYnVuZGxlVXJsLnN1YnN0cmluZygwLCBidW5kbGVVcmwubGFzdEluZGV4T2YoJy8nKSArIDEpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdmFyIGhvc3QgPSAnbG9jYWxob3N0OjEyNTYwJztcclxuICAgICAgICB2YXIgbWF0Y2hlcyA9IC9cXC9cXC8oW15cXC9dKz8pXFwvLy5leGVjKGJ1bmRsZVVybCk7XHJcbiAgICAgICAgaWYgKG1hdGNoZXMgJiYgbWF0Y2hlcy5sZW5ndGggPj0gMikge1xyXG4gICAgICAgICAgICBob3N0ID0gbWF0Y2hlc1sxXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v5q2k5aSE6ZyA5rOo5oSP5LiA5LiLLHRhYmJhciDnlKjnmoTnm7TmjqXmmK9qc2J1bmRsZSDnmoTot6/lvoQs5L2G5pivbmF2aWdhdG9y5piv55u05o6l6Lez6L2s5Yiw5paw6aG16Z2i5LiK55qELlxyXG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICBuYXRpdmVCYXNlID0gaXNuYXYgPyAnaHR0cDovLycgKyBob3N0ICsgJy9pbmRleC5odG1sP3BhZ2U9Li9kaXN0LycgOiAnL2Rpc3QvJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBuYXRpdmVCYXNlID0gJ2h0dHA6Ly8nICsgaG9zdCArICcvZGlzdC8nO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmF0aXZlQmFzZTtcclxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21tb24vYXBpLmpzXG4vLyBtb2R1bGUgaWQgPSAxOTZcbi8vIG1vZHVsZSBjaHVua3MgPSAyMiAyOCAzNiAzNyA1NCA2NSA2NiA3MiA3MyA3NCIsInJlcXVpcmUoXCIuL3ZiYW9saS10YWItaXRlbS53ZVwiKVxudmFyIF9fd2VleF90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi92YmFvbGktdGFiLndlXCIpXG52YXIgX193ZWV4X3N0eWxlX18gPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL3ZiYW9saS10YWIud2VcIilcbnZhciBfX3dlZXhfc2NyaXB0X18gPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvc2NyaXB0LmpzIWJhYmVsLWxvYWRlcj9wcmVzZXRzW109QzpcXFxcdmJhb2xpLXdlZXhcXFxcdmJhb2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnByZXNldHM9QzpcXFxcdmJhb2xpLXdlZXhcXFxcdmJhb2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnBsdWdpbnNbXT1DOlxcXFx2YmFvbGktd2VleFxcXFx2YmFvbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZwbHVnaW5zPUM6XFxcXHZiYW9saS13ZWV4XFxcXHZiYW9saVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJmNvbW1lbnRzPWZhbHNlIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zY3JpcHRzIS4vdmJhb2xpLXRhYi53ZVwiKVxuXG5fX3dlZXhfZGVmaW5lX18oJ0B3ZWV4LWNvbXBvbmVudC92YmFvbGktdGFiJywgW10sIGZ1bmN0aW9uKF9fd2VleF9yZXF1aXJlX18sIF9fd2VleF9leHBvcnRzX18sIF9fd2VleF9tb2R1bGVfXykge1xuXG4gICAgX193ZWV4X3NjcmlwdF9fKF9fd2VleF9tb2R1bGVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X3JlcXVpcmVfXylcbiAgICBpZiAoX193ZWV4X2V4cG9ydHNfXy5fX2VzTW9kdWxlICYmIF9fd2VleF9leHBvcnRzX18uZGVmYXVsdCkge1xuICAgICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMgPSBfX3dlZXhfZXhwb3J0c19fLmRlZmF1bHRcbiAgICB9XG5cbiAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cy50ZW1wbGF0ZSA9IF9fd2VleF90ZW1wbGF0ZV9fXG5cbiAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cy5zdHlsZSA9IF9fd2VleF9zdHlsZV9fXG5cbn0pXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbmNsdWRlL3ZiYW9saS10YWIud2Vcbi8vIG1vZHVsZSBpZCA9IDIxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDI4IDM2IDM3IDU0IDY2IDczIDc0IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImRpdlwiLFxuICBcImNsYXNzTGlzdFwiOiBbXG4gICAgXCJ3cmFwcGVyXCJcbiAgXSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcInZiYW9saS10YWJcIixcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJ0YWJJdGVtc1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudGFiSXRlbXN9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICBdXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi9zcmMvbW9kdWxlcy9ib3Jyb3cvb3B0aW1pemVkL29wdGltaXplZERldGFpbHMud2Vcbi8vIG1vZHVsZSBpZCA9IDMxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDY2IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwid3JhcHBlclwiOiB7XG4gICAgXCJ3aWR0aFwiOiA3NTAsXG4gICAgXCJvdmVyZmxvd1wiOiBcInNjcm9sbFwiLFxuICAgIFwiV2Via2l0T3ZlcmZsb3dTY3JvbGxpbmdcIjogXCJ0b3VjaFwiXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL34vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL3NyYy9tb2R1bGVzL2JvcnJvdy9vcHRpbWl6ZWQvb3B0aW1pemVkRGV0YWlscy53ZVxuLy8gbW9kdWxlIGlkID0gMzE1XG4vLyBtb2R1bGUgY2h1bmtzID0gNjYiLCI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwid3JhcHBlclwiPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDx2YmFvbGktdGFiIHRhYi1pdGVtcz1cInt7dGFiSXRlbXN9fVwiPjwvdmJhb2xpLXRhYj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG48c3R5bGU+XHJcbi53cmFwcGVyIHsgd2lkdGg6IDc1MHB4OyBvdmVyZmxvdzogc2Nyb2xsOyAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7IH1cclxuPC9zdHlsZT5cclxuPHNjcmlwdD5cclxucmVxdWlyZSgnd2VleC1jb21wb25lbnRzJyk7XHJcbnJlcXVpcmUoJy4uLy4uLy4uL2luY2x1ZGUvdmJhb2xpLXRhYi53ZScpO1xyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIGRhdGE6IHtcclxuICAgICAgICBkaXI6ICdkaXN0JyxcclxuICAgICAgICB0YWJJdGVtczogW3tcclxuICAgICAgICAgICAgaW5kZXg6IDAsXHJcbiAgICAgICAgICAgIHRpdGxlOiAn5LyY6YCJ5L+d5Yip5LuL57uNJyxcclxuICAgICAgICAgICAgaWNvbjogJycsXHJcbiAgICAgICAgICAgIHNyYzogJ21vZHVsZXMvYm9ycm93L29wdGltaXplZC9vcHRpbWl6ZWRJbnRyby5qcycsXHJcbiAgICAgICAgICAgIHRpdGxlQ29sb3I6ICcnLFxyXG4gICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgaW5kZXg6IDEsXHJcbiAgICAgICAgICAgIHRpdGxlOiAn6aG555uu6K+m5oOFJyxcclxuICAgICAgICAgICAgaWNvbjogJycsXHJcbiAgICAgICAgICAgIHNyYzogJ21vZHVsZXMvYm9ycm93L29wdGltaXplZC9vcHRpbWl6ZWRJbmZvLmpzJyxcclxuICAgICAgICAgICAgdGl0bGVDb2xvcjogJycsXHJcbiAgICAgICAgICAgIGRpc3BsYXk6ICdub25lJ1xyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgaW5kZXg6IDIsXHJcbiAgICAgICAgICAgIHRpdGxlOiAn5Yqg5YWl6K6w5b2VJyxcclxuICAgICAgICAgICAgaWNvbjogJycsXHJcbiAgICAgICAgICAgIHNyYzogJ21vZHVsZXMvYm9ycm93L29wdGltaXplZC9vcHRpbWl6ZWRKb2luLmpzJyxcclxuICAgICAgICAgICAgdGl0bGVDb2xvcjogJycsXHJcbiAgICAgICAgICAgIGRpc3BsYXk6ICdub25lJ1xyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgaW5kZXg6IDMsXHJcbiAgICAgICAgICAgIHRpdGxlOiAn5bi46KeB6Zeu6aKYJyxcclxuICAgICAgICAgICAgaWNvbjogJycsXHJcbiAgICAgICAgICAgIHNyYzogJ21vZHVsZXMvYm9ycm93L29wdGltaXplZC9vcHRpbWl6ZWRRLmpzJyxcclxuICAgICAgICAgICAgdGl0bGVDb2xvcjogJycsXHJcbiAgICAgICAgICAgIGRpc3BsYXk6ICdub25lJ1xyXG4gICAgICAgIH1dXHJcbiAgICB9LFxyXG59XHJcbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tb2R1bGVzL2JvcnJvdy9vcHRpbWl6ZWQvb3B0aW1pemVkRGV0YWlscy53ZT80MmViYzhmMCJdLCJzb3VyY2VSb290IjoiIn0=