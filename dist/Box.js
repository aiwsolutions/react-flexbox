Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright by AIWSolutions.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Box = function (_React$Component) {
    _inherits(Box, _React$Component);

    function Box() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Box);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Box.__proto__ || Object.getPrototypeOf(Box)).call.apply(_ref, [this].concat(args))), _this), _this.ownProps = _lodash2['default'].keys(Box.propTypes), _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Box, [{
        key: 'shouldComponentUpdate',
        value: function () {
            function shouldComponentUpdate(nextProps) {
                return this.props.children !== nextProps.children || !_lodash2['default'].isEqual(_lodash2['default'].pick(this.props, this.ownProps), _lodash2['default'].pick(nextProps, this.ownProps));
            }

            return shouldComponentUpdate;
        }()
    }, {
        key: 'render',
        value: function () {
            function render() {
                var _props = this.props,
                    children = _props.children,
                    order = _props.order,
                    auto = _props.auto,
                    grow = _props.grow,
                    shrink = _props.shrink,
                    basis = _props.basis,
                    align = _props.align,
                    col = _props.col,
                    style = _props.style,
                    others = _objectWithoutProperties(_props, ['children', 'order', 'auto', 'grow', 'shrink', 'basis', 'align', 'col', 'style']);

                var boxStyle = {
                    WebkitOrder: order,
                    order: order,
                    WebkitBoxSizing: 'border-box',
                    boxSizing: 'border-box',
                    WebkitFlexGrow: grow,
                    flexGrow: grow,
                    WebkitFlexShrink: shrink,
                    flexShrink: shrink,
                    WebkitFlexBasis: basis,
                    flexBasis: basis,
                    WebkitAlignSelf: align,
                    alignSelf: align
                };

                if (auto) {
                    boxStyle.WebkitFlex = '1 1 auto';
                    boxStyle.flex = '1 1 auto';
                }

                if (col) {
                    var widthPercentage = col * 100 / 12;
                    boxStyle.width = String(widthPercentage.toFixed(2)) + '%';
                }

                var computedStyle = (0, _utils.computeStyle)(others);
                return _react2['default'].createElement(
                    'div',
                    _extends({
                        style: Object.assign({}, boxStyle, computedStyle.style, style)
                    }, computedStyle.others),
                    children
                );
            }

            return render;
        }()
    }]);

    return Box;
}(_react2['default'].Component);

Box.propTypes = {
    order: _propTypes2['default'].number,
    auto: _propTypes2['default'].bool,
    grow: _propTypes2['default'].number,
    shrink: _propTypes2['default'].number,
    basis: _propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].number]),
    align: _propTypes2['default'].oneOf(['auto', 'flex-start', 'flex-end', 'center', 'baseline', 'stretch']),
    col: _propTypes2['default'].oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    style: _propTypes2['default'].object
};
exports['default'] = Box;