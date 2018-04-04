(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactBootstrapTable"] = factory(require("react"));
	else
		root["ReactBootstrapTable"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 74);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

if (false) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = require('./factoryWithTypeCheckers')(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(4)();
}


/***/ }),

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  PAGINATION_SIZE: 5,
  PAGE_START_INDEX: 1,
  With_FIRST_AND_LAST: true,
  SHOW_ALL_PAGE_BTNS: false,
  FIRST_PAGE_TEXT: '<<',
  PRE_PAGE_TEXT: '<',
  NEXT_PAGE_TEXT: '>',
  LAST_PAGE_TEXT: '>>',
  NEXT_PAGE_TITLE: 'next page',
  LAST_PAGE_TITLE: 'last page',
  PRE_PAGE_TITLE: 'previous page',
  FIRST_PAGE_TITLE: 'first page',
  SIZE_PER_PAGE_LIST: [10, 25, 30, 50],
  HIDE_SIZE_PER_PAGE: false,
  HIDE_PAGE_LIST_ONLY_ONE_PAGE: false
};

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var emptyFunction = __webpack_require__(5);
var invariant = __webpack_require__(6);
var ReactPropTypesSecret = __webpack_require__(7);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (false) {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _wrapper = __webpack_require__(75);

var _wrapper2 = _interopRequireDefault(_wrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    wrapperFactory: _wrapper2.default,
    options: options
  };
};

/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _const = __webpack_require__(20);

var _const2 = _interopRequireDefault(_const);

var _pagination = __webpack_require__(76);

var _pagination2 = _interopRequireDefault(_pagination);

var _page = __webpack_require__(82);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/prop-types: 0 */


exports.default = function (Base, _ref) {
  var _class, _temp;

  var remoteResolver = _ref.remoteResolver;
  return _temp = _class = function (_remoteResolver) {
    _inherits(PaginationWrapper, _remoteResolver);

    function PaginationWrapper(props) {
      _classCallCheck(this, PaginationWrapper);

      var _this = _possibleConstructorReturn(this, (PaginationWrapper.__proto__ || Object.getPrototypeOf(PaginationWrapper)).call(this, props));

      _this.handleChangePage = _this.handleChangePage.bind(_this);
      _this.handleChangeSizePerPage = _this.handleChangeSizePerPage.bind(_this);

      var currPage = void 0;
      var currSizePerPage = void 0;
      var options = props.pagination.options;

      var sizePerPageList = options.sizePerPageList || _const2.default.SIZE_PER_PAGE_LIST;

      // initialize current page
      if (typeof options.page !== 'undefined') {
        currPage = options.page;
      } else if (typeof options.pageStartIndex !== 'undefined') {
        currPage = options.pageStartIndex;
      } else {
        currPage = _const2.default.PAGE_START_INDEX;
      }

      // initialize current sizePerPage
      if (typeof options.sizePerPage !== 'undefined') {
        currSizePerPage = options.sizePerPage;
      } else if (_typeof(sizePerPageList[0]) === 'object') {
        currSizePerPage = sizePerPageList[0].value;
      } else {
        currSizePerPage = sizePerPageList[0];
      }

      _this.state = { currPage: currPage, currSizePerPage: currSizePerPage };
      _this.saveToStore(currPage, currSizePerPage);
      return _this;
    }

    _createClass(PaginationWrapper, [{
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var needNewState = false;
        var _state = this.state,
            currPage = _state.currPage,
            currSizePerPage = _state.currSizePerPage;
        var _nextProps$pagination = nextProps.pagination.options,
            page = _nextProps$pagination.page,
            sizePerPage = _nextProps$pagination.sizePerPage,
            pageStartIndex = _nextProps$pagination.pageStartIndex,
            onPageChange = _nextProps$pagination.onPageChange;


        if (typeof page !== 'undefined' && currPage !== page) {
          // user defined page
          currPage = page;
          needNewState = true;
        } else if (nextProps.isDataChanged) {
          // user didn't defined page but data change
          currPage = typeof pageStartIndex !== 'undefined' ? pageStartIndex : _const2.default.PAGE_START_INDEX;
          needNewState = true;
        }

        if (typeof sizePerPage !== 'undefined') {
          currSizePerPage = sizePerPage;
          needNewState = true;
        }

        this.saveToStore(currPage, currSizePerPage);

        if (needNewState) {
          if (onPageChange) {
            onPageChange(currPage, currSizePerPage);
          }
          this.setState(function () {
            return { currPage: currPage, currSizePerPage: currSizePerPage };
          });
        }
      }
    }, {
      key: 'saveToStore',
      value: function saveToStore(page, sizePerPage) {
        this.props.store.page = page;
        this.props.store.sizePerPage = sizePerPage;
      }
    }, {
      key: 'handleChangePage',
      value: function handleChangePage(currPage) {
        var currSizePerPage = this.state.currSizePerPage;
        var options = this.props.pagination.options;

        this.saveToStore(currPage, currSizePerPage);

        if (options.onPageChange) {
          options.onPageChange(currPage, currSizePerPage);
        }
        if (this.isRemotePagination()) {
          this.handleRemotePageChange();
          return;
        }
        this.setState(function () {
          return { currPage: currPage };
        });
      }
    }, {
      key: 'handleChangeSizePerPage',
      value: function handleChangeSizePerPage(currSizePerPage, currPage) {
        var options = this.props.pagination.options;

        this.saveToStore(currPage, currSizePerPage);

        if (options.onSizePerPageChange) {
          options.onSizePerPageChange(currSizePerPage, currPage);
        }
        if (this.isRemotePagination()) {
          this.handleRemotePageChange();
          return;
        }
        this.setState(function () {
          return {
            currPage: currPage,
            currSizePerPage: currSizePerPage
          };
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            options = _props.pagination.options,
            store = _props.store;
        var _state2 = this.state,
            currPage = _state2.currPage,
            currSizePerPage = _state2.currSizePerPage;

        var withFirstAndLast = typeof options.withFirstAndLast === 'undefined' ? _const2.default.With_FIRST_AND_LAST : options.withFirstAndLast;
        var alwaysShowAllBtns = typeof options.alwaysShowAllBtns === 'undefined' ? _const2.default.SHOW_ALL_PAGE_BTNS : options.alwaysShowAllBtns;
        var hideSizePerPage = typeof options.hideSizePerPage === 'undefined' ? _const2.default.HIDE_SIZE_PER_PAGE : options.hideSizePerPage;
        var hidePageListOnlyOnePage = typeof options.hidePageListOnlyOnePage === 'undefined' ? _const2.default.HIDE_PAGE_LIST_ONLY_ONE_PAGE : options.hidePageListOnlyOnePage;
        var pageStartIndex = typeof options.pageStartIndex === 'undefined' ? _const2.default.PAGE_START_INDEX : options.pageStartIndex;

        var data = this.isRemotePagination() ? this.props.data : (0, _page.getByCurrPage)(store, pageStartIndex);

        return [_react2.default.createElement(Base, _extends({ key: 'table' }, this.props, { data: data })), _react2.default.createElement(_pagination2.default, {
          key: 'pagination',
          dataSize: options.totalSize || store.data.length,
          currPage: currPage,
          currSizePerPage: currSizePerPage,
          onPageChange: this.handleChangePage,
          onSizePerPageChange: this.handleChangeSizePerPage,
          sizePerPageList: options.sizePerPageList || _const2.default.SIZE_PER_PAGE_LIST,
          paginationSize: options.paginationSize || _const2.default.PAGINATION_SIZE,
          pageStartIndex: pageStartIndex,
          withFirstAndLast: withFirstAndLast,
          alwaysShowAllBtns: alwaysShowAllBtns,
          hideSizePerPage: hideSizePerPage,
          hidePageListOnlyOnePage: hidePageListOnlyOnePage,
          firstPageText: options.firstPageText || _const2.default.FIRST_PAGE_TEXT,
          prePageText: options.prePageText || _const2.default.PRE_PAGE_TEXT,
          nextPageText: options.nextPageText || _const2.default.NEXT_PAGE_TEXT,
          lastPageText: options.lastPageText || _const2.default.LAST_PAGE_TEXT,
          prePageTitle: options.prePageTitle || _const2.default.PRE_PAGE_TITLE,
          nextPageTitle: options.nextPageTitle || _const2.default.NEXT_PAGE_TITLE,
          firstPageTitle: options.firstPageTitle || _const2.default.FIRST_PAGE_TITLE,
          lastPageTitle: options.lastPageTitle || _const2.default.LAST_PAGE_TITLE
        })];
      }
    }]);

    return PaginationWrapper;
  }(remoteResolver(_react.Component)), _class.propTypes = {
    store: _propTypes2.default.object.isRequired
  }, _temp;
};

/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = __webpack_require__(8);

var _classnames2 = _interopRequireDefault(_classnames);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _pageResolver2 = __webpack_require__(77);

var _pageResolver3 = _interopRequireDefault(_pageResolver2);

var _sizePerPageDropdown = __webpack_require__(78);

var _sizePerPageDropdown2 = _interopRequireDefault(_sizePerPageDropdown);

var _paginationList = __webpack_require__(80);

var _paginationList2 = _interopRequireDefault(_paginationList);

var _const = __webpack_require__(20);

var _const2 = _interopRequireDefault(_const);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/require-default-props: 0 */
/* eslint arrow-body-style: 0 */


var Pagination = function (_pageResolver) {
  _inherits(Pagination, _pageResolver);

  function Pagination(props) {
    _classCallCheck(this, Pagination);

    var _this = _possibleConstructorReturn(this, (Pagination.__proto__ || Object.getPrototypeOf(Pagination)).call(this, props));

    _this.closeDropDown = _this.closeDropDown.bind(_this);
    _this.toggleDropDown = _this.toggleDropDown.bind(_this);
    _this.handleChangePage = _this.handleChangePage.bind(_this);
    _this.handleChangeSizePerPage = _this.handleChangeSizePerPage.bind(_this);
    _this.state = _this.initialState();
    return _this;
  }

  _createClass(Pagination, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var dataSize = nextProps.dataSize,
          currSizePerPage = nextProps.currSizePerPage;

      if (currSizePerPage !== this.props.currSizePerPage || dataSize !== this.props.dataSize) {
        var totalPages = this.calculateTotalPage(currSizePerPage, dataSize);
        var lastPage = this.calculateLastPage(totalPages);
        this.setState({ totalPages: totalPages, lastPage: lastPage });
      }
    }
  }, {
    key: 'toggleDropDown',
    value: function toggleDropDown() {
      var dropdownOpen = !this.state.dropdownOpen;
      this.setState(function () {
        return { dropdownOpen: dropdownOpen };
      });
    }
  }, {
    key: 'closeDropDown',
    value: function closeDropDown() {
      this.setState(function () {
        return { dropdownOpen: false };
      });
    }
  }, {
    key: 'handleChangeSizePerPage',
    value: function handleChangeSizePerPage(sizePerPage) {
      var _props = this.props,
          currSizePerPage = _props.currSizePerPage,
          onSizePerPageChange = _props.onSizePerPageChange;

      var selectedSize = typeof sizePerPage === 'string' ? parseInt(sizePerPage, 10) : sizePerPage;
      var currPage = this.props.currPage;

      if (selectedSize !== currSizePerPage) {
        var newTotalPages = this.calculateTotalPage(selectedSize);
        var newLastPage = this.calculateLastPage(newTotalPages);
        if (currPage > newLastPage) currPage = newLastPage;
        onSizePerPageChange(selectedSize, currPage);
      }
      this.closeDropDown();
    }
  }, {
    key: 'handleChangePage',
    value: function handleChangePage(newPage) {
      var page = void 0;
      var _props2 = this.props,
          currPage = _props2.currPage,
          pageStartIndex = _props2.pageStartIndex,
          prePageText = _props2.prePageText,
          nextPageText = _props2.nextPageText,
          lastPageText = _props2.lastPageText,
          firstPageText = _props2.firstPageText,
          onPageChange = _props2.onPageChange;
      var lastPage = this.state.lastPage;


      if (newPage === prePageText) {
        page = this.backToPrevPage();
      } else if (newPage === nextPageText) {
        page = currPage + 1 > lastPage ? lastPage : currPage + 1;
      } else if (newPage === lastPageText) {
        page = lastPage;
      } else if (newPage === firstPageText) {
        page = pageStartIndex;
      } else {
        page = parseInt(newPage, 10);
      }

      // if (keepSizePerPageState) { this.closeDropDown(); }

      if (page !== currPage) {
        onPageChange(page);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          totalPages = _state.totalPages,
          lastPage = _state.lastPage,
          open = _state.dropdownOpen;
      var _props3 = this.props,
          sizePerPageList = _props3.sizePerPageList,
          currSizePerPage = _props3.currSizePerPage,
          hideSizePerPage = _props3.hideSizePerPage,
          hidePageListOnlyOnePage = _props3.hidePageListOnlyOnePage;

      var pages = this.calculatePageStatus(this.calculatePages(totalPages), lastPage);

      var pageListClass = (0, _classnames2.default)('react-bootstrap-table-pagination-list', 'col-md-6 col-xs-6 col-sm-6 col-lg-6', {
        'react-bootstrap-table-pagination-list-hidden': hidePageListOnlyOnePage && totalPages === 1
      });
      return _react2.default.createElement(
        'div',
        { className: 'row react-bootstrap-table-pagination' },
        _react2.default.createElement(
          'div',
          { className: 'col-md-6 col-xs-6 col-sm-6 col-lg-6' },
          sizePerPageList.length > 1 && !hideSizePerPage ? _react2.default.createElement(_sizePerPageDropdown2.default, {
            currSizePerPage: '' + currSizePerPage,
            options: this.calculateSizePerPageStatus(),
            onSizePerPageChange: this.handleChangeSizePerPage,
            onClick: this.toggleDropDown,
            onBlur: this.closeDropDown,
            open: open
          }) : null
        ),
        _react2.default.createElement(
          'div',
          { className: pageListClass },
          _react2.default.createElement(_paginationList2.default, { pages: pages, onPageChange: this.handleChangePage })
        )
      );
    }
  }]);

  return Pagination;
}((0, _pageResolver3.default)(_react.Component));

