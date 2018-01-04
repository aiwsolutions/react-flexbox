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

require('./flexbox.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright by AIWSolutions.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Flex = function (_React$Component) {
    _inherits(Flex, _React$Component);

    function Flex() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Flex);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Flex.__proto__ || Object.getPrototypeOf(Flex)).call.apply(_ref, [this].concat(args))), _this), _this.ownProps = _lodash2['default'].keys(Flex.propType), _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Flex, [{
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
                    auto = _props.auto,
                    column = _props.column,
                    reverse = _props.reverse,
                    wrap = _props.wrap,
                    justify = _props.justify,
                    align = _props.align,
                    fullWidth = _props.fullWidth,
                    style = _props.style,
                    col = _props.col,
                    inline = _props.inline,
                    others = _objectWithoutProperties(_props, ['children', 'auto', 'column', 'reverse', 'wrap', 'justify', 'align', 'fullWidth', 'style', 'col', 'inline']);

                /* eslint no-nested-ternary: 0 */


                var flexDirection = column ? reverse ? 'column-reverse' : 'column' : reverse ? 'row-reverse' : 'row';

                var flexStyle = {
                    WebkitBoxSizing: 'border-box',
                    boxSizing: 'border-box',
                    WebkitFlexDirection: flexDirection,
                    flexDirection: flexDirection,
                    WebkitFlexWrap: wrap,
                    flexWrap: wrap,
                    WebkitJustifyContent: justify,
                    justifyContent: justify,
                    WebkitAlignItems: align,
                    alignItems: align
                };

                if (auto) {
                    flexStyle.WebkitFlex = '1 1 auto';
                    flexStyle.flex = '1 1 auto';
                }

                if (fullWidth) {
                    flexStyle.width = '100%';
                }
                if (col) {
                    var widthPercentage = col * 100 / 12;
                    flexStyle.width = String(widthPercentage.toFixed(2)) + '%';
                }

                var computedStyle = (0, _utils.computeStyle)(others);
                return _react2['default'].createElement(
                    'div',
                    _extends({
                        className: inline ? 'inline-flex' : 'flex',
                        style: Object.assign({}, flexStyle, computedStyle.style, style)
                    }, computedStyle.others),
                    children
                );
            }

            return render;
        }()
    }]);

    return Flex;
}(_react2['default'].Component);

Flex.propTypes = {
    column: _propTypes2['default'].bool,
    reverse: _propTypes2['default'].bool,
    wrap: _propTypes2['default'].oneOf(['nowrap', 'wrap', 'wrap-reverse']),
    justify: _propTypes2['default'].oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around']),
    align: _propTypes2['default'].oneOf(['flex-start', 'flex-end', 'center', 'stretch', 'baseline']),
    fullWidth: _propTypes2['default'].bool,
    inline: _propTypes2['default'].bool,
    col: _propTypes2['default'].oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    auto: _propTypes2['default'].bool,
    style: _propTypes2['default'].object
};
exports['default'] = Flex;