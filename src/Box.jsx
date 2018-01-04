/**
 * Copyright by AIWSolutions.
 */
import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { computeStyle } from './utils';

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
    };

    shouldComponentUpdate(nextProps) {
        return this.props.children !== nextProps.children
            || !_.isEqual(_.pick(this.props, this.ownProps), _.pick(nextProps, this.ownProps));
    }

    ownProps = _.keys(Box.propTypes);

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
            const widthPercentage = (col * 100) / 12;
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
