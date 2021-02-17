/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './BodyText.module.scss';

const BodyText = ({
  className,
  children,
  size,
  bold,
  testId,
  noMargin,
  ...props
}) => (
  <p
    data-testid={testId}
    className={classnames(
      styles.bodyText,
      { [styles.medium]: size === 'medium' },
      { [styles.small]: size === 'small' },
      { [styles.bold]: bold },
      noMargin && styles.noMargin,
      className
    )}
    {...props}
  >
    {children}
  </p>
);

BodyText.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(['medium', 'small']),
  bold: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.array,
    PropTypes.object,
  ]),
  testId: PropTypes.string,
  noMargin: PropTypes.bool,
};

BodyText.defaultProps = {
  className: '',
  size: 'medium',
  bold: false,
  children: '',
  testId: '',
  noMargin: false,
};

export default BodyText;