Pagination.propTypes = {
  dataSize: _propTypes2.default.number.isRequired,
  sizePerPageList: _propTypes2.default.array.isRequired,
  currPage: _propTypes2.default.number.isRequired,
  currSizePerPage: _propTypes2.default.number.isRequired,
  onPageChange: _propTypes2.default.func.isRequired,
  onSizePerPageChange: _propTypes2.default.func.isRequired,
  pageStartIndex: _propTypes2.default.number,
  paginationSize: _propTypes2.default.number,
  firstPageText: _propTypes2.default.string,
  prePageText: _propTypes2.default.string,
  nextPageText: _propTypes2.default.string,
  lastPageText: _propTypes2.default.string,
  nextPageTitle: _propTypes2.default.string,
  prePageTitle: _propTypes2.default.string,
  firstPageTitle: _propTypes2.default.string,
  lastPageTitle: _propTypes2.default.string,
  withFirstAndLast: _propTypes2.default.bool,
  alwaysShowAllBtns: _propTypes2.default.bool,
  hideSizePerPage: _propTypes2.default.bool,
  hidePageListOnlyOnePage: _propTypes2.default.bool
};

Pagination.defaultProps = {
  pageStartIndex: _const2.default.PAGE_START_INDEX,
  paginationSize: _const2.default.PAGINATION_SIZE,
  withFirstAndLast: _const2.default.With_FIRST_AND_LAST,
  alwaysShowAllBtns: _const2.default.SHOW_ALL_PAGE_BTNS,
  firstPageText: _const2.default.FIRST_PAGE_TEXT,
  prePageText: _const2.default.PRE_PAGE_TEXT,
  nextPageText: _const2.default.NEXT_PAGE_TEXT,
  lastPageText: _const2.default.LAST_PAGE_TEXT,
  sizePerPageList: _const2.default.SIZE_PER_PAGE_LIST,
  nextPageTitle: _const2.default.NEXT_PAGE_TITLE,
  prePageTitle: _const2.default.PRE_PAGE_TITLE,
  firstPageTitle: _const2.default.FIRST_PAGE_TITLE,
  lastPageTitle: _const2.default.LAST_PAGE_TITLE,
  hideSizePerPage: _const2.default.HIDE_SIZE_PER_PAGE,
  hidePageListOnlyOnePage: _const2.default.HIDE_PAGE_LIST_ONLY_ONE_PAGE
};

exports.default = Pagination;

/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint no-mixed-operators: 0 */
exports.default = function (ExtendBase) {
  return function (_ExtendBase) {
    _inherits(PageResolver, _ExtendBase);

    function PageResolver() {
      _classCallCheck(this, PageResolver);

      return _possibleConstructorReturn(this, (PageResolver.__proto__ || Object.getPrototypeOf(PageResolver)).apply(this, arguments));
    }

    _createClass(PageResolver, [{
      key: "backToPrevPage",
      value: function backToPrevPage() {
        var _props = this.props,
            currPage = _props.currPage,
            pageStartIndex = _props.pageStartIndex;

        return currPage - 1 < pageStartIndex ? pageStartIndex : currPage - 1;
      }
    }, {
      key: "goToNextPage",
      value: function goToNextPage() {
        var currPage = this.props.currPage;
        var lastPage = this.state.lastPage;

        return currPage + 1 > lastPage ? lastPage : currPage + 1;
      }
    }, {
      key: "initialState",
      value: function initialState() {
        var totalPages = this.calculateTotalPage();
        var lastPage = this.calculateLastPage(totalPages);
        return { totalPages: totalPages, lastPage: lastPage, dropdownOpen: false };
      }
    }, {
      key: "calculateTotalPage",
      value: function calculateTotalPage() {
        var sizePerPage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props.currSizePerPage;
        var dataSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.props.dataSize;

        return Math.ceil(dataSize / sizePerPage);
      }
    }, {
      key: "calculateLastPage",
      value: function calculateLastPage(totalPages) {
        var pageStartIndex = this.props.pageStartIndex;

        return pageStartIndex + totalPages - 1;
      }
    }, {
      key: "calculatePages",
      value: function calculatePages() {
        var totalPages = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state.totalPages;
        var lastPage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state.lastPage;
        var _props2 = this.props,
            currPage = _props2.currPage,
            paginationSize = _props2.paginationSize,
            pageStartIndex = _props2.pageStartIndex,
            withFirstAndLast = _props2.withFirstAndLast,
            firstPageText = _props2.firstPageText,
            prePageText = _props2.prePageText,
            nextPageText = _props2.nextPageText,
            lastPageText = _props2.lastPageText,
            alwaysShowAllBtns = _props2.alwaysShowAllBtns;


        var pages = void 0;
        var endPage = totalPages;
        if (endPage <= 0) return [];

        var startPage = Math.max(currPage - Math.floor(paginationSize / 2), pageStartIndex);
        endPage = startPage + paginationSize - 1;

        if (endPage > lastPage) {
          endPage = lastPage;
          startPage = endPage - paginationSize + 1;
        }

        if (startPage !== pageStartIndex && totalPages > paginationSize && withFirstAndLast) {
          pages = [firstPageText, prePageText];
        } else if (totalPages > 1 || alwaysShowAllBtns) {
          pages = [prePageText];
        } else {
          pages = [];
        }

        for (var i = startPage; i <= endPage; i += 1) {
          if (i >= pageStartIndex) pages.push(i);
        }

        if (endPage <= lastPage && pages.length > 1) {
          pages.push(nextPageText);
        }
        if (endPage !== lastPage && withFirstAndLast) {
          pages.push(lastPageText);
        }
        return pages;
      }
    }, {
      key: "calculatePageStatus",
      value: function calculatePageStatus() {
        var _this2 = this;

        var pages = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var lastPage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state.lastPage;
        var _props3 = this.props,
            currPage = _props3.currPage,
            pageStartIndex = _props3.pageStartIndex,
            firstPageText = _props3.firstPageText,
            prePageText = _props3.prePageText,
            nextPageText = _props3.nextPageText,
            lastPageText = _props3.lastPageText,
            alwaysShowAllBtns = _props3.alwaysShowAllBtns;

        var isStart = function isStart(page) {
          return currPage === pageStartIndex && (page === firstPageText || page === prePageText);
        };
        var isEnd = function isEnd(page) {
          return currPage === lastPage && (page === nextPageText || page === lastPageText);
        };

        return pages.filter(function (page) {
          if (alwaysShowAllBtns) {
            return true;
          }
          return !(isStart(page) || isEnd(page));
        }).map(function (page) {
          var title = void 0;
          var active = page === currPage;
          var disabled = isStart(page) || isEnd(page);

          if (page === nextPageText) {
            title = _this2.props.nextPageTitle;
          } else if (page === prePageText) {
            title = _this2.props.prePageTitle;
          } else if (page === firstPageText) {
            title = _this2.props.firstPageTitle;
          } else if (page === lastPageText) {
            title = _this2.props.lastPageTitle;
          } else {
            title = "" + page;
          }

          return { page: page, active: active, disabled: disabled, title: title };
        });
      }
    }, {
      key: "calculateSizePerPageStatus",
      value: function calculateSizePerPageStatus() {
        var sizePerPageList = this.props.sizePerPageList;

        return sizePerPageList.map(function (_sizePerPage) {
          var pageText = _sizePerPage.text || _sizePerPage;
          var pageNumber = _sizePerPage.value || _sizePerPage;
          return {
            text: "" + pageText,
            page: pageNumber
          };
        });
      }
    }]);

    return PageResolver;
  }(ExtendBase);
};

/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(8);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _sizePerPageOption = __webpack_require__(79);

var _sizePerPageOption2 = _interopRequireDefault(_sizePerPageOption);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sizePerPageDefaultClass = 'react-bs-table-sizePerPage-dropdown';

var SizePerPageDropDown = function SizePerPageDropDown(props) {
  var open = props.open,
      hidden = props.hidden,
      onClick = props.onClick,
      onBlur = props.onBlur,
      options = props.options,
      className = props.className,
      variation = props.variation,
      btnContextual = props.btnContextual,
      currSizePerPage = props.currSizePerPage,
      onSizePerPageChange = props.onSizePerPageChange;


  var dropDownStyle = { visibility: hidden ? 'hidden' : 'visible' };
  var dropdownClasses = (0, _classnames2.default)(open ? 'open show' : '', sizePerPageDefaultClass, variation, className);

  return _react2.default.createElement(
    'span',
    {
      style: dropDownStyle,
      className: dropdownClasses
    },
    _react2.default.createElement(
      'button',
      {
        id: 'pageDropDown',
        className: 'btn ' + btnContextual + ' dropdown-toggle',
        'data-toggle': 'dropdown',
        'aria-expanded': open,
        onClick: onClick,
        onBlur: onBlur
      },
      currSizePerPage,
      _react2.default.createElement(
        'span',
        null,
        ' ',
        _react2.default.createElement('span', { className: 'caret' })
      )
    ),
    _react2.default.createElement(
      'ul',
      { className: 'dropdown-menu', role: 'menu', 'aria-labelledby': 'pageDropDown' },
      options.map(function (option) {
        return _react2.default.createElement(_sizePerPageOption2.default, _extends({}, option, {
          key: option.text,
          onSizePerPageChange: onSizePerPageChange
        }));
      })
    )
  );
};

SizePerPageDropDown.propTypes = {
  currSizePerPage: _propTypes2.default.string.isRequired,
  options: _propTypes2.default.array.isRequired,
  onClick: _propTypes2.default.func.isRequired,
  onBlur: _propTypes2.default.func.isRequired,
  onSizePerPageChange: _propTypes2.default.func.isRequired,
  open: _propTypes2.default.bool,
  hidden: _propTypes2.default.bool,
  btnContextual: _propTypes2.default.string,
  variation: _propTypes2.default.oneOf(['dropdown', 'dropup']),
  className: _propTypes2.default.string
};
SizePerPageDropDown.defaultProps = {
  open: false,
  hidden: false,
  btnContextual: 'btn-default btn-secondary',
  variation: 'dropdown',
  className: ''
};

exports.default = SizePerPageDropDown;

/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint jsx-a11y/href-no-hash: 0 */
var SizePerPageOption = function SizePerPageOption(_ref) {
  var text = _ref.text,
      page = _ref.page,
      onSizePerPageChange = _ref.onSizePerPageChange;
  return _react2.default.createElement(
    'li',
    { key: text, role: 'presentation', className: 'dropdown-item' },
    _react2.default.createElement(
      'a',
      {
        href: '#',
        tabIndex: '-1',
        role: 'menuitem',
        'data-page': page,
        onMouseDown: function onMouseDown(e) {
          e.preventDefault();
          onSizePerPageChange(page);
        }
      },
      text
    )
  );
};

SizePerPageOption.propTypes = {
  text: _propTypes2.default.string.isRequired,
  page: _propTypes2.default.number.isRequired,
  onSizePerPageChange: _propTypes2.default.func.isRequired
};

exports.default = SizePerPageOption;

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _pageButton = __webpack_require__(81);

