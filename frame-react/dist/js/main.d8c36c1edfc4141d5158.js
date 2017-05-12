webpackJsonp([0,3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _reactRouter = __webpack_require__(1);

	var _reactDom = __webpack_require__(2);

	// import routes from './app/routes'

	var routes = {
	    childRoutes: [{
	        path: "/",
	        component: __webpack_require__(3).default,
	        childRoutes: [{
	            path: "repos",
	            getComponent: function getComponent(nextState, cb) {
	                __webpack_require__.e/* nsure */(1, function (require) {
	                    cb(null, __webpack_require__(6).default);
	                });
	            }
	        }, {
	            path: "about",
	            getComponent: function getComponent(nextState, cb) {
	                __webpack_require__.e/* nsure */(2, function (require) {
	                    cb(null, __webpack_require__(7).default);
	                });
	            }
	        }]
	    }]
	};

	(0, _reactDom.render)(React.createElement(_reactRouter.Router, {
	    history: _reactRouter.browserHistory,
	    routes: routes }), document.getElementById('app'));

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = ReactRouter;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(1);

	var _antd = __webpack_require__(5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var App = function (_Component) {
	    _inherits(App, _Component);

	    function App() {
	        _classCallCheck(this, App);

	        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
	    }

	    _createClass(App, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    _antd.Button,
	                    { type: 'primary' },
	                    'Primary'
	                ),
	                _react2.default.createElement(
	                    _reactRouter.Link,
	                    { to: '/about' },
	                    ' about'
	                ),
	                _react2.default.createElement(
	                    _reactRouter.Link,
	                    { to: '/repos' },
	                    ' repos'
	                ),
	                this.props.children
	            );
	        }
	    }]);

	    return App;
	}(_react.Component);

	exports.default = App;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = antd;

/***/ }
]);