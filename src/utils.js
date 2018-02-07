/**
 * Copyright by AIWSolutions.
 */
import _ from 'lodash';

export const MARGIN_PROPS = ['m', 'mt', 'mb', 'ml', 'mr'];
export const PADDING_PROPS = ['p', 'pt', 'pb', 'pl', 'pr'];

const GLOBAL_ATTRIBUTES = [
    'accessKey',
    'className',
    'contentEditable',
    'dir',
    'draggable',
    'hidden',
    'id',
    'lang',
    'spellCheck',
    'tabIndex',
    'title',
    'translate',
];

const EVENT_HANDLERS_REGEX = /^on[A-Z][a-z]*/;

const DATA_REGEX = /^data-[a-zA-Z]*/;

const ARIA_REGEX = /^aria-[a-zA-Z]*/;

function scale(value) {
    if (_.isNumber(value)) {
        return value * 8;
    }
    return value;
}

export function computeStyle(props) {
    const {
        mt, mr, mb, ml, m, pt, pr, pb, pl, p, data, ...others
    } = props;
    return {
        style: _.pickBy({
            marginTop: scale(mt),
            marginRight: scale(mr),
            marginBottom: scale(mb),
            marginLeft: scale(ml),
            margin: scale(m),
            paddingTop: scale(pt),
            paddingRight: scale(pr),
            paddingBottom: scale(pb),
            paddingLeft: scale(pl),
            padding: scale(p),
        }, value => !_.isUndefined(value)),
        others: _.pickBy(others, (value, key) =>
            _.includes(GLOBAL_ATTRIBUTES, key)
            || EVENT_HANDLERS_REGEX.test(key)
            || DATA_REGEX.test(key)
            || ARIA_REGEX.test(key)),
    };
}
