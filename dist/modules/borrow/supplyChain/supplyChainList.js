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

	var __weex_template__ = __webpack_require__(344)
	var __weex_style__ = __webpack_require__(345)
	var __weex_script__ = __webpack_require__(346)
	
	__weex_define__('@weex-component/b07e19d2b3b4ddbe3516cdef16340f20', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})
	
	__weex_bootstrap__('@weex-component/b07e19d2b3b4ddbe3516cdef16340f20',undefined,undefined)

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
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(97)
	var __weex_template__ = __webpack_require__(101)
	var __weex_style__ = __webpack_require__(102)
	var __weex_script__ = __webpack_require__(103)
	
	__weex_define__('@weex-component/product-list-item', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})


/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(98)
	var __weex_style__ = __webpack_require__(99)
	var __weex_script__ = __webpack_require__(100)
	
	__weex_define__('@weex-component/progress-circle', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
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
	  "classList": [
	    "content"
	  ],
	  "attr": {
	    "refs": "combo"
	  },
	  "id": "progress"
	}

/***/ },
/* 99 */
/***/ function(module, exports) {

	module.exports = {
	  "content": {
	    "position": "absolute",
	    "left": 0,
	    "top": 0,
	    "right": 0,
	    "bottom": 0
	  },
	  "progress": {
	    "position": "absolute",
	    "left": 0,
	    "top": 0,
	    "right": 0,
	    "bottom": 0
	  }
	}

/***/ },
/* 100 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';
	
	var dom = __weex_require__('@weex-module/dom');
	module.exports = {
	    data: function () {return {
	        currentProgress: 0,
	        productProgress: 0
	    }},
	    created: function created() {
	        console.log(this.$el('progress'));
	    },
	    methods: {
	        drawProgress: function drawProgress() {},
	        loadProgress: function (_loadProgress) {
	            function loadProgress() {
	                return _loadProgress.apply(this, arguments);
	            }
	
	            loadProgress.toString = function () {
	                return _loadProgress.toString();
	            };
	
	            return loadProgress;
	        }(function () {
	            if (this._parent.currentProgress >= this._parent.productProgress) {
	                clearInterval(loadProgress);
	            }
	            this._parent.currentProgress++;
	            console.log(this._parent.currentProgress);
	        })
	    }
	};}
	/* generated by weex-loader */


/***/ },
/* 101 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "content"
	  ],
	  "children": [
	    {
	      "type": "h3",
	      "classList": [
	        "p01"
	      ],
	      "children": [
	        {
	          "type": "i",
	          "classList": function () {return ['icon', this.iconClass]}
	        },
	        {
	          "type": "text",
	          "style": {
	            "fontSize": 28
	          },
	          "attr": {
	            "value": function () {return this.title}
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
	          "type": "div",
	          "classList": [
	            "d01"
	          ],
	          "children": [
	            {
	              "type": "div",
	              "style": {
	                "flexDirection": "row",
	                "alignItems": "flex-end",
	                "color": "#ff6531"
	              },
	              "children": [
	                {
	                  "type": "text",
	                  "style": {
	                    "fontSize": 44
	                  },
	                  "attr": {
	                    "value": function () {return this.percent}
	                  }
	                },
	                {
	                  "type": "text",
	                  "style": {
	                    "marginLeft": 4,
	                    "marginBottom": 4,
	                    "fontSize": 18
	                  },
	                  "attr": {
	                    "value": "%"
	                  }
	                }
	              ]
	            },
	            {
	              "type": "text",
	              "style": {
	                "marginTop": 16,
	                "fontSize": 18,
	                "color": "#999999"
	              },
	              "attr": {
	                "value": "预期年化固定收益率"
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "d02"
	          ],
	          "children": [
	            {
	              "type": "progress-circle",
	              "attr": {
	                "productProgress": function () {return this.productProgress}
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "d03"
	          ],
	          "children": [
	            {
	              "type": "div",
	              "style": {
	                "flexDirection": "row",
	                "alignItems": "flex-end"
	              },
	              "children": [
	                {
	                  "type": "text",
	                  "style": {
	                    "color": "#111111",
	                    "fontSize": 36
	                  },
	                  "attr": {
	                    "value": function () {return this.month}
	                  }
	                },
	                {
	                  "type": "text",
	                  "style": {
	                    "marginBottom": 6,
	                    "fontSize": 20
	                  },
	                  "attr": {
	                    "value": "个月"
	                  }
	                }
	              ]
	            },
	            {
	              "type": "text",
	              "style": {
	                "marginTop": 8,
	                "fontSize": 20,
	                "color": "#999999"
	              },
	              "attr": {
	                "value": "期限"
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "d04"
	          ],
	          "children": [
	            {
	              "type": "div",
	              "classList": [
	                "invest-btn"
	              ],
	              "events": {
	                "click": "toInvest"
	              },
	              "children": [
	                {
	                  "type": "text",
	                  "style": {
	                    "display": "flex",
	                    "fontSize": 22
	                  },
	                  "attr": {
	                    "value": "立即投资"
	                  }
	                }
	              ]
	            },
	            {
	              "type": "text",
	              "classList": [
	                "d04-t01"
	              ],
	              "style": {
	                "marginTop": 10,
	                "fontSize": 20,
	                "color": "#999999"
	              },
	              "attr": {
	                "value": function () {return '还款方式:' + (this.paymentMethod)}
	              }
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 102 */
/***/ function(module, exports) {

	module.exports = {
	  "content": {
	    "position": "relative",
	    "marginTop": 30,
	    "paddingLeft": 40,
	    "height": 280,
	    "borderWidth": 1,
	    "borderStyle": "solid",
	    "borderColor": "#dddddd",
	    "borderLeft": 0,
	    "borderRight": 0,
	    "backgroundColor": "#ffffff"
	  },
	  "p01": {
	    "flexDirection": "row",
	    "alignItems": "center",
	    "height": 90,
	    "color": "#111111",
	    "borderBottom": "1px solid #ddd"
	  },
	  "icon": {
	    "display": "flex",
	    "marginRight": 20,
	    "width": 40,
	    "height": 40
	  },
	  "icon-new": {
	    "background": "url(../../images/icon-new.png) no-repeat center",
	    "backgroundSize": "contain"
	  },
	  "icon-one": {
	    "background": "url(../../images/icon-one.png) no-repeat center",
	    "backgroundSize": "contain"
	  },
	  "icon-three": {
	    "background": "url(../../images/icon-three.png) no-repeat center",
	    "backgroundSize": "contain"
	  },
	  "icon-half-year": {
	    "background": "url(../../images/icon-half-year.png) no-repeat center",
	    "backgroundSize": "contain"
	  },
	  "icon-year": {
	    "background": "url(../../images/icon-year.png) no-repeat center",
	    "backgroundSize": "contain"
	  },
	  "p02": {
	    "flexDirection": "row",
	    "justifyContent": "space-between",
	    "alignItems": "center",
	    "height": 186
	  },
	  "d01": {
	    "width": 260
	  },
	  "d02": {
	    "width": 100,
	    "height": 100,
	    "backgroundColor": "#f1f1f1"
	  },
	  "d03": {
	    "alignItems": "center",
	    "width": 110,
	    "textAlign": "center"
	  },
	  "d04": {
	    "alignItems": "center",
	    "width": 240,
	    "justifyContent": "center"
	  },
	  "invest-btn": {
	    "width": 166,
	    "height": 58,
	    "lineHeight": 58,
	    "color": "#ffffff",
	    "textAlign": "center",
	    "borderRadius": 8,
	    "backgroundColor": "#ff9125"
	  }
	}

/***/ },
/* 103 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';
	
	module.exports = {
	    data: function () {return {
	        baseUrl: '',
	        investStatus: 1,
	        isNew: false,
	        iconClass: 'new',
	        title: '新手专享',
	        percent: '10.00',
	        month: 1,
	        paymentMethod: '一次结清',
	        productProgress: 56
	    }},
	    created: function created() {
	        if (this.isNew) {
	            this.iconClass = 'icon-new';
	        } else {
	            switch (this.month) {
	                case 1:
	                    this.iconClass = 'icon-one';break;
	                case 3:
	                    this.iconClass = 'icon-three';break;
	                case 6:
	                    this.iconClass = 'icon-half-year';break;
	                case 12:
	                    this.iconClass = 'icon-year';break;
	            }
	        }
	    },
	    methods: {
	        toInvest: function toInvest() {
	            this.$openURL(this.baseUrl + 'modules/borrow/productDetails.js');
	        }
	    }
	
	};}
	/* generated by weex-loader */


/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(105)
	var __weex_style__ = __webpack_require__(106)
	var __weex_script__ = __webpack_require__(107)
	
	__weex_define__('@weex-component/transfer-list-item', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})


/***/ },
/* 105 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "content"
	  ],
	  "children": [
	    {
	      "type": "h3",
	      "classList": [
	        "p01"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "style": {
	            "fontSize": 28
	          },
	          "attr": {
	            "value": function () {return this.title}
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
	          "type": "div",
	          "classList": [
	            "d01"
	          ],
	          "children": [
	            {
	              "type": "div",
	              "style": {
	                "flexDirection": "row",
	                "alignItems": "flex-end",
	                "color": "#ff6531"
	              },
	              "children": [
	                {
	                  "type": "text",
	                  "style": {
	                    "fontSize": 44
	                  },
	                  "attr": {
	                    "value": function () {return this.percent}
	                  }
	                },
	                {
	                  "type": "text",
	                  "style": {
	                    "marginLeft": 4,
	                    "marginBottom": 4,
	                    "fontSize": 18
	                  },
	                  "attr": {
	                    "value": "%"
	                  }
	                }
	              ]
	            },
	            {
	              "type": "text",
	              "style": {
	                "marginTop": 16,
	                "fontSize": 18,
	                "color": "#999999"
	              },
	              "attr": {
	                "value": "预期年收益率"
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "d03"
	          ],
	          "style": {
	            "width": 100
	          },
	          "children": [
	            {
	              "type": "div",
	              "style": {
	                "flexDirection": "row",
	                "alignItems": "flex-end"
	              },
	              "children": [
	                {
	                  "type": "text",
	                  "style": {
	                    "color": "#111111",
	                    "fontSize": 36
	                  },
	                  "attr": {
	                    "value": function () {return this.lastTime}
	                  }
	                },
	                {
	                  "type": "text",
	                  "style": {
	                    "marginBottom": 6,
	                    "fontSize": 20
	                  },
	                  "attr": {
	                    "value": "天"
	                  }
	                }
	              ]
	            },
	            {
	              "type": "text",
	              "style": {
	                "marginTop": 8,
	                "fontSize": 20,
	                "color": "#999999"
	              },
	              "attr": {
	                "value": "剩余期限"
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "d03"
	          ],
	          "children": [
	            {
	              "type": "div",
	              "style": {
	                "flexDirection": "row",
	                "alignItems": "flex-end"
	              },
	              "children": [
	                {
	                  "type": "text",
	                  "style": {
	                    "color": "#111111",
	                    "fontSize": 36
	                  },
	                  "attr": {
	                    "value": function () {return this.transferMoney}
	                  }
	                },
	                {
	                  "type": "text",
	                  "style": {
	                    "marginBottom": 6,
	                    "fontSize": 20
	                  }
	                }
	              ]
	            },
	            {
	              "type": "text",
	              "style": {
	                "marginTop": 8,
	                "fontSize": 20,
	                "color": "#999999"
	              },
	              "attr": {
	                "value": "转让金额"
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "d04"
	          ],
	          "children": [
	            {
	              "type": "div",
	              "classList": [
	                "invest-btn"
	              ],
	              "events": {
	                "click": "toInvest"
	              },
	              "children": [
	                {
	                  "type": "text",
	                  "style": {
	                    "display": "flex",
	                    "fontSize": 22
	                  },
	                  "attr": {
	                    "value": "立即投资"
	                  }
	                }
	              ]
	            },
	            {
	              "type": "text",
	              "classList": [
	                "d04-t01"
	              ],
	              "style": {
	                "marginTop": 10,
	                "fontSize": 20,
	                "color": "#999999"
	              },
	              "attr": {
	                "value": function () {return '还款方式:' + (this.paymentMethod)}
	              }
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 106 */
/***/ function(module, exports) {

	module.exports = {
	  "content": {
	    "position": "relative",
	    "marginTop": 30,
	    "paddingLeft": 40,
	    "height": 280,
	    "borderWidth": 1,
	    "borderStyle": "solid",
	    "borderColor": "#dddddd",
	    "borderLeft": 0,
	    "borderRight": 0,
	    "backgroundColor": "#ffffff"
	  },
	  "p01": {
	    "flexDirection": "row",
	    "alignItems": "center",
	    "height": 90,
	    "color": "#111111",
	    "borderBottom": "1px solid #ddd"
	  },
	  "icon": {
	    "display": "flex",
	    "marginRight": 20,
	    "width": 40,
	    "height": 40
	  },
	  "icon-new": {
	    "background": "url(../../images/icon-new.png) no-repeat center",
	    "backgroundSize": "contain"
	  },
	  "icon-one": {
	    "background": "url(../../images/icon-one.png) no-repeat center",
	    "backgroundSize": "contain"
	  },
	  "icon-three": {
	    "background": "url(../../images/icon-three.png) no-repeat center",
	    "backgroundSize": "contain"
	  },
	  "icon-half-year": {
	    "background": "url(../../images/icon-half-year.png) no-repeat center",
	    "backgroundSize": "contain"
	  },
	  "icon-year": {
	    "background": "url(../../images/icon-year.png) no-repeat center",
	    "backgroundSize": "contain"
	  },
	  "p02": {
	    "flexDirection": "row",
	    "justifyContent": "space-between",
	    "alignItems": "center",
	    "height": 186
	  },
	  "d01": {
	    "width": 150
	  },
	  "d02": {
	    "width": 210,
	    "height": 100,
	    "backgroundColor": "#f1f1f1"
	  },
	  "d03": {
	    "alignItems": "center",
	    "width": 110,
	    "textAlign": "center"
	  },
	  "d04": {
	    "alignItems": "center",
	    "width": 240,
	    "justifyContent": "center"
	  },
	  "invest-btn": {
	    "width": 166,
	    "height": 58,
	    "lineHeight": 58,
	    "color": "#ffffff",
	    "textAlign": "center",
	    "borderRadius": 8,
	    "backgroundColor": "#ff9125"
	  }
	}

/***/ },
/* 107 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';
	
	module.exports = {
	    data: function () {return {
	        investStatus: 1,
	        isNew: false,
	        iconClass: 'new',
	        title: '新手专享',
	        percent: '10.00',
	        lastTime: 0,
	        transferMoney: 0,
	        paymentMethod: '一次结清',
	        productProgress: 56
	    }},
	    created: function created() {
	        this.transferMoney = this.transferMoney.toFixed(2);
	
	        if (this.isNew) {
	            this.iconClass = 'icon-new';
	        } else {
	            switch (this.month) {
	                case 1:
	                    this.iconClass = 'icon-one';break;
	                case 3:
	                    this.iconClass = 'icon-three';break;
	                case 6:
	                    this.iconClass = 'icon-half-year';break;
	                case 12:
	                    this.iconClass = 'icon-year';break;
	            }
	        }
	    },
	    methods: {
	        toInvest: function toInvest() {}
	    }
	
	};}
	/* generated by weex-loader */


/***/ },
/* 108 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "children": [
	    {
	      "type": "div",
	      "shown": function () {return this.isProduct},
	      "repeat": function () {return this.productItem},
	      "children": [
	        {
	          "type": "product-list-item",
	          "attr": {
	            "baseUrl": function () {return this.baseUrl},
	            "investStatus": function () {return this.investStatus},
	            "isNew": function () {return this.isNew},
	            "title": function () {return this.title},
	            "percent": function () {return this.percent},
	            "month": function () {return this.month},
	            "lastTime": function () {return this.lastTime},
	            "paymentMethod": function () {return this.paymentMethod},
	            "productProgress": function () {return this.productProgress}
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "shown": function () {return this.isTransfer},
	      "repeat": function () {return this.productItem},
	      "children": [
	        {
	          "type": "transfer-list-item",
	          "attr": {
	            "baseUrl": function () {return this.baseUrl},
	            "investStatus": function () {return this.investStatus},
	            "isNew": function () {return this.isNew},
	            "title": function () {return this.title},
	            "percent": function () {return this.percent},
	            "transferMoney": function () {return this.transferMoney},
	            "lastTime": function () {return this.lastTime},
	            "paymentMethod": function () {return this.paymentMethod},
	            "productProgress": function () {return this.productProgress}
	          }
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 109 */
/***/ function(module, exports) {

	module.exports = {}

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';
	
	var _typeof2 = __webpack_require__(111);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	__webpack_require__(14);
	__webpack_require__(96);
	__webpack_require__(104);
	
	module.exports = {
	    data: function () {return {
	        dir: 'dist',
	        baseUrl: '',
	        refreshDisplay: true,
	        loadingDisplay: true,
	        refreshText: '下拉刷新',
	        loadingText: '加载更多',
	        isProduct: true,
	        productItem: []
	    }},
	    created: function created() {
	        this.isTransfer = !this.isProduct;
	
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
	    },
	    methods: {
	        onrefresh: function onrefresh() {
	            var vm = this;
	            vm.refreshDisplay = 'show';
	            if (vm.items.length > 50) {
	                vm.refreshText = "no more data!";
	                vm.refreshDisplay = 'hide';
	                return;
	            }
	            var len = vm.items.length;
	            for (var i = len; i < len + 20; i++) {
	                vm.items.unshift({
	                    'item': 'test data ' + i
	                });
	            }
	            vm.refreshDisplay = 'hide';
	        },
	        onloading: function onloading() {
	            var vm = this;
	            vm.loadingDisplay = 'show';
	            if (vm.items.length > 30) {
	                vm.loadingText = "no more data!";
	                vm.loadingDisplay = 'hide';
	                return;
	            }
	
	            var len = vm.items.length;
	            for (var i = len; i < len + 20; i++) {
	                vm.items.push({
	                    'item': 'test data ' + i
	                });
	            }
	            vm.loadingDisplay = 'hide';
	        },
	        onloadmore: function onloadmore() {
	            console.log("into--[onloadmore]");
	        }
	    }
	};}
	/* generated by weex-loader */


/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _iterator = __webpack_require__(112);
	
	var _iterator2 = _interopRequireDefault(_iterator);
	
	var _symbol = __webpack_require__(132);
	
	var _symbol2 = _interopRequireDefault(_symbol);
	
	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(113), __esModule: true };

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(114);
	__webpack_require__(127);
	module.exports = __webpack_require__(131).f('iterator');

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(115)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(116)(String, 'String', function(iterated){
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
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(67)
	  , defined   = __webpack_require__(64);
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
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(117)
	  , $export        = __webpack_require__(42)
	  , redefine       = __webpack_require__(118)
	  , hide           = __webpack_require__(47)
	  , has            = __webpack_require__(60)
	  , Iterators      = __webpack_require__(119)
	  , $iterCreate    = __webpack_require__(120)
	  , setToStringTag = __webpack_require__(124)
	  , getPrototypeOf = __webpack_require__(126)
	  , ITERATOR       = __webpack_require__(125)('iterator')
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
/* 117 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(47);

/***/ },
/* 119 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(121)
	  , descriptor     = __webpack_require__(56)
	  , setToStringTag = __webpack_require__(124)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(47)(IteratorPrototype, __webpack_require__(125)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(49)
	  , dPs         = __webpack_require__(122)
	  , enumBugKeys = __webpack_require__(72)
	  , IE_PROTO    = __webpack_require__(69)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(54)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(123).appendChild(iframe);
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
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(48)
	  , anObject = __webpack_require__(49)
	  , getKeys  = __webpack_require__(58);
	
	module.exports = __webpack_require__(52) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(43).document && document.documentElement;

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(48).f
	  , has = __webpack_require__(60)
	  , TAG = __webpack_require__(125)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(70)('wks')
	  , uid        = __webpack_require__(71)
	  , Symbol     = __webpack_require__(43).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';
	
	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(60)
	  , toObject    = __webpack_require__(75)
	  , IE_PROTO    = __webpack_require__(69)('IE_PROTO')
	  , ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(128);
	var global        = __webpack_require__(43)
	  , hide          = __webpack_require__(47)
	  , Iterators     = __webpack_require__(119)
	  , TO_STRING_TAG = __webpack_require__(125)('toStringTag');
	
	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(129)
	  , step             = __webpack_require__(130)
	  , Iterators        = __webpack_require__(119)
	  , toIObject        = __webpack_require__(61);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(116)(Array, 'Array', function(iterated, kind){
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
/* 129 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 130 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(125);

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(133), __esModule: true };

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(134);
	__webpack_require__(143);
	__webpack_require__(144);
	__webpack_require__(145);
	module.exports = __webpack_require__(44).Symbol;

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(43)
	  , has            = __webpack_require__(60)
	  , DESCRIPTORS    = __webpack_require__(52)
	  , $export        = __webpack_require__(42)
	  , redefine       = __webpack_require__(118)
	  , META           = __webpack_require__(135).KEY
	  , $fails         = __webpack_require__(53)
	  , shared         = __webpack_require__(70)
	  , setToStringTag = __webpack_require__(124)
	  , uid            = __webpack_require__(71)
	  , wks            = __webpack_require__(125)
	  , wksExt         = __webpack_require__(131)
	  , wksDefine      = __webpack_require__(136)
	  , keyOf          = __webpack_require__(137)
	  , enumKeys       = __webpack_require__(138)
	  , isArray        = __webpack_require__(139)
	  , anObject       = __webpack_require__(49)
	  , toIObject      = __webpack_require__(61)
	  , toPrimitive    = __webpack_require__(55)
	  , createDesc     = __webpack_require__(56)
	  , _create        = __webpack_require__(121)
	  , gOPNExt        = __webpack_require__(140)
	  , $GOPD          = __webpack_require__(142)
	  , $DP            = __webpack_require__(48)
	  , $keys          = __webpack_require__(58)
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
	  __webpack_require__(141).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(74).f  = $propertyIsEnumerable;
	  __webpack_require__(73).f = $getOwnPropertySymbols;
	
	  if(DESCRIPTORS && !__webpack_require__(117)){
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
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(47)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(71)('meta')
	  , isObject = __webpack_require__(50)
	  , has      = __webpack_require__(60)
	  , setDesc  = __webpack_require__(48).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(53)(function(){
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
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(43)
	  , core           = __webpack_require__(44)
	  , LIBRARY        = __webpack_require__(117)
	  , wksExt         = __webpack_require__(131)
	  , defineProperty = __webpack_require__(48).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(58)
	  , toIObject = __webpack_require__(61);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(58)
	  , gOPS    = __webpack_require__(73)
	  , pIE     = __webpack_require__(74);
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
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(63);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(61)
	  , gOPN      = __webpack_require__(141).f
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
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(59)
	  , hiddenKeys = __webpack_require__(72).concat('length', 'prototype');
	
	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(74)
	  , createDesc     = __webpack_require__(56)
	  , toIObject      = __webpack_require__(61)
	  , toPrimitive    = __webpack_require__(55)
	  , has            = __webpack_require__(60)
	  , IE8_DOM_DEFINE = __webpack_require__(51)
	  , gOPD           = Object.getOwnPropertyDescriptor;
	
	exports.f = __webpack_require__(52) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 143 */
/***/ function(module, exports) {



/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(136)('asyncIterator');

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(136)('observable');

/***/ },
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
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
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
/* 217 */,
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
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(96)
	__webpack_require__(104)
	var __weex_template__ = __webpack_require__(108)
	var __weex_style__ = __webpack_require__(109)
	var __weex_script__ = __webpack_require__(110)
	
	__weex_define__('@weex-component/product-list', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})


/***/ },
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "content"
	  ],
	  "children": [
	    {
	      "type": "product-list",
	      "attr": {
	        "productItem": function () {return this.productItem}
	      }
	    }
	  ]
	}

/***/ },
/* 345 */
/***/ function(module, exports) {

	module.exports = {
	  "content": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0
	  }
	}

/***/ },
/* 346 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';
	
	__webpack_require__(14);
	__webpack_require__(326);
	
	module.exports = {
	    data: function () {return {
	        productItem: [{ isNew: true, title: '吧', percent: 8, month: 1, productProgress: 56, paymentMethod: '一次结清' }, { isNew: false, title: '嘻嘻', percent: 30, month: 1, productProgress: 12, paymentMethod: '一次结清' }, { isNew: false, title: '嘻嘻', percent: 30, month: 1, productProgress: 12, paymentMethod: '一次结清' }, { isNew: false, title: '嘻嘻', percent: 30, month: 1, productProgress: 12, paymentMethod: '一次结清' }, { isNew: false, title: '嘻嘻', percent: 30, month: 1, productProgress: 12, paymentMethod: '一次结清' }, { isNew: false, title: '嘻嘻', percent: 30, month: 1, productProgress: 12, paymentMethod: '一次结清' }, { isNew: false, title: '恍恍', percent: 30, month: 12, productProgress: 0, paymentMethod: '一次结清' }]
	    }}
	};}
	/* generated by weex-loader */


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNzJlMWFmMGJmYmQ0M2Q4NjAzODU/ODU0YSoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2JvcnJvdy9zdXBwbHlDaGFpbi9zdXBwbHlDaGFpbkxpc3Qud2U/NWRiZCIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtY29tcG9uZW50cy9pbmRleC5qcz8wZTE3KioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtY29tcG9uZW50cy9zcmMvd3hjLWJ1dHRvbi53ZT9jMzhmKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1idXR0b24ud2U/OGU2NyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtYnV0dG9uLndlP2NlYjMqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtY29tcG9uZW50cy9zcmMvd3hjLWJ1dHRvbi53ZT80ODJkKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtY29tcG9uZW50cy9zcmMvd3hjLWhuLndlP2M3YWEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtY29tcG9uZW50cy9zcmMvd3hjLWhuLndlP2FhMjcqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtY29tcG9uZW50cy9zcmMvd3hjLWhuLndlPzY3YTgqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtY29tcG9uZW50cy9zcmMvd3hjLWhuLndlPzU2MTUqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtbGlzdC1pdGVtLndlPzQxYmEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtY29tcG9uZW50cy9zcmMvd3hjLWxpc3QtaXRlbS53ZT81NTRjKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1saXN0LWl0ZW0ud2U/NWFhYSoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtbGlzdC1pdGVtLndlPzU4YTkqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtcGFuZWwud2U/NGMwNioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtcGFuZWwud2U/NzU5MCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtcGFuZWwud2U/Y2NiZioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtcGFuZWwud2U/N2YzNSoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy10aXAud2U/NWU4ZCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtdGlwLndlP2E2Y2UqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtY29tcG9uZW50cy9zcmMvd3hjLXRpcC53ZT8zZDY0KioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy10aXAud2U/MWQ3YyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1jb3VudGRvd24ud2U/NjMwZSoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtY291bnRkb3duLndlPzhjYTIqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtY29tcG9uZW50cy9zcmMvd3hjLWNvdW50ZG93bi53ZT9jZGUxKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1jb3VudGRvd24ud2U/OTNmNyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnbi5qcz9lNmNhKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduLmpzPzgwZTQqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24uanM/OTAwNyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzP2VjZTIqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzPzc3YWEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29yZS5qcz8xYjYyKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2N0eC5qcz9jZTAwKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2EtZnVuY3Rpb24uanM/ZDUzZSoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oaWRlLmpzP2E2ZGEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwLmpzPzQxMTYqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzPzBkYTMqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtb2JqZWN0LmpzPzI0YzgqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanM/YmQxZioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcz83MDUxKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzPzkzNWQqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qcz9hYjQ0KioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcz80OWE0KioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanM/MWU4NioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtYXNzaWduLmpzPzVjMGMqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzP2Y1YmMqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanM/ZmNlYSoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanM/ZDg1MCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pb2JqZWN0LmpzPzY5NDYqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qcz81Y2Y5KioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvZi5qcz80OGVhKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanM/NDVkMyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qcz82MTk5KioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWxlbmd0aC5qcz82MmE3KioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWludGVnZXIuanM/ZjY1ZioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbmRleC5qcz85ZmQ0KioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC1rZXkuanM/MmE2YyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQuanM/N2I2YyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL191aWQuanM/ZThjZCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzPzc1OTgqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanM/YTVmYioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtcGllLmpzP2QwZDIqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tb2JqZWN0LmpzP2I1YzAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1tYXJxdWVlLndlP2Q4Y2UqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtY29tcG9uZW50cy9zcmMvd3hjLW1hcnF1ZWUud2U/NjlhNioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtbWFycXVlZS53ZT8wZTQzKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1tYXJxdWVlLndlPzU5ZWUqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtbmF2YmFyLndlP2Q4MGYqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtY29tcG9uZW50cy9zcmMvd3hjLW5hdmJhci53ZT9jOTIzKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1uYXZiYXIud2U/ODJjMyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtbmF2YmFyLndlPzYwMDIqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtbmF2cGFnZS53ZT80MWNmKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1uYXZwYWdlLndlP2I0MzIqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtY29tcG9uZW50cy9zcmMvd3hjLW5hdnBhZ2Uud2U/ZmNkMyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtbmF2cGFnZS53ZT8wZGFkKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtY29tcG9uZW50cy9zcmMvd3hjLXRhYmJhci53ZT8zMjRkKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy10YWJpdGVtLndlPzAwMjgqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtY29tcG9uZW50cy9zcmMvd3hjLXRhYml0ZW0ud2U/MzI2ZioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtdGFiaXRlbS53ZT8yZDYzKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy10YWJpdGVtLndlPzY3MWQqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtdGFiYmFyLndlP2U0YjEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L3dlZXgtY29tcG9uZW50cy9zcmMvd3hjLXRhYmJhci53ZT85YTMzKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy10YWJiYXIud2U/MWVkYyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luY2x1ZGUvcHJvZHVjdC1saXN0LWl0ZW0ud2U/NmYzOCoqIiwid2VicGFjazovLy8uL3NyYy9pbmNsdWRlL3Byb2dyZXNzLWNpcmNsZS53ZT9iYTQ0KioqIiwid2VicGFjazovLy8uL3NyYy9pbmNsdWRlL3Byb2dyZXNzLWNpcmNsZS53ZT9lOTc0KioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jbHVkZS9wcm9ncmVzcy1jaXJjbGUud2U/NDI4ZSoqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luY2x1ZGUvcHJvZ3Jlc3MtY2lyY2xlLndlP2RiNGYqKioqIiwid2VicGFjazovLy8uL3NyYy9pbmNsdWRlL3Byb2R1Y3QtbGlzdC1pdGVtLndlP2Y2MmQqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luY2x1ZGUvcHJvZHVjdC1saXN0LWl0ZW0ud2U/ODlhMyoqKiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jbHVkZS9wcm9kdWN0LWxpc3QtaXRlbS53ZT83OGVhKioqIiwid2VicGFjazovLy8uL3NyYy9pbmNsdWRlL3RyYW5zZmVyLWxpc3QtaXRlbS53ZT9jZmRjKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luY2x1ZGUvdHJhbnNmZXItbGlzdC1pdGVtLndlPzBjZTYqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luY2x1ZGUvdHJhbnNmZXItbGlzdC1pdGVtLndlPzQ4ZjQqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luY2x1ZGUvdHJhbnNmZXItbGlzdC1pdGVtLndlPzYwOGIqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luY2x1ZGUvcHJvZHVjdC1saXN0LndlP2NjMmQqKiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jbHVkZS9wcm9kdWN0LWxpc3Qud2U/NmM5ZCoqIiwid2VicGFjazovLy8uL3NyYy9pbmNsdWRlL3Byb2R1Y3QtbGlzdC53ZT9kZGJhKioiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzP2Y0YmQqKioqKioqKioqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sL2l0ZXJhdG9yLmpzP2QxNmIqKioqKioqKioqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yLmpzPzIzOGQqKioqKioqKioqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzP2ZlMTgqKioqKioqKioqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3RyaW5nLWF0LmpzPzQxM2EqKioqKioqKioqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZWZpbmUuanM/OWE5NCoqKioqKioqKioqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19saWJyYXJ5LmpzPzJjODAqKioqKioqKioqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUuanM/MTQ1NSoqKioqKioqKioqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyYXRvcnMuanM/YWZmNyoqKioqKioqKioqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qcz8wMTI3KioqKioqKioqKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1jcmVhdGUuanM/ZDhjZioqKioqKioqKioqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHBzLmpzPzQ3ZmQqKioqKioqKioqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faHRtbC5qcz9lNWFmKioqKioqKioqKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzP2M5NDUqKioqKioqKioqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLmpzPzMwMjcqKioqKioqKioqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdwby5qcz9kNDdkKioqKioqKioqKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qcz9iZjBlKioqKioqKioqKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzPzFlMDkqKioqKioqKioqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzP2Q1ZTgqKioqKioqKioqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1zdGVwLmpzP2UyMDkqKioqKioqKioqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWV4dC5qcz82ZWUyKioqKioqKioqKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC5qcz9hNzBkKioqKioqKioqKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pbmRleC5qcz9mMDdhKioqKioqKioqKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN5bWJvbC5qcz82NzBhKioqKioqKioqKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX21ldGEuanM/NTUzZCoqKioqKioqKioqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZGVmaW5lLmpzP2I2ZTAqKioqKioqKioqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fa2V5b2YuanM/MGQzYioqKioqKioqKioqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWtleXMuanM/NzI3YSoqKioqKioqKioqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS5qcz8xODQzKioqKioqKioqKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLWV4dC5qcz9kMjM4KioqKioqKioqKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLmpzPzFlMDcqKioqKioqKioqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcGQuanM/ZDdkOCoqKioqKioqKioqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3IuanM/YjhjNSoqKioqKioqKioqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wub2JzZXJ2YWJsZS5qcz9kYWE0KioqKioqKioqKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL3NyYy9pbmNsdWRlL3Byb2R1Y3QtbGlzdC53ZT9mZmZkKiIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9ib3Jyb3cvc3VwcGx5Q2hhaW4vc3VwcGx5Q2hhaW5MaXN0LndlPzJiNzciLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvYm9ycm93L3N1cHBseUNoYWluL3N1cHBseUNoYWluTGlzdC53ZT83ZmNkIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2JvcnJvdy9zdXBwbHlDaGFpbi9zdXBwbHlDaGFpbkxpc3Qud2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLEVBQUM7O0FBRUQsMkY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ1ZBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxFQUFDOzs7Ozs7O0FDZkQ7QUFDQTtBQUNBLDZCQUE0Qiw4REFBOEQ7QUFDMUY7QUFDQTtBQUNBO0FBQ0EsaUNBQWdDLDBFQUEwRTtBQUMxRztBQUNBLCtCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7QUNyRkE7O1dBR0E7V0FDQTtZQUVBO0FBSkE7WUFNQTtBQVBBOzs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxFQUFDOzs7Ozs7O0FDZkQ7QUFDQTtBQUNBLDZCQUE0Qiw0QkFBNEI7QUFDeEQ7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxpQ0FBZ0MsZ0NBQWdDO0FBQ2hFO0FBQ0EsK0JBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7O0FDbEJBOztZQUdBO1lBRUE7QUFIQTtZQUlBO0FBTEE7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLEVBQUM7Ozs7Ozs7QUNmRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0EscUNBQW9DO0FBQ3BDLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7OztBQ0hBOztjQUlBO0FBRkE7O3VDQU9BLENBQ0E7bUNBR0EsQ0FFQTtBQVZBO0FBSkE7Ozs7Ozs7O0FDVEE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLEVBQUM7Ozs7Ozs7QUNmRDtBQUNBO0FBQ0EsNkJBQTRCLHlDQUF5QztBQUNyRTtBQUNBLGlDQUFnQztBQUNoQyxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsaUNBQWdDLHVEQUF1RDtBQUN2RjtBQUNBLG9DQUFtQyx3QkFBd0I7QUFDM0QsdUNBQXNDLHdCQUF3QjtBQUM5RCxxQ0FBb0MsNEJBQTRCO0FBQ2hFLHNDQUFxQztBQUNyQyxRQUFPO0FBQ1A7QUFDQSwrQkFBOEI7QUFDOUI7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLGlDQUFnQyxtREFBbUQ7QUFDbkY7QUFDQSxvQ0FBbUMsd0JBQXdCO0FBQzNELHVDQUFzQyx3QkFBd0I7QUFDOUQscUNBQW9DLDRCQUE0QjtBQUNoRSxzQ0FBcUM7QUFDckMsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBLEU7Ozs7Ozs7O0FDakNBOztXQUdBO1lBQ0E7a0JBQ0E7a0JBQ0E7Z0JBQ0E7YUFFQTtBQVBBOzJCQVFBLENBQ0E7QUFWQTs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLEVBQUM7Ozs7Ozs7QUNmRDtBQUNBO0FBQ0EsNkJBQTRCLHFDQUFxQztBQUNqRTtBQUNBO0FBQ0E7QUFDQSxpQ0FBZ0MsNkNBQTZDO0FBQzdFO0FBQ0EsK0JBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7O0FDL0JBOztXQUdBO1lBRUE7QUFIQTtBQURBOzs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxFQUFDOzs7Ozs7O0FDZkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7Ozs7QUNTQTs7Y0FHQTtpQkFDQTs7cUJBRUE7Z0JBQ0E7aUJBQ0E7Z0JBQ0E7aUJBQ0E7Z0JBQ0E7aUJBQ0E7Z0JBQ0E7aUJBQ0E7Z0JBQ0E7aUJBQ0E7Z0JBQ0E7aUJBQ0E7Z0JBQ0E7aUJBRUE7QUFoQkE7b0JBa0JBO0FBckJBOzZCQXNCQTsrQkFDQTtBQUNBO0FBRUE7O3lCQUNBO2NBQ0E7QUFDQTs7dUNBRUE7aUNBQ0E7c0RBQ0E7b0JBQ0E7dUVBRUE7O2tDQUNBO3VFQUNBOzBEQUNBO3dCQUNBO3dFQUNBO0FBQ0E7MkJBQ0E7QUFDQTtBQUNBO3NDQUNBO2tDQUNBO3dCQUNBO29CQUNBOzhCQUNBO0FBQ0E7QUFDQTsrQkFDQTtrREFDQTs2QkFDQTswQkFDQTtBQUNBO29EQUNBO2tEQUNBO3NGQUNBO2tEQUNBO29EQUNBO2tEQUNBO3FGQUNBO2tEQUNBO29EQUNBO2tEQUNBO21FQUNBO2tEQUNBO2tDQUNBO2tEQUVBOzs2QkFDQTtBQUNBO3VDQUNBOzhCQUNBO0FBQ0E7NkNBQ0E7OEJBQ0E7QUFFQTtBQW5EQTtBQS9CQTs7Ozs7Ozs7QUNkQSxtQkFBa0Isd0Q7Ozs7OztBQ0FsQjtBQUNBLHdEOzs7Ozs7QUNEQTtBQUNBOztBQUVBLDJDQUEwQyxnQ0FBb0MsRTs7Ozs7O0FDSDlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRUFBbUU7QUFDbkU7QUFDQSxzRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVc7QUFDWCxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLGdEQUErQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFjO0FBQ2QsZUFBYztBQUNkLGVBQWM7QUFDZCxlQUFjO0FBQ2QsZ0JBQWU7QUFDZixnQkFBZTtBQUNmLGdCQUFlO0FBQ2YsaUJBQWdCO0FBQ2hCLDBCOzs7Ozs7QUM1REE7QUFDQTtBQUNBO0FBQ0Esd0NBQXVDLGdDOzs7Ozs7QUNIdkMsOEJBQTZCO0FBQzdCLHNDQUFxQyxnQzs7Ozs7O0FDRHJDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQSxHOzs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHLFVBQVU7QUFDYjtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7OztBQ0pBO0FBQ0E7QUFDQSxHOzs7Ozs7QUNGQTtBQUNBLHNFQUFzRSxnQkFBZ0IsVUFBVSxHQUFHO0FBQ25HLEVBQUMsRTs7Ozs7O0FDRkQ7QUFDQTtBQUNBLGtDQUFpQyxRQUFRLGdCQUFnQixVQUFVLEdBQUc7QUFDdEUsRUFBQyxFOzs7Ozs7QUNIRDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLEc7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBa0MsVUFBVSxFQUFFO0FBQzlDLG9CQUFtQixzQ0FBc0M7QUFDekQsRUFBQyxvQ0FBb0M7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNILEVBQUMsVzs7Ozs7O0FDaENEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7OztBQ2hCQSx3QkFBdUI7QUFDdkI7QUFDQTtBQUNBLEc7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7OztBQ0pBLGtCQUFpQjs7QUFFakI7QUFDQTtBQUNBLEc7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLLFdBQVcsZUFBZTtBQUMvQjtBQUNBLE1BQUs7QUFDTDtBQUNBLEc7Ozs7OztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUEyRDtBQUMzRCxHOzs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUNKQTtBQUNBO0FBQ0Esb0RBQW1EO0FBQ25EO0FBQ0Esd0NBQXVDO0FBQ3ZDLEc7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0EsYzs7Ozs7O0FDSEEsMEM7Ozs7OztBQ0FBLGVBQWMsc0I7Ozs7OztBQ0FkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDSkE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLEVBQUM7Ozs7Ozs7QUNmRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7O0FDWUE7O2VBR0E7Z0JBQ0E7Z0JBQ0E7bUJBQ0E7bUJBQ0E7b0JBRUE7QUFQQTs2QkFRQTs2QkFDQSxpQkFDQSx3QkFDQTtrQkFDQTtBQUNBO0FBQ0E7O3VDQUVBO3dCQUNBO2lDQUNBOzJEQUNBO29CQUNBO3dDQUNBO3VEQUNBO3lCQUNBO0FBQ0E7QUFDQTsyQ0FDQTt3QkFDQTs0Q0FDQTtzQ0FDQTs7O2lFQUlBO0FBRkE7aUNBR0E7Z0NBQ0E7QUFMQSw0QkFNQTtzREFDQTs7aUNBRUE7aUNBRUE7QUFIQTt1QkFJQTtBQUNBO0FBQ0E7dUNBQ0E7OEJBQ0E7QUFDQTs2Q0FDQTs4QkFDQTtBQUVBO0FBcENBO0FBaEJBOzs7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsRUFBQzs7Ozs7OztBQ2ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUEyQixtQkFBbUI7QUFDOUMscUNBQW9DO0FBQ3BDLElBQUc7QUFDSDtBQUNBLDhCQUE2QjtBQUM3QixJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBOEI7QUFDOUIsUUFBTztBQUNQO0FBQ0E7QUFDQSwrQkFBOEI7QUFDOUIsUUFBTztBQUNQLDZCQUE0QiwwQkFBMEI7QUFDdEQ7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTRCO0FBQzVCLFFBQU87QUFDUCw2QkFBNEIseUJBQXlCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBOEI7QUFDOUIsUUFBTztBQUNQO0FBQ0E7QUFDQSwrQkFBOEI7QUFDOUIsUUFBTztBQUNQLDZCQUE0Qix5QkFBeUI7QUFDckQ7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTRCO0FBQzVCLFFBQU87QUFDUCw2QkFBNEIsd0JBQXdCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBOEI7QUFDOUIsUUFBTztBQUNQO0FBQ0E7QUFDQSwrQkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7O0FDekZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7OztBQ2FBOztlQUtBOztzQkFHQTs7YUFHQTs7WUFHQTs7aUJBR0E7O21CQUdBOztxQkFHQTs7cUJBR0E7O2tCQUdBOztvQkFHQTs7b0JBRUE7QUFoQ0E7O29EQWtDQTtpREFDQTtBQUNBO2tEQUNBO2dEQUNBO0FBRUE7QUFQQTtBQWxDQTs7Ozs7Ozs7QUM5REE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsRUFBQzs7Ozs7OztBQ2hCRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBaUMscUJBQXFCO0FBQ3RELGdDQUErQixtQkFBbUI7QUFDbEQseUNBQXdDLDRCQUE0QjtBQUNwRSwrQkFBOEIsa0JBQWtCO0FBQ2hELG9DQUFtQyx1QkFBdUI7QUFDMUQscUNBQW9DLHdCQUF3QjtBQUM1RCx1Q0FBc0MsMEJBQTBCO0FBQ2hFLHVDQUFzQywwQkFBMEI7QUFDaEUsc0NBQXFDLHlCQUF5QjtBQUM5RCx3Q0FBdUMsMkJBQTJCO0FBQ2xFLHdDQUF1QztBQUN2QztBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBa0M7QUFDbEMsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7O0FDWUE7O2VBR0E7c0JBQ0E7YUFDQTtZQUNBO2lCQUNBO21CQUNBO3FCQUNBO3FCQUNBO2tCQUNBO29CQUNBO29CQUVBO0FBWkE7QUFEQTs7Ozs7Ozs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsRUFBQzs7Ozs7OztBQ2hCRDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsRUFBQzs7Ozs7OztBQ2ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFvQztBQUNwQyxJQUFHO0FBQ0g7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTRCO0FBQzVCO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUE4QjtBQUM5QixRQUFPO0FBQ1A7QUFDQSwrQkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7O0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7QUNXQTs7WUFHQTtZQUNBO2lCQUNBO1dBQ0E7c0JBRUE7QUFOQTs7MENBUUE7Z0JBQ0E7O21CQUdBO0FBRkE7dUNBR0E7QUFFQTtBQVJBO0FBUkE7Ozs7Ozs7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFtQztBQUNuQyxRQUFPO0FBQ1AsOEJBQTZCLHFCQUFxQjtBQUNsRDtBQUNBLDZCQUE0QixnQkFBZ0I7QUFDNUM7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBaUMscUJBQXFCO0FBQ3REO0FBQ0EsbUNBQWtDLGtCQUFrQjtBQUNwRCxrQ0FBaUMsaUJBQWlCO0FBQ2xELG1DQUFrQyxrQkFBa0I7QUFDcEQsd0NBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7OztBQ1dBOztlQUdBO29CQUNBO29CQUNBO3NCQUVBO0FBTEE7K0JBTUE7d0JBRUE7OzhDQUNBO3NCQUNBO21DQUNBOzRCQUVBOzs7dUJBR0E7QUFGQTt3Q0FHQTtBQUNBO0FBQ0E7O3dDQUVBO3NEQUNBO3FDQUNBO3lCQUNBO2tDQUNBO3FDQUNBO2dDQUNBO0FBQ0EsZ0JBQ0E7a0NBQ0E7cUNBQ0E7Z0NBQ0E7QUFDQTtBQUNBO0FBRUE7QUFoQkE7QUFyQkE7Ozs7Ozs7O0FDdENBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLEVBQUM7Ozs7Ozs7QUNoQkQ7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLEVBQUM7Ozs7Ozs7QUNmRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBLEU7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7QUNOQTtBQUNBOzswQkFHQTswQkFFQTtBQUhBO2lDQWFBOzhCQUNBO0FBQ0E7OytDQUdBLENBQ0E7Ozs7Ozs7Ozs7O3VCQUNBOytFQUNBOytCQUNBO0FBQ0E7MEJBQ0E7c0NBQ0E7QUFFQTtBQVhBO0FBakJBOzs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBb0M7QUFDcEMsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVztBQUNYO0FBQ0EsbUNBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBbUI7QUFDbkI7QUFDQSwyQ0FBMEM7QUFDMUM7QUFDQSxrQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFnRDtBQUNoRDtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW1CO0FBQ25CO0FBQ0EsMkNBQTBDO0FBQzFDO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFlO0FBQ2Y7QUFDQSx1Q0FBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7QUM5TEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7O0FDcENBOztrQkFHQTt1QkFDQTtnQkFDQTtvQkFDQTtnQkFDQTtrQkFDQTtnQkFDQTt3QkFDQTswQkFFQTtBQVZBO2lDQXlCQTt5QkFDQTs4QkFDQTtnQkFDQTswQkFDQTs7aURBQ0E7O21EQUNBOzt1REFDQTs7a0RBRUE7O0FBQ0E7QUFDQTs7dUNBRUE7MENBQ0E7QUFHQTtBQUxBOztBQXRDQTs7Ozs7Ozs7QUM1Q0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLEVBQUM7Ozs7Ozs7QUNmRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVc7QUFDWDtBQUNBLG1DQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW1CO0FBQ25CO0FBQ0EsMkNBQTBDO0FBQzFDO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFtQjtBQUNuQjtBQUNBLDJDQUEwQztBQUMxQztBQUNBLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFtQjtBQUNuQjtBQUNBLDJDQUEwQztBQUMxQztBQUNBLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWU7QUFDZjtBQUNBLHVDQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7OztBQzVOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7QUNuQ0E7O3VCQUdBO2dCQUNBO29CQUNBO2dCQUNBO2tCQUNBO21CQUNBO3dCQUNBO3dCQUNBOzBCQUVBO0FBVkE7aUNBdUJBO3lEQUVBOzt5QkFDQTs4QkFDQTtnQkFDQTswQkFDQTs7aURBQ0E7O21EQUNBOzt1REFDQTs7a0RBRUE7O0FBQ0E7QUFDQTs7dUNBR0EsQ0FHQTtBQUxBOztBQXRDQTs7Ozs7Ozs7QUM3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE0QixzQkFBc0I7QUFDbEQsOEJBQTZCLHdCQUF3QjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFvQyxvQkFBb0I7QUFDeEQsMENBQXlDLHlCQUF5QjtBQUNsRSxtQ0FBa0Msa0JBQWtCO0FBQ3BELG1DQUFrQyxrQkFBa0I7QUFDcEQscUNBQW9DLG9CQUFvQjtBQUN4RCxtQ0FBa0Msa0JBQWtCO0FBQ3BELHNDQUFxQyxxQkFBcUI7QUFDMUQsMkNBQTBDLDBCQUEwQjtBQUNwRSw2Q0FBNEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSw2QkFBNEIsdUJBQXVCO0FBQ25ELDhCQUE2Qix3QkFBd0I7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBb0Msb0JBQW9CO0FBQ3hELDBDQUF5Qyx5QkFBeUI7QUFDbEUsbUNBQWtDLGtCQUFrQjtBQUNwRCxtQ0FBa0Msa0JBQWtCO0FBQ3BELHFDQUFvQyxvQkFBb0I7QUFDeEQsMkNBQTBDLDBCQUEwQjtBQUNwRSxzQ0FBcUMscUJBQXFCO0FBQzFELDJDQUEwQywwQkFBMEI7QUFDcEUsNkNBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7QUM5Q0Esb0I7Ozs7Ozs7Ozs7Ozs7O0FDbUJBO0FBQ0E7QUFDQSxxQkFDQTs7QUFDQTs7Y0FHQTtrQkFDQTt5QkFDQTt5QkFDQTtzQkFDQTtzQkFDQTtvQkFDQTtzQkFFQTtBQVRBO2lDQVVBO2lDQUVBOzsyQ0FDQTthQUNBO3NFQUNBO3FHQUNBOzhCQUNBOzBCQUNBO2lDQUdBOzhFQUNBO2dCQUNBO3dCQUNBO29FQUNBO2lEQUNBO2dDQUNBO0FBQ0E7OERBQ0E7QUFDQTswREFFQTs7d0JBQ0E7eUdBRUE7NEJBQ0E7QUFDQTtBQUNBOzt5Q0FFQTtzQkFDQTtpQ0FDQTt1Q0FDQTtrQ0FDQTtxQ0FDQTtBQUNBO0FBQ0E7Z0NBQ0E7a0RBQ0E7OzRDQUdBO0FBRkE7QUFHQTtpQ0FDQTtBQUNBO3lDQUNBO3NCQUNBO2lDQUNBO3VDQUNBO2tDQUNBO3FDQUNBO0FBQ0E7QUFFQTs7Z0NBQ0E7a0RBQ0E7OzRDQUdBO0FBRkE7QUFHQTtpQ0FDQTtBQUNBOzJDQUNBO3lCQUNBO0FBRUE7QUFyQ0E7QUF4Q0E7Ozs7Ozs7O0FDeEJBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLGtIQUFpSCxtQkFBbUIsRUFBRSxtQkFBbUIsNEpBQTRKOztBQUVyVCx1Q0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBLEc7Ozs7OztBQ3BCQSxtQkFBa0IseUQ7Ozs7OztBQ0FsQjtBQUNBO0FBQ0EseUQ7Ozs7OztBQ0ZBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDhCQUE2QjtBQUM3QixlQUFjO0FBQ2Q7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsZ0NBQStCO0FBQy9CO0FBQ0E7QUFDQSxXQUFVO0FBQ1YsRUFBQyxFOzs7Ozs7QUNoQkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDZCQUE0QixhQUFhOztBQUV6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXdDLG9DQUFvQztBQUM1RSw2Q0FBNEMsb0NBQW9DO0FBQ2hGLE1BQUssMkJBQTJCLG9DQUFvQztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWdCLG1CQUFtQjtBQUNuQztBQUNBO0FBQ0Esa0NBQWlDLDJCQUEyQjtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsRzs7Ozs7O0FDckVBLHVCOzs7Ozs7QUNBQSwwQzs7Ozs7O0FDQUEscUI7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2RkFBZ0YsYUFBYSxFQUFFOztBQUUvRjtBQUNBLHNEQUFxRCwwQkFBMEI7QUFDL0U7QUFDQSxHOzs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQTZCO0FBQzdCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTs7Ozs7OztBQ3hDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7OztBQ1pBLCtFOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtRUFBa0UsK0JBQStCO0FBQ2pHLEc7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCOzs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0gsRzs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5R0FBd0csT0FBTztBQUMvRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWdDO0FBQ2hDLGVBQWM7QUFDZCxrQkFBaUI7QUFDakI7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZCOzs7Ozs7QUNqQ0EsNkJBQTRCLGU7Ozs7OztBQ0E1QjtBQUNBLFdBQVU7QUFDVixHOzs7Ozs7QUNGQSxzQzs7Ozs7O0FDQUEsbUJBQWtCLHlEOzs7Ozs7QUNBbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRDs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFzQjtBQUN0QixxQkFBb0IsdUJBQXVCLFNBQVMsSUFBSTtBQUN4RCxJQUFHO0FBQ0gsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUF5RDtBQUN6RDtBQUNBLE1BQUs7QUFDTDtBQUNBLHVCQUFzQixpQ0FBaUM7QUFDdkQsTUFBSztBQUNMLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0RBQThELDhCQUE4QjtBQUM1RjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkRBQTBELGdCQUFnQjs7QUFFMUU7QUFDQTtBQUNBO0FBQ0EscUJBQW9CLG9CQUFvQjs7QUFFeEMsMkNBQTBDLG9CQUFvQjs7QUFFOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNILHlCQUF3QixlQUFlLEVBQUU7QUFDekMseUJBQXdCLGdCQUFnQjtBQUN4QyxFQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBb0QsS0FBSyxRQUFRLGlDQUFpQztBQUNsRyxFQUFDO0FBQ0Q7QUFDQSxnREFBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkM7Ozs7OztBQzFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBaUQ7QUFDakQsRUFBQztBQUNEO0FBQ0Esc0JBQXFCO0FBQ3JCO0FBQ0EsVUFBUztBQUNULEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDcERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEwRCxzQkFBc0I7QUFDaEYsaUZBQWdGLHNCQUFzQjtBQUN0RyxHOzs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSCxHOzs7Ozs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBLG1CQUFrQjs7QUFFbEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7OztBQ2xCQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEc7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHLFVBQVU7QUFDYjtBQUNBLEc7Ozs7Ozs7Ozs7OztBQ2ZBLDJDOzs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7OztBQ0VBO0FBQ0EscUJBQ0E7O0FBQ0E7O3NCQUdBLHNGQUNBLGtHQUNBLGtHQUNBLGtHQUNBLGtHQUNBLGtHQUNBLGtHQUdBO0FBVkE7QUFEQSIsImZpbGUiOiJtb2R1bGVzXFxib3Jyb3dcXHN1cHBseUNoYWluXFxzdXBwbHlDaGFpbkxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA3MmUxYWYwYmZiZDQzZDg2MDM4NSIsInZhciBfX3dlZXhfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vc3VwcGx5Q2hhaW5MaXN0LndlXCIpXG52YXIgX193ZWV4X3N0eWxlX18gPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL3N1cHBseUNoYWluTGlzdC53ZVwiKVxudmFyIF9fd2VleF9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9zY3JpcHQuanMhYmFiZWwtbG9hZGVyP3ByZXNldHNbXT1DOlxcXFx2YmFvbGktd2VleFxcXFx2YmFvbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXByZXNldC1lczIwMTUmcHJlc2V0cz1DOlxcXFx2YmFvbGktd2VleFxcXFx2YmFvbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXByZXNldC1lczIwMTUmcGx1Z2luc1tdPUM6XFxcXHZiYW9saS13ZWV4XFxcXHZiYW9saVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJnBsdWdpbnM9QzpcXFxcdmJhb2xpLXdlZXhcXFxcdmJhb2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmY29tbWVudHM9ZmFsc2UhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdHMhLi9zdXBwbHlDaGFpbkxpc3Qud2VcIilcblxuX193ZWV4X2RlZmluZV9fKCdAd2VleC1jb21wb25lbnQvYjA3ZTE5ZDJiM2I0ZGRiZTM1MTZjZGVmMTYzNDBmMjAnLCBbXSwgZnVuY3Rpb24oX193ZWV4X3JlcXVpcmVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X21vZHVsZV9fKSB7XG5cbiAgICBfX3dlZXhfc2NyaXB0X18oX193ZWV4X21vZHVsZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfcmVxdWlyZV9fKVxuICAgIGlmIChfX3dlZXhfZXhwb3J0c19fLl9fZXNNb2R1bGUgJiYgX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0KSB7XG4gICAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cyA9IF9fd2VleF9leHBvcnRzX18uZGVmYXVsdFxuICAgIH1cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnRlbXBsYXRlID0gX193ZWV4X3RlbXBsYXRlX19cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnN0eWxlID0gX193ZWV4X3N0eWxlX19cblxufSlcblxuX193ZWV4X2Jvb3RzdHJhcF9fKCdAd2VleC1jb21wb25lbnQvYjA3ZTE5ZDJiM2I0ZGRiZTM1MTZjZGVmMTYzNDBmMjAnLHVuZGVmaW5lZCx1bmRlZmluZWQpXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbW9kdWxlcy9ib3Jyb3cvc3VwcGx5Q2hhaW4vc3VwcGx5Q2hhaW5MaXN0LndlP2VudHJ5PXRydWVcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSA3OCIsInJlcXVpcmUoJy4vc3JjL3d4Yy1idXR0b24ud2UnKTtcbnJlcXVpcmUoJy4vc3JjL3d4Yy1obi53ZScpO1xucmVxdWlyZSgnLi9zcmMvd3hjLWxpc3QtaXRlbS53ZScpO1xucmVxdWlyZSgnLi9zcmMvd3hjLXBhbmVsLndlJyk7XG5yZXF1aXJlKCcuL3NyYy93eGMtdGlwLndlJyk7XG5yZXF1aXJlKCcuL3NyYy93eGMtY291bnRkb3duLndlJyk7XG5yZXF1aXJlKCcuL3NyYy93eGMtbWFycXVlZS53ZScpO1xucmVxdWlyZSgnLi9zcmMvd3hjLW5hdmJhci53ZScpO1xucmVxdWlyZSgnLi9zcmMvd3hjLW5hdnBhZ2Uud2UnKTtcbnJlcXVpcmUoJy4vc3JjL3d4Yy10YWJiYXIud2UnKTtcbnJlcXVpcmUoJy4vc3JjL3d4Yy10YWJpdGVtLndlJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1jb21wb25lbnRzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDIgNCA4IDE3IDE4IDIyIDI0IDI2IDI3IDI4IDI5IDMxIDMyIDM2IDM3IDQzIDQ4IDQ5IDUxIDUyIDUzIDU0IDU1IDU2IDU5IDYxIDYyIDYzIDY0IDY1IDY2IDcwIDcyIDczIDc0IDc4IDgwIDgxIiwidmFyIF9fd2VleF90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi93eGMtYnV0dG9uLndlXCIpXG52YXIgX193ZWV4X3N0eWxlX18gPSByZXF1aXJlKFwiISEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL3d4Yy1idXR0b24ud2VcIilcbnZhciBfX3dlZXhfc2NyaXB0X18gPSByZXF1aXJlKFwiISEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9zY3JpcHQuanMhYmFiZWwtbG9hZGVyP3ByZXNldHNbXT1DOlxcXFx2YmFvbGktd2VleFxcXFx2YmFvbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXByZXNldC1lczIwMTUmcHJlc2V0cz1DOlxcXFx2YmFvbGktd2VleFxcXFx2YmFvbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXByZXNldC1lczIwMTUmcGx1Z2luc1tdPUM6XFxcXHZiYW9saS13ZWV4XFxcXHZiYW9saVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJnBsdWdpbnM9QzpcXFxcdmJhb2xpLXdlZXhcXFxcdmJhb2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmY29tbWVudHM9ZmFsc2UhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c2NyaXB0cyEuL3d4Yy1idXR0b24ud2VcIilcblxuX193ZWV4X2RlZmluZV9fKCdAd2VleC1jb21wb25lbnQvd3hjLWJ1dHRvbicsIFtdLCBmdW5jdGlvbihfX3dlZXhfcmVxdWlyZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfbW9kdWxlX18pIHtcblxuICAgIF9fd2VleF9zY3JpcHRfXyhfX3dlZXhfbW9kdWxlX18sIF9fd2VleF9leHBvcnRzX18sIF9fd2VleF9yZXF1aXJlX18pXG4gICAgaWYgKF9fd2VleF9leHBvcnRzX18uX19lc01vZHVsZSAmJiBfX3dlZXhfZXhwb3J0c19fLmRlZmF1bHQpIHtcbiAgICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzID0gX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0XG4gICAgfVxuXG4gICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMudGVtcGxhdGUgPSBfX3dlZXhfdGVtcGxhdGVfX1xuXG4gICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMuc3R5bGUgPSBfX3dlZXhfc3R5bGVfX1xuXG59KVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtY29tcG9uZW50cy9zcmMvd3hjLWJ1dHRvbi53ZVxuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDQgOCAxNyAxOCAyMiAyNCAyNiAyNyAyOCAyOSAzMSAzMiAzNiAzNyA0MyA0OCA0OSA1MSA1MiA1MyA1NCA1NSA1NiA1OSA2MSA2MiA2MyA2NCA2NSA2NiA3MCA3MiA3MyA3NCA3OCA4MCA4MSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJkaXZcIixcbiAgXCJjbGFzc0xpc3RcIjogZnVuY3Rpb24gKCkge3JldHVybiBbJ2J0bicsICdidG4tJyArICh0aGlzLnR5cGUpLCAnYnRuLXN6LScgKyAodGhpcy5zaXplKV19LFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIFsnYnRuLXR4dCcsICdidG4tdHh0LScgKyAodGhpcy50eXBlKSwgJ2J0bi10eHQtc3otJyArICh0aGlzLnNpemUpXX0sXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy52YWx1ZX1cbiAgICAgIH1cbiAgICB9XG4gIF1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+L3dlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuL34vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtYnV0dG9uLndlXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDIgNCA4IDE3IDE4IDIyIDI0IDI2IDI3IDI4IDI5IDMxIDMyIDM2IDM3IDQzIDQ4IDQ5IDUxIDUyIDUzIDU0IDU1IDU2IDU5IDYxIDYyIDYzIDY0IDY1IDY2IDcwIDcyIDczIDc0IDc4IDgwIDgxIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiYnRuXCI6IHtcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiAwLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImJvcmRlcldpZHRoXCI6IDEsXG4gICAgXCJib3JkZXJTdHlsZVwiOiBcInNvbGlkXCIsXG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiMzMzMzMzNcIlxuICB9LFxuICBcImJ0bi1kZWZhdWx0XCI6IHtcbiAgICBcImNvbG9yXCI6IFwicmdiKDUxLDUxLDUxKVwiXG4gIH0sXG4gIFwiYnRuLXByaW1hcnlcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwicmdiKDQwLDk2LDE0NClcIixcbiAgICBcImJvcmRlckNvbG9yXCI6IFwicmdiKDQwLDk2LDE0NClcIlxuICB9LFxuICBcImJ0bi1zdWNjZXNzXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcInJnYig5MiwxODQsOTIpXCIsXG4gICAgXCJib3JkZXJDb2xvclwiOiBcInJnYig3NiwxNzQsNzYpXCJcbiAgfSxcbiAgXCJidG4taW5mb1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCJyZ2IoOTEsMTkyLDIyMilcIixcbiAgICBcImJvcmRlckNvbG9yXCI6IFwicmdiKDcwLDE4NCwyMTgpXCJcbiAgfSxcbiAgXCJidG4td2FybmluZ1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCJyZ2IoMjQwLDE3Myw3OClcIixcbiAgICBcImJvcmRlckNvbG9yXCI6IFwicmdiKDIzOCwxNjIsNTQpXCJcbiAgfSxcbiAgXCJidG4tZGFuZ2VyXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcInJnYigyMTcsODMsNzkpXCIsXG4gICAgXCJib3JkZXJDb2xvclwiOiBcInJnYigyMTIsNjMsNTgpXCJcbiAgfSxcbiAgXCJidG4tbGlua1wiOiB7XG4gICAgXCJib3JkZXJDb2xvclwiOiBcInJnYmEoMCwwLDAsMClcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiAwXG4gIH0sXG4gIFwiYnRuLXR4dC1kZWZhdWx0XCI6IHtcbiAgICBcImNvbG9yXCI6IFwicmdiKDUxLDUxLDUxKVwiXG4gIH0sXG4gIFwiYnRuLXR4dC1wcmltYXJ5XCI6IHtcbiAgICBcImNvbG9yXCI6IFwicmdiKDI1NSwyNTUsMjU1KVwiXG4gIH0sXG4gIFwiYnRuLXR4dC1zdWNjZXNzXCI6IHtcbiAgICBcImNvbG9yXCI6IFwicmdiKDI1NSwyNTUsMjU1KVwiXG4gIH0sXG4gIFwiYnRuLXR4dC1pbmZvXCI6IHtcbiAgICBcImNvbG9yXCI6IFwicmdiKDI1NSwyNTUsMjU1KVwiXG4gIH0sXG4gIFwiYnRuLXR4dC13YXJuaW5nXCI6IHtcbiAgICBcImNvbG9yXCI6IFwicmdiKDI1NSwyNTUsMjU1KVwiXG4gIH0sXG4gIFwiYnRuLXR4dC1kYW5nZXJcIjoge1xuICAgIFwiY29sb3JcIjogXCJyZ2IoMjU1LDI1NSwyNTUpXCJcbiAgfSxcbiAgXCJidG4tdHh0LWxpbmtcIjoge1xuICAgIFwiY29sb3JcIjogXCJyZ2IoNTEsMTIyLDE4MylcIlxuICB9LFxuICBcImJ0bi1zei1sYXJnZVwiOiB7XG4gICAgXCJ3aWR0aFwiOiAzMDAsXG4gICAgXCJoZWlnaHRcIjogMTAwLFxuICAgIFwicGFkZGluZ1RvcFwiOiAyNSxcbiAgICBcInBhZGRpbmdCb3R0b21cIjogMjUsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiA0MCxcbiAgICBcInBhZGRpbmdSaWdodFwiOiA0MCxcbiAgICBcImJvcmRlclJhZGl1c1wiOiAxNVxuICB9LFxuICBcImJ0bi1zei1taWRkbGVcIjoge1xuICAgIFwid2lkdGhcIjogMjQwLFxuICAgIFwiaGVpZ2h0XCI6IDgwLFxuICAgIFwicGFkZGluZ1RvcFwiOiAxNSxcbiAgICBcInBhZGRpbmdCb3R0b21cIjogMTUsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiAzMCxcbiAgICBcInBhZGRpbmdSaWdodFwiOiAzMCxcbiAgICBcImJvcmRlclJhZGl1c1wiOiAxMFxuICB9LFxuICBcImJ0bi1zei1zbWFsbFwiOiB7XG4gICAgXCJ3aWR0aFwiOiAxNzAsXG4gICAgXCJoZWlnaHRcIjogNjAsXG4gICAgXCJwYWRkaW5nVG9wXCI6IDEyLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiAxMixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IDI1LFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IDI1LFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IDdcbiAgfSxcbiAgXCJidG4tdHh0LXN6LWxhcmdlXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IDQ1XG4gIH0sXG4gIFwiYnRuLXR4dC1zei1taWRkbGVcIjoge1xuICAgIFwiZm9udFNpemVcIjogMzVcbiAgfSxcbiAgXCJidG4tdHh0LXN6LXNtYWxsXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IDMwXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL34vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtYnV0dG9uLndlXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDIgNCA4IDE3IDE4IDIyIDI0IDI2IDI3IDI4IDI5IDMxIDMyIDM2IDM3IDQzIDQ4IDQ5IDUxIDUyIDUzIDU0IDU1IDU2IDU5IDYxIDYyIDYzIDY0IDY1IDY2IDcwIDcyIDczIDc0IDc4IDgwIDgxIiwiPCEtLSBJbnNwaXJlZCBieSBib290c3RyYXAgaHR0cDovL2dldGJvb3RzdHJhcC5jb20vIC0tPlxuPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiYnRuIGJ0bi17e3R5cGV9fSBidG4tc3ote3tzaXplfX1cIj5cbiAgICA8dGV4dCBjbGFzcz1cImJ0bi10eHQgYnRuLXR4dC17e3R5cGV9fSBidG4tdHh0LXN6LXt7c2l6ZX19XCI+e3t2YWx1ZX19PC90ZXh0PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gIG1vZHVsZS5leHBvcnRzID0ge1xuICAgIGRhdGE6IHtcbiAgICAgIHR5cGU6ICdkZWZhdWx0JyxcbiAgICAgIHNpemU6ICdsYXJnZScsXG4gICAgICB2YWx1ZTogJydcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICB9XG4gIH1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4gIC5idG4ge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBib3JkZXItd2lkdGg6IDFweDtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjogIzMzMztcblxuICAgIC8qd2hpdGUtc3BhY2U6IG5vd3JhcDsqL1xuICAgIC8qdmVydGljYWwtYWxpZ246IG1pZGRsZTsqL1xuICAgIC8qdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247Ki9cbiAgICAvKmN1cnNvcjogcG9pbnRlcjsqL1xuICAgIC8qLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsqL1xuICAgIC8qYmFja2dyb3VuZC1pbWFnZTogbm9uZTsqL1xuICAgIC8qYm9yZGVyLWltYWdlLXNvdXJjZTogaW5pdGlhbDsqL1xuICAgIC8qYm9yZGVyLWltYWdlLXNsaWNlOiBpbml0aWFsOyovXG4gICAgLypib3JkZXItaW1hZ2Utd2lkdGg6IGluaXRpYWw7Ki9cbiAgICAvKmJvcmRlci1pbWFnZS1vdXRzZXQ6IGluaXRpYWw7Ki9cbiAgICAvKmJvcmRlci1pbWFnZS1yZXBlYXQ6IGluaXRpYWw7Ki9cbiAgfVxuXG4gIC5idG4tdHh0IHtcblxuICB9XG5cbiAgLyoqVFlQRSoqL1xuXG4gIC5idG4tZGVmYXVsdCB7XG4gICAgY29sb3I6IHJnYig1MSwgNTEsIDUxKTtcbiAgfVxuXG4gIC5idG4tcHJpbWFyeSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQwLCA5NiwgMTQ0KTtcbiAgICBib3JkZXItY29sb3I6IHJnYig0MCwgOTYsIDE0NCk7XG4gIH1cblxuICAuYnRuLXN1Y2Nlc3Mge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5MiwgMTg0LCA5Mik7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoNzYsIDE3NCwgNzYpO1xuICB9XG5cbiAgLmJ0bi1pbmZvIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTEsIDE5MiwgMjIyKTtcbiAgICBib3JkZXItY29sb3I6IHJnYig3MCwgMTg0LCAyMTgpO1xuICB9XG5cbiAgLmJ0bi13YXJuaW5nIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAxNzMsIDc4KTtcbiAgICBib3JkZXItY29sb3I6IHJnYigyMzgsIDE2MiwgNTQpO1xuICB9XG5cbiAgLmJ0bi1kYW5nZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTcsIDgzLCA3OSk7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMjEyLCA2MywgNTgpO1xuICB9XG5cbiAgLmJ0bi1saW5rIHtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gIH1cblxuICAuYnRuLXR4dC1kZWZhdWx0IHtcbiAgICBjb2xvcjogcmdiKDUxLCA1MSwgNTEpO1xuICB9XG5cbiAgLmJ0bi10eHQtcHJpbWFyeSB7XG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgfVxuXG4gIC5idG4tdHh0LXN1Y2Nlc3Mge1xuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIH1cblxuICAuYnRuLXR4dC1pbmZvIHtcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICB9XG5cbiAgLmJ0bi10eHQtd2FybmluZyB7XG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgfVxuXG4gIC5idG4tdHh0LWRhbmdlciB7XG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgfVxuXG4gIC5idG4tdHh0LWxpbmsge1xuICAgIGNvbG9yOiByZ2IoNTEsIDEyMiwgMTgzKTtcbiAgICAvKmZvbnQtd2VpZ2h0OiA0MDA7Ki9cbiAgfVxuXG4gIC8qKlNJWkUqKi9cblxuICAuYnRuLXN6LWxhcmdlIHtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBwYWRkaW5nLXRvcDogMjVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gICAgcGFkZGluZy1yaWdodDogNDBweDtcbiAgICAvKmxpbmUtaGVpZ2h0OiAxLjMzMzMzOyovXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgfVxuXG4gIC5idG4tc3otbWlkZGxlIHtcbiAgICB3aWR0aDogMjQwcHg7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICAgIC8qbGluZS1oZWlnaHQ6IDEuNDI4NTc7Ki9cbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB9XG5cbiAgLmJ0bi1zei1zbWFsbCB7XG4gICAgd2lkdGg6IDE3MHB4O1xuICAgIGhlaWdodDogNjBweDtcbiAgICBwYWRkaW5nLXRvcDogMTJweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG4gICAgcGFkZGluZy1yaWdodDogMjVweDtcbiAgICAvKmxpbmUtaGVpZ2h0OiAxLjU7Ki9cbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIH1cblxuICAuYnRuLXR4dC1zei1sYXJnZSB7XG4gICAgZm9udC1zaXplOiA0NXB4O1xuICB9XG5cbiAgLmJ0bi10eHQtc3otbWlkZGxlIHtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gIH1cblxuICAuYnRuLXR4dC1zei1zbWFsbCB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICB9XG5cbiAgLypESVNBQkxFRCovXG5cbiAgLmRpc2FibGVkIHtcblxuICB9XG5cbjwvc3R5bGU+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1idXR0b24ud2U/NGQzYzYwNWYiLCJ2YXIgX193ZWV4X3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL3d4Yy1obi53ZVwiKVxudmFyIF9fd2VleF9zdHlsZV9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi93eGMtaG4ud2VcIilcbnZhciBfX3dlZXhfc2NyaXB0X18gPSByZXF1aXJlKFwiISEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9zY3JpcHQuanMhYmFiZWwtbG9hZGVyP3ByZXNldHNbXT1DOlxcXFx2YmFvbGktd2VleFxcXFx2YmFvbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXByZXNldC1lczIwMTUmcHJlc2V0cz1DOlxcXFx2YmFvbGktd2VleFxcXFx2YmFvbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXByZXNldC1lczIwMTUmcGx1Z2luc1tdPUM6XFxcXHZiYW9saS13ZWV4XFxcXHZiYW9saVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJnBsdWdpbnM9QzpcXFxcdmJhb2xpLXdlZXhcXFxcdmJhb2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmY29tbWVudHM9ZmFsc2UhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c2NyaXB0cyEuL3d4Yy1obi53ZVwiKVxuXG5fX3dlZXhfZGVmaW5lX18oJ0B3ZWV4LWNvbXBvbmVudC93eGMtaG4nLCBbXSwgZnVuY3Rpb24oX193ZWV4X3JlcXVpcmVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X21vZHVsZV9fKSB7XG5cbiAgICBfX3dlZXhfc2NyaXB0X18oX193ZWV4X21vZHVsZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfcmVxdWlyZV9fKVxuICAgIGlmIChfX3dlZXhfZXhwb3J0c19fLl9fZXNNb2R1bGUgJiYgX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0KSB7XG4gICAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cyA9IF9fd2VleF9leHBvcnRzX18uZGVmYXVsdFxuICAgIH1cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnRlbXBsYXRlID0gX193ZWV4X3RlbXBsYXRlX19cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnN0eWxlID0gX193ZWV4X3N0eWxlX19cblxufSlcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1obi53ZVxuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDQgOCAxNyAxOCAyMiAyNCAyNiAyNyAyOCAyOSAzMSAzMiAzNiAzNyA0MyA0OCA0OSA1MSA1MiA1MyA1NCA1NSA1NiA1OSA2MSA2MiA2MyA2NCA2NSA2NiA3MCA3MiA3MyA3NCA3OCA4MCA4MSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJkaXZcIixcbiAgXCJjbGFzc0xpc3RcIjogZnVuY3Rpb24gKCkge3JldHVybiBbJ2gnICsgKHRoaXMubGV2ZWwpXX0sXG4gIFwic3R5bGVcIjoge1xuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIFsndHh0LWgnICsgKHRoaXMubGV2ZWwpXX0sXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy52YWx1ZX1cbiAgICAgIH1cbiAgICB9XG4gIF1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+L3dlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuL34vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtaG4ud2Vcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMiA0IDggMTcgMTggMjIgMjQgMjYgMjcgMjggMjkgMzEgMzIgMzYgMzcgNDMgNDggNDkgNTEgNTIgNTMgNTQgNTUgNTYgNTkgNjEgNjIgNjMgNjQgNjUgNjYgNzAgNzIgNzMgNzQgNzggODAgODEiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJoMVwiOiB7XG4gICAgXCJoZWlnaHRcIjogMTEwLFxuICAgIFwicGFkZGluZ1RvcFwiOiAyMCxcbiAgICBcInBhZGRpbmdCb3R0b21cIjogMjBcbiAgfSxcbiAgXCJoMlwiOiB7XG4gICAgXCJoZWlnaHRcIjogMTEwLFxuICAgIFwicGFkZGluZ1RvcFwiOiAyMCxcbiAgICBcInBhZGRpbmdCb3R0b21cIjogMjBcbiAgfSxcbiAgXCJoM1wiOiB7XG4gICAgXCJoZWlnaHRcIjogMTEwLFxuICAgIFwicGFkZGluZ1RvcFwiOiAyMCxcbiAgICBcInBhZGRpbmdCb3R0b21cIjogMjBcbiAgfSxcbiAgXCJ0eHQtaDFcIjoge1xuICAgIFwiZm9udFNpemVcIjogNzBcbiAgfSxcbiAgXCJ0eHQtaDJcIjoge1xuICAgIFwiZm9udFNpemVcIjogNTJcbiAgfSxcbiAgXCJ0eHQtaDNcIjoge1xuICAgIFwiZm9udFNpemVcIjogNDJcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vd2VleC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c3R5bGVzIS4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1obi53ZVxuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDQgOCAxNyAxOCAyMiAyNCAyNiAyNyAyOCAyOSAzMSAzMiAzNiAzNyA0MyA0OCA0OSA1MSA1MiA1MyA1NCA1NSA1NiA1OSA2MSA2MiA2MyA2NCA2NSA2NiA3MCA3MiA3MyA3NCA3OCA4MCA4MSIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImh7e2xldmVsfX1cIiBzdHlsZT1cImp1c3RpZnktY29udGVudDogY2VudGVyO1wiPlxuICAgIDx0ZXh0IGNsYXNzPVwidHh0LWh7e2xldmVsfX1cIj57e3ZhbHVlfX08L3RleHQ+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgbW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgZGF0YToge1xuICAgICAgbGV2ZWw6IDEsXG4gICAgICB2YWx1ZTogJydcbiAgICB9LFxuICAgIG1ldGhvZHM6IHt9XG4gIH1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4gIC5oMSB7XG4gICAgaGVpZ2h0OiAxMTBweDtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgfVxuXG4gIC5oMiB7XG4gICAgaGVpZ2h0OiAxMTBweDtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgfVxuXG4gIC5oMyB7XG4gICAgaGVpZ2h0OiAxMTBweDtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgfVxuICBcblxuICAudHh0LWgxIHtcbiAgICBmb250LXNpemU6IDcwcHg7XG4gIH1cblxuICAudHh0LWgyIHtcbiAgICBmb250LXNpemU6IDUycHg7XG4gIH1cblxuICAudHh0LWgzIHtcbiAgICBmb250LXNpemU6IDQycHg7XG4gIH1cbjwvc3R5bGU+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1obi53ZT8xNjk5N2NiMyIsInZhciBfX3dlZXhfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vd3hjLWxpc3QtaXRlbS53ZVwiKVxudmFyIF9fd2VleF9zdHlsZV9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi93eGMtbGlzdC1pdGVtLndlXCIpXG52YXIgX193ZWV4X3NjcmlwdF9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvc2NyaXB0LmpzIWJhYmVsLWxvYWRlcj9wcmVzZXRzW109QzpcXFxcdmJhb2xpLXdlZXhcXFxcdmJhb2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnByZXNldHM9QzpcXFxcdmJhb2xpLXdlZXhcXFxcdmJhb2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnBsdWdpbnNbXT1DOlxcXFx2YmFvbGktd2VleFxcXFx2YmFvbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZwbHVnaW5zPUM6XFxcXHZiYW9saS13ZWV4XFxcXHZiYW9saVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJmNvbW1lbnRzPWZhbHNlIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdHMhLi93eGMtbGlzdC1pdGVtLndlXCIpXG5cbl9fd2VleF9kZWZpbmVfXygnQHdlZXgtY29tcG9uZW50L3d4Yy1saXN0LWl0ZW0nLCBbXSwgZnVuY3Rpb24oX193ZWV4X3JlcXVpcmVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X21vZHVsZV9fKSB7XG5cbiAgICBfX3dlZXhfc2NyaXB0X18oX193ZWV4X21vZHVsZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfcmVxdWlyZV9fKVxuICAgIGlmIChfX3dlZXhfZXhwb3J0c19fLl9fZXNNb2R1bGUgJiYgX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0KSB7XG4gICAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cyA9IF9fd2VleF9leHBvcnRzX18uZGVmYXVsdFxuICAgIH1cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnRlbXBsYXRlID0gX193ZWV4X3RlbXBsYXRlX19cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnN0eWxlID0gX193ZWV4X3N0eWxlX19cblxufSlcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1saXN0LWl0ZW0ud2Vcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMiA0IDggMTcgMTggMjIgMjQgMjYgMjcgMjggMjkgMzEgMzIgMzYgMzcgNDMgNDggNDkgNTEgNTIgNTMgNTQgNTUgNTYgNTkgNjEgNjIgNjMgNjQgNjUgNjYgNzAgNzIgNzMgNzQgNzggODAgODEiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gIFwiY2xhc3NMaXN0XCI6IFtcbiAgICBcIml0ZW1cIlxuICBdLFxuICBcImV2ZW50c1wiOiB7XG4gICAgXCJ0b3VjaHN0YXJ0XCI6IFwidG91Y2hzdGFydFwiLFxuICAgIFwidG91Y2hlbmRcIjogXCJ0b3VjaGVuZFwiXG4gIH0sXG4gIFwic3R5bGVcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5iZ0NvbG9yfVxuICB9LFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJjb250ZW50XCJcbiAgICB9XG4gIF1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+L3dlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuL34vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtbGlzdC1pdGVtLndlXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDIgNCA4IDE3IDE4IDIyIDI0IDI2IDI3IDI4IDI5IDMxIDMyIDM2IDM3IDQzIDQ4IDQ5IDUxIDUyIDUzIDU0IDU1IDU2IDU5IDYxIDYyIDYzIDY0IDY1IDY2IDcwIDcyIDczIDc0IDc4IDgwIDgxIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiaXRlbVwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IDI1LFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiAyNSxcbiAgICBcInBhZGRpbmdMZWZ0XCI6IDM1LFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IDM1LFxuICAgIFwiaGVpZ2h0XCI6IDE2MCxcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJib3JkZXJCb3R0b21XaWR0aFwiOiAxLFxuICAgIFwiYm9yZGVyQ29sb3JcIjogXCIjZGRkZGRkXCJcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vd2VleC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c3R5bGVzIS4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1saXN0LWl0ZW0ud2Vcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMiA0IDggMTcgMTggMjIgMjQgMjYgMjcgMjggMjkgMzEgMzIgMzYgMzcgNDMgNDggNDkgNTEgNTIgNTMgNTQgNTUgNTYgNTkgNjEgNjIgNjMgNjQgNjUgNjYgNzAgNzIgNzMgNzQgNzggODAgODEiLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJpdGVtXCIgb250b3VjaHN0YXJ0PVwidG91Y2hzdGFydFwiIG9udG91Y2hlbmQ9XCJ0b3VjaGVuZFwiXG4gICAgICAgICAgICAgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOnt7YmdDb2xvcn19O1wiPlxuICAgIDxjb250ZW50PjwvY29udGVudD5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBkYXRhOiB7XG4gICAgICBiZ0NvbG9yOiAnI2ZmZmZmZidcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgIHRvdWNoc3RhcnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBGSVhNRSBhbmRyb2lkIHRvdWNoXG4gICAgICAgIC8vIFRPRE8gYWRhcHRpdmUgb3Bwb3NpdGUgYmdDb2xvclxuLy8gICAgICAgIHRoaXMuYmdDb2xvciA9ICcjZTZlNmU2JztcbiAgICAgIH0sXG4gICAgICB0b3VjaGVuZDogZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIEZJWE1FIGFuZHJvaWQgdG91Y2hlbmQgbm90IHRyaWdnZXJlZFxuLy8gICAgICAgIHRoaXMuYmdDb2xvciA9ICcjZmZmZmZmJztcbiAgICAgIH1cbiAgICB9XG4gIH1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4gIC5pdGVtIHtcbiAgICBwYWRkaW5nLXRvcDogMjVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDM1cHg7XG4gICAgcGFkZGluZy1yaWdodDogMzVweDtcbiAgICBoZWlnaHQ6IDE2MHB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIC8qbWFyZ2luLWJvdHRvbTogMXB4OyBGVVRVUkUgKi9cbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XG4gICAgYm9yZGVyLWNvbG9yOiAjZGRkZGRkO1xuICB9XG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtbGlzdC1pdGVtLndlPzQ0M2NlZmJkIiwidmFyIF9fd2VleF90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi93eGMtcGFuZWwud2VcIilcbnZhciBfX3dlZXhfc3R5bGVfXyA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c3R5bGVzIS4vd3hjLXBhbmVsLndlXCIpXG52YXIgX193ZWV4X3NjcmlwdF9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvc2NyaXB0LmpzIWJhYmVsLWxvYWRlcj9wcmVzZXRzW109QzpcXFxcdmJhb2xpLXdlZXhcXFxcdmJhb2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnByZXNldHM9QzpcXFxcdmJhb2xpLXdlZXhcXFxcdmJhb2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnBsdWdpbnNbXT1DOlxcXFx2YmFvbGktd2VleFxcXFx2YmFvbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZwbHVnaW5zPUM6XFxcXHZiYW9saS13ZWV4XFxcXHZiYW9saVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJmNvbW1lbnRzPWZhbHNlIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdHMhLi93eGMtcGFuZWwud2VcIilcblxuX193ZWV4X2RlZmluZV9fKCdAd2VleC1jb21wb25lbnQvd3hjLXBhbmVsJywgW10sIGZ1bmN0aW9uKF9fd2VleF9yZXF1aXJlX18sIF9fd2VleF9leHBvcnRzX18sIF9fd2VleF9tb2R1bGVfXykge1xuXG4gICAgX193ZWV4X3NjcmlwdF9fKF9fd2VleF9tb2R1bGVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X3JlcXVpcmVfXylcbiAgICBpZiAoX193ZWV4X2V4cG9ydHNfXy5fX2VzTW9kdWxlICYmIF9fd2VleF9leHBvcnRzX18uZGVmYXVsdCkge1xuICAgICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMgPSBfX3dlZXhfZXhwb3J0c19fLmRlZmF1bHRcbiAgICB9XG5cbiAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cy50ZW1wbGF0ZSA9IF9fd2VleF90ZW1wbGF0ZV9fXG5cbiAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cy5zdHlsZSA9IF9fd2VleF9zdHlsZV9fXG5cbn0pXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtcGFuZWwud2Vcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMiA0IDggMTcgMTggMjIgMjQgMjYgMjcgMjggMjkgMzEgMzIgMzYgMzcgNDMgNDggNDkgNTEgNTIgNTMgNTQgNTUgNTYgNTkgNjEgNjIgNjMgNjQgNjUgNjYgNzAgNzIgNzMgNzQgNzggODAgODEiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gIFwiY2xhc3NMaXN0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gWydwYW5lbCcsICdwYW5lbC0nICsgKHRoaXMudHlwZSldfSxcbiAgXCJzdHlsZVwiOiB7XG4gICAgXCJib3JkZXJXaWR0aFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuYm9yZGVyfVxuICB9LFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIFsncGFuZWwtaGVhZGVyJywgJ3BhbmVsLWhlYWRlci0nICsgKHRoaXMudHlwZSldfSxcbiAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICBcInBhZGRpbmdUb3BcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnBhZGRpbmdIZWFkfSxcbiAgICAgICAgXCJwYWRkaW5nQm90dG9tXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5wYWRkaW5nSGVhZH0sXG4gICAgICAgIFwicGFkZGluZ0xlZnRcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnBhZGRpbmdIZWFkKjEuNX0sXG4gICAgICAgIFwicGFkZGluZ1JpZ2h0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5wYWRkaW5nSGVhZCoxLjV9XG4gICAgICB9LFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudGl0bGV9XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiY2xhc3NMaXN0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gWydwYW5lbC1ib2R5JywgJ3BhbmVsLWJvZHktJyArICh0aGlzLnR5cGUpXX0sXG4gICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgXCJwYWRkaW5nVG9wXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5wYWRkaW5nQm9keX0sXG4gICAgICAgIFwicGFkZGluZ0JvdHRvbVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMucGFkZGluZ0JvZHl9LFxuICAgICAgICBcInBhZGRpbmdMZWZ0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5wYWRkaW5nQm9keSoxLjV9LFxuICAgICAgICBcInBhZGRpbmdSaWdodFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMucGFkZGluZ0JvZHkqMS41fVxuICAgICAgfSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiY29udGVudFwiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+L3dlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuL34vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtcGFuZWwud2Vcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMiA0IDggMTcgMTggMjIgMjQgMjYgMjcgMjggMjkgMzEgMzIgMzYgMzcgNDMgNDggNDkgNTEgNTIgNTMgNTQgNTUgNTYgNTkgNjEgNjIgNjMgNjQgNjUgNjYgNzAgNzIgNzMgNzQgNzggODAgODEiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJwYW5lbFwiOiB7XG4gICAgXCJtYXJnaW5Cb3R0b21cIjogMjAsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiNkZGRkZGRcIixcbiAgICBcImJvcmRlcldpZHRoXCI6IDFcbiAgfSxcbiAgXCJwYW5lbC1wcmltYXJ5XCI6IHtcbiAgICBcImJvcmRlckNvbG9yXCI6IFwicmdiKDQwLDk2LDE0NClcIlxuICB9LFxuICBcInBhbmVsLXN1Y2Nlc3NcIjoge1xuICAgIFwiYm9yZGVyQ29sb3JcIjogXCJyZ2IoNzYsMTc0LDc2KVwiXG4gIH0sXG4gIFwicGFuZWwtaW5mb1wiOiB7XG4gICAgXCJib3JkZXJDb2xvclwiOiBcInJnYig3MCwxODQsMjE4KVwiXG4gIH0sXG4gIFwicGFuZWwtd2FybmluZ1wiOiB7XG4gICAgXCJib3JkZXJDb2xvclwiOiBcInJnYigyMzgsMTYyLDU0KVwiXG4gIH0sXG4gIFwicGFuZWwtZGFuZ2VyXCI6IHtcbiAgICBcImJvcmRlckNvbG9yXCI6IFwicmdiKDIxMiw2Myw1OClcIlxuICB9LFxuICBcInBhbmVsLWhlYWRlclwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZjVmNWY1XCIsXG4gICAgXCJmb250U2l6ZVwiOiA0MCxcbiAgICBcImNvbG9yXCI6IFwiIzMzMzMzM1wiXG4gIH0sXG4gIFwicGFuZWwtaGVhZGVyLXByaW1hcnlcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwicmdiKDQwLDk2LDE0NClcIixcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gIH0sXG4gIFwicGFuZWwtaGVhZGVyLXN1Y2Nlc3NcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwicmdiKDkyLDE4NCw5MilcIixcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gIH0sXG4gIFwicGFuZWwtaGVhZGVyLWluZm9cIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwicmdiKDkxLDE5MiwyMjIpXCIsXG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIlxuICB9LFxuICBcInBhbmVsLWhlYWRlci13YXJuaW5nXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcInJnYigyNDAsMTczLDc4KVwiLFxuICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCJcbiAgfSxcbiAgXCJwYW5lbC1oZWFkZXItZGFuZ2VyXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcInJnYigyMTcsODMsNzkpXCIsXG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIlxuICB9LFxuICBcInBhbmVsLWJvZHlcIjoge31cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL34vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtcGFuZWwud2Vcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMiA0IDggMTcgMTggMjIgMjQgMjYgMjcgMjggMjkgMzEgMzIgMzYgMzcgNDMgNDggNDkgNTEgNTIgNTMgNTQgNTUgNTYgNTkgNjEgNjIgNjMgNjQgNjUgNjYgNzAgNzIgNzMgNzQgNzggODAgODEiLCI8IS0tIEluc3BpcmVkIGJ5IGJvb3RzdHJhcCBodHRwOi8vZ2V0Ym9vdHN0cmFwLmNvbS8gLS0+XG48dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJwYW5lbCBwYW5lbC17e3R5cGV9fVwiIHN0eWxlPVwiYm9yZGVyLXdpZHRoOnt7Ym9yZGVyfX1cIj5cbiAgICA8dGV4dCBjbGFzcz1cInBhbmVsLWhlYWRlciBwYW5lbC1oZWFkZXIte3t0eXBlfX1cIlxuICAgICAgICAgIHN0eWxlPVwicGFkZGluZy10b3A6e3twYWRkaW5nSGVhZH19O3BhZGRpbmctYm90dG9tOnt7cGFkZGluZ0hlYWR9fTtwYWRkaW5nLWxlZnQ6e3twYWRkaW5nSGVhZCoxLjV9fTtwYWRkaW5nLXJpZ2h0Ont7cGFkZGluZ0hlYWQqMS41fX1cIj5cbiAgICAgIHt7dGl0bGV9fVxuICAgIDwvdGV4dD5cbiAgICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keSBwYW5lbC1ib2R5LXt7dHlwZX19XCJcbiAgICAgICAgIHN0eWxlPVwicGFkZGluZy10b3A6e3twYWRkaW5nQm9keX19O3BhZGRpbmctYm90dG9tOnt7cGFkZGluZ0JvZHl9fTtwYWRkaW5nLWxlZnQ6e3twYWRkaW5nQm9keSoxLjV9fTtwYWRkaW5nLXJpZ2h0Ont7cGFkZGluZ0JvZHkqMS41fX1cIj5cbiAgICAgIDxjb250ZW50PjwvY29udGVudD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBkYXRhOiB7XG4gICAgICB0eXBlOiAnZGVmYXVsdCcsXG4gICAgICB0aXRsZTogJycsXG4gICAgICBwYWRkaW5nQm9keTogMjAsXG4gICAgICBwYWRkaW5nSGVhZDogMjAsXG4gICAgICBkYXRhQ2xhc3M6ICcnLCAvLyBGSVhNRSB0cmFuc2ZlciBjbGFzc1xuICAgICAgYm9yZGVyOiAwXG4gICAgfSxcbiAgICByZWFkeTogZnVuY3Rpb24oKSB7XG4gICAgfVxuICB9XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICAucGFuZWwge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAvKmJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50OyovXG4gICAgLypib3JkZXItcmFkaXVzOiAxMHB4OyovXG4gICAgLyotd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsMCwwLC4wNSk7Ki9cbiAgICAvKmJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsMCwwLC4wNSk7Ki9cbiAgICBib3JkZXItY29sb3I6ICNkZGRkZGQ7XG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIH1cblxuICAucGFuZWwtZGVmYXVsdCB7XG4gIH1cblxuICAucGFuZWwtcHJpbWFyeSB7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoNDAsIDk2LCAxNDQpO1xuICB9XG5cbiAgLnBhbmVsLXN1Y2Nlc3Mge1xuICAgIGJvcmRlci1jb2xvcjogcmdiKDc2LCAxNzQsIDc2KTtcblxuICB9XG5cbiAgLnBhbmVsLWluZm8ge1xuICAgIGJvcmRlci1jb2xvcjogcmdiKDcwLCAxODQsIDIxOCk7XG5cbiAgfVxuXG4gIC5wYW5lbC13YXJuaW5nIHtcbiAgICBib3JkZXItY29sb3I6IHJnYigyMzgsIDE2MiwgNTQpO1xuXG4gIH1cblxuICAucGFuZWwtZGFuZ2VyIHtcbiAgICBib3JkZXItY29sb3I6IHJnYigyMTIsIDYzLCA1OCk7XG5cbiAgfVxuXG4gIC5wYW5lbC1oZWFkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIC8qcGFkZGluZy1sZWZ0OiAxMnB4OyovXG4gICAgLypwYWRkaW5nLXJpZ2h0OiAxMnB4OyovXG4gICAgLypwYWRkaW5nLXRvcDogMjBweDsqL1xuICAgIC8qcGFkZGluZy1ib3R0b206IDIwcHg7Ki9cbiAgICBjb2xvcjogIzMzMztcbiAgfVxuXG4gIC5wYW5lbC1oZWFkZXItZGVmYXVsdCB7XG4gIH1cblxuICAucGFuZWwtaGVhZGVyLXByaW1hcnkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MCwgOTYsIDE0NCk7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gIH1cblxuICAucGFuZWwtaGVhZGVyLXN1Y2Nlc3Mge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5MiwgMTg0LCA5Mik7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gIH1cblxuICAucGFuZWwtaGVhZGVyLWluZm8ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5MSwgMTkyLCAyMjIpO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICB9XG5cbiAgLnBhbmVsLWhlYWRlci13YXJuaW5nIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAxNzMsIDc4KTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgfVxuXG4gIC5wYW5lbC1oZWFkZXItZGFuZ2VyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE3LCA4MywgNzkpO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICB9XG5cbiAgLnBhbmVsLWJvZHkge1xuICAgIC8qcGFkZGluZy1sZWZ0OiAxMnB4OyovXG4gICAgLypwYWRkaW5nLXJpZ2h0OiAxMnB4OyovXG4gICAgLypwYWRkaW5nLXRvcDogMjBweDsqL1xuICAgIC8qcGFkZGluZy1ib3R0b206IDIwcHg7Ki9cbiAgfVxuXG4gIC5wYW5lbC1ib2R5LWRlZmF1bHQge1xuICB9XG5cbiAgLnBhbmVsLWJvZHktcHJpbWFyeSB7XG4gIH1cblxuICAucGFuZWwtYm9keS1zdWNjZXNzIHtcbiAgfVxuXG4gIC5wYW5lbC1ib2R5LWluZm8ge1xuICB9XG5cbiAgLnBhbmVsLWJvZHktd2FybmluZyB7XG4gIH1cblxuICAucGFuZWwtYm9keS1kYW5nZXIge1xuICB9XG48L3N0eWxlPlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1wYW5lbC53ZT9kNjY5ZDk0MiIsInZhciBfX3dlZXhfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vd3hjLXRpcC53ZVwiKVxudmFyIF9fd2VleF9zdHlsZV9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi93eGMtdGlwLndlXCIpXG52YXIgX193ZWV4X3NjcmlwdF9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvc2NyaXB0LmpzIWJhYmVsLWxvYWRlcj9wcmVzZXRzW109QzpcXFxcdmJhb2xpLXdlZXhcXFxcdmJhb2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnByZXNldHM9QzpcXFxcdmJhb2xpLXdlZXhcXFxcdmJhb2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnBsdWdpbnNbXT1DOlxcXFx2YmFvbGktd2VleFxcXFx2YmFvbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZwbHVnaW5zPUM6XFxcXHZiYW9saS13ZWV4XFxcXHZiYW9saVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJmNvbW1lbnRzPWZhbHNlIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdHMhLi93eGMtdGlwLndlXCIpXG5cbl9fd2VleF9kZWZpbmVfXygnQHdlZXgtY29tcG9uZW50L3d4Yy10aXAnLCBbXSwgZnVuY3Rpb24oX193ZWV4X3JlcXVpcmVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X21vZHVsZV9fKSB7XG5cbiAgICBfX3dlZXhfc2NyaXB0X18oX193ZWV4X21vZHVsZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfcmVxdWlyZV9fKVxuICAgIGlmIChfX3dlZXhfZXhwb3J0c19fLl9fZXNNb2R1bGUgJiYgX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0KSB7XG4gICAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cyA9IF9fd2VleF9leHBvcnRzX18uZGVmYXVsdFxuICAgIH1cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnRlbXBsYXRlID0gX193ZWV4X3RlbXBsYXRlX19cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnN0eWxlID0gX193ZWV4X3N0eWxlX19cblxufSlcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy10aXAud2Vcbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMiA0IDggMTcgMTggMjIgMjQgMjYgMjcgMjggMjkgMzEgMzIgMzYgMzcgNDMgNDggNDkgNTEgNTIgNTMgNTQgNTUgNTYgNTkgNjEgNjIgNjMgNjQgNjUgNjYgNzAgNzIgNzMgNzQgNzggODAgODEiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gIFwiY2xhc3NMaXN0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gWyd0aXAnLCAndGlwLScgKyAodGhpcy50eXBlKV19LFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIFsndGlwLXR4dCcsICd0aXAtdHh0LScgKyAodGhpcy50eXBlKV19LFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudmFsdWV9XG4gICAgICB9XG4gICAgfVxuICBdXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi9+L3dlZXgtY29tcG9uZW50cy9zcmMvd3hjLXRpcC53ZVxuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDQgOCAxNyAxOCAyMiAyNCAyNiAyNyAyOCAyOSAzMSAzMiAzNiAzNyA0MyA0OCA0OSA1MSA1MiA1MyA1NCA1NSA1NiA1OSA2MSA2MiA2MyA2NCA2NSA2NiA3MCA3MiA3MyA3NCA3OCA4MCA4MSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInRpcFwiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiAzNixcbiAgICBcInBhZGRpbmdSaWdodFwiOiAzNixcbiAgICBcInBhZGRpbmdUb3BcIjogMzYsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IDM2LFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IDEwXG4gIH0sXG4gIFwidGlwLXR4dFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiAyOFxuICB9LFxuICBcInRpcC1zdWNjZXNzXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNkZmYwZDhcIixcbiAgICBcImJvcmRlckNvbG9yXCI6IFwiI2Q2ZTljNlwiXG4gIH0sXG4gIFwidGlwLXR4dC1zdWNjZXNzXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzNjNzYzZFwiXG4gIH0sXG4gIFwidGlwLWluZm9cIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2Q5ZWRmN1wiLFxuICAgIFwiYm9yZGVyQ29sb3JcIjogXCIjYmNlOGYxXCJcbiAgfSxcbiAgXCJ0aXAtdHh0LWluZm9cIjoge1xuICAgIFwiY29sb3JcIjogXCIjMzE3MDhmXCJcbiAgfSxcbiAgXCJ0aXAtd2FybmluZ1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmNmOGUzXCIsXG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiNmYWViY2NcIlxuICB9LFxuICBcInRpcC10eHQtd2FybmluZ1wiOiB7XG4gICAgXCJjb2xvclwiOiBcIiM4YTZkM2JcIlxuICB9LFxuICBcInRpcC1kYW5nZXJcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2YyZGVkZVwiLFxuICAgIFwiYm9yZGVyQ29sb3JcIjogXCIjZWJjY2QxXCJcbiAgfSxcbiAgXCJ0aXAtdHh0LWRhbmdlclwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNhOTQ0NDJcIlxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi9+L3dlZXgtY29tcG9uZW50cy9zcmMvd3hjLXRpcC53ZVxuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDQgOCAxNyAxOCAyMiAyNCAyNiAyNyAyOCAyOSAzMSAzMiAzNiAzNyA0MyA0OCA0OSA1MSA1MiA1MyA1NCA1NSA1NiA1OSA2MSA2MiA2MyA2NCA2NSA2NiA3MCA3MiA3MyA3NCA3OCA4MCA4MSIsIjwhLS0gSW5zcGlyZWQgYnkgYm9vdHN0cmFwIGh0dHA6Ly9nZXRib290c3RyYXAuY29tLyAtLT5cbjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cInRpcCB0aXAte3t0eXBlfX1cIj5cbiAgICA8dGV4dCBjbGFzcz1cInRpcC10eHQgdGlwLXR4dC17e3R5cGV9fVwiPnt7dmFsdWV9fTwvdGV4dD5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBkYXRhOiB7XG4gICAgICB0eXBlOiAnc3VjY2VzcycsXG4gICAgICB2YWx1ZTogJydcbiAgICB9XG4gIH1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4gIC50aXAge1xuICAgIHBhZGRpbmctbGVmdDogMzZweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzNnB4O1xuICAgIHBhZGRpbmctdG9wOiAzNnB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAzNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIH1cbiAgXG4gIC50aXAtdHh0e1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgfVxuXG4gIC50aXAtc3VjY2VzcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RmZjBkODtcbiAgICBib3JkZXItY29sb3I6ICNkNmU5YzY7XG4gIH1cblxuICAudGlwLXR4dC1zdWNjZXNzIHtcbiAgICBjb2xvcjogIzNjNzYzZDtcbiAgfVxuXG4gIC50aXAtaW5mbyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q5ZWRmNztcbiAgICBib3JkZXItY29sb3I6ICNiY2U4ZjE7XG4gIH1cblxuICAudGlwLXR4dC1pbmZvIHtcbiAgICBjb2xvcjogIzMxNzA4ZjtcbiAgfVxuXG4gIC50aXAtd2FybmluZyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZjhlMztcbiAgICBib3JkZXItY29sb3I6ICNmYWViY2M7XG4gIH1cblxuICAudGlwLXR4dC13YXJuaW5nIHtcbiAgICBjb2xvcjogIzhhNmQzYjtcbiAgfVxuXG4gIC50aXAtZGFuZ2VyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJkZWRlO1xuICAgIGJvcmRlci1jb2xvcjogI2ViY2NkMTtcbiAgfVxuXG4gIC50aXAtdHh0LWRhbmdlciB7XG4gICAgY29sb3I6ICNhOTQ0NDI7XG4gIH1cbjwvc3R5bGU+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy10aXAud2U/MjFlYjE1OTQiLCJ2YXIgX193ZWV4X3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL3d4Yy1jb3VudGRvd24ud2VcIilcbnZhciBfX3dlZXhfc3R5bGVfXyA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c3R5bGVzIS4vd3hjLWNvdW50ZG93bi53ZVwiKVxudmFyIF9fd2VleF9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL3NjcmlwdC5qcyFiYWJlbC1sb2FkZXI/cHJlc2V0c1tdPUM6XFxcXHZiYW9saS13ZWV4XFxcXHZiYW9saVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcHJlc2V0LWVzMjAxNSZwcmVzZXRzPUM6XFxcXHZiYW9saS13ZWV4XFxcXHZiYW9saVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcHJlc2V0LWVzMjAxNSZwbHVnaW5zW109QzpcXFxcdmJhb2xpLXdlZXhcXFxcdmJhb2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmcGx1Z2lucz1DOlxcXFx2YmFvbGktd2VleFxcXFx2YmFvbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZjb21tZW50cz1mYWxzZSEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zY3JpcHRzIS4vd3hjLWNvdW50ZG93bi53ZVwiKVxuXG5fX3dlZXhfZGVmaW5lX18oJ0B3ZWV4LWNvbXBvbmVudC93eGMtY291bnRkb3duJywgW10sIGZ1bmN0aW9uKF9fd2VleF9yZXF1aXJlX18sIF9fd2VleF9leHBvcnRzX18sIF9fd2VleF9tb2R1bGVfXykge1xuXG4gICAgX193ZWV4X3NjcmlwdF9fKF9fd2VleF9tb2R1bGVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X3JlcXVpcmVfXylcbiAgICBpZiAoX193ZWV4X2V4cG9ydHNfXy5fX2VzTW9kdWxlICYmIF9fd2VleF9leHBvcnRzX18uZGVmYXVsdCkge1xuICAgICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMgPSBfX3dlZXhfZXhwb3J0c19fLmRlZmF1bHRcbiAgICB9XG5cbiAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cy50ZW1wbGF0ZSA9IF9fd2VleF90ZW1wbGF0ZV9fXG5cbiAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cy5zdHlsZSA9IF9fd2VleF9zdHlsZV9fXG5cbn0pXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtY291bnRkb3duLndlXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDIgNCA4IDE3IDE4IDIyIDI0IDI2IDI3IDI4IDI5IDMxIDMyIDM2IDM3IDQzIDQ4IDQ5IDUxIDUyIDUzIDU0IDU1IDU2IDU5IDYxIDYyIDYzIDY0IDY1IDY2IDcwIDcyIDczIDc0IDc4IDgwIDgxIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImRpdlwiLFxuICBcInN0eWxlXCI6IHtcbiAgICBcIm92ZXJmbG93XCI6IFwiaGlkZGVuXCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCJcbiAgfSxcbiAgXCJldmVudHNcIjoge1xuICAgIFwiYXBwZWFyXCI6IFwiYXBwZWFyZWRcIixcbiAgICBcImRpc2FwcGVhclwiOiBcImRpc2FwcGVhcmVkXCJcbiAgfSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiY29udGVudFwiXG4gICAgfVxuICBdXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi9+L3dlZXgtY29tcG9uZW50cy9zcmMvd3hjLWNvdW50ZG93bi53ZVxuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDQgOCAxNyAxOCAyMiAyNCAyNiAyNyAyOCAyOSAzMSAzMiAzNiAzNyA0MyA0OCA0OSA1MSA1MiA1MyA1NCA1NSA1NiA1OSA2MSA2MiA2MyA2NCA2NSA2NiA3MCA3MiA3MyA3NCA3OCA4MCA4MSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcIndyYXBcIjoge1xuICAgIFwib3ZlcmZsb3dcIjogXCJoaWRkZW5cIlxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi9+L3dlZXgtY29tcG9uZW50cy9zcmMvd3hjLWNvdW50ZG93bi53ZVxuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDQgOCAxNyAxOCAyMiAyNCAyNiAyNyAyOCAyOSAzMSAzMiAzNiAzNyA0MyA0OCA0OSA1MSA1MiA1MyA1NCA1NSA1NiA1OSA2MSA2MiA2MyA2NCA2NSA2NiA3MCA3MiA3MyA3NCA3OCA4MCA4MSIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IHN0eWxlPVwib3ZlcmZsb3c6IGhpZGRlbjsgZmxleC1kaXJlY3Rpb246IHJvdztcIiBvbmFwcGVhcj1cImFwcGVhcmVkXCIgb25kaXNhcHBlYXI9XCJkaXNhcHBlYXJlZFwiPlxuICAgICAgICA8Y29udGVudD48L2NvbnRlbnQ+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c3R5bGU+XG4ud3JhcCB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbjwvc3R5bGU+XG5cbjxzY3JpcHQ+XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBkYXRhOiB7XG4gICAgICAgIG5vdzogMCxcbiAgICAgICAgcmVtYWluOiAwLFxuICAgICAgICB0aW1lOiB7XG4gICAgICAgICAgICBlbGFwc2U6IDAsXG4gICAgICAgICAgICBEOiAnMCcsXG4gICAgICAgICAgICBERDogJzAnLFxuICAgICAgICAgICAgaDogJzAnLFxuICAgICAgICAgICAgaGg6ICcwMCcsXG4gICAgICAgICAgICBIOiAnMCcsXG4gICAgICAgICAgICBISDogJzAnLFxuICAgICAgICAgICAgbTogJzAnLFxuICAgICAgICAgICAgbW06ICcwMCcsXG4gICAgICAgICAgICBNOiAnMCcsXG4gICAgICAgICAgICBNTTogJzAnLFxuICAgICAgICAgICAgczogJzAnLFxuICAgICAgICAgICAgc3M6ICcwMCcsXG4gICAgICAgICAgICBTOiAnMCcsXG4gICAgICAgICAgICBTUzogJzAnXG4gICAgICAgIH0sXG4gICAgICAgIG91dG9mdmlldzogZmFsc2VcbiAgICB9LFxuICAgIHJlYWR5OiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMucmVtYWluIDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyB0aGlzLmlzV2ViID0gdGhpcy4kZ2V0Q29uZmlnKCkuZW52LnBsYXRmb3JtID09PSAnV2ViJztcbiAgICAgICAgdGhpcy5ub3cgPSBEYXRlLm5vdygpO1xuICAgICAgICB0aGlzLm5leHRUaWNrKCk7XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIG5leHRUaWNrOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm91dG9mdmlldykge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQodGhpcy5uZXh0VGljay5iaW5kKHRoaXMpLCAxMDAwKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aW1lLmVsYXBzZSA9IHBhcnNlSW50KChEYXRlLm5vdygpIC0gdGhpcy5ub3cpIC8gMTAwMCk7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jYWxjKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgndGljaycsIE9iamVjdC5hc3NpZ24oe30sIHRoaXMudGltZSkpO1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KHRoaXMubmV4dFRpY2suYmluZCh0aGlzKSwgMTAwMCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnYWxhcm0nLCBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnRpbWUpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5fYXBwLnVwZGF0ZUFjdGlvbnMoKTsgXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGZvcm1hdDogZnVuY3Rpb24oc3RyKSB7XG4gICAgICAgICAgICBpZiAoc3RyLmxlbmd0aCA+PSAyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0cjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICcwJyArIHN0cjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY2FsYzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgcmVtYWluID0gdGhpcy5yZW1haW4gLSB0aGlzLnRpbWUuZWxhcHNlO1xuICAgICAgICAgICAgaWYgKHJlbWFpbiA8IDApIHtcbiAgICAgICAgICAgICAgICByZW1haW4gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy50aW1lLkQgPSBTdHJpbmcocGFyc2VJbnQocmVtYWluIC8gODY0MDApKTtcbiAgICAgICAgICAgIHRoaXMudGltZS5ERCA9IHRoaXMuZm9ybWF0KHRoaXMudGltZS5EKTtcbiAgICAgICAgICAgIHRoaXMudGltZS5oID0gU3RyaW5nKHBhcnNlSW50KChyZW1haW4gLSBwYXJzZUludCh0aGlzLnRpbWUuRCkgKiA4NjQwMCkgLyAzNjAwKSk7XG4gICAgICAgICAgICB0aGlzLnRpbWUuaGggPSB0aGlzLmZvcm1hdCh0aGlzLnRpbWUuaCk7XG4gICAgICAgICAgICB0aGlzLnRpbWUuSCA9IFN0cmluZyhwYXJzZUludChyZW1haW4gLyAzNjAwKSk7XG4gICAgICAgICAgICB0aGlzLnRpbWUuSEggPSB0aGlzLmZvcm1hdCh0aGlzLnRpbWUuSCk7XG4gICAgICAgICAgICB0aGlzLnRpbWUubSA9IFN0cmluZyhwYXJzZUludCgocmVtYWluIC0gcGFyc2VJbnQodGhpcy50aW1lLkgpICogMzYwMCkgLyA2MCkpO1xuICAgICAgICAgICAgdGhpcy50aW1lLm1tID0gdGhpcy5mb3JtYXQodGhpcy50aW1lLm0pO1xuICAgICAgICAgICAgdGhpcy50aW1lLk0gPSBTdHJpbmcocGFyc2VJbnQocmVtYWluIC8gNjApKTtcbiAgICAgICAgICAgIHRoaXMudGltZS5NTSA9IHRoaXMuZm9ybWF0KHRoaXMudGltZS5NKTtcbiAgICAgICAgICAgIHRoaXMudGltZS5zID0gU3RyaW5nKHJlbWFpbiAtIHBhcnNlSW50KHRoaXMudGltZS5NKSAqIDYwKTtcbiAgICAgICAgICAgIHRoaXMudGltZS5zcyA9IHRoaXMuZm9ybWF0KHRoaXMudGltZS5zKTtcbiAgICAgICAgICAgIHRoaXMudGltZS5TID0gU3RyaW5nKHJlbWFpbik7XG4gICAgICAgICAgICB0aGlzLnRpbWUuU1MgPSB0aGlzLmZvcm1hdCh0aGlzLnRpbWUuUyk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZW1haW4sIHRoaXMuRCwgdGhpcy5oLCB0aGlzLmhoLCB0aGlzLkgsIHRoaXMuSEgsIHRoaXMubSwgdGhpcy5NTSwgdGhpcy5zLCB0aGlzLnNzLCB0aGlzLlMsIHRoaXMuU1MpO1xuICAgICAgICAgICAgcmV0dXJuIHJlbWFpbiA+IDA7XG4gICAgICAgIH0sXG4gICAgICAgIGFwcGVhcmVkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMub3V0b2Z2aWV3ID0gZmFsc2U7XG4gICAgICAgIH0sXG4gICAgICAgIGRpc2FwcGVhcmVkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMub3V0b2Z2aWV3ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbjwvc2NyaXB0PlxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3dlZXgtY29tcG9uZW50cy9zcmMvd3hjLWNvdW50ZG93bi53ZT80NmE2Mjg4YyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvYXNzaWduLmpzXG4vLyBtb2R1bGUgaWQgPSAzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDIgNCA4IDE3IDE4IDIyIDI0IDI2IDI3IDI4IDI5IDMxIDMyIDM2IDM3IDQzIDQ4IDQ5IDUxIDUyIDUzIDU0IDU1IDU2IDU5IDYxIDYyIDYzIDY0IDY1IDY2IDcwIDcyIDczIDc0IDc4IDgwIDgxIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmFzc2lnbjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMiA0IDggMTcgMTggMjIgMjQgMjYgMjcgMjggMjkgMzEgMzIgMzYgMzcgNDMgNDggNDkgNTEgNTIgNTMgNTQgNTUgNTYgNTkgNjEgNjIgNjMgNjQgNjUgNjYgNzAgNzIgNzMgNzQgNzggODAgODEiLCIvLyAxOS4xLjMuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYsICdPYmplY3QnLCB7YXNzaWduOiByZXF1aXJlKCcuL19vYmplY3QtYXNzaWduJyl9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMiA0IDggMTcgMTggMjIgMjQgMjYgMjcgMjggMjkgMzEgMzIgMzYgMzcgNDMgNDggNDkgNTEgNTIgNTMgNTQgNTUgNTYgNTkgNjEgNjIgNjMgNjQgNjUgNjYgNzAgNzIgNzMgNzQgNzggODAgODEiLCJ2YXIgZ2xvYmFsICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjb3JlICAgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBjdHggICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGhpZGUgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgJGV4cG9ydCA9IGZ1bmN0aW9uKHR5cGUsIG5hbWUsIHNvdXJjZSl7XG4gIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GXG4gICAgLCBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HXG4gICAgLCBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TXG4gICAgLCBJU19QUk9UTyAgPSB0eXBlICYgJGV4cG9ydC5QXG4gICAgLCBJU19CSU5EICAgPSB0eXBlICYgJGV4cG9ydC5CXG4gICAgLCBJU19XUkFQICAgPSB0eXBlICYgJGV4cG9ydC5XXG4gICAgLCBleHBvcnRzICAgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KVxuICAgICwgZXhwUHJvdG8gID0gZXhwb3J0c1tQUk9UT1RZUEVdXG4gICAgLCB0YXJnZXQgICAgPSBJU19HTE9CQUwgPyBnbG9iYWwgOiBJU19TVEFUSUMgPyBnbG9iYWxbbmFtZV0gOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdXG4gICAgLCBrZXksIG93biwgb3V0O1xuICBpZihJU19HTE9CQUwpc291cmNlID0gbmFtZTtcbiAgZm9yKGtleSBpbiBzb3VyY2Upe1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgaWYob3duICYmIGtleSBpbiBleHBvcnRzKWNvbnRpbnVlO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gb3duID8gdGFyZ2V0W2tleV0gOiBzb3VyY2Vba2V5XTtcbiAgICAvLyBwcmV2ZW50IGdsb2JhbCBwb2xsdXRpb24gZm9yIG5hbWVzcGFjZXNcbiAgICBleHBvcnRzW2tleV0gPSBJU19HTE9CQUwgJiYgdHlwZW9mIHRhcmdldFtrZXldICE9ICdmdW5jdGlvbicgPyBzb3VyY2Vba2V5XVxuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgOiBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbClcbiAgICAvLyB3cmFwIGdsb2JhbCBjb25zdHJ1Y3RvcnMgZm9yIHByZXZlbnQgY2hhbmdlIHRoZW0gaW4gbGlicmFyeVxuICAgIDogSVNfV1JBUCAmJiB0YXJnZXRba2V5XSA9PSBvdXQgPyAoZnVuY3Rpb24oQyl7XG4gICAgICB2YXIgRiA9IGZ1bmN0aW9uKGEsIGIsIGMpe1xuICAgICAgICBpZih0aGlzIGluc3RhbmNlb2YgQyl7XG4gICAgICAgICAgc3dpdGNoKGFyZ3VtZW50cy5sZW5ndGgpe1xuICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gbmV3IEM7XG4gICAgICAgICAgICBjYXNlIDE6IHJldHVybiBuZXcgQyhhKTtcbiAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIG5ldyBDKGEsIGIpO1xuICAgICAgICAgIH0gcmV0dXJuIG5ldyBDKGEsIGIsIGMpO1xuICAgICAgICB9IHJldHVybiBDLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgICAgRltQUk9UT1RZUEVdID0gQ1tQUk9UT1RZUEVdO1xuICAgICAgcmV0dXJuIEY7XG4gICAgLy8gbWFrZSBzdGF0aWMgdmVyc2lvbnMgZm9yIHByb3RvdHlwZSBtZXRob2RzXG4gICAgfSkob3V0KSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5tZXRob2RzLiVOQU1FJVxuICAgIGlmKElTX1BST1RPKXtcbiAgICAgIChleHBvcnRzLnZpcnR1YWwgfHwgKGV4cG9ydHMudmlydHVhbCA9IHt9KSlba2V5XSA9IG91dDtcbiAgICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5wcm90b3R5cGUuJU5BTUUlXG4gICAgICBpZih0eXBlICYgJGV4cG9ydC5SICYmIGV4cFByb3RvICYmICFleHBQcm90b1trZXldKWhpZGUoZXhwUHJvdG8sIGtleSwgb3V0KTtcbiAgICB9XG4gIH1cbn07XG4vLyB0eXBlIGJpdG1hcFxuJGV4cG9ydC5GID0gMTsgICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAgLy8gZ2xvYmFsXG4kZXhwb3J0LlMgPSA0OyAgIC8vIHN0YXRpY1xuJGV4cG9ydC5QID0gODsgICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7ICAvLyBiaW5kXG4kZXhwb3J0LlcgPSAzMjsgIC8vIHdyYXBcbiRleHBvcnQuVSA9IDY0OyAgLy8gc2FmZVxuJGV4cG9ydC5SID0gMTI4OyAvLyByZWFsIHByb3RvIG1ldGhvZCBmb3IgYGxpYnJhcnlgIFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzXG4vLyBtb2R1bGUgaWQgPSA0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDIgNCA4IDEwIDE0IDE3IDE4IDIyIDI0IDI1IDI2IDI3IDI4IDI5IDMxIDMyIDM2IDM3IDQzIDQ4IDQ5IDUxIDUyIDUzIDU0IDU1IDU2IDU3IDU4IDU5IDYxIDYyIDYzIDY0IDY1IDY2IDcwIDcyIDczIDc0IDc4IDgwIDgxIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZiA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZih0eXBlb2YgX19nID09ICdudW1iZXInKV9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDIgNCA4IDEwIDE0IDE3IDE4IDIyIDI0IDI1IDI2IDI3IDI4IDI5IDMxIDMyIDM2IDM3IDQzIDQ4IDQ5IDUxIDUyIDUzIDU0IDU1IDU2IDU3IDU4IDU5IDYxIDYyIDYzIDY0IDY1IDY2IDcwIDcyIDczIDc0IDc4IDgwIDgxIiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHt2ZXJzaW9uOiAnMi40LjAnfTtcbmlmKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29yZS5qc1xuLy8gbW9kdWxlIGlkID0gNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDQgOCAxMCAxNCAxNyAxOCAyMiAyNCAyNSAyNiAyNyAyOCAyOSAzMSAzMiAzNiAzNyA0MyA0OCA0OSA1MSA1MiA1MyA1NCA1NSA1NiA1NyA1OCA1OSA2MSA2MiA2MyA2NCA2NSA2NiA3MCA3MiA3MyA3NCA3OCA4MCA4MSIsIi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4sIHRoYXQsIGxlbmd0aCl7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmKHRoYXQgPT09IHVuZGVmaW5lZClyZXR1cm4gZm47XG4gIHN3aXRjaChsZW5ndGgpe1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uKGEpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbihhLCBiKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbigvKiAuLi5hcmdzICovKXtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanNcbi8vIG1vZHVsZSBpZCA9IDQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMiA0IDggMTAgMTQgMTcgMTggMjIgMjQgMjUgMjYgMjcgMjggMjkgMzEgMzIgMzYgMzcgNDMgNDggNDkgNTEgNTIgNTMgNTQgNTUgNTYgNTcgNTggNTkgNjEgNjIgNjMgNjQgNjUgNjYgNzAgNzIgNzMgNzQgNzggODAgODEiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2EtZnVuY3Rpb24uanNcbi8vIG1vZHVsZSBpZCA9IDQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMiA0IDggMTAgMTQgMTcgMTggMjIgMjQgMjUgMjYgMjcgMjggMjkgMzEgMzIgMzYgMzcgNDMgNDggNDkgNTEgNTIgNTMgNTQgNTUgNTYgNTcgNTggNTkgNjEgNjIgNjMgNjQgNjUgNjYgNzAgNzIgNzMgNzQgNzggODAgODEiLCJ2YXIgZFAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIHJldHVybiBkUC5mKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oaWRlLmpzXG4vLyBtb2R1bGUgaWQgPSA0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDIgNCA4IDEwIDE0IDE3IDE4IDIyIDI0IDI1IDI2IDI3IDI4IDI5IDMxIDMyIDM2IDM3IDQzIDQ4IDQ5IDUxIDUyIDUzIDU0IDU1IDU2IDU3IDU4IDU5IDYxIDYyIDYzIDY0IDY1IDY2IDcwIDcyIDczIDc0IDc4IDgwIDgxIiwidmFyIGFuT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJylcbiAgLCB0b1ByaW1pdGl2ZSAgICA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpXG4gICwgZFAgICAgICAgICAgICAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKXtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmKElFOF9ET01fREVGSU5FKXRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gIGlmKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcyl0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xuICBpZigndmFsdWUnIGluIEF0dHJpYnV0ZXMpT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qc1xuLy8gbW9kdWxlIGlkID0gNDhcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDQgOCAxMCAxNCAxNyAxOCAyMiAyNCAyNSAyNiAyNyAyOCAyOSAzMSAzMiAzNiAzNyA0MyA0OCA0OSA1MSA1MiA1MyA1NCA1NSA1NiA1NyA1OCA1OSA2MSA2MiA2MyA2NCA2NSA2NiA3MCA3MiA3MyA3NCA3OCA4MCA4MSIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKCFpc09iamVjdChpdCkpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDIgNCA4IDEwIDE0IDE3IDE4IDIyIDI0IDI1IDI2IDI3IDI4IDI5IDMxIDMyIDM2IDM3IDQzIDQ4IDQ5IDUxIDUyIDUzIDU0IDU1IDU2IDU3IDU4IDU5IDYxIDYyIDYzIDY0IDY1IDY2IDcwIDcyIDczIDc0IDc4IDgwIDgxIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDIgNCA4IDEwIDE0IDE3IDE4IDIyIDI0IDI1IDI2IDI3IDI4IDI5IDMxIDMyIDM2IDM3IDQzIDQ4IDQ5IDUxIDUyIDUzIDU0IDU1IDU2IDU3IDU4IDU5IDYxIDYyIDYzIDY0IDY1IDY2IDcwIDcyIDczIDc0IDc4IDgwIDgxIiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnZGl2JyksICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSA1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDIgNCA4IDEwIDE0IDE3IDE4IDIyIDI0IDI1IDI2IDI3IDI4IDI5IDMxIDMyIDM2IDM3IDQzIDQ4IDQ5IDUxIDUyIDUzIDU0IDU1IDU2IDU3IDU4IDU5IDYxIDYyIDYzIDY0IDY1IDY2IDcwIDcyIDczIDc0IDc4IDgwIDgxIiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZXNjcmlwdG9ycy5qc1xuLy8gbW9kdWxlIGlkID0gNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDQgOCAxMCAxNCAxNyAxOCAyMiAyNCAyNSAyNiAyNyAyOCAyOSAzMSAzMiAzNiAzNyA0MyA0OCA0OSA1MSA1MiA1MyA1NCA1NSA1NiA1NyA1OCA1OSA2MSA2MiA2MyA2NCA2NSA2NiA3MCA3MiA3MyA3NCA3OCA4MCA4MSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZXhlYyl7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZmFpbHMuanNcbi8vIG1vZHVsZSBpZCA9IDUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMiA0IDggMTAgMTQgMTcgMTggMjIgMjQgMjUgMjYgMjcgMjggMjkgMzEgMzIgMzYgMzcgNDMgNDggNDkgNTEgNTIgNTMgNTQgNTUgNTYgNTcgNTggNTkgNjEgNjIgNjMgNjQgNjUgNjYgNzAgNzIgNzMgNzQgNzggODAgODEiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnRcbiAgLy8gaW4gb2xkIElFIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnXG4gICwgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDIgNCA4IDEwIDE0IDE3IDE4IDIyIDI0IDI1IDI2IDI3IDI4IDI5IDMxIDMyIDM2IDM3IDQzIDQ4IDQ5IDUxIDUyIDUzIDU0IDU1IDU2IDU3IDU4IDU5IDYxIDYyIDYzIDY0IDY1IDY2IDcwIDcyIDczIDc0IDc4IDgwIDgxIiwiLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgUyl7XG4gIGlmKCFpc09iamVjdChpdCkpcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICBpZih0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIGlmKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanNcbi8vIG1vZHVsZSBpZCA9IDU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMiA0IDggMTAgMTQgMTcgMTggMjIgMjQgMjUgMjYgMjcgMjggMjkgMzEgMzIgMzYgMzcgNDMgNDggNDkgNTEgNTIgNTMgNTQgNTUgNTYgNTcgNTggNTkgNjEgNjIgNjMgNjQgNjUgNjYgNzAgNzIgNzMgNzQgNzggODAgODEiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGJpdG1hcCwgdmFsdWUpe1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGUgIDogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGUgICAgOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlICAgICAgIDogdmFsdWVcbiAgfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzXG4vLyBtb2R1bGUgaWQgPSA1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDIgNCA4IDEwIDE0IDE3IDE4IDIyIDI0IDI1IDI2IDI3IDI4IDI5IDMxIDMyIDM2IDM3IDQzIDQ4IDQ5IDUxIDUyIDUzIDU0IDU1IDU2IDU3IDU4IDU5IDYxIDYyIDYzIDY0IDY1IDY2IDcwIDcyIDczIDc0IDc4IDgwIDgxIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMTkuMS4yLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSwgLi4uKVxudmFyIGdldEtleXMgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKVxuICAsIGdPUFMgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKVxuICAsIHBJRSAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpXG4gICwgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsIElPYmplY3QgID0gcmVxdWlyZSgnLi9faW9iamVjdCcpXG4gICwgJGFzc2lnbiAgPSBPYmplY3QuYXNzaWduO1xuXG4vLyBzaG91bGQgd29yayB3aXRoIHN5bWJvbHMgYW5kIHNob3VsZCBoYXZlIGRldGVybWluaXN0aWMgcHJvcGVydHkgb3JkZXIgKFY4IGJ1Zylcbm1vZHVsZS5leHBvcnRzID0gISRhc3NpZ24gfHwgcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICB2YXIgQSA9IHt9XG4gICAgLCBCID0ge31cbiAgICAsIFMgPSBTeW1ib2woKVxuICAgICwgSyA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdCc7XG4gIEFbU10gPSA3O1xuICBLLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uKGspeyBCW2tdID0gazsgfSk7XG4gIHJldHVybiAkYXNzaWduKHt9LCBBKVtTXSAhPSA3IHx8IE9iamVjdC5rZXlzKCRhc3NpZ24oe30sIEIpKS5qb2luKCcnKSAhPSBLO1xufSkgPyBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBzb3VyY2UpeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIHZhciBUICAgICA9IHRvT2JqZWN0KHRhcmdldClcbiAgICAsIGFMZW4gID0gYXJndW1lbnRzLmxlbmd0aFxuICAgICwgaW5kZXggPSAxXG4gICAgLCBnZXRTeW1ib2xzID0gZ09QUy5mXG4gICAgLCBpc0VudW0gICAgID0gcElFLmY7XG4gIHdoaWxlKGFMZW4gPiBpbmRleCl7XG4gICAgdmFyIFMgICAgICA9IElPYmplY3QoYXJndW1lbnRzW2luZGV4KytdKVxuICAgICAgLCBrZXlzICAgPSBnZXRTeW1ib2xzID8gZ2V0S2V5cyhTKS5jb25jYXQoZ2V0U3ltYm9scyhTKSkgOiBnZXRLZXlzKFMpXG4gICAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgICAsIGogICAgICA9IDBcbiAgICAgICwga2V5O1xuICAgIHdoaWxlKGxlbmd0aCA+IGopaWYoaXNFbnVtLmNhbGwoUywga2V5ID0ga2V5c1tqKytdKSlUW2tleV0gPSBTW2tleV07XG4gIH0gcmV0dXJuIFQ7XG59IDogJGFzc2lnbjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMiA0IDggMTcgMTggMjIgMjQgMjYgMjcgMjggMjkgMzEgMzIgMzYgMzcgNDMgNDggNDkgNTEgNTIgNTMgNTQgNTUgNTYgNTkgNjEgNjIgNjMgNjQgNjUgNjYgNzAgNzIgNzMgNzQgNzggODAgODEiLCIvLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcbnZhciAka2V5cyAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJylcbiAgLCBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pe1xuICByZXR1cm4gJGtleXMoTywgZW51bUJ1Z0tleXMpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA1OFxuLy8gbW9kdWxlIGNodW5rcyA9IDIgNCA4IDEwIDE0IDE3IDE4IDIyIDI0IDI1IDI2IDI3IDI4IDI5IDMxIDMyIDM2IDM3IDQzIDQ4IDQ5IDUxIDUyIDUzIDU0IDU1IDU2IDU3IDU4IDU5IDYxIDYyIDYzIDY0IDY1IDY2IDcwIDcyIDczIDc0IDc4IDgwIDgxIiwidmFyIGhhcyAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgdG9JT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgYXJyYXlJbmRleE9mID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKShmYWxzZSlcbiAgLCBJRV9QUk9UTyAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0LCBuYW1lcyl7XG4gIHZhciBPICAgICAgPSB0b0lPYmplY3Qob2JqZWN0KVxuICAgICwgaSAgICAgID0gMFxuICAgICwgcmVzdWx0ID0gW11cbiAgICAsIGtleTtcbiAgZm9yKGtleSBpbiBPKWlmKGtleSAhPSBJRV9QUk9UTyloYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpaWYoaGFzKE8sIGtleSA9IG5hbWVzW2krK10pKXtcbiAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanNcbi8vIG1vZHVsZSBpZCA9IDU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMiA0IDggMTAgMTQgMTcgMTggMjIgMjQgMjUgMjYgMjcgMjggMjkgMzEgMzIgMzYgMzcgNDMgNDggNDkgNTEgNTIgNTMgNTQgNTUgNTYgNTcgNTggNTkgNjEgNjIgNjMgNjQgNjUgNjYgNzAgNzIgNzMgNzQgNzggODAgODEiLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIGtleSl7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hhcy5qc1xuLy8gbW9kdWxlIGlkID0gNjBcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDQgOCAxMCAxNCAxNyAxOCAyMiAyNCAyNSAyNiAyNyAyOCAyOSAzMSAzMiAzNiAzNyA0MyA0OCA0OSA1MSA1MiA1MyA1NCA1NSA1NiA1NyA1OCA1OSA2MSA2MiA2MyA2NCA2NSA2NiA3MCA3MiA3MyA3NCA3OCA4MCA4MSIsIi8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0JylcbiAgLCBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDIgNCA4IDEwIDE0IDE3IDE4IDIyIDI0IDI1IDI2IDI3IDI4IDI5IDMxIDMyIDM2IDM3IDQzIDQ4IDQ5IDUxIDUyIDUzIDU0IDU1IDU2IDU3IDU4IDU5IDYxIDYyIDYzIDY0IDY1IDY2IDcwIDcyIDczIDc0IDc4IDgwIDgxIiwiLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDIgNCA4IDEwIDE0IDE3IDE4IDIyIDI0IDI1IDI2IDI3IDI4IDI5IDMxIDMyIDM2IDM3IDQzIDQ4IDQ5IDUxIDUyIDUzIDU0IDU1IDU2IDU3IDU4IDU5IDYxIDYyIDYzIDY0IDY1IDY2IDcwIDcyIDczIDc0IDc4IDgwIDgxIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvZi5qc1xuLy8gbW9kdWxlIGlkID0gNjNcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDQgOCAxMCAxNCAxNyAxOCAyMiAyNCAyNSAyNiAyNyAyOCAyOSAzMSAzMiAzNiAzNyA0MyA0OCA0OSA1MSA1MiA1MyA1NCA1NSA1NiA1NyA1OCA1OSA2MSA2MiA2MyA2NCA2NSA2NiA3MCA3MiA3MyA3NCA3OCA4MCA4MSIsIi8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoaXQgPT0gdW5kZWZpbmVkKXRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanNcbi8vIG1vZHVsZSBpZCA9IDY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMiA0IDggMTAgMTQgMTcgMTggMjIgMjQgMjUgMjYgMjcgMjggMjkgMzEgMzIgMzYgMzcgNDMgNDggNDkgNTEgNTIgNTMgNTQgNTUgNTYgNTcgNTggNTkgNjEgNjIgNjMgNjQgNjUgNjYgNzAgNzIgNzMgNzQgNzggODAgODEiLCIvLyBmYWxzZSAtPiBBcnJheSNpbmRleE9mXG4vLyB0cnVlICAtPiBBcnJheSNpbmNsdWRlc1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIHRvTGVuZ3RoICA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICwgdG9JbmRleCAgID0gcmVxdWlyZSgnLi9fdG8taW5kZXgnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oSVNfSU5DTFVERVMpe1xuICByZXR1cm4gZnVuY3Rpb24oJHRoaXMsIGVsLCBmcm9tSW5kZXgpe1xuICAgIHZhciBPICAgICAgPSB0b0lPYmplY3QoJHRoaXMpXG4gICAgICAsIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKVxuICAgICAgLCBpbmRleCAgPSB0b0luZGV4KGZyb21JbmRleCwgbGVuZ3RoKVxuICAgICAgLCB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgaWYoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpd2hpbGUobGVuZ3RoID4gaW5kZXgpe1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgaWYodmFsdWUgIT0gdmFsdWUpcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjdG9JbmRleCBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKWlmKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pe1xuICAgICAgaWYoT1tpbmRleF0gPT09IGVsKXJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qc1xuLy8gbW9kdWxlIGlkID0gNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDQgOCAxMCAxNCAxNyAxOCAyMiAyNCAyNSAyNiAyNyAyOCAyOSAzMSAzMiAzNiAzNyA0MyA0OCA0OSA1MSA1MiA1MyA1NCA1NSA1NiA1NyA1OCA1OSA2MSA2MiA2MyA2NCA2NSA2NiA3MCA3MiA3MyA3NCA3OCA4MCA4MSIsIi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIG1pbiAgICAgICA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzXG4vLyBtb2R1bGUgaWQgPSA2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDIgNCA4IDEwIDE0IDE3IDE4IDIyIDI0IDI1IDI2IDI3IDI4IDI5IDMxIDMyIDM2IDM3IDQzIDQ4IDQ5IDUxIDUyIDUzIDU0IDU1IDU2IDU3IDU4IDU5IDYxIDYyIDYzIDY0IDY1IDY2IDcwIDcyIDczIDc0IDc4IDgwIDgxIiwiLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCAgPSBNYXRoLmNlaWxcbiAgLCBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW50ZWdlci5qc1xuLy8gbW9kdWxlIGlkID0gNjdcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDQgOCAxMCAxNCAxNyAxOCAyMiAyNCAyNSAyNiAyNyAyOCAyOSAzMSAzMiAzNiAzNyA0MyA0OCA0OSA1MSA1MiA1MyA1NCA1NSA1NiA1NyA1OCA1OSA2MSA2MiA2MyA2NCA2NSA2NiA3MCA3MiA3MyA3NCA3OCA4MCA4MSIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBtYXggICAgICAgPSBNYXRoLm1heFxuICAsIG1pbiAgICAgICA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpbmRleCwgbGVuZ3RoKXtcbiAgaW5kZXggPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNjhcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDQgOCAxMCAxNCAxNyAxOCAyMiAyNCAyNSAyNiAyNyAyOCAyOSAzMSAzMiAzNiAzNyA0MyA0OCA0OSA1MSA1MiA1MyA1NCA1NSA1NiA1NyA1OCA1OSA2MSA2MiA2MyA2NCA2NSA2NiA3MCA3MiA3MyA3NCA3OCA4MCA4MSIsInZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgna2V5cycpXG4gICwgdWlkICAgID0gcmVxdWlyZSgnLi9fdWlkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiBzaGFyZWRba2V5XSB8fCAoc2hhcmVkW2tleV0gPSB1aWQoa2V5KSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLWtleS5qc1xuLy8gbW9kdWxlIGlkID0gNjlcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDQgOCAxMCAxNCAxNyAxOCAyMiAyNCAyNSAyNiAyNyAyOCAyOSAzMSAzMiAzNiAzNyA0MyA0OCA0OSA1MSA1MiA1MyA1NCA1NSA1NiA1NyA1OCA1OSA2MSA2MiA2MyA2NCA2NSA2NiA3MCA3MiA3MyA3NCA3OCA4MCA4MSIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nXG4gICwgc3RvcmUgID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHt9KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQuanNcbi8vIG1vZHVsZSBpZCA9IDcwXG4vLyBtb2R1bGUgY2h1bmtzID0gMiA0IDggMTAgMTQgMTcgMTggMjIgMjQgMjUgMjYgMjcgMjggMjkgMzEgMzIgMzYgMzcgNDMgNDggNDkgNTEgNTIgNTMgNTQgNTUgNTYgNTcgNTggNTkgNjEgNjIgNjMgNjQgNjUgNjYgNzAgNzIgNzMgNzQgNzggODAgODEiLCJ2YXIgaWQgPSAwXG4gICwgcHggPSBNYXRoLnJhbmRvbSgpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VpZC5qc1xuLy8gbW9kdWxlIGlkID0gNzFcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDQgOCAxMCAxNCAxNyAxOCAyMiAyNCAyNSAyNiAyNyAyOCAyOSAzMSAzMiAzNiAzNyA0MyA0OCA0OSA1MSA1MiA1MyA1NCA1NSA1NiA1NyA1OCA1OSA2MSA2MiA2MyA2NCA2NSA2NiA3MCA3MiA3MyA3NCA3OCA4MCA4MSIsIi8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gKFxuICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xuKS5zcGxpdCgnLCcpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gNzJcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDQgOCAxMCAxNCAxNyAxOCAyMiAyNCAyNSAyNiAyNyAyOCAyOSAzMSAzMiAzNiAzNyA0MyA0OCA0OSA1MSA1MiA1MyA1NCA1NSA1NiA1NyA1OCA1OSA2MSA2MiA2MyA2NCA2NSA2NiA3MCA3MiA3MyA3NCA3OCA4MCA4MSIsImV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wcy5qc1xuLy8gbW9kdWxlIGlkID0gNzNcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDQgOCAxMCAxNCAxNyAxOCAyMiAyNCAyNSAyNiAyNyAyOCAyOSAzMSAzMiAzNiAzNyA0MyA0OCA0OSA1MSA1MiA1MyA1NCA1NSA1NiA1NyA1OCA1OSA2MSA2MiA2MyA2NCA2NSA2NiA3MCA3MiA3MyA3NCA3OCA4MCA4MSIsImV4cG9ydHMuZiA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXBpZS5qc1xuLy8gbW9kdWxlIGlkID0gNzRcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDQgOCAxMCAxNCAxNyAxOCAyMiAyNCAyNSAyNiAyNyAyOCAyOSAzMSAzMiAzNiAzNyA0MyA0OCA0OSA1MSA1MiA1MyA1NCA1NSA1NiA1NyA1OCA1OSA2MSA2MiA2MyA2NCA2NSA2NiA3MCA3MiA3MyA3NCA3OCA4MCA4MSIsIi8vIDcuMS4xMyBUb09iamVjdChhcmd1bWVudClcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gNzVcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDQgOCAxMCAxNCAxNyAxOCAyMiAyNCAyNSAyNiAyNyAyOCAyOSAzMSAzMiAzNiAzNyA0MyA0OCA0OSA1MSA1MiA1MyA1NCA1NSA1NiA1NyA1OCA1OSA2MSA2MiA2MyA2NCA2NSA2NiA3MCA3MiA3MyA3NCA3OCA4MCA4MSIsInZhciBfX3dlZXhfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vd3hjLW1hcnF1ZWUud2VcIilcbnZhciBfX3dlZXhfc3R5bGVfXyA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c3R5bGVzIS4vd3hjLW1hcnF1ZWUud2VcIilcbnZhciBfX3dlZXhfc2NyaXB0X18gPSByZXF1aXJlKFwiISEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9zY3JpcHQuanMhYmFiZWwtbG9hZGVyP3ByZXNldHNbXT1DOlxcXFx2YmFvbGktd2VleFxcXFx2YmFvbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXByZXNldC1lczIwMTUmcHJlc2V0cz1DOlxcXFx2YmFvbGktd2VleFxcXFx2YmFvbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXByZXNldC1lczIwMTUmcGx1Z2luc1tdPUM6XFxcXHZiYW9saS13ZWV4XFxcXHZiYW9saVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJnBsdWdpbnM9QzpcXFxcdmJhb2xpLXdlZXhcXFxcdmJhb2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmY29tbWVudHM9ZmFsc2UhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c2NyaXB0cyEuL3d4Yy1tYXJxdWVlLndlXCIpXG5cbl9fd2VleF9kZWZpbmVfXygnQHdlZXgtY29tcG9uZW50L3d4Yy1tYXJxdWVlJywgW10sIGZ1bmN0aW9uKF9fd2VleF9yZXF1aXJlX18sIF9fd2VleF9leHBvcnRzX18sIF9fd2VleF9tb2R1bGVfXykge1xuXG4gICAgX193ZWV4X3NjcmlwdF9fKF9fd2VleF9tb2R1bGVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X3JlcXVpcmVfXylcbiAgICBpZiAoX193ZWV4X2V4cG9ydHNfXy5fX2VzTW9kdWxlICYmIF9fd2VleF9leHBvcnRzX18uZGVmYXVsdCkge1xuICAgICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMgPSBfX3dlZXhfZXhwb3J0c19fLmRlZmF1bHRcbiAgICB9XG5cbiAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cy50ZW1wbGF0ZSA9IF9fd2VleF90ZW1wbGF0ZV9fXG5cbiAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cy5zdHlsZSA9IF9fd2VleF9zdHlsZV9fXG5cbn0pXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtbWFycXVlZS53ZVxuLy8gbW9kdWxlIGlkID0gNzZcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDQgOCAxNyAxOCAyMiAyNCAyNiAyNyAyOCAyOSAzMSAzMiAzNiAzNyA0MyA0OCA0OSA1MSA1MiA1MyA1NCA1NSA1NiA1OSA2MSA2MiA2MyA2NCA2NSA2NiA3MCA3MiA3MyA3NCA3OCA4MCA4MSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJkaXZcIixcbiAgXCJjbGFzc0xpc3RcIjogW1xuICAgIFwid3JhcFwiXG4gIF0sXG4gIFwiZXZlbnRzXCI6IHtcbiAgICBcImFwcGVhclwiOiBcImFwcGVhcmVkXCIsXG4gICAgXCJkaXNhcHBlYXJcIjogXCJkaXNhcHBlYXJlZFwiXG4gIH0sXG4gIFwiY2hpbGRyZW5cIjogW1xuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJpZFwiOiBcImFuaW1cIixcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJhbmltXCJcbiAgICAgIF0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImNvbnRlbnRcIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICBdXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi9+L3dlZXgtY29tcG9uZW50cy9zcmMvd3hjLW1hcnF1ZWUud2Vcbi8vIG1vZHVsZSBpZCA9IDc3XG4vLyBtb2R1bGUgY2h1bmtzID0gMiA0IDggMTcgMTggMjIgMjQgMjYgMjcgMjggMjkgMzEgMzIgMzYgMzcgNDMgNDggNDkgNTEgNTIgNTMgNTQgNTUgNTYgNTkgNjEgNjIgNjMgNjQgNjUgNjYgNzAgNzIgNzMgNzQgNzggODAgODEiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ3cmFwXCI6IHtcbiAgICBcIm92ZXJmbG93XCI6IFwiaGlkZGVuXCIsXG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCJcbiAgfSxcbiAgXCJhbmltXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcInRyYW5zZm9ybVwiOiBcInRyYW5zbGF0ZVkoMCkgdHJhbnNsYXRlWigwKVwiXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL34vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtbWFycXVlZS53ZVxuLy8gbW9kdWxlIGlkID0gNzhcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDQgOCAxNyAxOCAyMiAyNCAyNiAyNyAyOCAyOSAzMSAzMiAzNiAzNyA0MyA0OCA0OSA1MSA1MiA1MyA1NCA1NSA1NiA1OSA2MSA2MiA2MyA2NCA2NSA2NiA3MCA3MiA3MyA3NCA3OCA4MCA4MSIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwid3JhcFwiIG9uYXBwZWFyPVwiYXBwZWFyZWRcIiBvbmRpc2FwcGVhcj1cImRpc2FwcGVhcmVkXCI+XG4gICAgICAgIDxkaXYgaWQ9XCJhbmltXCIgY2xhc3M9XCJhbmltXCI+XG4gICAgICAgICAgICA8Y29udGVudD48L2NvbnRlbnQ+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHN0eWxlPlxuLndyYXAge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYW5pbSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHRyYW5zbGF0ZVooMCk7XG59XG48L3N0eWxlPlxuXG48c2NyaXB0PlxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgZGF0YToge1xuICAgICAgICBzdGVwOiAwLFxuICAgICAgICBjb3VudDogMCxcbiAgICAgICAgaW5kZXg6IDEsXG4gICAgICAgIGR1cmF0aW9uOiAwLFxuICAgICAgICBpbnRlcnZhbDogMCxcbiAgICAgICAgb3V0b2Z2aWV3OiBmYWxzZVxuICAgIH0sXG4gICAgcmVhZHk6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuaW50ZXJ2YWwgPiAwXG4gICAgICAgICAgICAgICAgJiYgdGhpcy5zdGVwID4gMFxuICAgICAgICAgICAgICAgICYmIHRoaXMuZHVyYXRpb24gPiAwKSB7XG4gICAgICAgICAgICB0aGlzLm5leHRUaWNrKCk7ICAgIFxuICAgICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIG5leHRUaWNrOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgICAgIGlmICh0aGlzLm91dG9mdmlldykge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoc2VsZi5uZXh0VGljay5iaW5kKHNlbGYpLCBzZWxmLmludGVydmFsKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5hbmltYXRpb24oc2VsZi5uZXh0VGljay5iaW5kKHNlbGYpKTtcbiAgICAgICAgICAgICAgICB9LCBzZWxmLmludGVydmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgYW5pbWF0aW9uOiBmdW5jdGlvbihjYikge1xuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgdmFyIG9mZnNldCA9IC1zZWxmLnN0ZXAgKiBzZWxmLmluZGV4O1xuICAgICAgICAgICAgdmFyICRhbmltYXRpb24gPSByZXF1aXJlKCdAd2VleC1tb2R1bGUvYW5pbWF0aW9uJyk7XG4gICAgICAgICAgICAkYW5pbWF0aW9uLnRyYW5zaXRpb24odGhpcy4kZWwoJ2FuaW0nKSwge1xuICAgICAgICAgICAgICBzdHlsZXM6IHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKCcgKyBTdHJpbmcob2Zmc2V0KSArICdweCkgdHJhbnNsYXRlWigwKSdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgdGltaW5nRnVuY3Rpb246ICdlYXNlJyxcbiAgICAgICAgICAgICAgZHVyYXRpb246IHNlbGYuZHVyYXRpb25cbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHNlbGYuaW5kZXggPSAoc2VsZi5pbmRleCArIDEpICUgKHNlbGYuY291bnQpO1xuICAgICAgICAgICAgICAgIHNlbGYuJGVtaXQoJ2NoYW5nZScsIHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IHNlbGYuaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgIGNvdW50OiBzZWxmLmNvdW50XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgY2IgJiYgY2IoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBhcHBlYXJlZDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aGlzLm91dG9mdmlldyA9IGZhbHNlO1xuICAgICAgICB9LFxuICAgICAgICBkaXNhcHBlYXJlZDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aGlzLm91dG9mdmlldyA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG59XG48L3NjcmlwdD5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1tYXJxdWVlLndlPzQxMmI2Mjg2IiwidmFyIF9fd2VleF90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi93eGMtbmF2YmFyLndlXCIpXG52YXIgX193ZWV4X3N0eWxlX18gPSByZXF1aXJlKFwiISEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL3d4Yy1uYXZiYXIud2VcIilcbnZhciBfX3dlZXhfc2NyaXB0X18gPSByZXF1aXJlKFwiISEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9zY3JpcHQuanMhYmFiZWwtbG9hZGVyP3ByZXNldHNbXT1DOlxcXFx2YmFvbGktd2VleFxcXFx2YmFvbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXByZXNldC1lczIwMTUmcHJlc2V0cz1DOlxcXFx2YmFvbGktd2VleFxcXFx2YmFvbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXByZXNldC1lczIwMTUmcGx1Z2luc1tdPUM6XFxcXHZiYW9saS13ZWV4XFxcXHZiYW9saVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJnBsdWdpbnM9QzpcXFxcdmJhb2xpLXdlZXhcXFxcdmJhb2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmY29tbWVudHM9ZmFsc2UhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c2NyaXB0cyEuL3d4Yy1uYXZiYXIud2VcIilcblxuX193ZWV4X2RlZmluZV9fKCdAd2VleC1jb21wb25lbnQvd3hjLW5hdmJhcicsIFtdLCBmdW5jdGlvbihfX3dlZXhfcmVxdWlyZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfbW9kdWxlX18pIHtcblxuICAgIF9fd2VleF9zY3JpcHRfXyhfX3dlZXhfbW9kdWxlX18sIF9fd2VleF9leHBvcnRzX18sIF9fd2VleF9yZXF1aXJlX18pXG4gICAgaWYgKF9fd2VleF9leHBvcnRzX18uX19lc01vZHVsZSAmJiBfX3dlZXhfZXhwb3J0c19fLmRlZmF1bHQpIHtcbiAgICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzID0gX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0XG4gICAgfVxuXG4gICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMudGVtcGxhdGUgPSBfX3dlZXhfdGVtcGxhdGVfX1xuXG4gICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMuc3R5bGUgPSBfX3dlZXhfc3R5bGVfX1xuXG59KVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtY29tcG9uZW50cy9zcmMvd3hjLW5hdmJhci53ZVxuLy8gbW9kdWxlIGlkID0gODBcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDQgOCAxNyAxOCAyMiAyNCAyNiAyNyAyOCAyOSAzMSAzMiAzNiAzNyA0MyA0OCA0OSA1MSA1MiA1MyA1NCA1NSA1NiA1OSA2MSA2MiA2MyA2NCA2NSA2NiA3MCA3MiA3MyA3NCA3OCA4MCA4MSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJkaXZcIixcbiAgXCJjbGFzc0xpc3RcIjogW1xuICAgIFwiY29udGFpbmVyXCJcbiAgXSxcbiAgXCJzdHlsZVwiOiB7XG4gICAgXCJoZWlnaHRcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmhlaWdodH0sXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmJhY2tncm91bmRDb2xvcn1cbiAgfSxcbiAgXCJhdHRyXCI6IHtcbiAgICBcImRhdGFSb2xlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5kYXRhUm9sZX1cbiAgfSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcInJpZ2h0LXRleHRcIlxuICAgICAgXSxcbiAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICBcImNvbG9yXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5yaWdodEl0ZW1Db2xvcn1cbiAgICAgIH0sXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcIm5hdmlJdGVtUG9zaXRpb25cIjogXCJyaWdodFwiLFxuICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5yaWdodEl0ZW1UaXRsZX1cbiAgICAgIH0sXG4gICAgICBcInNob3duXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gIXRoaXMucmlnaHRJdGVtU3JjfSxcbiAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgXCJjbGlja1wiOiBcIm9uY2xpY2tyaWdodGl0ZW1cIlxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJyaWdodC1pbWFnZVwiXG4gICAgICBdLFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJuYXZpSXRlbVBvc2l0aW9uXCI6IFwicmlnaHRcIixcbiAgICAgICAgXCJzcmNcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnJpZ2h0SXRlbVNyY31cbiAgICAgIH0sXG4gICAgICBcInNob3duXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5yaWdodEl0ZW1TcmN9LFxuICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICBcImNsaWNrXCI6IFwib25jbGlja3JpZ2h0aXRlbVwiXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwibGVmdC10ZXh0XCJcbiAgICAgIF0sXG4gICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMubGVmdEl0ZW1Db2xvcn1cbiAgICAgIH0sXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcIm5hdmlJdGVtUG9zaXRpb25cIjogXCJsZWZ0XCIsXG4gICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmxlZnRJdGVtVGl0bGV9XG4gICAgICB9LFxuICAgICAgXCJzaG93blwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuICF0aGlzLmxlZnRJdGVtU3JjfSxcbiAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgXCJjbGlja1wiOiBcIm9uY2xpY2tsZWZ0aXRlbVwiXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJpbWFnZVwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcImxlZnQtaW1hZ2VcIlxuICAgICAgXSxcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwibmF2aUl0ZW1Qb3NpdGlvblwiOiBcImxlZnRcIixcbiAgICAgICAgXCJzcmNcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmxlZnRJdGVtU3JjfVxuICAgICAgfSxcbiAgICAgIFwic2hvd25cIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmxlZnRJdGVtU3JjfSxcbiAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgXCJjbGlja1wiOiBcIm9uY2xpY2tsZWZ0aXRlbVwiXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwiY2VudGVyLXRleHRcIlxuICAgICAgXSxcbiAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICBcImNvbG9yXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy50aXRsZUNvbG9yfVxuICAgICAgfSxcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwibmF2aUl0ZW1Qb3NpdGlvblwiOiBcImNlbnRlclwiLFxuICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy50aXRsZX1cbiAgICAgIH1cbiAgICB9XG4gIF1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+L3dlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuL34vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtbmF2YmFyLndlXG4vLyBtb2R1bGUgaWQgPSA4MVxuLy8gbW9kdWxlIGNodW5rcyA9IDIgNCA4IDE3IDE4IDIyIDI0IDI2IDI3IDI4IDI5IDMxIDMyIDM2IDM3IDQzIDQ4IDQ5IDUxIDUyIDUzIDU0IDU1IDU2IDU5IDYxIDYyIDYzIDY0IDY1IDY2IDcwIDcyIDczIDc0IDc4IDgwIDgxIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiY29udGFpbmVyXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcInBvc2l0aW9uXCI6IFwiZml4ZWRcIixcbiAgICBcInRvcFwiOiAwLFxuICAgIFwibGVmdFwiOiAwLFxuICAgIFwicmlnaHRcIjogMCxcbiAgICBcIndpZHRoXCI6IDc1MFxuICB9LFxuICBcInJpZ2h0LXRleHRcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwiYm90dG9tXCI6IDI4LFxuICAgIFwicmlnaHRcIjogMzIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJyaWdodFwiLFxuICAgIFwiZm9udFNpemVcIjogMzIsXG4gICAgXCJmb250RmFtaWx5XCI6IFwiJ09wZW4gU2FucycsIHNhbnMtc2VyaWZcIlxuICB9LFxuICBcImxlZnQtdGV4dFwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgXCJib3R0b21cIjogMjgsXG4gICAgXCJsZWZ0XCI6IDMyLFxuICAgIFwidGV4dEFsaWduXCI6IFwibGVmdFwiLFxuICAgIFwiZm9udFNpemVcIjogMzIsXG4gICAgXCJmb250RmFtaWx5XCI6IFwiJ09wZW4gU2FucycsIHNhbnMtc2VyaWZcIlxuICB9LFxuICBcImNlbnRlci10ZXh0XCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcImJvdHRvbVwiOiAyNSxcbiAgICBcImxlZnRcIjogMTcyLFxuICAgIFwicmlnaHRcIjogMTcyLFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCIsXG4gICAgXCJmb250U2l6ZVwiOiAzNixcbiAgICBcImZvbnRXZWlnaHRcIjogXCJib2xkXCJcbiAgfSxcbiAgXCJsZWZ0LWltYWdlXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcImJvdHRvbVwiOiAyMCxcbiAgICBcImxlZnRcIjogMjgsXG4gICAgXCJ3aWR0aFwiOiA1MCxcbiAgICBcImhlaWdodFwiOiA1MFxuICB9LFxuICBcInJpZ2h0LWltYWdlXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcImJvdHRvbVwiOiAyMCxcbiAgICBcInJpZ2h0XCI6IDI4LFxuICAgIFwid2lkdGhcIjogNTAsXG4gICAgXCJoZWlnaHRcIjogNTBcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vd2VleC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c3R5bGVzIS4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1uYXZiYXIud2Vcbi8vIG1vZHVsZSBpZCA9IDgyXG4vLyBtb2R1bGUgY2h1bmtzID0gMiA0IDggMTcgMTggMjIgMjQgMjYgMjcgMjggMjkgMzEgMzIgMzYgMzcgNDMgNDggNDkgNTEgNTIgNTMgNTQgNTUgNTYgNTkgNjEgNjIgNjMgNjQgNjUgNjYgNzAgNzIgNzMgNzQgNzggODAgODEiLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiIHN0eWxlPVwiaGVpZ2h0Ont7aGVpZ2h0fX07IGJhY2tncm91bmQtY29sb3I6e3tiYWNrZ3JvdW5kQ29sb3J9fTtcIiBkYXRhLXJvbGU9e3tkYXRhUm9sZX19PlxuICAgICAgICA8dGV4dCBjbGFzcz1cInJpZ2h0LXRleHRcIiBzdHlsZT1cImNvbG9yOnt7cmlnaHRJdGVtQ29sb3J9fTtcIiBuYXZpLWl0ZW0tcG9zaXRpb249XCJyaWdodFwiIGlmPXt7IXJpZ2h0SXRlbVNyY319IG9uY2xpY2sgPSBcIm9uY2xpY2tyaWdodGl0ZW1cIj57e3JpZ2h0SXRlbVRpdGxlfX08L3RleHQ+XG4gICAgICAgIDxpbWFnZSBjbGFzcz1cInJpZ2h0LWltYWdlXCIgbmF2aS1pdGVtLXBvc2l0aW9uPVwicmlnaHRcIiBzcmM9e3tyaWdodEl0ZW1TcmN9fSBpZj17e3JpZ2h0SXRlbVNyY319IG9uY2xpY2s9XCJvbmNsaWNrcmlnaHRpdGVtXCI+PC9pbWFnZT5cbiAgICAgICAgPHRleHQgY2xhc3M9XCJsZWZ0LXRleHRcIiBzdHlsZT1cImNvbG9yOnt7bGVmdEl0ZW1Db2xvcn19O1wiIG5hdmktaXRlbS1wb3NpdGlvbj1cImxlZnRcIiBpZj17eyFsZWZ0SXRlbVNyY319IG9uY2xpY2s9IFwib25jbGlja2xlZnRpdGVtXCI+e3tsZWZ0SXRlbVRpdGxlfX08L3RleHQ+XG4gICAgICAgIDxpbWFnZSBjbGFzcz1cImxlZnQtaW1hZ2VcIiBuYXZpLWl0ZW0tcG9zaXRpb249XCJsZWZ0XCIgc3JjPXt7bGVmdEl0ZW1TcmN9fSBpZj17e2xlZnRJdGVtU3JjfX0gb25jbGljaz1cIm9uY2xpY2tsZWZ0aXRlbVwiPjwvaW1hZ2U+XG4gICAgICAgIDx0ZXh0IGNsYXNzPVwiY2VudGVyLXRleHRcIiBzdHlsZT1cImNvbG9yOnt7dGl0bGVDb2xvcn19O1wiIG5hdmktaXRlbS1wb3NpdGlvbj1cImNlbnRlclwiPnt7dGl0bGV9fTwvdGV4dD5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZT5cbiAgICAuY29udGFpbmVyIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdzsgXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDsgXG4gICAgICAgIHRvcDogMDsgXG4gICAgICAgIGxlZnQ6IDA7IFxuICAgICAgICByaWdodDogMDsgXG4gICAgICAgIHdpZHRoOiA3NTA7XG4gICAgfVxuICAgIC5yaWdodC10ZXh0IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyBcbiAgICAgICAgYm90dG9tOiAyODsgXG4gICAgICAgIHJpZ2h0OiAzMjsgXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICBmb250LXNpemU6IDMyOyBcbiAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICAgIH1cbiAgICAubGVmdC10ZXh0IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyBcbiAgICAgICAgYm90dG9tOiAyODsgXG4gICAgICAgIGxlZnQgOjMyOyBcbiAgICAgICAgdGV4dC1hbGlnbiA6bGVmdDsgIFxuICAgICAgICBmb250LXNpemU6IDMyOyBcbiAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICAgIH1cbiAgICAuY2VudGVyLXRleHQge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxuICAgICAgICBib3R0b206IDI1OyBcbiAgICAgICAgbGVmdDogMTcyOyBcbiAgICAgICAgcmlnaHQ6IDE3MjtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyBcbiAgICAgICAgZm9udC1zaXplOiAzNjsgXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbiAgICAubGVmdC1pbWFnZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXG4gICAgICAgIGJvdHRvbTogMjA7IFxuICAgICAgICBsZWZ0OiAyODsgXG4gICAgICAgIHdpZHRoOiA1MDsgXG4gICAgICAgIGhlaWdodDogNTA7XG4gICAgfVxuICAgIC5yaWdodC1pbWFnZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXG4gICAgICAgIGJvdHRvbTogMjA7IFxuICAgICAgICByaWdodDogMjg7IFxuICAgICAgICB3aWR0aDogNTA7IFxuICAgICAgICBoZWlnaHQ6IDUwO1xuICAgIH1cbjwvc3R5bGU+XG5cbjxzY3JpcHQ+XG4gICAgbW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBkYXRhUm9sZTogJ25hdmJhcicsXG5cbiAgICAgICAgICAvL+WvvOiIquadoeiDjOaZr+iJslxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ2JsYWNrJyxcblxuICAgICAgICAgIC8v5a+86Iiq5p2h6auY5bqmXG4gICAgICAgICAgaGVpZ2h0OiA4OCxcblxuICAgICAgICAgIC8v5a+86Iiq5p2h5qCH6aKYIFxuICAgICAgICAgIHRpdGxlOiBcIlwiLFxuXG4gICAgICAgICAgLy/lr7zoiKrmnaHmoIfpopjpopzoibJcbiAgICAgICAgICB0aXRsZUNvbG9yOiAnYmxhY2snLFxuXG4gICAgICAgICAgLy/lj7PkvqfmjInpkq7lm77niYdcbiAgICAgICAgICByaWdodEl0ZW1TcmM6ICcnLFxuXG4gICAgICAgICAgLy/lj7PkvqfmjInpkq7moIfpophcbiAgICAgICAgICByaWdodEl0ZW1UaXRsZTogJycsXG5cbiAgICAgICAgICAvL+WPs+S+p+aMiemSruagh+mimOminOiJslxuICAgICAgICAgIHJpZ2h0SXRlbUNvbG9yOiAnYmxhY2snLFxuXG4gICAgICAgICAgLy/lt6bkvqfmjInpkq7lm77niYdcbiAgICAgICAgICBsZWZ0SXRlbVNyYzogJycsXG5cbiAgICAgICAgICAvL+W3puS+p+aMiemSruagh+mimFxuICAgICAgICAgIGxlZnRJdGVtVGl0bGU6ICcnLFxuXG4gICAgICAgICAgLy/lt6bkvqfmjInpkq7popzoibJcbiAgICAgICAgICBsZWZ0SXRlbUNvbG9yOiAnYmxhY2snLFxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgb25jbGlja3JpZ2h0aXRlbTogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHRoaXMuJGRpc3BhdGNoKCduYXZpQmFyLnJpZ2h0SXRlbS5jbGljaycsIHt9KTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIG9uY2xpY2tsZWZ0aXRlbTogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHRoaXMuJGRpc3BhdGNoKCduYXZpQmFyLmxlZnRJdGVtLmNsaWNrJywge30pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1uYXZiYXIud2U/MDg2ZWY4M2QiLCJyZXF1aXJlKFwiLi93eGMtbmF2YmFyLndlXCIpXG52YXIgX193ZWV4X3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL3d4Yy1uYXZwYWdlLndlXCIpXG52YXIgX193ZWV4X3N0eWxlX18gPSByZXF1aXJlKFwiISEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL3d4Yy1uYXZwYWdlLndlXCIpXG52YXIgX193ZWV4X3NjcmlwdF9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvc2NyaXB0LmpzIWJhYmVsLWxvYWRlcj9wcmVzZXRzW109QzpcXFxcdmJhb2xpLXdlZXhcXFxcdmJhb2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnByZXNldHM9QzpcXFxcdmJhb2xpLXdlZXhcXFxcdmJhb2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wcmVzZXQtZXMyMDE1JnBsdWdpbnNbXT1DOlxcXFx2YmFvbGktd2VleFxcXFx2YmFvbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZwbHVnaW5zPUM6XFxcXHZiYW9saS13ZWV4XFxcXHZiYW9saVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJmNvbW1lbnRzPWZhbHNlIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdHMhLi93eGMtbmF2cGFnZS53ZVwiKVxuXG5fX3dlZXhfZGVmaW5lX18oJ0B3ZWV4LWNvbXBvbmVudC93eGMtbmF2cGFnZScsIFtdLCBmdW5jdGlvbihfX3dlZXhfcmVxdWlyZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfbW9kdWxlX18pIHtcblxuICAgIF9fd2VleF9zY3JpcHRfXyhfX3dlZXhfbW9kdWxlX18sIF9fd2VleF9leHBvcnRzX18sIF9fd2VleF9yZXF1aXJlX18pXG4gICAgaWYgKF9fd2VleF9leHBvcnRzX18uX19lc01vZHVsZSAmJiBfX3dlZXhfZXhwb3J0c19fLmRlZmF1bHQpIHtcbiAgICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzID0gX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0XG4gICAgfVxuXG4gICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMudGVtcGxhdGUgPSBfX3dlZXhfdGVtcGxhdGVfX1xuXG4gICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMuc3R5bGUgPSBfX3dlZXhfc3R5bGVfX1xuXG59KVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtY29tcG9uZW50cy9zcmMvd3hjLW5hdnBhZ2Uud2Vcbi8vIG1vZHVsZSBpZCA9IDg0XG4vLyBtb2R1bGUgY2h1bmtzID0gMiA0IDggMTcgMTggMjIgMjQgMjYgMjcgMjggMjkgMzEgMzIgMzYgMzcgNDMgNDggNDkgNTEgNTIgNTMgNTQgNTUgNTYgNTkgNjEgNjIgNjMgNjQgNjUgNjYgNzAgNzIgNzMgNzQgNzggODAgODEiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gIFwiY2xhc3NMaXN0XCI6IFtcbiAgICBcIndyYXBwZXJcIlxuICBdLFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJ3eGMtbmF2YmFyXCIsXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcImRhdGFSb2xlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5kYXRhUm9sZX0sXG4gICAgICAgIFwiaGVpZ2h0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5oZWlnaHR9LFxuICAgICAgICBcImJhY2tncm91bmRDb2xvclwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuYmFja2dyb3VuZENvbG9yfSxcbiAgICAgICAgXCJ0aXRsZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudGl0bGV9LFxuICAgICAgICBcInRpdGxlQ29sb3JcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnRpdGxlQ29sb3J9LFxuICAgICAgICBcImxlZnRJdGVtU3JjXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5sZWZ0SXRlbVNyY30sXG4gICAgICAgIFwibGVmdEl0ZW1UaXRsZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMubGVmdEl0ZW1UaXRsZX0sXG4gICAgICAgIFwibGVmdEl0ZW1Db2xvclwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMubGVmdEl0ZW1Db2xvcn0sXG4gICAgICAgIFwicmlnaHRJdGVtU3JjXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5yaWdodEl0ZW1TcmN9LFxuICAgICAgICBcInJpZ2h0SXRlbVRpdGxlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5yaWdodEl0ZW1UaXRsZX0sXG4gICAgICAgIFwicmlnaHRJdGVtQ29sb3JcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnJpZ2h0SXRlbUNvbG9yfVxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwid3JhcHBlclwiXG4gICAgICBdLFxuICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgIFwibWFyZ2luVG9wXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5oZWlnaHR9XG4gICAgICB9LFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJjb250ZW50XCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy1uYXZwYWdlLndlXG4vLyBtb2R1bGUgaWQgPSA4NVxuLy8gbW9kdWxlIGNodW5rcyA9IDIgNCA4IDE3IDE4IDIyIDI0IDI2IDI3IDI4IDI5IDMxIDMyIDM2IDM3IDQzIDQ4IDQ5IDUxIDUyIDUzIDU0IDU1IDU2IDU5IDYxIDYyIDYzIDY0IDY1IDY2IDcwIDcyIDczIDc0IDc4IDgwIDgxIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwid3JhcHBlclwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgXCJ0b3BcIjogMCxcbiAgICBcImxlZnRcIjogMCxcbiAgICBcInJpZ2h0XCI6IDAsXG4gICAgXCJib3R0b21cIjogMCxcbiAgICBcIndpZHRoXCI6IDc1MFxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi9+L3dlZXgtY29tcG9uZW50cy9zcmMvd3hjLW5hdnBhZ2Uud2Vcbi8vIG1vZHVsZSBpZCA9IDg2XG4vLyBtb2R1bGUgY2h1bmtzID0gMiA0IDggMTcgMTggMjIgMjQgMjYgMjcgMjggMjkgMzEgMzIgMzYgMzcgNDMgNDggNDkgNTEgNTIgNTMgNTQgNTUgNTYgNTkgNjEgNjIgNjMgNjQgNjUgNjYgNzAgNzIgNzMgNzQgNzggODAgODEiLCI8dGVtcGxhdGU+XG4gIFx0PGRpdiBjbGFzcz1cIndyYXBwZXJcIj5cbiAgICBcdCAgPHd4Yy1uYXZiYXIgZGF0YS1yb2xlPXt7ZGF0YVJvbGV9fSBoZWlnaHQ9e3toZWlnaHR9fSBiYWNrZ3JvdW5kLWNvbG9yPXt7YmFja2dyb3VuZENvbG9yfX0gdGl0bGU9e3t0aXRsZX19IHRpdGxlLWNvbG9yPXt7dGl0bGVDb2xvcn19IGxlZnQtaXRlbS1zcmM9e3tsZWZ0SXRlbVNyY319IGxlZnQtaXRlbS10aXRsZT17e2xlZnRJdGVtVGl0bGV9fSBsZWZ0LWl0ZW0tY29sb3I9e3tsZWZ0SXRlbUNvbG9yfX0gcmlnaHQtaXRlbS1zcmM9e3tyaWdodEl0ZW1TcmN9fSByaWdodC1pdGVtLXRpdGxlPXt7cmlnaHRJdGVtVGl0bGV9fSByaWdodC1pdGVtLWNvbG9yPXt7cmlnaHRJdGVtQ29sb3J9fT48L3d4Yy1uYXZiYXI+XG4gICAgXHQgIDxkaXYgY2xhc3M9XCJ3cmFwcGVyXCIgc3R5bGU9XCJtYXJnaW4tdG9wOnt7aGVpZ2h0fX1cIj5cbiAgICBcdFx0ICAgIDxjb250ZW50PjwvY29udGVudD5cbiAgICBcdCAgPC9kaXY+XG4gIFx0PC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c3R5bGU+XG4gIFx0LndyYXBwZXIge1xuICBcdFx0cG9zaXRpb246IGFic29sdXRlOyBcbiAgXHRcdHRvcDogMDsgXG4gIFx0XHRsZWZ0OiAwOyBcbiAgXHRcdHJpZ2h0OiAwOyBcbiAgXHRcdGJvdHRvbTogMDsgXG4gIFx0XHR3aWR0aDogNzUwO1xuICBcdH1cbjwvc3R5bGU+XG5cbjxzY3JpcHQ+XG4gICAgbW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBkYXRhUm9sZTogJ25hdmJhcicsXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnYmxhY2snLFxuICAgICAgICAgIGhlaWdodDogODgsXG4gICAgICAgICAgdGl0bGU6IFwiXCIsXG4gICAgICAgICAgdGl0bGVDb2xvcjogJ2JsYWNrJyxcbiAgICAgICAgICByaWdodEl0ZW1TcmM6ICcnLFxuICAgICAgICAgIHJpZ2h0SXRlbVRpdGxlOiAnJyxcbiAgICAgICAgICByaWdodEl0ZW1Db2xvcjogJ2JsYWNrJyxcbiAgICAgICAgICBsZWZ0SXRlbVNyYzogJycsXG4gICAgICAgICAgbGVmdEl0ZW1UaXRsZTogJycsXG4gICAgICAgICAgbGVmdEl0ZW1Db2xvcjogJ2JsYWNrJyxcbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtbmF2cGFnZS53ZT82NjdjZGU2NiIsInJlcXVpcmUoXCIuL3d4Yy10YWJpdGVtLndlXCIpXG52YXIgX193ZWV4X3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL3d4Yy10YWJiYXIud2VcIilcbnZhciBfX3dlZXhfc3R5bGVfXyA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c3R5bGVzIS4vd3hjLXRhYmJhci53ZVwiKVxudmFyIF9fd2VleF9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL3NjcmlwdC5qcyFiYWJlbC1sb2FkZXI/cHJlc2V0c1tdPUM6XFxcXHZiYW9saS13ZWV4XFxcXHZiYW9saVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcHJlc2V0LWVzMjAxNSZwcmVzZXRzPUM6XFxcXHZiYW9saS13ZWV4XFxcXHZiYW9saVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcHJlc2V0LWVzMjAxNSZwbHVnaW5zW109QzpcXFxcdmJhb2xpLXdlZXhcXFxcdmJhb2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmcGx1Z2lucz1DOlxcXFx2YmFvbGktd2VleFxcXFx2YmFvbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZjb21tZW50cz1mYWxzZSEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zY3JpcHRzIS4vd3hjLXRhYmJhci53ZVwiKVxuXG5fX3dlZXhfZGVmaW5lX18oJ0B3ZWV4LWNvbXBvbmVudC93eGMtdGFiYmFyJywgW10sIGZ1bmN0aW9uKF9fd2VleF9yZXF1aXJlX18sIF9fd2VleF9leHBvcnRzX18sIF9fd2VleF9tb2R1bGVfXykge1xuXG4gICAgX193ZWV4X3NjcmlwdF9fKF9fd2VleF9tb2R1bGVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X3JlcXVpcmVfXylcbiAgICBpZiAoX193ZWV4X2V4cG9ydHNfXy5fX2VzTW9kdWxlICYmIF9fd2VleF9leHBvcnRzX18uZGVmYXVsdCkge1xuICAgICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMgPSBfX3dlZXhfZXhwb3J0c19fLmRlZmF1bHRcbiAgICB9XG5cbiAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cy50ZW1wbGF0ZSA9IF9fd2VleF90ZW1wbGF0ZV9fXG5cbiAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cy5zdHlsZSA9IF9fd2VleF9zdHlsZV9fXG5cbn0pXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtdGFiYmFyLndlXG4vLyBtb2R1bGUgaWQgPSA4OFxuLy8gbW9kdWxlIGNodW5rcyA9IDIgNCA4IDE3IDE4IDIyIDI0IDI2IDI3IDI4IDI5IDMxIDMyIDM2IDM3IDQzIDQ4IDQ5IDUxIDUyIDUzIDU0IDU1IDU2IDU5IDYxIDYyIDYzIDY0IDY1IDY2IDcwIDcyIDczIDc0IDc4IDgwIDgxIiwidmFyIF9fd2VleF90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi93eGMtdGFiaXRlbS53ZVwiKVxudmFyIF9fd2VleF9zdHlsZV9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi93eGMtdGFiaXRlbS53ZVwiKVxudmFyIF9fd2VleF9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vd2VleC1sb2FkZXIvbGliL3NjcmlwdC5qcyFiYWJlbC1sb2FkZXI/cHJlc2V0c1tdPUM6XFxcXHZiYW9saS13ZWV4XFxcXHZiYW9saVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcHJlc2V0LWVzMjAxNSZwcmVzZXRzPUM6XFxcXHZiYW9saS13ZWV4XFxcXHZiYW9saVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcHJlc2V0LWVzMjAxNSZwbHVnaW5zW109QzpcXFxcdmJhb2xpLXdlZXhcXFxcdmJhb2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmcGx1Z2lucz1DOlxcXFx2YmFvbGktd2VleFxcXFx2YmFvbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZjb21tZW50cz1mYWxzZSEuLy4uLy4uL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zY3JpcHRzIS4vd3hjLXRhYml0ZW0ud2VcIilcblxuX193ZWV4X2RlZmluZV9fKCdAd2VleC1jb21wb25lbnQvd3hjLXRhYml0ZW0nLCBbXSwgZnVuY3Rpb24oX193ZWV4X3JlcXVpcmVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X21vZHVsZV9fKSB7XG5cbiAgICBfX3dlZXhfc2NyaXB0X18oX193ZWV4X21vZHVsZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfcmVxdWlyZV9fKVxuICAgIGlmIChfX3dlZXhfZXhwb3J0c19fLl9fZXNNb2R1bGUgJiYgX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0KSB7XG4gICAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cyA9IF9fd2VleF9leHBvcnRzX18uZGVmYXVsdFxuICAgIH1cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnRlbXBsYXRlID0gX193ZWV4X3RlbXBsYXRlX19cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnN0eWxlID0gX193ZWV4X3N0eWxlX19cblxufSlcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy10YWJpdGVtLndlXG4vLyBtb2R1bGUgaWQgPSA4OVxuLy8gbW9kdWxlIGNodW5rcyA9IDIgNCA4IDE3IDE4IDIyIDI0IDI2IDI3IDI4IDI5IDMxIDMyIDM2IDM3IDQzIDQ4IDQ5IDUxIDUyIDUzIDU0IDU1IDU2IDU5IDYxIDYyIDYzIDY0IDY1IDY2IDcwIDcyIDczIDc0IDc4IDgwIDgxIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImRpdlwiLFxuICBcImNsYXNzTGlzdFwiOiBbXG4gICAgXCJjb250YWluZXJcIlxuICBdLFxuICBcInN0eWxlXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuYmFja2dyb3VuZENvbG9yfVxuICB9LFxuICBcImV2ZW50c1wiOiB7XG4gICAgXCJjbGlja1wiOiBcIm9uY2xpY2tpdGVtXCJcbiAgfSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJ0b3AtbGluZVwiXG4gICAgICBdLFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJzcmNcIjogXCJodHRwOi8vZ3RtczAzLmFsaWNkbi5jb20vdHBzL2kzL1RCMW1kc2lNcFhYWFhYcFhYWFhOdzRKSVhYWC02NDAtNC5wbmdcIlxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJ0YWItaWNvblwiXG4gICAgICBdLFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJzcmNcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmljb259XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwidGFiLXRleHRcIlxuICAgICAgXSxcbiAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICBcImNvbG9yXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy50aXRsZUNvbG9yfVxuICAgICAgfSxcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnRpdGxlfVxuICAgICAgfVxuICAgIH1cbiAgXVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy10YWJpdGVtLndlXG4vLyBtb2R1bGUgaWQgPSA5MFxuLy8gbW9kdWxlIGNodW5rcyA9IDIgNCA4IDE3IDE4IDIyIDI0IDI2IDI3IDI4IDI5IDMxIDMyIDM2IDM3IDQzIDQ4IDQ5IDUxIDUyIDUzIDU0IDU1IDU2IDU5IDYxIDYyIDYzIDY0IDY1IDY2IDcwIDcyIDczIDc0IDc4IDgwIDgxIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiY29udGFpbmVyXCI6IHtcbiAgICBcImZsZXhcIjogMSxcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJoZWlnaHRcIjogODhcbiAgfSxcbiAgXCJ0b3AtbGluZVwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgXCJ0b3BcIjogMCxcbiAgICBcImxlZnRcIjogMCxcbiAgICBcInJpZ2h0XCI6IDAsXG4gICAgXCJoZWlnaHRcIjogMlxuICB9LFxuICBcInRhYi1pY29uXCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiA1LFxuICAgIFwid2lkdGhcIjogNDAsXG4gICAgXCJoZWlnaHRcIjogNDBcbiAgfSxcbiAgXCJ0YWItdGV4dFwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogNSxcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiLFxuICAgIFwiZm9udFNpemVcIjogMjBcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vd2VleC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c3R5bGVzIS4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy10YWJpdGVtLndlXG4vLyBtb2R1bGUgaWQgPSA5MVxuLy8gbW9kdWxlIGNodW5rcyA9IDIgNCA4IDE3IDE4IDIyIDI0IDI2IDI3IDI4IDI5IDMxIDMyIDM2IDM3IDQzIDQ4IDQ5IDUxIDUyIDUzIDU0IDU1IDU2IDU5IDYxIDYyIDYzIDY0IDY1IDY2IDcwIDcyIDczIDc0IDc4IDgwIDgxIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IHt7YmFja2dyb3VuZENvbG9yfX1cIiAgb25jbGljaz1cIm9uY2xpY2tpdGVtXCI+XG4gICAgICAgIDxpbWFnZSBjbGFzcz1cInRvcC1saW5lXCIgc3JjID0gXCJodHRwOi8vZ3RtczAzLmFsaWNkbi5jb20vdHBzL2kzL1RCMW1kc2lNcFhYWFhYcFhYWFhOdzRKSVhYWC02NDAtNC5wbmdcIj48L2ltYWdlPlxuICAgICAgICA8aW1hZ2UgY2xhc3M9XCJ0YWItaWNvblwiIHNyYyA9IHt7aWNvbn19PjwvaW1hZ2U+XG4gICAgICAgIDx0ZXh0IGNsYXNzPVwidGFiLXRleHRcIiBzdHlsZT1cImNvbG9yOiB7e3RpdGxlQ29sb3J9fVwiPnt7dGl0bGV9fTwvdGV4dD5cbiAgICA8L2Rpdj4gIFxuPC90ZW1wbGF0ZT5cblxuPHN0eWxlPlxuICAgIC5jb250YWluZXIge1xuICAgICAgICBmbGV4OiAxOyBcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgXG4gICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjsgXG4gICAgICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7IFxuICAgICAgICBoZWlnaHQ6IDg4O1xuICAgIH1cbiAgICAudG9wLWxpbmUge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxuICAgICAgICB0b3A6IDA7IFxuICAgICAgICBsZWZ0OiAwOyBcbiAgICAgICAgcmlnaHQ6IDA7IFxuICAgICAgICBoZWlnaHQ6IDI7XG4gICAgfVxuICAgIC50YWItaWNvbiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDU7IFxuICAgICAgICB3aWR0aDogNDA7IFxuICAgICAgICBoZWlnaHQ6IDQwXG4gICAgfVxuICAgIC50YWItdGV4dCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDU7IFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICBcbiAgICAgICAgZm9udC1zaXplOiAyMDtcbiAgICB9XG48L3N0eWxlPlxuXG48c2NyaXB0PlxuICAgIG1vZHVsZS5leHBvcnRzID0ge1xuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgaW5kZXg6IDAsXG4gICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgIHRpdGxlQ29sb3I6ICcjMDAwMDAwJyxcbiAgICAgICAgICBpY29uOiAnJyxcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmZmZmJyxcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgIG9uY2xpY2tpdGVtOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIHZtID0gdGhpcztcbiAgICAgICAgICAgIHZhciBwYXJhbXMgPSB7XG4gICAgICAgICAgICAgIGluZGV4OiB2bS5pbmRleFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZtLiRkaXNwYXRjaCgndGFiSXRlbS5vbkNsaWNrJywgcGFyYW1zKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3dlZXgtY29tcG9uZW50cy9zcmMvd3hjLXRhYml0ZW0ud2U/ZmJiYTE0N2EiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gIFwiY2xhc3NMaXN0XCI6IFtcbiAgICBcIndyYXBwZXJcIlxuICBdLFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJlbWJlZFwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcImNvbnRlbnRcIlxuICAgICAgXSxcbiAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICBcInZpc2liaWxpdHlcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnZpc2liaWxpdHl9XG4gICAgICB9LFxuICAgICAgXCJyZXBlYXRcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnRhYkl0ZW1zfSxcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwic3JjXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5zcmN9LFxuICAgICAgICBcInR5cGVcIjogXCJ3ZWV4XCJcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcInRhYmJhclwiXG4gICAgICBdLFxuICAgICAgXCJhcHBlbmRcIjogXCJ0cmVlXCIsXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcInd4Yy10YWJpdGVtXCIsXG4gICAgICAgICAgXCJyZXBlYXRcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnRhYkl0ZW1zfSxcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJpbmRleFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuaW5kZXh9LFxuICAgICAgICAgICAgXCJpY29uXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5pY29ufSxcbiAgICAgICAgICAgIFwidGl0bGVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnRpdGxlfSxcbiAgICAgICAgICAgIFwidGl0bGVDb2xvclwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudGl0bGVDb2xvcn1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+L3dlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuL34vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL34vd2VleC1jb21wb25lbnRzL3NyYy93eGMtdGFiYmFyLndlXG4vLyBtb2R1bGUgaWQgPSA5M1xuLy8gbW9kdWxlIGNodW5rcyA9IDIgNCA4IDE3IDE4IDIyIDI0IDI2IDI3IDI4IDI5IDMxIDMyIDM2IDM3IDQzIDQ4IDQ5IDUxIDUyIDUzIDU0IDU1IDU2IDU5IDYxIDYyIDYzIDY0IDY1IDY2IDcwIDcyIDczIDc0IDc4IDgwIDgxIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwid3JhcHBlclwiOiB7XG4gICAgXCJ3aWR0aFwiOiA3NTAsXG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgXCJ0b3BcIjogMCxcbiAgICBcImxlZnRcIjogMCxcbiAgICBcInJpZ2h0XCI6IDAsXG4gICAgXCJib3R0b21cIjogMFxuICB9LFxuICBcImNvbnRlbnRcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwidG9wXCI6IDAsXG4gICAgXCJsZWZ0XCI6IDAsXG4gICAgXCJyaWdodFwiOiAwLFxuICAgIFwiYm90dG9tXCI6IDAsXG4gICAgXCJtYXJnaW5Ub3BcIjogMCxcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiA4OFxuICB9LFxuICBcInRhYmJhclwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJwb3NpdGlvblwiOiBcImZpeGVkXCIsXG4gICAgXCJib3R0b21cIjogMCxcbiAgICBcImxlZnRcIjogMCxcbiAgICBcInJpZ2h0XCI6IDAsXG4gICAgXCJoZWlnaHRcIjogODhcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vd2VleC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c3R5bGVzIS4vfi93ZWV4LWNvbXBvbmVudHMvc3JjL3d4Yy10YWJiYXIud2Vcbi8vIG1vZHVsZSBpZCA9IDk0XG4vLyBtb2R1bGUgY2h1bmtzID0gMiA0IDggMTcgMTggMjIgMjQgMjYgMjcgMjggMjkgMzEgMzIgMzYgMzcgNDMgNDggNDkgNTEgNTIgNTMgNTQgNTUgNTYgNTkgNjEgNjIgNjMgNjQgNjUgNjYgNzAgNzIgNzMgNzQgNzggODAgODEiLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cIndyYXBwZXJcIj5cbiAgICAgICAgPGVtYmVkIGNsYXNzPVwiY29udGVudFwiIHN0eWxlPVwidmlzaWJpbGl0eTp7e3Zpc2liaWxpdHl9fVwiIHJlcGVhdD17e3RhYkl0ZW1zfX0gc3JjPXt7c3JjfX0gdHlwZT1cIndlZXhcIj48L2VtYmVkPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFiYmFyXCIgYXBwZW5kID0gXCJ0cmVlXCI+XG4gICAgICAgICAgICA8d3hjLXRhYml0ZW0gcmVwZWF0PXt7dGFiSXRlbXN9fSBpbmRleD17e2luZGV4fX0gaWNvbj17e2ljb259fSB0aXRsZT17e3RpdGxlfX0gdGl0bGUtY29sb3I9e3t0aXRsZUNvbG9yfX0+PC93eGMtdGFiSXRlbT5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c3R5bGU+XG4gICAgLndyYXBwZXIgeyBcbiAgICAgICAgd2lkdGg6IDc1MDsgXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXG4gICAgICAgIHRvcDogMDsgXG4gICAgICAgIGxlZnQ6IDA7IFxuICAgICAgICByaWdodDogMDsgXG4gICAgICAgIGJvdHRvbTogMDtcbiAgICB9XG4gICAgLmNvbnRlbnQgeyBcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyBcbiAgICAgICAgdG9wOiAwOyBsZWZ0OiAwOyBcbiAgICAgICAgcmlnaHQ6IDA7IFxuICAgICAgICBib3R0b206IDA7IFxuICAgICAgICBtYXJnaW4tdG9wOiAwOyAgXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDg4O1xuICAgIH1cbiAgICAudGFiYmFyIHsgXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7IFxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7IFxuICAgICAgICBib3R0b206IDA7IFxuICAgICAgICBsZWZ0OiAwOyBcbiAgICAgICAgcmlnaHQ6IDA7ICBcbiAgICAgICAgaGVpZ2h0OiA4ODtcbiAgICB9XG48L3N0eWxlPlxuXG48c2NyaXB0PlxuICAgIG1vZHVsZS5leHBvcnRzID0ge1xuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgdGFiSXRlbXM6IFsgXSxcbiAgICAgICAgICBzZWxlY3RlZEluZGV4OiAwLFxuICAgICAgICAgIHNlbGVjdGVkQ29sb3I6ICcjZmYwMDAwJyxcbiAgICAgICAgICB1bnNlbGVjdGVkQ29sb3I6ICcjMDAwMDAwJyxcbiAgICAgICAgfSxcbiAgICAgICAgY3JlYXRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWQodGhpcy5zZWxlY3RlZEluZGV4KTtcblxuICAgICAgICAgIHRoaXMuJG9uKCd0YWJJdGVtLm9uQ2xpY2snLGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgdmFyIGRldGFpbD0gZS5kZXRhaWw7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSBkZXRhaWwuaW5kZXg7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkKGRldGFpbC5pbmRleCk7XG5cbiAgICAgICAgICAgIHZhciBwYXJhbXMgPSB7XG4gICAgICAgICAgICAgIGluZGV4OiBkZXRhaWwuaW5kZXhcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLiRkaXNwYXRjaCgndGFiQmFyLm9uQ2xpY2snLCBwYXJhbXMpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBzZWxlY3RlZDogZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHRoaXMudGFiSXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgdGFiSXRlbSA9IHRoaXMudGFiSXRlbXNbaV07XG4gICAgICAgICAgICAgICAgaWYoaSA9PSBpbmRleCl7XG4gICAgICAgICAgICAgICAgICB0YWJJdGVtLmljb24gPSB0YWJJdGVtLnNlbGVjdGVkSW1hZ2U7XG4gICAgICAgICAgICAgICAgICB0YWJJdGVtLnRpdGxlQ29sb3IgPSB0aGlzLnNlbGVjdGVkQ29sb3I7XG4gICAgICAgICAgICAgICAgICB0YWJJdGVtLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgdGFiSXRlbS5pY29uID0gdGFiSXRlbS5pbWFnZTtcbiAgICAgICAgICAgICAgICAgIHRhYkl0ZW0udGl0bGVDb2xvciA9IHRoaXMudW5zZWxlY3RlZENvbG9yO1xuICAgICAgICAgICAgICAgICAgdGFiSXRlbS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAgXG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3dlZXgtY29tcG9uZW50cy9zcmMvd3hjLXRhYmJhci53ZT8wNDc0ZWY4YiIsInJlcXVpcmUoXCIuL3Byb2dyZXNzLWNpcmNsZS53ZVwiKVxudmFyIF9fd2VleF90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi9wcm9kdWN0LWxpc3QtaXRlbS53ZVwiKVxudmFyIF9fd2VleF9zdHlsZV9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi9wcm9kdWN0LWxpc3QtaXRlbS53ZVwiKVxudmFyIF9fd2VleF9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9zY3JpcHQuanMhYmFiZWwtbG9hZGVyP3ByZXNldHNbXT1DOlxcXFx2YmFvbGktd2VleFxcXFx2YmFvbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXByZXNldC1lczIwMTUmcHJlc2V0cz1DOlxcXFx2YmFvbGktd2VleFxcXFx2YmFvbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXByZXNldC1lczIwMTUmcGx1Z2luc1tdPUM6XFxcXHZiYW9saS13ZWV4XFxcXHZiYW9saVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJnBsdWdpbnM9QzpcXFxcdmJhb2xpLXdlZXhcXFxcdmJhb2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmY29tbWVudHM9ZmFsc2UhLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdHMhLi9wcm9kdWN0LWxpc3QtaXRlbS53ZVwiKVxuXG5fX3dlZXhfZGVmaW5lX18oJ0B3ZWV4LWNvbXBvbmVudC9wcm9kdWN0LWxpc3QtaXRlbScsIFtdLCBmdW5jdGlvbihfX3dlZXhfcmVxdWlyZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfbW9kdWxlX18pIHtcblxuICAgIF9fd2VleF9zY3JpcHRfXyhfX3dlZXhfbW9kdWxlX18sIF9fd2VleF9leHBvcnRzX18sIF9fd2VleF9yZXF1aXJlX18pXG4gICAgaWYgKF9fd2VleF9leHBvcnRzX18uX19lc01vZHVsZSAmJiBfX3dlZXhfZXhwb3J0c19fLmRlZmF1bHQpIHtcbiAgICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzID0gX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0XG4gICAgfVxuXG4gICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMudGVtcGxhdGUgPSBfX3dlZXhfdGVtcGxhdGVfX1xuXG4gICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMuc3R5bGUgPSBfX3dlZXhfc3R5bGVfX1xuXG59KVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW5jbHVkZS9wcm9kdWN0LWxpc3QtaXRlbS53ZVxuLy8gbW9kdWxlIGlkID0gOTZcbi8vIG1vZHVsZSBjaHVua3MgPSA0IDcwIDc4IDgxIiwidmFyIF9fd2VleF90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi9wcm9ncmVzcy1jaXJjbGUud2VcIilcbnZhciBfX3dlZXhfc3R5bGVfXyA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c3R5bGVzIS4vcHJvZ3Jlc3MtY2lyY2xlLndlXCIpXG52YXIgX193ZWV4X3NjcmlwdF9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL3NjcmlwdC5qcyFiYWJlbC1sb2FkZXI/cHJlc2V0c1tdPUM6XFxcXHZiYW9saS13ZWV4XFxcXHZiYW9saVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcHJlc2V0LWVzMjAxNSZwcmVzZXRzPUM6XFxcXHZiYW9saS13ZWV4XFxcXHZiYW9saVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcHJlc2V0LWVzMjAxNSZwbHVnaW5zW109QzpcXFxcdmJhb2xpLXdlZXhcXFxcdmJhb2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmcGx1Z2lucz1DOlxcXFx2YmFvbGktd2VleFxcXFx2YmFvbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZjb21tZW50cz1mYWxzZSEuLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c2NyaXB0cyEuL3Byb2dyZXNzLWNpcmNsZS53ZVwiKVxuXG5fX3dlZXhfZGVmaW5lX18oJ0B3ZWV4LWNvbXBvbmVudC9wcm9ncmVzcy1jaXJjbGUnLCBbXSwgZnVuY3Rpb24oX193ZWV4X3JlcXVpcmVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X21vZHVsZV9fKSB7XG5cbiAgICBfX3dlZXhfc2NyaXB0X18oX193ZWV4X21vZHVsZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfcmVxdWlyZV9fKVxuICAgIGlmIChfX3dlZXhfZXhwb3J0c19fLl9fZXNNb2R1bGUgJiYgX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0KSB7XG4gICAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cyA9IF9fd2VleF9leHBvcnRzX18uZGVmYXVsdFxuICAgIH1cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnRlbXBsYXRlID0gX193ZWV4X3RlbXBsYXRlX19cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnN0eWxlID0gX193ZWV4X3N0eWxlX19cblxufSlcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2luY2x1ZGUvcHJvZ3Jlc3MtY2lyY2xlLndlXG4vLyBtb2R1bGUgaWQgPSA5N1xuLy8gbW9kdWxlIGNodW5rcyA9IDQgNSA3MCA3OCA4MSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJkaXZcIixcbiAgXCJjbGFzc0xpc3RcIjogW1xuICAgIFwiY29udGVudFwiXG4gIF0sXG4gIFwiYXR0clwiOiB7XG4gICAgXCJyZWZzXCI6IFwiY29tYm9cIlxuICB9LFxuICBcImlkXCI6IFwicHJvZ3Jlc3NcIlxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vc3JjL2luY2x1ZGUvcHJvZ3Jlc3MtY2lyY2xlLndlXG4vLyBtb2R1bGUgaWQgPSA5OFxuLy8gbW9kdWxlIGNodW5rcyA9IDQgNSA2IDcwIDc4IDgxIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiY29udGVudFwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgXCJsZWZ0XCI6IDAsXG4gICAgXCJ0b3BcIjogMCxcbiAgICBcInJpZ2h0XCI6IDAsXG4gICAgXCJib3R0b21cIjogMFxuICB9LFxuICBcInByb2dyZXNzXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcImxlZnRcIjogMCxcbiAgICBcInRvcFwiOiAwLFxuICAgIFwicmlnaHRcIjogMCxcbiAgICBcImJvdHRvbVwiOiAwXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL34vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL3NyYy9pbmNsdWRlL3Byb2dyZXNzLWNpcmNsZS53ZVxuLy8gbW9kdWxlIGlkID0gOTlcbi8vIG1vZHVsZSBjaHVua3MgPSA0IDUgNiA3MCA3OCA4MSIsIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCIgcmVmcz1cImNvbWJvXCIgaWQ9XCJwcm9ncmVzc1wiPlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcbjxzdHlsZT5cclxuLmNvbnRlbnQgeyBwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6IDA7IHRvcDogMDsgcmlnaHQ6IDA7IGJvdHRvbTogMDsgfVxyXG4ucHJvZ3Jlc3MgeyBwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6IDA7IHRvcDogMDsgcmlnaHQ6IDA7IGJvdHRvbTogMDsgfVxyXG48L3N0eWxlPlxyXG48c2NyaXB0PlxyXG52YXIgZG9tID0gcmVxdWlyZSgnQHdlZXgtbW9kdWxlL2RvbScpO1xyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIGRhdGE6IHtcclxuICAgICAgICBjdXJyZW50UHJvZ3Jlc3M6IDAsXHJcbiAgICAgICAgcHJvZHVjdFByb2dyZXNzOiAwXHJcbiAgICB9LFxyXG4gICAgY3JlYXRlZDogZnVuY3Rpb24oKSB7XHJcbi8vICAgICAgICB2YXIgY3VycmVudFByb2dyZXNzID0gdGhpcy5jdXJyZW50UHJvZ3Jlc3M7XHJcbi8vICAgICAgICB2YXIgZmluYWxQcm9ncmVzcyA9IHRoaXMucHJvZHVjdFByb2dyZXNzO1xyXG4vLyAgICAgICAgdmFyIGxvYWRQcm9ncmVzcyA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xyXG4vLyAgICAgICAgICAgIGlmIChjdXJyZW50UHJvZ3Jlc3MgPj0gZmluYWxQcm9ncmVzcykge1xyXG4vLyAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGxvYWRQcm9ncmVzcylcclxuLy8gICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgY3VycmVudFByb2dyZXNzKys7XHJcbi8vXHJcbi8vICAgICAgICB9LCA1MDAwKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLiRlbCgncHJvZ3Jlc3MnKSk7XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIGRyYXdQcm9ncmVzczogZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbG9hZFByb2dyZXNzOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3BhcmVudC5jdXJyZW50UHJvZ3Jlc3MgPj0gdGhpcy5fcGFyZW50LnByb2R1Y3RQcm9ncmVzcykge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChsb2FkUHJvZ3Jlc3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX3BhcmVudC5jdXJyZW50UHJvZ3Jlc3MrKztcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5fcGFyZW50LmN1cnJlbnRQcm9ncmVzcylcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmNsdWRlL3Byb2dyZXNzLWNpcmNsZS53ZT80ZDUyMDllMiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJkaXZcIixcbiAgXCJjbGFzc0xpc3RcIjogW1xuICAgIFwiY29udGVudFwiXG4gIF0sXG4gIFwiY2hpbGRyZW5cIjogW1xuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImgzXCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwicDAxXCJcbiAgICAgIF0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImlcIixcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIFsnaWNvbicsIHRoaXMuaWNvbkNsYXNzXX1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgICAgIFwiZm9udFNpemVcIjogMjhcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy50aXRsZX1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcInAwMlwiXG4gICAgICBdLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcImQwMVwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICAgICAgICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgICAgICAgICAgICAgIFwiYWxpZ25JdGVtc1wiOiBcImZsZXgtZW5kXCIsXG4gICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcIiNmZjY1MzFcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJmb250U2l6ZVwiOiA0NFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnBlcmNlbnR9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJtYXJnaW5MZWZ0XCI6IDQsXG4gICAgICAgICAgICAgICAgICAgIFwibWFyZ2luQm90dG9tXCI6IDQsXG4gICAgICAgICAgICAgICAgICAgIFwiZm9udFNpemVcIjogMThcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwiJVwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICAgICAgICAgIFwibWFyZ2luVG9wXCI6IDE2LFxuICAgICAgICAgICAgICAgIFwiZm9udFNpemVcIjogMTgsXG4gICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcIiM5OTk5OTlcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLpooTmnJ/lubTljJblm7rlrprmlLbnm4rnjodcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJkMDJcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInByb2dyZXNzLWNpcmNsZVwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwicHJvZHVjdFByb2dyZXNzXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5wcm9kdWN0UHJvZ3Jlc3N9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcImQwM1wiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICAgICAgICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgICAgICAgICAgICAgIFwiYWxpZ25JdGVtc1wiOiBcImZsZXgtZW5kXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCIjMTExMTExXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZm9udFNpemVcIjogMzZcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5tb250aH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICAgICAgICAgICAgICBcIm1hcmdpbkJvdHRvbVwiOiA2LFxuICAgICAgICAgICAgICAgICAgICBcImZvbnRTaXplXCI6IDIwXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIuS4quaciFwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICAgICAgICAgIFwibWFyZ2luVG9wXCI6IDgsXG4gICAgICAgICAgICAgICAgXCJmb250U2l6ZVwiOiAyMCxcbiAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwiIzk5OTk5OVwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIuacn+mZkFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcImQwNFwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcImludmVzdC1idG5cIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgXCJjbGlja1wiOiBcInRvSW52ZXN0XCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgXCJmb250U2l6ZVwiOiAyMlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLnq4vljbPmipXotYRcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJkMDQtdDAxXCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJtYXJnaW5Ub3BcIjogMTAsXG4gICAgICAgICAgICAgICAgXCJmb250U2l6ZVwiOiAyMCxcbiAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwiIzk5OTk5OVwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuICfov5jmrL7mlrnlvI86JyArICh0aGlzLnBheW1lbnRNZXRob2QpfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICBdXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi9zcmMvaW5jbHVkZS9wcm9kdWN0LWxpc3QtaXRlbS53ZVxuLy8gbW9kdWxlIGlkID0gMTAxXG4vLyBtb2R1bGUgY2h1bmtzID0gNCA1IDcwIDc4IDgxIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiY29udGVudFwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogMzAsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiA0MCxcbiAgICBcImhlaWdodFwiOiAyODAsXG4gICAgXCJib3JkZXJXaWR0aFwiOiAxLFxuICAgIFwiYm9yZGVyU3R5bGVcIjogXCJzb2xpZFwiLFxuICAgIFwiYm9yZGVyQ29sb3JcIjogXCIjZGRkZGRkXCIsXG4gICAgXCJib3JkZXJMZWZ0XCI6IDAsXG4gICAgXCJib3JkZXJSaWdodFwiOiAwLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gIH0sXG4gIFwicDAxXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcImhlaWdodFwiOiA5MCxcbiAgICBcImNvbG9yXCI6IFwiIzExMTExMVwiLFxuICAgIFwiYm9yZGVyQm90dG9tXCI6IFwiMXB4IHNvbGlkICNkZGRcIlxuICB9LFxuICBcImljb25cIjoge1xuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IDIwLFxuICAgIFwid2lkdGhcIjogNDAsXG4gICAgXCJoZWlnaHRcIjogNDBcbiAgfSxcbiAgXCJpY29uLW5ld1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKC4uLy4uL2ltYWdlcy9pY29uLW5ldy5wbmcpIG5vLXJlcGVhdCBjZW50ZXJcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IFwiY29udGFpblwiXG4gIH0sXG4gIFwiaWNvbi1vbmVcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybCguLi8uLi9pbWFnZXMvaWNvbi1vbmUucG5nKSBuby1yZXBlYXQgY2VudGVyXCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiBcImNvbnRhaW5cIlxuICB9LFxuICBcImljb24tdGhyZWVcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybCguLi8uLi9pbWFnZXMvaWNvbi10aHJlZS5wbmcpIG5vLXJlcGVhdCBjZW50ZXJcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IFwiY29udGFpblwiXG4gIH0sXG4gIFwiaWNvbi1oYWxmLXllYXJcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybCguLi8uLi9pbWFnZXMvaWNvbi1oYWxmLXllYXIucG5nKSBuby1yZXBlYXQgY2VudGVyXCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiBcImNvbnRhaW5cIlxuICB9LFxuICBcImljb24teWVhclwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKC4uLy4uL2ltYWdlcy9pY29uLXllYXIucG5nKSBuby1yZXBlYXQgY2VudGVyXCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiBcImNvbnRhaW5cIlxuICB9LFxuICBcInAwMlwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcInNwYWNlLWJldHdlZW5cIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcImhlaWdodFwiOiAxODZcbiAgfSxcbiAgXCJkMDFcIjoge1xuICAgIFwid2lkdGhcIjogMjYwXG4gIH0sXG4gIFwiZDAyXCI6IHtcbiAgICBcIndpZHRoXCI6IDEwMCxcbiAgICBcImhlaWdodFwiOiAxMDAsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZjFmMWYxXCJcbiAgfSxcbiAgXCJkMDNcIjoge1xuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwid2lkdGhcIjogMTEwLFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCJkMDRcIjoge1xuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwid2lkdGhcIjogMjQwLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcImludmVzdC1idG5cIjoge1xuICAgIFwid2lkdGhcIjogMTY2LFxuICAgIFwiaGVpZ2h0XCI6IDU4LFxuICAgIFwibGluZUhlaWdodFwiOiA1OCxcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogOCxcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZjkxMjVcIlxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi9zcmMvaW5jbHVkZS9wcm9kdWN0LWxpc3QtaXRlbS53ZVxuLy8gbW9kdWxlIGlkID0gMTAyXG4vLyBtb2R1bGUgY2h1bmtzID0gNCA1IDcwIDc4IDgxIiwiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cclxuICAgICAgICA8aDMgY2xhc3M9XCJwMDFcIj48aSBjbGFzcz1cImljb24ge3tpY29uQ2xhc3N9fVwiPjwvaT48dGV4dCBzdHlsZT1cImZvbnQtc2l6ZTogMjhweDtcIj57e3RpdGxlfX08L3RleHQ+PC9oMz5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicDAyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkMDFcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJmbGV4LWRpcmVjdGlvbjogcm93OyBhbGlnbi1pdGVtczogZmxleC1lbmQ7IGNvbG9yOiAjZmY2NTMxO1wiPjx0ZXh0IHN0eWxlPVwiZm9udC1zaXplOiA0NHB4O1wiPnt7cGVyY2VudH19PC90ZXh0Pjx0ZXh0IHN0eWxlPVwibWFyZ2luLWxlZnQ6IDRweDsgbWFyZ2luLWJvdHRvbTogNHB4OyBmb250LXNpemU6IDE4cHg7XCI+JTwvdGV4dD48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDx0ZXh0IHN0eWxlPVwibWFyZ2luLXRvcDogMTZweDsgZm9udC1zaXplOiAxOHB4OyBjb2xvcjogIzk5OTtcIj7pooTmnJ/lubTljJblm7rlrprmlLbnm4rnjoc8L3RleHQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZDAyXCI+XHJcbiAgICAgICAgICAgICAgICA8cHJvZ3Jlc3MtY2lyY2xlIHByb2R1Y3QtcHJvZ3Jlc3M9XCJ7e3Byb2R1Y3RQcm9ncmVzc319XCI+PC9wcm9ncmVzcy1jaXJjbGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZDAzXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwiZmxleC1kaXJlY3Rpb246IHJvdzsgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1wiPjx0ZXh0IHN0eWxlPVwiY29sb3I6ICMxMTE7IGZvbnQtc2l6ZTogMzZweDtcIj57e21vbnRofX08L3RleHQ+PHRleHQgc3R5bGU9XCJtYXJnaW4tYm90dG9tOiA2cHg7IGZvbnQtc2l6ZTogMjBweDtcIj7kuKrmnIg8L3RleHQ+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8dGV4dCBzdHlsZT1cIm1hcmdpbi10b3A6IDhweDsgZm9udC1zaXplOiAyMHB4OyBjb2xvcjogIzk5OTtcIj7mnJ/pmZA8L3RleHQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZDA0XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW52ZXN0LWJ0blwiIG9uY2xpY2s9XCJ0b0ludmVzdFwiPjx0ZXh0IHN0eWxlPVwiZGlzcGxheTogZmxleDsgZm9udC1zaXplOiAyMnB4O1wiPueri+WNs+aKlei1hDwvdGV4dD48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwhLS08ZGl2IGlmPVwiaW52ZXN0U3RhdHVzID09IDJcIiBjbGFzcz1cImludmVzdC1idG4gdW5hYmxlXCI+PHRleHQ+5oqV5qCH57uT5p2fPC90ZXh0PjwvZGl2Pi0tPlxyXG4gICAgICAgICAgICAgICAgPCEtLTxkaXYgaWY9XCJpbnZlc3RTdGF0dXMgPT0gM1wiIGNsYXNzPVwiaW52ZXN0LWJ0biB1bmFibGVcIj48dGV4dD7nrYnlvoXlvIDlp4s8L3RleHQ+PC9kaXY+LS0+XHJcbiAgICAgICAgICAgICAgICA8dGV4dCBjbGFzcz1cImQwNC10MDFcIiBzdHlsZT1cIiBtYXJnaW4tdG9wOiAxMHB4OyBmb250LXNpemU6IDIwcHg7IGNvbG9yOiAjOTk5O1wiPui/mOasvuaWueW8jzp7e3BheW1lbnRNZXRob2R9fTwvdGV4dD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzdHlsZT5cclxuLmNvbnRlbnQgeyBwb3NpdGlvbjogcmVsYXRpdmU7IG1hcmdpbi10b3A6IDMwcHg7IHBhZGRpbmctbGVmdDogNDBweDsgaGVpZ2h0OiAyODBweDsgYm9yZGVyLXdpZHRoOiAxcHg7IGJvcmRlci1zdHlsZTogc29saWQ7IGJvcmRlci1jb2xvcjogI2RkZDsgYm9yZGVyLWxlZnQ6IDA7IGJvcmRlci1yaWdodDogMDsgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgfVxyXG4ucDAxIHsgZmxleC1kaXJlY3Rpb246IHJvdzsgYWxpZ24taXRlbXM6IGNlbnRlcjsgaGVpZ2h0OiA5MHB4OyBjb2xvcjogIzExMTsgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7IH1cclxuLmljb24geyBkaXNwbGF5OiBmbGV4OyBtYXJnaW4tcmlnaHQ6IDIwcHg7IHdpZHRoOiA0MHB4OyBoZWlnaHQ6IDQwcHg7IH1cclxuLmljb24tbmV3IHsgYmFja2dyb3VuZDogdXJsKC4uLy4uL2ltYWdlcy9pY29uLW5ldy5wbmcpIG5vLXJlcGVhdCBjZW50ZXI7IGJhY2tncm91bmQtc2l6ZTogY29udGFpbjsgfVxyXG4uaWNvbi1vbmUgeyBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vaW1hZ2VzL2ljb24tb25lLnBuZykgbm8tcmVwZWF0IGNlbnRlcjsgYmFja2dyb3VuZC1zaXplOiBjb250YWluOyB9XHJcbi5pY29uLXRocmVlIHsgYmFja2dyb3VuZDogdXJsKC4uLy4uL2ltYWdlcy9pY29uLXRocmVlLnBuZykgbm8tcmVwZWF0IGNlbnRlcjsgYmFja2dyb3VuZC1zaXplOiBjb250YWluOyB9XHJcbi5pY29uLWhhbGYteWVhciB7IGJhY2tncm91bmQ6IHVybCguLi8uLi9pbWFnZXMvaWNvbi1oYWxmLXllYXIucG5nKSBuby1yZXBlYXQgY2VudGVyOyBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47IH1cclxuLmljb24teWVhciB7IGJhY2tncm91bmQ6IHVybCguLi8uLi9pbWFnZXMvaWNvbi15ZWFyLnBuZykgbm8tcmVwZWF0IGNlbnRlcjsgYmFja2dyb3VuZC1zaXplOiBjb250YWluOyB9XHJcbi5wMDIgeyBmbGV4LWRpcmVjdGlvbjogcm93OyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGhlaWdodDogMTg2cHg7IH1cclxuLmQwMSB7IHdpZHRoOiAyNjBweDsgfVxyXG4uZDAyIHsgd2lkdGg6IDEwMHB4OyBoZWlnaHQ6IDEwMHB4OyBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxOyB9XHJcbi5kMDMgeyBhbGlnbi1pdGVtczogY2VudGVyOyB3aWR0aDogMTEwcHg7IHRleHQtYWxpZ246IGNlbnRlcjsgfVxyXG4uZDA0IHsgYWxpZ24taXRlbXM6IGNlbnRlcjsgd2lkdGg6IDI0MHB4OyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjt9XHJcbi5pbnZlc3QtYnRuIHsgd2lkdGg6IDE2NnB4OyBoZWlnaHQ6IDU4cHg7IGxpbmUtaGVpZ2h0OiA1OHB4OyBjb2xvcjogI2ZmZjsgdGV4dC1hbGlnbjogY2VudGVyOyB0ZXh0LWFsaWduOiBjZW50ZXI7IGJvcmRlci1yYWRpdXM6IDhweDsgYmFja2dyb3VuZC1jb2xvcjogI2ZmOTEyNTsgfVxyXG48L3N0eWxlPlxyXG5cclxuPHNjcmlwdD5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgYmFzZVVybDogJycsXHJcbiAgICAgICAgaW52ZXN0U3RhdHVzOiAxLFxyXG4gICAgICAgIGlzTmV3OiBmYWxzZSxcclxuICAgICAgICBpY29uQ2xhc3M6ICduZXcnLFxyXG4gICAgICAgIHRpdGxlOiAn5paw5omL5LiT5LqrJyxcclxuICAgICAgICBwZXJjZW50OiAnMTAuMDAnLFxyXG4gICAgICAgIG1vbnRoOiAxLFxyXG4gICAgICAgIHBheW1lbnRNZXRob2Q6ICfkuIDmrKHnu5PmuIUnLFxyXG4gICAgICAgIHByb2R1Y3RQcm9ncmVzczogNTZcclxuICAgIH0sXHJcbiAgICBjcmVhdGVkOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAvLyDliKTmlq3ov5vluqbkuI4x5ZKMOTnnmoTlhbPns7tcclxuLy8gICAgICAgIHZhciBwcm9ncmVzcyA9IE51bWJlcih0aGlzLnByb2R1Y3RQcm9ncmVzcyk7XHJcbi8vICAgICAgICBpZihwcm9ncmVzcyA+IDAgJiYgcHJvZ3Jlc3MgPCAxKSB7XHJcbi8vICAgICAgICAgICAgdGhpcy5wcm9kdWN0UHJvZ3Jlc3MgPSAxO1xyXG4vLyAgICAgICAgfSBlbHNlIGlmIChwcm9ncmVzcyA+IDk5ICYmIHByb2dyZXNzIDwgMTAwKSB7XHJcbi8vICAgICAgICAgICAgdGhpcy5wcm9kdWN0UHJvZ3Jlc3MgPSA5OTtcclxuLy8gICAgICAgIH0gZWxzZSB7XHJcbi8vICAgICAgICAgICAgdGhpcy5wcm9kdWN0UHJvZ3Jlc3MgPSBNYXRoLnJvdW5kKHByb2dyZXNzKTtcclxuLy8gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g5bm05YyW5pS255uK5L+d55WZ5Lik5L2N5bCP5pWwXHJcbi8vICAgICAgICB0aGlzLnBlcmNlbnQgPSAodGhpcy5wZXJjZW50KS50b0ZpeGVkKDIpO1xyXG5cclxuICAgICAgICAvLyDmlrDmiYvmoIflkozmnIjku73lm77moIdcclxuICAgICAgICBpZiAodGhpcy5pc05ldykge1xyXG4gICAgICAgICAgICB0aGlzLmljb25DbGFzcyA9ICdpY29uLW5ldyc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc3dpdGNoKHRoaXMubW9udGgpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTogdGhpcy5pY29uQ2xhc3MgPSAnaWNvbi1vbmUnOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgMzogdGhpcy5pY29uQ2xhc3MgPSAnaWNvbi10aHJlZSc7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA2OiB0aGlzLmljb25DbGFzcyA9ICdpY29uLWhhbGYteWVhcic7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxMjogdGhpcy5pY29uQ2xhc3MgPSAnaWNvbi15ZWFyJzsgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIHRvSW52ZXN0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdGhpcy4kb3BlblVSTCh0aGlzLmJhc2VVcmwgKyAnbW9kdWxlcy9ib3Jyb3cvcHJvZHVjdERldGFpbHMuanMnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmNsdWRlL3Byb2R1Y3QtbGlzdC1pdGVtLndlPzM2MWVhMzc2IiwidmFyIF9fd2VleF90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi90cmFuc2Zlci1saXN0LWl0ZW0ud2VcIilcbnZhciBfX3dlZXhfc3R5bGVfXyA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c3R5bGVzIS4vdHJhbnNmZXItbGlzdC1pdGVtLndlXCIpXG52YXIgX193ZWV4X3NjcmlwdF9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL3NjcmlwdC5qcyFiYWJlbC1sb2FkZXI/cHJlc2V0c1tdPUM6XFxcXHZiYW9saS13ZWV4XFxcXHZiYW9saVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcHJlc2V0LWVzMjAxNSZwcmVzZXRzPUM6XFxcXHZiYW9saS13ZWV4XFxcXHZiYW9saVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcHJlc2V0LWVzMjAxNSZwbHVnaW5zW109QzpcXFxcdmJhb2xpLXdlZXhcXFxcdmJhb2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmcGx1Z2lucz1DOlxcXFx2YmFvbGktd2VleFxcXFx2YmFvbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZjb21tZW50cz1mYWxzZSEuLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c2NyaXB0cyEuL3RyYW5zZmVyLWxpc3QtaXRlbS53ZVwiKVxuXG5fX3dlZXhfZGVmaW5lX18oJ0B3ZWV4LWNvbXBvbmVudC90cmFuc2Zlci1saXN0LWl0ZW0nLCBbXSwgZnVuY3Rpb24oX193ZWV4X3JlcXVpcmVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X21vZHVsZV9fKSB7XG5cbiAgICBfX3dlZXhfc2NyaXB0X18oX193ZWV4X21vZHVsZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfcmVxdWlyZV9fKVxuICAgIGlmIChfX3dlZXhfZXhwb3J0c19fLl9fZXNNb2R1bGUgJiYgX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0KSB7XG4gICAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cyA9IF9fd2VleF9leHBvcnRzX18uZGVmYXVsdFxuICAgIH1cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnRlbXBsYXRlID0gX193ZWV4X3RlbXBsYXRlX19cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnN0eWxlID0gX193ZWV4X3N0eWxlX19cblxufSlcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2luY2x1ZGUvdHJhbnNmZXItbGlzdC1pdGVtLndlXG4vLyBtb2R1bGUgaWQgPSAxMDRcbi8vIG1vZHVsZSBjaHVua3MgPSA0IDcwIDc4IDgxIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImRpdlwiLFxuICBcImNsYXNzTGlzdFwiOiBbXG4gICAgXCJjb250ZW50XCJcbiAgXSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiaDNcIixcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJwMDFcIlxuICAgICAgXSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICAgICAgXCJmb250U2l6ZVwiOiAyOFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnRpdGxlfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwicDAyXCJcbiAgICAgIF0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwiZDAxXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgICAgICAgICAgICAgXCJhbGlnbkl0ZW1zXCI6IFwiZmxleC1lbmRcIixcbiAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwiI2ZmNjUzMVwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImZvbnRTaXplXCI6IDQ0XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMucGVyY2VudH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICAgICAgICAgICAgICBcIm1hcmdpbkxlZnRcIjogNCxcbiAgICAgICAgICAgICAgICAgICAgXCJtYXJnaW5Cb3R0b21cIjogNCxcbiAgICAgICAgICAgICAgICAgICAgXCJmb250U2l6ZVwiOiAxOFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCIlXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJtYXJnaW5Ub3BcIjogMTYsXG4gICAgICAgICAgICAgICAgXCJmb250U2l6ZVwiOiAxOCxcbiAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwiIzk5OTk5OVwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIumihOacn+W5tOaUtuebiueOh1wiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcImQwM1wiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgICAgIFwid2lkdGhcIjogMTAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICAgICAgICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgICAgICAgICAgICAgIFwiYWxpZ25JdGVtc1wiOiBcImZsZXgtZW5kXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCIjMTExMTExXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZm9udFNpemVcIjogMzZcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5sYXN0VGltZX1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICAgICAgICAgICAgICBcIm1hcmdpbkJvdHRvbVwiOiA2LFxuICAgICAgICAgICAgICAgICAgICBcImZvbnRTaXplXCI6IDIwXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIuWkqVwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICAgICAgICAgIFwibWFyZ2luVG9wXCI6IDgsXG4gICAgICAgICAgICAgICAgXCJmb250U2l6ZVwiOiAyMCxcbiAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwiIzk5OTk5OVwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIuWJqeS9meacn+mZkFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcImQwM1wiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICAgICAgICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgICAgICAgICAgICAgIFwiYWxpZ25JdGVtc1wiOiBcImZsZXgtZW5kXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCIjMTExMTExXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZm9udFNpemVcIjogMzZcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy50cmFuc2Zlck1vbmV5fVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwibWFyZ2luQm90dG9tXCI6IDYsXG4gICAgICAgICAgICAgICAgICAgIFwiZm9udFNpemVcIjogMjBcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJtYXJnaW5Ub3BcIjogOCxcbiAgICAgICAgICAgICAgICBcImZvbnRTaXplXCI6IDIwLFxuICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCIjOTk5OTk5XCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi6L2s6K6p6YeR6aKdXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwiZDA0XCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwiaW52ZXN0LWJ0blwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgICAgICBcImNsaWNrXCI6IFwidG9JbnZlc3RcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICBcImZvbnRTaXplXCI6IDIyXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIueri+WNs+aKlei1hFwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcImQwNC10MDFcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgICAgICAgICBcIm1hcmdpblRvcFwiOiAxMCxcbiAgICAgICAgICAgICAgICBcImZvbnRTaXplXCI6IDIwLFxuICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCIjOTk5OTk5XCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gJ+i/mOasvuaWueW8jzonICsgKHRoaXMucGF5bWVudE1ldGhvZCl9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+L3dlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuL34vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL3NyYy9pbmNsdWRlL3RyYW5zZmVyLWxpc3QtaXRlbS53ZVxuLy8gbW9kdWxlIGlkID0gMTA1XG4vLyBtb2R1bGUgY2h1bmtzID0gNCAxMyA3MCA3OCA4MSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcImNvbnRlbnRcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwiLFxuICAgIFwibWFyZ2luVG9wXCI6IDMwLFxuICAgIFwicGFkZGluZ0xlZnRcIjogNDAsXG4gICAgXCJoZWlnaHRcIjogMjgwLFxuICAgIFwiYm9yZGVyV2lkdGhcIjogMSxcbiAgICBcImJvcmRlclN0eWxlXCI6IFwic29saWRcIixcbiAgICBcImJvcmRlckNvbG9yXCI6IFwiI2RkZGRkZFwiLFxuICAgIFwiYm9yZGVyTGVmdFwiOiAwLFxuICAgIFwiYm9yZGVyUmlnaHRcIjogMCxcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmZmZmZcIlxuICB9LFxuICBcInAwMVwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJoZWlnaHRcIjogOTAsXG4gICAgXCJjb2xvclwiOiBcIiMxMTExMTFcIixcbiAgICBcImJvcmRlckJvdHRvbVwiOiBcIjFweCBzb2xpZCAjZGRkXCJcbiAgfSxcbiAgXCJpY29uXCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiAyMCxcbiAgICBcIndpZHRoXCI6IDQwLFxuICAgIFwiaGVpZ2h0XCI6IDQwXG4gIH0sXG4gIFwiaWNvbi1uZXdcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybCguLi8uLi9pbWFnZXMvaWNvbi1uZXcucG5nKSBuby1yZXBlYXQgY2VudGVyXCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiBcImNvbnRhaW5cIlxuICB9LFxuICBcImljb24tb25lXCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoLi4vLi4vaW1hZ2VzL2ljb24tb25lLnBuZykgbm8tcmVwZWF0IGNlbnRlclwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogXCJjb250YWluXCJcbiAgfSxcbiAgXCJpY29uLXRocmVlXCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoLi4vLi4vaW1hZ2VzL2ljb24tdGhyZWUucG5nKSBuby1yZXBlYXQgY2VudGVyXCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiBcImNvbnRhaW5cIlxuICB9LFxuICBcImljb24taGFsZi15ZWFyXCI6IHtcbiAgICBcImJhY2tncm91bmRcIjogXCJ1cmwoLi4vLi4vaW1hZ2VzL2ljb24taGFsZi15ZWFyLnBuZykgbm8tcmVwZWF0IGNlbnRlclwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogXCJjb250YWluXCJcbiAgfSxcbiAgXCJpY29uLXllYXJcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybCguLi8uLi9pbWFnZXMvaWNvbi15ZWFyLnBuZykgbm8tcmVwZWF0IGNlbnRlclwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogXCJjb250YWluXCJcbiAgfSxcbiAgXCJwMDJcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJoZWlnaHRcIjogMTg2XG4gIH0sXG4gIFwiZDAxXCI6IHtcbiAgICBcIndpZHRoXCI6IDE1MFxuICB9LFxuICBcImQwMlwiOiB7XG4gICAgXCJ3aWR0aFwiOiAyMTAsXG4gICAgXCJoZWlnaHRcIjogMTAwLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2YxZjFmMVwiXG4gIH0sXG4gIFwiZDAzXCI6IHtcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcIndpZHRoXCI6IDExMCxcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiZDA0XCI6IHtcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcIndpZHRoXCI6IDI0MCxcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCJpbnZlc3QtYnRuXCI6IHtcbiAgICBcIndpZHRoXCI6IDE2NixcbiAgICBcImhlaWdodFwiOiA1OCxcbiAgICBcImxpbmVIZWlnaHRcIjogNTgsXG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IDgsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmY5MTI1XCJcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vd2VleC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c3R5bGVzIS4vc3JjL2luY2x1ZGUvdHJhbnNmZXItbGlzdC1pdGVtLndlXG4vLyBtb2R1bGUgaWQgPSAxMDZcbi8vIG1vZHVsZSBjaHVua3MgPSA0IDEzIDcwIDc4IDgxIiwiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cclxuICAgICAgICA8aDMgY2xhc3M9XCJwMDFcIj48L2k+PHRleHQgc3R5bGU9XCJmb250LXNpemU6IDI4cHg7XCI+e3t0aXRsZX19PC90ZXh0PjwvaDM+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInAwMlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZDAxXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwiZmxleC1kaXJlY3Rpb246IHJvdzsgYWxpZ24taXRlbXM6IGZsZXgtZW5kOyBjb2xvcjogI2ZmNjUzMTtcIj48dGV4dCBzdHlsZT1cImZvbnQtc2l6ZTogNDRweDtcIj57e3BlcmNlbnR9fTwvdGV4dD48dGV4dCBzdHlsZT1cIm1hcmdpbi1sZWZ0OiA0cHg7IG1hcmdpbi1ib3R0b206IDRweDsgZm9udC1zaXplOiAxOHB4O1wiPiU8L3RleHQ+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8dGV4dCBzdHlsZT1cIm1hcmdpbi10b3A6IDE2cHg7IGZvbnQtc2l6ZTogMThweDsgY29sb3I6ICM5OTk7XCI+6aKE5pyf5bm05pS255uK546HPC90ZXh0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQwM1wiIHN0eWxlPVwid2lkdGg6IDEwMHB4O1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cImZsZXgtZGlyZWN0aW9uOiByb3c7IGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcIj48dGV4dCBzdHlsZT1cImNvbG9yOiAjMTExOyBmb250LXNpemU6IDM2cHg7XCI+e3tsYXN0VGltZX19PC90ZXh0Pjx0ZXh0IHN0eWxlPVwibWFyZ2luLWJvdHRvbTogNnB4OyBmb250LXNpemU6IDIwcHg7XCI+5aSpPC90ZXh0PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHRleHQgc3R5bGU9XCJtYXJnaW4tdG9wOiA4cHg7IGZvbnQtc2l6ZTogMjBweDsgY29sb3I6ICM5OTk7XCI+5Ymp5L2Z5pyf6ZmQPC90ZXh0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQwM1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cImZsZXgtZGlyZWN0aW9uOiByb3c7IGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcIj48dGV4dCBzdHlsZT1cImNvbG9yOiAjMTExOyBmb250LXNpemU6IDM2cHg7XCI+e3t0cmFuc2Zlck1vbmV5fX08L3RleHQ+PHRleHQgc3R5bGU9XCJtYXJnaW4tYm90dG9tOiA2cHg7IGZvbnQtc2l6ZTogMjBweDtcIj48L3RleHQ+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8dGV4dCBzdHlsZT1cIm1hcmdpbi10b3A6IDhweDsgZm9udC1zaXplOiAyMHB4OyBjb2xvcjogIzk5OTtcIj7ovazorqnph5Hpop08L3RleHQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZDA0XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW52ZXN0LWJ0blwiIG9uY2xpY2s9XCJ0b0ludmVzdFwiPjx0ZXh0IHN0eWxlPVwiZGlzcGxheTogZmxleDsgZm9udC1zaXplOiAyMnB4O1wiPueri+WNs+aKlei1hDwvdGV4dD48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwhLS08ZGl2IGlmPVwiaW52ZXN0U3RhdHVzID09IDJcIiBjbGFzcz1cImludmVzdC1idG4gdW5hYmxlXCI+PHRleHQ+5oqV5qCH57uT5p2fPC90ZXh0PjwvZGl2Pi0tPlxyXG4gICAgICAgICAgICAgICAgPCEtLTxkaXYgaWY9XCJpbnZlc3RTdGF0dXMgPT0gM1wiIGNsYXNzPVwiaW52ZXN0LWJ0biB1bmFibGVcIj48dGV4dD7nrYnlvoXlvIDlp4s8L3RleHQ+PC9kaXY+LS0+XHJcbiAgICAgICAgICAgICAgICA8dGV4dCBjbGFzcz1cImQwNC10MDFcIiBzdHlsZT1cIiBtYXJnaW4tdG9wOiAxMHB4OyBmb250LXNpemU6IDIwcHg7IGNvbG9yOiAjOTk5O1wiPui/mOasvuaWueW8jzp7e3BheW1lbnRNZXRob2R9fTwvdGV4dD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzdHlsZT5cclxuLmNvbnRlbnQgeyBwb3NpdGlvbjogcmVsYXRpdmU7IG1hcmdpbi10b3A6IDMwcHg7IHBhZGRpbmctbGVmdDogNDBweDsgaGVpZ2h0OiAyODBweDsgYm9yZGVyLXdpZHRoOiAxcHg7IGJvcmRlci1zdHlsZTogc29saWQ7IGJvcmRlci1jb2xvcjogI2RkZDsgYm9yZGVyLWxlZnQ6IDA7IGJvcmRlci1yaWdodDogMDsgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgfVxyXG4ucDAxIHsgZmxleC1kaXJlY3Rpb246IHJvdzsgYWxpZ24taXRlbXM6IGNlbnRlcjsgaGVpZ2h0OiA5MHB4OyBjb2xvcjogIzExMTsgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7IH1cclxuLmljb24geyBkaXNwbGF5OiBmbGV4OyBtYXJnaW4tcmlnaHQ6IDIwcHg7IHdpZHRoOiA0MHB4OyBoZWlnaHQ6IDQwcHg7IH1cclxuLmljb24tbmV3IHsgYmFja2dyb3VuZDogdXJsKC4uLy4uL2ltYWdlcy9pY29uLW5ldy5wbmcpIG5vLXJlcGVhdCBjZW50ZXI7IGJhY2tncm91bmQtc2l6ZTogY29udGFpbjsgfVxyXG4uaWNvbi1vbmUgeyBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vaW1hZ2VzL2ljb24tb25lLnBuZykgbm8tcmVwZWF0IGNlbnRlcjsgYmFja2dyb3VuZC1zaXplOiBjb250YWluOyB9XHJcbi5pY29uLXRocmVlIHsgYmFja2dyb3VuZDogdXJsKC4uLy4uL2ltYWdlcy9pY29uLXRocmVlLnBuZykgbm8tcmVwZWF0IGNlbnRlcjsgYmFja2dyb3VuZC1zaXplOiBjb250YWluOyB9XHJcbi5pY29uLWhhbGYteWVhciB7IGJhY2tncm91bmQ6IHVybCguLi8uLi9pbWFnZXMvaWNvbi1oYWxmLXllYXIucG5nKSBuby1yZXBlYXQgY2VudGVyOyBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47IH1cclxuLmljb24teWVhciB7IGJhY2tncm91bmQ6IHVybCguLi8uLi9pbWFnZXMvaWNvbi15ZWFyLnBuZykgbm8tcmVwZWF0IGNlbnRlcjsgYmFja2dyb3VuZC1zaXplOiBjb250YWluOyB9XHJcbi5wMDIgeyBmbGV4LWRpcmVjdGlvbjogcm93OyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGhlaWdodDogMTg2cHg7IH1cclxuLmQwMSB7IHdpZHRoOiAxNTBweDsgfVxyXG4uZDAyIHsgd2lkdGg6IDIxMHB4OyBoZWlnaHQ6IDEwMHB4OyBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxOyB9XHJcbi5kMDMgeyBhbGlnbi1pdGVtczogY2VudGVyOyB3aWR0aDogMTEwcHg7IHRleHQtYWxpZ246IGNlbnRlcjsgfVxyXG4uZDA0IHsgYWxpZ24taXRlbXM6IGNlbnRlcjsgd2lkdGg6IDI0MHB4OyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjt9XHJcbi5pbnZlc3QtYnRuIHsgd2lkdGg6IDE2NnB4OyBoZWlnaHQ6IDU4cHg7IGxpbmUtaGVpZ2h0OiA1OHB4OyBjb2xvcjogI2ZmZjsgdGV4dC1hbGlnbjogY2VudGVyOyB0ZXh0LWFsaWduOiBjZW50ZXI7IGJvcmRlci1yYWRpdXM6IDhweDsgYmFja2dyb3VuZC1jb2xvcjogI2ZmOTEyNTsgfVxyXG48L3N0eWxlPlxyXG5cclxuPHNjcmlwdD5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgaW52ZXN0U3RhdHVzOiAxLFxyXG4gICAgICAgIGlzTmV3OiBmYWxzZSxcclxuICAgICAgICBpY29uQ2xhc3M6ICduZXcnLFxyXG4gICAgICAgIHRpdGxlOiAn5paw5omL5LiT5LqrJyxcclxuICAgICAgICBwZXJjZW50OiAnMTAuMDAnLFxyXG4gICAgICAgIGxhc3RUaW1lOiAwLFxyXG4gICAgICAgIHRyYW5zZmVyTW9uZXk6IDAsXHJcbiAgICAgICAgcGF5bWVudE1ldGhvZDogJ+S4gOasoee7k+a4hScsXHJcbiAgICAgICAgcHJvZHVjdFByb2dyZXNzOiA1NlxyXG4gICAgfSxcclxuICAgIGNyZWF0ZWQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIC8vIOWIpOaWrei/m+W6puS4jjHlkow5OeeahOWFs+ezu1xyXG4vLyAgICAgICAgdmFyIHByb2dyZXNzID0gTnVtYmVyKHRoaXMucHJvZHVjdFByb2dyZXNzKTtcclxuLy8gICAgICAgIGlmKHByb2dyZXNzID4gMCAmJiBwcm9ncmVzcyA8IDEpIHtcclxuLy8gICAgICAgICAgICB0aGlzLnByb2R1Y3RQcm9ncmVzcyA9IDE7XHJcbi8vICAgICAgICB9IGVsc2UgaWYgKHByb2dyZXNzID4gOTkgJiYgcHJvZ3Jlc3MgPCAxMDApIHtcclxuLy8gICAgICAgICAgICB0aGlzLnByb2R1Y3RQcm9ncmVzcyA9IDk5O1xyXG4vLyAgICAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgICAgICB0aGlzLnByb2R1Y3RQcm9ncmVzcyA9IE1hdGgucm91bmQocHJvZ3Jlc3MpO1xyXG4vLyAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDlubTljJbmlLbnm4rkv53nlZnkuKTkvY3lsI/mlbBcclxuLy8gICAgICAgIHRoaXMucGVyY2VudCA9ICh0aGlzLnBlcmNlbnQpLnRvRml4ZWQoMik7XHJcbiAgICAgICAgICB0aGlzLnRyYW5zZmVyTW9uZXkgPSAodGhpcy50cmFuc2Zlck1vbmV5KS50b0ZpeGVkKDIpO1xyXG4gICAgICAgIC8vIOaWsOaJi+agh+WSjOaciOS7veWbvuagh1xyXG4gICAgICAgIGlmICh0aGlzLmlzTmV3KSB7XHJcbiAgICAgICAgICAgIHRoaXMuaWNvbkNsYXNzID0gJ2ljb24tbmV3JztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzd2l0Y2godGhpcy5tb250aCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOiB0aGlzLmljb25DbGFzcyA9ICdpY29uLW9uZSc7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAzOiB0aGlzLmljb25DbGFzcyA9ICdpY29uLXRocmVlJzsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDY6IHRoaXMuaWNvbkNsYXNzID0gJ2ljb24taGFsZi15ZWFyJzsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDEyOiB0aGlzLmljb25DbGFzcyA9ICdpY29uLXllYXInOyBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgdG9JbnZlc3Q6IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmNsdWRlL3RyYW5zZmVyLWxpc3QtaXRlbS53ZT81MTc0NmJmNiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJkaXZcIixcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcInNob3duXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5pc1Byb2R1Y3R9LFxuICAgICAgXCJyZXBlYXRcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnByb2R1Y3RJdGVtfSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwicHJvZHVjdC1saXN0LWl0ZW1cIixcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJiYXNlVXJsXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5iYXNlVXJsfSxcbiAgICAgICAgICAgIFwiaW52ZXN0U3RhdHVzXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5pbnZlc3RTdGF0dXN9LFxuICAgICAgICAgICAgXCJpc05ld1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuaXNOZXd9LFxuICAgICAgICAgICAgXCJ0aXRsZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudGl0bGV9LFxuICAgICAgICAgICAgXCJwZXJjZW50XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5wZXJjZW50fSxcbiAgICAgICAgICAgIFwibW9udGhcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLm1vbnRofSxcbiAgICAgICAgICAgIFwibGFzdFRpbWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmxhc3RUaW1lfSxcbiAgICAgICAgICAgIFwicGF5bWVudE1ldGhvZFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMucGF5bWVudE1ldGhvZH0sXG4gICAgICAgICAgICBcInByb2R1Y3RQcm9ncmVzc1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMucHJvZHVjdFByb2dyZXNzfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcInNob3duXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5pc1RyYW5zZmVyfSxcbiAgICAgIFwicmVwZWF0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5wcm9kdWN0SXRlbX0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcInRyYW5zZmVyLWxpc3QtaXRlbVwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcImJhc2VVcmxcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmJhc2VVcmx9LFxuICAgICAgICAgICAgXCJpbnZlc3RTdGF0dXNcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmludmVzdFN0YXR1c30sXG4gICAgICAgICAgICBcImlzTmV3XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5pc05ld30sXG4gICAgICAgICAgICBcInRpdGxlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy50aXRsZX0sXG4gICAgICAgICAgICBcInBlcmNlbnRcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnBlcmNlbnR9LFxuICAgICAgICAgICAgXCJ0cmFuc2Zlck1vbmV5XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy50cmFuc2Zlck1vbmV5fSxcbiAgICAgICAgICAgIFwibGFzdFRpbWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmxhc3RUaW1lfSxcbiAgICAgICAgICAgIFwicGF5bWVudE1ldGhvZFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMucGF5bWVudE1ldGhvZH0sXG4gICAgICAgICAgICBcInByb2R1Y3RQcm9ncmVzc1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMucHJvZHVjdFByb2dyZXNzfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vc3JjL2luY2x1ZGUvcHJvZHVjdC1saXN0LndlXG4vLyBtb2R1bGUgaWQgPSAxMDhcbi8vIG1vZHVsZSBjaHVua3MgPSA0IDcwIDc4IDgxIiwibW9kdWxlLmV4cG9ydHMgPSB7fVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vd2VleC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c3R5bGVzIS4vc3JjL2luY2x1ZGUvcHJvZHVjdC1saXN0LndlXG4vLyBtb2R1bGUgaWQgPSAxMDlcbi8vIG1vZHVsZSBjaHVua3MgPSA0IDcwIDc4IDgxIiwiPHRlbXBsYXRlPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8IS0tPHJlZnJlc2ggb25yZWZyZXNoPVwib25yZWZyZXNoXCIgZGlzcGxheT1cInt7cmVmcmVzaERpc3BsYXl9fVwiPi0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS17e3JlZnJlc2hUZXh0fX0tLT5cclxuICAgICAgICAgICAgICAgIDwhLS08L3JlZnJlc2g+LS0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlmPXt7aXNQcm9kdWN0fX0gcmVwZWF0PVwicHJvZHVjdEl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8cHJvZHVjdC1saXN0LWl0ZW0gYmFzZS11cmw9XCJ7e2Jhc2VVcmx9fVwiIGludmVzdC1zdGF0dXM9XCJ7e2ludmVzdFN0YXR1c319XCIgaXMtbmV3PVwie3tpc05ld319XCIgdGl0bGU9XCJ7e3RpdGxlfX1cIiBwZXJjZW50PVwie3twZXJjZW50fX1cIiBtb250aD1cInt7bW9udGh9fVwiIGxhc3QtdGltZT1cInt7bGFzdFRpbWV9fVwiIHBheW1lbnQtbWV0aG9kPVwie3twYXltZW50TWV0aG9kfX1cIiBwcm9kdWN0LXByb2dyZXNzPVwie3twcm9kdWN0UHJvZ3Jlc3N9fVwiPjwvcHJvZHVjdC1saXN0LWl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWY9e3tpc1RyYW5zZmVyfX0gcmVwZWF0PVwicHJvZHVjdEl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8dHJhbnNmZXItbGlzdC1pdGVtIGJhc2UtdXJsPVwie3tiYXNlVXJsfX1cIiBpbnZlc3Qtc3RhdHVzPVwie3tpbnZlc3RTdGF0dXN9fVwiIGlzLW5ldz1cInt7aXNOZXd9fVwiIHRpdGxlPVwie3t0aXRsZX19XCIgcGVyY2VudD1cInt7cGVyY2VudH19XCIgdHJhbnNmZXItbW9uZXk9XCJ7e3RyYW5zZmVyTW9uZXl9fVwiIGxhc3QtdGltZT1cInt7bGFzdFRpbWV9fVwiIHBheW1lbnQtbWV0aG9kPVwie3twYXltZW50TWV0aG9kfX1cIiBwcm9kdWN0LXByb2dyZXNzPVwie3twcm9kdWN0UHJvZ3Jlc3N9fVwiPjwvdHJhbnNmZXItbGlzdC1pdGVtPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8IS0tPGxvYWRpbmcgb25sb2FkaW5nPVwib25sb2FkaW5nXCIgZGlzcGxheT1cInt7bG9hZGluZ0Rpc3BsYXl9fVwiPi0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS17e2xvYWRpbmdUZXh0fX0tLT5cclxuICAgICAgICAgICAgICAgIDwhLS08L2xvYWRpbmc+LS0+XHJcbiAgICAgICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcbjxzdHlsZT5cclxuPC9zdHlsZT5cclxuPHNjcmlwdD5cclxucmVxdWlyZSgnd2VleC1jb21wb25lbnRzJyk7XHJcbnJlcXVpcmUoJy4vcHJvZHVjdC1saXN0LWl0ZW0ud2UnKTtcclxucmVxdWlyZSgnLi90cmFuc2Zlci1saXN0LWl0ZW0ud2UnKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgZGF0YToge1xyXG4gICAgICAgIGRpcjogJ2Rpc3QnLFxyXG4gICAgICAgIGJhc2VVcmw6ICcnLFxyXG4gICAgICAgIHJlZnJlc2hEaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgIGxvYWRpbmdEaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgIHJlZnJlc2hUZXh0OiAn5LiL5ouJ5Yi35pawJyxcclxuICAgICAgICBsb2FkaW5nVGV4dDogJ+WKoOi9veabtOWkmicsXHJcbiAgICAgICAgaXNQcm9kdWN0OiB0cnVlLFxyXG4gICAgICAgIHByb2R1Y3RJdGVtOiBbXVxyXG4gICAgfSxcclxuICAgIGNyZWF0ZWQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuaXNUcmFuc2ZlciA9ICF0aGlzLmlzUHJvZHVjdDtcclxuXHJcbiAgICAgICAgdmFyIGJ1bmRsZVVybCA9IHRoaXMuJGdldENvbmZpZygpLmJ1bmRsZVVybDtcclxuICAgICAgICB2YXIgbmF0aXZlQmFzZTtcclxuICAgICAgICB2YXIgaXNBbmRyb2lkQXNzZXRzID0gYnVuZGxlVXJsLmluZGV4T2YoJ2ZpbGU6Ly9hc3NldHMvJykgPj0gMDtcclxuICAgICAgICB2YXIgaXNpT1NBc3NldHMgPSBidW5kbGVVcmwuaW5kZXhPZignZmlsZTovLy8nKSA+PSAwICYmIGJ1bmRsZVVybC5pbmRleE9mKCdXZWV4RGVtby5hcHAnKSA+IDA7XHJcbiAgICAgICAgaWYgKGlzQW5kcm9pZEFzc2V0cykge1xyXG4gICAgICAgICAgICBuYXRpdmVCYXNlID0gJ2ZpbGU6Ly9hc3NldHMvJztcclxuICAgICAgICB9IGVsc2UgaWYgKGlzaU9TQXNzZXRzKSB7XHJcbiAgICAgICAgICAgIC8vIGZpbGU6Ly8vdmFyL21vYmlsZS9Db250YWluZXJzL0J1bmRsZS9BcHBsaWNhdGlvbi97aWR9L1dlZXhEZW1vLmFwcC9cclxuICAgICAgICAgICAgLy8gZmlsZTovLy9Vc2Vycy97dXNlcn0vTGlicmFyeS9EZXZlbG9wZXIvQ29yZVNpbXVsYXRvci9EZXZpY2VzL3tpZH0vZGF0YS9Db250YWluZXJzL0J1bmRsZS9BcHBsaWNhdGlvbi97aWR9L1dlZXhEZW1vLmFwcC9cclxuICAgICAgICAgICAgbmF0aXZlQmFzZSA9IGJ1bmRsZVVybC5zdWJzdHJpbmcoMCwgYnVuZGxlVXJsLmxhc3RJbmRleE9mKCcvJykgKyAxKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgaG9zdCA9ICdsb2NhbGhvc3Q6ODA4MCc7XHJcbiAgICAgICAgICAgIHZhciBtYXRjaGVzID0gL1xcL1xcLyhbXlxcL10rPylcXC8vLmV4ZWModGhpcy4kZ2V0Q29uZmlnKCkuYnVuZGxlVXJsKTtcclxuICAgICAgICAgICAgaWYgKG1hdGNoZXMgJiYgbWF0Y2hlcy5sZW5ndGggPj0gMikge1xyXG4gICAgICAgICAgICAgICAgaG9zdCA9IG1hdGNoZXNbMV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbmF0aXZlQmFzZSA9ICdodHRwOi8vJyArIGhvc3QgKyAnLycgKyB0aGlzLmRpciArICcvJztcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGg1QmFzZSA9ICcuL2luZGV4Lmh0bWw/cGFnZT0uLycgKyB0aGlzLmRpciArICcvJztcclxuICAgICAgICAvLyBpbiBOYXRpdmVcclxuICAgICAgICB0aGlzLmJhc2VVcmwgPSBuYXRpdmVCYXNlO1xyXG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICAvLyBpbiBCcm93c2VyIG9yIFdlYlZpZXdcclxuICAgICAgICAgICAgdGhpcy5iYXNlVXJsID0gaDVCYXNlO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgb25yZWZyZXNoOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyIHZtID0gdGhpcztcclxuICAgICAgICAgICAgdm0ucmVmcmVzaERpc3BsYXkgPSAnc2hvdydcclxuICAgICAgICAgICAgaWYgKHZtLml0ZW1zLmxlbmd0aCA+IDUwKSB7XHJcbiAgICAgICAgICAgICAgICB2bS5yZWZyZXNoVGV4dCA9IFwibm8gbW9yZSBkYXRhIVwiXHJcbiAgICAgICAgICAgICAgICB2bS5yZWZyZXNoRGlzcGxheSA9ICdoaWRlJ1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBsZW4gPSB2bS5pdGVtcy5sZW5ndGg7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSBsZW47IGkgPCAobGVuICsgMjApOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHZtLml0ZW1zLnVuc2hpZnQoe1xyXG4gICAgICAgICAgICAgICAgICAgICdpdGVtJzogJ3Rlc3QgZGF0YSAnICsgaVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdm0ucmVmcmVzaERpc3BsYXkgPSAnaGlkZSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9ubG9hZGluZzogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciB2bSA9IHRoaXM7XHJcbiAgICAgICAgICAgIHZtLmxvYWRpbmdEaXNwbGF5ID0gJ3Nob3cnXHJcbiAgICAgICAgICAgIGlmICh2bS5pdGVtcy5sZW5ndGggPiAzMCkge1xyXG4gICAgICAgICAgICAgICAgdm0ubG9hZGluZ1RleHQgPSBcIm5vIG1vcmUgZGF0YSFcIlxyXG4gICAgICAgICAgICAgICAgdm0ubG9hZGluZ0Rpc3BsYXkgPSAnaGlkZSdcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIGxlbiA9IHZtLml0ZW1zLmxlbmd0aDtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IGxlbjsgaSA8IChsZW4gKyAyMCk7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdm0uaXRlbXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgJ2l0ZW0nOiAndGVzdCBkYXRhICcgKyBpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2bS5sb2FkaW5nRGlzcGxheSA9ICdoaWRlJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25sb2FkbW9yZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaW50by0tW29ubG9hZG1vcmVdXCIpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5jbHVkZS9wcm9kdWN0LWxpc3Qud2U/MTE3N2IyOWMiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9pdGVyYXRvciA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3N5bWJvbC9pdGVyYXRvclwiKTtcblxudmFyIF9pdGVyYXRvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pdGVyYXRvcik7XG5cbnZhciBfc3ltYm9sID0gcmVxdWlyZShcIi4uL2NvcmUtanMvc3ltYm9sXCIpO1xuXG52YXIgX3N5bWJvbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zeW1ib2wpO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIF9pdGVyYXRvcjIuZGVmYXVsdCA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IF9zeW1ib2wyLmRlZmF1bHQgJiYgb2JqICE9PSBfc3ltYm9sMi5kZWZhdWx0LnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIF90eXBlb2YoX2l0ZXJhdG9yMi5kZWZhdWx0KSA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmogPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihvYmopO1xufSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gX3N5bWJvbDIuZGVmYXVsdCAmJiBvYmogIT09IF9zeW1ib2wyLmRlZmF1bHQucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmogPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihvYmopO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qc1xuLy8gbW9kdWxlIGlkID0gMTExXG4vLyBtb2R1bGUgY2h1bmtzID0gNCA4IDEwIDE0IDI0IDI1IDI4IDMxIDMyIDM2IDM3IDQ4IDQ5IDUxIDUyIDUzIDU0IDU1IDU2IDU3IDU4IDYxIDYzIDY0IDY1IDcwIDcyIDczIDc4IDgxIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pdGVyYXRvclwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sL2l0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTJcbi8vIG1vZHVsZSBjaHVua3MgPSA0IDggMTAgMTQgMjQgMjUgMjggMzEgMzIgMzYgMzcgNDggNDkgNTEgNTIgNTMgNTQgNTUgNTYgNTcgNTggNjEgNjMgNjQgNjUgNzAgNzIgNzMgNzggODEiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL193a3MtZXh0JykuZignaXRlcmF0b3InKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gMTEzXG4vLyBtb2R1bGUgY2h1bmtzID0gNCA4IDEwIDE0IDI0IDI1IDI4IDMxIDMyIDM2IDM3IDQ4IDQ5IDUxIDUyIDUzIDU0IDU1IDU2IDU3IDU4IDYxIDYzIDY0IDY1IDcwIDcyIDczIDc4IDgxIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRhdCAgPSByZXF1aXJlKCcuL19zdHJpbmctYXQnKSh0cnVlKTtcblxuLy8gMjEuMS4zLjI3IFN0cmluZy5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShTdHJpbmcsICdTdHJpbmcnLCBmdW5jdGlvbihpdGVyYXRlZCl7XG4gIHRoaXMuX3QgPSBTdHJpbmcoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbi8vIDIxLjEuNS4yLjEgJVN0cmluZ0l0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uKCl7XG4gIHZhciBPICAgICA9IHRoaXMuX3RcbiAgICAsIGluZGV4ID0gdGhpcy5faVxuICAgICwgcG9pbnQ7XG4gIGlmKGluZGV4ID49IE8ubGVuZ3RoKXJldHVybiB7dmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZX07XG4gIHBvaW50ID0gJGF0KE8sIGluZGV4KTtcbiAgdGhpcy5faSArPSBwb2ludC5sZW5ndGg7XG4gIHJldHVybiB7dmFsdWU6IHBvaW50LCBkb25lOiBmYWxzZX07XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gMTE0XG4vLyBtb2R1bGUgY2h1bmtzID0gNCA4IDEwIDE0IDI0IDI1IDI4IDMxIDMyIDM2IDM3IDQ4IDQ5IDUxIDUyIDUzIDU0IDU1IDU2IDU3IDU4IDYxIDYzIDY0IDY1IDcwIDcyIDczIDc4IDgxIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIGRlZmluZWQgICA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbi8vIHRydWUgIC0+IFN0cmluZyNhdFxuLy8gZmFsc2UgLT4gU3RyaW5nI2NvZGVQb2ludEF0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRPX1NUUklORyl7XG4gIHJldHVybiBmdW5jdGlvbih0aGF0LCBwb3Mpe1xuICAgIHZhciBzID0gU3RyaW5nKGRlZmluZWQodGhhdCkpXG4gICAgICAsIGkgPSB0b0ludGVnZXIocG9zKVxuICAgICAgLCBsID0gcy5sZW5ndGhcbiAgICAgICwgYSwgYjtcbiAgICBpZihpIDwgMCB8fCBpID49IGwpcmV0dXJuIFRPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGEgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbCB8fCAoYiA9IHMuY2hhckNvZGVBdChpICsgMSkpIDwgMHhkYzAwIHx8IGIgPiAweGRmZmZcbiAgICAgID8gVE9fU1RSSU5HID8gcy5jaGFyQXQoaSkgOiBhXG4gICAgICA6IFRPX1NUUklORyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcbiAgfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zdHJpbmctYXQuanNcbi8vIG1vZHVsZSBpZCA9IDExNVxuLy8gbW9kdWxlIGNodW5rcyA9IDQgOCAxMCAxNCAyNCAyNSAyOCAzMSAzMiAzNiAzNyA0OCA0OSA1MSA1MiA1MyA1NCA1NSA1NiA1NyA1OCA2MSA2MyA2NCA2NSA3MCA3MiA3MyA3OCA4MSIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZICAgICAgICA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKVxuICAsICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCByZWRlZmluZSAgICAgICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJylcbiAgLCBoaWRlICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBJdGVyYXRvcnMgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgJGl0ZXJDcmVhdGUgICAgPSByZXF1aXJlKCcuL19pdGVyLWNyZWF0ZScpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJylcbiAgLCBJVEVSQVRPUiAgICAgICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgQlVHR1kgICAgICAgICAgPSAhKFtdLmtleXMgJiYgJ25leHQnIGluIFtdLmtleXMoKSkgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxuICAsIEZGX0lURVJBVE9SICAgID0gJ0BAaXRlcmF0b3InXG4gICwgS0VZUyAgICAgICAgICAgPSAna2V5cydcbiAgLCBWQUxVRVMgICAgICAgICA9ICd2YWx1ZXMnO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEJhc2UsIE5BTUUsIENvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCl7XG4gICRpdGVyQ3JlYXRlKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcbiAgdmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uKGtpbmQpe1xuICAgIGlmKCFCVUdHWSAmJiBraW5kIGluIHByb3RvKXJldHVybiBwcm90b1traW5kXTtcbiAgICBzd2l0Y2goa2luZCl7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgIH0gcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgfTtcbiAgdmFyIFRBRyAgICAgICAgPSBOQU1FICsgJyBJdGVyYXRvcidcbiAgICAsIERFRl9WQUxVRVMgPSBERUZBVUxUID09IFZBTFVFU1xuICAgICwgVkFMVUVTX0JVRyA9IGZhbHNlXG4gICAgLCBwcm90byAgICAgID0gQmFzZS5wcm90b3R5cGVcbiAgICAsICRuYXRpdmUgICAgPSBwcm90b1tJVEVSQVRPUl0gfHwgcHJvdG9bRkZfSVRFUkFUT1JdIHx8IERFRkFVTFQgJiYgcHJvdG9bREVGQVVMVF1cbiAgICAsICRkZWZhdWx0ICAgPSAkbmF0aXZlIHx8IGdldE1ldGhvZChERUZBVUxUKVxuICAgICwgJGVudHJpZXMgICA9IERFRkFVTFQgPyAhREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKCdlbnRyaWVzJykgOiB1bmRlZmluZWRcbiAgICAsICRhbnlOYXRpdmUgPSBOQU1FID09ICdBcnJheScgPyBwcm90by5lbnRyaWVzIHx8ICRuYXRpdmUgOiAkbmF0aXZlXG4gICAgLCBtZXRob2RzLCBrZXksIEl0ZXJhdG9yUHJvdG90eXBlO1xuICAvLyBGaXggbmF0aXZlXG4gIGlmKCRhbnlOYXRpdmUpe1xuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoJGFueU5hdGl2ZS5jYWxsKG5ldyBCYXNlKSk7XG4gICAgaWYoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUpe1xuICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgICAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XG4gICAgICAvLyBmaXggZm9yIHNvbWUgb2xkIGVuZ2luZXNcbiAgICAgIGlmKCFMSUJSQVJZICYmICFoYXMoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SKSloaWRlKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgfVxuICB9XG4gIC8vIGZpeCBBcnJheSN7dmFsdWVzLCBAQGl0ZXJhdG9yfS5uYW1lIGluIFY4IC8gRkZcbiAgaWYoREVGX1ZBTFVFUyAmJiAkbmF0aXZlICYmICRuYXRpdmUubmFtZSAhPT0gVkFMVUVTKXtcbiAgICBWQUxVRVNfQlVHID0gdHJ1ZTtcbiAgICAkZGVmYXVsdCA9IGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gJG5hdGl2ZS5jYWxsKHRoaXMpOyB9O1xuICB9XG4gIC8vIERlZmluZSBpdGVyYXRvclxuICBpZigoIUxJQlJBUlkgfHwgRk9SQ0VEKSAmJiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSl7XG4gICAgaGlkZShwcm90bywgSVRFUkFUT1IsICRkZWZhdWx0KTtcbiAgfVxuICAvLyBQbHVnIGZvciBsaWJyYXJ5XG4gIEl0ZXJhdG9yc1tOQU1FXSA9ICRkZWZhdWx0O1xuICBJdGVyYXRvcnNbVEFHXSAgPSByZXR1cm5UaGlzO1xuICBpZihERUZBVUxUKXtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiAgREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKFZBTFVFUyksXG4gICAgICBrZXlzOiAgICBJU19TRVQgICAgID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiAkZW50cmllc1xuICAgIH07XG4gICAgaWYoRk9SQ0VEKWZvcihrZXkgaW4gbWV0aG9kcyl7XG4gICAgICBpZighKGtleSBpbiBwcm90bykpcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG4gIHJldHVybiBtZXRob2RzO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTZcbi8vIG1vZHVsZSBjaHVua3MgPSA0IDggMTAgMTQgMjQgMjUgMjggMzEgMzIgMzYgMzcgNDggNDkgNTEgNTIgNTMgNTQgNTUgNTYgNTcgNTggNjEgNjMgNjQgNjUgNzAgNzIgNzMgNzggODEiLCJtb2R1bGUuZXhwb3J0cyA9IHRydWU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19saWJyYXJ5LmpzXG4vLyBtb2R1bGUgaWQgPSAxMTdcbi8vIG1vZHVsZSBjaHVua3MgPSA0IDggMTAgMTQgMjQgMjUgMjggMzEgMzIgMzYgMzcgNDggNDkgNTEgNTIgNTMgNTQgNTUgNTYgNTcgNTggNjEgNjMgNjQgNjUgNzAgNzIgNzMgNzggODEiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSAxMThcbi8vIG1vZHVsZSBjaHVua3MgPSA0IDggMTAgMTQgMjQgMjUgMjggMzEgMzIgMzYgMzcgNDggNDkgNTEgNTIgNTMgNTQgNTUgNTYgNTcgNTggNjEgNjMgNjQgNjUgNzAgNzIgNzMgNzggODEiLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlcmF0b3JzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTlcbi8vIG1vZHVsZSBjaHVua3MgPSA0IDggMTAgMTQgMjQgMjUgMjggMzEgMzIgMzYgMzcgNDggNDkgNTEgNTIgNTMgNTQgNTUgNTYgNTcgNTggNjEgNjMgNjQgNjUgNzAgNzIgNzMgNzggODEiLCIndXNlIHN0cmljdCc7XG52YXIgY3JlYXRlICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJylcbiAgLCBkZXNjcmlwdG9yICAgICA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cbi8vIDI1LjEuMi4xLjEgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19oaWRlJykoSXRlcmF0b3JQcm90b3R5cGUsIHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpLCBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpe1xuICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUsIHtuZXh0OiBkZXNjcmlwdG9yKDEsIG5leHQpfSk7XG4gIHNldFRvU3RyaW5nVGFnKENvbnN0cnVjdG9yLCBOQU1FICsgJyBJdGVyYXRvcicpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjBcbi8vIG1vZHVsZSBjaHVua3MgPSA0IDggMTAgMTQgMjQgMjUgMjggMzEgMzIgMzYgMzcgNDggNDkgNTEgNTIgNTMgNTQgNTUgNTYgNTcgNTggNjEgNjMgNjQgNjUgNzAgNzIgNzMgNzggODEiLCIvLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbnZhciBhbk9iamVjdCAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgZFBzICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHBzJylcbiAgLCBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKVxuICAsIElFX1BST1RPICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpXG4gICwgRW1wdHkgICAgICAgPSBmdW5jdGlvbigpeyAvKiBlbXB0eSAqLyB9XG4gICwgUFJPVE9UWVBFICAgPSAncHJvdG90eXBlJztcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIGNyZWF0ZURpY3QgPSBmdW5jdGlvbigpe1xuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICB2YXIgaWZyYW1lID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdpZnJhbWUnKVxuICAgICwgaSAgICAgID0gZW51bUJ1Z0tleXMubGVuZ3RoXG4gICAgLCBsdCAgICAgPSAnPCdcbiAgICAsIGd0ICAgICA9ICc+J1xuICAgICwgaWZyYW1lRG9jdW1lbnQ7XG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICByZXF1aXJlKCcuL19odG1sJykuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lLnNyYyA9ICdqYXZhc2NyaXB0Oic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2NyaXB0LXVybFxuICAvLyBjcmVhdGVEaWN0ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuT2JqZWN0O1xuICAvLyBodG1sLnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUobHQgKyAnc2NyaXB0JyArIGd0ICsgJ2RvY3VtZW50LkY9T2JqZWN0JyArIGx0ICsgJy9zY3JpcHQnICsgZ3QpO1xuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICBjcmVhdGVEaWN0ID0gaWZyYW1lRG9jdW1lbnQuRjtcbiAgd2hpbGUoaS0tKWRlbGV0ZSBjcmVhdGVEaWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbaV1dO1xuICByZXR1cm4gY3JlYXRlRGljdCgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKXtcbiAgdmFyIHJlc3VsdDtcbiAgaWYoTyAhPT0gbnVsbCl7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuICAgIHJlc3VsdCA9IG5ldyBFbXB0eTtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gbnVsbDtcbiAgICAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHBvbHlmaWxsXG4gICAgcmVzdWx0W0lFX1BST1RPXSA9IE87XG4gIH0gZWxzZSByZXN1bHQgPSBjcmVhdGVEaWN0KCk7XG4gIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiBkUHMocmVzdWx0LCBQcm9wZXJ0aWVzKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDEyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDQgOCAxMCAxNCAyNCAyNSAyOCAzMSAzMiAzNiAzNyA0OCA0OSA1MSA1MiA1MyA1NCA1NSA1NiA1NyA1OCA2MSA2MyA2NCA2NSA3MCA3MiA3MyA3OCA4MSIsInZhciBkUCAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGdldEtleXMgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpe1xuICBhbk9iamVjdChPKTtcbiAgdmFyIGtleXMgICA9IGdldEtleXMoUHJvcGVydGllcylcbiAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgLCBpID0gMFxuICAgICwgUDtcbiAgd2hpbGUobGVuZ3RoID4gaSlkUC5mKE8sIFAgPSBrZXlzW2krK10sIFByb3BlcnRpZXNbUF0pO1xuICByZXR1cm4gTztcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHBzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjJcbi8vIG1vZHVsZSBjaHVua3MgPSA0IDggMTAgMTQgMjQgMjUgMjggMzEgMzIgMzYgMzcgNDggNDkgNTEgNTIgNTMgNTQgNTUgNTYgNTcgNTggNjEgNjMgNjQgNjUgNzAgNzIgNzMgNzggODEiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2h0bWwuanNcbi8vIG1vZHVsZSBpZCA9IDEyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDQgOCAxMCAxNCAyNCAyNSAyOCAzMSAzMiAzNiAzNyA0OCA0OSA1MSA1MiA1MyA1NCA1NSA1NiA1NyA1OCA2MSA2MyA2NCA2NSA3MCA3MiA3MyA3OCA4MSIsInZhciBkZWYgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mXG4gICwgaGFzID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgdGFnLCBzdGF0KXtcbiAgaWYoaXQgJiYgIWhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSlkZWYoaXQsIFRBRywge2NvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRhZ30pO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjRcbi8vIG1vZHVsZSBjaHVua3MgPSA0IDggMTAgMTQgMjQgMjUgMjggMzEgMzIgMzYgMzcgNDggNDkgNTEgNTIgNTMgNTQgNTUgNTYgNTcgNTggNjEgNjMgNjQgNjUgNzAgNzIgNzMgNzggODEiLCJ2YXIgc3RvcmUgICAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCd3a3MnKVxuICAsIHVpZCAgICAgICAgPSByZXF1aXJlKCcuL191aWQnKVxuICAsIFN5bWJvbCAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5TeW1ib2xcbiAgLCBVU0VfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xuXG52YXIgJGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG5hbWUpe1xuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cbiAgICBVU0VfU1lNQk9MICYmIFN5bWJvbFtuYW1lXSB8fCAoVVNFX1NZTUJPTCA/IFN5bWJvbCA6IHVpZCkoJ1N5bWJvbC4nICsgbmFtZSkpO1xufTtcblxuJGV4cG9ydHMuc3RvcmUgPSBzdG9yZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy5qc1xuLy8gbW9kdWxlIGlkID0gMTI1XG4vLyBtb2R1bGUgY2h1bmtzID0gNCA4IDEwIDE0IDI0IDI1IDI4IDMxIDMyIDM2IDM3IDQ4IDQ5IDUxIDUyIDUzIDU0IDU1IDU2IDU3IDU4IDYxIDYzIDY0IDY1IDcwIDcyIDczIDc4IDgxIiwiLy8gMTkuMS4yLjkgLyAxNS4yLjMuMiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciBoYXMgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgdG9PYmplY3QgICAgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsIElFX1BST1RPICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpXG4gICwgT2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbihPKXtcbiAgTyA9IHRvT2JqZWN0KE8pO1xuICBpZihoYXMoTywgSUVfUFJPVE8pKXJldHVybiBPW0lFX1BST1RPXTtcbiAgaWYodHlwZW9mIE8uY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBPIGluc3RhbmNlb2YgTy5jb25zdHJ1Y3Rvcil7XG4gICAgcmV0dXJuIE8uY29uc3RydWN0b3IucHJvdG90eXBlO1xuICB9IHJldHVybiBPIGluc3RhbmNlb2YgT2JqZWN0ID8gT2JqZWN0UHJvdG8gOiBudWxsO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1ncG8uanNcbi8vIG1vZHVsZSBpZCA9IDEyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDQgOCAxMCAxNCAyNCAyNSAyOCAzMSAzMiAzNiAzNyA0OCA0OSA1MSA1MiA1MyA1NCA1NSA1NiA1NyA1OCA2MSA2MyA2NCA2NSA3MCA3MiA3MyA3OCA4MSIsInJlcXVpcmUoJy4vZXM2LmFycmF5Lml0ZXJhdG9yJyk7XG52YXIgZ2xvYmFsICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgaGlkZSAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIEl0ZXJhdG9ycyAgICAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsIFRPX1NUUklOR19UQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxuZm9yKHZhciBjb2xsZWN0aW9ucyA9IFsnTm9kZUxpc3QnLCAnRE9NVG9rZW5MaXN0JywgJ01lZGlhTGlzdCcsICdTdHlsZVNoZWV0TGlzdCcsICdDU1NSdWxlTGlzdCddLCBpID0gMDsgaSA8IDU7IGkrKyl7XG4gIHZhciBOQU1FICAgICAgID0gY29sbGVjdGlvbnNbaV1cbiAgICAsIENvbGxlY3Rpb24gPSBnbG9iYWxbTkFNRV1cbiAgICAsIHByb3RvICAgICAgPSBDb2xsZWN0aW9uICYmIENvbGxlY3Rpb24ucHJvdG90eXBlO1xuICBpZihwcm90byAmJiAhcHJvdG9bVE9fU1RSSU5HX1RBR10paGlkZShwcm90bywgVE9fU1RSSU5HX1RBRywgTkFNRSk7XG4gIEl0ZXJhdG9yc1tOQU1FXSA9IEl0ZXJhdG9ycy5BcnJheTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gMTI3XG4vLyBtb2R1bGUgY2h1bmtzID0gNCA4IDEwIDE0IDI0IDI1IDI4IDMxIDMyIDM2IDM3IDQ4IDQ5IDUxIDUyIDUzIDU0IDU1IDU2IDU3IDU4IDYxIDYzIDY0IDY1IDcwIDcyIDczIDc4IDgxIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKVxuICAsIHN0ZXAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyLXN0ZXAnKVxuICAsIEl0ZXJhdG9ycyAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsIHRvSU9iamVjdCAgICAgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG5cbi8vIDIyLjEuMy40IEFycmF5LnByb3RvdHlwZS5lbnRyaWVzKClcbi8vIDIyLjEuMy4xMyBBcnJheS5wcm90b3R5cGUua2V5cygpXG4vLyAyMi4xLjMuMjkgQXJyYXkucHJvdG90eXBlLnZhbHVlcygpXG4vLyAyMi4xLjMuMzAgQXJyYXkucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShBcnJheSwgJ0FycmF5JywgZnVuY3Rpb24oaXRlcmF0ZWQsIGtpbmQpe1xuICB0aGlzLl90ID0gdG9JT2JqZWN0KGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAvLyBraW5kXG4vLyAyMi4xLjUuMi4xICVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uKCl7XG4gIHZhciBPICAgICA9IHRoaXMuX3RcbiAgICAsIGtpbmQgID0gdGhpcy5fa1xuICAgICwgaW5kZXggPSB0aGlzLl9pKys7XG4gIGlmKCFPIHx8IGluZGV4ID49IE8ubGVuZ3RoKXtcbiAgICB0aGlzLl90ID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiBzdGVwKDEpO1xuICB9XG4gIGlmKGtpbmQgPT0gJ2tleXMnICApcmV0dXJuIHN0ZXAoMCwgaW5kZXgpO1xuICBpZihraW5kID09ICd2YWx1ZXMnKXJldHVybiBzdGVwKDAsIE9baW5kZXhdKTtcbiAgcmV0dXJuIHN0ZXAoMCwgW2luZGV4LCBPW2luZGV4XV0pO1xufSwgJ3ZhbHVlcycpO1xuXG4vLyBhcmd1bWVudHNMaXN0W0BAaXRlcmF0b3JdIGlzICVBcnJheVByb3RvX3ZhbHVlcyUgKDkuNC40LjYsIDkuNC40LjcpXG5JdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuXG5hZGRUb1Vuc2NvcGFibGVzKCdrZXlzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCd2YWx1ZXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ2VudHJpZXMnKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjhcbi8vIG1vZHVsZSBjaHVua3MgPSA0IDggMTAgMTQgMjQgMjUgMjggMzEgMzIgMzYgMzcgNDggNDkgNTEgNTIgNTMgNTQgNTUgNTYgNTcgNTggNjEgNjMgNjQgNjUgNzAgNzIgNzMgNzggODEiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDEyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDQgOCAxMCAxNCAyNCAyNSAyOCAzMSAzMiAzNiAzNyA0OCA0OSA1MSA1MiA1MyA1NCA1NSA1NiA1NyA1OCA2MSA2MyA2NCA2NSA3MCA3MiA3MyA3OCA4MSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZG9uZSwgdmFsdWUpe1xuICByZXR1cm4ge3ZhbHVlOiB2YWx1ZSwgZG9uZTogISFkb25lfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLXN0ZXAuanNcbi8vIG1vZHVsZSBpZCA9IDEzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDQgOCAxMCAxNCAyNCAyNSAyOCAzMSAzMiAzNiAzNyA0OCA0OSA1MSA1MiA1MyA1NCA1NSA1NiA1NyA1OCA2MSA2MyA2NCA2NSA3MCA3MiA3MyA3OCA4MSIsImV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX3drcycpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWV4dC5qc1xuLy8gbW9kdWxlIGlkID0gMTMxXG4vLyBtb2R1bGUgY2h1bmtzID0gNCA4IDEwIDE0IDI0IDI1IDI4IDMxIDMyIDM2IDM3IDQ4IDQ5IDUxIDUyIDUzIDU0IDU1IDU2IDU3IDU4IDYxIDYzIDY0IDY1IDcwIDcyIDczIDc4IDgxIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbFwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzJcbi8vIG1vZHVsZSBjaHVua3MgPSA0IDggMTAgMTQgMjQgMjUgMjggMzEgMzIgMzYgMzcgNDggNDkgNTEgNTIgNTMgNTQgNTUgNTYgNTcgNTggNjEgNjMgNjQgNjUgNzAgNzIgNzMgNzggODEiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zeW1ib2wnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLlN5bWJvbDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTMzXG4vLyBtb2R1bGUgY2h1bmtzID0gNCA4IDEwIDE0IDI0IDI1IDI4IDMxIDMyIDM2IDM3IDQ4IDQ5IDUxIDUyIDUzIDU0IDU1IDU2IDU3IDU4IDYxIDYzIDY0IDY1IDcwIDcyIDczIDc4IDgxIiwiJ3VzZSBzdHJpY3QnO1xuLy8gRUNNQVNjcmlwdCA2IHN5bWJvbHMgc2hpbVxudmFyIGdsb2JhbCAgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBoYXMgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgREVTQ1JJUFRPUlMgICAgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpXG4gICwgJGV4cG9ydCAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIHJlZGVmaW5lICAgICAgID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKVxuICAsIE1FVEEgICAgICAgICAgID0gcmVxdWlyZSgnLi9fbWV0YScpLktFWVxuICAsICRmYWlscyAgICAgICAgID0gcmVxdWlyZSgnLi9fZmFpbHMnKVxuICAsIHNoYXJlZCAgICAgICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkJylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJylcbiAgLCB1aWQgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX3VpZCcpXG4gICwgd2tzICAgICAgICAgICAgPSByZXF1aXJlKCcuL193a3MnKVxuICAsIHdrc0V4dCAgICAgICAgID0gcmVxdWlyZSgnLi9fd2tzLWV4dCcpXG4gICwgd2tzRGVmaW5lICAgICAgPSByZXF1aXJlKCcuL193a3MtZGVmaW5lJylcbiAgLCBrZXlPZiAgICAgICAgICA9IHJlcXVpcmUoJy4vX2tleW9mJylcbiAgLCBlbnVtS2V5cyAgICAgICA9IHJlcXVpcmUoJy4vX2VudW0ta2V5cycpXG4gICwgaXNBcnJheSAgICAgICAgPSByZXF1aXJlKCcuL19pcy1hcnJheScpXG4gICwgYW5PYmplY3QgICAgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIHRvSU9iamVjdCAgICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgdG9QcmltaXRpdmUgICAgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKVxuICAsIGNyZWF0ZURlc2MgICAgID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpXG4gICwgX2NyZWF0ZSAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJylcbiAgLCBnT1BORXh0ICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuLWV4dCcpXG4gICwgJEdPUEQgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpXG4gICwgJERQICAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsICRrZXlzICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKVxuICAsIGdPUEQgICAgICAgICAgID0gJEdPUEQuZlxuICAsIGRQICAgICAgICAgICAgID0gJERQLmZcbiAgLCBnT1BOICAgICAgICAgICA9IGdPUE5FeHQuZlxuICAsICRTeW1ib2wgICAgICAgID0gZ2xvYmFsLlN5bWJvbFxuICAsICRKU09OICAgICAgICAgID0gZ2xvYmFsLkpTT05cbiAgLCBfc3RyaW5naWZ5ICAgICA9ICRKU09OICYmICRKU09OLnN0cmluZ2lmeVxuICAsIFBST1RPVFlQRSAgICAgID0gJ3Byb3RvdHlwZSdcbiAgLCBISURERU4gICAgICAgICA9IHdrcygnX2hpZGRlbicpXG4gICwgVE9fUFJJTUlUSVZFICAgPSB3a3MoJ3RvUHJpbWl0aXZlJylcbiAgLCBpc0VudW0gICAgICAgICA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlXG4gICwgU3ltYm9sUmVnaXN0cnkgPSBzaGFyZWQoJ3N5bWJvbC1yZWdpc3RyeScpXG4gICwgQWxsU3ltYm9scyAgICAgPSBzaGFyZWQoJ3N5bWJvbHMnKVxuICAsIE9QU3ltYm9scyAgICAgID0gc2hhcmVkKCdvcC1zeW1ib2xzJylcbiAgLCBPYmplY3RQcm90byAgICA9IE9iamVjdFtQUk9UT1RZUEVdXG4gICwgVVNFX05BVElWRSAgICAgPSB0eXBlb2YgJFN5bWJvbCA9PSAnZnVuY3Rpb24nXG4gICwgUU9iamVjdCAgICAgICAgPSBnbG9iYWwuUU9iamVjdDtcbi8vIERvbid0IHVzZSBzZXR0ZXJzIGluIFF0IFNjcmlwdCwgaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzE3M1xudmFyIHNldHRlciA9ICFRT2JqZWN0IHx8ICFRT2JqZWN0W1BST1RPVFlQRV0gfHwgIVFPYmplY3RbUFJPVE9UWVBFXS5maW5kQ2hpbGQ7XG5cbi8vIGZhbGxiYWNrIGZvciBvbGQgQW5kcm9pZCwgaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTY4N1xudmFyIHNldFN5bWJvbERlc2MgPSBERVNDUklQVE9SUyAmJiAkZmFpbHMoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIF9jcmVhdGUoZFAoe30sICdhJywge1xuICAgIGdldDogZnVuY3Rpb24oKXsgcmV0dXJuIGRQKHRoaXMsICdhJywge3ZhbHVlOiA3fSkuYTsgfVxuICB9KSkuYSAhPSA3O1xufSkgPyBmdW5jdGlvbihpdCwga2V5LCBEKXtcbiAgdmFyIHByb3RvRGVzYyA9IGdPUEQoT2JqZWN0UHJvdG8sIGtleSk7XG4gIGlmKHByb3RvRGVzYylkZWxldGUgT2JqZWN0UHJvdG9ba2V5XTtcbiAgZFAoaXQsIGtleSwgRCk7XG4gIGlmKHByb3RvRGVzYyAmJiBpdCAhPT0gT2JqZWN0UHJvdG8pZFAoT2JqZWN0UHJvdG8sIGtleSwgcHJvdG9EZXNjKTtcbn0gOiBkUDtcblxudmFyIHdyYXAgPSBmdW5jdGlvbih0YWcpe1xuICB2YXIgc3ltID0gQWxsU3ltYm9sc1t0YWddID0gX2NyZWF0ZSgkU3ltYm9sW1BST1RPVFlQRV0pO1xuICBzeW0uX2sgPSB0YWc7XG4gIHJldHVybiBzeW07XG59O1xuXG52YXIgaXNTeW1ib2wgPSBVU0VfTkFUSVZFICYmIHR5cGVvZiAkU3ltYm9sLml0ZXJhdG9yID09ICdzeW1ib2wnID8gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnO1xufSA6IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0IGluc3RhbmNlb2YgJFN5bWJvbDtcbn07XG5cbnZhciAkZGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBEKXtcbiAgaWYoaXQgPT09IE9iamVjdFByb3RvKSRkZWZpbmVQcm9wZXJ0eShPUFN5bWJvbHMsIGtleSwgRCk7XG4gIGFuT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgYW5PYmplY3QoRCk7XG4gIGlmKGhhcyhBbGxTeW1ib2xzLCBrZXkpKXtcbiAgICBpZighRC5lbnVtZXJhYmxlKXtcbiAgICAgIGlmKCFoYXMoaXQsIEhJRERFTikpZFAoaXQsIEhJRERFTiwgY3JlYXRlRGVzYygxLCB7fSkpO1xuICAgICAgaXRbSElEREVOXVtrZXldID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSlpdFtISURERU5dW2tleV0gPSBmYWxzZTtcbiAgICAgIEQgPSBfY3JlYXRlKEQsIHtlbnVtZXJhYmxlOiBjcmVhdGVEZXNjKDAsIGZhbHNlKX0pO1xuICAgIH0gcmV0dXJuIHNldFN5bWJvbERlc2MoaXQsIGtleSwgRCk7XG4gIH0gcmV0dXJuIGRQKGl0LCBrZXksIEQpO1xufTtcbnZhciAkZGVmaW5lUHJvcGVydGllcyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoaXQsIFApe1xuICBhbk9iamVjdChpdCk7XG4gIHZhciBrZXlzID0gZW51bUtleXMoUCA9IHRvSU9iamVjdChQKSlcbiAgICAsIGkgICAgPSAwXG4gICAgLCBsID0ga2V5cy5sZW5ndGhcbiAgICAsIGtleTtcbiAgd2hpbGUobCA+IGkpJGRlZmluZVByb3BlcnR5KGl0LCBrZXkgPSBrZXlzW2krK10sIFBba2V5XSk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgJGNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpdCwgUCl7XG4gIHJldHVybiBQID09PSB1bmRlZmluZWQgPyBfY3JlYXRlKGl0KSA6ICRkZWZpbmVQcm9wZXJ0aWVzKF9jcmVhdGUoaXQpLCBQKTtcbn07XG52YXIgJHByb3BlcnR5SXNFbnVtZXJhYmxlID0gZnVuY3Rpb24gcHJvcGVydHlJc0VudW1lcmFibGUoa2V5KXtcbiAgdmFyIEUgPSBpc0VudW0uY2FsbCh0aGlzLCBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpKTtcbiAgaWYodGhpcyA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gRSB8fCAhaGFzKHRoaXMsIGtleSkgfHwgIWhhcyhBbGxTeW1ib2xzLCBrZXkpIHx8IGhhcyh0aGlzLCBISURERU4pICYmIHRoaXNbSElEREVOXVtrZXldID8gRSA6IHRydWU7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSl7XG4gIGl0ICA9IHRvSU9iamVjdChpdCk7XG4gIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG4gIGlmKGl0ID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSlyZXR1cm47XG4gIHZhciBEID0gZ09QRChpdCwga2V5KTtcbiAgaWYoRCAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0pKUQuZW51bWVyYWJsZSA9IHRydWU7XG4gIHJldHVybiBEO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlOYW1lcyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpe1xuICB2YXIgbmFtZXMgID0gZ09QTih0b0lPYmplY3QoaXQpKVxuICAgICwgcmVzdWx0ID0gW11cbiAgICAsIGkgICAgICA9IDBcbiAgICAsIGtleTtcbiAgd2hpbGUobmFtZXMubGVuZ3RoID4gaSl7XG4gICAgaWYoIWhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiBrZXkgIT0gSElEREVOICYmIGtleSAhPSBNRVRBKXJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgJGdldE93blByb3BlcnR5U3ltYm9scyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5U3ltYm9scyhpdCl7XG4gIHZhciBJU19PUCAgPSBpdCA9PT0gT2JqZWN0UHJvdG9cbiAgICAsIG5hbWVzICA9IGdPUE4oSVNfT1AgPyBPUFN5bWJvbHMgOiB0b0lPYmplY3QoaXQpKVxuICAgICwgcmVzdWx0ID0gW11cbiAgICAsIGkgICAgICA9IDBcbiAgICAsIGtleTtcbiAgd2hpbGUobmFtZXMubGVuZ3RoID4gaSl7XG4gICAgaWYoaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIChJU19PUCA/IGhhcyhPYmplY3RQcm90bywga2V5KSA6IHRydWUpKXJlc3VsdC5wdXNoKEFsbFN5bWJvbHNba2V5XSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8vIDE5LjQuMS4xIFN5bWJvbChbZGVzY3JpcHRpb25dKVxuaWYoIVVTRV9OQVRJVkUpe1xuICAkU3ltYm9sID0gZnVuY3Rpb24gU3ltYm9sKCl7XG4gICAgaWYodGhpcyBpbnN0YW5jZW9mICRTeW1ib2wpdGhyb3cgVHlwZUVycm9yKCdTeW1ib2wgaXMgbm90IGEgY29uc3RydWN0b3IhJyk7XG4gICAgdmFyIHRhZyA9IHVpZChhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7XG4gICAgdmFyICRzZXQgPSBmdW5jdGlvbih2YWx1ZSl7XG4gICAgICBpZih0aGlzID09PSBPYmplY3RQcm90bykkc2V0LmNhbGwoT1BTeW1ib2xzLCB2YWx1ZSk7XG4gICAgICBpZihoYXModGhpcywgSElEREVOKSAmJiBoYXModGhpc1tISURERU5dLCB0YWcpKXRoaXNbSElEREVOXVt0YWddID0gZmFsc2U7XG4gICAgICBzZXRTeW1ib2xEZXNjKHRoaXMsIHRhZywgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xuICAgIH07XG4gICAgaWYoREVTQ1JJUFRPUlMgJiYgc2V0dGVyKXNldFN5bWJvbERlc2MoT2JqZWN0UHJvdG8sIHRhZywge2NvbmZpZ3VyYWJsZTogdHJ1ZSwgc2V0OiAkc2V0fSk7XG4gICAgcmV0dXJuIHdyYXAodGFnKTtcbiAgfTtcbiAgcmVkZWZpbmUoJFN5bWJvbFtQUk9UT1RZUEVdLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpe1xuICAgIHJldHVybiB0aGlzLl9rO1xuICB9KTtcblxuICAkR09QRC5mID0gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbiAgJERQLmYgICA9ICRkZWZpbmVQcm9wZXJ0eTtcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mID0gZ09QTkV4dC5mID0gJGdldE93blByb3BlcnR5TmFtZXM7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1waWUnKS5mICA9ICRwcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKS5mID0gJGdldE93blByb3BlcnR5U3ltYm9scztcblxuICBpZihERVNDUklQVE9SUyAmJiAhcmVxdWlyZSgnLi9fbGlicmFyeScpKXtcbiAgICByZWRlZmluZShPYmplY3RQcm90bywgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJywgJHByb3BlcnR5SXNFbnVtZXJhYmxlLCB0cnVlKTtcbiAgfVxuXG4gIHdrc0V4dC5mID0gZnVuY3Rpb24obmFtZSl7XG4gICAgcmV0dXJuIHdyYXAod2tzKG5hbWUpKTtcbiAgfVxufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7U3ltYm9sOiAkU3ltYm9sfSk7XG5cbmZvcih2YXIgc3ltYm9scyA9IChcbiAgLy8gMTkuNC4yLjIsIDE5LjQuMi4zLCAxOS40LjIuNCwgMTkuNC4yLjYsIDE5LjQuMi44LCAxOS40LjIuOSwgMTkuNC4yLjEwLCAxOS40LjIuMTEsIDE5LjQuMi4xMiwgMTkuNC4yLjEzLCAxOS40LjIuMTRcbiAgJ2hhc0luc3RhbmNlLGlzQ29uY2F0U3ByZWFkYWJsZSxpdGVyYXRvcixtYXRjaCxyZXBsYWNlLHNlYXJjaCxzcGVjaWVzLHNwbGl0LHRvUHJpbWl0aXZlLHRvU3RyaW5nVGFnLHVuc2NvcGFibGVzJ1xuKS5zcGxpdCgnLCcpLCBpID0gMDsgc3ltYm9scy5sZW5ndGggPiBpOyApd2tzKHN5bWJvbHNbaSsrXSk7XG5cbmZvcih2YXIgc3ltYm9scyA9ICRrZXlzKHdrcy5zdG9yZSksIGkgPSAwOyBzeW1ib2xzLmxlbmd0aCA+IGk7ICl3a3NEZWZpbmUoc3ltYm9sc1tpKytdKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ1N5bWJvbCcsIHtcbiAgLy8gMTkuNC4yLjEgU3ltYm9sLmZvcihrZXkpXG4gICdmb3InOiBmdW5jdGlvbihrZXkpe1xuICAgIHJldHVybiBoYXMoU3ltYm9sUmVnaXN0cnksIGtleSArPSAnJylcbiAgICAgID8gU3ltYm9sUmVnaXN0cnlba2V5XVxuICAgICAgOiBTeW1ib2xSZWdpc3RyeVtrZXldID0gJFN5bWJvbChrZXkpO1xuICB9LFxuICAvLyAxOS40LjIuNSBTeW1ib2wua2V5Rm9yKHN5bSlcbiAga2V5Rm9yOiBmdW5jdGlvbiBrZXlGb3Ioa2V5KXtcbiAgICBpZihpc1N5bWJvbChrZXkpKXJldHVybiBrZXlPZihTeW1ib2xSZWdpc3RyeSwga2V5KTtcbiAgICB0aHJvdyBUeXBlRXJyb3Ioa2V5ICsgJyBpcyBub3QgYSBzeW1ib2whJyk7XG4gIH0sXG4gIHVzZVNldHRlcjogZnVuY3Rpb24oKXsgc2V0dGVyID0gdHJ1ZTsgfSxcbiAgdXNlU2ltcGxlOiBmdW5jdGlvbigpeyBzZXR0ZXIgPSBmYWxzZTsgfVxufSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsICdPYmplY3QnLCB7XG4gIC8vIDE5LjEuMi4yIE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbiAgY3JlYXRlOiAkY3JlYXRlLFxuICAvLyAxOS4xLjIuNCBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcbiAgZGVmaW5lUHJvcGVydHk6ICRkZWZpbmVQcm9wZXJ0eSxcbiAgLy8gMTkuMS4yLjMgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcylcbiAgZGVmaW5lUHJvcGVydGllczogJGRlZmluZVByb3BlcnRpZXMsXG4gIC8vIDE5LjEuMi42IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUClcbiAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFxuICAvLyAxOS4xLjIuNyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxuICBnZXRPd25Qcm9wZXJ0eU5hbWVzOiAkZ2V0T3duUHJvcGVydHlOYW1lcyxcbiAgLy8gMTkuMS4yLjggT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhPKVxuICBnZXRPd25Qcm9wZXJ0eVN5bWJvbHM6ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHNcbn0pO1xuXG4vLyAyNC4zLjIgSlNPTi5zdHJpbmdpZnkodmFsdWUgWywgcmVwbGFjZXIgWywgc3BhY2VdXSlcbiRKU09OICYmICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKCFVU0VfTkFUSVZFIHx8ICRmYWlscyhmdW5jdGlvbigpe1xuICB2YXIgUyA9ICRTeW1ib2woKTtcbiAgLy8gTVMgRWRnZSBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMge31cbiAgLy8gV2ViS2l0IGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyBudWxsXG4gIC8vIFY4IHRocm93cyBvbiBib3hlZCBzeW1ib2xzXG4gIHJldHVybiBfc3RyaW5naWZ5KFtTXSkgIT0gJ1tudWxsXScgfHwgX3N0cmluZ2lmeSh7YTogU30pICE9ICd7fScgfHwgX3N0cmluZ2lmeShPYmplY3QoUykpICE9ICd7fSc7XG59KSksICdKU09OJywge1xuICBzdHJpbmdpZnk6IGZ1bmN0aW9uIHN0cmluZ2lmeShpdCl7XG4gICAgaWYoaXQgPT09IHVuZGVmaW5lZCB8fCBpc1N5bWJvbChpdCkpcmV0dXJuOyAvLyBJRTggcmV0dXJucyBzdHJpbmcgb24gdW5kZWZpbmVkXG4gICAgdmFyIGFyZ3MgPSBbaXRdXG4gICAgICAsIGkgICAgPSAxXG4gICAgICAsIHJlcGxhY2VyLCAkcmVwbGFjZXI7XG4gICAgd2hpbGUoYXJndW1lbnRzLmxlbmd0aCA+IGkpYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICByZXBsYWNlciA9IGFyZ3NbMV07XG4gICAgaWYodHlwZW9mIHJlcGxhY2VyID09ICdmdW5jdGlvbicpJHJlcGxhY2VyID0gcmVwbGFjZXI7XG4gICAgaWYoJHJlcGxhY2VyIHx8ICFpc0FycmF5KHJlcGxhY2VyKSlyZXBsYWNlciA9IGZ1bmN0aW9uKGtleSwgdmFsdWUpe1xuICAgICAgaWYoJHJlcGxhY2VyKXZhbHVlID0gJHJlcGxhY2VyLmNhbGwodGhpcywga2V5LCB2YWx1ZSk7XG4gICAgICBpZighaXNTeW1ib2wodmFsdWUpKXJldHVybiB2YWx1ZTtcbiAgICB9O1xuICAgIGFyZ3NbMV0gPSByZXBsYWNlcjtcbiAgICByZXR1cm4gX3N0cmluZ2lmeS5hcHBseSgkSlNPTiwgYXJncyk7XG4gIH1cbn0pO1xuXG4vLyAxOS40LjMuNCBTeW1ib2wucHJvdG90eXBlW0BAdG9QcmltaXRpdmVdKGhpbnQpXG4kU3ltYm9sW1BST1RPVFlQRV1bVE9fUFJJTUlUSVZFXSB8fCByZXF1aXJlKCcuL19oaWRlJykoJFN5bWJvbFtQUk9UT1RZUEVdLCBUT19QUklNSVRJVkUsICRTeW1ib2xbUFJPVE9UWVBFXS52YWx1ZU9mKTtcbi8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKCRTeW1ib2wsICdTeW1ib2wnKTtcbi8vIDIwLjIuMS45IE1hdGhbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKE1hdGgsICdNYXRoJywgdHJ1ZSk7XG4vLyAyNC4zLjMgSlNPTltAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoZ2xvYmFsLkpTT04sICdKU09OJywgdHJ1ZSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zeW1ib2wuanNcbi8vIG1vZHVsZSBpZCA9IDEzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDQgOCAxMCAxNCAyNCAyNSAyOCAzMSAzMiAzNiAzNyA0OCA0OSA1MSA1MiA1MyA1NCA1NSA1NiA1NyA1OCA2MSA2MyA2NCA2NSA3MCA3MiA3MyA3OCA4MSIsInZhciBNRVRBICAgICA9IHJlcXVpcmUoJy4vX3VpZCcpKCdtZXRhJylcbiAgLCBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgaGFzICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIHNldERlc2MgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZlxuICAsIGlkICAgICAgID0gMDtcbnZhciBpc0V4dGVuc2libGUgPSBPYmplY3QuaXNFeHRlbnNpYmxlIHx8IGZ1bmN0aW9uKCl7XG4gIHJldHVybiB0cnVlO1xufTtcbnZhciBGUkVFWkUgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gaXNFeHRlbnNpYmxlKE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyh7fSkpO1xufSk7XG52YXIgc2V0TWV0YSA9IGZ1bmN0aW9uKGl0KXtcbiAgc2V0RGVzYyhpdCwgTUVUQSwge3ZhbHVlOiB7XG4gICAgaTogJ08nICsgKytpZCwgLy8gb2JqZWN0IElEXG4gICAgdzoge30gICAgICAgICAgLy8gd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfX0pO1xufTtcbnZhciBmYXN0S2V5ID0gZnVuY3Rpb24oaXQsIGNyZWF0ZSl7XG4gIC8vIHJldHVybiBwcmltaXRpdmUgd2l0aCBwcmVmaXhcbiAgaWYoIWlzT2JqZWN0KGl0KSlyZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnID8gaXQgOiAodHlwZW9mIGl0ID09ICdzdHJpbmcnID8gJ1MnIDogJ1AnKSArIGl0O1xuICBpZighaGFzKGl0LCBNRVRBKSl7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZighaXNFeHRlbnNpYmxlKGl0KSlyZXR1cm4gJ0YnO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYoIWNyZWF0ZSlyZXR1cm4gJ0UnO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBvYmplY3QgSURcbiAgfSByZXR1cm4gaXRbTUVUQV0uaTtcbn07XG52YXIgZ2V0V2VhayA9IGZ1bmN0aW9uKGl0LCBjcmVhdGUpe1xuICBpZighaGFzKGl0LCBNRVRBKSl7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZighaXNFeHRlbnNpYmxlKGl0KSlyZXR1cm4gdHJ1ZTtcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmKCFjcmVhdGUpcmV0dXJuIGZhbHNlO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBoYXNoIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH0gcmV0dXJuIGl0W01FVEFdLnc7XG59O1xuLy8gYWRkIG1ldGFkYXRhIG9uIGZyZWV6ZS1mYW1pbHkgbWV0aG9kcyBjYWxsaW5nXG52YXIgb25GcmVlemUgPSBmdW5jdGlvbihpdCl7XG4gIGlmKEZSRUVaRSAmJiBtZXRhLk5FRUQgJiYgaXNFeHRlbnNpYmxlKGl0KSAmJiAhaGFzKGl0LCBNRVRBKSlzZXRNZXRhKGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciBtZXRhID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gIEtFWTogICAgICBNRVRBLFxuICBORUVEOiAgICAgZmFsc2UsXG4gIGZhc3RLZXk6ICBmYXN0S2V5LFxuICBnZXRXZWFrOiAgZ2V0V2VhayxcbiAgb25GcmVlemU6IG9uRnJlZXplXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWV0YS5qc1xuLy8gbW9kdWxlIGlkID0gMTM1XG4vLyBtb2R1bGUgY2h1bmtzID0gNCA4IDEwIDE0IDI0IDI1IDI4IDMxIDMyIDM2IDM3IDQ4IDQ5IDUxIDUyIDUzIDU0IDU1IDU2IDU3IDU4IDYxIDYzIDY0IDY1IDcwIDcyIDczIDc4IDgxIiwidmFyIGdsb2JhbCAgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjb3JlICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIExJQlJBUlkgICAgICAgID0gcmVxdWlyZSgnLi9fbGlicmFyeScpXG4gICwgd2tzRXh0ICAgICAgICAgPSByZXF1aXJlKCcuL193a3MtZXh0JylcbiAgLCBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG5hbWUpe1xuICB2YXIgJFN5bWJvbCA9IGNvcmUuU3ltYm9sIHx8IChjb3JlLlN5bWJvbCA9IExJQlJBUlkgPyB7fSA6IGdsb2JhbC5TeW1ib2wgfHwge30pO1xuICBpZihuYW1lLmNoYXJBdCgwKSAhPSAnXycgJiYgIShuYW1lIGluICRTeW1ib2wpKWRlZmluZVByb3BlcnR5KCRTeW1ib2wsIG5hbWUsIHt2YWx1ZTogd2tzRXh0LmYobmFtZSl9KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzZcbi8vIG1vZHVsZSBjaHVua3MgPSA0IDggMTAgMTQgMjQgMjUgMjggMzEgMzIgMzYgMzcgNDggNDkgNTEgNTIgNTMgNTQgNTUgNTYgNTcgNTggNjEgNjMgNjQgNjUgNzAgNzIgNzMgNzggODEiLCJ2YXIgZ2V0S2V5cyAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKVxuICAsIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0LCBlbCl7XG4gIHZhciBPICAgICAgPSB0b0lPYmplY3Qob2JqZWN0KVxuICAgICwga2V5cyAgID0gZ2V0S2V5cyhPKVxuICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAsIGluZGV4ICA9IDBcbiAgICAsIGtleTtcbiAgd2hpbGUobGVuZ3RoID4gaW5kZXgpaWYoT1trZXkgPSBrZXlzW2luZGV4KytdXSA9PT0gZWwpcmV0dXJuIGtleTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19rZXlvZi5qc1xuLy8gbW9kdWxlIGlkID0gMTM3XG4vLyBtb2R1bGUgY2h1bmtzID0gNCA4IDEwIDE0IDI0IDI1IDI4IDMxIDMyIDM2IDM3IDQ4IDQ5IDUxIDUyIDUzIDU0IDU1IDU2IDU3IDU4IDYxIDYzIDY0IDY1IDcwIDcyIDczIDc4IDgxIiwiLy8gYWxsIGVudW1lcmFibGUgb2JqZWN0IGtleXMsIGluY2x1ZGVzIHN5bWJvbHNcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKVxuICAsIGdPUFMgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpXG4gICwgcElFICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgcmVzdWx0ICAgICA9IGdldEtleXMoaXQpXG4gICAgLCBnZXRTeW1ib2xzID0gZ09QUy5mO1xuICBpZihnZXRTeW1ib2xzKXtcbiAgICB2YXIgc3ltYm9scyA9IGdldFN5bWJvbHMoaXQpXG4gICAgICAsIGlzRW51bSAgPSBwSUUuZlxuICAgICAgLCBpICAgICAgID0gMFxuICAgICAgLCBrZXk7XG4gICAgd2hpbGUoc3ltYm9scy5sZW5ndGggPiBpKWlmKGlzRW51bS5jYWxsKGl0LCBrZXkgPSBzeW1ib2xzW2krK10pKXJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDEzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDQgOCAxMCAxNCAyNCAyNSAyOCAzMSAzMiAzNiAzNyA0OCA0OSA1MSA1MiA1MyA1NCA1NSA1NiA1NyA1OCA2MSA2MyA2NCA2NSA3MCA3MiA3MyA3OCA4MSIsIi8vIDcuMi4yIElzQXJyYXkoYXJndW1lbnQpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheShhcmcpe1xuICByZXR1cm4gY29mKGFyZykgPT0gJ0FycmF5Jztcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gMTM5XG4vLyBtb2R1bGUgY2h1bmtzID0gNCA4IDEwIDE0IDI0IDI1IDI4IDMxIDMyIDM2IDM3IDQ4IDQ5IDUxIDUyIDUzIDU0IDU1IDU2IDU3IDU4IDYxIDYzIDY0IDY1IDcwIDcyIDczIDc4IDgxIiwiLy8gZmFsbGJhY2sgZm9yIElFMTEgYnVnZ3kgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgd2l0aCBpZnJhbWUgYW5kIHdpbmRvd1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIGdPUE4gICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZlxuICAsIHRvU3RyaW5nICA9IHt9LnRvU3RyaW5nO1xuXG52YXIgd2luZG93TmFtZXMgPSB0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdyAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc1xuICA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHdpbmRvdykgOiBbXTtcblxudmFyIGdldFdpbmRvd05hbWVzID0gZnVuY3Rpb24oaXQpe1xuICB0cnkge1xuICAgIHJldHVybiBnT1BOKGl0KTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gd2luZG93TmFtZXMuc2xpY2UoKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMuZiA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpe1xuICByZXR1cm4gd2luZG93TmFtZXMgJiYgdG9TdHJpbmcuY2FsbChpdCkgPT0gJ1tvYmplY3QgV2luZG93XScgPyBnZXRXaW5kb3dOYW1lcyhpdCkgOiBnT1BOKHRvSU9iamVjdChpdCkpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4tZXh0LmpzXG4vLyBtb2R1bGUgaWQgPSAxNDBcbi8vIG1vZHVsZSBjaHVua3MgPSA0IDggMTAgMTQgMjQgMjUgMjggMzEgMzIgMzYgMzcgNDggNDkgNTEgNTIgNTMgNTQgNTUgNTYgNTcgNTggNjEgNjMgNjQgNjUgNzAgNzIgNzMgNzggODEiLCIvLyAxOS4xLjIuNyAvIDE1LjIuMy40IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG52YXIgJGtleXMgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJylcbiAgLCBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpLmNvbmNhdCgnbGVuZ3RoJywgJ3Byb3RvdHlwZScpO1xuXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKE8pe1xuICByZXR1cm4gJGtleXMoTywgaGlkZGVuS2V5cyk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4uanNcbi8vIG1vZHVsZSBpZCA9IDE0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDQgOCAxMCAxNCAyNCAyNSAyOCAzMSAzMiAzNiAzNyA0OCA0OSA1MSA1MiA1MyA1NCA1NSA1NiA1NyA1OCA2MSA2MyA2NCA2NSA3MCA3MiA3MyA3OCA4MSIsInZhciBwSUUgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKVxuICAsIGNyZWF0ZURlc2MgICAgID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpXG4gICwgdG9JT2JqZWN0ICAgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCB0b1ByaW1pdGl2ZSAgICA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpXG4gICwgaGFzICAgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKVxuICAsIGdPUEQgICAgICAgICAgID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGdPUEQgOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCl7XG4gIE8gPSB0b0lPYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgaWYoSUU4X0RPTV9ERUZJTkUpdHJ5IHtcbiAgICByZXR1cm4gZ09QRChPLCBQKTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICBpZihoYXMoTywgUCkpcmV0dXJuIGNyZWF0ZURlc2MoIXBJRS5mLmNhbGwoTywgUCksIE9bUF0pO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BkLmpzXG4vLyBtb2R1bGUgaWQgPSAxNDJcbi8vIG1vZHVsZSBjaHVua3MgPSA0IDggMTAgMTQgMjQgMjUgMjggMzEgMzIgMzYgMzcgNDggNDkgNTEgNTIgNTMgNTQgNTUgNTYgNTcgNTggNjEgNjMgNjQgNjUgNzAgNzIgNzMgNzggODEiLCJyZXF1aXJlKCcuL193a3MtZGVmaW5lJykoJ2FzeW5jSXRlcmF0b3InKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gMTQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gNCA4IDEwIDE0IDI0IDI1IDI4IDMxIDMyIDM2IDM3IDQ4IDQ5IDUxIDUyIDUzIDU0IDU1IDU2IDU3IDU4IDYxIDYzIDY0IDY1IDcwIDcyIDczIDc4IDgxIiwicmVxdWlyZSgnLi9fd2tzLWRlZmluZScpKCdvYnNlcnZhYmxlJyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wub2JzZXJ2YWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gMTQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gNCA4IDEwIDE0IDI0IDI1IDI4IDMxIDMyIDM2IDM3IDQ4IDQ5IDUxIDUyIDUzIDU0IDU1IDU2IDU3IDU4IDYxIDYzIDY0IDY1IDcwIDcyIDczIDc4IDgxIiwicmVxdWlyZShcIi4vcHJvZHVjdC1saXN0LWl0ZW0ud2VcIilcbnJlcXVpcmUoXCIuL3RyYW5zZmVyLWxpc3QtaXRlbS53ZVwiKVxudmFyIF9fd2VleF90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi9wcm9kdWN0LWxpc3Qud2VcIilcbnZhciBfX3dlZXhfc3R5bGVfXyA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c3R5bGVzIS4vcHJvZHVjdC1saXN0LndlXCIpXG52YXIgX193ZWV4X3NjcmlwdF9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL3NjcmlwdC5qcyFiYWJlbC1sb2FkZXI/cHJlc2V0c1tdPUM6XFxcXHZiYW9saS13ZWV4XFxcXHZiYW9saVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcHJlc2V0LWVzMjAxNSZwcmVzZXRzPUM6XFxcXHZiYW9saS13ZWV4XFxcXHZiYW9saVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcHJlc2V0LWVzMjAxNSZwbHVnaW5zW109QzpcXFxcdmJhb2xpLXdlZXhcXFxcdmJhb2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmcGx1Z2lucz1DOlxcXFx2YmFvbGktd2VleFxcXFx2YmFvbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZjb21tZW50cz1mYWxzZSEuLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c2NyaXB0cyEuL3Byb2R1Y3QtbGlzdC53ZVwiKVxuXG5fX3dlZXhfZGVmaW5lX18oJ0B3ZWV4LWNvbXBvbmVudC9wcm9kdWN0LWxpc3QnLCBbXSwgZnVuY3Rpb24oX193ZWV4X3JlcXVpcmVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X21vZHVsZV9fKSB7XG5cbiAgICBfX3dlZXhfc2NyaXB0X18oX193ZWV4X21vZHVsZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfcmVxdWlyZV9fKVxuICAgIGlmIChfX3dlZXhfZXhwb3J0c19fLl9fZXNNb2R1bGUgJiYgX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0KSB7XG4gICAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cyA9IF9fd2VleF9leHBvcnRzX18uZGVmYXVsdFxuICAgIH1cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnRlbXBsYXRlID0gX193ZWV4X3RlbXBsYXRlX19cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnN0eWxlID0gX193ZWV4X3N0eWxlX19cblxufSlcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2luY2x1ZGUvcHJvZHVjdC1saXN0LndlXG4vLyBtb2R1bGUgaWQgPSAzMjZcbi8vIG1vZHVsZSBjaHVua3MgPSA3MCA3OCA4MSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJkaXZcIixcbiAgXCJjbGFzc0xpc3RcIjogW1xuICAgIFwiY29udGVudFwiXG4gIF0sXG4gIFwiY2hpbGRyZW5cIjogW1xuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcInByb2R1Y3QtbGlzdFwiLFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJwcm9kdWN0SXRlbVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMucHJvZHVjdEl0ZW19XG4gICAgICB9XG4gICAgfVxuICBdXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi9zcmMvbW9kdWxlcy9ib3Jyb3cvc3VwcGx5Q2hhaW4vc3VwcGx5Q2hhaW5MaXN0LndlXG4vLyBtb2R1bGUgaWQgPSAzNDRcbi8vIG1vZHVsZSBjaHVua3MgPSA3OCIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcImNvbnRlbnRcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwidG9wXCI6IDAsXG4gICAgXCJsZWZ0XCI6IDAsXG4gICAgXCJyaWdodFwiOiAwLFxuICAgIFwiYm90dG9tXCI6IDBcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vd2VleC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c3R5bGVzIS4vc3JjL21vZHVsZXMvYm9ycm93L3N1cHBseUNoYWluL3N1cHBseUNoYWluTGlzdC53ZVxuLy8gbW9kdWxlIGlkID0gMzQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gNzgiLCI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxyXG4gICAgICAgIDxwcm9kdWN0LWxpc3QgcHJvZHVjdC1pdGVtPVwie3twcm9kdWN0SXRlbX19XCI+PC9wcm9kdWN0LWxpc3Q+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzdHlsZT5cclxuLmNvbnRlbnQgeyBwb3NpdGlvbjphYnNvbHV0ZTsgdG9wOiAwOyBsZWZ0OiAwOyByaWdodDogMDsgYm90dG9tOiAwOyB9XHJcbjwvc3R5bGU+XHJcbjxzY3JpcHQ+XHJcbnJlcXVpcmUoJ3dlZXgtY29tcG9uZW50cycpO1xyXG5yZXF1aXJlKCcuLi8uLi8uLi9pbmNsdWRlL3Byb2R1Y3QtbGlzdC53ZScpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgcHJvZHVjdEl0ZW06IFtcclxuICAgICAgICAgICAgeyBpc05ldzogdHJ1ZSwgdGl0bGU6ICflkKcnLCBwZXJjZW50OiA4LCBtb250aDogMSwgcHJvZHVjdFByb2dyZXNzOiA1NiwgcGF5bWVudE1ldGhvZDogJ+S4gOasoee7k+a4hScgfSxcclxuICAgICAgICAgICAgeyBpc05ldzogZmFsc2UsIHRpdGxlOiAn5Zi75Zi7JywgcGVyY2VudDogMzAsIG1vbnRoOiAxLCBwcm9kdWN0UHJvZ3Jlc3M6IDEyLCBwYXltZW50TWV0aG9kOiAn5LiA5qyh57uT5riFJyB9LFxyXG4gICAgICAgICAgICB7IGlzTmV3OiBmYWxzZSwgdGl0bGU6ICflmLvlmLsnLCBwZXJjZW50OiAzMCwgbW9udGg6IDEsIHByb2R1Y3RQcm9ncmVzczogMTIsIHBheW1lbnRNZXRob2Q6ICfkuIDmrKHnu5PmuIUnIH0sXHJcbiAgICAgICAgICAgIHsgaXNOZXc6IGZhbHNlLCB0aXRsZTogJ+WYu+WYuycsIHBlcmNlbnQ6IDMwLCBtb250aDogMSwgcHJvZHVjdFByb2dyZXNzOiAxMiwgcGF5bWVudE1ldGhvZDogJ+S4gOasoee7k+a4hScgfSxcclxuICAgICAgICAgICAgeyBpc05ldzogZmFsc2UsIHRpdGxlOiAn5Zi75Zi7JywgcGVyY2VudDogMzAsIG1vbnRoOiAxLCBwcm9kdWN0UHJvZ3Jlc3M6IDEyLCBwYXltZW50TWV0aG9kOiAn5LiA5qyh57uT5riFJyB9LFxyXG4gICAgICAgICAgICB7IGlzTmV3OiBmYWxzZSwgdGl0bGU6ICflmLvlmLsnLCBwZXJjZW50OiAzMCwgbW9udGg6IDEsIHByb2R1Y3RQcm9ncmVzczogMTIsIHBheW1lbnRNZXRob2Q6ICfkuIDmrKHnu5PmuIUnIH0sXHJcbiAgICAgICAgICAgIHsgaXNOZXc6IGZhbHNlLCB0aXRsZTogJ+aBjeaBjScsIHBlcmNlbnQ6IDMwLCBtb250aDogMTIsIHByb2R1Y3RQcm9ncmVzczogMCwgcGF5bWVudE1ldGhvZDogJ+S4gOasoee7k+a4hScgfSxcclxuICAgICAgICBdXHJcbiAgICB9XHJcbn1cclxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21vZHVsZXMvYm9ycm93L3N1cHBseUNoYWluL3N1cHBseUNoYWluTGlzdC53ZT80ZjlkYTlkNiJdLCJzb3VyY2VSb290IjoiIn0=