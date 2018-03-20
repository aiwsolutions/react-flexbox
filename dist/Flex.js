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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Represent a Flex container.
 * This container has built in shouldComponentUpdate to prevent unwanted updates when there is no changes on
 * its property
 * There is also basic property filtering for invalid propery when passing property from its parent like this:
 *      <Flex
 *          {...props}
 *      />
 *
 * @property {string} align     - Shorthand for css align-items, This defines the default behaviour for how flex
 *                                items are laid out along the cross axis on the current line.
 * @property {bool} auto        - Shorthand for css flex: 1 1 auto
 * @property {string | number} basis   - Shorthand for css flex-basis, it defines the default size of an element
 *                                before the remaining space is distributed
 * @property {string} className - By default this element will have className of 'flex' or 'inline-flex', this
 *                                property is for extra classes
 * @property {number} col       - How many x of 1/12 of width of the parent container that this element should take.
 *                                This equals to css width: (col * 100 / 12)%
 * @property {bool} fullWidth   - Shorthand for css width: 100%
 * @property {number} grow      - Shorthand for css flex-grow, it defines what amount of the available
 *                                space inside the flex container the item should take up
 * @property {bool} inline      - Make this Flex to be inline-flex which displays itself as inline
 * @property {string} justify   - Shorthand for css justify-content, it defines the alignment along the main axis.
 * @property {number} order     - Controls the order in which this Box appears in the Flex container
 * @property {bool} reverse     - Reverse the direction of aligning items
 * @property {number} shrink    - Shorthand for css flex-shrink, it defines the ability for a flex item
 *                                to shrink if necessary.
 * @property {object} style     - Element style
 * @property {string} wrap      - Shorthand for css flex-wrap, it allows the items to wrap as needed
 */
var Flex = function (_React$Component) {
    _inherits(Flex, _React$Component);

    function Flex() {
        _classCallCheck(this, Flex);

        return _possibleConstructorReturn(this, (Flex.__proto__ || Object.getPrototypeOf(Flex)).apply(this, arguments));
    }

    _createClass(Flex, [{
        key: 'shouldComponentUpdate',
        value: function () {
            function shouldComponentUpdate(nextProps) {
                return this.props.children !== nextProps.children || !_lodash2['default'].isEqual(_lodash2['default'].pick(this.props, Flex.ownProps), _lodash2['default'].pick(nextProps, Flex.ownProps));
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
                    order = _props.order,
                    grow = _props.grow,
                    shrink = _props.shrink,
                    basis = _props.basis,
                    column = _props.column,
                    reverse = _props.reverse,
                    wrap = _props.wrap,
                    justify = _props.justify,
                    align = _props.align,
                    fullWidth = _props.fullWidth,
                    style = _props.style,
                    col = _props.col,
                    inline = _props.inline,
                    className = _props.className,
                    shouldUpdate = _props.shouldUpdate,
                    others = _objectWithoutProperties(_props, ['children', 'auto', 'order', 'grow', 'shrink', 'basis', 'column', 'reverse', 'wrap', 'justify', 'align', 'fullWidth', 'style', 'col', 'inline', 'className', 'shouldUpdate']);

                /* eslint no-nested-ternary: 0 */


                var flexDirection = column ? reverse ? 'column-reverse' : 'column' : reverse ? 'row-reverse' : 'row';

                var flexStyle = _lodash2['default'].pickBy({
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
                    WebkitFlexDirection: flexDirection,
                    flexDirection: flexDirection,
                    WebkitFlexWrap: wrap,
                    flexWrap: wrap,
                    WebkitJustifyContent: justify,
                    justifyContent: justify,
                    WebkitAlignItems: align,
                    alignItems: align
                }, _lodash2['default'].identity);

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
                var classString = inline ? 'inline-flex' : 'flex';
                return _react2['default'].createElement(
                    'div',
                    _extends({
                        className: classString + (className ? ' ' + String(className) : ''),
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
    auto: _propTypes2['default'].bool,
    column: _propTypes2['default'].bool,
    reverse: _propTypes2['default'].bool,
    order: _propTypes2['default'].number,
    grow: _propTypes2['default'].number,
    shrink: _propTypes2['default'].number,
    wrap: _propTypes2['default'].oneOf(['nowrap', 'wrap', 'wrap-reverse']),
    justify: _propTypes2['default'].oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around']),
    align: _propTypes2['default'].oneOf(['flex-start', 'flex-end', 'center', 'stretch', 'baseline']),
    fullWidth: _propTypes2['default'].bool,
    inline: _propTypes2['default'].bool,
    col: _propTypes2['default'].oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    style: _propTypes2['default'].object,
    className: _propTypes2['default'].string
};
Flex.ownProps = ['auto', 'column', 'reverse', 'order', 'grow', 'shrink', 'wrap', 'justify', 'align', 'fullWidth', 'inline', 'col', 'style', 'className'].concat(_toConsumableArray(_utils.MARGIN_PROPS), _toConsumableArray(_utils.PADDING_PROPS));
exports['default'] = Flex;