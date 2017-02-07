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

	var __weex_template__ = __webpack_require__(10)
	var __weex_style__ = __webpack_require__(11)
	var __weex_script__ = __webpack_require__(12)
	
	__weex_define__('@weex-component/72d25adf5eefd9937c1c4d29a966971a', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})
	
	__weex_bootstrap__('@weex-component/72d25adf5eefd9937c1c4d29a966971a',undefined,undefined)

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
/* 10 */
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
/* 11 */
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
/* 12 */
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


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYTdhMmY1NmNjZmJmMmJhOWFhOWE/MDBlYyoqKiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jbHVkZS90cmFuc2Zlci1saXN0LWl0ZW0ud2U/ODdjNyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jbHVkZS90cmFuc2Zlci1saXN0LWl0ZW0ud2U/MGNlNioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luY2x1ZGUvdHJhbnNmZXItbGlzdC1pdGVtLndlPzQ4ZjQqIiwid2VicGFjazovLy8uL3NyYy9pbmNsdWRlL3RyYW5zZmVyLWxpc3QtaXRlbS53ZT82MDhiKiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ3RDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsRUFBQzs7QUFFRCwyRjs7Ozs7Ozs7Ozs7Ozs7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVztBQUNYO0FBQ0EsbUNBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBbUI7QUFDbkI7QUFDQSwyQ0FBMEM7QUFDMUM7QUFDQSxrQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW1CO0FBQ25CO0FBQ0EsMkNBQTBDO0FBQzFDO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW1CO0FBQ25CO0FBQ0EsMkNBQTBDO0FBQzFDO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZTtBQUNmO0FBQ0EsdUNBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7O0FDNU5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7OztBQ25DQTs7dUJBR0E7Z0JBQ0E7b0JBQ0E7Z0JBQ0E7a0JBQ0E7bUJBQ0E7d0JBQ0E7d0JBQ0E7MEJBRUE7QUFWQTtpQ0F1QkE7eURBRUE7O3lCQUNBOzhCQUNBO2dCQUNBOzBCQUNBOztpREFDQTs7bURBQ0E7O3VEQUNBOztrREFFQTs7QUFDQTtBQUNBOzt1Q0FHQSxDQUdBO0FBTEE7O0FBdENBIiwiZmlsZSI6ImluY2x1ZGVcXHRyYW5zZmVyLWxpc3QtaXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGE3YTJmNTZjY2ZiZjJiYTlhYTlhIiwidmFyIF9fd2VleF90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi90cmFuc2Zlci1saXN0LWl0ZW0ud2VcIilcbnZhciBfX3dlZXhfc3R5bGVfXyA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c3R5bGVzIS4vdHJhbnNmZXItbGlzdC1pdGVtLndlXCIpXG52YXIgX193ZWV4X3NjcmlwdF9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL3NjcmlwdC5qcyFiYWJlbC1sb2FkZXI/cHJlc2V0c1tdPUM6XFxcXHZiYW9saS13ZWV4XFxcXHZiYW9saVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcHJlc2V0LWVzMjAxNSZwcmVzZXRzPUM6XFxcXHZiYW9saS13ZWV4XFxcXHZiYW9saVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtcHJlc2V0LWVzMjAxNSZwbHVnaW5zW109QzpcXFxcdmJhb2xpLXdlZXhcXFxcdmJhb2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmcGx1Z2lucz1DOlxcXFx2YmFvbGktd2VleFxcXFx2YmFvbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZjb21tZW50cz1mYWxzZSEuLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c2NyaXB0cyEuL3RyYW5zZmVyLWxpc3QtaXRlbS53ZVwiKVxuXG5fX3dlZXhfZGVmaW5lX18oJ0B3ZWV4LWNvbXBvbmVudC83MmQyNWFkZjVlZWZkOTkzN2MxYzRkMjlhOTY2OTcxYScsIFtdLCBmdW5jdGlvbihfX3dlZXhfcmVxdWlyZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfbW9kdWxlX18pIHtcblxuICAgIF9fd2VleF9zY3JpcHRfXyhfX3dlZXhfbW9kdWxlX18sIF9fd2VleF9leHBvcnRzX18sIF9fd2VleF9yZXF1aXJlX18pXG4gICAgaWYgKF9fd2VleF9leHBvcnRzX18uX19lc01vZHVsZSAmJiBfX3dlZXhfZXhwb3J0c19fLmRlZmF1bHQpIHtcbiAgICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzID0gX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0XG4gICAgfVxuXG4gICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMudGVtcGxhdGUgPSBfX3dlZXhfdGVtcGxhdGVfX1xuXG4gICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMuc3R5bGUgPSBfX3dlZXhfc3R5bGVfX1xuXG59KVxuXG5fX3dlZXhfYm9vdHN0cmFwX18oJ0B3ZWV4LWNvbXBvbmVudC83MmQyNWFkZjVlZWZkOTkzN2MxYzRkMjlhOTY2OTcxYScsdW5kZWZpbmVkLHVuZGVmaW5lZClcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbmNsdWRlL3RyYW5zZmVyLWxpc3QtaXRlbS53ZT9lbnRyeT10cnVlXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJkaXZcIixcbiAgXCJjbGFzc0xpc3RcIjogW1xuICAgIFwiY29udGVudFwiXG4gIF0sXG4gIFwiY2hpbGRyZW5cIjogW1xuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImgzXCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwicDAxXCJcbiAgICAgIF0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgICAgIFwiZm9udFNpemVcIjogMjhcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy50aXRsZX1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcInAwMlwiXG4gICAgICBdLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcImQwMVwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICAgICAgICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgICAgICAgICAgICAgIFwiYWxpZ25JdGVtc1wiOiBcImZsZXgtZW5kXCIsXG4gICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcIiNmZjY1MzFcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJmb250U2l6ZVwiOiA0NFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnBlcmNlbnR9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJtYXJnaW5MZWZ0XCI6IDQsXG4gICAgICAgICAgICAgICAgICAgIFwibWFyZ2luQm90dG9tXCI6IDQsXG4gICAgICAgICAgICAgICAgICAgIFwiZm9udFNpemVcIjogMThcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwiJVwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICAgICAgICAgIFwibWFyZ2luVG9wXCI6IDE2LFxuICAgICAgICAgICAgICAgIFwiZm9udFNpemVcIjogMTgsXG4gICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcIiM5OTk5OTlcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLpooTmnJ/lubTmlLbnm4rnjodcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJkMDNcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICBcIndpZHRoXCI6IDEwMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgICAgICAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICAgICAgICAgICAgICBcImFsaWduSXRlbXNcIjogXCJmbGV4LWVuZFwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwiIzExMTExMVwiLFxuICAgICAgICAgICAgICAgICAgICBcImZvbnRTaXplXCI6IDM2XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMubGFzdFRpbWV9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJtYXJnaW5Cb3R0b21cIjogNixcbiAgICAgICAgICAgICAgICAgICAgXCJmb250U2l6ZVwiOiAyMFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLlpKlcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgICAgICAgICBcIm1hcmdpblRvcFwiOiA4LFxuICAgICAgICAgICAgICAgIFwiZm9udFNpemVcIjogMjAsXG4gICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcIiM5OTk5OTlcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLliankvZnmnJ/pmZBcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJkMDNcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgICAgICAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICAgICAgICAgICAgICBcImFsaWduSXRlbXNcIjogXCJmbGV4LWVuZFwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwiIzExMTExMVwiLFxuICAgICAgICAgICAgICAgICAgICBcImZvbnRTaXplXCI6IDM2XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudHJhbnNmZXJNb25leX1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICAgICAgICAgICAgICBcIm1hcmdpbkJvdHRvbVwiOiA2LFxuICAgICAgICAgICAgICAgICAgICBcImZvbnRTaXplXCI6IDIwXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICAgICAgICAgIFwibWFyZ2luVG9wXCI6IDgsXG4gICAgICAgICAgICAgICAgXCJmb250U2l6ZVwiOiAyMCxcbiAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwiIzk5OTk5OVwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIui9rOiuqemHkeminVwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcImQwNFwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcImludmVzdC1idG5cIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgXCJjbGlja1wiOiBcInRvSW52ZXN0XCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgXCJmb250U2l6ZVwiOiAyMlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLnq4vljbPmipXotYRcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJkMDQtdDAxXCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJtYXJnaW5Ub3BcIjogMTAsXG4gICAgICAgICAgICAgICAgXCJmb250U2l6ZVwiOiAyMCxcbiAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwiIzk5OTk5OVwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuICfov5jmrL7mlrnlvI86JyArICh0aGlzLnBheW1lbnRNZXRob2QpfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICBdXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi9zcmMvaW5jbHVkZS90cmFuc2Zlci1saXN0LWl0ZW0ud2Vcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAzIDE3IDI1IDI4IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiY29udGVudFwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogMzAsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiA0MCxcbiAgICBcImhlaWdodFwiOiAyODAsXG4gICAgXCJib3JkZXJXaWR0aFwiOiAxLFxuICAgIFwiYm9yZGVyU3R5bGVcIjogXCJzb2xpZFwiLFxuICAgIFwiYm9yZGVyQ29sb3JcIjogXCIjZGRkZGRkXCIsXG4gICAgXCJib3JkZXJMZWZ0XCI6IDAsXG4gICAgXCJib3JkZXJSaWdodFwiOiAwLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gIH0sXG4gIFwicDAxXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcImhlaWdodFwiOiA5MCxcbiAgICBcImNvbG9yXCI6IFwiIzExMTExMVwiLFxuICAgIFwiYm9yZGVyQm90dG9tXCI6IFwiMXB4IHNvbGlkICNkZGRcIlxuICB9LFxuICBcImljb25cIjoge1xuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IDIwLFxuICAgIFwid2lkdGhcIjogNDAsXG4gICAgXCJoZWlnaHRcIjogNDBcbiAgfSxcbiAgXCJpY29uLW5ld1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKC4uLy4uL2ltYWdlcy9pY29uLW5ldy5wbmcpIG5vLXJlcGVhdCBjZW50ZXJcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IFwiY29udGFpblwiXG4gIH0sXG4gIFwiaWNvbi1vbmVcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybCguLi8uLi9pbWFnZXMvaWNvbi1vbmUucG5nKSBuby1yZXBlYXQgY2VudGVyXCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiBcImNvbnRhaW5cIlxuICB9LFxuICBcImljb24tdGhyZWVcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybCguLi8uLi9pbWFnZXMvaWNvbi10aHJlZS5wbmcpIG5vLXJlcGVhdCBjZW50ZXJcIixcbiAgICBcImJhY2tncm91bmRTaXplXCI6IFwiY29udGFpblwiXG4gIH0sXG4gIFwiaWNvbi1oYWxmLXllYXJcIjoge1xuICAgIFwiYmFja2dyb3VuZFwiOiBcInVybCguLi8uLi9pbWFnZXMvaWNvbi1oYWxmLXllYXIucG5nKSBuby1yZXBlYXQgY2VudGVyXCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiBcImNvbnRhaW5cIlxuICB9LFxuICBcImljb24teWVhclwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kXCI6IFwidXJsKC4uLy4uL2ltYWdlcy9pY29uLXllYXIucG5nKSBuby1yZXBlYXQgY2VudGVyXCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiBcImNvbnRhaW5cIlxuICB9LFxuICBcInAwMlwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcInNwYWNlLWJldHdlZW5cIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcImhlaWdodFwiOiAxODZcbiAgfSxcbiAgXCJkMDFcIjoge1xuICAgIFwid2lkdGhcIjogMTUwXG4gIH0sXG4gIFwiZDAyXCI6IHtcbiAgICBcIndpZHRoXCI6IDIxMCxcbiAgICBcImhlaWdodFwiOiAxMDAsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZjFmMWYxXCJcbiAgfSxcbiAgXCJkMDNcIjoge1xuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwid2lkdGhcIjogMTEwLFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCJkMDRcIjoge1xuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwid2lkdGhcIjogMjQwLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcImludmVzdC1idG5cIjoge1xuICAgIFwid2lkdGhcIjogMTY2LFxuICAgIFwiaGVpZ2h0XCI6IDU4LFxuICAgIFwibGluZUhlaWdodFwiOiA1OCxcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogOCxcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZjkxMjVcIlxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi9zcmMvaW5jbHVkZS90cmFuc2Zlci1saXN0LWl0ZW0ud2Vcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAzIDE3IDI1IDI4IiwiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cclxuICAgICAgICA8aDMgY2xhc3M9XCJwMDFcIj48L2k+PHRleHQgc3R5bGU9XCJmb250LXNpemU6IDI4cHg7XCI+e3t0aXRsZX19PC90ZXh0PjwvaDM+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInAwMlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZDAxXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwiZmxleC1kaXJlY3Rpb246IHJvdzsgYWxpZ24taXRlbXM6IGZsZXgtZW5kOyBjb2xvcjogI2ZmNjUzMTtcIj48dGV4dCBzdHlsZT1cImZvbnQtc2l6ZTogNDRweDtcIj57e3BlcmNlbnR9fTwvdGV4dD48dGV4dCBzdHlsZT1cIm1hcmdpbi1sZWZ0OiA0cHg7IG1hcmdpbi1ib3R0b206IDRweDsgZm9udC1zaXplOiAxOHB4O1wiPiU8L3RleHQ+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8dGV4dCBzdHlsZT1cIm1hcmdpbi10b3A6IDE2cHg7IGZvbnQtc2l6ZTogMThweDsgY29sb3I6ICM5OTk7XCI+6aKE5pyf5bm05pS255uK546HPC90ZXh0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQwM1wiIHN0eWxlPVwid2lkdGg6IDEwMHB4O1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cImZsZXgtZGlyZWN0aW9uOiByb3c7IGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcIj48dGV4dCBzdHlsZT1cImNvbG9yOiAjMTExOyBmb250LXNpemU6IDM2cHg7XCI+e3tsYXN0VGltZX19PC90ZXh0Pjx0ZXh0IHN0eWxlPVwibWFyZ2luLWJvdHRvbTogNnB4OyBmb250LXNpemU6IDIwcHg7XCI+5aSpPC90ZXh0PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHRleHQgc3R5bGU9XCJtYXJnaW4tdG9wOiA4cHg7IGZvbnQtc2l6ZTogMjBweDsgY29sb3I6ICM5OTk7XCI+5Ymp5L2Z5pyf6ZmQPC90ZXh0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQwM1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cImZsZXgtZGlyZWN0aW9uOiByb3c7IGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcIj48dGV4dCBzdHlsZT1cImNvbG9yOiAjMTExOyBmb250LXNpemU6IDM2cHg7XCI+e3t0cmFuc2Zlck1vbmV5fX08L3RleHQ+PHRleHQgc3R5bGU9XCJtYXJnaW4tYm90dG9tOiA2cHg7IGZvbnQtc2l6ZTogMjBweDtcIj48L3RleHQ+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8dGV4dCBzdHlsZT1cIm1hcmdpbi10b3A6IDhweDsgZm9udC1zaXplOiAyMHB4OyBjb2xvcjogIzk5OTtcIj7ovazorqnph5Hpop08L3RleHQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZDA0XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW52ZXN0LWJ0blwiIG9uY2xpY2s9XCJ0b0ludmVzdFwiPjx0ZXh0IHN0eWxlPVwiZGlzcGxheTogZmxleDsgZm9udC1zaXplOiAyMnB4O1wiPueri+WNs+aKlei1hDwvdGV4dD48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwhLS08ZGl2IGlmPVwiaW52ZXN0U3RhdHVzID09IDJcIiBjbGFzcz1cImludmVzdC1idG4gdW5hYmxlXCI+PHRleHQ+5oqV5qCH57uT5p2fPC90ZXh0PjwvZGl2Pi0tPlxyXG4gICAgICAgICAgICAgICAgPCEtLTxkaXYgaWY9XCJpbnZlc3RTdGF0dXMgPT0gM1wiIGNsYXNzPVwiaW52ZXN0LWJ0biB1bmFibGVcIj48dGV4dD7nrYnlvoXlvIDlp4s8L3RleHQ+PC9kaXY+LS0+XHJcbiAgICAgICAgICAgICAgICA8dGV4dCBjbGFzcz1cImQwNC10MDFcIiBzdHlsZT1cIiBtYXJnaW4tdG9wOiAxMHB4OyBmb250LXNpemU6IDIwcHg7IGNvbG9yOiAjOTk5O1wiPui/mOasvuaWueW8jzp7e3BheW1lbnRNZXRob2R9fTwvdGV4dD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzdHlsZT5cclxuLmNvbnRlbnQgeyBwb3NpdGlvbjogcmVsYXRpdmU7IG1hcmdpbi10b3A6IDMwcHg7IHBhZGRpbmctbGVmdDogNDBweDsgaGVpZ2h0OiAyODBweDsgYm9yZGVyLXdpZHRoOiAxcHg7IGJvcmRlci1zdHlsZTogc29saWQ7IGJvcmRlci1jb2xvcjogI2RkZDsgYm9yZGVyLWxlZnQ6IDA7IGJvcmRlci1yaWdodDogMDsgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgfVxyXG4ucDAxIHsgZmxleC1kaXJlY3Rpb246IHJvdzsgYWxpZ24taXRlbXM6IGNlbnRlcjsgaGVpZ2h0OiA5MHB4OyBjb2xvcjogIzExMTsgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7IH1cclxuLmljb24geyBkaXNwbGF5OiBmbGV4OyBtYXJnaW4tcmlnaHQ6IDIwcHg7IHdpZHRoOiA0MHB4OyBoZWlnaHQ6IDQwcHg7IH1cclxuLmljb24tbmV3IHsgYmFja2dyb3VuZDogdXJsKC4uLy4uL2ltYWdlcy9pY29uLW5ldy5wbmcpIG5vLXJlcGVhdCBjZW50ZXI7IGJhY2tncm91bmQtc2l6ZTogY29udGFpbjsgfVxyXG4uaWNvbi1vbmUgeyBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vaW1hZ2VzL2ljb24tb25lLnBuZykgbm8tcmVwZWF0IGNlbnRlcjsgYmFja2dyb3VuZC1zaXplOiBjb250YWluOyB9XHJcbi5pY29uLXRocmVlIHsgYmFja2dyb3VuZDogdXJsKC4uLy4uL2ltYWdlcy9pY29uLXRocmVlLnBuZykgbm8tcmVwZWF0IGNlbnRlcjsgYmFja2dyb3VuZC1zaXplOiBjb250YWluOyB9XHJcbi5pY29uLWhhbGYteWVhciB7IGJhY2tncm91bmQ6IHVybCguLi8uLi9pbWFnZXMvaWNvbi1oYWxmLXllYXIucG5nKSBuby1yZXBlYXQgY2VudGVyOyBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47IH1cclxuLmljb24teWVhciB7IGJhY2tncm91bmQ6IHVybCguLi8uLi9pbWFnZXMvaWNvbi15ZWFyLnBuZykgbm8tcmVwZWF0IGNlbnRlcjsgYmFja2dyb3VuZC1zaXplOiBjb250YWluOyB9XHJcbi5wMDIgeyBmbGV4LWRpcmVjdGlvbjogcm93OyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGhlaWdodDogMTg2cHg7IH1cclxuLmQwMSB7IHdpZHRoOiAxNTBweDsgfVxyXG4uZDAyIHsgd2lkdGg6IDIxMHB4OyBoZWlnaHQ6IDEwMHB4OyBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxOyB9XHJcbi5kMDMgeyBhbGlnbi1pdGVtczogY2VudGVyOyB3aWR0aDogMTEwcHg7IHRleHQtYWxpZ246IGNlbnRlcjsgfVxyXG4uZDA0IHsgYWxpZ24taXRlbXM6IGNlbnRlcjsgd2lkdGg6IDI0MHB4OyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjt9XHJcbi5pbnZlc3QtYnRuIHsgd2lkdGg6IDE2NnB4OyBoZWlnaHQ6IDU4cHg7IGxpbmUtaGVpZ2h0OiA1OHB4OyBjb2xvcjogI2ZmZjsgdGV4dC1hbGlnbjogY2VudGVyOyB0ZXh0LWFsaWduOiBjZW50ZXI7IGJvcmRlci1yYWRpdXM6IDhweDsgYmFja2dyb3VuZC1jb2xvcjogI2ZmOTEyNTsgfVxyXG48L3N0eWxlPlxyXG5cclxuPHNjcmlwdD5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgaW52ZXN0U3RhdHVzOiAxLFxyXG4gICAgICAgIGlzTmV3OiBmYWxzZSxcclxuICAgICAgICBpY29uQ2xhc3M6ICduZXcnLFxyXG4gICAgICAgIHRpdGxlOiAn5paw5omL5LiT5LqrJyxcclxuICAgICAgICBwZXJjZW50OiAnMTAuMDAnLFxyXG4gICAgICAgIGxhc3RUaW1lOiAwLFxyXG4gICAgICAgIHRyYW5zZmVyTW9uZXk6IDAsXHJcbiAgICAgICAgcGF5bWVudE1ldGhvZDogJ+S4gOasoee7k+a4hScsXHJcbiAgICAgICAgcHJvZHVjdFByb2dyZXNzOiA1NlxyXG4gICAgfSxcclxuICAgIGNyZWF0ZWQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIC8vIOWIpOaWrei/m+W6puS4jjHlkow5OeeahOWFs+ezu1xyXG4vLyAgICAgICAgdmFyIHByb2dyZXNzID0gTnVtYmVyKHRoaXMucHJvZHVjdFByb2dyZXNzKTtcclxuLy8gICAgICAgIGlmKHByb2dyZXNzID4gMCAmJiBwcm9ncmVzcyA8IDEpIHtcclxuLy8gICAgICAgICAgICB0aGlzLnByb2R1Y3RQcm9ncmVzcyA9IDE7XHJcbi8vICAgICAgICB9IGVsc2UgaWYgKHByb2dyZXNzID4gOTkgJiYgcHJvZ3Jlc3MgPCAxMDApIHtcclxuLy8gICAgICAgICAgICB0aGlzLnByb2R1Y3RQcm9ncmVzcyA9IDk5O1xyXG4vLyAgICAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgICAgICB0aGlzLnByb2R1Y3RQcm9ncmVzcyA9IE1hdGgucm91bmQocHJvZ3Jlc3MpO1xyXG4vLyAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDlubTljJbmlLbnm4rkv53nlZnkuKTkvY3lsI/mlbBcclxuLy8gICAgICAgIHRoaXMucGVyY2VudCA9ICh0aGlzLnBlcmNlbnQpLnRvRml4ZWQoMik7XHJcbiAgICAgICAgICB0aGlzLnRyYW5zZmVyTW9uZXkgPSAodGhpcy50cmFuc2Zlck1vbmV5KS50b0ZpeGVkKDIpO1xyXG4gICAgICAgIC8vIOaWsOaJi+agh+WSjOaciOS7veWbvuagh1xyXG4gICAgICAgIGlmICh0aGlzLmlzTmV3KSB7XHJcbiAgICAgICAgICAgIHRoaXMuaWNvbkNsYXNzID0gJ2ljb24tbmV3JztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzd2l0Y2godGhpcy5tb250aCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOiB0aGlzLmljb25DbGFzcyA9ICdpY29uLW9uZSc7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAzOiB0aGlzLmljb25DbGFzcyA9ICdpY29uLXRocmVlJzsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDY6IHRoaXMuaWNvbkNsYXNzID0gJ2ljb24taGFsZi15ZWFyJzsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDEyOiB0aGlzLmljb25DbGFzcyA9ICdpY29uLXllYXInOyBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgdG9JbnZlc3Q6IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmNsdWRlL3RyYW5zZmVyLWxpc3QtaXRlbS53ZT81MTc0NmJmNiJdLCJzb3VyY2VSb290IjoiIn0=