var _pageButton2 = _interopRequireDefault(_pageButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PaginatonList = function PaginatonList(props) {
  return _react2.default.createElement(
    'ul',
    { className: 'pagination react-bootstrap-table-page-btns-ul' },
    props.pages.map(function (pageProps) {
      return _react2.default.createElement(_pageButton2.default, _extends({
        key: pageProps.page
      }, pageProps, {
        onPageChange: props.onPageChange
      }));
    })
  );
};

PaginatonList.propTypes = {
  pages: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    page: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
    active: _propTypes2.default.bool,
    disable: _propTypes2.default.bool,
    title: _propTypes2.default.string
  })).isRequired,
  onPageChange: _propTypes2.default.func.isRequired
};

exports.default = PaginatonList;

/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = __webpack_require__(8);

var _classnames2 = _interopRequireDefault(_classnames);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint react/require-default-props: 0 */
/* eslint jsx-a11y/href-no-hash: 0 */


var PageButton = function (_Component) {
  _inherits(PageButton, _Component);

  function PageButton(props) {
    _classCallCheck(this, PageButton);

    var _this = _possibleConstructorReturn(this, (PageButton.__proto__ || Object.getPrototypeOf(PageButton)).call(this, props));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(PageButton, [{
    key: 'handleClick',
    value: function handleClick(e) {
      e.preventDefault();
      this.props.onPageChange(this.props.page);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          page = _props.page,
          title = _props.title,
          active = _props.active,
          disabled = _props.disabled;

      var classes = (0, _classnames2.default)({
        active: active,
        disabled: disabled,
        'page-item': true
      });

      return _react2.default.createElement(
        'li',
        { className: classes, title: title },
        _react2.default.createElement(
          'a',
          { href: '#', onClick: this.handleClick, className: 'page-link' },
          page
        )
      );
    }
  }]);

  return PageButton;
}(_react.Component);

PageButton.propTypes = {
  onPageChange: _propTypes2.default.func.isRequired,
  page: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]).isRequired,
  active: _propTypes2.default.bool.isRequired,
  disabled: _propTypes2.default.bool.isRequired,
  title: _propTypes2.default.string
};

exports.default = PageButton;

