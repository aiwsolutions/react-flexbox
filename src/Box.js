import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { computeStyle, MARGIN_PROPS, PADDING_PROPS } from './utils';

/**
 * Represent a simple container which is not a Flex container.
 * This container has built in shouldComponentUpdate to prevent unwanted updates when there is no changes on
 * its property
 * There is also basic property filtering for invalid propery when passing property from its parent like this:
 *      <Box
 *          {...props}
 *      />
 *
 * @property {string} align     - Shorthand for css align-self, this allows the default alignment (or the one
 *                                specified by align-items) to be overridden for individual flex items.
 * @property {bool} auto        - Shorthand for css flex: 1 1 auto
 * @property {string | number} basis   - Shorthand for css flex-basis, it defines the default size of an element
 *                                before the remaining space is distributed
 * @property {number} col       - How many x of 1/12 of width of the parent container that this element should take.
 *                                This equals to css width: (col * 100 / 12)%
 * @property {number} grow      - Shorthand for css flex-grow, it defines what amount of the available
 *                                space inside the flex container the item should take up
 * @property {number} order     - Controls the order in which this Box appears in the Flex container
 * @property {number} shrink    - Shorthand for css flex-shrink, it defines the ability for a flex item
 *                                to shrink if necessary.
 * @property {object} style     - Element style
 */
class Box extends React.Component {
    static propTypes = {
        order: PropTypes.number,
        auto: PropTypes.bool,
        grow: PropTypes.number,
        shrink: PropTypes.number,
        basis: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
        ]),
        align: PropTypes.oneOf([
            'auto',
            'flex-start',
            'flex-end',
            'center',
            'baseline',
            'stretch',
        ]),
        col: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
        style: PropTypes.object,
        className: PropTypes.string,
    };

    // Should not get from propTypes as it will be trimmed
    static ownProps = [
        'order', 'auto', 'grow', 'shrink', 'basic', 'align', 'col', 'style', 'className',
        ...MARGIN_PROPS, ...PADDING_PROPS
    ];

    shouldComponentUpdate(nextProps) {
        return this.props.children !== nextProps.children
            || !_.isEqual(_.pick(this.props, Box.ownProps), _.pick(nextProps, Box.ownProps));
    }

    render() {
        const {
            children, order, auto, grow, shrink, basis, align, col, style, ...others
        } = this.props;
        const boxStyle = {
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
            WebkitAlignSelf: align,
            alignSelf: align,
        };

        if (auto) {
            boxStyle.WebkitFlex = '1 1 auto';
            boxStyle.flex = '1 1 auto';
        }

        if (col) {
            const widthPercentage = col * 100 / 12;
            boxStyle.width = `${widthPercentage.toFixed(2)}%`;
        }

        const computedStyle = computeStyle(others);
        return (
            <div
                style={Object.assign({}, boxStyle, computedStyle.style, style)}
                {...computedStyle.others}
            >
                {children}
            </div>
        );
    }
}

export default Box;
