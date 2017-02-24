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

	var __weex_template__ = __webpack_require__(319)
	var __weex_style__ = __webpack_require__(320)
	
	__weex_define__('@weex-component/5005038039a9791a3777593faa35a0ee', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})
	
	__weex_bootstrap__('@weex-component/5005038039a9791a3777593faa35a0ee',undefined,undefined)

/***/ },

/***/ 319:
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
	            "value": "优选保利"
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
	            "value": "优选保利是华联保利网推出的自动分散投资和自动转让退出的投资计划，华联保利网对借款项目的资产保障严格审核，为投资人进行分散投资和定期赎回，提高小额分散投资的效率，满足投资人多样化的理财需求。该产品适用于华联保利网风险金保障计划。"
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
	            "value": "优选保利的优势"
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
	            "value": "1.即刻计息，到期赎回：系统即刻自动将投资金额分散投资到多个严格审核的优质借款项目中；到期后系统自动转让赎回。"
	          }
	        }
	      ]
	    },
	    {
	      "type": "image",
	      "attr": {
	        "src": "/images/optimized-pic01.png"
	      },
	      "style": {
	        "width": 664,
	        "height": 164
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
	            "value": "2.稳健分散小额投资策略：系统自动分散投资到多个精挑细选的优质小额借款项目，最大化降低投资风险。"
	          }
	        }
	      ]
	    },
	    {
	      "type": "image",
	      "attr": {
	        "src": "/images/optimized-pic02.png"
	      },
	      "style": {
	        "marginLeft": 186,
	        "width": 298,
	        "height": 202
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
	            "value": "3.安全有保障：投资标的为商超供应链借款项目及相关的债权转让优质资产，借款人交易材料真实且经过华联保利网严格审核。"
	          }
	        }
	      ]
	    },
	    {
	      "type": "image",
	      "attr": {
	        "src": "/images/optimized-pic03.png"
	      },
	      "style": {
	        "marginLeft": 232,
	        "width": 206,
	        "height": 204
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
	            "value": "优选保利模式图"
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
	            "value": "1.投资人投资定期保利计划;"
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "rules-text"
	          ],
	          "attr": {
	            "value": "2.系统自动为投资人分散投资多个优质小额借款项目;"
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "rules-text"
	          ],
	          "attr": {
	            "value": "3.资金到达借款人账户，并即时计息，借款人按月付息;"
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "rules-text"
	          ],
	          "attr": {
	            "value": "4.某一借款到期后，系统自动为客户重新进行债权匹配;"
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "rules-text"
	          ],
	          "attr": {
	            "value": "5.借款到期后系统为客户自动转让退出，支付本息给投资人。"
	          }
	        }
	      ]
	    },
	    {
	      "type": "image",
	      "attr": {
	        "src": "/images/optimized-pic04.png"
	      },
	      "style": {
	        "marginLeft": 8,
	        "width": 654,
	        "height": 496
	      }
	    }
	  ]
	}

/***/ },

