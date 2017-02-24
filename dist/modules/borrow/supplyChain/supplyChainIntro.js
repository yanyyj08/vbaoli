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
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(340)
	var __weex_style__ = __webpack_require__(341)
	
	__weex_define__('@weex-component/632b2d039680c1508959dddad44cae79', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})
	
	__weex_bootstrap__('@weex-component/632b2d039680c1508959dddad44cae79',undefined,undefined)

/***/ },

/***/ 340:
/***/ function(module, exports) {

	module.exports = {
	  "type": "scroll",
	  "classList": [
	    "wrapper"
	  ],
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "title"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "icon-title"
	          ]
	        },
	        {
	          "type": "text",
	          "attr": {
	            "value": "明星优选"
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "rules"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "rules-text"
	          ],
	          "attr": {
	            "value": "华联保利网依照严格风控标准，通过对借款企业资质及信用审核借款项目真实性审核、风险保障措施审核三重筛选最大限度降低投资风险，为投资人提供的高固定收益加项目浮动分红奖励、低风险、稳健型明星借款项目产品(主要为大型国际贸易供应链项目)。项目浮动分红奖励会在投资到期时根据项目实际运营盈利情况，按约定打入投资者账户。"
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "title"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "icon-title"
	          ]
	        },
	        {
	          "type": "text",
	          "attr": {
	            "value": "明星优选的优势"
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "rules"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "rules-text"
	          ],
	          "attr": {
	            "value": "1.超低风险：明星优选的借款企业均为国内知名企业，项目也均为有政府政策支持的大型国际贸易项目，并提供多重保障机制。"
	          }
	        }
	      ]
	    },
	    {
	      "type": "image",
	      "attr": {
	        "src": "/images/supply-pic01.png"
	      },
	      "style": {
	        "marginLeft": 219,
	        "width": 232,
	        "height": 234
	      }
	    },
	    {
	      "type": "div",
	      "classList": [
	        "rules"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "rules-text"
	          ],
	          "attr": {
	            "value": "2.高固定收益+浮动分红：投资人与知名借款企业的需求直接对接，省去多种环节成本，投资人除可获得高固定收益外，更可获得浮动贸易盈利分红奖励。"
	          }
	        }
	      ]
	    },
	    {
	      "type": "image",
	      "attr": {
	        "src": "/images/supply-pic02.png"
	      },
	      "style": {
	        "marginLeft": 197,
	        "width": 276,
	        "height": 210
	      }
	    },
	    {
	      "type": "div",
	      "classList": [
	        "rules"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "rules-text"
	          ],
	          "attr": {
	            "value": "3.担保保障：知名企业对用户投资明星优选产品承担本息全额担保，在合同规定时效内对借款企业的债务提供连带责任保证。"
	          }
	        }
	      ]
	    },
	    {
	      "type": "image",
	      "attr": {
	        "src": "/images/supply-pic03.png"
	      },
	      "style": {
	        "marginLeft": 230,
	        "width": 210,
	        "height": 174
	      }
	    },
	    {
	      "type": "div",
	      "classList": [
	        "rules"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "rules-text"
	          ],
	          "attr": {
	            "value": "4.抵押保障：借款企业必须向投资者提供货品动产抵押的风险保障。"
	          }
	        }
	      ]
	    },
	    {
	      "type": "image",
	      "attr": {
	        "src": "/images/supply-pic04.png"
	      },
	      "style": {
	        "marginLeft": 226,
	        "width": 218,
	        "height": 158
	      }
	    },
	    {
	      "type": "div",
	      "classList": [
	        "title"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "icon-title"
	          ]
	        },
	        {
	          "type": "text",
	          "attr": {
	            "value": "明星优选模式图"
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "rules"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "rules-text"
	          ],
	          "attr": {
	            "value": "用户通过第三方支付平台充值资金，通过认购明星优选计划投资至借款企业。由借款企业的知名关联企业为投资用户提供本息全额担保，若借款企业发生逾期或还款违约，则由关联担保企业对投资用户先行代偿。"
	          }
	        }
	      ]
	    },
	    {
	      "type": "image",
	      "attr": {
	        "src": "/images/supply-pic05.png"
	      },
	      "style": {
	        "marginLeft": 31,
	        "width": 608,
	        "height": 522
	      }
	    }
	  ]
	}

