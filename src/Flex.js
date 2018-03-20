import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { computeStyle, MARGIN_PROPS, PADDING_PROPS } from './utils';
import './flexbox.css';

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
class Flex extends React.Component {
    static propTypes = {
        auto: PropTypes.bool,
        column: PropTypes.bool,
        reverse: PropTypes.bool,
        order: PropTypes.number,
        grow: PropTypes.number,
        shrink: PropTypes.number,
        wrap: PropTypes.oneOf([
            'nowrap',
            'wrap',
            'wrap-reverse',
        ]),
        justify: PropTypes.oneOf([
            'flex-start',
            'flex-end',
            'center',
            'space-between',
            'space-around',
        ]),
        align: PropTypes.oneOf([
            'flex-start',
            'flex-end',
            'center',
            'stretch',
            'baseline',
        ]),
        fullWidth: PropTypes.bool,
        inline: PropTypes.bool,
        col: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
        style: PropTypes.object,
        className: PropTypes.string,
    };

    static ownProps = [
        'auto', 'column', 'reverse', 'order', 'grow', 'shrink', 'wrap', 'justify', 'align', 'fullWidth',
        'inline', 'col', 'style', 'className', ...MARGIN_PROPS, ...PADDING_PROPS
    ];

    shouldComponentUpdate(nextProps) {
        return this.props.children !== nextProps.children
            || !_.isEqual(_.pick(this.props, Flex.ownProps), _.pick(nextProps, Flex.ownProps));
    }

    render() {
        const {
            children,
            auto,
            order,
            grow,
            shrink,
            basis,
            column,
            reverse,
            wrap,
            justify,
            align,
            fullWidth,
            style,
            col,
            inline,
            className,
            shouldUpdate,
            ...others
        } = this.props;

        /* eslint no-nested-ternary: 0 */
        const flexDirection = column ? (reverse ? 'column-reverse' : 'column')
            : (reverse ? 'row-reverse' : 'row');

        const flexStyle = {
            WebkitOrder: order,
            order,
            WebkitBoxSizing: 'border-box',
            boxSizing: 'border-box',
            WebkitFlexGrow: grow,
            flexGrow: grow,
            WebkitFlexShrink: shrink,
            flexShrink: shrink,
            WebkitFlexBasis: basis,
            flexBasis: basis,
            WebkitFlexDirection: flexDirection,
            flexDirection,
            WebkitFlexWrap: wrap,
            flexWrap: wrap,
            WebkitJustifyContent: justify,
            justifyContent: justify,
            WebkitAlignItems: align,
            alignItems: align,
        };

        if (auto) {
            flexStyle.WebkitFlex = '1 1 auto';
            flexStyle.flex = '1 1 auto';
        }

        if (fullWidth) {
            flexStyle.width = '100%';
        }
        if (col) {
            const widthPercentage = col * 100 / 12;
            flexStyle.width = `${widthPercentage.toFixed(2)}%`;
        }

        const computedStyle = computeStyle(others);
        const classString = inline ? 'inline-flex' : 'flex';
        return (
            <div
                className={classString + (className ? ` ${className}` : '')}
                style={Object.assign({}, flexStyle, computedStyle.style, style)}
                {...computedStyle.others}
            >
                {children}
            </div>
        );
    }
}

export default Flex;