/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var getByCurrPage = exports.getByCurrPage = function getByCurrPage(store, pageStartIndex) {
  var dataSize = store.data.length;
  if (!dataSize) return [];
  var getNormalizedPage = function getNormalizedPage() {
    var offset = Math.abs(1 - pageStartIndex);
    return store.page + offset;
  };
  var end = getNormalizedPage() * store.sizePerPage - 1;
  var start = end - (store.sizePerPage - 1);

  var result = [];
  for (var i = start; i <= end; i += 1) {
    result.push(store.data[i]);
    if (i + 1 === dataSize) break;
  }
  return result;
};

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA4NzgwZDZhN2E0YWU2MDQ5MGYwNCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImNvbW1vbmpzXCI6XCJyZWFjdFwiLFwiYW1kXCI6XCJyZWFjdFwifSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyLXBhZ2luYXRvci9zcmMvY29uc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mYmpzL2xpYi9lbXB0eUZ1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mYmpzL2xpYi9pbnZhcmlhbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0LmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTItcGFnaW5hdG9yL2luZGV4LmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTItcGFnaW5hdG9yL3NyYy93cmFwcGVyLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTItcGFnaW5hdG9yL3NyYy9wYWdpbmF0aW9uLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTItcGFnaW5hdG9yL3NyYy9wYWdlLXJlc29sdmVyLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTItcGFnaW5hdG9yL3NyYy9zaXplLXBlci1wYWdlLWRyb3Bkb3duLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTItcGFnaW5hdG9yL3NyYy9zaXplLXBlci1wYWdlLW9wdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY2xhc3NuYW1lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyLXBhZ2luYXRvci9zcmMvcGFnaW5hdGlvbi1saXN0LmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTItcGFnaW5hdG9yL3NyYy9wYWdlLWJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyLXBhZ2luYXRvci9zcmMvcGFnZS5qcyJdLCJuYW1lcyI6WyJQQUdJTkFUSU9OX1NJWkUiLCJQQUdFX1NUQVJUX0lOREVYIiwiV2l0aF9GSVJTVF9BTkRfTEFTVCIsIlNIT1dfQUxMX1BBR0VfQlROUyIsIkZJUlNUX1BBR0VfVEVYVCIsIlBSRV9QQUdFX1RFWFQiLCJORVhUX1BBR0VfVEVYVCIsIkxBU1RfUEFHRV9URVhUIiwiTkVYVF9QQUdFX1RJVExFIiwiTEFTVF9QQUdFX1RJVExFIiwiUFJFX1BBR0VfVElUTEUiLCJGSVJTVF9QQUdFX1RJVExFIiwiU0laRV9QRVJfUEFHRV9MSVNUIiwiSElERV9TSVpFX1BFUl9QQUdFIiwiSElERV9QQUdFX0xJU1RfT05MWV9PTkVfUEFHRSIsIm9wdGlvbnMiLCJ3cmFwcGVyRmFjdG9yeSIsIkJhc2UiLCJyZW1vdGVSZXNvbHZlciIsInByb3BzIiwiaGFuZGxlQ2hhbmdlUGFnZSIsImJpbmQiLCJoYW5kbGVDaGFuZ2VTaXplUGVyUGFnZSIsImN1cnJQYWdlIiwiY3VyclNpemVQZXJQYWdlIiwicGFnaW5hdGlvbiIsInNpemVQZXJQYWdlTGlzdCIsInBhZ2UiLCJwYWdlU3RhcnRJbmRleCIsInNpemVQZXJQYWdlIiwidmFsdWUiLCJzdGF0ZSIsInNhdmVUb1N0b3JlIiwibmV4dFByb3BzIiwibmVlZE5ld1N0YXRlIiwib25QYWdlQ2hhbmdlIiwiaXNEYXRhQ2hhbmdlZCIsInNldFN0YXRlIiwic3RvcmUiLCJpc1JlbW90ZVBhZ2luYXRpb24iLCJoYW5kbGVSZW1vdGVQYWdlQ2hhbmdlIiwib25TaXplUGVyUGFnZUNoYW5nZSIsIndpdGhGaXJzdEFuZExhc3QiLCJhbHdheXNTaG93QWxsQnRucyIsImhpZGVTaXplUGVyUGFnZSIsImhpZGVQYWdlTGlzdE9ubHlPbmVQYWdlIiwiZGF0YSIsInRvdGFsU2l6ZSIsImxlbmd0aCIsInBhZ2luYXRpb25TaXplIiwiZmlyc3RQYWdlVGV4dCIsInByZVBhZ2VUZXh0IiwibmV4dFBhZ2VUZXh0IiwibGFzdFBhZ2VUZXh0IiwicHJlUGFnZVRpdGxlIiwibmV4dFBhZ2VUaXRsZSIsImZpcnN0UGFnZVRpdGxlIiwibGFzdFBhZ2VUaXRsZSIsInByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJQYWdpbmF0aW9uIiwiY2xvc2VEcm9wRG93biIsInRvZ2dsZURyb3BEb3duIiwiaW5pdGlhbFN0YXRlIiwiZGF0YVNpemUiLCJ0b3RhbFBhZ2VzIiwiY2FsY3VsYXRlVG90YWxQYWdlIiwibGFzdFBhZ2UiLCJjYWxjdWxhdGVMYXN0UGFnZSIsImRyb3Bkb3duT3BlbiIsInNlbGVjdGVkU2l6ZSIsInBhcnNlSW50IiwibmV3VG90YWxQYWdlcyIsIm5ld0xhc3RQYWdlIiwibmV3UGFnZSIsImJhY2tUb1ByZXZQYWdlIiwib3BlbiIsInBhZ2VzIiwiY2FsY3VsYXRlUGFnZVN0YXR1cyIsImNhbGN1bGF0ZVBhZ2VzIiwicGFnZUxpc3RDbGFzcyIsImNhbGN1bGF0ZVNpemVQZXJQYWdlU3RhdHVzIiwibnVtYmVyIiwiYXJyYXkiLCJmdW5jIiwic3RyaW5nIiwiYm9vbCIsImRlZmF1bHRQcm9wcyIsIk1hdGgiLCJjZWlsIiwiZW5kUGFnZSIsInN0YXJ0UGFnZSIsIm1heCIsImZsb29yIiwiaSIsInB1c2giLCJpc1N0YXJ0IiwiaXNFbmQiLCJmaWx0ZXIiLCJtYXAiLCJ0aXRsZSIsImFjdGl2ZSIsImRpc2FibGVkIiwiX3NpemVQZXJQYWdlIiwicGFnZVRleHQiLCJ0ZXh0IiwicGFnZU51bWJlciIsIkV4dGVuZEJhc2UiLCJzaXplUGVyUGFnZURlZmF1bHRDbGFzcyIsIlNpemVQZXJQYWdlRHJvcERvd24iLCJoaWRkZW4iLCJvbkNsaWNrIiwib25CbHVyIiwiY2xhc3NOYW1lIiwidmFyaWF0aW9uIiwiYnRuQ29udGV4dHVhbCIsImRyb3BEb3duU3R5bGUiLCJ2aXNpYmlsaXR5IiwiZHJvcGRvd25DbGFzc2VzIiwib3B0aW9uIiwib25lT2YiLCJTaXplUGVyUGFnZU9wdGlvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIlBhZ2luYXRvbkxpc3QiLCJwYWdlUHJvcHMiLCJhcnJheU9mIiwic2hhcGUiLCJvbmVPZlR5cGUiLCJkaXNhYmxlIiwiUGFnZUJ1dHRvbiIsImhhbmRsZUNsaWNrIiwiY2xhc3NlcyIsImdldEJ5Q3VyclBhZ2UiLCJnZXROb3JtYWxpemVkUGFnZSIsIm9mZnNldCIsImFicyIsImVuZCIsInN0YXJ0IiwicmVzdWx0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtB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Ryx3Q0FBZ0IsU0FBaEJBLGFBQWdCLENBQUNoRyxLQUFELEVBQVFWLGNBQVIsRUFBMkI7QUFDdEQsTUFBTXFDLFdBQVczQixNQUFNUSxJQUFOLENBQVdFLE1BQTVCO0FBQ0EsTUFBSSxDQUFDaUIsUUFBTCxFQUFlLE9BQU8sRUFBUDtBQUNmLE1BQU1zRSxvQkFBb0IsU0FBcEJBLGlCQUFvQixHQUFNO0FBQzlCLFFBQU1DLFNBQVMvQyxLQUFLZ0QsR0FBTCxDQUFTLElBQUk3RyxjQUFiLENBQWY7QUFDQSxXQUFPVSxNQUFNWCxJQUFOLEdBQWE2RyxNQUFwQjtBQUNELEdBSEQ7QUFJQSxNQUFNRSxNQUFPSCxzQkFBc0JqRyxNQUFNVCxXQUE3QixHQUE0QyxDQUF4RDtBQUNBLE1BQU04RyxRQUFRRCxPQUFPcEcsTUFBTVQsV0FBTixHQUFvQixDQUEzQixDQUFkOztBQUVBLE1BQU0rRyxTQUFTLEVBQWY7QUFDQSxPQUFLLElBQUk3QyxJQUFJNEMsS0FBYixFQUFvQjVDLEtBQUsyQyxHQUF6QixFQUE4QjNDLEtBQUssQ0FBbkMsRUFBc0M7QUFDcEM2QyxXQUFPNUMsSUFBUCxDQUFZMUQsTUFBTVEsSUFBTixDQUFXaUQsQ0FBWCxDQUFaO0FBQ0EsUUFBSUEsSUFBSSxDQUFKLEtBQVU5QixRQUFkLEVBQXdCO0FBQ3pCO0FBQ0QsU0FBTzJFLE1BQVA7QUFDRCxDQWhCTSxDIiwiZmlsZSI6InJlYWN0LWJvb3RzdHJhcC10YWJsZTItcGFnaW5hdG9yL2Rpc3QvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi1wYWdpbmF0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJyZWFjdFwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJSZWFjdEJvb3RzdHJhcFRhYmxlXCJdID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlJlYWN0Qm9vdHN0cmFwVGFibGVcIl0gPSBmYWN0b3J5KHJvb3RbXCJSZWFjdFwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA3NCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgODc4MGQ2YTdhNGFlNjA0OTBmMDQiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMF9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcIlJlYWN0XCIsXCJjb21tb25qczJcIjpcInJlYWN0XCIsXCJjb21tb25qc1wiOlwicmVhY3RcIixcImFtZFwiOlwicmVhY3RcIn1cbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKi9cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9ICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmXG4gICAgU3ltYm9sLmZvciAmJlxuICAgIFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSkgfHxcbiAgICAweGVhYzc7XG5cbiAgdmFyIGlzVmFsaWRFbGVtZW50ID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmXG4gICAgICBvYmplY3QgIT09IG51bGwgJiZcbiAgICAgIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xuICB9O1xuXG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IGRldmVsb3BtZW50IGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIHZhciB0aHJvd09uRGlyZWN0QWNjZXNzID0gdHJ1ZTtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzJykoaXNWYWxpZEVsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpO1xufSBlbHNlIHtcbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgcHJvZHVjdGlvbiBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zJykoKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgNCA1IDYgNyA4IDkiLCJleHBvcnQgZGVmYXVsdCB7XG4gIFBBR0lOQVRJT05fU0laRTogNSxcbiAgUEFHRV9TVEFSVF9JTkRFWDogMSxcbiAgV2l0aF9GSVJTVF9BTkRfTEFTVDogdHJ1ZSxcbiAgU0hPV19BTExfUEFHRV9CVE5TOiBmYWxzZSxcbiAgRklSU1RfUEFHRV9URVhUOiAnPDwnLFxuICBQUkVfUEFHRV9URVhUOiAnPCcsXG4gIE5FWFRfUEFHRV9URVhUOiAnPicsXG4gIExBU1RfUEFHRV9URVhUOiAnPj4nLFxuICBORVhUX1BBR0VfVElUTEU6ICduZXh0IHBhZ2UnLFxuICBMQVNUX1BBR0VfVElUTEU6ICdsYXN0IHBhZ2UnLFxuICBQUkVfUEFHRV9USVRMRTogJ3ByZXZpb3VzIHBhZ2UnLFxuICBGSVJTVF9QQUdFX1RJVExFOiAnZmlyc3QgcGFnZScsXG4gIFNJWkVfUEVSX1BBR0VfTElTVDogWzEwLCAyNSwgMzAsIDUwXSxcbiAgSElERV9TSVpFX1BFUl9QQUdFOiBmYWxzZSxcbiAgSElERV9QQUdFX0xJU1RfT05MWV9PTkVfUEFHRTogZmFsc2Vcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyLXBhZ2luYXRvci9zcmMvY29uc3QuanMiLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBlbXB0eUZ1bmN0aW9uID0gcmVxdWlyZSgnZmJqcy9saWIvZW1wdHlGdW5jdGlvbicpO1xudmFyIGludmFyaWFudCA9IHJlcXVpcmUoJ2ZianMvbGliL2ludmFyaWFudCcpO1xudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gc2hpbShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgIGlmIChzZWNyZXQgPT09IFJlYWN0UHJvcFR5cGVzU2VjcmV0KSB7XG4gICAgICAvLyBJdCBpcyBzdGlsbCBzYWZlIHdoZW4gY2FsbGVkIGZyb20gUmVhY3QuXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGludmFyaWFudChcbiAgICAgIGZhbHNlLFxuICAgICAgJ0NhbGxpbmcgUHJvcFR5cGVzIHZhbGlkYXRvcnMgZGlyZWN0bHkgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgJ1VzZSBQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMoKSB0byBjYWxsIHRoZW0uICcgK1xuICAgICAgJ1JlYWQgbW9yZSBhdCBodHRwOi8vZmIubWUvdXNlLWNoZWNrLXByb3AtdHlwZXMnXG4gICAgKTtcbiAgfTtcbiAgc2hpbS5pc1JlcXVpcmVkID0gc2hpbTtcbiAgZnVuY3Rpb24gZ2V0U2hpbSgpIHtcbiAgICByZXR1cm4gc2hpbTtcbiAgfTtcbiAgLy8gSW1wb3J0YW50IVxuICAvLyBLZWVwIHRoaXMgbGlzdCBpbiBzeW5jIHdpdGggcHJvZHVjdGlvbiB2ZXJzaW9uIGluIGAuL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzLmpzYC5cbiAgdmFyIFJlYWN0UHJvcFR5cGVzID0ge1xuICAgIGFycmF5OiBzaGltLFxuICAgIGJvb2w6IHNoaW0sXG4gICAgZnVuYzogc2hpbSxcbiAgICBudW1iZXI6IHNoaW0sXG4gICAgb2JqZWN0OiBzaGltLFxuICAgIHN0cmluZzogc2hpbSxcbiAgICBzeW1ib2w6IHNoaW0sXG5cbiAgICBhbnk6IHNoaW0sXG4gICAgYXJyYXlPZjogZ2V0U2hpbSxcbiAgICBlbGVtZW50OiBzaGltLFxuICAgIGluc3RhbmNlT2Y6IGdldFNoaW0sXG4gICAgbm9kZTogc2hpbSxcbiAgICBvYmplY3RPZjogZ2V0U2hpbSxcbiAgICBvbmVPZjogZ2V0U2hpbSxcbiAgICBvbmVPZlR5cGU6IGdldFNoaW0sXG4gICAgc2hhcGU6IGdldFNoaW1cbiAgfTtcblxuICBSZWFjdFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcyA9IGVtcHR5RnVuY3Rpb247XG4gIFJlYWN0UHJvcFR5cGVzLlByb3BUeXBlcyA9IFJlYWN0UHJvcFR5cGVzO1xuXG4gIHJldHVybiBSZWFjdFByb3BUeXBlcztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSA0IDUgNiA3IDggOSIsIlwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIFxuICovXG5cbmZ1bmN0aW9uIG1ha2VFbXB0eUZ1bmN0aW9uKGFyZykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBhcmc7XG4gIH07XG59XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBhY2NlcHRzIGFuZCBkaXNjYXJkcyBpbnB1dHM7IGl0IGhhcyBubyBzaWRlIGVmZmVjdHMuIFRoaXMgaXNcbiAqIHByaW1hcmlseSB1c2VmdWwgaWRpb21hdGljYWxseSBmb3Igb3ZlcnJpZGFibGUgZnVuY3Rpb24gZW5kcG9pbnRzIHdoaWNoXG4gKiBhbHdheXMgbmVlZCB0byBiZSBjYWxsYWJsZSwgc2luY2UgSlMgbGFja3MgYSBudWxsLWNhbGwgaWRpb20gYWxhIENvY29hLlxuICovXG52YXIgZW1wdHlGdW5jdGlvbiA9IGZ1bmN0aW9uIGVtcHR5RnVuY3Rpb24oKSB7fTtcblxuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJucyA9IG1ha2VFbXB0eUZ1bmN0aW9uO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc0ZhbHNlID0gbWFrZUVtcHR5RnVuY3Rpb24oZmFsc2UpO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc1RydWUgPSBtYWtlRW1wdHlGdW5jdGlvbih0cnVlKTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsID0gbWFrZUVtcHR5RnVuY3Rpb24obnVsbCk7XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zVGhpcyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXM7XG59O1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc0FyZ3VtZW50ID0gZnVuY3Rpb24gKGFyZykge1xuICByZXR1cm4gYXJnO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBlbXB0eUZ1bmN0aW9uO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2ZianMvbGliL2VtcHR5RnVuY3Rpb24uanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgNCA1IDYgNyA4IDkiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogVXNlIGludmFyaWFudCgpIHRvIGFzc2VydCBzdGF0ZSB3aGljaCB5b3VyIHByb2dyYW0gYXNzdW1lcyB0byBiZSB0cnVlLlxuICpcbiAqIFByb3ZpZGUgc3ByaW50Zi1zdHlsZSBmb3JtYXQgKG9ubHkgJXMgaXMgc3VwcG9ydGVkKSBhbmQgYXJndW1lbnRzXG4gKiB0byBwcm92aWRlIGluZm9ybWF0aW9uIGFib3V0IHdoYXQgYnJva2UgYW5kIHdoYXQgeW91IHdlcmVcbiAqIGV4cGVjdGluZy5cbiAqXG4gKiBUaGUgaW52YXJpYW50IG1lc3NhZ2Ugd2lsbCBiZSBzdHJpcHBlZCBpbiBwcm9kdWN0aW9uLCBidXQgdGhlIGludmFyaWFudFxuICogd2lsbCByZW1haW4gdG8gZW5zdXJlIGxvZ2ljIGRvZXMgbm90IGRpZmZlciBpbiBwcm9kdWN0aW9uLlxuICovXG5cbnZhciB2YWxpZGF0ZUZvcm1hdCA9IGZ1bmN0aW9uIHZhbGlkYXRlRm9ybWF0KGZvcm1hdCkge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhbGlkYXRlRm9ybWF0ID0gZnVuY3Rpb24gdmFsaWRhdGVGb3JtYXQoZm9ybWF0KSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudCByZXF1aXJlcyBhbiBlcnJvciBtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBpbnZhcmlhbnQoY29uZGl0aW9uLCBmb3JtYXQsIGEsIGIsIGMsIGQsIGUsIGYpIHtcbiAgdmFsaWRhdGVGb3JtYXQoZm9ybWF0KTtcblxuICBpZiAoIWNvbmRpdGlvbikge1xuICAgIHZhciBlcnJvcjtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKCdNaW5pZmllZCBleGNlcHRpb24gb2NjdXJyZWQ7IHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCAnICsgJ2ZvciB0aGUgZnVsbCBlcnJvciBtZXNzYWdlIGFuZCBhZGRpdGlvbmFsIGhlbHBmdWwgd2FybmluZ3MuJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBhcmdzID0gW2EsIGIsIGMsIGQsIGUsIGZdO1xuICAgICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgICAgfSkpO1xuICAgICAgZXJyb3IubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICB9XG5cbiAgICBlcnJvci5mcmFtZXNUb1BvcCA9IDE7IC8vIHdlIGRvbid0IGNhcmUgYWJvdXQgaW52YXJpYW50J3Mgb3duIGZyYW1lXG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnZhcmlhbnQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZmJqcy9saWIvaW52YXJpYW50LmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDQgNSA2IDcgOCA5IiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UHJvcFR5cGVzU2VjcmV0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgNCA1IDYgNyA4IDkiLCJpbXBvcnQgd3JhcHBlckZhY3RvcnkgZnJvbSAnLi9zcmMvd3JhcHBlcic7XG5cbmV4cG9ydCBkZWZhdWx0IChvcHRpb25zID0ge30pID0+ICh7XG4gIHdyYXBwZXJGYWN0b3J5LFxuICBvcHRpb25zXG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTItcGFnaW5hdG9yL2luZGV4LmpzIiwiLyogZXNsaW50IHJlYWN0L3Byb3AtdHlwZXM6IDAgKi9cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgQ29uc3QgZnJvbSAnLi9jb25zdCc7XG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tICcuL3BhZ2luYXRpb24nO1xuaW1wb3J0IHsgZ2V0QnlDdXJyUGFnZSB9IGZyb20gJy4vcGFnZSc7XG5cbmV4cG9ydCBkZWZhdWx0IChCYXNlLCB7XG4gIHJlbW90ZVJlc29sdmVyXG59KSA9PlxuICBjbGFzcyBQYWdpbmF0aW9uV3JhcHBlciBleHRlbmRzIHJlbW90ZVJlc29sdmVyKENvbXBvbmVudCkge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICBzdG9yZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlUGFnZSA9IHRoaXMuaGFuZGxlQ2hhbmdlUGFnZS5iaW5kKHRoaXMpO1xuICAgICAgdGhpcy5oYW5kbGVDaGFuZ2VTaXplUGVyUGFnZSA9IHRoaXMuaGFuZGxlQ2hhbmdlU2l6ZVBlclBhZ2UuYmluZCh0aGlzKTtcblxuICAgICAgbGV0IGN1cnJQYWdlO1xuICAgICAgbGV0IGN1cnJTaXplUGVyUGFnZTtcbiAgICAgIGNvbnN0IHsgb3B0aW9ucyB9ID0gcHJvcHMucGFnaW5hdGlvbjtcbiAgICAgIGNvbnN0IHNpemVQZXJQYWdlTGlzdCA9IG9wdGlvbnMuc2l6ZVBlclBhZ2VMaXN0IHx8IENvbnN0LlNJWkVfUEVSX1BBR0VfTElTVDtcblxuICAgICAgLy8gaW5pdGlhbGl6ZSBjdXJyZW50IHBhZ2VcbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5wYWdlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjdXJyUGFnZSA9IG9wdGlvbnMucGFnZTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMucGFnZVN0YXJ0SW5kZXggIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGN1cnJQYWdlID0gb3B0aW9ucy5wYWdlU3RhcnRJbmRleDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGN1cnJQYWdlID0gQ29uc3QuUEFHRV9TVEFSVF9JTkRFWDtcbiAgICAgIH1cblxuICAgICAgLy8gaW5pdGlhbGl6ZSBjdXJyZW50IHNpemVQZXJQYWdlXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMuc2l6ZVBlclBhZ2UgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGN1cnJTaXplUGVyUGFnZSA9IG9wdGlvbnMuc2l6ZVBlclBhZ2U7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBzaXplUGVyUGFnZUxpc3RbMF0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGN1cnJTaXplUGVyUGFnZSA9IHNpemVQZXJQYWdlTGlzdFswXS52YWx1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGN1cnJTaXplUGVyUGFnZSA9IHNpemVQZXJQYWdlTGlzdFswXTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zdGF0ZSA9IHsgY3VyclBhZ2UsIGN1cnJTaXplUGVyUGFnZSB9O1xuICAgICAgdGhpcy5zYXZlVG9TdG9yZShjdXJyUGFnZSwgY3VyclNpemVQZXJQYWdlKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgbGV0IG5lZWROZXdTdGF0ZSA9IGZhbHNlO1xuICAgICAgbGV0IHsgY3VyclBhZ2UsIGN1cnJTaXplUGVyUGFnZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgIGNvbnN0IHsgcGFnZSwgc2l6ZVBlclBhZ2UsIHBhZ2VTdGFydEluZGV4LCBvblBhZ2VDaGFuZ2UgfSA9IG5leHRQcm9wcy5wYWdpbmF0aW9uLm9wdGlvbnM7XG5cbiAgICAgIGlmICh0eXBlb2YgcGFnZSAhPT0gJ3VuZGVmaW5lZCcgJiYgY3VyclBhZ2UgIT09IHBhZ2UpIHsgLy8gdXNlciBkZWZpbmVkIHBhZ2VcbiAgICAgICAgY3VyclBhZ2UgPSBwYWdlO1xuICAgICAgICBuZWVkTmV3U3RhdGUgPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmIChuZXh0UHJvcHMuaXNEYXRhQ2hhbmdlZCkgeyAvLyB1c2VyIGRpZG4ndCBkZWZpbmVkIHBhZ2UgYnV0IGRhdGEgY2hhbmdlXG4gICAgICAgIGN1cnJQYWdlID0gdHlwZW9mIHBhZ2VTdGFydEluZGV4ICE9PSAndW5kZWZpbmVkJyA/IHBhZ2VTdGFydEluZGV4IDogQ29uc3QuUEFHRV9TVEFSVF9JTkRFWDtcbiAgICAgICAgbmVlZE5ld1N0YXRlID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBzaXplUGVyUGFnZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY3VyclNpemVQZXJQYWdlID0gc2l6ZVBlclBhZ2U7XG4gICAgICAgIG5lZWROZXdTdGF0ZSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2F2ZVRvU3RvcmUoY3VyclBhZ2UsIGN1cnJTaXplUGVyUGFnZSk7XG5cbiAgICAgIGlmIChuZWVkTmV3U3RhdGUpIHtcbiAgICAgICAgaWYgKG9uUGFnZUNoYW5nZSkge1xuICAgICAgICAgIG9uUGFnZUNoYW5nZShjdXJyUGFnZSwgY3VyclNpemVQZXJQYWdlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKCgpID0+ICh7IGN1cnJQYWdlLCBjdXJyU2l6ZVBlclBhZ2UgfSkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHNhdmVUb1N0b3JlKHBhZ2UsIHNpemVQZXJQYWdlKSB7XG4gICAgICB0aGlzLnByb3BzLnN0b3JlLnBhZ2UgPSBwYWdlO1xuICAgICAgdGhpcy5wcm9wcy5zdG9yZS5zaXplUGVyUGFnZSA9IHNpemVQZXJQYWdlO1xuICAgIH1cblxuICAgIGhhbmRsZUNoYW5nZVBhZ2UoY3VyclBhZ2UpIHtcbiAgICAgIGNvbnN0IHsgY3VyclNpemVQZXJQYWdlIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgY29uc3QgeyBwYWdpbmF0aW9uOiB7IG9wdGlvbnMgfSB9ID0gdGhpcy5wcm9wcztcbiAgICAgIHRoaXMuc2F2ZVRvU3RvcmUoY3VyclBhZ2UsIGN1cnJTaXplUGVyUGFnZSk7XG5cbiAgICAgIGlmIChvcHRpb25zLm9uUGFnZUNoYW5nZSkge1xuICAgICAgICBvcHRpb25zLm9uUGFnZUNoYW5nZShjdXJyUGFnZSwgY3VyclNpemVQZXJQYWdlKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmlzUmVtb3RlUGFnaW5hdGlvbigpKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlUmVtb3RlUGFnZUNoYW5nZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLnNldFN0YXRlKCgpID0+ICh7IGN1cnJQYWdlIH0pKTtcbiAgICB9XG5cbiAgICBoYW5kbGVDaGFuZ2VTaXplUGVyUGFnZShjdXJyU2l6ZVBlclBhZ2UsIGN1cnJQYWdlKSB7XG4gICAgICBjb25zdCB7IHBhZ2luYXRpb246IHsgb3B0aW9ucyB9IH0gPSB0aGlzLnByb3BzO1xuICAgICAgdGhpcy5zYXZlVG9TdG9yZShjdXJyUGFnZSwgY3VyclNpemVQZXJQYWdlKTtcblxuICAgICAgaWYgKG9wdGlvbnMub25TaXplUGVyUGFnZUNoYW5nZSkge1xuICAgICAgICBvcHRpb25zLm9uU2l6ZVBlclBhZ2VDaGFuZ2UoY3VyclNpemVQZXJQYWdlLCBjdXJyUGFnZSk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5pc1JlbW90ZVBhZ2luYXRpb24oKSkge1xuICAgICAgICB0aGlzLmhhbmRsZVJlbW90ZVBhZ2VDaGFuZ2UoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5zZXRTdGF0ZSgoKSA9PiAoe1xuICAgICAgICBjdXJyUGFnZSxcbiAgICAgICAgY3VyclNpemVQZXJQYWdlXG4gICAgICB9KSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc3QgeyBwYWdpbmF0aW9uOiB7IG9wdGlvbnMgfSwgc3RvcmUgfSA9IHRoaXMucHJvcHM7XG4gICAgICBjb25zdCB7IGN1cnJQYWdlLCBjdXJyU2l6ZVBlclBhZ2UgfSA9IHRoaXMuc3RhdGU7XG4gICAgICBjb25zdCB3aXRoRmlyc3RBbmRMYXN0ID0gdHlwZW9mIG9wdGlvbnMud2l0aEZpcnN0QW5kTGFzdCA9PT0gJ3VuZGVmaW5lZCcgP1xuICAgICAgICBDb25zdC5XaXRoX0ZJUlNUX0FORF9MQVNUIDogb3B0aW9ucy53aXRoRmlyc3RBbmRMYXN0O1xuICAgICAgY29uc3QgYWx3YXlzU2hvd0FsbEJ0bnMgPSB0eXBlb2Ygb3B0aW9ucy5hbHdheXNTaG93QWxsQnRucyA9PT0gJ3VuZGVmaW5lZCcgP1xuICAgICAgICBDb25zdC5TSE9XX0FMTF9QQUdFX0JUTlMgOiBvcHRpb25zLmFsd2F5c1Nob3dBbGxCdG5zO1xuICAgICAgY29uc3QgaGlkZVNpemVQZXJQYWdlID0gdHlwZW9mIG9wdGlvbnMuaGlkZVNpemVQZXJQYWdlID09PSAndW5kZWZpbmVkJyA/XG4gICAgICAgIENvbnN0LkhJREVfU0laRV9QRVJfUEFHRSA6IG9wdGlvbnMuaGlkZVNpemVQZXJQYWdlO1xuICAgICAgY29uc3QgaGlkZVBhZ2VMaXN0T25seU9uZVBhZ2UgPSB0eXBlb2Ygb3B0aW9ucy5oaWRlUGFnZUxpc3RPbmx5T25lUGFnZSA9PT0gJ3VuZGVmaW5lZCcgP1xuICAgICAgICBDb25zdC5ISURFX1BBR0VfTElTVF9PTkxZX09ORV9QQUdFIDogb3B0aW9ucy5oaWRlUGFnZUxpc3RPbmx5T25lUGFnZTtcbiAgICAgIGNvbnN0IHBhZ2VTdGFydEluZGV4ID0gdHlwZW9mIG9wdGlvbnMucGFnZVN0YXJ0SW5kZXggPT09ICd1bmRlZmluZWQnID9cbiAgICAgICAgQ29uc3QuUEFHRV9TVEFSVF9JTkRFWCA6IG9wdGlvbnMucGFnZVN0YXJ0SW5kZXg7XG5cbiAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmlzUmVtb3RlUGFnaW5hdGlvbigpID9cbiAgICAgICAgdGhpcy5wcm9wcy5kYXRhIDpcbiAgICAgICAgZ2V0QnlDdXJyUGFnZShzdG9yZSwgcGFnZVN0YXJ0SW5kZXgpO1xuXG4gICAgICByZXR1cm4gW1xuICAgICAgICA8QmFzZSBrZXk9XCJ0YWJsZVwiIHsgLi4udGhpcy5wcm9wcyB9IGRhdGE9eyBkYXRhIH0gLz4sXG4gICAgICAgIDxQYWdpbmF0aW9uXG4gICAgICAgICAga2V5PVwicGFnaW5hdGlvblwiXG4gICAgICAgICAgZGF0YVNpemU9eyBvcHRpb25zLnRvdGFsU2l6ZSB8fCBzdG9yZS5kYXRhLmxlbmd0aCB9XG4gICAgICAgICAgY3VyclBhZ2U9eyBjdXJyUGFnZSB9XG4gICAgICAgICAgY3VyclNpemVQZXJQYWdlPXsgY3VyclNpemVQZXJQYWdlIH1cbiAgICAgICAgICBvblBhZ2VDaGFuZ2U9eyB0aGlzLmhhbmRsZUNoYW5nZVBhZ2UgfVxuICAgICAgICAgIG9uU2l6ZVBlclBhZ2VDaGFuZ2U9eyB0aGlzLmhhbmRsZUNoYW5nZVNpemVQZXJQYWdlIH1cbiAgICAgICAgICBzaXplUGVyUGFnZUxpc3Q9eyBvcHRpb25zLnNpemVQZXJQYWdlTGlzdCB8fCBDb25zdC5TSVpFX1BFUl9QQUdFX0xJU1QgfVxuICAgICAgICAgIHBhZ2luYXRpb25TaXplPXsgb3B0aW9ucy5wYWdpbmF0aW9uU2l6ZSB8fCBDb25zdC5QQUdJTkFUSU9OX1NJWkUgfVxuICAgICAgICAgIHBhZ2VTdGFydEluZGV4PXsgcGFnZVN0YXJ0SW5kZXggfVxuICAgICAgICAgIHdpdGhGaXJzdEFuZExhc3Q9eyB3aXRoRmlyc3RBbmRMYXN0IH1cbiAgICAgICAgICBhbHdheXNTaG93QWxsQnRucz17IGFsd2F5c1Nob3dBbGxCdG5zIH1cbiAgICAgICAgICBoaWRlU2l6ZVBlclBhZ2U9eyBoaWRlU2l6ZVBlclBhZ2UgfVxuICAgICAgICAgIGhpZGVQYWdlTGlzdE9ubHlPbmVQYWdlPXsgaGlkZVBhZ2VMaXN0T25seU9uZVBhZ2UgfVxuICAgICAgICAgIGZpcnN0UGFnZVRleHQ9eyBvcHRpb25zLmZpcnN0UGFnZVRleHQgfHwgQ29uc3QuRklSU1RfUEFHRV9URVhUIH1cbiAgICAgICAgICBwcmVQYWdlVGV4dD17IG9wdGlvbnMucHJlUGFnZVRleHQgfHwgQ29uc3QuUFJFX1BBR0VfVEVYVCB9XG4gICAgICAgICAgbmV4dFBhZ2VUZXh0PXsgb3B0aW9ucy5uZXh0UGFnZVRleHQgfHwgQ29uc3QuTkVYVF9QQUdFX1RFWFQgfVxuICAgICAgICAgIGxhc3RQYWdlVGV4dD17IG9wdGlvbnMubGFzdFBhZ2VUZXh0IHx8IENvbnN0LkxBU1RfUEFHRV9URVhUIH1cbiAgICAgICAgICBwcmVQYWdlVGl0bGU9eyBvcHRpb25zLnByZVBhZ2VUaXRsZSB8fCBDb25zdC5QUkVfUEFHRV9USVRMRSB9XG4gICAgICAgICAgbmV4dFBhZ2VUaXRsZT17IG9wdGlvbnMubmV4dFBhZ2VUaXRsZSB8fCBDb25zdC5ORVhUX1BBR0VfVElUTEUgfVxuICAgICAgICAgIGZpcnN0UGFnZVRpdGxlPXsgb3B0aW9ucy5maXJzdFBhZ2VUaXRsZSB8fCBDb25zdC5GSVJTVF9QQUdFX1RJVExFIH1cbiAgICAgICAgICBsYXN0UGFnZVRpdGxlPXsgb3B0aW9ucy5sYXN0UGFnZVRpdGxlIHx8IENvbnN0LkxBU1RfUEFHRV9USVRMRSB9XG4gICAgICAgIC8+XG4gICAgICBdO1xuICAgIH1cbiAgfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTItcGFnaW5hdG9yL3NyYy93cmFwcGVyLmpzIiwiLyogZXNsaW50IHJlYWN0L3JlcXVpcmUtZGVmYXVsdC1wcm9wczogMCAqL1xuLyogZXNsaW50IGFycm93LWJvZHktc3R5bGU6IDAgKi9cbmltcG9ydCBjcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHBhZ2VSZXNvbHZlciBmcm9tICcuL3BhZ2UtcmVzb2x2ZXInO1xuaW1wb3J0IFNpemVQZXJQYWdlRHJvcERvd24gZnJvbSAnLi9zaXplLXBlci1wYWdlLWRyb3Bkb3duJztcbmltcG9ydCBQYWdpbmF0aW9uTGlzdCBmcm9tICcuL3BhZ2luYXRpb24tbGlzdCc7XG5pbXBvcnQgQ29uc3QgZnJvbSAnLi9jb25zdCc7XG5cbmNsYXNzIFBhZ2luYXRpb24gZXh0ZW5kcyBwYWdlUmVzb2x2ZXIoQ29tcG9uZW50KSB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuY2xvc2VEcm9wRG93biA9IHRoaXMuY2xvc2VEcm9wRG93bi5iaW5kKHRoaXMpO1xuICAgIHRoaXMudG9nZ2xlRHJvcERvd24gPSB0aGlzLnRvZ2dsZURyb3BEb3duLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVDaGFuZ2VQYWdlID0gdGhpcy5oYW5kbGVDaGFuZ2VQYWdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVDaGFuZ2VTaXplUGVyUGFnZSA9IHRoaXMuaGFuZGxlQ2hhbmdlU2l6ZVBlclBhZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLnN0YXRlID0gdGhpcy5pbml0aWFsU3RhdGUoKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgY29uc3QgeyBkYXRhU2l6ZSwgY3VyclNpemVQZXJQYWdlIH0gPSBuZXh0UHJvcHM7XG4gICAgaWYgKGN1cnJTaXplUGVyUGFnZSAhPT0gdGhpcy5wcm9wcy5jdXJyU2l6ZVBlclBhZ2UgfHwgZGF0YVNpemUgIT09IHRoaXMucHJvcHMuZGF0YVNpemUpIHtcbiAgICAgIGNvbnN0IHRvdGFsUGFnZXMgPSB0aGlzLmNhbGN1bGF0ZVRvdGFsUGFnZShjdXJyU2l6ZVBlclBhZ2UsIGRhdGFTaXplKTtcbiAgICAgIGNvbnN0IGxhc3RQYWdlID0gdGhpcy5jYWxjdWxhdGVMYXN0UGFnZSh0b3RhbFBhZ2VzKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB0b3RhbFBhZ2VzLCBsYXN0UGFnZSB9KTtcbiAgICB9XG4gIH1cblxuICB0b2dnbGVEcm9wRG93bigpIHtcbiAgICBjb25zdCBkcm9wZG93bk9wZW4gPSAhdGhpcy5zdGF0ZS5kcm9wZG93bk9wZW47XG4gICAgdGhpcy5zZXRTdGF0ZSgoKSA9PiB7XG4gICAgICByZXR1cm4geyBkcm9wZG93bk9wZW4gfTtcbiAgICB9KTtcbiAgfVxuXG4gIGNsb3NlRHJvcERvd24oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSgoKSA9PiB7XG4gICAgICByZXR1cm4geyBkcm9wZG93bk9wZW46IGZhbHNlIH07XG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2VTaXplUGVyUGFnZShzaXplUGVyUGFnZSkge1xuICAgIGNvbnN0IHsgY3VyclNpemVQZXJQYWdlLCBvblNpemVQZXJQYWdlQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHNlbGVjdGVkU2l6ZSA9IHR5cGVvZiBzaXplUGVyUGFnZSA9PT0gJ3N0cmluZycgPyBwYXJzZUludChzaXplUGVyUGFnZSwgMTApIDogc2l6ZVBlclBhZ2U7XG4gICAgbGV0IHsgY3VyclBhZ2UgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKHNlbGVjdGVkU2l6ZSAhPT0gY3VyclNpemVQZXJQYWdlKSB7XG4gICAgICBjb25zdCBuZXdUb3RhbFBhZ2VzID0gdGhpcy5jYWxjdWxhdGVUb3RhbFBhZ2Uoc2VsZWN0ZWRTaXplKTtcbiAgICAgIGNvbnN0IG5ld0xhc3RQYWdlID0gdGhpcy5jYWxjdWxhdGVMYXN0UGFnZShuZXdUb3RhbFBhZ2VzKTtcbiAgICAgIGlmIChjdXJyUGFnZSA+IG5ld0xhc3RQYWdlKSBjdXJyUGFnZSA9IG5ld0xhc3RQYWdlO1xuICAgICAgb25TaXplUGVyUGFnZUNoYW5nZShzZWxlY3RlZFNpemUsIGN1cnJQYWdlKTtcbiAgICB9XG4gICAgdGhpcy5jbG9zZURyb3BEb3duKCk7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2VQYWdlKG5ld1BhZ2UpIHtcbiAgICBsZXQgcGFnZTtcbiAgICBjb25zdCB7XG4gICAgICBjdXJyUGFnZSxcbiAgICAgIHBhZ2VTdGFydEluZGV4LFxuICAgICAgcHJlUGFnZVRleHQsXG4gICAgICBuZXh0UGFnZVRleHQsXG4gICAgICBsYXN0UGFnZVRleHQsXG4gICAgICBmaXJzdFBhZ2VUZXh0LFxuICAgICAgb25QYWdlQ2hhbmdlXG4gICAgICAvLyBrZWVwU2l6ZVBlclBhZ2VTdGF0ZVxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgbGFzdFBhZ2UgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBpZiAobmV3UGFnZSA9PT0gcHJlUGFnZVRleHQpIHtcbiAgICAgIHBhZ2UgPSB0aGlzLmJhY2tUb1ByZXZQYWdlKCk7XG4gICAgfSBlbHNlIGlmIChuZXdQYWdlID09PSBuZXh0UGFnZVRleHQpIHtcbiAgICAgIHBhZ2UgPSAoY3VyclBhZ2UgKyAxKSA+IGxhc3RQYWdlID8gbGFzdFBhZ2UgOiBjdXJyUGFnZSArIDE7XG4gICAgfSBlbHNlIGlmIChuZXdQYWdlID09PSBsYXN0UGFnZVRleHQpIHtcbiAgICAgIHBhZ2UgPSBsYXN0UGFnZTtcbiAgICB9IGVsc2UgaWYgKG5ld1BhZ2UgPT09IGZpcnN0UGFnZVRleHQpIHtcbiAgICAgIHBhZ2UgPSBwYWdlU3RhcnRJbmRleDtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFnZSA9IHBhcnNlSW50KG5ld1BhZ2UsIDEwKTtcbiAgICB9XG5cbiAgICAvLyBpZiAoa2VlcFNpemVQZXJQYWdlU3RhdGUpIHsgdGhpcy5jbG9zZURyb3BEb3duKCk7IH1cblxuICAgIGlmIChwYWdlICE9PSBjdXJyUGFnZSkge1xuICAgICAgb25QYWdlQ2hhbmdlKHBhZ2UpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHRvdGFsUGFnZXMsIGxhc3RQYWdlLCBkcm9wZG93bk9wZW46IG9wZW4gfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3Qge1xuICAgICAgc2l6ZVBlclBhZ2VMaXN0LFxuICAgICAgY3VyclNpemVQZXJQYWdlLFxuICAgICAgaGlkZVNpemVQZXJQYWdlLFxuICAgICAgaGlkZVBhZ2VMaXN0T25seU9uZVBhZ2VcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBwYWdlcyA9IHRoaXMuY2FsY3VsYXRlUGFnZVN0YXR1cyh0aGlzLmNhbGN1bGF0ZVBhZ2VzKHRvdGFsUGFnZXMpLCBsYXN0UGFnZSk7XG5cbiAgICBjb25zdCBwYWdlTGlzdENsYXNzID0gY3MoXG4gICAgICAncmVhY3QtYm9vdHN0cmFwLXRhYmxlLXBhZ2luYXRpb24tbGlzdCcsXG4gICAgICAnY29sLW1kLTYgY29sLXhzLTYgY29sLXNtLTYgY29sLWxnLTYnLCB7XG4gICAgICAgICdyZWFjdC1ib290c3RyYXAtdGFibGUtcGFnaW5hdGlvbi1saXN0LWhpZGRlbic6IChoaWRlUGFnZUxpc3RPbmx5T25lUGFnZSAmJiB0b3RhbFBhZ2VzID09PSAxKVxuICAgICAgfSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJlYWN0LWJvb3RzdHJhcC10YWJsZS1wYWdpbmF0aW9uXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgY29sLXhzLTYgY29sLXNtLTYgY29sLWxnLTZcIj5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBzaXplUGVyUGFnZUxpc3QubGVuZ3RoID4gMSAmJiAhaGlkZVNpemVQZXJQYWdlID9cbiAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgIDxTaXplUGVyUGFnZURyb3BEb3duXG4gICAgICAgICAgICAgICAgICBjdXJyU2l6ZVBlclBhZ2U9eyBgJHtjdXJyU2l6ZVBlclBhZ2V9YCB9XG4gICAgICAgICAgICAgICAgICBvcHRpb25zPXsgdGhpcy5jYWxjdWxhdGVTaXplUGVyUGFnZVN0YXR1cygpIH1cbiAgICAgICAgICAgICAgICAgIG9uU2l6ZVBlclBhZ2VDaGFuZ2U9eyB0aGlzLmhhbmRsZUNoYW5nZVNpemVQZXJQYWdlIH1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyB0aGlzLnRvZ2dsZURyb3BEb3duIH1cbiAgICAgICAgICAgICAgICAgIG9uQmx1cj17IHRoaXMuY2xvc2VEcm9wRG93biB9XG4gICAgICAgICAgICAgICAgICBvcGVuPXsgb3BlbiB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKSA6IG51bGxcbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IHBhZ2VMaXN0Q2xhc3MgfT5cbiAgICAgICAgICA8UGFnaW5hdGlvbkxpc3QgcGFnZXM9eyBwYWdlcyB9IG9uUGFnZUNoYW5nZT17IHRoaXMuaGFuZGxlQ2hhbmdlUGFnZSB9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5QYWdpbmF0aW9uLnByb3BUeXBlcyA9IHtcbiAgZGF0YVNpemU6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgc2l6ZVBlclBhZ2VMaXN0OiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgY3VyclBhZ2U6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgY3VyclNpemVQZXJQYWdlOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIG9uUGFnZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgb25TaXplUGVyUGFnZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgcGFnZVN0YXJ0SW5kZXg6IFByb3BUeXBlcy5udW1iZXIsXG4gIHBhZ2luYXRpb25TaXplOiBQcm9wVHlwZXMubnVtYmVyLFxuICBmaXJzdFBhZ2VUZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBwcmVQYWdlVGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbiAgbmV4dFBhZ2VUZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsYXN0UGFnZVRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG5leHRQYWdlVGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHByZVBhZ2VUaXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZmlyc3RQYWdlVGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxhc3RQYWdlVGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHdpdGhGaXJzdEFuZExhc3Q6IFByb3BUeXBlcy5ib29sLFxuICBhbHdheXNTaG93QWxsQnRuczogUHJvcFR5cGVzLmJvb2wsXG4gIGhpZGVTaXplUGVyUGFnZTogUHJvcFR5cGVzLmJvb2wsXG4gIGhpZGVQYWdlTGlzdE9ubHlPbmVQYWdlOiBQcm9wVHlwZXMuYm9vbFxufTtcblxuUGFnaW5hdGlvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIHBhZ2VTdGFydEluZGV4OiBDb25zdC5QQUdFX1NUQVJUX0lOREVYLFxuICBwYWdpbmF0aW9uU2l6ZTogQ29uc3QuUEFHSU5BVElPTl9TSVpFLFxuICB3aXRoRmlyc3RBbmRMYXN0OiBDb25zdC5XaXRoX0ZJUlNUX0FORF9MQVNULFxuICBhbHdheXNTaG93QWxsQnRuczogQ29uc3QuU0hPV19BTExfUEFHRV9CVE5TLFxuICBmaXJzdFBhZ2VUZXh0OiBDb25zdC5GSVJTVF9QQUdFX1RFWFQsXG4gIHByZVBhZ2VUZXh0OiBDb25zdC5QUkVfUEFHRV9URVhULFxuICBuZXh0UGFnZVRleHQ6IENvbnN0Lk5FWFRfUEFHRV9URVhULFxuICBsYXN0UGFnZVRleHQ6IENvbnN0LkxBU1RfUEFHRV9URVhULFxuICBzaXplUGVyUGFnZUxpc3Q6IENvbnN0LlNJWkVfUEVSX1BBR0VfTElTVCxcbiAgbmV4dFBhZ2VUaXRsZTogQ29uc3QuTkVYVF9QQUdFX1RJVExFLFxuICBwcmVQYWdlVGl0bGU6IENvbnN0LlBSRV9QQUdFX1RJVExFLFxuICBmaXJzdFBhZ2VUaXRsZTogQ29uc3QuRklSU1RfUEFHRV9USVRMRSxcbiAgbGFzdFBhZ2VUaXRsZTogQ29uc3QuTEFTVF9QQUdFX1RJVExFLFxuICBoaWRlU2l6ZVBlclBhZ2U6IENvbnN0LkhJREVfU0laRV9QRVJfUEFHRSxcbiAgaGlkZVBhZ2VMaXN0T25seU9uZVBhZ2U6IENvbnN0LkhJREVfUEFHRV9MSVNUX09OTFlfT05FX1BBR0Vcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2luYXRpb247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyLXBhZ2luYXRvci9zcmMvcGFnaW5hdGlvbi5qcyIsIi8qIGVzbGludCBuby1taXhlZC1vcGVyYXRvcnM6IDAgKi9cbmV4cG9ydCBkZWZhdWx0IEV4dGVuZEJhc2UgPT5cbiAgY2xhc3MgUGFnZVJlc29sdmVyIGV4dGVuZHMgRXh0ZW5kQmFzZSB7XG4gICAgYmFja1RvUHJldlBhZ2UoKSB7XG4gICAgICBjb25zdCB7IGN1cnJQYWdlLCBwYWdlU3RhcnRJbmRleCB9ID0gdGhpcy5wcm9wcztcbiAgICAgIHJldHVybiAoY3VyclBhZ2UgLSAxKSA8IHBhZ2VTdGFydEluZGV4ID8gcGFnZVN0YXJ0SW5kZXggOiBjdXJyUGFnZSAtIDE7XG4gICAgfVxuXG4gICAgZ29Ub05leHRQYWdlKCkge1xuICAgICAgY29uc3QgeyBjdXJyUGFnZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgIGNvbnN0IHsgbGFzdFBhZ2UgfSA9IHRoaXMuc3RhdGU7XG4gICAgICByZXR1cm4gKGN1cnJQYWdlICsgMSkgPiBsYXN0UGFnZSA/IGxhc3RQYWdlIDogY3VyclBhZ2UgKyAxO1xuICAgIH1cblxuICAgIGluaXRpYWxTdGF0ZSgpIHtcbiAgICAgIGNvbnN0IHRvdGFsUGFnZXMgPSB0aGlzLmNhbGN1bGF0ZVRvdGFsUGFnZSgpO1xuICAgICAgY29uc3QgbGFzdFBhZ2UgPSB0aGlzLmNhbGN1bGF0ZUxhc3RQYWdlKHRvdGFsUGFnZXMpO1xuICAgICAgcmV0dXJuIHsgdG90YWxQYWdlcywgbGFzdFBhZ2UsIGRyb3Bkb3duT3BlbjogZmFsc2UgfTtcbiAgICB9XG5cbiAgICBjYWxjdWxhdGVUb3RhbFBhZ2Uoc2l6ZVBlclBhZ2UgPSB0aGlzLnByb3BzLmN1cnJTaXplUGVyUGFnZSwgZGF0YVNpemUgPSB0aGlzLnByb3BzLmRhdGFTaXplKSB7XG4gICAgICByZXR1cm4gTWF0aC5jZWlsKGRhdGFTaXplIC8gc2l6ZVBlclBhZ2UpO1xuICAgIH1cblxuICAgIGNhbGN1bGF0ZUxhc3RQYWdlKHRvdGFsUGFnZXMpIHtcbiAgICAgIGNvbnN0IHsgcGFnZVN0YXJ0SW5kZXggfSA9IHRoaXMucHJvcHM7XG4gICAgICByZXR1cm4gcGFnZVN0YXJ0SW5kZXggKyB0b3RhbFBhZ2VzIC0gMTtcbiAgICB9XG5cbiAgICBjYWxjdWxhdGVQYWdlcyhcbiAgICAgIHRvdGFsUGFnZXMgPSB0aGlzLnN0YXRlLnRvdGFsUGFnZXMsXG4gICAgICBsYXN0UGFnZSA9IHRoaXMuc3RhdGUubGFzdFBhZ2UpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgY3VyclBhZ2UsXG4gICAgICAgIHBhZ2luYXRpb25TaXplLFxuICAgICAgICBwYWdlU3RhcnRJbmRleCxcbiAgICAgICAgd2l0aEZpcnN0QW5kTGFzdCxcbiAgICAgICAgZmlyc3RQYWdlVGV4dCxcbiAgICAgICAgcHJlUGFnZVRleHQsXG4gICAgICAgIG5leHRQYWdlVGV4dCxcbiAgICAgICAgbGFzdFBhZ2VUZXh0LFxuICAgICAgICBhbHdheXNTaG93QWxsQnRuc1xuICAgICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgIGxldCBwYWdlcztcbiAgICAgIGxldCBlbmRQYWdlID0gdG90YWxQYWdlcztcbiAgICAgIGlmIChlbmRQYWdlIDw9IDApIHJldHVybiBbXTtcblxuICAgICAgbGV0IHN0YXJ0UGFnZSA9IE1hdGgubWF4KGN1cnJQYWdlIC0gTWF0aC5mbG9vcihwYWdpbmF0aW9uU2l6ZSAvIDIpLCBwYWdlU3RhcnRJbmRleCk7XG4gICAgICBlbmRQYWdlID0gc3RhcnRQYWdlICsgcGFnaW5hdGlvblNpemUgLSAxO1xuXG4gICAgICBpZiAoZW5kUGFnZSA+IGxhc3RQYWdlKSB7XG4gICAgICAgIGVuZFBhZ2UgPSBsYXN0UGFnZTtcbiAgICAgICAgc3RhcnRQYWdlID0gZW5kUGFnZSAtIHBhZ2luYXRpb25TaXplICsgMTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXJ0UGFnZSAhPT0gcGFnZVN0YXJ0SW5kZXggJiYgdG90YWxQYWdlcyA+IHBhZ2luYXRpb25TaXplICYmIHdpdGhGaXJzdEFuZExhc3QpIHtcbiAgICAgICAgcGFnZXMgPSBbZmlyc3RQYWdlVGV4dCwgcHJlUGFnZVRleHRdO1xuICAgICAgfSBlbHNlIGlmICh0b3RhbFBhZ2VzID4gMSB8fCBhbHdheXNTaG93QWxsQnRucykge1xuICAgICAgICBwYWdlcyA9IFtwcmVQYWdlVGV4dF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYWdlcyA9IFtdO1xuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCBpID0gc3RhcnRQYWdlOyBpIDw9IGVuZFBhZ2U7IGkgKz0gMSkge1xuICAgICAgICBpZiAoaSA+PSBwYWdlU3RhcnRJbmRleCkgcGFnZXMucHVzaChpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGVuZFBhZ2UgPD0gbGFzdFBhZ2UgJiYgcGFnZXMubGVuZ3RoID4gMSkge1xuICAgICAgICBwYWdlcy5wdXNoKG5leHRQYWdlVGV4dCk7XG4gICAgICB9XG4gICAgICBpZiAoZW5kUGFnZSAhPT0gbGFzdFBhZ2UgJiYgd2l0aEZpcnN0QW5kTGFzdCkge1xuICAgICAgICBwYWdlcy5wdXNoKGxhc3RQYWdlVGV4dCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcGFnZXM7XG4gICAgfVxuXG4gICAgY2FsY3VsYXRlUGFnZVN0YXR1cyhwYWdlcyA9IFtdLCBsYXN0UGFnZSA9IHRoaXMuc3RhdGUubGFzdFBhZ2UpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgY3VyclBhZ2UsXG4gICAgICAgIHBhZ2VTdGFydEluZGV4LFxuICAgICAgICBmaXJzdFBhZ2VUZXh0LFxuICAgICAgICBwcmVQYWdlVGV4dCxcbiAgICAgICAgbmV4dFBhZ2VUZXh0LFxuICAgICAgICBsYXN0UGFnZVRleHQsXG4gICAgICAgIGFsd2F5c1Nob3dBbGxCdG5zXG4gICAgICB9ID0gdGhpcy5wcm9wcztcbiAgICAgIGNvbnN0IGlzU3RhcnQgPSBwYWdlID0+XG4gICAgICAgIChjdXJyUGFnZSA9PT0gcGFnZVN0YXJ0SW5kZXggJiYgKHBhZ2UgPT09IGZpcnN0UGFnZVRleHQgfHwgcGFnZSA9PT0gcHJlUGFnZVRleHQpKTtcbiAgICAgIGNvbnN0IGlzRW5kID0gcGFnZSA9PlxuICAgICAgICAoY3VyclBhZ2UgPT09IGxhc3RQYWdlICYmIChwYWdlID09PSBuZXh0UGFnZVRleHQgfHwgcGFnZSA9PT0gbGFzdFBhZ2VUZXh0KSk7XG5cbiAgICAgIHJldHVybiBwYWdlc1xuICAgICAgICAuZmlsdGVyKChwYWdlKSA9PiB7XG4gICAgICAgICAgaWYgKGFsd2F5c1Nob3dBbGxCdG5zKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuICEoaXNTdGFydChwYWdlKSB8fCBpc0VuZChwYWdlKSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5tYXAoKHBhZ2UpID0+IHtcbiAgICAgICAgICBsZXQgdGl0bGU7XG4gICAgICAgICAgY29uc3QgYWN0aXZlID0gcGFnZSA9PT0gY3VyclBhZ2U7XG4gICAgICAgICAgY29uc3QgZGlzYWJsZWQgPSAoaXNTdGFydChwYWdlKSB8fCBpc0VuZChwYWdlKSk7XG5cbiAgICAgICAgICBpZiAocGFnZSA9PT0gbmV4dFBhZ2VUZXh0KSB7XG4gICAgICAgICAgICB0aXRsZSA9IHRoaXMucHJvcHMubmV4dFBhZ2VUaXRsZTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHBhZ2UgPT09IHByZVBhZ2VUZXh0KSB7XG4gICAgICAgICAgICB0aXRsZSA9IHRoaXMucHJvcHMucHJlUGFnZVRpdGxlO1xuICAgICAgICAgIH0gZWxzZSBpZiAocGFnZSA9PT0gZmlyc3RQYWdlVGV4dCkge1xuICAgICAgICAgICAgdGl0bGUgPSB0aGlzLnByb3BzLmZpcnN0UGFnZVRpdGxlO1xuICAgICAgICAgIH0gZWxzZSBpZiAocGFnZSA9PT0gbGFzdFBhZ2VUZXh0KSB7XG4gICAgICAgICAgICB0aXRsZSA9IHRoaXMucHJvcHMubGFzdFBhZ2VUaXRsZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGl0bGUgPSBgJHtwYWdlfWA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHsgcGFnZSwgYWN0aXZlLCBkaXNhYmxlZCwgdGl0bGUgfTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2FsY3VsYXRlU2l6ZVBlclBhZ2VTdGF0dXMoKSB7XG4gICAgICBjb25zdCB7IHNpemVQZXJQYWdlTGlzdCB9ID0gdGhpcy5wcm9wcztcbiAgICAgIHJldHVybiBzaXplUGVyUGFnZUxpc3QubWFwKChfc2l6ZVBlclBhZ2UpID0+IHtcbiAgICAgICAgY29uc3QgcGFnZVRleHQgPSBfc2l6ZVBlclBhZ2UudGV4dCB8fCBfc2l6ZVBlclBhZ2U7XG4gICAgICAgIGNvbnN0IHBhZ2VOdW1iZXIgPSBfc2l6ZVBlclBhZ2UudmFsdWUgfHwgX3NpemVQZXJQYWdlO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHRleHQ6IGAke3BhZ2VUZXh0fWAsXG4gICAgICAgICAgcGFnZTogcGFnZU51bWJlclxuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyLXBhZ2luYXRvci9zcmMvcGFnZS1yZXNvbHZlci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY3MgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFNpemVQZXJQYWdlT3B0aW9uIGZyb20gJy4vc2l6ZS1wZXItcGFnZS1vcHRpb24nO1xuXG5jb25zdCBzaXplUGVyUGFnZURlZmF1bHRDbGFzcyA9ICdyZWFjdC1icy10YWJsZS1zaXplUGVyUGFnZS1kcm9wZG93bic7XG5cbmNvbnN0IFNpemVQZXJQYWdlRHJvcERvd24gPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIG9wZW4sXG4gICAgaGlkZGVuLFxuICAgIG9uQ2xpY2ssXG4gICAgb25CbHVyLFxuICAgIG9wdGlvbnMsXG4gICAgY2xhc3NOYW1lLFxuICAgIHZhcmlhdGlvbixcbiAgICBidG5Db250ZXh0dWFsLFxuICAgIGN1cnJTaXplUGVyUGFnZSxcbiAgICBvblNpemVQZXJQYWdlQ2hhbmdlXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCBkcm9wRG93blN0eWxlID0geyB2aXNpYmlsaXR5OiBoaWRkZW4gPyAnaGlkZGVuJyA6ICd2aXNpYmxlJyB9O1xuICBjb25zdCBkcm9wZG93bkNsYXNzZXMgPSBjcyhcbiAgICBvcGVuID8gJ29wZW4gc2hvdycgOiAnJyxcbiAgICBzaXplUGVyUGFnZURlZmF1bHRDbGFzcyxcbiAgICB2YXJpYXRpb24sXG4gICAgY2xhc3NOYW1lLFxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPHNwYW5cbiAgICAgIHN0eWxlPXsgZHJvcERvd25TdHlsZSB9XG4gICAgICBjbGFzc05hbWU9eyBkcm9wZG93bkNsYXNzZXMgfVxuICAgID5cbiAgICAgIDxidXR0b25cbiAgICAgICAgaWQ9XCJwYWdlRHJvcERvd25cIlxuICAgICAgICBjbGFzc05hbWU9eyBgYnRuICR7YnRuQ29udGV4dHVhbH0gZHJvcGRvd24tdG9nZ2xlYCB9XG4gICAgICAgIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIlxuICAgICAgICBhcmlhLWV4cGFuZGVkPXsgb3BlbiB9XG4gICAgICAgIG9uQ2xpY2s9eyBvbkNsaWNrIH1cbiAgICAgICAgb25CbHVyPXsgb25CbHVyIH1cbiAgICAgID5cbiAgICAgICAgeyBjdXJyU2l6ZVBlclBhZ2UgfVxuICAgICAgICA8c3Bhbj5cbiAgICAgICAgICB7ICcgJyB9XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2FyZXRcIiAvPlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51XCIgcm9sZT1cIm1lbnVcIiBhcmlhLWxhYmVsbGVkYnk9XCJwYWdlRHJvcERvd25cIj5cbiAgICAgICAge1xuICAgICAgICAgIG9wdGlvbnMubWFwKG9wdGlvbiA9PiAoXG4gICAgICAgICAgICA8U2l6ZVBlclBhZ2VPcHRpb25cbiAgICAgICAgICAgICAgeyAuLi5vcHRpb24gfVxuICAgICAgICAgICAgICBrZXk9eyBvcHRpb24udGV4dCB9XG4gICAgICAgICAgICAgIG9uU2l6ZVBlclBhZ2VDaGFuZ2U9eyBvblNpemVQZXJQYWdlQ2hhbmdlIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSlcbiAgICAgICAgfVxuICAgICAgPC91bD5cbiAgICA8L3NwYW4+XG4gICk7XG59O1xuXG5TaXplUGVyUGFnZURyb3BEb3duLnByb3BUeXBlcyA9IHtcbiAgY3VyclNpemVQZXJQYWdlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIG9wdGlvbnM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBvbkJsdXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIG9uU2l6ZVBlclBhZ2VDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIG9wZW46IFByb3BUeXBlcy5ib29sLFxuICBoaWRkZW46IFByb3BUeXBlcy5ib29sLFxuICBidG5Db250ZXh0dWFsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB2YXJpYXRpb246IFByb3BUeXBlcy5vbmVPZihbJ2Ryb3Bkb3duJywgJ2Ryb3B1cCddKSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuU2l6ZVBlclBhZ2VEcm9wRG93bi5kZWZhdWx0UHJvcHMgPSB7XG4gIG9wZW46IGZhbHNlLFxuICBoaWRkZW46IGZhbHNlLFxuICBidG5Db250ZXh0dWFsOiAnYnRuLWRlZmF1bHQgYnRuLXNlY29uZGFyeScsXG4gIHZhcmlhdGlvbjogJ2Ryb3Bkb3duJyxcbiAgY2xhc3NOYW1lOiAnJ1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCBTaXplUGVyUGFnZURyb3BEb3duO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi1wYWdpbmF0b3Ivc3JjL3NpemUtcGVyLXBhZ2UtZHJvcGRvd24uanMiLCIvKiBlc2xpbnQganN4LWExMXkvaHJlZi1uby1oYXNoOiAwICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY29uc3QgU2l6ZVBlclBhZ2VPcHRpb24gPSAoe1xuICB0ZXh0LFxuICBwYWdlLFxuICBvblNpemVQZXJQYWdlQ2hhbmdlXG59KSA9PiAoXG4gIDxsaSBrZXk9eyB0ZXh0IH0gcm9sZT1cInByZXNlbnRhdGlvblwiIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW1cIj5cbiAgICA8YVxuICAgICAgaHJlZj1cIiNcIlxuICAgICAgdGFiSW5kZXg9XCItMVwiXG4gICAgICByb2xlPVwibWVudWl0ZW1cIlxuICAgICAgZGF0YS1wYWdlPXsgcGFnZSB9XG4gICAgICBvbk1vdXNlRG93bj17IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgb25TaXplUGVyUGFnZUNoYW5nZShwYWdlKTtcbiAgICAgIH0gfVxuICAgID5cbiAgICAgIHsgdGV4dCB9XG4gICAgPC9hPlxuICA8L2xpPlxuKTtcblxuU2l6ZVBlclBhZ2VPcHRpb24ucHJvcFR5cGVzID0ge1xuICB0ZXh0OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHBhZ2U6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgb25TaXplUGVyUGFnZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2l6ZVBlclBhZ2VPcHRpb247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9yZWFjdC1ib290c3RyYXAtdGFibGUyLXBhZ2luYXRvci9zcmMvc2l6ZS1wZXItcGFnZS1vcHRpb24uanMiLCIvKiFcbiAgQ29weXJpZ2h0IChjKSAyMDE2IEplZCBXYXRzb24uXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgc2VlXG4gIGh0dHA6Ly9qZWR3YXRzb24uZ2l0aHViLmlvL2NsYXNzbmFtZXNcbiovXG4vKiBnbG9iYWwgZGVmaW5lICovXG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgaGFzT3duID0ge30uaGFzT3duUHJvcGVydHk7XG5cblx0ZnVuY3Rpb24gY2xhc3NOYW1lcyAoKSB7XG5cdFx0dmFyIGNsYXNzZXMgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0aWYgKCFhcmcpIGNvbnRpbnVlO1xuXG5cdFx0XHR2YXIgYXJnVHlwZSA9IHR5cGVvZiBhcmc7XG5cblx0XHRcdGlmIChhcmdUeXBlID09PSAnc3RyaW5nJyB8fCBhcmdUeXBlID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goYXJnKTtcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcmcpKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChjbGFzc05hbWVzLmFwcGx5KG51bGwsIGFyZykpO1xuXHRcdFx0fSBlbHNlIGlmIChhcmdUeXBlID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gYXJnKSB7XG5cdFx0XHRcdFx0aWYgKGhhc093bi5jYWxsKGFyZywga2V5KSAmJiBhcmdba2V5XSkge1xuXHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGtleSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBjbGFzc05hbWVzO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyByZWdpc3RlciBhcyAnY2xhc3NuYW1lcycsIGNvbnNpc3RlbnQgd2l0aCBucG0gcGFja2FnZSBuYW1lXG5cdFx0ZGVmaW5lKCdjbGFzc25hbWVzJywgW10sIGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBjbGFzc05hbWVzO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcblx0fVxufSgpKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSA0IDUgNiA3IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBQYWdlQnV0dG9uIGZyb20gJy4vcGFnZS1idXR0b24nO1xuXG5jb25zdCBQYWdpbmF0b25MaXN0ID0gcHJvcHMgPT4gKFxuICA8dWwgY2xhc3NOYW1lPVwicGFnaW5hdGlvbiByZWFjdC1ib290c3RyYXAtdGFibGUtcGFnZS1idG5zLXVsXCI+XG4gICAge1xuICAgICAgcHJvcHMucGFnZXMubWFwKHBhZ2VQcm9wcyA9PiAoXG4gICAgICAgIDxQYWdlQnV0dG9uXG4gICAgICAgICAga2V5PXsgcGFnZVByb3BzLnBhZ2UgfVxuICAgICAgICAgIHsgLi4ucGFnZVByb3BzIH1cbiAgICAgICAgICBvblBhZ2VDaGFuZ2U9eyBwcm9wcy5vblBhZ2VDaGFuZ2UgfVxuICAgICAgICAvPlxuICAgICAgKSlcbiAgICB9XG4gIDwvdWw+XG4pO1xuXG5QYWdpbmF0b25MaXN0LnByb3BUeXBlcyA9IHtcbiAgcGFnZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7XG4gICAgcGFnZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICAgIGFjdGl2ZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgZGlzYWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmdcbiAgfSkpLmlzUmVxdWlyZWQsXG4gIG9uUGFnZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFnaW5hdG9uTGlzdDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTItcGFnaW5hdG9yL3NyYy9wYWdpbmF0aW9uLWxpc3QuanMiLCIvKiBlc2xpbnQgcmVhY3QvcmVxdWlyZS1kZWZhdWx0LXByb3BzOiAwICovXG4vKiBlc2xpbnQganN4LWExMXkvaHJlZi1uby1oYXNoOiAwICovXG5pbXBvcnQgY3MgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY2xhc3MgUGFnZUJ1dHRvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVDbGljayhlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMucHJvcHMub25QYWdlQ2hhbmdlKHRoaXMucHJvcHMucGFnZSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgcGFnZSxcbiAgICAgIHRpdGxlLFxuICAgICAgYWN0aXZlLFxuICAgICAgZGlzYWJsZWRcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBjbGFzc2VzID0gY3Moe1xuICAgICAgYWN0aXZlLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICAncGFnZS1pdGVtJzogdHJ1ZVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxsaSBjbGFzc05hbWU9eyBjbGFzc2VzIH0gdGl0bGU9eyB0aXRsZSB9PlxuICAgICAgICA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9eyB0aGlzLmhhbmRsZUNsaWNrIH0gY2xhc3NOYW1lPVwicGFnZS1saW5rXCI+eyBwYWdlIH08L2E+XG4gICAgICA8L2xpPlxuICAgICk7XG4gIH1cbn1cblxuUGFnZUJ1dHRvbi5wcm9wVHlwZXMgPSB7XG4gIG9uUGFnZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgcGFnZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLmlzUmVxdWlyZWQsXG4gIGFjdGl2ZTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYWdlQnV0dG9uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvcmVhY3QtYm9vdHN0cmFwLXRhYmxlMi1wYWdpbmF0b3Ivc3JjL3BhZ2UtYnV0dG9uLmpzIiwiZXhwb3J0IGNvbnN0IGdldEJ5Q3VyclBhZ2UgPSAoc3RvcmUsIHBhZ2VTdGFydEluZGV4KSA9PiB7XG4gIGNvbnN0IGRhdGFTaXplID0gc3RvcmUuZGF0YS5sZW5ndGg7XG4gIGlmICghZGF0YVNpemUpIHJldHVybiBbXTtcbiAgY29uc3QgZ2V0Tm9ybWFsaXplZFBhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3Qgb2Zmc2V0ID0gTWF0aC5hYnMoMSAtIHBhZ2VTdGFydEluZGV4KTtcbiAgICByZXR1cm4gc3RvcmUucGFnZSArIG9mZnNldDtcbiAgfTtcbiAgY29uc3QgZW5kID0gKGdldE5vcm1hbGl6ZWRQYWdlKCkgKiBzdG9yZS5zaXplUGVyUGFnZSkgLSAxO1xuICBjb25zdCBzdGFydCA9IGVuZCAtIChzdG9yZS5zaXplUGVyUGFnZSAtIDEpO1xuXG4gIGNvbnN0IHJlc3VsdCA9IFtdO1xuICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPD0gZW5kOyBpICs9IDEpIHtcbiAgICByZXN1bHQucHVzaChzdG9yZS5kYXRhW2ldKTtcbiAgICBpZiAoaSArIDEgPT09IGRhdGFTaXplKSBicmVhaztcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL3JlYWN0LWJvb3RzdHJhcC10YWJsZTItcGFnaW5hdG9yL3NyYy9wYWdlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==
//# sourceMappingURL=react-bootstrap-table2-paginator.js.map