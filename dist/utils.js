Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PADDING_PROPS = exports.MARGIN_PROPS = undefined;
exports.computeStyle = computeStyle;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /**
                                                                                                                                                                                                                              * Copyright by AIWSolutions.
                                                                                                                                                                                                                              */


var MARGIN_PROPS = exports.MARGIN_PROPS = ['m', 'mt', 'mb', 'ml', 'mr'];
var PADDING_PROPS = exports.PADDING_PROPS = ['p', 'pt', 'pb', 'pl', 'pr'];

var GLOBAL_ATTRIBUTES = ['accessKey', 'className', 'contentEditable', 'dir', 'draggable', 'hidden', 'id', 'lang', 'spellCheck', 'tabIndex', 'title', 'translate'];

var EVENT_HANDLERS_REGEX = /^on[A-Z][a-z]*/;

var DATA_REGEX = /^data-[a-zA-Z]*/;

var ARIA_REGEX = /^aria-[a-zA-Z]*/;

function scale(value) {
    if (_lodash2['default'].isNumber(value)) {
        return value * 8;
    }
    return value;
}

function computeStyle(props) {
    var mt = props.mt,
        mr = props.mr,
        mb = props.mb,
        ml = props.ml,
        m = props.m,
        pt = props.pt,
        pr = props.pr,
        pb = props.pb,
        pl = props.pl,
        p = props.p,
        data = props.data,
        others = _objectWithoutProperties(props, ['mt', 'mr', 'mb', 'ml', 'm', 'pt', 'pr', 'pb', 'pl', 'p', 'data']);

    return {
        style: _lodash2['default'].pickBy({
            marginTop: scale(mt),
            marginRight: scale(mr),
            marginBottom: scale(mb),
            marginLeft: scale(ml),
            margin: scale(m),
            paddingTop: scale(pt),
            paddingRight: scale(pr),
            paddingBottom: scale(pb),
            paddingLeft: scale(pl),
            padding: scale(p)
        }, _lodash2['default'].identity),
        others: _lodash2['default'].pickBy(others, function (value, key) {
            return _lodash2['default'].includes(GLOBAL_ATTRIBUTES, key) || EVENT_HANDLERS_REGEX.test(key) || DATA_REGEX.test(key) || ARIA_REGEX.test(key);
        })
    };
}