/***/ },

/***/ 341:
/***/ function(module, exports) {

	module.exports = {
	  "wrapper": {
	    "padding": 40,
	    "width": 750,
	    "backgroundColor": "#ffffff"
	  },
	  "title": {
	    "flexDirection": "row",
	    "fontSize": 32
	  },
	  "icon-title": {
	    "marginRight": 22,
	    "width": 4,
	    "height": 36,
	    "backgroundColor": "#ff9125"
	  },
	  "rules": {
	    "paddingTop": 32,
	    "paddingBottom": 32
	  },
	  "rules-text": {
	    "fontSize": 24,
	    "lineHeight": 30
	  }
	}

/***/ }

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNzJlMWFmMGJmYmQ0M2Q4NjAzODU/ODU0YSoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9ib3Jyb3cvc3VwcGx5Q2hhaW4vc3VwcGx5Q2hhaW5JbnRyby53ZSIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9ib3Jyb3cvc3VwcGx5Q2hhaW4vc3VwcGx5Q2hhaW5JbnRyby53ZT81YWRmIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2JvcnJvdy9zdXBwbHlDaGFpbi9zdXBwbHlDaGFpbkludHJvLndlPzAwODEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDdENBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsRUFBQzs7QUFFRCwyRjs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7O0FDaE9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRSIsImZpbGUiOiJtb2R1bGVzXFxib3Jyb3dcXHN1cHBseUNoYWluXFxzdXBwbHlDaGFpbkludHJvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNzJlMWFmMGJmYmQ0M2Q4NjAzODUiLCJ2YXIgX193ZWV4X3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL3N1cHBseUNoYWluSW50cm8ud2VcIilcbnZhciBfX3dlZXhfc3R5bGVfXyA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c3R5bGVzIS4vc3VwcGx5Q2hhaW5JbnRyby53ZVwiKVxuXG5fX3dlZXhfZGVmaW5lX18oJ0B3ZWV4LWNvbXBvbmVudC82MzJiMmQwMzk2ODBjMTUwODk1OWRkZGFkNDRjYWU3OScsIFtdLCBmdW5jdGlvbihfX3dlZXhfcmVxdWlyZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfbW9kdWxlX18pIHtcblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnRlbXBsYXRlID0gX193ZWV4X3RlbXBsYXRlX19cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnN0eWxlID0gX193ZWV4X3N0eWxlX19cblxufSlcblxuX193ZWV4X2Jvb3RzdHJhcF9fKCdAd2VleC1jb21wb25lbnQvNjMyYjJkMDM5NjgwYzE1MDg5NTlkZGRhZDQ0Y2FlNzknLHVuZGVmaW5lZCx1bmRlZmluZWQpXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbW9kdWxlcy9ib3Jyb3cvc3VwcGx5Q2hhaW4vc3VwcGx5Q2hhaW5JbnRyby53ZT9lbnRyeT10cnVlXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gNzYiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ0eXBlXCI6IFwic2Nyb2xsXCIsXG4gIFwiY2xhc3NMaXN0XCI6IFtcbiAgICBcIndyYXBwZXJcIlxuICBdLFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJ0aXRsZVwiXG4gICAgICBdLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJpY29uLXRpdGxlXCJcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogXCLmmI7mmJ/kvJjpgIlcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwicnVsZXNcIlxuICAgICAgXSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwicnVsZXMtdGV4dFwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIuWNjuiBlOS/neWIqee9keS+neeFp+S4peagvOmjjuaOp+agh+WHhu+8jOmAmui/h+WvueWAn+asvuS8geS4mui1hOi0qOWPiuS/oeeUqOWuoeaguOWAn+asvumhueebruecn+WunuaAp+WuoeaguOOAgemjjumZqeS/nemanOaOquaWveWuoeaguOS4iemHjeetm+mAieacgOWkp+mZkOW6pumZjeS9juaKlei1hOmjjumZqe+8jOS4uuaKlei1hOS6uuaPkOS+m+eahOmrmOWbuuWumuaUtuebiuWKoOmhueebrua1ruWKqOWIhue6ouWlluWKseOAgeS9jumjjumZqeOAgeeos+WBpeWei+aYjuaYn+WAn+asvumhueebruS6p+WTgSjkuLvopoHkuLrlpKflnovlm73pmYXotLjmmJPkvpvlupTpk77pobnnm64p44CC6aG555uu5rWu5Yqo5YiG57qi5aWW5Yqx5Lya5Zyo5oqV6LWE5Yiw5pyf5pe25qC55o2u6aG555uu5a6e6ZmF6L+Q6JCl55uI5Yip5oOF5Ya177yM5oyJ57qm5a6a5omT5YWl5oqV6LWE6ICF6LSm5oi344CCXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcInRpdGxlXCJcbiAgICAgIF0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcImljb24tdGl0bGVcIlxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIuaYjuaYn+S8mOmAieeahOS8mOWKv1wiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJydWxlc1wiXG4gICAgICBdLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJydWxlcy10ZXh0XCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IFwiMS7otoXkvY7po47pmanvvJrmmI7mmJ/kvJjpgInnmoTlgJ/mrL7kvIHkuJrlnYfkuLrlm73lhoXnn6XlkI3kvIHkuJrvvIzpobnnm67kuZ/lnYfkuLrmnInmlL/lupzmlL/nrZbmlK/mjIHnmoTlpKflnovlm73pmYXotLjmmJPpobnnm67vvIzlubbmj5DkvpvlpJrph43kv53pmpzmnLrliLbjgIJcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwic3JjXCI6IFwiL2ltYWdlcy9zdXBwbHktcGljMDEucG5nXCJcbiAgICAgIH0sXG4gICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgXCJtYXJnaW5MZWZ0XCI6IDIxOSxcbiAgICAgICAgXCJ3aWR0aFwiOiAyMzIsXG4gICAgICAgIFwiaGVpZ2h0XCI6IDIzNFxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwicnVsZXNcIlxuICAgICAgXSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwicnVsZXMtdGV4dFwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIjIu6auY5Zu65a6a5pS255uKK+a1ruWKqOWIhue6ou+8muaKlei1hOS6uuS4juefpeWQjeWAn+asvuS8geS4mueahOmcgOaxguebtOaOpeWvueaOpe+8jOecgeWOu+WkmuenjeeOr+iKguaIkOacrO+8jOaKlei1hOS6uumZpOWPr+iOt+W+l+mrmOWbuuWumuaUtuebiuWklu+8jOabtOWPr+iOt+W+l+a1ruWKqOi0uOaYk+ebiOWIqeWIhue6ouWlluWKseOAglwiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJpbWFnZVwiLFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJzcmNcIjogXCIvaW1hZ2VzL3N1cHBseS1waWMwMi5wbmdcIlxuICAgICAgfSxcbiAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICBcIm1hcmdpbkxlZnRcIjogMTk3LFxuICAgICAgICBcIndpZHRoXCI6IDI3NixcbiAgICAgICAgXCJoZWlnaHRcIjogMjEwXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJydWxlc1wiXG4gICAgICBdLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJydWxlcy10ZXh0XCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IFwiMy7mi4Xkv53kv53pmpzvvJrnn6XlkI3kvIHkuJrlr7nnlKjmiLfmipXotYTmmI7mmJ/kvJjpgInkuqflk4Hmib/mi4XmnKzmga/lhajpop3mi4Xkv53vvIzlnKjlkIjlkIzop4Tlrprml7bmlYjlhoXlr7nlgJ/mrL7kvIHkuJrnmoTlgLrliqHmj5Dkvpvov57luKbotKPku7vkv53or4HjgIJcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwic3JjXCI6IFwiL2ltYWdlcy9zdXBwbHktcGljMDMucG5nXCJcbiAgICAgIH0sXG4gICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgXCJtYXJnaW5MZWZ0XCI6IDIzMCxcbiAgICAgICAgXCJ3aWR0aFwiOiAyMTAsXG4gICAgICAgIFwiaGVpZ2h0XCI6IDE3NFxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwicnVsZXNcIlxuICAgICAgXSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwicnVsZXMtdGV4dFwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIjQu5oq15oq85L+d6Zqc77ya5YCf5qy+5LyB5Lia5b+F6aG75ZCR5oqV6LWE6ICF5o+Q5L6b6LSn5ZOB5Yqo5Lqn5oq15oq855qE6aOO6Zmp5L+d6Zqc44CCXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcInNyY1wiOiBcIi9pbWFnZXMvc3VwcGx5LXBpYzA0LnBuZ1wiXG4gICAgICB9LFxuICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgIFwibWFyZ2luTGVmdFwiOiAyMjYsXG4gICAgICAgIFwid2lkdGhcIjogMjE4LFxuICAgICAgICBcImhlaWdodFwiOiAxNThcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcInRpdGxlXCJcbiAgICAgIF0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcImljb24tdGl0bGVcIlxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIuaYjuaYn+S8mOmAieaooeW8j+WbvlwiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJydWxlc1wiXG4gICAgICBdLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJydWxlcy10ZXh0XCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IFwi55So5oi36YCa6L+H56ys5LiJ5pa55pSv5LuY5bmz5Y+w5YWF5YC86LWE6YeR77yM6YCa6L+H6K6k6LSt5piO5pif5LyY6YCJ6K6h5YiS5oqV6LWE6Iez5YCf5qy+5LyB5Lia44CC55Sx5YCf5qy+5LyB5Lia55qE55+l5ZCN5YWz6IGU5LyB5Lia5Li65oqV6LWE55So5oi35o+Q5L6b5pys5oGv5YWo6aKd5ouF5L+d77yM6Iul5YCf5qy+5LyB5Lia5Y+R55Sf6YC+5pyf5oiW6L+Y5qy+6L+d57qm77yM5YiZ55Sx5YWz6IGU5ouF5L+d5LyB5Lia5a+55oqV6LWE55So5oi35YWI6KGM5Luj5YG/44CCXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcInNyY1wiOiBcIi9pbWFnZXMvc3VwcGx5LXBpYzA1LnBuZ1wiXG4gICAgICB9LFxuICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgIFwibWFyZ2luTGVmdFwiOiAzMSxcbiAgICAgICAgXCJ3aWR0aFwiOiA2MDgsXG4gICAgICAgIFwiaGVpZ2h0XCI6IDUyMlxuICAgICAgfVxuICAgIH1cbiAgXVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vc3JjL21vZHVsZXMvYm9ycm93L3N1cHBseUNoYWluL3N1cHBseUNoYWluSW50cm8ud2Vcbi8vIG1vZHVsZSBpZCA9IDM0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDc2IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwid3JhcHBlclwiOiB7XG4gICAgXCJwYWRkaW5nXCI6IDQwLFxuICAgIFwid2lkdGhcIjogNzUwLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gIH0sXG4gIFwidGl0bGVcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwiZm9udFNpemVcIjogMzJcbiAgfSxcbiAgXCJpY29uLXRpdGxlXCI6IHtcbiAgICBcIm1hcmdpblJpZ2h0XCI6IDIyLFxuICAgIFwid2lkdGhcIjogNCxcbiAgICBcImhlaWdodFwiOiAzNixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZjkxMjVcIlxuICB9LFxuICBcInJ1bGVzXCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogMzIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IDMyXG4gIH0sXG4gIFwicnVsZXMtdGV4dFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiAyNCxcbiAgICBcImxpbmVIZWlnaHRcIjogMzBcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vd2VleC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c3R5bGVzIS4vc3JjL21vZHVsZXMvYm9ycm93L3N1cHBseUNoYWluL3N1cHBseUNoYWluSW50cm8ud2Vcbi8vIG1vZHVsZSBpZCA9IDM0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDc2Il0sInNvdXJjZVJvb3QiOiIifQ==