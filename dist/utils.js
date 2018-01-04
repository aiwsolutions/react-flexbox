Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.computeStyle = computeStyle;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /**
                                                                                                                                                                                                                              * Copyright by AIWSolutions.
                                                                                                                                                                                                                              */


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
        }, function (value) {
            return !_lodash2['default'].isUndefined(value);
        }),
        others: others
    };
}