/***/ 320:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNzJlMWFmMGJmYmQ0M2Q4NjAzODU/ODU0YSoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvYm9ycm93L29wdGltaXplZC9vcHRpbWl6ZWRJbnRyby53ZSIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9ib3Jyb3cvb3B0aW1pemVkL29wdGltaXplZEludHJvLndlPzRjMmUiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvYm9ycm93L29wdGltaXplZC9vcHRpbWl6ZWRJbnRyby53ZT80NGZiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQ3RDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLEVBQUM7O0FBRUQsMkY7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQW9DO0FBQ3BDO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUErQztBQUMvQztBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBZ0Q7QUFDaEQ7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWdEO0FBQ2hEO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7OztBQ3ZPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEUiLCJmaWxlIjoibW9kdWxlc1xcYm9ycm93XFxvcHRpbWl6ZWRcXG9wdGltaXplZEludHJvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNzJlMWFmMGJmYmQ0M2Q4NjAzODUiLCJ2YXIgX193ZWV4X3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL29wdGltaXplZEludHJvLndlXCIpXG52YXIgX193ZWV4X3N0eWxlX18gPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL29wdGltaXplZEludHJvLndlXCIpXG5cbl9fd2VleF9kZWZpbmVfXygnQHdlZXgtY29tcG9uZW50LzUwMDUwMzgwMzlhOTc5MWEzNzc3NTkzZmFhMzVhMGVlJywgW10sIGZ1bmN0aW9uKF9fd2VleF9yZXF1aXJlX18sIF9fd2VleF9leHBvcnRzX18sIF9fd2VleF9tb2R1bGVfXykge1xuXG4gICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMudGVtcGxhdGUgPSBfX3dlZXhfdGVtcGxhdGVfX1xuXG4gICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMuc3R5bGUgPSBfX3dlZXhfc3R5bGVfX1xuXG59KVxuXG5fX3dlZXhfYm9vdHN0cmFwX18oJ0B3ZWV4LWNvbXBvbmVudC81MDA1MDM4MDM5YTk3OTFhMzc3NzU5M2ZhYTM1YTBlZScsdW5kZWZpbmVkLHVuZGVmaW5lZClcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tb2R1bGVzL2JvcnJvdy9vcHRpbWl6ZWQvb3B0aW1pemVkSW50cm8ud2U/ZW50cnk9dHJ1ZVxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDY4IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImRpdlwiLFxuICBcImNsYXNzTGlzdFwiOiBbXG4gICAgXCJ3cmFwcGVyXCJcbiAgXSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwidGl0bGVcIlxuICAgICAgXSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwiaWNvbi10aXRsZVwiXG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IFwi5LyY6YCJ5L+d5YipXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcInJ1bGVzXCJcbiAgICAgIF0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcInJ1bGVzLXRleHRcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogXCLkvJjpgInkv53liKnmmK/ljY7ogZTkv53liKnnvZHmjqjlh7rnmoToh6rliqjliIbmlaPmipXotYTlkozoh6rliqjovazorqnpgIDlh7rnmoTmipXotYTorqHliJLvvIzljY7ogZTkv53liKnnvZHlr7nlgJ/mrL7pobnnm67nmoTotYTkuqfkv53pmpzkuKXmoLzlrqHmoLjvvIzkuLrmipXotYTkurrov5vooYzliIbmlaPmipXotYTlkozlrprmnJ/otY7lm57vvIzmj5Dpq5jlsI/pop3liIbmlaPmipXotYTnmoTmlYjnjofvvIzmu6HotrPmipXotYTkurrlpJrmoLfljJbnmoTnkIbotKLpnIDmsYLjgILor6Xkuqflk4HpgILnlKjkuo7ljY7ogZTkv53liKnnvZHpo47pmanph5Hkv53pmpzorqHliJLjgIJcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwidGl0bGVcIlxuICAgICAgXSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwiaWNvbi10aXRsZVwiXG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IFwi5LyY6YCJ5L+d5Yip55qE5LyY5Yq/XCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcInJ1bGVzXCJcbiAgICAgIF0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcInJ1bGVzLXRleHRcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogXCIxLuWNs+WIu+iuoeaBr++8jOWIsOacn+i1juWbnu+8muezu+e7n+WNs+WIu+iHquWKqOWwhuaKlei1hOmHkemineWIhuaVo+aKlei1hOWIsOWkmuS4quS4peagvOWuoeaguOeahOS8mOi0qOWAn+asvumhueebruS4re+8m+WIsOacn+WQjuezu+e7n+iHquWKqOi9rOiuqei1juWbnuOAglwiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJpbWFnZVwiLFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJzcmNcIjogXCIvaW1hZ2VzL29wdGltaXplZC1waWMwMS5wbmdcIlxuICAgICAgfSxcbiAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICBcIndpZHRoXCI6IDY2NCxcbiAgICAgICAgXCJoZWlnaHRcIjogMTY0XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJydWxlc1wiXG4gICAgICBdLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJydWxlcy10ZXh0XCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IFwiMi7nqLPlgaXliIbmlaPlsI/pop3mipXotYTnrZbnlaXvvJrns7vnu5/oh6rliqjliIbmlaPmipXotYTliLDlpJrkuKrnsr7mjJHnu4bpgInnmoTkvJjotKjlsI/pop3lgJ/mrL7pobnnm67vvIzmnIDlpKfljJbpmY3kvY7mipXotYTpo47pmanjgIJcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwic3JjXCI6IFwiL2ltYWdlcy9vcHRpbWl6ZWQtcGljMDIucG5nXCJcbiAgICAgIH0sXG4gICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgXCJtYXJnaW5MZWZ0XCI6IDE4NixcbiAgICAgICAgXCJ3aWR0aFwiOiAyOTgsXG4gICAgICAgIFwiaGVpZ2h0XCI6IDIwMlxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwicnVsZXNcIlxuICAgICAgXSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwicnVsZXMtdGV4dFwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIjMu5a6J5YWo5pyJ5L+d6Zqc77ya5oqV6LWE5qCH55qE5Li65ZWG6LaF5L6b5bqU6ZO+5YCf5qy+6aG555uu5Y+K55u45YWz55qE5YC65p2D6L2s6K6p5LyY6LSo6LWE5Lqn77yM5YCf5qy+5Lq65Lqk5piT5p2Q5paZ55yf5a6e5LiU57uP6L+H5Y2O6IGU5L+d5Yip572R5Lil5qC85a6h5qC444CCXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcInNyY1wiOiBcIi9pbWFnZXMvb3B0aW1pemVkLXBpYzAzLnBuZ1wiXG4gICAgICB9LFxuICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgIFwibWFyZ2luTGVmdFwiOiAyMzIsXG4gICAgICAgIFwid2lkdGhcIjogMjA2LFxuICAgICAgICBcImhlaWdodFwiOiAyMDRcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcInRpdGxlXCJcbiAgICAgIF0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcImljb24tdGl0bGVcIlxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIuS8mOmAieS/neWIqeaooeW8j+WbvlwiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJydWxlc1wiXG4gICAgICBdLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJydWxlcy10ZXh0XCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IFwiMS7mipXotYTkurrmipXotYTlrprmnJ/kv53liKnorqHliJI7XCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJydWxlcy10ZXh0XCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IFwiMi7ns7vnu5/oh6rliqjkuLrmipXotYTkurrliIbmlaPmipXotYTlpJrkuKrkvJjotKjlsI/pop3lgJ/mrL7pobnnm647XCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJydWxlcy10ZXh0XCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IFwiMy7otYTph5HliLDovr7lgJ/mrL7kurrotKbmiLfvvIzlubbljbPml7borqHmga/vvIzlgJ/mrL7kurrmjInmnIjku5jmga87XCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJydWxlcy10ZXh0XCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IFwiNC7mn5DkuIDlgJ/mrL7liLDmnJ/lkI7vvIzns7vnu5/oh6rliqjkuLrlrqLmiLfph43mlrDov5vooYzlgLrmnYPljLnphY07XCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJydWxlcy10ZXh0XCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IFwiNS7lgJ/mrL7liLDmnJ/lkI7ns7vnu5/kuLrlrqLmiLfoh6rliqjovazorqnpgIDlh7rvvIzmlK/ku5jmnKzmga/nu5nmipXotYTkurrjgIJcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwic3JjXCI6IFwiL2ltYWdlcy9vcHRpbWl6ZWQtcGljMDQucG5nXCJcbiAgICAgIH0sXG4gICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgXCJtYXJnaW5MZWZ0XCI6IDgsXG4gICAgICAgIFwid2lkdGhcIjogNjU0LFxuICAgICAgICBcImhlaWdodFwiOiA0OTZcbiAgICAgIH1cbiAgICB9XG4gIF1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+L3dlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuL34vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/dHlwZT10ZW1wbGF0ZSEuL3NyYy9tb2R1bGVzL2JvcnJvdy9vcHRpbWl6ZWQvb3B0aW1pemVkSW50cm8ud2Vcbi8vIG1vZHVsZSBpZCA9IDMxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDY4IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwid3JhcHBlclwiOiB7XG4gICAgXCJwYWRkaW5nXCI6IDQwLFxuICAgIFwid2lkdGhcIjogNzUwLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gIH0sXG4gIFwidGl0bGVcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwiZm9udFNpemVcIjogMzJcbiAgfSxcbiAgXCJpY29uLXRpdGxlXCI6IHtcbiAgICBcIm1hcmdpblJpZ2h0XCI6IDIyLFxuICAgIFwid2lkdGhcIjogNCxcbiAgICBcImhlaWdodFwiOiAzNixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZjkxMjVcIlxuICB9LFxuICBcInJ1bGVzXCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogMzIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IDMyXG4gIH0sXG4gIFwicnVsZXMtdGV4dFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiAyNCxcbiAgICBcImxpbmVIZWlnaHRcIjogMzBcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vd2VleC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c3R5bGVzIS4vc3JjL21vZHVsZXMvYm9ycm93L29wdGltaXplZC9vcHRpbWl6ZWRJbnRyby53ZVxuLy8gbW9kdWxlIGlkID0gMzIwXG4vLyBtb2R1bGUgY2h1bmtzID0gNjgiXSwic291cmNlUm9vdCI6IiJ9