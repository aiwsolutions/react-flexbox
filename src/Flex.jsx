/**
 * Copyright by AIWSolutions.
 */
import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { computeStyle } from './utils';
import './flexbox.css';

class Flex extends React.Component {
    static propTypes = {
        column: PropTypes.bool,
        reverse: PropTypes.bool,
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
        auto: PropTypes.bool,
        style: PropTypes.object,
    };


    shouldComponentUpdate(nextProps) {
        return this.props.children !== nextProps.children
            || !_.isEqual(_.pick(this.props, this.ownProps), _.pick(nextProps, this.ownProps));
    }

    ownProps = _.keys(Flex.propType);

    render() {
        const {
            children,
            auto,
            column,
            reverse,
            wrap,
            justify,
            align,
            fullWidth,
            style,
            col,
            inline,
            ...others
        } = this.props;

        /* eslint no-nested-ternary: 0 */
        const flexDirection = column ? (reverse ? 'column-reverse' : 'column')
            : (reverse ? 'row-reverse' : 'row');

        const flexStyle = {
            WebkitBoxSizing: 'border-box',
            boxSizing: 'border-box',
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
            const widthPercentage = (col * 100) / 12;
            flexStyle.width = `${widthPercentage.toFixed(2)}%`;
        }

        const computedStyle = computeStyle(others);
        return (
            <div
              className={inline ? 'inline-flex' : 'flex'}
              style={Object.assign({}, flexStyle, computedStyle.style, style)}
              {...computedStyle.others}
            >
                {children}
            </div>
        );
    }
}

export default Flex;
